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

## Proposed installations: NOT installed, approval pending

Downloaded tools execute code with workspace access. The hosted environment-repair instructions require explicit approval of tool, source and exact version before installation. No installer or auto-setup hook has been written or executed.

- Ghidra 12.2, official NSA GitHub release `Ghidra_12.2_build`, published 2026-10-22. Archive: `ghidra_12.2_PUBLIC_20261016.zip`. Published SHA-256: `2c2cd776db3c1f6a097ba418922378ac3649cadd5e844a6f5f088ae628a7be67`.
- Eclipse Temurin JDK 25.0.5+8, official Adoptium GitHub release `jdk-25.0.5+8`. Archive: `OpenJDK25U-jdk_x64_linux_hotspot_25.0.5_8.tar.gz`. API-reported SHA-256: `68982529869257d0ee6b824ec5aa270ff8b118bb438670da0b97ebdab178d7fb`. Ghidra 12.2's tagged README requires a 64-bit JDK 25; earlier Java requirements must not be reused.
- pefile 2024.8.26 from PyPI for Windows PE metadata and RVA/file-offset inspection.
- Capstone 5.0.9 from PyPI for programmable disassembly.

Proposed deployment: project-local tools and a project-local Python environment, excluded from Git and the handoff archive; persist only approved version pins, checksums and an idempotent setup path. Do not download or execute these tools before the approval response. Recheck exact package artifacts and integrity before installing them.

## Verification to run after approval

- Confirm Java and Ghidra versions and exercise headless analysis and decompilation on a known local fixture. Do not imply the GUI or Windows debugger was tested.
- Verify Python package versions, parse a real PE fixture, disassemble known x86-64 bytes, and check malformed-file rejection.
- Run the approved durable setup twice to establish idempotency.
- Update this report with actual results, then run the existing checkpoint updater and cancel active-work wakes when idle.

## Sources consulted on 2026-11-13

- https://api.github.com/repos/NationalSecurityAgency/ghidra/releases/latest
- https://raw.githubusercontent.com/NationalSecurityAgency/ghidra/Ghidra_12.2_build/README.md
- https://api.adoptium.net/v3/assets/latest/25/hotspot?architecture=x64&image_type=jdk&os=linux&vendor=eclipse
- https://pypi.org/pypi/pefile/json
- https://pypi.org/pypi/capstone/json
- https://sourceware.org/binutils/docs/binutils/objdump.html
