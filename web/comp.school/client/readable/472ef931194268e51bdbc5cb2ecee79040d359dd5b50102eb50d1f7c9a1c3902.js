import { j as r, r as p } from "./react-vendor-BK1G6oO1.js";
import {
  a as We,
  P as Se,
  cf as Pe,
  cg as Ge,
  R as Be,
  bm as _e,
} from "./index-DjyiOHey.js";
import { aq as Qe, aT as Je } from "./GameNotebook-b0Qw2wzd.js";
import "./ui-components-DeMDYLzO.js";
const je = {
    projectionist: {
      id: "projectionist",
      role: "Projection booth",
      creature: "owl",
      table: "TblFilm",
    },
    "box-office": {
      id: "box-office",
      role: "Box office",
      creature: "cat",
      table: "TblBooking",
    },
    membership: {
      id: "membership",
      role: "Membership desk",
      creature: "fox",
      table: "TblMember",
    },
    arcade: {
      id: "arcade",
      role: "Foyer arcade",
      creature: "raccoon",
      table: "TblArcade",
    },
  },
  v = {
    TblFilm: {
      name: "TblFilm",
      columns: [
        { name: "FilmID", type: "TEXT" },
        { name: "Title", type: "TEXT" },
        { name: "Certificate", type: "TEXT" },
        { name: "Minutes", type: "INTEGER" },
        { name: "Screen", type: "INTEGER" },
      ],
      rows: [
        ["F01", "Robo Pup 2", "U", 92, 1],
        ["F02", "Night Market Heist", "15", 128, 2],
        ["F03", "Deep Orbit", "12A", 151, 1],
        ["F04", "Paper Dragons", "PG", 104, 3],
        ["F05", "The Glass Maze", "15", 120, 2],
        ["F06", "Frostline Rescue", "12A", 117, 3],
        ["F07", "Sky Diner", "PG", 96, 1],
        ["F08", "Lantern Bay", "18", 135, 2],
      ],
    },
    TblBooking: {
      name: "TblBooking",
      columns: [
        { name: "BookingID", type: "INTEGER" },
        { name: "Surname", type: "TEXT" },
        { name: "FilmID", type: "TEXT" },
        { name: "Day", type: "TEXT" },
        { name: "Seats", type: "INTEGER" },
      ],
      rows: [
        [1, "Okafor", "F01", "Saturday", 4],
        [2, "Nowak", "F03", "Friday", 2],
        [3, "Patel", "F02", "Saturday", 2],
        [4, "Lindqvist", "F07", "Sunday", 5],
        [5, "Haddad", "F04", "Saturday", 3],
        [6, "Chen", "F05", "Friday", 1],
        [7, "Murphy", "F01", "Sunday", 4],
        [8, "Silva", "F06", "Saturday", 6],
      ],
    },
    TblMember: {
      name: "TblMember",
      columns: [
        { name: "MemberID", type: "TEXT" },
        { name: "FirstName", type: "TEXT" },
        { name: "Surname", type: "TEXT" },
        { name: "Age", type: "INTEGER" },
        { name: "Plan", type: "TEXT" },
      ],
      rows: [
        ["M101", "Amara", "Okafor", 15, "Student"],
        ["M102", "Jonah", "Reyes", 17, "Student"],
        ["M103", "Priya", "Patel", 16, "Student"],
        ["M104", "Tomasz", "Nowak", 42, "Standard"],
        ["M105", "Sam", "Carter", 38, "Family"],
        ["M106", "Yusuf", "Demir", 19, "Standard"],
        ["M107", "Mei", "Chen", 14, "Student"],
        ["M108", "Freya", "Lund", 61, "Standard"],
      ],
    },
    TblArcade: {
      name: "TblArcade",
      columns: [
        { name: "PlayerTag", type: "TEXT" },
        { name: "ArcadeGame", type: "TEXT" },
        { name: "Score", type: "INTEGER" },
        { name: "Level", type: "INTEGER" },
      ],
      rows: [
        ["NovaFox", "Comet Run", 9150, 7],
        ["Pixel8", "Comet Run", 4820, 3],
        ["JetLag", "Brick Storm", 7600, 5],
        ["Kiwi99", "Comet Run", 8e3, 6],
        ["ZedRex", "Brick Storm", 3210, 2],
        ["Moth", "Neon Golf", 5e3, 4],
        ["Echo", "Comet Run", 12400, 9],
      ],
    },
  },
  z = Object.keys(v);
function Ue(e) {
  return typeof e == "number" ? String(e) : `'${e.replace(/'/g, "''")}'`;
}
function ze() {
  return z.map((e) => {
    const t = v[e],
      n = `CREATE TABLE ${e} (${t.columns.map((a) => `${a.name} ${a.type}`).join(", ")});`,
      s = t.rows.map(
        (a) => `INSERT INTO ${e} VALUES (${a.map(Ue).join(", ")});`,
      );
    return [n, ...s].join(`
`);
  }).join(`
`);
}
const D = "June 2024 Q9(d)",
  ee = "Specimen Q3",
  pe = "Practice 2019 Q5(a)",
  Xe = "June 2022 Q5(a)(iii)",
  G = "June 2023 Q6(d)",
  te = "Practice 2023 Q7(a)(i)",
  ge = "June 2025 Q6(b)(i)",
  ne = "June 2026 Q7(c)",
  Ze = [
    {
      id: "film-titles",
      tier: 1,
      format: "complete",
      staff: "projectionist",
      ask: "Show the Title of every film, for tonight’s posters.",
      reference: "SELECT Title FROM TblFilm",
      template: `SELECT {}
FROM TblFilm`,
      fills: ["Title"],
      win: "Eight posters go up in the foyer.",
      source: D,
    },
    {
      id: "every-booking",
      tier: 1,
      format: "complete",
      staff: "box-office",
      ask: "Show all the fields of every booking, for the end-of-night check.",
      reference: "SELECT * FROM TblBooking",
      template: `SELECT {}
FROM {}`,
      fills: ["*", "TblBooking"],
      win: "Every booking is checked off before the doors close.",
      source: ee,
    },
    {
      id: "player-tags",
      tier: 1,
      format: "complete",
      staff: "arcade",
      ask: "Show the PlayerTag of every player, for the arcade’s welcome screen.",
      reference: "SELECT PlayerTag FROM TblArcade",
      template: `SELECT PlayerTag
FROM {}`,
      fills: ["TblArcade"],
      win: "Every tag scrolls across the welcome screen.",
      source: D,
    },
    {
      id: "every-member",
      tier: 1,
      format: "write",
      staff: "membership",
      ask: "Show all the fields of every member, for the yearly audit.",
      reference: "SELECT * FROM TblMember",
      win: "The audit gets the whole members list.",
      source: ee,
    },
    {
      id: "first-names",
      tier: 1,
      format: "write",
      staff: "membership",
      ask: "Show the FirstName of every member, for the birthday cards.",
      reference: "SELECT FirstName FROM TblMember",
      win: "Eight birthday cards get a name.",
      source: ne,
    },
    {
      id: "titles-minutes",
      tier: 2,
      format: "complete",
      staff: "projectionist",
      ask: "Show the Title and Minutes of every film, to plan tonight’s timings.",
      reference: "SELECT Title, Minutes FROM TblFilm",
      template: `SELECT Title, {}
FROM {}`,
      fills: ["Minutes", "TblFilm"],
      win: "Every film gets its slot, with time to clean between.",
      source: D,
    },
    {
      id: "surname-seats",
      tier: 2,
      format: "write",
      staff: "box-office",
      ask: "Show the Surname and Seats of every booking, for the seating plan.",
      reference: "SELECT Surname, Seats FROM TblBooking",
      win: "Every group is seated together.",
      source: pe,
    },
    {
      id: "name-plan",
      tier: 2,
      format: "fix",
      staff: "membership",
      ask: "This should show the FirstName and Plan of every member, for the renewal letters. It is wrong: fix it.",
      reference: "SELECT FirstName, Plan FROM TblMember",
      broken: `SELECT FirstName AND Plan
FROM TblMember`,
      win: "Every renewal letter names the right plan.",
      source: ge,
    },
    {
      id: "tag-score",
      tier: 2,
      format: "write",
      staff: "arcade",
      ask: "Show the PlayerTag and Score of every player, for the leaderboard.",
      reference: "SELECT PlayerTag, Score FROM TblArcade",
      win: "The leaderboard lights up with every score.",
      source: ne,
    },
    {
      id: "title-cert-screen",
      tier: 2,
      format: "complete",
      staff: "projectionist",
      ask: "Show the Title, Certificate and Screen of every film, for the ushers.",
      reference: "SELECT Title, Certificate, Screen FROM TblFilm",
      template: `SELECT {}
FROM TblFilm`,
      fills: ["Title, Certificate, Screen"],
      win: "The ushers know which screen to check ages at.",
      source: te,
    },
    {
      id: "long-films",
      tier: 3,
      format: "fix",
      staff: "projectionist",
      ask: "This should show the Title of every film longer than 120 minutes, so the staff rota knows which shows finish late. It is wrong: fix it.",
      reference: "SELECT Title FROM TblFilm WHERE Minutes > 120",
      broken: `SELECT Title
FROM TblFilm
IF Minutes > 120`,
      rowsHint:
        "Longer than 120 minutes leaves out The Glass Maze, which is exactly 120.",
      win: "Three late finishes go on the staff rota.",
      source: Xe,
    },
    {
      id: "over-16",
      tier: 3,
      format: "complete",
      staff: "membership",
      ask: "Show the FirstName and Surname of members over 16, for the late-night film club.",
      reference: "SELECT FirstName, Surname FROM TblMember WHERE Age > 16",
      template: `SELECT FirstName, {}
FROM {}
{}`,
      fills: ["Surname", "TblMember", "WHERE Age > 16"],
      rowsHint: "Over 16 leaves out Priya, who is exactly 16.",
      win: "Five members get their late-night club card.",
      source: D,
    },
    {
      id: "big-groups",
      tier: 3,
      format: "write",
      staff: "box-office",
      ask: "Show the BookingID and Surname of bookings for 4 or more seats, who get a free popcorn.",
      reference: "SELECT BookingID, Surname FROM TblBooking WHERE Seats >= 4",
      rowsHint: "4 or more includes the bookings of exactly 4 seats.",
      win: "Four groups collect a free popcorn.",
      source: pe,
    },
    {
      id: "members-table",
      tier: 3,
      format: "fix",
      staff: "membership",
      ask: "This should show the MemberID of members under 16, for the junior club. It is wrong: fix it.",
      reference: "SELECT MemberID FROM TblMember WHERE Age < 16",
      broken: `SELECT MemberID
FROM TblMembers
WHERE Age < 16`,
      rowsHint: "Under 16 leaves out Priya, who is exactly 16.",
      win: "Two juniors get their club badge.",
      source: D,
    },
    {
      id: "saturday",
      tier: 3,
      format: "fix",
      staff: "box-office",
      ask: "This should show the Surname and Seats of every Saturday booking. It is wrong: fix it.",
      reference: "SELECT Surname, Seats FROM TblBooking WHERE Day = 'Saturday'",
      broken: `SELECT Surname AND Seats
FROM TblBooking
IF Day = Saturday`,
      win: "Saturday’s four bookings are ready at the desk.",
      source: ge,
    },
    {
      id: "students",
      tier: 3,
      format: "write",
      staff: "membership",
      ask: "Show the FirstName and Surname of members on the Student plan, for a discount email.",
      reference:
        "SELECT FirstName, Surname FROM TblMember WHERE Plan = 'Student'",
      win: "Four students get the discount, and nobody else does.",
      source: G,
    },
    {
      id: "comet-run",
      tier: 3,
      format: "complete",
      staff: "arcade",
      ask: "Show all the fields of every Comet Run score, for the machine’s high-score table.",
      reference: "SELECT * FROM TblArcade WHERE ArcadeGame = 'Comet Run'",
      template: `SELECT {}
FROM TblArcade
WHERE ArcadeGame = {}`,
      fills: ["*", '"Comet Run"'],
      win: "The Comet Run machine shows all four of its scores.",
      source: ee,
    },
    {
      id: "saturday-groups",
      tier: 4,
      format: "write",
      staff: "box-office",
      ask: "Show the Surname of Saturday bookings for more than 2 seats, so each group’s seats are kept together.",
      reference:
        "SELECT Surname FROM TblBooking WHERE Day = 'Saturday' AND Seats > 2",
      rowsHint: "More than 2 seats leaves out Patel, who booked exactly 2.",
      win: "Three Saturday groups sit together.",
      source: G,
    },
    {
      id: "student-16",
      tier: 4,
      format: "complete",
      staff: "membership",
      ask: "Show the FirstName of members on the Student plan who are 16 or over, for the volunteer usher scheme.",
      reference:
        "SELECT FirstName FROM TblMember WHERE Plan = 'Student' AND Age >= 16",
      template: `SELECT FirstName
FROM TblMember
WHERE Plan = {} {} Age {}`,
      fills: ['"Student"', "AND", ">= 16"],
      rowsHint: "16 or over includes Priya, who is exactly 16.",
      win: "Two students start as volunteer ushers.",
      source: te,
    },
    {
      id: "screens-1-3",
      tier: 4,
      format: "fix",
      staff: "projectionist",
      ask: "This should show the Title of every film in Screen 1 or Screen 3, which share one projectionist tonight. It is wrong: fix it.",
      reference: "SELECT Title FROM TblFilm WHERE Screen = 1 OR Screen = 3",
      broken: `SELECT Title
FROM TblFilm
WHERE Screen = 1 OR 3`,
      win: "Five films go on the projectionist’s list.",
      source: G,
    },
    {
      id: "comet-8000",
      tier: 4,
      format: "complete",
      staff: "arcade",
      ask: "Show the PlayerTag and Score of Comet Run players who scored more than 8000, for the prize draw.",
      reference:
        "SELECT PlayerTag, Score FROM TblArcade WHERE ArcadeGame = 'Comet Run' AND Score > 8000",
      template: `SELECT PlayerTag, Score
FROM TblArcade
WHERE ArcadeGame = "Comet Run" {} Score {}`,
      fills: ["AND", "> 8000"],
      rowsHint: "More than 8000 leaves out Kiwi99, who scored exactly 8000.",
      win: "Two players go into the prize draw.",
      source: te,
    },
    {
      id: "family-films",
      tier: 4,
      format: "write",
      staff: "projectionist",
      ask: "Show the Title of every film with a U or a PG certificate, for the family morning.",
      reference:
        "SELECT Title FROM TblFilm WHERE Certificate = 'U' OR Certificate = 'PG'",
      win: "Three films are booked for the family morning.",
      source: G,
    },
    {
      id: "weekend-start",
      tier: 4,
      format: "fix",
      staff: "box-office",
      ask: "This should show the BookingID and Day of every Friday or Saturday booking. It is wrong: fix it.",
      reference:
        "SELECT BookingID, Day FROM TblBooking WHERE Day = 'Friday' OR Day = 'Saturday'",
      broken: `FROM TblBooking
SELECT BookingID, Day
WHERE Day = "Friday" OR Day = "Saturday"`,
      win: "Six weekend bookings are printed for the late staff.",
      source: ne,
    },
  ],
  Ke = [1, 2, 3, 4],
  Ye = 2,
  A = 3,
  Ve = {
    1: "One field",
    2: "Several fields",
    3: "One condition",
    4: "Two conditions",
  };
function be(e) {
  return Ke.flatMap((t) => {
    const n = Ze.filter((o) => o.tier === t),
      s = [],
      a = [...n];
    for (; s.length < Ye && a.length > 0;) {
      const o = Math.min(a.length - 1, Math.floor(e() * a.length));
      s.push(...a.splice(o, 1));
    }
    return s;
  });
}
function qe(e, t) {
  let n = 0;
  return e.replace(/\{\}/g, () => t[n++] ?? "");
}
function et(e) {
  return e.match(/\{\}/g)?.length ?? 0;
}
function tt(e) {
  return e.format === "fix" ? (e.broken ?? "") : "";
}
const nt = 100,
  rt = 50;
function st(e) {
  return nt + (e ? rt : 0);
}
function at(e, t) {
  return e >= t
    ? "Head of the Box Office"
    : e >= t - 2
      ? "Duty Manager"
      : e >= t / 2
        ? "Box Office Assistant"
        : "Trainee Usher";
}
const ot = new Set(["SELECT", "FROM", "WHERE", "IF"]),
  re = new Set(["AND", "OR", "NOT", "TRUE", "FALSE", "NULL"]),
  Re = new Set([
    "ORDER",
    "BY",
    "GROUP",
    "HAVING",
    "LIMIT",
    "JOIN",
    "ON",
    "LIKE",
    "DISTINCT",
    "IN",
    "BETWEEN",
    "IS",
    "AS",
    "UNION",
    "INSERT",
    "UPDATE",
    "DELETE",
    "DROP",
    "CREATE",
  ]);
function H(e) {
  const t = [];
  let n = 0;
  for (; n < e.length;) {
    const s = e[n];
    if (/\s/.test(s)) {
      n += 1;
      continue;
    }
    const a = n;
    if (
      s === "'" ||
      s === '"' ||
      s === "“" ||
      s === "”" ||
      s === "‘" ||
      s === "’"
    ) {
      const u =
        s === '"' || s === "“" || s === "”" ? ['"', "”", "“"] : ["'", "’", "‘"];
      for (n += 1; n < e.length && !u.includes(e[n]);) n += 1;
      const m = e.slice(a + 1, n);
      ((n = Math.min(e.length, n + 1)),
        t.push({
          kind: u[0] === '"' ? "dq" : "string",
          text: e.slice(a, n),
          value: m,
          start: a,
          end: n,
        }));
      continue;
    }
    const o = /^[A-Za-z_][A-Za-z0-9_]*/.exec(e.slice(n));
    if (o) {
      ((n += o[0].length),
        t.push({ kind: "word", text: o[0], value: o[0], start: a, end: n }));
      continue;
    }
    const i = /^\d+(\.\d+)?/.exec(e.slice(n));
    if (i) {
      ((n += i[0].length),
        t.push({ kind: "number", text: i[0], value: i[0], start: a, end: n }));
      continue;
    }
    const c = /^(>=|<=|<>|!=|==|=|<|>)/.exec(e.slice(n));
    if (c) {
      ((n += c[0].length),
        t.push({ kind: "op", text: c[0], value: c[0], start: a, end: n }));
      continue;
    }
    n += 1;
    const l =
      s === ","
        ? "comma"
        : s === "*"
          ? "star"
          : s === ";"
            ? "semi"
            : s === "&"
              ? "amp"
              : "other";
    t.push({ kind: l, text: s, value: s, start: a, end: n });
  }
  return t;
}
const T = (e) => (e?.kind === "word" ? e.text.toUpperCase() : "");
function it(e, t) {
  const n = e.toLowerCase(),
    s = t.toLowerCase(),
    a = Array.from({ length: s.length + 1 }, (o, i) => i);
  for (let o = 1; o <= n.length; o += 1) {
    let i = a[0];
    a[0] = o;
    for (let c = 1; c <= s.length; c += 1) {
      const l = a[c];
      ((a[c] = Math.min(
        a[c] + 1,
        a[c - 1] + 1,
        i + (n[o - 1] === s[c - 1] ? 0 : 1),
      )),
        (i = l));
    }
  }
  return a[s.length];
}
function ke(e, t) {
  let n = null,
    s = 1 / 0;
  for (const a of t) {
    const o = it(e, a);
    o < s && ((n = a), (s = o));
  }
  return n && s <= Math.max(2, Math.floor(n.length / 4)) ? n : null;
}
const I = (e, t) => e.toLowerCase() === t.toLowerCase();
function B(e) {
  const t = z.find((n) => I(n, e));
  return t ? v[t] : void 0;
}
function N(e, t) {
  return e.columns.find((n) => I(n.name, t))?.name;
}
const ct = z.flatMap((e) => [e, ...v[e].columns.map((t) => t.name)]),
  Ee = (e) => ct.some((t) => I(t, e));
function se(e, t) {
  const n = [];
  for (let s = t + 1; s < e.length; s += 1) {
    const a = e[s];
    if (ot.has(T(a)) || Re.has(T(a)) || a.kind === "semi") break;
    n.push(a);
  }
  return n;
}
const _ = (e, t) => e.findIndex((n) => T(n) === t),
  Q = (e) => e.map((t) => t.text).join(" ");
function lt(e) {
  return e
    .filter((t) => t.kind === "word" && !["AND", "ALL"].includes(T(t)))
    .map((t) => t.text)
    .join(", ");
}
function ft(e, t, n) {
  if (e.length === 0) {
    n.push("Say which fields after SELECT, or * for all of them.");
    return;
  }
  if (e.some((o) => T(o) === "ALL")) {
    n.push("For all fields, write SELECT *, not SELECT ALL.");
    return;
  }
  const s = e.find((o) => T(o) === "AND" || o.kind === "amp");
  if (s) {
    n.push(
      `Fields after SELECT are split by commas, not ${s.text}: SELECT ${lt(e)}.`,
    );
    return;
  }
  const a = [[]];
  for (const o of e) o.kind === "comma" ? a.push([]) : a[a.length - 1].push(o);
  for (const o of a) {
    if (o.length === 0) {
      n.push("There is a comma with no field beside it.");
      continue;
    }
    if (o.length === 1) {
      const [c] = o;
      if (c.kind === "star") continue;
      c.kind === "word" || c.kind === "dq" || c.kind === "string"
        ? Fe(c.value, t, n)
        : n.push(`${c.text} is not a field name.`);
      continue;
    }
    const i = o.map((c) => c.value).join("");
    t && o.every((c) => c.kind === "word") && N(t, i)
      ? n.push(`Field names have no spaces: ${N(t, i)}, not ${Q(o)}.`)
      : o.every((c) => c.kind === "word" || c.kind === "star")
        ? n.push(
            `Put a comma between fields: ${o.map((c) => c.text).join(", ")}.`,
          )
        : n.push(`After SELECT go field names only, not ${Q(o)}.`);
  }
}
function Fe(e, t, n) {
  if (!t || N(t, e)) return;
  const s = ke(
    e,
    t.columns.map((a) => a.name),
  );
  n.push(
    s
      ? `There is no field called ${e} in ${t.name}. It is ${s}: names must match the table exactly.`
      : `There is no field called ${e} in ${t.name}. Use a field name from the table.`,
  );
}
function ut(e, t, n) {
  const s = v[W(t)];
  if (e.length === 0) {
    n.push(`Say which table after FROM: FROM ${s.name}.`);
    return;
  }
  const a = e.filter(
    (c) => c.kind === "word" || c.kind === "dq" || c.kind === "string",
  );
  if (a.length !== e.length) {
    n.push(`After FROM goes the table name only: FROM ${s.name}.`);
    return;
  }
  const o = a.map((c) => c.value).join("");
  if (a.length > 1)
    return (
      n.push(
        B(o)
          ? `Table names have no spaces: ${B(o).name}, not ${Q(a)}.`
          : `After FROM goes one table name: FROM ${s.name}.`,
      ),
      B(o)
    );
  const i = B(o);
  if (!i) {
    const c = ke(o, z);
    return (
      n.push(
        c
          ? `There is no table called ${o}. It is ${c}: names must match exactly.`
          : `There is no table called ${o}. This request needs ${s.name}.`,
      ),
      c ? v[c] : void 0
    );
  }
  if (i.name !== s.name) {
    n.push(`This request needs ${s.name}, not ${i.name}.`);
    return;
  }
  return i;
}
function ve(e) {
  return e.rows.flatMap((t) => t.filter((n) => typeof n == "string"));
}
function dt(e, t, n) {
  if (e.length === 0) {
    n.push("WHERE needs a condition after it, such as WHERE Age > 16.");
    return;
  }
  if (!t) return;
  const s = ve(t);
  for (let a = 0; a < e.length; a += 1) {
    const o = e[a];
    if (o.kind !== "word" || re.has(T(o)) || N(t, o.text)) continue;
    let i = a;
    for (
      ;
      i + 1 < e.length &&
      e[i + 1].kind === "word" &&
      !re.has(T(e[i + 1])) &&
      !N(t, e[i + 1].text);
    )
      i += 1;
    const c = e.slice(a, i + 1),
      l = Q(c),
      u = s.find((d) => I(d, l)),
      m = e[a - 1];
    if (u || m?.kind === "op")
      n.push(`${l} is text, so it needs quotes: "${l}".`);
    else if (N(t, c.map((d) => d.text).join("")))
      n.push(
        `Field names have no spaces: ${N(t, c.map((d) => d.text).join(""))}, not ${l}.`,
      );
    else for (const d of c) Fe(d.text, t, n);
    a = i;
  }
  for (let a = 0; a < e.length; a += 1) {
    const o = T(e[a]);
    if (o !== "AND" && o !== "OR") continue;
    const i = e[a + 1],
      c = e[a + 2];
    if (
      !(
        i &&
        (i.kind === "number" ||
          i.kind === "string" ||
          i.kind === "dq" ||
          (i.kind === "word" && !re.has(T(i)) && !N(t, i.text)))
      ) ||
      (c && T(c) !== "AND" && T(c) !== "OR")
    )
      continue;
    const u = e
        .slice(0, a)
        .map((h) => h.kind)
        .lastIndexOf("op"),
      m = u > 0 ? e[u - 1].text : "Field",
      d = u >= 0 ? e[u].text : "=",
      y = e
        .slice(0, a)
        .map((h) => h.text)
        .join(" ");
    n.push(
      `Each side of ${e[a].text} needs a whole condition: ${y} ${e[a].text} ${m} ${d} ${i.text}.`,
    );
  }
}
function W(e) {
  return /\bFROM\s+(\w+)/i.exec(e.reference)?.[1] ?? "TblFilm";
}
function ht(e, t) {
  const n = H(e),
    s = [];
  if (n.length === 0) return ["Write a query first."];
  const a = n.findIndex((b) => b.kind === "semi");
  if (a >= 0 && n.slice(a + 1).some((b) => b.kind !== "semi"))
    return ["Run one SELECT query at a time."];
  const o = _(n, "SELECT"),
    i = _(n, "FROM"),
    c = _(n, "IF"),
    l = _(n, "WHERE"),
    u = l >= 0 ? l : c;
  (o < 0 && s.push("A query starts with SELECT and the fields to show."),
    i < 0 && s.push(`Say which table with FROM: FROM ${W(t)}.`));
  const m = [o, i, u].filter((b) => b >= 0);
  (o > 0 || m.some((b, R) => R > 0 && b < m[R - 1])) &&
    s.push("The order is SELECT, then FROM, then WHERE.");
  const d = n.find((b) => Re.has(T(b)));
  d && s.push(`J277 SQL is SELECT, FROM and WHERE: leave out ${d.text}.`);
  const y = [],
    h = i >= 0 ? ut(se(n, i), t, y) : v[W(t)];
  return (
    o >= 0 && ft(se(n, o), h, s),
    s.push(...y),
    c >= 0 && s.push("SQL picks rows with WHERE, not IF."),
    u >= 0 && !d && dt(se(n, u), h, s),
    [...new Set(s)]
  );
}
function mt(e) {
  const t = H(e),
    n = t.findIndex((o) => T(o) === "WHERE");
  let s = "",
    a = 0;
  return (
    t.forEach((o, i) => {
      if (o.kind !== "dq" && o.kind !== "string") return;
      const c = n < 0 || i < n;
      let l = null;
      (c && Ee(o.value)
        ? (l = o.value)
        : o.kind === "dq" && !Ee(o.value)
          ? (l = `'${o.value.replace(/'/g, "''")}'`)
          : o.kind === "string" &&
            o.text[0] !== "'" &&
            (l = `'${o.value.replace(/'/g, "''")}'`),
        l !== null && ((s += e.slice(a, o.start) + l), (a = o.end)));
    }),
    (s + e.slice(a)).trim().replace(/;+\s*$/, "")
  );
}
const ae = (e) =>
  JSON.stringify(e.map((t) => (typeof t == "number" ? t : String(t))));
function xt(e, t, n) {
  const s = ht(e, t);
  if (s.length > 0) return { right: !1, reasons: s };
  let a;
  try {
    a = n(mt(e));
  } catch (f) {
    return {
      right: !1,
      reasons: [
        `The query did not run: ${(f instanceof Error ? f.message : String(f)).replace(/\s*- should this be.*$/, "")}.`,
      ],
    };
  }
  const o = n(t.reference),
    i = v[W(t)],
    c = o.columns.map((f) => f.toLowerCase()),
    l = a.columns.map((f) => f.toLowerCase()),
    u = o.columns.filter((f) => !l.includes(f.toLowerCase())),
    m = a.columns.filter((f) => !c.includes(f.toLowerCase()));
  if (u.length > 0 || m.length > 0) {
    const f = [];
    return (
      H(e).some((w) => w.kind === "star") && u.length === 0
        ? f.push(
            `SELECT * shows every field. This request only wants ${oe(o.columns)}.`,
          )
        : (u.length > 0 && f.push(`The request also wants ${oe(u)}.`),
          m.length > 0 && f.push(`The request does not ask for ${oe(m)}.`)),
      { right: !1, reasons: f, result: a }
    );
  }
  const d = c.map((f) => l.indexOf(f)),
    y = a.rows.map((f) => d.map((E) => f[E])),
    h = new Map();
  for (const f of o.rows) h.set(ae(f), (h.get(ae(f)) ?? 0) + 1);
  const b = y.map((f) => {
      const E = ae(f),
        w = h.get(E) ?? 0;
      return w === 0 ? !0 : (h.set(E, w - 1), !1);
    }),
    R = [...h.values()].reduce((f, E) => f + E, 0);
  if (R === 0 && !b.some(Boolean))
    return { right: !0, reasons: [], result: a, extraRows: b, missingRows: R };
  const S = [
    `${ye(a.rows.length, "row")} came back. The request wants ${ye(o.rows.length, "row")}.`,
  ];
  if (!H(e).some((f) => T(f) === "WHERE") && a.rows.length === i.rows.length)
    S.push(
      "Every row came back. Only some are wanted: add WHERE and a condition.",
    );
  else {
    const f = H(e).filter((j) => j.kind === "string" || j.kind === "dq"),
      E = ve(i),
      w = f.find((j) => !E.includes(j.value) && E.some((k) => I(k, j.value)));
    if (w) {
      const j = E.find((k) => I(k, w.value));
      S.push(`Text must match the table exactly: "${j}", not "${w.value}".`);
    } else t.rowsHint && S.push(t.rowsHint);
  }
  return { right: !1, reasons: S, result: a, extraRows: b, missingRows: R };
}
function oe(e) {
  return e.length <= 1
    ? e.join("")
    : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
function ye(e, t) {
  return `${e} ${t}${e === 1 ? "" : "s"}`;
}
function pt(e) {
  if (window.initSqlJs) return Promise.resolve();
  const t = document.querySelector(`script[src="${e}"]`);
  return t
    ? new Promise((n, s) => {
        (t.addEventListener("load", () => n(), { once: !0 }),
          t.addEventListener(
            "error",
            () => s(new Error("Failed to load sql.js.")),
            { once: !0 },
          ));
      })
    : new Promise((n, s) => {
        const a = document.createElement("script");
        ((a.src = e),
          (a.async = !0),
          a.addEventListener("load", () => n(), { once: !0 }),
          a.addEventListener(
            "error",
            () => s(new Error("Failed to load sql.js.")),
            { once: !0 },
          ),
          document.head.appendChild(a));
      });
}
async function gt() {
  const { sqlJsBaseUrl: e } = We();
  if ((await pt(`${e}sql-wasm.js`), !window.initSqlJs))
    throw new Error("sql.js initialiser was not available.");
  return window.initSqlJs({ locateFile: (t) => `${e}${t}` });
}
function bt(e) {
  let t = e.trimStart();
  for (; t.startsWith("--") || t.startsWith("/*");) {
    if (t.startsWith("--")) {
      const s = t.indexOf(`
`);
      t = s === -1 ? "" : t.slice(s + 1).trimStart();
      continue;
    }
    const n = t.indexOf("*/");
    t = n === -1 ? "" : t.slice(n + 2).trimStart();
  }
  return t.match(/^[A-Za-z]+/)?.[0].toUpperCase() ?? "";
}
function Et(e, t) {
  const n = e.exec(t);
  if (n.length > 0 || !["SELECT", "WITH"].includes(bt(t))) return n;
  const s = e.prepare(t);
  try {
    return [{ columns: s.getColumnNames(), values: [] }];
  } finally {
    s.free();
  }
}
async function yt() {
  const e = await gt(),
    t = new e.Database();
  return (
    t.exec(ze()),
    (n) => {
      const [s] = Et(t, n);
      return { columns: s?.columns ?? [], rows: s?.values ?? [] };
    }
  );
}
const $ = "#051827",
  P = "#081b2b",
  J = "#102333",
  X = "#1c2f40",
  U = "#2b3f50",
  Tt = "#3d5264",
  wt = "#54697c",
  Me = "#8ba3b7",
  St = "#cfedff",
  le = "#e3e9ee",
  ie = "#00425f",
  jt = "#4e89aa",
  ce = "#8ecbee",
  Rt = "#392a1a",
  kt = "#5c4d3b",
  Ft = "#8f7e6b",
  vt = "#d1beaa",
  Mt = "#f8e4cf",
  fe = "#c4973c",
  Z = "#e8ba61",
  ue = "#ffe4b4",
  de = "#5c0008",
  Ne = "#901e21",
  he = "#cb5651",
  Nt = "#5bb57e";
function Lt({ x: e, y: t, width: n, height: s }) {
  const a = [];
  for (let i = 0; i <= n; i += 14)
    (a.push(r.jsx("circle", { cx: e + i, cy: t, r: 2.6 }, `t${i}`)),
      a.push(r.jsx("circle", { cx: e + i, cy: t + s, r: 2.6 }, `b${i}`)));
  for (let i = 14; i < s; i += 14)
    (a.push(r.jsx("circle", { cx: e, cy: t + i, r: 2.6 }, `l${i}`)),
      a.push(r.jsx("circle", { cx: e + n, cy: t + i, r: 2.6 }, `r${i}`)));
  return r.jsx("g", { fill: ue, children: a });
}
function Ct({ width: e, height: t }) {
  const n = [
    [0.08, 0.1],
    [0.2, 0.22],
    [0.33, 0.07],
    [0.62, 0.14],
    [0.74, 0.05],
    [0.9, 0.2],
    [0.48, 0.25],
    [0.14, 0.34],
  ];
  return r.jsx("g", {
    fill: St,
    opacity: 0.7,
    children: n.map(([s, a], o) =>
      r.jsx("circle", { cx: s * e, cy: a * t, r: o % 3 === 0 ? 1.8 : 1.1 }, o),
    ),
  });
}
function Ot({ x: e, y: t, width: n }) {
  const s = n * 0.78,
    a = t + s * 0.2,
    o = t + s * 0.55,
    i = n * 0.15;
  return r.jsxs("g", {
    children: [
      r.jsx("rect", { x: e, y: t, width: n, height: s, rx: 6, fill: X }),
      r.jsx("rect", {
        x: e + n * 0.3,
        y: t - n * 0.12,
        width: n * 0.4,
        height: n * 0.14,
        rx: 6,
        fill: J,
      }),
      r.jsx("text", {
        x: e + n / 2,
        y: t - n * 0.025,
        textAnchor: "middle",
        fontSize: n * 0.075,
        fontWeight: 700,
        fill: Z,
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        letterSpacing: n * 0.01,
        children: "ORBIT",
      }),
      r.jsx("rect", {
        x: e + n * 0.08,
        y: a,
        width: n * 0.84,
        height: s * 0.24,
        rx: 5,
        fill: $,
      }),
      r.jsx(Lt, { x: e + n * 0.08, y: a, width: n * 0.84, height: s * 0.24 }),
      r.jsx("text", {
        x: e + n / 2,
        y: a + s * 0.1,
        textAnchor: "middle",
        fontSize: n * 0.045,
        fill: ue,
        fontFamily: "ui-monospace, monospace",
        children: "SELECT * FROM TblFilm",
      }),
      r.jsx("text", {
        x: e + n / 2,
        y: a + s * 0.18,
        textAnchor: "middle",
        fontSize: n * 0.04,
        fill: ce,
        fontFamily: "ui-monospace, monospace",
        children: "WHERE Screen = 1",
      }),
      [0, 1].map((c) => {
        const l = c === 0 ? e + n * 0.06 : e + n * 0.94 - i;
        return r.jsxs(
          "g",
          {
            children: [
              r.jsx("rect", {
                x: l,
                y: o,
                width: i,
                height: i * 1.4,
                rx: 3,
                fill: fe,
              }),
              r.jsx("rect", {
                x: l + 4,
                y: o + 4,
                width: i - 8,
                height: i * 1.4 - 8,
                rx: 2,
                fill: c === 0 ? ie : de,
              }),
              r.jsx("circle", {
                cx: l + i / 2,
                cy: o + i * 0.6,
                r: i * 0.22,
                fill: c === 0 ? ce : he,
              }),
            ],
          },
          c,
        );
      }),
      r.jsx("rect", {
        x: e + n * 0.3,
        y: o,
        width: n * 0.4,
        height: s * 0.45,
        fill: P,
      }),
      r.jsx("rect", {
        x: e + n * 0.31,
        y: o + 4,
        width: n * 0.185,
        height: s * 0.45 - 4,
        fill: ie,
        opacity: 0.75,
      }),
      r.jsx("rect", {
        x: e + n * 0.505,
        y: o + 4,
        width: n * 0.185,
        height: s * 0.45 - 4,
        fill: ie,
        opacity: 0.75,
      }),
      r.jsx("rect", {
        x: e + n * 0.3,
        y: o - 6,
        width: n * 0.4,
        height: 6,
        fill: Ne,
      }),
    ],
  });
}
function $t({ x: e, y: t, scale: n }) {
  const s = [
    "M-9 -18 L-5 -30 L-1 -19Z M9 -18 L5 -30 L1 -19Z",
    "M-10 -16 Q-12 -30 -3 -20Z M10 -16 Q12 -30 3 -20Z",
    "",
  ];
  return r.jsx("g", {
    transform: `translate(${e} ${t}) scale(${n})`,
    children: [0, 1, 2, 3].map((a) =>
      r.jsxs(
        "g",
        {
          transform: `translate(${a * 30} ${a % 2 === 0 ? 0 : 3})`,
          fill: $,
          children: [
            r.jsx("ellipse", { cx: 0, cy: 6, rx: 12, ry: 16 }),
            r.jsx("circle", { cx: 0, cy: -12, r: 11 }),
            s[a % 3] ? r.jsx("path", { d: s[a % 3] }) : null,
          ],
        },
        a,
      ),
    ),
  });
}
function Te({ layout: e }) {
  const t = e === "wide",
    n = t ? 1600 : 900,
    s = t ? 900 : 1600,
    a = t ? 760 : 700,
    o = (n - a) / 2,
    i = t ? 250 : 520,
    c = i + a * 0.78;
  return r.jsxs("svg", {
    className: `game-landing-art ${t ? "game-landing-landscape" : "game-landing-portrait"}`,
    viewBox: `0 0 ${n} ${s}`,
    width: "100%",
    height: "100%",
    preserveAspectRatio: "xMidYMid slice",
    role: "img",
    "aria-label":
      "The Orbit Picturehouse at night, its marquee lit and a queue at the doors",
    "data-cinema-scene": e,
    children: [
      r.jsx("rect", { width: n, height: s, fill: P }),
      r.jsx(Ct, { width: n, height: s }),
      r.jsx("circle", { cx: n * 0.82, cy: s * 0.12, r: t ? 54 : 70, fill: le }),
      r.jsx("circle", {
        cx: n * 0.82 + 18,
        cy: s * 0.12 - 10,
        r: t ? 50 : 64,
        fill: P,
      }),
      t
        ? r.jsxs("g", {
            fill: J,
            children: [
              r.jsx("rect", { x: 60, y: 360, width: 220, height: c - 360 }),
              r.jsx("rect", { x: 300, y: 430, width: 140, height: c - 430 }),
              r.jsx("rect", { x: 1160, y: 400, width: 180, height: c - 400 }),
              r.jsx("rect", { x: 1360, y: 330, width: 200, height: c - 330 }),
            ],
          })
        : r.jsxs("g", {
            fill: J,
            children: [
              r.jsx("rect", { x: 20, y: 640, width: 160, height: c - 640 }),
              r.jsx("rect", { x: 720, y: 600, width: 170, height: c - 600 }),
            ],
          }),
      r.jsx(Ot, { x: o, y: i, width: a }),
      r.jsx("rect", { x: 0, y: c, width: n, height: s - c, fill: X }),
      r.jsx("rect", {
        x: o + a * 0.3,
        y: c,
        width: a * 0.4,
        height: s - c,
        fill: de,
        opacity: 0.8,
      }),
      r.jsx($t, { x: o + a * 0.06, y: c - 24, scale: t ? 1.6 : 1.8 }),
    ],
  });
}
const At = {
  owl: { fur: kt, face: vt, ear: Rt },
  cat: { fur: wt, face: Me, ear: U },
  fox: { fur: he, face: Mt, ear: Ne },
  raccoon: { fur: Tt, face: le, ear: X },
};
function It({ creature: e, colour: t }) {
  switch (e) {
    case "owl":
      return r.jsx("path", {
        d: "M22 26 L28 10 L36 22Z M78 26 L72 10 L64 22Z",
        fill: t,
      });
    case "cat":
      return r.jsx("path", {
        d: "M20 34 L24 8 L42 22Z M80 34 L76 8 L58 22Z",
        fill: t,
      });
    case "fox":
      return r.jsx("path", {
        d: "M18 36 L20 4 L42 22Z M82 36 L80 4 L58 22Z",
        fill: t,
      });
    default:
      return r.jsxs("g", {
        fill: t,
        children: [
          r.jsx("circle", { cx: 26, cy: 22, r: 10 }),
          r.jsx("circle", { cx: 74, cy: 22, r: 10 }),
        ],
      });
  }
}
function Dt({ staff: e }) {
  switch (e) {
    case "projectionist":
      return r.jsxs("g", {
        transform: "translate(80 78)",
        children: [
          r.jsx("circle", { r: 14, fill: U }),
          [0, 1, 2, 3, 4].map((t) =>
            r.jsx(
              "circle",
              {
                cx: Math.cos((t * 2 * Math.PI) / 5) * 8,
                cy: Math.sin((t * 2 * Math.PI) / 5) * 8,
                r: 3,
                fill: P,
              },
              t,
            ),
          ),
        ],
      });
    case "box-office":
      return r.jsxs("g", {
        transform: "translate(70 70) rotate(-12)",
        children: [
          r.jsx("rect", { width: 28, height: 16, rx: 2, fill: Z }),
          r.jsx("rect", { x: 20, width: 2, height: 16, fill: fe }),
        ],
      });
    case "membership":
      return r.jsxs("g", {
        transform: "translate(68 72) rotate(10)",
        children: [
          r.jsx("rect", { width: 28, height: 18, rx: 3, fill: jt }),
          r.jsx("rect", { x: 4, y: 4, width: 8, height: 8, rx: 1, fill: ce }),
        ],
      });
    default:
      return r.jsxs("g", {
        transform: "translate(78 74)",
        children: [
          r.jsx("rect", {
            x: -12,
            y: 6,
            width: 24,
            height: 10,
            rx: 3,
            fill: U,
          }),
          r.jsx("rect", { x: -2, y: -6, width: 4, height: 14, fill: Me }),
          r.jsx("circle", { cy: -8, r: 5, fill: he }),
        ],
      });
  }
}
function Le({ staff: e, mood: t, className: n }) {
  const { creature: s, role: a } = je[e],
    o = At[s],
    i =
      t === "win"
        ? "M40 66 Q50 76 60 66"
        : t === "lose"
          ? "M40 72 Q50 64 60 72"
          : "M43 68 Q50 71 57 68",
    c = `${a}, ${t === "win" ? "pleased" : t === "lose" ? "worried" : "asking"}`;
  return r.jsxs("svg", {
    viewBox: "0 0 100 100",
    width: "100%",
    height: "100%",
    className: n,
    role: "img",
    "aria-label": c,
    "data-staff-art": e,
    "data-mood": t,
    children: [
      r.jsx("circle", {
        cx: 50,
        cy: 50,
        r: 48,
        fill: t === "win" ? Nt : t === "lose" ? de : X,
        opacity: t === "ask" ? 1 : 0.55,
      }),
      r.jsxs("g", {
        "data-character": !0,
        children: [
          r.jsx(It, { creature: s, colour: o.ear }),
          r.jsx("ellipse", { cx: 50, cy: 52, rx: 32, ry: 30, fill: o.fur }),
          r.jsx("ellipse", { cx: 50, cy: 60, rx: 20, ry: 17, fill: o.face }),
          s === "raccoon"
            ? r.jsx("rect", {
                x: 24,
                y: 38,
                width: 52,
                height: 14,
                rx: 7,
                fill: P,
              })
            : null,
          s === "owl"
            ? r.jsxs("g", {
                fill: o.face,
                children: [
                  r.jsx("circle", { cx: 38, cy: 45, r: 11 }),
                  r.jsx("circle", { cx: 62, cy: 45, r: 11 }),
                ],
              })
            : null,
          r.jsxs("g", {
            fill: $,
            children: [
              r.jsx("circle", { cx: 39, cy: 45, r: t === "lose" ? 3.5 : 4.5 }),
              r.jsx("circle", { cx: 61, cy: 45, r: t === "lose" ? 3.5 : 4.5 }),
            ],
          }),
          r.jsxs("g", {
            fill: le,
            children: [
              r.jsx("circle", { cx: 40.5, cy: 43.5, r: 1.4 }),
              r.jsx("circle", { cx: 62.5, cy: 43.5, r: 1.4 }),
            ],
          }),
          s === "owl"
            ? r.jsx("path", { d: "M46 54 L54 54 L50 61Z", fill: Z })
            : r.jsx("ellipse", { cx: 50, cy: 57, rx: 4, ry: 3, fill: $ }),
          t === "lose"
            ? r.jsx("path", {
                d: "M32 36 L44 39 M68 36 L56 39",
                stroke: $,
                strokeWidth: 2.5,
                strokeLinecap: "round",
              })
            : null,
          r.jsx("path", {
            d: i,
            fill: "none",
            stroke: $,
            strokeWidth: 2.5,
            strokeLinecap: "round",
          }),
          r.jsx(Dt, { staff: e }),
        ],
      }),
      t === "win" ? r.jsx("circle", { cx: 84, cy: 18, r: 9, fill: ue }) : null,
      t === "lose" ? r.jsx("circle", { cx: 84, cy: 18, r: 9, fill: Ft }) : null,
    ],
  });
}
function Ce({ used: e }) {
  return r.jsxs("svg", {
    viewBox: "0 0 40 24",
    width: "40",
    height: "24",
    "aria-hidden": "true",
    "data-ticket": e ? "used" : "left",
    children: [
      r.jsx("path", {
        d: "M3 2h34a1 1 0 0 1 1 1v5a4 4 0 0 0 0 8v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a4 4 0 0 0 0-8V3a1 1 0 0 1 1-1z",
        fill: e ? U : Z,
      }),
      r.jsx("path", {
        d: "M28 4v16",
        stroke: e ? J : fe,
        strokeWidth: 1.5,
        strokeDasharray: "2 2",
      }),
    ],
  });
}
const Ht = [
  "SELECT",
  "FROM",
  "WHERE",
  "AND",
  "OR",
  "*",
  ",",
  "=",
  ">",
  "<",
  ">=",
  "<=",
  '""',
];
function Wt({ onStart: e }) {
  return r.jsxs("div", {
    className: "game-landing bo-landing",
    style: { "--landing-glow": "rgba(232, 186, 97, 0.45)" },
    "data-game-landing": !0,
    children: [
      r.jsx(Te, { layout: "tall" }),
      r.jsx(Te, { layout: "wide" }),
      r.jsx("h2", { className: "sr-only", children: "Box Office" }),
      r.jsxs("button", {
        type: "button",
        className: "game-landing-start bo-button bo-primary",
        onClick: e,
        children: [
          r.jsx(Se, { "aria-hidden": "true", className: "h-5 w-5" }),
          "Open the box office",
        ],
      }),
    ],
  });
}
function Pt({ table: e }) {
  return r.jsx("div", {
    className: "bo-table-wrap",
    "data-source-table": e.name,
    children: r.jsxs("table", {
      className: "bo-table",
      children: [
        r.jsx("caption", { className: "bo-table-name", children: e.name }),
        r.jsx("thead", {
          children: r.jsx("tr", {
            children: e.columns.map((t) =>
              r.jsx("th", { scope: "col", children: t.name }, t.name),
            ),
          }),
        }),
        r.jsx("tbody", {
          children: e.rows.map((t, n) =>
            r.jsx(
              "tr",
              {
                children: t.map((s, a) =>
                  r.jsx(
                    "td",
                    {
                      className: typeof s == "number" ? "bo-number" : void 0,
                      children: s,
                    },
                    a,
                  ),
                ),
              },
              n,
            ),
          ),
        }),
      ],
    }),
  });
}
function Gt({ verdict: e }) {
  const t = e.result;
  return t
    ? t.rows.length === 0
      ? r.jsx("p", {
          className: "bo-empty",
          "data-result-empty": !0,
          children: "No rows came back.",
        })
      : r.jsx("div", {
          className: "bo-table-wrap",
          "data-result-table": !0,
          children: r.jsxs("table", {
            className: "bo-table bo-result",
            children: [
              r.jsx("caption", {
                className: "sr-only",
                children: "What came back",
              }),
              r.jsx("thead", {
                children: r.jsx("tr", {
                  children: t.columns.map((n, s) =>
                    r.jsx("th", { scope: "col", children: n }, s),
                  ),
                }),
              }),
              r.jsx("tbody", {
                children: t.rows.map((n, s) => {
                  const a = e.extraRows?.[s] ?? !1;
                  return r.jsx(
                    "tr",
                    {
                      "data-extra-row": a ? "true" : void 0,
                      children: n.map((o, i) =>
                        r.jsxs(
                          "td",
                          {
                            className:
                              typeof o == "number" ? "bo-number" : void 0,
                            children: [
                              i === 0 && a
                                ? r.jsxs(r.Fragment, {
                                    children: [
                                      r.jsx(_e, {
                                        "aria-hidden": "true",
                                        className: "bo-extra-mark",
                                      }),
                                      r.jsx("span", {
                                        className: "sr-only",
                                        children: "Not wanted: ",
                                      }),
                                    ],
                                  })
                                : null,
                              o === null ? "" : String(o),
                            ],
                          },
                          i,
                        ),
                      ),
                    },
                    s,
                  );
                }),
              }),
            ],
          }),
        })
    : null;
}
function we(e, t, n) {
  const s = e.selectionStart ?? e.value.length,
    a = e.selectionEnd ?? s,
    o = e.value.slice(0, s),
    i = e.value.slice(a),
    c = t === "," ? "" : " ",
    l = o && !/\s$/.test(o) ? c : "",
    u = t === '""' ? "" : " ",
    m = `${o}${l}${t}${u}${i}`;
  n(m);
  const d = o.length + l.length + (t === '""' ? 1 : t.length + u.length);
  requestAnimationFrame(() => {
    (e.focus(), e.setSelectionRange(d, d));
  });
}
function Bt({ onKey: e, disabled: t }) {
  return r.jsx("div", {
    className: "bo-keys",
    role: "group",
    "aria-label": "SQL keys",
    children: Ht.map((n) =>
      r.jsx(
        "button",
        {
          type: "button",
          className: "bo-key",
          disabled: t,
          onMouseDown: (s) => s.preventDefault(),
          onClick: () => e(n),
          "aria-label":
            n === '""'
              ? "Quotes"
              : n === ","
                ? "Comma"
                : n === "*"
                  ? "Star, all fields"
                  : n,
          children: n,
        },
        n,
      ),
    ),
  });
}
function _t({ template: e, fills: t, locked: n, onChange: s, onFocusGap: a }) {
  let o = -1;
  return r.jsx("div", {
    className: "bo-template",
    "data-editor": "complete",
    children: e
      .split(
        `
`,
      )
      .map((i, c) =>
        r.jsx(
          "div",
          {
            className: "bo-template-line",
            children: i.split("{}").map((l, u, m) => {
              u < m.length - 1 && (o += 1);
              const d = o;
              return r.jsxs(
                "span",
                {
                  className: "bo-template-part",
                  children: [
                    l
                      ? r.jsx("span", { className: "bo-code", children: l })
                      : null,
                    u < m.length - 1
                      ? r.jsx("input", {
                          className: "bo-gap",
                          "aria-label": `Gap ${d + 1}`,
                          value: t[d] ?? "",
                          disabled: n,
                          autoCapitalize: "off",
                          autoCorrect: "off",
                          autoComplete: "off",
                          spellCheck: !1,
                          size: Math.max(6, (t[d] ?? "").length + 1),
                          onFocus: (y) => a(y.currentTarget, d),
                          onChange: (y) => s(d, y.target.value),
                          "data-gap": d,
                        })
                      : null,
                  ],
                },
                u,
              );
            }),
          },
          c,
        ),
      ),
  });
}
function Qt({
  request: e,
  number: t,
  total: n,
  lives: s,
  score: a,
  run: o,
  onServed: i,
  onMiss: c,
  onNext: l,
}) {
  const [u, m] = p.useState(() => tt(e)),
    [d, y] = p.useState(() =>
      Array.from({ length: e.template ? et(e.template) : 0 }, () => ""),
    ),
    [h, b] = p.useState(null),
    [R, S] = p.useState(0),
    [L, f] = p.useState(!1),
    [E, w] = p.useState(!1),
    j = p.useRef(null),
    k = p.useRef(null),
    F = p.useRef(null),
    C = je[e.staff],
    Oe = v[W(e)],
    K = h?.right ?? !1,
    Y = !K && s === 0,
    M = K || Y,
    $e = e.format === "complete" && e.template ? qe(e.template, d) : u,
    me =
      e.format === "complete"
        ? d.every((x) => x.trim() === "")
        : u.trim() === "";
  p.useEffect(() => {
    M && F.current?.focus({ preventScroll: !0 });
  }, [M]);
  async function xe() {
    if (!(M || me || L)) {
      (f(!0), w(!1));
      try {
        const x = await o(),
          g = xt($e, e, x);
        (b(g), g.right ? i(R === 0) : (S((O) => O + 1), c()));
      } catch {
        w(!0);
      } finally {
        f(!1);
      }
    }
  }
  function Ae(x) {
    const g = j.current;
    if (e.format === "complete") {
      if (!g || g.gap === null) return;
      const V = g.gap;
      we(g.field, x, (q) =>
        y((Ie) => Ie.map((De, He) => (He === V ? q.trimStart() : De))),
      );
      return;
    }
    const O = k.current;
    O && we(O, x, m);
  }
  return r.jsxs("div", {
    className: "bo-round",
    "data-request": e.id,
    "data-format": e.format,
    "data-tier": e.tier,
    children: [
      r.jsxs("div", {
        className: "bo-status",
        children: [
          r.jsx("ol", {
            className: "bo-dots",
            "aria-label": `Request ${t} of ${n}`,
            children: Array.from({ length: n }, (x, g) =>
              r.jsx(
                "li",
                {
                  "aria-hidden": "true",
                  "data-dot": g < t - 1 ? "done" : g === t - 1 ? "now" : "next",
                },
                g,
              ),
            ),
          }),
          r.jsx("div", {
            className: "bo-tickets",
            "aria-label": `${s} of ${A} tickets left`,
            "data-lives": s,
            children: Array.from({ length: A }, (x, g) =>
              r.jsx(Ce, { used: g >= s }, g),
            ),
          }),
          r.jsxs("p", {
            className: "bo-score",
            children: [
              r.jsx("span", { className: "sr-only", children: "Score " }),
              r.jsx("span", { "data-score": !0, children: a }),
            ],
          }),
        ],
      }),
      r.jsxs("div", {
        className: "bo-grid",
        children: [
          r.jsxs("section", {
            className: "bo-request",
            "data-story-card": "request",
            "aria-labelledby": `ask-${e.id}`,
            children: [
              r.jsxs("div", {
                className: "bo-request-head",
                children: [
                  r.jsx("div", {
                    className: "bo-avatar",
                    children: r.jsx(Le, {
                      staff: e.staff,
                      mood: K ? "win" : h && !h.right ? "lose" : "ask",
                    }),
                  }),
                  r.jsxs("h3", {
                    id: `ask-${e.id}`,
                    className: "bo-ask",
                    "data-ask": !0,
                    children: [
                      r.jsx("span", {
                        className: "sr-only",
                        children: `${C.role}, ${Ve[e.tier].toLowerCase()}: `,
                      }),
                      e.ask,
                    ],
                  }),
                ],
              }),
              r.jsx(Pt, { table: Oe }),
            ],
          }),
          r.jsxs("section", {
            className: "bo-desk",
            "aria-label": "Your query",
            children: [
              e.format === "complete" && e.template
                ? r.jsx(_t, {
                    template: e.template,
                    fills: d,
                    locked: M,
                    onChange: (x, g) =>
                      y((O) => O.map((V, q) => (q === x ? g : V))),
                    onFocusGap: (x, g) => {
                      j.current = { field: x, gap: g };
                    },
                  })
                : r.jsx("textarea", {
                    ref: k,
                    className: "bo-editor",
                    "aria-label": "Your SQL query",
                    rows: 4,
                    value: u,
                    disabled: M,
                    autoCapitalize: "off",
                    autoCorrect: "off",
                    autoComplete: "off",
                    spellCheck: !1,
                    placeholder: e.format === "write" ? "SELECT …" : void 0,
                    onChange: (x) => m(x.target.value),
                    onKeyDown: (x) => {
                      x.key === "Enter" &&
                        (x.ctrlKey || x.metaKey) &&
                        (x.preventDefault(), xe());
                    },
                    "data-editor": e.format,
                  }),
              r.jsx(Bt, { onKey: Ae, disabled: M }),
              M
                ? null
                : r.jsxs("button", {
                    type: "button",
                    className: "bo-button bo-primary bo-run",
                    onClick: () => void xe(),
                    disabled: me || L,
                    children: [
                      r.jsx(Se, {
                        "aria-hidden": "true",
                        className: "h-4 w-4",
                      }),
                      L ? "Running…" : "Run query",
                    ],
                  }),
              E
                ? r.jsx("p", {
                    className: "bo-reason",
                    role: "alert",
                    "data-load-error": !0,
                    children:
                      "The database did not open. Check the connection and run it again.",
                  })
                : null,
              h
                ? r.jsxs("div", {
                    className: "bo-outcome",
                    "data-story-card": "outcome",
                    "data-outcome": h.right ? "served" : "wrong",
                    "aria-live": "polite",
                    children: [
                      r.jsxs("p", {
                        className: "bo-outcome-mark",
                        children: [
                          h.right
                            ? r.jsx(Pe, {
                                "aria-hidden": "true",
                                className: "h-7 w-7",
                              })
                            : r.jsx(Ge, {
                                "aria-hidden": "true",
                                className: "h-7 w-7",
                              }),
                          r.jsx("span", {
                            className: "sr-only",
                            children: h.right
                              ? "Served"
                              : Y
                                ? "Out of tickets"
                                : "Wrong list: one ticket gone",
                          }),
                        ],
                      }),
                      h.right
                        ? r.jsx("p", { className: "bo-win", children: e.win })
                        : r.jsx("ul", {
                            className: "bo-reasons",
                            children: h.reasons.map((x) =>
                              r.jsx(
                                "li",
                                {
                                  className: "bo-reason",
                                  "data-reason": !0,
                                  children: x,
                                },
                                x,
                              ),
                            ),
                          }),
                      r.jsx(Gt, { verdict: h }),
                      M
                        ? r.jsx("button", {
                            ref: F,
                            type: "button",
                            className: "bo-button bo-primary",
                            onClick: l,
                            children:
                              Y || t >= n
                                ? "Close the box office"
                                : "Next request",
                          })
                        : null,
                    ],
                  })
                : null,
            ],
          }),
        ],
      }),
    ],
  });
}
function Jt({ served: e, total: t, score: n, lives: s, onRestart: a }) {
  return r.jsxs(r.Fragment, {
    children: [
      r.jsxs("section", {
        className: "bo-summary",
        "data-story-card": "summary",
        "data-game-finished": e >= t ? "good" : "poor",
        "aria-live": "polite",
        children: [
          r.jsx("div", {
            className: "bo-avatar bo-avatar-big",
            children: r.jsx(Le, {
              staff: "box-office",
              mood: e >= t / 2 ? "win" : "lose",
            }),
          }),
          r.jsx("h3", {
            className: "bo-rank",
            "data-rank": !0,
            children: at(e, t),
          }),
          r.jsxs("p", {
            className: "bo-final",
            "data-served": !0,
            children: [e, " of ", t, " requests served"],
          }),
          r.jsxs("p", {
            className: "bo-final-score",
            "data-final-score": !0,
            children: [n, " points"],
          }),
          r.jsx("div", {
            className: "bo-tickets",
            "aria-label": `${s} of ${A} tickets left`,
            children: Array.from({ length: A }, (o, i) =>
              r.jsx(Ce, { used: i >= s }, i),
            ),
          }),
          r.jsxs("button", {
            type: "button",
            className: "bo-button bo-secondary",
            onClick: a,
            children: [
              r.jsx(Be, { "aria-hidden": "true", className: "h-4 w-4" }),
              "Another night",
            ],
          }),
        ],
      }),
      r.jsx(Je, { game: "box-office" }),
    ],
  });
}
function Kt({ random: e = Math.random, openDatabase: t = yt }) {
  const [n, s] = p.useState("landing"),
    [a, o] = p.useState(() => be(e)),
    [i, c] = p.useState(0),
    [l, u] = p.useState(A),
    [m, d] = p.useState(0),
    [y, h] = p.useState(0),
    [b, R] = p.useState(0),
    S = p.useRef(null),
    L = p.useRef(null);
  Qe(n === "summary" ? a.length : i, a.length, b);
  function f() {
    return (
      S.current ||
        ((S.current = t()),
        S.current.catch(() => {
          S.current = null;
        })),
      S.current
    );
  }
  function E() {
    (f().catch(() => {}), s("night"));
  }
  function w() {
    (o(be(e)), c(0), u(A), d(0), h(0), R(0), s("night"));
  }
  function j() {
    (l === 0 || i + 1 >= a.length ? s("summary") : c((F) => F + 1),
      L.current?.scrollIntoView?.({ block: "start" }));
  }
  const k = a[i];
  return r.jsxs("div", {
    ref: L,
    className: "box-office",
    "data-box-office": n,
    children: [
      n === "landing" ? r.jsx(Wt, { onStart: E }) : null,
      n === "night" && k
        ? r.jsx(
            Qt,
            {
              request: k,
              number: i + 1,
              total: a.length,
              lives: l,
              score: m,
              run: f,
              onServed: (F) => {
                (h((C) => C + 1), F && R((C) => C + 1), d((C) => C + st(F)));
              },
              onMiss: () => u((F) => Math.max(0, F - 1)),
              onNext: j,
            },
            `${k.id}-${i}`,
          )
        : null,
      n === "summary"
        ? r.jsx(Jt, {
            served: y,
            total: a.length,
            score: m,
            lives: l,
            onRestart: w,
          })
        : null,
    ],
  });
}
export { Kt as default };
