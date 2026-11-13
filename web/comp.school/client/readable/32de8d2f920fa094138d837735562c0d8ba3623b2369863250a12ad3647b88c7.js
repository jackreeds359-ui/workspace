import { r as p, j as e, a as me } from "./react-vendor-BK1G6oO1.js";
import { aq as ge, aT as be } from "./GameNotebook-b0Qw2wzd.js";
import { T as R } from "./action-styles-DWMwPIR0.js";
import { bR as je, bS as ye, bT as ke, bU as ve } from "./index-DjyiOHey.js";
import {
  z as we,
  J as Me,
  v as ne,
  K as Le,
} from "./ui-components-DeMDYLzO.js";
function Z(t, r) {
  return typeof t == "number" && typeof r == "number"
    ? t > r
    : String(t).localeCompare(String(r), "en") > 0;
}
function Ne(t) {
  return {
    values: [...t],
    pass: 1,
    position: 0,
    swappedThisPass: !1,
    comparisons: 0,
    swaps: 0,
    done: t.length < 2,
  };
}
function Se(t) {
  return t.done ? 0 : t.values.length - (t.pass - 1);
}
function K(t) {
  const r = t.values[t.position],
    s = t.values[t.position + 1];
  return Z(r, s) ? "swap" : "keep";
}
function ae(t, r) {
  if (t.done) return { state: t, correct: !0 };
  if (r !== K(t)) return { state: t, correct: !1 };
  const s = [...t.values],
    a = r === "swap";
  if (a) {
    const l = s[t.position];
    ((s[t.position] = s[t.position + 1]), (s[t.position + 1] = l));
  }
  const n = t.swappedThisPass || a,
    d = s.length - t.pass - 1,
    o = {
      ...t,
      values: s,
      comparisons: t.comparisons + 1,
      swaps: t.swaps + (a ? 1 : 0),
      swappedThisPass: n,
    };
  if (t.position < d)
    return { state: { ...o, position: t.position + 1 }, correct: !0 };
  const h = t.pass + 1;
  return !n || h > s.length - 1
    ? { state: { ...o, done: !0 }, correct: !0 }
    : {
        state: { ...o, pass: h, position: 0, swappedThisPass: !1 },
        correct: !0,
      };
}
function $e(t) {
  let r = t;
  for (; !r.done && r.pass === t.pass;) r = ae(r, K(r)).state;
  return r;
}
function Ee(t) {
  return { values: [...t], keyIndex: 1, shifts: 0, done: t.length < 2 };
}
function V(t) {
  const r = t.values[t.keyIndex];
  let s = t.keyIndex;
  for (; s > 0 && Z(t.values[s - 1], r);) s -= 1;
  return s;
}
function le(t, r) {
  if (t.done) return { state: t, correct: !0 };
  const s = V(t);
  if (r !== s) return { state: t, correct: !1 };
  const a = [...t.values],
    [n] = a.splice(t.keyIndex, 1);
  a.splice(s, 0, n);
  const d = t.keyIndex + 1;
  return {
    state: {
      values: a,
      keyIndex: d,
      shifts: t.shifts + (t.keyIndex - s),
      done: d >= a.length,
    },
    correct: !0,
  };
}
function Ae(t) {
  return le(t, V(t)).state;
}
function J(t) {
  const r = t.stages[t.stages.length - 1] ?? [];
  if (t.pair + 1 < r.length)
    return {
      ...t,
      left: [...r[t.pair]],
      right: [...r[t.pair + 1]],
      merged: [],
    };
  const s = t.pair < r.length ? [...t.built, [...r[t.pair]]] : t.built,
    a = [...t.stages, s],
    n = {
      ...t,
      stages: a,
      built: [],
      pair: 0,
      left: [],
      right: [],
      merged: [],
    };
  return s.length <= 1 ? { ...n, done: !0 } : J(n);
}
function Ce(t) {
  const s = {
    stages: [t.map((a) => [a])],
    built: [],
    pair: 0,
    left: [],
    right: [],
    merged: [],
    picks: 0,
    done: t.length < 2,
  };
  return s.done ? s : J(s);
}
function Y(t) {
  const r = t.left[0],
    s = t.right[0];
  return r === void 0
    ? "right"
    : s === void 0
      ? "left"
      : Z(r, s)
        ? "right"
        : "left";
}
function oe(t, r) {
  if (t.done) return { state: t, correct: !0 };
  if (r !== Y(t)) return { state: t, correct: !1 };
  const s = [...t.left],
    a = [...t.right],
    n = r === "left" ? s.shift() : a.shift();
  let d = [...t.merged, n];
  if (s.length === 0 || a.length === 0) {
    d = [...d, ...s, ...a];
    const o = {
      ...t,
      built: [...t.built, d],
      pair: t.pair + 2,
      picks: t.picks + 1,
    };
    return { state: J(o), correct: !0 };
  }
  return {
    state: { ...t, left: s, right: a, merged: d, picks: t.picks + 1 },
    correct: !0,
  };
}
function We(t) {
  let r = t;
  for (; !r.done && r.stages.length === t.stages.length;) r = oe(r, Y(r)).state;
  return r;
}
function Fe(t) {
  const r = t.stages[t.stages.length - 1] ?? [],
    s = [];
  for (let a = 0; a < r.length; a += 2)
    s.push((r[a]?.length ?? 0) + (r[a + 1]?.length ?? 0));
  return s;
}
function Te(t) {
  return t.every((r, s) => s === 0 || !Z(t[s - 1], r));
}
function qe(
  t,
  r = Math.random,
  s = Array.from({ length: 19 }, (a, n) => n + 1),
) {
  const a = [...s];
  for (let d = a.length - 1; d > 0; d -= 1) {
    const o = Math.floor(r() * (d + 1));
    [a[d], a[o]] = [a[o], a[d]];
  }
  const n = a.slice(0, t);
  return (Te(n) && n.length > 1 && ([n[0], n[1]] = [n[1], n[0]]), n);
}
function Ie(t) {
  return t % 2 === 0;
}
function Pe(t, r) {
  return t.length === r.length && t.every((s, a) => s === r[a]);
}
const se = 6,
  ie = 8,
  B = 5,
  ce = "(max-width: 767px), (pointer: coarse) and (max-height: 500px)";
function Qe() {
  return typeof window < "u" && typeof window.matchMedia == "function"
    ? window.matchMedia(ce).matches
    : !1;
}
function de() {
  const [t, r] = p.useState(Qe);
  return (
    p.useEffect(() => {
      if (typeof window.matchMedia != "function") return;
      const s = window.matchMedia(ce),
        a = () => r(s.matches);
      return (
        a(),
        s.addEventListener?.("change", a),
        () => s.removeEventListener?.("change", a)
      );
    }, []),
    t
  );
}
const _e =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary";
function ze({
  fullscreen: t,
  windowed: r,
  supported: s,
  onToggleFullscreen: a,
  onToggleWindow: n,
  className: d = "border-slate-600 text-slate-200 hover:bg-slate-800",
  immersiveClassName:
    o = "border-white/15 bg-slate-950/70 text-slate-100 backdrop-blur hover:bg-slate-800",
}) {
  if (de()) return null;
  const l = t || r,
    m = `${_e} ${l ? o : d}`;
  return e.jsxs("div", {
    "data-game-view-controls": !0,
    className: l
      ? "fixed right-3 top-[calc(env(safe-area-inset-top,0px)+0.75rem)] z-20 flex gap-2"
      : "flex shrink-0 gap-2",
    children: [
      s
        ? e.jsx("button", {
            type: "button",
            onClick: a,
            "aria-label": t ? "Exit full screen" : "Full screen",
            "aria-pressed": t,
            title: t ? "Exit full screen (F)" : "Full screen (F)",
            "data-game-fullscreen-toggle": !0,
            className: m,
            children: t
              ? e.jsx(je, { "aria-hidden": "true", className: "h-5 w-5" })
              : e.jsx(ye, { "aria-hidden": "true", className: "h-5 w-5" }),
          })
        : null,
      t
        ? null
        : e.jsx("button", {
            type: "button",
            onClick: n,
            "aria-label": r ? "Shrink" : "Fill window",
            "aria-pressed": r,
            title: r ? "Shrink" : "Fill window",
            "data-game-window-toggle": !0,
            className: m,
            children: r
              ? e.jsx(ke, { "aria-hidden": "true", className: "h-5 w-5" })
              : e.jsx(ve, { "aria-hidden": "true", className: "h-5 w-5" }),
          }),
    ],
  });
}
function Re(t) {
  return (
    t instanceof HTMLElement &&
    (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName))
  );
}
function Be() {
  const t = p.useRef(null),
    r = de(),
    [s, a] = p.useState(!1),
    [n, d] = p.useState(!0),
    o = n || r,
    h = p.useCallback(() => {
      document.fullscreenElement
        ? document.exitFullscreen?.()
        : t.current?.requestFullscreen?.();
    }, []),
    l = p.useCallback(() => {
      (document.fullscreenElement && document.exitFullscreen?.(), d((m) => !m));
    }, []);
  return (
    p.useEffect(() => {
      const m = t.current,
        g = () => a(!!(m && document.fullscreenElement === m)),
        A = (k) => {
          k.defaultPrevented ||
            k.altKey ||
            k.ctrlKey ||
            k.metaKey ||
            ((k.key === "f" || k.key === "F") &&
              !Re(k.target) &&
              (k.preventDefault(), h()));
        };
      return (
        document.addEventListener("fullscreenchange", g),
        window.addEventListener("keydown", A),
        () => {
          (document.removeEventListener("fullscreenchange", g),
            window.removeEventListener("keydown", A),
            m &&
              document.fullscreenElement === m &&
              document.exitFullscreen?.());
        }
      );
    }, [h]),
    p.useEffect(() => {
      if (!o) return;
      const m = document.documentElement;
      return (
        (m.dataset.gameWindow = "true"),
        () => {
          delete m.dataset.gameWindow;
        }
      );
    }, [o]),
    {
      ref: t,
      fullscreen: s,
      supported: !!document.fullscreenEnabled,
      toggle: h,
      windowed: o,
      toggleWindow: l,
      immersive: o || s,
    }
  );
}
const b = "#1c1917";
function j({ x: t, y: r, r: s = 2.4 }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("circle", { cx: t, cy: r, r: s + 1.3, fill: "#fff" }),
      e.jsx("circle", { cx: t + 0.4, cy: r, r: s, fill: b }),
      e.jsx("circle", { cx: t + 1.1, cy: r - 0.9, r: s * 0.35, fill: "#fff" }),
    ],
  });
}
function re(t, r, s, a, n) {
  return Array.from({ length: n * 2 }, (d, o) => {
    const h = o % 2 === 0 ? s : a,
      l = (Math.PI / n) * o - Math.PI / 2;
    return `${(t + h * Math.cos(l)).toFixed(1)},${(r + h * Math.sin(l)).toFixed(1)}`;
  }).join(" ");
}
function Ze() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("path", {
        d: "M52 22 q10 -8 8 -18 M52 24 q12 -2 10 -14",
        fill: "none",
        stroke: "#e76f8a",
        strokeWidth: "1.6",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M50 28 C46 14 26 12 19 25 C14 34 18 44 29 46",
        fill: "none",
        stroke: "#f79bb0",
        strokeWidth: "12",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M27 16 l2 8 M35 14 l0.5 8 M43 17 l-2 7 M19 30 l7 1",
        stroke: "#e76f8a",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
      e.jsx("path", { d: "M29 46 l-11 3 l4 -6 l-5 -4 z", fill: "#e76f8a" }),
      e.jsx("path", {
        d: "M27 36 l-3 7 M33 38 l-1 7 M39 36 l1 7",
        stroke: "#e76f8a",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
      e.jsx(j, { x: 50, y: 25, r: 2 }),
    ],
  });
}
function Oe() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("path", {
        d: "M46 32 L60 21 L57 32 L60 43 Z",
        fill: "#f97316",
        stroke: b,
        strokeWidth: "2",
        strokeLinejoin: "round",
      }),
      e.jsx("path", {
        d: "M22 21 Q30 9 40 21 Z",
        fill: "#f97316",
        stroke: b,
        strokeWidth: "2",
        strokeLinejoin: "round",
      }),
      e.jsx("ellipse", {
        cx: "30",
        cy: "32",
        rx: "20",
        ry: "13",
        fill: "#fb923c",
      }),
      e.jsx("ellipse", {
        cx: "23",
        cy: "32",
        rx: "3.6",
        ry: "12.3",
        fill: "#fff",
        stroke: b,
        strokeWidth: "1.2",
      }),
      e.jsx("ellipse", {
        cx: "38",
        cy: "32",
        rx: "3.2",
        ry: "11.6",
        fill: "#fff",
        stroke: b,
        strokeWidth: "1.2",
      }),
      e.jsx("ellipse", {
        cx: "30",
        cy: "32",
        rx: "20",
        ry: "13",
        fill: "none",
        stroke: b,
        strokeWidth: "2",
      }),
      e.jsx("path", {
        d: "M28 40 q4 8 10 4",
        fill: "#f97316",
        stroke: b,
        strokeWidth: "1.6",
      }),
      e.jsx(j, { x: 16, y: 29 }),
      e.jsx("path", {
        d: "M11 35 q2 1.5 4 0",
        fill: "none",
        stroke: b,
        strokeWidth: "1.4",
        strokeLinecap: "round",
      }),
    ],
  });
}
function Ge() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("path", {
        d: "M31 8 l-2 -5 l4 3 l1 -5 l2 5",
        fill: "none",
        stroke: "#ca8a04",
        strokeWidth: "1.8",
        strokeLinejoin: "round",
      }),
      e.jsx("path", { d: "M30 31 L20 26 L21 37 Z", fill: "#eab308" }),
      e.jsx("path", {
        d: "M34 15 C45 16 44 27 36 31 C28 35 29 44 36 47 C43 50 42 58 34 58 C28 58 27 51 32 50",
        fill: "none",
        stroke: "#facc15",
        strokeWidth: "9",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M37 33 l5 1 M36 39 l5 0 M38 45 l5 -1",
        stroke: "#ca8a04",
        strokeWidth: "1.6",
        strokeLinecap: "round",
      }),
      e.jsx("circle", { cx: "34", cy: "15", r: "7.5", fill: "#facc15" }),
      e.jsx("path", { d: "M39 12 L52 10 L52 15.5 L40 18 Z", fill: "#facc15" }),
      e.jsx(j, { x: 34, y: 13, r: 1.9 }),
    ],
  });
}
function De() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("polygon", {
        points: re(32, 34, 27, 11, 5),
        fill: "#fb7185",
        stroke: "#fb7185",
        strokeWidth: "5",
        strokeLinejoin: "round",
      }),
      e.jsx("polygon", { points: re(32, 34, 20, 8, 5), fill: "#fda4af" }),
      [
        [32, 17],
        [47, 29],
        [41, 47],
        [23, 47],
        [17, 29],
      ].map(([t, r]) =>
        e.jsx(
          "circle",
          { cx: t, cy: r, r: "1.6", fill: "#e11d48" },
          `${t}-${r}`,
        ),
      ),
      e.jsx(j, { x: 28, y: 32, r: 1.8 }),
      e.jsx(j, { x: 36, y: 32, r: 1.8 }),
      e.jsx("path", {
        d: "M29 38 q3 2.5 6 0",
        fill: "none",
        stroke: b,
        strokeWidth: "1.5",
        strokeLinecap: "round",
      }),
    ],
  });
}
function He() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("path", {
        d: "M17 38 l-11 3 M16 43 l-10 8 M18 47 l-6 9 M47 38 l11 3 M48 43 l10 8 M46 47 l6 9",
        stroke: "#b91c1c",
        strokeWidth: "3",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M19 33 L12 23 M45 33 L52 23",
        stroke: "#dc2626",
        strokeWidth: "4",
        strokeLinecap: "round",
      }),
      e.jsx("ellipse", {
        cx: "8",
        cy: "18",
        rx: "4",
        ry: "7",
        transform: "rotate(-25 8 18)",
        fill: "#ef4444",
      }),
      e.jsx("ellipse", {
        cx: "15",
        cy: "16",
        rx: "3",
        ry: "6",
        transform: "rotate(25 15 16)",
        fill: "#ef4444",
      }),
      e.jsx("ellipse", {
        cx: "56",
        cy: "18",
        rx: "4",
        ry: "7",
        transform: "rotate(25 56 18)",
        fill: "#ef4444",
      }),
      e.jsx("ellipse", {
        cx: "49",
        cy: "16",
        rx: "3",
        ry: "6",
        transform: "rotate(-25 49 16)",
        fill: "#ef4444",
      }),
      e.jsx("ellipse", {
        cx: "32",
        cy: "40",
        rx: "18",
        ry: "12",
        fill: "#ef4444",
      }),
      e.jsx("path", {
        d: "M27 30 l-2 -8 M37 30 l2 -8",
        stroke: "#b91c1c",
        strokeWidth: "2.4",
        strokeLinecap: "round",
      }),
      e.jsx(j, { x: 25, y: 20, r: 2.2 }),
      e.jsx(j, { x: 39, y: 20, r: 2.2 }),
      e.jsx("path", {
        d: "M27 43 q5 4 10 0",
        fill: "none",
        stroke: b,
        strokeWidth: "1.6",
        strokeLinecap: "round",
      }),
    ],
  });
}
function Ue() {
  const t = Array.from({ length: 14 }, (r, s) => {
    const a = (Math.PI * 2 * s) / 14,
      n = 30 + 18 * Math.cos(a),
      d = 33 + 18 * Math.sin(a),
      o = 30 + 24 * Math.cos(a),
      h = 33 + 24 * Math.sin(a);
    return e.jsx(
      "path",
      {
        d: `M${n.toFixed(1)} ${d.toFixed(1)} L${o.toFixed(1)} ${h.toFixed(1)}`,
        stroke: "#a16207",
        strokeWidth: "2.4",
        strokeLinecap: "round",
      },
      s,
    );
  });
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("path", { d: "M46 33 L60 24 L58 33 L60 42 Z", fill: "#eab308" }),
      t,
      e.jsx("circle", { cx: "30", cy: "33", r: "19", fill: "#fde047" }),
      e.jsx("path", {
        d: "M13 38 Q30 54 47 38 Q40 50 30 50 Q20 50 13 38 Z",
        fill: "#fef9c3",
      }),
      e.jsx("circle", { cx: "26", cy: "25", r: "2", fill: "#ca8a04" }),
      e.jsx("circle", { cx: "36", cy: "22", r: "1.6", fill: "#ca8a04" }),
      e.jsx("circle", { cx: "40", cy: "30", r: "1.8", fill: "#ca8a04" }),
      e.jsx(j, { x: 19, y: 29, r: 3 }),
      e.jsx("circle", {
        cx: "14",
        cy: "38",
        r: "2.2",
        fill: "none",
        stroke: b,
        strokeWidth: "1.5",
      }),
    ],
  });
}
function Ke() {
  return e.jsxs(e.Fragment, {
    children: [
      [16, 24, 32, 40, 48].map((t, r) =>
        e.jsx(
          "path",
          {
            d: `M${t} 34 q${r % 2 ? 4 : -4} 6 0 12 q${r % 2 ? -4 : 4} 6 0 12`,
            fill: "none",
            stroke: "#c4b5fd",
            strokeWidth: "2.6",
            strokeLinecap: "round",
          },
          t,
        ),
      ),
      e.jsx("path", {
        d: "M11 34 Q11 9 32 9 Q53 9 53 34 Q48 30 43 34 Q38 30 32 34 Q26 30 21 34 Q16 30 11 34 Z",
        fill: "#a78bfa",
      }),
      e.jsx("path", {
        d: "M18 20 Q22 13 30 12",
        fill: "none",
        stroke: "#ddd6fe",
        strokeWidth: "2.4",
        strokeLinecap: "round",
      }),
      e.jsx(j, { x: 26, y: 24, r: 2 }),
      e.jsx(j, { x: 38, y: 24, r: 2 }),
      e.jsx("path", {
        d: "M29 29 q3 2.5 6 0",
        fill: "none",
        stroke: b,
        strokeWidth: "1.5",
        strokeLinecap: "round",
      }),
    ],
  });
}
function Ve() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("path", { d: "M28 18 L38 2 L42 18 Z", fill: "#0ea5e9" }),
      e.jsx("path", { d: "M28 46 L38 62 L42 46 Z", fill: "#0ea5e9" }),
      e.jsx("path", {
        d: "M40 24 L55 16 L51 32 L55 48 L40 40 Z",
        fill: "#38bdf8",
      }),
      e.jsx("path", {
        d: "M8 32 Q22 12 42 17 L42 47 Q22 52 8 32 Z",
        fill: "#7dd3fc",
      }),
      e.jsx("path", {
        d: "M22 18 Q18 32 22 46 M31 16 Q27 32 31 48",
        fill: "none",
        stroke: "#0369a1",
        strokeWidth: "3",
        strokeLinecap: "round",
      }),
      e.jsx(j, { x: 15, y: 29, r: 2.2 }),
      e.jsx("path", {
        d: "M9 33 q2 1.5 4 0",
        fill: "none",
        stroke: b,
        strokeWidth: "1.3",
        strokeLinecap: "round",
      }),
    ],
  });
}
function Je() {
  return e.jsxs(e.Fragment, {
    children: [
      [
        "M17 34 q-6 10 -12 12",
        "M23 38 q-3 12 -8 18",
        "M32 40 q1 12 -2 19",
        "M41 38 q3 12 9 17",
        "M47 34 q7 8 13 9",
      ].map((t) =>
        e.jsx(
          "path",
          {
            d: t,
            fill: "none",
            stroke: "#a855f7",
            strokeWidth: "6",
            strokeLinecap: "round",
          },
          t,
        ),
      ),
      e.jsx("ellipse", {
        cx: "32",
        cy: "25",
        rx: "19",
        ry: "17",
        fill: "#a855f7",
      }),
      e.jsx("circle", { cx: "24", cy: "14", r: "2", fill: "#c084fc" }),
      e.jsx("circle", { cx: "41", cy: "16", r: "2.6", fill: "#c084fc" }),
      e.jsx("circle", { cx: "34", cy: "10", r: "1.6", fill: "#c084fc" }),
      e.jsx(j, { x: 25, y: 27, r: 3 }),
      e.jsx(j, { x: 39, y: 27, r: 3 }),
      e.jsx("path", {
        d: "M29 34 q3 2.5 6 0",
        fill: "none",
        stroke: b,
        strokeWidth: "1.6",
        strokeLinecap: "round",
      }),
    ],
  });
}
function Ye() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("ellipse", {
        cx: "20",
        cy: "45",
        rx: "9",
        ry: "4",
        transform: "rotate(30 20 45)",
        fill: "#4ade80",
      }),
      e.jsx("ellipse", {
        cx: "42",
        cy: "46",
        rx: "9",
        ry: "4",
        transform: "rotate(-30 42 46)",
        fill: "#4ade80",
      }),
      e.jsx("ellipse", {
        cx: "18",
        cy: "22",
        rx: "10",
        ry: "4.5",
        transform: "rotate(-35 18 22)",
        fill: "#4ade80",
      }),
      e.jsx("ellipse", {
        cx: "42",
        cy: "21",
        rx: "10",
        ry: "4.5",
        transform: "rotate(35 42 21)",
        fill: "#4ade80",
      }),
      e.jsx("path", { d: "M8 34 l-6 -3 l1 6 z", fill: "#4ade80" }),
      e.jsx("circle", { cx: "54", cy: "33", r: "7", fill: "#86efac" }),
      e.jsx("ellipse", {
        cx: "30",
        cy: "34",
        rx: "22",
        ry: "15",
        fill: "#15803d",
      }),
      e.jsx("path", {
        d: "M30 22 l7 4 v8 l-7 4 l-7 -4 v-8 z M23 26 l-9 -1 M37 26 l9 -1 M23 34 l-9 2 M37 34 l9 2 M30 38 v9 M30 22 v-7",
        fill: "#16a34a",
        stroke: "#bbf7d0",
        strokeWidth: "1.4",
        strokeLinejoin: "round",
      }),
      e.jsx(j, { x: 56, y: 31, r: 1.8 }),
    ],
  });
}
function Xe() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("path", { d: "M14 32 L2 17 L7 32 L2 47 Z", fill: "#5f7d98" }),
      e.jsx("path", { d: "M29 23 L36 7 L43 23 Z", fill: "#5f7d98" }),
      e.jsx("path", {
        d: "M10 32 Q24 20 46 22 Q58 24 62 32 Q58 38 46 41 Q24 44 10 32 Z",
        fill: "#7c9cb8",
      }),
      e.jsx("path", {
        d: "M22 36 Q40 43 60 34 Q50 41 36 41 Q27 41 22 36 Z",
        fill: "#e7e5e4",
      }),
      e.jsx("path", { d: "M36 37 L29 50 L43 39 Z", fill: "#5f7d98" }),
      e.jsx("path", {
        d: "M46 27 l-1 6 M49 27 l-1 6 M52 27 l-1 6",
        stroke: "#4a6680",
        strokeWidth: "1.4",
        strokeLinecap: "round",
      }),
      e.jsx(j, { x: 55, y: 28, r: 1.8 }),
      e.jsx("path", {
        d: "M52 35 q4 1.6 8 -1",
        fill: "none",
        stroke: b,
        strokeWidth: "1.4",
        strokeLinecap: "round",
      }),
    ],
  });
}
function et() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("path", {
        d: "M24 16 v-10 M24 16 q-2 -8 -7 -10 M24 16 q2 -8 7 -10",
        fill: "none",
        stroke: "#93c5fd",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M52 33 L58 23 L64 20 L60 30 L64 40 L58 37 Z",
        fill: "#2563eb",
      }),
      e.jsx("path", {
        d: "M4 36 Q4 17 30 17 Q54 17 56 33 Q56 49 33 49 Q8 49 4 36 Z",
        fill: "#3b82f6",
      }),
      e.jsx("path", {
        d: "M8 40 Q30 52 52 40 Q42 48 30 48 Q15 48 8 40 Z",
        fill: "#bfdbfe",
      }),
      e.jsx("path", {
        d: "M18 44 l2 -3 M26 46 l1 -4 M34 46 l0 -4",
        stroke: "#93c5fd",
        strokeWidth: "1.4",
        strokeLinecap: "round",
      }),
      e.jsx("ellipse", {
        cx: "32",
        cy: "38",
        rx: "7",
        ry: "3",
        transform: "rotate(25 32 38)",
        fill: "#1d4ed8",
      }),
      e.jsx(j, { x: 15, y: 31, r: 2.2 }),
      e.jsx("path", {
        d: "M8 37 q4 3 9 1",
        fill: "none",
        stroke: b,
        strokeWidth: "1.5",
        strokeLinecap: "round",
      }),
    ],
  });
}
const X = [
    { value: 2, name: "Shrimp", Art: Ze },
    { value: 4, name: "Clownfish", Art: Oe },
    { value: 5, name: "Seahorse", Art: Ge },
    { value: 7, name: "Starfish", Art: De },
    { value: 8, name: "Crab", Art: He },
    { value: 10, name: "Pufferfish", Art: Ue },
    { value: 11, name: "Jellyfish", Art: Ke },
    { value: 12, name: "Angelfish", Art: Ve },
    { value: 14, name: "Octopus", Art: Je },
    { value: 15, name: "Turtle", Art: Ye },
    { value: 17, name: "Shark", Art: Xe },
    { value: 19, name: "Whale", Art: et },
  ],
  tt = X.map((t) => t.value),
  st = X.map((t) => t.name);
function rt(t) {
  return X.find((r) => r.value === t || r.name === t) ?? null;
}
function nt() {
  const [t, r] = p.useState({ top: 0, left: 0 });
  return (
    p.useLayoutEffect(() => {
      const s = document.querySelector("[data-session-sidebar-layout]"),
        a = document.querySelector("[data-comp-school-navbar]");
      function n() {
        const l =
            (s && Number.parseFloat(getComputedStyle(s).paddingLeft)) || 0,
          m = a ? Math.max(0, a.getBoundingClientRect().bottom) : 0;
        r((g) => (g.top === m && g.left === l ? g : { top: m, left: l }));
      }
      window.scrollTo({ top: 0 });
      const d = document.documentElement,
        o = d.style.overflow;
      ((d.style.overflow = "hidden"), n());
      const h = new MutationObserver(n);
      return (
        s &&
          h.observe(s, {
            attributes: !0,
            attributeFilter: ["data-session-sidebar-layout", "class"],
          }),
        s?.addEventListener("transitionend", n),
        window.addEventListener("resize", n),
        () => {
          ((d.style.overflow = o),
            h.disconnect(),
            s?.removeEventListener("transitionend", n),
            window.removeEventListener("resize", n));
        }
      );
    }, []),
    t
  );
}
function at() {
  const t = p.useMemo(
    () =>
      Array.from({ length: 14 }, (r, s) => ({
        left: `${(s * 37 + 11) % 97}%`,
        size: 4 + ((s * 7) % 12),
        duration: 9 + ((s * 5) % 9),
        delay: -((s * 13) % 17),
      })),
    [],
  );
  return e.jsx("div", {
    className:
      "aquatic-bubbles pointer-events-none absolute inset-0 overflow-hidden",
    "aria-hidden": "true",
    children: t.map((r, s) =>
      e.jsx(
        "span",
        {
          style: {
            left: r.left,
            width: r.size,
            height: r.size,
            animationDuration: `${r.duration}s`,
            animationDelay: `${r.delay}s`,
          },
        },
        s,
      ),
    ),
  });
}
function lt() {
  return e.jsxs("svg", {
    "aria-hidden": "true",
    className:
      "pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full sm:h-36",
    viewBox: "0 0 1200 140",
    preserveAspectRatio: "none",
    children: [
      e.jsx("path", {
        d: "M60 140 q-22 -40 4 -70 q20 -24 0 -58",
        fill: "none",
        stroke: "#2f7a55",
        strokeWidth: "9",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M90 140 q16 -34 -4 -62",
        fill: "none",
        stroke: "#3f9a6c",
        strokeWidth: "7",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M1110 140 q20 -44 -4 -74 q-18 -24 4 -52",
        fill: "none",
        stroke: "#2f7a55",
        strokeWidth: "9",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M1140 140 q-14 -30 6 -56",
        fill: "none",
        stroke: "#3f9a6c",
        strokeWidth: "6",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M560 140 q-10 -26 6 -44",
        fill: "none",
        stroke: "#2f7a55",
        strokeWidth: "6",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M0 104 Q150 84 300 100 T600 98 T900 102 T1200 96 V140 H0 Z",
        fill: "#8a7a5c",
        opacity: "0.55",
      }),
      e.jsx("path", {
        d: "M0 118 Q200 106 400 116 T800 114 T1200 118 V140 H0 Z",
        fill: "#6f6249",
        opacity: "0.8",
      }),
      e.jsx("ellipse", {
        cx: "880",
        cy: "112",
        rx: "46",
        ry: "18",
        fill: "#4b4640",
      }),
      e.jsx("ellipse", {
        cx: "930",
        cy: "118",
        rx: "28",
        ry: "12",
        fill: "#57524b",
      }),
      e.jsx("ellipse", {
        cx: "250",
        cy: "120",
        rx: "30",
        ry: "11",
        fill: "#4b4640",
      }),
    ],
  });
}
function ot({ children: t, sceneRef: r, filled: s = !1 }) {
  const a = nt(),
    n = s ? { top: 0, left: 0 } : { top: a.top, left: a.left },
    d = e.jsxs("div", {
      ref: r,
      className: `aquatic-scene fixed bottom-0 right-0 overflow-y-auto overflow-x-hidden ${s ? "z-[46]" : "z-[35]"}`,
      style: n,
      "data-aquatic-scene": !0,
      children: [
        e.jsxs("div", {
          className: "aquatic-rays",
          "aria-hidden": "true",
          children: [
            e.jsx("span", {}),
            e.jsx("span", {}),
            e.jsx("span", {}),
            e.jsx("span", {}),
          ],
        }),
        e.jsx(at, {}),
        e.jsxs("div", {
          className: "relative flex min-h-full flex-col",
          children: [
            e.jsx("div", {
              "data-sea-content": !0,
              className:
                "relative z-10 mx-auto w-full max-w-5xl flex-1 px-4 pb-40 pt-8 sm:px-8 sm:pt-10",
              children: t,
            }),
            e.jsx(lt, {}),
          ],
        }),
      ],
    });
  return me.createPortal(d, document.body);
}
const G = [
    { mode: "bubble", label: "Bubble sort" },
    { mode: "insertion", label: "Insertion sort" },
    { mode: "merge", label: "Merge sort" },
  ],
  it = [
    { labels: "numbers", label: "Numbers" },
    { labels: "names", label: "Names" },
  ],
  ct =
    "One difference: insertion sort inserts each value once, into its correct place in a sorted part at the start. Bubble sort swaps adjacent pairs over several passes, and the end of the list is sorted first.",
  dt = {
    bubble:
      "Bubble sort compares adjacent pairs and swaps them if they are in the wrong order. Each pass moves the highest value to the end, so the next pass can stop one place earlier. It needs another pass whenever a pass made a swap, and stops after a pass with no swaps or when only one value is left.",
    insertion:
      "Insertion sort starts on the second value. It takes each next value and moves it left past every value that belongs after it, then inserts it. It stops when it reaches the end of the list.",
    merge:
      "Merge sort splits the list into single items, then merges neighbouring lists in order: lists of 2, then 4, then the whole list. Show every merge stage: the marks are for the lists of 2, the lists of 4 and the final merge, not the sorted list on its own.",
  };
function E({ value: t, labels: r, state: s = "idle" }) {
  const a = rt(t),
    n = r === "numbers" && a ? 46 + a.value * 2.6 : 60,
    d = s === "compare" || s === "key",
    o = s === "settled" || s === "sorted",
    h = d
      ? "drop-shadow(0 0 5px rgba(186, 230, 253, 0.95)) drop-shadow(0 0 16px rgba(56, 189, 248, 0.75))"
      : o
        ? "drop-shadow(0 0 4px rgba(134, 239, 172, 0.85)) drop-shadow(0 0 11px rgba(74, 222, 128, 0.55))"
        : "none";
  return e.jsxs("span", {
    className: `relative flex shrink-0 flex-col items-center gap-0.5 px-1 py-1 transition duration-300 ${s === "key" ? "-translate-y-4" : ""} ${s === "used" ? "opacity-25" : ""}`,
    "data-fish": t,
    "data-fish-state": s,
    children: [
      e.jsx("svg", {
        viewBox: "0 0 64 64",
        style: {
          width: `calc(${n}px * var(--creature-scale, 1))`,
          height: `calc(${n}px * var(--creature-scale, 1))`,
          filter: h,
          transition: "filter 300ms",
        },
        "aria-hidden": "true",
        children: a ? e.jsx(a.Art, {}) : null,
      }),
      e.jsx("span", {
        className: `font-bold ${r === "numbers" ? "text-sm tabular-nums" : "text-xs"} ${d ? "text-sky-200" : o ? "text-green-300" : "text-slate-50"}`,
        "data-fish-label": !0,
        children: t,
      }),
    ],
  });
}
function ut({ air: t }) {
  return e.jsx("span", {
    className: "flex items-center gap-1.5",
    "aria-label": `Air left: ${t} of ${B}`,
    children: Array.from({ length: B }, (r, s) =>
      e.jsx(
        "span",
        {
          className: `h-3.5 w-3.5 rounded-full border ${s < t ? "border-sky-200 bg-sky-300/80" : "border-slate-600 bg-transparent"}`,
        },
        s,
      ),
    ),
  });
}
function Q({ children: t }) {
  return e.jsx("div", {
    className:
      "relative flex min-h-[220px] flex-wrap items-end justify-center gap-x-1 gap-y-4 py-6 [--creature-scale:0.62] sm:gap-x-2 sm:py-10 sm:[--creature-scale:1]",
    children: t,
  });
}
function F({ values: t, tone: r = "plain" }) {
  const s = {
    plain: "border-sky-200/25 bg-sky-950/60 text-slate-50",
    partial: "border-dashed border-amber-300/60 bg-sky-950/40 text-amber-100",
    wrong: "border-rose-400/60 bg-rose-500/10 text-rose-100",
    right: "border-emerald-400/60 bg-emerald-500/10 text-emerald-100",
  }[r];
  return e.jsxs("span", {
    className: `inline-block max-w-full rounded-md border px-1.5 py-0.5 font-mono text-sm [overflow-wrap:anywhere] ${s}`,
    "data-list-chip": !0,
    children: ["[", t.join(", "), "]"],
  });
}
function D({ stages: t, building: r }) {
  return e.jsxs("ol", {
    className: "space-y-1.5",
    "aria-label": "Merge sort stages",
    "data-merge-stages": !0,
    children: [
      t.map((s, a) =>
        e.jsx(
          "li",
          {
            className: "flex flex-wrap gap-1.5",
            "data-merge-stage": a,
            children: s.map((n, d) => e.jsx(F, { values: n }, d)),
          },
          a,
        ),
      ),
      r && (r.built.length > 0 || r.merged.length > 0)
        ? e.jsxs("li", {
            className: "flex flex-wrap gap-1.5",
            "data-merge-stage": "building",
            children: [
              r.built.map((s, a) => e.jsx(F, { values: s }, a)),
              r.merged.length > 0
                ? e.jsx(F, { values: r.merged, tone: "partial" })
                : null,
            ],
          })
        : null,
    ],
  });
}
function ft(t, r, s) {
  return t === "numbers"
    ? `${r} is bigger than ${s}`
    : `${r} comes after ${s} in the alphabet`;
}
function ht(t, r, s) {
  return t === "numbers"
    ? `${r} is not bigger than ${s}`
    : `${r} comes before ${s} in the alphabet`;
}
function xt({ title: t, tagline: r }) {
  const {
    ref: s,
    fullscreen: a,
    supported: n,
    toggle: d,
    windowed: o,
    toggleWindow: h,
    immersive: l,
  } = Be();
  return e.jsxs(ot, {
    sceneRef: s,
    filled: o && !a,
    children: [
      e.jsxs("div", {
        className: l ? void 0 : "mb-6 flex items-start justify-between gap-4",
        "data-sea-intro": !0,
        children: [
          e.jsxs("div", {
            className: l ? void 0 : "space-y-2",
            children: [
              e.jsx("h1", {
                id: "activity-heading",
                className: l
                  ? "sr-only"
                  : "text-3xl font-semibold text-sky-50 sm:text-4xl",
                children: t,
              }),
              e.jsx("p", {
                className: l ? "hidden" : "text-sky-100/80",
                children: r,
              }),
            ],
          }),
          e.jsx(ze, {
            fullscreen: a,
            windowed: o,
            supported: n,
            onToggleFullscreen: d,
            onToggleWindow: h,
            className: "border-sky-200/30 text-sky-50 hover:bg-sky-900/60",
            immersiveClassName:
              "border-sky-200/30 bg-sky-950/60 text-sky-50 backdrop-blur hover:bg-sky-900/80",
          }),
        ],
      }),
      e.jsx(gt, {}),
    ],
  });
}
const z = "flex flex-wrap items-end justify-center gap-x-0.5 px-1 sm:px-2",
  H = (t) => t.flat();
function U(t, r) {
  const s = [];
  let a = 0;
  for (const n of r) (s.push(t.slice(a, a + n)), (a += n));
  return s;
}
function pt({
  labels: t,
  pool: r,
  poolSizes: s,
  sizes: a,
  expected: n,
  prompt: d,
  revealLead: o,
  revealing: h,
  onCheck: l,
  onContinue: m,
}) {
  const [g, A] = p.useState([]),
    k = g.length === r.length,
    C = U(
      Array.from({ length: r.length }, (L, v) => v),
      a,
    );
  return e.jsxs("div", {
    className: "space-y-5",
    "data-predict-round": !0,
    children: [
      e.jsx(Q, {
        children: U(r, s).map((L, v) =>
          e.jsx(
            "span",
            {
              className: z,
              "data-predict-pool": v,
              children: L.map((y) => {
                const w = g.includes(y);
                return e.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: w || h,
                    onClick: () => A((N) => [...N, y]),
                    "aria-label": `Add ${y}`,
                    className:
                      "min-h-[40px] rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 enabled:hover:bg-sky-900/30",
                    children: e.jsx(E, {
                      value: y,
                      labels: t,
                      state: w ? "used" : "idle",
                    }),
                  },
                  String(y),
                );
              }),
            },
            v,
          ),
        ),
      }),
      e.jsx("p", { className: "text-lg text-slate-100", children: d }),
      e.jsx("div", {
        className: "flex flex-wrap gap-3",
        "aria-label": "Your prediction",
        "data-prediction": !0,
        children: C.map((L, v) =>
          e.jsx(
            "div",
            {
              className:
                "flex max-w-full flex-wrap gap-1.5 rounded-xl border border-sky-200/25 bg-sky-950/40 p-1.5",
              "data-prediction-group": v,
              children: L.map((y) => {
                const w = g[y],
                  N =
                    h && w !== void 0
                      ? w === n[y]
                        ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-100"
                        : "border-rose-400/60 bg-rose-500/10 text-rose-100"
                      : w !== void 0
                        ? "border-sky-200/50 bg-sky-900/60 text-slate-50 hover:bg-sky-800/60"
                        : "border-dashed border-slate-500 text-slate-500";
                return e.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: w === void 0 || h,
                    onClick: () => A((T) => T.filter((_, W) => W !== y)),
                    "aria-label":
                      w === void 0 ? `Empty place ${y + 1}` : `Remove ${w}`,
                    className: `flex h-10 min-w-[40px] items-center justify-center rounded-lg border px-2 font-mono text-sm font-semibold ${N}`,
                    "data-prediction-slot": y,
                    children: w ?? "",
                  },
                  y,
                );
              }),
            },
            v,
          ),
        ),
      }),
      h
        ? e.jsxs("div", {
            className: "space-y-3",
            "aria-live": "polite",
            "data-predict-reveal": !0,
            children: [
              e.jsx("p", { className: "text-sm text-rose-200", children: o }),
              e.jsx("div", {
                className: "flex flex-wrap gap-1.5",
                children: U(n, a).map((L, v) =>
                  e.jsx(F, { values: L, tone: "right" }, v),
                ),
              }),
              e.jsx("button", {
                type: "button",
                onClick: m,
                className: `inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${R}`,
                children: "Continue",
              }),
            ],
          })
        : e.jsxs("button", {
            type: "button",
            disabled: !k,
            onClick: () => l(g),
            className: `inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${R}`,
            children: [
              e.jsx(ne, { "aria-hidden": "true", className: "h-4 w-4" }),
              "Check",
            ],
          }),
    ],
  });
}
const mt = Math.ceil(Math.log2(ie));
function gt() {
  const [t, r] = p.useState("numbers"),
    [s, a] = p.useState(null),
    [n, d] = p.useState(null),
    [o, h] = p.useState(null),
    [l, m] = p.useState(null),
    [g, A] = p.useState(B),
    [k, C] = p.useState(null),
    [L, v] = p.useState(!1),
    [y, w] = p.useState(() => new Set()),
    N = s === "merge" ? mt : se - 1,
    T = n
      ? n.done
        ? N
        : n.pass - 1
      : o
        ? o.done
          ? N
          : o.keyIndex - 1
        : l
          ? l.done
            ? N
            : l.stages.length - 1
          : 0;
  ge(T, N, N - y.size);
  function _(c) {
    const u = qe(
      c === "merge" ? ie : se,
      Math.random,
      t === "numbers" ? tt : st,
    );
    (a(c),
      d(c === "bubble" ? Ne(u) : null),
      h(c === "insertion" ? Ee(u) : null),
      m(c === "merge" ? Ce(u) : null),
      A(B),
      C(null),
      v(!1),
      w(new Set()));
  }
  function W(c) {
    (A((i) => Math.max(0, i - 1)),
      w((i) => (i.has(T) ? i : new Set(i).add(T))),
      C(c));
  }
  function ee(c) {
    if (!n || g === 0) return;
    const i = n.values[n.position],
      u = n.values[n.position + 1],
      f = ae(n, c);
    if (!f.correct) {
      W(
        K(n) === "swap"
          ? `${ft(t, i, u)}, so they are out of order: swap them.`
          : `${ht(t, i, u)}, so they are already in order: leave them.`,
      );
      return;
    }
    (C(null), d(f.state));
  }
  function ue(c) {
    if (!o || g === 0) return;
    const i = le(o, c);
    if (!i.correct) {
      const u = o.values[o.keyIndex],
        f = t === "numbers" ? "a bigger value" : "a name later in the alphabet",
        x =
          t === "numbers"
            ? "that is not bigger than it"
            : "that comes before it in the alphabet";
      W(
        c > V(o)
          ? `Not far enough. ${u} still has ${f} to its left.`
          : `Too far. ${u} goes after every value ${x}.`,
      );
      return;
    }
    (C(null), h(i.state));
  }
  function fe(c) {
    if (!l || g === 0) return;
    const i = oe(l, c);
    if (!i.correct) {
      const u = Y(l) === "left",
        f = u ? l.left[0] : l.right[0],
        x = u ? l.right[0] : l.left[0];
      W(
        t === "numbers"
          ? `${f} is smaller than ${x}, so ${f} goes next.`
          : `${f} comes before ${x} in the alphabet, so ${f} goes next.`,
      );
      return;
    }
    (C(null), m(i.state));
  }
  if (!s)
    return e.jsxs("div", {
      className: "space-y-4",
      children: [
        e.jsx("div", {
          className:
            "inline-flex rounded-xl border border-sky-200/25 bg-sky-950/45 p-1 backdrop-blur-sm",
          role: "group",
          "aria-label": "Sort numbers or names",
          children: it.map((c) =>
            e.jsx(
              "button",
              {
                type: "button",
                "aria-pressed": t === c.labels,
                onClick: () => r(c.labels),
                className: `min-h-[40px] rounded-lg px-4 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 ${t === c.labels ? "bg-sky-200 text-sky-950" : "text-slate-100 hover:bg-sky-900/60"}`,
                "data-label-mode": c.labels,
                children: c.label,
              },
              c.labels,
            ),
          ),
        }),
        e.jsx("div", {
          className: "grid gap-3 sm:grid-cols-3",
          role: "group",
          "aria-label": "Choose an algorithm",
          children: G.map((c) =>
            e.jsx(
              "button",
              {
                type: "button",
                onClick: () => _(c.mode),
                className:
                  "flex min-h-[88px] items-center rounded-2xl border border-sky-200/25 bg-sky-950/45 p-5 text-left backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-sky-200/60 hover:bg-sky-900/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200",
                children: e.jsx("span", {
                  className: "text-xl font-bold text-slate-50",
                  children: c.label,
                }),
              },
              c.mode,
            ),
          ),
        }),
      ],
    });
  const S = !!(n?.done || o?.done || l?.done),
    he = g === 0 && !S && !L,
    xe = G.find((c) => c.mode === s)?.label ?? "",
    q = e.jsxs("div", {
      className:
        "flex flex-wrap items-center justify-between gap-3 text-sm text-slate-300",
      children: [
        e.jsxs("span", {
          className: "font-semibold uppercase tracking-[0.18em]",
          children: [xe, n && !n.done ? ` · Pass ${n.pass}` : ""],
        }),
        e.jsx(ut, { air: g }),
      ],
    }),
    O = k
      ? e.jsx("p", {
          className: "text-sm text-rose-200",
          "aria-live": "polite",
          children: k,
        })
      : null;
  if (S || he) {
    const c = n?.values ?? o?.values ?? H(l?.stages[l.stages.length - 1] ?? []);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className: "space-y-5",
          "aria-live": "polite",
          "data-game-finished": S ? "sorted" : "out-of-air",
          children: [
            q,
            e.jsx(Q, {
              children: c.map((i) =>
                e.jsx(
                  E,
                  { value: i, labels: t, state: S ? "sorted" : "idle" },
                  String(i),
                ),
              ),
            }),
            e.jsxs("div", {
              className: `space-y-3 rounded-2xl border p-5 ${S ? "border-emerald-500/40 bg-emerald-500/5" : "border-rose-500/40 bg-rose-500/5"}`,
              children: [
                e.jsx("p", {
                  className: `text-lg font-semibold ${S ? "text-emerald-300" : "text-rose-200"}`,
                  children: S
                    ? "Shoal sorted!"
                    : "Out of air. Surface and try again.",
                }),
                n && S
                  ? e.jsxs("p", {
                      className: "text-slate-200",
                      children: [
                        n.pass,
                        " ",
                        n.pass === 1 ? "pass" : "passes",
                        ", ",
                        n.comparisons,
                        " ",
                        "comparisons, ",
                        n.swaps,
                        " swaps.",
                      ],
                    })
                  : null,
                o && S
                  ? e.jsxs("p", {
                      className: "text-slate-200",
                      children: [
                        o.shifts,
                        " ",
                        o.shifts === 1 ? "creature" : "creatures",
                        " shifted right to make space.",
                      ],
                    })
                  : null,
                l ? e.jsx(D, { stages: l.stages }) : null,
                e.jsx("p", {
                  className: "leading-7 text-slate-300",
                  children: dt[s],
                }),
                s !== "merge"
                  ? e.jsx("p", {
                      className: "leading-7 text-slate-300",
                      children: ct,
                    })
                  : null,
                e.jsxs("div", {
                  className: "flex flex-wrap gap-3",
                  children: [
                    e.jsxs("button", {
                      type: "button",
                      onClick: () => _(s),
                      className: `inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${R}`,
                      children: [
                        e.jsx(we, {
                          "aria-hidden": "true",
                          className: "h-4 w-4",
                        }),
                        "New shoal",
                      ],
                    }),
                    G.filter((i) => i.mode !== s).map((i) =>
                      e.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => _(i.mode),
                          className:
                            "rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800",
                          children: ["Try ", i.label.toLowerCase()],
                        },
                        i.mode,
                      ),
                    ),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(be, { game: "aquatic-sort" }),
      ],
    });
  }
  const te = n ? n.pass : o ? o.keyIndex : l ? l.stages.length : 0;
  if (Ie(te)) {
    let c = [],
      i = [],
      u = [],
      f = [],
      x = "",
      $ = "",
      I = () => {};
    if (n) {
      const M = $e(n);
      ((c = n.values),
        (i = M.values),
        (u = [c.length]),
        (f = u),
        (x = `Predict the list after pass ${n.pass}.`),
        ($ = `After pass ${n.pass} the list is:`),
        (I = () => d(M)));
    } else if (o) {
      const M = Ae(o),
        P = o.values[o.keyIndex];
      ((c = o.values),
        (i = M.values),
        (u = [c.length]),
        (f = u),
        (x = `Predict the list after ${P} is inserted.`),
        ($ = `After ${P} is inserted the list is:`),
        (I = () => h(M)));
    } else if (l) {
      const M = We(l);
      ((c = H(l.stages[l.stages.length - 1] ?? [])),
        (i = H(M.stages[M.stages.length - 1] ?? [])),
        (u = Fe(l)),
        (f = (l.stages[l.stages.length - 1] ?? []).map((pe) => pe.length)));
      const P = u.length === 1;
      ((x = P ? "Predict the merged list." : `Predict the lists of ${u[0]}.`),
        ($ = P ? "The merged list is:" : `The lists of ${u[0]} are:`),
        (I = () => m(M)));
    }
    return e.jsxs("div", {
      className: "space-y-5",
      "data-sort-mode": s,
      "data-predict": !0,
      children: [
        q,
        l ? e.jsx(D, { stages: l.stages }) : null,
        e.jsx(
          pt,
          {
            labels: t,
            pool: c,
            poolSizes: f,
            sizes: u,
            expected: i,
            prompt: x,
            revealLead: $,
            revealing: L,
            onCheck: (M) => {
              if (Pe(M, i)) {
                (C(null), I());
                return;
              }
              (W(null), v(!0));
            },
            onContinue: () => {
              (v(!1), I());
            },
          },
          `${s}-${te}`,
        ),
      ],
    });
  }
  if (n) {
    const c = Se(n),
      i = n.values[n.position],
      u = n.values[n.position + 1];
    return e.jsxs("div", {
      className: "space-y-5",
      "data-sort-mode": "bubble",
      children: [
        q,
        e.jsx(Q, {
          children: n.values.map((f, x) =>
            e.jsx(
              E,
              {
                value: f,
                labels: t,
                state:
                  x === n.position || x === n.position + 1
                    ? "compare"
                    : x >= c
                      ? "settled"
                      : "idle",
              },
              String(f),
            ),
          ),
        }),
        e.jsxs("p", {
          className: "text-lg text-slate-100",
          children: [
            "Compare ",
            e.jsx("strong", { children: i }),
            " and ",
            e.jsx("strong", { children: u }),
            ". Are they in the wrong order?",
          ],
        }),
        e.jsxs("div", {
          className: "flex flex-wrap gap-3",
          children: [
            e.jsxs("button", {
              type: "button",
              onClick: () => ee("swap"),
              className: `inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${R}`,
              children: [
                e.jsx(Me, { "aria-hidden": "true", className: "h-4 w-4" }),
                "Swap",
              ],
            }),
            e.jsxs("button", {
              type: "button",
              onClick: () => ee("keep"),
              className:
                "inline-flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800",
              children: [
                e.jsx(ne, { "aria-hidden": "true", className: "h-4 w-4" }),
                "Leave them",
              ],
            }),
          ],
        }),
        O,
      ],
    });
  }
  if (o) {
    const { values: c, keyIndex: i } = o,
      u = c[i],
      f = (x) =>
        e.jsx(
          "button",
          {
            type: "button",
            onClick: () => ue(x),
            "aria-label":
              x === i ? `Leave ${u} where it is` : `Insert ${u} before ${c[x]}`,
            className:
              "flex h-12 w-6 shrink-0 items-center justify-center self-center rounded-lg border border-dashed border-amber-300/60 text-amber-200 transition hover:border-amber-200 hover:bg-amber-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:h-16 sm:w-7",
            children: e.jsx(Le, {
              "aria-hidden": "true",
              className: "h-4 w-4",
            }),
          },
          `slot-${x}`,
        );
    return e.jsxs("div", {
      className: "space-y-5",
      "data-sort-mode": "insertion",
      children: [
        q,
        e.jsx(Q, {
          children: c.map((x, $) =>
            e.jsxs(
              p.Fragment,
              {
                children: [
                  $ <= i ? f($) : null,
                  e.jsx(E, {
                    value: x,
                    labels: t,
                    state: $ === i ? "key" : $ < i ? "sorted" : "idle",
                  }),
                ],
              },
              String(x),
            ),
          ),
        }),
        e.jsxs("p", {
          className: "text-lg text-slate-100",
          children: [
            "Where does ",
            e.jsx("strong", { children: u }),
            " go in the sorted part? Pick a gap.",
          ],
        }),
        O,
      ],
    });
  }
  if (l) {
    const c = (i, u) =>
      u.map((f, x) =>
        x === 0
          ? e.jsx(
              "button",
              {
                type: "button",
                onClick: () => fe(i),
                "aria-label": `Take ${f}`,
                className:
                  "rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 hover:bg-sky-900/30",
                "data-merge-front": i,
                children: e.jsx(E, { value: f, labels: t, state: "compare" }),
              },
              String(f),
            )
          : e.jsx(E, { value: f, labels: t }, String(f)),
      );
    return e.jsxs("div", {
      className: "space-y-5",
      "data-sort-mode": "merge",
      children: [
        q,
        e.jsx(D, {
          stages: l.stages,
          building: { built: l.built, merged: l.merged },
        }),
        e.jsxs(Q, {
          children: [
            l.built.map((i, u) =>
              e.jsx(
                "span",
                {
                  className: z,
                  "data-merge-list": "built",
                  children: i.map((f) =>
                    e.jsx(
                      E,
                      { value: f, labels: t, state: "sorted" },
                      String(f),
                    ),
                  ),
                },
                `built-${u}`,
              ),
            ),
            e.jsxs("span", {
              className: `${z} rounded-2xl border border-sky-200/30 bg-sky-950/30`,
              "data-merge-list": "active",
              children: [
                l.merged.map((i) =>
                  e.jsx(E, { value: i, labels: t, state: "sorted" }, String(i)),
                ),
                l.merged.length > 0
                  ? e.jsx("span", {
                      "aria-hidden": "true",
                      className: "w-2 sm:w-3",
                    })
                  : null,
                c("left", l.left),
                e.jsx("span", {
                  "aria-hidden": "true",
                  className: "w-3 sm:w-5",
                }),
                c("right", l.right),
              ],
            }),
            (l.stages[l.stages.length - 1] ?? [])
              .slice(l.pair + 2)
              .map((i, u) =>
                e.jsx(
                  "span",
                  {
                    className: z,
                    "data-merge-list": "next",
                    children: i.map((f) =>
                      e.jsx(E, { value: f, labels: t }, String(f)),
                    ),
                  },
                  `next-${u}`,
                ),
              ),
          ],
        }),
        e.jsxs("p", {
          className: "text-lg text-slate-100",
          children: [
            "Merge ",
            e.jsx(F, { values: l.left }),
            " and ",
            e.jsx(F, { values: l.right }),
            ". Which goes next?",
          ],
        }),
        O,
      ],
    });
  }
  return null;
}
const wt = Object.freeze(
  Object.defineProperty({ __proto__: null, default: xt }, Symbol.toStringTag, {
    value: "Module",
  }),
);
export { xt as A, ze as G, wt as a, Be as u };
