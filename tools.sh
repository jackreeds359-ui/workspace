#!/usr/bin/env bash
set -euo pipefail
root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
export JAVA_HOME="$root/.tools/jdk-25.0.5+8"
mingw="$root/.tools/llvm-mingw-20261104-ucrt-ubuntu-22.04-x86_64/bin"
if [[ ! -x "$root/.venv/bin/python" || ! -x "$JAVA_HOME/bin/java" || ! -x "$mingw/x86_64-w64-mingw32-clang++" ]]; then
    printf '%s\n' 'Toolkit is missing. Run bash setup.sh first.' >&2
    exit 1
fi
case "${1:-}" in
    python)
        shift
        exec "$root/.venv/bin/python" "$@"
        ;;
    ghidra)
        shift
        exec "$root/.tools/ghidra_12.2_PUBLIC/support/analyzeHeadless" "$@"
        ;;
    mingw)
        shift
        if [[ $# -eq 0 || "$1" == */* || ! -x "$mingw/$1" ]]; then
            printf '%s\n' 'Usage: bash tools.sh mingw <tool> [args], for example x86_64-w64-mingw32-clang++, llvm-objdump, llvm-pdbutil or llvm-readobj' >&2
            exit 2
        fi
        tool="$1"
        shift
        exec "$mingw/$tool" "$@"
        ;;
    verify)
        shift
        exec "$root/.venv/bin/python" "$root/.agents/scripts/toolcheck.py" "$@"
        ;;
    fastfetch)
        shift
        exec "$root/.tools/fastfetch-linux-amd64/usr/bin/fastfetch" "$@"
        ;;
    *)
        printf '%s\n' 'Usage: bash tools.sh python [args] | ghidra [headless args] | mingw <tool> [args] | fastfetch [args] | verify' >&2
        exit 2
        ;;
esac
