import { k as a } from "./index-DjyiOHey.js";
import { aU as i } from "./GameNotebook-b0Qw2wzd.js";
const d = a,
  f = i.cards,
  c = f.flatMap((t) => {
    const e = d[t.deck]?.find((s) => s.term === t.term);
    return e ? [{ ...e, id: t.id, deck: t.deck, topics: t.topics }] : [];
  });
function p(t) {
  const e = t.split("-")[0] ?? t,
    s = e.split("."),
    r = s.map((o, n) => s.slice(0, s.length - n).join("."));
  return e === t ? r : [t, ...r];
}
function l(t, e) {
  const s = p(e);
  return t.some((r) => s.includes(r));
}
function u(t, e) {
  return l(t, e) || t.some((s) => s.startsWith(`${e}.`));
}
function k(t) {
  return c.filter((e) => u(e.topics, t));
}
function w(t) {
  const e = new Set();
  return t.flatMap((s) => {
    const r = s.term.trim().toLowerCase();
    return e.has(r)
      ? []
      : (e.add(r),
        [
          c.find((n) => n.term.trim().toLowerCase() === r) ?? {
            ...s,
            id: `paper/${r.replace(/[^a-z0-9]+/g, "-")}`,
            deck: "",
            topics: [],
          },
        ]);
  });
}
function C(t, e = Math.random) {
  const s = [...t];
  for (let r = s.length - 1; r > 0; r -= 1) {
    const o = Math.floor(e() * (r + 1));
    [s[r], s[o]] = [s[o], s[r]];
  }
  return s;
}
export { w as f, k as g, C as s };
