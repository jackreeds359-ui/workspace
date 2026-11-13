import { j as e, r as g } from "./react-vendor-BK1G6oO1.js";
import {
  bW as Ge,
  bZ as Ve,
  P as te,
  aB as Ue,
  b6 as ne,
  bm as Je,
  cd as Ye,
  ae as V,
  R as Ze,
  az as Xe,
  a8 as we,
  a5 as Qe,
} from "./index-DjyiOHey.js";
import { aq as et, aT as tt } from "./GameNotebook-b0Qw2wzd.js";
import { m as U } from "./proxy-DGk2Wawc.js";
import "./ui-components-DeMDYLzO.js";
const v = [8e3, 16e3, 22e3, 32e3, 44e3],
  N = [2, 4, 8, 16],
  H = [1, 5, 10, 30, 60, 100, 300, 600];
function ke({ sampleRate: t, bitDepth: a, duration: s }) {
  return t * a * s;
}
function ve(t) {
  return ke(t) / 8;
}
function W(t) {
  return ve(t) / 1e3;
}
function k(t) {
  const a = Math.round(t * 100) / 100,
    [s, r] = String(a).split("."),
    i = (s ?? "0").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return r ? `${i}.${r}` : i;
}
function F(t) {
  return `${k(t)} KB`;
}
function Ne(t) {
  return t >= 1e3 ? `${F(t)} (${k(t / 1e3)} MB)` : F(t);
}
function K(t) {
  return `${k(t)} Hz`;
}
function E(t) {
  return `${t} bits`;
}
function le(t) {
  return `${k(t)} s`;
}
function J(t) {
  return 2 ** t;
}
function oe(t, a) {
  const s = t.parts.reduce(
    (r, [i, n, l]) => r + n * Math.sin(2 * Math.PI * (i * a + l)),
    0,
  );
  return t.decay ? s * (1 - t.decay * a) : s;
}
function st(t) {
  return Math.round(t / 1e3);
}
function Me(t, a) {
  const s = J(a) - 1,
    r = Math.max(-1, Math.min(1, t));
  return (Math.round(((r + 1) / 2) * s) / s) * 2 - 1;
}
function at(t, a) {
  const s = J(a) - 1,
    r = Math.max(-1, Math.min(1, t));
  return Math.round(((r + 1) / 2) * s);
}
function rt(t, a) {
  return t.toString(2).padStart(a, "0");
}
function ce(t, a, s) {
  const r = st(a);
  return Array.from({ length: r }, (i, n) => {
    const l = (n + 0.5) / r,
      o = oe(t, l);
    return { t: l, measured: o, stored: Me(o, s), level: at(o, s) };
  });
}
function it(t, a, s) {
  const r = ce(t, a, s),
    i = 800;
  let n = 0,
    l = 0;
  for (let u = 0; u < i; u += 1) {
    const x = (u + 0.5) / i,
      j = oe(t, x),
      m = r[Math.min(r.length - 1, Math.floor(x * r.length))];
    ((n += (j - m.measured) ** 2), (l += j * j));
  }
  const o = Math.sqrt(l / i),
    c = Math.sqrt(n / i),
    h = 2 / (J(s) - 1) / Math.sqrt(12);
  return Math.max(0, 100 * (1 - (c + h) / o));
}
function Y(t, a, s) {
  return Math.round(it(t, a, s) * 10) / 10;
}
const nt = {
    "size-up": "File size increases",
    "size-down": "File size decreases",
    "accuracy-up": "Accuracy increases",
    "accuracy-down": "Accuracy decreases",
  },
  lt = [
    "analogue",
    "colour depth",
    "higher",
    "repeated",
    "smaller",
    "binary",
    "digital",
    "lower",
    "sample rate",
    "unique",
    "bit depth",
    "height",
    "measuring",
    "sampling",
    "byte",
    "hertz",
    "recording",
    "seconds",
  ],
  L = [
    {
      id: "doorbell",
      time: "09:00",
      client: "Priya, Chime Co.",
      job: "Doorbell chime",
      brief:
        "A two-second ding-dong for a cheap doorbell. Its memory chip only holds 20 KB, but visitors still need to recognise the chime.",
      duration: 2,
      maxKB: 20,
      minCloseness: 75,
      wave: { parts: [[1.5, 0.85, 0]], decay: 0.35 },
      task: {
        kind: "choice",
        prompt:
          "Priya asks what the studio did to her chime. Which is the correct description of sound sampling?",
        options: [
          "The frequency of the wave is measured a set number of times each second.",
          "The amplitude of the wave is measured at set intervals.",
          "The digital sound wave is measured a set number of times each second.",
          "The analogue sound wave's resolution is measured at set intervals.",
        ],
        answer: "The amplitude of the wave is measured at set intervals.",
        explanation:
          "Sampling measures the amplitude (height) of the analogue wave at set intervals. It is the analogue wave that is measured, not the digital one, and frequency and resolution are not what is measured.",
        source: "OCR June 2024 5(a)(i)",
      },
    },
    {
      id: "voice-note",
      time: "10:30",
      client: "Sam",
      job: "Phone voice note",
      brief:
        "A 30-second voice note to send over mobile data. It must stay under 500 KB, and Sam’s words must be clear.",
      duration: 30,
      maxKB: 500,
      minCloseness: 80,
      wave: {
        parts: [
          [1, 0.45, 0],
          [2, 0.3, 0.2],
          [3.5, 0.12, 0.1],
        ],
      },
      task: {
        kind: "cloze",
        prompt:
          "Sam wants to know how the phone stores the note. Complete the description using the terms. Not all terms will be used.",
        lines: [
          "An {0} sound wave needs to be converted into a digital sound wave.",
          "Sound {1} is when the amplitude of the sound wave is measured at set intervals.",
          "The {2} is the number of times a second the sound wave is measured. This is given in Hertz.",
          "Each amplitude is given a {3} binary number. The number of bits allocated to each sample is the {4}.",
          "The {5} the number of bits, the wider the number of amplitudes can be measured.",
        ],
        answers: [
          "analogue",
          "sampling",
          "sample rate",
          "unique",
          "bit depth",
          "higher",
        ],
        terms: lt,
        explanation:
          "Analogue sound is sampled: its amplitude is measured at set intervals. The sample rate (in Hertz) is how many times a second; each amplitude gets a unique binary number, and the bit depth is the bits per sample. More bits give a wider range of amplitudes.",
        source: "OCR June 2025 1(a)",
      },
    },
    {
      id: "podcast",
      time: "11:45",
      client: "The Byte Size podcast",
      job: "Podcast episode",
      brief:
        "Two hosts talking computer science for 100 seconds. Listeners expect it to sound close to the real voices, and the file must be under 9 000 KB.",
      duration: 100,
      maxKB: 9e3,
      minCloseness: 90,
      wave: {
        parts: [
          [1, 0.42, 0.05],
          [2, 0.32, 0.3],
          [3, 0.14, 0.6],
        ],
      },
      task: {
        kind: "calc",
        prompt:
          "The producer usually records with a sample rate of 44 000 Hz, a bit depth of 2 bytes, and the episode is 100 seconds long. Calculate an estimate of the file size in KB.",
        from: "given",
        given: {
          sampleRate: 44e3,
          bitDepth: 2,
          duration: 100,
          bitDepthInBytes: !0,
        },
        marking: "ocr",
        explanation:
          "File size = sample rate × bit depth × duration. The bit depth is already in bytes, so the answer comes out in bytes: divide by 1 000 for KB (1 024 is also accepted). One mark for any correct stage of working, one for the answer.",
        source: "OCR June 2026 9(a)",
      },
    },
    {
      id: "guitar",
      time: "12:45",
      client: "Leo, guitar teacher",
      job: "Guitar lesson",
      brief:
        "Leo plays a 60-second riff for his students to practise along to. They need to hear every note clearly, and the file must stay under 3 000 KB to upload.",
      duration: 60,
      maxKB: 3e3,
      minCloseness: 85,
      wave: {
        parts: [
          [2, 0.5, 0],
          [4, 0.25, 0.15],
          [1, 0.15, 0.4],
        ],
      },
      task: {
        kind: "order",
        prompt:
          "Leo asks how the computer converts his guitar into a file. Put the three steps in order. Two cards are not part of it: leave them out.",
        steps: [
          "The amplitude (height) of the analogue wave is measured at set intervals (sampled)",
          "Each sample is stored as a binary number",
          "The binary numbers are stored in sequence, in time order",
        ],
        distractors: [
          {
            text: "The frequency and pitch of the wave are measured",
            why: "Sampling measures the amplitude, not the frequency or pitch.",
          },
          {
            text: "Each sample is stored as a pixel",
            why: "Pixels are for images. Sound is stored as samples.",
          },
        ],
        cards: [
          "The amplitude (height) of the analogue wave is measured at set intervals (sampled)",
          "Each sample is stored as a binary number",
          "The binary numbers are stored in sequence, in time order",
          "The frequency and pitch of the wave are measured",
          "Each sample is stored as a pixel",
        ],
        explanation:
          "The analogue wave is sampled: its amplitude (height) is measured at set intervals. Each sample is stored as a binary number, and the binary numbers are stored one after another in time order.",
        source: "OCR June 2022 6(a)(i), Specimen 4(a)",
      },
    },
    {
      id: "radio-advert",
      time: "13:30",
      client: "Crunch Cereal",
      job: "Radio advert",
      brief:
        "A 30-second advert for local radio. The station wants good quality and accepts files up to 1 000 KB.",
      duration: 30,
      maxKB: 1e3,
      minCloseness: 85,
      wave: {
        parts: [
          [1, 0.45, 0],
          [2, 0.3, 0.2],
          [3.5, 0.12, 0.1],
        ],
      },
      task: {
        kind: "effects",
        prompt:
          "The station tries some changes to the advert. Tick one or more boxes on each row to identify the effect(s) each change will have on the sound file.",
        rows: [
          {
            change: "Duration changes from 30 seconds to 60 seconds",
            effects: ["size-up"],
            why: "Twice as many seconds means twice as many samples to store, so the file is bigger. Each sample is just as accurate as before.",
          },
          {
            change: "Sample rate changes from 44 kilohertz to 8 kilohertz",
            effects: ["size-down", "accuracy-down"],
            why: "Fewer samples are taken each second, so fewer are stored (smaller file) and there are bigger gaps between them (less accurate).",
          },
          {
            change: "Bit depth changes from 8 bits to 16 bits",
            effects: ["size-up", "accuracy-up"],
            why: "Each sample uses more bits (bigger file) and a wider range of amplitudes can be stored (more accurate).",
          },
        ],
        source: "OCR June 2022 6(a)(ii)",
      },
    },
    {
      id: "audiobook",
      time: "15:00",
      client: "Marcus, narrator",
      job: "Audiobook chapter",
      brief:
        "A ten-minute (600-second) chapter of a spoken audiobook. The words must be clear, and the chapter must fit in 20 000 KB.",
      duration: 600,
      maxKB: 2e4,
      minCloseness: 80,
      wave: {
        parts: [
          [1, 0.45, 0.1],
          [2, 0.28, 0.35],
          [3.5, 0.13, 0.2],
        ],
      },
      task: {
        kind: "true-false",
        prompt:
          "Marcus has heard some claims about recording. Identify if each statement is true or false.",
        rows: [
          {
            statement:
              "The sample rate is the number of times the amplitude is recorded per second",
            answer: !0,
            why: "Sample rate is samples per second, measured in Hertz.",
          },
          {
            statement:
              "The smaller the bit depth the smaller the range of sounds recorded",
            answer: !0,
            why: "Fewer bits per sample means fewer different amplitudes can be stored.",
          },
          {
            statement: "The larger the sample rate the larger the bit depth",
            answer: !1,
            why: "They are separate settings: the dials turn independently.",
          },
          {
            statement: "The frequency and pitch of the sound wave are measured",
            answer: !1,
            why: "Sampling measures the amplitude of the wave.",
          },
          {
            statement: "Sound is stored using pixels",
            answer: !1,
            why: "Pixels are for images. Sound is stored as samples.",
          },
        ],
        source: "OCR 2019 practice paper 5(b)(iii)",
      },
    },
    {
      id: "film",
      time: "17:00",
      client: "Ada, film director",
      job: "Film soundtrack",
      brief:
        "One minute (60 seconds) of orchestra for the film’s final scene. It must be as close to the original as the studio can record. Size is no problem.",
      duration: 60,
      maxKB: 1e4,
      minCloseness: "best",
      wave: {
        parts: [
          [1.5, 0.45, 0],
          [3, 0.3, 0.3],
          [4.5, 0.15, 0.1],
        ],
      },
      task: {
        kind: "calc",
        prompt:
          "Ada needs the file size of your take for the cue sheet. Calculate it in KB.",
        from: "own",
        marking: "stages",
        explanation:
          "File size = sample rate × bit depth × duration gives bits. Divide by 8 for bytes, then by 1 000 for KB (1 024 is also accepted).",
        source:
          "Spec 1.2.3: sound file size = sample rate × duration (s) × bit depth",
      },
    },
  ];
function Z(t) {
  return t.minCloseness !== "best"
    ? t.minCloseness
    : Math.max(...v.flatMap((a) => N.map((s) => Y(t.wave, a, s))));
}
function Se(t, a, s) {
  return { sampleRate: a, bitDepth: s, duration: t.duration };
}
function $e(t) {
  const a = Z(t),
    s = v.flatMap((r) =>
      N.filter((i) => Y(t.wave, r, i) >= a)
        .map((i) => W(Se(t, r, i)))
        .filter((i) => i <= t.maxKB),
    );
  return Math.min(...s);
}
function Ce(t) {
  const a = $e(t);
  return v.flatMap((s) =>
    N.filter((r) => se(t, s, r).sizeKB === a && se(t, s, r).stars > 0).map(
      (r) => ({ sampleRate: s, bitDepth: r }),
    ),
  );
}
function se(t, a, s) {
  const r = Y(t.wave, a, s),
    i = W(Se(t, a, s)),
    n = r >= Z(t),
    l = i <= t.maxKB;
  return {
    closeness: r,
    sizeKB: i,
    closeEnough: n,
    fits: l,
    stars: n && l ? (i <= $e(t) ? 3 : 2) : 0,
  };
}
function ot(t, a) {
  const s = [];
  return (
    a.closeEnough ||
      s.push(
        "Too far from the original. A higher sample rate measures the amplitude more times each second, and a higher bit depth stores each sample more accurately (a wider range of amplitudes).",
      ),
    a.fits ||
      s.push(
        "The file is too big. Every extra sample per second, and every extra bit per sample, adds to the file size: sample rate × bit depth × duration.",
      ),
    a.stars === 2 &&
      s.push(
        "It meets the brief, but a smaller file would also have passed. Settings higher than the brief needs only make the file bigger.",
      ),
    a.stars === 3 &&
      s.push(
        t.minCloseness === "best"
          ? "The highest sample rate and bit depth give the most accurate recording, at the cost of the largest file."
          : "Close enough to the original with the smallest file that can be: the right trade-off between quality and file size.",
      ),
    s
  );
}
function ct(t, a) {
  const s = t.from === "own" ? a : (t.given ?? null);
  if (!s) return [];
  const r = s.sampleRate,
    i = s.bitDepth,
    n = s.duration,
    l = (d) => [d / 1e3, d / 1024];
  if (t.from === "given" && t.given?.bitDepthInBytes) {
    const d = r * i,
      h = d * n;
    return [
      {
        label: "Bytes each second",
        unit: "bytes",
        accept: [d, d * 8],
        working: `${k(r)} × ${i}`,
      },
      {
        label: "Bytes",
        unit: "bytes",
        accept: [h, h * 8],
        from: (u) => [u * n],
        working: `${k(d)} × ${n}`,
      },
      {
        label: "Kilobytes",
        unit: "KB",
        accept: [h / 1e3, h / 1024],
        from: l,
        working: `${k(h)} ÷ 1 000`,
      },
    ];
  }
  const o = r * i * n,
    c = o / 8;
  return [
    {
      label: "Bits",
      unit: "bits",
      accept: [o],
      working: `${k(r)} × ${i} × ${n}`,
    },
    {
      label: "Bytes",
      unit: "bytes",
      accept: [c],
      from: (d) => [d / 8],
      working: `${k(o)} ÷ 8`,
    },
    {
      label: "Kilobytes",
      unit: "KB",
      accept: [c / 1e3, c / 1024],
      from: l,
      working: `${k(c)} ÷ 1 000`,
    },
  ];
}
function dt(t) {
  const a = t
    .trim()
    .replace(/\s*(kb|mb|bytes?|bits?)\s*\.?$/i, "")
    .replace(/\.$/, "")
    .replace(/[\s,]/g, "");
  return /^-?\d*\.?\d+$/.test(a) ? Number(a) : null;
}
function Q(t, a) {
  return a.some((s) => Math.abs(t - s) <= 0.05 + 1e-9 || Math.round(s) === t);
}
function ht(t, a, s) {
  const r = a.map((c, d) => dt(s[d] ?? "")),
    i = a.map((c, d) => {
      const h = r[d];
      if (h == null) return !1;
      if (Q(h, c.accept)) return !0;
      const u = d > 0 ? r[d - 1] : null;
      return u != null && c.from !== void 0 ? Q(h, c.from(u)) : !1;
    }),
    n = a.length - 1,
    l = r[n],
    o = n >= 0 && l !== null && l !== void 0 && Q(l, a[n].accept);
  if (t.marking === "ocr") {
    const c = i.some(Boolean) ? 1 : 0;
    return { stages: i, finalRight: o, marks: c + (o ? 1 : 0), max: 2 };
  }
  return {
    stages: i,
    finalRight: o,
    marks: i.filter(Boolean).length,
    max: a.length,
  };
}
function ut(t, a) {
  return t.steps.filter((s, r) => a[r] === s).length;
}
function ue(t, a) {
  return t.length === a.length && t.every((s) => a.includes(s));
}
function xt(t) {
  return t >= 5 ? 3 : t >= 3 ? 2 : t >= 2 ? 1 : 0;
}
function mt(t) {
  switch (t.kind) {
    case "choice":
      return 1;
    case "cloze":
      return t.answers.length;
    case "calc":
      return t.marking === "ocr" ? 2 : 3;
    case "order":
      return t.steps.length;
    case "effects":
      return t.rows.length;
    case "true-false":
      return 3;
  }
}
const ze = 50,
  Be = 40;
function We(t = L) {
  return t.reduce((a, s) => a + 3 * ze + mt(s.task) * Be, 0);
}
function ft(t, a = We()) {
  const s = a ? t / a : 0;
  return s >= 0.9
    ? "Head Engineer"
    : s >= 0.7
      ? "Sound Engineer"
      : s >= 0.45
        ? "Studio Assistant"
        : "Studio Runner";
}
function ee(t, a = Math.random) {
  const s = [...t];
  for (let r = s.length - 1; r > 0; r -= 1) {
    const i = Math.floor(a() * (r + 1));
    [s[r], s[i]] = [s[i], s[r]];
  }
  return s;
}
function xe(t = Math.random) {
  return L.map((a) => {
    const { task: s } = a;
    return s.kind === "choice"
      ? { ...a, task: { ...s, options: ee(s.options, t) } }
      : s.kind === "cloze"
        ? { ...a, task: { ...s, terms: ee(s.terms, t) } }
        : s.kind === "order"
          ? { ...a, task: { ...s, cards: ee(s.cards, t) } }
          : a;
  });
}
const pt = 1e3,
  me = 1.2,
  jt = 0.12;
let B = null,
  A = null;
function Te() {
  if (typeof window > "u") return null;
  const t = window;
  return t.AudioContext ?? t.webkitAudioContext ?? null;
}
function gt() {
  return Te() !== null;
}
function fe(t, a) {
  return t.parts.reduce(
    (s, [r, i, n]) => s + i * Math.sin(2 * Math.PI * (r * pt * a + n)),
    0,
  );
}
function bt(t, a, s) {
  const r = Math.floor(a * me),
    i = new Float32Array(r);
  for (let n = 0; n < r; n += 1) {
    const l = n / a;
    let o;
    if (s) {
      const u = Math.floor(l * s.sampleRate) / s.sampleRate;
      o = Me(fe(t, u), s.bitDepth);
    } else o = fe(t, l);
    const c = Math.min(1, l / 0.02),
      d = Math.min(1, (me - l) / 0.15),
      h = t.decay ? Math.exp(-l * 2.2) : 1;
    i[n] = o * jt * c * d * h;
  }
  return i;
}
function pe(t, a) {
  const s = Te();
  if (!s) return !1;
  try {
    ((B ??= new s()), B.resume?.(), A?.stop());
    const r = bt(t, B.sampleRate, a),
      i = B.createBuffer(1, r.length, B.sampleRate);
    i.copyToChannel(r, 0);
    const n = B.createBufferSource();
    return (
      (n.buffer = i),
      n.connect(B.destination),
      (n.onended = () => {
        A === n && (A = null);
      }),
      n.start(),
      (A = n),
      !0
    );
  } catch {
    return !1;
  }
}
function ae() {
  try {
    A?.stop();
  } catch {}
  A = null;
}
const S = 600,
  P = 220,
  yt = 14;
function R(t) {
  return P / 2 - t * (P / 2 - yt);
}
function wt(t) {
  return Array.from({ length: 241 }, (s, r) => {
    const i = r / 240;
    return `${r === 0 ? "M" : "L"}${(i * S).toFixed(1)} ${R(oe(t, i)).toFixed(1)}`;
  }).join(" ");
}
function kt(t) {
  const a = t.length;
  return t
    .map((s, r) => {
      const i = ((r / a) * S).toFixed(1),
        n = (((r + 1) / a) * S).toFixed(1),
        l = R(s).toFixed(1);
      return `${r === 0 ? "M" : "L"}${i} ${l} L${n} ${l}`;
    })
    .join(" ");
}
function Ae({ wave: t, sampleRate: a, bitDepth: s, showDigital: r = !0 }) {
  const i = ce(t, a, s),
    n = J(s),
    l =
      n <= 16
        ? Array.from({ length: n }, (o, c) => -1 + (2 * c) / (n - 1))
        : [];
  return e.jsxs("svg", {
    viewBox: `0 0 ${S} ${P}`,
    className: "studio-scope block h-auto w-full",
    role: "img",
    "aria-label": `The analogue wave with ${i.length} samples on screen, each stored with ${s} bits`,
    "data-studio-scope": !0,
    "data-samples": i.length,
    "data-levels": n,
    children: [
      e.jsx("rect", { width: S, height: P, rx: 10, fill: "#04130f" }),
      Array.from({ length: 11 }, (o, c) =>
        e.jsx(
          "path",
          { d: `M${(c * S) / 10} 0V${P}`, stroke: "#0f2e26", strokeWidth: 1 },
          `v${c}`,
        ),
      ),
      l.map((o) =>
        e.jsx(
          "path",
          {
            d: `M0 ${R(o)}H${S}`,
            stroke: "#1f5c4b",
            strokeWidth: 1,
            strokeDasharray: "3 5",
            "data-level-line": !0,
          },
          o,
        ),
      ),
      e.jsx("path", {
        d: `M0 ${P / 2}H${S}`,
        stroke: "#1f5c4b",
        strokeWidth: 1,
      }),
      e.jsx("path", {
        d: wt(t),
        fill: "none",
        stroke: "#7dd3fc",
        strokeWidth: 3,
        strokeLinecap: "round",
        opacity: 0.85,
      }),
      r
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("path", {
                d: kt(i.map((o) => o.stored)),
                fill: "none",
                stroke: "#fbbf24",
                strokeWidth: 2.5,
                strokeLinejoin: "round",
                className: "studio-steps",
              }),
              i.map((o) =>
                e.jsxs(
                  "g",
                  {
                    children: [
                      e.jsx("path", {
                        d: `M${o.t * S} ${R(o.measured)}V${R(o.stored)}`,
                        stroke: "#fbbf24",
                        strokeWidth: 1,
                        opacity: 0.6,
                      }),
                      e.jsx("circle", {
                        cx: o.t * S,
                        cy: R(o.stored),
                        r: i.length > 30 ? 3 : 4.5,
                        fill: "#fde68a",
                        stroke: "#04130f",
                        strokeWidth: 1.2,
                      }),
                    ],
                  },
                  o.t,
                ),
              ),
            ],
          })
        : null,
    ],
  });
}
function Pe({ wave: t, sampleRate: a, bitDepth: s }) {
  const i = ce(t, a, s).slice(0, s > 8 ? 3 : 5);
  return e.jsxs("p", {
    className: "studio-codes",
    "aria-label": "The first samples stored in binary",
    "data-sample-codes": !0,
    children: [
      i.map((n, l) => e.jsx("code", { children: rt(n.level, s) }, l)),
      e.jsx("span", { "aria-hidden": "true", children: "…" }),
    ],
  });
}
const G = -135,
  re = 270;
function je(t, a) {
  return G + (a > 1 ? (t / (a - 1)) * re : 0);
}
function _({
  name: t,
  stops: a,
  index: s,
  format: r,
  onChange: i,
  disabled: n,
  dataKey: l,
}) {
  const o = g.useRef(null),
    [c, d] = g.useState(!1),
    h = a.length,
    u = (p) => {
      if (n) return;
      const f = Math.max(0, Math.min(h - 1, p));
      f !== s && i(f);
    };
  function x(p) {
    const f = o.current?.getBoundingClientRect();
    if (!f) return;
    const w = p.clientX - (f.left + f.width / 2),
      O = p.clientY - (f.top + f.height / 2),
      D = (Math.atan2(w, -O) * 180) / Math.PI,
      y = Math.max(G, Math.min(G + re, D));
    u(Math.round(((y - G) / re) * (h - 1)));
  }
  function j(p) {
    const w = {
      ArrowUp: s + 1,
      ArrowRight: s + 1,
      PageUp: s + 1,
      ArrowDown: s - 1,
      ArrowLeft: s - 1,
      PageDown: s - 1,
      Home: 0,
      End: h - 1,
    }[p.key];
    w !== void 0 && (p.preventDefault(), u(w));
  }
  const m = a[s];
  return e.jsxs("div", {
    className: "studio-knob",
    "data-knob": l,
    "data-disabled": n || void 0,
    children: [
      e.jsx("span", {
        className: "studio-knob-name",
        id: `studio-knob-${l}`,
        children: t,
      }),
      e.jsxs("div", {
        className: "studio-knob-body",
        children: [
          e.jsx("svg", {
            viewBox: "-60 -60 120 120",
            className: "studio-knob-ticks",
            "aria-hidden": "true",
            children: a.map((p, f) => {
              const w = ((je(f, h) - 90) * Math.PI) / 180;
              return e.jsx(
                "circle",
                {
                  cx: Math.cos(w) * 53,
                  cy: Math.sin(w) * 53,
                  r: f <= s ? 3.4 : 2.6,
                  fill: f <= s ? "#fbbf24" : "#475569",
                },
                p,
              );
            }),
          }),
          e.jsx("div", {
            ref: o,
            role: "slider",
            tabIndex: n ? -1 : 0,
            "aria-labelledby": `studio-knob-${l}`,
            "aria-valuemin": 0,
            "aria-valuemax": h - 1,
            "aria-valuenow": s,
            "aria-valuetext": r(m),
            "aria-disabled": n || void 0,
            className: "studio-knob-cap",
            "data-dragging": c || void 0,
            style: { transform: `rotate(${je(s, h)}deg)` },
            onKeyDown: j,
            onPointerDown: (p) => {
              n ||
                (p.currentTarget.setPointerCapture?.(p.pointerId), d(!0), x(p));
            },
            onPointerMove: (p) => {
              c && x(p);
            },
            onPointerUp: () => d(!1),
            onPointerCancel: () => d(!1),
            children: e.jsx("span", {
              className: "studio-knob-pointer",
              "aria-hidden": "true",
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "studio-knob-row",
        children: [
          e.jsx("button", {
            type: "button",
            className: "studio-step",
            "aria-label": `Lower ${t.toLowerCase()}`,
            onClick: () => u(s - 1),
            disabled: n || s === 0,
            children: e.jsx(Ge, {
              "aria-hidden": "true",
              className: "h-4 w-4",
            }),
          }),
          e.jsx("output", {
            className: "studio-knob-value",
            "data-knob-value": m,
            children: r(m),
          }),
          e.jsx("button", {
            type: "button",
            className: "studio-step",
            "aria-label": `Raise ${t.toLowerCase()}`,
            onClick: () => u(s + 1),
            disabled: n || s === h - 1,
            children: e.jsx(Ve, {
              "aria-hidden": "true",
              className: "h-4 w-4",
            }),
          }),
        ],
      }),
    ],
  });
}
function ge({
  name: t,
  value: a,
  shown: s,
  scale: r,
  marker: i,
  good: n,
  dataKey: l,
}) {
  const o = Math.max(0, Math.min(100, (a / r) * 100));
  return e.jsxs("div", {
    className: "studio-meter",
    "data-meter": l,
    "data-good": n === null ? void 0 : String(n),
    children: [
      e.jsxs("div", {
        className: "studio-meter-head",
        children: [
          e.jsx("span", { children: t }),
          e.jsx("strong", { children: s }),
        ],
      }),
      e.jsxs("div", {
        className: "studio-meter-track",
        children: [
          e.jsx("div", {
            className: "studio-meter-fill",
            style: { width: `${o}%` },
          }),
          i
            ? e.jsx("div", {
                className: "studio-meter-marker",
                "data-side": i.at / r < 0.5 ? "left" : "right",
                style: { left: `${Math.min(100, (i.at / r) * 100)}%` },
                children: e.jsx("span", { children: i.label }),
              })
            : null,
        ],
      }),
    ],
  });
}
function Re({ sampleRate: t, bitDepth: a, duration: s }) {
  const r = { sampleRate: t, bitDepth: a, duration: s };
  return e.jsxs("p", {
    className: "studio-formula",
    "data-studio-formula": !0,
    children: [
      e.jsxs("span", { children: [K(t), " × ", E(a), " × ", le(s)] }),
      e.jsxs("span", { children: ["= ", k(ke(r)), " bits"] }),
      e.jsxs("span", { children: ["= ", k(ve(r)), " bytes"] }),
      e.jsxs("span", {
        className: "text-amber-200",
        children: ["= ", Ne(W(r))],
      }),
    ],
  });
}
function Fe({
  wave: t,
  sampleRate: a,
  bitDepth: s,
  duration: r,
  target: i,
  maxKB: n,
  sizeScale: l,
}) {
  const o = Y(t, a, s),
    c = W({ sampleRate: a, bitDepth: s, duration: r });
  return e.jsxs("div", {
    className: "grid gap-3 sm:grid-cols-2",
    children: [
      e.jsx(ge, {
        name: "Closeness to the original",
        value: o,
        shown: `${o.toFixed(1)}%`,
        scale: 100,
        marker: i === void 0 ? void 0 : { at: i, label: `${i}%` },
        good: i === void 0 ? null : o >= i,
        dataKey: "closeness",
      }),
      e.jsx(ge, {
        name: "File size",
        value: c,
        shown: Ne(c),
        scale: l,
        marker: n === void 0 ? void 0 : { at: n, label: `max ${F(n)}` },
        good: n === void 0 ? null : c <= n,
        dataKey: "size",
      }),
    ],
  });
}
function Ke({ wave: t, sampleRate: a, bitDepth: s }) {
  const [r] = g.useState(gt);
  return r
    ? e.jsxs("div", {
        className: "flex flex-wrap gap-2",
        role: "group",
        "aria-label": "Listen",
        "data-listen": !0,
        children: [
          e.jsxs("button", {
            type: "button",
            className: "studio-listen",
            onClick: () => pe(t, null),
            children: [
              e.jsx(te, { "aria-hidden": "true", className: "h-4 w-4" }),
              "Original",
            ],
          }),
          e.jsxs("button", {
            type: "button",
            className: "studio-listen",
            onClick: () => pe(t, { sampleRate: a, bitDepth: s }),
            children: [
              e.jsx(te, { "aria-hidden": "true", className: "h-4 w-4" }),
              "Your take",
            ],
          }),
          e.jsx("button", {
            type: "button",
            className: "studio-listen",
            onClick: ae,
            "aria-label": "Stop",
            children: e.jsx(Ue, {
              "aria-hidden": "true",
              className: "h-3.5 w-3.5",
            }),
          }),
        ],
      })
    : null;
}
const $ =
  "studio-primary inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300";
function X({ right: t }) {
  return t
    ? e.jsx(ne, {
        "aria-label": "right",
        className: "h-4 w-4 shrink-0 text-emerald-300",
      })
    : e.jsx(Je, {
        "aria-label": "wrong",
        className: "h-4 w-4 shrink-0 text-rose-300",
      });
}
function vt({ task: t, onMarked: a, done: s }) {
  const [r, i] = g.useState([]),
    n = r.length === t.steps.length;
  return e.jsxs("div", {
    className: "space-y-4",
    "data-task-order": !0,
    children: [
      e.jsx("ol", {
        className: "space-y-2",
        "aria-label": "Your order",
        "data-order-picked": !0,
        children: t.steps.map((l, o) => {
          const c = r[o],
            d = s ? c === l : null;
          return e.jsxs(
            "li",
            {
              className: "flex items-start gap-2",
              children: [
                e.jsx("span", {
                  className: "studio-order-number",
                  "aria-hidden": "true",
                  children: o + 1,
                }),
                c
                  ? e.jsxs("button", {
                      type: "button",
                      className: "studio-order-slot",
                      disabled: s,
                      "aria-label": `Step ${o + 1}: ${c}. Remove`,
                      onClick: () => i(r.filter((h, u) => u < o)),
                      "data-right": d === null ? void 0 : String(d),
                      children: [
                        d === null ? null : e.jsx(X, { right: d }),
                        e.jsx("span", { children: c }),
                      ],
                    })
                  : e.jsx("span", {
                      className: "studio-order-slot",
                      "data-empty": "true",
                      children: e.jsx("span", {
                        className: "sr-only",
                        children: `Step ${o + 1}, empty`,
                      }),
                    }),
              ],
            },
            l,
          );
        }),
      }),
      s
        ? e.jsxs("div", {
            className: "space-y-2",
            "data-order-answer": !0,
            children: [
              t.steps.some((l, o) => r[o] !== l)
                ? e.jsx("ol", {
                    className:
                      "studio-paper list-inside list-decimal space-y-1 text-sm",
                    children: t.steps.map((l) =>
                      e.jsx("li", { children: l }, l),
                    ),
                  })
                : null,
              t.distractors.map((l) =>
                e.jsxs(
                  "p",
                  {
                    className: "studio-why",
                    children: [e.jsx("s", { children: l.text }), ": ", l.why],
                  },
                  l.text,
                ),
              ),
            ],
          })
        : e.jsxs(e.Fragment, {
            children: [
              e.jsx("div", {
                className: "grid gap-2 sm:grid-cols-2",
                role: "group",
                "aria-label": "Cards",
                "data-order-cards": !0,
                children: t.cards.map((l) =>
                  e.jsx(
                    "button",
                    {
                      type: "button",
                      className: "studio-option",
                      disabled: n || r.includes(l),
                      onClick: () => i([...r, l]),
                      children: l,
                    },
                    l,
                  ),
                ),
              }),
              e.jsx("button", {
                type: "button",
                className: $,
                disabled: !n,
                onClick: () => a({ marks: ut(t, r), max: t.steps.length }),
                children: "Hand it in",
              }),
            ],
          }),
    ],
  });
}
function Nt({ task: t, onMarked: a, done: s }) {
  const [r, i] = g.useState(null);
  return e.jsx("div", {
    className: "grid gap-2",
    role: "group",
    "aria-label": "Tick one box",
    "data-task-choice": !0,
    children: t.options.map((n) => {
      const l = r === n,
        o = s && n === t.answer;
      return e.jsxs(
        "button",
        {
          type: "button",
          disabled: s,
          onClick: () => {
            (i(n), a({ marks: n === t.answer ? 1 : 0, max: 1 }));
          },
          "data-option-state": o ? "answer" : l ? "wrong" : void 0,
          className: "studio-option",
          children: [
            e.jsx("span", {
              className: "studio-tickbox",
              "aria-hidden": "true",
              children: l || o ? e.jsx(ne, { className: "h-3.5 w-3.5" }) : null,
            }),
            e.jsx("span", { children: n }),
          ],
        },
        n,
      );
    }),
  });
}
function be(t) {
  return t.split(/(\{\d+\})/).map((a) => {
    const s = /^\{(\d+)\}$/.exec(a);
    return s ? Number(s[1]) : a;
  });
}
function Mt({ task: t, onMarked: a, done: s }) {
  const [r, i] = g.useState(() => t.answers.map(() => null)),
    [n, l] = g.useState(0),
    o = new Set(r.filter((x) => x !== null)),
    c = r.every((x) => x !== null);
  function d(x) {
    if (s) return;
    const j = r[n] === null ? n : r.findIndex((f) => f === null);
    if (j < 0) return;
    const m = r.map((f, w) => (w === j ? x : f));
    i(m);
    const p = m.findIndex((f) => f === null);
    l(p < 0 ? j : p);
  }
  function h(x) {
    s || (r[x] !== null && i(r.map((j, m) => (m === x ? null : j))), l(x));
  }
  function u() {
    const x = r.filter((j, m) => j === t.answers[m]).length;
    a({ marks: x, max: t.answers.length });
  }
  return e.jsxs("div", {
    className: "space-y-4",
    "data-task-cloze": !0,
    children: [
      e.jsx("div", {
        className: "studio-paper space-y-2.5",
        children: t.lines.map((x, j) =>
          e.jsxs(
            "p",
            {
              className: "leading-9",
              children: [
                be(x).map((m, p) => {
                  if (typeof m == "string")
                    return e.jsx("span", { children: m }, p);
                  const f = r[m],
                    w = s ? f === t.answers[m] : null;
                  return e.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "studio-gap",
                      onClick: () => h(m),
                      disabled: s,
                      "aria-label": f
                        ? `Gap ${m + 1}: ${f}`
                        : `Gap ${m + 1}, empty`,
                      "data-gap": m,
                      "data-active": !s && n === m ? "true" : void 0,
                      "data-right": w === null ? void 0 : String(w),
                      children: [
                        f ?? " ",
                        s && !w
                          ? e.jsx("s", {
                              className: "sr-only",
                              children: "wrong",
                            })
                          : null,
                      ],
                    },
                    p,
                  );
                }),
                s
                  ? be(x)
                      .filter(
                        (m) => typeof m == "number" && r[m] !== t.answers[m],
                      )
                      .map((m) =>
                        e.jsx(
                          "span",
                          { className: "studio-fix", children: t.answers[m] },
                          `fix${m}`,
                        ),
                      )
                  : null,
              ],
            },
            j,
          ),
        ),
      }),
      s
        ? null
        : e.jsxs(e.Fragment, {
            children: [
              e.jsx("div", {
                className: "flex flex-wrap gap-2",
                role: "group",
                "aria-label": "Terms",
                "data-cloze-terms": !0,
                children: t.terms.map((x) =>
                  e.jsx(
                    "button",
                    {
                      type: "button",
                      className: "studio-chip",
                      disabled: o.has(x),
                      onClick: () => d(x),
                      children: x,
                    },
                    x,
                  ),
                ),
              }),
              e.jsx("button", {
                type: "button",
                className: $,
                disabled: !c,
                onClick: u,
                children: "Hand it in",
              }),
            ],
          }),
    ],
  });
}
function St({ task: t, onMarked: a, done: s, own: r }) {
  const i = ct(t, r),
    [n, l] = g.useState(() => i.map(() => "")),
    o = t.from === "own" ? r : (t.given ?? null),
    c = n.every((u) => u.trim() !== ""),
    d = ht(t, i, n);
  function h() {
    a({ marks: d.marks, max: d.max });
  }
  return e.jsxs("div", {
    className: "space-y-4",
    "data-task-calc": !0,
    children: [
      o
        ? e.jsxs("dl", {
            className: "studio-given",
            "data-calc-given": !0,
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("dt", { children: "Sample rate" }),
                  e.jsxs("dd", { children: [k(o.sampleRate), " Hz"] }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("dt", { children: "Bit depth" }),
                  e.jsxs("dd", {
                    children: [
                      o.bitDepth,
                      " ",
                      t.given?.bitDepthInBytes && t.from === "given"
                        ? "bytes"
                        : "bits",
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("dt", { children: "Duration" }),
                  e.jsxs("dd", { children: [k(o.duration), " s"] }),
                ],
              }),
            ],
          })
        : null,
      e.jsx("p", {
        className: "font-mono text-sm text-amber-100",
        children: "file size = sample rate × bit depth × duration",
      }),
      e.jsxs("form", {
        className: "space-y-3",
        onSubmit: (u) => {
          (u.preventDefault(), c && !s && h());
        },
        children: [
          i.map((u, x) => {
            const j = s ? (d.stages[x] ?? !1) : null;
            return e.jsxs(
              "div",
              {
                className: "studio-calc-row",
                "data-calc-step": x,
                "data-right": j === null ? void 0 : String(j),
                children: [
                  e.jsx("label", {
                    htmlFor: `studio-calc-${x}`,
                    children: u.label,
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("input", {
                        id: `studio-calc-${x}`,
                        inputMode: "decimal",
                        autoComplete: "off",
                        value: n[x] ?? "",
                        readOnly: s,
                        onChange: (m) =>
                          l(n.map((p, f) => (f === x ? m.target.value : p))),
                        className: "studio-input",
                      }),
                      e.jsx("span", {
                        className: "w-12 text-sm text-slate-300",
                        children: u.unit,
                      }),
                      j === null ? null : e.jsx(X, { right: j }),
                    ],
                  }),
                  s
                    ? e.jsxs("p", {
                        className: "studio-working",
                        children: [
                          u.working,
                          " = ",
                          k(u.accept[0]),
                          u.unit === "KB"
                            ? ` (or ÷ 1 024 = ${k(u.accept[1])})`
                            : "",
                        ],
                      })
                    : null,
                ],
              },
              u.label,
            );
          }),
          s
            ? null
            : e.jsx("button", {
                type: "submit",
                className: $,
                disabled: !c,
                children: "Hand it in",
              }),
        ],
      }),
    ],
  });
}
const $t = ["size-up", "size-down", "accuracy-up", "accuracy-down"];
function Ct({ task: t, onMarked: a, done: s }) {
  const [r, i] = g.useState(() => t.rows.map(() => [])),
    n = r.every((o) => o.length > 0);
  function l(o, c) {
    s ||
      i(
        r.map((d, h) =>
          h !== o ? d : d.includes(c) ? d.filter((u) => u !== c) : [...d, c],
        ),
      );
  }
  return e.jsxs("div", {
    className: "space-y-3",
    "data-task-effects": !0,
    children: [
      t.rows.map((o, c) => {
        const d = s ? ue(r[c] ?? [], o.effects) : null;
        return e.jsxs(
          "div",
          {
            className: "studio-paper",
            "data-effects-row": c,
            "data-right": d === null ? void 0 : String(d),
            children: [
              e.jsxs("p", {
                className: "mb-2 flex items-start gap-2 font-semibold",
                children: [
                  d === null ? null : e.jsx(X, { right: d }),
                  o.change,
                ],
              }),
              e.jsx("div", {
                className: "grid grid-cols-2 gap-2",
                role: "group",
                "aria-label": o.change,
                children: $t.map((h) => {
                  const u = r[c]?.includes(h) ?? !1,
                    x = o.effects.includes(h);
                  return e.jsxs(
                    "button",
                    {
                      type: "button",
                      "aria-pressed": u,
                      disabled: s,
                      onClick: () => l(c, h),
                      className: "studio-toggle",
                      "data-effect": h,
                      "data-should": s ? String(x) : void 0,
                      children: [
                        e.jsx("span", {
                          className: "studio-tickbox",
                          "aria-hidden": "true",
                          children: u
                            ? e.jsx(ne, { className: "h-3.5 w-3.5" })
                            : null,
                        }),
                        nt[h],
                      ],
                    },
                    h,
                  );
                }),
              }),
              s
                ? e.jsx("p", { className: "studio-why", children: o.why })
                : null,
            ],
          },
          o.change,
        );
      }),
      s
        ? null
        : e.jsx("button", {
            type: "button",
            className: $,
            disabled: !n,
            onClick: () =>
              a({
                marks: t.rows.filter((o, c) => ue(r[c] ?? [], o.effects))
                  .length,
                max: t.rows.length,
              }),
            children: "Hand it in",
          }),
    ],
  });
}
function zt({ task: t, onMarked: a, done: s }) {
  const [r, i] = g.useState(() => t.rows.map(() => null)),
    n = r.every((l) => l !== null);
  return e.jsxs("div", {
    className: "space-y-3",
    "data-task-true-false": !0,
    children: [
      t.rows.map((l, o) => {
        const c = s ? r[o] === l.answer : null;
        return e.jsxs(
          "div",
          {
            className: "studio-paper",
            "data-tf-row": o,
            "data-right": c === null ? void 0 : String(c),
            children: [
              e.jsxs("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                  e.jsxs("p", {
                    className: "flex min-w-0 flex-1 basis-56 items-start gap-2",
                    children: [
                      c === null ? null : e.jsx(X, { right: c }),
                      l.statement,
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex gap-2",
                    role: "radiogroup",
                    "aria-label": l.statement,
                    children: [!0, !1].map((d) =>
                      e.jsx(
                        "button",
                        {
                          type: "button",
                          role: "radio",
                          "aria-checked": r[o] === d,
                          disabled: s,
                          onClick: () => i(r.map((h, u) => (u === o ? d : h))),
                          className: "studio-toggle w-20 justify-center",
                          "data-should": s ? String(d === l.answer) : void 0,
                          children: d ? "True" : "False",
                        },
                        String(d),
                      ),
                    ),
                  }),
                ],
              }),
              s
                ? e.jsx("p", { className: "studio-why", children: l.why })
                : null,
            ],
          },
          l.statement,
        );
      }),
      s
        ? null
        : e.jsx("button", {
            type: "button",
            className: $,
            disabled: !n,
            onClick: () =>
              a({
                marks: xt(t.rows.filter((l, o) => r[o] === l.answer).length),
                max: 3,
              }),
            children: "Hand it in",
          }),
    ],
  });
}
function Bt({ task: t, own: a, onMarked: s, done: r }) {
  switch (t.kind) {
    case "choice":
      return e.jsx(Nt, { task: t, onMarked: s, done: r });
    case "cloze":
      return e.jsx(Mt, { task: t, onMarked: s, done: r });
    case "calc":
      return e.jsx(St, { task: t, onMarked: s, done: r, own: a });
    case "effects":
      return e.jsx(Ct, { task: t, onMarked: s, done: r });
    case "true-false":
      return e.jsx(zt, { task: t, onMarked: s, done: r });
    case "order":
      return e.jsx(vt, { task: t, onMarked: s, done: r });
  }
}
const b = "#1c1917",
  ie = ["#f1c9a5", "#d9a57a", "#a8714a", "#7a4b2c"],
  ye = ["#2b1d14", "#5b3a24", "#c2873e", "#111827"];
function Wt({ flip: t }) {
  const a = t ? -1.2 : 1.2;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("circle", { cx: -4 + a, cy: -45, r: 1.5, fill: b }),
      e.jsx("circle", { cx: 4 + a, cy: -45, r: 1.5, fill: b }),
      e.jsx("path", {
        d: `M${-3 + a} -38.5 q3 1.8 6 0`,
        fill: "none",
        stroke: b,
        strokeWidth: 1.1,
        strokeLinecap: "round",
      }),
    ],
  });
}
function C({
  x: t,
  y: a,
  s = 1,
  shirt: r,
  skin: i = 0,
  hair: n = 0,
  flip: l,
  headphones: o,
  long: c,
}) {
  return e.jsxs("g", {
    transform: `translate(${t} ${a}) scale(${l ? -s : s} ${s})`,
    children: [
      c
        ? e.jsx("path", { d: "M-15 -46q-3 22 4 30h22q7-8 4-30z", fill: ye[n] })
        : null,
      e.jsx("path", {
        d: "M-24 0v-12c0-11 10-19 24-19s24 8 24 19V0z",
        fill: r,
      }),
      e.jsx("rect", { x: -5, y: -35, width: 10, height: 8, fill: ie[i] }),
      e.jsx("circle", { cx: 0, cy: -44, r: 13, fill: ie[i] }),
      e.jsx("path", {
        d: "M-13.5 -45a13.5 13.5 0 0 1 27 0q-8-7-14-6t-13 6z",
        fill: ye[n],
      }),
      e.jsx(Wt, { flip: l }),
      o
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("path", {
                d: "M-15 -46a15 15 0 0 1 30 0",
                fill: "none",
                stroke: "#111827",
                strokeWidth: 3,
              }),
              e.jsx("rect", {
                x: -18,
                y: -50,
                width: 6,
                height: 11,
                rx: 2.5,
                fill: "#111827",
              }),
              e.jsx("rect", {
                x: 12,
                y: -50,
                width: 6,
                height: 11,
                rx: 2.5,
                fill: "#111827",
              }),
            ],
          })
        : null,
    ],
  });
}
function q({ x: t, y: a, color: s = "#94a3b8" }) {
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: t - 6,
        y: a - 10,
        width: 12,
        height: 20,
        rx: 6,
        fill: s,
        stroke: b,
        strokeWidth: 1.2,
      }),
      e.jsx("path", {
        d: `M${t - 4} ${a - 5}h8M${t - 4} ${a}h8M${t - 4} ${a + 5}h8`,
        stroke: b,
        strokeWidth: 0.8,
        opacity: 0.5,
      }),
      e.jsx("rect", {
        x: t - 1.5,
        y: a + 10,
        width: 3,
        height: 10,
        fill: "#475569",
      }),
    ],
  });
}
function de({ x: t, y: a, color: s = "#fbbf24", flip: r }) {
  return e.jsxs("g", {
    transform: `translate(${t} ${a}) scale(${r ? -1 : 1} 1)`,
    fill: "none",
    stroke: s,
    strokeWidth: 2.2,
    strokeLinecap: "round",
    children: [
      e.jsx("path", { d: "M0 -6q5 6 0 12" }),
      e.jsx("path", { d: "M6 -11q9 11 0 22" }),
      e.jsx("path", { d: "M12 -16q13 16 0 32" }),
    ],
  });
}
function z({ x: t, y: a, color: s = "#fbbf24" }) {
  return e.jsxs("g", {
    fill: s,
    stroke: s,
    children: [
      e.jsx("ellipse", {
        cx: t,
        cy: a,
        rx: 4,
        ry: 3,
        transform: `rotate(-20 ${t} ${a})`,
      }),
      e.jsx("path", {
        d: `M${t + 3.5} ${a - 1}v-14l7 3`,
        fill: "none",
        strokeWidth: 1.6,
        strokeLinecap: "round",
      }),
    ],
  });
}
function T({ children: t, label: a }) {
  return e.jsx("svg", {
    viewBox: "0 0 320 200",
    role: "img",
    "aria-label": a,
    children: t,
  });
}
function Tt() {
  return e.jsxs(T, {
    label:
      "A front door with a small doorbell chime on the wall, playing ding-dong",
    children: [
      e.jsx("rect", { width: 320, height: 200, fill: "#bfdbfe" }),
      e.jsx("rect", { y: 150, width: 320, height: 50, fill: "#86efac" }),
      e.jsx("rect", { x: 30, y: 30, width: 260, height: 130, fill: "#fde7c4" }),
      Array.from({ length: 6 }, (t, a) =>
        e.jsx(
          "path",
          { d: `M30 ${48 + a * 20}h260`, stroke: "#e6c79b", strokeWidth: 1.5 },
          a,
        ),
      ),
      e.jsx("path", { d: "M20 34l140-30 140 30z", fill: "#b45309" }),
      e.jsx("rect", {
        x: 120,
        y: 58,
        width: 64,
        height: 102,
        rx: 3,
        fill: "#be123c",
        stroke: b,
        strokeWidth: 1.5,
      }),
      e.jsx("rect", {
        x: 128,
        y: 68,
        width: 48,
        height: 34,
        rx: 2,
        fill: "#9f1239",
      }),
      e.jsx("rect", {
        x: 128,
        y: 110,
        width: 48,
        height: 40,
        rx: 2,
        fill: "#9f1239",
      }),
      e.jsx("circle", { cx: 172, cy: 112, r: 3, fill: "#fbbf24" }),
      e.jsx("rect", { x: 112, y: 156, width: 80, height: 6, fill: "#78716c" }),
      e.jsx("rect", {
        x: 202,
        y: 86,
        width: 30,
        height: 40,
        rx: 6,
        fill: "#f8fafc",
        stroke: b,
        strokeWidth: 1.5,
      }),
      Array.from({ length: 4 }, (t, a) =>
        e.jsx(
          "path",
          {
            d: `M208 ${95 + a * 6}h18`,
            stroke: "#94a3b8",
            strokeWidth: 2,
            strokeLinecap: "round",
          },
          a,
        ),
      ),
      e.jsx(de, { x: 238, y: 104 }),
      e.jsx(z, { x: 268, y: 80 }),
      e.jsx(z, { x: 282, y: 108, color: "#f59e0b" }),
      e.jsx("circle", {
        cx: 104,
        cy: 104,
        r: 5,
        fill: "#f8fafc",
        stroke: b,
        strokeWidth: 1.2,
      }),
      e.jsx("circle", { cx: 104, cy: 104, r: 2, fill: "#fbbf24" }),
      e.jsx(C, {
        x: 66,
        y: 200,
        s: 1.2,
        shirt: "#0ea5e9",
        skin: 2,
        hair: 0,
        long: !0,
      }),
      e.jsx("rect", {
        x: 44,
        y: 168,
        width: 34,
        height: 22,
        rx: 2,
        fill: "#d6a76a",
        stroke: b,
        strokeWidth: 1.2,
      }),
      e.jsx("path", { d: "M44 175h34", stroke: "#a16207", strokeWidth: 1.4 }),
    ],
  });
}
function At() {
  return e.jsxs(T, {
    label: "Sam on a bus, holding a phone up to record a voice note",
    children: [
      e.jsx("rect", { width: 320, height: 200, fill: "#e2e8f0" }),
      e.jsx("rect", { x: 0, y: 20, width: 320, height: 70, fill: "#7dd3fc" }),
      [0, 1, 2].map((t) =>
        e.jsx(
          "rect",
          { x: 10 + t * 105, y: 20, width: 8, height: 70, fill: "#475569" },
          t,
        ),
      ),
      e.jsx("path", {
        d: "M0 70q40-18 80-4t90-10 80 6 70-4v22H0z",
        fill: "#86efac",
      }),
      e.jsx("rect", { x: 40, y: 50, width: 30, height: 28, fill: "#94a3b8" }),
      e.jsx("rect", { x: 210, y: 40, width: 24, height: 38, fill: "#a8a29e" }),
      e.jsx("rect", { y: 90, width: 320, height: 8, fill: "#475569" }),
      e.jsx("rect", {
        x: 180,
        y: 110,
        width: 110,
        height: 70,
        rx: 10,
        fill: "#1d4ed8",
      }),
      e.jsx("rect", {
        x: 186,
        y: 80,
        width: 98,
        height: 40,
        rx: 8,
        fill: "#2563eb",
      }),
      e.jsx("rect", { y: 176, width: 320, height: 24, fill: "#64748b" }),
      e.jsx(C, { x: 120, y: 200, s: 1.45, shirt: "#f97316", skin: 1, hair: 3 }),
      e.jsx("rect", {
        x: 150,
        y: 108,
        width: 20,
        height: 34,
        rx: 4,
        fill: "#111827",
        transform: "rotate(-12 160 125)",
      }),
      e.jsx("rect", {
        x: 153,
        y: 112,
        width: 14,
        height: 24,
        rx: 2,
        fill: "#38bdf8",
        transform: "rotate(-12 160 125)",
      }),
      e.jsx("circle", { cx: 173, cy: 150, r: 8, fill: ie[1] }),
      e.jsx("rect", {
        x: 196,
        y: 20,
        width: 110,
        height: 40,
        rx: 18,
        fill: "#22c55e",
        stroke: b,
        strokeWidth: 1.2,
      }),
      e.jsx("path", { d: "M212 60l-8 12 18-12z", fill: "#22c55e" }),
      e.jsx("circle", { cx: 216, cy: 40, r: 8, fill: "#f8fafc" }),
      e.jsx("path", { d: "M213 35l7 5-7 5z", fill: "#22c55e" }),
      [4, 10, 6, 14, 9, 12, 5, 11, 7, 13, 6, 9, 4].map((t, a) =>
        e.jsx(
          "rect",
          {
            x: 230 + a * 5.6,
            y: 40 - t / 2,
            width: 3,
            height: t,
            rx: 1.5,
            fill: "#f8fafc",
          },
          a,
        ),
      ),
    ],
  });
}
function Pt() {
  return e.jsxs(T, {
    label: "Two podcast hosts at a table, talking into microphones",
    children: [
      e.jsx("rect", { width: 320, height: 200, fill: "#312e81" }),
      Array.from({ length: 8 }, (t, a) =>
        Array.from({ length: 3 }, (s, r) =>
          e.jsx(
            "path",
            {
              d: `M${a * 40} ${r * 40}l20 20-20 20-20-20z`,
              fill: "#3730a3",
              transform: "translate(20 10)",
            },
            `${a}-${r}`,
          ),
        ),
      ),
      e.jsx("rect", {
        x: 110,
        y: 14,
        width: 100,
        height: 30,
        rx: 6,
        fill: "#facc15",
      }),
      e.jsx("text", {
        x: 160,
        y: 34,
        textAnchor: "middle",
        fontSize: 15,
        fontWeight: 800,
        fill: b,
        fontFamily: "system-ui, sans-serif",
        children: "BYTE SIZE",
      }),
      e.jsx(C, {
        x: 78,
        y: 168,
        s: 1.35,
        shirt: "#ec4899",
        skin: 0,
        hair: 2,
        headphones: !0,
        long: !0,
      }),
      e.jsx(C, {
        x: 244,
        y: 168,
        s: 1.35,
        shirt: "#14b8a6",
        skin: 3,
        hair: 3,
        headphones: !0,
        flip: !0,
      }),
      e.jsx("path", { d: "M118 128l14-24", stroke: "#111827", strokeWidth: 3 }),
      e.jsx(q, { x: 128, y: 110, color: "#e2e8f0" }),
      e.jsx("path", {
        d: "M204 128l-14-24",
        stroke: "#111827",
        strokeWidth: 3,
      }),
      e.jsx(q, { x: 192, y: 110, color: "#e2e8f0" }),
      e.jsx("rect", {
        x: 20,
        y: 150,
        width: 280,
        height: 14,
        rx: 3,
        fill: "#a16207",
      }),
      e.jsx("rect", { x: 20, y: 164, width: 280, height: 36, fill: "#854d0e" }),
      e.jsx("rect", {
        x: 140,
        y: 128,
        width: 40,
        height: 22,
        rx: 2,
        fill: "#1f2937",
      }),
      e.jsx("path", { d: "M134 150h52l-4-4h-44z", fill: "#94a3b8" }),
      e.jsx(z, { x: 156, y: 66, color: "#f9a8d4" }),
      e.jsx(z, { x: 174, y: 78, color: "#5eead4" }),
    ],
  });
}
function Rt() {
  return e.jsxs(T, {
    label:
      "Leo playing an acoustic guitar into a microphone, with a laptop recording beside him",
    children: [
      e.jsx("rect", { width: 320, height: 200, fill: "#fef9c3" }),
      e.jsx("rect", { y: 150, width: 320, height: 50, fill: "#a16207" }),
      Array.from({ length: 8 }, (t, a) =>
        e.jsx(
          "path",
          { d: `M${a * 44} 150l-16 50`, stroke: "#854d0e", strokeWidth: 2 },
          a,
        ),
      ),
      e.jsx("rect", {
        x: 220,
        y: 24,
        width: 70,
        height: 52,
        rx: 3,
        fill: "#0ea5e9",
        stroke: b,
        strokeWidth: 1.2,
      }),
      e.jsx("path", { d: "M232 62l12-20 10 14 8-8 16 14z", fill: "#fde047" }),
      e.jsx("rect", {
        x: 234,
        y: 140,
        width: 56,
        height: 8,
        rx: 2,
        fill: "#78350f",
      }),
      e.jsx("path", {
        d: "M240 148v40M284 148v40",
        stroke: "#78350f",
        strokeWidth: 4,
      }),
      e.jsx("rect", {
        x: 240,
        y: 104,
        width: 44,
        height: 30,
        rx: 3,
        fill: "#1f2937",
      }),
      e.jsx("rect", {
        x: 243,
        y: 107,
        width: 38,
        height: 24,
        rx: 1.5,
        fill: "#04130f",
      }),
      e.jsx("path", {
        d: "M245 119q4-8 8 0t8 0 8 0 8 0",
        fill: "none",
        stroke: "#7dd3fc",
        strokeWidth: 1.6,
      }),
      e.jsx("circle", { cx: 276, cy: 110, r: 2, fill: "#dc2626" }),
      e.jsx("path", { d: "M236 134h52l-4 6h-44z", fill: "#94a3b8" }),
      e.jsx(C, { x: 110, y: 200, s: 1.55, shirt: "#16a34a", skin: 2, hair: 1 }),
      e.jsxs("g", {
        transform: "rotate(-24 110 160)",
        children: [
          e.jsx("ellipse", {
            cx: 92,
            cy: 168,
            rx: 30,
            ry: 24,
            fill: "#d97706",
            stroke: b,
            strokeWidth: 1.5,
          }),
          e.jsx("ellipse", {
            cx: 122,
            cy: 160,
            rx: 22,
            ry: 18,
            fill: "#d97706",
            stroke: b,
            strokeWidth: 1.5,
          }),
          e.jsx("circle", { cx: 108, cy: 163, r: 8, fill: "#451a03" }),
          e.jsx("rect", {
            x: 130,
            y: 157,
            width: 70,
            height: 9,
            rx: 2,
            fill: "#78350f",
          }),
          e.jsx("rect", {
            x: 198,
            y: 153,
            width: 16,
            height: 17,
            rx: 3,
            fill: "#451a03",
          }),
          e.jsx("path", {
            d: "M90 161h120M90 164h120M90 167h120",
            stroke: "#fef3c7",
            strokeWidth: 0.7,
          }),
        ],
      }),
      e.jsx("path", { d: "M180 200v-58", stroke: "#111827", strokeWidth: 3 }),
      e.jsx("path", {
        d: "M180 142l-14-10",
        stroke: "#111827",
        strokeWidth: 3,
      }),
      e.jsx(q, { x: 162, y: 122, color: "#e2e8f0" }),
      e.jsx(z, { x: 40, y: 60, color: "#16a34a" }),
      e.jsx(z, { x: 70, y: 40, color: "#d97706" }),
      e.jsx(de, { x: 182, y: 92, color: "#16a34a" }),
    ],
  });
}
function Ft() {
  return e.jsxs(T, {
    label: "A kitchen radio playing an advert next to a box of Crunch cereal",
    children: [
      e.jsx("rect", { width: 320, height: 200, fill: "#fef3c7" }),
      Array.from({ length: 9 }, (t, a) =>
        e.jsx(
          "rect",
          {
            x: a * 36,
            y: 0,
            width: 18,
            height: 130,
            fill: "#fde68a",
            opacity: 0.6,
          },
          a,
        ),
      ),
      e.jsx("rect", { y: 130, width: 320, height: 70, fill: "#d97706" }),
      e.jsx("rect", { y: 130, width: 320, height: 8, fill: "#b45309" }),
      e.jsx("rect", {
        x: 60,
        y: 66,
        width: 130,
        height: 72,
        rx: 10,
        fill: "#dc2626",
        stroke: b,
        strokeWidth: 1.5,
      }),
      e.jsx("circle", {
        cx: 95,
        cy: 102,
        r: 24,
        fill: "#fecaca",
        stroke: b,
        strokeWidth: 1.2,
      }),
      Array.from({ length: 5 }, (t, a) =>
        e.jsx(
          "path",
          { d: `M77 ${90 + a * 6}h36`, stroke: "#b91c1c", strokeWidth: 2 },
          a,
        ),
      ),
      e.jsx("rect", {
        x: 130,
        y: 80,
        width: 46,
        height: 18,
        rx: 3,
        fill: "#fef9c3",
        stroke: b,
        strokeWidth: 1,
      }),
      e.jsx("path", { d: "M140 80v18", stroke: "#dc2626", strokeWidth: 1.6 }),
      e.jsx("circle", {
        cx: 142,
        cy: 116,
        r: 7,
        fill: "#fbbf24",
        stroke: b,
        strokeWidth: 1,
      }),
      e.jsx("circle", {
        cx: 164,
        cy: 116,
        r: 7,
        fill: "#fbbf24",
        stroke: b,
        strokeWidth: 1,
      }),
      e.jsx("path", {
        d: "M80 66l30-30",
        stroke: "#64748b",
        strokeWidth: 2.5,
        strokeLinecap: "round",
      }),
      e.jsx(de, { x: 40, y: 100, flip: !0, color: "#dc2626" }),
      e.jsx("rect", {
        x: 214,
        y: 42,
        width: 64,
        height: 96,
        rx: 3,
        fill: "#2563eb",
        stroke: b,
        strokeWidth: 1.5,
      }),
      e.jsx("rect", {
        x: 220,
        y: 50,
        width: 52,
        height: 22,
        rx: 3,
        fill: "#facc15",
      }),
      e.jsx("text", {
        x: 246,
        y: 65,
        textAnchor: "middle",
        fontSize: 10,
        fontWeight: 900,
        fill: "#1e3a8a",
        fontFamily: "system-ui, sans-serif",
        children: "CRUNCH",
      }),
      [0, 1, 2, 3, 4].map((t) =>
        e.jsx(
          "circle",
          {
            cx: 228 + (t % 3) * 16,
            cy: 90 + Math.floor(t / 3) * 18,
            r: 6,
            fill: "#fbbf24",
            stroke: "#b45309",
          },
          t,
        ),
      ),
      e.jsx("path", {
        d: "M214 150h84a42 22 0 0 1-84 0z",
        fill: "#f8fafc",
        stroke: b,
        strokeWidth: 1.4,
        transform: "translate(-10 -12)",
      }),
      [0, 1, 2, 3].map((t) =>
        e.jsx(
          "circle",
          { cx: 220 + t * 14, cy: 136, r: 5, fill: "#fbbf24" },
          t,
        ),
      ),
      e.jsx(z, { x: 30, y: 50, color: "#dc2626" }),
    ],
  });
}
function Kt() {
  return e.jsxs(T, {
    label: "A narrator in a vocal booth reading a book aloud into a microphone",
    children: [
      e.jsx("rect", { width: 320, height: 200, fill: "#334155" }),
      Array.from({ length: 10 }, (t, a) =>
        Array.from({ length: 6 }, (s, r) =>
          e.jsx(
            "rect",
            {
              x: a * 32 + 2,
              y: r * 32 + 2,
              width: 28,
              height: 28,
              rx: 3,
              fill: (a + r) % 2 ? "#3f4b5f" : "#475569",
            },
            `${a}-${r}`,
          ),
        ),
      ),
      e.jsx(C, {
        x: 110,
        y: 200,
        s: 1.6,
        shirt: "#7c3aed",
        skin: 3,
        hair: 0,
        headphones: !0,
      }),
      e.jsx("path", {
        d: "M80 160l40-8 40 8v22l-40-8-40 8z",
        fill: "#f8fafc",
        stroke: b,
        strokeWidth: 1.4,
      }),
      e.jsx("path", { d: "M120 152v22", stroke: b, strokeWidth: 1.2 }),
      e.jsx("path", {
        d: "M88 164l26-5M88 170l26-5M126 159l26 5M126 165l26 5",
        stroke: "#94a3b8",
        strokeWidth: 1,
      }),
      e.jsx("path", { d: "M260 200v-90", stroke: "#111827", strokeWidth: 4 }),
      e.jsx("path", { d: "M260 110h-50", stroke: "#111827", strokeWidth: 3 }),
      e.jsx(q, { x: 204, y: 96 }),
      e.jsx("circle", {
        cx: 180,
        cy: 96,
        r: 16,
        fill: "none",
        stroke: "#e2e8f0",
        strokeWidth: 2,
      }),
      e.jsx("circle", {
        cx: 180,
        cy: 96,
        r: 14,
        fill: "#e2e8f0",
        opacity: 0.25,
      }),
      e.jsx("path", { d: "M196 96h4", stroke: "#e2e8f0", strokeWidth: 2 }),
      e.jsx("rect", {
        x: 232,
        y: 18,
        width: 70,
        height: 22,
        rx: 4,
        fill: "#b91c1c",
      }),
      e.jsx("text", {
        x: 267,
        y: 34,
        textAnchor: "middle",
        fontSize: 11,
        fontWeight: 800,
        fill: "#fee2e2",
        fontFamily: "system-ui, sans-serif",
        children: "RECORDING",
      }),
    ],
  });
}
function Et() {
  return e.jsxs(T, {
    label:
      "A cinema screen showing a sunset, with an orchestra and a director's clapperboard",
    children: [
      e.jsx("rect", { width: 320, height: 200, fill: "#0f172a" }),
      e.jsx("rect", { x: 30, y: 14, width: 260, height: 100, fill: "#f97316" }),
      e.jsx("rect", { x: 30, y: 70, width: 260, height: 44, fill: "#7c2d12" }),
      e.jsx("circle", { cx: 160, cy: 74, r: 26, fill: "#fde047" }),
      e.jsx("rect", { x: 30, y: 74, width: 260, height: 40, fill: "#9a3412" }),
      e.jsx("path", {
        d: "M30 100q40-14 80-4t90-8 90 6v20H30z",
        fill: "#431407",
      }),
      e.jsx("path", { d: "M24 10h272v6H24z", fill: "#7f1d1d" }),
      e.jsx("path", {
        d: "M18 10h18v110H18zM284 10h18v110h-18z",
        fill: "#991b1b",
      }),
      e.jsx("rect", { y: 150, width: 320, height: 50, fill: "#1e293b" }),
      e.jsx(C, { x: 60, y: 182, s: 0.9, shirt: "#111827", skin: 0, hair: 1 }),
      e.jsx("path", { d: "M70 160l18-36", stroke: "#a16207", strokeWidth: 2 }),
      e.jsx("ellipse", {
        cx: 74,
        cy: 156,
        rx: 9,
        ry: 6,
        fill: "#b45309",
        transform: "rotate(-60 74 156)",
      }),
      e.jsx(C, { x: 128, y: 182, s: 0.9, shirt: "#111827", skin: 2, hair: 3 }),
      e.jsx("ellipse", {
        cx: 128,
        cy: 176,
        rx: 20,
        ry: 8,
        fill: "#e5e7eb",
        stroke: "#64748b",
      }),
      e.jsx(C, { x: 196, y: 182, s: 0.9, shirt: "#111827", skin: 1, hair: 0 }),
      e.jsx("path", {
        d: "M186 168h28",
        stroke: "#fbbf24",
        strokeWidth: 3,
        strokeLinecap: "round",
      }),
      e.jsx("circle", { cx: 216, cy: 168, r: 5, fill: "#fbbf24" }),
      e.jsx("rect", {
        x: 244,
        y: 150,
        width: 56,
        height: 38,
        rx: 2,
        fill: "#111827",
        stroke: "#e5e7eb",
        strokeWidth: 1.2,
      }),
      e.jsx("path", { d: "M244 140l54-10 3 12-54 10z", fill: "#e5e7eb" }),
      [0, 1, 2, 3].map((t) =>
        e.jsx(
          "path",
          {
            d: `M${252 + t * 13} ${148 - t * 2.4}l7-11`,
            stroke: "#111827",
            strokeWidth: 4,
          },
          t,
        ),
      ),
      e.jsx("path", {
        d: "M250 164h44M250 176h44",
        stroke: "#e5e7eb",
        strokeWidth: 1,
      }),
      e.jsx(z, { x: 40, y: 136 }),
      e.jsx(z, { x: 230, y: 134, color: "#f59e0b" }),
    ],
  });
}
function Ee({ id: t, className: a }) {
  return e.jsxs("div", {
    className: a,
    "data-client-scene": t,
    children: [
      t === "doorbell" ? e.jsx(Tt, {}) : null,
      t === "voice-note" ? e.jsx(At, {}) : null,
      t === "podcast" ? e.jsx(Pt, {}) : null,
      t === "guitar" ? e.jsx(Rt, {}) : null,
      t === "radio-advert" ? e.jsx(Ft, {}) : null,
      t === "audiobook" ? e.jsx(Kt, {}) : null,
      t === "film" ? e.jsx(Et, {}) : null,
    ],
  });
}
function Le({ className: t, onAir: a }) {
  return e.jsxs("svg", {
    viewBox: "0 0 320 200",
    role: "img",
    "aria-label": "A recording studio control room with a mixing desk",
    className: t,
    children: [
      e.jsx("rect", { width: 320, height: 200, fill: "#1e1b2e" }),
      Array.from({ length: 16 }, (s, r) =>
        e.jsx(
          "rect",
          { x: r * 20, y: 0, width: 10, height: 120, fill: "#25213a" },
          r,
        ),
      ),
      e.jsx("rect", {
        x: 70,
        y: 22,
        width: 180,
        height: 78,
        rx: 4,
        fill: "#0f172a",
        stroke: "#64748b",
        strokeWidth: 3,
      }),
      e.jsx("rect", { x: 74, y: 26, width: 172, height: 70, fill: "#1e3a5f" }),
      e.jsx("path", {
        d: "M74 26l60 70M150 26l60 70",
        stroke: "#ffffff",
        strokeWidth: 6,
        opacity: 0.05,
      }),
      e.jsx("path", { d: "M160 96v-40", stroke: "#94a3b8", strokeWidth: 2 }),
      e.jsx(q, { x: 160, y: 50, color: "#cbd5e1" }),
      e.jsx("circle", { cx: 200, cy: 86, r: 10, fill: "#1e293b" }),
      e.jsx("path", { d: "M190 96h20", stroke: "#475569", strokeWidth: 3 }),
      e.jsx("rect", {
        x: 128,
        y: 4,
        width: 64,
        height: 14,
        rx: 3,
        fill: a ? "#dc2626" : "#3f1d1d",
      }),
      e.jsx("text", {
        x: 160,
        y: 14.5,
        textAnchor: "middle",
        fontSize: 9,
        fontWeight: 800,
        fill: a ? "#fee2e2" : "#7f5454",
        fontFamily: "system-ui, sans-serif",
        letterSpacing: 1.5,
        children: "ON AIR",
      }),
      [28, 266].map((s) =>
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("rect", {
                x: s,
                y: 44,
                width: 26,
                height: 44,
                rx: 3,
                fill: "#111827",
                stroke: "#334155",
              }),
              e.jsx("circle", { cx: s + 13, cy: 56, r: 6, fill: "#334155" }),
              e.jsx("circle", { cx: s + 13, cy: 74, r: 9, fill: "#334155" }),
              e.jsx("circle", { cx: s + 13, cy: 74, r: 3, fill: "#0f172a" }),
            ],
          },
          s,
        ),
      ),
      e.jsx("path", { d: "M10 200l24-80h252l24 80z", fill: "#334155" }),
      e.jsx("path", { d: "M34 120h252l3 10H31z", fill: "#475569" }),
      Array.from({ length: 14 }, (s, r) => {
        const i = 48 + r * 16.5,
          n = [6, 12, 3, 9, 14, 5, 10, 7, 13, 4, 11, 8, 6, 12][r];
        return e.jsxs(
          "g",
          {
            children: [
              e.jsx("circle", {
                cx: i,
                cy: 140,
                r: 3.5,
                fill: r % 3 === 0 ? "#2dd4bf" : "#fbbf24",
              }),
              e.jsx("path", {
                d: `M${i - 0.5} 156v34`,
                stroke: "#0f172a",
                strokeWidth: 2.5,
                strokeLinecap: "round",
              }),
              e.jsx("rect", {
                x: i - 5,
                y: 160 + n * 1.6,
                width: 10,
                height: 6,
                rx: 1.5,
                fill: "#e2e8f0",
              }),
            ],
          },
          r,
        );
      }),
    ],
  });
}
const De =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300";
function Ie({ count: t, label: a }) {
  return e.jsx("span", {
    className: "inline-flex items-center gap-0.5",
    "aria-label": a ?? `${t} of 3 stars`,
    role: "img",
    children: [0, 1, 2].map((s) =>
      e.jsx(
        Qe,
        {
          "aria-hidden": "true",
          className: `h-5 w-5 ${s < t ? "fill-amber-300 text-amber-300" : "text-slate-600"}`,
        },
        s,
      ),
    ),
  });
}
function _e() {
  return e.jsxs("ul", {
    className: "studio-key",
    "aria-hidden": "true",
    children: [
      e.jsxs("li", {
        children: [
          e.jsx("i", { className: "studio-key-analogue" }),
          "Analogue",
        ],
      }),
      e.jsxs("li", {
        children: [e.jsx("i", { className: "studio-key-sample" }), "Samples"],
      }),
      e.jsxs("li", {
        children: [e.jsx("i", { className: "studio-key-digital" }), "Digital"],
      }),
    ],
  });
}
function Lt({ done: t, total: a }) {
  return e.jsxs("div", {
    className: "flex items-center gap-1.5",
    "data-studio-progress": !0,
    children: [
      e.jsx("span", {
        className: "sr-only",
        children: `booking ${Math.min(t.length + 1, a)} of ${a}`,
      }),
      Array.from({ length: a }, (s, r) => {
        const i = t[r],
          n = i
            ? i.result.stars > 0
              ? "passed"
              : "missed"
            : r === t.length
              ? "next"
              : "pending";
        return e.jsx(
          "span",
          { "aria-hidden": "true", className: "studio-dot", "data-state": n },
          r,
        );
      }),
    ],
  });
}
function Dt({ booking: t }) {
  const a = Z(t);
  return e.jsxs("article", {
    className: "studio-card",
    "data-client": t.id,
    children: [
      e.jsx(Ee, { id: t.id, className: "studio-card-picture" }),
      e.jsxs("div", {
        className: "min-w-0 space-y-3 p-4 sm:p-5",
        children: [
          e.jsxs("div", {
            className: "flex flex-wrap items-baseline justify-between gap-2",
            children: [
              e.jsx("h2", {
                className: "text-xl font-bold text-slate-50 sm:text-2xl",
                children: t.job,
              }),
              e.jsxs("span", {
                className:
                  "inline-flex items-center gap-1 font-mono text-sm text-amber-200",
                children: [
                  e.jsx(Xe, { "aria-hidden": "true", className: "h-4 w-4" }),
                  t.time,
                ],
              }),
            ],
          }),
          e.jsx("p", {
            className: "text-sm font-semibold text-slate-400",
            children: t.client,
          }),
          e.jsx("p", {
            className: "leading-7 text-slate-200",
            children: t.brief,
          }),
          e.jsxs("dl", {
            className: "studio-brief-tags",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("dt", { children: "Duration" }),
                  e.jsx("dd", { children: le(t.duration) }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("dt", { children: "Max size" }),
                  e.jsx("dd", { children: F(t.maxKB) }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("dt", { children: "Closeness" }),
                  e.jsx("dd", {
                    children:
                      t.minCloseness === "best" ? `best (${a}%)` : `≥ ${a}%`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function It({
  booking: t,
  rateIndex: a,
  depthIndex: s,
  setRate: r,
  setDepth: i,
  locked: n,
}) {
  const l = v[a],
    o = N[s],
    c = W({
      sampleRate: v[v.length - 1],
      bitDepth: N[N.length - 1],
      duration: t.duration,
    });
  return e.jsxs("div", {
    className: "studio-rack space-y-4",
    "data-studio-desk": !0,
    children: [
      e.jsxs("div", {
        className: "space-y-2",
        children: [
          e.jsx(_e, {}),
          e.jsx(Ae, { wave: t.wave, sampleRate: l, bitDepth: o }),
          e.jsx(Pe, { wave: t.wave, sampleRate: l, bitDepth: o }),
        ],
      }),
      e.jsxs("div", {
        className:
          "grid gap-4 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center",
        children: [
          e.jsxs("div", {
            className: "flex justify-center gap-2 sm:gap-8 md:contents",
            children: [
              e.jsx(_, {
                name: "Sample rate",
                stops: v,
                index: a,
                format: K,
                onChange: r,
                disabled: n,
                dataKey: "rate",
              }),
              e.jsx(_, {
                name: "Bit depth",
                stops: N,
                index: s,
                format: E,
                onChange: i,
                disabled: n,
                dataKey: "depth",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "min-w-0 space-y-3",
            children: [
              e.jsx(Fe, {
                wave: t.wave,
                sampleRate: l,
                bitDepth: o,
                duration: t.duration,
                target: Z(t),
                maxKB: t.maxKB,
                sizeScale: Math.max(c, t.maxKB * 1.25),
              }),
              e.jsx(Re, { sampleRate: l, bitDepth: o, duration: t.duration }),
              e.jsx(Ke, { wave: t.wave, sampleRate: l, bitDepth: o }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _t({ booking: t, result: a, onNext: s }) {
  const r = Ce(t);
  return e.jsxs(U.div, {
    initial: V() ? !1 : { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    className: "studio-verdict",
    "data-take-verdict": a.stars > 0 ? "pass" : "miss",
    "data-stars": a.stars,
    "aria-live": "polite",
    children: [
      e.jsxs("div", {
        className: "flex flex-wrap items-center gap-3",
        children: [
          e.jsx("h3", {
            className: `text-2xl font-black ${a.stars > 0 ? "text-emerald-300" : "text-rose-300"}`,
            children:
              a.stars === 3
                ? "Perfect take"
                : a.stars === 2
                  ? "Client happy"
                  : "Take rejected",
          }),
          e.jsx(Ie, { count: a.stars }),
        ],
      }),
      e.jsx("ul", {
        className: "space-y-2 text-sm leading-6 text-slate-200",
        children: ot(t, a).map((i) => e.jsx("li", { children: i }, i)),
      }),
      a.stars < 3
        ? e.jsxs("p", {
            className: "text-sm text-slate-300",
            "data-best-settings": !0,
            children: [
              "Best take:",
              " ",
              r
                .map((i) => `${K(i.sampleRate)} at ${E(i.bitDepth)}`)
                .join(" or "),
              " ",
              "(",
              F(W({ ...r[0], duration: t.duration })),
              ").",
            ],
          })
        : null,
      e.jsxs("button", {
        type: "button",
        className: $,
        onClick: s,
        children: [
          "Paperwork",
          e.jsx(we, { "aria-hidden": "true", className: "h-4 w-4" }),
        ],
      }),
    ],
  });
}
function qt({ booking: t, marked: a, isLast: s, onNext: r }) {
  const { task: i } = t,
    n = a.marks === a.max;
  return e.jsxs(U.div, {
    initial: V() ? !1 : { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    className: "studio-verdict",
    "data-task-feedback": n ? "correct" : "wrong",
    "aria-live": "polite",
    children: [
      e.jsxs("p", {
        className: `text-xl font-black ${n ? "text-emerald-300" : "text-amber-200"}`,
        children: [a.marks, " / ", a.max, " ", a.max === 1 ? "mark" : "marks"],
      }),
      "explanation" in i
        ? e.jsx("p", {
            className: "text-sm leading-6 text-slate-200",
            children: i.explanation,
          })
        : null,
      e.jsx("p", { className: "text-xs text-slate-400", children: i.source }),
      e.jsxs("button", {
        type: "button",
        className: $,
        onClick: r,
        children: [
          s ? "End of the day" : "Next client",
          e.jsx(we, { "aria-hidden": "true", className: "h-4 w-4" }),
        ],
      }),
    ],
  });
}
function Ot({ onBack: t }) {
  const a = L[L.length - 1].wave,
    [s, r] = g.useState(2),
    [i, n] = g.useState(1),
    [l, o] = g.useState(3),
    c = v[s],
    d = N[i],
    h = H[l],
    u = W({
      sampleRate: v[v.length - 1],
      bitDepth: N[N.length - 1],
      duration: H[H.length - 1],
    });
  return e.jsxs("div", {
    className: "mx-auto max-w-4xl space-y-4",
    "data-studio-free": !0,
    children: [
      e.jsxs("div", {
        className: "studio-rack space-y-4",
        "data-studio-desk": !0,
        children: [
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx(_e, {}),
              e.jsx(Ae, { wave: a, sampleRate: c, bitDepth: d }),
              e.jsx(Pe, { wave: a, sampleRate: c, bitDepth: d }),
            ],
          }),
          e.jsxs("div", {
            className: "flex flex-wrap justify-center gap-4 sm:gap-8",
            children: [
              e.jsx(_, {
                name: "Sample rate",
                stops: v,
                index: s,
                format: K,
                onChange: r,
                dataKey: "rate",
              }),
              e.jsx(_, {
                name: "Bit depth",
                stops: N,
                index: i,
                format: E,
                onChange: n,
                dataKey: "depth",
              }),
              e.jsx(_, {
                name: "Duration",
                stops: H,
                index: l,
                format: le,
                onChange: o,
                dataKey: "duration",
              }),
            ],
          }),
          e.jsx(Fe, {
            wave: a,
            sampleRate: c,
            bitDepth: d,
            duration: h,
            sizeScale: u,
          }),
          e.jsx(Re, { sampleRate: c, bitDepth: d, duration: h }),
          e.jsx(Ke, { wave: a, sampleRate: c, bitDepth: d }),
        ],
      }),
      e.jsx("button", {
        type: "button",
        className: De,
        onClick: t,
        children: "Back to the front desk",
      }),
    ],
  });
}
function Ht({ onStart: t, onFree: a }) {
  return e.jsx(U.div, {
    initial: V() ? !1 : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    className: "space-y-5",
    "data-studio-intro": !0,
    children: e.jsxs("div", {
      className:
        "studio-card md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]",
      children: [
        e.jsx(Le, { className: "studio-card-picture block h-auto w-full" }),
        e.jsxs("div", {
          className: "space-y-4 p-5 sm:p-7",
          children: [
            e.jsxs("h2", {
              className: "text-2xl font-black text-slate-50 sm:text-3xl",
              children: [L.length, " bookings today"],
            }),
            e.jsx("ol", {
              className: "space-y-1.5 text-sm text-slate-300",
              "data-studio-schedule": !0,
              children: L.map((s) =>
                e.jsxs(
                  "li",
                  {
                    className: "flex gap-3",
                    children: [
                      e.jsx("span", {
                        className: "w-12 font-mono text-amber-200",
                        children: s.time,
                      }),
                      e.jsx("span", { children: s.job }),
                    ],
                  },
                  s.id,
                ),
              ),
            }),
            e.jsxs("div", {
              className: "flex flex-wrap gap-3",
              children: [
                e.jsxs("button", {
                  type: "button",
                  className: $,
                  onClick: t,
                  children: [
                    e.jsx(te, { "aria-hidden": "true", className: "h-4 w-4" }),
                    "Open the studio",
                  ],
                }),
                e.jsxs("button", {
                  type: "button",
                  className: De,
                  onClick: a,
                  children: [
                    e.jsx(Ye, { "aria-hidden": "true", className: "h-4 w-4" }),
                    "Free studio",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Gt({ done: t, score: a, onAgain: s }) {
  const r = We(t.map((c) => c.booking)),
    i = t.reduce((c, d) => c + d.result.stars, 0),
    n = t.reduce((c, d) => c + d.marked.marks, 0),
    l = t.reduce((c, d) => c + d.marked.max, 0),
    o = t.filter((c) => c.result.stars < 3 || c.marked.marks < c.marked.max);
  return e.jsxs(U.div, {
    initial: V() ? !1 : { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    className: "space-y-5",
    "aria-live": "polite",
    "data-game-finished": !0,
    children: [
      e.jsxs("div", {
        className: "studio-rack text-center",
        children: [
          e.jsx(Le, {
            className: "mx-auto block h-auto w-full max-w-xs",
            onAir: !1,
          }),
          e.jsx("h2", {
            className: "mt-4 text-3xl font-black text-amber-200 sm:text-4xl",
            "data-studio-rank": !0,
            children: ft(a, r),
          }),
          e.jsx("p", {
            className: "my-3 font-mono text-5xl font-black text-slate-50",
            "data-studio-final-score": !0,
            children: a,
          }),
          e.jsxs("div", {
            className: "mx-auto grid max-w-md grid-cols-2 gap-3",
            children: [
              e.jsxs("div", {
                className: "studio-stat",
                children: [
                  e.jsx("span", { children: "Stars" }),
                  e.jsxs("strong", { children: [i, " / ", t.length * 3] }),
                ],
              }),
              e.jsxs("div", {
                className: "studio-stat",
                children: [
                  e.jsx("span", { children: "Paperwork" }),
                  e.jsxs("strong", { children: [n, " / ", l] }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx("ol", {
        className: "grid gap-3 md:grid-cols-2",
        "data-studio-review": !0,
        children: t.map((c) =>
          e.jsxs(
            "li",
            {
              className: "studio-review-row",
              children: [
                e.jsx(Ee, {
                  id: c.booking.id,
                  className: "studio-review-picture",
                }),
                e.jsxs("div", {
                  className: "min-w-0 flex-1 space-y-1",
                  children: [
                    e.jsx("p", {
                      className: "font-semibold text-slate-50",
                      children: c.booking.job,
                    }),
                    e.jsxs("p", {
                      className: "font-mono text-xs text-slate-400",
                      children: [
                        K(c.sampleRate),
                        " · ",
                        E(c.bitDepth),
                        " ·",
                        " ",
                        F(c.result.sizeKB),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-3 text-sm text-slate-300",
                      children: [
                        e.jsx(Ie, { count: c.result.stars }),
                        e.jsxs("span", {
                          children: [c.marked.marks, " / ", c.marked.max],
                        }),
                      ],
                    }),
                    c.result.stars < 3
                      ? e.jsxs("p", {
                          className: "text-xs text-amber-200",
                          "data-review-best": !0,
                          children: [
                            "Best take:",
                            " ",
                            Ce(c.booking)
                              .map(
                                (d) => `${K(d.sampleRate)} at ${E(d.bitDepth)}`,
                              )
                              .join(" or "),
                          ],
                        })
                      : null,
                  ],
                }),
              ],
            },
            c.booking.id,
          ),
        ),
      }),
      o.length === 0
        ? e.jsx("p", {
            className: "text-center text-slate-300",
            children: "Every take perfect and every form right.",
          })
        : null,
      e.jsxs("button", {
        type: "button",
        className: $,
        onClick: s,
        children: [
          e.jsx(Ze, { "aria-hidden": "true", className: "h-4 w-4" }),
          "Book another day",
        ],
      }),
    ],
  });
}
function Xt() {
  const [t, a] = g.useState("intro"),
    [s, r] = g.useState(() => xe()),
    [i, n] = g.useState(0),
    [l, o] = g.useState("record"),
    [c, d] = g.useState(0),
    [h, u] = g.useState(0),
    [x, j] = g.useState(null),
    [m, p] = g.useState(null),
    [f, w] = g.useState([]),
    [O, D] = g.useState(0);
  (et(
    f.length,
    s.length,
    f.filter((M) => M.result.stars > 0 && M.marked.marks === M.marked.max)
      .length,
  ),
    g.useEffect(() => ae, []));
  const y = s[i];
  function he() {
    (r(xe()),
      n(0),
      o("record"),
      d(0),
      u(0),
      j(null),
      p(null),
      w([]),
      D(0),
      a("day"));
  }
  function qe() {
    if (!y) return;
    ae();
    const M = se(y, v[c], N[h]);
    (j(M), D((I) => I + M.stars * ze), o("take"));
  }
  function Oe(M) {
    m || (p(M), D((I) => I + M.marks * Be), o("marked"));
  }
  function He() {
    if (!y || !x || !m) return;
    const M = {
      booking: y,
      sampleRate: v[c],
      bitDepth: N[h],
      result: x,
      marked: m,
    };
    if ((w((I) => [...I, M]), i + 1 >= s.length)) {
      a("over");
      return;
    }
    (n(i + 1), o("record"), d(0), u(0), j(null), p(null));
  }
  return e.jsxs("div", {
    className: "sound-studio",
    "data-sound-studio": !0,
    "data-phase": t,
    children: [
      e.jsxs("div", {
        className: "studio-topbar",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx("span", {
                className: "studio-onair",
                "data-on": t === "day" && l === "record" ? "true" : void 0,
                children: "ON AIR",
              }),
              e.jsx("span", {
                className: "font-mono text-sm font-semibold text-slate-300",
                children: "Studio B",
              }),
            ],
          }),
          t === "day" ? e.jsx(Lt, { done: f, total: s.length }) : null,
          t === "day" || t === "over"
            ? e.jsxs("div", {
                className: "text-right font-mono",
                children: [
                  e.jsx("span", { className: "sr-only", children: "Score" }),
                  e.jsx("span", {
                    className: "text-2xl font-black text-amber-200",
                    "data-studio-score": !0,
                    children: O,
                  }),
                ],
              })
            : null,
        ],
      }),
      t === "intro"
        ? e.jsx(Ht, { onStart: he, onFree: () => a("free") })
        : null,
      t === "free" ? e.jsx(Ot, { onBack: () => a("intro") }) : null,
      t === "over"
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx(Gt, { done: f, score: O, onAgain: he }),
              e.jsx(tt, { game: "sound-studio" }),
            ],
          })
        : null,
      t === "day" && y
        ? e.jsxs("div", {
            className:
              "grid gap-5 xl:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]",
            "data-booking": y.id,
            children: [
              e.jsx(Dt, { booking: y }),
              e.jsx("div", {
                className: "min-w-0 space-y-4",
                children:
                  l === "record" || l === "take"
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(It, {
                            booking: y,
                            rateIndex: c,
                            depthIndex: h,
                            setRate: d,
                            setDepth: u,
                            locked: l !== "record",
                          }),
                          l === "record"
                            ? e.jsxs("button", {
                                type: "button",
                                className: `${$} w-full`,
                                onClick: qe,
                                "data-record": !0,
                                children: [
                                  e.jsx("span", {
                                    className: "studio-rec-dot",
                                    "aria-hidden": "true",
                                  }),
                                  "Record take",
                                ],
                              })
                            : x
                              ? e.jsx(_t, {
                                  booking: y,
                                  result: x,
                                  onNext: () => o("paper"),
                                })
                              : null,
                        ],
                      })
                    : e.jsxs("div", {
                        className: "space-y-4",
                        "data-paperwork": y.task.kind,
                        children: [
                          e.jsxs("div", {
                            className: "studio-sheet",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "mb-3 text-lg font-bold leading-snug",
                                children: y.task.prompt,
                              }),
                              e.jsx(
                                Bt,
                                {
                                  task: y.task,
                                  own: x
                                    ? {
                                        sampleRate: v[c],
                                        bitDepth: N[h],
                                        duration: y.duration,
                                      }
                                    : null,
                                  onMarked: Oe,
                                  done: l === "marked",
                                },
                                y.id,
                              ),
                            ],
                          }),
                          l === "marked" && m
                            ? e.jsx(qt, {
                                booking: y,
                                marked: m,
                                isLast: i + 1 >= s.length,
                                onNext: He,
                              })
                            : null,
                        ],
                      }),
              }),
            ],
          })
        : null,
    ],
  });
}
export { Xt as default };
