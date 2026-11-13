import { r as u, j as e } from "./react-vendor-BK1G6oO1.js";
import "./keyword-flashcards-Ha6Msavb.js";
import { u as b } from "./use-cover-art-CyGvgy9q.js";
import { s as v, t as f } from "./ui-components-DeMDYLzO.js";
const k = 48;
function g({
  label: h,
  picks: l,
  chooseLabel: p = "Choose",
  primaryClass: m = "",
  onPick: x,
}) {
  const [d, j] = u.useState(0),
    i = u.useRef(null),
    s = l[d],
    N = b(s.id),
    n = l.length;
  function r(t) {
    j((a) => (a + t + n) % n);
  }
  return e.jsxs("section", {
    className: "ip",
    "aria-label": h,
    "data-immersive-picker": !0,
    "data-story-card": "picker",
    "data-pick": s.id,
    onTouchStart: (t) => {
      const a = t.touches[0];
      i.current = a ? { x: a.clientX, y: a.clientY } : null;
    },
    onTouchEnd: (t) => {
      const a = i.current,
        c = t.changedTouches[0];
      if (((i.current = null), !a || !c)) return;
      const o = c.clientX - a.x;
      Math.abs(o) > k &&
        Math.abs(o) > Math.abs(c.clientY - a.y) &&
        r(o < 0 ? 1 : -1);
    },
    children: [
      e.jsx(
        "div",
        { className: "ip-art", ref: N, "aria-hidden": "true", children: s.art },
        s.id,
      ),
      e.jsxs("div", {
        className: "ip-overlay",
        children: [
          e.jsxs("p", {
            className: "ip-head",
            children: [
              e.jsx("span", { className: "ip-name", children: s.name }),
              s.aside
                ? e.jsx("span", { className: "ip-aside", children: s.aside })
                : null,
            ],
          }),
          s.line
            ? e.jsx("p", { className: "ip-line", children: s.line })
            : null,
          e.jsxs("div", {
            className: "ip-nav",
            children: [
              e.jsx("button", {
                type: "button",
                className: "ip-arrow",
                "aria-label": "Previous",
                onClick: () => r(-1),
                children: e.jsx(v, { "aria-hidden": "true" }),
              }),
              e.jsx("button", {
                type: "button",
                className: `ip-choose ${m}`,
                onClick: () => x(s.id),
                ...s.data,
                children: p,
              }),
              e.jsx("button", {
                type: "button",
                className: "ip-arrow",
                "aria-label": "Next",
                onClick: () => r(1),
                children: e.jsx(f, { "aria-hidden": "true" }),
              }),
            ],
          }),
          e.jsxs("p", {
            className: "ip-count",
            "aria-live": "polite",
            children: [d + 1, " of ", n],
          }),
        ],
      }),
    ],
  });
}
export { g as I };
