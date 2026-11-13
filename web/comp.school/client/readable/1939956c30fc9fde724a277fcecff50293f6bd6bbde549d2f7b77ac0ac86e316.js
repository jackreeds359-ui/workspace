import { r as n } from "./react-vendor-BK1G6oO1.js";
const t = "retrieval-kit-fonts",
  o =
    "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&display=swap";
function i() {
  n.useEffect(() => {
    if (document.getElementById(t)) return;
    const e = document.createElement("link");
    ((e.id = t),
      (e.rel = "stylesheet"),
      (e.href = o),
      document.head.appendChild(e));
  }, []);
}
function s() {
  return typeof window > "u"
    ? !1
    : document.documentElement.dataset.reduceMotion === "true"
      ? !0
      : typeof window.matchMedia == "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function c(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
export { c, s as p, i as u };
