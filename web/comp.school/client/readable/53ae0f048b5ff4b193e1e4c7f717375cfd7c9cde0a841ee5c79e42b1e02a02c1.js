import { C as s, T as i, f as a, h as n, r as t } from "./cinema-CBL_zzZm.js";
const o = '=COUNTIF(B2:B11, "Comedy")',
  l = { B4: "hit", B9: "hit", B10: "hit" },
  d = ["A", "B", "C", "D", "E", "F", "G"],
  h = (e, c, r = {}) => ({
    sheets: [
      a({
        ...r,
        cols: d,
        set: { G1: "Comedies", G2: c === "" ? e : c, ...(r.set ?? {}) },
        hl: n(r.hl ?? {}, c === "" ? { G2: "look" } : { G2: "ret" }),
      }),
    ],
  }),
  u = {
    id: "countif",
    logo: "COUNTIF",
    title: "The COUNTIF Challenge",
    badge: "BTEC DIT · Component 2 · Task 2a / 2b and 2c",
    lead: "COUNTIF counts <b>only the cells that pass a test</b> you set: how many comedies, how many sell-outs, how many ratings are missing. Tap a colour to zoom in on that part, or press <b>Watch it work</b>.",
    formula: [
      { t: "=COUNTIF(" },
      { t: "B2:B11", a: 0 },
      { t: ", ", sep: !0 },
      { t: '"Comedy"', a: 1 },
      { t: ")" },
    ],
    args: [
      {
        k: "B2:B11",
        c: s.pink,
        tint: "#ffe1ee",
        lab: "Where to look",
        title: "1. The range",
        txt: 'The cells to check: the <b>Genre</b> column from <b>B2</b> to <b>B11</b>, one cell per film. The colon means "to". The header in B1 is left out, so it is never counted.',
        vis: { sheets: [a({ hl: t("B2:B11", "range") })] },
      },
      {
        k: '"Comedy"',
        c: s.orange,
        tint: "#fff0d6",
        lab: "What counts",
        title: "2. The criteria",
        txt: 'The test each cell must pass. Text goes in <b>"quote marks"</b>, and so does a comparison such as <b>">100"</b>. Capitals do not matter: "comedy" counts the same cells.',
        vis: {
          sheets: [a({ hl: n(t("B2:B11", "scan"), l) })],
          legend: [
            [i.scan, "checked"],
            [i.hit, "passes the test"],
          ],
        },
      },
    ],
    plain: [
      '"Count the cells ',
      { a: 0, t: "from B2 to B11" },
      " that ",
      { a: 1, t: "say Comedy" },
      '."',
    ],
    play: [
      {
        a: -1,
        cap: "Step 1: G2 holds the formula. Nothing is counted yet.",
        vis: h(o, ""),
      },
      {
        a: 0,
        cap: "Step 2: go to the range, B2 to B11.",
        vis: h(o, "", { hl: t("B2:B11", "range") }),
      },
      {
        a: 1,
        cap: "Step 3: check every cell against the test. B2 is Family. No.",
        vis: h(o, "", { hl: { B2: "scan" } }),
      },
      {
        a: 1,
        cap: "...B4 is Comedy. Count 1.",
        vis: h(o, "", { hl: { B2: "scan", B3: "scan", B4: "hit" } }),
      },
      {
        a: 1,
        cap: "...all the way to B11: Laugh Track, Star Chef and Road Trip pass.",
        vis: h(o, "", { hl: n(t("B2:B11", "scan"), l) }),
      },
      {
        a: -1,
        cap: "Step 4: show the count. G2 shows 3.",
        vis: {
          ...h(o, 3, { hl: l }),
          legend: [
            [i.hit, "passed the test"],
            [i.ret, "the count"],
          ],
        },
      },
    ],
    sections: [
      { id: "meet", name: "Meet COUNTIF", c: s.pink },
      { id: "family", name: "The COUNT Family", c: s.orange },
      { id: "cond", name: "Tests in Quotes", c: s.green },
      { id: "eng", name: "Plain English Translator", c: s.blue },
      { id: "typo", name: "Fix These Typos", c: s.red },
      { id: "bug", name: "Bug Hunt", c: s.purple },
    ],
    questions: [
      {
        sec: "meet",
        type: "match",
        prompt: "Match each part of the formula to what it does.",
        visual: () => ({ fx: o }),
        pairs: [
          ["COUNTIF", "Count only the cells that pass a test"],
          ["B2:B11", "Where to look (the range)"],
          ['"Comedy"', "The test each cell must pass (the criteria)"],
        ],
        explain:
          "Always in this order: <b>where to look</b>, then <b>what counts</b>.",
      },
      {
        sec: "meet",
        type: "mcq",
        prompt: `What does <code>${o}</code> show?`,
        visual: (e) => h(o, e ? 3 : "", { hl: e ? l : t("B2:B11", "range") }),
        opts: ["3", "10", "Comedy", "325"],
        ans: 0,
        explain:
          "Three cells in B2:B11 say Comedy: <b>Laugh Track, Star Chef and Road Trip</b>. COUNTIF counts cells; it never adds up their tickets (325 would be SUMIF).",
      },
      {
        sec: "family",
        type: "match",
        prompt: "Match each function to what it counts.",
        pairs: [
          ["COUNT", "Cells that contain numbers"],
          ["COUNTA", "Cells that are not empty"],
          ["COUNTBLANK", "Cells that are empty"],
          ["COUNTIF", "Cells that pass a test you set"],
        ],
        explain:
          "<b>COUNT</b> = numbers only. <b>COUNTA</b> = anything at All. <b>COUNTBLANK</b> = empty cells. <b>COUNTIF</b> = only the cells that pass your test.",
      },
      {
        sec: "family",
        type: "value",
        prompt: "What does <code>=COUNT(F2:F11)</code> show?",
        visual: (e) => ({
          sheets: [
            a({
              hl: e
                ? n(t("F2:F11", "hit", ["F6"]), { F6: "bad" })
                : t("F2:F11", "range"),
            }),
          ],
        }),
        accept: ["9"],
        traps: {
          10: "Look again at Pony Park in row 6. COUNT only counts cells with a <b>number</b> in, and F6 is empty.",
        },
        hint: "Is every rating filled in?",
        explain:
          "Nine cells hold a number. <code>=COUNTBLANK(F2:F11)</code> gives <b>1</b>, so missing data shows up straight away.",
      },
      {
        sec: "family",
        type: "mcq",
        prompt: "What does <code>=COUNT(A2:A11)</code> show?",
        visual: (e) => ({
          sheets: [
            a({ cols: ["A", "B"], hl: t("A2:A11", e ? "bad" : "range") }),
          ],
        }),
        opts: ["0", "10", "#VALUE!", "1005"],
        ans: 0,
        explain:
          "The film names are <b>text</b>, and COUNT only counts numbers, so it shows <b>0</b>. <code>=COUNTA(A2:A11)</code> counts text too: <b>10</b>.",
      },
      {
        sec: "family",
        type: "value",
        prompt:
          "What does <code>=COUNTA(A1:A11)</code> show? Look carefully at where the range starts.",
        visual: (e) => ({
          sheets: [
            a({
              cols: ["A", "B"],
              hl: e
                ? n(t("A2:A11", "hit"), { A1: "bad" })
                : t("A1:A11", "range"),
            }),
          ],
        }),
        accept: ["11"],
        traps: {
          10: "There are 10 films, but this range starts at <b>A1</b>, the header. COUNTA counts the word Film as well.",
        },
        hint: "Is the header row inside the range?",
        explain:
          "A1 holds the header, <b>Film</b>, and COUNTA counts anything that is not empty: <b>11</b>. Start a range on the first row of real data, <code>A2:A11</code>.",
      },
      {
        sec: "cond",
        type: "mcq",
        prompt:
          "Which formula counts the films that sold <b>more than 100</b> tickets?",
        visual: (e) =>
          e
            ? {
                sheets: [
                  a({
                    hl: n(t("D2:D11", "scan"), {
                      D2: "hit",
                      D4: "hit",
                      D7: "hit",
                      D10: "hit",
                      D11: "hit",
                    }),
                  }),
                ],
              }
            : null,
        opts: [
          '=COUNTIF(D2:D11, ">100")',
          "=COUNTIF(D2:D11, >100)",
          "=COUNT(D2:D11>100)",
          '=COUNTIF(">100", D2:D11)',
        ],
        ans: 0,
        mono: !0,
        explain:
          'The range comes first and the test goes in <b>"quotes"</b>. Five films pass: 120, 140, 150, 110 and 130. Without quotes Excel says there is a problem with the formula.',
      },
      {
        sec: "cond",
        type: "value",
        prompt: 'What does <code>=COUNTIF(C2:C11, "Sat")</code> show?',
        visual: (e) => ({
          sheets: [
            a({
              hl: e
                ? n(t("C2:C11", "scan"), {
                    C2: "hit",
                    C4: "hit",
                    C8: "hit",
                    C11: "hit",
                  })
                : t("C2:C11", "range"),
            }),
          ],
        }),
        accept: ["4"],
        hint: "Run your finger down column C and count each Sat.",
        explain:
          "Robot Rescue, Laugh Track, Quiet Hill and Sky Kids are on Saturday: <b>4</b>.",
      },
      {
        sec: "cond",
        type: "value",
        prompt: 'What does <code>=COUNTIF(F2:F11, ">=4")</code> show?',
        visual: (e) => ({
          sheets: [
            a({
              hl: e
                ? n(t("F2:F11", "scan"), {
                    F2: "hit",
                    F4: "hit",
                    F5: "hit",
                    F7: "hit",
                    F10: "hit",
                    F11: "hit",
                  })
                : t("F2:F11", "range"),
            }),
          ],
        }),
        accept: ["6"],
        traps: {
          2: '2 would be <code>">4"</code>, more than 4. <b>>=</b> means 4 <b>or more</b>, so every 4 counts too.',
        },
        hint: '>= means "at least". Count the 4s and the 5s.',
        explain:
          "Four films rated 4 and two rated 5: <b>6</b>. The empty F6 never passes a number test.",
      },
      {
        sec: "cond",
        type: "mcq",
        prompt: 'What does <code>=COUNTIF(C2:C11, "&lt;&gt;Sat")</code> count?',
        visual: (e) =>
          e
            ? {
                sheets: [
                  a({
                    hl: n(t("C2:C11", "hit"), {
                      C2: "scan",
                      C4: "scan",
                      C8: "scan",
                      C11: "scan",
                    }),
                  }),
                ],
              }
            : null,
        opts: [
          "The films that are not on a Saturday",
          "The films that are on a Saturday",
          "The films on a day before or after Saturday",
          "Nothing, because <> is not allowed in a test",
        ],
        ans: 0,
        explain:
          "<code>&lt;&gt;</code> means <b>not equal to</b>. Ten films minus the four on Saturday: <b>6</b>.",
      },
      {
        sec: "cond",
        type: "mcq",
        prompt:
          'Someone types <code>=COUNTIF(B2:B11, "comedy")</code> in small letters. What does it show?',
        opts: [
          "3, because COUNTIF ignores capitals",
          "0, because Comedy has a capital C",
          "#NAME?, because comedy is not a function",
          "1, because it only finds the first match",
        ],
        ans: 0,
        explain:
          "COUNTIF is <b>not case sensitive</b>: comedy, Comedy and COMEDY all count the same three cells. Spaces do matter, though.",
      },
      {
        sec: "eng",
        type: "mcq",
        prompt: "Translate this formula into plain English:",
        visual: () => ({ fx: '=COUNTIF(D2:D11, "<50")' }),
        opts: [
          "Count the cells from D2 to D11 that hold a number less than 50.",
          "Count the cells from D2 to D11, then take 50 away from the count.",
          "Count the 50 cells that come after D2, down to D11.",
          "Count the cells from D2 to D11 that hold a number of 50 or more.",
        ],
        ans: 0,
        explain:
          "<code>&lt;50</code> means <b>less than 50</b>. Only Quiet Hill (40) passes, so it shows <b>1</b>.",
      },
      {
        sec: "eng",
        type: "build",
        prompt:
          "Build the formula from the English. Tap a chip to drop it in the next empty box. Tap a box to empty it.",
        english: '"Count the cells from B2 to B11 that say Family."',
        fn: "COUNTIF",
        answer: ["B2:B11", '"Family"'],
        chips: [
          "B2:B11",
          '"Family"',
          "Family",
          "D2:D11",
          "B1:B11",
          '">Family"',
        ],
        explain:
          '<code>=COUNTIF(B2:B11, "Family")</code> shows <b>3</b>: Robot Rescue, Pony Park and Sky Kids. Text needs its quotes, and the range starts below the header.',
      },
      {
        sec: "eng",
        type: "order",
        prompt:
          "Put the steps COUNTIF takes in the right order. Tap them 1 to 4.",
        visual: () => ({ fx: o }),
        items: [
          "Go to the range B2:B11",
          "Check the first cell against the test",
          "Keep checking, adding 1 for every cell that passes",
          "Show the count",
        ],
        explain:
          "Go, check, keep a tally, show it. COUNTIF looks at <b>every</b> cell in the range, not just until the first match.",
      },
      {
        sec: "typo",
        type: "typo",
        prompt: "This shows #NAME?. Fix it.",
        broken: "=COUNTIF(B2:B11, Comedy)",
        fixed: '=COUNTIF(B2:B11,"Comedy")',
        shown: '=COUNTIF(B2:B11, "Comedy")',
        hint: "Text in a formula needs something around it.",
        explain:
          'Without <b>"quote marks"</b> Excel looks for something called Comedy and shows <b>#NAME?</b>.',
      },
      {
        sec: "typo",
        type: "typo",
        prompt: "Excel says there is a problem with this formula. Fix it.",
        broken: "=COUNTIF(D2:D11, >100)",
        fixed: '=COUNTIF(D2:D11,">100")',
        shown: '=COUNTIF(D2:D11, ">100")',
        hint: "A comparison is part of the test, and the test goes in quotes.",
        explain:
          'A comparison such as <b>&gt;100</b> must be inside the quotes: <code>"&gt;100"</code>.',
      },
      {
        sec: "typo",
        type: "typo",
        prompt: "The range is broken. Fix it.",
        broken: '=COUNTIF(B2;B11, "Comedy")',
        fixed: '=COUNTIF(B2:B11,"Comedy")',
        shown: o,
        hint: "A range from one cell to another uses a colon, not a semicolon.",
        explain:
          'Ranges use a <b>colon</b>: <code>B2:B11</code> means "B2 to B11".',
      },
      {
        sec: "typo",
        type: "typo",
        prompt: "Another #NAME?. Fix it.",
        broken: '=COUNTIFF(B2:B11, "Comedy")',
        fixed: '=COUNTIF(B2:B11,"Comedy")',
        shown: o,
        hint: "Check the spelling of the function name.",
        explain:
          "<b>COUNTIFF</b> should be <b>COUNTIF</b>: COUNT, then IF. A misspelt function gives <b>#NAME?</b>",
      },
      {
        sec: "bug",
        type: "mcq",
        prompt:
          'Your dashboard shows <code>=COUNT(B2:B11, "Comedy")</code> as <b>0</b>. Why?',
        opts: [
          "COUNT cannot take a test: it only counts numbers, and genres are text",
          "The quote marks around Comedy should be removed",
          "The range should start at B1 so it includes the header",
          "Comedy needs a capital C in every cell for COUNT to see it",
        ],
        ans: 0,
        explain:
          'COUNT counts cells holding numbers, and treats "Comedy" as one more value, not a test. For "only count if..." you need <b>COUNTIF</b>.',
      },
      {
        sec: "bug",
        type: "mcq",
        prompt:
          '<code>=COUNTIF(D2:D11, "&gt;100")</code> shows 0, but you can see films with over 100 tickets. The numbers sit on the <b>left</b> of their cells. What is wrong?',
        visual: () => ({
          sheets: [
            a({
              cols: ["A", "D"],
              to: 5,
              set: { D2: "120", D3: "85", D4: "140", D5: "60" },
              hl: t("D2:D5", "bad"),
            }),
          ],
        }),
        opts: [
          "The tickets are stored as text, so a number test never passes",
          "The test should be written without quotes as >100",
          "COUNTIF cannot test a whole column of numbers at once",
          "The range needs $ signs before COUNTIF will work",
        ],
        ans: 0,
        explain:
          "Numbers stored as <b>text</b> sit on the left and fail every number test. Turn them back into numbers (Data, Text to Columns, or Convert to Number) and the count is 5.",
      },
      {
        sec: "bug",
        type: "mcq",
        prompt:
          "Which formula shows how many films are still <b>missing a rating</b>?",
        visual: (e) =>
          e
            ? { sheets: [a({ hl: n(t("F2:F11", "scan"), { F6: "hit" }) })] }
            : null,
        opts: [
          "=COUNTBLANK(F2:F11)",
          "=COUNT(F2:F11)",
          "=COUNTA(F2:F11)",
          '=COUNTIF(F2:F11, "0")',
        ],
        ans: 0,
        mono: !0,
        explain:
          '<b>COUNTBLANK</b> counts the empty cells: <b>1</b> (Pony Park). A rating of 0 is not the same as no rating, so testing for "0" finds nothing.',
      },
    ],
    teach: {
      meet: {
        title: "Check every cell, keep a tally",
        blocks: [
          {
            p: "Picture COUNTIF as your finger going down the range, cell by cell. Every cell that passes the test adds <b>1</b> to the tally.",
          },
          {
            visual: {
              sheets: [a({ hl: n(t("B2:B11", "scan"), l) })],
              legend: [
                [i.scan, "checked"],
                [i.hit, "passed: counted"],
              ],
            },
          },
          {
            tip: "COUNTIF gives a <b>count</b>, never a total. To add up the tickets of the comedies you need SUMIF.",
          },
        ],
      },
      family: {
        title: "Four ways to count",
        blocks: [
          {
            p: 'Counting is how a dashboard shows things like "how many films sold out" or "how many ratings are missing".',
          },
          {
            table: {
              head: ["Function", "Counts", "On F2:F11 (ratings)"],
              rows: [
                ["COUNT", "cells with <b>numbers</b>", "9"],
                ["COUNTA", "cells that are <b>not empty</b> (A = All)", "9"],
                ["COUNTBLANK", "cells that are <b>empty</b>", "1 (Pony Park)"],
                [
                  "COUNTIF",
                  "cells that pass <b>your test</b>",
                  '<code>=COUNTIF(F2:F11,"&gt;=4")</code> = 6',
                ],
              ],
            },
          },
          {
            tip: "Leave the header row out of the range. COUNTA would count the word Rating as well.",
          },
        ],
      },
      cond: {
        title: "The test goes in quotes",
        blocks: [
          {
            c: s.green,
            frame: [
              "=COUNTIF( ",
              { text: "where to look", c: s.pink },
              " , ",
              { text: '"what counts"', c: s.orange },
              " )",
            ],
          },
          {
            table: {
              head: ["Test", "Counts cells that are...", "Example"],
              rows: [
                [
                  '"Comedy"',
                  "exactly Comedy (capitals do not matter)",
                  '<code>=COUNTIF(B2:B11,"Comedy")</code> = 3',
                ],
                [
                  '"&gt;100"',
                  "more than 100",
                  '<code>=COUNTIF(D2:D11,"&gt;100")</code> = 5',
                ],
                [
                  '"&lt;50"',
                  "less than 50",
                  '<code>=COUNTIF(D2:D11,"&lt;50")</code> = 1',
                ],
                [
                  '"&gt;=4"',
                  "4 or more",
                  '<code>=COUNTIF(F2:F11,"&gt;=4")</code> = 6',
                ],
                [
                  '"&lt;&gt;Sat"',
                  "anything except Sat",
                  '<code>=COUNTIF(C2:C11,"&lt;&gt;Sat")</code> = 6',
                ],
              ],
            },
          },
          {
            tip: "A test on its own number can skip the quotes: <code>=COUNTIF(D2:D11,100)</code> counts cells equal to 100. Add a sign and the quotes are needed.",
          },
        ],
      },
      eng: {
        title: "The sentence frame",
        blocks: [
          {
            p: "Every COUNTIF can be read aloud with the same sentence. Learn the frame and you can translate any formula, in either direction.",
          },
          {
            c: s.blue,
            frame: [
              "Count the cells from ",
              { text: "first cell", c: s.pink },
              " to ",
              { text: "last cell", c: s.pink },
              " that ",
              { text: "pass the test", c: s.orange },
              ".",
            ],
          },
          { visual: { fx: '=COUNTIF(C2:C11, "Fri")' } },
          {
            p: '"Count the cells from <b>C2</b> to <b>C11</b> that <b>say Fri</b>." It shows <b>3</b>.',
          },
        ],
      },
      typo: {
        title: "The syntax checklist",
        blocks: [
          { p: "When a COUNTIF breaks, check these in order." },
          {
            table: {
              rows: [
                [
                  "COUNTIF",
                  "Spelt right? A misspelt function shows <b>#NAME?</b>",
                ],
                [",", "One <b>comma</b> between the range and the test."],
                ["B2:B11", "A <b>colon</b> between the first and last cell."],
                ['"Comedy"', "Text and comparisons inside <b>quotes</b>."],
                ['"Comedy"', "No stray <b>spaces</b> inside the quotes."],
                ["( )", "Every opening bracket has a closing one."],
              ],
            },
          },
        ],
      },
      bug: {
        title: "When the count looks wrong",
        blocks: [
          {
            p: "A wrong count rarely shows an error. These are the usual causes.",
          },
          {
            table: {
              head: ["You see", "Most likely cause", "Fix"],
              rows: [
                [
                  "0",
                  "COUNT used where COUNTIF was needed, or a space in the test.",
                  "Use COUNTIF; check the quotes.",
                ],
                [
                  "0 on numbers",
                  "The numbers are stored as text.",
                  "Convert them to numbers.",
                ],
                [
                  "One too many",
                  "The header row is inside the range.",
                  "Start the range on row 2.",
                ],
                [
                  "#NAME?",
                  "Text without quotes, or a misspelt function.",
                  "Add the quotes; check spelling.",
                ],
              ],
            },
          },
        ],
      },
    },
    cheat: {
      title: "COUNTIF checklist for Task 2 (open me)",
      rows: [
        ["1", "Range first, then the test."],
        ["2", 'Text and comparisons go in quotes: "Comedy", "&gt;100".'],
        ["3", "Leave the header row out of the range."],
        [
          "4",
          "COUNT numbers, COUNTA anything, COUNTBLANK empties, COUNTIF with a test.",
        ],
        ["5", "&lt;&gt; means not equal; &gt;= means at least."],
        ["6", "A count of 0? Check for spaces and numbers stored as text."],
        [
          "7",
          "Read it back with the sentence frame to check it says what you mean.",
        ],
      ],
    },
    ratings: [
      "COUNTIF Legend",
      "Counting Pro",
      "Getting There",
      "Keep Practising",
    ],
    footer: o,
    motif: ["Comedy", "3"],
  };
export { u as COUNTIF_GAME };
