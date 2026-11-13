(function () {
  const y = document.createElement("link").relList;
  if (y && y.supports && y.supports("modulepreload")) return;
  for (const z of document.querySelectorAll('link[rel="modulepreload"]')) x(z);
  new MutationObserver((z) => {
    for (const E of z)
      if (E.type === "childList")
        for (const I of E.addedNodes)
          I.tagName === "LINK" && I.rel === "modulepreload" && x(I);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(z) {
    const E = {};
    return (
      z.integrity && (E.integrity = z.integrity),
      z.referrerPolicy && (E.referrerPolicy = z.referrerPolicy),
      z.crossOrigin === "use-credentials"
        ? (E.credentials = "include")
        : z.crossOrigin === "anonymous"
          ? (E.credentials = "omit")
          : (E.credentials = "same-origin"),
      E
    );
  }
  function x(z) {
    if (z.ep) return;
    z.ep = !0;
    const E = d(z);
    fetch(z.href, E);
  }
})();
function ic(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Is = { exports: {} },
  Er = {},
  Ds = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ha;
function df() {
  if (Ha) return Z;
  Ha = 1;
  var a = Symbol.for("react.element"),
    y = Symbol.for("react.portal"),
    d = Symbol.for("react.fragment"),
    x = Symbol.for("react.strict_mode"),
    z = Symbol.for("react.profiler"),
    E = Symbol.for("react.provider"),
    I = Symbol.for("react.context"),
    D = Symbol.for("react.forward_ref"),
    M = Symbol.for("react.suspense"),
    re = Symbol.for("react.memo"),
    W = Symbol.for("react.lazy"),
    q = Symbol.iterator;
  function K(p) {
    return p === null || typeof p != "object"
      ? null
      : ((p = (q && p[q]) || p["@@iterator"]),
        typeof p == "function" ? p : null);
  }
  var Me = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    U = Object.assign,
    B = {};
  function Q(p, w, V) {
    ((this.props = p),
      (this.context = w),
      (this.refs = B),
      (this.updater = V || Me));
  }
  ((Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (p, w) {
      if (typeof p != "object" && typeof p != "function" && p != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, p, w, "setState");
    }),
    (Q.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, "forceUpdate");
    }));
  function je() {}
  je.prototype = Q.prototype;
  function Pe(p, w, V) {
    ((this.props = p),
      (this.context = w),
      (this.refs = B),
      (this.updater = V || Me));
  }
  var Ue = (Pe.prototype = new je());
  ((Ue.constructor = Pe), U(Ue, Q.prototype), (Ue.isPureReactComponent = !0));
  var le = Array.isArray,
    me = Object.prototype.hasOwnProperty,
    oe = { current: null },
    de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ee(p, w, V) {
    var G,
      J = {},
      b = null,
      ae = null;
    if (w != null)
      for (G in (w.ref !== void 0 && (ae = w.ref),
      w.key !== void 0 && (b = "" + w.key),
      w))
        me.call(w, G) && !de.hasOwnProperty(G) && (J[G] = w[G]);
    var te = arguments.length - 2;
    if (te === 1) J.children = V;
    else if (1 < te) {
      for (var ye = Array(te), tt = 0; tt < te; tt++)
        ye[tt] = arguments[tt + 2];
      J.children = ye;
    }
    if (p && p.defaultProps)
      for (G in ((te = p.defaultProps), te)) J[G] === void 0 && (J[G] = te[G]);
    return {
      $$typeof: a,
      type: p,
      key: b,
      ref: ae,
      props: J,
      _owner: oe.current,
    };
  }
  function Ge(p, w) {
    return {
      $$typeof: a,
      type: p.type,
      key: w,
      ref: p.ref,
      props: p.props,
      _owner: p._owner,
    };
  }
  function et(p) {
    return typeof p == "object" && p !== null && p.$$typeof === a;
  }
  function st(p) {
    var w = { "=": "=0", ":": "=2" };
    return (
      "$" +
      p.replace(/[=:]/g, function (V) {
        return w[V];
      })
    );
  }
  var We = /\/+/g;
  function Ne(p, w) {
    return typeof p == "object" && p !== null && p.key != null
      ? st("" + p.key)
      : w.toString(36);
  }
  function ue(p, w, V, G, J) {
    var b = typeof p;
    (b === "undefined" || b === "boolean") && (p = null);
    var ae = !1;
    if (p === null) ae = !0;
    else
      switch (b) {
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case a:
            case y:
              ae = !0;
          }
      }
    if (ae)
      return (
        (ae = p),
        (J = J(ae)),
        (p = G === "" ? "." + Ne(ae, 0) : G),
        le(J)
          ? ((V = ""),
            p != null && (V = p.replace(We, "$&/") + "/"),
            ue(J, w, V, "", function (tt) {
              return tt;
            }))
          : J != null &&
            (et(J) &&
              (J = Ge(
                J,
                V +
                  (!J.key || (ae && ae.key === J.key)
                    ? ""
                    : ("" + J.key).replace(We, "$&/") + "/") +
                  p,
              )),
            w.push(J)),
        1
      );
    if (((ae = 0), (G = G === "" ? "." : G + ":"), le(p)))
      for (var te = 0; te < p.length; te++) {
        b = p[te];
        var ye = G + Ne(b, te);
        ae += ue(b, w, V, ye, J);
      }
    else if (((ye = K(p)), typeof ye == "function"))
      for (p = ye.call(p), te = 0; !(b = p.next()).done;)
        ((b = b.value), (ye = G + Ne(b, te++)), (ae += ue(b, w, V, ye, J)));
    else if (b === "object")
      throw (
        (w = String(p)),
        Error(
          "Objects are not valid as a React child (found: " +
            (w === "[object Object]"
              ? "object with keys {" + Object.keys(p).join(", ") + "}"
              : w) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return ae;
  }
  function he(p, w, V) {
    if (p == null) return p;
    var G = [],
      J = 0;
    return (
      ue(p, G, "", "", function (b) {
        return w.call(V, b, J++);
      }),
      G
    );
  }
  function ke(p) {
    if (p._status === -1) {
      var w = p._result;
      ((w = w()),
        w.then(
          function (V) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = V));
          },
          function (V) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = V));
          },
        ),
        p._status === -1 && ((p._status = 0), (p._result = w)));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var se = { current: null },
    _ = { transition: null },
    $ = {
      ReactCurrentDispatcher: se,
      ReactCurrentBatchConfig: _,
      ReactCurrentOwner: oe,
    };
  function L() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Z.Children = {
      map: he,
      forEach: function (p, w, V) {
        he(
          p,
          function () {
            w.apply(this, arguments);
          },
          V,
        );
      },
      count: function (p) {
        var w = 0;
        return (
          he(p, function () {
            w++;
          }),
          w
        );
      },
      toArray: function (p) {
        return (
          he(p, function (w) {
            return w;
          }) || []
        );
      },
      only: function (p) {
        if (!et(p))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return p;
      },
    }),
    (Z.Component = Q),
    (Z.Fragment = d),
    (Z.Profiler = z),
    (Z.PureComponent = Pe),
    (Z.StrictMode = x),
    (Z.Suspense = M),
    (Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $),
    (Z.act = L),
    (Z.cloneElement = function (p, w, V) {
      if (p == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            p +
            ".",
        );
      var G = U({}, p.props),
        J = p.key,
        b = p.ref,
        ae = p._owner;
      if (w != null) {
        if (
          (w.ref !== void 0 && ((b = w.ref), (ae = oe.current)),
          w.key !== void 0 && (J = "" + w.key),
          p.type && p.type.defaultProps)
        )
          var te = p.type.defaultProps;
        for (ye in w)
          me.call(w, ye) &&
            !de.hasOwnProperty(ye) &&
            (G[ye] = w[ye] === void 0 && te !== void 0 ? te[ye] : w[ye]);
      }
      var ye = arguments.length - 2;
      if (ye === 1) G.children = V;
      else if (1 < ye) {
        te = Array(ye);
        for (var tt = 0; tt < ye; tt++) te[tt] = arguments[tt + 2];
        G.children = te;
      }
      return {
        $$typeof: a,
        type: p.type,
        key: J,
        ref: b,
        props: G,
        _owner: ae,
      };
    }),
    (Z.createContext = function (p) {
      return (
        (p = {
          $$typeof: I,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (p.Provider = { $$typeof: E, _context: p }),
        (p.Consumer = p)
      );
    }),
    (Z.createElement = Ee),
    (Z.createFactory = function (p) {
      var w = Ee.bind(null, p);
      return ((w.type = p), w);
    }),
    (Z.createRef = function () {
      return { current: null };
    }),
    (Z.forwardRef = function (p) {
      return { $$typeof: D, render: p };
    }),
    (Z.isValidElement = et),
    (Z.lazy = function (p) {
      return { $$typeof: W, _payload: { _status: -1, _result: p }, _init: ke };
    }),
    (Z.memo = function (p, w) {
      return { $$typeof: re, type: p, compare: w === void 0 ? null : w };
    }),
    (Z.startTransition = function (p) {
      var w = _.transition;
      _.transition = {};
      try {
        p();
      } finally {
        _.transition = w;
      }
    }),
    (Z.unstable_act = L),
    (Z.useCallback = function (p, w) {
      return se.current.useCallback(p, w);
    }),
    (Z.useContext = function (p) {
      return se.current.useContext(p);
    }),
    (Z.useDebugValue = function () {}),
    (Z.useDeferredValue = function (p) {
      return se.current.useDeferredValue(p);
    }),
    (Z.useEffect = function (p, w) {
      return se.current.useEffect(p, w);
    }),
    (Z.useId = function () {
      return se.current.useId();
    }),
    (Z.useImperativeHandle = function (p, w, V) {
      return se.current.useImperativeHandle(p, w, V);
    }),
    (Z.useInsertionEffect = function (p, w) {
      return se.current.useInsertionEffect(p, w);
    }),
    (Z.useLayoutEffect = function (p, w) {
      return se.current.useLayoutEffect(p, w);
    }),
    (Z.useMemo = function (p, w) {
      return se.current.useMemo(p, w);
    }),
    (Z.useReducer = function (p, w, V) {
      return se.current.useReducer(p, w, V);
    }),
    (Z.useRef = function (p) {
      return se.current.useRef(p);
    }),
    (Z.useState = function (p) {
      return se.current.useState(p);
    }),
    (Z.useSyncExternalStore = function (p, w, V) {
      return se.current.useSyncExternalStore(p, w, V);
    }),
    (Z.useTransition = function () {
      return se.current.useTransition();
    }),
    (Z.version = "18.3.1"),
    Z
  );
}
var Ba;
function Vs() {
  return (Ba || ((Ba = 1), (Ds.exports = df())), Ds.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Va;
function ff() {
  if (Va) return Er;
  Va = 1;
  var a = Vs(),
    y = Symbol.for("react.element"),
    d = Symbol.for("react.fragment"),
    x = Object.prototype.hasOwnProperty,
    z = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(D, M, re) {
    var W,
      q = {},
      K = null,
      Me = null;
    (re !== void 0 && (K = "" + re),
      M.key !== void 0 && (K = "" + M.key),
      M.ref !== void 0 && (Me = M.ref));
    for (W in M) x.call(M, W) && !E.hasOwnProperty(W) && (q[W] = M[W]);
    if (D && D.defaultProps)
      for (W in ((M = D.defaultProps), M)) q[W] === void 0 && (q[W] = M[W]);
    return {
      $$typeof: y,
      type: D,
      key: K,
      ref: Me,
      props: q,
      _owner: z.current,
    };
  }
  return ((Er.Fragment = d), (Er.jsx = I), (Er.jsxs = I), Er);
}
var Qa;
function pf() {
  return (Qa || ((Qa = 1), (Is.exports = ff())), Is.exports);
}
var s = pf(),
  ie = Vs();
const mf = ic(ie);
var Al = {},
  Fs = { exports: {} },
  be = {},
  As = { exports: {} },
  Us = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Za;
function hf() {
  return (
    Za ||
      ((Za = 1),
      (function (a) {
        function y(_, $) {
          var L = _.length;
          _.push($);
          e: for (; 0 < L;) {
            var p = (L - 1) >>> 1,
              w = _[p];
            if (0 < z(w, $)) ((_[p] = $), (_[L] = w), (L = p));
            else break e;
          }
        }
        function d(_) {
          return _.length === 0 ? null : _[0];
        }
        function x(_) {
          if (_.length === 0) return null;
          var $ = _[0],
            L = _.pop();
          if (L !== $) {
            _[0] = L;
            e: for (var p = 0, w = _.length, V = w >>> 1; p < V;) {
              var G = 2 * (p + 1) - 1,
                J = _[G],
                b = G + 1,
                ae = _[b];
              if (0 > z(J, L))
                b < w && 0 > z(ae, J)
                  ? ((_[p] = ae), (_[b] = L), (p = b))
                  : ((_[p] = J), (_[G] = L), (p = G));
              else if (b < w && 0 > z(ae, L))
                ((_[p] = ae), (_[b] = L), (p = b));
              else break e;
            }
          }
          return $;
        }
        function z(_, $) {
          var L = _.sortIndex - $.sortIndex;
          return L !== 0 ? L : _.id - $.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var E = performance;
          a.unstable_now = function () {
            return E.now();
          };
        } else {
          var I = Date,
            D = I.now();
          a.unstable_now = function () {
            return I.now() - D;
          };
        }
        var M = [],
          re = [],
          W = 1,
          q = null,
          K = 3,
          Me = !1,
          U = !1,
          B = !1,
          Q = typeof setTimeout == "function" ? setTimeout : null,
          je = typeof clearTimeout == "function" ? clearTimeout : null,
          Pe = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Ue(_) {
          for (var $ = d(re); $ !== null;) {
            if ($.callback === null) x(re);
            else if ($.startTime <= _)
              (x(re), ($.sortIndex = $.expirationTime), y(M, $));
            else break;
            $ = d(re);
          }
        }
        function le(_) {
          if (((B = !1), Ue(_), !U))
            if (d(M) !== null) ((U = !0), ke(me));
            else {
              var $ = d(re);
              $ !== null && se(le, $.startTime - _);
            }
        }
        function me(_, $) {
          ((U = !1), B && ((B = !1), je(Ee), (Ee = -1)), (Me = !0));
          var L = K;
          try {
            for (
              Ue($), q = d(M);
              q !== null && (!(q.expirationTime > $) || (_ && !st()));
            ) {
              var p = q.callback;
              if (typeof p == "function") {
                ((q.callback = null), (K = q.priorityLevel));
                var w = p(q.expirationTime <= $);
                (($ = a.unstable_now()),
                  typeof w == "function"
                    ? (q.callback = w)
                    : q === d(M) && x(M),
                  Ue($));
              } else x(M);
              q = d(M);
            }
            if (q !== null) var V = !0;
            else {
              var G = d(re);
              (G !== null && se(le, G.startTime - $), (V = !1));
            }
            return V;
          } finally {
            ((q = null), (K = L), (Me = !1));
          }
        }
        var oe = !1,
          de = null,
          Ee = -1,
          Ge = 5,
          et = -1;
        function st() {
          return !(a.unstable_now() - et < Ge);
        }
        function We() {
          if (de !== null) {
            var _ = a.unstable_now();
            et = _;
            var $ = !0;
            try {
              $ = de(!0, _);
            } finally {
              $ ? Ne() : ((oe = !1), (de = null));
            }
          } else oe = !1;
        }
        var Ne;
        if (typeof Pe == "function")
          Ne = function () {
            Pe(We);
          };
        else if (typeof MessageChannel < "u") {
          var ue = new MessageChannel(),
            he = ue.port2;
          ((ue.port1.onmessage = We),
            (Ne = function () {
              he.postMessage(null);
            }));
        } else
          Ne = function () {
            Q(We, 0);
          };
        function ke(_) {
          ((de = _), oe || ((oe = !0), Ne()));
        }
        function se(_, $) {
          Ee = Q(function () {
            _(a.unstable_now());
          }, $);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (_) {
            _.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            U || Me || ((U = !0), ke(me));
          }),
          (a.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ge = 0 < _ ? Math.floor(1e3 / _) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return K;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return d(M);
          }),
          (a.unstable_next = function (_) {
            switch (K) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = K;
            }
            var L = K;
            K = $;
            try {
              return _();
            } finally {
              K = L;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (_, $) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                _ = 3;
            }
            var L = K;
            K = _;
            try {
              return $();
            } finally {
              K = L;
            }
          }),
          (a.unstable_scheduleCallback = function (_, $, L) {
            var p = a.unstable_now();
            switch (
              (typeof L == "object" && L !== null
                ? ((L = L.delay),
                  (L = typeof L == "number" && 0 < L ? p + L : p))
                : (L = p),
              _)
            ) {
              case 1:
                var w = -1;
                break;
              case 2:
                w = 250;
                break;
              case 5:
                w = 1073741823;
                break;
              case 4:
                w = 1e4;
                break;
              default:
                w = 5e3;
            }
            return (
              (w = L + w),
              (_ = {
                id: W++,
                callback: $,
                priorityLevel: _,
                startTime: L,
                expirationTime: w,
                sortIndex: -1,
              }),
              L > p
                ? ((_.sortIndex = L),
                  y(re, _),
                  d(M) === null &&
                    _ === d(re) &&
                    (B ? (je(Ee), (Ee = -1)) : (B = !0), se(le, L - p)))
                : ((_.sortIndex = w), y(M, _), U || Me || ((U = !0), ke(me))),
              _
            );
          }),
          (a.unstable_shouldYield = st),
          (a.unstable_wrapCallback = function (_) {
            var $ = K;
            return function () {
              var L = K;
              K = $;
              try {
                return _.apply(this, arguments);
              } finally {
                K = L;
              }
            };
          }));
      })(Us)),
    Us
  );
}
var Ga;
function yf() {
  return (Ga || ((Ga = 1), (As.exports = hf())), As.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ka;
function gf() {
  if (Ka) return be;
  Ka = 1;
  var a = Vs(),
    y = yf();
  function d(e) {
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
  var x = new Set(),
    z = {};
  function E(e, t) {
    (I(e, t), I(e + "Capture", t));
  }
  function I(e, t) {
    for (z[e] = t, e = 0; e < t.length; e++) x.add(t[e]);
  }
  var D = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    M = Object.prototype.hasOwnProperty,
    re =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    W = {},
    q = {};
  function K(e) {
    return M.call(q, e)
      ? !0
      : M.call(W, e)
        ? !1
        : re.test(e)
          ? (q[e] = !0)
          : ((W[e] = !0), !1);
  }
  function Me(e, t, n, r) {
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
  function U(e, t, n, r) {
    if (t === null || typeof t > "u" || Me(e, t, n, r)) return !0;
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
  function B(e, t, n, r, l, o, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i));
  }
  var Q = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Q[e] = new B(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Q[t] = new B(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        Q[e] = new B(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      Q[e] = new B(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Q[e] = new B(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Q[e] = new B(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Q[e] = new B(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Q[e] = new B(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Q[e] = new B(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var je = /[\-:]([a-z])/g;
  function Pe(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(je, Pe);
      Q[t] = new B(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(je, Pe);
        Q[t] = new B(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(je, Pe);
      Q[t] = new B(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Q[e] = new B(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Q.xlinkHref = new B(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Q[e] = new B(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function Ue(e, t, n, r) {
    var l = Q.hasOwnProperty(t) ? Q[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (U(t, n, l, r) && (n = null),
      r || l === null
        ? K(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var le = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    me = Symbol.for("react.element"),
    oe = Symbol.for("react.portal"),
    de = Symbol.for("react.fragment"),
    Ee = Symbol.for("react.strict_mode"),
    Ge = Symbol.for("react.profiler"),
    et = Symbol.for("react.provider"),
    st = Symbol.for("react.context"),
    We = Symbol.for("react.forward_ref"),
    Ne = Symbol.for("react.suspense"),
    ue = Symbol.for("react.suspense_list"),
    he = Symbol.for("react.memo"),
    ke = Symbol.for("react.lazy"),
    se = Symbol.for("react.offscreen"),
    _ = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (_ && e[_]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var L = Object.assign,
    p;
  function w(e) {
    if (p === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        p = (t && t[1]) || "";
      }
    return (
      `
` +
      p +
      e
    );
  }
  var V = !1;
  function G(e, t) {
    if (!e || V) return "";
    V = !0;
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
          } catch (g) {
            var r = g;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (g) {
            r = g;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (g) {
          r = g;
        }
        e();
      }
    } catch (g) {
      if (g && r && typeof g.stack == "string") {
        for (
          var l = g.stack.split(`
`),
            o = r.stack.split(`
`),
            i = l.length - 1,
            u = o.length - 1;
          1 <= i && 0 <= u && l[i] !== o[u];
        )
          u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (l[i] !== o[u]) {
            if (i !== 1 || u !== 1)
              do
                if ((i--, u--, 0 > u || l[i] !== o[u])) {
                  var c =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      c.includes("<anonymous>") &&
                      (c = c.replace("<anonymous>", e.displayName)),
                    c
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      ((V = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? w(e) : "";
  }
  function J(e) {
    switch (e.tag) {
      case 5:
        return w(e.type);
      case 16:
        return w("Lazy");
      case 13:
        return w("Suspense");
      case 19:
        return w("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = G(e.type, !1)), e);
      case 11:
        return ((e = G(e.type.render, !1)), e);
      case 1:
        return ((e = G(e.type, !0)), e);
      default:
        return "";
    }
  }
  function b(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case de:
        return "Fragment";
      case oe:
        return "Portal";
      case Ge:
        return "Profiler";
      case Ee:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case ue:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case st:
          return (e.displayName || "Context") + ".Consumer";
        case et:
          return (e._context.displayName || "Context") + ".Provider";
        case We:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case he:
          return (
            (t = e.displayName || null),
            t !== null ? t : b(e.type) || "Memo"
          );
        case ke:
          ((t = e._payload), (e = e._init));
          try {
            return b(e(t));
          } catch {}
      }
    return null;
  }
  function ae(e) {
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
        return b(t);
      case 8:
        return t === Ee ? "StrictMode" : "Mode";
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
  function te(e) {
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
  function ye(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function tt(e) {
    var t = ye(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            ((r = "" + i), o.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Mr(e) {
    e._valueTracker || (e._valueTracker = tt(e));
  }
  function Ks(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ye(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Pr(e) {
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
  function $l(e, t) {
    var n = t.checked;
    return L({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ys(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = te(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Xs(e, t) {
    ((t = t.checked), t != null && Ue(e, "checked", t, !1));
  }
  function Hl(e, t) {
    Xs(e, t);
    var n = te(t.value),
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
      ? Bl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Bl(e, t.type, te(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function qs(e, t, n) {
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
  function Bl(e, t, n) {
    (t !== "number" || Pr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var $n = Array.isArray;
  function yn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + te(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Vl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(d(91));
    return L({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Js(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(d(92));
        if ($n(n)) {
          if (1 < n.length) throw Error(d(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: te(n) };
  }
  function bs(e, t) {
    var n = te(t.value),
      r = te(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function ei(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ti(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ql(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ti(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Nr,
    ni = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Nr = Nr || document.createElement("div"),
            Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Nr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Hn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bn = {
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
    mc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bn).forEach(function (e) {
    mc.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bn[t] = Bn[e]));
    });
  });
  function ri(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Bn.hasOwnProperty(e) && Bn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function li(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = ri(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var hc = L(
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
  function Zl(e, t) {
    if (t) {
      if (hc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(d(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(d(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(d(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(d(62));
    }
  }
  function Gl(e, t) {
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
  var Kl = null;
  function Yl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Xl = null,
    gn = null,
    vn = null;
  function oi(e) {
    if ((e = dr(e))) {
      if (typeof Xl != "function") throw Error(d(280));
      var t = e.stateNode;
      t && ((t = br(t)), Xl(e.stateNode, e.type, t));
    }
  }
  function si(e) {
    gn ? (vn ? vn.push(e) : (vn = [e])) : (gn = e);
  }
  function ii() {
    if (gn) {
      var e = gn,
        t = vn;
      if (((vn = gn = null), oi(e), t)) for (e = 0; e < t.length; e++) oi(t[e]);
    }
  }
  function ui(e, t) {
    return e(t);
  }
  function ai() {}
  var ql = !1;
  function ci(e, t, n) {
    if (ql) return e(t, n);
    ql = !0;
    try {
      return ui(e, t, n);
    } finally {
      ((ql = !1), (gn !== null || vn !== null) && (ai(), ii()));
    }
  }
  function Vn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = br(n);
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
    if (n && typeof n != "function") throw Error(d(231, t, typeof n));
    return n;
  }
  var Jl = !1;
  if (D)
    try {
      var Qn = {};
      (Object.defineProperty(Qn, "passive", {
        get: function () {
          Jl = !0;
        },
      }),
        window.addEventListener("test", Qn, Qn),
        window.removeEventListener("test", Qn, Qn));
    } catch {
      Jl = !1;
    }
  function yc(e, t, n, r, l, o, i, u, c) {
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, g);
    } catch (S) {
      this.onError(S);
    }
  }
  var Zn = !1,
    Lr = null,
    Rr = !1,
    bl = null,
    gc = {
      onError: function (e) {
        ((Zn = !0), (Lr = e));
      },
    };
  function vc(e, t, n, r, l, o, i, u, c) {
    ((Zn = !1), (Lr = null), yc.apply(gc, arguments));
  }
  function xc(e, t, n, r, l, o, i, u, c) {
    if ((vc.apply(this, arguments), Zn)) {
      if (Zn) {
        var g = Lr;
        ((Zn = !1), (Lr = null));
      } else throw Error(d(198));
      Rr || ((Rr = !0), (bl = g));
    }
  }
  function nn(e) {
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
  function di(e) {
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
  function fi(e) {
    if (nn(e) !== e) throw Error(d(188));
  }
  function kc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = nn(e)), t === null)) throw Error(d(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ;) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o;) {
          if (o === n) return (fi(l), e);
          if (o === r) return (fi(l), t);
          o = o.sibling;
        }
        throw Error(d(188));
      }
      if (n.return !== r.return) ((n = l), (r = o));
      else {
        for (var i = !1, u = l.child; u;) {
          if (u === n) {
            ((i = !0), (n = l), (r = o));
            break;
          }
          if (u === r) {
            ((i = !0), (r = l), (n = o));
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u;) {
            if (u === n) {
              ((i = !0), (n = o), (r = l));
              break;
            }
            if (u === r) {
              ((i = !0), (r = o), (n = l));
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(d(189));
        }
      }
      if (n.alternate !== r) throw Error(d(190));
    }
    if (n.tag !== 3) throw Error(d(188));
    return n.stateNode.current === n ? e : t;
  }
  function pi(e) {
    return ((e = kc(e)), e !== null ? mi(e) : null);
  }
  function mi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = mi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var hi = y.unstable_scheduleCallback,
    yi = y.unstable_cancelCallback,
    wc = y.unstable_shouldYield,
    Sc = y.unstable_requestPaint,
    ze = y.unstable_now,
    jc = y.unstable_getCurrentPriorityLevel,
    eo = y.unstable_ImmediatePriority,
    gi = y.unstable_UserBlockingPriority,
    Tr = y.unstable_NormalPriority,
    zc = y.unstable_LowPriority,
    vi = y.unstable_IdlePriority,
    Or = null,
    kt = null;
  function Cc(e) {
    if (kt && typeof kt.onCommitFiberRoot == "function")
      try {
        kt.onCommitFiberRoot(Or, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var pt = Math.clz32 ? Math.clz32 : Mc,
    Ec = Math.log,
    _c = Math.LN2;
  function Mc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ec(e) / _c) | 0)) | 0);
  }
  var Ir = 64,
    Dr = 4194304;
  function Gn(e) {
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
  function Fr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? (r = Gn(u)) : ((o &= i), o !== 0 && (r = Gn(o)));
    } else ((i = n & ~l), i !== 0 ? (r = Gn(i)) : o !== 0 && (r = Gn(o)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t;)
        ((n = 31 - pt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function Pc(e, t) {
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
  function Nc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;
    ) {
      var i = 31 - pt(o),
        u = 1 << i,
        c = l[i];
      (c === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = Pc(u, t))
        : c <= t && (e.expiredLanes |= u),
        (o &= ~u));
    }
  }
  function to(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function xi() {
    var e = Ir;
    return ((Ir <<= 1), (Ir & 4194240) === 0 && (Ir = 64), e);
  }
  function no(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Kn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - pt(t)),
      (e[t] = n));
  }
  function Lc(e, t) {
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
      var l = 31 - pt(n),
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function ro(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - pt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var ne = 0;
  function ki(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var wi,
    lo,
    Si,
    ji,
    zi,
    oo = !1,
    Ar = [],
    Dt = null,
    Ft = null,
    At = null,
    Yn = new Map(),
    Xn = new Map(),
    Ut = [],
    Rc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Ci(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ft = null;
        break;
      case "mouseover":
      case "mouseout":
        At = null;
        break;
      case "pointerover":
      case "pointerout":
        Yn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xn.delete(t.pointerId);
    }
  }
  function qn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = dr(t)), t !== null && lo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Tc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Dt = qn(Dt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Ft = qn(Ft, e, t, n, r, l)), !0);
      case "mouseover":
        return ((At = qn(At, e, t, n, r, l)), !0);
      case "pointerover":
        var o = l.pointerId;
        return (Yn.set(o, qn(Yn.get(o) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (o = l.pointerId),
          Xn.set(o, qn(Xn.get(o) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function Ei(e) {
    var t = rn(e.target);
    if (t !== null) {
      var n = nn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = di(n)), t !== null)) {
            ((e.blockedOn = t),
              zi(e.priority, function () {
                Si(n);
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
  function Ur(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = io(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Kl = r), n.target.dispatchEvent(r), (Kl = null));
      } else return ((t = dr(n)), t !== null && lo(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function _i(e, t, n) {
    Ur(e) && n.delete(t);
  }
  function Oc() {
    ((oo = !1),
      Dt !== null && Ur(Dt) && (Dt = null),
      Ft !== null && Ur(Ft) && (Ft = null),
      At !== null && Ur(At) && (At = null),
      Yn.forEach(_i),
      Xn.forEach(_i));
  }
  function Jn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      oo ||
        ((oo = !0),
        y.unstable_scheduleCallback(y.unstable_NormalPriority, Oc)));
  }
  function bn(e) {
    function t(l) {
      return Jn(l, e);
    }
    if (0 < Ar.length) {
      Jn(Ar[0], e);
      for (var n = 1; n < Ar.length; n++) {
        var r = Ar[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Dt !== null && Jn(Dt, e),
        Ft !== null && Jn(Ft, e),
        At !== null && Jn(At, e),
        Yn.forEach(t),
        Xn.forEach(t),
        n = 0;
      n < Ut.length;
      n++
    )
      ((r = Ut[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null);)
      (Ei(n), n.blockedOn === null && Ut.shift());
  }
  var xn = le.ReactCurrentBatchConfig,
    Wr = !0;
  function Ic(e, t, n, r) {
    var l = ne,
      o = xn.transition;
    xn.transition = null;
    try {
      ((ne = 1), so(e, t, n, r));
    } finally {
      ((ne = l), (xn.transition = o));
    }
  }
  function Dc(e, t, n, r) {
    var l = ne,
      o = xn.transition;
    xn.transition = null;
    try {
      ((ne = 4), so(e, t, n, r));
    } finally {
      ((ne = l), (xn.transition = o));
    }
  }
  function so(e, t, n, r) {
    if (Wr) {
      var l = io(e, t, n, r);
      if (l === null) (Co(e, t, r, $r, n), Ci(e, r));
      else if (Tc(l, e, t, n, r)) r.stopPropagation();
      else if ((Ci(e, r), t & 4 && -1 < Rc.indexOf(e))) {
        for (; l !== null;) {
          var o = dr(l);
          if (
            (o !== null && wi(o),
            (o = io(e, t, n, r)),
            o === null && Co(e, t, r, $r, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Co(e, t, r, null, n);
    }
  }
  var $r = null;
  function io(e, t, n, r) {
    if ((($r = null), (e = Yl(r)), (e = rn(e)), e !== null))
      if (((t = nn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = di(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (($r = e), null);
  }
  function Mi(e) {
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
        switch (jc()) {
          case eo:
            return 1;
          case gi:
            return 4;
          case Tr:
          case zc:
            return 16;
          case vi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Wt = null,
    uo = null,
    Hr = null;
  function Pi() {
    if (Hr) return Hr;
    var e,
      t = uo,
      n = t.length,
      r,
      l = "value" in Wt ? Wt.value : Wt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Hr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Br(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Vr() {
    return !0;
  }
  function Ni() {
    return !1;
  }
  function nt(e) {
    function t(n, r, l, o, i) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null));
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Vr
          : Ni),
        (this.isPropagationStopped = Ni),
        this
      );
    }
    return (
      L(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Vr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Vr));
        },
        persist: function () {},
        isPersistent: Vr,
      }),
      t
    );
  }
  var kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ao = nt(kn),
    er = L({}, kn, { view: 0, detail: 0 }),
    Fc = nt(er),
    co,
    fo,
    tr,
    Qr = L({}, er, {
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
      getModifierState: mo,
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
          : (e !== tr &&
              (tr && e.type === "mousemove"
                ? ((co = e.screenX - tr.screenX), (fo = e.screenY - tr.screenY))
                : (fo = co = 0),
              (tr = e)),
            co);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : fo;
      },
    }),
    Li = nt(Qr),
    Ac = L({}, Qr, { dataTransfer: 0 }),
    Uc = nt(Ac),
    Wc = L({}, er, { relatedTarget: 0 }),
    po = nt(Wc),
    $c = L({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hc = nt($c),
    Bc = L({}, kn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Vc = nt(Bc),
    Qc = L({}, kn, { data: 0 }),
    Ri = nt(Qc),
    Zc = {
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
    Gc = {
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
    Kc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Yc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Kc[e])
        ? !!t[e]
        : !1;
  }
  function mo() {
    return Yc;
  }
  var Xc = L({}, er, {
      key: function (e) {
        if (e.key) {
          var t = Zc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Gc[e.keyCode] || "Unidentified"
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
      getModifierState: mo,
      charCode: function (e) {
        return e.type === "keypress" ? Br(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Br(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    qc = nt(Xc),
    Jc = L({}, Qr, {
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
    Ti = nt(Jc),
    bc = L({}, er, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: mo,
    }),
    ed = nt(bc),
    td = L({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nd = nt(td),
    rd = L({}, Qr, {
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
    ld = nt(rd),
    od = [9, 13, 27, 32],
    ho = D && "CompositionEvent" in window,
    nr = null;
  D && "documentMode" in document && (nr = document.documentMode);
  var sd = D && "TextEvent" in window && !nr,
    Oi = D && (!ho || (nr && 8 < nr && 11 >= nr)),
    Ii = " ",
    Di = !1;
  function Fi(e, t) {
    switch (e) {
      case "keyup":
        return od.indexOf(t.keyCode) !== -1;
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
  function Ai(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var wn = !1;
  function id(e, t) {
    switch (e) {
      case "compositionend":
        return Ai(t);
      case "keypress":
        return t.which !== 32 ? null : ((Di = !0), Ii);
      case "textInput":
        return ((e = t.data), e === Ii && Di ? null : e);
      default:
        return null;
    }
  }
  function ud(e, t) {
    if (wn)
      return e === "compositionend" || (!ho && Fi(e, t))
        ? ((e = Pi()), (Hr = uo = Wt = null), (wn = !1), e)
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
        return Oi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ad = {
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
  function Ui(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ad[e.type] : t === "textarea";
  }
  function Wi(e, t, n, r) {
    (si(r),
      (t = Xr(t, "onChange")),
      0 < t.length &&
        ((n = new ao("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var rr = null,
    lr = null;
  function cd(e) {
    lu(e, 0);
  }
  function Zr(e) {
    var t = En(e);
    if (Ks(t)) return e;
  }
  function dd(e, t) {
    if (e === "change") return t;
  }
  var $i = !1;
  if (D) {
    var yo;
    if (D) {
      var go = "oninput" in document;
      if (!go) {
        var Hi = document.createElement("div");
        (Hi.setAttribute("oninput", "return;"),
          (go = typeof Hi.oninput == "function"));
      }
      yo = go;
    } else yo = !1;
    $i = yo && (!document.documentMode || 9 < document.documentMode);
  }
  function Bi() {
    rr && (rr.detachEvent("onpropertychange", Vi), (lr = rr = null));
  }
  function Vi(e) {
    if (e.propertyName === "value" && Zr(lr)) {
      var t = [];
      (Wi(t, lr, e, Yl(e)), ci(cd, t));
    }
  }
  function fd(e, t, n) {
    e === "focusin"
      ? (Bi(), (rr = t), (lr = n), rr.attachEvent("onpropertychange", Vi))
      : e === "focusout" && Bi();
  }
  function pd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Zr(lr);
  }
  function md(e, t) {
    if (e === "click") return Zr(t);
  }
  function hd(e, t) {
    if (e === "input" || e === "change") return Zr(t);
  }
  function yd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var mt = typeof Object.is == "function" ? Object.is : yd;
  function or(e, t) {
    if (mt(e, t)) return !0;
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
      var l = n[r];
      if (!M.call(t, l) || !mt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Qi(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Zi(e, t) {
    var n = Qi(e);
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
      n = Qi(n);
    }
  }
  function Gi(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Gi(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ki() {
    for (var e = window, t = Pr(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Pr(e.document);
    }
    return t;
  }
  function vo(e) {
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
  function gd(e) {
    var t = Ki(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Gi(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && vo(n)) {
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
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          ((r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Zi(n, o)));
          var i = Zi(n, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
  var vd = D && "documentMode" in document && 11 >= document.documentMode,
    Sn = null,
    xo = null,
    sr = null,
    ko = !1;
  function Yi(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ko ||
      Sn == null ||
      Sn !== Pr(r) ||
      ((r = Sn),
      "selectionStart" in r && vo(r)
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
      (sr && or(sr, r)) ||
        ((sr = r),
        (r = Xr(xo, "onSelect")),
        0 < r.length &&
          ((t = new ao("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Sn))));
  }
  function Gr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var jn = {
      animationend: Gr("Animation", "AnimationEnd"),
      animationiteration: Gr("Animation", "AnimationIteration"),
      animationstart: Gr("Animation", "AnimationStart"),
      transitionend: Gr("Transition", "TransitionEnd"),
    },
    wo = {},
    Xi = {};
  D &&
    ((Xi = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete jn.animationend.animation,
      delete jn.animationiteration.animation,
      delete jn.animationstart.animation),
    "TransitionEvent" in window || delete jn.transitionend.transition);
  function Kr(e) {
    if (wo[e]) return wo[e];
    if (!jn[e]) return e;
    var t = jn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Xi) return (wo[e] = t[n]);
    return e;
  }
  var qi = Kr("animationend"),
    Ji = Kr("animationiteration"),
    bi = Kr("animationstart"),
    eu = Kr("transitionend"),
    tu = new Map(),
    nu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function $t(e, t) {
    (tu.set(e, t), E(t, [e]));
  }
  for (var So = 0; So < nu.length; So++) {
    var jo = nu[So],
      xd = jo.toLowerCase(),
      kd = jo[0].toUpperCase() + jo.slice(1);
    $t(xd, "on" + kd);
  }
  ($t(qi, "onAnimationEnd"),
    $t(Ji, "onAnimationIteration"),
    $t(bi, "onAnimationStart"),
    $t("dblclick", "onDoubleClick"),
    $t("focusin", "onFocus"),
    $t("focusout", "onBlur"),
    $t(eu, "onTransitionEnd"),
    I("onMouseEnter", ["mouseout", "mouseover"]),
    I("onMouseLeave", ["mouseout", "mouseover"]),
    I("onPointerEnter", ["pointerout", "pointerover"]),
    I("onPointerLeave", ["pointerout", "pointerover"]),
    E(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    E(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    E(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    E(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    E(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ir =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    wd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ir),
    );
  function ru(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), xc(r, t, void 0, e), (e.currentTarget = null));
  }
  function lu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var u = r[i],
              c = u.instance,
              g = u.currentTarget;
            if (((u = u.listener), c !== o && l.isPropagationStopped()))
              break e;
            (ru(l, u, g), (o = c));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = r[i]),
              (c = u.instance),
              (g = u.currentTarget),
              (u = u.listener),
              c !== o && l.isPropagationStopped())
            )
              break e;
            (ru(l, u, g), (o = c));
          }
      }
    }
    if (Rr) throw ((e = bl), (Rr = !1), (bl = null), e);
  }
  function fe(e, t) {
    var n = t[Lo];
    n === void 0 && (n = t[Lo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (ou(t, e, 2, !1), n.add(r));
  }
  function zo(e, t, n) {
    var r = 0;
    (t && (r |= 4), ou(n, e, r, t));
  }
  var Yr = "_reactListening" + Math.random().toString(36).slice(2);
  function ur(e) {
    if (!e[Yr]) {
      ((e[Yr] = !0),
        x.forEach(function (n) {
          n !== "selectionchange" && (wd.has(n) || zo(n, !1, e), zo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Yr] || ((t[Yr] = !0), zo("selectionchange", !1, t));
    }
  }
  function ou(e, t, n, r) {
    switch (Mi(t)) {
      case 1:
        var l = Ic;
        break;
      case 4:
        l = Dc;
        break;
      default:
        l = so;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Jl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Co(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null;) {
              var c = i.tag;
              if (
                (c === 3 || c === 4) &&
                ((c = i.stateNode.containerInfo),
                c === l || (c.nodeType === 8 && c.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; u !== null;) {
            if (((i = rn(u)), i === null)) return;
            if (((c = i.tag), c === 5 || c === 6)) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    ci(function () {
      var g = o,
        S = Yl(n),
        j = [];
      e: {
        var k = tu.get(e);
        if (k !== void 0) {
          var P = ao,
            R = e;
          switch (e) {
            case "keypress":
              if (Br(n) === 0) break e;
            case "keydown":
            case "keyup":
              P = qc;
              break;
            case "focusin":
              ((R = "focus"), (P = po));
              break;
            case "focusout":
              ((R = "blur"), (P = po));
              break;
            case "beforeblur":
            case "afterblur":
              P = po;
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
              P = Li;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              P = Uc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              P = ed;
              break;
            case qi:
            case Ji:
            case bi:
              P = Hc;
              break;
            case eu:
              P = nd;
              break;
            case "scroll":
              P = Fc;
              break;
            case "wheel":
              P = ld;
              break;
            case "copy":
            case "cut":
            case "paste":
              P = Vc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              P = Ti;
          }
          var T = (t & 4) !== 0,
            Ce = !T && e === "scroll",
            m = T ? (k !== null ? k + "Capture" : null) : k;
          T = [];
          for (var f = g, h; f !== null;) {
            h = f;
            var C = h.stateNode;
            if (
              (h.tag === 5 &&
                C !== null &&
                ((h = C),
                m !== null &&
                  ((C = Vn(f, m)), C != null && T.push(ar(f, C, h)))),
              Ce)
            )
              break;
            f = f.return;
          }
          0 < T.length &&
            ((k = new P(k, R, null, n, S)), j.push({ event: k, listeners: T }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((k = e === "mouseover" || e === "pointerover"),
            (P = e === "mouseout" || e === "pointerout"),
            k &&
              n !== Kl &&
              (R = n.relatedTarget || n.fromElement) &&
              (rn(R) || R[Ct]))
          )
            break e;
          if (
            (P || k) &&
            ((k =
              S.window === S
                ? S
                : (k = S.ownerDocument)
                  ? k.defaultView || k.parentWindow
                  : window),
            P
              ? ((R = n.relatedTarget || n.toElement),
                (P = g),
                (R = R ? rn(R) : null),
                R !== null &&
                  ((Ce = nn(R)), R !== Ce || (R.tag !== 5 && R.tag !== 6)) &&
                  (R = null))
              : ((P = null), (R = g)),
            P !== R)
          ) {
            if (
              ((T = Li),
              (C = "onMouseLeave"),
              (m = "onMouseEnter"),
              (f = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((T = Ti),
                (C = "onPointerLeave"),
                (m = "onPointerEnter"),
                (f = "pointer")),
              (Ce = P == null ? k : En(P)),
              (h = R == null ? k : En(R)),
              (k = new T(C, f + "leave", P, n, S)),
              (k.target = Ce),
              (k.relatedTarget = h),
              (C = null),
              rn(S) === g &&
                ((T = new T(m, f + "enter", R, n, S)),
                (T.target = h),
                (T.relatedTarget = Ce),
                (C = T)),
              (Ce = C),
              P && R)
            )
              t: {
                for (T = P, m = R, f = 0, h = T; h; h = zn(h)) f++;
                for (h = 0, C = m; C; C = zn(C)) h++;
                for (; 0 < f - h;) ((T = zn(T)), f--);
                for (; 0 < h - f;) ((m = zn(m)), h--);
                for (; f--;) {
                  if (T === m || (m !== null && T === m.alternate)) break t;
                  ((T = zn(T)), (m = zn(m)));
                }
                T = null;
              }
            else T = null;
            (P !== null && su(j, k, P, T, !1),
              R !== null && Ce !== null && su(j, Ce, R, T, !0));
          }
        }
        e: {
          if (
            ((k = g ? En(g) : window),
            (P = k.nodeName && k.nodeName.toLowerCase()),
            P === "select" || (P === "input" && k.type === "file"))
          )
            var O = dd;
          else if (Ui(k))
            if ($i) O = hd;
            else {
              O = pd;
              var F = fd;
            }
          else
            (P = k.nodeName) &&
              P.toLowerCase() === "input" &&
              (k.type === "checkbox" || k.type === "radio") &&
              (O = md);
          if (O && (O = O(e, g))) {
            Wi(j, O, n, S);
            break e;
          }
          (F && F(e, k, g),
            e === "focusout" &&
              (F = k._wrapperState) &&
              F.controlled &&
              k.type === "number" &&
              Bl(k, "number", k.value));
        }
        switch (((F = g ? En(g) : window), e)) {
          case "focusin":
            (Ui(F) || F.contentEditable === "true") &&
              ((Sn = F), (xo = g), (sr = null));
            break;
          case "focusout":
            sr = xo = Sn = null;
            break;
          case "mousedown":
            ko = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ko = !1), Yi(j, n, S));
            break;
          case "selectionchange":
            if (vd) break;
          case "keydown":
          case "keyup":
            Yi(j, n, S);
        }
        var A;
        if (ho)
          e: {
            switch (e) {
              case "compositionstart":
                var H = "onCompositionStart";
                break e;
              case "compositionend":
                H = "onCompositionEnd";
                break e;
              case "compositionupdate":
                H = "onCompositionUpdate";
                break e;
            }
            H = void 0;
          }
        else
          wn
            ? Fi(e, n) && (H = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (H = "onCompositionStart");
        (H &&
          (Oi &&
            n.locale !== "ko" &&
            (wn || H !== "onCompositionStart"
              ? H === "onCompositionEnd" && wn && (A = Pi())
              : ((Wt = S),
                (uo = "value" in Wt ? Wt.value : Wt.textContent),
                (wn = !0))),
          (F = Xr(g, H)),
          0 < F.length &&
            ((H = new Ri(H, e, null, n, S)),
            j.push({ event: H, listeners: F }),
            A ? (H.data = A) : ((A = Ai(n)), A !== null && (H.data = A)))),
          (A = sd ? id(e, n) : ud(e, n)) &&
            ((g = Xr(g, "onBeforeInput")),
            0 < g.length &&
              ((S = new Ri("onBeforeInput", "beforeinput", null, n, S)),
              j.push({ event: S, listeners: g }),
              (S.data = A))));
      }
      lu(j, t);
    });
  }
  function ar(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Xr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Vn(e, n)),
        o != null && r.unshift(ar(e, o, l)),
        (o = Vn(e, t)),
        o != null && r.push(ar(e, o, l))),
        (e = e.return));
    }
    return r;
  }
  function zn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function su(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
      var u = n,
        c = u.alternate,
        g = u.stateNode;
      if (c !== null && c === r) break;
      (u.tag === 5 &&
        g !== null &&
        ((u = g),
        l
          ? ((c = Vn(n, o)), c != null && i.unshift(ar(n, c, u)))
          : l || ((c = Vn(n, o)), c != null && i.push(ar(n, c, u)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Sd = /\r\n?/g,
    jd = /\u0000|\uFFFD/g;
  function iu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Sd,
        `
`,
      )
      .replace(jd, "");
  }
  function qr(e, t, n) {
    if (((t = iu(t)), iu(e) !== t && n)) throw Error(d(425));
  }
  function Jr() {}
  var Eo = null,
    _o = null;
  function Mo(e, t) {
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
  var Po = typeof setTimeout == "function" ? setTimeout : void 0,
    zd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    uu = typeof Promise == "function" ? Promise : void 0,
    Cd =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof uu < "u"
          ? function (e) {
              return uu.resolve(null).then(e).catch(Ed);
            }
          : Po;
  function Ed(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function No(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), bn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    bn(t);
  }
  function Ht(e) {
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
  function au(e) {
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
  var Cn = Math.random().toString(36).slice(2),
    wt = "__reactFiber$" + Cn,
    cr = "__reactProps$" + Cn,
    Ct = "__reactContainer$" + Cn,
    Lo = "__reactEvents$" + Cn,
    _d = "__reactListeners$" + Cn,
    Md = "__reactHandles$" + Cn;
  function rn(e) {
    var t = e[wt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[Ct] || n[wt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = au(e); e !== null;) {
            if ((n = e[wt])) return n;
            e = au(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function dr(e) {
    return (
      (e = e[wt] || e[Ct]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function En(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(d(33));
  }
  function br(e) {
    return e[cr] || null;
  }
  var Ro = [],
    _n = -1;
  function Bt(e) {
    return { current: e };
  }
  function pe(e) {
    0 > _n || ((e.current = Ro[_n]), (Ro[_n] = null), _n--);
  }
  function ce(e, t) {
    (_n++, (Ro[_n] = e.current), (e.current = t));
  }
  var Vt = {},
    $e = Bt(Vt),
    Ke = Bt(!1),
    ln = Vt;
  function Mn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Vt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ye(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function el() {
    (pe(Ke), pe($e));
  }
  function cu(e, t, n) {
    if ($e.current !== Vt) throw Error(d(168));
    (ce($e, t), ce(Ke, n));
  }
  function du(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(d(108, ae(e) || "Unknown", l));
    return L({}, n, r);
  }
  function tl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Vt),
      (ln = $e.current),
      ce($e, e),
      ce(Ke, Ke.current),
      !0
    );
  }
  function fu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(d(169));
    (n
      ? ((e = du(e, t, ln)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        pe(Ke),
        pe($e),
        ce($e, e))
      : pe(Ke),
      ce(Ke, n));
  }
  var Et = null,
    nl = !1,
    To = !1;
  function pu(e) {
    Et === null ? (Et = [e]) : Et.push(e);
  }
  function Pd(e) {
    ((nl = !0), pu(e));
  }
  function Qt() {
    if (!To && Et !== null) {
      To = !0;
      var e = 0,
        t = ne;
      try {
        var n = Et;
        for (ne = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Et = null), (nl = !1));
      } catch (l) {
        throw (Et !== null && (Et = Et.slice(e + 1)), hi(eo, Qt), l);
      } finally {
        ((ne = t), (To = !1));
      }
    }
    return null;
  }
  var Pn = [],
    Nn = 0,
    rl = null,
    ll = 0,
    it = [],
    ut = 0,
    on = null,
    _t = 1,
    Mt = "";
  function sn(e, t) {
    ((Pn[Nn++] = ll), (Pn[Nn++] = rl), (rl = e), (ll = t));
  }
  function mu(e, t, n) {
    ((it[ut++] = _t), (it[ut++] = Mt), (it[ut++] = on), (on = e));
    var r = _t;
    e = Mt;
    var l = 32 - pt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - pt(t) + l;
    if (30 < o) {
      var i = l - (l % 5);
      ((o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (_t = (1 << (32 - pt(t) + l)) | (n << l) | r),
        (Mt = o + e));
    } else ((_t = (1 << o) | (n << l) | r), (Mt = e));
  }
  function Oo(e) {
    e.return !== null && (sn(e, 1), mu(e, 1, 0));
  }
  function Io(e) {
    for (; e === rl;)
      ((rl = Pn[--Nn]), (Pn[Nn] = null), (ll = Pn[--Nn]), (Pn[Nn] = null));
    for (; e === on;)
      ((on = it[--ut]),
        (it[ut] = null),
        (Mt = it[--ut]),
        (it[ut] = null),
        (_t = it[--ut]),
        (it[ut] = null));
  }
  var rt = null,
    lt = null,
    ge = !1,
    ht = null;
  function hu(e, t) {
    var n = ft(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function yu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (rt = e), (lt = Ht(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (rt = e), (lt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = on !== null ? { id: _t, overflow: Mt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ft(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (rt = e),
              (lt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Do(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Fo(e) {
    if (ge) {
      var t = lt;
      if (t) {
        var n = t;
        if (!yu(e, t)) {
          if (Do(e)) throw Error(d(418));
          t = Ht(n.nextSibling);
          var r = rt;
          t && yu(e, t)
            ? hu(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ge = !1), (rt = e));
        }
      } else {
        if (Do(e)) throw Error(d(418));
        ((e.flags = (e.flags & -4097) | 2), (ge = !1), (rt = e));
      }
    }
  }
  function gu(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    rt = e;
  }
  function ol(e) {
    if (e !== rt) return !1;
    if (!ge) return (gu(e), (ge = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Mo(e.type, e.memoizedProps))),
      t && (t = lt))
    ) {
      if (Do(e)) throw (vu(), Error(d(418)));
      for (; t;) (hu(e, t), (t = Ht(t.nextSibling)));
    }
    if ((gu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(d(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                lt = Ht(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        lt = null;
      }
    } else lt = rt ? Ht(e.stateNode.nextSibling) : null;
    return !0;
  }
  function vu() {
    for (var e = lt; e;) e = Ht(e.nextSibling);
  }
  function Ln() {
    ((lt = rt = null), (ge = !1));
  }
  function Ao(e) {
    ht === null ? (ht = [e]) : ht.push(e);
  }
  var Nd = le.ReactCurrentBatchConfig;
  function fr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(d(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(d(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (i) {
              var u = l.refs;
              i === null ? delete u[o] : (u[o] = i);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(d(284));
      if (!n._owner) throw Error(d(290, e));
    }
    return e;
  }
  function sl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        d(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function xu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ku(e) {
    function t(m, f) {
      if (e) {
        var h = m.deletions;
        h === null ? ((m.deletions = [f]), (m.flags |= 16)) : h.push(f);
      }
    }
    function n(m, f) {
      if (!e) return null;
      for (; f !== null;) (t(m, f), (f = f.sibling));
      return null;
    }
    function r(m, f) {
      for (m = new Map(); f !== null;)
        (f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling));
      return m;
    }
    function l(m, f) {
      return ((m = bt(m, f)), (m.index = 0), (m.sibling = null), m);
    }
    function o(m, f, h) {
      return (
        (m.index = h),
        e
          ? ((h = m.alternate),
            h !== null
              ? ((h = h.index), h < f ? ((m.flags |= 2), f) : h)
              : ((m.flags |= 2), f))
          : ((m.flags |= 1048576), f)
      );
    }
    function i(m) {
      return (e && m.alternate === null && (m.flags |= 2), m);
    }
    function u(m, f, h, C) {
      return f === null || f.tag !== 6
        ? ((f = Ps(h, m.mode, C)), (f.return = m), f)
        : ((f = l(f, h)), (f.return = m), f);
    }
    function c(m, f, h, C) {
      var O = h.type;
      return O === de
        ? S(m, f, h.props.children, C, h.key)
        : f !== null &&
            (f.elementType === O ||
              (typeof O == "object" &&
                O !== null &&
                O.$$typeof === ke &&
                xu(O) === f.type))
          ? ((C = l(f, h.props)), (C.ref = fr(m, f, h)), (C.return = m), C)
          : ((C = Nl(h.type, h.key, h.props, null, m.mode, C)),
            (C.ref = fr(m, f, h)),
            (C.return = m),
            C);
    }
    function g(m, f, h, C) {
      return f === null ||
        f.tag !== 4 ||
        f.stateNode.containerInfo !== h.containerInfo ||
        f.stateNode.implementation !== h.implementation
        ? ((f = Ns(h, m.mode, C)), (f.return = m), f)
        : ((f = l(f, h.children || [])), (f.return = m), f);
    }
    function S(m, f, h, C, O) {
      return f === null || f.tag !== 7
        ? ((f = hn(h, m.mode, C, O)), (f.return = m), f)
        : ((f = l(f, h)), (f.return = m), f);
    }
    function j(m, f, h) {
      if ((typeof f == "string" && f !== "") || typeof f == "number")
        return ((f = Ps("" + f, m.mode, h)), (f.return = m), f);
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case me:
            return (
              (h = Nl(f.type, f.key, f.props, null, m.mode, h)),
              (h.ref = fr(m, null, f)),
              (h.return = m),
              h
            );
          case oe:
            return ((f = Ns(f, m.mode, h)), (f.return = m), f);
          case ke:
            var C = f._init;
            return j(m, C(f._payload), h);
        }
        if ($n(f) || $(f))
          return ((f = hn(f, m.mode, h, null)), (f.return = m), f);
        sl(m, f);
      }
      return null;
    }
    function k(m, f, h, C) {
      var O = f !== null ? f.key : null;
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return O !== null ? null : u(m, f, "" + h, C);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case me:
            return h.key === O ? c(m, f, h, C) : null;
          case oe:
            return h.key === O ? g(m, f, h, C) : null;
          case ke:
            return ((O = h._init), k(m, f, O(h._payload), C));
        }
        if ($n(h) || $(h)) return O !== null ? null : S(m, f, h, C, null);
        sl(m, h);
      }
      return null;
    }
    function P(m, f, h, C, O) {
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return ((m = m.get(h) || null), u(f, m, "" + C, O));
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case me:
            return (
              (m = m.get(C.key === null ? h : C.key) || null),
              c(f, m, C, O)
            );
          case oe:
            return (
              (m = m.get(C.key === null ? h : C.key) || null),
              g(f, m, C, O)
            );
          case ke:
            var F = C._init;
            return P(m, f, h, F(C._payload), O);
        }
        if ($n(C) || $(C)) return ((m = m.get(h) || null), S(f, m, C, O, null));
        sl(f, C);
      }
      return null;
    }
    function R(m, f, h, C) {
      for (
        var O = null, F = null, A = f, H = (f = 0), De = null;
        A !== null && H < h.length;
        H++
      ) {
        A.index > H ? ((De = A), (A = null)) : (De = A.sibling);
        var ee = k(m, A, h[H], C);
        if (ee === null) {
          A === null && (A = De);
          break;
        }
        (e && A && ee.alternate === null && t(m, A),
          (f = o(ee, f, H)),
          F === null ? (O = ee) : (F.sibling = ee),
          (F = ee),
          (A = De));
      }
      if (H === h.length) return (n(m, A), ge && sn(m, H), O);
      if (A === null) {
        for (; H < h.length; H++)
          ((A = j(m, h[H], C)),
            A !== null &&
              ((f = o(A, f, H)),
              F === null ? (O = A) : (F.sibling = A),
              (F = A)));
        return (ge && sn(m, H), O);
      }
      for (A = r(m, A); H < h.length; H++)
        ((De = P(A, m, H, h[H], C)),
          De !== null &&
            (e &&
              De.alternate !== null &&
              A.delete(De.key === null ? H : De.key),
            (f = o(De, f, H)),
            F === null ? (O = De) : (F.sibling = De),
            (F = De)));
      return (
        e &&
          A.forEach(function (en) {
            return t(m, en);
          }),
        ge && sn(m, H),
        O
      );
    }
    function T(m, f, h, C) {
      var O = $(h);
      if (typeof O != "function") throw Error(d(150));
      if (((h = O.call(h)), h == null)) throw Error(d(151));
      for (
        var F = (O = null), A = f, H = (f = 0), De = null, ee = h.next();
        A !== null && !ee.done;
        H++, ee = h.next()
      ) {
        A.index > H ? ((De = A), (A = null)) : (De = A.sibling);
        var en = k(m, A, ee.value, C);
        if (en === null) {
          A === null && (A = De);
          break;
        }
        (e && A && en.alternate === null && t(m, A),
          (f = o(en, f, H)),
          F === null ? (O = en) : (F.sibling = en),
          (F = en),
          (A = De));
      }
      if (ee.done) return (n(m, A), ge && sn(m, H), O);
      if (A === null) {
        for (; !ee.done; H++, ee = h.next())
          ((ee = j(m, ee.value, C)),
            ee !== null &&
              ((f = o(ee, f, H)),
              F === null ? (O = ee) : (F.sibling = ee),
              (F = ee)));
        return (ge && sn(m, H), O);
      }
      for (A = r(m, A); !ee.done; H++, ee = h.next())
        ((ee = P(A, m, H, ee.value, C)),
          ee !== null &&
            (e &&
              ee.alternate !== null &&
              A.delete(ee.key === null ? H : ee.key),
            (f = o(ee, f, H)),
            F === null ? (O = ee) : (F.sibling = ee),
            (F = ee)));
      return (
        e &&
          A.forEach(function (cf) {
            return t(m, cf);
          }),
        ge && sn(m, H),
        O
      );
    }
    function Ce(m, f, h, C) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === de &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case me:
            e: {
              for (var O = h.key, F = f; F !== null;) {
                if (F.key === O) {
                  if (((O = h.type), O === de)) {
                    if (F.tag === 7) {
                      (n(m, F.sibling),
                        (f = l(F, h.props.children)),
                        (f.return = m),
                        (m = f));
                      break e;
                    }
                  } else if (
                    F.elementType === O ||
                    (typeof O == "object" &&
                      O !== null &&
                      O.$$typeof === ke &&
                      xu(O) === F.type)
                  ) {
                    (n(m, F.sibling),
                      (f = l(F, h.props)),
                      (f.ref = fr(m, F, h)),
                      (f.return = m),
                      (m = f));
                    break e;
                  }
                  n(m, F);
                  break;
                } else t(m, F);
                F = F.sibling;
              }
              h.type === de
                ? ((f = hn(h.props.children, m.mode, C, h.key)),
                  (f.return = m),
                  (m = f))
                : ((C = Nl(h.type, h.key, h.props, null, m.mode, C)),
                  (C.ref = fr(m, f, h)),
                  (C.return = m),
                  (m = C));
            }
            return i(m);
          case oe:
            e: {
              for (F = h.key; f !== null;) {
                if (f.key === F)
                  if (
                    f.tag === 4 &&
                    f.stateNode.containerInfo === h.containerInfo &&
                    f.stateNode.implementation === h.implementation
                  ) {
                    (n(m, f.sibling),
                      (f = l(f, h.children || [])),
                      (f.return = m),
                      (m = f));
                    break e;
                  } else {
                    n(m, f);
                    break;
                  }
                else t(m, f);
                f = f.sibling;
              }
              ((f = Ns(h, m.mode, C)), (f.return = m), (m = f));
            }
            return i(m);
          case ke:
            return ((F = h._init), Ce(m, f, F(h._payload), C));
        }
        if ($n(h)) return R(m, f, h, C);
        if ($(h)) return T(m, f, h, C);
        sl(m, h);
      }
      return (typeof h == "string" && h !== "") || typeof h == "number"
        ? ((h = "" + h),
          f !== null && f.tag === 6
            ? (n(m, f.sibling), (f = l(f, h)), (f.return = m), (m = f))
            : (n(m, f), (f = Ps(h, m.mode, C)), (f.return = m), (m = f)),
          i(m))
        : n(m, f);
    }
    return Ce;
  }
  var Rn = ku(!0),
    wu = ku(!1),
    il = Bt(null),
    ul = null,
    Tn = null,
    Uo = null;
  function Wo() {
    Uo = Tn = ul = null;
  }
  function $o(e) {
    var t = il.current;
    (pe(il), (e._currentValue = t));
  }
  function Ho(e, t, n) {
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
  function On(e, t) {
    ((ul = e),
      (Uo = Tn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Xe = !0), (e.firstContext = null)));
  }
  function at(e) {
    var t = e._currentValue;
    if (Uo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
        if (ul === null) throw Error(d(308));
        ((Tn = e), (ul.dependencies = { lanes: 0, firstContext: e }));
      } else Tn = Tn.next = e;
    return t;
  }
  var un = null;
  function Bo(e) {
    un === null ? (un = [e]) : un.push(e);
  }
  function Su(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Bo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Pt(e, r)
    );
  }
  function Pt(e, t) {
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
  var Zt = !1;
  function Vo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ju(e, t) {
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
  function Nt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Gt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (X & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Pt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Bo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Pt(e, n)
    );
  }
  function al(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ro(e, n));
    }
  }
  function zu(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (o === null ? (l = o = i) : (o = o.next = i), (n = n.next));
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
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
  function cl(e, t, n, r) {
    var l = e.updateQueue;
    Zt = !1;
    var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var c = u,
        g = c.next;
      ((c.next = null), i === null ? (o = g) : (i.next = g), (i = c));
      var S = e.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (u = S.lastBaseUpdate),
        u !== i &&
          (u === null ? (S.firstBaseUpdate = g) : (u.next = g),
          (S.lastBaseUpdate = c)));
    }
    if (o !== null) {
      var j = l.baseState;
      ((i = 0), (S = g = c = null), (u = o));
      do {
        var k = u.lane,
          P = u.eventTime;
        if ((r & k) === k) {
          S !== null &&
            (S = S.next =
              {
                eventTime: P,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var R = e,
              T = u;
            switch (((k = t), (P = n), T.tag)) {
              case 1:
                if (((R = T.payload), typeof R == "function")) {
                  j = R.call(P, j, k);
                  break e;
                }
                j = R;
                break e;
              case 3:
                R.flags = (R.flags & -65537) | 128;
              case 0:
                if (
                  ((R = T.payload),
                  (k = typeof R == "function" ? R.call(P, j, k) : R),
                  k == null)
                )
                  break e;
                j = L({}, j, k);
                break e;
              case 2:
                Zt = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (k = l.effects),
            k === null ? (l.effects = [u]) : k.push(u));
        } else
          ((P = {
            eventTime: P,
            lane: k,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            S === null ? ((g = S = P), (c = j)) : (S = S.next = P),
            (i |= k));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((k = u),
            (u = k.next),
            (k.next = null),
            (l.lastBaseUpdate = k),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (S === null && (c = j),
        (l.baseState = c),
        (l.firstBaseUpdate = g),
        (l.lastBaseUpdate = S),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((dn |= i), (e.lanes = i), (e.memoizedState = j));
    }
  }
  function Cu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(d(191, l));
          l.call(r);
        }
      }
  }
  var pr = {},
    St = Bt(pr),
    mr = Bt(pr),
    hr = Bt(pr);
  function an(e) {
    if (e === pr) throw Error(d(174));
    return e;
  }
  function Qo(e, t) {
    switch ((ce(hr, t), ce(mr, e), ce(St, pr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ql(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ql(t, e)));
    }
    (pe(St), ce(St, t));
  }
  function In() {
    (pe(St), pe(mr), pe(hr));
  }
  function Eu(e) {
    an(hr.current);
    var t = an(St.current),
      n = Ql(t, e.type);
    t !== n && (ce(mr, e), ce(St, n));
  }
  function Zo(e) {
    mr.current === e && (pe(St), pe(mr));
  }
  var ve = Bt(0);
  function dl(e) {
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
  var Go = [];
  function Ko() {
    for (var e = 0; e < Go.length; e++)
      Go[e]._workInProgressVersionPrimary = null;
    Go.length = 0;
  }
  var fl = le.ReactCurrentDispatcher,
    Yo = le.ReactCurrentBatchConfig,
    cn = 0,
    xe = null,
    Le = null,
    Oe = null,
    pl = !1,
    yr = !1,
    gr = 0,
    Ld = 0;
  function He() {
    throw Error(d(321));
  }
  function Xo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!mt(e[n], t[n])) return !1;
    return !0;
  }
  function qo(e, t, n, r, l, o) {
    if (
      ((cn = o),
      (xe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (fl.current = e === null || e.memoizedState === null ? Id : Dd),
      (e = n(r, l)),
      yr)
    ) {
      o = 0;
      do {
        if (((yr = !1), (gr = 0), 25 <= o)) throw Error(d(301));
        ((o += 1),
          (Oe = Le = null),
          (t.updateQueue = null),
          (fl.current = Fd),
          (e = n(r, l)));
      } while (yr);
    }
    if (
      ((fl.current = yl),
      (t = Le !== null && Le.next !== null),
      (cn = 0),
      (Oe = Le = xe = null),
      (pl = !1),
      t)
    )
      throw Error(d(300));
    return e;
  }
  function Jo() {
    var e = gr !== 0;
    return ((gr = 0), e);
  }
  function jt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Oe === null ? (xe.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe);
  }
  function ct() {
    if (Le === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = Oe === null ? xe.memoizedState : Oe.next;
    if (t !== null) ((Oe = t), (Le = e));
    else {
      if (e === null) throw Error(d(310));
      ((Le = e),
        (e = {
          memoizedState: Le.memoizedState,
          baseState: Le.baseState,
          baseQueue: Le.baseQueue,
          queue: Le.queue,
          next: null,
        }),
        Oe === null ? (xe.memoizedState = Oe = e) : (Oe = Oe.next = e));
    }
    return Oe;
  }
  function vr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function bo(e) {
    var t = ct(),
      n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = Le,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        ((l.next = o.next), (o.next = i));
      }
      ((r.baseQueue = l = o), (n.pending = null));
    }
    if (l !== null) {
      ((o = l.next), (r = r.baseState));
      var u = (i = null),
        c = null,
        g = o;
      do {
        var S = g.lane;
        if ((cn & S) === S)
          (c !== null &&
            (c = c.next =
              {
                lane: 0,
                action: g.action,
                hasEagerState: g.hasEagerState,
                eagerState: g.eagerState,
                next: null,
              }),
            (r = g.hasEagerState ? g.eagerState : e(r, g.action)));
        else {
          var j = {
            lane: S,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null,
          };
          (c === null ? ((u = c = j), (i = r)) : (c = c.next = j),
            (xe.lanes |= S),
            (dn |= S));
        }
        g = g.next;
      } while (g !== null && g !== o);
      (c === null ? (i = r) : (c.next = u),
        mt(r, t.memoizedState) || (Xe = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = c),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (xe.lanes |= o), (dn |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function es(e) {
    var t = ct(),
      n = t.queue;
    if (n === null) throw Error(d(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do ((o = e(o, i.action)), (i = i.next));
      while (i !== l);
      (mt(o, t.memoizedState) || (Xe = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function _u() {}
  function Mu(e, t) {
    var n = xe,
      r = ct(),
      l = t(),
      o = !mt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Xe = !0)),
      (r = r.queue),
      ts(Lu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Oe !== null && Oe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        xr(9, Nu.bind(null, n, r, l, t), void 0, null),
        Ie === null)
      )
        throw Error(d(349));
      (cn & 30) !== 0 || Pu(n, t, l);
    }
    return l;
  }
  function Pu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (xe.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Nu(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Ru(t) && Tu(e));
  }
  function Lu(e, t, n) {
    return n(function () {
      Ru(t) && Tu(e);
    });
  }
  function Ru(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mt(e, n);
    } catch {
      return !0;
    }
  }
  function Tu(e) {
    var t = Pt(e, 1);
    t !== null && xt(t, e, 1, -1);
  }
  function Ou(e) {
    var t = jt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Od.bind(null, xe, e)),
      [t.memoizedState, e]
    );
  }
  function xr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (xe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Iu() {
    return ct().memoizedState;
  }
  function ml(e, t, n, r) {
    var l = jt();
    ((xe.flags |= e),
      (l.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function hl(e, t, n, r) {
    var l = ct();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Le !== null) {
      var i = Le.memoizedState;
      if (((o = i.destroy), r !== null && Xo(r, i.deps))) {
        l.memoizedState = xr(t, n, o, r);
        return;
      }
    }
    ((xe.flags |= e), (l.memoizedState = xr(1 | t, n, o, r)));
  }
  function Du(e, t) {
    return ml(8390656, 8, e, t);
  }
  function ts(e, t) {
    return hl(2048, 8, e, t);
  }
  function Fu(e, t) {
    return hl(4, 2, e, t);
  }
  function Au(e, t) {
    return hl(4, 4, e, t);
  }
  function Uu(e, t) {
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
  function Wu(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      hl(4, 4, Uu.bind(null, t, e), n)
    );
  }
  function ns() {}
  function $u(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xo(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Hu(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xo(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Bu(e, t, n) {
    return (cn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n))
      : (mt(n, t) ||
          ((n = xi()), (xe.lanes |= n), (dn |= n), (e.baseState = !0)),
        t);
  }
  function Rd(e, t) {
    var n = ne;
    ((ne = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Yo.transition;
    Yo.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((ne = n), (Yo.transition = r));
    }
  }
  function Vu() {
    return ct().memoizedState;
  }
  function Td(e, t, n) {
    var r = qt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Qu(e))
    )
      Zu(t, n);
    else if (((n = Su(e, t, n, r)), n !== null)) {
      var l = Ze();
      (xt(n, e, r, l), Gu(n, t, r));
    }
  }
  function Od(e, t, n) {
    var r = qt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Qu(e)) Zu(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var i = t.lastRenderedState,
            u = o(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), mt(u, i))) {
            var c = t.interleaved;
            (c === null
              ? ((l.next = l), Bo(t))
              : ((l.next = c.next), (c.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Su(e, t, l, r)),
        n !== null && ((l = Ze()), xt(n, e, r, l), Gu(n, t, r)));
    }
  }
  function Qu(e) {
    var t = e.alternate;
    return e === xe || (t !== null && t === xe);
  }
  function Zu(e, t) {
    yr = pl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Gu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ro(e, n));
    }
  }
  var yl = {
      readContext: at,
      useCallback: He,
      useContext: He,
      useEffect: He,
      useImperativeHandle: He,
      useInsertionEffect: He,
      useLayoutEffect: He,
      useMemo: He,
      useReducer: He,
      useRef: He,
      useState: He,
      useDebugValue: He,
      useDeferredValue: He,
      useTransition: He,
      useMutableSource: He,
      useSyncExternalStore: He,
      useId: He,
      unstable_isNewReconciler: !1,
    },
    Id = {
      readContext: at,
      useCallback: function (e, t) {
        return ((jt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: at,
      useEffect: Du,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          ml(4194308, 4, Uu.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return ml(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ml(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = jt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = jt();
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
          (e = e.dispatch = Td.bind(null, xe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = jt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Ou,
      useDebugValue: ns,
      useDeferredValue: function (e) {
        return (jt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ou(!1),
          t = e[0];
        return ((e = Rd.bind(null, e[1])), (jt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = xe,
          l = jt();
        if (ge) {
          if (n === void 0) throw Error(d(407));
          n = n();
        } else {
          if (((n = t()), Ie === null)) throw Error(d(349));
          (cn & 30) !== 0 || Pu(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Du(Lu.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          xr(9, Nu.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = jt(),
          t = Ie.identifierPrefix;
        if (ge) {
          var n = Mt,
            r = _t;
          ((n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = gr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = Ld++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Dd = {
      readContext: at,
      useCallback: $u,
      useContext: at,
      useEffect: ts,
      useImperativeHandle: Wu,
      useInsertionEffect: Fu,
      useLayoutEffect: Au,
      useMemo: Hu,
      useReducer: bo,
      useRef: Iu,
      useState: function () {
        return bo(vr);
      },
      useDebugValue: ns,
      useDeferredValue: function (e) {
        var t = ct();
        return Bu(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = bo(vr)[0],
          t = ct().memoizedState;
        return [e, t];
      },
      useMutableSource: _u,
      useSyncExternalStore: Mu,
      useId: Vu,
      unstable_isNewReconciler: !1,
    },
    Fd = {
      readContext: at,
      useCallback: $u,
      useContext: at,
      useEffect: ts,
      useImperativeHandle: Wu,
      useInsertionEffect: Fu,
      useLayoutEffect: Au,
      useMemo: Hu,
      useReducer: es,
      useRef: Iu,
      useState: function () {
        return es(vr);
      },
      useDebugValue: ns,
      useDeferredValue: function (e) {
        var t = ct();
        return Le === null ? (t.memoizedState = e) : Bu(t, Le.memoizedState, e);
      },
      useTransition: function () {
        var e = es(vr)[0],
          t = ct().memoizedState;
        return [e, t];
      },
      useMutableSource: _u,
      useSyncExternalStore: Mu,
      useId: Vu,
      unstable_isNewReconciler: !1,
    };
  function yt(e, t) {
    if (e && e.defaultProps) {
      ((t = L({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function rs(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : L({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var gl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? nn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ze(),
        l = qt(e),
        o = Nt(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = Gt(e, o, l)),
        t !== null && (xt(t, e, l, r), al(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ze(),
        l = qt(e),
        o = Nt(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Gt(e, o, l)),
        t !== null && (xt(t, e, l, r), al(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ze(),
        r = qt(e),
        l = Nt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Gt(e, l, r)),
        t !== null && (xt(t, e, r, n), al(t, e, r)));
    },
  };
  function Ku(e, t, n, r, l, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !or(n, r) || !or(l, o)
          : !0
    );
  }
  function Yu(e, t, n) {
    var r = !1,
      l = Vt,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = at(o))
        : ((l = Ye(t) ? ln : $e.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Mn(e, l) : Vt)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = gl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Xu(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && gl.enqueueReplaceState(t, t.state, null));
  }
  function ls(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Vo(e));
    var o = t.contextType;
    (typeof o == "object" && o !== null
      ? (l.context = at(o))
      : ((o = Ye(t) ? ln : $e.current), (l.context = Mn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (rs(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && gl.enqueueReplaceState(l, l.state, null),
        cl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Dn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += J(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function os(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ss(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Ad = typeof WeakMap == "function" ? WeakMap : Map;
  function qu(e, t, n) {
    ((n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (zl || ((zl = !0), (ws = r)), ss(e, t));
      }),
      n
    );
  }
  function Ju(e, t, n) {
    ((n = Nt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          ss(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          (ss(e, t),
            typeof r != "function" &&
              (Yt === null ? (Yt = new Set([this])) : Yt.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      n
    );
  }
  function bu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ad();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Jd.bind(null, e, t, n)), t.then(e, e));
  }
  function ea(e) {
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
  function ta(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Nt(-1, 1)), (t.tag = 2), Gt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Ud = le.ReactCurrentOwner,
    Xe = !1;
  function Qe(e, t, n, r) {
    t.child = e === null ? wu(t, null, n, r) : Rn(t, e.child, n, r);
  }
  function na(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      On(t, l),
      (r = qo(e, t, n, r, o, l)),
      (n = Jo()),
      e !== null && !Xe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Lt(e, t, l))
        : (ge && n && Oo(t), (t.flags |= 1), Qe(e, t, r, l), t.child)
    );
  }
  function ra(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Ms(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), la(e, t, o, r, l))
        : ((e = Nl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var i = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : or), n(i, r) && e.ref === t.ref)
      )
        return Lt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = bt(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function la(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (or(o, r) && e.ref === t.ref)
        if (((Xe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Xe = !0);
        else return ((t.lanes = e.lanes), Lt(e, t, l));
    }
    return is(e, t, n, r, l);
  }
  function oa(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ce(An, ot),
          (ot |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ce(An, ot),
            (ot |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ce(An, ot),
          (ot |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ce(An, ot),
        (ot |= r));
    return (Qe(e, t, l, n), t.child);
  }
  function sa(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function is(e, t, n, r, l) {
    var o = Ye(n) ? ln : $e.current;
    return (
      (o = Mn(t, o)),
      On(t, l),
      (n = qo(e, t, n, r, o, l)),
      (r = Jo()),
      e !== null && !Xe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Lt(e, t, l))
        : (ge && r && Oo(t), (t.flags |= 1), Qe(e, t, n, l), t.child)
    );
  }
  function ia(e, t, n, r, l) {
    if (Ye(n)) {
      var o = !0;
      tl(t);
    } else o = !1;
    if ((On(t, l), t.stateNode === null))
      (xl(e, t), Yu(t, n, r), ls(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        u = t.memoizedProps;
      i.props = u;
      var c = i.context,
        g = n.contextType;
      typeof g == "object" && g !== null
        ? (g = at(g))
        : ((g = Ye(n) ? ln : $e.current), (g = Mn(t, g)));
      var S = n.getDerivedStateFromProps,
        j =
          typeof S == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      (j ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((u !== r || c !== g) && Xu(t, i, r, g)),
        (Zt = !1));
      var k = t.memoizedState;
      ((i.state = k),
        cl(t, r, i, l),
        (c = t.memoizedState),
        u !== r || k !== c || Ke.current || Zt
          ? (typeof S == "function" && (rs(t, n, S, r), (c = t.memoizedState)),
            (u = Zt || Ku(t, n, u, r, k, c, g))
              ? (j ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = c)),
            (i.props = r),
            (i.state = c),
            (i.context = g),
            (r = u))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((i = t.stateNode),
        ju(e, t),
        (u = t.memoizedProps),
        (g = t.type === t.elementType ? u : yt(t.type, u)),
        (i.props = g),
        (j = t.pendingProps),
        (k = i.context),
        (c = n.contextType),
        typeof c == "object" && c !== null
          ? (c = at(c))
          : ((c = Ye(n) ? ln : $e.current), (c = Mn(t, c))));
      var P = n.getDerivedStateFromProps;
      ((S =
        typeof P == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((u !== j || k !== c) && Xu(t, i, r, c)),
        (Zt = !1),
        (k = t.memoizedState),
        (i.state = k),
        cl(t, r, i, l));
      var R = t.memoizedState;
      u !== j || k !== R || Ke.current || Zt
        ? (typeof P == "function" && (rs(t, n, P, r), (R = t.memoizedState)),
          (g = Zt || Ku(t, n, g, r, k, R, c) || !1)
            ? (S ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, R, c),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, R, c)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (u === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = R)),
          (i.props = r),
          (i.state = R),
          (i.context = c),
          (r = g))
        : (typeof i.componentDidUpdate != "function" ||
            (u === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return us(e, t, n, r, o, l);
  }
  function us(e, t, n, r, l, o) {
    sa(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && fu(t, n, !1), Lt(e, t, o));
    ((r = t.stateNode), (Ud.current = t));
    var u =
      i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Rn(t, e.child, null, o)), (t.child = Rn(t, null, u, o)))
        : Qe(e, t, u, o),
      (t.memoizedState = r.state),
      l && fu(t, n, !0),
      t.child
    );
  }
  function ua(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? cu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && cu(e, t.context, !1),
      Qo(e, t.containerInfo));
  }
  function aa(e, t, n, r, l) {
    return (Ln(), Ao(l), (t.flags |= 256), Qe(e, t, n, r), t.child);
  }
  var as = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ca(e, t, n) {
    var r = t.pendingProps,
      l = ve.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ce(ve, l & 1),
      e === null)
    )
      return (
        Fo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((i = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (i = { mode: "hidden", children: i }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = i))
                  : (o = Ll(i, r, 0, null)),
                (e = hn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = cs(n)),
                (t.memoizedState = as),
                e)
              : ds(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return Wd(e, t, i, r, u, l, n);
    if (o) {
      ((o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling));
      var c = { mode: "hidden", children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = c),
            (t.deletions = null))
          : ((r = bt(l, c)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (o = bt(u, o)) : ((o = hn(o, i, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? cs(n)
            : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions,
              }),
        (o.memoizedState = i),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = as),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = bt(o, { mode: "visible", children: r.children })),
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
  function ds(e, t) {
    return (
      (t = Ll({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function vl(e, t, n, r) {
    return (
      r !== null && Ao(r),
      Rn(t, e.child, null, n),
      (e = ds(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Wd(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = os(Error(d(422)))), vl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Ll({ mode: "visible", children: r.children }, l, 0, null)),
            (o = hn(o, l, i, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Rn(t, e.child, null, i),
            (t.child.memoizedState = cs(i)),
            (t.memoizedState = as),
            o);
    if ((t.mode & 1) === 0) return vl(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (
        (r = u),
        (o = Error(d(419))),
        (r = os(o, r, void 0)),
        vl(e, t, i, r)
      );
    }
    if (((u = (i & e.childLanes) !== 0), Xe || u)) {
      if (((r = Ie), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), Pt(e, l), xt(r, e, l, -1)));
      }
      return (_s(), (r = os(Error(d(421)))), vl(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = bd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (lt = Ht(l.nextSibling)),
        (rt = t),
        (ge = !0),
        (ht = null),
        e !== null &&
          ((it[ut++] = _t),
          (it[ut++] = Mt),
          (it[ut++] = on),
          (_t = e.id),
          (Mt = e.overflow),
          (on = t)),
        (t = ds(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function da(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ho(e.return, t, n));
  }
  function fs(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function fa(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Qe(e, t, r.children, n), (r = ve.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && da(e, n, t);
          else if (e.tag === 19) da(e, n, t);
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
    if ((ce(ve, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate),
              e !== null && dl(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            fs(t, !1, l, n, o));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && dl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          fs(t, !0, n, null, o);
          break;
        case "together":
          fs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function xl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Lt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (dn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(d(153));
    if (t.child !== null) {
      for (
        e = t.child, n = bt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = bt(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function $d(e, t, n) {
    switch (t.tag) {
      case 3:
        (ua(t), Ln());
        break;
      case 5:
        Eu(t);
        break;
      case 1:
        Ye(t.type) && tl(t);
        break;
      case 4:
        Qo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ce(il, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ce(ve, ve.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ca(e, t, n)
              : (ce(ve, ve.current & 1),
                (e = Lt(e, t, n)),
                e !== null ? e.sibling : null);
        ce(ve, ve.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return fa(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ce(ve, ve.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), oa(e, t, n));
    }
    return Lt(e, t, n);
  }
  var pa, ps, ma, ha;
  ((pa = function (e, t) {
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
    (ps = function () {}),
    (ma = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), an(St.current));
        var o = null;
        switch (n) {
          case "input":
            ((l = $l(e, l)), (r = $l(e, r)), (o = []));
            break;
          case "select":
            ((l = L({}, l, { value: void 0 })),
              (r = L({}, r, { value: void 0 })),
              (o = []));
            break;
          case "textarea":
            ((l = Vl(e, l)), (r = Vl(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Jr);
        }
        Zl(n, r);
        var i;
        n = null;
        for (g in l)
          if (!r.hasOwnProperty(g) && l.hasOwnProperty(g) && l[g] != null)
            if (g === "style") {
              var u = l[g];
              for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
              g !== "dangerouslySetInnerHTML" &&
                g !== "children" &&
                g !== "suppressContentEditableWarning" &&
                g !== "suppressHydrationWarning" &&
                g !== "autoFocus" &&
                (z.hasOwnProperty(g)
                  ? o || (o = [])
                  : (o = o || []).push(g, null));
        for (g in r) {
          var c = r[g];
          if (
            ((u = l?.[g]),
            r.hasOwnProperty(g) && c !== u && (c != null || u != null))
          )
            if (g === "style")
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (c && c.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ""));
                for (i in c)
                  c.hasOwnProperty(i) &&
                    u[i] !== c[i] &&
                    (n || (n = {}), (n[i] = c[i]));
              } else (n || (o || (o = []), o.push(g, n)), (n = c));
            else
              g === "dangerouslySetInnerHTML"
                ? ((c = c ? c.__html : void 0),
                  (u = u ? u.__html : void 0),
                  c != null && u !== c && (o = o || []).push(g, c))
                : g === "children"
                  ? (typeof c != "string" && typeof c != "number") ||
                    (o = o || []).push(g, "" + c)
                  : g !== "suppressContentEditableWarning" &&
                    g !== "suppressHydrationWarning" &&
                    (z.hasOwnProperty(g)
                      ? (c != null && g === "onScroll" && fe("scroll", e),
                        o || u === c || (o = []))
                      : (o = o || []).push(g, c));
        }
        n && (o = o || []).push("style", n);
        var g = o;
        (t.updateQueue = g) && (t.flags |= 4);
      }
    }),
    (ha = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function kr(e, t) {
    if (!ge)
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
  function Be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null;)
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null;)
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function Hd(e, t, n) {
    var r = t.pendingProps;
    switch ((Io(t), t.tag)) {
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
        return (Be(t), null);
      case 1:
        return (Ye(t.type) && el(), Be(t), null);
      case 3:
        return (
          (r = t.stateNode),
          In(),
          pe(Ke),
          pe($e),
          Ko(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (ol(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ht !== null && (zs(ht), (ht = null)))),
          ps(e, t),
          Be(t),
          null
        );
      case 5:
        Zo(t);
        var l = an(hr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ma(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(d(166));
            return (Be(t), null);
          }
          if (((e = an(St.current)), ol(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[wt] = t), (r[cr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (fe("cancel", r), fe("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ir.length; l++) fe(ir[l], r);
                break;
              case "source":
                fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (fe("error", r), fe("load", r));
                break;
              case "details":
                fe("toggle", r);
                break;
              case "input":
                (Ys(r, o), fe("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!o.multiple }),
                  fe("invalid", r));
                break;
              case "textarea":
                (Js(r, o), fe("invalid", r));
            }
            (Zl(n, o), (l = null));
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (o.suppressHydrationWarning !== !0 &&
                        qr(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (o.suppressHydrationWarning !== !0 &&
                        qr(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : z.hasOwnProperty(i) &&
                    u != null &&
                    i === "onScroll" &&
                    fe("scroll", r);
              }
            switch (n) {
              case "input":
                (Mr(r), qs(r, o, !0));
                break;
              case "textarea":
                (Mr(r), ei(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Jr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ti(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = i.createElement(n, { is: r.is }))
                    : ((e = i.createElement(n)),
                      n === "select" &&
                        ((i = e),
                        r.multiple
                          ? (i.multiple = !0)
                          : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[wt] = t),
              (e[cr] = r),
              pa(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Gl(n, r)), n)) {
                case "dialog":
                  (fe("cancel", e), fe("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (fe("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ir.length; l++) fe(ir[l], e);
                  l = r;
                  break;
                case "source":
                  (fe("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (fe("error", e), fe("load", e), (l = r));
                  break;
                case "details":
                  (fe("toggle", e), (l = r));
                  break;
                case "input":
                  (Ys(e, r), (l = $l(e, r)), fe("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = L({}, r, { value: void 0 })),
                    fe("invalid", e));
                  break;
                case "textarea":
                  (Js(e, r), (l = Vl(e, r)), fe("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Zl(n, l), (u = l));
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var c = u[o];
                  o === "style"
                    ? li(e, c)
                    : o === "dangerouslySetInnerHTML"
                      ? ((c = c ? c.__html : void 0), c != null && ni(e, c))
                      : o === "children"
                        ? typeof c == "string"
                          ? (n !== "textarea" || c !== "") && Hn(e, c)
                          : typeof c == "number" && Hn(e, "" + c)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (z.hasOwnProperty(o)
                            ? c != null && o === "onScroll" && fe("scroll", e)
                            : c != null && Ue(e, o, c, i));
                }
              switch (n) {
                case "input":
                  (Mr(e), qs(e, r, !1));
                  break;
                case "textarea":
                  (Mr(e), ei(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + te(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? yn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        yn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Jr);
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
        return (Be(t), null);
      case 6:
        if (e && t.stateNode != null) ha(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(d(166));
          if (((n = an(hr.current)), an(St.current), ol(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[wt] = t),
              (o = r.nodeValue !== n) && ((e = rt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  qr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    qr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[wt] = t),
              (t.stateNode = r));
        }
        return (Be(t), null);
      case 13:
        if (
          (pe(ve),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ge && lt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (vu(), Ln(), (t.flags |= 98560), (o = !1));
          else if (((o = ol(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(d(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(d(317));
              o[wt] = t;
            } else
              (Ln(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Be(t), (o = !1));
          } else (ht !== null && (zs(ht), (ht = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ve.current & 1) !== 0
                  ? Re === 0 && (Re = 3)
                  : _s())),
            t.updateQueue !== null && (t.flags |= 4),
            Be(t),
            null);
      case 4:
        return (
          In(),
          ps(e, t),
          e === null && ur(t.stateNode.containerInfo),
          Be(t),
          null
        );
      case 10:
        return ($o(t.type._context), Be(t), null);
      case 17:
        return (Ye(t.type) && el(), Be(t), null);
      case 19:
        if ((pe(ve), (o = t.memoizedState), o === null)) return (Be(t), null);
        if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
          if (r) kr(o, !1);
          else {
            if (Re !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((i = dl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      kr(o, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (i = o.alternate),
                      i === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = i.childLanes),
                          (o.lanes = i.lanes),
                          (o.child = i.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = i.memoizedProps),
                          (o.memoizedState = i.memoizedState),
                          (o.updateQueue = i.updateQueue),
                          (o.type = i.type),
                          (e = i.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (ce(ve, (ve.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              ze() > Un &&
              ((t.flags |= 128), (r = !0), kr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = dl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                kr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !i.alternate &&
                  !ge)
              )
                return (Be(t), null);
            } else
              2 * ze() - o.renderingStartTime > Un &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), kr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = o.last),
              n !== null ? (n.sibling = i) : (t.child = i),
              (o.last = i));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = ze()),
            (t.sibling = null),
            (n = ve.current),
            ce(ve, r ? (n & 1) | 2 : n & 1),
            t)
          : (Be(t), null);
      case 22:
      case 23:
        return (
          Es(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (ot & 1073741824) !== 0 &&
              (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Be(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function Bd(e, t) {
    switch ((Io(t), t.tag)) {
      case 1:
        return (
          Ye(t.type) && el(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          In(),
          pe(Ke),
          pe($e),
          Ko(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Zo(t), null);
      case 13:
        if (
          (pe(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(d(340));
          Ln();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (pe(ve), null);
      case 4:
        return (In(), null);
      case 10:
        return ($o(t.type._context), null);
      case 22:
      case 23:
        return (Es(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var kl = !1,
    Ve = !1,
    Vd = typeof WeakSet == "function" ? WeakSet : Set,
    N = null;
  function Fn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          we(e, t, r);
        }
      else n.current = null;
  }
  function ms(e, t, n) {
    try {
      n();
    } catch (r) {
      we(e, t, r);
    }
  }
  var ya = !1;
  function Qd(e, t) {
    if (((Eo = Wr), (e = Ki()), vo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              u = -1,
              c = -1,
              g = 0,
              S = 0,
              j = e,
              k = null;
            t: for (;;) {
              for (
                var P;
                j !== n || (l !== 0 && j.nodeType !== 3) || (u = i + l),
                  j !== o || (r !== 0 && j.nodeType !== 3) || (c = i + r),
                  j.nodeType === 3 && (i += j.nodeValue.length),
                  (P = j.firstChild) !== null;
              )
                ((k = j), (j = P));
              for (;;) {
                if (j === e) break t;
                if (
                  (k === n && ++g === l && (u = i),
                  k === o && ++S === r && (c = i),
                  (P = j.nextSibling) !== null)
                )
                  break;
                ((j = k), (k = j.parentNode));
              }
              j = P;
            }
            n = u === -1 || c === -1 ? null : { start: u, end: c };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      _o = { focusedElem: e, selectionRange: n }, Wr = !1, N = t;
      N !== null;
    )
      if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (N = e));
      else
        for (; N !== null;) {
          t = N;
          try {
            var R = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (R !== null) {
                    var T = R.memoizedProps,
                      Ce = R.memoizedState,
                      m = t.stateNode,
                      f = m.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? T : yt(t.type, T),
                        Ce,
                      );
                    m.__reactInternalSnapshotBeforeUpdate = f;
                  }
                  break;
                case 3:
                  var h = t.stateNode.containerInfo;
                  h.nodeType === 1
                    ? (h.textContent = "")
                    : h.nodeType === 9 &&
                      h.documentElement &&
                      h.removeChild(h.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(d(163));
              }
          } catch (C) {
            we(t, t.return, C);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (N = e));
            break;
          }
          N = t.return;
        }
    return ((R = ya), (ya = !1), R);
  }
  function wr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && ms(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function wl(e, t) {
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
  function hs(e) {
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
  function ga(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ga(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[wt],
          delete t[cr],
          delete t[Lo],
          delete t[_d],
          delete t[Md])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function va(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function xa(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || va(e.return)) return null;
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
  function ys(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Jr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ys(e, t, n), e = e.sibling; e !== null;)
        (ys(e, t, n), (e = e.sibling));
  }
  function gs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (gs(e, t, n), e = e.sibling; e !== null;)
        (gs(e, t, n), (e = e.sibling));
  }
  var Fe = null,
    gt = !1;
  function Kt(e, t, n) {
    for (n = n.child; n !== null;) (ka(e, t, n), (n = n.sibling));
  }
  function ka(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function")
      try {
        kt.onCommitFiberUnmount(Or, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ve || Fn(n, t);
      case 6:
        var r = Fe,
          l = gt;
        ((Fe = null),
          Kt(e, t, n),
          (Fe = r),
          (gt = l),
          Fe !== null &&
            (gt
              ? ((e = Fe),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Fe.removeChild(n.stateNode)));
        break;
      case 18:
        Fe !== null &&
          (gt
            ? ((e = Fe),
              (n = n.stateNode),
              e.nodeType === 8
                ? No(e.parentNode, n)
                : e.nodeType === 1 && No(e, n),
              bn(e))
            : No(Fe, n.stateNode));
        break;
      case 4:
        ((r = Fe),
          (l = gt),
          (Fe = n.stateNode.containerInfo),
          (gt = !0),
          Kt(e, t, n),
          (Fe = r),
          (gt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ve &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              i = o.destroy;
            ((o = o.tag),
              i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && ms(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        Kt(e, t, n);
        break;
      case 1:
        if (
          !Ve &&
          (Fn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (u) {
            we(n, t, u);
          }
        Kt(e, t, n);
        break;
      case 21:
        Kt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ve = (r = Ve) || n.memoizedState !== null), Kt(e, t, n), (Ve = r))
          : Kt(e, t, n);
        break;
      default:
        Kt(e, t, n);
    }
  }
  function wa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Vd()),
        t.forEach(function (r) {
          var l = ef.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function vt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            i = t,
            u = i;
          e: for (; u !== null;) {
            switch (u.tag) {
              case 5:
                ((Fe = u.stateNode), (gt = !1));
                break e;
              case 3:
                ((Fe = u.stateNode.containerInfo), (gt = !0));
                break e;
              case 4:
                ((Fe = u.stateNode.containerInfo), (gt = !0));
                break e;
            }
            u = u.return;
          }
          if (Fe === null) throw Error(d(160));
          (ka(o, i, l), (Fe = null), (gt = !1));
          var c = l.alternate;
          (c !== null && (c.return = null), (l.return = null));
        } catch (g) {
          we(l, t, g);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null;) (Sa(t, e), (t = t.sibling));
  }
  function Sa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((vt(t, e), zt(e), r & 4)) {
          try {
            (wr(3, e, e.return), wl(3, e));
          } catch (T) {
            we(e, e.return, T);
          }
          try {
            wr(5, e, e.return);
          } catch (T) {
            we(e, e.return, T);
          }
        }
        break;
      case 1:
        (vt(t, e), zt(e), r & 512 && n !== null && Fn(n, n.return));
        break;
      case 5:
        if (
          (vt(t, e),
          zt(e),
          r & 512 && n !== null && Fn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Hn(l, "");
          } catch (T) {
            we(e, e.return, T);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            i = n !== null ? n.memoizedProps : o,
            u = e.type,
            c = e.updateQueue;
          if (((e.updateQueue = null), c !== null))
            try {
              (u === "input" &&
                o.type === "radio" &&
                o.name != null &&
                Xs(l, o),
                Gl(u, i));
              var g = Gl(u, o);
              for (i = 0; i < c.length; i += 2) {
                var S = c[i],
                  j = c[i + 1];
                S === "style"
                  ? li(l, j)
                  : S === "dangerouslySetInnerHTML"
                    ? ni(l, j)
                    : S === "children"
                      ? Hn(l, j)
                      : Ue(l, S, j, g);
              }
              switch (u) {
                case "input":
                  Hl(l, o);
                  break;
                case "textarea":
                  bs(l, o);
                  break;
                case "select":
                  var k = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var P = o.value;
                  P != null
                    ? yn(l, !!o.multiple, P, !1)
                    : k !== !!o.multiple &&
                      (o.defaultValue != null
                        ? yn(l, !!o.multiple, o.defaultValue, !0)
                        : yn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[cr] = o;
            } catch (T) {
              we(e, e.return, T);
            }
        }
        break;
      case 6:
        if ((vt(t, e), zt(e), r & 4)) {
          if (e.stateNode === null) throw Error(d(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (T) {
            we(e, e.return, T);
          }
        }
        break;
      case 3:
        if (
          (vt(t, e), zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            bn(t.containerInfo);
          } catch (T) {
            we(e, e.return, T);
          }
        break;
      case 4:
        (vt(t, e), zt(e));
        break;
      case 13:
        (vt(t, e),
          zt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ks = ze())),
          r & 4 && wa(e));
        break;
      case 22:
        if (
          ((S = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ve = (g = Ve) || S), vt(t, e), (Ve = g)) : vt(t, e),
          zt(e),
          r & 8192)
        ) {
          if (
            ((g = e.memoizedState !== null),
            (e.stateNode.isHidden = g) && !S && (e.mode & 1) !== 0)
          )
            for (N = e, S = e.child; S !== null;) {
              for (j = N = S; N !== null;) {
                switch (((k = N), (P = k.child), k.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    wr(4, k, k.return);
                    break;
                  case 1:
                    Fn(k, k.return);
                    var R = k.stateNode;
                    if (typeof R.componentWillUnmount == "function") {
                      ((r = k), (n = k.return));
                      try {
                        ((t = r),
                          (R.props = t.memoizedProps),
                          (R.state = t.memoizedState),
                          R.componentWillUnmount());
                      } catch (T) {
                        we(r, n, T);
                      }
                    }
                    break;
                  case 5:
                    Fn(k, k.return);
                    break;
                  case 22:
                    if (k.memoizedState !== null) {
                      Ca(j);
                      continue;
                    }
                }
                P !== null ? ((P.return = k), (N = P)) : Ca(j);
              }
              S = S.sibling;
            }
          e: for (S = null, j = e; ;) {
            if (j.tag === 5) {
              if (S === null) {
                S = j;
                try {
                  ((l = j.stateNode),
                    g
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((u = j.stateNode),
                        (c = j.memoizedProps.style),
                        (i =
                          c != null && c.hasOwnProperty("display")
                            ? c.display
                            : null),
                        (u.style.display = ri("display", i))));
                } catch (T) {
                  we(e, e.return, T);
                }
              }
            } else if (j.tag === 6) {
              if (S === null)
                try {
                  j.stateNode.nodeValue = g ? "" : j.memoizedProps;
                } catch (T) {
                  we(e, e.return, T);
                }
            } else if (
              ((j.tag !== 22 && j.tag !== 23) ||
                j.memoizedState === null ||
                j === e) &&
              j.child !== null
            ) {
              ((j.child.return = j), (j = j.child));
              continue;
            }
            if (j === e) break e;
            for (; j.sibling === null;) {
              if (j.return === null || j.return === e) break e;
              (S === j && (S = null), (j = j.return));
            }
            (S === j && (S = null),
              (j.sibling.return = j.return),
              (j = j.sibling));
          }
        }
        break;
      case 19:
        (vt(t, e), zt(e), r & 4 && wa(e));
        break;
      case 21:
        break;
      default:
        (vt(t, e), zt(e));
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (va(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(d(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Hn(l, ""), (r.flags &= -33));
            var o = xa(e);
            gs(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              u = xa(e);
            ys(e, u, i);
            break;
          default:
            throw Error(d(161));
        }
      } catch (c) {
        we(e, e.return, c);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Zd(e, t, n) {
    ((N = e), ja(e));
  }
  function ja(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null;) {
      var l = N,
        o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || kl;
        if (!i) {
          var u = l.alternate,
            c = (u !== null && u.memoizedState !== null) || Ve;
          u = kl;
          var g = Ve;
          if (((kl = i), (Ve = c) && !g))
            for (N = l; N !== null;)
              ((i = N),
                (c = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? Ea(l)
                  : c !== null
                    ? ((c.return = i), (N = c))
                    : Ea(l));
          for (; o !== null;) ((N = o), ja(o), (o = o.sibling));
          ((N = l), (kl = u), (Ve = g));
        }
        za(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && o !== null
          ? ((o.return = l), (N = o))
          : za(e);
    }
  }
  function za(e) {
    for (; N !== null;) {
      var t = N;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ve || wl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ve)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : yt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var o = t.updateQueue;
                o !== null && Cu(t, o, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Cu(t, i, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var c = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      c.autoFocus && n.focus();
                      break;
                    case "img":
                      c.src && (n.src = c.src);
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
                  var g = t.alternate;
                  if (g !== null) {
                    var S = g.memoizedState;
                    if (S !== null) {
                      var j = S.dehydrated;
                      j !== null && bn(j);
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
                throw Error(d(163));
            }
          Ve || (t.flags & 512 && hs(t));
        } catch (k) {
          we(t, t.return, k);
        }
      }
      if (t === e) {
        N = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (N = n));
        break;
      }
      N = t.return;
    }
  }
  function Ca(e) {
    for (; N !== null;) {
      var t = N;
      if (t === e) {
        N = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (N = n));
        break;
      }
      N = t.return;
    }
  }
  function Ea(e) {
    for (; N !== null;) {
      var t = N;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              wl(4, t);
            } catch (c) {
              we(t, n, c);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (c) {
                we(t, l, c);
              }
            }
            var o = t.return;
            try {
              hs(t);
            } catch (c) {
              we(t, o, c);
            }
            break;
          case 5:
            var i = t.return;
            try {
              hs(t);
            } catch (c) {
              we(t, i, c);
            }
        }
      } catch (c) {
        we(t, t.return, c);
      }
      if (t === e) {
        N = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (N = u));
        break;
      }
      N = t.return;
    }
  }
  var Gd = Math.ceil,
    Sl = le.ReactCurrentDispatcher,
    vs = le.ReactCurrentOwner,
    dt = le.ReactCurrentBatchConfig,
    X = 0,
    Ie = null,
    _e = null,
    Ae = 0,
    ot = 0,
    An = Bt(0),
    Re = 0,
    Sr = null,
    dn = 0,
    jl = 0,
    xs = 0,
    jr = null,
    qe = null,
    ks = 0,
    Un = 1 / 0,
    Rt = null,
    zl = !1,
    ws = null,
    Yt = null,
    Cl = !1,
    Xt = null,
    El = 0,
    zr = 0,
    Ss = null,
    _l = -1,
    Ml = 0;
  function Ze() {
    return (X & 6) !== 0 ? ze() : _l !== -1 ? _l : (_l = ze());
  }
  function qt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (X & 2) !== 0 && Ae !== 0
        ? Ae & -Ae
        : Nd.transition !== null
          ? (Ml === 0 && (Ml = xi()), Ml)
          : ((e = ne),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Mi(e.type))),
            e);
  }
  function xt(e, t, n, r) {
    if (50 < zr) throw ((zr = 0), (Ss = null), Error(d(185)));
    (Kn(e, n, r),
      ((X & 2) === 0 || e !== Ie) &&
        (e === Ie && ((X & 2) === 0 && (jl |= n), Re === 4 && Jt(e, Ae)),
        Je(e, r),
        n === 1 &&
          X === 0 &&
          (t.mode & 1) === 0 &&
          ((Un = ze() + 500), nl && Qt())));
  }
  function Je(e, t) {
    var n = e.callbackNode;
    Nc(e, t);
    var r = Fr(e, e === Ie ? Ae : 0);
    if (r === 0)
      (n !== null && yi(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && yi(n), t === 1))
        (e.tag === 0 ? Pd(Ma.bind(null, e)) : pu(Ma.bind(null, e)),
          Cd(function () {
            (X & 6) === 0 && Qt();
          }),
          (n = null));
      else {
        switch (ki(r)) {
          case 1:
            n = eo;
            break;
          case 4:
            n = gi;
            break;
          case 16:
            n = Tr;
            break;
          case 536870912:
            n = vi;
            break;
          default:
            n = Tr;
        }
        n = Da(n, _a.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function _a(e, t) {
    if (((_l = -1), (Ml = 0), (X & 6) !== 0)) throw Error(d(327));
    var n = e.callbackNode;
    if (Wn() && e.callbackNode !== n) return null;
    var r = Fr(e, e === Ie ? Ae : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Pl(e, r);
    else {
      t = r;
      var l = X;
      X |= 2;
      var o = Na();
      (Ie !== e || Ae !== t) && ((Rt = null), (Un = ze() + 500), pn(e, t));
      do
        try {
          Xd();
          break;
        } catch (u) {
          Pa(e, u);
        }
      while (!0);
      (Wo(),
        (Sl.current = o),
        (X = l),
        _e !== null ? (t = 0) : ((Ie = null), (Ae = 0), (t = Re)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = to(e)), l !== 0 && ((r = l), (t = js(e, l)))),
        t === 1)
      )
        throw ((n = Sr), pn(e, 0), Jt(e, r), Je(e, ze()), n);
      if (t === 6) Jt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Kd(l) &&
            ((t = Pl(e, r)),
            t === 2 && ((o = to(e)), o !== 0 && ((r = o), (t = js(e, o)))),
            t === 1))
        )
          throw ((n = Sr), pn(e, 0), Jt(e, r), Je(e, ze()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            mn(e, qe, Rt);
            break;
          case 3:
            if (
              (Jt(e, r),
              (r & 130023424) === r && ((t = ks + 500 - ze()), 10 < t))
            ) {
              if (Fr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Ze(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = Po(mn.bind(null, e, qe, Rt), t);
              break;
            }
            mn(e, qe, Rt);
            break;
          case 4:
            if ((Jt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var i = 31 - pt(r);
              ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
            }
            if (
              ((r = l),
              (r = ze() - r),
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
                            : 1960 * Gd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Po(mn.bind(null, e, qe, Rt), r);
              break;
            }
            mn(e, qe, Rt);
            break;
          case 5:
            mn(e, qe, Rt);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return (Je(e, ze()), e.callbackNode === n ? _a.bind(null, e) : null);
  }
  function js(e, t) {
    var n = jr;
    return (
      e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
      (e = Pl(e, t)),
      e !== 2 && ((t = qe), (qe = n), t !== null && zs(t)),
      e
    );
  }
  function zs(e) {
    qe === null ? (qe = e) : qe.push.apply(qe, e);
  }
  function Kd(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!mt(o(), l)) return !1;
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
  function Jt(e, t) {
    for (
      t &= ~xs,
        t &= ~jl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - pt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Ma(e) {
    if ((X & 6) !== 0) throw Error(d(327));
    Wn();
    var t = Fr(e, 0);
    if ((t & 1) === 0) return (Je(e, ze()), null);
    var n = Pl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = to(e);
      r !== 0 && ((t = r), (n = js(e, r)));
    }
    if (n === 1) throw ((n = Sr), pn(e, 0), Jt(e, t), Je(e, ze()), n);
    if (n === 6) throw Error(d(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      mn(e, qe, Rt),
      Je(e, ze()),
      null
    );
  }
  function Cs(e, t) {
    var n = X;
    X |= 1;
    try {
      return e(t);
    } finally {
      ((X = n), X === 0 && ((Un = ze() + 500), nl && Qt()));
    }
  }
  function fn(e) {
    Xt !== null && Xt.tag === 0 && (X & 6) === 0 && Wn();
    var t = X;
    X |= 1;
    var n = dt.transition,
      r = ne;
    try {
      if (((dt.transition = null), (ne = 1), e)) return e();
    } finally {
      ((ne = r), (dt.transition = n), (X = t), (X & 6) === 0 && Qt());
    }
  }
  function Es() {
    ((ot = An.current), pe(An));
  }
  function pn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), zd(n)), _e !== null))
      for (n = _e.return; n !== null;) {
        var r = n;
        switch ((Io(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && el());
            break;
          case 3:
            (In(), pe(Ke), pe($e), Ko());
            break;
          case 5:
            Zo(r);
            break;
          case 4:
            In();
            break;
          case 13:
            pe(ve);
            break;
          case 19:
            pe(ve);
            break;
          case 10:
            $o(r.type._context);
            break;
          case 22:
          case 23:
            Es();
        }
        n = n.return;
      }
    if (
      ((Ie = e),
      (_e = e = bt(e.current, null)),
      (Ae = ot = t),
      (Re = 0),
      (Sr = null),
      (xs = jl = dn = 0),
      (qe = jr = null),
      un !== null)
    ) {
      for (t = 0; t < un.length; t++)
        if (((n = un[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var i = o.next;
            ((o.next = l), (r.next = i));
          }
          n.pending = r;
        }
      un = null;
    }
    return e;
  }
  function Pa(e, t) {
    do {
      var n = _e;
      try {
        if ((Wo(), (fl.current = yl), pl)) {
          for (var r = xe.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          pl = !1;
        }
        if (
          ((cn = 0),
          (Oe = Le = xe = null),
          (yr = !1),
          (gr = 0),
          (vs.current = null),
          n === null || n.return === null)
        ) {
          ((Re = 1), (Sr = t), (_e = null));
          break;
        }
        e: {
          var o = e,
            i = n.return,
            u = n,
            c = t;
          if (
            ((t = Ae),
            (u.flags |= 32768),
            c !== null && typeof c == "object" && typeof c.then == "function")
          ) {
            var g = c,
              S = u,
              j = S.tag;
            if ((S.mode & 1) === 0 && (j === 0 || j === 11 || j === 15)) {
              var k = S.alternate;
              k
                ? ((S.updateQueue = k.updateQueue),
                  (S.memoizedState = k.memoizedState),
                  (S.lanes = k.lanes))
                : ((S.updateQueue = null), (S.memoizedState = null));
            }
            var P = ea(i);
            if (P !== null) {
              ((P.flags &= -257),
                ta(P, i, u, o, t),
                P.mode & 1 && bu(o, g, t),
                (t = P),
                (c = g));
              var R = t.updateQueue;
              if (R === null) {
                var T = new Set();
                (T.add(c), (t.updateQueue = T));
              } else R.add(c);
              break e;
            } else {
              if ((t & 1) === 0) {
                (bu(o, g, t), _s());
                break e;
              }
              c = Error(d(426));
            }
          } else if (ge && u.mode & 1) {
            var Ce = ea(i);
            if (Ce !== null) {
              ((Ce.flags & 65536) === 0 && (Ce.flags |= 256),
                ta(Ce, i, u, o, t),
                Ao(Dn(c, u)));
              break e;
            }
          }
          ((o = c = Dn(c, u)),
            Re !== 4 && (Re = 2),
            jr === null ? (jr = [o]) : jr.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var m = qu(o, c, t);
                zu(o, m);
                break e;
              case 1:
                u = c;
                var f = o.type,
                  h = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof f.getDerivedStateFromError == "function" ||
                    (h !== null &&
                      typeof h.componentDidCatch == "function" &&
                      (Yt === null || !Yt.has(h))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var C = Ju(o, u, t);
                  zu(o, C);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Ra(n);
      } catch (O) {
        ((t = O), _e === n && n !== null && (_e = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Na() {
    var e = Sl.current;
    return ((Sl.current = yl), e === null ? yl : e);
  }
  function _s() {
    ((Re === 0 || Re === 3 || Re === 2) && (Re = 4),
      Ie === null ||
        ((dn & 268435455) === 0 && (jl & 268435455) === 0) ||
        Jt(Ie, Ae));
  }
  function Pl(e, t) {
    var n = X;
    X |= 2;
    var r = Na();
    (Ie !== e || Ae !== t) && ((Rt = null), pn(e, t));
    do
      try {
        Yd();
        break;
      } catch (l) {
        Pa(e, l);
      }
    while (!0);
    if ((Wo(), (X = n), (Sl.current = r), _e !== null)) throw Error(d(261));
    return ((Ie = null), (Ae = 0), Re);
  }
  function Yd() {
    for (; _e !== null;) La(_e);
  }
  function Xd() {
    for (; _e !== null && !wc();) La(_e);
  }
  function La(e) {
    var t = Ia(e.alternate, e, ot);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Ra(e) : (_e = t),
      (vs.current = null));
  }
  function Ra(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Hd(n, t, ot)), n !== null)) {
          _e = n;
          return;
        }
      } else {
        if (((n = Bd(n, t)), n !== null)) {
          ((n.flags &= 32767), (_e = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Re = 6), (_e = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Re === 0 && (Re = 5);
  }
  function mn(e, t, n) {
    var r = ne,
      l = dt.transition;
    try {
      ((dt.transition = null), (ne = 1), qd(e, t, n, r));
    } finally {
      ((dt.transition = l), (ne = r));
    }
    return null;
  }
  function qd(e, t, n, r) {
    do Wn();
    while (Xt !== null);
    if ((X & 6) !== 0) throw Error(d(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(d(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (Lc(e, o),
      e === Ie && ((_e = Ie = null), (Ae = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Cl ||
        ((Cl = !0),
        Da(Tr, function () {
          return (Wn(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = dt.transition), (dt.transition = null));
      var i = ne;
      ne = 1;
      var u = X;
      ((X |= 4),
        (vs.current = null),
        Qd(e, n),
        Sa(n, e),
        gd(_o),
        (Wr = !!Eo),
        (_o = Eo = null),
        (e.current = n),
        Zd(n),
        Sc(),
        (X = u),
        (ne = i),
        (dt.transition = o));
    } else e.current = n;
    if (
      (Cl && ((Cl = !1), (Xt = e), (El = l)),
      (o = e.pendingLanes),
      o === 0 && (Yt = null),
      Cc(n.stateNode),
      Je(e, ze()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (zl) throw ((zl = !1), (e = ws), (ws = null), e);
    return (
      (El & 1) !== 0 && e.tag !== 0 && Wn(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === Ss ? zr++ : ((zr = 0), (Ss = e))) : (zr = 0),
      Qt(),
      null
    );
  }
  function Wn() {
    if (Xt !== null) {
      var e = ki(El),
        t = dt.transition,
        n = ne;
      try {
        if (((dt.transition = null), (ne = 16 > e ? 16 : e), Xt === null))
          var r = !1;
        else {
          if (((e = Xt), (Xt = null), (El = 0), (X & 6) !== 0))
            throw Error(d(331));
          var l = X;
          for (X |= 4, N = e.current; N !== null;) {
            var o = N,
              i = o.child;
            if ((N.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var c = 0; c < u.length; c++) {
                  var g = u[c];
                  for (N = g; N !== null;) {
                    var S = N;
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wr(8, S, o);
                    }
                    var j = S.child;
                    if (j !== null) ((j.return = S), (N = j));
                    else
                      for (; N !== null;) {
                        S = N;
                        var k = S.sibling,
                          P = S.return;
                        if ((ga(S), S === g)) {
                          N = null;
                          break;
                        }
                        if (k !== null) {
                          ((k.return = P), (N = k));
                          break;
                        }
                        N = P;
                      }
                  }
                }
                var R = o.alternate;
                if (R !== null) {
                  var T = R.child;
                  if (T !== null) {
                    R.child = null;
                    do {
                      var Ce = T.sibling;
                      ((T.sibling = null), (T = Ce));
                    } while (T !== null);
                  }
                }
                N = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null)
              ((i.return = o), (N = i));
            else
              e: for (; N !== null;) {
                if (((o = N), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wr(9, o, o.return);
                  }
                var m = o.sibling;
                if (m !== null) {
                  ((m.return = o.return), (N = m));
                  break e;
                }
                N = o.return;
              }
          }
          var f = e.current;
          for (N = f; N !== null;) {
            i = N;
            var h = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && h !== null)
              ((h.return = i), (N = h));
            else
              e: for (i = f; N !== null;) {
                if (((u = N), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wl(9, u);
                    }
                  } catch (O) {
                    we(u, u.return, O);
                  }
                if (u === i) {
                  N = null;
                  break e;
                }
                var C = u.sibling;
                if (C !== null) {
                  ((C.return = u.return), (N = C));
                  break e;
                }
                N = u.return;
              }
          }
          if (
            ((X = l), Qt(), kt && typeof kt.onPostCommitFiberRoot == "function")
          )
            try {
              kt.onPostCommitFiberRoot(Or, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((ne = n), (dt.transition = t));
      }
    }
    return !1;
  }
  function Ta(e, t, n) {
    ((t = Dn(n, t)),
      (t = qu(e, t, 1)),
      (e = Gt(e, t, 1)),
      (t = Ze()),
      e !== null && (Kn(e, 1, t), Je(e, t)));
  }
  function we(e, t, n) {
    if (e.tag === 3) Ta(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Ta(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Yt === null || !Yt.has(r)))
          ) {
            ((e = Dn(n, e)),
              (e = Ju(t, e, 1)),
              (t = Gt(t, e, 1)),
              (e = Ze()),
              t !== null && (Kn(t, 1, e), Je(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jd(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Ze()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ie === e &&
        (Ae & n) === n &&
        (Re === 4 || (Re === 3 && (Ae & 130023424) === Ae && 500 > ze() - ks)
          ? pn(e, 0)
          : (xs |= n)),
      Je(e, t));
  }
  function Oa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Dr), (Dr <<= 1), (Dr & 130023424) === 0 && (Dr = 4194304)));
    var n = Ze();
    ((e = Pt(e, t)), e !== null && (Kn(e, t, n), Je(e, n)));
  }
  function bd(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Oa(e, n));
  }
  function ef(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    (r !== null && r.delete(t), Oa(e, n));
  }
  var Ia;
  Ia = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ke.current) Xe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Xe = !1), $d(e, t, n));
        Xe = (e.flags & 131072) !== 0;
      }
    else ((Xe = !1), ge && (t.flags & 1048576) !== 0 && mu(t, ll, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (xl(e, t), (e = t.pendingProps));
        var l = Mn(t, $e.current);
        (On(t, n), (l = qo(null, t, r, e, l, n)));
        var o = Jo();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ye(r) ? ((o = !0), tl(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Vo(t),
              (l.updater = gl),
              (t.stateNode = l),
              (l._reactInternals = t),
              ls(t, r, e, n),
              (t = us(null, t, r, !0, o, n)))
            : ((t.tag = 0), ge && o && Oo(t), Qe(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (xl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = nf(r)),
            (e = yt(r, e)),
            l)
          ) {
            case 0:
              t = is(null, t, r, e, n);
              break e;
            case 1:
              t = ia(null, t, r, e, n);
              break e;
            case 11:
              t = na(null, t, r, e, n);
              break e;
            case 14:
              t = ra(null, t, r, yt(r.type, e), n);
              break e;
          }
          throw Error(d(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          is(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          ia(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((ua(t), e === null)) throw Error(d(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            ju(e, t),
            cl(t, r, null, n));
          var i = t.memoizedState;
          if (((r = i.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              ((l = Dn(Error(d(423)), t)), (t = aa(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Dn(Error(d(424)), t)), (t = aa(e, t, r, n, l)));
              break e;
            } else
              for (
                lt = Ht(t.stateNode.containerInfo.firstChild),
                  rt = t,
                  ge = !0,
                  ht = null,
                  n = wu(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Ln(), r === l)) {
              t = Lt(e, t, n);
              break e;
            }
            Qe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Eu(t),
          e === null && Fo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (i = l.children),
          Mo(r, l) ? (i = null) : o !== null && Mo(r, o) && (t.flags |= 32),
          sa(e, t),
          Qe(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Fo(t), null);
      case 13:
        return ca(e, t, n);
      case 4:
        return (
          Qo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Rn(t, null, r, n)) : Qe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          na(e, t, r, l, n)
        );
      case 7:
        return (Qe(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Qe(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Qe(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            ce(il, r._currentValue),
            (r._currentValue = i),
            o !== null)
          )
            if (mt(o.value, i)) {
              if (o.children === l.children && !Ke.current) {
                t = Lt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null;) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var c = u.firstContext; c !== null;) {
                    if (c.context === r) {
                      if (o.tag === 1) {
                        ((c = Nt(-1, n & -n)), (c.tag = 2));
                        var g = o.updateQueue;
                        if (g !== null) {
                          g = g.shared;
                          var S = g.pending;
                          (S === null
                            ? (c.next = c)
                            : ((c.next = S.next), (S.next = c)),
                            (g.pending = c));
                        }
                      }
                      ((o.lanes |= n),
                        (c = o.alternate),
                        c !== null && (c.lanes |= n),
                        Ho(o.return, n, t),
                        (u.lanes |= n));
                      break;
                    }
                    c = c.next;
                  }
                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((i = o.return), i === null)) throw Error(d(341));
                  ((i.lanes |= n),
                    (u = i.alternate),
                    u !== null && (u.lanes |= n),
                    Ho(i, n, t),
                    (i = o.sibling));
                } else i = o.child;
                if (i !== null) i.return = o;
                else
                  for (i = o; i !== null;) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((o = i.sibling), o !== null)) {
                      ((o.return = i.return), (i = o));
                      break;
                    }
                    i = i.return;
                  }
                o = i;
              }
          (Qe(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          On(t, n),
          (l = at(l)),
          (r = r(l)),
          (t.flags |= 1),
          Qe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = yt(r, t.pendingProps)),
          (l = yt(r.type, l)),
          ra(e, t, r, l, n)
        );
      case 15:
        return la(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : yt(r, l)),
          xl(e, t),
          (t.tag = 1),
          Ye(r) ? ((e = !0), tl(t)) : (e = !1),
          On(t, n),
          Yu(t, r, l),
          ls(t, r, l, n),
          us(null, t, r, !0, e, n)
        );
      case 19:
        return fa(e, t, n);
      case 22:
        return oa(e, t, n);
    }
    throw Error(d(156, t.tag));
  };
  function Da(e, t) {
    return hi(e, t);
  }
  function tf(e, t, n, r) {
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
  function ft(e, t, n, r) {
    return new tf(e, t, n, r);
  }
  function Ms(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function nf(e) {
    if (typeof e == "function") return Ms(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === We)) return 11;
      if (e === he) return 14;
    }
    return 2;
  }
  function bt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ft(e.tag, t, e.key, e.mode)),
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
  function Nl(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == "function")) Ms(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case de:
          return hn(n.children, l, o, t);
        case Ee:
          ((i = 8), (l |= 8));
          break;
        case Ge:
          return (
            (e = ft(12, n, t, l | 2)),
            (e.elementType = Ge),
            (e.lanes = o),
            e
          );
        case Ne:
          return (
            (e = ft(13, n, t, l)),
            (e.elementType = Ne),
            (e.lanes = o),
            e
          );
        case ue:
          return (
            (e = ft(19, n, t, l)),
            (e.elementType = ue),
            (e.lanes = o),
            e
          );
        case se:
          return Ll(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case et:
                i = 10;
                break e;
              case st:
                i = 9;
                break e;
              case We:
                i = 11;
                break e;
              case he:
                i = 14;
                break e;
              case ke:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(d(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ft(i, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = o),
      t
    );
  }
  function hn(e, t, n, r) {
    return ((e = ft(7, e, r, t)), (e.lanes = n), e);
  }
  function Ll(e, t, n, r) {
    return (
      (e = ft(22, e, r, t)),
      (e.elementType = se),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ps(e, t, n) {
    return ((e = ft(6, e, null, t)), (e.lanes = n), e);
  }
  function Ns(e, t, n) {
    return (
      (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function rf(e, t, n, r, l) {
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
      (this.eventTimes = no(0)),
      (this.expirationTimes = no(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = no(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Ls(e, t, n, r, l, o, i, u, c) {
    return (
      (e = new rf(e, t, n, u, c)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = ft(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Vo(o),
      e
    );
  }
  function lf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: oe,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Fa(e) {
    if (!e) return Vt;
    e = e._reactInternals;
    e: {
      if (nn(e) !== e || e.tag !== 1) throw Error(d(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ye(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(d(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ye(n)) return du(e, n, t);
    }
    return t;
  }
  function Aa(e, t, n, r, l, o, i, u, c) {
    return (
      (e = Ls(n, r, !0, e, l, o, i, u, c)),
      (e.context = Fa(null)),
      (n = e.current),
      (r = Ze()),
      (l = qt(n)),
      (o = Nt(r, l)),
      (o.callback = t ?? null),
      Gt(n, o, l),
      (e.current.lanes = l),
      Kn(e, l, r),
      Je(e, r),
      e
    );
  }
  function Rl(e, t, n, r) {
    var l = t.current,
      o = Ze(),
      i = qt(l);
    return (
      (n = Fa(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Nt(o, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Gt(l, t, i)),
      e !== null && (xt(e, l, i, o), al(e, l, i)),
      i
    );
  }
  function Tl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ua(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Rs(e, t) {
    (Ua(e, t), (e = e.alternate) && Ua(e, t));
  }
  function of() {
    return null;
  }
  var Wa =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ts(e) {
    this._internalRoot = e;
  }
  ((Ol.prototype.render = Ts.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(d(409));
      Rl(e, t, null, null);
    }),
    (Ol.prototype.unmount = Ts.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (fn(function () {
            Rl(null, e, null, null);
          }),
            (t[Ct] = null));
        }
      }));
  function Ol(e) {
    this._internalRoot = e;
  }
  Ol.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ji();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
      (Ut.splice(n, 0, e), n === 0 && Ei(e));
    }
  };
  function Os(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Il(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function $a() {}
  function sf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var g = Tl(i);
          o.call(g);
        };
      }
      var i = Aa(t, r, e, 0, null, !1, !1, "", $a);
      return (
        (e._reactRootContainer = i),
        (e[Ct] = i.current),
        ur(e.nodeType === 8 ? e.parentNode : e),
        fn(),
        i
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var g = Tl(c);
        u.call(g);
      };
    }
    var c = Ls(e, 0, !1, null, null, !1, !1, "", $a);
    return (
      (e._reactRootContainer = c),
      (e[Ct] = c.current),
      ur(e.nodeType === 8 ? e.parentNode : e),
      fn(function () {
        Rl(t, c, n, r);
      }),
      c
    );
  }
  function Dl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var c = Tl(i);
          u.call(c);
        };
      }
      Rl(t, i, e, l);
    } else i = sf(n, t, e, l, r);
    return Tl(i);
  }
  ((wi = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Gn(t.pendingLanes);
          n !== 0 &&
            (ro(t, n | 1),
            Je(t, ze()),
            (X & 6) === 0 && ((Un = ze() + 500), Qt()));
        }
        break;
      case 13:
        (fn(function () {
          var r = Pt(e, 1);
          if (r !== null) {
            var l = Ze();
            xt(r, e, 1, l);
          }
        }),
          Rs(e, 1));
    }
  }),
    (lo = function (e) {
      if (e.tag === 13) {
        var t = Pt(e, 134217728);
        if (t !== null) {
          var n = Ze();
          xt(t, e, 134217728, n);
        }
        Rs(e, 134217728);
      }
    }),
    (Si = function (e) {
      if (e.tag === 13) {
        var t = qt(e),
          n = Pt(e, t);
        if (n !== null) {
          var r = Ze();
          xt(n, e, t, r);
        }
        Rs(e, t);
      }
    }),
    (ji = function () {
      return ne;
    }),
    (zi = function (e, t) {
      var n = ne;
      try {
        return ((ne = e), t());
      } finally {
        ne = n;
      }
    }),
    (Xl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Hl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
                var l = br(r);
                if (!l) throw Error(d(90));
                (Ks(r), Hl(r, l));
              }
            }
          }
          break;
        case "textarea":
          bs(e, n);
          break;
        case "select":
          ((t = n.value), t != null && yn(e, !!n.multiple, t, !1));
      }
    }),
    (ui = Cs),
    (ai = fn));
  var uf = { usingClientEntryPoint: !1, Events: [dr, En, br, si, ii, Cs] },
    Cr = {
      findFiberByHostInstance: rn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    af = {
      bundleType: Cr.bundleType,
      version: Cr.version,
      rendererPackageName: Cr.rendererPackageName,
      rendererConfig: Cr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: le.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = pi(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Cr.findFiberByHostInstance || of,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fl.isDisabled && Fl.supportsFiber)
      try {
        ((Or = Fl.inject(af)), (kt = Fl));
      } catch {}
  }
  return (
    (be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uf),
    (be.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Os(t)) throw Error(d(200));
      return lf(e, t, null, n);
    }),
    (be.createRoot = function (e, t) {
      if (!Os(e)) throw Error(d(299));
      var n = !1,
        r = "",
        l = Wa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ls(e, 1, !1, null, null, n, !1, r, l)),
        (e[Ct] = t.current),
        ur(e.nodeType === 8 ? e.parentNode : e),
        new Ts(t)
      );
    }),
    (be.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(d(188))
          : ((e = Object.keys(e).join(",")), Error(d(268, e)));
      return ((e = pi(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (be.flushSync = function (e) {
      return fn(e);
    }),
    (be.hydrate = function (e, t, n) {
      if (!Il(t)) throw Error(d(200));
      return Dl(null, e, t, !0, n);
    }),
    (be.hydrateRoot = function (e, t, n) {
      if (!Os(e)) throw Error(d(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        i = Wa;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Aa(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[Ct] = t.current),
        ur(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Ol(t);
    }),
    (be.render = function (e, t, n) {
      if (!Il(t)) throw Error(d(200));
      return Dl(null, e, t, !1, n);
    }),
    (be.unmountComponentAtNode = function (e) {
      if (!Il(e)) throw Error(d(40));
      return e._reactRootContainer
        ? (fn(function () {
            Dl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Ct] = null));
            });
          }),
          !0)
        : !1;
    }),
    (be.unstable_batchedUpdates = Cs),
    (be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Il(n)) throw Error(d(200));
      if (e == null || e._reactInternals === void 0) throw Error(d(38));
      return Dl(e, t, n, !1, r);
    }),
    (be.version = "18.3.1-next-f1338f8080-20240426"),
    be
  );
}
var Ya;
function vf() {
  if (Ya) return Fs.exports;
  Ya = 1;
  function a() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (y) {
        console.error(y);
      }
  }
  return (a(), (Fs.exports = gf()), Fs.exports);
}
var Xa;
function xf() {
  if (Xa) return Al;
  Xa = 1;
  var a = vf();
  return ((Al.createRoot = a.createRoot), (Al.hydrateRoot = a.hydrateRoot), Al);
}
var kf = xf();
const wf = ic(kf),
  Sf = 3600 * 12,
  Qs = "comp_school_local_development_session",
  jf = "https://comp.school/fallback",
  tn = "comp.school",
  zf = /^(preview-[a-z0-9-]+)(?:\.[a-z0-9-]+)?\.comp\.school$/i,
  Cf = /^(preview-[a-z0-9-]+)\.[a-z0-9-]+\.pages\.dev$/i,
  Ef = Object.freeze({
    "comp.school": 3e3,
    "code.comp.school": 3001,
    "admin.comp.school": 3002,
    "exams.comp.school": 3010,
    "recall.comp.school": 3011,
    "forms.comp.school": 3012,
    "mark.comp.school": 3013,
    "games.comp.school": 3014,
    "self-assess.comp.school": 3015,
    "issues.comp.school": 3016,
    "printouts.comp.school": 3017,
    "docs.comp.school": 3018,
  });
function Zs(a) {
  const y = a
    .trim()
    .toLowerCase()
    .replace(/^\[|\]$/g, "");
  return y === "localhost" || y === "127.0.0.1" || y === "::1";
}
function _f(a) {
  return [
    `${Qs}=${encodeURIComponent(JSON.stringify({ version: 1, user: a }))}`,
    "Path=/",
    `Max-Age=${Sf}`,
    "SameSite=Lax",
  ].join("; ");
}
function Mf() {
  return [`${Qs}=`, "Path=/", "Max-Age=0", "SameSite=Lax"].join("; ");
}
function uc(a, y, d) {
  if (!d || !Zs(y)) return null;
  const x = Ff(a)[Qs];
  if (!x) return null;
  try {
    const z = JSON.parse(x),
      E = z.user;
    return z.version !== 1 ||
      !E ||
      typeof E.id != "string" ||
      typeof E.name != "string" ||
      !["admin", "teacher", "student"].includes(E.role)
      ? null
      : E;
  } catch {
    return null;
  }
}
function Pf(a) {
  return btoa(a).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function Nf(a) {
  let y = "";
  for (const d of a) y += String.fromCharCode(d);
  return Pf(y);
}
function Lf(a) {
  if (!a || !/^[A-Za-z0-9_-]+$/.test(a))
    throw new Error("Invalid base64url value");
  const y = a
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(Math.ceil(a.length / 4) * 4, "="),
    d = atob(y),
    x = new Uint8Array(d.length);
  for (let z = 0; z < d.length; z += 1) x[z] = d.charCodeAt(z);
  if (Nf(x) !== a) throw new Error("Non-canonical base64url value");
  return x;
}
function Rf(a) {
  const y = Lf(a);
  return new TextDecoder("utf-8", { fatal: !0 }).decode(y);
}
function Tf(a) {
  return !!a && typeof a == "object" && !Array.isArray(a);
}
function Of(a) {
  const y = JSON.parse(a);
  if (!Tf(y)) throw new Error("Expected a JSON object");
  return y;
}
function ac(a) {
  const y = a.trim().toLowerCase();
  return (y.match(zf) || y.match(Cf))?.[1] || null;
}
function cc(a) {
  if (Zs(a))
    return `http://${a.replace(/^\[|\]$/g, "") === "::1" ? "[::1]" : a}:3000`;
  const y = ac(a);
  return y ? `https://${y}.${tn}` : `https://${tn}`;
}
function dc(a, y) {
  if (Zs(a))
    try {
      const x = new URL(y),
        z = Ef[x.hostname.toLowerCase()];
      if (z)
        return (
          (x.protocol = "http:"),
          (x.hostname = a),
          (x.port = String(z)),
          x.toString()
        );
    } catch {
      return y;
    }
  const d = ac(a);
  if (!d) return y;
  try {
    const x = new URL(y),
      z = x.hostname.toLowerCase();
    if (z === tn || z.endsWith(`.${tn}`))
      return (
        (x.hostname = z === tn ? `${d}.${tn}` : `${d}.${z}`),
        x.toString()
      );
  } catch {
    return y;
  }
  return y;
}
function If(a) {
  if (!a?.trim()) return null;
  try {
    const y = new URL(a),
      d = y.hostname.toLowerCase();
    return y.protocol !== "https:" ||
      y.username ||
      y.password ||
      y.port ||
      d === tn ||
      !d.endsWith(`.${tn}`)
      ? null
      : y.toString();
  } catch {
    return null;
  }
}
function Df(a, y, d) {
  const x = d?.trim() || cc(a),
    z = If(dc(a, y));
  if (!z) return x;
  try {
    const E = new URL(x);
    return (E.searchParams.set("returnTo", z), E.toString());
  } catch {
    return x;
  }
}
function Ff(a) {
  return a
    ? a.split(";").reduce((y, d) => {
        const [x, ...z] = d.trim().split("=");
        if (!x) return y;
        const E = z.join("=");
        try {
          y[x] = decodeURIComponent(E);
        } catch {
          y[x] = E;
        }
        return y;
      }, {})
    : {};
}
function qa(a, y = new Date()) {
  if (!a) return !1;
  try {
    const [d] = a.split("."),
      x = Of(Rf(d));
    return (
      x.iss === jf &&
      typeof x.exp == "number" &&
      Number.isInteger(x.exp) &&
      x.exp > Math.floor(y.getTime() / 1e3)
    );
  } catch {
    return !1;
  }
}
const Ja = 64,
  ba = { x: 9, y: 12, width: 46, height: 44, rx: 13 },
  Y = "#1f2937",
  Te = "#ffffff",
  Se = 33,
  Ot = 24,
  It = 40,
  ec = new Set(["shell"]);
function Wl(a) {
  return a.detail || a.shade;
}
function Af(a) {
  const { shade: y, accent: d } = a,
    x = Wl(a);
  switch (a.ears) {
    case "pointed":
      return s.jsxs("g", {
        children: [
          s.jsx("path", { d: "M11 26 17 3 30 17Z", fill: y }),
          s.jsx("path", { d: "M53 26 47 3 34 17Z", fill: y }),
          s.jsx("path", { d: "M16.5 22 19 9.5 26 17Z", fill: d }),
          s.jsx("path", { d: "M47.5 22 45 9.5 38 17Z", fill: d }),
        ],
      });
    case "round":
      return s.jsxs("g", {
        children: [
          s.jsx("circle", { cx: "17", cy: "14", r: "8.5", fill: y }),
          s.jsx("circle", { cx: "47", cy: "14", r: "8.5", fill: y }),
          s.jsx("circle", { cx: "17", cy: "14", r: "4", fill: d }),
          s.jsx("circle", { cx: "47", cy: "14", r: "4", fill: d }),
        ],
      });
    case "tall":
      return s.jsxs("g", {
        children: [
          s.jsxs("g", {
            transform: "rotate(-9 20.5 9)",
            children: [
              s.jsx("rect", {
                x: "15",
                y: "-5",
                width: "11",
                height: "27",
                rx: "5.5",
                fill: y,
              }),
              s.jsx("rect", {
                x: "18",
                y: "0",
                width: "5",
                height: "18",
                rx: "2.5",
                fill: d,
              }),
            ],
          }),
          s.jsxs("g", {
            transform: "rotate(9 43.5 9)",
            children: [
              s.jsx("rect", {
                x: "38",
                y: "-5",
                width: "11",
                height: "27",
                rx: "5.5",
                fill: y,
              }),
              s.jsx("rect", {
                x: "41",
                y: "0",
                width: "5",
                height: "18",
                rx: "2.5",
                fill: d,
              }),
            ],
          }),
        ],
      });
    case "floppy":
      return s.jsxs("g", {
        fill: y,
        children: [
          s.jsx("path", { d: "M15 16C5 18 3 34 9 41c5 4 9-2 9-11Z" }),
          s.jsx("path", { d: "M49 16c10 2 12 18 6 25-5 4-9-2-9-11Z" }),
        ],
      });
    case "tuft":
      return s.jsxs("g", {
        fill: y,
        children: [
          s.jsx("path", { d: "M12 19 15.5 5 24 15.5Z" }),
          s.jsx("path", { d: "M52 19 48.5 5 40 15.5Z" }),
        ],
      });
    case "horns":
      return s.jsxs("g", {
        fill: x,
        children: [
          s.jsx("path", {
            d: "M17.5 13C10 11 6 5 10.5 1.5c2.5 3.5 6.5 6.5 10.5 8.5Z",
          }),
          s.jsx("path", {
            d: "M46.5 13C54 11 58 5 53.5 1.5c-2.5 3.5-6.5 6.5-10.5 8.5Z",
          }),
        ],
      });
    case "antlers":
      return s.jsxs("g", {
        stroke: x,
        strokeWidth: "3",
        strokeLinecap: "round",
        fill: "none",
        children: [
          s.jsx("path", { d: "M21 14 16 3" }),
          s.jsx("path", { d: "M17.6 8 10 5" }),
          s.jsx("path", { d: "M43 14 48 3" }),
          s.jsx("path", { d: "M46.4 8 54 5" }),
        ],
      });
    case "flap":
      return s.jsxs("g", {
        children: [
          s.jsx("ellipse", { cx: "10", cy: "32", rx: "10", ry: "15", fill: y }),
          s.jsx("ellipse", { cx: "54", cy: "32", rx: "10", ry: "15", fill: y }),
          s.jsx("ellipse", { cx: "11", cy: "32", rx: "5", ry: "9", fill: d }),
          s.jsx("ellipse", { cx: "53", cy: "32", rx: "5", ry: "9", fill: d }),
        ],
      });
    case "spikes":
      return s.jsx("path", {
        d: "M8 22 13 3 20 18 26 1 32 17 38 1 44 18 51 3 56 22Z",
        fill: y,
      });
    case "crest":
      return s.jsxs("g", {
        fill: x,
        children: [
          s.jsx("circle", { cx: "25", cy: "10", r: "5" }),
          s.jsx("circle", { cx: "32", cy: "5.5", r: "5.5" }),
          s.jsx("circle", { cx: "39", cy: "10", r: "5" }),
        ],
      });
    case "fins":
      return s.jsxs("g", {
        fill: y,
        children: [
          s.jsx("path", { d: "M12 26 1 19 4 37Z" }),
          s.jsx("path", { d: "M52 26 63 19 60 37Z" }),
          s.jsx("path", { d: "M25 13 32 1 39 13Z" }),
        ],
      });
    case "antennae":
      return s.jsxs("g", {
        children: [
          s.jsxs("g", {
            stroke: y,
            strokeWidth: "2.6",
            strokeLinecap: "round",
            fill: "none",
            children: [
              s.jsx("path", { d: "M23 14C20 7 17 4 13.5 3" }),
              s.jsx("path", { d: "M41 14c3-7 6-10 9.5-11" }),
            ],
          }),
          s.jsx("circle", { cx: "12.5", cy: "3", r: "3", fill: y }),
          s.jsx("circle", { cx: "51.5", cy: "3", r: "3", fill: y }),
        ],
      });
    case "mane":
      return s.jsx("g", {
        fill: x,
        children: Array.from({ length: 12 }, (z, E) => {
          const I = (E / 12) * Math.PI * 2;
          return s.jsx(
            "circle",
            { cx: 32 + Math.cos(I) * 25, cy: 34 + Math.sin(I) * 23, r: "8.5" },
            E,
          );
        }),
      });
    case "wool":
      return s.jsxs("g", {
        fill: d,
        children: [
          s.jsx("circle", { cx: "15", cy: "17", r: "8" }),
          s.jsx("circle", { cx: "26", cy: "10", r: "9" }),
          s.jsx("circle", { cx: "38", cy: "10", r: "9" }),
          s.jsx("circle", { cx: "49", cy: "17", r: "8" }),
        ],
      });
    case "wings":
      return s.jsxs("g", {
        fill: x,
        children: [
          s.jsx("path", { d: "M13 22C-1 16 0 42 12 46Z" }),
          s.jsx("path", { d: "M51 22c14-6 13 20 1 24Z" }),
        ],
      });
    case "tentacles":
      return s.jsxs("g", {
        fill: y,
        children: [
          s.jsx("path", { d: "M12 44c-6 4-8 12-6 18 4 1 7-5 9-11Z" }),
          s.jsx("path", { d: "M52 44c6 4 8 12 6 18-4 1-7-5-9-11Z" }),
          s.jsx("path", { d: "M25 50c-3 6-3 12-1 14 3 0 5-6 5-12Z" }),
          s.jsx("path", { d: "M39 50c3 6 3 12 1 14-3 0-5-6-5-12Z" }),
        ],
      });
    case "dome":
      return s.jsx("path", { d: "M11 22a21 21 0 0 1 42 0Z", fill: y });
    case "frill":
      return s.jsxs("g", {
        children: [
          s.jsx("path", { d: "M1 42C1 16 14 1 32 1s31 15 31 41Z", fill: y }),
          s.jsx("g", {
            fill: d,
            children: Array.from({ length: 9 }, (z, E) => {
              const I = Math.PI + (E + 0.5) * (Math.PI / 9);
              return s.jsx(
                "circle",
                {
                  cx: 32 + Math.cos(I) * 27,
                  cy: 40 + Math.sin(I) * 33,
                  r: "3.2",
                },
                E,
              );
            }),
          }),
        ],
      });
    case "rays":
      return s.jsx("g", {
        fill: x,
        children: Array.from({ length: 12 }, (z, E) => {
          const I = (E / 12) * 360;
          return s.jsx(
            "path",
            { d: "M32 2 27 12h10Z", transform: `rotate(${I} 32 34)` },
            E,
          );
        }),
      });
    case "points":
      return s.jsxs("g", {
        fill: y,
        children: [
          s.jsx("path", { d: "M32 0 24 16h16Z" }),
          s.jsx("path", { d: "M6 14 12 30l12-9Z" }),
          s.jsx("path", { d: "M58 14 52 30l-12-9Z" }),
          s.jsx("path", { d: "M8 56 4 42l14 4Z" }),
          s.jsx("path", { d: "M56 56l4-14-14 4Z" }),
        ],
      });
    case "none":
    default:
      return null;
  }
}
function Uf(a) {
  const { base: y, shade: d } = a,
    x = Wl(a);
  switch (a.eyes) {
    case "round":
      return s.jsxs("g", {
        children: [
          s.jsx("circle", { cx: Ot, cy: Se, r: "6.5", fill: Te }),
          s.jsx("circle", { cx: It, cy: Se, r: "6.5", fill: Te }),
          s.jsx("circle", { cx: Ot, cy: Se, r: "3.4", fill: Y }),
          s.jsx("circle", { cx: It, cy: Se, r: "3.4", fill: Y }),
          s.jsx("circle", { cx: Ot + 1.4, cy: Se - 1.6, r: "1.3", fill: Te }),
          s.jsx("circle", { cx: It + 1.4, cy: Se - 1.6, r: "1.3", fill: Te }),
        ],
      });
    case "big":
      return s.jsxs("g", {
        children: [
          s.jsx("circle", { cx: "23", cy: "32", r: "9.5", fill: Te }),
          s.jsx("circle", { cx: "41", cy: "32", r: "9.5", fill: Te }),
          s.jsx("circle", { cx: "23", cy: "32", r: "5", fill: Y }),
          s.jsx("circle", { cx: "41", cy: "32", r: "5", fill: Y }),
          s.jsx("circle", { cx: "24.6", cy: "30.2", r: "1.9", fill: Te }),
          s.jsx("circle", { cx: "42.6", cy: "30.2", r: "1.9", fill: Te }),
        ],
      });
    case "bulge":
      return s.jsxs("g", {
        children: [
          s.jsx("circle", {
            cx: "20",
            cy: "14",
            r: "9",
            fill: y,
            stroke: d,
            strokeWidth: "1.6",
          }),
          s.jsx("circle", {
            cx: "44",
            cy: "14",
            r: "9",
            fill: y,
            stroke: d,
            strokeWidth: "1.6",
          }),
          s.jsx("circle", { cx: "20", cy: "13.5", r: "4.8", fill: Te }),
          s.jsx("circle", { cx: "44", cy: "13.5", r: "4.8", fill: Te }),
          s.jsx("circle", { cx: "20", cy: "13.5", r: "2.6", fill: Y }),
          s.jsx("circle", { cx: "44", cy: "13.5", r: "2.6", fill: Y }),
        ],
      });
    case "slit":
      return s.jsxs("g", {
        children: [
          s.jsx("ellipse", { cx: Ot, cy: Se, rx: "5.4", ry: "6", fill: x }),
          s.jsx("ellipse", { cx: It, cy: Se, rx: "5.4", ry: "6", fill: x }),
          s.jsx("ellipse", { cx: Ot, cy: Se, rx: "1.8", ry: "5", fill: Y }),
          s.jsx("ellipse", { cx: It, cy: Se, rx: "1.8", ry: "5", fill: Y }),
        ],
      });
    case "sleepy":
      return s.jsxs("g", {
        stroke: Y,
        strokeWidth: "3",
        strokeLinecap: "round",
        fill: "none",
        children: [
          s.jsx("path", { d: "M18.5 31.5q5.5 5 11 0" }),
          s.jsx("path", { d: "M34.5 31.5q5.5 5 11 0" }),
        ],
      });
    case "wide":
      return s.jsxs("g", {
        children: [
          s.jsx("circle", { cx: "20", cy: Se, r: "3.8", fill: Y }),
          s.jsx("circle", { cx: "44", cy: Se, r: "3.8", fill: Y }),
          s.jsx("circle", { cx: "21.3", cy: Se - 1.4, r: "1.3", fill: Te }),
          s.jsx("circle", { cx: "45.3", cy: Se - 1.4, r: "1.3", fill: Te }),
        ],
      });
    case "turret":
      return s.jsxs("g", {
        children: [
          s.jsx("circle", { cx: "21", cy: "31", r: "7.5", fill: d }),
          s.jsx("circle", { cx: "43", cy: "31", r: "7.5", fill: d }),
          s.jsx("circle", { cx: "21", cy: "31", r: "3.6", fill: x }),
          s.jsx("circle", { cx: "43", cy: "31", r: "3.6", fill: x }),
          s.jsx("circle", { cx: "21", cy: "31", r: "1.7", fill: Y }),
          s.jsx("circle", { cx: "43", cy: "31", r: "1.7", fill: Y }),
        ],
      });
    case "compound":
      return s.jsxs("g", {
        children: [
          s.jsx("ellipse", {
            cx: "22",
            cy: "31",
            rx: "7.5",
            ry: "9",
            fill: Y,
            transform: "rotate(-12 22 31)",
          }),
          s.jsx("ellipse", {
            cx: "42",
            cy: "31",
            rx: "7.5",
            ry: "9",
            fill: Y,
            transform: "rotate(12 42 31)",
          }),
          s.jsx("ellipse", {
            cx: "20.5",
            cy: "28",
            rx: "2.2",
            ry: "3",
            fill: Te,
            opacity: "0.75",
          }),
          s.jsx("ellipse", {
            cx: "43.5",
            cy: "28",
            rx: "2.2",
            ry: "3",
            fill: Te,
            opacity: "0.75",
          }),
        ],
      });
    case "stalk":
      return s.jsxs("g", {
        children: [
          s.jsxs("g", {
            stroke: d,
            strokeWidth: "2.8",
            strokeLinecap: "round",
            fill: "none",
            children: [
              s.jsx("path", { d: "M23 16 19.5 5" }),
              s.jsx("path", { d: "M41 16 44.5 5" }),
            ],
          }),
          s.jsx("circle", {
            cx: "19",
            cy: "4",
            r: "3.8",
            fill: Te,
            stroke: d,
            strokeWidth: "1.2",
          }),
          s.jsx("circle", {
            cx: "45",
            cy: "4",
            r: "3.8",
            fill: Te,
            stroke: d,
            strokeWidth: "1.2",
          }),
          s.jsx("circle", { cx: "19", cy: "4", r: "1.8", fill: Y }),
          s.jsx("circle", { cx: "45", cy: "4", r: "1.8", fill: Y }),
        ],
      });
    case "visor":
      return s.jsxs("g", {
        children: [
          s.jsx("rect", {
            x: "14",
            y: "26.5",
            width: "36",
            height: "13",
            rx: "6.5",
            fill: Y,
          }),
          s.jsx("circle", { cx: Ot, cy: Se, r: "3.2", fill: x }),
          s.jsx("circle", { cx: It, cy: Se, r: "3.2", fill: x }),
        ],
      });
    case "dot":
    default:
      return s.jsxs("g", {
        children: [
          s.jsx("circle", { cx: Ot, cy: Se, r: "4.2", fill: Y }),
          s.jsx("circle", { cx: It, cy: Se, r: "4.2", fill: Y }),
          s.jsx("circle", { cx: Ot + 1.4, cy: Se - 1.5, r: "1.4", fill: Te }),
          s.jsx("circle", { cx: It + 1.4, cy: Se - 1.5, r: "1.4", fill: Te }),
        ],
      });
  }
}
function tc() {
  return s.jsxs("g", {
    children: [
      s.jsx("path", { d: "M27.5 39q4.5-3.4 9 0Q32 44.6 27.5 39Z", fill: Y }),
      s.jsx("path", {
        d: "M32 43.5v2.4M32 45.9q-2.4 2.6-4.6.4M32 45.9q2.4 2.6 4.6.4",
        stroke: Y,
        strokeWidth: "2",
        strokeLinecap: "round",
        fill: "none",
      }),
    ],
  });
}
function Wf(a) {
  const { accent: y, shade: d } = a,
    x = Wl(a);
  switch (a.muzzle) {
    case "nose":
      return tc();
    case "snout":
      return s.jsxs("g", {
        children: [
          s.jsx("ellipse", { cx: "32", cy: "43", rx: "13", ry: "9", fill: y }),
          tc(),
        ],
      });
    case "beak":
      return s.jsxs("g", {
        children: [
          s.jsx("path", { d: "M23 38h18l-9 11Z", fill: x }),
          s.jsx("path", {
            d: "M23 38h18",
            stroke: Y,
            strokeWidth: "1.4",
            opacity: "0.35",
          }),
        ],
      });
    case "bill":
      return s.jsxs("g", {
        children: [
          s.jsx("rect", {
            x: "19",
            y: "37.5",
            width: "26",
            height: "11.5",
            rx: "5.75",
            fill: x,
          }),
          s.jsx("circle", { cx: "26", cy: "41.5", r: "1.3", fill: Y }),
          s.jsx("circle", { cx: "38", cy: "41.5", r: "1.3", fill: Y }),
        ],
      });
    case "pig":
      return s.jsxs("g", {
        children: [
          s.jsx("ellipse", { cx: "32", cy: "43", rx: "11", ry: "8", fill: y }),
          s.jsx("ellipse", { cx: "28", cy: "43", rx: "2.2", ry: "3", fill: Y }),
          s.jsx("ellipse", { cx: "36", cy: "43", rx: "2.2", ry: "3", fill: Y }),
        ],
      });
    case "wide":
      return s.jsx("path", {
        d: "M16 41q16 11 32 0",
        stroke: Y,
        strokeWidth: "3",
        strokeLinecap: "round",
        fill: "none",
      });
    case "tusks":
      return s.jsxs("g", {
        children: [
          s.jsx("ellipse", {
            cx: "32",
            cy: "42",
            rx: "13",
            ry: "8.5",
            fill: y,
          }),
          s.jsx("ellipse", {
            cx: "32",
            cy: "38.5",
            rx: "3.4",
            ry: "2.6",
            fill: Y,
          }),
          s.jsx("path", {
            d: "M27 45q-1.6 8-3.6 12M37 45q1.6 8 3.6 12",
            stroke: "#f8fafc",
            strokeWidth: "3.6",
            strokeLinecap: "round",
            fill: "none",
          }),
        ],
      });
    case "trunk":
      return s.jsx("path", {
        d: "M32 36q0 10-3 14t2 10",
        stroke: d,
        strokeWidth: "7.5",
        strokeLinecap: "round",
        fill: "none",
      });
    case "mandibles":
      return s.jsxs("g", {
        stroke: Y,
        strokeWidth: "2.6",
        strokeLinecap: "round",
        fill: "none",
        children: [
          s.jsx("path", { d: "M26 43q6 6 12 0" }),
          s.jsx("path", { d: "M24.5 41q-3.5 4.5 0 8" }),
          s.jsx("path", { d: "M39.5 41q3.5 4.5 0 8" }),
        ],
      });
    case "grill":
      return s.jsxs("g", {
        children: [
          s.jsx("rect", {
            x: "23",
            y: "41",
            width: "18",
            height: "8",
            rx: "4",
            fill: Y,
          }),
          s.jsx("path", {
            d: "M28 41v8M32 41v8M36 41v8",
            stroke: x,
            strokeWidth: "1.4",
            opacity: "0.8",
          }),
        ],
      });
    case "smile":
    default:
      return s.jsx("path", {
        d: "M26.5 42.5q5.5 5 11 0",
        stroke: Y,
        strokeWidth: "2.8",
        strokeLinecap: "round",
        fill: "none",
      });
  }
}
function Ws(a, y, d) {
  const { shade: x, accent: z } = y,
    E = Wl(y);
  switch (a) {
    case "mask":
      return s.jsxs(
        "g",
        {
          clipPath: `url(#${d})`,
          fill: x,
          children: [
            s.jsx("ellipse", { cx: Ot, cy: Se - 0.5, rx: "9", ry: "8.5" }),
            s.jsx("ellipse", { cx: It, cy: Se - 0.5, rx: "9", ry: "8.5" }),
          ],
        },
        a,
      );
    case "stripes":
      return s.jsxs(
        "g",
        {
          clipPath: `url(#${d})`,
          stroke: x,
          strokeWidth: "3.4",
          strokeLinecap: "round",
          fill: "none",
          children: [
            s.jsx("path", { d: "M19 11q3 8-2 14" }),
            s.jsx("path", { d: "M32 10v10" }),
            s.jsx("path", { d: "M45 11q-3 8 2 14" }),
          ],
        },
        a,
      );
    case "spots":
      return s.jsxs(
        "g",
        {
          clipPath: `url(#${d})`,
          fill: x,
          opacity: "0.8",
          children: [
            s.jsx("circle", { cx: "16", cy: "24", r: "4" }),
            s.jsx("circle", { cx: "48", cy: "24", r: "4" }),
            s.jsx("circle", { cx: "14", cy: "42", r: "3.4" }),
            s.jsx("circle", { cx: "50", cy: "42", r: "3.4" }),
            s.jsx("circle", { cx: "32", cy: "18", r: "3.4" }),
          ],
        },
        a,
      );
    case "blush":
      return s.jsxs(
        "g",
        {
          clipPath: `url(#${d})`,
          fill: "#f87171",
          opacity: "0.35",
          children: [
            s.jsx("ellipse", { cx: "15", cy: "40", rx: "5.5", ry: "3.6" }),
            s.jsx("ellipse", { cx: "49", cy: "40", rx: "5.5", ry: "3.6" }),
          ],
        },
        a,
      );
    case "patch":
      return s.jsx(
        "g",
        {
          clipPath: `url(#${d})`,
          children: s.jsx("rect", {
            x: "15",
            y: "37",
            width: "34",
            height: "21",
            rx: "11",
            fill: z,
            opacity: "0.9",
          }),
        },
        a,
      );
    case "whiskers":
      return s.jsx(
        "g",
        {
          stroke: Y,
          strokeWidth: "1.7",
          strokeLinecap: "round",
          opacity: "0.65",
          fill: "none",
          children: s.jsx("path", {
            d: "M18 40 6 37M18 43.5 6 44M46 40l12-3M46 43.5l12 .5",
          }),
        },
        a,
      );
    case "brows":
      return s.jsxs(
        "g",
        {
          stroke: Y,
          strokeWidth: "3",
          strokeLinecap: "round",
          fill: "none",
          children: [
            s.jsx("path", { d: "M17.5 24.5 29 28.5" }),
            s.jsx("path", { d: "M46.5 24.5 35 28.5" }),
          ],
        },
        a,
      );
    case "horn":
      return s.jsxs(
        "g",
        {
          children: [
            s.jsx("path", { d: "M28 15 32-2l4 17Z", fill: E }),
            s.jsx("path", {
              d: "M29.4 10.5h5.2M30.4 6h3.2",
              stroke: Y,
              strokeWidth: "1.3",
              opacity: "0.35",
            }),
          ],
        },
        a,
      );
    case "tongue":
      return s.jsx("path", { d: "M28.5 45q3.5 9 7 0Z", fill: "#f472b6" }, a);
    case "fangs":
      return s.jsxs(
        "g",
        {
          fill: Te,
          children: [
            s.jsx("path", { d: "M26.5 42 29 48l2.5-6Z" }),
            s.jsx("path", { d: "M32.5 42 35 48l2.5-6Z" }),
          ],
        },
        a,
      );
    case "sparkle":
      return s.jsxs(
        "g",
        {
          fill: E,
          children: [
            s.jsx("path", {
              d: "M53 8 54.4 12 58 13.4 54.4 14.8 53 18.6 51.6 14.8 48 13.4 51.6 12Z",
            }),
            s.jsx("path", {
              d: "M10 44 11 47 14 48 11 49 10 52 9 49 6 48 9 47Z",
            }),
          ],
        },
        a,
      );
    case "crown":
      return s.jsxs(
        "g",
        {
          children: [
            s.jsx("path", {
              d: "M19 13 23 3l5 6 5-8 5 8 5-6 4 10Z",
              fill: "#fbbf24",
            }),
            s.jsx("circle", { cx: "32", cy: "6", r: "1.8", fill: "#fde68a" }),
          ],
        },
        a,
      );
    case "shell":
      return s.jsxs(
        "g",
        {
          children: [
            s.jsx("path", { d: "M0 61q0-27 32-27t32 27Z", fill: E }),
            s.jsxs("g", {
              fill: x,
              opacity: "0.55",
              children: [
                s.jsx("circle", { cx: "5.5", cy: "52", r: "3" }),
                s.jsx("circle", { cx: "58.5", cy: "52", r: "3" }),
                s.jsx("circle", { cx: "20", cy: "59", r: "3" }),
                s.jsx("circle", { cx: "44", cy: "59", r: "3" }),
                s.jsx("circle", { cx: "32", cy: "60", r: "3" }),
              ],
            }),
          ],
        },
        a,
      );
    case "stitches":
      return s.jsxs(
        "g",
        {
          clipPath: `url(#${d})`,
          stroke: x,
          strokeWidth: "1.8",
          strokeLinecap: "round",
          children: [
            s.jsx("path", { d: "M45 12v14" }),
            s.jsx("path", { d: "M41.5 16h7M41.5 21h7" }),
            s.jsx("path", { d: "M14 44h9" }),
            s.jsx("path", { d: "M17 41.5v5M21 41.5v5" }),
          ],
        },
        a,
      );
    case "bolt":
      return s.jsx(
        "path",
        { d: "M49 2 39 18h6l-8 14 20-20h-7l6-10Z", fill: E },
        a,
      );
    case "bandage":
      return s.jsxs(
        "g",
        {
          clipPath: `url(#${d})`,
          fill: z,
          opacity: "0.9",
          children: [
            s.jsx("path", { d: "M2 20 62 12v7L2 27Z" }),
            s.jsx("path", { d: "M2 44 62 36v7L2 51Z" }),
            s.jsx("path", { d: "M6 56 58 48v6H6Z" }),
          ],
        },
        a,
      );
    case "visorGlow":
      return s.jsx(
        "g",
        {
          opacity: "0.75",
          children: s.jsx("path", {
            d: "M18 27q14-6 28 0",
            stroke: E,
            strokeWidth: "2",
            fill: "none",
            strokeLinecap: "round",
          }),
        },
        a,
      );
    default:
      return null;
  }
}
function $f({ features: a, idSuffix: y, className: d, title: x }) {
  const z = `cs-avatar-head-${y}`,
    E = a.marks || [],
    I = E.filter((M) => ec.has(M)),
    D = E.filter((M) => !ec.has(M));
  return s.jsxs("svg", {
    className: d,
    viewBox: `0 0 ${Ja} ${Ja}`,
    width: "100%",
    height: "100%",
    role: x ? "img" : "presentation",
    "aria-label": x,
    "aria-hidden": x ? void 0 : !0,
    focusable: "false",
    children: [
      s.jsx("defs", {
        children: s.jsx("clipPath", {
          id: z,
          children: s.jsx("rect", { ...ba }),
        }),
      }),
      I.map((M) => Ws(M, a, z)),
      Af(a),
      s.jsx("rect", { ...ba, fill: a.base }),
      D.filter(
        (M) =>
          M === "mask" ||
          M === "stripes" ||
          M === "spots" ||
          M === "patch" ||
          M === "bandage",
      ).map((M) => Ws(M, a, z)),
      Wf(a),
      Uf(a),
      D.filter(
        (M) =>
          !(
            M === "mask" ||
            M === "stripes" ||
            M === "spots" ||
            M === "patch" ||
            M === "bandage"
          ),
      ).map((M) => Ws(M, a, z)),
    ],
  });
}
const Hf = {
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
function v(a, y, d, x, z) {
  const [E, I, D] = Hf[x];
  return { id: a, label: y, group: d, base: E, shade: I, accent: D, ...z };
}
const Bf = Object.freeze([
    v("fox", "Fox", "woodland", "rust", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["whiskers"],
    }),
    v("owl", "Owl", "woodland", "cocoa", {
      ears: "tuft",
      eyes: "big",
      muzzle: "beak",
      detail: "#f3c552",
    }),
    v("bear", "Bear", "woodland", "brown", {
      ears: "round",
      eyes: "dot",
      muzzle: "snout",
    }),
    v("panda", "Panda", "woodland", "snow", {
      ears: "round",
      eyes: "dot",
      muzzle: "snout",
      marks: ["mask"],
      shade: "#39414d",
    }),
    v("wolf", "Wolf", "woodland", "slate", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
    }),
    v("badger", "Badger", "woodland", "snow", {
      ears: "round",
      eyes: "dot",
      muzzle: "snout",
      marks: ["mask"],
      shade: "#3b4553",
    }),
    v("hedgehog", "Hedgehog", "woodland", "sand", {
      ears: "spikes",
      eyes: "dot",
      muzzle: "nose",
    }),
    v("squirrel", "Squirrel", "woodland", "amber", {
      ears: "tuft",
      eyes: "round",
      muzzle: "nose",
      marks: ["patch"],
    }),
    v("deer", "Deer", "woodland", "sand", {
      ears: "antlers",
      eyes: "round",
      muzzle: "snout",
      marks: ["spots"],
      detail: "#8b5e3c",
    }),
    v("raccoon", "Raccoon", "woodland", "grey", {
      ears: "round",
      eyes: "dot",
      muzzle: "snout",
      marks: ["mask"],
      shade: "#3e4756",
    }),
    v("cat", "Cat", "pets", "amber", {
      ears: "pointed",
      eyes: "slit",
      muzzle: "nose",
      marks: ["stripes", "whiskers"],
      detail: "#5fba70",
    }),
    v("dog", "Dog", "pets", "brown", {
      ears: "floppy",
      eyes: "round",
      muzzle: "snout",
    }),
    v("rabbit", "Rabbit", "pets", "cream", {
      ears: "tall",
      eyes: "round",
      muzzle: "nose",
      marks: ["blush"],
    }),
    v("hamster", "Hamster", "pets", "sand", {
      ears: "round",
      eyes: "dot",
      muzzle: "nose",
      marks: ["patch", "blush"],
    }),
    v("guineapig", "Guinea pig", "pets", "cocoa", {
      ears: "round",
      eyes: "dot",
      muzzle: "nose",
      marks: ["patch"],
    }),
    v("ferret", "Ferret", "pets", "cream", {
      ears: "round",
      eyes: "dot",
      muzzle: "nose",
      marks: ["mask"],
      shade: "#a97551",
    }),
    v("budgie", "Budgie", "pets", "lime", {
      ears: "crest",
      eyes: "dot",
      muzzle: "beak",
      marks: ["blush"],
      detail: "#f3c552",
    }),
    v("goldfish", "Goldfish", "pets", "gold", {
      ears: "fins",
      eyes: "wide",
      muzzle: "smile",
    }),
    v("pony", "Pony", "pets", "sand", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["patch"],
    }),
    v("mouse", "Mouse", "pets", "grey", {
      ears: "round",
      eyes: "dot",
      muzzle: "nose",
      marks: ["whiskers", "blush"],
    }),
    v("cow", "Cow", "farm", "snow", {
      ears: "horns",
      eyes: "round",
      muzzle: "pig",
      marks: ["spots"],
      shade: "#39414d",
      detail: "#e6c48b",
    }),
    v("pig", "Pig", "farm", "pink", {
      ears: "floppy",
      eyes: "dot",
      muzzle: "pig",
      marks: ["blush"],
    }),
    v("sheep", "Sheep", "farm", "cream", {
      ears: "wool",
      eyes: "dot",
      muzzle: "nose",
    }),
    v("goat", "Goat", "farm", "cream", {
      ears: "horns",
      eyes: "slit",
      muzzle: "nose",
      marks: ["patch"],
      detail: "#a97551",
    }),
    v("horse", "Horse", "farm", "cocoa", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["patch"],
    }),
    v("donkey", "Donkey", "farm", "grey", {
      ears: "tall",
      eyes: "sleepy",
      muzzle: "snout",
    }),
    v("chicken", "Chicken", "farm", "snow", {
      ears: "crest",
      eyes: "dot",
      muzzle: "beak",
      detail: "#e15c4f",
    }),
    v("duck", "Duck", "farm", "yellow", {
      ears: "none",
      eyes: "dot",
      muzzle: "bill",
      detail: "#f0993f",
    }),
    v("goose", "Goose", "farm", "snow", {
      ears: "none",
      eyes: "dot",
      muzzle: "bill",
      detail: "#f0993f",
    }),
    v("bull", "Bull", "farm", "charcoal", {
      ears: "horns",
      eyes: "round",
      muzzle: "pig",
      marks: ["brows"],
      detail: "#e6c48b",
    }),
    v("lion", "Lion", "savanna", "gold", {
      ears: "mane",
      eyes: "round",
      muzzle: "snout",
      marks: ["whiskers"],
      detail: "#b9762a",
    }),
    v("tiger", "Tiger", "savanna", "amber", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["stripes", "whiskers"],
      shade: "#8a4a17",
    }),
    v("elephant", "Elephant", "savanna", "grey", {
      ears: "flap",
      eyes: "dot",
      muzzle: "trunk",
    }),
    v("giraffe", "Giraffe", "savanna", "sand", {
      ears: "horns",
      eyes: "round",
      muzzle: "snout",
      marks: ["spots"],
      detail: "#8b5e3c",
    }),
    v("zebra", "Zebra", "savanna", "snow", {
      ears: "round",
      eyes: "round",
      muzzle: "snout",
      marks: ["stripes"],
      shade: "#39414d",
    }),
    v("rhino", "Rhino", "savanna", "stone", {
      ears: "round",
      eyes: "dot",
      muzzle: "pig",
      marks: ["horn"],
      detail: "#dfe4e8",
    }),
    v("hippo", "Hippo", "savanna", "violet", {
      ears: "round",
      eyes: "wide",
      muzzle: "pig",
    }),
    v("cheetah", "Cheetah", "savanna", "sand", {
      ears: "round",
      eyes: "round",
      muzzle: "nose",
      marks: ["spots", "whiskers"],
    }),
    v("meerkat", "Meerkat", "savanna", "cream", {
      ears: "round",
      eyes: "dot",
      muzzle: "nose",
      marks: ["mask"],
      shade: "#8b5e3c",
    }),
    v("monkey", "Monkey", "savanna", "cocoa", {
      ears: "round",
      eyes: "round",
      muzzle: "snout",
      marks: ["patch"],
    }),
    v("polarbear", "Polar bear", "polar", "snow", {
      ears: "round",
      eyes: "dot",
      muzzle: "snout",
    }),
    v("penguin", "Penguin", "polar", "charcoal", {
      ears: "none",
      eyes: "round",
      muzzle: "beak",
      marks: ["patch"],
      accent: "#ffffff",
      detail: "#f0993f",
    }),
    v("seal", "Seal", "polar", "slate", {
      ears: "none",
      eyes: "sleepy",
      muzzle: "nose",
      marks: ["whiskers"],
    }),
    v("arcticfox", "Arctic fox", "polar", "snow", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["whiskers"],
    }),
    v("snowleopard", "Snow leopard", "polar", "snow", {
      ears: "tuft",
      eyes: "slit",
      muzzle: "nose",
      marks: ["spots", "whiskers"],
      detail: "#5fba70",
    }),
    v("walrus", "Walrus", "polar", "brown", {
      ears: "none",
      eyes: "dot",
      muzzle: "tusks",
      marks: ["whiskers"],
    }),
    v("reindeer", "Reindeer", "polar", "cocoa", {
      ears: "antlers",
      eyes: "round",
      muzzle: "snout",
      detail: "#c39a55",
    }),
    v("husky", "Husky", "polar", "slate", {
      ears: "pointed",
      eyes: "slit",
      muzzle: "snout",
      marks: ["mask"],
      detail: "#7cc4ef",
    }),
    v("puffin", "Puffin", "polar", "charcoal", {
      ears: "none",
      eyes: "dot",
      muzzle: "beak",
      marks: ["patch"],
      accent: "#ffffff",
      detail: "#f0993f",
    }),
    v("yak", "Yak", "polar", "cocoa", {
      ears: "horns",
      eyes: "sleepy",
      muzzle: "nose",
      marks: ["patch"],
      detail: "#e6c48b",
    }),
    v("whale", "Whale", "ocean", "navy", {
      ears: "fins",
      eyes: "wide",
      muzzle: "smile",
      marks: ["patch"],
    }),
    v("dolphin", "Dolphin", "ocean", "sky", {
      ears: "fins",
      eyes: "dot",
      muzzle: "smile",
      marks: ["patch"],
    }),
    v("shark", "Shark", "ocean", "slate", {
      ears: "fins",
      eyes: "round",
      muzzle: "wide",
      marks: ["brows", "fangs"],
    }),
    v("octopus", "Octopus", "ocean", "purple", {
      ears: "tentacles",
      eyes: "round",
      muzzle: "smile",
    }),
    v("crab", "Crab", "ocean", "red", {
      ears: "none",
      eyes: "stalk",
      muzzle: "mandibles",
    }),
    v("jellyfish", "Jellyfish", "ocean", "rose", {
      ears: "tentacles",
      eyes: "dot",
      muzzle: "smile",
    }),
    v("seahorse", "Seahorse", "ocean", "yellow", {
      ears: "crest",
      eyes: "wide",
      muzzle: "beak",
      detail: "#d09c2c",
    }),
    v("pufferfish", "Pufferfish", "ocean", "amber", {
      ears: "spikes",
      eyes: "wide",
      muzzle: "smile",
    }),
    v("narwhal", "Narwhal", "ocean", "sky", {
      ears: "fins",
      eyes: "dot",
      muzzle: "smile",
      marks: ["horn"],
      detail: "#eef3f9",
    }),
    v("otter", "Otter", "ocean", "brown", {
      ears: "round",
      eyes: "round",
      muzzle: "snout",
      marks: ["whiskers"],
    }),
    v("frog", "Frog", "creatures", "green", {
      ears: "none",
      eyes: "bulge",
      muzzle: "wide",
      marks: ["tongue"],
    }),
    v("turtle", "Turtle", "creatures", "moss", {
      ears: "none",
      eyes: "round",
      muzzle: "smile",
      marks: ["shell"],
      detail: "#3f7a2a",
    }),
    v("gecko", "Gecko", "creatures", "lime", {
      ears: "none",
      eyes: "round",
      muzzle: "smile",
      marks: ["spots"],
    }),
    v("chameleon", "Chameleon", "creatures", "teal", {
      ears: "crest",
      eyes: "turret",
      muzzle: "smile",
      marks: ["spots"],
      detail: "#f3c552",
    }),
    v("snake", "Snake", "creatures", "moss", {
      ears: "none",
      eyes: "slit",
      muzzle: "smile",
      marks: ["stripes"],
      detail: "#f3c552",
    }),
    v("crocodile", "Crocodile", "creatures", "green", {
      ears: "none",
      eyes: "wide",
      muzzle: "wide",
      marks: ["brows", "fangs"],
    }),
    v("bee", "Bee", "creatures", "yellow", {
      ears: "antennae",
      eyes: "compound",
      muzzle: "mandibles",
      marks: ["stripes"],
      shade: "#39414d",
    }),
    v("ladybird", "Ladybird", "creatures", "red", {
      ears: "antennae",
      eyes: "dot",
      muzzle: "smile",
      marks: ["spots"],
      shade: "#39414d",
    }),
    v("butterfly", "Butterfly", "creatures", "purple", {
      ears: "wings",
      eyes: "compound",
      muzzle: "smile",
      marks: ["sparkle"],
      detail: "#f3c552",
    }),
    v("snail", "Snail", "creatures", "cream", {
      ears: "none",
      eyes: "stalk",
      muzzle: "smile",
      marks: ["shell"],
      detail: "#c39a55",
    }),
    v("dragon", "Dragon", "mythical", "green", {
      ears: "spikes",
      eyes: "slit",
      muzzle: "wide",
      marks: ["fangs", "brows"],
      detail: "#f3c552",
    }),
    v("unicorn", "Unicorn", "mythical", "snow", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["horn", "sparkle"],
      detail: "#a68bf5",
    }),
    v("phoenix", "Phoenix", "mythical", "red", {
      ears: "crest",
      eyes: "round",
      muzzle: "beak",
      marks: ["sparkle"],
      detail: "#f3c552",
    }),
    v("griffin", "Griffin", "mythical", "gold", {
      ears: "wings",
      eyes: "big",
      muzzle: "beak",
      marks: ["brows"],
      detail: "#c1811d",
    }),
    v("yeti", "Yeti", "mythical", "snow", {
      ears: "wool",
      eyes: "round",
      muzzle: "snout",
      marks: ["fangs"],
      accent: "#dcecfb",
    }),
    v("pegasus", "Pegasus", "mythical", "snow", {
      ears: "wings",
      eyes: "round",
      muzzle: "snout",
      marks: ["sparkle"],
      detail: "#7cc4ef",
    }),
    v("kraken", "Kraken", "mythical", "violet", {
      ears: "tentacles",
      eyes: "slit",
      muzzle: "smile",
      marks: ["brows"],
      detail: "#42b5a8",
    }),
    v("sphinx", "Sphinx", "mythical", "sand", {
      ears: "pointed",
      eyes: "round",
      muzzle: "nose",
      marks: ["crown"],
    }),
    v("wyvern", "Wyvern", "mythical", "red", {
      ears: "wings",
      eyes: "slit",
      muzzle: "wide",
      marks: ["horn", "fangs"],
      detail: "#f3c552",
    }),
    v("golem", "Golem", "mythical", "stone", {
      ears: "dome",
      eyes: "visor",
      muzzle: "grill",
      marks: ["sparkle"],
      detail: "#7cc4ef",
    }),
    v("trex", "T. rex", "dinosaurs", "moss", {
      ears: "none",
      eyes: "slit",
      muzzle: "wide",
      marks: ["brows", "fangs"],
      detail: "#f3c552",
    }),
    v("triceratops", "Triceratops", "dinosaurs", "teal", {
      ears: "frill",
      eyes: "round",
      muzzle: "beak",
      marks: ["horn"],
      detail: "#e6c48b",
    }),
    v("stegosaurus", "Stegosaurus", "dinosaurs", "violet", {
      ears: "spikes",
      eyes: "dot",
      muzzle: "smile",
      marks: ["spots"],
    }),
    v("raptor", "Raptor", "dinosaurs", "amber", {
      ears: "none",
      eyes: "slit",
      muzzle: "wide",
      marks: ["stripes", "fangs"],
      detail: "#5fba70",
    }),
    v("pterodactyl", "Pterodactyl", "dinosaurs", "rust", {
      ears: "wings",
      eyes: "round",
      muzzle: "beak",
      detail: "#cd5f27",
    }),
    v("brachiosaurus", "Brachiosaurus", "dinosaurs", "sky", {
      ears: "none",
      eyes: "dot",
      muzzle: "smile",
      marks: ["spots"],
    }),
    v("ankylosaurus", "Ankylosaurus", "dinosaurs", "stone", {
      ears: "points",
      eyes: "dot",
      muzzle: "smile",
      marks: ["spots"],
    }),
    v("spinosaurus", "Spinosaurus", "dinosaurs", "navy", {
      ears: "spikes",
      eyes: "slit",
      muzzle: "wide",
      marks: ["fangs"],
      detail: "#f3c552",
    }),
    v("dilophosaurus", "Dilophosaurus", "dinosaurs", "lime", {
      ears: "crest",
      eyes: "round",
      muzzle: "wide",
      marks: ["tongue"],
      detail: "#e15c4f",
    }),
    v("mosasaurus", "Mosasaurus", "dinosaurs", "teal", {
      ears: "fins",
      eyes: "wide",
      muzzle: "wide",
      marks: ["fangs"],
    }),
    v("astronaut", "Astronaut", "space", "snow", {
      ears: "dome",
      eyes: "visor",
      muzzle: "smile",
      marks: ["visorGlow"],
      detail: "#7cc4ef",
    }),
    v("alien", "Alien", "space", "lime", {
      ears: "antennae",
      eyes: "compound",
      muzzle: "smile",
      detail: "#6da733",
    }),
    v("martian", "Martian", "space", "red", {
      ears: "antennae",
      eyes: "big",
      muzzle: "smile",
      marks: ["blush"],
    }),
    v("moon", "Moon", "space", "snow", {
      ears: "none",
      eyes: "sleepy",
      muzzle: "smile",
      marks: ["spots"],
    }),
    v("sun", "Sun", "space", "yellow", {
      ears: "rays",
      eyes: "dot",
      muzzle: "smile",
      marks: ["blush"],
      detail: "#e9aa3c",
    }),
    v("star", "Star", "space", "yellow", {
      ears: "points",
      eyes: "dot",
      muzzle: "smile",
      marks: ["sparkle"],
      shade: "#e9aa3c",
      detail: "#fff3d0",
    }),
    v("comet", "Comet", "space", "sky", {
      ears: "points",
      eyes: "wide",
      muzzle: "smile",
      marks: ["sparkle", "bolt"],
      detail: "#f3c552",
    }),
    v("satellite", "Satellite", "space", "slate", {
      ears: "antennae",
      eyes: "visor",
      muzzle: "grill",
      marks: ["bolt"],
      detail: "#f3c552",
    }),
    v("ufo", "UFO", "space", "teal", {
      ears: "dome",
      eyes: "big",
      muzzle: "smile",
      marks: ["visorGlow"],
      detail: "#95cf57",
    }),
    v("rover", "Rover", "space", "stone", {
      ears: "antennae",
      eyes: "visor",
      muzzle: "grill",
      marks: ["spots"],
      detail: "#f0993f",
    }),
    v("robot", "Robot", "robots", "stone", {
      ears: "antennae",
      eyes: "visor",
      muzzle: "grill",
      marks: ["bolt"],
      detail: "#7cc4ef",
    }),
    v("android", "Android", "robots", "snow", {
      ears: "none",
      eyes: "round",
      muzzle: "smile",
      marks: ["visorGlow"],
      detail: "#42b5a8",
    }),
    v("cyborg", "Cyborg", "robots", "charcoal", {
      ears: "none",
      eyes: "slit",
      muzzle: "grill",
      marks: ["stitches"],
      detail: "#e15c4f",
    }),
    v("drone", "Drone", "robots", "slate", {
      ears: "fins",
      eyes: "big",
      muzzle: "smile",
      detail: "#95cf57",
    }),
    v("mecha", "Mecha", "robots", "navy", {
      ears: "horns",
      eyes: "visor",
      muzzle: "grill",
      marks: ["bolt"],
      detail: "#f3c552",
    }),
    v("servo", "Servo", "robots", "gold", {
      ears: "antennae",
      eyes: "dot",
      muzzle: "smile",
      marks: ["blush"],
    }),
    v("glitch", "Glitch", "robots", "purple", {
      ears: "points",
      eyes: "compound",
      muzzle: "grill",
      marks: ["sparkle"],
      detail: "#95cf57",
    }),
    v("pixel", "Pixel", "robots", "lime", {
      ears: "none",
      eyes: "dot",
      muzzle: "grill",
      marks: ["spots"],
      detail: "#f3c552",
    }),
    v("sentry", "Sentry", "robots", "red", {
      ears: "dome",
      eyes: "visor",
      muzzle: "grill",
      marks: ["visorGlow"],
      detail: "#f3c552",
    }),
    v("beacon", "Beacon", "robots", "sky", {
      ears: "rays",
      eyes: "dot",
      muzzle: "smile",
      marks: ["sparkle"],
      detail: "#f3c552",
    }),
    v("vampire", "Vampire", "monsters", "snow", {
      ears: "pointed",
      eyes: "slit",
      muzzle: "smile",
      marks: ["brows", "fangs"],
      detail: "#e15c4f",
    }),
    v("werewolf", "Werewolf", "monsters", "charcoal", {
      ears: "pointed",
      eyes: "round",
      muzzle: "snout",
      marks: ["brows", "fangs"],
    }),
    v("zombie", "Zombie", "monsters", "moss", {
      ears: "round",
      eyes: "round",
      muzzle: "smile",
      marks: ["stitches", "fangs"],
    }),
    v("ghost", "Ghost", "monsters", "snow", {
      ears: "none",
      eyes: "big",
      muzzle: "wide",
      marks: ["sparkle"],
      detail: "#a68bf5",
    }),
    v("mummy", "Mummy", "monsters", "cream", {
      ears: "none",
      eyes: "dot",
      muzzle: "smile",
      marks: ["bandage"],
      accent: "#fffaf0",
    }),
    v("frankenstein", "Frankenstein", "monsters", "lime", {
      ears: "none",
      eyes: "sleepy",
      muzzle: "smile",
      marks: ["brows", "stitches", "bolt"],
      detail: "#f3c552",
    }),
    v("goblin", "Goblin", "monsters", "moss", {
      ears: "pointed",
      eyes: "slit",
      muzzle: "wide",
      marks: ["brows", "fangs"],
      detail: "#f3c552",
    }),
    v("ogre", "Ogre", "monsters", "brown", {
      ears: "round",
      eyes: "dot",
      muzzle: "tusks",
      marks: ["brows"],
    }),
    v("slime", "Slime", "monsters", "teal", {
      ears: "none",
      eyes: "round",
      muzzle: "smile",
      marks: ["blush", "sparkle"],
    }),
    v("gargoyle", "Gargoyle", "monsters", "stone", {
      ears: "wings",
      eyes: "slit",
      muzzle: "wide",
      marks: ["brows", "fangs"],
      detail: "#6a737c",
    }),
  ]),
  Vf = new Map(Bf.map((a) => [a.id, a]));
function fc(a) {
  return a ? Vf.get(a) : void 0;
}
const Qf = { small: "1.25rem", medium: "1.75rem", large: "2.5rem" },
  nc = "#f8fafc",
  Zf = "#60a5fa",
  rc = [
    { value: "product", label: "Product" },
    { value: "mock", label: "Mock" },
    { value: "real", label: "Real", locked: !0 },
  ];
function Gf({ dataSource: a, onDataSourceChange: y, tone: d = "light" }) {
  const [x, z] = ie.useState(!1),
    E = d === "dark",
    I = rc.find((W) => W.value === a)?.label || "Product",
    D = E ? "#e2e8f0" : "#334155",
    M = E ? "#94a3b8" : "#64748b",
    re = E ? "#f8fafc" : "#0f172a";
  return s.jsxs("div", {
    "data-profile-database-row": !0,
    style: { marginBottom: "0.25rem" },
    children: [
      s.jsxs("button", {
        "aria-controls": "profile-database-options",
        "aria-expanded": x,
        "data-profile-database-trigger": !0,
        onClick: () => z((W) => !W),
        style: {
          alignItems: "center",
          background: "transparent",
          border: 0,
          borderRadius: "0.5rem",
          color: D,
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
          s.jsxs("svg", {
            "aria-hidden": "true",
            fill: "none",
            height: "16",
            viewBox: "0 0 24 24",
            width: "16",
            children: [
              s.jsx("ellipse", {
                cx: "12",
                cy: "5",
                rx: "8",
                ry: "3",
                stroke: "currentColor",
                strokeWidth: "1.8",
              }),
              s.jsx("path", {
                d: "M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7",
                stroke: "currentColor",
                strokeWidth: "1.8",
              }),
            ],
          }),
          s.jsx("span", { style: { flex: 1 }, children: "Database" }),
          s.jsx("span", {
            style: { color: M, fontSize: "0.75rem", fontWeight: 600 },
            children: I,
          }),
          s.jsx("svg", {
            "aria-hidden": "true",
            fill: "none",
            height: "15",
            style: { transform: x ? "rotate(180deg)" : void 0 },
            viewBox: "0 0 24 24",
            width: "15",
            children: s.jsx("path", {
              d: "m6 9 6 6 6-6",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
            }),
          }),
        ],
      }),
      x
        ? s.jsx("div", {
            "aria-label": "Database",
            id: "profile-database-options",
            role: "radiogroup",
            style: {
              display: "grid",
              gap: "0.125rem",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              padding: "0.125rem 0.5rem 0.5rem 2rem",
            },
            children: rc.map((W) =>
              s.jsxs(
                "button",
                {
                  "aria-checked": a === W.value,
                  "aria-label": W.locked ? `${W.label}, locked` : W.label,
                  "data-database-source": W.value,
                  disabled: W.locked,
                  onClick: () => y(W.value),
                  role: "radio",
                  style: {
                    background: a === W.value ? re : "transparent",
                    border: `1px solid ${a === W.value ? re : E ? "#475569" : "#cbd5e1"}`,
                    borderRadius: "9999px",
                    color: W.locked
                      ? M
                      : a === W.value
                        ? E
                          ? "#0f172a"
                          : "#ffffff"
                        : D,
                    cursor: W.locked ? "not-allowed" : "pointer",
                    display: "inline-flex",
                    fontFamily: "inherit",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    minHeight: "1.875rem",
                    opacity: W.locked ? 0.62 : 1,
                    padding: "0.25rem 0.45rem",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.2rem",
                  },
                  title: W.locked ? "Locked" : W.label,
                  type: "button",
                  children: [
                    W.locked
                      ? s.jsxs("svg", {
                          "aria-hidden": "true",
                          fill: "none",
                          height: "11",
                          viewBox: "0 0 24 24",
                          width: "11",
                          children: [
                            s.jsx("rect", {
                              height: "10",
                              rx: "2",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              width: "14",
                              x: "5",
                              y: "11",
                            }),
                            s.jsx("path", {
                              d: "M8 11V8a4 4 0 0 1 8 0v3",
                              stroke: "currentColor",
                              strokeLinecap: "round",
                              strokeWidth: "2",
                            }),
                          ],
                        })
                      : null,
                    W.label,
                  ],
                },
                W.value,
              ),
            ),
          })
        : null,
    ],
  });
}
function pc({ className: a, size: y = "medium", style: d }) {
  return s.jsxs("span", {
    "aria-label": "comp.school",
    className: a,
    style: {
      alignItems: "baseline",
      color: "inherit",
      display: "inline-flex",
      fontSize: Qf[y],
      lineHeight: 1,
      textTransform: "none",
      whiteSpace: "nowrap",
      ...d,
    },
    children: [
      s.jsxs("span", {
        "aria-hidden": "true",
        "data-comp-school-wordmark-part": "comp-dot",
        style: {
          color: nc,
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontSize: "0.88em",
          fontStyle: "normal",
          fontWeight: 650,
          letterSpacing: "-0.035em",
        },
        children: [
          "comp",
          s.jsx("span", { style: { color: nc }, children: "." }),
        ],
      }),
      s.jsx("span", {
        "aria-hidden": "true",
        "data-comp-school-wordmark-part": "school",
        style: {
          color: Zf,
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
function Kf(a) {
  switch (a.trim().toLocaleLowerCase()) {
    case "exams":
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", { d: "m2 9 10-5 10 5-10 5Z" }),
          s.jsx("path", { d: "M6 11.5V16c3.5 2.7 8.5 2.7 12 0v-4.5M22 9v6" }),
        ],
      });
    case "analytics":
      return s.jsx(s.Fragment, {
        children: s.jsx("path", { d: "M4 20V10M10 20V4M16 20v-7M22 20H2" }),
      });
    case "printouts":
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", { d: "M7 8V3h10v5" }),
          s.jsx("path", {
            d: "M7 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
          }),
          s.jsx("path", { d: "M7 14h10v7H7z" }),
          s.jsx("path", { d: "M17 11h.01" }),
        ],
      });
    case "mark":
    case "marking":
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", { d: "M4 3h13a3 3 0 0 1 3 3v15H7a3 3 0 0 1-3-3Z" }),
          s.jsx("path", { d: "M7 17h13M8 8h8M8 12h5" }),
        ],
      });
    case "recall":
    case "topic drills":
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx("circle", { cx: "12", cy: "12", r: "8" }),
          s.jsx("circle", { cx: "12", cy: "12", r: "3" }),
          s.jsx("path", { d: "M12 2v3M22 12h-3M12 22v-3M2 12h3" }),
        ],
      });
    case "coding playground":
      return s.jsx("path", { d: "m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" });
    case "forms":
    case "self assess":
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx("rect", { height: "18", rx: "2", width: "14", x: "5", y: "4" }),
          s.jsx("path", { d: "M9 4V2h6v2M8.5 13l2 2 5-5" }),
        ],
      });
    case "games":
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", {
            d: "M7.5 8h9a4.5 4.5 0 0 1 4.2 6.1l-1 2.7a2.5 2.5 0 0 1-4.1 1l-1.4-1.3H9.8l-1.4 1.3a2.5 2.5 0 0 1-4.1-1l-1-2.7A4.5 4.5 0 0 1 7.5 8Z",
          }),
          s.jsx("path", { d: "M8 11v4M6 13h4M16.5 12h.01M18.5 14h.01" }),
        ],
      });
    case "admin":
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx("rect", { height: "7", rx: "1", width: "7", x: "3", y: "3" }),
          s.jsx("rect", { height: "7", rx: "1", width: "7", x: "14", y: "3" }),
          s.jsx("rect", { height: "7", rx: "1", width: "7", x: "3", y: "14" }),
          s.jsx("rect", { height: "7", rx: "1", width: "7", x: "14", y: "14" }),
        ],
      });
    case "docs":
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx("path", {
            d: "M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22Z",
          }),
          s.jsx("path", {
            d: "M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22Z",
          }),
        ],
      });
    case "issues":
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx("circle", { cx: "12", cy: "12", r: "9" }),
          s.jsx("path", { d: "M12 7v6M12 17h.01" }),
        ],
      });
    default:
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx("rect", { height: "7", rx: "1", width: "7", x: "3", y: "3" }),
          s.jsx("rect", { height: "7", rx: "1", width: "7", x: "14", y: "3" }),
          s.jsx("rect", { height: "7", rx: "1", width: "7", x: "3", y: "14" }),
          s.jsx("rect", { height: "7", rx: "1", width: "7", x: "14", y: "14" }),
        ],
      });
  }
}
function Yf({ appName: a, className: y, style: d }) {
  return s.jsx("svg", {
    "aria-hidden": "true",
    className: y,
    "data-comp-school-app-icon": a,
    fill: "none",
    focusable: "false",
    height: "24",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.9",
    style: {
      color: "#14b8a6",
      flex: "0 0 auto",
      height: "1.5rem",
      width: "1.5rem",
      ...d,
    },
    viewBox: "0 0 24 24",
    width: "24",
    children: Kf(a),
  });
}
function Xf(a) {
  return a.trim().charAt(0).toLocaleUpperCase() || "U";
}
function lc({ avatar: a, instanceId: y, profileName: d, style: x }) {
  const z = fc(a);
  return z
    ? s.jsx("span", {
        "aria-hidden": "true",
        "data-student-avatar": z.id,
        style: {
          display: "block",
          height: "100%",
          lineHeight: 0,
          width: "100%",
          ...x,
        },
        children: s.jsx($f, {
          features: z,
          idSuffix: y ? `${y}-${z.id}` : z.id,
        }),
      })
    : s.jsx("span", {
        "aria-hidden": "true",
        style: { lineHeight: 1, ...x },
        children: Xf(d),
      });
}
function qf({
  appName: a,
  appIcon: y,
  backHref: d,
  profileName: x,
  backLabel: z = "Back",
  canChangeAvatar: E = !1,
  changeAvatarHref: I,
  children: D,
  className: M,
  contextLabel: re,
  dataSource: W,
  logoSrc: q = "/favicon/favicon.svg",
  logoTone: K = "brand",
  onBack: Me,
  onDataSourceChange: U,
  onSignOut: B,
  profileAvatar: Q,
  reportIssueHref: je,
  style: Pe,
  tone: Ue = "dark",
}) {
  const le = Ue === "dark",
    me = !!fc(Q),
    oe = le ? "#f8fafc" : "#0f172a",
    de = le ? "#cbd5e1" : "#475569",
    Ee = le ? "#334155" : "#e2e8f0",
    Ge = le ? "#0f172a" : "#ffffff",
    et = le ? "#1e293b" : "#f8fafc",
    st = s.jsxs(s.Fragment, {
      children: [
        s.jsx("svg", {
          "aria-hidden": "true",
          fill: "none",
          height: "16",
          viewBox: "0 0 24 24",
          width: "16",
          children: s.jsx("path", {
            d: "M19 12H5m7 7-7-7 7-7",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
          }),
        }),
        s.jsx("span", { children: z }),
      ],
    }),
    We = {
      alignItems: "center",
      background: et,
      border: `1px solid ${Ee}`,
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
    Ne = {
      ...We,
      background: "transparent",
      border: 0,
      color: oe,
      justifyContent: "flex-start",
      width: "100%",
    };
  return s.jsx("header", {
    "aria-label": `${a} navigation`,
    className: M,
    "data-comp-school-navbar": "standard",
    style: {
      background: Ge,
      borderBottom: `1px solid ${Ee}`,
      color: oe,
      fontFamily:
        "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      position: "relative",
      zIndex: 30,
      ...Pe,
    },
    children: s.jsxs("div", {
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
        s.jsxs("div", {
          style: {
            alignItems: "center",
            display: "flex",
            gap: "0.625rem",
            minWidth: 0,
          },
          children: [
            s.jsx("img", {
              alt: "",
              "aria-hidden": "true",
              src: q,
              style: {
                filter: K === "grayscale" ? "grayscale(1)" : void 0,
                height: "2rem",
                objectFit: "contain",
                opacity: K === "grayscale" ? 0.58 : 1,
                width: "2rem",
              },
            }),
            y === void 0 ? s.jsx(Yf, { appName: a }) : y,
            s.jsx("strong", {
              style: {
                color: oe,
                fontSize: "1rem",
                fontWeight: 750,
                lineHeight: 1.2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              },
              children: a,
            }),
            re
              ? s.jsx("span", {
                  style: {
                    borderLeft: `1px solid ${Ee}`,
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
                  children: re,
                })
              : null,
          ],
        }),
        s.jsxs("div", {
          style: { alignItems: "center", display: "flex", gap: "0.625rem" },
          children: [
            Me
              ? s.jsx("button", {
                  "aria-label": z,
                  onClick: Me,
                  style: We,
                  type: "button",
                  children: st,
                })
              : s.jsx("a", {
                  "aria-label": z,
                  href: d,
                  style: We,
                  children: st,
                }),
            D,
            je && B
              ? s.jsxs("details", {
                  "data-comp-school-account-menu": !0,
                  style: { position: "relative" },
                  children: [
                    s.jsx("summary", {
                      "aria-label": `${x} account menu`,
                      title: `${x} account`,
                      style: {
                        alignItems: "center",
                        background: me
                          ? "transparent"
                          : le
                            ? "#e2e8f0"
                            : "#0f172a",
                        borderRadius: me ? "0.8rem" : "9999px",
                        color: le ? "#0f172a" : "#ffffff",
                        cursor: "pointer",
                        display: "inline-flex",
                        flex: "0 0 auto",
                        fontSize: "0.875rem",
                        fontWeight: 800,
                        height: "2.5rem",
                        justifyContent: "center",
                        listStyle: "none",
                        overflow: "hidden",
                        width: "2.5rem",
                      },
                      children: s.jsx(lc, { avatar: Q, profileName: x }),
                    }),
                    s.jsxs("div", {
                      style: {
                        background: Ge,
                        border: `1px solid ${Ee}`,
                        borderRadius: "0.75rem",
                        boxShadow: "0 20px 25px -5px rgba(2, 6, 23, 0.35)",
                        minWidth: "15rem",
                        padding: "0.5rem",
                        position: "absolute",
                        right: 0,
                        top: "calc(100% + 0.5rem)",
                        zIndex: 40,
                      },
                      children: [
                        s.jsx("p", {
                          style: {
                            color: de,
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.05em",
                            margin: 0,
                            padding: "0.375rem 0.5rem",
                            textTransform: "uppercase",
                          },
                          children: x.split(" ")[0] || x,
                        }),
                        W && U
                          ? s.jsx(Gf, {
                              dataSource: W,
                              onDataSourceChange: U,
                              tone: Ue,
                            })
                          : null,
                        E && I
                          ? s.jsxs("a", {
                              href: I,
                              style: Ne,
                              children: [
                                s.jsxs("svg", {
                                  "aria-hidden": "true",
                                  fill: "none",
                                  height: "16",
                                  viewBox: "0 0 24 24",
                                  width: "16",
                                  children: [
                                    s.jsx("path", {
                                      d: "M12 4c-4.4 0-8 3.1-8 7 0 2.9 2 5.4 4.9 6.5L8 21l3.4-2.8H12c4.4 0 8-3.1 8-7s-3.6-7.2-8-7.2Z",
                                      stroke: "currentColor",
                                      strokeLinejoin: "round",
                                      strokeWidth: "1.8",
                                    }),
                                    s.jsx("circle", {
                                      cx: "9",
                                      cy: "10",
                                      fill: "currentColor",
                                      r: "1",
                                    }),
                                    s.jsx("circle", {
                                      cx: "15",
                                      cy: "10",
                                      fill: "currentColor",
                                      r: "1",
                                    }),
                                  ],
                                }),
                                s.jsx("span", { children: "Change avatar" }),
                              ],
                            })
                          : null,
                        s.jsxs("a", {
                          href: je,
                          style: Ne,
                          children: [
                            s.jsxs("svg", {
                              "aria-hidden": "true",
                              fill: "none",
                              height: "16",
                              viewBox: "0 0 24 24",
                              width: "16",
                              children: [
                                s.jsx("path", {
                                  d: "M8 2 6.5 5M16 2l1.5 3M4 9H2M22 9h-2M5 19l2.5-2.5M19 19l-2.5-2.5M9 5h6a4 4 0 0 1 4 4v4a7 7 0 0 1-14 0V9a4 4 0 0 1 4-4Z",
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "1.8",
                                }),
                                s.jsx("path", {
                                  d: "M8 12h8M12 8v8",
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeWidth: "1.8",
                                }),
                              ],
                            }),
                            s.jsx("span", { children: "Report an issue" }),
                          ],
                        }),
                        s.jsxs("button", {
                          onClick: B,
                          style: { ...Ne, marginTop: "0.25rem" },
                          type: "button",
                          children: [
                            s.jsx("svg", {
                              "aria-hidden": "true",
                              fill: "none",
                              height: "16",
                              viewBox: "0 0 24 24",
                              width: "16",
                              children: s.jsx("path", {
                                d: "M10 17l5-5-5-5M15 12H3M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "1.8",
                              }),
                            }),
                            s.jsx("span", { children: "Sign out" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : s.jsx("span", {
                  "aria-label": `${x} profile`,
                  title: x,
                  style: {
                    alignItems: "center",
                    background: me ? "transparent" : le ? "#e2e8f0" : "#0f172a",
                    borderRadius: me ? "0.8rem" : "9999px",
                    color: le ? "#0f172a" : "#ffffff",
                    display: "inline-flex",
                    flex: "0 0 auto",
                    fontSize: "0.875rem",
                    fontWeight: 800,
                    height: "2.5rem",
                    justifyContent: "center",
                    overflow: "hidden",
                    width: "2.5rem",
                  },
                  children: s.jsx(lc, { avatar: Q, profileName: x }),
                }),
          ],
        }),
      ],
    }),
  });
}
const Jf = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  bf = ie.createContext(null),
  ep = ie.createContext(null),
  tp = ie.createContext(!1),
  Ul = "comp-school-fallback-access";
function oc() {
  return typeof window > "u" || typeof document > "u"
    ? null
    : uc(document.cookie, window.location.hostname, Gs().DEV === !0);
}
function np(a) {
  if (typeof window > "u" || typeof document > "u") return;
  const y = _f(a);
  uc(y, window.location.hostname, Gs().DEV === !0) && (document.cookie = y);
}
function rp() {
  typeof document > "u" || (document.cookie = Mf());
}
function $s(a, y) {
  return (
    y &&
    a.role === "teacher" &&
    new URLSearchParams(window.location.search).get("preview") === "student"
  );
}
function lp() {
  if (typeof window > "u") return null;
  const a = new URLSearchParams(window.location.hash.replace(/^#/, "")),
    y = a.get("fallback");
  if (y && qa(y)) {
    (window.sessionStorage.setItem(Ul, y), a.delete("fallback"));
    const x = a.toString();
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${window.location.search}${x ? `#${x}` : ""}`,
    );
  }
  const d = y || window.sessionStorage.getItem(Ul);
  return qa(d) ? d : (window.sessionStorage.removeItem(Ul), null);
}
const Tt = {
  loadingMain: {
    alignItems: "center",
    background: "#020617",
    color: "#ffffff",
    display: "grid",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    minHeight: "100vh",
    padding: "1rem",
    placeItems: "center",
  },
  loadingText: {
    color: "#cbd5e1",
    fontSize: "0.875rem",
    fontWeight: 500,
    margin: 0,
  },
  main: {
    alignItems: "center",
    background: "#020617",
    color: "#ffffff",
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
      "0 25px 50px -12px rgba(15, 23, 42, 0.45), 0 12px 24px -16px rgba(15, 23, 42, 0.6)",
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
    color: "#ffffff",
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 700,
    padding: "0.75rem 1rem",
    textAlign: "center",
    textDecoration: "none",
    width: "100%",
  },
};
function Gs() {
  return Jf || {};
}
function op(a) {
  return Df(window.location.hostname, a, Gs().VITE_PLATFORM_URL);
}
function sp({
  appName: a,
  children: y,
  allowedRoles: d,
  navbarChildren: x,
  navbarStyle: z,
  productionUrl: E,
  showNavbar: I = !0,
  allowFallback: D = !1,
  allowTeacherStudentPreview: M = !1,
}) {
  const W =
      new URLSearchParams(window.location.search).get("sql") === "mock"
        ? "mock"
        : "product",
    q = ie.useMemo(() => op(E), [E]),
    K = ie.useMemo(() => cc(window.location.hostname), []),
    Me = ie.useMemo(
      () => dc(window.location.hostname, "https://issues.comp.school"),
      [],
    ),
    U = ie.useMemo(() => {
      const ue = new URL(K);
      return (ue.searchParams.set("changeAvatar", "1"), ue.toString());
    }, [K]),
    B = d ? d.join(",") : "",
    [Q, je] = ie.useState(null),
    [Pe, Ue] = ie.useState(!0),
    [le, me] = ie.useState(!1),
    [oe, de] = ie.useState(null),
    [Ee, Ge] = ie.useState(!1),
    [et, st] = ie.useState(null);
  async function We() {
    (await fetch("/api/logout", {
      cache: "no-store",
      credentials: "same-origin",
      method: "POST",
    }).catch(() => {}),
      de(null),
      rp(),
      window.sessionStorage.removeItem(Ul),
      Ge(!1),
      me(!1),
      window.location.assign(K));
  }
  function Ne(ue) {
    if (ue === "real") return;
    const he = new URL(window.location.href);
    (he.searchParams.set("sql", ue), window.location.assign(he.toString()));
  }
  if (
    (ie.useEffect(() => {
      let ue = !1;
      return (
        fetch("/api/session", {
          cache: "no-store",
          credentials: "same-origin",
          headers: { accept: "application/json" },
        })
          .then(async (he) => {
            const ke = await he.json().catch(() => null);
            if (ue) return;
            if (
              he.ok &&
              ke?.ok &&
              ke.user &&
              (!d || d.includes(ke.user.role) || $s(ke.user, M))
            ) {
              (np(ke.user), je(null), de(ke.user), me(!0));
              return;
            }
            const se = oc();
            if (se && (!d || d.includes(se.role) || $s(se, M))) {
              (je(null), de(se), me(!0));
              return;
            }
            if (D && lp()) {
              (je(null), Ge(!0), me(!0));
              return;
            }
            (je(ke?.message || null), de(null), me(!1));
          })
          .catch(() => {
            if (!ue) {
              const he = oc();
              if (he && (!d || d.includes(he.role) || $s(he, M))) {
                (je(null), de(he), me(!0));
                return;
              }
              (je("Unable to check platform access right now."),
                de(null),
                me(!1));
            }
          })
          .finally(() => {
            ue || Ue(!1);
          }),
        () => {
          ue = !0;
        }
      );
    }, [B, D, M]),
    Pe)
  )
    return s.jsx("main", {
      style: Tt.loadingMain,
      children: s.jsx("p", {
        style: Tt.loadingText,
        children: "Checking platform access...",
      }),
    });
  if (le) {
    const ue = oe?.role === "admin" || oe?.role === "teacher",
      he = new URL(K);
    return (
      ue && he.searchParams.set("sql", W),
      s.jsxs(s.Fragment, {
        children: [
          I && (oe || Ee)
            ? s.jsx(qf, {
                appName: a,
                backHref: he.toString(),
                canChangeAvatar: oe?.role === "student",
                changeAvatarHref: U,
                contextLabel: et,
                dataSource: ue ? W : void 0,
                onDataSourceChange: ue ? Ne : void 0,
                onSignOut: We,
                profileAvatar: oe?.role === "student" ? oe.avatar : void 0,
                profileName: oe?.name || "Fallback",
                reportIssueHref: Me,
                style: z,
                children: x,
              })
            : null,
          s.jsx(tp.Provider, {
            value: Ee,
            children: s.jsx(ep.Provider, {
              value: oe,
              children: s.jsx(bf.Provider, { value: st, children: y }),
            }),
          }),
        ],
      })
    );
  }
  return s.jsx("main", {
    style: Tt.main,
    children: s.jsxs("section", {
      style: Tt.panel,
      children: [
        s.jsx(pc, { size: "small", style: { color: "#0f172a" } }),
        s.jsx("h1", { style: Tt.title, children: a }),
        s.jsx("p", {
          style: Tt.copy,
          children: "Open comp.school and enter your access code to continue.",
        }),
        s.jsxs("div", {
          style: Tt.actions,
          children: [
            Q && s.jsx("p", { style: Tt.error, children: Q }),
            s.jsx("a", {
              "aria-label": `Open comp.school to access ${a}`,
              href: q,
              style: Tt.link,
              children: "Open comp.school",
            }),
          ],
        }),
      ],
    }),
  });
}
function ip(a) {
  return a.startsWith("/") ? a : `/${a}`;
}
function up({ status: a }) {
  const y = {
    healthy:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    caution:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    exhausted: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    warning: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    ok: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    not_configured:
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
  };
  return s.jsx("span", {
    className: `inline-block rounded-full px-2 py-1 text-xs font-medium ${y[a] || y.ok}`,
    children: a,
  });
}
function Bs({ children: a, subtitle: y, title: d }) {
  return s.jsxs("div", {
    className: "rounded-lg border border-border bg-card p-6 shadow-sm",
    children: [
      s.jsxs("div", {
        className: "mb-4",
        children: [
          s.jsx("h3", {
            className: "text-lg font-semibold text-card-foreground",
            children: d,
          }),
          y
            ? s.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: y,
              })
            : null,
        ],
      }),
      a,
    ],
  });
}
function Hs({ label: a, value: y }) {
  return s.jsxs("div", {
    className:
      "flex items-center justify-between border-b border-border py-2 last:border-0",
    children: [
      s.jsx("span", {
        className: "text-sm text-muted-foreground",
        children: a,
      }),
      s.jsx("span", {
        className: "text-sm font-medium text-card-foreground",
        children: String(y),
      }),
    ],
  });
}
function sc({ service: a, subtitle: y, title: d }) {
  return s.jsxs(Bs, {
    title: d,
    subtitle: y,
    children: [
      s.jsx("div", {
        className: "mb-3",
        children: s.jsx(up, { status: a.status }),
      }),
      a.error
        ? s.jsx("p", {
            className: "mb-3 text-sm text-muted-foreground",
            children: a.error,
          })
        : null,
      a.data
        ? s.jsx("div", {
            children: Object.entries(a.data).map(([x, z]) =>
              x === "note"
                ? s.jsx(
                    "p",
                    {
                      className: "mt-3 text-xs italic text-muted-foreground",
                      children: String(z),
                    },
                    x,
                  )
                : typeof z == "object" && z !== null
                  ? s.jsxs(
                      "div",
                      {
                        className: "mt-3 border-t border-border pt-2",
                        children: [
                          s.jsx("p", {
                            className:
                              "mb-2 text-xs font-medium capitalize text-muted-foreground",
                            children: _r(x),
                          }),
                          Object.entries(z).map(([E, I]) =>
                            typeof I == "object" && I !== null
                              ? s.jsxs(
                                  "div",
                                  {
                                    className: "ml-2 mt-2",
                                    children: [
                                      s.jsx("p", {
                                        className:
                                          "mb-1 text-xs font-medium capitalize text-muted-foreground",
                                        children: _r(E),
                                      }),
                                      Object.entries(I).map(([D, M]) =>
                                        s.jsx(
                                          Hs,
                                          { label: _r(D), value: String(M) },
                                          D,
                                        ),
                                      ),
                                    ],
                                  },
                                  E,
                                )
                              : s.jsx(
                                  Hs,
                                  { label: _r(E), value: String(I) },
                                  E,
                                ),
                          ),
                        ],
                      },
                      x,
                    )
                  : s.jsx(Hs, { label: _r(x), value: String(z) }, x),
            ),
          })
        : null,
    ],
  });
}
function _r(a) {
  return a
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/^\w/, (y) => y.toUpperCase())
    .trim();
}
function ap() {
  const [a, y] = ie.useState({
      ai: null,
      aiError: null,
      costingSummary: null,
      costingError: null,
    }),
    [d, x] = ie.useState(!0);
  async function z(E) {
    const I = await fetch(ip(E), {
      credentials: "include",
      headers: { accept: "application/json" },
    });
    let D = null;
    try {
      D = await I.json();
    } catch {
      D = null;
    }
    return I.status === 401
      ? { data: null, error: D?.error || "A valid admin session is required" }
      : I.status === 403
        ? { data: null, error: D?.error || "A valid admin session is required" }
        : I.ok
          ? { data: D, error: null }
          : {
              data: null,
              error: D?.error || `Request failed with status ${I.status}`,
            };
  }
  return (
    ie.useEffect(() => {
      async function E() {
        const I = {},
          [D, M] = await Promise.allSettled([
            z("/api/admin/ai-usage"),
            z("/api/admin/costing-summary"),
          ]);
        (D.status === "fulfilled" && D.value.data?.success
          ? (I.ai = D.value.data.data)
          : (I.aiError =
              D.status === "rejected"
                ? "Network error"
                : D.value.error || D.value.data?.error || "Failed to fetch"),
          M.status === "fulfilled" && M.value.data?.success
            ? (I.costingSummary = M.value.data.data)
            : (I.costingError =
                M.status === "rejected"
                  ? "Network error"
                  : M.value.error || M.value.data?.error || "Failed to fetch"),
          y((re) => ({ ...re, ...I })),
          x(!1));
      }
      E();
    }, []),
    d
      ? s.jsx("div", {
          className: "flex items-center justify-center py-12",
          children: s.jsx("p", {
            className: "text-muted-foreground",
            children: "Loading costing data...",
          }),
        })
      : s.jsxs("div", {
          children: [
            s.jsxs("div", {
              className: "mb-6",
              children: [
                s.jsx("h2", {
                  className: "text-2xl font-bold text-foreground",
                  children: "Costing Summary",
                }),
                s.jsx("p", {
                  className: "text-muted-foreground",
                  children:
                    "Monitor service costs and usage across all platforms",
                }),
              ],
            }),
            s.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                a.ai
                  ? s.jsx(sc, {
                      title: "OpenAI GPT-5.6 Luna Usage Tracking",
                      subtitle: "Server-side monitoring status",
                      service: a.ai,
                    })
                  : s.jsx(Bs, {
                      title: "OpenAI GPT-5.6 Luna Usage Tracking",
                      subtitle: "Server-side monitoring status",
                      children: s.jsx("p", {
                        className: "text-sm text-destructive",
                        children: a.aiError || "Failed to load",
                      }),
                    }),
                a.costingSummary
                  ? s.jsx(sc, {
                      title: "GitHub Actions Usage",
                      subtitle: "CI/CD pipeline usage",
                      service: a.costingSummary.github,
                    })
                  : s.jsx(Bs, {
                      title: "GitHub Actions Usage",
                      subtitle: "CI/CD pipeline usage",
                      children: s.jsx("p", {
                        className: "text-sm text-destructive",
                        children: a.costingError || "Failed to load",
                      }),
                    }),
              ],
            }),
          ],
        })
  );
}
const cp = ["9A", "10A", "11A", "11B"];
function dp() {
  const [a, y] = ie.useState([]),
    [d, x] = ie.useState("9A"),
    [z, E] = ie.useState(!0),
    [I, D] = ie.useState(null),
    [M, re] = ie.useState(null),
    [W, q] = ie.useState("");
  ie.useEffect(() => {
    fetch("/api/credentials", { cache: "no-store", credentials: "include" })
      .then(async (U) => {
        const B = await U.json().catch(() => null);
        if (!U.ok || !B?.ok || !B.credentials)
          throw new Error(B?.message || "Credentials could not be loaded.");
        y(B.credentials);
      })
      .catch((U) =>
        D(U instanceof Error ? U.message : "Credentials could not be loaded."),
      )
      .finally(() => E(!1));
  }, []);
  const K = ie.useMemo(() => a.filter((U) => U.classes.includes(d)), [a, d]);
  async function Me(U) {
    D(null);
    try {
      const B = await fetch("/api/credentials", {
          method: "PATCH",
          cache: "no-store",
          credentials: "include",
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({ userId: U.userId, pin: W }),
        }),
        Q = await B.json().catch(() => null);
      if (!B.ok || !Q?.ok) {
        D(Q?.message || "The PIN could not be reset.");
        return;
      }
      (y((je) =>
        je.map((Pe) =>
          Pe.userId === U.userId
            ? {
                ...Pe,
                pin: W,
                mustChange: !0,
                changedAt: Q.changedAt || Pe.changedAt,
              }
            : Pe,
        ),
      ),
        re(null),
        q(""));
    } catch {
      D("The PIN could not be reset.");
    }
  }
  return s.jsxs("section", {
    className: "credential-workspace",
    "aria-labelledby": "credentials-heading",
    children: [
      s.jsxs("div", {
        className:
          "screen-only rounded-lg border border-border bg-card p-6 shadow-sm",
        children: [
          s.jsxs("div", {
            className:
              "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("p", {
                    className:
                      "text-sm font-semibold uppercase tracking-wide text-emerald-700",
                    children: "September setup",
                  }),
                  s.jsx("h2", {
                    id: "credentials-heading",
                    className: "mt-1 text-2xl font-bold",
                    children: "Class access cards",
                  }),
                  s.jsx("p", {
                    className: "mt-2 max-w-3xl text-sm text-muted-foreground",
                    children:
                      "Four classes, 34 students each. Print one class at a time on A4, then cut along the dotted borders.",
                  }),
                ],
              }),
              s.jsxs("button", {
                type: "button",
                onClick: () => window.print(),
                disabled: z || K.length === 0,
                className:
                  "rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:bg-slate-400",
                children: ["Print ", d],
              }),
            ],
          }),
          s.jsx("div", {
            className: "mt-5 flex flex-wrap gap-2",
            role: "tablist",
            "aria-label": "Credential group",
            children: cp.map((U) =>
              s.jsx(
                "button",
                {
                  type: "button",
                  role: "tab",
                  "aria-selected": d === U,
                  onClick: () => x(U),
                  className: `rounded-md border px-3 py-2 text-sm font-semibold ${d === U ? "border-emerald-700 bg-emerald-700 text-white" : "border-slate-300 bg-white text-slate-700"}`,
                  children: U,
                },
                U,
              ),
            ),
          }),
          I &&
            s.jsx("p", {
              className: "mt-4 text-sm font-semibold text-red-700",
              role: "alert",
              children: I,
            }),
          z
            ? s.jsx("p", {
                className: "mt-6 text-sm text-muted-foreground",
                children: "Loading mock credentials...",
              })
            : s.jsx("div", {
                className: "mt-6 overflow-x-auto",
                children: s.jsxs("table", {
                  className: "w-full border-collapse text-left text-sm",
                  children: [
                    s.jsx("thead", {
                      children: s.jsxs("tr", {
                        className: "border-b",
                        children: [
                          s.jsx("th", { className: "py-2", children: "Name" }),
                          s.jsx("th", { children: "Class" }),
                          s.jsx("th", { children: "Letters" }),
                          s.jsx("th", { children: "PIN" }),
                          s.jsx("th", {
                            className: "text-right",
                            children: "Action",
                          }),
                        ],
                      }),
                    }),
                    s.jsx("tbody", {
                      children: K.map((U) =>
                        s.jsxs(
                          "tr",
                          {
                            className: "border-b last:border-0",
                            children: [
                              s.jsx("td", {
                                className: "py-2.5 font-medium",
                                children: U.name,
                              }),
                              s.jsx("td", { children: U.classes.join(", ") }),
                              s.jsx("td", {
                                className: "font-mono font-bold",
                                children: U.initials,
                              }),
                              s.jsx("td", {
                                children:
                                  M === U.userId
                                    ? s.jsx("input", {
                                        "aria-label": `New PIN for ${U.name}`,
                                        value: W,
                                        onChange: (B) =>
                                          q(
                                            B.target.value
                                              .replace(/\D/g, "")
                                              .slice(0, 4),
                                          ),
                                        inputMode: "numeric",
                                        maxLength: 4,
                                        className:
                                          "w-24 rounded border px-2 py-1 font-mono",
                                      })
                                    : s.jsx("span", {
                                        className: "font-mono font-bold",
                                        children: U.pin,
                                      }),
                              }),
                              s.jsx("td", {
                                className: "text-right",
                                children:
                                  M === U.userId
                                    ? s.jsxs("span", {
                                        className: "inline-flex gap-2",
                                        children: [
                                          s.jsx("button", {
                                            type: "button",
                                            disabled: W.length !== 4,
                                            onClick: () => Me(U),
                                            className:
                                              "font-semibold text-emerald-700 disabled:text-slate-400",
                                            children: "Save",
                                          }),
                                          s.jsx("button", {
                                            type: "button",
                                            onClick: () => {
                                              (re(null), q(""));
                                            },
                                            className: "text-slate-600",
                                            children: "Cancel",
                                          }),
                                        ],
                                      })
                                    : s.jsx("button", {
                                        type: "button",
                                        onClick: () => {
                                          (re(U.userId), q(U.pin));
                                        },
                                        className:
                                          "font-semibold text-emerald-700",
                                        children: "Reset PIN",
                                      }),
                              }),
                            ],
                          },
                          U.userId,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
        ],
      }),
      s.jsxs("div", {
        className: "credential-print-sheet",
        "aria-label": `${d} printable credential cards`,
        children: [
          s.jsxs("header", {
            children: [
              s.jsxs("h1", { children: ["Comp School access — ", d] }),
              s.jsx("p", {
                children: "Keep this card safe. Go to comp.school to sign in.",
              }),
            ],
          }),
          s.jsx("div", {
            className: "credential-slip-grid",
            children: K.map((U) =>
              s.jsxs(
                "article",
                {
                  className: "credential-slip",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("strong", { children: U.name }),
                        s.jsx("span", { children: d }),
                      ],
                    }),
                    s.jsxs("p", {
                      children: [
                        "Letters ",
                        s.jsx("b", { children: U.initials }),
                        s.jsx("span", {
                          "aria-hidden": "true",
                          children: " + ",
                        }),
                        "PIN ",
                        s.jsx("b", { children: U.pin }),
                      ],
                    }),
                    s.jsx("small", {
                      children:
                        "Letters are the first and last letters of your first name.",
                    }),
                  ],
                },
                `print-${U.userId}`,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function fp() {
  return s.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      s.jsx("header", {
        className: "border-b border-border px-6 py-4",
        children: s.jsxs("h1", {
          className:
            "flex items-baseline gap-2 text-xl font-semibold text-foreground",
          children: [
            s.jsx(pc, { size: "small" }),
            s.jsx("span", { children: "Admin" }),
          ],
        }),
      }),
      s.jsxs("main", {
        className: "space-y-8 p-6",
        children: [s.jsx(dp, {}), s.jsx(ap, {})],
      }),
    ],
  });
}
wf.createRoot(document.getElementById("root")).render(
  s.jsx(mf.StrictMode, {
    children: s.jsx(sp, {
      appName: "Admin",
      allowedRoles: ["admin"],
      productionUrl: "https://admin.comp.school",
      children: s.jsx(fp, {}),
    }),
  }),
);
