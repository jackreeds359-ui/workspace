import datetime
import hashlib
import json
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

root = Path(__file__).resolve().parents[2] / 'web/comp.school'
index = json.loads((root / 'client/dependencies.json').read_text())
inventory = json.loads((root / 'inventory.json').read_text())
priorfile = root / 'client/fetches.json'
prior = json.loads(priorfile.read_text()) if priorfile.exists() else []
attempted = {row['url'] for row in prior}
for row in inventory:
    if row.get('sha256') and row.get('status') == 200 and any(kind in row.get('type', '') for kind in ['javascript', 'ecmascript', 'css', 'wasm']):
        attempted.add(row['url'])
        attempted.add(row.get('final', row['url']))
allowed = {'cdn.jsdelivr.net', 'cdnjs.cloudflare.com'}


class Redirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, request, response, code, message, headers, url):
        host = urllib.parse.urlsplit(url).hostname or ''
        if host not in allowed and host != 'comp.school' and not host.endswith('.comp.school'):
            raise urllib.error.HTTPError(url, code, 'Out-of-scope redirect', headers, response)
        return super().redirect_request(request, response, code, message, headers, url)


opener = urllib.request.build_opener(Redirect())
count = 0
for target in index['targets']:
    url = target['url']
    parsed = urllib.parse.urlsplit(url)
    host = parsed.hostname or ''
    if target['captured'] or url in attempted or not (target.get('targetkind') == 'code' or parsed.path.endswith(('.wasm', '.css'))):
        continue
    if parsed.scheme != 'https' or parsed.query or parsed.username or parsed.password or parsed.port not in [None, 443]:
        continue
    if not (host in allowed or host == 'comp.school' or host.endswith('.comp.school')):
        continue
    if '/api/' in parsed.path or any(token in url for token in ['${', '{', '}', 'node_modules']):
        continue
    if count >= 150:
        break
    count += 1
    row = {'url': url, 'time': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'acquisition': 'GET directly evidenced client dependency', 'classification': target['classification']}
    try:
        with opener.open(urllib.request.Request(url, headers={'User-Agent': 'mc1h-readonly-client-archive/1.0', 'Accept-Encoding': 'identity'}), timeout=20) as response:
            data = response.read(25000001)
            row.update({'status': response.status, 'final': response.url, 'type': response.headers.get('Content-Type', '')})
            if len(data) > 25000000:
                row['error'] = 'Code resource exceeds 25MB limit; body not saved'
            elif b'<html' in data[:200].lower() or b'<!doctype html' in data[:200].lower():
                row['error'] = 'HTML fallback, not a JavaScript/worker module; not saved as code'
            else:
                digest = hashlib.sha256(data).hexdigest()
                (root / 'objects' / digest).write_bytes(data)
                row.update({'bytes': len(data), 'sha256': digest})
    except urllib.error.HTTPError as error:
        row.update({'status': error.code, 'error': str(error)})
    except Exception as error:
        row['error'] = str(error)
    inventory.append(row)
    prior.append(row)
    (root / 'inventory.json').write_text(json.dumps(inventory, indent=2) + '\n')
    priorfile.write_text(json.dumps(prior, indent=2) + '\n')
    print(json.dumps(row), flush=True)
    time.sleep(.7)
print(json.dumps({'requested': count, 'recorded_attempts': len(prior)}), flush=True)
