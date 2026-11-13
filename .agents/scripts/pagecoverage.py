import collections
import datetime
import hashlib
import json
import re
import urllib.parse
from html.parser import HTMLParser
from pathlib import Path

root = Path(__file__).resolve().parents[2] / 'web/comp.school'
client = root / 'client'
inventory = json.loads((root / 'inventory.json').read_text())
runtime = json.loads((root / 'runtime.json').read_text())
bundles = json.loads((client / 'bundles.json').read_text())
graph = json.loads((client / 'dependencies.json').read_text())
byurl = {}
latest = {}
for row in inventory:
    latest[row['url']] = row
    if row.get('sha256') and row.get('status') == 200 and re.search(r'javascript|ecmascript|css|wasm', row.get('type', '')):
        for url in {row['url'], row.get('final', row['url'])}:
            byurl[url] = row


class Scripts(HTMLParser):
    def __init__(self):
        super().__init__()
        self.scripts = []

    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if tag == 'script' and data.get('src'):
            self.scripts.append({'url': data['src'], 'type': data.get('type', 'classic')})


shells = []
for row in inventory:
    if row.get('sha256') and 'text/html' in row.get('type', ''):
        url = row.get('final', row['url'])
        if not urllib.parse.urlsplit(url).path.endswith('/'):
            continue
        parser = Scripts()
        parser.feed((root / 'objects' / row['sha256']).read_text(errors='replace'))
        if parser.scripts:
            shells.append({'url': url, 'sha256': row['sha256'], 'scripts': [{'url': urllib.parse.urljoin(url, item['url']), 'type': item['type']} for item in parser.scripts]})
adjacency = collections.defaultdict(list)
for edge in graph['dependencies']:
    if edge.get('sourceurl') and edge.get('targeturl') and edge.get('kind') in ['static', 'dynamic', 'preload', 'worker', 'importScripts']:
        adjacency[edge['sourceurl']].append(edge)


def closure(urls):
    seen = set()
    pending = list(urls)
    missing = {}
    kinds = collections.defaultdict(set)
    while pending:
        source = pending.pop()
        if source in seen:
            continue
        seen.add(source)
        for edge in adjacency.get(source, []):
            target = edge['targeturl']
            kinds[edge['kind']].add(target)
            if target in byurl:
                if re.search(r'javascript|ecmascript', byurl[target]['type']):
                    pending.append(target)
            else:
                attempt = latest.get(target, {})
                missing[target] = {'url': target, 'kind': edge['kind'], 'status': attempt.get('status'), 'reason': attempt.get('error') or edge.get('reason'), 'source': source}
    return seen, kinds, list(missing.values())


pages = []
usage = collections.defaultdict(set)
for index, row in enumerate(runtime):
    observed = row.get('observed', {})
    url = observed.get('url', row['url'])
    parsed = urllib.parse.urlsplit(url)
    entries = observed.get('entryScripts')
    entrybasis = 'Browser document script[src] observed'
    if entries is None:
        matches = [shell for shell in shells if urllib.parse.urlsplit(shell['url']).netloc == parsed.netloc and parsed.path.startswith(urllib.parse.urlsplit(shell['url']).path)]
        shell = max(matches, key=lambda item: len(item['url'])) if matches else None
        entries = shell['scripts'] if shell else []
        entrybasis = 'Matched captured app-shell script tags; not a per-state DOM observation' if shell else 'No entry evidence'
    captured = []
    missingresources = []
    for resource in row['resources']:
        if resource['url'] in byurl:
            item = byurl[resource['url']]
            captured.append({'url': resource['url'], 'type': resource.get('type'), 'sha256': item['sha256'], 'bytes': item['bytes']})
            usage[item['sha256']].add(index)
        else:
            missingresources.append({'url': resource['url'], 'type': resource.get('type'), 'status': resource.get('status'), 'reason': resource.get('capture_error') or 'Response not captured as code'})
    seen, kinds, missingdeps = closure([item['url'] for item in entries] + [item['url'] for item in captured if item['type'] == 'Script'])
    warnings = []
    if observed.get('login'):
        warnings.append('Login shell; feature access not established')
    if observed.get('loading'):
        warnings.append('App loading state remained')
    if observed.get('accessGate'):
        warnings.append('UI access restriction detected; not bypassed')
    if row.get('errors'):
        warnings.append('JavaScript exceptions observed')
    if any(action['result'] != 'clicked' for action in row.get('actions', [])):
        warnings.append('At least one requested navigation control was not found')
    pages.append({'id': index, 'label': row['label'], 'requested': row['url'], 'observed': url, 'time': row['time'], 'entries': entries, 'entrybasis': entrybasis, 'network_code': captured, 'missing_network_code': missingresources, 'dependency_module_urls': sorted(seen), 'dependency_edges_by_kind': {key: sorted(value) for key, value in kinds.items()}, 'unavailable_dependencies': missingdeps, 'actions': row.get('actions', []), 'blocked_nonread_requests': len(row['blocked']), 'worker_targets': row.get('workerTargets', []), 'service_worker_scripts': row.get('serviceWorkerScripts', []), 'warnings': warnings, 'errors': row.get('errors', [])})
shared = [{'sha256': digest, 'pages': sorted(indices), 'count': len(indices), 'urls': sorted({item['url'] for page in pages for item in page['network_code'] if item['sha256'] == digest})} for digest, indices in usage.items() if len(indices) > 1]
missing = []
for target in graph['targets']:
    if target.get('targetkind') == 'code' and target['url'] not in byurl:
        attempt = latest.get(target['url'], {})
        missing.append({'url': target['url'], 'kinds': sorted({item['kind'] for item in target['references']}), 'status': attempt.get('status'), 'reason': attempt.get('error') or target.get('resolution'), 'references': target['references']})
unresolved = graph['unresolved']
report = {'time': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'scope': 'Browser-observed safe navigation states for the supplied account plus literal dependency closure of captured production and known-live preview bundles. Not all roles, unpublished hosts or arbitrary state combinations.', 'pages': pages, 'shared': shared, 'missing_literal_code': missing, 'unresolved_references': unresolved, 'summary': {'observations': len(pages), 'unique_requested_urls': len({row['requested'] for row in pages}), 'unique_observed_urls': len({row['observed'] for row in pages}), 'explicit_entry_observations': sum('Browser document' in row['entrybasis'] for row in pages), 'network_code_objects': len(usage), 'shared_code_objects': len(shared), 'parsed_code_objects': bundles['summary']['parsed'], 'formatted_and_preserved': sum(item.get('format', {}).get('status') == 'passed' for item in bundles['assets']), 'unavailable_literal_code_urls': len(missing), 'unresolved_by_kind': dict(collections.Counter(item['kind'] for item in unresolved)), 'warnings': dict(collections.Counter(warning for row in pages for warning in row['warnings'])), 'blocked_nonread_requests': sum(len(row['blocked']) for row in runtime)}}
(client / 'pages.json').write_text(json.dumps(report, indent=2) + '\n')
lines = ['# Client JavaScript coverage', '', 'This extends the original public crawl with actual browser network captures, AST dependency extraction and readable copies. It is not an original-source rebuild or proof of every possible application state.', '', '## Summary', '', *['- ' + key + ': ' + str(value) for key, value in report['summary'].items() if not isinstance(value, dict)], '', '## Navigation states', '', '| ID | State | Observed URL | Network code objects | Notes |', '| --- | --- | --- | --- | --- |']
for row in pages:
    lines.append('| ' + str(row['id']) + ' | ' + row['label'] + ' | ' + row['observed'] + ' | ' + str(len(row['network_code'])) + ' | ' + '; '.join(row['warnings']) + ' |')
lines += ['', '## Evidence files', '', '- bundles.json: original hashes/URLs, readable paths, parser and semantic-format results.', '- dependencies.json: static imports, dynamic imports, Vite preloads, workers and asset-literal evidence with source offsets.', '- pages.json: page -> entry scripts -> observed code -> dependency closure, shared objects, unavailable and computed references.', '- readable/: formatted copies keyed by original SHA-256. Originals remain unchanged in ../objects/.', '- fetches.json: actual results for directly referenced additional modules, workers and runtimes.', '', '## Limits', '', '- Non-read requests were blocked except the explicitly requested login. This prevents saving, submissions and room creation; affected features are not asserted to work end to end.', '- No run/save/submit/join controls were used. Worker/runtime dependencies may be statically captured without instantiating them.', '- Login/restricted shells, loading states, missing controls and JavaScript exceptions are reported per state, not counted as successful feature execution.', '- Concrete missing module URLs and computed/bare specifiers remain explicit. Default library worker filenames returning HTML are not mislabeled as captured modules.', '- No original symbol names, TS/TSX source tree or private backend source is reconstructed by formatting. No personal account payloads, credentials or cookies are archived.', '- Preview coverage is limited to previously source-evidenced HTTP200 roots and code references discoverable from their delivered entries; arbitrary historical deploys and other roles are not covered.', '', '## Reproduction', '', 'Run python3 .agents/scripts/clientsetup.py to restore the exact approved formatter, node .agents/scripts/jsindex.mjs for graph and readable extraction, then python3 .agents/scripts/pagecoverage.py. Browser capture requires the preinstalled agent-browser/Chrome and an explicit safe navigation plan; login data is supplied through stdin only and must never be saved.', '']
(client / 'README.md').write_text('\n'.join(lines))
print(json.dumps(report['summary'], indent=2))

apps = collections.defaultdict(list)
for bundle in bundles['assets']:
    for url in bundle['originalurls']:
        host = urllib.parse.urlsplit(url).hostname or 'unknown'
        apps[host].append({'url': url, 'sha256': bundle['sha256'], 'readable': bundle['readable'], 'parse': bundle['parse']['status'], 'format': bundle['format']['status']})
appdir = client / 'apps'
appdir.mkdir(exist_ok=True)
for host, items in sorted(apps.items()):
    text = ['# ' + host, '', '| Original URL | Readable copy | Parser / semantic-format result |', '| --- | --- | --- |']
    for item in sorted(items, key=lambda value: value['url']):
        text.append('| ' + item['url'] + ' | [' + item['sha256'][:12] + '](../' + item['readable'] + ') | ' + item['parse'] + ' / ' + item['format'] + ' |')
    (appdir / (host + '.md')).write_text('\n'.join(text) + '\n')
