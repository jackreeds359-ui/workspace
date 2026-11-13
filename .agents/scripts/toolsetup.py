import concurrent.futures
import hashlib
import platform
import shutil
import subprocess
import sys
import tarfile
import tempfile
import zipfile
from pathlib import Path

root = Path(__file__).resolve().parents[2]
home = root / '.tools'
archives = [
    ('ghidra.zip', 'https://github.com/NationalSecurityAgency/ghidra/releases/download/Ghidra_12.2_build/ghidra_12.2_PUBLIC_20261016.zip', '2c2cd776db3c1f6a097ba418922378ac3649cadd5e844a6f5f088ae628a7be67', 'ghidra_12.2_PUBLIC', 'zip'),
    ('jdk.tar.gz', 'https://github.com/adoptium/temurin25-binaries/releases/download/jdk-25.0.5%2B8/OpenJDK25U-jdk_x64_linux_hotspot_25.0.5_8.tar.gz', '68982529869257d0ee6b824ec5aa270ff8b118bb438670da0b97ebdab178d7fb', 'jdk-25.0.5+8', 'tar'),
    ('llvmmingw.tar.xz', 'https://github.com/mstorsjo/llvm-mingw/releases/download/20261104/llvm-mingw-20261104-ucrt-ubuntu-22.04-x86_64.tar.xz', '919380403de87dca3c581c2053230cd298af5e891286628ba0613b7fed370926', 'llvm-mingw-20261104-ucrt-ubuntu-22.04-x86_64', 'tar')
]
mingw = home / archives[2][3] / 'bin/x86_64-w64-mingw32-clang++'


def run(args, timeout=300):
    subprocess.run(args, cwd=root, check=True, timeout=timeout)


def install(item):
    name, url, checksum, folder, kind = item
    destination = home / folder
    marker = destination / '.verified'
    if marker.exists() and marker.read_text().strip() == checksum:
        print('Already installed: ' + folder, flush=True)
        return
    if destination.exists():
        raise RuntimeError('Unverified existing installation: ' + str(destination))
    with tempfile.TemporaryDirectory(dir=home, prefix='download-') as temp:
        work = Path(temp)
        archive = work / name
        run(['curl', '--fail', '--location', '--retry', '2', '--connect-timeout', '20', '--max-time', '240', '--silent', '--show-error', '--output', str(archive), url])
        with archive.open('rb') as handle:
            actual = hashlib.file_digest(handle, 'sha256').hexdigest()
        if actual != checksum:
            raise RuntimeError('Checksum mismatch for ' + name)
        print('SHA-256 verified: ' + name, flush=True)
        if kind == 'tar':
            with tarfile.open(archive) as source:
                source.extractall(work, filter='data')
        else:
            with zipfile.ZipFile(archive) as source:
                for member in source.infolist():
                    path = Path(member.filename)
                    if path.is_absolute() or '..' in path.parts:
                        raise RuntimeError('Unsafe archive member')
                source.extractall(work)
                for member in source.infolist():
                    if not member.is_dir():
                        mode = member.external_attr >> 16 & 0o777
                        if mode:
                            (work / member.filename).chmod(mode)
        extracted = work / folder
        if not extracted.is_dir():
            raise RuntimeError('Missing installation directory: ' + folder)
        (extracted / '.verified').write_text(checksum + '\n')
        extracted.rename(destination)
        print('Installed: ' + folder, flush=True)


def main():
    if platform.system() != 'Linux' or platform.machine() != 'x86_64':
        raise RuntimeError('Approved artifacts require Linux x86-64')
    if sys.version_info < (3, 11):
        raise RuntimeError('Python 3.11 or newer is required')
    if platform.libc_ver()[0] != 'glibc':
        raise RuntimeError('Approved artifacts require glibc Linux')
    if not shutil.which('uv') or not shutil.which('curl'):
        raise RuntimeError('Existing uv and curl are required')
    home.mkdir(exist_ok=True)
    with concurrent.futures.ThreadPoolExecutor(max_workers=len(archives)) as pool:
        list(pool.map(install, archives))
    python = root / '.venv/bin/python'
    if not python.exists():
        run(['uv', 'venv', '--python', sys.executable, str(root / '.venv')])
    run(['uv', 'pip', 'sync', '--python', str(python), '--require-hashes', '--only-binary', ':all:', '--index-url', 'https://pypi.org/simple', str(root / '.agents/scripts/requirements.txt')])
    run([str(home / 'jdk-25.0.5+8/bin/java'), '-version'])
    run([str(mingw), '--version'])
    run([str(python), '-c', 'import importlib.metadata; [print(name + "=" + importlib.metadata.version(name)) for name in ("pefile", "capstone", "minidump")]'])
    print('Approved toolkit setup complete', flush=True)


if __name__ == '__main__':
    main()
