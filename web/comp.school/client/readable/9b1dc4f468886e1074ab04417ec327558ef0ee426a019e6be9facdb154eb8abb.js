import { j as e, r as j } from "./react-vendor-BK1G6oO1.js";
import {
  b6 as se,
  bm as re,
  ad as Ce,
  bW as ve,
  bZ as Ie,
  P as We,
  R as Ee,
} from "./index-DjyiOHey.js";
import { aq as ze, aT as Te } from "./GameNotebook-b0Qw2wzd.js";
import { T as Oe } from "./action-styles-DWMwPIR0.js";
import "./ui-components-DeMDYLzO.js";
const ae = {
    cafe: {
      name: "Café Rosa",
      alt: "A café table with a coffee cup and a receipt with code written on it",
    },
    station: {
      name: "Central Station",
      alt: "A train station concourse with a departures board and a card pinned to the noticeboard",
    },
    library: {
      name: "City Library",
      alt: "Library shelves with an open book on a reading desk and a slip of paper inside",
    },
    phone: {
      name: "Agent phone",
      alt: "A hand holding a phone with a new message on the screen",
    },
    bench: {
      name: "Riverside Park",
      alt: "A park bench by a lamp post with a folded newspaper left on the seat",
    },
    postcard: {
      name: "Hotel Bellevue",
      alt: "A hotel reception desk with a postcard propped against the bell",
    },
    passport: {
      name: "Airport desk",
      alt: "An airport check-in desk with an open passport on the counter",
    },
    market: {
      name: "Night market",
      alt: "A street market stall under a hanging shop sign",
    },
    radio: {
      name: "Radio room",
      alt: "A radio transmitter with dials and a microphone on a desk at night",
    },
    hq: {
      name: "Agency HQ",
      alt: "A briefing room with a laptop, a dossier and a pinboard on the wall",
    },
  },
  ie = [
    {
      id: "decode-cafe",
      kind: "decode",
      place: "cafe",
      title: "The receipt",
      brief:
        "A contact left four ASCII codes on a café receipt. Your codebook only has K.",
      format: "binary",
      key: ["K"],
      word: "LION",
    },
    {
      id: "decode-station",
      kind: "decode",
      place: "station",
      title: "The noticeboard",
      brief:
        "A card pinned at the station says where to meet. Your codebook only has D.",
      format: "binary",
      key: ["D"],
      word: "GATE",
    },
    {
      id: "decode-library",
      kind: "decode",
      place: "library",
      title: "The bookmark",
      brief:
        "A slip of paper in a library book holds four ASCII codes in denary.",
      format: "denary",
      key: ["M", "N", "O", "P", "Q"],
      word: "STOP",
    },
    {
      id: "decode-phone",
      kind: "decode",
      place: "phone",
      title: "Lower case",
      brief:
        "This text is in lower case. Lower-case letters have their own codes, so use lower-case a.",
      format: "denary",
      key: ["a"],
      word: "run",
    },
    {
      id: "decode-bench",
      kind: "decode",
      place: "bench",
      title: "The newspaper",
      brief:
        "Codes are pencilled in the margin of a newspaper left on a bench. Your codebook only has C.",
      format: "binary",
      key: ["C"],
      word: "SAFE",
    },
    {
      id: "decode-postcard",
      kind: "decode",
      place: "postcard",
      title: "The postcard",
      brief:
        "A postcard at the hotel desk is signed in code. Your codebook only has J.",
      format: "binary",
      key: ["J"],
      word: "HELP",
    },
  ],
  le = [
    {
      id: "encode-station",
      kind: "encode",
      place: "station",
      title: "Reply: OK",
      brief:
        "Pin a reply to the noticeboard. Switch the bits to write OK in 8-bit ASCII.",
      key: ["M"],
      word: "OK",
    },
    {
      id: "encode-phone",
      kind: "encode",
      place: "phone",
      title: "Reply: YES",
      brief:
        "HQ asks if you have the file. Switch the bits to write YES in 8-bit ASCII.",
      key: ["F", "V"],
      word: "YES",
    },
    {
      id: "encode-cafe",
      kind: "encode",
      place: "cafe",
      title: "Reply: GO",
      brief: "Write GO on a napkin for the waiter to pass on, in 8-bit ASCII.",
      key: ["J"],
      word: "GO",
    },
    {
      id: "encode-postcard",
      kind: "encode",
      place: "postcard",
      title: "Reply: POP",
      brief: "Sign the postcard with the code name POP, in 8-bit ASCII.",
      key: ["K", "L", "M", "N"],
      word: "POP",
    },
  ],
  ne = [
    {
      id: "hex-library",
      kind: "hex",
      place: "library",
      title: "The catalogue number",
      brief:
        "The library catalogue lists ASCII codes in hexadecimal. J is 74 in denary. Give the hexadecimal code for K.",
      format: "denary",
      key: ["J"],
      letter: "K",
    },
    {
      id: "hex-radio",
      kind: "hex",
      place: "radio",
      title: "The radio dial",
      brief:
        "The radio takes ASCII codes in hexadecimal. Give the hexadecimal code for C.",
      format: "binary",
      key: ["A"],
      letter: "C",
    },
    {
      id: "hex-station",
      kind: "hex",
      place: "station",
      title: "The platform code",
      brief:
        "The station board shows ASCII codes in hexadecimal. Give the hexadecimal code for P.",
      format: "denary",
      key: ["M"],
      letter: "P",
    },
  ],
  E =
    "ASCII only has codes for English letters, digits and common symbols, so it cannot store this message at all. Unicode uses more bits per character, so it can represent many more characters, including other languages and emojis. It is the only set that can store this, so it is the one with the fewest bits that works.",
  Y =
    "Every character here is in ASCII, and ASCII uses fewer bits per character than Unicode, so ASCII stores it in the fewest bits.",
  ce = [
    {
      id: "charset-passport",
      kind: "charset",
      place: "passport",
      title: "A name in Arabic",
      brief:
        "Agent Sara’s new passport must store her name in Arabic script. Pick the character set that can store it in the fewest bits.",
      sample: "سارة",
      sampleLabel: "Sara, written in Arabic script",
      answer: "unicode",
      explanation: `${E} Arabic letters are not in ASCII.`,
    },
    {
      id: "charset-market",
      kind: "charset",
      place: "market",
      title: "A name in Chinese",
      brief:
        "The stall owner’s name, Li Ming, must be saved in Chinese characters. Pick the character set that can store it in the fewest bits.",
      sample: "李明",
      sampleLabel: "Li Ming, written in Chinese characters",
      answer: "unicode",
      explanation: `${E} Chinese characters are not in ASCII.`,
    },
    {
      id: "charset-phone",
      kind: "charset",
      place: "phone",
      title: "An emoji text",
      brief:
        "A contact replies with nothing but emojis. Pick the character set that can store it in the fewest bits.",
      sample: "😎👍🕶️",
      sampleLabel:
        "Three emojis: a face in sunglasses, a thumbs up and sunglasses",
      answer: "unicode",
      explanation: `${E} Emojis are not in ASCII.`,
    },
    {
      id: "charset-postcard",
      kind: "charset",
      place: "postcard",
      title: "A city in Greek",
      brief:
        "The postcard’s address is written in the Greek alphabet. Pick the character set that can store it in the fewest bits.",
      sample: "Αθήνα",
      sampleLabel: "Athens, written in Greek letters",
      answer: "unicode",
      explanation: `${E} Greek letters are not in ASCII.`,
    },
    {
      id: "charset-station",
      kind: "charset",
      place: "station",
      title: "A plain English note",
      brief:
        "A note for the noticeboard, in capital letters and digits. Pick the character set that can store it in the fewest bits.",
      sample: "MEET AT PLATFORM 9",
      answer: "ascii",
      explanation: `${Y} Unicode could store it too, but it would use more bits for the same note.`,
    },
    {
      id: "charset-cafe",
      kind: "charset",
      place: "cafe",
      title: "An English order",
      brief:
        "The café’s order slip, in plain English. Pick the character set that can store it in the fewest bits.",
      sample: "Two teas, one cake",
      answer: "ascii",
      explanation: `${Y} Upper case, lower case and the comma all have ASCII codes.`,
    },
  ],
  oe = [
    {
      id: "size-dossier",
      kind: "size",
      place: "hq",
      title: "The dossier",
      brief:
        "The dossier is a text file of 2,000 characters in ASCII, 8 bits per character. Estimate its size in kilobytes.",
      characters: 2e3,
      bitsPerCharacter: 8,
      unit: "kilobytes",
    },
    {
      id: "size-radio",
      kind: "size",
      place: "radio",
      title: "Radio burst",
      brief:
        "The radio sends a 45-character message in ASCII, 8 bits per character. How many bits is that?",
      characters: 45,
      bitsPerCharacter: 8,
      unit: "bits",
    },
    {
      id: "size-phone",
      kind: "size",
      place: "phone",
      title: "Phone message",
      brief:
        "A 60-character text is stored in Unicode. Here each character uses 16 bits. What is its size in bytes?",
      characters: 60,
      bitsPerCharacter: 16,
      unit: "bytes",
    },
    {
      id: "size-bench",
      kind: "size",
      place: "bench",
      title: "The note",
      brief:
        "A 750-character note is saved in ASCII, 8 bits per character. What is its size in bytes?",
      characters: 750,
      bitsPerCharacter: 8,
      unit: "bytes",
    },
    {
      id: "size-compare",
      kind: "size",
      place: "radio",
      title: "ASCII or Unicode?",
      brief:
        "A 40-character message could be sent in ASCII (8 bits per character) or in Unicode. Here Unicode uses 16 bits per character. How many more bits does Unicode use?",
      characters: 40,
      bitsPerCharacter: 8,
      compareWith: 16,
      unit: "bits",
    },
    {
      id: "size-library",
      kind: "size",
      place: "library",
      title: "The archive",
      brief:
        "A 1,500-character report is stored in Unicode. Here each character uses 16 bits. Estimate its size in kilobytes.",
      characters: 1500,
      bitsPerCharacter: 16,
      unit: "kilobytes",
    },
  ],
  de = [
    {
      id: "bits-ascii",
      kind: "bits",
      place: "hq",
      title: "How many characters?",
      brief:
        "ASCII uses 8 bits per character. What is the maximum number of different characters it can represent?",
      mode: "count",
      given: 8,
    },
    {
      id: "bits-sixteen",
      kind: "bits",
      place: "radio",
      title: "A bigger codebook",
      brief:
        "A character set uses 16 bits per character. What is the maximum number of different characters it can represent?",
      mode: "count",
      given: 16,
    },
    {
      id: "bits-agency",
      kind: "bits",
      place: "radio",
      title: "The agency character set",
      brief:
        "The agency’s own character set needs 32 characters: 26 letters and 6 symbols. Turn the dial to the fewest bits per character.",
      mode: "fewest",
      given: 32,
    },
    {
      id: "bits-hundred",
      kind: "bits",
      place: "hq",
      title: "One hundred symbols",
      brief:
        "A new codebook needs 100 different characters. Turn the dial to the fewest bits per character.",
      mode: "fewest",
      given: 100,
    },
  ],
  he = [
    {
      id: "sort-unicode",
      kind: "sort",
      place: "hq",
      title: "Unicode instead of ASCII",
      brief:
        "HQ is moving its computers from ASCII to Unicode. File each point.",
      sides: ["Benefit", "Drawback"],
      statements: [
        {
          text: "Can represent many more characters",
          side: 0,
          why: "Unicode uses more bits per character, so it has codes for many more characters.",
        },
        {
          text: "Can represent other languages, such as Arabic and Chinese",
          side: 0,
          why: "Other alphabets are in Unicode but not in ASCII.",
        },
        {
          text: "Can represent emojis",
          side: 0,
          why: "Emojis have Unicode codes but no ASCII codes.",
        },
        {
          text: "Uses more bits per character",
          side: 1,
          why: "Each character takes more bits to store than in ASCII.",
        },
        {
          text: "Needs more processing",
          side: 1,
          why: "There are more bits to store and handle for every character.",
        },
        {
          text: "Text files are larger",
          side: 1,
          why: "File size = bits per character x number of characters, so more bits per character means a larger file.",
        },
      ],
    },
    {
      id: "sort-facts",
      kind: "sort",
      place: "hq",
      title: "Training test",
      brief: "New recruits wrote these about character sets. True or false?",
      sides: ["True", "False"],
      statements: [
        {
          text: "A character set is all the characters a computer can represent",
          side: 0,
          why: "That is the definition of a character set.",
        },
        {
          text: "Each character is given a unique binary code",
          side: 0,
          why: "No two characters share a code, or the computer could not tell them apart.",
        },
        {
          text: "Upper-case A and lower-case a have the same code",
          side: 1,
          why: "Upper-case and lower-case letters are different characters, so they have different codes (A is 65, a is 97).",
        },
        {
          text: "If F is 70, then G is 71",
          side: 0,
          why: "Character sets are logically ordered: each letter is one more than the letter before.",
        },
        {
          text: "ASCII can represent emojis",
          side: 1,
          why: "ASCII only has English letters, digits and common symbols. Emojis need Unicode.",
        },
        {
          text: "More bits per character makes a text file smaller",
          side: 1,
          why: "More bits per character makes the file larger: file size = bits per character x number of characters.",
        },
      ],
    },
  ];
[...ie, ...ne, ...le, ...ce, ...oe, ...de, ...he];
const Pe = [
    "decode",
    "charset",
    "encode",
    "size",
    "sort",
    "hex",
    "bits",
    "charset",
    "encode",
    "size",
  ],
  F = 100;
function b(t) {
  return t.charCodeAt(0);
}
function v(t) {
  return t.toString(2).padStart(8, "0");
}
const T = [128, 64, 32, 16, 8, 4, 2, 1];
function Fe(t) {
  return t.reduce((s, r, a) => s + (r ? (T[a] ?? 0) : 0), 0);
}
function U(t, s) {
  return s === "binary" ? v(t) : String(t);
}
function qe(t) {
  return t.map((s) => ({ char: s, code: b(s) }));
}
function _(t) {
  return [...t].map(b);
}
function He(t, s) {
  const r = b(t);
  return [...s].sort((a, l) => Math.abs(b(a) - r) - Math.abs(b(l) - r))[0];
}
function z(t, s) {
  const r = He(t, s),
    a = b(t),
    l = b(r),
    c = a - l;
  if (c === 0) return `${t} is in the codebook: ${a}`;
  const i = Math.abs(c);
  return `${t} is ${i} ${c > 0 ? "after" : "before"} ${r}: ${l} ${c > 0 ? "+" : "-"} ${i} = ${a}`;
}
function V(t, s) {
  return [...t].map((r, a) => s[a] === r);
}
function Be(t, s) {
  return [...t].map((r, a) => s[a] === b(r));
}
function Re(t, s) {
  const r = t.slice(-1);
  return /^[a-z]$/i.test(r)
    ? s === s.toLowerCase()
      ? r.toLowerCase()
      : r.toUpperCase()
    : "";
}
function O(t) {
  return t.toString(16).toUpperCase().padStart(2, "0");
}
function Ge(t) {
  const s = t
    .replace(/\s/g, "")
    .replace(/^0x/i, "")
    .replace(/h$/i, "")
    .toUpperCase();
  return /^[0-9A-F]{1,2}$/.test(s) ? s.padStart(2, "0") : null;
}
function Qe(t) {
  const s = b(t.letter),
    r = v(s);
  return [
    z(t.letter, t.key),
    `${s} = ${r}`,
    `Split into nibbles: ${r.slice(0, 4)} = ${s >> 4}, ${r.slice(4)} = ${s & 15}${(s & 15) > 9 ? ` = ${O(s & 15).slice(1)}` : ""}`,
    `${t.letter} = ${O(s)} in hexadecimal`,
  ];
}
const De = { bits: "bits", bytes: "bytes", kilobytes: "kilobytes" };
function R(t) {
  return De[t];
}
function xe(t) {
  const s = t.characters * t.bitsPerCharacter;
  if (t.compareWith !== void 0) {
    const a = t.characters * t.compareWith - s;
    return { answer: a, accepted: [a] };
  }
  if (t.unit === "bits") return { answer: s, accepted: [s] };
  const r = s / 8;
  return t.unit === "bytes"
    ? { answer: r, accepted: [r] }
    : { answer: r / 1e3, accepted: [r / 1e3, r / 1024] };
}
function fe(t) {
  const { characters: s, bitsPerCharacter: r, compareWith: a } = t,
    l = s * r,
    c = s.toLocaleString("en-GB");
  if (a !== void 0) {
    const o = s * a;
    return [
      `ASCII: ${c} x ${r} = ${l.toLocaleString("en-GB")} bits`,
      `Unicode: ${c} x ${a} = ${o.toLocaleString("en-GB")} bits`,
      `${o.toLocaleString("en-GB")} - ${l.toLocaleString("en-GB")} = ${(o - l).toLocaleString("en-GB")} more bits`,
    ];
  }
  const i = [`${c} characters x ${r} bits = ${l.toLocaleString("en-GB")} bits`];
  if (t.unit === "bits") return i;
  const n = l / 8;
  return (
    i.push(
      `${l.toLocaleString("en-GB")} ÷ 8 = ${n.toLocaleString("en-GB")} bytes`,
    ),
    t.unit === "bytes" ||
      i.push(
        `${n.toLocaleString("en-GB")} ÷ 1,000 = ${n / 1e3} kilobytes (÷ 1,024 is also accepted)`,
      ),
    i
  );
}
function Ue(t) {
  const s = t.replace(/[,\s]/g, "").replace(/[a-z]+$/i, "");
  return /^\d+(\.\d+)?$/.test(s) ? Number(s) : null;
}
function _e(t, s) {
  return s.some(
    (r) =>
      Math.abs(t - r) < 0.006 ||
      Math.round(r * 100) / 100 === t ||
      Math.round(r * 10) / 10 === t,
  );
}
function C(t) {
  return 2 ** t;
}
function P(t) {
  let s = 1;
  for (; C(s) < t;) s += 1;
  return s;
}
function Ze(t) {
  return t.mode === "count" ? C(t.given) : P(t.given);
}
function Ke(t) {
  if (t.mode === "count") {
    const r = C(t.given).toLocaleString("en-GB");
    return [
      `Each extra bit doubles the number of codes: 2 to the power ${t.given} = ${r}`,
      `${t.given} bits per character can represent ${r} different characters.`,
    ];
  }
  const s = P(t.given);
  return [
    `${s - 1} bits: 2 to the power ${s - 1} = ${C(s - 1)} characters, too few for ${t.given}`,
    `${s} bits: 2 to the power ${s} = ${C(s)} characters, enough for ${t.given}`,
  ];
}
const m = 1,
  A = 16;
function G(t) {
  return t.points === F;
}
function Z(t) {
  return t.length === 0
    ? 0
    : Math.round((F * t.filter(Boolean).length) / t.length);
}
const Ye = [
  { min: 0.9, name: "Spymaster" },
  { min: 0.7, name: "Senior agent" },
  { min: 0.5, name: "Field agent" },
  { min: 0.3, name: "Trainee agent" },
  { min: 0, name: "Recruit" },
];
function Ve(t, s) {
  const r = s === 0 ? 0 : t / (s * F);
  return Ye.find((a) => r >= a.min).name;
}
function J(t, s) {
  const r = [...t];
  for (let a = r.length - 1; a > 0; a -= 1) {
    const l = Math.floor(s() * (a + 1));
    [r[a], r[l]] = [r[l], r[a]];
  }
  return r;
}
const X = {
  decode: ie,
  hex: ne,
  encode: le,
  charset: ce,
  size: oe,
  bits: de,
  sort: he,
};
function Je(t = Math.random) {
  const s = Object.fromEntries(Object.keys(X).map((l) => [l, J(X[l], t)])),
    r = s.charset.filter((l) => l.kind === "charset" && l.answer === "unicode"),
    a = s.charset.filter((l) => l.kind === "charset" && l.answer === "ascii");
  return (
    (s.charset = t() < 0.5 ? [r[0], a[0]] : [a[0], r[0]]),
    Pe.map((l) => {
      const c = s[l].shift();
      return c.kind === "sort" ? { ...c, statements: J(c.statements, t) } : c;
    })
  );
}
function Xe(t) {
  switch (t.kind) {
    case "decode":
      return [
        ...[...t.word].map((s) =>
          t.format === "binary"
            ? `${v(b(s))} = ${b(s)}. ${z(s, t.key)}`
            : z(s, t.key),
        ),
        `Each code stands for one character, in order: ${t.word}.`,
      ];
    case "hex":
      return Qe(t);
    case "encode":
      return [
        ...[...t.word].map((s) => `${z(s, t.key)} = ${v(b(s))}`),
        "Each character is stored as its own 8-bit code, in order.",
      ];
    case "charset":
      return [t.explanation];
    case "size":
      return fe(t);
    case "bits":
      return Ke(t);
    case "sort":
      return [];
  }
}
function et(t) {
  switch (t.kind) {
    case "decode":
      return `The message was ${t.word}.`;
    case "hex":
      return `${t.letter} is ${b(t.letter)}, which is ${O(b(t.letter))} in hexadecimal.`;
    case "encode":
      return `${t.word} is ${_(t.word).map(v).join(" ")}.`;
    case "charset":
      return `${t.answer === "ascii" ? "ASCII" : "Unicode"}. ${t.explanation}`;
    case "size": {
      const { answer: s } = xe(t);
      return `${s.toLocaleString("en-GB")} ${R(t.unit)}: ${fe(t).join("; ")}.`;
    }
    case "bits":
      return t.mode === "count"
        ? `${C(t.given).toLocaleString("en-GB")} characters.`
        : `${P(t.given)} bits: ${C(P(t.given))} codes is enough for ${t.given} characters.`;
    case "sort":
      return (
        t.sides
          .map(
            (s, r) =>
              `${s}: ${t.statements
                .filter((a) => a.side === r)
                .map((a) => a.text)
                .join("; ")}`,
          )
          .join(". ") + "."
      );
  }
}
const x = 320,
  y = 200,
  pe = "#0f172a",
  k = "'DejaVu Sans Mono', 'Courier New', monospace",
  w = "'DejaVu Sans', 'Noto Sans', Arial, sans-serif";
function M({
  x: t,
  y: s,
  lines: r,
  size: a = 8,
  gap: l,
  color: c = pe,
  mono: i = !0,
  anchor: n = "start",
  rotate: o = 0,
}) {
  const d = l ?? a * 1.35;
  return e.jsx("g", {
    transform: `rotate(${o} ${t} ${s})`,
    "data-scene-writing": !0,
    children: r.map((f, u) =>
      e.jsx(
        "text",
        {
          x: t,
          y: s + u * d,
          fontSize: a,
          fontFamily: i ? k : w,
          fill: c,
          textAnchor: n,
          fontWeight: i ? 700 : 600,
          children: f,
        },
        `${u}-${f}`,
      ),
    ),
  });
}
function I({
  x: t,
  y: s,
  s: r = 1,
  coat: a = "#a16207",
  skin: l = "#d9a57a",
  flip: c = !1,
}) {
  return e.jsxs("g", {
    transform: `translate(${t} ${s}) scale(${c ? -r : r} ${r})`,
    children: [
      e.jsx("rect", {
        x: -9,
        y: -30,
        width: 7,
        height: 30,
        rx: 2,
        fill: "#1e293b",
      }),
      e.jsx("rect", {
        x: 2,
        y: -30,
        width: 7,
        height: 30,
        rx: 2,
        fill: "#1e293b",
      }),
      e.jsx("path", {
        d: "M-16 -26 L-13 -72 Q0 -80 13 -72 L16 -26 Z",
        fill: a,
      }),
      e.jsx("path", {
        d: "M0 -76 L-5 -40 M0 -76 L5 -60",
        stroke: "rgba(0,0,0,0.25)",
        strokeWidth: 1.5,
      }),
      e.jsx("rect", {
        x: -15,
        y: -50,
        width: 30,
        height: 4,
        fill: "rgba(0,0,0,0.3)",
      }),
      e.jsx("path", { d: "M-6 -76 L0 -66 L6 -76 Z", fill: "#e2e8f0" }),
      e.jsx("rect", { x: -4, y: -82, width: 8, height: 7, fill: l }),
      e.jsx("circle", { cx: 0, cy: -90, r: 10, fill: l }),
      e.jsx("rect", { x: -4, y: -93, width: 10, height: 3, rx: 1.5, fill: pe }),
      e.jsx("ellipse", { cx: 0, cy: -98, rx: 16, ry: 3, fill: "#292524" }),
      e.jsx("path", {
        d: "M-9 -98 Q-9 -110 0 -110 Q9 -110 9 -98 Z",
        fill: "#292524",
      }),
      e.jsx("rect", {
        x: -9,
        y: -101,
        width: 18,
        height: 2.5,
        fill: "#7f1d1d",
      }),
    ],
  });
}
function tt({ x: t, y: s }) {
  return e.jsxs("g", {
    children: [
      e.jsx("line", {
        x1: t,
        y1: 0,
        x2: t,
        y2: s - 10,
        stroke: "#334155",
        strokeWidth: 1.5,
      }),
      e.jsx("path", {
        d: `M${t - 12} ${s} L${t - 6} ${s - 10} L${t + 6} ${s - 10} L${t + 12} ${s} Z`,
        fill: "#b45309",
      }),
      e.jsx("ellipse", {
        cx: t,
        cy: s + 2,
        rx: 20,
        ry: 5,
        fill: "#fde68a",
        opacity: 0.35,
      }),
    ],
  });
}
function st({ lines: t }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: x, height: y, fill: "#7c4a2d" }),
      e.jsx("rect", { y: 0, width: x, height: 12, fill: "#5b341f" }),
      e.jsx("rect", {
        x: 168,
        y: 26,
        width: 136,
        height: 92,
        rx: 4,
        fill: "#93c5fd",
        stroke: "#3f2416",
        strokeWidth: 5,
      }),
      e.jsx("rect", { x: 176, y: 70, width: 30, height: 48, fill: "#64748b" }),
      e.jsx("rect", { x: 210, y: 58, width: 34, height: 60, fill: "#475569" }),
      e.jsx("rect", { x: 250, y: 76, width: 48, height: 42, fill: "#94a3b8" }),
      e.jsx("line", {
        x1: 236,
        y1: 26,
        x2: 236,
        y2: 118,
        stroke: "#3f2416",
        strokeWidth: 4,
      }),
      e.jsx(I, { x: 270, y: 128, s: 0.55, coat: "#57534e", flip: !0 }),
      e.jsx("text", {
        x: 202,
        y: 50,
        fontSize: 13,
        fontFamily: w,
        fontWeight: 700,
        fill: "#7c2d12",
        textAnchor: "middle",
        opacity: 0.55,
        children: "ROSA",
      }),
      e.jsx(tt, { x: 60, y: 40 }),
      e.jsx("rect", { y: 150, width: x, height: 50, fill: "#3f2416" }),
      e.jsx("rect", {
        x: 10,
        y: 134,
        width: 300,
        height: 18,
        rx: 3,
        fill: "#c08457",
      }),
      e.jsx("rect", {
        x: 10,
        y: 150,
        width: 300,
        height: 4,
        fill: "rgba(0,0,0,0.3)",
      }),
      e.jsx("ellipse", { cx: 58, cy: 134, rx: 26, ry: 5, fill: "#e7e5e4" }),
      e.jsx("path", { d: "M40 106 h36 l-4 28 h-28 z", fill: "#f5f5f4" }),
      e.jsx("ellipse", { cx: 58, cy: 106, rx: 18, ry: 4, fill: "#78350f" }),
      e.jsx("path", {
        d: "M76 112 q12 2 10 10 q-2 6 -12 6",
        fill: "none",
        stroke: "#f5f5f4",
        strokeWidth: 4,
      }),
      e.jsx("path", {
        d: "M52 98 q-6 -8 0 -16 q6 -8 0 -16 M64 98 q-6 -8 0 -16",
        fill: "none",
        stroke: "#f5f5f4",
        strokeWidth: 2,
        opacity: 0.6,
        className: "agents-steam",
      }),
      e.jsxs("g", {
        transform: "rotate(-4 160 120)",
        children: [
          e.jsx("path", {
            d: "M112 62 h82 v76 l-6 -3 -6 3 -6 -3 -6 3 -6 -3 -6 3 -6 -3 -6 3 -6 -3 -6 3 -6 -3 -6 3 -6 -3 z",
            fill: "#fffbeb",
            stroke: "#d6d3d1",
          }),
          e.jsx("text", {
            x: 153,
            y: 74,
            fontSize: 7,
            fontFamily: k,
            textAnchor: "middle",
            fill: "#78716c",
            children: "CAFÉ ROSA",
          }),
          e.jsx("line", {
            x1: 118,
            y1: 78,
            x2: 188,
            y2: 78,
            stroke: "#d6d3d1",
            strokeDasharray: "2 2",
          }),
        ],
      }),
      e.jsx(M, { x: 153, y: 90, lines: t, anchor: "middle", rotate: -4 }),
    ],
  });
}
function rt({ lines: t }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: x, height: y, fill: "#334155" }),
      e.jsx("path", {
        d: "M0 0 L160 30 L320 0",
        fill: "none",
        stroke: "#475569",
        strokeWidth: 6,
      }),
      e.jsx("path", {
        d: "M0 18 L160 48 L320 18",
        fill: "none",
        stroke: "#475569",
        strokeWidth: 3,
      }),
      e.jsx("rect", { y: 150, width: x, height: 50, fill: "#64748b" }),
      e.jsx("rect", { y: 150, width: x, height: 3, fill: "#1e293b" }),
      e.jsx("rect", {
        x: 14,
        y: 58,
        width: 142,
        height: 66,
        rx: 4,
        fill: "#0b1120",
        stroke: "#94a3b8",
        strokeWidth: 2,
      }),
      [
        ["09:15", "LONDON", "4"],
        ["09:32", "YORK", "7"],
        ["09:40", "BRISTOL", "2"],
        ["10:05", "LEEDS", "9"],
      ].map(([s, r, a], l) =>
        e.jsxs(
          "g",
          {
            fontFamily: k,
            fontSize: 8,
            fill: "#fbbf24",
            children: [
              e.jsx("text", { x: 22, y: 76 + l * 13, children: s }),
              e.jsx("text", { x: 56, y: 76 + l * 13, children: r }),
              e.jsx("text", {
                x: 144,
                y: 76 + l * 13,
                textAnchor: "end",
                children: a,
              }),
            ],
          },
          s,
        ),
      ),
      e.jsx("circle", {
        cx: 84,
        cy: 36,
        r: 14,
        fill: "#f8fafc",
        stroke: "#0f172a",
        strokeWidth: 2,
      }),
      e.jsx("path", {
        d: "M84 36 V27 M84 36 L91 39",
        stroke: "#0f172a",
        strokeWidth: 2,
        strokeLinecap: "round",
      }),
      e.jsx("rect", {
        x: 176,
        y: 50,
        width: 128,
        height: 92,
        rx: 3,
        fill: "#b45309",
        stroke: "#78350f",
        strokeWidth: 4,
      }),
      e.jsx("rect", {
        x: 186,
        y: 60,
        width: 34,
        height: 26,
        fill: "#fef08a",
        transform: "rotate(-6 203 73)",
      }),
      e.jsx("rect", {
        x: 270,
        y: 104,
        width: 26,
        height: 30,
        fill: "#bae6fd",
        transform: "rotate(5 283 119)",
      }),
      e.jsx("rect", {
        x: 220,
        y: 62,
        width: 70,
        height: 64,
        fill: "#f8fafc",
        transform: "rotate(2 255 94)",
      }),
      e.jsx("circle", { cx: 255, cy: 66, r: 3, fill: "#dc2626" }),
      e.jsx(M, {
        x: 256,
        y: 80,
        lines: t,
        anchor: "middle",
        rotate: 2,
        size: 7.5,
      }),
      e.jsx(I, { x: 166, y: 190, s: 0.7 }),
    ],
  });
}
function at({ lines: t }) {
  const s = [
    "#b91c1c",
    "#1d4ed8",
    "#15803d",
    "#a16207",
    "#7e22ce",
    "#0f766e",
    "#be123c",
    "#334155",
  ];
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: x, height: y, fill: "#44281a" }),
      [0, 1, 2].map((r) =>
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("rect", {
                x: 0,
                y: 20 + r * 42,
                width: x,
                height: 4,
                fill: "#2a170d",
              }),
              Array.from({ length: 22 }, (a, l) =>
                e.jsx(
                  "rect",
                  {
                    x: 4 + l * 14.4,
                    y: 24 + r * 42 - (l % 3) * 2,
                    width: 11,
                    height: 34 + (l % 3) * 2,
                    fill: s[(l + r * 3) % s.length],
                  },
                  l,
                ),
              ),
            ],
          },
          r,
        ),
      ),
      e.jsx("rect", { x: 0, y: 148, width: x, height: 52, fill: "#7c4a2d" }),
      e.jsx("rect", { x: 0, y: 146, width: x, height: 5, fill: "#a16207" }),
      e.jsx("rect", {
        x: 250,
        y: 140,
        width: 34,
        height: 6,
        rx: 2,
        fill: "#78350f",
      }),
      e.jsx("rect", { x: 265, y: 112, width: 4, height: 30, fill: "#a16207" }),
      e.jsx("path", { d: "M244 116 Q267 92 290 116 Z", fill: "#15803d" }),
      e.jsx("ellipse", {
        cx: 267,
        cy: 146,
        rx: 36,
        ry: 6,
        fill: "#fde68a",
        opacity: 0.25,
      }),
      e.jsx("path", {
        d: "M60 146 Q100 132 140 140 L140 178 Q100 170 60 184 Z",
        fill: "#f5f5f4",
        stroke: "#a8a29e",
      }),
      e.jsx("path", {
        d: "M140 140 Q180 132 220 146 L220 184 Q180 170 140 178 Z",
        fill: "#fafaf9",
        stroke: "#a8a29e",
      }),
      [0, 1, 2, 3].map((r) =>
        e.jsx(
          "line",
          {
            x1: 70,
            y1: 152 + r * 6,
            x2: 130,
            y2: 146 + r * 6,
            stroke: "#d6d3d1",
            strokeWidth: 2,
          },
          r,
        ),
      ),
      e.jsx("rect", {
        x: 150,
        y: 100,
        width: 58,
        height: 66,
        fill: "#fef9c3",
        stroke: "#ca8a04",
        transform: "rotate(6 179 133)",
      }),
      e.jsx(M, {
        x: 180,
        y: 118,
        lines: t,
        anchor: "middle",
        rotate: 6,
        size: 9,
      }),
    ],
  });
}
function it({ lines: t, sample: s }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: x, height: y, fill: "#1e1b4b" }),
      [
        [30, 40, "#fbbf24"],
        [80, 120, "#f472b6"],
        [250, 50, "#60a5fa"],
        [290, 140, "#fbbf24"],
        [60, 180, "#34d399"],
        [260, 185, "#f472b6"],
      ].map(([r, a, l]) =>
        e.jsx(
          "circle",
          { cx: r, cy: a, r: 18, fill: l, opacity: 0.25 },
          `${r}-${a}`,
        ),
      ),
      e.jsx("path", {
        d: "M118 200 L112 150 Q110 134 124 132 L196 132 Q210 134 208 150 L202 200 Z",
        fill: "#d9a57a",
      }),
      e.jsx("rect", {
        x: 116,
        y: 12,
        width: 88,
        height: 168,
        rx: 12,
        fill: "#0f172a",
        stroke: "#475569",
        strokeWidth: 2,
      }),
      e.jsx("rect", {
        x: 122,
        y: 24,
        width: 76,
        height: 146,
        rx: 4,
        fill: "#f1f5f9",
      }),
      e.jsx("rect", {
        x: 146,
        y: 16,
        width: 28,
        height: 4,
        rx: 2,
        fill: "#334155",
      }),
      e.jsx("rect", { x: 122, y: 24, width: 76, height: 18, fill: "#0d9488" }),
      e.jsx("circle", { cx: 133, cy: 33, r: 5, fill: "#f8fafc" }),
      e.jsx("text", {
        x: 142,
        y: 36,
        fontSize: 8,
        fontFamily: w,
        fill: "#f8fafc",
        fontWeight: 700,
        children: "Contact",
      }),
      e.jsx("rect", {
        x: 128,
        y: 50,
        width: 64,
        height: s ? 34 : 18 + t.length * 11,
        rx: 6,
        fill: "#ffffff",
        stroke: "#cbd5e1",
      }),
      s
        ? e.jsx("text", {
            x: 160,
            y: 73,
            fontSize: 16,
            textAnchor: "middle",
            fontFamily: w,
            children: s,
          })
        : e.jsx(M, {
            x: 160,
            y: 64,
            lines: t,
            anchor: "middle",
            size: 8.5,
            gap: 11,
          }),
      e.jsx("path", {
        d: "M72 168 Q100 150 116 158",
        fill: "none",
        stroke: "#d9a57a",
        strokeWidth: 14,
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M248 160 Q222 148 204 154",
        fill: "none",
        stroke: "#d9a57a",
        strokeWidth: 14,
        strokeLinecap: "round",
      }),
    ],
  });
}
function lt({ lines: t }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: x, height: y, fill: "#bae6fd" }),
      e.jsx("circle", { cx: 270, cy: 34, r: 16, fill: "#fde68a" }),
      e.jsx("rect", { y: 92, width: x, height: 26, fill: "#38bdf8" }),
      e.jsx("path", {
        d: "M0 104 q20 -4 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0",
        fill: "none",
        stroke: "#e0f2fe",
        strokeWidth: 1.5,
      }),
      e.jsx("rect", { y: 118, width: x, height: 82, fill: "#65a30d" }),
      [20, 60, 210, 250].map((s) =>
        e.jsx("circle", { cx: s, cy: 80, r: 18, fill: "#166534" }, s),
      ),
      e.jsx("rect", { x: 276, y: 60, width: 5, height: 110, fill: "#1f2937" }),
      e.jsx("rect", {
        x: 268,
        y: 50,
        width: 21,
        height: 14,
        rx: 2,
        fill: "#1f2937",
      }),
      e.jsx("rect", { x: 271, y: 53, width: 15, height: 8, fill: "#fde68a" }),
      e.jsx("rect", {
        x: 40,
        y: 110,
        width: 200,
        height: 8,
        rx: 2,
        fill: "#92400e",
      }),
      e.jsx("rect", {
        x: 40,
        y: 122,
        width: 200,
        height: 8,
        rx: 2,
        fill: "#92400e",
      }),
      e.jsx("rect", {
        x: 34,
        y: 140,
        width: 212,
        height: 9,
        rx: 2,
        fill: "#a16207",
      }),
      e.jsx("rect", { x: 46, y: 149, width: 6, height: 28, fill: "#1f2937" }),
      e.jsx("rect", { x: 228, y: 149, width: 6, height: 28, fill: "#1f2937" }),
      e.jsx("path", {
        d: "M96 140 L104 98 L192 102 L186 142 Z",
        fill: "#f5f5f4",
        stroke: "#a8a29e",
      }),
      e.jsx("text", {
        x: 150,
        y: 110,
        fontSize: 8,
        fontFamily: "Georgia, serif",
        fontWeight: 700,
        textAnchor: "middle",
        fill: "#1c1917",
        children: "THE DAILY",
      }),
      e.jsx("line", { x1: 110, y1: 114, x2: 188, y2: 117, stroke: "#a8a29e" }),
      e.jsx(M, {
        x: 148,
        y: 124,
        lines: t,
        anchor: "middle",
        size: 6.5,
        gap: 7,
        color: "#1d4ed8",
        rotate: 2,
      }),
      e.jsx(I, { x: 300, y: 190, s: 0.6, coat: "#1e3a8a", flip: !0 }),
    ],
  });
}
function nt({ lines: t, sample: s }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: x, height: y, fill: "#7f1d1d" }),
      e.jsx("rect", { y: 0, width: x, height: 110, fill: "#991b1b" }),
      e.jsx("rect", {
        x: 16,
        y: 20,
        width: 108,
        height: 70,
        rx: 3,
        fill: "#78350f",
      }),
      Array.from({ length: 12 }, (r, a) =>
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("circle", {
                cx: 28 + (a % 6) * 17,
                cy: 34 + Math.floor(a / 6) * 30,
                r: 2,
                fill: "#fbbf24",
              }),
              e.jsx("rect", {
                x: 25 + (a % 6) * 17,
                y: 37 + Math.floor(a / 6) * 30,
                width: 6,
                height: 12,
                rx: 1,
                fill: "#fde68a",
              }),
            ],
          },
          a,
        ),
      ),
      e.jsx("text", {
        x: 226,
        y: 50,
        fontSize: 15,
        fontFamily: "Georgia, serif",
        fill: "#fde68a",
        fontWeight: 700,
        textAnchor: "middle",
        children: "HOTEL BELLEVUE",
      }),
      e.jsx("path", {
        d: "M160 62 h132",
        stroke: "#fde68a",
        strokeWidth: 1.5,
        opacity: 0.6,
      }),
      e.jsx(I, { x: 228, y: 128, s: 0.62, coat: "#334155" }),
      e.jsx("rect", { x: 0, y: 128, width: x, height: 72, fill: "#451a03" }),
      e.jsx("rect", { x: 0, y: 122, width: x, height: 10, fill: "#92400e" }),
      e.jsx("ellipse", { cx: 282, cy: 124, rx: 20, ry: 4, fill: "#a16207" }),
      e.jsx("path", { d: "M266 122 Q282 96 298 122 Z", fill: "#fbbf24" }),
      e.jsx("circle", { cx: 282, cy: 100, r: 3, fill: "#fbbf24" }),
      e.jsxs("g", {
        transform: "translate(-14 52) rotate(-6 140 96)",
        children: [
          e.jsx("rect", {
            x: 76,
            y: 58,
            width: 136,
            height: 70,
            fill: "#fffbeb",
            stroke: "#d6d3d1",
          }),
          e.jsx("line", {
            x1: 148,
            y1: 64,
            x2: 148,
            y2: 122,
            stroke: "#d6d3d1",
          }),
          e.jsx("rect", {
            x: 186,
            y: 62,
            width: 20,
            height: 22,
            fill: "#0d9488",
          }),
          e.jsx("line", {
            x1: 154,
            y1: 98,
            x2: 204,
            y2: 98,
            stroke: "#d6d3d1",
          }),
          e.jsx("line", {
            x1: 154,
            y1: 110,
            x2: 204,
            y2: 110,
            stroke: "#d6d3d1",
          }),
          s
            ? e.jsx("text", {
                x: 176,
                y: 95,
                fontSize: 13,
                fontFamily: w,
                fill: "#1e3a8a",
                textAnchor: "middle",
                children: s,
              })
            : null,
          e.jsx(M, {
            x: 112,
            y: 76,
            lines: t,
            anchor: "middle",
            size: 7,
            gap: 9,
            color: "#1e3a8a",
          }),
        ],
      }),
    ],
  });
}
function ct({ sample: t }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: x, height: y, fill: "#e2e8f0" }),
      e.jsx("rect", { y: 0, width: x, height: 30, fill: "#1e3a8a" }),
      e.jsx("text", {
        x: 20,
        y: 20,
        fontSize: 10,
        fontFamily: w,
        fill: "#fde047",
        fontWeight: 700,
        children: "DEPARTURES",
      }),
      e.jsx("path", {
        d: "M118 12 l12 6 -12 6 v-4 h-8 v-4 h8 z",
        fill: "#fde047",
      }),
      e.jsx("rect", { y: 30, width: x, height: 4, fill: "#fde047" }),
      e.jsx("rect", {
        x: 196,
        y: 46,
        width: 108,
        height: 58,
        rx: 4,
        fill: "#7dd3fc",
        stroke: "#94a3b8",
        strokeWidth: 3,
      }),
      e.jsx("path", {
        d: "M220 80 L280 70 L284 74 L226 86 Z",
        fill: "#f8fafc",
      }),
      e.jsx("path", {
        d: "M246 76 L236 62 L244 62 L258 74 Z",
        fill: "#cbd5e1",
      }),
      e.jsx("rect", { x: 0, y: 128, width: x, height: 72, fill: "#475569" }),
      e.jsx("rect", { x: 0, y: 122, width: x, height: 10, fill: "#94a3b8" }),
      e.jsx(I, { x: 60, y: 128, s: 0.7, coat: "#0f766e" }),
      e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 110,
            y: 66,
            width: 150,
            height: 60,
            rx: 3,
            fill: "#7f1d1d",
          }),
          e.jsx("rect", {
            x: 114,
            y: 70,
            width: 70,
            height: 52,
            fill: "#fef3c7",
          }),
          e.jsx("rect", {
            x: 186,
            y: 70,
            width: 70,
            height: 52,
            fill: "#fef3c7",
          }),
          e.jsx("rect", {
            x: 120,
            y: 76,
            width: 26,
            height: 32,
            fill: "#cbd5e1",
          }),
          e.jsx("circle", { cx: 133, cy: 88, r: 7, fill: "#a8714a" }),
          e.jsx("path", { d: "M122 108 q11 -14 22 0 z", fill: "#0f766e" }),
          e.jsx("line", {
            x1: 150,
            y1: 84,
            x2: 178,
            y2: 84,
            stroke: "#d6d3d1",
            strokeWidth: 2,
          }),
          e.jsx("line", {
            x1: 150,
            y1: 96,
            x2: 178,
            y2: 96,
            stroke: "#d6d3d1",
            strokeWidth: 2,
          }),
          e.jsx("line", {
            x1: 192,
            y1: 112,
            x2: 250,
            y2: 112,
            stroke: "#d6d3d1",
            strokeWidth: 2,
          }),
          e.jsx("text", {
            x: 221,
            y: 84,
            fontSize: 7,
            fontFamily: w,
            fill: "#78716c",
            textAnchor: "middle",
            children: "NAME",
          }),
          t
            ? e.jsx("text", {
                x: 221,
                y: 104,
                fontSize: 17,
                fontFamily: w,
                fill: "#0f172a",
                textAnchor: "middle",
                fontWeight: 700,
                children: t,
              })
            : null,
        ],
      }),
    ],
  });
}
function ot({ sample: t }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: x, height: y, fill: "#1e1b4b" }),
      e.jsx("path", {
        d: "M0 22 Q80 44 160 22 T320 22",
        fill: "none",
        stroke: "#475569",
      }),
      Array.from({ length: 12 }, (s, r) => {
        const a = 12 + r * 27,
          l = (a % 160) / 160,
          c = 22 + Math.sin(l * Math.PI) * 18;
        return e.jsx(
          "circle",
          {
            cx: a,
            cy: c + 3,
            r: 3.5,
            fill: r % 3 === 0 ? "#f87171" : r % 3 === 1 ? "#fbbf24" : "#34d399",
          },
          r,
        );
      }),
      e.jsx("line", {
        x1: 120,
        y1: 36,
        x2: 120,
        y2: 54,
        stroke: "#a16207",
        strokeWidth: 2,
      }),
      e.jsx("line", {
        x1: 200,
        y1: 36,
        x2: 200,
        y2: 54,
        stroke: "#a16207",
        strokeWidth: 2,
      }),
      e.jsx("rect", {
        x: 100,
        y: 54,
        width: 120,
        height: 40,
        rx: 4,
        fill: "#b91c1c",
        stroke: "#fbbf24",
        strokeWidth: 3,
      }),
      t
        ? e.jsx("text", {
            x: 160,
            y: 83,
            fontSize: 24,
            fontFamily: w,
            fill: "#fde68a",
            textAnchor: "middle",
            fontWeight: 700,
            children: t,
          })
        : null,
      e.jsx("path", {
        d: "M40 104 L280 104 L296 124 L24 124 Z",
        fill: "#f97316",
      }),
      [0, 1, 2, 3, 4, 5].map((s) =>
        e.jsx(
          "path",
          {
            d: `M${24 + s * 45.3} 124 q22.6 12 45.3 0`,
            fill: s % 2 ? "#f97316" : "#fef3c7",
          },
          s,
        ),
      ),
      e.jsx("rect", { x: 44, y: 124, width: 6, height: 60, fill: "#78350f" }),
      e.jsx("rect", { x: 270, y: 124, width: 6, height: 60, fill: "#78350f" }),
      e.jsx("rect", { x: 36, y: 160, width: 248, height: 14, fill: "#92400e" }),
      [80, 120, 160, 200, 240].map((s, r) =>
        e.jsx(
          "ellipse",
          {
            cx: s,
            cy: 154,
            rx: 13,
            ry: 7,
            fill: ["#fbbf24", "#f87171", "#4ade80", "#fb923c", "#f472b6"][r],
          },
          s,
        ),
      ),
      e.jsx("rect", { y: 184, width: x, height: 16, fill: "#334155" }),
      e.jsx(I, { x: 300, y: 196, s: 0.6, coat: "#57534e", flip: !0 }),
    ],
  });
}
function dt({ lines: t }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: x, height: y, fill: "#0f172a" }),
      e.jsx("rect", {
        x: 220,
        y: 18,
        width: 84,
        height: 64,
        fill: "#1e293b",
        stroke: "#334155",
        strokeWidth: 4,
      }),
      e.jsx("circle", { cx: 280, cy: 38, r: 9, fill: "#e2e8f0" }),
      e.jsx("circle", { cx: 276, cy: 36, r: 9, fill: "#1e293b" }),
      [236, 250, 262, 292].map((s, r) =>
        e.jsx(
          "circle",
          { cx: s, cy: 30 + (r % 2) * 24, r: 1.2, fill: "#f8fafc" },
          s,
        ),
      ),
      e.jsx("rect", { y: 150, width: x, height: 50, fill: "#3f2a1d" }),
      e.jsx("rect", { y: 146, width: x, height: 6, fill: "#5b3a24" }),
      e.jsx("rect", {
        x: 20,
        y: 60,
        width: 150,
        height: 86,
        rx: 6,
        fill: "#4b5563",
        stroke: "#1f2937",
        strokeWidth: 3,
      }),
      e.jsx("rect", {
        x: 30,
        y: 70,
        width: 60,
        height: 34,
        rx: 3,
        fill: "#fef3c7",
      }),
      e.jsx("path", {
        d: "M36 98 A24 24 0 0 1 84 98",
        fill: "none",
        stroke: "#a8a29e",
      }),
      e.jsx("line", {
        x1: 60,
        y1: 98,
        x2: 74,
        y2: 78,
        stroke: "#b91c1c",
        strokeWidth: 2,
      }),
      [110, 140].map((s) =>
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("circle", { cx: s, cy: 86, r: 12, fill: "#1f2937" }),
              e.jsx("line", {
                x1: s,
                y1: 86,
                x2: s + 6,
                y2: 78,
                stroke: "#e5e7eb",
                strokeWidth: 2,
              }),
            ],
          },
          s,
        ),
      ),
      e.jsx("circle", {
        cx: 40,
        cy: 126,
        r: 4,
        fill: "#22c55e",
        className: "agents-blink",
      }),
      e.jsx("circle", { cx: 54, cy: 126, r: 4, fill: "#ef4444" }),
      Array.from({ length: 6 }, (s, r) =>
        e.jsx(
          "rect",
          {
            x: 80 + r * 13,
            y: 120,
            width: 9,
            height: 14,
            rx: 2,
            fill: "#9ca3af",
          },
          r,
        ),
      ),
      e.jsx("line", {
        x1: 150,
        y1: 60,
        x2: 170,
        y2: 14,
        stroke: "#9ca3af",
        strokeWidth: 2,
      }),
      e.jsx("path", {
        d: "M176 18 q6 6 0 12 M182 12 q10 12 0 24",
        fill: "none",
        stroke: "#34d399",
        strokeWidth: 1.5,
        className: "agents-blink",
      }),
      e.jsx("rect", {
        x: 196,
        y: 140,
        width: 30,
        height: 6,
        rx: 2,
        fill: "#1f2937",
      }),
      e.jsx("rect", { x: 208, y: 112, width: 4, height: 30, fill: "#374151" }),
      e.jsx("rect", {
        x: 202,
        y: 96,
        width: 16,
        height: 22,
        rx: 8,
        fill: "#9ca3af",
      }),
      e.jsx("rect", {
        x: 236,
        y: 104,
        width: 72,
        height: 58,
        fill: "#f8fafc",
        transform: "rotate(-4 272 133)",
      }),
      e.jsx(M, {
        x: 272,
        y: 120,
        lines: t,
        anchor: "middle",
        size: 7.5,
        rotate: -4,
      }),
    ],
  });
}
function ht({ lines: t }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: x, height: y, fill: "#1f2937" }),
      e.jsx("rect", {
        x: 14,
        y: 14,
        width: 150,
        height: 98,
        rx: 3,
        fill: "#a16207",
        stroke: "#713f12",
        strokeWidth: 4,
      }),
      [
        [30, 26],
        [92, 22],
        [124, 66],
        [40, 72],
      ].map(([s, r], a) =>
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("rect", {
                x: s,
                y: r,
                width: 28,
                height: 30,
                fill: "#f8fafc",
              }),
              e.jsx("circle", {
                cx: s + 14,
                cy: r + 12,
                r: 6,
                fill: "#94a3b8",
              }),
              e.jsx("path", {
                d: `M${s + 5} ${r + 30} q9 -12 18 0 z`,
                fill: "#94a3b8",
              }),
              e.jsx("circle", {
                cx: s + 14,
                cy: r + 2,
                r: 2.5,
                fill: "#dc2626",
              }),
            ],
          },
          a,
        ),
      ),
      e.jsx("path", {
        d: "M44 28 L106 24 L138 68 L54 74 Z",
        fill: "none",
        stroke: "#dc2626",
        strokeWidth: 1.2,
      }),
      e.jsx("rect", { y: 140, width: x, height: 60, fill: "#334155" }),
      e.jsx("rect", { y: 136, width: x, height: 6, fill: "#475569" }),
      e.jsxs("g", {
        transform: "rotate(-6 70 160)",
        children: [
          e.jsx("rect", {
            x: 20,
            y: 142,
            width: 100,
            height: 46,
            rx: 2,
            fill: "#d9be83",
          }),
          e.jsx("rect", {
            x: 20,
            y: 138,
            width: 40,
            height: 8,
            rx: 2,
            fill: "#c4a66c",
          }),
          e.jsx("text", {
            x: 70,
            y: 170,
            fontSize: 9,
            fontFamily: k,
            fontWeight: 700,
            fill: "#b91c1c",
            textAnchor: "middle",
            transform: "rotate(-8 70 168)",
            children: "TOP SECRET",
          }),
        ],
      }),
      e.jsx("path", {
        d: "M170 140 L300 140 L310 150 L160 150 Z",
        fill: "#94a3b8",
      }),
      e.jsx("rect", {
        x: 180,
        y: 56,
        width: 110,
        height: 84,
        rx: 4,
        fill: "#0f172a",
        stroke: "#64748b",
        strokeWidth: 3,
      }),
      e.jsx("rect", { x: 186, y: 62, width: 98, height: 72, fill: "#022c22" }),
      e.jsx(M, { x: 192, y: 76, lines: t, size: 7.5, color: "#34d399" }),
    ],
  });
}
const xt = {
  cafe: st,
  station: rt,
  library: at,
  phone: it,
  bench: lt,
  postcard: nt,
  passport: ct,
  market: ot,
  radio: dt,
  hq: ht,
};
function ft({ place: t, lines: s = [], sample: r, className: a }) {
  const l = xt[t];
  return e.jsx("svg", {
    viewBox: `0 0 ${x} ${y}`,
    role: "img",
    "aria-label": ae[t].alt,
    className: a,
    "data-agent-scene": t,
    children: e.jsx(l, { lines: s, sample: r }),
  });
}
const Q = "'Special Elite', 'Courier New', monospace";
function je() {
  const t = j.useId().replace(/:/g, "");
  return {
    glow: `${t}-glow`,
    soft: `${t}-soft`,
    cone: `${t}-cone`,
    pool: `${t}-pool`,
    wall: `${t}-wall`,
    wood: `${t}-wood`,
    front: `${t}-front`,
    cork: `${t}-cork`,
    sky: `${t}-sky`,
    haze: `${t}-haze`,
    pane: `${t}-pane`,
    coat: `${t}-coat`,
    screen: `${t}-screen`,
    vignette: `${t}-vignette`,
  };
}
function ue({ ids: t }) {
  return e.jsxs("defs", {
    children: [
      e.jsxs("filter", {
        id: t.glow,
        x: "-30%",
        y: "-60%",
        width: "160%",
        height: "220%",
        children: [
          e.jsx("feGaussianBlur", { stdDeviation: 3, result: "blur" }),
          e.jsxs("feMerge", {
            children: [
              e.jsx("feMergeNode", { in: "blur" }),
              e.jsx("feMergeNode", { in: "blur" }),
              e.jsx("feMergeNode", { in: "SourceGraphic" }),
            ],
          }),
        ],
      }),
      e.jsx("filter", {
        id: t.soft,
        x: "-50%",
        y: "-50%",
        width: "200%",
        height: "200%",
        children: e.jsx("feGaussianBlur", { stdDeviation: 6 }),
      }),
      e.jsxs("linearGradient", {
        id: t.cone,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1",
        children: [
          e.jsx("stop", {
            offset: "0",
            stopColor: "#fde68a",
            stopOpacity: 0.34,
          }),
          e.jsx("stop", {
            offset: "1",
            stopColor: "#fde68a",
            stopOpacity: 0.04,
          }),
        ],
      }),
      e.jsxs("radialGradient", {
        id: t.pool,
        cx: "0.5",
        cy: "0.5",
        r: "0.5",
        children: [
          e.jsx("stop", {
            offset: "0",
            stopColor: "#fef3c7",
            stopOpacity: 0.55,
          }),
          e.jsx("stop", {
            offset: "0.55",
            stopColor: "#fcd34d",
            stopOpacity: 0.2,
          }),
          e.jsx("stop", { offset: "1", stopColor: "#fcd34d", stopOpacity: 0 }),
        ],
      }),
      e.jsxs("linearGradient", {
        id: t.wall,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1",
        children: [
          e.jsx("stop", { offset: "0", stopColor: "#060a14" }),
          e.jsx("stop", { offset: "1", stopColor: "#151e31" }),
        ],
      }),
      e.jsxs("linearGradient", {
        id: t.wood,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1",
        children: [
          e.jsx("stop", { offset: "0", stopColor: "#3b2416" }),
          e.jsx("stop", { offset: "1", stopColor: "#5e3a22" }),
        ],
      }),
      e.jsxs("linearGradient", {
        id: t.front,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1",
        children: [
          e.jsx("stop", { offset: "0", stopColor: "#3a2215" }),
          e.jsx("stop", { offset: "1", stopColor: "#170d07" }),
        ],
      }),
      e.jsxs("pattern", {
        id: t.cork,
        width: 18,
        height: 18,
        patternUnits: "userSpaceOnUse",
        children: [
          e.jsx("rect", { width: 18, height: 18, fill: "#9a6a3c" }),
          e.jsx("circle", { cx: 4, cy: 5, r: 1.2, fill: "#7a5029" }),
          e.jsx("circle", { cx: 13, cy: 3, r: 0.9, fill: "#b8854f" }),
          e.jsx("circle", { cx: 9, cy: 12, r: 1.4, fill: "#7a5029" }),
          e.jsx("circle", { cx: 16, cy: 15, r: 0.8, fill: "#6b4422" }),
          e.jsx("circle", { cx: 2, cy: 15, r: 0.9, fill: "#b8854f" }),
        ],
      }),
      e.jsxs("linearGradient", {
        id: t.sky,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1",
        children: [
          e.jsx("stop", { offset: "0", stopColor: "#070d1f" }),
          e.jsx("stop", { offset: "0.6", stopColor: "#1e1b4b" }),
          e.jsx("stop", { offset: "1", stopColor: "#4c1d58" }),
        ],
      }),
      e.jsxs("radialGradient", {
        id: t.haze,
        cx: "0.5",
        cy: "0.5",
        r: "0.5",
        children: [
          e.jsx("stop", {
            offset: "0",
            stopColor: "#6366f1",
            stopOpacity: 0.22,
          }),
          e.jsx("stop", { offset: "1", stopColor: "#6366f1", stopOpacity: 0 }),
        ],
      }),
      e.jsxs("linearGradient", {
        id: t.coat,
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0",
        children: [
          e.jsx("stop", { offset: "0", stopColor: "#b8864d" }),
          e.jsx("stop", { offset: "0.55", stopColor: "#8c6235" }),
          e.jsx("stop", { offset: "1", stopColor: "#4a321b" }),
        ],
      }),
      e.jsxs("linearGradient", {
        id: t.screen,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1",
        children: [
          e.jsx("stop", { offset: "0", stopColor: "#053b30" }),
          e.jsx("stop", { offset: "1", stopColor: "#021612" }),
        ],
      }),
      e.jsxs("radialGradient", {
        id: t.vignette,
        cx: "0.5",
        cy: "0.48",
        r: "0.75",
        children: [
          e.jsx("stop", {
            offset: "0.55",
            stopColor: "#020617",
            stopOpacity: 0,
          }),
          e.jsx("stop", {
            offset: "1",
            stopColor: "#020617",
            stopOpacity: 0.7,
          }),
        ],
      }),
    ],
  });
}
function L({ x: t, y: s, color: r = "#dc2626" }) {
  return e.jsxs("g", {
    children: [
      e.jsx("ellipse", {
        cx: t + 1.5,
        cy: s + 2,
        rx: 3.2,
        ry: 1.8,
        fill: "rgba(0,0,0,0.35)",
      }),
      e.jsx("circle", { cx: t, cy: s, r: 3.6, fill: r }),
      e.jsx("circle", { cx: t - 1.1, cy: s - 1.2, r: 1.1, fill: "#fecaca" }),
    ],
  });
}
function ee({ x: t, y: s, tilt: r, backdrop: a, hat: l = !1 }) {
  return e.jsxs("g", {
    transform: `rotate(${r} ${t + 23} ${s + 28})`,
    children: [
      e.jsx("rect", {
        x: t + 2,
        y: s + 3,
        width: 46,
        height: 56,
        fill: "rgba(0,0,0,0.35)",
      }),
      e.jsx("rect", { x: t, y: s, width: 46, height: 56, fill: "#f4efe4" }),
      e.jsx("rect", { x: t + 4, y: s + 4, width: 38, height: 38, fill: a }),
      e.jsx("ellipse", {
        cx: t + 23,
        cy: s + 21,
        rx: 7,
        ry: 8,
        fill: "#1f2937",
      }),
      e.jsx("path", { d: `M${t + 9} ${s + 42}q14 -18 28 0z`, fill: "#1f2937" }),
      l
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("ellipse", {
                cx: t + 23,
                cy: s + 14.5,
                rx: 11,
                ry: 2.4,
                fill: "#0b0f19",
              }),
              e.jsx("path", {
                d: `M${t + 17} ${s + 15}q6 -10 12 0z`,
                fill: "#0b0f19",
              }),
            ],
          })
        : null,
      e.jsx("rect", {
        x: t + 4,
        y: s + 4,
        width: 38,
        height: 10,
        fill: "#ffffff",
        opacity: 0.08,
      }),
      e.jsx("path", {
        d: `M${t + 8} ${s + 50}h22`,
        stroke: "#94a3b8",
        strokeWidth: 1.2,
      }),
    ],
  });
}
function ge({ ids: t }) {
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: 4,
        y: 6,
        width: 200,
        height: 232,
        rx: 4,
        fill: "rgba(0,0,0,0.45)",
      }),
      e.jsx("rect", {
        width: 200,
        height: 232,
        rx: 4,
        fill: `url(#${t.cork})`,
        stroke: "#4a2c14",
        strokeWidth: 6,
      }),
      e.jsx("rect", {
        x: 3,
        y: 3,
        width: 194,
        height: 4,
        fill: "#ffffff",
        opacity: 0.08,
      }),
      e.jsxs("g", {
        transform: "rotate(-2 100 36)",
        children: [
          e.jsx("rect", {
            x: 31,
            y: 16,
            width: 140,
            height: 46,
            fill: "rgba(0,0,0,0.35)",
          }),
          e.jsx("rect", {
            x: 28,
            y: 13,
            width: 140,
            height: 46,
            fill: "#f3ead6",
          }),
          e.jsx("path", {
            d: "M28 25h140",
            stroke: "#f87171",
            strokeWidth: 0.8,
            opacity: 0.7,
          }),
          e.jsx("text", {
            x: 98,
            y: 38,
            fontSize: 11,
            fontFamily: Q,
            fill: "#1f2937",
            textAnchor: "middle",
            letterSpacing: 2.4,
            children: "OPERATION",
          }),
          e.jsx("text", {
            x: 98,
            y: 53,
            fontSize: 13.5,
            fontFamily: Q,
            fill: "#991b1b",
            textAnchor: "middle",
            fontWeight: 700,
            letterSpacing: 1,
            children: "CHARACTER SET",
          }),
        ],
      }),
      e.jsx(ee, { x: 12, y: 74, tilt: -6, backdrop: "#64748b", hat: !0 }),
      e.jsx(ee, { x: 142, y: 70, tilt: 5, backdrop: "#7c8a6e" }),
      e.jsxs("g", {
        transform: "rotate(2 101 150)",
        children: [
          e.jsx("rect", {
            x: 62,
            y: 118,
            width: 80,
            height: 62,
            fill: "#e7dcc0",
          }),
          e.jsx("path", {
            d: "M62 140h80M62 162h80M84 118v62M118 118v62",
            stroke: "#c8b78f",
            strokeWidth: 3,
          }),
          e.jsx("path", {
            d: "M62 128q40 18 80 40",
            stroke: "#93c5fd",
            strokeWidth: 4,
            fill: "none",
          }),
          e.jsx("circle", {
            cx: 118,
            cy: 140,
            r: 8,
            fill: "none",
            stroke: "#dc2626",
            strokeWidth: 1.8,
          }),
          e.jsx("path", {
            d: "M70 170l6 -4",
            stroke: "#dc2626",
            strokeWidth: 1.5,
          }),
        ],
      }),
      e.jsxs("g", {
        transform: "rotate(-4 32 182)",
        children: [
          e.jsx("rect", {
            x: 12,
            y: 162,
            width: 42,
            height: 40,
            fill: "#fde047",
          }),
          e.jsx("rect", {
            x: 12,
            y: 162,
            width: 42,
            height: 7,
            fill: "#facc15",
          }),
          e.jsx("text", {
            x: 33,
            y: 188,
            fontSize: 10,
            fontFamily: k,
            fontWeight: 700,
            fill: "#1f2937",
            textAnchor: "middle",
            children: "A=65",
          }),
        ],
      }),
      e.jsxs("g", {
        transform: "rotate(5 168 172)",
        children: [
          e.jsx("rect", {
            x: 148,
            y: 150,
            width: 42,
            height: 42,
            fill: "#f9a8d4",
          }),
          e.jsx("text", {
            x: 169,
            y: 170,
            fontSize: 7,
            fontFamily: k,
            fontWeight: 700,
            fill: "#4a044e",
            textAnchor: "middle",
            children: "0100",
          }),
          e.jsx("text", {
            x: 169,
            y: 180,
            fontSize: 7,
            fontFamily: k,
            fontWeight: 700,
            fill: "#4a044e",
            textAnchor: "middle",
            children: "0001",
          }),
        ],
      }),
      e.jsxs("g", {
        transform: "rotate(-3 108 212)",
        children: [
          e.jsx("rect", {
            x: 74,
            y: 194,
            width: 66,
            height: 30,
            fill: "#e2e8f0",
          }),
          e.jsx("path", {
            d: "M80 202h52M80 209h44M80 216h48",
            stroke: "#94a3b8",
            strokeWidth: 2,
          }),
        ],
      }),
      e.jsx("path", {
        d: "M98 14L34 76L104 120L165 72L98 14M104 120L32 164M104 120L168 152M104 120L106 196",
        fill: "none",
        stroke: "#ef4444",
        strokeWidth: 1.4,
        opacity: 0.9,
      }),
      e.jsx(L, { x: 98, y: 14 }),
      e.jsx(L, { x: 34, y: 76 }),
      e.jsx(L, { x: 165, y: 72 }),
      e.jsx(L, { x: 104, y: 120 }),
      e.jsx(L, { x: 32, y: 164, color: "#2563eb" }),
      e.jsx(L, { x: 168, y: 152 }),
      e.jsx(L, { x: 106, y: 196, color: "#16a34a" }),
    ],
  });
}
function be({ w: t, h: s, ids: r }) {
  const a = [];
  for (let i = -4, n = 0; i < t; n += 1) {
    const o = 18 + ((n * 13) % 4) * 7;
    (a.push({ x: i, w: o, h: s * (0.28 + ((n * 7) % 5) * 0.09) }),
      (i += o + 3));
  }
  const l = Array.from({ length: Math.round(t / 6) }, (i, n) => ({
      x: (n * 37) % t,
      y: (n * 53) % s,
      l: 10 + ((n * 11) % 14),
    })),
    c = Math.floor(s / 15);
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: -12,
        y: -12,
        width: t + 24,
        height: s + 24,
        rx: 3,
        fill: "#1a2232",
      }),
      e.jsx("clipPath", {
        id: r.pane,
        children: e.jsx("rect", { width: t, height: s }),
      }),
      e.jsxs("g", {
        clipPath: `url(#${r.pane})`,
        children: [
          e.jsx("rect", { width: t, height: s, fill: `url(#${r.sky})` }),
          e.jsx("ellipse", {
            cx: t / 2,
            cy: s,
            rx: t * 0.8,
            ry: s * 0.5,
            fill: `url(#${r.haze})`,
          }),
          a.map((i, n) =>
            e.jsx(
              "rect",
              {
                x: i.x + 9,
                y: s - i.h - 28 - (n % 3) * 10,
                width: i.w,
                height: i.h + 40,
                fill: "#1b1f3f",
              },
              `far-${i.x}`,
            ),
          ),
          a.map((i, n) =>
            e.jsxs(
              "g",
              {
                children: [
                  e.jsx("rect", {
                    x: i.x,
                    y: s - i.h * 0.82,
                    width: i.w,
                    height: i.h,
                    fill: "#0b1022",
                  }),
                  Array.from({ length: Math.floor((i.h * 0.82) / 9) }, (o, d) =>
                    Array.from({ length: Math.floor(i.w / 7) }, (f, u) =>
                      (n * 31 + d * 17 + u * 7) % 6 < 2
                        ? e.jsx(
                            "rect",
                            {
                              x: i.x + 3 + u * 7,
                              y: s - i.h * 0.82 + 5 + d * 9,
                              width: 3.4,
                              height: 4.2,
                              fill:
                                (d + u + n) % 5 === 0 ? "#5eead4" : "#fcd34d",
                              opacity: 0.85,
                            },
                            `${d}-${u}`,
                          )
                        : null,
                    ),
                  ),
                ],
              },
              `near-${i.x}`,
            ),
          ),
          e.jsx("circle", {
            cx: a[2].x + a[2].w / 2,
            cy: s - a[2].h * 0.82 - 4,
            r: 2.2,
            fill: "#f87171",
            filter: `url(#${r.glow})`,
          }),
          e.jsx("g", {
            stroke: "#cbd5e1",
            strokeWidth: 0.9,
            opacity: 0.3,
            children: l.map((i) =>
              e.jsx("path", { d: `M${i.x} ${i.y}l-3 ${i.l}` }, `${i.x}-${i.y}`),
            ),
          }),
          l
            .slice(0, 14)
            .map((i) =>
              e.jsx(
                "circle",
                {
                  cx: (i.x * 3) % t,
                  cy: (i.y * 7) % s,
                  r: 1.3,
                  fill: "#e2e8f0",
                  opacity: 0.35,
                },
                `bead-${i.x}`,
              ),
            ),
          Array.from({ length: c }, (i, n) =>
            e.jsxs(
              "g",
              {
                children: [
                  e.jsx("rect", {
                    y: n * 15 + 4,
                    width: t,
                    height: 6,
                    fill: "#141b29",
                  }),
                  e.jsx("rect", {
                    y: n * 15 + 4,
                    width: t,
                    height: 1.2,
                    fill: "#64748b",
                    opacity: 0.6,
                  }),
                ],
              },
              n,
            ),
          ),
        ],
      }),
      e.jsx("rect", { x: t / 2 - 3, width: 6, height: s, fill: "#1a2232" }),
      e.jsx("rect", {
        x: -10,
        y: -12,
        width: t + 20,
        height: 10,
        fill: "#273244",
      }),
      e.jsx("path", {
        d: `M${t - 10} -2V${s * 0.7}`,
        stroke: "#94a3b8",
        strokeWidth: 1.2,
      }),
      e.jsx("circle", { cx: t - 10, cy: s * 0.7 + 3, r: 3, fill: "#94a3b8" }),
      e.jsx("rect", {
        x: -18,
        y: s + 8,
        width: t + 36,
        height: 10,
        rx: 2,
        fill: "#2f3a4f",
      }),
      e.jsx("rect", {
        x: -18,
        y: s + 8,
        width: t + 36,
        height: 2,
        fill: "#94a3b8",
        opacity: 0.4,
      }),
    ],
  });
}
function ye({ ids: t }) {
  const s = "#d6a07a";
  return e.jsxs("g", {
    children: [
      e.jsx("path", {
        d: "M-30 -108Q-62 -126 -70 -168",
        stroke: `url(#${t.coat})`,
        strokeWidth: 24,
        strokeLinecap: "round",
        fill: "none",
      }),
      e.jsx("path", {
        d: "M-30 -108Q-62 -126 -70 -168",
        stroke: "#4a321b",
        strokeWidth: 24,
        strokeLinecap: "round",
        fill: "none",
        opacity: 0.35,
      }),
      e.jsx("path", {
        d: "M-79 -170l18 4",
        stroke: "#3b2715",
        strokeWidth: 6,
        strokeLinecap: "round",
      }),
      e.jsxs("g", {
        transform: "rotate(-8 -80 -200)",
        children: [
          e.jsx("rect", {
            x: -96,
            y: -222,
            width: 28,
            height: 34,
            fill: "#f4efe4",
          }),
          e.jsx("rect", {
            x: -93,
            y: -219,
            width: 22,
            height: 22,
            fill: "#475569",
          }),
          e.jsx("circle", { cx: -82, cy: -210, r: 4.4, fill: "#1f2937" }),
          e.jsx("path", { d: "M-90 -197q8 -10 16 0z", fill: "#1f2937" }),
        ],
      }),
      e.jsx("path", {
        d: "M-80 -172q-6 -12 0 -22q6 -5 12 -1l4 10q0 8 -6 13z",
        fill: s,
      }),
      e.jsx("path", {
        d: "M-79 -192q-5 -2 -9 1M-80 -186q-5 -1 -8 2M-80 -180q-4 0 -7 3",
        stroke: s,
        strokeWidth: 3.4,
        strokeLinecap: "round",
        fill: "none",
      }),
      e.jsx("path", {
        d: "M-67 -192q4 -6 1 -12",
        stroke: s,
        strokeWidth: 3.6,
        strokeLinecap: "round",
        fill: "none",
      }),
      e.jsx("path", {
        d: "M-74 -174q4 -2 7 -8",
        stroke: "#a8714f",
        strokeWidth: 1,
        fill: "none",
      }),
      e.jsx("path", {
        d: "M40 -108Q60 -70 54 -6",
        stroke: "#4a321b",
        strokeWidth: 20,
        strokeLinecap: "round",
        fill: "none",
      }),
      e.jsx("path", {
        d: "M50 -100Q64 -66 60 -8",
        stroke: "#5eead4",
        strokeWidth: 1.4,
        fill: "none",
        opacity: 0.3,
      }),
      e.jsx("path", {
        d: "M-46 0L-39 -32Q-45 -64 -46 -94Q-44 -118 -20 -124H22Q44 -118 48 -94Q47 -64 41 -32L48 0Z",
        fill: `url(#${t.coat})`,
      }),
      e.jsx("path", {
        d: "M-44 -98Q2 -84 48 -98L47 -86Q2 -72 -45 -86Z",
        fill: "#000000",
        opacity: 0.18,
      }),
      e.jsx("path", {
        d: "M-44 -98Q2 -84 48 -98",
        stroke: "#d6a466",
        strokeWidth: 1.2,
        fill: "none",
        opacity: 0.6,
      }),
      e.jsx("path", {
        d: "M3 -78V0",
        stroke: "#3b2715",
        strokeWidth: 1.4,
        opacity: 0.6,
      }),
      e.jsx("path", {
        d: "M-30 -60q2 30 -4 60M36 -62q-1 30 3 62",
        stroke: "#3b2715",
        strokeWidth: 1,
        opacity: 0.35,
        fill: "none",
      }),
      e.jsx("path", { d: "M-40 -37H42L41 -27H-39Z", fill: "#5a3c20" }),
      e.jsx("path", {
        d: "M-40 -37H42V-35H-40Z",
        fill: "#c6955a",
        opacity: 0.5,
      }),
      e.jsx("rect", {
        x: -34,
        y: -37,
        width: 9,
        height: 12,
        rx: 1.5,
        fill: "none",
        stroke: "#d4b483",
        strokeWidth: 1.6,
      }),
      e.jsx("path", {
        d: "M-30 -26q-3 10 -8 16M-27 -26q1 9 -1 18",
        stroke: "#5a3c20",
        strokeWidth: 3,
        strokeLinecap: "round",
        fill: "none",
      }),
      e.jsx("path", {
        d: "M-40 -18l20 2M24 -16l18 -2",
        stroke: "#3b2715",
        strokeWidth: 1.6,
        opacity: 0.5,
      }),
      e.jsx("path", {
        d: "M-44 -92Q-42 -116 -20 -122",
        stroke: "#f3c98b",
        strokeWidth: 2.4,
        fill: "none",
        opacity: 0.6,
      }),
      e.jsx("path", {
        d: "M-24 -122L-20 -146Q0 -152 20 -146L24 -122Q0 -116 -24 -122Z",
        fill: "#7d5530",
      }),
      e.jsx("path", {
        d: "M-20 -146Q0 -152 20 -146",
        stroke: "#c6955a",
        strokeWidth: 1.4,
        fill: "none",
      }),
      e.jsx("path", {
        d: "M0 -150V-120",
        stroke: "#3b2715",
        strokeWidth: 1.2,
        opacity: 0.5,
      }),
      e.jsx("path", {
        d: "M-14 -150q-2 -6 2 -10h20q4 4 2 10z",
        fill: "#b9805c",
      }),
      e.jsx("ellipse", { cx: 0, cy: -170, rx: 17, ry: 19, fill: "#2a1a10" }),
      e.jsx("path", { d: "M-17 -172q-4 12 2 22q6 4 10 -4z", fill: s }),
      e.jsx("ellipse", { cx: -14, cy: -168, rx: 3.6, ry: 5.6, fill: s }),
      e.jsx("path", {
        d: "M-14.6 -171q-1.6 3 0 6",
        stroke: "#9a6446",
        strokeWidth: 1,
        fill: "none",
      }),
      e.jsx("path", {
        d: "M-6 -158q8 4 20 0",
        stroke: "#4a2e1c",
        strokeWidth: 1.2,
        fill: "none",
        opacity: 0.7,
      }),
      e.jsx("path", {
        d: "M-12 -182q10 -6 24 2",
        stroke: "#4a3220",
        strokeWidth: 1.4,
        fill: "none",
      }),
      e.jsxs("g", {
        transform: "rotate(-8 0 -186)",
        children: [
          e.jsx("ellipse", { cx: 0, cy: -184, rx: 31, ry: 7, fill: "#1c1917" }),
          e.jsx("ellipse", {
            cx: 0,
            cy: -185.5,
            rx: 29,
            ry: 5,
            fill: "#292524",
          }),
          e.jsx("path", {
            d: "M-18 -186Q-20 -206 -10 -210Q0 -205 10 -210Q20 -206 18 -186Z",
            fill: "#292524",
          }),
          e.jsx("path", {
            d: "M8 -209Q19 -204 18 -186H12Q14 -200 8 -209Z",
            fill: "#0c0a09",
            opacity: 0.6,
          }),
          e.jsx("path", { d: "M-18 -192H18V-186H-18Z", fill: "#450a0a" }),
          e.jsx("path", {
            d: "M-17 -200q-1 -8 6 -9",
            stroke: "#57534e",
            strokeWidth: 1.4,
            fill: "none",
          }),
        ],
      }),
    ],
  });
}
function me({ ids: t }) {
  return e.jsxs("g", {
    children: [
      e.jsx("ellipse", {
        cx: 128,
        cy: 2,
        rx: 120,
        ry: 22,
        fill: `url(#${t.pool})`,
      }),
      e.jsx("path", {
        d: "M57 -88L90 -104L230 4L44 6Z",
        fill: `url(#${t.cone})`,
        filter: `url(#${t.soft})`,
      }),
      e.jsx("ellipse", { cx: 0, cy: 0, rx: 22, ry: 6, fill: "#111827" }),
      e.jsx("ellipse", { cx: 0, cy: -2, rx: 20, ry: 4.5, fill: "#334155" }),
      e.jsx("path", {
        d: "M0 -4L22 -88L64 -116",
        stroke: "#1f2937",
        strokeWidth: 5,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      e.jsx("path", {
        d: "M0 -4L22 -88L64 -116",
        stroke: "#64748b",
        strokeWidth: 1.4,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      e.jsx("circle", { cx: 22, cy: -88, r: 4.5, fill: "#475569" }),
      e.jsx("path", { d: "M6 -40l14 -30", stroke: "#94a3b8", strokeWidth: 1 }),
      e.jsxs("g", {
        transform: "translate(64 -116) rotate(-25)",
        children: [
          e.jsx("path", { d: "M-7 -8H7L18 22H-18Z", fill: "#14532d" }),
          e.jsx("path", {
            d: "M-7 -8H-1L-8 22H-18Z",
            fill: "#22c55e",
            opacity: 0.45,
          }),
          e.jsx("ellipse", {
            cx: 0,
            cy: 22,
            rx: 18,
            ry: 4.5,
            fill: "#fef3c7",
            filter: `url(#${t.glow})`,
          }),
        ],
      }),
    ],
  });
}
function ke({ ids: t }) {
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: -10,
        y: -10,
        width: 170,
        height: 116,
        rx: 20,
        fill: "#2dd4bf",
        opacity: 0.18,
        filter: `url(#${t.soft})`,
      }),
      e.jsx("rect", {
        width: 150,
        height: 96,
        rx: 6,
        fill: "#1e293b",
        stroke: "#475569",
        strokeWidth: 2,
      }),
      e.jsx("rect", {
        x: 7,
        y: 7,
        width: 136,
        height: 80,
        rx: 2,
        fill: `url(#${t.screen})`,
      }),
      e.jsx("text", {
        x: 16,
        y: 22,
        fontSize: 7,
        fontFamily: k,
        fill: "#5eead4",
        opacity: 0.7,
        children: "> INBOX: FIELD",
      }),
      e.jsx("text", {
        x: 16,
        y: 44,
        fontSize: 13,
        fontFamily: k,
        fontWeight: 700,
        fill: "#6ee7b7",
        filter: `url(#${t.glow})`,
        children: "10 MESSAGES",
      }),
      e.jsx("text", {
        x: 16,
        y: 61,
        fontSize: 13,
        fontFamily: k,
        fontWeight: 700,
        fill: "#6ee7b7",
        filter: `url(#${t.glow})`,
        children: "WAITING...",
      }),
      e.jsx("rect", { x: 100, y: 51, width: 8, height: 12, fill: "#6ee7b7" }),
      e.jsxs("g", {
        transform: "translate(112 66)",
        stroke: "#34d399",
        strokeWidth: 1.4,
        fill: "none",
        children: [
          e.jsx("rect", { width: 22, height: 14, rx: 1.5 }),
          e.jsx("path", { d: "M0 0l11 8l11 -8" }),
        ],
      }),
      e.jsx("circle", { cx: 75, cy: 4, r: 1.2, fill: "#34d399" }),
      e.jsx("path", { d: "M-6 96H156L170 106H-20Z", fill: "#94a3b8" }),
      e.jsx("path", { d: "M2 98H148L156 103H-6Z", fill: "#475569" }),
      e.jsx("path", { d: "M-20 106H170V109H-20Z", fill: "#334155" }),
      e.jsx("rect", {
        x: 58,
        y: 103,
        width: 34,
        height: 2,
        rx: 1,
        fill: "#64748b",
      }),
    ],
  });
}
function we() {
  return e.jsxs("g", {
    children: [
      e.jsx("path", { d: "M8 8L156 2L170 52L4 60Z", fill: "rgba(0,0,0,0.4)" }),
      e.jsx("path", { d: "M2 4L150 -2L162 48L-6 56Z", fill: "#c9a86a" }),
      e.jsx("path", { d: "M8 2L60 0L58 -8L12 -6Z", fill: "#b8955a" }),
      e.jsx("path", { d: "M-2 8L148 2L159 46L-8 52Z", fill: "#dcc18a" }),
      e.jsx("path", {
        d: "M14 10l100 -4",
        stroke: "#f8fafc",
        strokeWidth: 3,
        opacity: 0.7,
      }),
      e.jsxs("g", {
        transform: "rotate(-6 78 30)",
        children: [
          e.jsx("rect", {
            x: 34,
            y: 18,
            width: 96,
            height: 22,
            rx: 2,
            fill: "none",
            stroke: "#b91c1c",
            strokeWidth: 2,
          }),
          e.jsx("text", {
            x: 82,
            y: 35,
            fontSize: 15,
            fontFamily: Q,
            fontWeight: 700,
            fill: "#b91c1c",
            textAnchor: "middle",
            letterSpacing: 1.5,
            children: "TOP SECRET",
          }),
        ],
      }),
      e.jsx("path", {
        d: "M128 4l8 -6l4 14",
        stroke: "#94a3b8",
        strokeWidth: 2,
        fill: "none",
      }),
    ],
  });
}
function Se() {
  return e.jsxs("g", {
    children: [
      e.jsx("ellipse", {
        cx: 13,
        cy: 0,
        rx: 16,
        ry: 4,
        fill: "rgba(0,0,0,0.4)",
      }),
      e.jsx("path", {
        d: "M0 -30h26v26q0 4 -4 4h-18q-4 0 -4 -4z",
        fill: "#e2e8f0",
      }),
      e.jsx("path", { d: "M18 -30h8v26q0 4 -4 4h-4z", fill: "#94a3b8" }),
      e.jsx("path", {
        d: "M26 -24q10 0 10 9t-10 9",
        stroke: "#cbd5e1",
        strokeWidth: 4,
        fill: "none",
      }),
      e.jsx("ellipse", { cx: 13, cy: -30, rx: 13, ry: 3.4, fill: "#cbd5e1" }),
      e.jsx("ellipse", { cx: 13, cy: -29.6, rx: 11, ry: 2.6, fill: "#1c0f08" }),
    ],
  });
}
function $e({ w: t, depth: s, h: r, ids: a }) {
  return e.jsxs("g", {
    children: [
      e.jsx("rect", { width: t, height: s, fill: `url(#${a.wood})` }),
      e.jsx("path", {
        d: `M0 ${s * 0.35}H${t}M0 ${s * 0.7}H${t}`,
        stroke: "#2a170c",
        strokeWidth: 1,
        opacity: 0.5,
      }),
      e.jsx("rect", { y: s, width: t, height: 6, fill: "#7a4b2a" }),
      e.jsx("rect", {
        y: s,
        width: t,
        height: 1.5,
        fill: "#d6a466",
        opacity: 0.5,
      }),
      e.jsx("rect", {
        y: s + 6,
        width: t,
        height: r - s - 6,
        fill: `url(#${a.front})`,
      }),
      e.jsx("rect", {
        y: s + 6,
        width: t,
        height: 10,
        fill: "#000000",
        opacity: 0.3,
      }),
    ],
  });
}
const Me =
  "The field office at night: an agent in a trench coat pins a photo to an evidence board tied with red string, under a card reading Operation Character Set. A desk lamp lights a TOP SECRET dossier, a laptop glows with 10 messages waiting, and rain streaks the blinds over the city.";
function pt() {
  const t = je();
  return e.jsxs("svg", {
    viewBox: "0 0 360 780",
    preserveAspectRatio: "xMidYMid slice",
    className: "game-landing-art game-landing-portrait",
    role: "img",
    "aria-label": Me,
    "data-agents-landing-art": "portrait",
    children: [
      e.jsx(ue, { ids: t }),
      e.jsx("rect", { width: 360, height: 780, fill: `url(#${t.wall})` }),
      e.jsx("rect", { width: 360, height: 34, fill: "#03060d" }),
      e.jsx("ellipse", {
        cx: 282,
        cy: 250,
        rx: 120,
        ry: 180,
        fill: `url(#${t.haze})`,
      }),
      e.jsx("g", {
        transform: "translate(232 104)",
        children: e.jsx(be, { w: 108, h: 262, ids: t }),
      }),
      e.jsx("g", {
        transform: "translate(14 112) scale(0.98)",
        children: e.jsx(ge, { ids: t }),
      }),
      e.jsx("g", {
        transform: "translate(150 528) scale(1.3)",
        children: e.jsx(ye, { ids: t }),
      }),
      e.jsx("g", {
        transform: "translate(0 500)",
        children: e.jsx($e, { w: 360, depth: 68, h: 215, ids: t }),
      }),
      e.jsx("g", {
        transform: "translate(26 534)",
        children: e.jsx(me, { ids: t }),
      }),
      e.jsx("g", {
        transform: "translate(62 510) scale(0.76)",
        children: e.jsx(we, {}),
      }),
      e.jsx("g", {
        transform: "translate(206 432) scale(0.9)",
        children: e.jsx(ke, { ids: t }),
      }),
      e.jsx("g", {
        transform: "translate(316 562) scale(0.8)",
        children: e.jsx(Se, {}),
      }),
      e.jsx("rect", { y: 715, width: 360, height: 65, fill: "#05070d" }),
      e.jsx("rect", { width: 360, height: 780, fill: `url(#${t.vignette})` }),
    ],
  });
}
function jt() {
  const t = je();
  return e.jsxs("svg", {
    viewBox: "0 0 1280 720",
    preserveAspectRatio: "xMidYMid slice",
    className: "game-landing-art game-landing-landscape",
    role: "img",
    "aria-label": Me,
    "data-agents-landing-art": "landscape",
    children: [
      e.jsx(ue, { ids: t }),
      e.jsx("rect", { width: 1280, height: 720, fill: `url(#${t.wall})` }),
      e.jsx("rect", { width: 1280, height: 40, fill: "#03060d" }),
      e.jsx("ellipse", {
        cx: 990,
        cy: 260,
        rx: 340,
        ry: 260,
        fill: `url(#${t.haze})`,
      }),
      e.jsx("g", {
        transform: "translate(800 84)",
        children: e.jsx(be, { w: 380, h: 300, ids: t }),
      }),
      e.jsx("g", {
        transform: "translate(110 76) scale(1.62)",
        children: e.jsx(ge, { ids: t }),
      }),
      e.jsx("g", {
        transform: "translate(560 482) scale(1.6)",
        children: e.jsx(ye, { ids: t }),
      }),
      e.jsx("g", {
        transform: "translate(0 460)",
        children: e.jsx($e, { w: 1280, depth: 84, h: 235, ids: t }),
      }),
      e.jsx("g", {
        transform: "translate(230 502) scale(1.5)",
        children: e.jsx(me, { ids: t }),
      }),
      e.jsx("g", {
        transform: "translate(300 482) scale(1.15)",
        children: e.jsx(we, {}),
      }),
      e.jsx("g", {
        transform: "translate(820 340) scale(1.35)",
        children: e.jsx(ke, { ids: t }),
      }),
      e.jsx("g", { transform: "translate(1100 530)", children: e.jsx(Se, {}) }),
      e.jsx("rect", { y: 695, width: 1280, height: 25, fill: "#05070d" }),
      e.jsx("rect", { width: 1280, height: 720, fill: `url(#${t.vignette})` }),
    ],
  });
}
function ut() {
  return e.jsxs(e.Fragment, { children: [e.jsx(pt, {}), e.jsx(jt, {})] });
}
const S = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${Oe}`;
function W({ right: t }) {
  return t
    ? e.jsx(se, {
        "aria-hidden": "true",
        className: "h-5 w-5 shrink-0 text-emerald-300",
      })
    : e.jsx(re, {
        "aria-hidden": "true",
        className: "h-5 w-5 shrink-0 text-rose-300",
      });
}
function K({ keyChars: t, format: s }) {
  return e.jsxs("table", {
    className: "agents-codebook w-auto rounded-md text-sm",
    "data-agents-codebook": !0,
    children: [
      e.jsx("caption", { className: "sr-only", children: "Codebook" }),
      e.jsx("thead", {
        children: e.jsxs("tr", {
          className: "font-typewriter text-xs text-stone-600",
          children: [
            e.jsx("th", {
              scope: "col",
              className: "px-3 pb-0.5 pt-2 text-left font-normal",
              children: "Character",
            }),
            e.jsx("th", {
              scope: "col",
              className: "px-3 pb-0.5 pt-2 text-left font-normal",
              children: s === "binary" ? "Binary code" : "Denary code",
            }),
          ],
        }),
      }),
      e.jsxs("tbody", {
        className: "font-mono font-bold",
        children: [
          qe(t).map(({ char: r, code: a }) =>
            e.jsxs(
              "tr",
              {
                children: [
                  e.jsx("td", {
                    className: "px-3 py-0.5 text-lg",
                    children: r,
                  }),
                  e.jsx("td", {
                    className: "px-3 py-0.5 tracking-wider",
                    children: U(a, s),
                  }),
                ],
              },
              r,
            ),
          ),
          e.jsx("tr", {
            "aria-hidden": "true",
            children: e.jsx("td", { className: "h-2", colSpan: 2 }),
          }),
        ],
      }),
    ],
  });
}
function Ne() {
  return e.jsx("div", {
    className: "agents-place font-mono text-[0.6rem] text-slate-500",
    "aria-hidden": "true",
    children: T.map((t) =>
      e.jsx("span", { className: "text-center", children: t }, t),
    ),
  });
}
function gt({ code: t }) {
  return e.jsx("span", {
    className: "agents-place font-mono text-lg font-bold text-amber-200",
    children: [...v(t)].map((s, r) =>
      e.jsx(
        "span",
        { className: "rounded bg-slate-900 py-1 text-center", children: s },
        r,
      ),
    ),
  });
}
function bt({ mission: t, done: s, onDone: r }) {
  const a = _(t.word),
    [l, c] = j.useState(() => a.map(() => "")),
    i = j.useRef([]),
    n = V(t.word, l),
    o = l.every(Boolean);
  function d(h, p) {
    const g = Re(p, t.word);
    (c(($) => $.map((q, H) => (H === h ? g : q))),
      g && i.current[h + 1]?.focus());
  }
  function f(h, p) {
    p.key === "Backspace" && !l[h] && h > 0 && i.current[h - 1]?.focus();
  }
  function u(h) {
    (h.preventDefault(), !(!o || s) && r(Z(V(t.word, l))));
  }
  return e.jsxs("form", {
    onSubmit: u,
    className: "space-y-4",
    "data-agents-panel": "decode",
    children: [
      e.jsx(K, { keyChars: t.key, format: t.format }),
      e.jsxs("fieldset", {
        className: "space-y-3",
        children: [
          e.jsx("legend", {
            className: "sr-only",
            children: "Decode each code into a letter",
          }),
          t.format === "binary"
            ? e.jsx("div", {
                className: "flex items-center gap-3 pl-0",
                children: e.jsx(Ne, {}),
              })
            : null,
          a.map((h, p) =>
            e.jsxs(
              "div",
              {
                className: "flex items-center gap-3",
                "data-agents-code": h,
                children: [
                  t.format === "binary"
                    ? e.jsx(gt, { code: h })
                    : e.jsx("span", {
                        className:
                          "w-16 rounded bg-slate-900 py-1.5 text-center font-mono text-xl font-bold text-amber-200",
                        children: h,
                      }),
                  e.jsx("span", {
                    "aria-hidden": "true",
                    className: "text-slate-500",
                    children: "=",
                  }),
                  e.jsxs("span", {
                    className: "relative inline-flex",
                    children: [
                      e.jsx("input", {
                        ref: (g) => {
                          i.current[p] = g;
                        },
                        value: l[p],
                        onChange: (g) => d(p, g.target.value),
                        onKeyDown: (g) => f(p, g),
                        disabled: s,
                        autoComplete: "off",
                        autoCapitalize:
                          t.word === t.word.toLowerCase()
                            ? "none"
                            : "characters",
                        spellCheck: !1,
                        "aria-label": `Letter ${p + 1} of ${a.length}, code ${U(h, t.format)}`,
                        className: "agents-letter",
                        "data-mark": s ? (n[p] ? "right" : "wrong") : void 0,
                        "data-agents-letter": p,
                      }),
                      s
                        ? e.jsxs("span", {
                            className:
                              "absolute -right-2 -top-2 flex items-center gap-0.5 rounded-full bg-slate-950 px-0.5 font-mono text-sm font-bold",
                            children: [
                              e.jsx(W, { right: !!n[p] }),
                              n[p]
                                ? null
                                : e.jsxs("span", {
                                    className: "pr-1 text-emerald-300",
                                    children: [
                                      e.jsx("span", {
                                        className: "sr-only",
                                        children: "should be ",
                                      }),
                                      t.word[p],
                                    ],
                                  }),
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              },
              p,
            ),
          ),
        ],
      }),
      s
        ? null
        : e.jsx("button", {
            type: "submit",
            className: S,
            disabled: !o,
            children: "Decode",
          }),
    ],
  });
}
function yt({ mission: t, done: s, onDone: r }) {
  const [a, l] = j.useState(""),
    [c, i] = j.useState(!1),
    n = Ge(a),
    o = O(b(t.letter));
  return e.jsxs("form", {
    className: "space-y-4",
    onSubmit: (d) => {
      if ((d.preventDefault(), n === null || s)) return;
      const f = n === o;
      (i(f), r(f ? 100 : 0));
    },
    "data-agents-panel": "hex",
    children: [
      e.jsx(K, { keyChars: t.key, format: t.format }),
      e.jsxs("div", {
        className: "flex flex-wrap items-center gap-3",
        children: [
          e.jsx("span", {
            className:
              "w-7 text-center font-mono text-2xl font-bold text-slate-50",
            children: t.letter,
          }),
          e.jsx("span", {
            "aria-hidden": "true",
            className: "text-slate-500",
            children: "=",
          }),
          e.jsx("input", {
            value: a,
            onChange: (d) => l(d.target.value.slice(0, 4)),
            disabled: s,
            autoComplete: "off",
            autoCapitalize: "characters",
            spellCheck: !1,
            "aria-label": `Hexadecimal code for ${t.letter}`,
            className: "agents-letter w-20 uppercase",
            "data-mark": s ? (c ? "right" : "wrong") : void 0,
            "data-agents-hex": !0,
          }),
          s
            ? e.jsxs("span", {
                className:
                  "flex items-center gap-1 font-mono text-lg font-bold",
                children: [
                  e.jsx(W, { right: c }),
                  c
                    ? null
                    : e.jsx("span", {
                        className: "text-emerald-300",
                        children: o,
                      }),
                ],
              })
            : null,
        ],
      }),
      s
        ? null
        : e.jsx("button", {
            type: "submit",
            className: S,
            disabled: n === null,
            children: "Check",
          }),
    ],
  });
}
function mt({ mission: t, done: s, onDone: r }) {
  const a = [...t.word],
    [l, c] = j.useState(() => a.map(() => T.map(() => !1))),
    i = l.map(Fe),
    n = Be(t.word, i);
  function o(d, f) {
    s ||
      c((u) =>
        u.map((h, p) => (p === d ? h.map((g, $) => ($ === f ? !g : g)) : h)),
      );
  }
  return e.jsxs("div", {
    className: "space-y-4",
    "data-agents-panel": "encode",
    children: [
      e.jsx(K, { keyChars: t.key, format: "binary" }),
      e.jsxs("div", {
        className: "space-y-3",
        children: [
          e.jsxs("div", {
            className: "flex items-end gap-2",
            children: [
              e.jsx("span", { className: "w-7", "aria-hidden": "true" }),
              e.jsx(Ne, {}),
            ],
          }),
          a.map((d, f) =>
            e.jsxs(
              "div",
              {
                className: "space-y-1",
                role: "group",
                "aria-label": `Bits for ${d}`,
                "data-agents-byte": f,
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("span", {
                        className:
                          "w-7 text-center font-mono text-2xl font-bold text-slate-50",
                        children: d,
                      }),
                      e.jsx("span", {
                        className: "agents-place",
                        children: T.map((u, h) =>
                          e.jsx(
                            "button",
                            {
                              type: "button",
                              className: "agents-bit",
                              "aria-pressed": l[f]?.[h] ?? !1,
                              "aria-label": `${d}, ${u} bit`,
                              onClick: () => o(f, h),
                              disabled: s,
                              children: l[f]?.[h] ? 1 : 0,
                            },
                            u,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-2 pl-9 font-mono text-xs text-slate-400",
                    children: [
                      e.jsxs("span", {
                        "data-agents-byte-value": !0,
                        children: ["= ", i[f]],
                      }),
                      s
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(W, { right: !!n[f] }),
                              n[f]
                                ? null
                                : e.jsxs("span", {
                                    className: "text-emerald-300",
                                    children: [v(b(d)), " = ", b(d)],
                                  }),
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              },
              f,
            ),
          ),
        ],
      }),
      s
        ? null
        : e.jsxs("button", {
            type: "button",
            className: S,
            onClick: () => r(Z(n)),
            children: [
              e.jsx(Ce, { "aria-hidden": "true", className: "h-4 w-4" }),
              "Send reply",
            ],
          }),
    ],
  });
}
const kt = { ascii: "ASCII", unicode: "Unicode" };
function wt({ mission: t, done: s, onDone: r }) {
  const [a, l] = j.useState(null);
  return e.jsxs("div", {
    className: "space-y-4",
    "data-agents-panel": "charset",
    children: [
      e.jsx("p", {
        className:
          "rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-center text-2xl text-slate-50",
        "aria-label": t.sampleLabel ?? t.sample,
        "data-agents-sample": !0,
        children: t.sample,
      }),
      e.jsx("div", {
        className: "grid grid-cols-2 gap-3",
        role: "group",
        "aria-label": "Character set",
        children: ["ascii", "unicode"].map((c) => {
          const i = a === c,
            n = s && c === t.answer;
          return e.jsxs(
            "button",
            {
              type: "button",
              disabled: s,
              onClick: () => {
                (l(c), r(c === t.answer ? 100 : 0));
              },
              "data-agents-set": c,
              className: `flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-4 font-mono text-xl font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${n ? "border-emerald-400 bg-emerald-500/15 text-emerald-200" : s && i ? "border-rose-400 bg-rose-500/15 text-rose-200" : s ? "border-slate-800 text-slate-500" : "border-slate-600 bg-slate-900/70 text-slate-100 hover:border-teal-300 hover:bg-teal-400/10"}`,
              children: [
                n
                  ? e.jsx(se, { "aria-hidden": "true", className: "h-5 w-5" })
                  : null,
                s && i && !n
                  ? e.jsx(re, { "aria-hidden": "true", className: "h-5 w-5" })
                  : null,
                kt[c],
              ],
            },
            c,
          );
        }),
      }),
    ],
  });
}
function Ae({ label: t, unit: s, done: r, right: a, answer: l, onSubmit: c }) {
  const [i, n] = j.useState(""),
    o = Ue(i);
  return e.jsxs("form", {
    className: "space-y-3",
    onSubmit: (d) => {
      (d.preventDefault(), o !== null && !r && c(o));
    },
    children: [
      e.jsxs("div", {
        className: "flex flex-wrap items-center gap-3",
        children: [
          e.jsx("input", {
            value: i,
            onChange: (d) => n(d.target.value),
            disabled: r,
            inputMode: "decimal",
            autoComplete: "off",
            "aria-label": t,
            className: `w-40 rounded-lg border-2 bg-slate-950 px-3 py-2 font-mono text-2xl font-bold text-slate-50 focus:outline-none focus-visible:border-amber-300 ${r ? (a ? "border-emerald-400" : "border-rose-400") : "border-slate-600"}`,
            "data-agents-number": !0,
          }),
          e.jsx("span", {
            className: "font-mono text-lg text-slate-300",
            children: s,
          }),
          r
            ? e.jsxs("span", {
                className:
                  "flex items-center gap-1 font-mono text-lg font-bold",
                children: [
                  e.jsx(W, { right: a }),
                  a
                    ? null
                    : e.jsx("span", {
                        className: "text-emerald-300",
                        children: l,
                      }),
                ],
              })
            : null,
        ],
      }),
      r
        ? null
        : e.jsx("button", {
            type: "submit",
            className: S,
            disabled: o === null,
            children: "Check",
          }),
    ],
  });
}
function St({ mission: t, done: s, onDone: r }) {
  const { answer: a, accepted: l } = xe(t),
    [c, i] = j.useState(!1);
  return e.jsx("div", {
    "data-agents-panel": "size",
    children: e.jsx(Ae, {
      label: `Answer in ${R(t.unit)}`,
      unit: R(t.unit),
      done: s,
      right: c,
      answer: a.toLocaleString("en-GB"),
      onSubmit: (n) => {
        const o = _e(n, l);
        (i(o), r(o ? 100 : 0));
      },
    }),
  });
}
function $t({ value: t, onChange: s, disabled: r }) {
  const a = (n) => Math.min(A, Math.max(m, n)),
    l = -135 + ((t - m) / (A - m)) * 270,
    c = Array.from({ length: A - m + 1 }, (n, o) => m + o);
  function i(n) {
    if (r) return;
    const o = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[
      n.key
    ];
    o
      ? (n.preventDefault(), s(a(t + o)))
      : n.key === "Home"
        ? (n.preventDefault(), s(m))
        : n.key === "End" && (n.preventDefault(), s(A));
  }
  return e.jsxs("div", {
    className: "flex items-center gap-3",
    children: [
      e.jsx("button", {
        type: "button",
        className:
          "inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-600 text-slate-100 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 disabled:opacity-40",
        "aria-label": "Fewer bits",
        onClick: () => s(a(t - 1)),
        disabled: r || t <= m,
        children: e.jsx(ve, { "aria-hidden": "true", className: "h-5 w-5" }),
      }),
      e.jsx("div", {
        role: "spinbutton",
        tabIndex: r ? -1 : 0,
        "aria-label": "Bits per character",
        "aria-valuemin": m,
        "aria-valuemax": A,
        "aria-valuenow": t,
        "aria-disabled": r,
        onKeyDown: i,
        className: "agents-dial rounded-full",
        "data-agents-dial": t,
        children: e.jsxs("svg", {
          viewBox: "0 0 120 120",
          className: "h-32 w-32",
          "aria-hidden": "true",
          children: [
            e.jsx("circle", {
              cx: 60,
              cy: 60,
              r: 56,
              fill: "#0f172a",
              stroke: "#334155",
              strokeWidth: 2,
            }),
            c.map((n) => {
              const o =
                  ((-135 + ((n - m) / (A - m)) * 270 - 90) * Math.PI) / 180,
                d = n <= t;
              return e.jsx(
                "line",
                {
                  x1: 60 + Math.cos(o) * 44,
                  y1: 60 + Math.sin(o) * 44,
                  x2: 60 + Math.cos(o) * 52,
                  y2: 60 + Math.sin(o) * 52,
                  stroke: d ? "#2dd4bf" : "#475569",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                },
                n,
              );
            }),
            e.jsx("circle", {
              cx: 60,
              cy: 60,
              r: 34,
              fill: "#1e293b",
              stroke: "#475569",
              strokeWidth: 2,
            }),
            e.jsx("g", {
              transform: `rotate(${l} 60 60)`,
              style: { transition: "transform 160ms" },
              children: e.jsx("line", {
                x1: 60,
                y1: 60,
                x2: 60,
                y2: 30,
                stroke: "#fbbf24",
                strokeWidth: 4,
                strokeLinecap: "round",
              }),
            }),
            e.jsx("circle", { cx: 60, cy: 60, r: 18, fill: "#0f172a" }),
            e.jsx("text", {
              x: 60,
              y: 67,
              textAnchor: "middle",
              fontSize: 20,
              fontWeight: 700,
              fill: "#f8fafc",
              fontFamily: "ui-monospace, monospace",
              children: t,
            }),
          ],
        }),
      }),
      e.jsx("button", {
        type: "button",
        className:
          "inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-600 text-slate-100 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 disabled:opacity-40",
        "aria-label": "More bits",
        onClick: () => s(a(t + 1)),
        disabled: r || t >= A,
        children: e.jsx(Ie, { "aria-hidden": "true", className: "h-5 w-5" }),
      }),
    ],
  });
}
function Mt({ mission: t, done: s, onDone: r }) {
  const a = Ze(t),
    [l, c] = j.useState(!1),
    [i, n] = j.useState(1);
  return t.mode === "count"
    ? e.jsx("div", {
        "data-agents-panel": "bits",
        children: e.jsx(Ae, {
          label: "Number of characters",
          unit: "characters",
          done: s,
          right: l,
          answer: a.toLocaleString("en-GB"),
          onSubmit: (o) => {
            const d = o === a;
            (c(d), r(d ? 100 : 0));
          },
        }),
      })
    : e.jsxs("div", {
        className: "space-y-4",
        "data-agents-panel": "bits",
        children: [
          e.jsx($t, { value: i, onChange: n, disabled: s }),
          e.jsx("div", {
            className: "flex flex-wrap gap-1",
            "aria-hidden": "true",
            "data-agents-bit-cells": !0,
            children: Array.from({ length: i }, (o, d) =>
              e.jsx(
                "span",
                { className: "h-5 w-4 rounded-sm bg-teal-400/80" },
                d,
              ),
            ),
          }),
          s
            ? e.jsxs("p", {
                className:
                  "flex items-center gap-2 font-mono text-lg font-bold",
                children: [
                  e.jsx(W, { right: l }),
                  l
                    ? null
                    : e.jsxs("span", {
                        className: "text-emerald-300",
                        children: [a, " bits"],
                      }),
                ],
              })
            : e.jsxs("button", {
                type: "button",
                className: S,
                onClick: () => {
                  const o = i === a;
                  (c(o), r(o ? 100 : 0));
                },
                children: ["Lock in ", i, " ", i === 1 ? "bit" : "bits"],
              }),
        ],
      });
}
function Nt({ mission: t, done: s, onDone: r }) {
  const [a, l] = j.useState(() => t.statements.map(() => null)),
    c = t.statements.map((n, o) => a[o] === n.side),
    i = a.every((n) => n !== null);
  return e.jsxs("div", {
    className: "space-y-3",
    "data-agents-panel": "sort",
    children: [
      e.jsx("ul", {
        className: "space-y-2",
        children: t.statements.map((n, o) =>
          e.jsxs(
            "li",
            {
              className: `rounded-lg border p-3 ${s ? (c[o] ? "border-emerald-500/50 bg-emerald-500/10" : "border-rose-500/50 bg-rose-500/10") : "border-slate-700 bg-slate-950/60"}`,
              "data-agents-statement": o,
              children: [
                e.jsxs("div", {
                  className:
                    "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                  children: [
                    e.jsxs("p", {
                      className:
                        "flex items-start gap-2 text-sm leading-6 text-slate-100",
                      children: [
                        s ? e.jsx(W, { right: !!c[o] }) : null,
                        e.jsx("span", { children: n.text }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "flex shrink-0 gap-1",
                      role: "group",
                      "aria-label": n.text,
                      children: t.sides.map((d, f) => {
                        const u = a[o] === f,
                          h = s && n.side === f;
                        return e.jsx(
                          "button",
                          {
                            type: "button",
                            "aria-pressed": u,
                            disabled: s,
                            onClick: () =>
                              l((p) => p.map((g, $) => ($ === o ? f : g))),
                            className: `rounded-md border px-3 py-1.5 text-xs font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 ${h ? "border-emerald-400 bg-emerald-400/20 text-emerald-100" : u ? (s ? "border-rose-400 bg-rose-400/20 text-rose-100" : "border-teal-300 bg-teal-400 text-[#020617]") : "border-slate-600 text-slate-300 hover:bg-slate-800 disabled:text-slate-600"}`,
                            children: d,
                          },
                          d,
                        );
                      }),
                    }),
                  ],
                }),
                s
                  ? e.jsx("p", {
                      className: "mt-1 pl-7 text-xs leading-5 text-slate-300",
                      children: n.why,
                    })
                  : null,
              ],
            },
            n.text,
          ),
        ),
      }),
      s
        ? null
        : e.jsx("button", {
            type: "button",
            className: S,
            disabled: !i,
            onClick: () => r(Z(c)),
            children: "File report",
          }),
    ],
  });
}
const te = "secret-agents-fonts",
  At = "https://fonts.googleapis.com/css2?family=Special+Elite&display=swap";
function Lt() {
  j.useEffect(() => {
    if (document.getElementById(te)) return;
    const t = document.createElement("link");
    ((t.id = te),
      (t.rel = "stylesheet"),
      (t.href = At),
      document.head.appendChild(t));
  }, []);
}
const Ct = ["phone", "postcard", "passport", "market"];
function vt(t) {
  switch (t.kind) {
    case "decode":
      return { lines: _(t.word).map((s) => U(s, t.format)) };
    case "hex":
      return { lines: [`${t.letter} = ??`] };
    case "encode":
      return { lines: ["REPLY?"] };
    case "charset":
      return Ct.includes(t.place)
        ? { lines: [], sample: t.sample }
        : { lines: t.sample.split(new RegExp("(?<=,)\\s|\\s(?=\\S+$)")) };
    case "size":
      return { lines: [`${t.characters.toLocaleString("en-GB")} chars`] };
    case "bits":
      return { lines: ["01?", "10?"] };
    case "sort":
      return { lines: ["ASCII", "vs", "UNICODE"] };
  }
}
function It({ mission: t, done: s, onDone: r }) {
  switch (t.kind) {
    case "decode":
      return e.jsx(bt, { mission: t, done: s, onDone: r });
    case "hex":
      return e.jsx(yt, { mission: t, done: s, onDone: r });
    case "encode":
      return e.jsx(mt, { mission: t, done: s, onDone: r });
    case "charset":
      return e.jsx(wt, { mission: t, done: s, onDone: r });
    case "size":
      return e.jsx(St, { mission: t, done: s, onDone: r });
    case "bits":
      return e.jsx(Mt, { mission: t, done: s, onDone: r });
    case "sort":
      return e.jsx(Nt, { mission: t, done: s, onDone: r });
  }
}
function D(t) {
  return t === F ? "cracked" : t > 0 ? "partial" : "blown";
}
const Wt = {
  cracked: {
    stamp: "CRACKED",
    tone: "text-emerald-300",
    box: "border-emerald-500/50 bg-emerald-500/10",
    sr: "Correct.",
  },
  partial: {
    stamp: "PARTLY CRACKED",
    tone: "text-amber-300",
    box: "border-amber-500/50 bg-amber-500/10",
    sr: "Partly correct.",
  },
  blown: {
    stamp: "COVER BLOWN",
    tone: "text-rose-300",
    box: "border-rose-500/50 bg-rose-500/10",
    sr: "Incorrect.",
  },
};
function Et({ results: t, total: s, active: r }) {
  return e.jsxs("div", {
    className: "flex items-center gap-1.5",
    "data-agents-progress": !0,
    children: [
      e.jsx("span", {
        className: "sr-only",
        children: `Mission ${Math.min(r + 1, s)} of ${s}`,
      }),
      Array.from({ length: s }, (a, l) => {
        const c = t[l],
          i = c ? D(c.points) : l === r ? "active" : "pending";
        return e.jsx(
          "span",
          {
            "aria-hidden": "true",
            "data-agents-dot": i,
            className: `h-2.5 rounded-full transition-all ${i === "active" ? "w-6 bg-slate-200" : "w-2.5"} ${i === "cracked" ? "bg-emerald-400" : i === "partial" ? "bg-amber-400" : i === "blown" ? "bg-rose-500" : i === "pending" ? "bg-slate-700" : ""}`,
          },
          l,
        );
      }),
    ],
  });
}
function zt({ mission: t }) {
  const s = vt(t);
  return e.jsxs("figure", {
    className: "agents-photo",
    "data-agents-photo": !0,
    children: [
      e.jsx(ft, { place: t.place, lines: s.lines, sample: s.sample }),
      e.jsxs("figcaption", {
        className:
          "font-typewriter mt-2 flex items-center justify-between gap-2 px-1 text-xs tracking-widest text-slate-400",
        children: [
          e.jsx("span", { children: ae[t.place].name.toUpperCase() }),
          e.jsxs("span", {
            className: "flex items-center gap-1.5 text-rose-400",
            "aria-hidden": "true",
            children: [
              e.jsx("span", {
                className:
                  "agents-rec inline-block h-2 w-2 rounded-full bg-rose-500",
              }),
              "REC",
            ],
          }),
        ],
      }),
    ],
  });
}
function Gt({ random: t } = {}) {
  Lt();
  const [s, r] = j.useState(0),
    [a, l] = j.useState(!1),
    c = j.useMemo(() => Je(t), [s, t]),
    [i, n] = j.useState(0),
    [o, d] = j.useState([]),
    f = j.useRef(null),
    u = j.useRef(null),
    h = c[i],
    p = i >= c.length,
    g = o.length > i,
    $ = o.reduce((N, B) => N + B.points, 0);
  (ze(o.length, c.length, o.filter(G).length),
    j.useEffect(() => {
      a && !p && f.current?.focus();
    }, [i, a, p]));
  function q(N) {
    !h ||
      g ||
      (d((B) => [...B, { mission: h, points: N }]),
      requestAnimationFrame(() =>
        u.current?.querySelector("button")?.focus({ preventScroll: !0 }),
      ));
  }
  function H() {
    n((N) => N + 1);
  }
  function Le() {
    (r((N) => N + 1), n(0), d([]), l(!0));
  }
  return e.jsx("div", {
    className: "secret-agents overflow-hidden rounded-2xl p-4 sm:p-6",
    "data-secret-agents": !0,
    children: a
      ? p
        ? e.jsx(Pt, { results: o, score: $, onAgain: Le })
        : h
          ? e.jsxs("div", {
              className: "space-y-5",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between gap-4",
                  children: [
                    e.jsx(Et, { results: o, total: c.length, active: i }),
                    e.jsxs("p", {
                      className: "font-typewriter text-right text-amber-200",
                      children: [
                        e.jsx("span", {
                          className: "sr-only",
                          children: "Score ",
                        }),
                        e.jsx("span", {
                          className: "text-2xl font-bold",
                          "data-agents-score": !0,
                          children: $,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(
                  "article",
                  {
                    className:
                      "agents-land grid gap-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] md:items-start",
                    "data-agents-mission": h.id,
                    "data-agents-kind": h.kind,
                    children: [
                      e.jsx(zt, { mission: h }),
                      e.jsxs("div", {
                        className: "min-w-0 space-y-4",
                        children: [
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx("h2", {
                                ref: f,
                                tabIndex: -1,
                                className:
                                  "font-typewriter text-2xl text-slate-50 focus:outline-none sm:text-3xl",
                                children: h.title,
                              }),
                              e.jsx("p", {
                                className: "leading-7 text-slate-300",
                                children: h.brief,
                              }),
                            ],
                          }),
                          e.jsx(It, { mission: h, done: g, onDone: q }),
                        ],
                      }),
                    ],
                  },
                  h.id,
                ),
                g
                  ? e.jsx(Tt, {
                      feedbackRef: u,
                      mission: h,
                      points: o[i].points,
                      isLast: i + 1 === c.length,
                      onNext: H,
                    })
                  : null,
              ],
            })
          : null
      : e.jsx(Ot, { onStart: () => l(!0) }),
  });
}
function Tt({ feedbackRef: t, mission: s, points: r, isLast: a, onNext: l }) {
  const c = Wt[D(r)],
    i = Xe(s);
  return e.jsxs("div", {
    ref: t,
    className: `agents-land space-y-3 rounded-xl border-2 p-4 sm:p-5 ${c.box}`,
    "aria-live": "polite",
    "data-agents-feedback": D(r),
    children: [
      e.jsx("span", { className: "sr-only", children: c.sr }),
      e.jsxs("div", {
        className: "flex flex-wrap items-center justify-between gap-3",
        children: [
          e.jsx("span", {
            className: `agents-stamp agents-stamp-in text-lg ${c.tone}`,
            "aria-hidden": "true",
            children: c.stamp,
          }),
          e.jsxs("span", {
            className: `font-typewriter text-xl font-bold ${c.tone}`,
            children: ["+", r],
          }),
        ],
      }),
      i.length
        ? e.jsx("ul", {
            className: "space-y-1 font-mono text-sm leading-6 text-slate-100",
            children: i.map((n, o) => e.jsx("li", { children: n }, o)),
          })
        : null,
      e.jsx("button", {
        type: "button",
        className: `w-full ${S}`,
        onClick: l,
        children: a ? "Final debrief" : "Next mission",
      }),
    ],
  });
}
function Ot({ onStart: t }) {
  return e.jsxs("div", {
    className: "game-landing",
    style: { "--landing-glow": "rgba(45, 212, 191, 0.5)" },
    "data-game-landing": !0,
    "data-agents-intro": !0,
    children: [
      e.jsx(ut, {}),
      e.jsx("h2", {
        className: "sr-only",
        children: "Operation Character Set",
      }),
      e.jsxs("button", {
        type: "button",
        className: `game-landing-start ${S}`,
        onClick: t,
        children: [
          e.jsx(We, { "aria-hidden": "true", className: "h-5 w-5" }),
          "Accept mission",
        ],
      }),
    ],
  });
}
function Pt({ results: t, score: s, onAgain: r }) {
  const a = t.filter(G).length,
    l = t.filter((c) => !G(c));
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "agents-land space-y-6 text-center",
        "aria-live": "polite",
        "data-game-finished": !0,
        "data-agents-results": !0,
        children: [
          e.jsx("span", {
            className:
              "agents-stamp agents-stamp-in whitespace-nowrap text-lg text-rose-400 sm:text-2xl",
            children: "MISSION COMPLETE",
          }),
          e.jsx("h2", {
            className: "font-typewriter text-4xl text-slate-50 sm:text-5xl",
            "data-agents-rank": !0,
            children: Ve(s, t.length),
          }),
          e.jsx("p", {
            className: "font-typewriter text-6xl font-bold text-amber-300",
            children: s,
          }),
          e.jsxs("p", {
            className: "text-slate-300",
            children: [a, " of ", t.length, " messages read."],
          }),
          l.length
            ? e.jsx("ul", {
                className: "mx-auto max-w-2xl space-y-3 text-left",
                children: l.map(({ mission: c, points: i }) =>
                  e.jsxs(
                    "li",
                    {
                      className: `rounded-lg border-l-4 bg-slate-900/70 py-3 pl-4 pr-3 ${i > 0 ? "border-amber-400" : "border-rose-500"}`,
                      "data-agents-review": c.id,
                      children: [
                        e.jsx("p", {
                          className: "font-typewriter text-lg text-slate-50",
                          children: c.title,
                        }),
                        e.jsx("p", {
                          className: "mt-1 text-sm leading-6 text-slate-300",
                          children: et(c),
                        }),
                      ],
                    },
                    c.id,
                  ),
                ),
              })
            : e.jsx("p", {
                className: "text-slate-200",
                children: "Every message read. A perfect record.",
              }),
          e.jsxs("button", {
            type: "button",
            className: S,
            onClick: r,
            children: [
              e.jsx(Ee, { "aria-hidden": "true", className: "h-4 w-4" }),
              "New missions",
            ],
          }),
        ],
      }),
      e.jsx(Te, { game: "secret-agents" }),
    ],
  });
}
export { Gt as default };
