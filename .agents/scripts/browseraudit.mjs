import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const archive = path.join(root, 'web/comp.school');
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const input = JSON.parse(fs.readFileSync(0, 'utf8') || '{}');
const plan = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const endpoint = execFileSync('agent-browser', ['--session', 'runtime', 'get', 'cdp-url'], { encoding: 'utf8', timeout: 15000 }).trim().split('\n').at(-1);
const socket = new WebSocket(endpoint);
await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, { once: true }); socket.addEventListener('error', reject, { once: true }); });
let sequence = 0;
const pending = new Map();
const listeners = [];
function send(method, params = {}, sessionId) {
  const id = ++sequence;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(method + ' timed out')); }, 25000);
    pending.set(id, { resolve, reject, timer });
    socket.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
  });
}
socket.addEventListener('message', ({ data }) => {
  const message = JSON.parse(data);
  if (message.id) {
    const entry = pending.get(message.id);
    if (!entry) return;
    clearTimeout(entry.timer); pending.delete(message.id);
    if (message.error) entry.reject(new Error(message.error.message)); else entry.resolve(message.result);
  } else {
    for (const listener of listeners) listener(message);
  }
});
function safeurl(value) {
  try {
    const url = new URL(value);
    for (const key of [...url.searchParams.keys()]) if (!['v', 'version', 't', 'import', 'paper', 'topic', 'sub', 'menu', 'sql', 'revision'].includes(key)) url.searchParams.delete(key);
    url.hash = '';
    return url.href;
  } catch { return null; }
}
function scoped(value) {
  try { const url = new URL(value); return url.protocol === 'https:' && (url.hostname === 'comp.school' || url.hostname.endsWith('.comp.school')); } catch { return false; }
}
const targets = await send('Target.getTargets');
const target = targets.targetInfos.find((item) => item.type === 'page' && item.url.startsWith('https://comp.school')) || targets.targetInfos.find((item) => item.type === 'page');
if (!target) throw new Error('No browser page target');
const { sessionId: session } = await send('Target.attachToTarget', { targetId: target.targetId, flatten: true });
let login = false;
let active = null;
const responses = new Map();
const tasks = new Set();
const runtimefile = path.join(archive, 'runtime.json');
const runs = fs.existsSync(runtimefile) ? JSON.parse(fs.readFileSync(runtimefile, 'utf8')) : [];
const inventory = JSON.parse(fs.readFileSync(path.join(archive, 'inventory.json'), 'utf8'));
const saved = new Set(inventory.filter((row) => row.sha256).map((row) => row.url + '|' + row.sha256));
const failures = [];
const blocked = [];
async function capture(id, resource) {
  try {
    const { body, base64Encoded } = await send('Network.getResponseBody', { requestId: id }, session);
    const bytes = Buffer.from(body, base64Encoded ? 'base64' : 'utf8');
    if (bytes.length > 20000000) throw new Error('Code resource exceeds 20MB limit');
    if (input.password && bytes.includes(Buffer.from(input.password))) throw new Error('Credential detected in code resource; not saved');
    const hash = crypto.createHash('sha256').update(bytes).digest('hex');
    const object = path.join(archive, 'objects', hash);
    fs.writeFileSync(object, bytes);
    const row = { url: resource.url, final: resource.url, type: resource.mime, status: resource.status, bytes: bytes.length, sha256: hash, time: new Date().toISOString(), acquisition: 'browser Network.getResponseBody', page: resource.page };
    if (!saved.has(row.url + '|' + hash)) { inventory.push(row); saved.add(row.url + '|' + hash); }
    resource.sha256 = hash; resource.bytes = bytes.length;
  } catch (error) { resource.capture_error = error.message; }
}
listeners.push((message) => {
  if (message.sessionId !== session) return;
  const params = message.params || {};
  if (message.method === 'Fetch.requestPaused') {
    const request = params.request;
    const permitted = ['GET', 'HEAD', 'OPTIONS'].includes(request.method) || (login && request.method === 'POST' && new URL(request.url).pathname === '/api/login' && scoped(request.url));
    const action = permitted ? 'Fetch.continueRequest' : 'Fetch.failRequest';
    if (!permitted && active) active.blocked.push({ method: request.method, url: safeurl(request.url), reason: 'Read-only guard: non-read request blocked' });
    send(action, { requestId: params.requestId, ...(permitted ? {} : { errorReason: 'BlockedByClient' }) }, session).catch((error) => failures.push(error.message));
  }
  if (message.method === 'Network.responseReceived' && active) {
    const response = params.response;
    const clean = safeurl(response.url);
    if (!clean) return;
    const url = new URL(response.url);
    const resource = { url: clean, type: params.type, mime: response.mimeType, status: response.status, page: active.url, fromServiceWorker: !!response.fromServiceWorker };
    const code = params.type === 'Script' || params.type === 'Stylesheet' || /\.(?:m?js|css|wasm)$/.test(url.pathname) || /javascript|application\/wasm/.test(response.mimeType);
    if (code && !url.pathname.startsWith('/api/')) {
      active.resources.push(resource);
      if (response.status === 200 && clean === response.url && /javascript|css|wasm/.test(response.mimeType)) responses.set(params.requestId, resource);
      else if (!scoped(response.url)) resource.capture_error = 'External code response not eligible for capture';
      else if (clean !== response.url) resource.capture_error = 'URL contains excluded query parameters; not archived';
    }
  }
  if (message.method === 'Network.loadingFinished' && responses.has(params.requestId)) {
    const resource = responses.get(params.requestId); responses.delete(params.requestId);
    const task = capture(params.requestId, resource).finally(() => tasks.delete(task)); tasks.add(task);
  }
  if (message.method === 'Network.loadingFailed' && active) {
    const resource = responses.get(params.requestId);
    if (resource) { resource.capture_error = params.errorText; responses.delete(params.requestId); }
  }
});
await send('Page.enable', {}, session);
await send('Runtime.enable', {}, session);
await send('Network.enable', { maxTotalBufferSize: 150000000, maxResourceBufferSize: 25000000 }, session);
await send('Network.setCacheDisabled', { cacheDisabled: true }, session);
await send('Fetch.enable', { patterns: [{ urlPattern: '*', requestStage: 'Request' }] }, session);
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true, timeout: 15000 }, session);
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}
function persist() {
  fs.writeFileSync(runtimefile, JSON.stringify(runs, null, 2) + '\n');
  const temp = path.join(archive, 'inventory.runtime.tmp');
  fs.writeFileSync(temp, JSON.stringify(inventory, null, 2) + '\n'); fs.renameSync(temp, path.join(archive, 'inventory.json'));
}
try {
  if (input.username && input.password) {
    login = true;
    await send('Page.navigate', { url: 'https://comp.school/' }, session); await delay(1800);
    const expression = `(() => {const u=document.querySelector('#platform-username'),p=document.querySelector('#platform-password');if(!u||!p)return 'already-authenticated-or-no-form';const setter=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;setter.call(u,${JSON.stringify(input.username)});u.dispatchEvent(new Event('input',{bubbles:true}));setter.call(p,${JSON.stringify(input.password)});p.dispatchEvent(new Event('input',{bubbles:true}));document.querySelector('form').requestSubmit();return 'submitted';})()`;
    const state = await evaluate(expression); await delay(2500);
    const signedin = await evaluate(`!document.querySelector('#platform-password') && !!document.querySelector('nav')`);
    console.log(JSON.stringify({ login: state, authenticated: signedin }));
    login = false;
  }
  for (const job of plan) {
    if (!scoped(job.url)) throw new Error('Out-of-scope page');
    active = { url: safeurl(job.url), label: job.label || null, time: new Date().toISOString(), resources: [], blocked: [], actions: [], modes: job.modes || [] };
    try {
      await send('Page.navigate', { url: job.url }, session); await delay(job.wait || 2200);
      for (let n = 0; n < 12; n++) {
        if (!(await evaluate(`!!document.querySelector('[data-comp-school-loading]')`))) break;
        await delay(700);
      }
      for (const action of job.actions || []) {
        if (action.kind !== 'click') throw new Error('Unsupported action');
        const result = await evaluate(`(() => {const nodes=[...document.querySelectorAll('main button,main a,[role=main] button,[role=dialog] button')];const element=nodes.find(e=>e.textContent.trim()===${JSON.stringify(action.label)});if(!element)return 'not-found';element.click();return 'clicked';})()`);
        active.actions.push({ label: action.label, result }); await delay(1200);
      }
      active.observed = await evaluate(`({url:location.origin+location.pathname+location.search,title:document.title,headings:[...document.querySelectorAll('h1,h2,h3')].slice(0,20).map(e=>e.textContent.trim()),links:[...document.querySelectorAll('main a[href]')].slice(0,120).map(e=>({label:e.textContent.trim().slice(0,90),url:e.href})),buttons:[...document.querySelectorAll('main button,[role=main] button')].slice(0,80).map(e=>e.textContent.trim().slice(0,70)),login:!!document.querySelector('input[type=password]'),loading:!!document.querySelector('[data-comp-school-loading]'),workers:performance.getEntriesByType('resource').filter(e=>e.initiatorType==='worker').map(e=>e.name)})`);
      if (/\/editor(?:\/|\?|$)/.test(job.url) || /https:\/\/(?:preview-[^.]+\.)?(?:admin|homework|mark|printouts|self-assess)\.comp\.school/.test(job.url)) {
        active.observed.headings = [];
        active.observed.buttons = [];
        active.observed.links = [];
        active.observed.redaction = 'Account/project-facing UI text omitted; only script/resource coverage retained';
      }
      active.observed.url = safeurl(active.observed.url);
      active.observed.links = active.observed.links.map((link) => ({ label: link.label, url: safeurl(link.url) })).filter((link) => link.url);
      await Promise.all([...tasks]);
    } catch (error) { active.error = error.message; }
    runs.push(active); persist();
    console.log(JSON.stringify({ page: active.url, label: active.label, scripts: active.resources.filter((row) => row.type === 'Script').length, resources: active.resources.length, blocked: active.blocked.length, login: active.observed?.login, error: active.error }));
    active = null;
    await delay(650);
  }
} finally {
  await Promise.all([...tasks]); persist();
  await send('Fetch.disable', {}, session).catch(() => {});
  socket.close();
}
