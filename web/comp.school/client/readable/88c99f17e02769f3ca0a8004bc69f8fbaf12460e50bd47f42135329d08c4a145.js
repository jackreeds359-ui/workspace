(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const p of document.querySelectorAll('link[rel="modulepreload"]')) d(p);
  new MutationObserver((p) => {
    for (const y of p)
      if (y.type === "childList")
        for (const S of y.addedNodes)
          S.tagName === "LINK" && S.rel === "modulepreload" && d(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(p) {
    const y = {};
    return (
      p.integrity && (y.integrity = p.integrity),
      p.referrerPolicy && (y.referrerPolicy = p.referrerPolicy),
      p.crossOrigin === "use-credentials"
        ? (y.credentials = "include")
        : p.crossOrigin === "anonymous"
          ? (y.credentials = "omit")
          : (y.credentials = "same-origin"),
      y
    );
  }
  function d(p) {
    if (p.ep) return;
    p.ep = !0;
    const y = l(p);
    fetch(p.href, y);
  }
})();
function kd(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var na = { exports: {} },
  Hr = {},
  ra = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nc;
function Qp() {
  if (Nc) return oe;
  Nc = 1;
  var s = Symbol.for("react.element"),
    c = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    p = Symbol.for("react.profiler"),
    y = Symbol.for("react.provider"),
    S = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    k = Symbol.for("react.suspense"),
    V = Symbol.for("react.memo"),
    T = Symbol.for("react.lazy"),
    K = Symbol.iterator;
  function D(g) {
    return g === null || typeof g != "object"
      ? null
      : ((g = (K && g[K]) || g["@@iterator"]),
        typeof g == "function" ? g : null);
  }
  var X = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    J = Object.assign,
    O = {};
  function W(g, C, Y) {
    ((this.props = g),
      (this.context = C),
      (this.refs = O),
      (this.updater = Y || X));
  }
  ((W.prototype.isReactComponent = {}),
    (W.prototype.setState = function (g, C) {
      if (typeof g != "object" && typeof g != "function" && g != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, g, C, "setState");
    }),
    (W.prototype.forceUpdate = function (g) {
      this.updater.enqueueForceUpdate(this, g, "forceUpdate");
    }));
  function G() {}
  G.prototype = W.prototype;
  function se(g, C, Y) {
    ((this.props = g),
      (this.context = C),
      (this.refs = O),
      (this.updater = Y || X));
  }
  var ke = (se.prototype = new G());
  ((ke.constructor = se), J(ke, W.prototype), (ke.isPureReactComponent = !0));
  var ie = Array.isArray,
    Ae = Object.prototype.hasOwnProperty,
    R = { current: null },
    B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function re(g, C, Y) {
    var ne,
      ae = {},
      ue = null,
      ve = null;
    if (C != null)
      for (ne in (C.ref !== void 0 && (ve = C.ref),
      C.key !== void 0 && (ue = "" + C.key),
      C))
        Ae.call(C, ne) && !B.hasOwnProperty(ne) && (ae[ne] = C[ne]);
    var ce = arguments.length - 2;
    if (ce === 1) ae.children = Y;
    else if (1 < ce) {
      for (var q = Array(ce), we = 0; we < ce; we++) q[we] = arguments[we + 2];
      ae.children = q;
    }
    if (g && g.defaultProps)
      for (ne in ((ce = g.defaultProps), ce))
        ae[ne] === void 0 && (ae[ne] = ce[ne]);
    return {
      $$typeof: s,
      type: g,
      key: ue,
      ref: ve,
      props: ae,
      _owner: R.current,
    };
  }
  function pe(g, C) {
    return {
      $$typeof: s,
      type: g.type,
      key: C,
      ref: g.ref,
      props: g.props,
      _owner: g._owner,
    };
  }
  function de(g) {
    return typeof g == "object" && g !== null && g.$$typeof === s;
  }
  function te(g) {
    var C = { "=": "=0", ":": "=2" };
    return (
      "$" +
      g.replace(/[=:]/g, function (Y) {
        return C[Y];
      })
    );
  }
  var Ce = /\/+/g;
  function he(g, C) {
    return typeof g == "object" && g !== null && g.key != null
      ? te("" + g.key)
      : C.toString(36);
  }
  function be(g, C, Y, ne, ae) {
    var ue = typeof g;
    (ue === "undefined" || ue === "boolean") && (g = null);
    var ve = !1;
    if (g === null) ve = !0;
    else
      switch (ue) {
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case s:
            case c:
              ve = !0;
          }
      }
    if (ve)
      return (
        (ve = g),
        (ae = ae(ve)),
        (g = ne === "" ? "." + he(ve, 0) : ne),
        ie(ae)
          ? ((Y = ""),
            g != null && (Y = g.replace(Ce, "$&/") + "/"),
            be(ae, C, Y, "", function (we) {
              return we;
            }))
          : ae != null &&
            (de(ae) &&
              (ae = pe(
                ae,
                Y +
                  (!ae.key || (ve && ve.key === ae.key)
                    ? ""
                    : ("" + ae.key).replace(Ce, "$&/") + "/") +
                  g,
              )),
            C.push(ae)),
        1
      );
    if (((ve = 0), (ne = ne === "" ? "." : ne + ":"), ie(g)))
      for (var ce = 0; ce < g.length; ce++) {
        ue = g[ce];
        var q = ne + he(ue, ce);
        ve += be(ue, C, Y, q, ae);
      }
    else if (((q = D(g)), typeof q == "function"))
      for (g = q.call(g), ce = 0; !(ue = g.next()).done;)
        ((ue = ue.value), (q = ne + he(ue, ce++)), (ve += be(ue, C, Y, q, ae)));
    else if (ue === "object")
      throw (
        (C = String(g)),
        Error(
          "Objects are not valid as a React child (found: " +
            (C === "[object Object]"
              ? "object with keys {" + Object.keys(g).join(", ") + "}"
              : C) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return ve;
  }
  function Fe(g, C, Y) {
    if (g == null) return g;
    var ne = [],
      ae = 0;
    return (
      be(g, ne, "", "", function (ue) {
        return C.call(Y, ue, ae++);
      }),
      ne
    );
  }
  function Me(g) {
    if (g._status === -1) {
      var C = g._result;
      ((C = C()),
        C.then(
          function (Y) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 1), (g._result = Y));
          },
          function (Y) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 2), (g._result = Y));
          },
        ),
        g._status === -1 && ((g._status = 0), (g._result = C)));
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var ye = { current: null },
    M = { transition: null },
    H = {
      ReactCurrentDispatcher: ye,
      ReactCurrentBatchConfig: M,
      ReactCurrentOwner: R,
    };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (oe.Children = {
      map: Fe,
      forEach: function (g, C, Y) {
        Fe(
          g,
          function () {
            C.apply(this, arguments);
          },
          Y,
        );
      },
      count: function (g) {
        var C = 0;
        return (
          Fe(g, function () {
            C++;
          }),
          C
        );
      },
      toArray: function (g) {
        return (
          Fe(g, function (C) {
            return C;
          }) || []
        );
      },
      only: function (g) {
        if (!de(g))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return g;
      },
    }),
    (oe.Component = W),
    (oe.Fragment = l),
    (oe.Profiler = p),
    (oe.PureComponent = se),
    (oe.StrictMode = d),
    (oe.Suspense = k),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H),
    (oe.act = _),
    (oe.cloneElement = function (g, C, Y) {
      if (g == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            g +
            ".",
        );
      var ne = J({}, g.props),
        ae = g.key,
        ue = g.ref,
        ve = g._owner;
      if (C != null) {
        if (
          (C.ref !== void 0 && ((ue = C.ref), (ve = R.current)),
          C.key !== void 0 && (ae = "" + C.key),
          g.type && g.type.defaultProps)
        )
          var ce = g.type.defaultProps;
        for (q in C)
          Ae.call(C, q) &&
            !B.hasOwnProperty(q) &&
            (ne[q] = C[q] === void 0 && ce !== void 0 ? ce[q] : C[q]);
      }
      var q = arguments.length - 2;
      if (q === 1) ne.children = Y;
      else if (1 < q) {
        ce = Array(q);
        for (var we = 0; we < q; we++) ce[we] = arguments[we + 2];
        ne.children = ce;
      }
      return {
        $$typeof: s,
        type: g.type,
        key: ae,
        ref: ue,
        props: ne,
        _owner: ve,
      };
    }),
    (oe.createContext = function (g) {
      return (
        (g = {
          $$typeof: S,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (g.Provider = { $$typeof: y, _context: g }),
        (g.Consumer = g)
      );
    }),
    (oe.createElement = re),
    (oe.createFactory = function (g) {
      var C = re.bind(null, g);
      return ((C.type = g), C);
    }),
    (oe.createRef = function () {
      return { current: null };
    }),
    (oe.forwardRef = function (g) {
      return { $$typeof: b, render: g };
    }),
    (oe.isValidElement = de),
    (oe.lazy = function (g) {
      return { $$typeof: T, _payload: { _status: -1, _result: g }, _init: Me };
    }),
    (oe.memo = function (g, C) {
      return { $$typeof: V, type: g, compare: C === void 0 ? null : C };
    }),
    (oe.startTransition = function (g) {
      var C = M.transition;
      M.transition = {};
      try {
        g();
      } finally {
        M.transition = C;
      }
    }),
    (oe.unstable_act = _),
    (oe.useCallback = function (g, C) {
      return ye.current.useCallback(g, C);
    }),
    (oe.useContext = function (g) {
      return ye.current.useContext(g);
    }),
    (oe.useDebugValue = function () {}),
    (oe.useDeferredValue = function (g) {
      return ye.current.useDeferredValue(g);
    }),
    (oe.useEffect = function (g, C) {
      return ye.current.useEffect(g, C);
    }),
    (oe.useId = function () {
      return ye.current.useId();
    }),
    (oe.useImperativeHandle = function (g, C, Y) {
      return ye.current.useImperativeHandle(g, C, Y);
    }),
    (oe.useInsertionEffect = function (g, C) {
      return ye.current.useInsertionEffect(g, C);
    }),
    (oe.useLayoutEffect = function (g, C) {
      return ye.current.useLayoutEffect(g, C);
    }),
    (oe.useMemo = function (g, C) {
      return ye.current.useMemo(g, C);
    }),
    (oe.useReducer = function (g, C, Y) {
      return ye.current.useReducer(g, C, Y);
    }),
    (oe.useRef = function (g) {
      return ye.current.useRef(g);
    }),
    (oe.useState = function (g) {
      return ye.current.useState(g);
    }),
    (oe.useSyncExternalStore = function (g, C, Y) {
      return ye.current.useSyncExternalStore(g, C, Y);
    }),
    (oe.useTransition = function () {
      return ye.current.useTransition();
    }),
    (oe.version = "18.3.1"),
    oe
  );
}
var Dc;
function Ma() {
  return (Dc || ((Dc = 1), (ra.exports = Qp())), ra.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uc;
function Zp() {
  if (Uc) return Hr;
  Uc = 1;
  var s = Ma(),
    c = Symbol.for("react.element"),
    l = Symbol.for("react.fragment"),
    d = Object.prototype.hasOwnProperty,
    p = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(b, k, V) {
    var T,
      K = {},
      D = null,
      X = null;
    (V !== void 0 && (D = "" + V),
      k.key !== void 0 && (D = "" + k.key),
      k.ref !== void 0 && (X = k.ref));
    for (T in k) d.call(k, T) && !y.hasOwnProperty(T) && (K[T] = k[T]);
    if (b && b.defaultProps)
      for (T in ((k = b.defaultProps), k)) K[T] === void 0 && (K[T] = k[T]);
    return {
      $$typeof: c,
      type: b,
      key: D,
      ref: X,
      props: K,
      _owner: p.current,
    };
  }
  return ((Hr.Fragment = l), (Hr.jsx = S), (Hr.jsxs = S), Hr);
}
var Fc;
function Yp() {
  return (Fc || ((Fc = 1), (na.exports = Zp())), na.exports);
}
var a = Yp(),
  N = Ma();
const qp = kd(N);
var ri = {},
  oa = { exports: {} },
  st = {},
  ia = { exports: {} },
  sa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $c;
function Xp() {
  return (
    $c ||
      (($c = 1),
      (function (s) {
        function c(M, H) {
          var _ = M.length;
          M.push(H);
          e: for (; 0 < _;) {
            var g = (_ - 1) >>> 1,
              C = M[g];
            if (0 < p(C, H)) ((M[g] = H), (M[_] = C), (_ = g));
            else break e;
          }
        }
        function l(M) {
          return M.length === 0 ? null : M[0];
        }
        function d(M) {
          if (M.length === 0) return null;
          var H = M[0],
            _ = M.pop();
          if (_ !== H) {
            M[0] = _;
            e: for (var g = 0, C = M.length, Y = C >>> 1; g < Y;) {
              var ne = 2 * (g + 1) - 1,
                ae = M[ne],
                ue = ne + 1,
                ve = M[ue];
              if (0 > p(ae, _))
                ue < C && 0 > p(ve, ae)
                  ? ((M[g] = ve), (M[ue] = _), (g = ue))
                  : ((M[g] = ae), (M[ne] = _), (g = ne));
              else if (ue < C && 0 > p(ve, _))
                ((M[g] = ve), (M[ue] = _), (g = ue));
              else break e;
            }
          }
          return H;
        }
        function p(M, H) {
          var _ = M.sortIndex - H.sortIndex;
          return _ !== 0 ? _ : M.id - H.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var y = performance;
          s.unstable_now = function () {
            return y.now();
          };
        } else {
          var S = Date,
            b = S.now();
          s.unstable_now = function () {
            return S.now() - b;
          };
        }
        var k = [],
          V = [],
          T = 1,
          K = null,
          D = 3,
          X = !1,
          J = !1,
          O = !1,
          W = typeof setTimeout == "function" ? setTimeout : null,
          G = typeof clearTimeout == "function" ? clearTimeout : null,
          se = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ke(M) {
          for (var H = l(V); H !== null;) {
            if (H.callback === null) d(V);
            else if (H.startTime <= M)
              (d(V), (H.sortIndex = H.expirationTime), c(k, H));
            else break;
            H = l(V);
          }
        }
        function ie(M) {
          if (((O = !1), ke(M), !J))
            if (l(k) !== null) ((J = !0), Me(Ae));
            else {
              var H = l(V);
              H !== null && ye(ie, H.startTime - M);
            }
        }
        function Ae(M, H) {
          ((J = !1), O && ((O = !1), G(re), (re = -1)), (X = !0));
          var _ = D;
          try {
            for (
              ke(H), K = l(k);
              K !== null && (!(K.expirationTime > H) || (M && !te()));
            ) {
              var g = K.callback;
              if (typeof g == "function") {
                ((K.callback = null), (D = K.priorityLevel));
                var C = g(K.expirationTime <= H);
                ((H = s.unstable_now()),
                  typeof C == "function"
                    ? (K.callback = C)
                    : K === l(k) && d(k),
                  ke(H));
              } else d(k);
              K = l(k);
            }
            if (K !== null) var Y = !0;
            else {
              var ne = l(V);
              (ne !== null && ye(ie, ne.startTime - H), (Y = !1));
            }
            return Y;
          } finally {
            ((K = null), (D = _), (X = !1));
          }
        }
        var R = !1,
          B = null,
          re = -1,
          pe = 5,
          de = -1;
        function te() {
          return !(s.unstable_now() - de < pe);
        }
        function Ce() {
          if (B !== null) {
            var M = s.unstable_now();
            de = M;
            var H = !0;
            try {
              H = B(!0, M);
            } finally {
              H ? he() : ((R = !1), (B = null));
            }
          } else R = !1;
        }
        var he;
        if (typeof se == "function")
          he = function () {
            se(Ce);
          };
        else if (typeof MessageChannel < "u") {
          var be = new MessageChannel(),
            Fe = be.port2;
          ((be.port1.onmessage = Ce),
            (he = function () {
              Fe.postMessage(null);
            }));
        } else
          he = function () {
            W(Ce, 0);
          };
        function Me(M) {
          ((B = M), R || ((R = !0), he()));
        }
        function ye(M, H) {
          re = W(function () {
            M(s.unstable_now());
          }, H);
        }
        ((s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (s.unstable_continueExecution = function () {
            J || X || ((J = !0), Me(Ae));
          }),
          (s.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (pe = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return D;
          }),
          (s.unstable_getFirstCallbackNode = function () {
            return l(k);
          }),
          (s.unstable_next = function (M) {
            switch (D) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = D;
            }
            var _ = D;
            D = H;
            try {
              return M();
            } finally {
              D = _;
            }
          }),
          (s.unstable_pauseExecution = function () {}),
          (s.unstable_requestPaint = function () {}),
          (s.unstable_runWithPriority = function (M, H) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var _ = D;
            D = M;
            try {
              return H();
            } finally {
              D = _;
            }
          }),
          (s.unstable_scheduleCallback = function (M, H, _) {
            var g = s.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay),
                  (_ = typeof _ == "number" && 0 < _ ? g + _ : g))
                : (_ = g),
              M)
            ) {
              case 1:
                var C = -1;
                break;
              case 2:
                C = 250;
                break;
              case 5:
                C = 1073741823;
                break;
              case 4:
                C = 1e4;
                break;
              default:
                C = 5e3;
            }
            return (
              (C = _ + C),
              (M = {
                id: T++,
                callback: H,
                priorityLevel: M,
                startTime: _,
                expirationTime: C,
                sortIndex: -1,
              }),
              _ > g
                ? ((M.sortIndex = _),
                  c(V, M),
                  l(k) === null &&
                    M === l(V) &&
                    (O ? (G(re), (re = -1)) : (O = !0), ye(ie, _ - g)))
                : ((M.sortIndex = C), c(k, M), J || X || ((J = !0), Me(Ae))),
              M
            );
          }),
          (s.unstable_shouldYield = te),
          (s.unstable_wrapCallback = function (M) {
            var H = D;
            return function () {
              var _ = D;
              D = H;
              try {
                return M.apply(this, arguments);
              } finally {
                D = _;
              }
            };
          }));
      })(sa)),
    sa
  );
}
var Wc;
function Jp() {
  return (Wc || ((Wc = 1), (ia.exports = Xp())), ia.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bc;
function em() {
  if (Bc) return st;
  Bc = 1;
  var s = Ma(),
    c = Jp();
  function l(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var d = new Set(),
    p = {};
  function y(e, t) {
    (S(e, t), S(e + "Capture", t));
  }
  function S(e, t) {
    for (p[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var b = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    k = Object.prototype.hasOwnProperty,
    V =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    T = {},
    K = {};
  function D(e) {
    return k.call(K, e)
      ? !0
      : k.call(T, e)
        ? !1
        : V.test(e)
          ? (K[e] = !0)
          : ((T[e] = !0), !1);
  }
  function X(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function J(e, t, n, r) {
    if (t === null || typeof t > "u" || X(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function O(e, t, n, r, o, i, u) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = u));
  }
  var W = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      W[e] = new O(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      W[t] = new O(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        W[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      W[e] = new O(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        W[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      W[e] = new O(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      W[e] = new O(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      W[e] = new O(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      W[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var G = /[\-:]([a-z])/g;
  function se(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(G, se);
      W[t] = new O(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(G, se);
        W[t] = new O(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(G, se);
      W[t] = new O(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      W[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (W.xlinkHref = new O(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      W[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function ke(e, t, n, r) {
    var o = W.hasOwnProperty(t) ? W[t] : null;
    (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (J(t, n, o, r) && (n = null),
      r || o === null
        ? D(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : o.mustUseProperty
          ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
          : ((t = o.attributeName),
            (r = o.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((o = o.type),
                (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ie = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ae = Symbol.for("react.element"),
    R = Symbol.for("react.portal"),
    B = Symbol.for("react.fragment"),
    re = Symbol.for("react.strict_mode"),
    pe = Symbol.for("react.profiler"),
    de = Symbol.for("react.provider"),
    te = Symbol.for("react.context"),
    Ce = Symbol.for("react.forward_ref"),
    he = Symbol.for("react.suspense"),
    be = Symbol.for("react.suspense_list"),
    Fe = Symbol.for("react.memo"),
    Me = Symbol.for("react.lazy"),
    ye = Symbol.for("react.offscreen"),
    M = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (M && e[M]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _ = Object.assign,
    g;
  function C(e) {
    if (g === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        g = (t && t[1]) || "";
      }
    return (
      `
` +
      g +
      e
    );
  }
  var Y = !1;
  function ne(e, t) {
    if (!e || Y) return "";
    Y = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (x) {
            var r = x;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (x) {
            r = x;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (x) {
          r = x;
        }
        e();
      }
    } catch (x) {
      if (x && r && typeof x.stack == "string") {
        for (
          var o = x.stack.split(`
`),
            i = r.stack.split(`
`),
            u = o.length - 1,
            f = i.length - 1;
          1 <= u && 0 <= f && o[u] !== i[f];
        )
          f--;
        for (; 1 <= u && 0 <= f; u--, f--)
          if (o[u] !== i[f]) {
            if (u !== 1 || f !== 1)
              do
                if ((u--, f--, 0 > f || o[u] !== i[f])) {
                  var m =
                    `
` + o[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      m.includes("<anonymous>") &&
                      (m = m.replace("<anonymous>", e.displayName)),
                    m
                  );
                }
              while (1 <= u && 0 <= f);
            break;
          }
      }
    } finally {
      ((Y = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? C(e) : "";
  }
  function ae(e) {
    switch (e.tag) {
      case 5:
        return C(e.type);
      case 16:
        return C("Lazy");
      case 13:
        return C("Suspense");
      case 19:
        return C("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = ne(e.type, !1)), e);
      case 11:
        return ((e = ne(e.type.render, !1)), e);
      case 1:
        return ((e = ne(e.type, !0)), e);
      default:
        return "";
    }
  }
  function ue(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case B:
        return "Fragment";
      case R:
        return "Portal";
      case pe:
        return "Profiler";
      case re:
        return "StrictMode";
      case he:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case te:
          return (e.displayName || "Context") + ".Consumer";
        case de:
          return (e._context.displayName || "Context") + ".Provider";
        case Ce:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Fe:
          return (
            (t = e.displayName || null),
            t !== null ? t : ue(e.type) || "Memo"
          );
        case Me:
          ((t = e._payload), (e = e._init));
          try {
            return ue(e(t));
          } catch {}
      }
    return null;
  }
  function ve(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ue(t);
      case 8:
        return t === re ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ce(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function q(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function we(e) {
    var t = q(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var o = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (u) {
            ((r = "" + u), i.call(this, u));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function qe(e) {
    e._valueTracker || (e._valueTracker = we(e));
  }
  function He(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = q(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Pe(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Mt(e, t) {
    var n = t.checked;
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function et(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = ce(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Lt(e, t) {
    ((t = t.checked), t != null && ke(e, "checked", t, !1));
  }
  function or(e, t) {
    Lt(e, t);
    var n = ce(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? di(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && di(e, t.type, ce(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Ka(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      ))
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function di(e, t, n) {
    (t !== "number" || Pe(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ir = Array.isArray;
  function Rn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        ((o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + ce(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function fi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return _({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ga(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(l(92));
        if (ir(n)) {
          if (1 < n.length) throw Error(l(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: ce(n) };
  }
  function Qa(e, t) {
    var n = ce(t.value),
      r = ce(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Za(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Ya(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function pi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ya(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Qr,
    qa = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, o);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Qr = Qr || document.createElement("div"),
            Qr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Qr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function sr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ar = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    qd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ar).forEach(function (e) {
    qd.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ar[t] = ar[e]));
    });
  });
  function Xa(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (ar.hasOwnProperty(e) && ar[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Ja(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          o = Xa(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, o) : (e[n] = o));
      }
  }
  var Xd = _(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function mi(e, t) {
    if (t) {
      if (Xd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function hi(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var gi = null;
  function yi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var vi = null,
    Mn = null,
    Ln = null;
  function el(e) {
    if ((e = zr(e))) {
      if (typeof vi != "function") throw Error(l(280));
      var t = e.stateNode;
      t && ((t = vo(t)), vi(e.stateNode, e.type, t));
    }
  }
  function tl(e) {
    Mn ? (Ln ? Ln.push(e) : (Ln = [e])) : (Mn = e);
  }
  function nl() {
    if (Mn) {
      var e = Mn,
        t = Ln;
      if (((Ln = Mn = null), el(e), t)) for (e = 0; e < t.length; e++) el(t[e]);
    }
  }
  function rl(e, t) {
    return e(t);
  }
  function ol() {}
  var wi = !1;
  function il(e, t, n) {
    if (wi) return e(t, n);
    wi = !0;
    try {
      return rl(e, t, n);
    } finally {
      ((wi = !1), (Mn !== null || Ln !== null) && (ol(), nl()));
    }
  }
  function lr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = vo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(l(231, t, typeof n));
    return n;
  }
  var xi = !1;
  if (b)
    try {
      var ur = {};
      (Object.defineProperty(ur, "passive", {
        get: function () {
          xi = !0;
        },
      }),
        window.addEventListener("test", ur, ur),
        window.removeEventListener("test", ur, ur));
    } catch {
      xi = !1;
    }
  function Jd(e, t, n, r, o, i, u, f, m) {
    var x = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, x);
    } catch (A) {
      this.onError(A);
    }
  }
  var cr = !1,
    Zr = null,
    Yr = !1,
    ki = null,
    ef = {
      onError: function (e) {
        ((cr = !0), (Zr = e));
      },
    };
  function tf(e, t, n, r, o, i, u, f, m) {
    ((cr = !1), (Zr = null), Jd.apply(ef, arguments));
  }
  function nf(e, t, n, r, o, i, u, f, m) {
    if ((tf.apply(this, arguments), cr)) {
      if (cr) {
        var x = Zr;
        ((cr = !1), (Zr = null));
      } else throw Error(l(198));
      Yr || ((Yr = !0), (ki = x));
    }
  }
  function pn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function sl(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function al(e) {
    if (pn(e) !== e) throw Error(l(188));
  }
  function rf(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = pn(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ;) {
      var o = n.return;
      if (o === null) break;
      var i = o.alternate;
      if (i === null) {
        if (((r = o.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === i.child) {
        for (i = o.child; i;) {
          if (i === n) return (al(o), e);
          if (i === r) return (al(o), t);
          i = i.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== r.return) ((n = o), (r = i));
      else {
        for (var u = !1, f = o.child; f;) {
          if (f === n) {
            ((u = !0), (n = o), (r = i));
            break;
          }
          if (f === r) {
            ((u = !0), (r = o), (n = i));
            break;
          }
          f = f.sibling;
        }
        if (!u) {
          for (f = i.child; f;) {
            if (f === n) {
              ((u = !0), (n = i), (r = o));
              break;
            }
            if (f === r) {
              ((u = !0), (r = i), (n = o));
              break;
            }
            f = f.sibling;
          }
          if (!u) throw Error(l(189));
        }
      }
      if (n.alternate !== r) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function ll(e) {
    return ((e = rf(e)), e !== null ? ul(e) : null);
  }
  function ul(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = ul(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var cl = c.unstable_scheduleCallback,
    dl = c.unstable_cancelCallback,
    of = c.unstable_shouldYield,
    sf = c.unstable_requestPaint,
    Le = c.unstable_now,
    af = c.unstable_getCurrentPriorityLevel,
    Si = c.unstable_ImmediatePriority,
    fl = c.unstable_UserBlockingPriority,
    qr = c.unstable_NormalPriority,
    lf = c.unstable_LowPriority,
    pl = c.unstable_IdlePriority,
    Xr = null,
    Pt = null;
  function uf(e) {
    if (Pt && typeof Pt.onCommitFiberRoot == "function")
      try {
        Pt.onCommitFiberRoot(Xr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var xt = Math.clz32 ? Math.clz32 : ff,
    cf = Math.log,
    df = Math.LN2;
  function ff(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((cf(e) / df) | 0)) | 0);
  }
  var Jr = 64,
    eo = 4194304;
  function dr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function to(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      i = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var f = u & ~o;
      f !== 0 ? (r = dr(f)) : ((i &= u), i !== 0 && (r = dr(i)));
    } else ((u = n & ~o), u !== 0 ? (r = dr(u)) : i !== 0 && (r = dr(i)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & o) === 0 &&
      ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t;)
        ((n = 31 - xt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
    return r;
  }
  function pf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function mf(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;
    ) {
      var u = 31 - xt(i),
        f = 1 << u,
        m = o[u];
      (m === -1
        ? ((f & n) === 0 || (f & r) !== 0) && (o[u] = pf(f, t))
        : m <= t && (e.expiredLanes |= f),
        (i &= ~f));
    }
  }
  function Ei(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ml() {
    var e = Jr;
    return ((Jr <<= 1), (Jr & 4194240) === 0 && (Jr = 64), e);
  }
  function Ci(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function fr(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - xt(t)),
      (e[t] = n));
  }
  function hf(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
      var o = 31 - xt(n),
        i = 1 << o;
      ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
    }
  }
  function bi(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - xt(n),
        o = 1 << r;
      ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
    }
  }
  var ge = 0;
  function hl(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var gl,
    ji,
    yl,
    vl,
    wl,
    Ai = !1,
    no = [],
    Vt = null,
    Kt = null,
    Gt = null,
    pr = new Map(),
    mr = new Map(),
    Qt = [],
    gf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function xl(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        Kt = null;
        break;
      case "mouseover":
      case "mouseout":
        Gt = null;
        break;
      case "pointerover":
      case "pointerout":
        pr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mr.delete(t.pointerId);
    }
  }
  function hr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [o],
        }),
        t !== null && ((t = zr(t)), t !== null && ji(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function yf(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return ((Vt = hr(Vt, e, t, n, r, o)), !0);
      case "dragenter":
        return ((Kt = hr(Kt, e, t, n, r, o)), !0);
      case "mouseover":
        return ((Gt = hr(Gt, e, t, n, r, o)), !0);
      case "pointerover":
        var i = o.pointerId;
        return (pr.set(i, hr(pr.get(i) || null, e, t, n, r, o)), !0);
      case "gotpointercapture":
        return (
          (i = o.pointerId),
          mr.set(i, hr(mr.get(i) || null, e, t, n, r, o)),
          !0
        );
    }
    return !1;
  }
  function kl(e) {
    var t = mn(e.target);
    if (t !== null) {
      var n = pn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = sl(n)), t !== null)) {
            ((e.blockedOn = t),
              wl(e.priority, function () {
                yl(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ro(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = zi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((gi = r), n.target.dispatchEvent(r), (gi = null));
      } else return ((t = zr(n)), t !== null && ji(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Sl(e, t, n) {
    ro(e) && n.delete(t);
  }
  function vf() {
    ((Ai = !1),
      Vt !== null && ro(Vt) && (Vt = null),
      Kt !== null && ro(Kt) && (Kt = null),
      Gt !== null && ro(Gt) && (Gt = null),
      pr.forEach(Sl),
      mr.forEach(Sl));
  }
  function gr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ai ||
        ((Ai = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, vf)));
  }
  function yr(e) {
    function t(o) {
      return gr(o, e);
    }
    if (0 < no.length) {
      gr(no[0], e);
      for (var n = 1; n < no.length; n++) {
        var r = no[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Vt !== null && gr(Vt, e),
        Kt !== null && gr(Kt, e),
        Gt !== null && gr(Gt, e),
        pr.forEach(t),
        mr.forEach(t),
        n = 0;
      n < Qt.length;
      n++
    )
      ((r = Qt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null);)
      (kl(n), n.blockedOn === null && Qt.shift());
  }
  var On = ie.ReactCurrentBatchConfig,
    oo = !0;
  function wf(e, t, n, r) {
    var o = ge,
      i = On.transition;
    On.transition = null;
    try {
      ((ge = 1), Pi(e, t, n, r));
    } finally {
      ((ge = o), (On.transition = i));
    }
  }
  function xf(e, t, n, r) {
    var o = ge,
      i = On.transition;
    On.transition = null;
    try {
      ((ge = 4), Pi(e, t, n, r));
    } finally {
      ((ge = o), (On.transition = i));
    }
  }
  function Pi(e, t, n, r) {
    if (oo) {
      var o = zi(e, t, n, r);
      if (o === null) (Ki(e, t, r, io, n), xl(e, r));
      else if (yf(o, e, t, n, r)) r.stopPropagation();
      else if ((xl(e, r), t & 4 && -1 < gf.indexOf(e))) {
        for (; o !== null;) {
          var i = zr(o);
          if (
            (i !== null && gl(i),
            (i = zi(e, t, n, r)),
            i === null && Ki(e, t, r, io, n),
            i === o)
          )
            break;
          o = i;
        }
        o !== null && r.stopPropagation();
      } else Ki(e, t, r, null, n);
    }
  }
  var io = null;
  function zi(e, t, n, r) {
    if (((io = null), (e = yi(r)), (e = mn(e)), e !== null))
      if (((t = pn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = sl(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((io = e), null);
  }
  function El(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (af()) {
          case Si:
            return 1;
          case fl:
            return 4;
          case qr:
          case lf:
            return 16;
          case pl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Zt = null,
    _i = null,
    so = null;
  function Cl() {
    if (so) return so;
    var e,
      t = _i,
      n = t.length,
      r,
      o = "value" in Zt ? Zt.value : Zt.textContent,
      i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === o[i - r]; r++);
    return (so = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function ao(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function lo() {
    return !0;
  }
  function bl() {
    return !1;
  }
  function lt(e) {
    function t(n, r, o, i, u) {
      ((this._reactName = n),
        (this._targetInst = o),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null));
      for (var f in e)
        e.hasOwnProperty(f) && ((n = e[f]), (this[f] = n ? n(i) : i[f]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? lo
          : bl),
        (this.isPropagationStopped = bl),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = lo));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = lo));
        },
        persist: function () {},
        isPersistent: lo,
      }),
      t
    );
  }
  var In = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ti = lt(In),
    vr = _({}, In, { view: 0, detail: 0 }),
    kf = lt(vr),
    Ri,
    Mi,
    wr,
    uo = _({}, vr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Oi,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== wr &&
              (wr && e.type === "mousemove"
                ? ((Ri = e.screenX - wr.screenX), (Mi = e.screenY - wr.screenY))
                : (Mi = Ri = 0),
              (wr = e)),
            Ri);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Mi;
      },
    }),
    jl = lt(uo),
    Sf = _({}, uo, { dataTransfer: 0 }),
    Ef = lt(Sf),
    Cf = _({}, vr, { relatedTarget: 0 }),
    Li = lt(Cf),
    bf = _({}, In, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jf = lt(bf),
    Af = _({}, In, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Pf = lt(Af),
    zf = _({}, In, { data: 0 }),
    Al = lt(zf),
    _f = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Tf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Rf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Mf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Rf[e])
        ? !!t[e]
        : !1;
  }
  function Oi() {
    return Mf;
  }
  var Lf = _({}, vr, {
      key: function (e) {
        if (e.key) {
          var t = _f[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ao(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Tf[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Oi,
      charCode: function (e) {
        return e.type === "keypress" ? ao(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ao(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Of = lt(Lf),
    If = _({}, uo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Pl = lt(If),
    Nf = _({}, vr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Oi,
    }),
    Df = lt(Nf),
    Uf = _({}, In, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ff = lt(Uf),
    $f = _({}, uo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Wf = lt($f),
    Bf = [9, 13, 27, 32],
    Ii = b && "CompositionEvent" in window,
    xr = null;
  b && "documentMode" in document && (xr = document.documentMode);
  var Hf = b && "TextEvent" in window && !xr,
    zl = b && (!Ii || (xr && 8 < xr && 11 >= xr)),
    _l = " ",
    Tl = !1;
  function Rl(e, t) {
    switch (e) {
      case "keyup":
        return Bf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ml(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Nn = !1;
  function Vf(e, t) {
    switch (e) {
      case "compositionend":
        return Ml(t);
      case "keypress":
        return t.which !== 32 ? null : ((Tl = !0), _l);
      case "textInput":
        return ((e = t.data), e === _l && Tl ? null : e);
      default:
        return null;
    }
  }
  function Kf(e, t) {
    if (Nn)
      return e === "compositionend" || (!Ii && Rl(e, t))
        ? ((e = Cl()), (so = _i = Zt = null), (Nn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return zl && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Gf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ll(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gf[e.type] : t === "textarea";
  }
  function Ol(e, t, n, r) {
    (tl(r),
      (t = ho(t, "onChange")),
      0 < t.length &&
        ((n = new Ti("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var kr = null,
    Sr = null;
  function Qf(e) {
    Jl(e, 0);
  }
  function co(e) {
    var t = Wn(e);
    if (He(t)) return e;
  }
  function Zf(e, t) {
    if (e === "change") return t;
  }
  var Il = !1;
  if (b) {
    var Ni;
    if (b) {
      var Di = "oninput" in document;
      if (!Di) {
        var Nl = document.createElement("div");
        (Nl.setAttribute("oninput", "return;"),
          (Di = typeof Nl.oninput == "function"));
      }
      Ni = Di;
    } else Ni = !1;
    Il = Ni && (!document.documentMode || 9 < document.documentMode);
  }
  function Dl() {
    kr && (kr.detachEvent("onpropertychange", Ul), (Sr = kr = null));
  }
  function Ul(e) {
    if (e.propertyName === "value" && co(Sr)) {
      var t = [];
      (Ol(t, Sr, e, yi(e)), il(Qf, t));
    }
  }
  function Yf(e, t, n) {
    e === "focusin"
      ? (Dl(), (kr = t), (Sr = n), kr.attachEvent("onpropertychange", Ul))
      : e === "focusout" && Dl();
  }
  function qf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return co(Sr);
  }
  function Xf(e, t) {
    if (e === "click") return co(t);
  }
  function Jf(e, t) {
    if (e === "input" || e === "change") return co(t);
  }
  function ep(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var kt = typeof Object.is == "function" ? Object.is : ep;
  function Er(e, t) {
    if (kt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!k.call(t, o) || !kt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function Fl(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function $l(e, t) {
    var n = Fl(e);
    e = 0;
    for (var r; n;) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Fl(n);
    }
  }
  function Wl(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Wl(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Bl() {
    for (var e = window, t = Pe(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Pe(e.document);
    }
    return t;
  }
  function Ui(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function tp(e) {
    var t = Bl(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Wl(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Ui(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var o = n.textContent.length,
            i = Math.min(r.start, o);
          ((r = r.end === void 0 ? i : Math.min(r.end, o)),
            !e.extend && i > r && ((o = r), (r = i), (i = o)),
            (o = $l(n, i)));
          var u = $l(n, r);
          o &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== o.node ||
              e.anchorOffset !== o.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(o.node, o.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode);)
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var np = b && "documentMode" in document && 11 >= document.documentMode,
    Dn = null,
    Fi = null,
    Cr = null,
    $i = !1;
  function Hl(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    $i ||
      Dn == null ||
      Dn !== Pe(r) ||
      ((r = Dn),
      "selectionStart" in r && Ui(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Cr && Er(Cr, r)) ||
        ((Cr = r),
        (r = ho(Fi, "onSelect")),
        0 < r.length &&
          ((t = new Ti("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Dn))));
  }
  function fo(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Un = {
      animationend: fo("Animation", "AnimationEnd"),
      animationiteration: fo("Animation", "AnimationIteration"),
      animationstart: fo("Animation", "AnimationStart"),
      transitionend: fo("Transition", "TransitionEnd"),
    },
    Wi = {},
    Vl = {};
  b &&
    ((Vl = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Un.animationend.animation,
      delete Un.animationiteration.animation,
      delete Un.animationstart.animation),
    "TransitionEvent" in window || delete Un.transitionend.transition);
  function po(e) {
    if (Wi[e]) return Wi[e];
    if (!Un[e]) return e;
    var t = Un[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Vl) return (Wi[e] = t[n]);
    return e;
  }
  var Kl = po("animationend"),
    Gl = po("animationiteration"),
    Ql = po("animationstart"),
    Zl = po("transitionend"),
    Yl = new Map(),
    ql =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Yt(e, t) {
    (Yl.set(e, t), y(t, [e]));
  }
  for (var Bi = 0; Bi < ql.length; Bi++) {
    var Hi = ql[Bi],
      rp = Hi.toLowerCase(),
      op = Hi[0].toUpperCase() + Hi.slice(1);
    Yt(rp, "on" + op);
  }
  (Yt(Kl, "onAnimationEnd"),
    Yt(Gl, "onAnimationIteration"),
    Yt(Ql, "onAnimationStart"),
    Yt("dblclick", "onDoubleClick"),
    Yt("focusin", "onFocus"),
    Yt("focusout", "onBlur"),
    Yt(Zl, "onTransitionEnd"),
    S("onMouseEnter", ["mouseout", "mouseover"]),
    S("onMouseLeave", ["mouseout", "mouseover"]),
    S("onPointerEnter", ["pointerout", "pointerover"]),
    S("onPointerLeave", ["pointerout", "pointerover"]),
    y(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    y(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    y("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    y(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    y(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    y(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var br =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    ip = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(br),
    );
  function Xl(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), nf(r, t, void 0, e), (e.currentTarget = null));
  }
  function Jl(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var f = r[u],
              m = f.instance,
              x = f.currentTarget;
            if (((f = f.listener), m !== i && o.isPropagationStopped()))
              break e;
            (Xl(o, f, x), (i = m));
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((f = r[u]),
              (m = f.instance),
              (x = f.currentTarget),
              (f = f.listener),
              m !== i && o.isPropagationStopped())
            )
              break e;
            (Xl(o, f, x), (i = m));
          }
      }
    }
    if (Yr) throw ((e = ki), (Yr = !1), (ki = null), e);
  }
  function Se(e, t) {
    var n = t[Xi];
    n === void 0 && (n = t[Xi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (eu(t, e, 2, !1), n.add(r));
  }
  function Vi(e, t, n) {
    var r = 0;
    (t && (r |= 4), eu(n, e, r, t));
  }
  var mo = "_reactListening" + Math.random().toString(36).slice(2);
  function jr(e) {
    if (!e[mo]) {
      ((e[mo] = !0),
        d.forEach(function (n) {
          n !== "selectionchange" && (ip.has(n) || Vi(n, !1, e), Vi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[mo] || ((t[mo] = !0), Vi("selectionchange", !1, t));
    }
  }
  function eu(e, t, n, r) {
    switch (El(t)) {
      case 1:
        var o = wf;
        break;
      case 4:
        o = xf;
        break;
      default:
        o = Pi;
    }
    ((n = o.bind(null, t, n, e)),
      (o = void 0),
      !xi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      r
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
          ? e.addEventListener(t, n, { passive: o })
          : e.addEventListener(t, n, !1));
  }
  function Ki(e, t, n, r, o) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var f = r.stateNode.containerInfo;
          if (f === o || (f.nodeType === 8 && f.parentNode === o)) break;
          if (u === 4)
            for (u = r.return; u !== null;) {
              var m = u.tag;
              if (
                (m === 3 || m === 4) &&
                ((m = u.stateNode.containerInfo),
                m === o || (m.nodeType === 8 && m.parentNode === o))
              )
                return;
              u = u.return;
            }
          for (; f !== null;) {
            if (((u = mn(f)), u === null)) return;
            if (((m = u.tag), m === 5 || m === 6)) {
              r = i = u;
              continue e;
            }
            f = f.parentNode;
          }
        }
        r = r.return;
      }
    il(function () {
      var x = i,
        A = yi(n),
        P = [];
      e: {
        var j = Yl.get(e);
        if (j !== void 0) {
          var L = Ti,
            U = e;
          switch (e) {
            case "keypress":
              if (ao(n) === 0) break e;
            case "keydown":
            case "keyup":
              L = Of;
              break;
            case "focusin":
              ((U = "focus"), (L = Li));
              break;
            case "focusout":
              ((U = "blur"), (L = Li));
              break;
            case "beforeblur":
            case "afterblur":
              L = Li;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              L = jl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              L = Ef;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              L = Df;
              break;
            case Kl:
            case Gl:
            case Ql:
              L = jf;
              break;
            case Zl:
              L = Ff;
              break;
            case "scroll":
              L = kf;
              break;
            case "wheel":
              L = Wf;
              break;
            case "copy":
            case "cut":
            case "paste":
              L = Pf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              L = Pl;
          }
          var F = (t & 4) !== 0,
            Oe = !F && e === "scroll",
            v = F ? (j !== null ? j + "Capture" : null) : j;
          F = [];
          for (var h = x, w; h !== null;) {
            w = h;
            var z = w.stateNode;
            if (
              (w.tag === 5 &&
                z !== null &&
                ((w = z),
                v !== null &&
                  ((z = lr(h, v)), z != null && F.push(Ar(h, z, w)))),
              Oe)
            )
              break;
            h = h.return;
          }
          0 < F.length &&
            ((j = new L(j, U, null, n, A)), P.push({ event: j, listeners: F }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((j = e === "mouseover" || e === "pointerover"),
            (L = e === "mouseout" || e === "pointerout"),
            j &&
              n !== gi &&
              (U = n.relatedTarget || n.fromElement) &&
              (mn(U) || U[Ot]))
          )
            break e;
          if (
            (L || j) &&
            ((j =
              A.window === A
                ? A
                : (j = A.ownerDocument)
                  ? j.defaultView || j.parentWindow
                  : window),
            L
              ? ((U = n.relatedTarget || n.toElement),
                (L = x),
                (U = U ? mn(U) : null),
                U !== null &&
                  ((Oe = pn(U)), U !== Oe || (U.tag !== 5 && U.tag !== 6)) &&
                  (U = null))
              : ((L = null), (U = x)),
            L !== U)
          ) {
            if (
              ((F = jl),
              (z = "onMouseLeave"),
              (v = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((F = Pl),
                (z = "onPointerLeave"),
                (v = "onPointerEnter"),
                (h = "pointer")),
              (Oe = L == null ? j : Wn(L)),
              (w = U == null ? j : Wn(U)),
              (j = new F(z, h + "leave", L, n, A)),
              (j.target = Oe),
              (j.relatedTarget = w),
              (z = null),
              mn(A) === x &&
                ((F = new F(v, h + "enter", U, n, A)),
                (F.target = w),
                (F.relatedTarget = Oe),
                (z = F)),
              (Oe = z),
              L && U)
            )
              t: {
                for (F = L, v = U, h = 0, w = F; w; w = Fn(w)) h++;
                for (w = 0, z = v; z; z = Fn(z)) w++;
                for (; 0 < h - w;) ((F = Fn(F)), h--);
                for (; 0 < w - h;) ((v = Fn(v)), w--);
                for (; h--;) {
                  if (F === v || (v !== null && F === v.alternate)) break t;
                  ((F = Fn(F)), (v = Fn(v)));
                }
                F = null;
              }
            else F = null;
            (L !== null && tu(P, j, L, F, !1),
              U !== null && Oe !== null && tu(P, Oe, U, F, !0));
          }
        }
        e: {
          if (
            ((j = x ? Wn(x) : window),
            (L = j.nodeName && j.nodeName.toLowerCase()),
            L === "select" || (L === "input" && j.type === "file"))
          )
            var $ = Zf;
          else if (Ll(j))
            if (Il) $ = Jf;
            else {
              $ = qf;
              var Q = Yf;
            }
          else
            (L = j.nodeName) &&
              L.toLowerCase() === "input" &&
              (j.type === "checkbox" || j.type === "radio") &&
              ($ = Xf);
          if ($ && ($ = $(e, x))) {
            Ol(P, $, n, A);
            break e;
          }
          (Q && Q(e, j, x),
            e === "focusout" &&
              (Q = j._wrapperState) &&
              Q.controlled &&
              j.type === "number" &&
              di(j, "number", j.value));
        }
        switch (((Q = x ? Wn(x) : window), e)) {
          case "focusin":
            (Ll(Q) || Q.contentEditable === "true") &&
              ((Dn = Q), (Fi = x), (Cr = null));
            break;
          case "focusout":
            Cr = Fi = Dn = null;
            break;
          case "mousedown":
            $i = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (($i = !1), Hl(P, n, A));
            break;
          case "selectionchange":
            if (np) break;
          case "keydown":
          case "keyup":
            Hl(P, n, A);
        }
        var Z;
        if (Ii)
          e: {
            switch (e) {
              case "compositionstart":
                var ee = "onCompositionStart";
                break e;
              case "compositionend":
                ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ee = "onCompositionUpdate";
                break e;
            }
            ee = void 0;
          }
        else
          Nn
            ? Rl(e, n) && (ee = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ee = "onCompositionStart");
        (ee &&
          (zl &&
            n.locale !== "ko" &&
            (Nn || ee !== "onCompositionStart"
              ? ee === "onCompositionEnd" && Nn && (Z = Cl())
              : ((Zt = A),
                (_i = "value" in Zt ? Zt.value : Zt.textContent),
                (Nn = !0))),
          (Q = ho(x, ee)),
          0 < Q.length &&
            ((ee = new Al(ee, e, null, n, A)),
            P.push({ event: ee, listeners: Q }),
            Z ? (ee.data = Z) : ((Z = Ml(n)), Z !== null && (ee.data = Z)))),
          (Z = Hf ? Vf(e, n) : Kf(e, n)) &&
            ((x = ho(x, "onBeforeInput")),
            0 < x.length &&
              ((A = new Al("onBeforeInput", "beforeinput", null, n, A)),
              P.push({ event: A, listeners: x }),
              (A.data = Z))));
      }
      Jl(P, t);
    });
  }
  function Ar(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ho(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var o = e,
        i = o.stateNode;
      (o.tag === 5 &&
        i !== null &&
        ((o = i),
        (i = lr(e, n)),
        i != null && r.unshift(Ar(e, i, o)),
        (i = lr(e, t)),
        i != null && r.push(Ar(e, i, o))),
        (e = e.return));
    }
    return r;
  }
  function Fn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function tu(e, t, n, r, o) {
    for (var i = t._reactName, u = []; n !== null && n !== r;) {
      var f = n,
        m = f.alternate,
        x = f.stateNode;
      if (m !== null && m === r) break;
      (f.tag === 5 &&
        x !== null &&
        ((f = x),
        o
          ? ((m = lr(n, i)), m != null && u.unshift(Ar(n, m, f)))
          : o || ((m = lr(n, i)), m != null && u.push(Ar(n, m, f)))),
        (n = n.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var sp = /\r\n?/g,
    ap = /\u0000|\uFFFD/g;
  function nu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        sp,
        `
`,
      )
      .replace(ap, "");
  }
  function go(e, t, n) {
    if (((t = nu(t)), nu(e) !== t && n)) throw Error(l(425));
  }
  function yo() {}
  var Gi = null,
    Qi = null;
  function Zi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Yi = typeof setTimeout == "function" ? setTimeout : void 0,
    lp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ru = typeof Promise == "function" ? Promise : void 0,
    up =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ru < "u"
          ? function (e) {
              return ru.resolve(null).then(e).catch(cp);
            }
          : Yi;
  function cp(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function qi(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(o), yr(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
    } while (n);
    yr(t);
  }
  function qt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ou(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var $n = Math.random().toString(36).slice(2),
    zt = "__reactFiber$" + $n,
    Pr = "__reactProps$" + $n,
    Ot = "__reactContainer$" + $n,
    Xi = "__reactEvents$" + $n,
    dp = "__reactListeners$" + $n,
    fp = "__reactHandles$" + $n;
  function mn(e) {
    var t = e[zt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[Ot] || n[zt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ou(e); e !== null;) {
            if ((n = e[zt])) return n;
            e = ou(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function zr(e) {
    return (
      (e = e[zt] || e[Ot]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function vo(e) {
    return e[Pr] || null;
  }
  var Ji = [],
    Bn = -1;
  function Xt(e) {
    return { current: e };
  }
  function Ee(e) {
    0 > Bn || ((e.current = Ji[Bn]), (Ji[Bn] = null), Bn--);
  }
  function xe(e, t) {
    (Bn++, (Ji[Bn] = e.current), (e.current = t));
  }
  var Jt = {},
    Ge = Xt(Jt),
    tt = Xt(!1),
    hn = Jt;
  function Hn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
      i;
    for (i in n) o[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function nt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function wo() {
    (Ee(tt), Ee(Ge));
  }
  function iu(e, t, n) {
    if (Ge.current !== Jt) throw Error(l(168));
    (xe(Ge, t), xe(tt, n));
  }
  function su(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(l(108, ve(e) || "Unknown", o));
    return _({}, n, r);
  }
  function xo(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Jt),
      (hn = Ge.current),
      xe(Ge, e),
      xe(tt, tt.current),
      !0
    );
  }
  function au(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    (n
      ? ((e = su(e, t, hn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Ee(tt),
        Ee(Ge),
        xe(Ge, e))
      : Ee(tt),
      xe(tt, n));
  }
  var It = null,
    ko = !1,
    es = !1;
  function lu(e) {
    It === null ? (It = [e]) : It.push(e);
  }
  function pp(e) {
    ((ko = !0), lu(e));
  }
  function en() {
    if (!es && It !== null) {
      es = !0;
      var e = 0,
        t = ge;
      try {
        var n = It;
        for (ge = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((It = null), (ko = !1));
      } catch (o) {
        throw (It !== null && (It = It.slice(e + 1)), cl(Si, en), o);
      } finally {
        ((ge = t), (es = !1));
      }
    }
    return null;
  }
  var Vn = [],
    Kn = 0,
    So = null,
    Eo = 0,
    ft = [],
    pt = 0,
    gn = null,
    Nt = 1,
    Dt = "";
  function yn(e, t) {
    ((Vn[Kn++] = Eo), (Vn[Kn++] = So), (So = e), (Eo = t));
  }
  function uu(e, t, n) {
    ((ft[pt++] = Nt), (ft[pt++] = Dt), (ft[pt++] = gn), (gn = e));
    var r = Nt;
    e = Dt;
    var o = 32 - xt(r) - 1;
    ((r &= ~(1 << o)), (n += 1));
    var i = 32 - xt(t) + o;
    if (30 < i) {
      var u = o - (o % 5);
      ((i = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (o -= u),
        (Nt = (1 << (32 - xt(t) + o)) | (n << o) | r),
        (Dt = i + e));
    } else ((Nt = (1 << i) | (n << o) | r), (Dt = e));
  }
  function ts(e) {
    e.return !== null && (yn(e, 1), uu(e, 1, 0));
  }
  function ns(e) {
    for (; e === So;)
      ((So = Vn[--Kn]), (Vn[Kn] = null), (Eo = Vn[--Kn]), (Vn[Kn] = null));
    for (; e === gn;)
      ((gn = ft[--pt]),
        (ft[pt] = null),
        (Dt = ft[--pt]),
        (ft[pt] = null),
        (Nt = ft[--pt]),
        (ft[pt] = null));
  }
  var ut = null,
    ct = null,
    je = !1,
    St = null;
  function cu(e, t) {
    var n = yt(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function du(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (ut = e), (ct = qt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ut = e), (ct = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = gn !== null ? { id: Nt, overflow: Dt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = yt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (ut = e),
              (ct = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function rs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function os(e) {
    if (je) {
      var t = ct;
      if (t) {
        var n = t;
        if (!du(e, t)) {
          if (rs(e)) throw Error(l(418));
          t = qt(n.nextSibling);
          var r = ut;
          t && du(e, t)
            ? cu(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (je = !1), (ut = e));
        }
      } else {
        if (rs(e)) throw Error(l(418));
        ((e.flags = (e.flags & -4097) | 2), (je = !1), (ut = e));
      }
    }
  }
  function fu(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    ut = e;
  }
  function Co(e) {
    if (e !== ut) return !1;
    if (!je) return (fu(e), (je = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Zi(e.type, e.memoizedProps))),
      t && (t = ct))
    ) {
      if (rs(e)) throw (pu(), Error(l(418)));
      for (; t;) (cu(e, t), (t = qt(t.nextSibling)));
    }
    if ((fu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ct = qt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ct = null;
      }
    } else ct = ut ? qt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function pu() {
    for (var e = ct; e;) e = qt(e.nextSibling);
  }
  function Gn() {
    ((ct = ut = null), (je = !1));
  }
  function is(e) {
    St === null ? (St = [e]) : St.push(e);
  }
  var mp = ie.ReactCurrentBatchConfig;
  function _r(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(l(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(l(147, e));
        var o = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (u) {
              var f = o.refs;
              u === null ? delete f[i] : (f[i] = u);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!n._owner) throw Error(l(290, e));
    }
    return e;
  }
  function bo(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        l(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function mu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function hu(e) {
    function t(v, h) {
      if (e) {
        var w = v.deletions;
        w === null ? ((v.deletions = [h]), (v.flags |= 16)) : w.push(h);
      }
    }
    function n(v, h) {
      if (!e) return null;
      for (; h !== null;) (t(v, h), (h = h.sibling));
      return null;
    }
    function r(v, h) {
      for (v = new Map(); h !== null;)
        (h.key !== null ? v.set(h.key, h) : v.set(h.index, h), (h = h.sibling));
      return v;
    }
    function o(v, h) {
      return ((v = un(v, h)), (v.index = 0), (v.sibling = null), v);
    }
    function i(v, h, w) {
      return (
        (v.index = w),
        e
          ? ((w = v.alternate),
            w !== null
              ? ((w = w.index), w < h ? ((v.flags |= 2), h) : w)
              : ((v.flags |= 2), h))
          : ((v.flags |= 1048576), h)
      );
    }
    function u(v) {
      return (e && v.alternate === null && (v.flags |= 2), v);
    }
    function f(v, h, w, z) {
      return h === null || h.tag !== 6
        ? ((h = Ys(w, v.mode, z)), (h.return = v), h)
        : ((h = o(h, w)), (h.return = v), h);
    }
    function m(v, h, w, z) {
      var $ = w.type;
      return $ === B
        ? A(v, h, w.props.children, z, w.key)
        : h !== null &&
            (h.elementType === $ ||
              (typeof $ == "object" &&
                $ !== null &&
                $.$$typeof === Me &&
                mu($) === h.type))
          ? ((z = o(h, w.props)), (z.ref = _r(v, h, w)), (z.return = v), z)
          : ((z = Zo(w.type, w.key, w.props, null, v.mode, z)),
            (z.ref = _r(v, h, w)),
            (z.return = v),
            z);
    }
    function x(v, h, w, z) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== w.containerInfo ||
        h.stateNode.implementation !== w.implementation
        ? ((h = qs(w, v.mode, z)), (h.return = v), h)
        : ((h = o(h, w.children || [])), (h.return = v), h);
    }
    function A(v, h, w, z, $) {
      return h === null || h.tag !== 7
        ? ((h = bn(w, v.mode, z, $)), (h.return = v), h)
        : ((h = o(h, w)), (h.return = v), h);
    }
    function P(v, h, w) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return ((h = Ys("" + h, v.mode, w)), (h.return = v), h);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Ae:
            return (
              (w = Zo(h.type, h.key, h.props, null, v.mode, w)),
              (w.ref = _r(v, null, h)),
              (w.return = v),
              w
            );
          case R:
            return ((h = qs(h, v.mode, w)), (h.return = v), h);
          case Me:
            var z = h._init;
            return P(v, z(h._payload), w);
        }
        if (ir(h) || H(h))
          return ((h = bn(h, v.mode, w, null)), (h.return = v), h);
        bo(v, h);
      }
      return null;
    }
    function j(v, h, w, z) {
      var $ = h !== null ? h.key : null;
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return $ !== null ? null : f(v, h, "" + w, z);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Ae:
            return w.key === $ ? m(v, h, w, z) : null;
          case R:
            return w.key === $ ? x(v, h, w, z) : null;
          case Me:
            return (($ = w._init), j(v, h, $(w._payload), z));
        }
        if (ir(w) || H(w)) return $ !== null ? null : A(v, h, w, z, null);
        bo(v, w);
      }
      return null;
    }
    function L(v, h, w, z, $) {
      if ((typeof z == "string" && z !== "") || typeof z == "number")
        return ((v = v.get(w) || null), f(h, v, "" + z, $));
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Ae:
            return (
              (v = v.get(z.key === null ? w : z.key) || null),
              m(h, v, z, $)
            );
          case R:
            return (
              (v = v.get(z.key === null ? w : z.key) || null),
              x(h, v, z, $)
            );
          case Me:
            var Q = z._init;
            return L(v, h, w, Q(z._payload), $);
        }
        if (ir(z) || H(z)) return ((v = v.get(w) || null), A(h, v, z, $, null));
        bo(h, z);
      }
      return null;
    }
    function U(v, h, w, z) {
      for (
        var $ = null, Q = null, Z = h, ee = (h = 0), Be = null;
        Z !== null && ee < w.length;
        ee++
      ) {
        Z.index > ee ? ((Be = Z), (Z = null)) : (Be = Z.sibling);
        var me = j(v, Z, w[ee], z);
        if (me === null) {
          Z === null && (Z = Be);
          break;
        }
        (e && Z && me.alternate === null && t(v, Z),
          (h = i(me, h, ee)),
          Q === null ? ($ = me) : (Q.sibling = me),
          (Q = me),
          (Z = Be));
      }
      if (ee === w.length) return (n(v, Z), je && yn(v, ee), $);
      if (Z === null) {
        for (; ee < w.length; ee++)
          ((Z = P(v, w[ee], z)),
            Z !== null &&
              ((h = i(Z, h, ee)),
              Q === null ? ($ = Z) : (Q.sibling = Z),
              (Q = Z)));
        return (je && yn(v, ee), $);
      }
      for (Z = r(v, Z); ee < w.length; ee++)
        ((Be = L(Z, v, ee, w[ee], z)),
          Be !== null &&
            (e &&
              Be.alternate !== null &&
              Z.delete(Be.key === null ? ee : Be.key),
            (h = i(Be, h, ee)),
            Q === null ? ($ = Be) : (Q.sibling = Be),
            (Q = Be)));
      return (
        e &&
          Z.forEach(function (cn) {
            return t(v, cn);
          }),
        je && yn(v, ee),
        $
      );
    }
    function F(v, h, w, z) {
      var $ = H(w);
      if (typeof $ != "function") throw Error(l(150));
      if (((w = $.call(w)), w == null)) throw Error(l(151));
      for (
        var Q = ($ = null), Z = h, ee = (h = 0), Be = null, me = w.next();
        Z !== null && !me.done;
        ee++, me = w.next()
      ) {
        Z.index > ee ? ((Be = Z), (Z = null)) : (Be = Z.sibling);
        var cn = j(v, Z, me.value, z);
        if (cn === null) {
          Z === null && (Z = Be);
          break;
        }
        (e && Z && cn.alternate === null && t(v, Z),
          (h = i(cn, h, ee)),
          Q === null ? ($ = cn) : (Q.sibling = cn),
          (Q = cn),
          (Z = Be));
      }
      if (me.done) return (n(v, Z), je && yn(v, ee), $);
      if (Z === null) {
        for (; !me.done; ee++, me = w.next())
          ((me = P(v, me.value, z)),
            me !== null &&
              ((h = i(me, h, ee)),
              Q === null ? ($ = me) : (Q.sibling = me),
              (Q = me)));
        return (je && yn(v, ee), $);
      }
      for (Z = r(v, Z); !me.done; ee++, me = w.next())
        ((me = L(Z, v, ee, me.value, z)),
          me !== null &&
            (e &&
              me.alternate !== null &&
              Z.delete(me.key === null ? ee : me.key),
            (h = i(me, h, ee)),
            Q === null ? ($ = me) : (Q.sibling = me),
            (Q = me)));
      return (
        e &&
          Z.forEach(function (Gp) {
            return t(v, Gp);
          }),
        je && yn(v, ee),
        $
      );
    }
    function Oe(v, h, w, z) {
      if (
        (typeof w == "object" &&
          w !== null &&
          w.type === B &&
          w.key === null &&
          (w = w.props.children),
        typeof w == "object" && w !== null)
      ) {
        switch (w.$$typeof) {
          case Ae:
            e: {
              for (var $ = w.key, Q = h; Q !== null;) {
                if (Q.key === $) {
                  if ((($ = w.type), $ === B)) {
                    if (Q.tag === 7) {
                      (n(v, Q.sibling),
                        (h = o(Q, w.props.children)),
                        (h.return = v),
                        (v = h));
                      break e;
                    }
                  } else if (
                    Q.elementType === $ ||
                    (typeof $ == "object" &&
                      $ !== null &&
                      $.$$typeof === Me &&
                      mu($) === Q.type)
                  ) {
                    (n(v, Q.sibling),
                      (h = o(Q, w.props)),
                      (h.ref = _r(v, Q, w)),
                      (h.return = v),
                      (v = h));
                    break e;
                  }
                  n(v, Q);
                  break;
                } else t(v, Q);
                Q = Q.sibling;
              }
              w.type === B
                ? ((h = bn(w.props.children, v.mode, z, w.key)),
                  (h.return = v),
                  (v = h))
                : ((z = Zo(w.type, w.key, w.props, null, v.mode, z)),
                  (z.ref = _r(v, h, w)),
                  (z.return = v),
                  (v = z));
            }
            return u(v);
          case R:
            e: {
              for (Q = w.key; h !== null;) {
                if (h.key === Q)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === w.containerInfo &&
                    h.stateNode.implementation === w.implementation
                  ) {
                    (n(v, h.sibling),
                      (h = o(h, w.children || [])),
                      (h.return = v),
                      (v = h));
                    break e;
                  } else {
                    n(v, h);
                    break;
                  }
                else t(v, h);
                h = h.sibling;
              }
              ((h = qs(w, v.mode, z)), (h.return = v), (v = h));
            }
            return u(v);
          case Me:
            return ((Q = w._init), Oe(v, h, Q(w._payload), z));
        }
        if (ir(w)) return U(v, h, w, z);
        if (H(w)) return F(v, h, w, z);
        bo(v, w);
      }
      return (typeof w == "string" && w !== "") || typeof w == "number"
        ? ((w = "" + w),
          h !== null && h.tag === 6
            ? (n(v, h.sibling), (h = o(h, w)), (h.return = v), (v = h))
            : (n(v, h), (h = Ys(w, v.mode, z)), (h.return = v), (v = h)),
          u(v))
        : n(v, h);
    }
    return Oe;
  }
  var Qn = hu(!0),
    gu = hu(!1),
    jo = Xt(null),
    Ao = null,
    Zn = null,
    ss = null;
  function as() {
    ss = Zn = Ao = null;
  }
  function ls(e) {
    var t = jo.current;
    (Ee(jo), (e._currentValue = t));
  }
  function us(e, t, n) {
    for (; e !== null;) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Yn(e, t) {
    ((Ao = e),
      (ss = Zn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (rt = !0), (e.firstContext = null)));
  }
  function mt(e) {
    var t = e._currentValue;
    if (ss !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Zn === null)) {
        if (Ao === null) throw Error(l(308));
        ((Zn = e), (Ao.dependencies = { lanes: 0, firstContext: e }));
      } else Zn = Zn.next = e;
    return t;
  }
  var vn = null;
  function cs(e) {
    vn === null ? (vn = [e]) : vn.push(e);
  }
  function yu(e, t, n, r) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), cs(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      Ut(e, r)
    );
  }
  function Ut(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var tn = !1;
  function ds(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function vu(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Ft(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function nn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (fe & 2) !== 0)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        Ut(e, n)
      );
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), cs(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      Ut(e, n)
    );
  }
  function Po(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), bi(e, n));
    }
  }
  function wu(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (i === null ? (o = i = u) : (i = i.next = u), (n = n.next));
        } while (n !== null);
        i === null ? (o = i = t) : (i = i.next = t);
      } else o = i = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function zo(e, t, n, r) {
    var o = e.updateQueue;
    tn = !1;
    var i = o.firstBaseUpdate,
      u = o.lastBaseUpdate,
      f = o.shared.pending;
    if (f !== null) {
      o.shared.pending = null;
      var m = f,
        x = m.next;
      ((m.next = null), u === null ? (i = x) : (u.next = x), (u = m));
      var A = e.alternate;
      A !== null &&
        ((A = A.updateQueue),
        (f = A.lastBaseUpdate),
        f !== u &&
          (f === null ? (A.firstBaseUpdate = x) : (f.next = x),
          (A.lastBaseUpdate = m)));
    }
    if (i !== null) {
      var P = o.baseState;
      ((u = 0), (A = x = m = null), (f = i));
      do {
        var j = f.lane,
          L = f.eventTime;
        if ((r & j) === j) {
          A !== null &&
            (A = A.next =
              {
                eventTime: L,
                lane: 0,
                tag: f.tag,
                payload: f.payload,
                callback: f.callback,
                next: null,
              });
          e: {
            var U = e,
              F = f;
            switch (((j = t), (L = n), F.tag)) {
              case 1:
                if (((U = F.payload), typeof U == "function")) {
                  P = U.call(L, P, j);
                  break e;
                }
                P = U;
                break e;
              case 3:
                U.flags = (U.flags & -65537) | 128;
              case 0:
                if (
                  ((U = F.payload),
                  (j = typeof U == "function" ? U.call(L, P, j) : U),
                  j == null)
                )
                  break e;
                P = _({}, P, j);
                break e;
              case 2:
                tn = !0;
            }
          }
          f.callback !== null &&
            f.lane !== 0 &&
            ((e.flags |= 64),
            (j = o.effects),
            j === null ? (o.effects = [f]) : j.push(f));
        } else
          ((L = {
            eventTime: L,
            lane: j,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            A === null ? ((x = A = L), (m = P)) : (A = A.next = L),
            (u |= j));
        if (((f = f.next), f === null)) {
          if (((f = o.shared.pending), f === null)) break;
          ((j = f),
            (f = j.next),
            (j.next = null),
            (o.lastBaseUpdate = j),
            (o.shared.pending = null));
        }
      } while (!0);
      if (
        (A === null && (m = P),
        (o.baseState = m),
        (o.firstBaseUpdate = x),
        (o.lastBaseUpdate = A),
        (t = o.shared.interleaved),
        t !== null)
      ) {
        o = t;
        do ((u |= o.lane), (o = o.next));
        while (o !== t);
      } else i === null && (o.shared.lanes = 0);
      ((kn |= u), (e.lanes = u), (e.memoizedState = P));
    }
  }
  function xu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != "function"))
            throw Error(l(191, o));
          o.call(r);
        }
      }
  }
  var Tr = {},
    _t = Xt(Tr),
    Rr = Xt(Tr),
    Mr = Xt(Tr);
  function wn(e) {
    if (e === Tr) throw Error(l(174));
    return e;
  }
  function fs(e, t) {
    switch ((xe(Mr, t), xe(Rr, e), xe(_t, Tr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : pi(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = pi(t, e)));
    }
    (Ee(_t), xe(_t, t));
  }
  function qn() {
    (Ee(_t), Ee(Rr), Ee(Mr));
  }
  function ku(e) {
    wn(Mr.current);
    var t = wn(_t.current),
      n = pi(t, e.type);
    t !== n && (xe(Rr, e), xe(_t, n));
  }
  function ps(e) {
    Rr.current === e && (Ee(_t), Ee(Rr));
  }
  var ze = Xt(0);
  function _o(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var ms = [];
  function hs() {
    for (var e = 0; e < ms.length; e++)
      ms[e]._workInProgressVersionPrimary = null;
    ms.length = 0;
  }
  var To = ie.ReactCurrentDispatcher,
    gs = ie.ReactCurrentBatchConfig,
    xn = 0,
    _e = null,
    Ne = null,
    $e = null,
    Ro = !1,
    Lr = !1,
    Or = 0,
    hp = 0;
  function Qe() {
    throw Error(l(321));
  }
  function ys(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!kt(e[n], t[n])) return !1;
    return !0;
  }
  function vs(e, t, n, r, o, i) {
    if (
      ((xn = i),
      (_e = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (To.current = e === null || e.memoizedState === null ? wp : xp),
      (e = n(r, o)),
      Lr)
    ) {
      i = 0;
      do {
        if (((Lr = !1), (Or = 0), 25 <= i)) throw Error(l(301));
        ((i += 1),
          ($e = Ne = null),
          (t.updateQueue = null),
          (To.current = kp),
          (e = n(r, o)));
      } while (Lr);
    }
    if (
      ((To.current = Oo),
      (t = Ne !== null && Ne.next !== null),
      (xn = 0),
      ($e = Ne = _e = null),
      (Ro = !1),
      t)
    )
      throw Error(l(300));
    return e;
  }
  function ws() {
    var e = Or !== 0;
    return ((Or = 0), e);
  }
  function Tt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ($e === null ? (_e.memoizedState = $e = e) : ($e = $e.next = e), $e);
  }
  function ht() {
    if (Ne === null) {
      var e = _e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = $e === null ? _e.memoizedState : $e.next;
    if (t !== null) (($e = t), (Ne = e));
    else {
      if (e === null) throw Error(l(310));
      ((Ne = e),
        (e = {
          memoizedState: Ne.memoizedState,
          baseState: Ne.baseState,
          baseQueue: Ne.baseQueue,
          queue: Ne.queue,
          next: null,
        }),
        $e === null ? (_e.memoizedState = $e = e) : ($e = $e.next = e));
    }
    return $e;
  }
  function Ir(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function xs(e) {
    var t = ht(),
      n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = Ne,
      o = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (o !== null) {
        var u = o.next;
        ((o.next = i.next), (i.next = u));
      }
      ((r.baseQueue = o = i), (n.pending = null));
    }
    if (o !== null) {
      ((i = o.next), (r = r.baseState));
      var f = (u = null),
        m = null,
        x = i;
      do {
        var A = x.lane;
        if ((xn & A) === A)
          (m !== null &&
            (m = m.next =
              {
                lane: 0,
                action: x.action,
                hasEagerState: x.hasEagerState,
                eagerState: x.eagerState,
                next: null,
              }),
            (r = x.hasEagerState ? x.eagerState : e(r, x.action)));
        else {
          var P = {
            lane: A,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          };
          (m === null ? ((f = m = P), (u = r)) : (m = m.next = P),
            (_e.lanes |= A),
            (kn |= A));
        }
        x = x.next;
      } while (x !== null && x !== i);
      (m === null ? (u = r) : (m.next = f),
        kt(r, t.memoizedState) || (rt = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = m),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do ((i = o.lane), (_e.lanes |= i), (kn |= i), (o = o.next));
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ks(e) {
    var t = ht(),
      n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var u = (o = o.next);
      do ((i = e(i, u.action)), (u = u.next));
      while (u !== o);
      (kt(i, t.memoizedState) || (rt = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function Su() {}
  function Eu(e, t) {
    var n = _e,
      r = ht(),
      o = t(),
      i = !kt(r.memoizedState, o);
    if (
      (i && ((r.memoizedState = o), (rt = !0)),
      (r = r.queue),
      Ss(ju.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || ($e !== null && $e.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Nr(9, bu.bind(null, n, r, o, t), void 0, null),
        We === null)
      )
        throw Error(l(349));
      (xn & 30) !== 0 || Cu(n, t, o);
    }
    return o;
  }
  function Cu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = _e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (_e.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function bu(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Au(t) && Pu(e));
  }
  function ju(e, t, n) {
    return n(function () {
      Au(t) && Pu(e);
    });
  }
  function Au(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !kt(e, n);
    } catch {
      return !0;
    }
  }
  function Pu(e) {
    var t = Ut(e, 1);
    t !== null && jt(t, e, 1, -1);
  }
  function zu(e) {
    var t = Tt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ir,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = vp.bind(null, _e, e)),
      [t.memoizedState, e]
    );
  }
  function Nr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = _e.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (_e.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function _u() {
    return ht().memoizedState;
  }
  function Mo(e, t, n, r) {
    var o = Tt();
    ((_e.flags |= e),
      (o.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function Lo(e, t, n, r) {
    var o = ht();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ne !== null) {
      var u = Ne.memoizedState;
      if (((i = u.destroy), r !== null && ys(r, u.deps))) {
        o.memoizedState = Nr(t, n, i, r);
        return;
      }
    }
    ((_e.flags |= e), (o.memoizedState = Nr(1 | t, n, i, r)));
  }
  function Tu(e, t) {
    return Mo(8390656, 8, e, t);
  }
  function Ss(e, t) {
    return Lo(2048, 8, e, t);
  }
  function Ru(e, t) {
    return Lo(4, 2, e, t);
  }
  function Mu(e, t) {
    return Lo(4, 4, e, t);
  }
  function Lu(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ou(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      Lo(4, 4, Lu.bind(null, t, e), n)
    );
  }
  function Es() {}
  function Iu(e, t) {
    var n = ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ys(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Nu(e, t) {
    var n = ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ys(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Du(e, t, n) {
    return (xn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (rt = !0)), (e.memoizedState = n))
      : (kt(n, t) ||
          ((n = ml()), (_e.lanes |= n), (kn |= n), (e.baseState = !0)),
        t);
  }
  function gp(e, t) {
    var n = ge;
    ((ge = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = gs.transition;
    gs.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ge = n), (gs.transition = r));
    }
  }
  function Uu() {
    return ht().memoizedState;
  }
  function yp(e, t, n) {
    var r = an(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Fu(e))
    )
      $u(t, n);
    else if (((n = yu(e, t, n, r)), n !== null)) {
      var o = Je();
      (jt(n, e, r, o), Wu(n, t, r));
    }
  }
  function vp(e, t, n) {
    var r = an(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Fu(e)) $u(t, o);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            f = i(u, n);
          if (((o.hasEagerState = !0), (o.eagerState = f), kt(f, u))) {
            var m = t.interleaved;
            (m === null
              ? ((o.next = o), cs(t))
              : ((o.next = m.next), (m.next = o)),
              (t.interleaved = o));
            return;
          }
        } catch {
        } finally {
        }
      ((n = yu(e, t, o, r)),
        n !== null && ((o = Je()), jt(n, e, r, o), Wu(n, t, r)));
    }
  }
  function Fu(e) {
    var t = e.alternate;
    return e === _e || (t !== null && t === _e);
  }
  function $u(e, t) {
    Lr = Ro = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Wu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), bi(e, n));
    }
  }
  var Oo = {
      readContext: mt,
      useCallback: Qe,
      useContext: Qe,
      useEffect: Qe,
      useImperativeHandle: Qe,
      useInsertionEffect: Qe,
      useLayoutEffect: Qe,
      useMemo: Qe,
      useReducer: Qe,
      useRef: Qe,
      useState: Qe,
      useDebugValue: Qe,
      useDeferredValue: Qe,
      useTransition: Qe,
      useMutableSource: Qe,
      useSyncExternalStore: Qe,
      useId: Qe,
      unstable_isNewReconciler: !1,
    },
    wp = {
      readContext: mt,
      useCallback: function (e, t) {
        return ((Tt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: mt,
      useEffect: Tu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Mo(4194308, 4, Lu.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Mo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Mo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Tt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Tt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = yp.bind(null, _e, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Tt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: zu,
      useDebugValue: Es,
      useDeferredValue: function (e) {
        return (Tt().memoizedState = e);
      },
      useTransition: function () {
        var e = zu(!1),
          t = e[0];
        return ((e = gp.bind(null, e[1])), (Tt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = _e,
          o = Tt();
        if (je) {
          if (n === void 0) throw Error(l(407));
          n = n();
        } else {
          if (((n = t()), We === null)) throw Error(l(349));
          (xn & 30) !== 0 || Cu(r, t, n);
        }
        o.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (o.queue = i),
          Tu(ju.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          Nr(9, bu.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Tt(),
          t = We.identifierPrefix;
        if (je) {
          var n = Dt,
            r = Nt;
          ((n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Or++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = hp++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    xp = {
      readContext: mt,
      useCallback: Iu,
      useContext: mt,
      useEffect: Ss,
      useImperativeHandle: Ou,
      useInsertionEffect: Ru,
      useLayoutEffect: Mu,
      useMemo: Nu,
      useReducer: xs,
      useRef: _u,
      useState: function () {
        return xs(Ir);
      },
      useDebugValue: Es,
      useDeferredValue: function (e) {
        var t = ht();
        return Du(t, Ne.memoizedState, e);
      },
      useTransition: function () {
        var e = xs(Ir)[0],
          t = ht().memoizedState;
        return [e, t];
      },
      useMutableSource: Su,
      useSyncExternalStore: Eu,
      useId: Uu,
      unstable_isNewReconciler: !1,
    },
    kp = {
      readContext: mt,
      useCallback: Iu,
      useContext: mt,
      useEffect: Ss,
      useImperativeHandle: Ou,
      useInsertionEffect: Ru,
      useLayoutEffect: Mu,
      useMemo: Nu,
      useReducer: ks,
      useRef: _u,
      useState: function () {
        return ks(Ir);
      },
      useDebugValue: Es,
      useDeferredValue: function (e) {
        var t = ht();
        return Ne === null ? (t.memoizedState = e) : Du(t, Ne.memoizedState, e);
      },
      useTransition: function () {
        var e = ks(Ir)[0],
          t = ht().memoizedState;
        return [e, t];
      },
      useMutableSource: Su,
      useSyncExternalStore: Eu,
      useId: Uu,
      unstable_isNewReconciler: !1,
    };
  function Et(e, t) {
    if (e && e.defaultProps) {
      ((t = _({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Cs(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Io = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? pn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Je(),
        o = an(e),
        i = Ft(r, o);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = nn(e, i, o)),
        t !== null && (jt(t, e, o, r), Po(t, e, o)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Je(),
        o = an(e),
        i = Ft(r, o);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = nn(e, i, o)),
        t !== null && (jt(t, e, o, r), Po(t, e, o)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Je(),
        r = an(e),
        o = Ft(n, r);
      ((o.tag = 2),
        t != null && (o.callback = t),
        (t = nn(e, o, r)),
        t !== null && (jt(t, e, r, n), Po(t, e, r)));
    },
  };
  function Bu(e, t, n, r, o, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Er(n, r) || !Er(o, i)
          : !0
    );
  }
  function Hu(e, t, n) {
    var r = !1,
      o = Jt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = mt(i))
        : ((o = nt(t) ? hn : Ge.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Hn(e, o) : Jt)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Io),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Vu(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Io.enqueueReplaceState(t, t.state, null));
  }
  function bs(e, t, n, r) {
    var o = e.stateNode;
    ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), ds(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (o.context = mt(i))
      : ((i = nt(t) ? hn : Ge.current), (o.context = Hn(e, i))),
      (o.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Cs(e, t, i, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && Io.enqueueReplaceState(o, o.state, null),
        zo(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Xn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += ae(r)), (r = r.return));
      while (r);
      var o = n;
    } catch (i) {
      o =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function js(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function As(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Sp = typeof WeakMap == "function" ? WeakMap : Map;
  function Ku(e, t, n) {
    ((n = Ft(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Bo || ((Bo = !0), (Ws = r)), As(e, t));
      }),
      n
    );
  }
  function Gu(e, t, n) {
    ((n = Ft(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      ((n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          As(e, t);
        }));
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          (As(e, t),
            typeof r != "function" &&
              (on === null ? (on = new Set([this])) : on.add(this)));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function Qu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Sp();
      var o = new Set();
      r.set(t, o);
    } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
    o.has(n) || (o.add(n), (e = Ip.bind(null, e, t, n)), t.then(e, e));
  }
  function Zu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Yu(e, t, n, r, o) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Ft(-1, 1)), (t.tag = 2), nn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = o), e);
  }
  var Ep = ie.ReactCurrentOwner,
    rt = !1;
  function Xe(e, t, n, r) {
    t.child = e === null ? gu(t, null, n, r) : Qn(t, e.child, n, r);
  }
  function qu(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
      Yn(t, o),
      (r = vs(e, t, n, r, i, o)),
      (n = ws()),
      e !== null && !rt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          $t(e, t, o))
        : (je && n && ts(t), (t.flags |= 1), Xe(e, t, r, o), t.child)
    );
  }
  function Xu(e, t, n, r, o) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !Zs(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Ju(e, t, i, r, o))
        : ((e = Zo(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), (e.lanes & o) === 0)) {
      var u = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Er), n(u, r) && e.ref === t.ref)
      )
        return $t(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = un(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ju(e, t, n, r, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Er(i, r) && e.ref === t.ref)
        if (((rt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
          (e.flags & 131072) !== 0 && (rt = !0);
        else return ((t.lanes = e.lanes), $t(e, t, o));
    }
    return Ps(e, t, n, r, o);
  }
  function ec(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          xe(er, dt),
          (dt |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            xe(er, dt),
            (dt |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          xe(er, dt),
          (dt |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        xe(er, dt),
        (dt |= r));
    return (Xe(e, t, o, n), t.child);
  }
  function tc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ps(e, t, n, r, o) {
    var i = nt(n) ? hn : Ge.current;
    return (
      (i = Hn(t, i)),
      Yn(t, o),
      (n = vs(e, t, n, r, i, o)),
      (r = ws()),
      e !== null && !rt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          $t(e, t, o))
        : (je && r && ts(t), (t.flags |= 1), Xe(e, t, n, o), t.child)
    );
  }
  function nc(e, t, n, r, o) {
    if (nt(n)) {
      var i = !0;
      xo(t);
    } else i = !1;
    if ((Yn(t, o), t.stateNode === null))
      (Do(e, t), Hu(t, n, r), bs(t, n, r, o), (r = !0));
    else if (e === null) {
      var u = t.stateNode,
        f = t.memoizedProps;
      u.props = f;
      var m = u.context,
        x = n.contextType;
      typeof x == "object" && x !== null
        ? (x = mt(x))
        : ((x = nt(n) ? hn : Ge.current), (x = Hn(t, x)));
      var A = n.getDerivedStateFromProps,
        P =
          typeof A == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      (P ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((f !== r || m !== x) && Vu(t, u, r, x)),
        (tn = !1));
      var j = t.memoizedState;
      ((u.state = j),
        zo(t, r, u, o),
        (m = t.memoizedState),
        f !== r || j !== m || tt.current || tn
          ? (typeof A == "function" && (Cs(t, n, A, r), (m = t.memoizedState)),
            (f = tn || Bu(t, n, f, r, j, m, x))
              ? (P ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = m)),
            (u.props = r),
            (u.state = m),
            (u.context = x),
            (r = f))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((u = t.stateNode),
        vu(e, t),
        (f = t.memoizedProps),
        (x = t.type === t.elementType ? f : Et(t.type, f)),
        (u.props = x),
        (P = t.pendingProps),
        (j = u.context),
        (m = n.contextType),
        typeof m == "object" && m !== null
          ? (m = mt(m))
          : ((m = nt(n) ? hn : Ge.current), (m = Hn(t, m))));
      var L = n.getDerivedStateFromProps;
      ((A =
        typeof L == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((f !== P || j !== m) && Vu(t, u, r, m)),
        (tn = !1),
        (j = t.memoizedState),
        (u.state = j),
        zo(t, r, u, o));
      var U = t.memoizedState;
      f !== P || j !== U || tt.current || tn
        ? (typeof L == "function" && (Cs(t, n, L, r), (U = t.memoizedState)),
          (x = tn || Bu(t, n, x, r, j, U, m) || !1)
            ? (A ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, U, m),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, U, m)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (f === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = U)),
          (u.props = r),
          (u.state = U),
          (u.context = m),
          (r = x))
        : (typeof u.componentDidUpdate != "function" ||
            (f === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (f === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return zs(e, t, n, r, i, o);
  }
  function zs(e, t, n, r, o, i) {
    tc(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return (o && au(t, n, !1), $t(e, t, i));
    ((r = t.stateNode), (Ep.current = t));
    var f =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = Qn(t, e.child, null, i)), (t.child = Qn(t, null, f, i)))
        : Xe(e, t, f, i),
      (t.memoizedState = r.state),
      o && au(t, n, !0),
      t.child
    );
  }
  function rc(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? iu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && iu(e, t.context, !1),
      fs(e, t.containerInfo));
  }
  function oc(e, t, n, r, o) {
    return (Gn(), is(o), (t.flags |= 256), Xe(e, t, n, r), t.child);
  }
  var _s = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ts(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ic(e, t, n) {
    var r = t.pendingProps,
      o = ze.current,
      i = !1,
      u = (t.flags & 128) !== 0,
      f;
    if (
      ((f = u) ||
        (f = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      f
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      xe(ze, o & 1),
      e === null)
    )
      return (
        os(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((u = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (u = { mode: "hidden", children: u }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = u))
                  : (i = Yo(u, r, 0, null)),
                (e = bn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Ts(n)),
                (t.memoizedState = _s),
                e)
              : Rs(t, u))
      );
    if (((o = e.memoizedState), o !== null && ((f = o.dehydrated), f !== null)))
      return Cp(e, t, u, r, f, o, n);
    if (i) {
      ((i = r.fallback), (u = t.mode), (o = e.child), (f = o.sibling));
      var m = { mode: "hidden", children: r.children };
      return (
        (u & 1) === 0 && t.child !== o
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = m),
            (t.deletions = null))
          : ((r = un(o, m)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        f !== null ? (i = un(f, i)) : ((i = bn(i, u, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? Ts(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (i.memoizedState = u),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = _s),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = un(i, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Rs(e, t) {
    return (
      (t = Yo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function No(e, t, n, r) {
    return (
      r !== null && is(r),
      Qn(t, e.child, null, n),
      (e = Rs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Cp(e, t, n, r, o, i, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = js(Error(l(422)))), No(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (o = t.mode),
            (r = Yo({ mode: "visible", children: r.children }, o, 0, null)),
            (i = bn(i, o, u, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && Qn(t, e.child, null, u),
            (t.child.memoizedState = Ts(u)),
            (t.memoizedState = _s),
            i);
    if ((t.mode & 1) === 0) return No(e, t, u, null);
    if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var f = r.dgst;
      return (
        (r = f),
        (i = Error(l(419))),
        (r = js(i, r, void 0)),
        No(e, t, u, r)
      );
    }
    if (((f = (u & e.childLanes) !== 0), rt || f)) {
      if (((r = We), r !== null)) {
        switch (u & -u) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        ((o = (o & (r.suspendedLanes | u)) !== 0 ? 0 : o),
          o !== 0 &&
            o !== i.retryLane &&
            ((i.retryLane = o), Ut(e, o), jt(r, e, o, -1)));
      }
      return (Qs(), (r = js(Error(l(421)))), No(e, t, u, r));
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Np.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (ct = qt(o.nextSibling)),
        (ut = t),
        (je = !0),
        (St = null),
        e !== null &&
          ((ft[pt++] = Nt),
          (ft[pt++] = Dt),
          (ft[pt++] = gn),
          (Nt = e.id),
          (Dt = e.overflow),
          (gn = t)),
        (t = Rs(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function sc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), us(e.return, t, n));
  }
  function Ms(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = o));
  }
  function ac(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      i = r.tail;
    if ((Xe(e, t, r.children, n), (r = ze.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && sc(e, n, t);
          else if (e.tag === 19) sc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((xe(ze, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null;)
            ((e = n.alternate),
              e !== null && _o(e) === null && (o = n),
              (n = n.sibling));
          ((n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            Ms(t, !1, o, n, i));
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null;) {
            if (((e = o.alternate), e !== null && _o(e) === null)) {
              t.child = o;
              break;
            }
            ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
          }
          Ms(t, !0, n, null, i);
          break;
        case "together":
          Ms(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Do(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function $t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (kn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (
        e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = un(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function bp(e, t, n) {
    switch (t.tag) {
      case 3:
        (rc(t), Gn());
        break;
      case 5:
        ku(t);
        break;
      case 1:
        nt(t.type) && xo(t);
        break;
      case 4:
        fs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        (xe(jo, r._currentValue), (r._currentValue = o));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (xe(ze, ze.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ic(e, t, n)
              : (xe(ze, ze.current & 1),
                (e = $t(e, t, n)),
                e !== null ? e.sibling : null);
        xe(ze, ze.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ac(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          xe(ze, ze.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), ec(e, t, n));
    }
    return $t(e, t, n);
  }
  var lc, Ls, uc, cc;
  ((lc = function (e, t) {
    for (var n = t.child; n !== null;) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (Ls = function () {}),
    (uc = function (e, t, n, r) {
      var o = e.memoizedProps;
      if (o !== r) {
        ((e = t.stateNode), wn(_t.current));
        var i = null;
        switch (n) {
          case "input":
            ((o = Mt(e, o)), (r = Mt(e, r)), (i = []));
            break;
          case "select":
            ((o = _({}, o, { value: void 0 })),
              (r = _({}, r, { value: void 0 })),
              (i = []));
            break;
          case "textarea":
            ((o = fi(e, o)), (r = fi(e, r)), (i = []));
            break;
          default:
            typeof o.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = yo);
        }
        mi(n, r);
        var u;
        n = null;
        for (x in o)
          if (!r.hasOwnProperty(x) && o.hasOwnProperty(x) && o[x] != null)
            if (x === "style") {
              var f = o[x];
              for (u in f) f.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              x !== "dangerouslySetInnerHTML" &&
                x !== "children" &&
                x !== "suppressContentEditableWarning" &&
                x !== "suppressHydrationWarning" &&
                x !== "autoFocus" &&
                (p.hasOwnProperty(x)
                  ? i || (i = [])
                  : (i = i || []).push(x, null));
        for (x in r) {
          var m = r[x];
          if (
            ((f = o?.[x]),
            r.hasOwnProperty(x) && m !== f && (m != null || f != null))
          )
            if (x === "style")
              if (f) {
                for (u in f)
                  !f.hasOwnProperty(u) ||
                    (m && m.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in m)
                  m.hasOwnProperty(u) &&
                    f[u] !== m[u] &&
                    (n || (n = {}), (n[u] = m[u]));
              } else (n || (i || (i = []), i.push(x, n)), (n = m));
            else
              x === "dangerouslySetInnerHTML"
                ? ((m = m ? m.__html : void 0),
                  (f = f ? f.__html : void 0),
                  m != null && f !== m && (i = i || []).push(x, m))
                : x === "children"
                  ? (typeof m != "string" && typeof m != "number") ||
                    (i = i || []).push(x, "" + m)
                  : x !== "suppressContentEditableWarning" &&
                    x !== "suppressHydrationWarning" &&
                    (p.hasOwnProperty(x)
                      ? (m != null && x === "onScroll" && Se("scroll", e),
                        i || f === m || (i = []))
                      : (i = i || []).push(x, m));
        }
        n && (i = i || []).push("style", n);
        var x = i;
        (t.updateQueue = x) && (t.flags |= 4);
      }
    }),
    (cc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Dr(e, t) {
    if (!je)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null;)
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null;)
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var o = e.child; o !== null;)
        ((n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags & 14680064),
          (r |= o.flags & 14680064),
          (o.return = e),
          (o = o.sibling));
    else
      for (o = e.child; o !== null;)
        ((n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags),
          (r |= o.flags),
          (o.return = e),
          (o = o.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function jp(e, t, n) {
    var r = t.pendingProps;
    switch ((ns(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ze(t), null);
      case 1:
        return (nt(t.type) && wo(), Ze(t), null);
      case 3:
        return (
          (r = t.stateNode),
          qn(),
          Ee(tt),
          Ee(Ge),
          hs(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Co(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), St !== null && (Vs(St), (St = null)))),
          Ls(e, t),
          Ze(t),
          null
        );
      case 5:
        ps(t);
        var o = wn(Mr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (uc(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(l(166));
            return (Ze(t), null);
          }
          if (((e = wn(_t.current)), Co(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[zt] = t), (r[Pr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (Se("cancel", r), Se("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                Se("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < br.length; o++) Se(br[o], r);
                break;
              case "source":
                Se("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (Se("error", r), Se("load", r));
                break;
              case "details":
                Se("toggle", r);
                break;
              case "input":
                (et(r, i), Se("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }),
                  Se("invalid", r));
                break;
              case "textarea":
                (Ga(r, i), Se("invalid", r));
            }
            (mi(n, i), (o = null));
            for (var u in i)
              if (i.hasOwnProperty(u)) {
                var f = i[u];
                u === "children"
                  ? typeof f == "string"
                    ? r.textContent !== f &&
                      (i.suppressHydrationWarning !== !0 &&
                        go(r.textContent, f, e),
                      (o = ["children", f]))
                    : typeof f == "number" &&
                      r.textContent !== "" + f &&
                      (i.suppressHydrationWarning !== !0 &&
                        go(r.textContent, f, e),
                      (o = ["children", "" + f]))
                  : p.hasOwnProperty(u) &&
                    f != null &&
                    u === "onScroll" &&
                    Se("scroll", r);
              }
            switch (n) {
              case "input":
                (qe(r), Ka(r, i, !0));
                break;
              case "textarea":
                (qe(r), Za(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = yo);
            }
            ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((u = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ya(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)),
                      n === "select" &&
                        ((u = e),
                        r.multiple
                          ? (u.multiple = !0)
                          : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[zt] = t),
              (e[Pr] = r),
              lc(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((u = hi(n, r)), n)) {
                case "dialog":
                  (Se("cancel", e), Se("close", e), (o = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Se("load", e), (o = r));
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < br.length; o++) Se(br[o], e);
                  o = r;
                  break;
                case "source":
                  (Se("error", e), (o = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (Se("error", e), Se("load", e), (o = r));
                  break;
                case "details":
                  (Se("toggle", e), (o = r));
                  break;
                case "input":
                  (et(e, r), (o = Mt(e, r)), Se("invalid", e));
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = _({}, r, { value: void 0 })),
                    Se("invalid", e));
                  break;
                case "textarea":
                  (Ga(e, r), (o = fi(e, r)), Se("invalid", e));
                  break;
                default:
                  o = r;
              }
              (mi(n, o), (f = o));
              for (i in f)
                if (f.hasOwnProperty(i)) {
                  var m = f[i];
                  i === "style"
                    ? Ja(e, m)
                    : i === "dangerouslySetInnerHTML"
                      ? ((m = m ? m.__html : void 0), m != null && qa(e, m))
                      : i === "children"
                        ? typeof m == "string"
                          ? (n !== "textarea" || m !== "") && sr(e, m)
                          : typeof m == "number" && sr(e, "" + m)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (p.hasOwnProperty(i)
                            ? m != null && i === "onScroll" && Se("scroll", e)
                            : m != null && ke(e, i, m, u));
                }
              switch (n) {
                case "input":
                  (qe(e), Ka(e, r, !1));
                  break;
                case "textarea":
                  (qe(e), Za(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ce(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? Rn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        Rn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = yo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Ze(t), null);
      case 6:
        if (e && t.stateNode != null) cc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(l(166));
          if (((n = wn(Mr.current)), wn(_t.current), Co(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[zt] = t),
              (i = r.nodeValue !== n) && ((e = ut), e !== null))
            )
              switch (e.tag) {
                case 3:
                  go(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    go(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[zt] = t),
              (t.stateNode = r));
        }
        return (Ze(t), null);
      case 13:
        if (
          (Ee(ze),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (je && ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (pu(), Gn(), (t.flags |= 98560), (i = !1));
          else if (((i = Co(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(l(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(l(317));
              i[zt] = t;
            } else
              (Gn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ze(t), (i = !1));
          } else (St !== null && (Vs(St), (St = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ze.current & 1) !== 0
                  ? De === 0 && (De = 3)
                  : Qs())),
            t.updateQueue !== null && (t.flags |= 4),
            Ze(t),
            null);
      case 4:
        return (
          qn(),
          Ls(e, t),
          e === null && jr(t.stateNode.containerInfo),
          Ze(t),
          null
        );
      case 10:
        return (ls(t.type._context), Ze(t), null);
      case 17:
        return (nt(t.type) && wo(), Ze(t), null);
      case 19:
        if ((Ee(ze), (i = t.memoizedState), i === null)) return (Ze(t), null);
        if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (r) Dr(i, !1);
          else {
            if (De !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((u = _o(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Dr(i, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (u = i.alternate),
                      u === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = u.childLanes),
                          (i.lanes = u.lanes),
                          (i.child = u.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = u.memoizedProps),
                          (i.memoizedState = u.memoizedState),
                          (i.updateQueue = u.updateQueue),
                          (i.type = u.type),
                          (e = u.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (xe(ze, (ze.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Le() > tr &&
              ((t.flags |= 128), (r = !0), Dr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = _o(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Dr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !u.alternate &&
                  !je)
              )
                return (Ze(t), null);
            } else
              2 * Le() - i.renderingStartTime > tr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Dr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = i.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Le()),
            (t.sibling = null),
            (n = ze.current),
            xe(ze, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ze(t), null);
      case 22:
      case 23:
        return (
          Gs(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (dt & 1073741824) !== 0 &&
              (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ze(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Ap(e, t) {
    switch ((ns(t), t.tag)) {
      case 1:
        return (
          nt(t.type) && wo(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          qn(),
          Ee(tt),
          Ee(Ge),
          hs(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (ps(t), null);
      case 13:
        if (
          (Ee(ze), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340));
          Gn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (Ee(ze), null);
      case 4:
        return (qn(), null);
      case 10:
        return (ls(t.type._context), null);
      case 22:
      case 23:
        return (Gs(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Uo = !1,
    Ye = !1,
    Pp = typeof WeakSet == "function" ? WeakSet : Set,
    I = null;
  function Jn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Te(e, t, r);
        }
      else n.current = null;
  }
  function Os(e, t, n) {
    try {
      n();
    } catch (r) {
      Te(e, t, r);
    }
  }
  var dc = !1;
  function zp(e, t) {
    if (((Gi = oo), (e = Bl()), Ui(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var o = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, i.nodeType);
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              f = -1,
              m = -1,
              x = 0,
              A = 0,
              P = e,
              j = null;
            t: for (;;) {
              for (
                var L;
                P !== n || (o !== 0 && P.nodeType !== 3) || (f = u + o),
                  P !== i || (r !== 0 && P.nodeType !== 3) || (m = u + r),
                  P.nodeType === 3 && (u += P.nodeValue.length),
                  (L = P.firstChild) !== null;
              )
                ((j = P), (P = L));
              for (;;) {
                if (P === e) break t;
                if (
                  (j === n && ++x === o && (f = u),
                  j === i && ++A === r && (m = u),
                  (L = P.nextSibling) !== null)
                )
                  break;
                ((P = j), (j = P.parentNode));
              }
              P = L;
            }
            n = f === -1 || m === -1 ? null : { start: f, end: m };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Qi = { focusedElem: e, selectionRange: n }, oo = !1, I = t;
      I !== null;
    )
      if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (I = e));
      else
        for (; I !== null;) {
          t = I;
          try {
            var U = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (U !== null) {
                    var F = U.memoizedProps,
                      Oe = U.memoizedState,
                      v = t.stateNode,
                      h = v.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? F : Et(t.type, F),
                        Oe,
                      );
                    v.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var w = t.stateNode.containerInfo;
                  w.nodeType === 1
                    ? (w.textContent = "")
                    : w.nodeType === 9 &&
                      w.documentElement &&
                      w.removeChild(w.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch (z) {
            Te(t, t.return, z);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (I = e));
            break;
          }
          I = t.return;
        }
    return ((U = dc), (dc = !1), U);
  }
  function Ur(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          ((o.destroy = void 0), i !== void 0 && Os(t, n, i));
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Fo(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Is(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function fc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), fc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[zt],
          delete t[Pr],
          delete t[Xi],
          delete t[dp],
          delete t[fp])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function pc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function mc(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || pc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ns(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = yo)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ns(e, t, n), e = e.sibling; e !== null;)
        (Ns(e, t, n), (e = e.sibling));
  }
  function Ds(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ds(e, t, n), e = e.sibling; e !== null;)
        (Ds(e, t, n), (e = e.sibling));
  }
  var Ve = null,
    Ct = !1;
  function rn(e, t, n) {
    for (n = n.child; n !== null;) (hc(e, t, n), (n = n.sibling));
  }
  function hc(e, t, n) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function")
      try {
        Pt.onCommitFiberUnmount(Xr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ye || Jn(n, t);
      case 6:
        var r = Ve,
          o = Ct;
        ((Ve = null),
          rn(e, t, n),
          (Ve = r),
          (Ct = o),
          Ve !== null &&
            (Ct
              ? ((e = Ve),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ve.removeChild(n.stateNode)));
        break;
      case 18:
        Ve !== null &&
          (Ct
            ? ((e = Ve),
              (n = n.stateNode),
              e.nodeType === 8
                ? qi(e.parentNode, n)
                : e.nodeType === 1 && qi(e, n),
              yr(e))
            : qi(Ve, n.stateNode));
        break;
      case 4:
        ((r = Ve),
          (o = Ct),
          (Ve = n.stateNode.containerInfo),
          (Ct = !0),
          rn(e, t, n),
          (Ve = r),
          (Ct = o));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ye &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          o = r = r.next;
          do {
            var i = o,
              u = i.destroy;
            ((i = i.tag),
              u !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Os(n, t, u),
              (o = o.next));
          } while (o !== r);
        }
        rn(e, t, n);
        break;
      case 1:
        if (
          !Ye &&
          (Jn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (f) {
            Te(n, t, f);
          }
        rn(e, t, n);
        break;
      case 21:
        rn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ye = (r = Ye) || n.memoizedState !== null), rn(e, t, n), (Ye = r))
          : rn(e, t, n);
        break;
      default:
        rn(e, t, n);
    }
  }
  function gc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Pp()),
        t.forEach(function (r) {
          var o = Dp.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        }));
    }
  }
  function bt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
          var i = e,
            u = t,
            f = u;
          e: for (; f !== null;) {
            switch (f.tag) {
              case 5:
                ((Ve = f.stateNode), (Ct = !1));
                break e;
              case 3:
                ((Ve = f.stateNode.containerInfo), (Ct = !0));
                break e;
              case 4:
                ((Ve = f.stateNode.containerInfo), (Ct = !0));
                break e;
            }
            f = f.return;
          }
          if (Ve === null) throw Error(l(160));
          (hc(i, u, o), (Ve = null), (Ct = !1));
          var m = o.alternate;
          (m !== null && (m.return = null), (o.return = null));
        } catch (x) {
          Te(o, t, x);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null;) (yc(t, e), (t = t.sibling));
  }
  function yc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((bt(t, e), Rt(e), r & 4)) {
          try {
            (Ur(3, e, e.return), Fo(3, e));
          } catch (F) {
            Te(e, e.return, F);
          }
          try {
            Ur(5, e, e.return);
          } catch (F) {
            Te(e, e.return, F);
          }
        }
        break;
      case 1:
        (bt(t, e), Rt(e), r & 512 && n !== null && Jn(n, n.return));
        break;
      case 5:
        if (
          (bt(t, e),
          Rt(e),
          r & 512 && n !== null && Jn(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            sr(o, "");
          } catch (F) {
            Te(e, e.return, F);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var i = e.memoizedProps,
            u = n !== null ? n.memoizedProps : i,
            f = e.type,
            m = e.updateQueue;
          if (((e.updateQueue = null), m !== null))
            try {
              (f === "input" &&
                i.type === "radio" &&
                i.name != null &&
                Lt(o, i),
                hi(f, u));
              var x = hi(f, i);
              for (u = 0; u < m.length; u += 2) {
                var A = m[u],
                  P = m[u + 1];
                A === "style"
                  ? Ja(o, P)
                  : A === "dangerouslySetInnerHTML"
                    ? qa(o, P)
                    : A === "children"
                      ? sr(o, P)
                      : ke(o, A, P, x);
              }
              switch (f) {
                case "input":
                  or(o, i);
                  break;
                case "textarea":
                  Qa(o, i);
                  break;
                case "select":
                  var j = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!i.multiple;
                  var L = i.value;
                  L != null
                    ? Rn(o, !!i.multiple, L, !1)
                    : j !== !!i.multiple &&
                      (i.defaultValue != null
                        ? Rn(o, !!i.multiple, i.defaultValue, !0)
                        : Rn(o, !!i.multiple, i.multiple ? [] : "", !1));
              }
              o[Pr] = i;
            } catch (F) {
              Te(e, e.return, F);
            }
        }
        break;
      case 6:
        if ((bt(t, e), Rt(e), r & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          ((o = e.stateNode), (i = e.memoizedProps));
          try {
            o.nodeValue = i;
          } catch (F) {
            Te(e, e.return, F);
          }
        }
        break;
      case 3:
        if (
          (bt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            yr(t.containerInfo);
          } catch (F) {
            Te(e, e.return, F);
          }
        break;
      case 4:
        (bt(t, e), Rt(e));
        break;
      case 13:
        (bt(t, e),
          Rt(e),
          (o = e.child),
          o.flags & 8192 &&
            ((i = o.memoizedState !== null),
            (o.stateNode.isHidden = i),
            !i ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              ($s = Le())),
          r & 4 && gc(e));
        break;
      case 22:
        if (
          ((A = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ye = (x = Ye) || A), bt(t, e), (Ye = x)) : bt(t, e),
          Rt(e),
          r & 8192)
        ) {
          if (
            ((x = e.memoizedState !== null),
            (e.stateNode.isHidden = x) && !A && (e.mode & 1) !== 0)
          )
            for (I = e, A = e.child; A !== null;) {
              for (P = I = A; I !== null;) {
                switch (((j = I), (L = j.child), j.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ur(4, j, j.return);
                    break;
                  case 1:
                    Jn(j, j.return);
                    var U = j.stateNode;
                    if (typeof U.componentWillUnmount == "function") {
                      ((r = j), (n = j.return));
                      try {
                        ((t = r),
                          (U.props = t.memoizedProps),
                          (U.state = t.memoizedState),
                          U.componentWillUnmount());
                      } catch (F) {
                        Te(r, n, F);
                      }
                    }
                    break;
                  case 5:
                    Jn(j, j.return);
                    break;
                  case 22:
                    if (j.memoizedState !== null) {
                      xc(P);
                      continue;
                    }
                }
                L !== null ? ((L.return = j), (I = L)) : xc(P);
              }
              A = A.sibling;
            }
          e: for (A = null, P = e; ;) {
            if (P.tag === 5) {
              if (A === null) {
                A = P;
                try {
                  ((o = P.stateNode),
                    x
                      ? ((i = o.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((f = P.stateNode),
                        (m = P.memoizedProps.style),
                        (u =
                          m != null && m.hasOwnProperty("display")
                            ? m.display
                            : null),
                        (f.style.display = Xa("display", u))));
                } catch (F) {
                  Te(e, e.return, F);
                }
              }
            } else if (P.tag === 6) {
              if (A === null)
                try {
                  P.stateNode.nodeValue = x ? "" : P.memoizedProps;
                } catch (F) {
                  Te(e, e.return, F);
                }
            } else if (
              ((P.tag !== 22 && P.tag !== 23) ||
                P.memoizedState === null ||
                P === e) &&
              P.child !== null
            ) {
              ((P.child.return = P), (P = P.child));
              continue;
            }
            if (P === e) break e;
            for (; P.sibling === null;) {
              if (P.return === null || P.return === e) break e;
              (A === P && (A = null), (P = P.return));
            }
            (A === P && (A = null),
              (P.sibling.return = P.return),
              (P = P.sibling));
          }
        }
        break;
      case 19:
        (bt(t, e), Rt(e), r & 4 && gc(e));
        break;
      case 21:
        break;
      default:
        (bt(t, e), Rt(e));
    }
  }
  function Rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (pc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(l(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (sr(o, ""), (r.flags &= -33));
            var i = mc(e);
            Ds(e, i, o);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              f = mc(e);
            Ns(e, f, u);
            break;
          default:
            throw Error(l(161));
        }
      } catch (m) {
        Te(e, e.return, m);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function _p(e, t, n) {
    ((I = e), vc(e));
  }
  function vc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null;) {
      var o = I,
        i = o.child;
      if (o.tag === 22 && r) {
        var u = o.memoizedState !== null || Uo;
        if (!u) {
          var f = o.alternate,
            m = (f !== null && f.memoizedState !== null) || Ye;
          f = Uo;
          var x = Ye;
          if (((Uo = u), (Ye = m) && !x))
            for (I = o; I !== null;)
              ((u = I),
                (m = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? kc(o)
                  : m !== null
                    ? ((m.return = u), (I = m))
                    : kc(o));
          for (; i !== null;) ((I = i), vc(i), (i = i.sibling));
          ((I = o), (Uo = f), (Ye = x));
        }
        wc(e);
      } else
        (o.subtreeFlags & 8772) !== 0 && i !== null
          ? ((i.return = o), (I = i))
          : wc(e);
    }
  }
  function wc(e) {
    for (; I !== null;) {
      var t = I;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ye || Fo(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ye)
                  if (n === null) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Et(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = t.updateQueue;
                i !== null && xu(t, i, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  xu(t, u, n);
                }
                break;
              case 5:
                var f = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = f;
                  var m = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      m.autoFocus && n.focus();
                      break;
                    case "img":
                      m.src && (n.src = m.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var x = t.alternate;
                  if (x !== null) {
                    var A = x.memoizedState;
                    if (A !== null) {
                      var P = A.dehydrated;
                      P !== null && yr(P);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(l(163));
            }
          Ye || (t.flags & 512 && Is(t));
        } catch (j) {
          Te(t, t.return, j);
        }
      }
      if (t === e) {
        I = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (I = n));
        break;
      }
      I = t.return;
    }
  }
  function xc(e) {
    for (; I !== null;) {
      var t = I;
      if (t === e) {
        I = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (I = n));
        break;
      }
      I = t.return;
    }
  }
  function kc(e) {
    for (; I !== null;) {
      var t = I;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Fo(4, t);
            } catch (m) {
              Te(t, n, m);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (m) {
                Te(t, o, m);
              }
            }
            var i = t.return;
            try {
              Is(t);
            } catch (m) {
              Te(t, i, m);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Is(t);
            } catch (m) {
              Te(t, u, m);
            }
        }
      } catch (m) {
        Te(t, t.return, m);
      }
      if (t === e) {
        I = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        ((f.return = t.return), (I = f));
        break;
      }
      I = t.return;
    }
  }
  var Tp = Math.ceil,
    $o = ie.ReactCurrentDispatcher,
    Us = ie.ReactCurrentOwner,
    gt = ie.ReactCurrentBatchConfig,
    fe = 0,
    We = null,
    Ie = null,
    Ke = 0,
    dt = 0,
    er = Xt(0),
    De = 0,
    Fr = null,
    kn = 0,
    Wo = 0,
    Fs = 0,
    $r = null,
    ot = null,
    $s = 0,
    tr = 1 / 0,
    Wt = null,
    Bo = !1,
    Ws = null,
    on = null,
    Ho = !1,
    sn = null,
    Vo = 0,
    Wr = 0,
    Bs = null,
    Ko = -1,
    Go = 0;
  function Je() {
    return (fe & 6) !== 0 ? Le() : Ko !== -1 ? Ko : (Ko = Le());
  }
  function an(e) {
    return (e.mode & 1) === 0
      ? 1
      : (fe & 2) !== 0 && Ke !== 0
        ? Ke & -Ke
        : mp.transition !== null
          ? (Go === 0 && (Go = ml()), Go)
          : ((e = ge),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : El(e.type))),
            e);
  }
  function jt(e, t, n, r) {
    if (50 < Wr) throw ((Wr = 0), (Bs = null), Error(l(185)));
    (fr(e, n, r),
      ((fe & 2) === 0 || e !== We) &&
        (e === We && ((fe & 2) === 0 && (Wo |= n), De === 4 && ln(e, Ke)),
        it(e, r),
        n === 1 &&
          fe === 0 &&
          (t.mode & 1) === 0 &&
          ((tr = Le() + 500), ko && en())));
  }
  function it(e, t) {
    var n = e.callbackNode;
    mf(e, t);
    var r = to(e, e === We ? Ke : 0);
    if (r === 0)
      (n !== null && dl(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && dl(n), t === 1))
        (e.tag === 0 ? pp(Ec.bind(null, e)) : lu(Ec.bind(null, e)),
          up(function () {
            (fe & 6) === 0 && en();
          }),
          (n = null));
      else {
        switch (hl(r)) {
          case 1:
            n = Si;
            break;
          case 4:
            n = fl;
            break;
          case 16:
            n = qr;
            break;
          case 536870912:
            n = pl;
            break;
          default:
            n = qr;
        }
        n = Tc(n, Sc.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Sc(e, t) {
    if (((Ko = -1), (Go = 0), (fe & 6) !== 0)) throw Error(l(327));
    var n = e.callbackNode;
    if (nr() && e.callbackNode !== n) return null;
    var r = to(e, e === We ? Ke : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Qo(e, r);
    else {
      t = r;
      var o = fe;
      fe |= 2;
      var i = bc();
      (We !== e || Ke !== t) && ((Wt = null), (tr = Le() + 500), En(e, t));
      do
        try {
          Lp();
          break;
        } catch (f) {
          Cc(e, f);
        }
      while (!0);
      (as(),
        ($o.current = i),
        (fe = o),
        Ie !== null ? (t = 0) : ((We = null), (Ke = 0), (t = De)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = Ei(e)), o !== 0 && ((r = o), (t = Hs(e, o)))),
        t === 1)
      )
        throw ((n = Fr), En(e, 0), ln(e, r), it(e, Le()), n);
      if (t === 6) ln(e, r);
      else {
        if (
          ((o = e.current.alternate),
          (r & 30) === 0 &&
            !Rp(o) &&
            ((t = Qo(e, r)),
            t === 2 && ((i = Ei(e)), i !== 0 && ((r = i), (t = Hs(e, i)))),
            t === 1))
        )
          throw ((n = Fr), En(e, 0), ln(e, r), it(e, Le()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Cn(e, ot, Wt);
            break;
          case 3:
            if (
              (ln(e, r),
              (r & 130023424) === r && ((t = $s + 500 - Le()), 10 < t))
            ) {
              if (to(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                (Je(), (e.pingedLanes |= e.suspendedLanes & o));
                break;
              }
              e.timeoutHandle = Yi(Cn.bind(null, e, ot, Wt), t);
              break;
            }
            Cn(e, ot, Wt);
            break;
          case 4:
            if ((ln(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r;) {
              var u = 31 - xt(r);
              ((i = 1 << u), (u = t[u]), u > o && (o = u), (r &= ~i));
            }
            if (
              ((r = o),
              (r = Le() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Tp(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Yi(Cn.bind(null, e, ot, Wt), r);
              break;
            }
            Cn(e, ot, Wt);
            break;
          case 5:
            Cn(e, ot, Wt);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return (it(e, Le()), e.callbackNode === n ? Sc.bind(null, e) : null);
  }
  function Hs(e, t) {
    var n = $r;
    return (
      e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256),
      (e = Qo(e, t)),
      e !== 2 && ((t = ot), (ot = n), t !== null && Vs(t)),
      e
    );
  }
  function Vs(e) {
    ot === null ? (ot = e) : ot.push.apply(ot, e);
  }
  function Rp(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              i = o.getSnapshot;
            o = o.value;
            try {
              if (!kt(i(), o)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ln(e, t) {
    for (
      t &= ~Fs,
        t &= ~Wo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - xt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Ec(e) {
    if ((fe & 6) !== 0) throw Error(l(327));
    nr();
    var t = to(e, 0);
    if ((t & 1) === 0) return (it(e, Le()), null);
    var n = Qo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ei(e);
      r !== 0 && ((t = r), (n = Hs(e, r)));
    }
    if (n === 1) throw ((n = Fr), En(e, 0), ln(e, t), it(e, Le()), n);
    if (n === 6) throw Error(l(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Cn(e, ot, Wt),
      it(e, Le()),
      null
    );
  }
  function Ks(e, t) {
    var n = fe;
    fe |= 1;
    try {
      return e(t);
    } finally {
      ((fe = n), fe === 0 && ((tr = Le() + 500), ko && en()));
    }
  }
  function Sn(e) {
    sn !== null && sn.tag === 0 && (fe & 6) === 0 && nr();
    var t = fe;
    fe |= 1;
    var n = gt.transition,
      r = ge;
    try {
      if (((gt.transition = null), (ge = 1), e)) return e();
    } finally {
      ((ge = r), (gt.transition = n), (fe = t), (fe & 6) === 0 && en());
    }
  }
  function Gs() {
    ((dt = er.current), Ee(er));
  }
  function En(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), lp(n)), Ie !== null))
      for (n = Ie.return; n !== null;) {
        var r = n;
        switch ((ns(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && wo());
            break;
          case 3:
            (qn(), Ee(tt), Ee(Ge), hs());
            break;
          case 5:
            ps(r);
            break;
          case 4:
            qn();
            break;
          case 13:
            Ee(ze);
            break;
          case 19:
            Ee(ze);
            break;
          case 10:
            ls(r.type._context);
            break;
          case 22:
          case 23:
            Gs();
        }
        n = n.return;
      }
    if (
      ((We = e),
      (Ie = e = un(e.current, null)),
      (Ke = dt = t),
      (De = 0),
      (Fr = null),
      (Fs = Wo = kn = 0),
      (ot = $r = null),
      vn !== null)
    ) {
      for (t = 0; t < vn.length; t++)
        if (((n = vn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            i = n.pending;
          if (i !== null) {
            var u = i.next;
            ((i.next = o), (r.next = u));
          }
          n.pending = r;
        }
      vn = null;
    }
    return e;
  }
  function Cc(e, t) {
    do {
      var n = Ie;
      try {
        if ((as(), (To.current = Oo), Ro)) {
          for (var r = _e.memoizedState; r !== null;) {
            var o = r.queue;
            (o !== null && (o.pending = null), (r = r.next));
          }
          Ro = !1;
        }
        if (
          ((xn = 0),
          ($e = Ne = _e = null),
          (Lr = !1),
          (Or = 0),
          (Us.current = null),
          n === null || n.return === null)
        ) {
          ((De = 1), (Fr = t), (Ie = null));
          break;
        }
        e: {
          var i = e,
            u = n.return,
            f = n,
            m = t;
          if (
            ((t = Ke),
            (f.flags |= 32768),
            m !== null && typeof m == "object" && typeof m.then == "function")
          ) {
            var x = m,
              A = f,
              P = A.tag;
            if ((A.mode & 1) === 0 && (P === 0 || P === 11 || P === 15)) {
              var j = A.alternate;
              j
                ? ((A.updateQueue = j.updateQueue),
                  (A.memoizedState = j.memoizedState),
                  (A.lanes = j.lanes))
                : ((A.updateQueue = null), (A.memoizedState = null));
            }
            var L = Zu(u);
            if (L !== null) {
              ((L.flags &= -257),
                Yu(L, u, f, i, t),
                L.mode & 1 && Qu(i, x, t),
                (t = L),
                (m = x));
              var U = t.updateQueue;
              if (U === null) {
                var F = new Set();
                (F.add(m), (t.updateQueue = F));
              } else U.add(m);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Qu(i, x, t), Qs());
                break e;
              }
              m = Error(l(426));
            }
          } else if (je && f.mode & 1) {
            var Oe = Zu(u);
            if (Oe !== null) {
              ((Oe.flags & 65536) === 0 && (Oe.flags |= 256),
                Yu(Oe, u, f, i, t),
                is(Xn(m, f)));
              break e;
            }
          }
          ((i = m = Xn(m, f)),
            De !== 4 && (De = 2),
            $r === null ? ($r = [i]) : $r.push(i),
            (i = u));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var v = Ku(i, m, t);
                wu(i, v);
                break e;
              case 1:
                f = m;
                var h = i.type,
                  w = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (w !== null &&
                      typeof w.componentDidCatch == "function" &&
                      (on === null || !on.has(w))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var z = Gu(i, f, t);
                  wu(i, z);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Ac(n);
      } catch ($) {
        ((t = $), Ie === n && n !== null && (Ie = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function bc() {
    var e = $o.current;
    return (($o.current = Oo), e === null ? Oo : e);
  }
  function Qs() {
    ((De === 0 || De === 3 || De === 2) && (De = 4),
      We === null ||
        ((kn & 268435455) === 0 && (Wo & 268435455) === 0) ||
        ln(We, Ke));
  }
  function Qo(e, t) {
    var n = fe;
    fe |= 2;
    var r = bc();
    (We !== e || Ke !== t) && ((Wt = null), En(e, t));
    do
      try {
        Mp();
        break;
      } catch (o) {
        Cc(e, o);
      }
    while (!0);
    if ((as(), (fe = n), ($o.current = r), Ie !== null)) throw Error(l(261));
    return ((We = null), (Ke = 0), De);
  }
  function Mp() {
    for (; Ie !== null;) jc(Ie);
  }
  function Lp() {
    for (; Ie !== null && !of();) jc(Ie);
  }
  function jc(e) {
    var t = _c(e.alternate, e, dt);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Ac(e) : (Ie = t),
      (Us.current = null));
  }
  function Ac(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = jp(n, t, dt)), n !== null)) {
          Ie = n;
          return;
        }
      } else {
        if (((n = Ap(n, t)), n !== null)) {
          ((n.flags &= 32767), (Ie = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((De = 6), (Ie = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    De === 0 && (De = 5);
  }
  function Cn(e, t, n) {
    var r = ge,
      o = gt.transition;
    try {
      ((gt.transition = null), (ge = 1), Op(e, t, n, r));
    } finally {
      ((gt.transition = o), (ge = r));
    }
    return null;
  }
  function Op(e, t, n, r) {
    do nr();
    while (sn !== null);
    if ((fe & 6) !== 0) throw Error(l(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(l(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (hf(e, i),
      e === We && ((Ie = We = null), (Ke = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Ho ||
        ((Ho = !0),
        Tc(qr, function () {
          return (nr(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = gt.transition), (gt.transition = null));
      var u = ge;
      ge = 1;
      var f = fe;
      ((fe |= 4),
        (Us.current = null),
        zp(e, n),
        yc(n, e),
        tp(Qi),
        (oo = !!Gi),
        (Qi = Gi = null),
        (e.current = n),
        _p(n),
        sf(),
        (fe = f),
        (ge = u),
        (gt.transition = i));
    } else e.current = n;
    if (
      (Ho && ((Ho = !1), (sn = e), (Vo = o)),
      (i = e.pendingLanes),
      i === 0 && (on = null),
      uf(n.stateNode),
      it(e, Le()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
    if (Bo) throw ((Bo = !1), (e = Ws), (Ws = null), e);
    return (
      (Vo & 1) !== 0 && e.tag !== 0 && nr(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === Bs ? Wr++ : ((Wr = 0), (Bs = e))) : (Wr = 0),
      en(),
      null
    );
  }
  function nr() {
    if (sn !== null) {
      var e = hl(Vo),
        t = gt.transition,
        n = ge;
      try {
        if (((gt.transition = null), (ge = 16 > e ? 16 : e), sn === null))
          var r = !1;
        else {
          if (((e = sn), (sn = null), (Vo = 0), (fe & 6) !== 0))
            throw Error(l(331));
          var o = fe;
          for (fe |= 4, I = e.current; I !== null;) {
            var i = I,
              u = i.child;
            if ((I.flags & 16) !== 0) {
              var f = i.deletions;
              if (f !== null) {
                for (var m = 0; m < f.length; m++) {
                  var x = f[m];
                  for (I = x; I !== null;) {
                    var A = I;
                    switch (A.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ur(8, A, i);
                    }
                    var P = A.child;
                    if (P !== null) ((P.return = A), (I = P));
                    else
                      for (; I !== null;) {
                        A = I;
                        var j = A.sibling,
                          L = A.return;
                        if ((fc(A), A === x)) {
                          I = null;
                          break;
                        }
                        if (j !== null) {
                          ((j.return = L), (I = j));
                          break;
                        }
                        I = L;
                      }
                  }
                }
                var U = i.alternate;
                if (U !== null) {
                  var F = U.child;
                  if (F !== null) {
                    U.child = null;
                    do {
                      var Oe = F.sibling;
                      ((F.sibling = null), (F = Oe));
                    } while (F !== null);
                  }
                }
                I = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && u !== null)
              ((u.return = i), (I = u));
            else
              e: for (; I !== null;) {
                if (((i = I), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(9, i, i.return);
                  }
                var v = i.sibling;
                if (v !== null) {
                  ((v.return = i.return), (I = v));
                  break e;
                }
                I = i.return;
              }
          }
          var h = e.current;
          for (I = h; I !== null;) {
            u = I;
            var w = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && w !== null)
              ((w.return = u), (I = w));
            else
              e: for (u = h; I !== null;) {
                if (((f = I), (f.flags & 2048) !== 0))
                  try {
                    switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fo(9, f);
                    }
                  } catch ($) {
                    Te(f, f.return, $);
                  }
                if (f === u) {
                  I = null;
                  break e;
                }
                var z = f.sibling;
                if (z !== null) {
                  ((z.return = f.return), (I = z));
                  break e;
                }
                I = f.return;
              }
          }
          if (
            ((fe = o),
            en(),
            Pt && typeof Pt.onPostCommitFiberRoot == "function")
          )
            try {
              Pt.onPostCommitFiberRoot(Xr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((ge = n), (gt.transition = t));
      }
    }
    return !1;
  }
  function Pc(e, t, n) {
    ((t = Xn(n, t)),
      (t = Ku(e, t, 1)),
      (e = nn(e, t, 1)),
      (t = Je()),
      e !== null && (fr(e, 1, t), it(e, t)));
  }
  function Te(e, t, n) {
    if (e.tag === 3) Pc(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Pc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (on === null || !on.has(r)))
          ) {
            ((e = Xn(n, e)),
              (e = Gu(t, e, 1)),
              (t = nn(t, e, 1)),
              (e = Je()),
              t !== null && (fr(t, 1, e), it(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ip(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Je()),
      (e.pingedLanes |= e.suspendedLanes & n),
      We === e &&
        (Ke & n) === n &&
        (De === 4 || (De === 3 && (Ke & 130023424) === Ke && 500 > Le() - $s)
          ? En(e, 0)
          : (Fs |= n)),
      it(e, t));
  }
  function zc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = eo), (eo <<= 1), (eo & 130023424) === 0 && (eo = 4194304)));
    var n = Je();
    ((e = Ut(e, t)), e !== null && (fr(e, t, n), it(e, n)));
  }
  function Np(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), zc(e, n));
  }
  function Dp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    (r !== null && r.delete(t), zc(e, n));
  }
  var _c;
  _c = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || tt.current) rt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((rt = !1), bp(e, t, n));
        rt = (e.flags & 131072) !== 0;
      }
    else ((rt = !1), je && (t.flags & 1048576) !== 0 && uu(t, Eo, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Do(e, t), (e = t.pendingProps));
        var o = Hn(t, Ge.current);
        (Yn(t, n), (o = vs(null, t, r, e, o, n)));
        var i = ws();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              nt(r) ? ((i = !0), xo(t)) : (i = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              ds(t),
              (o.updater = Io),
              (t.stateNode = o),
              (o._reactInternals = t),
              bs(t, r, e, n),
              (t = zs(null, t, r, !0, i, n)))
            : ((t.tag = 0), je && i && ts(t), Xe(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Do(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = Fp(r)),
            (e = Et(r, e)),
            o)
          ) {
            case 0:
              t = Ps(null, t, r, e, n);
              break e;
            case 1:
              t = nc(null, t, r, e, n);
              break e;
            case 11:
              t = qu(null, t, r, e, n);
              break e;
            case 14:
              t = Xu(null, t, r, Et(r.type, e), n);
              break e;
          }
          throw Error(l(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : Et(r, o)),
          Ps(e, t, r, o, n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : Et(r, o)),
          nc(e, t, r, o, n)
        );
      case 3:
        e: {
          if ((rc(t), e === null)) throw Error(l(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (o = i.element),
            vu(e, t),
            zo(t, r, null, n));
          var u = t.memoizedState;
          if (((r = u.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((o = Xn(Error(l(423)), t)), (t = oc(e, t, r, n, o)));
              break e;
            } else if (r !== o) {
              ((o = Xn(Error(l(424)), t)), (t = oc(e, t, r, n, o)));
              break e;
            } else
              for (
                ct = qt(t.stateNode.containerInfo.firstChild),
                  ut = t,
                  je = !0,
                  St = null,
                  n = gu(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Gn(), r === o)) {
              t = $t(e, t, n);
              break e;
            }
            Xe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ku(t),
          e === null && os(t),
          (r = t.type),
          (o = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (u = o.children),
          Zi(r, o) ? (u = null) : i !== null && Zi(r, i) && (t.flags |= 32),
          tc(e, t),
          Xe(e, t, u, n),
          t.child
        );
      case 6:
        return (e === null && os(t), null);
      case 13:
        return ic(e, t, n);
      case 4:
        return (
          fs(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Qn(t, null, r, n)) : Xe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : Et(r, o)),
          qu(e, t, r, o, n)
        );
      case 7:
        return (Xe(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Xe(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Xe(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (i = t.memoizedProps),
            (u = o.value),
            xe(jo, r._currentValue),
            (r._currentValue = u),
            i !== null)
          )
            if (kt(i.value, u)) {
              if (i.children === o.children && !tt.current) {
                t = $t(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null;) {
                var f = i.dependencies;
                if (f !== null) {
                  u = i.child;
                  for (var m = f.firstContext; m !== null;) {
                    if (m.context === r) {
                      if (i.tag === 1) {
                        ((m = Ft(-1, n & -n)), (m.tag = 2));
                        var x = i.updateQueue;
                        if (x !== null) {
                          x = x.shared;
                          var A = x.pending;
                          (A === null
                            ? (m.next = m)
                            : ((m.next = A.next), (A.next = m)),
                            (x.pending = m));
                        }
                      }
                      ((i.lanes |= n),
                        (m = i.alternate),
                        m !== null && (m.lanes |= n),
                        us(i.return, n, t),
                        (f.lanes |= n));
                      break;
                    }
                    m = m.next;
                  }
                } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((u = i.return), u === null)) throw Error(l(341));
                  ((u.lanes |= n),
                    (f = u.alternate),
                    f !== null && (f.lanes |= n),
                    us(u, n, t),
                    (u = i.sibling));
                } else u = i.child;
                if (u !== null) u.return = i;
                else
                  for (u = i; u !== null;) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((i = u.sibling), i !== null)) {
                      ((i.return = u.return), (u = i));
                      break;
                    }
                    u = u.return;
                  }
                i = u;
              }
          (Xe(e, t, o.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          Yn(t, n),
          (o = mt(o)),
          (r = r(o)),
          (t.flags |= 1),
          Xe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (o = Et(r, t.pendingProps)),
          (o = Et(r.type, o)),
          Xu(e, t, r, o, n)
        );
      case 15:
        return Ju(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : Et(r, o)),
          Do(e, t),
          (t.tag = 1),
          nt(r) ? ((e = !0), xo(t)) : (e = !1),
          Yn(t, n),
          Hu(t, r, o),
          bs(t, r, o, n),
          zs(null, t, r, !0, e, n)
        );
      case 19:
        return ac(e, t, n);
      case 22:
        return ec(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function Tc(e, t) {
    return cl(e, t);
  }
  function Up(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function yt(e, t, n, r) {
    return new Up(e, t, n, r);
  }
  function Zs(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Fp(e) {
    if (typeof e == "function") return Zs(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Ce)) return 11;
      if (e === Fe) return 14;
    }
    return 2;
  }
  function un(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = yt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Zo(e, t, n, r, o, i) {
    var u = 2;
    if (((r = e), typeof e == "function")) Zs(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case B:
          return bn(n.children, o, i, t);
        case re:
          ((u = 8), (o |= 8));
          break;
        case pe:
          return (
            (e = yt(12, n, t, o | 2)),
            (e.elementType = pe),
            (e.lanes = i),
            e
          );
        case he:
          return (
            (e = yt(13, n, t, o)),
            (e.elementType = he),
            (e.lanes = i),
            e
          );
        case be:
          return (
            (e = yt(19, n, t, o)),
            (e.elementType = be),
            (e.lanes = i),
            e
          );
        case ye:
          return Yo(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case de:
                u = 10;
                break e;
              case te:
                u = 9;
                break e;
              case Ce:
                u = 11;
                break e;
              case Fe:
                u = 14;
                break e;
              case Me:
                ((u = 16), (r = null));
                break e;
            }
          throw Error(l(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = yt(u, n, t, o)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = i),
      t
    );
  }
  function bn(e, t, n, r) {
    return ((e = yt(7, e, r, t)), (e.lanes = n), e);
  }
  function Yo(e, t, n, r) {
    return (
      (e = yt(22, e, r, t)),
      (e.elementType = ye),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ys(e, t, n) {
    return ((e = yt(6, e, null, t)), (e.lanes = n), e);
  }
  function qs(e, t, n) {
    return (
      (t = yt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function $p(e, t, n, r, o) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ci(0)),
      (this.expirationTimes = Ci(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ci(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Xs(e, t, n, r, o, i, u, f, m) {
    return (
      (e = new $p(e, t, n, f, m)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = yt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ds(i),
      e
    );
  }
  function Wp(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: R,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Rc(e) {
    if (!e) return Jt;
    e = e._reactInternals;
    e: {
      if (pn(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (nt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (nt(n)) return su(e, n, t);
    }
    return t;
  }
  function Mc(e, t, n, r, o, i, u, f, m) {
    return (
      (e = Xs(n, r, !0, e, o, i, u, f, m)),
      (e.context = Rc(null)),
      (n = e.current),
      (r = Je()),
      (o = an(n)),
      (i = Ft(r, o)),
      (i.callback = t ?? null),
      nn(n, i, o),
      (e.current.lanes = o),
      fr(e, o, r),
      it(e, r),
      e
    );
  }
  function qo(e, t, n, r) {
    var o = t.current,
      i = Je(),
      u = an(o);
    return (
      (n = Rc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ft(i, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = nn(o, t, u)),
      e !== null && (jt(e, o, u, i), Po(e, o, u)),
      u
    );
  }
  function Xo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Lc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Js(e, t) {
    (Lc(e, t), (e = e.alternate) && Lc(e, t));
  }
  function Bp() {
    return null;
  }
  var Oc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ea(e) {
    this._internalRoot = e;
  }
  ((Jo.prototype.render = ea.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      qo(e, t, null, null);
    }),
    (Jo.prototype.unmount = ea.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Sn(function () {
            qo(null, e, null, null);
          }),
            (t[Ot] = null));
        }
      }));
  function Jo(e) {
    this._internalRoot = e;
  }
  Jo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = vl();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
      (Qt.splice(n, 0, e), n === 0 && kl(e));
    }
  };
  function ta(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ei(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ic() {}
  function Hp(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var x = Xo(u);
          i.call(x);
        };
      }
      var u = Mc(t, r, e, 0, null, !1, !1, "", Ic);
      return (
        (e._reactRootContainer = u),
        (e[Ot] = u.current),
        jr(e.nodeType === 8 ? e.parentNode : e),
        Sn(),
        u
      );
    }
    for (; (o = e.lastChild);) e.removeChild(o);
    if (typeof r == "function") {
      var f = r;
      r = function () {
        var x = Xo(m);
        f.call(x);
      };
    }
    var m = Xs(e, 0, !1, null, null, !1, !1, "", Ic);
    return (
      (e._reactRootContainer = m),
      (e[Ot] = m.current),
      jr(e.nodeType === 8 ? e.parentNode : e),
      Sn(function () {
        qo(t, m, n, r);
      }),
      m
    );
  }
  function ti(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof o == "function") {
        var f = o;
        o = function () {
          var m = Xo(u);
          f.call(m);
        };
      }
      qo(t, u, e, o);
    } else u = Hp(n, t, e, o, r);
    return Xo(u);
  }
  ((gl = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = dr(t.pendingLanes);
          n !== 0 &&
            (bi(t, n | 1),
            it(t, Le()),
            (fe & 6) === 0 && ((tr = Le() + 500), en()));
        }
        break;
      case 13:
        (Sn(function () {
          var r = Ut(e, 1);
          if (r !== null) {
            var o = Je();
            jt(r, e, 1, o);
          }
        }),
          Js(e, 1));
    }
  }),
    (ji = function (e) {
      if (e.tag === 13) {
        var t = Ut(e, 134217728);
        if (t !== null) {
          var n = Je();
          jt(t, e, 134217728, n);
        }
        Js(e, 134217728);
      }
    }),
    (yl = function (e) {
      if (e.tag === 13) {
        var t = an(e),
          n = Ut(e, t);
        if (n !== null) {
          var r = Je();
          jt(n, e, t, r);
        }
        Js(e, t);
      }
    }),
    (vl = function () {
      return ge;
    }),
    (wl = function (e, t) {
      var n = ge;
      try {
        return ((ge = e), t());
      } finally {
        ge = n;
      }
    }),
    (vi = function (e, t, n) {
      switch (t) {
        case "input":
          if ((or(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var o = vo(r);
                if (!o) throw Error(l(90));
                (He(r), or(r, o));
              }
            }
          }
          break;
        case "textarea":
          Qa(e, n);
          break;
        case "select":
          ((t = n.value), t != null && Rn(e, !!n.multiple, t, !1));
      }
    }),
    (rl = Ks),
    (ol = Sn));
  var Vp = { usingClientEntryPoint: !1, Events: [zr, Wn, vo, tl, nl, Ks] },
    Br = {
      findFiberByHostInstance: mn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Kp = {
      bundleType: Br.bundleType,
      version: Br.version,
      rendererPackageName: Br.rendererPackageName,
      rendererConfig: Br.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ie.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = ll(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Br.findFiberByHostInstance || Bp,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ni.isDisabled && ni.supportsFiber)
      try {
        ((Xr = ni.inject(Kp)), (Pt = ni));
      } catch {}
  }
  return (
    (st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vp),
    (st.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ta(t)) throw Error(l(200));
      return Wp(e, t, null, n);
    }),
    (st.createRoot = function (e, t) {
      if (!ta(e)) throw Error(l(299));
      var n = !1,
        r = "",
        o = Oc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Xs(e, 1, !1, null, null, n, !1, r, o)),
        (e[Ot] = t.current),
        jr(e.nodeType === 8 ? e.parentNode : e),
        new ea(t)
      );
    }),
    (st.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(l(188))
          : ((e = Object.keys(e).join(",")), Error(l(268, e)));
      return ((e = ll(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (st.flushSync = function (e) {
      return Sn(e);
    }),
    (st.hydrate = function (e, t, n) {
      if (!ei(t)) throw Error(l(200));
      return ti(null, e, t, !0, n);
    }),
    (st.hydrateRoot = function (e, t, n) {
      if (!ta(e)) throw Error(l(405));
      var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        u = Oc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (o = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = Mc(t, null, e, 1, n ?? null, o, !1, i, u)),
        (e[Ot] = t.current),
        jr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (o = n._getVersion),
            (o = o(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, o])
              : t.mutableSourceEagerHydrationData.push(n, o));
      return new Jo(t);
    }),
    (st.render = function (e, t, n) {
      if (!ei(t)) throw Error(l(200));
      return ti(null, e, t, !1, n);
    }),
    (st.unmountComponentAtNode = function (e) {
      if (!ei(e)) throw Error(l(40));
      return e._reactRootContainer
        ? (Sn(function () {
            ti(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ot] = null));
            });
          }),
          !0)
        : !1;
    }),
    (st.unstable_batchedUpdates = Ks),
    (st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!ei(n)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return ti(e, t, n, !1, r);
    }),
    (st.version = "18.3.1-next-f1338f8080-20240426"),
    st
  );
}
var Hc;
function tm() {
  if (Hc) return oa.exports;
  Hc = 1;
  function s() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (c) {
        console.error(c);
      }
  }
  return (s(), (oa.exports = em()), oa.exports);
}
var Vc;
function nm() {
  if (Vc) return ri;
  Vc = 1;
  var s = tm();
  return ((ri.createRoot = s.createRoot), (ri.hydrateRoot = s.hydrateRoot), ri);
}
var rm = nm();
const om = kd(rm);
let Kc = [];
const im = new Set();
function sm(s) {
  if (s.join() !== Kc.join()) {
    Kc = s;
    for (const c of im) c();
  }
}
function La(s) {
  const c = [...s.getAll("source"), ...s.getAll("sql")];
  return c.length
    ? c.some((l) => l !== "product" && l !== "mock" && l !== "real") ||
      new Set(c).size !== 1
      ? null
      : c[0]
    : "real";
}
new TextEncoder();
const am = {},
  rr = [
    "fox",
    "owl",
    "bear",
    "panda",
    "wolf",
    "badger",
    "hedgehog",
    "squirrel",
    "deer",
    "raccoon",
    "cat",
    "dog",
    "rabbit",
    "hamster",
    "guineapig",
    "ferret",
    "budgie",
    "goldfish",
    "pony",
    "mouse",
    "cow",
    "pig",
    "sheep",
    "goat",
    "horse",
    "donkey",
    "chicken",
    "duck",
    "goose",
    "bull",
    "lion",
    "tiger",
    "elephant",
    "giraffe",
    "zebra",
    "rhino",
    "hippo",
    "cheetah",
    "meerkat",
    "monkey",
    "polarbear",
    "penguin",
    "seal",
    "arcticfox",
    "snowleopard",
    "walrus",
    "reindeer",
    "husky",
    "puffin",
    "yak",
    "whale",
    "dolphin",
    "shark",
    "octopus",
    "crab",
    "jellyfish",
    "seahorse",
    "pufferfish",
    "narwhal",
    "otter",
    "frog",
    "turtle",
    "gecko",
    "chameleon",
    "snake",
    "crocodile",
    "bee",
    "ladybird",
    "butterfly",
    "snail",
    "dragon",
    "unicorn",
    "phoenix",
    "griffin",
    "yeti",
    "pegasus",
    "kraken",
    "sphinx",
    "wyvern",
    "golem",
    "trex",
    "triceratops",
    "stegosaurus",
    "raptor",
    "pterodactyl",
    "brachiosaurus",
    "ankylosaurus",
    "spinosaurus",
    "dilophosaurus",
    "mosasaurus",
    "astronaut",
    "alien",
    "martian",
    "moon",
    "sun",
    "star",
    "comet",
    "satellite",
    "ufo",
    "rover",
    "robot",
    "android",
    "cyborg",
    "drone",
    "mecha",
    "servo",
    "glitch",
    "pixel",
    "sentry",
    "beacon",
    "vampire",
    "werewolf",
    "zombie",
    "ghost",
    "mummy",
    "frankenstein",
    "goblin",
    "ogre",
    "slime",
    "gargoyle",
  ];
function Gc(s) {
  return typeof s == "string" && rr.includes(s);
}
function lm(s) {
  return !(s?.role === "student" && s.aiAccess === !1);
}
function zn(s) {
  return s?.role === "student" && s.lane === "fallback";
}
function um(s) {
  return s.role === "student" && s.dataSource === "real" ? "real" : "product";
}
const cm = 3600 * 12,
  Oa = "comp_school_local_development_session",
  dm = "x-comp-school-fallback-access",
  Sd = "https://comp.school/fallback",
  At = "comp.school",
  fm = /^(preview-[a-z0-9-]+)(?:\.[a-z0-9-]+)?\.comp\.school$/i,
  pm = /^(preview-[a-z0-9-]+)\.[a-z0-9-]+\.pages\.dev$/i,
  mm = Object.freeze({
    "comp.school": 3e3,
    "code.comp.school": 3001,
    "admin.comp.school": 3002,
    "exams.comp.school": 3010,
    "recall.comp.school": 3011,
    "mark.comp.school": 3013,
    "games.comp.school": 3014,
    "self-assess.comp.school": 3015,
    "issues.comp.school": 3016,
    "printouts.comp.school": 3017,
    "docs.comp.school": 3018,
    "homework.comp.school": 3019,
  });
function ui() {
  return am?.VITE_COMP_SCHOOL_TARGET === "android";
}
function Qc(s) {
  return `${globalThis.location.origin}${s.pathname}${s.search}${s.hash}`;
}
function Ia(s) {
  const c = s
    .trim()
    .toLowerCase()
    .replace(/^\[|\]$/g, "");
  return c === "localhost" || c === "127.0.0.1" || c === "::1";
}
function hm(s) {
  return [
    `${Oa}=${encodeURIComponent(JSON.stringify({ version: 1, user: s }))}`,
    "Path=/",
    `Max-Age=${cm}`,
    "SameSite=Lax",
  ].join("; ");
}
function gm() {
  return [`${Oa}=`, "Path=/", "Max-Age=0", "SameSite=Lax"].join("; ");
}
function Ed(s, c, l) {
  if (!l || !Ia(c)) return null;
  const d = Pm(s)[Oa];
  if (!d) return null;
  try {
    const p = JSON.parse(d),
      y = p.user;
    return p.version !== 1 ||
      !y ||
      typeof y.id != "string" ||
      typeof y.name != "string" ||
      !["admin", "teacher", "student"].includes(y.role)
      ? null
      : y;
  } catch {
    return null;
  }
}
function ym(s, c, l) {
  const d = new URL(s),
    p = new URLSearchParams(d.hash.replace(/^#/, ""));
  return (
    p.set("fallback", c),
    (d.hash = p.toString()),
    l ? Cd(d.toString(), l) : d.toString()
  );
}
function Cd(s, c) {
  const l = new URL(s),
    d = new URLSearchParams(l.hash.replace(/^#/, ""));
  return (d.set(ka, c), (l.hash = d.toString()), l.toString());
}
const ka = "fallbackAvatar",
  Sa = "comp-school-fallback-avatar";
function vm(s) {
  let c = 2166136261;
  for (let l = 0; l < s.length; l += 1)
    ((c ^= s.charCodeAt(l)), (c = Math.imul(c, 16777619) >>> 0));
  return rr[c % rr.length];
}
function wm(s = Math.random) {
  const c = Math.min(rr.length - 1, Math.max(0, Math.floor(s() * rr.length)));
  return rr[c];
}
function xm(s, c, l = Math.random) {
  const d = s.getItem(Sa),
    p = Gc(c) ? c : Gc(d) ? d : wm(l);
  return (p !== d && s.setItem(Sa, p), p);
}
function km(s) {
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function Sm(s) {
  let c = "";
  for (const l of s) c += String.fromCharCode(l);
  return km(c);
}
function Em(s) {
  if (!s || !/^[A-Za-z0-9_-]+$/.test(s))
    throw new Error("Invalid base64url value");
  const c = s
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(Math.ceil(s.length / 4) * 4, "="),
    l = atob(c),
    d = new Uint8Array(l.length);
  for (let p = 0; p < l.length; p += 1) d[p] = l.charCodeAt(p);
  if (Sm(d) !== s) throw new Error("Non-canonical base64url value");
  return d;
}
function bd(s) {
  const c = Em(s);
  return new TextDecoder("utf-8", { fatal: !0 }).decode(c);
}
function Cm(s) {
  return !!s && typeof s == "object" && !Array.isArray(s);
}
function jd(s) {
  const c = JSON.parse(s);
  if (!Cm(c)) throw new Error("Expected a JSON object");
  return c;
}
const Ad = Object.freeze([
    {
      hostname: "exams.comp.school",
      prefix: "/exams",
      pagesProject: "exam-host",
    },
    {
      hostname: "recall.comp.school",
      prefix: "/recall",
      pagesProject: "comp-school-recall",
    },
    {
      hostname: "code.comp.school",
      prefix: "/code",
      pagesProject: "coding-playground",
    },
  ]),
  bm = /^(preview-[a-z0-9-]+)\./i;
function jm(s) {
  const c = s.trim().toLowerCase().replace(bm, "");
  return Ad.find((l) => l.hostname === c) ?? null;
}
function Pd(s) {
  return Ad.find((c) => s === c.prefix || s.startsWith(`${c.prefix}/`)) ?? null;
}
function zd(s) {
  const c = s.trim().toLowerCase();
  return (c.match(fm) || c.match(pm))?.[1] || null;
}
function fn(s) {
  if (ui()) return globalThis.location.origin;
  if (Ia(s))
    return `http://${s.replace(/^\[|\]$/g, "") === "::1" ? "[::1]" : s}:3000`;
  const c = zd(s);
  return c ? `https://${c}.${At}` : `https://${At}`;
}
function Gr(s, c) {
  if (ui()) {
    const p = Zc(At, c);
    if (p) return Qc(new URL(p));
    try {
      const y = new URL(c);
      return y.hostname.toLowerCase() === At ? Qc(y) : c;
    } catch {
      return c;
    }
  }
  if (Ia(s))
    try {
      const p = new URL(c),
        y = mm[p.hostname.toLowerCase()];
      if (y)
        return (
          (p.protocol = "http:"),
          (p.hostname = s),
          (p.port = String(y)),
          p.toString()
        );
    } catch {
      return c;
    }
  const l = Zc(s, c);
  if (l) return l;
  const d = zd(s);
  if (!d) return c;
  try {
    const p = new URL(c),
      y = p.hostname.toLowerCase();
    if (y === At || y.endsWith(`.${At}`))
      return (
        (p.hostname = y === At ? `${d}.${At}` : `${d}.${y}`),
        p.toString()
      );
  } catch {
    return c;
  }
  return c;
}
function Zc(s, c) {
  try {
    const l = new URL(c),
      d = jm(l.hostname);
    if (!d || l.hostname.toLowerCase() !== d.hostname) return null;
    const p = new URL(fn(s));
    return (
      (l.protocol = p.protocol),
      (l.hostname = p.hostname),
      (l.port = p.port),
      (l.pathname = `${d.prefix}${l.pathname}`),
      l.toString()
    );
  } catch {
    return null;
  }
}
function _d(s) {
  if (!s?.trim()) return null;
  try {
    const c = new URL(s),
      l = c.hostname.toLowerCase();
    return c.protocol !== "https:" ||
      c.username ||
      c.password ||
      c.port ||
      !(l === At || l.endsWith(`.${At}`)) ||
      (l.replace(/^preview-[a-z0-9-]+\./, "") === At && !Pd(c.pathname))
      ? null
      : c.toString();
  } catch {
    return null;
  }
}
function Am(s, c, l) {
  const d = l?.trim() || fn(s),
    p = _d(Gr(s, c));
  if (!p) return d;
  try {
    const y = new URL(d);
    return (y.searchParams.set("returnTo", p), y.toString());
  } catch {
    return d;
  }
}
function Pm(s) {
  return s
    ? s.split(";").reduce((c, l) => {
        const [d, ...p] = l.trim().split("=");
        if (!d) return c;
        const y = p.join("=");
        try {
          c[d] = decodeURIComponent(y);
        } catch {
          c[d] = y;
        }
        return c;
      }, {})
    : {};
}
function aa(s) {
  if (!s) return null;
  try {
    const c = jd(bd(s.split(".")[0] ?? ""));
    return c.iss === Sd && typeof c.exp == "number" && Number.isInteger(c.exp)
      ? c.exp * 1e3
      : null;
  } catch {
    return null;
  }
}
function Ea(s, c = new Date()) {
  if (!s) return !1;
  try {
    const [l, d, p] = s.split(".");
    if (!l || p !== void 0 || !d || !/^[A-Za-z0-9_-]+$/.test(d)) return !1;
    const y = jd(bd(l));
    return (
      y.iss === Sd &&
      typeof y.exp == "number" &&
      Number.isInteger(y.exp) &&
      (ui() || y.exp > Math.floor(c.getTime() / 1e3))
    );
  } catch {
    return !1;
  }
}
function zm(s) {
  const c = window.location.hostname.toLowerCase(),
    l =
      c === "comp.school" || c.endsWith(".comp.school")
        ? "; Domain=comp.school"
        : "",
    d = window.location.protocol === "https:" ? "; Secure" : "";
  return `; Path=/; Max-Age=${s}; SameSite=Lax${l}${d}`;
}
const _m = [
    "examhost:",
    "coding-playground:theme:",
    "companion:variant:",
    "comp-school:flashcards:",
    "comp-school:paused:",
    "comp-school-self-assessment-v2",
    "comp-school:game-clock:",
    "comp-school:homework-done:",
    "comp-school:btec-coursework:",
    "comp-school:btec-games:",
  ],
  Td = ["comp_school_recent_sessions", "comp_school_btec_recent_sessions"],
  Tm = 200,
  Rd = 64e3,
  Md = /^\d{1,20}$/;
function Ld(s) {
  if (typeof s != "string" || s.length > Tm || /[\u0000-\u001f]/.test(s))
    return !1;
  if (s.startsWith("cookie:")) return Td.includes(s.slice(7));
  if (!s.startsWith("local:")) return !1;
  const c = s.slice(6);
  return _m.some((l) => c.startsWith(l) && c.length > l.length);
}
function ii(s, c) {
  const l = {};
  for (const [p, y] of Object.entries(c)) s[p] !== y && (l[p] = y);
  const d = Object.keys(s).filter((p) => !(p in c));
  return { set: l, remove: d };
}
function Vr(s) {
  return s.remove.length > 0 || Object.keys(s.set).length > 0;
}
function Od(s) {
  let c = 2166136261;
  for (let l = 0; l < s.length; l += 1)
    ((c ^= s.charCodeAt(l)), (c = Math.imul(c, 16777619)));
  return `${(c >>> 0).toString(36)}.${s.length.toString(36)}`;
}
function Rm(s) {
  return Object.fromEntries(Object.entries(s).map(([c, l]) => [c, Od(l)]));
}
function Mm(s, c) {
  const l = {};
  for (const [p, y] of Object.entries(c)) s[p] !== Od(y) && (l[p] = y);
  const d = Object.keys(s).filter((p) => !(p in c));
  return { set: l, remove: d };
}
function Lm(s, c) {
  const l = { ...s, ...c.set };
  for (const d of c.remove) delete l[d];
  return l;
}
const ai = "comp-school:saved-state-owner",
  _n = "comp-school:saved-state-dirty",
  Na = "comp-school:saved-state-confirmed",
  Da = "comp-school:saved-state-revisions",
  Om = 4320 * 60 * 60,
  Im = 3e3,
  Nm = "comp-school:recent-sessions-change";
function Dm(s) {
  return `${s.dataSource === "real" ? "real" : "product"}:${s.id}`;
}
function wt() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}
function Um(s) {
  const c = `${s}=`,
    d = window.document.cookie
      .split("; ")
      .find((p) => p.startsWith(c))
      ?.slice(c.length);
  return d || null;
}
function Ua() {
  const s = {},
    c = wt();
  if (c)
    for (let l = 0; l < c.length; l += 1) {
      const d = c.key(l);
      if (!d || !Ld(`local:${d}`)) continue;
      const p = c.getItem(d);
      p !== null && p.length <= Rd && (s[`local:${d}`] = p);
    }
  for (const l of Td) {
    const d = Um(l);
    d !== null && (s[`cookie:${l}`] = d);
  }
  return s;
}
function Fa() {
  const s = [],
    c = wt();
  if (!c) return s;
  for (let l = 0; l < c.length; l += 1) {
    const d = c.key(l);
    if (!d || !Ld(`local:${d}`)) continue;
    const p = c.getItem(d);
    p !== null && p.length > Rd && s.push(`local:${d}`);
  }
  return s;
}
function Yc(s, c) {
  if (s.startsWith("cookie:")) {
    const d = s.slice(7);
    window.document.cookie = `${d}=${c ?? ""}${zm(c === null ? 0 : Om)}`;
    return;
  }
  const l = s.slice(6);
  c === null ? wt()?.removeItem(l) : wt()?.setItem(l, c);
}
function si(s, c = new Set()) {
  for (const l of [...Object.keys(Ua()), ...Fa()])
    !(l in s) && !c.has(l) && Yc(l, null);
  for (const [l, d] of Object.entries(s)) c.has(l) || Yc(l, d);
  window.dispatchEvent(new Event(Nm));
}
const Ca = "comp-school:saved-state-notice",
  qc = new Set();
function ba(s, c) {
  const l = c.filter((d) => !qc.has(`${s}:${d}`));
  if (!(!l.length || typeof window > "u")) {
    for (const d of l) qc.add(`${s}:${d}`);
    window.dispatchEvent(new CustomEvent(Ca, { detail: { kind: s, keys: l } }));
  }
}
function Fm(s) {
  const c = (l) => {
    const d = l.detail;
    d && (d.kind === "conflict" || d.kind === "too-big") && s(d);
  };
  return (
    window.addEventListener(Ca, c),
    () => window.removeEventListener(Ca, c)
  );
}
function $a() {
  const s = wt();
  s?.getItem(ai) &&
    (si({}),
    s.removeItem(ai),
    s.removeItem(_n),
    s.removeItem(Na),
    s.removeItem(Da));
}
function $m() {
  try {
    const s = JSON.parse(wt()?.getItem(Na) ?? "null");
    return !s || typeof s != "object" || Array.isArray(s)
      ? null
      : Object.fromEntries(
          Object.entries(s).filter((c) => typeof c[1] == "string"),
        );
  } catch {
    return null;
  }
}
function ja(s) {
  try {
    wt()?.setItem(Na, JSON.stringify(Rm(s)));
  } catch {}
}
function Id() {
  try {
    const s = JSON.parse(wt()?.getItem(Da) ?? "null");
    return !s || typeof s != "object" || Array.isArray(s)
      ? null
      : Object.fromEntries(
          Object.entries(s).filter(
            (c) => typeof c[1] == "string" && Md.test(c[1]),
          ),
        );
  } catch {
    return null;
  }
}
function Aa(s) {
  try {
    wt()?.setItem(Da, JSON.stringify(s));
  } catch {}
}
function Nd(s, c, l) {
  const d = {};
  if (!c) return d;
  for (const p of [...Object.keys(s.set), ...s.remove])
    c[p] ? (d[p] = c[p]) : p in l || (d[p] = "0");
  return d;
}
function Dd(s, c, l) {
  const d = { ...s },
    p = new Set(l.conflicts);
  for (const y of c.remove) p.has(y) || delete d[y];
  for (const y of Object.keys(c.set))
    !p.has(y) && !l.revisions[y] && delete d[y];
  return { ...d, ...l.revisions };
}
const Wm = new Set();
function Pa() {
  for (const s of [...Wm])
    try {
      s();
    } catch {}
}
function Xc(s) {
  return !s || typeof s != "object" || Array.isArray(s)
    ? {}
    : Object.fromEntries(
        Object.entries(s).filter(
          (c) => typeof c[1] == "string" && Md.test(c[1]),
        ),
      );
}
function Bm(s) {
  const c = new URL("/api/saved-state", s).toString();
  return {
    async read() {
      const l = await fetch(c, {
          cache: "no-store",
          credentials: "include",
          headers: { accept: "application/json" },
        }),
        d = await l.json().catch(() => null);
      if (!l.ok || !d?.ok || !d.items)
        throw new Error("Saved state could not be read.");
      return { items: d.items, revisions: Xc(d.revisions) };
    },
    async write(l, { keepalive: d = !1 } = {}) {
      const p = await fetch(c, {
        method: "POST",
        cache: "no-store",
        credentials: "include",
        keepalive: d,
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(l),
      });
      if (!p.ok) throw new Error("Saved state could not be written.");
      const y = await p.json().catch(() => null),
        S = new Set([...Object.keys(l.set), ...l.remove]);
      return {
        revisions: Xc(y?.revisions),
        conflicts: Array.isArray(y?.conflicts)
          ? y.conflicts.filter((b) => typeof b == "string" && S.has(b))
          : [],
      };
    },
  };
}
async function Hm(s, c) {
  const l = wt();
  if (!l) return null;
  const d = Dm(s),
    p = l.getItem(ai);
  p && p !== d && $a();
  let y;
  try {
    y = await c.read();
  } catch {
    return null;
  }
  const S = y.items,
    b = Ua(),
    k = new Set(p === d ? Fa() : []);
  for (const J of k) J in S && (b[J] = S[J]);
  k.size && ba("too-big", [...k]);
  const V = p === d ? $m() : null,
    T = p === d ? Id() : p ? {} : y.revisions,
    K =
      (p === d && l.getItem(_n) !== null) ||
      (!p && Object.keys(S).length === 0 && Object.keys(b).length > 0),
    D = V && !K ? Mm(V, b) : null;
  l.setItem(ai, d);
  const X = K ? b : D && Vr(D) ? Lm(S, D) : null;
  if (X) {
    const J = ii(S, X);
    try {
      let O = X,
        W = y.revisions;
      if (Vr(J)) {
        const G = await c.write({ ...J, base: Nd(J, T, V ?? {}) });
        if (((W = Dd(y.revisions, J, G)), G.conflicts.length)) {
          O = { ...X };
          for (const se of G.conflicts)
            se in S ? (O[se] = S[se]) : delete O[se];
        }
      }
      return (O !== b && si(O, k), l.removeItem(_n), ja(O), Aa(W), O);
    } catch {
      return (l.setItem(_n, "1"), X !== b && si(X, k), S);
    }
  }
  return (si(S, k), l.removeItem(_n), ja(S), Aa(y.revisions), S);
}
function Vm(s, c, l = Im) {
  let d = s,
    p = Id();
  const y = new Set();
  let S = !1;
  function b() {
    const D = Ua(),
      X = Fa();
    X.length && ba("too-big", X);
    for (const J of [...X, ...y]) J in d ? (D[J] = d[J]) : delete D[J];
    return D;
  }
  async function k(D = !1) {
    if (S && !D) return;
    const X = b(),
      J = ii(d, X);
    if (Vr(J)) {
      (wt()?.setItem(_n, "1"), (S = !0));
      try {
        const O = await c.write({ ...J, base: Nd(J, p, d) }, { keepalive: D });
        ((p = Dd(p, J, O)), Aa(p));
        const W = { ...X };
        for (const G of O.conflicts)
          (y.add(G), G in d ? (W[G] = d[G]) : delete W[G]);
        ((d = W),
          ja(W),
          O.conflicts.length && ba("conflict", O.conflicts),
          Vr(ii(d, b())) || wt()?.removeItem(_n));
      } catch {
      } finally {
        S = !1;
      }
    }
  }
  const V = window.setInterval(() => void k(), l),
    T = () => {
      window.document.visibilityState === "hidden" && (Pa(), k(!0));
    },
    K = () => {
      (Pa(), k(!0));
    };
  return (
    window.document.addEventListener("visibilitychange", T),
    window.addEventListener("pagehide", K),
    {
      flush: () => k(),
      pending: () => Vr(ii(d, b())),
      stop() {
        (window.clearInterval(V),
          window.document.removeEventListener("visibilitychange", T),
          window.removeEventListener("pagehide", K));
      },
    }
  );
}
let Kr = null;
function Km(s) {
  return (
    (Kr ??= (async () => {
      const c = Bm(fn(window.location.hostname)),
        l = await Hm(s, c);
      return l ? Vm(l, c) : null;
    })()),
    Kr
  );
}
async function Gm(s = 4e3) {
  const c = await Kr?.catch(() => null);
  if (!c) return;
  const l = Date.now() + s;
  do {
    if ((await c.flush().catch(() => {}), !c.pending())) return;
    await new Promise((d) => window.setTimeout(d, 150));
  } while (Date.now() < l);
}
async function za(s = 4e3) {
  (Pa(), await Gm(s));
}
async function Qm() {
  const s = await Kr?.catch(() => null);
  ((Kr = null), s && (await s.flush().catch(() => {}), s.stop()), $a());
}
const Ud = {
    1.1: [
      {
        term: "Arithmetic Logic Unit (ALU)",
        definition:
          "Performs calculations and logical comparisons inside the Central Processing Unit (CPU)",
        example: "Adding two numbers together, comparing if A > B",
      },
      {
        term: "Control Unit (CU)",
        definition:
          "Directs the flow of data and instructions around the CPU by sending control signals",
        example:
          "Sends signals telling memory to release data to the correct register",
      },
      {
        term: "Cache",
        definition:
          "Small, fast memory inside the CPU that stores frequently used data and instructions",
        example:
          "Stores the next instruction the CPU is likely to need so it does not have to fetch from Random Access Memory (RAM)",
      },
      {
        term: "Register",
        definition:
          "A tiny, high-speed storage location inside the CPU that temporarily holds data, instructions or memory addresses",
        example:
          "Memory Address Register (MAR), Memory Data Register (MDR), Accumulator (ACC), Program Counter (PC)",
      },
      {
        term: "Memory Address Register (MAR)",
        definition:
          "A register that holds the memory address of the data or instruction the CPU wants to read or write",
        example:
          "Before fetching the next instruction, the Program Counter copies its address into the MAR",
      },
      {
        term: "Memory Data Register (MDR)",
        definition:
          "A register that holds the data or instruction just fetched from memory, or about to be written to memory",
        example:
          "After fetching, the instruction at the address held in the MAR is loaded into the MDR",
      },
      {
        term: "Program Counter (PC)",
        definition:
          "A register that holds the memory address of the next instruction to be fetched, incrementing automatically after each fetch",
        example:
          "After fetching the instruction at address 100, the PC updates to 101 ready for the next cycle",
      },
      {
        term: "Accumulator (ACC)",
        definition:
          "A register in the CPU that temporarily stores the result of arithmetic and logical operations carried out by the ALU",
        example:
          "When the ALU calculates 5 + 3, the result 8 is held in the Accumulator before being moved to memory",
      },
      {
        term: "Fetch-Decode-Execute (FDE) Cycle",
        definition:
          "The repeated process of fetching an instruction from memory, decoding what it means, then executing it",
        example:
          "The CPU fetches an instruction from RAM; the CU decodes it; the CPU carries it out, for example using the ALU to add two values",
      },
      {
        term: "Clock Speed",
        definition:
          "The number of CPU clock cycles per second, usually measured in Gigahertz (GHz); a higher clock speed allows more cycles each second",
        example:
          "A 3.5 GHz processor has 3.5 billion clock cycles per second; clock speed alone does not determine performance",
      },
      {
        term: "Cores",
        definition:
          "Independent processing units within a CPU that can work on instructions concurrently",
        example:
          "More cores can speed up work that can be split between them; doubling cores does not necessarily halve running time",
      },
      {
        term: "Cache Size",
        definition:
          "The amount of fast cache memory available to store frequently used data and instructions",
        example:
          "More cache can reduce fetching from slower RAM, improving performance when the needed data is in cache",
      },
      {
        term: "Embedded System",
        definition:
          "A computer built into a larger device to carry out a specific task or a limited set of related tasks",
        example:
          "A washing-machine controller runs the wash cycle; a thermostat controls heating; a car's automatic-light controller switches its lights according to light levels",
      },
      {
        term: "Von Neumann Architecture",
        definition:
          "A model of computer design where a single memory stores both data and instructions, and the CPU processes them sequentially via the fetch-decode-execute cycle",
        example:
          "The CPU fetches instructions from the same memory where data is stored, using registers like MAR, MDR, PC and ACC to manage the process",
      },
      {
        term: "Embedded System Characteristics",
        definition:
          "Dedicated hardware and software perform limited functions; the user cannot easily repurpose the system to run unrelated applications",
        example:
          "A car's automatic-light controller has a processor dedicated to checking the light sensor and switching the lamps, rather than running general-purpose applications",
      },
    ],
    1.2: [
      {
        term: "Random Access Memory (RAM)",
        definition:
          "Volatile primary storage that holds data and programs currently in use; contents are lost when power is off",
        example:
          "When you open Google Chrome, its program code is loaded from storage into RAM",
      },
      {
        term: "Read Only Memory (ROM)",
        definition:
          "Non-volatile primary storage that retains startup or firmware instructions without power; its contents are not normally changed during use",
        example:
          "A car controller's ROM can hold its startup instructions and the firmware that controls the system",
      },
      {
        term: "Virtual Memory",
        definition:
          "Secondary storage used to hold data moved out of RAM when RAM is full; the OS transfers data back to RAM when needed",
        example:
          "An OS moves inactive data to an SSD or HDD to free RAM; accessing secondary storage is slower than accessing RAM",
      },
      {
        term: "Magnetic Storage",
        definition:
          "Non-volatile storage that records data magnetically, for example on hard disks or magnetic tape",
        example:
          "An HDD uses rotating platters and a read/write head; magnetic tape is often used for large backups",
      },
      {
        term: "Optical Storage",
        definition: "Uses a laser to read and write data on a reflective disc",
        example: "Compact Disc (CD), Digital Versatile Disc (DVD), Blu-ray",
      },
      {
        term: "Solid State Storage",
        definition:
          "Uses electronic flash memory with no moving parts, making it faster and more durable",
        example:
          "Solid State Drive (SSD), Universal Serial Bus (USB) flash drive",
      },
      {
        term: "Bit",
        definition:
          "The smallest unit of data in computing; a single binary digit, either 0 or 1",
        example: "One switch that is either on (1) or off (0)",
      },
      {
        term: "Nibble",
        definition: "A group of 4 bits",
        example: "Half a byte, e.g. 1010",
      },
      {
        term: "Byte",
        definition: "A group of 8 bits",
        example: "Can represent a whole number from 0 to 255",
      },
      {
        term: "Kilobyte (KB)",
        definition:
          "A unit of data storage equal to 1000 bytes (OCR also accepts 1024)",
        example: "A small text file might be 50 KB",
      },
      {
        term: "Megabyte (MB)",
        definition:
          "A unit of data storage equal to 1000 kilobytes (OCR also accepts 1024)",
        example: "A photo might be several MB",
      },
      {
        term: "Gigabyte (GB)",
        definition:
          "A unit of data storage equal to 1000 megabytes (OCR also accepts 1024)",
        example: "A high-definition film might be 4 GB",
      },
      {
        term: "Terabyte (TB)",
        definition:
          "A unit of data storage equal to 1000 gigabytes (OCR also accepts 1024)",
        example: "A laptop hard drive might store 1 TB of data",
      },
      {
        term: "Petabyte (PB)",
        definition:
          "A unit of data storage equal to 1000 terabytes (OCR also accepts 1024)",
        example: "Large cloud providers may store many PB of data",
      },
      {
        term: "Binary",
        definition: "Base-2 number system using only the digits 0 and 1",
        example: "01001010 in binary represents 74 in denary",
      },
      {
        term: "Denary",
        definition:
          "Base-10 number system using digits 0 to 9; the everyday counting system",
        example: "The number 255 in denary is 11111111 in binary",
      },
      {
        term: "Hexadecimal",
        definition: "Base-16 number system using digits 0-9 and letters A-F",
        example:
          "2F = 2 x 16 + 15 = 47 in denary; each hex digit maps to four bits, so 2F = 0010 1111",
      },
      {
        term: "Binary Addition",
        definition:
          "Adding two binary numbers together, carrying over when a column totals 2 or more",
        example: "1011 + 0111 = 10010 (11 + 7 = 18 in denary)",
      },
      {
        term: "Overflow",
        definition:
          "An error that occurs when the result of a binary calculation needs more bits than are available; the extra bit is lost so the stored answer is incorrect",
        example:
          "Adding 11111111 + 00000001 in 8 bits gives 100000000 - the leading 1 is dropped and the result is recorded as 00000000",
      },
      {
        term: "Binary Shift",
        definition:
          "Moving every bit a set number of places, filling empty positions with zero and discarding bits shifted out",
        example:
          "For unsigned 8-bit values, 00001100 shifted left once becomes 00011000 (12 to 24); 00001101 shifted right once becomes 00000110 (13 to 6). Left shifts double per place only if no significant bit is lost",
      },
      {
        term: "Most Significant Bit (MSB)",
        definition:
          "The bit with the highest place value in a binary number, usually the leftmost bit",
        example: "In 10110001, the MSB is 1 and represents 128",
      },
      {
        term: "Least Significant Bit (LSB)",
        definition:
          "The bit with the lowest place value in a binary number, usually the rightmost bit",
        example: "In 10110001, the LSB is 1 and represents 1",
      },
      {
        term: "Character Set",
        definition:
          "A collection of characters with a unique code for each; n bits can represent up to 2^n different codes",
        example:
          "7 bits give 128 codes; 8 bits give 256, so representing 150 different characters requires at least 8 bits",
      },
      {
        term: "American Standard Code for Information Interchange (ASCII)",
        definition:
          "A character set mapping characters to numeric codes; OCR J277 questions represent ASCII using 8 bits per character (original ASCII used 7 bits)",
        example:
          "'A' is 65 (01000001), 'B' is 66 (01000010); consecutive letters have consecutive codes",
      },
      {
        term: "Unicode",
        definition:
          "A character set covering many languages and symbols; the number of bits used depends on the encoding",
        example:
          "Unicode can represent Hello, Chinese characters and emojis; ASCII cannot represent all of these. Use the stated bits per character in file-size questions",
      },
      {
        term: "Sound Sampling",
        definition:
          "Converting analogue sound to digital by measuring amplitude at regular intervals and storing each sample as a binary value",
        example:
          "Higher sample rate or bit depth can improve fidelity and increase file size; a longer recording increases file size without improving fidelity",
      },
      {
        term: "Sample Rate",
        definition:
          "The number of audio samples taken per second, measured in Hertz (Hz)",
        example: "CD quality audio uses 44,100 samples per second (44.1 kHz)",
      },
      {
        term: "Bit Depth",
        definition:
          "The number of bits used to record each audio sample; more bits means more detail",
        example:
          "16-bit audio gives 65,536 possible amplitude levels per sample",
      },
      {
        term: "Pixel",
        definition:
          "The smallest individual element of a digital image; each pixel stores a single colour value as a binary code",
        example:
          "A 1920 x 1080 image is made up of 2,073,600 pixels arranged in a grid",
      },
      {
        term: "Bitmap Image",
        definition:
          "A graphic made up of a grid of pixels, each assigned a colour value",
        example: "A 1920 x 1080 image contains over 2 million pixels",
      },
      {
        term: "Colour Depth",
        definition:
          "The number of bits used for each pixel; n bits allow up to 2^n colours",
        example:
          "7 bits allow 128 colours; 8 allow 256, so 240 colours need 8 bits. More bits can improve colour detail but increase file size",
      },
      {
        term: "Resolution",
        definition:
          "The dimensions of an image in pixels, usually width x height",
        example:
          "A 200 x 100 image has 20,000 pixels. Increasing dimensions can capture more detail but increases file size at the same colour depth",
      },
      {
        term: "Metadata",
        definition:
          "Additional data stored alongside an image or sound file describing its properties so the file can be interpreted correctly",
        example:
          "An image file's metadata includes width, height, colour depth, date taken and camera model",
      },
      {
        term: "Image File Size Calculation",
        definition:
          "File size = width x height x colour depth (in bits), then convert to bytes",
        example:
          "100 x 100 pixels at 24-bit colour = 240,000 bits = 30,000 bytes",
      },
      {
        term: "Sound File Size Calculation",
        definition:
          "File size = sample rate x bit depth x duration (seconds), then convert to bytes",
        example: "44,100 x 16 x 10 seconds = 7,056,000 bits = 882,000 bytes",
      },
      {
        term: "Text File Size Calculation",
        definition:
          "File size = bits per character x number of characters, then convert bits to bytes if required",
        example:
          "A 1,000-character message in 8-bit ASCII = 1,000 x 8 = 8,000 bits = 1,000 bytes (1 KB)",
      },
      {
        term: "Compression",
        definition:
          "Reducing the size of a file so it takes up less storage and transfers more quickly across a network; can be lossy or lossless",
        example:
          "A 10 MB photo compressed to 2 MB downloads five times faster on the same connection",
      },
      {
        term: "Lossy Compression",
        definition:
          "Reduces file size by permanently removing some data that cannot be recovered",
        example:
          "Joint Photographic Experts Group (JPEG) removes colour detail the human eye barely notices",
      },
      {
        term: "Lossless Compression",
        definition:
          "Reduces file size without losing any data; the original file can be perfectly rebuilt",
        example:
          "Portable Network Graphics (PNG), ZIP files; identical data when decompressed",
      },
      {
        term: "Secondary Storage",
        definition:
          "Non-volatile storage that keeps programs and files when power is off",
        example:
          "A saved document remains on an SSD after shutdown; it is loaded into RAM when opened",
      },
      {
        term: "Choosing Storage",
        definition:
          "Compare capacity, speed, cost, portability, durability and reliability against the needs of the user",
        example:
          "A portable SSD is fast, compact and resists knocks because it has no moving parts; an HDD may offer more capacity for the same cost, but moving parts are vulnerable to damage",
      },
    ],
    1.3: [
      {
        term: "Local Area Network (LAN)",
        definition:
          "A network covering a small geographical area, typically owned and managed by one organisation",
        example:
          "A school network connecting all computers across one or two buildings",
      },
      {
        term: "Wide Area Network (WAN)",
        definition:
          "A network covering a large geographical area, using third-party communication links",
        example:
          "The internet connecting users in London to servers in New York",
      },
      {
        term: "Bandwidth",
        definition:
          "The maximum amount of data that can be transmitted across a network connection in a fixed time, usually measured in megabits per second (Mbps); a key factor affecting network performance alongside the number of connected devices",
        example:
          "A 100 Mbps fibre line shared between 10 users averages 10 Mbps each; a school Wi-Fi slows at break time when many phones connect",
      },
      {
        term: "Star Topology",
        definition:
          "A network layout where all devices connect to a central switch or hub",
        example:
          "A failed device link leaves other devices connected, but failure of the central switch affects the whole network; adding a device requires a link to the switch",
      },
      {
        term: "Mesh Topology",
        definition:
          "A network with multiple direct connections between devices; a full mesh connects every pair, while a partial mesh connects only some pairs",
        example:
          "Alternative paths can keep communication working if a link fails; extra connections can make setup more complex",
      },
      {
        term: "Client-Server Network",
        definition:
          "A central server provides services and resources; client devices make requests",
        example:
          "A school file server holds shared folders that students access from their PCs",
      },
      {
        term: "Peer-to-Peer (P2P) Network",
        definition:
          "All devices are equal and share resources directly with each other without a central server",
        example: "Two laptops sharing files directly over a home network",
      },
      {
        term: "Wired Connection (Ethernet)",
        definition:
          "Connecting devices using physical cables and Ethernet standards",
        example:
          "A fixed office computer can use a stable, high-bandwidth cable connection, but installing cables costs money and restricts movement",
      },
      {
        term: "Wireless Connection (Wi-Fi)",
        definition:
          "Connecting devices using radio waves through a Wireless Access Point (WAP)",
        example:
          "A tablet can move within signal range without a cable, but walls, interference and shared bandwidth can reduce performance",
      },
      {
        term: "Bluetooth",
        definition:
          "Short-range wireless technology for pairing devices over a few metres",
        example: "Wireless headphones connecting to a smartphone",
      },
      {
        term: "Internet Protocol (IP) Address",
        definition:
          "An address used to identify a device or interface on an IP network and route data to it",
        example:
          "IPv4 example: 192.168.1.1. IPv6 example: 2001:0db8:0000:0000:0000:0000:0000:0001",
      },
      {
        term: "Media Access Control (MAC) Address",
        definition:
          "A unique hardware address permanently burned into a device's Network Interface Card (NIC)",
        example:
          "00:1A:2B:3C:4D:5E; set during manufacturing and cannot normally be changed",
      },
      {
        term: "TCP (Transmission Control Protocol)",
        definition:
          "A network protocol that checks packets are delivered reliably and reassembles them in the correct order",
        example:
          "When a web page is downloaded, TCP can request missing packets again so the page data arrives complete",
      },
      {
        term: "IP (Internet Protocol)",
        definition:
          "A network protocol that adds source and destination addresses so packets can be routed between networks",
        example:
          "Each packet travelling across the internet includes an IP address for the device it is being sent to",
      },
      {
        term: "HyperText Transfer Protocol (HTTP) / Secure (HTTPS)",
        definition:
          "Protocols for requesting and transferring web pages; HTTPS also encrypts the data between the browser and the web server",
        example:
          "Visiting https://www.bbc.co.uk; the padlock icon shows HTTPS is active",
      },
      {
        term: "File Transfer Protocol (FTP)",
        definition:
          "A protocol used for transferring files between a client and a server",
        example:
          "Uploading website files from a local computer to a web hosting server",
      },
      {
        term: "SMTP (Simple Mail Transfer Protocol)",
        definition:
          "The protocol used to send emails from a client to a server, or between mail servers",
        example:
          "When you click Send in Gmail, SMTP transfers your email to the recipient's mail server",
      },
      {
        term: "POP (Post Office Protocol)",
        definition:
          "An email protocol that downloads messages from the server to the local device and then removes them from the server",
        example:
          "Downloading emails to a desktop client using POP means they are no longer accessible from your phone",
      },
      {
        term: "IMAP (Internet Message Access Protocol)",
        definition:
          "An email protocol that keeps messages stored on the server and syncs them across all devices",
        example:
          "Reading an email on your phone and it also appearing as read on your laptop uses IMAP",
      },
      {
        term: "Email Protocols",
        definition:
          "A set of rules that govern how emails are sent, received, and stored across networks; SMTP handles sending, while POP and IMAP handle receiving",
        example:
          "When you send an email, SMTP delivers it to the recipient's server; when they check their inbox, POP or IMAP retrieves it",
      },
      {
        term: "Layering",
        definition:
          "The concept of dividing network communication into separate, independent layers where each layer has a specific role and communicates only with the layers directly above and below it",
        example:
          "Switching from Ethernet to Wi-Fi only changes the layer that handles the connection; the layers above it, such as the one where HTTP works, are unaffected",
      },
      {
        term: "Network Interface Card (NIC)",
        definition:
          "Hardware component that allows a device to connect to a network, either wired or wirelessly",
        example: "Every laptop has a built-in wireless NIC",
      },
      {
        term: "Router",
        definition:
          "A device that forwards packets between different networks and determines the best route",
        example:
          "Your home router sends data between your LAN and the internet (WAN)",
      },
      {
        term: "Switch",
        definition:
          "A device that connects devices within a LAN and sends data only to the intended recipient using MAC addresses",
        example:
          "A 24-port switch in a school server room connecting all classroom PCs",
      },
      {
        term: "Wireless Access Point (WAP)",
        definition:
          "A device that allows wireless devices to connect to a wired network",
        example: "A WAP mounted on a classroom ceiling providing Wi-Fi",
      },
      {
        term: "Transmission Media",
        definition:
          "The physical pathways that carry data signals between devices on a network, either wired (cables) or wireless (radio waves)",
        example:
          "Copper Ethernet cable, fibre optic cable and Wi-Fi radio waves are all transmission media",
      },
      {
        term: "Domain Name System (DNS)",
        definition:
          "A system of Domain Name Servers that converts human-readable domain names into IP addresses so browsers can locate websites",
        example:
          "Typing www.bbc.co.uk into a browser; the DNS converts this to an IP address like 151.101.0.81 so the request reaches the correct server",
      },
      {
        term: "The Cloud",
        definition:
          "Remote provision of storage, software or processing over a network, usually the internet",
        example:
          "Cloud storage allows access from different devices and can reduce local hardware needs, but depends on connectivity and the provider, and may have ongoing costs",
      },
      {
        term: "Hosting",
        definition:
          "The provision of server space and resources by a hosting company so that websites, applications or files are continuously available over the internet",
        example:
          "A web hosting company stores a school's website files on its servers so they can be reached at any time via the school's domain name",
      },
      {
        term: "Web Server and Client",
        definition:
          "A web server stores and delivers web pages; a client is a device or program that requests and displays those pages",
        example:
          "A web server hosts the BBC website; your browser acts as the client requesting and displaying the page",
      },
      {
        term: "Standards",
        definition:
          "Agreed rules and specifications that allow hardware and software from different manufacturers to work together",
        example:
          "Standards ensure a keyboard made by one company works with a computer made by another; they enable interoperability across the industry",
      },
      {
        term: "IP Address Formats",
        definition:
          "IPv4 has four decimal groups from 0 to 255 separated by dots. An uncompressed IPv6 address has eight groups of up to four hexadecimal digits separated by colons",
        example:
          "192.168.1.1 is valid IPv4; 258.0.0.1 is invalid. 2001:0db8:0000:0000:0000:0000:0000:0001 is valid IPv6",
      },
    ],
    1.4: [
      {
        term: "Malware",
        definition:
          "Malicious software designed to damage systems or gain unauthorised access",
        example: "Virus, trojan, spyware, ransomware, worm",
      },
      {
        term: "Virus",
        definition:
          "Malware that attaches to a legitimate file and spreads when the file is executed",
        example:
          "A virus hidden inside a downloaded game installer that corrupts files when run",
      },
      {
        term: "Trojan",
        definition:
          "Malware disguised as legitimate software that creates a backdoor for attackers",
        example:
          "A free app that secretly installs a keylogger to record passwords",
      },
      {
        term: "Spyware",
        definition:
          "Malware that secretly monitors user activity and sends data to a third party",
        example:
          "Software tracking every website you visit and sending it to advertisers",
      },
      {
        term: "Ransomware",
        definition:
          "Malware that encrypts a victim's files and demands payment for the decryption key",
        example:
          "WannaCry attack in 2017 locked hospital computers and demanded Bitcoin",
      },
      {
        term: "Worm",
        definition:
          "Self-replicating malware that spreads automatically across networks without needing a host file or user action",
        example:
          "A worm exploits a vulnerability in connected computers and copies itself between them, slowing the network as it spreads",
      },
      {
        term: "Phishing",
        definition:
          "Fake communication (usually email) designed to trick users into revealing personal data",
        example:
          "An email pretending to be from a bank asking you to click a link and enter your login details",
      },
      {
        term: "Brute Force Attack",
        definition:
          "Trying every possible password combination systematically until the correct one is found",
        example:
          "Software cycling through millions of password combinations per second",
      },
      {
        term: "Denial of Service (DoS) Attack",
        definition:
          "Flooding a server with so many requests that it becomes overloaded and unavailable to legitimate users",
        example:
          "Overloading an online shop's server so real customers cannot access the website",
      },
      {
        term: "Structured Query Language (SQL) Injection",
        definition:
          "Inserting malicious SQL code into a website's input field to access or manipulate the database",
        example:
          "Typing ' OR 1=1 -- into a login form to bypass authentication",
      },
      {
        term: "Data Interception and Theft",
        definition:
          "Intercepting data as it is being transmitted across a network, often using packet sniffing tools or man-in-the-middle techniques",
        example:
          "An attacker on a public Wi-Fi network capturing unencrypted login credentials as they are sent between a laptop and a server",
      },
      {
        term: "Social Engineering",
        definition:
          "Manipulating people psychologically into giving up confidential information or access",
        example:
          "Phoning an IT helpdesk pretending to be a senior manager to get a password reset",
      },
      {
        term: "Penetration Testing",
        definition:
          "An authorised simulated attack carried out to identify security weaknesses before real attackers do",
        example:
          "An ethical hacker hired by a company to test whether their firewall can be breached",
      },
      {
        term: "Anti-Malware Software",
        definition:
          "Software that scans for, blocks and removes malicious programs such as viruses, trojans and spyware before they can damage the system",
        example:
          "Microsoft Defender or Norton scanning incoming downloads and quarantining infected files",
      },
      {
        term: "Passwords",
        definition:
          "A secret string of characters used to authenticate a user; strong passwords combine length, mixed case, digits and symbols to resist brute-force attacks",
        example:
          "Requiring at least 12 characters with mixed case, digits and symbols, and locking the account after three failed attempts",
      },
      {
        term: "Firewall",
        definition:
          "Software or hardware that monitors and filters incoming and outgoing network traffic based on security rules",
        example: "Blocking incoming connections from unrecognised IP addresses",
      },
      {
        term: "Encryption",
        definition:
          "Using an algorithm and key to turn readable data into ciphertext that needs the appropriate key to decrypt",
        example:
          "HTTPS encrypts transmitted data so an interceptor cannot understand it without the decryption key; encryption does not prevent interception",
      },
      {
        term: "User Access Levels",
        definition:
          "Rules that give each user only the access they need: which files, folders and software they can use, and whether they can read, edit or delete them",
        example:
          "A student account cannot install software, but an admin account can",
      },
      {
        term: "Physical Security",
        definition:
          "Measures that physically protect computer systems and data from unauthorised access, theft or damage",
        example:
          "Locked server rooms, security cameras, biometric door entry systems, cable locks on laptops",
      },
    ],
    1.5: [
      {
        term: "Operating System (OS)",
        definition:
          "System software that manages hardware resources and provides a platform for application software to run",
        example: "Microsoft Windows, Apple macOS, Linux, Google Android",
      },
      {
        term: "User Interface",
        definition:
          "The means by which the user interacts with the computer system",
        example:
          "Graphical User Interface (GUI) uses icons, windows and menus; Command Line Interface (CLI) uses typed text commands",
      },
      {
        term: "Memory Management",
        definition:
          "The OS allocates and frees RAM, manages transfers to and from memory, and keeps running programs separate to support multitasking",
        example:
          "The OS gives each application memory and can move inactive data to secondary storage when RAM is full",
      },
      {
        term: "Multitasking",
        definition:
          "The OS rapidly switches between running programs so they appear to run at the same time",
        example: "Listening to music on Spotify while typing an essay in Word",
      },
      {
        term: "Peripheral Management",
        definition:
          "An operating system function that controls communication with input, output and storage devices",
        example:
          "The OS manages sending data to a printer and receiving data from a scanner",
      },
      {
        term: "Drivers",
        definition:
          "Software that lets the operating system communicate with and control a specific hardware device",
        example:
          "Installing a printer driver so the OS knows how to send documents to print",
      },
      {
        term: "User Management",
        definition:
          "The OS controls user accounts, access levels and permissions",
        example:
          "An admin account has full access; a student account has restricted permissions",
      },
      {
        term: "File Management",
        definition:
          "The OS organises files into folders and directories and controls who can read, write or delete them",
        example:
          "Creating a folder called Homework, moving files into it, setting read-only permissions",
      },
      {
        term: "Defragmentation",
        definition:
          "A utility that reorganises fragmented files on a Hard Disk Drive (HDD) so they are stored in contiguous blocks",
        example:
          "Files accessed faster because the read/write head does not need to jump across the platter",
      },
      {
        term: "Compression Utility",
        definition:
          "Software that reduces the size of files for storage or transfer",
        example:
          "Zipping a folder of images before emailing it to reduce the attachment size",
      },
      {
        term: "Encryption Utility",
        definition:
          "Software that scrambles files or drives so they cannot be understood without the decryption key",
        example:
          "Encrypting a USB flash drive with BitLocker so its contents are protected if lost",
      },
      {
        term: "Utility Software",
        definition:
          "System software that maintains, protects or optimises a computer",
        example:
          "Encryption protects stored data; compression reduces file size; defragmentation speeds access to fragmented files on an HDD",
      },
    ],
    1.6: [
      {
        term: "Data Protection Act (DPA) 2018 / General Data Protection Regulation (GDPR)",
        definition:
          "United Kingdom (UK) law governing how personal data is collected, stored, used and shared; organisations must keep data secure",
        example:
          "A school must keep student records secure, only use them for educational purposes, and delete them when no longer needed",
      },
      {
        term: "Computer Misuse Act (CMA) 1990",
        definition:
          "UK law making it illegal to gain unauthorised access to computer systems, or to modify data without permission",
        example:
          "Hacking into someone's email account is a criminal offence, even if no data is stolen",
      },
      {
        term: "Copyright, Designs and Patents Act 1988",
        definition:
          "UK law protecting creators' intellectual property from being copied, distributed or modified without permission",
        example:
          "Illegally downloading music, films or software without paying the creator",
      },
      {
        term: "Open Source Software",
        definition:
          "Software supplied with source code and a licence allowing users to inspect, modify and redistribute it under the licence terms",
        example:
          "A school can adapt an open-source program to its needs, but needs the skills to maintain changes and must follow the licence conditions",
      },
      {
        term: "Proprietary Software",
        definition:
          "Software controlled by its owner; source code is normally unavailable and use or modification is restricted by its licence. It may be free or paid",
        example:
          "A school might choose a supported commercial package for vendor support, but cannot normally adapt its source code",
      },
      {
        term: "Software Licence",
        definition:
          "A legal agreement that defines how software can be installed, used, copied and distributed; protects the creator's intellectual property and sets the terms of use",
        example:
          "A school buying a site licence for Microsoft Office that permits installation on every staff computer for one year",
      },
      {
        term: "Digital Divide",
        definition:
          "The gap between people who can access and effectively use digital technology and those who cannot",
        example:
          "Moving homework online offers flexible access, but can disadvantage pupils without devices, connectivity or digital skills",
      },
      {
        term: "Privacy",
        definition:
          "Control over access to personal information and how it is collected, used and shared",
        example:
          "Facial recognition may help identify offenders, but also records innocent people; consider security benefits, privacy, consent and how data is protected",
      },
      {
        term: "Cyberbullying",
        definition:
          "Using digital technology to harass, threaten or humiliate someone",
        example: "Sending abusive messages through social media or group chats",
      },
      {
        term: "Environmental Impact of Technology",
        definition:
          "The effects of manufacturing, using and disposing of technology on the environment",
        example:
          "Replacing school tablets uses raw materials and creates e-waste; keeping usable devices longer reduces waste, while newer efficient devices may use less power",
      },
      {
        term: "Sustainability",
        definition:
          "Designing and using technology in ways that minimise environmental harm",
        example:
          "Using renewable energy to power data centres, recycling old devices",
      },
    ],
    2.1: [
      {
        term: "Computational Thinking",
        definition:
          "Analysing a problem so that it can be solved in a logical way, using abstraction, decomposition and algorithmic thinking",
        example:
          "Planning a quiz app before coding: ignore the colours, split it into questions and scoring, then write the steps for each part",
      },
      {
        term: "Abstraction",
        definition:
          "Removing unnecessary detail to focus on the important information needed to solve a problem",
        example:
          "A London Underground map removes real geography and shows only stations and connections",
      },
      {
        term: "Decomposition",
        definition:
          "Breaking a large, complex problem down into smaller, more manageable sub-problems",
        example:
          "Building a game: break it into input handling, scoring, graphics, and collision detection",
      },
      {
        term: "Algorithmic Thinking",
        definition:
          "Creating a step-by-step set of instructions (an algorithm) to solve a problem",
        example:
          "Writing out the steps for making a cup of tea in the exact order a computer would follow",
      },
      {
        term: "Pseudocode",
        definition:
          "A way of writing out an algorithm in structured English that resembles code but is not tied to any programming language",
        example: 'IF age >= 18 THEN OUTPUT "You can vote"',
      },
      {
        term: "Flowchart",
        definition:
          "A diagram using standard shapes to represent the steps and decisions in an algorithm",
        example:
          "Oval = start/stop, rectangle = process, diamond = decision, parallelogram = input/output",
      },
      {
        term: "Structure Diagram",
        definition:
          "A hierarchical diagram that shows how a problem has been decomposed into sub-problems",
        example:
          "A top box labelled Quiz Program with sub-boxes for Ask Questions, Check Answers, Display Score",
      },
      {
        term: "Trace Table",
        definition:
          "A table used to manually track the values of variables as an algorithm is executed step by step",
        example:
          "Tracking the value of count through each iteration of a loop to check the output is correct",
      },
      {
        term: "Identifying Errors",
        definition:
          "Using trace tables, dry runs or testing to find logical or syntactical mistakes in an algorithm",
        example:
          "Tracing a sorting algorithm and spotting that two values are swapped in the wrong order",
      },
      {
        term: "Inputs, Processes, Outputs",
        definition:
          "Inputs provide data, processing transforms it, and outputs communicate the result",
        example: `Python: age = int(input("Age: ")); print(age + 1) inputs an age, calculates next year's age and outputs it`,
      },
      {
        term: "Linear Search",
        definition:
          "A searching algorithm that checks each item in a list one by one from start to end until the target is found or the list ends",
        example:
          "Searching for Zain in an unsorted register by reading every name from the top",
      },
      {
        term: "Binary Search",
        definition:
          "A searching algorithm that repeatedly halves a sorted list by comparing the target to the middle item",
        example:
          "Searching for 42 in a sorted list: check middle, discard the half that cannot contain 42, repeat",
      },
      {
        term: "Bubble Sort",
        definition:
          "A sorting algorithm that repeatedly compares adjacent pairs and swaps them if they are in the wrong order; passes continue until no swaps are needed",
        example:
          "List [5, 3, 8, 1]: first pass compares 5-3 (swap), 5-8 (no swap), 8-1 (swap)",
      },
      {
        term: "Merge Sort",
        definition:
          "A sorting algorithm that splits the list in half repeatedly until each sub-list has one item, then merges them back together in order",
        example:
          "[6,3,8,1] splits into [6,3] and [8,1], then [6],[3],[8],[1], then merges: [3,6],[1,8], then [1,3,6,8]",
      },
      {
        term: "Insertion Sort",
        definition:
          "A sorting algorithm that takes one item at a time and inserts it into the correct position within the already-sorted portion of the list",
        example:
          "Like sorting a hand of playing cards: pick up each card and slide it into the right place",
      },
    ],
    2.2: [
      {
        term: "Variable",
        definition:
          "A named storage location in memory whose value can change while the program runs",
        example:
          "score = 0; the value of score can be updated as the game progresses",
      },
      {
        term: "Constant",
        definition:
          "A named storage location whose value is set once and does not change during the program",
        example: "VAT_RATE = 0.20; the rate stays the same throughout",
      },
      {
        term: "Local Variable",
        definition:
          "A variable defined within a subprogram whose scope is that subprogram",
        example:
          "A function's total is local; a local constant such as TAX_RATE is also restricted to that function. In Python, uppercase names indicate constants by convention",
      },
      {
        term: "Global Variable",
        definition:
          "A variable defined at program scope and accessible from subprograms, subject to the language's scope rules",
        example:
          "A global constant such as MAX_SCORE can be read by functions. In Python, assigning a global variable inside a function requires a global declaration",
      },
      {
        term: "Assignment",
        definition:
          "Storing a value in a variable or constant using the assignment operator",
        example: 'name = "Ada" assigns the string to the variable name',
      },
      {
        term: "Sequence",
        definition:
          "Instructions executed one after another in the order they are written",
        example: "Line 1 runs, then line 2, then line 3",
      },
      {
        term: "Selection (IF/ELSE/ELIF)",
        definition:
          "A decision point where the program chooses which path to follow based on a condition",
        example: 'IF temperature > 30 THEN OUTPUT "Hot" ELSE OUTPUT "Cold"',
      },
      {
        term: "Iteration (Loops)",
        definition:
          "Repeating a block of code either a set number of times or until a condition is met",
        example:
          'FOR i = 1 TO 10 (count-controlled) or WHILE answer != "quit" (condition-controlled)',
      },
      {
        term: "Count-Controlled Loop (FOR)",
        definition: "A loop that repeats a fixed number of times",
        example: "for i in range(5): runs exactly 5 times",
      },
      {
        term: "Condition-Controlled Loop (WHILE / DO UNTIL)",
        definition:
          "A loop controlled by a condition: WHILE checks before the body and may run zero times; DO UNTIL checks after the body and runs at least once",
        example:
          "OCR: do ... until valid == true repeats until valid. Python: while not valid: repeats while valid is false",
      },
      {
        term: "Arithmetic Operators",
        definition: "Symbols used to perform mathematical calculations",
        example:
          "OCR notation: +, -, *, /, MOD (remainder), DIV (quotient), ^ (power). Python uses %, // and ** for the last three",
      },
      {
        term: "Comparison Operators",
        definition:
          "Symbols used to compare two values, returning True or False",
        example:
          "== (equal to), != (not equal to), < (less than), > (greater than), <=, >=",
      },
      {
        term: "Boolean Operators",
        definition: "Logical operators used to combine or invert conditions",
        example:
          "AND (both must be true), OR (at least one must be true), NOT (reverses the condition)",
      },
      {
        term: "Integer",
        definition: "A whole number data type with no decimal point",
        example: "42, -7, 0",
      },
      {
        term: "Real (Float)",
        definition: "A number data type that includes a decimal point",
        example: "3.14, -0.5, 99.99",
      },
      {
        term: "Boolean",
        definition: "A data type with only two possible values: True or False",
        example: "gameOver = True",
      },
      {
        term: "Character",
        definition: "A single letter, digit or symbol",
        example: "'A', '7', '!'",
      },
      {
        term: "String",
        definition:
          "A sequence of characters, typically enclosed in quotation marks",
        example: '"Hello World", "OCR J277"',
      },
      {
        term: "Casting",
        definition: "Converting a value from one data type to another",
        example:
          'int("42") converts the string "42" into the integer 42; str(100) converts 100 into "100"',
      },
      {
        term: "String Manipulation",
        definition:
          "Operations performed on strings such as extracting, finding length, joining or converting case",
        example:
          '"hello".upper() returns "HELLO"; "hello"[0] returns "h"; len("hello") returns 5',
      },
      {
        term: "String Concatenation",
        definition: "Joining two or more strings together",
        example: '"Hello " + "World" produces "Hello World"',
      },
      {
        term: "String Slicing",
        definition:
          "Extracting a portion (substring) of a string by specifying a start and end position",
        example:
          '"Hello World"[0:5] returns "Hello"; "Hello World"[6:] returns "World"',
      },
      {
        term: "File Handling",
        definition:
          "Opening a file, reading or writing its contents, then closing it so data can persist between runs",
        example:
          'Python: f = open("scores.txt", "w"); f.write("42"); f.close(). To read: f = open("scores.txt", "r"); score = f.read(); f.close()',
      },
      {
        term: "Record",
        definition:
          "A data structure that groups together related fields of different data types under one name",
        example:
          "A student record containing: name (string), age (integer), enrolled (Boolean)",
      },
      {
        term: "One-Dimensional (1D) Array",
        definition:
          "A fixed-length collection of values of the same type accessed by one index; Python lists can be used as an equivalent but can change length",
        example:
          'Python: names = ["Ali", "Ben", "Cara"]; names[0] is "Ali". Valid indices are 0 to len(names) - 1',
      },
      {
        term: "Two-Dimensional (2D) Array",
        definition:
          "A table-like collection accessed by row and column indices; Python can represent it as a list of lists",
        example:
          "With zero-based indexing, grid[2][3] accesses the third row and fourth column; pass grid to a function as an argument to process its rows",
      },
      {
        term: "Structured Query Language (SQL)",
        definition:
          "A language used to search for and retrieve data from a database",
        example: "SELECT name FROM students WHERE grade = 9;",
      },
      {
        term: "SQL SELECT",
        definition:
          "Retrieves specific fields from a database table, with optional conditions",
        example: "SELECT name, score FROM results WHERE score > 50;",
      },
      {
        term: "SQL FROM",
        definition:
          "Specifies which database table the SELECT statement should retrieve data from",
        example:
          "SELECT name FROM students; pulls the name column from the students table",
      },
      {
        term: "SQL WHERE",
        definition:
          "Filters the rows returned by a SELECT statement so only rows that match a condition are included",
        example:
          "SELECT name FROM students WHERE year = 11; returns only Year 11 students",
      },
      {
        term: "Sub Program",
        definition:
          "A named block of code that performs a specific task, called from the main program to reduce repetition",
        example:
          "Using a sub program called calculateAverage() whenever you need to find a mean",
      },
      {
        term: "Function",
        definition:
          "A subprogram that returns a value to its caller and may receive parameters",
        example:
          "Python: def first(items): return items[0] accepts an array/list; def copy(items): return items[:] returns a new list",
      },
      {
        term: "Procedure",
        definition:
          "A subprogram that performs a task without returning a useful value; it may receive parameters",
        example:
          'Python: def printWelcome(): print("Welcome") needs no parameters; printWelcome() calls it. Python returns None implicitly',
      },
      {
        term: "Parameter",
        definition:
          "A variable in a sub program definition that receives a value (argument) when the sub program is called",
        example: "In def greet(name):, name is the parameter",
      },
      {
        term: "Passing Data to Sub Programs",
        definition:
          "Sending values (arguments) into a function or procedure so it can use them",
        example:
          'greet("Hamid") passes the string "Hamid" as the argument for the parameter name',
      },
      {
        term: "Returning Values",
        definition:
          "A function sends a result back to the code that called it using a return statement",
        example:
          "return total sends the value of total back to the main program",
      },
      {
        term: "Random Number Generation",
        definition:
          "Using a built-in library to produce a random number within a specified range",
        example:
          "import random then random.randint(1, 6) simulates rolling a dice",
      },
    ],
    2.3: [
      {
        term: "Defensive Design",
        definition:
          "Writing programs that anticipate and handle potential misuse or errors gracefully",
        example:
          "Checking that a user enters a number, not text, before performing a calculation",
      },
      {
        term: "Anticipating Misuse",
        definition:
          "A defensive design consideration where the programmer thinks ahead about how a program might be used incorrectly or maliciously and writes safeguards against it",
        example:
          "Designing a banking app to refuse negative withdrawal amounts and to lock the account after suspicious activity",
      },
      {
        term: "Input Validation",
        definition:
          "Checking that data entered by a user meets specific rules before the program accepts it",
        example:
          "Range check: age must be between 0 and 120. Presence check: field cannot be left empty. Type check: must be a number",
      },
      {
        term: "Authentication",
        definition:
          "Verifying a user's identity before allowing access to a program or its features",
        example:
          "Asking for a username and password at login; locking the account after 3 failed attempts",
      },
      {
        term: "Maintainability",
        definition:
          "Writing code that other programmers (or your future self) can easily read, understand and update",
        example:
          "Using meaningful variable names, adding comments, consistent indentation, modular sub programs",
      },
      {
        term: "Comments",
        definition:
          "Notes written in the source code that are ignored by the translator, used to explain what the code does",
        example: "# This loop checks each item in the list",
      },
      {
        term: "Indentation",
        definition:
          "Using consistent spacing to show the structure of code, especially inside loops, selections and sub programs",
        example: "All lines inside a for loop are indented by the same amount",
      },
      {
        term: "Naming Conventions",
        definition:
          "Using clear, descriptive names for variables, constants and sub programs so their purpose is obvious",
        example:
          "total_score is clearer than ts; calculateAverage() is clearer than ca()",
      },
      {
        term: "Iterative Testing",
        definition:
          "Testing individual parts of the program during development, fixing issues as they arise",
        example:
          "Testing the login module before building the rest of the program",
      },
      {
        term: "Final (Terminal) Testing",
        definition:
          "Testing the complete program at the end of development to check it meets all requirements",
        example:
          "Running the finished quiz program through every scenario to confirm it works as a whole",
      },
      {
        term: "Syntax Error",
        definition:
          "An error that breaks a programming language's grammatical rules and prevents the affected code from being parsed",
        example:
          'print("Hello" has a missing closing bracket; printt("Hello") misspells the keyword print',
      },
      {
        term: "Logic Error",
        definition:
          "The code runs without crashing but produces an incorrect or unexpected result",
        example:
          "Using > instead of >= so the boundary value is excluded when it should be included",
      },
      {
        term: "Normal Test Data",
        definition:
          "Valid data that the program should handle correctly under typical use",
        example:
          "Entering the age 25 when the program expects an age between 0 and 120",
      },
      {
        term: "Boundary Test Data",
        definition:
          "Valid data at the very edge of an accepted range, testing that limits are handled correctly",
        example:
          "Entering 0 and 120 for an age range of 0 to 120; both should be accepted",
      },
      {
        term: "Invalid Test Data",
        definition:
          "Data of the correct data type that should still be rejected because it is outside the accepted rules",
        example:
          "Entering -5 or 200 when the program expects an age between 0 and 120",
      },
      {
        term: "Erroneous Test Data",
        definition:
          "Data of the wrong data type that the program should reject before any processing takes place",
        example:
          'Entering "abc" or a date when the program expects an integer age',
      },
      {
        term: "Test Plan",
        definition:
          "A set of tests giving the input, expected outcome and space to record the actual outcome and any action needed",
        example:
          'For integer ages 0 to 120: 25 accepted (normal); 0 and 120 accepted (boundaries); -1 rejected (invalid); "abc" rejected (erroneous)',
      },
    ],
    2.4: [
      {
        term: "AND Gate",
        definition:
          "A logic gate that outputs 1 (True) only when both inputs are 1",
        example:
          "Input A = 1, Input B = 1, Output = 1. Any other combination gives 0",
      },
      {
        term: "OR Gate",
        definition:
          "A logic gate that outputs 1 (True) when at least one input is 1",
        example: "Input A = 0, Input B = 1, Output = 1. Only 0,0 gives 0",
      },
      {
        term: "NOT Gate",
        definition:
          "A logic gate that inverts the input: 1 becomes 0, and 0 becomes 1",
        example: "Input = 1, Output = 0. Input = 0, Output = 1",
      },
      {
        term: "Truth Table",
        definition:
          "A table showing every possible combination of inputs and the resulting output for a logic gate or circuit",
        example:
          "A 2-input AND gate has 4 rows: (0,0)=0, (0,1)=0, (1,0)=0, (1,1)=1",
      },
      {
        term: "Logic Diagram / Logic Circuit",
        definition:
          "A diagram using standard gate symbols to represent a Boolean expression visually",
        example:
          "Drawing an AND gate feeding into a NOT gate to represent NOT (A AND B)",
      },
      {
        term: "Combining Logic Gates",
        definition:
          "Connecting multiple gates together to create more complex Boolean expressions",
        example:
          "(A OR B) AND (NOT C): an OR gate and a NOT gate both feeding into an AND gate",
      },
    ],
    2.5: [
      {
        term: "High-Level Language",
        definition:
          "A language with human-readable constructs that must be translated for execution",
        example:
          "Python is easier to read and portable across systems with a suitable implementation; low-level languages offer closer hardware control",
      },
      {
        term: "Low-Level Language",
        definition:
          "A language closely tied to a processor's instructions and hardware",
        example:
          "Assembly can offer direct hardware control and efficient resource use, but is harder to develop and less portable than high-level code",
      },
      {
        term: "Machine Code",
        definition:
          "Binary instructions (0s and 1s) that the CPU can execute directly without translation",
        example:
          "10110000 01100001: the only language the processor actually understands",
      },
      {
        term: "Translator",
        definition:
          "Software that converts source code into machine code so the CPU can run it",
        example: "Compilers and interpreters are both types of translator",
      },
      {
        term: "Compiler",
        definition:
          "A translator that translates a whole program before execution, commonly producing an executable",
        example:
          "A compiled executable can run without the compiler and is often fast; after changing source code, it must be compiled again",
      },
      {
        term: "Interpreter",
        definition:
          "A translator that executes a program as it translates instructions, rather than first producing a standalone executable",
        example:
          "An interpreter supports quick testing and debugging, but translation is needed when running the source again and execution may be slower",
      },
      {
        term: "Integrated Development Environment (IDE)",
        definition:
          "A software application that provides a complete set of tools for writing, testing and debugging code in one place",
        example: "Visual Studio Code, PyCharm, IDLE, Thonny",
      },
      {
        term: "Code Editor",
        definition:
          "The IDE feature that provides a text area for writing code, often with syntax highlighting and auto-complete",
        example:
          "Keywords like def and for are colour-coded; bracket matching highlights pairs",
      },
      {
        term: "Error Diagnostics",
        definition:
          "IDE tools that identify and describe errors in the code, showing line numbers and error messages",
        example:
          "A red underline on line 12 with the message IndentationError: unexpected indent",
      },
      {
        term: "Run-Time Environment",
        definition:
          "The IDE feature that allows the programmer to execute their code and see the output within the same application",
        example:
          "Clicking Run in Thonny and seeing the output appear in the console below",
      },
      {
        term: "Debugging Tools",
        definition:
          "IDE features that help locate and fix errors, such as breakpoints, stepping through code, and variable watches",
        example:
          "Setting a breakpoint on line 20 so the program pauses there, then inspecting the current value of each variable",
      },
    ],
  },
  li = {
    1.1: "Systems architecture",
    1.2: "Memory and storage",
    1.3: "Networks and protocols",
    1.4: "Network security",
    1.5: "Systems software",
    1.6: "Ethical, legal and environmental impacts",
    2.1: "Algorithms",
    2.2: "Programming fundamentals",
    2.3: "Producing robust programs",
    2.4: "Boolean logic",
    2.5: "Languages and IDEs",
  },
  Zm = 24,
  Ym = 13,
  qm = 3,
  Xm = 6,
  Fd = /\s*\(([^)]*)\)\s*/g;
function Jc(s) {
  return s.toUpperCase().replace(/[^A-Z0-9]/g, "");
}
function Jm(s) {
  const c = s.replace(Fd, " ").replace(/\s+/g, " ").trim();
  if (/[/,]/.test(c)) return null;
  const l = c
      .split(" ")
      .map((y) =>
        [...y].flatMap((S) =>
          /[A-Za-z0-9]/.test(S)
            ? [{ kind: "letter", char: S.toUpperCase() }]
            : S === "-"
              ? [{ kind: "fixed", char: S }]
              : [],
        ),
      ),
    d = l.map((y) => y.filter((S) => S.kind === "letter").length),
    p = d.reduce((y, S) => y + S, 0);
  return p < qm || p > Zm || d.some((y) => y === 0 || y > Ym)
    ? null
    : { shown: c, words: l };
}
const ed = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function eh(s) {
  const c = s.match(/[A-Za-z0-9]+/g) ?? [],
    l = new Set(
      c.filter(
        (p) => (p.match(/[A-Z]/g) ?? []).length >= 2 || /^\d[A-Z]$/.test(p),
      ),
    ),
    d = new Set(
      c.filter((p) => p.length >= 4 && !l.has(p)).map((p) => p.toLowerCase()),
    );
  return [
    ...[...l].map((p) => new RegExp(`\\b${ed(p)}s?\\b`, "gi")),
    ...[...d].map((p) => new RegExp(`\\b${ed(p)}\\w*`, "gi")),
  ];
}
function td(s, c) {
  let l = c.trim().replace(/[.\s]+$/, "");
  for (const d of eh(s)) l = l.replace(d, "…");
  return l;
}
const th = /\(([A-Za-z0-9-]{2,7})\)(.*)$/;
function nh(s) {
  const c = s.match(th);
  return !c || (c[1].match(/[A-Z]/g) ?? []).length < 1
    ? []
    : [Jc(c[1]) + Jc(c[2].replace(Fd, " "))];
}
function rh(s) {
  const c = Jm(s.term);
  if (!c) return null;
  const l = c.words
      .flat()
      .filter((p) => p.kind === "letter")
      .map((p) => p.char)
      .join(""),
    d = nh(s.term);
  return {
    id: `${s.deck}/${s.term}`,
    deck: s.deck,
    term: s.term,
    shown: c.shown,
    words: c.words,
    answer: l,
    accept: [...new Set(d)].filter((p) => p !== l && p.length > 0),
    definition: td(s.term, s.definition),
    example: s.example ? td(s.term, s.example) : null,
    meaning: s.definition.trim(),
  };
}
function oh(s) {
  const c = new Set();
  return s.flatMap((l) => {
    const d = rh(l);
    return !d || c.has(d.answer) ? [] : (c.add(d.answer), [d]);
  });
}
const la = Object.entries(Ud).flatMap(([s, c]) =>
  oh(c.map((l) => ({ ...l, deck: s }))),
);
[
  la.filter((s) => s.deck.startsWith("1.")),
  la.filter((s) => s.deck.startsWith("2.")),
  ...Object.keys(li)
    .map((s) => ({
      id: s,
      title: `${s} ${li[s]}`,
      words: la.filter((c) => c.deck === s),
    }))
    .filter((s) => s.words.length >= Xm),
];
function ih(s) {
  let c = 2166136261;
  for (const l of s.id)
    ((c ^= l.charCodeAt(0)), (c = Math.imul(c, 16777619) >>> 0));
  return `w${c.toString(36)}`;
}
const sh = 3,
  ah = 13,
  $d = /^(.*?)\s*\(([A-Z]{3,6})\)\s*$/;
function lh(s) {
  if (/^SQL\s/.test(s)) return null;
  const c = s.match($d);
  if (c) return { answer: c[2], enumeration: String(c[2].length) };
  if (/[()\d]/.test(s) || s.includes("-")) return null;
  const l = s.match(/[A-Za-z]+/g) ?? [],
    d = l.join("").toUpperCase();
  return d.length < sh || d.length > ah
    ? null
    : { answer: d, enumeration: l.map((p) => p.length).join(",") };
}
const ua = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  uh = new Set(["the", "and", "for", "of", "to", "in", "on", "a", "an", "or"]);
function Wd(s, c) {
  const l = s.match($d),
    d = (l ? l[1] : s).match(/[A-Za-z]+/g) ?? [],
    p = d.filter((k) => /^[A-Z]{2,}$/.test(k)),
    y = l ? 4 : 3,
    S = new Set(
      d
        .filter(
          (k) => k.length >= y && !p.includes(k) && !uh.has(k.toLowerCase()),
        )
        .map((k) => k.toLowerCase().replace(new RegExp("(?<=\\w{3})s$"), "")),
    );
  let b = c.trim().replace(/[.\s]+$/, "");
  d.length > 1 &&
    (b = b.replace(
      new RegExp(`\\b${d.map(ua).join("[\\s-]+")}\\w*`, "gi"),
      "…",
    ));
  for (const k of [...(l ? [l[2]] : []), ...p])
    b = b.replace(new RegExp(`\\b${ua(k)}s?\\b`, "gi"), "…");
  for (const k of S) b = b.replace(new RegExp(`\\b${ua(k)}\\w*`, "gi"), "…");
  return b.replace(/…(?:[\s-]+…)+/g, "…");
}
function ch(s, c, l) {
  return `${Wd(s, c)} (${l})`;
}
const ca = Object.entries(Ud).flatMap(([s, c]) => {
    const l = new Set();
    return c.flatMap((d) => {
      const p = lh(d.term);
      return !p || l.has(p.answer)
        ? []
        : (l.add(p.answer),
          [
            {
              id: `${s}/${p.answer}`,
              topic: s,
              term: d.term,
              ...p,
              clue: ch(d.term, d.definition, p.enumeration),
              definition: d.definition.trim(),
              example: d.example?.trim() ? Wd(d.term, d.example) : null,
              ref: ih({ id: `${s}/${d.term}` }),
            },
          ]);
    });
  }),
  dh = 8;
[
  ca.filter((s) => s.topic.startsWith("1.")),
  ca.filter((s) => s.topic.startsWith("2.")),
  ...Object.keys(li)
    .map((s) => ({
      id: s,
      title: `${s} ${li[s]}`,
      words: ca.filter((c) => c.topic === s),
    }))
    .filter((s) => s.words.length >= dh),
];
const fh = 15e3;
function Bd(s) {
  return !!(s && s.live === !0);
}
function ph(s, c = {}) {
  const l = new URL("/api/lobby", s);
  for (const [S, b] of Object.entries(c)) l.searchParams.set(S, b);
  const d = l.toString(),
    p = (S, b) => {
      const k = new URL(d);
      return (k.searchParams.set(S, b), k.toString());
    };
  async function y(S, b = {}) {
    const k = { accept: "application/json" };
    b.body && (k["content-type"] = "application/json");
    try {
      const V = await fetch(S, {
          cache: "no-store",
          credentials: "include",
          ...b,
          headers: k,
        }),
        T = await V.json().catch(() => null);
      return !V.ok || !T?.ok
        ? {
            ok: !1,
            status: V.status,
            message: T?.message ?? "The lobby could not be reached.",
          }
        : { ok: !0, data: T.data ?? null };
    } catch {
      return { ok: !1, status: 0, message: "The lobby could not be reached." };
    }
  }
  return {
    overview: () => y(d),
    takeover: () => y(p("view", "takeover")),
    get: (S, b) => {
      const k = new URL(p("id", S));
      return (b && k.searchParams.set("version", String(b)), y(k.toString()));
    },
    send: (S) =>
      y(d, {
        method: "POST",
        body: JSON.stringify(S),
        keepalive: S.action === "leave",
      }),
    live: (S, b) => {
      const k = new URL(p("view", "live"));
      return (
        S && k.searchParams.set("classId", S),
        b && b !== "crossword" && k.searchParams.set("game", b),
        y(k.toString())
      );
    },
    liveStatus: (S, b) => {
      const k = new URL(p("view", "live-status"));
      return (
        S && k.searchParams.set("classId", S),
        b && b !== "crossword" && k.searchParams.set("game", b),
        y(k.toString())
      );
    },
    liveStart: (S, b, k) =>
      y(d, {
        method: "POST",
        body: JSON.stringify({
          action: "live-start",
          classId: S,
          set: b,
          ...(k ? { pupils: k } : {}),
        }),
      }),
    liveRecord: (S) =>
      y(d, {
        method: "POST",
        body: JSON.stringify({ action: "live-record", receipt: S }),
        keepalive: !0,
      }),
    liveBoard: () => y(p("view", "live-board")),
    liveEnd: (S) =>
      y(d, {
        method: "POST",
        body: JSON.stringify({ action: "live-end", classId: S }),
      }),
  };
}
const Hd = "back",
  mh = "data-room-held";
function nd() {
  return typeof document < "u" && document.documentElement.hasAttribute(mh);
}
const hh = 1e4,
  gh = "Your teacher has started a game. Saving your work...";
function yh(s, c, l = window.location.hostname) {
  const d = new URL(Gr(l, "https://exams.comp.school"));
  return (
    (d.pathname = `${d.pathname.replace(/\/$/, "")}/games/lobby`),
    (d.search = ""),
    d.searchParams.set("id", s),
    c && d.searchParams.set(Hd, c),
    d.toString()
  );
}
function vh(s, c = window.location) {
  return (
    /\/games\/lobby\/?$/.test(c.pathname) &&
    new URLSearchParams(c.search).get("id") === s
  );
}
function wh(s, c = window.location.hostname) {
  const l = new URL(Gr(c, "https://exams.comp.school"));
  return (
    (l.pathname = `${l.pathname.replace(/\/$/, "")}/games/crossword`),
    (l.search = ""),
    s && l.searchParams.set(Hd, s),
    l.toString()
  );
}
function xh(s = window.location) {
  return /\/games\/crossword\/?$/.test(s.pathname);
}
function rd(s, c = window.location) {
  return Bd(s) ? xh(c) : vh(s.id, c);
}
function kh(s, c) {
  return Bd(s) ? wh(c) : yh(s.id, c);
}
function Sh(s) {
  return s?.role === "student" && s.aiAccess === !1;
}
function Eh(s) {
  return (
    s?.role === "student" && !Sh(s) && (s.courses ?? ["j277"]).includes("j277")
  );
}
const Ch = {
  position: "fixed",
  insetInline: "1rem",
  top: "1rem",
  zIndex: 2147483e3,
  maxWidth: "32rem",
  marginInline: "auto",
  padding: "1rem 1.25rem",
  borderRadius: "0.75rem",
  border: "2px solid #0f766e",
  background: "#ffffff",
  color: "#0f172a",
  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.25)",
  fontSize: "1.125rem",
  fontWeight: 600,
  lineHeight: 1.4,
  textAlign: "center",
};
function bh({ user: s }) {
  const c = Eh(s),
    [l, d] = N.useState(!1);
  return (
    N.useEffect(() => {
      if (!c) return;
      const p = ph(fn(window.location.hostname));
      let y = !1,
        S = !1,
        b = null;
      async function k() {
        if (!(S || y || b !== null || document.visibilityState === "hidden")) {
          S = !0;
          try {
            const D = await p.takeover();
            if (y || !D.ok || !D.data || rd(D.data) || nd()) return;
            (d(!0), (b = window.setTimeout(() => void V(), hh)));
          } finally {
            S = !1;
          }
        }
      }
      async function V() {
        await za();
        const D = await p.takeover();
        if (!y) {
          if (!D.ok || !D.data || rd(D.data) || nd()) {
            ((b = null), d(!1));
            return;
          }
          window.location.assign(kh(D.data, window.location.href));
        }
      }
      k();
      const T = window.setInterval(() => void k(), fh),
        K = () => void k();
      return (
        document.addEventListener("visibilitychange", K),
        () => {
          ((y = !0),
            window.clearInterval(T),
            b !== null && window.clearTimeout(b),
            document.removeEventListener("visibilitychange", K));
        }
      );
    }, [c]),
    !c || !l
      ? null
      : a.jsx("div", {
          role: "status",
          "aria-live": "assertive",
          style: Ch,
          "data-lobby-takeover-notice": !0,
          children: gh,
        })
  );
}
const jh = 5e3,
  od = 1e4,
  da = "Room control could not be reached.";
function Ah(s) {
  return typeof s == "object" && s !== null && typeof s.live == "boolean";
}
function Ph(s, c = {}) {
  const l = (y = {}) => {
    const S = new URL("/api/room-control", s);
    for (const [b, k] of Object.entries({ ...c, ...y }))
      S.searchParams.set(b, k);
    return S.toString();
  };
  async function d(y, S) {
    const b = { accept: "application/json" };
    S !== void 0 && (b["content-type"] = "application/json");
    try {
      const k = await fetch(y, {
          cache: "no-store",
          credentials: "include",
          headers: b,
          ...(S === void 0 ? {} : { method: "POST", body: JSON.stringify(S) }),
        }),
        V = await k.json().catch(() => null);
      return !k.ok || !V?.ok
        ? {
            ok: !1,
            status: k.status,
            message: V?.message ?? da,
            ...(V?.current ? { current: V.current } : {}),
          }
        : { ok: !0, data: V.data ?? null };
    } catch {
      return { ok: !1, status: 0, message: da };
    }
  }
  async function p(y, S) {
    const b = await d(y, S);
    return b.ok
      ? Ah(b.data)
        ? { ok: !0, data: b.data }
        : { ok: !1, status: 0, message: da }
      : b;
  }
  return {
    roster: (y) => d(l({ roster: y })),
    state: (y) => d(l({ class: y })),
    presence: (y) => d(l({ presence: y })),
    send: (y, S, b) => d(l(), { class: y, action: S, edits: b }),
    directive: () => p(l({ me: "1" })),
    complete: (y) => p(l(), { complete: y }),
    playlists: () => d(l({ playlists: "1" })),
    savePlaylist: (y) => d(l(), { playlist: y }),
    deletePlaylist: (y) => d(l(), { deletePlaylist: y }),
  };
}
const Wa = "roomStep",
  zh = "roomStepKind",
  _h = "roomStepCount",
  id = "comp-school:room-step-completed",
  Th = {
    "matching-terms": {
      label: "Matching terms",
      cohorts: ["gcse", "ks3"],
      needsTopic: !0,
      completes: !0,
    },
    "guess-the-term": {
      label: "Guess the term",
      cohorts: ["gcse", "ks3"],
      needsTopic: !0,
      completes: !0,
    },
    flashcards: {
      label: "Flashcards",
      cohorts: ["gcse", "ks3"],
      needsTopic: !0,
      completes: !0,
    },
    "coding-challenge": {
      label: "Coding challenge",
      cohorts: ["gcse", "ks3"],
      needsTopic: !1,
      completes: !0,
    },
    "past-paper-questions": {
      label: "Past paper questions",
      cohorts: ["gcse"],
      needsTopic: !0,
      completes: !0,
    },
    "past-paper": {
      label: "Past paper",
      cohorts: ["gcse"],
      needsTopic: !1,
      completes: !0,
    },
    "tell-me-why": {
      label: "Tell me why",
      cohorts: ["gcse"],
      needsTopic: !0,
      completes: !0,
    },
    "live-game": {
      label: "Live class game",
      cohorts: ["gcse"],
      needsTopic: !1,
      completes: !1,
    },
    "topic-game": {
      label: "Topic game",
      cohorts: ["gcse", "ks3"],
      needsTopic: !0,
      completes: !0,
    },
    "crit-wall": {
      label: "Crit wall",
      cohorts: ["gcse"],
      needsTopic: !0,
      completes: !0,
    },
  },
  sd = "https://exams.comp.school",
  jn = "https://recall.comp.school",
  Rh = "https://code.comp.school",
  Mh = "set",
  Lh = ["crossword", "code-climb"],
  ad = /^[12]\.\d$/,
  fa = /^[12]\.\d\.\d{1,2}$/,
  Oh = /^J277-0([12])-[A-Za-z0-9-]+$/,
  Ih = {
    io: "io",
    if: "if",
    for: "for",
    while: "while",
    fn: "functions",
    scratch: "scratch",
  },
  Nh = /^(io|if|for|while|fn|scratch)-[a-z0-9-]+$/;
function Dh(s) {
  return s.split(".").slice(0, 2).join(".");
}
function An(s, c, l) {
  const d = new URL(s);
  (d.searchParams.set("paper", c.charAt(0)),
    d.searchParams.set("topic", Dh(c)),
    d.searchParams.set("sub", c));
  for (const [p, y] of Object.entries(l)) d.searchParams.set(p, y);
  return d;
}
function Uh(s) {
  return `topic-${s.replace(/\./g, "-")}`;
}
function Fh(s) {
  const c = s.topic ?? "",
    l = ad.test(c) || fa.test(c);
  switch (s.kind) {
    case "matching-terms":
      return l ? An(`${jn}/`, c, { activity: "matching" }) : null;
    case "guess-the-term":
      return l ? An(`${jn}/`, c, { activity: "guess" }) : null;
    case "crit-wall":
      return l ? An(`${jn}/`, c, { activity: "crit-wall" }) : null;
    case "flashcards":
      return l ? An(`${jn}/`, c, { activity: "flashcards" }) : null;
    case "tell-me-why":
      return l ? An(`${jn}/`, c, { activity: "tell-me-why" }) : null;
    case "topic-game":
      return fa.test(c) && s.target
        ? An(`${jn}/`, c, { activity: "game", game: s.target })
        : null;
    case "past-paper-questions":
      return fa.test(c)
        ? An(`${jn}/`, c, {
            target: Uh(c),
            revision: "0",
            ...(s.count && s.count > 0 ? { [_h]: String(s.count) } : {}),
          })
        : null;
    case "past-paper": {
      const d = s.target?.match(Oh)?.[1];
      if (!d || !s.target) return null;
      const p = new URL(`${sd}/`);
      return (
        p.searchParams.set("paper", d),
        p.searchParams.set("target", s.target),
        p
      );
    }
    case "coding-challenge": {
      const d = s.target?.match(Nh)?.[1],
        p = d ? Ih[d] : void 0;
      if (!p || !s.target) return null;
      const y = new URL(`${Rh}/essentials/${p}`);
      return (y.searchParams.set("challenge", s.target), y);
    }
    case "live-game": {
      if (!Lh.includes(s.target ?? "")) return null;
      const d = new URL(`${sd}/games/${s.target}`);
      return (
        s.target === "crossword" && ad.test(c) && d.searchParams.set(Mh, c),
        d
      );
    }
  }
}
function Vd(s, c) {
  const l = Fh(s);
  if (!l) return c;
  (l.searchParams.set(Wa, s.id), l.searchParams.set(zh, s.kind));
  let d;
  try {
    d = new URL(c).hostname;
  } catch {
    return c;
  }
  return Gr(d, l.toString());
}
const $h = "Your teacher is moving you. Saving your work...",
  Wh = "You have finished. Retake a step or choose something else.",
  Bh = "Next step...",
  Hh = 6e4,
  vt = "data-room-held",
  pa = "comp-school-room-control:finished-seen";
function Vh(s) {
  return s?.role === "student" && (s.courses ?? ["j277"]).includes("j277");
}
function Pn(s) {
  return !!(s && s.live && !s.free);
}
function Kh(s) {
  return `Step ${s.index + 1} of ${s.total}`;
}
function Gh(s) {
  const c = Th[s.kind]?.label ?? "Activity";
  return s.topic ? `${c} ${s.topic}` : c;
}
function ma(s, c, l = Vd) {
  const d = new URL(l(s, c));
  return (d.searchParams.set(Wa, s.id), d.toString());
}
function ha(s, c, l, d = null) {
  const p = new URL(l);
  return p.origin !== new URL(c).origin
    ? !1
    : p.searchParams.get(Wa) === s.id
      ? !0
      : d?.stepId === s.id && d.pathname === p.pathname;
}
const Qh = `
html[${vt}] [data-session-sidebar],
html[${vt}] [data-session-sidebar-toggle],
html[${vt}] [data-session-sidebar-rail-toggle],
html[${vt}] [data-session-sidebar-search],
html[${vt}] [data-session-sidebar-search-open],
html[${vt}] [data-topic-breadcrumb],
html[${vt}] nav[aria-label="Breadcrumb"],
html[${vt}] [data-phone-bar-back],
html[${vt}] [data-launcher-phone-bar] { display: none !important; }
html[${vt}] [data-session-sidebar-layout] { padding-left: 0 !important; }
`,
  Zh = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "baseline",
    justifyContent: "center",
    gap: "0.25rem 0.75rem",
    padding: "0.5rem 1rem",
    background: "#0f172a",
    color: "#f8fafc",
    fontSize: "1rem",
    lineHeight: 1.4,
    textAlign: "center",
  },
  _a = {
    position: "fixed",
    insetInline: "1rem",
    top: "1rem",
    zIndex: 2147483e3,
    maxWidth: "32rem",
    marginInline: "auto",
    padding: "1rem 1.25rem",
    borderRadius: "0.75rem",
    border: "2px solid #0f766e",
    background: "#ffffff",
    color: "#0f172a",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.25)",
    fontSize: "1.125rem",
    fontWeight: 600,
    lineHeight: 1.4,
    textAlign: "center",
  },
  Yh = {
    ..._a,
    cursor: "pointer",
    font: "inherit",
    fontSize: "1.125rem",
    fontWeight: 600,
  };
function qh(s) {
  try {
    return window.localStorage.getItem(s) === "1";
  } catch {
    return !1;
  }
}
function ld(s, c) {
  try {
    c ? window.localStorage.setItem(s, "1") : window.localStorage.removeItem(s);
  } catch {}
}
function Xh({ user: s, transport: c, navigate: l, stepUrl: d = Vd }) {
  const p = Vh(s),
    [y, S] = N.useState(null),
    [b, k] = N.useState(!1),
    [V, T] = N.useState(!1),
    [K, D] = N.useState(!1),
    X = N.useRef(c),
    J = N.useRef(l);
  ((X.current = c), (J.current = l));
  const O = N.useRef(d);
  ((O.current = d),
    N.useEffect(() => {
      if (!p) return;
      const G = fn(window.location.hostname),
        se = X.current ?? Ph(G),
        ke = (_) => (J.current ? J.current(_) : window.location.assign(_));
      let ie = !1,
        Ae = !1,
        R = null,
        B = !1,
        re = null,
        pe = !1,
        de = 0,
        te = null;
      function Ce(_) {
        ((re = _),
          S(_),
          _.live && _.free && _.finished
            ? qh(pa) || (ld(pa, !0), T(!0))
            : (ld(pa, !1), T(!1)));
      }
      function he() {
        (R !== null && window.clearTimeout(R), (R = null), k(!1));
      }
      async function be() {
        if (!(Ae || ie || B || document.visibilityState === "hidden")) {
          Ae = !0;
          try {
            const _ = await se.directive();
            if (ie) return;
            if (!_.ok) {
              Date.now() - de >= Hh && (he(), Ce({ live: !1 }));
              return;
            }
            de = Date.now();
            const g = re,
              C = !pe;
            pe = !0;
            const Y = _.data;
            if ((Ce(Y), !Pn(Y))) {
              he();
              return;
            }
            const ne = ma(Y.step, G, O.current);
            if (ha(Y.step, ne, window.location.href, te)) {
              (te?.stepId !== Y.step.id &&
                (te = {
                  stepId: Y.step.id,
                  pathname: window.location.pathname,
                }),
                he());
              return;
            }
            if (R !== null) return;
            if (!(!C && !(Pn(g) && g.step.id === Y.step.id))) {
              Fe();
              return;
            }
            (k(!0), (R = window.setTimeout(() => void Fe(), od)));
          } finally {
            Ae = !1;
          }
        }
      }
      async function Fe() {
        ((B = !0), await za());
        const _ = await se.directive();
        if (ie) return;
        const g = _.ok ? _.data : re;
        _.ok && ((de = Date.now()), Ce(_.data));
        const C = Pn(g) ? ma(g.step, G, O.current) : null;
        if (!Pn(g) || !C || ha(g.step, C, window.location.href, te)) {
          ((B = !1), (R = null), k(!1));
          return;
        }
        ke(C);
      }
      async function Me(_) {
        const g = _.detail;
        if (
          ie ||
          B ||
          !g ||
          typeof g != "object" ||
          typeof g.live != "boolean" ||
          ((de = Date.now()), (pe = !0), he(), Ce(g), !Pn(g))
        )
          return;
        const C = ma(g.step, G, O.current);
        if (ha(g.step, C, window.location.href, te)) {
          te?.stepId !== g.step.id &&
            (te = { stepId: g.step.id, pathname: window.location.pathname });
          return;
        }
        ((B = !0), D(!0), await za(), !ie && ke(C));
      }
      const ye = (_) => void Me(_);
      (window.addEventListener(id, ye), be());
      const M = window.setInterval(() => void be(), jh),
        H = () => void be();
      return (
        document.addEventListener("visibilitychange", H),
        window.addEventListener("popstate", H),
        () => {
          ((ie = !0),
            window.clearInterval(M),
            R !== null && window.clearTimeout(R),
            document.removeEventListener("visibilitychange", H),
            window.removeEventListener("popstate", H),
            window.removeEventListener(id, ye));
        }
      );
    }, [p]));
  const W = p && Pn(y);
  return (
    N.useEffect(() => {
      if (W)
        return (
          document.documentElement.setAttribute(vt, ""),
          () => document.documentElement.removeAttribute(vt)
        );
    }, [W]),
    N.useEffect(() => {
      if (!V) return;
      const G = window.setTimeout(() => T(!1), od);
      return () => window.clearTimeout(G);
    }, [V]),
    p
      ? a.jsxs(a.Fragment, {
          children: [
            W && Pn(y)
              ? a.jsxs(a.Fragment, {
                  children: [
                    a.jsx("style", { children: Qh }),
                    a.jsxs("div", {
                      style: Zh,
                      "data-room-step-bar": "",
                      children: [
                        a.jsx("strong", { children: Kh(y) }),
                        a.jsx("span", { children: Gh(y.step) }),
                      ],
                    }),
                  ],
                })
              : null,
            b
              ? a.jsx("div", {
                  role: "status",
                  "aria-live": "assertive",
                  style: _a,
                  "data-room-move-notice": "",
                  children: $h,
                })
              : null,
            K && !b
              ? a.jsx("div", {
                  role: "status",
                  "aria-live": "polite",
                  style: _a,
                  "data-room-next-step": "",
                  children: Bh,
                })
              : null,
            V && !b && !K
              ? a.jsx("button", {
                  type: "button",
                  role: "status",
                  "aria-live": "polite",
                  style: Yh,
                  onClick: () => T(!1),
                  "data-room-finished-notice": "",
                  children: Wh,
                })
              : null,
          ],
        })
      : null
  );
}
const Ta = "cs_reduce_motion",
  Ra = "data-reduce-motion",
  Jh = 3600 * 24 * 365;
function eg(s) {
  return s === "comp.school" || s.endsWith(".comp.school")
    ? "; Domain=.comp.school"
    : "";
}
function tg(s = typeof document > "u" ? "" : document.cookie) {
  return s.split(";").some((c) => c.trim() === `${Ta}=1`);
}
function ng(s, c) {
  const l = eg(c);
  return s
    ? `${Ta}=1; Path=/; Max-Age=${Jh}; SameSite=Lax${l}`
    : `${Ta}=; Path=/; Max-Age=0; SameSite=Lax${l}`;
}
function Kd(s) {
  typeof document > "u" ||
    (s
      ? document.documentElement.setAttribute(Ra, "true")
      : document.documentElement.removeAttribute(Ra));
}
function rg(s) {
  typeof document > "u" ||
    ((document.cookie = ng(s, window.location.hostname)), Kd(s));
}
function og() {
  return (
    typeof document < "u" &&
    document.documentElement.getAttribute(Ra) === "true"
  );
}
Kd(tg());
const Gd = "Accessibility";
function Qd() {
  return a.jsxs("svg", {
    "aria-hidden": "true",
    fill: "none",
    height: "16",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24",
    width: "16",
    children: [
      a.jsx("circle", { cx: "12", cy: "5", r: "1" }),
      a.jsx("path", { d: "m9 20 3-6 3 6M6 8l6 2 6-2M12 10v4" }),
    ],
  });
}
function ig({ style: s, tone: c = "light" }) {
  const [l, d] = N.useState(og),
    p = c === "dark",
    y = p ? "rgb(var(--slate-200, 226 232 240))" : "#334155",
    S = l
      ? p
        ? "rgb(var(--slate-50, 248 250 252))"
        : "#0f172a"
      : p
        ? "rgb(var(--slate-600, 71 85 105))"
        : "#cbd5e1",
    b = l && p ? "rgb(var(--slate-900, 15 23 42))" : "#ffffff";
  return a.jsxs("button", {
    "aria-checked": l,
    "data-profile-reduce-motion": !0,
    onClick: () => {
      (rg(!l), d(!l));
    },
    role: "switch",
    style: {
      alignItems: "center",
      background: "transparent",
      border: 0,
      borderRadius: "0.5rem",
      color: y,
      cursor: "pointer",
      display: "flex",
      fontFamily: "inherit",
      fontSize: "0.875rem",
      fontWeight: 650,
      gap: "0.5rem",
      minHeight: "2.25rem",
      padding: "0.5rem",
      textAlign: "left",
      width: "100%",
      ...s,
    },
    type: "button",
    children: [
      a.jsxs("svg", {
        "aria-hidden": "true",
        fill: "none",
        height: "16",
        viewBox: "0 0 24 24",
        width: "16",
        children: [
          a.jsx("path", {
            d: "M3 12h4M17 12h4M12 3v4M12 17v4",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "1.8",
          }),
          a.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "3",
            stroke: "currentColor",
            strokeWidth: "1.8",
          }),
        ],
      }),
      a.jsx("span", { style: { flex: 1 }, children: "Reduce motion" }),
      a.jsx("span", {
        "aria-hidden": "true",
        style: {
          background: S,
          borderRadius: "9999px",
          display: "inline-flex",
          height: "1.125rem",
          padding: "0.125rem",
          transition: "background 120ms",
          width: "2rem",
        },
        children: a.jsx("span", {
          style: {
            background: b,
            borderRadius: "9999px",
            height: "0.875rem",
            transform: l ? "translateX(0.875rem)" : void 0,
            transition: "transform 120ms",
            width: "0.875rem",
          },
        }),
      }),
    ],
  });
}
function sg({ dialogRef: s, tone: c = "dark" }) {
  const l = N.useId(),
    d = c === "dark",
    p = d ? "rgb(var(--slate-50, 248 250 252))" : "#0f172a",
    y = d ? "rgb(var(--slate-700, 51 65 85))" : "#e2e8f0",
    S = d ? "rgb(var(--slate-900, 15 23 42))" : "#ffffff",
    b = d ? "rgb(var(--slate-800, 30 41 59))" : "#f1f5f9";
  return a.jsxs("dialog", {
    "aria-labelledby": l,
    "data-comp-school-accessibility-dialog": !0,
    onClick: (k) => {
      k.target === k.currentTarget && k.currentTarget.close();
    },
    ref: s,
    style: {
      background: S,
      border: `1px solid ${y}`,
      borderRadius: "1rem",
      boxShadow: "0 25px 50px -12px rgb(var(--slate-950, 2 6 23) / 0.5)",
      color: p,
      fontFamily: "inherit",
      margin: "auto",
      maxWidth: "min(92vw, 24rem)",
      padding: 0,
      textAlign: "left",
      width: "100%",
    },
    children: [
      a.jsx("style", {
        children:
          "[data-comp-school-accessibility-dialog]::backdrop{background:rgb(var(--slate-950, 2 6 23) / 0.7)}",
      }),
      a.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "0.875rem",
          padding: "1.25rem",
        },
        children: [
          a.jsxs("h2", {
            id: l,
            style: {
              alignItems: "center",
              display: "flex",
              fontSize: "1.125rem",
              fontWeight: 800,
              gap: "0.5rem",
              margin: 0,
            },
            children: [a.jsx(Qd, {}), Gd],
          }),
          a.jsx(ig, {
            style: {
              background: b,
              borderRadius: "0.625rem",
              minHeight: "2.75rem",
              padding: "0.625rem 0.75rem",
            },
            tone: c,
          }),
          a.jsx("form", {
            method: "dialog",
            style: { display: "flex", justifyContent: "flex-end", margin: 0 },
            children: a.jsx("button", {
              style: {
                background: d
                  ? "rgb(var(--slate-200, 226 232 240))"
                  : "#0f172a",
                border: 0,
                borderRadius: "0.625rem",
                color: d ? "rgb(var(--slate-900, 15 23 42))" : "#ffffff",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "0.875rem",
                fontWeight: 700,
                minHeight: "2.5rem",
                padding: "0.5rem 1rem",
              },
              type: "submit",
              children: "Close",
            }),
          }),
        ],
      }),
    ],
  });
}
const ag = "Send feedback",
  lg = "https://forms.cloud.microsoft/e/LdA5fPwYt1",
  ud = 64,
  cd = { x: 9, y: 12, width: 46, height: 44, rx: 13 },
  le = "#1f2937",
  Ue = "#ffffff",
  Re = 33,
  Bt = 24,
  Ht = 40,
  dd = new Set(["shell"]);
function ci(s) {
  return s.detail || s.shade;
}
function ug(s) {
  const { shade: c, accent: l } = s,
    d = ci(s);
  switch (s.ears) {
    case "pointed":
      return a.jsxs("g", {
        children: [
          a.jsx("path", { d: "M11 26 17 3 30 17Z", fill: c }),
          a.jsx("path", { d: "M53 26 47 3 34 17Z", fill: c }),
          a.jsx("path", { d: "M16.5 22 19 9.5 26 17Z", fill: l }),
          a.jsx("path", { d: "M47.5 22 45 9.5 38 17Z", fill: l }),
        ],
      });
    case "round":
      return a.jsxs("g", {
        children: [
          a.jsx("circle", { cx: "17", cy: "14", r: "8.5", fill: c }),
          a.jsx("circle", { cx: "47", cy: "14", r: "8.5", fill: c }),
          a.jsx("circle", { cx: "17", cy: "14", r: "4", fill: l }),
          a.jsx("circle", { cx: "47", cy: "14", r: "4", fill: l }),
        ],
      });
    case "tall":
      return a.jsxs("g", {
        children: [
          a.jsxs("g", {
            transform: "rotate(-9 20.5 9)",
            children: [
              a.jsx("rect", {
                x: "15",
                y: "-5",
                width: "11",
                height: "27",
                rx: "5.5",
                fill: c,
              }),
              a.jsx("rect", {
                x: "18",
                y: "0",
                width: "5",
                height: "18",
                rx: "2.5",
                fill: l,
              }),
            ],
          }),
          a.jsxs("g", {
            transform: "rotate(9 43.5 9)",
            children: [
              a.jsx("rect", {
                x: "38",
                y: "-5",
                width: "11",
                height: "27",
                rx: "5.5",
                fill: c,
              }),
              a.jsx("rect", {
                x: "41",
                y: "0",
                width: "5",
                height: "18",
                rx: "2.5",
                fill: l,
              }),
            ],
          }),
        ],
      });
    case "floppy":
      return a.jsxs("g", {
        fill: c,
        children: [
          a.jsx("path", { d: "M15 16C5 18 3 34 9 41c5 4 9-2 9-11Z" }),
          a.jsx("path", { d: "M49 16c10 2 12 18 6 25-5 4-9-2-9-11Z" }),
        ],
      });
    case "tuft":
      return a.jsxs("g", {
        fill: c,
        children: [
          a.jsx("path", { d: "M12 19 15.5 5 24 15.5Z" }),
          a.jsx("path", { d: "M52 19 48.5 5 40 15.5Z" }),
        ],
      });
    case "horns":
      return a.jsxs("g", {
        fill: d,
        children: [
          a.jsx("path", {
            d: "M17.5 13C10 11 6 5 10.5 1.5c2.5 3.5 6.5 6.5 10.5 8.5Z",
          }),
          a.jsx("path", {
            d: "M46.5 13C54 11 58 5 53.5 1.5c-2.5 3.5-6.5 6.5-10.5 8.5Z",
          }),
        ],
      });
    case "antlers":
      return a.jsxs("g", {
        stroke: d,
        strokeWidth: "3",
        strokeLinecap: "round",
        fill: "none",
        children: [
          a.jsx("path", { d: "M21 14 16 3" }),
          a.jsx("path", { d: "M17.6 8 10 5" }),
          a.jsx("path", { d: "M43 14 48 3" }),
          a.jsx("path", { d: "M46.4 8 54 5" }),
        ],
      });
    case "flap":
      return a.jsxs("g", {
        children: [
          a.jsx("ellipse", { cx: "10", cy: "32", rx: "10", ry: "15", fill: c }),
          a.jsx("ellipse", { cx: "54", cy: "32", rx: "10", ry: "15", fill: c }),
          a.jsx("ellipse", { cx: "11", cy: "32", rx: "5", ry: "9", fill: l }),
          a.jsx("ellipse", { cx: "53", cy: "32", rx: "5", ry: "9", fill: l }),
        ],
      });
    case "spikes":
      return a.jsx("path", {
        d: "M8 22 13 3 20 18 26 1 32 17 38 1 44 18 51 3 56 22Z",
        fill: c,
      });
    case "crest":
      return a.jsxs("g", {
        fill: d,
        children: [
          a.jsx("circle", { cx: "25", cy: "10", r: "5" }),
          a.jsx("circle", { cx: "32", cy: "5.5", r: "5.5" }),
          a.jsx("circle", { cx: "39", cy: "10", r: "5" }),
        ],
      });
    case "fins":
      return a.jsxs("g", {
        fill: c,
        children: [
          a.jsx("path", { d: "M12 26 1 19 4 37Z" }),
          a.jsx("path", { d: "M52 26 63 19 60 37Z" }),
          a.jsx("path", { d: "M25 13 32 1 39 13Z" }),
        ],
      });
    case "antennae":
      return a.jsxs("g", {
        children: [
          a.jsxs("g", {
            stroke: c,
            strokeWidth: "2.6",
            strokeLinecap: "round",
            fill: "none",
            children: [
              a.jsx("path", { d: "M23 14C20 7 17 4 13.5 3" }),
              a.jsx("path", { d: "M41 14c3-7 6-10 9.5-11" }),
            ],
          }),
          a.jsx("circle", { cx: "12.5", cy: "3", r: "3", fill: c }),
          a.jsx("circle", { cx: "51.5", cy: "3", r: "3", fill: c }),
        ],
      });
    case "mane":
      return a.jsx("g", {
        fill: d,
        children: Array.from({ length: 12 }, (p, y) => {
          const S = (y / 12) * Math.PI * 2;
          return a.jsx(
            "circle",
            { cx: 32 + Math.cos(S) * 25, cy: 34 + Math.sin(S) * 23, r: "8.5" },
            y,
          );
        }),
      });
    case "wool":
      return a.jsxs("g", {
        fill: l,
        children: [
          a.jsx("circle", { cx: "15", cy: "17", r: "8" }),
          a.jsx("circle", { cx: "26", cy: "10", r: "9" }),
          a.jsx("circle", { cx: "38", cy: "10", r: "9" }),
          a.jsx("circle", { cx: "49", cy: "17", r: "8" }),
        ],
      });
    case "wings":
      return a.jsxs("g", {
        fill: d,
        children: [
          a.jsx("path", { d: "M13 22C-1 16 0 42 12 46Z" }),
          a.jsx("path", { d: "M51 22c14-6 13 20 1 24Z" }),
        ],
      });
    case "tentacles":
      return a.jsxs("g", {
        fill: c,
        children: [
          a.jsx("path", { d: "M12 44c-6 4-8 12-6 18 4 1 7-5 9-11Z" }),
          a.jsx("path", { d: "M52 44c6 4 8 12 6 18-4 1-7-5-9-11Z" }),
          a.jsx("path", { d: "M25 50c-3 6-3 12-1 14 3 0 5-6 5-12Z" }),
          a.jsx("path", { d: "M39 50c3 6 3 12 1 14-3 0-5-6-5-12Z" }),
        ],
      });
    case "dome":
      return a.jsx("path", { d: "M11 22a21 21 0 0 1 42 0Z", fill: c });
    case "frill":
      return a.jsxs("g", {
        children: [
          a.jsx("path", { d: "M1 42C1 16 14 1 32 1s31 15 31 41Z", fill: c }),
          a.jsx("g", {
            fill: l,
            children: Array.from({ length: 9 }, (p, y) => {
              const S = Math.PI + (y + 0.5) * (Math.PI / 9);
              return a.jsx(
                "circle",
                {
                  cx: 32 + Math.cos(S) * 27,
                  cy: 40 + Math.sin(S) * 33,
                  r: "3.2",
                },
                y,
              );
            }),
          }),
        ],
      });
    case "rays":
      return a.jsx("g", {
        fill: d,
        children: Array.from({ length: 12 }, (p, y) => {
          const S = (y / 12) * 360;
          return a.jsx(
            "path",
            { d: "M32 2 27 12h10Z", transform: `rotate(${S} 32 34)` },
            y,
          );
        }),
      });
    case "points":
      return a.jsxs("g", {
        fill: c,
        children: [
          a.jsx("path", { d: "M32 0 24 16h16Z" }),
          a.jsx("path", { d: "M6 14 12 30l12-9Z" }),
          a.jsx("path", { d: "M58 14 52 30l-12-9Z" }),
          a.jsx("path", { d: "M8 56 4 42l14 4Z" }),
          a.jsx("path", { d: "M56 56l4-14-14 4Z" }),
        ],
      });
    case "none":
    default:
      return null;
  }
}
function cg(s) {
  const { base: c, shade: l } = s,
    d = ci(s);
  switch (s.eyes) {
    case "round":
      return a.jsxs("g", {
        children: [
          a.jsx("circle", { cx: Bt, cy: Re, r: "6.5", fill: Ue }),
          a.jsx("circle", { cx: Ht, cy: Re, r: "6.5", fill: Ue }),
          a.jsx("circle", { cx: Bt, cy: Re, r: "3.4", fill: le }),
          a.jsx("circle", { cx: Ht, cy: Re, r: "3.4", fill: le }),
          a.jsx("circle", { cx: Bt + 1.4, cy: Re - 1.6, r: "1.3", fill: Ue }),
          a.jsx("circle", { cx: Ht + 1.4, cy: Re - 1.6, r: "1.3", fill: Ue }),
        ],
      });
    case "big":
      return a.jsxs("g", {
        children: [
          a.jsx("circle", { cx: "23", cy: "32", r: "9.5", fill: Ue }),
          a.jsx("circle", { cx: "41", cy: "32", r: "9.5", fill: Ue }),
          a.jsx("circle", { cx: "23", cy: "32", r: "5", fill: le }),
          a.jsx("circle", { cx: "41", cy: "32", r: "5", fill: le }),
          a.jsx("circle", { cx: "24.6", cy: "30.2", r: "1.9", fill: Ue }),
          a.jsx("circle", { cx: "42.6", cy: "30.2", r: "1.9", fill: Ue }),
        ],
      });
    case "bulge":
      return a.jsxs("g", {
        children: [
          a.jsx("circle", {
            cx: "20",
            cy: "14",
            r: "9",
            fill: c,
            stroke: l,
            strokeWidth: "1.6",
          }),
          a.jsx("circle", {
            cx: "44",
            cy: "14",
            r: "9",
            fill: c,
            stroke: l,
            strokeWidth: "1.6",
          }),
          a.jsx("circle", { cx: "20", cy: "13.5", r: "4.8", fill: Ue }),
          a.jsx("circle", { cx: "44", cy: "13.5", r: "4.8", fill: Ue }),
          a.jsx("circle", { cx: "20", cy: "13.5", r: "2.6", fill: le }),
          a.jsx("circle", { cx: "44", cy: "13.5", r: "2.6", fill: le }),
        ],
      });
    case "slit":
      return a.jsxs("g", {
        children: [
          a.jsx("ellipse", { cx: Bt, cy: Re, rx: "5.4", ry: "6", fill: d }),
          a.jsx("ellipse", { cx: Ht, cy: Re, rx: "5.4", ry: "6", fill: d }),
          a.jsx("ellipse", { cx: Bt, cy: Re, rx: "1.8", ry: "5", fill: le }),
          a.jsx("ellipse", { cx: Ht, cy: Re, rx: "1.8", ry: "5", fill: le }),
        ],
      });
    case "sleepy":
      return a.jsxs("g", {
        stroke: le,
        strokeWidth: "3",
        strokeLinecap: "round",
        fill: "none",
        children: [
          a.jsx("path", { d: "M18.5 31.5q5.5 5 11 0" }),
          a.jsx("path", { d: "M34.5 31.5q5.5 5 11 0" }),
        ],
      });
    case "wide":
      return a.jsxs("g", {
        children: [
          a.jsx("circle", { cx: "20", cy: Re, r: "3.8", fill: le }),
          a.jsx("circle", { cx: "44", cy: Re, r: "3.8", fill: le }),
          a.jsx("circle", { cx: "21.3", cy: Re - 1.4, r: "1.3", fill: Ue }),
          a.jsx("circle", { cx: "45.3", cy: Re - 1.4, r: "1.3", fill: Ue }),
        ],
      });
    case "turret":
      return a.jsxs("g", {
        children: [
          a.jsx("circle", { cx: "21", cy: "31", r: "7.5", fill: l }),
          a.jsx("circle", { cx: "43", cy: "31", r: "7.5", fill: l }),
          a.jsx("circle", { cx: "21", cy: "31", r: "3.6", fill: d }),
          a.jsx("circle", { cx: "43", cy: "31", r: "3.6", fill: d }),
          a.jsx("circle", { cx: "21", cy: "31", r: "1.7", fill: le }),
          a.jsx("circle", { cx: "43", cy: "31", r: "1.7", fill: le }),
        ],
      });
    case "compound":
      return a.jsxs("g", {
        children: [
          a.jsx("ellipse", {
            cx: "22",
            cy: "31",
            rx: "7.5",
            ry: "9",
            fill: le,
            transform: "rotate(-12 22 31)",
          }),
          a.jsx("ellipse", {
            cx: "42",
            cy: "31",
            rx: "7.5",
            ry: "9",
            fill: le,
            transform: "rotate(12 42 31)",
          }),
          a.jsx("ellipse", {
            cx: "20.5",
            cy: "28",
            rx: "2.2",
            ry: "3",
            fill: Ue,
            opacity: "0.75",
          }),
          a.jsx("ellipse", {
            cx: "43.5",
            cy: "28",
            rx: "2.2",
            ry: "3",
            fill: Ue,
            opacity: "0.75",
          }),
        ],
      });
    case "stalk":
      return a.jsxs("g", {
        children: [
          a.jsxs("g", {
            stroke: l,
            strokeWidth: "2.8",
            strokeLinecap: "round",
            fill: "none",
            children: [
              a.jsx("path", { d: "M23 16 19.5 5" }),
              a.jsx("path", { d: "M41 16 44.5 5" }),
            ],
          }),
          a.jsx("circle", {
            cx: "19",
            cy: "4",
            r: "3.8",
            fill: Ue,
            stroke: l,
            strokeWidth: "1.2",
          }),
          a.jsx("circle", {
            cx: "45",
            cy: "4",
            r: "3.8",
            fill: Ue,
            stroke: l,
            strokeWidth: "1.2",
          }),
          a.jsx("circle", { cx: "19", cy: "4", r: "1.8", fill: le }),
          a.jsx("circle", { cx: "45", cy: "4", r: "1.8", fill: le }),
        ],
      });
    case "visor":
      return a.jsxs("g", {
        children: [
          a.jsx("rect", {
            x: "14",
            y: "26.5",
            width: "36",
            height: "13",
            rx: "6.5",
            fill: le,
          }),
          a.jsx("circle", { cx: Bt, cy: Re, r: "3.2", fill: d }),
          a.jsx("circle", { cx: Ht, cy: Re, r: "3.2", fill: d }),
        ],
      });
    case "dot":
    default:
      return a.jsxs("g", {
        children: [
          a.jsx("circle", { cx: Bt, cy: Re, r: "4.2", fill: le }),
          a.jsx("circle", { cx: Ht, cy: Re, r: "4.2", fill: le }),
          a.jsx("circle", { cx: Bt + 1.4, cy: Re - 1.5, r: "1.4", fill: Ue }),
          a.jsx("circle", { cx: Ht + 1.4, cy: Re - 1.5, r: "1.4", fill: Ue }),
        ],
      });
  }
}
function fd() {
  return a.jsxs("g", {
    children: [
      a.jsx("path", { d: "M27.5 39q4.5-3.4 9 0Q32 44.6 27.5 39Z", fill: le }),
      a.jsx("path", {
        d: "M32 43.5v2.4M32 45.9q-2.4 2.6-4.6.4M32 45.9q2.4 2.6 4.6.4",
        stroke: le,
        strokeWidth: "2",
        strokeLinecap: "round",
        fill: "none",
      }),
    ],
  });
}
function dg(s) {
  const { accent: c, shade: l } = s,
    d = ci(s);
  switch (s.muzzle) {
    case "nose":
      return fd();
    case "snout":
      return a.jsxs("g", {
        children: [
          a.jsx("ellipse", { cx: "32", cy: "43", rx: "13", ry: "9", fill: c }),
          fd(),
        ],
      });
    case "beak":
      return a.jsxs("g", {
        children: [
          a.jsx("path", { d: "M23 38h18l-9 11Z", fill: d }),
          a.jsx("path", {
            d: "M23 38h18",
            stroke: le,
            strokeWidth: "1.4",
            opacity: "0.35",
          }),
        ],
      });
    case "bill":
      return a.jsxs("g", {
        children: [
          a.jsx("rect", {
            x: "19",
            y: "37.5",
            width: "26",
            height: "11.5",
            rx: "5.75",
            fill: d,
          }),
          a.jsx("circle", { cx: "26", cy: "41.5", r: "1.3", fill: le }),
          a.jsx("circle", { cx: "38", cy: "41.5", r: "1.3", fill: le }),
        ],
      });
    case "pig":
      return a.jsxs("g", {
        children: [
          a.jsx("ellipse", { cx: "32", cy: "43", rx: "11", ry: "8", fill: c }),
          a.jsx("ellipse", {
            cx: "28",
            cy: "43",
            rx: "2.2",
            ry: "3",
            fill: le,
          }),
          a.jsx("ellipse", {
            cx: "36",
            cy: "43",
            rx: "2.2",
            ry: "3",
            fill: le,
          }),
        ],
      });
    case "wide":
      return a.jsx("path", {
        d: "M16 41q16 11 32 0",
        stroke: le,
        strokeWidth: "3",
        strokeLinecap: "round",
        fill: "none",
      });
    case "tusks":
      return a.jsxs("g", {
        children: [
          a.jsx("ellipse", {
            cx: "32",
            cy: "42",
            rx: "13",
            ry: "8.5",
            fill: c,
          }),
          a.jsx("ellipse", {
            cx: "32",
            cy: "38.5",
            rx: "3.4",
            ry: "2.6",
            fill: le,
          }),
          a.jsx("path", {
            d: "M27 45q-1.6 8-3.6 12M37 45q1.6 8 3.6 12",
            stroke: "#f8fafc",
            strokeWidth: "3.6",
            strokeLinecap: "round",
            fill: "none",
          }),
        ],
      });
    case "trunk":
      return a.jsx("path", {
        d: "M32 36q0 10-3 14t2 10",
        stroke: l,
        strokeWidth: "7.5",
        strokeLinecap: "round",
        fill: "none",
      });
    case "mandibles":
      return a.jsxs("g", {
        stroke: le,
        strokeWidth: "2.6",
        strokeLinecap: "round",
        fill: "none",
        children: [
          a.jsx("path", { d: "M26 43q6 6 12 0" }),
          a.jsx("path", { d: "M24.5 41q-3.5 4.5 0 8" }),
          a.jsx("path", { d: "M39.5 41q3.5 4.5 0 8" }),
        ],
      });
    case "grill":
      return a.jsxs("g", {
        children: [
          a.jsx("rect", {
            x: "23",
            y: "41",
            width: "18",
            height: "8",
            rx: "4",
            fill: le,
          }),
          a.jsx("path", {
            d: "M28 41v8M32 41v8M36 41v8",
            stroke: d,
            strokeWidth: "1.4",
            opacity: "0.8",
          }),
        ],
      });
    case "smile":
    default:
      return a.jsx("path", {
        d: "M26.5 42.5q5.5 5 11 0",
        stroke: le,
        strokeWidth: "2.8",
        strokeLinecap: "round",
        fill: "none",
      });
  }
}
function ga(s, c, l) {
  const { shade: d, accent: p } = c,
    y = ci(c);
  switch (s) {
    case "mask":
      return a.jsxs(
        "g",
        {
          clipPath: `url(#${l})`,
          fill: d,
          children: [
            a.jsx("ellipse", { cx: Bt, cy: Re - 0.5, rx: "9", ry: "8.5" }),
            a.jsx("ellipse", { cx: Ht, cy: Re - 0.5, rx: "9", ry: "8.5" }),
          ],
        },
        s,
      );
    case "stripes":
      return a.jsxs(
        "g",
        {
          clipPath: `url(#${l})`,
          stroke: d,
          strokeWidth: "3.4",
          strokeLinecap: "round",
          fill: "none",
          children: [
            a.jsx("path", { d: "M19 11q3 8-2 14" }),
            a.jsx("path", { d: "M32 10v10" }),
            a.jsx("path", { d: "M45 11q-3 8 2 14" }),
          ],
        },
        s,
      );
    case "spots":
      return a.jsxs(
        "g",
        {
          clipPath: `url(#${l})`,
          fill: d,
          opacity: "0.8",
          children: [
            a.jsx("circle", { cx: "16", cy: "24", r: "4" }),
            a.jsx("circle", { cx: "48", cy: "24", r: "4" }),
            a.jsx("circle", { cx: "14", cy: "42", r: "3.4" }),
            a.jsx("circle", { cx: "50", cy: "42", r: "3.4" }),
            a.jsx("circle", { cx: "32", cy: "18", r: "3.4" }),
          ],
        },
        s,
      );
    case "blush":
      return a.jsxs(
        "g",
        {
          clipPath: `url(#${l})`,
          fill: "#f87171",
          opacity: "0.35",
          children: [
            a.jsx("ellipse", { cx: "15", cy: "40", rx: "5.5", ry: "3.6" }),
            a.jsx("ellipse", { cx: "49", cy: "40", rx: "5.5", ry: "3.6" }),
          ],
        },
        s,
      );
    case "patch":
      return a.jsx(
        "g",
        {
          clipPath: `url(#${l})`,
          children: a.jsx("rect", {
            x: "15",
            y: "37",
            width: "34",
            height: "21",
            rx: "11",
            fill: p,
            opacity: "0.9",
          }),
        },
        s,
      );
    case "whiskers":
      return a.jsx(
        "g",
        {
          stroke: le,
          strokeWidth: "1.7",
          strokeLinecap: "round",
          opacity: "0.65",
          fill: "none",
          children: a.jsx("path", {
            d: "M18 40 6 37M18 43.5 6 44M46 40l12-3M46 43.5l12 .5",
          }),
        },
        s,
      );
    case "brows":
      return a.jsxs(
        "g",
        {
          stroke: le,
          strokeWidth: "3",
          strokeLinecap: "round",
          fill: "none",
          children: [
            a.jsx("path", { d: "M17.5 24.5 29 28.5" }),
            a.jsx("path", { d: "M46.5 24.5 35 28.5" }),
          ],
        },
        s,
      );
    case "horn":
      return a.jsxs(
        "g",
        {
          children: [
            a.jsx("path", { d: "M28 15 32-2l4 17Z", fill: y }),
            a.jsx("path", {
              d: "M29.4 10.5h5.2M30.4 6h3.2",
              stroke: le,
              strokeWidth: "1.3",
              opacity: "0.35",
            }),
          ],
        },
        s,
      );
    case "tongue":
      return a.jsx("path", { d: "M28.5 45q3.5 9 7 0Z", fill: "#f472b6" }, s);
    case "fangs":
      return a.jsxs(
        "g",
        {
          fill: Ue,
          children: [
            a.jsx("path", { d: "M26.5 42 29 48l2.5-6Z" }),
            a.jsx("path", { d: "M32.5 42 35 48l2.5-6Z" }),
          ],
        },
        s,
      );
    case "sparkle":
      return a.jsxs(
        "g",
        {
          fill: y,
          children: [
            a.jsx("path", {
              d: "M53 8 54.4 12 58 13.4 54.4 14.8 53 18.6 51.6 14.8 48 13.4 51.6 12Z",
            }),
            a.jsx("path", {
              d: "M10 44 11 47 14 48 11 49 10 52 9 49 6 48 9 47Z",
            }),
          ],
        },
        s,
      );
    case "crown":
      return a.jsxs(
        "g",
        {
          children: [
            a.jsx("path", {
              d: "M19 13 23 3l5 6 5-8 5 8 5-6 4 10Z",
              fill: "#fbbf24",
            }),
            a.jsx("circle", { cx: "32", cy: "6", r: "1.8", fill: "#fde68a" }),
          ],
        },
        s,
      );
    case "shell":
      return a.jsxs(
        "g",
        {
          children: [
            a.jsx("path", { d: "M0 61q0-27 32-27t32 27Z", fill: y }),
            a.jsxs("g", {
              fill: d,
              opacity: "0.55",
              children: [
                a.jsx("circle", { cx: "5.5", cy: "52", r: "3" }),
                a.jsx("circle", { cx: "58.5", cy: "52", r: "3" }),
                a.jsx("circle", { cx: "20", cy: "59", r: "3" }),
                a.jsx("circle", { cx: "44", cy: "59", r: "3" }),
                a.jsx("circle", { cx: "32", cy: "60", r: "3" }),
              ],
            }),
          ],
        },
        s,
      );
    case "stitches":
      return a.jsxs(
        "g",
        {
          clipPath: `url(#${l})`,
          stroke: d,
          strokeWidth: "1.8",
          strokeLinecap: "round",
          children: [
            a.jsx("path", { d: "M45 12v14" }),
            a.jsx("path", { d: "M41.5 16h7M41.5 21h7" }),
            a.jsx("path", { d: "M14 44h9" }),
            a.jsx("path", { d: "M17 41.5v5M21 41.5v5" }),
          ],
        },
        s,
      );
    case "bolt":
      return a.jsx(
        "path",
        { d: "M49 2 39 18h6l-8 14 20-20h-7l6-10Z", fill: y },
        s,
      );
    case "bandage":
      return a.jsxs(
        "g",
        {
          clipPath: `url(#${l})`,
          fill: p,
          opacity: "0.9",
          children: [
            a.jsx("path", { d: "M2 20 62 12v7L2 27Z" }),
            a.jsx("path", { d: "M2 44 62 36v7L2 51Z" }),
            a.jsx("path", { d: "M6 56 58 48v6H6Z" }),
          ],
        },
        s,
      );
    case "visorGlow":
      return a.jsx(
        "g",
        {
          opacity: "0.75",
          children: a.jsx("path", {
            d: "M18 27q14-6 28 0",
            stroke: y,
            strokeWidth: "2",
            fill: "none",
            strokeLinecap: "round",
          }),
        },
        s,
      );
    default:
      return null;
  }
}
function fg({ features: s, idSuffix: c, className: l, title: d }) {
  const p = `cs-avatar-head-${c}`,
    y = s.marks || [],
    S = y.filter((k) => dd.has(k)),
    b = y.filter((k) => !dd.has(k));
  return a.jsxs("svg", {
    className: l,
    viewBox: `0 0 ${ud} ${ud}`,
    width: "100%",
    height: "100%",
    role: d ? "img" : "presentation",
    "aria-label": d,
    "aria-hidden": d ? void 0 : !0,
    focusable: "false",
    children: [
      a.jsx("defs", {
        children: a.jsx("clipPath", {
          id: p,
          children: a.jsx("rect", { ...cd }),
        }),
      }),
      S.map((k) => ga(k, s, p)),
      ug(s),
      a.jsx("rect", { ...cd, fill: s.base }),
      b
        .filter(
          (k) =>
            k === "mask" ||
            k === "stripes" ||
            k === "spots" ||
            k === "patch" ||
            k === "bandage",
        )
        .map((k) => ga(k, s, p)),
      dg(s),
      cg(s),
      b
        .filter(
          (k) =>
            !(
              k === "mask" ||
              k === "stripes" ||
              k === "spots" ||
              k === "patch" ||
              k === "bandage"
            ),
        )
        .map((k) => ga(k, s, p)),
    ],
  });
}
const pg = {
  rust: ["#ef8043", "#cd5f27", "#ffe0c6"],
  amber: ["#f0993f", "#cb7220", "#ffe8cd"],
  brown: ["#a97551", "#7d5133", "#f2ddc8"],
  cocoa: ["#8b5e3c", "#5d3c23", "#ebd6c1"],
  sand: ["#e6c48b", "#c39a55", "#fdf1da"],
  cream: ["#f3e3c3", "#d6b988", "#fff8ea"],
  grey: ["#9aa8bb", "#6b7c93", "#e6edf5"],
  slate: ["#7c8ba1", "#4f5d74", "#dde5ef"],
  charcoal: ["#4d5765", "#2e3641", "#c6cedb"],
  snow: ["#eef3f9", "#c0cbd9", "#ffffff"],
  pink: ["#f5a6ba", "#da7c92", "#ffe4ec"],
  rose: ["#ef8ba2", "#cd6079", "#ffdde5"],
  green: ["#5fba70", "#3d9350", "#d9f2dd"],
  moss: ["#7fbc5a", "#5d9639", "#e4f5d5"],
  lime: ["#95cf57", "#6da733", "#eafada"],
  teal: ["#42b5a8", "#2a8a80", "#d3f1ed"],
  blue: ["#5c9cd6", "#3c74a7", "#dceaf8"],
  sky: ["#7cc4ef", "#4d9acb", "#e3f3fd"],
  navy: ["#41628f", "#2b4568", "#d0dcec"],
  yellow: ["#f3c552", "#d09c2c", "#fff3d0"],
  gold: ["#e9aa3c", "#c1811d", "#ffeecb"],
  purple: ["#a68bf5", "#7c5cef", "#e9e3ff"],
  violet: ["#8a6fd4", "#63499f", "#e0d8f6"],
  red: ["#e15c4f", "#b73e33", "#fbdad5"],
  stone: ["#98a0a8", "#6a737c", "#dfe4e8"],
};
function E(s, c, l, d, p) {
  const [y, S, b] = pg[d];
  return { id: s, label: c, group: l, base: y, shade: S, accent: b, ...p };
}
const mg = Object.freeze([
    E("fox", "Fox", "woodland", "rust", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["whiskers"],
    }),
    E("owl", "Owl", "woodland", "cocoa", {
      ears: "tuft",
      eyes: "big",
      muzzle: "beak",
      detail: "#f3c552",
    }),
    E("bear", "Bear", "woodland", "brown", {
      ears: "round",
      eyes: "dot",
      muzzle: "snout",
    }),
    E("panda", "Panda", "woodland", "snow", {
      ears: "round",
      eyes: "dot",
      muzzle: "snout",
      marks: ["mask"],
      shade: "#39414d",
    }),
    E("wolf", "Wolf", "woodland", "slate", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
    }),
    E("badger", "Badger", "woodland", "snow", {
      ears: "round",
      eyes: "dot",
      muzzle: "snout",
      marks: ["mask"],
      shade: "#3b4553",
    }),
    E("hedgehog", "Hedgehog", "woodland", "sand", {
      ears: "spikes",
      eyes: "dot",
      muzzle: "nose",
    }),
    E("squirrel", "Squirrel", "woodland", "amber", {
      ears: "tuft",
      eyes: "round",
      muzzle: "nose",
      marks: ["patch"],
    }),
    E("deer", "Deer", "woodland", "sand", {
      ears: "antlers",
      eyes: "round",
      muzzle: "snout",
      marks: ["spots"],
      detail: "#8b5e3c",
    }),
    E("raccoon", "Raccoon", "woodland", "grey", {
      ears: "round",
      eyes: "dot",
      muzzle: "snout",
      marks: ["mask"],
      shade: "#3e4756",
    }),
    E("cat", "Cat", "pets", "amber", {
      ears: "pointed",
      eyes: "slit",
      muzzle: "nose",
      marks: ["stripes", "whiskers"],
      detail: "#5fba70",
    }),
    E("dog", "Dog", "pets", "brown", {
      ears: "floppy",
      eyes: "round",
      muzzle: "snout",
    }),
    E("rabbit", "Rabbit", "pets", "cream", {
      ears: "tall",
      eyes: "round",
      muzzle: "nose",
      marks: ["blush"],
    }),
    E("hamster", "Hamster", "pets", "sand", {
      ears: "round",
      eyes: "dot",
      muzzle: "nose",
      marks: ["patch", "blush"],
    }),
    E("guineapig", "Guinea pig", "pets", "cocoa", {
      ears: "round",
      eyes: "dot",
      muzzle: "nose",
      marks: ["patch"],
    }),
    E("ferret", "Ferret", "pets", "cream", {
      ears: "round",
      eyes: "dot",
      muzzle: "nose",
      marks: ["mask"],
      shade: "#a97551",
    }),
    E("budgie", "Budgie", "pets", "lime", {
      ears: "crest",
      eyes: "dot",
      muzzle: "beak",
      marks: ["blush"],
      detail: "#f3c552",
    }),
    E("goldfish", "Goldfish", "pets", "gold", {
      ears: "fins",
      eyes: "wide",
      muzzle: "smile",
    }),
    E("pony", "Pony", "pets", "sand", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["patch"],
    }),
    E("mouse", "Mouse", "pets", "grey", {
      ears: "round",
      eyes: "dot",
      muzzle: "nose",
      marks: ["whiskers", "blush"],
    }),
    E("cow", "Cow", "farm", "snow", {
      ears: "horns",
      eyes: "round",
      muzzle: "pig",
      marks: ["spots"],
      shade: "#39414d",
      detail: "#e6c48b",
    }),
    E("pig", "Pig", "farm", "pink", {
      ears: "floppy",
      eyes: "dot",
      muzzle: "pig",
      marks: ["blush"],
    }),
    E("sheep", "Sheep", "farm", "cream", {
      ears: "wool",
      eyes: "dot",
      muzzle: "nose",
    }),
    E("goat", "Goat", "farm", "cream", {
      ears: "horns",
      eyes: "slit",
      muzzle: "nose",
      marks: ["patch"],
      detail: "#a97551",
    }),
    E("horse", "Horse", "farm", "cocoa", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["patch"],
    }),
    E("donkey", "Donkey", "farm", "grey", {
      ears: "tall",
      eyes: "sleepy",
      muzzle: "snout",
    }),
    E("chicken", "Chicken", "farm", "snow", {
      ears: "crest",
      eyes: "dot",
      muzzle: "beak",
      detail: "#e15c4f",
    }),
    E("duck", "Duck", "farm", "yellow", {
      ears: "none",
      eyes: "dot",
      muzzle: "bill",
      detail: "#f0993f",
    }),
    E("goose", "Goose", "farm", "snow", {
      ears: "none",
      eyes: "dot",
      muzzle: "bill",
      detail: "#f0993f",
    }),
    E("bull", "Bull", "farm", "charcoal", {
      ears: "horns",
      eyes: "round",
      muzzle: "pig",
      marks: ["brows"],
      detail: "#e6c48b",
    }),
    E("lion", "Lion", "savanna", "gold", {
      ears: "mane",
      eyes: "round",
      muzzle: "snout",
      marks: ["whiskers"],
      detail: "#b9762a",
    }),
    E("tiger", "Tiger", "savanna", "amber", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["stripes", "whiskers"],
      shade: "#8a4a17",
    }),
    E("elephant", "Elephant", "savanna", "grey", {
      ears: "flap",
      eyes: "dot",
      muzzle: "trunk",
    }),
    E("giraffe", "Giraffe", "savanna", "sand", {
      ears: "horns",
      eyes: "round",
      muzzle: "snout",
      marks: ["spots"],
      detail: "#8b5e3c",
    }),
    E("zebra", "Zebra", "savanna", "snow", {
      ears: "round",
      eyes: "round",
      muzzle: "snout",
      marks: ["stripes"],
      shade: "#39414d",
    }),
    E("rhino", "Rhino", "savanna", "stone", {
      ears: "round",
      eyes: "dot",
      muzzle: "pig",
      marks: ["horn"],
      detail: "#dfe4e8",
    }),
    E("hippo", "Hippo", "savanna", "violet", {
      ears: "round",
      eyes: "wide",
      muzzle: "pig",
    }),
    E("cheetah", "Cheetah", "savanna", "sand", {
      ears: "round",
      eyes: "round",
      muzzle: "nose",
      marks: ["spots", "whiskers"],
    }),
    E("meerkat", "Meerkat", "savanna", "cream", {
      ears: "round",
      eyes: "dot",
      muzzle: "nose",
      marks: ["mask"],
      shade: "#8b5e3c",
    }),
    E("monkey", "Monkey", "savanna", "cocoa", {
      ears: "round",
      eyes: "round",
      muzzle: "snout",
      marks: ["patch"],
    }),
    E("polarbear", "Polar bear", "polar", "snow", {
      ears: "round",
      eyes: "dot",
      muzzle: "snout",
    }),
    E("penguin", "Penguin", "polar", "charcoal", {
      ears: "none",
      eyes: "round",
      muzzle: "beak",
      marks: ["patch"],
      accent: "#ffffff",
      detail: "#f0993f",
    }),
    E("seal", "Seal", "polar", "slate", {
      ears: "none",
      eyes: "sleepy",
      muzzle: "nose",
      marks: ["whiskers"],
    }),
    E("arcticfox", "Arctic fox", "polar", "snow", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["whiskers"],
    }),
    E("snowleopard", "Snow leopard", "polar", "snow", {
      ears: "tuft",
      eyes: "slit",
      muzzle: "nose",
      marks: ["spots", "whiskers"],
      detail: "#5fba70",
    }),
    E("walrus", "Walrus", "polar", "brown", {
      ears: "none",
      eyes: "dot",
      muzzle: "tusks",
      marks: ["whiskers"],
    }),
    E("reindeer", "Reindeer", "polar", "cocoa", {
      ears: "antlers",
      eyes: "round",
      muzzle: "snout",
      detail: "#c39a55",
    }),
    E("husky", "Husky", "polar", "slate", {
      ears: "pointed",
      eyes: "slit",
      muzzle: "snout",
      marks: ["mask"],
      detail: "#7cc4ef",
    }),
    E("puffin", "Puffin", "polar", "charcoal", {
      ears: "none",
      eyes: "dot",
      muzzle: "beak",
      marks: ["patch"],
      accent: "#ffffff",
      detail: "#f0993f",
    }),
    E("yak", "Yak", "polar", "cocoa", {
      ears: "horns",
      eyes: "sleepy",
      muzzle: "nose",
      marks: ["patch"],
      detail: "#e6c48b",
    }),
    E("whale", "Whale", "ocean", "navy", {
      ears: "fins",
      eyes: "wide",
      muzzle: "smile",
      marks: ["patch"],
    }),
    E("dolphin", "Dolphin", "ocean", "sky", {
      ears: "fins",
      eyes: "dot",
      muzzle: "smile",
      marks: ["patch"],
    }),
    E("shark", "Shark", "ocean", "slate", {
      ears: "fins",
      eyes: "round",
      muzzle: "wide",
      marks: ["brows", "fangs"],
    }),
    E("octopus", "Octopus", "ocean", "purple", {
      ears: "tentacles",
      eyes: "round",
      muzzle: "smile",
    }),
    E("crab", "Crab", "ocean", "red", {
      ears: "none",
      eyes: "stalk",
      muzzle: "mandibles",
    }),
    E("jellyfish", "Jellyfish", "ocean", "rose", {
      ears: "tentacles",
      eyes: "dot",
      muzzle: "smile",
    }),
    E("seahorse", "Seahorse", "ocean", "yellow", {
      ears: "crest",
      eyes: "wide",
      muzzle: "beak",
      detail: "#d09c2c",
    }),
    E("pufferfish", "Pufferfish", "ocean", "amber", {
      ears: "spikes",
      eyes: "wide",
      muzzle: "smile",
    }),
    E("narwhal", "Narwhal", "ocean", "sky", {
      ears: "fins",
      eyes: "dot",
      muzzle: "smile",
      marks: ["horn"],
      detail: "#eef3f9",
    }),
    E("otter", "Otter", "ocean", "brown", {
      ears: "round",
      eyes: "round",
      muzzle: "snout",
      marks: ["whiskers"],
    }),
    E("frog", "Frog", "creatures", "green", {
      ears: "none",
      eyes: "bulge",
      muzzle: "wide",
      marks: ["tongue"],
    }),
    E("turtle", "Turtle", "creatures", "moss", {
      ears: "none",
      eyes: "round",
      muzzle: "smile",
      marks: ["shell"],
      detail: "#3f7a2a",
    }),
    E("gecko", "Gecko", "creatures", "lime", {
      ears: "none",
      eyes: "round",
      muzzle: "smile",
      marks: ["spots"],
    }),
    E("chameleon", "Chameleon", "creatures", "teal", {
      ears: "crest",
      eyes: "turret",
      muzzle: "smile",
      marks: ["spots"],
      detail: "#f3c552",
    }),
    E("snake", "Snake", "creatures", "moss", {
      ears: "none",
      eyes: "slit",
      muzzle: "smile",
      marks: ["stripes"],
      detail: "#f3c552",
    }),
    E("crocodile", "Crocodile", "creatures", "green", {
      ears: "none",
      eyes: "wide",
      muzzle: "wide",
      marks: ["brows", "fangs"],
    }),
    E("bee", "Bee", "creatures", "yellow", {
      ears: "antennae",
      eyes: "compound",
      muzzle: "mandibles",
      marks: ["stripes"],
      shade: "#39414d",
    }),
    E("ladybird", "Ladybird", "creatures", "red", {
      ears: "antennae",
      eyes: "dot",
      muzzle: "smile",
      marks: ["spots"],
      shade: "#39414d",
    }),
    E("butterfly", "Butterfly", "creatures", "purple", {
      ears: "wings",
      eyes: "compound",
      muzzle: "smile",
      marks: ["sparkle"],
      detail: "#f3c552",
    }),
    E("snail", "Snail", "creatures", "cream", {
      ears: "none",
      eyes: "stalk",
      muzzle: "smile",
      marks: ["shell"],
      detail: "#c39a55",
    }),
    E("dragon", "Dragon", "mythical", "green", {
      ears: "spikes",
      eyes: "slit",
      muzzle: "wide",
      marks: ["fangs", "brows"],
      detail: "#f3c552",
    }),
    E("unicorn", "Unicorn", "mythical", "snow", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["horn", "sparkle"],
      detail: "#a68bf5",
    }),
    E("phoenix", "Phoenix", "mythical", "red", {
      ears: "crest",
      eyes: "round",
      muzzle: "beak",
      marks: ["sparkle"],
      detail: "#f3c552",
    }),
    E("griffin", "Griffin", "mythical", "gold", {
      ears: "wings",
      eyes: "big",
      muzzle: "beak",
      marks: ["brows"],
      detail: "#c1811d",
    }),
    E("yeti", "Yeti", "mythical", "snow", {
      ears: "wool",
      eyes: "round",
      muzzle: "snout",
      marks: ["fangs"],
      accent: "#dcecfb",
    }),
    E("pegasus", "Pegasus", "mythical", "snow", {
      ears: "wings",
      eyes: "round",
      muzzle: "snout",
      marks: ["sparkle"],
      detail: "#7cc4ef",
    }),
    E("kraken", "Kraken", "mythical", "violet", {
      ears: "tentacles",
      eyes: "slit",
      muzzle: "smile",
      marks: ["brows"],
      detail: "#42b5a8",
    }),
    E("sphinx", "Sphinx", "mythical", "sand", {
      ears: "pointed",
      eyes: "round",
      muzzle: "nose",
      marks: ["crown"],
    }),
    E("wyvern", "Wyvern", "mythical", "red", {
      ears: "wings",
      eyes: "slit",
      muzzle: "wide",
      marks: ["horn", "fangs"],
      detail: "#f3c552",
    }),
    E("golem", "Golem", "mythical", "stone", {
      ears: "dome",
      eyes: "visor",
      muzzle: "grill",
      marks: ["sparkle"],
      detail: "#7cc4ef",
    }),
    E("trex", "T. rex", "dinosaurs", "moss", {
      ears: "none",
      eyes: "slit",
      muzzle: "wide",
      marks: ["brows", "fangs"],
      detail: "#f3c552",
    }),
    E("triceratops", "Triceratops", "dinosaurs", "teal", {
      ears: "frill",
      eyes: "round",
      muzzle: "beak",
      marks: ["horn"],
      detail: "#e6c48b",
    }),
    E("stegosaurus", "Stegosaurus", "dinosaurs", "violet", {
      ears: "spikes",
      eyes: "dot",
      muzzle: "smile",
      marks: ["spots"],
    }),
    E("raptor", "Raptor", "dinosaurs", "amber", {
      ears: "none",
      eyes: "slit",
      muzzle: "wide",
      marks: ["stripes", "fangs"],
      detail: "#5fba70",
    }),
    E("pterodactyl", "Pterodactyl", "dinosaurs", "rust", {
      ears: "wings",
      eyes: "round",
      muzzle: "beak",
      detail: "#cd5f27",
    }),
    E("brachiosaurus", "Brachiosaurus", "dinosaurs", "sky", {
      ears: "none",
      eyes: "dot",
      muzzle: "smile",
      marks: ["spots"],
    }),
    E("ankylosaurus", "Ankylosaurus", "dinosaurs", "stone", {
      ears: "points",
      eyes: "dot",
      muzzle: "smile",
      marks: ["spots"],
    }),
    E("spinosaurus", "Spinosaurus", "dinosaurs", "navy", {
      ears: "spikes",
      eyes: "slit",
      muzzle: "wide",
      marks: ["fangs"],
      detail: "#f3c552",
    }),
    E("dilophosaurus", "Dilophosaurus", "dinosaurs", "lime", {
      ears: "crest",
      eyes: "round",
      muzzle: "wide",
      marks: ["tongue"],
      detail: "#e15c4f",
    }),
    E("mosasaurus", "Mosasaurus", "dinosaurs", "teal", {
      ears: "fins",
      eyes: "wide",
      muzzle: "wide",
      marks: ["fangs"],
    }),
    E("astronaut", "Astronaut", "space", "snow", {
      ears: "dome",
      eyes: "visor",
      muzzle: "smile",
      marks: ["visorGlow"],
      detail: "#7cc4ef",
    }),
    E("alien", "Alien", "space", "lime", {
      ears: "antennae",
      eyes: "compound",
      muzzle: "smile",
      detail: "#6da733",
    }),
    E("martian", "Martian", "space", "red", {
      ears: "antennae",
      eyes: "big",
      muzzle: "smile",
      marks: ["blush"],
    }),
    E("moon", "Moon", "space", "snow", {
      ears: "none",
      eyes: "sleepy",
      muzzle: "smile",
      marks: ["spots"],
    }),
    E("sun", "Sun", "space", "yellow", {
      ears: "rays",
      eyes: "dot",
      muzzle: "smile",
      marks: ["blush"],
      detail: "#e9aa3c",
    }),
    E("star", "Star", "space", "yellow", {
      ears: "points",
      eyes: "dot",
      muzzle: "smile",
      marks: ["sparkle"],
      shade: "#e9aa3c",
      detail: "#fff3d0",
    }),
    E("comet", "Comet", "space", "sky", {
      ears: "points",
      eyes: "wide",
      muzzle: "smile",
      marks: ["sparkle", "bolt"],
      detail: "#f3c552",
    }),
    E("satellite", "Satellite", "space", "slate", {
      ears: "antennae",
      eyes: "visor",
      muzzle: "grill",
      marks: ["bolt"],
      detail: "#f3c552",
    }),
    E("ufo", "UFO", "space", "teal", {
      ears: "dome",
      eyes: "big",
      muzzle: "smile",
      marks: ["visorGlow"],
      detail: "#95cf57",
    }),
    E("rover", "Rover", "space", "stone", {
      ears: "antennae",
      eyes: "visor",
      muzzle: "grill",
      marks: ["spots"],
      detail: "#f0993f",
    }),
    E("robot", "Robot", "robots", "stone", {
      ears: "antennae",
      eyes: "visor",
      muzzle: "grill",
      marks: ["bolt"],
      detail: "#7cc4ef",
    }),
    E("android", "Android", "robots", "snow", {
      ears: "none",
      eyes: "round",
      muzzle: "smile",
      marks: ["visorGlow"],
      detail: "#42b5a8",
    }),
    E("cyborg", "Cyborg", "robots", "charcoal", {
      ears: "none",
      eyes: "slit",
      muzzle: "grill",
      marks: ["stitches"],
      detail: "#e15c4f",
    }),
    E("drone", "Drone", "robots", "slate", {
      ears: "fins",
      eyes: "big",
      muzzle: "smile",
      detail: "#95cf57",
    }),
    E("mecha", "Mecha", "robots", "navy", {
      ears: "horns",
      eyes: "visor",
      muzzle: "grill",
      marks: ["bolt"],
      detail: "#f3c552",
    }),
    E("servo", "Servo", "robots", "gold", {
      ears: "antennae",
      eyes: "dot",
      muzzle: "smile",
      marks: ["blush"],
    }),
    E("glitch", "Glitch", "robots", "purple", {
      ears: "points",
      eyes: "compound",
      muzzle: "grill",
      marks: ["sparkle"],
      detail: "#95cf57",
    }),
    E("pixel", "Pixel", "robots", "lime", {
      ears: "none",
      eyes: "dot",
      muzzle: "grill",
      marks: ["spots"],
      detail: "#f3c552",
    }),
    E("sentry", "Sentry", "robots", "red", {
      ears: "dome",
      eyes: "visor",
      muzzle: "grill",
      marks: ["visorGlow"],
      detail: "#f3c552",
    }),
    E("beacon", "Beacon", "robots", "sky", {
      ears: "rays",
      eyes: "dot",
      muzzle: "smile",
      marks: ["sparkle"],
      detail: "#f3c552",
    }),
    E("vampire", "Vampire", "monsters", "snow", {
      ears: "pointed",
      eyes: "slit",
      muzzle: "smile",
      marks: ["brows", "fangs"],
      detail: "#e15c4f",
    }),
    E("werewolf", "Werewolf", "monsters", "charcoal", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["brows", "fangs"],
    }),
    E("zombie", "Zombie", "monsters", "moss", {
      ears: "round",
      eyes: "round",
      muzzle: "smile",
      marks: ["stitches", "fangs"],
    }),
    E("ghost", "Ghost", "monsters", "snow", {
      ears: "none",
      eyes: "big",
      muzzle: "wide",
      marks: ["sparkle"],
      detail: "#a68bf5",
    }),
    E("mummy", "Mummy", "monsters", "cream", {
      ears: "none",
      eyes: "dot",
      muzzle: "smile",
      marks: ["bandage"],
      accent: "#fffaf0",
    }),
    E("frankenstein", "Frankenstein", "monsters", "lime", {
      ears: "none",
      eyes: "sleepy",
      muzzle: "smile",
      marks: ["brows", "stitches", "bolt"],
      detail: "#f3c552",
    }),
    E("goblin", "Goblin", "monsters", "moss", {
      ears: "pointed",
      eyes: "slit",
      muzzle: "wide",
      marks: ["brows", "fangs"],
      detail: "#f3c552",
    }),
    E("ogre", "Ogre", "monsters", "brown", {
      ears: "round",
      eyes: "dot",
      muzzle: "tusks",
      marks: ["brows"],
    }),
    E("slime", "Slime", "monsters", "teal", {
      ears: "none",
      eyes: "round",
      muzzle: "smile",
      marks: ["blush", "sparkle"],
    }),
    E("gargoyle", "Gargoyle", "monsters", "stone", {
      ears: "wings",
      eyes: "slit",
      muzzle: "wide",
      marks: ["brows", "fangs"],
      detail: "#6a737c",
    }),
  ]),
  hg = new Map(mg.map((s) => [s.id, s]));
function Zd(s) {
  return s ? hg.get(s) : void 0;
}
const Ba = "(max-width: 639px)";
function gg(s) {
  if (typeof window > "u" || typeof window.matchMedia != "function")
    return () => {};
  const c = window.matchMedia(Ba);
  return (
    c.addEventListener("change", s),
    () => c.removeEventListener("change", s)
  );
}
function yg() {
  return (
    typeof window < "u" &&
    typeof window.matchMedia == "function" &&
    window.matchMedia(Ba).matches
  );
}
function vg() {
  return N.useSyncExternalStore(gg, yg, () => !1);
}
const wg = N.createContext(null),
  pd = "var(--safe-area-inset-top, env(safe-area-inset-top, 0px))",
  md = "var(--safe-area-inset-left, env(safe-area-inset-left, 0px))",
  hd = "var(--comp-school-phone-bar-bg, hsl(var(--background, 222 47% 11%)))",
  xg = `
[data-phone-bar-slot] { display: none; }
@media ${Ba} {
  [data-phone-bar] {
    position: sticky !important;
    top: 0;
    z-index: 30 !important;
    border-bottom: 0 !important;
    background: linear-gradient(to bottom, ${hd} 0, ${hd} 72%, transparent) !important;
  }
  [data-phone-bar] [data-phone-bar-row] {
    justify-content: flex-start !important;
    min-height: 0 !important;
    max-width: none !important;
    padding: calc(${pd} + 0.75rem) 0.75rem 1rem calc(${md} + 0.75rem) !important;
  }
  [data-phone-bar] [data-phone-bar-row] > div:first-of-type {
    flex: 1 1 auto;
  }
  [data-phone-bar] [data-phone-bar-hide] { display: none !important; }
  [data-phone-bar] [data-phone-bar-slot] {
    display: flex;
    flex: 1 1 auto;
    min-width: 0;
    align-items: center;
  }
  [data-phone-bar] [data-phone-bar-leading] > button {
    display: inline-flex;
    width: 2.75rem;
    height: 2.75rem;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(255 255 255 / 0.15);
    border-radius: 0.5rem;
    background: rgb(2 6 23 / 0.7);
    color: rgb(241 245 249);
    pointer-events: auto;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
}
/* The bare bar is the floating button alone, at every width below a desktop.
   It sits over a full-screen page's own layers (Aquatic Sort's sea is 35) and
   under the sidebar (45). */
[data-phone-bar='bare'] {
  position: fixed !important;
  inset: 0 auto auto 0;
  z-index: 40 !important;
  border-bottom: 0 !important;
  background: none !important;
  pointer-events: none;
}
[data-phone-bar='bare'] [data-phone-bar-row] {
  justify-content: flex-start !important;
  min-height: 0 !important;
  max-width: none !important;
  padding: calc(${pd} + 0.75rem) 0.75rem 1rem calc(${md} + 0.75rem) !important;
}
[data-phone-bar='bare'] [data-phone-bar-hide],
[data-phone-bar='bare'] [data-phone-bar-back],
[data-phone-bar='bare'] [data-phone-bar-slot] { display: none !important; }
[data-phone-bar='bare'] [data-phone-bar-leading] > button {
  display: inline-flex;
  width: 2.75rem;
  height: 2.75rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(255 255 255 / 0.15);
  border-radius: 0.5rem;
  background: rgb(2 6 23 / 0.7);
  color: rgb(241 245 249);
  pointer-events: auto;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
@media (min-width: 1024px) {
  [data-phone-bar='bare'] { display: none !important; }
}
`;
function kg() {
  return a.jsx("style", { children: xg });
}
const Sg = "Checking platform access...",
  Eg = {
    alignItems: "center",
    background: "var(--cs-background, #020617)",
    color: "rgb(var(--slate-50, 248 250 252))",
    display: "grid",
    minHeight: "100vh",
    padding: "1rem",
    placeItems: "center",
  },
  Cg = { opacity: 0.5 },
  bg = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  };
function jg() {
  return a.jsxs("main", {
    "aria-busy": "true",
    "data-comp-school-loading": "",
    style: Eg,
    children: [
      a.jsx(Ha, { size: "large", style: Cg }),
      a.jsx("p", { role: "status", style: bg, children: Sg }),
    ],
  });
}
function Ag() {
  const [s, c] = N.useState(null);
  return (
    N.useEffect(
      () =>
        Fm((l) => {
          c((d) => (d === "conflict" ? d : l.kind));
        }),
      [],
    ),
    s
      ? a.jsxs("div", {
          role: "alert",
          "data-testid": "saved-state-notice",
          style: oi.banner,
          children: [
            a.jsx("p", {
              style: oi.copy,
              children:
                s === "conflict"
                  ? "This was changed on another device. Reload."
                  : "This is too long to save to your account. It is saved on this device.",
            }),
            s === "conflict"
              ? a.jsx("button", {
                  type: "button",
                  style: oi.button,
                  onClick: () => window.location.reload(),
                  children: "Reload",
                })
              : a.jsx("button", {
                  type: "button",
                  style: oi.button,
                  onClick: () => c(null),
                  children: "OK",
                }),
          ],
        })
      : null
  );
}
const oi = {
    banner: {
      alignItems: "center",
      background: "var(--cs-surface, #ffffff)",
      border: "1px solid var(--cs-border, #cbd5e1)",
      borderRadius: "0.5rem",
      bottom: "1rem",
      boxShadow: "0 12px 24px -12px rgb(15 23 42 / 0.45)",
      boxSizing: "border-box",
      color: "var(--cs-text, #020617)",
      display: "flex",
      flexWrap: "wrap",
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      gap: "0.75rem",
      justifyContent: "space-between",
      left: "50%",
      maxWidth: "calc(100vw - 2rem)",
      padding: "0.75rem 1rem",
      position: "fixed",
      transform: "translateX(-50%)",
      width: "32rem",
      zIndex: 2147483e3,
    },
    copy: {
      flex: "1 1 14rem",
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.4,
      margin: 0,
    },
    button: {
      background: "var(--cs-primary-hover, #2563eb)",
      border: 0,
      borderRadius: "0.375rem",
      color: "#ffffff",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: 700,
      minHeight: "2.75rem",
      minWidth: "6rem",
      padding: "0.5rem 1rem",
    },
  },
  Pg = { small: "1.25rem", medium: "1.75rem", large: "2.5rem" },
  gd = "#f8fafc",
  zg = "#60a5fa",
  yd = [
    { value: "product", label: "Product" },
    { value: "mock", label: "Mock" },
    { value: "real", label: "Real" },
  ];
function _g({ dataSource: s, onDataSourceChange: c, tone: l = "light" }) {
  const [d, p] = N.useState(!1),
    y = l === "dark",
    S = yd.find((T) => T.value === s)?.label || "Product",
    b = y ? "rgb(var(--slate-200, 226 232 240))" : "#334155",
    k = y ? "rgb(var(--slate-400, 148 163 184))" : "#64748b",
    V = y ? "rgb(var(--slate-50, 248 250 252))" : "#0f172a";
  return a.jsxs("div", {
    "data-profile-database-row": !0,
    style: { marginBottom: "0.25rem" },
    children: [
      a.jsxs("button", {
        "aria-controls": "profile-database-options",
        "aria-expanded": d,
        "data-profile-database-trigger": !0,
        onClick: () => p((T) => !T),
        style: {
          alignItems: "center",
          background: "transparent",
          border: 0,
          borderRadius: "0.5rem",
          color: b,
          cursor: "pointer",
          display: "flex",
          fontFamily: "inherit",
          fontSize: "0.875rem",
          fontWeight: 650,
          gap: "0.5rem",
          minHeight: "2.25rem",
          padding: "0.5rem",
          textAlign: "left",
          width: "100%",
        },
        type: "button",
        children: [
          a.jsxs("svg", {
            "aria-hidden": "true",
            fill: "none",
            height: "16",
            viewBox: "0 0 24 24",
            width: "16",
            children: [
              a.jsx("ellipse", {
                cx: "12",
                cy: "5",
                rx: "8",
                ry: "3",
                stroke: "currentColor",
                strokeWidth: "1.8",
              }),
              a.jsx("path", {
                d: "M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7",
                stroke: "currentColor",
                strokeWidth: "1.8",
              }),
            ],
          }),
          a.jsx("span", { style: { flex: 1 }, children: "Database" }),
          a.jsx("span", {
            style: { color: k, fontSize: "0.75rem", fontWeight: 600 },
            children: S,
          }),
          a.jsx("svg", {
            "aria-hidden": "true",
            fill: "none",
            height: "15",
            style: { transform: d ? "rotate(180deg)" : void 0 },
            viewBox: "0 0 24 24",
            width: "15",
            children: a.jsx("path", {
              d: "m6 9 6 6 6-6",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
            }),
          }),
        ],
      }),
      d
        ? a.jsx("div", {
            "aria-label": "Database",
            id: "profile-database-options",
            role: "radiogroup",
            style: {
              display: "grid",
              gap: "0.125rem",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              padding: "0.125rem 0.5rem 0.5rem 2rem",
            },
            children: yd.map((T) =>
              a.jsxs(
                "button",
                {
                  "aria-checked": s === T.value,
                  "aria-label": T.locked ? `${T.label}, locked` : T.label,
                  "data-database-source": T.value,
                  disabled: T.locked,
                  onClick: () => c(T.value),
                  role: "radio",
                  style: {
                    background: s === T.value ? V : "transparent",
                    border: `1px solid ${s === T.value ? V : y ? "rgb(var(--slate-600, 71 85 105))" : "#cbd5e1"}`,
                    borderRadius: "9999px",
                    color: T.locked
                      ? k
                      : s === T.value
                        ? y
                          ? "rgb(var(--slate-900, 15 23 42))"
                          : "#ffffff"
                        : b,
                    cursor: T.locked ? "not-allowed" : "pointer",
                    display: "inline-flex",
                    fontFamily: "inherit",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    minHeight: "1.875rem",
                    opacity: T.locked ? 0.62 : 1,
                    padding: "0.25rem 0.45rem",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.2rem",
                  },
                  title: T.locked ? "Locked" : T.label,
                  type: "button",
                  children: [
                    T.locked
                      ? a.jsxs("svg", {
                          "aria-hidden": "true",
                          fill: "none",
                          height: "11",
                          viewBox: "0 0 24 24",
                          width: "11",
                          children: [
                            a.jsx("rect", {
                              height: "10",
                              rx: "2",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              width: "14",
                              x: "5",
                              y: "11",
                            }),
                            a.jsx("path", {
                              d: "M8 11V8a4 4 0 0 1 8 0v3",
                              stroke: "currentColor",
                              strokeLinecap: "round",
                              strokeWidth: "2",
                            }),
                          ],
                        })
                      : null,
                    T.label,
                  ],
                },
                T.value,
              ),
            ),
          })
        : null,
    ],
  });
}
function Ha({ className: s, size: c = "medium", style: l }) {
  return a.jsxs("span", {
    "aria-label": "comp.school",
    className: s,
    style: {
      alignItems: "baseline",
      color: "inherit",
      display: "inline-flex",
      fontSize: Pg[c],
      lineHeight: 1,
      textTransform: "none",
      whiteSpace: "nowrap",
      ...l,
    },
    children: [
      a.jsxs("span", {
        "aria-hidden": "true",
        "data-comp-school-wordmark-part": "comp-dot",
        style: {
          color: gd,
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontSize: "0.88em",
          fontStyle: "normal",
          fontWeight: 650,
          letterSpacing: "-0.035em",
        },
        children: [
          "comp",
          a.jsx("span", { style: { color: gd }, children: "." }),
        ],
      }),
      a.jsx("span", {
        "aria-hidden": "true",
        "data-comp-school-wordmark-part": "school",
        style: {
          color: zg,
          fontFamily: "'Caveat', 'Segoe Print', cursive",
          fontSize: "1.2em",
          fontStyle: "italic",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          transform: "rotate(-2deg)",
        },
        children: "school",
      }),
    ],
  });
}
function Tg(s) {
  return s.trim().charAt(0).toLocaleUpperCase() || "U";
}
function vd({ avatar: s, instanceId: c, profileName: l, style: d }) {
  const p = Zd(s);
  return p
    ? a.jsx("span", {
        "aria-hidden": "true",
        "data-student-avatar": p.id,
        style: {
          display: "block",
          height: "100%",
          lineHeight: 0,
          width: "100%",
          ...d,
        },
        children: a.jsx(fg, {
          features: p,
          idSuffix: c ? `${c}-${p.id}` : p.id,
        }),
      })
    : a.jsx("span", {
        "aria-hidden": "true",
        style: { lineHeight: 1, ...d },
        children: Tg(l),
      });
}
function wd() {
  return a.jsxs("svg", {
    "aria-hidden": "true",
    fill: "none",
    height: "16",
    viewBox: "0 0 24 24",
    width: "16",
    children: [
      a.jsx("path", {
        d: "M12 4c-4.4 0-8 3.1-8 7 0 2.9 2 5.4 4.9 6.5L8 21l3.4-2.8H12c4.4 0 8-3.1 8-7s-3.6-7.2-8-7.2Z",
        stroke: "currentColor",
        strokeLinejoin: "round",
        strokeWidth: "1.8",
      }),
      a.jsx("circle", { cx: "9", cy: "10", fill: "currentColor", r: "1" }),
      a.jsx("circle", { cx: "15", cy: "10", fill: "currentColor", r: "1" }),
    ],
  });
}
function Rg(s) {
  if (typeof window > "u") return "https://comp.school/?page=release-log";
  const c = new URL(fn(window.location.hostname));
  c.searchParams.set("page", "release-log");
  const l = window.sessionStorage.getItem("comp-school-fallback-access");
  return l && Ea(l) ? ym(c.toString(), l, s) : c.toString();
}
function Mg({
  profileName: s,
  canChangeAvatar: c = !1,
  changeAvatarHref: l,
  onChangeAvatar: d,
  dataSource: p,
  feedbackWelcomeInstead: y = !1,
  onDataSourceChange: S,
  onSignOut: b,
  profileAvatar: k,
  reportIssueHref: V,
  releaseLogHref: T,
  tone: K = "dark",
  placement: D = "below-end",
  showName: X = !1,
}) {
  const J = N.useRef(null),
    [O, W] = N.useState(!1),
    G = K === "dark",
    se = !!Zd(k),
    ke = G ? "rgb(var(--slate-50, 248 250 252))" : "#0f172a",
    ie = G ? "rgb(var(--slate-300, 203 213 225))" : "#475569",
    Ae = G ? "rgb(var(--slate-700, 51 65 85))" : "#e2e8f0",
    R = G ? "rgb(var(--slate-900, 15 23 42))" : "#ffffff",
    B = {
      alignItems: "center",
      background: "transparent",
      border: 0,
      borderRadius: "0.625rem",
      color: ke,
      cursor: "pointer",
      display: "inline-flex",
      fontFamily: "inherit",
      fontSize: "0.875rem",
      fontWeight: 700,
      gap: "0.375rem",
      justifyContent: "flex-start",
      minHeight: "2.5rem",
      padding: "0.5rem 0.75rem",
      textDecoration: "none",
      whiteSpace: "nowrap",
      width: "100%",
    },
    re = {
      alignItems: "center",
      background: se
        ? "transparent"
        : G
          ? "rgb(var(--slate-200, 226 232 240))"
          : "#0f172a",
      borderRadius: se ? "0.8rem" : "9999px",
      color: G ? "rgb(var(--slate-900, 15 23 42))" : "#ffffff",
      display: "inline-flex",
      flex: "0 0 auto",
      fontSize: "0.875rem",
      fontWeight: 800,
      height: "2.5rem",
      justifyContent: "center",
      overflow: "hidden",
      width: "2.5rem",
    };
  return (V || y) && b
    ? a.jsxs(a.Fragment, {
        children: [
          a.jsxs("details", {
            "data-comp-school-account-menu": !0,
            onToggle: (pe) => {
              pe.currentTarget.open || W(!1);
            },
            style: { position: "relative", width: X ? "100%" : void 0 },
            children: [
              a.jsxs("summary", {
                "aria-label": `${s} account menu`,
                title: `${s} account`,
                style: {
                  alignItems: "center",
                  borderRadius: "0.625rem",
                  color: ke,
                  cursor: "pointer",
                  display: "flex",
                  gap: "0.625rem",
                  listStyle: "none",
                  padding: X ? "0.25rem" : 0,
                  width: X ? "100%" : void 0,
                },
                children: [
                  a.jsx("span", {
                    style: re,
                    children: a.jsx(vd, { avatar: k, profileName: s }),
                  }),
                  X
                    ? a.jsx("span", {
                        style: {
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          minWidth: 0,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        },
                        children: s,
                      })
                    : null,
                ],
              }),
              a.jsxs("div", {
                style: {
                  background: R,
                  border: `1px solid ${Ae}`,
                  borderRadius: "0.75rem",
                  boxShadow: "0 20px 25px -5px rgba(2, 6, 23, 0.35)",
                  minWidth: "15rem",
                  padding: "0.5rem",
                  position: "absolute",
                  zIndex: 40,
                  ...(D === "above-start"
                    ? { bottom: "calc(100% + 0.5rem)", left: 0 }
                    : { right: 0, top: "calc(100% + 0.5rem)" }),
                },
                children: [
                  D === "above-start"
                    ? null
                    : a.jsx("p", {
                        style: {
                          color: ie,
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          margin: 0,
                          padding: "0.375rem 0.5rem",
                          textTransform: "uppercase",
                        },
                        children: s.split(" ")[0] || s,
                      }),
                  p && S
                    ? a.jsx(_g, {
                        dataSource: p,
                        onDataSourceChange: S,
                        tone: K,
                      })
                    : null,
                  O
                    ? a.jsxs(a.Fragment, {
                        children: [
                          a.jsxs("button", {
                            "data-account-menu-back": !0,
                            onClick: () => W(!1),
                            style: { ...B, textAlign: "left" },
                            type: "button",
                            children: [
                              a.jsx("svg", {
                                "aria-hidden": "true",
                                fill: "none",
                                height: "16",
                                viewBox: "0 0 24 24",
                                width: "16",
                                children: a.jsx("path", {
                                  d: "m15 18-6-6 6-6",
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "1.8",
                                }),
                              }),
                              a.jsx("span", { children: "Back" }),
                            ],
                          }),
                          a.jsxs("a", {
                            href: T ?? Rg(k),
                            style: B,
                            children: [
                              a.jsx("svg", {
                                "aria-hidden": "true",
                                fill: "none",
                                height: "16",
                                viewBox: "0 0 24 24",
                                width: "16",
                                children: a.jsx("path", {
                                  d: "M3 11a9 9 0 1 1 2.6 6.4M3 5v6h6m3-4v5l3 2",
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "1.8",
                                }),
                              }),
                              a.jsx("span", { children: "What's new" }),
                            ],
                          }),
                          a.jsxs("button", {
                            "data-profile-accessibility": !0,
                            onClick: (pe) => {
                              (pe.currentTarget
                                .closest("[data-comp-school-account-menu]")
                                ?.removeAttribute("open"),
                                J.current?.showModal());
                            },
                            style: { ...B, textAlign: "left" },
                            type: "button",
                            children: [
                              a.jsx(Qd, {}),
                              a.jsx("span", { children: Gd }),
                            ],
                          }),
                        ],
                      })
                    : a.jsxs(a.Fragment, {
                        children: [
                          c && d
                            ? a.jsxs("button", {
                                onClick: (pe) => {
                                  (pe.currentTarget
                                    .closest("details")
                                    ?.removeAttribute("open"),
                                    d());
                                },
                                style: B,
                                type: "button",
                                children: [
                                  a.jsx(wd, {}),
                                  a.jsx("span", { children: "Change avatar" }),
                                ],
                              })
                            : c && l
                              ? a.jsxs("a", {
                                  href: l,
                                  style: B,
                                  children: [
                                    a.jsx(wd, {}),
                                    a.jsx("span", {
                                      children: "Change avatar",
                                    }),
                                  ],
                                })
                              : null,
                          y
                            ? a.jsxs("a", {
                                href: lg,
                                onClick: (pe) =>
                                  pe.currentTarget
                                    .closest("details")
                                    ?.removeAttribute("open"),
                                rel: "noopener noreferrer",
                                style: B,
                                target: "_blank",
                                children: [
                                  a.jsxs("svg", {
                                    "aria-hidden": "true",
                                    fill: "none",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    width: "16",
                                    children: [
                                      a.jsx("rect", {
                                        height: "14",
                                        rx: "2",
                                        stroke: "currentColor",
                                        strokeWidth: "1.8",
                                        width: "18",
                                        x: "3",
                                        y: "5",
                                      }),
                                      a.jsx("path", {
                                        d: "m4 7 8 6 8-6",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "1.8",
                                      }),
                                    ],
                                  }),
                                  a.jsx("span", { children: ag }),
                                ],
                              })
                            : a.jsxs("a", {
                                href: V,
                                style: B,
                                children: [
                                  a.jsxs("svg", {
                                    "aria-hidden": "true",
                                    fill: "none",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    width: "16",
                                    children: [
                                      a.jsx("path", {
                                        d: "M8 2 6.5 5M16 2l1.5 3M4 9H2M22 9h-2M5 19l2.5-2.5M19 19l-2.5-2.5M9 5h6a4 4 0 0 1 4 4v4a7 7 0 0 1-14 0V9a4 4 0 0 1 4-4Z",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "1.8",
                                      }),
                                      a.jsx("path", {
                                        d: "M8 12h8M12 8v8",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeWidth: "1.8",
                                      }),
                                    ],
                                  }),
                                  a.jsx("span", {
                                    children: "Report an issue",
                                  }),
                                ],
                              }),
                          a.jsxs("button", {
                            "data-account-menu-more": !0,
                            onClick: () => W(!0),
                            style: { ...B, textAlign: "left" },
                            type: "button",
                            children: [
                              a.jsxs("svg", {
                                "aria-hidden": "true",
                                fill: "none",
                                height: "16",
                                viewBox: "0 0 24 24",
                                width: "16",
                                children: [
                                  a.jsx("circle", {
                                    cx: "5",
                                    cy: "12",
                                    r: "1.6",
                                    fill: "currentColor",
                                  }),
                                  a.jsx("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "1.6",
                                    fill: "currentColor",
                                  }),
                                  a.jsx("circle", {
                                    cx: "19",
                                    cy: "12",
                                    r: "1.6",
                                    fill: "currentColor",
                                  }),
                                ],
                              }),
                              a.jsx("span", { children: "More" }),
                            ],
                          }),
                          a.jsxs("button", {
                            onClick: b,
                            style: { ...B, marginTop: "0.25rem" },
                            type: "button",
                            children: [
                              a.jsx("svg", {
                                "aria-hidden": "true",
                                fill: "none",
                                height: "16",
                                viewBox: "0 0 24 24",
                                width: "16",
                                children: a.jsx("path", {
                                  d: "M10 17l5-5-5-5M15 12H3M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "1.8",
                                }),
                              }),
                              a.jsx("span", { children: "Sign out" }),
                            ],
                          }),
                        ],
                      }),
                ],
              }),
            ],
          }),
          a.jsx(sg, { dialogRef: J, tone: K }),
        ],
      })
    : a.jsx("span", {
        "aria-label": `${s} profile`,
        title: s,
        style: re,
        children: a.jsx(vd, { avatar: k, profileName: s }),
      });
}
function Lg({
  appName: s,
  backHref: c,
  profileName: l,
  backLabel: d = "Back",
  canChangeAvatar: p = !1,
  changeAvatarHref: y,
  children: S,
  className: b,
  contextLabel: k,
  dataSource: V,
  onBack: T,
  onDataSourceChange: K,
  onSignOut: D,
  profileAvatar: X,
  feedbackWelcomeInstead: J = !1,
  leading: O,
  hideAccountMenu: W = !1,
  breadcrumbNavigation: G = !1,
  phoneBar: se,
  phoneBarSlotRef: ke,
  actionsSlotRef: ie,
  reportIssueHref: Ae,
  style: R,
  tone: B = "dark",
}) {
  const re = B === "dark",
    pe = re ? "rgb(var(--slate-50, 248 250 252))" : "#0f172a",
    de = re ? "rgb(var(--slate-300, 203 213 225))" : "#475569",
    te = re ? "rgb(var(--slate-700, 51 65 85))" : "#e2e8f0",
    Ce = re ? "rgb(var(--slate-900, 15 23 42))" : "#ffffff",
    he = re ? "rgb(var(--slate-800, 30 41 59))" : "#f8fafc",
    be = a.jsxs(a.Fragment, {
      children: [
        a.jsx("svg", {
          "aria-hidden": "true",
          fill: "none",
          height: "16",
          viewBox: "0 0 24 24",
          width: "16",
          children: a.jsx("path", {
            d: "M19 12H5m7 7-7-7 7-7",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
          }),
        }),
        a.jsx("span", { children: d }),
      ],
    }),
    Fe = {
      alignItems: "center",
      background: he,
      border: `1px solid ${te}`,
      borderRadius: "0.625rem",
      color: de,
      cursor: "pointer",
      display: "inline-flex",
      fontFamily: "inherit",
      fontSize: "0.875rem",
      fontWeight: 700,
      gap: "0.375rem",
      minHeight: "2.5rem",
      padding: "0.5rem 0.75rem",
      textDecoration: "none",
      whiteSpace: "nowrap",
    },
    Me = G && W && !S && !k;
  return a.jsx("header", {
    "aria-label": `${s} navigation`,
    className: b,
    "data-comp-school-navbar": G ? "breadcrumb" : "standard",
    "data-navbar-wide-hidden": Me ? "" : void 0,
    "data-phone-bar": se,
    style: {
      background: Ce,
      borderBottom: `1px solid ${te}`,
      color: pe,
      fontFamily:
        "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      position: "relative",
      zIndex: 30,
      ...R,
    },
    children: a.jsxs("div", {
      "data-phone-bar-row": se ? "" : void 0,
      style: {
        alignItems: "center",
        display: "flex",
        gap: "0.75rem",
        justifyContent: "space-between",
        margin: "0 auto",
        maxWidth: "80rem",
        minHeight: "4rem",
        padding: "0.625rem clamp(1rem, 3vw, 2rem)",
        width: "100%",
      },
      children: [
        Me
          ? a.jsx("style", {
              children:
                "@media (min-width: 1024px) { [data-navbar-wide-hidden] { display: none; } }",
            })
          : null,
        se ? a.jsx(kg, {}) : null,
        a.jsxs("div", {
          style: {
            alignItems: "center",
            display: "flex",
            gap: "0.625rem",
            minWidth: 0,
          },
          children: [
            se
              ? a.jsx("span", {
                  "data-phone-bar-leading": "",
                  style: { display: "contents" },
                  children: O,
                })
              : O,
            G
              ? null
              : T
                ? a.jsx("button", {
                    "aria-label": d,
                    "data-phone-bar-back": "",
                    onClick: T,
                    style: Fe,
                    type: "button",
                    children: be,
                  })
                : a.jsx("a", {
                    "aria-label": d,
                    "data-phone-bar-back": "",
                    href: c,
                    style: Fe,
                    children: be,
                  }),
            se ? a.jsx("div", { "data-phone-bar-slot": "", ref: ke }) : null,
            k
              ? a.jsx("span", {
                  "data-phone-bar-hide": "",
                  style: {
                    borderLeft: `1px solid ${te}`,
                    color: de,
                    fontSize: "0.875rem",
                    fontWeight: 650,
                    lineHeight: 1.2,
                    minWidth: 0,
                    overflow: "hidden",
                    paddingLeft: "0.625rem",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  },
                  children: k,
                })
              : null,
          ],
        }),
        a.jsxs("div", {
          "data-phone-bar-hide": se ? "" : void 0,
          style: { alignItems: "center", display: "flex", gap: "0.625rem" },
          children: [
            ie
              ? a.jsx("div", {
                  "data-navbar-actions": "",
                  ref: ie,
                  style: {
                    alignItems: "center",
                    display: "flex",
                    gap: "0.5rem",
                  },
                })
              : null,
            S,
            W
              ? null
              : a.jsx(Mg, {
                  canChangeAvatar: p,
                  changeAvatarHref: y,
                  dataSource: V,
                  feedbackWelcomeInstead: J,
                  onDataSourceChange: K,
                  onSignOut: D,
                  profileAvatar: X,
                  profileName: l,
                  reportIssueHref: Ae,
                  tone: B,
                }),
          ],
        }),
      ],
    }),
  });
}
const Og = 900 * 1e3,
  Ig = 15 * 1e3;
function Ng({ storageKey: s, now: c = Date.now }) {
  const [l, d] = N.useState(() => aa(window.sessionStorage.getItem(s))),
    [p, y] = N.useState(c),
    [S, b] = N.useState(""),
    [k, V] = N.useState(null),
    [T, K] = N.useState(!1),
    D = N.useId();
  if (
    (N.useEffect(() => {
      const O = window.setInterval(() => {
        y(c());
        const W = aa(window.sessionStorage.getItem(s));
        W && d((G) => (G && G > W ? G : W));
      }, Ig);
      return () => window.clearInterval(O);
    }, [c, s]),
    ui() || !l || l - p > Og)
  )
    return null;
  const X = Math.max(0, Math.ceil((l - p) / 6e4));
  async function J(O) {
    if ((O.preventDefault(), !(!S.trim() || T))) {
      (K(!0), V(null));
      try {
        const W = await fetch(
            new URL(
              "/api/fallback-access",
              fn(window.location.hostname),
            ).toString(),
            {
              method: "POST",
              cache: "no-store",
              headers: {
                accept: "application/json",
                "content-type": "application/json",
              },
              body: JSON.stringify({ password: S }),
            },
          ),
          G = await W.json().catch(() => null),
          se = aa(G?.grant);
        if (!W.ok || !G?.ok || !G.grant || !se) {
          V(G?.message || "That did not work. Try again.");
          return;
        }
        (window.sessionStorage.setItem(s, G.grant), d(se), b(""));
      } catch {
        V("No connection. Try again.");
      } finally {
        K(!1);
      }
    }
  }
  return a.jsx("div", {
    role: "dialog",
    "aria-labelledby": `${D}-title`,
    "data-testid": "fallback-renewal",
    style: dn.panel,
    children: a.jsxs("form", {
      onSubmit: (O) => void J(O),
      style: dn.form,
      children: [
        a.jsx("p", {
          id: `${D}-title`,
          style: dn.title,
          children:
            X > 0
              ? `Your access ends in ${X} minute${X === 1 ? "" : "s"}.`
              : "Your access has ended.",
        }),
        a.jsx("label", {
          htmlFor: D,
          style: dn.label,
          children: "Class password",
        }),
        a.jsxs("div", {
          style: dn.row,
          children: [
            a.jsx("input", {
              id: D,
              type: "password",
              autoComplete: "off",
              value: S,
              onChange: (O) => b(O.target.value),
              style: dn.input,
            }),
            a.jsx("button", {
              type: "submit",
              disabled: T,
              style: dn.button,
              children: "Keep going",
            }),
          ],
        }),
        k ? a.jsx("p", { role: "alert", style: dn.error, children: k }) : null,
      ],
    }),
  });
}
const dn = {
    panel: {
      background: "var(--cs-surface, #ffffff)",
      border: "1px solid var(--cs-border, #cbd5e1)",
      borderRadius: "0.5rem",
      bottom: "1rem",
      boxShadow: "0 12px 24px -12px rgb(15 23 42 / 0.45)",
      boxSizing: "border-box",
      color: "var(--cs-text, #020617)",
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      left: "50%",
      maxWidth: "calc(100vw - 2rem)",
      padding: "1rem",
      position: "fixed",
      transform: "translateX(-50%)",
      width: "26rem",
      zIndex: 2147483001,
    },
    form: { display: "grid", gap: "0.5rem", margin: 0 },
    title: { fontSize: "1rem", fontWeight: 700, lineHeight: 1.4, margin: 0 },
    label: { fontSize: "0.875rem", fontWeight: 600 },
    row: { display: "flex", gap: "0.5rem", flexWrap: "wrap" },
    input: {
      border: "1px solid var(--cs-border, #94a3b8)",
      borderRadius: "0.375rem",
      boxSizing: "border-box",
      flex: "1 1 10rem",
      fontSize: "1rem",
      minHeight: "2.75rem",
      minWidth: 0,
      padding: "0.5rem 0.75rem",
    },
    button: {
      background: "var(--cs-primary-hover, #2563eb)",
      border: 0,
      borderRadius: "0.375rem",
      color: "#ffffff",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: 700,
      minHeight: "2.75rem",
      padding: "0.5rem 1rem",
    },
    error: {
      color: "#b91c1c",
      fontSize: "0.875rem",
      fontWeight: 600,
      margin: 0,
    },
  },
  Dg = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  Ug = N.createContext(null),
  Fg = N.createContext(null),
  $g = N.createContext(null),
  Wg = N.createContext(null),
  Bg = N.createContext(null),
  Hg = N.createContext(!1),
  Tn = "comp-school-fallback-access";
function xd() {
  return typeof window > "u" || typeof document > "u"
    ? null
    : Ed(document.cookie, window.location.hostname, Va().DEV === !0);
}
function Vg(s) {
  if (typeof window > "u" || typeof document > "u") return;
  const c = hm(s);
  Ed(c, window.location.hostname, Va().DEV === !0) && (document.cookie = c);
}
function Kg() {
  typeof document > "u" || (document.cookie = gm());
}
function ya(s, c) {
  return (
    c &&
    s.role === "teacher" &&
    new URLSearchParams(window.location.search).get("preview") === "student"
  );
}
function Yd() {
  if (typeof window > "u") return null;
  const s = new URLSearchParams(window.location.hash.replace(/^#/, "")),
    c = s.get("fallback");
  if (c && Ea(c)) {
    (window.sessionStorage.setItem(Tn, c), s.delete("fallback"));
    const d = s.toString();
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${window.location.search}${d ? `#${d}` : ""}`,
    );
  }
  const l = c || window.sessionStorage.getItem(Tn);
  return Ea(l) ? l : (window.sessionStorage.removeItem(Tn), null);
}
function Gg() {
  const s = new URLSearchParams(window.location.hash.replace(/^#/, "")),
    c = s.get(ka);
  if (c !== null) {
    s.delete(ka);
    const l = s.toString();
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${window.location.search}${l ? `#${l}` : ""}`,
    );
  }
  return xm(window.sessionStorage, c);
}
function va() {
  return Yd() ? (window.sessionStorage.removeItem(Tn), !0) : !1;
}
function Qg() {
  const s = Yd();
  return s ? { [dm]: s } : {};
}
function wa(s) {
  (lm(s),
    sm(zn(s) && s.role === "student" ? (s.courses ?? ["j277"]) : []),
    s.role === "student" && s.aiAccess);
}
const at = {
  main: {
    alignItems: "center",
    background: "var(--cs-background, #020617)",
    color: "rgb(var(--slate-50, 255 255 255))",
    display: "flex",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    justifyContent: "center",
    minHeight: "100vh",
    padding: "2.5rem 1rem",
  },
  panel: {
    background: "var(--cs-surface, #ffffff)",
    border: "1px solid var(--cs-border, rgba(255, 255, 255, 0.1))",
    borderRadius: "0.5rem",
    boxShadow:
      "0 25px 50px -12px rgb(var(--slate-900, 15 23 42) / 0.45), 0 12px 24px -16px rgb(var(--slate-900, 15 23 42) / 0.6)",
    color: "var(--cs-text, #020617)",
    maxWidth: "24rem",
    padding: "1.5rem",
    width: "100%",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
    margin: "0.75rem 0 0",
  },
  copy: {
    color: "var(--cs-text-muted, #475569)",
    fontSize: "0.875rem",
    lineHeight: 1.6,
    margin: "0.5rem 0 0",
  },
  actions: { display: "grid", gap: "1rem", marginTop: "1.5rem" },
  error: { color: "#dc2626", fontSize: "0.875rem", fontWeight: 600, margin: 0 },
  link: {
    background: "var(--cs-primary-hover, #2563eb)",
    borderRadius: "0.375rem",
    color: "rgb(var(--slate-50, 255 255 255))",
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 700,
    padding: "0.75rem 1rem",
    textAlign: "center",
    textDecoration: "none",
    width: "100%",
  },
};
function Va() {
  return Dg || {};
}
function Zg(s) {
  const c = Am(window.location.hostname, s, Va().VITE_PLATFORM_URL),
    l = `${window.location.origin}${window.location.pathname}${window.location.search}`;
  if (Pd(window.location.pathname) && _d(l)) {
    const d = new URL(c);
    return (d.searchParams.set("returnTo", l), d.toString());
  }
  return c;
}
function xa(s) {
  if (s.role !== "student") return !1;
  const c = zn(s) ? "mock" : um(s),
    l = new URL(window.location.href);
  return La(l.searchParams) === c
    ? !1
    : (l.searchParams.set("sql", c),
      l.searchParams.delete("source"),
      window.location.replace(l.toString()),
      !0);
}
const Yg = "signedOut";
function qg({
  appName: s,
  children: c,
  allowedRoles: l,
  navbarChildren: d,
  navbarLeading: p,
  navbarStyle: y,
  productionUrl: S,
  showNavbar: b = !0,
  laneMenuButton: k = !1,
  whileChecking: V,
  allowFallback: T = !1,
  allowTeacherStudentPreview: K = !1,
  prepare: D,
}) {
  const X = La(new URLSearchParams(window.location.search)),
    J = N.useMemo(() => Zg(S), [S]),
    O = N.useMemo(() => fn(window.location.hostname), []),
    W = N.useMemo(
      () => Gr(window.location.hostname, "https://issues.comp.school"),
      [],
    ),
    G = N.useMemo(() => {
      const q = new URL(O);
      return (q.searchParams.set("changeAvatar", "1"), q.toString());
    }, [O]),
    se = l ? l.join(",") : "",
    [ke, ie] = N.useState(null),
    [Ae, R] = N.useState(!0),
    B = N.useRef(D);
  B.current = D;
  const re = () => (B.current?.() ?? Promise.resolve()).catch(() => {}),
    [pe, de] = N.useState(!1),
    [te, Ce] = N.useState(null),
    [he, be] = N.useState(!1),
    [Fe, Me] = N.useState(null),
    [ye, M] = N.useState(null),
    [H, _] = N.useState(!1),
    [g, C] = N.useState(null),
    [Y, ne] = N.useState(null),
    ae = vg(),
    ue = N.useCallback((q) => M(() => q), []);
  async function ve() {
    const q = te !== null;
    if (
      (zn(te) && (await Qm()),
      await fetch("/api/logout", {
        cache: "no-store",
        credentials: "same-origin",
        method: "POST",
      }).catch(() => {}),
      Ce(null),
      Kg(),
      window.sessionStorage.removeItem(Tn),
      window.sessionStorage.removeItem(Sa),
      be(!1),
      de(!1),
      !q)
    ) {
      window.location.assign(O);
      return;
    }
    const we = new URL(O);
    (we.searchParams.set(Yg, "1"), window.location.assign(we.toString()));
  }
  function ce(q) {
    const we = new URL(window.location.href);
    (we.searchParams.set("sql", q),
      we.searchParams.delete("source"),
      we.searchParams.delete("student"),
      window.location.assign(we.toString()));
  }
  if (
    (N.useEffect(() => {
      let q = !1,
        we = !1;
      const qe = () => {
        we = !0;
      };
      return (
        fetch("/api/session", {
          cache: "no-store",
          credentials: "same-origin",
          headers: { accept: "application/json", ...(T ? Qg() : {}) },
        })
          .then(async (He) => {
            const Pe = await He.json().catch(() => null);
            if (q) return;
            const Mt = T && Pe?.fallback === !0;
            if (
              (T && !Mt && window.sessionStorage.removeItem(Tn),
              He.ok &&
                Pe?.ok &&
                Pe.user &&
                (!l || l.includes(Pe.user.role) || ya(Pe.user, K)))
            ) {
              if (T && va()) {
                (qe(), window.location.reload());
                return;
              }
              if (xa(Pe.user)) {
                qe();
                return;
              }
              const Lt = T && zn(Pe.user);
              if (
                Lt &&
                Pe.user.role === "student" &&
                !(Pe.user.courses ?? ["j277"]).includes("j277")
              ) {
                (qe(), window.location.replace(O));
                return;
              }
              if (
                (Lt && (await Km(Pe.user)), q || (wa(Pe.user), await re(), q))
              )
                return;
              (Vg(Pe.user), ie(null), Ce(Pe.user), be(Lt), de(!0));
              return;
            }
            He.status === 401 && $a();
            const et = xd();
            if (et && (!l || l.includes(et.role) || ya(et, K))) {
              if (T && va()) {
                (qe(), window.location.reload());
                return;
              }
              if ((ie(null), xa(et))) {
                qe();
                return;
              }
              if ((wa(et), await re(), q)) return;
              (Ce(et), be(T && zn(et)), de(!0));
              return;
            }
            if (Mt) {
              if ((await re(), q)) return;
              (ie(null), be(!0), de(!0));
              return;
            }
            (ie(Pe?.message || null), Ce(null), de(!1));
          })
          .catch(async () => {
            if (!q) {
              const He = xd();
              if (He && (!l || l.includes(He.role) || ya(He, K))) {
                if (T && va()) {
                  (qe(), window.location.reload());
                  return;
                }
                if ((ie(null), xa(He))) {
                  qe();
                  return;
                }
                if ((wa(He), await re(), q)) return;
                (Ce(He), be(T && zn(He)), de(!0));
                return;
              }
              (ie("Unable to check platform access right now."),
                Ce(null),
                de(!1));
            }
          })
          .finally(() => {
            !q && !we && R(!1);
          }),
        () => {
          q = !0;
        }
      );
    }, [se, T, K]),
    !X)
  )
    return a.jsx("main", {
      style: at.main,
      children: a.jsxs("section", {
        style: at.panel,
        children: [
          a.jsx("h1", { style: at.title, children: "Database unavailable" }),
          a.jsx("p", {
            style: at.copy,
            children: "Choose Product, Mock, or Real to continue.",
          }),
          a.jsx("button", {
            style: at.link,
            onClick: () => ce("product"),
            children: "Open Product",
          }),
          a.jsx("button", {
            style: at.link,
            onClick: () => ce("mock"),
            children: "Open Mock",
          }),
          a.jsx("button", {
            style: at.link,
            onClick: () => ce("real"),
            children: "Open Real",
          }),
        ],
      }),
    });
  if (Ae) return a.jsxs(a.Fragment, { children: [V, a.jsx(jg, {})] });
  if (pe) {
    const q = he && !te ? Gg() : void 0,
      we = te?.role === "admin" || te?.role === "teacher",
      qe = new URL(O);
    we && qe.searchParams.set("sql", X);
    const He = {
        canChangeAvatar: te?.role === "student" || !!q,
        changeAvatarHref: q ? Cd(G, q) : G,
        dataSource: we ? X : void 0,
        feedbackWelcomeInstead: he,
        onDataSourceChange: we ? ce : void 0,
        onSignOut: ve,
        profileAvatar: te?.role === "student" ? (te.avatar ?? vm(te.id)) : q,
        profileName: te?.name || "Anonymous",
        reportIssueHref: he ? void 0 : W,
      },
      Pe = typeof p == "function",
      Mt = he && Pe,
      et = !b && k && Pe,
      Lt = b || et,
      or = Lt && (te || he) && !et && !(Mt && ae) ? Y : null;
    return a.jsxs(a.Fragment, {
      children: [
        Lt && (te || he)
          ? a.jsx(Lg, {
              ...He,
              appName: s,
              backHref: qe.toString(),
              breadcrumbNavigation: H,
              contextLabel: Fe,
              hideAccountMenu: Pe,
              leading: typeof p == "function" ? p(He) : p,
              onBack: ye ? () => ye() : void 0,
              phoneBar: et ? "bare" : Mt ? "band" : void 0,
              phoneBarSlotRef: C,
              actionsSlotRef: ne,
              style: y,
              children: d,
            })
          : null,
        he && !te ? a.jsx(Ng, { storageKey: Tn }) : null,
        zn(te) ? a.jsx(Ag, {}) : null,
        a.jsx(Hg.Provider, {
          value: he,
          children: a.jsxs(Bg.Provider, {
            value: te,
            children: [
              a.jsx(bh, { user: te }),
              a.jsx(Xh, { user: te }),
              a.jsx(Ug.Provider, {
                value: Me,
                children: a.jsx(Fg.Provider, {
                  value: ue,
                  children: a.jsx($g.Provider, {
                    value: _,
                    children: a.jsx(wg.Provider, {
                      value: g,
                      children: a.jsx(Wg.Provider, { value: or, children: c }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    });
  }
  return a.jsx("main", {
    style: at.main,
    children: a.jsxs("section", {
      style: at.panel,
      children: [
        a.jsx(Ha, {
          size: "small",
          style: { color: "rgb(var(--slate-900, 15 23 42))" },
        }),
        a.jsx("h1", { style: at.title, children: s }),
        a.jsx("p", {
          style: at.copy,
          children: "Open comp.school and sign in to continue.",
        }),
        a.jsxs("div", {
          style: at.actions,
          children: [
            ke && a.jsx("p", { style: at.error, children: ke }),
            a.jsx("a", {
              "aria-label": `Open comp.school to access ${s}`,
              href: J,
              style: at.link,
              children: "Open comp.school",
            }),
          ],
        }),
      ],
    }),
  });
}
const Xg = [
  { value: 1, label: "None" },
  { value: 1.25, label: "25%" },
  { value: 1.5, label: "50%" },
];
function Jg() {
  return La(new URLSearchParams(window.location.search)) === "product"
    ? "product"
    : "real";
}
function ey(s) {
  return new Date(s).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}
function ty() {
  const s = N.useMemo(Jg, []),
    [c, l] = N.useState([]),
    [d, p] = N.useState([]),
    [y, S] = N.useState(""),
    [b, k] = N.useState(!0),
    [V, T] = N.useState(null),
    [K, D] = N.useState(null),
    [X, J] = N.useState(null),
    [O, W] = N.useState({}),
    [G, se] = N.useState(null);
  (N.useEffect(() => {
    fetch(`/api/credentials?source=${s}`, {
      cache: "no-store",
      credentials: "include",
    })
      .then(async (R) => {
        const B = await R.json().catch(() => null);
        if (!R.ok || !B?.ok || !B.credentials || !B.classes)
          throw new Error(B?.message || "Credentials could not be loaded.");
        (p(B.classes), l(B.credentials));
      })
      .catch((R) =>
        T(R instanceof Error ? R.message : "Credentials could not be loaded."),
      )
      .finally(() => k(!1));
  }, [s]),
    N.useEffect(() => {
      d.length && !d.some((R) => R.classCode === y) && S(d[0].classCode);
    }, [d, y]));
  const ke = N.useMemo(() => c.filter((R) => R.classes.includes(y)), [c, y]);
  async function ie(R) {
    (T(null), J(R.userId));
    try {
      const B = await fetch(`/api/credentials?source=${s}`, {
          method: "POST",
          cache: "no-store",
          credentials: "include",
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({ userId: R.userId }),
        }),
        re = await B.json().catch(() => null);
      if (!B.ok || !re?.ok) {
        T(re?.message || "The password could not be reset.");
        return;
      }
      (l((pe) =>
        pe.map((de) =>
          de.userId === R.userId
            ? {
                ...de,
                mustChange: !0,
                changedAt: re.changedAt || de.changedAt,
                lastResetAt: re.lastResetAt || de.lastResetAt,
              }
            : de,
        ),
      ),
        re.inviteLink && W((pe) => ({ ...pe, [R.userId]: re.inviteLink })),
        D(null));
    } catch {
      T("The password could not be reset.");
    } finally {
      J(null);
    }
  }
  async function Ae(R, B) {
    (T(null), se(R.userId));
    try {
      const re = await fetch(`/api/exam-time-allowance?source=${s}`, {
          method: "POST",
          cache: "no-store",
          credentials: "include",
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({ userId: R.userId, allowance: B }),
        }),
        pe = await re.json().catch(() => null);
      if (!re.ok || !pe?.ok) {
        T(pe?.message || "Extra time could not be saved.");
        return;
      }
      l((de) =>
        de.map((te) =>
          te.userId === R.userId
            ? { ...te, examTimeAllowance: pe.examTimeAllowance ?? B }
            : te,
        ),
      );
    } catch {
      T("Extra time could not be saved.");
    } finally {
      se(null);
    }
  }
  return a.jsx("section", {
    className: "credential-workspace",
    "aria-labelledby": "credentials-heading",
    children: a.jsxs("div", {
      className: "rounded-lg border border-border bg-card p-6 shadow-sm",
      children: [
        a.jsx("h2", {
          id: "credentials-heading",
          className: "text-2xl font-bold",
          children: "Pupil accounts",
        }),
        a.jsx("div", {
          className: "mt-5 flex flex-wrap gap-2",
          role: "tablist",
          "aria-label": "Class",
          children: d.map((R) =>
            a.jsx(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": y === R.classCode,
                title: R.className,
                onClick: () => {
                  (S(R.classCode), D(null));
                },
                className: `rounded-md border px-3 py-2 text-sm font-semibold ${y === R.classCode ? "border-emerald-700 bg-emerald-700 text-white" : "border-slate-300 bg-white text-slate-700"}`,
                children: R.classCode,
              },
              R.classCode,
            ),
          ),
        }),
        V &&
          a.jsx("p", {
            className: "mt-4 text-sm font-semibold text-red-700",
            role: "alert",
            children: V,
          }),
        b
          ? a.jsx("p", {
              className: "mt-6 text-sm text-muted-foreground",
              children: "Loading credentials...",
            })
          : a.jsx("div", {
              className: "mt-6 overflow-x-auto",
              children: a.jsxs("table", {
                className: "w-full border-collapse text-left text-sm",
                children: [
                  a.jsx("thead", {
                    children: a.jsxs("tr", {
                      className: "border-b",
                      children: [
                        a.jsx("th", { className: "py-2", children: "Name" }),
                        a.jsx("th", { children: "Username" }),
                        a.jsx("th", { children: "Classes" }),
                        a.jsx("th", { children: "Password" }),
                        a.jsx("th", { children: "Extra time" }),
                        a.jsx("th", { children: "Last reset" }),
                        a.jsx("th", {
                          className: "text-right",
                          children: "Action",
                        }),
                      ],
                    }),
                  }),
                  a.jsxs("tbody", {
                    children: [
                      ke.map((R) =>
                        a.jsxs(
                          "tr",
                          {
                            className: "border-b last:border-0",
                            children: [
                              a.jsx("td", {
                                className: "py-2.5 font-medium",
                                children: R.name,
                              }),
                              a.jsx("td", {
                                className: "font-mono font-bold",
                                children: R.loginId,
                              }),
                              a.jsx("td", { children: R.classes.join(", ") }),
                              a.jsx("td", {
                                children: R.mustChange
                                  ? "Starting password"
                                  : "Own password",
                              }),
                              a.jsx("td", {
                                children: a.jsx("select", {
                                  "aria-label": `Extra time for ${R.name}`,
                                  "data-exam-time-allowance": R.userId,
                                  disabled: G === R.userId,
                                  value: String(R.examTimeAllowance ?? 1),
                                  onChange: (B) =>
                                    void Ae(R, Number(B.target.value)),
                                  className:
                                    "rounded border border-slate-300 bg-white px-2 py-1 text-sm",
                                  children: Xg.map((B) =>
                                    a.jsx(
                                      "option",
                                      {
                                        value: String(B.value),
                                        children: B.label,
                                      },
                                      B.value,
                                    ),
                                  ),
                                }),
                              }),
                              a.jsx("td", {
                                className: "text-muted-foreground",
                                children: R.lastResetAt
                                  ? ey(R.lastResetAt)
                                  : "-",
                              }),
                              a.jsx("td", {
                                className: "text-right",
                                children:
                                  O[R.userId] && K !== R.userId
                                    ? a.jsxs("span", {
                                        className:
                                          "inline-flex items-center gap-3",
                                        children: [
                                          a.jsx("input", {
                                            readOnly: !0,
                                            "aria-label": `Invite link for ${R.name}`,
                                            value: O[R.userId],
                                            onFocus: (B) => B.target.select(),
                                            className:
                                              "w-48 rounded border border-slate-300 px-2 py-1 font-mono text-xs",
                                          }),
                                          a.jsx("button", {
                                            type: "button",
                                            onClick: () =>
                                              void navigator.clipboard?.writeText(
                                                O[R.userId],
                                              ),
                                            className:
                                              "font-semibold text-emerald-700",
                                            children: "Copy",
                                          }),
                                        ],
                                      })
                                    : K === R.userId
                                      ? a.jsxs("span", {
                                          className: "inline-flex gap-3",
                                          children: [
                                            a.jsx("button", {
                                              type: "button",
                                              disabled: X === R.userId,
                                              onClick: () => ie(R),
                                              className:
                                                "font-semibold text-red-700 disabled:text-slate-400",
                                              children:
                                                X === R.userId
                                                  ? "Resetting..."
                                                  : `Reset ${R.name}`,
                                            }),
                                            a.jsx("button", {
                                              type: "button",
                                              onClick: () => D(null),
                                              className: "text-slate-600",
                                              children: "Cancel",
                                            }),
                                          ],
                                        })
                                      : a.jsx("button", {
                                          type: "button",
                                          onClick: () => D(R.userId),
                                          className:
                                            "font-semibold text-emerald-700",
                                          children: "Reset password",
                                        }),
                              }),
                            ],
                          },
                          R.userId,
                        ),
                      ),
                      y && ke.length === 0
                        ? a.jsx("tr", {
                            children: a.jsxs("td", {
                              className: "py-6 text-muted-foreground",
                              colSpan: 7,
                              children: [
                                "No pupils have been added to ",
                                y,
                                " yet.",
                              ],
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            }),
      ],
    }),
  });
}
function ny() {
  return a.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      a.jsx("header", {
        className: "border-b border-border px-6 py-4",
        children: a.jsxs("h1", {
          className:
            "flex items-baseline gap-2 text-xl font-semibold text-foreground",
          children: [
            a.jsx(Ha, { size: "small" }),
            a.jsx("span", { children: "Admin" }),
          ],
        }),
      }),
      a.jsx("main", { className: "space-y-8 p-6", children: a.jsx(ty, {}) }),
    ],
  });
}
om.createRoot(document.getElementById("root")).render(
  a.jsx(qp.StrictMode, {
    children: a.jsx(qg, {
      appName: "Admin",
      allowedRoles: ["admin", "teacher"],
      productionUrl: "https://admin.comp.school",
      children: a.jsx(ny, {}),
    }),
  }),
);
