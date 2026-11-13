# Reverse-engineering toolkit readiness

## Scope

Task: inspect, install and verify useful reverse-engineering tools in this thread's sandbox. No game, binary, dump, crash log, requested feature or target build was supplied. This is environment preparation, not a working game integration.

## Environment observed

- Ubuntu 24.04.4 LTS, Linux x86-64.
- Python 3.12.3.
- GCC/G++ 13.3.0, Ubuntu package build 13.3.0-6ubuntu2~24.04.1.
- GNU Binutils 2.42: objdump, readelf, nm and strings are available.
- file 5.45 and xxd are available.
- No Windows runtime, Windows SDK or MSVC installation was established. Windows process attachment, WinDbg/x64dbg, overlays, drivers and game integration were not tested.

## Checks actually performed

1. Compiled a temporary C++20 executable with `g++ -std=c++20 -g -O0 sample.cpp -o sample`.
2. Ran the executable and asserted its exit code was zero and output was `mc1h:22`.
3. Used `file` and `readelf -h` to confirm an x86-64 ELF executable.
4. Used `nm` to find the defined `transform` function.
5. Used `objdump -d -M intel --disassemble=transform` to inspect that function. Its implementation multiplies an integer by three and adds seven.
6. Used `strings` to find its format string.
7. Verified the existing `handoff.zip` with `unzip -tq`.

The temporary fixture was created locally only for tool verification and deleted afterwards. Its SHA-256 was `1c961cfdae0fe91caf9550b37e12b192459de6f73372da26dc968c1b985b79db`. This is not a game binary or compatibility claim. These checks exercised the existing compiler and static-analysis tools, not PE parsing or a debugger.

## Missing tools observed

`command -v` did not find gdb, lldb, llvm-readobj, llvm-objdump, cmake, ninja, clang, clang++, x86_64-w64-mingw32-g++, java, rizin, radare2, r2, ghidra or analyzeHeadless. Python distribution metadata did not find pefile, capstone, lief, unicorn or frida.

`apt-cache policy gdb binutils-mingw-w64-x86-64` reported `Installed: (none)` and `Candidate: (none)`. This describes the current local package indexes, not an upstream availability failure. No package-manager update or install was attempted.

## Approved installations: installed and verified

The owner approved all four exact tools, sources and versions on 2026-11-13. Both downloaded archives matched the recorded SHA-256 checksums before extraction; Python wheels were installed with required hashes. Root setup.sh and .hoplite/setup.sh now provide reproducible installation.

- Ghidra 12.2, official NSA GitHub release `Ghidra_12.2_build`, published 2026-10-22. Archive: `ghidra_12.2_PUBLIC_20261016.zip`. Published SHA-256: `2c2cd776db3c1f6a097ba418922378ac3649cadd5e844a6f5f088ae628a7be67`.
- Eclipse Temurin JDK 25.0.5+8, official Adoptium GitHub release `jdk-25.0.5+8`. Archive: `OpenJDK25U-jdk_x64_linux_hotspot_25.0.5_8.tar.gz`. API-reported SHA-256: `68982529869257d0ee6b824ec5aa270ff8b118bb438670da0b97ebdab178d7fb`. Ghidra 12.2's tagged README requires a 64-bit JDK 25; earlier Java requirements must not be reused.
- pefile 2024.8.26 from PyPI for Windows PE metadata and RVA/file-offset inspection.
- Capstone 5.0.9 from PyPI for programmable disassembly.

Deployment: project-local .tools/ and .venv/, excluded from Git and the handoff archive. Approved version pins, hashes, setup scripts and verification scripts are committed. Run bash setup.sh at startup, then bash tools.sh verify after a fresh install or restore. SETUP.md documents prerequisites and limitations.

## Verification observed after approval

- JDK runtime reports Temurin 25.0.5+8-LTS; Ghidra runtime reports 12.2.
- pefile 2024.8.26 and Capstone 5.0.9 versions confirmed.
- PE32+ AMD64 parsing, readable entry point and RVA/file-offset round trip passed using Ghidra's shipped Windows decompiler executable (not executed). SHA-256: `fddb1ad04e88917b7282e887054d30016bc3659894ec5006258c65eca09c6799`.
- Malformed PE input was rejected with PEFormatError.
- Known x86-64 bytes decoded to mov/add/ret with expected operands.
- A new C++20 fixture compiled and ran; Ghidra headless analysis and decompilation recovered `return value * 3 + 7;` from its transform function.
- Repeated setup reused both installations and audited the existing two Python packages.
- Managed sandbox setup executed .hoplite/setup.sh and completed with exit code zero.
- Bash syntax and Python compilation checks passed; tools.sh was exercised from outside the checkout.
- Clean-directory installation from copied setup sources, a second setup run, and full verification all passed with exit code zero. The temporary installation was removed afterwards.

## Limits

No target game or build was provided. Windows runtime execution, Ghidra GUI, Windows debugging, drivers, overlays and anti-cheat behavior remain untested. A fresh Linux machine needs the prerequisites in SETUP.md; setup does not silently install additional system dependencies.

## Sources consulted on 2026-11-13

- https://api.github.com/repos/NationalSecurityAgency/ghidra/releases/latest
- https://raw.githubusercontent.com/NationalSecurityAgency/ghidra/Ghidra_12.2_build/README.md
- https://api.adoptium.net/v3/assets/latest/25/hotspot?architecture=x64&image_type=jdk&os=linux&vendor=eclipse
- https://pypi.org/pypi/pefile/json
- https://pypi.org/pypi/capstone/json
- https://sourceware.org/binutils/docs/binutils/objdump.html
