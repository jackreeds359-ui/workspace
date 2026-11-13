import { j as o, r as p } from "./react-vendor-BK1G6oO1.js";
function i(s, e, a) {
  const t = s.split(e);
  return t.length === 1
    ? s
    : t.map((n, r) =>
        r % 2 === 1
          ? o.jsx("strong", { className: a, children: n }, r)
          : o.jsx(p.Fragment, { children: n }, r),
      );
}
export { i as b };
