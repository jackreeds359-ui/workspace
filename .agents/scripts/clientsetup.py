import base64
import hashlib
import json
import shutil
import subprocess
import tarfile
import tempfile
import urllib.request
from pathlib import Path

root = Path(__file__).resolve().parents[2]
url = 'https://registry.npmjs.org/prettier/-/prettier-3.10.1.tgz'
integrity = '70vp3ZUYoPlFbF9uiTdXHUUCGEIp7d4+6p+8DYbkm2jP7x/3i/paXVF6dopSI3zd/CEitrZN1rc4i85xWmmXlg=='
destination = root / '.tools/prettier/package'
if not shutil.which('node'):
    raise RuntimeError('Existing Node.js is required; no runtime will be installed')
if destination.exists():
    metadata = json.loads((destination / 'package.json').read_text())
    if metadata['name'] != 'prettier' or metadata['version'] != '3.10.1':
        raise RuntimeError('Existing formatter differs from approved version; refusing overwrite')
else:
    with urllib.request.urlopen(url, timeout=30) as response:
        data = response.read(12000000)
    if base64.b64encode(hashlib.sha512(data).digest()).decode() != integrity:
        raise RuntimeError('Prettier archive integrity mismatch')
    home = destination.parent
    home.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(dir=home) as folder:
        archive = Path(folder) / 'prettier.tgz'
        archive.write_bytes(data)
        with tarfile.open(archive) as package:
            package.extractall(folder, filter='data')
        (Path(folder) / 'package').rename(destination)
subprocess.run(['node', str(destination / 'bin/prettier.cjs'), '--version'], check=True, timeout=15)
