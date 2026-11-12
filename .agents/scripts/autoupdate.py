import datetime
import hashlib
import json
import os
import subprocess
import sys
import zipfile
from pathlib import Path

cache = {".git", "node_modules", ".venv", "venv", "__pycache__", ".next", ".cache", "coverage"}
output = {"dist", "build"}
secret = {".env", ".npmrc", ".netrc", ".git-credentials", "credentials.json", "secrets.json", "token.json", "auth.json", "handoff.zip", "handoff.zip.tmp"}
template = {".env.example", ".env.sample", ".env.template"}
extension = {".pem", ".key", ".p12", ".pfx", ".jks", ".keystore"}
docs = ["status.md", "handoff.md", "next.md", "progress.md"]
volatile = {".agents/state/checkpoint.json", ".agents/state/manifest.json", ".agents/state/autoupdate.log"}


def run(root, args, timeout=30, check=True):
    result = subprocess.run(["git", *args], cwd=root, capture_output=True, text=True, timeout=timeout)
    if check and result.returncode:
        raise RuntimeError(result.stderr.strip() or "git " + args[0] + " failed")
    return result


def out(root, args):
    return run(root, args).stdout.strip()


def listed(root, args):
    return [name for name in run(root, ["ls-files", "-z", *args]).stdout.split("\0") if name]


def allowed(root, name, tracked):
    path = root / name
    lower = path.name.lower()
    parts = {part.lower() for part in Path(name).parts[:-1]}
    if path.is_symlink() or not path.is_file():
        return False
    if parts & cache or not tracked and parts & output:
        return False
    if lower in secret or path.suffix.lower() in extension:
        return False
    return not lower.startswith(".env.") or lower in template


def digest(root, names):
    total = hashlib.sha256()
    for name in names:
        if name in volatile:
            continue
        with (root / name).open("rb") as handle:
            total.update(name.encode() + b"\0" + hashlib.file_digest(handle, "sha256").digest())
    return total.hexdigest()


def recorded(mark):
    try:
        return json.loads(mark.read_text()).get("digest")
    except (OSError, ValueError, AttributeError):
        return None


def pack(root, names):
    temp = root / "handoff.zip.tmp"
    with zipfile.ZipFile(temp, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
        for name in names:
            archive.write(root / name, name)
    os.replace(temp, root / "handoff.zip")


def verify(root):
    with zipfile.ZipFile(root / "handoff.zip") as archive:
        bad = archive.testzip()
        if bad:
            raise RuntimeError("invalid ZIP: " + bad)
        return len(archive.namelist())


def stage(root, state):
    changed = state / "changedfiles.txt"
    names = [".agents/state", ".agents/scripts/autoupdate.py", "handoff.zip"]
    names += [name for name in ["agents.md", "AGENTS.md"] if (root / name).is_file()]
    for line in changed.read_text().splitlines() if changed.exists() else []:
        name = line.strip()
        path = Path(name)
        if not name or path.is_absolute() or ".." in path.parts:
            continue
        if (root / name).exists() or listed(root, ["--cached", "--", name]):
            names.append(name)
    run(root, ["add", "--", *names], 120)


def sync(root, branch):
    remote = run(root, ["config", "--get", "branch." + branch + ".remote"], check=False).stdout.strip()
    target = run(root, ["config", "--get", "branch." + branch + ".merge"], check=False).stdout.strip()
    if not remote or not target:
        return "skipped: no upstream"
    ahead = run(root, ["rev-list", "--count", "@{u}..HEAD"], check=False)
    if ahead.returncode == 0 and ahead.stdout.strip() == "0":
        return "current"
    try:
        probe = run(root, ["ls-remote", "--symref", remote], 60, False)
        if probe.returncode:
            return "failed: " + (probe.stderr.strip() or "ls-remote failed")
        lines = probe.stdout.splitlines()
        default = [line[5:].split("\t")[0] for line in lines if line.startswith("ref: ") and line.endswith("\tHEAD")]
        heads = {line.split("\t")[1] for line in lines if "\trefs/heads/" in line}
        if target in default and heads - {target}:
            return "skipped: upstream is the remote default branch"
        result = run(root, ["push", remote, "HEAD:" + target], 120, False)
    except subprocess.TimeoutExpired:
        return "failed: timeout"
    if result.returncode:
        return "failed: " + (result.stderr.strip() or "push failed")
    return "pushed " + remote + " " + target


def checkpoint(root, state, log, now, message):
    branch = out(root, ["branch", "--show-current"])
    parent = run(root, ["rev-parse", "--verify", "--quiet", "HEAD"], check=False).stdout.strip() or "none"
    tracked = set(listed(root, ["--cached"]))
    found = tracked | set(listed(root, ["--others", "--exclude-standard"]))
    names = sorted(name for name in found if allowed(root, name, name in tracked))
    stale = [name for name in docs if not (state / name).exists() or now.timestamp() - (state / name).stat().st_mtime > 300]
    mark = state / "checkpoint.json"
    manifest = state / "manifest.json"
    current = digest(root, names)
    if current != recorded(mark) or not manifest.exists() or not (root / "handoff.zip").exists():
        stamp = {"time": now.isoformat(), "branch": branch, "parent": parent, "digest": current}
        entries = sorted(set(names) | {".agents/state/checkpoint.json", ".agents/state/manifest.json"})
        mark.write_text(json.dumps({**stamp, "stale": stale}, indent=2) + "\n")
        manifest.write_text(json.dumps({**stamp, "count": len(entries), "files": entries}, indent=2) + "\n")
        pack(root, entries)
    count = verify(root)
    stage(root, state)
    commit = "unchanged"
    staged = run(root, ["diff", "--cached", "--quiet"], check=False).returncode
    if staged == 1:
        for key in ["GIT_AUTHOR_IDENT", "GIT_COMMITTER_IDENT"]:
            if run(root, ["var", key], check=False).returncode:
                raise RuntimeError("Git identity missing")
        with log.open("a") as handle:
            handle.write(" | ".join([now.isoformat(), "verified handoff.zip", branch, "parent=" + parent[:7], "files=" + str(count), "stale=" + ",".join(stale)]) + "\n")
        run(root, ["add", "--", ".agents/state/autoupdate.log"])
        run(root, ["-c", "hoplite.commitCoAuthor=false", "commit", "-m", "checkpoint: " + (message or now.strftime("%Y%m%d-%H%M%S"))], 120)
        commit = out(root, ["rev-parse", "--short", "HEAD"])
    elif staged != 0:
        raise RuntimeError("git diff failed")
    remaining = [line[3:] for line in run(root, ["status", "--porcelain"]).stdout.splitlines()]
    return {"zip": "handoff.zip", "files": count, "branch": branch, "commit": commit, "push": sync(root, branch), "stale": stale, "remaining": remaining}


def main():
    message = " ".join(sys.argv[1:]).strip()
    root = Path(out(Path(__file__).resolve().parents[2], ["rev-parse", "--show-toplevel"]))
    state = root / ".agents/state"
    state.mkdir(parents=True, exist_ok=True)
    log = state / "autoupdate.log"
    now = datetime.datetime.now(datetime.timezone.utc)
    try:
        report = checkpoint(root, state, log, now, message)
    except Exception as error:
        with log.open("a") as handle:
            handle.write(now.isoformat() + " | error | " + str(error).replace("\n", " ") + "\n")
        print("checkpoint failed: " + str(error), file=sys.stderr)
        raise SystemExit(1)
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
