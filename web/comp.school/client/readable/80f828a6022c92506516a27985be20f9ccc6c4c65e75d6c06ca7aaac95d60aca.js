import { C as t, f as l, T as i, h as a, r } from "./cinema-CBL_zzZm.js";
const o = '=SUMIF(B2:B11, "Family", D2:D11)',
  n = a(r("B2:B11", "scan"), { B2: "hit", B6: "hit", B11: "hit" }),
  h = { D2: "ret", D6: "ret", D11: "ret" },
  s = (e, c = {}, m = {}) => ({
    sheets: [
      l({
        cols: ["A", "B", "C", "D", "H"],
        set: { H1: "Family tickets", H2: e },
        hl: c,
      }),
    ],
    ...m,
  }),
  d = (e, c = {}) => ({
    sheets: [
      {
        tab: "Screenings",
        cols: ["H", "I"],
        start: 1,
        hdRow: 1,
        data: [
          ["Genre", "Tickets"],
          ["Family", e[0]],
          ["Comedy", e[1]],
          ["Horror", e[2]],
        ],
        hl: c,
      },
    ],
  }),
  b = {
    id: "sumif",
    logo: "SUMIF",
    title: "The SUMIF Challenge",
    badge: "BTEC DIT · Component 2 · Task 2a / 2b and 2c",
    lead: "SUMIF <b>adds up only the rows that pass a test</b>: the tickets for Family films, the takings on Fridays. It is how a dashboard builds a summary. Tap a colour to zoom in on that part, or press <b>Watch it work</b>.",
    formula: [
      { t: "=SUMIF(" },
      { t: "B2:B11", a: 0 },
      { t: ", ", sep: !0 },
      { t: '"Family"', a: 1 },
      { t: ", ", sep: !0 },
      { t: "D2:D11", a: 2 },
      { t: ")" },
    ],
    args: [
      {
        k: "B2:B11",
        c: t.pink,
        tint: "#ffe1ee",
        lab: "Where to look",
        title: "1. The range to check",
        txt: "The cells the test is run on: the <b>Genre</b> column, B2 to B11.",
        vis: s("?", r("B2:B11", "range")),
      },
      {
        k: '"Family"',
        c: t.orange,
        tint: "#fff0d6",
        lab: "What to find",
        title: "2. The criteria",
        txt: 'The test, in <b>"quotes"</b> as in COUNTIF. Three rows say Family: <b>2</b>, <b>6</b> and <b>11</b>.',
        vis: s("?", n),
      },
      {
        k: "D2:D11",
        c: t.green,
        tint: "#d6f7f3",
        lab: "What to add up",
        title: "3. The sum range",
        txt: "The numbers to add for every row that passed: the <b>Tickets</b> column. It must be the same size as the range to check, D2 to D11 beside B2 to B11.",
        vis: s("?", a(n, h), {
          legend: [
            [i.hit, "passed the test"],
            [i.ret, "added up"],
          ],
        }),
      },
    ],
    plain: [
      '"Add up ',
      { a: 2, t: "the tickets in D2 to D11" },
      " on every row where ",
      { a: 0, t: "B2 to B11" },
      " ",
      { a: 1, t: "says Family" },
      '."',
    ],
    play: [
      {
        a: -1,
        cap: "Step 1: H2 holds the formula.",
        vis: s(o, { H2: "look" }),
      },
      {
        a: 0,
        cap: "Step 2: go to the range to check, B2 to B11.",
        vis: s(o, a(r("B2:B11", "range"), { H2: "look" })),
      },
      {
        a: 1,
        cap: "Step 3: test every cell. Rows 2, 6 and 11 say Family.",
        vis: s(o, a(n, { H2: "look" })),
      },
      {
        a: 2,
        cap: "Step 4: move across each of those rows to the tickets: 120, 95 and 130.",
        vis: s(o, a(n, h, { H2: "look" })),
      },
      {
        a: -1,
        cap: "Step 5: add them up. H2 shows 345.",
        vis: s(345, a({ B2: "hit", B6: "hit", B11: "hit" }, h, { H2: "ret" }), {
          legend: [
            [i.hit, "passed the test"],
            [i.ret, "added up, and the total"],
          ],
        }),
      },
    ],
    sections: [
      { id: "meet", name: "Meet SUMIF", c: t.pink },
      { id: "read", name: "Read the Sheet", c: t.orange },
      { id: "which", name: "SUMIF or COUNTIF", c: t.green },
      { id: "eng", name: "Plain English Translator", c: t.blue },
      { id: "typo", name: "Fix These Typos", c: t.red },
      { id: "dollar", name: "Summary Tables", c: t.purple },
    ],
    questions: [
      {
        sec: "meet",
        type: "match",
        prompt: "Match each part of the formula to what it does.",
        visual: () => ({ fx: o }),
        pairs: [
          ["B2:B11", "Where to look (the range to check)"],
          ['"Family"', "What to find (the criteria)"],
          ["D2:D11", "What to add up (the sum range)"],
        ],
        explain:
          "Always in this order: <b>where to look</b>, <b>what to find</b>, <b>what to add</b>.",
      },
      {
        sec: "meet",
        type: "value",
        prompt: `H2 contains <code>${o}</code>. What does it show?`,
        visual: (e) =>
          s(
            e ? 345 : o,
            e
              ? a({ B2: "hit", B6: "hit", B11: "hit" }, h, { H2: "ret" })
              : { H2: "look" },
          ),
        accept: ["345"],
        traps: {
          3: "3 is how many Family films there are: that is <b>COUNTIF</b>. SUMIF adds up their tickets.",
        },
        hint: "Find the Family rows, then add their tickets.",
        explain: "Robot Rescue 120 + Pony Park 95 + Sky Kids 130 = <b>345</b>.",
      },
      {
        sec: "read",
        type: "value",
        prompt: 'What does <code>=SUMIF(B2:B11, "Comedy", D2:D11)</code> show?',
        visual: (e) => ({
          sheets: [
            l({
              cols: ["A", "B", "C", "D"],
              hl: e
                ? a(
                    { B4: "hit", B9: "hit", B10: "hit" },
                    { D4: "ret", D9: "ret", D10: "ret" },
                  )
                : r("B2:B11", "range"),
            }),
          ],
        }),
        accept: ["325"],
        traps: {
          3: "3 is how many comedies there are. SUMIF adds up their tickets.",
        },
        hint: "Laugh Track, Star Chef and Road Trip.",
        explain: "140 + 75 + 110 = <b>325</b>.",
      },
      {
        sec: "read",
        type: "value",
        prompt: 'What does <code>=SUMIF(C2:C11, "Fri", D2:D11)</code> show?',
        visual: (e) => ({
          sheets: [
            l({
              cols: ["A", "B", "C", "D"],
              hl: e
                ? a(
                    { C3: "hit", C7: "hit", C10: "hit" },
                    { D3: "ret", D7: "ret", D10: "ret" },
                  )
                : r("C2:C11", "range"),
            }),
          ],
        }),
        accept: ["345"],
        hint: "This time the test is on the Day column.",
        explain:
          "Night Tide 85 + The Vault 150 + Road Trip 110 = <b>345</b>. Any column can be the range to check.",
      },
      {
        sec: "read",
        type: "value",
        prompt:
          'What does <code>=SUMIF(F2:F11, ">=4", D2:D11)</code> show? It adds the tickets of every film rated 4 or more.',
        visual: (e) => ({
          sheets: [
            l({
              cols: ["A", "D", "F"],
              hl: e
                ? a(
                    {
                      F2: "hit",
                      F4: "hit",
                      F5: "hit",
                      F7: "hit",
                      F10: "hit",
                      F11: "hit",
                    },
                    {
                      D2: "ret",
                      D4: "ret",
                      D5: "ret",
                      D7: "ret",
                      D10: "ret",
                      D11: "ret",
                    },
                  )
                : r("F2:F11", "range"),
            }),
          ],
        }),
        accept: ["710"],
        hint: "Six films are rated 4 or 5. Add their tickets.",
        explain:
          "120 + 140 + 60 + 150 + 110 + 130 = <b>710</b>. A comparison goes in quotes, as in COUNTIF.",
      },
      {
        sec: "which",
        type: "match",
        prompt: "Match each dashboard question to the formula that answers it.",
        pairs: [
          ['=COUNTIF(B2:B11,"Family")', "How many Family films are there?"],
          [
            '=SUMIF(B2:B11,"Family",D2:D11)',
            "How many tickets did Family films sell?",
          ],
          ["=SUM(D2:D11)", "How many tickets were sold in total?"],
          ['=COUNTIF(D2:D11,">100")', "How many films sold over 100 tickets?"],
        ],
        explain:
          "<b>COUNTIF</b> counts rows; <b>SUMIF</b> adds up a column for those rows; <b>SUM</b> adds up everything.",
      },
      {
        sec: "which",
        type: "mcq",
        prompt:
          "The dashboard needs the <b>average</b> tickets for Family films. Which pair of formulas gives it?",
        opts: [
          "SUMIF for the Family tickets, divided by COUNTIF for the Family films",
          "SUM of all the tickets, divided by COUNTIF for the Family films",
          "SUMIF for the Family tickets, divided by 10 films",
          "COUNTIF for the Family films, divided by SUMIF for the Family tickets",
        ],
        ans: 0,
        explain:
          '345 ÷ 3 = <b>115</b>. Excel also has <code>=AVERAGEIF(B2:B11,"Family",D2:D11)</code>, which does both at once.',
      },
      {
        sec: "eng",
        type: "mcq",
        prompt: "Translate this formula into plain English:",
        visual: () => ({ fx: '=SUMIF(C2:C11, "Sat", D2:D11)' }),
        opts: [
          "Add up the tickets in D2 to D11 on every row where C2 to C11 says Sat.",
          "Count the cells in C2 to C11 that say Sat, then add D2 to D11.",
          "Add up C2 to C11 and D2 to D11 for the Saturday films.",
          "Add up the tickets in D2 to D11, but only if C2 says Sat.",
        ],
        ans: 0,
        explain:
          "The test is run on the <b>Day</b> column; the <b>Tickets</b> are added: 120 + 140 + 40 + 130 = <b>430</b>.",
      },
      {
        sec: "eng",
        type: "build",
        prompt:
          "Build the formula from the English. Tap a chip to drop it in the next empty box. Tap a box to empty it.",
        english:
          '"Add up the tickets in D2 to D11 on every row where B2 to B11 says Horror."',
        fn: "SUMIF",
        answer: ["B2:B11", '"Horror"', "D2:D11"],
        chips: ["B2:B11", '"Horror"', "D2:D11", "Horror", "E2:E11", "B1:B11"],
        explain:
          '<code>=SUMIF(B2:B11, "Horror", D2:D11)</code> shows <b>125</b>: Night Tide 85 + Quiet Hill 40.',
      },
      {
        sec: "eng",
        type: "order",
        prompt:
          "Put the steps SUMIF takes in the right order. Tap them 1 to 4.",
        visual: () => ({ fx: o }),
        items: [
          "Go to the range to check, B2:B11",
          'Test every cell against "Family"',
          "For each row that passed, move across to D",
          "Add those tickets up",
        ],
        explain:
          "Check down, then across, then add. Like VLOOKUP, but it keeps every match, not just the first.",
      },
      {
        sec: "typo",
        type: "typo",
        prompt: "This shows #NAME?. Fix it.",
        broken: "=SUMIF(B2:B11, Family, D2:D11)",
        fixed: '=SUMIF(B2:B11,"Family",D2:D11)',
        shown: o,
        hint: "Text in a formula needs something around it.",
        explain: 'The criteria needs <b>"quote marks"</b>.',
      },
      {
        sec: "typo",
        type: "typo",
        prompt:
          "This runs, but shows 0. The two ranges are the wrong way round. Fix it.",
        broken: '=SUMIF(D2:D11, "Family", B2:B11)',
        fixed: '=SUMIF(B2:B11,"Family",D2:D11)',
        shown: o,
        hint: "Which column holds the word Family? That one is checked first.",
        explain:
          "The range to check comes <b>first</b> and the numbers to add come <b>last</b>. No ticket cell says Family, so it added nothing.",
      },
      {
        sec: "typo",
        type: "typo",
        prompt: "This shows only part of the total. Fix it.",
        broken: '=SUMIF(B2:B11, "Family", D2:D6)',
        fixed: '=SUMIF(B2:B11,"Family",D2:D11)',
        shown: o,
        hint: "Is the sum range the same size as the range to check?",
        explain:
          "Both ranges should cover the <b>same rows</b>, 2 to 11. Keep them the same size so every row lines up.",
      },
      {
        sec: "dollar",
        type: "mcq",
        prompt:
          "Your summary table has the genres in H2 to H4. Which formula in <b>I2</b> can be filled down for every genre?",
        visual: (e) =>
          d(
            e ? [345, 325, 125] : ["?", "", ""],
            e
              ? { I2: "ret", I3: "ret", I4: "ret" }
              : { H2: "look", I2: "look" },
          ),
        opts: [
          "=SUMIF($B$2:$B$11, H2, $D$2:$D$11)",
          '=SUMIF(B2:B11, "Family", D2:D11)',
          "=SUMIF(B2:B11, H2, D2:D11)",
          "=SUMIF($B$2:$B$11, $H$2, $D$2:$D$11)",
        ],
        ans: 0,
        mono: !0,
        explain:
          "The test can be a <b>cell</b>: H2, then H3, then H4 as it fills down. The two ranges are locked with <b>$</b> so every row checks the whole table: 345, 325, 125.",
      },
      {
        sec: "dollar",
        type: "mcq",
        prompt:
          "Someone filled down <code>=SUMIF(B2:B11, H2, D2:D11)</code> with no $ signs. What is wrong in I4?",
        visual: (e) =>
          d(
            [
              "=SUMIF(B2:B11, H2, D2:D11)",
              "=SUMIF(B3:B12, H3, D3:D12)",
              "=SUMIF(B4:B13, H4, D4:D13)",
            ],
            e ? { I4: "bad" } : { I2: "look", I4: "range" },
          ),
        opts: [
          "The ranges slid down to B4:B13 and D4:D13, so Night Tide (row 3) is left out",
          "H4 should still say H2, because the test must never move",
          "Nothing is wrong: SUMIF always checks the whole column",
          "The sum range moved to column E, so it adds the prices",
        ],
        ans: 0,
        explain:
          "Without $, both ranges move down a row each time. I4 misses row 3, so Horror shows <b>40</b> instead of 125. Lock the ranges; let H2 move.",
      },
    ],
    teach: {
      meet: {
        title: "Check down, then add across",
        blocks: [
          {
            p: "SUMIF runs a test down one column, then adds up the numbers in another column on every row that passed.",
          },
          {
            visual: s(
              345,
              a({ B2: "hit", B6: "hit", B11: "hit" }, h, { H2: "ret" }),
              {
                legend: [
                  [i.hit, "checked: Family"],
                  [i.ret, "added up"],
                ],
              },
            ),
          },
          {
            c: t.orange,
            frame: [
              "=SUMIF( ",
              { text: "where to look", c: t.pink },
              " , ",
              { text: '"what to find"', c: t.orange },
              " , ",
              { text: "what to add up", c: t.green },
              " )",
            ],
          },
        ],
      },
      read: {
        title: "Any column can be the test",
        blocks: [
          {
            p: "The range to check can be the genre, the day or the rating. The sum range is whatever you want totalled.",
          },
          {
            table: {
              head: ["Formula", "Adds up"],
              rows: [
                ['=SUMIF(B2:B11,"Comedy",D2:D11)', "tickets for comedies: 325"],
                ['=SUMIF(C2:C11,"Fri",D2:D11)', "tickets on Friday: 345"],
                [
                  '=SUMIF(F2:F11,"&gt;=4",D2:D11)',
                  "tickets for films rated 4 or more: 710",
                ],
              ],
            },
          },
          {
            tip: 'The test works as in COUNTIF: text and comparisons in <b>"quotes"</b>.',
          },
        ],
      },
      which: {
        title: "Count it or add it?",
        blocks: [
          {
            table: {
              head: ["Ask", "Use", "Family films"],
              rows: [
                ["How many?", "COUNTIF", "3"],
                ["How much in total?", "SUMIF", "345 tickets"],
                ["The average?", "AVERAGEIF", "115 tickets"],
              ],
            },
          },
        ],
      },
      eng: {
        title: "The sentence frame",
        blocks: [
          {
            c: t.blue,
            frame: [
              "Add up ",
              { text: "the sum range", c: t.green },
              " on every row where ",
              { text: "the range to check", c: t.pink },
              " ",
              { text: "passes the test", c: t.orange },
              ".",
            ],
          },
          { visual: { fx: '=SUMIF(C2:C11, "Sun", D2:D11)' } },
          {
            p: '"Add up <b>the tickets in D2 to D11</b> on every row where <b>C2 to C11</b> <b>says Sun</b>." It shows <b>230</b>.',
          },
        ],
      },
      typo: {
        title: "The syntax checklist",
        blocks: [
          {
            table: {
              rows: [
                [
                  "SUMIF",
                  "Spelt right? A misspelt function shows <b>#NAME?</b>",
                ],
                [", ,", "Exactly <b>2 commas</b> separating 3 parts."],
                ['"Family"', "Text and comparisons in quotes."],
                [
                  "B, then D",
                  "The range to check first; the numbers to add last.",
                ],
                ["2 to 11", "Both ranges cover the same rows."],
              ],
            },
          },
        ],
      },
      dollar: {
        title: "One formula for the whole summary table",
        blocks: [
          {
            p: "Point the test at a cell holding the genre, lock both ranges, and one formula fills down the whole table.",
          },
          {
            visual: d(
              [
                "=SUMIF($B$2:$B$11, H2, $D$2:$D$11)",
                "=SUMIF($B$2:$B$11, H3, $D$2:$D$11)",
                "=SUMIF($B$2:$B$11, H4, $D$2:$D$11)",
              ],
              { H2: "look", H3: "look", H4: "look" },
            ),
          },
          {
            table: {
              rows: [
                [
                  "H2",
                  "<b>Should move</b> (H2, H3, H4) so each row totals its own genre.",
                ],
                ["$B$2:$B$11", "<b>Must stay still</b>, locked with $."],
                ["$D$2:$D$11", "<b>Must stay still</b>, locked with $."],
              ],
            },
          },
          {
            tip: "Press <b>F4</b> with the cursor in a range to add its $ signs.",
          },
        ],
      },
    },
    cheat: {
      title: "SUMIF checklist for Task 2 (open me)",
      rows: [
        ["1", "Where to look, what to find, what to add up."],
        ["2", "Text and comparisons go in quotes, or point at a cell."],
        ["3", "Both ranges cover the same rows."],
        ["4", "COUNTIF counts the rows; SUMIF adds a column for them."],
        [
          "5",
          "For a summary table, lock both ranges with $ and let the test cell move.",
        ],
        [
          "6",
          "Read it back with the sentence frame to check it says what you mean.",
        ],
      ],
    },
    ratings: [
      "SUMIF Legend",
      "Summary Pro",
      "Getting There",
      "Keep Practising",
    ],
    footer: o,
    motif: ["Family", "345"],
  };
export { b as SUMIF_GAME };
