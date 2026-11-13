import argparse
import hashlib
import json
import mimetypes
import urllib.parse
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('destination', type=Path)
args = parser.parse_args()
root = Path(__file__).resolve().parents[2] / 'web/comp.school'
destination = args.destination.resolve()
if destination.exists() and any(destination.iterdir()):
    parser.error('destination must be absent or empty')
destination.mkdir(parents=True, exist_ok=True)
count = 0
for row in json.loads((root / 'inventory.json').read_text()):
    if not row.get('sha256'):
        continue
    url = urllib.parse.urlsplit(row['url'])
    relative = Path(urllib.parse.unquote(url.path).lstrip('/'))
    if relative.is_absolute() or '..' in relative.parts:
        raise ValueError('Unsafe URL path in inventory')
    expected = mimetypes.guess_type(url.path)[0]
    actual = row.get('type', '').split(';')[0]
    if actual == 'text/html' and expected and expected != 'text/html':
        continue
    if not url.path or url.path.endswith('/') or actual == 'text/html' and not relative.suffix:
        relative /= 'index.html'
    path = destination / url.hostname / relative
    if url.query:
        path = path.with_name(path.name + '.' + hashlib.sha256(url.query.encode()).hexdigest()[:12])
    data = (root / 'objects' / row['sha256']).read_bytes()
    if hashlib.sha256(data).hexdigest() != row['sha256']:
        raise ValueError('Object hash mismatch')
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(data)
    count += 1
print(json.dumps({'written': count, 'destination': str(destination), 'note': 'Static response files only; backend and external dependencies are not emulated.'}, indent=2))
