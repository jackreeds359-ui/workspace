import { C as t, f as r, T as s, h } from "./cinema-CBL_zzZm.js";
const a = '=IFERROR(D2/H2, "No data")';
function l(e, i = {}) {
  return {
    tab: "Screenings",
    cols: ["A", "D", "H", "I"],
    start: 1,
    hdRow: 1,
    data: [
      ["Film", "Tickets", "Shows", "Per show"],
      ["Robot Rescue", 120, "", e[0] ?? ""],
      ["Night Tide", 85, 5, e[1] ?? ""],
      ["Laugh Track", 140, 4, e[2] ?? ""],
    ],
    hl: i,
  };
}
const o = (e, i = {}, n = {}) => ({ sheets: [l(e, i)], ...n }),
  c = {
    id: "iferror",
    logo: "IFERROR",
    title: "The IFERROR Challenge",
    badge: "BTEC DIT · Component 2 · Task 2a / 2b and 2c",
    lead: "An error message is a <b>clue</b>. Learn what each one means, then use IFERROR so your dashboard shows a friendly message instead. Tap a colour to zoom in on that part, or press <b>Watch it work</b>.",
    formula: [
      { t: "=IFERROR(" },
      { t: "D2/H2", a: 0 },
      { t: ", ", sep: !0 },
      { t: '"No data"', a: 1 },
      { t: ")" },
    ],
    args: [
      {
        k: "D2/H2",
        c: t.pink,
        tint: "#ffe1ee",
        lab: "Try this",
        title: "1. The value to try",
        txt: "The formula that might fail: tickets <b>divided by</b> shows. H2 is still empty, and dividing by an empty cell gives <b>#DIV/0!</b>.",
        vis: o(["#DIV/0!", 17, 35], { D2: "look", H2: "bad", I2: "bad" }),
      },
      {
        k: '"No data"',
        c: t.purple,
        tint: "#ece3ff",
        lab: "Show this if it fails",
        title: "2. The value if error",
        txt: 'What to show <b>instead of</b> an error. Words go in <b>"quotes"</b>. Rows that work are left alone.',
        vis: o(
          ["No data", 17, 35],
          { I2: "ret", I3: "hit", I4: "hit" },
          {
            legend: [
              [s.ret, "error replaced"],
              [s.hit, "worked, left alone"],
            ],
          },
        ),
      },
    ],
    plain: [
      '"Try ',
      { a: 0, t: "D2 divided by H2" },
      ". If it gives an error, ",
      { a: 1, t: "show No data instead" },
      '."',
    ],
    play: [
      {
        a: 0,
        cap: "Step 1: try the formula. 120 divided by H2...",
        vis: o([a, "", ""], { D2: "look", H2: "look" }),
      },
      {
        a: 0,
        cap: "...H2 is empty, so that is #DIV/0!.",
        vis: o(["#DIV/0!", "", ""], { H2: "bad", I2: "bad" }),
      },
      {
        a: 1,
        cap: "Step 2: it failed, so show the value if error: No data.",
        vis: o(["No data", "", ""], { I2: "ret" }),
      },
      {
        a: 0,
        cap: "Step 3: fill down. Night Tide: 85 / 5 works, so it shows 17.",
        vis: o(["No data", 17, ""], { D3: "look", H3: "look", I3: "hit" }),
      },
      {
        a: -1,
        cap: "Step 4: only the failing row is replaced.",
        vis: o(
          ["No data", 17, 35],
          { I2: "ret", I3: "hit", I4: "hit" },
          {
            legend: [
              [s.ret, "error replaced"],
              [s.hit, "worked, left alone"],
            ],
          },
        ),
      },
    ],
    sections: [
      { id: "meet", name: "Meet IFERROR", c: t.pink },
      { id: "clues", name: "Read the Clues", c: t.orange },
      { id: "more", name: "More Error Messages", c: t.green },
      { id: "use", name: "Use IFERROR", c: t.blue },
      { id: "typo", name: "Fix These Typos", c: t.red },
      { id: "bug", name: "When Not to Use It", c: t.purple },
    ],
    questions: [
      {
        sec: "meet",
        type: "match",
        prompt: "Match each part of the formula to what it does.",
        visual: () => ({ fx: a }),
        pairs: [
          ["D2/H2", "The formula to try"],
          ['"No data"', "What to show if it gives an error"],
        ],
        explain:
          "Always in this order: <b>try this</b>, then <b>show this if it fails</b>.",
      },
      {
        sec: "meet",
        type: "mcq",
        prompt:
          'I3 contains <code>=IFERROR(D3/H3, "No data")</code>. Night Tide sold 85 tickets over 5 shows. What does I3 show?',
        visual: (e) =>
          o(
            ["", e ? 17 : '=IFERROR(D3/H3, "No data")', ""],
            h({ D3: "look", H3: "look" }, e ? { I3: "ret" } : {}),
          ),
        opts: ["17", "No data", "#DIV/0!", "85"],
        ans: 0,
        explain:
          "85 ÷ 5 = <b>17</b>. Nothing went wrong, so IFERROR shows the answer as normal.",
      },
      {
        sec: "clues",
        type: "match",
        prompt: "Match each error to its most likely cause.",
        pairs: [
          ["#DIV/0!", "Dividing by zero or an empty cell"],
          ["#VALUE!", "Doing maths with text"],
          ["#NAME?", "A misspelt function, or text without quotes"],
          ["#REF!", "A reference to a cell that is not there"],
          ["#####", "The column is too narrow to show the number"],
        ],
        explain:
          "Read the error, then check the matching cause. It turns debugging from guessing into detective work.",
      },
      {
        sec: "clues",
        type: "mcq",
        prompt: "H2 is empty. What does <code>=D2/H2</code> show?",
        visual: (e) =>
          o(
            [e ? "#DIV/0!" : "=D2/H2", "", ""],
            e ? { H2: "bad", I2: "bad" } : { D2: "look", H2: "look" },
          ),
        opts: ["#DIV/0!", "0", "120", "#VALUE!"],
        ans: 0,
        explain:
          "An empty cell counts as 0, and you cannot divide by 0: <b>#DIV/0!</b>.",
      },
      {
        sec: "clues",
        type: "mcq",
        prompt: 'What does <code>="ten"*2</code> show?',
        opts: ["#VALUE!", "20", "#NAME?", "tenten"],
        ans: 0,
        explain:
          'You cannot do maths with text: <b>#VALUE!</b>. It often happens when a number is typed with a unit, such as "120 tickets".',
      },
      {
        sec: "clues",
        type: "mcq",
        prompt:
          'D2 holds the text <b>"120 tickets"</b>. What does <code>=D2/5</code> show?',
        visual: () => ({
          sheets: [
            r({
              cols: ["A", "D"],
              to: 3,
              set: { D2: "120 tickets" },
              hl: { D2: "bad" },
            }),
          ],
        }),
        opts: ["#VALUE!", "24", "#DIV/0!", "#NAME?"],
        ans: 0,
        explain:
          "The cell is <b>text</b>, so dividing it gives <b>#VALUE!</b>. Keep units in the header: <b>Tickets</b>.",
      },
      {
        sec: "more",
        type: "mcq",
        prompt: "What does <code>=AVERGE(D2:D11)</code> show?",
        opts: ["#NAME?", "100.5", "#VALUE!", "#REF!"],
        ans: 0,
        explain:
          "AVERGE is not a function Excel knows, so <b>#NAME?</b>. Check the spelling: AVERAGE.",
      },
      {
        sec: "more",
        type: "mcq",
        prompt:
          "I2 holds <code>=D2/H2</code>. You delete column H. What does the formula become?",
        opts: [
          "=D2/#REF! and it shows #REF!",
          "=D2/I2, using the next column",
          "=D2 on its own",
          "It keeps working because Excel remembers the old values",
        ],
        ans: 0,
        explain:
          "The cell it pointed at is gone, so Excel writes <b>#REF!</b> in its place. Undo, or point the formula at the right cell again.",
      },
      {
        sec: "more",
        type: "mcq",
        prompt: "D12 contains <code>=SUM(D2:D12)</code>. What is wrong?",
        visual: (e) => ({
          sheets: [
            r({
              cols: ["A", "C", "D"],
              to: 12,
              set: { C12: "Total", D12: e ? 0 : "=SUM(D2:D12)" },
              hl: e ? { D12: "bad" } : { D12: "look" },
            }),
          ],
        }),
        opts: [
          "It includes its own cell, so it is a circular reference",
          "It needs $ signs because it is at the bottom of a list",
          "SUM cannot add up more than ten cells at once",
          "Nothing, it correctly totals the whole column",
        ],
        ans: 0,
        explain:
          "D12 is <b>inside its own range</b>, so it tries to add itself. Excel warns about a circular reference and often shows 0. Fix: <code>=SUM(D2:D11)</code> = 1005.",
      },
      {
        sec: "more",
        type: "mcq",
        prompt:
          "A cell with a big number shows <b>#####</b>. What should you do?",
        opts: [
          "Widen the column",
          "Fix the formula",
          "Wrap it in IFERROR",
          "Delete the cell and type it again",
        ],
        ans: 0,
        explain:
          "<b>#####</b> is not a broken formula: the number does not fit. Widen the column and it appears.",
      },
      {
        sec: "use",
        type: "mcq",
        prompt:
          "Which formula shows <b>No data</b> instead of #DIV/0! on the dashboard?",
        opts: [
          '=IFERROR(D2/H2, "No data")',
          '=IF(D2/H2, "No data")',
          '=IFERROR("No data", D2/H2)',
          '=ISERROR(D2/H2, "No data")',
        ],
        ans: 0,
        mono: !0,
        explain:
          "The formula to try goes <b>first</b>, then the message. ISERROR only gives TRUE or FALSE and takes one part.",
      },
      {
        sec: "use",
        type: "build",
        prompt:
          "Build the formula from the English. Tap a chip to drop it in the next empty box. Tap a box to empty it.",
        english:
          '"Try VLOOKUP of F2 in the price table. If it gives an error, show Not found instead."',
        fn: "IFERROR",
        answer: ["VLOOKUP(F2,$E$13:$F$15,2,FALSE)", '"Not found"'],
        chips: [
          "VLOOKUP(F2,$E$13:$F$15,2,FALSE)",
          '"Not found"',
          "Not found",
          "#N/A",
          '"#N/A"',
          "FALSE",
        ],
        explain:
          '<code>=IFERROR(VLOOKUP(F2,$E$13:$F$15,2,FALSE), "Not found")</code>. The whole VLOOKUP is the value to try.',
      },
      {
        sec: "use",
        type: "mcq",
        prompt:
          "The manager wants a <b>0</b>, not words, where there is no data, so the totals still add up. Which formula?",
        opts: [
          "=IFERROR(D2/H2, 0)",
          '=IFERROR(D2/H2, "0")',
          "=IFERROR(0, D2/H2)",
          "=IFERROR(D2/H2)",
        ],
        ans: 0,
        mono: !0,
        explain:
          'A number needs <b>no quotes</b>. "0" in quotes is text, and SUM would skip it.',
      },
      {
        sec: "use",
        type: "order",
        prompt: "Put these in the order you should do them. Tap them 1 to 4.",
        items: [
          "Write the formula",
          "Test it on rows you can check by hand",
          "Fix any error that is a real mistake",
          "Wrap it in IFERROR for the rows with missing data",
        ],
        explain:
          "IFERROR goes on <b>last</b>, once the formula is right. Put it on first and it hides your own mistakes.",
      },
      {
        sec: "typo",
        type: "typo",
        prompt: "The message and the formula are the wrong way round. Fix it.",
        broken: '=IFERROR("No data", D2/H2)',
        fixed: '=IFERROR(D2/H2,"No data")',
        shown: a,
        hint: "Which part is tried first?",
        explain:
          "The formula to try comes <b>first</b>; the message comes second.",
      },
      {
        sec: "typo",
        type: "typo",
        prompt: "This shows #NAME?. Fix it.",
        broken: "=IFERROR(D2/H2, No data)",
        fixed: '=IFERROR(D2/H2,"No data")',
        shown: a,
        hint: "Words in a formula need something around them.",
        explain: 'The message needs <b>"quote marks"</b>.',
      },
      {
        sec: "typo",
        type: "typo",
        prompt: "This shows #NAME?. Fix it.",
        broken: '=IFEROR(D2/H2, "No data")',
        fixed: '=IFERROR(D2/H2,"No data")',
        shown: a,
        hint: "Check the spelling of the function name.",
        explain: "<b>IFEROR</b> should be <b>IFERROR</b>: IF, then ERROR.",
      },
      {
        sec: "bug",
        type: "mcq",
        prompt:
          'Every plan shows <b>Not found</b> with <code>=IFERROR(VLOKUP(F2, $E$13:$F$15, 2, FALSE), "Not found")</code>. Why?',
        opts: [
          "VLOKUP is misspelt, and IFERROR hides the #NAME? that would have said so",
          "IFERROR always shows its message, whatever happens",
          "FALSE should be TRUE inside an IFERROR",
          "The price table needs to be sorted first",
        ],
        ans: 0,
        explain:
          "IFERROR catches <b>every</b> error, typos included. Without it you would see #NAME? and fix the spelling. That is why it goes on last.",
      },
      {
        sec: "bug",
        type: "mcq",
        prompt: "Which error should you <b>never</b> hide with IFERROR?",
        opts: [
          "#NAME? from a misspelt function",
          "#DIV/0! where shows are not in yet",
          "#N/A for a plan code not in the table yet",
          "Any error on a row with missing data",
        ],
        ans: 0,
        explain:
          "#NAME? is <b>your</b> mistake, so fix it. Missing data is real, so a friendly message is right there.",
      },
    ],
    teach: {
      meet: {
        title: "Try it; if it fails, show this",
        blocks: [
          {
            p: "IFERROR runs the formula. If it works, you see the answer. If it gives any error, you see your message instead.",
          },
          {
            visual: o(
              ["No data", 17, 35],
              { I2: "ret", I3: "hit", I4: "hit" },
              {
                legend: [
                  [s.ret, "error replaced"],
                  [s.hit, "worked, left alone"],
                ],
              },
            ),
          },
          {
            c: t.pink,
            frame: [
              "=IFERROR( ",
              { text: "try this", c: t.pink },
              " , ",
              { text: "show this if it fails", c: t.purple },
              " )",
            ],
          },
        ],
      },
      clues: {
        title: "Reading error messages",
        blocks: [
          {
            p: "An error message is a clue, not a dead end. Match the clue to the cause.",
          },
          {
            table: {
              head: ["You see", "Most likely cause", "Fix"],
              rows: [
                [
                  "#DIV/0!",
                  "dividing by 0 or an empty cell",
                  "check the cell you divide by",
                ],
                [
                  "#VALUE!",
                  'maths with text, such as "120 tickets"',
                  "keep units out of number cells",
                ],
                [
                  "#NAME?",
                  "misspelt function, or text without quotes",
                  'check spelling and "quotes"',
                ],
                [
                  "#REF!",
                  "a cell that is not there any more",
                  "point at the right cell again",
                ],
                [
                  "#N/A",
                  "a lookup value not found",
                  "check spelling and spaces",
                ],
                ["#####", "column too narrow", "widen the column"],
              ],
            },
          },
        ],
      },
      more: {
        title: "Errors you make, errors in the data",
        blocks: [
          {
            p: "#NAME? and #REF! mean the formula itself is wrong. A circular reference means a formula is counting itself.",
          },
          {
            tip: "Excel shows a <b>circular reference</b> warning and often a 0. Look for a formula whose range includes its own cell.",
          },
        ],
      },
      use: {
        title: "IFERROR goes on last",
        blocks: [
          {
            table: {
              head: ["Formula", "Shows when H2 is empty"],
              rows: [
                ["=D2/H2", "#DIV/0!"],
                ['=IFERROR(D2/H2,"No data")', "No data"],
                ["=IFERROR(D2/H2,0)", "0"],
                ['=IFERROR(D2/H2,"")', "an empty-looking cell"],
              ],
            },
          },
          {
            tip: "Get the formula working first. Then add IFERROR for the rows where the data is really missing.",
          },
        ],
      },
      typo: {
        title: "The syntax checklist",
        blocks: [
          {
            table: {
              rows: [
                ["IFERROR", "Spelt right: IF, then ERROR."],
                [",", "One <b>comma</b> between the two parts."],
                ["first", "The formula to try comes first."],
                ['"No data"', "Words in quotes; numbers without."],
                ["( )", "Every opening bracket has a closing one."],
              ],
            },
          },
        ],
      },
      bug: {
        title: "IFERROR hides every error",
        blocks: [
          {
            p: "It cannot tell a missing value from a typo. That is why it must never be the first thing you add.",
          },
          {
            visual: {
              fx: '=IFERROR(VLOKUP(F2, $E$13:$F$15, 2, FALSE), "Not found")',
            },
          },
          {
            tip: "If every row shows your message, take IFERROR off and read the error underneath.",
          },
        ],
      },
    },
    cheat: {
      title: "Error and IFERROR checklist for Task 2 (open me)",
      rows: [
        ["1", "Read the error and match it to its cause."],
        [
          "2",
          "#DIV/0! dividing by empty; #VALUE! maths with text; #NAME? spelling or quotes.",
        ],
        ["3", "#REF! a cell that has gone; ##### widen the column."],
        ["4", "A formula must not include its own cell."],
        ["5", "=IFERROR(try this, show this if it fails)."],
        ["6", "Add IFERROR last, once the formula works."],
        ["7", "A number message has no quotes, so totals still add up."],
      ],
    },
    ratings: [
      "Error Detective",
      "Debugging Pro",
      "Getting There",
      "Keep Practising",
    ],
    footer: a,
    motif: ["#DIV/0!", "No data"],
  };
export { c as IFERROR_GAME };
