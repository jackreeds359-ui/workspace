import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, rename } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as prettier from '../../.tools/prettier/package/index.mjs';
import * as babel from '../../.tools/prettier/package/plugins/babel.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const webroot = join(root, 'web/comp.school');
const objectroot = join(webroot, 'objects');
const clientroot = join(webroot, 'client');
const readableRoot = join(clientroot, 'readable');
const bundlePath = join(clientroot, 'bundles.json');
const dependencyPath = join(clientroot, 'dependencies.json');
const ignored = new Set(['start', 'end', 'loc', 'range', 'extra', 'comments', 'leadingComments', 'trailingComments', 'innerComments', 'tokens', 'errors', '__contentEnd']);
const scriptmime = /(?:javascript|ecmascript)/i;
const jssuffix = /\.(?:js|mjs|cjs|jsx|mts|cts)$/i;
const assetsuffix = /\.(?:js|mjs|cjs|jsx|mts|cts|css|json|wasm|svg|png|jpe?g|gif|webp|avif|ico|woff2?|ttf|otf|eot|mp3|mp4|webm|ogg|wav|pdf|txt|xml|webmanifest)$/i;

function text(value) {
  return typeof value === 'string' ? value : '';
}

function contenthash(value) {
  return createHash('sha256').update(value).digest('hex');
}

function parse(source) {
  return babel.parsers.babel.parse(source, { sourceType: 'module' });
}

function identifier(node, name) {
  return node?.type === 'Identifier' && node.name === name;
}

function member(node, name) {
  if (!node || !['MemberExpression', 'OptionalMemberExpression'].includes(node.type)) return false;
  if (!node.computed && identifier(node.property, name)) return true;
  return node.computed && ['StringLiteral', 'Literal'].includes(node.property?.type) && node.property.value === name;
}

function membername(node) {
  if (!node || !['MemberExpression', 'OptionalMemberExpression'].includes(node.type)) return null;
  if (!node.computed && node.property?.type === 'Identifier') return node.property.name;
  if (node.computed && ['StringLiteral', 'Literal'].includes(node.property?.type) && typeof node.property.value === 'string') return node.property.value;
  return null;
}

function staticvalue(node) {
  if (!node) return null;
  if (['StringLiteral', 'Literal'].includes(node.type) && typeof node.value === 'string') return node.value;
  if (node.type === 'TemplateLiteral' && node.expressions.length === 0 && node.quasis.length === 1) return node.quasis[0].value.cooked ?? node.quasis[0].value.raw;
  return null;
}

function importmeta(node) {
  return node?.type === 'MetaProperty' && identifier(node.meta, 'import') && identifier(node.property, 'meta');
}

function importmetaurl(node) {
  return member(node, 'url') && importmeta(node.object);
}

function callee(node, name) {
  return identifier(node, name) || membername(node) === name;
}

function walk(node, callback, seen = new WeakSet()) {
  if (!node || typeof node !== 'object' || seen.has(node)) return;
  seen.add(node);
  if (Array.isArray(node)) {
    for (const item of node) walk(item, callback, seen);
    return;
  }
  callback(node);
  for (const [key, value] of Object.entries(node)) if (!ignored.has(key)) walk(value, callback, seen);
}

function extract(source, ast = parse(source)) {
  const events = [];
  const consumed = new WeakSet();
  const handledurls = new WeakSet();
  const emitted = new Set();

  function add(kind, node, valueNode, value, details = {}) {
    if (valueNode && typeof valueNode === 'object') consumed.add(valueNode);
    const evidence = valueNode ?? node;
    const start = Number.isInteger(evidence?.start) ? evidence.start : Number.isInteger(node?.start) ? node.start : null;
    const end = Number.isInteger(evidence?.end) ? evidence.end : Number.isInteger(node?.end) ? node.end : null;
    const key = `${kind}:${start}:${String(value)}:${details.basekind ?? 'source'}`;
    if (emitted.has(key)) return;
    emitted.add(key);
    events.push({
      kind,
      specifier: typeof value === 'string' ? value : null,
      start,
      end,
      line: evidence?.loc?.start?.line ?? node?.loc?.start?.line ?? null,
      column: evidence?.loc?.start?.column ?? node?.loc?.start?.column ?? null,
      basekind: details.basekind ?? 'source',
      reason: typeof value === 'string' ? null : details.reason ?? 'computed-specifier'
    });
  }

  function isworker(node) {
    return node?.type === 'NewExpression' && (identifier(node.callee, 'Worker') || identifier(node.callee, 'SharedWorker'));
  }

  function workerurl(node) {
    const arg = node.arguments?.[0];
    if (arg?.type === 'NewExpression' && identifier(arg.callee, 'URL')) {
      const value = staticvalue(arg.arguments?.[0]);
      if (importmetaurl(arg.arguments?.[1])) return { value, valueNode: arg.arguments?.[0], urlnode: arg, basekind: 'source' };
    }
    return { value: staticvalue(arg), valueNode: arg, urlnode: null, basekind: 'page' };
  }

  walk(ast, node => {
    if (node.type === 'ImportDeclaration' || node.type === 'ExportAllDeclaration' || node.type === 'ExportNamedDeclaration') {
      if (node.source) add('static', node, node.source, staticvalue(node.source));
    }

    if (node.type === 'ImportExpression') {
      const value = staticvalue(node.source);
      add('dynamic', node, value === null ? node.source : node.source, value);
    }

    if (node.type === 'CallExpression' && identifier(node.callee, 'import')) {
      const arg = node.arguments?.[0];
      const value = staticvalue(arg);
      add('dynamic', node, arg, value);
    }

    if (node.type === 'CallExpression' && identifier(node.callee, 'require')) {
      const arg = node.arguments?.[0];
      const value = staticvalue(arg);
      add('static', node, arg, value, { reason: 'computed-require' });
    }

    if (node.type === 'CallExpression' && identifier(node.callee, 'importScripts')) {
      for (const arg of node.arguments ?? []) add('importScripts', node, arg, staticvalue(arg), { reason: 'computed-import-scripts' });
    }

    if (node.type === 'CallExpression' && member(node.callee, 'register') && member(node.callee.object, 'serviceWorker')) {
      const arg = node.arguments?.[0];
      add('worker', node, arg, staticvalue(arg), { basekind: 'page', reason: 'computed-service-worker' });
    }

    if (isworker(node)) {
      const info = workerurl(node);
      if (info.urlnode) handledurls.add(info.urlnode);
      add('worker', node, info.valueNode, info.value, { basekind: info.basekind, reason: 'computed-worker' });
    }

    if (node.type === 'NewExpression' && identifier(node.callee, 'URL') && !handledurls.has(node)) {
      const arg = node.arguments?.[0];
      const base = node.arguments?.[1];
      if (importmetaurl(base)) add('asset', node, arg, staticvalue(arg), { reason: 'computed-new-url' });
    }

    if (node.type === 'CallExpression' && callee(node.callee, '__vite__preload')) {
      const deps = node.arguments?.[1];
      if (deps?.type === 'ArrayExpression') {
        for (const item of deps.elements ?? []) if (item) add('preload', node, item, staticvalue(item), { reason: 'computed-preload' });
      }
    }

    if (node.type === 'VariableDeclarator' && identifier(node.id, '__vite__mapDeps')) {
      walk(node.init, item => {
        if (item.type !== 'ArrayExpression') return;
        const strings = (item.elements ?? []).filter(value => staticvalue(value) !== null);
        if (!strings.length) return;
        for (const value of strings) add('preload', node, value, staticvalue(value), { reason: 'computed-preload-map' });
      });
    }

    if (['StringLiteral', 'Literal'].includes(node.type) && typeof node.value === 'string' && !consumed.has(node) && assetsuffix.test(node.value.split(/[?#]/, 1)[0])) {
      add(jssuffix.test(node.value.split(/[?#]/, 1)[0]) ? 'code' : 'asset', node, node, node.value);
    }
  });

  return events.sort((left, right) => (left.start ?? -1) - (right.start ?? -1) || left.kind.localeCompare(right.kind));
}

function fingerprint(node) {
  const hash = createHash('sha256');
  function encode(value) {
    if (value === null) {
      hash.update('null;');
    } else if (Array.isArray(value)) {
      hash.update(`array:${value.length}[`);
      for (const item of value) encode(item);
      hash.update(']');
    } else if (typeof value === 'object') {
      const keys = Object.keys(value).filter(key => !ignored.has(key)).sort();
      hash.update(`object:${keys.length}{`);
      for (const key of keys) {
        encode(key);
        encode(value[key]);
      }
      hash.update('}');
    } else if (typeof value === 'string') {
      hash.update(`string:${Buffer.byteLength(value)}:`);
      hash.update(value);
      hash.update(';');
    } else if (typeof value === 'number') {
      hash.update(`number:${String(value)};`);
    } else if (typeof value === 'boolean') {
      hash.update(value ? 'boolean:true;' : 'boolean:false;');
    } else if (typeof value === 'undefined') {
      hash.update('undefined;');
    } else {
      hash.update(`${typeof value}:${String(value)};`);
    }
  }
  encode(node);
  return hash.digest('hex');
}

function normalizedurl(value, base) {
  if (typeof value !== 'string' || !value.trim() || value.includes('*')) return null;
  const specifier = value.trim();
  const protocol = /^[a-z][a-z\d+.-]*:/i.test(specifier);
  const absolute = protocol || specifier.startsWith('//');
  const relative = /^(?:\/|\.\/|\.\.\/|\?|#)/.test(specifier);
  if (!absolute && !relative) return null;
  try {
    const target = absolute ? new URL(specifier, base ?? undefined) : base ? new URL(specifier, base) : null;
    if (!target) return null;
    target.hash = '';
    return target;
  } catch {
    return null;
  }
}

function classify(event, target) {
  if (!target) return { resolution: 'unresolved', classification: 'unresolved', targetkind: null, reason: event.reason ?? 'bare-or-computed-specifier' };
  const protocol = target.protocol.toLowerCase();
  const targetkind = jssuffix.test(target.pathname) ? 'code' : assetsuffix.test(target.pathname) ? 'asset' : 'resource';
  if (protocol !== 'http:' && protocol !== 'https:') return { resolution: 'external', classification: 'external', targetkind, reason: 'non-http-scheme' };
  const origin = event.baseurl ? new URL(event.baseurl) : null;
  const internal = origin?.origin === target.origin;
  if (!internal) return { resolution: 'external', classification: 'external', targetkind, reason: 'cross-origin' };
  return { resolution: 'internal', classification: targetkind, targetkind, reason: null };
}

function merge(map, key, value) {
  if (!map.has(key)) map.set(key, value);
  return map.get(key);
}

function cleanmessage(error) {
  return String(error?.message ?? error).replace(/\s+/g, ' ').slice(0, 800);
}

function atomic(path, value) {
  return writeFile(path, value).then(() => rename(path, path.replace(/\.tmp$/, '')));
}

function assetlike(record) {
  const mime = text(record.type || record.mime);
  const kind = text(record.resourceType || record.resource_type || record.kind);
  const url = text(record.url);
  return scriptmime.test(mime) || /^(?:script|javascript)$/i.test(kind) || jssuffix.test(url.split(/[?#]/, 1)[0]);
}

async function checkfixture() {
  const fixture = `import value from './static.js';
export { value as named } from './exported.js';
const literal = import('./dynamic.js');
const computed = import('./parts/' + name);
const worker = new Worker(new URL('./worker.js', import.meta.url));
navigator.serviceWorker.register('./service.js');
importScripts('./legacy.js');
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ['/assets/preload.js']))) => i.map(i => d[i]);
__vite__preload(() => import('./async.js'), ['/assets/direct.js']);
new URL('./icons/test.svg', import.meta.url);`;
  const found = extract(fixture);
  const kinds = new Set(found.map(item => item.kind));
  for (const kind of ['static', 'dynamic', 'worker', 'importScripts', 'preload', 'asset']) if (!kinds.has(kind)) throw new Error(`selftest missed ${kind}`);
  const computed = found.find(item => item.kind === 'dynamic' && item.specifier === null);
  if (!computed) throw new Error('selftest missed computed dynamic import');
  const origin = 'https://comp.school/assets/main.js';
  const target = normalizedurl('./static.js', origin);
  if (target?.href !== 'https://comp.school/assets/static.js') throw new Error('selftest relative resolution failed');
  const original = parse(fixture);
  const formatted = await prettier.format(fixture, { parser: 'babel', plugins: [babel] });
  const rewritten = parse(formatted);
  if (fingerprint(original) !== fingerprint(rewritten)) throw new Error('selftest formatter changed the syntax tree');
  return { dependencies: found.length, kinds: [...kinds].sort(), semanticFormatting: 'passed' };
}

async function main() {
  const args = new Set(process.argv.slice(2));
  for (const arg of args) if (!['--selftest', '--no-format'].includes(arg)) throw new Error(`unknown option: ${arg}`);
  if (args.has('--selftest')) {
    process.stdout.write(`${JSON.stringify({ status: 'passed', ...await checkfixture() }, null, 2)}\n`);
    return;
  }

  const inventoryPath = join(webroot, 'inventory.json');
  const runtimePath = join(webroot, 'runtime.json');
  const inventory = JSON.parse(await readFile(inventoryPath, 'utf8'));
  const runtime = existsSync(runtimePath) ? JSON.parse(await readFile(runtimePath, 'utf8')) : [];
  if (!Array.isArray(inventory) || !Array.isArray(runtime)) throw new Error('inventory and runtime captures must be JSON arrays');

  const assets = new Map();
  const knownurls = new Set();
  const externals = new Map();

  function addasset(sha, url, final, pageurl, capture, bytes, type) {
    if (!/^[a-f\d]{64}$/i.test(text(sha))) return null;
    const key = sha.toLowerCase();
    const entry = merge(assets, key, { sha256: key, bytes: Number.isInteger(bytes) ? bytes : null, object: `../objects/${key}`, origins: new Map(), types: new Set() });
    if (Number.isInteger(bytes)) entry.bytes = Math.max(entry.bytes ?? 0, bytes);
    if (type) entry.types.add(type);
    const originurl = text(url);
    const finalurl = text(final) || originurl;
    const originKey = `${originurl}\n${finalurl}`;
    const origin = merge(entry.origins, originKey, { url: originurl, final: finalurl, pageurls: new Set(), captures: new Set() });
    if (pageurl) origin.pageurls.add(pageurl);
    if (capture) origin.captures.add(capture);
    if (originurl) knownurls.add(originurl);
    if (finalurl) knownurls.add(finalurl);
    return entry;
  }

  for (const record of inventory) {
    if (!assetlike(record) || !record.sha256 || (record.status !== undefined && record.status !== 200)) continue;
    addasset(record.sha256, record.url, record.final, null, 'inventory', record.bytes, record.type);
    if (record.url) knownurls.add(record.url);
    if (record.final) knownurls.add(record.final);
  }

  for (const page of runtime) {
    for (const resource of page.resources ?? []) {
      if (!assetlike(resource)) continue;
      const url = text(resource.url);
      const sha = text(resource.sha256);
      if (sha) {
        addasset(sha, url, url, page.url, 'runtime', resource.bytes, resource.mime || resource.type);
      } else if (url) {
        const record = merge(externals, url, { url, pages: new Set(), types: new Set(), statuses: new Set(), reasons: new Set() });
        if (page.url) record.pages.add(page.url);
        if (resource.mime || resource.type) record.types.add(resource.mime || resource.type);
        if (resource.status !== undefined) record.statuses.add(resource.status);
        if (resource.capture_error) record.reasons.add(resource.capture_error);
      }
    }
  }

  const previous = new Map();
  if (existsSync(bundlePath)) {
    try {
      const saved = JSON.parse(await readFile(bundlePath, 'utf8'));
      for (const item of saved.assets ?? []) if (item.sha256) previous.set(item.sha256, item);
    } catch {}
  }

  await mkdir(readableRoot, { recursive: true });
  const outputs = [];
  const dependencyRecords = [];
  const counters = { assets: assets.size, parsed: 0, parsefailures: 0, formatted: 0, formatfailures: 0, preserved: 0, dependencies: 0, unresolved: 0, external: 0 };

  for (const asset of [...assets.values()].sort((left, right) => left.sha256.localeCompare(right.sha256))) {
    const origins = [...asset.origins.values()].map(origin => ({
      url: origin.url,
      final: origin.final,
      pageurls: [...origin.pageurls].sort(),
      captures: [...origin.captures].sort()
    })).sort((left, right) => left.final.localeCompare(right.final) || left.url.localeCompare(right.url));
    const readable = `readable/${asset.sha256}.js`;
    const readablePath = join(clientroot, readable);
    const objectPath = join(objectroot, asset.sha256);
    const record = {
      sha256: asset.sha256,
      bytes: asset.bytes,
      object: asset.object,
      originalurls: [...new Set(origins.map(origin => origin.url).filter(Boolean))].sort(),
      finalurls: [...new Set(origins.map(origin => origin.final).filter(Boolean))].sort(),
      origins,
      readable,
      verification: { status: 'missing', actualsha256: null },
      parse: { status: 'not-run', error: null },
      format: { status: 'not-run', semanticallyequivalent: null, error: null },
      dependencies: []
    };

    try {
      const bytes = await readFile(objectPath);
      const actual = contenthash(bytes);
      record.verification = { status: actual === asset.sha256 ? 'passed' : 'mismatch', actualsha256: actual };
      if (actual !== asset.sha256) throw new Error(`object hash mismatch: expected ${asset.sha256}, received ${actual}`);
      const source = bytes.toString('utf8');
      let events;
      try {
        const ast = parse(source);
        events = extract(source);
        record.parse = { status: 'passed', error: null };
        counters.parsed += 1;
        record.dependencies = events.length;

        for (const origin of origins) {
          const bases = new Set();
          for (const pageurl of origin.pageurls) bases.add(JSON.stringify({ url: pageurl, kind: 'page' }));
          if (!bases.size) bases.add(JSON.stringify({ url: origin.final || origin.url, kind: 'source' }));
          for (const event of events) {
            for (const selected of bases) {
              const base = JSON.parse(selected);
              const relative = typeof event.specifier === 'string' && /^(?:\/|\.\/|\.\.\/|\?|#)/.test(event.specifier);
              const baseurl = event.basekind === 'page' ? base.kind === 'page' ? base.url : relative && event.specifier.startsWith('/') ? origin.final || origin.url : null : origin.final || origin.url;
              const target = normalizedurl(event.specifier, baseurl);
              const mapped = classify({ ...event, baseurl }, target);
              const dependency = {
                sourceurl: origin.url,
                sourcefinal: origin.final,
                sourcehash: asset.sha256,
                pageurl: base.kind === 'page' ? base.url : null,
                kind: event.kind,
                classification: mapped.classification,
                resolution: mapped.resolution,
                targetkind: mapped.targetkind,
                specifier: event.specifier,
                targeturl: target?.href ?? null,
                start: event.start,
                end: event.end,
                line: event.line,
                column: event.column,
                reason: mapped.reason
              };
              dependencyRecords.push(dependency);
              if (mapped.resolution === 'unresolved') counters.unresolved += 1;
              if (mapped.resolution === 'external') counters.external += 1;
            }
          }
        }

        const prior = previous.get(asset.sha256);
        let formatted = null;
        if (args.has('--no-format')) {
          if (prior?.format?.status === 'passed' && prior.format.semanticallyequivalent === true && prior.readable === readable && existsSync(readablePath)) {
            record.format = prior.format;
            counters.preserved += 1;
          } else {
            record.format = { status: 'skipped', semanticallyequivalent: null, error: null };
            formatted = source;
          }
        } else {
          try {
            formatted = await prettier.format(source, { parser: 'babel', plugins: [babel], filepath: `${asset.sha256}.js` });
            const originalTree = fingerprint(ast);
            const formattedTree = fingerprint(parse(formatted));
            const equal = originalTree === formattedTree;
            record.format = { status: equal ? 'passed' : 'semantic-mismatch', semanticallyequivalent: equal, error: null };
            if (equal) counters.formatted += 1;
            else {
              counters.formatfailures += 1;
              formatted = source;
            }
          } catch (error) {
            record.format = { status: 'error', semanticallyequivalent: null, error: cleanmessage(error) };
            counters.formatfailures += 1;
            formatted = source;
          }
        }
        if (formatted !== null) await atomic(`${readablePath}.tmp`, formatted);
      } catch (error) {
        record.parse = { status: 'error', error: cleanmessage(error) };
        counters.parsefailures += 1;
        record.format = { status: 'not-formatted', semanticallyequivalent: null, error: null };
        await atomic(`${readablePath}.tmp`, source);
      }
    } catch (error) {
      record.parse = { status: 'error', error: cleanmessage(error) };
      if (record.verification.status === 'missing') record.verification.error = cleanmessage(error);
      counters.parsefailures += 1;
    }
    outputs.push({ ...record, types: [...asset.types].sort() });
  }

  for (const external of [...externals.values()].sort((left, right) => left.url.localeCompare(right.url))) {
    dependencyRecords.push({
      sourceurl: null,
      sourcefinal: null,
      sourcehash: null,
      pageurl: [...external.pages].sort()[0] ?? null,
      kind: 'code',
      classification: 'external',
      resolution: 'external',
      targetkind: 'code',
      specifier: external.url,
      targeturl: external.url,
      start: null,
      end: null,
      line: null,
      column: null,
      reason: [...external.reasons].sort().join('; ') || 'runtime-resource-not-mirrored'
    });
  }

  const targetmap = new Map();
  const unresolved = [];
  for (const item of dependencyRecords) {
    if (!item.targeturl) {
      unresolved.push(item);
      continue;
    }
    const target = merge(targetmap, item.targeturl, {
      url: item.targeturl,
      classification: item.classification,
      targetkind: item.targetkind,
      resolution: item.resolution,
      captured: knownurls.has(item.targeturl),
      references: []
    });
    target.references.push({ sourceurl: item.sourceurl, sourcehash: item.sourcehash, pageurl: item.pageurl, kind: item.kind, start: item.start, end: item.end, line: item.line, column: item.column });
  }

  const externalScripts = [...externals.values()].map(item => ({
    url: item.url,
    pages: [...item.pages].sort(),
    types: [...item.types].sort(),
    statuses: [...item.statuses].sort((left, right) => left - right),
    reasons: [...item.reasons].sort()
  })).sort((left, right) => left.url.localeCompare(right.url));

  const dependencies = {
    schema: 1,
    sources: outputs.map(item => ({ sha256: item.sha256, originalurls: item.originalurls })),
    dependencies: dependencyRecords,
    targets: [...targetmap.values()].map(item => ({ ...item, requested: !item.captured && /^https?:\/\//i.test(item.url) })).sort((left, right) => left.url.localeCompare(right.url)),
    unresolved,
    runtimescriptsnotcaptured: externalScripts
  };
  counters.dependencies = dependencyRecords.length;
  const bundles = {
    schema: 1,
    formatter: { name: 'Prettier', version: prettier.version, parser: 'babel' },
    input: { inventory: 'inventory.json', runtime: existsSync(runtimePath) ? 'runtime.json' : null },
    assets: outputs,
    runtimescriptsnotcaptured: externalScripts,
    summary: counters
  };

  await mkdir(clientroot, { recursive: true });
  await atomic(`${bundlePath}.tmp`, `${JSON.stringify(bundles, null, 2)}\n`);
  await atomic(`${dependencyPath}.tmp`, `${JSON.stringify(dependencies, null, 2)}\n`);
  process.stdout.write(`${JSON.stringify({ status: counters.parsefailures || counters.formatfailures ? 'completed-with-issues' : 'passed', ...counters, dependencyTargets: targetmap.size, unresolved: unresolved.length, runtimeScriptsNotCaptured: externalScripts.length }, null, 2)}\n`);
}

main().catch(error => {
  process.stderr.write(`${cleanmessage(error)}\n`);
  process.exitCode = 1;
});
