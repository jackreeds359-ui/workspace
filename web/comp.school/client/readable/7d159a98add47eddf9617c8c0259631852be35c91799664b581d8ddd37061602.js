import { j as e, r as m } from "./react-vendor-BK1G6oO1.js";
import {
  b6 as ue,
  bm as pe,
  ae as it,
  ag as Pe,
  P as lt,
  c9 as Te,
  R as nt,
  c7 as ot,
} from "./index-DjyiOHey.js";
import { aq as at, aT as ct } from "./GameNotebook-b0Qw2wzd.js";
import { s as ce } from "./revision-content-CLnFOyQ7.js";
import { m as le } from "./proxy-DGk2Wawc.js";
import { M as ht } from "./index-DODcXJEq.js";
import { A as dt } from "./index-B24ohNs7.js";
import "./ui-components-DeMDYLzO.js";
const B = [
  {
    id: "ui",
    name: "User interface",
    duty: "Lets the user interact with the computer: takes their input and outputs data to them.",
  },
  {
    id: "memory",
    name: "Memory management and multitasking",
    duty: "Moves data between memory and allocates RAM to each program, so several can run at once.",
  },
  {
    id: "peripheral",
    name: "Peripheral management and drivers",
    duty: "Manages the transfer of data between devices and the processor, using drivers to send data to output devices and receive data from input devices.",
  },
  {
    id: "user",
    name: "User management",
    duty: "Creates accounts, checks who is logging on and sets access rights.",
  },
  {
    id: "file",
    name: "File management",
    duty: "Names, saves, moves and deletes files and organises them into folders.",
  },
];
function se(t) {
  return B.find((s) => s.id === t) ?? B[0];
}
const xt = [
    {
      id: "ui-icon",
      desk: "ui",
      title: "Tap, don’t type",
      event:
        "Grandad uses his tablet by tapping big icons on the screen instead of typing commands.",
      why: "The user interface lets the user interact with the computer and takes their input, here through a GUI with icons instead of a command prompt.",
      alt: "An older man taps a big icon on a tablet.",
    },
    {
      id: "ui-command",
      desk: "ui",
      title: "Typed command",
      event:
        "A technician types a command at the command prompt and the computer shows the result.",
      why: "The user interface lets the user interact with the computer. A command prompt is a type of user interface: it takes typed input and outputs the result.",
      alt: "A technician types at a black command prompt window.",
    },
    {
      id: "ui-message",
      desk: "ui",
      title: "Now or later?",
      event:
        "A message box pops up on the screen asking Ruby if she wants to install updates now or later.",
      why: "The user interface outputs data to the user, here a message box, and takes their input when they click Now or Later.",
      alt: "A laptop shows a message box asking to install updates now or later.",
    },
    {
      id: "ui-window",
      desk: "ui",
      title: "Bigger window",
      event: "Aisha drags the corner of a window to make it bigger.",
      why: "The user interface receives input from the user. In a GUI the user moves and resizes windows with a pointer.",
      alt: "A student drags the corner of a window on a monitor.",
    },
    {
      id: "mem-multitask",
      desk: "memory",
      title: "Game and music",
      event:
        "Sam opens a game while his music keeps playing in the background.",
      why: "Memory management allocates memory to each program so several programs can be in RAM at the same time. This is what allows multitasking.",
      alt: "A gamer in headphones plays a game while a music player runs.",
    },
    {
      id: "mem-open",
      desk: "memory",
      title: "Opening an app",
      event:
        "Priya double-clicks a drawing app. It is copied from the SSD into RAM so it can run.",
      why: "Memory management moves data from secondary storage to RAM. Programs must be in RAM to run.",
      alt: "An app opens on a laptop as its data moves from an SSD into RAM.",
    },
    {
      id: "mem-virtual",
      desk: "memory",
      title: "RAM is full",
      event:
        "With too many programs open, the laptop moves a program that is not in use out of RAM into virtual memory.",
      why: "Memory management transfers data between memory: when RAM is full, data not in use is moved to virtual memory and moved back into RAM when it is needed.",
      alt: "A full RAM stick passes a program across to virtual memory on the drive.",
    },
    {
      id: "mem-close",
      desk: "memory",
      title: "Program closed",
      event:
        "Ben closes a video editor, and the RAM it was using is given to a new program.",
      why: "Memory management allocates memory to applications. When a program closes, its RAM is freed and can be allocated to another program.",
      alt: "A video editor closes and its RAM blocks are freed.",
    },
    {
      id: "per-printer",
      desk: "peripheral",
      title: "New printer",
      event:
        "A student plugs a new printer into her laptop and installs the software that lets the laptop use it.",
      why: "Peripheral management uses drivers so the operating system can communicate with each device. Installing a printer driver is peripheral management.",
      alt: "A student plugs a printer cable into a laptop that shows an installing driver bar.",
    },
    {
      id: "per-scanner",
      desk: "peripheral",
      title: "Scanning a page",
      event:
        "A page is scanned and the scanner sends the picture of it to the computer.",
      why: "Peripheral management receives data from input devices. Reading data from a scanner is peripheral management.",
      alt: "A scanner lid is open with a page and the scanned page shows on a monitor.",
    },
    {
      id: "per-print",
      desk: "peripheral",
      title: "Printing",
      event:
        "Mr Okafor presses Print and the worksheet comes out of the printer.",
      why: "Peripheral management manages the transfer of data between devices and the processor. Here it sends data to an output device, the printer, using its driver.",
      alt: "A teacher collects a worksheet as it comes out of a printer.",
    },
    {
      id: "per-controller",
      desk: "peripheral",
      title: "New controller",
      event:
        "Jay plugs a new game controller into his PC and it works straight away.",
      why: "Peripheral management uses a driver so the operating system can communicate with the controller and receive data from it.",
      alt: "A gamer plugs a controller into a PC tower.",
    },
    {
      id: "usr-accounts",
      desk: "user",
      title: "A new class",
      event:
        "A teacher creates a username and password for every student in a new Year 10 class.",
      why: "User management allocates an account to each user. Creating user accounts is user management.",
      alt: "A teacher at a desk adds new user account cards for a class.",
    },
    {
      id: "usr-password",
      desk: "user",
      title: "New password",
      event: "Eve changes the password she uses to log on to her computer.",
      why: "User management handles security. Changing the password needed to log on is user management.",
      alt: "A student types a new password into a change password box.",
    },
    {
      id: "usr-login",
      desk: "user",
      title: "Logging on",
      event:
        "Zara’s laptop asks for her username and password before it shows her desktop.",
      why: "User management handles security: it checks the user’s username and password before letting them log on.",
      alt: "A laptop log on screen with a username and a hidden password.",
    },
    {
      id: "usr-access",
      desk: "user",
      title: "Read only",
      event:
        "Students can open the shared Exams folder but cannot change it. Teachers can.",
      why: "User management sets access rights: what each user or group is allowed to open, change or delete.",
      alt: "A shared folder with a padlock; a student can only look, a teacher holds a key.",
    },
    {
      id: "file-rename",
      desk: "file",
      title: "Rename a folder",
      event: "Kai renames the folder New folder (2) to Science.",
      why: "File management lets the user name and rename files and folders. Renaming a folder is file management.",
      alt: "A folder label is being typed over from New folder (2) to Science.",
    },
    {
      id: "file-move",
      desk: "file",
      title: "Moving a file",
      event:
        "Leo moves his project file from his Downloads folder into his Science folder.",
      why: "File management moves files from one folder to another. Moving a file is file management.",
      alt: "A file is dragged from the Downloads folder into the Science folder.",
    },
    {
      id: "file-folder",
      desk: "file",
      title: "Homework folder",
      event:
        "Mia creates a new folder called Homework to store her documents in.",
      why: "File management allows the user to create folders and allocate files to them.",
      alt: "A new folder named Homework appears and documents drop into it.",
    },
    {
      id: "file-save",
      desk: "file",
      title: "Saving an essay",
      event: "Noah saves his English essay with the name Macbeth essay.",
      why: "File management saves files to storage and gives them a name.",
      alt: "A save dialog with the file name Macbeth essay.",
    },
    {
      id: "file-delete",
      desk: "file",
      title: "Clear out",
      event: "Isla deletes an old draft she no longer needs.",
      why: "File management allows the user to delete files and folders.",
      alt: "A document is dragged into the recycle bin.",
    },
  ],
  ft = 12,
  xe = 6;
function jt(t = Math.random) {
  const s = [],
    r = [];
  for (const l of B) {
    const i = ce(
      xt.filter((o) => o.desk === l.id),
      t,
    );
    (s.push(...i.slice(0, 2)), r.push(...i.slice(2)));
  }
  return (s.push(...ce(r, t).slice(0, ft - s.length)), ce(s, t));
}
function Y(t) {
  return Math.max(12, 25 - t * 1.5);
}
const mt = 100,
  ut = 25,
  pt = 3;
function gt(t, s) {
  return t ? mt + (s >= pt ? ut : 0) : 0;
}
const yt = 0.5;
function kt(t, s, r) {
  return t && s !== null && s >= r * yt;
}
const wt = [
  { from: 0.9, name: "Head of Operations" },
  { from: 0.75, name: "Shift Supervisor" },
  { from: 0.5, name: "Duty Operator" },
  { from: 0, name: "Trainee Operator" },
];
function bt(t, s) {
  const r = s === 0 ? 0 : t / s;
  return wt.find((l) => r >= l.from)?.name ?? "Trainee Operator";
}
const M = {
    os: {
      id: "os",
      name: "Operating system",
      short: "OS",
      blocks: 2,
      color: "#64748b",
    },
    browser: {
      id: "browser",
      name: "Web browser",
      short: "Browser",
      blocks: 2,
      color: "#38bdf8",
    },
    music: {
      id: "music",
      name: "Music player",
      short: "Music",
      blocks: 1,
      color: "#f472b6",
    },
    game: {
      id: "game",
      name: "Game",
      short: "Game",
      blocks: 3,
      color: "#a3e635",
    },
    chat: {
      id: "chat",
      name: "Chat app",
      short: "Chat",
      blocks: 2,
      color: "#fbbf24",
    },
  },
  Mt = 8,
  L = [
    {
      kind: "load",
      program: "browser",
      event: "Maya opens her web browser.",
      inUse: ["browser"],
      why: "Memory management moves the program from secondary storage into RAM and allocates it memory. A program must be in RAM to run.",
    },
    {
      kind: "load",
      program: "music",
      event: "She starts some music. The browser stays open.",
      inUse: ["browser", "music"],
      why: "Both programs are in RAM at the same time, each with its own memory. Allocating memory to each program is how the OS allows multitasking.",
    },
    {
      kind: "load",
      program: "game",
      event: "She starts a game. The music keeps playing.",
      inUse: ["game", "music"],
      why: "RAM now holds the operating system and three programs. RAM is full.",
    },
    {
      kind: "load",
      program: "chat",
      event: "A friend messages her, so she opens the chat app too.",
      inUse: ["game", "music", "chat"],
      why: "RAM was full, so memory management moved a program that was not in use into virtual memory on secondary storage, freeing RAM for the chat app.",
    },
    {
      kind: "close",
      program: "game",
      event: "She quits the game.",
      inUse: ["music", "chat"],
      why: "When a program closes, memory management frees its RAM so it can be allocated to another program.",
    },
    {
      kind: "load",
      program: "browser",
      event: "She goes back to her web browser.",
      inUse: ["browser", "music"],
      why: "Memory management moved the browser from virtual memory back into RAM, because the CPU can only use programs and data that are in RAM. Virtual memory is on secondary storage, which is slower than RAM, so moving data back and forth slows the computer down.",
    },
  ];
function Ae() {
  const t = Array.from({ length: Mt }, () => null);
  return (
    (t[0] = "os"),
    (t[1] = "os"),
    {
      step: 0,
      blocks: t,
      virtual: [],
      placed: 0,
      slips: 0,
      clean: 0,
      stepSlips: 0,
      done: !1,
    }
  );
}
function vt(t) {
  return t.blocks.filter((s) => s === null).length;
}
function ge(t) {
  const s = L[t.step];
  if (t.done || !s) return "done";
  if (s.kind === "close") return "close";
  const r = M[s.program].blocks - t.placed;
  return vt(t) >= r ? "place" : "swap";
}
function ze(t) {
  const s = t.step + 1;
  return {
    ...t,
    step: s,
    placed: 0,
    clean: t.clean + (t.stepSlips === 0 ? 1 : 0),
    stepSlips: 0,
    done: s >= L.length,
  };
}
function X(t, s) {
  return {
    state: { ...t, slips: t.slips + 1, stepSlips: t.stepSlips + 1 },
    outcome: { kind: "wrong", reason: s },
  };
}
function $t(t, s) {
  const r = L[t.step],
    l = t.blocks[s];
  if (!r || t.done || l === void 0)
    return { state: t, outcome: { kind: "placed" } };
  const i = ge(t),
    o = M[r.program];
  if (i === "close") {
    if (l !== r.program)
      return X(
        t,
        l === null
          ? `That block is free. Tap a block the ${o.name.toLowerCase()} is using.`
          : `That block belongs to the ${M[l].name.toLowerCase()}, which is still open.`,
      );
    const x = t.blocks.map((h) => (h === r.program ? null : h));
    return {
      state: ze({ ...t, blocks: x }),
      outcome: { kind: "step-done", step: r },
    };
  }
  if (i === "swap") {
    if (l === null) return X(t, "There are not enough free blocks yet.");
    if (l === "os")
      return X(
        t,
        "The operating system must stay in RAM while the computer is on.",
      );
    if (r.inUse.includes(l) || l === r.program)
      return X(
        t,
        `Maya is using the ${M[l].name.toLowerCase()}. Pick a program that is not in use.`,
      );
    const x = t.blocks.map((h) => (h === l ? null : h));
    return {
      state: { ...t, blocks: x, virtual: [...t.virtual, l] },
      outcome: { kind: "swapped", program: l },
    };
  }
  if (l !== null)
    return X(
      t,
      l === r.program
        ? "That block is already allocated to it. Tap a free block."
        : `That block is allocated to the ${M[l].name.toLowerCase()}. Tap a free block.`,
    );
  const n = t.blocks.map((x, h) => (h === s ? r.program : x)),
    a = t.placed + 1,
    c = t.virtual.filter((x) => x !== r.program);
  return a >= o.blocks
    ? {
        state: ze({ ...t, blocks: n, placed: a, virtual: c }),
        outcome: { kind: "step-done", step: r },
      }
    : {
        state: { ...t, blocks: n, placed: a, virtual: c },
        outcome: { kind: "placed" },
      };
}
const Nt = 100,
  Wt = 50;
function St(t) {
  const s = Math.min(t.step, L.length);
  return t.clean * Nt + (s - t.clean) * Wt;
}
const v = "#0f172a",
  O = ["#f1c9a5", "#d9a57a", "#a8714a", "#7a4b2c"],
  re = ["#2b1d14", "#5b3a24", "#c2873e", "#111827", "#d1d5db"],
  S = 320,
  E = 200;
function At({ glasses: t }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("circle", { cx: -4.5, cy: -45, r: 1.5, fill: v }),
      e.jsx("circle", { cx: 4.5, cy: -45, r: 1.5, fill: v }),
      t
        ? e.jsxs("g", {
            fill: "none",
            stroke: v,
            strokeWidth: 1,
            children: [
              e.jsx("circle", { cx: -4.5, cy: -45, r: 3.6 }),
              e.jsx("circle", { cx: 4.5, cy: -45, r: 3.6 }),
              e.jsx("path", { d: "M-0.9 -45h1.8" }),
            ],
          })
        : null,
      e.jsx("path", {
        d: "M-3 -38.5q3 2 6 0",
        fill: "none",
        stroke: v,
        strokeWidth: 1.1,
        strokeLinecap: "round",
      }),
    ],
  });
}
function A({
  x: t,
  y: s,
  s: r = 1,
  shirt: l,
  skin: i = 0,
  hair: o = 0,
  flip: n,
  long: a,
  phones: c,
  glasses: x,
}) {
  return e.jsxs("g", {
    transform: `translate(${t} ${s}) scale(${n ? -r : r} ${r})`,
    children: [
      a
        ? e.jsx("path", { d: "M-14 -46q0 22 -3 30h34q-3-8-3-30z", fill: re[o] })
        : null,
      e.jsx("path", {
        d: "M-24 0v-12c0-11 10-19 24-19s24 8 24 19V0z",
        fill: l,
      }),
      e.jsx("rect", { x: -5, y: -35, width: 10, height: 8, fill: O[i] }),
      e.jsx("circle", { cx: 0, cy: -44, r: 13, fill: O[i] }),
      e.jsx("path", {
        d: "M-13.5 -45a13.5 13.5 0 0 1 27 0q-8-7-14-6t-13 6z",
        fill: re[o],
      }),
      e.jsx(At, { glasses: x }),
      c
        ? e.jsxs("g", {
            children: [
              e.jsx("path", {
                d: "M-15 -44a15 15 0 0 1 30 0",
                fill: "none",
                stroke: "#1e293b",
                strokeWidth: 3,
              }),
              e.jsx("rect", {
                x: -18,
                y: -48,
                width: 6,
                height: 10,
                rx: 2,
                fill: "#ef4444",
              }),
              e.jsx("rect", {
                x: 12,
                y: -48,
                width: 6,
                height: 10,
                rx: 2,
                fill: "#ef4444",
              }),
            ],
          })
        : null,
    ],
  });
}
function b({ wall: t, floor: s, horizon: r = 150 }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: S, height: r, fill: t }),
      e.jsx("rect", { y: r, width: S, height: E - r, fill: s }),
      e.jsx("rect", {
        y: r - 3,
        width: S,
        height: 3,
        fill: "rgba(0,0,0,0.15)",
      }),
    ],
  });
}
function $({ x: t, y: s, w: r, color: l = "#8b5e34" }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { x: t, y: s, width: r, height: 9, rx: 2, fill: l }),
      e.jsx("rect", {
        x: t,
        y: s + 9,
        width: r,
        height: 4,
        fill: "rgba(0,0,0,0.25)",
      }),
      e.jsx("rect", { x: t + 8, y: s + 13, width: 7, height: E - s, fill: l }),
      e.jsx("rect", {
        x: t + r - 15,
        y: s + 13,
        width: 7,
        height: E - s,
        fill: l,
      }),
    ],
  });
}
function Ee({ x: t, y: s, w: r, h: l, children: i }) {
  return e.jsx("g", {
    transform: `translate(${t} ${s}) scale(${r / 100} ${l / 60})`,
    children: i,
  });
}
function U({ x: t, y: s, w: r = 90, screen: l = "#e2e8f0", children: i }) {
  const o = r * 0.64;
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: t - r / 2,
        y: s - o,
        width: r,
        height: o,
        rx: 4,
        fill: "#1f2937",
      }),
      e.jsx("rect", {
        x: t - r / 2 + 4,
        y: s - o + 4,
        width: r - 8,
        height: o - 8,
        rx: 2,
        fill: l,
      }),
      e.jsx(Ee, {
        x: t - r / 2 + 4,
        y: s - o + 4,
        w: r - 8,
        h: o - 8,
        children: i,
      }),
      e.jsx("path", {
        d: `M${t - r / 2 - 9} ${s}h${r + 18}l-6 5h${-(r + 6)}z`,
        fill: "#94a3b8",
      }),
    ],
  });
}
function V({
  x: t,
  y: s,
  w: r = 130,
  h: l = 80,
  screen: i = "#e2e8f0",
  children: o,
}) {
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: t - 6,
        y: s - 16,
        width: 12,
        height: 16,
        fill: "#334155",
      }),
      e.jsx("rect", {
        x: t - 24,
        y: s - 3,
        width: 48,
        height: 4,
        rx: 2,
        fill: "#334155",
      }),
      e.jsx("rect", {
        x: t - r / 2,
        y: s - 16 - l,
        width: r,
        height: l,
        rx: 5,
        fill: "#1e293b",
      }),
      e.jsx("rect", {
        x: t - r / 2 + 5,
        y: s - 11 - l,
        width: r - 10,
        height: l - 10,
        rx: 2,
        fill: i,
      }),
      e.jsx(Ee, {
        x: t - r / 2 + 5,
        y: s - 11 - l,
        w: r - 10,
        h: l - 10,
        children: o,
      }),
    ],
  });
}
function z({
  x: t,
  y: s,
  w: r,
  h: l,
  bar: i = "#3b82f6",
  fill: o = "#ffffff",
  children: n,
}) {
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: t,
        y: s,
        width: r,
        height: l,
        rx: 1.5,
        fill: o,
        stroke: "#94a3b8",
        strokeWidth: 0.6,
      }),
      e.jsx("rect", { x: t, y: s, width: r, height: 5, rx: 1.5, fill: i }),
      e.jsx("circle", { cx: t + r - 3, cy: s + 2.5, r: 1.1, fill: "#fecaca" }),
      n,
    ],
  });
}
function H({ x: t, y: s, s: r = 1 }) {
  return e.jsx("path", {
    transform: `translate(${t} ${s}) scale(${r})`,
    d: "M0 0v14l4-4 3 6 2.4-1.2-3-6h5.6z",
    fill: "#ffffff",
    stroke: v,
    strokeWidth: 1.1,
    strokeLinejoin: "round",
  });
}
function T({ x: t, y: s, s: r = 1, color: l = "#fbbf24" }) {
  return e.jsxs("g", {
    transform: `translate(${t} ${s}) scale(${r})`,
    children: [
      e.jsx("path", { d: "M-12 -9h8l3 3h13v15h-24z", fill: l }),
      e.jsx("path", {
        d: "M-12 -4h24v13h-24z",
        fill: "#ffffff",
        opacity: 0.25,
      }),
    ],
  });
}
function _({ x: t, y: s, s: r = 1, color: l = "#ffffff" }) {
  return e.jsxs("g", {
    transform: `translate(${t} ${s}) scale(${r})`,
    children: [
      e.jsx("path", {
        d: "M-7 -9h10l4 4v14h-14z",
        fill: l,
        stroke: "#64748b",
        strokeWidth: 0.8,
      }),
      e.jsx("path", {
        d: "M-4 -3h8M-4 0h8M-4 3h6",
        stroke: "#94a3b8",
        strokeWidth: 0.8,
      }),
    ],
  });
}
function ye({ x: t, y: s, w: r = 90, cells: l, free: i = [] }) {
  const o = (r - 8) / l.length;
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: t,
        y: s,
        width: r,
        height: 26,
        rx: 2,
        fill: "#166534",
      }),
      Array.from({ length: Math.round(r / 6) }, (n, a) =>
        e.jsx(
          "rect",
          { x: t + 3 + a * 6, y: s + 26, width: 3, height: 5, fill: "#facc15" },
          a,
        ),
      ),
      l.map((n, a) =>
        e.jsx(
          "rect",
          {
            x: t + 4 + a * o + 1,
            y: s + 4,
            width: o - 2,
            height: 18,
            rx: 1.5,
            fill: i.includes(a) ? "#14532d" : n,
            stroke: i.includes(a) ? "#4ade80" : "none",
            strokeDasharray: i.includes(a) ? "2 2" : void 0,
          },
          a,
        ),
      ),
    ],
  });
}
function zt({ x: t, y: s, w: r = 70, label: l }) {
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: t,
        y: s,
        width: r,
        height: 40,
        rx: 4,
        fill: "#334155",
        stroke: "#94a3b8",
        strokeWidth: 1,
      }),
      e.jsx("rect", {
        x: t + 6,
        y: s + 6,
        width: r - 12,
        height: 10,
        rx: 2,
        fill: "#475569",
      }),
      l
        ? e.jsx("text", {
            x: t + r / 2,
            y: s + 31,
            textAnchor: "middle",
            fontSize: 9,
            fontWeight: 700,
            fill: "#e2e8f0",
            children: l,
          })
        : null,
    ],
  });
}
function G({ d: t, color: s = "#f97316" }) {
  return e.jsx("g", {
    children: e.jsx("path", {
      d: t,
      fill: "none",
      stroke: s,
      strokeWidth: 3,
      strokeLinecap: "round",
      strokeDasharray: "6 4",
    }),
  });
}
function ke({ x: t, y: s, angle: r = 0, color: l = "#f97316" }) {
  return e.jsx("path", {
    transform: `translate(${t} ${s}) rotate(${r})`,
    d: "M0 0l-9 -6v12z",
    fill: l,
  });
}
function De({ x: t, y: s, s: r = 1, paper: l }) {
  return e.jsxs("g", {
    transform: `translate(${t} ${s}) scale(${r})`,
    children: [
      e.jsx("rect", {
        x: -30,
        y: -58,
        width: 60,
        height: 20,
        rx: 3,
        fill: "#cbd5e1",
      }),
      e.jsx("rect", {
        x: -40,
        y: -40,
        width: 80,
        height: 36,
        rx: 5,
        fill: "#e2e8f0",
        stroke: "#94a3b8",
      }),
      e.jsx("rect", {
        x: -28,
        y: -16,
        width: 56,
        height: 6,
        rx: 2,
        fill: "#475569",
      }),
      e.jsx("circle", { cx: 30, cy: -30, r: 3, fill: "#22c55e" }),
      l
        ? e.jsxs("g", {
            children: [
              e.jsx("path", {
                d: "M-22 -12h44v34h-44z",
                fill: "#ffffff",
                stroke: "#94a3b8",
              }),
              e.jsx("path", {
                d: "M-16 -4h32M-16 2h32M-16 8h24M-16 14h28",
                stroke: "#64748b",
                strokeWidth: 1.4,
              }),
            ],
          })
        : null,
    ],
  });
}
function ie({ x: t, y: s, skin: r = 0, s: l = 1, angle: i = 0 }) {
  return e.jsxs("g", {
    transform: `translate(${t} ${s}) rotate(${i}) scale(${l})`,
    children: [
      e.jsx("rect", {
        x: -4,
        y: -2,
        width: 8,
        height: 22,
        rx: 4,
        fill: O[r],
        stroke: "rgba(0,0,0,0.2)",
      }),
      e.jsx("rect", {
        x: -12,
        y: 14,
        width: 26,
        height: 24,
        rx: 8,
        fill: O[r],
        stroke: "rgba(0,0,0,0.2)",
      }),
      e.jsx("rect", { x: -10, y: 36, width: 22, height: 30, fill: "#2563eb" }),
    ],
  });
}
function we({ d: t }) {
  return e.jsx("path", {
    d: t,
    fill: "none",
    stroke: "#0f172a",
    strokeWidth: 3.5,
    strokeLinecap: "round",
  });
}
function be({ x: t, y: s, w: r, share: l, color: i = "#22c55e" }) {
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: t,
        y: s,
        width: r,
        height: 4,
        rx: 2,
        fill: "#cbd5e1",
      }),
      e.jsx("rect", { x: t, y: s, width: r * l, height: 4, rx: 2, fill: i }),
    ],
  });
}
function f({
  x: t,
  y: s,
  children: r,
  size: l = 5,
  color: i = v,
  weight: o = 700,
  anchor: n = "start",
}) {
  return e.jsx("text", {
    x: t,
    y: s,
    fontSize: l,
    fontWeight: o,
    fill: i,
    textAnchor: n,
    fontFamily: "system-ui, sans-serif",
    children: r,
  });
}
function Rt() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#fde68a", floor: "#a16207" }),
      e.jsx("rect", {
        x: 30,
        y: 30,
        width: 50,
        height: 40,
        rx: 3,
        fill: "#fef3c7",
        stroke: "#b45309",
        strokeWidth: 3,
      }),
      e.jsx("path", { d: "M36 62l12-14 9 9 6-6 10 11z", fill: "#65a30d" }),
      e.jsx("circle", { cx: 68, cy: 42, r: 5, fill: "#f59e0b" }),
      e.jsx("path", {
        d: "M200 200v-40c0-16 14-26 34-26s34 10 34 26v40z",
        fill: "#7c3aed",
      }),
      e.jsx(A, {
        x: 234,
        y: 140,
        s: 1.25,
        shirt: "#7c3aed",
        skin: 1,
        hair: 4,
        glasses: !0,
      }),
      e.jsxs("g", {
        transform: "rotate(-8 150 120)",
        children: [
          e.jsx("rect", {
            x: 96,
            y: 74,
            width: 110,
            height: 82,
            rx: 8,
            fill: "#111827",
          }),
          e.jsx("rect", {
            x: 103,
            y: 81,
            width: 96,
            height: 68,
            rx: 3,
            fill: "#bae6fd",
          }),
          [0, 1, 2].map((t) =>
            e.jsx(
              "rect",
              {
                x: 110 + t * 22,
                y: 88,
                width: 14,
                height: 14,
                rx: 3,
                fill: ["#f87171", "#34d399", "#a78bfa"][t],
              },
              t,
            ),
          ),
          e.jsx("rect", {
            x: 110,
            y: 110,
            width: 36,
            height: 32,
            rx: 6,
            fill: "#f59e0b",
            stroke: "#ffffff",
            strokeWidth: 2,
          }),
          e.jsx("path", { d: "M114 136l9-10 6 6 4-4 9 8z", fill: "#ffffff" }),
          e.jsx("circle", { cx: 137, cy: 118, r: 3, fill: "#ffffff" }),
        ],
      }),
      e.jsx(ie, { x: 132, y: 128, skin: 1, angle: -20, s: 1.1 }),
    ],
  });
}
function Ct() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#cbd5e1", floor: "#64748b", horizon: 140 }),
      e.jsx("rect", {
        x: 20,
        y: 20,
        width: 40,
        height: 60,
        rx: 3,
        fill: "#94a3b8",
      }),
      e.jsx("rect", { x: 26, y: 28, width: 28, height: 4, fill: "#22c55e" }),
      e.jsx("rect", { x: 26, y: 38, width: 28, height: 4, fill: "#22c55e" }),
      e.jsx("rect", { x: 26, y: 48, width: 28, height: 4, fill: "#f59e0b" }),
      e.jsx($, { x: 70, y: 150, w: 230, color: "#475569" }),
      e.jsxs(V, {
        x: 190,
        y: 150,
        w: 150,
        h: 96,
        screen: "#020617",
        children: [
          e.jsx(f, {
            x: 5,
            y: 12,
            size: 6,
            color: "#4ade80",
            weight: 600,
            children: "C:\\> echo Hello",
          }),
          e.jsx(f, {
            x: 5,
            y: 24,
            size: 6,
            color: "#e2e8f0",
            weight: 500,
            children: "Hello",
          }),
          e.jsx(f, {
            x: 5,
            y: 38,
            size: 6,
            color: "#4ade80",
            weight: 600,
            children: "C:\\> _",
          }),
        ],
      }),
      e.jsx("rect", {
        x: 140,
        y: 152,
        width: 80,
        height: 10,
        rx: 2,
        fill: "#1e293b",
      }),
      e.jsx(A, { x: 86, y: 170, s: 1.2, shirt: "#0f766e", skin: 3, hair: 3 }),
    ],
  });
}
function Lt() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#bfdbfe", floor: "#78716c" }),
      e.jsx("rect", {
        x: 20,
        y: 36,
        width: 60,
        height: 70,
        rx: 4,
        fill: "#93c5fd",
        stroke: "#ffffff",
        strokeWidth: 4,
      }),
      e.jsx("path", {
        d: "M50 36v70M20 71h60",
        stroke: "#ffffff",
        strokeWidth: 3,
      }),
      e.jsx($, { x: 60, y: 160, w: 240 }),
      e.jsxs(U, {
        x: 180,
        y: 160,
        w: 170,
        children: [
          e.jsx("rect", { width: 100, height: 60, fill: "#0ea5e9" }),
          e.jsx(z, { x: 8, y: 6, w: 50, h: 30, bar: "#64748b" }),
          e.jsxs(z, {
            x: 20,
            y: 14,
            w: 68,
            h: 40,
            bar: "#2563eb",
            children: [
              e.jsx("circle", { cx: 30, cy: 27, r: 5, fill: "#2563eb" }),
              e.jsx("path", {
                d: "M30 24v4M30 29.6v0.6",
                stroke: "#ffffff",
                strokeWidth: 1.2,
                strokeLinecap: "round",
              }),
              e.jsx(f, {
                x: 38,
                y: 26,
                size: 4.4,
                children: "Updates are ready",
              }),
              e.jsx(f, {
                x: 38,
                y: 32,
                size: 3.6,
                weight: 500,
                children: "Install them now?",
              }),
              e.jsx("rect", {
                x: 44,
                y: 42,
                width: 18,
                height: 7,
                rx: 1.5,
                fill: "#2563eb",
              }),
              e.jsx(f, {
                x: 53,
                y: 46.8,
                size: 3.6,
                color: "#ffffff",
                anchor: "middle",
                children: "Now",
              }),
              e.jsx("rect", {
                x: 65,
                y: 42,
                width: 18,
                height: 7,
                rx: 1.5,
                fill: "#e2e8f0",
                stroke: "#94a3b8",
                strokeWidth: 0.5,
              }),
              e.jsx(f, {
                x: 74,
                y: 46.8,
                size: 3.6,
                anchor: "middle",
                children: "Later",
              }),
              e.jsx(H, { x: 74, y: 45, s: 0.4 }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ft() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#ddd6fe", floor: "#6b7280", horizon: 150 }),
      e.jsx($, { x: 20, y: 160, w: 280, color: "#a16207" }),
      e.jsxs(V, {
        x: 150,
        y: 160,
        w: 190,
        h: 110,
        screen: "#1d4ed8",
        children: [
          e.jsxs(z, {
            x: 10,
            y: 8,
            w: 58,
            h: 36,
            bar: "#7c3aed",
            fill: "#f8fafc",
            children: [
              e.jsx("rect", {
                x: 14,
                y: 17,
                width: 30,
                height: 3,
                fill: "#cbd5e1",
              }),
              e.jsx("rect", {
                x: 14,
                y: 23,
                width: 40,
                height: 3,
                fill: "#cbd5e1",
              }),
              e.jsx("rect", {
                x: 14,
                y: 29,
                width: 24,
                height: 3,
                fill: "#cbd5e1",
              }),
            ],
          }),
          e.jsx("rect", {
            x: 10,
            y: 8,
            width: 78,
            height: 46,
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: 0.8,
            strokeDasharray: "2 1.5",
          }),
          e.jsx("path", {
            d: "M70 46l14 6",
            stroke: "#fde047",
            strokeWidth: 1.2,
          }),
          e.jsx(H, { x: 84, y: 50, s: 0.55 }),
        ],
      }),
      e.jsx("ellipse", {
        cx: 262,
        cy: 166,
        rx: 11,
        ry: 6,
        fill: "#e5e7eb",
        stroke: "#6b7280",
      }),
      e.jsx(A, {
        x: 262,
        y: 200,
        s: 0.9,
        shirt: "#be185d",
        skin: 2,
        hair: 0,
        long: !0,
        flip: !0,
      }),
    ],
  });
}
function Pt() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#1e1b4b", floor: "#312e81", horizon: 150 }),
      e.jsx("circle", { cx: 40, cy: 30, r: 3, fill: "#a78bfa" }),
      e.jsx("circle", { cx: 280, cy: 24, r: 2, fill: "#f0abfc" }),
      e.jsx($, { x: 10, y: 156, w: 300, color: "#4c1d95" }),
      e.jsxs(V, {
        x: 160,
        y: 156,
        w: 200,
        h: 112,
        screen: "#0f172a",
        children: [
          e.jsx("rect", { width: 100, height: 60, fill: "#065f46" }),
          e.jsx("path", {
            d: "M0 48q25-14 50-4t50-6v22h-100z",
            fill: "#14532d",
          }),
          e.jsx("circle", { cx: 78, cy: 14, r: 6, fill: "#fde047" }),
          e.jsx("path", { d: "M30 40l8-10 8 10z", fill: "#a3e635" }),
          e.jsx("rect", { x: 34, y: 36, width: 8, height: 6, fill: "#ef4444" }),
          e.jsxs(z, {
            x: 60,
            y: 34,
            w: 36,
            h: 22,
            bar: "#db2777",
            fill: "#fdf2f8",
            children: [
              e.jsx("path", {
                d: "M66 50v-8l8-2v8",
                fill: "none",
                stroke: "#db2777",
                strokeWidth: 1.4,
              }),
              e.jsx("circle", { cx: 65, cy: 50, r: 1.6, fill: "#db2777" }),
              e.jsx("circle", { cx: 73, cy: 48, r: 1.6, fill: "#db2777" }),
              e.jsx(be, { x: 78, y: 45, w: 14, share: 0.45, color: "#db2777" }),
            ],
          }),
        ],
      }),
      e.jsx("path", {
        d: "M40 120l4-10 4 10M270 116l3-8 3 8",
        stroke: "#f0abfc",
        strokeWidth: 2,
        fill: "none",
      }),
      e.jsx(A, {
        x: 160,
        y: 200,
        s: 1.05,
        shirt: "#0ea5e9",
        skin: 2,
        hair: 3,
        phones: !0,
      }),
    ],
  });
}
function Tt() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#ecfccb", floor: "#a8a29e", horizon: 160 }),
      e.jsx($, { x: 130, y: 164, w: 180 }),
      e.jsxs(U, {
        x: 222,
        y: 164,
        w: 150,
        children: [
          e.jsx("rect", { width: 100, height: 60, fill: "#e0f2fe" }),
          e.jsx("rect", {
            x: 8,
            y: 6,
            width: 12,
            height: 12,
            rx: 2,
            fill: "#f97316",
          }),
          e.jsx("path", {
            d: "M11 15l6-6M12 9h5v5",
            stroke: "#ffffff",
            strokeWidth: 1.2,
            fill: "none",
          }),
          e.jsx(H, { x: 16, y: 14, s: 0.4 }),
          e.jsxs(z, {
            x: 30,
            y: 16,
            w: 60,
            h: 38,
            bar: "#f97316",
            children: [
              e.jsx(f, {
                x: 60,
                y: 36,
                size: 5,
                anchor: "middle",
                children: "Opening…",
              }),
              e.jsx(be, { x: 40, y: 42, w: 40, share: 0.6, color: "#f97316" }),
            ],
          }),
        ],
      }),
      e.jsx(zt, { x: 14, y: 38, w: 70, label: "SSD" }),
      e.jsx(ye, {
        x: 14,
        y: 120,
        w: 96,
        cells: [
          "#64748b",
          "#64748b",
          "#f97316",
          "#f97316",
          "#1e3a8a",
          "#1e3a8a",
        ],
        free: [4, 5],
      }),
      e.jsx(f, {
        x: 62,
        y: 164,
        size: 9,
        anchor: "middle",
        color: "#1e293b",
        children: "RAM",
      }),
      e.jsx(G, { d: "M49 82v30" }),
      e.jsx(ke, { x: 49, y: 116, angle: 90 }),
      e.jsx("rect", {
        x: 42,
        y: 92,
        width: 14,
        height: 12,
        rx: 2,
        fill: "#f97316",
      }),
    ],
  });
}
function Et() {
  const t = [
    "#64748b",
    "#64748b",
    "#38bdf8",
    "#38bdf8",
    "#a3e635",
    "#a3e635",
    "#f472b6",
    "#fbbf24",
  ];
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: S, height: E, fill: "#0f172a" }),
      e.jsx(f, { x: 20, y: 36, size: 11, color: "#e2e8f0", children: "RAM" }),
      e.jsx(ye, { x: 20, y: 46, w: 180, cells: t, free: [2, 3] }),
      e.jsxs("g", {
        transform: "translate(176 120)",
        children: [
          e.jsx("rect", {
            x: 0,
            y: 0,
            width: 124,
            height: 62,
            rx: 6,
            fill: "#334155",
            stroke: "#94a3b8",
          }),
          e.jsx("rect", {
            x: 10,
            y: 10,
            width: 104,
            height: 14,
            rx: 3,
            fill: "#475569",
          }),
          e.jsx(f, {
            x: 62,
            y: 42,
            size: 9,
            color: "#e2e8f0",
            anchor: "middle",
            children: "Virtual memory",
          }),
          e.jsx("rect", {
            x: 34,
            y: 48,
            width: 26,
            height: 8,
            rx: 2,
            fill: "#38bdf8",
          }),
        ],
      }),
      e.jsx("rect", {
        x: 70,
        y: 120,
        width: 44,
        height: 22,
        rx: 3,
        fill: "#38bdf8",
      }),
      e.jsx(G, { d: "M72 82q10 30 30 36", color: "#38bdf8" }),
      e.jsx(G, { d: "M120 132h46", color: "#38bdf8" }),
      e.jsx(ke, { x: 172, y: 132, color: "#38bdf8" }),
      e.jsxs("g", {
        transform: "translate(232 30)",
        children: [
          e.jsx("rect", {
            x: -36,
            y: 0,
            width: 72,
            height: 46,
            rx: 4,
            fill: "#1e293b",
          }),
          e.jsx("rect", {
            x: -32,
            y: 4,
            width: 64,
            height: 38,
            rx: 2,
            fill: "#e2e8f0",
          }),
          [0, 1, 2, 3].map((s) =>
            e.jsx(
              "rect",
              {
                x: -28 + s * 6,
                y: 8 + s * 6,
                width: 34,
                height: 18,
                rx: 1.5,
                fill: ["#38bdf8", "#a3e635", "#f472b6", "#fbbf24"][s],
                stroke: "#475569",
                strokeWidth: 0.6,
              },
              s,
            ),
          ),
          e.jsx("path", { d: "M-44 54h88l-6 5h-76z", fill: "#94a3b8" }),
          e.jsx("path", { d: "M-40 50h80", stroke: "#94a3b8", strokeWidth: 4 }),
        ],
      }),
    ],
  });
}
function Dt() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#fce7f3", floor: "#9ca3af", horizon: 150 }),
      e.jsx($, { x: 10, y: 156, w: 180, color: "#57534e" }),
      e.jsxs(V, {
        x: 100,
        y: 156,
        w: 170,
        h: 100,
        screen: "#334155",
        children: [
          e.jsxs(z, {
            x: 8,
            y: 6,
            w: 84,
            h: 48,
            bar: "#7c3aed",
            fill: "#1e1b4b",
            children: [
              e.jsx("rect", {
                x: 12,
                y: 14,
                width: 50,
                height: 28,
                fill: "#4c1d95",
              }),
              e.jsx("path", { d: "M30 22v12l10-6z", fill: "#e9d5ff" }),
              [0, 1, 2, 3, 4].map((t) =>
                e.jsx(
                  "rect",
                  {
                    x: 12 + t * 14,
                    y: 45,
                    width: 12,
                    height: 5,
                    fill: [
                      "#f472b6",
                      "#38bdf8",
                      "#a3e635",
                      "#fbbf24",
                      "#f472b6",
                    ][t],
                  },
                  t,
                ),
              ),
              e.jsx("rect", {
                x: 84,
                y: 6,
                width: 8,
                height: 5,
                fill: "#dc2626",
              }),
              e.jsx("path", {
                d: "M86 7.2l4 2.6M90 7.2l-4 2.6",
                stroke: "#ffffff",
                strokeWidth: 0.8,
              }),
            ],
          }),
          e.jsx(H, { x: 88, y: 9, s: 0.45 }),
        ],
      }),
      e.jsx(ye, {
        x: 200,
        y: 62,
        w: 110,
        cells: [
          "#64748b",
          "#64748b",
          "#7c3aed",
          "#7c3aed",
          "#7c3aed",
          "#38bdf8",
        ],
        free: [2, 3, 4],
      }),
      e.jsx(f, {
        x: 255,
        y: 52,
        size: 10,
        anchor: "middle",
        color: "#831843",
        children: "RAM",
      }),
      e.jsx("path", {
        d: "M226 116l6 8 14-16",
        fill: "none",
        stroke: "#16a34a",
        strokeWidth: 4,
        strokeLinecap: "round",
      }),
      e.jsx(A, {
        x: 252,
        y: 200,
        s: 0.8,
        shirt: "#ea580c",
        skin: 0,
        hair: 2,
        flip: !0,
      }),
    ],
  });
}
function Ot() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#e0e7ff", floor: "#a8a29e", horizon: 150 }),
      e.jsx($, { x: 10, y: 150, w: 300, color: "#92400e" }),
      e.jsx(De, { x: 70, y: 150, s: 1.2 }),
      e.jsxs(U, {
        x: 225,
        y: 150,
        w: 140,
        children: [
          e.jsx("rect", { width: 100, height: 60, fill: "#f1f5f9" }),
          e.jsxs(z, {
            x: 14,
            y: 10,
            w: 72,
            h: 40,
            bar: "#2563eb",
            children: [
              e.jsx("path", { d: "M24 22h16v10h-16z", fill: "#cbd5e1" }),
              e.jsx("rect", {
                x: 27,
                y: 19,
                width: 10,
                height: 4,
                fill: "#94a3b8",
              }),
              e.jsx(f, {
                x: 46,
                y: 26,
                size: 4.6,
                children: "Installing driver",
              }),
              e.jsx(be, { x: 24, y: 38, w: 54, share: 0.7, color: "#2563eb" }),
            ],
          }),
        ],
      }),
      e.jsx(we, { d: "M112 110q40 50 82 36" }),
      e.jsx("rect", {
        x: 188,
        y: 140,
        width: 12,
        height: 8,
        rx: 1,
        fill: "#64748b",
      }),
      e.jsx(ie, { x: 196, y: 150, skin: 2, angle: -90, s: 0.9 }),
    ],
  });
}
function It() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#fef9c3", floor: "#78716c", horizon: 150 }),
      e.jsx($, { x: 10, y: 156, w: 300, color: "#713f12" }),
      e.jsxs("g", {
        transform: "translate(76 156)",
        children: [
          e.jsx("rect", {
            x: -62,
            y: -26,
            width: 124,
            height: 26,
            rx: 4,
            fill: "#e2e8f0",
            stroke: "#94a3b8",
          }),
          e.jsx("rect", {
            x: -54,
            y: -22,
            width: 108,
            height: 8,
            fill: "#7dd3fc",
            opacity: 0.7,
          }),
          e.jsx("path", {
            d: "M-62 -26l10 -50h112l12 50",
            fill: "#cbd5e1",
            stroke: "#94a3b8",
            opacity: 0.95,
          }),
          e.jsx("path", {
            d: "M-40 -30l6 -34h56l6 34z",
            fill: "#ffffff",
            stroke: "#94a3b8",
          }),
          e.jsx("circle", { cx: -6, cy: -50, r: 8, fill: "#f59e0b" }),
          e.jsx("path", {
            d: "M-26 -36h40",
            stroke: "#64748b",
            strokeWidth: 2,
          }),
          e.jsx("rect", {
            x: -56,
            y: -20,
            width: 4,
            height: 6,
            fill: "#a5f3fc",
          }),
        ],
      }),
      e.jsxs(V, {
        x: 232,
        y: 156,
        w: 130,
        h: 92,
        children: [
          e.jsx("rect", { width: 100, height: 60, fill: "#e2e8f0" }),
          e.jsx("rect", {
            x: 30,
            y: 4,
            width: 40,
            height: 52,
            fill: "#ffffff",
            stroke: "#94a3b8",
            strokeWidth: 0.6,
          }),
          e.jsx("circle", { cx: 50, cy: 20, r: 7, fill: "#f59e0b" }),
          e.jsx("path", {
            d: "M36 44h28M36 50h20",
            stroke: "#64748b",
            strokeWidth: 1.6,
          }),
        ],
      }),
      e.jsx(we, { d: "M138 150q30 10 54 -2" }),
    ],
  });
}
function Ut() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#dcfce7", floor: "#a3a3a3", horizon: 150 }),
      e.jsx("rect", {
        x: 18,
        y: 24,
        width: 70,
        height: 48,
        rx: 3,
        fill: "#ffffff",
        stroke: "#16a34a",
        strokeWidth: 3,
      }),
      e.jsx(f, {
        x: 53,
        y: 44,
        size: 9,
        anchor: "middle",
        color: "#166534",
        children: "Year 9",
      }),
      e.jsx(f, {
        x: 53,
        y: 58,
        size: 8,
        anchor: "middle",
        color: "#166534",
        weight: 500,
        children: "Worksheet",
      }),
      e.jsx($, { x: 130, y: 150, w: 180, color: "#57534e" }),
      e.jsx(De, { x: 210, y: 150, s: 1.25, paper: !0 }),
      e.jsxs("g", {
        transform: "translate(110 200)",
        children: [
          e.jsx("path", {
            d: "M-28 0v-52c0-12 12-20 28-20s28 8 28 20v52z",
            fill: "#1d4ed8",
          }),
          e.jsx("rect", { x: -5, y: -80, width: 10, height: 9, fill: O[3] }),
          e.jsx("circle", { cx: 0, cy: -92, r: 14, fill: O[3] }),
          e.jsx("path", {
            d: "M-14 -94a14 14 0 0 1 28 0q-8-6-14-5t-14 5z",
            fill: re[3],
          }),
          e.jsx("circle", { cx: 5, cy: -93, r: 1.6, fill: v }),
          e.jsx("circle", { cx: -3, cy: -93, r: 1.6, fill: v }),
          e.jsx("path", {
            d: "M-1 -85q3 2 6 0",
            stroke: v,
            fill: "none",
            strokeWidth: 1.1,
          }),
          e.jsx("path", {
            d: "M22 -50l34 -6",
            stroke: "#1d4ed8",
            strokeWidth: 9,
            strokeLinecap: "round",
          }),
        ],
      }),
    ],
  });
}
function Ht() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#0c4a6e", floor: "#164e63", horizon: 150 }),
      e.jsxs("g", {
        transform: "translate(250 176)",
        children: [
          e.jsx("rect", {
            x: -30,
            y: -110,
            width: 60,
            height: 110,
            rx: 5,
            fill: "#1e293b",
            stroke: "#38bdf8",
          }),
          e.jsx("circle", { cx: 0, cy: -90, r: 6, fill: "#22d3ee" }),
          e.jsx("rect", {
            x: -20,
            y: -70,
            width: 40,
            height: 4,
            fill: "#334155",
          }),
          e.jsx("rect", {
            x: -20,
            y: -60,
            width: 40,
            height: 4,
            fill: "#334155",
          }),
          e.jsx("rect", {
            x: -10,
            y: -30,
            width: 10,
            height: 6,
            rx: 1,
            fill: "#94a3b8",
          }),
        ],
      }),
      e.jsx(we, { d: "M245 149q-60 30 -120 -10" }),
      e.jsxs("g", {
        transform: "translate(108 128)",
        children: [
          e.jsx("path", {
            d: "M-34 -12q0-12 14-12h40q14 0 14 12l6 22q2 12 -8 12q-6 0 -10 -8h-44q-4 8 -10 8q-10 0 -8 -12z",
            fill: "#e5e7eb",
            stroke: "#94a3b8",
          }),
          e.jsx("path", {
            d: "M-22 -4h10M-17 -9v10",
            stroke: "#334155",
            strokeWidth: 3,
            strokeLinecap: "round",
          }),
          e.jsx("circle", { cx: 14, cy: -8, r: 3, fill: "#22c55e" }),
          e.jsx("circle", { cx: 20, cy: -2, r: 3, fill: "#ef4444" }),
          e.jsx("circle", { cx: 8, cy: -2, r: 3, fill: "#3b82f6" }),
          e.jsx("circle", { cx: 14, cy: 4, r: 3, fill: "#f59e0b" }),
        ],
      }),
      e.jsx(ie, { x: 70, y: 140, skin: 1, angle: 30, s: 0.9 }),
      e.jsx(ie, { x: 150, y: 140, skin: 1, angle: -30, s: 0.9 }),
      e.jsx("path", {
        d: "M200 140l10 -8M205 156l12 0",
        stroke: "#fde047",
        strokeWidth: 2.5,
        strokeLinecap: "round",
      }),
    ],
  });
}
function qt() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#fee2e2", floor: "#a8a29e", horizon: 150 }),
      e.jsx("rect", {
        x: 18,
        y: 20,
        width: 110,
        height: 70,
        rx: 3,
        fill: "#ffffff",
        stroke: "#b91c1c",
        strokeWidth: 2,
      }),
      e.jsx(f, {
        x: 73,
        y: 36,
        size: 9,
        anchor: "middle",
        color: "#991b1b",
        children: "Year 10 class",
      }),
      [0, 1, 2, 3].map((t) =>
        e.jsx(
          "path",
          {
            d: `M28 ${48 + t * 10}h${70 - t * 8}`,
            stroke: "#94a3b8",
            strokeWidth: 3,
          },
          t,
        ),
      ),
      e.jsx($, { x: 10, y: 160, w: 300, color: "#7c2d12" }),
      e.jsxs(U, {
        x: 110,
        y: 160,
        w: 130,
        children: [
          e.jsx("rect", { width: 100, height: 60, fill: "#f1f5f9" }),
          e.jsxs(z, {
            x: 10,
            y: 6,
            w: 80,
            h: 48,
            bar: "#dc2626",
            children: [
              [0, 1, 2].map((t) =>
                e.jsxs(
                  "g",
                  {
                    children: [
                      e.jsx("circle", {
                        cx: 18,
                        cy: 18 + t * 12,
                        r: 4,
                        fill: ["#38bdf8", "#a3e635", "#f472b6"][t],
                      }),
                      e.jsx("rect", {
                        x: 26,
                        y: 15 + t * 12,
                        width: 30,
                        height: 3,
                        fill: "#475569",
                      }),
                      e.jsx("rect", {
                        x: 60,
                        y: 15 + t * 12,
                        width: 20,
                        height: 3,
                        fill: "#cbd5e1",
                      }),
                    ],
                  },
                  t,
                ),
              ),
              e.jsx("rect", {
                x: 72,
                y: 46,
                width: 14,
                height: 5,
                rx: 1,
                fill: "#16a34a",
              }),
              e.jsx("path", {
                d: "M77 48.5h4M79 46.5v4",
                stroke: "#ffffff",
                strokeWidth: 0.8,
              }),
            ],
          }),
        ],
      }),
      e.jsx(A, {
        x: 240,
        y: 160,
        s: 1.1,
        shirt: "#334155",
        skin: 0,
        hair: 1,
        glasses: !0,
        flip: !0,
      }),
      [0, 1, 2].map((t) =>
        e.jsxs(
          "g",
          {
            transform: `translate(${196 + t * 34} 176) rotate(${-8 + t * 8})`,
            children: [
              e.jsx("rect", {
                x: -14,
                y: -9,
                width: 28,
                height: 18,
                rx: 2,
                fill: "#ffffff",
                stroke: "#94a3b8",
              }),
              e.jsx("circle", {
                cx: -6,
                cy: -1,
                r: 4,
                fill: ["#38bdf8", "#a3e635", "#f472b6"][t],
              }),
              e.jsx("rect", {
                x: 0,
                y: -4,
                width: 10,
                height: 2,
                fill: "#475569",
              }),
              e.jsx("rect", {
                x: 0,
                y: 1,
                width: 8,
                height: 2,
                fill: "#cbd5e1",
              }),
            ],
          },
          t,
        ),
      ),
    ],
  });
}
function _t() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#cffafe", floor: "#71717a", horizon: 150 }),
      e.jsx($, { x: 10, y: 156, w: 300, color: "#3f3f46" }),
      e.jsxs(V, {
        x: 110,
        y: 156,
        w: 170,
        h: 104,
        children: [
          e.jsx("rect", { width: 100, height: 60, fill: "#0e7490" }),
          e.jsxs(z, {
            x: 18,
            y: 8,
            w: 64,
            h: 44,
            bar: "#155e75",
            children: [
              e.jsx(f, {
                x: 50,
                y: 20,
                size: 5,
                anchor: "middle",
                children: "Change password",
              }),
              e.jsx("rect", {
                x: 26,
                y: 25,
                width: 48,
                height: 8,
                rx: 1,
                fill: "#f1f5f9",
                stroke: "#94a3b8",
                strokeWidth: 0.5,
              }),
              [0, 1, 2, 3, 4, 5, 6].map((t) =>
                e.jsx("circle", { cx: 31 + t * 5, cy: 29, r: 1.4, fill: v }, t),
              ),
              e.jsx("rect", {
                x: 26,
                y: 36,
                width: 48,
                height: 8,
                rx: 1,
                fill: "#f1f5f9",
                stroke: "#94a3b8",
                strokeWidth: 0.5,
              }),
              [0, 1, 2, 3].map((t) =>
                e.jsx("circle", { cx: 31 + t * 5, cy: 40, r: 1.4, fill: v }, t),
              ),
              e.jsx("rect", {
                x: 58,
                y: 46,
                width: 16,
                height: 5,
                rx: 1,
                fill: "#0891b2",
              }),
            ],
          }),
        ],
      }),
      e.jsx(A, {
        x: 250,
        y: 200,
        s: 1.1,
        shirt: "#9333ea",
        skin: 3,
        hair: 0,
        long: !0,
        flip: !0,
      }),
      e.jsx("rect", {
        x: 60,
        y: 160,
        width: 100,
        height: 10,
        rx: 2,
        fill: "#1e293b",
      }),
    ],
  });
}
function Bt() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#fde68a", floor: "#78716c", horizon: 150 }),
      e.jsx($, { x: 10, y: 156, w: 300, color: "#713f12" }),
      e.jsxs(U, {
        x: 150,
        y: 156,
        w: 180,
        screen: "#1e293b",
        children: [
          e.jsx("rect", { width: 100, height: 60, fill: "#312e81" }),
          e.jsx("circle", { cx: 50, cy: 14, r: 7, fill: "#a5b4fc" }),
          e.jsx("circle", { cx: 50, cy: 12, r: 2.6, fill: "#312e81" }),
          e.jsx("path", { d: "M45 18.5a5 5 0 0 1 10 0", fill: "#312e81" }),
          e.jsx("rect", {
            x: 30,
            y: 25,
            width: 40,
            height: 8,
            rx: 1.5,
            fill: "#f1f5f9",
          }),
          e.jsx(f, {
            x: 33,
            y: 30.6,
            size: 4.2,
            weight: 600,
            children: "zara.k",
          }),
          e.jsx("rect", {
            x: 30,
            y: 36,
            width: 40,
            height: 8,
            rx: 1.5,
            fill: "#f1f5f9",
          }),
          [0, 1, 2, 3, 4, 5, 6, 7].map((t) =>
            e.jsx("circle", { cx: 34 + t * 4, cy: 40, r: 1.2, fill: v }, t),
          ),
          e.jsx("rect", {
            x: 38,
            y: 48,
            width: 24,
            height: 7,
            rx: 1.5,
            fill: "#6366f1",
          }),
          e.jsx(f, {
            x: 50,
            y: 52.8,
            size: 3.8,
            color: "#ffffff",
            anchor: "middle",
            children: "Log on",
          }),
        ],
      }),
      e.jsx(A, {
        x: 276,
        y: 200,
        s: 0.95,
        shirt: "#c026d3",
        skin: 2,
        hair: 0,
        long: !0,
        flip: !0,
      }),
    ],
  });
}
function Gt() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#e2e8f0", floor: "#94a3b8", horizon: 160 }),
      e.jsx(T, { x: 160, y: 74, s: 4.2, color: "#f59e0b" }),
      e.jsx(f, {
        x: 160,
        y: 96,
        size: 11,
        anchor: "middle",
        color: "#7c2d12",
        children: "Exams",
      }),
      e.jsxs("g", {
        transform: "translate(160 104)",
        children: [
          e.jsx("rect", {
            x: -12,
            y: 0,
            width: 24,
            height: 18,
            rx: 3,
            fill: "#475569",
          }),
          e.jsx("path", {
            d: "M-7 0v-6a7 7 0 0 1 14 0v6",
            fill: "none",
            stroke: "#475569",
            strokeWidth: 3,
          }),
          e.jsx("circle", { cx: 0, cy: 9, r: 2.5, fill: "#fde047" }),
        ],
      }),
      e.jsx(A, { x: 58, y: 200, s: 1.05, shirt: "#16a34a", skin: 0, hair: 2 }),
      e.jsxs("g", {
        transform: "translate(58 120)",
        children: [
          e.jsx("circle", {
            cx: 0,
            cy: 0,
            r: 14,
            fill: "#ffffff",
            stroke: "#64748b",
            strokeWidth: 2,
          }),
          e.jsx("path", {
            d: "M-8 0q8 -8 16 0q-8 8 -16 0z",
            fill: "none",
            stroke: "#334155",
            strokeWidth: 1.6,
          }),
          e.jsx("circle", { cx: 0, cy: 0, r: 2.5, fill: "#334155" }),
        ],
      }),
      e.jsx(A, {
        x: 262,
        y: 200,
        s: 1.1,
        shirt: "#1e3a8a",
        skin: 2,
        hair: 3,
        glasses: !0,
        flip: !0,
      }),
      e.jsxs("g", {
        transform: "translate(262 116) rotate(-30)",
        children: [
          e.jsx("circle", {
            cx: -8,
            cy: 0,
            r: 7,
            fill: "none",
            stroke: "#ca8a04",
            strokeWidth: 3.5,
          }),
          e.jsx("path", {
            d: "M-1 0h18M11 0v6M16 0v5",
            stroke: "#ca8a04",
            strokeWidth: 3.5,
            strokeLinecap: "round",
          }),
        ],
      }),
    ],
  });
}
function Vt() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: S, height: E, fill: "#1e3a8a" }),
      e.jsx("rect", { x: 0, y: 180, width: S, height: 20, fill: "#0f172a" }),
      e.jsx("rect", {
        x: 12,
        y: 185,
        width: 10,
        height: 10,
        rx: 2,
        fill: "#38bdf8",
      }),
      e.jsx(T, { x: 70, y: 60, s: 2.6, color: "#fbbf24" }),
      e.jsx(f, {
        x: 70,
        y: 96,
        size: 10,
        anchor: "middle",
        color: "#e2e8f0",
        weight: 500,
        children: "Maths",
      }),
      e.jsx(T, { x: 250, y: 60, s: 2.6, color: "#fbbf24" }),
      e.jsx(f, {
        x: 250,
        y: 96,
        size: 10,
        anchor: "middle",
        color: "#e2e8f0",
        weight: 500,
        children: "History",
      }),
      e.jsx(T, { x: 160, y: 108, s: 3.4, color: "#fbbf24" }),
      e.jsx("rect", {
        x: 110,
        y: 142,
        width: 100,
        height: 20,
        rx: 2,
        fill: "#ffffff",
        stroke: "#38bdf8",
        strokeWidth: 2,
      }),
      e.jsx(f, { x: 124, y: 156, size: 12, color: v, children: "Science" }),
      e.jsx("rect", { x: 174, y: 145, width: 1.6, height: 14, fill: v }),
      e.jsx(f, {
        x: 160,
        y: 176,
        size: 9,
        anchor: "middle",
        color: "#94a3b8",
        weight: 500,
        children: "was: New folder (2)",
      }),
      e.jsx(H, { x: 196, y: 150, s: 0.9 }),
    ],
  });
}
function Kt() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#f5f5f4", floor: "#a8a29e", horizon: 150 }),
      e.jsx($, { x: 10, y: 160, w: 300, color: "#854d0e" }),
      e.jsxs(U, {
        x: 160,
        y: 160,
        w: 210,
        children: [
          e.jsx("rect", { width: 100, height: 60, fill: "#e0f2fe" }),
          e.jsxs(z, {
            x: 5,
            y: 6,
            w: 46,
            h: 46,
            bar: "#0284c7",
            children: [
              e.jsx(T, { x: 13, y: 18, s: 0.45 }),
              e.jsx(f, { x: 19, y: 19.6, size: 4, children: "Downloads" }),
              e.jsx(_, { x: 14, y: 33, s: 0.6 }),
              e.jsx(_, { x: 26, y: 33, s: 0.6 }),
              e.jsx("rect", {
                x: 33,
                y: 26,
                width: 13,
                height: 14,
                rx: 1,
                fill: "none",
                stroke: "#94a3b8",
                strokeWidth: 0.6,
                strokeDasharray: "1.5 1",
              }),
            ],
          }),
          e.jsx(T, { x: 80, y: 28, s: 1.3, color: "#fbbf24" }),
          e.jsx(f, {
            x: 80,
            y: 46,
            size: 5,
            anchor: "middle",
            children: "Science",
          }),
          e.jsx(_, { x: 64, y: 22, s: 0.8, color: "#fef3c7" }),
          e.jsx(H, { x: 66, y: 24, s: 0.45 }),
          e.jsx("path", {
            d: "M42 33q10 -14 18 -10",
            fill: "none",
            stroke: "#0284c7",
            strokeWidth: 1,
            strokeDasharray: "2 1.5",
          }),
        ],
      }),
      e.jsx(A, {
        x: 276,
        y: 200,
        s: 0.85,
        shirt: "#2563eb",
        skin: 0,
        hair: 1,
        flip: !0,
      }),
    ],
  });
}
function Yt() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: S, height: E, fill: "#065f46" }),
      e.jsx("rect", { x: 0, y: 180, width: S, height: 20, fill: "#022c22" }),
      e.jsx(T, { x: 160, y: 80, s: 4.2, color: "#fbbf24" }),
      e.jsx("rect", {
        x: 112,
        y: 118,
        width: 96,
        height: 20,
        rx: 2,
        fill: "#022c22",
      }),
      e.jsx(f, {
        x: 160,
        y: 132,
        size: 12,
        anchor: "middle",
        color: "#ecfdf5",
        children: "Homework",
      }),
      e.jsx(_, { x: 70, y: 70, s: 1.8 }),
      e.jsx(_, { x: 250, y: 64, s: 1.8, color: "#e0f2fe" }),
      e.jsx(G, { d: "M86 70q30 -10 48 4", color: "#a7f3d0" }),
      e.jsx(G, { d: "M234 64q-30 -10 -48 6", color: "#a7f3d0" }),
      e.jsx("path", {
        d: "M210 30l6 -10M226 40l12 -4M200 22l-2 -10",
        stroke: "#fde047",
        strokeWidth: 2.5,
        strokeLinecap: "round",
      }),
    ],
  });
}
function Xt() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(b, { wall: "#ede9fe", floor: "#78716c", horizon: 150 }),
      e.jsx($, { x: 10, y: 160, w: 300, color: "#713f12" }),
      e.jsxs(U, {
        x: 160,
        y: 160,
        w: 190,
        children: [
          e.jsx("rect", { width: 100, height: 60, fill: "#f8fafc" }),
          e.jsx("rect", {
            x: 4,
            y: 4,
            width: 40,
            height: 52,
            fill: "#ffffff",
            stroke: "#cbd5e1",
            strokeWidth: 0.5,
          }),
          [0, 1, 2, 3, 4, 5].map((t) =>
            e.jsx(
              "rect",
              {
                x: 8,
                y: 10 + t * 7,
                width: 30 - (t % 3) * 6,
                height: 2.4,
                fill: "#94a3b8",
              },
              t,
            ),
          ),
          e.jsxs(z, {
            x: 34,
            y: 14,
            w: 62,
            h: 38,
            bar: "#4f46e5",
            children: [
              e.jsx(f, { x: 38, y: 25, size: 4.6, children: "Save as" }),
              e.jsx(T, { x: 42, y: 33, s: 0.35 }),
              e.jsx(f, {
                x: 47,
                y: 34.5,
                size: 3.6,
                weight: 500,
                children: "Documents › English",
              }),
              e.jsx("rect", {
                x: 38,
                y: 38,
                width: 54,
                height: 7,
                rx: 1,
                fill: "#f1f5f9",
                stroke: "#4f46e5",
                strokeWidth: 0.6,
              }),
              e.jsx(f, {
                x: 40,
                y: 43,
                size: 4.2,
                weight: 600,
                children: "Macbeth essay",
              }),
              e.jsx("rect", {
                x: 78,
                y: 46.5,
                width: 14,
                height: 4.5,
                rx: 1,
                fill: "#4f46e5",
              }),
              e.jsx(f, {
                x: 85,
                y: 50,
                size: 3.2,
                color: "#ffffff",
                anchor: "middle",
                children: "Save",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Jt() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("rect", { width: S, height: E, fill: "#7c2d12" }),
      e.jsx("rect", { x: 0, y: 180, width: S, height: 20, fill: "#431407" }),
      e.jsx(_, { x: 90, y: 70, s: 3, color: "#fef3c7" }),
      e.jsx(f, {
        x: 90,
        y: 112,
        size: 10,
        anchor: "middle",
        color: "#ffedd5",
        weight: 500,
        children: "old draft",
      }),
      e.jsx(H, { x: 100, y: 78, s: 1.2 }),
      e.jsx(G, { d: "M120 70q60 -30 100 20", color: "#fdba74" }),
      e.jsx(ke, { x: 222, y: 94, angle: 60, color: "#fdba74" }),
      e.jsxs("g", {
        transform: "translate(236 140)",
        children: [
          e.jsx("path", {
            d: "M-24 -30h48l-5 46h-38z",
            fill: "#cbd5e1",
            stroke: "#475569",
            strokeWidth: 2,
          }),
          e.jsx("rect", {
            x: -28,
            y: -38,
            width: 56,
            height: 8,
            rx: 2,
            fill: "#94a3b8",
          }),
          e.jsx("path", {
            d: "M-10 -24v34M0 -24v34M10 -24v34",
            stroke: "#64748b",
            strokeWidth: 2,
          }),
        ],
      }),
    ],
  });
}
const Zt = {
  "ui-icon": Rt,
  "ui-command": Ct,
  "ui-message": Lt,
  "ui-window": Ft,
  "mem-multitask": Pt,
  "mem-open": Tt,
  "mem-virtual": Et,
  "mem-close": Dt,
  "per-printer": Ot,
  "per-scanner": It,
  "per-print": Ut,
  "per-controller": Ht,
  "usr-accounts": qt,
  "usr-password": _t,
  "usr-login": Bt,
  "usr-access": Gt,
  "file-rename": Vt,
  "file-move": Kt,
  "file-folder": Yt,
  "file-save": Xt,
  "file-delete": Jt,
};
function Oe({ ticketId: t, alt: s, className: r }) {
  const l = Zt[t];
  return e.jsx("svg", {
    viewBox: `0 0 ${S} ${E}`,
    className: r,
    role: "img",
    "aria-label": s,
    "data-ticket-scene": t,
    children: l ? e.jsx(l, {}) : null,
  });
}
function Z({ desk: t, className: s }) {
  return e.jsx("svg", {
    viewBox: "0 0 32 32",
    className: s,
    "aria-hidden": "true",
    children: e.jsx(Me, { desk: t }),
  });
}
function Me({ desk: t }) {
  return e.jsx(e.Fragment, {
    children:
      t === "ui"
        ? e.jsxs("g", {
            children: [
              e.jsx("rect", {
                x: 3,
                y: 5,
                width: 26,
                height: 18,
                rx: 2.5,
                fill: "#0e7490",
                stroke: "#67e8f9",
                strokeWidth: 1.6,
              }),
              e.jsx("rect", {
                x: 3,
                y: 5,
                width: 26,
                height: 4,
                rx: 2,
                fill: "#67e8f9",
              }),
              e.jsx("path", {
                d: "M15 13v11l3-3 2 4 2-1-2-4h4z",
                fill: "#ffffff",
                stroke: "#0f172a",
                strokeWidth: 0.8,
              }),
              e.jsx("rect", {
                x: 12,
                y: 25,
                width: 8,
                height: 3,
                fill: "#67e8f9",
              }),
            ],
          })
        : t === "memory"
          ? e.jsxs("g", {
              children: [
                e.jsx("rect", {
                  x: 2,
                  y: 9,
                  width: 28,
                  height: 13,
                  rx: 1.5,
                  fill: "#15803d",
                  stroke: "#86efac",
                  strokeWidth: 1.4,
                }),
                [0, 1, 2, 3].map((s) =>
                  e.jsx(
                    "rect",
                    {
                      x: 5 + s * 6.2,
                      y: 11.5,
                      width: 4.6,
                      height: 8,
                      rx: 0.8,
                      fill: "#0f172a",
                    },
                    s,
                  ),
                ),
                [0, 1, 2, 3, 4, 5, 6].map((s) =>
                  e.jsx(
                    "rect",
                    {
                      x: 4 + s * 3.8,
                      y: 22,
                      width: 2,
                      height: 3,
                      fill: "#facc15",
                    },
                    s,
                  ),
                ),
              ],
            })
          : t === "peripheral"
            ? e.jsxs("g", {
                children: [
                  e.jsx("rect", {
                    x: 7,
                    y: 4,
                    width: 18,
                    height: 6,
                    rx: 1,
                    fill: "#e2e8f0",
                  }),
                  e.jsx("rect", {
                    x: 3,
                    y: 9,
                    width: 26,
                    height: 12,
                    rx: 2.5,
                    fill: "#a78bfa",
                    stroke: "#ddd6fe",
                    strokeWidth: 1.4,
                  }),
                  e.jsx("rect", {
                    x: 9,
                    y: 17,
                    width: 14,
                    height: 10,
                    fill: "#ffffff",
                    stroke: "#ddd6fe",
                  }),
                  e.jsx("path", {
                    d: "M11 21h10M11 24h7",
                    stroke: "#7c3aed",
                    strokeWidth: 1.2,
                  }),
                  e.jsx("circle", { cx: 25, cy: 13, r: 1.4, fill: "#22c55e" }),
                ],
              })
            : t === "user"
              ? e.jsxs("g", {
                  children: [
                    e.jsx("circle", {
                      cx: 13,
                      cy: 10,
                      r: 5.5,
                      fill: "#fda4af",
                      stroke: "#ffe4e6",
                      strokeWidth: 1.4,
                    }),
                    e.jsx("path", {
                      d: "M3 28c0-7 4.5-11 10-11s10 4 10 11z",
                      fill: "#e11d48",
                      stroke: "#ffe4e6",
                      strokeWidth: 1.4,
                    }),
                    e.jsx("circle", {
                      cx: 24,
                      cy: 18,
                      r: 3.4,
                      fill: "none",
                      stroke: "#facc15",
                      strokeWidth: 2,
                    }),
                    e.jsx("path", {
                      d: "M24 21.4v7M24 25.5h2.6M24 28h2",
                      stroke: "#facc15",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                    }),
                  ],
                })
              : e.jsxs("g", {
                  children: [
                    e.jsx("path", {
                      d: "M3 8h9l3 3h14v16h-26z",
                      fill: "#f59e0b",
                      stroke: "#fde68a",
                      strokeWidth: 1.4,
                      strokeLinejoin: "round",
                    }),
                    e.jsx("path", {
                      d: "M3 13h26",
                      stroke: "#fde68a",
                      strokeWidth: 1.2,
                    }),
                    e.jsx("path", {
                      d: "M11 20h10",
                      stroke: "#78350f",
                      strokeWidth: 1.6,
                      strokeLinecap: "round",
                    }),
                  ],
                }),
  });
}
const D = "rgba(15,23,42,0.22)",
  he = "rgba(15,23,42,0.38)",
  J = "rgba(255,255,255,0.18)",
  I = ["ui", "memory", "peripheral", "user", "file"],
  Q = {
    ui: "#22d3ee",
    memory: "#4ade80",
    peripheral: "#a78bfa",
    user: "#fb7185",
    file: "#fbbf24",
  },
  Qt = {
    ui: {
      skin: 1,
      hair: 0,
      style: "long",
      shirt: "#1e3a5f",
      back: !0,
      headset: !0,
    },
    memory: { skin: 3, hair: 3, style: "curly", shirt: "#14532d", back: !0 },
    peripheral: {
      skin: 0,
      hair: 2,
      style: "bun",
      shirt: "#3b2a63",
      back: !0,
      headset: !0,
    },
    user: {
      skin: 2,
      hair: 3,
      style: "short",
      shirt: "#7f1d3a",
      glasses: !0,
      headset: !0,
    },
    file: {
      skin: 0,
      hair: 1,
      style: "short",
      shirt: "#57381a",
      back: !0,
      headset: !0,
    },
  };
function es({ style: t, color: s, back: r }) {
  return t === "long"
    ? e.jsxs(e.Fragment, {
        children: [
          e.jsx("path", {
            d: "M-16 -50c-2 14-2 28 -4 40c6 3 14 4 20 4s14-1 20-4c-2-12-2-26-4-40z",
            fill: s,
          }),
          e.jsx("path", {
            d: "M-12 -40c0 12 -1 22 -3 31M12 -40c0 12 1 22 3 31",
            stroke: D,
            strokeWidth: 1.4,
            fill: "none",
          }),
        ],
      })
    : t === "curly"
      ? e.jsxs("g", {
          fill: s,
          children: [
            [-16, -10, 10, 16].map((l) =>
              e.jsx("circle", { cx: l, cy: -40 + Math.abs(l) * 0.2, r: 6 }, l),
            ),
            r ? e.jsx("circle", { cx: 0, cy: -38, r: 9 }) : null,
          ],
        })
      : null;
}
function ts({ style: t, color: s, back: r }) {
  switch (t) {
    case "long":
      return r
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("path", {
                d: "M-15 -47a15 15 0 0 1 30 0v18c-10 4-20 4-30 0z",
                fill: s,
              }),
              e.jsx("path", {
                d: "M-6 -60c2 8 2 20 0 30M5 -60c-1 9-1 20 1 30",
                stroke: D,
                strokeWidth: 1.2,
                fill: "none",
              }),
            ],
          })
        : e.jsxs(e.Fragment, {
            children: [
              e.jsx("path", {
                d: "M-15 -44c-1-12 6-18 15-18c10 0 16 6 15 18c-3-6-8-9-13-9c-3 3-9 6-17 9z",
                fill: s,
              }),
              e.jsx("path", {
                d: "M-14 -46c-1 6 -1 12 0 16",
                stroke: s,
                strokeWidth: 4,
                strokeLinecap: "round",
              }),
            ],
          });
    case "bun":
      return e.jsxs(e.Fragment, {
        children: [
          e.jsx("circle", { cx: 1, cy: -63, r: 7.5, fill: s }),
          e.jsx("path", {
            d: "M-4 -66a6 6 0 0 1 8 -2",
            stroke: J,
            strokeWidth: 1.4,
            fill: "none",
          }),
          e.jsx("path", {
            d: r
              ? "M-14 -46a14 14 0 0 1 28 0v6c-8 3-20 3-28 0z"
              : "M-14 -45c0-10 6-15 14-15s14 5 14 15c-4-5-9-7-14-7s-10 2-14 7z",
            fill: s,
          }),
          e.jsx("path", {
            d: "M-6 -57q6 -3 12 0",
            stroke: J,
            strokeWidth: 1.2,
            fill: "none",
          }),
        ],
      });
    case "curly":
      return e.jsxs("g", {
        fill: s,
        children: [
          [-13, -7, -1, 5, 11].map((l, i) =>
            e.jsx(
              "circle",
              {
                cx: l + 1,
                cy: -57 + Math.abs(l) * 0.42 - (i % 2) * 1.5,
                r: 6.6,
              },
              l,
            ),
          ),
          e.jsx("circle", { cx: -14, cy: -48, r: 5 }),
          e.jsx("circle", { cx: 15, cy: -48, r: 5 }),
          r ? e.jsx("path", { d: "M-14 -50a14 14 0 0 1 28 0v10h-28z" }) : null,
          e.jsxs("g", {
            fill: "none",
            stroke: J,
            strokeWidth: 1.1,
            children: [
              e.jsx("path", { d: "M-9 -62a4 4 0 0 1 5 -1" }),
              e.jsx("path", { d: "M3 -63a4 4 0 0 1 5 0" }),
            ],
          }),
        ],
      });
    default:
      return r
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("path", {
                d: "M-14.5 -47a14.5 14.5 0 0 1 29 0v9c-9 2-20 2-29 0z",
                fill: s,
              }),
              e.jsx("path", {
                d: "M-8 -59q8 -4 16 0",
                stroke: J,
                strokeWidth: 1.3,
                fill: "none",
              }),
            ],
          })
        : e.jsxs(e.Fragment, {
            children: [
              e.jsx("path", {
                d: "M-14.5 -45c-1-11 6-17 15-17c9 0 15 5 14.5 15c-2-3-5-5-9-5c-5 3-12 3-17 2c-1 2-2 3-3.5 5z",
                fill: s,
              }),
              e.jsx("path", {
                d: "M-14 -46v6",
                stroke: s,
                strokeWidth: 3,
                strokeLinecap: "round",
              }),
              e.jsx("path", {
                d: "M-2 -59c5-2 10-1 13 3",
                stroke: J,
                strokeWidth: 1.5,
                fill: "none",
                strokeLinecap: "round",
              }),
            ],
          });
  }
}
function ss({
  x: t,
  y: s,
  s: r = 1,
  skin: l,
  hair: i,
  style: o = "short",
  shirt: n,
  flip: a,
  back: c,
  glasses: x,
  headset: h,
  rim: y,
}) {
  const R = re[i],
    k = O[l];
  return e.jsxs("g", {
    transform: `translate(${t} ${s}) scale(${a ? -r : r} ${r})`,
    children: [
      e.jsx(es, { style: o, color: R, back: c }),
      e.jsx("path", {
        d: "M-27 0v-9c0-13 9-21 20-22.5h14c11 1.5 20 9.5 20 22.5V0z",
        fill: n,
      }),
      e.jsx("path", {
        d: "M12 -30.5c9 2 15 9.5 15 21.5V0h-9v-14c0-6-3-12-6-16.5z",
        fill: D,
      }),
      e.jsx("path", {
        d: "M-17 -24c-1 8-1 16 0 24M17 -24c1 8 1 16 0 24",
        stroke: D,
        strokeWidth: 1.2,
        fill: "none",
      }),
      e.jsx("path", {
        d: "M-26 -10c0-11 8-19 19-21M7 -31c11 2 19 10 19 21",
        stroke: y,
        strokeWidth: 1.8,
        opacity: 0.7,
        fill: "none",
        strokeLinecap: "round",
      }),
      e.jsx("path", {
        d: "M-5.5 -36h11v6c-2 2.5-4 4-5.5 4s-3.5-1.5-5.5-4z",
        fill: k,
      }),
      e.jsx("path", { d: "M-5.5 -36h11v3c-3 2-8 2-11 0z", fill: D }),
      c
        ? e.jsx("path", {
            d: "M-5.5 -33h11v3c-2 2.5-4 4-5.5 4s-3.5-1.5-5.5-4z",
            fill: he,
            opacity: 0.5,
          })
        : e.jsx("path", {
            d: "M-8 -31.5c2 4 5 6 8 6s6-2 8-6",
            stroke: he,
            strokeWidth: 1.4,
            fill: "none",
          }),
      e.jsx("ellipse", { cx: -12.6, cy: -45, rx: 3.2, ry: 4.6, fill: k }),
      e.jsx("path", {
        d: "M-13.2 -47c-1 1.5-1 3.5 0 4.5",
        stroke: D,
        strokeWidth: 1,
        fill: "none",
      }),
      c
        ? e.jsx("ellipse", { cx: 12.6, cy: -45, rx: 3.2, ry: 4.6, fill: k })
        : null,
      e.jsx("ellipse", { cx: 0, cy: -46, rx: 13.2, ry: 14.6, fill: k }),
      e.jsx("path", {
        d: "M7 -59.5a13.2 14.6 0 0 1 0 27.2c4-8 4-19 0-27.2z",
        fill: D,
        opacity: 0.55,
      }),
      e.jsx(ts, { style: o, color: R, back: c }),
      c
        ? e.jsx("path", {
            d: "M-13 -56a14 15 0 0 1 26 0",
            stroke: y,
            strokeWidth: 1.8,
            opacity: 0.75,
            fill: "none",
            strokeLinecap: "round",
          })
        : e.jsxs(e.Fragment, {
            children: [
              e.jsxs("g", {
                stroke: R,
                strokeWidth: 1.7,
                strokeLinecap: "round",
                fill: "none",
                children: [
                  e.jsx("path", { d: "M-7.5 -51q3 -2.2 6 -0.6" }),
                  e.jsx("path", { d: "M3 -51.6q3 -1.6 6 0.6" }),
                ],
              }),
              [-4.2, 5.8].map((w) =>
                e.jsxs(
                  "g",
                  {
                    children: [
                      e.jsx("ellipse", {
                        cx: w,
                        cy: -46.2,
                        rx: 2.6,
                        ry: 2,
                        fill: "#f8fafc",
                      }),
                      e.jsx("circle", {
                        cx: w + 0.6,
                        cy: -46.1,
                        r: 1.55,
                        fill: v,
                      }),
                      e.jsx("circle", {
                        cx: w + 1.1,
                        cy: -46.7,
                        r: 0.5,
                        fill: "#fff",
                      }),
                    ],
                  },
                  w,
                ),
              ),
              e.jsx("path", {
                d: "M2.2 -44.2q1.8 2.6 -0.6 3.4",
                stroke: he,
                strokeWidth: 1.1,
                fill: "none",
                strokeLinecap: "round",
              }),
              e.jsx("circle", {
                cx: -6.5,
                cy: -41,
                r: 2.4,
                fill: "#f43f5e",
                opacity: 0.16,
              }),
              e.jsx("circle", {
                cx: 8.5,
                cy: -41,
                r: 2.2,
                fill: "#f43f5e",
                opacity: 0.16,
              }),
              e.jsx("path", {
                d: "M-2.4 -38.4q3.2 2.6 6.8 0",
                stroke: "#7f1d1d",
                strokeWidth: 1.4,
                fill: "none",
                strokeLinecap: "round",
              }),
              x
                ? e.jsxs("g", {
                    fill: "rgba(186,230,253,0.18)",
                    stroke: v,
                    strokeWidth: 1.1,
                    children: [
                      e.jsx("rect", {
                        x: -8.4,
                        y: -49.4,
                        width: 8.4,
                        height: 6.4,
                        rx: 2.6,
                      }),
                      e.jsx("rect", {
                        x: 1.8,
                        y: -49.4,
                        width: 8.4,
                        height: 6.4,
                        rx: 2.6,
                      }),
                      e.jsx("path", {
                        d: "M0 -46.6h1.8M-8.4 -46.6l-4 -0.6",
                        fill: "none",
                      }),
                    ],
                  })
                : null,
            ],
          }),
      h
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("path", {
                d: "M-15 -49a15 16 0 0 1 30 0",
                fill: "none",
                stroke: "#111827",
                strokeWidth: 3.2,
              }),
              e.jsx("rect", {
                x: -20.4,
                y: -52,
                width: 7,
                height: 12,
                rx: 3.5,
                fill: "#1f2937",
              }),
              e.jsx("rect", {
                x: -19,
                y: -50,
                width: 2.4,
                height: 8,
                rx: 1.2,
                fill: y,
                opacity: 0.7,
              }),
              c
                ? e.jsx("rect", {
                    x: 11.4,
                    y: -52,
                    width: 7,
                    height: 12,
                    rx: 3.5,
                    fill: "#1f2937",
                  })
                : e.jsx("path", {
                    d: "M-15 -41c2 5 7 7.5 12 6.6",
                    stroke: "#111827",
                    strokeWidth: 1.6,
                    fill: "none",
                    strokeLinecap: "round",
                  }),
            ],
          })
        : null,
    ],
  });
}
function Ie() {
  const t = m.useId().replace(/:/g, "");
  return {
    glow: `${t}-glow`,
    soft: `${t}-soft`,
    wall: `${t}-wall`,
    floor: `${t}-floor`,
    screen: `${t}-screen`,
    graph: `${t}-graph`,
    cone: `${t}-cone`,
    reflect: `${t}-reflect`,
    vignette: `${t}-vignette`,
    floorClip: `${t}-floor-clip`,
  };
}
function Ue({ ids: t }) {
  return e.jsxs("defs", {
    children: [
      e.jsxs("filter", {
        id: t.glow,
        x: "-30%",
        y: "-60%",
        width: "160%",
        height: "220%",
        children: [
          e.jsx("feGaussianBlur", { stdDeviation: 4, result: "blur" }),
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
        x: "-60%",
        y: "-60%",
        width: "220%",
        height: "220%",
        children: e.jsx("feGaussianBlur", { stdDeviation: 16 }),
      }),
      e.jsxs("linearGradient", {
        id: t.wall,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1",
        children: [
          e.jsx("stop", { offset: "0", stopColor: "#03070f" }),
          e.jsx("stop", { offset: "1", stopColor: "#0d1a2c" }),
        ],
      }),
      e.jsxs("linearGradient", {
        id: t.floor,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1",
        children: [
          e.jsx("stop", { offset: "0", stopColor: "#0c1627" }),
          e.jsx("stop", { offset: "1", stopColor: "#03060d" }),
        ],
      }),
      e.jsxs("linearGradient", {
        id: t.screen,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1",
        children: [
          e.jsx("stop", { offset: "0", stopColor: "#072431" }),
          e.jsx("stop", { offset: "1", stopColor: "#030d18" }),
        ],
      }),
      e.jsxs("linearGradient", {
        id: t.graph,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1",
        children: [
          e.jsx("stop", {
            offset: "0",
            stopColor: "#2dd4bf",
            stopOpacity: 0.4,
          }),
          e.jsx("stop", { offset: "1", stopColor: "#2dd4bf", stopOpacity: 0 }),
        ],
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
            stopColor: "#bae6fd",
            stopOpacity: 0.16,
          }),
          e.jsx("stop", { offset: "1", stopColor: "#bae6fd", stopOpacity: 0 }),
        ],
      }),
      e.jsxs("linearGradient", {
        id: t.reflect,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1",
        children: [
          e.jsx("stop", {
            offset: "0",
            stopColor: "#2dd4bf",
            stopOpacity: 0.2,
          }),
          e.jsx("stop", { offset: "1", stopColor: "#2dd4bf", stopOpacity: 0 }),
        ],
      }),
      e.jsxs("radialGradient", {
        id: t.vignette,
        cx: "0.5",
        cy: "0.45",
        r: "0.75",
        children: [
          e.jsx("stop", {
            offset: "0.6",
            stopColor: "#020617",
            stopOpacity: 0,
          }),
          e.jsx("stop", {
            offset: "1",
            stopColor: "#020617",
            stopOpacity: 0.65,
          }),
        ],
      }),
    ],
  });
}
function fe({ x: t, y: s, w: r, floor: l, spread: i, ids: o }) {
  return e.jsxs("g", {
    children: [
      e.jsx("path", {
        d: `M${t - r / 2} ${s + 5}H${t + r / 2}L${t + r / 2 + i} ${l}H${t - r / 2 - i}z`,
        fill: `url(#${o.cone})`,
      }),
      e.jsx("rect", {
        x: t - r / 2 - 4,
        y: s - 4,
        width: r + 8,
        height: 10,
        rx: 2,
        fill: "#141d2c",
      }),
      e.jsx("rect", {
        x: t - r / 2,
        y: s,
        width: r,
        height: 4,
        rx: 2,
        fill: "#e0f2fe",
        filter: `url(#${o.glow})`,
      }),
    ],
  });
}
function He({ y: t, w: s, ids: r }) {
  const l = Array.from(
    { length: Math.floor(s / 120) + 1 },
    (i, o) => 40 + o * 120,
  );
  return e.jsxs("g", {
    children: [
      l.map((i) =>
        e.jsx(
          "path",
          { d: `M${i} 0V${t}`, stroke: "#1a2436", strokeWidth: 2 },
          i,
        ),
      ),
      I.map((i, o) =>
        e.jsx(
          "path",
          {
            d: `M0 ${t + 1 + o * 1.6}H${s}`,
            stroke: Q[i],
            strokeWidth: 1.6,
            opacity: 0.55,
          },
          i,
        ),
      ),
      e.jsx("rect", { y: t + 4, width: s, height: 8, fill: "#111a29" }),
      e.jsx("rect", { y: t + 4, width: s, height: 1.5, fill: "#334155" }),
      Array.from({ length: Math.ceil(s / 26) }, (i, o) =>
        e.jsx(
          "rect",
          { x: 8 + o * 26, y: t + 6, width: 2, height: 5, fill: "#0a101b" },
          o,
        ),
      ),
      e.jsx("rect", {
        y: t + 12,
        width: s,
        height: 3,
        fill: "rgba(2,6,23,0.5)",
      }),
      e.jsx("circle", {
        cx: s * 0.72,
        cy: t + 8,
        r: 1.6,
        fill: "#4ade80",
        filter: `url(#${r.glow})`,
      }),
    ],
  });
}
const de = [
    0.34, 0.46, 0.4, 0.62, 0.52, 0.76, 0.58, 0.68, 0.5, 0.72, 0.86, 0.62, 0.7,
  ],
  rs = [
    0.18, 0.22, 0.3, 0.27, 0.35, 0.4, 0.37, 0.45, 0.43, 0.5, 0.47, 0.55, 0.52,
  ],
  je = { ui: 0.72, memory: 0.58, peripheral: 0.34, user: 0.46, file: 0.82 };
function Re(t, s, r, l, i) {
  return t
    .map((o, n) => {
      const a = s + (n / (t.length - 1)) * (r - s),
        c = i - o * (i - l);
      return `${n === 0 ? "M" : "L"}${a.toFixed(1)} ${c.toFixed(1)}`;
    })
    .join("");
}
function qe({ w: t, h: s, ids: r }) {
  const l = Math.max(10, t * 0.035),
    i = Math.max(8, s * 0.07),
    o = l,
    n = t * 0.6,
    a = l + i * 1.8,
    c = s - l,
    x = Re(de, o, n, a, c),
    h = Re(rs, o, n, a, c),
    y = n + l * 1.4,
    R = t - l,
    k = (c - a) / I.length,
    w = Math.min(k * 0.72, 26);
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        x: -20,
        y: -16,
        width: t + 40,
        height: s + 32,
        fill: "#2dd4bf",
        opacity: 0.16,
        filter: `url(#${r.soft})`,
      }),
      e.jsx("rect", {
        x: -8,
        y: -8,
        width: t + 16,
        height: s + 16,
        rx: 6,
        fill: "#0a101b",
      }),
      e.jsx("rect", {
        x: -8,
        y: -8,
        width: t + 16,
        height: 2,
        rx: 1,
        fill: "#334155",
      }),
      e.jsx("rect", { width: t, height: s, rx: 2, fill: `url(#${r.screen})` }),
      e.jsxs("g", {
        stroke: "#5eead4",
        strokeWidth: 0.6,
        opacity: 0.12,
        children: [
          Array.from({ length: 5 }, (j, p) => {
            const u = a + ((c - a) * p) / 4;
            return e.jsx("path", { d: `M${o} ${u}H${n}` }, `h${p}`);
          }),
          Array.from({ length: 7 }, (j, p) => {
            const u = o + ((n - o) * p) / 6;
            return e.jsx("path", { d: `M${u} ${a}V${c}` }, `v${p}`);
          }),
        ],
      }),
      e.jsx("text", {
        x: n - i * 3,
        y: l + i,
        textAnchor: "end",
        fontSize: i,
        fontWeight: 700,
        letterSpacing: i * 0.14,
        fill: "#5eead4",
        fontFamily: "ui-monospace, monospace",
        children: "CPU",
      }),
      e.jsx("text", {
        x: n,
        y: l + i,
        textAnchor: "end",
        fontSize: i,
        fontWeight: 700,
        letterSpacing: i * 0.14,
        fill: "#86efac",
        opacity: 0.8,
        fontFamily: "ui-monospace, monospace",
        children: "RAM",
      }),
      e.jsx("circle", {
        cx: t - l - i * 3.4,
        cy: l + i * 0.64,
        r: i * 0.32,
        fill: "#f43f5e",
      }),
      e.jsx("text", {
        x: t - l,
        y: l + i,
        textAnchor: "end",
        fontSize: i,
        fontWeight: 700,
        letterSpacing: i * 0.1,
        fill: "#fecdd3",
        fontFamily: "ui-monospace, monospace",
        children: "LIVE",
      }),
      e.jsx("path", {
        d: `${x}L${n} ${c}L${o} ${c}z`,
        fill: `url(#${r.graph})`,
      }),
      e.jsx("path", {
        d: h,
        fill: "none",
        stroke: "#4ade80",
        strokeWidth: 1.4,
        strokeDasharray: "4 3",
        opacity: 0.8,
      }),
      e.jsx("path", {
        d: x,
        fill: "none",
        stroke: "#5eead4",
        strokeWidth: 2.2,
        strokeLinejoin: "round",
        filter: `url(#${r.glow})`,
      }),
      e.jsx("circle", {
        cx: n,
        cy: c - de[de.length - 1] * (c - a),
        r: 3,
        fill: "#ccfbf1",
        filter: `url(#${r.glow})`,
      }),
      e.jsx("path", {
        d: `M${n + l * 0.7} ${a}V${c}`,
        stroke: "#1e3a4a",
        strokeWidth: 1,
      }),
      I.map((j, p) => {
        const u = a + k * (p + 0.5),
          W = R - y - w - 6;
        return e.jsxs(
          "g",
          {
            children: [
              e.jsx("svg", {
                x: y,
                y: u - w / 2,
                width: w,
                height: w,
                viewBox: "0 0 32 32",
                "aria-hidden": "true",
                children: e.jsx(Me, { desk: j }),
              }),
              e.jsx("rect", {
                x: y + w + 6,
                y: u - k * 0.14,
                width: W,
                height: k * 0.28,
                rx: k * 0.14,
                fill: "#0f2233",
              }),
              e.jsx("rect", {
                x: y + w + 6,
                y: u - k * 0.14,
                width: W * je[j],
                height: k * 0.28,
                rx: k * 0.14,
                fill: Q[j],
                filter: `url(#${r.glow})`,
              }),
            ],
          },
          j,
        );
      }),
      e.jsx("rect", {
        width: t,
        height: s * 0.45,
        fill: "#ffffff",
        opacity: 0.025,
      }),
    ],
  });
}
function is({ w: t, h: s, ids: r }) {
  const i = (s - 20) / 8;
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        width: t,
        height: s,
        rx: 4,
        fill: "#0a101b",
        stroke: "#1e293b",
        strokeWidth: 2,
      }),
      Array.from({ length: 8 }, (o, n) => {
        const a = 10 + n * i,
          c = Q[I[n % I.length]];
        return e.jsxs(
          "g",
          {
            children: [
              e.jsx("rect", {
                x: 8,
                y: a,
                width: t - 16,
                height: i - 5,
                rx: 2,
                fill: "#131c2c",
              }),
              e.jsx("rect", {
                x: 8,
                y: a,
                width: t - 16,
                height: 1.5,
                fill: "#24324a",
              }),
              e.jsx("g", {
                stroke: "#0a101b",
                strokeWidth: 1.5,
                children: [0, 1, 2, 3, 4].map((x) =>
                  e.jsx("path", { d: `M${16 + x * 7} ${a + 5}v${i - 15}` }, x),
                ),
              }),
              e.jsx("circle", {
                cx: t - 30,
                cy: a + (i - 5) / 2,
                r: 2.2,
                fill: c,
                filter: `url(#${r.glow})`,
              }),
              e.jsx("circle", {
                cx: t - 20,
                cy: a + (i - 5) / 2,
                r: 2.2,
                fill: n % 3 ? "#22c55e" : "#334155",
              }),
            ],
          },
          n,
        );
      }),
    ],
  });
}
function ls({ w: t, h: s, ids: r }) {
  const l = Math.min(t, s * 0.5) * 0.3,
    i = 2 * Math.PI * l,
    o = I.reduce((a, c) => a + je[c], 0);
  let n = 0;
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        width: t,
        height: s * 0.34,
        rx: 4,
        fill: "#0a101b",
        stroke: "#1e293b",
        strokeWidth: 2,
      }),
      e.jsx("rect", {
        x: 6,
        y: 6,
        width: t - 12,
        height: s * 0.34 - 12,
        rx: 2,
        fill: "#03101a",
      }),
      e.jsx("text", {
        x: t / 2,
        y: s * 0.17 + t * 0.08,
        textAnchor: "middle",
        fontSize: t * 0.24,
        fontWeight: 700,
        fill: "#5eead4",
        fontFamily: "ui-monospace, monospace",
        filter: `url(#${r.glow})`,
        children: "09:00",
      }),
      e.jsxs("g", {
        transform: `translate(0 ${s * 0.4})`,
        children: [
          e.jsx("rect", {
            width: t,
            height: s * 0.6,
            rx: 4,
            fill: "#0a101b",
            stroke: "#1e293b",
            strokeWidth: 2,
          }),
          e.jsx("rect", {
            x: 6,
            y: 6,
            width: t - 12,
            height: s * 0.6 - 12,
            rx: 2,
            fill: "#03101a",
          }),
          e.jsxs("g", {
            transform: `translate(${t / 2} ${s * 0.3}) rotate(-90)`,
            children: [
              e.jsx("circle", {
                r: l,
                fill: "none",
                stroke: "#0f2233",
                strokeWidth: l * 0.34,
              }),
              I.map((a) => {
                const c = (je[a] / o) * i,
                  x = -n;
                return (
                  (n += c),
                  e.jsx(
                    "circle",
                    {
                      r: l,
                      fill: "none",
                      stroke: Q[a],
                      strokeWidth: l * 0.34,
                      strokeDasharray: `${Math.max(0, c - 3)} ${i}`,
                      strokeDashoffset: x,
                    },
                    a,
                  )
                );
              }),
            ],
          }),
          e.jsx("circle", {
            cx: t / 2,
            cy: s * 0.3,
            r: l * 0.4,
            fill: "#2dd4bf",
            opacity: 0.2,
          }),
        ],
      }),
    ],
  });
}
function Ce({ glow: t, ids: s }) {
  return e.jsxs("g", {
    children: [
      e.jsx("path", {
        d: "M0 -86L-52 -80V-28L0 -24z",
        fill: "#0b1220",
        stroke: "#334155",
        strokeWidth: 2,
        strokeLinejoin: "round",
      }),
      e.jsx("path", {
        d: "M-4 -81L-48 -76V-32L-4 -29z",
        fill: t,
        opacity: 0.14,
      }),
      e.jsx("g", {
        fill: t,
        opacity: 0.75,
        filter: `url(#${s.glow})`,
        children: [0, 1, 2, 3, 4].map((r) => {
          const l = [16, 26, 12, 30, 20][r];
          return e.jsx(
            "rect",
            { x: -44 + r * 8, y: -36 - l, width: 5, height: l },
            r,
          );
        }),
      }),
      e.jsx("path", {
        d: "M-44 -70h18M-44 -66h12",
        stroke: t,
        strokeWidth: 1.4,
        opacity: 0.6,
      }),
      e.jsx("rect", { x: -30, y: -27, width: 6, height: 10, fill: "#1f2937" }),
    ],
  });
}
function C({ x: t, y: s, s: r = 1, desk: l, seat: i, ids: o }) {
  const n = Q[l],
    a = Qt[l],
    c = e.jsxs("g", {
      children: [
        e.jsx("rect", {
          x: i - 25,
          y: a.back ? 18 : -16,
          width: 50,
          height: a.back ? 32 : 66,
          rx: 10,
          fill: "#151e2e",
        }),
        e.jsx("rect", {
          x: i - 21,
          y: a.back ? 22 : -12,
          width: 42,
          height: a.back ? 24 : 58,
          rx: 8,
          fill: "#0d1422",
        }),
        e.jsx("path", {
          d: `M${i - 20} ${a.back ? 19 : -15}h40`,
          stroke: n,
          strokeWidth: 1.6,
          opacity: 0.6,
          strokeLinecap: "round",
        }),
        e.jsx("rect", {
          x: i - 3,
          y: 50,
          width: 6,
          height: 10,
          fill: "#1a2333",
        }),
        e.jsx("path", {
          d: `M${i - 22} 66l22 -6 22 6`,
          stroke: "#1a2333",
          strokeWidth: 4,
          fill: "none",
          strokeLinecap: "round",
        }),
      ],
    });
  return e.jsxs("g", {
    transform: `translate(${t} ${s}) scale(${r})`,
    children: [
      e.jsx("ellipse", {
        cx: 0,
        cy: -54,
        rx: 130,
        ry: 50,
        fill: n,
        opacity: 0.2,
        filter: `url(#${o.soft})`,
      }),
      e.jsx("ellipse", {
        cx: 0,
        cy: 66,
        rx: 120,
        ry: 14,
        fill: n,
        opacity: 0.14,
        filter: `url(#${o.soft})`,
      }),
      e.jsx("g", {
        transform: "translate(-52 0)",
        children: e.jsx(Ce, { glow: n, ids: o }),
      }),
      e.jsx("g", {
        transform: "translate(52 0) scale(-1 1)",
        children: e.jsx(Ce, { glow: n, ids: o }),
      }),
      e.jsx("rect", {
        x: -50,
        y: -92,
        width: 100,
        height: 68,
        rx: 4,
        fill: "#0b1220",
        stroke: "#334155",
        strokeWidth: 2,
      }),
      e.jsx("rect", {
        x: -45,
        y: -87,
        width: 90,
        height: 58,
        rx: 2,
        fill: n,
        opacity: 0.16,
      }),
      e.jsx("rect", {
        x: -45,
        y: -87,
        width: 90,
        height: 58,
        rx: 2,
        fill: "none",
        stroke: n,
        strokeWidth: 1.2,
        filter: `url(#${o.glow})`,
      }),
      e.jsx("svg", {
        x: -19,
        y: -84,
        width: 38,
        height: 38,
        viewBox: "0 0 32 32",
        "aria-hidden": "true",
        children: e.jsx(Me, { desk: l }),
      }),
      e.jsx("path", {
        d: "M-30 -40h60M-30 -34h38",
        stroke: n,
        strokeWidth: 2,
        opacity: 0.55,
        strokeLinecap: "round",
      }),
      e.jsx("rect", { x: -6, y: -24, width: 12, height: 9, fill: "#1f2937" }),
      e.jsx("path", { d: "M-104 -16H104L116 0H-116z", fill: "#1a2536" }),
      e.jsx("path", {
        d: "M-104 -16H104L105.5 -14H-105.5z",
        fill: n,
        opacity: 0.35,
      }),
      e.jsx("ellipse", {
        cx: 0,
        cy: -9,
        rx: 78,
        ry: 6,
        fill: n,
        opacity: 0.18,
      }),
      e.jsx("path", {
        d: "M-34 -11h68l4 7h-76z",
        fill: "#0b1220",
        stroke: "#334155",
        strokeWidth: 1,
      }),
      e.jsx("path", {
        d: "M-30 -8.5h60M-32 -6h64",
        stroke: "#1e293b",
        strokeWidth: 1,
      }),
      e.jsxs("g", {
        transform: "translate(78 -6)",
        children: [
          e.jsx("path", { d: "M-6 -12h12l-1 12h-10z", fill: "#e2e8f0" }),
          e.jsx("path", {
            d: "M-6 -12h12l-0.3 3h-11.4z",
            fill: n,
            opacity: 0.6,
          }),
          e.jsx("path", {
            d: "M6 -9c4 0 4 6 0 6",
            stroke: "#e2e8f0",
            strokeWidth: 1.6,
            fill: "none",
          }),
        ],
      }),
      e.jsx("rect", {
        x: -116,
        y: 0,
        width: 232,
        height: 3,
        fill: n,
        filter: `url(#${o.glow})`,
      }),
      e.jsx("rect", { x: -116, y: 3, width: 232, height: 6, fill: "#0d1523" }),
      e.jsx("rect", { x: -100, y: 9, width: 200, height: 33, fill: "#04080f" }),
      [-116, 84].map((x) =>
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("rect", {
                x,
                y: 9,
                width: 32,
                height: 33,
                fill: "#152034",
              }),
              e.jsx("rect", {
                x: x + 4,
                y: 14,
                width: 24,
                height: 10,
                rx: 1.5,
                fill: "#1b2840",
              }),
              e.jsx("rect", {
                x: x + 4,
                y: 27,
                width: 24,
                height: 10,
                rx: 1.5,
                fill: "#1b2840",
              }),
              e.jsx("rect", {
                x: x + 11,
                y: 18,
                width: 10,
                height: 2,
                rx: 1,
                fill: "#475569",
              }),
              e.jsx("rect", {
                x: x + 11,
                y: 31,
                width: 10,
                height: 2,
                rx: 1,
                fill: "#475569",
              }),
            ],
          },
          x,
        ),
      ),
      e.jsx("rect", {
        x: -118,
        y: 42,
        width: 236,
        height: 3,
        fill: "rgba(2,6,23,0.6)",
      }),
      e.jsx("ellipse", {
        cx: i,
        cy: -22,
        rx: 28,
        ry: 26,
        fill: n,
        opacity: 0.55,
        filter: `url(#${o.soft})`,
      }),
      e.jsx("ellipse", {
        cx: i,
        cy: 67,
        rx: 34,
        ry: 5,
        fill: "#000",
        opacity: 0.4,
      }),
      a.back ? null : c,
      e.jsx(ss, { x: i, y: 34, s: 1.12, rim: n, ...a, flip: i > 0 }),
      a.back ? c : null,
    ],
  });
}
function _e({ y: t, w: s, h: r, ids: l }) {
  return e.jsxs("g", {
    children: [
      e.jsx("rect", {
        y: t - 16,
        width: s,
        height: r + 16,
        fill: "#000",
        opacity: 0.35,
        filter: `url(#${l.soft})`,
      }),
      e.jsx("rect", {
        y: t - 60,
        width: s,
        height: 48,
        fill: "#bae6fd",
        opacity: 0.03,
      }),
      e.jsx("g", {
        stroke: "#e0f2fe",
        opacity: 0.045,
        strokeWidth: 10,
        strokeLinecap: "round",
        children: [0.08, 0.9].map((i) =>
          e.jsx("path", { d: `M${s * i} ${t - 16}l18 -36` }, i),
        ),
      }),
      e.jsx("rect", { y: t - 62, width: s, height: 2, fill: "#1e293b" }),
      e.jsx("path", { d: `M0 ${t - 12}H${s}V${t}H0z`, fill: "#16202f" }),
      e.jsx("rect", {
        y: t - 12,
        width: s,
        height: 2,
        fill: "#2dd4bf",
        opacity: 0.7,
        filter: `url(#${l.glow})`,
      }),
      e.jsx("rect", { y: t, width: s, height: r, fill: "#080e19" }),
      e.jsx("rect", { y: t, width: s, height: 10, fill: "rgba(2,6,23,0.7)" }),
      e.jsx("rect", { y: t + 10, width: s, height: 1, fill: "#1b2638" }),
      e.jsx("rect", { y: t + r - 14, width: s, height: 14, fill: "#05090f" }),
      e.jsx("g", {
        stroke: "#111b2b",
        strokeWidth: 2,
        children: [0.06, 0.94].map((i) =>
          e.jsx("path", { d: `M${s * i} ${t + 14}V${t + r - 18}` }, i),
        ),
      }),
      [0.03, 0.97].map((i) =>
        e.jsxs(
          "g",
          {
            children: [
              e.jsx("circle", {
                cx: s * i,
                cy: t + 24,
                r: 2,
                fill: "#22c55e",
                filter: `url(#${l.glow})`,
              }),
              e.jsx("circle", { cx: s * i, cy: t + 34, r: 2, fill: "#fbbf24" }),
            ],
          },
          i,
        ),
      ),
    ],
  });
}
function Be({ y: t, w: s, h: r, vx: l, ids: i }) {
  const o = r * 0.5,
    n = Array.from({ length: 13 }, (c, x) => l + (x - 6) * (s / 4)),
    a = [0.06, 0.16, 0.3, 0.5, 0.78].map((c) => t + c * r);
  return e.jsxs("g", {
    children: [
      e.jsx("rect", { y: t, width: s, height: r, fill: `url(#${i.floor})` }),
      e.jsx("clipPath", {
        id: i.floorClip,
        children: e.jsx("rect", { y: t, width: s, height: r }),
      }),
      e.jsxs("g", {
        clipPath: `url(#${i.floorClip})`,
        stroke: "#152238",
        strokeWidth: 1.2,
        opacity: 0.8,
        children: [
          n.map((c) => e.jsx("path", { d: `M${l} ${t - o}L${c} ${t + r}` }, c)),
          a.map((c) => e.jsx("path", { d: `M0 ${c}H${s}` }, c)),
        ],
      }),
      e.jsx("rect", { y: t, width: s, height: 6, fill: "rgba(0,0,0,0.5)" }),
    ],
  });
}
const Ge =
  "Inside the operating system’s control room: a big wall screen with the live load, and five glowing desks with their operators.";
function ns() {
  const t = Ie();
  return e.jsxs("svg", {
    viewBox: "0 0 360 780",
    preserveAspectRatio: "xMidYMid slice",
    className: "game-landing-art game-landing-portrait",
    role: "img",
    "aria-label": Ge,
    children: [
      e.jsx(Ue, { ids: t }),
      e.jsx("rect", { width: 360, height: 780, fill: `url(#${t.wall})` }),
      e.jsx("rect", { width: 360, height: 50, fill: "#02050b" }),
      e.jsx("path", { d: "M0 50H360", stroke: "#111a29", strokeWidth: 2 }),
      e.jsx(fe, { x: 96, y: 28, w: 64, floor: 400, spread: 50, ids: t }),
      e.jsx(fe, { x: 264, y: 28, w: 64, floor: 400, spread: 50, ids: t }),
      e.jsx(He, { y: 56, w: 360, ids: t }),
      e.jsx("g", {
        stroke: "#0b1424",
        strokeWidth: 2,
        children: e.jsx("path", { d: "M12 74V258M348 74V258" }),
      }),
      e.jsx("g", {
        transform: "translate(24 94)",
        children: e.jsx(qe, { w: 312, h: 144, ids: t }),
      }),
      e.jsx("rect", { y: 258, width: 360, height: 8, fill: "#0a1220" }),
      e.jsx("rect", {
        y: 258,
        width: 360,
        height: 1.5,
        fill: "#2dd4bf",
        opacity: 0.4,
        filter: `url(#${t.glow})`,
      }),
      e.jsx(Be, { y: 266, w: 360, h: 514, vx: 180, ids: t }),
      e.jsx("rect", {
        x: 30,
        y: 266,
        width: 300,
        height: 70,
        fill: `url(#${t.reflect})`,
      }),
      e.jsx(C, { x: 104, y: 316, s: 0.5, desk: "memory", seat: -30, ids: t }),
      e.jsx(C, {
        x: 256,
        y: 316,
        s: 0.5,
        desk: "peripheral",
        seat: 30,
        ids: t,
      }),
      e.jsx(C, { x: 88, y: 408, s: 0.72, desk: "user", seat: -34, ids: t }),
      e.jsx(C, { x: 272, y: 408, s: 0.72, desk: "file", seat: 34, ids: t }),
      e.jsx(C, { x: 180, y: 500, s: 1, desk: "ui", seat: -40, ids: t }),
      e.jsx(_e, { y: 558, w: 360, h: 222, ids: t }),
      e.jsx("rect", { width: 360, height: 780, fill: `url(#${t.vignette})` }),
    ],
  });
}
function os() {
  const t = Ie();
  return e.jsxs("svg", {
    viewBox: "0 0 1280 720",
    preserveAspectRatio: "xMidYMid slice",
    className: "game-landing-art game-landing-landscape",
    role: "img",
    "aria-label": Ge,
    children: [
      e.jsx(Ue, { ids: t }),
      e.jsx("rect", { width: 1280, height: 720, fill: `url(#${t.wall})` }),
      e.jsx("rect", { width: 1280, height: 70, fill: "#02050b" }),
      e.jsx("path", { d: "M0 70H1280", stroke: "#111a29", strokeWidth: 2 }),
      [230, 640, 1050].map((s) =>
        e.jsx(fe, { x: s, y: 34, w: 150, floor: 440, spread: 90, ids: t }, s),
      ),
      e.jsx(He, { y: 78, w: 1280, ids: t }),
      e.jsx("g", {
        stroke: "#0b1424",
        strokeWidth: 2,
        children: e.jsx("path", {
          d: "M300 96V420M980 96V420M40 96V420M1240 96V420",
        }),
      }),
      e.jsx("g", {
        transform: "translate(90 150)",
        children: e.jsx(is, { w: 150, h: 250, ids: t }),
      }),
      e.jsx("g", {
        transform: "translate(1040 150)",
        children: e.jsx(ls, { w: 150, h: 250, ids: t }),
      }),
      e.jsx("g", {
        transform: "translate(350 118)",
        children: e.jsx(qe, { w: 580, h: 256, ids: t }),
      }),
      e.jsx("rect", { y: 414, width: 1280, height: 10, fill: "#0a1220" }),
      e.jsx("rect", {
        y: 414,
        width: 1280,
        height: 2,
        fill: "#2dd4bf",
        opacity: 0.4,
        filter: `url(#${t.glow})`,
      }),
      e.jsx(Be, { y: 424, w: 1280, h: 296, vx: 640, ids: t }),
      e.jsx("rect", {
        x: 330,
        y: 424,
        width: 620,
        height: 90,
        fill: `url(#${t.reflect})`,
      }),
      e.jsx(C, { x: 420, y: 470, s: 0.7, desk: "memory", seat: -30, ids: t }),
      e.jsx(C, {
        x: 640,
        y: 470,
        s: 0.7,
        desk: "peripheral",
        seat: 30,
        ids: t,
      }),
      e.jsx(C, { x: 860, y: 470, s: 0.7, desk: "user", seat: 34, ids: t }),
      e.jsx(C, { x: 200, y: 556, s: 1.08, desk: "ui", seat: -36, ids: t }),
      e.jsx(C, { x: 1080, y: 556, s: 1.08, desk: "file", seat: 36, ids: t }),
      e.jsx(_e, { y: 650, w: 1280, h: 70, ids: t }),
      e.jsx("rect", { width: 1280, height: 720, fill: `url(#${t.vignette})` }),
    ],
  });
}
function as() {
  return e.jsxs(e.Fragment, { children: [e.jsx(ns, {}), e.jsx(os, {})] });
}
function me(t) {
  return M[t].name.toLowerCase();
}
function cs(t) {
  const s = L[t.step];
  if (!s) return "";
  const r = ge(t),
    l = M[s.program];
  if (r === "close") return `Tap the ${me(s.program)} to free its RAM.`;
  if (r === "swap")
    return "RAM is full. Tap a program she is not using to move it to virtual memory.";
  const i = l.blocks - t.placed;
  return `Tap ${i} free ${i === 1 ? "block" : "blocks"} for the ${me(s.program)}.`;
}
function hs({ state: t, onChange: s, onLeave: r }) {
  const [l, i] = m.useState(null),
    [o, n] = m.useState(null),
    a = m.useRef(null),
    c = L[t.step],
    x = o ?? c,
    h = x?.inUse ?? [];
  m.useEffect(() => {
    o && a.current?.focus({ preventScroll: !0 });
  }, [o]);
  function y(j) {
    if (o || t.done) return;
    const p = $t(t, j);
    s(p.state);
    const u = p.outcome;
    u.kind === "wrong"
      ? i({ kind: "wrong", text: u.reason })
      : u.kind === "swapped"
        ? i({
            kind: "note",
            text: `The ${me(u.program)} was moved out of RAM into virtual memory.`,
          })
        : (u.kind === "step-done" && n(u.step), i(null));
  }
  function R() {
    if (t.done) {
      r();
      return;
    }
    (n(null), i(null));
  }
  const k = o ? t.step : t.step + 1,
    w = t.blocks.filter((j) => j === null).length;
  return e.jsxs("section", {
    className: "osr-memory",
    "aria-labelledby": "osr-memory-title",
    "data-osr-memory": !0,
    "data-ram-step": t.step,
    children: [
      e.jsxs("div", {
        className: "osr-memory-head",
        children: [
          e.jsx(Z, { desk: "memory", className: "h-10 w-10 shrink-0" }),
          e.jsxs("div", {
            className: "min-w-0",
            children: [
              e.jsx("h2", { id: "osr-memory-title", children: "Memory desk" }),
              e.jsxs("p", {
                className: "osr-memory-step",
                children: [k, " / ", L.length],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "osr-memory-grid",
        children: [
          e.jsxs("div", {
            className: "osr-memory-story",
            children: [
              e.jsx(ds, { blocks: t.blocks, virtual: t.virtual, inUse: h }),
              e.jsx("p", {
                className: "osr-memory-event",
                "aria-live": "polite",
                children: x?.event,
              }),
              h.length > 0
                ? e.jsxs("p", {
                    className: "osr-in-use",
                    children: [
                      e.jsx("span", { children: "Using:" }),
                      h.map((j) =>
                        e.jsx(
                          "span",
                          {
                            className: "osr-chip",
                            style: { "--chip": M[j].color },
                            children: M[j].name,
                          },
                          j,
                        ),
                      ),
                    ],
                  })
                : null,
            ],
          }),
          e.jsxs("div", {
            className: "osr-memory-board",
            children: [
              e.jsxs("div", {
                className: "osr-ram",
                role: "group",
                "aria-label": `RAM, ${w} of ${t.blocks.length} blocks free`,
                children: [
                  e.jsx("span", {
                    className: "osr-ram-label",
                    "aria-hidden": "true",
                    children: "RAM",
                  }),
                  e.jsx("div", {
                    className: "osr-ram-blocks",
                    children: t.blocks.map((j, p) => {
                      const u = j ? M[j] : null,
                        W = j !== null && h.includes(j);
                      return e.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "osr-block",
                          "data-ram-block": p,
                          "data-program": j ?? "free",
                          style: u ? { "--block": u.color } : void 0,
                          "aria-disabled": o || t.done ? !0 : void 0,
                          "aria-label": `Block ${p + 1}: ${u ? `${u.name}${W ? ", in use" : ""}` : "free"}`,
                          onClick: () => y(p),
                          children: [
                            e.jsx("span", {
                              className: "osr-block-name",
                              children: u ? u.short : "Free",
                            }),
                            W
                              ? e.jsx("span", {
                                  className: "osr-block-live",
                                  "aria-hidden": "true",
                                })
                              : null,
                          ],
                        },
                        p,
                      );
                    }),
                  }),
                  e.jsx("div", {
                    className: "osr-ram-pins",
                    "aria-hidden": "true",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "osr-virtual",
                "aria-label": "Virtual memory",
                role: "group",
                children: [
                  e.jsxs("svg", {
                    viewBox: "0 0 40 28",
                    className: "h-7 w-10 shrink-0",
                    "aria-hidden": "true",
                    children: [
                      e.jsx("rect", {
                        x: 1,
                        y: 1,
                        width: 38,
                        height: 26,
                        rx: 4,
                        fill: "#334155",
                        stroke: "#94a3b8",
                      }),
                      e.jsx("rect", {
                        x: 5,
                        y: 5,
                        width: 30,
                        height: 7,
                        rx: 2,
                        fill: "#475569",
                      }),
                      e.jsx("circle", {
                        cx: 32,
                        cy: 20,
                        r: 2,
                        fill: "#22c55e",
                      }),
                    ],
                  }),
                  e.jsx("span", {
                    className: "osr-virtual-name",
                    children: "Virtual memory",
                  }),
                  e.jsx("span", {
                    className: "osr-virtual-held",
                    children:
                      t.virtual.length === 0
                        ? e.jsx("span", {
                            className: "osr-virtual-empty",
                            children: "Empty",
                          })
                        : t.virtual.map((j) =>
                            e.jsx(
                              "span",
                              {
                                className: "osr-chip",
                                style: { "--chip": M[j].color },
                                children: M[j].name,
                              },
                              j,
                            ),
                          ),
                  }),
                ],
              }),
              o
                ? e.jsxs(le.div, {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    className: "osr-memory-why",
                    "aria-live": "polite",
                    "data-ram-why": !0,
                    children: [
                      e.jsx(ue, {
                        "aria-hidden": "true",
                        className: "h-5 w-5 shrink-0 text-emerald-300",
                      }),
                      e.jsx("p", { children: o.why }),
                      e.jsx("button", {
                        ref: a,
                        type: "button",
                        className: "osr-primary w-full",
                        onClick: R,
                        children: t.done ? "Back to the tickets" : "Next",
                      }),
                    ],
                  })
                : e.jsxs("div", {
                    className: "osr-memory-need",
                    "aria-live": "polite",
                    children: [
                      e.jsx("p", {
                        className: "osr-need",
                        "data-ram-need": ge(t),
                        children: cs(t),
                      }),
                      l
                        ? e.jsxs("p", {
                            className: "osr-memory-message",
                            "data-kind": l.kind,
                            children: [
                              l.kind === "wrong"
                                ? e.jsx(pe, {
                                    "aria-hidden": "true",
                                    className: "h-4 w-4 shrink-0",
                                  })
                                : null,
                              l.text,
                            ],
                          })
                        : null,
                    ],
                  }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ds({ blocks: t, virtual: s, inUse: r }) {
  const l = Object.keys(M).filter((n) => n !== "os" && t.includes(n)),
    i = r.find((n) => n !== "music" && l.includes(n)) ?? l[l.length - 1],
    o = [...l.filter((n) => n !== i), ...(i ? [i] : [])];
  return e.jsxs("svg", {
    viewBox: "0 0 240 150",
    className: "osr-maya",
    role: "img",
    "aria-label": `Maya's laptop with ${l.length === 0 ? "nothing" : l.map((n) => M[n].name).join(", ")} open.`,
    children: [
      e.jsx("rect", { width: 240, height: 150, rx: 10, fill: "#1e1b4b" }),
      e.jsx("rect", {
        x: 30,
        y: 10,
        width: 180,
        height: 112,
        rx: 6,
        fill: "#111827",
      }),
      e.jsx("rect", {
        x: 36,
        y: 16,
        width: 168,
        height: 92,
        rx: 2,
        fill: "#0ea5e9",
      }),
      e.jsx("path", { d: "M36 92q40-20 84-6t84-8v30h-168z", fill: "#0284c7" }),
      o.map((n, a) =>
        e.jsxs(
          "g",
          {
            transform: `translate(${46 + a * 26} ${24 + a * 10})`,
            children: [
              e.jsx("rect", {
                width: 92,
                height: 56,
                rx: 2,
                fill: "#f8fafc",
                stroke: n === i ? "#fde047" : "#94a3b8",
                strokeWidth: n === i ? 2 : 1,
              }),
              e.jsx("rect", { width: 92, height: 9, rx: 2, fill: M[n].color }),
              e.jsx(xs, { program: n }),
            ],
          },
          n,
        ),
      ),
      e.jsx("rect", {
        x: 36,
        y: 100,
        width: 168,
        height: 8,
        fill: "#0f172a",
        opacity: 0.85,
      }),
      [...l, ...s].map((n, a) =>
        e.jsx(
          "rect",
          {
            x: 44 + a * 14,
            y: 102,
            width: 10,
            height: 4,
            rx: 1,
            fill: s.includes(n) ? "#475569" : M[n].color,
          },
          n,
        ),
      ),
      e.jsx("path", { d: "M14 122h212l-10 14h-192z", fill: "#94a3b8" }),
    ],
  });
}
function xs({ program: t }) {
  return t === "browser"
    ? e.jsxs("g", {
        children: [
          e.jsx("rect", {
            x: 6,
            y: 13,
            width: 80,
            height: 6,
            rx: 3,
            fill: "#e2e8f0",
          }),
          e.jsx("rect", {
            x: 6,
            y: 23,
            width: 36,
            height: 26,
            fill: "#bae6fd",
          }),
          e.jsx("rect", {
            x: 46,
            y: 24,
            width: 36,
            height: 3,
            fill: "#cbd5e1",
          }),
          e.jsx("rect", {
            x: 46,
            y: 31,
            width: 30,
            height: 3,
            fill: "#cbd5e1",
          }),
          e.jsx("rect", {
            x: 46,
            y: 38,
            width: 34,
            height: 3,
            fill: "#cbd5e1",
          }),
        ],
      })
    : t === "music"
      ? e.jsxs("g", {
          children: [
            e.jsx("path", {
              d: "M36 44v-24l18-4v24",
              fill: "none",
              stroke: "#db2777",
              strokeWidth: 3,
            }),
            e.jsx("circle", { cx: 33, cy: 44, r: 4, fill: "#db2777" }),
            e.jsx("circle", { cx: 51, cy: 40, r: 4, fill: "#db2777" }),
          ],
        })
      : t === "game"
        ? e.jsxs("g", {
            children: [
              e.jsx("rect", {
                x: 2,
                y: 11,
                width: 88,
                height: 43,
                fill: "#14532d",
              }),
              e.jsx("circle", { cx: 70, cy: 22, r: 6, fill: "#fde047" }),
              e.jsx("path", {
                d: "M2 46q20-10 44-4t44-4v16h-88z",
                fill: "#365314",
              }),
              e.jsx("rect", {
                x: 24,
                y: 34,
                width: 8,
                height: 10,
                fill: "#ef4444",
              }),
            ],
          })
        : e.jsxs("g", {
            children: [
              e.jsx("rect", {
                x: 8,
                y: 14,
                width: 44,
                height: 10,
                rx: 5,
                fill: "#e2e8f0",
              }),
              e.jsx("rect", {
                x: 40,
                y: 28,
                width: 44,
                height: 10,
                rx: 5,
                fill: "#fde68a",
              }),
              e.jsx("rect", {
                x: 8,
                y: 42,
                width: 34,
                height: 8,
                rx: 4,
                fill: "#e2e8f0",
              }),
            ],
          });
}
const Le = 100,
  Ve = "comp-school:game-clock:os-control-room";
function fs() {
  try {
    return window.localStorage.getItem(Ve) === "on";
  } catch {
    return !1;
  }
}
function js(t) {
  try {
    window.localStorage.setItem(Ve, t ? "on" : "off");
  } catch {}
}
function Fe(t, s) {
  const r = document.elementFromPoint?.(t, s),
    i = (r instanceof Element ? r.closest("[data-desk]") : null)?.dataset.desk;
  return B.some((o) => o.id === i) ? i : null;
}
function zs({ random: t = Math.random }) {
  const [s, r] = m.useState(0),
    l = m.useMemo(() => jt(t), [s, t]),
    [i, o] = m.useState("intro"),
    [n, a] = m.useState(0),
    [c, x] = m.useState(fs),
    [h, y] = m.useState(Y(0) * 1e3),
    [R, k] = m.useState(0),
    [w, j] = m.useState(0),
    [p, u] = m.useState([]),
    [W, ve] = m.useState(Ae),
    [F, ee] = m.useState(null),
    K = m.useRef(null),
    $e = m.useRef(null),
    Ne = m.useRef(null),
    Ke = it(),
    N = l[n],
    Ye = p[p.length - 1],
    te = W.done;
  at(
    p.length + (te ? 1 : 0),
    l.length + 1,
    p.filter((d) => d.picked === d.ticket.desk).length +
      (te && W.slips === 0 ? 1 : 0),
  );
  const q = m.useCallback(
    (d) => {
      if (i !== "ticket" || !N) return;
      const g = d === N.desk,
        P = g ? w + 1 : 0,
        Se = gt(g, P),
        rt = kt(g, c ? h / 1e3 : null, Y(n));
      (u((ae) => [...ae, { ticket: N, picked: d, points: Se, fast: rt }]),
        k((ae) => ae + Se),
        j(P),
        o("feedback"));
    },
    [i, N, w, c, h, n],
  );
  (m.useEffect(() => {
    if (i !== "ticket" || !c) return;
    const d = setInterval(() => y((g) => Math.max(0, g - Le)), Le);
    return () => clearInterval(d);
  }, [i, c]),
    m.useEffect(() => {
      i === "ticket" && c && h <= 0 && q(null);
    }, [h, i, c, q]),
    m.useEffect(() => {
      if (i !== "ticket") return;
      const d = (g) => {
        if (g.altKey || g.ctrlKey || g.metaKey || g.defaultPrevented) return;
        const P = B[Number(g.key) - 1];
        P && (g.preventDefault(), q(P.id));
      };
      return (
        window.addEventListener("keydown", d),
        () => window.removeEventListener("keydown", d)
      );
    }, [i, q]),
    m.useEffect(() => {
      (i === "feedback" && $e.current?.focus({ preventScroll: !0 }),
        i === "ticket" && Ne.current?.focus({ preventScroll: !0 }));
    }, [i, n]));
  function ne(d) {
    (a(d), y(Y(d) * 1e3), o("ticket"));
  }
  function Xe() {
    const d = n + 1;
    if (d === xe && !W.done) {
      o("ram");
      return;
    }
    if (d >= l.length) {
      o("results");
      return;
    }
    ne(d);
  }
  function Je() {
    (k((d) => d + St(W)), n + 1 >= l.length ? o("results") : ne(n + 1));
  }
  function Ze() {
    (r((d) => d + 1),
      u([]),
      k(0),
      j(0),
      ve(Ae()),
      a(0),
      y(Y(0) * 1e3),
      o("intro"));
  }
  function Qe(d) {
    if (i !== "ticket" || d.button !== 0) return;
    const g = d.target.closest("[data-ticket-grip]");
    (d.pointerType !== "mouse" && !g) ||
      ((K.current = { x: d.clientX, y: d.clientY, id: d.pointerId }),
      d.currentTarget.setPointerCapture?.(d.pointerId));
  }
  function et(d) {
    const g = K.current;
    !g ||
      g.id !== d.pointerId ||
      (!F && Math.hypot(d.clientX - g.x, d.clientY - g.y) < 6) ||
      ee({ x: d.clientX, y: d.clientY, over: Fe(d.clientX, d.clientY) });
  }
  function tt(d) {
    const g = K.current;
    if (((K.current = null), !g || !F)) {
      ee(null);
      return;
    }
    const P = Fe(d.clientX, d.clientY);
    (ee(null), P && q(P));
  }
  const oe = i === "feedback" ? Ye : void 0,
    We = l.length,
    st = Y(n);
  return e.jsx(ht, {
    reducedMotion: Ke ? "always" : "user",
    children: e.jsxs("div", {
      className: "osr",
      "data-os-control-room": !0,
      "data-phase": i,
      children: [
        e.jsx(ms, {
          showScore: i !== "results",
          score: R,
          streak: w,
          history: p,
          total: We,
          index: n,
          phase: i,
          ramDone: te,
        }),
        i === "intro"
          ? e.jsx(us, {
              clockOn: c,
              onClock: () => x((d) => (js(!d), !d)),
              onStart: () => ne(0),
            })
          : null,
        (i === "ticket" || i === "feedback") && N
          ? e.jsxs("div", {
              className: "osr-floor",
              children: [
                e.jsx("div", {
                  className: "osr-ticket-column",
                  children: e.jsx(dt, {
                    mode: "wait",
                    children: e.jsxs(
                      le.article,
                      {
                        ref: Ne,
                        tabIndex: -1,
                        "aria-labelledby": "osr-ticket-title",
                        className: "osr-ticket",
                        "data-ticket": N.id,
                        "data-dragging": F ? "true" : void 0,
                        initial: { opacity: 0, y: -24, rotate: -1.5 },
                        animate: { opacity: 1, y: 0, rotate: 0 },
                        exit: { opacity: 0, x: 40 },
                        transition: { duration: 0.3 },
                        onPointerDown: Qe,
                        onPointerMove: et,
                        onPointerUp: tt,
                        onPointerCancel: () => {
                          ((K.current = null), ee(null));
                        },
                        children: [
                          e.jsxs("div", {
                            className: "osr-ticket-head",
                            "data-ticket-grip": !0,
                            children: [
                              e.jsx("span", {
                                className: "osr-grip",
                                "aria-hidden": "true",
                              }),
                              e.jsx("h2", {
                                id: "osr-ticket-title",
                                children: N.title,
                              }),
                              e.jsxs("span", {
                                className: "osr-ticket-no",
                                children: ["#", String(n + 1).padStart(2, "0")],
                              }),
                            ],
                          }),
                          e.jsx(Oe, {
                            ticketId: N.id,
                            alt: N.alt,
                            className: "osr-scene",
                          }),
                          e.jsx("p", {
                            className: "osr-event",
                            children: N.event,
                          }),
                          c ? e.jsx(ps, { msLeft: h, total: st * 1e3 }) : null,
                        ],
                      },
                      N.id,
                    ),
                  }),
                }),
                e.jsxs("div", {
                  className: "osr-desk-column",
                  children: [
                    e.jsx(gs, {
                      live: i === "ticket",
                      over: F?.over ?? null,
                      routed: oe,
                      onRoute: q,
                    }),
                    oe
                      ? e.jsx(ks, {
                          routed: oe,
                          isLast: n + 1 >= We,
                          nextRef: $e,
                          onNext: Xe,
                          nextIsRam: n + 1 === xe && !te,
                        })
                      : null,
                  ],
                }),
              ],
            })
          : null,
        i === "ram" ? e.jsx(hs, { state: W, onChange: ve, onLeave: Je }) : null,
        i === "results"
          ? e.jsxs(e.Fragment, {
              children: [
                e.jsx(ws, {
                  history: p,
                  ram: W,
                  score: R,
                  clockOn: c,
                  onAgain: Ze,
                }),
                e.jsx(ct, { game: "os-control-room" }),
              ],
            })
          : null,
        F && N
          ? e.jsx("div", {
              className: "osr-ghost",
              style: { left: F.x, top: F.y },
              "aria-hidden": "true",
              "data-over": F.over ?? void 0,
              children: N.title,
            })
          : null,
      ],
    }),
  });
}
function ms({
  showScore: t,
  score: s,
  streak: r,
  history: l,
  total: i,
  index: o,
  phase: n,
  ramDone: a,
}) {
  const c = Array.from({ length: i }, (x, h) => h);
  return e.jsxs("div", {
    className: "osr-hud",
    children: [
      e.jsx("ol", {
        className: "osr-dots",
        "aria-label": `Ticket ${Math.min(o + 1, i)} of ${i}`,
        children: c.map((x) => {
          const h = l[x],
            y = h
              ? h.picked === h.ticket.desk
                ? "right"
                : "wrong"
              : x === o && n !== "intro" && n !== "results" && n !== "ram"
                ? "now"
                : "todo";
          return e.jsxs(
            "li",
            {
              className: "contents",
              children: [
                x === xe
                  ? e.jsx("span", {
                      className: "osr-dot-ram",
                      "data-state": a ? "right" : n === "ram" ? "now" : "todo",
                      "aria-hidden": "true",
                      children: e.jsx(Z, {
                        desk: "memory",
                        className: "h-4 w-4",
                      }),
                    })
                  : null,
                e.jsx("span", {
                  className: "osr-dot",
                  "data-state": y,
                  "aria-hidden": "true",
                }),
              ],
            },
            x,
          );
        }),
      }),
      e.jsxs("div", {
        className: "osr-score",
        hidden: !t,
        children: [
          r >= 3
            ? e.jsxs("span", {
                className: "osr-streak",
                "aria-label": `Streak ${r}`,
                children: ["×", r],
              })
            : null,
          e.jsx("span", { className: "sr-only", children: "Score" }),
          e.jsx("span", { "data-osr-score": !0, children: s }),
        ],
      }),
    ],
  });
}
function us({ clockOn: t, onClock: s, onStart: r }) {
  return e.jsxs("div", {
    className: "game-landing osr-landing",
    "data-game-landing": !0,
    "data-osr-intro": !0,
    children: [
      e.jsx(as, {}),
      e.jsxs("div", {
        className: "game-landing-start osr-landing-start",
        children: [
          e.jsxs("button", {
            type: "button",
            className: "osr-toggle",
            "aria-pressed": t,
            onClick: s,
            children: [
              e.jsx(Pe, { "aria-hidden": "true", className: "h-4 w-4" }),
              "Clock",
            ],
          }),
          e.jsxs("button", {
            type: "button",
            className: "osr-primary",
            onClick: r,
            children: [
              e.jsx(lt, { "aria-hidden": "true", className: "h-4 w-4" }),
              "Start shift",
            ],
          }),
        ],
      }),
    ],
  });
}
function ps({ msLeft: t, total: s }) {
  const r = Math.max(0, Math.min(1, t / s)),
    l = Math.ceil(t / 1e3);
  return e.jsxs("div", {
    className: "osr-clock",
    "data-low": r < 0.3 ? "true" : void 0,
    children: [
      e.jsx(Pe, { "aria-hidden": "true", className: "h-4 w-4 shrink-0" }),
      e.jsx("div", {
        className: "osr-clock-track",
        "aria-hidden": "true",
        children: e.jsx("div", {
          className: "osr-clock-fill",
          style: { width: `${r * 100}%` },
        }),
      }),
      e.jsx("span", {
        className: "osr-clock-seconds",
        "aria-label": `${l} seconds left`,
        children: l,
      }),
    ],
  });
}
function gs({ live: t, over: s, routed: r, onRoute: l }) {
  return e.jsx("div", {
    className: "osr-desks",
    role: "group",
    "aria-label": "Operating system functions",
    children: B.map((i, o) => {
      const n = r
        ? i.id === r.ticket.desk
          ? "right"
          : i.id === r.picked
            ? "wrong"
            : void 0
        : void 0;
      return e.jsxs(
        "div",
        {
          className: "osr-desk-slot",
          children: [
            e.jsxs("button", {
              type: "button",
              className: "osr-desk",
              "data-desk": i.id,
              "data-tone": i.id,
              "data-over": s === i.id ? "true" : void 0,
              "data-mark": n,
              "aria-disabled": !t || void 0,
              "aria-keyshortcuts": String(o + 1),
              onClick: () => (t ? l(i.id) : void 0),
              children: [
                e.jsx("span", {
                  className: "osr-desk-lamp",
                  "aria-hidden": "true",
                }),
                e.jsx(Z, { desk: i.id, className: "osr-desk-glyph" }),
                e.jsx("span", { className: "osr-desk-name", children: i.name }),
                e.jsx("kbd", {
                  className: "osr-desk-key",
                  "aria-hidden": "true",
                  children: o + 1,
                }),
                n === "right"
                  ? e.jsx(ue, {
                      "aria-label": "Right desk",
                      className: "osr-desk-mark",
                    })
                  : n === "wrong"
                    ? e.jsx(pe, {
                        "aria-label": "Your choice",
                        className: "osr-desk-mark",
                      })
                    : null,
              ],
            }),
            e.jsx(ys, { name: i.name, duty: i.duty, tone: i.id }),
          ],
        },
        i.id,
      );
    }),
  });
}
function ys({ name: t, duty: s, tone: r }) {
  const l = m.useId(),
    [i, o] = m.useState(!1);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("button", {
        type: "button",
        className: "osr-desk-info",
        "aria-label": `What is ${t.toLowerCase()}?`,
        "aria-expanded": i,
        "aria-describedby": i ? l : void 0,
        onClick: () => o(!0),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onBlur: () => o(!1),
        onKeyDown: (n) => {
          n.key === "Escape" && o(!1);
        },
        children: e.jsx(ot, { "aria-hidden": "true", className: "h-4 w-4" }),
      }),
      i
        ? e.jsx("p", {
            id: l,
            role: "tooltip",
            className: "osr-desk-tip",
            "data-tone": r,
            children: s,
          })
        : null,
    ],
  });
}
function ks({ routed: t, isLast: s, nextIsRam: r, nextRef: l, onNext: i }) {
  const o = t.picked === t.ticket.desk,
    n = se(t.ticket.desk);
  return e.jsxs(le.div, {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    className: "osr-feedback",
    "data-osr-feedback": o ? "right" : "wrong",
    "aria-live": "polite",
    children: [
      e.jsxs("div", {
        className: "osr-feedback-head",
        children: [
          o
            ? e.jsx(ue, {
                "aria-hidden": "true",
                className: "h-6 w-6 shrink-0 text-emerald-300",
              })
            : e.jsx(pe, {
                "aria-hidden": "true",
                className: "h-6 w-6 shrink-0 text-rose-300",
              }),
          e.jsx("span", {
            className: "sr-only",
            children: o ? "Right." : t.picked ? "Wrong desk." : "Out of time.",
          }),
          e.jsxs("p", {
            children: [
              e.jsx(Z, { desk: n.id, className: "mr-2 h-6 w-6 shrink-0" }),
              n.name,
            ],
          }),
          t.points > 0
            ? e.jsxs("span", {
                className: "osr-points",
                children: ["+", t.points],
              })
            : null,
          t.fast
            ? e.jsxs("span", {
                className: "osr-speed",
                "data-osr-speed": !0,
                children: [
                  e.jsx(Te, { "aria-hidden": "true", className: "h-4 w-4" }),
                  e.jsx("span", {
                    className: "sr-only",
                    children: "Speed badge",
                  }),
                ],
              })
            : null,
        ],
      }),
      o
        ? null
        : e.jsx("p", {
            className: "osr-feedback-sent",
            children: t.picked
              ? `You sent it to ${se(t.picked).name}.`
              : "The clock ran out.",
          }),
      e.jsx("p", { className: "osr-why", children: t.ticket.why }),
      e.jsx("button", {
        ref: l,
        type: "button",
        className: "osr-primary w-full",
        onClick: i,
        "data-osr-next": !0,
        children: s ? "End shift" : r ? "To the memory desk" : "Next ticket",
      }),
    ],
  });
}
function ws({ history: t, ram: s, score: r, clockOn: l, onAgain: i }) {
  const o = t.filter((h) => h.picked === h.ticket.desk).length,
    n = o + s.clean,
    a = t.length + L.length,
    c = t.filter((h) => h.picked !== h.ticket.desk),
    x = t.filter((h) => h.fast).length;
  return e.jsxs(le.div, {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    className: "osr-results",
    "data-osr-results": !0,
    "aria-live": "polite",
    children: [
      e.jsx("h2", { className: "osr-rank", children: bt(n, a) }),
      e.jsx("p", { className: "osr-final-score", children: r }),
      e.jsxs("dl", {
        className: "osr-tally",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: "Tickets" }),
              e.jsxs("dd", { children: [o, " / ", t.length] }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: "Memory desk" }),
              e.jsxs("dd", { children: [s.clean, " / ", L.length] }),
            ],
          }),
          l
            ? e.jsxs("div", {
                "data-osr-speed-total": !0,
                children: [
                  e.jsx("dt", { children: "Speed" }),
                  e.jsxs("dd", {
                    className: "osr-speed-total",
                    children: [
                      e.jsx(Te, {
                        "aria-hidden": "true",
                        className: "h-5 w-5",
                      }),
                      x,
                    ],
                  }),
                ],
              })
            : null,
        ],
      }),
      c.length > 0
        ? e.jsx("ul", {
            className: "osr-missed",
            children: c.map(({ ticket: h, picked: y }) =>
              e.jsxs(
                "li",
                {
                  "data-tone": h.desk,
                  children: [
                    e.jsx(Oe, {
                      ticketId: h.id,
                      alt: h.alt,
                      className: "osr-missed-scene",
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "osr-missed-title",
                          children: h.event,
                        }),
                        e.jsxs("p", {
                          className: "osr-missed-desk",
                          children: [
                            e.jsx(Z, {
                              desk: h.desk,
                              className: "mr-1.5 inline h-5 w-5 align-[-5px]",
                            }),
                            se(h.desk).name,
                            y
                              ? e.jsxs("span", {
                                  className: "osr-missed-picked",
                                  children: [" (not ", se(y).name, ")"],
                                })
                              : null,
                          ],
                        }),
                        e.jsx("p", {
                          className: "osr-missed-why",
                          children: h.why,
                        }),
                      ],
                    }),
                  ],
                },
                h.id,
              ),
            ),
          })
        : null,
      e.jsxs("button", {
        type: "button",
        className: "osr-primary",
        onClick: i,
        children: [
          e.jsx(nt, { "aria-hidden": "true", className: "h-4 w-4" }),
          "New shift",
        ],
      }),
    ],
  });
}
export { Ve as CLOCK_KEY, zs as default };
