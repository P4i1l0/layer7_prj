! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("sofa", [], t) : "object" == typeof exports ? exports.sofa = t() : e.sofa = t()
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e["default"]
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 50)
    }([function(e, t, n) {
        "use strict";
        t.__esModule = !0, t["default"] = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
    }, function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(e, t) {
        var n = e.exports = {
            version: "2.6.12"
        };
        "number" == typeof __e && (__e = n)
    }, function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return n.length && (0, c.forEach)(n, function(t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }), e
        }

        function o() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
                t = arguments[1];
            (0, c.forEach)(e, function(e) {
                t[e] = l(t[e], t)
            })
        }

        function i() {
            return d || (d = document.documentElement || document.body), d
        }

        function a(e, t) {
            try {
                return e()
            } catch (n) {
                return u["default"].set(t || {}, n)
            }
        }
        t.__esModule = !0, t.removeEventListener = t.addEventListener = t.bind = undefined, t.objectAssign = r, t.bindAll = o, t.getDocumentElement = i, t.runErrorSafe = a;
        var s = n(34),
            u = function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }(s),
            c = n(11),
            l = t.bind = function() {
                return Function.prototype.bind ? function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return e.bind.apply(e, n)
                } : function(e, t) {
                    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
                    var i = [].concat(r);
                    return function() {
                        for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return e.apply(t, i.concat([].concat(r || [])))
                    }
                }
            }(),
            d = null;
        t.addEventListener = function() {
            if (document.addEventListener) {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("test", null, t)
                } catch (n) {}
                return function(t, n, o, i) {
                    var a = !1;
                    return e && i && (a = r({
                        capture: !1,
                        passive: !1,
                        once: !1
                    }, i)), t.addEventListener(n, o, a)
                }
            }
            return function(e, t, n) {
                return e.attachEvent("on" + t, n)
            }
        }(), t.removeEventListener = function() {
            return document.removeEventListener ? function(e, t, n) {
                return e.removeEventListener(t, n, !1)
            } : function(e, t, n) {
                return e.detachEvent("on" + t, n)
            }
        }()
    }, function(e, t, n) {
        var r = n(6),
            o = n(16);
        e.exports = n(8) ? function(e, t, n) {
            return r.f(e, t, o(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    }, function(e, t, n) {
        var r = n(13),
            o = n(39),
            i = n(23),
            a = Object.defineProperty;
        t.f = n(8) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = i(t, !0), r(n), o) try {
                return a(e, t, n)
            } catch (s) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function(e, t, n) {
        e.exports = !n(14)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t, n) {
        var r = n(59),
            o = n(22);
        e.exports = function(e) {
            return r(o(e))
        }
    }, function(e, t, n) {
        var r = n(27)("wks"),
            o = n(18),
            i = n(1).Symbol,
            a = "function" == typeof i;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
        }).store = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            for (var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function() {}, n = 0, r = e.length; n < r; n++) t(e[n], n, e)
        }

        function o(e) {
            for (var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function() {}, n = [], r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r, e);
            return n
        }

        function i(e, t, n) {
            for (var r = -1, o = n || 0, i = e.length; o < i; o++)
                if (e[o] === t) {
                    r = o;
                    break
                } return r
        }
        t.__esModule = !0, t.forEach = r, t.map = o, t.indexOf = i
    }, function(e, t, n) {
        var r = n(1),
            o = n(2),
            i = n(38),
            a = n(5),
            s = n(3),
            u = function(e, t, n) {
                var c, l, d, h = e & u.F,
                    f = e & u.G,
                    p = e & u.S,
                    g = e & u.P,
                    y = e & u.B,
                    _ = e & u.W,
                    m = f ? o : o[t] || (o[t] = {}),
                    v = m.prototype,
                    w = f ? r : p ? r[t] : (r[t] || {}).prototype;
                f && (n = t);
                for (c in n)(l = !h && w && w[c] !== undefined) && s(m, c) || (d = l ? w[c] : n[c], m[c] = f && "function" != typeof w[c] ? n[c] : y && l ? i(d, r) : _ && w[c] == d ? function(e) {
                    var t = function(t, n, r) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n)
                            }
                            return new e(t, n, r)
                        }
                        return e.apply(this, arguments)
                    };
                    return t.prototype = e.prototype, t
                }(d) : g && "function" == typeof d ? i(Function.call, d) : d, g && ((m.virtual || (m.virtual = {}))[c] = d, e & u.R && v && !v[c] && a(v, c, d)))
            };
        u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
    }, function(e, t, n) {
        var r = n(7);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    }, function(e, t) {
        e.exports = !0
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, function(e, t, n) {
        var r = n(42),
            o = n(28);
        e.exports = Object.keys || function(e) {
            return r(e, o)
        }
    }, function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(e === undefined ? "" : e, ")_", (++n + r).toString(36))
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return window.JSON ? window.JSON.stringify(e) : "IE7 and older are not supported"
        }
        t.__esModule = !0, t.stringify = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(52),
            i = r(o),
            a = n(69),
            s = r(a),
            u = "function" == typeof s["default"] && "symbol" == typeof i["default"] ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof s["default"] && e.constructor === s["default"] && e !== s["default"].prototype ? "symbol" : typeof e
            };
        t["default"] = "function" == typeof s["default"] && "symbol" === u(i["default"]) ? function(e) {
            return void 0 === e ? "undefined" : u(e)
        } : function(e) {
            return e && "function" == typeof s["default"] && e.constructor === s["default"] && e !== s["default"].prototype ? "symbol" : void 0 === e ? "undefined" : u(e)
        }
    }, function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    }, function(e, t) {
        e.exports = function(e) {
            if (e == undefined) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, function(e, t, n) {
        var r = n(7);
        e.exports = function(e, t) {
            if (!r(e)) return e;
            var n, o;
            if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
            if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
            if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(e, t) {
        e.exports = {}
    }, function(e, t, n) {
        var r = n(13),
            o = n(58),
            i = n(28),
            a = n(26)("IE_PROTO"),
            s = function() {},
            u = function() {
                var e, t = n(40)("iframe"),
                    r = i.length;
                for (t.style.display = "none", n(63).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; r--;) delete u.prototype[i[r]];
                return u()
            };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = u(), t === undefined ? n : o(n, t)
        }
    }, function(e, t, n) {
        var r = n(27)("keys"),
            o = n(18);
        e.exports = function(e) {
            return r[e] || (r[e] = o(e))
        }
    }, function(e, t, n) {
        var r = n(2),
            o = n(1),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (e.exports = function(e, t) {
            return i[e] || (i[e] = t !== undefined ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(15) ? "pure" : "global",
            copyright: "짤 2020 Denis Pushkarev (zloirock.ru)"
        })
    }, function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(e, t, n) {
        var r = n(6).f,
            o = n(3),
            i = n(10)("toStringTag");
        e.exports = function(e, t, n) {
            e && !o(e = n ? e : e.prototype, i) && r(e, i, {
                configurable: !0,
                value: t
            })
        }
    }, function(e, t, n) {
        var r = n(22);
        e.exports = function(e) {
            return Object(r(e))
        }
    }, function(e, t, n) {
        t.f = n(10)
    }, function(e, t, n) {
        var r = n(1),
            o = n(2),
            i = n(15),
            a = n(31),
            s = n(6).f;
        e.exports = function(e) {
            var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == e.charAt(0) || e in t || s(t, e, {
                value: a.f(e)
            })
        }
    }, function(e, t) {
        t.f = {}.propertyIsEnumerable
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            return e ? u["default"].compressToEncodedURIComponent(e) : ""
        }
        t.__esModule = !0, t.ERROR_PREFIX = undefined;
        var i = n(0),
            a = r(i),
            s = n(35),
            u = r(s),
            c = n(19),
            l = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }(c),
            d = null,
            h = "WhatAreYouLookingFor|",
            f = (t.ERROR_PREFIX = h, function() {
                function e() {
                    (0, a["default"])(this, e)
                }
                return e.flush = function() {
                    d = null
                }, e.set = function(t, n) {
                    if (d) return e;
                    var r = void 0,
                        o = {};
                    "string" == typeof t ? r = t : (r = t.location || "", o = t.properties || {});
                    try {
                        o = l.stringify(o || {})
                    } catch (i) {
                        o = ""
                    }
                    return d = {
                        location: r,
                        properties: o,
                        err: n
                    }, e
                }, e.get = function() {
                    var e = (d || {
                            err: {}
                        }).err,
                        t = e.name,
                        n = e.message,
                        r = e.stack;
                    if (!d) return "";
                    var i = d,
                        a = i.location,
                        s = i.properties,
                        u = navigator.userAgent,
                        c = ["version:1.3.8", "location:" + a, "properties:" + s, "user-agent:" + u, "name:" + t, "message:" + n, "stack:" + r],
                        l = c.join("|");
                    try {
                        return h + o(l)
                    } catch (f) {
                        return "" + h + l
                    }
                }, e
            }());
        t["default"] = f
    }, function(e, t, n) {
        var r, o = function() {
            function e(e, t) {
                if (!o[e]) {
                    o[e] = {};
                    for (var n = 0; n < e.length; n++) o[e][e.charAt(n)] = n
                }
                return o[e][t]
            }
            var t = String.fromCharCode,
                n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
                o = {},
                i = {
                    compressToBase64: function(e) {
                        if (null == e) return "";
                        var t = i._compress(e, 6, function(e) {
                            return n.charAt(e)
                        });
                        switch (t.length % 4) {
                            default:
                            case 0:
                                return t;
                            case 1:
                                return t + "===";
                            case 2:
                                return t + "==";
                            case 3:
                                return t + "="
                        }
                    },
                    decompressFromBase64: function(t) {
                        return null == t ? "" : "" == t ? null : i._decompress(t.length, 32, function(r) {
                            return e(n, t.charAt(r))
                        })
                    },
                    compressToUTF16: function(e) {
                        return null == e ? "" : i._compress(e, 15, function(e) {
                            return t(e + 32)
                        }) + " "
                    },
                    decompressFromUTF16: function(e) {
                        return null == e ? "" : "" == e ? null : i._decompress(e.length, 16384, function(t) {
                            return e.charCodeAt(t) - 32
                        })
                    },
                    compressToUint8Array: function(e) {
                        for (var t = i.compress(e), n = new Uint8Array(2 * t.length), r = 0, o = t.length; r < o; r++) {
                            var a = t.charCodeAt(r);
                            n[2 * r] = a >>> 8, n[2 * r + 1] = a % 256
                        }
                        return n
                    },
                    decompressFromUint8Array: function(e) {
                        if (null === e || e === undefined) return i.decompress(e);
                        for (var n = new Array(e.length / 2), r = 0, o = n.length; r < o; r++) n[r] = 256 * e[2 * r] + e[2 * r + 1];
                        var a = [];
                        return n.forEach(function(e) {
                            a.push(t(e))
                        }), i.decompress(a.join(""))
                    },
                    compressToEncodedURIComponent: function(e) {
                        return null == e ? "" : i._compress(e, 6, function(e) {
                            return r.charAt(e)
                        })
                    },
                    decompressFromEncodedURIComponent: function(t) {
                        return null == t ? "" : "" == t ? null : (t = t.replace(/ /g, "+"), i._decompress(t.length, 32, function(n) {
                            return e(r, t.charAt(n))
                        }))
                    },
                    compress: function(e) {
                        return i._compress(e, 16, function(e) {
                            return t(e)
                        })
                    },
                    _compress: function(e, t, n) {
                        if (null == e) return "";
                        var r, o, i, a = {},
                            s = {},
                            u = "",
                            c = "",
                            l = "",
                            d = 2,
                            h = 3,
                            f = 2,
                            p = [],
                            g = 0,
                            y = 0;
                        for (i = 0; i < e.length; i += 1)
                            if (u = e.charAt(i), Object.prototype.hasOwnProperty.call(a, u) || (a[u] = h++, s[u] = !0), c = l + u, Object.prototype.hasOwnProperty.call(a, c)) l = c;
                            else {
                                if (Object.prototype.hasOwnProperty.call(s, l)) {
                                    if (l.charCodeAt(0) < 256) {
                                        for (r = 0; r < f; r++) g <<= 1, y == t - 1 ? (y = 0, p.push(n(g)), g = 0) : y++;
                                        for (o = l.charCodeAt(0), r = 0; r < 8; r++) g = g << 1 | 1 & o, y == t - 1 ? (y = 0, p.push(n(g)), g = 0) : y++, o >>= 1
                                    } else {
                                        for (o = 1, r = 0; r < f; r++) g = g << 1 | o, y == t - 1 ? (y = 0, p.push(n(g)), g = 0) : y++, o = 0;
                                        for (o = l.charCodeAt(0), r = 0; r < 16; r++) g = g << 1 | 1 & o, y == t - 1 ? (y = 0, p.push(n(g)), g = 0) : y++, o >>= 1
                                    }
                                    d--, 0 == d && (d = Math.pow(2, f), f++), delete s[l]
                                } else
                                    for (o = a[l], r = 0; r < f; r++) g = g << 1 | 1 & o, y == t - 1 ? (y = 0, p.push(n(g)), g = 0) : y++, o >>= 1;
                                d--, 0 == d && (d = Math.pow(2, f), f++), a[c] = h++, l = String(u)
                            } if ("" !== l) {
                            if (Object.prototype.hasOwnProperty.call(s, l)) {
                                if (l.charCodeAt(0) < 256) {
                                    for (r = 0; r < f; r++) g <<= 1, y == t - 1 ? (y = 0, p.push(n(g)), g = 0) : y++;
                                    for (o = l.charCodeAt(0), r = 0; r < 8; r++) g = g << 1 | 1 & o, y == t - 1 ? (y = 0, p.push(n(g)), g = 0) : y++, o >>= 1
                                } else {
                                    for (o = 1, r = 0; r < f; r++) g = g << 1 | o, y == t - 1 ? (y = 0, p.push(n(g)), g = 0) : y++, o = 0;
                                    for (o = l.charCodeAt(0), r = 0; r < 16; r++) g = g << 1 | 1 & o, y == t - 1 ? (y = 0, p.push(n(g)), g = 0) : y++, o >>= 1
                                }
                                d--, 0 == d && (d = Math.pow(2, f), f++), delete s[l]
                            } else
                                for (o = a[l], r = 0; r < f; r++) g = g << 1 | 1 & o, y == t - 1 ? (y = 0, p.push(n(g)), g = 0) : y++, o >>= 1;
                            d--, 0 == d && (d = Math.pow(2, f), f++)
                        }
                        for (o = 2, r = 0; r < f; r++) g = g << 1 | 1 & o, y == t - 1 ? (y = 0, p.push(n(g)), g = 0) : y++, o >>= 1;
                        for (;;) {
                            if (g <<= 1, y == t - 1) {
                                p.push(n(g));
                                break
                            }
                            y++
                        }
                        return p.join("")
                    },
                    decompress: function(e) {
                        return null == e ? "" : "" == e ? null : i._decompress(e.length, 32768, function(t) {
                            return e.charCodeAt(t)
                        })
                    },
                    _decompress: function(e, n, r) {
                        var o, i, a, s, u, c, l, d = [],
                            h = 4,
                            f = 4,
                            p = 3,
                            g = "",
                            y = [],
                            _ = {
                                val: r(0),
                                position: n,
                                index: 1
                            };
                        for (o = 0; o < 3; o += 1) d[o] = o;
                        for (a = 0, u = Math.pow(2, 2), c = 1; c != u;) s = _.val & _.position, _.position >>= 1, 0 == _.position && (_.position = n, _.val = r(_.index++)), a |= (s > 0 ? 1 : 0) * c, c <<= 1;
                        switch (a) {
                            case 0:
                                for (a = 0, u = Math.pow(2, 8), c = 1; c != u;) s = _.val & _.position, _.position >>= 1, 0 == _.position && (_.position = n, _.val = r(_.index++)), a |= (s > 0 ? 1 : 0) * c, c <<= 1;
                                l = t(a);
                                break;
                            case 1:
                                for (a = 0, u = Math.pow(2, 16), c = 1; c != u;) s = _.val & _.position, _.position >>= 1, 0 == _.position && (_.position = n, _.val = r(_.index++)), a |= (s > 0 ? 1 : 0) * c, c <<= 1;
                                l = t(a);
                                break;
                            case 2:
                                return ""
                        }
                        for (d[3] = l, i = l, y.push(l);;) {
                            if (_.index > e) return "";
                            for (a = 0, u = Math.pow(2, p), c = 1; c != u;) s = _.val & _.position, _.position >>= 1, 0 == _.position && (_.position = n, _.val = r(_.index++)), a |= (s > 0 ? 1 : 0) * c, c <<= 1;
                            switch (l = a) {
                                case 0:
                                    for (a = 0, u = Math.pow(2, 8), c = 1; c != u;) s = _.val & _.position, _.position >>= 1, 0 == _.position && (_.position = n, _.val = r(_.index++)), a |= (s > 0 ? 1 : 0) * c, c <<= 1;
                                    d[f++] = t(a), l = f - 1, h--;
                                    break;
                                case 1:
                                    for (a = 0, u = Math.pow(2, 16), c = 1; c != u;) s = _.val & _.position, _.position >>= 1, 0 == _.position && (_.position = n, _.val = r(_.index++)), a |= (s > 0 ? 1 : 0) * c, c <<= 1;
                                    d[f++] = t(a), l = f - 1, h--;
                                    break;
                                case 2:
                                    return y.join("")
                            }
                            if (0 == h && (h = Math.pow(2, p), p++), d[l]) g = d[l];
                            else {
                                if (l !== f) return null;
                                g = i + i.charAt(0)
                            }
                            y.push(g), d[f++] = i + g.charAt(0), h--, i = g, 0 == h && (h = Math.pow(2, p), p++)
                        }
                    }
                };
            return i
        }();
        (r = function() {
            return o
        }.call(t, n, t, e)) !== undefined && (e.exports = r)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e.a,
                n = e.b,
                r = e.c;
            return 444 === t && 444 === n && 444 === r
        }

        function o(e) {
            return isNaN(parseFloat(e)) ? 444 : parseFloat(e.toFixed(6))
        }

        function i(e) {
            return a[e] || e
        }
        t.__esModule = !0, t.isWrong = r, t.refine = o, t.refineBfAttrName = i;
        var a = {
            user_agent: "a",
            language: "b",
            color_depth: "c",
            device_memory: "d",
            pixel_ratio: "e",
            hardware_concurrency: "f",
            resolution: "g",
            available_resolution: "h",
            timezone_offset: "i",
            session_storage: "j",
            local_storage: "k",
            indexed_db: "l",
            cpu_class: "m",
            navigator_platform: "n",
            do_not_track: "o",
            canvas: "p",
            webgl: "q",
            webgl_vendor: "r",
            adblock: "s",
            has_lied_languages: "t",
            has_lied_resolution: "u",
            has_lied_os: "v",
            has_lied_browser: "w",
            touch_support: "x",
            js_fonts: "y",
            open_database: "z",
            regular_plugins: "aa",
            add_behavior: "ab",
            high_entropy_architecture: "aca",
            high_entropy_model: "acb",
            high_entropy_bitness: "acc",
            high_entropy_platform: "acd",
            high_entropy_platformVersion: "ace",
            high_entropy_uaFullVersion: "acf",
            high_entropy_fullVersionList: "acg",
            high_entropy_wow64: "ach",
            high_entropy_mobile: "aci",
            app_version: "ad",
            plugin_prototype: "ae",
            mime_prototype: "af",
            languages: "ag",
            web_driver: "ah",
            connection_rtt: "ai",
            outer: "aj",
            permission_state: "ak",
            function_error: "al",
            orientation: "am",
            cdc: "an"
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(15),
            o = n(12),
            i = n(41),
            a = n(5),
            s = n(24),
            u = n(57),
            c = n(29),
            l = n(64),
            d = n(10)("iterator"),
            h = !([].keys && "next" in [].keys()),
            f = function() {
                return this
            };
        e.exports = function(e, t, n, p, g, y, _) {
            u(n, t, p);
            var m, v, w, b = function(e) {
                    if (!h && e in x) return x[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this, e)
                    }
                },
                E = t + " Iterator",
                S = "values" == g,
                T = !1,
                x = e.prototype,
                M = x[d] || x["@@iterator"] || g && x[g],
                A = M || b(g),
                C = g ? S ? b("entries") : A : undefined,
                P = "Array" == t ? x.entries || M : M;
            if (P && (w = l(P.call(new e))) !== Object.prototype && w.next && (c(w, E, !0), r || "function" == typeof w[d] || a(w, d, f)), S && M && "values" !== M.name && (T = !0, A = function() {
                    return M.call(this)
                }), r && !_ || !h && !T && x[d] || a(x, d, A), s[t] = A, s[E] = f, g)
                if (m = {
                        values: S ? A : b("values"),
                        keys: y ? A : b("keys"),
                        entries: C
                    }, _)
                    for (v in m) v in x || i(x, v, m[v]);
                else o(o.P + o.F * (h || T), t, m);
            return m
        }
    }, function(e, t, n) {
        var r = n(56);
        e.exports = function(e, t, n) {
            if (r(e), t === undefined) return e;
            switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return e.call(t, n, r, o)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    }, function(e, t, n) {
        e.exports = !n(8) && !n(14)(function() {
            return 7 != Object.defineProperty(n(40)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t, n) {
        var r = n(7),
            o = n(1).document,
            i = r(o) && r(o.createElement);
        e.exports = function(e) {
            return i ? o.createElement(e) : {}
        }
    }, function(e, t, n) {
        e.exports = n(5)
    }, function(e, t, n) {
        var r = n(3),
            o = n(9),
            i = n(60)(!1),
            a = n(26)("IE_PROTO");
        e.exports = function(e, t) {
            var n, s = o(e),
                u = 0,
                c = [];
            for (n in s) n != a && r(s, n) && c.push(n);
            for (; t.length > u;) r(s, n = t[u++]) && (~i(c, n) || c.push(n));
            return c
        }
    }, function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    }, function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function(e, t, n) {
        var r = n(42),
            o = n(28).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) {
            return r(e, o)
        }
    }, function(e, t, n) {
        var r = n(33),
            o = n(16),
            i = n(9),
            a = n(23),
            s = n(3),
            u = n(39),
            c = Object.getOwnPropertyDescriptor;
        t.f = n(8) ? c : function(e, t) {
            if (e = i(e), t = a(t, !0), u) try {
                return c(e, t)
            } catch (n) {}
            if (s(e, t)) return o(!r.f.call(e, t), e[t])
        }
    }, function(e, t) {
        var n = {
            utf8: {
                stringToBytes: function(e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                    return t
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                    return t.join("")
                }
            }
        };
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(99),
            i = r(o),
            a = n(0),
            s = r(a),
            u = {},
            c = function() {
                function e() {
                    (0, s["default"])(this, e)
                }
                return e.startFunction = function(e) {
                    u[e] = {}, u[e].start = new Date, u[e].end = 0, u[e].function_name = e, u[e].duration = 0
                }, e.endFunction = function(e) {
                    u[e].end = new Date, u[e].duration = u[e].end - u[e].start
                }, e.getTrace = function() {
                    var e = "",
                        t = (0, i["default"])(u).map(function(e) {
                            return u[e]
                        });
                    return u = t.sort(function(e, t) {
                        return new Date(e.start) - new Date(t.start)
                    }), u.forEach(function(t) {
                        0 === t.end ? e += t.function_name + " is proceeding (" + (new Date - t.start) + "ms)\n" : e += t.function_name + " (" + t.duration + "ms)\n"
                    }), e
                }, e.flush = function() {
                    u = {}
                }, e
            }();
        t["default"] = c
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = null,
                r = null,
                o = null;
            if (!e) return "";
            try {
                o = s.stringify(e)
            } catch (a) {
                return a.uuid = e.a, Error.set("Compress JSON Stringify nCaptcha", a).get()
            }
            try {
                r = i["default"].compressToEncodedURIComponent(o)
            } catch (a) {
                return a.uuid = e.a, Error.set("Compress", a).get()
            }
            if ("old" !== t) return r;
            try {
                n = s.stringify({
                    uuid: e.a,
                    encData: r
                })
            } catch (a) {
                return a.uuid = e.a, Error.set("Compress JSON Stringify encNCaptcha", a).get()
            }
            return n
        }
        t.__esModule = !0, t["default"] = r;
        var o = n(35),
            i = function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }(o),
            a = n(19),
            s = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }(a)
    }, function(e, t, n) {
        e.exports = n(51)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o() {
            var e = window.sofa;
            return e && e.Koop === v && w && (window.sofa = w), e || {
                __esModule: !0,
                VERSION: b,
                Koop: v,
                noConflict: o
            }
        }
        t.__esModule = !0, t.Koop = t.VERSION = undefined;
        var i = n(20),
            a = r(i),
            s = n(0),
            u = r(s);
        t.noConflict = o;
        var c = n(34),
            l = r(c),
            d = n(79),
            h = n(108),
            f = r(h),
            p = n(4),
            g = n(48),
            y = r(g),
            _ = n(49),
            m = r(_),
            v = function() {
                function e() {
                    var t = this,
                        n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    (0, u["default"])(this, e), (0, p.runErrorSafe)(function() {
                        t._prop = {
                            keyboard: n.keyboard || [],
                            modeProperties: (0, p.objectAssign)({
                                mode: 1,
                                url: "",
                                chunkSize: 1800,
                                timeout: 1500,
                                bfTimeout: 500
                            }, n.modeProperties || {})
                        }, t._data = new d.CaptchaData(t._prop), t.timer = null
                    }, {
                        location: "NCaptcha Constructor",
                        properties: n
                    })
                }
                return e.prototype.f = function(e, t) {
                    var n = this,
                        r = this._prop.modeProperties.mode,
                        o = this._defineDefaultOptions(r),
                        i = t;
                    return this.timer = setTimeout(function() {
                        n._data.getBFP() || i((0, m["default"])({
                            a: n._data._uuid,
                            userAgent: navigator.userAgent,
                            url: window.location.href,
                            trace: y["default"].getTrace()
                        }, "old"))
                    }, 4e3), "function" == typeof e && (i = e), "object" === (void 0 === e ? "undefined" : (0, a["default"])(e)) && (o = (0, p.objectAssign)(o, e)), 2 === r ? this._handleMode2(o, i) : 4 === r ? this._handleMode4(o, i) : this._handleMode1(o)
                }, e.prototype._defineDefaultOptions = function(e) {
                    return {
                        compressMode: 1 === e || 4 === e ? "old" : "new"
                    }
                }, e.prototype._handleMode1 = function(e) {
                    var t = this;
                    return clearTimeout(this.timer), (0, p.runErrorSafe)(function() {
                        return l["default"].get() || t._data.get(e).body
                    }, {
                        location: "mode1 f",
                        properties: this._prop
                    })
                }, e.prototype._handleMode2 = function(e, t) {
                    this._send("mode2 f", e, t)
                }, e.prototype._handleMode4 = function(e, t) {
                    var n = this;
                    if (!this._data.getBFP()) return void this._afterBFPComplete(function() {
                        n._handleMode4(e, t)
                    });
                    clearTimeout(this.timer);
                    var r = (0, p.runErrorSafe)(function() {
                        return l["default"].get() || n._data.get(e).body
                    }, {
                        location: "mode4 f",
                        properties: this._prop
                    });
                    t(r || "mode4 f result is empty")
                }, e.prototype._afterBFPComplete = function(e) {
                    var t = this,
                        n = this._data,
                        r = function o() {
                            n.off("bfpTimeout", o), n.off("bfpLoad", o), clearTimeout(t.timer), e()
                        };
                    n.on({
                        bfpTimeout: r,
                        bfpLoad: r
                    })
                }, e.prototype._send = function(e, t, n) {
                    var r = this;
                    if (!this._data.getBFP()) return void this._afterBFPComplete(function() {
                        r._send(e, t, n)
                    });
                    clearTimeout(this.timer);
                    var o = (0, p.runErrorSafe)(function() {
                        var e = l["default"].get() || r._data.get(t);
                        return (0, f["default"])(e, r._prop.modeProperties, n)
                    }, {
                        location: e,
                        properties: this._prop
                    });
                    o && n(o)
                }, e.prototype.addKeyboardWatch = function(e) {
                    var t = this;
                    (0, p.runErrorSafe)(function() {
                        return t._data.addKeyboardWatch(e)
                    }, {
                        location: "add keyboard watch",
                        properties: this._prop
                    })
                }, e.prototype.removeKeyboardWatch = function(e) {
                    var t = this;
                    (0, p.runErrorSafe)(function() {
                        return t._data.removeKeyboardWatch(e)
                    }, {
                        location: "remove keyboard watch",
                        properties: this._prop
                    })
                }, e.prototype.stackTraceFlush = function() {
                    y["default"].flush()
                }, e
            }(),
            w = window.sofa,
            b = t.VERSION = "1.3.8";
        t.Koop = v
    }, function(e, t, n) {
        e.exports = {
            "default": n(53),
            __esModule: !0
        }
    }, function(e, t, n) {
        n(54), n(65), e.exports = n(31).f("iterator")
    }, function(e, t, n) {
        "use strict";
        var r = n(55)(!0);
        n(37)(String, "String", function(e) {
            this._t = String(e), this._i = 0
        }, function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: undefined,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        })
    }, function(e, t, n) {
        var r = n(21),
            o = n(22);
        e.exports = function(e) {
            return function(t, n) {
                var i, a, s = String(o(t)),
                    u = r(n),
                    c = s.length;
                return u < 0 || u >= c ? e ? "" : undefined : (i = s.charCodeAt(u), i < 55296 || i > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? s.charAt(u) : i : e ? s.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536)
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(25),
            o = n(16),
            i = n(29),
            a = {};
        n(5)(a, n(10)("iterator"), function() {
            return this
        }), e.exports = function(e, t, n) {
            e.prototype = r(a, {
                next: o(1, n)
            }), i(e, t + " Iterator")
        }
    }, function(e, t, n) {
        var r = n(6),
            o = n(13),
            i = n(17);
        e.exports = n(8) ? Object.defineProperties : function(e, t) {
            o(e);
            for (var n, a = i(t), s = a.length, u = 0; s > u;) r.f(e, n = a[u++], t[n]);
            return e
        }
    }, function(e, t, n) {
        var r = n(43);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    }, function(e, t, n) {
        var r = n(9),
            o = n(61),
            i = n(62);
        e.exports = function(e) {
            return function(t, n, a) {
                var s, u = r(t),
                    c = o(u.length),
                    l = i(a, c);
                if (e && n != n) {
                    for (; c > l;)
                        if ((s = u[l++]) != s) return !0
                } else
                    for (; c > l; l++)
                        if ((e || l in u) && u[l] === n) return e || l || 0;
                return !e && -1
            }
        }
    }, function(e, t, n) {
        var r = n(21),
            o = Math.min;
        e.exports = function(e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0
        }
    }, function(e, t, n) {
        var r = n(21),
            o = Math.max,
            i = Math.min;
        e.exports = function(e, t) {
            return e = r(e), e < 0 ? o(e + t, 0) : i(e, t)
        }
    }, function(e, t, n) {
        var r = n(1).document;
        e.exports = r && r.documentElement
    }, function(e, t, n) {
        var r = n(3),
            o = n(30),
            i = n(26)("IE_PROTO"),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    }, function(e, t, n) {
        n(66);
        for (var r = n(1), o = n(5), i = n(24), a = n(10)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
            var c = s[u],
                l = r[c],
                d = l && l.prototype;
            d && !d[a] && o(d, a, c), i[c] = i.Array
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(67),
            o = n(68),
            i = n(24),
            a = n(9);
        e.exports = n(37)(Array, "Array", function(e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }, function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = undefined, o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function(e, t) {
        e.exports = function() {}
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    }, function(e, t, n) {
        e.exports = {
            "default": n(70),
            __esModule: !0
        }
    }, function(e, t, n) {
        n(71), n(76), n(77), n(78), e.exports = n(2).Symbol
    }, function(e, t, n) {
        "use strict";
        var r = n(1),
            o = n(3),
            i = n(8),
            a = n(12),
            s = n(41),
            u = n(72).KEY,
            c = n(14),
            l = n(27),
            d = n(29),
            h = n(18),
            f = n(10),
            p = n(31),
            g = n(32),
            y = n(73),
            _ = n(74),
            m = n(13),
            v = n(7),
            w = n(30),
            b = n(9),
            E = n(23),
            S = n(16),
            T = n(25),
            x = n(75),
            M = n(46),
            A = n(44),
            C = n(6),
            P = n(17),
            O = M.f,
            F = C.f,
            L = x.f,
            I = r.Symbol,
            B = r.JSON,
            R = B && B.stringify,
            k = f("_hidden"),
            D = f("toPrimitive"),
            N = {}.propertyIsEnumerable,
            H = l("symbol-registry"),
            K = l("symbols"),
            G = l("op-symbols"),
            V = Object.prototype,
            j = "function" == typeof I && !!A.f,
            W = r.QObject,
            U = !W || !W.prototype || !W.prototype.findChild,
            X = i && c(function() {
                return 7 != T(F({}, "a", {
                    get: function() {
                        return F(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(e, t, n) {
                var r = O(V, t);
                r && delete V[t], F(e, t, n), r && e !== V && F(V, t, r)
            } : F,
            z = function(e) {
                var t = K[e] = T(I.prototype);
                return t._k = e, t
            },
            Y = j && "symbol" == typeof I.iterator ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                return e instanceof I
            },
            J = function(e, t, n) {
                return e === V && J(G, t, n), m(e), t = E(t, !0), m(n), o(K, t) ? (n.enumerable ? (o(e, k) && e[k][t] && (e[k][t] = !1), n = T(n, {
                    enumerable: S(0, !1)
                })) : (o(e, k) || F(e, k, S(1, {})), e[k][t] = !0), X(e, t, n)) : F(e, t, n)
            },
            Z = function(e, t) {
                m(e);
                for (var n, r = y(t = b(t)), o = 0, i = r.length; i > o;) J(e, n = r[o++], t[n]);
                return e
            },
            q = function(e, t) {
                return t === undefined ? T(e) : Z(T(e), t)
            },
            Q = function(e) {
                var t = N.call(this, e = E(e, !0));
                return !(this === V && o(K, e) && !o(G, e)) && (!(t || !o(this, e) || !o(K, e) || o(this, k) && this[k][e]) || t)
            },
            $ = function(e, t) {
                if (e = b(e), t = E(t, !0), e !== V || !o(K, t) || o(G, t)) {
                    var n = O(e, t);
                    return !n || !o(K, t) || o(e, k) && e[k][t] || (n.enumerable = !0), n
                }
            },
            ee = function(e) {
                for (var t, n = L(b(e)), r = [], i = 0; n.length > i;) o(K, t = n[i++]) || t == k || t == u || r.push(t);
                return r
            },
            te = function(e) {
                for (var t, n = e === V, r = L(n ? G : b(e)), i = [], a = 0; r.length > a;) !o(K, t = r[a++]) || n && !o(V, t) || i.push(K[t]);
                return i
            };
        j || (I = function() {
            if (this instanceof I) throw TypeError("Symbol is not a constructor!");
            var e = h(arguments.length > 0 ? arguments[0] : undefined),
                t = function(n) {
                    this === V && t.call(G, n), o(this, k) && o(this[k], e) && (this[k][e] = !1), X(this, e, S(1, n))
                };
            return i && U && X(V, e, {
                configurable: !0,
                set: t
            }), z(e)
        }, s(I.prototype, "toString", function() {
            return this._k
        }), M.f = $, C.f = J, n(45).f = x.f = ee, n(33).f = Q, A.f = te, i && !n(15) && s(V, "propertyIsEnumerable", Q, !0), p.f = function(e) {
            return z(f(e))
        }), a(a.G + a.W + a.F * !j, {
            Symbol: I
        });
        for (var ne = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; ne.length > re;) f(ne[re++]);
        for (var oe = P(f.store), ie = 0; oe.length > ie;) g(oe[ie++]);
        a(a.S + a.F * !j, "Symbol", {
            "for": function(e) {
                return o(H, e += "") ? H[e] : H[e] = I(e)
            },
            keyFor: function(e) {
                if (!Y(e)) throw TypeError(e + " is not a symbol!");
                for (var t in H)
                    if (H[t] === e) return t
            },
            useSetter: function() {
                U = !0
            },
            useSimple: function() {
                U = !1
            }
        }), a(a.S + a.F * !j, "Object", {
            create: q,
            defineProperty: J,
            defineProperties: Z,
            getOwnPropertyDescriptor: $,
            getOwnPropertyNames: ee,
            getOwnPropertySymbols: te
        });
        var ae = c(function() {
            A.f(1)
        });
        a(a.S + a.F * ae, "Object", {
            getOwnPropertySymbols: function(e) {
                return A.f(w(e))
            }
        }), B && a(a.S + a.F * (!j || c(function() {
            var e = I();
            return "[null]" != R([e]) || "{}" != R({
                a: e
            }) || "{}" != R(Object(e))
        })), "JSON", {
            stringify: function(e) {
                for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
                if (n = t = r[1], (v(t) || e !== undefined) && !Y(e)) return _(t) || (t = function(e, t) {
                    if ("function" == typeof n && (t = n.call(this, e, t)), !Y(t)) return t
                }), r[1] = t, R.apply(B, r)
            }
        }), I.prototype[D] || n(5)(I.prototype, D, I.prototype.valueOf), d(I, "Symbol"), d(Math, "Math", !0), d(r.JSON, "JSON", !0)
    }, function(e, t, n) {
        var r = n(18)("meta"),
            o = n(7),
            i = n(3),
            a = n(6).f,
            s = 0,
            u = Object.isExtensible || function() {
                return !0
            },
            c = !n(14)(function() {
                return u(Object.preventExtensions({}))
            }),
            l = function(e) {
                a(e, r, {
                    value: {
                        i: "O" + ++s,
                        w: {}
                    }
                })
            },
            d = function(e, t) {
                if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, r)) {
                    if (!u(e)) return "F";
                    if (!t) return "E";
                    l(e)
                }
                return e[r].i
            },
            h = function(e, t) {
                if (!i(e, r)) {
                    if (!u(e)) return !0;
                    if (!t) return !1;
                    l(e)
                }
                return e[r].w
            },
            f = function(e) {
                return c && p.NEED && u(e) && !i(e, r) && l(e), e
            },
            p = e.exports = {
                KEY: r,
                NEED: !1,
                fastKey: d,
                getWeak: h,
                onFreeze: f
            }
    }, function(e, t, n) {
        var r = n(17),
            o = n(44),
            i = n(33);
        e.exports = function(e) {
            var t = r(e),
                n = o.f;
            if (n)
                for (var a, s = n(e), u = i.f, c = 0; s.length > c;) u.call(e, a = s[c++]) && t.push(a);
            return t
        }
    }, function(e, t, n) {
        var r = n(43);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    }, function(e, t, n) {
        var r = n(9),
            o = n(45).f,
            i = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            s = function(e) {
                try {
                    return o(e)
                } catch (t) {
                    return a.slice()
                }
            };
        e.exports.f = function(e) {
            return a && "[object Window]" == i.call(e) ? s(e) : o(r(e))
        }
    }, function(e, t) {}, function(e, t, n) {
        n(32)("asyncIterator")
    }, function(e, t, n) {
        n(32)("observable")
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0, t.CaptchaData = undefined;
        var o = n(0),
            i = r(o),
            a = n(80),
            s = r(a),
            u = n(81),
            c = r(u),
            l = n(89),
            d = r(l),
            h = n(93),
            f = r(h),
            p = n(96),
            g = r(p),
            y = n(97),
            _ = n(103),
            m = r(_),
            v = n(104),
            w = r(v),
            b = n(105),
            E = r(b),
            S = n(106),
            T = r(S),
            x = n(107),
            M = r(x),
            A = n(36),
            C = n(49),
            P = r(C),
            O = n(4),
            F = n(11),
            L = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }(F);
        t.CaptchaData = function(e) {
            function t(n) {
                (0, i["default"])(this, t);
                var r = (0, s["default"])(this, e.call(this));
                return r._prop = n, r._uuid = (0, d["default"])(), r._tseq = 0, r._keyboard = new w["default"](n.keyboard), r._deviceOrientation = new E["default"], r._deviceMotion = new T["default"], r._mouse = new M["default"], 1 === r._prop.modeProperties.mode ? r._requestBFP() : r._prepare(), r
            }
            return (0, c["default"])(t, e), t.prototype.getBFP = function() {
                return this._fpHash ? {
                    hash: this._fpHash,
                    component: this._fpComponent,
                    duration: this._fpDuration
                } : null
            }, t.prototype._prepare = function() {
                var e = this;
                "complete" === document.readyState ? this._loadBFP() : (0, O.addEventListener)(window, "load", function() {
                    e._loadBFP()
                })
            }, t.prototype._onLoadBFP = function(e, t, n) {
                this._fpHash = e, this._fpComponent = this._refineComponents(t), this._fpDuration = n, window.clearTimeout(this._timeoutTimer), delete this._timeoutTimer, delete this._loadTimer, this.trigger("bfpLoad")
            }, t.prototype._requestBFP = function() {
                var e = this,
                    t = this._prop.modeProperties.bfTimeout || 500;
                this._timeoutTimer = window.setTimeout(function() {
                    e._fpHash || e.trigger("bfpTimeout")
                }, t), (0, y.getBFP)(this._onLoadBFP.bind(this))
            }, t.prototype._loadBFP = function() {
                var e = this;
                this._loadTimer || this._fpHash || (this._loadTimer = window.setTimeout(function() {
                    (0, O.runErrorSafe)(e._requestBFP.bind(e), {
                        location: "Fingerprint2 Constructor",
                        properties: e._prop
                    })
                }, 10))
            }, t.prototype._getTransactionId = function() {
                return this._uuid + "-" + this._tseq++
            }, t.prototype._refineComponents = function(e) {
                var t = {};
                return L.forEach(e, function(e) {
                    "canvas" !== e.key && "webgl" !== e.key || !e.value || (e.value = (0, f["default"])(e.value)), t[(0, A.refineBfAttrName)(e.key)] = e.value
                }), t
            }, t.prototype.get = function() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    t = e.compressMode || "new",
                    n = this._getTransactionId(),
                    r = this._keyboard.get({
                        filter: e.keyboardLogs
                    }),
                    o = {
                        a: n,
                        b: "1.3.8",
                        c: (0, m["default"])(),
                        d: r,
                        e: this._deviceOrientation.get(),
                        f: this._deviceMotion.get(),
                        g: this._mouse.get(),
                        j: this._fpDuration || y.NOT_YET,
                        h: this._fpHash || "",
                        i: this._fpComponent || []
                    };
                return {
                    type: "c",
                    uuid: n,
                    body: (0, P["default"])(o, t)
                }
            }, t.prototype.addKeyboardWatch = function(e) {
                this._keyboard.addWatch(e)
            }, t.prototype.removeKeyboardWatch = function(e) {
                this._keyboard.removeWatch(e)
            }, t
        }(g["default"])
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(20),
            o = function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }(r);
        t["default"] = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : (0, o["default"])(t)) && "function" != typeof t ? e : t
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(82),
            i = r(o),
            a = n(86),
            s = r(a),
            u = n(20),
            c = r(u);
        t["default"] = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, c["default"])(t)));
            e.prototype = (0, s["default"])(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (i["default"] ? (0, i["default"])(e, t) : e.__proto__ = t)
        }
    }, function(e, t, n) {
        e.exports = {
            "default": n(83),
            __esModule: !0
        }
    }, function(e, t, n) {
        n(84), e.exports = n(2).Object.setPrototypeOf
    }, function(e, t, n) {
        var r = n(12);
        r(r.S, "Object", {
            setPrototypeOf: n(85).set
        })
    }, function(e, t, n) {
        var r = n(7),
            o = n(13),
            i = function(e, t) {
                if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
            };
        e.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
                try {
                    r = n(38)(Function.call, n(46).f(Object.prototype, "__proto__").set, 2), r(e, []), t = !(e instanceof Array)
                } catch (o) {
                    t = !0
                }
                return function(e, n) {
                    return i(e, n), t ? e.__proto__ = n : r(e, n), e
                }
            }({}, !1) : undefined),
            check: i
        }
    }, function(e, t, n) {
        e.exports = {
            "default": n(87),
            __esModule: !0
        }
    }, function(e, t, n) {
        n(88);
        var r = n(2).Object;
        e.exports = function(e, t) {
            return r.create(e, t)
        }
    }, function(e, t, n) {
        var r = n(12);
        r(r.S, "Object", {
            create: n(25)
        })
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = t && n || 0;
            "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null), e = e || {};
            var a = e.random || (e.rng || o)();
            if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
                for (var s = 0; s < 16; ++s) t[r + s] = a[s];
            return t || i(a)
        }
        var o = n(90),
            i = n(92);
        e.exports = r
    }, function(e, t, n) {
        (function(t) {
            var n, r = t.crypto || t.msCrypto;
            if (r && r.getRandomValues) {
                var o = new Uint8Array(16);
                n = function() {
                    return r.getRandomValues(o), o
                }
            }
            if (!n) {
                var i = new Array(16);
                n = function() {
                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
                    return i
                }
            }
            e.exports = n
        }).call(t, n(91))
    }, function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (r) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t) {
        function n(e, t) {
            var n = t || 0,
                o = r;
            return o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]]
        }
        for (var r = [], o = 0; o < 256; ++o) r[o] = (o + 256).toString(16).substr(1);
        e.exports = n
    }, function(e, t, n) {
        ! function() {
            var t = n(94),
                r = n(47).utf8,
                o = n(95),
                i = n(47).bin,
                a = function(e, n) {
                    e.constructor == String ? e = n && "binary" === n.encoding ? i.stringToBytes(e) : r.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                    for (var s = t.bytesToWords(e), u = 8 * e.length, c = 1732584193, l = -271733879, d = -1732584194, h = 271733878, f = 0; f < s.length; f++) s[f] = 16711935 & (s[f] << 8 | s[f] >>> 24) | 4278255360 & (s[f] << 24 | s[f] >>> 8);
                    s[u >>> 5] |= 128 << u % 32, s[14 + (u + 64 >>> 9 << 4)] = u;
                    for (var p = a._ff, g = a._gg, y = a._hh, _ = a._ii, f = 0; f < s.length; f += 16) {
                        var m = c,
                            v = l,
                            w = d,
                            b = h;
                        c = p(c, l, d, h, s[f + 0], 7, -680876936), h = p(h, c, l, d, s[f + 1], 12, -389564586), d = p(d, h, c, l, s[f + 2], 17, 606105819), l = p(l, d, h, c, s[f + 3], 22, -1044525330), c = p(c, l, d, h, s[f + 4], 7, -176418897), h = p(h, c, l, d, s[f + 5], 12, 1200080426), d = p(d, h, c, l, s[f + 6], 17, -1473231341), l = p(l, d, h, c, s[f + 7], 22, -45705983), c = p(c, l, d, h, s[f + 8], 7, 1770035416), h = p(h, c, l, d, s[f + 9], 12, -1958414417), d = p(d, h, c, l, s[f + 10], 17, -42063), l = p(l, d, h, c, s[f + 11], 22, -1990404162), c = p(c, l, d, h, s[f + 12], 7, 1804603682), h = p(h, c, l, d, s[f + 13], 12, -40341101), d = p(d, h, c, l, s[f + 14], 17, -1502002290), l = p(l, d, h, c, s[f + 15], 22, 1236535329), c = g(c, l, d, h, s[f + 1], 5, -165796510), h = g(h, c, l, d, s[f + 6], 9, -1069501632), d = g(d, h, c, l, s[f + 11], 14, 643717713), l = g(l, d, h, c, s[f + 0], 20, -373897302), c = g(c, l, d, h, s[f + 5], 5, -701558691), h = g(h, c, l, d, s[f + 10], 9, 38016083), d = g(d, h, c, l, s[f + 15], 14, -660478335), l = g(l, d, h, c, s[f + 4], 20, -405537848), c = g(c, l, d, h, s[f + 9], 5, 568446438), h = g(h, c, l, d, s[f + 14], 9, -1019803690), d = g(d, h, c, l, s[f + 3], 14, -187363961), l = g(l, d, h, c, s[f + 8], 20, 1163531501), c = g(c, l, d, h, s[f + 13], 5, -1444681467), h = g(h, c, l, d, s[f + 2], 9, -51403784), d = g(d, h, c, l, s[f + 7], 14, 1735328473), l = g(l, d, h, c, s[f + 12], 20, -1926607734), c = y(c, l, d, h, s[f + 5], 4, -378558), h = y(h, c, l, d, s[f + 8], 11, -2022574463), d = y(d, h, c, l, s[f + 11], 16, 1839030562), l = y(l, d, h, c, s[f + 14], 23, -35309556), c = y(c, l, d, h, s[f + 1], 4, -1530992060), h = y(h, c, l, d, s[f + 4], 11, 1272893353), d = y(d, h, c, l, s[f + 7], 16, -155497632), l = y(l, d, h, c, s[f + 10], 23, -1094730640), c = y(c, l, d, h, s[f + 13], 4, 681279174), h = y(h, c, l, d, s[f + 0], 11, -358537222), d = y(d, h, c, l, s[f + 3], 16, -722521979), l = y(l, d, h, c, s[f + 6], 23, 76029189), c = y(c, l, d, h, s[f + 9], 4, -640364487), h = y(h, c, l, d, s[f + 12], 11, -421815835), d = y(d, h, c, l, s[f + 15], 16, 530742520), l = y(l, d, h, c, s[f + 2], 23, -995338651), c = _(c, l, d, h, s[f + 0], 6, -198630844), h = _(h, c, l, d, s[f + 7], 10, 1126891415), d = _(d, h, c, l, s[f + 14], 15, -1416354905), l = _(l, d, h, c, s[f + 5], 21, -57434055), c = _(c, l, d, h, s[f + 12], 6, 1700485571), h = _(h, c, l, d, s[f + 3], 10, -1894986606), d = _(d, h, c, l, s[f + 10], 15, -1051523), l = _(l, d, h, c, s[f + 1], 21, -2054922799), c = _(c, l, d, h, s[f + 8], 6, 1873313359), h = _(h, c, l, d, s[f + 15], 10, -30611744), d = _(d, h, c, l, s[f + 6], 15, -1560198380), l = _(l, d, h, c, s[f + 13], 21, 1309151649), c = _(c, l, d, h, s[f + 4], 6, -145523070), h = _(h, c, l, d, s[f + 11], 10, -1120210379), d = _(d, h, c, l, s[f + 2], 15, 718787259), l = _(l, d, h, c, s[f + 9], 21, -343485551), c = c + m >>> 0, l = l + v >>> 0, d = d + w >>> 0, h = h + b >>> 0
                    }
                    return t.endian([c, l, d, h])
                };
            a._ff = function(e, t, n, r, o, i, a) {
                var s = e + (t & n | ~t & r) + (o >>> 0) + a;
                return (s << i | s >>> 32 - i) + t
            }, a._gg = function(e, t, n, r, o, i, a) {
                var s = e + (t & r | n & ~r) + (o >>> 0) + a;
                return (s << i | s >>> 32 - i) + t
            }, a._hh = function(e, t, n, r, o, i, a) {
                var s = e + (t ^ n ^ r) + (o >>> 0) + a;
                return (s << i | s >>> 32 - i) + t
            }, a._ii = function(e, t, n, r, o, i, a) {
                var s = e + (n ^ (t | ~r)) + (o >>> 0) + a;
                return (s << i | s >>> 32 - i) + t
            }, a._blocksize = 16, a._digestsize = 16, e.exports = function(e, n) {
                if (e === undefined || null === e) throw new Error("Illegal argument " + e);
                var r = t.wordsToBytes(a(e, n));
                return n && n.asBytes ? r : n && n.asString ? i.bytesToString(r) : t.bytesToHex(r)
            }
        }()
    }, function(e, t) {
        ! function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                n = {
                    rotl: function(e, t) {
                        return e << t | e >>> 32 - t
                    },
                    rotr: function(e, t) {
                        return e << 32 - t | e >>> t
                    },
                    endian: function(e) {
                        if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                        for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                        return e
                    },
                    randomBytes: function(e) {
                        for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                        return t
                    },
                    bytesToWords: function(e) {
                        for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                        return t
                    },
                    wordsToBytes: function(e) {
                        for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                        return t
                    },
                    bytesToHex: function(e) {
                        for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                        return t.join("")
                    },
                    hexToBytes: function(e) {
                        for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                        return t
                    },
                    bytesToBase64: function(e) {
                        for (var n = [], r = 0; r < e.length; r += 3)
                            for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], i = 0; i < 4; i++) 8 * r + 6 * i <= 8 * e.length ? n.push(t.charAt(o >>> 6 * (3 - i) & 63)) : n.push("=");
                        return n.join("")
                    },
                    base64ToBytes: function(e) {
                        e = e.replace(/[^A-Z0-9+\/]/gi, "");
                        for (var n = [], r = 0, o = 0; r < e.length; o = ++r % 4) 0 != o && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(r)) >>> 6 - 2 * o);
                        return n
                    }
                };
            e.exports = n
        }()
    }, function(e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }

        function r(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
        }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        e.exports = function(e) {
            return null != e && (n(e) || r(e) || !!e._isBuffer)
        }
    }, function(e, t, n) {
        "use strict";
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.

        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.

        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
        function r(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length) return {
                next: function() {
                    return e && r >= e.length && (e = void 0), {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function o(e) {
            return void 0 === e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {
                this.options = {}, this._eventHandler = {}
            }
            var t = e.prototype;
            return t.trigger = function(e) {
                for (var t = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                var o = this._eventHandler[e] || [];
                if (!(o.length > 0)) return !0;
                var i = n[0] || {},
                    a = n.slice(1);
                o = o.concat();
                var s = !1;
                i.eventType = e, i.stop = function() {
                    s = !0
                }, i.currentTarget = this;
                var u = [i];
                return a.length >= 1 && (u = u.concat(a)), o.forEach(function(e) {
                    e.apply(t, u)
                }), !s
            }, t.once = function(e, t) {
                var n = this;
                if ("object" == typeof e && o(t)) {
                    var r = e;
                    for (var i in r) this.once(i, r[i]);
                    return this
                }
                if ("string" == typeof e && "function" == typeof t) {
                    var a = function() {
                        for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                        t.apply(n, r), n.off(e, a)
                    };
                    this.on(e, a)
                }
                return this
            }, t.hasOn = function(e) {
                return !!this._eventHandler[e]
            }, t.on = function(e, t) {
                if ("object" == typeof e && o(t)) {
                    var n = e;
                    for (var r in n) this.on(r, n[r]);
                    return this
                }
                if ("string" == typeof e && "function" == typeof t) {
                    var i = this._eventHandler[e];
                    o(i) && (this._eventHandler[e] = [], i = this._eventHandler[e]), i.push(t)
                }
                return this
            }, t.off = function(e, t) {
                var n, i;
                if (o(e)) return this._eventHandler = {}, this;
                if (o(t)) {
                    if ("string" == typeof e) return delete this._eventHandler[e], this;
                    var a = e;
                    for (var s in a) this.off(s, a[s]);
                    return this
                }
                var u = this._eventHandler[e];
                if (u) {
                    var c = 0;
                    try {
                        for (var l = r(u), d = l.next(); !d.done; d = l.next()) {
                            if (d.value === t) {
                                u.splice(c, 1);
                                break
                            }
                            c++
                        }
                    } catch (h) {
                        n = {
                            error: h
                        }
                    } finally {
                        try {
                            d && !d.done && (i = l["return"]) && i.call(l)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
                return this
            }, e.VERSION = "2.2.2", e
        }();
        t["default"] = i
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o() {
            d = !1, h.length = 0, h = [], t.registry = g = {}, window.__sofabfp_registry = {}
        }

        function i() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function() {};
            if (d) return void h.push(e);
            var t = "v" + s["default"].VERSION,
                n = g[t];
            n ? e(n.hash, n.components, n.duration) : (f[t] || (f[t] = (new Date).getTime()), d = !0, l["default"].startFunction("BFP"), y.get(function(n, r) {
                var o = f[t] ? (new Date).getTime() - f[t] : p;
                l["default"].endFunction("BFP"), d = !1, g[t] = {
                    hash: n,
                    components: r,
                    duration: o
                }, e(n, r, o), (0, u.forEach)(h, function(e) {
                    return e(n, r, o)
                }), h.length = 0, h = []
            }, l["default"]))
        }
        t.__esModule = !0, t.fingerprint2 = t.registry = t.NOT_YET = undefined, t.flushBFP = o, t.getBFP = i;
        var a = n(98),
            s = r(a),
            u = n(11),
            c = n(48),
            l = r(c);
        window.__sofabfp_registry || (window.__sofabfp_registry = {});
        var d = !1,
            h = [],
            f = [],
            p = -1,
            g = (t.NOT_YET = -2, t.registry = window.__sofabfp_registry),
            y = t.fingerprint2 = new s["default"]
    }, function(e, t) {
        ! function(t, n, r) {
            "use strict";
            "function" == typeof window.define && window.define.amd ? window.define(r) : void 0 !== e && e.exports ? e.exports = r() : n.exports ? n.exports = r() : n.Fingerprint2 = r()
        }(0, this, function() {
            "use strict";
            var e = function(t) {
                if (!(this instanceof e)) return new e(t);
                var n = {
                    swfContainerId: "fingerprintjs2",
                    swfPath: "flash/compiled/FontList.swf",
                    detectScreenOrientation: !0,
                    sortPluginsFor: [/palemoon/i],
                    userDefinedFonts: []
                };
                this.options = n;
                for (var r in t || {}) this.options[r] = t[r];
                this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map, this.highEntropyData = {}, this.isApplyHighEntropy = !1, this.permissionStateInfo = "", this.functionError = ""
            };
            return e.prototype = {
                extend: function(e, t) {
                    if (null == e) return t;
                    for (var n in e) null != e[n] && t[n] !== e[n] && (t[n] = e[n]);
                    return t
                },
                get_high_entropy_data: function(e, t) {
                    var n = this;
                    if (!navigator.userAgentData || !navigator.userAgentData.getHighEntropyValues) return n.isApplyHighEntropy = !1, this.get_permission_state(e, t);
                    t.startFunction("get_high_entropy_data"), navigator.userAgentData.getHighEntropyValues(["architecture", "model", "bitness", "platform", "platformVersion", "uaFullVersion", "fullVersionList", "wow64", "mobile"]).then(function(e) {
                        n.highEntropyData = e, n.isApplyHighEntropy = !0
                    })["catch"](function(e) {
                        n.isApplyHighEntropy = !1, n.functionError += "get_high_entropy_data: " + e.message.toString() + "|"
                    })["finally"](function() {
                        return t.endFunction("get_high_entropy_data"), n.get_permission_state(e, t)
                    })
                },
                get_permission_state: function(e, t) {
                    var n = this;
                    if (!navigator.permissions || !navigator.permissions.query) return this.getInfo(e, t);
                    t.startFunction("get_permission_state"), navigator.permissions.query({
                        name: "notifications"
                    }).then(function(e) {
                        Notification && Notification.permission && e && e.state && (n.permissionStateInfo = Notification.permission.toString() + "|" + e.state.toString())
                    })["catch"](function(e) {
                        n.functionError += "get_permission_state: " + e.message.toString() + "|"
                    })["finally"](function() {
                        return t.endFunction("get_permission_state"), n.getInfo(e, t)
                    })
                },
                get: function(e, t) {
                    return this.get_high_entropy_data(e, t)
                },
                getInfo: function(e, t) {
                    t.startFunction("getInfo");
                    var n = this,
                        r = {
                            data: [],
                            addPreprocessedComponent: function(e) {
                                var t = e.value;
                                "function" == typeof n.options.preprocessor && (t = n.options.preprocessor(e.key, t)), r.data.push({
                                    key: e.key,
                                    value: t
                                })
                            }
                        };
                    r = this.userAgentKey(r), r = this.languageKey(r), r = this.colorDepthKey(r), r = this.deviceMemoryKey(r), r = this.pixelRatioKey(r), r = this.hardwareConcurrencyKey(r), r = this.screenResolutionKey(r), r = this.availableScreenResolutionKey(r), r = this.timezoneOffsetKey(r), r = this.sessionStorageKey(r), r = this.localStorageKey(r), r = this.indexedDbKey(r), r = this.addBehaviorKey(r), r = this.openDatabaseKey(r), r = this.cpuClassKey(r), r = this.platformKey(r), r = this.doNotTrackKey(r), r = this.pluginsKey(r), r = this.canvasKey(r), r = this.webglKey(r), r = this.webglVendorAndRendererKey(r), r = this.adBlockKey(r), r = this.hasLiedLanguagesKey(r), r = this.hasLiedResolutionKey(r), r = this.hasLiedOsKey(r), r = this.hasLiedBrowserKey(r), r = this.touchSupportKey(r), r = this.highEntropyArchitectureKey(r), r = this.highEntropyModelKey(r), r = this.highEntropyBitnessKey(r), r = this.highEntropyPlatformKey(r), r = this.highEntropyPlatformVersionKey(r), r = this.highEntropyUaFullVersionKey(r), r = this.highEntropyFullVersionListKey(r), r = this.highEntropyWow64Key(r), r = this.highEntropyMobileKey(r), r = this.appVersionKey(r), r = this.pluginPrototypeKey(r), r = this.mimePrototypeKey(r), r = this.permissionKey(r), r = this.languagesKey(r), r = this.outerKey(r), r = this.webdriverKey(r), r = this.connectionRTTKey(r), r = this.customEntropyFunction(r), r = this.orientationKey(r), r = this.cdcKey(r), r = this.functionErrorKey(r), this.fontsKey(r, function(r) {
                        var o = [];
                        n.each(r.data, function(e) {
                            var t = e.value;
                            t && "undefined" === t.join && (t = t.join(";")), o.push(t)
                        });
                        var i = n.x64hash128(o.join("~~~"), 31);
                        return t.endFunction("getInfo"), e(i, r.data)
                    })
                },
                highEntropyArchitectureKey: function(e) {
                    return this.isApplyHighEntropy && this.highEntropyData.hasOwnProperty("architecture") ? e.addPreprocessedComponent({
                        key: "high_entropy_architecture",
                        value: this.highEntropyData.architecture
                    }) : e.addPreprocessedComponent({
                        key: "high_entropy_architecture",
                        value: ""
                    }), e
                },
                highEntropyModelKey: function(e) {
                    return this.isApplyHighEntropy && this.highEntropyData.hasOwnProperty("model") ? e.addPreprocessedComponent({
                        key: "high_entropy_model",
                        value: this.highEntropyData.model
                    }) : e.addPreprocessedComponent({
                        key: "high_entropy_model",
                        value: ""
                    }), e
                },
                highEntropyBitnessKey: function(e) {
                    return this.isApplyHighEntropy && this.highEntropyData.hasOwnProperty("bitness") ? e.addPreprocessedComponent({
                        key: "high_entropy_bitness",
                        value: this.highEntropyData.bitness
                    }) : e.addPreprocessedComponent({
                        key: "high_entropy_bitness",
                        value: ""
                    }), e
                },
                highEntropyPlatformKey: function(e) {
                    return this.isApplyHighEntropy && this.highEntropyData.hasOwnProperty("platform") ? e.addPreprocessedComponent({
                        key: "high_entropy_platform",
                        value: this.highEntropyData.platform
                    }) : e.addPreprocessedComponent({
                        key: "high_entropy_platform",
                        value: ""
                    }), e
                },
                highEntropyPlatformVersionKey: function(e) {
                    return this.isApplyHighEntropy && this.highEntropyData.hasOwnProperty("platformVersion") ? e.addPreprocessedComponent({
                        key: "high_entropy_platformVersion",
                        value: this.highEntropyData.platformVersion
                    }) : e.addPreprocessedComponent({
                        key: "high_entropy_platformVersion",
                        value: ""
                    }), e
                },
                highEntropyUaFullVersionKey: function(e) {
                    return this.isApplyHighEntropy && this.highEntropyData.hasOwnProperty("uaFullVersion") ? e.addPreprocessedComponent({
                        key: "high_entropy_uaFullVersion",
                        value: this.highEntropyData.uaFullVersion
                    }) : e.addPreprocessedComponent({
                        key: "high_entropy_uaFullVersion",
                        value: ""
                    }), e
                },
                highEntropyFullVersionListKey: function(e) {
                    return this.isApplyHighEntropy && this.highEntropyData.hasOwnProperty("fullVersionList") ? e.addPreprocessedComponent({
                        key: "high_entropy_fullVersionList",
                        value: this.getHighEntropyFullVersionList()
                    }) : e.addPreprocessedComponent({
                        key: "high_entropy_fullVersionList",
                        value: ""
                    }), e
                },
                highEntropyWow64Key: function(e) {
                    return this.isApplyHighEntropy && this.highEntropyData.hasOwnProperty("wow64") ? e.addPreprocessedComponent({
                        key: "high_entropy_wow64",
                        value: this.highEntropyData.wow64
                    }) : e.addPreprocessedComponent({
                        key: "high_entropy_wow64",
                        value: ""
                    }), e
                },
                highEntropyMobileKey: function(e) {
                    return this.isApplyHighEntropy && this.highEntropyData.hasOwnProperty("mobile") ? e.addPreprocessedComponent({
                        key: "high_entropy_mobile",
                        value: this.highEntropyData.mobile
                    }) : e.addPreprocessedComponent({
                        key: "high_entropy_mobile",
                        value: ""
                    }), e
                },
                appVersionKey: function(e) {
                    return e.addPreprocessedComponent({
                        key: "app_version",
                        value: this.getAppVersion()
                    }), e
                },
                pluginPrototypeKey: function(e) {
                    return e.addPreprocessedComponent({
                        key: "plugin_prototype",
                        value: this.getPluginPrototype()
                    }), e
                },
                mimePrototypeKey: function(e) {
                    return e.addPreprocessedComponent({
                        key: "mime_prototype",
                        value: this.getMimePrototype()
                    }), e
                },
                permissionKey: function(e) {
                    return e.addPreprocessedComponent({
                        key: "permission_state",
                        value: this.permissionStateInfo
                    }), e
                },
                languagesKey: function(e) {
                    return e.addPreprocessedComponent({
                        key: "languages",
                        value: this.getLanguages()
                    }), e
                },
                webdriverKey: function(e) {
                    return e.addPreprocessedComponent({
                        key: "web_driver",
                        value: this.getWebdriver()
                    }), e
                },
                connectionRTTKey: function(e) {
                    return e.addPreprocessedComponent({
                        key: "connection_rtt",
                        value: this.getConnectionRTT()
                    }), e
                },
                outerKey: function(e) {
                    return e.addPreprocessedComponent({
                        key: "outer",
                        value: this.getOuter()
                    }), e
                },
                functionErrorKey: function(e) {
                    return e.addPreprocessedComponent({
                        key: "function_error",
                        value: this.functionError
                    }), e
                },
                customEntropyFunction: function(e) {
                    return "function" == typeof this.options.customFunction && e.addPreprocessedComponent({
                        key: "custom",
                        value: this.options.customFunction()
                    }), e
                },
                orientationKey: function(e) {
                    return e.addPreprocessedComponent({
                        key: "orientation",
                        value: this.getOrientation()
                    }), e
                },
                cdcKey: function(e) {
                    return e.addPreprocessedComponent({
                        key: "cdc",
                        value: this.getCdc().toString()
                    }), e
                },
                userAgentKey: function(e) {
                    return this.options.excludeUserAgent || e.addPreprocessedComponent({
                        key: "user_agent",
                        value: this.getUserAgent()
                    }), e
                },
                getUserAgent: function() {
                    return navigator.userAgent
                },
                getHighEntropyFullVersionList: function() {
                    var e = [];
                    return this.highEntropyData.fullVersionList.forEach(function(t) {
                        e.push(JSON.stringify(t))
                    }), e
                },
                languageKey: function(e) {
                    return this.options.excludeLanguage || e.addPreprocessedComponent({
                        key: "language",
                        value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
                    }), e
                },
                colorDepthKey: function(e) {
                    return this.options.excludeColorDepth || e.addPreprocessedComponent({
                        key: "color_depth",
                        value: window.screen.colorDepth || -1
                    }), e
                },
                deviceMemoryKey: function(e) {
                    return this.options.excludeDeviceMemory || e.addPreprocessedComponent({
                        key: "device_memory",
                        value: this.getDeviceMemory()
                    }), e
                },
                getDeviceMemory: function() {
                    return navigator.deviceMemory || -1
                },
                pixelRatioKey: function(e) {
                    return this.options.excludePixelRatio || e.addPreprocessedComponent({
                        key: "pixel_ratio",
                        value: this.getPixelRatio()
                    }), e
                },
                getAppVersion: function() {
                    return navigator.appVersion ? navigator.appVersion : ""
                },
                getConnectionRTT: function() {
                    var e = navigator.connection,
                        t = e ? e.rtt : undefined;
                    return t === undefined ? "" : t.toString()
                },
                getOuter: function() {
                    return window.outerHeight !== undefined && window.outerWidth !== undefined ? window.outerWidth.toString() + "|" + window.outerHeight.toString() : ""
                },
                getOrientation: function() {
                    try {
                        return window.matchMedia("(orientation: portrait)").matches ? "portrait" : window.matchMedia("(orientation: landscape)").matches ? "landscape" : ""
                    } catch (e) {
                        return this.functionError += "getOrientation: " + e.message.toString() + "|", ""
                    }
                },
                getCdc: function() {
                    return Object.keys(window).filter(function(e) {
                        return 0 === e.indexOf("cdc_")
                    }).length > 0
                },
                getWebdriver: function() {
                    return navigator.webdriver !== undefined ? Boolean(navigator.webdriver).toString() : ""
                },
                getLanguages: function() {
                    return navigator.languages ? navigator.languages.length.toString() : ""
                },
                getPluginPrototype: function() {
                    if (PluginArray && navigator.plugins) {
                        var e = PluginArray.prototype === navigator.plugins.__proto__;
                        return navigator.plugins.length > 0 && (e &= Plugin.prototype === navigator.plugins[0].__proto__), Boolean(e).toString()
                    }
                    return ""
                },
                getMimePrototype: function() {
                    if (MimeTypeArray && navigator.mimeTypes) {
                        var e = MimeTypeArray.prototype === navigator.mimeTypes.__proto__;
                        return navigator.mimeTypes.length > 0 && (e &= MimeType.prototype === navigator.mimeTypes[0].__proto__), Boolean(e).toString()
                    }
                    return ""
                },
                getPixelRatio: function() {
                    return window.devicePixelRatio || ""
                },
                screenResolutionKey: function(e) {
                    return this.options.excludeScreenResolution ? e : this.getScreenResolution(e)
                },
                getScreenResolution: function(e) {
                    var t;
                    return t = this.options.detectScreenOrientation && window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height], e.addPreprocessedComponent({
                        key: "resolution",
                        value: t
                    }), e
                },
                availableScreenResolutionKey: function(e) {
                    return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e)
                },
                getAvailableScreenResolution: function(e) {
                    var t;
                    return window.screen.availWidth && window.screen.availHeight && (t = this.options.detectScreenOrientation ? window.screen.availHeight > window.screen.availWidth ? [window.screen.availHeight, window.screen.availWidth] : [window.screen.availWidth, window.screen.availHeight] : [window.screen.availHeight, window.screen.availWidth]), void 0 !== t && e.addPreprocessedComponent({
                        key: "available_resolution",
                        value: t
                    }), e
                },
                timezoneOffsetKey: function(e) {
                    return this.options.excludeTimezoneOffset || e.addPreprocessedComponent({
                        key: "timezone_offset",
                        value: (new Date).getTimezoneOffset()
                    }), e
                },
                sessionStorageKey: function(e) {
                    return !this.options.excludeSessionStorage && this.hasSessionStorage() && e.addPreprocessedComponent({
                        key: "session_storage",
                        value: 1
                    }), e
                },
                localStorageKey: function(e) {
                    return !this.options.excludeSessionStorage && this.hasLocalStorage() && e.addPreprocessedComponent({
                        key: "local_storage",
                        value: 1
                    }), e
                },
                indexedDbKey: function(e) {
                    return !this.options.excludeIndexedDB && this.hasIndexedDB() && e.addPreprocessedComponent({
                        key: "indexed_db",
                        value: 1
                    }), e
                },
                addBehaviorKey: function(e) {
                    return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && e.addPreprocessedComponent({
                        key: "add_behavior",
                        value: 1
                    }), e
                },
                openDatabaseKey: function(e) {
                    return !this.options.excludeOpenDatabase && window.openDatabase && e.addPreprocessedComponent({
                        key: "open_database",
                        value: 1
                    }), e
                },
                cpuClassKey: function(e) {
                    return this.options.excludeCpuClass || e.addPreprocessedComponent({
                        key: "cpu_class",
                        value: this.getNavigatorCpuClass()
                    }), e
                },
                platformKey: function(e) {
                    return this.options.excludePlatform || e.addPreprocessedComponent({
                        key: "navigator_platform",
                        value: this.getNavigatorPlatform()
                    }), e
                },
                doNotTrackKey: function(e) {
                    return this.options.excludeDoNotTrack || e.addPreprocessedComponent({
                        key: "do_not_track",
                        value: this.getDoNotTrack()
                    }), e
                },
                canvasKey: function(e) {
                    return !this.options.excludeCanvas && this.isCanvasSupported() && e.addPreprocessedComponent({
                        key: "canvas",
                        value: this.getCanvasFp()
                    }), e
                },
                webglKey: function(e) {
                    return !this.options.excludeWebGL && this.isWebGlSupported() && e.addPreprocessedComponent({
                        key: "webgl",
                        value: this.getWebglFp()
                    }), e
                },
                webglVendorAndRendererKey: function(e) {
                    return !this.options.excludeWebGLVendorAndRenderer && this.isWebGlSupported() && e.addPreprocessedComponent({
                        key: "webgl_vendor",
                        value: this.getWebglVendorAndRenderer()
                    }), e
                },
                adBlockKey: function(e) {
                    return this.options.excludeAdBlock || e.addPreprocessedComponent({
                        key: "adblock",
                        value: this.getAdBlock()
                    }), e
                },
                hasLiedLanguagesKey: function(e) {
                    return this.options.excludeHasLiedLanguages || e.addPreprocessedComponent({
                        key: "has_lied_languages",
                        value: this.getHasLiedLanguages()
                    }), e
                },
                hasLiedResolutionKey: function(e) {
                    return this.options.excludeHasLiedResolution || e.addPreprocessedComponent({
                        key: "has_lied_resolution",
                        value: this.getHasLiedResolution()
                    }), e
                },
                hasLiedOsKey: function(e) {
                    return this.options.excludeHasLiedOs || e.addPreprocessedComponent({
                        key: "has_lied_os",
                        value: this.getHasLiedOs()
                    }), e
                },
                hasLiedBrowserKey: function(e) {
                    return this.options.excludeHasLiedBrowser || e.addPreprocessedComponent({
                        key: "has_lied_browser",
                        value: this.getHasLiedBrowser()
                    }), e
                },
                fontsKey: function(e, t) {
                    return this.options.excludeJsFonts ? this.flashFontsKey(e, t) : this.jsFontsKey(e, t)
                },
                flashFontsKey: function(e, t) {
                    return this.options.excludeFlashFonts ? t(e) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? "undefined" == typeof this.options.swfPath ? t(e) : void this.loadSwfAndDetectFonts(function(n) {
                        e.addPreprocessedComponent({
                            key: "swf_fonts",
                            value: n.join(";")
                        }), t(e)
                    }) : t(e)
                },
                jsFontsKey: function(e, t) {
                    var n = this;
                    return setTimeout(function() {
                        var r = ["monospace", "sans-serif", "serif"],
                            o = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
                            i = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                        n.options.extendedJsFonts && (o = o.concat(i)), o = o.concat(n.options.userDefinedFonts);
                        var a = document.getElementsByTagName("body")[0],
                            s = document.createElement("div"),
                            u = document.createElement("div"),
                            c = {},
                            l = {},
                            d = function() {
                                var e = document.createElement("span");
                                return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.lineHeight = "normal", e.innerHTML = "mmmmmmmmmmlli", e
                            },
                            h = function(e, t) {
                                var n = d();
                                return n.style.fontFamily = "'" + e + "'," + t, n
                            },
                            f = function() {
                                for (var e = [], t = 0, n = r.length; t < n; t++) {
                                    var o = d();
                                    o.style.fontFamily = r[t], s.appendChild(o), e.push(o)
                                }
                                return e
                            }();
                        a.appendChild(s);
                        for (var p = 0, g = r.length; p < g; p++) c[r[p]] = f[p].offsetWidth, l[r[p]] = f[p].offsetHeight;
                        var y = function() {
                            for (var e = {}, t = 0, n = o.length; t < n; t++) {
                                for (var i = [], a = 0, s = r.length; a < s; a++) {
                                    var c = h(o[t], r[a]);
                                    u.appendChild(c), i.push(c)
                                }
                                e[o[t]] = i
                            }
                            return e
                        }();
                        a.appendChild(u);
                        for (var _ = [], m = 0, v = o.length; m < v; m++)(function(e) {
                            for (var t = !1, n = 0; n < r.length; n++)
                                if (t = e[n].offsetWidth !== c[r[n]] || e[n].offsetHeight !== l[r[n]]) return t;
                            return t
                        })(y[o[m]]) && _.push(o[m]);
                        a.removeChild(u), a.removeChild(s), e.addPreprocessedComponent({
                            key: "js_fonts",
                            value: _
                        }), t(e)
                    }, 1)
                },
                pluginsKey: function(e) {
                    return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || e.addPreprocessedComponent({
                        key: "ie_plugins",
                        value: this.getIEPlugins()
                    }) : e.addPreprocessedComponent({
                        key: "regular_plugins",
                        value: this.getRegularPlugins()
                    })), e
                },
                getRegularPlugins: function() {
                    var e = [];
                    if (navigator.plugins)
                        for (var t = 0, n = navigator.plugins.length; t < n; t++) navigator.plugins[t] && e.push(navigator.plugins[t]);
                    return this.pluginsShouldBeSorted() && (e = e.sort(function(e, t) {
                        return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                    })), this.map(e, function(e) {
                        var t = this.map(e, function(e) {
                            return [e.type, e.suffixes].join("~")
                        }).join(",");
                        return [e.name, e.description, t].join("::")
                    }, this)
                },
                getIEPlugins: function() {
                    var e = [];
                    if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
                        var t = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                        e = this.map(t, function(e) {
                            try {
                                return new window.ActiveXObject(e), e
                            } catch (t) {
                                return null
                            }
                        })
                    }
                    return navigator.plugins && (e = e.concat(this.getRegularPlugins())), e
                },
                pluginsShouldBeSorted: function() {
                    for (var e = !1, t = 0, n = this.options.sortPluginsFor.length; t < n; t++) {
                        var r = this.options.sortPluginsFor[t];
                        if (navigator.userAgent.match(r)) {
                            e = !0;
                            break
                        }
                    }
                    return e
                },
                touchSupportKey: function(e) {
                    return this.options.excludeTouchSupport || e.addPreprocessedComponent({
                        key: "touch_support",
                        value: this.getTouchSupport()
                    }), e
                },
                hardwareConcurrencyKey: function(e) {
                    return this.options.excludeHardwareConcurrency || e.addPreprocessedComponent({
                        key: "hardware_concurrency",
                        value: this.getHardwareConcurrency()
                    }), e
                },
                hasSessionStorage: function() {
                    try {
                        return !!window.sessionStorage
                    } catch (e) {
                        return !0
                    }
                },
                hasLocalStorage: function() {
                    try {
                        return !!window.localStorage
                    } catch (e) {
                        return !0
                    }
                },
                hasIndexedDB: function() {
                    try {
                        return !!window.indexedDB
                    } catch (e) {
                        return !0
                    }
                },
                getHardwareConcurrency: function() {
                    return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown"
                },
                getNavigatorCpuClass: function() {
                    return navigator.cpuClass ? navigator.cpuClass : "unknown"
                },
                getNavigatorPlatform: function() {
                    return navigator.platform ? navigator.platform : "unknown"
                },
                getDoNotTrack: function() {
                    return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown"
                },
                getTouchSupport: function() {
                    var e = 0,
                        t = !1;
                    "undefined" != typeof navigator.maxTouchPoints ? e = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
                    try {
                        document.createEvent("TouchEvent"), t = !0
                    } catch (n) {}
                    return [e, t, "ontouchstart" in window]
                },
                getCanvasFp: function() {
                    var e = [],
                        t = document.createElement("canvas");
                    t.width = 2e3, t.height = 200, t.style.display = "inline";
                    var n = t.getContext("2d");
                    n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6);
                    try {
                        e.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no"))
                    } catch (r) {}
                    return n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? n.font = "11pt Arial" : n.font = "11pt no-real-font-123", n.fillText("Cwm fjordbank glyphs vext quiz, �쁼", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, �쁼", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), t.toDataURL && e.push("canvas fp:" + t.toDataURL()), e.join("~")
                },
                getWebglFp: function() {
                    var e, t = function(t) {
                        return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                    };
                    if (!(e = this.getWebglCanvas())) return null;
                    var n = [];
                    try {
                        var r = e.createBuffer()
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.1|", c
                    }
                    try {
                        e.bindBuffer(e.ARRAY_BUFFER, r)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.2|", c
                    }
                    try {
                        var o = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0])
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.3|", c
                    }
                    try {
                        e.bufferData(e.ARRAY_BUFFER, o, e.STATIC_DRAW)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.4|", c
                    }
                    try {
                        r.itemSize = 3
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.5|", c
                    }
                    try {
                        r.numItems = 3
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.6|", c
                    }
                    try {
                        var i = e.createProgram()
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.7|", c
                    }
                    try {
                        var a = e.createShader(e.VERTEX_SHADER)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.8|", c
                    }
                    try {
                        e.shaderSource(a, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}")
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.9|", c
                    }
                    try {
                        e.compileShader(a)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.10|", c
                    }
                    try {
                        var s = e.createShader(e.FRAGMENT_SHADER)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.11|", c
                    }
                    try {
                        e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}")
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.12|", c
                    }
                    try {
                        e.compileShader(s)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.13|", c
                    }
                    try {
                        e.attachShader(i, a)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.14|", c
                    }
                    try {
                        e.attachShader(i, s)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.15|", c
                    }
                    try {
                        e.linkProgram(i)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.16|", c
                    }
                    try {
                        e.useProgram(i)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.17|", c
                    }
                    try {
                        i.vertexPosAttrib = e.getAttribLocation(i, "attrVertex")
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.18|", c
                    }
                    try {
                        i.offsetUniform = e.getUniformLocation(i, "uniformOffset")
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.19|", c
                    }
                    try {
                        e.enableVertexAttribArray(i.vertexPosArray)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.20|", c
                    }
                    try {
                        e.vertexAttribPointer(i.vertexPosAttrib, r.itemSize, e.FLOAT, !1, 0, 0)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.21|", c
                    }
                    try {
                        e.uniform2f(i.offsetUniform, 1, 1)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.22|", c
                    }
                    try {
                        e.drawArrays(e.TRIANGLE_STRIP, 0, r.numItems)
                    } catch (c) {
                        throw c.message += "|getWebglFp_2.23|", c
                    }
                    try {
                        e.canvas && e.canvas.toDataURL && n.push(e.canvas.toDataURL()), n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), n.push("webgl max anisotropy:" + function(e) {
                            var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                            if (t) {
                                var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                                return 0 === n && (n = 2), n
                            }
                            return null
                        }(e)), n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + e.getParameter(e.RED_BITS)), n.push("webgl renderer:" + e.getParameter(e.RENDERER)), n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), n.push("webgl vendor:" + e.getParameter(e.VENDOR)), n.push("webgl version:" + e.getParameter(e.VERSION))
                    } catch (c) {
                        throw c.message += "|getWebglFp_3|", c
                    }
                    try {
                        var u = e.getExtension("WEBGL_debug_renderer_info");
                        u && (n.push("webgl unmasked vendor:" + e.getParameter(u.UNMASKED_VENDOR_WEBGL)), n.push("webgl unmasked renderer:" + e.getParameter(u.UNMASKED_RENDERER_WEBGL)))
                    } catch (l) {}
                    if (!e.getShaderPrecisionFormat) return n.join("~");
                    try {
                        n.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision), n.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin), n.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax), n.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision), n.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin), n.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax), n.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision), n.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin), n.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax), n.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision), n.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin), n.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax), n.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision), n.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin), n.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax), n.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision), n.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin), n.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax), n.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision), n.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin), n.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax), n.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision), n.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin), n.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax), n.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision), n.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin), n.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax), n.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision), n.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin), n.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax), n.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision), n.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin), n.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax), n.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision), n.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin), n.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax)
                    } catch (c) {
                        throw c.message += "|getWebglFp_4|", c
                    }
                    return n.join("~")
                },
                getWebglVendorAndRenderer: function() {
                    try {
                        var e = this.getWebglCanvas(),
                            t = e.getExtension("WEBGL_debug_renderer_info");
                        return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                    } catch (n) {
                        return ""
                    }
                },
                getAdBlock: function() {
                    var e = document.createElement("div");
                    e.innerHTML = "&nbsp;", e.className = "adsbox";
                    var t = !1;
                    try {
                        document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                    } catch (n) {
                        t = !1
                    }
                    return t
                },
                getHasLiedLanguages: function() {
                    if ("undefined" != typeof navigator.languages) try {
                        if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                    } catch (e) {
                        return !0
                    }
                    return !1
                },
                getHasLiedResolution: function() {
                    return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
                },
                getHasLiedOs: function() {
                    var e, t = navigator.userAgent.toLowerCase(),
                        n = navigator.oscpu,
                        r = navigator.platform.toLowerCase();
                    e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other";
                    if (("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;
                    if (void 0 !== n) {
                        if (n = n.toLowerCase(), n.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
                        if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
                        if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
                        if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e)) return !0
                    }
                    return r.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || ((r.indexOf("linux") >= 0 || r.indexOf("android") >= 0 || r.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || ((r.indexOf("mac") >= 0 || r.indexOf("ipad") >= 0 || r.indexOf("ipod") >= 0 || r.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || ((-1 === r.indexOf("win") && -1 === r.indexOf("linux") && -1 === r.indexOf("mac")) != ("Other" === e) || "undefined" == typeof navigator.plugins && "Windows" !== e && "Windows Phone" !== e)))
                },
                getHasLiedBrowser: function() {
                    var e, t = navigator.userAgent.toLowerCase(),
                        n = navigator.productSub;
                    if (("Chrome" === (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
                    var r = eval.toString().length;
                    if (37 === r && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                    if (39 === r && "Internet Explorer" !== e && "Other" !== e) return !0;
                    if (33 === r && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
                    var o;
                    try {
                        throw "a"
                    } catch (i) {
                        try {
                            i.toSource(), o = !0
                        } catch (a) {
                            o = !1
                        }
                    }
                    return !(!o || "Firefox" === e || "Other" === e)
                },
                isCanvasSupported: function() {
                    var e = document.createElement("canvas");
                    return !(!e.getContext || !e.getContext("2d"))
                },
                isWebGlSupported: function() {
                    if (!this.isCanvasSupported()) return !1;
                    var e = this.getWebglCanvas();
                    return !!window.WebGLRenderingContext && !!e
                },
                isIE: function() {
                    return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                },
                hasSwfObjectLoaded: function() {
                    return "undefined" != typeof window.swfobject
                },
                hasMinFlashInstalled: function() {
                    return window.swfobject.hasFlashPlayerVersion("9.0.0")
                },
                addFlashDivNode: function() {
                    var e = document.createElement("div");
                    e.setAttribute("id", this.options.swfContainerId), document.body.appendChild(e)
                },
                loadSwfAndDetectFonts: function(e) {
                    window.___fp_swf_loaded = function(t) {
                        e(t)
                    };
                    var t = this.options.swfContainerId;
                    this.addFlashDivNode();
                    var n = {
                            onReady: "___fp_swf_loaded"
                        },
                        r = {
                            allowScriptAccess: "always",
                            menu: "false"
                        };
                    window.swfobject.embedSWF(this.options.swfPath, t, "1", "1", "9.0.0", !1, n, r, {})
                },
                getWebglCanvas: function() {
                    try {
                        var e = document.createElement("canvas"),
                            t = null;
                        try {
                            t = e.getContext("webgl") || e.getContext("experimental-webgl")
                        } catch (n) {}
                        return t || (t = null), t
                    } catch (r) {
                        throw r.message += "|getWebglCanvas|", r
                    }
                },
                each: function(e, t, n) {
                    if (null !== e)
                        if (this.nativeForEach && e.forEach === this.nativeForEach) e.forEach(t, n);
                        else if (e.length === +e.length) {
                        for (var r = 0, o = e.length; r < o; r++)
                            if (t.call(n, e[r], r, e) === {}) return
                    } else
                        for (var i in e)
                            if (e.hasOwnProperty(i) && t.call(n, e[i], i, e) === {}) return
                },
                map: function(e, t, n) {
                    var r = [];
                    return null == e ? r : this.nativeMap && e.map === this.nativeMap ? e.map(t, n) : (this.each(e, function(e, o, i) {
                        r[r.length] = t.call(n, e, o, i)
                    }), r)
                },
                x64Add: function(e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var n = [0, 0, 0, 0];
                    return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                },
                x64Multiply: function(e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var n = [0, 0, 0, 0];
                    return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
                },
                x64Rotl: function(e, t) {
                    return t %= 64, 32 === t ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
                },
                x64LeftShift: function(e, t) {
                    return t %= 64, 0 === t ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
                },
                x64Xor: function(e, t) {
                    return [e[0] ^ t[0], e[1] ^ t[1]]
                },
                x64Fmix: function(e) {
                    return e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [4283543511, 3981806797]), e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [3301882366, 444984403]), e = this.x64Xor(e, [0, e[0] >>> 1])
                },
                x64hash128: function(e, t) {
                    e = e || "", t = t || 0;
                    for (var n = e.length % 16, r = e.length - n, o = [0, t], i = [0, t], a = [0, 0], s = [0, 0], u = [2277735313, 289559509], c = [1291169091, 658871167], l = 0; l < r; l += 16) a = [255 & e.charCodeAt(l + 4) | (255 & e.charCodeAt(l + 5)) << 8 | (255 & e.charCodeAt(l + 6)) << 16 | (255 & e.charCodeAt(l + 7)) << 24, 255 & e.charCodeAt(l) | (255 & e.charCodeAt(l + 1)) << 8 | (255 & e.charCodeAt(l + 2)) << 16 | (255 & e.charCodeAt(l + 3)) << 24], s = [255 & e.charCodeAt(l + 12) | (255 & e.charCodeAt(l + 13)) << 8 | (255 & e.charCodeAt(l + 14)) << 16 | (255 & e.charCodeAt(l + 15)) << 24, 255 & e.charCodeAt(l + 8) | (255 & e.charCodeAt(l + 9)) << 8 | (255 & e.charCodeAt(l + 10)) << 16 | (255 & e.charCodeAt(l + 11)) << 24], a = this.x64Multiply(a, u), a = this.x64Rotl(a, 31), a = this.x64Multiply(a, c), o = this.x64Xor(o, a), o = this.x64Rotl(o, 27), o = this.x64Add(o, i), o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 1390208809]), s = this.x64Multiply(s, c), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, u), i = this.x64Xor(i, s), i = this.x64Rotl(i, 31), i = this.x64Add(i, o), i = this.x64Add(this.x64Multiply(i, [0, 5]), [0, 944331445]);
                    switch (a = [0, 0], s = [0, 0], n) {
                        case 15:
                            s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 14)], 48));
                        case 14:
                            s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 13)], 40));
                        case 13:
                            s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 12)], 32));
                        case 12:
                            s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 11)], 24));
                        case 11:
                            s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 10)], 16));
                        case 10:
                            s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(l + 9)], 8));
                        case 9:
                            s = this.x64Xor(s, [0, e.charCodeAt(l + 8)]), s = this.x64Multiply(s, c), s = this.x64Rotl(s, 33), s = this.x64Multiply(s, u), i = this.x64Xor(i, s);
                        case 8:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 7)], 56));
                        case 7:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 6)], 48));
                        case 6:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 5)], 40));
                        case 5:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 4)], 32));
                        case 4:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 3)], 24));
                        case 3:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 2)], 16));
                        case 2:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(l + 1)], 8));
                        case 1:
                            a = this.x64Xor(a, [0, e.charCodeAt(l)]), a = this.x64Multiply(a, u), a = this.x64Rotl(a, 31), a = this.x64Multiply(a, c), o = this.x64Xor(o, a)
                    }
                    return o = this.x64Xor(o, [0, e.length]), i = this.x64Xor(i, [0, e.length]), o = this.x64Add(o, i), i = this.x64Add(i, o), o = this.x64Fmix(o), i = this.x64Fmix(i), o = this.x64Add(o, i), i = this.x64Add(i, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
                }
            }, e.VERSION = "1.5.1", e
        })
    }, function(e, t, n) {
        e.exports = {
            "default": n(100),
            __esModule: !0
        }
    }, function(e, t, n) {
        n(101), e.exports = n(2).Object.keys
    }, function(e, t, n) {
        var r = n(30),
            o = n(17);
        n(102)("keys", function() {
            return function(e) {
                return o(r(e))
            }
        })
    }, function(e, t, n) {
        var r = n(12),
            o = n(2),
            i = n(14);
        e.exports = function(e, t) {
            var n = (o.Object || {})[e] || Object[e],
                a = {};
            a[e] = t(n), r(r.S + r.F * i(function() {
                n(1)
            }), "Object", a)
        }
    }, function(e, t, n) {
        "use strict";

        function r() {
            return !!("ontouchstart" in window || navigator.maxTouchPoints)
        }
        t.__esModule = !0, t["default"] = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }
        t.__esModule = !0;
        var o = n(0),
            i = function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }(o),
            a = n(4),
            s = r(a),
            u = n(11),
            c = r(u),
            l = ["37", "38", "39", "40"],
            d = new RegExp(/^[0-9]*$/),
            h = {
                8: "BACKSPACE",
                9: "TAB",
                13: "ENTER",
                16: "SHIFT",
                17: "CTRL",
                18: "ALT",
                20: "CAPSLOCK",
                32: "SPACE",
                46: "DELETE"
            },
            f = {
                0: "UN0",
                229: "UN1"
            },
            p = function() {
                function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    (0, i["default"])(this, e), this._inputFieldProps = {}, this._inputFieldLogsInfos = {};
                    for (var n = 0, r = t.length; n < r; n++) this.addWatch(t[n])
                }
                return e.prototype.addWatch = function(e) {
                    this._hasNecessaryProp(e) && (this._inputFieldProps[e.id] = {
                        element: document.getElementById(e.id)
                    }, this._initInputFieldLogInfos(e), this._setInitialValue(e.id), this._attachKeyEventHandler(e.id), this._attachInputDetectHandler(e.id))
                }, e.prototype.removeWatch = function(e) {
                    var t = this._getProp(e);
                    if (t) {
                        var n = t.element;
                        s.removeEventListener(n, "keydown", t.onKeydown), s.removeEventListener(n, "keyup", t.onKeyup), t.onInputChange ? s.removeEventListener(n, "input", t.onInputChange) : "onInputChangeTimer" in t && clearInterval(t.onInputChangeTimer), delete this._inputFieldProps[e], delete this._inputFieldLogsInfos[e]
                    }
                }, e.prototype.get = function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                        t = [],
                        n = e.filter || [];
                    for (var r in this._inputFieldLogsInfos)(0 === n.length || c.indexOf(n, r) > -1) && t.push({
                        i: r,
                        a: this._getKeyStrokeLogById(r),
                        b: this._getInputIntervalLogById(r),
                        c: this._getInitialValue(r),
                        d: this._getCompleteValue(r),
                        e: this._inputFieldLogsInfos[r].secureMode,
                        f: this._inputFieldLogsInfos[r].hideValueMode
                    });
                    return t
                }, e.prototype._getProp = function(e, t) {
                    var n = this._inputFieldProps[e];
                    return t ? n[t] : n
                }, e.prototype._hasNecessaryProp = function(e) {
                    return e.id
                }, e.prototype._getKeyStrokeLogById = function(e) {
                    var t = this._inputFieldLogsInfos[e],
                        n = this._getLogs(t.keyStrokeLogs, t.keyStrokeLogLength);
                    return c.map(n, function(e) {
                        return e.a + "," + e.b + "," + e.c + "," + e.d
                    })
                }, e.prototype._getInputIntervalLogById = function(e) {
                    var t = this._inputFieldLogsInfos[e],
                        n = this._getLogs(t.inputIntervalLogs, t.inputIntervalLogLength) || [];
                    return {
                        a: c.map(n, function(e) {
                            return e.a + "," + e.c
                        }),
                        b: this._getLast(n, {
                            d: 0
                        }).d
                    }
                }, e.prototype._getLast = function(e, t) {
                    return e && 0 !== e.length ? e[e.length - 1] || t : t
                }, e.prototype._getLogs = function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
                        t = arguments[1];
                    return e.length <= t ? e : e.slice(e.length - t, e.length)
                }, e.prototype._attachKeyEventHandler = function(e) {
                    var t = this._getProp(e),
                        n = t.element,
                        r = s.bind(this._keydownEventHandler, this, n),
                        o = s.bind(this._keyupEventHandler, this, n);
                    t.onKeydown = r, t.onKeyup = o, s.addEventListener(n, "keydown", r), s.addEventListener(n, "keyup", o)
                }, e.prototype._attachInputDetectHandler = function(e) {
                    var t = this._getProp(e),
                        n = t.element,
                        r = s.bind(this._detectInputChange, this, n);
                    "oninput" in n ? (t.onInputChange = r, s.addEventListener(n, "input", r)) : t.onInputChangeTimer = setInterval(r, 50)
                }, e.prototype._setInitialValue = function(e) {
                    var t = this._getProp(e),
                        n = t.logInfos,
                        r = t.element;
                    n.secureMode ? n.initialValue = "" : n.initialValue = r.value
                }, e.prototype._getInitialValue = function(e) {
                    return this._inputFieldLogsInfos[e].initialValue
                }, e.prototype._getCompleteValue = function(e) {
                    var t = this._inputFieldProps[e];
                    return this._inputFieldLogsInfos[e].secureMode ? "" : t.element.value
                }, e.prototype._initInputFieldLogInfos = function(e) {
                    var t = {
                        lastEventTime: 0,
                        keyIndex: 0,
                        keyStrokeLogs: [],
                        downKeyMap: {},
                        lastInputTime: (new Date).getTime(),
                        lastInputText: "",
                        inputIntervalLogs: [],
                        inputIntervalLogIdx: 0,
                        initialValue: 0,
                        completeValue: 0,
                        keyStrokeLogLength: e.keyStrokeLogLength || 65,
                        inputIntervalLogLength: e.inputIntervalLogLength || 30,
                        secureMode: e.secureMode || !1,
                        hideValueMode: e.hideValueMode || !1
                    };
                    this._inputFieldLogsInfos[e.id] = t, this._inputFieldProps[e.id].logInfos = t
                }, e.prototype._detectInputChange = function(e, t) {
                    var n = e.value,
                        r = (new Date).getTime(),
                        o = this._inputFieldLogsInfos[e.id],
                        i = o.secureMode,
                        a = i || o.hideValueMode,
                        s = void 0,
                        u = void 0;
                    o.lastInputText !== n && (s = 0 === o.inputIntervalLogs.length ? 0 : r - o.lastInputTime, u = {
                        a: s,
                        c: a ? "" : n,
                        d: o.inputIntervalLogIdx++,
                        e: i ? -1 : n.length
                    }, o.inputIntervalLogs.push(u), o.lastInputTime = r, o.lastInputText = n), 0 === n.length && (o.inputIntervalLogs = [])
                }, e.prototype._keydownEventHandler = function(t) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.event;
                    if (!this._isValidKeyUpOrDownEvent(n)) return !0;
                    var r = this._getKeyCode(n.keyCode),
                        o = this._inputFieldLogsInfos[t.id],
                        i = this._isIMEKeyCode(r),
                        a = (new Date).getTime(),
                        s = 0,
                        u = null;
                    return !!this._isArrowKey(r) || !(!i && e._isAlreadyDown(o, r) && !e._isDeleteCharKey(r)) && (u = this._getKeyInfo(o, r), 0 !== o.keyStrokeLogs.length && (s = Math.max(0, a - o.lastEventTime)), o.lastEventTime = a, i || e._isAlreadyDown(o, r) || (o.downKeyMap[r] = u), o.keyStrokeLogs.push({
                        a: s,
                        b: "d",
                        c: u,
                        d: o.secureMode ? "" : "" + n.keyCode
                    }), !0)
                }, e.prototype._keyupEventHandler = function(t) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.event;
                    if (!this._isValidKeyUpOrDownEvent(n)) return !0;
                    var r = this._getKeyCode(n.keyCode),
                        o = this._inputFieldLogsInfos[t.id],
                        i = this._isIMEKeyCode(r),
                        a = (new Date).getTime(),
                        s = 0,
                        u = null;
                    return !!this._isArrowKey(r) || !(!i && !e._isAlreadyDown(o, r)) && (u = i ? f[r] : o.downKeyMap[r], delete o.downKeyMap[r], s = Math.max(0, a - o.lastEventTime), o.keyStrokeLogs.push({
                        a: s,
                        b: "u",
                        c: u,
                        d: o.secureMode ? "" : "" + n.keyCode
                    }), (e._isEmptyLog(o.keyStrokeLogs) || 0 === t.value.length) && (o.keyStrokeLogs = []), !0)
                }, e.prototype._isValidKeyUpOrDownEvent = function(e) {
                    return e && e.keyCode && e.keyCode.toString
                }, e.prototype._getKeyCode = function(e) {
                    var t = e.toString();
                    return h[e] && (t = h[e]), t
                }, e.prototype._getKeyInfo = function(e, t) {
                    return this._isSpecialKey(t) ? t : f[t] ? f[t] : "i" + e.keyIndex++
                }, e._isAlreadyDown = function(e, t) {
                    return e.downKeyMap[t]
                }, e.prototype._isIMEKeyCode = function(e) {
                    return !!f[e]
                }, e._isDeleteCharKey = function(e) {
                    return "BACKSPACE" === e || "DELETE" === e
                }, e.prototype._isArrowKey = function(e) {
                    return !this._isSpecialKey(e) && -1 !== c.indexOf(l, e)
                }, e.prototype._isSpecialKey = function(e) {
                    return !d.test(e)
                }, e._isEmptyLog = function(e) {
                    return 0 === e.length
                }, e
            }();
        t["default"] = p
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }(r),
            i = n(36),
            a = n(4),
            s = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }(a),
            u = s.objectAssign,
            c = function() {
                function e() {
                    (0, o["default"])(this, e), this._isFirst = !0, this._firstOrientation = {
                        a: 999,
                        b: 999,
                        c: 999
                    }, this._currentOrientation = u({}, this._firstOrientation), s.bindAll(["_onDeviceOrientation"], this), window.DeviceOrientationEvent ? s.addEventListener(window, "deviceorientation", this._onDeviceOrientation) : (this._firstOrientation = {
                        a: 777,
                        b: 777,
                        c: 777
                    }, this._currentOrientation = u({}, this._firstOrientation))
                }
                return e.prototype.getCurrentOrientation = function() {
                    return u({}, this._currentOrientation)
                }, e.prototype.get = function() {
                    return {
                        a: u({}, this._firstOrientation),
                        b: this.getCurrentOrientation()
                    }
                }, e.prototype._onDeviceOrientation = function(e) {
                    var t = e.alpha,
                        n = e.beta,
                        r = e.gamma,
                        o = {
                            a: (0, i.refine)(t),
                            b: (0, i.refine)(n),
                            c: (0, i.refine)(r)
                        };
                    this._isFirst && (this._isFirst = !1, this._firstOrientation = u({}, o)), this._currentOrientation = u({}, o), (0, i.isWrong)(this._currentOrientation) && s.removeEventListener(window, "deviceorientation", this._onDeviceOrientation)
                }, e
            }();
        t["default"] = c
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }(r),
            i = n(36),
            a = n(4),
            s = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }(a),
            u = s.objectAssign,
            c = function() {
                function e() {
                    (0, o["default"])(this, e), this._isFirst = !0, this._firstAcceleration = {
                        a: 999,
                        b: 999,
                        c: 999
                    }, this._currentAcceleration = u({}, this._firstAcceleration), this._firstAccelerationIncludingGravity = u({}, this._firstAcceleration), this._currentAccelerationIncludingGravity = u({}, this._firstAcceleration), s.bindAll(["_onDeviceMotion"], this), window.DeviceMotionEvent ? s.addEventListener(window, "devicemotion", this._onDeviceMotion) : (this._firstAcceleration = {
                        a: 777,
                        b: 777,
                        c: 777
                    }, this._currentAcceleration = u({}, this._firstAcceleration), this._firstAccelerationIncludingGravity = u({}, this._firstAcceleration), this._currentAccelerationIncludingGravity = u({}, this._firstAcceleration))
                }
                return e.prototype.get = function() {
                    return {
                        a: {
                            a: u({}, this._firstAcceleration),
                            b: u({}, this._firstAccelerationIncludingGravity)
                        },
                        b: {
                            a: u({}, this._currentAcceleration),
                            b: u({}, this._currentAccelerationIncludingGravity)
                        }
                    }
                }, e.prototype._onDeviceMotion = function(e) {
                    var t = e.acceleration;
                    t = t === undefined ? {} : t;
                    var n = t.x,
                        r = t.y,
                        o = t.z,
                        a = e.accelerationIncludingGravity;
                    a = a === undefined ? {} : a;
                    var c = a.x,
                        l = a.y,
                        d = a.z,
                        h = {
                            a: (0, i.refine)(n),
                            b: (0, i.refine)(r),
                            c: (0, i.refine)(o)
                        },
                        f = {
                            a: (0, i.refine)(c),
                            b: (0, i.refine)(l),
                            c: (0, i.refine)(d)
                        };
                    this._isFirst && (this._isFirst = !1, this._firstAcceleration = u({}, h), this._firstAccelerationIncludingGravity = u({}, f)), this._currentAcceleration = u({}, h), this._currentAccelerationIncludingGravity = u({}, f), (0, i.isWrong)(this._currentAcceleration) && (0, i.isWrong)(this._currentAccelerationIncludingGravity) && s.removeEventListener(window, "devicemotion", this._onDeviceMotion)
                }, e
            }();
        t["default"] = c
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }
        t.__esModule = !0;
        var o = n(0),
            i = function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }(o),
            a = n(4),
            s = r(a),
            u = n(11),
            c = r(u),
            l = function() {
                function e() {
                    var t = this,
                        n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    (0, i["default"])(this, e), this._count = 0, this._errCount = 0, this._mouse = [], this._temp = [], this._time = +new Date, this._totalInterval = -1, this._pageX = 0, this._pageY = 0, this._lastAbX = 0, this._lastAbY = 0, this._logLength = n.logLength || 200, this._debounce = n.debounce || 0, s.bindAll(["_flush"], this), this._wrappedOnMouseEvent = function(e) {
                        try {
                            t._onMouseEvent(e)
                        } catch (n) {
                            t._errCount++
                        }
                    }, c.forEach(["mousemove", "mousedown", "mouseup"], function(e) {
                        s.addEventListener(document, e, t._wrappedOnMouseEvent)
                    })
                }
                return e.prototype.get = function() {
                    return {
                        a: c.map(this._mouse, function(e) {
                            return e.b + "|" + e.c + "|" + e.d + "|" + e.e
                        }),
                        b: (this._mouse.pop() || {
                            a: 0
                        }).a,
                        c: this._lastAbX,
                        d: this._lastAbY,
                        e: this._totalInterval,
                        f: this._errCount
                    }
                }, e.prototype._flush = function() {
                    this._mouse = this._mouse.concat(this._temp).slice(-this._logLength), this._temp.length = 0
                }, e.prototype._onMouseEvent = function(e) {
                    var t = e.clientX,
                        n = e.clientY,
                        r = e.type,
                        o = s.getDocumentElement(),
                        i = {
                            mousemove: 0,
                            mousedown: 1,
                            mouseup: 2
                        } [r],
                        a = o.scrollLeft || 0,
                        u = o.scrollTop || 0,
                        c = +new Date,
                        l = c - this._time,
                        d = t + a,
                        h = n + u,
                        f = this._refinePageDiff(d - this._pageX),
                        p = this._refinePageDiff(h - this._pageY),
                        g = {
                            a: this._count,
                            b: i,
                            c: l,
                            d: f,
                            e: p
                        };
                    this._count++, this._totalInterval += l, this._time = c, this._pageX = d, this._pageY = h, this._lastAbX = this._refinePageDiff(d), this._lastAbY = this._refinePageDiff(h), this._temp.push(g), this._debounce ? (clearTimeout(this._timeoutRef), this._timeoutRef = setTimeout(this._flush, this._debounce)) : (this._mouse.push(g), this._mouse = this._mouse.slice(-this._logLength))
                }, e.prototype._refinePageDiff = function(e) {
                    if (isNaN(parseFloat(e))) return 0;
                    if (parseInt(e, 10) === parseFloat(e)) return e;
                    try {
                        return e.toFixed(3)
                    } catch (t) {
                        return e
                    }
                }, e
            }();
        t["default"] = l
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            return e.match(new RegExp(".{1," + t + "}", "g"))
        }

        function a() {
            ++b === w && (x["s" + M] = E, x["u" + M] = T, x["t" + M] = S, C && C(h["default"].compressToEncodedURIComponent(v.stringify(x))))
        }

        function s(e) {
            e.match(/fail\|/) ? (x.s = e, E++) : e.match(/success/) || T++, a()
        }

        function u(e, t, n, r) {
            b = 0, E = 0, S = 0, T = 0, M = e.type, A = t.mode, w = n.length, C = r, x = {
                t: e.uuid,
                s: "",
                m: A,
                sb: 0,
                sc: 0,
                ub: 0,
                uc: 0,
                tnb: "b" === M ? w : 0,
                tnc: "c" === M ? w : 0
            }
        }

        function c(e) {
            return "string" == typeof e && 0 === e.indexOf(g.ERROR_PREFIX) || !e.body
        }

        function l(e, t, n) {
            if (c(e) && n) return void n(e);
            var r = t.url,
                o = t.chunkSize,
                l = t.timeout,
                d = _.map(i(e.body, o), function(t, n, r) {
                    return e.uuid + "|" + e.type + "|" + (n + 1) + "|" + r.length + "|" + t
                });
            u(e, t, d, n), _.forEach(d, function(e) {
                new p["default"]({
                    timeout: l,
                    onTimeout: function(e) {
                        return ++S && a(e)
                    },
                    onError: function(e) {
                        return ++T && a(e)
                    },
                    onLoad: function(e) {
                        return s(e)
                    }
                }).open(r).send(e)
            })
        }
        t.__esModule = !0, t["default"] = l;
        var d = n(35),
            h = o(d),
            f = n(109),
            p = o(f),
            g = n(34),
            y = n(11),
            _ = r(y),
            m = n(19),
            v = r(m),
            w = void 0,
            b = void 0,
            E = void 0,
            S = void 0,
            T = void 0,
            x = void 0,
            M = void 0,
            A = void 0,
            C = void 0
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(0),
            i = r(o),
            a = n(110),
            s = r(a),
            u = n(19),
            c = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }(u),
            l = function() {
                function e(t) {
                    var n = this;
                    (0, i["default"])(this, e), this._prop = t, this.jsonp = !0, this._itf = new s["default"]({
                        onLoad: function(e) {
                            return n._onLoad(e)
                        },
                        onError: function(e) {
                            return n._onError(e)
                        },
                        onTimeout: function(e) {
                            return n._onTimeout(e)
                        },
                        timeout: this._prop.timeout || 0
                    })
                }
                return e.prototype.open = function(e) {
                    try {
                        this._itf.open(e)
                    } catch (t) {
                        this._onError()
                    }
                    return this
                }, e.prototype.send = function(e) {
                    try {
                        this._itf.send("a=" + e)
                    } catch (t) {}
                    return this
                }, e.prototype._onTimeout = function(e) {
                    this._prop.onTimeout()
                }, e.prototype._onError = function(e) {
                    this._prop.onError()
                }, e.prototype._onLoad = function(e) {
                    var t = e;
                    "string" != typeof t && (t = c.stringify(t)), this._prop.onLoad(t)
                }, e
            }();
        t["default"] = l
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }(r),
            i = n(4),
            a = 0,
            s = function() {
                function e(t) {
                    (0, o["default"])(this, e), this._prop = (0, i.objectAssign)({
                        charset: "utf-8",
                        callbackname: "callback",
                        onLoad: null,
                        onError: null,
                        onTimeout: null,
                        timeout: 0,
                        prefix: "_kjcb_"
                    }, t), this.id = a++
                }
                return e.prototype.open = function(e) {
                    var t = "" + this._prop.prefix + this.id;
                    this.callbackString = t, this._prepare(), this._url = e + (-1 === e.indexOf("?") ? "?" : "&") + this._prop.callbackname + "=" + t
                }, e.prototype.send = function(e) {
                    var t = this,
                        n = this._prop.timeout,
                        r = this._url;
                    e && (0 !== e.indexOf("?") && 0 !== e.indexOf("&") || (e = e.substr(1)), r += "&" + e), n > 0 && (this._timer = window.setTimeout(function() {
                        t.__loading && t.__onTimeout()
                    }, n)), this.element.src = r, this.__loading = !0
                }, e.prototype.getElement = function() {
                    return this.element
                }, e.prototype._prepare = function() {
                    var e = this,
                        t = this.callbackString;
                    if (!this.element && !window[t]) {
                        var n = document.createElement("script"),
                            r = document.getElementsByTagName("head")[0],
                            o = document.body;
                        n.type = "text/javascript", n.charset = this._prop.charset;
                        try {
                            (r || o).appendChild(n)
                        } catch (i) {}
                        "onreadystatechange" in n ? n.onreadystatechange = function() {
                            "loaded" === n.readyState && (n.onreadystatechange = null, window.setTimeout(function() {
                                e._timer && (window.clearTimeout(e._timer), delete e._timer), window[t] ? e.__onError() : e._teardown()
                            }, 10))
                        } : (n.onload = function() {
                            n.onload = null, n.onerror = null
                        }, n.onerror = function() {
                            e.__onError(), n.onload = null, n.onerror = null
                        }), window[t] = function(t) {
                            try {
                                e.__onSuccess(t)
                            } catch (i) {}
                        }, this.element = n
                    }
                }, e.prototype._teardown = function() {
                    this.__loading = !1;
                    var e = this.element,
                        t = this.callbackString;
                    window.clearTimeout(this._timer), delete this._timer, e.onload = null, e.onerror = null, e.onreadystatechange = null, window[t] = null, window.setTimeout(function() {
                        try {
                            e.parentNode.removeChild(e)
                        } catch (t) {}
                    }, 10)
                }, e.prototype.__onSuccess = function(e) {
                    this._teardown();
                    var t = this.element,
                        n = this._prop.onLoad;
                    t.onreadystatechange && (t.onreadystatechange = null), n && n(e)
                }, e.prototype.__onTimeout = function() {
                    this._teardown();
                    var e = this._prop.onTimeout;
                    e && e()
                }, e.prototype.__onError = function() {
                    this._teardown();
                    var e = this._prop.onError;
                    e && e()
                }, e
            }();
        t["default"] = s
    }])
});