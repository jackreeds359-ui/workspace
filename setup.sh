#!/usr/bin/env bash
set -euo pipefail
root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$root"
if [[ "$(uname -s)" != Linux || "$(uname -m)" != x86_64 ]]; then
    printf '%s\n' 'This pinned setup supports Linux x86-64 only. Use a compatible Linux environment; native Windows and macOS setup is not implemented.' >&2
    exit 1
fi
for tool in python3 curl uv; do
    if ! command -v "$tool" >/dev/null 2>&1; then
        printf 'Missing prerequisite: %s. Install it through your approved system provisioning, then rerun bash setup.sh.\n' "$tool" >&2
        exit 1
    fi
done
python3 .agents/scripts/toolsetup.py
printf '%s\n' 'Run bash tools.sh verify to exercise PE parsing, disassembly and Ghidra decompilation.'
