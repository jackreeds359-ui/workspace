import { r as b, j as e } from "./react-vendor-BK1G6oO1.js";
import {
  b6 as U,
  bm as Y,
  a8 as ke,
  a7 as Ee,
  R as we,
  ae as Te,
  P as Ie,
} from "./index-DjyiOHey.js";
import { aq as Re, aT as Pe } from "./GameNotebook-b0Qw2wzd.js";
import { a as Fe, f as He, L as he, m as R } from "./proxy-DGk2Wawc.js";
import { A as qe } from "./index-B24ohNs7.js";
import "./ui-components-DeMDYLzO.js";
const Oe = b.createContext(null);
function Qe() {
  const t = b.useRef(!1);
  return (
    Fe(
      () => (
        (t.current = !0),
        () => {
          t.current = !1;
        }
      ),
      [],
    ),
    t
  );
}
function De() {
  const t = Qe(),
    [s, n] = b.useState(0),
    a = b.useCallback(() => {
      t.current && n(s + 1);
    }, [s]);
  return [b.useCallback(() => He.postRender(a), [a]), s];
}
const _e = (t) => !t.isLayoutDirty && t.willUpdate(!1);
function xe() {
  const t = new Set(),
    s = new WeakMap(),
    n = () => t.forEach(_e);
  return {
    add: (a) => {
      (t.add(a), s.set(a, a.addEventListener("willUpdate", n)));
    },
    remove: (a) => {
      t.delete(a);
      const i = s.get(a);
      (i && (i(), s.delete(a)), n());
    },
    dirty: n,
  };
}
const ve = (t) => t === !0,
  Ve = (t) => ve(t === !0) || t === "id",
  ze = ({ children: t, id: s, inherit: n = !0 }) => {
    const a = b.useContext(he),
      i = b.useContext(Oe),
      [r, c] = De(),
      f = b.useRef(null),
      h = a.id || i;
    f.current === null &&
      (Ve(n) && h && (s = s ? h + "-" + s : h),
      (f.current = { id: s, group: (ve(n) && a.group) || xe() }));
    const m = b.useMemo(() => ({ ...f.current, forceRender: r }), [c]);
    return e.jsx(he.Provider, { value: m, children: t });
  },
  k = "#2b1d14",
  o = { stroke: k, strokeWidth: 2.2, strokeLinejoin: "round" },
  oe = "#d98a3d",
  Ke = "#b8692a",
  $e = "#fff4dc",
  E = ["#f2c9a0", "#c98e62", "#8d5a3b", "#f5d6b8"];
function ne({ x: t, y: s, skin: n = E[0], smile: a = !0 }) {
  return e.jsxs("g", {
    transform: `translate(${t} ${s})`,
    children: [
      e.jsx("circle", { r: "13", fill: n, ...o }),
      e.jsx("circle", { cx: "-4.5", cy: "-2", r: "1.8", fill: k }),
      e.jsx("circle", { cx: "4.5", cy: "-2", r: "1.8", fill: k }),
      e.jsx("ellipse", {
        cx: "-8",
        cy: "3.5",
        rx: "2.6",
        ry: "1.6",
        fill: "#ff8f8f",
        opacity: ".5",
      }),
      e.jsx("ellipse", {
        cx: "8",
        cy: "3.5",
        rx: "2.6",
        ry: "1.6",
        fill: "#ff8f8f",
        opacity: ".5",
      }),
      e.jsx("path", {
        d: a ? "M-4 4 Q0 8 4 4" : "M-3.5 6 Q0 4 3.5 6",
        fill: "none",
        stroke: k,
        strokeWidth: "1.8",
        strokeLinecap: "round",
      }),
    ],
  });
}
function Ne({ x: t, y: s, skin: n = E[1], flip: a = !1 }) {
  return e.jsxs("g", {
    transform: `translate(${t} ${s}) scale(${a ? -1 : 1} 1)`,
    children: [
      e.jsx("path", {
        d: "M-15 0 V-40 Q-15 -52 0 -52 Q15 -52 15 -40 V0 Z",
        fill: "#f8f8f4",
        ...o,
      }),
      e.jsx("path", { d: "M-10 -38 H10 V0 H-10 Z", fill: "#e8b4b8", ...o }),
      e.jsx("path", {
        d: "M-15 -42 L-24 -24",
        stroke: k,
        strokeWidth: "6",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M-15 -42 L-24 -24",
        stroke: "#f8f8f4",
        strokeWidth: "3.4",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M15 -42 L24 -26",
        stroke: k,
        strokeWidth: "6",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M15 -42 L24 -26",
        stroke: "#f8f8f4",
        strokeWidth: "3.4",
        strokeLinecap: "round",
      }),
      e.jsx(ne, { x: 0, y: -64, skin: n }),
      e.jsx("path", {
        d: "M-12 -74 Q-18 -90 -6 -90 Q0 -100 7 -90 Q19 -90 12 -74 Z",
        fill: "#ffffff",
        ...o,
      }),
    ],
  });
}
function V({ x: t, y: s, w: n = 36 }) {
  return e.jsxs("g", {
    transform: `translate(${t} ${s})`,
    children: [
      e.jsx("path", {
        d: `M0 0 Q0 -${n * 0.55} ${n / 2} -${n * 0.55} Q${n} -${n * 0.55} ${n} 0 Z`,
        fill: oe,
        ...o,
      }),
      e.jsx("path", {
        d: `M${n * 0.28} -${n * 0.38} l4 6 M${n * 0.48} -${n * 0.42} l4 6 M${n * 0.68} -${n * 0.38} l4 6`,
        stroke: $e,
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
    ],
  });
}
function P({ x: t, y: s, r: n = 8 }) {
  return e.jsxs("g", {
    children: [
      e.jsx("circle", { cx: t, cy: s, r: n, fill: oe, ...o }),
      e.jsx("path", {
        d: `M${t - n * 0.4} ${s - n * 0.3} q${n * 0.4} -${n * 0.35} ${n * 0.8} 0`,
        stroke: $e,
        strokeWidth: "1.6",
        fill: "none",
        strokeLinecap: "round",
      }),
    ],
  });
}
function z({ x: t, y: s, s: n = 1 }) {
  return e.jsxs("g", {
    transform: `translate(${t} ${s}) scale(${n})`,
    children: [
      e.jsx("path", {
        d: "M-20 4 Q-14 -14 0 -14 Q14 -14 20 4 Q10 -2 0 -2 Q-10 -2 -20 4 Z",
        fill: oe,
        ...o,
      }),
      e.jsx("path", {
        d: "M-8 -12 L-5 -2 M0 -14 V-2 M8 -12 L5 -2",
        stroke: Ke,
        strokeWidth: "1.6",
      }),
    ],
  });
}
function K({ x: t, y: s, icing: n = "#f9a8d4" }) {
  return e.jsxs("g", {
    transform: `translate(${t} ${s})`,
    children: [
      e.jsx("path", {
        d: "M-10 0 L-12 -14 H12 L10 0 Z",
        fill: "#7dd3fc",
        ...o,
      }),
      e.jsx("path", {
        d: "M-6 0 L-7 -14 M0 0 V-14 M6 0 L7 -14",
        stroke: k,
        strokeWidth: "1",
        opacity: ".5",
      }),
      e.jsx("path", {
        d: "M-14 -14 Q-14 -26 0 -28 Q14 -26 14 -14 Z",
        fill: n,
        ...o,
      }),
      e.jsx("circle", {
        cx: "0",
        cy: "-30",
        r: "3",
        fill: "#ef4444",
        ...o,
        strokeWidth: 1.4,
      }),
    ],
  });
}
function B({ children: t, sky: s = "#3b2a4a" }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { x: "0", y: "0", width: "320", height: "200", fill: s }),
      t,
    ],
  });
}
function Ze() {
  const t = Array.from({ length: 8 }, (s, n) => n);
  return e.jsxs(B, {
    sky: "#2f3e5c",
    children: [
      e.jsx("circle", {
        cx: "270",
        cy: "34",
        r: "16",
        fill: "#fde68a",
        opacity: ".9",
      }),
      e.jsx("rect", {
        x: "0",
        y: "176",
        width: "320",
        height: "24",
        fill: "#5b6475",
      }),
      e.jsx("rect", {
        x: "40",
        y: "40",
        width: "240",
        height: "140",
        fill: "#f3d9b1",
        ...o,
      }),
      e.jsx("rect", {
        x: "64",
        y: "22",
        width: "192",
        height: "30",
        rx: "6",
        fill: "#7c2d12",
        ...o,
      }),
      e.jsx("text", {
        x: "160",
        y: "43",
        textAnchor: "middle",
        fontSize: "17",
        fontWeight: "800",
        fill: "#fde68a",
        fontFamily: "Fredoka, ui-rounded, system-ui, sans-serif",
        children: "BINARY BAKERY",
      }),
      t.map((s) =>
        e.jsx(
          "path",
          {
            d: `M${40 + s * 30} 58 h30 v18 q-15 10 -30 0 z`,
            fill: s % 2 ? "#fff7ed" : "#e11d48",
            ...o,
          },
          s,
        ),
      ),
      e.jsx("rect", {
        x: "58",
        y: "88",
        width: "132",
        height: "70",
        fill: "#bfe3f2",
        ...o,
      }),
      e.jsx("rect", {
        x: "64",
        y: "134",
        width: "120",
        height: "6",
        fill: "#a16207",
      }),
      e.jsx(V, { x: 70, y: 134, w: 34 }),
      e.jsx(V, { x: 110, y: 134, w: 30 }),
      e.jsx(P, { x: 154, y: 126 }),
      e.jsx(P, { x: 172, y: 126 }),
      e.jsx(K, { x: 86, y: 112 }),
      e.jsx(z, { x: 140, y: 108, s: 0.9 }),
      e.jsx("rect", {
        x: "206",
        y: "92",
        width: "52",
        height: "86",
        fill: "#7c2d12",
        ...o,
      }),
      e.jsx("circle", { cx: "248", cy: "138", r: "3", fill: "#fde68a" }),
      e.jsx("rect", {
        x: "212",
        y: "100",
        width: "40",
        height: "28",
        fill: "#bfe3f2",
        ...o,
        strokeWidth: 1.6,
      }),
      e.jsx("text", {
        x: "232",
        y: "118",
        textAnchor: "middle",
        fontSize: "9",
        fontWeight: "700",
        fill: k,
        fontFamily: "ui-monospace, monospace",
        children: "OPEN",
      }),
      e.jsx(Ne, { x: 30, y: 196, skin: E[1] }),
    ],
  });
}
function Ge() {
  return e.jsxs(B, {
    sky: "#7cc4e8",
    children: [
      e.jsx("circle", { cx: "40", cy: "36", r: "18", fill: "#fde047" }),
      e.jsx("rect", {
        x: "0",
        y: "168",
        width: "320",
        height: "32",
        fill: "#9ca3af",
      }),
      e.jsx("path", {
        d: "M60 60 L260 60 L276 88 L44 88 Z",
        fill: "#16a34a",
        ...o,
      }),
      e.jsx("path", {
        d: "M92 60 L84 88 M124 60 L120 88 M156 60 V88 M188 60 L192 88 M220 60 L228 88",
        stroke: "#f0fdf4",
        strokeWidth: "6",
      }),
      e.jsx("path", {
        d: "M60 60 L260 60 L276 88 L44 88 Z",
        fill: "none",
        ...o,
      }),
      e.jsx("path", {
        d: "M58 88 V170 M262 88 V170",
        stroke: k,
        strokeWidth: "4",
      }),
      e.jsx("rect", {
        x: "48",
        y: "130",
        width: "224",
        height: "38",
        fill: "#a16207",
        ...o,
      }),
      e.jsx("rect", {
        x: "62",
        y: "114",
        width: "60",
        height: "18",
        fill: "#d6a15a",
        ...o,
      }),
      e.jsx("rect", {
        x: "136",
        y: "114",
        width: "60",
        height: "18",
        fill: "#d6a15a",
        ...o,
      }),
      [72, 88, 104, 146, 162, 178].map((t) =>
        e.jsx(P, { x: t, y: 110, r: 7 }, t),
      ),
      e.jsx(V, { x: 206, y: 130, w: 40 }),
      e.jsx(Ne, { x: 160, y: 128, skin: E[2], flip: !0 }),
      e.jsx("rect", {
        x: "226",
        y: "98",
        width: "34",
        height: "22",
        fill: "#fef3c7",
        ...o,
        strokeWidth: 1.6,
      }),
      e.jsx("text", {
        x: "243",
        y: "113",
        textAnchor: "middle",
        fontSize: "9",
        fontWeight: "700",
        fill: k,
        fontFamily: "ui-monospace, monospace",
        children: "ROLLS",
      }),
    ],
  });
}
function Ue() {
  return e.jsxs(B, {
    sky: "#4a3328",
    children: [
      e.jsx("rect", {
        x: "0",
        y: "150",
        width: "320",
        height: "50",
        fill: "#8b5e3c",
      }),
      e.jsx("rect", {
        x: "22",
        y: "22",
        width: "120",
        height: "96",
        fill: "#93c5fd",
        ...o,
      }),
      e.jsx("path", {
        d: "M82 22 V118 M22 70 H142",
        stroke: k,
        strokeWidth: "3",
      }),
      e.jsx("rect", {
        x: "170",
        y: "30",
        width: "120",
        height: "40",
        rx: "6",
        fill: "#1f2937",
        ...o,
      }),
      e.jsx("text", {
        x: "230",
        y: "55",
        textAnchor: "middle",
        fontSize: "13",
        fontWeight: "700",
        fill: "#fef3c7",
        fontFamily: "ui-rounded, system-ui",
        children: "CAFÉ",
      }),
      e.jsx("ellipse", {
        cx: "160",
        cy: "138",
        rx: "110",
        ry: "14",
        fill: "#d6a15a",
        ...o,
      }),
      e.jsx("path", {
        d: "M160 152 V190 M130 192 H190",
        stroke: k,
        strokeWidth: "5",
        strokeLinecap: "round",
      }),
      e.jsx("ellipse", {
        cx: "128",
        cy: "128",
        rx: "40",
        ry: "8",
        fill: "#f8fafc",
        ...o,
      }),
      e.jsx(z, { x: 116, y: 128, s: 0.9 }),
      e.jsx(z, { x: 142, y: 124, s: 0.8 }),
      e.jsx("path", {
        d: "M200 106 h28 v18 q0 8 -14 8 q-14 0 -14 -8 z",
        fill: "#f8fafc",
        ...o,
      }),
      e.jsx("path", {
        d: "M228 110 q10 0 10 7 q0 7 -10 6",
        fill: "none",
        ...o,
      }),
      e.jsx("path", {
        d: "M208 98 q-4 -6 0 -12 M218 98 q-4 -6 0 -12",
        stroke: "#e5e7eb",
        strokeWidth: "2",
        fill: "none",
        strokeLinecap: "round",
      }),
    ],
  });
}
function Ye() {
  const t = Array.from({ length: 9 }, (n, a) => a),
    s = ["#ef4444", "#facc15", "#22c55e", "#3b82f6", "#a855f7"];
  return e.jsxs(B, {
    sky: "#8bd3f0",
    children: [
      e.jsx("rect", {
        x: "0",
        y: "150",
        width: "320",
        height: "50",
        fill: "#65a30d",
      }),
      e.jsx("path", {
        d: "M0 26 Q160 70 320 26",
        stroke: k,
        strokeWidth: "2",
        fill: "none",
      }),
      t.map((n) => {
        const a = 16 + n * 34,
          i = 26 + Math.sin((n / 8) * Math.PI) * 22;
        return e.jsx(
          "path",
          {
            d: `M${a} ${i} l14 2 l-8 16 z`,
            fill: s[n % s.length],
            ...o,
            strokeWidth: 1.4,
          },
          n,
        );
      }),
      e.jsx("rect", {
        x: "60",
        y: "120",
        width: "200",
        height: "16",
        fill: "#fafafa",
        ...o,
      }),
      e.jsx("path", {
        d: "M66 136 V176 M254 136 V176",
        stroke: k,
        strokeWidth: "4",
      }),
      [86, 118, 150, 182, 214].map((n, a) =>
        e.jsx(
          K,
          {
            x: n,
            y: 120,
            icing: ["#f9a8d4", "#fde68a", "#a7f3d0", "#c4b5fd", "#fdba74"][a],
          },
          n,
        ),
      ),
      e.jsx(ne, { x: 284, y: 124, skin: E[3] }),
      e.jsx("path", { d: "M270 140 h28 v34 h-28 z", fill: "#2563eb", ...o }),
      e.jsx(ne, { x: 30, y: 130, skin: E[2] }),
      e.jsx("path", { d: "M17 146 h26 v30 h-26 z", fill: "#dc2626", ...o }),
    ],
  });
}
function Xe() {
  return e.jsxs(B, {
    sky: "#3b1f5c",
    children: [
      [
        [50, 50, "#f43f5e"],
        [80, 36, "#facc15"],
        [250, 44, "#22d3ee"],
        [276, 62, "#a3e635"],
      ].map(([t, s, n]) =>
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("path", {
                d: `M${t} ${Number(s) + 22} q-6 40 6 80`,
                stroke: "#e5e7eb",
                strokeWidth: "1.4",
                fill: "none",
              }),
              e.jsx("ellipse", {
                cx: t,
                cy: s,
                rx: "16",
                ry: "20",
                fill: String(n),
                ...o,
              }),
            ],
          },
          `${t}`,
        ),
      ),
      e.jsx("rect", {
        x: "0",
        y: "160",
        width: "320",
        height: "40",
        fill: "#6b4226",
      }),
      e.jsx("rect", {
        x: "96",
        y: "104",
        width: "128",
        height: "56",
        rx: "6",
        fill: "#fbcfe8",
        ...o,
      }),
      e.jsx("path", {
        d: "M96 120 q16 10 32 0 q16 10 32 0 q16 10 32 0 q16 10 32 0",
        fill: "none",
        stroke: "#ec4899",
        strokeWidth: "4",
      }),
      [120, 146, 172, 198].map((t) =>
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("rect", {
                x: t - 3,
                y: "84",
                width: "6",
                height: "20",
                fill: "#fef9c3",
                ...o,
                strokeWidth: 1.4,
              }),
              e.jsx("path", {
                d: `M${t} 82 q-4 -6 0 -12 q4 6 0 12`,
                fill: "#fb923c",
              }),
            ],
          },
          t,
        ),
      ),
      e.jsx("ellipse", {
        cx: "160",
        cy: "160",
        rx: "80",
        ry: "6",
        fill: "#f8fafc",
        ...o,
      }),
      e.jsx("text", {
        x: "160",
        y: "146",
        textAnchor: "middle",
        fontSize: "16",
        fontWeight: "800",
        fill: "#be185d",
        fontFamily: "ui-rounded, system-ui",
        children: "×2",
      }),
    ],
  });
}
function Je() {
  return e.jsxs(B, {
    sky: "#f5e6f0",
    children: [
      e.jsx("rect", {
        x: "0",
        y: "164",
        width: "320",
        height: "36",
        fill: "#d4b8c9",
      }),
      e.jsx("path", {
        d: "M20 20 q30 30 60 0 q30 30 60 0 q30 30 60 0 q30 30 60 0 q30 30 60 0",
        fill: "none",
        stroke: "#f9a8d4",
        strokeWidth: "3",
      }),
      e.jsx("rect", {
        x: "110",
        y: "128",
        width: "100",
        height: "36",
        rx: "4",
        fill: "#fffaf0",
        ...o,
      }),
      e.jsx("rect", {
        x: "124",
        y: "98",
        width: "72",
        height: "30",
        rx: "4",
        fill: "#fffaf0",
        ...o,
      }),
      e.jsx("rect", {
        x: "138",
        y: "72",
        width: "44",
        height: "26",
        rx: "4",
        fill: "#fffaf0",
        ...o,
      }),
      e.jsx("path", {
        d: "M110 140 q10 6 20 0 q10 6 20 0 q10 6 20 0 q10 6 20 0 q10 6 20 0",
        fill: "none",
        stroke: "#f9a8d4",
        strokeWidth: "3",
      }),
      e.jsx("path", {
        d: "M124 108 q9 6 18 0 q9 6 18 0 q9 6 18 0 q9 6 18 0",
        fill: "none",
        stroke: "#f9a8d4",
        strokeWidth: "3",
      }),
      e.jsx("path", {
        d: "M160 72 c-8 -12 -20 -2 0 -16 c20 14 8 4 0 16 z",
        fill: "#f43f5e",
        ...o,
        strokeWidth: 1.6,
      }),
      e.jsx("ellipse", {
        cx: "160",
        cy: "164",
        rx: "70",
        ry: "5",
        fill: "#e5e7eb",
        ...o,
      }),
      e.jsx(K, { x: 56, y: 164, icing: "#fbcfe8" }),
      e.jsx(K, { x: 264, y: 164, icing: "#fde68a" }),
    ],
  });
}
function et() {
  return e.jsxs(B, {
    sky: "#334155",
    children: [
      e.jsx("rect", {
        x: "0",
        y: "120",
        width: "320",
        height: "80",
        fill: "#a16207",
      }),
      e.jsx("path", { d: "M0 120 H320", stroke: k, strokeWidth: "3" }),
      e.jsx("rect", {
        x: "62",
        y: "106",
        width: "196",
        height: "64",
        rx: "8",
        fill: "#e7c08a",
        ...o,
      }),
      e.jsx("rect", {
        x: "78",
        y: "118",
        width: "164",
        height: "40",
        rx: "4",
        fill: "#9ca3af",
        ...o,
      }),
      [96, 120, 144, 176, 200, 224].map((t) =>
        e.jsx(P, { x: t, y: 138, r: 9 }, t),
      ),
      e.jsx("path", {
        d: "M160 84 V182",
        stroke: "#f8fafc",
        strokeWidth: "3",
        strokeDasharray: "6 5",
      }),
      e.jsx("path", {
        d: "M152 30 L168 30 L166 92 L154 92 Z",
        fill: "#e5e7eb",
        ...o,
      }),
      e.jsx("rect", {
        x: "150",
        y: "10",
        width: "20",
        height: "22",
        rx: "3",
        fill: "#78350f",
        ...o,
      }),
    ],
  });
}
function tt() {
  return e.jsxs(B, {
    sky: "#3f3a36",
    children: [
      e.jsx("rect", {
        x: "0",
        y: "150",
        width: "320",
        height: "50",
        fill: "#8b5e3c",
      }),
      e.jsx("rect", {
        x: "44",
        y: "18",
        width: "150",
        height: "120",
        rx: "4",
        fill: "#fffbeb",
        ...o,
        transform: "rotate(-3 119 78)",
      }),
      e.jsx("circle", {
        cx: "119",
        cy: "22",
        r: "5",
        fill: "#ef4444",
        ...o,
        strokeWidth: 1.4,
      }),
      e.jsxs("g", {
        transform: "rotate(-3 119 78)",
        fontFamily: "ui-monospace, monospace",
        fill: k,
        children: [
          e.jsx("text", {
            x: "60",
            y: "48",
            fontSize: "12",
            fontWeight: "700",
            children: "RECIPE",
          }),
          e.jsx("path", {
            d: "M60 58 H178 M60 74 H160 M60 90 H170 M60 106 H150",
            stroke: "#d6d3d1",
            strokeWidth: "3",
          }),
          e.jsx("path", {
            d: "M84 122 h28 m-28 0 l8 -6 m-8 6 l8 6 M156 122 h-28 m28 0 l-8 -6 m8 6 l-8 6",
            stroke: "#b45309",
            strokeWidth: "3",
            strokeLinecap: "round",
            fill: "none",
          }),
        ],
      }),
      e.jsx("path", {
        d: "M210 120 Q210 160 250 160 Q290 160 290 120 Z",
        fill: "#60a5fa",
        ...o,
      }),
      e.jsx("ellipse", {
        cx: "250",
        cy: "120",
        rx: "40",
        ry: "8",
        fill: "#fef3c7",
        ...o,
      }),
      e.jsx("path", {
        d: "M262 116 L292 70",
        stroke: "#a16207",
        strokeWidth: "5",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M258 122 q4 -10 8 -6",
        stroke: k,
        strokeWidth: "1.6",
        fill: "none",
      }),
    ],
  });
}
function st() {
  const t = [
    { x: 40, fill: "#fef3c7", tag: "flour" },
    { x: 110, fill: "#fde68a", tag: "sugar" },
    { x: 180, fill: "#fca5a5", tag: "jam" },
  ];
  return e.jsxs(B, {
    sky: "#3b2f2a",
    children: [
      e.jsx("rect", {
        x: "0",
        y: "0",
        width: "320",
        height: "200",
        fill: "#4a3a32",
      }),
      e.jsx("path", {
        d: "M20 96 H300 M20 170 H300",
        stroke: "#a16207",
        strokeWidth: "8",
      }),
      t.map(({ x: s, fill: n, tag: a }) =>
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("rect", {
                x: s,
                y: "40",
                width: "50",
                height: "54",
                rx: "8",
                fill: "#e0f2fe",
                opacity: ".9",
                ...o,
              }),
              e.jsx("rect", {
                x: s + 5,
                y: "54",
                width: "40",
                height: "36",
                rx: "5",
                fill: n,
              }),
              e.jsx("rect", {
                x: s + 4,
                y: "32",
                width: "42",
                height: "10",
                rx: "3",
                fill: "#9a3412",
                ...o,
              }),
              e.jsx("rect", {
                x: s + 9,
                y: "60",
                width: "32",
                height: "18",
                rx: "2",
                fill: "#fffbeb",
                ...o,
                strokeWidth: 1.4,
              }),
              e.jsx("path", {
                d: `M${s + 14} 66 H${s + 36} M${s + 14} 72 H${s + 30}`,
                stroke: "#a8a29e",
                strokeWidth: "2.2",
                strokeLinecap: "round",
              }),
            ],
          },
          a,
        ),
      ),
      e.jsx("rect", {
        x: "250",
        y: "44",
        width: "40",
        height: "50",
        rx: "4",
        fill: "#fffbeb",
        ...o,
        strokeWidth: 1.6,
      }),
      e.jsx("text", {
        x: "270",
        y: "66",
        textAnchor: "middle",
        fontSize: "13",
        fontWeight: "800",
        fill: "#b45309",
        fontFamily: "ui-monospace, monospace",
        children: "?",
      }),
      e.jsx("path", {
        d: "M258 76 H282 M258 84 H276",
        stroke: "#d6d3d1",
        strokeWidth: "2.4",
      }),
      e.jsx("path", {
        d: "M36 166 Q36 118 70 116 Q104 118 104 166 Z",
        fill: "#f5f0e6",
        ...o,
      }),
      e.jsx("path", { d: "M50 120 Q70 108 90 120", fill: "none", ...o }),
      e.jsx("rect", {
        x: "52",
        y: "134",
        width: "36",
        height: "16",
        rx: "2",
        fill: "#fffbeb",
        ...o,
        strokeWidth: 1.4,
      }),
      e.jsx("text", {
        x: "70",
        y: "146",
        textAnchor: "middle",
        fontSize: "9",
        fontWeight: "800",
        fill: k,
        fontFamily: "ui-monospace, monospace",
        children: "FLOUR",
      }),
      e.jsx("rect", {
        x: "150",
        y: "122",
        width: "120",
        height: "44",
        rx: "6",
        fill: "#64748b",
        ...o,
      }),
      e.jsx("rect", {
        x: "162",
        y: "130",
        width: "60",
        height: "14",
        rx: "2",
        fill: "#0f172a",
      }),
      e.jsx("text", {
        x: "192",
        y: "141",
        textAnchor: "middle",
        fontSize: "9",
        fontWeight: "700",
        fill: "#fde68a",
        fontFamily: "ui-monospace, monospace",
        children: "PRINT",
      }),
      e.jsx("circle", {
        cx: "244",
        cy: "137",
        r: "6",
        fill: "#f59e0b",
        ...o,
        strokeWidth: 1.4,
      }),
      e.jsx("path", {
        d: "M170 166 V176 H230 V166",
        fill: "#fffbeb",
        ...o,
        strokeWidth: 1.6,
      }),
    ],
  });
}
function nt() {
  return e.jsxs(B, {
    sky: "#1e3a5f",
    children: [
      e.jsx("rect", {
        x: "0",
        y: "160",
        width: "320",
        height: "40",
        fill: "#374151",
      }),
      e.jsx("path", {
        d: "M0 180 H320",
        stroke: "#fde68a",
        strokeWidth: "3",
        strokeDasharray: "18 14",
      }),
      e.jsx("path", {
        d: "M40 154 V70 Q40 60 50 60 H200 V154 Z",
        fill: "#fff7ed",
        ...o,
      }),
      e.jsx("path", {
        d: "M200 80 H248 L278 116 V154 H200 Z",
        fill: "#e11d48",
        ...o,
      }),
      e.jsx("path", {
        d: "M210 88 H244 L264 114 H210 Z",
        fill: "#bfe3f2",
        ...o,
      }),
      e.jsx("rect", {
        x: "236",
        y: "92",
        width: "10",
        height: "7",
        rx: "1.5",
        fill: "#1f2937",
      }),
      e.jsx("circle", { cx: "241", cy: "95.5", r: "1.6", fill: "#ef4444" }),
      e.jsx("text", {
        x: "120",
        y: "102",
        textAnchor: "middle",
        fontSize: "15",
        fontWeight: "800",
        fill: "#7c2d12",
        fontFamily: "Fredoka, ui-rounded, system-ui",
        children: "BINARY BAKERY",
      }),
      e.jsx(V, { x: 90, y: 136, w: 30 }),
      e.jsx(P, { x: 138, y: 128, r: 8 }),
      e.jsx(z, { x: 166, y: 134, s: 0.8 }),
      [84, 236].map((t) =>
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("circle", {
                cx: t,
                cy: "156",
                r: "16",
                fill: "#1f2937",
                ...o,
              }),
              e.jsx("circle", { cx: t, cy: "156", r: "6", fill: "#9ca3af" }),
            ],
          },
          t,
        ),
      ),
      e.jsx("rect", {
        x: "272",
        y: "128",
        width: "8",
        height: "10",
        fill: "#fde68a",
        ...o,
        strokeWidth: 1.4,
      }),
    ],
  });
}
const at = {
    shopfront: Ze,
    market: Ge,
    cafe: Ue,
    fete: Ye,
    party: Xe,
    wedding: Je,
    halve: et,
    recipe: tt,
    labels: st,
    van: nt,
  },
  it = {
    shopfront: "The Binary Bakery shopfront, with a baker by the door",
    market: "A market stall with crates of bread rolls",
    cafe: "A café table with a plate of croissants and a coffee",
    fete: "A school fete table of cupcakes under bunting",
    party: "A birthday cake with candles and balloons",
    wedding: "A three-tier wedding cake",
    halve: "A tray of rolls with a knife cutting it in half",
    recipe: "A recipe card pinned to the kitchen wall beside a mixing bowl",
    labels: "Pantry shelves of jars with stock labels and a label printer",
    van: "The Binary Bakery delivery van with a dashcam",
  };
function ce({ scene: t, className: s }) {
  const n = at[t];
  return e.jsx("svg", {
    viewBox: "0 0 320 200",
    className: s,
    role: "img",
    "aria-label": it[t],
    "data-bakery-scene": t,
    children: e.jsx(n, {}),
  });
}
function ae({ bit: t, className: s }) {
  return e.jsx("svg", {
    viewBox: "0 0 40 40",
    className: s,
    "aria-hidden": "true",
    children: t
      ? e.jsxs(e.Fragment, {
          children: [
            e.jsx("path", {
              d: "M4 25 Q4 7 20 7 Q36 7 36 25 Q36 34 20 34 Q4 34 4 25 Z",
              fill: "#f2b56b",
              stroke: k,
              strokeWidth: "1.8",
            }),
            e.jsx("path", {
              d: "M10 13 Q20 7 30 13",
              fill: "none",
              stroke: "#fbd9a6",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
          ],
        })
      : e.jsx("path", {
          d: "M7 14 H33 L29.5 34 H10.5 Z",
          fill: "#efe6d4",
          stroke: "#8a7a68",
          strokeWidth: "1.6",
          strokeDasharray: "3 2",
        }),
  });
}
const $ = 8,
  F = 255,
  q = [128, 64, 32, 16, 8, 4, 2, 1];
function _(t, s = Math.random) {
  const n = [...t];
  for (let a = n.length - 1; a > 0; a -= 1) {
    const i = Math.floor(s() * (a + 1));
    [n[a], n[i]] = [n[i], n[a]];
  }
  return n;
}
function H(t, s, n) {
  return Math.floor(n() * (s - t + 1)) + t;
}
function de(t, s) {
  return t[Math.floor(s() * t.length)];
}
function fe(t) {
  return q.map((s) => (t & s ? 1 : 0));
}
function M(t) {
  return fe(t).join("");
}
function ie(t) {
  const [s, n] = String(t).split("."),
    a = s.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return n ? `${a}.${n}` : a;
}
function Me(t, s) {
  const n = [];
  let a = 0;
  for (let i = 0; i < $; i += 1) {
    const r = (t >> i) & 1,
      c = (s >> i) & 1,
      f = r + c + a;
    (n.push({
      column: i,
      a: r,
      b: c,
      carryIn: a,
      sum: f & 1,
      carryOut: f >> 1,
    }),
      (a = f >> 1));
  }
  return n;
}
function re(t, s) {
  return t + s > F;
}
function rt(t) {
  const s = [t.a, t.b, ...(t.carryIn ? [1] : [])],
    n = t.a + t.b + t.carryIn,
    a = `${s.join(" + ")}${t.carryIn ? " (with the carry)" : ""} = ${n}`;
  if (n < 2) return `${a}, so write ${n} and carry 0.`;
  const i = n === 2 ? "10" : "11",
    r = t.column === $ - 1 ? "out of the 8 bits" : "to the next column";
  return `${a}, which is ${i} in binary: write ${t.sum} and carry 1 ${r}.`;
}
const ue = [
  { id: "fits", text: "It fits: the result can be stored in 8 bits" },
  {
    id: "overflow",
    text: "Overflow: the result needs a 9th bit, too large for 8 bits",
  },
  {
    id: "column-carry",
    text: "Overflow: a carry moved from one column to the next",
  },
];
function lt(t, s) {
  return re(t, s) ? "overflow" : "fits";
}
function me(t, s) {
  const n = t + s,
    a = n & F;
  return n > F
    ? `${t} + ${s} = ${n}, more than 255, the largest number 8 bits can hold. The carry out of the most significant bit needs a 9th bit, so overflow has occurred: only ${M(a)} (${a}) is stored.`
    : `${t} + ${s} = ${n}, which is no more than 255, so it fits in 8 bits. Carries between columns are not overflow: overflow is only a carry out of the most significant bit.`;
}
function Z(t, s, n) {
  const a = fe(t);
  return s === "left"
    ? { value: (t << n) & F, lost: a.slice(0, n) }
    : { value: t >> n, lost: a.slice($ - n).reverse() };
}
function ot(t, s) {
  let n = fe(t).map((r, c) => ({ id: c, bit: r }));
  const a = [],
    i = [];
  return (
    s.forEach((r, c) => {
      const f = { id: $ + c, bit: 0 };
      r === "left"
        ? (a.push(n[0]), (n = [...n.slice(1), f]))
        : (i.unshift(n[$ - 1]), (n = [f, ...n.slice(0, $ - 1)]));
    }),
    { slots: n, lostLeft: a, lostRight: i }
  );
}
function ct(t) {
  return t.reduce((s, n) => s * 2 + n.bit, 0);
}
function dt(t, s, n) {
  return t.length === n && t.every((a) => a === s);
}
function ft(t) {
  if (t.length === 0) return "no shift";
  const [s] = t;
  return t.every((n) => n === s)
    ? `a ${t.length}-place ${s} shift`
    : "a mix of left and right shifts";
}
const ht = [
  { id: "exact", text: "Exact: no 1s were shifted off the tray" },
  {
    id: "precision",
    text: "Not exact: a 1 fell off the least significant (right) end, so precision is lost",
  },
  {
    id: "overflow",
    text: "Not exact: a 1 fell off the most significant (left) end, so the result overflowed",
  },
];
function Se(t, s, n) {
  return Z(t, s, n).lost.includes(1)
    ? s === "left"
      ? "overflow"
      : "precision"
    : "exact";
}
function Le(t, s) {
  return `${t === "left" ? "multiplies" : "divides"} by ${2 ** s}`;
}
const xt = [
  { direction: "left", places: 1 },
  { direction: "left", places: 2 },
  { direction: "left", places: 3 },
  { direction: "left", places: 4 },
  { direction: "right", places: 1 },
  { direction: "right", places: 2 },
  { direction: "right", places: 3 },
  { direction: "right", places: 4 },
];
function Ce({ direction: t, places: s }) {
  return `${t === "left" ? "×" : "÷"} ${2 ** s}`;
}
function pe(t, s, n) {
  const { value: a, lost: i } = Z(t, s, n),
    f = `${`A ${n}-place ${s} shift ${Le(s, n)}`}: every bit moves ${n} ${n === 1 ? "place" : "places"} ${s} and ${`${n === 1 ? "a zero fills" : "zeros fill"} the gap on the ${s === "left" ? "right" : "left"}`}. ${M(t)} becomes ${M(a)}.`,
    h = Se(t, s, n);
  if (h === "exact")
    return `${f} ${t} ${s === "left" ? "×" : "÷"} ${2 ** n} = ${a}, exactly.`;
  const m = i.filter((y) => y === 1).length;
  if (h === "precision") {
    const y = t / 2 ** n;
    return `${f} ${t} ÷ ${2 ** n} is ${ie(y)}, but the tray shows ${a}: the ${m === 1 ? "1" : "1s"} shifted off the right-hand end, past the least significant bit, ${m === 1 ? "is" : "are"} lost, so the result loses precision.`;
  }
  return `${f} ${t} × ${2 ** n} should be ${t * 2 ** n}, more than 255, but the tray shows ${a}: the ${m === 1 ? "1" : "1s"} shifted off the left-hand end, past the most significant bit, ${m === 1 ? "is" : "are"} lost, so the result has overflowed.`;
}
const ut = [
    {
      id: "tb-mb",
      prompt:
        "The van's dashcam records onto a 2 TB drive. How many megabytes is that?",
      answers: [2e6, 2097152],
      unit: "MB",
      explanation:
        "TB to GB to MB is two steps down, and each step multiplies by 1000: 2 × 1000 × 1000 = 2 000 000 MB.",
    },
    {
      id: "gb-mb",
      prompt: "The van's map update is 3 GB. How many megabytes is that?",
      answers: [3e3, 3072],
      unit: "MB",
      explanation:
        "GB to MB is one step down, so multiply by 1000: 3 × 1000 = 3000 MB.",
    },
    {
      id: "mb-kb",
      prompt:
        "A photo of each delivery is 5 MB. How many kilobytes is one photo?",
      answers: [5e3, 5120],
      unit: "KB",
      explanation:
        "MB to KB is one step down, so multiply by 1000: 5 × 1000 = 5000 KB.",
    },
    {
      id: "mb-gb",
      prompt:
        "A week of the van's delivery photos takes 4000 MB. How many gigabytes is that?",
      answers: [4, 3.90625],
      unit: "GB",
      explanation:
        "MB to GB is one step up, so divide by 1000: 4000 ÷ 1000 = 4 GB.",
    },
    {
      id: "pb-tb",
      prompt:
        "The bakery chain's cloud backup holds 2 PB. How many terabytes is that?",
      answers: [2e3, 2048],
      unit: "TB",
      explanation:
        "PB to TB is one step down, so multiply by 1000: 2 × 1000 = 2000 TB.",
    },
    {
      id: "byte-bit",
      prompt:
        "The van's door code is stored in 6 bytes. How many bits is that?",
      answers: [48],
      unit: "bits",
      explanation: "A byte is 8 bits, so multiply by 8: 6 × 8 = 48 bits.",
    },
    {
      id: "byte-nibble",
      prompt:
        "The van's mileage is stored in 3 bytes. How many nibbles is that?",
      answers: [6],
      unit: "nibbles",
      explanation:
        "A nibble is 4 bits, so there are 2 nibbles in a byte: 3 × 2 = 6 nibbles.",
    },
    {
      id: "kb-mb",
      prompt: "The delivery list is 1500 KB. How many megabytes is that?",
      answers: [1.5, 1.46484375],
      unit: "MB",
      explanation:
        "KB to MB is one step up, so divide by 1000: 1500 ÷ 1000 = 1.5 MB.",
    },
  ],
  Be = /\s*(pb|tb|gb|mb|kb|bytes?|bits?|nibbles?)\.?$/i;
function le(t) {
  const s = t.trim().replace(Be, "").replace(/[\s,]/g, "");
  return /^\d+(\.\d+)?$/.test(s) ? Number(s) : null;
}
function mt(t, s) {
  const n = le(s);
  if (n === null) return !1;
  if (t.answers.some((r) => Math.abs(r - n) < 1e-9)) return !0;
  const i = (s.trim().replace(Be, "").replace(/[\s,]/g, "").split(".")[1] ?? "")
    .length;
  return (
    i >= 1 && t.answers.some((r) => Math.abs(Number(r.toFixed(i)) - n) < 1e-9)
  );
}
const be = [
  { id: "denary", name: "Denary" },
  { id: "binary", name: "8-bit binary" },
  { id: "hex", name: "2-digit hex" },
];
function I(t) {
  return t.toString(16).toUpperCase().padStart(2, "0");
}
function pt(t, s) {
  return s === "binary" ? M(t) : s === "hex" ? I(t) : String(t);
}
const bt = [
  { value: 38, missing: "binary" },
  { value: 78, missing: "denary" },
  { value: 156, missing: "hex" },
  { value: 215, missing: "binary" },
];
function yt(t = Math.random) {
  const s = new Set();
  return _(["denary", "binary", "hex"], t).map((n) => {
    const a = bt.filter((r) => r.missing === n && !s.has(r.value)),
      i =
        a.length && t() < 0.4
          ? de(a, t).value
          : (() => {
              for (;;) {
                const r = H(17, 254, t);
                if (!s.has(r) && r % 16 !== 0) return r;
              }
            })();
    return (s.add(i), { value: i, missing: n });
  });
}
function Ae(t, s) {
  const n = s.trim().replace(/\s/g, "");
  return t === "binary"
    ? /^[01]{1,8}$/.test(n)
      ? parseInt(n, 2)
      : null
    : t === "hex"
      ? /^[0-9a-f]{1,2}$/i.test(n)
        ? parseInt(n, 16)
        : null
      : /^\d{1,3}$/.test(n) && Number(n) <= F
        ? Number(n)
        : null;
}
function We(t, s) {
  return Ae(t.missing, s) === t.value;
}
function gt(t, s) {
  const n = s.trim().replace(/\s/g, "");
  return t.missing === "binary" && We(t, s) && n.length < $;
}
function ye(t) {
  const { value: s } = t,
    n = M(s),
    a = n.slice(0, 4),
    i = n.slice(4),
    r = (h) => I(parseInt(h, 2)).slice(1);
  if (t.missing === "binary") {
    const h = q.filter((m) => s & m);
    return `${s} = ${h.join(" + ")}, so those place values are 1 and the rest are 0: ${n}.`;
  }
  if (t.missing === "hex")
    return `Split ${n} into two nibbles: ${a} = ${parseInt(a, 2)} = ${r(a)} and ${i} = ${parseInt(i, 2)} = ${r(i)}, so the hex is ${I(s)}.`;
  const [c, f] = I(s);
  return `${I(s)}: ${c} is ${parseInt(c, 16)} sixteens and ${f} is ${parseInt(f, 16)} ones, so ${parseInt(c, 16)} × 16 + ${parseInt(f, 16)} = ${s}.`;
}
const jt = [
  [115, 52],
  [181, 78],
  [113, 158],
];
function kt(t, s) {
  return Me(t, s).filter((n) => n.carryOut === 1).length;
}
function wt(t, s) {
  const n = jt.filter(([a, i]) => re(a, i) === t);
  if (n.length && s() < 0.35) return de(n, s);
  for (;;) {
    const a = H(24, 230, s),
      i = H(24, 230, s);
    if (re(a, i) === t && kt(a, i) >= 2) return [a, i];
  }
}
const vt = [
  {
    scene: "market",
    title: "Market stall",
    text: "The Saturday market stall wants two batches of bread rolls on one tray. Add the two orders.",
  },
  {
    scene: "cafe",
    title: "Corner café",
    text: "The corner café is ordering croissants for the morning and the afternoon. Add them up for one tray.",
  },
  {
    scene: "fete",
    title: "School fete",
    text: "Two classes have ordered cupcakes for the school fete. Put both orders on one tray.",
  },
];
function $t(t, s, n) {
  for (;;) {
    const a = H(1, 4, n),
      i = H(5, 250, n),
      r = Z(i, t, a).lost.includes(1),
      c = Z(i, t, a).value > 0;
    if (r === s && c) return { value: i, direction: t, places: a };
  }
}
function Nt(t, s) {
  const n = 2 ** s;
  return t === "left"
    ? s === 1
      ? {
          scene: "party",
          title: "Birthday party",
          text: "More guests are coming to the party. Double the batch.",
        }
      : {
          scene: "wedding",
          title: "Wedding",
          text: `The wedding has grown. Make ${n} times as many cakes.`,
        }
    : {
        scene: "halve",
        title: "Smaller batch",
        text:
          s === 1
            ? "Only half the guests can come. Halve the batch."
            : `The order has been cut. Divide the batch by ${n}.`,
      };
}
const Mt = ["", "one place", "two places", "three places", "four places"];
function St(t, s) {
  return `Shift ${t} ${Mt[s]}`;
}
function Lt(t = Math.random) {
  const s = _(vt, t),
    a = _([!1, !0, t() < 0.5], t).map((g, N) => {
      const [C, L] = wt(g, t),
        S = s[N];
      return { kind: "add", id: `add-${N}`, ...S, a: C, b: L };
    }),
    r = [
      { mode: "goal", direction: "left", loss: t() < 0.5 },
      { mode: "goal", direction: "right", loss: t() < 0.6 },
      { mode: "instruction", direction: "left", loss: !1 },
      { mode: "instruction", direction: "right", loss: !0 },
    ].map(({ mode: g, direction: N, loss: C }, L) => {
      const S =
          g === "instruction" && N === "left" && t() < 0.3
            ? { value: 15, direction: N, places: 4 }
            : $t(N, C, t),
        W =
          g === "goal"
            ? Nt(S.direction, S.places)
            : {
                scene: "recipe",
                title: S.direction === "left" ? "Bulk recipe" : "Recipe card",
                text: `The ${S.direction === "left" ? "bulk recipe" : "recipe card"} says: ${St(S.direction, S.places).toLowerCase()}.`,
              };
      return { kind: "shift", id: `shift-${L}`, mode: g, ...W, ...S };
    }),
    c = {
      kind: "van",
      id: "van",
      scene: "van",
      title: "Delivery van",
      question: de(ut, t),
    },
    f = {
      kind: "label",
      id: "labels",
      scene: "labels",
      title: "Stock labels",
      text: "The new stock labels are missing a number. Fill in the gap on each label.",
      rows: yt(t),
    },
    [h, m, y, v] = _(r, t),
    [d, u, p] = a;
  return [d, h, u, f, m, c, p, y, v];
}
const w = {
  column: 10,
  trayCall: 30,
  shift: 60,
  shiftCall: 40,
  label: 40,
  van: 100,
};
function Ct(t) {
  return t.kind === "add"
    ? $ * w.column + w.trayCall
    : t.kind === "shift"
      ? w.shift + w.shiftCall
      : t.kind === "label"
        ? t.rows.length * w.label
        : w.van;
}
function Bt(t, s) {
  const n = s ? t / s : 0;
  return n >= 0.9
    ? "Head Baker"
    : n >= 0.7
      ? "Pastry Chef"
      : n >= 0.45
        ? "Apprentice Baker"
        : "Kitchen Porter";
}
const A =
    "inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-stone-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
  ee =
    "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-3 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300";
function G({
  label: t,
  options: s,
  picked: n,
  answer: a,
  onPick: i,
  columns: r = !1,
}) {
  return e.jsx("div", {
    className: r ? "grid grid-cols-4 gap-2" : "grid gap-2",
    role: "group",
    "aria-label": t,
    children: s.map((c) => {
      const f = n === c.id,
        h = n !== null && c.id === a;
      return e.jsxs(
        "button",
        {
          type: "button",
          onClick: () => i(c.id),
          disabled: n !== null,
          "data-bakery-option": h ? "correct" : f ? "wrong" : void 0,
          className: `flex items-start gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${r ? "justify-center font-mono text-base font-bold" : ""} ${h ? "border-emerald-500/60 bg-emerald-500/10 text-slate-50" : f ? "border-rose-500/60 bg-rose-500/10 text-slate-50" : n !== null ? "border-slate-800 text-slate-500" : "border-slate-700 bg-slate-900/60 text-slate-200 hover:border-amber-400/70 hover:bg-slate-800/70"}`,
          children: [
            h
              ? e.jsx(U, {
                  "aria-hidden": "true",
                  className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-300",
                })
              : null,
            f && !h
              ? e.jsx(Y, {
                  "aria-hidden": "true",
                  className: "mt-0.5 h-4 w-4 shrink-0 text-rose-300",
                })
              : null,
            e.jsx("span", { children: c.text }),
          ],
        },
        c.id,
      );
    }),
  });
}
function X({ right: t, children: s, nextLabel: n, onNext: a }) {
  return e.jsxs(R.div, {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    className: `space-y-3 rounded-2xl border p-4 text-sm ${t ? "border-emerald-500/40 bg-emerald-500/10" : "border-rose-500/40 bg-rose-500/10"}`,
    "aria-live": "polite",
    "data-bakery-feedback": t ? "correct" : "wrong",
    children: [
      e.jsx("span", {
        className: "sr-only",
        children: t ? "Correct." : "Incorrect.",
      }),
      e.jsx("div", {
        className: "space-y-2 leading-6 text-slate-100",
        children: s,
      }),
      e.jsxs("button", {
        type: "button",
        className: `w-full ${A}`,
        onClick: a,
        autoFocus: !0,
        "data-bakery-next": !0,
        children: [
          n,
          e.jsx(ke, { "aria-hidden": "true", className: "h-4 w-4" }),
        ],
      }),
    ],
  });
}
function ge({ label: t, value: s, onChange: n, disabled: a }) {
  return e.jsxs("div", {
    className: "flex items-center gap-2",
    role: "group",
    "aria-label": t,
    children: [
      e.jsx("span", {
        className: "w-12 text-xs font-semibold text-slate-300",
        children: t,
      }),
      [0, 1].map((i) =>
        e.jsx(
          "button",
          {
            type: "button",
            "aria-pressed": s === i,
            disabled: a,
            onClick: () => n(i),
            className: `h-11 w-11 rounded-lg border font-mono text-lg font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 disabled:opacity-40 ${s === i ? "border-amber-300 bg-amber-400/20 text-amber-100" : "border-slate-600 bg-slate-900/60 text-slate-200 hover:border-amber-400/70"}`,
            children: i,
          },
          i,
        ),
      ),
    ],
  });
}
function At(t) {
  const s = `${q[$ - 1 - t]} column`;
  return t === 0
    ? `${s} (the least significant bit)`
    : t === $ - 1
      ? `${s} (the most significant bit)`
      : s;
}
const D = ["off", 7, 6, 5, 4, 3, 2, 1, 0];
function Wt({ order: t, isLast: s, onDone: n }) {
  const a = Me(t.a, t.b),
    [i, r] = b.useState([]),
    [c, f] = b.useState(null),
    [h, m] = b.useState(null),
    [y, v] = b.useState(null),
    d = i.length,
    u = d < $,
    p = i.length ? i[i.length - 1] : null,
    g = i.length ? a[i.length - 1] : null,
    N = lt(t.a, t.b),
    C = i.filter((l) => l.right).length * w.column;
  function L() {
    if (!u || c === null || h === null) return;
    const l = a[d],
      x = c === l.sum && h === l.carryOut;
    (r((j) => [...j, { sum: l.sum, carry: l.carryOut, right: x }]),
      f(null),
      m(null));
  }
  function S(l) {
    if (!u || l.altKey || l.ctrlKey || l.metaKey) return;
    const x = l.target;
    if (!(
      x instanceof HTMLElement &&
      ["INPUT", "TEXTAREA", "SELECT"].includes(x.tagName)
    ))
      if (l.key === "0" || l.key === "1") {
        l.preventDefault();
        const j = Number(l.key);
        c === null ? f(j) : h === null ? m(j) : (f(j), m(null));
      } else
        l.key === "Backspace"
          ? (l.preventDefault(), h !== null ? m(null) : f(null))
          : l.key === "Enter" &&
            c !== null &&
            h !== null &&
            (l.preventDefault(), L());
  }
  b.useEffect(
    () => (
      window.addEventListener("keydown", S),
      () => window.removeEventListener("keydown", S)
    ),
  );
  function W() {
    const x = C + (y === N ? w.trayCall : 0),
      j = $ * w.column + w.trayCall,
      J = x === j ? null : `${M(t.a)} + ${M(t.b)}: ${me(t.a, t.b)}`;
    n({ id: t.id, title: t.title, earned: x, max: j, review: J });
  }
  function O(l) {
    const x = l === "off" ? $ - 1 : l - 1;
    return x < 0
      ? { value: null, pending: !1, fresh: !1 }
      : l === "off" && i.length === $ && !T
        ? { value: null, pending: !1, fresh: !1 }
        : x < i.length
          ? { value: i[x].carry, pending: !1, fresh: x === i.length - 1 }
          : x === d && u
            ? { value: h, pending: !0, fresh: !1 }
            : { value: null, pending: !1, fresh: !1 };
  }
  const T = y !== null,
    Q = i.length === $ && T ? i[$ - 1].carry : null;
  return e.jsxs("div", {
    className: "space-y-4",
    "data-bakery-add": t.id,
    children: [
      e.jsxs("div", {
        className:
          "bakery-board mx-auto w-full max-w-lg rounded-2xl p-2 sm:p-3",
        role: "group",
        "aria-label": `${M(t.a)} plus ${M(t.b)}`,
        children: [
          e.jsxs("div", {
            className: "bakery-grid",
            "aria-hidden": "true",
            children: [
              D.map((l) =>
                e.jsx(
                  "span",
                  {
                    className: "bakery-place",
                    children: l === "off" ? "" : q[$ - 1 - l],
                  },
                  `pv-${l}`,
                ),
              ),
              D.map((l) => {
                const { value: x, pending: j, fresh: J } = O(l);
                return e.jsx(
                  "span",
                  {
                    className: "bakery-carry",
                    "data-pending": j || void 0,
                    "data-value": x ?? void 0,
                    "data-fresh": J && x === 1 ? "true" : void 0,
                    children: x === 1 ? "1" : x === 0 && j ? "0" : "",
                  },
                  `c-${l}`,
                );
              }),
              [t.a, t.b].map((l, x) =>
                D.map((j) =>
                  e.jsx(
                    "span",
                    {
                      className: "bakery-digit",
                      "data-active": j === d && u ? "true" : void 0,
                      children:
                        j === "off" ? (x === 1 ? "+" : "") : (l >> j) & 1,
                    },
                    `r${x}-${j}`,
                  ),
                ),
              ),
              e.jsx("span", { className: "bakery-rule" }),
              D.map((l) => {
                if (l === "off")
                  return e.jsx(
                    "span",
                    {
                      className: "bakery-off-tray",
                      "data-bakery-ninth": Q ?? void 0,
                      children:
                        Q === 1
                          ? e.jsxs("span", {
                              className: "bakery-fall",
                              children: [
                                e.jsx(ae, {
                                  bit: 1,
                                  className: "h-full w-full",
                                }),
                                e.jsx("span", {
                                  className: "bakery-bun-digit",
                                  children: "1",
                                }),
                              ],
                            })
                          : null,
                    },
                    "res-off",
                  );
                const x = i[l],
                  j = l === d && u;
                return e.jsx(
                  "span",
                  {
                    className: "bakery-slot",
                    "data-active": j || void 0,
                    "data-mark": x ? (x.right ? "right" : "wrong") : void 0,
                    children: x
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(ae, {
                              bit: x.sum,
                              className: "h-full w-full",
                            }),
                            e.jsx("span", {
                              className: "bakery-bun-digit",
                              children: x.sum,
                            }),
                          ],
                        })
                      : j && c !== null
                        ? e.jsx("span", {
                            className: "bakery-bun-digit bakery-pending",
                            children: c,
                          })
                        : null,
                  },
                  `res-${l}`,
                );
              }),
            ],
          }),
          e.jsx("p", {
            className: "sr-only",
            "aria-live": "polite",
            children: i.length
              ? `Result so far: ${i
                  .map((l) => l.sum)
                  .reverse()
                  .join("")}`
              : "",
          }),
        ],
      }),
      g && p && (u || T)
        ? e.jsxs("p", {
            className: `flex items-start gap-2 rounded-lg px-3 py-2 text-sm ${p.right ? "bg-emerald-500/10 text-emerald-100" : "bg-rose-500/10 text-rose-100"}`,
            "aria-live": "polite",
            "data-bakery-column": p.right ? "correct" : "wrong",
            children: [
              p.right
                ? e.jsx(U, {
                    "aria-hidden": "true",
                    className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-300",
                  })
                : e.jsx(Y, {
                    "aria-hidden": "true",
                    className: "mt-0.5 h-4 w-4 shrink-0 text-rose-300",
                  }),
              e.jsxs("span", {
                children: [
                  e.jsx("span", {
                    className: "sr-only",
                    children: p.right ? "Correct. " : "Incorrect. ",
                  }),
                  At(g.column),
                  ": ",
                  rt(g),
                ],
              }),
            ],
          })
        : null,
      u
        ? e.jsxs("div", {
            className:
              "flex flex-wrap items-center justify-center gap-x-6 gap-y-3",
            children: [
              e.jsx(ge, { label: "Write", value: c, onChange: f }),
              e.jsx(ge, { label: "Carry", value: h, onChange: m }),
              e.jsx("button", {
                type: "button",
                className: A,
                disabled: c === null || h === null,
                onClick: L,
                "data-bakery-place": !0,
                children: "Place",
              }),
            ],
          })
        : y === null
          ? e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsx("h3", {
                  className: "text-lg font-semibold text-slate-50",
                  children: "Does it fit on the 8-slot tray?",
                }),
                e.jsx(G, {
                  label: "Tray",
                  options: ue,
                  picked: y,
                  answer: N,
                  onPick: v,
                }),
              ],
            })
          : e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsx(G, {
                  label: "Tray",
                  options: ue,
                  picked: y,
                  answer: N,
                  onPick: v,
                }),
                e.jsxs(X, {
                  right: y === N,
                  nextLabel: s ? "See results" : "Next order",
                  onNext: W,
                  children: [
                    e.jsxs("p", {
                      className: "font-mono text-base text-amber-100",
                      children: [
                        M(t.a),
                        " + ",
                        M(t.b),
                        " = ",
                        t.a + t.b > 255 ? "1 " : "",
                        M((t.a + t.b) & 255),
                      ],
                    }),
                    e.jsx("p", { children: me(t.a, t.b) }),
                  ],
                }),
              ],
            }),
    ],
  });
}
function Et({ order: t, isLast: s, onDone: n }) {
  const [a, i] = b.useState(() => t.rows.map(() => "")),
    [r, c] = b.useState(!1),
    f = t.rows.every((d, u) => Ae(d.missing, a[u]) !== null),
    h = t.rows.map((d, u) => We(d, a[u])),
    m = h.filter(Boolean).length;
  function y(d) {
    (d.preventDefault(), !(r || !f) && c(!0));
  }
  function v() {
    const d = t.rows.filter((u, p) => !h[p]);
    n({
      id: t.id,
      title: t.title,
      earned: m * w.label,
      max: t.rows.length * w.label,
      review: d.length ? d.map(ye).join(" ") : null,
    });
  }
  return e.jsxs("div", {
    className: "space-y-4",
    "data-bakery-labels": !0,
    children: [
      e.jsxs("form", {
        onSubmit: y,
        className: "space-y-3",
        children: [
          e.jsxs("table", {
            className:
              "bakery-label-table w-full table-fixed border-separate border-spacing-y-2 text-center",
            children: [
              e.jsx("thead", {
                children: e.jsx("tr", {
                  children: be.map((d) =>
                    e.jsx(
                      "th",
                      {
                        scope: "col",
                        className: `pb-1 text-xs font-semibold text-slate-300 ${d.id === "binary" ? "w-[42%]" : ""}`,
                        children: d.name,
                      },
                      d.id,
                    ),
                  ),
                }),
              }),
              e.jsx("tbody", {
                children: t.rows.map((d, u) =>
                  e.jsx(
                    "tr",
                    {
                      className: "bakery-label",
                      "data-bakery-label": d.missing,
                      children: be.map((p) =>
                        e.jsx(
                          "td",
                          {
                            className:
                              "px-1 py-2 font-mono text-base font-bold text-stone-900 sm:text-lg",
                            children:
                              p.id === d.missing
                                ? e.jsx("input", {
                                    type: "text",
                                    inputMode:
                                      p.id === "hex" ? "text" : "numeric",
                                    autoComplete: "off",
                                    spellCheck: !1,
                                    "aria-label": `Label ${u + 1}: ${p.name}`,
                                    value: a[u],
                                    readOnly: r,
                                    maxLength:
                                      p.id === "binary"
                                        ? 8
                                        : p.id === "hex"
                                          ? 2
                                          : 3,
                                    onChange: (g) =>
                                      i((N) =>
                                        N.map((C, L) =>
                                          L === u ? g.target.value : C,
                                        ),
                                      ),
                                    "data-mark": r
                                      ? h[u]
                                        ? "right"
                                        : "wrong"
                                      : void 0,
                                    className:
                                      "bakery-label-input w-full min-w-0 rounded-md px-1 py-1 text-center font-mono uppercase outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                                  })
                                : pt(d.value, p.id),
                          },
                          p.id,
                        ),
                      ),
                    },
                    `${d.value}-${d.missing}`,
                  ),
                ),
              }),
            ],
          }),
          r
            ? null
            : e.jsx("button", {
                type: "submit",
                className: A,
                disabled: !f,
                "data-bakery-check-labels": !0,
                children: "Print the labels",
              }),
        ],
      }),
      r
        ? e.jsx(X, {
            right: m === t.rows.length,
            nextLabel: s ? "See results" : "Next order",
            onNext: v,
            children: e.jsx("ul", {
              className: "space-y-2",
              children: t.rows.map((d, u) =>
                e.jsxs(
                  "li",
                  {
                    className: "flex items-start gap-2",
                    children: [
                      h[u]
                        ? e.jsx(U, {
                            "aria-label": "right",
                            className: "mt-1 h-4 w-4 shrink-0 text-emerald-300",
                          })
                        : e.jsx(Y, {
                            "aria-label": "wrong",
                            className: "mt-1 h-4 w-4 shrink-0 text-rose-300",
                          }),
                      e.jsxs("span", {
                        children: [
                          ye(d),
                          gt(d, a[u])
                            ? ` ${a[u].trim()} is the same as ${M(d.value)}: the leading zeros fill the 8 bits.`
                            : "",
                        ],
                      }),
                    ],
                  },
                  `${d.value}-${d.missing}`,
                ),
              ),
            }),
          })
        : null,
    ],
  });
}
const te = 7,
  Tt = xt.map((t) => ({ id: `${t.direction}-${t.places}`, text: Ce(t) }));
function se({ slot: t, keyPrefix: s }) {
  const n = Te();
  return e.jsxs(R.span, {
    layoutId: `${s}-${t.id}`,
    layout: !n,
    transition: n
      ? { duration: 0 }
      : { type: "spring", stiffness: 420, damping: 34 },
    className: "bakery-shift-bun",
    "data-bit": t.bit,
    children: [
      e.jsx(ae, { bit: t.bit, className: "h-full w-full" }),
      e.jsx("span", { className: "bakery-bun-digit", children: t.bit }),
    ],
  });
}
function It({ order: t, isLast: s, onDone: n }) {
  const [a, i] = b.useState([]),
    [r, c] = b.useState(null),
    [f, h] = b.useState(null),
    [m, y] = b.useState(null),
    v = ot(t.value, a),
    d = t.mode === "goal",
    u = Se(t.value, t.direction, t.places),
    p = `${t.direction}-${t.places}`,
    g = d ? f : m,
    N = d ? f === u : m === p,
    C = `bun-${t.id}`;
  function L(l) {
    r || a.length >= te || i((x) => [...x, l]);
  }
  function S() {
    if (r || a.length === 0) return;
    const l = dt(a, t.direction, t.places);
    (c({ moves: a, right: l }),
      l || i(Array.from({ length: t.places }, () => t.direction)));
  }
  const W = b.useRef(null);
  function O(l) {
    if (r || l.altKey || l.ctrlKey || l.metaKey) return;
    const x = document.activeElement;
    (x && x !== document.body && !W.current?.contains(x)) ||
      (l.key === "ArrowLeft"
        ? (l.preventDefault(), L("left"))
        : l.key === "ArrowRight" && (l.preventDefault(), L("right")));
  }
  b.useEffect(
    () => (
      window.addEventListener("keydown", O),
      () => window.removeEventListener("keydown", O)
    ),
  );
  function T() {
    const l = (r?.right ? w.shift : 0) + (N ? w.shiftCall : 0),
      x = w.shift + w.shiftCall;
    n({
      id: t.id,
      title: t.title,
      earned: l,
      max: x,
      review: l === x ? null : pe(t.value, t.direction, t.places),
    });
  }
  const Q = d
    ? `${Ce(t)} needs a ${t.places}-place ${t.direction} shift: it ${Le(t.direction, t.places)}.`
    : `The card needed a ${t.places}-place ${t.direction} shift.`;
  return e.jsxs("div", {
    ref: W,
    className: "space-y-4",
    "data-bakery-shift": t.id,
    children: [
      e.jsxs("div", {
        className: "flex flex-wrap items-center gap-x-4 gap-y-1",
        children: [
          e.jsx("p", {
            className: "font-mono text-lg font-bold text-amber-100",
            "data-bakery-target": !0,
            children: M(t.value),
          }),
          e.jsx("p", {
            className: "font-mono text-lg font-bold text-amber-300",
            "aria-live": "polite",
            "data-bakery-moves": !0,
            children: a.map((l) => (l === "left" ? "←" : "→")).join(" "),
          }),
        ],
      }),
      e.jsx(ze, {
        id: C,
        children: e.jsx("div", {
          className: "bakery-board rounded-2xl p-2 sm:p-3",
          role: "group",
          "aria-label": `Tray: ${v.slots.map((l) => l.bit).join("")}`,
          "data-bakery-tray": v.slots.map((l) => l.bit).join(""),
          children: e.jsxs("div", {
            className: "bakery-shift-grid",
            children: [
              e.jsx("div", {
                className: "bakery-drop bakery-drop-left",
                "aria-hidden": "true",
                "data-bakery-lost": "left",
                children: v.lostLeft
                  .slice(-4)
                  .map((l) => e.jsx(se, { slot: l, keyPrefix: C }, l.id)),
              }),
              e.jsxs("div", {
                className: "bakery-shift-tray",
                children: [
                  q.map((l) =>
                    e.jsx(
                      "span",
                      {
                        className: "bakery-place",
                        "aria-hidden": "true",
                        children: l,
                      },
                      l,
                    ),
                  ),
                  v.slots.map((l) =>
                    e.jsx(
                      "span",
                      {
                        className: "bakery-shift-cell",
                        children: e.jsx(se, { slot: l, keyPrefix: C }),
                      },
                      `cell-${l.id}`,
                    ),
                  ),
                ],
              }),
              e.jsx("div", {
                className: "bakery-drop bakery-drop-right",
                "aria-hidden": "true",
                "data-bakery-lost": "right",
                children: v.lostRight
                  .slice(0, 4)
                  .map((l) => e.jsx(se, { slot: l, keyPrefix: C }, l.id)),
              }),
            ],
          }),
        }),
      }),
      r === null
        ? e.jsxs("div", {
            className: "flex flex-wrap items-center justify-center gap-2",
            children: [
              e.jsxs("button", {
                type: "button",
                className: ee,
                onClick: () => L("left"),
                disabled: a.length >= te,
                children: [
                  e.jsx(Ee, { "aria-hidden": "true", className: "h-4 w-4" }),
                  "Shift left",
                ],
              }),
              e.jsxs("button", {
                type: "button",
                className: ee,
                onClick: () => L("right"),
                disabled: a.length >= te,
                children: [
                  "Shift right",
                  e.jsx(ke, { "aria-hidden": "true", className: "h-4 w-4" }),
                ],
              }),
              e.jsx("button", {
                type: "button",
                className: ee,
                onClick: () => i([]),
                disabled: a.length === 0,
                "aria-label": "Start again",
                children: e.jsx(we, {
                  "aria-hidden": "true",
                  className: "h-4 w-4",
                }),
              }),
              e.jsx("button", {
                type: "button",
                className: A,
                onClick: S,
                disabled: a.length === 0,
                "data-bakery-serve": !0,
                children: "Serve",
              }),
            ],
          })
        : e.jsxs("div", {
            className: "space-y-3",
            children: [
              e.jsxs("p", {
                className: `rounded-lg px-3 py-2 text-sm ${r.right ? "bg-emerald-500/10 text-emerald-100" : "bg-rose-500/10 text-rose-100"}`,
                "aria-live": "polite",
                "data-bakery-served": r.right ? "correct" : "wrong",
                children: [
                  e.jsx("span", {
                    className: "sr-only",
                    children: r.right ? "Correct. " : "Incorrect. ",
                  }),
                  r.right
                    ? `${M(t.value)} → ${M(ct(v.slots))}`
                    : `You made ${ft(r.moves)}. ${Q}`,
                ],
              }),
              e.jsx("h3", {
                className: "text-lg font-semibold text-slate-50",
                children: d
                  ? "Is the new batch exact?"
                  : "What did the shift do to the number?",
              }),
              d
                ? e.jsx(G, {
                    label: "Exact",
                    options: ht,
                    picked: f,
                    answer: u,
                    onPick: h,
                  })
                : e.jsx(G, {
                    label: "Effect",
                    options: Tt,
                    picked: m,
                    answer: p,
                    onPick: y,
                    columns: !0,
                  }),
              g !== null
                ? e.jsx(X, {
                    right: r.right && N,
                    nextLabel: s ? "See results" : "Next order",
                    onNext: T,
                    children: e.jsx("p", {
                      children: pe(t.value, t.direction, t.places),
                    }),
                  })
                : null,
            ],
          }),
    ],
  });
}
function Rt({ order: t, isLast: s, onDone: n }) {
  const { question: a } = t,
    [i, r] = b.useState(""),
    [c, f] = b.useState(null),
    h = `bakery-van-${a.id}`;
  function m(u) {
    (u.preventDefault(), !(c !== null || le(i) === null) && f(mt(a, i)));
  }
  function y() {
    n({
      id: t.id,
      title: t.title,
      earned: c ? w.van : 0,
      max: w.van,
      review: c ? null : `${a.prompt} ${a.explanation}`,
    });
  }
  const [v, d] = a.answers;
  return e.jsxs("div", {
    className: "space-y-4",
    "data-bakery-van": a.id,
    children: [
      e.jsxs("form", {
        onSubmit: m,
        className: "space-y-3",
        children: [
          e.jsx("label", {
            htmlFor: h,
            className: "block text-lg font-semibold leading-snug text-slate-50",
            children: a.prompt,
          }),
          e.jsxs("div", {
            className: "flex flex-wrap items-center gap-2",
            children: [
              e.jsxs("div", {
                className:
                  "flex min-w-0 flex-1 items-center rounded-lg border border-slate-600 bg-slate-950/60 focus-within:ring-2 focus-within:ring-amber-300",
                children: [
                  e.jsx("input", {
                    id: h,
                    type: "text",
                    inputMode: "decimal",
                    autoComplete: "off",
                    value: i,
                    readOnly: c !== null,
                    onChange: (u) => r(u.target.value),
                    className:
                      "min-w-0 flex-1 bg-transparent px-3 py-2.5 font-mono text-lg text-slate-50 outline-none",
                  }),
                  e.jsx("span", {
                    className: "px-3 font-mono text-sm text-slate-400",
                    children: a.unit,
                  }),
                ],
              }),
              c === null
                ? e.jsx("button", {
                    type: "submit",
                    className: A,
                    disabled: le(i) === null,
                    "data-bakery-load": !0,
                    children: "Load the van",
                  })
                : null,
            ],
          }),
        ],
      }),
      c !== null
        ? e.jsxs(X, {
            right: c,
            nextLabel: s ? "See results" : "Next order",
            onNext: y,
            children: [
              e.jsxs("p", {
                className: "font-mono text-base text-amber-100",
                children: [ie(v), " ", a.unit],
              }),
              e.jsx("p", { children: a.explanation }),
              d !== void 0
                ? e.jsxs("p", {
                    className: "text-slate-300",
                    children: [
                      "Using 1024 in place of 1000 is also accepted: ",
                      ie(d),
                      " ",
                      a.unit,
                      ".",
                    ],
                  })
                : null,
            ],
          })
        : null,
    ],
  });
}
const je = "binary-bakery-fonts",
  Pt =
    "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;700&display=swap";
function Ft() {
  b.useEffect(() => {
    if (document.getElementById(je)) return;
    const t = document.createElement("link");
    ((t.id = je),
      (t.rel = "stylesheet"),
      (t.href = Pt),
      document.head.appendChild(t));
  }, []);
}
function Ht({ results: t, total: s }) {
  return e.jsxs("div", {
    className: "flex items-center gap-1.5",
    "data-bakery-progress": !0,
    children: [
      e.jsx("span", {
        className: "sr-only",
        children: `${t.length} of ${s} orders served`,
      }),
      Array.from({ length: s }, (n, a) => {
        const i = t[a],
          r = i
            ? i.earned === i.max
              ? "perfect"
              : "missed"
            : a === t.length
              ? "next"
              : "pending";
        return e.jsx(
          "span",
          {
            "aria-hidden": "true",
            "data-bakery-dot": r,
            className: `h-2.5 w-2.5 rounded-full transition-colors duration-300 ${r === "perfect" ? "bg-emerald-400" : r === "missed" ? "bg-amber-500" : r === "next" ? "bg-slate-200" : "bg-slate-700"}`,
          },
          a,
        );
      }),
    ],
  });
}
function qt({ order: t, number: s, total: n }) {
  return e.jsxs("article", {
    className: "bakery-ticket overflow-hidden rounded-xl",
    "data-bakery-ticket": t.kind,
    children: [
      e.jsx(ce, { scene: t.scene, className: "block h-auto w-full" }),
      e.jsxs("div", {
        className: "space-y-1.5 px-4 pb-4 pt-3",
        children: [
          e.jsxs("p", {
            className: "font-mono text-xs font-bold text-stone-500",
            children: ["#", s, "/", n],
          }),
          e.jsx("h2", {
            className: "font-bakery text-2xl font-bold text-stone-900",
            children: t.title,
          }),
          t.kind === "van"
            ? null
            : e.jsx("p", {
                className: "leading-6 text-stone-800",
                "data-bakery-ticket-text": !0,
                children: t.text,
              }),
        ],
      }),
    ],
  });
}
function Ot({ order: t, isLast: s, onDone: n }) {
  return t.kind === "add"
    ? e.jsx(Wt, { order: t, isLast: s, onDone: n })
    : t.kind === "shift"
      ? e.jsx(It, { order: t, isLast: s, onDone: n })
      : t.kind === "label"
        ? e.jsx(Et, { order: t, isLast: s, onDone: n })
        : e.jsx(Rt, { order: t, isLast: s, onDone: n });
}
function Qt({ results: t, onAgain: s }) {
  const n = t.reduce((r, c) => r + c.earned, 0),
    a = t.reduce((r, c) => r + c.max, 0),
    i = t.filter((r) => r.review);
  return e.jsxs(R.div, {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    className:
      "grid items-start gap-5 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]",
    "aria-live": "polite",
    "data-game-finished": !0,
    children: [
      e.jsxs("div", {
        className: "bakery-ticket overflow-hidden rounded-xl",
        children: [
          e.jsx(ce, { scene: "shopfront", className: "block h-auto w-full" }),
          e.jsxs("div", {
            className: "space-y-1 px-4 pb-5 pt-3 text-center",
            children: [
              e.jsx("h2", {
                className: "font-bakery text-3xl font-bold text-stone-900",
                "data-bakery-rank": !0,
                children: Bt(n, a),
              }),
              e.jsx("p", {
                className: "font-mono text-4xl font-bold text-rose-700",
                children: n,
              }),
              e.jsxs("p", {
                className: "font-mono text-sm text-stone-600",
                children: ["of ", a],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "min-w-0 space-y-4",
        children: [
          e.jsx("ul", {
            className: "grid gap-1.5 sm:grid-cols-2",
            children: t.map((r) => {
              const c = r.earned === r.max;
              return e.jsxs(
                "li",
                {
                  className:
                    "flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/50 px-3 py-2 text-sm",
                  children: [
                    c
                      ? e.jsx(U, {
                          "aria-label": "perfect",
                          className: "h-4 w-4 shrink-0 text-emerald-300",
                        })
                      : e.jsx(Y, {
                          "aria-label": "not perfect",
                          className: "h-4 w-4 shrink-0 text-amber-300",
                        }),
                    e.jsx("span", {
                      className: "min-w-0 flex-1 truncate text-slate-200",
                      children: r.title,
                    }),
                    e.jsxs("span", {
                      className: "font-mono text-slate-400",
                      children: [r.earned, "/", r.max],
                    }),
                  ],
                },
                r.id,
              );
            }),
          }),
          i.length
            ? e.jsxs("div", {
                className: "space-y-2",
                "data-bakery-review": !0,
                children: [
                  e.jsx("h3", {
                    className: "font-bakery text-xl font-bold text-amber-200",
                    children: "Back to the kitchen",
                  }),
                  i.map((r) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "border-l-4 border-amber-500/60 bg-slate-950/40 py-2 pl-3 pr-2 text-sm leading-6 text-slate-200",
                        children: [
                          e.jsx("p", {
                            className: "font-semibold text-slate-50",
                            children: r.title,
                          }),
                          e.jsx("p", { children: r.review }),
                        ],
                      },
                      r.id,
                    ),
                  ),
                ],
              })
            : null,
          e.jsxs("button", {
            type: "button",
            className: A,
            onClick: s,
            "data-bakery-again": !0,
            children: [
              e.jsx(we, { "aria-hidden": "true", className: "h-4 w-4" }),
              "Bake again",
            ],
          }),
        ],
      }),
    ],
  });
}
function Gt({ random: t } = {}) {
  Ft();
  const [s, n] = b.useState(0),
    a = b.useMemo(() => Lt(t), [s, t]),
    [i, r] = b.useState("intro"),
    [c, f] = b.useState([]),
    h = c.length,
    m = a[h],
    y = c.reduce((p, g) => p + g.earned, 0);
  Re(c.length, a.length, c.filter((p) => p.earned >= p.max).length);
  function v(p) {
    const g = [...c, p];
    (f(g), g.length >= a.length && r("done"));
  }
  function d() {
    (n((p) => p + 1), f([]), r("playing"));
  }
  const u = a.reduce((p, g) => p + Ct(g), 0);
  return e.jsxs("div", {
    className: "binary-bakery overflow-hidden rounded-2xl p-3 sm:p-6",
    "data-binary-bakery": !0,
    children: [
      i === "playing"
        ? e.jsxs("div", {
            className: "mb-4 flex items-center justify-between gap-3",
            children: [
              e.jsx(Ht, { results: c, total: a.length }),
              e.jsxs("p", {
                className: "text-right",
                children: [
                  e.jsx("span", { className: "sr-only", children: "Score" }),
                  e.jsx("span", {
                    className: "font-mono text-2xl font-bold text-amber-300",
                    "data-bakery-score": !0,
                    children: y,
                  }),
                  e.jsxs("span", {
                    className: "font-mono text-xs text-slate-400",
                    children: [" / ", u],
                  }),
                ],
              }),
            ],
          })
        : null,
      i === "intro"
        ? e.jsxs(R.div, {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            className: "mx-auto max-w-xl space-y-5 text-center",
            "data-bakery-intro": !0,
            children: [
              e.jsx("div", {
                className: "bakery-ticket overflow-hidden rounded-xl",
                children: e.jsx(ce, {
                  scene: "shopfront",
                  className: "block h-auto w-full",
                }),
              }),
              e.jsxs("button", {
                type: "button",
                className: `${A} px-6 text-base`,
                onClick: () => r("playing"),
                "data-bakery-start": !0,
                children: [
                  e.jsx(Ie, { "aria-hidden": "true", className: "h-4 w-4" }),
                  "Open the shop",
                ],
              }),
            ],
          })
        : i === "done"
          ? e.jsxs(e.Fragment, {
              children: [
                e.jsx(Qt, { results: c, onAgain: d }),
                e.jsx(Pe, { game: "binary-bakery" }),
              ],
            })
          : m
            ? e.jsx(qe, {
                mode: "wait",
                children: e.jsxs(
                  R.div,
                  {
                    initial: { opacity: 0, x: 24 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -24 },
                    transition: { duration: 0.25 },
                    className:
                      "grid items-start gap-5 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]",
                    "data-bakery-order": m.id,
                    children: [
                      e.jsx(qt, { order: m, number: h + 1, total: a.length }),
                      e.jsx("div", {
                        className: "min-w-0",
                        children: e.jsx(Ot, {
                          order: m,
                          isLast: h + 1 === a.length,
                          onDone: v,
                        }),
                      }),
                    ],
                  },
                  `${s}-${m.id}`,
                ),
              })
            : null,
    ],
  });
}
export { Gt as default };
