import { e as ne, r, j as e, k as Q, L as A } from "./react-vendor-BK1G6oO1.js";
import {
  aR as X,
  aO as Z,
  cz as le,
  cA as Y,
  cB as re,
  cC as ce,
  cD as ie,
  cE as de,
  cF as ue,
  cG as me,
  bd as be,
  cH as he,
} from "./index-DjyiOHey.js";
import {
  u as $,
  a as G,
  o as B,
  l as U,
  b as F,
  c as ee,
  d as se,
  G as H,
  C as pe,
  e as fe,
} from "./AppRoutes-Br4afREO.js";
import {
  L as D,
  f as W,
  l as te,
  a as ye,
  b as ve,
  R as xe,
} from "./LobbyPage-CiLiZaEi.js";
import "./ui-components-DeMDYLzO.js";
import "./GameNotebook-b0Qw2wzd.js";
import "./radix-ui-Vw-YFQN8.js";
import "./FdeQuiz-QJ8t5VNa.js";
import "./revision-content-CLnFOyQ7.js";
import "./action-styles-DWMwPIR0.js";
import "./proxy-DGk2Wawc.js";
import "./keyword-deck-Bo8inXG8.js";
import "./keyword-flashcards-Ha6Msavb.js";
import "./use-cover-art-CyGvgy9q.js";
import "./AquaticSortGame-BYy2pwqM.js";
import "./DefragGame-Cbp3Z9Xu.js";
import "./LawAndOrderGame-DsjUFNJ3.js";
import "./index-B24ohNs7.js";
import "./NetworkBuildGame-CzKkAyEJ.js";
import "./network-build-z_ixRQe6.js";
import "./immersive-picker-PA4Q0OWd.js";
import "./helpers-DmEFZcxj.js";
import "./NetworkTraceGame-Qz8SQ8Dr.js";
import "./AddressArcadeGame-DPEl4ZPp.js";
import "./keyword-text-BtYtr9f7.js";
import "./SignalMapGame-CqZijLu9.js";
import "./ProtocolPostGame-CYb8FD6Y.js";
import "./SpecItGame-4kZ8fSy0.js";
import "./UnderAttackGame-DQTs04Tm.js";
import "./SqueezeGame-BfrJr2Ri.js";
import "./UpgradeBayGame-C8dsS5A0.js";
import "./OsControlRoomGame-Os9AAYzi.js";
import "./index-DODcXJEq.js";
import "./HiddenComputersGame-Bjib9LyZ.js";
import "./SafeCrackerGame-COhLy2i9.js";
import "./SoundStudioGame-C-zDgI2b.js";
import "./SecretAgentsGame-CFNZoJLR.js";
import "./BinaryBakeryGame-BXeXrTUn.js";
import "./PixelStudioGame-B8Y1iEuP.js";
import "./LineByLineGame-Bcc5iq7z.js";
import "./GateWorksGame-vDTeqFB1.js";
import "./BoxOfficeGame-DETNqaK-.js";
import "./TranslatorLabGame-CCM5PaWg.js";
function V({ lobby: s, action: l, onOpen: a }) {
  return e.jsxs("li", {
    className: "lobby-row",
    "data-lobby-row": s.id,
    "data-lobby-game": s.game,
    children: [
      e.jsxs("span", {
        className: "lobby-row-main",
        children: [
          e.jsx("span", { className: "lobby-row-title", children: s.title }),
          e.jsxs("span", {
            className: "lobby-row-meta",
            children: [
              s.hostName,
              " · ",
              B(s.players),
              s.directed.length ? ` · ${s.directed.join(", ")}` : "",
            ],
          }),
        ],
      }),
      e.jsx("button", {
        type: "button",
        className: "room-primary",
        onClick: a,
        "data-lobby-open": s.id,
        children: l,
      }),
    ],
  });
}
function je({ overview: s }) {
  const l = $(),
    a = ne(),
    n = G(),
    [c, x] = r.useState(D[0].id),
    [h, m] = r.useState(""),
    [i, f] = r.useState([]),
    [j, y] = r.useState(!1),
    [v, w] = r.useState(null);
  if (
    (r.useEffect(() => {
      !h && s?.classes?.[0] && m(s.classes[0].id);
    }, [s, h]),
    !s)
  )
    return null;
  async function k(o) {
    (y(!0), w(null));
    const d = await l.send(o);
    (y(!1), d.ok ? a(U(d.data.id)) : w(d.message));
  }
  const S = (s.rooms ?? []).filter((o) => n || o.game !== "crossword"),
    C = s.hosting ?? [],
    N = (s.classes ?? []).find((o) => o.id === h),
    R = c === "crossword" ? "a crossword" : W(c).title,
    E = N
      ? `Send ${N.code} to ${R} on ${te(window.location.search)}`
      : "Send my class in",
    L = N?.pupils ?? [];
  return e.jsxs("section", {
    className: "lobby-together",
    "aria-labelledby": "lobby-together-title",
    "data-lobby-together": !0,
    children: [
      e.jsxs("div", {
        className: "lobby-heading",
        children: [
          e.jsx("h2", {
            id: "lobby-together-title",
            className: "room-section-title",
            children: "Play together",
          }),
          e.jsx("span", {
            className: "lobby-online",
            "data-lobby-online-total": !0,
            children: B(s.online.total),
          }),
        ],
      }),
      s.takeover
        ? e.jsx("ul", {
            className: "lobby-rows",
            children: e.jsx(V, {
              lobby: s.takeover,
              action: "Join",
              onOpen: () => a(U(s.takeover.id)),
            }),
          })
        : null,
      n
        ? e.jsxs("form", {
            className: "lobby-start",
            onSubmit: (o) => {
              (o.preventDefault(),
                k({ action: "direct", game: c, classId: h, leaveOut: i }));
            },
            children: [
              e.jsxs("label", {
                className: "lobby-field",
                children: [
                  e.jsx("span", {
                    className: "lobby-field-label",
                    children: "Class",
                  }),
                  e.jsx("select", {
                    className: "lobby-select",
                    value: h,
                    onChange: (o) => {
                      (m(o.target.value), f([]));
                    },
                    "data-lobby-class": !0,
                    children: (s.classes ?? []).map((o) =>
                      e.jsx("option", { value: o.id, children: o.code }, o.id),
                    ),
                  }),
                ],
              }),
              e.jsxs("label", {
                className: "lobby-field",
                children: [
                  e.jsx("span", {
                    className: "lobby-field-label",
                    children: "Game",
                  }),
                  e.jsx("select", {
                    className: "lobby-select",
                    value: c,
                    onChange: (o) => x(o.target.value),
                    "data-lobby-game-choice": !0,
                    children: D.map((o) =>
                      e.jsx("option", { value: o.id, children: o.title }, o.id),
                    ),
                  }),
                ],
              }),
              L.length > 0
                ? e.jsxs("fieldset", {
                    className: "lobby-ticks",
                    "data-lobby-ticks": !0,
                    children: [
                      e.jsx("legend", {
                        className: "sr-only",
                        children: "Pupils to send in",
                      }),
                      L.map((o) =>
                        e.jsxs(
                          "label",
                          {
                            className: "lobby-roster-player lobby-roster-tick",
                            "data-out": i.includes(o.key) ? "true" : void 0,
                            children: [
                              e.jsx("input", {
                                type: "checkbox",
                                checked: !i.includes(o.key),
                                onChange: (d) =>
                                  f((g) =>
                                    d.target.checked
                                      ? g.filter((p) => p !== o.key)
                                      : [...g, o.key],
                                  ),
                                "data-lobby-tick": o.name,
                              }),
                              e.jsx("span", { children: o.name }),
                            ],
                          },
                          o.key,
                        ),
                      ),
                    ],
                  })
                : null,
              e.jsx("button", {
                type: "submit",
                className: "room-primary",
                disabled: j || !h,
                "data-lobby-direct": !0,
                children: E,
              }),
            ],
          })
        : null,
      v
        ? e.jsx("p", { className: "lobby-error", role: "alert", children: v })
        : null,
      C.length > 0
        ? e.jsx("ul", {
            className: "lobby-rows",
            "aria-label": "Your class is in",
            children: C.map((o) =>
              e.jsx(
                V,
                { lobby: o, action: "Open", onOpen: () => a(U(o.id)) },
                o.id,
              ),
            ),
          })
        : null,
      S.length > 0
        ? e.jsx("ul", {
            className: "lobby-rows",
            "aria-label": "Rooms",
            children: S.map((o) =>
              e.jsx(
                V,
                {
                  lobby: o,
                  action: n ? "Watch" : "Play",
                  onOpen: () =>
                    void k({
                      action: "open",
                      game: o.game,
                      ...(n ? { year: o.yearGroup } : {}),
                    }),
                },
                o.id,
              ),
            ),
          })
        : null,
    ],
  });
}
const ge = 5e3,
  _ = "everyone",
  q = [...D[0].sets].sort(
    (s, l) =>
      Number(s.id.startsWith("paper")) - Number(l.id.startsWith("paper")),
  );
function ke({ pupil: s, instance: l }) {
  return e.jsxs("span", {
    className: "takeover-pupil",
    "data-takeover-online": s.name,
    children: [
      X(s.avatar)
        ? e.jsx("span", {
            className: "room-mark",
            "aria-hidden": "true",
            children: e.jsx(Z, {
              avatar: s.avatar,
              profileName: ee(s.avatar),
              instanceId: `takeover${l}${s.key}`,
            }),
          })
        : null,
      e.jsx("span", { children: s.name }),
    ],
  });
}
function Ne(s, l) {
  if (!s.roundSeconds) return "";
  const a = Math.max(
      0,
      Date.parse(s.roundStartedAt) + s.roundSeconds * 1e3 - l,
    ),
    n = Math.floor(a / 6e4),
    c = Math.floor((a % 6e4) / 1e3);
  return `${n}:${String(c).padStart(2, "0")} left`;
}
function we(s) {
  return q.find((l) => l.id === s)?.title ?? s;
}
function Se() {
  const s = G(),
    l = F(),
    a = $(),
    [n, c] = r.useState(null),
    [x, h] = r.useState(null),
    [m, i] = r.useState(0);
  return (
    r.useEffect(() => {
      if (!s || !l) return;
      let f = !1;
      async function j() {
        if (document.visibilityState === "hidden") return;
        const v = await a.liveBoard();
        f || (v.ok ? (c(v.data), h(null)) : h(v.message));
      }
      j();
      const y = window.setInterval(() => void j(), ge);
      return () => {
        ((f = !0), window.clearInterval(y));
      };
    }, [s, l, a, m]),
    { board: n, error: x, reload: () => i((f) => f + 1) }
  );
}
function Ce() {
  const s = G(),
    l = $(),
    { board: a, error: n, reload: c } = Se(),
    [x, h] = r.useState(q[0].id),
    [m, i] = r.useState(_),
    [f, j] = r.useState([]),
    [y, v] = r.useState(!1),
    [w, k] = r.useState(null),
    S = Date.now(),
    C = r.useMemo(() => a ?? [], [a]),
    N = (t) => t.status?.online ?? [],
    R = C.filter((t) => N(t).length > 0),
    E = m === _ ? null : (C.find((t) => t.classId === m) ?? null),
    L = C.filter((t) => t.status?.takeover);
  if (
    (r.useEffect(() => {
      m !== _ && a && !a.some((t) => t.classId === m) && i(_);
    }, [a, m]),
    !s)
  )
    return null;
  const o = E
      ? (() => {
          const t = N(E).filter((b) => !f.includes(b.key));
          return [
            {
              item: E,
              pupils: f.length ? t.map((b) => b.key) : void 0,
              count: t.length,
            },
          ];
        })()
      : R.map((t) => ({ item: t, pupils: void 0, count: N(t).length })),
    d = o.reduce((t, b) => t + b.count, 0),
    g = te(window.location.search),
    p = d
      ? `Take over ${d} ${d === 1 ? "screen" : "screens"}: ${x} crossword on ${g}`
      : "Nobody online to take over";
  async function O() {
    (v(!0), k(null));
    const t = await Promise.all(
      o
        .filter((u) => u.count > 0)
        .map((u) => l.liveStart(u.item.classId, x, u.pupils)),
    );
    v(!1);
    const b = t.find((u) => !u.ok);
    (b && !b.ok && k(b.message), j([]), c());
  }
  async function P(t) {
    (v(!0), k(null));
    const b = await Promise.all(t.map((T) => l.liveEnd(T)));
    v(!1);
    const u = b.find((T) => !T.ok);
    (u && !u.ok && k(u.message), c());
  }
  const I = C.reduce((t, b) => t + N(b).length, 0);
  return e.jsxs("section", {
    className: "lobby-together takeover",
    "aria-labelledby": "takeover-title",
    "data-takeover": !0,
    children: [
      e.jsxs("div", {
        className: "lobby-heading",
        children: [
          e.jsx("h2", {
            id: "takeover-title",
            className: "room-section-title",
            children: "Take over screens",
          }),
          e.jsxs("span", {
            className: "lobby-online",
            "data-takeover-online-total": I,
            children: [I, " online"],
          }),
        ],
      }),
      n && !a
        ? e.jsx("p", { className: "lobby-error", role: "alert", children: n })
        : a
          ? e.jsxs(e.Fragment, {
              children: [
                L.length
                  ? e.jsxs("ul", {
                      className: "lobby-rows",
                      "aria-label": "Taken over now",
                      "data-takeover-running": !0,
                      children: [
                        L.map((t) =>
                          e.jsxs(
                            "li",
                            {
                              className: "lobby-row",
                              "data-takeover-class": t.classCode,
                              children: [
                                e.jsxs("span", {
                                  className: "lobby-row-main",
                                  children: [
                                    e.jsxs("span", {
                                      className: "lobby-row-title",
                                      children: [
                                        t.classCode,
                                        " · ",
                                        we(t.status.topic),
                                      ],
                                    }),
                                    e.jsxs("span", {
                                      className: "lobby-row-meta",
                                      children: [
                                        t.status.inNow.length,
                                        " in",
                                        t.status.invited.length
                                          ? ` of ${t.status.invited.length} picked`
                                          : "",
                                        " · ",
                                        Ne(t.status, S),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  className: "room-secondary",
                                  disabled: y,
                                  onClick: () => void P([t.classId]),
                                  "data-takeover-end": t.classCode,
                                  children: "End",
                                }),
                              ],
                            },
                            t.classId,
                          ),
                        ),
                        L.length > 1
                          ? e.jsx("li", {
                              children: e.jsx("button", {
                                type: "button",
                                className: "room-secondary",
                                disabled: y,
                                onClick: () => void P(L.map((t) => t.classId)),
                                "data-takeover-end-all": !0,
                                children: "End all",
                              }),
                            })
                          : null,
                      ],
                    })
                  : null,
                e.jsxs("form", {
                  className: "lobby-start",
                  onSubmit: (t) => {
                    (t.preventDefault(), O());
                  },
                  children: [
                    e.jsxs("label", {
                      className: "lobby-field",
                      children: [
                        e.jsx("span", {
                          className: "lobby-field-label",
                          children: "Topic",
                        }),
                        e.jsx("select", {
                          className: "lobby-select",
                          value: x,
                          onChange: (t) => h(t.target.value),
                          "data-takeover-topic": !0,
                          children: q.map((t) =>
                            e.jsx(
                              "option",
                              { value: t.id, children: t.title },
                              t.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                    e.jsxs("label", {
                      className: "lobby-field",
                      children: [
                        e.jsx("span", {
                          className: "lobby-field-label",
                          children: "Who",
                        }),
                        e.jsxs("select", {
                          className: "lobby-select",
                          value: m,
                          onChange: (t) => {
                            (i(t.target.value), j([]));
                          },
                          "data-takeover-who": !0,
                          children: [
                            e.jsx("option", {
                              value: _,
                              children: "Everyone online",
                            }),
                            C.map((t) =>
                              e.jsxs(
                                "option",
                                {
                                  value: t.classId,
                                  children: [
                                    t.classCode,
                                    " (",
                                    N(t).length,
                                    " online)",
                                  ],
                                },
                                t.classId,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                    E
                      ? N(E).length
                        ? e.jsxs("fieldset", {
                            className: "lobby-ticks",
                            "data-takeover-ticks": !0,
                            children: [
                              e.jsx("legend", {
                                className: "sr-only",
                                children: "Pupils to take over",
                              }),
                              N(E).map((t) =>
                                e.jsxs(
                                  "label",
                                  {
                                    className:
                                      "lobby-roster-player lobby-roster-tick",
                                    "data-out": f.includes(t.key)
                                      ? "true"
                                      : void 0,
                                    children: [
                                      e.jsx("input", {
                                        type: "checkbox",
                                        checked: !f.includes(t.key),
                                        onChange: (b) =>
                                          j((u) =>
                                            b.target.checked
                                              ? u.filter((T) => T !== t.key)
                                              : [...u, t.key],
                                          ),
                                        "data-takeover-tick": t.name,
                                      }),
                                      e.jsx("span", { children: t.name }),
                                    ],
                                  },
                                  t.key,
                                ),
                              ),
                            ],
                          })
                        : e.jsxs("p", {
                            className: "lobby-status takeover-wide",
                            children: [
                              "Nobody in ",
                              E.classCode,
                              " is online.",
                            ],
                          })
                      : R.length
                        ? e.jsx("ul", {
                            className: "takeover-classes",
                            "aria-label": "Online now",
                            children: R.map((t) =>
                              e.jsxs(
                                "li",
                                {
                                  className: "takeover-class",
                                  "data-takeover-online-class": t.classCode,
                                  children: [
                                    e.jsx("span", {
                                      className: "lobby-row-title",
                                      children: t.classCode,
                                    }),
                                    e.jsx("span", {
                                      className: "takeover-pupils",
                                      children: N(t).map((b) =>
                                        e.jsx(
                                          ke,
                                          { pupil: b, instance: t.classId },
                                          b.key,
                                        ),
                                      ),
                                    }),
                                  ],
                                },
                                t.classId,
                              ),
                            ),
                          })
                        : e.jsx("p", {
                            className: "lobby-status takeover-wide",
                            children: "Nobody is online.",
                          }),
                    e.jsx("button", {
                      type: "submit",
                      className: "room-primary",
                      disabled: y || d === 0,
                      "data-takeover-start": !0,
                      children: p,
                    }),
                  ],
                }),
                w
                  ? e.jsx("p", {
                      className: "lobby-error",
                      role: "alert",
                      children: w,
                    })
                  : null,
              ],
            })
          : e.jsx("p", { className: "lobby-status", children: "Loading…" }),
    ],
  });
}
const Ee = 4;
function Ie({ status: s }) {
  const l = r.useId();
  return s.inNow.length
    ? e.jsx("span", {
        className: "lobby-in-now-marks",
        "data-live-in-now": s.inNow.map((a) => a.name).join(", "),
        children: s.inNow
          .slice(0, Ee)
          .map((a) =>
            e.jsxs(
              "span",
              {
                className: "room-mark",
                title: a.name,
                children: [
                  X(a.avatar)
                    ? e.jsx(Z, {
                        avatar: a.avatar,
                        profileName: ee(a.avatar),
                        instanceId: `live${l}${a.key}`,
                      })
                    : null,
                  e.jsx("span", { className: "sr-only", children: a.name }),
                ],
              },
              a.key,
            ),
          ),
      })
    : null;
}
const Le = 5e3;
function J(s) {
  const l = F(),
    a = G(),
    n = $(),
    [c, x] = r.useState(null);
  return (
    r.useEffect(() => {
      if (!l || a) return;
      let h = !1;
      async function m() {
        if (document.visibilityState === "hidden") return;
        const f = await n.liveStatus(void 0, s);
        h || x(f.ok ? f.data.status : null);
      }
      m();
      const i = window.setInterval(() => void m(), Le);
      return () => {
        ((h = !0), window.clearInterval(i));
      };
    }, [l, a, n, s]),
    l && !a ? c : null
  );
}
const Re = ["crossword", "code-climb"],
  Oe = 5e3;
new TextEncoder();
const K = [500, 1e3, 2e3, 4e3, 8e3],
  z = "dropped";
function Te(s, l, a = {}) {
  const [n, c] = r.useState(null),
    [x, h] = r.useState(null),
    [m, i] = r.useState(null),
    [f, j] = r.useState(!1),
    y = r.useRef(null),
    v = r.useRef(null),
    w = r.useRef(new Map()),
    k = r.useRef([]),
    S = r.useRef(0),
    C = a.socket ?? ((o) => new WebSocket(o)),
    N = r.useRef(C);
  N.current = C;
  const R = r.useCallback((o) => {
      const d = y.current;
      if (!d || d.readyState !== WebSocket.OPEN) return null;
      S.current += 1;
      const g = S.current;
      return new Promise((p) => {
        (w.current.set(g, { resolve: p }),
          d.send(JSON.stringify({ ...o, ref: g })));
      });
    }, []),
    E = r.useCallback(
      async (o, d) => {
        const g = R(o);
        if (!g) {
          k.current.push({ message: o, resolve: d });
          return;
        }
        const p = await g;
        if (!p.ok && p.message === z) {
          k.current.push({ message: o, resolve: d });
          return;
        }
        if (!p.ok) {
          (i(p.message ?? "That was not allowed."), d(null));
          return;
        }
        i(null);
        const O = v.current;
        d(
          O
            ? {
                ...O,
                ...(p.correct === void 0 ? {} : { correct: p.correct }),
                ...(p.near ? { near: p.near } : {}),
              }
            : null,
        );
      },
      [R],
    );
  r.useEffect(() => {
    if (!l) return;
    let o = !1,
      d = 0,
      g,
      p;
    async function O() {
      if (o) return;
      const I = await s.live(a.classId, a.game);
      if (o) return;
      if (!I.ok) {
        if (I.status === 0 || I.status >= 500) return P();
        i(I.message);
        return;
      }
      h(I.data.classCode);
      const t = N.current(I.data.socket);
      ((y.current = t),
        (t.onopen = () => {
          ((d = 0),
            j(!1),
            (p = window.setInterval(() => {
              document.visibilityState !== "hidden" &&
                t.readyState === WebSocket.OPEN &&
                t.send("ping");
            }, Oe)));
        }),
        (t.onmessage = (b) => {
          if (b.data === "pong") return;
          let u;
          try {
            u = JSON.parse(String(b.data));
          } catch {
            return;
          }
          if (u.type === "snapshot") {
            ((v.current = u.snapshot), c(u.snapshot), i(null));
            const oe = k.current.splice(0);
            for (const M of oe)
              M.keep && !M.keep(u.snapshot)
                ? M.resolve(null)
                : E(M.message, M.resolve);
            return;
          }
          const T = w.current.get(u.ref);
          (w.current.delete(u.ref),
            u.receipt && s.liveRecord(u.receipt),
            T?.resolve(u));
        }),
        (t.onclose = () => {
          (window.clearInterval(p), y.current === t && (y.current = null));
          for (const [b, u] of w.current)
            (w.current.delete(b), u.resolve({ ok: !1, message: z }));
          o || P();
        }));
    }
    function P() {
      if (o) return;
      j(v.current !== null);
      const I = K[Math.min(d, K.length - 1)];
      ((d += 1), (g = window.setTimeout(() => void O(), I)));
    }
    return (
      O(),
      () => {
        ((o = !0),
          window.clearTimeout(g),
          window.clearInterval(p),
          y.current?.close(1e3, "left"),
          (y.current = null));
      }
    );
  }, [l, s, a.classId, a.game, E]);
  const L = r.useCallback(
    (o, d = {}) => {
      if (o.action !== "move" && o.action !== "next")
        return Promise.resolve(v.current);
      const g =
        o.action === "move"
          ? { type: "move", move: o.move }
          : { type: "next", options: o.options };
      return new Promise((p) => {
        if (!y.current || y.current.readyState !== WebSocket.OPEN) {
          (j(!0),
            k.current.push({
              message: g,
              ...(d.keep ? { keep: d.keep } : {}),
              resolve: p,
            }));
          return;
        }
        E(g, p);
      });
    },
    [E],
  );
  return { snapshot: n, classCode: x, error: m, reconnecting: f, send: L };
}
function Pe(s, l) {
  if (
    !l ||
    s.topic === l ||
    s.startedBy !== "class" ||
    s.status !== "playing" ||
    !W(s.game).sets.some((c) => c.id === l)
  )
    return null;
  const a = s.players.filter((c) => s.online.includes(c.key));
  return a.length === 1 && a[0].key === s.you ? l : null;
}
const Me = { crossword: "Crossword", "code-climb": "Code Climb" };
function _e(s, l) {
  (r.useEffect(() => {
    const a = new URL(window.location.href),
      n = a.searchParams.get(Y);
    n &&
      (re(n, window.location.origin) && ce(n),
      a.searchParams.delete(Y),
      window.history.replaceState(window.history.state, "", a.toString()));
  }, []),
    r.useEffect(() => {
      if (!l || !ie()) return;
      let a = !1,
        n;
      const c = async () => {
          if (a || n !== void 0) return;
          const h = await s.takeover();
          a ||
            !h.ok ||
            ue(h.data) ||
            (n = window.setTimeout(() => {
              const m = me();
              m && window.location.assign(m);
            }, xe));
        },
        x = window.setInterval(() => void c(), de);
      return () => {
        ((a = !0),
          window.clearInterval(x),
          n !== void 0 && window.clearTimeout(n));
      };
    }, [l, s]));
}
function $e({ snapshot: s, send: l }) {
  if (s.startedBy !== "class" || s.status !== "playing") return null;
  const a = W(s.game),
    n = s.game === "code-climb" ? "Theme" : "Topic";
  return e.jsxs("label", {
    className: "lobby-solo-topic",
    children: [
      e.jsx("span", { className: "sr-only", children: n }),
      e.jsx("select", {
        className: "lobby-select",
        value: s.topic,
        onChange: (c) =>
          void l({
            action: "next",
            id: s.id,
            options: a.options(c.target.value),
          }),
        "data-lobby-solo-topic": !0,
        children: a.sets.map((c) =>
          e.jsx("option", { value: c.id, children: c.title }, c.id),
        ),
      }),
    ],
  });
}
function Ge({ snapshot: s, send: l }) {
  const a = s.players.filter((c) => s.online.includes(c.key)),
    n = a.length === 1 && a[0].key === s.you;
  return e.jsxs("div", {
    className: "lobby-in-now",
    "data-lobby-in-now": a.length,
    "data-lobby-solo": n ? "true" : void 0,
    children: [
      e.jsx(ve, { players: s.players, you: s.you, online: s.online }),
      n
        ? e.jsx("span", {
            className: "lobby-pill",
            "data-lobby-solo-pill": !0,
            children: "Solo",
          })
        : null,
      n ? e.jsx($e, { snapshot: s, send: l }) : null,
    ],
  });
}
function Ae({ classes: s }) {
  const [l] = Q(),
    a = l.get("sql");
  return e.jsx("ul", {
    className: "lobby-rows",
    "aria-label": "Classes",
    children: s.map((n) =>
      e.jsxs(
        "li",
        {
          className: "lobby-row",
          children: [
            e.jsx("span", {
              className: "lobby-row-main",
              children: e.jsx("span", {
                className: "lobby-row-title",
                children: n.code,
              }),
            }),
            e.jsx(A, {
              className: "room-primary",
              to: `?${new URLSearchParams({ classId: n.id, ...(a ? { sql: a } : {}) }).toString()}`,
              "data-live-watch": n.code,
              children: "Watch",
            }),
          ],
        },
        n.id,
      ),
    ),
  });
}
function Os() {
  return e.jsx(ae, { game: "crossword" });
}
function Ts() {
  return e.jsx(ae, { game: "code-climb" });
}
function ae({ game: s }) {
  const l = F(),
    a = G(),
    n = $(),
    [c] = Q(),
    x = a ? (c.get("classId") ?? void 0) : void 0,
    h = se(),
    m = Te(n, l && (!a || !!x), { game: s, ...(x ? { classId: x } : {}) }),
    { snapshot: i, error: f, classCode: j } = m;
  _e(n, s === "crossword" && l && !a);
  const y = a ? null : c.get(le),
    v = r.useRef(!1);
  r.useEffect(() => {
    if (!i || v.current) return;
    const C = Pe(i, y);
    C &&
      ((v.current = !0),
      m.send({ action: "next", id: i.id, options: W(i.game).options(C) }));
  }, [m, i, y]);
  const w = c.get("sql"),
    k = w ? `${H}?sql=${encodeURIComponent(w)}` : H,
    S = Me[s];
  return (
    r.useEffect(() => {
      document.title = `${j ? `${j} ${S}` : S} | comp.school`;
    }, [j, S]),
    l
      ? a && !x
        ? e.jsxs("div", {
            className: "room",
            "data-room-view": "live-classes",
            children: [
              e.jsx("h1", { className: "room-title", children: S }),
              h?.classes
                ? e.jsx(Ae, { classes: h.classes })
                : e.jsx("p", {
                    className: "lobby-status",
                    children: "Loading…",
                  }),
            ],
          })
        : i
          ? e.jsx("div", {
              "data-live-game": s,
              "data-live-class": i.classCode,
              "data-live-round": i.round,
              "data-live-topic": i.topic,
              children: e.jsx(ye, {
                connection: m,
                id: i.id,
                players: e.jsx(Ge, { snapshot: i, send: m.send }),
              }),
            })
          : e.jsxs("div", {
              className: "room",
              "data-room-view": "lobby-loading",
              children: [
                e.jsx("h1", { className: "sr-only", children: S }),
                f
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("p", {
                          className: "lobby-error",
                          role: "alert",
                          children: f,
                        }),
                        e.jsx(A, {
                          to: k,
                          className: "room-secondary",
                          children: "Multiplayer",
                        }),
                      ],
                    })
                  : e.jsx("p", {
                      className: "lobby-status",
                      children: "Loading…",
                    }),
              ],
            })
      : e.jsxs("div", {
          className: "room",
          "data-room-view": "live-signed-out",
          children: [
            e.jsx("h1", { className: "room-title", children: S }),
            e.jsx("p", {
              className: "lobby-status",
              children: "Sign in to play with your class.",
            }),
            e.jsx(A, {
              to: k,
              className: "room-secondary",
              children: "Multiplayer",
            }),
          ],
        })
  );
}
const Be = [
    { route: pe, title: "Crossword", slug: "crossword", Icon: be },
    { route: fe, title: "Code Climb", slug: "code-climb", Icon: he },
  ],
  De = new Set(D.map((s) => s.id)),
  We = new Set(Re);
function Ps() {
  const s = se(),
    l = J("crossword"),
    a = J("code-climb");
  return e.jsxs("div", {
    className: "room",
    "data-room-view": "hub",
    children: [
      e.jsx("h1", { className: "room-title", children: "Multiplayer" }),
      e.jsx("ul", {
        className: "room-games",
        "aria-label": "Games",
        children: Be.map((n) => {
          const c =
            n.slug === "crossword" ? l : n.slug === "code-climb" ? a : null;
          return e.jsx(
            "li",
            {
              children: e.jsxs(A, {
                to: n.route,
                className: "room-game-card",
                "data-room-game": n.slug,
                children: [
                  e.jsx("span", {
                    className: "room-game-icon",
                    "aria-hidden": "true",
                    children: e.jsx(n.Icon, {}),
                  }),
                  e.jsxs("span", {
                    className: "room-game-text",
                    children: [
                      e.jsx("span", {
                        className: "room-game-title",
                        children: n.title,
                      }),
                      c
                        ? e.jsxs("span", {
                            className: "room-game-online",
                            "data-room-game-online": n.slug,
                            children: [
                              e.jsx(Ie, { status: c }),
                              "(",
                              B(c.inNow.length),
                              ")",
                            ],
                          })
                        : s && De.has(n.slug) && !We.has(n.slug)
                          ? e.jsxs("span", {
                              className: "room-game-online",
                              "data-room-game-online": n.slug,
                              children: [
                                "(",
                                B(s.online.games[n.slug] ?? 0),
                                ")",
                              ],
                            })
                          : null,
                    ],
                  }),
                ],
              }),
            },
            n.slug,
          );
        }),
      }),
      e.jsx(Ce, {}),
      e.jsx(je, { overview: s }),
    ],
  });
}
export { Ts as CodeClimbGame, Os as CrosswordGame, Ps as GamesRoom };
