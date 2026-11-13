# mc1h reverse-engineering toolkit

## Run at startup

On each new Linux x86-64 checkout or restored sandbox, before reverse-engineering work:

```bash
bash setup.sh
bash tools.sh verify
```

Hoplite automatically runs `.hoplite/setup.sh`, which delegates to the same root script. Other agents should read `AGENTS.md` and the state briefings first, then run these commands. Reuse the setup; do not create another installer.

## Supported systems and prerequisites

The pinned artifacts support Linux x86-64 with glibc. Verified on Ubuntu 24.04.4. This is not a native Windows or macOS installer. A compatible WSL2 Linux environment is a possible deployment option, but WSL2 itself has not been tested here.

Prerequisites: Bash, Python 3.11 or newer with its standard library, curl, and uv. Full verification also needs an existing G++ compiler with C++20 support and the host libraries required by the shipped Ghidra decompiler. Network access to GitHub releases and PyPI is needed on the first run.

The script checks its basic prerequisites and fails with a diagnostic when one is absent. It does not install system packages or additional tools without approval. A bare machine must receive these prerequisites through approved system provisioning. No root privileges are required for this toolkit installation.

## Installed versions

- Ghidra 12.2, official NSA GitHub release.
- Eclipse Temurin JDK 25.0.5+8, official Adoptium GitHub release.
- pefile 2024.8.26 and Capstone 5.0.9, from PyPI.

The owner explicitly approved all four on 2026-11-13. The installer pins archive URLs and SHA-256 checksums; the Python requirements pin wheel hashes. It installs binary wheels only. It does not download a floating latest release or execute a remote shell installer.

Ghidra and Java live in `.tools/`; Python packages live in `.venv/`. Both directories are excluded from Git and the handoff archive. The source installer, pins, startup hook, verification script and this guide are included in the archive. Fresh machines restore tools by running setup, not by carrying third-party binaries in the backup.

Downloads are checksum-verified before extraction. Installations are extracted into temporary directories and then renamed into place. Repeated setup runs reuse completed installations and synchronize the two pinned Python packages. Existing unverified installation directories cause a failure rather than being silently overwritten. Existing cached installations are identified by checksum markers; this is not a continuous tamper audit.

## Commands

```bash
bash tools.sh python -c 'import pefile, capstone; print(pefile.__version__, capstone.__version__)'
bash tools.sh ghidra /path/to/projects analysis -import /path/to/binary
bash tools.sh verify
```

`tools.sh` resolves paths relative to the checkout and supplies the approved JDK to Ghidra. Call it from any directory. Ghidra project directories and input binaries remain the caller's responsibility. Do not analyze an unknown binary by executing it; static import does not require execution.

## What verification establishes

- Exact Python package versions.
- PE32+ AMD64 headers and entry-point RVA/file-offset round trip, using Ghidra's shipped Windows decompiler executable without running that Windows executable.
- Malformed PE rejection.
- Known x86-64 instruction decoding.
- A temporary native C++20 fixture compiles and runs.
- Ghidra 12.2 imports that ELF fixture, analyzes it and decompiles `transform` to its expected arithmetic expression.

Temporary fixtures and Ghidra projects are removed after checks. No game, game build, Windows process attachment, GUI, Windows debugger, driver, overlay, trainer or anti-cheat behavior is verified by these checks.

## Recovery

After restoring a checkout or `handoff.zip`, read the state briefings, run setup and verification, and resume the actual task. Re-arm five-minute checkpoints only during active work. Never infer target compatibility from a successful toolkit check.
