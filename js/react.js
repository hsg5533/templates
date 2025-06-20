/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ !(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).React = {}));
})(this, function (e) {
  "use strict";
  var t,
    n,
    r,
    o,
    a,
    i,
    u,
    s,
    c,
    l,
    f,
    p,
    d,
    y,
    v,
    h,
    m = Symbol.for("react.element"),
    g = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    $ = Symbol.for("react.strict_mode"),
    w = Symbol.for("react.profiler"),
    _ = Symbol.for("react.provider"),
    k = Symbol.for("react.context"),
    C = Symbol.for("react.forward_ref"),
    R = Symbol.for("react.suspense"),
    P = Symbol.for("react.suspense_list"),
    x = Symbol.for("react.memo"),
    S = Symbol.for("react.lazy"),
    T = Symbol.for("react.offscreen"),
    I = Symbol.iterator;
  function E(e) {
    if (null === e || "object" != typeof e) return null;
    var t = (I && e[I]) || e["@@iterator"];
    return "function" == typeof t ? t : null;
  }
  var j = { current: null },
    D = { transition: null },
    N = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
    F = { current: null },
    O = {},
    L = null;
  function z(e) {
    L = e;
  }
  (O.setExtraStackFrame = function (e) {
    L = e;
  }),
    (O.getCurrentStack = null),
    (O.getStackAddendum = function () {
      var e = "";
      L && (e += L);
      var t = O.getCurrentStack;
      return t && (e += t() || ""), e;
    });
  var U = {
    ReactCurrentDispatcher: j,
    ReactCurrentBatchConfig: D,
    ReactCurrentOwner: F,
  };
  function M(e) {
    for (
      var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    Y("warn", e, n);
  }
  function V(e) {
    for (
      var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    Y("error", e, n);
  }
  function Y(e, t, n) {
    var r = U.ReactDebugCurrentFrame.getStackAddendum();
    "" !== r && ((t += "%s"), (n = n.concat([r])));
    var o = n.map(function (e) {
      return String(e);
    });
    o.unshift("Warning: " + t),
      Function.prototype.apply.call(console[e], console, o);
  }
  (U.ReactDebugCurrentFrame = O), (U.ReactCurrentActQueue = N);
  var q = {};
  function A(e, t) {
    var n = e.constructor,
      r = (n && (n.displayName || n.name)) || "ReactClass",
      o = r + "." + t;
    !q[o] &&
      (V(
        "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
        t,
        r
      ),
      (q[o] = !0));
  }
  var B = {
      isMounted: function (e) {
        return !1;
      },
      enqueueForceUpdate: function (e, t, n) {
        A(e, "forceUpdate");
      },
      enqueueReplaceState: function (e, t, n, r) {
        A(e, "replaceState");
      },
      enqueueSetState: function (e, t, n, r) {
        A(e, "setState");
      },
    },
    W = Object.assign,
    H = {};
  function J(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = H),
      (this.updater = n || B);
  }
  Object.freeze(H),
    (J.prototype.isReactComponent = {}),
    (J.prototype.setState = function (e, t) {
      if ("object" != typeof e && "function" != typeof e && null != e)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (J.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    });
  var Q = {
      isMounted: [
        "isMounted",
        "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
      ],
      replaceState: [
        "replaceState",
        "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
      ],
    },
    X = function (e, t) {
      Object.defineProperty(J.prototype, e, {
        get: function () {
          M(
            "%s(...) is deprecated in plain JavaScript React classes. %s",
            t[0],
            t[1]
          );
        },
      });
    };
  for (var G in Q) Q.hasOwnProperty(G) && X(G, Q[G]);
  function K() {}
  function Z(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = H),
      (this.updater = n || B);
  }
  K.prototype = J.prototype;
  var ee = (Z.prototype = new K());
  (ee.constructor = Z), W(ee, J.prototype), (ee.isPureReactComponent = !0);
  var et = Array.isArray;
  function en(e) {
    return et(e);
  }
  function er(e) {
    return "" + e;
  }
  function eo(e) {
    if (
      (function e(t) {
        try {
          var n;
          return (n = t), !1;
        } catch (r) {
          return !0;
        }
      })(e)
    ) {
      var t, n;
      return (
        V(
          "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
          ((t = e),
          ("function" == typeof Symbol &&
            Symbol.toStringTag &&
            t[Symbol.toStringTag]) ||
            t.constructor.name ||
            "Object")
        ),
        "" + (n = e)
      );
    }
  }
  function ea(e) {
    return e.displayName || "Context";
  }
  function ei(e) {
    if (null == e) return null;
    if (
      ("number" == typeof e.tag &&
        V(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ),
      "function" == typeof e)
    )
      return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
      case b:
        return "Fragment";
      case g:
        return "Portal";
      case w:
        return "Profiler";
      case $:
        return "StrictMode";
      case R:
        return "Suspense";
      case P:
        return "SuspenseList";
    }
    if ("object" == typeof e)
      switch (e.$$typeof) {
        case k:
          return ea(e) + ".Consumer";
        case _:
          return ea(e._context) + ".Provider";
        case C:
          return (function e(t, n, r) {
            var o = t.displayName;
            if (o) return o;
            var a = n.displayName || n.name || "";
            return "" !== a ? r + "(" + a + ")" : r;
          })(e, e.render, "ForwardRef");
        case x:
          var t = e.displayName || null;
          if (null !== t) return t;
          return ei(e.type) || "Memo";
        case S:
          var n = e,
            r = n._payload,
            o = n._init;
          try {
            return ei(o(r));
          } catch (a) {}
      }
    return null;
  }
  var eu = Object.prototype.hasOwnProperty,
    es = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ec(e) {
    if (eu.call(e, "ref")) {
      var t = Object.getOwnPropertyDescriptor(e, "ref").get;
      if (t && t.isReactWarning) return !1;
    }
    return void 0 !== e.ref;
  }
  function el(e) {
    if (eu.call(e, "key")) {
      var t = Object.getOwnPropertyDescriptor(e, "key").get;
      if (t && t.isReactWarning) return !1;
    }
    return void 0 !== e.key;
  }
  r = {};
  var ef = function (e, t, n, r, o, a, i) {
    var u = { $$typeof: m, type: e, key: t, ref: n, props: i, _owner: a };
    return (
      (u._store = {}),
      Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: r,
      }),
      Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o,
      }),
      Object.freeze && (Object.freeze(u.props), Object.freeze(u)),
      u
    );
  };
  function ep(e, o, a) {
    var i,
      u = {},
      s = null,
      c = null,
      l = null,
      f = null;
    if (null != o)
      for (i in (ec(o) &&
        ((c = o.ref),
        (function e(t) {
          if (
            "string" == typeof t.ref &&
            F.current &&
            t.__self &&
            F.current.stateNode !== t.__self
          ) {
            var n = ei(F.current.type);
            r[n] ||
              (V(
                'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                n,
                t.ref
              ),
              (r[n] = !0));
          }
        })(o)),
      el(o) && (eo(o.key), (s = "" + o.key)),
      (l = void 0 === o.__self ? null : o.__self),
      (f = void 0 === o.__source ? null : o.__source),
      o))
        eu.call(o, i) && !es.hasOwnProperty(i) && (u[i] = o[i]);
    var p = arguments.length - 2;
    if (1 === p) u.children = a;
    else if (p > 1) {
      for (var d = Array(p), y = 0; y < p; y++) d[y] = arguments[y + 2];
      Object.freeze && Object.freeze(d), (u.children = d);
    }
    if (e && e.defaultProps) {
      var v = e.defaultProps;
      for (i in v) void 0 === u[i] && (u[i] = v[i]);
    }
    if (s || c) {
      var h,
        m,
        g,
        b,
        $,
        w,
        _ = "function" == typeof e ? e.displayName || e.name || "Unknown" : e;
      s &&
        ((h = u),
        (m = _),
        ((g = function () {
          t ||
            ((t = !0),
            V(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
              m
            ));
        }).isReactWarning = !0),
        Object.defineProperty(h, "key", { get: g, configurable: !0 })),
        c &&
          ((b = u),
          ($ = _),
          ((w = function () {
            n ||
              ((n = !0),
              V(
                "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                $
              ));
          }).isReactWarning = !0),
          Object.defineProperty(b, "ref", { get: w, configurable: !0 }));
    }
    return ef(e, s, c, l, f, F.current, u);
  }
  function ed(e, t, n) {
    if (null == e)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r,
      o,
      a = W({}, e.props),
      i = e.key,
      u = e.ref,
      s = e._self,
      c = e._source,
      l = e._owner;
    if (null != t)
      for (r in (ec(t) && ((u = t.ref), (l = F.current)),
      el(t) && (eo(t.key), (i = "" + t.key)),
      e.type && e.type.defaultProps && (o = e.type.defaultProps),
      t))
        eu.call(t, r) &&
          !es.hasOwnProperty(r) &&
          (void 0 === t[r] && void 0 !== o ? (a[r] = o[r]) : (a[r] = t[r]));
    var f = arguments.length - 2;
    if (1 === f) a.children = n;
    else if (f > 1) {
      for (var p = Array(f), d = 0; d < f; d++) p[d] = arguments[d + 2];
      a.children = p;
    }
    return ef(e.type, i, u, s, c, l, a);
  }
  function ey(e) {
    return "object" == typeof e && null !== e && e.$$typeof === m;
  }
  var ev = !1,
    eh = /\/+/g;
  function em(e) {
    return e.replace(eh, "$&/");
  }
  function eg(e, t) {
    if ("object" == typeof e && null !== e && null != e.key) {
      var n, r;
      return (
        eo(e.key),
        (n = "" + e.key),
        (r = { "=": "=0", ":": "=2" }),
        "$" +
          n.replace(/[=:]/g, function (e) {
            return r[e];
          })
      );
    }
    return t.toString(36);
  }
  function eb(e, t, n) {
    if (null == e) return e;
    var r = [],
      o = 0;
    return (
      !(function e(t, n, r, o, a) {
        var i = typeof t;
        ("undefined" === i || "boolean" === i) && (t = null);
        var u = !1;
        if (null === t) u = !0;
        else
          switch (i) {
            case "string":
            case "number":
              u = !0;
              break;
            case "object":
              switch (t.$$typeof) {
                case m:
                case g:
                  u = !0;
              }
          }
        if (u) {
          var s,
            c,
            l,
            f = t,
            p = a(f),
            d = "" === o ? "." + eg(f, 0) : o;
          if (et((l = p))) {
            var y = "";
            null != d && (y = em(d) + "/"),
              e(p, n, y, "", function (e) {
                return e;
              });
          } else
            null != p &&
              (ey(p) &&
                (p.key && (!f || f.key !== p.key) && eo(p.key),
                (p =
                  ((s = p),
                  (c =
                    r +
                    (p.key && (!f || f.key !== p.key)
                      ? em("" + p.key) + "/"
                      : "") +
                    d),
                  ef(
                    s.type,
                    c,
                    s.ref,
                    s._self,
                    s._source,
                    s._owner,
                    s.props
                  )))),
              n.push(p));
          return 1;
        }
        var v,
          h = 0,
          b = "" === o ? "." : o + ":";
        if (et((v = t)))
          for (var $ = 0; $ < t.length; $++)
            (k = b + eg((_ = t[$]), $)), (h += e(_, n, r, k, a));
        else {
          var w = E(t);
          if ("function" == typeof w) {
            var _,
              k,
              C,
              R = t;
            w === R.entries &&
              (ev ||
                M(
                  "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
                ),
              (ev = !0));
            for (var P = w.call(R), x = 0; !(C = P.next()).done; )
              (k = b + eg((_ = C.value), x++)), (h += e(_, n, r, k, a));
          } else if ("object" === i) {
            var S = String(t);
            throw Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === S
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : S) +
                "). If you meant to render a collection of children, use an array instead."
            );
          }
        }
        return h;
      })(e, r, "", "", function (e) {
        return t.call(n, e, o++);
      }),
      r
    );
  }
  function e$(e) {
    if (-1 === e._status) {
      var t = (0, e._result)();
      if (
        (t.then(
          function (t) {
            if (0 === e._status || -1 === e._status) {
              var n = e;
              (n._status = 1), (n._result = t);
            }
          },
          function (t) {
            if (0 === e._status || -1 === e._status) {
              var n = e;
              (n._status = 2), (n._result = t);
            }
          }
        ),
        -1 === e._status)
      ) {
        var n = e;
        (n._status = 0), (n._result = t);
      }
    }
    if (1 === e._status) {
      var r = e._result;
      return (
        void 0 === r &&
          V(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            r
          ),
        "default" in r ||
          V(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            r
          ),
        r.default
      );
    }
    throw e._result;
  }
  function e8(e) {
    return (
      "string" == typeof e ||
      "function" == typeof e ||
      e === b ||
      e === w ||
      e === $ ||
      e === R ||
      e === P ||
      e === T ||
      ("object" == typeof e &&
        null !== e &&
        (e.$$typeof === S ||
          e.$$typeof === x ||
          e.$$typeof === _ ||
          e.$$typeof === k ||
          e.$$typeof === C ||
          e.$$typeof === o ||
          void 0 !== e.getModuleId))
    );
  }
  function ew() {
    var e = j.current;
    return (
      null === e &&
        V(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."
        ),
      e
    );
  }
  o = Symbol.for("react.module.reference");
  var e_ = 0;
  function ek() {}
  ek.__reactDisabledLog = !0;
  var eC = U.ReactCurrentDispatcher;
  function eR(e, t, n) {
    if (void 0 === p)
      try {
        throw Error();
      } catch (r) {
        var o = r.stack.trim().match(/\n( *(at )?)/);
        p = (o && o[1]) || "";
      }
    return "\n" + p + e;
  }
  var eP = !1;
  function ex(e, t) {
    if (!e || eP) return "";
    var n,
      r,
      o = d.get(e);
    if (void 0 !== o) return o;
    eP = !0;
    var p = Error.prepareStackTrace;
    (Error.prepareStackTrace = void 0),
      (r = eC.current),
      (eC.current = null),
      (function e() {
        if (0 === e_) {
          (a = console.log),
            (i = console.info),
            (u = console.warn),
            (s = console.error),
            (c = console.group),
            (l = console.groupCollapsed),
            (f = console.groupEnd);
          var t = { configurable: !0, enumerable: !0, value: ek, writable: !0 };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t,
          });
        }
        e_++;
      })();
    try {
      if (t) {
        var y = function () {
          throw Error();
        };
        if (
          (Object.defineProperty(y.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          "object" == typeof Reflect && Reflect.construct)
        ) {
          try {
            Reflect.construct(y, []);
          } catch (v) {
            n = v;
          }
          Reflect.construct(e, [], y);
        } else {
          try {
            y.call();
          } catch (h) {
            n = h;
          }
          e.call(y.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (m) {
          n = m;
        }
        e();
      }
    } catch (g) {
      if (g && n && "string" == typeof g.stack) {
        for (
          var b = g.stack.split("\n"),
            $ = n.stack.split("\n"),
            w = b.length - 1,
            _ = $.length - 1;
          w >= 1 && _ >= 0 && b[w] !== $[_];

        )
          _--;
        for (; w >= 1 && _ >= 0; w--, _--)
          if (b[w] !== $[_]) {
            if (1 !== w || 1 !== _)
              do
                if ((w--, --_ < 0 || b[w] !== $[_])) {
                  var k = "\n" + b[w].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      k.includes("<anonymous>") &&
                      (k = k.replace("<anonymous>", e.displayName)),
                    "function" == typeof e && d.set(e, k),
                    k
                  );
                }
              while (w >= 1 && _ >= 0);
            break;
          }
      }
    } finally {
      (eP = !1),
        (eC.current = r),
        (function e() {
          if (0 == --e_) {
            var t = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, {
              log: W({}, t, { value: a }),
              info: W({}, t, { value: i }),
              warn: W({}, t, { value: u }),
              error: W({}, t, { value: s }),
              group: W({}, t, { value: c }),
              groupCollapsed: W({}, t, { value: l }),
              groupEnd: W({}, t, { value: f }),
            });
          }
          e_ < 0 &&
            V(
              "disabledDepth fell below zero. This is a bug in React. Please file an issue."
            );
        })(),
        (Error.prepareStackTrace = p);
    }
    var C = e ? e.displayName || e.name : "",
      R = C ? eR(C) : "";
    return "function" == typeof e && d.set(e, R), R;
  }
  function eS(e, t, n) {
    return ex(e, !1);
  }
  function eT(e, t, n) {
    if (null == e) return "";
    if ("function" == typeof e)
      return ex(e, !!((o = (r = e).prototype) && o.isReactComponent));
    if ("string" == typeof e) return eR(e);
    switch (e) {
      case R:
        return eR("Suspense");
      case P:
        return eR("SuspenseList");
    }
    if ("object" == typeof e)
      switch (e.$$typeof) {
        case C:
          return ex((a = e.render), !1);
        case x:
          return eT(e.type, t, n);
        case S:
          var r,
            o,
            a,
            i = e,
            u = i._payload,
            s = i._init;
          try {
            return eT(s(u), t, n);
          } catch (c) {}
      }
    return "";
  }
  d = new ("function" == typeof WeakMap ? WeakMap : Map)();
  var e9 = {},
    eI = U.ReactDebugCurrentFrame;
  function eE(e) {
    if (e) {
      var t = e._owner,
        n = eT(e.type, e._source, t ? t.type : null);
      eI.setExtraStackFrame(n);
    } else eI.setExtraStackFrame(null);
  }
  function ej(e) {
    if (e) {
      var t,
        n = e._owner;
      L = t = eT(e.type, e._source, n ? n.type : null);
    } else L = null;
  }
  function eD() {
    if (F.current) {
      var e = ei(F.current.type);
      if (e) return "\n\nCheck the render method of `" + e + "`.";
    }
    return "";
  }
  y = !1;
  var eN = {};
  function eF(e, t) {
    if (e._store && !e._store.validated && null == e.key) {
      e._store.validated = !0;
      var n = (function e(t) {
        var n = eD();
        if (!n) {
          var r = "string" == typeof t ? t : t.displayName || t.name;
          r && (n = "\n\nCheck the top-level render call using <" + r + ">.");
        }
        return n;
      })(t);
      if (!eN[n]) {
        eN[n] = !0;
        var r = "";
        e &&
          e._owner &&
          e._owner !== F.current &&
          (r = " It was passed a child from " + ei(e._owner.type) + "."),
          ej(e),
          V(
            'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
            n,
            r
          ),
          ej(null);
      }
    }
  }
  function e0(e, t) {
    if ("object" == typeof e) {
      if (et((a = e)))
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          ey(r) && eF(r, t);
        }
      else if (ey(e)) e._store && (e._store.validated = !0);
      else if (e) {
        var o = E(e);
        if ("function" == typeof o && o !== e.entries)
          for (var a, i, u = o.call(e); !(i = u.next()).done; )
            ey(i.value) && eF(i.value, t);
      }
    }
  }
  function eO(e) {
    var t,
      n = e.type;
    if (null != n && "string" != typeof n) {
      if ("function" == typeof n) t = n.propTypes;
      else {
        if ("object" != typeof n || (n.$$typeof !== C && n.$$typeof !== x))
          return;
        t = n.propTypes;
      }
      if (t) {
        var r = ei(n);
        !(function e(t, n, r, o, a) {
          var i = Function.call.bind(eu);
          for (var u in t)
            if (i(t, u)) {
              var s = void 0;
              try {
                if ("function" != typeof t[u]) {
                  var c = Error(
                    (o || "React class") +
                      ": " +
                      r +
                      " type `" +
                      u +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      typeof t[u] +
                      "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  throw ((c.name = "Invariant Violation"), c);
                }
                s = t[u](
                  n,
                  u,
                  o,
                  r,
                  null,
                  "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                );
              } catch (l) {
                s = l;
              }
              !s ||
                s instanceof Error ||
                (eE(a),
                V(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  o || "React class",
                  r,
                  u,
                  typeof s
                ),
                eE(null)),
                s instanceof Error &&
                  !(s.message in e9) &&
                  ((e9[s.message] = !0),
                  eE(a),
                  V("Failed %s type: %s", r, s.message),
                  eE(null));
            }
        })(t, e.props, "prop", r, e);
      } else if (void 0 !== n.PropTypes && !y) {
        y = !0;
        var o = ei(n);
        V(
          "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
          o || "Unknown"
        );
      }
      "function" != typeof n.getDefaultProps ||
        n.getDefaultProps.isReactClassApproved ||
        V(
          "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
        );
    }
  }
  function eL(e, t, n) {
    var r = e8(e);
    if (!r) {
      var o,
        a,
        i,
        u = "";
      (void 0 === e ||
        ("object" == typeof e && null !== e && 0 === Object.keys(e).length)) &&
        (u +=
          " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var s =
        null != (i = t)
          ? (function e(t) {
              if (void 0 !== t) {
                var n;
                return (
                  "\n\nCheck your code at " +
                  t.fileName.replace(/^.*[\\\/]/, "") +
                  ":" +
                  t.lineNumber +
                  "."
                );
              }
              return "";
            })(i.__source)
          : "";
      (s ? (u += s) : (u += eD()), null === e)
        ? (a = "null")
        : et((o = e))
        ? (a = "array")
        : void 0 !== e && e.$$typeof === m
        ? ((a = "<" + (ei(e.type) || "Unknown") + " />"),
          (u =
            " Did you accidentally export a JSX literal instead of a component?"))
        : (a = typeof e),
        V(
          "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          a,
          u
        );
    }
    var c = ep.apply(this, arguments);
    if (null == c) return c;
    if (r) for (var l = 2; l < arguments.length; l++) e0(arguments[l], e);
    return (
      e === b
        ? (function e(t) {
            for (var n = Object.keys(t.props), r = 0; r < n.length; r++) {
              var o = n[r];
              if ("children" !== o && "key" !== o) {
                ej(t),
                  V(
                    "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                    o
                  ),
                  ej(null);
                break;
              }
            }
            null !== t.ref &&
              (ej(t),
              V("Invalid attribute `ref` supplied to `React.Fragment`."),
              ej(null));
          })(c)
        : eO(c),
      c
    );
  }
  var ez = !1;
  function eU(e, t) {
    var n = e.length;
    e.push(t),
      (function e(t, n, r) {
        for (var o = r; o > 0; ) {
          var a = (o - 1) >>> 1,
            i = t[a];
          if (!(eY(i, n) > 0)) return;
          (t[a] = n), (t[o] = i), (o = a);
        }
      })(e, t, n);
  }
  function eM(e) {
    return 0 === e.length ? null : e[0];
  }
  function eV(e) {
    if (0 === e.length) return null;
    var t = e[0],
      n = e.pop();
    return (
      n !== t &&
        ((e[0] = n),
        (function e(t, n, r) {
          for (var o = 0, a = t.length, i = a >>> 1; o < i; ) {
            var u = (o + 1) * 2 - 1,
              s = t[u],
              c = u + 1,
              l = t[c];
            if (0 > eY(s, n))
              c < a && 0 > eY(l, s)
                ? ((t[o] = l), (t[c] = n), (o = c))
                : ((t[o] = s), (t[u] = n), (o = u));
            else {
              if (!(c < a && 0 > eY(l, n))) return;
              (t[o] = l), (t[c] = n), (o = c);
            }
          }
        })(e, n, 0)),
      t
    );
  }
  function eY(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  if ("object" == typeof performance && "function" == typeof performance.now) {
    var eq = performance;
    v = function () {
      return eq.now();
    };
  } else {
    var e1 = Date,
      eA = e1.now();
    v = function () {
      return e1.now() - eA;
    };
  }
  var eB = [],
    eW = [],
    e3 = 1,
    eH = null,
    e2 = 3,
    eJ = !1,
    e5 = !1,
    eQ = !1,
    eX = "function" == typeof setTimeout ? setTimeout : null,
    e4 = "function" == typeof clearTimeout ? clearTimeout : null,
    e6 = "undefined" != typeof setImmediate ? setImmediate : null;
  function eG(e) {
    for (var t = eM(eW); null !== t; ) {
      if (null === t.callback) eV(eW);
      else {
        if (!(t.startTime <= e)) return;
        eV(eW), (t.sortIndex = t.expirationTime), eU(eB, t);
      }
      t = eM(eW);
    }
  }
  function eK(e) {
    if (((eQ = !1), eG(e), !e5)) {
      if (null !== eM(eB)) (e5 = !0), tc(eZ);
      else {
        var t = eM(eW);
        null !== t && tl(eK, t.startTime - e);
      }
    }
  }
  function eZ(e, t) {
    (e5 = !1), eQ && ((eQ = !1), tf()), (eJ = !0);
    var n = e2;
    try {
      return (function e(t, n) {
        var r = n;
        for (
          eG(r), eH = eM(eB);
          null !== eH && !(eH.expirationTime > r && (!t || ta()));

        ) {
          var o = eH.callback;
          if ("function" == typeof o) {
            (eH.callback = null), (e2 = eH.priorityLevel);
            var a = o(eH.expirationTime <= r);
            (r = v()),
              "function" == typeof a
                ? (eH.callback = a)
                : eH === eM(eB) && eV(eB),
              eG(r);
          } else eV(eB);
          eH = eM(eB);
        }
        if (null !== eH) return !0;
        var i = eM(eW);
        return null !== i && tl(eK, i.startTime - r), !1;
      })(e, t);
    } finally {
      (eH = null), (e2 = n), (eJ = !1);
    }
  }
  function e7() {
    return e2;
  }
  "undefined" != typeof navigator &&
    void 0 !== navigator.scheduling &&
    void 0 !== navigator.scheduling.isInputPending &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  var te = !1,
    tt = null,
    tn = -1,
    tr = 5,
    to = -1;
  function ta() {
    return !(v() - to < tr);
  }
  var ti = function () {
    if (null !== tt) {
      var e = v();
      to = e;
      var t = !0;
      try {
        t = tt(!0, e);
      } finally {
        t ? h() : ((te = !1), (tt = null));
      }
    } else te = !1;
  };
  if ("function" == typeof e6)
    h = function () {
      e6(ti);
    };
  else if ("undefined" != typeof MessageChannel) {
    var tu = new MessageChannel(),
      ts = tu.port2;
    (tu.port1.onmessage = ti),
      (h = function () {
        ts.postMessage(null);
      });
  } else
    h = function () {
      eX(ti, 0);
    };
  function tc(e) {
    (tt = e), te || ((te = !0), h());
  }
  function tl(e, t) {
    tn = eX(function () {
      e(v());
    }, t);
  }
  function tf() {
    e4(tn), (tn = -1);
  }
  var tp,
    td = Object.freeze({
      __proto__: null,
      unstable_ImmediatePriority: 1,
      unstable_UserBlockingPriority: 2,
      unstable_NormalPriority: 3,
      unstable_IdlePriority: 5,
      unstable_LowPriority: 4,
      unstable_runWithPriority: function e(t, n) {
        switch (t) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            t = 3;
        }
        var r = e2;
        e2 = t;
        try {
          return n();
        } finally {
          e2 = r;
        }
      },
      unstable_next: function e(t) {
        switch (e2) {
          case 1:
          case 2:
          case 3:
            n = 3;
            break;
          default:
            n = e2;
        }
        var n,
          r = e2;
        e2 = n;
        try {
          return t();
        } finally {
          e2 = r;
        }
      },
      unstable_scheduleCallback: function e(t, n, r) {
        var o,
          a,
          i = v();
        if ("object" == typeof r && null !== r) {
          var u = r.delay;
          o = "number" == typeof u && u > 0 ? i + u : i;
        } else o = i;
        switch (t) {
          case 1:
            a = -1;
            break;
          case 2:
            a = 250;
            break;
          case 5:
            a = 1073741823;
            break;
          case 4:
            a = 1e4;
            break;
          default:
            a = 5e3;
        }
        var s = o + a,
          c = {
            id: e3++,
            callback: n,
            priorityLevel: t,
            startTime: o,
            expirationTime: s,
            sortIndex: -1,
          };
        return (
          o > i
            ? ((c.sortIndex = o),
              eU(eW, c),
              null === eM(eB) &&
                c === eM(eW) &&
                (eQ ? tf() : (eQ = !0), tl(eK, o - i)))
            : ((c.sortIndex = s), eU(eB, c), e5 || eJ || ((e5 = !0), tc(eZ))),
          c
        );
      },
      unstable_cancelCallback: function e(t) {
        t.callback = null;
      },
      unstable_wrapCallback: function e(t) {
        var n = e2;
        return function () {
          var e = e2;
          e2 = n;
          try {
            return t.apply(this, arguments);
          } finally {
            e2 = e;
          }
        };
      },
      unstable_getCurrentPriorityLevel: e7,
      unstable_shouldYield: ta,
      unstable_requestPaint: function e() {},
      unstable_continueExecution: function e() {
        e5 || eJ || ((e5 = !0), tc(eZ));
      },
      unstable_pauseExecution: function e() {},
      unstable_getFirstCallbackNode: function e() {
        return eM(eB);
      },
      get unstable_now() {
        return v;
      },
      unstable_forceFrameRate: function e(t) {
        if (t < 0 || t > 125) {
          console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          );
          return;
        }
        tr = t > 0 ? Math.floor(1e3 / t) : 5;
      },
      unstable_Profiling: null,
    }),
    ty = {
      ReactCurrentDispatcher: j,
      ReactCurrentOwner: F,
      ReactCurrentBatchConfig: D,
      Scheduler: td,
    };
  (ty.ReactCurrentActQueue = N), (ty.ReactDebugCurrentFrame = O);
  var tv = !1,
    th = null,
    tm = 0,
    tg = !1;
  function tb(e) {
    var t,
      n = tm;
    tm++, null === N.current && (N.current = []);
    var r = N.isBatchingLegacy;
    try {
      if (
        ((N.isBatchingLegacy = !0), (t = e()), !r && N.didScheduleLegacyUpdate)
      ) {
        var o = N.current;
        null !== o && ((N.didScheduleLegacyUpdate = !1), t_(o));
      }
    } catch (a) {
      throw (t$(n), a);
    } finally {
      N.isBatchingLegacy = r;
    }
    if (null !== t && "object" == typeof t && "function" == typeof t.then) {
      var i = t,
        u = !1;
      return (
        tg ||
          "undefined" == typeof Promise ||
          Promise.resolve()
            .then(function () {})
            .then(function () {
              u ||
                ((tg = !0),
                V(
                  "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
                ));
            }),
        {
          then: function (e, t) {
            (u = !0),
              i.then(
                function (r) {
                  t$(n), 0 === tm ? t8(r, e, t) : e(r);
                },
                function (e) {
                  t$(n), t(e);
                }
              );
          },
        }
      );
    }
    var s = t;
    if ((t$(n), 0 !== tm))
      return {
        then: function (e, t) {
          e(s);
        },
      };
    var c = N.current;
    return (
      null !== c && (t_(c), (N.current = null)),
      {
        then: function (e, t) {
          null === N.current ? ((N.current = []), t8(s, e, t)) : e(s);
        },
      }
    );
  }
  function t$(e) {
    e !== tm - 1 &&
      V(
        "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
      ),
      (tm = e);
  }
  function t8(e, t, n) {
    var r = N.current;
    if (null !== r)
      try {
        t_(r),
          (function e(t) {
            if (null === th)
              try {
                var n = ("require" + Math.random()).slice(0, 7);
                th = (module && module[n]).call(module, "timers").setImmediate;
              } catch (r) {
                th = function (e) {
                  !1 === tv &&
                    ((tv = !0),
                    "undefined" == typeof MessageChannel &&
                      V(
                        "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                      ));
                  var t = new MessageChannel();
                  (t.port1.onmessage = e), t.port2.postMessage(void 0);
                };
              }
            return th(t);
          })(function () {
            0 === r.length ? ((N.current = null), t(e)) : t8(e, t, n);
          });
      } catch (o) {
        n(o);
      }
    else t(e);
  }
  var tw = !1;
  function t_(e) {
    if (!tw) {
      tw = !0;
      var t = 0;
      try {
        for (; t < e.length; t++) {
          var n = e[t];
          do n = n(!0);
          while (null !== n);
        }
        e.length = 0;
      } catch (r) {
        throw ((e = e.slice(t + 1)), r);
      } finally {
        tw = !1;
      }
    }
  }
  var tk = function e(t, n, r) {
      for (var o = ed.apply(this, arguments), a = 2; a < arguments.length; a++)
        e0(arguments[a], o.type);
      return eO(o), o;
    },
    tC = function e(t) {
      var n = eL.bind(null, t);
      return (
        (n.type = t),
        ez ||
          ((ez = !0),
          M(
            "React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead."
          )),
        Object.defineProperty(n, "type", {
          enumerable: !1,
          get: function () {
            return (
              M(
                "Factory.type is deprecated. Access the class directly before passing it to createFactory."
              ),
              Object.defineProperty(this, "type", { value: t }),
              t
            );
          },
        }),
        n
      );
    };
  (e.Children = {
    map: eb,
    forEach: function e(t, n, r) {
      eb(
        t,
        function () {
          n.apply(this, arguments);
        },
        r
      );
    },
    count: function e(t) {
      var n = 0;
      return (
        eb(t, function () {
          n++;
        }),
        n
      );
    },
    toArray: function e(t) {
      return (
        eb(t, function (e) {
          return e;
        }) || []
      );
    },
    only: function e(t) {
      if (!ey(t))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return t;
    },
  }),
    (e.Component = J),
    (e.Fragment = b),
    (e.Profiler = w),
    (e.PureComponent = Z),
    (e.StrictMode = $),
    (e.Suspense = R),
    (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ty),
    (e.act = tb),
    (e.cloneElement = tk),
    (e.createContext = function e(t) {
      var n = {
        $$typeof: k,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      };
      n.Provider = { $$typeof: _, _context: n };
      var r = !1,
        o = !1,
        a = !1,
        i = { $$typeof: k, _context: n };
      return (
        Object.defineProperties(i, {
          Provider: {
            get: function () {
              return (
                o ||
                  ((o = !0),
                  V(
                    "Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?"
                  )),
                n.Provider
              );
            },
            set: function (e) {
              n.Provider = e;
            },
          },
          _currentValue: {
            get: function () {
              return n._currentValue;
            },
            set: function (e) {
              n._currentValue = e;
            },
          },
          _currentValue2: {
            get: function () {
              return n._currentValue2;
            },
            set: function (e) {
              n._currentValue2 = e;
            },
          },
          _threadCount: {
            get: function () {
              return n._threadCount;
            },
            set: function (e) {
              n._threadCount = e;
            },
          },
          Consumer: {
            get: function () {
              return (
                r ||
                  ((r = !0),
                  V(
                    "Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
                  )),
                n.Consumer
              );
            },
          },
          displayName: {
            get: function () {
              return n.displayName;
            },
            set: function (e) {
              a ||
                (M(
                  "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                  e
                ),
                (a = !0));
            },
          },
        }),
        (n.Consumer = i),
        (n._currentRenderer = null),
        (n._currentRenderer2 = null),
        n
      );
    }),
    (e.createElement = eL),
    (e.createFactory = tC),
    (e.createRef = function e() {
      var t = { current: null };
      return Object.seal(t), t;
    }),
    (e.forwardRef = function e(t) {
      null != t && t.$$typeof === x
        ? V(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          )
        : "function" != typeof t
        ? V(
            "forwardRef requires a render function but was given %s.",
            null === t ? "null" : typeof t
          )
        : 0 !== t.length &&
          2 !== t.length &&
          V(
            "forwardRef render functions accept exactly two parameters: props and ref. %s",
            1 === t.length
              ? "Did you forget to use the ref parameter?"
              : "Any additional parameter will be undefined."
          ),
        null != t &&
          (null != t.defaultProps || null != t.propTypes) &&
          V(
            "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"
          );
      var n,
        r = { $$typeof: C, render: t };
      return (
        Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return n;
          },
          set: function (e) {
            (n = e), t.name || t.displayName || (t.displayName = e);
          },
        }),
        r
      );
    }),
    (e.isValidElement = ey),
    (e.lazy = function e(t) {
      var n,
        r,
        o = { $$typeof: S, _payload: { _status: -1, _result: t }, _init: e$ };
      return (
        Object.defineProperties(o, {
          defaultProps: {
            configurable: !0,
            get: function () {
              return n;
            },
            set: function (e) {
              V(
                "React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
              ),
                (n = e),
                Object.defineProperty(o, "defaultProps", { enumerable: !0 });
            },
          },
          propTypes: {
            configurable: !0,
            get: function () {
              return r;
            },
            set: function (e) {
              V(
                "React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
              ),
                (r = e),
                Object.defineProperty(o, "propTypes", { enumerable: !0 });
            },
          },
        }),
        o
      );
    }),
    (e.memo = function e(t, n) {
      e8(t) ||
        V(
          "memo: The first argument must be a component. Instead received: %s",
          null === t ? "null" : typeof t
        );
      var r,
        o = { $$typeof: x, type: t, compare: void 0 === n ? null : n };
      return (
        Object.defineProperty(o, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return r;
          },
          set: function (e) {
            (r = e), t.name || t.displayName || (t.displayName = e);
          },
        }),
        o
      );
    }),
    (e.startTransition = function e(t, n) {
      var r = D.transition;
      D.transition = {};
      var o = D.transition;
      D.transition._updatedFibers = new Set();
      try {
        t();
      } finally {
        (D.transition = r),
          null === r &&
            o._updatedFibers &&
            (o._updatedFibers.size > 10 &&
              M(
                "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
              ),
            o._updatedFibers.clear());
      }
    }),
    (e.unstable_act = tb),
    (e.useCallback = function e(t, n) {
      return ew().useCallback(t, n);
    }),
    (e.useContext = function e(t) {
      var n = ew();
      if (void 0 !== t._context) {
        var r = t._context;
        r.Consumer === t
          ? V(
              "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"
            )
          : r.Provider === t &&
            V(
              "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?"
            );
      }
      return n.useContext(t);
    }),
    (e.useDebugValue = function e(t, n) {
      return ew().useDebugValue(t, n);
    }),
    (e.useDeferredValue = function e(t) {
      return ew().useDeferredValue(t);
    }),
    (e.useEffect = function e(t, n) {
      return ew().useEffect(t, n);
    }),
    (e.useId = function e() {
      return ew().useId();
    }),
    (e.useImperativeHandle = function e(t, n, r) {
      return ew().useImperativeHandle(t, n, r);
    }),
    (e.useInsertionEffect = function e(t, n) {
      return ew().useInsertionEffect(t, n);
    }),
    (e.useLayoutEffect = function e(t, n) {
      return ew().useLayoutEffect(t, n);
    }),
    (e.useMemo = function e(t, n) {
      return ew().useMemo(t, n);
    }),
    (e.useReducer = function e(t, n, r) {
      return ew().useReducer(t, n, r);
    }),
    (e.useRef = function e(t) {
      return ew().useRef(t);
    }),
    (e.useState = function e(t) {
      return ew().useState(t);
    }),
    (e.useSyncExternalStore = function e(t, n, r) {
      return ew().useSyncExternalStore(t, n, r);
    }),
    (e.useTransition = function e() {
      return ew().useTransition();
    }),
    (e.version = "18.3.1");
});
