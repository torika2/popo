/* @preserve
 * Leaflet 1.7.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.L = {})
}(this, (function(t) {
    "use strict";

    function e(t) {
        for (var e, i, n = 1, o = arguments.length; n < o; n++)
            for (e in i = arguments[n]) t[e] = i[e];
        return t
    }
    var i = Object.create || function(t) {
        return n.prototype = t, new n
    };

    function n() {}

    function o(t, e) {
        var i = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
        var n = i.call(arguments, 2);
        return function() {
            return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
        }
    }
    var s = 0;

    function r(t) {
        return t._leaflet_id = t._leaflet_id || ++s, t._leaflet_id
    }

    function a(t, e, i) {
        var n, o, s = function() {
                n = !1, o && (r.apply(i, o), o = !1)
            },
            r = function() {
                n ? o = arguments : (t.apply(i, arguments), setTimeout(s, e), n = !0)
            };
        return r
    }

    function h(t, e, i) {
        var n = e[1],
            o = e[0],
            s = n - o;
        return t === n && i ? t : ((t - o) % s + s) % s + o
    }

    function l() {
        return !1
    }

    function u(t, e) {
        var i = Math.pow(10, void 0 === e ? 6 : e);
        return Math.round(t * i) / i
    }

    function c(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }

    function d(t) {
        return c(t).split(/\s+/)
    }

    function p(t, e) {
        for (var n in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? i(t.options) : {}), e) t.options[n] = e[n];
        return t.options
    }

    function _(t, e, i) {
        var n = [];
        for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
    }
    var m = /\{ *([\w_-]+) *\}/g;

    function f(t, e) {
        return t.replace(m, (function(t, i) {
            var n = e[i];
            if (void 0 === n) throw new Error("No value provided for variable " + t);
            return "function" == typeof n && (n = n(e)), n
        }))
    }
    var g = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    };

    function v(t, e) {
        for (var i = 0; i < t.length; i++)
            if (t[i] === e) return i;
        return -1
    }
    var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

    function x(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }
    var b = 0;

    function w(t) {
        var e = +new Date,
            i = Math.max(0, 16 - (e - b));
        return b = e + i, window.setTimeout(t, i)
    }
    var P = window.requestAnimationFrame || x("RequestAnimationFrame") || w,
        T = window.cancelAnimationFrame || x("CancelAnimationFrame") || x("CancelRequestAnimationFrame") || function(t) {
            window.clearTimeout(t)
        };

    function S(t, e, i) {
        if (!i || P !== w) return P.call(window, o(t, e));
        t.call(e)
    }

    function C(t) {
        t && T.call(window, t)
    }
    var M = {
        extend: e,
        create: i,
        bind: o,
        lastId: s,
        stamp: r,
        throttle: a,
        wrapNum: h,
        falseFn: l,
        formatNum: u,
        trim: c,
        splitWords: d,
        setOptions: p,
        getParamString: _,
        template: f,
        isArray: g,
        indexOf: v,
        emptyImageUrl: y,
        requestFn: P,
        cancelFn: T,
        requestAnimFrame: S,
        cancelAnimFrame: C
    };

    function A() {}
    A.extend = function(t) {
        function n() {
            this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
        }
        var o = n.__super__ = this.prototype,
            s = i(o);
        for (var r in (s.constructor = n).prototype = s, this) Object.prototype.hasOwnProperty.call(this, r) && "prototype" !== r && "__super__" !== r && (n[r] = this[r]);
        return t.statics && (e(n, t.statics), delete t.statics), t.includes && (function(t) {
            if ("undefined" != typeof L && L && L.Mixin) {
                t = g(t) ? t : [t];
                for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
            }
        }(t.includes), e.apply(null, [s].concat(t.includes)), delete t.includes), s.options && (t.options = e(i(s.options), t.options)), e(s, t), s._initHooks = [], s.callInitHooks = function() {
            if (!this._initHooksCalled) {
                o.callInitHooks && o.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, e = s._initHooks.length; t < e; t++) s._initHooks[t].call(this)
            }
        }, n
    }, A.include = function(t) {
        return e(this.prototype, t), this
    }, A.mergeOptions = function(t) {
        return e(this.prototype.options, t), this
    }, A.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1),
            i = "function" == typeof t ? t : function() {
                this[t].apply(this, e)
            };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this
    };
    var I = {
        on: function(t, e, i) {
            if ("object" == typeof t)
                for (var n in t) this._on(n, t[n], e);
            else
                for (var o = 0, s = (t = d(t)).length; o < s; o++) this._on(t[o], e, i);
            return this
        },
        off: function(t, e, i) {
            if (t)
                if ("object" == typeof t)
                    for (var n in t) this._off(n, t[n], e);
                else
                    for (var o = 0, s = (t = d(t)).length; o < s; o++) this._off(t[o], e, i);
            else delete this._events;
            return this
        },
        _on: function(t, e, i) {
            this._events = this._events || {};
            var n = this._events[t];
            n || (n = [], this._events[t] = n), i === this && (i = void 0);
            for (var o = {
                    fn: e,
                    ctx: i
                }, s = n, r = 0, a = s.length; r < a; r++)
                if (s[r].fn === e && s[r].ctx === i) return;
            s.push(o)
        },
        _off: function(t, e, i) {
            var n, o, s;
            if (this._events && (n = this._events[t]))
                if (e) {
                    if (i === this && (i = void 0), n)
                        for (o = 0, s = n.length; o < s; o++) {
                            var r = n[o];
                            if (r.ctx === i && r.fn === e) return r.fn = l, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
                        }
                } else {
                    for (o = 0, s = n.length; o < s; o++) n[o].fn = l;
                    delete this._events[t]
                }
        },
        fire: function(t, i, n) {
            if (!this.listens(t, n)) return this;
            var o = e({}, i, {
                type: t,
                target: this,
                sourceTarget: i && i.sourceTarget || this
            });
            if (this._events) {
                var s = this._events[t];
                if (s) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (var r = 0, a = s.length; r < a; r++) {
                        var h = s[r];
                        h.fn.call(h.ctx || this, o)
                    }
                    this._firingCount--
                }
            }
            return n && this._propagateEvent(o), this
        },
        listens: function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) return !0;
            if (e)
                for (var n in this._eventParents)
                    if (this._eventParents[n].listens(t, e)) return !0;
            return !1
        },
        once: function(t, e, i) {
            if ("object" == typeof t) {
                for (var n in t) this.once(n, t[n], e);
                return this
            }
            var s = o((function() {
                this.off(t, e, i).off(t, s, i)
            }), this);
            return this.on(t, e, i).on(t, s, i)
        },
        addEventParent: function(t) {
            return this._eventParents = this._eventParents || {}, this._eventParents[r(t)] = t, this
        },
        removeEventParent: function(t) {
            return this._eventParents && delete this._eventParents[r(t)], this
        },
        _propagateEvent: function(t) {
            for (var i in this._eventParents) this._eventParents[i].fire(t.type, e({
                layer: t.target,
                propagatedFrom: t.target
            }, t), !0)
        }
    };
    I.addEventListener = I.on, I.removeEventListener = I.clearAllEventListeners = I.off, I.addOneTimeEventListener = I.once, I.fireEvent = I.fire, I.hasEventListeners = I.listens;
    var z = A.extend(I);

    function k(t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
    }
    var E = Math.trunc || function(t) {
        return 0 < t ? Math.floor(t) : Math.ceil(t)
    };

    function Z(t, e, i) {
        return t instanceof k ? t : g(t) ? new k(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new k(t.x, t.y) : new k(t, e, i)
    }

    function B(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
    }

    function O(t, e) {
        return !t || t instanceof B ? t : new B(t, e)
    }

    function R(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
    }

    function D(t, e) {
        return t instanceof R ? t : new R(t, e)
    }

    function F(t, e, i) {
        if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, void 0 !== i && (this.alt = +i)
    }

    function N(t, e, i) {
        return t instanceof F ? t : g(t) && "object" != typeof t[0] ? 3 === t.length ? new F(t[0], t[1], t[2]) : 2 === t.length ? new F(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new F(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new F(t, e, i)
    }
    k.prototype = {
        clone: function() {
            return new k(this.x, this.y)
        },
        add: function(t) {
            return this.clone()._add(Z(t))
        },
        _add: function(t) {
            return this.x += t.x, this.y += t.y, this
        },
        subtract: function(t) {
            return this.clone()._subtract(Z(t))
        },
        _subtract: function(t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        divideBy: function(t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function(t) {
            return this.x /= t, this.y /= t, this
        },
        multiplyBy: function(t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function(t) {
            return this.x *= t, this.y *= t, this
        },
        scaleBy: function(t) {
            return new k(this.x * t.x, this.y * t.y)
        },
        unscaleBy: function(t) {
            return new k(this.x / t.x, this.y / t.y)
        },
        round: function() {
            return this.clone()._round()
        },
        _round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        floor: function() {
            return this.clone()._floor()
        },
        _floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function() {
            return this.clone()._ceil()
        },
        _ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        trunc: function() {
            return this.clone()._trunc()
        },
        _trunc: function() {
            return this.x = E(this.x), this.y = E(this.y), this
        },
        distanceTo: function(t) {
            var e = (t = Z(t)).x - this.x,
                i = t.y - this.y;
            return Math.sqrt(e * e + i * i)
        },
        equals: function(t) {
            return (t = Z(t)).x === this.x && t.y === this.y
        },
        contains: function(t) {
            return t = Z(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function() {
            return "Point(" + u(this.x) + ", " + u(this.y) + ")"
        }
    }, B.prototype = {
        extend: function(t) {
            return t = Z(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
        },
        getCenter: function(t) {
            return new k((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        },
        getBottomLeft: function() {
            return new k(this.min.x, this.max.y)
        },
        getTopRight: function() {
            return new k(this.max.x, this.min.y)
        },
        getTopLeft: function() {
            return this.min
        },
        getBottomRight: function() {
            return this.max
        },
        getSize: function() {
            return this.max.subtract(this.min)
        },
        contains: function(t) {
            var e, i;
            return (t = ("number" == typeof t[0] || t instanceof k ? Z : O)(t)) instanceof B ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
        },
        intersects: function(t) {
            t = O(t);
            var e = this.min,
                i = this.max,
                n = t.min,
                o = t.max,
                s = o.x >= e.x && n.x <= i.x,
                r = o.y >= e.y && n.y <= i.y;
            return s && r
        },
        overlaps: function(t) {
            t = O(t);
            var e = this.min,
                i = this.max,
                n = t.min,
                o = t.max,
                s = o.x > e.x && n.x < i.x,
                r = o.y > e.y && n.y < i.y;
            return s && r
        },
        isValid: function() {
            return !(!this.min || !this.max)
        }
    }, R.prototype = {
        extend: function(t) {
            var e, i, n = this._southWest,
                o = this._northEast;
            if (t instanceof F) i = e = t;
            else {
                if (!(t instanceof R)) return t ? this.extend(N(t) || D(t)) : this;
                if (e = t._southWest, i = t._northEast, !e || !i) return this
            }
            return n || o ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), o.lat = Math.max(i.lat, o.lat), o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new F(e.lat, e.lng), this._northEast = new F(i.lat, i.lng)), this
        },
        pad: function(t) {
            var e = this._southWest,
                i = this._northEast,
                n = Math.abs(e.lat - i.lat) * t,
                o = Math.abs(e.lng - i.lng) * t;
            return new R(new F(e.lat - n, e.lng - o), new F(i.lat + n, i.lng + o))
        },
        getCenter: function() {
            return new F((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function() {
            return this._southWest
        },
        getNorthEast: function() {
            return this._northEast
        },
        getNorthWest: function() {
            return new F(this.getNorth(), this.getWest())
        },
        getSouthEast: function() {
            return new F(this.getSouth(), this.getEast())
        },
        getWest: function() {
            return this._southWest.lng
        },
        getSouth: function() {
            return this._southWest.lat
        },
        getEast: function() {
            return this._northEast.lng
        },
        getNorth: function() {
            return this._northEast.lat
        },
        contains: function(t) {
            t = ("number" == typeof t[0] || t instanceof F || "lat" in t ? N : D)(t);
            var e, i, n = this._southWest,
                o = this._northEast;
            return t instanceof R ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
        },
        intersects: function(t) {
            t = D(t);
            var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat >= e.lat && n.lat <= i.lat,
                r = o.lng >= e.lng && n.lng <= i.lng;
            return s && r
        },
        overlaps: function(t) {
            t = D(t);
            var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat > e.lat && n.lat < i.lat,
                r = o.lng > e.lng && n.lng < i.lng;
            return s && r
        },
        toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function(t, e) {
            return !!t && (t = D(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
        },
        isValid: function() {
            return !(!this._southWest || !this._northEast)
        }
    };
    var U, j = {
            latLngToPoint: function(t, e) {
                var i = this.projection.project(t),
                    n = this.scale(e);
                return this.transformation._transform(i, n)
            },
            pointToLatLng: function(t, e) {
                var i = this.scale(e),
                    n = this.transformation.untransform(t, i);
                return this.projection.unproject(n)
            },
            project: function(t) {
                return this.projection.project(t)
            },
            unproject: function(t) {
                return this.projection.unproject(t)
            },
            scale: function(t) {
                return 256 * Math.pow(2, t)
            },
            zoom: function(t) {
                return Math.log(t / 256) / Math.LN2
            },
            getProjectedBounds: function(t) {
                if (this.infinite) return null;
                var e = this.projection.bounds,
                    i = this.scale(t);
                return new B(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i))
            },
            infinite: !(F.prototype = {
                equals: function(t, e) {
                    return !!t && (t = N(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
                },
                toString: function(t) {
                    return "LatLng(" + u(this.lat, t) + ", " + u(this.lng, t) + ")"
                },
                distanceTo: function(t) {
                    return G.distance(this, N(t))
                },
                wrap: function() {
                    return G.wrapLatLng(this)
                },
                toBounds: function(t) {
                    var e = 180 * t / 40075017,
                        i = e / Math.cos(Math.PI / 180 * this.lat);
                    return D([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
                },
                clone: function() {
                    return new F(this.lat, this.lng, this.alt)
                }
            }),
            wrapLatLng: function(t) {
                var e = this.wrapLng ? h(t.lng, this.wrapLng, !0) : t.lng;
                return new F(this.wrapLat ? h(t.lat, this.wrapLat, !0) : t.lat, e, t.alt)
            },
            wrapLatLngBounds: function(t) {
                var e = t.getCenter(),
                    i = this.wrapLatLng(e),
                    n = e.lat - i.lat,
                    o = e.lng - i.lng;
                if (0 == n && 0 == o) return t;
                var s = t.getSouthWest(),
                    r = t.getNorthEast();
                return new R(new F(s.lat - n, s.lng - o), new F(r.lat - n, r.lng - o))
            }
        },
        G = e({}, j, {
            wrapLng: [-180, 180],
            R: 6371e3,
            distance: function(t, e) {
                var i = Math.PI / 180,
                    n = t.lat * i,
                    o = e.lat * i,
                    s = Math.sin((e.lat - t.lat) * i / 2),
                    r = Math.sin((e.lng - t.lng) * i / 2),
                    a = s * s + Math.cos(n) * Math.cos(o) * r * r,
                    h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return this.R * h
            }
        }),
        q = 6378137,
        W = {
            R: q,
            MAX_LATITUDE: 85.0511287798,
            project: function(t) {
                var e = Math.PI / 180,
                    i = this.MAX_LATITUDE,
                    n = Math.max(Math.min(i, t.lat), -i),
                    o = Math.sin(n * e);
                return new k(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2)
            },
            unproject: function(t) {
                var e = 180 / Math.PI;
                return new F((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
            },
            bounds: new B([-(U = q * Math.PI), -U], [U, U])
        };

    function H(t, e, i, n) {
        if (g(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
        this._a = t, this._b = e, this._c = i, this._d = n
    }

    function V(t, e, i, n) {
        return new H(t, e, i, n)
    }
    H.prototype = {
        transform: function(t, e) {
            return this._transform(t.clone(), e)
        },
        _transform: function(t, e) {
            return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
        },
        untransform: function(t, e) {
            return e = e || 1, new k((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        }
    };
    var K, J = e({}, G, {
            code: "EPSG:3857",
            projection: W,
            transformation: V(K = .5 / (Math.PI * W.R), .5, -K, .5)
        }),
        Y = e({}, J, {
            code: "EPSG:900913"
        });

    function Q(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }

    function X(t, e) {
        for (var i, n, o, s, r = "", a = 0, h = t.length; a < h; a++) {
            for (i = 0, n = (o = t[a]).length; i < n; i++) r += (i ? "L" : "M") + (s = o[i]).x + " " + s.y;
            r += e ? It ? "z" : "x" : ""
        }
        return r || "M0 0"
    }
    var $ = document.documentElement.style,
        tt = "ActiveXObject" in window,
        et = tt && !document.addEventListener,
        it = "msLaunchUri" in navigator && !("documentMode" in document),
        nt = kt("webkit"),
        ot = kt("android"),
        st = kt("android 2") || kt("android 3"),
        rt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
        at = ot && kt("Google") && rt < 537 && !("AudioNode" in window),
        ht = !!window.opera,
        lt = !it && kt("chrome"),
        ut = kt("gecko") && !nt && !ht && !tt,
        ct = !lt && kt("safari"),
        dt = kt("phantom"),
        pt = "OTransition" in $,
        _t = 0 === navigator.platform.indexOf("Win"),
        mt = tt && "transition" in $,
        ft = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !st,
        gt = "MozPerspective" in $,
        vt = !window.L_DISABLE_3D && (mt || ft || gt) && !pt && !dt,
        yt = "undefined" != typeof orientation || kt("mobile"),
        xt = yt && nt,
        bt = yt && ft,
        wt = !window.PointerEvent && window.MSPointerEvent,
        Lt = !(!window.PointerEvent && !wt),
        Pt = !window.L_NO_TOUCH && (Lt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        Tt = yt && ht,
        St = yt && ut,
        Ct = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
        Mt = function() {
            var t = !1;
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function() {
                        t = !0
                    }
                });
                window.addEventListener("testPassiveEventSupport", l, e), window.removeEventListener("testPassiveEventSupport", l, e)
            } catch (t) {}
            return t
        }(),
        At = !!document.createElement("canvas").getContext,
        It = !(!document.createElementNS || !Q("svg").createSVGRect),
        zt = !It && function() {
            try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var e = t.firstChild;
                return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
            } catch (t) {
                return !1
            }
        }();

    function kt(t) {
        return 0 <= navigator.userAgent.toLowerCase().indexOf(t)
    }
    var Et = {
            ie: tt,
            ielt9: et,
            edge: it,
            webkit: nt,
            android: ot,
            android23: st,
            androidStock: at,
            opera: ht,
            chrome: lt,
            gecko: ut,
            safari: ct,
            phantom: dt,
            opera12: pt,
            win: _t,
            ie3d: mt,
            webkit3d: ft,
            gecko3d: gt,
            any3d: vt,
            mobile: yt,
            mobileWebkit: xt,
            mobileWebkit3d: bt,
            msPointer: wt,
            pointer: Lt,
            touch: Pt,
            mobileOpera: Tt,
            mobileGecko: St,
            retina: Ct,
            passiveEvents: Mt,
            canvas: At,
            svg: It,
            vml: zt
        },
        Zt = wt ? "MSPointerDown" : "pointerdown",
        Bt = wt ? "MSPointerMove" : "pointermove",
        Ot = wt ? "MSPointerUp" : "pointerup",
        Rt = wt ? "MSPointerCancel" : "pointercancel",
        Dt = {},
        Ft = !1;

    function Nt(t, e, i, n) {
        function s(t) {
            qt(t, a)
        }
        var r, a, h, l, u, c, d, p;

        function _(t) {
            t.pointerType === (t.MSPOINTER_TYPE_MOUSE || "mouse") && 0 === t.buttons || qt(t, l)
        }
        return "touchstart" === e ? (u = t, c = i, d = n, p = o((function(t) {
            t.MSPOINTER_TYPE_TOUCH && t.pointerType === t.MSPOINTER_TYPE_TOUCH && Re(t), qt(t, c)
        })), u["_leaflet_touchstart" + d] = p, u.addEventListener(Zt, p, !1), Ft || (document.addEventListener(Zt, Ut, !0), document.addEventListener(Bt, jt, !0), document.addEventListener(Ot, Gt, !0), document.addEventListener(Rt, Gt, !0), Ft = !0)) : "touchmove" === e ? (l = i, (h = t)["_leaflet_touchmove" + n] = _, h.addEventListener(Bt, _, !1)) : "touchend" === e && (a = i, (r = t)["_leaflet_touchend" + n] = s, r.addEventListener(Ot, s, !1), r.addEventListener(Rt, s, !1)), this
    }

    function Ut(t) {
        Dt[t.pointerId] = t
    }

    function jt(t) {
        Dt[t.pointerId] && (Dt[t.pointerId] = t)
    }

    function Gt(t) {
        delete Dt[t.pointerId]
    }

    function qt(t, e) {
        for (var i in t.touches = [], Dt) t.touches.push(Dt[i]);
        t.changedTouches = [t], e(t)
    }
    var Wt, Ht, Vt, Kt, Jt, Yt, Qt = wt ? "MSPointerDown" : Lt ? "pointerdown" : "touchstart",
        Xt = wt ? "MSPointerUp" : Lt ? "pointerup" : "touchend",
        $t = "_leaflet_",
        te = fe(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
        ee = fe(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
        ie = "webkitTransition" === ee || "OTransition" === ee ? ee + "End" : "transitionend";

    function ne(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }

    function oe(t, e) {
        var i, n = t.style[e] || t.currentStyle && t.currentStyle[e];
        return n && "auto" !== n || !document.defaultView || (n = (i = document.defaultView.getComputedStyle(t, null)) ? i[e] : null), "auto" === n ? null : n
    }

    function se(t, e, i) {
        var n = document.createElement(t);
        return n.className = e || "", i && i.appendChild(n), n
    }

    function re(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }

    function ae(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function he(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t)
    }

    function le(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
    }

    function ue(t, e) {
        if (void 0 !== t.classList) return t.classList.contains(e);
        var i = _e(t);
        return 0 < i.length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
    }

    function ce(t, e) {
        var i;
        if (void 0 !== t.classList)
            for (var n = d(e), o = 0, s = n.length; o < s; o++) t.classList.add(n[o]);
        else ue(t, e) || pe(t, ((i = _e(t)) ? i + " " : "") + e)
    }

    function de(t, e) {
        void 0 !== t.classList ? t.classList.remove(e) : pe(t, c((" " + _e(t) + " ").replace(" " + e + " ", " ")))
    }

    function pe(t, e) {
        void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
    }

    function _e(t) {
        return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal
    }

    function me(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function(t, e) {
            var i = !1,
                n = "DXImageTransform.Microsoft.Alpha";
            try {
                i = t.filters.item(n)
            } catch (t) {
                if (1 === e) return
            }
            e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
        }(t, e)
    }

    function fe(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
            if (t[i] in e) return t[i];
        return !1
    }

    function ge(t, e, i) {
        var n = e || new k(0, 0);
        t.style[te] = (mt ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "")
    }

    function ve(t, e) {
        t._leaflet_pos = e, vt ? ge(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
    }

    function ye(t) {
        return t._leaflet_pos || new k(0, 0)
    }

    function xe() {
        Ce(window, "dragstart", Re)
    }

    function be() {
        Ae(window, "dragstart", Re)
    }

    function we(t) {
        for (; - 1 === t.tabIndex;) t = t.parentNode;
        t.style && (Le(), Yt = (Jt = t).style.outline, t.style.outline = "none", Ce(window, "keydown", Le))
    }

    function Le() {
        Jt && (Jt.style.outline = Yt, Yt = Jt = void 0, Ae(window, "keydown", Le))
    }

    function Pe(t) {
        for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body););
        return t
    }

    function Te(t) {
        var e = t.getBoundingClientRect();
        return {
            x: e.width / t.offsetWidth || 1,
            y: e.height / t.offsetHeight || 1,
            boundingClientRect: e
        }
    }
    Kt = "onselectstart" in document ? (Vt = function() {
        Ce(window, "selectstart", Re)
    }, function() {
        Ae(window, "selectstart", Re)
    }) : (Ht = fe(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), Vt = function() {
        var t;
        Ht && (t = document.documentElement.style, Wt = t[Ht], t[Ht] = "none")
    }, function() {
        Ht && (document.documentElement.style[Ht] = Wt, Wt = void 0)
    });
    var Se = {
        TRANSFORM: te,
        TRANSITION: ee,
        TRANSITION_END: ie,
        get: ne,
        getStyle: oe,
        create: se,
        remove: re,
        empty: ae,
        toFront: he,
        toBack: le,
        hasClass: ue,
        addClass: ce,
        removeClass: de,
        setClass: pe,
        getClass: _e,
        setOpacity: me,
        testProp: fe,
        setTransform: ge,
        setPosition: ve,
        getPosition: ye,
        disableTextSelection: Vt,
        enableTextSelection: Kt,
        disableImageDrag: xe,
        enableImageDrag: be,
        preventOutline: we,
        restoreOutline: Le,
        getSizedParentNode: Pe,
        getScale: Te
    };

    function Ce(t, e, i, n) {
        if ("object" == typeof e)
            for (var o in e) ke(t, o, e[o], i);
        else
            for (var s = 0, r = (e = d(e)).length; s < r; s++) ke(t, e[s], i, n);
        return this
    }
    var Me = "_leaflet_events";

    function Ae(t, e, i, n) {
        if ("object" == typeof e)
            for (var o in e) Ee(t, o, e[o], i);
        else if (e)
            for (var s = 0, r = (e = d(e)).length; s < r; s++) Ee(t, e[s], i, n);
        else {
            for (var a in t[Me]) Ee(t, a, t[Me][a]);
            delete t[Me]
        }
        return this
    }

    function Ie() {
        return Lt && !it && !ct
    }
    var ze = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
    };

    function ke(t, e, i, n) {
        var o = e + r(i) + (n ? "_" + r(n) : "");
        if (t[Me] && t[Me][o]) return this;
        var s, a, h, l, u, c, d = function(e) {
                return i.call(n || t, e || window.event)
            },
            p = d;

        function _(t) {
            if (Lt) {
                if (!t.isPrimary) return;
                if ("mouse" === t.pointerType) return
            } else if (1 < t.touches.length) return;
            var e = Date.now(),
                i = e - (l || e);
            u = t.touches ? t.touches[0] : t, c = 0 < i && i <= 250, l = e
        }

        function m(t) {
            if (c && !u.cancelBubble) {
                if (Lt) {
                    if ("mouse" === t.pointerType) return;
                    var e, i, n = {};
                    for (i in u) e = u[i], n[i] = e && e.bind ? e.bind(u) : e;
                    u = n
                }
                u.type = "dblclick", u.button = 0, a(u), l = null
            }
        }
        Lt && 0 === e.indexOf("touch") ? Nt(t, e, d, o) : Pt && "dblclick" === e && !Ie() ? (a = d, c = !1, (s = t)[$t + Qt + (h = o)] = _, s[$t + Xt + h] = m, s[$t + "dblclick" + h] = a, s.addEventListener(Qt, _, !!Mt && {
            passive: !1
        }), s.addEventListener(Xt, m, !!Mt && {
            passive: !1
        }), s.addEventListener("dblclick", a, !1)) : "addEventListener" in t ? "touchstart" === e || "touchmove" === e || "wheel" === e || "mousewheel" === e ? t.addEventListener(ze[e] || e, d, !!Mt && {
            passive: !1
        }) : "mouseenter" === e || "mouseleave" === e ? (d = function(e) {
            e = e || window.event, We(t, e) && p(e)
        }, t.addEventListener(ze[e], d, !1)) : t.addEventListener(e, p, !1) : "attachEvent" in t && t.attachEvent("on" + e, d), t[Me] = t[Me] || {}, t[Me][o] = d
    }

    function Ee(t, e, i, n) {
        var o, s, a, h, l, u, c, d, p = e + r(i) + (n ? "_" + r(n) : ""),
            _ = t[Me] && t[Me][p];
        if (!_) return this;
        Lt && 0 === e.indexOf("touch") ? (d = (u = t)["_leaflet_" + (c = e) + p], "touchstart" === c ? u.removeEventListener(Zt, d, !1) : "touchmove" === c ? u.removeEventListener(Bt, d, !1) : "touchend" === c && (u.removeEventListener(Ot, d, !1), u.removeEventListener(Rt, d, !1))) : Pt && "dblclick" === e && !Ie() ? (a = (o = t)[$t + Qt + (s = p)], h = o[$t + Xt + s], l = o[$t + "dblclick" + s], o.removeEventListener(Qt, a, !!Mt && {
            passive: !1
        }), o.removeEventListener(Xt, h, !!Mt && {
            passive: !1
        }), o.removeEventListener("dblclick", l, !1)) : "removeEventListener" in t ? t.removeEventListener(ze[e] || e, _, !1) : "detachEvent" in t && t.detachEvent("on" + e, _), t[Me][p] = null
    }

    function Ze(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, qe(t), this
    }

    function Be(t) {
        return ke(t, "wheel", Ze), this
    }

    function Oe(t) {
        return Ce(t, "mousedown touchstart dblclick", Ze), ke(t, "click", Ge), this
    }

    function Re(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
    }

    function De(t) {
        return Re(t), Ze(t), this
    }

    function Fe(t, e) {
        if (!e) return new k(t.clientX, t.clientY);
        var i = Te(e),
            n = i.boundingClientRect;
        return new k((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop)
    }
    var Ne = _t && lt ? 2 * window.devicePixelRatio : ut ? window.devicePixelRatio : 1;

    function Ue(t) {
        return it ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Ne : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
    }
    var je = {};

    function Ge(t) {
        je[t.type] = !0
    }

    function qe(t) {
        var e = je[t.type];
        return je[t.type] = !1, e
    }

    function We(t, e) {
        var i = e.relatedTarget;
        if (!i) return !0;
        try {
            for (; i && i !== t;) i = i.parentNode
        } catch (t) {
            return !1
        }
        return i !== t
    }
    var He = {
            on: Ce,
            off: Ae,
            stopPropagation: Ze,
            disableScrollPropagation: Be,
            disableClickPropagation: Oe,
            preventDefault: Re,
            stop: De,
            getMousePosition: Fe,
            getWheelDelta: Ue,
            fakeStop: Ge,
            skipped: qe,
            isExternalTarget: We,
            addListener: Ce,
            removeListener: Ae
        },
        Ve = z.extend({
            run: function(t, e, i, n) {
                this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = ye(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
            },
            stop: function() {
                this._inProgress && (this._step(!0), this._complete())
            },
            _animate: function() {
                this._animId = S(this._animate, this), this._step()
            },
            _step: function(t) {
                var e = new Date - this._startTime,
                    i = 1e3 * this._duration;
                e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete())
            },
            _runFrame: function(t, e) {
                var i = this._startPos.add(this._offset.multiplyBy(t));
                e && i._round(), ve(this._el, i), this.fire("step")
            },
            _complete: function() {
                C(this._animId), this._inProgress = !1, this.fire("end")
            },
            _easeOut: function(t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
            }
        }),
        Ke = z.extend({
            options: {
                crs: J,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0
            },
            initialize: function(t, e) {
                e = p(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = o(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(N(e.center), e.zoom, {
                    reset: !0
                }), this.callInitHooks(), this._zoomAnimated = ee && vt && !Tt && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Ce(this._proxy, ie, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
            },
            setView: function(t, i, n) {
                return i = void 0 === i ? this._zoom : this._limitZoom(i), t = this._limitCenter(N(t), i, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = e({
                    animate: n.animate
                }, n.zoom), n.pan = e({
                    animate: n.animate,
                    duration: n.duration
                }, n.pan)), this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, i), this)
            },
            setZoom: function(t, e) {
                return this._loaded ? this.setView(this.getCenter(), t, {
                    zoom: e
                }) : (this._zoom = t, this)
            },
            zoomIn: function(t, e) {
                return t = t || (vt ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e)
            },
            zoomOut: function(t, e) {
                return t = t || (vt ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e)
            },
            setZoomAround: function(t, e, i) {
                var n = this.getZoomScale(e),
                    o = this.getSize().divideBy(2),
                    s = (t instanceof k ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                    r = this.containerPointToLatLng(o.add(s));
                return this.setView(r, e, {
                    zoom: i
                })
            },
            _getBoundsCenterZoom: function(t, e) {
                e = e || {}, t = t.getBounds ? t.getBounds() : D(t);
                var i = Z(e.paddingTopLeft || e.padding || [0, 0]),
                    n = Z(e.paddingBottomRight || e.padding || [0, 0]),
                    o = this.getBoundsZoom(t, !1, i.add(n));
                if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0) return {
                    center: t.getCenter(),
                    zoom: o
                };
                var s = n.subtract(i).divideBy(2),
                    r = this.project(t.getSouthWest(), o),
                    a = this.project(t.getNorthEast(), o);
                return {
                    center: this.unproject(r.add(a).divideBy(2).add(s), o),
                    zoom: o
                }
            },
            fitBounds: function(t, e) {
                if (!(t = D(t)).isValid()) throw new Error("Bounds are not valid.");
                var i = this._getBoundsCenterZoom(t, e);
                return this.setView(i.center, i.zoom, e)
            },
            fitWorld: function(t) {
                return this.fitBounds([
                    [-90, -180],
                    [90, 180]
                ], t)
            },
            panTo: function(t, e) {
                return this.setView(t, this._zoom, {
                    pan: e
                })
            },
            panBy: function(t, e) {
                return e = e || {}, (t = Z(t).round()).x || t.y ? (!0 === e.animate || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new Ve, this._panAnim.on({
                    step: this._onPanTransitionStep,
                    end: this._onPanTransitionEnd
                }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate ? (ce(this._mapPane, "leaflet-pan-anim"), i = this._getMapPanePos().subtract(t).round(), this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)) : (this._rawPanBy(t), this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this) : this.fire("moveend");
                var i
            },
            flyTo: function(t, e, i) {
                if (!1 === (i = i || {}).animate || !vt) return this.setView(t, e, i);
                this._stop();
                var n = this.project(this.getCenter()),
                    o = this.project(t),
                    s = this.getSize(),
                    r = this._zoom;
                t = N(t), e = void 0 === e ? r : e;
                var a = Math.max(s.x, s.y),
                    h = a * this.getZoomScale(r, e),
                    l = o.distanceTo(n) || 1,
                    u = 1.42,
                    c = u * u;

                function d(t) {
                    var e = (h * h - a * a + (t ? -1 : 1) * c * c * l * l) / (2 * (t ? h : a) * c * l),
                        i = Math.sqrt(e * e + 1) - e;
                    return i < 1e-9 ? -18 : Math.log(i)
                }

                function p(t) {
                    return (Math.exp(t) - Math.exp(-t)) / 2
                }

                function _(t) {
                    return (Math.exp(t) + Math.exp(-t)) / 2
                }
                var m = d(0);

                function f(t) {
                    return a * (_(m) * (p(e = m + u * t) / _(e)) - p(m)) / c;
                    var e
                }
                var g = Date.now(),
                    v = (d(1) - m) / u,
                    y = i.duration ? 1e3 * i.duration : 1e3 * v * .8;
                return this._moveStart(!0, i.noMoveStart),
                    function i() {
                        var s, h, c = (Date.now() - g) / y,
                            d = (s = c, (1 - Math.pow(1 - s, 1.5)) * v);
                        c <= 1 ? (this._flyToFrame = S(i, this), this._move(this.unproject(n.add(o.subtract(n).multiplyBy(f(d) / l)), r), this.getScaleZoom(a / (h = d, a * (_(m) / _(m + u * h))), r), {
                            flyTo: !0
                        })) : this._move(t, e)._moveEnd(!0)
                    }.call(this), this
            },
            flyToBounds: function(t, e) {
                var i = this._getBoundsCenterZoom(t, e);
                return this.flyTo(i.center, i.zoom, e)
            },
            setMaxBounds: function(t) {
                return (t = D(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
            },
            setMinZoom: function(t) {
                var e = this.options.minZoom;
                return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
            },
            setMaxZoom: function(t) {
                var e = this.options.maxZoom;
                return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
            },
            panInsideBounds: function(t, e) {
                this._enforcingBounds = !0;
                var i = this.getCenter(),
                    n = this._limitCenter(i, this._zoom, D(t));
                return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this
            },
            panInside: function(t, e) {
                var i, n, o = Z((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                    s = Z(e.paddingBottomRight || e.padding || [0, 0]),
                    r = this.getCenter(),
                    a = this.project(r),
                    h = this.project(t),
                    l = this.getPixelBounds(),
                    u = l.getSize().divideBy(2),
                    c = O([l.min.add(o), l.max.subtract(s)]);
                return c.contains(h) || (this._enforcingBounds = !0, i = a.subtract(h), n = Z(h.x + i.x, h.y + i.y), (h.x < c.min.x || h.x > c.max.x) && (n.x = a.x - i.x, 0 < i.x ? n.x += u.x - o.x : n.x -= u.x - s.x), (h.y < c.min.y || h.y > c.max.y) && (n.y = a.y - i.y, 0 < i.y ? n.y += u.y - o.y : n.y -= u.y - s.y), this.panTo(this.unproject(n), e), this._enforcingBounds = !1), this
            },
            invalidateSize: function(t) {
                if (!this._loaded) return this;
                t = e({
                    animate: !1,
                    pan: !0
                }, !0 === t ? {
                    animate: !0
                } : t);
                var i = this.getSize();
                this._sizeChanged = !0, this._lastCenter = null;
                var n = this.getSize(),
                    s = i.divideBy(2).round(),
                    r = n.divideBy(2).round(),
                    a = s.subtract(r);
                return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                    oldSize: i,
                    newSize: n
                })) : this
            },
            stop: function() {
                return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
            },
            locate: function(t) {
                if (t = this._locateOptions = e({
                        timeout: 1e4,
                        watch: !1
                    }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
                var i = o(this._handleGeolocationResponse, this),
                    n = o(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, n, t) : navigator.geolocation.getCurrentPosition(i, n, t), this
            },
            stopLocate: function() {
                return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
            },
            _handleGeolocationError: function(t) {
                var e = t.code,
                    i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                    code: e,
                    message: "Geolocation error: " + i + "."
                })
            },
            _handleGeolocationResponse: function(t) {
                var e, i = new F(t.coords.latitude, t.coords.longitude),
                    n = i.toBounds(2 * t.coords.accuracy),
                    o = this._locateOptions;
                o.setView && (e = this.getBoundsZoom(n), this.setView(i, o.maxZoom ? Math.min(e, o.maxZoom) : e));
                var s = {
                    latlng: i,
                    bounds: n,
                    timestamp: t.timestamp
                };
                for (var r in t.coords) "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
                this.fire("locationfound", s)
            },
            addHandler: function(t, e) {
                if (!e) return this;
                var i = this[t] = new e(this);
                return this._handlers.push(i), this.options[t] && i.enable(), this
            },
            remove: function() {
                if (this._initEvents(!0), this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                try {
                    delete this._container._leaflet_id, delete this._containerId
                } catch (t) {
                    this._container._leaflet_id = void 0, this._containerId = void 0
                }
                var t;
                for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), re(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (C(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
                for (t in this._panes) re(this._panes[t]);
                return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
            },
            createPane: function(t, e) {
                var i = se("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
                return t && (this._panes[t] = i), i
            },
            getCenter: function() {
                return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function() {
                return this._zoom
            },
            getBounds: function() {
                var t = this.getPixelBounds();
                return new R(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
            },
            getMinZoom: function() {
                return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
            },
            getMaxZoom: function() {
                return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function(t, e, i) {
                t = D(t), i = Z(i || [0, 0]);
                var n = this.getZoom() || 0,
                    o = this.getMinZoom(),
                    s = this.getMaxZoom(),
                    r = t.getNorthWest(),
                    a = t.getSouthEast(),
                    h = this.getSize().subtract(i),
                    l = O(this.project(a, n), this.project(r, n)).getSize(),
                    u = vt ? this.options.zoomSnap : 1,
                    c = h.x / l.x,
                    d = h.y / l.y,
                    p = e ? Math.max(c, d) : Math.min(c, d);
                n = this.getScaleZoom(p, n);
                return u && (n = Math.round(n / (u / 100)) * (u / 100), n = e ? Math.ceil(n / u) * u : Math.floor(n / u) * u), Math.max(o, Math.min(s, n))
            },
            getSize: function() {
                return this._size && !this._sizeChanged || (this._size = new k(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
            },
            getPixelBounds: function(t, e) {
                var i = this._getTopLeftPoint(t, e);
                return new B(i, i.add(this.getSize()))
            },
            getPixelOrigin: function() {
                return this._checkIfLoaded(), this._pixelOrigin
            },
            getPixelWorldBounds: function(t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
            },
            getPane: function(t) {
                return "string" == typeof t ? this._panes[t] : t
            },
            getPanes: function() {
                return this._panes
            },
            getContainer: function() {
                return this._container
            },
            getZoomScale: function(t, e) {
                var i = this.options.crs;
                return e = void 0 === e ? this._zoom : e, i.scale(t) / i.scale(e)
            },
            getScaleZoom: function(t, e) {
                var i = this.options.crs;
                e = void 0 === e ? this._zoom : e;
                var n = i.zoom(t * i.scale(e));
                return isNaN(n) ? 1 / 0 : n
            },
            project: function(t, e) {
                return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(N(t), e)
            },
            unproject: function(t, e) {
                return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(Z(t), e)
            },
            layerPointToLatLng: function(t) {
                var e = Z(t).add(this.getPixelOrigin());
                return this.unproject(e)
            },
            latLngToLayerPoint: function(t) {
                return this.project(N(t))._round()._subtract(this.getPixelOrigin())
            },
            wrapLatLng: function(t) {
                return this.options.crs.wrapLatLng(N(t))
            },
            wrapLatLngBounds: function(t) {
                return this.options.crs.wrapLatLngBounds(D(t))
            },
            distance: function(t, e) {
                return this.options.crs.distance(N(t), N(e))
            },
            containerPointToLayerPoint: function(t) {
                return Z(t).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function(t) {
                return Z(t).add(this._getMapPanePos())
            },
            containerPointToLatLng: function(t) {
                var e = this.containerPointToLayerPoint(Z(t));
                return this.layerPointToLatLng(e)
            },
            latLngToContainerPoint: function(t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(N(t)))
            },
            mouseEventToContainerPoint: function(t) {
                return Fe(t, this._container)
            },
            mouseEventToLayerPoint: function(t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
            },
            mouseEventToLatLng: function(t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
            },
            _initContainer: function(t) {
                var e = this._container = ne(t);
                if (!e) throw new Error("Map container not found.");
                if (e._leaflet_id) throw new Error("Map container is already initialized.");
                Ce(e, "scroll", this._onScroll, this), this._containerId = r(e)
            },
            _initLayout: function() {
                var t = this._container;
                this._fadeAnimated = this.options.fadeAnimation && vt, ce(t, "leaflet-container" + (Pt ? " leaflet-touch" : "") + (Ct ? " leaflet-retina" : "") + (et ? " leaflet-oldie" : "") + (ct ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                var e = oe(t, "position");
                "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
            },
            _initPanes: function() {
                var t = this._panes = {};
                this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), ve(this._mapPane, new k(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (ce(t.markerPane, "leaflet-zoom-hide"), ce(t.shadowPane, "leaflet-zoom-hide"))
            },
            _resetView: function(t, e) {
                ve(this._mapPane, new k(0, 0));
                var i = !this._loaded;
                this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
                var n = this._zoom !== e;
                this._moveStart(n, !1)._move(t, e)._moveEnd(n), this.fire("viewreset"), i && this.fire("load")
            },
            _moveStart: function(t, e) {
                return t && this.fire("zoomstart"), e || this.fire("movestart"), this
            },
            _move: function(t, e, i) {
                void 0 === e && (e = this._zoom);
                var n = this._zoom !== e;
                return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)
            },
            _moveEnd: function(t) {
                return t && this.fire("zoomend"), this.fire("moveend")
            },
            _stop: function() {
                return C(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
            },
            _rawPanBy: function(t) {
                ve(this._mapPane, this._getMapPanePos().subtract(t))
            },
            _getZoomSpan: function() {
                return this.getMaxZoom() - this.getMinZoom()
            },
            _panInsideMaxBounds: function() {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function() {
                if (!this._loaded) throw new Error("Set map center and zoom first.")
            },
            _initEvents: function(t) {
                this._targets = {};
                var e = t ? Ae : Ce;
                e((this._targets[r(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), vt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
            },
            _onResize: function() {
                C(this._resizeRequest), this._resizeRequest = S((function() {
                    this.invalidateSize({
                        debounceMoveend: !0
                    })
                }), this)
            },
            _onScroll: function() {
                this._container.scrollTop = 0, this._container.scrollLeft = 0
            },
            _onMoveEnd: function() {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
            },
            _findEventTargets: function(t, e) {
                for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, a = !1; s;) {
                    if ((i = this._targets[r(s)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
                        a = !0;
                        break
                    }
                    if (i && i.listens(e, !0)) {
                        if (o && !We(s, t)) break;
                        if (n.push(i), o) break
                    }
                    if (s === this._container) break;
                    s = s.parentNode
                }
                return n.length || a || o || !We(s, t) || (n = [this]), n
            },
            _handleDOMEvent: function(t) {
                var e;
                this._loaded && !qe(t) && ("mousedown" !== (e = t.type) && "keypress" !== e && "keyup" !== e && "keydown" !== e || we(t.target || t.srcElement), this._fireDOMEvent(t, e))
            },
            _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
            _fireDOMEvent: function(t, i, n) {
                var o;
                if ("click" === t.type && ((o = e({}, t)).type = "preclick", this._fireDOMEvent(o, o.type, n)), !t._stopped && (n = (n || []).concat(this._findEventTargets(t, i))).length) {
                    var s = n[0];
                    "contextmenu" === i && s.listens(i, !0) && Re(t);
                    var r, a = {
                        originalEvent: t
                    };
                    "keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type && (r = s.getLatLng && (!s._radius || s._radius <= 10), a.containerPoint = r ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), a.layerPoint = this.containerPointToLayerPoint(a.containerPoint), a.latlng = r ? s.getLatLng() : this.layerPointToLatLng(a.layerPoint));
                    for (var h = 0; h < n.length; h++)
                        if (n[h].fire(i, a, !0), a.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, i)) return
                }
            },
            _draggableMoved: function(t) {
                return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
            },
            _clearHandlers: function() {
                for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
            },
            whenReady: function(t, e) {
                return this._loaded ? t.call(e || this, {
                    target: this
                }) : this.on("load", t, e), this
            },
            _getMapPanePos: function() {
                return ye(this._mapPane) || new k(0, 0)
            },
            _moved: function() {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
            },
            _getTopLeftPoint: function(t, e) {
                return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
            },
            _getNewPixelOrigin: function(t, e) {
                var i = this.getSize()._divideBy(2);
                return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
            },
            _latLngToNewLayerPoint: function(t, e, i) {
                var n = this._getNewPixelOrigin(i, e);
                return this.project(t, e)._subtract(n)
            },
            _latLngBoundsToNewLayerBounds: function(t, e, i) {
                var n = this._getNewPixelOrigin(i, e);
                return O([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)])
            },
            _getCenterLayerPoint: function() {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function(t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function(t, e, i) {
                if (!i) return t;
                var n = this.project(t, e),
                    o = this.getSize().divideBy(2),
                    s = new B(n.subtract(o), n.add(o)),
                    r = this._getBoundsOffset(s, i, e);
                return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), e)
            },
            _limitOffset: function(t, e) {
                if (!e) return t;
                var i = this.getPixelBounds(),
                    n = new B(i.min.add(t), i.max.add(t));
                return t.add(this._getBoundsOffset(n, e))
            },
            _getBoundsOffset: function(t, e, i) {
                var n = O(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                    o = n.min.subtract(t.min),
                    s = n.max.subtract(t.max);
                return new k(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
            },
            _rebound: function(t, e) {
                return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
            },
            _limitZoom: function(t) {
                var e = this.getMinZoom(),
                    i = this.getMaxZoom(),
                    n = vt ? this.options.zoomSnap : 1;
                return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t))
            },
            _onPanTransitionStep: function() {
                this.fire("move")
            },
            _onPanTransitionEnd: function() {
                de(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
            },
            _tryAnimatedPan: function(t, e) {
                var i = this._getCenterOffset(t)._trunc();
                return !(!0 !== (e && e.animate) && !this.getSize().contains(i) || (this.panBy(i, e), 0))
            },
            _createAnimProxy: function() {
                var t = this._proxy = se("div", "leaflet-proxy leaflet-zoom-animated");
                this._panes.mapPane.appendChild(t), this.on("zoomanim", (function(t) {
                    var e = te,
                        i = this._proxy.style[e];
                    ge(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
                }), this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this)
            },
            _destroyAnimProxy: function() {
                re(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy
            },
            _animMoveEnd: function() {
                var t = this.getCenter(),
                    e = this.getZoom();
                ge(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
            },
            _catchTransitionEnd: function(t) {
                this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd()
            },
            _nothingToAnimate: function() {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
            },
            _tryAnimatedZoom: function(t, e, i) {
                if (this._animatingZoom) return !0;
                if (i = i || {}, !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                var n = this.getZoomScale(e),
                    o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                return !(!0 !== i.animate && !this.getSize().contains(o) || (S((function() {
                    this._moveStart(!0, !1)._animateZoom(t, e, !0)
                }), this), 0))
            },
            _animateZoom: function(t, e, i, n) {
                this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, ce(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                    center: t,
                    zoom: e,
                    noUpdate: n
                }), setTimeout(o(this._onZoomTransitionEnd, this), 250))
            },
            _onZoomTransitionEnd: function() {
                this._animatingZoom && (this._mapPane && de(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), S((function() {
                    this._moveEnd(!0)
                }), this))
            }
        });

    function Je(t) {
        return new Ye(t)
    }
    var Ye = A.extend({
        options: {
            position: "topright"
        },
        initialize: function(t) {
            p(this, t)
        },
        getPosition: function() {
            return this.options.position
        },
        setPosition: function(t) {
            var e = this._map;
            return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
        },
        getContainer: function() {
            return this._container
        },
        addTo: function(t) {
            this.remove(), this._map = t;
            var e = this._container = this.onAdd(t),
                i = this.getPosition(),
                n = t._controlCorners[i];
            return ce(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this
        },
        remove: function() {
            return this._map && (re(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this
        },
        _refocusOnMap: function(t) {
            this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus()
        }
    });
    Ke.include({
        addControl: function(t) {
            return t.addTo(this), this
        },
        removeControl: function(t) {
            return t.remove(), this
        },
        _initControlPos: function() {
            var t = this._controlCorners = {},
                e = "leaflet-",
                i = this._controlContainer = se("div", e + "control-container", this._container);

            function n(n, o) {
                var s = e + n + " " + e + o;
                t[n + o] = se("div", s, i)
            }
            n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right")
        },
        _clearControlPos: function() {
            for (var t in this._controlCorners) re(this._controlCorners[t]);
            re(this._controlContainer), delete this._controlCorners, delete this._controlContainer
        }
    });
    var Qe = Ye.extend({
            options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function(t, e, i, n) {
                    return i < n ? -1 : n < i ? 1 : 0
                }
            },
            initialize: function(t, e, i) {
                for (var n in p(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[n], n);
                for (n in e) this._addLayer(e[n], n, !0)
            },
            onAdd: function(t) {
                this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);
                for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
                return this._container
            },
            addTo: function(t) {
                return Ye.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
            },
            onRemove: function() {
                this._map.off("zoomend", this._checkDisabledLayers, this);
                for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
            },
            addBaseLayer: function(t, e) {
                return this._addLayer(t, e), this._map ? this._update() : this
            },
            addOverlay: function(t, e) {
                return this._addLayer(t, e, !0), this._map ? this._update() : this
            },
            removeLayer: function(t) {
                t.off("add remove", this._onLayerChange, this);
                var e = this._getLayer(r(t));
                return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
            },
            expand: function() {
                ce(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
                var t = this._map.getSize().y - (this._container.offsetTop + 50);
                return t < this._section.clientHeight ? (ce(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : de(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
            },
            collapse: function() {
                return de(this._container, "leaflet-control-layers-expanded"), this
            },
            _initLayout: function() {
                var t = "leaflet-control-layers",
                    e = this._container = se("div", t),
                    i = this.options.collapsed;
                e.setAttribute("aria-haspopup", !0), Oe(e), Be(e);
                var n = this._section = se("section", t + "-list");
                i && (this._map.on("click", this.collapse, this), ot || Ce(e, {
                    mouseenter: this.expand,
                    mouseleave: this.collapse
                }, this));
                var o = this._layersLink = se("a", t + "-toggle", e);
                o.href = "#", o.title = "Layers", Pt ? (Ce(o, "click", De), Ce(o, "click", this.expand, this)) : Ce(o, "focus", this.expand, this), i || this.expand(), this._baseLayersList = se("div", t + "-base", n), this._separator = se("div", t + "-separator", n), this._overlaysList = se("div", t + "-overlays", n), e.appendChild(n)
            },
            _getLayer: function(t) {
                for (var e = 0; e < this._layers.length; e++)
                    if (this._layers[e] && r(this._layers[e].layer) === t) return this._layers[e]
            },
            _addLayer: function(t, e, i) {
                this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                    layer: t,
                    name: e,
                    overlay: i
                }), this.options.sortLayers && this._layers.sort(o((function(t, e) {
                    return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
                }), this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
            },
            _update: function() {
                if (!this._container) return this;
                ae(this._baseLayersList), ae(this._overlaysList), this._layerControlInputs = [];
                for (var t, e, i, n = 0, o = 0; o < this._layers.length; o++) i = this._layers[o], this._addItem(i), e = e || i.overlay, t = t || !i.overlay, n += i.overlay ? 0 : 1;
                return this.options.hideSingleBase && (t = t && 1 < n, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
            },
            _onLayerChange: function(t) {
                this._handlingClick || this._update();
                var e = this._getLayer(r(t.target)),
                    i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                i && this._map.fire(i, e)
            },
            _createRadioElement: function(t, e) {
                var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                    n = document.createElement("div");
                return n.innerHTML = i, n.firstChild
            },
            _addItem: function(t) {
                var e, i = document.createElement("label"),
                    n = this._map.hasLayer(t.layer);
                t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers_" + r(this), n), this._layerControlInputs.push(e), e.layerId = r(t.layer), Ce(e, "click", this._onInputClick, this);
                var o = document.createElement("span");
                o.innerHTML = " " + t.name;
                var s = document.createElement("div");
                return i.appendChild(s), s.appendChild(e), s.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i
            },
            _onInputClick: function() {
                var t, e, i = this._layerControlInputs,
                    n = [],
                    o = [];
                this._handlingClick = !0;
                for (var s = i.length - 1; 0 <= s; s--) t = i[s], e = this._getLayer(t.layerId).layer, t.checked ? n.push(e) : t.checked || o.push(e);
                for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                this._handlingClick = !1, this._refocusOnMap()
            },
            _checkDisabledLayers: function() {
                for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; 0 <= o; o--) t = i[o], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
            },
            _expandIfNotCollapsed: function() {
                return this._map && !this.options.collapsed && this.expand(), this
            },
            _expand: function() {
                return this.expand()
            },
            _collapse: function() {
                return this.collapse()
            }
        }),
        Xe = Ye.extend({
            options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "&#x2212;",
                zoomOutTitle: "Zoom out"
            },
            onAdd: function(t) {
                var e = "leaflet-control-zoom",
                    i = se("div", e + " leaflet-bar"),
                    n = this.options;
                return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
            },
            onRemove: function(t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
            },
            disable: function() {
                return this._disabled = !0, this._updateDisabled(), this
            },
            enable: function() {
                return this._disabled = !1, this._updateDisabled(), this
            },
            _zoomIn: function(t) {
                !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _zoomOut: function(t) {
                !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _createButton: function(t, e, i, n, o) {
                var s = se("a", i, n);
                return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), Oe(s), Ce(s, "click", De), Ce(s, "click", o, this), Ce(s, "click", this._refocusOnMap, this), s
            },
            _updateDisabled: function() {
                var t = this._map,
                    e = "leaflet-disabled";
                de(this._zoomInButton, e), de(this._zoomOutButton, e), !this._disabled && t._zoom !== t.getMinZoom() || ce(this._zoomOutButton, e), !this._disabled && t._zoom !== t.getMaxZoom() || ce(this._zoomInButton, e)
            }
        });
    Ke.mergeOptions({
        zoomControl: !0
    }), Ke.addInitHook((function() {
        this.options.zoomControl && (this.zoomControl = new Xe, this.addControl(this.zoomControl))
    }));
    var $e = Ye.extend({
            options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0
            },
            onAdd: function(t) {
                var e = "leaflet-control-scale",
                    i = se("div", e),
                    n = this.options;
                return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
            },
            onRemove: function(t) {
                t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
            },
            _addScales: function(t, e, i) {
                t.metric && (this._mScale = se("div", e, i)), t.imperial && (this._iScale = se("div", e, i))
            },
            _update: function() {
                var t = this._map,
                    e = t.getSize().y / 2,
                    i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                this._updateScales(i)
            },
            _updateScales: function(t) {
                this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
            },
            _updateMetric: function(t) {
                var e = this._getRoundNum(t),
                    i = e < 1e3 ? e + " m" : e / 1e3 + " km";
                this._updateScale(this._mScale, i, e / t)
            },
            _updateImperial: function(t) {
                var e, i, n, o = 3.2808399 * t;
                5280 < o ? (e = o / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
            },
            _updateScale: function(t, e, i) {
                t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e
            },
            _getRoundNum: function(t) {
                var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                    i = t / e;
                return e * (10 <= i ? 10 : 5 <= i ? 5 : 3 <= i ? 3 : 2 <= i ? 2 : 1)
            }
        }),
        ti = Ye.extend({
            options: {
                position: "bottomright",
                prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
            },
            initialize: function(t) {
                p(this, t), this._attributions = {}
            },
            onAdd: function(t) {
                for (var e in (t.attributionControl = this)._container = se("div", "leaflet-control-attribution"), Oe(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                return this._update(), this._container
            },
            setPrefix: function(t) {
                return this.options.prefix = t, this._update(), this
            },
            addAttribution: function(t) {
                return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this
            },
            removeAttribution: function(t) {
                return t && this._attributions[t] && (this._attributions[t]--, this._update()), this
            },
            _update: function() {
                if (this._map) {
                    var t = [];
                    for (var e in this._attributions) this._attributions[e] && t.push(e);
                    var i = [];
                    this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
                }
            }
        });
    Ke.mergeOptions({
        attributionControl: !0
    }), Ke.addInitHook((function() {
        this.options.attributionControl && (new ti).addTo(this)
    })), Ye.Layers = Qe, Ye.Zoom = Xe, Ye.Scale = $e, Ye.Attribution = ti, Je.layers = function(t, e, i) {
        return new Qe(t, e, i)
    }, Je.zoom = function(t) {
        return new Xe(t)
    }, Je.scale = function(t) {
        return new $e(t)
    }, Je.attribution = function(t) {
        return new ti(t)
    };
    var ei = A.extend({
        initialize: function(t) {
            this._map = t
        },
        enable: function() {
            return this._enabled || (this._enabled = !0, this.addHooks()), this
        },
        disable: function() {
            return this._enabled && (this._enabled = !1, this.removeHooks()), this
        },
        enabled: function() {
            return !!this._enabled
        }
    });
    ei.addTo = function(t, e) {
        return t.addHandler(e, this), this
    };
    var ii, ni = {
            Events: I
        },
        oi = Pt ? "touchstart mousedown" : "mousedown",
        si = {
            mousedown: "mouseup",
            touchstart: "touchend",
            pointerdown: "touchend",
            MSPointerDown: "touchend"
        },
        ri = {
            mousedown: "mousemove",
            touchstart: "touchmove",
            pointerdown: "touchmove",
            MSPointerDown: "touchmove"
        },
        ai = z.extend({
            options: {
                clickTolerance: 3
            },
            initialize: function(t, e, i, n) {
                p(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i
            },
            enable: function() {
                this._enabled || (Ce(this._dragStartTarget, oi, this._onDown, this), this._enabled = !0)
            },
            disable: function() {
                this._enabled && (ai._dragging === this && this.finishDrag(), Ae(this._dragStartTarget, oi, this._onDown, this), this._enabled = !1, this._moved = !1)
            },
            _onDown: function(t) {
                var e, i;
                !t._simulated && this._enabled && (this._moved = !1, ue(this._element, "leaflet-zoom-anim") || ai._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((ai._dragging = this)._preventOutline && we(this._element), xe(), Vt(), this._moving || (this.fire("down"), e = t.touches ? t.touches[0] : t, i = Pe(this._element), this._startPoint = new k(e.clientX, e.clientY), this._parentScale = Te(i), Ce(document, ri[t.type], this._onMove, this), Ce(document, si[t.type], this._onUp, this))))
            },
            _onMove: function(t) {
                var e, i;
                !t._simulated && this._enabled && (t.touches && 1 < t.touches.length ? this._moved = !0 : ((i = new k((e = t.touches && 1 === t.touches.length ? t.touches[0] : t).clientX, e.clientY)._subtract(this._startPoint)).x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, Re(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = ye(this._element).subtract(i), ce(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ce(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, C(this._animRequest), this._lastEvent = t, this._animRequest = S(this._updatePosition, this, !0))))
            },
            _updatePosition: function() {
                var t = {
                    originalEvent: this._lastEvent
                };
                this.fire("predrag", t), ve(this._element, this._newPos), this.fire("drag", t)
            },
            _onUp: function(t) {
                !t._simulated && this._enabled && this.finishDrag()
            },
            finishDrag: function() {
                for (var t in de(document.body, "leaflet-dragging"), this._lastTarget && (de(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ri) Ae(document, ri[t], this._onMove, this), Ae(document, si[t], this._onUp, this);
                be(), Kt(), this._moved && this._moving && (C(this._animRequest), this.fire("dragend", {
                    distance: this._newPos.distanceTo(this._startPos)
                })), this._moving = !1, ai._dragging = !1
            }
        });

    function hi(t, e) {
        if (!e || !t.length) return t.slice();
        var i = e * e;
        return function(t, e) {
            var i = t.length,
                n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
            n[0] = n[i - 1] = 1,
                function t(e, i, n, o, s) {
                    var r, a, h, l = 0;
                    for (a = o + 1; a <= s - 1; a++) l < (h = pi(e[a], e[o], e[s], !0)) && (r = a, l = h);
                    n < l && (i[r] = 1, t(e, i, n, o, r), t(e, i, n, r, s))
                }(t, n, e, 0, i - 1);
            var o, s = [];
            for (o = 0; o < i; o++) n[o] && s.push(t[o]);
            return s
        }(t = function(t, e) {
            for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)(function(t, e) {
                var i = e.x - t.x,
                    n = e.y - t.y;
                return i * i + n * n
            })(t[n], t[o]) > e && (i.push(t[n]), o = n);
            return o < s - 1 && i.push(t[s - 1]), i
        }(t, i), i)
    }

    function li(t, e, i) {
        return Math.sqrt(pi(t, e, i, !0))
    }

    function ui(t, e, i, n, o) {
        var s, r, a, h = n ? ii : di(t, i),
            l = di(e, i);
        for (ii = l;;) {
            if (!(h | l)) return [t, e];
            if (h & l) return !1;
            a = di(r = ci(t, e, s = h || l, i, o), i), s === h ? (t = r, h = a) : (e = r, l = a)
        }
    }

    function ci(t, e, i, n, o) {
        var s, r, a = e.x - t.x,
            h = e.y - t.y,
            l = n.min,
            u = n.max;
        return 8 & i ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 4 & i ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 2 & i ? (s = u.x, r = t.y + h * (u.x - t.x) / a) : 1 & i && (s = l.x, r = t.y + h * (l.x - t.x) / a), new k(s, r, o)
    }

    function di(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
    }

    function pi(t, e, i, n) {
        var o, s = e.x,
            r = e.y,
            a = i.x - s,
            h = i.y - r,
            l = a * a + h * h;
        return 0 < l && (1 < (o = ((t.x - s) * a + (t.y - r) * h) / l) ? (s = i.x, r = i.y) : 0 < o && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new k(s, r)
    }

    function _i(t) {
        return !g(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
    }

    function mi(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), _i(t)
    }
    var fi = {
        simplify: hi,
        pointToSegmentDistance: li,
        closestPointOnSegment: function(t, e, i) {
            return pi(t, e, i)
        },
        clipSegment: ui,
        _getEdgeIntersection: ci,
        _getBitCode: di,
        _sqClosestPointOnSegment: pi,
        isFlat: _i,
        _flat: mi
    };

    function gi(t, e, i) {
        for (var n, o, s, r, a, h, l, u = [1, 4, 2, 8], c = 0, d = t.length; c < d; c++) t[c]._code = di(t[c], e);
        for (s = 0; s < 4; s++) {
            for (h = u[s], n = [], c = 0, o = (d = t.length) - 1; c < d; o = c++) r = t[c], a = t[o], r._code & h ? a._code & h || ((l = ci(a, r, h, e, i))._code = di(l, e), n.push(l)) : (a._code & h && ((l = ci(a, r, h, e, i))._code = di(l, e), n.push(l)), n.push(r));
            t = n
        }
        return t
    }
    var vi, yi = {
            clipPolygon: gi
        },
        xi = {
            project: function(t) {
                return new k(t.lng, t.lat)
            },
            unproject: function(t) {
                return new F(t.y, t.x)
            },
            bounds: new B([-180, -90], [180, 90])
        },
        bi = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new B([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
            project: function(t) {
                var e = Math.PI / 180,
                    i = this.R,
                    n = t.lat * e,
                    o = this.R_MINOR / i,
                    s = Math.sqrt(1 - o * o),
                    r = s * Math.sin(n),
                    a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
                n = -i * Math.log(Math.max(a, 1e-10));
                return new k(t.lng * e * i, n)
            },
            unproject: function(t) {
                for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, l = .1; h < 15 && 1e-7 < Math.abs(l); h++) e = s * Math.sin(a), e = Math.pow((1 - e) / (1 + e), s / 2), a += l = Math.PI / 2 - 2 * Math.atan(r * e) - a;
                return new F(a * i, t.x * i / n)
            }
        },
        wi = {
            LonLat: xi,
            Mercator: bi,
            SphericalMercator: W
        },
        Li = e({}, G, {
            code: "EPSG:3395",
            projection: bi,
            transformation: V(vi = .5 / (Math.PI * bi.R), .5, -vi, .5)
        }),
        Pi = e({}, G, {
            code: "EPSG:4326",
            projection: xi,
            transformation: V(1 / 180, 1, -1 / 180, .5)
        }),
        Ti = e({}, j, {
            projection: xi,
            transformation: V(1, 0, -1, 0),
            scale: function(t) {
                return Math.pow(2, t)
            },
            zoom: function(t) {
                return Math.log(t) / Math.LN2
            },
            distance: function(t, e) {
                var i = e.lng - t.lng,
                    n = e.lat - t.lat;
                return Math.sqrt(i * i + n * n)
            },
            infinite: !0
        });
    j.Earth = G, j.EPSG3395 = Li, j.EPSG3857 = J, j.EPSG900913 = Y, j.EPSG4326 = Pi, j.Simple = Ti;
    var Si = z.extend({
        options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: !0
        },
        addTo: function(t) {
            return t.addLayer(this), this
        },
        remove: function() {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function(t) {
            return t && t.removeLayer(this), this
        },
        getPane: function(t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function(t) {
            return this._map._targets[r(t)] = this
        },
        removeInteractiveTarget: function(t) {
            return delete this._map._targets[r(t)], this
        },
        getAttribution: function() {
            return this.options.attribution
        },
        _layerAdd: function(t) {
            var e, i = t.target;
            i.hasLayer(this) && (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents && (e = this.getEvents(), i.on(e, this), this.once("remove", (function() {
                i.off(e, this)
            }), this)), this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", {
                layer: this
            }))
        }
    });
    Ke.include({
        addLayer: function(t) {
            if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
            var e = r(t);
            return this._layers[e] || ((this._layers[e] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this
        },
        removeLayer: function(t) {
            var e = r(t);
            return this._layers[e] && (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                layer: t
            }), t.fire("remove")), t._map = t._mapToAdd = null), this
        },
        hasLayer: function(t) {
            return !!t && r(t) in this._layers
        },
        eachLayer: function(t, e) {
            for (var i in this._layers) t.call(e, this._layers[i]);
            return this
        },
        _addLayers: function(t) {
            for (var e = 0, i = (t = t ? g(t) ? t : [t] : []).length; e < i; e++) this.addLayer(t[e])
        },
        _addZoomLimit: function(t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[r(t)] = t, this._updateZoomLevels())
        },
        _removeZoomLimit: function(t) {
            var e = r(t);
            this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
        },
        _updateZoomLevels: function() {
            var t = 1 / 0,
                e = -1 / 0,
                i = this._getZoomSpan();
            for (var n in this._zoomBoundLayers) {
                var o = this._zoomBoundLayers[n].options;
                t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom)
            }
            this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    });
    var Ci = Si.extend({
            initialize: function(t, e) {
                var i, n;
                if (p(this, e), this._layers = {}, t)
                    for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i])
            },
            addLayer: function(t) {
                var e = this.getLayerId(t);
                return this._layers[e] = t, this._map && this._map.addLayer(t), this
            },
            removeLayer: function(t) {
                var e = t in this._layers ? t : this.getLayerId(t);
                return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
            },
            hasLayer: function(t) {
                return !!t && ("number" == typeof t ? t : this.getLayerId(t)) in this._layers
            },
            clearLayers: function() {
                return this.eachLayer(this.removeLayer, this)
            },
            invoke: function(t) {
                var e, i, n = Array.prototype.slice.call(arguments, 1);
                for (e in this._layers)(i = this._layers[e])[t] && i[t].apply(i, n);
                return this
            },
            onAdd: function(t) {
                this.eachLayer(t.addLayer, t)
            },
            onRemove: function(t) {
                this.eachLayer(t.removeLayer, t)
            },
            eachLayer: function(t, e) {
                for (var i in this._layers) t.call(e, this._layers[i]);
                return this
            },
            getLayer: function(t) {
                return this._layers[t]
            },
            getLayers: function() {
                var t = [];
                return this.eachLayer(t.push, t), t
            },
            setZIndex: function(t) {
                return this.invoke("setZIndex", t)
            },
            getLayerId: r
        }),
        Mi = Ci.extend({
            addLayer: function(t) {
                return this.hasLayer(t) ? this : (t.addEventParent(this), Ci.prototype.addLayer.call(this, t), this.fire("layeradd", {
                    layer: t
                }))
            },
            removeLayer: function(t) {
                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ci.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                    layer: t
                })) : this
            },
            setStyle: function(t) {
                return this.invoke("setStyle", t)
            },
            bringToFront: function() {
                return this.invoke("bringToFront")
            },
            bringToBack: function() {
                return this.invoke("bringToBack")
            },
            getBounds: function() {
                var t = new R;
                for (var e in this._layers) {
                    var i = this._layers[e];
                    t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
                }
                return t
            }
        }),
        Ai = A.extend({
            options: {
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0]
            },
            initialize: function(t) {
                p(this, t)
            },
            createIcon: function(t) {
                return this._createIcon("icon", t)
            },
            createShadow: function(t) {
                return this._createIcon("shadow", t)
            },
            _createIcon: function(t, e) {
                var i = this._getIconUrl(t);
                if (!i) {
                    if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                    return null
                }
                var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
                return this._setIconStyles(n, t), n
            },
            _setIconStyles: function(t, e) {
                var i = this.options,
                    n = i[e + "Size"];
                "number" == typeof n && (n = [n, n]);
                var o = Z(n),
                    s = Z("shadow" === e && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
                t.className = "leaflet-marker-" + e + " " + (i.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
            },
            _createImg: function(t, e) {
                return (e = e || document.createElement("img")).src = t, e
            },
            _getIconUrl: function(t) {
                return Ct && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
            }
        }),
        Ii = Ai.extend({
            options: {
                iconUrl: "marker-icon.png",
                iconRetinaUrl: "marker-icon-2x.png",
                shadowUrl: "marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            },
            _getIconUrl: function(t) {
                return Ii.imagePath || (Ii.imagePath = this._detectIconPath()), (this.options.imagePath || Ii.imagePath) + Ai.prototype._getIconUrl.call(this, t)
            },
            _detectIconPath: function() {
                var t = se("div", "leaflet-default-icon-path", document.body),
                    e = oe(t, "background-image") || oe(t, "backgroundImage");
                return document.body.removeChild(t), null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
            }
        }),
        zi = ei.extend({
            initialize: function(t) {
                this._marker = t
            },
            addHooks: function() {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new ai(t, t, !0)), this._draggable.on({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).enable(), ce(t, "leaflet-marker-draggable")
            },
            removeHooks: function() {
                this._draggable.off({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).disable(), this._marker._icon && de(this._marker._icon, "leaflet-marker-draggable")
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            _adjustPan: function(t) {
                var e, i = this._marker,
                    n = i._map,
                    o = this._marker.options.autoPanSpeed,
                    s = this._marker.options.autoPanPadding,
                    r = ye(i._icon),
                    a = n.getPixelBounds(),
                    h = n.getPixelOrigin(),
                    l = O(a.min._subtract(h).add(s), a.max._subtract(h).subtract(s));
                l.contains(r) || (e = Z((Math.max(l.max.x, r.x) - l.max.x) / (a.max.x - l.max.x) - (Math.min(l.min.x, r.x) - l.min.x) / (a.min.x - l.min.x), (Math.max(l.max.y, r.y) - l.max.y) / (a.max.y - l.max.y) - (Math.min(l.min.y, r.y) - l.min.y) / (a.min.y - l.min.y)).multiplyBy(o), n.panBy(e, {
                    animate: !1
                }), this._draggable._newPos._add(e), this._draggable._startPos._add(e), ve(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = S(this._adjustPan.bind(this, t)))
            },
            _onDragStart: function() {
                this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart")
            },
            _onPreDrag: function(t) {
                this._marker.options.autoPan && (C(this._panRequest), this._panRequest = S(this._adjustPan.bind(this, t)))
            },
            _onDrag: function(t) {
                var e = this._marker,
                    i = e._shadow,
                    n = ye(e._icon),
                    o = e._map.layerPointToLatLng(n);
                i && ve(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
            },
            _onDragEnd: function(t) {
                C(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
            }
        }),
        ki = Si.extend({
            options: {
                icon: new Ii,
                interactive: !0,
                keyboard: !0,
                title: "",
                alt: "",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                shadowPane: "shadowPane",
                bubblingMouseEvents: !1,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10
            },
            initialize: function(t, e) {
                p(this, e), this._latlng = N(t)
            },
            onAdd: function(t) {
                this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
            },
            onRemove: function(t) {
                this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
            },
            getEvents: function() {
                return {
                    zoom: this.update,
                    viewreset: this.update
                }
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                var e = this._latlng;
                return this._latlng = N(t), this.update(), this.fire("move", {
                    oldLatLng: e,
                    latlng: this._latlng
                })
            },
            setZIndexOffset: function(t) {
                return this.options.zIndexOffset = t, this.update()
            },
            getIcon: function() {
                return this.options.icon
            },
            setIcon: function(t) {
                return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
            },
            getElement: function() {
                return this._icon
            },
            update: function() {
                var t;
                return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(), this._setPos(t)), this
            },
            _initIcon: function() {
                var t = this.options,
                    e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                    i = t.icon.createIcon(this._icon),
                    n = !1;
                i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), "IMG" === i.tagName && (i.alt = t.alt || "")), ce(i, e), t.keyboard && (i.tabIndex = "0"), this._icon = i, t.riseOnHover && this.on({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                });
                var o = t.icon.createShadow(this._shadow),
                    s = !1;
                o !== this._shadow && (this._removeShadow(), s = !0), o && (ce(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane(t.shadowPane).appendChild(this._shadow)
            },
            _removeIcon: function() {
                this.options.riseOnHover && this.off({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                }), re(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
            },
            _removeShadow: function() {
                this._shadow && re(this._shadow), this._shadow = null
            },
            _setPos: function(t) {
                this._icon && ve(this._icon, t), this._shadow && ve(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
            },
            _updateZIndex: function(t) {
                this._icon && (this._icon.style.zIndex = this._zIndex + t)
            },
            _animateZoom: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(e)
            },
            _initInteraction: function() {
                var t;
                this.options.interactive && (ce(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), zi && (t = this.options.draggable, this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new zi(this), t && this.dragging.enable()))
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
            },
            _updateOpacity: function() {
                var t = this.options.opacity;
                this._icon && me(this._icon, t), this._shadow && me(this._shadow, t)
            },
            _bringToFront: function() {
                this._updateZIndex(this.options.riseOffset)
            },
            _resetZIndex: function() {
                this._updateZIndex(0)
            },
            _getPopupAnchor: function() {
                return this.options.icon.options.popupAnchor
            },
            _getTooltipAnchor: function() {
                return this.options.icon.options.tooltipAnchor
            }
        }),
        Ei = Si.extend({
            options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: .2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0
            },
            beforeAdd: function(t) {
                this._renderer = t.getRenderer(this)
            },
            onAdd: function() {
                this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
            },
            onRemove: function() {
                this._renderer._removePath(this)
            },
            redraw: function() {
                return this._map && this._renderer._updatePath(this), this
            },
            setStyle: function(t) {
                return p(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this
            },
            bringToFront: function() {
                return this._renderer && this._renderer._bringToFront(this), this
            },
            bringToBack: function() {
                return this._renderer && this._renderer._bringToBack(this), this
            },
            getElement: function() {
                return this._path
            },
            _reset: function() {
                this._project(), this._update()
            },
            _clickTolerance: function() {
                return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
            }
        }),
        Zi = Ei.extend({
            options: {
                fill: !0,
                radius: 10
            },
            initialize: function(t, e) {
                p(this, e), this._latlng = N(t), this._radius = this.options.radius
            },
            setLatLng: function(t) {
                var e = this._latlng;
                return this._latlng = N(t), this.redraw(), this.fire("move", {
                    oldLatLng: e,
                    latlng: this._latlng
                })
            },
            getLatLng: function() {
                return this._latlng
            },
            setRadius: function(t) {
                return this.options.radius = this._radius = t, this.redraw()
            },
            getRadius: function() {
                return this._radius
            },
            setStyle: function(t) {
                var e = t && t.radius || this._radius;
                return Ei.prototype.setStyle.call(this, t), this.setRadius(e), this
            },
            _project: function() {
                this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
            },
            _updateBounds: function() {
                var t = this._radius,
                    e = this._radiusY || t,
                    i = this._clickTolerance(),
                    n = [t + i, e + i];
                this._pxBounds = new B(this._point.subtract(n), this._point.add(n))
            },
            _update: function() {
                this._map && this._updatePath()
            },
            _updatePath: function() {
                this._renderer._updateCircle(this)
            },
            _empty: function() {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
            },
            _containsPoint: function(t) {
                return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
            }
        }),
        Bi = Zi.extend({
            initialize: function(t, i, n) {
                if ("number" == typeof i && (i = e({}, n, {
                        radius: i
                    })), p(this, i), this._latlng = N(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius
            },
            setRadius: function(t) {
                return this._mRadius = t, this.redraw()
            },
            getRadius: function() {
                return this._mRadius
            },
            getBounds: function() {
                var t = [this._radius, this._radiusY || this._radius];
                return new R(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
            },
            setStyle: Ei.prototype.setStyle,
            _project: function() {
                var t, e, i, n, o, s, r, a, h = this._latlng.lng,
                    l = this._latlng.lat,
                    u = this._map,
                    c = u.options.crs;
                c.distance === G.distance ? (t = Math.PI / 180, e = this._mRadius / G.R / t, i = u.project([l + e, h]), n = u.project([l - e, h]), o = i.add(n).divideBy(2), s = u.unproject(o).lat, r = Math.acos((Math.cos(e * t) - Math.sin(l * t) * Math.sin(s * t)) / (Math.cos(l * t) * Math.cos(s * t))) / t, !isNaN(r) && 0 !== r || (r = e / Math.cos(Math.PI / 180 * l)), this._point = o.subtract(u.getPixelOrigin()), this._radius = isNaN(r) ? 0 : o.x - u.project([s, h - r]).x, this._radiusY = o.y - i.y) : (a = c.unproject(c.project(this._latlng).subtract([this._mRadius, 0])), this._point = u.latLngToLayerPoint(this._latlng), this._radius = this._point.x - u.latLngToLayerPoint(a).x), this._updateBounds()
            }
        }),
        Oi = Ei.extend({
            options: {
                smoothFactor: 1,
                noClip: !1
            },
            initialize: function(t, e) {
                p(this, e), this._setLatLngs(t)
            },
            getLatLngs: function() {
                return this._latlngs
            },
            setLatLngs: function(t) {
                return this._setLatLngs(t), this.redraw()
            },
            isEmpty: function() {
                return !this._latlngs.length
            },
            closestLayerPoint: function(t) {
                for (var e, i, n = 1 / 0, o = null, s = pi, r = 0, a = this._parts.length; r < a; r++)
                    for (var h = this._parts[r], l = 1, u = h.length; l < u; l++) {
                        var c = s(t, e = h[l - 1], i = h[l], !0);
                        c < n && (n = c, o = s(t, e, i))
                    }
                return o && (o.distance = Math.sqrt(n)), o
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, e, i, n, o, s, r, a = this._rings[0],
                    h = a.length;
                if (!h) return null;
                for (e = t = 0; t < h - 1; t++) e += a[t].distanceTo(a[t + 1]) / 2;
                if (0 === e) return this._map.layerPointToLatLng(a[0]);
                for (n = t = 0; t < h - 1; t++)
                    if (o = a[t], s = a[t + 1], e < (n += i = o.distanceTo(s))) return r = (n - e) / i, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
            },
            getBounds: function() {
                return this._bounds
            },
            addLatLng: function(t, e) {
                return e = e || this._defaultShape(), t = N(t), e.push(t), this._bounds.extend(t), this.redraw()
            },
            _setLatLngs: function(t) {
                this._bounds = new R, this._latlngs = this._convertLatLngs(t)
            },
            _defaultShape: function() {
                return _i(this._latlngs) ? this._latlngs : this._latlngs[0]
            },
            _convertLatLngs: function(t) {
                for (var e = [], i = _i(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = N(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
                return e
            },
            _project: function() {
                var t = new B;
                this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds())
            },
            _updateBounds: function() {
                var t = this._clickTolerance(),
                    e = new k(t, t);
                this._pxBounds = new B([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)])
            },
            _projectLatlngs: function(t, e, i) {
                var n, o, s = t[0] instanceof F,
                    r = t.length;
                if (s) {
                    for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), i.extend(o[n]);
                    e.push(o)
                } else
                    for (n = 0; n < r; n++) this._projectLatlngs(t[n], e, i)
            },
            _clipPoints: function() {
                var t = this._renderer._bounds;
                if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else
                        for (var e, i, n, o, s = this._parts, r = 0, a = 0, h = this._rings.length; r < h; r++)
                            for (e = 0, i = (o = this._rings[r]).length; e < i - 1; e++)(n = ui(o[e], o[e + 1], t, e, !0)) && (s[a] = s[a] || [], s[a].push(n[0]), n[1] === o[e + 1] && e !== i - 2 || (s[a].push(n[1]), a++))
            },
            _simplifyPoints: function() {
                for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = hi(t[i], e)
            },
            _update: function() {
                this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
            },
            _updatePath: function() {
                this._renderer._updatePoly(this)
            },
            _containsPoint: function(t, e) {
                var i, n, o, s, r, a, h = this._clickTolerance();
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (i = 0, s = this._parts.length; i < s; i++)
                    for (n = 0, o = (r = (a = this._parts[i]).length) - 1; n < r; o = n++)
                        if ((e || 0 !== n) && li(t, a[o], a[n]) <= h) return !0;
                return !1
            }
        });
    Oi._flat = mi;
    var Ri = Oi.extend({
            options: {
                fill: !0
            },
            isEmpty: function() {
                return !this._latlngs.length || !this._latlngs[0].length
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, e, i, n, o, s, r, a, h, l = this._rings[0],
                    u = l.length;
                if (!u) return null;
                for (t = s = r = a = 0, e = u - 1; t < u; e = t++) i = l[t], n = l[e], o = i.y * n.x - n.y * i.x, r += (i.x + n.x) * o, a += (i.y + n.y) * o, s += 3 * o;
                return h = 0 === s ? l[0] : [r / s, a / s], this._map.layerPointToLatLng(h)
            },
            _convertLatLngs: function(t) {
                var e = Oi.prototype._convertLatLngs.call(this, t),
                    i = e.length;
                return 2 <= i && e[0] instanceof F && e[0].equals(e[i - 1]) && e.pop(), e
            },
            _setLatLngs: function(t) {
                Oi.prototype._setLatLngs.call(this, t), _i(this._latlngs) && (this._latlngs = [this._latlngs])
            },
            _defaultShape: function() {
                return _i(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
            },
            _clipPoints: function() {
                var t = this._renderer._bounds,
                    e = this.options.weight,
                    i = new k(e, e);
                t = new B(t.min.subtract(i), t.max.add(i));
                if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else
                        for (var n, o = 0, s = this._rings.length; o < s; o++)(n = gi(this._rings[o], t, !0)).length && this._parts.push(n)
            },
            _updatePath: function() {
                this._renderer._updatePoly(this, !0)
            },
            _containsPoint: function(t) {
                var e, i, n, o, s, r, a, h, l = !1;
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (o = 0, a = this._parts.length; o < a; o++)
                    for (s = 0, r = (h = (e = this._parts[o]).length) - 1; s < h; r = s++) i = e[s], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (l = !l);
                return l || Oi.prototype._containsPoint.call(this, t, !0)
            }
        }),
        Di = Mi.extend({
            initialize: function(t, e) {
                p(this, e), this._layers = {}, t && this.addData(t)
            },
            addData: function(t) {
                var e, i, n, o = g(t) ? t : t.features;
                if (o) {
                    for (e = 0, i = o.length; e < i; e++)((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                    return this
                }
                var s = this.options;
                if (s.filter && !s.filter(t)) return this;
                var r = Fi(t, s);
                return r ? (r.feature = Hi(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this
            },
            resetStyle: function(t) {
                return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = e({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this)
            },
            setStyle: function(t) {
                return this.eachLayer((function(e) {
                    this._setLayerStyle(e, t)
                }), this)
            },
            _setLayerStyle: function(t, e) {
                t.setStyle && ("function" == typeof e && (e = e(t.feature)), t.setStyle(e))
            }
        });

    function Fi(t, e) {
        var i, n, o, s, r = "Feature" === t.type ? t.geometry : t,
            a = r ? r.coordinates : null,
            h = [],
            l = e && e.pointToLayer,
            u = e && e.coordsToLatLng || Ui;
        if (!a && !r) return null;
        switch (r.type) {
            case "Point":
                return Ni(l, t, i = u(a), e);
            case "MultiPoint":
                for (o = 0, s = a.length; o < s; o++) i = u(a[o]), h.push(Ni(l, t, i, e));
                return new Mi(h);
            case "LineString":
            case "MultiLineString":
                return n = ji(a, "LineString" === r.type ? 0 : 1, u), new Oi(n, e);
            case "Polygon":
            case "MultiPolygon":
                return n = ji(a, "Polygon" === r.type ? 1 : 2, u), new Ri(n, e);
            case "GeometryCollection":
                for (o = 0, s = r.geometries.length; o < s; o++) {
                    var c = Fi({
                        geometry: r.geometries[o],
                        type: "Feature",
                        properties: t.properties
                    }, e);
                    c && h.push(c)
                }
                return new Mi(h);
            default:
                throw new Error("Invalid GeoJSON object.")
        }
    }

    function Ni(t, e, i, n) {
        return t ? t(e, i) : new ki(i, n && n.markersInheritOptions && n)
    }

    function Ui(t) {
        return new F(t[1], t[0], t[2])
    }

    function ji(t, e, i) {
        for (var n, o = [], s = 0, r = t.length; s < r; s++) n = e ? ji(t[s], e - 1, i) : (i || Ui)(t[s]), o.push(n);
        return o
    }

    function Gi(t, e) {
        return e = "number" == typeof e ? e : 6, void 0 !== t.alt ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)] : [u(t.lng, e), u(t.lat, e)]
    }

    function qi(t, e, i, n) {
        for (var o = [], s = 0, r = t.length; s < r; s++) o.push(e ? qi(t[s], e - 1, i, n) : Gi(t[s], n));
        return !e && i && o.push(o[0]), o
    }

    function Wi(t, i) {
        return t.feature ? e({}, t.feature, {
            geometry: i
        }) : Hi(i)
    }

    function Hi(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }
    var Vi = {
        toGeoJSON: function(t) {
            return Wi(this, {
                type: "Point",
                coordinates: Gi(this.getLatLng(), t)
            })
        }
    };

    function Ki(t, e) {
        return new Di(t, e)
    }
    ki.include(Vi), Bi.include(Vi), Zi.include(Vi), Oi.include({
        toGeoJSON: function(t) {
            var e = !_i(this._latlngs);
            return Wi(this, {
                type: (e ? "Multi" : "") + "LineString",
                coordinates: qi(this._latlngs, e ? 1 : 0, !1, t)
            })
        }
    }), Ri.include({
        toGeoJSON: function(t) {
            var e = !_i(this._latlngs),
                i = e && !_i(this._latlngs[0]),
                n = qi(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
            return e || (n = [n]), Wi(this, {
                type: (i ? "Multi" : "") + "Polygon",
                coordinates: n
            })
        }
    }), Ci.include({
        toMultiPoint: function(t) {
            var e = [];
            return this.eachLayer((function(i) {
                e.push(i.toGeoJSON(t).geometry.coordinates)
            })), Wi(this, {
                type: "MultiPoint",
                coordinates: e
            })
        },
        toGeoJSON: function(t) {
            var e = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === e) return this.toMultiPoint(t);
            var i = "GeometryCollection" === e,
                n = [];
            return this.eachLayer((function(e) {
                var o, s;
                e.toGeoJSON && (o = e.toGeoJSON(t), i ? n.push(o.geometry) : "FeatureCollection" === (s = Hi(o)).type ? n.push.apply(n, s.features) : n.push(s))
            })), i ? Wi(this, {
                geometries: n,
                type: "GeometryCollection"
            }) : {
                type: "FeatureCollection",
                features: n
            }
        }
    });
    var Ji = Ki,
        Yi = Si.extend({
            options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: ""
            },
            initialize: function(t, e, i) {
                this._url = t, this._bounds = D(e), p(this, i)
            },
            onAdd: function() {
                this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (ce(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
            },
            onRemove: function() {
                re(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._image && this._updateOpacity(), this
            },
            setStyle: function(t) {
                return t.opacity && this.setOpacity(t.opacity), this
            },
            bringToFront: function() {
                return this._map && he(this._image), this
            },
            bringToBack: function() {
                return this._map && le(this._image), this
            },
            setUrl: function(t) {
                return this._url = t, this._image && (this._image.src = t), this
            },
            setBounds: function(t) {
                return this._bounds = D(t), this._map && this._reset(), this
            },
            getEvents: function() {
                var t = {
                    zoom: this._reset,
                    viewreset: this._reset
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            getBounds: function() {
                return this._bounds
            },
            getElement: function() {
                return this._image
            },
            _initImage: function() {
                var t = "IMG" === this._url.tagName,
                    e = this._image = t ? this._url : se("img");
                ce(e, "leaflet-image-layer"), this._zoomAnimated && ce(e, "leaflet-zoom-animated"), this.options.className && ce(e, this.options.className), e.onselectstart = l, e.onmousemove = l, e.onload = o(this.fire, this, "load"), e.onerror = o(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt)
            },
            _animateZoom: function(t) {
                var e = this._map.getZoomScale(t.zoom),
                    i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                ge(this._image, i, e)
            },
            _reset: function() {
                var t = this._image,
                    e = new B(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                    i = e.getSize();
                ve(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px"
            },
            _updateOpacity: function() {
                me(this._image, this.options.opacity)
            },
            _updateZIndex: function() {
                this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
            },
            _overlayOnError: function() {
                this.fire("error");
                var t = this.options.errorOverlayUrl;
                t && this._url !== t && (this._url = t, this._image.src = t)
            }
        }),
        Qi = Yi.extend({
            options: {
                autoplay: !0,
                loop: !0,
                keepAspectRatio: !0,
                muted: !1
            },
            _initImage: function() {
                var t = "VIDEO" === this._url.tagName,
                    e = this._image = t ? this._url : se("video");
                if (ce(e, "leaflet-image-layer"), this._zoomAnimated && ce(e, "leaflet-zoom-animated"), this.options.className && ce(e, this.options.className), e.onselectstart = l, e.onmousemove = l, e.onloadeddata = o(this.fire, this, "load"), t) {
                    for (var i = e.getElementsByTagName("source"), n = [], s = 0; s < i.length; s++) n.push(i[s].src);
                    this._url = 0 < i.length ? n : [e.src]
                } else {
                    g(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted;
                    for (var r = 0; r < this._url.length; r++) {
                        var a = se("source");
                        a.src = this._url[r], e.appendChild(a)
                    }
                }
            }
        }),
        Xi = Yi.extend({
            _initImage: function() {
                var t = this._image = this._url;
                ce(t, "leaflet-image-layer"), this._zoomAnimated && ce(t, "leaflet-zoom-animated"), this.options.className && ce(t, this.options.className), t.onselectstart = l, t.onmousemove = l
            }
        }),
        $i = Si.extend({
            options: {
                offset: [0, 7],
                className: "",
                pane: "popupPane"
            },
            initialize: function(t, e) {
                p(this, t), this._source = e
            },
            onAdd: function(t) {
                this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && me(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && me(this._container, 1), this.bringToFront()
            },
            onRemove: function(t) {
                t._fadeAnimated ? (me(this._container, 0), this._removeTimeout = setTimeout(o(re, void 0, this._container), 200)) : re(this._container)
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                return this._latlng = N(t), this._map && (this._updatePosition(), this._adjustPan()), this
            },
            getContent: function() {
                return this._content
            },
            setContent: function(t) {
                return this._content = t, this.update(), this
            },
            getElement: function() {
                return this._container
            },
            update: function() {
                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
            },
            getEvents: function() {
                var t = {
                    zoom: this._updatePosition,
                    viewreset: this._updatePosition
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            isOpen: function() {
                return !!this._map && this._map.hasLayer(this)
            },
            bringToFront: function() {
                return this._map && he(this._container), this
            },
            bringToBack: function() {
                return this._map && le(this._container), this
            },
            _prepareOpen: function(t, e, i) {
                if (e instanceof Si || (i = e, e = t), e instanceof Mi)
                    for (var n in t._layers) {
                        e = t._layers[n];
                        break
                    }
                if (!i)
                    if (e.getCenter) i = e.getCenter();
                    else {
                        if (!e.getLatLng) throw new Error("Unable to get source layer LatLng.");
                        i = e.getLatLng()
                    }
                return this._source = e, this.update(), i
            },
            _updateContent: function() {
                if (this._content) {
                    var t = this._contentNode,
                        e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                    if ("string" == typeof e) t.innerHTML = e;
                    else {
                        for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                        t.appendChild(e)
                    }
                    this.fire("contentupdate")
                }
            },
            _updatePosition: function() {
                var t, e, i, n, o;
                this._map && (t = this._map.latLngToLayerPoint(this._latlng), e = Z(this.options.offset), i = this._getAnchor(), this._zoomAnimated ? ve(this._container, t.add(i)) : e = e.add(t).add(i), n = this._containerBottom = -e.y, o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x, this._container.style.bottom = n + "px", this._container.style.left = o + "px")
            },
            _getAnchor: function() {
                return [0, 0]
            }
        }),
        tn = $i.extend({
            options: {
                maxWidth: 300,
                minWidth: 50,
                maxHeight: null,
                autoPan: !0,
                autoPanPaddingTopLeft: null,
                autoPanPaddingBottomRight: null,
                autoPanPadding: [5, 5],
                keepInView: !1,
                closeButton: !0,
                autoClose: !0,
                closeOnEscapeKey: !0,
                className: ""
            },
            openOn: function(t) {
                return t.openPopup(this), this
            },
            onAdd: function(t) {
                $i.prototype.onAdd.call(this, t), t.fire("popupopen", {
                    popup: this
                }), this._source && (this._source.fire("popupopen", {
                    popup: this
                }, !0), this._source instanceof Ei || this._source.on("preclick", Ze))
            },
            onRemove: function(t) {
                $i.prototype.onRemove.call(this, t), t.fire("popupclose", {
                    popup: this
                }), this._source && (this._source.fire("popupclose", {
                    popup: this
                }, !0), this._source instanceof Ei || this._source.off("preclick", Ze))
            },
            getEvents: function() {
                var t = $i.prototype.getEvents.call(this);
                return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
            },
            _close: function() {
                this._map && this._map.closePopup(this)
            },
            _initLayout: function() {
                var t, e = "leaflet-popup",
                    i = this._container = se("div", e + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                    n = this._wrapper = se("div", e + "-content-wrapper", i);
                this._contentNode = se("div", e + "-content", n), Oe(i), Be(this._contentNode), Ce(i, "contextmenu", Ze), this._tipContainer = se("div", e + "-tip-container", i), this._tip = se("div", e + "-tip", this._tipContainer), this.options.closeButton && ((t = this._closeButton = se("a", e + "-close-button", i)).href = "#close", t.innerHTML = "&#215;", Ce(t, "click", this._onCloseButtonClick, this))
            },
            _updateLayout: function() {
                var t = this._contentNode,
                    e = t.style;
                e.width = "", e.whiteSpace = "nowrap";
                var i = t.offsetWidth;
                i = Math.min(i, this.options.maxWidth);
                i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
                var n = t.offsetHeight,
                    o = this.options.maxHeight,
                    s = "leaflet-popup-scrolled";
                o && o < n ? (e.height = o + "px", ce(t, s)) : de(t, s), this._containerWidth = this._container.offsetWidth
            },
            _animateZoom: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                    i = this._getAnchor();
                ve(this._container, e.add(i))
            },
            _adjustPan: function() {
                var t, e, i, n, o, s, r, a, h, l, u, c;
                this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(), t = this._map, e = parseInt(oe(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + e, n = this._containerWidth, (o = new k(this._containerLeft, -i - this._containerBottom))._add(ye(this._container)), s = t.layerPointToContainerPoint(o), r = Z(this.options.autoPanPadding), a = Z(this.options.autoPanPaddingTopLeft || r), h = Z(this.options.autoPanPaddingBottomRight || r), l = t.getSize(), c = u = 0, s.x + n + h.x > l.x && (u = s.x + n - l.x + h.x), s.x - u - a.x < 0 && (u = s.x - a.x), s.y + i + h.y > l.y && (c = s.y + i - l.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (u || c) && t.fire("autopanstart").panBy([u, c]))
            },
            _onCloseButtonClick: function(t) {
                this._close(), De(t)
            },
            _getAnchor: function() {
                return Z(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
            }
        });
    Ke.mergeOptions({
        closePopupOnClick: !0
    }), Ke.include({
        openPopup: function(t, e, i) {
            return t instanceof tn || (t = new tn(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
        },
        closePopup: function(t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
        }
    }), Si.include({
        bindPopup: function(t, e) {
            return t instanceof tn ? (p(t, e), (this._popup = t)._source = this) : (this._popup && !e || (this._popup = new tn(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !0), this
        },
        unbindPopup: function() {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !1, this._popup = null), this
        },
        openPopup: function(t, e) {
            return this._popup && this._map && (e = this._popup._prepareOpen(this, t, e), this._map.openPopup(this._popup, e)), this
        },
        closePopup: function() {
            return this._popup && this._popup._close(), this
        },
        togglePopup: function(t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
        },
        isPopupOpen: function() {
            return !!this._popup && this._popup.isOpen()
        },
        setPopupContent: function(t) {
            return this._popup && this._popup.setContent(t), this
        },
        getPopup: function() {
            return this._popup
        },
        _openPopup: function(t) {
            var e = t.layer || t.target;
            this._popup && this._map && (De(t), e instanceof Ei ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
        },
        _movePopup: function(t) {
            this._popup.setLatLng(t.latlng)
        },
        _onKeyPress: function(t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    });
    var en = $i.extend({
        options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: .9
        },
        onAdd: function(t) {
            $i.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                tooltip: this
            }), this._source && this._source.fire("tooltipopen", {
                tooltip: this
            }, !0)
        },
        onRemove: function(t) {
            $i.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                tooltip: this
            }), this._source && this._source.fire("tooltipclose", {
                tooltip: this
            }, !0)
        },
        getEvents: function() {
            var t = $i.prototype.getEvents.call(this);
            return Pt && !this.options.permanent && (t.preclick = this._close), t
        },
        _close: function() {
            this._map && this._map.closeTooltip(this)
        },
        _initLayout: function() {
            var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = se("div", t)
        },
        _updateLayout: function() {},
        _adjustPan: function() {},
        _setPosition: function(t) {
            var e, i = this._map,
                n = this._container,
                o = i.latLngToContainerPoint(i.getCenter()),
                s = i.layerPointToContainerPoint(t),
                r = this.options.direction,
                a = n.offsetWidth,
                h = n.offsetHeight,
                l = Z(this.options.offset),
                u = this._getAnchor(),
                c = "top" === r ? (e = a / 2, h) : "bottom" === r ? (e = a / 2, 0) : (e = "center" === r ? a / 2 : "right" === r ? 0 : "left" === r ? a : s.x < o.x ? (r = "right", 0) : (r = "left", a + 2 * (l.x + u.x)), h / 2);
            t = t.subtract(Z(e, c, !0)).add(l).add(u), de(n, "leaflet-tooltip-right"), de(n, "leaflet-tooltip-left"), de(n, "leaflet-tooltip-top"), de(n, "leaflet-tooltip-bottom"), ce(n, "leaflet-tooltip-" + r), ve(n, t)
        },
        _updatePosition: function() {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        setOpacity: function(t) {
            this.options.opacity = t, this._container && me(this._container, t)
        },
        _animateZoom: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(e)
        },
        _getAnchor: function() {
            return Z(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
    });
    Ke.include({
        openTooltip: function(t, e, i) {
            return t instanceof en || (t = new en(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t)
        },
        closeTooltip: function(t) {
            return t && this.removeLayer(t), this
        }
    }), Si.include({
        bindTooltip: function(t, e) {
            return t instanceof en ? (p(t, e), (this._tooltip = t)._source = this) : (this._tooltip && !e || (this._tooltip = new en(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
        },
        unbindTooltip: function() {
            return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
        },
        _initTooltipInteractions: function(t) {
            var e, i;
            !t && this._tooltipHandlersAdded || (e = t ? "off" : "on", i = {
                remove: this.closeTooltip,
                move: this._moveTooltip
            }, this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), Pt && (i.click = this._openTooltip)), this[e](i), this._tooltipHandlersAdded = !t)
        },
        openTooltip: function(t, e) {
            return this._tooltip && this._map && (e = this._tooltip._prepareOpen(this, t, e), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (ce(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
        },
        closeTooltip: function() {
            return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (de(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
        },
        toggleTooltip: function(t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
        },
        isTooltipOpen: function() {
            return this._tooltip.isOpen()
        },
        setTooltipContent: function(t) {
            return this._tooltip && this._tooltip.setContent(t), this
        },
        getTooltip: function() {
            return this._tooltip
        },
        _openTooltip: function(t) {
            var e = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
        },
        _moveTooltip: function(t) {
            var e, i, n = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), i = this._map.containerPointToLayerPoint(e), n = this._map.layerPointToLatLng(i)), this._tooltip.setLatLng(n)
        }
    });
    var nn = Ai.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function(t) {
            var e, i = t && "DIV" === t.tagName ? t : document.createElement("div"),
                n = this.options;
            return n.html instanceof Element ? (ae(i), i.appendChild(n.html)) : i.innerHTML = !1 !== n.html ? n.html : "", n.bgPos && (e = Z(n.bgPos), i.style.backgroundPosition = -e.x + "px " + -e.y + "px"), this._setIconStyles(i, "icon"), i
        },
        createShadow: function() {
            return null
        }
    });
    Ai.Default = Ii;
    var on = Si.extend({
            options: {
                tileSize: 256,
                opacity: 1,
                updateWhenIdle: yt,
                updateWhenZooming: !0,
                updateInterval: 200,
                zIndex: 1,
                bounds: null,
                minZoom: 0,
                maxZoom: void 0,
                maxNativeZoom: void 0,
                minNativeZoom: void 0,
                noWrap: !1,
                pane: "tilePane",
                className: "",
                keepBuffer: 2
            },
            initialize: function(t) {
                p(this, t)
            },
            onAdd: function() {
                this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
            },
            beforeAdd: function(t) {
                t._addZoomLimit(this)
            },
            onRemove: function(t) {
                this._removeAllTiles(), re(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
            },
            bringToFront: function() {
                return this._map && (he(this._container), this._setAutoZIndex(Math.max)), this
            },
            bringToBack: function() {
                return this._map && (le(this._container), this._setAutoZIndex(Math.min)), this
            },
            getContainer: function() {
                return this._container
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._updateOpacity(), this
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            isLoading: function() {
                return this._loading
            },
            redraw: function() {
                return this._map && (this._removeAllTiles(), this._update()), this
            },
            getEvents: function() {
                var t = {
                    viewprereset: this._invalidateAll,
                    viewreset: this._resetView,
                    zoom: this._resetView,
                    moveend: this._onMoveEnd
                };
                return this.options.updateWhenIdle || (this._onMove || (this._onMove = a(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            createTile: function() {
                return document.createElement("div")
            },
            getTileSize: function() {
                var t = this.options.tileSize;
                return t instanceof k ? t : new k(t, t)
            },
            _updateZIndex: function() {
                this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
            },
            _setAutoZIndex: function(t) {
                for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++) e = i[o].style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
                isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
            },
            _updateOpacity: function() {
                if (this._map && !et) {
                    me(this._container, this.options.opacity);
                    var t = +new Date,
                        e = !1,
                        i = !1;
                    for (var n in this._tiles) {
                        var o, s = this._tiles[n];
                        s.current && s.loaded && (o = Math.min(1, (t - s.loaded) / 200), me(s.el, o), o < 1 ? e = !0 : (s.active ? i = !0 : this._onOpaqueTile(s), s.active = !0))
                    }
                    i && !this._noPrune && this._pruneTiles(), e && (C(this._fadeFrame), this._fadeFrame = S(this._updateOpacity, this))
                }
            },
            _onOpaqueTile: l,
            _initContainer: function() {
                this._container || (this._container = se("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
            },
            _updateLevels: function() {
                var t = this._tileZoom,
                    e = this.options.maxZoom;
                if (void 0 !== t) {
                    for (var i in this._levels) i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (re(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
                    var n = this._levels[t],
                        o = this._map;
                    return n || ((n = this._levels[t] = {}).el = se("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n
                }
            },
            _onUpdateLevel: l,
            _onRemoveLevel: l,
            _onCreateLevel: l,
            _pruneTiles: function() {
                if (this._map) {
                    var t, e, i, n = this._map.getZoom();
                    if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();
                    else {
                        for (t in this._tiles)(i = this._tiles[t]).retain = i.current;
                        for (t in this._tiles)(i = this._tiles[t]).current && !i.active && (e = i.coords, this._retainParent(e.x, e.y, e.z, e.z - 5) || this._retainChildren(e.x, e.y, e.z, e.z + 2));
                        for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                    }
                }
            },
            _removeTilesAtZoom: function(t) {
                for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
            },
            _removeAllTiles: function() {
                for (var t in this._tiles) this._removeTile(t)
            },
            _invalidateAll: function() {
                for (var t in this._levels) re(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
                this._removeAllTiles(), this._tileZoom = void 0
            },
            _retainParent: function(t, e, i, n) {
                var o = Math.floor(t / 2),
                    s = Math.floor(e / 2),
                    r = i - 1,
                    a = new k(+o, +s);
                a.z = +r;
                var h = this._tileCoordsToKey(a),
                    l = this._tiles[h];
                return l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), n < r && this._retainParent(o, s, r, n))
            },
            _retainChildren: function(t, e, i, n) {
                for (var o = 2 * t; o < 2 * t + 2; o++)
                    for (var s = 2 * e; s < 2 * e + 2; s++) {
                        var r = new k(o, s);
                        r.z = i + 1;
                        var a = this._tileCoordsToKey(r),
                            h = this._tiles[a];
                        h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n))
                    }
            },
            _resetView: function(t) {
                var e = t && (t.pinch || t.flyTo);
                this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
            },
            _animateZoom: function(t) {
                this._setView(t.center, t.zoom, !0, t.noUpdate)
            },
            _clampZoom: function(t) {
                var e = this.options;
                return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
            },
            _setView: function(t, e, i, n) {
                var o = Math.round(e),
                    s = (o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o), this.options.updateWhenZooming && o !== this._tileZoom);
                n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e)
            },
            _setZoomTransforms: function(t, e) {
                for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e)
            },
            _setZoomTransform: function(t, e, i) {
                var n = this._map.getZoomScale(i, t.zoom),
                    o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
                vt ? ge(t.el, o, n) : ve(t.el, o)
            },
            _resetGrid: function() {
                var t = this._map,
                    e = t.options.crs,
                    i = this._tileSize = this.getTileSize(),
                    n = this._tileZoom,
                    o = this._map.getPixelWorldBounds(this._tileZoom);
                o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
            },
            _onMoveEnd: function() {
                this._map && !this._map._animatingZoom && this._update()
            },
            _getTiledPixelBounds: function(t) {
                var e = this._map,
                    i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                    n = e.getZoomScale(i, this._tileZoom),
                    o = e.project(t, this._tileZoom).floor(),
                    s = e.getSize().divideBy(2 * n);
                return new B(o.subtract(s), o.add(s))
            },
            _update: function(t) {
                var e = this._map;
                if (e) {
                    var i = this._clampZoom(e.getZoom());
                    if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                        var n = this._getTiledPixelBounds(t),
                            o = this._pxBoundsToTileRange(n),
                            s = o.getCenter(),
                            r = [],
                            a = this.options.keepBuffer,
                            h = new B(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                        if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                        for (var l in this._tiles) {
                            var u = this._tiles[l].coords;
                            u.z === this._tileZoom && h.contains(new k(u.x, u.y)) || (this._tiles[l].current = !1)
                        }
                        if (1 < Math.abs(i - this._tileZoom)) this._setView(t, i);
                        else {
                            for (var c = o.min.y; c <= o.max.y; c++)
                                for (var d = o.min.x; d <= o.max.x; d++) {
                                    var p, _ = new k(d, c);
                                    _.z = this._tileZoom, this._isValidTile(_) && ((p = this._tiles[this._tileCoordsToKey(_)]) ? p.current = !0 : r.push(_))
                                }
                            if (r.sort((function(t, e) {
                                    return t.distanceTo(s) - e.distanceTo(s)
                                })), 0 !== r.length) {
                                this._loading || (this._loading = !0, this.fire("loading"));
                                var m = document.createDocumentFragment();
                                for (d = 0; d < r.length; d++) this._addTile(r[d], m);
                                this._level.el.appendChild(m)
                            }
                        }
                    }
                }
            },
            _isValidTile: function(t) {
                var e = this._map.options.crs;
                if (!e.infinite) {
                    var i = this._globalTileRange;
                    if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1
                }
                if (!this.options.bounds) return !0;
                var n = this._tileCoordsToBounds(t);
                return D(this.options.bounds).overlaps(n)
            },
            _keyToBounds: function(t) {
                return this._tileCoordsToBounds(this._keyToTileCoords(t))
            },
            _tileCoordsToNwSe: function(t) {
                var e = this._map,
                    i = this.getTileSize(),
                    n = t.scaleBy(i),
                    o = n.add(i);
                return [e.unproject(n, t.z), e.unproject(o, t.z)]
            },
            _tileCoordsToBounds: function(t) {
                var e = this._tileCoordsToNwSe(t),
                    i = new R(e[0], e[1]);
                return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i
            },
            _tileCoordsToKey: function(t) {
                return t.x + ":" + t.y + ":" + t.z
            },
            _keyToTileCoords: function(t) {
                var e = t.split(":"),
                    i = new k(+e[0], +e[1]);
                return i.z = +e[2], i
            },
            _removeTile: function(t) {
                var e = this._tiles[t];
                e && (re(e.el), delete this._tiles[t], this.fire("tileunload", {
                    tile: e.el,
                    coords: this._keyToTileCoords(t)
                }))
            },
            _initTile: function(t) {
                ce(t, "leaflet-tile");
                var e = this.getTileSize();
                t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = l, t.onmousemove = l, et && this.options.opacity < 1 && me(t, this.options.opacity), ot && !st && (t.style.WebkitBackfaceVisibility = "hidden")
            },
            _addTile: function(t, e) {
                var i = this._getTilePos(t),
                    n = this._tileCoordsToKey(t),
                    s = this.createTile(this._wrapCoords(t), o(this._tileReady, this, t));
                this._initTile(s), this.createTile.length < 2 && S(o(this._tileReady, this, t, null, s)), ve(s, i), this._tiles[n] = {
                    el: s,
                    coords: t,
                    current: !0
                }, e.appendChild(s), this.fire("tileloadstart", {
                    tile: s,
                    coords: t
                })
            },
            _tileReady: function(t, e, i) {
                e && this.fire("tileerror", {
                    error: e,
                    tile: i,
                    coords: t
                });
                var n = this._tileCoordsToKey(t);
                (i = this._tiles[n]) && (i.loaded = +new Date, this._map._fadeAnimated ? (me(i.el, 0), C(this._fadeFrame), this._fadeFrame = S(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (ce(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
                    tile: i.el,
                    coords: t
                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), et || !this._map._fadeAnimated ? S(this._pruneTiles, this) : setTimeout(o(this._pruneTiles, this), 250)))
            },
            _getTilePos: function(t) {
                return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
            },
            _wrapCoords: function(t) {
                var e = new k(this._wrapX ? h(t.x, this._wrapX) : t.x, this._wrapY ? h(t.y, this._wrapY) : t.y);
                return e.z = t.z, e
            },
            _pxBoundsToTileRange: function(t) {
                var e = this.getTileSize();
                return new B(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
            },
            _noTilesToLoad: function() {
                for (var t in this._tiles)
                    if (!this._tiles[t].loaded) return !1;
                return !0
            }
        }),
        sn = on.extend({
            options: {
                minZoom: 0,
                maxZoom: 18,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1
            },
            initialize: function(t, e) {
                this._url = t, (e = p(this, e)).detectRetina && Ct && 0 < e.maxZoom && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), ot || this.on("tileunload", this._onTileRemove)
            },
            setUrl: function(t, e) {
                return this._url === t && void 0 === e && (e = !0), this._url = t, e || this.redraw(), this
            },
            createTile: function(t, e) {
                var i = document.createElement("img");
                return Ce(i, "load", o(this._tileOnLoad, this, e, i)), Ce(i, "error", o(this._tileOnError, this, e, i)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), i.alt = "", i.setAttribute("role", "presentation"), i.src = this.getTileUrl(t), i
            },
            getTileUrl: function(t) {
                var i, n = {
                    r: Ct ? "@2x" : "",
                    s: this._getSubdomain(t),
                    x: t.x,
                    y: t.y,
                    z: this._getZoomForUrl()
                };
                return this._map && !this._map.options.crs.infinite && (i = this._globalTileRange.max.y - t.y, this.options.tms && (n.y = i), n["-y"] = i), f(this._url, e(n, this.options))
            },
            _tileOnLoad: function(t, e) {
                et ? setTimeout(o(t, this, null, e), 0) : t(null, e)
            },
            _tileOnError: function(t, e, i) {
                var n = this.options.errorTileUrl;
                n && e.getAttribute("src") !== n && (e.src = n), t(i, e)
            },
            _onTileRemove: function(t) {
                t.tile.onload = null
            },
            _getZoomForUrl: function() {
                var t = this._tileZoom,
                    e = this.options.maxZoom;
                return this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset
            },
            _getSubdomain: function(t) {
                var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[e]
            },
            _abortLoading: function() {
                var t, e;
                for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = l, e.onerror = l, e.complete || (e.src = y, re(e), delete this._tiles[t]))
            },
            _removeTile: function(t) {
                var e = this._tiles[t];
                if (e) return at || e.el.setAttribute("src", y), on.prototype._removeTile.call(this, t)
            },
            _tileReady: function(t, e, i) {
                if (this._map && (!i || i.getAttribute("src") !== y)) return on.prototype._tileReady.call(this, t, e, i)
            }
        });

    function rn(t, e) {
        return new sn(t, e)
    }
    var an = sn.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1,
            version: "1.1.1"
        },
        options: {
            crs: null,
            uppercase: !1
        },
        initialize: function(t, i) {
            this._url = t;
            var n = e({}, this.defaultWmsParams);
            for (var o in i) o in this.options || (n[o] = i[o]);
            var s = (i = p(this, i)).detectRetina && Ct ? 2 : 1,
                r = this.getTileSize();
            n.width = r.x * s, n.height = r.y * s, this.wmsParams = n
        },
        onAdd: function(t) {
            this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
            var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
            this.wmsParams[e] = this._crs.code, sn.prototype.onAdd.call(this, t)
        },
        getTileUrl: function(t) {
            var e = this._tileCoordsToNwSe(t),
                i = this._crs,
                n = O(i.project(e[0]), i.project(e[1])),
                o = n.min,
                s = n.max,
                r = (1.3 <= this._wmsVersion && this._crs === Pi ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
                a = sn.prototype.getTileUrl.call(this, t);
            return a + _(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r
        },
        setParams: function(t, i) {
            return e(this.wmsParams, t), i || this.redraw(), this
        }
    });
    sn.WMS = an, rn.wms = function(t, e) {
        return new an(t, e)
    };
    var hn = Si.extend({
            options: {
                padding: .1,
                tolerance: 0
            },
            initialize: function(t) {
                p(this, t), r(this), this._layers = this._layers || {}
            },
            onAdd: function() {
                this._container || (this._initContainer(), this._zoomAnimated && ce(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
            },
            onRemove: function() {
                this.off("update", this._updatePaths, this), this._destroyContainer()
            },
            getEvents: function() {
                var t = {
                    viewreset: this._reset,
                    zoom: this._onZoom,
                    moveend: this._update,
                    zoomend: this._onZoomEnd
                };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
            },
            _onAnimZoom: function(t) {
                this._updateTransform(t.center, t.zoom)
            },
            _onZoom: function() {
                this._updateTransform(this._map.getCenter(), this._map.getZoom())
            },
            _updateTransform: function(t, e) {
                var i = this._map.getZoomScale(e, this._zoom),
                    n = ye(this._container),
                    o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                    s = this._map.project(this._center, e),
                    r = this._map.project(t, e).subtract(s),
                    a = o.multiplyBy(-i).add(n).add(o).subtract(r);
                vt ? ge(this._container, a, i) : ve(this._container, a)
            },
            _reset: function() {
                for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
            },
            _onZoomEnd: function() {
                for (var t in this._layers) this._layers[t]._project()
            },
            _updatePaths: function() {
                for (var t in this._layers) this._layers[t]._update()
            },
            _update: function() {
                var t = this.options.padding,
                    e = this._map.getSize(),
                    i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                this._bounds = new B(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
            }
        }),
        ln = hn.extend({
            getEvents: function() {
                var t = hn.prototype.getEvents.call(this);
                return t.viewprereset = this._onViewPreReset, t
            },
            _onViewPreReset: function() {
                this._postponeUpdatePaths = !0
            },
            onAdd: function() {
                hn.prototype.onAdd.call(this), this._draw()
            },
            _initContainer: function() {
                var t = this._container = document.createElement("canvas");
                Ce(t, "mousemove", this._onMouseMove, this), Ce(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Ce(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
            },
            _destroyContainer: function() {
                C(this._redrawRequest), delete this._ctx, re(this._container), Ae(this._container), delete this._container
            },
            _updatePaths: function() {
                if (!this._postponeUpdatePaths) {
                    for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                    this._redraw()
                }
            },
            _update: function() {
                var t, e, i, n;
                this._map._animatingZoom && this._bounds || (hn.prototype._update.call(this), t = this._bounds, e = this._container, i = t.getSize(), n = Ct ? 2 : 1, ve(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", Ct && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update"))
            },
            _reset: function() {
                hn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
            },
            _initPath: function(t) {
                this._updateDashArray(t);
                var e = (this._layers[r(t)] = t)._order = {
                    layer: t,
                    prev: this._drawLast,
                    next: null
                };
                this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
            },
            _addPath: function(t) {
                this._requestRedraw(t)
            },
            _removePath: function(t) {
                var e = t._order,
                    i = e.next,
                    n = e.prev;
                i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[r(t)], this._requestRedraw(t)
            },
            _updatePath: function(t) {
                this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
            },
            _updateStyle: function(t) {
                this._updateDashArray(t), this._requestRedraw(t)
            },
            _updateDashArray: function(t) {
                if ("string" == typeof t.options.dashArray) {
                    for (var e, i = t.options.dashArray.split(/[, ]+/), n = [], o = 0; o < i.length; o++) {
                        if (e = Number(i[o]), isNaN(e)) return;
                        n.push(e)
                    }
                    t.options._dashArray = n
                } else t.options._dashArray = t.options.dashArray
            },
            _requestRedraw: function(t) {
                this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || S(this._redraw, this))
            },
            _extendRedrawBounds: function(t) {
                var e;
                t._pxBounds && (e = (t.options.weight || 0) + 1, this._redrawBounds = this._redrawBounds || new B, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e])))
            },
            _redraw: function() {
                this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
            },
            _clear: function() {
                var t, e = this._redrawBounds;
                e ? (t = e.getSize(), this._ctx.clearRect(e.min.x, e.min.y, t.x, t.y)) : (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore())
            },
            _draw: function() {
                var t, e, i = this._redrawBounds;
                this._ctx.save(), i && (e = i.getSize(), this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()), this._drawing = !0;
                for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
                this._drawing = !1, this._ctx.restore()
            },
            _updatePoly: function(t, e) {
                if (this._drawing) {
                    var i, n, o, s, r = t._parts,
                        a = r.length,
                        h = this._ctx;
                    if (a) {
                        for (h.beginPath(), i = 0; i < a; i++) {
                            for (n = 0, o = r[i].length; n < o; n++) s = r[i][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
                            e && h.closePath()
                        }
                        this._fillStroke(h, t)
                    }
                }
            },
            _updateCircle: function(t) {
                var e, i, n, o;
                this._drawing && !t._empty() && (e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), 1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 != o && i.restore(), this._fillStroke(i, t))
            },
            _fillStroke: function(t, e) {
                var i = e.options;
                i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke())
            },
            _onClick: function(t) {
                for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(n) && (("click" === t.type || "preclick" !== t.type) && this._map._draggableMoved(e) || (i = e));
                i && (Ge(t), this._fireEvent([i], t))
            },
            _onMouseMove: function(t) {
                var e;
                !this._map || this._map.dragging.moving() || this._map._animatingZoom || (e = this._map.mouseEventToLayerPoint(t), this._handleMouseHover(t, e))
            },
            _handleMouseOut: function(t) {
                var e = this._hoveredLayer;
                e && (de(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1)
            },
            _handleMouseHover: function(t, e) {
                if (!this._mouseHoverThrottled) {
                    for (var i, n, s = this._drawFirst; s; s = s.next)(i = s.layer).options.interactive && i._containsPoint(e) && (n = i);
                    n !== this._hoveredLayer && (this._handleMouseOut(t), n && (ce(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(o((function() {
                        this._mouseHoverThrottled = !1
                    }), this), 32)
                }
            },
            _fireEvent: function(t, e, i) {
                this._map._fireDOMEvent(e, i || e.type, t)
            },
            _bringToFront: function(t) {
                var e, i, n = t._order;
                n && (e = n.next, i = n.prev, e && ((e.prev = i) ? i.next = e : e && (this._drawFirst = e), n.prev = this._drawLast, (this._drawLast.next = n).next = null, this._drawLast = n, this._requestRedraw(t)))
            },
            _bringToBack: function(t) {
                var e, i, n = t._order;
                n && (e = n.next, (i = n.prev) && ((i.next = e) ? e.prev = i : i && (this._drawLast = i), n.prev = null, n.next = this._drawFirst, this._drawFirst.prev = n, this._drawFirst = n, this._requestRedraw(t)))
            }
        });

    function un(t) {
        return At ? new ln(t) : null
    }
    var cn = function() {
            try {
                return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                    function(t) {
                        return document.createElement("<lvml:" + t + ' class="lvml">')
                    }
            } catch (t) {
                return function(t) {
                    return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }
        }(),
        dn = {
            _initContainer: function() {
                this._container = se("div", "leaflet-vml-container")
            },
            _update: function() {
                this._map._animatingZoom || (hn.prototype._update.call(this), this.fire("update"))
            },
            _initPath: function(t) {
                var e = t._container = cn("shape");
                ce(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = cn("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[r(t)] = t
            },
            _addPath: function(t) {
                var e = t._container;
                this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
            },
            _removePath: function(t) {
                var e = t._container;
                re(e), t.removeInteractiveTarget(e), delete this._layers[r(t)]
            },
            _updateStyle: function(t) {
                var e = t._stroke,
                    i = t._fill,
                    n = t.options,
                    o = t._container;
                o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e = e || (t._stroke = cn("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = g(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i = i || (t._fill = cn("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null)
            },
            _updateCircle: function(t) {
                var e = t._point.round(),
                    i = Math.round(t._radius),
                    n = Math.round(t._radiusY || i);
                this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
            },
            _setPath: function(t, e) {
                t._path.v = e
            },
            _bringToFront: function(t) {
                he(t._container)
            },
            _bringToBack: function(t) {
                le(t._container)
            }
        },
        pn = zt ? cn : Q,
        _n = hn.extend({
            getEvents: function() {
                var t = hn.prototype.getEvents.call(this);
                return t.zoomstart = this._onZoomStart, t
            },
            _initContainer: function() {
                this._container = pn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = pn("g"), this._container.appendChild(this._rootGroup)
            },
            _destroyContainer: function() {
                re(this._container), Ae(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
            },
            _onZoomStart: function() {
                this._update()
            },
            _update: function() {
                var t, e, i;
                this._map._animatingZoom && this._bounds || (hn.prototype._update.call(this), e = (t = this._bounds).getSize(), i = this._container, this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), ve(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update"))
            },
            _initPath: function(t) {
                var e = t._path = pn("path");
                t.options.className && ce(e, t.options.className), t.options.interactive && ce(e, "leaflet-interactive"), this._updateStyle(t), this._layers[r(t)] = t
            },
            _addPath: function(t) {
                this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
            },
            _removePath: function(t) {
                re(t._path), t.removeInteractiveTarget(t._path), delete this._layers[r(t)]
            },
            _updatePath: function(t) {
                t._project(), t._update()
            },
            _updateStyle: function(t) {
                var e = t._path,
                    i = t.options;
                e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
            },
            _updatePoly: function(t, e) {
                this._setPath(t, X(t._parts, e))
            },
            _updateCircle: function(t) {
                var e = t._point,
                    i = Math.max(Math.round(t._radius), 1),
                    n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 ",
                    o = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
                this._setPath(t, o)
            },
            _setPath: function(t, e) {
                t._path.setAttribute("d", e)
            },
            _bringToFront: function(t) {
                he(t._path)
            },
            _bringToBack: function(t) {
                le(t._path)
            }
        });

    function mn(t) {
        return It || zt ? new _n(t) : null
    }
    zt && _n.include(dn), Ke.include({
        getRenderer: function(t) {
            var e = (e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
            return this.hasLayer(e) || this.addLayer(e), e
        },
        _getPaneRenderer: function(t) {
            if ("overlayPane" === t || void 0 === t) return !1;
            var e = this._paneRenderers[t];
            return void 0 === e && (e = this._createRenderer({
                pane: t
            }), this._paneRenderers[t] = e), e
        },
        _createRenderer: function(t) {
            return this.options.preferCanvas && un(t) || mn(t)
        }
    });
    var fn = Ri.extend({
        initialize: function(t, e) {
            Ri.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        },
        setBounds: function(t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function(t) {
            return [(t = D(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    });
    _n.create = pn, _n.pointsToPath = X, Di.geometryToLayer = Fi, Di.coordsToLatLng = Ui, Di.coordsToLatLngs = ji, Di.latLngToCoords = Gi, Di.latLngsToCoords = qi, Di.getFeature = Wi, Di.asFeature = Hi, Ke.mergeOptions({
        boxZoom: !0
    });
    var gn = ei.extend({
        initialize: function(t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
        },
        addHooks: function() {
            Ce(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function() {
            Ae(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function() {
            return this._moved
        },
        _destroy: function() {
            re(this._pane), delete this._pane
        },
        _resetState: function() {
            this._resetStateTimeout = 0, this._moved = !1
        },
        _clearDeferredResetState: function() {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
        },
        _onMouseDown: function(t) {
            if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
            this._clearDeferredResetState(), this._resetState(), Vt(), xe(), this._startPoint = this._map.mouseEventToContainerPoint(t), Ce(document, {
                contextmenu: De,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseMove: function(t) {
            this._moved || (this._moved = !0, this._box = se("div", "leaflet-zoom-box", this._container), ce(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
            var e = new B(this._point, this._startPoint),
                i = e.getSize();
            ve(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px"
        },
        _finish: function() {
            this._moved && (re(this._box), de(this._container, "leaflet-crosshair")), Kt(), be(), Ae(document, {
                contextmenu: De,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseUp: function(t) {
            var e;
            1 !== t.which && 1 !== t.button || (this._finish(), this._moved && (this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(o(this._resetState, this), 0), e = new R(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point)), this._map.fitBounds(e).fire("boxzoomend", {
                boxZoomBounds: e
            })))
        },
        _onKeyDown: function(t) {
            27 === t.keyCode && this._finish()
        }
    });
    Ke.addInitHook("addHandler", "boxZoom", gn), Ke.mergeOptions({
        doubleClickZoom: !0
    });
    var vn = ei.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function(t) {
            var e = this._map,
                i = e.getZoom(),
                n = e.options.zoomDelta,
                o = t.originalEvent.shiftKey ? i - n : i + n;
            "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
        }
    });
    Ke.addInitHook("addHandler", "doubleClickZoom", vn), Ke.mergeOptions({
        dragging: !0,
        inertia: !st,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    });
    var yn = ei.extend({
        addHooks: function() {
            var t;
            this._draggable || (t = this._map, this._draggable = new ai(t._mapPane, t._container), this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))), ce(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
        },
        removeHooks: function() {
            de(this._map._container, "leaflet-grab"), de(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        moving: function() {
            return this._draggable && this._draggable._moving
        },
        _onDragStart: function() {
            var t, e = this._map;
            e._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = D(this._map.options.maxBounds), this._offsetLimit = O(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null, e.fire("movestart").fire("dragstart"), e.options.inertia && (this._positions = [], this._times = [])
        },
        _onDrag: function(t) {
            var e, i;
            this._map.options.inertia && (e = this._lastTime = +new Date, i = this._lastPos = this._draggable._absPos || this._draggable._newPos, this._positions.push(i), this._times.push(e), this._prunePositions(e)), this._map.fire("move", t).fire("drag", t)
        },
        _prunePositions: function(t) {
            for (; 1 < this._positions.length && 50 < t - this._times[0];) this._positions.shift(), this._times.shift()
        },
        _onZoomEnd: function() {
            var t = this._map.getSize().divideBy(2),
                e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function(t, e) {
            return t - (t - e) * this._viscosity
        },
        _onPreDragLimit: function() {
            var t, e;
            this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit, t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t))
        },
        _onPreDragWrap: function() {
            var t = this._worldWidth,
                e = Math.round(t / 2),
                i = this._initialWorldOffset,
                n = this._draggable._newPos.x,
                o = (n - e + i) % t + e - i,
                s = (n + e + i) % t - e - i,
                r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r
        },
        _onDragEnd: function(t) {
            var e, i, n, o, s, r, a, h, l, u = this._map,
                c = u.options,
                d = !c.inertia || this._times.length < 2;
            u.fire("dragend", t), d ? u.fire("moveend") : (this._prunePositions(+new Date), e = this._lastPos.subtract(this._positions[0]), i = (this._lastTime - this._times[0]) / 1e3, n = c.easeLinearity, s = (o = e.multiplyBy(n / i)).distanceTo([0, 0]), r = Math.min(c.inertiaMaxSpeed, s), a = o.multiplyBy(r / s), h = r / (c.inertiaDeceleration * n), (l = a.multiplyBy(-h / 2).round()).x || l.y ? (l = u._limitOffset(l, u.options.maxBounds), S((function() {
                u.panBy(l, {
                    duration: h,
                    easeLinearity: n,
                    noMoveStart: !0,
                    animate: !0
                })
            }))) : u.fire("moveend"))
        }
    });
    Ke.addInitHook("addHandler", "dragging", yn), Ke.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    });
    var xn = ei.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
            this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function() {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"), Ce(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        removeHooks: function() {
            this._removeHooks(), Ae(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        _onMouseDown: function() {
            var t, e, i, n;
            this._focused || (t = document.body, e = document.documentElement, i = t.scrollTop || e.scrollTop, n = t.scrollLeft || e.scrollLeft, this._map._container.focus(), window.scrollTo(n, i))
        },
        _onFocus: function() {
            this._focused = !0, this._map.fire("focus")
        },
        _onBlur: function() {
            this._focused = !1, this._map.fire("blur")
        },
        _setPanDelta: function(t) {
            for (var e = this._panKeys = {}, i = this.keyCodes, n = 0, o = i.left.length; n < o; n++) e[i.left[n]] = [-1 * t, 0];
            for (n = 0, o = i.right.length; n < o; n++) e[i.right[n]] = [t, 0];
            for (n = 0, o = i.down.length; n < o; n++) e[i.down[n]] = [0, t];
            for (n = 0, o = i.up.length; n < o; n++) e[i.up[n]] = [0, -1 * t]
        },
        _setZoomDelta: function(t) {
            for (var e = this._zoomKeys = {}, i = this.keyCodes, n = 0, o = i.zoomIn.length; n < o; n++) e[i.zoomIn[n]] = t;
            for (n = 0, o = i.zoomOut.length; n < o; n++) e[i.zoomOut[n]] = -t
        },
        _addHooks: function() {
            Ce(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function() {
            Ae(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function(t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e, i = t.keyCode,
                    n = this._map;
                if (i in this._panKeys) n._panAnim && n._panAnim._inProgress || (e = this._panKeys[i], t.shiftKey && (e = Z(e).multiplyBy(3)), n.panBy(e), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                else {
                    if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                    n.closePopup()
                }
                De(t)
            }
        }
    });
    Ke.addInitHook("addHandler", "keyboard", xn), Ke.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    var bn = ei.extend({
        addHooks: function() {
            Ce(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0
        },
        removeHooks: function() {
            Ae(this._map._container, "wheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function(t) {
            var e = Ue(t),
                i = this._map.options.wheelDebounceTime;
            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
            var n = Math.max(i - (new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(o(this._performZoom, this), n), De(t)
        },
        _performZoom: function() {
            var t = this._map,
                e = t.getZoom(),
                i = this._map.options.zoomSnap || 0;
            t._stop();
            var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                s = i ? Math.ceil(o / i) * i : o,
                r = t._limitZoom(e + (0 < this._delta ? s : -s)) - e;
            this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + r) : t.setZoomAround(this._lastMousePos, e + r))
        }
    });
    Ke.addInitHook("addHandler", "scrollWheelZoom", bn), Ke.mergeOptions({
        tap: !0,
        tapTolerance: 15
    });
    var wn = ei.extend({
        addHooks: function() {
            Ce(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function() {
            Ae(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function(t) {
            if (t.touches) {
                if (Re(t), this._fireClick = !0, 1 < t.touches.length) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var e = t.touches[0],
                    i = e.target;
                this._startPos = this._newPos = new k(e.clientX, e.clientY), i.tagName && "a" === i.tagName.toLowerCase() && ce(i, "leaflet-active"), this._holdTimeout = setTimeout(o((function() {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                }), this), 1e3), this._simulateEvent("mousedown", e), Ce(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this)
            }
        },
        _onUp: function(t) {
            var e, i;
            clearTimeout(this._holdTimeout), Ae(document, {
                touchmove: this._onMove,
                touchend: this._onUp
            }, this), this._fireClick && t && t.changedTouches && ((i = (e = t.changedTouches[0]).target) && i.tagName && "a" === i.tagName.toLowerCase() && de(i, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e))
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function(t) {
            var e = t.touches[0];
            this._newPos = new k(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
        },
        _simulateEvent: function(t, e) {
            var i = document.createEvent("MouseEvents");
            i._simulated = !0, e.target._simulatedClick = !0, i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(i)
        }
    });
    !Pt || Lt && !ct || Ke.addInitHook("addHandler", "tap", wn), Ke.mergeOptions({
        touchZoom: Pt && !st,
        bounceAtZoomLimits: !0
    });
    var Ln = ei.extend({
        addHooks: function() {
            ce(this._map._container, "leaflet-touch-zoom"), Ce(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function() {
            de(this._map._container, "leaflet-touch-zoom"), Ae(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function(t) {
            var e, i, n = this._map;
            !t.touches || 2 !== t.touches.length || n._animatingZoom || this._zooming || (e = n.mouseEventToContainerPoint(t.touches[0]), i = n.mouseEventToContainerPoint(t.touches[1]), this._centerPoint = n.getSize()._divideBy(2), this._startLatLng = n.containerPointToLatLng(this._centerPoint), "center" !== n.options.touchZoom && (this._pinchStartLatLng = n.containerPointToLatLng(e.add(i)._divideBy(2))), this._startDist = e.distanceTo(i), this._startZoom = n.getZoom(), this._moved = !1, this._zooming = !0, n._stop(), Ce(document, "touchmove", this._onTouchMove, this), Ce(document, "touchend", this._onTouchEnd, this), Re(t))
        },
        _onTouchMove: function(t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map,
                    i = e.mouseEventToContainerPoint(t.touches[0]),
                    n = e.mouseEventToContainerPoint(t.touches[1]),
                    s = i.distanceTo(n) / this._startDist;
                if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && 1 < s) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                    if (this._center = this._startLatLng, 1 == s) return
                } else {
                    var r = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                    if (1 == s && 0 === r.x && 0 === r.y) return;
                    this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
                }
                this._moved || (e._moveStart(!0, !1), this._moved = !0), C(this._animRequest);
                var a = o(e._move, e, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                });
                this._animRequest = S(a, this, !0), Re(t)
            }
        },
        _onTouchEnd: function() {
            this._moved && this._zooming ? (this._zooming = !1, C(this._animRequest), Ae(document, "touchmove", this._onTouchMove, this), Ae(document, "touchend", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
    });
    Ke.addInitHook("addHandler", "touchZoom", Ln), Ke.BoxZoom = gn, Ke.DoubleClickZoom = vn, Ke.Drag = yn, Ke.Keyboard = xn, Ke.ScrollWheelZoom = bn, Ke.Tap = wn, Ke.TouchZoom = Ln, t.version = "1.7.1", t.Control = Ye, t.control = Je, t.Browser = Et, t.Evented = z, t.Mixin = ni, t.Util = M, t.Class = A, t.Handler = ei, t.extend = e, t.bind = o, t.stamp = r, t.setOptions = p, t.DomEvent = He, t.DomUtil = Se, t.PosAnimation = Ve, t.Draggable = ai, t.LineUtil = fi, t.PolyUtil = yi, t.Point = k, t.point = Z, t.Bounds = B, t.bounds = O, t.Transformation = H, t.transformation = V, t.Projection = wi, t.LatLng = F, t.latLng = N, t.LatLngBounds = R, t.latLngBounds = D, t.CRS = j, t.GeoJSON = Di, t.geoJSON = Ki, t.geoJson = Ji, t.Layer = Si, t.LayerGroup = Ci, t.layerGroup = function(t, e) {
        return new Ci(t, e)
    }, t.FeatureGroup = Mi, t.featureGroup = function(t, e) {
        return new Mi(t, e)
    }, t.ImageOverlay = Yi, t.imageOverlay = function(t, e, i) {
        return new Yi(t, e, i)
    }, t.VideoOverlay = Qi, t.videoOverlay = function(t, e, i) {
        return new Qi(t, e, i)
    }, t.SVGOverlay = Xi, t.svgOverlay = function(t, e, i) {
        return new Xi(t, e, i)
    }, t.DivOverlay = $i, t.Popup = tn, t.popup = function(t, e) {
        return new tn(t, e)
    }, t.Tooltip = en, t.tooltip = function(t, e) {
        return new en(t, e)
    }, t.Icon = Ai, t.icon = function(t) {
        return new Ai(t)
    }, t.DivIcon = nn, t.divIcon = function(t) {
        return new nn(t)
    }, t.Marker = ki, t.marker = function(t, e) {
        return new ki(t, e)
    }, t.TileLayer = sn, t.tileLayer = rn, t.GridLayer = on, t.gridLayer = function(t) {
        return new on(t)
    }, t.SVG = _n, t.svg = mn, t.Renderer = hn, t.Canvas = ln, t.canvas = un, t.Path = Ei, t.CircleMarker = Zi, t.circleMarker = function(t, e) {
        return new Zi(t, e)
    }, t.Circle = Bi, t.circle = function(t, e, i) {
        return new Bi(t, e, i)
    }, t.Polyline = Oi, t.polyline = function(t, e) {
        return new Oi(t, e)
    }, t.Polygon = Ri, t.polygon = function(t, e) {
        return new Ri(t, e)
    }, t.Rectangle = fn, t.rectangle = function(t, e) {
        return new fn(t, e)
    }, t.Map = Ke, t.map = function(t, e) {
        return new Ke(t, e)
    };
    var Pn = window.L;
    t.noConflict = function() {
        return window.L = Pn, this
    }, window.L = t
})),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("leaflet")) : "function" == typeof define && define.amd ? define(["exports", "leaflet"], e) : e(((t = t || self).L = t.L || {}, t.L.esri = {}), t.L)
}(this, (function(t, e) {
    "use strict";
    var i = window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest,
        n = "" === document.documentElement.style.pointerEvents,
        o = {
            cors: i,
            pointerEvents: n
        },
        s = {
            attributionWidthOffset: 55
        },
        r = 0;

    function a(t) {
        var e, i, n, o = "";
        for (var s in t.f = t.f || "json", t) t.hasOwnProperty(s) && (e = t[s], i = Object.prototype.toString.call(e), o.length && (o += "&"), n = "[object Array]" === i ? "[object Object]" === Object.prototype.toString.call(e[0]) ? JSON.stringify(e) : e.join(",") : "[object Object]" === i ? JSON.stringify(e) : "[object Date]" === i ? e.valueOf() : e, o += encodeURIComponent(s) + "=" + encodeURIComponent(n));
        return o
    }

    function h(t, i) {
        var n = new window.XMLHttpRequest;
        return n.onerror = function(o) {
            n.onreadystatechange = e.Util.falseFn, t.call(i, {
                error: {
                    code: 500,
                    message: "XMLHttpRequest error"
                }
            }, null)
        }, n.onreadystatechange = function() {
            var o, s;
            if (4 === n.readyState) {
                try {
                    o = JSON.parse(n.responseText)
                } catch (t) {
                    o = null, s = {
                        code: 500,
                        message: "Could not parse response as JSON. This could also be caused by a CORS or XMLHttpRequest error."
                    }
                }!s && o.error && (s = o.error, o = null), n.onerror = e.Util.falseFn, t.call(i, s, o)
            }
        }, n.ontimeout = function() {
            this.onerror()
        }, n
    }

    function l(t, e, i, n) {
        var o = h(i, n);
        return o.open("POST", t), null != n && void 0 !== n.options && (o.timeout = n.options.timeout), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), o.send(a(e)), o
    }

    function u(t, e, i, n) {
        var o = h(i, n);
        return o.open("GET", t + "?" + a(e), !0), null != n && void 0 !== n.options && (o.timeout = n.options.timeout, n.options.withCredentials && (o.withCredentials = !0)), o.send(null), o
    }

    function c(t, e, i, n) {
        var s = a(e),
            r = h(i, n),
            l = (t + "?" + s).length;
        if (l <= 2e3 && o.cors ? r.open("GET", t + "?" + s) : 2e3 < l && o.cors && (r.open("POST", t), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")), null != n && void 0 !== n.options && (r.timeout = n.options.timeout, n.options.withCredentials && (r.withCredentials = !0)), l <= 2e3 && o.cors) r.send(null);
        else {
            if (!(2e3 < l && o.cors)) return l <= 2e3 && !o.cors ? d(t, e, i, n) : void _("a request to " + t + " was longer then 2000 characters and this browser cannot make a cross-domain post request. Please use a proxy http://esri.github.io/esri-leaflet/api-reference/request.html");
            r.send(s)
        }
        return r
    }

    function d(t, i, n, o) {
        window._EsriLeafletCallbacks = window._EsriLeafletCallbacks || {};
        var s = "c" + r;
        i.callback = "window._EsriLeafletCallbacks." + s, window._EsriLeafletCallbacks[s] = function(t) {
            var e, i;
            !0 !== window._EsriLeafletCallbacks[s] && ("[object Object]" !== (i = Object.prototype.toString.call(t)) && "[object Array]" !== i && (e = {
                error: {
                    code: 500,
                    message: "Expected array or object as JSONP response"
                }
            }, t = null), !e && t.error && (e = t, t = null), n.call(o, e, t), window._EsriLeafletCallbacks[s] = !0)
        };
        var h = e.DomUtil.create("script", null, document.body);
        return h.type = "text/javascript", h.src = t + "?" + a(i), h.id = s, h.onerror = function(t) {
            t && !0 !== window._EsriLeafletCallbacks[s] && (n.call(o, {
                error: {
                    code: 500,
                    message: "An unknown error occurred"
                }
            }), window._EsriLeafletCallbacks[s] = !0)
        }, e.DomUtil.addClass(h, "esri-leaflet-jsonp"), r++, {
            id: s,
            url: h.src,
            abort: function() {
                window._EsriLeafletCallbacks._callback[s]({
                    code: 0,
                    message: "Request aborted."
                })
            }
        }
    }
    var p = o.cors ? u : d;

    function _() {
        console && console.warn && console.warn.apply(console, arguments)
    }

    function m(t, e) {
        for (var i = 0; i < t.length - 1; i++)
            for (var n = 0; n < e.length - 1; n++)
                if (function(t, e, i, n) {
                        var o = (n[0] - i[0]) * (t[1] - i[1]) - (n[1] - i[1]) * (t[0] - i[0]),
                            s = (e[0] - t[0]) * (t[1] - i[1]) - (e[1] - t[1]) * (t[0] - i[0]),
                            r = (n[1] - i[1]) * (e[0] - t[0]) - (n[0] - i[0]) * (e[1] - t[1]);
                        if (0 != r) {
                            var a = o / r,
                                h = s / r;
                            if (0 <= a && a <= 1 && 0 <= h && h <= 1) return !0
                        }
                        return !1
                    }(t[i], t[i + 1], e[n], e[n + 1])) return !0;
        return !1
    }

    function f(t) {
        return function(t, e) {
            for (var i = 0; i < t.length; i++)
                if (t[i] !== e[i]) return !1;
            return !0
        }(t[0], t[t.length - 1]) || t.push(t[0]), t
    }

    function g(t) {
        for (var e, i = 0, n = 0, o = t.length, s = t[n]; n < o - 1; n++) i += ((e = t[n + 1])[0] - s[0]) * (e[1] + s[1]), s = e;
        return 0 <= i
    }

    function v(t) {
        var e = {};
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        return e
    }

    function y(t) {
        var e = [],
            i = t.slice(0),
            n = f(i.shift().slice(0));
        if (4 <= n.length) {
            g(n) || n.reverse(), e.push(n);
            for (var o = 0; o < i.length; o++) {
                var s = f(i[o].slice(0));
                4 <= s.length && (g(s) && s.reverse(), e.push(s))
            }
        }
        return e
    }
    p.CORS = u, p.JSONP = d;
    var x = {
            request: c,
            get: p,
            post: l
        },
        b = function t(e, i) {
            var n = {};
            if (e.features) {
                n.type = "FeatureCollection", n.features = [];
                for (var o = 0; o < e.features.length; o++) n.features.push(t(e.features[o], i))
            }
            if ("number" == typeof e.x && "number" == typeof e.y && (n.type = "Point", n.coordinates = [e.x, e.y], "number" == typeof e.z && n.coordinates.push(e.z)), e.points && (n.type = "MultiPoint", n.coordinates = e.points.slice(0)), e.paths && (1 === e.paths.length ? (n.type = "LineString", n.coordinates = e.paths[0].slice(0)) : (n.type = "MultiLineString", n.coordinates = e.paths.slice(0))), e.rings && (n = function(t) {
                    for (var e, i = [], n = [], o = 0; o < t.length; o++) {
                        var s, r = f(t[o].slice(0));
                        r.length < 4 || (g(r) ? (s = [r.slice().reverse()], i.push(s)) : n.push(r.slice().reverse()))
                    }
                    for (var a, h, l, u, c = []; n.length;) {
                        e = n.pop();
                        for (var d = !1, p = i.length - 1; 0 <= p; p--)
                            if (l = m(a = i[p][0], h = e), u = function(t, e) {
                                    for (var i = !1, n = -1, o = t.length, s = o - 1; ++n < o; s = n)(t[n][1] <= e[1] && e[1] < t[s][1] || t[s][1] <= e[1] && e[1] < t[n][1]) && e[0] < (t[s][0] - t[n][0]) * (e[1] - t[n][1]) / (t[s][1] - t[n][1]) + t[n][0] && (i = !i);
                                    return i
                                }(a, h[0]), !l && u) {
                                i[p].push(e), d = !0;
                                break
                            }
                        d || c.push(e)
                    }
                    for (; c.length;) {
                        e = c.pop();
                        var _ = !1;
                        for (p = i.length - 1; 0 <= p; p--)
                            if (m(i[p][0], e)) {
                                i[p].push(e), _ = !0;
                                break
                            }
                        _ || i.push([e.reverse()])
                    }
                    return 1 === i.length ? {
                        type: "Polygon",
                        coordinates: i[0]
                    } : {
                        type: "MultiPolygon",
                        coordinates: i
                    }
                }(e.rings.slice(0))), "number" == typeof e.xmin && "number" == typeof e.ymin && "number" == typeof e.xmax && "number" == typeof e.ymax && (n.type = "Polygon", n.coordinates = [
                    [
                        [e.xmax, e.ymax],
                        [e.xmin, e.ymax],
                        [e.xmin, e.ymin],
                        [e.xmax, e.ymin],
                        [e.xmax, e.ymax]
                    ]
                ]), (e.geometry || e.attributes) && (n.type = "Feature", n.geometry = e.geometry ? t(e.geometry) : null, n.properties = e.attributes ? v(e.attributes) : null, e.attributes)) try {
                n.id = function(t, e) {
                    for (var i = e ? [e, "OBJECTID", "FID"] : ["OBJECTID", "FID"], n = 0; n < i.length; n++) {
                        var o = i[n];
                        if (o in t && ("string" == typeof t[o] || "number" == typeof t[o])) return t[o]
                    }
                    throw Error("No valid id attribute found")
                }(e.attributes, i)
            } catch (t) {}
            return JSON.stringify(n.geometry) === JSON.stringify({}) && (n.geometry = null), e.spatialReference && e.spatialReference.wkid && 4326 !== e.spatialReference.wkid && console.warn("Object converted in non-standard crs - " + JSON.stringify(e.spatialReference)), n
        },
        w = function t(e, i) {
            i = i || "OBJECTID";
            var n, o = {
                    wkid: 4326
                },
                s = {};
            switch (e.type) {
                case "Point":
                    s.x = e.coordinates[0], s.y = e.coordinates[1], s.spatialReference = o;
                    break;
                case "MultiPoint":
                    s.points = e.coordinates.slice(0), s.spatialReference = o;
                    break;
                case "LineString":
                    s.paths = [e.coordinates.slice(0)], s.spatialReference = o;
                    break;
                case "MultiLineString":
                    s.paths = e.coordinates.slice(0), s.spatialReference = o;
                    break;
                case "Polygon":
                    s.rings = y(e.coordinates.slice(0)), s.spatialReference = o;
                    break;
                case "MultiPolygon":
                    s.rings = function(t) {
                        for (var e = [], i = 0; i < t.length; i++)
                            for (var n = y(t[i]), o = n.length - 1; 0 <= o; o--) {
                                var s = n[o].slice(0);
                                e.push(s)
                            }
                        return e
                    }(e.coordinates.slice(0)), s.spatialReference = o;
                    break;
                case "Feature":
                    e.geometry && (s.geometry = t(e.geometry, i)), s.attributes = e.properties ? v(e.properties) : {}, e.id && (s.attributes[i] = e.id);
                    break;
                case "FeatureCollection":
                    for (s = [], n = 0; n < e.features.length; n++) s.push(t(e.features[n], i));
                    break;
                case "GeometryCollection":
                    for (s = [], n = 0; n < e.geometries.length; n++) s.push(t(e.geometries[n], i))
            }
            return s
        },
        L = '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>';
    /* @preserve
     * @terraformer/arcgis - v2.0.6 - MIT
     * Copyright (c) 2012-2020 Environmental Systems Research Institute, Inc.
     * Mon May 18 2020 14:30:35 GMT-0700 (Pacific Daylight Time)
     */
    function P(t, e) {
        return w(t, e)
    }

    function T(t, e) {
        return b(t, e)
    }

    function S(t) {
        if ("NaN" === t.xmin || "NaN" === t.ymin || "NaN" === t.xmax || "NaN" === t.ymax) return null;
        var i = e.latLng(t.ymin, t.xmin),
            n = e.latLng(t.ymax, t.xmax);
        return e.latLngBounds(i, n)
    }

    function C(t) {
        return {
            xmin: (t = e.latLngBounds(t)).getSouthWest().lng,
            ymin: t.getSouthWest().lat,
            xmax: t.getNorthEast().lng,
            ymax: t.getNorthEast().lat,
            spatialReference: {
                wkid: 4326
            }
        }
    }
    var M = /^(OBJECTID|FID|OID|ID)$/i;

    function A(t) {
        var e;
        if (t.objectIdFieldName) e = t.objectIdFieldName;
        else if (t.fields) {
            for (var i = 0; i <= t.fields.length - 1; i++)
                if ("esriFieldTypeOID" === t.fields[i].type) {
                    e = t.fields[i].name;
                    break
                }
            if (!e)
                for (i = 0; i <= t.fields.length - 1; i++)
                    if (t.fields[i].name.match(M)) {
                        e = t.fields[i].name;
                        break
                    }
        }
        return e
    }

    function I(t) {
        for (var e in t.attributes)
            if (e.match(M)) return e
    }

    function z(t, e) {
        var i = t.features || t.results,
            n = i && i.length,
            o = e || A(t),
            s = {
                type: "FeatureCollection",
                features: []
            };
        if (n)
            for (var r = i.length - 1; 0 <= r; r--) {
                var a = T(i[r], o || I(i[r]));
                s.features.push(a)
            }
        return s
    }

    function k(t) {
        return "/" !== (t = e.Util.trim(t))[t.length - 1] && (t += "/"), t
    }

    function E(t) {
        var e;
        return -1 !== t.url.indexOf("?") && (t.requestParams = t.requestParams || {}, e = t.url.substring(t.url.indexOf("?") + 1), t.url = t.url.split("?")[0], t.requestParams = JSON.parse('{"' + decodeURI(e).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')), t.url = k(t.url.split("?")[0]), t
    }

    function Z(t) {
        return /^(?!.*utility\.arcgis\.com).*\.arcgis\.com.*FeatureServer/i.test(t)
    }

    function B(t) {
        var e;
        switch (t) {
            case "Point":
                e = "esriGeometryPoint";
                break;
            case "MultiPoint":
                e = "esriGeometryMultipoint";
                break;
            case "LineString":
            case "MultiLineString":
                e = "esriGeometryPolyline";
                break;
            case "Polygon":
            case "MultiPolygon":
                e = "esriGeometryPolygon"
        }
        return e
    }

    function O(t) {
        return t.getSize().x - s.attributionWidthOffset + "px"
    }

    function R(t) {
        var i, n;
        t.attributionControl && (t.attributionControl._esriAttributionLayerCount || (t.attributionControl._esriAttributionLayerCount = 0), 0 === t.attributionControl._esriAttributionLayerCount && (t.attributionControl._esriAttributionAddedOnce || ((i = document.createElement("style")).type = "text/css", i.innerHTML = ".esri-truncated-attribution:hover {white-space: normal;}", document.getElementsByTagName("head")[0].appendChild(i), (n = document.createElement("style")).type = "text/css", n.innerHTML = ".esri-truncated-attribution {vertical-align: -3px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;display: inline-block;transition: 0s white-space;transition-delay: 1s;max-width: " + O(t) + ";}", document.getElementsByTagName("head")[0].appendChild(n), t.on("resize", (function(e) {
            t.attributionControl && (t.attributionControl._container.style.maxWidth = O(e.target))
        })), t.attributionControl._esriAttributionAddedOnce = !0), t.attributionControl.setPrefix(L + ' | Powered by <a href="https://www.esri.com">Esri</a>'), e.DomUtil.addClass(t.attributionControl._container, "esri-truncated-attribution:hover"), e.DomUtil.addClass(t.attributionControl._container, "esri-truncated-attribution")), t.attributionControl._esriAttributionLayerCount = t.attributionControl._esriAttributionLayerCount + 1)
    }

    function D(t) {
        t.attributionControl && (t.attributionControl._esriAttributionLayerCount && 1 === t.attributionControl._esriAttributionLayerCount && (t.attributionControl.setPrefix(L), e.DomUtil.removeClass(t.attributionControl._container, "esri-truncated-attribution:hover"), e.DomUtil.removeClass(t.attributionControl._container, "esri-truncated-attribution")), t.attributionControl._esriAttributionLayerCount = t.attributionControl._esriAttributionLayerCount - 1)
    }

    function F(t) {
        var i = {
            geometry: null,
            geometryType: null
        };
        return t instanceof e.LatLngBounds ? (i.geometry = C(t), i.geometryType = "esriGeometryEnvelope", i) : (t.getLatLng && (t = t.getLatLng()), t instanceof e.LatLng && (t = {
            type: "Point",
            coordinates: [t.lng, t.lat]
        }), t instanceof e.GeoJSON && (t = t.getLayers()[0].feature.geometry, i.geometry = P(t), i.geometryType = B(t.type)), t.toGeoJSON && (t = t.toGeoJSON()), "Feature" === t.type && (t = t.geometry), "Point" === t.type || "LineString" === t.type || "Polygon" === t.type || "MultiPolygon" === t.type ? (i.geometry = P(t), i.geometryType = B(t.type), i) : void _("invalid geometry passed to spatial query. Should be L.LatLng, L.LatLngBounds, L.Marker or a GeoJSON Point, Line, Polygon or MultiPolygon object"))
    }

    function N(t, i) {
        o.cors && c(t, {}, e.Util.bind((function(t, n) {
            if (!t) {
                i._esriAttributions = [];
                for (var o = 0; o < n.contributors.length; o++)
                    for (var s = n.contributors[o], r = 0; r < s.coverageAreas.length; r++) {
                        var a = s.coverageAreas[r],
                            h = e.latLng(a.bbox[0], a.bbox[1]),
                            l = e.latLng(a.bbox[2], a.bbox[3]);
                        i._esriAttributions.push({
                            attribution: s.attribution,
                            score: a.score,
                            bounds: e.latLngBounds(h, l),
                            minZoom: a.zoomMin,
                            maxZoom: a.zoomMax
                        })
                    }
                i._esriAttributions.sort((function(t, e) {
                    return e.score - t.score
                })), U({
                    target: i
                })
            }
        }), this))
    }

    function U(t) {
        var i = t.target,
            n = i._esriAttributions;
        if (i && i.attributionControl) {
            var o = i.attributionControl._container.querySelector(".esri-dynamic-attribution");
            if (o && n) {
                for (var s = "", r = i.getBounds(), a = e.latLngBounds(r.getSouthWest().wrap(), r.getNorthEast().wrap()), h = i.getZoom(), l = 0; l < n.length; l++) {
                    var u = n[l],
                        c = u.attribution;
                    !s.match(c) && u.bounds.intersects(a) && h >= u.minZoom && h <= u.maxZoom && (s += ", " + c)
                }
                s = s.substr(2), o.innerHTML = s, o.style.maxWidth = O(i), i.fire("attributionupdated", {
                    attribution: s
                })
            }
        }
    }
    var j = {
            warn: _,
            cleanUrl: k,
            getUrlParams: E,
            isArcgisOnline: Z,
            geojsonTypeToArcGIS: B,
            responseToFeatureCollection: z,
            geojsonToArcGIS: P,
            arcgisToGeoJSON: T,
            boundsToExtent: C,
            extentToBounds: S,
            calcAttributionWidth: O,
            setEsriAttribution: R,
            _setGeometry: F,
            _getAttributionData: N,
            _updateMapAttribution: U,
            _findIdAttributeFromFeature: I,
            _findIdAttributeFromResponse: A
        },
        G = e.Class.extend({
            options: {
                proxy: !1,
                useCors: i
            },
            generateSetter: function(t, i) {
                return e.Util.bind((function(e) {
                    return this.params[t] = e, this
                }), i)
            },
            initialize: function(t) {
                if (t.request && t.options ? (this._service = t, e.Util.setOptions(this, t.options)) : (e.Util.setOptions(this, t), this.options.url = k(t.url)), this.params = e.Util.extend({}, this.params || {}), this.setters)
                    for (var i in this.setters) {
                        var n = this.setters[i];
                        this[i] = this.generateSetter(n, this)
                    }
            },
            token: function(t) {
                return this._service ? this._service.authenticate(t) : this.params.token = t, this
            },
            format: function(t) {
                return this.params.returnUnformattedValues = !t, this
            },
            request: function(t, i) {
                return this.options.requestParams && e.Util.extend(this.params, this.options.requestParams), this._service ? this._service.request(this.path, this.params, t, i) : this._request("request", this.path, this.params, t, i)
            },
            _request: function(t, e, i, n, o) {
                var s = this.options.proxy ? this.options.proxy + "?" + this.options.url + e : this.options.url + e;
                return "get" !== t && "request" !== t || this.options.useCors ? x[t](s, i, n, o) : x.get.JSONP(s, i, n, o)
            }
        }),
        q = G.extend({
            setters: {
                offset: "resultOffset",
                limit: "resultRecordCount",
                fields: "outFields",
                precision: "geometryPrecision",
                featureIds: "objectIds",
                returnGeometry: "returnGeometry",
                returnM: "returnM",
                transform: "datumTransformation",
                token: "token"
            },
            path: "query",
            params: {
                returnGeometry: !0,
                where: "1=1",
                outSR: 4326,
                outFields: "*"
            },
            within: function(t) {
                return this._setGeometryParams(t), this.params.spatialRel = "esriSpatialRelContains", this
            },
            intersects: function(t) {
                return this._setGeometryParams(t), this.params.spatialRel = "esriSpatialRelIntersects", this
            },
            contains: function(t) {
                return this._setGeometryParams(t), this.params.spatialRel = "esriSpatialRelWithin", this
            },
            crosses: function(t) {
                return this._setGeometryParams(t), this.params.spatialRel = "esriSpatialRelCrosses", this
            },
            touches: function(t) {
                return this._setGeometryParams(t), this.params.spatialRel = "esriSpatialRelTouches", this
            },
            overlaps: function(t) {
                return this._setGeometryParams(t), this.params.spatialRel = "esriSpatialRelOverlaps", this
            },
            bboxIntersects: function(t) {
                return this._setGeometryParams(t), this.params.spatialRel = "esriSpatialRelEnvelopeIntersects", this
            },
            indexIntersects: function(t) {
                return this._setGeometryParams(t), this.params.spatialRel = "esriSpatialRelIndexIntersects", this
            },
            nearby: function(t, i) {
                return t = e.latLng(t), this.params.geometry = [t.lng, t.lat], this.params.geometryType = "esriGeometryPoint", this.params.spatialRel = "esriSpatialRelIntersects", this.params.units = "esriSRUnit_Meter", this.params.distance = i, this.params.inSR = 4326, this
            },
            where: function(t) {
                return this.params.where = t, this
            },
            between: function(t, e) {
                return this.params.time = [t.valueOf(), e.valueOf()], this
            },
            simplify: function(t, e) {
                var i = Math.abs(t.getBounds().getWest() - t.getBounds().getEast());
                return this.params.maxAllowableOffset = i / t.getSize().y * e, this
            },
            orderBy: function(t, e) {
                return e = e || "ASC", this.params.orderByFields = this.params.orderByFields ? this.params.orderByFields + "," : "", this.params.orderByFields += [t, e].join(" "), this
            },
            run: function(t, e) {
                return this._cleanParams(), this.options.isModern || Z(this.options.url) && void 0 === this.options.isModern ? (this.params.f = "geojson", this.request((function(i, n) {
                    this._trapSQLerrors(i), t.call(e, i, n, n)
                }), this)) : this.request((function(i, n) {
                    this._trapSQLerrors(i), t.call(e, i, n && z(n), n)
                }), this)
            },
            count: function(t, e) {
                return this._cleanParams(), this.params.returnCountOnly = !0, this.request((function(e, i) {
                    t.call(this, e, i && i.count, i)
                }), e)
            },
            ids: function(t, e) {
                return this._cleanParams(), this.params.returnIdsOnly = !0, this.request((function(e, i) {
                    t.call(this, e, i && i.objectIds, i)
                }), e)
            },
            bounds: function(t, e) {
                return this._cleanParams(), this.params.returnExtentOnly = !0, this.request((function(i, n) {
                    n && n.extent && S(n.extent) ? t.call(e, i, S(n.extent), n) : (i = {
                        message: "Invalid Bounds"
                    }, t.call(e, i, null, n))
                }), e)
            },
            distinct: function() {
                return this.params.returnGeometry = !1, this.params.returnDistinctValues = !0, this
            },
            pixelSize: function(t) {
                var i = e.point(t);
                return this.params.pixelSize = [i.x, i.y], this
            },
            layer: function(t) {
                return this.path = t + "/query", this
            },
            _trapSQLerrors: function(t) {
                t && "400" === t.code && _("one common syntax error in query requests is encasing string values in double quotes instead of single quotes")
            },
            _cleanParams: function() {
                delete this.params.returnIdsOnly, delete this.params.returnExtentOnly, delete this.params.returnCountOnly
            },
            _setGeometryParams: function(t) {
                this.params.inSR = 4326;
                var e = F(t);
                this.params.geometry = e.geometry, this.params.geometryType = e.geometryType
            }
        });

    function W(t) {
        return new q(t)
    }
    var H = G.extend({
        setters: {
            contains: "contains",
            text: "searchText",
            fields: "searchFields",
            spatialReference: "sr",
            sr: "sr",
            layers: "layers",
            returnGeometry: "returnGeometry",
            maxAllowableOffset: "maxAllowableOffset",
            precision: "geometryPrecision",
            dynamicLayers: "dynamicLayers",
            returnZ: "returnZ",
            returnM: "returnM",
            gdbVersion: "gdbVersion",
            token: "token"
        },
        path: "find",
        params: {
            sr: 4326,
            contains: !0,
            returnGeometry: !0,
            returnZ: !0,
            returnM: !1
        },
        layerDefs: function(t, e) {
            return this.params.layerDefs = this.params.layerDefs ? this.params.layerDefs + ";" : "", this.params.layerDefs += [t, e].join(":"), this
        },
        simplify: function(t, e) {
            var i = Math.abs(t.getBounds().getWest() - t.getBounds().getEast());
            return this.params.maxAllowableOffset = i / t.getSize().y * e, this
        },
        run: function(t, e) {
            return this.request((function(i, n) {
                t.call(e, i, n && z(n), n)
            }), e)
        }
    });

    function V(t) {
        return new H(t)
    }
    var K = G.extend({
            path: "identify",
            between: function(t, e) {
                return this.params.time = [t.valueOf(), e.valueOf()], this
            }
        }),
        J = K.extend({
            setters: {
                layers: "layers",
                precision: "geometryPrecision",
                tolerance: "tolerance",
                returnGeometry: "returnGeometry"
            },
            params: {
                sr: 4326,
                layers: "all",
                tolerance: 3,
                returnGeometry: !0
            },
            on: function(t) {
                var e = C(t.getBounds()),
                    i = t.getSize();
                return this.params.imageDisplay = [i.x, i.y, 96], this.params.mapExtent = [e.xmin, e.ymin, e.xmax, e.ymax], this
            },
            at: function(t) {
                return 2 === t.length && (t = e.latLng(t)), this._setGeometryParams(t), this
            },
            layerDef: function(t, e) {
                return this.params.layerDefs = this.params.layerDefs ? this.params.layerDefs + ";" : "", this.params.layerDefs += [t, e].join(":"), this
            },
            simplify: function(t, e) {
                var i = Math.abs(t.getBounds().getWest() - t.getBounds().getEast());
                return this.params.maxAllowableOffset = i / t.getSize().y * e, this
            },
            run: function(t, e) {
                return this.request((function(i, n) {
                    if (i) t.call(e, i, void 0, n);
                    else {
                        var o = z(n);
                        n.results = n.results.reverse();
                        for (var s = 0; s < o.features.length; s++) o.features[s].layerId = n.results[s].layerId;
                        t.call(e, void 0, o, n)
                    }
                }))
            },
            _setGeometryParams: function(t) {
                var e = F(t);
                this.params.geometry = e.geometry, this.params.geometryType = e.geometryType
            }
        });

    function Y(t) {
        return new J(t)
    }
    var Q = K.extend({
        setters: {
            setMosaicRule: "mosaicRule",
            setRenderingRule: "renderingRule",
            setPixelSize: "pixelSize",
            returnCatalogItems: "returnCatalogItems",
            returnGeometry: "returnGeometry"
        },
        params: {
            returnGeometry: !1
        },
        at: function(t) {
            return t = e.latLng(t), this.params.geometry = JSON.stringify({
                x: t.lng,
                y: t.lat,
                spatialReference: {
                    wkid: 4326
                }
            }), this.params.geometryType = "esriGeometryPoint", this
        },
        getMosaicRule: function() {
            return this.params.mosaicRule
        },
        getRenderingRule: function() {
            return this.params.renderingRule
        },
        getPixelSize: function() {
            return this.params.pixelSize
        },
        run: function(t, e) {
            return this.request((function(i, n) {
                t.call(e, i, n && this._responseToGeoJSON(n), n)
            }), this)
        },
        _responseToGeoJSON: function(t) {
            var e = t.location,
                i = t.catalogItems,
                n = t.catalogItemVisibilities,
                o = {
                    pixel: {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [e.x, e.y]
                        },
                        crs: {
                            type: "EPSG",
                            properties: {
                                code: e.spatialReference.wkid
                            }
                        },
                        properties: {
                            OBJECTID: t.objectId,
                            name: t.name,
                            value: t.value
                        },
                        id: t.objectId
                    }
                };
            if (t.properties && t.properties.Values && (o.pixel.properties.values = t.properties.Values), i && i.features && (o.catalogItems = z(i), n && n.length === o.catalogItems.features.length))
                for (var s = n.length - 1; 0 <= s; s--) o.catalogItems.features[s].properties.catalogItemVisibility = n[s];
            return o
        }
    });

    function X(t) {
        return new Q(t)
    }
    var $ = e.Evented.extend({
            options: {
                proxy: !1,
                useCors: i,
                timeout: 0
            },
            initialize: function(t) {
                t = t || {}, this._requestQueue = [], this._authenticating = !1, e.Util.setOptions(this, t), this.options.url = k(this.options.url)
            },
            get: function(t, e, i, n) {
                return this._request("get", t, e, i, n)
            },
            post: function(t, e, i, n) {
                return this._request("post", t, e, i, n)
            },
            request: function(t, e, i, n) {
                return this._request("request", t, e, i, n)
            },
            metadata: function(t, e) {
                return this._request("get", "", {}, t, e)
            },
            authenticate: function(t) {
                return this._authenticating = !1, this.options.token = t, this._runQueue(), this
            },
            getTimeout: function() {
                return this.options.timeout
            },
            setTimeout: function(t) {
                this.options.timeout = t
            },
            _request: function(t, i, n, o, s) {
                this.fire("requeststart", {
                    url: this.options.url + i,
                    params: n,
                    method: t
                }, !0);
                var r = this._createServiceCallback(t, i, n, o, s);
                if (this.options.token && (n.token = this.options.token), this.options.requestParams && e.Util.extend(n, this.options.requestParams), !this._authenticating) {
                    var a = this.options.proxy ? this.options.proxy + "?" + this.options.url + i : this.options.url + i;
                    return "get" !== t && "request" !== t || this.options.useCors ? x[t](a, n, r, s) : x.get.JSONP(a, n, r, s)
                }
                this._requestQueue.push([t, i, n, o, s])
            },
            _createServiceCallback: function(t, i, n, o, s) {
                return e.Util.bind((function(r, a) {
                    !r || 499 !== r.code && 498 !== r.code || (this._authenticating = !0, this._requestQueue.push([t, i, n, o, s]), this.fire("authenticationrequired", {
                        authenticate: e.Util.bind(this.authenticate, this)
                    }, !0), r.authenticate = e.Util.bind(this.authenticate, this)), o.call(s, r, a), r ? this.fire("requesterror", {
                        url: this.options.url + i,
                        params: n,
                        message: r.message,
                        code: r.code,
                        method: t
                    }, !0) : this.fire("requestsuccess", {
                        url: this.options.url + i,
                        params: n,
                        response: a,
                        method: t
                    }, !0), this.fire("requestend", {
                        url: this.options.url + i,
                        params: n,
                        method: t
                    }, !0)
                }), this)
            },
            _runQueue: function() {
                for (var t = this._requestQueue.length - 1; 0 <= t; t--) {
                    var e = this._requestQueue[t];
                    this[e.shift()].apply(this, e)
                }
                this._requestQueue = []
            }
        }),
        tt = $.extend({
            identify: function() {
                return Y(this)
            },
            find: function() {
                return V(this)
            },
            query: function() {
                return W(this)
            }
        });

    function et(t) {
        return new tt(t)
    }
    var it = $.extend({
        query: function() {
            return W(this)
        },
        identify: function() {
            return X(this)
        }
    });

    function nt(t) {
        return new it(t)
    }
    var ot = $.extend({
        options: {
            idAttribute: "OBJECTID"
        },
        query: function() {
            return W(this)
        },
        addFeature: function(t, e, i) {
            this.addFeatures(t, e, i)
        },
        addFeatures: function(t, e, i) {
            for (var n = t.features ? t.features : [t], o = n.length - 1; 0 <= o; o--) delete n[o].id;
            return t = P(t), t = 1 < n.length ? t : [t], this.post("addFeatures", {
                features: t
            }, (function(t, n) {
                var o = n && n.addResults ? 1 < n.addResults.length ? n.addResults : n.addResults[0] : void 0;
                e && e.call(i, t || n.addResults[0].error, o)
            }), i)
        },
        updateFeature: function(t, e, i) {
            this.updateFeatures(t, e, i)
        },
        updateFeatures: function(t, e, i) {
            var n = t.features ? t.features : [t];
            return t = P(t, this.options.idAttribute), t = 1 < n.length ? t : [t], this.post("updateFeatures", {
                features: t
            }, (function(t, n) {
                var o = n && n.updateResults ? 1 < n.updateResults.length ? n.updateResults : n.updateResults[0] : void 0;
                e && e.call(i, t || n.updateResults[0].error, o)
            }), i)
        },
        deleteFeature: function(t, e, i) {
            this.deleteFeatures(t, e, i)
        },
        deleteFeatures: function(t, e, i) {
            return this.post("deleteFeatures", {
                objectIds: t
            }, (function(t, n) {
                var o = n && n.deleteResults ? 1 < n.deleteResults.length ? n.deleteResults : n.deleteResults[0] : void 0;
                e && e.call(i, t || n.deleteResults[0].error, o)
            }), i)
        }
    });

    function st(t) {
        return new ot(t)
    }
    var rt = "https:" !== window.location.protocol ? "http:" : "https:",
        at = e.TileLayer.extend({
            statics: {
                TILES: {
                    Streets: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 19,
                            subdomains: ["server", "services"],
                            attribution: "USGS, NOAA",
                            attributionUrl: "https://static.arcgis.com/attribution/World_Street_Map"
                        }
                    },
                    Topographic: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 19,
                            subdomains: ["server", "services"],
                            attribution: "USGS, NOAA",
                            attributionUrl: "https://static.arcgis.com/attribution/World_Topo_Map"
                        }
                    },
                    Oceans: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 16,
                            subdomains: ["server", "services"],
                            attribution: "USGS, NOAA",
                            attributionUrl: "https://static.arcgis.com/attribution/Ocean_Basemap"
                        }
                    },
                    OceansLabels: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 16,
                            subdomains: ["server", "services"],
                            pane: n ? "esri-labels" : "tilePane",
                            attribution: ""
                        }
                    },
                    NationalGeographic: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 16,
                            subdomains: ["server", "services"],
                            attribution: "National Geographic, DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, increment P Corp."
                        }
                    },
                    DarkGray: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 16,
                            subdomains: ["server", "services"],
                            attribution: "HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors"
                        }
                    },
                    DarkGrayLabels: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 16,
                            subdomains: ["server", "services"],
                            pane: n ? "esri-labels" : "tilePane",
                            attribution: ""
                        }
                    },
                    Gray: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 16,
                            subdomains: ["server", "services"],
                            attribution: "HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors"
                        }
                    },
                    GrayLabels: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 16,
                            subdomains: ["server", "services"],
                            pane: n ? "esri-labels" : "tilePane",
                            attribution: ""
                        }
                    },
                    Imagery: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 19,
                            subdomains: ["server", "services"],
                            attribution: "DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community",
                            attributionUrl: "https://static.arcgis.com/attribution/World_Imagery"
                        }
                    },
                    ImageryLabels: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 19,
                            subdomains: ["server", "services"],
                            pane: n ? "esri-labels" : "tilePane",
                            attribution: ""
                        }
                    },
                    ImageryTransportation: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 19,
                            subdomains: ["server", "services"],
                            pane: n ? "esri-labels" : "tilePane",
                            attribution: ""
                        }
                    },
                    ShadedRelief: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 13,
                            subdomains: ["server", "services"],
                            attribution: "USGS"
                        }
                    },
                    ShadedReliefLabels: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 12,
                            subdomains: ["server", "services"],
                            pane: n ? "esri-labels" : "tilePane",
                            attribution: ""
                        }
                    },
                    Terrain: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 13,
                            subdomains: ["server", "services"],
                            attribution: "USGS, NOAA"
                        }
                    },
                    TerrainLabels: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 13,
                            subdomains: ["server", "services"],
                            pane: n ? "esri-labels" : "tilePane",
                            attribution: ""
                        }
                    },
                    USATopo: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 15,
                            subdomains: ["server", "services"],
                            attribution: "USGS, National Geographic Society, i-cubed"
                        }
                    },
                    ImageryClarity: {
                        urlTemplate: rt + "//clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 19,
                            attribution: "Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community"
                        }
                    },
                    Physical: {
                        urlTemplate: rt + "//{s}.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 8,
                            subdomains: ["server", "services"],
                            attribution: "U.S. National Park Service"
                        }
                    },
                    ImageryFirefly: {
                        urlTemplate: rt + "//fly.maptiles.arcgis.com/arcgis/rest/services/World_Imagery_Firefly/MapServer/tile/{z}/{y}/{x}",
                        options: {
                            minZoom: 1,
                            maxZoom: 19,
                            attribution: "Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community",
                            attributionUrl: "https://static.arcgis.com/attribution/World_Imagery"
                        }
                    }
                }
            },
            initialize: function(t, i) {
                var n;
                if ("object" == typeof t && t.urlTemplate && t.options) n = t;
                else {
                    if ("string" != typeof t || !at.TILES[t]) throw new Error('L.esri.BasemapLayer: Invalid parameter. Use one of "Streets", "Topographic", "Oceans", "OceansLabels", "NationalGeographic", "Physical", "Gray", "GrayLabels", "DarkGray", "DarkGrayLabels", "Imagery", "ImageryLabels", "ImageryTransportation", "ImageryClarity", "ImageryFirefly", ShadedRelief", "ShadedReliefLabels", "Terrain", "TerrainLabels" or "USATopo"');
                    n = at.TILES[t]
                }
                var o = e.Util.extend(n.options, i);
                e.Util.setOptions(this, o), this.options.token && -1 === n.urlTemplate.indexOf("token=") && (n.urlTemplate += "?token=" + this.options.token), this.options.proxy && (n.urlTemplate = this.options.proxy + "?" + n.urlTemplate), e.TileLayer.prototype.initialize.call(this, n.urlTemplate, o)
            },
            onAdd: function(t) {
                R(t), "esri-labels" === this.options.pane && this._initPane(), this.options.attributionUrl && N((this.options.proxy ? this.options.proxy + "?" : "") + this.options.attributionUrl, t), t.on("moveend", U), e.TileLayer.prototype.onAdd.call(this, t)
            },
            onRemove: function(t) {
                D(t), t.off("moveend", U), e.TileLayer.prototype.onRemove.call(this, t)
            },
            _initPane: function() {
                var t;
                this._map.getPane(this.options.pane) || ((t = this._map.createPane(this.options.pane)).style.pointerEvents = "none", t.style.zIndex = 500)
            },
            getAttribution: function() {
                var t;
                return this.options.attribution && (t = '<span class="esri-dynamic-attribution">' + this.options.attribution + "</span>"), t
            }
        }),
        ht = e.TileLayer.extend({
            options: {
                zoomOffsetAllowance: .1,
                errorTileUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAAA1BMVEUzNDVszlHHAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAAAAAAAAAB6mUWpAAAADZJREFUeJztwQEBAAAAgiD/r25IQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7waBAAABw08RwAAAAABJRU5ErkJggg=="
            },
            statics: {
                MercatorZoomLevels: {
                    0: 156543.033928,
                    1: 78271.5169639999,
                    2: 39135.7584820001,
                    3: 19567.8792409999,
                    4: 9783.93962049996,
                    5: 4891.96981024998,
                    6: 2445.98490512499,
                    7: 1222.99245256249,
                    8: 611.49622628138,
                    9: 305.748113140558,
                    10: 152.874056570411,
                    11: 76.4370282850732,
                    12: 38.2185141425366,
                    13: 19.1092570712683,
                    14: 9.55462853563415,
                    15: 4.77731426794937,
                    16: 2.38865713397468,
                    17: 1.19432856685505,
                    18: .597164283559817,
                    19: .298582141647617,
                    20: .14929107082381,
                    21: .07464553541191,
                    22: .0373227677059525,
                    23: .0186613838529763
                }
            },
            initialize: function(t) {
                t = E(t = e.Util.setOptions(this, t)), this.tileUrl = (t.proxy ? t.proxy + "?" : "") + t.url + "tile/{z}/{y}/{x}" + (t.requestParams && 0 < Object.keys(t.requestParams).length ? e.Util.getParamString(t.requestParams) : ""), -1 !== t.url.indexOf("{s}") && t.subdomains && (t.url = t.url.replace("{s}", t.subdomains[0])), this.service = et(t), this.service.addEventParent(this), new RegExp(/tiles.arcgis(online)?\.com/g).test(t.url) && (this.tileUrl = this.tileUrl.replace("://tiles", "://tiles{s}"), t.subdomains = ["1", "2", "3", "4"]), this.options.token && (this.tileUrl += "?token=" + this.options.token), e.TileLayer.prototype.initialize.call(this, this.tileUrl, t)
            },
            getTileUrl: function(t) {
                var i = this._getZoomForUrl();
                return e.Util.template(this.tileUrl, e.Util.extend({
                    s: this._getSubdomain(t),
                    x: t.x,
                    y: t.y,
                    z: this._lodMap && this._lodMap[i] ? this._lodMap[i] : i
                }, this.options))
            },
            createTile: function(t, i) {
                var n = document.createElement("img");
                return e.DomEvent.on(n, "load", e.Util.bind(this._tileOnLoad, this, i, n)), e.DomEvent.on(n, "error", e.Util.bind(this._tileOnError, this, i, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", !this._lodMap || this._lodMap && this._lodMap[this._getZoomForUrl()] ? n.src = this.getTileUrl(t) : this.once("lodmap", (function() {
                    n.src = this.getTileUrl(t)
                }), this), n
            },
            onAdd: function(t) {
                R(t), this._lodMap || this.metadata((function(i, n) {
                    if (!i && n.spatialReference) {
                        var o = n.spatialReference.latestWkid || n.spatialReference.wkid;
                        if (!this.options.attribution && t.attributionControl && n.copyrightText && (this.options.attribution = n.copyrightText, t.attributionControl.addAttribution(this.getAttribution())), t.options.crs !== e.CRS.EPSG3857 || 102100 !== o && 3857 !== o) t.options.crs && t.options.crs.code && -1 < t.options.crs.code.indexOf(o) || _("L.esri.TiledMapLayer is using a non-mercator spatial reference. Support may be available through Proj4Leaflet http://esri.github.io/esri-leaflet/examples/non-mercator-projection.html");
                        else {
                            this._lodMap = {};
                            for (var s = n.tileInfo.lods, r = ht.MercatorZoomLevels, a = 0; a < s.length; a++) {
                                var h = s[a];
                                for (var l in r) {
                                    var u = r[l];
                                    if (this._withinPercentage(h.resolution, u, this.options.zoomOffsetAllowance)) {
                                        this._lodMap[l] = h.level;
                                        break
                                    }
                                }
                            }
                            this.fire("lodmap")
                        }
                    }
                }), this), e.TileLayer.prototype.onAdd.call(this, t)
            },
            onRemove: function(t) {
                D(t)
            },
            metadata: function(t, e) {
                return this.service.metadata(t, e), this
            },
            identify: function() {
                return this.service.identify()
            },
            find: function() {
                return this.service.find()
            },
            query: function() {
                return this.service.query()
            },
            authenticate: function(t) {
                var e = "?token=" + t;
                return this.tileUrl = this.options.token ? this.tileUrl.replace(/\?token=(.+)/g, e) : this.tileUrl + e, this.options.token = t, this.service.authenticate(t), this
            },
            _withinPercentage: function(t, e, i) {
                return Math.abs(t / e - 1) < i
            }
        }),
        lt = e.ImageOverlay.extend({
            onAdd: function(t) {
                this._topLeft = t.getPixelBounds().min, e.ImageOverlay.prototype.onAdd.call(this, t)
            },
            _reset: function() {
                this._map.options.crs === e.CRS.EPSG3857 ? e.ImageOverlay.prototype._reset.call(this) : e.DomUtil.setPosition(this._image, this._topLeft.subtract(this._map.getPixelOrigin()))
            }
        }),
        ut = e.Layer.extend({
            options: {
                opacity: 1,
                position: "front",
                f: "image",
                useCors: i,
                attribution: null,
                interactive: !1,
                alt: ""
            },
            onAdd: function(t) {
                R(t), this.options.zIndex && (this.options.position = null), this._update = e.Util.throttle(this._update, this.options.updateInterval, this), t.on("moveend", this._update, this), this._currentImage && this._currentImage._bounds.equals(this._map.getBounds()) ? t.addLayer(this._currentImage) : this._currentImage && (this._map.removeLayer(this._currentImage), this._currentImage = null), this._update(), this._popup && (this._map.on("click", this._getPopupData, this), this._map.on("dblclick", this._resetPopupState, this)), this.metadata((function(e, i) {
                    !e && !this.options.attribution && t.attributionControl && i.copyrightText && (this.options.attribution = i.copyrightText, t.attributionControl.addAttribution(this.getAttribution()))
                }), this)
            },
            onRemove: function(t) {
                D(t), this._currentImage && this._map.removeLayer(this._currentImage), this._popup && (this._map.off("click", this._getPopupData, this), this._map.off("dblclick", this._resetPopupState, this)), this._map.off("moveend", this._update, this)
            },
            bindPopup: function(t, i) {
                return this._shouldRenderPopup = !1, this._lastClick = !1, this._popup = e.popup(i), this._popupFunction = t, this._map && (this._map.on("click", this._getPopupData, this), this._map.on("dblclick", this._resetPopupState, this)), this
            },
            unbindPopup: function() {
                return this._map && (this._map.closePopup(this._popup), this._map.off("click", this._getPopupData, this), this._map.off("dblclick", this._resetPopupState, this)), this._popup = !1, this
            },
            bringToFront: function() {
                return this.options.position = "front", this._currentImage && (this._currentImage.bringToFront(), this._setAutoZIndex(Math.max)), this
            },
            bringToBack: function() {
                return this.options.position = "back", this._currentImage && (this._currentImage.bringToBack(), this._setAutoZIndex(Math.min)), this
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._currentImage && this._currentImage.setZIndex(t), this
            },
            _setAutoZIndex: function(t) {
                if (this._currentImage) {
                    for (var e, i = this._currentImage.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++) e = i[o].style.zIndex, i[o] !== this._currentImage._image && e && (n = t(n, +e));
                    isFinite(n) && (this.options.zIndex = n + t(-1, 1), this.setZIndex(this.options.zIndex))
                }
            },
            getAttribution: function() {
                return this.options.attribution
            },
            getOpacity: function() {
                return this.options.opacity
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._currentImage && this._currentImage.setOpacity(t), this
            },
            getTimeRange: function() {
                return [this.options.from, this.options.to]
            },
            setTimeRange: function(t, e) {
                return this.options.from = t, this.options.to = e, this._update(), this
            },
            metadata: function(t, e) {
                return this.service.metadata(t, e), this
            },
            authenticate: function(t) {
                return this.service.authenticate(t), this
            },
            redraw: function() {
                this._update()
            },
            _renderImage: function(t, e, i) {
                if (this._map) {
                    if (i && (t = "data:" + i + ";base64," + t), !t) return;
                    var n = new lt(t, e, {
                            opacity: 0,
                            crossOrigin: this.options.withCredentials ? "use-credentials" : this.options.useCors,
                            alt: this.options.alt,
                            pane: this.options.pane || this.getPane(),
                            interactive: this.options.interactive
                        }).addTo(this._map),
                        o = function(t) {
                            var i, s;
                            n.off("error", o, this), this._map && (i = t.target, s = this._currentImage, i._bounds.equals(e) && i._bounds.equals(this._map.getBounds()) ? (this._currentImage = i, "front" === this.options.position ? this.bringToFront() : "back" === this.options.position && this.bringToBack(), this.options.zIndex && this.setZIndex(this.options.zIndex), this._map && this._currentImage._map ? this._currentImage.setOpacity(this.options.opacity) : this._currentImage._map.removeLayer(this._currentImage), s && this._map && this._map.removeLayer(s), s && s._map && s._map.removeLayer(s)) : this._map.removeLayer(i)), this.fire("load", {
                                bounds: e
                            })
                        };
                    n.once("error", (function() {
                        this._map.removeLayer(n), this.fire("error"), n.off("load", o, this)
                    }), this), n.once("load", o, this)
                }
            },
            _update: function() {
                var t, i, n;
                this._map && (t = this._map.getZoom(), i = this._map.getBounds(), this._animatingZoom || this._map._panTransition && this._map._panTransition._inProgress || (t > this.options.maxZoom || t < this.options.minZoom ? this._currentImage && (this._currentImage._map.removeLayer(this._currentImage), this._currentImage = null) : (n = this._buildExportParams(), e.Util.extend(n, this.options.requestParams), n ? (this._requestExport(n, i), this.fire("loading", {
                    bounds: i
                })) : this._currentImage && (this._currentImage._map.removeLayer(this._currentImage), this._currentImage = null))))
            },
            _renderPopup: function(t, i, n, o) {
                var s;
                t = e.latLng(t), this._shouldRenderPopup && this._lastClick.equals(t) && (s = this._popupFunction(i, n, o)) && this._popup.setLatLng(t).setContent(s).openOn(this._map)
            },
            _resetPopupState: function(t) {
                this._shouldRenderPopup = !1, this._lastClick = t.latlng
            },
            _calculateBbox: function() {
                var t = this._map.getPixelBounds(),
                    i = this._map.unproject(t.getBottomLeft()),
                    n = this._map.unproject(t.getTopRight()),
                    o = this._map.options.crs.project(n),
                    s = this._map.options.crs.project(i),
                    r = e.bounds(o, s);
                return [r.getBottomLeft().x, r.getBottomLeft().y, r.getTopRight().x, r.getTopRight().y].join(",")
            },
            _calculateImageSize: function() {
                var t = this._map.getPixelBounds(),
                    e = this._map.getSize(),
                    i = this._map.unproject(t.getBottomLeft()),
                    n = this._map.unproject(t.getTopRight()),
                    o = this._map.latLngToLayerPoint(n).y,
                    s = this._map.latLngToLayerPoint(i).y;
                return (0 < o || s < e.y) && (e.y = s - o), e.x + "," + e.y
            }
        }),
        ct = ut.extend({
            options: {
                updateInterval: 150,
                format: "jpgpng",
                transparent: !0,
                f: "image"
            },
            query: function() {
                return this.service.query()
            },
            identify: function() {
                return this.service.identify()
            },
            initialize: function(t) {
                t = E(t), this.service = nt(t), this.service.addEventParent(this), e.Util.setOptions(this, t)
            },
            setPixelType: function(t) {
                return this.options.pixelType = t, this._update(), this
            },
            getPixelType: function() {
                return this.options.pixelType
            },
            setBandIds: function(t) {
                return e.Util.isArray(t) ? this.options.bandIds = t.join(",") : this.options.bandIds = t.toString(), this._update(), this
            },
            getBandIds: function() {
                return this.options.bandIds
            },
            setNoData: function(t, i) {
                return e.Util.isArray(t) ? this.options.noData = t.join(",") : this.options.noData = t.toString(), i && (this.options.noDataInterpretation = i), this._update(), this
            },
            getNoData: function() {
                return this.options.noData
            },
            getNoDataInterpretation: function() {
                return this.options.noDataInterpretation
            },
            setRenderingRule: function(t) {
                this.options.renderingRule = t, this._update()
            },
            getRenderingRule: function() {
                return this.options.renderingRule
            },
            setMosaicRule: function(t) {
                this.options.mosaicRule = t, this._update()
            },
            getMosaicRule: function() {
                return this.options.mosaicRule
            },
            _getPopupData: function(t) {
                var i = e.Util.bind((function(i, n, o) {
                        i || setTimeout(e.Util.bind((function() {
                            this._renderPopup(t.latlng, i, n, o)
                        }), this), 300)
                    }), this),
                    n = this.identify().at(t.latlng);
                this.options.mosaicRule && n.setMosaicRule(this.options.mosaicRule), n.run(i), this._shouldRenderPopup = !0, this._lastClick = t.latlng
            },
            _buildExportParams: function() {
                var t = parseInt(this._map.options.crs.code.split(":")[1], 10),
                    e = {
                        bbox: this._calculateBbox(),
                        size: this._calculateImageSize(),
                        format: this.options.format,
                        transparent: this.options.transparent,
                        bboxSR: t,
                        imageSR: t
                    };
                return this.options.from && this.options.to && (e.time = this.options.from.valueOf() + "," + this.options.to.valueOf()), this.options.pixelType && (e.pixelType = this.options.pixelType), this.options.interpolation && (e.interpolation = this.options.interpolation), this.options.compressionQuality && (e.compressionQuality = this.options.compressionQuality), this.options.bandIds && (e.bandIds = this.options.bandIds), 0 !== this.options.noData && !this.options.noData || (e.noData = this.options.noData), this.options.noDataInterpretation && (e.noDataInterpretation = this.options.noDataInterpretation), this.service.options.token && (e.token = this.service.options.token), this.options.renderingRule && (e.renderingRule = JSON.stringify(this.options.renderingRule)), this.options.mosaicRule && (e.mosaicRule = JSON.stringify(this.options.mosaicRule)), e
            },
            _requestExport: function(t, i) {
                var n;
                "json" === this.options.f ? this.service.request("exportImage", t, (function(t, e) {
                    t || (this.options.token && (e.href += "?token=" + this.options.token), this.options.proxy && (e.href = this.options.proxy + "?" + e.href), this._renderImage(e.href, i))
                }), this) : (t.f = "image", n = this.options.url + "exportImage" + e.Util.getParamString(t), this.options.proxy && (n = this.options.proxy + "?" + n), this._renderImage(n, i))
            }
        }),
        dt = ut.extend({
            options: {
                updateInterval: 150,
                layers: !1,
                layerDefs: !1,
                timeOptions: !1,
                format: "png32",
                transparent: !0,
                f: "json"
            },
            initialize: function(t) {
                t = E(t), this.service = et(t), this.service.addEventParent(this), e.Util.setOptions(this, t)
            },
            getDynamicLayers: function() {
                return this.options.dynamicLayers
            },
            setDynamicLayers: function(t) {
                return this.options.dynamicLayers = t, this._update(), this
            },
            getLayers: function() {
                return this.options.layers
            },
            setLayers: function(t) {
                return this.options.layers = t, this._update(), this
            },
            getLayerDefs: function() {
                return this.options.layerDefs
            },
            setLayerDefs: function(t) {
                return this.options.layerDefs = t, this._update(), this
            },
            getTimeOptions: function() {
                return this.options.timeOptions
            },
            setTimeOptions: function(t) {
                return this.options.timeOptions = t, this._update(), this
            },
            query: function() {
                return this.service.query()
            },
            identify: function() {
                return this.service.identify()
            },
            find: function() {
                return this.service.find()
            },
            _getPopupData: function(t) {
                var i = e.Util.bind((function(i, n, o) {
                        i || setTimeout(e.Util.bind((function() {
                            this._renderPopup(t.latlng, i, n, o)
                        }), this), 300)
                    }), this),
                    n = this.options.popup ? this.options.popup.on(this._map).at(t.latlng) : this.identify().on(this._map).at(t.latlng);
                if (n.params.maxAllowableOffset || n.simplify(this._map, .5), this.options.popup && this.options.popup.params && this.options.popup.params.layers || (this.options.layers ? n.layers("visible:" + this.options.layers.join(",")) : n.layers("visible")), this.options.layerDefs && "string" != typeof this.options.layerDefs && !n.params.layerDefs)
                    for (var o in this.options.layerDefs) this.options.layerDefs.hasOwnProperty(o) && n.layerDef(o, this.options.layerDefs[o]);
                n.run(i), this._shouldRenderPopup = !0, this._lastClick = t.latlng
            },
            _buildExportParams: function() {
                var t = parseInt(this._map.options.crs.code.split(":")[1], 10),
                    e = {
                        bbox: this._calculateBbox(),
                        size: this._calculateImageSize(),
                        dpi: 96,
                        format: this.options.format,
                        transparent: this.options.transparent,
                        bboxSR: t,
                        imageSR: t
                    };
                if (this.options.dynamicLayers && (e.dynamicLayers = this.options.dynamicLayers), this.options.layers) {
                    if (0 === this.options.layers.length) return;
                    e.layers = "show:" + this.options.layers.join(",")
                }
                return this.options.layerDefs && (e.layerDefs = "string" == typeof this.options.layerDefs ? this.options.layerDefs : JSON.stringify(this.options.layerDefs)), this.options.timeOptions && (e.timeOptions = JSON.stringify(this.options.timeOptions)), this.options.from && this.options.to && (e.time = this.options.from.valueOf() + "," + this.options.to.valueOf()), this.service.options.token && (e.token = this.service.options.token), this.options.proxy && (e.proxy = this.options.proxy), this.options.disableCache && (e._ts = Date.now()), e
            },
            _requestExport: function(t, i) {
                var n;
                "json" === this.options.f ? this.service.request("export", t, (function(t, e) {
                    t || (this.options.token && e.href && (e.href += "?token=" + this.options.token), this.options.proxy && e.href && (e.href = this.options.proxy + "?" + e.href), e.href ? this._renderImage(e.href, i) : this._renderImage(e.imageData, i, e.contentType))
                }), this) : (t.f = "image", n = this.options.url + "export" + e.Util.getParamString(t), this.options.proxy && (n = this.options.proxy + "?" + n), this._renderImage(n, i))
            }
        }),
        pt = e.Layer.extend({
            options: {
                cellSize: 512,
                updateWhenIdle: e.Browser.mobile,
                updateInterval: 150,
                noWrap: !1,
                keepBuffer: 1.5
            },
            initialize: function(t) {
                e.Util.setOptions(this, t)
            },
            onAdd: function(t) {
                this._cells = {}, this._activeCells = {}, this._resetView(), this._update()
            },
            onRemove: function(t) {
                this._removeAllCells(), this._cellZoom = void 0
            },
            isLoading: function() {
                return this._loading
            },
            redraw: function() {
                return this._map && (this._removeAllCells(), this._update()), this
            },
            getEvents: function() {
                var t = {
                    viewprereset: this._invalidateAll,
                    viewreset: this._resetView,
                    zoom: this._resetView,
                    moveend: this._onMoveEnd
                };
                return this.options.updateWhenIdle || (this._onMove || (this._onMove = e.Util.throttle(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), t
            },
            createCell: function() {
                return document.createElement("div")
            },
            removeCell: function() {},
            reuseCell: function() {},
            cellLeave: function() {},
            cellEnter: function() {},
            getCellSize: function() {
                var t = this.options.cellSize;
                return t instanceof e.Point ? t : new e.Point(t, t)
            },
            _pruneCells: function() {
                if (this._map) {
                    var t, e, i;
                    for (t in this._cells)(i = this._cells[t]).retain = i.current;
                    for (t in this._cells)(i = this._cells[t]).current && !i.active && (e = i.coords, this._retainParent(e.x, e.y, e.z, e.z - 5) || this._retainChildren(e.x, e.y, e.z, e.z + 2));
                    for (t in this._cells) this._cells[t].retain || this._removeCell(t)
                }
            },
            _removeAllCells: function() {
                for (var t in this._cells) this._removeCell(t)
            },
            _invalidateAll: function() {
                this._removeAllCells(), this._cellZoom = void 0
            },
            _retainParent: function(t, i, n, o) {
                var s = Math.floor(t / 2),
                    r = Math.floor(i / 2),
                    a = n - 1,
                    h = new e.Point(+s, +r);
                h.z = +a;
                var l = this._cellCoordsToKey(h),
                    u = this._cells[l];
                return u && u.active ? u.retain = !0 : (u && u.loaded && (u.retain = !0), o < a && this._retainParent(s, r, a, o))
            },
            _retainChildren: function(t, i, n, o) {
                for (var s = 2 * t; s < 2 * t + 2; s++)
                    for (var r = 2 * i; r < 2 * i + 2; r++) {
                        var a = new e.Point(s, r);
                        a.z = n + 1;
                        var h = this._cellCoordsToKey(a),
                            l = this._cells[h];
                        l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), n + 1 < o && this._retainChildren(s, r, n + 1, o))
                    }
            },
            _resetView: function(t) {
                var e = t && (t.pinch || t.flyTo);
                e || this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
            },
            _setView: function(t, e, i, n) {
                var o = Math.round(e);
                n || (this._cellZoom = o, this._abortLoading && this._abortLoading(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneCells(), this._noPrune = !!i)
            },
            _resetGrid: function() {
                var t = this._map,
                    e = t.options.crs,
                    i = this._cellSize = this.getCellSize(),
                    n = this._cellZoom,
                    o = this._map.getPixelWorldBounds(this._cellZoom);
                o && (this._globalCellRange = this._pxBoundsToCellRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
            },
            _onMoveEnd: function(t) {
                t && (t.pinch || t.flyTo) || !this._map || this._map._animatingZoom || this._update()
            },
            _getCelldPixelBounds: function(t) {
                var i = this._map,
                    n = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
                    o = i.getZoomScale(n, this._cellZoom),
                    s = i.project(t, this._cellZoom).floor(),
                    r = i.getSize().divideBy(2 * o);
                return new e.Bounds(s.subtract(r), s.add(r))
            },
            _update: function(t) {
                var i = this._map;
                if (i) {
                    var n = Math.round(i.getZoom());
                    void 0 === t && (t = i.getCenter());
                    var o = this._getCelldPixelBounds(t),
                        s = this._pxBoundsToCellRange(o),
                        r = s.getCenter(),
                        a = [],
                        h = this.options.keepBuffer,
                        l = new e.Bounds(s.getBottomLeft().subtract([h, -h]), s.getTopRight().add([h, -h]));
                    if (!(isFinite(s.min.x) && isFinite(s.min.y) && isFinite(s.max.x) && isFinite(s.max.y))) throw new Error("Attempted to load an infinite number of cells");
                    for (var u in this._cells) {
                        var c = this._cells[u].coords;
                        c.z === this._cellZoom && l.contains(new e.Point(c.x, c.y)) || (this._cells[u].current = !1)
                    }
                    if (1 < Math.abs(n - this._cellZoom)) this._setView(t, n);
                    else {
                        for (var d = s.min.y; d <= s.max.y; d++)
                            for (var p = s.min.x; p <= s.max.x; p++) {
                                var _, m = new e.Point(p, d);
                                m.z = this._cellZoom, this._isValidCell(m) && ((_ = this._cells[this._cellCoordsToKey(m)]) ? _.current = !0 : a.push(m))
                            }
                        if (a.sort((function(t, e) {
                                return t.distanceTo(r) - e.distanceTo(r)
                            })), 0 !== a.length)
                            for (this._loading || (this._loading = !0), p = 0; p < a.length; p++) {
                                var f = this._cellCoordsToKey(a[p]),
                                    g = this._keyToCellCoords(f);
                                this._activeCells[g] ? this._reuseCell(a[p]) : this._createCell(a[p])
                            }
                    }
                }
            },
            _isValidCell: function(t) {
                var i = this._map.options.crs;
                if (!i.infinite) {
                    var n = this._globalCellRange;
                    if (!i.wrapLng && (t.x < n.min.x || t.x > n.max.x) || !i.wrapLat && (t.y < n.min.y || t.y > n.max.y)) return !1
                }
                if (!this.options.bounds) return !0;
                var o = this._cellCoordsToBounds(t);
                return e.toLatLngBounds(this.options.bounds).overlaps(o)
            },
            _keyToBounds: function(t) {
                return this._cellCoordsToBounds(this._keyToCellCoords(t))
            },
            _cellCoordsToNwSe: function(t) {
                var e = this._map,
                    i = this.getCellSize(),
                    n = t.scaleBy(i),
                    o = n.add(i);
                return [e.unproject(n, t.z), e.unproject(o, t.z)]
            },
            _cellCoordsToBounds: function(t) {
                var i = this._cellCoordsToNwSe(t),
                    n = new e.LatLngBounds(i[0], i[1]);
                return this.options.noWrap || (n = this._map.wrapLatLngBounds(n)), n
            },
            _cellCoordsToKey: function(t) {
                return t.x + ":" + t.y + ":" + t.z
            },
            _keyToCellCoords: function(t) {
                var i = t.split(":"),
                    n = new e.Point(+i[0], +i[1]);
                return n.z = +i[2], n
            },
            _removeCell: function(t) {
                var e, i, n, o = this._cells[t];
                o && (e = this._keyToCellCoords(t), i = this._wrapCoords(e), n = this._cellCoordsToBounds(this._wrapCoords(e)), o.current = !1, delete this._cells[t], this._activeCells[t] = o, this.cellLeave(n, i, t), this.fire("cellleave", {
                    key: t,
                    coords: i,
                    bounds: n
                }))
            },
            _reuseCell: function(t) {
                var e = this._cellCoordsToKey(t);
                this._cells[e] = this._activeCells[e], this._cells[e].current = !0;
                var i = this._wrapCoords(t),
                    n = this._cellCoordsToBounds(this._wrapCoords(t));
                this.cellEnter(n, i, e), this.fire("cellenter", {
                    key: e,
                    coords: i,
                    bounds: n
                })
            },
            _createCell: function(t) {
                var i = this._cellCoordsToKey(t),
                    n = this._wrapCoords(t),
                    o = this._cellCoordsToBounds(this._wrapCoords(t));
                this.createCell(o, n, i), this.fire("cellcreate", {
                    key: i,
                    coords: n,
                    bounds: o
                }), this._cells[i] = {
                    coords: t,
                    current: !0
                }, e.Util.requestAnimFrame(this._pruneCells, this)
            },
            _cellReady: function(t, e, i) {
                var n = this._cellCoordsToKey(t);
                (i = this._cells[n]) && (i.loaded = +new Date, i.active = !0)
            },
            _getCellPos: function(t) {
                return t.scaleBy(this.getCellSize())
            },
            _wrapCoords: function(t) {
                var i = new e.Point(this._wrapX ? e.Util.wrapNum(t.x, this._wrapX) : t.x, this._wrapY ? e.Util.wrapNum(t.y, this._wrapY) : t.y);
                return i.z = t.z, i
            },
            _pxBoundsToCellRange: function(t) {
                var i = this.getCellSize();
                return new e.Bounds(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]))
            }
        });

    function _t(t) {
        this.values = [].concat(t || [])
    }
    _t.prototype.query = function(t) {
        var e = this.getIndex(t);
        return this.values[e]
    }, _t.prototype.getIndex = function(t) {
        this.dirty && this.sort();
        for (var e, i, n = 0, o = this.values.length - 1; n <= o;)
            if (e = (n + o) / 2 | 0, +(i = this.values[Math.round(e)]).value < +t) n = 1 + e;
            else {
                if (!(+i.value > +t)) return e;
                o = e - 1
            }
        return Math.abs(~o)
    }, _t.prototype.between = function(t, e) {
        var i = this.getIndex(t),
            n = this.getIndex(e);
        if (0 === i && 0 === n) return [];
        for (; this.values[i - 1] && this.values[i - 1].value === t;) i--;
        for (; this.values[n + 1] && this.values[n + 1].value === e;) n++;
        return this.values[n] && this.values[n].value === e && this.values[n + 1] && n++, this.values.slice(i, n)
    }, _t.prototype.insert = function(t) {
        return this.values.splice(this.getIndex(t.value), 0, t), this
    }, _t.prototype.bulkAdd = function(t, e) {
        return this.values = this.values.concat([].concat(t || [])), e ? this.sort() : this.dirty = !0, this
    }, _t.prototype.sort = function() {
        return this.values.sort((function(t, e) {
            return e.value - t.value
        })).reverse(), this.dirty = !1, this
    };
    var mt = pt.extend({
            options: {
                attribution: null,
                where: "1=1",
                fields: ["*"],
                from: !1,
                to: !1,
                timeField: !1,
                timeFilterMode: "server",
                simplifyFactor: 0,
                precision: 6,
                fetchAllFeatures: !1
            },
            initialize: function(t) {
                if (pt.prototype.initialize.call(this, t), t = E(t), t = e.Util.setOptions(this, t), this.service = st(t), this.service.addEventParent(this), "*" !== this.options.fields[0]) {
                    for (var i = !1, n = 0; n < this.options.fields.length; n++) this.options.fields[n].match(/^(OBJECTID|FID|OID|ID)$/i) && (i = !0);
                    !1 === i && _("no known esriFieldTypeOID field detected in fields Array.  Please add an attribute field containing unique IDs to ensure the layer can be drawn correctly.")
                }
                this.options.timeField.start && this.options.timeField.end ? (this._startTimeIndex = new _t, this._endTimeIndex = new _t) : this.options.timeField && (this._timeIndex = new _t), this._cache = {}, this._currentSnapshot = [], this._activeRequests = 0
            },
            onAdd: function(t) {
                return R(t), this.service.metadata((function(e, i) {
                    var n, o;
                    e || (n = i.supportedQueryFormats, (o = !1) !== this.service.options.isModern && !this.options.fetchAllFeatures || (o = !0), !o && n && -1 !== n.indexOf("geoJSON") && (this.service.options.isModern = !0), i.objectIdField && (this.service.options.idAttribute = i.objectIdField), !this.options.attribution && t.attributionControl && i.copyrightText && (this.options.attribution = i.copyrightText, t.attributionControl.addAttribution(this.getAttribution())))
                }), this), t.on("zoomend", this._handleZoomChange, this), pt.prototype.onAdd.call(this, t)
            },
            onRemove: function(t) {
                return D(t), t.off("zoomend", this._handleZoomChange, this), pt.prototype.onRemove.call(this, t)
            },
            getAttribution: function() {
                return this.options.attribution
            },
            createCell: function(t, e) {
                this._visibleZoom() && this._requestFeatures(t, e)
            },
            _requestFeatures: function(t, i, n, o) {
                this._activeRequests++, o = o || 0;
                var s = this.options.where;
                return 1 === this._activeRequests && this.fire("loading", {
                    bounds: t
                }, !0), this._buildQuery(t, o).run((function(r, a, h) {
                    h && h.exceededTransferLimit && this.fire("drawlimitexceeded"), this.options.where === s && (!r && a && a.features.length && e.Util.requestAnimFrame(e.Util.bind((function() {
                        this._addFeatures(a.features, i), this._postProcessFeatures(t)
                    }), this)), r || !a || a.features.length || this._postProcessFeatures(t), r && this._postProcessFeatures(t), n && n.call(this, r, a), h && (h.exceededTransferLimit || h.properties && h.properties.exceededTransferLimit) && this.options.fetchAllFeatures && this._requestFeatures(t, i, n, o + a.features.length))
                }), this)
            },
            _postProcessFeatures: function(t) {
                this._activeRequests--, this._activeRequests <= 0 && this.fire("load", {
                    bounds: t
                })
            },
            _cacheKey: function(t) {
                return t.z + ":" + t.x + ":" + t.y
            },
            _addFeatures: function(t, e) {
                var i;
                e && (i = this._cacheKey(e), this._cache[i] = this._cache[i] || []);
                for (var n = t.length - 1; 0 <= n; n--) {
                    var o = t[n].id; - 1 === this._currentSnapshot.indexOf(o) && this._currentSnapshot.push(o), void 0 !== i && -1 === this._cache[i].indexOf(o) && this._cache[i].push(o)
                }
                this.options.timeField && this._buildTimeIndexes(t), this.createLayers(t)
            },
            _buildQuery: function(t, i) {
                var n = this.service.query().intersects(t).where(this.options.where).fields(this.options.fields).precision(this.options.precision);
                return this.options.fetchAllFeatures && !isNaN(parseInt(i)) && (n = n.offset(i)), n.params.resultType = "tile", this.options.requestParams && e.Util.extend(n.params, this.options.requestParams), this.options.simplifyFactor && n.simplify(this._map, this.options.simplifyFactor), "server" === this.options.timeFilterMode && this.options.from && this.options.to && n.between(this.options.from, this.options.to), n
            },
            setWhere: function(t, i, n) {
                this.options.where = t && t.length ? t : "1=1";
                for (var o = [], s = [], r = 0, a = null, h = e.Util.bind((function(h, l) {
                        if (h && (a = h), l)
                            for (var u = l.features.length - 1; 0 <= u; u--) s.push(l.features[u].id);
                        --r <= 0 && this._visibleZoom() && t === this.options.where && (this._currentSnapshot = s, e.Util.requestAnimFrame(e.Util.bind((function() {
                            this.removeLayers(o), this.addLayers(s), i && i.call(n, a)
                        }), this)))
                    }), this), l = this._currentSnapshot.length - 1; 0 <= l; l--) o.push(this._currentSnapshot[l]);
                for (var u in this._cache = {}, this._cells) {
                    r++;
                    var c = this._keyToCellCoords(u),
                        d = this._cellCoordsToBounds(c);
                    this._requestFeatures(d, c, h)
                }
                return this
            },
            getWhere: function() {
                return this.options.where
            },
            getTimeRange: function() {
                return [this.options.from, this.options.to]
            },
            setTimeRange: function(t, i, n, o) {
                var s = this.options.from,
                    r = this.options.to,
                    a = 0,
                    h = null,
                    l = e.Util.bind((function(e) {
                        e && (h = e), this._filterExistingFeatures(s, r, t, i), a--, n && a <= 0 && n.call(o, h)
                    }), this);
                if (this.options.from = t, this.options.to = i, this._filterExistingFeatures(s, r, t, i), "server" === this.options.timeFilterMode)
                    for (var u in this._cells) {
                        a++;
                        var c = this._keyToCellCoords(u),
                            d = this._cellCoordsToBounds(c);
                        this._requestFeatures(d, c, l)
                    }
                return this
            },
            refresh: function() {
                this.setWhere(this.options.where)
            },
            _filterExistingFeatures: function(t, i, n, o) {
                var s = t && i ? this._getFeaturesInTimeRange(t, i) : this._currentSnapshot,
                    r = this._getFeaturesInTimeRange(n, o);
                if (r.indexOf)
                    for (var a = 0; a < r.length; a++) {
                        var h = s.indexOf(r[a]);
                        0 <= h && s.splice(h, 1)
                    }
                e.Util.requestAnimFrame(e.Util.bind((function() {
                    this.removeLayers(s), this.addLayers(r)
                }), this))
            },
            _getFeaturesInTimeRange: function(t, e) {
                var i = [];
                if (this.options.timeField.start && this.options.timeField.end) var n = this._startTimeIndex.between(t, e),
                    o = this._endTimeIndex.between(t, e),
                    s = n.concat(o);
                else {
                    if (!this._timeIndex) return _("You must set timeField in the layer constructor in order to manipulate the start and end time filter."), [];
                    s = this._timeIndex.between(t, e)
                }
                for (var r = s.length - 1; 0 <= r; r--) i.push(s[r].id);
                return i
            },
            _buildTimeIndexes: function(t) {
                var e;
                if (this.options.timeField.start && this.options.timeField.end) {
                    for (var i = [], n = [], o = t.length - 1; 0 <= o; o--) e = t[o], i.push({
                        id: e.id,
                        value: new Date(e.properties[this.options.timeField.start])
                    }), n.push({
                        id: e.id,
                        value: new Date(e.properties[this.options.timeField.end])
                    });
                    this._startTimeIndex.bulkAdd(i), this._endTimeIndex.bulkAdd(n)
                } else {
                    var s = [];
                    for (o = t.length - 1; 0 <= o; o--) e = t[o], s.push({
                        id: e.id,
                        value: new Date(e.properties[this.options.timeField])
                    });
                    this._timeIndex.bulkAdd(s)
                }
            },
            _featureWithinTimeRange: function(t) {
                if (!this.options.from || !this.options.to) return !0;
                var e = +this.options.from.valueOf(),
                    i = +this.options.to.valueOf();
                if ("string" == typeof this.options.timeField) {
                    var n = +t.properties[this.options.timeField];
                    return e <= n && n <= i
                }
                if (this.options.timeField.start && this.options.timeField.end) {
                    var o = +t.properties[this.options.timeField.start],
                        s = +t.properties[this.options.timeField.end];
                    return e <= o && o <= i || e <= s && s <= i || o <= e && i <= s
                }
            },
            _visibleZoom: function() {
                if (!this._map) return !1;
                var t = this._map.getZoom();
                return !(t > this.options.maxZoom || t < this.options.minZoom)
            },
            _handleZoomChange: function() {
                if (this._visibleZoom())
                    for (var t in this._cells) {
                        var e = this._cells[t].coords,
                            i = this._cacheKey(e);
                        this._cache[i] && this.addLayers(this._cache[i])
                    } else this.removeLayers(this._currentSnapshot)
            },
            authenticate: function(t) {
                return this.service.authenticate(t), this
            },
            metadata: function(t, e) {
                return this.service.metadata(t, e), this
            },
            query: function() {
                return this.service.query()
            },
            _getMetadata: function(t) {
                this._metadata ? t(void 0, this._metadata) : this.metadata(e.Util.bind((function(e, i) {
                    this._metadata = i, t(e, this._metadata)
                }), this))
            },
            addFeature: function(t, e, i) {
                this.addFeatures(t, e, i)
            },
            addFeatures: function(t, i, n) {
                this._getMetadata(e.Util.bind((function(o, s) {
                    var r;
                    o ? i && i.call(this, o, null) : (r = t.features ? t.features : [t], this.service.addFeatures(t, e.Util.bind((function(t, e) {
                        if (!t) {
                            for (var o = r.length - 1; 0 <= o; o--) r[o].properties[s.objectIdField] = 1 < r.length ? e[o].objectId : e.objectId, r[o].id = 1 < r.length ? e[o].objectId : e.objectId;
                            this._addFeatures(r)
                        }
                        i && i.call(n, t, e)
                    }), this)))
                }), this))
            },
            updateFeature: function(t, e, i) {
                this.updateFeatures(t, e, i)
            },
            updateFeatures: function(t, e, i) {
                var n = t.features ? t.features : [t];
                this.service.updateFeatures(t, (function(t, o) {
                    if (!t) {
                        for (var s = n.length - 1; 0 <= s; s--) this.removeLayers([n[s].id], !0);
                        this._addFeatures(n)
                    }
                    e && e.call(i, t, o)
                }), this)
            },
            deleteFeature: function(t, e, i) {
                this.deleteFeatures(t, e, i)
            },
            deleteFeatures: function(t, e, i) {
                return this.service.deleteFeatures(t, (function(t, n) {
                    var o = n.length ? n : [n];
                    if (!t && 0 < o.length)
                        for (var s = o.length - 1; 0 <= s; s--) this.removeLayers([o[s].objectId], !0);
                    e && e.call(i, t, n)
                }), this)
            }
        }),
        ft = mt.extend({
            options: {
                cacheLayers: !0
            },
            initialize: function(t) {
                mt.prototype.initialize.call(this, t), this._originalStyle = this.options.style, this._layers = {}
            },
            onRemove: function(t) {
                for (var e in this._layers) t.removeLayer(this._layers[e]), this.fire("removefeature", {
                    feature: this._layers[e].feature,
                    permanent: !1
                }, !0);
                return mt.prototype.onRemove.call(this, t)
            },
            createNewLayer: function(t) {
                var i = e.GeoJSON.geometryToLayer(t, this.options);
                return i && (i.defaultOptions = i.options), i
            },
            _updateLayer: function(t, i) {
                var n = [],
                    o = this.options.coordsToLatLng || e.GeoJSON.coordsToLatLng;
                switch (i.properties && (t.feature.properties = i.properties), i.geometry.type) {
                    case "Point":
                        n = e.GeoJSON.coordsToLatLng(i.geometry.coordinates), t.setLatLng(n);
                        break;
                    case "LineString":
                        n = e.GeoJSON.coordsToLatLngs(i.geometry.coordinates, 0, o), t.setLatLngs(n);
                        break;
                    case "MultiLineString":
                    case "Polygon":
                        n = e.GeoJSON.coordsToLatLngs(i.geometry.coordinates, 1, o), t.setLatLngs(n);
                        break;
                    case "MultiPolygon":
                        n = e.GeoJSON.coordsToLatLngs(i.geometry.coordinates, 2, o), t.setLatLngs(n)
                }
            },
            createLayers: function(t) {
                for (var e = t.length - 1; 0 <= e; e--) {
                    var i, n = t[e],
                        o = this._layers[n.id];
                    !this._visibleZoom() || !o || this._map.hasLayer(o) || this.options.timeField && !this._featureWithinTimeRange(n) || (this._map.addLayer(o), this.fire("addfeature", {
                        feature: o.feature
                    }, !0)), o && 0 < this.options.simplifyFactor && (o.setLatLngs || o.setLatLng) && this._updateLayer(o, n), o || ((i = this.createNewLayer(n)) ? (i.feature = n, i.addEventParent(this), this.options.onEachFeature && this.options.onEachFeature(i.feature, i), this._layers[i.feature.id] = i, this.setFeatureStyle(i.feature.id, this.options.style), this.fire("createfeature", {
                        feature: i.feature
                    }, !0), this._visibleZoom() && (!this.options.timeField || this.options.timeField && this._featureWithinTimeRange(n)) && this._map.addLayer(i)) : _("invalid GeoJSON encountered"))
                }
            },
            addLayers: function(t) {
                for (var e = t.length - 1; 0 <= e; e--) {
                    var i = this._layers[t[e]];
                    !i || this.options.timeField && !this._featureWithinTimeRange(i.feature) || this._map.addLayer(i)
                }
            },
            removeLayers: function(t, e) {
                for (var i = t.length - 1; 0 <= i; i--) {
                    var n = t[i],
                        o = this._layers[n];
                    o && (this.fire("removefeature", {
                        feature: o.feature,
                        permanent: e
                    }, !0), this._map.removeLayer(o)), o && e && delete this._layers[n]
                }
            },
            cellEnter: function(t, i) {
                this._visibleZoom() && !this._zooming && this._map && e.Util.requestAnimFrame(e.Util.bind((function() {
                    var t = this._cacheKey(i),
                        e = this._cellCoordsToKey(i),
                        n = this._cache[t];
                    this._activeCells[e] && n && this.addLayers(n)
                }), this))
            },
            cellLeave: function(t, i) {
                this._zooming || e.Util.requestAnimFrame(e.Util.bind((function() {
                    if (this._map) {
                        var t = this._cacheKey(i),
                            e = this._cellCoordsToKey(i),
                            n = this._cache[t],
                            o = this._map.getBounds();
                        if (!this._activeCells[e] && n) {
                            for (var s = !0, r = 0; r < n.length; r++) {
                                var a = this._layers[n[r]];
                                a && a.getBounds && o.intersects(a.getBounds()) && (s = !1)
                            }
                            s && this.removeLayers(n, !this.options.cacheLayers), !this.options.cacheLayers && s && (delete this._cache[t], delete this._cells[e], delete this._activeCells[e])
                        }
                    }
                }), this))
            },
            resetStyle: function() {
                return this.options.style = this._originalStyle, this.eachFeature((function(t) {
                    this.resetFeatureStyle(t.feature.id)
                }), this), this
            },
            setStyle: function(t) {
                return this.options.style = t, this.eachFeature((function(e) {
                    this.setFeatureStyle(e.feature.id, t)
                }), this), this
            },
            resetFeatureStyle: function(t) {
                var i = this._layers[t],
                    n = this._originalStyle || e.Path.prototype.options;
                return i && (e.Util.extend(i.options, i.defaultOptions), this.setFeatureStyle(t, n)), this
            },
            setFeatureStyle: function(t, e) {
                var i = this._layers[t];
                return "function" == typeof e && (e = e(i.feature)), i.setStyle && i.setStyle(e), this
            },
            eachActiveFeature: function(t, e) {
                if (this._map) {
                    var i = this._map.getBounds();
                    for (var n in this._layers) - 1 !== this._currentSnapshot.indexOf(this._layers[n].feature.id) && ("function" == typeof this._layers[n].getLatLng && i.contains(this._layers[n].getLatLng()) || "function" == typeof this._layers[n].getBounds && i.intersects(this._layers[n].getBounds())) && t.call(e, this._layers[n])
                }
                return this
            },
            eachFeature: function(t, e) {
                for (var i in this._layers) t.call(e, this._layers[i]);
                return this
            },
            getFeature: function(t) {
                return this._layers[t]
            },
            bringToBack: function() {
                this.eachFeature((function(t) {
                    t.bringToBack && t.bringToBack()
                }))
            },
            bringToFront: function() {
                this.eachFeature((function(t) {
                    t.bringToFront && t.bringToFront()
                }))
            },
            redraw: function(t) {
                return t && this._redraw(t), this
            },
            _redraw: function(t) {
                var i, n, o = this._layers[t],
                    s = o.feature;
                o && o.setIcon && this.options.pointToLayer && this.options.pointToLayer && (i = this.options.pointToLayer(s, e.latLng(s.geometry.coordinates[1], s.geometry.coordinates[0])).options.icon, o.setIcon(i)), o && o.setStyle && this.options.pointToLayer && (n = this.options.pointToLayer(s, e.latLng(s.geometry.coordinates[1], s.geometry.coordinates[0])).options, this.setFeatureStyle(s.id, n)), o && o.setStyle && this.options.style && this.resetStyle(s.id)
            }
        });
    t.BasemapLayer = at, t.DynamicMapLayer = dt, t.FeatureLayer = ft, t.FeatureLayerService = ot, t.FeatureManager = mt, t.Find = H, t.Identify = K, t.IdentifyFeatures = J, t.IdentifyImage = Q, t.ImageMapLayer = ct, t.ImageService = it, t.MapService = tt, t.Query = q, t.RasterLayer = ut, t.Service = $, t.Support = o, t.Task = G, t.TiledMapLayer = ht, t.Util = j, t.VERSION = "2.5.3", t.basemapLayer = function(t, e) {
        return new at(t, e)
    }, t.dynamicMapLayer = function(t, e) {
        return new dt(t, e)
    }, t.featureLayer = function(t) {
        return new ft(t)
    }, t.featureLayerService = st, t.find = V, t.get = p, t.identify = function(t) {
        return new K(t)
    }, t.identifyFeatures = Y, t.identifyImage = X, t.imageMapLayer = function(t, e) {
        return new ct(t, e)
    }, t.imageService = nt, t.mapService = et, t.options = s, t.post = l, t.query = W, t.request = c, t.service = function(t) {
        return t = E(t), new $(t)
    }, t.task = function(t) {
        return t = E(t), new G(t)
    }, t.tiledMapLayer = function(t, e) {
        return new ht(t, e)
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
})),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("leaflet"), require("esri-leaflet")) : "function" == typeof define && define.amd ? define(["exports", "leaflet", "esri-leaflet"], e) : e(((t = t || self).L = t.L || {}, t.L.esri = t.L.esri || {}, t.L.esri.Geocoding = {}), t.L, t.L.esri)
}(this, (function(t, e, i) {
    "use strict";
    var n = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/",
        o = i.Task.extend({
            path: "findAddressCandidates",
            params: {
                outSr: 4326,
                forStorage: !1,
                outFields: "*",
                maxLocations: 20
            },
            setters: {
                address: "address",
                neighborhood: "neighborhood",
                city: "city",
                subregion: "subregion",
                region: "region",
                postal: "postal",
                country: "country",
                text: "singleLine",
                category: "category",
                token: "token",
                key: "magicKey",
                fields: "outFields",
                forStorage: "forStorage",
                maxLocations: "maxLocations",
                countries: "sourceCountry"
            },
            initialize: function(t) {
                (t = t || {}).url = t.url || n, i.Task.prototype.initialize.call(this, t)
            },
            within: function(t) {
                return t = e.latLngBounds(t), this.params.searchExtent = i.Util.boundsToExtent(t), this
            },
            nearby: function(t, i) {
                var n = e.latLng(t);
                return this.params.location = n.lng + "," + n.lat, i && (this.params.distance = Math.min(Math.max(i, 2e3), 5e4)), this
            },
            run: function(t, e) {
                return this.options.customParam && (this.params[this.options.customParam] = this.params.singleLine, delete this.params.singleLine), this.request((function(i, n) {
                    var o = this._processGeocoderResponse,
                        s = i ? void 0 : o(n);
                    t.call(e, i, {
                        results: s
                    }, n)
                }), this)
            },
            _processGeocoderResponse: function(t) {
                for (var n = [], o = 0; o < t.candidates.length; o++) {
                    var s, r = t.candidates[o];
                    r.extent && (s = i.Util.extentToBounds(r.extent)), n.push({
                        text: r.address,
                        bounds: s,
                        score: r.score,
                        latlng: e.latLng(r.location.y, r.location.x),
                        properties: r.attributes
                    })
                }
                return n
            }
        });

    function s(t) {
        return new o(t)
    }
    var r = i.Task.extend({
        path: "reverseGeocode",
        params: {
            outSR: 4326,
            returnIntersection: !1
        },
        setters: {
            distance: "distance",
            language: "langCode",
            intersection: "returnIntersection"
        },
        initialize: function(t) {
            (t = t || {}).url = t.url || n, i.Task.prototype.initialize.call(this, t)
        },
        latlng: function(t) {
            var i = e.latLng(t);
            return this.params.location = i.lng + "," + i.lat, this
        },
        run: function(t, i) {
            return this.request((function(n, o) {
                var s = n ? void 0 : {
                    latlng: e.latLng(o.location.y, o.location.x),
                    address: o.address
                };
                t.call(i, n, s, o)
            }), this)
        }
    });

    function a(t) {
        return new r(t)
    }
    var h = i.Task.extend({
        path: "suggest",
        params: {},
        setters: {
            text: "text",
            category: "category",
            countries: "countryCode",
            maxSuggestions: "maxSuggestions"
        },
        initialize: function(t) {
            (t = t || {}).url || (t.url = n, t.supportsSuggest = !0), i.Task.prototype.initialize.call(this, t)
        },
        within: function(t) {
            var n = (t = (t = e.latLngBounds(t)).pad(.5)).getCenter(),
                o = t.getNorthWest();
            return this.params.location = n.lng + "," + n.lat, this.params.distance = Math.min(Math.max(n.distanceTo(o), 2e3), 5e4), this.params.searchExtent = i.Util.boundsToExtent(t), this
        },
        nearby: function(t, i) {
            var n = e.latLng(t);
            return this.params.location = n.lng + "," + n.lat, i && (this.params.distance = Math.min(Math.max(i, 2e3), 5e4)), this
        },
        run: function(t, e) {
            if (this.options.supportsSuggest) return this.request((function(i, n) {
                t.call(e, i, n, n)
            }), this);
            console.warn("this geocoding service does not support asking for suggestions")
        }
    });

    function l(t) {
        return new h(t)
    }
    var u = i.Service.extend({
            initialize: function(t) {
                (t = t || {}).url ? (i.Service.prototype.initialize.call(this, t), this._confirmSuggestSupport()) : (t.url = n, t.supportsSuggest = !0, i.Service.prototype.initialize.call(this, t))
            },
            geocode: function() {
                return s(this)
            },
            reverse: function() {
                return a(this)
            },
            suggest: function() {
                return l(this)
            },
            _confirmSuggestSupport: function() {
                this.metadata((function(t, e) {
                    t || (e.capabilities && -1 < e.capabilities.indexOf("Suggest") ? this.options.supportsSuggest = !0 : this.options.supportsSuggest = !1, this.options.customParam = e.singleLineAddressField.name)
                }), this)
            }
        }),
        c = e.Evented.extend({
            options: {
                zoomToResult: !0,
                useMapBounds: 12,
                searchBounds: null
            },
            initialize: function(t, i) {
                if (e.Util.setOptions(this, i), this._control = t, !i || !i.providers || !i.providers.length) throw new Error("You must specify at least one provider");
                this._providers = i.providers
            },
            _geocode: function(t, i, n) {
                var o, s = 0,
                    r = [],
                    a = e.Util.bind((function(e, i) {
                        s--, e || (i && (r = r.concat(i)), s <= 0 && (o = this._boundsFromResults(r), this.fire("results", {
                            results: r,
                            bounds: o,
                            latlng: o ? o.getCenter() : void 0,
                            text: t
                        }, !0), this.options.zoomToResult && o && this._control._map.fitBounds(o), this.fire("load")))
                    }), this);
                if (i) s++, n.results(t, i, this._searchBounds(), a);
                else
                    for (var h = 0; h < this._providers.length; h++) s++, this._providers[h].results(t, i, this._searchBounds(), a)
            },
            _suggest: function(t) {
                var i = this._providers.length,
                    n = 0,
                    o = e.Util.bind((function(t, o) {
                        return e.Util.bind((function(e, s) {
                            if (--i, n += s.length, e) return this._control._clearProviderSuggestions(o), void this._control._finalizeSuggestions(i, n);
                            if (s.length)
                                for (var r = 0; r < s.length; r++) s[r].provider = o;
                            else this._control._renderSuggestions(s);
                            o._lastRender !== t && this._control._clearProviderSuggestions(o), s.length && this._control._input.value === t && (o._lastRender = t, this._control._renderSuggestions(s)), this._control._finalizeSuggestions(i, n)
                        }), this)
                    }), this);
                this._pendingSuggestions = [];
                for (var s = 0; s < this._providers.length; s++) {
                    var r = this._providers[s],
                        a = r.suggestions(t, this._searchBounds(), o(t, r));
                    this._pendingSuggestions.push(a)
                }
            },
            _searchBounds: function() {
                return null !== this.options.searchBounds ? this.options.searchBounds : !1 !== this.options.useMapBounds && (!0 === this.options.useMapBounds || this.options.useMapBounds <= this._control._map.getZoom()) ? this._control._map.getBounds() : null
            },
            _boundsFromResults: function(t) {
                if (t.length) {
                    for (var i = e.latLngBounds([0, 0], [0, 0]), n = [], o = [], s = t.length - 1; 0 <= s; s--) {
                        var r = t[s];
                        o.push(r.latlng), r.bounds && r.bounds.isValid() && !r.bounds.equals(i) && n.push(r.bounds)
                    }
                    for (var a = e.latLngBounds(o), h = 0; h < n.length; h++) a.extend(n[h]);
                    return a
                }
            },
            _getAttribution: function() {
                for (var t = [], e = this._providers, i = 0; i < e.length; i++) e[i].options.attribution && t.push(e[i].options.attribution);
                return t.join(", ")
            }
        });

    function d(t, e) {
        return new c(t, e)
    }
    var p = u.extend({
        options: {
            label: "Places and Addresses",
            maxResults: 5
        },
        suggestions: function(t, e, i) {
            var n = this.suggest().text(t);
            return e && n.within(e), this.options.nearby && n.nearby(this.options.nearby), this.options.countries && n.countries(this.options.countries), this.options.categories && n.category(this.options.categories), n.maxSuggestions(this.options.maxResults), n.run((function(t, e, n) {
                var o = [];
                if (!t)
                    for (; n.suggestions.length && o.length <= this.options.maxResults - 1;) {
                        var s = n.suggestions.shift();
                        s.isCollection || o.push({
                            text: s.text,
                            unformattedText: s.text,
                            magicKey: s.magicKey
                        })
                    }
                i(t, o)
            }), this)
        },
        results: function(t, e, i, n) {
            var o = this.geocode().text(t);
            return e && o.key(e), o.maxLocations(this.options.maxResults), i && o.within(i), this.options.forStorage && o.forStorage(!0), this.options.nearby && o.nearby(this.options.nearby), this.options.countries && o.countries(this.options.countries), this.options.categories && o.category(this.options.categories), o.run((function(t, e) {
                n(t, e.results)
            }), this)
        }
    });

    function _(t) {
        return new p(t)
    }
    var m = e.Control.extend({
            includes: e.Evented.prototype,
            options: {
                position: "topleft",
                collapseAfterResult: !0,
                expanded: !1,
                allowMultipleResults: !0,
                placeholder: "Search for places or addresses",
                title: "Location Search"
            },
            initialize: function(t) {
                e.Util.setOptions(this, t), t && t.providers && t.providers.length || ((t = t || {}).providers = [_()]), this._geosearchCore = d(this, t), this._geosearchCore._providers = t.providers, this._geosearchCore.addEventParent(this);
                for (var i = 0; i < this._geosearchCore._providers.length; i++) this._geosearchCore._providers[i].addEventParent(this);
                this._geosearchCore._pendingSuggestions = [], e.Control.prototype.initialize.call(this, t)
            },
            _renderSuggestions: function(t) {
                var i, n, o;
                0 < t.length && (this._suggestions.style.display = "block");
                for (var s = [], r = 0; r < t.length; r++) {
                    var a = t[r];
                    if (!o && 1 < this._geosearchCore._providers.length && i !== a.provider.options.label && ((o = e.DomUtil.create("div", "geocoder-control-header", a.provider._contentsElement)).textContent = a.provider.options.label, o.innerText = a.provider.options.label, i = a.provider.options.label), n = n || e.DomUtil.create("ul", "geocoder-control-list", a.provider._contentsElement), -1 === s.indexOf(a.text)) {
                        var h = e.DomUtil.create("li", "geocoder-control-suggestion", n);
                        h.innerHTML = a.text, h.provider = a.provider, h["data-magic-key"] = a.magicKey, h.unformattedText = a.unformattedText
                    } else
                        for (var l = 0; l < n.childNodes.length; l++) n.childNodes[l].innerHTML === a.text && (n.childNodes[l]["data-magic-key"] += "," + a.magicKey);
                    s.push(a.text)
                } - 1 < this.getPosition().indexOf("top") && (this._suggestions.style.maxHeight = this._map.getSize().y - this._suggestions.offsetTop - this._wrapper.offsetTop - 10 + "px"), -1 < this.getPosition().indexOf("bottom") && this._setSuggestionsBottomPosition()
            },
            _setSuggestionsBottomPosition: function() {
                this._suggestions.style.maxHeight = this._map.getSize().y - this._map._controlCorners[this.getPosition()].offsetHeight - this._wrapper.offsetHeight + "px", this._suggestions.style.top = -this._suggestions.offsetHeight - this._wrapper.offsetHeight + 20 + "px"
            },
            _boundsFromResults: function(t) {
                if (t.length) {
                    for (var i = e.latLngBounds([0, 0], [0, 0]), n = [], o = [], s = t.length - 1; 0 <= s; s--) {
                        var r = t[s];
                        o.push(r.latlng), r.bounds && r.bounds.isValid() && !r.bounds.equals(i) && n.push(r.bounds)
                    }
                    for (var a = e.latLngBounds(o), h = 0; h < n.length; h++) a.extend(n[h]);
                    return a
                }
            },
            clear: function() {
                this._clearAllSuggestions(), this.options.collapseAfterResult && (this._input.value = "", this._lastValue = "", this._input.placeholder = "", e.DomUtil.removeClass(this._wrapper, "geocoder-control-expanded")), !this._map.scrollWheelZoom.enabled() && this._map.options.scrollWheelZoom && this._map.scrollWheelZoom.enable()
            },
            _clearAllSuggestions: function() {
                this._suggestions.style.display = "none";
                for (var t = 0; t < this.options.providers.length; t++) this._clearProviderSuggestions(this.options.providers[t])
            },
            _clearProviderSuggestions: function(t) {
                t._contentsElement.innerHTML = ""
            },
            _finalizeSuggestions: function(t, i) {
                t || (e.DomUtil.removeClass(this._input, "geocoder-control-loading"), -1 < this.getPosition().indexOf("bottom") && this._setSuggestionsBottomPosition(), i || this._clearAllSuggestions())
            },
            _setupClick: function() {
                e.DomUtil.addClass(this._wrapper, "geocoder-control-expanded"), this._input.focus()
            },
            disable: function() {
                this._input.disabled = !0, e.DomUtil.addClass(this._input, "geocoder-control-input-disabled"), e.DomEvent.removeListener(this._wrapper, "click", this._setupClick, this)
            },
            enable: function() {
                this._input.disabled = !1, e.DomUtil.removeClass(this._input, "geocoder-control-input-disabled"), e.DomEvent.addListener(this._wrapper, "click", this._setupClick, this)
            },
            getAttribution: function() {
                for (var t = [], e = 0; e < this._providers.length; e++) this._providers[e].options.attribution && t.push(this._providers[e].options.attribution);
                return t.join(", ")
            },
            geocodeSuggestion: function(t) {
                var e = t.target || t.srcElement;
                e.classList.contains("geocoder-control-suggestions") || e.classList.contains("geocoder-control-header") || (e.classList.length < 1 && (e = e.parentNode), this._geosearchCore._geocode(e.unformattedText, e["data-magic-key"], e.provider), this.clear())
            },
            onAdd: function(t) {
                i.Util.setEsriAttribution(t), this._map = t, this._wrapper = e.DomUtil.create("div", "geocoder-control"), this._input = e.DomUtil.create("input", "geocoder-control-input leaflet-bar", this._wrapper), this._input.title = this.options.title, this.options.expanded && (e.DomUtil.addClass(this._wrapper, "geocoder-control-expanded"), this._input.placeholder = this.options.placeholder), this._suggestions = e.DomUtil.create("div", "geocoder-control-suggestions leaflet-bar", this._wrapper);
                for (var n = 0; n < this.options.providers.length; n++) this.options.providers[n]._contentsElement = e.DomUtil.create("div", null, this._suggestions);
                var o = this._geosearchCore._getAttribution();
                return t.attributionControl && t.attributionControl.addAttribution(o), e.DomEvent.addListener(this._input, "focus", (function(t) {
                    this._input.placeholder = this.options.placeholder, e.DomUtil.addClass(this._wrapper, "geocoder-control-expanded")
                }), this), e.DomEvent.addListener(this._wrapper, "click", this._setupClick, this), e.DomEvent.addListener(this._suggestions, "mousedown", this.geocodeSuggestion, this), e.DomEvent.addListener(this._input, "blur", (function(t) {
                    this.clear()
                }), this), e.DomEvent.addListener(this._input, "keydown", (function(t) {
                    var i = (t.target || t.srcElement).value;
                    e.DomUtil.addClass(this._wrapper, "geocoder-control-expanded");
                    for (var n, o = this._suggestions.querySelectorAll(".geocoder-control-suggestion"), s = this._suggestions.querySelectorAll(".geocoder-control-selected")[0], r = 0; r < o.length; r++)
                        if (o[r] === s) {
                            n = r;
                            break
                        }
                    switch (t.keyCode) {
                        case 13:
                            s ? (this._input.value = s.innerText, this._geosearchCore._geocode(s.unformattedText, s["data-magic-key"], s.provider), this.clear()) : this.options.allowMultipleResults && 2 <= i.length ? (this._geosearchCore._geocode(this._input.value, void 0), this.clear()) : 1 === o.length ? (e.DomUtil.addClass(o[0], "geocoder-control-selected"), this._geosearchCore._geocode(o[0].innerHTML, o[0]["data-magic-key"], o[0].provider)) : (this.clear(), this._input.blur()), e.DomEvent.preventDefault(t);
                            break;
                        case 38:
                            s && e.DomUtil.removeClass(s, "geocoder-control-selected");
                            var a = o[n - 1];
                            s && a ? e.DomUtil.addClass(a, "geocoder-control-selected") : e.DomUtil.addClass(o[o.length - 1], "geocoder-control-selected"), e.DomEvent.preventDefault(t);
                            break;
                        case 40:
                            s && e.DomUtil.removeClass(s, "geocoder-control-selected");
                            var h = o[n + 1];
                            s && h ? e.DomUtil.addClass(h, "geocoder-control-selected") : e.DomUtil.addClass(o[0], "geocoder-control-selected"), e.DomEvent.preventDefault(t);
                            break;
                        default:
                            for (var l = 0; l < this._geosearchCore._pendingSuggestions.length; l++) {
                                var u = this._geosearchCore._pendingSuggestions[l];
                                u && u.abort && !u.id && u.abort()
                            }
                    }
                }), this), e.DomEvent.addListener(this._input, "keyup", e.Util.throttle((function(t) {
                    var i = t.which || t.keyCode,
                        n = (t.target || t.srcElement).value;
                    if (n.length < 2) return this._lastValue = this._input.value, this._clearAllSuggestions(), void e.DomUtil.removeClass(this._input, "geocoder-control-loading");
                    27 !== i ? 13 !== i && 38 !== i && 40 !== i && this._input.value !== this._lastValue && (this._lastValue = this._input.value, e.DomUtil.addClass(this._input, "geocoder-control-loading"), this._geosearchCore._suggest(n)) : this._clearAllSuggestions()
                }), 50, this), this), e.DomEvent.disableClickPropagation(this._wrapper), e.DomEvent.addListener(this._suggestions, "mouseover", (function(e) {
                    t.scrollWheelZoom.enabled() && t.options.scrollWheelZoom && t.scrollWheelZoom.disable()
                })), e.DomEvent.addListener(this._suggestions, "mouseout", (function(e) {
                    !t.scrollWheelZoom.enabled() && t.options.scrollWheelZoom && t.scrollWheelZoom.enable()
                })), this._geosearchCore.on("load", (function(t) {
                    e.DomUtil.removeClass(this._input, "geocoder-control-loading"), this.clear(), this._input.blur()
                }), this), this._wrapper
            }
        }),
        f = i.FeatureLayerService.extend({
            options: {
                label: "Feature Layer",
                maxResults: 5,
                bufferRadius: 1e3,
                searchMode: "contain",
                formatSuggestion: function(t) {
                    return t.properties[this.options.searchFields[0]]
                }
            },
            initialize: function(t) {
                i.FeatureLayerService.prototype.initialize.call(this, t), "string" == typeof this.options.searchFields && (this.options.searchFields = [this.options.searchFields]), this._suggestionsQuery = this.query(), this._resultsQuery = this.query()
            },
            suggestions: function(t, e, i) {
                var n = this._suggestionsQuery.where(this._buildQuery(t)).returnGeometry(!1);
                return e && n.intersects(e), this.options.idField && n.fields([this.options.idField].concat(this.options.searchFields)), n.run((function(t, e, n) {
                    if (t) i(t, []);
                    else {
                        this.options.idField = n.objectIdFieldName;
                        for (var o = [], s = e.features.length - 1; 0 <= s; s--) {
                            var r = e.features[s];
                            o.push({
                                text: this.options.formatSuggestion.call(this, r),
                                unformattedText: r.properties[this.options.searchFields[0]],
                                magicKey: r.id
                            })
                        }
                        i(t, o.slice(0, this.options.maxResults))
                    }
                }), this)
            },
            results: function(t, i, n, o) {
                var s = this._resultsQuery;
                return i ? (delete s.params.where, s.featureIds([i])) : s.where(this._buildQuery(t)), n && s.within(n), s.run(e.Util.bind((function(t, e) {
                    for (var i = [], n = 0; n < e.features.length; n++) {
                        var s, r, a = e.features[n];
                        a && (r = {
                            latlng: (s = this._featureBounds(a)).getCenter(),
                            bounds: s,
                            text: this.options.formatSuggestion.call(this, a),
                            properties: a.properties,
                            geojson: a
                        }, i.push(r), delete this._resultsQuery.params.objectIds)
                    }
                    o(t, i)
                }), this))
            },
            orderBy: function(t, e) {
                this._suggestionsQuery.orderBy(t, e)
            },
            _buildQuery: function(t) {
                for (var e = [], i = this.options.searchFields.length - 1; 0 <= i; i--) {
                    var n = 'upper("' + this.options.searchFields[i] + '")';
                    if ("contain" === this.options.searchMode) e.push(n + " LIKE upper('%" + t + "%')");
                    else if ("startWith" === this.options.searchMode) e.push(n + " LIKE upper('" + t + "%')");
                    else if ("endWith" === this.options.searchMode) e.push(n + " LIKE upper('%" + t + "')");
                    else {
                        if ("strict" !== this.options.searchMode) throw new Error('L.esri.Geocoding.featureLayerProvider: Invalid parameter for "searchMode". Use one of "contain", "startWith", "endWith", or "strict"');
                        e.push(n + " LIKE upper('" + t + "')")
                    }
                }
                return this.options.where ? this.options.where + " AND (" + e.join(" OR ") + ")" : e.join(" OR ")
            },
            _featureBounds: function(t) {
                var i = e.geoJson(t);
                if ("Point" !== t.geometry.type) return i.getBounds();
                var n = i.getBounds().getCenter(),
                    o = this.options.bufferRadius / 40075017 * 360 / Math.cos(180 / Math.PI * n.lat),
                    s = this.options.bufferRadius / 40075017 * 360;
                return e.latLngBounds([n.lat - s, n.lng - o], [n.lat + s, n.lng + o])
            }
        }),
        g = i.MapService.extend({
            options: {
                layers: [0],
                label: "Map Service",
                bufferRadius: 1e3,
                maxResults: 5,
                formatSuggestion: function(t) {
                    return t.properties[t.displayFieldName] + " <small>" + t.layerName + "</small>"
                }
            },
            initialize: function(t) {
                i.MapService.prototype.initialize.call(this, t), this._getIdFields()
            },
            suggestions: function(t, e, i) {
                return this.find().text(t).fields(this.options.searchFields).returnGeometry(!1).layers(this.options.layers).run((function(t, e, n) {
                    var o = [];
                    if (!t) {
                        var s = Math.min(this.options.maxResults, e.features.length);
                        n.results = n.results.reverse();
                        for (var r = 0; r < s; r++) {
                            var a = e.features[r],
                                h = n.results[r],
                                l = h.layerId,
                                u = this._idFields[l];
                            a.layerId = l, a.layerName = this._layerNames[l], a.displayFieldName = this._displayFields[l], u && o.push({
                                text: this.options.formatSuggestion.call(this, a),
                                unformattedText: a.properties[a.displayFieldName],
                                magicKey: h.attributes[u] + ":" + l
                            })
                        }
                    }
                    i(t, o.reverse())
                }), this)
            },
            results: function(t, e, i, n) {
                var o, s, r = [];
                return (e && !e.includes(",") ? (o = e.split(":")[0], s = e.split(":")[1], this.query().layer(s).featureIds(o)) : this.find().text(t).fields(this.options.searchFields).layers(this.options.layers)).run((function(t, e, i) {
                    if (!t) {
                        i.results && (i.results = i.results.reverse());
                        for (var o = 0; o < e.features.length; o++) {
                            var a, h, l = e.features[o];
                            s = s || i.results[o].layerId, l && void 0 !== s && (a = this._featureBounds(l), l.layerId = s, l.layerName = this._layerNames[s], l.displayFieldName = this._displayFields[s], h = {
                                latlng: a.getCenter(),
                                bounds: a,
                                text: this.options.formatSuggestion.call(this, l),
                                properties: l.properties,
                                geojson: l
                            }, r.push(h))
                        }
                    }
                    n(t, r.reverse())
                }), this)
            },
            _featureBounds: function(t) {
                var i = e.geoJson(t);
                if ("Point" !== t.geometry.type) return i.getBounds();
                var n = i.getBounds().getCenter(),
                    o = this.options.bufferRadius / 40075017 * 360 / Math.cos(180 / Math.PI * n.lat),
                    s = this.options.bufferRadius / 40075017 * 360;
                return e.latLngBounds([n.lat - s, n.lng - o], [n.lat + s, n.lng + o])
            },
            _layerMetadataCallback: function(t) {
                return e.Util.bind((function(e, i) {
                    if (!e) {
                        this._displayFields[t] = i.displayField, this._layerNames[t] = i.name;
                        for (var n = 0; n < i.fields.length; n++) {
                            var o = i.fields[n];
                            if ("esriFieldTypeOID" === o.type) {
                                this._idFields[t] = o.name;
                                break
                            }
                        }
                    }
                }), this)
            },
            _getIdFields: function() {
                this._idFields = {}, this._displayFields = {}, this._layerNames = {};
                for (var t = 0; t < this.options.layers.length; t++) {
                    var e = this.options.layers[t];
                    this.get(e, {}, this._layerMetadataCallback(e))
                }
            }
        }),
        v = u.extend({
            options: {
                label: "Geocode Server",
                maxResults: 5
            },
            suggestions: function(t, e, i) {
                if (this.options.supportsSuggest) {
                    var n = this.suggest().text(t);
                    return e && n.within(e), n.run((function(t, e, n) {
                        var o = [];
                        if (!t)
                            for (; n.suggestions.length && o.length <= this.options.maxResults - 1;) {
                                var s = n.suggestions.shift();
                                s.isCollection || o.push({
                                    text: s.text,
                                    unformattedText: s.text,
                                    magicKey: s.magicKey
                                })
                            }
                        i(t, o)
                    }), this)
                }
                return i(void 0, []), !1
            },
            results: function(t, e, i, n) {
                var o = this.geocode().text(t);
                return e && o.key(e), o.maxLocations(this.options.maxResults), i && o.within(i), o.run((function(t, e) {
                    n(t, e.results)
                }), this)
            }
        });
    t.ArcgisOnlineProvider = p, t.FeatureLayerProvider = f, t.Geocode = o, t.GeocodeService = u, t.GeocodeServiceProvider = v, t.Geosearch = m, t.GeosearchCore = c, t.MapServiceProvider = g, t.ReverseGeocode = r, t.Suggest = h, t.VERSION = "2.3.4", t.WorldGeocodingServiceUrl = n, t.arcgisOnlineProvider = _, t.featureLayerProvider = function(t) {
        return new f(t)
    }, t.geocode = s, t.geocodeService = function(t) {
        return new u(t)
    }, t.geocodeServiceProvider = function(t) {
        return new v(t)
    }, t.geosearch = function(t) {
        return new m(t)
    }, t.geosearchCore = d, t.mapServiceProvider = function(t) {
        return new g(t)
    }, t.reverseGeocode = a, t.suggest = l, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));