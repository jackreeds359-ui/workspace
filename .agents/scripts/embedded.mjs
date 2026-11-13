import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import * as prettier from '../../.tools/prettier/package/index.mjs';
import * as babel from '../../.tools/prettier/package/plugins/babel.mjs';
import { parse, fingerprint, extract } from './jsindex.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../web/comp.school');
const directory = path.join(root, 'client/embedded');
await fs.mkdir(directory, { recursive: true });
const bundles = JSON.parse(await fs.readFile(path.join(root, 'client/bundles.json'), 'utf8'));
const reports = [];
const ignored = new Set(['loc', 'extra', 'comments', 'leadingComments', 'trailingComments', 'innerComments', 'tokens', 'errors']);
function children(node) {
  const values = [];
  for (const [key, value] of Object.entries(node || {})) {
    if (ignored.has(key)) continue;
    if (Array.isArray(value)) values.push(...value.filter(item => item?.type));
    else if (value?.type) values.push(value);
  }
  return values;
}
function names(node) {
  if (!node) return [];
  if (node.type === 'Identifier') return [node.name];
  if (node.type === 'AssignmentPattern') return names(node.left);
  if (node.type === 'RestElement') return names(node.argument);
  if (node.type === 'ObjectPattern') return node.properties.flatMap(item => names(item.value || item.argument));
  if (node.type === 'ArrayPattern') return node.elements.flatMap(names);
  return [];
}
function value(node, scope, depth = 0) {
  if (!node || depth > 12) return null;
  if (node.type === 'StringLiteral') return node.value;
  if (node.type === 'TemplateLiteral' && !node.expressions.length) return node.quasis[0].value.cooked;
  if (node.type === 'BinaryExpression' && node.operator === '+') {
    const left = value(node.left, scope, depth + 1), right = value(node.right, scope, depth + 1);
    return typeof left === 'string' && typeof right === 'string' ? left + right : null;
  }
  if (node.type === 'Identifier') {
    for (let current = scope; current; current = current.parent) {
      if (!current.bindings.has(node.name)) continue;
      const entries = current.bindings.get(node.name);
      return entries.length === 1 ? value(entries[0], current, depth + 1) : null;
    }
  }
  return null;
}
for (const bundle of bundles.assets) {
  if (bundle.parse.status !== 'passed') continue;
  const source = await fs.readFile(path.join(root, 'objects', bundle.sha256), 'utf8');
  if (!/new Blob\(/.test(source)) continue;
  const ast = parse(source);
  const blobs = [];
  function visit(node, parent) {
    const creates = ['Program', 'BlockStatement', 'FunctionDeclaration', 'FunctionExpression', 'ArrowFunctionExpression'].includes(node.type);
    const scope = creates ? { parent, bindings: new Map(), kind: node.type } : parent;
    if (/Function|ArrowFunction/.test(node.type)) for (const parameter of node.params || []) for (const name of names(parameter)) scope.bindings.set(name, [null]);
    if (node.type === 'VariableDeclaration') {
      for (const declaration of node.declarations) {
        let binding = scope;
        if (node.kind === 'var') while (binding.parent && !/Function|Program/.test(binding.kind || '')) binding = binding.parent;
        for (const name of names(declaration.id)) {
          if (!binding.bindings.has(name)) binding.bindings.set(name, []);
          binding.bindings.get(name).push(node.kind === 'const' && declaration.id.type === 'Identifier' ? declaration.init : null);
        }
      }
    }
    if (node.type === 'NewExpression' && node.callee?.name === 'Blob') blobs.push({ node, scope });
    for (const child of children(node)) visit(child, scope);
  }
  visit(ast, { parent: null, bindings: new Map() });
  for (const { node, scope } of blobs) {
    const options = node.arguments[1];
    const type = options?.properties?.find(item => (item.key.name || item.key.value) === 'type');
    const mime = type ? value(type.value, scope) : null;
    if (!mime || !/javascript|ecmascript/.test(mime)) continue;
    const parts = node.arguments[0];
    const strings = parts?.type === 'ArrayExpression' ? parts.elements.map(item => value(item, scope)) : [];
    const record = { bundle: bundle.sha256, urls: bundle.originalurls, start: node.start, end: node.end, mime, status: 'unresolved', reason: 'Blob source is not a statically resolvable string array' };
    if (strings.length && strings.every(item => typeof item === 'string')) {
      const code = strings.join('');
      const hash = crypto.createHash('sha256').update(code).digest('hex');
      try {
        const formatted = await prettier.format(code, { parser: 'babel', plugins: [babel] });
        if (fingerprint(parse(code)) !== fingerprint(parse(formatted))) throw new Error('Embedded code semantic mismatch');
        const original = path.join(directory, hash + '.original.js');
        const readable = path.join(directory, hash + '.js');
        for (const [file, content] of [[original, code], [readable, formatted]]) {
          try { if ((await fs.readFile(file, 'utf8')) === content) continue; } catch {}
          await fs.writeFile(file, content);
        }
        Object.assign(record, { status: 'extracted-and-verified', reason: null, sha256: hash, original: 'embedded/' + hash + '.original.js', readable: 'embedded/' + hash + '.js', bytes: Buffer.byteLength(code), dependencies: extract(code) });
      } catch (error) { record.reason = error.message; }
    }
    reports.push(record);
  }
}
await fs.writeFile(path.join(root, 'client/embedded.json'), JSON.stringify({ time: new Date().toISOString(), method: 'Static constant-string resolution for JavaScript Blob parts; no evaluation or execution', records: reports }, null, 2) + '\n');
console.log(JSON.stringify({ javascriptBlobs: reports.length, extracted: reports.filter(row => row.status === 'extracted-and-verified').length, unresolved: reports.filter(row => row.status !== 'extracted-and-verified').length }, null, 2));
