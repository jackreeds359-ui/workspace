import { f as l, C as o, h as i, r as p, T as c } from "./cinema-CBL_zzZm.js";
const s = '=IF(D2>=100, "Hit", "Flop")',
  r = {
    2: "Hit",
    3: "Flop",
    4: "Hit",
    5: "Flop",
    6: "Flop",
    7: "Hit",
    8: "Flop",
    9: "Flop",
    10: "Hit",
    11: "Hit",
  },
  t = (e, a = {}, n = 3, b = {}) => ({
    sheets: [
      l({
        cols: ["A", "D", "F", "G"],
        to: n,
        set: { G1: "Result", ...e },
        hl: a,
      }),
    ],
    ...b,
  }),
  h = () => Object.fromEntries(Object.entries(r).map(([e, a]) => [`G${e}`, a])),
  m = {
    id: "if",
    logo: "IF",
    title: "The IF Challenge",
    badge: "BTEC DIT · Component 2 · Task 2a / 2b",
    lead: "IF lets a cell <b>make a decision</b>: check a test, then show one answer if it is true and another if it is not. Tap a colour to zoom in on that part, or press <b>Watch it work</b>.",
    formula: [
      { t: "=IF(" },
      { t: "D2>=100", a: 0 },
      { t: ", ", sep: !0 },
      { t: '"Hit"', a: 1 },
      { t: ", ", sep: !0 },
      { t: '"Flop"', a: 2 },
      { t: ")" },
    ],
    args: [
      {
        k: "D2>=100",
        c: o.pink,
        tint: "#ffe1ee",
        lab: "The test",
        title: "1. The logical test",
        txt: "A question with a <b>TRUE</b> or <b>FALSE</b> answer. Did Robot Rescue sell <b>100 or more</b> tickets? D2 is 120, so the test is TRUE.",
        vis: t({ G2: "?" }, { D2: "look" }),
      },
      {
        k: '"Hit"',
        c: o.green,
        tint: "#d6f7f3",
        lab: "Show this if TRUE",
        title: "2. Value if true",
        txt: 'What the cell shows when the test is <b>TRUE</b>. Words go in <b>"quote marks"</b>; numbers do not.',
        vis: t({ G2: "Hit" }, { D2: "hit", G2: "ret" }),
      },
      {
        k: '"Flop"',
        c: o.purple,
        tint: "#ece3ff",
        lab: "Otherwise show this",
        title: "3. Value if false",
        txt: "What the cell shows when the test is <b>FALSE</b>. Night Tide sold 85, so its row shows Flop. Leave this part off and the cell shows the word FALSE.",
        vis: t({ G2: "Hit", G3: "Flop" }, { D3: "bad", G3: "ret" }),
      },
    ],
    plain: [
      '"If ',
      { a: 0, t: "D2 is 100 or more" },
      ", show ",
      { a: 1, t: "Hit" },
      ", otherwise show ",
      { a: 2, t: "Flop" },
      '."',
    ],
    play: [
      {
        a: -1,
        cap: "Step 1: G2 holds the formula.",
        vis: t({ G2: s }, { G2: "look" }),
      },
      {
        a: 0,
        cap: "Step 2: read the test. Is D2 100 or more?",
        vis: t({ G2: s }, { D2: "look" }),
      },
      {
        a: 0,
        cap: "...D2 is 120. 120 >= 100 is TRUE.",
        vis: t({ G2: s }, { D2: "hit" }),
      },
      {
        a: 1,
        cap: "Step 3: TRUE, so take the value if true: Hit.",
        vis: t({ G2: "Hit" }, { D2: "hit", G2: "ret" }),
      },
      {
        a: 2,
        cap: "Step 4: fill down. Night Tide sold 85: FALSE, so Flop.",
        vis: t({ G2: "Hit", G3: "Flop" }, { D3: "bad", G3: "ret" }),
      },
      {
        a: -1,
        cap: "Step 5: every film gets its own answer.",
        vis: t(
          h(),
          Object.fromEntries(
            Object.entries(r).map(([e, a]) => [
              `G${e}`,
              a === "Hit" ? "hit" : "bad",
            ]),
          ),
          11,
          {
            legend: [
              [c.hit, "TRUE: Hit"],
              [c.bad, "FALSE: Flop"],
            ],
          },
        ),
      },
    ],
    sections: [
      { id: "meet", name: "Meet IF", c: o.pink },
      { id: "read", name: "Read the Sheet", c: o.orange },
      { id: "compare", name: "More, Less or Equal", c: o.green },
      { id: "logic", name: "AND, OR, NOT", c: o.blue },
      { id: "typo", name: "Fix These Typos", c: o.red },
      { id: "bug", name: "Bug Hunt", c: o.purple },
    ],
    questions: [
      {
        sec: "meet",
        type: "match",
        prompt: "Match each part of the formula to what it does.",
        visual: () => ({ fx: s }),
        pairs: [
          ["D2>=100", "The test, TRUE or FALSE"],
          ['"Hit"', "What to show if the test is TRUE"],
          ['"Flop"', "What to show if the test is FALSE"],
        ],
        explain:
          "Always in this order: <b>test</b>, <b>if TRUE</b>, <b>if FALSE</b>.",
      },
      {
        sec: "meet",
        type: "mcq",
        prompt: `Which sentence says what <code>${s}</code> does?`,
        opts: [
          "If D2 is 100 or more, show Hit, otherwise show Flop",
          "If D2 is more than 100, show Flop, otherwise show Hit",
          "Count every cell in D2 that is 100 or more and call it Hit",
          "If D2 is 100 or more, show Flop, otherwise show Hit",
        ],
        ans: 0,
        explain:
          "The value straight after the test is the one shown when it is <b>TRUE</b>. IF never counts: it checks one test and picks one of two answers.",
      },
      {
        sec: "read",
        type: "mcq",
        prompt:
          'Filled down to row 8 (Quiet Hill): <code>=IF(D8>=100, "Hit", "Flop")</code>. What shows in G8?',
        visual: (e) =>
          t(
            e ? { G8: "Flop" } : {},
            i({ D8: "look" }, e ? { G8: "ret" } : {}),
            8,
          ),
        opts: ["Flop", "Hit", "FALSE", "40"],
        ans: 0,
        explain:
          "D8 is 40. 40 >= 100 is FALSE, so Excel shows the <b>value if false</b>: <b>Flop</b>.",
      },
      {
        sec: "read",
        type: "value",
        prompt:
          "The formula is filled down from G2 to G11. How many films show <b>Hit</b>?",
        visual: (e) =>
          t(
            e ? h() : {},
            e
              ? Object.fromEntries(
                  Object.entries(r).map(([a, n]) => [
                    `G${a}`,
                    n === "Hit" ? "hit" : "bad",
                  ]),
                )
              : p("D2:D11", "range"),
            11,
          ),
        accept: ["5"],
        hint: "Count the films with 100 tickets or more.",
        explain:
          'Robot Rescue, Laugh Track, The Vault, Road Trip and Sky Kids: <b>5</b>. <code>=COUNTIF(G2:G11,"Hit")</code> would count them for you.',
      },
      {
        sec: "read",
        type: "value",
        prompt:
          'D2 is exactly <b>100</b>. What does <code>=IF(D2>=100, "Hit", "Flop")</code> show? Type the word.',
        accept: ["Hit"],
        traps: {
          Flop: "<b>&gt;=</b> means greater than <b>or equal to</b>. 100 is equal to 100, so the test is TRUE.",
        },
        hint: 'Is 100 "100 or more"?',
        explain:
          "100 >= 100 is TRUE, so <b>Hit</b>. With <code>&gt;</code> on its own it would be Flop.",
      },
      {
        sec: "compare",
        type: "match",
        prompt: "Match each sign to what it means.",
        pairs: [
          [">", "more than"],
          ["<", "less than"],
          [">=", "at least (more than or equal to)"],
          ["<=", "at most (less than or equal to)"],
          ["<>", "not equal to"],
        ],
        explain:
          "The <b>=</b> always comes second: <code>&gt;=</code> and <code>&lt;=</code>, never =&gt; or =&lt;.",
      },
      {
        sec: "compare",
        type: "mcq",
        prompt:
          'D2 is 100. What does <code>=IF(D2>100, "Hit", "Flop")</code> show?',
        opts: ["Flop", "Hit", "TRUE", "100"],
        ans: 0,
        explain:
          "<b>&gt;</b> means more than. 100 is not more than 100, so the test is FALSE: <b>Flop</b>. One sign changes the answer on the boundary.",
      },
      {
        sec: "compare",
        type: "build",
        prompt:
          "Build the formula from the English. Tap a chip to drop it in the next empty box. Tap a box to empty it.",
        english:
          '"If the rating in F2 is <b>4 or more</b>, show Good, otherwise show Poor."',
        fn: "IF",
        answer: ["F2>=4", '"Good"', '"Poor"'],
        chips: ["F2>=4", '"Good"', '"Poor"', "F2>4", "Good", "F2=>4"],
        explain:
          '<code>=IF(F2&gt;=4, "Good", "Poor")</code>. Robot Rescue is rated 4, so it shows <b>Good</b>.',
      },
      {
        sec: "compare",
        type: "mcq",
        prompt:
          "Which test is TRUE for every film <b>except</b> the Saturday ones?",
        visual: (e) =>
          e
            ? {
                sheets: [
                  l({
                    cols: ["A", "C"],
                    hl: i(p("C2:C11", "hit"), {
                      C2: "bad",
                      C4: "bad",
                      C8: "bad",
                      C11: "bad",
                    }),
                  }),
                ],
              }
            : null,
        opts: ['C2<>"Sat"', 'C2="Sat"', 'C2>"Sat"', 'C2<"Sat"'],
        ans: 0,
        mono: !0,
        explain:
          "<code>&lt;&gt;</code> means <b>not equal to</b>. Text in a test needs quotes too.",
      },
      {
        sec: "logic",
        type: "mcq",
        prompt:
          'Road Trip (row 10) sold 110 tickets and has a rating of 4. What does <code>=IF(AND(D10>=100, F10>=5), "Star", "-")</code> show?',
        visual: (e) =>
          t(
            {},
            i(
              { D10: "look", F10: "look" },
              e ? { D10: "hit", F10: "bad" } : {},
            ),
            11,
          ),
        opts: ["-", "Star", "TRUE", "#VALUE!"],
        ans: 0,
        explain:
          "110 >= 100 is TRUE, but 4 >= 5 is FALSE. <b>AND</b> needs every test TRUE, so it shows <b>-</b>.",
      },
      {
        sec: "logic",
        type: "mcq",
        prompt:
          'Same film, but now <code>=IF(OR(D10>=100, F10>=5), "Star", "-")</code>. What shows?',
        visual: (e) =>
          t(
            {},
            i(
              { D10: "look", F10: "look" },
              e ? { D10: "hit", F10: "bad" } : {},
            ),
            11,
          ),
        opts: ["Star", "-", "FALSE", "110"],
        ans: 0,
        explain:
          "<b>OR</b> needs at least one TRUE. The tickets test passes, so <b>Star</b>.",
      },
      {
        sec: "logic",
        type: "mcq",
        prompt:
          'Robot Rescue is on a Saturday. What does <code>=NOT(C2="Sat")</code> give?',
        visual: () => ({
          sheets: [l({ cols: ["A", "C"], to: 3, hl: { C2: "look" } })],
        }),
        opts: ["FALSE", "TRUE", "Sat", "#NAME?"],
        ans: 0,
        explain:
          '<code>C2="Sat"</code> is TRUE, and <b>NOT</b> flips TRUE to <b>FALSE</b>.',
      },
      {
        sec: "logic",
        type: "mcq",
        prompt:
          "The manager wants <b>Star</b> for any film that sold 100 or more tickets <b>and</b> is rated 5. Which formula?",
        opts: [
          '=IF(AND(D2>=100, F2=5), "Star", "-")',
          '=IF(OR(D2>=100, F2=5), "Star", "-")',
          '=IF(D2>=100, F2=5, "Star")',
          '=AND(IF(D2>=100, F2=5), "Star")',
        ],
        ans: 0,
        mono: !0,
        explain:
          "Both must be true, so <b>AND</b>, inside the test of the IF. Laugh Track and Sky Kids get a Star.",
      },
      {
        sec: "typo",
        type: "typo",
        prompt: "This shows #NAME?. Fix it.",
        broken: '=IF(D2>=100, Hit, "Flop")',
        fixed: '=IF(D2>=100,"Hit","Flop")',
        shown: s,
        hint: "Compare how Hit and Flop are written.",
        explain:
          'Text inside a formula needs <b>"quote marks"</b>. Without them Excel looks for something called Hit.',
      },
      {
        sec: "typo",
        type: "typo",
        prompt: "Excel will not accept this test. Fix it.",
        broken: '=IF(D2=>100, "Hit", "Flop")',
        fixed: '=IF(D2>=100,"Hit","Flop")',
        shown: s,
        hint: 'Which comes first in "at least": the arrow or the equals?',
        explain: "The sign is <b>&gt;=</b>, with the = second.",
      },
      {
        sec: "typo",
        type: "typo",
        prompt: "This gives the wrong result. Fix it.",
        broken: '=IF(D2>=100 "Hit", "Flop")',
        fixed: '=IF(D2>=100,"Hit","Flop")',
        shown: s,
        hint: "Count the commas. Three parts need two.",
        explain:
          "A comma was missing after the test. Three parts need <b>two</b> commas.",
      },
      {
        sec: "typo",
        type: "typo",
        prompt: "Excel says there is a problem with this formula. Fix it.",
        broken: '=IF(D2>=100, "Hit", "Flop"',
        fixed: '=IF(D2>=100,"Hit","Flop")',
        shown: s,
        hint: "Look at the very end.",
        explain: "Every opening bracket needs a <b>closing bracket</b>.",
      },
      {
        sec: "bug",
        type: "mcq",
        prompt:
          'Someone leaves off the last part: <code>=IF(D3>=100, "Hit")</code>. Night Tide sold 85. What shows?',
        opts: ["FALSE", "Flop", "Nothing, the cell is empty", "#N/A"],
        ans: 0,
        explain:
          "With no value if false, IF shows the word <b>FALSE</b>. Always give both answers.",
      },
      {
        sec: "bug",
        type: "mcq",
        prompt:
          'Every film shows Flop with <code>=IF(D2>="100", "Hit", "Flop")</code>, even The Vault with 150. Why?',
        visual: () =>
          t(
            { G2: "Flop", G3: "Flop", G4: "Flop" },
            { G2: "bad", G4: "bad" },
            4,
          ),
        opts: [
          "The 100 is in quotes, so it is text, and Excel treats text as bigger than any number",
          "The test should use > instead of >=",
          "IF cannot compare numbers, only text",
          "The words Hit and Flop should not be in quotes",
        ],
        ans: 0,
        explain:
          'In quotes, "100" is <b>text</b>. Excel ranks any text above every number, so the test is never TRUE. Numbers in a test have <b>no quotes</b>.',
      },
      {
        sec: "bug",
        type: "mcq",
        prompt:
          "Which is the best way to check your IF before you trust it across the dashboard?",
        opts: [
          "Test it on a row right on the boundary, such as exactly 100 tickets",
          "Check that the formula has no red error showing",
          "Fill it down and check the first row only",
          "Make the column wider so all the words fit",
        ],
        ans: 0,
        explain:
          "Most IF mistakes are on the <b>boundary</b>: &gt; or &gt;=, &lt; or &lt;=. Try a value just below, on, and just above it.",
      },
    ],
    teach: {
      meet: {
        title: "Test, then one of two answers",
        blocks: [
          {
            p: "IF asks one question about the row. The answer is TRUE or FALSE, and that decides what the cell shows.",
          },
          {
            c: o.orange,
            frame: [
              "=IF( ",
              { text: "test", c: o.pink },
              " , ",
              { text: "if TRUE show this", c: o.green },
              " , ",
              { text: "otherwise show this", c: o.purple },
              " )",
            ],
          },
          { visual: { fx: s } },
          {
            p: '"If <b>D2 is 100 or more</b>, show <b>Hit</b>, otherwise show <b>Flop</b>."',
          },
          {
            tip: 'Words go in <b>"quotes"</b>. Numbers and cell references do not.',
          },
        ],
      },
      read: {
        title: "Each row makes its own decision",
        blocks: [
          {
            p: "Fill an IF down and each row tests its own cell: D2, then D3, then D4.",
          },
          {
            visual: t(
              h(),
              Object.fromEntries(
                Object.entries(r).map(([e, a]) => [
                  `G${e}`,
                  a === "Hit" ? "hit" : "bad",
                ]),
              ),
              11,
            ),
          },
        ],
      },
      compare: {
        title: "Six ways to compare",
        blocks: [
          {
            table: {
              head: ["Sign", "Means", "TRUE when D2 is 100?"],
              rows: [
                ["D2&gt;100", "more than", "No"],
                ["D2&lt;100", "less than", "No"],
                ["D2&gt;=100", "at least", "Yes"],
                ["D2&lt;=100", "at most", "Yes"],
                ["D2=100", "equal to", "Yes"],
                ["D2&lt;&gt;100", "not equal to", "No"],
              ],
            },
          },
          { tip: "The = always comes second: <b>&gt;=</b> and <b>&lt;=</b>." },
        ],
      },
      logic: {
        title: "Two tests at once",
        blocks: [
          {
            table: {
              head: ["Use", "TRUE when..."],
              rows: [
                ["AND(a,b)", "<b>every</b> test is TRUE"],
                ["OR(a,b)", "<b>at least one</b> test is TRUE"],
                ["NOT(a)", "the test is FALSE (it flips it)"],
              ],
            },
          },
          { visual: { fx: '=IF(AND(D2>=100, F2>=5), "Star", "-")' } },
          { tip: "AND, OR and NOT go <b>inside</b> the test part of the IF." },
        ],
      },
      typo: {
        title: "The syntax checklist",
        blocks: [
          {
            table: {
              rows: [
                ["IF", "Spelt right? A misspelt function shows <b>#NAME?</b>"],
                [", ,", "Exactly <b>2 commas</b> separating 3 parts."],
                ["&gt;=", "The = comes second."],
                ['"Hit"', "Words in quotes; numbers without."],
                ["( )", "Every opening bracket has a closing one."],
              ],
            },
          },
        ],
      },
      bug: {
        title: "When the decision looks wrong",
        blocks: [
          {
            table: {
              head: ["You see", "Most likely cause", "Fix"],
              rows: [
                [
                  "FALSE",
                  "The value if false was left off.",
                  "Add the third part.",
                ],
                [
                  "Always the same answer",
                  "A number in quotes, or the wrong sign.",
                  "Remove the quotes; check &gt; or &gt;=.",
                ],
                ["#NAME?", "Words without quotes.", "Add the quotes."],
              ],
            },
          },
        ],
      },
    },
    cheat: {
      title: "IF checklist for Task 2 (open me)",
      rows: [
        ["1", "Test first, then if TRUE, then if FALSE."],
        ["2", "Words go in quotes; numbers do not."],
        [
          "3",
          "&gt;= means at least; &gt; means more than. Check the boundary.",
        ],
        ["4", "AND needs every test true; OR needs one; NOT flips it."],
        ["5", "Give both answers, or the cell shows FALSE."],
        ["6", 'Read it back: "If ..., show ..., otherwise show ...".'],
      ],
    },
    ratings: ["IF Legend", "Decision Pro", "Getting There", "Keep Practising"],
    footer: s,
    motif: ["120", "Hit"],
  };
export { m as IF_GAME };
