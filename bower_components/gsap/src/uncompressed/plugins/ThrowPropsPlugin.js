/**
 * Created by arnold.krumins on 11/12/2014.
 */
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function(a, b, c, d) {
        var t, u, v, w, e = function() {
                a.call(this, "throwProps"), this._overwriteProps.length = 0
            },
            f = 999999999999999,
            g = 1e-10,
            h = !1,
            i = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1
            },
            j = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
            k = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
            l = function(a) {
                for (var b = [j, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107)], c = b.length; --c > -1;)
                    if (-1 !== a.indexOf(b[c])) return !0;
                return -1 !== (window ? window.location : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== a.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116))
            }(window ? window.location.host : ""),
            m = function(a, b, c, d) {
                for (var i, j, e = b.length, g = 0, h = f; --e > -1;) i = b[e], j = i - a, 0 > j && (j = -j), h > j && i >= d && c >= i && (g = e, h = j);
                return b[g]
            },
            n = function(a, b, c, d) {
                if ("auto" === a.end) return a;
                c = isNaN(c) ? f : c, d = isNaN(d) ? -f : d;
                var e = "function" == typeof a.end ? a.end(b) : a.end instanceof Array ? m(b, a.end, c, d) : Number(a.end);
                return e > c ? e = c : d > e && (e = d), {
                    max: e,
                    min: e,
                    unitFactor: a.unitFactor
                }
            },
            o = function(a, b, c) {
                for (var d in b) void 0 === a[d] && d !== c && (a[d] = b[d]);
                return a
            },
            p = e.calculateChange = function(a, d, e, f) {
                null == f && (f = .05);
                var g = d instanceof c ? d : d ? new c(d) : b.defaultEase;
                return e * f * a / g.getRatio(f)
            },
            q = e.calculateDuration = function(a, d, e, f, g) {
                g = g || .05;
                var h = f instanceof c ? f : f ? new c(f) : b.defaultEase;
                return Math.abs((d - a) * h.getRatio(g) / e / g)
            },
            r = e.calculateTweenDuration = function(a, f, i, j, k, l) {
                if ("string" == typeof a && (a = b.selector(a)), !a) return 0;
                null == i && (i = 10), null == j && (j = .2), null == k && (k = 1), a.length && (a = a[0] || a);
                var w, x, y, z, A, B, C, D, E, F, m = 0,
                    r = 9999999999,
                    s = f.throwProps || f,
                    t = f.ease instanceof c ? f.ease : f.ease ? new c(f.ease) : b.defaultEase,
                    u = isNaN(s.checkpoint) ? .05 : Number(s.checkpoint),
                    v = isNaN(s.resistance) ? e.defaultResistance : Number(s.resistance);
                for (w in s) "resistance" !== w && "checkpoint" !== w && "preventOvershoot" !== w && (x = s[w], "object" != typeof x && (E = E || d.getByTarget(a), E && E.isTrackingProp(w) ? x = "number" == typeof x ? {
                    velocity: x
                } : {
                    velocity: E.getVelocity(w)
                } : (z = Number(x) || 0, y = z * v > 0 ? z / v : z / -v)), "object" == typeof x && (void 0 !== x.velocity && "number" == typeof x.velocity ? z = Number(x.velocity) || 0 : (E = E || d.getByTarget(a), z = E && E.isTrackingProp(w) ? E.getVelocity(w) : 0), A = isNaN(x.resistance) ? v : Number(x.resistance), y = z * A > 0 ? z / A : z / -A, B = "function" == typeof a[w] ? a[w.indexOf("set") || "function" != typeof a["get" + w.substr(3)] ? w : "get" + w.substr(3)]() : a[w] || 0, C = B + p(z, t, y, u), void 0 !== x.end && (x = n(x, C, x.max, x.min), (l || h) && (s[w] = o(x, s[w], "end"))), void 0 !== x.max && C > Number(x.max) + g ? (F = x.unitFactor || e.defaultUnitFactors[w] || 1, D = B > x.max && x.min !== x.max || z * F > -15 && 45 > z * F ? j + .1 * (i - j) : q(B, x.max, z, t, u), r > D + k && (r = D + k)) : void 0 !== x.min && C < Number(x.min) - g && (F = x.unitFactor || e.defaultUnitFactors[w] || 1, D = B < x.min && x.min !== x.max || z * F > -45 && 15 > z * F ? j + .1 * (i - j) : q(B, x.min, z, t, u), r > D + k && (r = D + k)), D > m && (m = D)), y > m && (m = y));
                return m > r && (m = r), m > i ? i : j > m ? j : m
            },
            s = e.prototype = new a("throwProps");
        return s.constructor = e, e.version = "0.9.5", e.API = 2, e._autoCSS = !0, e.defaultResistance = 100, e.defaultUnitFactors = {
            time: 1e3,
            totalTime: 1e3
        }, e.track = function(a, b, c) {
            return d.track(a, b, c)
        }, e.untrack = function(a, b) {
            d.untrack(a, b)
        }, e.isTracking = function(a, b) {
            return d.isTracking(a, b)
        }, e.getVelocity = function(a, b) {
            var c = d.getByTarget(a);
            return c ? c.getVelocity(b) : 0 / 0
        }, e._cssRegister = function() {
            var a = (window.GreenSockGlobals || window).com.greensock.plugins.CSSPlugin;
            if (a) {
                var b = a._internals,
                    c = b._parseToProxy,
                    f = b._setPluginRatio,
                    g = b.CSSPropTween;
                b._registerComplexSpecialProp("throwProps", {
                    parser: function(a, b, h, j, k, l) {
                        l = new e;
                        var s, v, w, x, y, m = {},
                            n = {},
                            o = {},
                            p = {},
                            q = {},
                            r = {};
                        u = {};
                        for (w in b) "resistance" !== w && "preventOvershoot" !== w && (v = b[w], "object" == typeof v ? (void 0 !== v.velocity && "number" == typeof v.velocity ? m[w] = Number(v.velocity) || 0 : (y = y || d.getByTarget(a), m[w] = y && y.isTrackingProp(w) ? y.getVelocity(w) : 0), void 0 !== v.end && (p[w] = v.end), void 0 !== v.min && (n[w] = v.min), void 0 !== v.max && (o[w] = v.max), v.preventOvershoot && (r[w] = !0), void 0 !== v.resistance && (s = !0, q[w] = v.resistance)) : "number" == typeof v ? m[w] = v : (y = y || d.getByTarget(a), m[w] = y && y.isTrackingProp(w) ? y.getVelocity(w) : v || 0), i[w] && j._enableTransforms(2 === i[w]));
                        x = c(a, m, j, k, l), t = x.proxy, m = x.end;
                        for (w in t) u[w] = {
                            velocity: m[w],
                            min: n[w],
                            max: o[w],
                            end: p[w],
                            resistance: q[w],
                            preventOvershoot: r[w]
                        };
                        return null != b.resistance && (u.resistance = b.resistance), b.preventOvershoot && (u.preventOvershoot = !0), k = new g(a, "throwProps", 0, 0, x.pt, 2), k.plugin = l, k.setRatio = f, k.data = x, l._onInitTween(t, u, j._tween), k
                    }
                })
            }
        }, e.to = function(a, c, d, e, f) {
            c.throwProps || (c = {
                throwProps: c
            }), 0 === f && (c.throwProps.preventOvershoot = !0), h = !0;
            var g = new b(a, 1, c);
            return g.render(0, !0, !0), g.vars.css ? (g.duration(r(t, {
                throwProps: u,
                ease: c.ease
            }, d, e, f)), g._delay && !g.vars.immediateRender ? g.invalidate() : v._onInitTween(t, w, g), h = !1, g) : (g.kill(), g = new b(a, r(a, c, d, e, f), c), h = !1, g)
        }, s._onInitTween = function(a, b, c) {
            if (this.target = a, this._props = [], !l) return window.location.href = "http://" + j + k + "?plugin=" + this._propName, !1;
            v = this, w = b;
            var q, r, s, t, u, x, y, z, A, e = c._ease,
                f = isNaN(b.checkpoint) ? .05 : Number(b.checkpoint),
                g = c._duration,
                i = b.preventOvershoot,
                m = 0;
            for (q in b)
                if ("resistance" !== q && "checkpoint" !== q && "preventOvershoot" !== q) {
                    if (r = b[q], "number" == typeof r) u = Number(r) || 0;
                    else if ("object" != typeof r || isNaN(r.velocity)) {
                        if (A = A || d.getByTarget(a), !A || !A.isTrackingProp(q)) throw "ERROR: No velocity was defined in the throwProps tween of " + a + " property: " + q;
                        u = A.getVelocity(q)
                    } else u = Number(r.velocity);
                    x = p(u, e, g, f), z = 0, t = "function" == typeof a[q], s = t ? a[q.indexOf("set") || "function" != typeof a["get" + q.substr(3)] ? q : "get" + q.substr(3)]() : a[q], "object" == typeof r && (y = s + x, void 0 !== r.end && (r = n(r, y, r.max, r.min), h && (b[q] = o(r, b[q], "end"))), void 0 !== r.max && Number(r.max) < y ? i || r.preventOvershoot ? x = r.max - s : z = r.max - s - x : void 0 !== r.min && Number(r.min) > y && (i || r.preventOvershoot ? x = r.min - s : z = r.min - s - x)), this._props[m++] = {
                        p: q,
                        s: s,
                        c1: x,
                        c2: z,
                        f: t,
                        r: !1
                    }, this._overwriteProps[m] = q
                }
            return l
        }, s._kill = function(b) {
            for (var c = this._props.length; --c > -1;) null != b[this._props[c].p] && this._props.splice(c, 1);
            return a.prototype._kill.call(this, b)
        }, s._roundProps = function(a, b) {
            for (var c = this._props, d = c.length; --d > -1;)(a[c[d]] || a.throwProps) && (c[d].r = b)
        }, s.setRatio = function(a) {
            for (var c, d, b = this._props.length; --b > -1;) c = this._props[b], d = c.s + c.c1 * a + c.c2 * a * a, c.r && (d = Math.round(d)), c.f ? this.target[c.p](d) : this.target[c.p] = d
        }, a.activate([e]), e
    }, !0), window._gsDefine("utils.VelocityTracker", ["TweenLite"], function(a) {
        var b, c, d, e, f = /([A-Z])/g,
            g = {},
            h = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1
            },
            i = document.defaultView ? document.defaultView.getComputedStyle : function() {},
            j = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
            k = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
            l = function(a) {
                for (var b = [j, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107)], c = b.length; --c > -1;)
                    if (-1 !== a.indexOf(b[c])) return !0;
                return -1 !== (window ? window.location : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== a.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116))
            }(window ? window.location.host : ""),
            m = function(a, b, c) {
                var d = (a._gsTransform || g)[b];
                return d || 0 === d ? d : (a.style[b] ? d = a.style[b] : (c = c || i(a, null)) ? (a = c.getPropertyValue(b.replace(f, "-$1").toLowerCase()), d = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, d = c[b]), parseFloat(d) || 0)
            },
            n = a.ticker,
            o = function(a, b, c) {
                this.p = a, this.f = b, this.v1 = this.v2 = 0, this.t1 = this.t2 = n.time, this.css = !1, this.type = "", this._prev = null, c && (this._next = c, c._prev = this)
            },
            p = function() {
                var f, g, a = b,
                    c = n.time;
                if (c - d >= .03)
                    for (e = d, d = c; a;) {
                        for (g = a._firstVP; g;) f = g.css ? m(a.target, g.p) : g.f ? a.target[g.p]() : a.target[g.p], (f !== g.v1 || c - g.t1 > .15) && (g.v2 = g.v1, g.v1 = f, g.t2 = g.t1, g.t1 = c), g = g._next;
                        a = a._next
                    }
            },
            q = function(a) {
                this._lookup = {}, this.target = a, this.elem = a.style && a.nodeType ? !0 : !1, c || (n.addEventListener("tick", p, null, !1, -100), d = e = n.time, c = !0), b && (this._next = b, b._prev = this), b = this
            },
            r = q.getByTarget = function(a) {
                for (var c = b; c;) {
                    if (c.target === a) return c;
                    c = c._next
                }
            },
            s = q.prototype;
        return s.addProp = function(b, c) {
            if (!this._lookup[b]) {
                var d = this.target,
                    e = "function" == typeof d[b],
                    f = e ? this._altProp(b) : b,
                    g = this._firstVP;
                this._firstVP = this._lookup[b] = this._lookup[f] = g = new o(f !== b && 0 === b.indexOf("set") ? f : b, e, g), g.css = this.elem && (void 0 !== this.target.style[g.p] || h[g.p]), g.css && h[g.p] && !d._gsTransform && a.set(d, {
                    x: "+=0"
                }), g.type = c || g.css && 0 === b.indexOf("rotation") ? "deg" : "", g.v1 = g.v2 = g.css ? m(d, g.p) : e ? d[g.p]() : d[g.p]
            }
        }, s.removeProp = function(a) {
            var b = this._lookup[a];
            b && (b._prev ? b._prev._next = b._next : b === this._firstVP && (this._firstVP = b._next), b._next && (b._next._prev = b._prev), this._lookup[a] = 0, b.f && (this._lookup[this._altProp(a)] = 0))
        }, s.isTrackingProp = function(a) {
            return this._lookup[a] instanceof o
        }, s.getVelocity = function(a) {
            var d, e, f, b = this._lookup[a],
                c = this.target;
            if (!b) throw "The velocity of " + a + " is not being tracked.";
            return d = b.css ? m(c, b.p) : b.f ? c[b.p]() : c[b.p], e = d - b.v2, ("rad" === b.type || "deg" === b.type) && (f = "rad" === b.type ? 2 * Math.PI : 360, e %= f, e !== e % (f / 2) && (e = 0 > e ? e + f : e - f)), e / (n.time - b.t2)
        }, s._altProp = function(a) {
            var b = a.substr(0, 3),
                c = ("get" === b ? "set" : "set" === b ? "get" : b) + a.substr(3);
            return "function" == typeof this.target[c] ? c : a
        }, q.getByTarget = function(c) {
            var d = b;
            for ("string" == typeof c && (c = a.selector(c)), c.length && c !== window && c[0] && c[0].style && !c.nodeType && (c = c[0]); d;) {
                if (d.target === c) return d;
                d = d._next
            }
        }, q.track = function(a, b, c) {
            var d = r(a),
                e = b.split(","),
                f = e.length;
            for (c = (c || "").split(","), d || (d = new q(a)); --f > -1;) d.addProp(e[f], c[f] || c[0]);
            return d
        }, q.untrack = function(a, c) {
            var d = r(a),
                e = (c || "").split(","),
                f = e.length;
            if (d) {
                for (; --f > -1;) d.removeProp(e[f]);
                d._firstVP && c || (d._prev ? d._prev._next = d._next : d === b && (b = d._next), d._next && (d._next._prev = d._prev))
            }
        }, q.isTracking = function(a, b) {
            var c = r(a);
            return c ? !b && c._firstVP ? !0 : c.isTrackingProp(b) : !1
        }, l ? q : (window.location.href = "http://" + j + k + "?plugin=VelocityTracker", !1)
    }, !0)
}), window._gsDefine && window._gsQueue.pop()();