import datetime
import hashlib
import json
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from collections import deque
from html.parser import HTMLParser
from pathlib import Path

root = Path(__file__).resolve().parents[2] / 'web/comp.school'
root.mkdir(parents=True, exist_ok=True)
(root / 'objects').mkdir(exist_ok=True)
manifest = root / 'inventory.json'
entries = json.loads(manifest.read_text()) if manifest.exists() else []
seen = {entry['url'] for entry in entries}
queue = deque(['https://comp.school/', 'https://comp.school/robots.txt', 'https://comp.school/sitemap.xml'])
hosts = {'comp.school'}
edges = set()
references = set()
deferred = {}
limits = {'requests': 700, 'bytes': 160000000, 'perfile': 16000000}
size = sum(entry.get('bytes', 0) for entry in entries)
requests = 0
expanded = set()


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.items = []

    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        for key in ['src', 'href', 'poster']:
            if data.get(key):
                self.items.append((data[key], 'page' if tag == 'a' else 'asset'))


class Redirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, request, response, code, message, headers, url):
        if not inscope(url):
            raise urllib.error.HTTPError(url, code, 'External redirect not followed', headers, response)
        return super().redirect_request(request, response, code, message, headers, url)


def inscope(url):
    parsed = urllib.parse.urlsplit(url)
    return parsed.scheme == 'https' and (parsed.hostname == 'comp.school' or parsed.hostname.endswith('.comp.school'))


def add(value, source, kind='asset'):
    if not value or value.startswith(('data:', 'blob:', '#', 'javascript:', 'mailto:', 'tel:')):
        return
    url = urllib.parse.urljoin(source, value)
    parsed = urllib.parse.urlsplit(url)
    if parsed.scheme not in ['https', 'http']:
        return
    url = urllib.parse.urlunsplit((parsed.scheme, parsed.netloc, parsed.path or '/', parsed.query, ''))
    if not inscope(url):
        references.add(url)
        return
    host = parsed.hostname
    if host not in hosts:
        hosts.add(host)
        queue.appendleft('https://' + host + '/')
    edges.add((source, url, kind))
    if parsed.path.startswith('/api/') or any(word in parsed.path.lower() for word in ['logout', 'signout', 'reset-link', 'password', 'invite']):
        return
    if kind == 'host':
        return
    if any(token in url for token in ['${', '{', '}', '<', '>']):
        if url not in seen:
            deferred[url] = 'computed/template reference, not a literal fetchable asset URL'
        return
    if '/assets/svg/' in parsed.path:
        if url not in seen:
            deferred[url] = 'legacy diagram reference; 145 checked URLs returned HTML fallback, remaining references not requested'
        return
    if url not in seen and not parsed.query:
        if parsed.path.endswith(('.js', '.css', '.wasm', '.map')):
            queue.appendleft(url)
        else:
            queue.append(url)


def discover(url, data, content):
    if not any(kind in content for kind in ['html', 'javascript', 'css', 'json', 'xml', 'text/plain']):
        return
    digest = hashlib.sha256(data).hexdigest()
    if digest in expanded:
        return
    expanded.add(digest)
    text = data.decode('utf-8', errors='replace')
    for match in re.findall(r'https://(?:[a-zA-Z0-9-]+\.)*comp\.school(?=[/:"\s\'`<]|$)', text):
        add(match, url, 'host')
    if 'html' in content:
        parser = Links()
        parser.feed(text)
        for value, kind in parser.items:
            add(value, url, kind)
    if 'xml' in content and '<urlset' in text:
        for value in re.findall(r'<loc>(.*?)</loc>', text):
            add(value, url, 'page')
    for value in re.findall(r'["\']((?:\./|/assets/)[A-Za-z0-9_./-]+\.(?:js|css|json|svg|png|jpg|webp|woff2|wasm|mp3|ogg))["\']', text):
        add(value, url)
    for value in re.findall(r'url\(["\']?([^\)"\']+)', text):
        add(value, url)
    for value in re.findall(r'sourceMappingURL=([^\s*]+)', text):
        add(value, url, 'published-sourcemap')


def save():
    temp = manifest.with_suffix('.tmp')
    temp.write_text(json.dumps(entries, indent=2) + '\n')
    temp.replace(manifest)
    (root / 'links.json').write_text(json.dumps([{'from': a, 'to': b, 'kind': c} for a, b, c in sorted(edges)], indent=2) + '\n')
    (root / 'discovery.json').write_text(json.dumps({'time': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'hosts': sorted(hosts), 'external': sorted(references), 'limits': limits, 'requests': requests, 'bytes': size, 'deferred': deferred, 'remaining': sorted(set(queue) - seen), 'scope': 'GET public pages and directly referenced assets only; no cookies, API calls, guessed paths or exploit probing'}, indent=2) + '\n')


opener = urllib.request.build_opener(Redirect())
extra = root / 'observations.json'
if extra.exists():
    known = {(entry['url'], entry.get('status'), entry.get('sha256')) for entry in entries}
    for entry in json.loads(extra.read_text()):
        if (entry['url'], entry.get('status'), entry.get('sha256')) not in known:
            entries.append(entry)
            seen.add(entry['url'])
seeds = root / 'seeds.json'
if seeds.exists():
    for url in json.loads(seeds.read_text()):
        add(url, url, 'page')
for entry in entries:
    if entry.get('sha256'):
        discover(entry.get('final', entry['url']), (root / 'objects' / entry['sha256']).read_bytes(), entry.get('type', ''))
try:
    while queue and requests < limits['requests'] and size < limits['bytes']:
        url = queue.popleft()
        if url in seen:
            continue
        seen.add(url)
        entry = {'url': url, 'time': datetime.datetime.now(datetime.timezone.utc).isoformat()}
        requests += 1
        try:
            request = urllib.request.Request(url, headers={'User-Agent': 'mc1h-readonly-archive/1.0', 'Accept-Encoding': 'identity'})
            with opener.open(request, timeout=20) as response:
                data = response.read(limits['perfile'] + 1)
                entry.update({'status': response.status, 'final': response.url, 'type': response.headers.get('Content-Type', ''), 'headers': {key: response.headers[key] for key in ['Server', 'Content-Type', 'ETag', 'Last-Modified', 'Cache-Control', 'Content-Security-Policy', 'X-Content-Type-Options'] if response.headers.get(key)}})
                if len(data) > limits['perfile']:
                    entry['error'] = 'file size limit exceeded; not saved'
                else:
                    digest = hashlib.sha256(data).hexdigest()
                    (root / 'objects' / digest).write_bytes(data)
                    entry.update({'bytes': len(data), 'sha256': digest})
                    size += len(data)
                    discover(response.url, data, entry['type'])
        except urllib.error.HTTPError as error:
            entry.update({'status': error.code, 'error': str(error)})
        except Exception as error:
            entry['error'] = str(error)
        entries.append(entry)
        print(json.dumps({'n': requests, 'url': url, 'status': entry.get('status'), 'bytes': entry.get('bytes'), 'error': entry.get('error')}), flush=True)
        save()
        time.sleep(0.6)
finally:
    save()
