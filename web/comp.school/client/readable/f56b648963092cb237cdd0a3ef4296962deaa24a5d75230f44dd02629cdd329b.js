import { j as e, r as g } from "./react-vendor-BK1G6oO1.js";
import { aq as vt, aT as Tt } from "./GameNotebook-b0Qw2wzd.js";
import { u as Mt } from "./helpers-DmEFZcxj.js";
import { u as $t } from "./keyword-flashcards-Ha6Msavb.js";
import { k as Pt } from "./index-DjyiOHey.js";
import { b as Nt } from "./keyword-text-BtYtr9f7.js";
import "./ui-components-DeMDYLzO.js";
const f = "#1f2a44",
  D = "#2d3a5c",
  O = "#5a6684",
  q = "#9aa6c4",
  C = "#cfd6e4",
  p = "#ffffff",
  ie = "#fff8ec",
  ee = "#f3ead6",
  F = "#e8f4ff",
  Wt = "#eaf2ff",
  ue = "#cfe0fb",
  tt = "#9fc3e6",
  Te = "#4a7bd0",
  St = "#d6f5e3",
  Et = "#b9ebcf",
  st = "#e3f8ee",
  me = "#7dd8b5",
  G = "#2f9e76",
  We = "#fff1dc",
  P = "#ffd166",
  Se = "#f2a541",
  Ee = "#8a5310",
  Ae = "#ffb38a",
  rt = "#c9b8ff",
  H = "#ff9fbf",
  de = "#f6cfa8",
  E = "#d9a07a",
  he = "#8d5a3b",
  At = "#3b2a20",
  Oe = "#f2c14e",
  ge = "#c4562b",
  nt = "#6e1c22",
  N = "#a3262c",
  J = "#c8423b",
  Ie = "#e8796d",
  V = "#f7c4bb",
  _ = "#fde8e3",
  c = {
    stroke: f,
    strokeWidth: 2,
    strokeLinejoin: "round",
    strokeLinecap: "round",
  },
  it = { tcpip: C, http: F, https: rt, ftp: Ae, pop: H, imap: tt, smtp: V },
  at = {
    tcpip: "TCP/IP",
    http: "HTTP",
    https: "HTTPS",
    ftp: "FTP",
    pop: "POP",
    imap: "IMAP",
    smtp: "SMTP",
  };
function ye({ x: s, y: t, w: r = 16, fill: n = p }) {
  const i = r * 0.68;
  return e.jsxs("g", {
    children: [
      e.jsx("rect", { x: s, y: t, width: r, height: i, rx: 2, fill: n, ...c }),
      e.jsx("path", {
        d: `M${s + 1} ${t + 1.5}l${r / 2 - 1} ${i * 0.55}l${r / 2 - 1} ${-i * 0.55}`,
        fill: "none",
        ...c,
      }),
    ],
  });
}
function ze({ cx: s, cy: t, r }) {
  return e.jsxs("g", {
    fill: "none",
    ...c,
    children: [
      e.jsx("circle", { cx: s, cy: t, r, fill: p }),
      e.jsx("ellipse", { cx: s, cy: t, rx: r * 0.45, ry: r }),
      e.jsx("path", { d: `M${s - r} ${t}h${r * 2}` }),
    ],
  });
}
function ot({ x: s, y: t, s: r = 1, fill: n = P }) {
  return e.jsxs("g", {
    transform: `translate(${s} ${t}) scale(${r})`,
    children: [
      e.jsx("path", { d: "M3 6V4a4 4 0 0 1 8 0v2", fill: "none", ...c }),
      e.jsx("rect", {
        x: 0,
        y: 6,
        width: 14,
        height: 10,
        rx: 2,
        fill: n,
        ...c,
      }),
      e.jsx("circle", { cx: 7, cy: 11, r: 1.4, fill: f }),
    ],
  });
}
function lt({ id: s }) {
  switch (s) {
    case "tcpip":
      return e.jsxs("g", {
        children: [
          [0, 1, 2].map((t) =>
            e.jsxs(
              "g",
              {
                children: [
                  e.jsx("rect", {
                    x: 1 + t * 13,
                    y: 8 + (t === 1 ? -4 : 0),
                    width: 11,
                    height: 11,
                    rx: 2,
                    fill: p,
                    ...c,
                  }),
                  e.jsx("text", {
                    x: 6.5 + t * 13,
                    y: 17 + (t === 1 ? -4 : 0),
                    textAnchor: "middle",
                    className: "pp-svg-num",
                    fill: f,
                    children: t + 1,
                  }),
                ],
              },
              t,
            ),
          ),
          e.jsx("path", {
            d: "M4 25h32",
            fill: "none",
            ...c,
            strokeDasharray: "2 4",
          }),
        ],
      });
    case "http":
      return e.jsx(ze, { cx: 20, cy: 15, r: 11 });
    case "https":
      return e.jsxs("g", {
        children: [
          e.jsx(ze, { cx: 16, cy: 15, r: 11 }),
          e.jsx(ot, { x: 24, y: 11 }),
        ],
      });
    case "ftp":
      return e.jsxs("g", {
        children: [
          e.jsx("path", { d: "M4 9h10l3 3h19v15H4z", fill: P, ...c }),
          e.jsx("path", { d: "M20 24v-9M16 18.5l4-4 4 4", fill: "none", ...c }),
        ],
      });
    case "pop":
      return e.jsxs("g", {
        children: [
          e.jsx(ye, { x: 4, y: 3, w: 16 }),
          e.jsx("path", { d: "M12 16v6M9 19.5l3 3 3-3", fill: "none", ...c }),
          e.jsx("rect", {
            x: 23,
            y: 8,
            width: 12,
            height: 20,
            rx: 2.5,
            fill: p,
            ...c,
          }),
          e.jsx("path", { d: "M27 24h4", fill: "none", ...c }),
        ],
      });
    case "imap":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M9 22a6 6 0 0 1 1-12 8 8 0 0 1 15-1 6 6 0 0 1 6 13z",
            fill: p,
            ...c,
          }),
          e.jsx(ye, { x: 13, y: 12, w: 13 }),
          e.jsx("path", { d: "M5 27h8M27 27h8", fill: "none", ...c }),
        ],
      });
    case "smtp":
      return e.jsxs("g", {
        children: [
          e.jsx(ye, { x: 14, y: 7, w: 22 }),
          e.jsx("path", { d: "M3 10h8M1 16h9M4 22h7", fill: "none", ...c }),
        ],
      });
  }
}
function K({ id: s, className: t, title: r, x: n, y: i, w: a = 68 }) {
  const l = `pp-perf-${g.useId().replace(/:/g, "")}`,
    x = [];
  for (let d = 4; d <= 60; d += 8)
    x.push(
      e.jsx("circle", { cx: d, cy: 0, r: 2.6 }, `t${d}`),
      e.jsx("circle", { cx: d, cy: 76, r: 2.6 }, `b${d}`),
    );
  for (let d = 6; d <= 70; d += 8)
    x.push(
      e.jsx("circle", { cx: 0, cy: d, r: 2.6 }, `l${d}`),
      e.jsx("circle", { cx: 64, cy: d, r: 2.6 }, `r${d}`),
    );
  return e.jsxs("svg", {
    viewBox: "-2 -2 68 80",
    x: n,
    y: i,
    width: a,
    height: (a * 80) / 68,
    className: t,
    role: r ? "img" : void 0,
    "aria-label": r,
    "aria-hidden": r ? void 0 : !0,
    "data-stamp-art": s,
    children: [
      e.jsx("defs", {
        children: e.jsxs("mask", {
          id: l,
          children: [
            e.jsx("rect", { x: -2, y: -2, width: 68, height: 80, fill: p }),
            e.jsx("g", { fill: f, children: x }),
          ],
        }),
      }),
      e.jsxs("g", {
        mask: `url(#${l})`,
        children: [
          e.jsx("rect", { x: 0, y: 0, width: 64, height: 76, fill: p }),
          e.jsx("rect", {
            x: 0,
            y: 0,
            width: 64,
            height: 76,
            fill: "none",
            stroke: O,
            strokeWidth: 1.5,
          }),
        ],
      }),
      e.jsx("rect", {
        x: 6,
        y: 6,
        width: 52,
        height: 64,
        rx: 4,
        fill: it[s],
        ...c,
      }),
      e.jsx("g", {
        transform: "translate(12 10)",
        children: e.jsx(lt, { id: s }),
      }),
      e.jsx("text", {
        x: 32,
        y: 61,
        textAnchor: "middle",
        className: "pp-svg-stamp-label",
        fill: f,
        children: at[s],
      }),
    ],
  });
}
function Q({ outcome: s, size: t = 22 }) {
  const r = s === "delivered";
  return e.jsxs("svg", {
    viewBox: "0 0 24 24",
    width: t,
    height: t,
    "aria-hidden": "true",
    className: "pp-mark",
    "data-mark": s,
    children: [
      e.jsx("circle", { cx: 12, cy: 12, r: 10, fill: r ? me : Se, ...c }),
      r
        ? e.jsx("path", {
            d: "M7.5 12.5l3 3 6-6.5",
            fill: "none",
            ...c,
            strokeWidth: 2.4,
          })
        : e.jsx("path", {
            d: "M8.5 8.5l7 7M15.5 8.5l-7 7",
            fill: "none",
            ...c,
            strokeWidth: 2.4,
          }),
    ],
  });
}
function It({ frank: s, day: t }) {
  return e.jsxs("svg", {
    viewBox: "0 0 64 64",
    width: "64",
    height: "64",
    "aria-hidden": "true",
    className: "pp-franking",
    children: [
      e.jsxs("g", {
        fill: "none",
        stroke: N,
        strokeWidth: 2.2,
        children: [
          e.jsx("circle", { cx: 32, cy: 32, r: 28 }),
          e.jsx("circle", { cx: 32, cy: 32, r: 21 }),
        ],
      }),
      e.jsx("text", {
        x: 32,
        y: 31,
        textAnchor: "middle",
        className: "pp-svg-frank",
        fill: N,
        children: s,
      }),
      e.jsx("text", {
        x: 32,
        y: 42,
        textAnchor: "middle",
        className: "pp-svg-frank",
        fill: N,
        children: t,
      }),
    ],
  });
}
const Lt = {
  ambulance: { shirt: G, trim: P },
  newsroom: { shirt: D, trim: J },
  trainers: { shirt: H, trim: p },
};
function z({ y: s = 38, gap: t = 7, r = 2.6 }) {
  return e.jsxs("g", {
    className: "pp-blink",
    children: [
      e.jsx("circle", { cx: 40 - t, cy: s, r, fill: f }),
      e.jsx("circle", { cx: 40 + t, cy: s, r, fill: f }),
      e.jsx("circle", { cx: 40 - t + 0.9, cy: s - 0.9, r: 0.8, fill: p }),
      e.jsx("circle", { cx: 40 + t + 0.9, cy: s - 0.9, r: 0.8, fill: p }),
    ],
  });
}
function Ct({ y: s = 48 }) {
  return e.jsx("path", {
    d: `M36 ${s}q4 3 8 0`,
    fill: "none",
    ...c,
    strokeWidth: 1.6,
  });
}
function ct({ creature: s }) {
  switch (s) {
    case "owl":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M24 26l4-10 6 7h12l6-7 4 10v14a16 16 0 0 1-32 0z",
            fill: he,
            ...c,
          }),
          e.jsx("circle", { cx: 33, cy: 38, r: 7, fill: de, ...c }),
          e.jsx("circle", { cx: 47, cy: 38, r: 7, fill: de, ...c }),
          e.jsx(z, { y: 38, gap: 7, r: 3 }),
          e.jsx("path", {
            d: "M37 44l3 5 3-5z",
            fill: P,
            ...c,
            strokeWidth: 1.6,
          }),
        ],
      });
    case "hedgehog":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M20 44l-2-8 5-3-3-8 7-1-1-8 7 3 3-7 5 6 6-5 2 8 7-2-1 8 7 2-4 7 4 5-6 3z",
            fill: At,
            ...c,
          }),
          e.jsx("circle", {
            cx: 29,
            cy: 31,
            r: 3.5,
            fill: p,
            ...c,
            strokeWidth: 1.6,
          }),
          e.jsx("circle", {
            cx: 51,
            cy: 31,
            r: 3.5,
            fill: p,
            ...c,
            strokeWidth: 1.6,
          }),
          e.jsx("path", {
            d: "M26 39a14 10 0 0 1 28 0c0 6-8 13-14 18c-6-5-14-12-14-18z",
            fill: p,
            ...c,
          }),
          e.jsx(z, { y: 39, gap: 6 }),
          e.jsx("circle", { cx: 40, cy: 54, r: 2.8, fill: f }),
        ],
      });
    case "badger":
      return e.jsxs("g", {
        children: [
          e.jsx("circle", { cx: 27, cy: 25, r: 5, fill: f, ...c }),
          e.jsx("circle", { cx: 53, cy: 25, r: 5, fill: f, ...c }),
          e.jsx("path", {
            d: "M24 34a16 16 0 0 1 32 0v6a16 14 0 0 1-32 0z",
            fill: p,
            ...c,
          }),
          e.jsx("path", {
            d: "M30 22c-2 8-2 16 2 24h4c-3-8-3-16-1-24zM50 22c2 8 2 16-2 24h-4c3-8 3-16 1-24z",
            fill: f,
          }),
          e.jsx(z, { y: 38, gap: 8, r: 2.4 }),
          e.jsx("circle", { cx: 40, cy: 47, r: 2.6, fill: f }),
        ],
      });
    case "rabbit":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M30 28c-4-10-4-20 0-22s7 10 6 21z",
            fill: p,
            ...c,
          }),
          e.jsx("path", {
            d: "M50 28c4-10 4-20 0-22s-7 10-6 21z",
            fill: p,
            ...c,
          }),
          e.jsx("path", {
            d: "M31 25c-2-6-2-13 0-15M49 25c2-6 2-13 0-15",
            fill: "none",
            stroke: H,
            strokeWidth: 3,
            strokeLinecap: "round",
          }),
          e.jsx("ellipse", { cx: 40, cy: 40, rx: 16, ry: 15, fill: p, ...c }),
          e.jsx(z, { y: 38, gap: 7 }),
          e.jsx("path", {
            d: "M38 44h4l-2 2.5z",
            fill: H,
            ...c,
            strokeWidth: 1.4,
          }),
          e.jsx(Ct, { y: 48 }),
        ],
      });
    case "fox":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M25 30l1-15 10 9M55 30l-1-15-10 9",
            fill: ge,
            ...c,
          }),
          e.jsx("path", {
            d: "M23 32c0-8 8-12 17-12s17 4 17 12c0 9-8 18-17 21-9-3-17-12-17-21z",
            fill: ge,
            ...c,
          }),
          e.jsx("path", {
            d: "M26 38c5 0 10 3 14 11 4-8 9-11 14-11-1 7-7 13-14 15-7-2-13-8-14-15z",
            fill: p,
            ...c,
            strokeWidth: 1.6,
          }),
          e.jsx(z, { y: 36, gap: 7 }),
          e.jsx("circle", { cx: 40, cy: 48, r: 2.4, fill: f }),
        ],
      });
    case "otter":
      return e.jsxs("g", {
        children: [
          e.jsx("circle", { cx: 26, cy: 30, r: 4, fill: E, ...c }),
          e.jsx("circle", { cx: 54, cy: 30, r: 4, fill: E, ...c }),
          e.jsx("ellipse", { cx: 40, cy: 39, rx: 16, ry: 15, fill: E, ...c }),
          e.jsx("ellipse", {
            cx: 40,
            cy: 46,
            rx: 9,
            ry: 6,
            fill: de,
            ...c,
            strokeWidth: 1.6,
          }),
          e.jsx(z, { y: 37, gap: 7 }),
          e.jsx("ellipse", { cx: 40, cy: 43.5, rx: 2.6, ry: 1.8, fill: f }),
          e.jsx("path", {
            d: "M30 46h-6M30 48l-5 2M50 46h6M50 48l5 2",
            fill: "none",
            stroke: f,
            strokeWidth: 1.2,
            strokeLinecap: "round",
          }),
        ],
      });
    case "bear":
      return e.jsxs("g", {
        children: [
          e.jsx("circle", { cx: 26, cy: 26, r: 6, fill: he, ...c }),
          e.jsx("circle", { cx: 54, cy: 26, r: 6, fill: he, ...c }),
          e.jsx("circle", { cx: 26, cy: 26, r: 2.6, fill: E }),
          e.jsx("circle", { cx: 54, cy: 26, r: 2.6, fill: E }),
          e.jsx("ellipse", { cx: 40, cy: 39, rx: 17, ry: 16, fill: he, ...c }),
          e.jsx("ellipse", {
            cx: 40,
            cy: 46,
            rx: 8,
            ry: 6,
            fill: de,
            ...c,
            strokeWidth: 1.6,
          }),
          e.jsx(z, { y: 37, gap: 7 }),
          e.jsx("ellipse", { cx: 40, cy: 43.5, rx: 2.8, ry: 2, fill: f }),
        ],
      });
    case "cat":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M25 30l2-14 10 8M55 30l-2-14-10 8",
            fill: Oe,
            ...c,
          }),
          e.jsx("ellipse", { cx: 40, cy: 39, rx: 17, ry: 15, fill: Oe, ...c }),
          e.jsx("path", {
            d: "M36 25l1 5M40 24v6M44 25l-1 5",
            fill: "none",
            stroke: ge,
            strokeWidth: 2,
            strokeLinecap: "round",
          }),
          e.jsx(z, { y: 38, gap: 7 }),
          e.jsx("path", {
            d: "M38 44h4l-2 2.5z",
            fill: H,
            ...c,
            strokeWidth: 1.4,
          }),
          e.jsx("path", {
            d: "M28 45h-6M28 47l-5 2M52 45h6M52 47l5 2",
            fill: "none",
            stroke: f,
            strokeWidth: 1.2,
            strokeLinecap: "round",
          }),
        ],
      });
  }
}
function dt({ creature: s, org: t, size: r = 64 }) {
  const n = `pp-av-${g.useId().replace(/:/g, "")}`,
    i = Lt[t];
  return e.jsxs("svg", {
    viewBox: "0 0 80 80",
    width: r,
    height: r,
    "aria-hidden": "true",
    className: "pp-avatar",
    "data-creature": s,
    children: [
      e.jsx("defs", {
        children: e.jsx("clipPath", {
          id: n,
          children: e.jsx("circle", { cx: 40, cy: 40, r: 37 }),
        }),
      }),
      e.jsx("circle", { cx: 40, cy: 40, r: 37, fill: ee }),
      e.jsx("g", {
        clipPath: `url(#${n})`,
        children: e.jsxs("g", {
          "data-character": !0,
          className: "pp-character",
          children: [
            e.jsx("path", {
              d: "M14 82c0-14 11-24 26-24s26 10 26 24z",
              fill: i.shirt,
              ...c,
            }),
            e.jsx("path", {
              d: "M33 59l7 9 7-9",
              fill: "none",
              stroke: i.trim,
              strokeWidth: 3,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            e.jsx(ct, { creature: s }),
          ],
        }),
      }),
      e.jsx("circle", { cx: 40, cy: 40, r: 37, fill: "none", ...c }),
    ],
  });
}
function ht({ job: s }) {
  let t;
  switch (s) {
    case "packets":
      t = e.jsxs("g", {
        children: [
          [0, 1, 2].map((r) =>
            e.jsxs(
              "g",
              {
                children: [
                  e.jsx("rect", {
                    x: 4 + r * 14,
                    y: 18 - (r === 1 ? 6 : 0),
                    width: 12,
                    height: 12,
                    rx: 2,
                    fill: r === 1 ? V : p,
                    ...c,
                  }),
                  e.jsx("text", {
                    x: 10 + r * 14,
                    y: 27.5 - (r === 1 ? 6 : 0),
                    textAnchor: "middle",
                    className: "pp-svg-num",
                    fill: f,
                    children: r + 1,
                  }),
                ],
              },
              r,
            ),
          ),
          e.jsx("path", { d: "M6 40h36M36 35l6 5-6 5", fill: "none", ...c }),
        ],
      });
      break;
    case "devices":
      t = e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 4,
            y: 10,
            width: 18,
            height: 30,
            rx: 4,
            fill: p,
            ...c,
          }),
          e.jsx("rect", {
            x: 20,
            y: 16,
            width: 24,
            height: 24,
            rx: 4,
            fill: F,
            ...c,
          }),
          e.jsx("path", {
            d: "M10 16h6M26 22h12M26 28h12M26 34h8",
            fill: "none",
            ...c,
            strokeWidth: 1.6,
          }),
        ],
      });
      break;
    case "offline":
      t = e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 8,
            y: 14,
            width: 32,
            height: 20,
            rx: 3,
            fill: p,
            ...c,
          }),
          e.jsx("path", { d: "M4 38h40", fill: "none", ...c }),
          e.jsx("path", {
            d: "M18 26a8 8 0 0 1 12 0M21 30a3.5 3.5 0 0 1 6 0",
            fill: "none",
            ...c,
            strokeWidth: 1.6,
          }),
          e.jsx("path", {
            d: "M16 18l16 14",
            fill: "none",
            stroke: Ee,
            strokeWidth: 2.2,
            strokeLinecap: "round",
          }),
        ],
      });
      break;
    case "send":
      t = e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 14,
            y: 14,
            width: 30,
            height: 20,
            rx: 2,
            fill: p,
            ...c,
          }),
          e.jsx("path", { d: "M15 16l14 10 14-10", fill: "none", ...c }),
          e.jsx("path", { d: "M2 18h8M4 25h7M2 32h8", fill: "none", ...c }),
        ],
      });
      break;
    case "secure":
      t = e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 4,
            y: 10,
            width: 40,
            height: 28,
            rx: 4,
            fill: p,
            ...c,
          }),
          e.jsx("path", {
            d: "M10 20h16M10 28h12",
            fill: "none",
            ...c,
            strokeWidth: 1.6,
          }),
          e.jsx(ot, { x: 29, y: 17, s: 0.9 }),
        ],
      });
      break;
    case "upload":
      t = e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 26,
            y: 8,
            width: 18,
            height: 32,
            rx: 3,
            fill: ue,
            ...c,
          }),
          e.jsx("path", {
            d: "M30 16h10M30 22h10",
            fill: "none",
            ...c,
            strokeWidth: 1.6,
          }),
          e.jsx("path", { d: "M4 30h8l2 2h8v10H4z", fill: P, ...c }),
          e.jsx("path", {
            d: "M13 26V12M8.5 16.5L13 12l4.5 4.5",
            fill: "none",
            ...c,
          }),
        ],
      });
      break;
  }
  return e.jsx("svg", {
    viewBox: "0 0 48 48",
    width: "48",
    height: "48",
    "aria-hidden": "true",
    className: "pp-job-icon",
    "data-job-icon": s,
    children: t,
  });
}
function pt({ id: s }) {
  const t = `pp-chip-${g.useId().replace(/:/g, "")}`,
    r = [];
  for (let n = 4; n <= 100; n += 8)
    r.push(
      e.jsx("circle", { cx: n, cy: 0, r: 2.4 }, `t${n}`),
      e.jsx("circle", { cx: n, cy: 52, r: 2.4 }, `b${n}`),
    );
  for (let n = 6; n <= 46; n += 8)
    r.push(
      e.jsx("circle", { cx: 0, cy: n, r: 2.4 }, `l${n}`),
      e.jsx("circle", { cx: 104, cy: n, r: 2.4 }, `r${n}`),
    );
  return e.jsxs("svg", {
    viewBox: "-2 -2 108 56",
    width: "108",
    height: "56",
    "aria-hidden": "true",
    "data-stamp-chip": s,
    children: [
      e.jsx("defs", {
        children: e.jsxs("mask", {
          id: t,
          children: [
            e.jsx("rect", { x: -2, y: -2, width: 108, height: 56, fill: p }),
            e.jsx("g", { fill: f, children: r }),
          ],
        }),
      }),
      e.jsxs("g", {
        mask: `url(#${t})`,
        children: [
          e.jsx("rect", { x: 0, y: 0, width: 104, height: 52, fill: p }),
          e.jsx("rect", {
            x: 0,
            y: 0,
            width: 104,
            height: 52,
            fill: "none",
            stroke: O,
            strokeWidth: 1.5,
          }),
        ],
      }),
      e.jsx("rect", {
        x: 5,
        y: 5,
        width: 94,
        height: 42,
        rx: 4,
        fill: it[s],
        ...c,
      }),
      e.jsx("g", {
        transform: "translate(9 14) scale(0.68)",
        children: e.jsx(lt, { id: s }),
      }),
      e.jsx("text", {
        x: 68,
        y: 32,
        textAnchor: "middle",
        className: "pp-svg-chip-label",
        fill: f,
        children: at[s],
      }),
    ],
  });
}
const xt = [
  {
    id: "tcpip",
    label: "TCP/IP",
    name: "Transmission Control Protocol/Internet Protocol",
    purpose:
      "Splits data into packets, addresses them, and puts them back in order at the other end. Lost packets are sent again.",
  },
  {
    id: "http",
    label: "HTTP",
    name: "Hypertext Transfer Protocol",
    purpose:
      "A browser uses it to request web pages from a web server. The data is not encrypted.",
  },
  {
    id: "https",
    label: "HTTPS",
    name: "Hypertext Transfer Protocol Secure",
    purpose:
      "Like HTTP, but encrypts the data between the browser and the web server.",
  },
  {
    id: "ftp",
    label: "FTP",
    name: "File Transfer Protocol",
    purpose:
      "Transfers files between a computer and a server, such as uploading web pages.",
  },
  {
    id: "pop",
    label: "POP",
    name: "Post Office Protocol",
    purpose:
      "Downloads email from the mail server to one device, and deletes it from the server.",
  },
  {
    id: "imap",
    label: "IMAP",
    name: "Internet Message Access Protocol",
    purpose: "Keeps email on the mail server, so it syncs across every device.",
  },
  {
    id: "smtp",
    label: "SMTP",
    name: "Simple Mail Transfer Protocol",
    purpose: "Sends email to the mail server, and on between mail servers.",
  },
];
xt.map((s) => s.id);
function A(s) {
  const t = xt.find((r) => r.id === s);
  if (!t) throw new Error(`No protocol ${s}`);
  return t;
}
const ut = ["packets", "devices", "offline", "send", "secure", "upload"],
  Rt = ["devices", "offline", "send", "secure", "upload"],
  mt = [
    {
      id: 1,
      label: "Web",
      jobs: ["packets", "secure", "upload"],
      stamps: ["tcpip", "http", "https", "ftp"],
    },
    {
      id: 2,
      label: "Email",
      jobs: ["devices", "offline", "send"],
      stamps: ["pop", "imap", "smtp"],
    },
    {
      id: 3,
      label: "All",
      jobs: ut,
      stamps: ["tcpip", "http", "https", "ftp", "pop", "imap", "smtp"],
    },
  ];
function Le(s) {
  const t = mt.find((r) => r.id === s);
  if (!t) throw new Error(`No round ${s}`);
  return t;
}
function Me(s) {
  return Rt.filter((t) => s.jobs.includes(t));
}
const Z = {
    packets: "tcpip",
    devices: "imap",
    offline: "pop",
    send: "smtp",
    secure: "https",
    upload: "ftp",
  },
  ae = {
    "lost-device": {
      job: "devices",
      lesson:
        "IMAP keeps email on the mail server, so it is not lost with a device.",
    },
    "no-signal": {
      job: "offline",
      lesson:
        "POP downloads email onto the device, so it can be read with no connection.",
    },
    "send-all": {
      job: "send",
      lesson:
        "SMTP sends email. POP and IMAP only fetch it from the mail server.",
    },
    "wifi-snoop": {
      job: "secure",
      lesson:
        "HTTPS encrypts data between the browser and the web server. Captured data cannot be understood without the key.",
    },
    "upload-pages": {
      job: "upload",
      lesson:
        "FTP transfers files between a computer and a server, such as uploading web pages.",
    },
  },
  Ht = {
    id: "ambulance",
    name: "Moorside Ambulance",
    kind: "Ambulance service",
    frank: "MOORSIDE",
    colleagues: {
      control: { role: "Control room lead", creature: "owl" },
      paramedic: { role: "Paramedic", creature: "hedgehog" },
      station: { role: "Moor station manager", creature: "badger" },
      bookings: { role: "Transport bookings", creature: "rabbit" },
      web: { role: "Web team", creature: "fox" },
    },
    jobs: {
      packets: {
        id: "packets",
        text: "Get every call update across the internet in packets, back in order.",
        decoy: null,
      },
      devices: {
        id: "devices",
        text: "Paramedics read their email on a phone and a tablet.",
        decoy: "pop",
      },
      offline: {
        id: "offline",
        text: "The moor station’s one laptop collects its email. Signal there comes and goes.",
        decoy: "imap",
      },
      send: {
        id: "send",
        text: "Send the shift rota to every crew.",
        decoy: "imap",
      },
      secure: {
        id: "secure",
        text: "Patients log in to book hospital transport.",
        decoy: "http",
      },
      upload: {
        id: "upload",
        text: "Upload the new website pages to the web server.",
        decoy: "http",
      },
    },
    story: {
      title: "Storm week",
      premise:
        "Storm Elin reaches the moor on Monday. You are Moorside Ambulance’s new network technician. For five days, crews, patients and the moor station depend on the services you set up today.",
      endings: {
        best: "Storm Elin passed, and every service held. Crews, patients and the moor station had what they needed all week.",
        mixed:
          "Moorside got through the storm, but some of your services let the crews down.",
        worst: "The storm was hard enough. Your services made the week harder.",
      },
    },
    events: [
      {
        kind: "send-all",
        title: "The storm rota must reach every crew",
        time: "05:45",
        setup:
          "Storm Elin arrives today. Control presses Send on the storm rota at 05:45, and crews start at 06:00.",
        delivered: {
          headline: "Every crew has the rota",
          from: "control",
          message:
            "It went to our mail server and on to every crew’s inbox. Every crew was at the right station before the storm hit.",
        },
        returned: {
          headline: "The rota never leaves",
          from: "control",
          message:
            "IMAP only fetches email from the server. It cannot send. The rota sat in the outbox, and two crews went to the wrong station as the storm hit.",
        },
      },
      {
        kind: "no-signal",
        title: "The storm cuts the moor station off",
        time: "07:00",
        setup:
          "The storm blocked roads overnight. The closures arrived by email at 06:00. At 07:00 the storm cuts the station’s signal for the day.",
        delivered: {
          headline: "The closures are on the laptop",
          from: "station",
          message:
            "POP downloaded the emails onto the laptop at 06:00. We read the closures all day with no signal.",
        },
        returned: {
          headline: "The closures are out of reach",
          from: "station",
          message:
            "With IMAP the emails stayed on the mail server. With no signal the laptop could not reach them, so crews got the closures late, by radio.",
        },
      },
      {
        kind: "lost-device",
        title: "A phone is smashed on the moor",
        time: "07:10",
        setup:
          "A paramedic slips during a rescue on the moor and smashes their phone. Back at base, they sign in on a new one.",
        delivered: {
          headline: "Every email is back",
          from: "paramedic",
          message:
            "I signed in on the new phone and my whole inbox was there. It was on the mail server, not the phone.",
        },
        returned: {
          headline: "The inbox is empty",
          from: "paramedic",
          message:
            "POP downloaded my email onto the old phone and deleted it from the server. The new phone has nothing. This week’s storm call notes are gone.",
        },
      },
      {
        kind: "wifi-snoop",
        title: "Rebooking from a café",
        time: "10:40",
        setup:
          "The storm cancelled yesterday’s hospital transport. A patient rebooks on free café Wi-Fi. Someone on the same Wi-Fi is capturing the data.",
        delivered: {
          headline: "Captured, but unreadable",
          from: "bookings",
          message:
            "The login was encrypted between the browser and our web server. The snooper only got scrambled text.",
        },
        returned: {
          headline: "A password is read",
          from: "bookings",
          message:
            "HTTP sent the login as plain text. The snooper read the patient’s password and address. We locked the account and wrote to them.",
        },
      },
      {
        kind: "upload-pages",
        title: "The roads are open again",
        time: "08:15",
        setup:
          "Storm Elin has passed. Pages saying which roads are open must be on the website by 09:00.",
        delivered: {
          headline: "The pages are live",
          from: "web",
          message:
            "The files went from our computer to the web server. The pages were live at 08:40, and the phones went quiet.",
        },
        returned: {
          headline: "The site still says closed",
          from: "web",
          message:
            "HTTP is how a browser requests web pages. Uploading our files to the server is a job for FTP. The site still said the roads were closed, and the phones rang all morning.",
        },
      },
    ],
  },
  Ot = {
    id: "newsroom",
    name: "The Evening Lantern",
    kind: "Newsroom",
    frank: "LANTERN",
    colleagues: {
      editor: { role: "Editor", creature: "fox" },
      reporter: { role: "Reporter", creature: "otter" },
      print: { role: "Print room lead", creature: "bear" },
      pictures: { role: "Picture desk", creature: "owl" },
      web: { role: "Web producer", creature: "cat" },
    },
    jobs: {
      packets: {
        id: "packets",
        text: "Get every story across the internet in packets, back in order.",
        decoy: null,
      },
      devices: {
        id: "devices",
        text: "Reporters read the tips inbox on laptops and phones.",
        decoy: "pop",
      },
      offline: {
        id: "offline",
        text: "The print room’s one PC collects the page proofs. Its internet often drops.",
        decoy: "imap",
      },
      send: {
        id: "send",
        text: "Email breaking-news alerts to readers.",
        decoy: "pop",
      },
      secure: {
        id: "secure",
        text: "Sources send secret tips through the website.",
        decoy: "http",
      },
      upload: {
        id: "upload",
        text: "Upload tonight’s stories and photos to the web server.",
        decoy: "http",
      },
    },
    story: {
      title: "The hidden report",
      premise:
        "A source says the council hid a report about unsafe flats. The Evening Lantern has five days to check it and print it. You are the newsroom’s network technician, and the story travels through every service you set up.",
      endings: {
        best: "The report is out, the source is safe, and the Lantern broke the biggest story of the year.",
        mixed:
          "The story came out, but some of your services let the newsroom down.",
        worst:
          "The story came out in spite of your services, not because of them.",
      },
    },
    events: [
      {
        kind: "wifi-snoop",
        title: "The source makes contact",
        time: "12:20",
        setup:
          "The source sends the first tip through our website, on free station Wi-Fi. Someone nearby captures the Wi-Fi data.",
        delivered: {
          headline: "The tip stays secret",
          from: "reporter",
          message:
            "The tip was encrypted between the browser and our web server. The snooper got scrambled text, and our source stays secret.",
        },
        returned: {
          headline: "The source is exposed",
          from: "reporter",
          message:
            "HTTP sent the tip as plain text. The snooper read it, with the source’s phone number. The source is scared and has gone quiet.",
        },
      },
      {
        kind: "lost-device",
        title: "A phone left on a train",
        time: "08:50",
        setup:
          "Chasing the story, a reporter leaves their phone on a train. They borrow another and sign in.",
        delivered: {
          headline: "Every tip is still there",
          from: "reporter",
          message:
            "I signed in on the borrowed phone, and the whole tips inbox was there. It lives on the mail server, not the phone.",
        },
        returned: {
          headline: "The tips are on a train",
          from: "reporter",
          message:
            "POP downloaded the tips onto my phone and deleted them from the server. Now the only copy of the source’s tip is on a train somewhere.",
        },
      },
      {
        kind: "upload-pages",
        title: "The story goes online",
        time: "23:30",
        setup:
          "The hidden report story and its photos must be on the website by midnight.",
        delivered: {
          headline: "Online at midnight",
          from: "web",
          message:
            "The pages and photos went from my computer to the web server. The story was live at 23:58.",
        },
        returned: {
          headline: "Yesterday’s news, all night",
          from: "web",
          message:
            "HTTP is how a browser requests web pages. Uploading our files to the server is a job for FTP. The site showed yesterday’s front page until morning.",
        },
      },
      {
        kind: "no-signal",
        title: "The front page goes to print",
        time: "22:30",
        setup:
          "Tomorrow’s front page about the report arrived by email at 22:00. At 22:30 the print room’s internet goes down.",
        delivered: {
          headline: "The presses roll on time",
          from: "print",
          message:
            "POP had already downloaded the proofs onto our PC. We printed from them with no internet at all.",
        },
        returned: {
          headline: "The proofs are out of reach",
          from: "print",
          message:
            "With IMAP the proofs stayed on the mail server. With no internet we could not open them, and the paper reached the shops two hours late.",
        },
      },
      {
        kind: "send-all",
        title: "The council leader resigns",
        time: "18:02",
        setup:
          "At 18:00 the council leader resigns over the report. The alert email to 20,000 readers has to go now.",
        delivered: {
          headline: "First with the news",
          from: "editor",
          message:
            "The alert went to our mail server and on to every reader’s inbox. We beat every rival by ten minutes.",
        },
        returned: {
          headline: "The alert never goes out",
          from: "editor",
          message:
            "POP only downloads email from the server. It cannot send. The alert sat in the outbox, and readers heard it from a rival.",
        },
      },
    ],
  },
  zt = {
    id: "trainers",
    name: "Lacebox Trainers",
    kind: "Online trainer shop",
    frank: "LACEBOX",
    colleagues: {
      owner: { role: "Shop owner", creature: "rabbit" },
      warehouse: { role: "Warehouse lead", creature: "bear" },
      support: { role: "Customer support", creature: "cat" },
      web: { role: "Web designer", creature: "fox" },
      packing: { role: "Packing team", creature: "hedgehog" },
    },
    jobs: {
      packets: {
        id: "packets",
        text: "Get every order across the internet in packets, back in order.",
        decoy: null,
      },
      devices: {
        id: "devices",
        text: "The owner checks the orders inbox on a phone and a laptop.",
        decoy: "pop",
      },
      offline: {
        id: "offline",
        text: "The warehouse’s one PC collects the returns email. Its internet often drops.",
        decoy: "imap",
      },
      send: {
        id: "send",
        text: "Email every customer about Friday’s trainer drop.",
        decoy: "imap",
      },
      secure: {
        id: "secure",
        text: "Customers pay by card at checkout.",
        decoy: "http",
      },
      upload: {
        id: "upload",
        text: "Upload the new drop page and its photos to the web server.",
        decoy: "http",
      },
    },
    story: {
      title: "Drop week",
      premise:
        "On Friday, Lacebox releases 300 pairs of a limited trainer, and the whole week builds to it. You are the shop’s network technician. Every order, return and payment goes through the services you set up.",
      endings: {
        best: "All 300 pairs sold, every return was sorted and every card stayed safe. Drop week was a hit.",
        mixed:
          "The pairs went on sale, but some of your services let the shop down.",
        worst:
          "Drop week happened in spite of your services, not because of them.",
      },
    },
    events: [
      {
        kind: "upload-pages",
        title: "The drop page goes live",
        time: "17:00",
        setup:
          "The drop page and its photos must be on the website tonight, so customers can see Friday’s trainer.",
        delivered: {
          headline: "Live tonight",
          from: "web",
          message:
            "The page files went from my laptop to the web server. The drop page looks amazing.",
        },
        returned: {
          headline: "The old page stays up",
          from: "web",
          message:
            "HTTP is how a browser requests web pages. Uploading my files to the server is a job for FTP. Customers saw last month’s page, with nothing about Friday.",
        },
      },
      {
        kind: "lost-device",
        title: "The owner’s phone is stolen",
        time: "13:40",
        setup:
          "The owner’s phone is stolen at a trainer fair, with this week’s early orders in its inbox. They sign in on a new one.",
        delivered: {
          headline: "Every order is still there",
          from: "owner",
          message:
            "New phone, same inbox. The orders were on the mail server, so not one was lost.",
        },
        returned: {
          headline: "50 orders, gone",
          from: "owner",
          message:
            "POP downloaded the orders onto the old phone and deleted them from the server. We had to email customers to ask what they bought.",
        },
      },
      {
        kind: "no-signal",
        title: "A digger cuts the warehouse line",
        time: "08:00",
        setup:
          "Returns from last week’s sale arrived overnight, and the PC collected them at 07:00. At 08:00 a digger cuts the warehouse internet for the day.",
        delivered: {
          headline: "Returns sorted anyway",
          from: "warehouse",
          message:
            "POP had downloaded the returns emails onto our PC. We read them and sorted every return with no internet.",
        },
        returned: {
          headline: "Returns pile up",
          from: "warehouse",
          message:
            "With IMAP the emails stayed on the mail server. With no internet we could not open them, and 80 boxes blocked the packing room before the drop.",
        },
      },
      {
        kind: "send-all",
        title: "The drop email",
        time: "09:00",
        setup:
          "The drop is tomorrow. The email to 5,000 customers goes out at 09:00.",
        delivered: {
          headline: "Everyone knows",
          from: "owner",
          message:
            "It went to our mail server and on to every customer. The waiting list doubled by lunchtime.",
        },
        returned: {
          headline: "Nobody hears about the drop",
          from: "owner",
          message:
            "IMAP only fetches email from the server. It cannot send. The email sat in the outbox, and most customers never heard about the drop.",
        },
      },
      {
        kind: "wifi-snoop",
        title: "Drop day checkout",
        time: "10:00",
        setup:
          "The drop opens at 10:00. A customer buys a pair on free café Wi-Fi. Someone on the same Wi-Fi is capturing the data.",
        delivered: {
          headline: "The card details are scrambled",
          from: "web",
          message:
            "Checkout was encrypted between the browser and our web server. The snooper only got scrambled text, and the pair is on its way.",
        },
        returned: {
          headline: "Card details stolen",
          from: "support",
          message:
            "HTTP sent the card number as plain text. The snooper read it and spent £400. The bank cancelled the card, and the customer is furious.",
        },
      },
    ],
  },
  Ce = [Ht, Ot, zt];
Ce.map((s) => s.id);
function Dt(s) {
  const t = Ce.find((r) => r.id === s);
  if (!t) throw new Error(`No organisation ${s}`);
  return t;
}
function Ft(s, t) {
  return t === Z[s.id] || t === s.decoy;
}
function ft(s, t = ut) {
  return t.every((r) => s[r] !== void 0);
}
function Re(s, t) {
  const r = ae[s.kind].job;
  return t[r] === Z[r] ? "delivered" : "returned";
}
const _t = 5,
  jt = ["Mon", "Tue", "Wed", "Thu", "Fri"];
function Bt(s, t = Le(3)) {
  const r = Me(t);
  return s.filter((n) => r.includes(ae[n.kind].job));
}
function Ut(s, t, r = _t) {
  return s === r
    ? { title: "First class", line: t.endings.best }
    : s * 2 >= r
      ? { title: "Mostly delivered", line: t.endings.mixed }
      : { title: "Lost in the post", line: t.endings.worst };
}
const o = {
  stroke: f,
  strokeWidth: 2,
  strokeLinejoin: "round",
  strokeLinecap: "round",
};
function $({ x: s, y: t, w: r = 18, fill: n = p, tilt: i = 0 }) {
  const a = r * 0.66;
  return e.jsxs("g", {
    transform: `rotate(${i} ${s + r / 2} ${t + a / 2})`,
    children: [
      e.jsx("rect", { x: s, y: t, width: r, height: a, rx: 2, fill: n, ...o }),
      e.jsx("path", {
        d: `M${s + 1.5} ${t + 2}L${s + r / 2} ${t + a * 0.58}L${s + r - 1.5} ${t + 2}`,
        fill: "none",
        ...o,
        strokeWidth: 1.6,
      }),
    ],
  });
}
function W({ x: s, y: t, children: r, fill: n = f, size: i }) {
  return e.jsx("text", {
    x: s,
    y: t,
    textAnchor: "middle",
    className:
      i === "l"
        ? "pp-svg-label-l"
        : i === "s"
          ? "pp-svg-label-s"
          : "pp-svg-label",
    fill: n,
    children: r,
  });
}
function se({ x: s, y: t, outcome: r, r: n = 13 }) {
  const i = r === "delivered",
    a = n / 10;
  return e.jsxs("g", {
    "data-scene-badge": r,
    children: [
      e.jsx("circle", { cx: s, cy: t, r: n, fill: i ? me : Se, ...o }),
      i
        ? e.jsx("path", {
            d: `M${s - 4.5 * a} ${t + 0.5 * a}l${3 * a} ${3 * a}l${6 * a} ${-6.5 * a}`,
            fill: "none",
            ...o,
            strokeWidth: 2.6,
          })
        : e.jsx("path", {
            d: `M${s - 3.8 * a} ${t - 3.8 * a}l${7.6 * a} ${7.6 * a}M${s + 3.8 * a} ${t - 3.8 * a}l${-7.6 * a} ${7.6 * a}`,
            fill: "none",
            ...o,
            strokeWidth: 2.6,
          }),
    ],
  });
}
function fe({ x: s, y: t }) {
  return e.jsxs("g", {
    children: [
      e.jsx("circle", { cx: s, cy: t, r: 11, fill: p, ...o }),
      e.jsx(W, { x: s, y: t + 4.5, size: "l", children: "?" }),
    ],
  });
}
function L({ d: s, dashed: t = !0, color: r = f }) {
  return e.jsx("path", {
    d: s,
    fill: "none",
    stroke: r,
    strokeWidth: 2.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: t ? "5 6" : void 0,
  });
}
function He({ x: s, y: t, w: r, h: n, screen: i }) {
  const a = s + r / 2,
    l = t + n / 2;
  switch (i) {
    case "letters": {
      const x = Math.max(2, Math.min(4, Math.floor(n / 14)));
      return e.jsx("g", {
        children: Array.from({ length: x }, (d, h) =>
          e.jsxs(
            "g",
            {
              children: [
                e.jsx($, {
                  x: s + 4,
                  y: t + 5 + h * 13,
                  w: 13,
                  fill: h === 0 ? V : p,
                }),
                e.jsx("path", {
                  d: `M${s + 21} ${t + 10 + h * 13}h${r - 27}`,
                  stroke: O,
                  strokeWidth: 2,
                  strokeLinecap: "round",
                }),
              ],
            },
            h,
          ),
        ),
      });
    }
    case "empty":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: `M${a - 10} ${l - 2}h20l-3 9h-14z`,
            fill: ee,
            ...o,
            strokeWidth: 1.6,
          }),
          e.jsx(W, { x: a, y: l - 8, size: "s", children: "0" }),
        ],
      });
    case "unknown":
      return e.jsx(fe, { x: a, y: l });
    case "offline":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: `M${a - 9} ${l + 6}h18M${a - 5} ${l + 1}h10`,
            fill: "none",
            ...o,
          }),
          e.jsx("path", {
            d: `M${a - 10} ${l - 10}l20 20`,
            fill: "none",
            stroke: Ee,
            strokeWidth: 2.4,
            strokeLinecap: "round",
          }),
        ],
      });
    case "cracked":
      return e.jsx("path", {
        d: `M${s + 3} ${t + 8}l${r * 0.4} ${n * 0.25}l-${r * 0.1} ${n * 0.2}l${r * 0.5} ${n * 0.3}M${s + r * 0.42} ${t + n * 0.33}l${r * 0.45} -${n * 0.2}`,
        fill: "none",
        stroke: O,
        strokeWidth: 1.6,
        strokeLinecap: "round",
      });
    case "blank":
      return null;
  }
}
function $e({ x: s, y: t, screen: r, dim: n = !1 }) {
  return e.jsxs("g", {
    "data-device": "phone",
    opacity: n ? 0.75 : 1,
    children: [
      e.jsx("rect", {
        x: s,
        y: t,
        width: 46,
        height: 82,
        rx: 8,
        fill: D,
        ...o,
      }),
      e.jsx("rect", {
        x: s + 4,
        y: t + 8,
        width: 38,
        height: 64,
        rx: 3,
        fill: n ? C : p,
      }),
      e.jsx(He, { x: s + 4, y: t + 8, w: 38, h: 64, screen: r }),
      e.jsx("circle", { cx: s + 23, cy: t + 77, r: 2, fill: q }),
    ],
  });
}
function xe({ x: s, y: t, screen: r, children: n }) {
  return e.jsxs("g", {
    "data-device": "laptop",
    children: [
      e.jsx("rect", {
        x: s + 6,
        y: t,
        width: 84,
        height: 58,
        rx: 5,
        fill: D,
        ...o,
      }),
      e.jsx("rect", {
        x: s + 11,
        y: t + 5,
        width: 74,
        height: 48,
        rx: 2,
        fill: p,
      }),
      e.jsx(He, { x: s + 11, y: t + 5, w: 74, h: 48, screen: r }),
      n,
      e.jsx("path", { d: `M${s} ${t + 58}h96l-6 9h-84z`, fill: C, ...o }),
    ],
  });
}
function De({ x: s, y: t, letters: r, shut: n = !1, full: i = !1 }) {
  const a = [];
  for (let l = 0; l < 3; l += 1)
    for (let x = 0; x < 3; x += 1) {
      const d = l * 3 + x,
        h = s + 8 + x * 28,
        m = t + 22 + l * 26;
      a.push(
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("rect", {
                x: h,
                y: m,
                width: 24,
                height: 22,
                rx: 2,
                fill: ee,
                stroke: nt,
                strokeWidth: 1.6,
              }),
              d < r
                ? e.jsx($, { x: h + 3, y: m + 6, w: 18, tilt: d % 2 ? 4 : -3 })
                : null,
              i && d < r
                ? e.jsx($, { x: h + 4, y: m + 2, w: 16, fill: _, tilt: -6 })
                : null,
            ],
          },
          d,
        ),
      );
    }
  return e.jsxs("g", {
    "data-mail-server": !0,
    children: [
      e.jsx("rect", {
        x: s,
        y: t,
        width: 100,
        height: 110,
        rx: 6,
        fill: N,
        ...o,
      }),
      e.jsx("rect", {
        x: s + 10,
        y: t + 4,
        width: 80,
        height: 14,
        rx: 3,
        fill: ie,
        ...o,
        strokeWidth: 1.6,
      }),
      e.jsx(W, { x: s + 50, y: t + 14.5, size: "s", children: "MAIL SERVER" }),
      a,
      n
        ? e.jsxs("g", {
            children: [
              e.jsx("rect", {
                x: s + 6,
                y: t + 20,
                width: 88,
                height: 82,
                rx: 3,
                fill: V,
                ...o,
              }),
              [0, 1, 2, 3, 4].map((l) =>
                e.jsx(
                  "path",
                  {
                    d: `M${s + 8} ${t + 34 + l * 14}h84`,
                    stroke: Ie,
                    strokeWidth: 2,
                  },
                  l,
                ),
              ),
              e.jsx(fe, { x: s + 50, y: t + 61 }),
            ],
          })
        : null,
      i
        ? e.jsxs("g", {
            children: [
              e.jsx($, { x: s + 14, y: t - 12, w: 22, tilt: -10 }),
              e.jsx($, { x: s + 40, y: t - 14, w: 22, tilt: 6, fill: _ }),
              e.jsx($, { x: s + 64, y: t - 11, w: 22, tilt: -4 }),
              e.jsx("rect", {
                x: s + 22,
                y: t + 112,
                width: 56,
                height: 18,
                rx: 4,
                fill: Se,
                ...o,
              }),
              e.jsx(W, { x: s + 50, y: t + 125, size: "s", children: "FULL" }),
            ],
          })
        : null,
    ],
  });
}
function Yt({ x: s, y: t, label: r, children: n }) {
  return e.jsxs("g", {
    "data-server": r,
    children: [
      e.jsx("rect", {
        x: s,
        y: t,
        width: 82,
        height: 112,
        rx: 6,
        fill: ue,
        ...o,
      }),
      e.jsx("rect", {
        x: s + 6,
        y: t + 6,
        width: 70,
        height: 14,
        rx: 3,
        fill: p,
        ...o,
        strokeWidth: 1.6,
      }),
      e.jsx(W, { x: s + 41, y: t + 16.5, size: "s", children: r }),
      [0, 1, 2].map((i) =>
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("rect", {
                x: s + 8,
                y: t + 28 + i * 26,
                width: 66,
                height: 20,
                rx: 3,
                fill: Wt,
                ...o,
                strokeWidth: 1.6,
              }),
              e.jsx("circle", {
                cx: s + 64,
                cy: t + 38 + i * 26,
                r: 2.6,
                fill: G,
              }),
            ],
          },
          i,
        ),
      ),
      n,
    ],
  });
}
function pe({ x: s, y: t, fill: r = p, tilt: n = 0 }) {
  return e.jsxs("g", {
    transform: `rotate(${n} ${s + 12} ${t + 15})`,
    children: [
      e.jsx("path", {
        d: `M${s} ${t}h17l7 7v23h-24z`,
        fill: r,
        ...o,
        strokeWidth: 1.8,
      }),
      e.jsx("path", {
        d: `M${s + 4} ${t + 12}h15M${s + 4} ${t + 18}h15M${s + 4} ${t + 24}h10`,
        stroke: O,
        strokeWidth: 1.6,
        strokeLinecap: "round",
      }),
    ],
  });
}
function Gt({ x: s, y: t }) {
  return e.jsxs("g", {
    children: [
      e.jsx("path", {
        d: `M${s} ${t + 14}a12 12 0 0 1 4-22 16 16 0 0 1 30-2 11 11 0 0 1 4 24z`,
        fill: C,
        ...o,
      }),
      e.jsx("path", {
        d: `M${s + 22} ${t + 14}l-6 12h7l-5 12 13-17h-7l4-7z`,
        fill: P,
        ...o,
        strokeWidth: 1.6,
      }),
    ],
  });
}
function Fe({ x1: s, x2: t, y: r }) {
  const n = (s + t) / 2;
  return e.jsxs("g", {
    children: [
      e.jsx(L, { d: `M${s} ${r}H${n - 14}` }),
      e.jsx(L, { d: `M${n + 14} ${r}H${t}` }),
      e.jsx("path", {
        d: `M${n - 7} ${r - 7}l14 14M${n + 7} ${r - 7}l-14 14`,
        stroke: Ee,
        strokeWidth: 3,
        strokeLinecap: "round",
      }),
    ],
  });
}
function Kt({ x: s, y: t, state: r, org: n }) {
  if (r === "before")
    return e.jsxs("g", {
      children: [
        e.jsx("rect", {
          x: s,
          y: t,
          width: 132,
          height: 60,
          rx: 6,
          fill: p,
          ...o,
        }),
        e.jsx(fe, { x: s + 66, y: t + 30 }),
      ],
    });
  if (r === "delivered")
    return e.jsxs("g", {
      "data-captured": "encrypted",
      children: [
        e.jsx("rect", {
          x: s,
          y: t,
          width: 132,
          height: 60,
          rx: 6,
          fill: p,
          ...o,
        }),
        e.jsx("path", {
          d: `M${s + 2} ${t + 3}L${s + 66} ${t + 34}L${s + 130} ${t + 3}`,
          fill: "none",
          ...o,
          strokeWidth: 1.6,
        }),
        e.jsxs("g", {
          transform: `translate(${s + 59} ${t + 26})`,
          children: [
            e.jsx("path", { d: "M3 6V4a4 4 0 0 1 8 0v2", fill: "none", ...o }),
            e.jsx("rect", {
              x: 0,
              y: 6,
              width: 14,
              height: 11,
              rx: 2,
              fill: P,
              ...o,
            }),
          ],
        }),
        e.jsx(W, { x: s + 66, y: t + 56, size: "s", children: "x7#Qp!9 &k2@" }),
      ],
    });
  const i = {
      ambulance: ["password: moor12", "address: 4 Hill Rd"],
      newsroom: ["tip from: my desk", "call me: 07700 900"],
      trainers: ["card: 4929 1837", "name: R. Lane"],
    },
    [a, l] = i[n];
  return e.jsxs("g", {
    "data-captured": "plain",
    children: [
      e.jsx("rect", {
        x: s,
        y: t,
        width: 132,
        height: 60,
        rx: 4,
        fill: We,
        ...o,
      }),
      e.jsx("path", {
        d: `M${s + 96} ${t + 8}h26v20h-26z`,
        fill: V,
        ...o,
        strokeWidth: 1.6,
      }),
      e.jsx("text", {
        x: s + 8,
        y: t + 38,
        className: "pp-svg-mono",
        fill: f,
        children: a,
      }),
      e.jsx("text", {
        x: s + 8,
        y: t + 52,
        className: "pp-svg-mono",
        fill: f,
        children: l,
      }),
    ],
  });
}
function Vt({ x: s, y: t }) {
  return e.jsxs("g", {
    "data-snooper": !0,
    children: [
      e.jsx("path", {
        d: `M${s + 52} ${t + 70}c-4-30 10-48 6-66 18 10 22 40 10 66z`,
        fill: G,
        ...o,
      }),
      e.jsx("path", {
        d: `M${s + 70} ${t + 70}c4-22-6-36 2-52 12 14 10 34 4 52z`,
        fill: me,
        ...o,
      }),
      e.jsx("rect", {
        x: s,
        y: t + 30,
        width: 56,
        height: 38,
        rx: 4,
        fill: D,
        ...o,
      }),
      e.jsx("path", { d: `M${s + 10} ${t + 30}v-14`, ...o }),
      e.jsx("circle", {
        cx: s + 10,
        cy: t + 14,
        r: 3,
        fill: J,
        ...o,
        strokeWidth: 1.4,
      }),
      e.jsx("ellipse", {
        cx: s + 28,
        cy: t + 49,
        rx: 14,
        ry: 8,
        fill: p,
        ...o,
        strokeWidth: 1.6,
      }),
      e.jsx("circle", { cx: s + 28, cy: t + 49, r: 4, fill: f }),
    ],
  });
}
function Xt({ x: s, y: t }) {
  return e.jsxs("g", {
    fill: "none",
    stroke: Te,
    strokeWidth: 3,
    strokeLinecap: "round",
    children: [
      e.jsx("path", { d: `M${s - 16} ${t}a22 22 0 0 1 32 0` }),
      e.jsx("path", { d: `M${s - 10} ${t + 7}a13 13 0 0 1 20 0` }),
      e.jsx("circle", { cx: s, cy: t + 13, r: 2.6, fill: Te, stroke: "none" }),
    ],
  });
}
function qt({ x: s, y: t, letters: r }) {
  return e.jsxs("g", {
    "data-outbox": !0,
    children: [
      Array.from({ length: r }, (n, i) =>
        e.jsx(
          $,
          {
            x: s + 8 + (i % 3) * 4,
            y: t + 12 - i * 6,
            w: 44,
            fill: i % 2 ? _ : p,
            tilt: (i % 3) * 3 - 3,
          },
          i,
        ),
      ),
      e.jsx("path", { d: `M${s} ${t + 26}h64l-6 20h-52z`, fill: Ae, ...o }),
      e.jsx(W, { x: s + 32, y: t + 41, size: "s", children: "OUTBOX" }),
    ],
  });
}
function Jt({ x: s, y: t, filled: r }) {
  return e.jsxs("g", {
    "data-inbox": r ? "filled" : "empty",
    children: [
      r ? e.jsx($, { x: s + 10, y: t - 2, w: 30 }) : null,
      e.jsx("path", { d: `M${s} ${t + 12}h50l-5 16h-40z`, fill: F, ...o }),
      r ? null : e.jsx(W, { x: s + 25, y: t + 25, size: "s", children: "0" }),
    ],
  });
}
function Qt({ x: s, y: t, page: r }) {
  return e.jsxs("g", {
    "data-browser": r,
    children: [
      e.jsx("rect", {
        x: s,
        y: t,
        width: 120,
        height: 78,
        rx: 6,
        fill: p,
        ...o,
      }),
      e.jsx("path", { d: `M${s} ${t + 16}h120`, ...o }),
      [0, 1, 2].map((n) =>
        e.jsx(
          "circle",
          { cx: s + 10 + n * 9, cy: t + 8, r: 2.6, fill: [Ie, P, me][n] },
          n,
        ),
      ),
      r === "unknown" ? e.jsx(fe, { x: s + 60, y: t + 47 }) : null,
      r === "new"
        ? e.jsxs("g", {
            children: [
              e.jsx("rect", {
                x: s + 10,
                y: t + 24,
                width: 100,
                height: 26,
                rx: 3,
                fill: St,
                ...o,
                strokeWidth: 1.6,
              }),
              e.jsx("rect", {
                x: s + 16,
                y: t + 30,
                width: 26,
                height: 14,
                rx: 3,
                fill: J,
                ...o,
                strokeWidth: 1.4,
              }),
              e.jsx(W, {
                x: s + 29,
                y: t + 41,
                fill: p,
                size: "s",
                children: "NEW",
              }),
              e.jsx("path", {
                d: `M${s + 10} ${t + 60}h80M${s + 10} ${t + 69}h60`,
                stroke: O,
                strokeWidth: 2.4,
                strokeLinecap: "round",
              }),
            ],
          })
        : null,
      r === "old"
        ? e.jsxs("g", {
            children: [
              e.jsx("rect", {
                x: s + 10,
                y: t + 24,
                width: 100,
                height: 26,
                rx: 3,
                fill: C,
                ...o,
                strokeWidth: 1.6,
              }),
              e.jsx("rect", {
                x: s + 16,
                y: t + 30,
                width: 26,
                height: 14,
                rx: 3,
                fill: q,
                ...o,
                strokeWidth: 1.4,
              }),
              e.jsx(W, { x: s + 29, y: t + 41, size: "s", children: "OLD" }),
              e.jsx("path", {
                d: `M${s + 10} ${t + 60}h80M${s + 10} ${t + 69}h60`,
                stroke: q,
                strokeWidth: 2.4,
                strokeLinecap: "round",
              }),
              e.jsx("path", {
                d: `M${s + 84} ${t + 56}q8 -6 16 0`,
                fill: "none",
                stroke: q,
                strokeWidth: 1.4,
              }),
            ],
          })
        : null,
    ],
  });
}
function gt({ kind: s, state: t, org: r }) {
  const n = t === "delivered",
    i = t === "returned";
  switch (s) {
    case "lost-device":
      return e.jsxs("g", {
        children: [
          e.jsxs("g", {
            transform: "rotate(-14 50 120)",
            children: [
              e.jsx($e, {
                x: 20,
                y: 80,
                screen: i ? "letters" : "cracked",
                dim: !0,
              }),
              e.jsx(He, { x: 24, y: 88, w: 38, h: 64, screen: "cracked" }),
            ],
          }),
          e.jsx(De, {
            x: 150,
            y: 50,
            letters: n ? 6 : 0,
            shut: t === "before",
          }),
          e.jsx($e, {
            x: 320,
            y: 70,
            screen: n ? "letters" : i ? "empty" : "unknown",
          }),
          n ? e.jsx(L, { d: "M256 105C280 100 296 100 314 104" }) : null,
          t === "before" ? null : e.jsx(se, { x: 366, y: 64, outcome: t }),
        ],
      });
    case "no-signal":
      return e.jsxs("g", {
        children: [
          e.jsx(Gt, { x: 150, y: 18 }),
          e.jsx(xe, {
            x: 20,
            y: 100,
            screen: n ? "letters" : i ? "offline" : "unknown",
          }),
          e.jsx(De, {
            x: 280,
            y: 50,
            letters: i ? 6 : 0,
            shut: t === "before",
          }),
          e.jsx(Fe, { x1: 124, x2: 274, y: 128 }),
          t === "before" ? null : e.jsx(se, { x: 112, y: 96, outcome: t }),
        ],
      });
    case "send-all":
      return e.jsxs("g", {
        children: [
          e.jsx(qt, { x: 20, y: 100, letters: n ? 0 : 3 }),
          [0, 1, 2].map((a) =>
            e.jsx(Jt, { x: 300, y: 30 + a * 56, filled: n }, a),
          ),
          n
            ? [0, 1, 2].map((a) =>
                e.jsx(
                  L,
                  {
                    d: `M98 130C180 ${130 - (1 - a) * 10} 230 ${56 + a * 56} 292 ${56 + a * 56}`,
                  },
                  a,
                ),
              )
            : null,
          t === "before"
            ? e.jsxs("g", {
                children: [
                  e.jsx("circle", { cx: 190, cy: 86, r: 30, fill: p, ...o }),
                  e.jsx("path", {
                    d: "M190 66v20l12 8",
                    fill: "none",
                    ...o,
                    strokeWidth: 3,
                  }),
                ],
              })
            : null,
          t === "before"
            ? null
            : e.jsx(se, { x: n ? 372 : 96, y: n ? 26 : 92, outcome: t }),
        ],
      });
    case "wifi-snoop":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 10,
            y: 168,
            width: 170,
            height: 10,
            rx: 4,
            fill: E,
            ...o,
          }),
          e.jsxs(xe, {
            x: 30,
            y: 100,
            screen: "blank",
            children: [
              e.jsx("rect", {
                x: 52,
                y: 112,
                width: 52,
                height: 10,
                rx: 3,
                fill: F,
                ...o,
                strokeWidth: 1.4,
              }),
              e.jsx("rect", {
                x: 52,
                y: 126,
                width: 52,
                height: 10,
                rx: 3,
                fill: F,
                ...o,
                strokeWidth: 1.4,
              }),
            ],
          }),
          e.jsx("path", {
            d: "M142 150h18v14a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8z",
            fill: p,
            ...o,
          }),
          e.jsx(Xt, { x: 190, y: 150 }),
          e.jsx(Vt, { x: 300, y: 100 }),
          e.jsx(Kt, { x: 140, y: 22, state: t, org: r }),
          e.jsx(L, { d: "M274 52C296 58 314 80 318 112" }),
          t === "before" ? null : e.jsx(se, { x: 272, y: 22, outcome: t }),
        ],
      });
    case "upload-pages":
      return e.jsxs("g", {
        children: [
          e.jsx(xe, {
            x: 10,
            y: 110,
            screen: "blank",
            children: n
              ? null
              : e.jsxs("g", {
                  children: [
                    e.jsx(pe, { x: 36, y: 116 }),
                    e.jsx(pe, { x: 52, y: 118, tilt: 6, fill: _ }),
                  ],
                }),
          }),
          e.jsx(Yt, {
            x: 300,
            y: 70,
            label: "WEB SERVER",
            children: n
              ? e.jsxs("g", {
                  children: [
                    e.jsx(pe, { x: 312, y: 40, tilt: -6 }),
                    e.jsx(pe, { x: 340, y: 38, tilt: 6, fill: _ }),
                  ],
                })
              : null,
          }),
          e.jsx(Qt, { x: 140, y: 14, page: n ? "new" : i ? "old" : "unknown" }),
          n || t === "before"
            ? e.jsx(L, { d: "M112 140C180 130 240 130 294 128" })
            : null,
          i ? e.jsx(Fe, { x1: 112, x2: 294, y: 140 }) : null,
          t === "before" ? null : e.jsx(se, { x: 262, y: 16, outcome: t }),
        ],
      });
  }
}
function _e({ x: s, y: t, s: r = 1 }) {
  return e.jsxs("g", {
    transform: `translate(${s} ${t}) scale(${r})`,
    children: [
      e.jsx("path", { d: "M0 20h120v70H0z", fill: P, ...o }),
      e.jsx("path", { d: "M120 40h34l22 24v26h-56z", fill: P, ...o }),
      e.jsx("path", {
        d: "M126 46h24l16 18h-40z",
        fill: F,
        ...o,
        strokeWidth: 1.6,
      }),
      [0, 1, 2, 3, 4, 5].map((n) =>
        e.jsx(
          "rect",
          {
            x: n * 20,
            y: 60,
            width: 20,
            height: 14,
            fill: n % 2 ? P : G,
            stroke: f,
            strokeWidth: 1.2,
          },
          n,
        ),
      ),
      e.jsx("rect", {
        x: 120,
        y: 60,
        width: 56,
        height: 14,
        fill: G,
        stroke: f,
        strokeWidth: 1.2,
      }),
      e.jsx("rect", {
        x: 30,
        y: 10,
        width: 30,
        height: 10,
        rx: 3,
        fill: Te,
        ...o,
        strokeWidth: 1.6,
      }),
      e.jsx("circle", { cx: 34, cy: 92, r: 13, fill: D, ...o }),
      e.jsx("circle", { cx: 146, cy: 92, r: 13, fill: D, ...o }),
      e.jsx("circle", { cx: 34, cy: 92, r: 5, fill: C }),
      e.jsx("circle", { cx: 146, cy: 92, r: 5, fill: C }),
      e.jsx("text", {
        x: 60,
        y: 46,
        textAnchor: "middle",
        className: "pp-svg-label",
        fill: f,
        children: "AMBULANCE",
      }),
    ],
  });
}
function be({ x: s, y: t, s: r = 1, body: n = p, trim: i = H }) {
  return e.jsxs("g", {
    transform: `translate(${s} ${t}) scale(${r})`,
    children: [
      e.jsx("path", {
        d: "M4 40c0-14 4-26 10-30 6 8 16 12 28 12 14 0 30 8 44 14 8 4 12 10 12 16H4z",
        fill: n,
        ...o,
      }),
      e.jsx("path", {
        d: "M2 52h98v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z",
        fill: i,
        ...o,
      }),
      e.jsx("path", {
        d: "M30 24l8 10M40 22l8 10M50 24l6 10",
        stroke: f,
        strokeWidth: 2,
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M58 40c10-6 22-6 34 4",
        fill: "none",
        stroke: i,
        strokeWidth: 5,
        strokeLinecap: "round",
      }),
    ],
  });
}
function Zt({ x: s, y: t, fill: r }) {
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: s,
        y: t,
        width: 52,
        height: 30,
        rx: 3,
        fill: r,
        ...o,
      }),
      e.jsx("path", { d: `M${s} ${t + 9}h52`, ...o, strokeWidth: 1.6 }),
      e.jsx("rect", {
        x: s + 18,
        y: t + 15,
        width: 16,
        height: 8,
        rx: 2,
        fill: p,
        ...o,
        strokeWidth: 1.4,
      }),
    ],
  });
}
function yt({ org: s, layout: t, hero: r = !1 }) {
  const n = t === "wide",
    i = n ? 640 : 360,
    a = 360;
  return s === "ambulance"
    ? e.jsxs("g", {
        "data-backdrop": "ambulance",
        children: [
          e.jsx("rect", { width: i, height: a, fill: F }),
          e.jsx("path", {
            d: `M0 ${n ? 150 : 120}c${i * 0.2}-40 ${i * 0.4}-30 ${i * 0.55}-6s${i * 0.3}-34 ${i * 0.45}-18V${a}H0z`,
            fill: Et,
            ...o,
          }),
          e.jsx("rect", {
            x: n ? 40 : 14,
            y: n ? 40 : 30,
            width: n ? 560 : 332,
            height: n ? 200 : 150,
            rx: 6,
            fill: p,
            ...o,
          }),
          e.jsx("rect", {
            x: n ? 60 : 30,
            y: n ? 52 : 40,
            width: n ? 520 : 300,
            height: 34,
            rx: 4,
            fill: G,
            ...o,
          }),
          e.jsx("text", {
            x: i / 2,
            y: n ? 76 : 63,
            textAnchor: "middle",
            className: "pp-svg-sign",
            fill: p,
            children: "MOORSIDE AMBULANCE",
          }),
          (n ? [70, 250, 430] : [30, 190]).map((l) =>
            e.jsxs(
              "g",
              {
                children: [
                  e.jsx("rect", {
                    x: l,
                    y: n ? 100 : 86,
                    width: 140,
                    height: n ? 140 : 94,
                    rx: 3,
                    fill: C,
                    ...o,
                  }),
                  [0, 1, 2, 3].map((x) =>
                    e.jsx(
                      "path",
                      {
                        d: `M${l} ${(n ? 118 : 100) + x * (n ? 24 : 18)}h140`,
                        stroke: q,
                        strokeWidth: 2,
                      },
                      x,
                    ),
                  ),
                ],
              },
              l,
            ),
          ),
          n
            ? e.jsx(_e, { x: 8, y: 232, s: 0.86 })
            : e.jsx(_e, { x: 196, y: 96, s: 0.7 }),
          e.jsx("rect", { y: a - 20, width: i, height: 20, fill: C, ...o }),
          n
            ? e.jsxs("g", {
                children: [
                  e.jsx("circle", { cx: 596, cy: 290, r: 34, fill: p, ...o }),
                  e.jsx("text", {
                    x: 596,
                    y: 303,
                    textAnchor: "middle",
                    className: "pp-svg-sign",
                    fill: G,
                    children: "H",
                  }),
                ],
              })
            : null,
        ],
      })
    : s === "newsroom"
      ? e.jsxs("g", {
          "data-backdrop": "newsroom",
          children: [
            e.jsx("rect", { width: i, height: a, fill: ee }),
            (n ? [24, 176, 328, 480] : [16, 188]).map((l) =>
              e.jsxs(
                "g",
                {
                  children: [
                    e.jsx("rect", {
                      x: l,
                      y: n ? 66 : 64,
                      width: n ? 136 : 156,
                      height: n ? 120 : 76,
                      rx: 4,
                      fill: ue,
                      ...o,
                    }),
                    e.jsx("path", {
                      d: `M${l + 10} ${n ? 186 : 140}v-40h22v-20h18v30h20v-50h24v80`,
                      fill: tt,
                      ...o,
                      strokeWidth: 1.6,
                    }),
                    e.jsx("path", {
                      d: `M${l + (n ? 68 : 78)} ${n ? 66 : 64}v${n ? 120 : 76}`,
                      ...o,
                    }),
                  ],
                },
                l,
              ),
            ),
            e.jsx("rect", {
              x: n ? 120 : 20,
              y: 12,
              width: n ? 400 : 320,
              height: 42,
              rx: 4,
              fill: N,
              ...o,
            }),
            e.jsx("text", {
              x: i / 2,
              y: 40,
              textAnchor: "middle",
              className: "pp-svg-sign",
              fill: ie,
              children: "THE EVENING LANTERN",
            }),
            n
              ? e.jsxs("g", {
                  children: [
                    [0, 1, 2, 3, 4].map((l) =>
                      e.jsxs(
                        "g",
                        {
                          children: [
                            e.jsx("rect", {
                              x: 10 + (l % 2) * 4,
                              y: 330 - l * 14,
                              width: 74,
                              height: 14,
                              rx: 2,
                              fill: p,
                              ...o,
                              strokeWidth: 1.6,
                            }),
                            e.jsx("path", {
                              d: `M${18 + (l % 2) * 4} ${337 - l * 14}h40`,
                              stroke: J,
                              strokeWidth: 3,
                            }),
                          ],
                        },
                        l,
                      ),
                    ),
                    e.jsx("circle", { cx: 598, cy: 250, r: 28, fill: p, ...o }),
                    e.jsx("path", {
                      d: "M598 232v18l12 8",
                      fill: "none",
                      ...o,
                      strokeWidth: 2.6,
                    }),
                    e.jsx("path", { d: "M560 360v-60h76v60", fill: O, ...o }),
                    e.jsx("circle", { cx: 598, cy: 330, r: 16, fill: C, ...o }),
                  ],
                })
              : null,
            (n ? [150, 330] : []).map((l) =>
              e.jsxs(
                "g",
                {
                  children: [
                    e.jsx("rect", {
                      x: l + 30,
                      y: 232,
                      width: 56,
                      height: 40,
                      rx: 4,
                      fill: D,
                      ...o,
                    }),
                    e.jsx("rect", {
                      x: l + 35,
                      y: 237,
                      width: 46,
                      height: 30,
                      rx: 2,
                      fill: F,
                    }),
                    e.jsx("path", { d: `M${l + 58} 272v14`, ...o }),
                    e.jsx("rect", {
                      x: l,
                      y: 286,
                      width: 160,
                      height: 14,
                      rx: 3,
                      fill: E,
                      ...o,
                    }),
                    e.jsx("path", {
                      d: `M${l + 12} 300v42M${l + 148} 300v42`,
                      ...o,
                      strokeWidth: 3,
                    }),
                    e.jsx("rect", {
                      x: l + 100,
                      y: 270,
                      width: 34,
                      height: 16,
                      rx: 2,
                      fill: p,
                      ...o,
                      strokeWidth: 1.6,
                    }),
                    e.jsx("path", {
                      d: `M${l + 104} 276h22`,
                      stroke: J,
                      strokeWidth: 2.4,
                    }),
                  ],
                },
                l,
              ),
            ),
            e.jsx("rect", { y: a - 18, width: i, height: 18, fill: E, ...o }),
          ],
        })
      : e.jsxs("g", {
          "data-backdrop": "trainers",
          children: [
            e.jsx("rect", { width: i, height: a, fill: _ }),
            (n ? [70, 150, 230, 310] : [70, 150]).map((l, x) =>
              (n ? [16, 76, 516, 576] : [8, 64, 244, 300]).map((d, h) =>
                e.jsx(
                  Zt,
                  { x: d, y: l, fill: [Ae, H, rt, P][(x + h) % 4] },
                  `${l}-${d}`,
                ),
              ),
            ),
            (n ? [100, 180, 260, 340] : [100, 180]).map((l) =>
              e.jsx(
                "rect",
                {
                  x: 0,
                  y: l,
                  width: i,
                  height: 6,
                  fill: E,
                  ...o,
                  strokeWidth: 1.4,
                },
                l,
              ),
            ),
            e.jsx("rect", {
              x: n ? 160 : 100,
              y: n ? 14 : 10,
              width: n ? 320 : 160,
              height: 46,
              rx: 10,
              fill: p,
              ...o,
            }),
            e.jsx("text", {
              x: i / 2,
              y: 46,
              textAnchor: "middle",
              className: "pp-svg-sign",
              fill: J,
              children: "LACEBOX",
            }),
            n && r
              ? e.jsx(be, { x: 210, y: 110, s: 2, body: p, trim: H })
              : null,
            n && !r
              ? e.jsx(be, { x: 178, y: 20, s: 0.36, body: p, trim: H })
              : null,
            n ? null : e.jsx(be, { x: 146, y: 62, s: 0.68, body: p, trim: H }),
          ],
        });
}
const es = {
    wide: {
      w: 640,
      h: 360,
      table: { x: 96, y: 112, w: 448, h: 236 },
      vignette: { x: 108, y: 116, s: 1.06 },
    },
    tall: {
      w: 360,
      h: 360,
      table: { x: 8, y: 112, w: 344, h: 240 },
      vignette: { x: 14, y: 140, s: 0.83 },
    },
  },
  ts = {
    "lost-device": "a broken phone, the mail server and a new phone",
    "no-signal": "a laptop cut off from the mail server",
    "send-all": "the outbox and every inbox it sends to",
    "wifi-snoop": "a laptop on free Wi-Fi and someone capturing the data",
    "upload-pages": "web pages going up to the web server",
  },
  ss = { before: "", delivered: ": it worked", returned: ": it went wrong" };
function rs({ org: s, event: t, state: r, layout: n }) {
  const i = es[n];
  return e.jsxs("svg", {
    viewBox: `0 0 ${i.w} ${i.h}`,
    width: i.w,
    className: "pp-art pp-event-art",
    role: "img",
    "aria-label": `${ts[t.kind]}${ss[r]}`,
    "data-event-scene": t.kind,
    "data-scene-state": r,
    "data-layout": n,
    "data-job": ae[t.kind].job,
    children: [
      e.jsx(yt, { org: s, layout: n }),
      e.jsx("rect", {
        x: i.table.x,
        y: i.table.y,
        width: i.table.w,
        height: i.table.h,
        rx: 14,
        fill: ie,
        ...o,
      }),
      e.jsx("rect", {
        x: i.table.x + 8,
        y: i.table.y + 8,
        width: i.table.w - 16,
        height: i.table.h - 16,
        rx: 10,
        fill: "none",
        stroke: V,
        strokeWidth: 2,
        strokeDasharray: "10 6",
      }),
      e.jsx("g", {
        transform: `translate(${i.vignette.x} ${i.vignette.y}) scale(${i.vignette.s})`,
        "data-vignette": `${t.kind}-${r}`,
        children: e.jsx(gt, { kind: t.kind, state: r, org: s }),
      }),
    ],
  });
}
function bt({ org: s }) {
  return e.jsx("svg", {
    viewBox: "0 0 640 360",
    width: "640",
    preserveAspectRatio: "xMidYMid slice",
    className: "pp-art",
    "aria-hidden": "true",
    "data-org-scene": s,
    children: e.jsx(yt, { org: s, layout: "wide", hero: !0 }),
  });
}
const Be = ["smtp", "imap", "https", "ftp", "pop", "tcpip", "http"];
function we({ x: s, y: t, cols: r, rows: n }) {
  const i = [];
  for (let a = 0; a < n; a += 1)
    for (let l = 0; l < r; l += 1) {
      const x = a * r + l,
        d = s + 16 + l * 70,
        h = t + 16 + a * 60;
      i.push(
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("rect", {
                x: d,
                y: h,
                width: 62,
                height: 52,
                rx: 3,
                fill: ee,
                stroke: nt,
                strokeWidth: 2,
              }),
              (x * 7) % 5 !== 0
                ? e.jsx($, {
                    x: d + 12,
                    y: h + 18,
                    w: 38,
                    fill: x % 3 === 0 ? _ : p,
                    tilt: (x % 4) * 3 - 4,
                  })
                : null,
            ],
          },
          x,
        ),
      );
    }
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: s,
        y: t,
        width: r * 70 + 24,
        height: n * 60 + 24,
        rx: 8,
        fill: N,
        ...o,
        strokeWidth: 3,
      }),
      i,
    ],
  });
}
function ns({ x: s, y: t, stamp: r, w: n = 150, tilt: i = 0 }) {
  const a = n * 0.62;
  return e.jsxs("g", {
    transform: `rotate(${i} ${s + n / 2} ${t + a / 2})`,
    children: [
      e.jsx("rect", {
        x: s,
        y: t,
        width: n,
        height: a,
        rx: 6,
        fill: p,
        ...o,
        strokeWidth: 3,
      }),
      e.jsx("path", {
        d: `M${s + 14} ${t + a * 0.55}h${n * 0.4}M${s + 14} ${t + a * 0.72}h${n * 0.3}`,
        stroke: O,
        strokeWidth: 4,
        strokeLinecap: "round",
      }),
      e.jsx(K, { id: r, x: s + n - 58, y: t + 8, w: 46 }),
    ],
  });
}
function Ue({ x: s, y: t, s: r }) {
  return e.jsx("g", {
    transform: `translate(${s} ${t}) scale(${r})`,
    children: e.jsxs("g", {
      "data-character": !0,
      className: "pp-character pp-postmaster",
      children: [
        e.jsx("path", {
          d: "M14 96c0-22 11-38 26-38s26 16 26 38z",
          fill: N,
          ...o,
        }),
        e.jsx("path", {
          d: "M33 59l7 10 7-10",
          fill: "none",
          stroke: P,
          strokeWidth: 3,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        e.jsx(ct, { creature: "owl" }),
        e.jsx("path", { d: "M22 24h36l-4-10H26z", fill: D, ...o }),
        e.jsx("path", { d: "M20 24h40", ...o, strokeWidth: 3 }),
      ],
    }),
  });
}
function re({ x: s, y: t, flip: r = !1 }) {
  return e.jsxs("g", {
    transform: `translate(${s} ${t})${r ? " scale(-1 1) translate(-160 0)" : ""}`,
    children: [
      e.jsx("path", {
        d: "M30 40c-30 40-30 120 10 150h90c40-30 40-110 10-150z",
        fill: E,
        ...o,
        strokeWidth: 4,
      }),
      e.jsx("path", {
        d: "M40 40h90l-10-26H50z",
        fill: E,
        ...o,
        strokeWidth: 4,
      }),
      e.jsx("path", {
        d: "M44 40c20 10 62 10 82 0",
        fill: "none",
        stroke: N,
        strokeWidth: 8,
        strokeLinecap: "round",
      }),
      e.jsx("rect", {
        x: 50,
        y: 90,
        width: 70,
        height: 46,
        rx: 6,
        fill: p,
        ...o,
        strokeWidth: 3,
      }),
      e.jsx("path", {
        d: "M60 106h40M60 120h28",
        stroke: O,
        strokeWidth: 5,
        strokeLinecap: "round",
      }),
    ],
  });
}
function Ye({ layout: s }) {
  const t = s === "wide",
    r = t ? 1600 : 900,
    n = t ? 900 : 1600,
    i = t ? 600 : 1080;
  return e.jsxs("svg", {
    viewBox: `0 0 ${r} ${n}`,
    width: r,
    preserveAspectRatio: "xMidYMid slice",
    className: `game-landing-art ${t ? "game-landing-landscape" : "game-landing-portrait"}`,
    "aria-hidden": "true",
    "data-landing-scene": s,
    children: [
      e.jsx("rect", { width: r, height: n, fill: ie }),
      e.jsx("rect", { y: i + 120, width: r, height: n - i - 120, fill: ee }),
      t
        ? e.jsx(we, { x: 90, y: 190, cols: 6, rows: 5 })
        : e.jsx(we, { x: 120, y: 380, cols: 9, rows: 6 }),
      t ? e.jsx(we, { x: 1060, y: 190, cols: 6, rows: 5 }) : null,
      e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: t ? 490 : 110,
            y: t ? 60 : 120,
            width: t ? 620 : 680,
            height: t ? 190 : 230,
            rx: 18,
            fill: p,
            ...o,
            strokeWidth: 4,
          }),
          e.jsx("rect", {
            x: t ? 506 : 128,
            y: t ? 76 : 138,
            width: t ? 588 : 644,
            height: t ? 158 : 194,
            rx: 10,
            fill: "none",
            stroke: N,
            strokeWidth: 4,
            strokeDasharray: "18 10",
          }),
          e.jsx("path", {
            d: `M${t ? 600 : 230} 0V${t ? 60 : 120}M${t ? 1e3 : 670} 0V${t ? 60 : 120}`,
            ...o,
            strokeWidth: 4,
          }),
          e.jsx("text", {
            x: r / 2,
            y: t ? 148 : 226,
            textAnchor: "middle",
            className: t ? "pp-svg-title" : "pp-svg-title-tall",
            fill: N,
            children: "PROTOCOL",
          }),
          e.jsx("text", {
            x: r / 2,
            y: t ? 222 : 318,
            textAnchor: "middle",
            className: t ? "pp-svg-title" : "pp-svg-title-tall",
            fill: f,
            children: "POST",
          }),
        ],
      }),
      t
        ? e.jsx(Ue, { x: 690, y: 310, s: 2.8 })
        : e.jsx(Ue, { x: 300, y: 780, s: 3.6 }),
      e.jsx("rect", {
        x: t ? 560 : 140,
        y: t ? 520 : 1e3,
        width: t ? 480 : 620,
        height: 80,
        rx: 10,
        fill: E,
        ...o,
        strokeWidth: 3,
      }),
      e.jsx("rect", {
        x: 0,
        y: i + 40,
        width: r,
        height: 56,
        fill: O,
        ...o,
        strokeWidth: 3,
      }),
      Array.from({ length: Math.ceil(r / 80) + 1 }, (a, l) =>
        e.jsx(
          "circle",
          { cx: l * 80 + 20, cy: i + 68, r: 16, fill: C, ...o, strokeWidth: 3 },
          l,
        ),
      ),
      (t ? [40, 260, 480, 1100, 1320] : [30, 330, 620]).map((a, l) =>
        e.jsx(
          ns,
          {
            x: a,
            y: i - 70,
            stamp: Be[l % Be.length],
            w: t ? 180 : 230,
            tilt: l % 2 ? 3 : -2,
          },
          a,
        ),
      ),
      t
        ? e.jsxs("g", {
            children: [
              e.jsx(re, { x: 150, y: 700 }),
              e.jsx(re, { x: 330, y: 715, flip: !0 }),
              e.jsx(re, { x: 1290, y: 705, flip: !0 }),
            ],
          })
        : e.jsxs("g", {
            children: [
              e.jsx(re, { x: 90, y: 1330 }),
              e.jsx(re, { x: 650, y: 1350, flip: !0 }),
            ],
          }),
    ],
  });
}
function is({ kind: s }) {
  return e.jsx("svg", {
    viewBox: "0 0 400 210",
    width: 400,
    className: "pp-card-picture",
    "aria-hidden": "true",
    "data-card-picture": s,
    children: e.jsx(gt, { kind: s, state: "delivered", org: "ambulance" }),
  });
}
function as() {
  return e.jsxs("svg", {
    viewBox: "0 0 400 210",
    width: 400,
    className: "pp-card-picture",
    "aria-hidden": "true",
    "data-card-picture": "rules",
    children: [
      e.jsx(xe, { x: 14, y: 70, screen: "letters" }),
      e.jsx($e, { x: 334, y: 60, screen: "letters" }),
      e.jsx(L, { d: "M118 92C160 70 240 70 324 88" }),
      e.jsx(L, { d: "M324 124C240 146 160 146 118 120" }),
      e.jsx($, { x: 150, y: 66, w: 22, tilt: -8 }),
      e.jsx($, { x: 232, y: 132, w: 22, tilt: 8 }),
      e.jsxs("g", {
        transform: "translate(166 82)",
        children: [
          e.jsx("rect", { width: 68, height: 50, rx: 4, fill: N, ...o }),
          e.jsx("path", { d: "M34 4v42", stroke: f, strokeWidth: 2 }),
          e.jsx("path", {
            d: "M8 14h20M8 22h20M8 30h14M40 14h20M40 22h20M40 30h14",
            stroke: p,
            strokeWidth: 2.4,
            strokeLinecap: "round",
          }),
        ],
      }),
      e.jsx(W, { x: 200, y: 152, children: "RULES" }),
    ],
  });
}
const os = [_, ue, st, We];
function ke({ x: s, y: t, w: r, h: n, gap: i, labels: a, changed: l }) {
  return e.jsx("g", {
    children: a.map((x, d) => {
      const h = t + d * (n + i),
        m = d === l;
      return e.jsxs(
        "g",
        {
          "data-layer": d,
          children: [
            e.jsx("rect", {
              x: s,
              y: h,
              width: r,
              height: n,
              rx: 8,
              fill: m ? V : os[d],
              ...o,
              strokeWidth: m ? 3 : 2,
            }),
            e.jsx(W, {
              x: s + r / 2,
              y: h + n / 2 + 6,
              size: "l",
              children: x,
            }),
          ],
        },
        d,
      );
    }),
  });
}
function Ge({ variant: s }) {
  if (s === "stack")
    return e.jsxs("svg", {
      viewBox: "0 0 400 210",
      width: 400,
      className: "pp-card-picture",
      "aria-hidden": "true",
      "data-card-picture": "layers",
      children: [
        e.jsx(ke, {
          x: 80,
          y: 14,
          w: 240,
          h: 38,
          gap: 10,
          labels: ["HTTP  HTTPS  FTP  SMTP", "TCP", "IP", "ETHERNET  WI-FI"],
        }),
        e.jsx($, { x: 30, y: 10, w: 30 }),
        e.jsx(L, { d: "M45 36V186", dashed: !1 }),
        e.jsx("path", {
          d: "M37 178l8 10 8-10",
          fill: "none",
          ...o,
          strokeWidth: 2.4,
        }),
        e.jsx($, { x: 340, y: 180, w: 30 }),
        e.jsx(L, { d: "M355 174V24", dashed: !1 }),
        e.jsx("path", {
          d: "M347 32l8-10 8 10",
          fill: "none",
          ...o,
          strokeWidth: 2.4,
        }),
      ],
    });
  const t = ["TCP", "IP", "ETHERNET"];
  return e.jsxs("svg", {
    viewBox: "0 0 400 210",
    width: 400,
    className: "pp-card-picture",
    "aria-hidden": "true",
    "data-card-picture": "layer-swap",
    children: [
      e.jsx(ke, {
        x: 24,
        y: 14,
        w: 140,
        h: 38,
        gap: 10,
        labels: ["HTTP", ...t],
      }),
      e.jsx(ke, {
        x: 236,
        y: 14,
        w: 140,
        h: 38,
        gap: 10,
        labels: ["HTTPS", ...t],
        changed: 0,
      }),
      e.jsx(L, { d: "M174 33H222", dashed: !1, color: N }),
      e.jsx("path", {
        d: "M214 25l9 8-9 8",
        fill: "none",
        stroke: N,
        strokeWidth: 2.4,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      [1, 2, 3].map((r) =>
        e.jsx(W, { x: 200, y: 14 + r * 48 + 25, size: "l", children: "=" }, r),
      ),
    ],
  });
}
const ls = Pt["1.3"] ?? [];
function B(s) {
  const t = ls.find((r) => r.term === s);
  if (!t) throw new Error(`No 1.3 keyword "${s}"`);
  return t;
}
const Ke = B("TCP (Transmission Control Protocol)"),
  cs = B("IP (Internet Protocol)"),
  wt = B("HyperText Transfer Protocol (HTTP) / Secure (HTTPS)"),
  [ds = "", hs = ""] = wt.definition.split("; "),
  Ve = B("File Transfer Protocol (FTP)"),
  Xe = B("SMTP (Simple Mail Transfer Protocol)"),
  qe = B("POP (Post Office Protocol)"),
  Je = B("IMAP (Internet Message Access Protocol)"),
  Qe = B("Layering"),
  T = (s) => {
    const t = s.trim(),
      r = t.charAt(0).toUpperCase() + t.slice(1);
    return /[.!?]$/.test(r) ? r : `${r}.`;
  },
  ve = [
    {
      id: "protocol",
      stamp: null,
      term: "Protocol",
      name: "A set of rules",
      definition:
        "A set of rules for transferring data between devices. Different protocols are used for different jobs.",
      example:
        "Your phone and a web server follow the same protocol, so they understand each other.",
      picture: null,
    },
    {
      id: "tcpip",
      stamp: "tcpip",
      term: "TCP/IP",
      name: "Transmission Control Protocol / Internet Protocol",
      definition: `TCP: ${T(Ke.definition)} IP: ${T(cs.definition)}`,
      example: T(Ke.example ?? ""),
      picture: null,
    },
    {
      id: "http",
      stamp: "http",
      term: "HTTP",
      name: "HyperText Transfer Protocol",
      definition: T(ds.replace(/^Protocols for /, "A protocol for ")),
      example:
        "Typing a web address asks the web server for the page, and the browser shows it.",
      picture: null,
    },
    {
      id: "https",
      stamp: "https",
      term: "HTTPS",
      name: "HyperText Transfer Protocol Secure",
      definition: T(hs.replace(/^HTTPS also /, "Like HTTP, but it also ")),
      example: T(wt.example ?? ""),
      picture: "wifi-snoop",
    },
    {
      id: "ftp",
      stamp: "ftp",
      term: "FTP",
      name: "File Transfer Protocol",
      definition: T(Ve.definition),
      example: T(Ve.example ?? ""),
      picture: "upload-pages",
    },
    {
      id: "smtp",
      stamp: "smtp",
      term: "SMTP",
      name: "Simple Mail Transfer Protocol",
      definition: T(Xe.definition),
      example: T(Xe.example ?? ""),
      picture: "send-all",
    },
    {
      id: "pop",
      stamp: "pop",
      term: "POP",
      name: "Post Office Protocol",
      definition: T(qe.definition),
      example: T(qe.example ?? ""),
      picture: "no-signal",
    },
    {
      id: "imap",
      stamp: "imap",
      term: "IMAP",
      name: "Internet Message Access Protocol",
      definition: T(Je.definition),
      example: T(Je.example ?? ""),
      picture: "lost-device",
    },
    {
      id: "layers",
      stamp: null,
      term: "Layers",
      name: "Protocols in groups",
      definition: T(Qe.definition),
      example: T(Qe.example ?? ""),
      picture: null,
      layers: "stack",
    },
    {
      id: "why-layers",
      stamp: null,
      term: "Why layers",
      name: "Why protocols have layers",
      definition:
        "Each layer is self-contained, so one layer can be changed without affecting the others. Developers can specialise in one layer, and standards for each layer let products from different manufacturers work together.",
      example:
        "A website moves from HTTP to HTTPS. Only the layer HTTP works in changes, and TCP/IP carries on exactly as before.",
      picture: null,
      layers: "swap",
    },
  ],
  ps = /\b(TCP\/IP|HTTPS|HTTP|FTP|POP|IMAP|SMTP)\b/,
  I = (s) => Nt(s, ps, "pp-keyword"),
  kt = 1600,
  xs = 1100,
  us = kt + xs,
  ne = 92,
  Pe = 120 - ne / 2,
  Ne = 36,
  ms = Pe + ne / 2,
  fs = Ne + (ne * 80) / 68 / 2;
function js({ job: s, stamp: t, outcome: r, onDone: n }) {
  const [i, a] = g.useState(!1),
    l = g.useRef(n);
  ((l.current = n),
    g.useEffect(() => {
      const m = window.setTimeout(() => a(!0), kt),
        y = window.setTimeout(() => l.current(), us);
      return () => {
        (window.clearTimeout(m), window.clearTimeout(y));
      };
    }, []));
  const x = A(t).label,
    d = r === "delivered",
    h = i ? (d ? st : We) : p;
  return e.jsxs("div", {
    className: "pp-page pp-beat",
    "data-stage": "event",
    "data-reveal-beat": i ? r : "sending",
    children: [
      e.jsx("p", {
        className: "sr-only",
        "aria-live": "polite",
        children: i
          ? d
            ? "Delivered."
            : "Returned to sender."
          : `Sending by ${x}.`,
      }),
      e.jsxs("svg", {
        viewBox: "0 0 240 240",
        className: "pp-beat-art",
        "aria-hidden": "true",
        children: [
          e.jsx("rect", { width: 240, height: 240, rx: 18, fill: ie }),
          e.jsx("path", {
            d: "M17 231 H223",
            fill: "none",
            stroke: q,
            strokeWidth: 3,
            strokeDasharray: "8 10",
            className: "pp-beat-route",
          }),
          i
            ? null
            : [0, 1, 2].map((m) =>
                e.jsx(
                  "circle",
                  {
                    cx: ms,
                    cy: fs,
                    r: 48,
                    fill: "none",
                    stroke: Ie,
                    strokeWidth: 3,
                    className: "pp-beat-ring",
                    style: { animationDelay: `${m * 0.5}s` },
                  },
                  m,
                ),
              ),
          e.jsxs("g", {
            className: "pp-beat-envelope",
            children: [
              e.jsx("rect", {
                x: 24,
                y: 104,
                width: 192,
                height: 116,
                rx: 10,
                fill: h,
                stroke: f,
                strokeWidth: 2.5,
              }),
              e.jsx("path", {
                d: "M24 112 L120 172 L216 112",
                fill: "none",
                stroke: f,
                strokeWidth: 2,
                strokeLinejoin: "round",
              }),
              e.jsx("g", {
                transform: "translate(34 162)",
                children: e.jsx(ht, { job: s }),
              }),
              e.jsx("g", {
                className: "pp-beat-stamp",
                children: e.jsx(K, { id: t, x: Pe, y: Ne, w: ne }),
              }),
            ],
          }),
          i
            ? e.jsx("g", {
                className: "pp-beat-mark",
                "data-mark": r,
                children: e.jsx("g", {
                  transform: `translate(${Pe + ne - 26} ${Ne - 14})`,
                  children: e.jsx(Q, { outcome: r, size: 60 }),
                }),
              })
            : null,
        ],
      }),
      e.jsxs("p", {
        className: "pp-postmark pp-beat-postmark",
        "data-postmark": r,
        "data-shown": i ? "true" : "false",
        "aria-hidden": "true",
        children: [
          e.jsx(Q, { outcome: r, size: 24 }),
          d ? "Delivered" : "Returned to sender",
        ],
      }),
    ],
  });
}
const gs = 6,
  Ze = 72,
  et = 14;
function ys(s, t, r) {
  const n = window.innerHeight - r,
    i = t < Ze ? -et : t > n - Ze && t < n ? et : 0;
  if (!i) return;
  const a = s.closest("[data-topic-game]");
  a && a.scrollHeight > a.clientHeight
    ? (a.scrollTop += i)
    : document.scrollingElement && (document.scrollingElement.scrollTop += i);
}
function bs({ onDrop: s, bottomInset: t = () => 0 }) {
  const [r, n] = g.useState(null),
    i = g.useRef(new Map()),
    a = g.useRef(!1);
  function l(d, h) {
    for (const [m, y] of i.current) {
      const w = y.getBoundingClientRect();
      if (d >= w.left && d <= w.right && h >= w.top && h <= w.bottom) return m;
    }
    return null;
  }
  const x = r?.moved ? r : null;
  return {
    dragging: x?.item ?? null,
    over: x?.over ?? null,
    ghost: x ? { x: x.x, y: x.y } : null,
    target: (d) => (h) => {
      h ? i.current.set(d, h) : i.current.delete(d);
    },
    handle: (d) => ({
      onPointerDown(h) {
        if (((a.current = !1), h.pointerType === "mouse" && h.button !== 0))
          return;
        h.currentTarget.setPointerCapture?.(h.pointerId);
        const { clientX: m, clientY: y } = h;
        n({
          item: d,
          pointerId: h.pointerId,
          startX: m,
          startY: y,
          x: m,
          y,
          moved: !1,
          over: null,
        });
      },
      onPointerMove(h) {
        if (!r || h.pointerId !== r.pointerId) return;
        const { clientX: m, clientY: y } = h,
          w = r.moved || Math.hypot(m - r.startX, y - r.startY) > gs;
        (w && (h.preventDefault(), ys(h.currentTarget, y, t())),
          n({ ...r, x: m, y, moved: w, over: w ? l(m, y) : null }));
      },
      onPointerUp(h) {
        if (!r || h.pointerId !== r.pointerId || (n(null), !r.moved)) return;
        a.current = !0;
        const m = l(h.clientX, h.clientY);
        m && s(r.item, m);
      },
      onPointerCancel() {
        n(null);
      },
    }),
    endedDrag() {
      const d = a.current;
      return ((a.current = !1), d);
    },
  };
}
function Rs() {
  Mt();
  const [s, t] = g.useState({ type: "landing" }),
    [r, n] = g.useState("ambulance"),
    [i, a] = g.useState(1),
    [l, x] = g.useState({}),
    [d, h] = g.useState([]),
    [m, y] = g.useState(() => new Set()),
    w = Dt(r),
    j = Le(i),
    k = Me(j).length,
    S =
      s.type === "event"
        ? s.round + (s.phase === "result" ? 1 : 0)
        : s.type === "summary"
          ? k
          : 0,
    R =
      s.type === "landing" ||
      s.type === "cards" ||
      s.type === "pick" ||
      s.type === "story"
        ? 0
        : j.jobs.filter((b) => l[b]).length,
    X = (b) => !m.has(b) && l[b] === Z[b],
    oe = j.jobs.filter(X).length + Me(j).filter(X).length;
  vt(R + S, j.jobs.length + k, oe);
  const le =
      s.type === "event"
        ? `event-${s.round}-${s.phase === "event" ? "setup" : "beat"}`
        : s.type,
    U = g.useRef(null);
  g.useEffect(() => {
    if (le === "landing") return;
    const b = U.current?.closest('[data-topic-game][data-fullscreen="true"]');
    b
      ? ((b.scrollTop = 0),
        (document.documentElement.scrollTop = 0),
        (document.body.scrollTop = 0))
      : (U.current?.getBoundingClientRect().top ?? 0) < 0 &&
        U.current?.scrollIntoView?.({ block: "start" });
  }, [le]);
  function je(b) {
    (n(b), t({ type: "story" }));
  }
  function u(b = i) {
    (a(b), x({}), h([]), y(new Set()), t({ type: "board" }));
  }
  function v() {
    ft(l, j.jobs) &&
      (h(Bt(w.events, j)), t({ type: "event", round: 0, phase: "event" }));
  }
  let M;
  switch (s.type) {
    case "landing":
      M = e.jsx(ws, { onStart: () => t({ type: "cards" }) });
      break;
    case "cards":
      M = e.jsx(vs, { onDone: () => t({ type: "pick" }) });
      break;
    case "pick":
      M = e.jsx(ks, { round: i, onRound: a, onPick: je });
      break;
    case "story":
      M = e.jsx(Ts, {
        org: w,
        onBegin: () => u(),
        onBack: () => t({ type: "pick" }),
      });
      break;
    case "board":
      M = e.jsx(Ms, {
        org: w,
        round: j,
        stamps: l,
        onStamp: (b, Y) => x((ce) => ({ ...ce, [b]: Y })),
        onClear: (b) =>
          x((Y) => {
            const ce = { ...Y };
            return (delete ce[b], ce);
          }),
        onMiss: (b) => y((Y) => (Y.has(b) ? Y : new Set(Y).add(b))),
        onStart: v,
      });
      break;
    case "event":
      M = e.jsx(
        Ps,
        {
          org: w,
          stamps: l,
          week: d,
          round: s.round,
          phase: s.phase,
          onReveal: () =>
            t({ type: "event", round: s.round, phase: "sending" }),
          onRevealed: () =>
            t({ type: "event", round: s.round, phase: "result" }),
          onNext: () =>
            t(
              s.round === d.length - 1
                ? { type: "summary" }
                : { type: "event", round: s.round + 1, phase: "event" },
            ),
        },
        s.round,
      );
      break;
    case "summary":
      M = e.jsx(Ns, {
        org: w,
        round: j,
        stamps: l,
        week: d,
        onNextRound: j.id < 3 ? () => u(j.id + 1) : void 0,
        onPlayAgain: () => u(),
        onPickAnother: () => t({ type: "pick" }),
      });
      break;
  }
  return e.jsx("div", {
    ref: U,
    className: "protocol-post",
    "data-protocol-post": s.type,
    "data-org":
      s.type === "landing" || s.type === "cards" || s.type === "pick"
        ? void 0
        : r,
    "data-round": s.type === "landing" || s.type === "cards" ? void 0 : i,
    children: M,
  });
}
function ws({ onStart: s }) {
  return e.jsxs("div", {
    className: "game-landing pp-landing",
    style: { "--landing-glow": "rgba(200, 66, 59, 0.45)" },
    "data-game-landing": !0,
    children: [
      e.jsx(Ye, { layout: "tall" }),
      e.jsx(Ye, { layout: "wide" }),
      e.jsx("h2", { className: "sr-only", children: "Protocol Post" }),
      e.jsx("button", {
        type: "button",
        className: "game-landing-start pp-button pp-primary",
        onClick: s,
        children: "Start your shift",
      }),
    ],
  });
}
function ks({ round: s, onRound: t, onPick: r }) {
  return e.jsxs("div", {
    className: "pp-page",
    "data-stage": "pick",
    children: [
      e.jsx("h2", { className: "pp-title", children: "Pick a round" }),
      e.jsx("ul", {
        className: "pp-rounds",
        "aria-label": "Rounds",
        children: mt.map((n) =>
          e.jsx(
            "li",
            {
              children: e.jsxs("button", {
                type: "button",
                className: "pp-round",
                "data-round-card": n.id,
                "aria-pressed": s === n.id,
                onClick: () => t(n.id),
                children: [
                  e.jsxs("span", {
                    className: "pp-round-name",
                    children: ["Round ", n.id, ": ", n.label],
                  }),
                  e.jsx("span", {
                    className: "pp-round-stamps",
                    "aria-hidden": "true",
                    children: n.stamps.map((i) => e.jsx(pt, { id: i }, i)),
                  }),
                ],
              }),
            },
            n.id,
          ),
        ),
      }),
      e.jsx("h2", { className: "pp-title", children: "Pick a story" }),
      e.jsx("ul", {
        className: "pp-orgs",
        children: Ce.map((n) =>
          e.jsx(
            "li",
            {
              children: e.jsxs("button", {
                type: "button",
                className: "pp-org-card",
                "data-story-card": "picker",
                "data-org-card": n.id,
                onClick: () => r(n.id),
                children: [
                  e.jsx(bt, { org: n.id }),
                  e.jsx("span", {
                    className: "pp-org-story",
                    children: n.story.title,
                  }),
                  e.jsx("span", { className: "pp-org-name", children: n.name }),
                  e.jsx("span", { className: "pp-org-kind", children: n.kind }),
                ],
              }),
            },
            n.id,
          ),
        ),
      }),
    ],
  });
}
function vs({ onDone: s }) {
  const [t, r] = g.useState(0),
    [n, i] = g.useState(!1),
    a = ve[t],
    l = t === ve.length - 1;
  function x(d) {
    (r(d), i(!1));
  }
  return e.jsxs("div", {
    className: "pp-page pp-cards",
    "data-stage": "cards",
    children: [
      e.jsxs("div", {
        className: "pp-cards-head",
        children: [
          e.jsx("h2", { className: "pp-title", children: "Know your stamps" }),
          e.jsx("button", {
            type: "button",
            className: "pp-button pp-quiet",
            onClick: s,
            children: "Skip to the stories",
          }),
        ],
      }),
      e.jsx("button", {
        type: "button",
        className: "pp-card",
        "data-story-card": "flashcard",
        "data-card": a.id,
        "data-turned": n,
        "aria-label": n
          ? `${a.term}. ${a.definition} ${a.example}`
          : `${a.term}, ${a.name}. Turn over.`,
        onClick: () => i((d) => !d),
        children: n
          ? e.jsxs("span", {
              className: "pp-card-back",
              children: [
                e.jsx("span", { className: "pp-card-term", children: a.term }),
                a.picture
                  ? e.jsx(is, { kind: a.picture })
                  : a.layers
                    ? e.jsx(Ge, { variant: a.layers })
                    : null,
                e.jsx("span", {
                  className: "pp-card-definition",
                  children: I(a.definition),
                }),
                e.jsx("span", {
                  className: "pp-card-example",
                  children: I(a.example),
                }),
              ],
            })
          : e.jsxs("span", {
              className: "pp-card-front",
              children: [
                a.stamp
                  ? e.jsx(K, {
                      id: a.stamp,
                      className: "pp-card-stamp",
                      w: 150,
                    })
                  : a.layers
                    ? e.jsx(Ge, { variant: a.layers })
                    : e.jsx(as, {}),
                e.jsx("span", { className: "pp-card-term", children: a.term }),
                e.jsx("span", { className: "pp-card-name", children: a.name }),
                e.jsx("span", {
                  className: "pp-card-turn",
                  children: "Tap to turn over",
                }),
              ],
            }),
      }),
      e.jsxs("div", {
        className: "pp-cards-nav",
        children: [
          e.jsx("button", {
            type: "button",
            className: "pp-button",
            onClick: () => x(t - 1),
            disabled: t === 0,
            children: "Back",
          }),
          e.jsxs("p", {
            className: "pp-cards-count",
            children: [t + 1, " of ", ve.length],
          }),
          l
            ? e.jsx("button", {
                type: "button",
                className: "pp-button pp-primary",
                onClick: s,
                children: "Pick a story",
              })
            : e.jsx("button", {
                type: "button",
                className: "pp-button pp-primary",
                onClick: () => x(t + 1),
                children: "Next",
              }),
        ],
      }),
    ],
  });
}
function Ts({ org: s, onBegin: t, onBack: r }) {
  return e.jsxs("div", {
    className: "pp-page pp-story",
    "data-stage": "story",
    "data-story-card": "story",
    children: [
      e.jsx("div", {
        className: "pp-story-scene",
        children: e.jsx(bt, { org: s.id }),
      }),
      e.jsxs("div", {
        className: "pp-story-text",
        children: [
          e.jsx("p", { className: "pp-story-org", children: s.name }),
          e.jsx("h2", { className: "pp-title", children: s.story.title }),
          e.jsx("p", {
            className: "pp-story-premise",
            children: s.story.premise,
          }),
          e.jsx("ul", {
            className: "pp-cast",
            "aria-label": "Who you work with",
            children: Object.entries(s.colleagues).map(([n, i]) =>
              e.jsxs(
                "li",
                {
                  children: [
                    e.jsx(dt, { creature: i.creature, org: s.id, size: 48 }),
                    e.jsx("span", { children: i.role }),
                  ],
                },
                n,
              ),
            ),
          }),
          e.jsxs("div", {
            className: "pp-nav",
            children: [
              e.jsx("button", {
                type: "button",
                className: "pp-button pp-primary",
                onClick: t,
                children: "Open the sorting board",
              }),
              e.jsx("button", {
                type: "button",
                className: "pp-button",
                onClick: r,
                children: "Another story",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ms({
  org: s,
  round: t,
  stamps: r,
  onStamp: n,
  onClear: i,
  onMiss: a,
  onStart: l,
}) {
  const [x, d] = g.useState(null),
    [h, m] = g.useState(null),
    [y, w] = g.useState(null),
    j = g.useRef(null),
    k = bs({
      onDrop: (u, v) => U(v, u),
      bottomInset: () =>
        j.current && getComputedStyle(j.current).position === "fixed"
          ? j.current.offsetHeight
          : 0,
    }),
    S = t.jobs.filter((u) => r[u]).length,
    te = t.jobs.length,
    R = ft(r, t.jobs),
    X = k.dragging ?? x,
    [oe, le] = g.useState(null);
  (g.useEffect(() => {
    const u = j.current;
    if (!u || typeof ResizeObserver > "u") return;
    const v = new ResizeObserver(() => le(u.offsetHeight));
    return (v.observe(u), () => v.disconnect());
  }, []),
    g.useEffect(() => {
      if (!x) return;
      const u = (v) => {
        v.key === "Escape" && d(null);
      };
      return (
        window.addEventListener("keydown", u),
        () => window.removeEventListener("keydown", u)
      );
    }, [x]));
  function U(u, v) {
    (d(null),
      Ft(s.jobs[u], v)
        ? (n(u, v), m(null), w(u))
        : (m({ job: u, protocol: v }), w(null), a(u)));
  }
  function je(u) {
    x ? U(u, x) : r[u] && (i(u), m(null));
  }
  return e.jsxs("div", {
    className: "pp-page pp-board",
    "data-stage": "board",
    "data-story-card": "decision",
    style: oe ? { "--pp-tray-h": `${oe}px` } : void 0,
    children: [
      e.jsxs("div", {
        className: "pp-board-head",
        children: [
          e.jsx("h2", { className: "pp-title", children: "Stamp every job" }),
          e.jsxs("span", {
            className: "pp-chip",
            children: ["Round ", t.id, " · ", s.name],
          }),
        ],
      }),
      e.jsx("ul", {
        className: "pp-jobs",
        "aria-label": "Jobs",
        children: t.jobs.map((u) => {
          const v = s.jobs[u],
            M = r[u],
            b = h?.job === u ? h.protocol : null;
          return e.jsxs(
            "li",
            {
              className: "pp-job",
              "data-job": u,
              "data-stamped": M,
              "data-over": k.over === u ? "true" : void 0,
              "data-returned": b ?? void 0,
              children: [
                e.jsx(ht, { job: u }),
                e.jsx("p", { className: "pp-job-text", children: I(v.text) }),
                e.jsx("button", {
                  type: "button",
                  ref: k.target(u),
                  className: "pp-slot",
                  "data-slot": u,
                  "data-landed": y === u ? "true" : void 0,
                  "aria-label": M
                    ? `${v.text} Stamped ${A(M).label}.`
                    : `${v.text} No stamp yet.`,
                  onClick: () => je(u),
                  children: M
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(K, { id: M, className: "pp-slot-stamp" }),
                          e.jsx(It, { frank: s.frank, day: "MON" }),
                        ],
                      })
                    : e.jsx("span", {
                        className: "pp-slot-empty",
                        "aria-hidden": "true",
                        children: "Stamp",
                      }),
                }),
                b
                  ? e.jsxs("p", {
                      className: "pp-returned",
                      "data-returned-note": b,
                      children: [
                        e.jsx(Q, { outcome: "returned", size: 20 }),
                        e.jsxs("span", {
                          children: [
                            e.jsxs("strong", {
                              children: [A(b).label, " won’t stick here."],
                            }),
                            " ",
                            I(A(b).purpose),
                          ],
                        }),
                      ],
                    })
                  : null,
              ],
            },
            u,
          );
        }),
      }),
      e.jsxs("div", {
        ref: j,
        className: "pp-tray",
        "data-picked": x ?? void 0,
        children: [
          e.jsx("p", {
            className: "pp-tray-info",
            "aria-live": "polite",
            children: X
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("strong", { children: A(X).label }),
                    " ",
                    I(A(X).purpose),
                  ],
                })
              : R
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsxs("strong", { children: [S, " of ", te] }),
                      " ",
                      "stamped",
                    ],
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      e.jsxs("strong", { children: [S, " of ", te] }),
                      " ",
                      "Drag a stamp onto a job, or tap a stamp then a job.",
                    ],
                  }),
          }),
          e.jsxs("div", {
            className: "pp-tray-row",
            children: [
              e.jsx("ul", {
                className: "pp-sheet",
                "aria-label": "Stamps",
                children: t.stamps.map(A).map((u) =>
                  e.jsx(
                    "li",
                    {
                      children: e.jsx("button", {
                        type: "button",
                        className: "pp-stamp",
                        "data-stamp": u.id,
                        "aria-pressed": x === u.id,
                        "aria-label": u.label,
                        "data-dragging": k.dragging === u.id ? "true" : void 0,
                        ...k.handle(u.id),
                        onClick: () => {
                          k.endedDrag() ||
                            (m(null), d((v) => (v === u.id ? null : u.id)));
                        },
                        children: e.jsx(pt, { id: u.id }),
                      }),
                    },
                    u.id,
                  ),
                ),
              }),
              R
                ? e.jsx("button", {
                    type: "button",
                    className: "pp-button pp-primary pp-start",
                    onClick: l,
                    children: "Start the week",
                  })
                : null,
            ],
          }),
        ],
      }),
      k.ghost && k.dragging
        ? e.jsx("div", {
            className: "pp-ghost",
            style: { left: k.ghost.x, top: k.ghost.y },
            "aria-hidden": "true",
            children: e.jsx(K, { id: k.dragging }),
          })
        : null,
    ],
  });
}
function $s({ org: s, week: t, stamps: r, upTo: n, current: i }) {
  return e.jsx("ol", {
    className: "pp-week",
    "aria-label": `The week at ${s.name}`,
    children: t.map((a, l) => {
      const x = l < n ? Re(a, r) : void 0;
      return e.jsxs(
        "li",
        {
          "data-outcome": x,
          "aria-current": l === i ? "step" : void 0,
          children: [
            e.jsx("span", {
              className: "pp-week-day",
              children: jt[s.events.indexOf(a)],
            }),
            x
              ? e.jsx(Q, { outcome: x, size: 18 })
              : e.jsx("span", {
                  className: "pp-week-dot",
                  "aria-hidden": "true",
                }),
            e.jsx("span", {
              className: "sr-only",
              children:
                x === "delivered"
                  ? "delivered"
                  : x === "returned"
                    ? "returned"
                    : "to come",
            }),
          ],
        },
        a.kind,
      );
    }),
  });
}
function Ps({
  org: s,
  stamps: t,
  week: r,
  round: n,
  phase: i,
  onReveal: a,
  onRevealed: l,
  onNext: x,
}) {
  const d = $t(),
    h = r[n],
    m = ae[h.kind],
    y = s.jobs[m.job],
    w = t[m.job],
    j = Re(h, t),
    k = h[j],
    S = s.colleagues[k.from],
    te = n === r.length - 1;
  if (i === "sending")
    return e.jsx(js, { job: m.job, stamp: w, outcome: j, onDone: l });
  const R = i === "result";
  return e.jsxs("div", {
    className: "pp-page pp-event",
    "data-stage": "event",
    "data-story-card": "event",
    "data-event": h.kind,
    "data-phase": R ? "result" : "event",
    "data-outcome": R ? j : void 0,
    children: [
      e.jsx("div", {
        className: "pp-event-scene",
        children: e.jsx(rs, {
          org: s.id,
          event: h,
          state: R ? j : "before",
          layout: d ? "tall" : "wide",
        }),
      }),
      e.jsxs("div", {
        className: "pp-event-panel",
        children: [
          e.jsx($s, {
            org: s,
            week: r,
            stamps: t,
            upTo: R ? n + 1 : n,
            current: n,
          }),
          e.jsxs("p", {
            className: "pp-when",
            children: [jt[s.events.indexOf(h)], " ", h.time],
          }),
          R
            ? e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("p", {
                    className: "pp-postmark",
                    "data-postmark": j,
                    children: [
                      e.jsx(Q, { outcome: j, size: 24 }),
                      j === "delivered" ? "Delivered" : "Returned to sender",
                    ],
                  }),
                  e.jsx("h2", {
                    className: "pp-title",
                    children: I(k.headline),
                  }),
                  e.jsxs("figure", {
                    className: "pp-message",
                    "data-tone": j,
                    children: [
                      e.jsx(dt, { creature: S.creature, org: s.id, size: 56 }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("figcaption", { children: S.role }),
                          e.jsx("blockquote", { children: I(k.message) }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("p", { className: "pp-lesson", children: I(m.lesson) }),
                  j === "returned"
                    ? e.jsxs("div", {
                        className: "pp-needed",
                        children: [
                          e.jsx(K, {
                            id: Z[m.job],
                            className: "pp-mini-stamp",
                          }),
                          e.jsxs("p", {
                            children: [
                              e.jsxs("strong", {
                                children: ["Needed: ", A(Z[m.job]).label],
                              }),
                              e.jsxs("span", {
                                children: ["You stamped ", A(w).label],
                              }),
                            ],
                          }),
                        ],
                      })
                    : null,
                  e.jsx("button", {
                    type: "button",
                    className: "pp-button pp-primary",
                    onClick: x,
                    children: te ? "See the summary" : "Next day",
                  }),
                ],
              })
            : e.jsxs(e.Fragment, {
                children: [
                  e.jsx("h2", { className: "pp-title", children: h.title }),
                  e.jsx("p", { className: "pp-setup", children: I(h.setup) }),
                  e.jsxs("div", {
                    className: "pp-your-stamp",
                    children: [
                      e.jsx(K, { id: w, className: "pp-mini-stamp" }),
                      e.jsx("p", { children: I(y.text) }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    className: "pp-button pp-primary",
                    onClick: a,
                    children: "See what happens",
                  }),
                ],
              }),
        ],
      }),
    ],
  });
}
function Ns({
  org: s,
  round: t,
  stamps: r,
  week: n,
  onNextRound: i,
  onPlayAgain: a,
  onPickAnother: l,
}) {
  const x = n.map((y) => Re(y, r)),
    d = x.filter((y) => y === "delivered").length,
    h = n.length,
    m = Ut(d, s.story, h);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "pp-page pp-summary",
        "data-stage": "summary",
        "data-story-card": "verdict",
        "data-delivered": d,
        children: [
          e.jsxs("div", {
            className: "pp-verdict",
            children: [
              e.jsx("p", {
                className: "pp-verdict-stamp",
                "data-verdict":
                  d === h ? "first" : d * 2 >= h ? "most" : "lost",
                children: m.title,
              }),
              e.jsxs("h2", {
                className: "pp-title",
                children: [d, " of ", h, " delivered"],
              }),
              e.jsx("p", { className: "pp-verdict-line", children: m.line }),
            ],
          }),
          e.jsx("ul", {
            className: "pp-rows",
            "aria-label": `Your stamps at ${s.name}`,
            children: n.map((y, w) => {
              const j = ae[y.kind],
                k = r[j.job],
                S = x[w];
              return e.jsxs(
                "li",
                {
                  className: "pp-row",
                  "data-row": j.job,
                  "data-outcome": S,
                  children: [
                    e.jsx(Q, { outcome: S }),
                    e.jsx("span", {
                      className: "pp-row-job",
                      children: I(s.jobs[j.job].text),
                    }),
                    e.jsxs("span", {
                      className: "pp-row-stamps",
                      children: [
                        e.jsx("span", {
                          className: "pp-row-stamp",
                          "data-tone": S,
                          children: A(k).label,
                        }),
                        S === "returned"
                          ? e.jsxs("span", {
                              className: "pp-row-needed",
                              children: ["Needed ", A(Z[j.job]).label],
                            })
                          : null,
                      ],
                    }),
                  ],
                },
                y.kind,
              );
            }),
          }),
          e.jsxs("div", {
            className: "pp-nav",
            children: [
              i
                ? e.jsxs("button", {
                    type: "button",
                    className: "pp-button pp-primary",
                    onClick: i,
                    children: ["Round ", t.id + 1, ": ", Le(t.id + 1).label],
                  })
                : null,
              e.jsx("button", {
                type: "button",
                className: i ? "pp-button" : "pp-button pp-primary",
                onClick: a,
                children: "Play again",
              }),
              e.jsx("button", {
                type: "button",
                className: "pp-button",
                onClick: l,
                children: "Another story",
              }),
            ],
          }),
        ],
      }),
      e.jsx(Tt, { game: "protocol-post" }),
    ],
  });
}
export { Rs as default };
