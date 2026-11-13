import hashlib
import importlib.metadata
import json
import os
import shutil
import subprocess
import tempfile
from pathlib import Path

import capstone
import pefile

root = Path(__file__).resolve().parents[2]
ghidra = root / '.tools/ghidra_12.2_PUBLIC'


def run(args, timeout=30, env=None):
    result = subprocess.run(args, check=True, capture_output=True, text=True, timeout=timeout, env=env)
    return result.stdout + result.stderr


def require(value, message):
    if not value:
        raise RuntimeError(message)


def main():
    versions = {name: importlib.metadata.version(name) for name in ['pefile', 'capstone']}
    require(versions == {'pefile': '2024.8.26', 'capstone': '5.0.9'}, 'Unexpected Python package versions')
    code = bytes.fromhex('4889d84883c007c3')
    assembly = [(item.mnemonic, item.op_str) for item in capstone.Cs(capstone.CS_ARCH_X86, capstone.CS_MODE_64).disasm(code, 0x1000)]
    require(assembly == [('mov', 'rax, rbx'), ('add', 'rax, 7'), ('ret', '')], 'Unexpected x86-64 disassembly')
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
    require(shutil.which('g++'), 'Ghidra fixture verification requires existing g++')
    with tempfile.TemporaryDirectory(prefix='mc1h-check-') as folder:
        work = Path(folder)
        (work / 'sample.cpp').write_text('extern "C" int transform(int value) { return value * 3 + 7; }\nint main() { return transform(5) == 22 ? 0 : 1; }\n')
        run(['g++', '-std=c++20', '-g', '-O0', str(work / 'sample.cpp'), '-o', str(work / 'sample')])
        run([str(work / 'sample')])
        (work / 'inspect.java').write_text('''import ghidra.app.script.GhidraScript;
import ghidra.app.decompiler.DecompInterface;
import java.nio.file.Files;
import java.nio.file.Path;

public class inspect extends GhidraScript {
    public void run() throws Exception {
        var decompiler = new DecompInterface();
        try {
            if (!decompiler.openProgram(currentProgram)) throw new Exception("Cannot open program");
            var functions = currentProgram.getFunctionManager().getFunctions(true);
            while (functions.hasNext()) {
                var function = functions.next();
                if (!function.getName().equals("transform")) continue;
                var result = decompiler.decompileFunction(function, 30, monitor);
                if (!result.decompileCompleted()) throw new Exception(result.getErrorMessage());
                Files.writeString(Path.of(getScriptArgs()[0]), result.getDecompiledFunction().getC());
                return;
            }
            throw new Exception("transform not found");
        } finally {
            decompiler.dispose();
        }
    }
}
''')
        env = os.environ.copy()
        env['JAVA_HOME'] = str(root / '.tools/jdk-25.0.5+8')
        env['GHIDRA_HEADLESS_MAXMEM'] = '1G'
        output = work / 'decompiled.c'
        log = run([str(ghidra / 'support/analyzeHeadless'), str(work), 'verification', '-import', str(work / 'sample'), '-scriptPath', str(work), '-postScript', 'inspect.java', str(output), '-analysisTimeoutPerFile', '60', '-max-cpu', '2', '-deleteProject'], timeout=180, env=env)
        if not output.exists():
            raise RuntimeError('Ghidra produced no decompilation:\n' + log[-12000:])
        content = output.read_text()
        require('transform' in content and '* 3 + 7' in content, 'Unexpected decompilation: ' + content)
        require('12.2' in log, 'Ghidra version not confirmed in runtime log')
        print('PASS: native C++20 execution and Ghidra 12.2 headless analysis/decompilation', flush=True)
        print(content, flush=True)


if __name__ == '__main__':
    main()
