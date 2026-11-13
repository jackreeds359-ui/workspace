import hashlib
import importlib.metadata
import json
import os
import re
import shutil
import struct
import subprocess
import tempfile
from pathlib import Path

import capstone
import pefile
from minidump.minidumpfile import MinidumpFile

import toolsetup

root = Path(__file__).resolve().parents[2]
ghidra = root / '.tools/ghidra_12.2_PUBLIC'
mingw = toolsetup.mingw.parent
expected = {'pefile': '2024.8.26', 'capstone': '5.0.9', 'minidump': '0.0.24'}
library = '''#include <cstddef>
#include <span>

consteval int scale() { return 3; }

extern "C" __declspec(dllexport) int transform(int value) { return value * scale() + 7; }

extern "C" __declspec(dllexport) int readvalue(const int* pointer) { return *pointer + 1; }

extern "C" __declspec(dllexport) int total(const int* values, int count)
{
    int sum = 0;
    for (int value : std::span<const int>(values, static_cast<std::size_t>(count)))
        sum += value;
    return sum;
}
'''
script = '''import ghidra.app.script.GhidraScript;
import ghidra.app.decompiler.DecompInterface;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Set;

public class inspect extends GhidraScript {
    public void run() throws Exception {
        var names = Set.of("transform", "readvalue");
        var decompiler = new DecompInterface();
        try {
            if (!decompiler.openProgram(currentProgram)) throw new Exception("Cannot open program");
            var functions = currentProgram.getFunctionManager().getFunctions(true);
            var found = 0;
            while (functions.hasNext()) {
                var function = functions.next();
                if (!names.contains(function.getName())) continue;
                var result = decompiler.decompileFunction(function, 30, monitor);
                if (!result.decompileCompleted()) throw new Exception(result.getErrorMessage());
                Files.writeString(Path.of(getScriptArgs()[0], currentProgram.getName() + "." + function.getName() + ".c"), result.getDecompiledFunction().getC());
                found++;
            }
            if (found == 0) throw new Exception("No expected functions in " + currentProgram.getName());
        } finally {
            decompiler.dispose();
        }
    }
}
'''


def run(args, timeout=30, env=None):
    result = subprocess.run(args, check=True, capture_output=True, text=True, timeout=timeout, env=env)
    return result.stdout + result.stderr


def require(value, message):
    if not value:
        raise RuntimeError(message)


def disassemble(code, address, count):
    decoder = capstone.Cs(capstone.CS_ARCH_X86, capstone.CS_MODE_64)
    return [(item.mnemonic, item.op_str) for item in decoder.disasm(code, address, count)]


def crashdump(base, size, checksum, timestamp, address, name):
    text = name.encode('utf-16-le')
    exception = struct.pack('<IIIIQQII15QII', 7, 0, 0xC0000005, 0, 0, address, 2, 0, 0, 0, *[0] * 13, 0, 0)
    modules = struct.pack('<IQIIII13IIIIIQQ', 1, base, size, checksum, timestamp, 336, *[0] * 13, 0, 0, 0, 0, 0, 0)
    directory = struct.pack('<IIIIII', 6, len(exception), 56, 4, len(modules), 56 + len(exception))
    header = struct.pack('<IIIIIIQ', 0x504D444D, 0xA793, 2, 32, 0, 0, 0)
    data = header + directory + exception + modules
    require(len(data) == 336, 'Minidump fixture layout size mismatch')
    return data + struct.pack('<I', len(text)) + text + b'\0\0'


def portable():
    versions = {name: importlib.metadata.version(name) for name in expected}
    require(versions == expected, 'Unexpected Python package versions: ' + json.dumps(versions))
    require(disassemble(bytes.fromhex('4889d84883c007c3'), 0x1000, 0) == [('mov', 'rax, rbx'), ('add', 'rax, 7'), ('ret', '')], 'Unexpected x86-64 disassembly')
    fixture = ghidra / 'Ghidra/Features/Decompiler/os/win_x86_64/decompile.exe'
    with pefile.PE(str(fixture)) as binary:
        require(binary.FILE_HEADER.Machine == 0x8664, 'PE fixture is not AMD64')
        require(binary.OPTIONAL_HEADER.Magic == 0x20b, 'PE fixture is not PE32+')
        entry = binary.OPTIONAL_HEADER.AddressOfEntryPoint
        offset = binary.get_offset_from_rva(entry)
        require(binary.get_rva_from_offset(offset) == entry, 'RVA/file-offset round trip failed')
        require(len(binary.get_data(entry, 16)) == 16, 'PE entry point unreadable')
    try:
        pefile.PE(data=b'invalid executable')
    except pefile.PEFormatError:
        pass
    else:
        raise RuntimeError('Malformed PE was accepted')
    print(json.dumps({'versions': versions, 'pefixture': str(fixture.relative_to(root)), 'sha256': hashlib.sha256(fixture.read_bytes()).hexdigest(), 'checks': ['PE32+ AMD64 headers', 'entry RVA/file-offset round trip', 'malformed PE rejection', 'x86-64 instruction decoding']}, indent=2), flush=True)


def windows(work):
    source = work / 'library.cpp'
    source.write_text(library)
    dll = work / 'sample.dll'
    pdb = work / 'sample.pdb'
    compiler = run([str(mingw / 'x86_64-w64-mingw32-clang++'), '--version'])
    require('clang version 23.1.5' in compiler and 'x86_64-w64-windows-gnu' in compiler, 'Unexpected llvm-mingw compiler: ' + compiler)
    run([str(mingw / 'x86_64-w64-mingw32-clang++'), '-std=c++20', '-O1', '-g', '-gcodeview', '-shared', str(source), '-o', str(dll), '-Wl,--pdb=' + str(pdb)], timeout=120)
    with pefile.PE(str(dll)) as binary:
        require(binary.FILE_HEADER.Machine == 0x8664 and binary.OPTIONAL_HEADER.Magic == 0x20b, 'Cross-compiled DLL is not PE32+ AMD64')
        require(binary.FILE_HEADER.Characteristics & 0x2000, 'Cross-compiled image is not marked as a DLL')
        exports = {item.name.decode(): item.address for item in binary.DIRECTORY_ENTRY_EXPORT.symbols if item.name}
        require({'transform', 'readvalue', 'total'} <= set(exports), 'Missing DLL exports: ' + json.dumps(sorted(exports)))
        size = binary.OPTIONAL_HEADER.SizeOfImage
        checksum = binary.OPTIONAL_HEADER.CheckSum
        timestamp = binary.FILE_HEADER.TimeDateStamp
        preferred = binary.OPTIONAL_HEADER.ImageBase
        target = exports['readvalue']
        code = binary.get_data(target, 32)
    publics = run([str(mingw / 'llvm-pdbutil'), 'dump', '--publics', str(pdb)])
    require('readvalue' in publics and 'transform' in publics, 'PDB public symbols missing exports')
    first = disassemble(code, target, 1)
    require(first and first[0][0] == 'mov' and re.search(r'dword ptr \[rcx\]', first[0][1]), 'readvalue does not dereference the Windows x64 first argument register: ' + str(first))
    base = 0x7FFB12340000
    require(base != preferred, 'Fixture base must differ from preferred image base to exercise relocation mapping')
    name = 'C:\\mc1h\\sample.dll'
    dump = MinidumpFile.parse_bytes(crashdump(base, size, checksum, timestamp, base + target, name))
    record = dump.exception.exception_records[0]
    require(record.ThreadId == 7, 'Unexpected faulting thread id')
    fault = record.ExceptionRecord
    require(fault.ExceptionCode_raw == 0xC0000005 and fault.ExceptionCode.name == 'EXCEPTION_ACCESS_VIOLATION', 'Unexpected exception code')
    require(fault.ExceptionInformation == [0, 0], 'Unexpected access-violation operation or address')
    owners = [module for module in dump.modules.modules if module.inrange(fault.ExceptionAddress)]
    require(len(owners) == 1 and owners[0].name == name and owners[0].size == size, 'Fault address did not resolve to exactly one module')
    rva = fault.ExceptionAddress - owners[0].baseaddress
    resolved = [symbol for symbol, address in exports.items() if address == rva]
    require(resolved == ['readvalue'], 'Fault RVA did not resolve to readvalue')
    instruction = disassemble(code, base + rva, 1)
    print(json.dumps({'dll': {'sha256': hashlib.sha256(dll.read_bytes()).hexdigest(), 'preferredbase': hex(preferred), 'sizeofimage': hex(size), 'exports': {key: hex(value) for key, value in sorted(exports.items())}}, 'compiler': compiler.splitlines()[0], 'pdbpublics': 'readvalue and transform present', 'minidump': {'note': 'synthetic spec-layout fixture, not a captured Windows crash', 'code': hex(fault.ExceptionCode_raw), 'operation': 'read', 'faultaddress': hex(fault.ExceptionInformation[1]), 'exceptionaddress': hex(fault.ExceptionAddress), 'module': owners[0].name, 'base': hex(owners[0].baseaddress), 'rva': hex(rva), 'symbol': resolved[0], 'instruction': ' '.join(instruction[0]).strip()}}, indent=2), flush=True)
    return dll


def decompile(work, binaries):
    (work / 'inspect.java').write_text(script)
    output = work / 'decompiled'
    output.mkdir()
    env = os.environ.copy()
    env['JAVA_HOME'] = str(root / '.tools/jdk-25.0.5+8')
    env['GHIDRA_HEADLESS_MAXMEM'] = '1G'
    log = run([str(ghidra / 'support/analyzeHeadless'), str(work), 'verification', '-import', *[str(item) for item in binaries], '-scriptPath', str(work), '-postScript', 'inspect.java', str(output), '-analysisTimeoutPerFile', '90', '-max-cpu', '2', '-deleteProject'], timeout=360, env=env)
    require('12.2' in log, 'Ghidra version not confirmed in runtime log')
    results = {path.name: path.read_text() for path in sorted(output.glob('*.c'))}
    checks = {'sample.transform.c': r'return \w+ \* 3 \+ 7;', 'sample.dll.transform.c': r'return \w+ \* 3 \+ 7;', 'sample.dll.readvalue.c': r'return \*\w+ \+ 1;'}
    for name, pattern in checks.items():
        require(name in results, 'Ghidra produced no ' + name + ':\n' + log[-12000:])
        require(re.search(pattern, results[name]), 'Unexpected decompilation in ' + name + ': ' + results[name])
    print('PASS: Ghidra 12.2 headless analysis/decompilation of ELF and PE32+ fixtures', flush=True)
    for name, content in results.items():
        print('== ' + name + '\n' + content.strip(), flush=True)


def main():
    portable()
    require(shutil.which('g++'), 'Ghidra ELF fixture verification requires existing g++')
    with tempfile.TemporaryDirectory(prefix='mc1h-check-') as folder:
        work = Path(folder)
        (work / 'sample.cpp').write_text('extern "C" int transform(int value) { return value * 3 + 7; }\nint main() { return transform(5) == 22 ? 0 : 1; }\n')
        run(['g++', '-std=c++20', '-g', '-O0', str(work / 'sample.cpp'), '-o', str(work / 'sample')])
        run([str(work / 'sample')])
        print('PASS: native C++20 ELF fixture compiled and ran', flush=True)
        dll = windows(work)
        print('PASS: Windows x64 C++20 DLL cross-build, exports, PDB, x64 ABI decode and minidump fault mapping', flush=True)
        decompile(work, [work / 'sample', dll])


if __name__ == '__main__':
    main()
