import {
  j as e,
  r as u,
  e as y,
  X as S,
  ak as te,
  K as be,
  aU as de,
  bU as je,
  bV as pe,
  bW as ee,
  bX as ae,
  A as ge,
  bY as fe,
  bZ as ke,
  aj as we,
} from "./index-CHiQZc8e.js";
import { f as ye, g as ve, h as se, e as Ne } from "./index-CA7mxY42.js";
const re = (s) => String.fromCharCode(65 + s),
  D = (s) => `£${s.toFixed(2)}`;
function B({ cell: s, formula: l }) {
  return e.jsxs("div", {
    className: "btec-kw-formula-bar",
    "aria-label": `${s} formula`,
    children: [e.jsx("span", { children: s }), e.jsx("code", { children: l })],
  });
}
function N({
  name: s,
  rows: l,
  marks: t = {},
  format: n,
  onPick: a,
  pickable: i,
}) {
  const r = Math.max(...l.map((o) => o.length));
  return e.jsxs("div", {
    className: "btec-kw-sheet",
    children: [
      e.jsx("div", {
        className: "btec-kw-sheet-frame",
        children: e.jsxs("table", {
          "aria-label": `${s} sheet`,
          children: [
            e.jsx("thead", {
              children: e.jsxs("tr", {
                children: [
                  e.jsx("th", { "aria-hidden": "true" }),
                  Array.from({ length: r }, (o, c) =>
                    e.jsx("th", { scope: "col", children: re(c) }, c),
                  ),
                ],
              }),
            }),
            e.jsx("tbody", {
              children: l.map((o, c) => {
                const h = c + 1,
                  x = !!a && (i ? i(h) : h > 1);
                return e.jsxs(
                  "tr",
                  {
                    children: [
                      e.jsx("th", { scope: "row", children: h }),
                      Array.from({ length: r }, (p, g) => {
                        const d = `${re(g)}${h}`,
                          j = o[g] ?? null,
                          m = t[d],
                          b = [
                            h === 1 ? "is-head" : "",
                            typeof j == "number" ? "is-number" : "",
                            m ? `is-${m}` : "",
                            x ? "is-pickable" : "",
                          ]
                            .filter(Boolean)
                            .join(" "),
                          k = j === null ? "" : n ? n(d, j) : String(j);
                        return e.jsx(
                          "td",
                          {
                            className: b || void 0,
                            onClick: x ? () => a?.(h) : void 0,
                            children: k,
                          },
                          d,
                        );
                      }),
                    ],
                  },
                  h,
                );
              }),
            }),
          ],
        }),
      }),
      e.jsx("span", { className: "btec-kw-sheet-tab", children: s }),
    ],
  });
}
function f({ label: s, options: l, value: t, onChange: n }) {
  return e.jsx("div", {
    className: "btec-kw-choices",
    role: "group",
    "aria-label": s,
    children: l.map((a) =>
      e.jsx(
        "button",
        {
          "aria-pressed": a.value === t,
          className: "btec-kw-choice",
          onClick: () => n(a.value),
          type: "button",
          children: a.label,
        },
        a.value,
      ),
    ),
  });
}
const z = ["Comedy", "Horror", "Family"],
  W = [
    ["Comedy", 42, "Mon"],
    ["Horror", 18, "Tue"],
    ["Family", 55, "Wed"],
    ["Comedy", 37, "Thu"],
    ["Horror", null, "Fri"],
    ["Family", 61, "Sat"],
    ["Comedy", 29, "Sun"],
  ],
  P = (s, l) => [
    ["Genre", "Tickets", "Day", ...(l ? [l] : [])],
    ...W.map(([t, n, a], i) => [t, n, a, ...(s ? [s(i)] : [])]),
  ],
  ne = W.map(([, s]) => s),
  E = ne.filter((s) => s !== null),
  A = [
    ["Mon", 21],
    ["Tue", 18],
    ["Wed", 25],
    ["Thu", 30],
    ["Fri", 64],
    ["Sat", 98],
    ["Sun", 72],
  ],
  O = A.reduce((s, [, l]) => s + l, 0);
function L(s, l, t = {}) {
  for (const n of s) t[n] = l;
  return t;
}
const $ = (s, l, t) =>
  Array.from({ length: t - l + 1 }, (n, a) => `${s}${l + a}`);
function Se() {
  const s = [
      ["F01", "Space Cats", 6.5],
      ["F02", "Night Train", 8],
      ["F03", "Big Laugh", 7],
      ["F04", "Deep Sea", 7.5],
      ["F05", "Robot Pals", 6],
    ],
    l = [
      ["Mon", "F03"],
      ["Tue", "F01"],
      ["Wed", "F05"],
      ["Thu", "F09"],
    ],
    [t, n] = u.useState(2),
    [a, i] = u.useState("3"),
    r = l[t - 2][1],
    o = s.findIndex(([d]) => d === r),
    c = o >= 0 ? s[o][Number(a) - 1] : null,
    h = c === null ? "#N/A" : typeof c == "number" ? D(c) : c,
    x = `=VLOOKUP(B${t},Films!$A$2:$C$6,${a},FALSE)`,
    p = { [`B${t}`]: "look", [`C${t}`]: c === null ? "bad" : "result" },
    g = L([...$("A", 2, 6), ...$("B", 2, 6), ...$("C", 2, 6)], "range");
  if (o >= 0) {
    const d = o + 2;
    ((g[`A${d}`] = "match"), (g[`${"ABC"[Number(a) - 1]}${d}`] = "result"));
  }
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(B, { cell: `C${t}`, formula: x }),
      e.jsxs("div", {
        className: "btec-kw-row",
        children: [
          e.jsx(N, {
            name: "Sales",
            rows: [
              [
                "Day",
                "Film ID",
                a === "3" ? "Price" : a === "2" ? "Title" : "ID",
              ],
              ...l.map(([d, j], m) => [d, j, m + 2 === t ? h : ""]),
            ],
            marks: p,
            onPick: n,
          }),
          e.jsx(N, {
            name: "Films",
            rows: [["ID", "Title", "Price"], ...s],
            marks: g,
            format: (d, j) => (typeof j == "number" ? D(j) : String(j)),
          }),
        ],
      }),
      e.jsx(f, {
        label: "Column to bring back",
        options: [
          { value: "1", label: "Column 1" },
          { value: "2", label: "Column 2" },
          { value: "3", label: "Column 3" },
        ],
        value: a,
        onChange: i,
      }),
      e.jsxs("ol", {
        className: "btec-kw-steps",
        children: [
          e.jsxs("li", {
            children: [
              "Look for ",
              e.jsxs("strong", { children: ["B", t] }),
              " (",
              r,
              ")",
            ],
          }),
          e.jsxs("li", {
            children: [
              "in the ",
              e.jsx("strong", { children: "Films" }),
              " sheet, ",
              e.jsx("strong", { children: "$A$2:$C$6" }),
            ],
          }),
          e.jsxs("li", {
            children: [
              "bring back column ",
              e.jsx("strong", { children: a }),
              " of that table",
            ],
          }),
          e.jsxs("li", {
            children: [
              e.jsx("strong", { children: "FALSE" }),
              ": exact match only, or ",
              e.jsx("span", {
                className: "btec-kw-result btec-kw-bad",
                children: "#N/A",
              }),
            ],
          }),
        ],
      }),
      e.jsxs("p", {
        className: "btec-kw-result",
        "aria-live": "polite",
        children: ["C", t, " = ", h],
      }),
    ],
  });
}
function Ce() {
  const [s, l] = u.useState("COUNTIF"),
    [t, n] = u.useState("Comedy"),
    a = [];
  W.forEach(([o, c], h) => {
    const x = h + 2;
    (s === "COUNTIF" && o === t && a.push(`A${x}`),
      s === "COUNTA" && c !== null && a.push(`B${x}`),
      s === "COUNTBLANK" && c === null && a.push(`B${x}`));
  });
  const i = s === "COUNTIF" ? `=COUNTIF(A2:A8,"${t}")` : `=${s}(B2:B8)`,
    r = L($(s === "COUNTIF" ? "A" : "B", 2, 8), "range");
  return (
    L(a, "match", r),
    (r.E2 = "result"),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(f, {
          label: "Count function",
          options: [
            { value: "COUNTIF", label: "COUNTIF" },
            { value: "COUNTA", label: "COUNTA" },
            { value: "COUNTBLANK", label: "COUNTBLANK" },
          ],
          value: s,
          onChange: l,
        }),
        s === "COUNTIF" ? e.jsx(he, { value: t, onChange: n }) : null,
        e.jsx(B, { cell: "E2", formula: i }),
        e.jsx(N, {
          name: "Showings",
          rows: P().map((o, c) => [...o, null, c === 1 ? a.length : null]),
          marks: r,
        }),
        e.jsxs("p", {
          className: "btec-kw-result",
          "aria-live": "polite",
          children: [i.slice(1), " = ", a.length],
        }),
      ],
    })
  );
}
function he({ value: s, onChange: l }) {
  return e.jsxs("label", {
    className: "btec-kw-field",
    children: [
      "Criteria",
      e.jsx("select", {
        value: s,
        onChange: (t) => l(t.target.value),
        children: z.map((t) =>
          e.jsxs("option", { value: t, children: ['"', t, '"'] }, t),
        ),
      }),
    ],
  });
}
function Te() {
  const [s, l] = u.useState("Comedy"),
    t = L([...$("A", 2, 8), ...$("B", 2, 8)], "range");
  let n = 0;
  (W.forEach(([i, r], o) => {
    i === s &&
      ((t[`A${o + 2}`] = "look"), (t[`B${o + 2}`] = "match"), (n += r ?? 0));
  }),
    (t.E2 = "result"));
  const a = `=SUMIF(A2:A8,"${s}",B2:B8)`;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(he, { value: s, onChange: l }),
      e.jsx(B, { cell: "E2", formula: a }),
      e.jsx(N, {
        name: "Showings",
        rows: P().map((i, r) => [...i, null, r === 1 ? n : null]),
        marks: t,
      }),
      e.jsxs("ol", {
        className: "btec-kw-steps",
        children: [
          e.jsxs("li", {
            children: [
              "Check each genre in ",
              e.jsx("strong", { children: "A2:A8" }),
            ],
          }),
          e.jsxs("li", {
            children: [
              "where it is ",
              e.jsxs("strong", { children: ['"', s, '"'] }),
            ],
          }),
          e.jsxs("li", {
            children: [
              "add up the tickets beside it in ",
              e.jsx("strong", { children: "B2:B8" }),
            ],
          }),
        ],
      }),
      e.jsxs("p", {
        className: "btec-kw-result",
        "aria-live": "polite",
        children: ["= ", n],
      }),
    ],
  });
}
function Fe() {
  const [s, l] = u.useState(40),
    t = ne.map((a) => ((a ?? 0) >= s ? "Busy" : "Quiet")),
    n = {};
  return (
    t.forEach((a, i) => {
      n[`D${i + 2}`] = a === "Busy" ? "result" : "range";
    }),
    e.jsxs(e.Fragment, {
      children: [
        e.jsxs("label", {
          className: "btec-kw-field",
          children: [
            "Busy from",
            e.jsx("input", {
              inputMode: "numeric",
              max: 100,
              min: 0,
              onChange: (a) => l(Number(a.target.value) || 0),
              step: 5,
              type: "number",
              value: s,
            }),
          ],
        }),
        e.jsx(B, { cell: "D2", formula: `=IF(B2>=${s},"Busy","Quiet")` }),
        e.jsx(N, { name: "Showings", rows: P((a) => t[a], "Busy?"), marks: n }),
        e.jsxs("ol", {
          className: "btec-kw-steps",
          children: [
            e.jsxs("li", {
              children: ["Test: ", e.jsxs("strong", { children: ["B2>=", s] })],
            }),
            e.jsxs("li", {
              children: [
                "if true: ",
                e.jsx("strong", {
                  className: "btec-kw-good",
                  children: '"Busy"',
                }),
              ],
            }),
            e.jsxs("li", {
              children: [
                "if false: ",
                e.jsx("strong", { children: '"Quiet"' }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function Ae() {
  const [s, l] = u.useState("SUM"),
    t = E.reduce((r, o) => r + o, 0),
    n =
      s === "SUM"
        ? t
        : s === "AVERAGE"
          ? t / E.length
          : s === "MIN"
            ? Math.min(...E)
            : Math.max(...E),
    a = Number.isInteger(n) ? String(n) : n.toFixed(2),
    i = L($("B", 2, 8), "range");
  return (
    (s === "MIN" || s === "MAX") && (i[`B${ne.indexOf(n) + 2}`] = "match"),
    (i.B9 = "result"),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(f, {
          label: "Function",
          options: ["SUM", "AVERAGE", "MIN", "MAX"].map((r) => ({
            value: r,
            label: r,
          })),
          value: s,
          onChange: l,
        }),
        e.jsx(B, { cell: "B9", formula: `=${s}(B2:B8)` }),
        e.jsx(N, {
          name: "Showings",
          rows: [...P(), [s, n, null]],
          marks: i,
          format: (r, o) => (r === "B9" ? a : String(o)),
        }),
        s === "AVERAGE"
          ? e.jsxs("p", {
              children: [
                t,
                " ÷ ",
                E.length,
                " = ",
                a,
                " ",
                e.jsx("span", {
                  className: "btec-kw-example",
                  children: "(the empty cell is not counted)",
                }),
              ],
            })
          : null,
      ],
    })
  );
}
function $e() {
  const [s, l] = u.useState("*"),
    t = 42,
    n = 7,
    a = s === "+" ? t + n : s === "-" ? t - n : s === "*" ? t * n : t / n;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Operator",
        options: [
          { value: "+", label: "+ add" },
          { value: "-", label: "- subtract" },
          { value: "*", label: "* multiply" },
          { value: "/", label: "/ divide" },
        ],
        value: s,
        onChange: l,
      }),
      e.jsx(B, { cell: "D2", formula: `=B2${s}C2` }),
      e.jsx(N, {
        name: "Takings",
        rows: [
          ["Film", "Tickets", "Price", "Result"],
          ["Big Laugh", t, n, a],
        ],
        marks: { B2: "look", C2: "look", D2: "result" },
        format: (i, r) =>
          i === "C2"
            ? D(Number(r))
            : i === "D2" && s === "*"
              ? D(a)
              : String(i === "D2" ? Number(a.toFixed(2)) : r),
      }),
    ],
  });
}
function Be() {
  const [s, l] = u.useState("absolute"),
    [t, n] = u.useState(3),
    a = [42, 18, 55, 37],
    i = (c) => (s === "absolute" ? `=B${c}*$F$1` : `=B${c}*F${c - 1}`),
    r = [
      ["Film", "Tickets", "Takings", null, "Price", 7.5],
      ...a.map((c, h) => {
        const x = h + 2,
          p = s === "absolute" || x === 2 ? c * 7.5 : 0;
        return [`Film ${h + 1}`, c, p, null, null, null];
      }),
    ],
    o = {
      [`B${t}`]: "look",
      [`C${t}`]: s === "relative" && t > 2 ? "bad" : "result",
    };
  return (
    (o[s === "absolute" ? "F1" : `F${t - 1}`] = "look"),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(f, {
          label: "Reference",
          options: [
            { value: "relative", label: "F1 relative" },
            { value: "absolute", label: "$F$1 absolute" },
          ],
          value: s,
          onChange: l,
        }),
        e.jsx(B, { cell: `C${t}`, formula: i(t) }),
        e.jsx(N, {
          name: "Takings",
          rows: r,
          marks: o,
          onPick: n,
          format: (c, h) =>
            (c.startsWith("C") || c === "F1") && typeof h == "number"
              ? D(h)
              : String(h),
        }),
        e.jsx("ol", {
          className: "btec-kw-steps",
          children: a.map((c, h) =>
            e.jsx(
              "li",
              {
                children: e.jsxs("code", {
                  className: "btec-kw-result",
                  children: ["C", h + 2, ": ", i(h + 2)],
                }),
              },
              h,
            ),
          ),
        }),
      ],
    })
  );
}
function Re() {
  const [s, l] = u.useState(7),
    t = { [`B${s}`]: "look", B9: "look", [`C${s}`]: "result" };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(B, { cell: `C${s}`, formula: `=B${s}/$B$9` }),
      e.jsx(N, {
        name: "Week",
        rows: [
          ["Day", "Tickets", "Share"],
          ...A.map(([n, a]) => [n, a, `${Math.round((a / O) * 100)}%`]),
          ["Total", O, "100%"],
        ],
        marks: t,
        onPick: (n) => (n >= 2 && n <= 8 ? l(n) : void 0),
        pickable: (n) => n >= 2 && n <= 8,
      }),
      e.jsxs("p", {
        className: "btec-kw-result",
        "aria-live": "polite",
        children: [
          A[s - 2][1],
          " ÷ ",
          O,
          " = ",
          (A[s - 2][1] / O).toFixed(3),
          " → ",
          Math.round((A[s - 2][1] / O) * 100),
          "%",
        ],
      }),
    ],
  });
}
function Ie() {
  const [s, l] = u.useState("scale"),
    t = Math.max(...A.map(([, i]) => i)),
    n = Math.min(...A.map(([, i]) => i)),
    a = (i) => {
      const r = (i - n) / (t - n),
        o = [251, 221, 224],
        c = [168, 222, 188];
      return `rgb(${o.map((x, p) => Math.round(x + (c[p] - x) * r)).join(",")})`;
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Conditional formatting",
        options: [
          { value: "bars", label: "Data bars" },
          { value: "scale", label: "Colour scale" },
          { value: "icons", label: "Icon set" },
        ],
        value: s,
        onChange: l,
      }),
      e.jsx("div", {
        className: "btec-kw-sheet",
        children: e.jsx("div", {
          className: "btec-kw-sheet-frame",
          children: e.jsxs("table", {
            "aria-label": "Week sheet",
            children: [
              e.jsx("thead", {
                children: e.jsxs("tr", {
                  children: [
                    e.jsx("th", { scope: "col", children: "Day" }),
                    e.jsx("th", { scope: "col", children: "Tickets" }),
                  ],
                }),
              }),
              e.jsx("tbody", {
                children: A.map(([i, r]) =>
                  e.jsxs(
                    "tr",
                    {
                      children: [
                        e.jsx("td", { children: i }),
                        e.jsx("td", {
                          className: "is-number",
                          style: {
                            minWidth: "9rem",
                            background:
                              s === "scale"
                                ? a(r)
                                : s === "bars"
                                  ? `linear-gradient(90deg, #fcc2d7 ${(r / t) * 100}%, transparent ${(r / t) * 100}%)`
                                  : void 0,
                          },
                          children:
                            s === "icons"
                              ? e.jsxs("span", {
                                  style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                  },
                                  children: [
                                    e.jsx("span", {
                                      "aria-hidden": "true",
                                      className: "btec-kw-swatch",
                                      style: {
                                        borderRadius: 999,
                                        background:
                                          r >= 60
                                            ? "#1d7a4a"
                                            : r >= 25
                                              ? "#e8a300"
                                              : "#c92a2a",
                                      },
                                    }),
                                    r,
                                  ],
                                })
                              : r,
                        }),
                      ],
                    },
                    i,
                  ),
                ),
              }),
            ],
          }),
        }),
      }),
      s === "icons"
        ? e.jsxs("ul", {
            className: "btec-kw-legend",
            children: [
              e.jsxs("li", {
                children: [
                  e.jsx("span", {
                    className: "btec-kw-swatch",
                    style: { borderRadius: 999, background: "#1d7a4a" },
                  }),
                  "60 or more",
                ],
              }),
              e.jsxs("li", {
                children: [
                  e.jsx("span", {
                    className: "btec-kw-swatch",
                    style: { borderRadius: 999, background: "#e8a300" },
                  }),
                  "25 to 59",
                ],
              }),
              e.jsxs("li", {
                children: [
                  e.jsx("span", {
                    className: "btec-kw-swatch",
                    style: { borderRadius: 999, background: "#c92a2a" },
                  }),
                  "under 25",
                ],
              }),
            ],
          })
        : null,
    ],
  });
}
const V = {
  range: {
    field: "Rating (1 to 5)",
    rule: ">=1 and <=5",
    start: "7",
    test: (s) => /^\d+$/.test(s) && Number(s) >= 1 && Number(s) <= 5,
  },
  type: {
    field: "Tickets",
    rule: "a whole number",
    start: "four",
    test: (s) => /^\d+$/.test(s.trim()),
  },
  presence: {
    field: "Film name",
    rule: "not blank",
    start: "",
    test: (s) => s.trim().length > 0,
  },
  length: {
    field: "Member number",
    rule: "exactly 6 characters",
    start: "12345",
    test: (s) => s.trim().length === 6,
  },
};
function Me() {
  const [s, l] = u.useState("range"),
    [t, n] = u.useState(() => ({
      range: V.range.start,
      type: V.type.start,
      presence: V.presence.start,
      length: V.length.start,
    })),
    a = V[s],
    i = a.test(t[s]);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Validation check",
        options: [
          { value: "range", label: "Range" },
          { value: "type", label: "Type" },
          { value: "presence", label: "Presence" },
          { value: "length", label: "Length" },
        ],
        value: s,
        onChange: l,
      }),
      e.jsxs("label", {
        className: "btec-kw-field",
        children: [
          a.field,
          e.jsx("input", {
            onChange: (r) => n((o) => ({ ...o, [s]: r.target.value })),
            value: t[s],
          }),
        ],
      }),
      e.jsxs("div", {
        className: `btec-kw-message ${i ? "is-good" : "is-bad"}`,
        "aria-live": "polite",
        children: [
          i
            ? e.jsx(y, { "aria-hidden": "true", className: "btec-kw-good" })
            : e.jsx(S, { "aria-hidden": "true", className: "btec-kw-bad" }),
          e.jsxs("span", {
            className: "sr-only",
            children: [i ? "Accepted" : "Rejected", ": "],
          }),
          e.jsx("span", { children: a.rule }),
        ],
      }),
    ],
  });
}
function We() {
  const [s, l] = u.useState("Comedy"),
    t = z.map((i) => ({
      name: i,
      total: W.filter(([r]) => r === i).reduce((r, [, o]) => r + (o ?? 0), 0),
    })),
    n = {};
  W.forEach(([i], r) => {
    i === s && ((n[`A${r + 2}`] = "match"), (n[`B${r + 2}`] = "match"));
  });
  const a = {
    [`B${z.indexOf(s) + 2}`]: "result",
    [`A${z.indexOf(s) + 2}`]: "match",
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "btec-kw-row",
        children: [
          e.jsx(N, { name: "Data", rows: P(), marks: n }),
          e.jsx(N, {
            name: "Pivot",
            rows: [
              ["Genre", "Sum of Tickets"],
              ...t.map(({ name: i, total: r }) => [i, r]),
              ["Grand Total", t.reduce((i, { total: r }) => i + r, 0)],
            ],
            marks: a,
            onPick: (i) => (i >= 2 && i <= 4 ? l(z[i - 2]) : void 0),
            pickable: (i) => i >= 2 && i <= 4,
          }),
        ],
      }),
      e.jsxs("p", {
        children: [
          e.jsx("strong", { children: "Rows:" }),
          " Genre · ",
          e.jsx("strong", { children: "Values:" }),
          " Sum of Tickets",
        ],
      }),
    ],
  });
}
const Ee = [
  ["Space Cats", [12, 18, 25, 31, 40, 52, 47]],
  ["Night Train", [44, 39, 35, 30, 22, 20, 15]],
  ["Big Laugh", [20, 34, 22, 36, 24, 38, 26]],
  ["Robot Pals", [30, 31, 29, 30, 32, 30, 31]],
];
function Oe({ values: s, kind: l }) {
  const a = Math.max(...s),
    i = (o) => (o / (s.length - 1)) * 112 + 4,
    r = (o) => 28 - (o / a) * 24;
  return e.jsx("svg", {
    "aria-hidden": "true",
    height: 32,
    viewBox: "0 0 120 32",
    width: 120,
    children:
      l === "line"
        ? e.jsx("polyline", {
            fill: "none",
            points: s.map((o, c) => `${i(c)},${r(o)}`).join(" "),
            stroke: "#c2255c",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2.5,
          })
        : s.map((o, c) =>
            e.jsx(
              "rect",
              {
                fill: c === s.indexOf(a) ? "#1d7a4a" : "#c2255c",
                height: 28 - r(o),
                width: 12,
                x: i(c) - 6,
                y: r(o),
              },
              c,
            ),
          ),
  });
}
function Ve() {
  const [s, l] = u.useState("line");
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Sparkline type",
        options: [
          { value: "line", label: "Line" },
          { value: "column", label: "Column" },
        ],
        value: s,
        onChange: l,
      }),
      e.jsx("div", {
        className: "btec-kw-sheet",
        children: e.jsx("div", {
          className: "btec-kw-sheet-frame",
          children: e.jsxs("table", {
            "aria-label": "Films sheet",
            children: [
              e.jsx("thead", {
                children: e.jsxs("tr", {
                  children: [
                    e.jsx("th", { scope: "col", children: "Film" }),
                    e.jsx("th", { scope: "col", children: "Mon to Sun" }),
                    e.jsx("th", { scope: "col", children: "Sparkline" }),
                  ],
                }),
              }),
              e.jsx("tbody", {
                children: Ee.map(([t, n]) =>
                  e.jsxs(
                    "tr",
                    {
                      children: [
                        e.jsx("td", { className: "is-head", children: t }),
                        e.jsx("td", { children: n.join(", ") }),
                        e.jsx("td", {
                          children: e.jsx(Oe, { kind: s, values: n }),
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function ze() {
  const [s, l] = u.useState("data");
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Show",
        options: [
          { value: "data", label: "Data" },
          { value: "information", label: "Information" },
        ],
        value: s,
        onChange: l,
      }),
      s === "data"
        ? e.jsx("p", {
            className: "btec-kw-result",
            style: { fontSize: "1.75em" },
            children: "12   45   9   30",
          })
        : e.jsx(N, {
            name: "Tickets sold, Hilltop Cinema, last weekend",
            rows: [
              ["Day", "Tickets sold"],
              ["Friday", 12],
              ["Saturday", 45],
              ["Sunday morning", 9],
              ["Sunday evening", 30],
            ],
            marks: { B3: "result" },
          }),
      e.jsxs("ul", {
        className: "btec-kw-legend",
        children: [
          e.jsxs("li", {
            children: [
              s === "information"
                ? e.jsx(y, { "aria-hidden": "true", className: "btec-kw-good" })
                : e.jsx(S, { "aria-hidden": "true", className: "btec-kw-bad" }),
              "Meaning",
            ],
          }),
          e.jsxs("li", {
            children: [
              s === "information"
                ? e.jsx(y, { "aria-hidden": "true", className: "btec-kw-good" })
                : e.jsx(S, { "aria-hidden": "true", className: "btec-kw-bad" }),
              "Structure",
            ],
          }),
          e.jsxs("li", {
            children: [
              s === "information"
                ? e.jsx(y, { "aria-hidden": "true", className: "btec-kw-good" })
                : e.jsx(S, { "aria-hidden": "true", className: "btec-kw-bad" }),
              "Context",
            ],
          }),
          e.jsxs("li", {
            children: [
              s === "information"
                ? e.jsx(y, { "aria-hidden": "true", className: "btec-kw-good" })
                : e.jsx(S, { "aria-hidden": "true", className: "btec-kw-bad" }),
              "Processed",
            ],
          }),
        ],
      }),
    ],
  });
}
const w = "#1f1534",
  _ = "#5e4b73",
  le = "#f3c4dc",
  v = "#c2255c",
  X = "#1d7a4a",
  M = "#e8a300",
  K = "#c92a2a";
function ie({
  bars: s,
  min: l = 0,
  max: t,
  title: n,
  xLabel: a,
  yLabel: i,
  ticks: r = 5,
}) {
  const o = t ?? Math.ceil(Math.max(...s.map((k) => k.value)) / 10) * 10,
    c = 520,
    h = 300,
    x = i ? 72 : 48,
    p = a ? 62 : 36,
    g = n ? 44 : 14,
    d = h - g - p,
    j = c - x - 12,
    m = (k) => g + d - ((k - l) / (o - l)) * d,
    b = j / s.length;
  return e.jsxs("svg", {
    "aria-label": n ?? "Bar chart",
    className: "btec-kw-chart",
    role: "img",
    viewBox: `0 0 ${c} ${h}`,
    children: [
      n
        ? e.jsx("text", {
            fill: w,
            fontSize: 20,
            fontWeight: 800,
            textAnchor: "middle",
            x: c / 2,
            y: 28,
            children: n,
          })
        : null,
      Array.from({ length: r + 1 }, (k, R) => {
        const F = l + ((o - l) / r) * R;
        return e.jsxs(
          "g",
          {
            children: [
              e.jsx("line", {
                stroke: le,
                x1: x,
                x2: c - 12,
                y1: m(F),
                y2: m(F),
              }),
              e.jsx("text", {
                fill: _,
                fontSize: 15,
                textAnchor: "end",
                x: x - 8,
                y: m(F) + 5,
                children: Math.round(F),
              }),
            ],
          },
          R,
        );
      }),
      s.map((k, R) => {
        const F = m(Math.max(k.value, l));
        return e.jsxs(
          "g",
          {
            children: [
              e.jsx("rect", {
                fill: k.colour ?? v,
                height: Math.max(0, g + d - F),
                rx: 4,
                width: b * 0.62,
                x: x + b * R + b * 0.19,
                y: F,
              }),
              e.jsx("text", {
                fill: w,
                fontSize: 15,
                fontWeight: 700,
                textAnchor: "middle",
                x: x + b * R + b / 2,
                y: g + d + 22,
                children: k.label,
              }),
            ],
          },
          k.label,
        );
      }),
      e.jsx("line", {
        stroke: w,
        strokeWidth: 2,
        x1: x,
        x2: c - 12,
        y1: g + d,
        y2: g + d,
      }),
      a
        ? e.jsx("text", {
            fill: w,
            fontSize: 16,
            fontWeight: 700,
            textAnchor: "middle",
            x: x + j / 2,
            y: h - 10,
            children: a,
          })
        : null,
      i
        ? e.jsx("text", {
            fill: w,
            fontSize: 16,
            fontWeight: 700,
            textAnchor: "middle",
            transform: `translate(20 ${g + d / 2}) rotate(-90)`,
            children: i,
          })
        : null,
    ],
  });
}
const Y = [
  { label: "Mon", value: 21 },
  { label: "Tue", value: 18 },
  { label: "Wed", value: 25 },
  { label: "Thu", value: 30 },
  { label: "Fri", value: 64 },
  { label: "Sat", value: 98 },
  { label: "Sun", value: 72 },
];
function De() {
  const [s, l] = u.useState(!0),
    [t, n] = u.useState(!0);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "btec-kw-choices",
        children: [
          e.jsx("button", {
            "aria-pressed": s,
            className: "btec-kw-choice",
            onClick: () => l(!s),
            type: "button",
            children: "Title",
          }),
          e.jsx("button", {
            "aria-pressed": t,
            className: "btec-kw-choice",
            onClick: () => n(!t),
            type: "button",
            children: "Axis labels",
          }),
        ],
      }),
      e.jsx(ie, {
        bars: Y,
        max: 100,
        title: s ? "Tickets sold per day, first week of March" : void 0,
        xLabel: t ? "Day" : void 0,
        yLabel: t ? "Tickets sold" : void 0,
      }),
    ],
  });
}
function Le() {
  const [s, l] = u.useState("90"),
    t = [
      { label: "Jan", value: 95 },
      { label: "Feb", value: 97 },
      { label: "Mar", value: 100 },
    ];
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Axis starts at",
        options: [
          { value: "90", label: "Axis from 90" },
          { value: "0", label: "Axis from 0" },
        ],
        value: s,
        onChange: l,
      }),
      e.jsx(ie, {
        bars: t,
        max: 100,
        min: Number(s),
        ticks: 5,
        title: "Average tickets per showing",
        yLabel: "Tickets",
        xLabel: "Month",
      }),
      e.jsxs("p", {
        children: [
          "March is ",
          e.jsx("strong", { children: "5%" }),
          " higher than January.",
          " ",
          s === "90"
            ? e.jsx("strong", {
                className: "btec-kw-bad",
                children: "Its bar looks twice as tall.",
              })
            : e.jsx("strong", {
                className: "btec-kw-good",
                children: "The bars look almost the same, which is true.",
              }),
        ],
      }),
    ],
  });
}
const Pe = {
  Comedy: [8, 6, 9, 10, 22, 35, 28],
  Horror: [5, 7, 6, 9, 30, 41, 20],
  Family: [8, 5, 10, 11, 12, 22, 24],
};
function He() {
  const [s, l] = u.useState("All"),
    [t, n] = u.useState(!1),
    a = s === "All" ? Y.map((c) => c.value) : Pe[s],
    i = a.reduce((c, h) => c + h, 0),
    r = Y[a.indexOf(Math.max(...a))].label,
    o = i / a.length;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "btec-kw-row",
        children: [
          e.jsxs("label", {
            className: "btec-kw-field",
            children: [
              "Genre (combo box)",
              e.jsx("select", {
                onChange: (c) => l(c.target.value),
                value: s,
                children: ["All", "Comedy", "Horror", "Family"].map((c) =>
                  e.jsx("option", { children: c }, c),
                ),
              }),
            ],
          }),
          e.jsxs("label", {
            className: "btec-kw-field",
            style: {
              flexDirection: "row",
              alignItems: "center",
              minHeight: 44,
              marginTop: "1.6rem",
            },
            children: [
              e.jsx("input", {
                checked: t,
                onChange: (c) => n(c.target.checked),
                style: { width: 22, height: 22 },
                type: "checkbox",
              }),
              "Show average (check box)",
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "btec-kw-row",
        "aria-live": "polite",
        children: [
          e.jsxs("div", {
            className: "btec-kw-message is-plain",
            children: ["Total: ", i],
          }),
          e.jsxs("div", {
            className: "btec-kw-message is-plain",
            children: ["Busiest: ", r],
          }),
          t
            ? e.jsxs("div", {
                className: "btec-kw-message is-plain",
                children: ["Average: ", o.toFixed(1)],
              })
            : null,
        ],
      }),
      e.jsx(ie, {
        bars: a.map((c, h) => ({
          label: Y[h].label,
          value: c,
          colour: t && c >= o ? X : v,
        })),
        max: 100,
        title: `Tickets per day: ${s === "All" ? "all films" : s}`,
      }),
    ],
  });
}
const I = [
    20, 18, 22, 25, 50, 80, 60, 24, 300, 26, 29, 56, 86, 64, 28, 27, 31, 33, 62,
    94, 70,
  ],
  ce = [5, 12, 19],
  J = 8;
function Ue() {
  const [s, l] = u.useState("trend"),
    t = 560,
    n = 300,
    a = 48,
    i = 16,
    r = 240,
    o = 320,
    c = (m) => a + (m / (I.length - 1)) * (t - a - 16),
    h = (m) => i + r - (m / o) * r,
    x = I.map((m, b) => ({ value: m, index: b })).filter(
      ({ index: m }) => m !== J,
    ),
    p = x.reduce((m, b) => m + b.index, 0) / x.length,
    g = x.reduce((m, b) => m + b.value, 0) / x.length,
    d =
      x.reduce((m, b) => m + (b.index - p) * (b.value - g), 0) /
      x.reduce((m, b) => m + (b.index - p) ** 2, 0),
    j = (m) => g + d * (m - p);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Finding",
        options: [
          { value: "trend", label: "Trend" },
          { value: "pattern", label: "Pattern" },
          { value: "error", label: "Possible error" },
        ],
        value: s,
        onChange: l,
      }),
      e.jsxs("svg", {
        "aria-label": "Tickets per day over three weeks",
        className: "btec-kw-chart",
        role: "img",
        viewBox: `0 0 ${t} ${n}`,
        children: [
          [0, 100, 200, 300].map((m) =>
            e.jsxs(
              "g",
              {
                children: [
                  e.jsx("line", {
                    stroke: le,
                    x1: a,
                    x2: t - 16,
                    y1: h(m),
                    y2: h(m),
                  }),
                  e.jsx("text", {
                    fill: _,
                    fontSize: 14,
                    textAnchor: "end",
                    x: a - 8,
                    y: h(m) + 5,
                    children: m,
                  }),
                ],
              },
              m,
            ),
          ),
          [0, 7, 14].map((m, b) =>
            e.jsxs(
              "text",
              {
                fill: w,
                fontSize: 14,
                fontWeight: 700,
                x: c(m),
                y: n - 14,
                children: ["Week ", b + 1],
              },
              m,
            ),
          ),
          e.jsx("polyline", {
            fill: "none",
            points: I.map((m, b) => `${c(b)},${h(m)}`).join(" "),
            stroke: v,
            strokeWidth: 2.5,
            strokeLinejoin: "round",
          }),
          I.map((m, b) =>
            e.jsx(
              "circle",
              {
                cx: c(b),
                cy: h(m),
                fill: s === "pattern" && ce.includes(b) ? M : v,
                r: s === "pattern" && ce.includes(b) ? 7 : 4,
              },
              b,
            ),
          ),
          s === "trend"
            ? e.jsx("line", {
                stroke: X,
                strokeDasharray: "8 6",
                strokeWidth: 3,
                x1: c(0),
                x2: c(I.length - 1),
                y1: h(j(0)),
                y2: h(j(I.length - 1)),
              })
            : null,
          s === "error"
            ? e.jsx("circle", {
                cx: c(J),
                cy: h(I[J]),
                fill: "none",
                r: 16,
                stroke: K,
                strokeWidth: 3,
              })
            : null,
        ],
      }),
      e.jsx("p", {
        "aria-live": "polite",
        children:
          s === "trend"
            ? e.jsxs(e.Fragment, {
                children: [
                  "The dashed line rises: sales go ",
                  e.jsx("strong", { children: "up" }),
                  " week by week.",
                ],
              })
            : s === "pattern"
              ? e.jsxs(e.Fragment, {
                  children: [
                    "Every ",
                    e.jsx("strong", { children: "Saturday" }),
                    " (gold) is the peak of its week.",
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("strong", {
                      className: "btec-kw-bad",
                      children: "300",
                    }),
                    " on a Tuesday, in a 120-seat screen: check the data.",
                  ],
                }),
      }),
    ],
  });
}
const H = Array.from({ length: 40 }, (s, l) =>
    l % 3 === 0 ? "family" : l % 3 === 1 ? "adult" : "student",
  ),
  Ge = { adult: v, family: X, student: M };
function Ke() {
  const [s, l] = u.useState("small"),
    t = (i) =>
      s === "small"
        ? i < 3
        : s === "one-group"
          ? H[i] === "adult"
          : i % 2 === 0,
    n = H.filter((i, r) => t(r)).length,
    a = new Set(H.filter((i, r) => t(r)));
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Sample",
        options: [
          { value: "small", label: "Too small" },
          { value: "one-group", label: "Weekday adults only" },
          { value: "mixed", label: "Large and mixed" },
        ],
        value: s,
        onChange: l,
      }),
      e.jsx("div", {
        className: "btec-kw-dots",
        role: "img",
        "aria-label": `${n} of 40 customers asked, from ${a.size} of 3 groups`,
        children: H.map((i, r) =>
          e.jsx(
            "span",
            {
              className: `btec-kw-dot${t(r) ? " is-in" : ""}`,
              style: { background: Ge[i] },
            },
            r,
          ),
        ),
      }),
      e.jsxs("ul", {
        className: "btec-kw-legend",
        children: [
          e.jsxs("li", {
            children: [
              e.jsx("span", {
                className: "btec-kw-swatch",
                style: { background: v },
              }),
              "Adults",
            ],
          }),
          e.jsxs("li", {
            children: [
              e.jsx("span", {
                className: "btec-kw-swatch",
                style: { background: X },
              }),
              "Families",
            ],
          }),
          e.jsxs("li", {
            children: [
              e.jsx("span", {
                className: "btec-kw-swatch",
                style: { background: M },
              }),
              "Students",
            ],
          }),
        ],
      }),
      e.jsxs("p", {
        "aria-live": "polite",
        children: [
          e.jsx("strong", { children: n }),
          " of 40 customers asked, from ",
          e.jsx("strong", { children: a.size }),
          " of 3 groups.",
        ],
      }),
    ],
  });
}
const T = [
  { id: "proposal", label: "Write the proposal", start: 1, days: 3 },
  {
    id: "design",
    label: "Design the screens",
    start: 4,
    days: 5,
    after: "proposal",
  },
  {
    id: "sketch",
    label: "Sketch each screen",
    start: 4,
    days: 3,
    sub: !0,
    after: "proposal",
  },
  {
    id: "storyboard",
    label: "Storyboard",
    start: 7,
    days: 2,
    sub: !0,
    after: "sketch",
  },
  {
    id: "signoff",
    label: "Designs signed off",
    start: 9,
    days: 0,
    milestone: !0,
    after: "design",
  },
  {
    id: "build",
    label: "Build the prototype",
    start: 9,
    days: 6,
    after: "signoff",
  },
  { id: "test", label: "Test and fix", start: 15, days: 3, after: "build" },
  {
    id: "review",
    label: "Write the review",
    start: 18,
    days: 2,
    after: "test",
  },
];
function Ye() {
  const [s, l] = u.useState("build"),
    t = new Set();
  for (let d = s; d; d = T.find((j) => j.id === d)?.after) t.add(d);
  const n = 190,
    a = 26,
    i = 38,
    r = 19,
    o = n + a * r + 12,
    c = 34 + i * T.length,
    h = (d) => n + (d - 1) * a,
    x = (d) => 34 + d * i,
    p = T.find((d) => d.id === s),
    g = p?.after ? T.find((d) => d.id === p.after) : void 0;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("div", {
        className: "btec-kw-scroll",
        children: e.jsxs("svg", {
          "aria-label": "Gantt chart of a three-week project",
          role: "img",
          style: { minWidth: o, maxWidth: "100%" },
          viewBox: `0 0 ${o} ${c}`,
          width: o,
          children: [
            Array.from({ length: r }, (d, j) =>
              e.jsxs(
                "g",
                {
                  children: [
                    e.jsx("line", {
                      stroke: le,
                      x1: h(j + 1),
                      x2: h(j + 1),
                      y1: 22,
                      y2: c,
                    }),
                    e.jsx("text", {
                      fill: _,
                      fontSize: 12,
                      textAnchor: "middle",
                      x: h(j + 1) + a / 2,
                      y: 16,
                      children: j + 1,
                    }),
                  ],
                },
                j,
              ),
            ),
            T.map((d, j) => {
              const m = t.has(d.id),
                b = x(j);
              return e.jsxs(
                "g",
                {
                  onClick: () => l(d.id),
                  style: { cursor: "pointer" },
                  children: [
                    e.jsx("rect", {
                      fill: "transparent",
                      height: i,
                      width: o,
                      x: 0,
                      y: b,
                    }),
                    e.jsx("text", {
                      fill: w,
                      fontSize: d.sub ? 14 : 15,
                      fontWeight: d.sub ? 500 : 800,
                      x: d.sub ? 22 : 6,
                      y: b + i / 2 + 5,
                      children: d.label,
                    }),
                    d.milestone
                      ? e.jsx("path", {
                          d: `M ${h(d.start)} ${b + 7} l 12 12 l -12 12 l -12 -12 z`,
                          fill: m ? M : "#fff3bf",
                          stroke: M,
                          strokeWidth: 2,
                        })
                      : e.jsx("rect", {
                          fill: m ? v : "#ffdeeb",
                          height: d.sub ? 16 : 22,
                          rx: 5,
                          stroke: v,
                          width: d.days * a - 4,
                          x: h(d.start) + 2,
                          y: b + (d.sub ? 11 : 8),
                        }),
                  ],
                },
                d.id,
              );
            }),
            T.filter((d) => d.after && t.has(d.id) && t.has(d.after)).map(
              (d) => {
                const j = T.find((xe) => xe.id === d.after),
                  m = T.indexOf(j),
                  b = T.indexOf(d),
                  k = h(j.start + j.days) + (j.milestone, 0),
                  R = x(m) + i / 2,
                  F = x(b) + i / 2;
                return e.jsx(
                  "path",
                  {
                    d: `M ${k} ${R} L ${k} ${F - 6}`,
                    fill: "none",
                    markerEnd: "url(#gantt-arrow)",
                    stroke: K,
                    strokeWidth: 2.5,
                  },
                  d.id,
                );
              },
            ),
            e.jsx("defs", {
              children: e.jsx("marker", {
                id: "gantt-arrow",
                markerHeight: 8,
                markerWidth: 8,
                orient: "auto",
                refX: 4,
                refY: 4,
                children: e.jsx("path", { d: "M0,0 L8,4 L0,8 z", fill: K }),
              }),
            }),
          ],
        }),
      }),
      e.jsxs("ul", {
        className: "btec-kw-legend",
        children: [
          e.jsxs("li", {
            children: [
              e.jsx("span", {
                className: "btec-kw-swatch",
                style: { background: v },
              }),
              "Task",
            ],
          }),
          e.jsxs("li", {
            children: [
              e.jsx("span", {
                className: "btec-kw-swatch",
                style: { background: M, transform: "rotate(45deg) scale(0.8)" },
              }),
              "Key milestone",
            ],
          }),
          e.jsxs("li", {
            children: [
              e.jsx("span", {
                className: "btec-kw-swatch",
                style: { background: K, height: 3 },
              }),
              "Dependency",
            ],
          }),
        ],
      }),
      e.jsxs("label", {
        className: "btec-kw-field",
        children: [
          "Task",
          e.jsx("select", {
            onChange: (d) => l(d.target.value),
            value: s,
            children: T.map((d) =>
              e.jsx("option", { value: d.id, children: d.label }, d.id),
            ),
          }),
        ],
      }),
      e.jsxs("p", {
        "aria-live": "polite",
        children: [
          e.jsx("strong", { children: p?.label }),
          p?.milestone
            ? ": a milestone, day 9, takes no time"
            : `: days ${p?.start} to ${(p?.start ?? 0) + (p?.days ?? 1) - 1}`,
          g
            ? e.jsxs(e.Fragment, {
                children: [
                  ", depends on ",
                  e.jsx("strong", { children: g.label }),
                ],
              })
            : e.jsx(e.Fragment, { children: ", depends on nothing" }),
          ".",
        ],
      }),
    ],
  });
}
function _e() {
  const [s, l] = u.useState("waterfall"),
    t = ["Plan", "Design", "Build", "Test", "Review"];
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Methodology",
        options: [
          { value: "waterfall", label: "Waterfall" },
          { value: "agile", label: "Agile" },
          { value: "scrum", label: "Scrum" },
        ],
        value: s,
        onChange: l,
      }),
      s === "waterfall"
        ? e.jsxs("svg", {
            "aria-label":
              "Waterfall: plan, design, build, test, review, in order",
            className: "btec-kw-chart",
            role: "img",
            viewBox: "0 0 520 260",
            children: [
              t.map((n, a) =>
                e.jsxs(
                  "g",
                  {
                    children: [
                      e.jsx("rect", {
                        fill: "#ffdeeb",
                        height: 40,
                        rx: 8,
                        stroke: v,
                        strokeWidth: 2,
                        width: 120,
                        x: 10 + a * 95,
                        y: 10 + a * 48,
                      }),
                      e.jsx("text", {
                        fill: w,
                        fontSize: 17,
                        fontWeight: 800,
                        textAnchor: "middle",
                        x: 70 + a * 95,
                        y: 36 + a * 48,
                        children: n,
                      }),
                      a < t.length - 1
                        ? e.jsx("path", {
                            d: `M ${130 + a * 95} ${30 + a * 48} h 15 v 28`,
                            fill: "none",
                            stroke: w,
                            strokeWidth: 2,
                            markerEnd: "url(#method-arrow)",
                          })
                        : null,
                    ],
                  },
                  n,
                ),
              ),
              e.jsx("defs", {
                children: e.jsx("marker", {
                  id: "method-arrow",
                  markerHeight: 8,
                  markerWidth: 8,
                  orient: "auto",
                  refX: 4,
                  refY: 4,
                  children: e.jsx("path", { d: "M0,0 L8,4 L0,8 z", fill: w }),
                }),
              }),
            ],
          })
        : s === "agile"
          ? e.jsxs("svg", {
              "aria-label":
                "Agile: plan, build, test, feedback, repeated in cycles",
              className: "btec-kw-chart",
              role: "img",
              viewBox: "0 0 520 260",
              children: [
                e.jsx("circle", {
                  cx: 260,
                  cy: 130,
                  fill: "none",
                  r: 95,
                  stroke: v,
                  strokeDasharray: "10 8",
                  strokeWidth: 3,
                }),
                ["Plan", "Build", "Test", "Feedback"].map((n, a) => {
                  const i = (a / 4) * Math.PI * 2 - Math.PI / 2,
                    r = 260 + Math.cos(i) * 95,
                    o = 130 + Math.sin(i) * 95;
                  return e.jsxs(
                    "g",
                    {
                      children: [
                        e.jsx("rect", {
                          fill: "#ffdeeb",
                          height: 38,
                          rx: 8,
                          stroke: v,
                          strokeWidth: 2,
                          width: 116,
                          x: r - 58,
                          y: o - 19,
                        }),
                        e.jsx("text", {
                          fill: w,
                          fontSize: 17,
                          fontWeight: 800,
                          textAnchor: "middle",
                          x: r,
                          y: o + 6,
                          children: n,
                        }),
                      ],
                    },
                    n,
                  );
                }),
                e.jsx("text", {
                  fill: w,
                  fontSize: 16,
                  fontWeight: 700,
                  textAnchor: "middle",
                  x: 260,
                  y: 136,
                  children: "repeat",
                }),
              ],
            })
          : e.jsx("svg", {
              "aria-label":
                "Scrum: a backlog, then one-week sprints, each ending in a review",
              className: "btec-kw-chart",
              role: "img",
              viewBox: "0 0 520 200",
              children: ["Sprint 1", "Sprint 2", "Sprint 3"].map((n, a) =>
                e.jsxs(
                  "g",
                  {
                    children: [
                      e.jsx("rect", {
                        fill: "#ffdeeb",
                        height: 90,
                        rx: 10,
                        stroke: v,
                        strokeWidth: 2,
                        width: 140,
                        x: 20 + a * 165,
                        y: 30,
                      }),
                      e.jsx("text", {
                        fill: w,
                        fontSize: 18,
                        fontWeight: 800,
                        textAnchor: "middle",
                        x: 90 + a * 165,
                        y: 64,
                        children: n,
                      }),
                      e.jsx("text", {
                        fill: _,
                        fontSize: 15,
                        textAnchor: "middle",
                        x: 90 + a * 165,
                        y: 92,
                        children: "1 week, 1 goal",
                      }),
                      e.jsx("path", {
                        d: `M ${60 + a * 165} 150 l 60 0`,
                        stroke: M,
                        strokeWidth: 4,
                      }),
                      e.jsx("text", {
                        fill: w,
                        fontSize: 14,
                        fontWeight: 700,
                        textAnchor: "middle",
                        x: 90 + a * 165,
                        y: 175,
                        children: "review",
                      }),
                    ],
                  },
                  n,
                ),
              ),
            }),
    ],
  });
}
function C({ title: s, children: l, back: t }) {
  return e.jsxs("div", {
    className: "btec-kw-phone",
    children: [
      e.jsxs("div", {
        className: "btec-kw-phone-bar",
        children: [
          t
            ? e.jsx(ge, { "aria-hidden": "true", width: 18, height: 18 })
            : e.jsx(ae, { "aria-hidden": "true", width: 18, height: 18 }),
          e.jsx("span", { children: s }),
          e.jsx(fe, { "aria-hidden": "true", width: 18, height: 18 }),
        ],
      }),
      l,
    ],
  });
}
function Xe() {
  const [s, l] = u.useState(!1),
    t = [
      { tone: s ? "is-bad" : "is-good", icon: s ? S : y, text: "Book renewed" },
      {
        tone: s ? "is-good" : "is-warn",
        icon: s ? y : ee,
        text: "Due back tomorrow",
      },
      {
        tone: s ? "is-warn" : "is-bad",
        icon: s ? ee : S,
        text: "Card expired",
      },
    ];
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Colours",
        options: [
          { value: "expected", label: "As users expect" },
          { value: "mixed", label: "Mixed up" },
        ],
        value: s ? "mixed" : "expected",
        onChange: (n) => l(n === "mixed"),
      }),
      e.jsx(C, {
        title: "Your books",
        children: t.map(({ tone: n, icon: a, text: i }) =>
          e.jsxs(
            "div",
            {
              className: `btec-kw-message ${n}`,
              children: [e.jsx(a, { "aria-hidden": "true" }), i],
            },
            i,
          ),
        ),
      }),
      e.jsxs("ul", {
        className: "btec-kw-legend",
        children: [
          e.jsxs("li", {
            children: [
              e.jsx("span", {
                className: "btec-kw-swatch",
                style: { background: "#1d7a4a" },
              }),
              "Green: go, done",
            ],
          }),
          e.jsxs("li", {
            children: [
              e.jsx("span", {
                className: "btec-kw-swatch",
                style: { background: "#c2410c" },
              }),
              "Orange: warning",
            ],
          }),
          e.jsxs("li", {
            children: [
              e.jsx("span", {
                className: "btec-kw-swatch",
                style: { background: "#c92a2a" },
              }),
              "Red: stop, error",
            ],
          }),
        ],
      }),
    ],
  });
}
const Q = {
  sans: { label: "Sans serif", family: "Arial, Helvetica, sans-serif" },
  serif: { label: "Serif", family: 'Georgia, "Times New Roman", serif' },
  decorative: {
    label: "Decorative",
    family: '"Brush Script MT", "Segoe Script", cursive',
  },
};
function Je() {
  const [s, l] = u.useState("decorative"),
    [t, n] = u.useState(12),
    a = s === "sans" && t >= 16;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Font",
        options: Object.keys(Q).map((i) => ({ value: i, label: Q[i].label })),
        value: s,
        onChange: l,
      }),
      e.jsxs("label", {
        className: "btec-kw-field",
        children: [
          "Size: ",
          t,
          " point",
          e.jsx("input", {
            max: 28,
            min: 8,
            onChange: (i) => n(Number(i.target.value)),
            type: "range",
            value: t,
          }),
        ],
      }),
      e.jsx(C, {
        title: "Book",
        children: e.jsx("p", {
          style: { fontFamily: Q[s].family, fontSize: `${t}px`, margin: 0 },
          children:
            "The Silent Island is due back on Friday 3 April. Renew it to keep it for two more weeks.",
        }),
      }),
      e.jsxs("div", {
        className: `btec-kw-message ${a ? "is-good" : "is-warn"}`,
        "aria-live": "polite",
        children: [
          a
            ? e.jsx(y, { "aria-hidden": "true", className: "btec-kw-good" })
            : e.jsx(ee, { "aria-hidden": "true", className: "btec-kw-warn" }),
          e.jsxs("span", {
            className: "sr-only",
            children: [a ? "Readable" : "Hard to read", ": "],
          }),
          "sans serif, 16 point or more",
        ],
      }),
    ],
  });
}
function Qe() {
  const [s, l] = u.useState(!1);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Screen",
        options: [
          { value: "cluttered", label: "Cluttered" },
          { value: "clean", label: "White space" },
        ],
        value: s ? "clean" : "cluttered",
        onChange: (t) => l(t === "clean"),
      }),
      s
        ? e.jsxs(C, {
            title: "Home",
            children: [
              e.jsx("div", {
                className: "btec-kw-mock-input",
                style: { marginTop: "0.75rem" },
                children: "Search books",
              }),
              e.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                  marginTop: "1rem",
                },
                children: [
                  e.jsx("button", {
                    className: "btec-kw-mock-button",
                    tabIndex: -1,
                    type: "button",
                    children: "Your books",
                  }),
                  e.jsx("button", {
                    className: "btec-kw-mock-button",
                    tabIndex: -1,
                    type: "button",
                    children: "Renew",
                  }),
                  e.jsx("button", {
                    className: "btec-kw-mock-button",
                    tabIndex: -1,
                    type: "button",
                    children: "Opening times",
                  }),
                ],
              }),
            ],
          })
        : e.jsxs(C, {
            title: "Home",
            children: [
              e.jsx("div", {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  fontSize: "0.72rem",
                  lineHeight: 1.15,
                },
                children: [
                  "NEW!",
                  "Search",
                  "Events",
                  "Renew",
                  "Your books",
                  "Fines",
                  "Hours",
                  "Clubs",
                  "eBooks",
                  "Kids",
                  "Teens",
                  "Help",
                  "News",
                  "Donate",
                  "Shop",
                  "Map",
                  "Jobs",
                  "Login",
                ].map((t) =>
                  e.jsx(
                    "span",
                    {
                      style: {
                        border: "1px solid #c92a2a",
                        background: "#fff3bf",
                        padding: "1px 3px",
                      },
                      children: t,
                    },
                    t,
                  ),
                ),
              }),
              e.jsx("p", {
                style: { margin: 0, fontSize: "0.72rem", lineHeight: 1.1 },
                children:
                  "Welcome to the library! Summer reading challenge now on, sign up at the desk or online, prizes for every age, see posters for details. Fines are 10p a day.",
              }),
            ],
          }),
    ],
  });
}
function qe() {
  const [s, l] = u.useState(!0);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Layout",
        options: [
          { value: "yes", label: "Consistent" },
          { value: "no", label: "Inconsistent" },
        ],
        value: s ? "yes" : "no",
        onChange: (t) => l(t === "yes"),
      }),
      e.jsxs("div", {
        className: "btec-kw-row",
        children: [
          e.jsxs(C, {
            title: "Search",
            children: [
              e.jsx("div", {
                className: "btec-kw-mock-input",
                children: "Search books",
              }),
              e.jsx("button", {
                className: "btec-kw-mock-button",
                tabIndex: -1,
                type: "button",
                children: "Search",
              }),
            ],
          }),
          s
            ? e.jsxs(C, {
                title: "Renew",
                back: !0,
                children: [
                  e.jsx("div", {
                    className: "btec-kw-mock-input",
                    children: "The Silent Island",
                  }),
                  e.jsx("button", {
                    className: "btec-kw-mock-button",
                    tabIndex: -1,
                    type: "button",
                    children: "Renew",
                  }),
                ],
              })
            : e.jsxs("div", {
                className: "btec-kw-phone",
                children: [
                  e.jsx("div", {
                    style: {
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "Georgia, serif",
                      fontWeight: 800,
                    },
                    children: "Renew",
                  }),
                  e.jsx("button", {
                    className: "btec-kw-mock-button",
                    style: { background: "#1d7a4a", alignSelf: "flex-end" },
                    tabIndex: -1,
                    type: "button",
                    children: "GO",
                  }),
                  e.jsx("div", {
                    className: "btec-kw-mock-input",
                    children: "The Silent Island",
                  }),
                  e.jsx("div", {
                    style: {
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "auto",
                    },
                    children: e.jsx(ae, {
                      "aria-hidden": "true",
                      width: 18,
                      height: 18,
                    }),
                  }),
                ],
              }),
        ],
      }),
      e.jsxs("ul", {
        className: "btec-kw-legend",
        children: [
          e.jsxs("li", {
            children: [
              s
                ? e.jsx(y, { "aria-hidden": "true", className: "btec-kw-good" })
                : e.jsx(S, { "aria-hidden": "true", className: "btec-kw-bad" }),
              "Menu in the same place",
            ],
          }),
          e.jsxs("li", {
            children: [
              s
                ? e.jsx(y, { "aria-hidden": "true", className: "btec-kw-good" })
                : e.jsx(S, { "aria-hidden": "true", className: "btec-kw-bad" }),
              "Same button colour and font",
            ],
          }),
          e.jsxs("li", {
            children: [
              s
                ? e.jsx(y, { "aria-hidden": "true", className: "btec-kw-good" })
                : e.jsx(S, { "aria-hidden": "true", className: "btec-kw-bad" }),
              "Button where users expect it",
            ],
          }),
        ],
      }),
    ],
  });
}
const q = ["Home", "Books", "Renew"];
function Ze() {
  const [s, l] = u.useState(2),
    [t, n] = u.useState("");
  return e.jsxs(C, {
    title: q[s],
    back: s > 0,
    children: [
      e.jsxs("label", {
        className: "btec-kw-field",
        style: { fontSize: "0.85rem" },
        children: [
          "Search field",
          e.jsx("input", {
            onChange: (a) => n(a.target.value),
            placeholder: "Title or author",
            value: t,
          }),
        ],
      }),
      e.jsx("nav", {
        "aria-label": "Breadcrumb",
        children: e.jsx("ol", {
          style: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.2rem",
            margin: 0,
            padding: 0,
            listStyle: "none",
            fontSize: "0.9rem",
          },
          children: q
            .slice(0, s + 1)
            .map((a, i) =>
              e.jsxs(
                "li",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "0.2rem",
                  },
                  children: [
                    i > 0
                      ? e.jsx(te, {
                          "aria-hidden": "true",
                          width: 14,
                          height: 14,
                        })
                      : null,
                    i < s
                      ? e.jsx("button", {
                          className: "btec-kw-choice",
                          onClick: () => l(i),
                          style: { minHeight: 32, padding: "0 0.5rem" },
                          type: "button",
                          children: a,
                        })
                      : e.jsx("strong", {
                          "aria-current": "page",
                          children: a,
                        }),
                  ],
                },
                a,
              ),
            ),
        }),
      }),
      s < 2
        ? e.jsxs("button", {
            className: "btec-kw-mock-button",
            onClick: () => l(s + 1),
            type: "button",
            children: ["Open ", q[s + 1]],
          })
        : null,
      e.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "space-around",
          marginTop: "auto",
          borderTop: "1px solid #f3c4dc",
          paddingTop: "0.5rem",
        },
        children: [
          e.jsx("button", {
            "aria-label": "Home",
            className: "btec-kw-icon-button",
            onClick: () => l(0),
            type: "button",
            children: e.jsx(be, { "aria-hidden": "true" }),
          }),
          e.jsx("button", {
            "aria-label": "Books",
            className: "btec-kw-icon-button",
            onClick: () => l(1),
            type: "button",
            children: e.jsx(de, { "aria-hidden": "true" }),
          }),
          e.jsx("button", {
            "aria-label": "Settings",
            className: "btec-kw-icon-button",
            type: "button",
            children: e.jsx(je, { "aria-hidden": "true" }),
          }),
        ],
      }),
    ],
  });
}
function es() {
  const [s, l] = u.useState("Riverside"),
    [t, n] = u.useState(!0),
    [a, i] = u.useState(!1);
  return e.jsxs(C, {
    title: "Settings",
    children: [
      e.jsxs("label", {
        className: "btec-kw-field",
        children: [
          "Dropdown list: home branch",
          e.jsxs("select", {
            onChange: (r) => l(r.target.value),
            value: s,
            children: [
              e.jsx("option", { children: "Riverside" }),
              e.jsx("option", { children: "Town Centre" }),
              e.jsx("option", { children: "Northgate" }),
            ],
          }),
        ],
      }),
      e.jsxs("label", {
        className: "btec-kw-field",
        style: { flexDirection: "row", alignItems: "center" },
        children: [
          e.jsx("input", {
            checked: t,
            onChange: (r) => n(r.target.checked),
            style: { width: 24, height: 24 },
            type: "checkbox",
          }),
          "Tick box: email me",
        ],
      }),
      e.jsxs("button", {
        "aria-checked": a,
        className: "btec-kw-field",
        onClick: () => i(!a),
        role: "switch",
        style: {
          flexDirection: "row",
          alignItems: "center",
          border: 0,
          background: "none",
          padding: 0,
          cursor: "pointer",
          minHeight: 44,
        },
        type: "button",
        children: [
          e.jsx("span", {
            "aria-hidden": "true",
            style: {
              display: "inline-flex",
              width: 48,
              height: 28,
              borderRadius: 999,
              background: a ? "#1d7a4a" : "#f3c4dc",
              padding: 3,
              justifyContent: a ? "flex-end" : "flex-start",
            },
            children: e.jsx("span", {
              style: {
                width: 22,
                height: 22,
                borderRadius: 999,
                background: "#ffffff",
              },
            }),
          }),
          "Toggle: reminders ",
          a ? "on" : "off",
        ],
      }),
    ],
  });
}
const ss = {
  "RV1 2AB": "14 Mill Lane, Riverside",
  "RV3 9XY": "2 Station Road, Riverside",
};
function ts() {
  const [s, l] = u.useState(""),
    [t, n] = u.useState("2 weeks"),
    [a, i] = u.useState(!1),
    r = ss[s.trim().toUpperCase()];
  return e.jsxs(C, {
    title: "Join",
    children: [
      e.jsxs("label", {
        className: "btec-kw-field",
        children: [
          "Default value: renew for",
          e.jsxs("select", {
            onChange: (o) => n(o.target.value),
            value: t,
            children: [
              e.jsx("option", { children: "1 week" }),
              e.jsx("option", { children: "2 weeks" }),
              e.jsx("option", { children: "3 weeks" }),
            ],
          }),
        ],
      }),
      e.jsxs("label", {
        className: "btec-kw-field",
        children: [
          "Autofill: postcode (try RV1 2AB)",
          e.jsx("input", { onChange: (o) => l(o.target.value), value: s }),
        ],
      }),
      e.jsx("div", {
        className: "btec-kw-mock-input",
        "aria-live": "polite",
        children: r ?? "Address",
      }),
      e.jsxs("div", {
        style: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        },
        children: [
          e.jsx("button", {
            "aria-describedby": a ? "btec-kw-tip" : void 0,
            "aria-label": "Reminders",
            className: "btec-kw-icon-button",
            onBlur: () => i(!1),
            onClick: () => i(!a),
            onFocus: () => i(!0),
            onMouseEnter: () => i(!0),
            onMouseLeave: () => i(!1),
            type: "button",
            children: e.jsx(pe, { "aria-hidden": "true" }),
          }),
          a
            ? e.jsx("span", {
                id: "btec-kw-tip",
                role: "tooltip",
                style: {
                  border: "1px solid #1f1534",
                  borderRadius: 6,
                  background: "#1f1534",
                  color: "#ffffff",
                  padding: "0.2rem 0.5rem",
                  fontSize: "0.85rem",
                },
                children: "Tip text: due date reminders",
              })
            : e.jsx("span", {
                className: "btec-kw-example",
                children: "Point at or tap the icon",
              }),
        ],
      }),
    ],
  });
}
function as() {
  const [s, l] = u.useState(!1),
    [t, n] = u.useState(!1);
  return e.jsxs(C, {
    title: "Your books",
    children: [
      e.jsx("div", {
        className: "btec-kw-message is-plain",
        children: "The Silent Island",
      }),
      e.jsx("button", {
        className: "btec-kw-mock-button",
        onClick: () => l(!0),
        type: "button",
        children: "Renew",
      }),
      s
        ? e.jsxs("div", {
            className: "btec-kw-message is-good",
            role: "status",
            children: [
              e.jsx(y, { "aria-hidden": "true", className: "btec-kw-good" }),
              "Renewed until 3 April",
            ],
          })
        : null,
      e.jsx("div", {
        className: "btec-kw-message is-plain",
        children: "Reserved: Moon Garden",
      }),
      t
        ? e.jsxs("div", {
            className: "btec-kw-message is-warn",
            role: "status",
            style: { justifyContent: "space-between" },
            children: [
              "Reservation cancelled",
              e.jsx("button", {
                className: "btec-kw-choice",
                onClick: () => n(!1),
                style: { minHeight: 36 },
                type: "button",
                children: "Undo",
              }),
            ],
          })
        : e.jsx("button", {
            className: "btec-kw-mock-button",
            onClick: () => n(!0),
            style: { background: "#5e4b73" },
            type: "button",
            children: "Cancel reservation",
          }),
    ],
  });
}
function ns() {
  const [s, l] = u.useState(!1),
    [t, n] = u.useState(0);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Button size",
        options: [
          { value: "small", label: "Small link" },
          { value: "big", label: "Big button" },
        ],
        value: s ? "big" : "small",
        onChange: (a) => {
          (l(a === "big"), n(0));
        },
      }),
      e.jsxs(C, {
        title: "Book",
        children: [
          e.jsx("p", {
            style: { margin: 0 },
            children: "The Silent Island, due Friday.",
          }),
          s
            ? e.jsx("button", {
                className: "btec-kw-mock-button",
                onClick: () => n(t + 1),
                style: { minHeight: 56, fontSize: "1.1rem" },
                type: "button",
                children: "Renew",
              })
            : e.jsx("button", {
                onClick: () => n(t + 1),
                style: {
                  alignSelf: "flex-end",
                  border: 0,
                  background: "none",
                  padding: 0,
                  color: "#c2255c",
                  fontSize: "0.7rem",
                  textDecoration: "underline",
                  cursor: "pointer",
                },
                type: "button",
                children: "renew",
              }),
        ],
      }),
      e.jsxs("p", {
        "aria-live": "polite",
        children: ["Renewed ", t, " ", t === 1 ? "time" : "times"],
      }),
    ],
  });
}
const U = {
  visual: {
    label: "Visual",
    change:
      "Bigger text, strong contrast, a screen reader reads the page aloud.",
  },
  hearing: {
    label: "Hearing",
    change: "Captions on videos; alerts shown on screen, not only as a sound.",
  },
  speech: {
    label: "Speech",
    change: "Everything voice search does can also be typed or tapped.",
  },
  motor: {
    label: "Motor",
    change: "Large buttons with space between them; no quick double taps.",
  },
  cognitive: {
    label: "Cognitive",
    change: "One step at a time, plain words, pictures beside the words.",
  },
};
function ls() {
  const [s, l] = u.useState("visual");
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(f, {
        label: "Accessibility need",
        options: Object.keys(U).map((t) => ({ value: t, label: U[t].label })),
        value: s,
        onChange: l,
      }),
      e.jsxs("div", {
        className: "btec-kw-row",
        children: [
          e.jsxs("div", {
            className: "btec-kw-phone",
            style:
              s === "visual"
                ? { background: "#000000", borderColor: "#000000" }
                : void 0,
            children: [
              e.jsx("div", {
                className: `btec-kw-phone-bar${s === "visual" ? " is-contrast" : ""}`,
                children: e.jsx("span", { children: "Renew" }),
              }),
              s === "visual"
                ? e.jsx("p", {
                    style: {
                      margin: 0,
                      color: "#ffffff",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                    },
                    children: "The Silent Island: due Friday",
                  })
                : s === "hearing"
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs("div", {
                          className: "btec-kw-message is-plain",
                          style: {
                            flexDirection: "column",
                            alignItems: "stretch",
                          },
                          children: [
                            e.jsx("span", {
                              style: {
                                height: 70,
                                borderRadius: 6,
                                background: "#1f1534",
                              },
                              "aria-hidden": "true",
                            }),
                            e.jsx("span", {
                              style: { fontSize: "0.85rem" },
                              children: '[CC] "Tap Renew to keep your book."',
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "btec-kw-message is-good",
                          children: [
                            e.jsx(y, { "aria-hidden": "true" }),
                            "Renewed",
                          ],
                        }),
                      ],
                    })
                  : s === "speech"
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("div", {
                            className: "btec-kw-mock-input",
                            children: "Type a title...",
                          }),
                          e.jsx("button", {
                            className: "btec-kw-mock-button",
                            tabIndex: -1,
                            type: "button",
                            children: "Search",
                          }),
                        ],
                      })
                    : s === "motor"
                      ? e.jsxs("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.2rem",
                          },
                          children: [
                            e.jsx("button", {
                              className: "btec-kw-mock-button",
                              style: { minHeight: 64 },
                              tabIndex: -1,
                              type: "button",
                              children: "Renew",
                            }),
                            e.jsx("button", {
                              className: "btec-kw-mock-button",
                              style: { minHeight: 64 },
                              tabIndex: -1,
                              type: "button",
                              children: "Return",
                            }),
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("strong", { children: "Step 1 of 2" }),
                            e.jsxs("div", {
                              className: "btec-kw-message is-plain",
                              children: [
                                e.jsx(de, { "aria-hidden": "true" }),
                                "Pick your book",
                              ],
                            }),
                            e.jsx("button", {
                              className: "btec-kw-mock-button",
                              tabIndex: -1,
                              type: "button",
                              children: "Next",
                            }),
                          ],
                        }),
            ],
          }),
          e.jsxs("p", {
            style: { flex: "1 1 12rem", margin: 0 },
            "aria-live": "polite",
            children: [
              e.jsxs("strong", { children: [U[s].label, ":"] }),
              " ",
              U[s].change,
            ],
          }),
        ],
      }),
    ],
  });
}
const G = [
  { screen: "Home", action: "Tap the search bar" },
  { screen: "Results", action: "Tap a book" },
  { screen: "Book", action: "Tap Renew" },
  { screen: "Done", action: "Renewed until 3 April" },
];
function is() {
  const [s, l] = u.useState(0);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("ol", {
        className: "btec-kw-row",
        style: {
          margin: 0,
          padding: 0,
          listStyle: "none",
          alignItems: "center",
        },
        children: G.map((t, n) =>
          e.jsxs(
            "li",
            {
              style: { display: "flex", alignItems: "center", gap: "0.5rem" },
              children: [
                e.jsxs("button", {
                  "aria-pressed": s === n,
                  className: "btec-kw-choice",
                  onClick: () => l(n),
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "7.5rem",
                    minHeight: "8rem",
                    borderRadius: "0.9rem",
                    padding: "0.5rem",
                  },
                  type: "button",
                  children: [
                    e.jsxs("span", {
                      style: { fontSize: "0.8em" },
                      children: ["Frame ", n + 1],
                    }),
                    e.jsx("span", {
                      style: { fontSize: "1.1em" },
                      children: t.screen,
                    }),
                  ],
                }),
                n < G.length - 1
                  ? e.jsx(te, { "aria-hidden": "true", width: 22, height: 22 })
                  : null,
              ],
            },
            t.screen,
          ),
        ),
      }),
      e.jsxs("p", {
        "aria-live": "polite",
        children: [
          e.jsxs("strong", {
            children: ["Frame ", s + 1, ", ", G[s].screen, ":"],
          }),
          " ",
          G[s].action,
        ],
      }),
    ],
  });
}
const Z = [
  {
    label: "Search bar",
    note: "At the top: the most used feature, so it is in a prominent position.",
  },
  {
    label: "Menu icon",
    note: "Three lines, top left, as in most apps: increases user familiarity.",
  },
  {
    label: "Renew button",
    note: "Full width and blue: a bigger object reduces selection time.",
  },
  {
    label: "Due date",
    note: "Red when late: user perception, red means a problem.",
  },
];
function rs() {
  const [s, l] = u.useState(0),
    t = (n) =>
      e.jsx("button", {
        "aria-label": `Annotation ${n + 1}: ${Z[n].label}`,
        "aria-pressed": s === n,
        className: "btec-kw-pin",
        onClick: () => l(n),
        type: "button",
        children: n + 1,
      });
  return e.jsxs("div", {
    className: "btec-kw-row",
    children: [
      e.jsxs("div", {
        className: "btec-kw-phone",
        children: [
          e.jsxs("div", {
            style: { display: "flex", alignItems: "center", gap: "0.4rem" },
            children: [
              e.jsx(ae, { "aria-hidden": "true", width: 20, height: 20 }),
              t(1),
              e.jsx("strong", {
                style: { flex: 1, textAlign: "center" },
                children: "Riverside Library",
              }),
            ],
          }),
          e.jsxs("div", {
            style: { display: "flex", alignItems: "center", gap: "0.4rem" },
            children: [
              e.jsx("div", {
                className: "btec-kw-mock-input",
                style: { flex: 1 },
                children: "Search books",
              }),
              t(0),
            ],
          }),
          e.jsx("div", {
            className: "btec-kw-message is-plain",
            children: "The Silent Island",
          }),
          e.jsxs("div", {
            style: { display: "flex", alignItems: "center", gap: "0.4rem" },
            children: [
              e.jsx("span", {
                className: "btec-kw-bad",
                style: { flex: 1, fontWeight: 800 },
                children: "Due: yesterday",
              }),
              t(3),
            ],
          }),
          e.jsxs("div", {
            style: { display: "flex", alignItems: "center", gap: "0.4rem" },
            children: [
              e.jsx("button", {
                className: "btec-kw-mock-button",
                style: { flex: 1 },
                tabIndex: -1,
                type: "button",
                children: "Renew",
              }),
              t(2),
            ],
          }),
        ],
      }),
      e.jsxs("p", {
        style: { flex: "1 1 12rem", margin: 0 },
        "aria-live": "polite",
        children: [
          e.jsxs("strong", { children: [s + 1, ". ", Z[s].label, ":"] }),
          " ",
          Z[s].note,
        ],
      }),
    ],
  });
}
const cs = ["Mouse", "Keyboard", "Voice", "Touch"],
  oe = ["Visual", "Audio", "Haptic"],
  os = {
    Visual: 'A green tick and "Renewed" on the screen',
    Audio: "A short high-pitched beep (a positive sound)",
    Haptic: "The phone buzzes once",
  };
function ds() {
  const [s, l] = u.useState("Touch"),
    [t, n] = u.useState(() => new Set(["Visual"]));
  return e.jsxs("div", {
    className: "btec-kw-row",
    children: [
      e.jsxs("div", {
        className: "btec-kw-field",
        style: { flex: "1 1 12rem" },
        children: [
          "Input: the user tells it",
          e.jsx(f, {
            label: "Input",
            options: cs.map((a) => ({ value: a, label: a })),
            value: s,
            onChange: l,
          }),
        ],
      }),
      e.jsxs("div", {
        className: "btec-kw-field",
        style: { flex: "1 1 12rem" },
        children: [
          "Output: it tells the user",
          e.jsx("div", {
            className: "btec-kw-choices",
            children: oe.map((a) =>
              e.jsx(
                "button",
                {
                  "aria-pressed": t.has(a),
                  className: "btec-kw-choice",
                  onClick: () =>
                    n((i) => {
                      const r = new Set(i);
                      return (r.has(a) ? r.delete(a) : r.add(a), r);
                    }),
                  type: "button",
                  children: a,
                },
                a,
              ),
            ),
          }),
        ],
      }),
      e.jsxs("div", {
        style: { flex: "1 1 100%" },
        "aria-live": "polite",
        children: [
          e.jsxs("p", {
            style: { margin: 0 },
            children: [
              e.jsxs("strong", { children: [s, ":"] }),
              " ",
              s === "Voice"
                ? '"Renew The Silent Island"'
                : s === "Keyboard"
                  ? "Tab to Renew, press Enter"
                  : s === "Mouse"
                    ? "Click Renew"
                    : "Tap Renew",
            ],
          }),
          e.jsx("ul", {
            className: "btec-kw-steps",
            children: oe
              .filter((a) => t.has(a))
              .map((a) =>
                e.jsxs(
                  "li",
                  {
                    children: [
                      e.jsxs("strong", { children: [a, ":"] }),
                      " ",
                      os[a],
                    ],
                  },
                  a,
                ),
              ),
          }),
        ],
      }),
    ],
  });
}
const hs = {
  accessibility: ls,
  annotation: rs,
  "colour-perception": Xe,
  consistency: qe,
  "feedback-undo": as,
  fonts: Je,
  "form-helpers": ts,
  gantt: Ye,
  "input-controls": es,
  "input-output": ds,
  methodologies: _e,
  navigation: Ze,
  "selection-size": ns,
  storyboard: is,
  "white-space": Qe,
  absolute: Be,
  "chart-features": De,
  conditional: Ie,
  countif: Ce,
  "data-information": ze,
  "dynamic-chart": He,
  formula: $e,
  functions: Ae,
  if: Fe,
  percentage: Re,
  pivot: We,
  sample: Ke,
  sparkline: Ve,
  sumif: Te,
  trend: Ue,
  "truncated-axis": Le,
  validation: Me,
  vlookup: Se,
};
function us({ id: s, term: l }) {
  const t = hs[s];
  return e.jsx("div", {
    "aria-label": `${l} example`,
    className: "btec-kw-visual",
    "data-btec-keyword-visual": s,
    role: "group",
    children: e.jsx(t, {}),
  });
}
function ue({ term: s, size: l }) {
  const t = Ne(s);
  return t
    ? e.jsx("img", {
        alt: "",
        "aria-hidden": "true",
        className: `btec-kw-art btec-kw-art-${l}`,
        draggable: !1,
        src: t,
      })
    : null;
}
function me({ entry: s }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("span", {
        className: "btec-kw-definition",
        children: s.definition,
      }),
      s.formula
        ? e.jsx("code", { className: "btec-kw-formula", children: s.formula })
        : null,
    ],
  });
}
function ms({ terms: s, index: l, onMove: t, onClose: n }) {
  const a = s[l],
    i = u.useRef(null);
  return (
    u.useEffect(() => {
      i.current?.focus();
      const r = document.body.style.overflow;
      return (
        (document.body.style.overflow = "hidden"),
        () => {
          document.body.style.overflow = r;
        }
      );
    }, []),
    u.useEffect(() => {
      const r = (o) => {
        const c = o.target,
          h = c && ["INPUT", "SELECT", "TEXTAREA"].includes(c.tagName);
        o.key === "Escape"
          ? n()
          : !h && o.key === "ArrowRight" && l < s.length - 1
            ? t(l + 1)
            : !h && o.key === "ArrowLeft" && l > 0 && t(l - 1);
      };
      return (
        window.addEventListener("keydown", r),
        () => window.removeEventListener("keydown", r)
      );
    }, [l, s.length, t, n]),
    e.jsxs("div", {
      "aria-labelledby": "btec-kw-zoom-term",
      "aria-modal": "true",
      className: "btec-kw btec-kw-zoom",
      "data-btec-keyword-zoom": se(a.term),
      role: "dialog",
      children: [
        e.jsxs("div", {
          className: "btec-kw-zoom-bar",
          children: [
            e.jsx("button", {
              "aria-label": "Previous term",
              className: "btec-kw-icon-button",
              disabled: l === 0,
              onClick: () => t(l - 1),
              type: "button",
              children: e.jsx(we, { "aria-hidden": "true" }),
            }),
            e.jsxs("span", {
              className: "btec-kw-count",
              children: [l + 1, " / ", s.length],
            }),
            e.jsx("button", {
              "aria-label": "Next term",
              className: "btec-kw-icon-button",
              disabled: l === s.length - 1,
              onClick: () => t(l + 1),
              type: "button",
              children: e.jsx(te, { "aria-hidden": "true" }),
            }),
            e.jsx("button", {
              "aria-label": "Close",
              className: "btec-kw-icon-button",
              onClick: n,
              ref: i,
              type: "button",
              children: e.jsx(S, { "aria-hidden": "true" }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "btec-kw-zoom-body",
          children: [
            e.jsxs("div", {
              className: "btec-kw-zoom-head",
              children: [
                e.jsx(ue, { size: "zoom", term: a.term }),
                e.jsx("h2", { id: "btec-kw-zoom-term", children: a.term }),
              ],
            }),
            e.jsx(me, { entry: a }),
            e.jsx("p", { className: "btec-kw-example", children: a.example }),
            a.visual
              ? e.jsx(
                  us,
                  { id: a.visual, term: a.term },
                  `${a.term}-${a.visual}`,
                )
              : null,
          ],
        }),
      ],
    })
  );
}
function js({ task: s }) {
  const l = u.useMemo(() => ye(s), [s]),
    t = u.useMemo(() => ve(l), [l]),
    [n, a] = u.useState(null),
    i = u.useRef(null),
    r = u.useRef(null);
  u.useEffect(() => {
    r.current && (r.current.inert = n !== null);
  }, [n]);
  const o = () => {
    const c = n === null ? null : se(t[n].term);
    (a(null),
      window.setTimeout(
        () => i.current?.querySelector(`[data-btec-keyword="${c}"]`)?.focus(),
        0,
      ));
  };
  return l.length
    ? e.jsxs("div", {
        className: "btec-kw btec-kw-page",
        "data-btec-keywords-task": s,
        ref: i,
        children: [
          e.jsx("div", {
            className: "btec-kw-groups",
            ref: r,
            children: l.map((c) =>
              e.jsxs(
                "section",
                {
                  className: "btec-kw-group",
                  "aria-label": c.heading,
                  children: [
                    e.jsxs("h2", {
                      children: [
                        c.heading,
                        e.jsx("span", {
                          className: "btec-kw-spec",
                          children: c.spec,
                        }),
                      ],
                    }),
                    e.jsx("ul", {
                      className: "btec-kw-list",
                      children: c.terms.map((h) => {
                        const x = t.indexOf(h);
                        return e.jsx(
                          "li",
                          {
                            children: e.jsxs("button", {
                              className: "btec-kw-card",
                              "data-btec-keyword": se(h.term),
                              onClick: () => a(x),
                              type: "button",
                              children: [
                                e.jsxs("span", {
                                  className: "btec-kw-term",
                                  children: [
                                    e.jsxs("span", {
                                      className: "btec-kw-term-name",
                                      children: [
                                        e.jsx(ue, {
                                          size: "card",
                                          term: h.term,
                                        }),
                                        h.term,
                                      ],
                                    }),
                                    e.jsx(ke, { "aria-hidden": "true" }),
                                  ],
                                }),
                                e.jsx(me, { entry: h }),
                                e.jsx("span", {
                                  className: "btec-kw-example",
                                  children: h.example,
                                }),
                              ],
                            }),
                          },
                          h.term,
                        );
                      }),
                    }),
                  ],
                },
                c.heading,
              ),
            ),
          }),
          n !== null
            ? e.jsx(ms, { index: n, onClose: o, onMove: a, terms: t })
            : null,
        ],
      })
    : e.jsx("p", {
        className: "text-lg font-medium text-slate-600",
        children: "Not available yet.",
      });
}
export { js as default };
