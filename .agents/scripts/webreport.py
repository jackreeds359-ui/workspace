import collections
import datetime
import hashlib
import json
import mimetypes
import re
import urllib.parse
from pathlib import Path

root = Path(__file__).resolve().parents[2] / 'web/comp.school'
rows = json.loads((root / 'inventory.json').read_text())
objects = {row['sha256'] for row in rows if row.get('sha256')}
latest = {row['url']: row for row in rows}
scripts = {}
api = []
paths = []
dependencies = {}
hostnames = set()
origins = {}
sourcecount = 0
mismatches = []
for row in rows:
    expected = mimetypes.guess_type(urllib.parse.urlsplit(row['url']).path)[0]
    if expected and expected != 'text/html' and row.get('type', '').startswith('text/html'):
        mismatches.append(row['url'])
    if row.get('sha256') and 'javascript' in row.get('type', ''):
        scripts.setdefault(row['sha256'], row)
for digest, row in scripts.items():
    text = (root / 'objects' / digest).read_text(errors='replace')
    sourcecount += len(re.findall(r'sourceMappingURL=', text))
    for origin in set(re.findall(r'https?://[A-Za-z0-9_.:-]+', text)):
        origins.setdefault(origin, []).append(row['url'])
    for match in re.finditer(r'["\'`](/api/[A-Za-z0-9_/?=&${}.:-]+)["\'`]', text):
        around = text[max(0, match.start() - 100):match.end() + 280]
        methods = re.findall(r'method\s*:\s*["\']([A-Z]+)["\']', around)
        api.append({'path': match.group(1), 'methods_near_reference': sorted(set(methods)), 'source': row['url'], 'sha256': digest, 'offset': match.start(), 'evidence': 'public client string; nearby methods are hints, not verified server contracts'})
    for match in re.finditer(r'["\'](/(?:code|recall|exams|games|essentials|python|sql|editor|coursework|yearpapers|btec|careers)[A-Za-z0-9_./:-]*)["\']', text):
        value = match.group(1)
        if '/assets/' in value or '/favicon/' in value or Path(value).suffix:
            continue
        paths.append({'path': value, 'source': row['url'], 'offset': match.start(), 'evidence': 'client string; not necessarily an independently routable page'})
    for name, pattern in {'React': 'react.production', 'React Router': 'reactrouter.com', 'Vite': '__vite__', 'Monaco editor': 'monaco', 'Pyodide': 'pyodide', 'sql.js': 'sql.js', 'React Markdown': 'react-markdown', 'KaTeX': 'katex'}.items():
        if pattern in text:
            dependencies.setdefault(name, []).append(row['url'])
    hostnames.update(re.findall(r'(?<![A-Za-z0-9.-])(?:[a-z0-9-]+\.)*comp\.school(?![A-Za-z0-9.-])', text))
(root / 'codeindex.json').write_text(json.dumps({'scripts': list(scripts.values()), 'api': api, 'paths': paths, 'dependency_markers': dependencies, 'hostnames': sorted(hostnames), 'origin_references': origins, 'source_map_references': sourcecount, 'limitations': 'String evidence only; not server-source recovery or verified API contracts.'}, indent=2) + '\n')
dns = json.loads((root / 'dns.json').read_text())
ct = json.loads((root / 'certificates.json').read_text())
discovery = json.loads((root / 'discovery.json').read_text())
checksfile = root / 'hostchecks.json'
checks = json.loads(checksfile.read_text()) if checksfile.exists() else {'results': []}
summary = {'time': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'url_records': len(rows), 'unique_urls': len(latest), 'saved_response_records': sum(bool(row.get('sha256')) for row in rows), 'unique_objects': len(objects), 'unique_bytes': sum((root / 'objects' / digest).stat().st_size for digest in objects), 'unique_javascript': len(scripts), 'unique_api_literals': len({row['path'] for row in api}), 'unique_route_literals': len({row['path'] for row in paths}), 'dns_names': len(dns['records']), 'html_asset_mismatches': mismatches, 'remaining': discovery['remaining'], 'deferred_count': len(discovery.get('deferred', {})), 'source_map_references': sourcecount, 'http_statuses': dict(collections.Counter(str(row.get('status', 'transport-error')) for row in rows))}
summary['dns_a_statuses'] = dict(collections.Counter(row['dns'].get('A', {}).get('status', 'missing') for row in dns['records']))
summary['root_checks'] = len(checks['results'])
summary['root_http_statuses'] = dict(collections.Counter(str(row.get('status', 'transport-error')) for row in checks['results']))
summary['ct_stop_reason'] = ct.get('stop_reason')
(root / 'summary.json').write_text(json.dumps(summary, indent=2) + '\n')
lines = ['# comp.school: read-only web archive and map', '', '## Coverage', '', f'Captured at {summary["time"]}. This is a bounded browser-delivered-code and public-response archive, not a complete server or private-data dump.', '', f'- {len(rows)} URL response/error records; {len(objects)} unique saved response objects ({summary["unique_bytes"]:,} bytes).', f'- {len(scripts)} distinct JavaScript objects; {summary["unique_api_literals"]} distinct API-string variants; {summary["unique_route_literals"]} route/path string candidates.', f'- {len(dns["records"])} publicly evidenced hostnames queried through public DNS.', f'- {len(mismatches)} asset URLs returned HTML rather than the expected file type. They are preserved as observations, not counted as working assets.', f'- {len(discovery["remaining"])} queued URLs remain; {len(discovery.get("deferred", {}))} references were deliberately deferred, with reasons in discovery.json.', '', '## Host and application map', '', '| Host | Root result observed | Final location |', '| --- | --- | --- |']
for host in sorted(set(discovery['hosts']) | hostnames):
    entry = latest.get('https://' + host + '/')
    status = str(entry.get('status', 'transport error')) if entry else 'not fetched'
    final = entry.get('final', entry.get('error', '')) if entry else ''
    lines.append('| ' + host + ' | ' + status + ' | ' + final + ' |')
lines += ['', '### Navigation and application families', '', '- `comp.school/`: login, dashboard and paper/topic menus. Normal login succeeded; only sanitized main-menu links are archived.', '- `/exams/`, `/recall/`, `/code/`: separate app shells and client bundles. Legacy subdomain root redirects were observed for these apps.', '- Games/careers are linked through `/exams/games/careers` and `/exams/games/games-room`; client helpers also reference lobby and crossword routes.', '- Admin, homework, marking, printouts, issues and self-assessment have separately delivered public shells/bundles. Fetching a login shell does not establish permission to its private records.', '- Topic, paper, subtopic and activity/session state often live in query parameters or client state. A route family is not a separate recoverable server HTML page for every possible state.', '', '### API and infrastructure evidence', '', '- `codeindex.json` maps client API/path literals to the source URL, object hash and character offset. Nearby method labels are hints only.', '- `analysis.json` records manually inspected routing and client fetch methods. No API record enumeration, credential reset, enrollment, grading or learning-progress submission was performed.', '- Cloudflare response headers and public edge addresses were observed. They do not identify the origin server, database, deployment repository or backend implementation.', '- GitHub links in the main bundle referred to third-party libraries, not an identified application-source repository.', '', '## Files and reproduction', '', '- `inventory.json`: URL, final URL, HTTP status, content type, timestamp, selected non-secret headers, byte count and SHA-256.', '- `objects/<sha256>`: exact public response bodies. Identical content is stored once.', '- `links.json`, `navigation.json`: discovered reference graph and sanitized normal-navigation links.', '- `dns.json`, `certificates.json`: passive hostname and DNS evidence, including historical preview names and source/pagination limitations. `hostchecks.json` records unauthenticated root reachability checks for resolving names; known-live preview entry bundles and their literal code dependencies are included in the client extension; other historical deploys remain unmirrored.', '- `codeindex.json`, `analysis.json`, `summary.json`: code/reference inventory, supported architecture conclusions and coverage metrics. `HOSTS.md` and `ROUTES.md` provide readable hostname and route-candidate tables.', '', 'From the repository root:', '', '```bash', 'python3 .agents/scripts/webrestore.py /path/to/empty/destination', '```', '', 'The restore command verifies hashes and recreates host/path files. It omits HTML fallbacks masquerading as assets. This is not a runnable offline replica: backend behavior, protected data and external runtimes/media are not emulated.', '', 'The original public collector can resume with `python3 .agents/scripts/webdump.py`; review its limits and scope first. That collector sends no authentication credentials and performs only public GETs. The separate guarded browser audit uses normal login and archives code responses only, not account/API data. It prioritizes code, avoids repeating identical response expansions, and does not request `/api/` endpoints, guessed source maps, hidden files, external origins or credential/action paths.', '', '## Explicit limits and exclusions', '', '- Private server-side source was not obtained. Browser access supplies responses and client code, not arbitrary backend files. An owner-provided repository/deployment export is required for that source.', '- No claim of all subdomains: certificate transparency and client links do not expose unpublished names. CT pagination errors/limits are recorded rather than treated as complete discovery.', '- No published source-map references were found in collected code. Original TS/TSX files, comments, source tree and build manifests were not recovered.', '- 145 checked legacy `/assets/svg/` references returned fallback HTML; remaining references in that legacy namespace are listed but not repeatedly fetched. Computed/template references are not treated as literal fetchable URLs.', '- No account history, rosters, submissions, licensed API media, credentials, cookies, session storage or authorization headers are included. Normal account navigation is not a bulk-data export.', '- Selected directly referenced third-party JS/WASM runtime dependencies were captured for client-code completeness. Fonts, unrelated external media and arbitrary runtime-loaded packages remain outside the snapshot; exact captured URLs are in inventory.json.', '- The site can change during collection; each response has its own timestamp and hash. This is not a transactionally frozen deployment.', '', '## Next-agent continuity', '', 'Read the current `.agents/state/` briefings at startup. Continue from the saved inventory and explicit remaining/deferred lists rather than restarting the crawl. Keep status, handoff, next, progress and changedfiles accurate, then run the existing updater to verify `handoff.zip`, commit and push at intervals of no more than five minutes during active work. Never put supplied credentials or browser auth state in the archive. Leave exact verification, limitations and next actions for the following agent, and cancel checkpoint wakes when idle.', '']
extension = root / 'client/pages.json'
if extension.exists():
    coverage = json.loads(extension.read_text())['summary']
    lines += ['## Extended client-code extraction', '', 'See client/README.md for the current page-level evidence, client/apps/ for per-host source/readable indexes, and client/pages.json for entry -> observed/shared -> static/dynamic/preload/worker relationships.', '', '- Browser page/state observations: ' + str(coverage['observations']), '- Request-owner-attributed observations: ' + str(coverage['request_attributed_observations']), '- Parsed and structurally verified readable JavaScript objects: ' + str(coverage['formatted_and_preserved']), '- Missing concrete import/preload/worker module URLs: ' + str(coverage['missing_concrete_import_preload_worker_targets']), '- Remaining computed/bare dependency sites: ' + str(coverage['unresolved_unique_sites']), '', 'These counts describe the captured account/routes/deployments, not universal coverage of all roles, unpublished routes or arbitrary dynamically generated programs. Original bytes remain in objects/; readable copies retain minified identifiers and are not recovered original TS/TSX source.', '']
(root / 'README.md').write_text('\n'.join(lines))
print(json.dumps({key: value for key, value in summary.items() if key not in ['html_asset_mismatches', 'remaining']}, indent=2))

results = {urllib.parse.urlsplit(row['url']).hostname: row for row in checks['results']}
hostlines = ['# Source-evidenced hostnames', '', 'DNS and root HTTP checks are separate observations. NXDOMAIN does not erase a historical certificate record. An HTTP response does not establish backend access or content completeness.', '', '| Hostname | A query | Root HTTP | Title / error |', '| --- | --- | --- | --- |']
for row in dns['records']:
    result = results.get(row['hostname'], {})
    detail = result.get('title') or result.get('error') or ''
    hostlines.append('| ' + row['hostname'] + ' | ' + row['dns'].get('A', {}).get('status', 'missing') + ' | ' + str(result.get('status', 'not checked')) + ' | ' + detail.replace('|', '/') + ' |')
(root / 'HOSTS.md').write_text('\n'.join(hostlines) + '\n')
routegroups = {}
for item in paths:
    routegroups.setdefault(item['path'], set()).add(item['source'])
routelines = ['# Client route/path candidates', '', 'These strings come from delivered JavaScript. They are not a claim that every path is a live independently rendered page. Actual normal-menu navigation is recorded separately in navigation.json.', '', '| Path literal | Example source bundle |', '| --- | --- |']
for value, sources in sorted(routegroups.items()):
    routelines.append('| `' + value + '` | ' + sorted(sources)[0] + ' |')
(root / 'ROUTES.md').write_text('\n'.join(routelines) + '\n')
