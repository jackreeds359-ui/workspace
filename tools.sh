#!/usr/bin/env bash
set -euo pipefail
root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
export JAVA_HOME="$root/.tools/jdk-25.0.5+8"
if [[ ! -x "$root/.venv/bin/python" || ! -x "$JAVA_HOME/bin/java" ]]; then
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
    verify)
        shift
        exec "$root/.venv/bin/python" "$root/.agents/scripts/toolcheck.py" "$@"
        ;;
    *)
        printf '%s\n' 'Usage: bash tools.sh python [args] | ghidra [headless args] | verify' >&2
        exit 2
        ;;
esac
