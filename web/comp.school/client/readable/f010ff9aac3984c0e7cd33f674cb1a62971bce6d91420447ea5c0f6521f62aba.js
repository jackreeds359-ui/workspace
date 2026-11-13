import { j as t, R as z, r as j } from "./index-CHiQZc8e.js";
function E(e) {
  return e.type === "match"
    ? e.pairs.length
    : e.type === "build"
      ? e.answer.length
      : 1;
}
function F(e) {
  return e.questions.reduce((n, l) => n + E(l), 0);
}
function L(e, n) {
  const [l, r, s, a] = e.ratings;
  return n >= 90 ? l : n >= 75 ? r : n >= 50 ? s : a;
}
function O(e) {
  return e
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, "")
    .toUpperCase();
}
function M(e) {
  return e.replace(/[£,\s"“”]/g, "").toUpperCase();
}
function K(e, n) {
  const l = M(n);
  return l
    ? e.accept.some((r) => {
        const s = M(r);
        return l === s
          ? !0
          : /^-?\d+(\.\d+)?$/.test(l) &&
              /^-?\d+(\.\d+)?$/.test(s) &&
              Number(l) === Number(s);
      })
    : !1;
}
function P(e, n) {
  const l = M(n),
    r = Object.keys(e.traps ?? {}).find((s) => M(s) === l);
  return r ? e.traps?.[r] : void 0;
}
function V(e, n) {
  const l = (i) =>
      i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    r = e.length,
    s = n.length,
    a = Array.from({ length: r + 1 }, () => new Array(s + 1).fill(0));
  for (let i = r - 1; i >= 0; i--)
    for (let d = s - 1; d >= 0; d--)
      a[i][d] =
        e[i] === n[d]
          ? a[i + 1][d + 1] + 1
          : Math.max(a[i + 1][d], a[i][d + 1]);
  let o = 0,
    h = 0,
    c = "";
  for (; h < s;)
    o < r && e[o] === n[h]
      ? ((c += l(n[h])), o++, h++)
      : o < r && a[o + 1][h] >= a[o][h + 1]
        ? o++
        : ((c += `<mark>${l(n[h])}</mark>`), h++);
  return c;
}
function I(e = "") {
  return { i: -1, score: 0, name: e, got: {}, taught: [] };
}
function H(e, n) {
  if (!n) return null;
  try {
    const l = JSON.parse(n),
      r = Number.isInteger(l.i) ? l.i : -1;
    if (r < 0 || r >= e.questions.length) return null;
    const s = new Set(e.sections.map((i) => i.id)),
      a = {};
    for (const [i, d] of Object.entries(l.got ?? {}))
      s.has(i) && typeof d == "number" && d >= 0 && (a[i] = d);
    const o = Object.values(a).reduce((i, d) => i + d, 0),
      h = (l.taught ?? []).filter((i) => typeof i == "string" && s.has(i)),
      c = typeof l.name == "string" ? l.name.slice(0, 24) : "";
    return { i: r, score: o, name: c, got: a, taught: h };
  } catch {
    return null;
  }
}
function Q(e) {
  return `comp-school:btec-games:${e.id}`;
}
function B(e, n, l, r, s, a) {
  (e.beginPath(),
    e.moveTo(n + a, l),
    e.arcTo(n + r, l, n + r, l + s, a),
    e.arcTo(n + r, l + s, n, l + s, a),
    e.arcTo(n, l + s, n, l, a),
    e.arcTo(n, l, n + r, l, a),
    e.closePath());
}
function W(e, n, l, r, s) {
  e.beginPath();
  for (let a = 0; a < 10; a++) {
    const o = (Math.PI / 5) * a - Math.PI / 2,
      h = a % 2 ? r * 0.45 : r;
    e.lineTo(n + Math.cos(o) * h, l + Math.sin(o) * h);
  }
  (e.closePath(), (e.fillStyle = s), e.fill());
}
const U = [
  "#ff4d8d",
  "#ff9f1c",
  "#2ec4b6",
  "#3a86ff",
  "#8338ec",
  "#6aa81e",
  "#ef233c",
];
function Y(e, n, l, r) {
  const s = e.getContext("2d");
  if (!s) return;
  const a = 1200,
    o = 675,
    h = F(n),
    c = Math.round((l.score / h) * 100),
    i = s.createLinearGradient(0, 0, a, o);
  (i.addColorStop(0, "#ff4d8d"),
    i.addColorStop(0.35, "#ff9f1c"),
    i.addColorStop(0.65, "#2ec4b6"),
    i.addColorStop(1, "#8338ec"),
    (s.fillStyle = i),
    s.fillRect(0, 0, a, o));
  const d = ["#ffd23f", "#ffffff", "#3a86ff", "#8ac926", "#ff4d8d", "#1d1b2f"];
  let m = l.score * 97 + 13;
  const g = () => ((m = (m * 9301 + 49297) % 233280), m / 233280);
  for (let u = 0; u < 70; u++)
    ((s.fillStyle = d[u % d.length]),
      (s.globalAlpha = 0.55),
      s.save(),
      s.translate(g() * a, g() * o),
      s.rotate(g() * 6),
      s.fillRect(-7, -3, 14 + g() * 10, 6),
      s.restore());
  ((s.globalAlpha = 1),
    (s.fillStyle = "rgba(255,253,247,.96)"),
    B(s, 60, 50, a - 120, o - 100, 32),
    s.fill(),
    (s.strokeStyle = "#e4e7ee"),
    (s.lineWidth = 2));
  for (let u = 0; u < 5; u++)
    for (let N = 0; N < 4; N++) s.strokeRect(870 + u * 54, 95 + N * 34, 54, 34);
  ((s.fillStyle = "#c9f7ee"),
    s.fillRect(871, 129, 52, 32),
    (s.fillStyle = "#e6dcff"),
    s.fillRect(925, 129, 52, 32),
    (s.fillStyle = "#1d1b2f"),
    (s.font = "bold 16px Consolas,monospace"));
  const [p, y] = n.motif ?? ["STD", "£9"];
  (s.fillText(p, 880, 151),
    s.fillText(y, 936, 151),
    (s.font = '900 44px "Segoe UI",Arial,sans-serif'));
  let k = 110;
  for (let u = 0; u < n.logo.length; u++) {
    const N = s.measureText(n.logo[u]).width + 20;
    ((s.fillStyle = U[u % U.length]),
      B(s, k, 90, N, 58, 10),
      s.fill(),
      (s.fillStyle = "#fff"),
      s.fillText(n.logo[u], k + 10, 136),
      (k += N + 6));
  }
  ((s.fillStyle = "#1d1b2f"),
    (s.font = '800 44px "Segoe UI",Arial,sans-serif'),
    s.fillText("Challenge", k + 14, 136),
    (s.fillStyle = "#6a6580"),
    (s.font = '600 22px "Segoe UI",Arial,sans-serif'),
    s.fillText(
      n.badge.replace("BTEC DIT", "BTEC Digital Information Technology"),
      110,
      190,
    ),
    (s.fillStyle = "#1d1b2f"),
    (s.font = '700 40px "Segoe UI",Arial,sans-serif'),
    s.fillText(l.name, 110, 265));
  const v = s.createLinearGradient(110, 0, 700, 0);
  (v.addColorStop(0, "#ff4d8d"),
    v.addColorStop(1, "#8338ec"),
    (s.fillStyle = v),
    (s.font = '900 150px "Segoe UI",Arial,sans-serif'),
    s.fillText(`${l.score}/${h}`, 104, 420),
    (s.fillStyle = "#1d1b2f"),
    (s.font = '800 38px "Segoe UI",Arial,sans-serif'),
    s.fillText(`${c}%  ·  ${L(n, c)}`, 112, 478));
  const f = c >= 90 ? 5 : c >= 75 ? 4 : c >= 60 ? 3 : c >= 40 ? 2 : 1;
  for (let u = 0; u < 5; u++)
    W(s, 130 + u * 62, 530, 24, u < f ? "#ffd23f" : "#e6e2f0");
  const b = 760,
    S = 260,
    x = Math.min(52, 300 / Math.max(n.sections.length, 1));
  ((s.font = '700 19px "Segoe UI",Arial,sans-serif'),
    n.sections.forEach((u, N) => {
      const C = S + N * x,
        w = l.got[u.id] ?? 0,
        $ = r[u.id] || 1;
      ((s.fillStyle = "#1d1b2f"),
        s.fillText(u.name, b, C),
        (s.fillStyle = "#eeeaf5"),
        B(s, b, C + 8, 330, 16, 8),
        s.fill(),
        (s.fillStyle = u.c),
        B(s, b, C + 8, Math.max(16, (330 * w) / $), 16, 8),
        s.fill(),
        (s.fillStyle = "#6a6580"),
        (s.textAlign = "right"),
        s.fillText(`${w}/${$}`, b + 330, C),
        (s.textAlign = "left"));
    }),
    (s.fillStyle = "#6a6580"),
    (s.font = "500 18px Consolas,monospace"),
    s.fillText(n.footer, 110, 595),
    (s.textAlign = "right"),
    (s.font = '600 18px "Segoe UI",Arial,sans-serif'),
    s.fillText(
      new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      a - 110,
      595,
    ),
    (s.textAlign = "left"));
}
const J = /<(\/?)(b|i|code|mark)>|<br\s*\/?>|&(nbsp|rarr|amp|lt|gt|quot);/g,
  Z = { nbsp: " ", rarr: "→", amp: "&", lt: "<", gt: ">", quot: '"' };
function X(e) {
  const n = { tag: null, children: [] },
    l = [n];
  let r = 0;
  const s = (a) => {
    a && l[l.length - 1].children.push(a);
  };
  for (const a of e.matchAll(J))
    if ((s(e.slice(r, a.index)), (r = (a.index ?? 0) + a[0].length), a[3]))
      s(Z[a[3]]);
    else if (!a[2])
      l[l.length - 1].children.push({
        tag: null,
        children: [
          `
`,
        ],
      });
    else if (a[1]) l.length > 1 && l[l.length - 1].tag === a[2] && l.pop();
    else {
      const o = { tag: a[2], children: [] };
      (l[l.length - 1].children.push(o), l.push(o));
    }
  return (s(e.slice(r)), n);
}
function G(e, n) {
  if (typeof e == "string") return e;
  if (
    e.tag === null &&
    e.children.length === 1 &&
    e.children[0] ===
      `
`
  )
    return t.jsx("br", {}, n);
  const l = e.children.map(G);
  return e.tag
    ? z.createElement(e.tag, { key: n }, ...l)
    : t.jsx(z.Fragment, { children: l }, n);
}
function T({ text: e }) {
  return t.jsx(t.Fragment, { children: X(e).children.map(G) });
}
const D = [
    "#ff4d8d",
    "#ff9f1c",
    "#2ec4b6",
    "#8338ec",
    "#3a86ff",
    "#118ab2",
    "#ef233c",
    "#6aa81e",
  ],
  q = [
    "var(--pink)",
    "var(--orange)",
    "var(--green)",
    "var(--blue)",
    "var(--purple)",
    "var(--lime)",
    "var(--red)",
  ];
function R(e) {
  const n = e.slice();
  for (let l = n.length - 1; l > 0; l--) {
    const r = Math.floor(Math.random() * (l + 1));
    [n[l], n[r]] = [n[r], n[l]];
  }
  return n;
}
function ee(e) {
  try {
    return e ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
}
function te(e) {
  const n = [];
  let l = 0,
    r = !1,
    s = "";
  for (const a of e)
    (a === '"' ? (r = !r) : !r && a === "(" ? l++ : !r && a === ")" && l--,
      a === "," && l === 0 && !r ? (n.push(s.trim()), (s = "")) : (s += a));
  return (n.push(s.trim()), n);
}
function se({ formula: e }) {
  const n = /^=([A-Z]+)\((.*)\)$/i.exec(e),
    l = n ? te(n[2]) : [];
  return !n || l.length > 5 || l.some((r) => !r)
    ? t.jsx(t.Fragment, { children: e })
    : t.jsxs(t.Fragment, {
        children: [
          t.jsxs("span", { className: "fn", children: ["=", n[1], "("] }),
          l.map((r, s) =>
            t.jsxs(
              z.Fragment,
              {
                children: [
                  s
                    ? t.jsx("span", { className: "sep", children: ", " })
                    : null,
                  t.jsx("span", { className: `a${s + 1}`, children: r }),
                ],
              },
              s,
            ),
          ),
          t.jsx("span", { className: "fn", children: ")" }),
        ],
      });
}
function ne({ formula: e }) {
  return t.jsxs("div", {
    className: "formula",
    "data-quiz-fx": "",
    children: [
      t.jsx("span", { className: "fx", children: "fx" }),
      t.jsx(se, { formula: e }),
    ],
  });
}
function le({ spec: e }) {
  return t.jsxs("div", {
    className: "sheet",
    children: [
      t.jsx("div", {
        className: "scroll",
        children: t.jsxs("table", {
          children: [
            t.jsxs("caption", {
              className: "sr-only",
              children: [e.tab, " sheet"],
            }),
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", {
                    children: t.jsx("span", {
                      className: "sr-only",
                      children: "Row",
                    }),
                  }),
                  e.cols.map((n) =>
                    t.jsx("th", { scope: "col", children: n }, n),
                  ),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: e.data.map((n, l) => {
                const r = e.start + l;
                return t.jsxs(
                  "tr",
                  {
                    children: [
                      t.jsx("td", { className: "rn", children: r }),
                      n.map((s, a) => {
                        const o = `${e.cols[a]}${r}`,
                          h = e.hl?.[o],
                          c = [
                            h ?? "",
                            e.hdRow === r ? "hd" : "",
                            String(s).startsWith("=") ? "fcell" : "",
                            typeof s == "number" ? "num" : "",
                          ]
                            .filter(Boolean)
                            .join(" ");
                        return t.jsx(
                          "td",
                          {
                            className: c || void 0,
                            "data-cell": o,
                            "data-tone": h,
                            children: s,
                          },
                          o,
                        );
                      }),
                    ],
                  },
                  r,
                );
              }),
            }),
          ],
        }),
      }),
      t.jsxs("div", {
        className: "tab",
        children: [
          t.jsx("span", { "aria-hidden": "true", children: "▶" }),
          " ",
          t.jsx("b", { children: e.tab }),
        ],
      }),
    ],
  });
}
function A({ visual: e }) {
  return e
    ? t.jsxs(t.Fragment, {
        children: [
          e.fx ? t.jsx(ne, { formula: e.fx }) : null,
          e.sheets?.length
            ? t.jsx("div", {
                className: "sheets",
                children: e.sheets.map((n, l) => t.jsx(le, { spec: n }, l)),
              })
            : null,
          e.legend
            ? t.jsx("div", {
                className: "legend",
                children: e.legend.map(([n, l]) =>
                  t.jsx("span", { style: { "--lc": n }, children: l }, l),
                ),
              })
            : null,
          e.note
            ? t.jsx("p", {
                className: "hint",
                children: t.jsx(T, { text: e.note }),
              })
            : null,
        ],
      })
    : null;
}
function _({ head: e, rows: n }) {
  return t.jsx("div", {
    className: "ttwrap",
    children: t.jsxs("table", {
      className: "tt",
      children: [
        e
          ? t.jsx("thead", {
              children: t.jsx("tr", {
                children: e.map((l) => t.jsx("th", { children: l }, l)),
              }),
            })
          : null,
        t.jsx("tbody", {
          children: n.map((l, r) =>
            t.jsx(
              "tr",
              {
                children: l.map((s, a) =>
                  t.jsx("td", { children: t.jsx(T, { text: s }) }, a),
                ),
              },
              r,
            ),
          ),
        }),
      ],
    }),
  });
}
function ae({ block: e }) {
  return "p" in e
    ? t.jsx("p", { children: t.jsx(T, { text: e.p }) })
    : "visual" in e
      ? t.jsx(A, { visual: e.visual })
      : "table" in e
        ? t.jsx(_, { head: e.table.head, rows: e.table.rows })
        : "tip" in e
          ? t.jsx("div", {
              className: "tip",
              children: t.jsx(T, { text: e.tip }),
            })
          : t.jsx("div", {
              className: "frame",
              style: { "--c": e.c },
              children: e.frame.map((n, l) =>
                typeof n == "string"
                  ? t.jsx(z.Fragment, { children: n }, l)
                  : t.jsx(
                      "span",
                      { style: { background: n.c }, children: n.text },
                      l,
                    ),
              ),
            });
}
function re({ question: e, onFinish: n }) {
  const l = j.useMemo(() => R(e.opts.map((a, o) => o)), [e]),
    [r, s] = j.useState(null);
  return t.jsx("div", {
    className: "opts",
    children: l.map((a, o) => {
      const h = [
        "opt",
        r !== null && a === e.ans ? "right" : "",
        r === a && a !== e.ans ? "wrong" : "",
      ]
        .filter(Boolean)
        .join(" ");
      return t.jsxs(
        "button",
        {
          type: "button",
          className: h,
          disabled: r !== null,
          "data-quiz-option": a === e.ans ? "right" : "wrong",
          onClick: () => {
            s(a);
            const c = a === e.ans;
            n(c ? 1 : 0, c);
          },
          children: [
            t.jsx("span", { className: "k", children: "ABCD"[o] }),
            t.jsx("span", {
              className: e.mono ? "mono" : void 0,
              children: e.opts[a],
            }),
          ],
        },
        a,
      );
    }),
  });
}
function oe({ question: e, onFinish: n }) {
  const l = j.useMemo(() => R(e.pairs.map((p, y) => y)), [e]),
    r = j.useMemo(() => R(e.pairs.map((p, y) => y)), [e]),
    [s, a] = j.useState(null),
    [o, h] = j.useState({}),
    [c, i] = j.useState(() => new Set()),
    [d, m] = j.useState(null);
  j.useEffect(() => {
    if (!d) return;
    const p = window.setTimeout(() => m(null), 360);
    return () => window.clearTimeout(p);
  }, [d]);
  const g = (p) => {
    if (!(s === null || o[p]))
      if (s === p) {
        const y = Object.keys(o).length,
          k = { ...o, [p]: D[y % 5] };
        if ((h(k), a(null), Object.keys(k).length === e.pairs.length)) {
          const v = e.pairs.filter((f, b) => !c.has(b)).length;
          n(
            v,
            v === e.pairs.length,
            `You got <b>${v}/${e.pairs.length}</b> first time. `,
          );
        }
      } else (i((y) => new Set(y).add(s)), m({ l: s, r: p, n: Date.now() }));
  };
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx("p", {
        className: "hint",
        children:
          "Tap an item on the left, then its partner on the right. A wrong first try on an item loses its point.",
      }),
      t.jsxs("div", {
        className: "match",
        children: [
          t.jsx("div", {
            className: "col",
            children: l.map((p) =>
              t.jsx(
                "button",
                {
                  type: "button",
                  className: [
                    "mi",
                    "l",
                    s === p ? "sel" : "",
                    o[p] ? "done" : "",
                    d?.l === p ? "shake" : "",
                  ]
                    .filter(Boolean)
                    .join(" "),
                  style: o[p] ? { background: o[p] } : void 0,
                  "aria-pressed": s === p,
                  "data-quiz-left": p,
                  onClick: () => {
                    o[p] || a(p);
                  },
                  children: e.pairs[p][0],
                },
                p,
              ),
            ),
          }),
          t.jsx("div", {
            className: "col",
            children: r.map((p) =>
              t.jsx(
                "button",
                {
                  type: "button",
                  className: [
                    "mi",
                    "r",
                    o[p] ? "done" : "",
                    d?.r === p ? "shake" : "",
                  ]
                    .filter(Boolean)
                    .join(" "),
                  style: o[p] ? { background: o[p] } : void 0,
                  "data-quiz-right": p,
                  onClick: () => g(p),
                  children: e.pairs[p][1],
                },
                p,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function ce({ question: e, onFinish: n }) {
  const l = j.useMemo(() => R(e.chips), [e]),
    [r, s] = j.useState(() => e.answer.map(() => null)),
    [a, o] = j.useState(!1),
    h = (c) => {
      if (a || r.includes(c)) return;
      const i = r.indexOf(null);
      i < 0 || s(r.map((d, m) => (m === i ? c : d)));
    };
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx("p", {
        className: "english",
        children: t.jsx(T, { text: e.english }),
      }),
      t.jsxs("div", {
        className: "slots",
        children: [
          "=",
          e.fn,
          "(",
          " ",
          e.answer.map((c, i) => {
            const d = r[i],
              m = a ? (d === c ? "ok" : "no") : d ? "filled" : "";
            return t.jsxs(
              z.Fragment,
              {
                children: [
                  t.jsx("button", {
                    type: "button",
                    className: ["slot", m].filter(Boolean).join(" "),
                    "aria-label": d
                      ? `Box ${i + 1}: ${d}`
                      : `Box ${i + 1}: empty`,
                    "data-quiz-slot": i,
                    onClick: () => {
                      a || s(r.map((g, p) => (p === i ? null : g)));
                    },
                    children: d ?? " ",
                  }),
                  i < e.answer.length - 1 ? "," : "",
                ],
              },
              i,
            );
          }),
          " ",
          ")",
        ],
      }),
      t.jsx("div", {
        className: "chips",
        children: l.map((c, i) =>
          t.jsx(
            "button",
            {
              type: "button",
              className: ["chip", r.includes(c) ? "used" : ""]
                .filter(Boolean)
                .join(" "),
              style: { background: D[i % D.length] },
              "data-quiz-chip": c,
              onClick: () => h(c),
              children: c,
            },
            c,
          ),
        ),
      }),
      a
        ? null
        : t.jsx("div", {
            className: "row",
            children: t.jsx("button", {
              type: "button",
              className: "btn",
              disabled: r.includes(null),
              "data-quiz-check": "",
              onClick: () => {
                o(!0);
                const c = r.filter((i, d) => i === e.answer[d]).length;
                n(
                  c,
                  c === e.answer.length,
                  `<b>${c}/${e.answer.length}</b> boxes correct. Correct formula: `,
                );
              },
              children: "Check",
            }),
          }),
    ],
  });
}
function ie({ question: e, onFinish: n }) {
  const l = j.useMemo(() => R(e.items.map((o, h) => h)), [e]),
    [r, s] = j.useState([]),
    a = r.length === e.items.length;
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx("div", {
        className: "ord",
        children: l.map((o) => {
          const h = r.indexOf(o),
            c = a ? (h === o ? "ok" : "no") : h >= 0 ? "picked" : "";
          return t.jsxs(
            "button",
            {
              type: "button",
              className: ["oi", h >= 0 ? "picked" : "", c]
                .filter(Boolean)
                .join(" "),
              disabled: a,
              "data-quiz-step": o,
              onClick: () => {
                if (r.includes(o) || a) return;
                const i = [...r, o];
                if ((s(i), i.length === e.items.length)) {
                  const d = i.every((g, p) => g === p),
                    m = (g) => g.replace(/&/g, "&amp;").replace(/</g, "&lt;");
                  n(
                    d ? 1 : 0,
                    d,
                    d
                      ? ""
                      : `Correct order: ${e.items.map((g, p) => `${p + 1}. ${m(g)}`).join(" &nbsp; ")}<br>`,
                  );
                }
              },
              children: [
                t.jsx("span", {
                  className: "n",
                  children: h >= 0 ? h + 1 : "",
                }),
                t.jsx("span", { children: e.items[o] }),
              ],
            },
            o,
          );
        }),
      }),
      a
        ? null
        : t.jsx("div", {
            className: "row",
            children: t.jsx("button", {
              type: "button",
              className: "btn ghost",
              onClick: () => s([]),
              children: "Reset",
            }),
          }),
    ],
  });
}
function de({ question: e, onFinish: n }) {
  const l = e.type === "typo",
    [r, s] = j.useState(l ? e.broken : ""),
    [a, o] = j.useState(0),
    [h, c] = j.useState(!1),
    [i, d] = j.useState(""),
    [m, g] = j.useState(null),
    [p, y] = j.useState(0),
    k = j.useRef(null);
  j.useEffect(() => {
    k.current?.focus({ preventScroll: !0 });
  }, []);
  const v = () => {
    if (m || !r.trim()) return;
    const f = l ? O(r) === O(e.fixed) : K(e, r),
      b = a + 1;
    if ((o(b), f || b >= 2)) {
      g(f ? "ok" : "no");
      const x = f && b === 1 && !h;
      let u =
        f && !x ? "Fixed, but no point this time (hint or second try). " : "";
      if (
        (!l &&
          f &&
          !x &&
          (u = "Right, but no point this time (hint or second try). "),
        l)
      )
        u += `<div class="diff">Correct: ${V(e.broken, e.shown)} </div>`;
      else if (!f) {
        const N = P(e, r);
        u += `${N ? `${N} ` : ""}The answer is <b>${e.accept[0]}</b>. `;
      }
      n(x ? 1 : 0, f, u);
      return;
    }
    const S = l ? void 0 : P(e, r);
    (d(
      `<b>${l ? "Still broken." : "Not yet."}</b> One more try. ${S ?? e.hint}`,
    ),
      y((x) => x + 1));
  };
  return t.jsxs(t.Fragment, {
    children: [
      l
        ? t.jsxs(t.Fragment, {
            children: [
              t.jsx("p", {
                className: "hint",
                children:
                  "Change only the broken part. Keep the $ signs and everything else as they are.",
              }),
              t.jsx("div", { className: "broken", children: e.broken }),
            ],
          })
        : null,
      t.jsx(
        "input",
        {
          ref: k,
          className: ["typo-in", m ?? (a ? "no" : ""), p ? "shake" : ""]
            .filter(Boolean)
            .join(" "),
          "aria-label": l ? "The fixed formula" : "Your answer",
          placeholder: l ? void 0 : "Type your answer",
          spellCheck: !1,
          autoComplete: "off",
          autoCapitalize: "off",
          autoCorrect: "off",
          readOnly: m !== null,
          value: r,
          "data-quiz-input": "",
          onChange: (f) => s(f.target.value),
          onKeyDown: (f) => {
            f.key === "Enter" && v();
          },
        },
        p,
      ),
      t.jsx("div", {
        className: "hint",
        role: "status",
        "aria-live": "polite",
        children: i ? t.jsx(T, { text: i }) : null,
      }),
      m
        ? null
        : t.jsxs("div", {
            className: "row",
            children: [
              t.jsx("button", {
                type: "button",
                className: "btn",
                "data-quiz-check": "",
                onClick: v,
                children: "Check",
              }),
              t.jsx("button", {
                type: "button",
                className: "btn ghost",
                "data-quiz-hint": "",
                onClick: () => {
                  (c(!0), d(`Hint: ${e.hint} (using a hint means no point)`));
                },
                children: "Hint",
              }),
            ],
          }),
    ],
  });
}
function ue({ question: e, onFinish: n }) {
  switch (e.type) {
    case "mcq":
      return t.jsx(re, { question: e, onFinish: n });
    case "match":
      return t.jsx(oe, { question: e, onFinish: n });
    case "build":
      return t.jsx(ce, { question: e, onFinish: n });
    case "order":
      return t.jsx(ie, { question: e, onFinish: n });
    default:
      return t.jsx(de, { question: e, onFinish: n });
  }
}
function he({ game: e, saved: n, onStart: l, onResume: r }) {
  const [s, a] = j.useState(null),
    [o, h] = j.useState(!1),
    [c, i] = j.useState(n?.name ?? ""),
    d = s?.kind === "play" ? s.step : -1;
  j.useEffect(() => {
    if (!o || d < 0) return;
    if (d >= e.play.length - 1) {
      h(!1);
      return;
    }
    const f = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
        ? 2600
        : 1900,
      b = window.setTimeout(() => a({ kind: "play", step: d + 1 }), f);
    return () => window.clearTimeout(b);
  }, [o, d, e.play.length]);
  const m =
      s?.kind === "arg" ? s.index : s?.kind === "play" ? e.play[s.step].a : -1,
    g = (f) => {
      (h(!1),
        s?.kind === "arg" && s.index === f
          ? a(null)
          : a({ kind: "arg", index: f }));
    },
    p = F(e),
    y = s?.kind === "arg" ? e.args[s.index] : null,
    k = s?.kind === "play" ? e.play[s.step] : null,
    v = y ? y.c : k ? (k.a >= 0 ? e.args[k.a].c : "#3a86ff") : void 0;
  return t.jsxs("div", {
    className: ["card", m >= 0 ? "focusing" : ""].filter(Boolean).join(" "),
    style: { "--c": "#ff4d8d" },
    "data-quiz-intro": "",
    children: [
      t.jsx("span", { className: "sec", children: e.badge }),
      t.jsx("h2", { className: "btq-title", children: e.title }),
      t.jsx("p", { children: t.jsx(T, { text: e.lead }) }),
      t.jsxs("div", {
        className: "formula ifx",
        children: [
          t.jsx("span", { className: "fx", children: "fx" }),
          e.formula.map((f, b) =>
            f.a === void 0
              ? t.jsx(
                  "span",
                  { className: f.sep ? "sep" : "fn", children: f.t },
                  b,
                )
              : t.jsx(
                  "span",
                  {
                    role: "button",
                    tabIndex: 0,
                    className: ["arg", `a${f.a + 1}`, m === f.a ? "on" : ""]
                      .filter(Boolean)
                      .join(" "),
                    onClick: () => g(f.a),
                    onKeyDown: (S) => {
                      (S.key === "Enter" || S.key === " ") &&
                        (S.preventDefault(), g(f.a));
                    },
                    children: f.t,
                  },
                  b,
                ),
          ),
        ],
      }),
      t.jsx("div", {
        className: "anat",
        children: e.args.map((f, b) =>
          t.jsxs(
            "button",
            {
              type: "button",
              className: ["tile", m === b ? "on" : ""]
                .filter(Boolean)
                .join(" "),
              style: { background: f.c, animationDelay: `${0.08 * b}s` },
              "aria-pressed": m === b,
              "data-quiz-tile": b,
              onClick: () => g(b),
              children: [t.jsx("b", { children: f.k }), f.lab],
            },
            f.k,
          ),
        ),
      }),
      t.jsxs("p", {
        className: "plain",
        children: [
          t.jsx("b", { children: "In plain English:" }),
          " ",
          e.plain.map((f, b) =>
            typeof f == "string"
              ? t.jsx(z.Fragment, { children: f }, b)
              : t.jsx(
                  "span",
                  {
                    role: "button",
                    tabIndex: 0,
                    className: ["eng", m === f.a ? "on" : ""]
                      .filter(Boolean)
                      .join(" "),
                    style: { "--ac": e.args[f.a].c, "--at": e.args[f.a].tint },
                    onClick: () => g(f.a),
                    onKeyDown: (S) => {
                      (S.key === "Enter" || S.key === " ") &&
                        (S.preventDefault(), g(f.a));
                    },
                    children: f.t,
                  },
                  b,
                ),
          ),
        ],
      }),
      y || k
        ? t.jsx(
            "div",
            {
              className: "zoom",
              style: { borderColor: v },
              "aria-live": "polite",
              "data-quiz-zoom": "",
              children: y
                ? t.jsxs(t.Fragment, {
                    children: [
                      t.jsx("div", {
                        className: "ztitle",
                        style: { color: y.c },
                        children: y.title,
                      }),
                      t.jsx("p", { children: t.jsx(T, { text: y.txt }) }),
                      t.jsx(A, { visual: y.vis }),
                    ],
                  })
                : k
                  ? t.jsxs(t.Fragment, {
                      children: [
                        t.jsx("div", { className: "ztitle", children: k.cap }),
                        t.jsx(A, { visual: k.vis }),
                      ],
                    })
                  : null,
            },
            y ? `a${s?.kind === "arg" ? s.index : ""}` : `p${d}`,
          )
        : null,
      t.jsxs("div", {
        className: "row",
        children: [
          t.jsx("button", {
            type: "button",
            className: "btn",
            style: { "--c": "#3a86ff" },
            "data-quiz-play": "",
            onClick: () => {
              o ? h(!1) : (a({ kind: "play", step: 0 }), h(!0));
            },
            children: o ? "❚❚ Pause" : "▶ Watch it work",
          }),
          t.jsx("button", {
            type: "button",
            className: "btn ghost",
            onClick: () => {
              (h(!1), a(null));
            },
            children: "Show all",
          }),
        ],
      }),
      t.jsxs("p", {
        children: [
          e.questions.length,
          " questions across ",
          e.sections.length,
          " rounds, ",
          p,
          " points. You get your score as an image to share on Teams at the end.",
        ],
      }),
      t.jsxs("div", {
        className: "row",
        children: [
          t.jsx("input", {
            className: "name",
            placeholder: "Your first name",
            "aria-label": "Your first name",
            maxLength: 24,
            value: c,
            onChange: (f) => i(f.target.value),
            onKeyDown: (f) => {
              f.key === "Enter" && l(c);
            },
          }),
          t.jsx("button", {
            type: "button",
            className: "btn",
            "data-quiz-start": "",
            onClick: () => l(c),
            children: n ? "Start again" : "Start",
          }),
          n
            ? t.jsxs("button", {
                type: "button",
                className: "btn",
                style: { "--c": "#2ec4b6" },
                "data-quiz-resume": "",
                onClick: r,
                children: [
                  "Resume (Q",
                  n.i + 1,
                  " of ",
                  e.questions.length,
                  ")",
                ],
              })
            : null,
        ],
      }),
    ],
  });
}
function xe({ game: e, signedIn: n }) {
  const l = j.useMemo(() => ee(n), [n]),
    r = Q(e),
    [s, a] = j.useState(() => H(e, l?.getItem(r) ?? null)),
    [o, h] = j.useState(() => I()),
    [c, i] = j.useState({ kind: "intro" }),
    [d, m] = j.useState(null),
    g = j.useRef(null),
    p = j.useMemo(() => {
      const x = {};
      for (const u of e.questions) x[u.sec] = (x[u.sec] ?? 0) + E(u);
      return x;
    }, [e]),
    y = j.useCallback(
      (x) => {
        try {
          x ? l?.setItem(r, JSON.stringify(x)) : l?.removeItem(r);
        } catch {}
        a(x);
      },
      [l, r],
    ),
    k = () => {
      g.current?.scrollIntoView?.({ block: "start", behavior: "smooth" });
    },
    v = (x, u) => {
      if ((m(null), u >= e.questions.length)) {
        (h(x), y(null), i({ kind: "results" }), k());
        return;
      }
      const N = e.questions[u],
        C = e.questions.findIndex(($) => $.sec === N.sec) === u;
      let w = { ...x, i: u };
      (e.teach[N.sec] && C && !x.taught.includes(N.sec)
        ? ((w = { ...w, taught: [...x.taught, N.sec] }),
          i({ kind: "teach", i: u }))
        : i({ kind: "question", i: u }),
        h(w),
        y(w),
        k());
    },
    f =
      (x) =>
      (u, N, C = "") => {
        const w = {
          ...o,
          score: o.score + u,
          got: { ...o.got, [x.sec]: (o.got[x.sec] ?? 0) + u },
        };
        (h(w),
          y(w.i + 1 < e.questions.length ? { ...w, i: w.i + 1 } : null),
          m({ good: N, extra: C }));
      },
    b =
      c.kind === "results"
        ? 100
        : (Math.max(0, o.i) / e.questions.length) * 100;
  let S;
  if (c.kind === "intro")
    S = t.jsx(he, {
      game: e,
      saved: s,
      onStart: (x) => v(I(x.trim() || "Student"), 0),
      onResume: () => {
        s && v(s, s.i);
      },
    });
  else if (c.kind === "teach") {
    const x = e.questions[c.i],
      u = e.sections.find((C) => C.id === x.sec),
      N = e.teach[x.sec];
    S = t.jsxs("div", {
      className: "card teach",
      style: { "--c": u?.c },
      "data-quiz-teach": x.sec,
      children: [
        t.jsxs("span", {
          className: "sec",
          children: ["New round: ", u?.name],
        }),
        t.jsx("span", {
          className: "pts",
          children: "Quick lesson · no points",
        }),
        t.jsx("h2", { children: N.title }),
        N.blocks.map((C, w) => t.jsx(ae, { block: C }, w)),
        t.jsx("div", {
          className: "row",
          children: t.jsx("button", {
            type: "button",
            className: "btn",
            "data-quiz-round-start": "",
            onClick: () => {
              (i({ kind: "question", i: c.i }), k());
            },
            children: "Start the round →",
          }),
        }),
      ],
    });
  } else if (c.kind === "question") {
    const x = e.questions[c.i],
      u = e.sections.find(($) => $.id === x.sec),
      N = e.questions.findIndex(($) => $.sec === x.sec) === c.i,
      C = E(x),
      w = c.i === e.questions.length - 1;
    S = t.jsxs("div", {
      className: "card",
      style: { "--c": u?.c },
      "data-quiz-question": c.i,
      children: [
        t.jsxs("span", {
          className: "sec",
          children: [N ? "New round: " : "", u?.name],
        }),
        t.jsxs("span", {
          className: "pts",
          children: [
            "Q",
            c.i + 1,
            " of ",
            e.questions.length,
            " · ",
            C,
            " pt",
            C > 1 ? "s" : "",
          ],
        }),
        t.jsx("h2", { children: t.jsx(T, { text: x.prompt }) }),
        t.jsx("div", {
          children: t.jsx(A, { visual: x.visual?.(d !== null) ?? null }),
        }),
        t.jsx(ue, { question: x, onFinish: f(x) }, c.i),
        d
          ? t.jsxs(t.Fragment, {
              children: [
                t.jsxs("div", {
                  className: `fb ${d.good ? "good" : "bad"}`,
                  role: "status",
                  "data-quiz-feedback": d.good ? "good" : "bad",
                  children: [
                    t.jsx("b", {
                      children: d.good ? "Nice one!" : "Not quite.",
                    }),
                    " ",
                    t.jsx(T, { text: d.extra }),
                    t.jsx(T, { text: x.explain }),
                  ],
                }),
                t.jsx("div", {
                  className: "row",
                  children: t.jsx(fe, {
                    label: w ? "See my score →" : "Next →",
                    onClick: () => v(o, c.i + 1),
                  }),
                }),
              ],
            })
          : null,
      ],
    });
  } else
    S = t.jsx(pe, {
      game: e,
      run: o,
      maxBySection: p,
      onAgain: () => v(I(o.name), 0),
    });
  return t.jsx("div", {
    className: "btq btec-quiz",
    ref: g,
    "data-quiz-game": e.id,
    children: t.jsxs("div", {
      className: "btq-wrap",
      children: [
        t.jsxs("header", {
          className: "btq-top",
          children: [
            t.jsx("div", {
              className: "logo",
              "aria-label": e.logo,
              children: [...e.logo].map((x, u) =>
                t.jsx(
                  "span",
                  {
                    "aria-hidden": "true",
                    style: { background: q[u % q.length] },
                    children: x,
                  },
                  u,
                ),
              ),
            }),
            t.jsx("div", {
              className: "bar",
              role: "progressbar",
              "aria-label": "Progress",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Math.round(b),
              children: t.jsx("i", { style: { width: `${b}%` } }),
            }),
            t.jsxs("div", {
              className: "pill",
              "data-quiz-score": "",
              children: ["Score: ", o.score],
            }),
          ],
        }),
        t.jsx("div", { children: S }),
      ],
    }),
  });
}
function fe({ label: e, onClick: n }) {
  const l = j.useRef(null);
  return (
    j.useEffect(() => {
      l.current?.focus({ preventScroll: !0 });
    }, []),
    t.jsx("button", {
      ref: l,
      type: "button",
      className: "btn",
      "data-quiz-next": "",
      onClick: n,
      children: e,
    })
  );
}
function pe({ game: e, run: n, maxBySection: l, onAgain: r }) {
  const s = j.useRef(null),
    [a, o] = j.useState(
      "Download the PNG and attach it in Teams, or copy it and paste straight into a chat.",
    ),
    h = F(e),
    c = Math.round((n.score / h) * 100);
  j.useEffect(() => {
    s.current && Y(s.current, e, n, l);
  }, [e, n, l]);
  const i = () => {
      if (!s.current) return;
      const m = document.createElement("a");
      ((m.download = `${e.logo}-score-${n.name.replace(/[^a-z0-9]+/gi, "_")}.png`),
        (m.href = s.current.toDataURL("image/png")),
        document.body.appendChild(m),
        m.click(),
        m.remove());
    },
    d = () => {
      const m = "Copy is blocked in this browser. Use Download PNG instead.";
      try {
        s.current?.toBlob((g) => {
          if (!g || typeof ClipboardItem > "u") {
            o(m);
            return;
          }
          navigator.clipboard
            .write([new ClipboardItem({ "image/png": g })])
            .then(() => o("Copied! Paste it into Teams with Ctrl+V."))
            .catch(() => o(m));
        });
      } catch {
        o(m);
      }
    };
  return t.jsxs("div", {
    className: "card",
    style: { "--c": "#8338ec", textAlign: "center" },
    "data-quiz-results": "",
    children: [
      t.jsx("span", { className: "sec", children: "Finished!" }),
      t.jsxs("h2", {
        className: "btq-title",
        children: ["Well done, ", n.name],
      }),
      t.jsxs("div", {
        className: "big",
        "data-quiz-final": "",
        children: [n.score, " / ", h],
      }),
      t.jsxs("h2", { children: [c, "% · ", L(e, c)] }),
      t.jsx("div", {
        className: "breakdown",
        children: e.sections.map((m) =>
          t.jsxs(
            "div",
            {
              style: { background: m.c },
              children: [
                m.name,
                t.jsxs("small", {
                  children: [n.got[m.id] ?? 0, " / ", l[m.id] ?? 0],
                }),
              ],
            },
            m.id,
          ),
        ),
      }),
      t.jsxs("details", {
        className: "cheat",
        children: [
          t.jsx("summary", { children: e.cheat.title }),
          t.jsx(_, { rows: e.cheat.rows }),
        ],
      }),
      t.jsx("canvas", {
        ref: s,
        width: 1200,
        height: 675,
        "aria-label": `Score card: ${n.score} out of ${h}`,
      }),
      t.jsxs("div", {
        className: "row",
        style: { justifyContent: "center" },
        children: [
          t.jsx("button", {
            type: "button",
            className: "btn",
            style: { "--c": "#ff4d8d" },
            onClick: i,
            children: "Download PNG",
          }),
          t.jsx("button", {
            type: "button",
            className: "btn",
            style: { "--c": "#3a86ff" },
            onClick: d,
            children: "Copy image",
          }),
          t.jsx("button", {
            type: "button",
            className: "btn ghost",
            onClick: r,
            children: "Try again",
          }),
        ],
      }),
      t.jsx("p", { className: "hint", role: "status", children: a }),
    ],
  });
}
export { xe as default, te as splitArguments };
