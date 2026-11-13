import { j as e, r as b } from "./react-vendor-BK1G6oO1.js";
import { aq as ge, aT as we } from "./GameNotebook-b0Qw2wzd.js";
import { d as O, K as be } from "./keyword-deck-Bo8inXG8.js";
import { u as ve } from "./helpers-DmEFZcxj.js";
import { b as Me } from "./keyword-text-BtYtr9f7.js";
import "./index-DjyiOHey.js";
import "./ui-components-DeMDYLzO.js";
import "./keyword-flashcards-Ha6Msavb.js";
import "./use-cover-art-CyGvgy9q.js";
const i = {
    ink: "#1f2a44",
    inkSoft: "#2d3a5c",
    muted: "#5a6684",
    grey: "#9aa6c4",
    white: "#ffffff",
    paper: "#fff8ec",
    paperDeep: "#f3ead6",
    sky: "#e8f4ff",
    skyPale: "#eaf2ff",
    skySoft: "#cfe0fb",
    skyMid: "#9fc3e6",
    blue: "#4a7bd0",
    mintWash: "#d6f5e3",
    mintSoft: "#b9ebcf",
    mint: "#7dd8b5",
    mintDeep: "#2f9e76",
    amberWash: "#fff1dc",
    yellow: "#ffd166",
    amber: "#f2a541",
    amberInk: "#8a5310",
    peach: "#ffb38a",
    lilac: "#c9b8ff",
    pink: "#ff9fbf",
    sheetDeep: "#0f2a52",
    sheet: "#163a6b",
    sheetGrid: "#22508f",
    highlighter: "#fff35c",
    cyan: "#7fe3ff",
  },
  f = { cable: i.highlighter, wifi: i.cyan, bluetooth: i.lilac },
  m = {
    fill: "none",
    stroke: i.ink,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
function L({ icon: s }) {
  switch (s) {
    case "pc":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 4,
            y: 6,
            width: 24,
            height: 16,
            rx: 2.5,
            fill: i.sky,
            ...k,
          }),
          e.jsx("path", { d: "M16 22v4M11 26.5h10", ...m }),
          e.jsx("path", { d: "M8 11h9M8 15h6", ...m, stroke: i.blue }),
        ],
      });
    case "server":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 8,
            y: 3.5,
            width: 16,
            height: 25,
            rx: 2.5,
            fill: i.skySoft,
            ...k,
          }),
          e.jsx("path", { d: "M11 10h7M11 16h7M11 22h7", ...m }),
          e.jsx("circle", { cx: 21, cy: 10, r: 1.2, fill: i.mintDeep }),
          e.jsx("circle", { cx: 21, cy: 16, r: 1.2, fill: i.mintDeep }),
          e.jsx("circle", { cx: 21, cy: 22, r: 1.2, fill: i.mintDeep }),
        ],
      });
    case "tablet":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 7.5,
            y: 4,
            width: 17,
            height: 24,
            rx: 3,
            fill: i.sky,
            ...k,
          }),
          e.jsx("rect", {
            x: 10.5,
            y: 7.5,
            width: 11,
            height: 15,
            rx: 1,
            fill: i.skyMid,
          }),
          e.jsx("circle", { cx: 16, cy: 25, r: 1.1, fill: i.ink }),
        ],
      });
    case "laptop":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 7,
            y: 7.5,
            width: 18,
            height: 12.5,
            rx: 1.8,
            fill: i.sky,
            ...k,
          }),
          e.jsx("path", {
            d: "M3.5 24.5h25l-2.5-4.5h-20z",
            fill: i.skySoft,
            ...k,
          }),
        ],
      });
    case "laptops":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 12,
            y: 4.5,
            width: 15,
            height: 10,
            rx: 1.5,
            fill: i.skySoft,
            ...k,
          }),
          e.jsx("path", { d: "M10 17.5h19l-2-3h-15z", fill: i.skySoft, ...k }),
          e.jsx("rect", {
            x: 5,
            y: 13,
            width: 15,
            height: 10,
            rx: 1.5,
            fill: i.sky,
            ...k,
          }),
          e.jsx("path", { d: "M3 26h19l-2-3h-15z", fill: i.sky, ...k }),
        ],
      });
    case "headset":
      return e.jsxs("g", {
        children: [
          e.jsx("path", { d: "M7.5 18v-3a8.5 8.5 0 0 1 17 0v3", ...m }),
          e.jsx("rect", {
            x: 4.5,
            y: 16.5,
            width: 6,
            height: 9,
            rx: 2.5,
            fill: i.lilac,
            ...k,
          }),
          e.jsx("rect", {
            x: 21.5,
            y: 16.5,
            width: 6,
            height: 9,
            rx: 2.5,
            fill: i.lilac,
            ...k,
          }),
          e.jsx("path", { d: "M8 25.5c1 3 4 3.5 7 3.5", ...m }),
          e.jsx("circle", { cx: 16, cy: 29, r: 1.4, fill: i.ink }),
        ],
      });
    case "earpiece":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M10 13a6 6 0 1 1 9 5.2V25a2.5 2.5 0 0 1-5 0v-5",
            fill: i.lilac,
            ...k,
          }),
          e.jsx("circle", { cx: 16, cy: 13, r: 2, fill: i.ink }),
          e.jsx("path", {
            d: "M23.5 8.5a8 8 0 0 1 0 9M26.5 6a12 12 0 0 1 0 14",
            ...m,
          }),
        ],
      });
    case "camera":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 3.5,
            y: 10,
            width: 18,
            height: 13,
            rx: 2.5,
            fill: i.sky,
            ...k,
          }),
          e.jsx("path", {
            d: "M21.5 14.5l7-4v12l-7-4z",
            fill: i.skySoft,
            ...k,
          }),
          e.jsx("circle", { cx: 10, cy: 16.5, r: 3, fill: i.skyMid, ...k }),
          e.jsx("circle", { cx: 17.5, cy: 13, r: 1.1, fill: i.pink }),
        ],
      });
    case "scanner":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M6 7h15a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-4l-2 10.5a1.5 1.5 0 0 1-1.5 1.2h-2.5a1.4 1.4 0 0 1-1.4-1.7L11.5 16H6a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3z",
            fill: i.sky,
            ...k,
          }),
          e.jsx("path", {
            d: "M24 9.5l4.5-2M24 13.5l4.5 2",
            ...m,
            stroke: i.pink,
          }),
        ],
      });
    case "keyboard":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 2.5,
            y: 9.5,
            width: 27,
            height: 14,
            rx: 2.5,
            fill: i.sky,
            ...k,
          }),
          e.jsx("path", {
            d: "M7 14h.01M11 14h.01M15 14h.01M19 14h.01M23 14h.01M7 18h.01M25 18h.01M11 18.5h10",
            ...m,
            strokeWidth: 2.2,
          }),
        ],
      });
    case "printer":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 10,
            y: 4,
            width: 12,
            height: 8,
            rx: 1,
            fill: i.white,
            ...k,
          }),
          e.jsx("rect", {
            x: 5,
            y: 11.5,
            width: 22,
            height: 10,
            rx: 2.5,
            fill: i.skySoft,
            ...k,
          }),
          e.jsx("path", { d: "M10 21.5v6.5h12v-6.5", fill: i.pink, ...k }),
          e.jsx("circle", { cx: 22.5, cy: 15.5, r: 1.2, fill: i.mintDeep }),
        ],
      });
    case "kiosk":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 8,
            y: 3.5,
            width: 16,
            height: 18,
            rx: 2.5,
            fill: i.sky,
            ...k,
          }),
          e.jsx("path", {
            d: "M11.5 15l3-3.5 2.5 2.5 2-2 2 3",
            ...m,
            strokeWidth: 1.6,
          }),
          e.jsx("circle", { cx: 13, cy: 8.5, r: 1.4, fill: i.pink }),
          e.jsx("path", { d: "M16 21.5v6M10.5 28h11", ...m }),
        ],
      });
    case "phone":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 10,
            y: 4,
            width: 12,
            height: 24,
            rx: 2.5,
            fill: i.sky,
            ...k,
          }),
          e.jsx("path", { d: "M14 7.5h4", ...m }),
          e.jsx("circle", { cx: 16, cy: 24.5, r: 1, fill: i.ink }),
        ],
      });
    case "screen":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 2.5,
            y: 5,
            width: 27,
            height: 17,
            rx: 2,
            fill: i.sky,
            ...k,
          }),
          e.jsx("path", { d: "M7 11h12M7 15.5h8", ...m, stroke: i.blue }),
          e.jsx("path", { d: "M16 22v5M10 27.5h12", ...m }),
        ],
      });
  }
}
const k = { stroke: i.ink, strokeWidth: 2, strokeLinejoin: "round" };
function q({ mode: s, colour: t = i.ink }) {
  const r = { ...m, stroke: t };
  switch (s) {
    case "cable":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", { x: 6, y: 3, width: 12, height: 11, rx: 2.2, ...r }),
          e.jsx("path", {
            d: "M9.5 6.5v3M12 6.5v3M14.5 6.5v3M10 14v3h4v-3M12 17v4.5",
            ...r,
          }),
        ],
      });
    case "wifi":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M3 9.5a13 13 0 0 1 18 0M6.5 13a8 8 0 0 1 11 0M9.8 16.5a3.2 3.2 0 0 1 4.4 0",
            ...r,
          }),
          e.jsx("circle", { cx: 12, cy: 19.8, r: 1.6, fill: t }),
        ],
      });
    case "bluetooth":
      return e.jsx("path", { d: "M6.5 7.5l11 9-5.5 5V2.5l5.5 5-11 9", ...r });
  }
}
function $({ locked: s, colour: t = i.ink }) {
  return e.jsxs("g", {
    children: [
      e.jsx("path", {
        d: s ? "M8 11V7.5a4 4 0 0 1 8 0V11" : "M8 11V7.5a4 4 0 0 1 7.6-1.8",
        ...m,
        stroke: t,
      }),
      e.jsx("rect", {
        x: 5,
        y: 10.5,
        width: 14,
        height: 10.5,
        rx: 2.2,
        fill: s ? i.highlighter : i.white,
        stroke: t,
        strokeWidth: 2,
      }),
      e.jsx("circle", { cx: 12, cy: 15.5, r: 1.4, fill: t }),
    ],
  });
}
function C({ verdict: s }) {
  return s === "smooth"
    ? e.jsxs("g", {
        children: [
          e.jsx("circle", {
            cx: 12,
            cy: 12,
            r: 10,
            fill: i.mint,
            stroke: i.ink,
            strokeWidth: 2,
          }),
          e.jsx("path", { d: "M7.5 12.5l3 3 6-6.5", ...m, strokeWidth: 2.4 }),
        ],
      })
    : e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M12 2.5l10 17.5H2z",
            fill: i.amber,
            stroke: i.ink,
            strokeWidth: 2,
            strokeLinejoin: "round",
          }),
          e.jsx("path", { d: "M12 9v5", ...m, strokeWidth: 2.4 }),
          e.jsx("circle", { cx: 12, cy: 17, r: 1.3, fill: i.ink }),
        ],
      });
}
function We({ need: s }) {
  switch (s) {
    case "moves":
      return e.jsx("path", {
        d: "M3 12h18M6.5 8.5L3 12l3.5 3.5M17.5 8.5L21 12l-3.5 3.5",
        ...m,
      });
    case "huge":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5a1.5 1.5 0 0 1 1-1.5z",
            ...m,
          }),
          e.jsx("path", { d: "M9 12h6M9 16h6", ...m }),
        ],
      });
    case "walls":
      return e.jsx("path", {
        d: "M3 5h18v14H3zM3 9.7h18M3 14.3h18M9 5v4.7M15 5v4.7M6 9.7v4.6M12 9.7v4.6M18 9.7v4.6M9 14.3V19M15 14.3V19",
        ...m,
        strokeWidth: 1.7,
      });
    case "steady":
      return e.jsx("path", { d: "M2.5 12h4l2.5-6 4 12 2.5-6h6", ...m });
    case "pair":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", { x: 2.5, y: 7, width: 7, height: 10, rx: 2, ...m }),
          e.jsx("rect", { x: 14.5, y: 7, width: 7, height: 10, rx: 2, ...m }),
          e.jsx("path", { d: "M9.5 12h5", ...m, strokeDasharray: "1.5 2.5" }),
        ],
      });
    case "private":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z",
            ...m,
          }),
          e.jsx("circle", { cx: 12, cy: 12, r: 2.5, ...m }),
          e.jsx("path", { d: "M4 20L20 4", ...m }),
        ],
      });
    case "add":
      return e.jsxs("g", {
        children: [
          e.jsx("rect", { x: 2.5, y: 6, width: 11, height: 8, rx: 1.5, ...m }),
          e.jsx("path", { d: "M1.5 17.5h13M18 6v8M14 10h8", ...m }),
        ],
      });
    case "stays":
      return e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M12 21s6-5.5 6-11a6 6 0 0 0-12 0c0 5.5 6 11 6 11z",
            ...m,
          }),
          e.jsx("circle", { cx: 12, cy: 10, r: 2.2, ...m }),
        ],
      });
  }
}
function v({ box: s = 24, className: t, children: r }) {
  return e.jsx("svg", {
    className: t,
    viewBox: `0 0 ${s} ${s}`,
    width: s,
    height: s,
    "aria-hidden": "true",
    focusable: "false",
    children: r,
  });
}
function M({ mode: s, size: t = 24 }) {
  return e.jsxs("svg", {
    viewBox: "0 0 28 28",
    width: t,
    height: t,
    "aria-hidden": "true",
    focusable: "false",
    className: "sm-mode-disc",
    children: [
      e.jsx("circle", {
        cx: 14,
        cy: 14,
        r: 12.5,
        fill: f[s],
        stroke: i.ink,
        strokeWidth: 2,
      }),
      e.jsx("g", {
        transform: "translate(2 2)",
        children: e.jsx(q, { mode: s }),
      }),
    ],
  });
}
function K({ kind: s, colour: t, walking: r = !1 }) {
  const a = { stroke: i.ink, strokeWidth: 2.2, strokeLinejoin: "round" },
    n = (x, c = 9) =>
      e.jsxs("g", {
        children: [
          e.jsx("circle", { cx: 32 - c, cy: x, r: 5.2, fill: i.white, ...a }),
          e.jsx("circle", { cx: 32 + c, cy: x, r: 5.2, fill: i.white, ...a }),
          e.jsx("circle", { cx: 33 - c, cy: x + 0.8, r: 2.4, fill: i.ink }),
          e.jsx("circle", { cx: 33 + c, cy: x + 0.8, r: 2.4, fill: i.ink }),
        ],
      }),
    o = (x, c = 6) =>
      e.jsx("path", {
        d: `M${32 - c} ${x}q${c} ${c * 0.8} ${c * 2} 0`,
        fill: "none",
        ...a,
        strokeLinecap: "round",
      }),
    h = e.jsxs("g", {
      children: [
        e.jsx("ellipse", { cx: 23, cy: 58, rx: 6, ry: 3.2, fill: t, ...a }),
        e.jsx("ellipse", { cx: 41, cy: 58, rx: 6, ry: 3.2, fill: t, ...a }),
      ],
    });
  let d;
  switch (s) {
    case "blob":
      d = e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M32 6v8",
            ...a,
            fill: "none",
            strokeLinecap: "round",
          }),
          e.jsx("circle", { cx: 32, cy: 5, r: 3, fill: i.highlighter, ...a }),
          e.jsx("path", {
            d: "M12 40c0-16 8-26 20-26s20 10 20 26c0 10-8 16-20 16s-20-6-20-16z",
            fill: t,
            ...a,
          }),
          n(32),
          o(42),
        ],
      });
      break;
    case "owl":
      d = e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M14 22l-2-12 10 7M50 22l2-12-10 7",
            fill: t,
            ...a,
          }),
          e.jsx("path", {
            d: "M12 38c0-14 8-22 20-22s20 8 20 22-8 18-20 18-20-4-20-18z",
            fill: t,
            ...a,
          }),
          e.jsx("ellipse", {
            cx: 32,
            cy: 44,
            rx: 11,
            ry: 9,
            fill: i.white,
            opacity: 0.7,
          }),
          n(31, 9),
          e.jsx("path", { d: "M29 37l3 4 3-4z", fill: i.yellow, ...a }),
        ],
      });
      break;
    case "frog":
      d = e.jsxs("g", {
        children: [
          e.jsx("circle", { cx: 21, cy: 20, r: 8, fill: t, ...a }),
          e.jsx("circle", { cx: 43, cy: 20, r: 8, fill: t, ...a }),
          e.jsx("path", {
            d: "M10 42c0-14 9-20 22-20s22 6 22 20c0 9-9 14-22 14s-22-5-22-14z",
            fill: t,
            ...a,
          }),
          e.jsx("circle", { cx: 21, cy: 20, r: 4, fill: i.white, ...a }),
          e.jsx("circle", { cx: 43, cy: 20, r: 4, fill: i.white, ...a }),
          e.jsx("circle", { cx: 22, cy: 20.5, r: 2, fill: i.ink }),
          e.jsx("circle", { cx: 44, cy: 20.5, r: 2, fill: i.ink }),
          e.jsx("path", {
            d: "M20 38q12 9 24 0",
            fill: "none",
            ...a,
            strokeLinecap: "round",
          }),
          e.jsx("circle", {
            cx: 17,
            cy: 42,
            r: 2.5,
            fill: i.pink,
            opacity: 0.8,
          }),
          e.jsx("circle", {
            cx: 47,
            cy: 42,
            r: 2.5,
            fill: i.pink,
            opacity: 0.8,
          }),
        ],
      });
      break;
    case "axolotl":
      d = e.jsxs("g", {
        children: [
          e.jsx("path", {
            d: "M14 24l-8-4M13 30l-9 0M14 36l-8 4M50 24l8-4M51 30l9 0M50 36l8 4",
            fill: "none",
            stroke: i.pink,
            strokeWidth: 4,
            strokeLinecap: "round",
          }),
          e.jsx("path", {
            d: "M14 24l-8-4M13 30l-9 0M14 36l-8 4M50 24l8-4M51 30l9 0M50 36l8 4",
            fill: "none",
            stroke: i.ink,
            strokeWidth: 1.2,
            strokeLinecap: "round",
          }),
          e.jsx("path", {
            d: "M13 36c0-13 8-21 19-21s19 8 19 21c0 12-8 20-19 20s-19-8-19-20z",
            fill: t,
            ...a,
          }),
          n(31, 9),
          o(41, 4),
        ],
      });
      break;
    case "bear":
      d = e.jsxs("g", {
        children: [
          e.jsx("circle", { cx: 17, cy: 18, r: 7, fill: t, ...a }),
          e.jsx("circle", { cx: 47, cy: 18, r: 7, fill: t, ...a }),
          e.jsx("circle", { cx: 32, cy: 36, r: 21, fill: t, ...a }),
          e.jsx("ellipse", {
            cx: 32,
            cy: 43,
            rx: 9,
            ry: 7,
            fill: i.paper,
            ...a,
          }),
          e.jsx("ellipse", { cx: 32, cy: 40, rx: 3, ry: 2.2, fill: i.ink }),
          n(31, 9),
        ],
      });
      break;
  }
  return e.jsxs("g", {
    "data-character": !0,
    className: `sm-creature${r ? " sm-walking" : ""}`,
    children: [h, d],
  });
}
function $e({ kind: s, colour: t, size: r = 56 }) {
  return e.jsxs("svg", {
    className: "sm-avatar",
    viewBox: "0 0 64 64",
    width: r,
    height: r,
    "aria-hidden": "true",
    focusable: "false",
    children: [
      e.jsx("circle", { cx: 32, cy: 34, r: 30, fill: i.skyPale }),
      e.jsx(K, { kind: s, colour: t }),
    ],
  });
}
function Te() {
  return e.jsxs("svg", {
    viewBox: "0 0 80 48",
    "aria-hidden": "true",
    focusable: "false",
    "data-card-art": "standards",
    children: [
      e.jsx("rect", {
        x: 1,
        y: 6,
        width: 30,
        height: 34,
        rx: 6,
        fill: i.peach,
        stroke: i.ink,
        strokeWidth: 2,
      }),
      e.jsx("rect", {
        x: 49,
        y: 6,
        width: 30,
        height: 34,
        rx: 6,
        fill: i.lilac,
        stroke: i.ink,
        strokeWidth: 2,
      }),
      e.jsx("g", {
        transform: "translate(0 7)",
        children: e.jsx(L, { icon: "laptop" }),
      }),
      e.jsx("g", {
        transform: "translate(48 5)",
        children: e.jsx(L, { icon: "pc" }),
      }),
      e.jsx("path", {
        d: "M31 23H49",
        fill: "none",
        stroke: i.ink,
        strokeWidth: 5,
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M31 23H49",
        fill: "none",
        stroke: i.highlighter,
        strokeWidth: 2.6,
        strokeLinecap: "round",
      }),
      e.jsx("circle", {
        cx: 40,
        cy: 38,
        r: 7,
        fill: i.mint,
        stroke: i.ink,
        strokeWidth: 2,
      }),
      e.jsx("path", {
        d: "M36.8 38.2l2.2 2.2 4.2-4.6",
        fill: "none",
        stroke: i.ink,
        strokeWidth: 2.2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
const Ne = ["cable", "wifi", "bluetooth"],
  I = { cable: "Ethernet", wifi: "Wi-Fi", bluetooth: "Bluetooth" },
  Se = {
    cable: "Ethernet cable",
    wifi: "Wi-Fi, encrypted",
    open: "Wi-Fi, not encrypted",
    bluetooth: "Bluetooth",
  },
  Z = 10,
  J = 10,
  R = 5,
  xe = ["Mon", "Tue", "Wed", "Thu", "Fri"],
  Le = {
    walls: ["cable"],
    bigfile: ["cable"],
    steady: ["cable"],
    moves: ["wifi", "open"],
    add: ["wifi", "open"],
    snoop: ["cable", "wifi"],
    free: ["bluetooth", "wifi", "open"],
    direct: ["bluetooth", "cable"],
  },
  Fe = {
    walls: {
      mode: "cable",
      text: "Ethernet: thick walls block Wi-Fi signals.",
    },
    bigfile: {
      mode: "cable",
      text: "Ethernet: much faster than Wi-Fi for huge files.",
    },
    steady: {
      mode: "cable",
      text: "Ethernet: little interference, so it stays connected.",
    },
    moves: {
      mode: "wifi",
      text: "Wi-Fi: the device can move anywhere in range.",
    },
    add: {
      mode: "wifi",
      text: "Wi-Fi: easy to add more devices, with no cables to fit.",
    },
    snoop: {
      mode: "wifi",
      text: "Encrypt the Wi-Fi: intercepted data cannot be understood without the key.",
    },
    free: {
      mode: "bluetooth",
      text: "Bluetooth: no cable, and it moves with you.",
    },
    direct: {
      mode: "bluetooth",
      text: "Bluetooth: pairs the two devices directly, with no Wi-Fi needed.",
    },
  },
  g = { w: 600, h: 720 },
  Ae = {
    id: "film",
    name: "Northlight Studios",
    kind: "Film studio",
    router: { x: 405, y: 292 },
    outline: { x: 20, y: 20, w: 560, h: 570 },
    outside: { x: 20, y: 610, w: 560, h: 95, name: "Car park" },
    rooms: [
      { id: "stage", name: "Sound stage", x: 20, y: 20, w: 340, h: 320 },
      { id: "edit", name: "Edit suite", x: 360, y: 20, w: 220, h: 170 },
      { id: "comms", name: "Comms", x: 360, y: 190, w: 90, h: 150 },
      {
        id: "vault",
        name: "Film vault",
        x: 450,
        y: 190,
        w: 130,
        h: 150,
        thick: !0,
      },
      { id: "office", name: "Office", x: 20, y: 340, w: 220, h: 250 },
      { id: "cafe", name: "Café", x: 240, y: 340, w: 340, h: 250 },
    ],
    devices: [
      {
        id: "edit-pc",
        name: "Edit suite PC",
        icon: "pc",
        x: 500,
        y: 100,
        kind: "network",
        best: "cable",
        needs: [
          { need: "huge", text: "200 GB of film a day" },
          { need: "stays", text: "Stays on its desk" },
        ],
      },
      {
        id: "vault-server",
        name: "Vault server",
        icon: "server",
        x: 525,
        y: 270,
        kind: "network",
        best: "cable",
        needs: [
          { need: "walls", text: "Behind thick concrete walls" },
          { need: "stays", text: "Never moves" },
        ],
      },
      {
        id: "camera-tablet",
        name: "Camera tablet",
        icon: "tablet",
        x: 120,
        y: 120,
        kind: "network",
        best: "wifi",
        needs: [
          { need: "moves", text: "Moves all over the stage" },
          { need: "private", text: "Shows secret new scenes" },
        ],
      },
      {
        id: "producer-laptop",
        name: "Producer laptop",
        icon: "laptop",
        x: 120,
        y: 470,
        kind: "network",
        best: "wifi",
        needs: [
          { need: "moves", text: "Carried from room to room" },
          { need: "private", text: "Sends contracts" },
        ],
      },
      {
        id: "director-headset",
        name: "Director headset",
        icon: "headset",
        x: 250,
        y: 230,
        kind: "personal",
        best: "bluetooth",
        needs: [
          { need: "pair", text: "Talks to the phone in their pocket" },
          { need: "moves", text: "Walks all round the set" },
        ],
        partner: { x: 322, y: 268, label: "Phone", icon: "phone" },
      },
    ],
    colleagues: {
      editor: { role: "Editor", creature: "owl", colour: "#c9b8ff" },
      wrangler: {
        role: "Data wrangler",
        creature: "axolotl",
        colour: "#ff9fbf",
      },
      camera: { role: "Camera operator", creature: "frog", colour: "#7dd8b5" },
      producer: { role: "Producer", creature: "bear", colour: "#ffb38a" },
      director: { role: "Director", creature: "blob", colour: "#ffd166" },
    },
    events: [
      {
        id: "vault-copy",
        device: "vault-server",
        test: "walls",
        time: "18:30",
        title: "Today’s footage goes in the vault",
        setup:
          "After the shoot, today’s footage is copied to the server in the film vault. The vault has thick concrete walls.",
        from: "wrangler",
        results: {
          cable: {
            headline: "Footage safe in the vault",
            message:
              "The cable runs through the vault wall, so the copy was done before I got in.",
          },
          wifi: {
            headline: "Nothing reached the vault",
            message:
              "The Wi-Fi signal can’t get through those thick concrete walls. Not one file copied, so we start again tonight.",
          },
        },
      },
      {
        id: "vault-scene",
        device: "vault-server",
        test: "walls",
        time: "10:15",
        title: "The director wants yesterday’s scene",
        setup:
          "The director wants to watch yesterday’s big scene again. It is on the server in the vault.",
        from: "wrangler",
        results: {
          cable: {
            headline: "On screen in seconds",
            message:
              "The vault server is on a cable, so the scene opened straight away.",
          },
          wifi: {
            headline: "The vault server keeps dropping out",
            message:
              "Behind those concrete walls the Wi-Fi is so weak the server kept dropping off. One scene took an hour to open.",
          },
        },
      },
      {
        id: "rushes",
        device: "edit-pc",
        test: "bigfile",
        time: "09:00",
        title: "200 GB of film lands",
        setup:
          "This morning’s shoot is 200 GB of film. The editor needs it on the edit suite PC by lunch.",
        from: "editor",
        tag: "200 GB",
        results: {
          cable: {
            headline: "Copied before the coffee break",
            message:
              "A cable is fast. All 200 GB was on my PC in well under an hour.",
          },
          wifi: {
            headline: "Still copying at lunch",
            message:
              "Wi-Fi is slower than a cable. The copy took most of the day, so we missed the lunchtime cut.",
          },
        },
      },
      {
        id: "live-review",
        device: "edit-pc",
        test: "steady",
        time: "14:00",
        title: "A live review with the bosses",
        setup:
          "The edit suite streams the new trailer live to the studio bosses. The café is full of crew on phones and laptops.",
        from: "editor",
        results: {
          cable: {
            headline: "Smooth from start to finish",
            message:
              "My PC is on a cable, so all those phones made no difference. Not one freeze.",
          },
          wifi: {
            headline: "The trailer froze three times",
            message:
              "All those wireless devices caused interference. The Wi-Fi kept dropping, and the bosses watched a frozen screen.",
          },
        },
      },
      {
        id: "far-end",
        device: "camera-tablet",
        test: "moves",
        time: "11:20",
        title: "A shot at the far end of the stage",
        setup:
          "The camera operator carries the tablet to the far end of the sound stage to plan the next shot.",
        from: "camera",
        results: {
          wifi: {
            headline: "Online all the way across",
            message:
              "Wi-Fi went everywhere I went on the stage. No cable, no fuss.",
          },
          cable: {
            headline: "The cable ran out",
            message:
              "The cable didn’t reach the far end, and it lay across the set right in the shot. We had to film it again.",
          },
        },
      },
      {
        id: "fence-fan",
        tag: "scene_42.mov",
        device: "camera-tablet",
        test: "snoop",
        time: "15:40",
        title: "A fan in the car park",
        setup:
          "A fan sits in the car park with a laptop, picking up the studio’s wireless signals to grab secret shots.",
        from: "camera",
        results: {
          wifi: {
            headline: "They got scrambled nonsense",
            message:
              "Our Wi-Fi is encrypted. The fan picked up the signal, but without the key the shots couldn’t be understood.",
          },
          open: {
            headline: "A secret shot leaks online",
            message:
              "The Wi-Fi wasn’t encrypted. The fan read the shots as they reached my tablet, and one was online by tea time.",
          },
          cable: {
            headline: "Nothing in the air to catch",
            message:
              "My tablet was on a cable, so its data never went through the air.",
          },
        },
      },
      {
        id: "van",
        tag: "Fee: £2,000,000",
        device: "producer-laptop",
        test: "snoop",
        time: "13:10",
        title: "A van in the car park",
        setup:
          "A van sits in the car park all afternoon. Someone inside is picking up wireless signals.",
        from: "producer",
        results: {
          wifi: {
            headline: "Nothing they could read",
            message:
              "They picked up our Wi-Fi, but it’s encrypted. Without the key, my contracts were just scrambled data.",
          },
          open: {
            headline: "The star’s fee is out",
            message:
              "Our Wi-Fi wasn’t encrypted, so they read what I sent. The star’s contract, fee and all, is on a gossip site.",
          },
          cable: {
            headline: "Nothing in the air to catch",
            message:
              "My laptop was on a cable, so nothing went through the air for them to pick up.",
          },
        },
      },
      {
        id: "cafe-call",
        device: "producer-laptop",
        test: "moves",
        time: "12:00",
        title: "A video call from the café",
        setup:
          "The producer takes the laptop to the café for a video call with the people paying for the film.",
        from: "producer",
        results: {
          wifi: {
            headline: "Call made from the café",
            message:
              "I just opened the laptop in the café. Wi-Fi works anywhere in range.",
          },
          cable: {
            headline: "No cable in the café",
            message:
              "My laptop needs its cable, and it doesn’t reach the café. I ran back to the office and started 20 minutes late.",
          },
        },
      },
      {
        id: "walk-set",
        device: "director-headset",
        test: "free",
        time: "10:40",
        title: "The director walks the set",
        setup:
          "The director walks round the set giving notes through the headset. Their phone is in their pocket.",
        from: "director",
        results: {
          bluetooth: {
            headline: "The headset goes where I go",
            message:
              "Bluetooth links my headset to the phone in my pocket, so it walks with me.",
          },
          wifi: {
            headline: "The headset kept up",
            message:
              "My headset was on the Wi-Fi, and the whole set is in range, so I could walk anywhere.",
          },
          cable: {
            headline: "Pulled out mid-take",
            message:
              "My headset was on a cable to the wall. One step too far and it pulled out in the middle of a take.",
          },
        },
      },
      {
        id: "wifi-off",
        device: "director-headset",
        test: "direct",
        time: "16:20",
        title: "The Wi-Fi goes off mid-take",
        setup:
          "The Wi-Fi switches off for an update in the middle of a take. It is off for five minutes.",
        from: "director",
        results: {
          bluetooth: {
            headline: "I didn’t even notice",
            message:
              "My headset talks straight to my phone by Bluetooth. It doesn’t need the Wi-Fi, so the take carried on.",
          },
          cable: {
            headline: "Still talking",
            message:
              "My headset was on a cable, so the Wi-Fi going off didn’t touch it.",
          },
          wifi: {
            headline: "The take was ruined",
            message:
              "My headset was on the Wi-Fi. When the Wi-Fi went off, so did my headset, halfway through the take.",
          },
        },
      },
    ],
  },
  Ce = {
    id: "fire",
    name: "Redcliff Fire Station",
    kind: "Fire station",
    router: { x: 400, y: 330 },
    outline: { x: 20, y: 110, w: 560, h: 590 },
    outside: { x: 20, y: 15, w: 560, h: 80, name: "Street" },
    rooms: [
      { id: "bay", name: "Engine bay", x: 20, y: 110, w: 330, h: 330 },
      { id: "watch", name: "Watch room", x: 350, y: 110, w: 230, h: 150 },
      { id: "comms", name: "Comms", x: 350, y: 260, w: 100, h: 180 },
      { id: "kit", name: "Kit room", x: 450, y: 260, w: 130, h: 180 },
      {
        id: "tower",
        name: "Smoke tower",
        x: 20,
        y: 440,
        w: 170,
        h: 260,
        thick: !0,
      },
      { id: "training", name: "Training room", x: 190, y: 440, w: 250, h: 260 },
      { id: "briefing", name: "Briefing", x: 440, y: 440, w: 140, h: 260 },
    ],
    devices: [
      {
        id: "watch-pc",
        name: "Alert PC",
        icon: "pc",
        x: 515,
        y: 185,
        kind: "network",
        best: "cable",
        needs: [
          { need: "steady", text: "Gets every call-out" },
          { need: "stays", text: "Stays on its desk" },
        ],
      },
      {
        id: "tower-camera",
        name: "Tower camera",
        icon: "camera",
        x: 105,
        y: 560,
        kind: "network",
        best: "cable",
        needs: [
          { need: "walls", text: "Inside thick brick walls" },
          { need: "huge", text: "Films every drill" },
        ],
      },
      {
        id: "engine-tablet",
        name: "Engine tablet",
        icon: "tablet",
        x: 170,
        y: 250,
        kind: "network",
        best: "wifi",
        needs: [
          { need: "moves", text: "Rides on the fire engine" },
          { need: "private", text: "Holds door codes" },
        ],
      },
      {
        id: "course-laptops",
        name: "Course laptops",
        icon: "laptops",
        x: 300,
        y: 560,
        kind: "network",
        best: "wifi",
        needs: [
          { need: "add", text: "Up to 20 laptops on course days" },
          { need: "private", text: "Sends test results" },
        ],
      },
      {
        id: "kit-scanner",
        name: "Kit scanner",
        icon: "scanner",
        x: 515,
        y: 375,
        kind: "personal",
        best: "bluetooth",
        needs: [
          { need: "pair", text: "Talks to the kit tablet" },
          { need: "moves", text: "Carried along the kit racks" },
        ],
        partner: { x: 468, y: 322, label: "Tablet", icon: "tablet" },
      },
      {
        id: "training-keyboard",
        name: "Class keyboard",
        icon: "keyboard",
        x: 505,
        y: 578,
        kind: "personal",
        best: "bluetooth",
        needs: [
          { need: "pair", text: "Types on the big screen" },
          { need: "moves", text: "Passed round the table" },
        ],
        partner: { x: 505, y: 500, label: "Screen", icon: "screen" },
      },
    ],
    colleagues: {
      watch: { role: "Watch manager", creature: "bear", colour: "#ffb38a" },
      trainer: { role: "Trainer", creature: "owl", colour: "#9fc3e6" },
      crew: { role: "Crew commander", creature: "frog", colour: "#7dd8b5" },
      kit: { role: "Kit officer", creature: "axolotl", colour: "#ff9fbf" },
    },
    events: [
      {
        id: "busy-lunch",
        device: "watch-pc",
        test: "steady",
        time: "12:30",
        title: "A call-out at lunchtime",
        setup:
          "A call-out alert arrives while the crew room is packed with phones and tablets on the Wi-Fi.",
        from: "watch",
        results: {
          cable: {
            headline: "Alert in, engine out",
            message:
              "The alert PC is on a cable, so all those phones made no difference. The address printed in seconds.",
          },
          wifi: {
            headline: "The alert came in late",
            message:
              "Interference from all those wireless devices knocked the alert PC off the Wi-Fi for two minutes. The engine left late.",
          },
        },
      },
      {
        id: "new-plans",
        device: "watch-pc",
        test: "bigfile",
        time: "17:00",
        title: "New building plans for the area",
        setup:
          "The station’s server has 50 GB of new building plans for the area. They must be copied to the alert PC before the night shift.",
        from: "watch",
        tag: "50 GB",
        results: {
          cable: {
            headline: "Plans ready for the night shift",
            message: "Over the cable, the copy was done within the hour.",
          },
          wifi: {
            headline: "The night shift used old plans",
            message:
              "Wi-Fi is slower than a cable. The copy wasn’t finished until morning, so the night crew worked from last year’s plans.",
          },
        },
      },
      {
        id: "smoke-drill",
        device: "tower-camera",
        test: "walls",
        time: "19:00",
        title: "A drill in the smoke tower",
        setup:
          "The crew trains in the smoke tower, which has thick brick walls. The trainer watches the camera from outside.",
        from: "trainer",
        results: {
          cable: {
            headline: "Every second on screen",
            message:
              "The camera’s cable carried the video straight out of the tower.",
          },
          wifi: {
            headline: "The screen went blank",
            message:
              "Thick brick walls blocked the Wi-Fi. The screen showed nothing, so we ran the whole drill again.",
          },
        },
      },
      {
        id: "drill-video",
        device: "tower-camera",
        test: "bigfile",
        time: "21:00",
        title: "Three hours of drill video",
        setup:
          "Tonight’s three-hour drill video, 60 GB, must be copied from the camera to the station’s server by the morning.",
        from: "trainer",
        tag: "60 GB",
        results: {
          cable: {
            headline: "Copied before midnight",
            message:
              "A cable is fast and steady. The video was on the server before midnight.",
          },
          wifi: {
            headline: "Half copied by morning",
            message:
              "Wi-Fi is slower than a cable, and those brick walls made it worse. Half the video was still waiting at 9am.",
          },
        },
      },
      {
        id: "call-out",
        device: "engine-tablet",
        test: "moves",
        time: "03:10",
        title: "Call-out! The engine rolls",
        setup:
          "A call-out comes in at 3am. The crew jump in and the fire engine drives out of the bay.",
        from: "crew",
        results: {
          wifi: {
            headline: "Plans on board",
            message:
              "The tablet got the latest plans over Wi-Fi in the bay, then left with us. No cable to unplug.",
          },
          cable: {
            headline: "The cable ripped out",
            message:
              "The tablet was still on its cable. It ripped out of the socket as we pulled away, and the plans hadn’t finished updating.",
          },
        },
      },
      {
        id: "parked-car",
        tag: "Door code 4071",
        device: "engine-tablet",
        test: "snoop",
        time: "22:15",
        title: "A car parked across the street",
        setup:
          "A car parks across the street with a laptop running, picking up wireless signals from the station.",
        from: "crew",
        results: {
          wifi: {
            headline: "The codes stayed secret",
            message:
              "Our Wi-Fi is encrypted. They caught the signal, but without the key the door codes were scrambled.",
          },
          open: {
            headline: "Door codes leaked",
            message:
              "The Wi-Fi wasn’t encrypted. They read the door codes for buildings in our area. Every one has to be changed.",
          },
          cable: {
            headline: "Nothing in the air to catch",
            message:
              "The tablet was on a cable, so nothing went through the air.",
          },
        },
      },
      {
        id: "course-day",
        device: "course-laptops",
        test: "add",
        time: "08:45",
        title: "Twenty firefighters arrive for a course",
        setup:
          "Twenty visiting firefighters arrive for a course. Every one of them needs a laptop online by 9:00.",
        from: "trainer",
        tag: "20 laptops",
        results: {
          wifi: {
            headline: "All 20 online by 9:00",
            message:
              "Each laptop just joined the Wi-Fi. Adding devices is easy when there are no cables to fit.",
          },
          cable: {
            headline: "Only 4 laptops online",
            message:
              "The training room has four cable sockets. Sixteen laptops had no way to connect, so the course started an hour late.",
          },
        },
      },
      {
        id: "results",
        tag: "Sam 18, Ali 15",
        device: "course-laptops",
        test: "snoop",
        time: "16:00",
        title: "Test results sent across the room",
        setup:
          "The trainer sends everyone’s test results to their laptops. Someone in the street is picking up wireless signals.",
        from: "trainer",
        results: {
          wifi: {
            headline: "Results stayed private",
            message:
              "The Wi-Fi is encrypted, so anything they picked up was scrambled and useless without the key.",
          },
          open: {
            headline: "Everyone’s results leaked",
            message:
              "Our Wi-Fi wasn’t encrypted. Names and scores for all twenty firefighters were read from the street.",
          },
          cable: {
            headline: "Nothing in the air to catch",
            message:
              "The laptops were on cables, so the results never went through the air.",
          },
        },
      },
      {
        id: "kit-check",
        device: "kit-scanner",
        test: "direct",
        time: "07:30",
        title: "The Wi-Fi goes off during the kit check",
        setup:
          "The Wi-Fi switches off for an update in the middle of the morning kit check.",
        from: "kit",
        results: {
          bluetooth: {
            headline: "Every breathing set logged",
            message:
              "The scanner talks straight to the kit tablet by Bluetooth, so it doesn’t need the Wi-Fi. Every set was logged.",
          },
          cable: {
            headline: "Still logging",
            message:
              "The scanner was on a cable, so the Wi-Fi going off didn’t stop it.",
          },
          wifi: {
            headline: "The kit check stopped",
            message:
              "The scanner was on the Wi-Fi. When the Wi-Fi went off, the check stopped for forty minutes.",
          },
        },
      },
      {
        id: "pass-round",
        device: "training-keyboard",
        test: "free",
        time: "10:30",
        title: "Pass the keyboard round",
        setup:
          "In the briefing room, the trainer passes the keyboard round the table so each firefighter can type an answer on the big screen.",
        from: "trainer",
        results: {
          bluetooth: {
            headline: "Round the whole table",
            message:
              "Bluetooth links the keyboard to the big screen a few metres away, so it went round the table easily.",
          },
          wifi: {
            headline: "Round the whole table",
            message:
              "The keyboard was on the Wi-Fi, so it worked anywhere in the room.",
          },
          cable: {
            headline: "Stuck at the front",
            message:
              "The keyboard was on a cable, so it couldn’t leave the front desk. I typed every answer myself.",
          },
        },
      },
    ],
  },
  De = {
    id: "park",
    name: "Thunder Peak",
    kind: "Theme park",
    router: { x: 490, y: 225 },
    outline: { x: 20, y: 20, w: 560, h: 580 },
    outside: { x: 20, y: 620, w: 560, h: 85, name: "Car park" },
    rooms: [
      {
        id: "coaster",
        name: "Thunder coaster",
        x: 20,
        y: 20,
        w: 380,
        h: 270,
        outdoor: !0,
      },
      { id: "booth", name: "Booth", x: 280, y: 190, w: 120, h: 100 },
      { id: "photo", name: "Photo shop", x: 400, y: 20, w: 180, h: 140 },
      { id: "comms", name: "Comms hut", x: 400, y: 160, w: 180, h: 130 },
      {
        id: "workshop",
        name: "Workshop",
        x: 400,
        y: 290,
        w: 180,
        h: 160,
        thick: !0,
      },
      {
        id: "plaza",
        name: "Plaza",
        x: 20,
        y: 290,
        w: 380,
        h: 190,
        outdoor: !0,
      },
      {
        id: "gate",
        name: "Main gate",
        x: 20,
        y: 480,
        w: 400,
        h: 120,
        outdoor: !0,
      },
      { id: "tickets", name: "Ticket desk", x: 420, y: 450, w: 160, h: 150 },
    ],
    devices: [
      {
        id: "ride-pc",
        name: "Ride PC",
        icon: "pc",
        x: 355,
        y: 255,
        kind: "network",
        best: "cable",
        needs: [
          { need: "steady", text: "Runs the coaster" },
          { need: "stays", text: "Stays in the booth" },
        ],
      },
      {
        id: "photo-kiosk",
        name: "Photo kiosk",
        icon: "kiosk",
        x: 490,
        y: 90,
        kind: "network",
        best: "cable",
        needs: [
          { need: "huge", text: "Sends 5,000 photos a day" },
          { need: "private", text: "Holds visitors’ emails" },
        ],
      },
      {
        id: "workshop-pc",
        name: "Workshop PC",
        icon: "pc",
        x: 490,
        y: 385,
        kind: "network",
        best: "cable",
        needs: [
          { need: "walls", text: "Underground, thick concrete" },
          { need: "stays", text: "Stays on its bench" },
        ],
      },
      {
        id: "gate-scanner",
        name: "Gate scanner",
        icon: "scanner",
        x: 210,
        y: 545,
        kind: "network",
        best: "wifi",
        needs: [
          { need: "moves", text: "Walks up and down the queue" },
          { need: "private", text: "Reads visitors’ tickets" },
        ],
      },
      {
        id: "mascot-earpiece",
        name: "Mascot earpiece",
        icon: "earpiece",
        x: 150,
        y: 390,
        kind: "personal",
        best: "bluetooth",
        needs: [
          { need: "pair", text: "Talks to a phone in the costume" },
          { need: "moves", text: "Dances round the plaza" },
        ],
        partner: { x: 85, y: 350, label: "Phone", icon: "phone" },
      },
      {
        id: "wristband-printer",
        name: "Wristband printer",
        icon: "printer",
        x: 465,
        y: 555,
        kind: "personal",
        best: "bluetooth",
        needs: [
          { need: "pair", text: "Prints from the desk tablet" },
          { need: "stays", text: "Sits right beside it" },
        ],
        partner: { x: 548, y: 522, label: "Tablet", icon: "tablet" },
      },
    ],
    colleagues: {
      ride: { role: "Ride operator", creature: "frog", colour: "#7dd8b5" },
      photo: { role: "Photo shop lead", creature: "owl", colour: "#ffd166" },
      engineer: { role: "Ride engineer", creature: "bear", colour: "#9fc3e6" },
      gate: { role: "Gate team lead", creature: "blob", colour: "#ffb38a" },
      mascot: {
        role: "Mascot performer",
        creature: "axolotl",
        colour: "#ff9fbf",
      },
      tickets: {
        role: "Ticket desk lead",
        creature: "blob",
        colour: "#c9b8ff",
      },
    },
    events: [
      {
        id: "summer-crowds",
        device: "ride-pc",
        test: "steady",
        time: "13:00",
        title: "The busiest Saturday of the summer",
        setup:
          "8,000 visitors pack the park. Thousands of phones crowd the air around the ride booth.",
        from: "ride",
        results: {
          cable: {
            headline: "The coaster ran all day",
            message:
              "The ride PC is on a cable, so all those phones caused it no trouble.",
          },
          wifi: {
            headline: "The coaster stopped twice",
            message:
              "Interference from thousands of phones kept knocking the ride PC off the Wi-Fi. Each time, the ride stopped for checks and the queue grew.",
          },
        },
      },
      {
        id: "bank-holiday",
        device: "photo-kiosk",
        test: "bigfile",
        time: "18:00",
        title: "40 GB of ride photos",
        setup:
          "Bank holiday Monday. The ride’s camera sends 40 GB of photos to the kiosk, and every visitor wants theirs before they go home.",
        from: "photo",
        tag: "40 GB",
        results: {
          cable: {
            headline: "Every photo ready",
            message:
              "The kiosk is on a cable, so 40 GB came in fast. Everyone got their photo before they left.",
          },
          wifi: {
            headline: "Half the photos missing",
            message:
              "Wi-Fi is slower than a cable. Half the photos still hadn’t reached the kiosk at closing time.",
          },
        },
      },
      {
        id: "bench",
        tag: "jo.ray@mail.com",
        device: "photo-kiosk",
        test: "snoop",
        time: "14:30",
        title: "A laptop on the bench outside",
        setup:
          "Someone sits on a bench by the photo shop with a laptop, picking up wireless signals.",
        from: "photo",
        results: {
          cable: {
            headline: "Nothing in the air to catch",
            message:
              "The kiosk is on a cable, so visitors’ emails never went through the air.",
          },
          wifi: {
            headline: "Scrambled, so useless",
            message:
              "The kiosk was on the Wi-Fi, but it’s encrypted. Without the key, they couldn’t understand a thing.",
          },
          open: {
            headline: "Visitors’ emails leaked",
            message:
              "The Wi-Fi wasn’t encrypted. They read the name and email address of everyone who bought a photo.",
          },
        },
      },
      {
        id: "manual",
        device: "workshop-pc",
        test: "walls",
        time: "08:10",
        title: "The coaster’s manual, right now",
        setup:
          "An engineer in the underground workshop needs the coaster’s safety manual from the office server.",
        from: "engineer",
        results: {
          cable: {
            headline: "Manual open in seconds",
            message:
              "The workshop PC is on a cable that runs down through the concrete. The manual opened straight away.",
          },
          wifi: {
            headline: "No signal underground",
            message:
              "The Wi-Fi signal can’t get through all that concrete. I walked up to print the manual, and the ride opened an hour late.",
          },
        },
      },
      {
        id: "ride-update",
        device: "workshop-pc",
        test: "walls",
        time: "23:00",
        title: "An overnight update for the coaster",
        setup:
          "The coaster’s makers send a software update. The workshop PC must download it before the park opens.",
        from: "engineer",
        results: {
          cable: {
            headline: "Ready for opening",
            message: "Straight down the cable and installed by midnight.",
          },
          wifi: {
            headline: "The download failed",
            message:
              "Thick concrete walls blocked the Wi-Fi. The download failed three times, so the coaster stayed shut until lunch.",
          },
        },
      },
      {
        id: "long-queue",
        device: "gate-scanner",
        test: "moves",
        time: "09:30",
        title: "The queue reaches the car park",
        setup:
          "The queue at the gate stretches back to the car park. Staff walk along it scanning tickets.",
        from: "gate",
        results: {
          wifi: {
            headline: "The queue flew in",
            message:
              "We walked down the queue scanning tickets over Wi-Fi. Everyone was in by 10.",
          },
          cable: {
            headline: "Stuck at the gate",
            message:
              "The scanner’s cable only reached the gate. Everyone had to shuffle up to us, and the queue took an hour.",
          },
        },
      },
      {
        id: "car-park",
        tag: "Booking: R. Patel",
        device: "gate-scanner",
        test: "snoop",
        time: "10:45",
        title: "A laptop in the car park",
        setup:
          "A car in the car park has a laptop picking up wireless signals from the gate.",
        from: "gate",
        results: {
          wifi: {
            headline: "Tickets stayed private",
            message:
              "Our Wi-Fi is encrypted, so the ticket data they caught was scrambled.",
          },
          open: {
            headline: "Booking details read",
            message:
              "The Wi-Fi wasn’t encrypted. They read the names and booking details on every ticket we scanned.",
          },
          cable: {
            headline: "Nothing in the air to catch",
            message:
              "The scanner was on a cable, so nothing went through the air.",
          },
        },
      },
      {
        id: "parade",
        device: "mascot-earpiece",
        test: "free",
        time: "15:00",
        title: "The mascot dances in the parade",
        setup:
          "The mascot dances all round the plaza, listening for music cues in an earpiece. The phone is inside the costume.",
        from: "mascot",
        results: {
          bluetooth: {
            headline: "Every cue on time",
            message:
              "My earpiece pairs with the phone in my costume by Bluetooth, so it danced wherever I went.",
          },
          wifi: {
            headline: "Every cue on time",
            message:
              "My earpiece was on the park Wi-Fi, and the plaza is in range, so I could dance anywhere.",
          },
          cable: {
            headline: "Pulled out mid-dance",
            message:
              "My earpiece was on a cable to the wall. It pulled out on my first spin, and I missed every cue.",
          },
        },
      },
      {
        id: "fireworks",
        device: "mascot-earpiece",
        test: "direct",
        time: "21:00",
        title: "Fireworks night",
        setup:
          "At the fireworks, thousands of visitors film on their phones and the park Wi-Fi is jammed.",
        from: "mascot",
        results: {
          bluetooth: {
            headline: "Every cue on time",
            message:
              "My earpiece talks straight to the phone in my costume. It doesn’t use the park Wi-Fi at all.",
          },
          cable: {
            headline: "Still hearing cues",
            message:
              "The earpiece was on a cable, so the jammed Wi-Fi didn’t affect it.",
          },
          wifi: {
            headline: "Missed the big finale",
            message:
              "My earpiece was on the park Wi-Fi, which was jammed with phones. My cues came late, and I missed the finale.",
          },
        },
      },
      {
        id: "morning-rush",
        device: "wristband-printer",
        test: "direct",
        time: "09:05",
        title: "Wi-Fi off in the morning rush",
        setup:
          "The park Wi-Fi switches off for an update just as the gates open.",
        from: "tickets",
        results: {
          bluetooth: {
            headline: "Wristbands kept printing",
            message:
              "The printer talks straight to the desk tablet by Bluetooth, so it kept printing wristbands.",
          },
          cable: {
            headline: "Wristbands kept printing",
            message:
              "The printer was on a cable, so the Wi-Fi going off didn’t stop it.",
          },
          wifi: {
            headline: "No wristbands for 20 minutes",
            message:
              "The printer was on the Wi-Fi. When it went off, we wrote wristbands by hand for twenty minutes.",
          },
        },
      },
    ],
  },
  ee = [Ae, Ce, De];
ee.map((s) => s.id);
function Ee(s) {
  return ee.find((t) => t.id === s);
}
function H(s, t) {
  const r = s.devices.find((a) => a.id === t);
  if (!r) throw new Error(`No device ${t} at ${s.id}`);
  return r;
}
const Q = { devices: {}, locked: !1 };
function Pe(s, t, r) {
  return { ...s, devices: { ...s.devices, [t]: r } };
}
function ue(s, t) {
  return s.devices.every((r) => t.devices[r.id]);
}
function pe(s, t) {
  return s.devices.filter((r) => t.devices[r.id]).length;
}
function Be(s, t) {
  const r = s.devices[t] ?? "cable";
  return r === "wifi" ? (s.locked ? "wifi" : "open") : r;
}
function me(s, t) {
  return Math.round(Math.hypot(s.x - t.x, s.y - t.y) / J);
}
function te(s, t) {
  return me(t, s.router);
}
function Ie(s) {
  return s.partner ? me(s, s.partner) : null;
}
function Oe(s, t) {
  return t === "bluetooth" && s.kind === "network";
}
function fe(s, t, r) {
  const a = H(s, t.device),
    n = Be(r, a.id),
    o = Le[t.test].includes(n) ? "smooth" : "problem";
  if (Oe(a, n)) {
    const d = te(s, a);
    return {
      verdict: "problem",
      choice: n,
      outOfRange: !0,
      beat: {
        headline: `The ${a.name.toLowerCase()} never got online`,
        message: `Bluetooth only reaches about ${Z} metres, and the router is ${d} metres away. It never joined the network.`,
      },
      fix: {
        mode: a.best,
        text: `${I[a.best]}: reaches the router. Bluetooth is short range, about ${Z} m.`,
      },
    };
  }
  const h =
    t.results[n] ??
    (n === "open" && t.test !== "snoop" ? t.results.wifi : void 0);
  if (!h) throw new Error(`No outcome for ${n} in ${t.id}`);
  return {
    verdict: o,
    beat: h,
    choice: n,
    outOfRange: !1,
    fix: o === "problem" ? Fe[t.test] : null,
  };
}
function ze(s, t) {
  const r = [...s];
  for (let a = r.length - 1; a > 0; a -= 1) {
    const n = Math.floor(t() * (a + 1));
    [r[a], r[n]] = [r[n], r[a]];
  }
  return r.slice(0, R);
}
function Re(s, t) {
  return s.devices.flatMap((r) => {
    const a = t.devices[r.id];
    return a && a !== r.best ? [{ device: r, mode: a }] : [];
  });
}
function He(s, t) {
  return !t.locked && s.devices.some((r) => t.devices[r.id] === "wifi");
}
function Ge(s) {
  return s === R
    ? "Approved"
    : s >= 3
      ? "Approved with snags"
      : "Back to the drawing board";
}
const S = { w: 400, h: 300 };
function Ve({
  org: s,
  event: t,
  choice: r,
  revealed: a,
  verdict: n,
  outOfRange: o,
}) {
  const h = b.useId().replace(/[^a-zA-Z0-9]/g, ""),
    d = H(s, t.device),
    x = s.colleagues[t.from],
    c = {
      org: s,
      event: t,
      device: d,
      colleague: x,
      choice: r,
      revealed: a,
      verdict: n,
    },
    l = o ? "range" : t.test;
  let u;
  switch (l) {
    case "range":
      u = e.jsx(st, { ...c });
      break;
    case "walls":
      u = e.jsx(Ue, { ...c, hatch: `sm-scene-hatch-${h}` });
      break;
    case "bigfile":
      u = e.jsx(_e, { ...c });
      break;
    case "steady":
      u = e.jsx(Ye, { ...c });
      break;
    case "moves":
      u = e.jsx(Xe, { ...c });
      break;
    case "add":
      u = e.jsx(Ze, { ...c });
      break;
    case "snoop":
      u = e.jsx(Qe, { ...c });
      break;
    case "free":
      u = e.jsx(et, { ...c });
      break;
    case "direct":
      u = e.jsx(tt, { ...c });
      break;
  }
  return e.jsxs("svg", {
    className: "sm-scene",
    viewBox: `0 0 ${S.w} ${S.h}`,
    width: S.w,
    height: S.h,
    "aria-hidden": "true",
    focusable: "false",
    "data-event-scene": t.id,
    "data-scene": l,
    "data-outcome": a ? n : void 0,
    children: [
      e.jsxs("defs", {
        children: [
          e.jsx("pattern", {
            id: `sm-scene-grid-${h}`,
            width: 20,
            height: 20,
            patternUnits: "userSpaceOnUse",
            children: e.jsx("path", {
              d: "M20 0H0V20",
              fill: "none",
              stroke: i.sheetGrid,
              strokeWidth: 1,
            }),
          }),
          e.jsxs("pattern", {
            id: `sm-scene-hatch-${h}`,
            width: 8,
            height: 8,
            patternUnits: "userSpaceOnUse",
            patternTransform: "rotate(45)",
            children: [
              e.jsx("rect", { width: 8, height: 8, fill: i.sheetGrid }),
              e.jsx("path", { d: "M0 0V8", stroke: i.white, strokeWidth: 3 }),
            ],
          }),
        ],
      }),
      e.jsx("rect", { width: S.w, height: S.h, fill: i.sheet }),
      e.jsx("rect", {
        width: S.w,
        height: S.h,
        fill: `url(#sm-scene-grid-${h})`,
      }),
      u,
      a
        ? e.jsx("g", {
            transform: "translate(346 8) scale(1.9)",
            "data-scene-mark": n,
            children: e.jsx(C, { verdict: n }),
          })
        : null,
    ],
  });
}
function F({ x: s, y: t, device: r, r: a = 26, mark: n }) {
  const o = (a * 1.45) / 32;
  return e.jsxs("g", {
    transform: `translate(${s} ${t})`,
    "data-scene-device": r.id,
    children: [
      e.jsx("circle", { r: a, fill: i.paper, stroke: i.ink, strokeWidth: 2.5 }),
      e.jsx("g", {
        transform: `translate(${-16 * o} ${-16 * o}) scale(${o})`,
        children: e.jsx(L, { icon: r.icon }),
      }),
      n
        ? e.jsx("g", {
            transform: `translate(${a * 0.45} ${-a - 8}) scale(0.9)`,
            children: e.jsx(C, { verdict: n }),
          })
        : null,
    ],
  });
}
function G({ x: s, y: t, icon: r, r: a = 18 }) {
  const n = (a * 1.45) / 32;
  return e.jsxs("g", {
    transform: `translate(${s} ${t})`,
    children: [
      e.jsx("circle", { r: a, fill: i.paper, stroke: i.ink, strokeWidth: 2 }),
      e.jsx("g", {
        transform: `translate(${-16 * n} ${-16 * n}) scale(${n})`,
        children: e.jsx(L, { icon: r }),
      }),
    ],
  });
}
function T({ x: s, y: t, state: r = "on" }) {
  return e.jsxs("g", {
    transform: `translate(${s} ${t})`,
    "data-scene-router": r,
    children: [
      e.jsx("path", {
        d: "M-11 -14l-5 -13M11 -14l5 -13",
        stroke: i.ink,
        strokeWidth: 5,
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M-11 -14l-5 -13M11 -14l5 -13",
        stroke: i.paper,
        strokeWidth: 2,
        strokeLinecap: "round",
      }),
      e.jsx("rect", {
        x: -22,
        y: -16,
        width: 44,
        height: 28,
        rx: 8,
        fill: i.paper,
        stroke: i.ink,
        strokeWidth: 2.5,
      }),
      r === "on"
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("circle", { cx: -9, cy: -2, r: 2.6, fill: i.mintDeep }),
              e.jsx("circle", { cx: 0, cy: -2, r: 2.6, fill: i.mintDeep }),
              e.jsx("circle", { cx: 9, cy: -2, r: 2.6, fill: i.mintDeep }),
            ],
          })
        : e.jsxs("g", {
            transform: "translate(-9 -11) scale(0.75)",
            children: [
              e.jsx("circle", {
                cx: 12,
                cy: 12,
                r: 9,
                fill: "none",
                stroke: i.amberInk,
                strokeWidth: 2.4,
              }),
              e.jsx("path", {
                d: "M5 19L19 5",
                stroke: i.amberInk,
                strokeWidth: 2.4,
                strokeLinecap: "round",
              }),
            ],
          }),
    ],
  });
}
function A({ d: s, cut: t = !1 }) {
  return e.jsxs("g", {
    "data-scene-link": "cable",
    children: [
      e.jsx("path", {
        d: s,
        fill: "none",
        stroke: i.sheetDeep,
        strokeWidth: 10,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      e.jsx("path", {
        d: s,
        fill: "none",
        stroke: f.cable,
        strokeWidth: 5.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: void 0,
      }),
    ],
  });
}
function ke({ x: s, y: t, angle: r = 0 }) {
  return e.jsxs("g", {
    transform: `translate(${s} ${t}) rotate(${r})`,
    children: [
      e.jsx("rect", {
        x: -2,
        y: -8,
        width: 16,
        height: 16,
        rx: 3,
        fill: f.cable,
        stroke: i.ink,
        strokeWidth: 2,
      }),
      e.jsx("path", {
        d: "M14 -4h5M14 4h5",
        stroke: i.ink,
        strokeWidth: 2.2,
        strokeLinecap: "round",
      }),
    ],
  });
}
function ye({ x: s, y: t }) {
  return e.jsx("path", {
    d: `M${s - 14} ${t - 10}l6 5M${s} ${t - 16}v7M${s + 14} ${t - 10}l-6 5M${s - 14} ${t + 12}l6 -5M${s + 14} ${t + 12}l-6 -5`,
    stroke: i.amber,
    strokeWidth: 3,
    strokeLinecap: "round",
  });
}
function se({ from: s, to: t, locked: r, broken: a = !1 }) {
  const n = (s.x + t.x) / 2,
    o = (s.y + t.y) / 2;
  return e.jsxs("g", {
    "data-scene-link": "wifi",
    children: [
      e.jsx("path", {
        d: `M${s.x} ${s.y}L${t.x} ${t.y}`,
        stroke: f.wifi,
        strokeWidth: 4,
        strokeDasharray: "1 10",
        strokeLinecap: "round",
        opacity: a ? 0.35 : 1,
      }),
      e.jsx("circle", {
        cx: t.x,
        cy: t.y,
        r: 38,
        fill: "none",
        stroke: f.wifi,
        strokeWidth: 2.5,
        opacity: a ? 0.25 : 0.75,
      }),
      e.jsx("circle", {
        cx: t.x,
        cy: t.y,
        r: 52,
        fill: "none",
        stroke: f.wifi,
        strokeWidth: 2,
        opacity: a ? 0.15 : 0.4,
      }),
      a
        ? e.jsxs("g", {
            transform: `translate(${n} ${o})`,
            children: [
              e.jsx("circle", {
                r: 13,
                fill: i.amber,
                stroke: i.ink,
                strokeWidth: 2,
              }),
              e.jsx("path", {
                d: "M-5 -5L5 5M5 -5L-5 5",
                stroke: i.ink,
                strokeWidth: 2.6,
                strokeLinecap: "round",
              }),
            ],
          })
        : e.jsxs("g", {
            transform: `translate(${n - 12} ${o - 12})`,
            children: [
              e.jsx("circle", {
                cx: 12,
                cy: 12,
                r: 13.5,
                fill: i.paper,
                stroke: i.ink,
                strokeWidth: 2,
              }),
              e.jsx($, { locked: r }),
            ],
          }),
    ],
  });
}
function U({ at: s, partner: t, r = 64 }) {
  return e.jsxs("g", {
    "data-scene-link": "bluetooth",
    children: [
      e.jsx("circle", {
        cx: s.x,
        cy: s.y,
        r,
        fill: f.bluetooth,
        fillOpacity: 0.16,
        stroke: f.bluetooth,
        strokeWidth: 3,
        strokeDasharray: "3 8",
        strokeLinecap: "round",
      }),
      t
        ? e.jsx("path", {
            d: `M${s.x} ${s.y}L${t.x} ${t.y}`,
            stroke: f.bluetooth,
            strokeWidth: 5,
            strokeLinecap: "round",
          })
        : null,
    ],
  });
}
function N({ x: s, y: t, colleague: r, scale: a = 1, walking: n = !1 }) {
  return e.jsx("g", {
    transform: `translate(${s - 32 * a} ${t - 32 * a}) scale(${a})`,
    children: e.jsx(K, { kind: r.creature, colour: r.colour, walking: n }),
  });
}
function V({ x: s, y: t, children: r, anchor: a = "middle", tone: n }) {
  const o = String(r),
    h = o.length * 8.4 + 18,
    d = a === "middle" ? s - h / 2 : a === "end" ? s - h : s,
    x = n === "amber" ? i.amberWash : n === "mint" ? i.mintWash : i.paper;
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: d,
        y: t - 15,
        width: h,
        height: 24,
        rx: 12,
        fill: x,
        stroke: i.ink,
        strokeWidth: 2,
      }),
      e.jsx("text", {
        x: d + h / 2,
        y: t + 2,
        textAnchor: "middle",
        className: "sm-scene-label",
        fill: i.ink,
        children: o,
      }),
    ],
  });
}
function je({ from: s, to: t }) {
  return e.jsx("g", {
    opacity: 0.7,
    children: Array.from({ length: 6 }, (a, n) => {
      const o = (n + 0.5) / 6,
        h = s.x + (t.x - s.x) * o,
        d = s.y + (t.y - s.y) * o + (n % 2 ? 6 : -6);
      return e.jsx(
        "ellipse",
        { cx: h, cy: d, rx: 5, ry: 3, fill: i.skyMid },
        n,
      );
    }),
  });
}
function Y({ ctx: s, from: t, to: r, broken: a = !1, cableD: n }) {
  switch (s.choice) {
    case "cable":
      return e.jsx(A, { d: n ?? `M${t.x} ${t.y}L${r.x} ${r.y}` });
    case "wifi":
    case "open":
      return e.jsx(se, {
        from: t,
        to: r,
        locked: s.choice === "wifi",
        broken: a,
      });
    case "bluetooth":
      return e.jsx(U, {
        at: r,
        partner: s.device.partner ? { x: r.x + 70, y: r.y } : void 0,
      });
  }
}
const z = (s) => s.revealed && s.verdict === "problem";
function Ue(s) {
  const t = { x: 70, y: 140 },
    r = { x: 300, y: 140 },
    a = s.choice === "wifi" || s.choice === "open";
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: 176,
        y: 20,
        width: 28,
        height: 262,
        fill: `url(#${s.hatch})`,
        stroke: i.white,
        strokeWidth: 2,
      }),
      e.jsx(V, { x: 190, y: 278, children: "Thick walls" }),
      a
        ? e.jsx("g", {
            "data-scene-link": "wifi",
            children: [36, 72, 104].map((n) =>
              e.jsx(
                "path",
                {
                  d: `M${t.x + n * Math.cos(-0.9)} ${t.y + n * Math.sin(-0.9)}A${n} ${n} 0 0 1 ${t.x + n * Math.cos(0.9)} ${t.y + n * Math.sin(0.9)}`,
                  fill: "none",
                  stroke: f.wifi,
                  strokeWidth: 4,
                  strokeLinecap: "round",
                },
                n,
              ),
            ),
          })
        : e.jsx(Y, { ctx: s, from: t, to: r }),
      e.jsx(T, { ...t }),
      e.jsx(F, { ...r, device: s.device }),
      e.jsx(N, { x: 320, y: 228, colleague: s.colleague, scale: 1 }),
    ],
  });
}
function _e(s) {
  const t = { x: 60, y: 110 },
    r = { x: 215, y: 110 },
    a = s.revealed ? (s.verdict === "smooth" ? 1 : 0.2) : 0.04;
  return e.jsxs("g", {
    children: [
      e.jsx(Y, { ctx: s, from: t, to: r }),
      e.jsx(T, { ...t }),
      e.jsx(F, { ...r, device: s.device }),
      e.jsxs("g", {
        transform: "translate(286 40)",
        children: [
          e.jsx("path", {
            d: "M0 0h46l16 16v58H0z",
            fill: i.paper,
            stroke: i.ink,
            strokeWidth: 2.5,
            strokeLinejoin: "round",
          }),
          e.jsx("path", {
            d: "M46 0v16h16",
            fill: "none",
            stroke: i.ink,
            strokeWidth: 2.5,
            strokeLinejoin: "round",
          }),
          e.jsx("text", {
            x: 31,
            y: 52,
            textAnchor: "middle",
            className: "sm-scene-big",
            fill: i.ink,
            children: s.event.tag ?? "",
          }),
        ],
      }),
      e.jsxs("g", {
        transform: "translate(40 228)",
        "data-progress": a,
        children: [
          e.jsx("rect", {
            width: 250,
            height: 26,
            rx: 13,
            fill: i.sheetDeep,
            stroke: i.white,
            strokeWidth: 2,
          }),
          e.jsx("rect", {
            x: 3,
            y: 3,
            width: Math.max(20, 244 * a),
            height: 20,
            rx: 10,
            fill: s.revealed
              ? s.verdict === "smooth"
                ? i.mint
                : i.amber
              : i.skyMid,
          }),
        ],
      }),
      s.revealed
        ? s.verdict === "smooth"
          ? e.jsx(qe, { x: 312, y: 226 })
          : e.jsx(Ke, { x: 300, y: 228 })
        : null,
      e.jsx(N, { x: 350, y: 170, colleague: s.colleague, scale: 0.75 }),
    ],
  });
}
function qe({ x: s, y: t }) {
  return e.jsxs("g", {
    transform: `translate(${s} ${t}) rotate(45)`,
    "data-scene-prop": "rocket",
    children: [
      e.jsx("path", {
        d: "M0 -22c9 6 11 18 6 28h-12c-5-10-3-22 6-28z",
        fill: i.paper,
        stroke: i.ink,
        strokeWidth: 2.2,
        strokeLinejoin: "round",
      }),
      e.jsx("circle", {
        cy: -6,
        r: 4,
        fill: i.cyan,
        stroke: i.ink,
        strokeWidth: 1.8,
      }),
      e.jsx("path", {
        d: "M-6 6l-6 8h8M6 6l6 8h-8",
        fill: i.pink,
        stroke: i.ink,
        strokeWidth: 1.8,
        strokeLinejoin: "round",
      }),
      e.jsx("path", { d: "M-3 12l3 10 3-10z", fill: i.amber }),
    ],
  });
}
function Ke({ x: s, y: t }) {
  return e.jsxs("g", {
    transform: `translate(${s} ${t})`,
    "data-scene-prop": "snail",
    children: [
      e.jsx("path", {
        d: "M-6 14h44c4 0 6-3 4-6l-6-2",
        fill: i.mintSoft,
        stroke: i.ink,
        strokeWidth: 2.2,
        strokeLinejoin: "round",
      }),
      e.jsx("circle", {
        cx: 10,
        cy: 2,
        r: 13,
        fill: i.peach,
        stroke: i.ink,
        strokeWidth: 2.2,
      }),
      e.jsx("path", {
        d: "M10 2m-6 0a6 6 0 1 0 6-6",
        fill: "none",
        stroke: i.ink,
        strokeWidth: 2,
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M34 6l2-12M40 7l5-10",
        stroke: i.ink,
        strokeWidth: 2,
        strokeLinecap: "round",
      }),
    ],
  });
}
function Ye(s) {
  const t = { x: 60, y: 150 },
    r = { x: 220, y: 150 },
    a = [
      { x: 140, y: 55 },
      { x: 205, y: 45 },
      { x: 275, y: 60 },
      { x: 300, y: 135 },
      { x: 140, y: 245 },
      { x: 215, y: 255 },
      { x: 285, y: 240 },
    ];
  return e.jsxs("g", {
    children: [
      a.map((n) =>
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("path", {
                d: `M${n.x - 22} ${n.y + 14}l6 -6 6 6 6 -6 6 6 6 -6 6 6`,
                fill: "none",
                stroke: i.pink,
                strokeWidth: 2.4,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              e.jsx(G, { x: n.x, y: n.y, icon: "phone", r: 15 }),
            ],
          },
          `${n.x}-${n.y}`,
        ),
      ),
      e.jsx(Y, { ctx: s, from: t, to: r, broken: z(s) }),
      e.jsx(T, { ...t }),
      e.jsx(F, { ...r, device: s.device }),
      e.jsx(N, { x: 350, y: 215, colleague: s.colleague, scale: 0.8 }),
    ],
  });
}
function Xe(s) {
  const t = { x: 50, y: 50 },
    r = { x: 100, y: 220 },
    a = { x: 330, y: 150 },
    n = s.choice === "cable";
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: r.x - 40,
        y: r.y + 8,
        width: 80,
        height: 14,
        rx: 4,
        fill: "none",
        stroke: i.white,
        strokeWidth: 2.5,
      }),
      e.jsx("path", {
        d: `M${r.x - 32} ${r.y + 22}v24M${r.x + 32} ${r.y + 22}v24`,
        stroke: i.white,
        strokeWidth: 2.5,
      }),
      e.jsx(je, {
        from: { x: r.x + 40, y: r.y },
        to: { x: a.x - 60, y: a.y + 40 },
      }),
      n
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx(A, {
                d: `M${t.x} ${t.y}V${r.y}H${z(s) ? 205 : a.x - 26}${z(s) ? "" : `L${a.x} ${a.y}`}`,
              }),
              z(s)
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(ke, { x: 205, y: r.y }),
                      e.jsx(ye, { x: 240, y: r.y - 4 }),
                    ],
                  })
                : null,
            ],
          })
        : e.jsx(Y, { ctx: s, from: t, to: a }),
      e.jsx(T, { ...t }),
      e.jsx(N, {
        x: a.x - 50,
        y: a.y + 60,
        colleague: s.colleague,
        scale: 0.95,
        walking: !0,
      }),
      e.jsx(F, { x: a.x, y: a.y, device: s.device, r: 24 }),
    ],
  });
}
function Ze(s) {
  const t = { x: 50, y: 150 },
    r = [];
  for (const o of [95, 185])
    for (const h of [150, 210, 270, 330]) r.push({ x: h, y: o });
  const a = s.choice === "wifi" || s.choice === "open",
    n = [80, 125, 170, 215];
  return e.jsxs("g", {
    children: [
      e.jsx(V, { x: 240, y: 34, children: s.event.tag ?? "" }),
      a
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("path", {
                d: `M${t.x} ${t.y}L130 ${t.y}`,
                stroke: f.wifi,
                strokeWidth: 4,
                strokeDasharray: "1 10",
                strokeLinecap: "round",
              }),
              [60, 110, 160].map((o) =>
                e.jsx(
                  "circle",
                  {
                    cx: t.x,
                    cy: t.y,
                    r: o,
                    fill: "none",
                    stroke: f.wifi,
                    strokeWidth: 2.5,
                    opacity: 0.6,
                  },
                  o,
                ),
              ),
            ],
          })
        : null,
      s.choice === "cable"
        ? n.map((o, h) =>
            e.jsxs(
              "g",
              {
                children: [
                  e.jsx("rect", {
                    x: 100,
                    y: o - 7,
                    width: 14,
                    height: 14,
                    rx: 2,
                    fill: i.paper,
                    stroke: i.ink,
                    strokeWidth: 2,
                  }),
                  e.jsx(A, { d: `M114 ${o}L${r[h].x - 20} ${r[h].y}` }),
                ],
              },
              o,
            ),
          )
        : null,
      r.map((o, h) => {
        const d = s.choice === "cable" && h >= n.length;
        return e.jsxs(
          "g",
          {
            opacity: d && s.revealed ? 0.55 : 1,
            children: [
              e.jsx(G, { x: o.x, y: o.y, icon: "laptop", r: 20 }),
              d && s.revealed
                ? e.jsx("g", {
                    transform: `translate(${o.x + 6} ${o.y - 30}) scale(0.7)`,
                    children: e.jsx(C, { verdict: "problem" }),
                  })
                : null,
            ],
          },
          `${o.x}-${o.y}`,
        );
      }),
      e.jsx(T, { ...t }),
      e.jsx(N, { x: 340, y: 255, colleague: s.colleague, scale: 0.7 }),
    ],
  });
}
function Qe(s) {
  const t = { x: 70, y: 70 },
    r = { x: 240, y: 80 },
    a = s.choice === "wifi" || s.choice === "open",
    n = { x: 95, y: 235 };
  return e.jsxs("g", {
    children: [
      a
        ? [60, 100, 140].map((o) =>
            e.jsx(
              "circle",
              {
                cx: r.x,
                cy: r.y,
                r: o,
                fill: "none",
                stroke: f.wifi,
                strokeWidth: 2.5,
                opacity: 0.55,
              },
              o,
            ),
          )
        : null,
      e.jsx("path", {
        d: "M0 165H120M160 165H400",
        stroke: i.white,
        strokeWidth: 6,
      }),
      e.jsx("path", {
        d: "M120 165H160",
        stroke: i.skyMid,
        strokeWidth: 2,
        strokeDasharray: "4 4",
      }),
      e.jsx("rect", {
        x: 210,
        y: 205,
        width: 120,
        height: 60,
        rx: 16,
        fill: "none",
        stroke: i.skyMid,
        strokeWidth: 2.5,
      }),
      e.jsx("path", {
        d: "M230 205l14 -18h52l14 18",
        fill: "none",
        stroke: i.skyMid,
        strokeWidth: 2.5,
      }),
      s.choice === "cable"
        ? e.jsx(A, { d: `M${t.x} ${t.y}L${r.x} ${r.y}` })
        : null,
      a
        ? e.jsxs("g", {
            transform: `translate(${(t.x + r.x) / 2 - 12} ${(t.y + r.y) / 2 - 12})`,
            children: [
              e.jsx("path", {
                d: `M${t.x - (t.x + r.x) / 2 + 12} ${t.y - (t.y + r.y) / 2 + 12}L${r.x - (t.x + r.x) / 2 + 12} ${r.y - (t.y + r.y) / 2 + 12}`,
                stroke: f.wifi,
                strokeWidth: 4,
                strokeDasharray: "1 10",
                strokeLinecap: "round",
              }),
              e.jsx("circle", {
                cx: 12,
                cy: 12,
                r: 13.5,
                fill: i.paper,
                stroke: i.ink,
                strokeWidth: 2,
              }),
              e.jsx($, { locked: s.choice === "wifi" }),
            ],
          })
        : null,
      s.choice === "bluetooth" ? e.jsx(U, { at: r }) : null,
      e.jsx(T, { ...t }),
      e.jsx(F, { ...r, device: s.device }),
      e.jsx(N, { x: 340, y: 85, colleague: s.colleague, scale: 0.7 }),
      e.jsxs("g", {
        transform: `translate(${n.x - 30} ${n.y - 34}) scale(0.95)`,
        "data-snooper": !0,
        children: [
          e.jsx(K, { kind: "blob", colour: i.grey }),
          e.jsx("path", {
            d: "M14 22c4-12 32-12 36 0",
            fill: i.inkSoft,
            stroke: i.ink,
            strokeWidth: 2,
          }),
        ],
      }),
      e.jsxs("g", {
        transform: `translate(${n.x + 18} ${n.y + 8})`,
        children: [
          e.jsx("rect", {
            x: 0,
            y: 0,
            width: 34,
            height: 22,
            rx: 2,
            fill: i.sky,
            stroke: i.ink,
            strokeWidth: 2,
          }),
          e.jsx("path", {
            d: "M-4 26h42",
            stroke: i.ink,
            strokeWidth: 3,
            strokeLinecap: "round",
          }),
        ],
      }),
      s.revealed ? e.jsx(Je, { ctx: s }) : null,
    ],
  });
}
function Je({ ctx: s }) {
  const t = s.choice === "open",
    r = s.choice === "wifi",
    a = t ? (s.event.tag ?? "Readable") : r ? "x7#Lq!9%vR" : "";
  return e.jsxs("g", {
    transform: "translate(150 182)",
    "data-snoop": t ? "readable" : r ? "scrambled" : "nothing",
    children: [
      e.jsx("path", {
        d: "M0 0h190a10 10 0 0 1 10 10v26a10 10 0 0 1-10 10H20l-14 12 2-12H0z",
        fill: t ? i.amberWash : i.mintWash,
        stroke: i.ink,
        strokeWidth: 2.2,
        strokeLinejoin: "round",
      }),
      t || r
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("g", {
                transform: "translate(8 11)",
                children: t
                  ? e.jsx("path", {
                      d: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0",
                      fill: "none",
                      stroke: i.ink,
                      strokeWidth: 2,
                    })
                  : e.jsx("g", {
                      transform: "scale(0.95)",
                      children: e.jsx($, { locked: !0 }),
                    }),
              }),
              e.jsx("text", {
                x: 38,
                y: 29,
                className: r ? "sm-scene-mono" : "sm-scene-label",
                fill: i.ink,
                children: a,
              }),
            ],
          })
        : e.jsxs("g", {
            transform: "translate(16 10)",
            children: [
              e.jsx("g", {
                transform: "scale(1.1)",
                children: e.jsx(q, { mode: "wifi", colour: i.muted }),
              }),
              e.jsx("path", {
                d: "M2 24L26 2",
                stroke: i.amberInk,
                strokeWidth: 2.6,
                strokeLinecap: "round",
              }),
              e.jsx("text", {
                x: 40,
                y: 20,
                className: "sm-scene-label",
                fill: i.ink,
                children: "No signal",
              }),
            ],
          }),
    ],
  });
}
function et(s) {
  const t = { x: 50, y: 50 },
    r = { x: 30, y: 200 },
    a = { x: 240, y: 180 },
    n = { x: 292, y: 150 },
    o = { x: 196, y: 214 },
    h = z(s) && s.choice === "cable";
  return e.jsxs("g", {
    children: [
      e.jsx(je, { from: { x: 70, y: 245 }, to: { x: 190, y: 235 } }),
      s.choice === "cable"
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("rect", {
                x: r.x - 10,
                y: r.y - 10,
                width: 20,
                height: 20,
                rx: 3,
                fill: i.paper,
                stroke: i.ink,
                strokeWidth: 2,
              }),
              h
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(A, {
                        d: `M${r.x + 10} ${r.y}Q90 ${r.y + 40} 140 ${r.y + 10}`,
                      }),
                      e.jsx(ke, { x: 140, y: r.y + 10, angle: -20 }),
                      e.jsx(ye, { x: 180, y: r.y - 10 }),
                    ],
                  })
                : e.jsx(A, { d: `M${r.x + 10} ${r.y}L${n.x} ${n.y}` }),
            ],
          })
        : null,
      s.choice === "wifi" || s.choice === "open"
        ? e.jsx(se, { from: t, to: n, locked: s.choice === "wifi" })
        : null,
      s.choice === "bluetooth" ? e.jsx(U, { at: n, partner: o, r: 58 }) : null,
      s.choice === "wifi" || s.choice === "open" ? e.jsx(T, { ...t }) : null,
      e.jsx(N, {
        x: a.x,
        y: a.y,
        colleague: s.colleague,
        scale: 1.35,
        walking: !0,
      }),
      s.device.partner
        ? e.jsx(G, { x: o.x, y: o.y, icon: s.device.partner.icon, r: 16 })
        : null,
      e.jsx(F, { ...n, device: s.device, r: 22 }),
    ],
  });
}
function tt(s) {
  const t = { x: 70, y: 70 },
    r = { x: 220, y: 165 },
    a = { x: 320, y: 165 },
    n = /jam/i.test(s.event.setup);
  return e.jsxs("g", {
    children: [
      n
        ? [
            { x: 28, y: 135 },
            { x: 135, y: 112 },
            { x: 30, y: 22 },
            { x: 105, y: 150 },
          ].map((o) =>
            e.jsx(G, { x: o.x, y: o.y, icon: "phone", r: 13 }, `${o.x}-${o.y}`),
          )
        : null,
      e.jsx(V, {
        x: t.x + 100,
        y: t.y - 22,
        tone: "amber",
        children: n ? "Wi-Fi jammed" : "Wi-Fi off",
      }),
      s.choice === "cable"
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("rect", {
                x: r.x - 10,
                y: 276,
                width: 20,
                height: 16,
                rx: 3,
                fill: i.paper,
                stroke: i.ink,
                strokeWidth: 2,
              }),
              e.jsx(A, { d: `M${r.x} 276V${r.y}` }),
            ],
          })
        : null,
      s.choice === "wifi" || s.choice === "open"
        ? e.jsx(se, {
            from: t,
            to: r,
            locked: s.choice === "wifi",
            broken: s.revealed,
          })
        : null,
      s.choice === "bluetooth" ? e.jsx(U, { at: r, partner: a, r: 56 }) : null,
      e.jsx(T, { ...t, state: n ? "jammed" : "off" }),
      s.device.partner
        ? e.jsx(G, { x: a.x, y: a.y, icon: s.device.partner.icon, r: 20 })
        : null,
      e.jsx(F, { ...r, device: s.device }),
      e.jsx(N, { x: 110, y: 240, colleague: s.colleague, scale: 0.8 }),
    ],
  });
}
function st(s) {
  const t = { x: 60, y: 130 },
    r = { x: 310, y: 130 },
    a = te(s.org, s.device);
  return e.jsxs("g", {
    children: [
      e.jsx(U, { at: r, r: 64 }),
      e.jsx("path", {
        d: `M${r.x} ${r.y}h64`,
        stroke: f.bluetooth,
        strokeWidth: 2,
        strokeDasharray: "4 4",
      }),
      e.jsx(V, { x: r.x + 30, y: r.y - 76, children: "10 m" }),
      e.jsx(T, { ...t }),
      e.jsx(F, { ...r, device: s.device }),
      e.jsxs("g", {
        "data-distance": a,
        children: [
          e.jsx("path", {
            d: `M${t.x} 236H${r.x}M${t.x} 226v20M${r.x} 226v20`,
            stroke: i.white,
            strokeWidth: 2.5,
          }),
          e.jsx(V, {
            x: (t.x + r.x) / 2,
            y: 240,
            tone: "amber",
            children: `${a} m`,
          }),
        ],
      }),
      e.jsx(N, { x: 185, y: 150, colleague: s.colleague, scale: 1 }),
    ],
  });
}
const it = [
  O("1.3", "Wired Connection (Ethernet)", {
    id: "cable",
    term: "Ethernet",
    name: "A wired connection",
    art: e.jsx(M, { mode: "cable", size: 112 }),
  }),
  O("1.3", "Wireless Connection (Wi-Fi)", {
    id: "wifi",
    term: "Wi-Fi",
    name: "A wireless connection",
    art: e.jsx(M, { mode: "wifi", size: 112 }),
  }),
  O("1.3", "Bluetooth", {
    id: "bluetooth",
    term: "Bluetooth",
    name: "A short-range wireless connection",
    art: e.jsx(M, { mode: "bluetooth", size: 112 }),
  }),
  O("1.4", "Encryption", {
    id: "encryption",
    term: "Encryption",
    art: e.jsx(v, { box: 24, children: e.jsx($, { locked: !0 }) }),
  }),
  O("1.3", "Standards", {
    id: "standards",
    term: "Standards",
    art: e.jsx(Te, {}),
    example:
      "Ethernet and Wi-Fi are standards, so a laptop from one manufacturer connects to a router from another.",
  }),
];
function ae({ w: s, h: t, grid: r }) {
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: 10,
        y: 14,
        width: s,
        height: t,
        rx: 10,
        fill: i.ink,
        opacity: 0.18,
      }),
      e.jsx("rect", {
        width: s,
        height: t,
        rx: 10,
        fill: i.sheet,
        stroke: i.ink,
        strokeWidth: 4,
      }),
      e.jsx("rect", { width: s, height: t, rx: 10, fill: `url(#${r})` }),
      e.jsx("circle", {
        cx: 26,
        cy: 26,
        r: 9,
        fill: i.pink,
        stroke: i.ink,
        strokeWidth: 3,
      }),
      e.jsx("circle", {
        cx: s - 26,
        cy: 26,
        r: 9,
        fill: i.pink,
        stroke: i.ink,
        strokeWidth: 3,
      }),
    ],
  });
}
function B({ x: s, y: t, mode: r, r: a = 46 }) {
  const n = (a * 1.25) / 24;
  return e.jsxs("g", {
    transform: `translate(${s} ${t})`,
    children: [
      e.jsx("circle", { r: a, fill: f[r], stroke: i.ink, strokeWidth: 4 }),
      e.jsx("g", {
        transform: `translate(${-12 * n} ${-12 * n}) scale(${n})`,
        children: e.jsx(q, { mode: r }),
      }),
    ],
  });
}
function ne({ x: s, y: t, angle: r }) {
  return e.jsxs("g", {
    transform: `translate(${s} ${t}) rotate(${r})`,
    children: [
      e.jsx("rect", {
        x: 0,
        y: -22,
        width: 220,
        height: 44,
        rx: 14,
        fill: i.highlighter,
        stroke: i.ink,
        strokeWidth: 4,
      }),
      e.jsx("rect", {
        x: 150,
        y: -22,
        width: 70,
        height: 44,
        rx: 14,
        fill: i.inkSoft,
        stroke: i.ink,
        strokeWidth: 4,
      }),
      e.jsx("path", {
        d: "M0 -14l-34 6v16l34 6z",
        fill: i.highlighter,
        stroke: i.ink,
        strokeWidth: 4,
        strokeLinejoin: "round",
      }),
    ],
  });
}
function oe({ x: s, y: t, scale: r }) {
  return e.jsxs("g", {
    transform: `translate(${s} ${t}) scale(${r})`,
    children: [
      e.jsx(K, { kind: "owl", colour: i.lilac }),
      e.jsx("path", {
        d: "M14 15c2-10 34-10 36 0z",
        fill: i.highlighter,
        stroke: i.ink,
        strokeWidth: 2.2,
        strokeLinejoin: "round",
      }),
      e.jsx("path", {
        d: "M10 16h44",
        stroke: i.ink,
        strokeWidth: 2.6,
        strokeLinecap: "round",
      }),
    ],
  });
}
function le() {
  const s = {
    fill: "none",
    stroke: i.white,
    strokeWidth: 5,
    strokeLinejoin: "round",
  };
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: 0,
        y: 0,
        width: 620,
        height: 420,
        ...s,
        strokeWidth: 7,
      }),
      e.jsx("path", {
        d: "M300 0V250M0 250H620M450 250V420M300 140H620",
        ...s,
      }),
      e.jsx("path", { d: "M180 250V420", ...s }),
      e.jsx("rect", {
        x: 462,
        y: 262,
        width: 146,
        height: 146,
        fill: "none",
        stroke: i.skyMid,
        strokeWidth: 14,
        strokeDasharray: "6 6",
      }),
      e.jsx("path", {
        d: "M380 195H540V330",
        fill: "none",
        stroke: i.sheetDeep,
        strokeWidth: 18,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      e.jsx("path", {
        d: "M380 195H540V330",
        fill: "none",
        stroke: f.cable,
        strokeWidth: 10,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      e.jsx("path", {
        d: "M380 195L130 110",
        stroke: f.wifi,
        strokeWidth: 7,
        strokeDasharray: "1 18",
        strokeLinecap: "round",
      }),
      [60, 90, 120].map((t) =>
        e.jsx(
          "circle",
          {
            cx: 130,
            cy: 110,
            r: t,
            fill: "none",
            stroke: f.wifi,
            strokeWidth: 4,
            opacity: 1 - t / 180,
          },
          t,
        ),
      ),
      e.jsx("circle", {
        cx: 260,
        cy: 340,
        r: 70,
        fill: f.bluetooth,
        fillOpacity: 0.18,
        stroke: f.bluetooth,
        strokeWidth: 5,
        strokeDasharray: "4 12",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M260 340L310 320",
        stroke: f.bluetooth,
        strokeWidth: 8,
        strokeLinecap: "round",
      }),
      [
        [130, 110],
        [540, 330],
        [260, 340],
        [310, 320],
      ].map(([t, r]) =>
        e.jsx(
          "circle",
          {
            cx: t,
            cy: r,
            r: t === 310 ? 16 : 26,
            fill: i.paper,
            stroke: i.ink,
            strokeWidth: 4,
          },
          `${t}-${r}`,
        ),
      ),
      e.jsx("rect", {
        x: 350,
        y: 178,
        width: 60,
        height: 36,
        rx: 10,
        fill: i.paper,
        stroke: i.ink,
        strokeWidth: 4,
      }),
    ],
  });
}
function ce({ id: s }) {
  return e.jsxs("defs", {
    children: [
      e.jsx("pattern", {
        id: `sm-landing-grid-${s}`,
        width: 32,
        height: 32,
        patternUnits: "userSpaceOnUse",
        children: e.jsx("path", {
          d: "M32 0H0V32",
          fill: "none",
          stroke: i.sheetGrid,
          strokeWidth: 1.5,
        }),
      }),
      e.jsx("pattern", {
        id: `sm-landing-desk-${s}`,
        width: 48,
        height: 48,
        patternUnits: "userSpaceOnUse",
        children: e.jsx("path", {
          d: "M48 0H0V48",
          fill: "none",
          stroke: i.paperDeep,
          strokeWidth: 2,
        }),
      }),
    ],
  });
}
function he({ variant: s }) {
  return s === "portrait"
    ? e.jsxs("svg", {
        className: "game-landing-art game-landing-portrait",
        viewBox: "0 0 900 1600",
        width: 900,
        height: 1600,
        preserveAspectRatio: "xMidYMid slice",
        "aria-hidden": "true",
        focusable: "false",
        children: [
          e.jsx(ce, { id: s }),
          e.jsx("rect", { width: 900, height: 1600, fill: i.paper }),
          e.jsx("rect", {
            width: 900,
            height: 1600,
            fill: `url(#sm-landing-desk-${s})`,
          }),
          e.jsxs("g", {
            transform: "translate(90 220) rotate(-2)",
            children: [
              e.jsx(ae, { w: 720, h: 980, grid: `sm-landing-grid-${s}` }),
              e.jsx("text", {
                x: 60,
                y: 150,
                className: "sm-landing-title",
                fill: i.white,
                children: "Signal",
              }),
              e.jsx("text", {
                x: 60,
                y: 260,
                className: "sm-landing-title",
                fill: i.highlighter,
                children: "Map",
              }),
              e.jsx("g", {
                transform: "translate(60 360) scale(0.97)",
                children: e.jsx(le, {}),
              }),
            ],
          }),
          e.jsx(ne, { x: 520, y: 150, angle: -14 }),
          e.jsx(B, { x: 150, y: 1290, mode: "cable", r: 52 }),
          e.jsx(B, { x: 290, y: 1360, mode: "wifi", r: 52 }),
          e.jsx(B, { x: 760, y: 1250, mode: "bluetooth", r: 52 }),
          e.jsx(oe, { x: 560, y: 1060, scale: 3.3 }),
        ],
      })
    : e.jsxs("svg", {
        className: "game-landing-art game-landing-landscape",
        viewBox: "0 0 1600 900",
        width: 1600,
        height: 900,
        preserveAspectRatio: "xMidYMid slice",
        "aria-hidden": "true",
        focusable: "false",
        children: [
          e.jsx(ce, { id: s }),
          e.jsx("rect", { width: 1600, height: 900, fill: i.paper }),
          e.jsx("rect", {
            width: 1600,
            height: 900,
            fill: `url(#sm-landing-desk-${s})`,
          }),
          e.jsxs("g", {
            transform: "translate(250 110) rotate(-2)",
            children: [
              e.jsx(ae, { w: 1100, h: 640, grid: `sm-landing-grid-${s}` }),
              e.jsx("text", {
                x: 70,
                y: 150,
                className: "sm-landing-title",
                fill: i.white,
                children: "Signal",
              }),
              e.jsx("text", {
                x: 70,
                y: 260,
                className: "sm-landing-title",
                fill: i.highlighter,
                children: "Map",
              }),
              e.jsx("g", {
                transform: "translate(430 70) scale(0.95)",
                children: e.jsx(le, {}),
              }),
            ],
          }),
          e.jsx(ne, { x: 1180, y: 800, angle: -10 }),
          e.jsx(B, { x: 165, y: 330, mode: "cable" }),
          e.jsx(B, { x: 150, y: 470, mode: "wifi" }),
          e.jsx(B, { x: 175, y: 610, mode: "bluetooth" }),
          e.jsx(oe, { x: 1320, y: 430, scale: 3.6 }),
        ],
      });
}
const X = i.white;
function ie({
  org: s,
  wiring: t,
  devices: r = "svg",
  marks: a,
  selected: n,
  className: o,
  children: h,
}) {
  const d = b.useId().replace(/[^a-zA-Z0-9]/g, ""),
    x = `sm-grid-${d}`,
    c = `sm-hatch-${d}`;
  return e.jsxs("svg", {
    className: o,
    viewBox: `0 0 ${g.w} ${g.h}`,
    width: g.w,
    height: g.h,
    role: "img",
    "aria-label": `Floor plan of ${s.name}`,
    "data-plan": s.id,
    children: [
      e.jsxs("defs", {
        children: [
          e.jsx("pattern", {
            id: x,
            width: 20,
            height: 20,
            patternUnits: "userSpaceOnUse",
            children: e.jsx("path", {
              d: "M20 0H0V20",
              fill: "none",
              stroke: i.sheetGrid,
              strokeWidth: 1,
            }),
          }),
          e.jsxs("pattern", {
            id: c,
            width: 8,
            height: 8,
            patternUnits: "userSpaceOnUse",
            patternTransform: "rotate(45)",
            children: [
              e.jsx("rect", { width: 8, height: 8, fill: i.sheetGrid }),
              e.jsx("path", { d: "M0 0V8", stroke: X, strokeWidth: 3 }),
            ],
          }),
        ],
      }),
      e.jsx("rect", { width: g.w, height: g.h, fill: i.sheet }),
      e.jsx("rect", { width: g.w, height: g.h, fill: `url(#${x})` }),
      e.jsx(rt, { org: s }),
      e.jsx(at, { org: s }),
      s.rooms.map((l) =>
        e.jsxs(
          "g",
          {
            "data-room": l.id,
            children: [
              l.thick
                ? e.jsx("rect", {
                    x: l.x + 5,
                    y: l.y + 5,
                    width: l.w - 10,
                    height: l.h - 10,
                    fill: "none",
                    stroke: `url(#${c})`,
                    strokeWidth: 12,
                  })
                : null,
              e.jsx("rect", {
                x: l.x,
                y: l.y,
                width: l.w,
                height: l.h,
                fill: "none",
                stroke: l.outdoor ? i.skyMid : X,
                strokeWidth: l.outdoor ? 2 : 3,
                strokeDasharray: l.outdoor ? "10 8" : void 0,
              }),
            ],
          },
          l.id,
        ),
      ),
      e.jsx("rect", {
        x: s.outline.x,
        y: s.outline.y,
        width: s.outline.w,
        height: s.outline.h,
        fill: "none",
        stroke: X,
        strokeWidth: 5,
      }),
      s.devices.map((l, u) =>
        e.jsx(nt, { org: s, device: l, wiring: t, index: u }, l.id),
      ),
      s.rooms.map((l) =>
        e.jsx(
          "text",
          {
            x: l.x + (l.thick ? 18 : 10),
            y:
              l.labelAt === "bottom"
                ? l.y + l.h - 10
                : l.y + (l.thick ? 32 : 24),
            className: "sm-plan-room",
            fill: i.skySoft,
            children: l.name,
          },
          l.id,
        ),
      ),
      s.devices.map((l) =>
        l.partner
          ? e.jsxs(
              "g",
              {
                transform: `translate(${l.partner.x} ${l.partner.y})`,
                "data-partner": l.id,
                children: [
                  e.jsx("title", { children: l.partner.label }),
                  e.jsx("circle", {
                    r: 17,
                    fill: i.paper,
                    stroke: i.ink,
                    strokeWidth: 2,
                  }),
                  e.jsx("g", {
                    transform: "translate(-12 -12) scale(0.75)",
                    children: e.jsx(L, { icon: l.partner.icon }),
                  }),
                ],
              },
              `${l.id}-partner`,
            )
          : null,
      ),
      e.jsx(ot, { org: s, locked: t.locked }),
      r === "svg"
        ? s.devices.map((l) =>
            e.jsx(
              lt,
              {
                device: l,
                mode: t.devices[l.id],
                mark: a?.[l.id],
                selected: n === l.id,
              },
              l.id,
            ),
          )
        : null,
      e.jsx(ct, {}),
      h,
    ],
  });
}
function rt({ org: s }) {
  const t = s.outside,
    r = Array.from({ length: 7 }, (a, n) => t.x + 40 + n * 75);
  return e.jsxs("g", {
    "data-outside": !0,
    children: [
      e.jsx("rect", {
        x: t.x,
        y: t.y,
        width: t.w,
        height: t.h,
        fill: i.sheetDeep,
        stroke: i.skyMid,
        strokeWidth: 2,
        strokeDasharray: "4 8",
      }),
      s.id === "fire"
        ? e.jsx("path", {
            d: `M${t.x + 10} ${t.y + t.h / 2}H${t.x + t.w - 10}`,
            stroke: i.skyMid,
            strokeWidth: 3,
            strokeDasharray: "24 18",
          })
        : r.map((a) =>
            e.jsx(
              "path",
              {
                d: `M${a} ${t.y + 10}v${t.h - 20}`,
                stroke: i.sheetGrid,
                strokeWidth: 3,
              },
              a,
            ),
          ),
      e.jsx("text", {
        x: t.x + 12,
        y: t.y + t.h - 12,
        className: "sm-plan-room",
        fill: i.skyMid,
        children: t.name,
      }),
    ],
  });
}
function at({ org: s }) {
  const t = {
    fill: "none",
    stroke: i.skyMid,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (s.id) {
    case "film":
      return e.jsxs("g", {
        "data-decor": "film",
        opacity: 0.85,
        children: [
          e.jsx("path", { d: "M60 300H320M60 312H320", ...t }),
          [80, 120, 160, 200, 240, 280].map((r) =>
            e.jsx("path", { d: `M${r} 296v20`, ...t }, r),
          ),
          e.jsx("path", {
            d: "M215 50h40v46h-40z M255 64l22 -12v44l-22 -12",
            ...t,
          }),
          [300, 400, 500].map((r) =>
            e.jsxs(
              "g",
              {
                children: [
                  e.jsx("circle", { cx: r, cy: 470, r: 22, ...t }),
                  e.jsx("circle", { cx: r, cy: 550, r: 22, ...t }),
                ],
              },
              r,
            ),
          ),
          e.jsx("path", {
            d: "M60 400h120v50h-120zM60 520h120v40h-120z",
            ...t,
          }),
        ],
      });
    case "fire":
      return e.jsxs("g", {
        "data-decor": "fire",
        opacity: 0.85,
        children: [
          [150, 330].map((r) =>
            e.jsxs(
              "g",
              {
                children: [
                  e.jsx("path", { d: `M60 ${r - 34}h200v58h-200z`, ...t }),
                  e.jsx("path", { d: `M260 ${r - 22}h45v46h-45`, ...t }),
                  e.jsx("path", {
                    d: `M80 ${r - 34}v58M120 ${r - 34}v58M160 ${r - 34}v58`,
                    ...t,
                    strokeDasharray: "4 6",
                  }),
                ],
              },
              r,
            ),
          ),
          e.jsx("path", {
            d: "M60 480v180M150 480v180M60 520h90M60 570h90M60 620h90",
            ...t,
            strokeDasharray: "6 6",
          }),
          e.jsx("path", { d: "M490 300h75M490 420h75", ...t }),
          e.jsx("rect", { x: 470, y: 540, width: 80, height: 30, rx: 8, ...t }),
        ],
      });
    case "park":
      return e.jsxs("g", {
        "data-decor": "park",
        opacity: 0.85,
        children: [
          e.jsx("path", {
            d: "M50 230C50 120 120 60 190 70S290 160 250 200 120 260 90 200 150 80 230 90 360 150 330 60",
            ...t,
            strokeWidth: 3,
          }),
          e.jsx("path", {
            d: "M50 230C50 120 120 60 190 70S290 160 250 200 120 260 90 200 150 80 230 90 360 150 330 60",
            fill: "none",
            stroke: i.skyMid,
            strokeWidth: 10,
            strokeDasharray: "2 14",
            opacity: 0.6,
          }),
          [
            [60, 330],
            [330, 330],
            [330, 440],
            [60, 445],
          ].map(([r, a]) =>
            e.jsxs(
              "g",
              {
                children: [
                  e.jsx("circle", { cx: r, cy: a, r: 16, ...t }),
                  e.jsx("circle", { cx: r, cy: a, r: 6, ...t }),
                ],
              },
              `${r}-${a}`,
            ),
          ),
          [300, 340, 380].map((r) =>
            e.jsx("path", { d: `M${r} 500v40M${r - 12} 520h24`, ...t }, r),
          ),
        ],
      });
  }
}
function de(s, t, r) {
  const { x: a, y: n } = s.router,
    o = (r - 2) * 7,
    h = t.x - a,
    d = t.y - n;
  return Math.abs(h) >= Math.abs(d)
    ? `M${a} ${n + o}H${t.x - Math.sign(h) * 4}V${t.y}`
    : `M${a + o} ${n}V${t.y}H${t.x}`;
}
function nt({ org: s, device: t, wiring: r, index: a }) {
  const n = r.devices[t.id];
  if (!n) return null;
  const { x: o, y: h } = s.router;
  switch (n) {
    case "cable":
      return e.jsxs("g", {
        "data-connection": "cable",
        "data-link": t.id,
        children: [
          e.jsx("path", {
            d: de(s, t, a),
            fill: "none",
            stroke: i.sheetDeep,
            strokeWidth: 11,
            strokeLinejoin: "round",
            strokeLinecap: "round",
          }),
          e.jsx("path", {
            d: de(s, t, a),
            fill: "none",
            stroke: f.cable,
            strokeWidth: 6,
            strokeLinejoin: "round",
            strokeLinecap: "round",
          }),
        ],
      });
    case "wifi": {
      const d = (o + t.x) / 2,
        x = (h + t.y) / 2;
      return e.jsxs("g", {
        "data-connection": "wifi",
        "data-link": t.id,
        children: [
          e.jsx("path", {
            d: `M${o} ${h}L${t.x} ${t.y}`,
            stroke: f.wifi,
            strokeWidth: 4,
            strokeDasharray: "1 11",
            strokeLinecap: "round",
          }),
          e.jsx("circle", {
            cx: t.x,
            cy: t.y,
            r: 48,
            fill: "none",
            stroke: f.wifi,
            strokeWidth: 2.5,
            opacity: 0.75,
          }),
          e.jsx("circle", {
            cx: t.x,
            cy: t.y,
            r: 64,
            fill: "none",
            stroke: f.wifi,
            strokeWidth: 2,
            opacity: 0.4,
          }),
          e.jsxs("g", {
            transform: `translate(${d - 13} ${x - 13})`,
            "data-wifi-lock": r.locked ? "on" : "off",
            children: [
              e.jsx("circle", {
                cx: 13,
                cy: 13,
                r: 14,
                fill: i.paper,
                stroke: i.ink,
                strokeWidth: 2,
              }),
              e.jsx("g", {
                transform: "translate(1.5 0.5) scale(0.95)",
                children: e.jsx($, { locked: r.locked }),
              }),
            ],
          }),
        ],
      });
    }
    case "bluetooth": {
      const d = Z * J;
      return e.jsxs("g", {
        "data-connection": "bluetooth",
        "data-link": t.id,
        children: [
          e.jsx("circle", {
            cx: t.x,
            cy: t.y,
            r: d,
            fill: f.bluetooth,
            fillOpacity: 0.14,
            stroke: f.bluetooth,
            strokeWidth: 3,
            strokeDasharray: "3 8",
            strokeLinecap: "round",
          }),
          t.partner
            ? e.jsx("path", {
                d: `M${t.x} ${t.y}L${t.partner.x} ${t.partner.y}`,
                stroke: f.bluetooth,
                strokeWidth: 5,
                strokeLinecap: "round",
              })
            : null,
        ],
      });
    }
  }
}
function ot({ org: s, locked: t }) {
  const { x: r, y: a } = s.router;
  return e.jsxs("g", {
    transform: `translate(${r} ${a})`,
    "data-router": !0,
    children: [
      e.jsx("path", {
        d: "M-14 -18l-6 -16M14 -18l6 -16",
        stroke: i.ink,
        strokeWidth: 6,
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M-14 -18l-6 -16M14 -18l6 -16",
        stroke: i.paper,
        strokeWidth: 2.5,
        strokeLinecap: "round",
      }),
      e.jsx("rect", {
        x: -28,
        y: -20,
        width: 56,
        height: 34,
        rx: 9,
        fill: i.paper,
        stroke: i.ink,
        strokeWidth: 2.5,
      }),
      e.jsx("circle", { cx: -14, cy: -3, r: 3, fill: i.mintDeep }),
      e.jsx("circle", { cx: -3, cy: -3, r: 3, fill: i.mintDeep }),
      e.jsx("circle", {
        cx: 8,
        cy: -3,
        r: 3,
        fill: i.highlighter,
        stroke: i.ink,
        strokeWidth: 1,
      }),
      e.jsxs("g", {
        transform: "translate(14 -2) scale(0.9)",
        children: [
          e.jsx("circle", {
            cx: 12,
            cy: 12,
            r: 14,
            fill: i.paper,
            stroke: i.ink,
            strokeWidth: 2,
          }),
          e.jsx($, { locked: t }),
        ],
      }),
      e.jsx("text", {
        y: 34,
        textAnchor: "middle",
        className: "sm-plan-small",
        fill: i.white,
        children: "Router",
      }),
    ],
  });
}
function lt({ device: s, mode: t, mark: r, selected: a = !1 }) {
  return e.jsxs("g", {
    transform: `translate(${s.x} ${s.y})`,
    "data-plan-device": s.id,
    children: [
      a
        ? e.jsx("circle", {
            r: 36,
            fill: "none",
            stroke: i.highlighter,
            strokeWidth: 5,
          })
        : null,
      e.jsx("circle", {
        r: 28,
        fill: i.paper,
        stroke: i.ink,
        strokeWidth: 2.5,
      }),
      e.jsx("g", {
        transform: "translate(-19 -19) scale(1.2)",
        children: e.jsx(L, { icon: s.icon }),
      }),
      t
        ? e.jsxs("g", {
            transform: "translate(14 -34)",
            children: [
              e.jsx("circle", {
                cx: 12,
                cy: 12,
                r: 13,
                fill: f[t],
                stroke: i.ink,
                strokeWidth: 2,
              }),
              e.jsx(q, { mode: t }),
            ],
          })
        : null,
      r
        ? e.jsx("g", {
            transform: "translate(-40 -36) scale(1.1)",
            children: e.jsx(C, { verdict: r }),
          })
        : null,
      e.jsx("text", {
        y: 48,
        textAnchor: "middle",
        className: "sm-plan-label",
        fill: i.white,
        stroke: i.sheet,
        strokeWidth: 5,
        paintOrder: "stroke",
        children: s.name,
      }),
    ],
  });
}
function ct() {
  const s = 10 * J;
  return e.jsxs("g", {
    transform: `translate(${g.w - s - 24} ${g.h - 14})`,
    "data-scale": !0,
    children: [
      e.jsx("path", {
        d: `M0 -8V0H${s}V-8M${s / 2} -4V0`,
        fill: "none",
        stroke: i.white,
        strokeWidth: 2,
      }),
      e.jsx("text", {
        x: s / 2,
        y: -12,
        textAnchor: "middle",
        className: "sm-plan-small",
        fill: i.white,
        children: "10 m",
      }),
    ],
  });
}
const ht = 6;
function dt({ onDrop: s }) {
  const [t, r] = b.useState(null),
    a = b.useRef(new Map()),
    n = b.useRef(!1);
  function o(d, x) {
    for (const [c, l] of a.current) {
      const u = l.getBoundingClientRect();
      if (
        d >= u.left - 8 &&
        d <= u.right + 8 &&
        x >= u.top - 8 &&
        x <= u.bottom + 8
      )
        return c;
    }
    return null;
  }
  const h = t?.moved ? t : null;
  return {
    dragging: h?.item ?? null,
    over: h?.over ?? null,
    at: h ? { x: h.x, y: h.y } : null,
    target: (d) => (x) => {
      x ? a.current.set(d, x) : a.current.delete(d);
    },
    handle: (d) => ({
      onPointerDown(x) {
        if (((n.current = !1), x.pointerType === "mouse" && x.button !== 0))
          return;
        x.currentTarget.setPointerCapture?.(x.pointerId);
        const { clientX: c, clientY: l } = x;
        r({
          item: d,
          pointerId: x.pointerId,
          startX: c,
          startY: l,
          x: c,
          y: l,
          moved: !1,
          over: null,
        });
      },
      onPointerMove(x) {
        if (!t || x.pointerId !== t.pointerId) return;
        const { clientX: c, clientY: l } = x,
          u = t.moved || Math.hypot(c - t.startX, l - t.startY) > ht;
        (u && x.preventDefault(),
          r({ ...t, x: c, y: l, moved: u, over: u ? o(c, l) : null }));
      },
      onPointerUp(x) {
        if (!t || x.pointerId !== t.pointerId || (r(null), !t.moved)) return;
        n.current = !0;
        const c = o(x.clientX, x.clientY);
        c && s(t.item, c);
      },
      onPointerCancel() {
        r(null);
      },
    }),
    endedDrag() {
      const d = n.current;
      return ((n.current = !1), d);
    },
  };
}
const xt =
    /\b(Ethernet|Wi-Fi|Bluetooth|encryption|encrypted|encrypts?|standards?)\b/i,
  _ = (s) => Me(s, xt, "sm-keyword");
function St({ rng: s = Math.random }) {
  ve();
  const [t, r] = b.useState({ type: "landing" }),
    [a, n] = b.useState("film"),
    [o, h] = b.useState(Q),
    [d, x] = b.useState([]),
    c = Ee(a),
    l =
      t.type === "event"
        ? t.round + (t.revealed ? 1 : 0)
        : t.type === "summary"
          ? R
          : 0,
    u = c.devices.filter((j) => {
      const P = o.devices[j.id];
      return P === j.best && (P !== "wifi" || o.locked);
    }).length,
    y = re(c, o, d).filter((j) => j === "smooth").length;
  ge(pe(c, o) + l, c.devices.length + R, u + y);
  function D(j) {
    (n(j), h(Q), x([]), r({ type: "build" }));
  }
  function E() {
    ue(c, o) &&
      (x(ze(c.events, s)), r({ type: "event", round: 0, revealed: !1 }));
  }
  let W;
  switch (t.type) {
    case "landing":
      W = e.jsx(ut, { onStart: () => r({ type: "cards" }) });
      break;
    case "cards":
      W = e.jsx(be, {
        title: "Know your connections",
        cards: it,
        skipLabel: "Skip to the plans",
        doneLabel: "Pick a client",
        buttonClass: "sm-button",
        primaryClass: "sm-primary",
        titleClass: "sm-title",
        withKeywords: _,
        onDone: () => r({ type: "pick" }),
      });
      break;
    case "pick":
      W = e.jsx(pt, { onPick: D });
      break;
    case "build":
      W = e.jsx(mt, {
        org: c,
        wiring: o,
        onWire: (j, P) => h((p) => Pe(p, j, P)),
        onLock: () => h((j) => ({ ...j, locked: !j.locked })),
        onStart: E,
        onBack: () => r({ type: "pick" }),
      });
      break;
    case "event":
      W = e.jsx(
        yt,
        {
          org: c,
          wiring: o,
          week: d,
          round: t.round,
          revealed: t.revealed,
          onReveal: () => r({ type: "event", round: t.round, revealed: !0 }),
          onNext: () =>
            r(
              t.round === d.length - 1
                ? { type: "summary" }
                : { type: "event", round: t.round + 1, revealed: !1 },
            ),
        },
        t.round,
      );
      break;
    case "summary":
      W = e.jsx(jt, {
        org: c,
        wiring: o,
        week: d,
        onAgain: () => D(a),
        onPick: () => r({ type: "pick" }),
      });
      break;
  }
  return e.jsx("div", {
    className: "signal-map",
    "data-signal-map": t.type,
    "data-org":
      t.type === "landing" || t.type === "cards" || t.type === "pick"
        ? void 0
        : a,
    children: W,
  });
}
function ut({ onStart: s }) {
  return e.jsxs("div", {
    className: "game-landing sm-landing",
    style: { "--landing-glow": "rgba(255, 243, 92, 0.6)" },
    "data-game-landing": !0,
    children: [
      e.jsx(he, { variant: "portrait" }),
      e.jsx(he, { variant: "landscape" }),
      e.jsx("h2", { className: "sr-only", children: "Signal Map" }),
      e.jsx("button", {
        type: "button",
        className: "game-landing-start sm-button sm-primary",
        onClick: s,
        children: "Open the plans",
      }),
    ],
  });
}
function pt({ onPick: s }) {
  return e.jsxs("div", {
    className: "sm-page",
    "data-stage": "pick",
    children: [
      e.jsx("h2", { className: "sm-title", children: "Pick a client" }),
      e.jsx("ul", {
        className: "sm-picks",
        children: ee.map((t) =>
          e.jsx(
            "li",
            {
              children: e.jsxs("button", {
                type: "button",
                className: "sm-pick",
                "data-story-card": "picker",
                "data-org": t.id,
                onClick: () => s(t.id),
                children: [
                  e.jsx(ie, { org: t, wiring: Q, className: "sm-pick-plan" }),
                  e.jsx("span", {
                    className: "sm-pick-name",
                    children: t.name,
                  }),
                  e.jsx("span", {
                    className: "sm-pick-kind",
                    children: t.kind,
                  }),
                ],
              }),
            },
            t.id,
          ),
        ),
      }),
    ],
  });
}
function mt({
  org: s,
  wiring: t,
  onWire: r,
  onLock: a,
  onStart: n,
  onBack: o,
}) {
  const [h, d] = b.useState(null),
    [x, c] = b.useState(s.devices[0].id),
    [l, u] = b.useState(""),
    y = dt({ onDrop: (p, w) => j(w, p) }),
    D = H(s, x),
    E = pe(s, t),
    W = ue(s, t);
  function j(p, w) {
    (r(p, w), c(p), d(null), u(`${H(s, p).name}: ${I[w]}`));
  }
  function P(p) {
    h ? j(p, h) : c(p);
  }
  return e.jsxs("div", {
    className: "sm-page sm-build",
    "data-stage": "build",
    "data-armed": h ?? void 0,
    children: [
      e.jsxs("div", {
        className: "sm-bar",
        children: [
          e.jsx("h2", { className: "sm-org", children: s.name }),
          e.jsxs("span", {
            className: "sm-count",
            "data-ready": W || void 0,
            children: [E, " of ", s.devices.length, " connected"],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "sm-build-grid",
        children: [
          e.jsxs("div", {
            className: "sm-plan",
            style: { aspectRatio: `${g.w} / ${g.h}` },
            children: [
              e.jsx(ie, {
                org: s,
                wiring: t,
                devices: "none",
                className: "sm-plan-art",
              }),
              s.devices.map((p) => {
                const w = t.devices[p.id];
                return e.jsxs(
                  "button",
                  {
                    ref: y.target(p.id),
                    type: "button",
                    className: "sm-device",
                    style: {
                      left: `${(p.x / g.w) * 100}%`,
                      top: `${(p.y / g.h) * 100}%`,
                    },
                    "data-device": p.id,
                    "data-mode": w,
                    "data-selected": x === p.id || void 0,
                    "data-over": y.over === p.id || void 0,
                    "aria-label": `${p.name}: ${w ? I[w] : "not connected"}`,
                    onClick: () => P(p.id),
                    children: [
                      e.jsxs("span", {
                        className: "sm-device-disc",
                        children: [
                          e.jsx(v, {
                            box: 32,
                            children: e.jsx(L, { icon: p.icon }),
                          }),
                          w
                            ? e.jsx("span", {
                                className: "sm-device-badge",
                                children: e.jsx(M, { mode: w, size: 26 }),
                              })
                            : e.jsx("span", {
                                className: "sm-device-badge sm-device-empty",
                                "aria-hidden": "true",
                              }),
                        ],
                      }),
                      e.jsx("span", {
                        className: "sm-device-name",
                        children: p.name,
                      }),
                    ],
                  },
                  p.id,
                );
              }),
            ],
          }),
          e.jsxs("div", {
            className: "sm-side",
            children: [
              e.jsx("div", {
                className: "sm-tray",
                role: "group",
                "aria-label": "Connections",
                children: Ne.map((p) =>
                  e.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "sm-token",
                      "data-token": p,
                      "aria-pressed": h === p,
                      "data-dragging": y.dragging === p || void 0,
                      ...y.handle(p),
                      onClick: () => {
                        y.endedDrag() || d((w) => (w === p ? null : p));
                      },
                      children: [
                        e.jsx(M, { mode: p, size: 40 }),
                        e.jsx("span", { children: I[p] }),
                      ],
                    },
                    p,
                  ),
                ),
              }),
              e.jsx(ft, { org: s, device: D }),
              e.jsxs("button", {
                type: "button",
                role: "switch",
                "aria-checked": t.locked,
                className: "sm-lock",
                onClick: a,
                children: [
                  e.jsx(v, {
                    className: "sm-lock-icon",
                    children: e.jsx($, { locked: t.locked }),
                  }),
                  e.jsx("span", {
                    className: "sm-lock-name",
                    children: "Wi-Fi encryption",
                  }),
                  e.jsx("span", {
                    className: "sm-lock-state",
                    children: t.locked ? "On" : "Off",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "sm-actions",
                children: [
                  e.jsx("button", {
                    type: "button",
                    className: "sm-button sm-primary",
                    disabled: !W,
                    onClick: n,
                    children: "Start the week",
                  }),
                  e.jsx("button", {
                    type: "button",
                    className: "sm-button",
                    onClick: o,
                    children: "Other clients",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      y.dragging && y.at
        ? e.jsx("div", {
            className: "sm-ghost",
            style: { left: y.at.x, top: y.at.y },
            "aria-hidden": "true",
            children: e.jsx(M, { mode: y.dragging, size: 56 }),
          })
        : null,
      e.jsx("p", { className: "sr-only", "aria-live": "polite", children: l }),
    ],
  });
}
function ft({ org: s, device: t }) {
  const r = Ie(t),
    a =
      t.kind === "personal" && t.partner && r !== null
        ? `${r} m from its ${t.partner.label.toLowerCase()}`
        : `${te(s, t)} m from the router`;
  return e.jsxs("section", {
    className: "sm-card",
    "aria-labelledby": "sm-card-name",
    "data-card": t.id,
    children: [
      e.jsxs("div", {
        className: "sm-card-head",
        children: [
          e.jsx("span", {
            className: "sm-card-icon",
            children: e.jsx(v, {
              box: 32,
              children: e.jsx(L, { icon: t.icon }),
            }),
          }),
          e.jsx("h3", { id: "sm-card-name", children: t.name }),
        ],
      }),
      e.jsxs("ul", {
        className: "sm-needs",
        children: [
          t.needs.map(({ need: n, text: o }) =>
            e.jsxs(
              "li",
              {
                "data-need": n,
                children: [e.jsx(v, { children: e.jsx(We, { need: n }) }), o],
              },
              o,
            ),
          ),
          e.jsxs("li", {
            "data-need": "distance",
            children: [
              e.jsx(v, {
                children: e.jsx("path", {
                  d: "M2.5 15.5l13-13 6 6-13 13zM7 11l2 2M10 8l2 2M13 5l2 2",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              }),
              a,
            ],
          }),
        ],
      }),
    ],
  });
}
function re(s, t, r) {
  return r.map((a) => fe(s, a, t).verdict);
}
function kt({ week: s, verdicts: t, round: r, time: a }) {
  return e.jsx("ol", {
    className: "sm-days",
    "aria-label": "The week",
    children: s.map((n, o) => {
      const h = t[o];
      return e.jsxs(
        "li",
        {
          "aria-current": o === r ? "step" : void 0,
          "data-verdict": h,
          children: [
            h
              ? e.jsx(v, {
                  className: "sm-day-mark",
                  children: e.jsx(C, { verdict: h }),
                })
              : e.jsx("span", {
                  className: "sm-day-dot",
                  "aria-hidden": "true",
                }),
            e.jsxs("span", {
              children: [
                xe[o],
                o === r && a
                  ? e.jsxs("span", {
                      className: "sm-day-time",
                      children: [" ", a],
                    })
                  : null,
              ],
            }),
            h
              ? e.jsx("span", {
                  className: "sr-only",
                  children: h === "smooth" ? "smooth" : "problem",
                })
              : null,
          ],
        },
        n.id,
      );
    }),
  });
}
function yt({
  org: s,
  wiring: t,
  week: r,
  round: a,
  revealed: n,
  onReveal: o,
  onNext: h,
}) {
  const d = r[a],
    x = H(s, d.device),
    c = fe(s, d, t),
    l = s.colleagues[d.from],
    u = re(s, t, r).map((D, E) => (E < a || (E === a && n) ? D : void 0)),
    y = a === r.length - 1;
  return e.jsxs("div", {
    className: "sm-page sm-week",
    "data-stage": "event",
    children: [
      e.jsxs("div", {
        className: "sm-bar",
        children: [
          e.jsx("h2", { className: "sm-org", children: s.name }),
          e.jsx(kt, { week: r, verdicts: u, round: a, time: d.time }),
        ],
      }),
      e.jsxs("article", {
        className: "sm-event",
        "data-story-card": "event",
        "data-event": d.id,
        "data-test": d.test,
        "data-outcome": n ? c.verdict : void 0,
        children: [
          e.jsx("div", {
            className: "sm-event-art",
            children: e.jsx(Ve, {
              org: s,
              event: d,
              choice: c.choice,
              revealed: n,
              verdict: c.verdict,
              outOfRange: c.outOfRange,
            }),
          }),
          e.jsx("div", {
            className: "sm-event-text",
            children: n
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs("h3", {
                      className: "sm-headline",
                      children: [
                        e.jsx(v, {
                          className: "sm-headline-mark",
                          children: e.jsx(C, { verdict: c.verdict }),
                        }),
                        e.jsx("span", {
                          className: "sr-only",
                          children:
                            c.verdict === "smooth" ? "Smooth: " : "Problem: ",
                        }),
                        c.beat.headline,
                      ],
                    }),
                    e.jsxs("figure", {
                      className: "sm-message",
                      "data-tone": c.verdict,
                      children: [
                        e.jsx($e, { kind: l.creature, colour: l.colour }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("figcaption", { children: l.role }),
                            e.jsx("blockquote", {
                              children: _(c.beat.message),
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.fix
                      ? e.jsxs("p", {
                          className: "sm-fix",
                          children: [
                            e.jsx(M, { mode: c.fix.mode, size: 30 }),
                            e.jsx("span", { children: _(c.fix.text) }),
                          ],
                        })
                      : null,
                    e.jsx("button", {
                      type: "button",
                      className: "sm-button sm-primary",
                      onClick: h,
                      children: y ? "See the summary" : "Next day",
                    }),
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("h3", {
                      className: "sm-headline",
                      children: d.title,
                    }),
                    e.jsx("p", { className: "sm-setup", children: _(d.setup) }),
                    e.jsxs("p", {
                      className: "sm-yours",
                      children: [
                        e.jsx("span", {
                          className: "sm-yours-device",
                          children: x.name,
                        }),
                        c.choice === "open" || c.choice === "wifi"
                          ? e.jsx(M, { mode: "wifi", size: 28 })
                          : e.jsx(M, { mode: c.choice, size: 28 }),
                        e.jsx("span", { children: Se[c.choice] }),
                      ],
                    }),
                    e.jsx("button", {
                      type: "button",
                      className: "sm-button sm-primary",
                      onClick: o,
                      children: "What happens?",
                    }),
                  ],
                }),
          }),
        ],
      }),
    ],
  });
}
function jt({ org: s, wiring: t, week: r, onAgain: a, onPick: n }) {
  const o = re(s, t, r),
    h = o.filter((l) => l === "smooth").length,
    d = {};
  r.forEach((l, u) => {
    d[l.device] !== "problem" && (d[l.device] = o[u]);
  });
  const x = Re(s, t),
    c = He(s, t);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "sm-page sm-summary",
        "data-stage": "summary",
        children: [
          e.jsx("div", {
            className: "sm-bar",
            children: e.jsx("h2", { className: "sm-org", children: s.name }),
          }),
          e.jsxs("section", {
            className: "sm-summary-card",
            "data-story-card": "summary",
            "aria-labelledby": "sm-stamp",
            children: [
              e.jsxs("div", {
                className: "sm-summary-main",
                children: [
                  e.jsxs("h3", {
                    id: "sm-stamp",
                    className: "sm-stamp",
                    "data-smooth": h,
                    children: [
                      e.jsx("span", {
                        className: "sm-stamp-word",
                        children: Ge(h),
                      }),
                      e.jsxs("span", {
                        className: "sm-stamp-score",
                        children: [h, " of ", R, " days smooth"],
                      }),
                    ],
                  }),
                  e.jsx("ol", {
                    className: "sm-week-rows",
                    children: r.map((l, u) =>
                      e.jsxs(
                        "li",
                        {
                          "data-verdict": o[u],
                          children: [
                            e.jsx(v, {
                              className: "sm-row-mark",
                              children: e.jsx(C, { verdict: o[u] }),
                            }),
                            e.jsx("span", {
                              className: "sr-only",
                              children:
                                o[u] === "smooth" ? "Smooth: " : "Problem: ",
                            }),
                            e.jsx("span", {
                              className: "sm-row-day",
                              children: xe[u],
                            }),
                            e.jsx("span", { children: l.title }),
                          ],
                        },
                        l.id,
                      ),
                    ),
                  }),
                  e.jsx("h4", {
                    className: "sm-snag-title",
                    children: "Snag list",
                  }),
                  x.length === 0 && !c
                    ? e.jsx("p", {
                        className: "sm-no-snags",
                        children: "No snags.",
                      })
                    : e.jsxs("ul", {
                        className: "sm-snags",
                        children: [
                          x.map(({ device: l, mode: u }) =>
                            e.jsxs(
                              "li",
                              {
                                "data-snag": l.id,
                                children: [
                                  e.jsx("span", {
                                    className: "sm-snag-name",
                                    children: l.name,
                                  }),
                                  e.jsxs("span", {
                                    className: "sm-snag-swap",
                                    children: [
                                      e.jsx(M, { mode: u, size: 26 }),
                                      e.jsxs("span", {
                                        className: "sr-only",
                                        children: [I[u], " to"],
                                      }),
                                      e.jsx("span", {
                                        "aria-hidden": "true",
                                        children: "→",
                                      }),
                                      e.jsx(M, { mode: l.best, size: 26 }),
                                      e.jsx("span", { children: I[l.best] }),
                                    ],
                                  }),
                                ],
                              },
                              l.id,
                            ),
                          ),
                          c
                            ? e.jsxs("li", {
                                "data-snag": "encryption",
                                children: [
                                  e.jsx("span", {
                                    className: "sm-snag-name",
                                    children: "Wi-Fi encryption",
                                  }),
                                  e.jsxs("span", {
                                    className: "sm-snag-swap",
                                    children: [
                                      e.jsx(v, {
                                        className: "sm-snag-lock",
                                        children: e.jsx($, { locked: !1 }),
                                      }),
                                      e.jsx("span", {
                                        className: "sr-only",
                                        children: "Off to",
                                      }),
                                      e.jsx("span", {
                                        "aria-hidden": "true",
                                        children: "→",
                                      }),
                                      e.jsx(v, {
                                        className: "sm-snag-lock",
                                        children: e.jsx($, { locked: !0 }),
                                      }),
                                      e.jsx("span", { children: "On" }),
                                    ],
                                  }),
                                ],
                              })
                            : null,
                        ],
                      }),
                  e.jsxs("div", {
                    className: "sm-actions",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        className: "sm-button sm-primary",
                        onClick: a,
                        children: "Play again",
                      }),
                      e.jsx("button", {
                        type: "button",
                        className: "sm-button",
                        onClick: n,
                        children: "Another client",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "sm-summary-plan",
                children: e.jsx(ie, {
                  org: s,
                  wiring: t,
                  marks: d,
                  className: "sm-plan-art",
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsx(we, { game: "signal-map" }),
    ],
  });
}
export { St as default };
