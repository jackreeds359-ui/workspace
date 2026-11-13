import { r, j as n } from "./react-vendor-BK1G6oO1.js";
import { M as s, u as i, l as u } from "./proxy-DGk2Wawc.js";
function M({ children: e, isValidProp: o, ...t }) {
  (o && u(o),
    (t = { ...r.useContext(s), ...t }),
    (t.isStatic = i(() => t.isStatic)));
  const a = r.useMemo(
    () => t,
    [JSON.stringify(t.transition), t.transformPagePoint, t.reducedMotion],
  );
  return n.jsx(s.Provider, { value: a, children: e });
}
export { M };
