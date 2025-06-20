/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("Matter", [], t)
    : "object" == typeof exports
    ? (exports.Matter = t())
    : (e.Matter = t());
})(this, function () {
  return (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var i = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            n.d(
              o,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return o;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 20))
    );
  })([
    function (e, t) {
      var n = {};
      (e.exports = n),
        (function () {
          (n._baseDelta = 1e3 / 60),
            (n._nextId = 0),
            (n._seed = 0),
            (n._nowStartTime = +new Date()),
            (n._warnedOnce = {}),
            (n._decomp = null),
            (n.extend = function (e, t) {
              var o, i;
              "boolean" == typeof t ? ((o = 2), (i = t)) : ((o = 1), (i = !0));
              for (var r = o; r < arguments.length; r++) {
                var a = arguments[r];
                if (a)
                  for (var s in a)
                    i && a[s] && a[s].constructor === Object
                      ? e[s] && e[s].constructor !== Object
                        ? (e[s] = a[s])
                        : ((e[s] = e[s] || {}), n.extend(e[s], i, a[s]))
                      : (e[s] = a[s]);
              }
              return e;
            }),
            (n.clone = function (e, t) {
              return n.extend({}, t, e);
            }),
            (n.keys = function (e) {
              if (Object.keys) return Object.keys(e);
              var t = [];
              for (var n in e) t.push(n);
              return t;
            }),
            (n.values = function (e) {
              var t = [];
              if (Object.keys) {
                for (var n = Object.keys(e), o = 0; o < n.length; o++)
                  t.push(e[n[o]]);
                return t;
              }
              for (var i in e) t.push(e[i]);
              return t;
            }),
            (n.get = function (e, t, n, o) {
              t = t.split(".").slice(n, o);
              for (var i = 0; i < t.length; i += 1) e = e[t[i]];
              return e;
            }),
            (n.set = function (e, t, o, i, r) {
              var a = t.split(".").slice(i, r);
              return (n.get(e, t, 0, -1)[a[a.length - 1]] = o), o;
            }),
            (n.shuffle = function (e) {
              for (var t = e.length - 1; t > 0; t--) {
                var o = Math.floor(n.random() * (t + 1)),
                  i = e[t];
                (e[t] = e[o]), (e[o] = i);
              }
              return e;
            }),
            (n.choose = function (e) {
              return e[Math.floor(n.random() * e.length)];
            }),
            (n.isElement = function (e) {
              return "undefined" != typeof HTMLElement
                ? e instanceof HTMLElement
                : !!(e && e.nodeType && e.nodeName);
            }),
            (n.isArray = function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            }),
            (n.isFunction = function (e) {
              return "function" == typeof e;
            }),
            (n.isPlainObject = function (e) {
              return "object" == typeof e && e.constructor === Object;
            }),
            (n.isString = function (e) {
              return "[object String]" === toString.call(e);
            }),
            (n.clamp = function (e, t, n) {
              return e < t ? t : e > n ? n : e;
            }),
            (n.sign = function (e) {
              return e < 0 ? -1 : 1;
            }),
            (n.now = function () {
              if ("undefined" != typeof window && window.performance) {
                if (window.performance.now) return window.performance.now();
                if (window.performance.webkitNow)
                  return window.performance.webkitNow();
              }
              return Date.now ? Date.now() : new Date() - n._nowStartTime;
            }),
            (n.random = function (t, n) {
              return (
                (n = void 0 !== n ? n : 1),
                (t = void 0 !== t ? t : 0) + e() * (n - t)
              );
            });
          var e = function () {
            return (
              (n._seed = (9301 * n._seed + 49297) % 233280), n._seed / 233280
            );
          };
          (n.colorToNumber = function (e) {
            return (
              3 == (e = e.replace("#", "")).length &&
                (e =
                  e.charAt(0) +
                  e.charAt(0) +
                  e.charAt(1) +
                  e.charAt(1) +
                  e.charAt(2) +
                  e.charAt(2)),
              parseInt(e, 16)
            );
          }),
            (n.logLevel = 1),
            (n.log = function () {
              console &&
                n.logLevel > 0 &&
                n.logLevel <= 3 &&
                console.log.apply(
                  console,
                  ["matter-js:"].concat(Array.prototype.slice.call(arguments))
                );
            }),
            (n.info = function () {
              console &&
                n.logLevel > 0 &&
                n.logLevel <= 2 &&
                console.info.apply(
                  console,
                  ["matter-js:"].concat(Array.prototype.slice.call(arguments))
                );
            }),
            (n.warn = function () {
              console &&
                n.logLevel > 0 &&
                n.logLevel <= 3 &&
                console.warn.apply(
                  console,
                  ["matter-js:"].concat(Array.prototype.slice.call(arguments))
                );
            }),
            (n.warnOnce = function () {
              var e = Array.prototype.slice.call(arguments).join(" ");
              n._warnedOnce[e] || (n.warn(e), (n._warnedOnce[e] = !0));
            }),
            (n.deprecated = function (e, t, o) {
              e[t] = n.chain(function () {
                n.warnOnce("🔅 deprecated 🔅", o);
              }, e[t]);
            }),
            (n.nextId = function () {
              return n._nextId++;
            }),
            (n.indexOf = function (e, t) {
              if (e.indexOf) return e.indexOf(t);
              for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
              return -1;
            }),
            (n.map = function (e, t) {
              if (e.map) return e.map(t);
              for (var n = [], o = 0; o < e.length; o += 1) n.push(t(e[o]));
              return n;
            }),
            (n.topologicalSort = function (e) {
              var t = [],
                o = [],
                i = [];
              for (var r in e)
                o[r] || i[r] || n._topologicalSort(r, o, i, e, t);
              return t;
            }),
            (n._topologicalSort = function (e, t, o, i, r) {
              var a = i[e] || [];
              o[e] = !0;
              for (var s = 0; s < a.length; s += 1) {
                var l = a[s];
                o[l] || t[l] || n._topologicalSort(l, t, o, i, r);
              }
              (o[e] = !1), (t[e] = !0), r.push(e);
            }),
            (n.chain = function () {
              for (var e = [], t = 0; t < arguments.length; t += 1) {
                var n = arguments[t];
                n._chained ? e.push.apply(e, n._chained) : e.push(n);
              }
              var o = function () {
                for (
                  var t,
                    n = new Array(arguments.length),
                    o = 0,
                    i = arguments.length;
                  o < i;
                  o++
                )
                  n[o] = arguments[o];
                for (o = 0; o < e.length; o += 1) {
                  var r = e[o].apply(t, n);
                  void 0 !== r && (t = r);
                }
                return t;
              };
              return (o._chained = e), o;
            }),
            (n.chainPathBefore = function (e, t, o) {
              return n.set(e, t, n.chain(o, n.get(e, t)));
            }),
            (n.chainPathAfter = function (e, t, o) {
              return n.set(e, t, n.chain(n.get(e, t), o));
            }),
            (n.setDecomp = function (e) {
              n._decomp = e;
            }),
            (n.getDecomp = function () {
              var e = n._decomp;
              try {
                e || "undefined" == typeof window || (e = window.decomp),
                  e || "undefined" == typeof global || (e = global.decomp);
              } catch (t) {
                e = null;
              }
              return e;
            });
        })();
    },
    function (e, t) {
      var n = {};
      (e.exports = n),
        (n.create = function (e) {
          var t = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
          return e && n.update(t, e), t;
        }),
        (n.update = function (e, t, n) {
          (e.min.x = 1 / 0),
            (e.max.x = -1 / 0),
            (e.min.y = 1 / 0),
            (e.max.y = -1 / 0);
          for (var o = 0; o < t.length; o++) {
            var i = t[o];
            i.x > e.max.x && (e.max.x = i.x),
              i.x < e.min.x && (e.min.x = i.x),
              i.y > e.max.y && (e.max.y = i.y),
              i.y < e.min.y && (e.min.y = i.y);
          }
          n &&
            (n.x > 0 ? (e.max.x += n.x) : (e.min.x += n.x),
            n.y > 0 ? (e.max.y += n.y) : (e.min.y += n.y));
        }),
        (n.contains = function (e, t) {
          return (
            t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y
          );
        }),
        (n.overlaps = function (e, t) {
          return (
            e.min.x <= t.max.x &&
            e.max.x >= t.min.x &&
            e.max.y >= t.min.y &&
            e.min.y <= t.max.y
          );
        }),
        (n.translate = function (e, t) {
          (e.min.x += t.x),
            (e.max.x += t.x),
            (e.min.y += t.y),
            (e.max.y += t.y);
        }),
        (n.shift = function (e, t) {
          var n = e.max.x - e.min.x,
            o = e.max.y - e.min.y;
          (e.min.x = t.x),
            (e.max.x = t.x + n),
            (e.min.y = t.y),
            (e.max.y = t.y + o);
        });
    },
    function (e, t) {
      var n = {};
      (e.exports = n),
        (n.create = function (e, t) {
          return { x: e || 0, y: t || 0 };
        }),
        (n.clone = function (e) {
          return { x: e.x, y: e.y };
        }),
        (n.magnitude = function (e) {
          return Math.sqrt(e.x * e.x + e.y * e.y);
        }),
        (n.magnitudeSquared = function (e) {
          return e.x * e.x + e.y * e.y;
        }),
        (n.rotate = function (e, t, n) {
          var o = Math.cos(t),
            i = Math.sin(t);
          n || (n = {});
          var r = e.x * o - e.y * i;
          return (n.y = e.x * i + e.y * o), (n.x = r), n;
        }),
        (n.rotateAbout = function (e, t, n, o) {
          var i = Math.cos(t),
            r = Math.sin(t);
          o || (o = {});
          var a = n.x + ((e.x - n.x) * i - (e.y - n.y) * r);
          return (
            (o.y = n.y + ((e.x - n.x) * r + (e.y - n.y) * i)), (o.x = a), o
          );
        }),
        (n.normalise = function (e) {
          var t = n.magnitude(e);
          return 0 === t ? { x: 0, y: 0 } : { x: e.x / t, y: e.y / t };
        }),
        (n.dot = function (e, t) {
          return e.x * t.x + e.y * t.y;
        }),
        (n.cross = function (e, t) {
          return e.x * t.y - e.y * t.x;
        }),
        (n.cross3 = function (e, t, n) {
          return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x);
        }),
        (n.add = function (e, t, n) {
          return n || (n = {}), (n.x = e.x + t.x), (n.y = e.y + t.y), n;
        }),
        (n.sub = function (e, t, n) {
          return n || (n = {}), (n.x = e.x - t.x), (n.y = e.y - t.y), n;
        }),
        (n.mult = function (e, t) {
          return { x: e.x * t, y: e.y * t };
        }),
        (n.div = function (e, t) {
          return { x: e.x / t, y: e.y / t };
        }),
        (n.perp = function (e, t) {
          return { x: (t = !0 === t ? -1 : 1) * -e.y, y: t * e.x };
        }),
        (n.neg = function (e) {
          return { x: -e.x, y: -e.y };
        }),
        (n.angle = function (e, t) {
          return Math.atan2(t.y - e.y, t.x - e.x);
        }),
        (n._temp = [
          n.create(),
          n.create(),
          n.create(),
          n.create(),
          n.create(),
          n.create(),
        ]);
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(2),
        r = n(0);
      (o.create = function (e, t) {
        for (var n = [], o = 0; o < e.length; o++) {
          var i = e[o],
            r = { x: i.x, y: i.y, index: o, body: t, isInternal: !1 };
          n.push(r);
        }
        return n;
      }),
        (o.fromPath = function (e, t) {
          var n = [];
          return (
            e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi, function (e, t, o) {
              n.push({ x: parseFloat(t), y: parseFloat(o) });
            }),
            o.create(n, t)
          );
        }),
        (o.centre = function (e) {
          for (
            var t, n, r, a = o.area(e, !0), s = { x: 0, y: 0 }, l = 0;
            l < e.length;
            l++
          )
            (r = (l + 1) % e.length),
              (t = i.cross(e[l], e[r])),
              (n = i.mult(i.add(e[l], e[r]), t)),
              (s = i.add(s, n));
          return i.div(s, 6 * a);
        }),
        (o.mean = function (e) {
          for (var t = { x: 0, y: 0 }, n = 0; n < e.length; n++)
            (t.x += e[n].x), (t.y += e[n].y);
          return i.div(t, e.length);
        }),
        (o.area = function (e, t) {
          for (var n = 0, o = e.length - 1, i = 0; i < e.length; i++)
            (n += (e[o].x - e[i].x) * (e[o].y + e[i].y)), (o = i);
          return t ? n / 2 : Math.abs(n) / 2;
        }),
        (o.inertia = function (e, t) {
          for (var n, o, r = 0, a = 0, s = e, l = 0; l < s.length; l++)
            (o = (l + 1) % s.length),
              (r +=
                (n = Math.abs(i.cross(s[o], s[l]))) *
                (i.dot(s[o], s[o]) + i.dot(s[o], s[l]) + i.dot(s[l], s[l]))),
              (a += n);
          return (t / 6) * (r / a);
        }),
        (o.translate = function (e, t, n) {
          n = void 0 !== n ? n : 1;
          var o,
            i = e.length,
            r = t.x * n,
            a = t.y * n;
          for (o = 0; o < i; o++) (e[o].x += r), (e[o].y += a);
          return e;
        }),
        (o.rotate = function (e, t, n) {
          if (0 !== t) {
            var o,
              i,
              r,
              a,
              s = Math.cos(t),
              l = Math.sin(t),
              c = n.x,
              u = n.y,
              d = e.length;
            for (a = 0; a < d; a++)
              (i = (o = e[a]).x - c),
                (r = o.y - u),
                (o.x = c + (i * s - r * l)),
                (o.y = u + (i * l + r * s));
            return e;
          }
        }),
        (o.contains = function (e, t) {
          for (
            var n, o = t.x, i = t.y, r = e.length, a = e[r - 1], s = 0;
            s < r;
            s++
          ) {
            if (
              ((n = e[s]),
              (o - a.x) * (n.y - a.y) + (i - a.y) * (a.x - n.x) > 0)
            )
              return !1;
            a = n;
          }
          return !0;
        }),
        (o.scale = function (e, t, n, r) {
          if (1 === t && 1 === n) return e;
          var a, s;
          r = r || o.centre(e);
          for (var l = 0; l < e.length; l++)
            (a = e[l]),
              (s = i.sub(a, r)),
              (e[l].x = r.x + s.x * t),
              (e[l].y = r.y + s.y * n);
          return e;
        }),
        (o.chamfer = function (e, t, n, o, a) {
          (t = "number" == typeof t ? [t] : t || [8]),
            (n = void 0 !== n ? n : -1),
            (o = o || 2),
            (a = a || 14);
          for (var s = [], l = 0; l < e.length; l++) {
            var c = e[l - 1 >= 0 ? l - 1 : e.length - 1],
              u = e[l],
              d = e[(l + 1) % e.length],
              p = t[l < t.length ? l : t.length - 1];
            if (0 !== p) {
              var f = i.normalise({ x: u.y - c.y, y: c.x - u.x }),
                v = i.normalise({ x: d.y - u.y, y: u.x - d.x }),
                m = Math.sqrt(2 * Math.pow(p, 2)),
                y = i.mult(r.clone(f), p),
                g = i.normalise(i.mult(i.add(f, v), 0.5)),
                x = i.sub(u, i.mult(g, m)),
                h = n;
              -1 === n && (h = 1.75 * Math.pow(p, 0.32)),
                (h = r.clamp(h, o, a)) % 2 == 1 && (h += 1);
              for (var b = Math.acos(i.dot(f, v)) / h, S = 0; S < h; S++)
                s.push(i.add(i.rotate(y, b * S), x));
            } else s.push(u);
          }
          return s;
        }),
        (o.clockwiseSort = function (e) {
          var t = o.mean(e);
          return (
            e.sort(function (e, n) {
              return i.angle(t, e) - i.angle(t, n);
            }),
            e
          );
        }),
        (o.isConvex = function (e) {
          var t,
            n,
            o,
            i,
            r = 0,
            a = e.length;
          if (a < 3) return null;
          for (t = 0; t < a; t++)
            if (
              ((o = (t + 2) % a),
              (i = (e[(n = (t + 1) % a)].x - e[t].x) * (e[o].y - e[n].y)),
              (i -= (e[n].y - e[t].y) * (e[o].x - e[n].x)) < 0
                ? (r |= 1)
                : i > 0 && (r |= 2),
              3 === r)
            )
              return !1;
          return 0 !== r || null;
        }),
        (o.hull = function (e) {
          var t,
            n,
            o = [],
            r = [];
          for (
            (e = e.slice(0)).sort(function (e, t) {
              var n = e.x - t.x;
              return 0 !== n ? n : e.y - t.y;
            }),
              n = 0;
            n < e.length;
            n += 1
          ) {
            for (
              t = e[n];
              r.length >= 2 &&
              i.cross3(r[r.length - 2], r[r.length - 1], t) <= 0;

            )
              r.pop();
            r.push(t);
          }
          for (n = e.length - 1; n >= 0; n -= 1) {
            for (
              t = e[n];
              o.length >= 2 &&
              i.cross3(o[o.length - 2], o[o.length - 1], t) <= 0;

            )
              o.pop();
            o.push(t);
          }
          return o.pop(), r.pop(), o.concat(r);
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(3),
        r = n(2),
        a = n(7),
        s = n(0),
        l = n(1),
        c = n(11);
      !(function () {
        (o._timeCorrection = !0),
          (o._inertiaScale = 4),
          (o._nextCollidingGroupId = 1),
          (o._nextNonCollidingGroupId = -1),
          (o._nextCategory = 1),
          (o._baseDelta = 1e3 / 60),
          (o.create = function (t) {
            var n = {
                id: s.nextId(),
                type: "body",
                label: "Body",
                parts: [],
                plugin: {},
                angle: 0,
                vertices: i.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                position: { x: 0, y: 0 },
                force: { x: 0, y: 0 },
                torque: 0,
                positionImpulse: { x: 0, y: 0 },
                constraintImpulse: { x: 0, y: 0, angle: 0 },
                totalContacts: 0,
                speed: 0,
                angularSpeed: 0,
                velocity: { x: 0, y: 0 },
                angularVelocity: 0,
                isSensor: !1,
                isStatic: !1,
                isSleeping: !1,
                motion: 0,
                sleepThreshold: 60,
                density: 0.001,
                restitution: 0,
                friction: 0.1,
                frictionStatic: 0.5,
                frictionAir: 0.01,
                collisionFilter: { category: 1, mask: 4294967295, group: 0 },
                slop: 0.05,
                timeScale: 1,
                render: {
                  visible: !0,
                  opacity: 1,
                  strokeStyle: null,
                  fillStyle: null,
                  lineWidth: null,
                  sprite: { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 },
                },
                events: null,
                bounds: null,
                chamfer: null,
                circleRadius: 0,
                positionPrev: null,
                anglePrev: 0,
                parent: null,
                axes: null,
                area: 0,
                mass: 0,
                inertia: 0,
                deltaTime: 1e3 / 60,
                _original: null,
              },
              o = s.extend(n, t);
            return e(o, t), o;
          }),
          (o.nextGroup = function (e) {
            return e ? o._nextNonCollidingGroupId-- : o._nextCollidingGroupId++;
          }),
          (o.nextCategory = function () {
            return (o._nextCategory = o._nextCategory << 1), o._nextCategory;
          });
        var e = function (e, t) {
          (t = t || {}),
            o.set(e, {
              bounds: e.bounds || l.create(e.vertices),
              positionPrev: e.positionPrev || r.clone(e.position),
              anglePrev: e.anglePrev || e.angle,
              vertices: e.vertices,
              parts: e.parts || [e],
              isStatic: e.isStatic,
              isSleeping: e.isSleeping,
              parent: e.parent || e,
            }),
            i.rotate(e.vertices, e.angle, e.position),
            c.rotate(e.axes, e.angle),
            l.update(e.bounds, e.vertices, e.velocity),
            o.set(e, {
              axes: t.axes || e.axes,
              area: t.area || e.area,
              mass: t.mass || e.mass,
              inertia: t.inertia || e.inertia,
            });
          var n = e.isStatic
              ? "#14151f"
              : s.choose([
                  "#f19648",
                  "#f5d259",
                  "#f55a3c",
                  "#063e7b",
                  "#ececd1",
                ]),
            a = e.isStatic ? "#555" : "#ccc",
            u = e.isStatic && null === e.render.fillStyle ? 1 : 0;
          (e.render.fillStyle = e.render.fillStyle || n),
            (e.render.strokeStyle = e.render.strokeStyle || a),
            (e.render.lineWidth = e.render.lineWidth || u),
            (e.render.sprite.xOffset +=
              -(e.bounds.min.x - e.position.x) /
              (e.bounds.max.x - e.bounds.min.x)),
            (e.render.sprite.yOffset +=
              -(e.bounds.min.y - e.position.y) /
              (e.bounds.max.y - e.bounds.min.y));
        };
        (o.set = function (e, t, n) {
          var i;
          for (i in ("string" == typeof t && ((i = t), ((t = {})[i] = n)), t))
            if (Object.prototype.hasOwnProperty.call(t, i))
              switch (((n = t[i]), i)) {
                case "isStatic":
                  o.setStatic(e, n);
                  break;
                case "isSleeping":
                  a.set(e, n);
                  break;
                case "mass":
                  o.setMass(e, n);
                  break;
                case "density":
                  o.setDensity(e, n);
                  break;
                case "inertia":
                  o.setInertia(e, n);
                  break;
                case "vertices":
                  o.setVertices(e, n);
                  break;
                case "position":
                  o.setPosition(e, n);
                  break;
                case "angle":
                  o.setAngle(e, n);
                  break;
                case "velocity":
                  o.setVelocity(e, n);
                  break;
                case "angularVelocity":
                  o.setAngularVelocity(e, n);
                  break;
                case "speed":
                  o.setSpeed(e, n);
                  break;
                case "angularSpeed":
                  o.setAngularSpeed(e, n);
                  break;
                case "parts":
                  o.setParts(e, n);
                  break;
                case "centre":
                  o.setCentre(e, n);
                  break;
                default:
                  e[i] = n;
              }
        }),
          (o.setStatic = function (e, t) {
            for (var n = 0; n < e.parts.length; n++) {
              var o = e.parts[n];
              t
                ? (o.isStatic ||
                    (o._original = {
                      restitution: o.restitution,
                      friction: o.friction,
                      mass: o.mass,
                      inertia: o.inertia,
                      density: o.density,
                      inverseMass: o.inverseMass,
                      inverseInertia: o.inverseInertia,
                    }),
                  (o.restitution = 0),
                  (o.friction = 1),
                  (o.mass = o.inertia = o.density = 1 / 0),
                  (o.inverseMass = o.inverseInertia = 0),
                  (o.positionPrev.x = o.position.x),
                  (o.positionPrev.y = o.position.y),
                  (o.anglePrev = o.angle),
                  (o.angularVelocity = 0),
                  (o.speed = 0),
                  (o.angularSpeed = 0),
                  (o.motion = 0))
                : o._original &&
                  ((o.restitution = o._original.restitution),
                  (o.friction = o._original.friction),
                  (o.mass = o._original.mass),
                  (o.inertia = o._original.inertia),
                  (o.density = o._original.density),
                  (o.inverseMass = o._original.inverseMass),
                  (o.inverseInertia = o._original.inverseInertia),
                  (o._original = null)),
                (o.isStatic = t);
            }
          }),
          (o.setMass = function (e, t) {
            var n = e.inertia / (e.mass / 6);
            (e.inertia = n * (t / 6)),
              (e.inverseInertia = 1 / e.inertia),
              (e.mass = t),
              (e.inverseMass = 1 / e.mass),
              (e.density = e.mass / e.area);
          }),
          (o.setDensity = function (e, t) {
            o.setMass(e, t * e.area), (e.density = t);
          }),
          (o.setInertia = function (e, t) {
            (e.inertia = t), (e.inverseInertia = 1 / e.inertia);
          }),
          (o.setVertices = function (e, t) {
            t[0].body === e ? (e.vertices = t) : (e.vertices = i.create(t, e)),
              (e.axes = c.fromVertices(e.vertices)),
              (e.area = i.area(e.vertices)),
              o.setMass(e, e.density * e.area);
            var n = i.centre(e.vertices);
            i.translate(e.vertices, n, -1),
              o.setInertia(e, o._inertiaScale * i.inertia(e.vertices, e.mass)),
              i.translate(e.vertices, e.position),
              l.update(e.bounds, e.vertices, e.velocity);
          }),
          (o.setParts = function (e, t, n) {
            var r;
            for (
              t = t.slice(0),
                e.parts.length = 0,
                e.parts.push(e),
                e.parent = e,
                r = 0;
              r < t.length;
              r++
            ) {
              var a = t[r];
              a !== e && ((a.parent = e), e.parts.push(a));
            }
            if (1 !== e.parts.length) {
              if ((n = void 0 === n || n)) {
                var s = [];
                for (r = 0; r < t.length; r++) s = s.concat(t[r].vertices);
                i.clockwiseSort(s);
                var l = i.hull(s),
                  c = i.centre(l);
                o.setVertices(e, l), i.translate(e.vertices, c);
              }
              var u = o._totalProperties(e);
              (e.area = u.area),
                (e.parent = e),
                (e.position.x = u.centre.x),
                (e.position.y = u.centre.y),
                (e.positionPrev.x = u.centre.x),
                (e.positionPrev.y = u.centre.y),
                o.setMass(e, u.mass),
                o.setInertia(e, u.inertia),
                o.setPosition(e, u.centre);
            }
          }),
          (o.setCentre = function (e, t, n) {
            n
              ? ((e.positionPrev.x += t.x),
                (e.positionPrev.y += t.y),
                (e.position.x += t.x),
                (e.position.y += t.y))
              : ((e.positionPrev.x = t.x - (e.position.x - e.positionPrev.x)),
                (e.positionPrev.y = t.y - (e.position.y - e.positionPrev.y)),
                (e.position.x = t.x),
                (e.position.y = t.y));
          }),
          (o.setPosition = function (e, t, n) {
            var o = r.sub(t, e.position);
            n
              ? ((e.positionPrev.x = e.position.x),
                (e.positionPrev.y = e.position.y),
                (e.velocity.x = o.x),
                (e.velocity.y = o.y),
                (e.speed = r.magnitude(o)))
              : ((e.positionPrev.x += o.x), (e.positionPrev.y += o.y));
            for (var a = 0; a < e.parts.length; a++) {
              var s = e.parts[a];
              (s.position.x += o.x),
                (s.position.y += o.y),
                i.translate(s.vertices, o),
                l.update(s.bounds, s.vertices, e.velocity);
            }
          }),
          (o.setAngle = function (e, t, n) {
            var o = t - e.angle;
            n
              ? ((e.anglePrev = e.angle),
                (e.angularVelocity = o),
                (e.angularSpeed = Math.abs(o)))
              : (e.anglePrev += o);
            for (var a = 0; a < e.parts.length; a++) {
              var s = e.parts[a];
              (s.angle += o),
                i.rotate(s.vertices, o, e.position),
                c.rotate(s.axes, o),
                l.update(s.bounds, s.vertices, e.velocity),
                a > 0 && r.rotateAbout(s.position, o, e.position, s.position);
            }
          }),
          (o.setVelocity = function (e, t) {
            var n = e.deltaTime / o._baseDelta;
            (e.positionPrev.x = e.position.x - t.x * n),
              (e.positionPrev.y = e.position.y - t.y * n),
              (e.velocity.x = (e.position.x - e.positionPrev.x) / n),
              (e.velocity.y = (e.position.y - e.positionPrev.y) / n),
              (e.speed = r.magnitude(e.velocity));
          }),
          (o.getVelocity = function (e) {
            var t = o._baseDelta / e.deltaTime;
            return {
              x: (e.position.x - e.positionPrev.x) * t,
              y: (e.position.y - e.positionPrev.y) * t,
            };
          }),
          (o.getSpeed = function (e) {
            return r.magnitude(o.getVelocity(e));
          }),
          (o.setSpeed = function (e, t) {
            o.setVelocity(e, r.mult(r.normalise(o.getVelocity(e)), t));
          }),
          (o.setAngularVelocity = function (e, t) {
            var n = e.deltaTime / o._baseDelta;
            (e.anglePrev = e.angle - t * n),
              (e.angularVelocity = (e.angle - e.anglePrev) / n),
              (e.angularSpeed = Math.abs(e.angularVelocity));
          }),
          (o.getAngularVelocity = function (e) {
            return ((e.angle - e.anglePrev) * o._baseDelta) / e.deltaTime;
          }),
          (o.getAngularSpeed = function (e) {
            return Math.abs(o.getAngularVelocity(e));
          }),
          (o.setAngularSpeed = function (e, t) {
            o.setAngularVelocity(e, s.sign(o.getAngularVelocity(e)) * t);
          }),
          (o.translate = function (e, t, n) {
            o.setPosition(e, r.add(e.position, t), n);
          }),
          (o.rotate = function (e, t, n, i) {
            if (n) {
              var r = Math.cos(t),
                a = Math.sin(t),
                s = e.position.x - n.x,
                l = e.position.y - n.y;
              o.setPosition(
                e,
                { x: n.x + (s * r - l * a), y: n.y + (s * a + l * r) },
                i
              ),
                o.setAngle(e, e.angle + t, i);
            } else o.setAngle(e, e.angle + t, i);
          }),
          (o.scale = function (e, t, n, r) {
            var a = 0,
              s = 0;
            r = r || e.position;
            for (var u = 0; u < e.parts.length; u++) {
              var d = e.parts[u];
              i.scale(d.vertices, t, n, r),
                (d.axes = c.fromVertices(d.vertices)),
                (d.area = i.area(d.vertices)),
                o.setMass(d, e.density * d.area),
                i.translate(d.vertices, { x: -d.position.x, y: -d.position.y }),
                o.setInertia(
                  d,
                  o._inertiaScale * i.inertia(d.vertices, d.mass)
                ),
                i.translate(d.vertices, { x: d.position.x, y: d.position.y }),
                u > 0 && ((a += d.area), (s += d.inertia)),
                (d.position.x = r.x + (d.position.x - r.x) * t),
                (d.position.y = r.y + (d.position.y - r.y) * n),
                l.update(d.bounds, d.vertices, e.velocity);
            }
            e.parts.length > 1 &&
              ((e.area = a),
              e.isStatic || (o.setMass(e, e.density * a), o.setInertia(e, s))),
              e.circleRadius &&
                (t === n ? (e.circleRadius *= t) : (e.circleRadius = null));
          }),
          (o.update = function (e, t) {
            var n = (t = (void 0 !== t ? t : 1e3 / 60) * e.timeScale) * t,
              a = o._timeCorrection ? t / (e.deltaTime || t) : 1,
              u = 1 - e.frictionAir * (t / s._baseDelta),
              d = (e.position.x - e.positionPrev.x) * a,
              p = (e.position.y - e.positionPrev.y) * a;
            (e.velocity.x = d * u + (e.force.x / e.mass) * n),
              (e.velocity.y = p * u + (e.force.y / e.mass) * n),
              (e.positionPrev.x = e.position.x),
              (e.positionPrev.y = e.position.y),
              (e.position.x += e.velocity.x),
              (e.position.y += e.velocity.y),
              (e.deltaTime = t),
              (e.angularVelocity =
                (e.angle - e.anglePrev) * u * a + (e.torque / e.inertia) * n),
              (e.anglePrev = e.angle),
              (e.angle += e.angularVelocity);
            for (var f = 0; f < e.parts.length; f++) {
              var v = e.parts[f];
              i.translate(v.vertices, e.velocity),
                f > 0 &&
                  ((v.position.x += e.velocity.x),
                  (v.position.y += e.velocity.y)),
                0 !== e.angularVelocity &&
                  (i.rotate(v.vertices, e.angularVelocity, e.position),
                  c.rotate(v.axes, e.angularVelocity),
                  f > 0 &&
                    r.rotateAbout(
                      v.position,
                      e.angularVelocity,
                      e.position,
                      v.position
                    )),
                l.update(v.bounds, v.vertices, e.velocity);
            }
          }),
          (o.updateVelocities = function (e) {
            var t = o._baseDelta / e.deltaTime,
              n = e.velocity;
            (n.x = (e.position.x - e.positionPrev.x) * t),
              (n.y = (e.position.y - e.positionPrev.y) * t),
              (e.speed = Math.sqrt(n.x * n.x + n.y * n.y)),
              (e.angularVelocity = (e.angle - e.anglePrev) * t),
              (e.angularSpeed = Math.abs(e.angularVelocity));
          }),
          (o.applyForce = function (e, t, n) {
            var o = t.x - e.position.x,
              i = t.y - e.position.y;
            (e.force.x += n.x),
              (e.force.y += n.y),
              (e.torque += o * n.y - i * n.x);
          }),
          (o._totalProperties = function (e) {
            for (
              var t = { mass: 0, area: 0, inertia: 0, centre: { x: 0, y: 0 } },
                n = 1 === e.parts.length ? 0 : 1;
              n < e.parts.length;
              n++
            ) {
              var o = e.parts[n],
                i = o.mass !== 1 / 0 ? o.mass : 1;
              (t.mass += i),
                (t.area += o.area),
                (t.inertia += o.inertia),
                (t.centre = r.add(t.centre, r.mult(o.position, i)));
            }
            return (t.centre = r.div(t.centre, t.mass)), t;
          });
      })();
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(0);
      (o.on = function (e, t, n) {
        for (var o, i = t.split(" "), r = 0; r < i.length; r++)
          (o = i[r]),
            (e.events = e.events || {}),
            (e.events[o] = e.events[o] || []),
            e.events[o].push(n);
        return n;
      }),
        (o.off = function (e, t, n) {
          if (t) {
            "function" == typeof t &&
              ((n = t), (t = i.keys(e.events).join(" ")));
            for (var o = t.split(" "), r = 0; r < o.length; r++) {
              var a = e.events[o[r]],
                s = [];
              if (n && a)
                for (var l = 0; l < a.length; l++) a[l] !== n && s.push(a[l]);
              e.events[o[r]] = s;
            }
          } else e.events = {};
        }),
        (o.trigger = function (e, t, n) {
          var o,
            r,
            a,
            s,
            l = e.events;
          if (l && i.keys(l).length > 0) {
            n || (n = {}), (o = t.split(" "));
            for (var c = 0; c < o.length; c++)
              if ((a = l[(r = o[c])])) {
                ((s = i.clone(n, !1)).name = r), (s.source = e);
                for (var u = 0; u < a.length; u++) a[u].apply(e, [s]);
              }
          }
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(5),
        r = n(0),
        a = n(1),
        s = n(4);
      (o.create = function (e) {
        return r.extend(
          {
            id: r.nextId(),
            type: "composite",
            parent: null,
            isModified: !1,
            bodies: [],
            constraints: [],
            composites: [],
            label: "Composite",
            plugin: {},
            cache: {
              allBodies: null,
              allConstraints: null,
              allComposites: null,
            },
          },
          e
        );
      }),
        (o.setModified = function (e, t, n, i) {
          if (
            ((e.isModified = t),
            t &&
              e.cache &&
              ((e.cache.allBodies = null),
              (e.cache.allConstraints = null),
              (e.cache.allComposites = null)),
            n && e.parent && o.setModified(e.parent, t, n, i),
            i)
          )
            for (var r = 0; r < e.composites.length; r++) {
              var a = e.composites[r];
              o.setModified(a, t, n, i);
            }
        }),
        (o.add = function (e, t) {
          var n = [].concat(t);
          i.trigger(e, "beforeAdd", { object: t });
          for (var a = 0; a < n.length; a++) {
            var s = n[a];
            switch (s.type) {
              case "body":
                if (s.parent !== s) {
                  r.warn(
                    "Composite.add: skipped adding a compound body part (you must add its parent instead)"
                  );
                  break;
                }
                o.addBody(e, s);
                break;
              case "constraint":
                o.addConstraint(e, s);
                break;
              case "composite":
                o.addComposite(e, s);
                break;
              case "mouseConstraint":
                o.addConstraint(e, s.constraint);
            }
          }
          return i.trigger(e, "afterAdd", { object: t }), e;
        }),
        (o.remove = function (e, t, n) {
          var r = [].concat(t);
          i.trigger(e, "beforeRemove", { object: t });
          for (var a = 0; a < r.length; a++) {
            var s = r[a];
            switch (s.type) {
              case "body":
                o.removeBody(e, s, n);
                break;
              case "constraint":
                o.removeConstraint(e, s, n);
                break;
              case "composite":
                o.removeComposite(e, s, n);
                break;
              case "mouseConstraint":
                o.removeConstraint(e, s.constraint);
            }
          }
          return i.trigger(e, "afterRemove", { object: t }), e;
        }),
        (o.addComposite = function (e, t) {
          return (
            e.composites.push(t),
            (t.parent = e),
            o.setModified(e, !0, !0, !1),
            e
          );
        }),
        (o.removeComposite = function (e, t, n) {
          var i = r.indexOf(e.composites, t);
          if (-1 !== i) {
            var a = o.allBodies(t);
            o.removeCompositeAt(e, i);
            for (var s = 0; s < a.length; s++) a[s].sleepCounter = 0;
          }
          if (n)
            for (s = 0; s < e.composites.length; s++)
              o.removeComposite(e.composites[s], t, !0);
          return e;
        }),
        (o.removeCompositeAt = function (e, t) {
          return e.composites.splice(t, 1), o.setModified(e, !0, !0, !1), e;
        }),
        (o.addBody = function (e, t) {
          return e.bodies.push(t), o.setModified(e, !0, !0, !1), e;
        }),
        (o.removeBody = function (e, t, n) {
          var i = r.indexOf(e.bodies, t);
          if ((-1 !== i && (o.removeBodyAt(e, i), (t.sleepCounter = 0)), n))
            for (var a = 0; a < e.composites.length; a++)
              o.removeBody(e.composites[a], t, !0);
          return e;
        }),
        (o.removeBodyAt = function (e, t) {
          return e.bodies.splice(t, 1), o.setModified(e, !0, !0, !1), e;
        }),
        (o.addConstraint = function (e, t) {
          return e.constraints.push(t), o.setModified(e, !0, !0, !1), e;
        }),
        (o.removeConstraint = function (e, t, n) {
          var i = r.indexOf(e.constraints, t);
          if ((-1 !== i && o.removeConstraintAt(e, i), n))
            for (var a = 0; a < e.composites.length; a++)
              o.removeConstraint(e.composites[a], t, !0);
          return e;
        }),
        (o.removeConstraintAt = function (e, t) {
          return e.constraints.splice(t, 1), o.setModified(e, !0, !0, !1), e;
        }),
        (o.clear = function (e, t, n) {
          if (n)
            for (var i = 0; i < e.composites.length; i++)
              o.clear(e.composites[i], t, !0);
          return (
            t
              ? (e.bodies = e.bodies.filter(function (e) {
                  return e.isStatic;
                }))
              : (e.bodies.length = 0),
            (e.constraints.length = 0),
            (e.composites.length = 0),
            o.setModified(e, !0, !0, !1),
            e
          );
        }),
        (o.allBodies = function (e) {
          if (e.cache && e.cache.allBodies) return e.cache.allBodies;
          for (var t = [].concat(e.bodies), n = 0; n < e.composites.length; n++)
            t = t.concat(o.allBodies(e.composites[n]));
          return e.cache && (e.cache.allBodies = t), t;
        }),
        (o.allConstraints = function (e) {
          if (e.cache && e.cache.allConstraints) return e.cache.allConstraints;
          for (
            var t = [].concat(e.constraints), n = 0;
            n < e.composites.length;
            n++
          )
            t = t.concat(o.allConstraints(e.composites[n]));
          return e.cache && (e.cache.allConstraints = t), t;
        }),
        (o.allComposites = function (e) {
          if (e.cache && e.cache.allComposites) return e.cache.allComposites;
          for (
            var t = [].concat(e.composites), n = 0;
            n < e.composites.length;
            n++
          )
            t = t.concat(o.allComposites(e.composites[n]));
          return e.cache && (e.cache.allComposites = t), t;
        }),
        (o.get = function (e, t, n) {
          var i, r;
          switch (n) {
            case "body":
              i = o.allBodies(e);
              break;
            case "constraint":
              i = o.allConstraints(e);
              break;
            case "composite":
              i = o.allComposites(e).concat(e);
          }
          return i
            ? 0 ===
              (r = i.filter(function (e) {
                return e.id.toString() === t.toString();
              })).length
              ? null
              : r[0]
            : null;
        }),
        (o.move = function (e, t, n) {
          return o.remove(e, t), o.add(n, t), e;
        }),
        (o.rebase = function (e) {
          for (
            var t = o
                .allBodies(e)
                .concat(o.allConstraints(e))
                .concat(o.allComposites(e)),
              n = 0;
            n < t.length;
            n++
          )
            t[n].id = r.nextId();
          return e;
        }),
        (o.translate = function (e, t, n) {
          for (var i = n ? o.allBodies(e) : e.bodies, r = 0; r < i.length; r++)
            s.translate(i[r], t);
          return e;
        }),
        (o.rotate = function (e, t, n, i) {
          for (
            var r = Math.cos(t),
              a = Math.sin(t),
              l = i ? o.allBodies(e) : e.bodies,
              c = 0;
            c < l.length;
            c++
          ) {
            var u = l[c],
              d = u.position.x - n.x,
              p = u.position.y - n.y;
            s.setPosition(u, {
              x: n.x + (d * r - p * a),
              y: n.y + (d * a + p * r),
            }),
              s.rotate(u, t);
          }
          return e;
        }),
        (o.scale = function (e, t, n, i, r) {
          for (
            var a = r ? o.allBodies(e) : e.bodies, l = 0;
            l < a.length;
            l++
          ) {
            var c = a[l],
              u = c.position.x - i.x,
              d = c.position.y - i.y;
            s.setPosition(c, { x: i.x + u * t, y: i.y + d * n }),
              s.scale(c, t, n);
          }
          return e;
        }),
        (o.bounds = function (e) {
          for (var t = o.allBodies(e), n = [], i = 0; i < t.length; i += 1) {
            var r = t[i];
            n.push(r.bounds.min, r.bounds.max);
          }
          return a.create(n);
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(4),
        r = n(5),
        a = n(0);
      (o._motionWakeThreshold = 0.18),
        (o._motionSleepThreshold = 0.08),
        (o._minBias = 0.9),
        (o.update = function (e, t) {
          for (
            var n = t / a._baseDelta, r = o._motionSleepThreshold, s = 0;
            s < e.length;
            s++
          ) {
            var l = e[s],
              c = i.getSpeed(l),
              u = i.getAngularSpeed(l),
              d = c * c + u * u;
            if (0 === l.force.x && 0 === l.force.y) {
              var p = Math.min(l.motion, d),
                f = Math.max(l.motion, d);
              (l.motion = o._minBias * p + (1 - o._minBias) * f),
                l.sleepThreshold > 0 && l.motion < r
                  ? ((l.sleepCounter += 1),
                    l.sleepCounter >= l.sleepThreshold / n && o.set(l, !0))
                  : l.sleepCounter > 0 && (l.sleepCounter -= 1);
            } else o.set(l, !1);
          }
        }),
        (o.afterCollisions = function (e) {
          for (var t = o._motionSleepThreshold, n = 0; n < e.length; n++) {
            var i = e[n];
            if (i.isActive) {
              var r = i.collision,
                a = r.bodyA.parent,
                s = r.bodyB.parent;
              if (
                !((a.isSleeping && s.isSleeping) || a.isStatic || s.isStatic) &&
                (a.isSleeping || s.isSleeping)
              ) {
                var l = a.isSleeping && !a.isStatic ? a : s,
                  c = l === a ? s : a;
                !l.isStatic && c.motion > t && o.set(l, !1);
              }
            }
          }
        }),
        (o.set = function (e, t) {
          var n = e.isSleeping;
          t
            ? ((e.isSleeping = !0),
              (e.sleepCounter = e.sleepThreshold),
              (e.positionImpulse.x = 0),
              (e.positionImpulse.y = 0),
              (e.positionPrev.x = e.position.x),
              (e.positionPrev.y = e.position.y),
              (e.anglePrev = e.angle),
              (e.speed = 0),
              (e.angularSpeed = 0),
              (e.motion = 0),
              n || r.trigger(e, "sleepStart"))
            : ((e.isSleeping = !1),
              (e.sleepCounter = 0),
              n && r.trigger(e, "sleepEnd"));
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i,
        r,
        a,
        s = n(3),
        l = n(9);
      (i = []),
        (r = { overlap: 0, axis: null }),
        (a = { overlap: 0, axis: null }),
        (o.create = function (e, t) {
          return {
            pair: null,
            collided: !1,
            bodyA: e,
            bodyB: t,
            parentA: e.parent,
            parentB: t.parent,
            depth: 0,
            normal: { x: 0, y: 0 },
            tangent: { x: 0, y: 0 },
            penetration: { x: 0, y: 0 },
            supports: [null, null],
            supportCount: 0,
          };
        }),
        (o.collides = function (e, t, n) {
          if (
            (o._overlapAxes(r, e.vertices, t.vertices, e.axes), r.overlap <= 0)
          )
            return null;
          if (
            (o._overlapAxes(a, t.vertices, e.vertices, t.axes), a.overlap <= 0)
          )
            return null;
          var i,
            c,
            u = n && n.table[l.id(e, t)];
          u
            ? (i = u.collision)
            : (((i = o.create(e, t)).collided = !0),
              (i.bodyA = e.id < t.id ? e : t),
              (i.bodyB = e.id < t.id ? t : e),
              (i.parentA = i.bodyA.parent),
              (i.parentB = i.bodyB.parent)),
            (e = i.bodyA),
            (t = i.bodyB),
            (c = r.overlap < a.overlap ? r : a);
          var d = i.normal,
            p = i.tangent,
            f = i.penetration,
            v = i.supports,
            m = c.overlap,
            y = c.axis,
            g = y.x,
            x = y.y;
          g * (t.position.x - e.position.x) +
            x * (t.position.y - e.position.y) >=
            0 && ((g = -g), (x = -x)),
            (d.x = g),
            (d.y = x),
            (p.x = -x),
            (p.y = g),
            (f.x = g * m),
            (f.y = x * m),
            (i.depth = m);
          var h = o._findSupports(e, t, d, 1),
            b = 0;
          if (
            (s.contains(e.vertices, h[0]) && (v[b++] = h[0]),
            s.contains(e.vertices, h[1]) && (v[b++] = h[1]),
            b < 2)
          ) {
            var S = o._findSupports(t, e, d, -1);
            s.contains(t.vertices, S[0]) && (v[b++] = S[0]),
              b < 2 && s.contains(t.vertices, S[1]) && (v[b++] = S[1]);
          }
          return 0 === b && (v[b++] = h[0]), (i.supportCount = b), i;
        }),
        (o._overlapAxes = function (e, t, n, o) {
          var i,
            r,
            a,
            s,
            l,
            c,
            u = t.length,
            d = n.length,
            p = t[0].x,
            f = t[0].y,
            v = n[0].x,
            m = n[0].y,
            y = o.length,
            g = Number.MAX_VALUE,
            x = 0;
          for (l = 0; l < y; l++) {
            var h = o[l],
              b = h.x,
              S = h.y,
              w = p * b + f * S,
              A = v * b + m * S,
              P = w,
              B = A;
            for (c = 1; c < u; c += 1)
              (s = t[c].x * b + t[c].y * S) > P ? (P = s) : s < w && (w = s);
            for (c = 1; c < d; c += 1)
              (s = n[c].x * b + n[c].y * S) > B ? (B = s) : s < A && (A = s);
            if (
              (i = (r = P - A) < (a = B - w) ? r : a) < g &&
              ((g = i), (x = l), i <= 0)
            )
              break;
          }
          (e.axis = o[x]), (e.overlap = g);
        }),
        (o._findSupports = function (e, t, n, o) {
          var r,
            a,
            s,
            l = t.vertices,
            c = l.length,
            u = e.position.x,
            d = e.position.y,
            p = n.x * o,
            f = n.y * o,
            v = l[0],
            m = v,
            y = p * (u - m.x) + f * (d - m.y);
          for (s = 1; s < c; s += 1)
            (a = p * (u - (m = l[s]).x) + f * (d - m.y)) < y &&
              ((y = a), (v = m));
          return (
            (y = p * (u - (r = l[(c + v.index - 1) % c]).x) + f * (d - r.y)),
            p * (u - (m = l[(v.index + 1) % c]).x) + f * (d - m.y) < y
              ? ((i[0] = v), (i[1] = m), i)
              : ((i[0] = v), (i[1] = r), i)
          );
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(16);
      (o.create = function (e, t) {
        var n = e.bodyA,
          r = e.bodyB,
          a = {
            id: o.id(n, r),
            bodyA: n,
            bodyB: r,
            collision: e,
            contacts: [i.create(), i.create()],
            contactCount: 0,
            separation: 0,
            isActive: !0,
            isSensor: n.isSensor || r.isSensor,
            timeCreated: t,
            timeUpdated: t,
            inverseMass: 0,
            friction: 0,
            frictionStatic: 0,
            restitution: 0,
            slop: 0,
          };
        return o.update(a, e, t), a;
      }),
        (o.update = function (e, t, n) {
          var o = t.supports,
            i = t.supportCount,
            r = e.contacts,
            a = t.parentA,
            s = t.parentB;
          (e.isActive = !0),
            (e.timeUpdated = n),
            (e.collision = t),
            (e.separation = t.depth),
            (e.inverseMass = a.inverseMass + s.inverseMass),
            (e.friction = a.friction < s.friction ? a.friction : s.friction),
            (e.frictionStatic =
              a.frictionStatic > s.frictionStatic
                ? a.frictionStatic
                : s.frictionStatic),
            (e.restitution =
              a.restitution > s.restitution ? a.restitution : s.restitution),
            (e.slop = a.slop > s.slop ? a.slop : s.slop),
            (e.contactCount = i),
            (t.pair = e);
          var l = o[0],
            c = r[0],
            u = o[1],
            d = r[1];
          (d.vertex !== l && c.vertex !== u) ||
            ((r[1] = c), (r[0] = c = d), (d = r[1])),
            (c.vertex = l),
            (d.vertex = u);
        }),
        (o.setActive = function (e, t, n) {
          t
            ? ((e.isActive = !0), (e.timeUpdated = n))
            : ((e.isActive = !1), (e.contactCount = 0));
        }),
        (o.id = function (e, t) {
          return e.id < t.id
            ? e.id.toString(36) + ":" + t.id.toString(36)
            : t.id.toString(36) + ":" + e.id.toString(36);
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(3),
        r = n(2),
        a = n(7),
        s = n(1),
        l = n(11),
        c = n(0);
      (o._warming = 0.4),
        (o._torqueDampen = 1),
        (o._minLength = 1e-6),
        (o.create = function (e) {
          var t = e;
          t.bodyA && !t.pointA && (t.pointA = { x: 0, y: 0 }),
            t.bodyB && !t.pointB && (t.pointB = { x: 0, y: 0 });
          var n = t.bodyA ? r.add(t.bodyA.position, t.pointA) : t.pointA,
            o = t.bodyB ? r.add(t.bodyB.position, t.pointB) : t.pointB,
            i = r.magnitude(r.sub(n, o));
          (t.length = void 0 !== t.length ? t.length : i),
            (t.id = t.id || c.nextId()),
            (t.label = t.label || "Constraint"),
            (t.type = "constraint"),
            (t.stiffness = t.stiffness || (t.length > 0 ? 1 : 0.7)),
            (t.damping = t.damping || 0),
            (t.angularStiffness = t.angularStiffness || 0),
            (t.angleA = t.bodyA ? t.bodyA.angle : t.angleA),
            (t.angleB = t.bodyB ? t.bodyB.angle : t.angleB),
            (t.plugin = {});
          var a = {
            visible: !0,
            lineWidth: 2,
            strokeStyle: "#ffffff",
            type: "line",
            anchors: !0,
          };
          return (
            0 === t.length && t.stiffness > 0.1
              ? ((a.type = "pin"), (a.anchors = !1))
              : t.stiffness < 0.9 && (a.type = "spring"),
            (t.render = c.extend(a, t.render)),
            t
          );
        }),
        (o.preSolveAll = function (e) {
          for (var t = 0; t < e.length; t += 1) {
            var n = e[t],
              o = n.constraintImpulse;
            n.isStatic ||
              (0 === o.x && 0 === o.y && 0 === o.angle) ||
              ((n.position.x += o.x),
              (n.position.y += o.y),
              (n.angle += o.angle));
          }
        }),
        (o.solveAll = function (e, t) {
          for (
            var n = c.clamp(t / c._baseDelta, 0, 1), i = 0;
            i < e.length;
            i += 1
          ) {
            var r = e[i],
              a = !r.bodyA || (r.bodyA && r.bodyA.isStatic),
              s = !r.bodyB || (r.bodyB && r.bodyB.isStatic);
            (a || s) && o.solve(e[i], n);
          }
          for (i = 0; i < e.length; i += 1)
            (a = !(r = e[i]).bodyA || (r.bodyA && r.bodyA.isStatic)),
              (s = !r.bodyB || (r.bodyB && r.bodyB.isStatic)),
              a || s || o.solve(e[i], n);
        }),
        (o.solve = function (e, t) {
          var n = e.bodyA,
            i = e.bodyB,
            a = e.pointA,
            s = e.pointB;
          if (n || i) {
            n &&
              !n.isStatic &&
              (r.rotate(a, n.angle - e.angleA, a), (e.angleA = n.angle)),
              i &&
                !i.isStatic &&
                (r.rotate(s, i.angle - e.angleB, s), (e.angleB = i.angle));
            var l = a,
              c = s;
            if (
              (n && (l = r.add(n.position, a)),
              i && (c = r.add(i.position, s)),
              l && c)
            ) {
              var u = r.sub(l, c),
                d = r.magnitude(u);
              d < o._minLength && (d = o._minLength);
              var p,
                f,
                v,
                m,
                y,
                g = (d - e.length) / d,
                x =
                  e.stiffness >= 1 || 0 === e.length
                    ? e.stiffness * t
                    : e.stiffness * t * t,
                h = e.damping * t,
                b = r.mult(u, g * x),
                S = (n ? n.inverseMass : 0) + (i ? i.inverseMass : 0),
                w =
                  S + ((n ? n.inverseInertia : 0) + (i ? i.inverseInertia : 0));
              if (h > 0) {
                var A = r.create();
                (v = r.div(u, d)),
                  (y = r.sub(
                    (i && r.sub(i.position, i.positionPrev)) || A,
                    (n && r.sub(n.position, n.positionPrev)) || A
                  )),
                  (m = r.dot(v, y));
              }
              n &&
                !n.isStatic &&
                ((f = n.inverseMass / S),
                (n.constraintImpulse.x -= b.x * f),
                (n.constraintImpulse.y -= b.y * f),
                (n.position.x -= b.x * f),
                (n.position.y -= b.y * f),
                h > 0 &&
                  ((n.positionPrev.x -= h * v.x * m * f),
                  (n.positionPrev.y -= h * v.y * m * f)),
                (p =
                  (r.cross(a, b) / w) *
                  o._torqueDampen *
                  n.inverseInertia *
                  (1 - e.angularStiffness)),
                (n.constraintImpulse.angle -= p),
                (n.angle -= p)),
                i &&
                  !i.isStatic &&
                  ((f = i.inverseMass / S),
                  (i.constraintImpulse.x += b.x * f),
                  (i.constraintImpulse.y += b.y * f),
                  (i.position.x += b.x * f),
                  (i.position.y += b.y * f),
                  h > 0 &&
                    ((i.positionPrev.x += h * v.x * m * f),
                    (i.positionPrev.y += h * v.y * m * f)),
                  (p =
                    (r.cross(s, b) / w) *
                    o._torqueDampen *
                    i.inverseInertia *
                    (1 - e.angularStiffness)),
                  (i.constraintImpulse.angle += p),
                  (i.angle += p));
            }
          }
        }),
        (o.postSolveAll = function (e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t],
              c = n.constraintImpulse;
            if (!(n.isStatic || (0 === c.x && 0 === c.y && 0 === c.angle))) {
              a.set(n, !1);
              for (var u = 0; u < n.parts.length; u++) {
                var d = n.parts[u];
                i.translate(d.vertices, c),
                  u > 0 && ((d.position.x += c.x), (d.position.y += c.y)),
                  0 !== c.angle &&
                    (i.rotate(d.vertices, c.angle, n.position),
                    l.rotate(d.axes, c.angle),
                    u > 0 &&
                      r.rotateAbout(
                        d.position,
                        c.angle,
                        n.position,
                        d.position
                      )),
                  s.update(d.bounds, d.vertices, n.velocity);
              }
              (c.angle *= o._warming), (c.x *= o._warming), (c.y *= o._warming);
            }
          }
        }),
        (o.pointAWorld = function (e) {
          return {
            x: (e.bodyA ? e.bodyA.position.x : 0) + (e.pointA ? e.pointA.x : 0),
            y: (e.bodyA ? e.bodyA.position.y : 0) + (e.pointA ? e.pointA.y : 0),
          };
        }),
        (o.pointBWorld = function (e) {
          return {
            x: (e.bodyB ? e.bodyB.position.x : 0) + (e.pointB ? e.pointB.x : 0),
            y: (e.bodyB ? e.bodyB.position.y : 0) + (e.pointB ? e.pointB.y : 0),
          };
        }),
        (o.currentLength = function (e) {
          var t =
              (e.bodyA ? e.bodyA.position.x : 0) + (e.pointA ? e.pointA.x : 0),
            n =
              (e.bodyA ? e.bodyA.position.y : 0) + (e.pointA ? e.pointA.y : 0),
            o =
              t -
              ((e.bodyB ? e.bodyB.position.x : 0) +
                (e.pointB ? e.pointB.x : 0)),
            i =
              n -
              ((e.bodyB ? e.bodyB.position.y : 0) +
                (e.pointB ? e.pointB.y : 0));
          return Math.sqrt(o * o + i * i);
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(2),
        r = n(0);
      (o.fromVertices = function (e) {
        for (var t = {}, n = 0; n < e.length; n++) {
          var o = (n + 1) % e.length,
            a = i.normalise({ x: e[o].y - e[n].y, y: e[n].x - e[o].x }),
            s = 0 === a.y ? 1 / 0 : a.x / a.y;
          t[(s = s.toFixed(3).toString())] = a;
        }
        return r.values(t);
      }),
        (o.rotate = function (e, t) {
          if (0 !== t)
            for (
              var n = Math.cos(t), o = Math.sin(t), i = 0;
              i < e.length;
              i++
            ) {
              var r,
                a = e[i];
              (r = a.x * n - a.y * o), (a.y = a.x * o + a.y * n), (a.x = r);
            }
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(3),
        r = n(0),
        a = n(4),
        s = n(1),
        l = n(2);
      (o.rectangle = function (e, t, n, o, s) {
        s = s || {};
        var l = {
          label: "Rectangle Body",
          position: { x: e, y: t },
          vertices: i.fromPath(
            "L 0 0 L " + n + " 0 L " + n + " " + o + " L 0 " + o
          ),
        };
        if (s.chamfer) {
          var c = s.chamfer;
          (l.vertices = i.chamfer(
            l.vertices,
            c.radius,
            c.quality,
            c.qualityMin,
            c.qualityMax
          )),
            delete s.chamfer;
        }
        return a.create(r.extend({}, l, s));
      }),
        (o.trapezoid = function (e, t, n, o, s, l) {
          (l = l || {}),
            s >= 1 && r.warn("Bodies.trapezoid: slope parameter must be < 1.");
          var c,
            u = n * (s *= 0.5),
            d = u + (1 - 2 * s) * n,
            p = d + u;
          c =
            s < 0.5
              ? "L 0 0 L " +
                u +
                " " +
                -o +
                " L " +
                d +
                " " +
                -o +
                " L " +
                p +
                " 0"
              : "L 0 0 L " + d + " " + -o + " L " + p + " 0";
          var f = {
            label: "Trapezoid Body",
            position: { x: e, y: t },
            vertices: i.fromPath(c),
          };
          if (l.chamfer) {
            var v = l.chamfer;
            (f.vertices = i.chamfer(
              f.vertices,
              v.radius,
              v.quality,
              v.qualityMin,
              v.qualityMax
            )),
              delete l.chamfer;
          }
          return a.create(r.extend({}, f, l));
        }),
        (o.circle = function (e, t, n, i, a) {
          i = i || {};
          var s = { label: "Circle Body", circleRadius: n };
          a = a || 25;
          var l = Math.ceil(Math.max(10, Math.min(a, n)));
          return (
            l % 2 == 1 && (l += 1), o.polygon(e, t, l, n, r.extend({}, s, i))
          );
        }),
        (o.polygon = function (e, t, n, s, l) {
          if (((l = l || {}), n < 3)) return o.circle(e, t, s, l);
          for (
            var c = (2 * Math.PI) / n, u = "", d = 0.5 * c, p = 0;
            p < n;
            p += 1
          ) {
            var f = d + p * c,
              v = Math.cos(f) * s,
              m = Math.sin(f) * s;
            u += "L " + v.toFixed(3) + " " + m.toFixed(3) + " ";
          }
          var y = {
            label: "Polygon Body",
            position: { x: e, y: t },
            vertices: i.fromPath(u),
          };
          if (l.chamfer) {
            var g = l.chamfer;
            (y.vertices = i.chamfer(
              y.vertices,
              g.radius,
              g.quality,
              g.qualityMin,
              g.qualityMax
            )),
              delete l.chamfer;
          }
          return a.create(r.extend({}, y, l));
        }),
        (o.fromVertices = function (e, t, n, o, c, u, d, p) {
          var f,
            v,
            m,
            y,
            g,
            x,
            h,
            b,
            S,
            w,
            A = r.getDecomp();
          for (
            f = Boolean(A && A.quickDecomp),
              o = o || {},
              m = [],
              c = void 0 !== c && c,
              u = void 0 !== u ? u : 0.01,
              d = void 0 !== d ? d : 10,
              p = void 0 !== p ? p : 0.01,
              r.isArray(n[0]) || (n = [n]),
              S = 0;
            S < n.length;
            S += 1
          )
            if (
              ((g = n[S]),
              !(y = i.isConvex(g)) &&
                !f &&
                r.warnOnce(
                  "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                ),
              y || !f)
            )
              (g = y ? i.clockwiseSort(g) : i.hull(g)),
                m.push({ position: { x: e, y: t }, vertices: g });
            else {
              var P = g.map(function (e) {
                return [e.x, e.y];
              });
              A.makeCCW(P),
                !1 !== u && A.removeCollinearPoints(P, u),
                !1 !== p &&
                  A.removeDuplicatePoints &&
                  A.removeDuplicatePoints(P, p);
              var B = A.quickDecomp(P);
              for (x = 0; x < B.length; x++) {
                var M = B[x].map(function (e) {
                  return { x: e[0], y: e[1] };
                });
                (d > 0 && i.area(M) < d) ||
                  m.push({ position: i.centre(M), vertices: M });
              }
            }
          for (x = 0; x < m.length; x++) m[x] = a.create(r.extend(m[x], o));
          if (c)
            for (x = 0; x < m.length; x++) {
              var _ = m[x];
              for (h = x + 1; h < m.length; h++) {
                var C = m[h];
                if (s.overlaps(_.bounds, C.bounds)) {
                  var k = _.vertices,
                    I = C.vertices;
                  for (b = 0; b < _.vertices.length; b++)
                    for (w = 0; w < C.vertices.length; w++) {
                      var T = l.magnitudeSquared(
                          l.sub(k[(b + 1) % k.length], I[w])
                        ),
                        R = l.magnitudeSquared(
                          l.sub(k[b], I[(w + 1) % I.length])
                        );
                      T < 5 &&
                        R < 5 &&
                        ((k[b].isInternal = !0), (I[w].isInternal = !0));
                    }
                }
              }
            }
          return m.length > 1
            ? ((v = a.create(r.extend({ parts: m.slice(0) }, o))),
              a.setPosition(v, { x: e, y: t }),
              v)
            : m[0];
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(0),
        r = n(8);
      (o.create = function (e) {
        return i.extend({ bodies: [], collisions: [], pairs: null }, e);
      }),
        (o.setBodies = function (e, t) {
          e.bodies = t.slice(0);
        }),
        (o.clear = function (e) {
          (e.bodies = []), (e.collisions = []);
        }),
        (o.collisions = function (e) {
          var t,
            n,
            i = e.pairs,
            a = e.bodies,
            s = a.length,
            l = o.canCollide,
            c = r.collides,
            u = e.collisions,
            d = 0;
          for (a.sort(o._compareBoundsX), t = 0; t < s; t++) {
            var p = a[t],
              f = p.bounds,
              v = p.bounds.max.x,
              m = p.bounds.max.y,
              y = p.bounds.min.y,
              g = p.isStatic || p.isSleeping,
              x = p.parts.length,
              h = 1 === x;
            for (n = t + 1; n < s; n++) {
              var b = a[n];
              if ((C = b.bounds).min.x > v) break;
              if (
                !(m < C.min.y || y > C.max.y) &&
                (!g || (!b.isStatic && !b.isSleeping)) &&
                l(p.collisionFilter, b.collisionFilter)
              ) {
                var S = b.parts.length;
                if (h && 1 === S) (M = c(p, b, i)) && (u[d++] = M);
                else
                  for (var w = S > 1 ? 1 : 0, A = x > 1 ? 1 : 0; A < x; A++)
                    for (
                      var P = p.parts[A], B = ((f = P.bounds), w);
                      B < S;
                      B++
                    ) {
                      var M,
                        _ = b.parts[B],
                        C = _.bounds;
                      f.min.x > C.max.x ||
                        f.max.x < C.min.x ||
                        f.max.y < C.min.y ||
                        f.min.y > C.max.y ||
                        ((M = c(P, _, i)) && (u[d++] = M));
                    }
              }
            }
          }
          return u.length !== d && (u.length = d), u;
        }),
        (o.canCollide = function (e, t) {
          return e.group === t.group && 0 !== e.group
            ? e.group > 0
            : 0 != (e.mask & t.category) && 0 != (t.mask & e.category);
        }),
        (o._compareBoundsX = function (e, t) {
          return e.bounds.min.x - t.bounds.min.x;
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(0);
      (o.create = function (e) {
        var t = {};
        return (
          e ||
            i.log(
              "Mouse.create: element was undefined, defaulting to document.body",
              "warn"
            ),
          (t.element = e || document.body),
          (t.absolute = { x: 0, y: 0 }),
          (t.position = { x: 0, y: 0 }),
          (t.mousedownPosition = { x: 0, y: 0 }),
          (t.mouseupPosition = { x: 0, y: 0 }),
          (t.offset = { x: 0, y: 0 }),
          (t.scale = { x: 1, y: 1 }),
          (t.wheelDelta = 0),
          (t.button = -1),
          (t.pixelRatio =
            parseInt(t.element.getAttribute("data-pixel-ratio"), 10) || 1),
          (t.sourceEvents = {
            mousemove: null,
            mousedown: null,
            mouseup: null,
            mousewheel: null,
          }),
          (t.mousemove = function (e) {
            var n = o._getRelativeMousePosition(e, t.element, t.pixelRatio);
            e.changedTouches && ((t.button = 0), e.preventDefault()),
              (t.absolute.x = n.x),
              (t.absolute.y = n.y),
              (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
              (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
              (t.sourceEvents.mousemove = e);
          }),
          (t.mousedown = function (e) {
            var n = o._getRelativeMousePosition(e, t.element, t.pixelRatio);
            e.changedTouches
              ? ((t.button = 0), e.preventDefault())
              : (t.button = e.button),
              (t.absolute.x = n.x),
              (t.absolute.y = n.y),
              (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
              (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
              (t.mousedownPosition.x = t.position.x),
              (t.mousedownPosition.y = t.position.y),
              (t.sourceEvents.mousedown = e);
          }),
          (t.mouseup = function (e) {
            var n = o._getRelativeMousePosition(e, t.element, t.pixelRatio);
            e.changedTouches && e.preventDefault(),
              (t.button = -1),
              (t.absolute.x = n.x),
              (t.absolute.y = n.y),
              (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
              (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
              (t.mouseupPosition.x = t.position.x),
              (t.mouseupPosition.y = t.position.y),
              (t.sourceEvents.mouseup = e);
          }),
          (t.mousewheel = function (e) {
            (t.wheelDelta = Math.max(
              -1,
              Math.min(1, e.wheelDelta || -e.detail)
            )),
              e.preventDefault(),
              (t.sourceEvents.mousewheel = e);
          }),
          o.setElement(t, t.element),
          t
        );
      }),
        (o.setElement = function (e, t) {
          (e.element = t),
            t.addEventListener("mousemove", e.mousemove, { passive: !0 }),
            t.addEventListener("mousedown", e.mousedown, { passive: !0 }),
            t.addEventListener("mouseup", e.mouseup, { passive: !0 }),
            t.addEventListener("wheel", e.mousewheel, { passive: !1 }),
            t.addEventListener("touchmove", e.mousemove, { passive: !1 }),
            t.addEventListener("touchstart", e.mousedown, { passive: !1 }),
            t.addEventListener("touchend", e.mouseup, { passive: !1 });
        }),
        (o.clearSourceEvents = function (e) {
          (e.sourceEvents.mousemove = null),
            (e.sourceEvents.mousedown = null),
            (e.sourceEvents.mouseup = null),
            (e.sourceEvents.mousewheel = null),
            (e.wheelDelta = 0);
        }),
        (o.setOffset = function (e, t) {
          (e.offset.x = t.x),
            (e.offset.y = t.y),
            (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
            (e.position.y = e.absolute.y * e.scale.y + e.offset.y);
        }),
        (o.setScale = function (e, t) {
          (e.scale.x = t.x),
            (e.scale.y = t.y),
            (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
            (e.position.y = e.absolute.y * e.scale.y + e.offset.y);
        }),
        (o._getRelativeMousePosition = function (e, t, n) {
          var o,
            i,
            r = t.getBoundingClientRect(),
            a =
              document.documentElement ||
              document.body.parentNode ||
              document.body,
            s =
              void 0 !== window.pageXOffset ? window.pageXOffset : a.scrollLeft,
            l =
              void 0 !== window.pageYOffset ? window.pageYOffset : a.scrollTop,
            c = e.changedTouches;
          return (
            c
              ? ((o = c[0].pageX - r.left - s), (i = c[0].pageY - r.top - l))
              : ((o = e.pageX - r.left - s), (i = e.pageY - r.top - l)),
            {
              x: o / ((t.clientWidth / (t.width || t.clientWidth)) * n),
              y: i / ((t.clientHeight / (t.height || t.clientHeight)) * n),
            }
          );
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(0);
      (o._registry = {}),
        (o.register = function (e) {
          if (
            (o.isPlugin(e) ||
              i.warn(
                "Plugin.register:",
                o.toString(e),
                "does not implement all required fields."
              ),
            e.name in o._registry)
          ) {
            var t = o._registry[e.name],
              n = o.versionParse(e.version).number,
              r = o.versionParse(t.version).number;
            n > r
              ? (i.warn(
                  "Plugin.register:",
                  o.toString(t),
                  "was upgraded to",
                  o.toString(e)
                ),
                (o._registry[e.name] = e))
              : n < r
              ? i.warn(
                  "Plugin.register:",
                  o.toString(t),
                  "can not be downgraded to",
                  o.toString(e)
                )
              : e !== t &&
                i.warn(
                  "Plugin.register:",
                  o.toString(e),
                  "is already registered to different plugin object"
                );
          } else o._registry[e.name] = e;
          return e;
        }),
        (o.resolve = function (e) {
          return o._registry[o.dependencyParse(e).name];
        }),
        (o.toString = function (e) {
          return "string" == typeof e
            ? e
            : (e.name || "anonymous") + "@" + (e.version || e.range || "0.0.0");
        }),
        (o.isPlugin = function (e) {
          return e && e.name && e.version && e.install;
        }),
        (o.isUsed = function (e, t) {
          return e.used.indexOf(t) > -1;
        }),
        (o.isFor = function (e, t) {
          var n = e.for && o.dependencyParse(e.for);
          return (
            !e.for ||
            (t.name === n.name && o.versionSatisfies(t.version, n.range))
          );
        }),
        (o.use = function (e, t) {
          if (
            ((e.uses = (e.uses || []).concat(t || [])), 0 !== e.uses.length)
          ) {
            for (
              var n = o.dependencies(e),
                r = i.topologicalSort(n),
                a = [],
                s = 0;
              s < r.length;
              s += 1
            )
              if (r[s] !== e.name) {
                var l = o.resolve(r[s]);
                l
                  ? o.isUsed(e, l.name) ||
                    (o.isFor(l, e) ||
                      (i.warn(
                        "Plugin.use:",
                        o.toString(l),
                        "is for",
                        l.for,
                        "but installed on",
                        o.toString(e) + "."
                      ),
                      (l._warned = !0)),
                    l.install
                      ? l.install(e)
                      : (i.warn(
                          "Plugin.use:",
                          o.toString(l),
                          "does not specify an install function."
                        ),
                        (l._warned = !0)),
                    l._warned
                      ? (a.push("🔶 " + o.toString(l)), delete l._warned)
                      : a.push("✅ " + o.toString(l)),
                    e.used.push(l.name))
                  : a.push("❌ " + r[s]);
              }
            a.length > 0 && i.info(a.join("  "));
          } else
            i.warn(
              "Plugin.use:",
              o.toString(e),
              "does not specify any dependencies to install."
            );
        }),
        (o.dependencies = function (e, t) {
          var n = o.dependencyParse(e),
            r = n.name;
          if (!(r in (t = t || {}))) {
            (e = o.resolve(e) || e),
              (t[r] = i.map(e.uses || [], function (t) {
                o.isPlugin(t) && o.register(t);
                var r = o.dependencyParse(t),
                  a = o.resolve(t);
                return (
                  a && !o.versionSatisfies(a.version, r.range)
                    ? (i.warn(
                        "Plugin.dependencies:",
                        o.toString(a),
                        "does not satisfy",
                        o.toString(r),
                        "used by",
                        o.toString(n) + "."
                      ),
                      (a._warned = !0),
                      (e._warned = !0))
                    : a ||
                      (i.warn(
                        "Plugin.dependencies:",
                        o.toString(t),
                        "used by",
                        o.toString(n),
                        "could not be resolved."
                      ),
                      (e._warned = !0)),
                  r.name
                );
              }));
            for (var a = 0; a < t[r].length; a += 1) o.dependencies(t[r][a], t);
            return t;
          }
        }),
        (o.dependencyParse = function (e) {
          return i.isString(e)
            ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(
                e
              ) ||
                i.warn(
                  "Plugin.dependencyParse:",
                  e,
                  "is not a valid dependency string."
                ),
              { name: e.split("@")[0], range: e.split("@")[1] || "*" })
            : { name: e.name, range: e.range || e.version };
        }),
        (o.versionParse = function (e) {
          var t =
            /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
          t.test(e) ||
            i.warn(
              "Plugin.versionParse:",
              e,
              "is not a valid version or range."
            );
          var n = t.exec(e),
            o = Number(n[4]),
            r = Number(n[5]),
            a = Number(n[6]);
          return {
            isRange: Boolean(n[1] || n[2]),
            version: n[3],
            range: e,
            operator: n[1] || n[2] || "",
            major: o,
            minor: r,
            patch: a,
            parts: [o, r, a],
            prerelease: n[7],
            number: 1e8 * o + 1e4 * r + a,
          };
        }),
        (o.versionSatisfies = function (e, t) {
          t = t || "*";
          var n = o.versionParse(t),
            i = o.versionParse(e);
          if (n.isRange) {
            if ("*" === n.operator || "*" === e) return !0;
            if (">" === n.operator) return i.number > n.number;
            if (">=" === n.operator) return i.number >= n.number;
            if ("~" === n.operator)
              return (
                i.major === n.major && i.minor === n.minor && i.patch >= n.patch
              );
            if ("^" === n.operator)
              return n.major > 0
                ? i.major === n.major && i.number >= n.number
                : n.minor > 0
                ? i.minor === n.minor && i.patch >= n.patch
                : i.patch === n.patch;
          }
          return e === t || "*" === e;
        });
    },
    function (e, t) {
      var n = {};
      (e.exports = n),
        (n.create = function (e) {
          return { vertex: e, normalImpulse: 0, tangentImpulse: 0 };
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(7),
        r = n(18),
        a = n(13),
        s = n(19),
        l = n(5),
        c = n(6),
        u = n(10),
        d = n(0),
        p = n(4);
      (o._deltaMax = 1e3 / 60),
        (o.create = function (e) {
          e = e || {};
          var t = d.extend(
            {
              positionIterations: 6,
              velocityIterations: 4,
              constraintIterations: 2,
              enableSleeping: !1,
              events: [],
              plugin: {},
              gravity: { x: 0, y: 1, scale: 0.001 },
              timing: {
                timestamp: 0,
                timeScale: 1,
                lastDelta: 0,
                lastElapsed: 0,
                lastUpdatesPerFrame: 0,
              },
            },
            e
          );
          return (
            (t.world = e.world || c.create({ label: "World" })),
            (t.pairs = e.pairs || s.create()),
            (t.detector = e.detector || a.create()),
            (t.detector.pairs = t.pairs),
            (t.grid = { buckets: [] }),
            (t.world.gravity = t.gravity),
            (t.broadphase = t.grid),
            (t.metrics = {}),
            t
          );
        }),
        (o.update = function (e, t) {
          var n,
            p = d.now(),
            f = e.world,
            v = e.detector,
            m = e.pairs,
            y = e.timing,
            g = y.timestamp;
          t > o._deltaMax &&
            d.warnOnce(
              "Matter.Engine.update: delta argument is recommended to be less than or equal to",
              o._deltaMax.toFixed(3),
              "ms."
            ),
            (t = void 0 !== t ? t : d._baseDelta),
            (t *= y.timeScale),
            (y.timestamp += t),
            (y.lastDelta = t);
          var x = { timestamp: y.timestamp, delta: t };
          l.trigger(e, "beforeUpdate", x);
          var h = c.allBodies(f),
            b = c.allConstraints(f);
          for (
            f.isModified && (a.setBodies(v, h), c.setModified(f, !1, !1, !0)),
              e.enableSleeping && i.update(h, t),
              o._bodiesApplyGravity(h, e.gravity),
              t > 0 && o._bodiesUpdate(h, t),
              l.trigger(e, "beforeSolve", x),
              u.preSolveAll(h),
              n = 0;
            n < e.constraintIterations;
            n++
          )
            u.solveAll(b, t);
          u.postSolveAll(h);
          var S = a.collisions(v);
          s.update(m, S, g),
            e.enableSleeping && i.afterCollisions(m.list),
            m.collisionStart.length > 0 &&
              l.trigger(e, "collisionStart", {
                pairs: m.collisionStart,
                timestamp: y.timestamp,
                delta: t,
              });
          var w = d.clamp(20 / e.positionIterations, 0, 1);
          for (r.preSolvePosition(m.list), n = 0; n < e.positionIterations; n++)
            r.solvePosition(m.list, t, w);
          for (
            r.postSolvePosition(h), u.preSolveAll(h), n = 0;
            n < e.constraintIterations;
            n++
          )
            u.solveAll(b, t);
          for (
            u.postSolveAll(h), r.preSolveVelocity(m.list), n = 0;
            n < e.velocityIterations;
            n++
          )
            r.solveVelocity(m.list, t);
          return (
            o._bodiesUpdateVelocities(h),
            m.collisionActive.length > 0 &&
              l.trigger(e, "collisionActive", {
                pairs: m.collisionActive,
                timestamp: y.timestamp,
                delta: t,
              }),
            m.collisionEnd.length > 0 &&
              l.trigger(e, "collisionEnd", {
                pairs: m.collisionEnd,
                timestamp: y.timestamp,
                delta: t,
              }),
            o._bodiesClearForces(h),
            l.trigger(e, "afterUpdate", x),
            (e.timing.lastElapsed = d.now() - p),
            e
          );
        }),
        (o.merge = function (e, t) {
          if ((d.extend(e, t), t.world)) {
            (e.world = t.world), o.clear(e);
            for (var n = c.allBodies(e.world), r = 0; r < n.length; r++) {
              var a = n[r];
              i.set(a, !1), (a.id = d.nextId());
            }
          }
        }),
        (o.clear = function (e) {
          s.clear(e.pairs), a.clear(e.detector);
        }),
        (o._bodiesClearForces = function (e) {
          for (var t = e.length, n = 0; n < t; n++) {
            var o = e[n];
            (o.force.x = 0), (o.force.y = 0), (o.torque = 0);
          }
        }),
        (o._bodiesApplyGravity = function (e, t) {
          var n = void 0 !== t.scale ? t.scale : 0.001,
            o = e.length;
          if ((0 !== t.x || 0 !== t.y) && 0 !== n)
            for (var i = 0; i < o; i++) {
              var r = e[i];
              r.isStatic ||
                r.isSleeping ||
                ((r.force.y += r.mass * t.y * n),
                (r.force.x += r.mass * t.x * n));
            }
        }),
        (o._bodiesUpdate = function (e, t) {
          for (var n = e.length, o = 0; o < n; o++) {
            var i = e[o];
            i.isStatic || i.isSleeping || p.update(i, t);
          }
        }),
        (o._bodiesUpdateVelocities = function (e) {
          for (var t = e.length, n = 0; n < t; n++) p.updateVelocities(e[n]);
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(3),
        r = n(0),
        a = n(1);
      (o._restingThresh = 2),
        (o._restingThreshTangent = Math.sqrt(6)),
        (o._positionDampen = 0.9),
        (o._positionWarming = 0.8),
        (o._frictionNormalMultiplier = 5),
        (o._frictionMaxStatic = Number.MAX_VALUE),
        (o.preSolvePosition = function (e) {
          var t,
            n,
            o,
            i = e.length;
          for (t = 0; t < i; t++)
            (n = e[t]).isActive &&
              ((o = n.contactCount),
              (n.collision.parentA.totalContacts += o),
              (n.collision.parentB.totalContacts += o));
        }),
        (o.solvePosition = function (e, t, n) {
          var i,
            a,
            s,
            l,
            c,
            u,
            d,
            p,
            f = o._positionDampen * (n || 1),
            v = r.clamp(t / r._baseDelta, 0, 1),
            m = e.length;
          for (i = 0; i < m; i++)
            (a = e[i]).isActive &&
              !a.isSensor &&
              ((l = (s = a.collision).parentA),
              (c = s.parentB),
              (u = s.normal),
              (a.separation =
                s.depth +
                u.x * (c.positionImpulse.x - l.positionImpulse.x) +
                u.y * (c.positionImpulse.y - l.positionImpulse.y)));
          for (i = 0; i < m; i++)
            (a = e[i]).isActive &&
              !a.isSensor &&
              ((l = (s = a.collision).parentA),
              (c = s.parentB),
              (u = s.normal),
              (p = a.separation - a.slop * v),
              (l.isStatic || c.isStatic) && (p *= 2),
              l.isStatic ||
                l.isSleeping ||
                ((d = f / l.totalContacts),
                (l.positionImpulse.x += u.x * p * d),
                (l.positionImpulse.y += u.y * p * d)),
              c.isStatic ||
                c.isSleeping ||
                ((d = f / c.totalContacts),
                (c.positionImpulse.x -= u.x * p * d),
                (c.positionImpulse.y -= u.y * p * d)));
        }),
        (o.postSolvePosition = function (e) {
          for (
            var t = o._positionWarming,
              n = e.length,
              r = i.translate,
              s = a.update,
              l = 0;
            l < n;
            l++
          ) {
            var c = e[l],
              u = c.positionImpulse,
              d = u.x,
              p = u.y,
              f = c.velocity;
            if (((c.totalContacts = 0), 0 !== d || 0 !== p)) {
              for (var v = 0; v < c.parts.length; v++) {
                var m = c.parts[v];
                r(m.vertices, u),
                  s(m.bounds, m.vertices, f),
                  (m.position.x += d),
                  (m.position.y += p);
              }
              (c.positionPrev.x += d),
                (c.positionPrev.y += p),
                d * f.x + p * f.y < 0
                  ? ((u.x = 0), (u.y = 0))
                  : ((u.x *= t), (u.y *= t));
            }
          }
        }),
        (o.preSolveVelocity = function (e) {
          var t,
            n,
            o = e.length;
          for (t = 0; t < o; t++) {
            var i = e[t];
            if (i.isActive && !i.isSensor) {
              var r = i.contacts,
                a = i.contactCount,
                s = i.collision,
                l = s.parentA,
                c = s.parentB,
                u = s.normal,
                d = s.tangent;
              for (n = 0; n < a; n++) {
                var p = r[n],
                  f = p.vertex,
                  v = p.normalImpulse,
                  m = p.tangentImpulse;
                if (0 !== v || 0 !== m) {
                  var y = u.x * v + d.x * m,
                    g = u.y * v + d.y * m;
                  l.isStatic ||
                    l.isSleeping ||
                    ((l.positionPrev.x += y * l.inverseMass),
                    (l.positionPrev.y += g * l.inverseMass),
                    (l.anglePrev +=
                      l.inverseInertia *
                      ((f.x - l.position.x) * g - (f.y - l.position.y) * y))),
                    c.isStatic ||
                      c.isSleeping ||
                      ((c.positionPrev.x -= y * c.inverseMass),
                      (c.positionPrev.y -= g * c.inverseMass),
                      (c.anglePrev -=
                        c.inverseInertia *
                        ((f.x - c.position.x) * g - (f.y - c.position.y) * y)));
                }
              }
            }
          }
        }),
        (o.solveVelocity = function (e, t) {
          var n,
            i,
            a,
            s,
            l = t / r._baseDelta,
            c = l * l * l,
            u = -o._restingThresh * l,
            d = o._restingThreshTangent,
            p = o._frictionNormalMultiplier * l,
            f = o._frictionMaxStatic,
            v = e.length;
          for (a = 0; a < v; a++) {
            var m = e[a];
            if (m.isActive && !m.isSensor) {
              var y = m.collision,
                g = y.parentA,
                x = y.parentB,
                h = y.normal.x,
                b = y.normal.y,
                S = y.tangent.x,
                w = y.tangent.y,
                A = m.inverseMass,
                P = m.friction * m.frictionStatic * p,
                B = m.contacts,
                M = m.contactCount,
                _ = 1 / M,
                C = g.position.x - g.positionPrev.x,
                k = g.position.y - g.positionPrev.y,
                I = g.angle - g.anglePrev,
                T = x.position.x - x.positionPrev.x,
                R = x.position.y - x.positionPrev.y,
                D = x.angle - x.anglePrev;
              for (s = 0; s < M; s++) {
                var V = B[s],
                  E = V.vertex,
                  L = E.x - g.position.x,
                  F = E.y - g.position.y,
                  O = E.x - x.position.x,
                  H = E.y - x.position.y,
                  q = C - F * I - (T - H * D),
                  j = k + L * I - (R + O * D),
                  U = h * q + b * j,
                  W = S * q + w * j,
                  N = m.separation + U,
                  G = Math.min(N, 1),
                  z = (G = N < 0 ? 0 : G) * P;
                W < -z || W > z
                  ? ((i = W > 0 ? W : -W),
                    (n = m.friction * (W > 0 ? 1 : -1) * c) < -i
                      ? (n = -i)
                      : n > i && (n = i))
                  : ((n = W), (i = f));
                var X = L * b - F * h,
                  Q = O * b - H * h,
                  Y =
                    _ /
                    (A + g.inverseInertia * X * X + x.inverseInertia * Q * Q),
                  Z = (1 + m.restitution) * U * Y;
                if (((n *= Y), U < u)) V.normalImpulse = 0;
                else {
                  var $ = V.normalImpulse;
                  (V.normalImpulse += Z),
                    V.normalImpulse > 0 && (V.normalImpulse = 0),
                    (Z = V.normalImpulse - $);
                }
                if (W < -d || W > d) V.tangentImpulse = 0;
                else {
                  var J = V.tangentImpulse;
                  (V.tangentImpulse += n),
                    V.tangentImpulse < -i && (V.tangentImpulse = -i),
                    V.tangentImpulse > i && (V.tangentImpulse = i),
                    (n = V.tangentImpulse - J);
                }
                var K = h * Z + S * n,
                  ee = b * Z + w * n;
                g.isStatic ||
                  g.isSleeping ||
                  ((g.positionPrev.x += K * g.inverseMass),
                  (g.positionPrev.y += ee * g.inverseMass),
                  (g.anglePrev += (L * ee - F * K) * g.inverseInertia)),
                  x.isStatic ||
                    x.isSleeping ||
                    ((x.positionPrev.x -= K * x.inverseMass),
                    (x.positionPrev.y -= ee * x.inverseMass),
                    (x.anglePrev -= (O * ee - H * K) * x.inverseInertia));
              }
            }
          }
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(9),
        r = n(0);
      (o.create = function (e) {
        return r.extend(
          {
            table: {},
            list: [],
            collisionStart: [],
            collisionActive: [],
            collisionEnd: [],
          },
          e
        );
      }),
        (o.update = function (e, t, n) {
          var o,
            r,
            a,
            s = i.update,
            l = i.create,
            c = i.setActive,
            u = e.table,
            d = e.list,
            p = d.length,
            f = p,
            v = e.collisionStart,
            m = e.collisionEnd,
            y = e.collisionActive,
            g = t.length,
            x = 0,
            h = 0,
            b = 0;
          for (a = 0; a < g; a++)
            (r = (o = t[a]).pair)
              ? (r.isActive && (y[b++] = r), s(r, o, n))
              : ((u[(r = l(o, n)).id] = r), (v[x++] = r), (d[f++] = r));
          for (f = 0, p = d.length, a = 0; a < p; a++)
            (r = d[a]).timeUpdated >= n
              ? (d[f++] = r)
              : (c(r, !1, n),
                r.collision.bodyA.sleepCounter > 0 &&
                r.collision.bodyB.sleepCounter > 0
                  ? (d[f++] = r)
                  : ((m[h++] = r), delete u[r.id]));
          d.length !== f && (d.length = f),
            v.length !== x && (v.length = x),
            m.length !== h && (m.length = h),
            y.length !== b && (y.length = b);
        }),
        (o.clear = function (e) {
          return (
            (e.table = {}),
            (e.list.length = 0),
            (e.collisionStart.length = 0),
            (e.collisionActive.length = 0),
            (e.collisionEnd.length = 0),
            e
          );
        });
    },
    function (e, t, n) {
      var o = (e.exports = n(21));
      (o.Axes = n(11)),
        (o.Bodies = n(12)),
        (o.Body = n(4)),
        (o.Bounds = n(1)),
        (o.Collision = n(8)),
        (o.Common = n(0)),
        (o.Composite = n(6)),
        (o.Composites = n(22)),
        (o.Constraint = n(10)),
        (o.Contact = n(16)),
        (o.Detector = n(13)),
        (o.Engine = n(17)),
        (o.Events = n(5)),
        (o.Grid = n(23)),
        (o.Mouse = n(14)),
        (o.MouseConstraint = n(24)),
        (o.Pair = n(9)),
        (o.Pairs = n(19)),
        (o.Plugin = n(15)),
        (o.Query = n(25)),
        (o.Render = n(26)),
        (o.Resolver = n(18)),
        (o.Runner = n(27)),
        (o.SAT = n(28)),
        (o.Sleeping = n(7)),
        (o.Svg = n(29)),
        (o.Vector = n(2)),
        (o.Vertices = n(3)),
        (o.World = n(30)),
        (o.Engine.run = o.Runner.run),
        o.Common.deprecated(
          o.Engine,
          "run",
          "Engine.run ➤ use Matter.Runner.run(engine) instead"
        );
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(15),
        r = n(0);
      (o.name = "matter-js"),
        (o.version = "0.20.0"),
        (o.uses = []),
        (o.used = []),
        (o.use = function () {
          i.use(o, Array.prototype.slice.call(arguments));
        }),
        (o.before = function (e, t) {
          return (e = e.replace(/^Matter./, "")), r.chainPathBefore(o, e, t);
        }),
        (o.after = function (e, t) {
          return (e = e.replace(/^Matter./, "")), r.chainPathAfter(o, e, t);
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(6),
        r = n(10),
        a = n(0),
        s = n(4),
        l = n(12),
        c = a.deprecated;
      (o.stack = function (e, t, n, o, r, a, l) {
        for (
          var c, u = i.create({ label: "Stack" }), d = e, p = t, f = 0, v = 0;
          v < o;
          v++
        ) {
          for (var m = 0, y = 0; y < n; y++) {
            var g = l(d, p, y, v, c, f);
            if (g) {
              var x = g.bounds.max.y - g.bounds.min.y,
                h = g.bounds.max.x - g.bounds.min.x;
              x > m && (m = x),
                s.translate(g, { x: 0.5 * h, y: 0.5 * x }),
                (d = g.bounds.max.x + r),
                i.addBody(u, g),
                (c = g),
                (f += 1);
            } else d += r;
          }
          (p += m + a), (d = e);
        }
        return u;
      }),
        (o.chain = function (e, t, n, o, s, l) {
          for (var c = e.bodies, u = 1; u < c.length; u++) {
            var d = c[u - 1],
              p = c[u],
              f = d.bounds.max.y - d.bounds.min.y,
              v = d.bounds.max.x - d.bounds.min.x,
              m = p.bounds.max.y - p.bounds.min.y,
              y = {
                bodyA: d,
                pointA: { x: v * t, y: f * n },
                bodyB: p,
                pointB: { x: (p.bounds.max.x - p.bounds.min.x) * o, y: m * s },
              },
              g = a.extend(y, l);
            i.addConstraint(e, r.create(g));
          }
          return (e.label += " Chain"), e;
        }),
        (o.mesh = function (e, t, n, o, s) {
          var l,
            c,
            u,
            d,
            p,
            f = e.bodies;
          for (l = 0; l < n; l++) {
            for (c = 1; c < t; c++)
              (u = f[c - 1 + l * t]),
                (d = f[c + l * t]),
                i.addConstraint(
                  e,
                  r.create(a.extend({ bodyA: u, bodyB: d }, s))
                );
            if (l > 0)
              for (c = 0; c < t; c++)
                (u = f[c + (l - 1) * t]),
                  (d = f[c + l * t]),
                  i.addConstraint(
                    e,
                    r.create(a.extend({ bodyA: u, bodyB: d }, s))
                  ),
                  o &&
                    c > 0 &&
                    ((p = f[c - 1 + (l - 1) * t]),
                    i.addConstraint(
                      e,
                      r.create(a.extend({ bodyA: p, bodyB: d }, s))
                    )),
                  o &&
                    c < t - 1 &&
                    ((p = f[c + 1 + (l - 1) * t]),
                    i.addConstraint(
                      e,
                      r.create(a.extend({ bodyA: p, bodyB: d }, s))
                    ));
          }
          return (e.label += " Mesh"), e;
        }),
        (o.pyramid = function (e, t, n, i, r, a, l) {
          return o.stack(e, t, n, i, r, a, function (t, o, a, c, u, d) {
            var p = Math.min(i, Math.ceil(n / 2)),
              f = u ? u.bounds.max.x - u.bounds.min.x : 0;
            if (!(c > p || a < (c = p - c) || a > n - 1 - c))
              return (
                1 === d &&
                  s.translate(u, { x: (a + (n % 2 == 1 ? 1 : -1)) * f, y: 0 }),
                l(e + (u ? a * f : 0) + a * r, o, a, c, u, d)
              );
          });
        }),
        (o.newtonsCradle = function (e, t, n, o, a) {
          for (
            var s = i.create({ label: "Newtons Cradle" }), c = 0;
            c < n;
            c++
          ) {
            var u = l.circle(e + c * (1.9 * o), t + a, o, {
                inertia: 1 / 0,
                restitution: 1,
                friction: 0,
                frictionAir: 1e-4,
                slop: 1,
              }),
              d = r.create({
                pointA: { x: e + c * (1.9 * o), y: t },
                bodyB: u,
              });
            i.addBody(s, u), i.addConstraint(s, d);
          }
          return s;
        }),
        c(
          o,
          "newtonsCradle",
          "Composites.newtonsCradle ➤ moved to newtonsCradle example"
        ),
        (o.car = function (e, t, n, o, a) {
          var c = s.nextGroup(!0),
            u = 0.5 * -n + 20,
            d = 0.5 * n - 20,
            p = i.create({ label: "Car" }),
            f = l.rectangle(e, t, n, o, {
              collisionFilter: { group: c },
              chamfer: { radius: 0.5 * o },
              density: 2e-4,
            }),
            v = l.circle(e + u, t + 0, a, {
              collisionFilter: { group: c },
              friction: 0.8,
            }),
            m = l.circle(e + d, t + 0, a, {
              collisionFilter: { group: c },
              friction: 0.8,
            }),
            y = r.create({
              bodyB: f,
              pointB: { x: u, y: 0 },
              bodyA: v,
              stiffness: 1,
              length: 0,
            }),
            g = r.create({
              bodyB: f,
              pointB: { x: d, y: 0 },
              bodyA: m,
              stiffness: 1,
              length: 0,
            });
          return (
            i.addBody(p, f),
            i.addBody(p, v),
            i.addBody(p, m),
            i.addConstraint(p, y),
            i.addConstraint(p, g),
            p
          );
        }),
        c(o, "car", "Composites.car ➤ moved to car example"),
        (o.softBody = function (e, t, n, i, r, s, c, u, d, p) {
          (d = a.extend({ inertia: 1 / 0 }, d)),
            (p = a.extend(
              { stiffness: 0.2, render: { type: "line", anchors: !1 } },
              p
            ));
          var f = o.stack(e, t, n, i, r, s, function (e, t) {
            return l.circle(e, t, u, d);
          });
          return o.mesh(f, n, i, c, p), (f.label = "Soft Body"), f;
        }),
        c(
          o,
          "softBody",
          "Composites.softBody ➤ moved to softBody and cloth examples"
        );
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(9),
        r = n(0),
        a = r.deprecated;
      (o.create = function (e) {
        return r.extend(
          {
            buckets: {},
            pairs: {},
            pairsList: [],
            bucketWidth: 48,
            bucketHeight: 48,
          },
          e
        );
      }),
        (o.update = function (e, t, n, i) {
          var r,
            a,
            s,
            l,
            c,
            u = n.world,
            d = e.buckets,
            p = !1;
          for (r = 0; r < t.length; r++) {
            var f = t[r];
            if (
              (!f.isSleeping || i) &&
              (!u.bounds ||
                !(
                  f.bounds.max.x < u.bounds.min.x ||
                  f.bounds.min.x > u.bounds.max.x ||
                  f.bounds.max.y < u.bounds.min.y ||
                  f.bounds.min.y > u.bounds.max.y
                ))
            ) {
              var v = o._getRegion(e, f);
              if (!f.region || v.id !== f.region.id || i) {
                (f.region && !i) || (f.region = v);
                var m = o._regionUnion(v, f.region);
                for (a = m.startCol; a <= m.endCol; a++)
                  for (s = m.startRow; s <= m.endRow; s++) {
                    l = d[(c = o._getBucketId(a, s))];
                    var y =
                        a >= v.startCol &&
                        a <= v.endCol &&
                        s >= v.startRow &&
                        s <= v.endRow,
                      g =
                        a >= f.region.startCol &&
                        a <= f.region.endCol &&
                        s >= f.region.startRow &&
                        s <= f.region.endRow;
                    !y && g && g && l && o._bucketRemoveBody(e, l, f),
                      (f.region === v || (y && !g) || i) &&
                        (l || (l = o._createBucket(d, c)),
                        o._bucketAddBody(e, l, f));
                  }
                (f.region = v), (p = !0);
              }
            }
          }
          p && (e.pairsList = o._createActivePairsList(e));
        }),
        a(o, "update", "Grid.update ➤ replaced by Matter.Detector"),
        (o.clear = function (e) {
          (e.buckets = {}), (e.pairs = {}), (e.pairsList = []);
        }),
        a(o, "clear", "Grid.clear ➤ replaced by Matter.Detector"),
        (o._regionUnion = function (e, t) {
          var n = Math.min(e.startCol, t.startCol),
            i = Math.max(e.endCol, t.endCol),
            r = Math.min(e.startRow, t.startRow),
            a = Math.max(e.endRow, t.endRow);
          return o._createRegion(n, i, r, a);
        }),
        (o._getRegion = function (e, t) {
          var n = t.bounds,
            i = Math.floor(n.min.x / e.bucketWidth),
            r = Math.floor(n.max.x / e.bucketWidth),
            a = Math.floor(n.min.y / e.bucketHeight),
            s = Math.floor(n.max.y / e.bucketHeight);
          return o._createRegion(i, r, a, s);
        }),
        (o._createRegion = function (e, t, n, o) {
          return {
            id: e + "," + t + "," + n + "," + o,
            startCol: e,
            endCol: t,
            startRow: n,
            endRow: o,
          };
        }),
        (o._getBucketId = function (e, t) {
          return "C" + e + "R" + t;
        }),
        (o._createBucket = function (e, t) {
          return (e[t] = []);
        }),
        (o._bucketAddBody = function (e, t, n) {
          var o,
            r = e.pairs,
            a = i.id,
            s = t.length;
          for (o = 0; o < s; o++) {
            var l = t[o];
            if (!(n.id === l.id || (n.isStatic && l.isStatic))) {
              var c = a(n, l),
                u = r[c];
              u ? (u[2] += 1) : (r[c] = [n, l, 1]);
            }
          }
          t.push(n);
        }),
        (o._bucketRemoveBody = function (e, t, n) {
          var o,
            a = e.pairs,
            s = i.id;
          t.splice(r.indexOf(t, n), 1);
          var l = t.length;
          for (o = 0; o < l; o++) {
            var c = a[s(n, t[o])];
            c && (c[2] -= 1);
          }
        }),
        (o._createActivePairsList = function (e) {
          var t,
            n,
            o = e.pairs,
            i = r.keys(o),
            a = i.length,
            s = [];
          for (n = 0; n < a; n++)
            (t = o[i[n]])[2] > 0 ? s.push(t) : delete o[i[n]];
          return s;
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(3),
        r = n(7),
        a = n(14),
        s = n(5),
        l = n(13),
        c = n(10),
        u = n(6),
        d = n(0),
        p = n(1);
      (o.create = function (e, t) {
        var n = (e ? e.mouse : null) || (t ? t.mouse : null);
        n ||
          (e && e.render && e.render.canvas
            ? (n = a.create(e.render.canvas))
            : t && t.element
            ? (n = a.create(t.element))
            : ((n = a.create()),
              d.warn(
                "MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected"
              )));
        var i = {
            type: "mouseConstraint",
            mouse: n,
            element: null,
            body: null,
            constraint: c.create({
              label: "Mouse Constraint",
              pointA: n.position,
              pointB: { x: 0, y: 0 },
              length: 0.01,
              stiffness: 0.1,
              angularStiffness: 1,
              render: { strokeStyle: "#90EE90", lineWidth: 3 },
            }),
            collisionFilter: { category: 1, mask: 4294967295, group: 0 },
          },
          r = d.extend(i, t);
        return (
          s.on(e, "beforeUpdate", function () {
            var t = u.allBodies(e.world);
            o.update(r, t), o._triggerEvents(r);
          }),
          r
        );
      }),
        (o.update = function (e, t) {
          var n = e.mouse,
            o = e.constraint,
            a = e.body;
          if (0 === n.button) {
            if (o.bodyB) r.set(o.bodyB, !1), (o.pointA = n.position);
            else
              for (var c = 0; c < t.length; c++)
                if (
                  ((a = t[c]),
                  p.contains(a.bounds, n.position) &&
                    l.canCollide(a.collisionFilter, e.collisionFilter))
                )
                  for (
                    var u = a.parts.length > 1 ? 1 : 0;
                    u < a.parts.length;
                    u++
                  ) {
                    var d = a.parts[u];
                    if (i.contains(d.vertices, n.position)) {
                      (o.pointA = n.position),
                        (o.bodyB = e.body = a),
                        (o.pointB = {
                          x: n.position.x - a.position.x,
                          y: n.position.y - a.position.y,
                        }),
                        (o.angleB = a.angle),
                        r.set(a, !1),
                        s.trigger(e, "startdrag", { mouse: n, body: a });
                      break;
                    }
                  }
          } else
            (o.bodyB = e.body = null),
              (o.pointB = null),
              a && s.trigger(e, "enddrag", { mouse: n, body: a });
        }),
        (o._triggerEvents = function (e) {
          var t = e.mouse,
            n = t.sourceEvents;
          n.mousemove && s.trigger(e, "mousemove", { mouse: t }),
            n.mousedown && s.trigger(e, "mousedown", { mouse: t }),
            n.mouseup && s.trigger(e, "mouseup", { mouse: t }),
            a.clearSourceEvents(t);
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(2),
        r = n(8),
        a = n(1),
        s = n(12),
        l = n(3);
      (o.collides = function (e, t) {
        for (
          var n = [],
            o = t.length,
            i = e.bounds,
            s = r.collides,
            l = a.overlaps,
            c = 0;
          c < o;
          c++
        ) {
          var u = t[c],
            d = u.parts.length,
            p = 1 === d ? 0 : 1;
          if (l(u.bounds, i))
            for (var f = p; f < d; f++) {
              var v = u.parts[f];
              if (l(v.bounds, i)) {
                var m = s(v, e);
                if (m) {
                  n.push(m);
                  break;
                }
              }
            }
        }
        return n;
      }),
        (o.ray = function (e, t, n, r) {
          r = r || 1e-100;
          for (
            var a = i.angle(t, n),
              l = i.magnitude(i.sub(t, n)),
              c = 0.5 * (n.x + t.x),
              u = 0.5 * (n.y + t.y),
              d = s.rectangle(c, u, l, r, { angle: a }),
              p = o.collides(d, e),
              f = 0;
            f < p.length;
            f += 1
          ) {
            var v = p[f];
            v.body = v.bodyB = v.bodyA;
          }
          return p;
        }),
        (o.region = function (e, t, n) {
          for (var o = [], i = 0; i < e.length; i++) {
            var r = e[i],
              s = a.overlaps(r.bounds, t);
            ((s && !n) || (!s && n)) && o.push(r);
          }
          return o;
        }),
        (o.point = function (e, t) {
          for (var n = [], o = 0; o < e.length; o++) {
            var i = e[o];
            if (a.contains(i.bounds, t))
              for (
                var r = 1 === i.parts.length ? 0 : 1;
                r < i.parts.length;
                r++
              ) {
                var s = i.parts[r];
                if (a.contains(s.bounds, t) && l.contains(s.vertices, t)) {
                  n.push(i);
                  break;
                }
              }
          }
          return n;
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(4),
        r = n(0),
        a = n(6),
        s = n(1),
        l = n(5),
        c = n(2),
        u = n(14);
      !(function () {
        var e, t;
        "undefined" != typeof window &&
          ((e =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (e) {
              window.setTimeout(function () {
                e(r.now());
              }, 1e3 / 60);
            }),
          (t =
            window.cancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.msCancelAnimationFrame)),
          (o._goodFps = 30),
          (o._goodDelta = 1e3 / 60),
          (o.create = function (e) {
            var t = {
                engine: null,
                element: null,
                canvas: null,
                mouse: null,
                frameRequestId: null,
                timing: {
                  historySize: 60,
                  delta: 0,
                  deltaHistory: [],
                  lastTime: 0,
                  lastTimestamp: 0,
                  lastElapsed: 0,
                  timestampElapsed: 0,
                  timestampElapsedHistory: [],
                  engineDeltaHistory: [],
                  engineElapsedHistory: [],
                  engineUpdatesHistory: [],
                  elapsedHistory: [],
                },
                options: {
                  width: 800,
                  height: 600,
                  pixelRatio: 1,
                  background: "#14151f",
                  wireframeBackground: "#14151f",
                  wireframeStrokeStyle: "#bbb",
                  hasBounds: !!e.bounds,
                  enabled: !0,
                  wireframes: !0,
                  showSleeping: !0,
                  showDebug: !1,
                  showStats: !1,
                  showPerformance: !1,
                  showBounds: !1,
                  showVelocity: !1,
                  showCollisions: !1,
                  showSeparations: !1,
                  showAxes: !1,
                  showPositions: !1,
                  showAngleIndicator: !1,
                  showIds: !1,
                  showVertexNumbers: !1,
                  showConvexHulls: !1,
                  showInternalEdges: !1,
                  showMousePosition: !1,
                },
              },
              n = r.extend(t, e);
            return (
              n.canvas &&
                ((n.canvas.width = n.options.width || n.canvas.width),
                (n.canvas.height = n.options.height || n.canvas.height)),
              (n.mouse = e.mouse),
              (n.engine = e.engine),
              (n.canvas = n.canvas || p(n.options.width, n.options.height)),
              (n.context = n.canvas.getContext("2d")),
              (n.textures = {}),
              (n.bounds = n.bounds || {
                min: { x: 0, y: 0 },
                max: { x: n.canvas.width, y: n.canvas.height },
              }),
              (n.controller = o),
              (n.options.showBroadphase = !1),
              1 !== n.options.pixelRatio &&
                o.setPixelRatio(n, n.options.pixelRatio),
              r.isElement(n.element) && n.element.appendChild(n.canvas),
              n
            );
          }),
          (o.run = function (t) {
            !(function i(r) {
              (t.frameRequestId = e(i)),
                n(t, r),
                o.world(t, r),
                t.context.setTransform(
                  t.options.pixelRatio,
                  0,
                  0,
                  t.options.pixelRatio,
                  0,
                  0
                ),
                (t.options.showStats || t.options.showDebug) &&
                  o.stats(t, t.context, r),
                (t.options.showPerformance || t.options.showDebug) &&
                  o.performance(t, t.context, r),
                t.context.setTransform(1, 0, 0, 1, 0, 0);
            })();
          }),
          (o.stop = function (e) {
            t(e.frameRequestId);
          }),
          (o.setPixelRatio = function (e, t) {
            var n = e.options,
              o = e.canvas;
            "auto" === t && (t = f(o)),
              (n.pixelRatio = t),
              o.setAttribute("data-pixel-ratio", t),
              (o.width = n.width * t),
              (o.height = n.height * t),
              (o.style.width = n.width + "px"),
              (o.style.height = n.height + "px");
          }),
          (o.setSize = function (e, t, n) {
            (e.options.width = t),
              (e.options.height = n),
              (e.bounds.max.x = e.bounds.min.x + t),
              (e.bounds.max.y = e.bounds.min.y + n),
              1 !== e.options.pixelRatio
                ? o.setPixelRatio(e, e.options.pixelRatio)
                : ((e.canvas.width = t), (e.canvas.height = n));
          }),
          (o.lookAt = function (e, t, n, o) {
            (o = void 0 === o || o),
              (t = r.isArray(t) ? t : [t]),
              (n = n || { x: 0, y: 0 });
            for (
              var i = {
                  min: { x: 1 / 0, y: 1 / 0 },
                  max: { x: -1 / 0, y: -1 / 0 },
                },
                a = 0;
              a < t.length;
              a += 1
            ) {
              var s = t[a],
                l = s.bounds ? s.bounds.min : s.min || s.position || s,
                c = s.bounds ? s.bounds.max : s.max || s.position || s;
              l &&
                c &&
                (l.x < i.min.x && (i.min.x = l.x),
                c.x > i.max.x && (i.max.x = c.x),
                l.y < i.min.y && (i.min.y = l.y),
                c.y > i.max.y && (i.max.y = c.y));
            }
            var d = i.max.x - i.min.x + 2 * n.x,
              p = i.max.y - i.min.y + 2 * n.y,
              f = e.canvas.height,
              v = e.canvas.width / f,
              m = d / p,
              y = 1,
              g = 1;
            m > v ? (g = m / v) : (y = v / m),
              (e.options.hasBounds = !0),
              (e.bounds.min.x = i.min.x),
              (e.bounds.max.x = i.min.x + d * y),
              (e.bounds.min.y = i.min.y),
              (e.bounds.max.y = i.min.y + p * g),
              o &&
                ((e.bounds.min.x += 0.5 * d - d * y * 0.5),
                (e.bounds.max.x += 0.5 * d - d * y * 0.5),
                (e.bounds.min.y += 0.5 * p - p * g * 0.5),
                (e.bounds.max.y += 0.5 * p - p * g * 0.5)),
              (e.bounds.min.x -= n.x),
              (e.bounds.max.x -= n.x),
              (e.bounds.min.y -= n.y),
              (e.bounds.max.y -= n.y),
              e.mouse &&
                (u.setScale(e.mouse, {
                  x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                  y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height,
                }),
                u.setOffset(e.mouse, e.bounds.min));
          }),
          (o.startViewTransform = function (e) {
            var t = e.bounds.max.x - e.bounds.min.x,
              n = e.bounds.max.y - e.bounds.min.y,
              o = t / e.options.width,
              i = n / e.options.height;
            e.context.setTransform(
              e.options.pixelRatio / o,
              0,
              0,
              e.options.pixelRatio / i,
              0,
              0
            ),
              e.context.translate(-e.bounds.min.x, -e.bounds.min.y);
          }),
          (o.endViewTransform = function (e) {
            e.context.setTransform(
              e.options.pixelRatio,
              0,
              0,
              e.options.pixelRatio,
              0,
              0
            );
          }),
          (o.world = function (e, t) {
            var n,
              i = r.now(),
              d = e.engine,
              p = d.world,
              f = e.canvas,
              v = e.context,
              y = e.options,
              g = e.timing,
              x = a.allBodies(p),
              h = a.allConstraints(p),
              b = y.wireframes ? y.wireframeBackground : y.background,
              S = [],
              w = [],
              A = { timestamp: d.timing.timestamp };
            if (
              (l.trigger(e, "beforeRender", A),
              e.currentBackground !== b && m(e, b),
              (v.globalCompositeOperation = "source-in"),
              (v.fillStyle = "transparent"),
              v.fillRect(0, 0, f.width, f.height),
              (v.globalCompositeOperation = "source-over"),
              y.hasBounds)
            ) {
              for (n = 0; n < x.length; n++) {
                var P = x[n];
                s.overlaps(P.bounds, e.bounds) && S.push(P);
              }
              for (n = 0; n < h.length; n++) {
                var B = h[n],
                  M = B.bodyA,
                  _ = B.bodyB,
                  C = B.pointA,
                  k = B.pointB;
                M && (C = c.add(M.position, B.pointA)),
                  _ && (k = c.add(_.position, B.pointB)),
                  C &&
                    k &&
                    (s.contains(e.bounds, C) || s.contains(e.bounds, k)) &&
                    w.push(B);
              }
              o.startViewTransform(e),
                e.mouse &&
                  (u.setScale(e.mouse, {
                    x: (e.bounds.max.x - e.bounds.min.x) / e.options.width,
                    y: (e.bounds.max.y - e.bounds.min.y) / e.options.height,
                  }),
                  u.setOffset(e.mouse, e.bounds.min));
            } else
              (w = h),
                (S = x),
                1 !== e.options.pixelRatio &&
                  e.context.setTransform(
                    e.options.pixelRatio,
                    0,
                    0,
                    e.options.pixelRatio,
                    0,
                    0
                  );
            !y.wireframes || (d.enableSleeping && y.showSleeping)
              ? o.bodies(e, S, v)
              : (y.showConvexHulls && o.bodyConvexHulls(e, S, v),
                o.bodyWireframes(e, S, v)),
              y.showBounds && o.bodyBounds(e, S, v),
              (y.showAxes || y.showAngleIndicator) && o.bodyAxes(e, S, v),
              y.showPositions && o.bodyPositions(e, S, v),
              y.showVelocity && o.bodyVelocity(e, S, v),
              y.showIds && o.bodyIds(e, S, v),
              y.showSeparations && o.separations(e, d.pairs.list, v),
              y.showCollisions && o.collisions(e, d.pairs.list, v),
              y.showVertexNumbers && o.vertexNumbers(e, S, v),
              y.showMousePosition && o.mousePosition(e, e.mouse, v),
              o.constraints(w, v),
              y.hasBounds && o.endViewTransform(e),
              l.trigger(e, "afterRender", A),
              (g.lastElapsed = r.now() - i);
          }),
          (o.stats = function (e, t, n) {
            for (
              var o = e.engine,
                i = o.world,
                r = a.allBodies(i),
                s = 0,
                l = 0,
                c = 0;
              c < r.length;
              c += 1
            )
              s += r[c].parts.length;
            var u = {
              Part: s,
              Body: r.length,
              Cons: a.allConstraints(i).length,
              Comp: a.allComposites(i).length,
              Pair: o.pairs.list.length,
            };
            for (var d in ((t.fillStyle = "#0e0f19"),
            t.fillRect(l, 0, 302.5, 44),
            (t.font = "12px Arial"),
            (t.textBaseline = "top"),
            (t.textAlign = "right"),
            u)) {
              var p = u[d];
              (t.fillStyle = "#aaa"),
                t.fillText(d, l + 55, 8),
                (t.fillStyle = "#eee"),
                t.fillText(p, l + 55, 26),
                (l += 55);
            }
          }),
          (o.performance = function (e, t) {
            var n = e.engine,
              i = e.timing,
              a = i.deltaHistory,
              s = i.elapsedHistory,
              l = i.timestampElapsedHistory,
              c = i.engineDeltaHistory,
              u = i.engineUpdatesHistory,
              p = i.engineElapsedHistory,
              f = n.timing.lastUpdatesPerFrame,
              v = n.timing.lastDelta,
              m = d(a),
              y = d(s),
              g = d(c),
              x = d(u),
              h = d(p),
              b = d(l) / m || 0,
              S = Math.round(m / v),
              w = 1e3 / m || 0,
              A = 10,
              P = 69;
            (t.fillStyle = "#0e0f19"),
              t.fillRect(0, 50, 442, 34),
              o.status(
                t,
                A,
                P,
                60,
                4,
                a.length,
                Math.round(w) + " fps",
                w / o._goodFps,
                function (e) {
                  return a[e] / m - 1;
                }
              ),
              o.status(
                t,
                82,
                P,
                60,
                4,
                c.length,
                v.toFixed(2) + " dt",
                o._goodDelta / v,
                function (e) {
                  return c[e] / g - 1;
                }
              ),
              o.status(
                t,
                154,
                P,
                60,
                4,
                u.length,
                f + " upf",
                Math.pow(r.clamp(x / S || 1, 0, 1), 4),
                function (e) {
                  return u[e] / x - 1;
                }
              ),
              o.status(
                t,
                226,
                P,
                60,
                4,
                p.length,
                h.toFixed(2) + " ut",
                1 - (f * h) / o._goodFps,
                function (e) {
                  return p[e] / h - 1;
                }
              ),
              o.status(
                t,
                298,
                P,
                60,
                4,
                s.length,
                y.toFixed(2) + " rt",
                1 - y / o._goodFps,
                function (e) {
                  return s[e] / y - 1;
                }
              ),
              o.status(
                t,
                370,
                P,
                60,
                4,
                l.length,
                b.toFixed(2) + " x",
                b * b * b,
                function (e) {
                  return (l[e] / a[e] / b || 0) - 1;
                }
              );
          }),
          (o.status = function (e, t, n, o, i, a, s, l, c) {
            (e.strokeStyle = "#888"),
              (e.fillStyle = "#444"),
              (e.lineWidth = 1),
              e.fillRect(t, n + 7, o, 1),
              e.beginPath(),
              e.moveTo(t, n + 7 - i * r.clamp(0.4 * c(0), -2, 2));
            for (var u = 0; u < o; u += 1)
              e.lineTo(
                t + u,
                n + 7 - (u < a ? i * r.clamp(0.4 * c(u), -2, 2) : 0)
              );
            e.stroke(),
              (e.fillStyle =
                "hsl(" + r.clamp(25 + 95 * l, 0, 120) + ",100%,60%)"),
              e.fillRect(t, n - 7, 4, 4),
              (e.font = "12px Arial"),
              (e.textBaseline = "middle"),
              (e.textAlign = "right"),
              (e.fillStyle = "#eee"),
              e.fillText(s, t + o, n - 5);
          }),
          (o.constraints = function (e, t) {
            for (var n = t, o = 0; o < e.length; o++) {
              var i = e[o];
              if (i.render.visible && i.pointA && i.pointB) {
                var a,
                  s,
                  l = i.bodyA,
                  u = i.bodyB;
                if (
                  ((a = l ? c.add(l.position, i.pointA) : i.pointA),
                  "pin" === i.render.type)
                )
                  n.beginPath(),
                    n.arc(a.x, a.y, 3, 0, 2 * Math.PI),
                    n.closePath();
                else {
                  if (
                    ((s = u ? c.add(u.position, i.pointB) : i.pointB),
                    n.beginPath(),
                    n.moveTo(a.x, a.y),
                    "spring" === i.render.type)
                  )
                    for (
                      var d,
                        p = c.sub(s, a),
                        f = c.perp(c.normalise(p)),
                        v = Math.ceil(r.clamp(i.length / 5, 12, 20)),
                        m = 1;
                      m < v;
                      m += 1
                    )
                      (d = m % 2 == 0 ? 1 : -1),
                        n.lineTo(
                          a.x + p.x * (m / v) + f.x * d * 4,
                          a.y + p.y * (m / v) + f.y * d * 4
                        );
                  n.lineTo(s.x, s.y);
                }
                i.render.lineWidth &&
                  ((n.lineWidth = i.render.lineWidth),
                  (n.strokeStyle = i.render.strokeStyle),
                  n.stroke()),
                  i.render.anchors &&
                    ((n.fillStyle = i.render.strokeStyle),
                    n.beginPath(),
                    n.arc(a.x, a.y, 3, 0, 2 * Math.PI),
                    n.arc(s.x, s.y, 3, 0, 2 * Math.PI),
                    n.closePath(),
                    n.fill());
              }
            }
          }),
          (o.bodies = function (e, t, n) {
            var o,
              i,
              r,
              a,
              s = n,
              l = (e.engine, e.options),
              c = l.showInternalEdges || !l.wireframes;
            for (r = 0; r < t.length; r++)
              if ((o = t[r]).render.visible)
                for (a = o.parts.length > 1 ? 1 : 0; a < o.parts.length; a++)
                  if ((i = o.parts[a]).render.visible) {
                    if (
                      (l.showSleeping && o.isSleeping
                        ? (s.globalAlpha = 0.5 * i.render.opacity)
                        : 1 !== i.render.opacity &&
                          (s.globalAlpha = i.render.opacity),
                      i.render.sprite &&
                        i.render.sprite.texture &&
                        !l.wireframes)
                    ) {
                      var u = i.render.sprite,
                        d = v(e, u.texture);
                      s.translate(i.position.x, i.position.y),
                        s.rotate(i.angle),
                        s.drawImage(
                          d,
                          d.width * -u.xOffset * u.xScale,
                          d.height * -u.yOffset * u.yScale,
                          d.width * u.xScale,
                          d.height * u.yScale
                        ),
                        s.rotate(-i.angle),
                        s.translate(-i.position.x, -i.position.y);
                    } else {
                      if (i.circleRadius)
                        s.beginPath(),
                          s.arc(
                            i.position.x,
                            i.position.y,
                            i.circleRadius,
                            0,
                            2 * Math.PI
                          );
                      else {
                        s.beginPath(),
                          s.moveTo(i.vertices[0].x, i.vertices[0].y);
                        for (var p = 1; p < i.vertices.length; p++)
                          !i.vertices[p - 1].isInternal || c
                            ? s.lineTo(i.vertices[p].x, i.vertices[p].y)
                            : s.moveTo(i.vertices[p].x, i.vertices[p].y),
                            i.vertices[p].isInternal &&
                              !c &&
                              s.moveTo(
                                i.vertices[(p + 1) % i.vertices.length].x,
                                i.vertices[(p + 1) % i.vertices.length].y
                              );
                        s.lineTo(i.vertices[0].x, i.vertices[0].y),
                          s.closePath();
                      }
                      l.wireframes
                        ? ((s.lineWidth = 1),
                          (s.strokeStyle = e.options.wireframeStrokeStyle),
                          s.stroke())
                        : ((s.fillStyle = i.render.fillStyle),
                          i.render.lineWidth &&
                            ((s.lineWidth = i.render.lineWidth),
                            (s.strokeStyle = i.render.strokeStyle),
                            s.stroke()),
                          s.fill());
                    }
                    s.globalAlpha = 1;
                  }
          }),
          (o.bodyWireframes = function (e, t, n) {
            var o,
              i,
              r,
              a,
              s,
              l = n,
              c = e.options.showInternalEdges;
            for (l.beginPath(), r = 0; r < t.length; r++)
              if ((o = t[r]).render.visible)
                for (s = o.parts.length > 1 ? 1 : 0; s < o.parts.length; s++) {
                  for (
                    i = o.parts[s],
                      l.moveTo(i.vertices[0].x, i.vertices[0].y),
                      a = 1;
                    a < i.vertices.length;
                    a++
                  )
                    !i.vertices[a - 1].isInternal || c
                      ? l.lineTo(i.vertices[a].x, i.vertices[a].y)
                      : l.moveTo(i.vertices[a].x, i.vertices[a].y),
                      i.vertices[a].isInternal &&
                        !c &&
                        l.moveTo(
                          i.vertices[(a + 1) % i.vertices.length].x,
                          i.vertices[(a + 1) % i.vertices.length].y
                        );
                  l.lineTo(i.vertices[0].x, i.vertices[0].y);
                }
            (l.lineWidth = 1),
              (l.strokeStyle = e.options.wireframeStrokeStyle),
              l.stroke();
          }),
          (o.bodyConvexHulls = function (e, t, n) {
            var o,
              i,
              r,
              a = n;
            for (a.beginPath(), i = 0; i < t.length; i++)
              if ((o = t[i]).render.visible && 1 !== o.parts.length) {
                for (
                  a.moveTo(o.vertices[0].x, o.vertices[0].y), r = 1;
                  r < o.vertices.length;
                  r++
                )
                  a.lineTo(o.vertices[r].x, o.vertices[r].y);
                a.lineTo(o.vertices[0].x, o.vertices[0].y);
              }
            (a.lineWidth = 1),
              (a.strokeStyle = "rgba(255,255,255,0.2)"),
              a.stroke();
          }),
          (o.vertexNumbers = function (e, t, n) {
            var o,
              i,
              r,
              a = n;
            for (o = 0; o < t.length; o++) {
              var s = t[o].parts;
              for (r = s.length > 1 ? 1 : 0; r < s.length; r++) {
                var l = s[r];
                for (i = 0; i < l.vertices.length; i++)
                  (a.fillStyle = "rgba(255,255,255,0.2)"),
                    a.fillText(
                      o + "_" + i,
                      l.position.x + 0.8 * (l.vertices[i].x - l.position.x),
                      l.position.y + 0.8 * (l.vertices[i].y - l.position.y)
                    );
              }
            }
          }),
          (o.mousePosition = function (e, t, n) {
            var o = n;
            (o.fillStyle = "rgba(255,255,255,0.8)"),
              o.fillText(
                t.position.x + "  " + t.position.y,
                t.position.x + 5,
                t.position.y - 5
              );
          }),
          (o.bodyBounds = function (e, t, n) {
            var o = n,
              i = (e.engine, e.options);
            o.beginPath();
            for (var r = 0; r < t.length; r++) {
              if (t[r].render.visible)
                for (
                  var a = t[r].parts, s = a.length > 1 ? 1 : 0;
                  s < a.length;
                  s++
                ) {
                  var l = a[s];
                  o.rect(
                    l.bounds.min.x,
                    l.bounds.min.y,
                    l.bounds.max.x - l.bounds.min.x,
                    l.bounds.max.y - l.bounds.min.y
                  );
                }
            }
            i.wireframes
              ? (o.strokeStyle = "rgba(255,255,255,0.08)")
              : (o.strokeStyle = "rgba(0,0,0,0.1)"),
              (o.lineWidth = 1),
              o.stroke();
          }),
          (o.bodyAxes = function (e, t, n) {
            var o,
              i,
              r,
              a,
              s = n,
              l = (e.engine, e.options);
            for (s.beginPath(), i = 0; i < t.length; i++) {
              var c = t[i],
                u = c.parts;
              if (c.render.visible)
                if (l.showAxes)
                  for (r = u.length > 1 ? 1 : 0; r < u.length; r++)
                    for (o = u[r], a = 0; a < o.axes.length; a++) {
                      var d = o.axes[a];
                      s.moveTo(o.position.x, o.position.y),
                        s.lineTo(
                          o.position.x + 20 * d.x,
                          o.position.y + 20 * d.y
                        );
                    }
                else
                  for (r = u.length > 1 ? 1 : 0; r < u.length; r++)
                    for (o = u[r], a = 0; a < o.axes.length; a++)
                      s.moveTo(o.position.x, o.position.y),
                        s.lineTo(
                          (o.vertices[0].x +
                            o.vertices[o.vertices.length - 1].x) /
                            2,
                          (o.vertices[0].y +
                            o.vertices[o.vertices.length - 1].y) /
                            2
                        );
            }
            l.wireframes
              ? ((s.strokeStyle = "indianred"), (s.lineWidth = 1))
              : ((s.strokeStyle = "rgba(255, 255, 255, 0.4)"),
                (s.globalCompositeOperation = "overlay"),
                (s.lineWidth = 2)),
              s.stroke(),
              (s.globalCompositeOperation = "source-over");
          }),
          (o.bodyPositions = function (e, t, n) {
            var o,
              i,
              r,
              a,
              s = n,
              l = (e.engine, e.options);
            for (s.beginPath(), r = 0; r < t.length; r++)
              if ((o = t[r]).render.visible)
                for (a = 0; a < o.parts.length; a++)
                  (i = o.parts[a]),
                    s.arc(i.position.x, i.position.y, 3, 0, 2 * Math.PI, !1),
                    s.closePath();
            for (
              l.wireframes
                ? (s.fillStyle = "indianred")
                : (s.fillStyle = "rgba(0,0,0,0.5)"),
                s.fill(),
                s.beginPath(),
                r = 0;
              r < t.length;
              r++
            )
              (o = t[r]).render.visible &&
                (s.arc(
                  o.positionPrev.x,
                  o.positionPrev.y,
                  2,
                  0,
                  2 * Math.PI,
                  !1
                ),
                s.closePath());
            (s.fillStyle = "rgba(255,165,0,0.8)"), s.fill();
          }),
          (o.bodyVelocity = function (e, t, n) {
            var o = n;
            o.beginPath();
            for (var r = 0; r < t.length; r++) {
              var a = t[r];
              if (a.render.visible) {
                var s = i.getVelocity(a);
                o.moveTo(a.position.x, a.position.y),
                  o.lineTo(a.position.x + s.x, a.position.y + s.y);
              }
            }
            (o.lineWidth = 3), (o.strokeStyle = "cornflowerblue"), o.stroke();
          }),
          (o.bodyIds = function (e, t, n) {
            var o,
              i,
              r = n;
            for (o = 0; o < t.length; o++)
              if (t[o].render.visible) {
                var a = t[o].parts;
                for (i = a.length > 1 ? 1 : 0; i < a.length; i++) {
                  var s = a[i];
                  (r.font = "12px Arial"),
                    (r.fillStyle = "rgba(255,255,255,0.5)"),
                    r.fillText(s.id, s.position.x + 10, s.position.y - 10);
                }
              }
          }),
          (o.collisions = function (e, t, n) {
            var o,
              i,
              r,
              a,
              s = n,
              l = e.options;
            for (s.beginPath(), r = 0; r < t.length; r++)
              if ((o = t[r]).isActive)
                for (i = o.collision, a = 0; a < o.contactCount; a++) {
                  var c = o.contacts[a].vertex;
                  s.rect(c.x - 1.5, c.y - 1.5, 3.5, 3.5);
                }
            for (
              l.wireframes
                ? (s.fillStyle = "rgba(255,255,255,0.7)")
                : (s.fillStyle = "orange"),
                s.fill(),
                s.beginPath(),
                r = 0;
              r < t.length;
              r++
            )
              if (
                (o = t[r]).isActive &&
                ((i = o.collision), o.contactCount > 0)
              ) {
                var u = o.contacts[0].vertex.x,
                  d = o.contacts[0].vertex.y;
                2 === o.contactCount &&
                  ((u = (o.contacts[0].vertex.x + o.contacts[1].vertex.x) / 2),
                  (d = (o.contacts[0].vertex.y + o.contacts[1].vertex.y) / 2)),
                  i.bodyB === i.supports[0].body || !0 === i.bodyA.isStatic
                    ? s.moveTo(u - 8 * i.normal.x, d - 8 * i.normal.y)
                    : s.moveTo(u + 8 * i.normal.x, d + 8 * i.normal.y),
                  s.lineTo(u, d);
              }
            l.wireframes
              ? (s.strokeStyle = "rgba(255,165,0,0.7)")
              : (s.strokeStyle = "orange"),
              (s.lineWidth = 1),
              s.stroke();
          }),
          (o.separations = function (e, t, n) {
            var o,
              i,
              r,
              a,
              s,
              l = n,
              c = e.options;
            for (l.beginPath(), s = 0; s < t.length; s++)
              if ((o = t[s]).isActive) {
                r = (i = o.collision).bodyA;
                var u = 1;
                (a = i.bodyB).isStatic || r.isStatic || (u = 0.5),
                  a.isStatic && (u = 0),
                  l.moveTo(a.position.x, a.position.y),
                  l.lineTo(
                    a.position.x - i.penetration.x * u,
                    a.position.y - i.penetration.y * u
                  ),
                  (u = 1),
                  a.isStatic || r.isStatic || (u = 0.5),
                  r.isStatic && (u = 0),
                  l.moveTo(r.position.x, r.position.y),
                  l.lineTo(
                    r.position.x + i.penetration.x * u,
                    r.position.y + i.penetration.y * u
                  );
              }
            c.wireframes
              ? (l.strokeStyle = "rgba(255,165,0,0.5)")
              : (l.strokeStyle = "orange"),
              l.stroke();
          }),
          (o.inspector = function (e, t) {
            e.engine;
            var n,
              o = e.selected,
              i = e.render,
              r = i.options;
            if (r.hasBounds) {
              var a = i.bounds.max.x - i.bounds.min.x,
                s = i.bounds.max.y - i.bounds.min.y,
                l = a / i.options.width,
                c = s / i.options.height;
              t.scale(1 / l, 1 / c),
                t.translate(-i.bounds.min.x, -i.bounds.min.y);
            }
            for (var u = 0; u < o.length; u++) {
              var d = o[u].data;
              switch (
                (t.translate(0.5, 0.5),
                (t.lineWidth = 1),
                (t.strokeStyle = "rgba(255,165,0,0.9)"),
                t.setLineDash([1, 2]),
                d.type)
              ) {
                case "body":
                  (n = d.bounds),
                    t.beginPath(),
                    t.rect(
                      Math.floor(n.min.x - 3),
                      Math.floor(n.min.y - 3),
                      Math.floor(n.max.x - n.min.x + 6),
                      Math.floor(n.max.y - n.min.y + 6)
                    ),
                    t.closePath(),
                    t.stroke();
                  break;
                case "constraint":
                  var p = d.pointA;
                  d.bodyA && (p = d.pointB),
                    t.beginPath(),
                    t.arc(p.x, p.y, 10, 0, 2 * Math.PI),
                    t.closePath(),
                    t.stroke();
              }
              t.setLineDash([]), t.translate(-0.5, -0.5);
            }
            null !== e.selectStart &&
              (t.translate(0.5, 0.5),
              (t.lineWidth = 1),
              (t.strokeStyle = "rgba(255,165,0,0.6)"),
              (t.fillStyle = "rgba(255,165,0,0.1)"),
              (n = e.selectBounds),
              t.beginPath(),
              t.rect(
                Math.floor(n.min.x),
                Math.floor(n.min.y),
                Math.floor(n.max.x - n.min.x),
                Math.floor(n.max.y - n.min.y)
              ),
              t.closePath(),
              t.stroke(),
              t.fill(),
              t.translate(-0.5, -0.5)),
              r.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0);
          });
        var n = function (e, t) {
            var n = e.engine,
              i = e.timing,
              r = i.historySize,
              a = n.timing.timestamp;
            (i.delta = t - i.lastTime || o._goodDelta),
              (i.lastTime = t),
              (i.timestampElapsed = a - i.lastTimestamp || 0),
              (i.lastTimestamp = a),
              i.deltaHistory.unshift(i.delta),
              (i.deltaHistory.length = Math.min(i.deltaHistory.length, r)),
              i.engineDeltaHistory.unshift(n.timing.lastDelta),
              (i.engineDeltaHistory.length = Math.min(
                i.engineDeltaHistory.length,
                r
              )),
              i.timestampElapsedHistory.unshift(i.timestampElapsed),
              (i.timestampElapsedHistory.length = Math.min(
                i.timestampElapsedHistory.length,
                r
              )),
              i.engineUpdatesHistory.unshift(n.timing.lastUpdatesPerFrame),
              (i.engineUpdatesHistory.length = Math.min(
                i.engineUpdatesHistory.length,
                r
              )),
              i.engineElapsedHistory.unshift(n.timing.lastElapsed),
              (i.engineElapsedHistory.length = Math.min(
                i.engineElapsedHistory.length,
                r
              )),
              i.elapsedHistory.unshift(i.lastElapsed),
              (i.elapsedHistory.length = Math.min(i.elapsedHistory.length, r));
          },
          d = function (e) {
            for (var t = 0, n = 0; n < e.length; n += 1) t += e[n];
            return t / e.length || 0;
          },
          p = function (e, t) {
            var n = document.createElement("canvas");
            return (
              (n.width = e),
              (n.height = t),
              (n.oncontextmenu = function () {
                return !1;
              }),
              (n.onselectstart = function () {
                return !1;
              }),
              n
            );
          },
          f = function (e) {
            var t = e.getContext("2d");
            return (
              (window.devicePixelRatio || 1) /
              (t.webkitBackingStorePixelRatio ||
                t.mozBackingStorePixelRatio ||
                t.msBackingStorePixelRatio ||
                t.oBackingStorePixelRatio ||
                t.backingStorePixelRatio ||
                1)
            );
          },
          v = function (e, t) {
            var n = e.textures[t];
            return n || (((n = e.textures[t] = new Image()).src = t), n);
          },
          m = function (e, t) {
            var n = t;
            /(jpg|gif|png)$/.test(t) && (n = "url(" + t + ")"),
              (e.canvas.style.background = n),
              (e.canvas.style.backgroundSize = "contain"),
              (e.currentBackground = t);
          };
      })();
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(5),
        r = n(17),
        a = n(0);
      !(function () {
        (o._maxFrameDelta = 1e3 / 15),
          (o._frameDeltaFallback = 1e3 / 60),
          (o._timeBufferMargin = 1.5),
          (o._elapsedNextEstimate = 1),
          (o._smoothingLowerBound = 0.1),
          (o._smoothingUpperBound = 0.9),
          (o.create = function (e) {
            var t = a.extend(
              {
                delta: 1e3 / 60,
                frameDelta: null,
                frameDeltaSmoothing: !0,
                frameDeltaSnapping: !0,
                frameDeltaHistory: [],
                frameDeltaHistorySize: 100,
                frameRequestId: null,
                timeBuffer: 0,
                timeLastTick: null,
                maxUpdates: null,
                maxFrameTime: 1e3 / 30,
                lastUpdatesDeferred: 0,
                enabled: !0,
              },
              e
            );
            return (t.fps = 0), t;
          }),
          (o.run = function (e, t) {
            return (
              (e.timeBuffer = o._frameDeltaFallback),
              (function n(i) {
                (e.frameRequestId = o._onNextFrame(e, n)),
                  i && e.enabled && o.tick(e, t, i);
              })(),
              e
            );
          }),
          (o.tick = function (t, n, s) {
            var l = a.now(),
              c = t.delta,
              u = 0,
              d = s - t.timeLastTick;
            if (
              ((!d ||
                !t.timeLastTick ||
                d > Math.max(o._maxFrameDelta, t.maxFrameTime)) &&
                (d = t.frameDelta || o._frameDeltaFallback),
              t.frameDeltaSmoothing)
            ) {
              t.frameDeltaHistory.push(d),
                (t.frameDeltaHistory = t.frameDeltaHistory.slice(
                  -t.frameDeltaHistorySize
                ));
              var p = t.frameDeltaHistory.slice(0).sort(),
                f = t.frameDeltaHistory.slice(
                  p.length * o._smoothingLowerBound,
                  p.length * o._smoothingUpperBound
                );
              d = e(f) || d;
            }
            t.frameDeltaSnapping && (d = 1e3 / Math.round(1e3 / d)),
              (t.frameDelta = d),
              (t.timeLastTick = s),
              (t.timeBuffer += t.frameDelta),
              (t.timeBuffer = a.clamp(
                t.timeBuffer,
                0,
                t.frameDelta + c * o._timeBufferMargin
              )),
              (t.lastUpdatesDeferred = 0);
            var v = t.maxUpdates || Math.ceil(t.maxFrameTime / c),
              m = { timestamp: n.timing.timestamp };
            i.trigger(t, "beforeTick", m), i.trigger(t, "tick", m);
            for (
              var y = a.now();
              c > 0 && t.timeBuffer >= c * o._timeBufferMargin;

            ) {
              i.trigger(t, "beforeUpdate", m),
                r.update(n, c),
                i.trigger(t, "afterUpdate", m),
                (t.timeBuffer -= c),
                (u += 1);
              var g = a.now() - l,
                x = a.now() - y,
                h = g + (o._elapsedNextEstimate * x) / u;
              if (u >= v || h > t.maxFrameTime) {
                t.lastUpdatesDeferred = Math.round(
                  Math.max(0, t.timeBuffer / c - o._timeBufferMargin)
                );
                break;
              }
            }
            (n.timing.lastUpdatesPerFrame = u),
              i.trigger(t, "afterTick", m),
              t.frameDeltaHistory.length >= 100 &&
                (t.lastUpdatesDeferred && Math.round(t.frameDelta / c) > v
                  ? a.warnOnce(
                      "Matter.Runner: runner reached runner.maxUpdates, see docs."
                    )
                  : t.lastUpdatesDeferred &&
                    a.warnOnce(
                      "Matter.Runner: runner reached runner.maxFrameTime, see docs."
                    ),
                void 0 !== t.isFixed &&
                  a.warnOnce(
                    "Matter.Runner: runner.isFixed is now redundant, see docs."
                  ),
                (t.deltaMin || t.deltaMax) &&
                  a.warnOnce(
                    "Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."
                  ),
                0 !== t.fps &&
                  a.warnOnce(
                    "Matter.Runner: runner.fps was replaced by runner.delta, see docs."
                  ));
          }),
          (o.stop = function (e) {
            o._cancelNextFrame(e);
          }),
          (o._onNextFrame = function (e, t) {
            if ("undefined" == typeof window || !window.requestAnimationFrame)
              throw new Error(
                "Matter.Runner: missing required global window.requestAnimationFrame."
              );
            return (
              (e.frameRequestId = window.requestAnimationFrame(t)),
              e.frameRequestId
            );
          }),
          (o._cancelNextFrame = function (e) {
            if ("undefined" == typeof window || !window.cancelAnimationFrame)
              throw new Error(
                "Matter.Runner: missing required global window.cancelAnimationFrame."
              );
            window.cancelAnimationFrame(e.frameRequestId);
          });
        var e = function (e) {
          for (var t = 0, n = e.length, o = 0; o < n; o += 1) t += e[o];
          return t / n || 0;
        };
      })();
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(8),
        r = n(0).deprecated;
      (o.collides = function (e, t) {
        return i.collides(e, t);
      }),
        r(o, "collides", "SAT.collides ➤ replaced by Collision.collides");
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      n(1);
      var i = n(0);
      (o.pathToVertices = function (e, t) {
        "undefined" == typeof window ||
          "SVGPathSeg" in window ||
          i.warn(
            "Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required."
          );
        var n,
          r,
          a,
          s,
          l,
          c,
          u,
          d,
          p,
          f,
          v,
          m = [],
          y = 0,
          g = 0,
          x = 0;
        t = t || 15;
        var h = function (e, t, n) {
            var o = n % 2 == 1 && n > 1;
            if (!p || e != p.x || t != p.y) {
              p && o ? ((f = p.x), (v = p.y)) : ((f = 0), (v = 0));
              var i = { x: f + e, y: v + t };
              (!o && p) || (p = i), m.push(i), (g = f + e), (x = v + t);
            }
          },
          b = function (e) {
            var t = e.pathSegTypeAsLetter.toUpperCase();
            if ("Z" !== t) {
              switch (t) {
                case "M":
                case "L":
                case "T":
                case "C":
                case "S":
                case "Q":
                  (g = e.x), (x = e.y);
                  break;
                case "H":
                  g = e.x;
                  break;
                case "V":
                  x = e.y;
              }
              h(g, x, e.pathSegType);
            }
          };
        for (
          o._svgPathToAbsolute(e), a = e.getTotalLength(), c = [], n = 0;
          n < e.pathSegList.numberOfItems;
          n += 1
        )
          c.push(e.pathSegList.getItem(n));
        for (u = c.concat(); y < a; ) {
          if ((l = c[e.getPathSegAtLength(y)]) != d) {
            for (; u.length && u[0] != l; ) b(u.shift());
            d = l;
          }
          switch (l.pathSegTypeAsLetter.toUpperCase()) {
            case "C":
            case "T":
            case "S":
            case "Q":
            case "A":
              (s = e.getPointAtLength(y)), h(s.x, s.y, 0);
          }
          y += t;
        }
        for (n = 0, r = u.length; n < r; ++n) b(u[n]);
        return m;
      }),
        (o._svgPathToAbsolute = function (e) {
          for (
            var t,
              n,
              o,
              i,
              r,
              a,
              s = e.pathSegList,
              l = 0,
              c = 0,
              u = s.numberOfItems,
              d = 0;
            d < u;
            ++d
          ) {
            var p = s.getItem(d),
              f = p.pathSegTypeAsLetter;
            if (/[MLHVCSQTA]/.test(f))
              "x" in p && (l = p.x), "y" in p && (c = p.y);
            else
              switch (
                ("x1" in p && (o = l + p.x1),
                "x2" in p && (r = l + p.x2),
                "y1" in p && (i = c + p.y1),
                "y2" in p && (a = c + p.y2),
                "x" in p && (l += p.x),
                "y" in p && (c += p.y),
                f)
              ) {
                case "m":
                  s.replaceItem(e.createSVGPathSegMovetoAbs(l, c), d);
                  break;
                case "l":
                  s.replaceItem(e.createSVGPathSegLinetoAbs(l, c), d);
                  break;
                case "h":
                  s.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(l), d);
                  break;
                case "v":
                  s.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c), d);
                  break;
                case "c":
                  s.replaceItem(
                    e.createSVGPathSegCurvetoCubicAbs(l, c, o, i, r, a),
                    d
                  );
                  break;
                case "s":
                  s.replaceItem(
                    e.createSVGPathSegCurvetoCubicSmoothAbs(l, c, r, a),
                    d
                  );
                  break;
                case "q":
                  s.replaceItem(
                    e.createSVGPathSegCurvetoQuadraticAbs(l, c, o, i),
                    d
                  );
                  break;
                case "t":
                  s.replaceItem(
                    e.createSVGPathSegCurvetoQuadraticSmoothAbs(l, c),
                    d
                  );
                  break;
                case "a":
                  s.replaceItem(
                    e.createSVGPathSegArcAbs(
                      l,
                      c,
                      p.r1,
                      p.r2,
                      p.angle,
                      p.largeArcFlag,
                      p.sweepFlag
                    ),
                    d
                  );
                  break;
                case "z":
                case "Z":
                  (l = t), (c = n);
              }
            ("M" != f && "m" != f) || ((t = l), (n = c));
          }
        });
    },
    function (e, t, n) {
      var o = {};
      e.exports = o;
      var i = n(6);
      n(0);
      (o.create = i.create),
        (o.add = i.add),
        (o.remove = i.remove),
        (o.clear = i.clear),
        (o.addComposite = i.addComposite),
        (o.addBody = i.addBody),
        (o.addConstraint = i.addConstraint);
    },
  ]);
});
