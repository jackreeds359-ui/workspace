const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/pptxgen.es-BOm7mPIZ.js",
      "assets/index-CHiQZc8e.js",
      "assets/index-CFivEobA.css",
      "assets/_commonjs-dynamic-modules-TDtrdbi3.js",
    ]),
) => i.map((i) => d[i]);
import {
  _ as y,
  c8 as _,
  c7 as v,
  c9 as D,
  ca as x,
  cm as S,
} from "./index-CHiQZc8e.js";
function g({ TextRun: o }, e) {
  return (e.content ?? []).flatMap((t) => {
    if (t.type === "hardBreak") return [new o({ text: "", break: 1 })];
    if (t.type !== "text") return [];
    const r = new Set((t.marks ?? []).map((i) => i.type));
    return [
      new o({
        text: t.text ?? "",
        bold: r.has("bold"),
        italics: r.has("italic"),
      }),
    ];
  });
}
function h(o, e, t = null) {
  const { HeadingLevel: r, Paragraph: i } = o,
    d = [r.HEADING_1, r.HEADING_1, r.HEADING_2, r.HEADING_3];
  switch (e.type) {
    case "heading":
      return [new i({ heading: d[e.attrs?.level ?? 2], children: g(o, e) })];
    case "paragraph":
      return [
        new i({
          children: g(o, e),
          ...(t?.kind === "bullet" ? { bullet: { level: t.level } } : {}),
          ...(t?.kind === "number"
            ? { numbering: { reference: "numbers", level: t.level } }
            : {}),
        }),
      ];
    case "bulletList":
    case "orderedList": {
      const s = e.type === "bulletList" ? "bullet" : "number",
        n = t ? Math.min(t.level + 1, 3) : 0;
      return (e.content ?? []).flatMap((c) =>
        (c.content ?? []).flatMap((l) => h(o, l, { kind: s, level: n })),
      );
    }
    default:
      return (e.content ?? []).flatMap((s) => h(o, s, t));
  }
}
async function P(o, e) {
  const t = await y(() => import("./index-nz6jw_Fj.js"), []),
    { AlignmentType: r, Document: i, LevelFormat: d, Packer: s } = t,
    n = new i({
      title: e,
      numbering: {
        config: [
          {
            reference: "numbers",
            levels: [0, 1, 2, 3].map((c) => ({
              level: c,
              format: d.DECIMAL,
              text: `%${c + 1}.`,
              alignment: r.START,
              style: {
                paragraph: { indent: { left: 720 * (c + 1), hanging: 360 } },
              },
            })),
          },
        ],
      },
      sections: [{ children: h(t, o.doc) }],
    });
  return new Uint8Array(await s.toArrayBuffer(n));
}
async function F(o, e) {
  const { default: t } = await y(async () => {
      const { default: l } = await import("./index-Cyo9THSS.js");
      return { default: l };
    }, []),
    r = new Map();
  for (const { from: l, to: a } of o.links)
    l !== void 0 && a !== void 0 && r.set(a, [...(r.get(a) ?? []), l]);
  const i = { fontWeight: "bold", backgroundColor: "#F1F5F9" },
    d = o.cells.map((l, a) => [
      ...l.map((p, m) => {
        const u = o.formats[_(m, a)] ?? {},
          w = a > 0 && m >= o.timelineFrom && v(p),
          k = Object.fromEntries(
            (u.borders ?? []).flatMap((b) => [
              [`${b}BorderStyle`, "thin"],
              [`${b}BorderColor`, "#000000"],
            ]),
          );
        return {
          value: w ? D : p,
          type: String,
          ...(a === 0 ? i : {}),
          ...(w ? { fontWeight: "bold", align: "center" } : {}),
          ...(u.fill ? { backgroundColor: `#${u.fill}` } : {}),
          ...(u.color ? { textColor: `#${u.color}` } : {}),
          ...(u.bold ? { fontWeight: "bold" } : {}),
          ...(u.italic ? { fontStyle: "italic" } : {}),
          ...(u.underline ? { textDecoration: { underline: !0 } } : {}),
          ...(u.align ? { align: u.align } : m > 0 ? { align: "center" } : {}),
          ...k,
        };
      }),
      a === 0
        ? { value: "Depends on", type: String, ...i }
        : {
            value: (r.get(a) ?? [])
              .map((p) => o.cells[p]?.[0] || `Row ${p + 1}`)
              .join(", "),
            type: String,
          },
    ]),
    s = o.cells[0]?.length ?? 0,
    n = [
      ...Array.from({ length: s }, (l, a) => ({
        width: a === 0 ? 32 : a < o.timelineFrom ? 8 : 9,
      })),
      { width: 30 },
    ],
    c = await t(d, { sheet: e.slice(0, 31), columns: n }).toBlob();
  return new Uint8Array(await c.arrayBuffer());
}
const A = {
  solid: "solid",
  roundDot: "sysDot",
  squareDot: "sysDash",
  dash: "dash",
  dashDot: "dashDot",
  longDash: "lgDash",
};
function f(o) {
  return o.stroke
    ? { color: o.stroke, width: o.strokeWidth, dashType: A[o.strokeDash] }
    : { type: "none" };
}
const E = 13.333 / 960;
function T(o) {
  const e = (t) => Math.round(t * E * 1e4) / 1e4;
  return o.map((t) => {
    switch (t[0]) {
      case "M":
        return { x: e(t[1]), y: e(t[2]), moveTo: !0 };
      case "L":
        return { x: e(t[1]), y: e(t[2]) };
      case "C":
        return {
          x: e(t[5]),
          y: e(t[6]),
          curve: {
            type: "cubic",
            x1: e(t[1]),
            y1: e(t[2]),
            x2: e(t[3]),
            y2: e(t[4]),
          },
        };
      case "Q":
        return {
          x: e(t[3]),
          y: e(t[4]),
          curve: { type: "quadratic", x1: e(t[1]), y1: e(t[2]) },
        };
      default:
        return { close: !0 };
    }
  });
}
function L(o) {
  const e = x(o.shape);
  if (e.pptx) return { shape: e.pptx, ...(e.flipV ? { flipV: !0 } : {}) };
  const t = S(e.id, (o.w / 100) * 960, (o.h / 100) * 540, o.path);
  return { shape: "custGeom", points: T(t) };
}
async function M(o, e) {
  const { default: t } = await y(
      async () => {
        const { default: d } = await import("./pptxgen.es-BOm7mPIZ.js");
        return { default: d };
      },
      __vite__mapDeps([0, 1, 2, 3]),
    ),
    r = new t();
  r.layout = "LAYOUT_WIDE";
  for (const d of o.slides) {
    const s = r.addSlide();
    s.background = { color: d.background };
    for (const n of d.elements) {
      const c = { x: `${n.x}%`, y: `${n.y}%`, w: `${n.w}%`, h: `${n.h}%` };
      if (n.kind === "image" && n.src && e) {
        const l = await e(n.src);
        if (l) {
          (s.addImage({ ...c, data: l }),
            n.stroke &&
              s.addShape(r.ShapeType.rect, {
                ...c,
                fill: { type: "none" },
                line: f(n),
              }));
          continue;
        }
      }
      if (n.kind === "box") {
        const l = x(n.shape),
          a = L(n),
          p = l.arrows
            ? {
                endArrowType: "triangle",
                ...(l.arrows === "both" ? { beginArrowType: "triangle" } : {}),
              }
            : {};
        s.addShape(a.shape, {
          ...c,
          ...(a.points ? { points: a.points } : {}),
          ...(a.flipV ? { flipV: !0 } : {}),
          ...(n.rotation ? { rotate: n.rotation } : {}),
          fill: n.fill && !l.line ? { color: n.fill } : { type: "none" },
          line: n.stroke ? { ...f(n), ...p } : { type: "none" },
        });
        continue;
      }
      if (n.kind === "image") {
        s.addShape(r.ShapeType.roundRect, {
          ...c,
          rectRadius: 0.05,
          fill: n.fill ? { color: n.fill } : { type: "none" },
          line: f(n),
        });
        continue;
      }
      s.addText(n.text, {
        ...c,
        fontSize: n.fontSize,
        bold: n.bold,
        color: n.color,
        fill: n.fill ? { color: n.fill } : void 0,
        align: n.kind === "button" ? "center" : "left",
        valign: n.kind === "text" ? "top" : "middle",
        fontFace: "Arial",
        line: n.stroke ? f(n) : void 0,
      });
    }
  }
  return await r.write({ outputType: "uint8array" });
}
const R = {
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
};
function O(o, e, t) {
  const r = URL.createObjectURL(new Blob([new Uint8Array(o)], { type: t })),
    i = document.createElement("a");
  ((i.href = r),
    (i.download = e),
    document.body.append(i),
    i.click(),
    i.remove(),
    window.setTimeout(() => URL.revokeObjectURL(r), 1e3));
}
export {
  R as OFFICE_TYPES,
  P as buildDocx,
  M as buildPptx,
  F as buildXlsx,
  T as customGeometry,
  O as downloadBytes,
  L as pptxShape,
};
