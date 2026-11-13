import { j as t, r as v } from "./react-vendor-BK1G6oO1.js";
import { aq as et, aT as tt } from "./GameNotebook-b0Qw2wzd.js";
import { u as nt } from "./helpers-DmEFZcxj.js";
import { u as st } from "./keyword-flashcards-Ha6Msavb.js";
import "./index-DjyiOHey.js";
import "./ui-components-DeMDYLzO.js";
const Ie = [
  { id: "and", label: "D shape, flat back, no circle", inputs: 2, gate: "AND" },
  {
    id: "or",
    label: "Shield shape, curved back, no circle",
    inputs: 2,
    gate: "OR",
  },
  { id: "not", label: "Triangle with a circle", inputs: 1, gate: "NOT" },
  {
    id: "buffer",
    label: "Triangle without a circle",
    inputs: 1,
    gate: null,
    problem:
      "A NOT gate needs the circle on its output. A triangle without it does not score.",
  },
  {
    id: "nand",
    label: "D shape with a circle",
    inputs: 2,
    gate: null,
    problem:
      "Only NOT has the circle. A D shape with a circle is not an AND gate.",
  },
  {
    id: "nor",
    label: "Shield shape with a circle",
    inputs: 2,
    gate: null,
    problem:
      "Only NOT has the circle. A shield shape with a circle is not an OR gate.",
  },
];
function Y(e) {
  return Ie.find((n) => n.id === e);
}
const he = ["s0", "s1", "s2", "s3", "s4", "s5"],
  Me = { s0: 0, s1: 0, s2: 0, s3: 1, s4: 1, s5: 2 },
  rt = { gates: {}, output: null };
function V(e) {
  return e.startsWith("s");
}
function Fe(e, n) {
  return !V(e) || Me[e] < Me[n];
}
function it(e, n, s) {
  const r = e.gates[n],
    i = Y(s).inputs,
    u = Array.from({ length: i }, (x, d) => r?.inputs[d] ?? null);
  return { ...e, gates: { ...e.gates, [n]: { piece: s, inputs: u } } };
}
function ot(e, n) {
  const s = {};
  for (const r of he) {
    const i = e.gates[r];
    !i ||
      r === n ||
      (s[r] = { ...i, inputs: i.inputs.map((u) => (u === n ? null : u)) });
  }
  return { gates: s, output: e.output === n ? null : e.output };
}
function at(e, n) {
  const s = e.gates[n];
  return s
    ? {
        ...e,
        gates: { ...e.gates, [n]: { ...s, inputs: s.inputs.map(() => null) } },
      }
    : e;
}
function ct(e, n, s, r) {
  if (s === "out") return V(n) && e.gates[n] ? { ...e, output: n } : e;
  const i = e.gates[s];
  if (!i || !Fe(n, s)) return e;
  const u = i.inputs.indexOf(null),
    x = r ?? (u >= 0 ? u : i.inputs.length - 1),
    d = i.inputs.map((o, a) => (a === x ? n : o));
  return { ...e, gates: { ...e.gates, [s]: { ...i, inputs: d } } };
}
function lt(e) {
  const n = [],
    s = new Map();
  function r(o) {
    if (!V(o)) return { kind: "input", name: o };
    if (s.has(o)) return s.get(o);
    const a = e.gates[o];
    let c = null;
    if (a) {
      const h = Y(a.piece),
        j = a.inputs.map((p) => (p ? r(p) : null));
      h.gate &&
        j.every((p) => p !== null) &&
        a.inputs.every((p) => p !== null) &&
        (c =
          h.gate === "NOT"
            ? { kind: "NOT", a: j[0] }
            : { kind: h.gate, a: j[0], b: j[1] });
    }
    return (s.set(o, c), c);
  }
  const i = he.filter((o) => e.gates[o]);
  for (const o of i) {
    const a = e.gates[o],
      c = Y(a.piece);
    c.gate || n.push({ kind: "shape", slot: o, piece: a.piece });
    const h = a.inputs.filter((j) => j !== null).length;
    h < c.inputs &&
      n.push({ kind: "unwired", slot: o, piece: a.piece, wired: h });
  }
  i.length === 0
    ? n.push({ kind: "no-gates" })
    : e.output || n.push({ kind: "no-output" });
  const u = new Set(),
    x = (o) => {
      !o ||
        !V(o) ||
        u.has(o) ||
        !e.gates[o] ||
        (u.add(o), e.gates[o].inputs.forEach(x));
    };
  x(e.output);
  const d = i.map((o) => r(o)).filter((o) => o !== null);
  return {
    expr: e.output ? r(e.output) : null,
    gates: d,
    extraGates: i.length - u.size,
    problems: n,
  };
}
function Oe(e) {
  switch (e.kind) {
    case "no-gates":
      return "Drag a gate shape into a box first.";
    case "no-output":
      return "Nothing is wired to the output. Drag from the last gate’s output to it.";
    case "shape":
      return Y(e.piece).problem;
    case "unwired": {
      const s = Y(e.piece).inputs === 1 ? "one input" : "two inputs";
      return `A gate is missing an input: it has ${e.wired} and needs ${s}.`;
    }
  }
}
const ut = {
    id: "wide",
    viewBox: { w: 640, h: 380 },
    scale: 1.5,
    inputs: { A: { x: 40, y: 70 }, B: { x: 40, y: 190 }, C: { x: 40, y: 310 } },
    slots: {
      s0: { x: 175, y: 70 },
      s1: { x: 175, y: 190 },
      s2: { x: 175, y: 310 },
      s3: { x: 345, y: 130 },
      s4: { x: 345, y: 250 },
      s5: { x: 500, y: 190 },
    },
    output: { x: 604, y: 190 },
  },
  dt = {
    id: "tall",
    viewBox: { w: 400, h: 460 },
    scale: 1.12,
    inputs: { A: { x: 26, y: 75 }, B: { x: 26, y: 230 }, C: { x: 26, y: 385 } },
    slots: {
      s0: { x: 112, y: 75 },
      s1: { x: 112, y: 230 },
      s2: { x: 112, y: 385 },
      s3: { x: 220, y: 152 },
      s4: { x: 220, y: 308 },
      s5: { x: 316, y: 230 },
    },
    output: { x: 378, y: 230 },
  },
  T = { half: 27, lead: 37, pinGap: 12, halfHeight: 24 };
function ht(e, n, s, r) {
  const i = e.slots[n],
    u = s === 1 ? 0 : r === 0 ? -12 : T.pinGap;
  return { x: i.x - T.lead * e.scale, y: i.y + u * e.scale };
}
function ue(e, n) {
  const s = e.slots[n];
  return { x: s.x + T.lead * e.scale, y: s.y };
}
function We(e, n) {
  if (V(n)) return ue(e, n);
  const s = e.inputs[n];
  return { x: s.x + 18, y: s.y };
}
const Te = {
  empty: "Write the expression first.",
  unknown: "Use only A, B, C, AND, OR, NOT and brackets.",
  brackets: "Every opening bracket needs a closing one.",
  incomplete:
    "Something is missing: each AND and OR needs something on both sides, and NOT needs something after it.",
  mixed:
    "Add brackets. A OR B AND C could mean two different circuits, so it does not score.",
};
function pt(e) {
  const n = e.toUpperCase().match(/\(|\)|[A-Z]+|\S/g) ?? [];
  for (const s of n)
    if (!["A", "B", "C", "AND", "OR", "NOT", "(", ")"].includes(s)) return null;
  return n;
}
function qe(e) {
  const n = pt(e);
  if (n === null) return { ok: !1, error: "unknown" };
  if (n.length === 0) return { ok: !1, error: "empty" };
  let s = 0,
    r = null;
  function i(o) {
    return ((r ??= o), null);
  }
  function u() {
    const o = n[s];
    if (o === void 0) return i("incomplete");
    if (o === "NOT") {
      s += 1;
      const a = u();
      return a ? { kind: "NOT", a } : null;
    }
    if (o === "(") {
      s += 1;
      const a = x();
      return a ? (n[s] !== ")" ? i("brackets") : ((s += 1), a)) : null;
    }
    return o === "A" || o === "B" || o === "C"
      ? ((s += 1), { kind: "input", name: o })
      : i(
          o === ")"
            ? n.slice(0, s).includes("(")
              ? "incomplete"
              : "brackets"
            : "incomplete",
        );
  }
  function x() {
    let o = u();
    if (!o) return null;
    let a = null;
    for (; n[s] === "AND" || n[s] === "OR";) {
      const c = n[s];
      if (a && a !== c) return i("mixed");
      ((a = c), (s += 1));
      const h = u();
      if (!h) return null;
      o = { kind: c, a: o, b: h };
    }
    return o;
  }
  const d = x();
  return d && s < n.length
    ? { ok: !1, error: n[s] === ")" ? "brackets" : "incomplete" }
    : d
      ? { ok: !0, expr: d }
      : { ok: !1, error: r ?? "incomplete" };
}
function xt(e) {
  const n = qe(e);
  if (!n.ok) throw new Error(`Cannot parse "${e}": ${n.error}`);
  return n.expr;
}
function ee(e) {
  const n = (s) => (s.kind === "AND" || s.kind === "OR" ? `(${ee(s)})` : ee(s));
  switch (e.kind) {
    case "input":
      return e.name;
    case "NOT":
      return `NOT ${n(e.a)}`;
    default:
      return `${n(e.a)} ${e.kind} ${n(e.b)}`;
  }
}
function C(e, n) {
  switch (e.kind) {
    case "input":
      return n[e.name] ?? 0;
    case "NOT":
      return C(e.a, n) ? 0 : 1;
    case "AND":
      return C(e.a, n) && C(e.b, n) ? 1 : 0;
    case "OR":
      return C(e.a, n) || C(e.b, n) ? 1 : 0;
  }
}
function ft(e) {
  const n = new Set(),
    s = (r) => {
      r.kind === "input"
        ? n.add(r.name)
        : r.kind === "NOT"
          ? s(r.a)
          : (s(r.a), s(r.b));
    };
  return (s(e), ["A", "B", "C"].filter((r) => n.has(r)));
}
function Z(e) {
  return e.kind === "input"
    ? 0
    : e.kind === "NOT"
      ? 1 + Z(e.a)
      : 1 + Z(e.a) + Z(e.b);
}
function ne(e) {
  return e.kind === "input"
    ? []
    : e.kind === "NOT"
      ? [e, ...ne(e.a)]
      : [e, ...ne(e.a), ...ne(e.b)];
}
function we(e) {
  const n = [];
  for (let s = 0; s < 2 ** e.length; s += 1) {
    const r = {};
    (e.forEach((i, u) => {
      r[i] = (s >> (e.length - 1 - u)) & 1;
    }),
      n.push(r));
  }
  return n;
}
function Ce(e, n, s) {
  return we(s).every((r) => C(e, r) === C(n, r));
}
const Ye = [
  {
    id: "alarm",
    title: "Bike shed alarm",
    output: "P",
    outputMeaning: "the alarm sounds",
    inputs: {
      A: "the shed door is open",
      B: "it is night",
      C: "the alarm is set",
    },
    rule: "The alarm sounds when the shed door is open and either it is night or the alarm is set.",
    expression: "A AND (B OR C)",
  },
  {
    id: "sprinkler",
    title: "Greenhouse sprinkler",
    output: "P",
    outputMeaning: "the sprinkler turns on",
    inputs: {
      A: "the soil is wet",
      B: "it is early morning",
      C: "the water button is pressed",
    },
    rule: "The sprinkler turns on when the soil is not wet and either it is early morning or the water button is pressed.",
    expression: "NOT A AND (B OR C)",
  },
  {
    id: "vending",
    title: "Vending machine",
    output: "P",
    outputMeaning: "a snack drops",
    inputs: {
      A: "a coin is put in",
      B: "a card is tapped",
      C: "the snack is sold out",
    },
    rule: "A snack drops when a coin is put in or a card is tapped, and the snack is not sold out.",
    expression: "(A OR B) AND NOT C",
  },
  {
    id: "street-light",
    title: "Street light",
    output: "P",
    outputMeaning: "the street light comes on",
    inputs: {
      A: "it is dark",
      B: "motion is detected",
      C: "the override switch is on",
    },
    rule: "The street light comes on when it is dark and motion is detected, or when the override switch is on.",
    expression: "(A AND B) OR C",
  },
  {
    id: "pet-flap",
    title: "Pet flap",
    output: "P",
    outputMeaning: "the flap opens",
    inputs: {
      A: "the flap is locked",
      B: "the pet’s microchip is read",
      C: "it is daytime",
    },
    rule: "The flap opens when it is not locked, or when the pet’s microchip is read and it is daytime.",
    expression: "NOT A OR (B AND C)",
  },
  {
    id: "barrier",
    title: "Car park barrier",
    output: "P",
    outputMeaning: "the barrier lifts",
    inputs: {
      A: "the ticket is paid",
      B: "the barrier is jammed",
      C: "a car is at the barrier",
    },
    rule: "The barrier lifts when the ticket is paid and the barrier is not jammed, and a car is at the barrier.",
    expression: "(A AND NOT B) AND C",
  },
  {
    id: "vault",
    title: "Bank vault",
    output: "P",
    outputMeaning: "the vault opens",
    inputs: { A: "the key is turned", B: "the code is correct" },
    rule: "The vault opens only when the key is turned and the code is correct.",
    expression: "A AND B",
  },
  {
    id: "doorbell",
    title: "Doorbell camera",
    output: "P",
    outputMeaning: "the camera records",
    inputs: { A: "the bell is pressed", B: "motion is detected" },
    rule: "The camera records when the bell is pressed or motion is detected.",
    expression: "A OR B",
  },
  {
    id: "dashboard",
    title: "Seatbelt warning light",
    output: "P",
    outputMeaning: "the warning light is on",
    inputs: { A: "the seatbelt is fastened", B: "the car door is shut" },
    rule: "The warning light is on unless the seatbelt is fastened and the car door is shut.",
    expression: "NOT (A AND B)",
  },
  {
    id: "fridge",
    title: "Fridge alarm",
    output: "P",
    outputMeaning: "the fridge beeps",
    inputs: { A: "the fridge door is open", B: "the alarm is muted" },
    rule: "The fridge beeps when the door is open and the alarm is not muted.",
    expression: "A AND NOT B",
  },
  {
    id: "fire-door",
    title: "Fire door",
    output: "P",
    outputMeaning: "the fire door unlocks",
    inputs: {
      A: "the fire alarm is sounding",
      B: "a staff card is scanned",
      C: "the building is open",
    },
    rule: "The fire door unlocks when the fire alarm is sounding, or when a staff card is scanned and the building is open.",
    expression: "A OR (B AND C)",
  },
  {
    id: "speaker",
    title: "Smart speaker",
    output: "P",
    outputMeaning: "music plays",
    inputs: {
      A: "the wake word is heard",
      B: "the play button is pressed",
      C: "the speaker is switched on",
    },
    rule: "Music plays when the wake word is heard or the play button is pressed, and the speaker is switched on.",
    expression: "(A OR B) AND C",
  },
  {
    id: "ride",
    title: "Roller coaster",
    output: "P",
    outputMeaning: "the ride starts",
    inputs: {
      A: "the safety bar is locked",
      B: "the track is clear",
      C: "the start button is pressed",
    },
    rule: "The ride starts when the safety bar is locked and the track is clear, and the start button is pressed.",
    expression: "(A AND B) AND C",
  },
];
function gt(e) {
  return xt(e.expression);
}
function ze(e) {
  return ["A", "B", "C"].filter((n) => e.inputs[n] !== void 0);
}
function kt(e) {
  const n = Ye.find((s) => s.id === e);
  if (!n) throw new Error(`Unknown scenario ${e}`);
  return n;
}
const Ve = ["build", "table", "read", "build", "table", "read"],
  se = Ve.length,
  ke = 3;
function Be(e = Math.random) {
  const n = [...Ye];
  for (let r = n.length - 1; r > 0; r -= 1) {
    const i = Math.floor(e() * (r + 1));
    [n[r], n[i]] = [n[i], n[r]];
  }
  const s = [];
  for (const r of Ve) {
    const i = n.findIndex((x) => r !== "build" || ze(x).length === 3),
      [u] = n.splice(i, 1);
    s.push({ mode: r, scenario: u.id });
  }
  return s;
}
function me(e, n, s, { extraGates: r = 0, gates: i } = {}) {
  const u = Z(n);
  if (e !== null && r === 0 && Z(e) <= u && Ce(e, n, s))
    return { earned: u, total: u, correct: !0 };
  const d = i ?? (e ? ne(e) : []),
    o = new Set();
  let a = 0;
  for (const c of ne(n)) {
    const h = d.findIndex(
      (j, p) => !o.has(p) && j.kind === c.kind && Ce(j, c, s),
    );
    h >= 0 && (o.add(h), (a += 1));
  }
  return { earned: Math.min(a, u - 1), total: u, correct: !1 };
}
function mt(e, n, s) {
  const r = e.inputs.map((o) => {
      const a = {};
      return (
        s.forEach((c, h) => {
          a[c] = o[h] ?? void 0;
        }),
        a
      );
    }),
    i = [];
  if (
    (r.forEach((o, a) => {
      (!s.every((h) => o[h] === 0 || o[h] === 1) || e.outputs[a] !== C(n, o)) &&
        i.push(a);
    }),
    s.length === 3)
  ) {
    let o = 0;
    for (let a = 0; a < 4; a += 1)
      !i.includes(a * 2) && !i.includes(a * 2 + 1) && (o += 1);
    return { earned: o, total: 4, correct: o === 4, wrongRows: i };
  }
  const u = new Set(r.map((o) => s.map((a) => o[a] ?? "-").join(""))),
    x = u.size === 2 ** s.length && [...u].every((o) => /^[01]+$/.test(o)),
    d = (x ? 1 : 0) + (x && i.length === 0 ? 1 : 0);
  return { earned: d, total: 2, correct: d === 2, wrongRows: i };
}
function de(e, n, s) {
  return we(s).find((r) => C(e, r) !== C(n, r)) ?? null;
}
function wt(e, n) {
  return n.map((s) => `${s} = ${e[s] ?? 0}`).join(", ");
}
function jt(e, n) {
  const s = n === 0 ? 0 : e / n;
  return s === 1
    ? "Chief engineer"
    : s >= 0.75
      ? "Senior engineer"
      : s >= 0.5
        ? "Engineer"
        : "Apprentice";
}
function re(e, n, s) {
  if (Math.abs(e.y - n.y) < 0.5) return `M${e.x} ${e.y} H${n.x}`;
  const r = s ?? (e.x + n.x) / 2;
  return `M${e.x} ${e.y} H${r} V${n.y} H${n.x}`;
}
const yt = 130,
  Le = 110,
  le = 40;
function ie(e) {
  return e.kind === "input"
    ? 0
    : e.kind === "NOT"
      ? ie(e.a) + 1
      : Math.max(ie(e.a), ie(e.b)) + 1;
}
function bt(e, n = ft(e)) {
  const s = ie(e),
    r = new Map(n.map((c, h) => [c, 60 + h * Le])),
    i = 120 + (n.length - 1) * Le,
    u = (c) => le + 60 + (c - 0.5) * yt,
    x = [];
  function d(c) {
    if (c.kind === "input") return { x: le + 18, y: r.get(c.name) ?? 60 };
    const h = c.kind === "NOT" ? [c.a] : [c.a, c.b],
      j = h.map(d),
      p = ie(c),
      b = j.reduce((m, N) => m + N.y, 0) / j.length,
      $ = u(p),
      w = j
        .map((m, N) => ({ out: m, index: N }))
        .sort((m, N) => m.out.y - N.out.y),
      y = c.kind === "AND" ? "and" : c.kind === "OR" ? "or" : "not",
      W =
        h.length === 1
          ? [{ x: $ - T.lead, y: b }]
          : [
              { x: $ - T.lead, y: b - T.pinGap },
              { x: $ - T.lead, y: b + T.pinGap },
            ],
      g = w.map(({ out: m }) => m),
      M = g.map((m, N) =>
        m.x <= le + 18 ? $ - T.lead - 14 - N * 8 : (m.x + W[N].x) / 2,
      );
    return (
      x.push({ piece: y, x: $, y: b, ins: W, from: g, bends: M }),
      { x: $ + T.lead, y: b }
    );
  }
  const o = d(e),
    a = u(s) + T.lead + 90;
  return {
    width: a,
    height: i,
    inputs: n.map((c) => ({ letter: c, x: le, y: r.get(c) })),
    gates: x,
    output: { x: a - 30, y: o.y, from: o },
  };
}
const pe = "#020617",
  S = "#0b1530",
  F = "#14213f",
  O = "#22325a",
  G = "#3a4d7a",
  H = "#6b7fa8",
  A = "#a9b8d6",
  U = "#e6ecf7",
  Re = "#ffffff",
  Ue = "#0f766e",
  E = "#2dd4bf",
  Q = "#ccfbf1",
  Ke = "#b45309",
  L = "#fbbf24",
  xe = "#fef3c7",
  Nt = "#fb7185",
  $t = "#b79cf2",
  X = "#6d55b8",
  vt = "#e9defd",
  At = U,
  R = T.half,
  D = T.halfHeight,
  Mt = (e) => `M${-R} ${-D} H${e - D} A${D} ${D} 0 0 1 ${e - D} ${D} H${-R} Z`,
  Ot = (e) =>
    `M${-R} ${-D} Q${-R + 12} 0 ${-R} ${D} Q${e - 22} ${D} ${e} 0 Q${e - 22} ${-D} ${-R} ${-D} Z`,
  Wt = (e) => `M${-R} ${-D + 2} L${e} 0 L${-R} ${D - 2} Z`,
  ge = 6;
function Tt(e) {
  const n = [-12, T.pinGap];
  switch (e) {
    case "or":
    case "nor":
      return n.map((s) => ({ y: s, x: -R + 6 }));
    case "and":
    case "nand":
      return n.map((s) => ({ y: s, x: -R }));
    default:
      return [{ y: 0, x: -R }];
  }
}
function J({
  piece: e,
  x: n = 0,
  y: s = 0,
  scale: r = 1,
  stroke: i = At,
  fill: u = F,
  outputStroke: x,
}) {
  const d = e === "not" || e === "nand" || e === "nor",
    o = d ? R - ge * 2 - 2 : R;
  let a;
  return (
    e === "and" || e === "nand"
      ? (a = Mt(o))
      : e === "or" || e === "nor"
        ? (a = Ot(o))
        : (a = Wt(o)),
    t.jsxs("g", {
      transform: `translate(${n} ${s}) scale(${r})`,
      "data-gate-shape": e,
      children: [
        Tt(e).map((c) =>
          t.jsx(
            "line",
            {
              x1: -37,
              y1: c.y,
              x2: c.x,
              y2: c.y,
              stroke: i,
              strokeWidth: 3,
              strokeLinecap: "round",
              vectorEffect: "non-scaling-stroke",
            },
            c.y,
          ),
        ),
        t.jsx("line", {
          x1: R,
          y1: 0,
          x2: T.lead,
          y2: 0,
          stroke: x ?? i,
          strokeWidth: 3,
          strokeLinecap: "round",
          vectorEffect: "non-scaling-stroke",
        }),
        t.jsx("path", {
          d: a,
          fill: u,
          stroke: i,
          strokeWidth: 3,
          strokeLinejoin: "round",
          vectorEffect: "non-scaling-stroke",
        }),
        d
          ? t.jsx("circle", {
              cx: o + ge + 1,
              cy: 0,
              r: ge,
              fill: u,
              stroke: i,
              strokeWidth: 3,
              vectorEffect: "non-scaling-stroke",
            })
          : null,
      ],
    })
  );
}
function Se({ piece: e }) {
  return t.jsx("svg", {
    viewBox: "-44 -30 88 60",
    width: "100%",
    height: "100%",
    "aria-hidden": "true",
    focusable: "false",
    className: "gw-piece-art",
    children: t.jsx(J, { piece: e }),
  });
}
function je({ expr: e, letters: n, output: s = "P", label: r }) {
  const i = bt(e, n);
  return t.jsxs("svg", {
    viewBox: `0 0 ${i.width} ${i.height}`,
    width: "100%",
    role: "img",
    "aria-label": r,
    className: "gw-circuit",
    "data-circuit": !0,
    "data-gates": Z(e),
    style: { maxWidth: `${i.width * 1.6}px` },
    children: [
      t.jsx("rect", {
        x: 0,
        y: 0,
        width: i.width,
        height: i.height,
        rx: 18,
        fill: S,
      }),
      i.gates.map((u, x) =>
        u.from.map((d, o) =>
          t.jsx(
            "path",
            {
              d: re(d, u.ins[o], u.bends[o]),
              fill: "none",
              stroke: A,
              strokeWidth: 3,
              strokeLinejoin: "round",
            },
            `${x}-${o}`,
          ),
        ),
      ),
      t.jsx("path", {
        d: re(i.output.from, { x: i.output.x - 18, y: i.output.y }),
        fill: "none",
        stroke: A,
        strokeWidth: 3,
      }),
      i.gates.map((u, x) => t.jsx(J, { piece: u.piece, x: u.x, y: u.y }, x)),
      i.inputs.map((u) =>
        t.jsx(q, { x: u.x, y: u.y, label: u.letter }, u.letter),
      ),
      t.jsx(q, { x: i.output.x, y: i.output.y, label: s, output: !0 }),
    ],
  });
}
function q({ x: e, y: n, label: s, output: r = !1, lit: i = !1 }) {
  return t.jsxs("g", {
    "data-terminal": s,
    children: [
      t.jsx("circle", {
        cx: e,
        cy: n,
        r: 18,
        fill: i ? Ue : r ? O : F,
        stroke: i ? E : r ? L : U,
        strokeWidth: 3,
      }),
      t.jsx("text", {
        x: e,
        y: n + 7,
        textAnchor: "middle",
        fontSize: 20,
        fontWeight: 700,
        fill: i ? Q : r ? xe : U,
        fontFamily: "inherit",
        children: s,
      }),
    ],
  });
}
function Xe({ mood: e = "calm", className: n }) {
  return t.jsx("svg", {
    viewBox: "0 0 120 120",
    className: n,
    "aria-hidden": "true",
    focusable: "false",
    "data-character": !0,
    children: t.jsx(Ze, { mood: e }),
  });
}
function Ze({ mood: e = "calm" }) {
  return t.jsxs("g", {
    className: "gw-owl-bob",
    children: [
      t.jsx("path", {
        d: "M60 14c26 0 42 20 42 48s-16 46-42 46-42-18-42-46 16-48 42-48z",
        fill: $t,
        stroke: X,
        strokeWidth: 3,
      }),
      t.jsx("path", {
        d: "M30 22l10 14M90 22l-10 14",
        stroke: X,
        strokeWidth: 5,
        strokeLinecap: "round",
      }),
      t.jsx("path", {
        d: "M60 64c16 0 26 10 26 24s-10 18-26 18-26-4-26-18 10-24 26-24z",
        fill: vt,
      }),
      t.jsx("circle", {
        cx: 44,
        cy: 52,
        r: 14,
        fill: Re,
        stroke: X,
        strokeWidth: 3,
      }),
      t.jsx("circle", {
        cx: 76,
        cy: 52,
        r: 14,
        fill: Re,
        stroke: X,
        strokeWidth: 3,
      }),
      t.jsx("circle", {
        cx: e === "worried" ? 42 : 46,
        cy: e === "happy" ? 50 : 54,
        r: 6,
        fill: S,
      }),
      t.jsx("circle", {
        cx: e === "worried" ? 74 : 78,
        cy: e === "happy" ? 50 : 54,
        r: 6,
        fill: S,
      }),
      e === "happy"
        ? t.jsx("path", {
            d: "M34 40q10-6 20 0M66 40q10-6 20 0",
            stroke: X,
            strokeWidth: 3,
            fill: "none",
            strokeLinecap: "round",
          })
        : e === "worried"
          ? t.jsx("path", {
              d: "M34 36l20 6M86 36l-20 6",
              stroke: X,
              strokeWidth: 3,
              strokeLinecap: "round",
            })
          : null,
      t.jsx("path", {
        d: "M54 66l6 10 6-10z",
        fill: L,
        stroke: Ke,
        strokeWidth: 2,
        strokeLinejoin: "round",
      }),
      t.jsx("path", {
        d: "M22 54c0-26 16-40 38-40s38 14 38 40",
        fill: "none",
        stroke: O,
        strokeWidth: 5,
      }),
      t.jsx("rect", { x: 14, y: 48, width: 12, height: 20, rx: 5, fill: O }),
      t.jsx("rect", { x: 94, y: 48, width: 12, height: 20, rx: 5, fill: O }),
      t.jsx("path", {
        d: "M20 68c0 14 10 20 22 20",
        fill: "none",
        stroke: O,
        strokeWidth: 4,
        strokeLinecap: "round",
      }),
      t.jsx("circle", { cx: 44, cy: 88, r: 4, fill: E }),
    ],
  });
}
function Qe({ device: e, on: n }) {
  const s = n ? E : H,
    r = n ? Q : O;
  switch (e) {
    case "alarm":
      return t.jsxs("g", {
        children: [
          t.jsx("rect", {
            x: 18,
            y: 60,
            width: 64,
            height: 24,
            rx: 6,
            fill: O,
            stroke: A,
            strokeWidth: 3,
          }),
          t.jsx("path", {
            d: "M30 60V40a20 20 0 0 1 40 0v20z",
            fill: r,
            stroke: s,
            strokeWidth: 3,
          }),
          n
            ? t.jsx("path", {
                d: "M12 30l10 6M88 30l-10 6M50 6v10",
                stroke: E,
                strokeWidth: 4,
                strokeLinecap: "round",
              })
            : null,
        ],
      });
    case "sprinkler":
      return t.jsxs("g", {
        children: [
          t.jsx("rect", {
            x: 44,
            y: 56,
            width: 12,
            height: 30,
            fill: G,
            stroke: A,
            strokeWidth: 3,
          }),
          t.jsx("rect", {
            x: 30,
            y: 46,
            width: 40,
            height: 12,
            rx: 4,
            fill: O,
            stroke: A,
            strokeWidth: 3,
          }),
          n
            ? t.jsx("path", {
                d: "M30 44q-10-20-20-22M50 40V14M70 44q10-20 20-22M40 42q-4-16-12-24M60 42q4-16 12-24",
                stroke: E,
                strokeWidth: 3,
                strokeLinecap: "round",
                fill: "none",
                strokeDasharray: "4 5",
              })
            : null,
          t.jsx("rect", { x: 20, y: 84, width: 60, height: 8, rx: 3, fill: G }),
        ],
      });
    case "vending":
      return t.jsxs("g", {
        children: [
          t.jsx("rect", {
            x: 22,
            y: 10,
            width: 56,
            height: 80,
            rx: 6,
            fill: O,
            stroke: A,
            strokeWidth: 3,
          }),
          t.jsx("rect", {
            x: 30,
            y: 18,
            width: 30,
            height: 46,
            rx: 3,
            fill: S,
            stroke: H,
            strokeWidth: 2,
          }),
          t.jsx("rect", {
            x: 64,
            y: 20,
            width: 8,
            height: 14,
            rx: 2,
            fill: r,
            stroke: s,
            strokeWidth: 2,
          }),
          t.jsx("rect", {
            x: 30,
            y: 70,
            width: 40,
            height: 12,
            rx: 3,
            fill: S,
            stroke: H,
            strokeWidth: 2,
          }),
          n
            ? t.jsx("rect", {
                x: 38,
                y: 72,
                width: 22,
                height: 8,
                rx: 2,
                fill: L,
              })
            : null,
        ],
      });
    case "street-light":
      return t.jsxs("g", {
        children: [
          t.jsx("path", {
            d: "M30 94V22q0-10 10-10h26",
            fill: "none",
            stroke: A,
            strokeWidth: 5,
            strokeLinecap: "round",
          }),
          t.jsx("path", {
            d: "M56 12h26l-6 12H62z",
            fill: O,
            stroke: A,
            strokeWidth: 3,
            strokeLinejoin: "round",
          }),
          n
            ? t.jsx("path", {
                d: "M60 26L48 70h44L80 26z",
                fill: xe,
                opacity: 0.5,
              })
            : null,
          t.jsx("rect", {
            x: 60,
            y: 24,
            width: 18,
            height: 5,
            rx: 2,
            fill: n ? L : H,
          }),
          t.jsx("rect", { x: 20, y: 88, width: 22, height: 6, rx: 2, fill: G }),
        ],
      });
    case "pet-flap":
      return t.jsxs("g", {
        children: [
          t.jsx("rect", {
            x: 10,
            y: 10,
            width: 80,
            height: 80,
            rx: 6,
            fill: O,
            stroke: A,
            strokeWidth: 3,
          }),
          t.jsx("rect", {
            x: 26,
            y: 34,
            width: 48,
            height: 48,
            rx: 8,
            fill: S,
            stroke: A,
            strokeWidth: 3,
          }),
          n
            ? t.jsx("path", {
                d: "M28 36h44l-6 22H34z",
                fill: G,
                stroke: E,
                strokeWidth: 3,
                strokeLinejoin: "round",
              })
            : t.jsx("rect", {
                x: 30,
                y: 38,
                width: 40,
                height: 40,
                rx: 6,
                fill: G,
                stroke: H,
                strokeWidth: 3,
              }),
          t.jsx("circle", { cx: 50, cy: 22, r: 5, fill: s }),
        ],
      });
    case "barrier":
      return t.jsxs("g", {
        children: [
          t.jsx("rect", {
            x: 10,
            y: 46,
            width: 16,
            height: 44,
            rx: 3,
            fill: O,
            stroke: A,
            strokeWidth: 3,
          }),
          t.jsxs("g", {
            transform: n ? "rotate(-60 18 52)" : void 0,
            children: [
              t.jsx("rect", {
                x: 18,
                y: 46,
                width: 76,
                height: 12,
                rx: 4,
                fill: U,
                stroke: A,
                strokeWidth: 2,
              }),
              t.jsx("path", {
                d: "M34 46v12M50 46v12M66 46v12M82 46v12",
                stroke: L,
                strokeWidth: 6,
              }),
            ],
          }),
          t.jsx("circle", { cx: 18, cy: 38, r: 5, fill: s }),
        ],
      });
    case "vault":
      return t.jsxs("g", {
        children: [
          t.jsx("rect", {
            x: 14,
            y: 14,
            width: 72,
            height: 72,
            rx: 8,
            fill: O,
            stroke: A,
            strokeWidth: 3,
          }),
          t.jsx("circle", {
            cx: 50,
            cy: 50,
            r: 22,
            fill: F,
            stroke: s,
            strokeWidth: 4,
          }),
          t.jsx("path", {
            d: n ? "M50 50l14-14M50 50L36 64" : "M50 32v36M32 50h36",
            stroke: s,
            strokeWidth: 4,
            strokeLinecap: "round",
          }),
          n
            ? t.jsx("rect", { x: 78, y: 14, width: 8, height: 72, fill: xe })
            : null,
        ],
      });
    case "doorbell":
      return t.jsxs("g", {
        children: [
          t.jsx("rect", {
            x: 30,
            y: 8,
            width: 40,
            height: 84,
            rx: 14,
            fill: O,
            stroke: A,
            strokeWidth: 3,
          }),
          t.jsx("circle", {
            cx: 50,
            cy: 32,
            r: 12,
            fill: S,
            stroke: H,
            strokeWidth: 3,
          }),
          t.jsx("circle", { cx: 50, cy: 32, r: 5, fill: s }),
          t.jsx("circle", {
            cx: 50,
            cy: 68,
            r: 10,
            fill: F,
            stroke: A,
            strokeWidth: 3,
          }),
          n ? t.jsx("circle", { cx: 64, cy: 18, r: 4, fill: L }) : null,
        ],
      });
    case "dashboard":
      return t.jsxs("g", {
        children: [
          t.jsx("rect", {
            x: 10,
            y: 22,
            width: 80,
            height: 56,
            rx: 12,
            fill: O,
            stroke: A,
            strokeWidth: 3,
          }),
          t.jsx("circle", { cx: 50, cy: 40, r: 7, fill: n ? L : H }),
          t.jsx("path", {
            d: "M50 48v16M40 52l10 6 10-6",
            stroke: n ? L : H,
            strokeWidth: 4,
            strokeLinecap: "round",
            fill: "none",
          }),
          t.jsx("path", {
            d: "M36 34l28 34",
            stroke: n ? L : H,
            strokeWidth: 3,
          }),
        ],
      });
    case "fridge":
      return t.jsxs("g", {
        children: [
          t.jsx("rect", {
            x: 26,
            y: 6,
            width: 48,
            height: 88,
            rx: 6,
            fill: O,
            stroke: A,
            strokeWidth: 3,
          }),
          t.jsx("path", { d: "M26 36h48", stroke: A, strokeWidth: 3 }),
          t.jsx("path", {
            d: "M64 16v12M64 46v18",
            stroke: A,
            strokeWidth: 4,
            strokeLinecap: "round",
          }),
          n
            ? t.jsx("path", {
                d: "M82 20l10-6M84 32h10M82 44l10 6",
                stroke: E,
                strokeWidth: 4,
                strokeLinecap: "round",
              })
            : null,
          t.jsx("circle", { cx: 36, cy: 20, r: 4, fill: s }),
        ],
      });
    case "fire-door":
      return t.jsxs("g", {
        children: [
          t.jsx("rect", {
            x: 20,
            y: 8,
            width: 60,
            height: 84,
            rx: 4,
            fill: O,
            stroke: A,
            strokeWidth: 3,
          }),
          t.jsx("rect", { x: 26, y: 44, width: 48, height: 8, rx: 3, fill: U }),
          t.jsx("rect", {
            x: 30,
            y: 16,
            width: 40,
            height: 16,
            rx: 3,
            fill: n ? Q : S,
            stroke: s,
            strokeWidth: 2,
          }),
          t.jsx("path", {
            d: "M42 24h16M52 20l6 4-6 4",
            stroke: n ? Ue : H,
            strokeWidth: 2.5,
            fill: "none",
            strokeLinecap: "round",
          }),
        ],
      });
    case "speaker":
      return t.jsxs("g", {
        children: [
          t.jsx("rect", {
            x: 30,
            y: 10,
            width: 40,
            height: 80,
            rx: 18,
            fill: O,
            stroke: A,
            strokeWidth: 3,
          }),
          t.jsx("circle", {
            cx: 50,
            cy: 58,
            r: 14,
            fill: S,
            stroke: H,
            strokeWidth: 3,
          }),
          t.jsx("path", {
            d: "M36 22h28",
            stroke: s,
            strokeWidth: 4,
            strokeLinecap: "round",
          }),
          n
            ? t.jsx("path", {
                d: "M78 40q8 10 0 20M86 32q14 18 0 36",
                stroke: E,
                strokeWidth: 3.5,
                fill: "none",
                strokeLinecap: "round",
              })
            : null,
        ],
      });
    case "ride":
      return t.jsxs("g", {
        children: [
          t.jsx("path", {
            d: "M6 84q20-70 44-50t44-20",
            fill: "none",
            stroke: A,
            strokeWidth: 4,
          }),
          t.jsx("path", { d: "M6 92h88", stroke: G, strokeWidth: 4 }),
          t.jsxs("g", {
            transform: n ? "translate(52 12)" : "translate(4 64)",
            children: [
              t.jsx("rect", {
                x: 0,
                y: 0,
                width: 30,
                height: 14,
                rx: 5,
                fill: L,
                stroke: Ke,
                strokeWidth: 2,
              }),
              t.jsx("circle", { cx: 7, cy: 16, r: 4, fill: pe }),
              t.jsx("circle", { cx: 23, cy: 16, r: 4, fill: pe }),
            ],
          }),
          t.jsx("circle", { cx: 88, cy: 84, r: 5, fill: s }),
        ],
      });
  }
}
function De({ device: e, on: n, label: s, className: r }) {
  return t.jsx("svg", {
    viewBox: "0 0 100 100",
    className: r,
    role: s ? "img" : void 0,
    "aria-label": s,
    "aria-hidden": s ? void 0 : !0,
    focusable: "false",
    "data-device": e,
    "data-on": n ? "true" : "false",
    children: t.jsx(Qe, { device: e, on: n }),
  });
}
function Ct({ w: e, count: n }) {
  const s = [];
  for (let r = 0; r < n; r += 1) {
    const i = (r * 97) % e,
      u = 18 + ((r * 53) % 140);
    s.push(
      t.jsx(
        "circle",
        { cx: i, cy: u, r: r % 3 === 0 ? 2 : 1.2, fill: U, opacity: 0.7 },
        r,
      ),
    );
  }
  return t.jsx("g", { children: s });
}
function Ee({ x: e, y: n, scale: s }) {
  return t.jsxs("g", {
    transform: `translate(${e} ${n}) scale(${s})`,
    children: [
      t.jsx("rect", {
        x: -10,
        y: -10,
        width: 420,
        height: 250,
        rx: 18,
        fill: S,
        stroke: G,
        strokeWidth: 4,
      }),
      t.jsx("path", {
        d: "M58 40H73M58 140H120V128H143M58 200H120V152H143M147 40H230V88H253M217 140H230V112H253M327 100H354",
        stroke: E,
        strokeWidth: 4,
        fill: "none",
        strokeLinejoin: "round",
      }),
      t.jsx(J, { piece: "not", x: 110, y: 40, stroke: Q, fill: F }),
      t.jsx(J, { piece: "or", x: 180, y: 140, stroke: Q, fill: F }),
      t.jsx(J, { piece: "and", x: 290, y: 100, stroke: Q, fill: F }),
      t.jsx(q, { x: 40, y: 40, label: "A" }),
      t.jsx(q, { x: 40, y: 140, label: "B" }),
      t.jsx(q, { x: 40, y: 200, label: "C", lit: !0 }),
      t.jsx(q, { x: 372, y: 100, label: "P", output: !0, lit: !0 }),
    ],
  });
}
function Pe({ layout: e }) {
  const n = e === "wide",
    s = n ? 1600 : 900,
    r = n ? 900 : 1600;
  return t.jsxs("svg", {
    viewBox: `0 0 ${s} ${r}`,
    preserveAspectRatio: "xMidYMid slice",
    className: `game-landing-art game-landing-${n ? "landscape" : "portrait"}`,
    "aria-hidden": "true",
    focusable: "false",
    "data-landing-scene": e,
    children: [
      t.jsx("rect", { width: s, height: r, fill: pe }),
      t.jsx(Ct, { w: s, count: n ? 60 : 40 }),
      t.jsx("circle", {
        cx: n ? 1400 : 760,
        cy: n ? 120 : 150,
        r: 50,
        fill: xe,
      }),
      t.jsx("circle", {
        cx: n ? 1420 : 780,
        cy: n ? 108 : 138,
        r: 44,
        fill: pe,
      }),
      t.jsx("rect", { x: 0, y: n ? 200 : 300, width: s, height: r, fill: S }),
      t.jsx("rect", { x: 0, y: n ? 200 : 300, width: s, height: 8, fill: G }),
      n
        ? t.jsx(Ee, { x: 560, y: 260, scale: 1.3 })
        : t.jsx(Ee, { x: 112, y: 390, scale: 1.62 }),
      t.jsx("g", {
        transform: n ? "translate(120 250)" : "translate(112 870)",
        children: ["alarm", "sprinkler", "barrier", "street-light"].map(
          (i, u) =>
            t.jsxs(
              "g",
              {
                transform: n
                  ? `translate(0 ${u * 110})`
                  : `translate(${u * 172} 0) scale(0.9)`,
                children: [
                  t.jsx("rect", {
                    width: 170,
                    height: 96,
                    rx: 12,
                    fill: F,
                    stroke: G,
                    strokeWidth: 3,
                  }),
                  t.jsx("g", {
                    transform: "translate(40 4) scale(0.88)",
                    children: t.jsx(Qe, { device: i, on: u % 2 === 0 }),
                  }),
                ],
              },
              i,
            ),
        ),
      }),
      t.jsx("rect", { x: 0, y: n ? 700 : 1180, width: s, height: r, fill: F }),
      t.jsx("rect", { x: 0, y: n ? 700 : 1180, width: s, height: 10, fill: G }),
      t.jsx("g", {
        transform: n
          ? "translate(1180 520) scale(1.6)"
          : "translate(560 1010) scale(1.6)",
        children: t.jsx(Ze, {}),
      }),
    ],
  });
}
const Bt = 6,
  te = {
    s0: "Box 1",
    s1: "Box 2",
    s2: "Box 3",
    s3: "Box 4",
    s4: "Box 5",
    s5: "Box 6",
  };
function Lt({
  state: e,
  onChange: n,
  layout: s,
  letters: r,
  inputMeanings: i,
  output: u,
  tray: x,
  flagged: d = [],
  locked: o = !1,
}) {
  const [a, c] = v.useState(null),
    [h, j] = v.useState(null),
    p = v.useRef(null),
    b = v.useRef(null),
    $ = v.useRef(!1),
    w = h?.moved ? h : null,
    { scale: y } = s;
  function W(l, f) {
    const k = document.elementFromPoint?.(l, f)?.closest("[data-drop]"),
      B = k?.dataset.drop;
    if (!B) return null;
    if (B === "out") return { target: "out" };
    const I = B,
      ae = e.gates[I];
    if (!ae || ae.inputs.length === 1) return { target: I };
    const ce = k.getBoundingClientRect();
    return { target: I, pin: f < ce.top + ce.height / 2 ? 0 : 1 };
  }
  function g(l, f, k) {
    o ||
      (l.kind === "piece"
        ? f !== "out" && n(it(e, f, l.piece))
        : n(ct(e, l.source, f, k)),
      c(null));
  }
  function M(l) {
    return {
      onPointerDown(f) {
        if (
          (($.current = !1), o || (f.pointerType === "mouse" && f.button !== 0))
        )
          return;
        f.currentTarget.setPointerCapture?.(f.pointerId);
        const { clientX: k, clientY: B } = f;
        j({
          grab: l,
          pointerId: f.pointerId,
          startX: k,
          startY: B,
          x: k,
          y: B,
          moved: !1,
        });
      },
      onPointerMove(f) {
        if (!h || f.pointerId !== h.pointerId) return;
        const { clientX: k, clientY: B } = f,
          I = h.moved || Math.hypot(k - h.startX, B - h.startY) > Bt;
        (I && f.preventDefault(), j({ ...h, x: k, y: B, moved: I }));
      },
      onPointerUp(f) {
        if (!h || f.pointerId !== h.pointerId || (j(null), !h.moved)) return;
        $.current = !0;
        const k = W(f.clientX, f.clientY);
        k && g(h.grab, k.target, k.pin);
      },
      onPointerCancel() {
        j(null);
      },
    };
  }
  function m() {
    const l = $.current;
    return (($.current = !1), l);
  }
  function N(l) {
    if (m() || o) return;
    const f =
      a &&
      a.kind === l.kind &&
      (l.kind === "piece"
        ? a.kind === "piece" && a.piece === l.piece
        : a.kind === "wire" && a.source === l.source);
    c(f ? null : l);
  }
  function z(l) {
    if (!(m() || o)) {
      if (
        a?.kind === "piece" ||
        (a?.kind === "wire" && e.gates[l] && a.source !== l)
      )
        return g(a, l);
      e.gates[l] &&
        c(
          a?.kind === "gate" && a.slot === l ? null : { kind: "gate", slot: l },
        );
    }
  }
  function K() {
    m() || o || (a?.kind === "wire" && g(a, "out"));
  }
  const oe = (l) => (f) => {
      (f.key === "Enter" || f.key === " ") && (f.preventDefault(), l());
    },
    P =
      w?.grab.kind === "wire"
        ? w.grab.source
        : a?.kind === "wire"
          ? a.source
          : null,
    Ne =
      w?.grab.kind === "piece"
        ? w.grab.piece
        : a?.kind === "piece"
          ? a.piece
          : null;
  function Je(l, f) {
    const k = p.current?.getScreenCTM?.();
    if (!k) return null;
    const B = new DOMPoint(l, f).matrixTransform(k.inverse());
    return { x: B.x, y: B.y };
  }
  const $e = w?.grab.kind === "wire" ? Je(w.x, w.y) : null,
    fe = w?.grab.kind === "piece" ? b.current?.getBoundingClientRect() : void 0,
    ve = (T.lead + 4) * y,
    Ae = (T.halfHeight + 8) * y,
    _ = a?.kind === "gate" ? a.slot : null;
  return t.jsxs("div", {
    className: "gw-build",
    ref: b,
    "data-build-board": s.id,
    children: [
      t.jsxs("svg", {
        ref: p,
        viewBox: `0 0 ${s.viewBox.w} ${s.viewBox.h}`,
        width: "100%",
        className: "gw-board",
        role: "group",
        "aria-label": "Circuit board",
        "data-layout": s.id,
        children: [
          t.jsx("rect", {
            x: 0,
            y: 0,
            width: s.viewBox.w,
            height: s.viewBox.h,
            rx: 20,
            fill: S,
          }),
          he.map((l) =>
            e.gates[l]?.inputs.map((f, k) =>
              f
                ? t.jsx(
                    "path",
                    {
                      d: re(We(s, f), ht(s, l, e.gates[l].inputs.length, k)),
                      fill: "none",
                      stroke: E,
                      strokeWidth: 4,
                      strokeLinejoin: "round",
                      "data-wire": `${f}-${l}-${k}`,
                    },
                    `${l}-${k}`,
                  )
                : null,
            ),
          ),
          e.output && e.gates[e.output]
            ? t.jsx("path", {
                d: re(ue(s, e.output), { x: s.output.x - 18, y: s.output.y }),
                fill: "none",
                stroke: E,
                strokeWidth: 4,
                strokeLinejoin: "round",
                "data-wire": `${e.output}-out`,
              })
            : null,
          P && $e
            ? t.jsx("path", {
                d: re(We(s, P), $e),
                fill: "none",
                stroke: L,
                strokeWidth: 4,
                strokeDasharray: "8 6",
                pointerEvents: "none",
              })
            : null,
          he.map((l) => {
            const f = s.slots[l],
              k = e.gates[l],
              B = k ? Y(k.piece) : null,
              I =
                Ne !== null ||
                (P !== null && k !== void 0 && Fe(P, l) && P !== l),
              ae = k ? k.inputs.filter(Boolean).length : 0,
              ce = k
                ? `${te[l]}: ${B.label}, ${ae} of ${B.inputs} input${B.inputs === 1 ? "" : "s"} wired`
                : `${te[l]}, empty`;
            return t.jsxs(
              "g",
              {
                "data-slot": l,
                "data-filled": k ? k.piece : void 0,
                "data-flagged": d.includes(l) ? "true" : void 0,
                children: [
                  t.jsxs("g", {
                    role: "button",
                    tabIndex: o ? -1 : 0,
                    "aria-label": ce,
                    "aria-pressed": _ === l,
                    className: "gw-slot",
                    onClick: () => z(l),
                    onKeyDown: oe(() => z(l)),
                    children: [
                      t.jsx("rect", {
                        "data-drop": l,
                        x: f.x - ve,
                        y: f.y - Ae,
                        width: ve * 2,
                        height: Ae * 2,
                        rx: 12,
                        fill: k ? "transparent" : O,
                        fillOpacity: k ? 0 : 0.35,
                        stroke: d.includes(l) ? Nt : _ === l || I ? L : G,
                        strokeWidth: d.includes(l) || _ === l ? 4 : 2.5,
                        strokeDasharray:
                          k && !d.includes(l) && _ !== l ? "0" : "8 6",
                        strokeOpacity:
                          k && !d.includes(l) && _ !== l && !I ? 0 : 1,
                      }),
                      k
                        ? t.jsx("g", {
                            pointerEvents: "none",
                            children: t.jsx(J, {
                              piece: k.piece,
                              x: f.x,
                              y: f.y,
                              scale: y,
                              outputStroke: e.output === l ? E : void 0,
                            }),
                          })
                        : null,
                    ],
                  }),
                  k
                    ? t.jsxs("g", {
                        role: "button",
                        tabIndex: o ? -1 : 0,
                        "aria-label": `Output of ${te[l]}`,
                        "aria-pressed": P === l,
                        className: "gw-source",
                        style: { touchAction: "none" },
                        ...M({ kind: "wire", source: l }),
                        onClick: () => N({ kind: "wire", source: l }),
                        onKeyDown: oe(() => N({ kind: "wire", source: l })),
                        children: [
                          t.jsx("circle", {
                            cx: ue(s, l).x,
                            cy: f.y,
                            r: 22,
                            fill: "transparent",
                          }),
                          t.jsx("circle", {
                            cx: ue(s, l).x,
                            cy: f.y,
                            r: 7,
                            fill: P === l ? L : U,
                            stroke: S,
                            strokeWidth: 2,
                          }),
                        ],
                      })
                    : null,
                ],
              },
              l,
            );
          }),
          r.map((l) => {
            const f = s.inputs[l];
            return t.jsxs(
              "g",
              {
                role: "button",
                tabIndex: o ? -1 : 0,
                "aria-label": `Input ${l}: ${i[l] ?? ""}`,
                "aria-pressed": P === l,
                className: "gw-source",
                style: { touchAction: "none" },
                "data-input": l,
                ...M({ kind: "wire", source: l }),
                onClick: () => N({ kind: "wire", source: l }),
                onKeyDown: oe(() => N({ kind: "wire", source: l })),
                children: [
                  t.jsx("circle", {
                    cx: f.x,
                    cy: f.y,
                    r: 30,
                    fill: "transparent",
                  }),
                  t.jsx(q, { x: f.x, y: f.y, label: l, lit: P === l }),
                ],
              },
              l,
            );
          }),
          t.jsxs("g", {
            role: "button",
            tabIndex: o ? -1 : 0,
            "aria-label": `Output ${u}${e.output ? `, wired from ${te[e.output]}` : ", not wired"}`,
            className: "gw-slot",
            onClick: K,
            onKeyDown: oe(K),
            children: [
              t.jsx("circle", {
                "data-drop": "out",
                cx: s.output.x,
                cy: s.output.y,
                r: 30,
                fill: "transparent",
                stroke: P && V(P) ? L : "transparent",
                strokeWidth: 3,
                strokeDasharray: "6 5",
              }),
              t.jsx("g", {
                pointerEvents: "none",
                children: t.jsx(q, {
                  x: s.output.x,
                  y: s.output.y,
                  label: u,
                  output: !0,
                }),
              }),
            ],
          }),
        ],
      }),
      _ && !o
        ? t.jsxs("div", {
            className: "gw-gate-actions",
            "data-gate-actions": _,
            children: [
              t.jsx("button", {
                type: "button",
                className: "gw-button gw-quiet",
                onClick: () => {
                  (n(at(e, _)), c(null));
                },
                children: "Clear its wires",
              }),
              t.jsx("button", {
                type: "button",
                className: "gw-button gw-quiet",
                onClick: () => {
                  (n(ot(e, _)), c(null));
                },
                children: "Remove gate",
              }),
            ],
          })
        : null,
      t.jsx("ul", {
        className: "gw-tray",
        "aria-label": "Gate shapes",
        children: x.map((l) => {
          const f = Y(l);
          return t.jsx(
            "li",
            {
              children: t.jsx("button", {
                type: "button",
                className: "gw-piece",
                "aria-label": f.label,
                "aria-pressed": Ne === l,
                disabled: o,
                "data-piece": l,
                style: { touchAction: "none" },
                ...M({ kind: "piece", piece: l }),
                onClick: () => N({ kind: "piece", piece: l }),
                children: t.jsx(Se, { piece: l }),
              }),
            },
            l,
          );
        }),
      }),
      w?.grab.kind === "piece" && fe
        ? t.jsx("div", {
            className: "gw-ghost",
            style: { left: w.x - fe.left, top: w.y - fe.top },
            "aria-hidden": "true",
            children: t.jsx(Se, { piece: w.grab.piece }),
          })
        : null,
      t.jsx("span", {
        className: "sr-only",
        "aria-live": "polite",
        children:
          a?.kind === "piece"
            ? `${Y(a.piece).label} picked up. Choose a box.`
            : a?.kind === "wire"
              ? `Wire from ${V(a.source) ? `the output of ${te[a.source]}` : a.source}. Choose a gate or the output.`
              : "",
      }),
    ],
  });
}
function Xt() {
  nt();
  const [e, n] = v.useState({ type: "landing" }),
    [s, r] = v.useState(() => Be()),
    [i, u] = v.useState(ke),
    [x, d] = v.useState([]),
    o = e.type === "summary" ? se : e.type === "round" ? e.index : 0;
  et(o, se, x.filter((p) => p.correct).length);
  const a = v.useRef(null),
    c = e.type === "round" ? `round-${e.index}` : e.type;
  v.useEffect(() => {
    if (c === "landing") return;
    const p = a.current?.closest('[data-topic-game][data-fullscreen="true"]');
    p
      ? ((p.scrollTop = 0),
        (document.documentElement.scrollTop = 0),
        (document.body.scrollTop = 0))
      : (a.current?.getBoundingClientRect().top ?? 0) < 0 &&
        a.current?.scrollIntoView?.({ block: "start" });
  }, [c]);
  function h() {
    (r(Be()), u(ke), d([]), n({ type: "round", index: 0 }));
  }
  let j;
  if (e.type === "landing") j = t.jsx(Rt, { onStart: h });
  else if (e.type === "round") {
    const p = s[e.index];
    j = t.jsx(
      Dt,
      {
        index: e.index,
        round: p,
        lives: i,
        earned: x.reduce((b, $) => b + $.earned, 0),
        onMark: (b) => d(($) => [...$, b]),
        onLoseLife: () => u((b) => Math.max(0, b - 1)),
        onNext: () =>
          n(
            i > 0 && e.index + 1 < se
              ? { type: "round", index: e.index + 1 }
              : { type: "summary" },
          ),
      },
      e.index,
    );
  } else j = t.jsx(Ft, { marks: x, lives: i, onAgain: h });
  return t.jsx("div", {
    className: "gate-works",
    ref: a,
    "data-stage": e.type,
    children: j,
  });
}
function Rt({ onStart: e }) {
  return t.jsxs("div", {
    className: "game-landing gw-landing",
    style: { "--landing-glow": "#2dd4bf73" },
    "data-game-landing": !0,
    children: [
      t.jsx(Pe, { layout: "tall" }),
      t.jsx(Pe, { layout: "wide" }),
      t.jsx("h2", { className: "sr-only", children: "Gate Works" }),
      t.jsx("button", {
        type: "button",
        className: "game-landing-start gw-button gw-primary",
        onClick: e,
        children: "Start your shift",
      }),
    ],
  });
}
const St = {
  build: "Draw the logic circuit",
  table: "Complete the truth table",
  read: "Write the expression",
};
function Dt({
  index: e,
  round: n,
  lives: s,
  earned: r,
  onMark: i,
  onLoseLife: u,
  onNext: x,
}) {
  const d = kt(n.scenario),
    o = v.useMemo(() => gt(d), [d]),
    a = ze(d),
    [c, h] = v.useState(null),
    [j, p] = v.useState(!1),
    [b, $] = v.useState(!1),
    [w, y] = v.useState(null),
    W = e + 1 === se;
  function g(m) {
    y(null);
    const N = !j;
    (p(!0),
      N && i(m.mark),
      m.costLife && u(),
      h({ ...m, mark: N ? m.mark : null }));
  }
  const M = c !== null && !c.correct && s <= 0;
  return t.jsxs("div", {
    className: "gw-page",
    "data-mode": n.mode,
    "data-scenario": d.id,
    children: [
      t.jsxs("header", {
        className: "gw-status",
        children: [
          t.jsxs("span", {
            className: "gw-round-count",
            children: ["Round ", e + 1, " of ", se],
          }),
          t.jsx("span", {
            className: "gw-lives",
            "aria-label": `${s} ${s === 1 ? "life" : "lives"} left`,
            "data-lives": s,
            children: Array.from({ length: ke }, (m, N) =>
              t.jsx(
                "span",
                {
                  className: "gw-life",
                  "data-spent": N >= s ? "true" : void 0,
                  "aria-hidden": "true",
                },
                N,
              ),
            ),
          }),
          t.jsxs("span", { className: "gw-score", children: [r, " marks"] }),
        ],
      }),
      t.jsxs("section", {
        className: "gw-card",
        "data-story-card": "round",
        "aria-labelledby": `gw-task-${e}`,
        children: [
          t.jsxs("div", {
            className: "gw-card-head",
            children: [
              t.jsx(De, { device: d.id, on: !1, className: "gw-device" }),
              t.jsxs("div", {
                children: [
                  t.jsx("h2", {
                    id: `gw-task-${e}`,
                    className: "gw-title",
                    children: St[n.mode],
                  }),
                  t.jsx("p", {
                    className: "gw-scenario-name",
                    children: d.title,
                  }),
                ],
              }),
            ],
          }),
          n.mode === "read"
            ? null
            : t.jsx("p", { className: "gw-rule", children: d.rule }),
          t.jsx(Et, { scenario: d, letters: a }),
          n.mode === "read"
            ? null
            : t.jsxs("p", {
                className: "gw-expression",
                "data-expression": !0,
                children: [d.output, " = ", ee(o)],
              }),
        ],
      }),
      n.mode === "build"
        ? t.jsx(Ht, {
            scenario: d,
            target: o,
            letters: a,
            locked: c?.correct === !0 || b || M,
            onNotice: y,
            onSettle: g,
          })
        : n.mode === "table"
          ? t.jsx(Gt, {
              scenario: d,
              target: o,
              letters: a,
              locked: c?.correct === !0 || b || M,
              onNotice: y,
              onSettle: g,
            })
          : t.jsx(It, {
              scenario: d,
              target: o,
              letters: a,
              locked: c?.correct === !0 || b || M,
              onNotice: y,
              onSettle: g,
            }),
      w
        ? t.jsx("p", { className: "gw-notice", role: "status", children: w })
        : null,
      c
        ? t.jsxs("section", {
            className: "gw-card gw-outcome",
            "data-story-card": "outcome",
            "data-outcome": c.correct ? "works" : "fails",
            "aria-live": "polite",
            children: [
              t.jsxs("div", {
                className: "gw-card-head",
                children: [
                  t.jsx(De, {
                    device: d.id,
                    on: c.deviceOn,
                    className: "gw-device",
                    label: `${d.title} ${c.deviceOn ? "on" : "off"}`,
                  }),
                  t.jsxs("div", {
                    children: [
                      t.jsxs("h3", {
                        className: "gw-title",
                        children: [
                          t.jsx("span", {
                            className: "gw-mark-icon",
                            "aria-hidden": "true",
                            "data-icon": c.correct ? "tick" : "cross",
                          }),
                          c.correct
                            ? `The ${d.title.toLowerCase()} works`
                            : `The ${d.title.toLowerCase()} fails`,
                        ],
                      }),
                      c.mark
                        ? t.jsxs("p", {
                            className: "gw-marks",
                            "data-marks": `${c.mark.earned}/${c.mark.total}`,
                            children: [
                              c.mark.earned,
                              " of ",
                              c.mark.total,
                              " marks",
                            ],
                          })
                        : null,
                    ],
                  }),
                  t.jsx(Xe, {
                    mood: c.correct ? "happy" : "worried",
                    className: "gw-owl",
                  }),
                ],
              }),
              c.lines.map((m) => t.jsx("p", { children: m }, m)),
              b ? t.jsx(He, { scenario: d, target: o, letters: a }) : null,
              t.jsx("div", {
                className: "gw-actions",
                children:
                  c.correct || b || M
                    ? t.jsx("button", {
                        type: "button",
                        className: "gw-button gw-primary",
                        onClick: x,
                        children: W || M ? "See your shift" : "Next round",
                      })
                    : t.jsxs(t.Fragment, {
                        children: [
                          t.jsx("button", {
                            type: "button",
                            className: "gw-button gw-primary",
                            onClick: () => h(null),
                            children: "Try again",
                          }),
                          t.jsx("button", {
                            type: "button",
                            className: "gw-button gw-quiet",
                            onClick: () => $(!0),
                            children: "Show the answer",
                          }),
                        ],
                      }),
              }),
              M && !b
                ? t.jsx(He, { scenario: d, target: o, letters: a })
                : null,
            ],
          })
        : null,
    ],
  });
}
function Et({ scenario: e, letters: n }) {
  return t.jsx("dl", {
    className: "gw-key",
    children: n.map((s) =>
      t.jsxs(
        "div",
        {
          className: "gw-key-row",
          children: [
            t.jsx("dt", { children: s }),
            t.jsx("dd", { children: e.inputs[s] }),
          ],
        },
        s,
      ),
    ),
  });
}
function He({ scenario: e, target: n, letters: s }) {
  return t.jsxs("div", {
    className: "gw-answer",
    "data-answer": !0,
    children: [
      t.jsxs("p", {
        className: "gw-expression",
        children: [e.output, " = ", ee(n)],
      }),
      t.jsx(je, {
        expr: n,
        letters: s,
        output: e.output,
        label: `Circuit for ${e.output} = ${ee(n)}`,
      }),
    ],
  });
}
function ye(e, n, s, r, i, u) {
  return [
    `With ${wt(n, i)}, ${u} gives ${e.output} = ${s}.`,
    r === 1
      ? `It should give ${e.output} = 1: ${e.outputMeaning}.`
      : `It should give ${e.output} = 0.`,
  ];
}
function be(e) {
  const n = e.outputMeaning;
  return `${n.charAt(0).toUpperCase()}${n.slice(1)} exactly when it should, for every row of the truth table.`;
}
function Pt() {
  const e = Ie.map((n) => n.id);
  for (let n = e.length - 1; n > 0; n -= 1) {
    const s = Math.floor(Math.random() * (n + 1));
    [e[n], e[s]] = [e[s], e[n]];
  }
  return e;
}
function Ht({
  scenario: e,
  target: n,
  letters: s,
  locked: r,
  onNotice: i,
  onSettle: u,
}) {
  const x = st(),
    [d, o] = v.useState(rt),
    [a, c] = v.useState([]),
    [h] = v.useState(Pt);
  function j() {
    const p = lt(d),
      b = p.problems.find(
        (g) => g.kind === "no-gates" || g.kind === "no-output",
      );
    if (b) return i(Oe(b));
    const $ = me(p.expr, n, s, { extraGates: p.extraGates, gates: p.gates }),
      w = p.problems.flatMap((g) =>
        g.kind === "shape" || g.kind === "unwired" ? [g.slot] : [],
      );
    if ((c(w), $.correct))
      return u({
        correct: !0,
        mark: $,
        lines: [be(e)],
        deviceOn: !0,
        costLife: !1,
      });
    const y = p.problems
      .filter((g) => g.kind === "shape" || g.kind === "unwired")
      .map(Oe);
    if (p.expr) {
      const g = de(p.expr, n, s);
      g && y.push(...ye(e, g, C(p.expr, g), C(n, g), s, "your circuit"));
    }
    (p.extraGates > 0 || (p.expr && !de(p.expr, n, s))) &&
      y.push(
        "There are extra gates. A circuit with additional gates scores at most 2 marks.",
      );
    const W = p.expr ? de(p.expr, n, s) : null;
    u({
      correct: !1,
      mark: $,
      lines: y,
      deviceOn: W ? C(p.expr, W) === 1 : !1,
      costLife: !0,
    });
  }
  return t.jsxs("section", {
    className: "gw-work",
    "aria-label": "Your circuit",
    children: [
      t.jsx(Lt, {
        state: d,
        onChange: (p) => {
          (o(p), c([]), i(null));
        },
        layout: x ? dt : ut,
        letters: s,
        inputMeanings: e.inputs,
        output: e.output,
        tray: h,
        flagged: a,
        locked: r,
      }),
      r
        ? null
        : t.jsx("div", {
            className: "gw-actions",
            children: t.jsx("button", {
              type: "button",
              className: "gw-button gw-primary",
              onClick: j,
              "data-check": !0,
              children: "Check circuit",
            }),
          }),
    ],
  });
}
function Ge(e) {
  return e === 1 ? 0 : e === 0 ? 1 : 0;
}
function Gt({
  scenario: e,
  target: n,
  letters: s,
  locked: r,
  onNotice: i,
  onSettle: u,
}) {
  const x = s.length === 2,
    d = 2 ** s.length,
    o = we(s),
    [a, c] = v.useState(() =>
      o.map((w) => s.map((y) => (x ? null : (w[y] ?? 0)))),
    ),
    [h, j] = v.useState(() => Array.from({ length: d }, () => null)),
    [p, b] = v.useState([]);
  function $() {
    if (h.some((m) => m === null) || a.some((m) => m.some((N) => N === null)))
      return i(
        "Fill every cell first: tap a cell to write 0, tap again for 1.",
      );
    const w = mt({ inputs: a, outputs: h }, n, s);
    if ((b(w.wrongRows), w.correct))
      return u({
        correct: !0,
        mark: w,
        lines: [be(e)],
        deviceOn: !0,
        costLife: !1,
      });
    const y = [],
      W = new Set(a.map((m) => m.join("")));
    x &&
      W.size < d &&
      y.push(
        `Two inputs give ${d} rows, and each combination appears once: 00, 01, 10, 11.`,
      );
    const g = w.wrongRows[0];
    let M = !1;
    if (g !== void 0 && (!x || W.size === d)) {
      const m = {};
      s.forEach((z, K) => {
        m[z] = a[g][K] ?? 0;
      });
      const N = h[g];
      ((M = N === 1),
        y.push(...ye(e, m, N, C(n, m), s, "your table")),
        w.wrongRows.length > 1 &&
          y.push(`${w.wrongRows.length} rows are wrong.`));
    }
    u({ correct: !1, mark: w, lines: y, deviceOn: M, costLife: !0 });
  }
  return t.jsxs("section", {
    className: "gw-work",
    "aria-label": "Your truth table",
    children: [
      t.jsxs("div", {
        className: "gw-table-wrap",
        children: [
          t.jsx(je, {
            expr: n,
            letters: s,
            output: e.output,
            label: `Circuit for ${e.output} = ${ee(n)}`,
          }),
          t.jsxs("table", {
            className: "gw-table",
            "data-rows": d,
            children: [
              t.jsx("thead", {
                children: t.jsxs("tr", {
                  children: [
                    s.map((w) => t.jsx("th", { scope: "col", children: w }, w)),
                    t.jsx("th", {
                      scope: "col",
                      className: "gw-output-head",
                      children: e.output,
                    }),
                    t.jsx("th", {
                      scope: "col",
                      children: t.jsx("span", {
                        className: "sr-only",
                        children: "Check",
                      }),
                    }),
                  ],
                }),
              }),
              t.jsx("tbody", {
                children: h.map((w, y) =>
                  t.jsxs(
                    "tr",
                    {
                      "data-wrong": p.includes(y) ? "true" : void 0,
                      children: [
                        s.map((W, g) =>
                          t.jsx(
                            "td",
                            {
                              children: x
                                ? t.jsx(_e, {
                                    value: a[y][g],
                                    label: `Row ${y + 1}, ${W}`,
                                    locked: r,
                                    onTap: () => {
                                      (b([]),
                                        i(null),
                                        c((M) =>
                                          M.map((m, N) =>
                                            N === y
                                              ? m.map((z, K) =>
                                                  K === g ? Ge(z) : z,
                                                )
                                              : m,
                                          ),
                                        ));
                                    },
                                  })
                                : t.jsx("span", {
                                    className: "gw-given",
                                    children: a[y][g],
                                  }),
                            },
                            W,
                          ),
                        ),
                        t.jsx("td", {
                          children: t.jsx(_e, {
                            value: w,
                            label: `Row ${y + 1}, ${e.output}`,
                            output: !0,
                            locked: r,
                            onTap: () => {
                              (b([]),
                                i(null),
                                j((W) =>
                                  W.map((g, M) => (M === y ? Ge(g) : g)),
                                ));
                            },
                          }),
                        }),
                        t.jsx("td", {
                          className: "gw-row-flag",
                          children: p.includes(y)
                            ? t.jsxs(t.Fragment, {
                                children: [
                                  t.jsx("span", {
                                    className: "gw-mark-icon",
                                    "data-icon": "cross",
                                    "aria-hidden": "true",
                                  }),
                                  t.jsx("span", {
                                    className: "sr-only",
                                    children: "Wrong",
                                  }),
                                ],
                              })
                            : null,
                        }),
                      ],
                    },
                    y,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      r
        ? null
        : t.jsx("div", {
            className: "gw-actions",
            children: t.jsx("button", {
              type: "button",
              className: "gw-button gw-primary",
              onClick: $,
              "data-check": !0,
              children: "Check table",
            }),
          }),
    ],
  });
}
function _e({ value: e, label: n, output: s = !1, locked: r, onTap: i }) {
  return t.jsx("button", {
    type: "button",
    className: `gw-cell${s ? " gw-cell-output" : ""}`,
    "aria-label": `${n}: ${e === null ? "blank" : e}`,
    "data-value": e === null ? "" : e,
    disabled: r,
    onClick: i,
    children: e === null ? "" : e,
  });
}
const _t = ["AND", "OR", "NOT", "(", ")"];
function It({
  scenario: e,
  target: n,
  letters: s,
  locked: r,
  onNotice: i,
  onSettle: u,
}) {
  const [x, d] = v.useState([]);
  function o(c) {
    (i(null), d((h) => [...h, c]));
  }
  function a() {
    const c = qe(x.join(" "));
    if (!c.ok && c.error !== "mixed") return i(Te[c.error]);
    if (!c.ok) {
      const $ = me(null, n, s);
      return u({
        correct: !1,
        mark: $,
        lines: [Te.mixed],
        deviceOn: !1,
        costLife: !0,
      });
    }
    const h = c.expr,
      j = me(h, n, s);
    if (j.correct)
      return u({
        correct: !0,
        mark: j,
        lines: [be(e)],
        deviceOn: !0,
        costLife: !1,
      });
    const p = de(h, n, s),
      b = p
        ? ye(e, p, C(h, p), C(n, p), s, "your expression")
        : [
            "Your expression has more gates than the circuit. Write one gate for each shape.",
          ];
    u({
      correct: !1,
      mark: j,
      lines: b,
      deviceOn: p ? C(h, p) === 1 : !1,
      costLife: !0,
    });
  }
  return t.jsxs("section", {
    className: "gw-work",
    "aria-label": "Your expression",
    children: [
      t.jsx(je, {
        expr: n,
        letters: s,
        output: e.output,
        label: `A logic circuit with inputs ${s.join(", ")} and output ${e.output}`,
      }),
      t.jsxs("p", {
        className: "gw-expression gw-writing",
        "data-writing": !0,
        "aria-live": "polite",
        children: [
          t.jsxs("span", { children: [e.output, " ="] }),
          " ",
          t.jsx("span", {
            "data-tokens": !0,
            children: x.join(" ").replace(/\( /g, "(").replace(/ \)/g, ")"),
          }),
          t.jsx("span", { className: "gw-caret", "aria-hidden": "true" }),
        ],
      }),
      r
        ? null
        : t.jsxs(t.Fragment, {
            children: [
              t.jsxs("div", {
                className: "gw-keys",
                role: "group",
                "aria-label": "Expression keys",
                children: [
                  [...s, ..._t].map((c) =>
                    t.jsx(
                      "button",
                      {
                        type: "button",
                        className: "gw-key-button",
                        "data-token": c,
                        onClick: () => o(c),
                        children: c,
                      },
                      c,
                    ),
                  ),
                  t.jsx("button", {
                    type: "button",
                    className: "gw-key-button gw-key-wide",
                    "aria-label": "Delete last",
                    onClick: () => d((c) => c.slice(0, -1)),
                    children: "Delete",
                  }),
                ],
              }),
              t.jsx("div", {
                className: "gw-actions",
                children: t.jsx("button", {
                  type: "button",
                  className: "gw-button gw-primary",
                  onClick: a,
                  "data-check": !0,
                  children: "Check expression",
                }),
              }),
            ],
          }),
    ],
  });
}
function Ft({ marks: e, lives: n, onAgain: s }) {
  const r = e.reduce((x, d) => x + d.earned, 0),
    i = e.reduce((x, d) => x + d.total, 0),
    u = e.filter((x) => x.correct).length;
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx("div", {
        className: "gw-page",
        "data-stage": "summary",
        children: t.jsxs("section", {
          className: "gw-card gw-summary",
          "data-story-card": "summary",
          children: [
            t.jsx(Xe, {
              mood: n > 0 ? "happy" : "worried",
              className: "gw-owl gw-owl-large",
            }),
            t.jsx("h2", {
              className: "gw-title",
              children: n > 0 ? jt(r, i) : "Out of lives",
            }),
            t.jsxs("p", {
              className: "gw-big-score",
              "data-summary-marks": `${r}/${i}`,
              children: [r, " of ", i, " marks"],
            }),
            t.jsxs("p", {
              children: [
                u,
                " of ",
                e.length,
                " ",
                e.length === 1 ? "round" : "rounds",
                " right first time · ",
                n,
                " ",
                n === 1 ? "life" : "lives",
                " left",
              ],
            }),
            t.jsx("div", {
              className: "gw-actions",
              children: t.jsx("button", {
                type: "button",
                className: "gw-button gw-primary",
                onClick: s,
                children: "Play again",
              }),
            }),
          ],
        }),
      }),
      t.jsx(tt, { game: "gate-works" }),
    ],
  });
}
export { Xt as default };
