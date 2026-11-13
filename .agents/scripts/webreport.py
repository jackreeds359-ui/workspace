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
(root / 'codeindex.json').write_text(json.dumps({'scripts': list(scripts.values()), 'api': api, 'paths': paths, 'dependency_markers': dependencies, 'hostnames': sorted(hostnames), 'source_map_references': sourcecount, 'limitations': 'String evidence only; not server-source recovery or verified API contracts.'}, indent=2) + '\n')
dns = json.loads((root / 'dns.json').read_text())
ct = json.loads((root / 'certificates.json').read_text())
discovery = json.loads((root / 'discovery.json').read_text())
summary = {'time': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'url_records': len(rows), 'unique_urls': len(latest), 'saved_response_records': sum(bool(row.get('sha256')) for row in rows), 'unique_objects': len(objects), 'unique_bytes': sum((root / 'objects' / digest).stat().st_size for digest in objects), 'unique_javascript': len(scripts), 'unique_api_literals': len({row['path'] for row in api}), 'unique_route_literals': len({row['path'] for row in paths}), 'dns_names': len(dns['records']), 'html_asset_mismatches': mismatches, 'remaining': discovery['remaining'], 'deferred_count': len(discovery.get('deferred', {})), 'source_map_references': sourcecount, 'http_statuses': dict(collections.Counter(str(row.get('status', 'transport-error')) for row in rows))}
(root / 'summary.json').write_text(json.dumps(summary, indent=2) + '\n')
lines = ['# comp.school: read-only web archive and map', '', '## Coverage', '', f'Captured at {summary["time"]}. This is a bounded browser-delivered-code and public-response archive, not a complete server or private-data dump.', '', f'- {len(rows)} URL response/error records; {len(objects)} unique saved response objects ({summary["unique_bytes"]:,} bytes).', f'- {len(scripts)} distinct JavaScript objects; {summary["unique_api_literals"]} distinct API-string variants; {summary["unique_route_literals"]} route/path string candidates.', f'- {len(dns["records"])} publicly evidenced hostnames queried through public DNS.', f'- {len(mismatches)} asset URLs returned HTML rather than the expected file type. They are preserved as observations, not counted as working assets.', f'- {len(discovery["remaining"])} queued URLs remain; {len(discovery.get("deferred", {}))} references were deliberately deferred, with reasons in discovery.json.', '', '## Host and application map', '', '| Host | Root result observed | Final location |', '| --- | --- | --- |']
for host in sorted(set(discovery['hosts']) | hostnames):
    entry = latest.get('https://' + host + '/')
    status = str(entry.get('status', 'transport error')) if entry else 'not fetched'
    final = entry.get('final', entry.get('error', '')) if entry else ''
    lines.append('| ' + host + ' | ' + status + ' | ' + final + ' |')
lines += ['', '### Navigation and application families', '', '- `comp.school/`: login, dashboard and paper/topic menus. Normal login succeeded; only sanitized main-menu links are archived.', '- `/exams/`, `/recall/`, `/code/`: separate app shells and client bundles. Legacy subdomain root redirects were observed for these apps.', '- Games/careers are linked through `/exams/games/careers` and `/exams/games/games-room`; client helpers also reference lobby and crossword routes.', '- Admin, homework, marking, printouts, issues and self-assessment have separately delivered public shells/bundles. Fetching a login shell does not establish permission to its private records.', '- Topic, paper, subtopic and activity/session state often live in query parameters or client state. A route family is not a separate recoverable server HTML page for every possible state.', '', '### API and infrastructure evidence', '', '- `codeindex.json` maps client API/path literals to the source URL, object hash and character offset. Nearby method labels are hints only.', '- `analysis.json` records manually inspected routing and client fetch methods. No API record enumeration, credential reset, enrollment, grading or learning-progress submission was performed.', '- Cloudflare response headers and public edge addresses were observed. They do not identify the origin server, database, deployment repository or backend implementation.', '- GitHub links in the main bundle referred to third-party libraries, not an identified application-source repository.', '', '## Files and reproduction', '', '- `inventory.json`: URL, final URL, HTTP status, content type, timestamp, selected non-secret headers, byte count and SHA-256.', '- `objects/<sha256>`: exact public response bodies. Identical content is stored once.', '- `links.json`, `navigation.json`: discovered reference graph and sanitized normal-navigation links.', '- `dns.json`, `certificates.json`: passive hostname and DNS evidence, including historical preview names and source/pagination limitations.', '- `codeindex.json`, `analysis.json`, `summary.json`: code/reference inventory, supported architecture conclusions and coverage metrics.', '', 'From the repository root:', '', '```bash', 'python3 .agents/scripts/webrestore.py /path/to/empty/destination', '```', '', 'The restore command verifies hashes and recreates host/path files. It omits HTML fallbacks masquerading as assets. This is not a runnable offline replica: backend behavior, protected data and external runtimes/media are not emulated.', '', 'The collector can resume with `python3 .agents/scripts/webdump.py`; review its limits and scope first. It sends no authentication credentials and performs only public GETs. It prioritizes code, avoids repeating identical response expansions, and does not request `/api/` endpoints, guessed source maps, hidden files, external origins or credential/action paths.', '', '## Explicit limits and exclusions', '', '- Private server-side source was not obtained. Browser access supplies responses and client code, not arbitrary backend files. An owner-provided repository/deployment export is required for that source.', '- No claim of all subdomains: certificate transparency and client links do not expose unpublished names. CT pagination errors/limits are recorded rather than treated as complete discovery.', '- No published source-map references were found in collected code. Original TS/TSX files, comments, source tree and build manifests were not recovered.', '- 145 checked legacy `/assets/svg/` references returned fallback HTML; remaining references in that legacy namespace are listed but not repeatedly fetched. Computed/template references are not treated as literal fetchable URLs.', '- No account history, rosters, submissions, licensed API media, credentials, cookies, session storage or authorization headers are included. Normal account navigation is not a bulk-data export.', '- Third-party CDN scripts, fonts, media and runtime dependencies are inventoried where referenced but not mirrored outside the requested domain.', '- The site can change during collection; each response has its own timestamp and hash. This is not a transactionally frozen deployment.', '', '## Next-agent continuity', '', 'Read the current `.agents/state/` briefings at startup. Continue from the saved inventory and explicit remaining/deferred lists rather than restarting the crawl. Keep status, handoff, next, progress and changedfiles accurate, then run the existing updater to verify `handoff.zip`, commit and push at intervals of no more than five minutes during active work. Never put supplied credentials or browser auth state in the archive. Leave exact verification, limitations and next actions for the following agent, and cancel checkpoint wakes when idle.', '']
(root / 'README.md').write_text('\n'.join(lines))
print(json.dumps({key: value for key, value in summary.items() if key not in ['html_asset_mismatches', 'remaining']}, indent=2))
