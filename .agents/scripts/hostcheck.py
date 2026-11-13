import concurrent.futures
import datetime
import hashlib
import json
import re
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

root = Path(__file__).resolve().parents[2] / 'web/comp.school'
dns = json.loads((root / 'dns.json').read_text())
hosts = sorted({row['hostname'] for row in dns['records'] if row['dns'].get('A', {}).get('answers') and re.fullmatch(r'[a-z0-9.-]+', row['hostname'])})
lock = threading.Lock()
last = 0.0


class Redirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, request, response, code, message, headers, url):
        parsed = urllib.parse.urlsplit(url)
        if parsed.scheme != 'https' or parsed.port not in [None, 443] or not (parsed.hostname == 'comp.school' or parsed.hostname.endswith('.comp.school')):
            raise urllib.error.HTTPError(url, code, 'External redirect not followed', headers, response)
        return super().redirect_request(request, response, code, message, headers, url)


def check(host):
    global last
    with lock:
        time.sleep(max(0, .65 - (time.monotonic() - last)))
        last = time.monotonic()
    url = 'https://' + host + '/'
    result = {'url': url, 'time': datetime.datetime.now(datetime.timezone.utc).isoformat()}
    try:
        opener = urllib.request.build_opener(Redirect())
        request = urllib.request.Request(url, headers={'User-Agent': 'mc1h-readonly-map/1.0', 'Accept-Encoding': 'identity'})
        try:
            response = opener.open(request, timeout=10)
        except urllib.error.HTTPError as error:
            response = error
        with response:
            data = response.read(1048577)
            title = re.search(rb'<title[^>]*>(.*?)</title>', data, re.I | re.S)
            result.update({'status': response.code, 'final': response.url, 'type': response.headers.get('Content-Type', ''), 'bytes_read': len(data), 'truncated': len(data) > 1048576, 'sha256_read_body': hashlib.sha256(data).hexdigest(), 'title': re.sub(r'\s+', ' ', title.group(1).decode('utf-8', errors='replace')).strip()[:160] if title else None})
    except Exception as error:
        result['error'] = str(error)
    print(json.dumps({'url': url, 'status': result.get('status'), 'error': result.get('error')}), flush=True)
    return result


with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
    results = list(pool.map(check, hosts[:110]))
report = {'time': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'basis': 'Root-only unauthenticated GET for public-DNS-resolving source-evidenced hostnames. No cookies, API calls or recursive preview crawling.', 'limits': {'hosts': 110, 'workers': 2, 'start_interval_seconds': .65, 'timeout_seconds': 10, 'body_bytes': 1048576}, 'eligible': len(hosts), 'checked': len(results), 'results': results, 'unqueried_due_to_cap': hosts[110:]}
(root / 'hostchecks.json').write_text(json.dumps(report, indent=2) + '\n')
print(json.dumps({'checked': len(results), 'eligible': len(hosts)}), flush=True)
