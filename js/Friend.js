<<<<<<< HEAD
! function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map((function (t) {
                var n = function (e, t) {
                    var n = e[1] || "",
                        r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var i = (a = r, s = btoa(unescape(encodeURIComponent(JSON.stringify(
                                    a)))), l =
                                "sourceMappingURL=data:application/json;charset=utf-8;base64,"
                                .concat(s), "/*# ".concat(l, " */")),
                            o = r.sources.map((function (e) {
                                return "/*# sourceURL=".concat(r.sourceRoot ||
                                    "").concat(e, " */")
                            }));
                        return [n].concat(o).concat([i]).join("\n")
                    }
                    var a, s, l;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
            })).join("")
        }, t.i = function (e, n, r) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var i = {};
            if (r)
                for (var o = 0; o < this.length; o++) {
                    var a = this[o][0];
                    null != a && (i[a] = !0)
                }
            for (var s = 0; s < e.length; s++) {
                var l = [].concat(e[s]);
                r && i[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(
                    l))
            }
        }, t
    }
}, function (e, t, n) {
    var r = n(2);
    ! function (e, t) {
        var i = function (e) {
            return new i.prototype.init(e)
        };
        i.prototype = {
            constructor: i,
            version: "2020-08-28 17:00:00",
            owner: "",
            repo: "",
            direction_sort: "desc",
            page: 1,
            per_page: 100,
            el: "",
            sort_container: [],
            text: [],
            labelDescr: {},
            init: function (e) {
                for (let t in e) this[t] = e[t];
                return console.log("\n %c OY CDNFriendTools" + this.version +
                        " %c https://oy6090.top \n",
                        "color: #fff; background: #4285f4; padding:5px 0;",
                        "background: #66CCFF; padding:5px 0;"), i.setHead(this), i.getPageFriend(this),
                    this
            }
        }, i.extend = i.prototype.extend = function (e) {
            for (var t in e) this[t] = e[t]
        }, i.extend({
            setHead: function (e) {
                i.loadingCss(), i.inserCSS()
            },
            loadingCss: function () {
                let e = document.createElement("style");
                e.innerHTML = n(3).default[0][1], document.head.appendChild(e)
            },
            inserCSS: function () {
                let e = document.createElement("style");
                e.innerHTML = n(4).default[0][1], document.head.appendChild(e)
            },
            loading: function (e) {
                r("" + e.el).html(
                    '<div class="loader"><svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle class="load one" cx="60" cy="60" r="40"></circle><circle class="load two" cx="60" cy="60" r="40"></circle><circle class="load three" cx="60" cy="60" r="40"></circle><g><circle class="point one" cx="45" cy="70" r="5"></circle><circle class="point two" cx="60" cy="70" r="5"></circle><circle class="point three" cx="75" cy="70" r="5"></circle></g></svg></div>'
                )
            },
            createContainer: function (e) {
                for (var t in e.sort_container) r("" + e.el).append(
                    `<h2 id=${e.sort_container[t]}>${e.sort_container[t]}</h2><div class="flink-desc"><h4>${e.sort_container[t]}</h4></div><div class="flink-list"></div>`
                )
            }
        }), i.extend({
            createFriend: function (e) {
                let t = "";
                var n = e.text;
                r(".loader").hide(), i.createContainer(e);
                for (let o in n) n[o].labels && (t = n[o].body, r("#" + n[o].labels).length ? r("#" +
                    n[o].labels).next().next().append(t) : r(e.el).append(
                    `<h2 id=${n[o].labels}>${n[o].labels}</h2><div class="flink-desc">${i.getLabelDescr(e,n[o].labels)}</div><div class="flink-list">` +
                    t + "</div>"))
            },
            getPageFriend: function (e) {
                i.loading(e), i.getFriends(e).then(() => i.createFriend(e))
            }
        }), i.extend({
            getFriends: function (e) {
                return r.ajax({
                    url: `https://gitee.com/api/v5/repos/${e.owner}/${e.repo}/issues?state=open&sort=created&direction=${e.direction_sort}&page=${e.page}&per_page=${e.per_page}`,
                    type: "get",
                    success: function (t, n, r) {
                        if (e.text = [], t)
                            for (let n in t) {
                                var o = {};
                                o.body = i.getBody(e, t[n].body), o.labels = i.getLabels(
                                    t[n].labels), e.text.push(o)
                            }
                    }
                })
            }
        }), i.extend({
            getBody: function (e, t) {
                let n = i.getInfo(e, t, "link"),
                    r = i.getInfo(e, t, "name"),
                    o = i.getInfo(e, t, "avatar"),
                    a = i.getInfo(e, t, "descr");
                return `<div class="flink-list-item" style="${i.getCustom(e,t)}"><a href="${n}" title="${r}" target="_blank"><img class="rauto" style="animation:${i.getImgCustom(e,t)}" data-lazy-src="${o}" onerror="this.onerror=null,this.src=&quot;https://cdn.jsdelivr.net/gh/blogimg/HexoStaticFile1/imgbed/2020/03/21/20200321213747.gif&quot;" alt="${r}" src="${o}"><span class="flink-item-name">${r}</span><span class="flink-item-desc" title="${a}">${a}</span></a></div>`
            },
            getLabels: function (e) {
                if (e.length) return e[0].name
            }
        }), i.extend({
            getLabelDescr: function (e, t) {
                let n = "";
                return e.labelDescr[t] && (n = e.labelDescr[t]), n
            },
            getInfo: function (e, t, n) {
                const r = new RegExp(String.raw `${n}:[^\n]*\n`),
                    i = new RegExp(String.raw `(${n}:[\s]*|[\r\n]*)`, "g");
                let o = "你写的好像不对哦！";
                return (t = t.match(r)) && t.length > 0 && (o = t[0].replace(i, "")), o
            },
            getCustom: function (e, t) {
                const n = ["--primary-color", "border-width", "border-style", "animation",
                    "background", "--primary-rotate"];
                let r = "";
                for (var o in n) {
                    var a = i.getInfo(e, t, n[o]);
                    "你写的好像不对哦！" !== a && (r += `${n[o]}:${a};`)
                }
                return r
            },
            getImgCustom: function (e, t) {
                const n = ["img_animation"];
                let r = "";
                for (var o in n) {
                    var a = i.getInfo(e, t, n[o]);
                    "你写的好像不对哦！" !== a && (r += a + ";")
                }
                return r
            }
        }), i.prototype.init.prototype = i.prototype, e.Friend = i
    }(window)
}, function (e, t, n) {
    var r;
    /*! jQuery v1.10.0 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
    //@ sourceMappingURL=jquery.min.map
    */
    ! function (n, i) {
        var o, a, s = typeof i,
            l = n.location,
            u = n.document,
            c = u.documentElement,
            f = n.jQuery,
            p = n.$,
            d = {},
            h = [],
            m = "1.10.0",
            g = h.concat,
            y = h.push,
            v = h.slice,
            b = h.indexOf,
            x = d.toString,
            w = d.hasOwnProperty,
            T = m.trim,
            k = function (e, t) {
                return new k.fn.init(e, t, a)
            },
            C = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            N = /\S+/g,
            E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            j = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            A = /^[\],:{}\s]*$/,
            D = /(?:^|:|,)(?:\s*\[)+/g,
            L = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            H = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            _ = /^-ms-/,
            F = /-([\da-z])/gi,
            q = function (e, t) {
                return t.toUpperCase()
            },
            M = function (e) {
                (u.addEventListener || "load" === e.type || "complete" === u.readyState) && (O(), k.ready())
            },
            O = function () {
                u.addEventListener ? (u.removeEventListener("DOMContentLoaded", M, !1), n.removeEventListener(
                    "load", M, !1)) : (u.detachEvent("onreadystatechange", M), n.detachEvent("onload", M))
            };
        function $(e) {
            var t = e.length,
                n = k.type(e);
            return !k.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 ===
                t || "number" == typeof t && t > 0 && t - 1 in e)))
        }
        k.fn = k.prototype = {
                jquery: m,
                constructor: k,
                init: function (e, t, n) {
                    var r, o;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [
                                null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n)
                            .find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ?
                                    t.ownerDocument || t : u, !0)), j.test(r[1]) && k.isPlainObject(t))
                                for (r in t) k.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        if ((o = u.getElementById(r[2])) && o.parentNode) {
                            if (o.id !== r[2]) return n.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = u, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : k.isFunction(
                        e) ? n.ready(e) : (e.selector !== i && (this.selector = e.selector, this.context =
                        e.context), k.makeArray(e, this))
                },
                selector: "",
                length: 0,
                toArray: function () {
                    return v.call(this)
                },
                get: function (e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function (e) {
                    var t = k.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function (e, t) {
                    return k.each(this, e, t)
                },
                ready: function (e) {
                    return k.ready.promise().done(e), this
                },
                slice: function () {
                    return this.pushStack(v.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                map: function (e) {
                    return this.pushStack(k.map(this, (function (t, n) {
                        return e.call(t, n, t)
                    })))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: y,
                sort: [].sort,
                splice: [].splice
            }, k.fn.init.prototype = k.fn, k.extend = k.fn.extend = function () {
                var e, t, n, r, o, a, s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || k
                    .isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
                    if (null != (o = arguments[l]))
                        for (r in o) e = s[r], s !== (n = o[r]) && (c && n && (k.isPlainObject(n) || (t = k.isArray(
                            n))) ? (t ? (t = !1, a = e && k.isArray(e) ? e : []) : a = e && k.isPlainObject(
                            e) ? e : {}, s[r] = k.extend(c, a, n)) : n !== i && (s[r] = n));
                return s
            }, k.extend({
                expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
                noConflict: function (e) {
                    return n.$ === k && (n.$ = p), e && n.jQuery === k && (n.jQuery = f), k
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? k.readyWait++ : k.ready(!0)
                },
                ready: function (e) {
                    if (!0 === e ? !--k.readyWait : !k.isReady) {
                        if (!u.body) return setTimeout(k.ready);
                        k.isReady = !0, !0 !== e && --k.readyWait > 0 || (o.resolveWith(u, [k]), k.fn.trigger &&
                            k(u).trigger("ready").off("ready"))
                    }
                },
                isFunction: function (e) {
                    return "function" === k.type(e)
                },
                isArray: Array.isArray || function (e) {
                    return "array" === k.type(e)
                },
                isWindow: function (e) {
                    return null != e && e == e.window
                },
                isNumeric: function (e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[x.call(
                        e)] || "object" : typeof e
                },
                isPlainObject: function (e) {
                    var t;
                    if (!e || "object" !== k.type(e) || e.nodeType || k.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !w.call(e, "constructor") && !w.call(e.constructor.prototype,
                                "isPrototypeOf")) return !1
                    } catch (e) {
                        return !1
                    }
                    if (k.support.ownLast)
                        for (t in e) return w.call(e, t);
                    for (t in e);
                    return t === i || w.call(e, t)
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function (e) {
                    throw Error(e)
                },
                parseHTML: function (e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1), t = t || u;
                    var r = j.exec(e),
                        i = !n && [];
                    return r ? [t.createElement(r[1])] : (r = k.buildFragment([e], t, i), i && k(i).remove(),
                        k.merge([], r.childNodes))
                },
                parseJSON: function (e) {
                    return n.JSON && n.JSON.parse ? n.JSON.parse(e) : null === e ? e : "string" ==
                        typeof e && ((e = k.trim(e)) && A.test(e.replace(L, "@").replace(H, "]").replace(
                            D, ""))) ? Function("return " + e)() : (k.error("Invalid JSON: " + e), i)
                },
                parseXML: function (e) {
                    var t;
                    if (!e || "string" != typeof e) return null;
                    try {
                        n.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject(
                            "Microsoft.XMLDOM")).async = "false", t.loadXML(e))
                    } catch (e) {
                        t = i
                    }
                    return t && t.documentElement && !t.getElementsByTagName("parsererror").length || k
                        .error("Invalid XML: " + e), t
                },
                noop: function () {},
                globalEval: function (e) {
                    e && k.trim(e) && (n.execScript || function (e) {
                        n.eval.call(n, e)
                    })(e)
                },
                camelCase: function (e) {
                    return e.replace(_, "ms-").replace(F, q)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function (e, t, n) {
                    var r = 0,
                        i = e.length,
                        o = $(e);
                    if (n) {
                        if (o)
                            for (; i > r && !1 !== t.apply(e[r], n); r++);
                        else
                            for (r in e)
                                if (!1 === t.apply(e[r], n)) break
                    } else if (o)
                        for (; i > r && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                trim: T && !T.call("\ufeff ") ? function (e) {
                    return null == e ? "" : T.call(e)
                } : function (e) {
                    return null == e ? "" : (e + "").replace(E, "")
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && ($(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : y.call(
                        n, e)), n
                },
                inArray: function (e, t, n) {
                    var r;
                    if (t) {
                        if (b) return b.call(t, e, n);
                        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function (e, t) {
                    var n = t.length,
                        r = e.length,
                        o = 0;
                    if ("number" == typeof n)
                        for (; n > o; o++) e[r++] = t[o];
                    else
                        for (; t[o] !== i;) e[r++] = t[o++];
                    return e.length = r, e
                },
                grep: function (e, t, n) {
                    var r = [],
                        i = 0,
                        o = e.length;
                    for (n = !!n; o > i; i++) n !== !!t(e[i], i) && r.push(e[i]);
                    return r
                },
                map: function (e, t, n) {
                    var r, i = 0,
                        o = e.length,
                        a = [];
                    if ($(e))
                        for (; o > i; i++) null != (r = t(e[i], i, n)) && (a[a.length] = r);
                    else
                        for (i in e) null != (r = t(e[i], i, n)) && (a[a.length] = r);
                    return g.apply([], a)
                },
                guid: 1,
                proxy: function (e, t) {
                    var n, r, o;
                    return "string" == typeof t && (o = e[t], t = e, e = o), k.isFunction(e) ? (n = v.call(
                        arguments, 2), (r = function () {
                        return e.apply(t || this, n.concat(v.call(arguments)))
                    }).guid = e.guid = e.guid || k.guid++, r) : i
                },
                access: function (e, t, n, r, o, a, s) {
                    var l = 0,
                        u = e.length,
                        c = null == n;
                    if ("object" === k.type(n))
                        for (l in o = !0, n) k.access(e, t, l, n[l], !0, a, s);
                    else if (r !== i && (o = !0, k.isFunction(r) || (s = !0), c && (s ? (t.call(e, r),
                            t = null) : (c = t, t = function (e, t, n) {
                            return c.call(k(e), n)
                        })), t))
                        for (; u > l; l++) t(e[l], n, s ? r : r.call(e[l], l, t(e[l], n)));
                    return o ? e : c ? t.call(e) : u ? t(e[0], n) : a
                },
                now: function () {
                    return (new Date).getTime()
                },
                swap: function (e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                    return i
                }
            }), k.ready.promise = function (e) {
                if (!o)
                    if (o = k.Deferred(), "complete" === u.readyState) setTimeout(k.ready);
                    else if (u.addEventListener) u.addEventListener("DOMContentLoaded", M, !1), n.addEventListener(
                    "load", M, !1);
                else {
                    u.attachEvent("onreadystatechange", M), n.attachEvent("onload", M);
                    var t = !1;
                    try {
                        t = null == n.frameElement && u.documentElement
                    } catch (e) {}
                    t && t.doScroll && function e() {
                        if (!k.isReady) {
                            try {
                                t.doScroll("left")
                            } catch (t) {
                                return setTimeout(e, 50)
                            }
                            O(), k.ready()
                        }
                    }()
                }
                return o.promise(e)
            }, k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function (e,
                t) {
                d["[object " + t + "]"] = t.toLowerCase()
            })), a = k(u),
            function (e, t) {
                var n, r, i, o, a, s, l, u, c, f, p, d, h, m, g, y, v, b = "sizzle" + -new Date,
                    x = e.document,
                    w = 0,
                    T = 0,
                    C = ae(),
                    N = ae(),
                    E = ae(),
                    S = !1,
                    j = function () {
                        return 0
                    },
                    A = typeof t,
                    D = {}.hasOwnProperty,
                    L = [],
                    H = L.pop,
                    _ = L.push,
                    F = L.push,
                    q = L.slice,
                    M = L.indexOf || function (e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    O =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    $ = "[\\x20\\t\\r\\n\\f]",
                    P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    B = P.replace("w", "w#"),
                    R = "\\[" + $ + "*(" + P + ")" + $ + "*(?:([*^$|!~]?=)" + $ +
                    "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + B + ")|)|)" + $ + "*\\]",
                    W = ":(" + P + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + R.replace(
                        3, 8) + ")*)|.*)\\)|)",
                    I = RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"),
                    z = RegExp("^" + $ + "*," + $ + "*"),
                    X = RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
                    U = RegExp($ + "*[+~]"),
                    Y = RegExp("=" + $ + "*([^\\]'\"]*)" + $ + "*\\]", "g"),
                    V = RegExp(W),
                    J = RegExp("^" + B + "$"),
                    G = {
                        ID: RegExp("^#(" + P + ")"),
                        CLASS: RegExp("^\\.(" + P + ")"),
                        TAG: RegExp("^(" + P.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + R),
                        PSEUDO: RegExp("^" + W),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ +
                            "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ +
                            "*\\)|)", "i"),
                        bool: RegExp("^(?:" + O + ")$", "i"),
                        needsContext: RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ +
                            "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i")
                    },
                    K = /^[^{]+\{\s*\[native \w/,
                    Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Z = /^(?:input|select|textarea|button)$/i,
                    ee = /^h\d$/i,
                    te = /'|\\/g,
                    ne = RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)", "ig"),
                    re = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(
                            55296 | r >> 10, 56320 | 1023 & r)
                    };
                try {
                    F.apply(L = q.call(x.childNodes), x.childNodes), L[x.childNodes.length].nodeType
                } catch (e) {
                    F = {
                        apply: L.length ? function (e, t) {
                            _.apply(e, q.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                function ie(e, t, n, i) {
                    var o, a, s, l, u, c, d, g, y, w;
                    if ((t ? t.ownerDocument || t : x) !== p && f(t), n = n || [], !e || "string" != typeof e)
                        return n;
                    if (1 !== (l = (t = t || p).nodeType) && 9 !== l) return [];
                    if (h && !i) {
                        if (o = Q.exec(e))
                            if (s = o[1]) {
                                if (9 === l) {
                                    if (!(a = t.getElementById(s)) || !a.parentNode) return n;
                                    if (a.id === s) return n.push(a), n
                                } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) &&
                                    a.id === s) return n.push(a), n
                            } else {
                                if (o[2]) return F.apply(n, t.getElementsByTagName(e)), n;
                                if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return F
                                    .apply(n, t.getElementsByClassName(s)), n
                            } if (r.qsa && (!m || !m.test(e))) {
                            if (g = d = b, y = t, w = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                                for (c = ye(e), (d = t.getAttribute("id")) ? g = d.replace(te, "\\$&") : t.setAttribute(
                                        "id", g), g = "[id='" + g + "'] ", u = c.length; u--;) c[u] = g + ve(c[
                                    u]);
                                y = U.test(e) && t.parentNode || t, w = c.join(",")
                            }
                            if (w) try {
                                return F.apply(n, y.querySelectorAll(w)), n
                            } catch (e) {} finally {
                                d || t.removeAttribute("id")
                            }
                        }
                    }
                    return Ne(e.replace(I, "$1"), t, n, i)
                }
                function oe(e) {
                    return K.test(e + "")
                }
                function ae() {
                    var e = [];
                    return function t(n, r) {
                        return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
                    }
                }
                function se(e) {
                    return e[b] = !0, e
                }
                function le(e) {
                    var t = p.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }
                function ue(e, t, n) {
                    for (var r, i = (e = e.split("|")).length, a = n ? null : t; i--;)(r = o.attrHandle[e[i]]) &&
                        r !== t || (o.attrHandle[e[i]] = a)
                }
                function ce(e, t) {
                    var n = e.getAttributeNode(t);
                    return n && n.specified ? n.value : !0 === e[t] ? t.toLowerCase() : null
                }
                function fe(e, t) {
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }
                function pe(e) {
                    return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
                }
                function de(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex ||
                            1 << 31);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }
                function he(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }
                function me(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function ge(e) {
                    return se((function (t) {
                        return t = +t, se((function (n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i =
                                o[a]] && (n[i] = !(r[i] = n[i]))
                        }))
                    }))
                }
                for (n in s = ie.isXML = function (e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, r = ie.support = {}, f = ie.setDocument = function (e) {
                        var n = e ? e.ownerDocument || e : x;
                        return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, d = n.documentElement,
                            h = !s(n), r.attributes = le((function (e) {
                                return e.innerHTML = "<a href='#'></a>", ue(
                                        "type|href|height|width", fe, "#" === e.firstChild.getAttribute(
                                            "href")), ue(O, ce, null == e.getAttribute("disabled")),
                                    e.className = "i", !e.getAttribute("className")
                            })), r.input = le((function (e) {
                                return e.innerHTML = "<input>", e.firstChild.setAttribute("value",
                                    ""), "" === e.firstChild.getAttribute("value")
                            })), ue("value", pe, r.attributes && r.input), r.getElementsByTagName = le((
                                function (e) {
                                    return e.appendChild(n.createComment("")), !e.getElementsByTagName(
                                        "*").length
                                })), r.getElementsByClassName = le((function (e) {
                                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                                    e.firstChild.className = "i", 2 === e.getElementsByClassName(
                                        "i").length
                            })), r.getById = le((function (e) {
                                return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(
                                    b).length
                            })), r.getById ? (o.find.ID = function (e, t) {
                                if (typeof t.getElementById !== A && h) {
                                    var n = t.getElementById(e);
                                    return n && n.parentNode ? [n] : []
                                }
                            }, o.filter.ID = function (e) {
                                var t = e.replace(ne, re);
                                return function (e) {
                                    return e.getAttribute("id") === t
                                }
                            }) : (delete o.find.ID, o.filter.ID = function (e) {
                                var t = e.replace(ne, re);
                                return function (e) {
                                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode(
                                        "id");
                                    return n && n.value === t
                                }
                            }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
                                return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
                            } : function (e, t) {
                                var n, r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                    return r
                                }
                                return o
                            }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
                                return typeof n.getElementsByClassName !== A && h ? n.getElementsByClassName(
                                    e) : t
                            }, g = [], m = [], (r.qsa = oe(n.querySelectorAll)) && (le((function (e) {
                                e.innerHTML = "<select><option selected=''></option></select>",
                                    e.querySelectorAll("[selected]").length || m.push("\\[" + $ +
                                        "*(?:value|" + O + ")"), e.querySelectorAll(":checked")
                                    .length || m.push(":checked")
                            })), le((function (e) {
                                var t = n.createElement("input");
                                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute(
                                        "t", ""), e.querySelectorAll("[t^='']").length && m.push(
                                        "[*^$]=" + $ + "*(?:''|\"\")"), e.querySelectorAll(
                                        ":enabled").length || m.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"), m.push(",.*:")
                            }))), (r.matchesSelector = oe(y = d.webkitMatchesSelector || d.mozMatchesSelector ||
                                d.oMatchesSelector || d.msMatchesSelector)) && le((function (e) {
                                r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push(
                                    "!=", W)
                            })), m = m.length && RegExp(m.join("|")), g = g.length && RegExp(g.join("|")),
                            v = oe(d.contains) || d.compareDocumentPosition ? function (e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) :
                                    e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                            } : function (e, t) {
                                if (t)
                                    for (; t = t.parentNode;)
                                        if (t === e) return !0;
                                return !1
                            }, r.sortDetached = le((function (e) {
                                return 1 & e.compareDocumentPosition(n.createElement("div"))
                            })), j = d.compareDocumentPosition ? function (e, t) {
                                if (e === t) return S = !0, 0;
                                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(
                                    t);
                                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ?
                                    e === n || v(x, e) ? -1 : t === n || v(x, t) ? 1 : c ? M.call(c, e) - M
                                    .call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                            } : function (e, t) {
                                var r, i = 0,
                                    o = e.parentNode,
                                    a = t.parentNode,
                                    s = [e],
                                    l = [t];
                                if (e === t) return S = !0, 0;
                                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? M.call(
                                    c, e) - M.call(c, t) : 0;
                                if (o === a) return de(e, t);
                                for (r = e; r = r.parentNode;) s.unshift(r);
                                for (r = t; r = r.parentNode;) l.unshift(r);
                                for (; s[i] === l[i];) i++;
                                return i ? de(s[i], l[i]) : s[i] === x ? -1 : l[i] === x ? 1 : 0
                            }, n) : p
                    }, ie.matches = function (e, t) {
                        return ie(e, null, null, t)
                    }, ie.matchesSelector = function (e, t) {
                        if ((e.ownerDocument || e) !== p && f(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector ||
                                !h || g && g.test(t) || m && m.test(t))) try {
                            var n = y.call(e, t);
                            if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                        } catch (e) {}
                        return ie(t, p, null, [e]).length > 0
                    }, ie.contains = function (e, t) {
                        return (e.ownerDocument || e) !== p && f(e), v(e, t)
                    }, ie.attr = function (e, n) {
                        (e.ownerDocument || e) !== p && f(e);
                        var i = o.attrHandle[n.toLowerCase()],
                            a = i && D.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
                        return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) &&
                            a.specified ? a.value : null : a
                    }, ie.error = function (e) {
                        throw Error("Syntax error, unrecognized expression: " + e)
                    }, ie.uniqueSort = function (e) {
                        var t, n = [],
                            i = 0,
                            o = 0;
                        if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(j), S) {
                            for (; t = e[o++];) t === e[o] && (i = n.push(o));
                            for (; i--;) e.splice(n[i], 1)
                        }
                        return e
                    }, a = ie.getText = function (e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r]; r++) n += a(t);
                        return n
                    }, o = ie.selectors = {
                        cacheLength: 50,
                        createPseudo: se,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(ne, re), e[3] = (e[4] || e[5] || "").replace(ne,
                                    re), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(
                                        e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] ||
                                        "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] &&
                                    ie.error(e[0]), e
                            },
                            PSEUDO: function (e) {
                                var n, r = !e[5] && e[2];
                                return G.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r &&
                                    V.test(r) && (n = ye(r, !0)) && (n = r.indexOf(")", r.length - n) -
                                        r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e
                                    .slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(ne, re).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function (e) {
                                var t = C[e + " "];
                                return t || (t = RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && C(e, (
                                    function (e) {
                                        return t.test("string" == typeof e.className && e.className ||
                                            typeof e.getAttribute !== A && e.getAttribute(
                                                "class") || "")
                                    }))
                            },
                            ATTR: function (e, t, n) {
                                return function (r) {
                                    var i = ie.attr(r, e);
                                    return null == i ? "!=" === t : !t || (i += "", "=" === t ? i ===
                                        n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(
                                            n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ?
                                        n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ")
                                        .indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length +
                                            1) === n + "-"))
                                }
                            },
                            CHILD: function (e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === i ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, l) {
                                    var u, c, f, p, d, h, m = o !== a ? "nextSibling" :
                                        "previousSibling",
                                        g = t.parentNode,
                                        y = s && t.nodeName.toLowerCase(),
                                        v = !l && !s;
                                    if (g) {
                                        if (o) {
                                            for (; m;) {
                                                for (f = t; f = f[m];)
                                                    if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType)
                                                        return !1;
                                                h = m = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? g.firstChild : g.lastChild], a && v) {
                                            for (d = (u = (c = g[b] || (g[b] = {}))[e] || [])[0] === w &&
                                                u[1], p = u[0] === w && u[2], f = d && g.childNodes[d]; f = ++
                                                d && f && f[m] || (p = d = 0) || h.pop();)
                                                if (1 === f.nodeType && ++p && f === t) {
                                                    c[e] = [w, d, p];
                                                    break
                                                }
                                        } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === w) p =
                                            u[1];
                                        else
                                            for (;
                                                (f = ++d && f && f[m] || (p = d = 0) || h.pop()) && ((s ?
                                                    f.nodeName.toLowerCase() !== y : 1 !== f.nodeType
                                                ) || !++p || (v && ((f[b] || (f[b] = {}))[e] = [w,
                                                    p]), f !== t)););
                                        return (p -= i) === r || 0 == p % r && p / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function (e, t) {
                                var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || ie.error(
                                    "unsupported pseudo: " + e);
                                return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(
                                    e.toLowerCase()) ? se((function (e, n) {
                                    for (var i, o = r(e, t), a = o.length; a--;) e[i = M.call(
                                        e, o[a])] = !(n[i] = o[a])
                                })) : function (e) {
                                    return r(e, 0, n)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: se((function (e) {
                                var t = [],
                                    n = [],
                                    r = l(e.replace(I, "$1"));
                                return r[b] ? se((function (e, t, n, i) {
                                    for (var o, a = r(e, null, i, []), s = e.length; s--;)
                                        (o = a[s]) && (e[s] = !(t[s] = o))
                                })) : function (e, i, o) {
                                    return t[0] = e, r(t, null, o, n), !n.pop()
                                }
                            })),
                            has: se((function (e) {
                                return function (t) {
                                    return ie(e, t).length > 0
                                }
                            })),
                            contains: se((function (e) {
                                return function (t) {
                                    return (t.textContent || t.innerText || a(t)).indexOf(e) >
                                        -1
                                }
                            })),
                            lang: se((function (e) {
                                return J.test(e || "") || ie.error("unsupported lang: " + e), e = e
                                    .replace(ne, re).toLowerCase(),
                                    function (t) {
                                        var n;
                                        do {
                                            if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute(
                                                    "lang")) return (n = n.toLowerCase()) === e ||
                                                0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            })),
                            target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function (e) {
                                return e === d
                            },
                            focus: function (e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type ||
                                    e.href || ~e.tabIndex)
                            },
                            enabled: function (e) {
                                return !1 === e.disabled
                            },
                            disabled: function (e) {
                                return !0 === e.disabled
                            },
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                                return !0
                            },
                            parent: function (e) {
                                return !o.pseudos.empty(e)
                            },
                            header: function (e) {
                                return ee.test(e.nodeName)
                            },
                            input: function (e) {
                                return Z.test(e.nodeName)
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null ==
                                    (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                            },
                            first: ge((function () {
                                return [0]
                            })),
                            last: ge((function (e, t) {
                                return [t - 1]
                            })),
                            eq: ge((function (e, t, n) {
                                return [0 > n ? n + t : n]
                            })),
                            even: ge((function (e, t) {
                                for (var n = 0; t > n; n += 2) e.push(n);
                                return e
                            })),
                            odd: ge((function (e, t) {
                                for (var n = 1; t > n; n += 2) e.push(n);
                                return e
                            })),
                            lt: ge((function (e, t, n) {
                                for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                                return e
                            })),
                            gt: ge((function (e, t, n) {
                                for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                                return e
                            }))
                        }
                    }, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) o.pseudos[n] = he(n);
                for (n in {
                        submit: !0,
                        reset: !0
                    }) o.pseudos[n] = me(n);
                function ye(e, t) {
                    var n, r, i, a, s, l, u, c = N[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, l = [], u = o.preFilter; s;) {
                        for (a in (!n || (r = z.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])),
                            n = !1, (r = X.exec(s)) && (n = r.shift(), i.push({
                                value: n,
                                type: r[0].replace(I, " ")
                            }), s = s.slice(n.length)), o.filter) !(r = G[a].exec(s)) || u[a] && !(r = u[a](r)) ||
                            (n = r.shift(), i.push({
                                value: n,
                                type: a,
                                matches: r
                            }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? ie.error(e) : N(e, l).slice(0)
                }
                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r
                }
                function be(e, t, n) {
                    var r = t.dir,
                        o = n && "parentNode" === r,
                        a = T++;
                    return t.first ? function (t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || o) return e(t, n, i)
                    } : function (t, n, s) {
                        var l, u, c, f = w + " " + a;
                        if (s) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || o)
                                    if ((u = (c = t[b] || (t[b] = {}))[r]) && u[0] === f) {
                                        if (!0 === (l = u[1]) || l === i) return !0 === l
                                    } else if ((u = c[r] = [f])[1] = e(t, n, s) || i, !0 === u[1]) return !
                            0
                    }
                }
                function xe(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }
                function we(e, t, n, r, i) {
                    for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o,
                        r, i)) && (a.push(o), u && t.push(s));
                    return a
                }
                function Te(e, t, n, r, i, o) {
                    return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se((function (o, a, s, l) {
                        var u, c, f, p = [],
                            d = [],
                            h = a.length,
                            m = o || function (e, t, n) {
                                for (var r = 0, i = t.length; i > r; r++) ie(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            g = !e || !o && t ? m : we(m, p, e, s, l),
                            y = n ? i || (o ? e : h || r) ? [] : a : g;
                        if (n && n(g, y, s, l), r)
                            for (u = we(y, d), r(u, [], s, l), c = u.length; c--;)(f = u[c]) && (y[
                                d[c]] = !(g[d[c]] = f));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (u = [], c = y.length; c--;)(f = y[c]) && u.push(g[c] = f);
                                    i(null, y = [], u, l)
                                }
                                for (c = y.length; c--;)(f = y[c]) && (u = i ? M.call(o, f) : p[c]) >
                                    -1 && (o[u] = !(a[u] = f))
                            }
                        } else y = we(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) :
                            F.apply(a, y)
                    }))
                }
                function ke(e) {
                    for (var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ?
                            1 : 0, c = be((function (e) {
                                return e === t
                            }), s, !0), f = be((function (e) {
                                return M.call(t, e) > -1
                            }), s, !0), p = [function (e, n, r) {
                                return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r))
                            }]; i > l; l++)
                        if (n = o.relative[e[l].type]) p = [be(xe(p), n)];
                        else {
                            if ((n = o.filter[e[l].type].apply(null, e[l].matches))[b]) {
                                for (r = ++l; i > r && !o.relative[e[r].type]; r++);
                                return Te(l > 1 && xe(p), l > 1 && ve(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(I, "$1"), n, r > l && ke(e.slice(l, r)), i > r && ke(e = e.slice(
                                    r)), i > r && ve(e))
                            }
                            p.push(n)
                        } return xe(p)
                }
                function Ce(e, t) {
                    var n = 0,
                        r = t.length > 0,
                        a = e.length > 0,
                        s = function (s, l, c, f, d) {
                            var h, m, g, y = [],
                                v = 0,
                                b = "0",
                                x = s && [],
                                T = null != d,
                                k = u,
                                C = s || a && o.find.TAG("*", d && l.parentNode || l),
                                N = w += null == k ? 1 : Math.random() || .1;
                            for (T && (u = l !== p && l, i = n); null != (h = C[b]); b++) {
                                if (a && h) {
                                    for (m = 0; g = e[m++];)
                                        if (g(h, l, c)) {
                                            f.push(h);
                                            break
                                        } T && (w = N, i = ++n)
                                }
                                r && ((h = !g && h) && v--, s && x.push(h))
                            }
                            if (v += b, r && b !== v) {
                                for (m = 0; g = t[m++];) g(x, y, l, c);
                                if (s) {
                                    if (v > 0)
                                        for (; b--;) x[b] || y[b] || (y[b] = H.call(f));
                                    y = we(y)
                                }
                                F.apply(f, y), T && !s && y.length > 0 && v + t.length > 1 && ie.uniqueSort(f)
                            }
                            return T && (w = N, u = k), x
                        };
                    return r ? se(s) : s
                }
                function Ne(e, t, n, i) {
                    var a, s, u, c, f, p = ye(e);
                    if (!i && 1 === p.length) {
                        if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (u = s[0]).type && r.getById && 9 ===
                            t.nodeType && h && o.relative[s[1].type]) {
                            if (!(t = (o.find.ID(u.matches[0].replace(ne, re), t) || [])[0])) return n;
                            e = e.slice(s.shift().value.length)
                        }
                        for (a = G.needsContext.test(e) ? 0 : s.length; a-- && (u = s[a], !o.relative[c = u.type]);)
                            if ((f = o.find[c]) && (i = f(u.matches[0].replace(ne, re), U.test(s[0].type) && t.parentNode ||
                                    t))) {
                                if (s.splice(a, 1), !(e = i.length && ve(s))) return F.apply(n, i), n;
                                break
                            }
                    }
                    return l(e, p)(i, t, !h, n, U.test(e)), n
                }
                function Ee() {}
                l = ie.compile = function (e, t) {
                        var n, r = [],
                            i = [],
                            o = E[e + " "];
                        if (!o) {
                            for (t || (t = ye(e)), n = t.length; n--;)(o = ke(t[n]))[b] ? r.push(o) : i.push(o);
                            o = E(e, Ce(i, r))
                        }
                        return o
                    }, o.pseudos.nth = o.pseudos.eq, Ee.prototype = o.filters = o.pseudos, o.setFilters = new Ee,
                    r.sortStable = b.split("").sort(j).join("") === b, f(), [0, 0].sort(j), r.detectDuplicates =
                    S, k.find = ie, k.expr = ie.selectors, k.expr[":"] = k.expr.pseudos, k.unique = ie.uniqueSort,
                    k.text = ie.getText, k.isXMLDoc = ie.isXML, k.contains = ie.contains
            }(n);
        var P = {};
        k.Callbacks = function (e) {
            e = "string" == typeof e ? P[e] || function (e) {
                var t = P[e] = {};
                return k.each(e.match(N) || [], (function (e, n) {
                    t[n] = !0
                })), t
            }(e) : k.extend({}, e);
            var t, n, r, o, a, s, l = [],
                u = !e.once && [],
                c = function (i) {
                    for (n = e.memory && i, r = !0, a = s || 0, s = 0, o = l.length, t = !0; l && o > a; a++)
                        if (!1 === l[a].apply(i[0], i[1]) && e.stopOnFalse) {
                            n = !1;
                            break
                        } t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : f.disable())
                },
                f = {
                    add: function () {
                        if (l) {
                            var r = l.length;
                            (function t(n) {
                                k.each(n, (function (n, r) {
                                    var i = k.type(r);
                                    "function" === i ? e.unique && f.has(r) || l.push(r) :
                                        r && r.length && "string" !== i && t(r)
                                }))
                            })(arguments), t ? o = l.length : n && (s = r, c(n))
                        }
                        return this
                    },
                    remove: function () {
                        return l && k.each(arguments, (function (e, n) {
                            for (var r;
                                (r = k.inArray(n, l, r)) > -1;) l.splice(r, 1), t && (o >=
                                r && o--, a >= r && a--)
                        })), this
                    },
                    has: function (e) {
                        return e ? k.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function () {
                        return l = [], o = 0, this
                    },
                    disable: function () {
                        return l = u = n = i, this
                    },
                    disabled: function () {
                        return !l
                    },
                    lock: function () {
                        return u = i, n || f.disable(), this
                    },
                    locked: function () {
                        return !u
                    },
                    fireWith: function (e, n) {
                        return n = [e, (n = n || []).slice ? n.slice() : n], !l || r && !u || (t ? u.push(
                            n) : c(n)), this
                    },
                    fire: function () {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!r
                    }
                };
            return f
        }, k.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", k.Callbacks("once memory"), "resolved"], ["reject",
                        "fail", k.Callbacks("once memory"), "rejected"], ["notify", "progress",
                        k.Callbacks("memory")]],
                    n = "pending",
                    r = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var e = arguments;
                            return k.Deferred((function (n) {
                                k.each(t, (function (t, o) {
                                    var a = o[0],
                                        s = k.isFunction(e[t]) && e[t];
                                    i[o[1]]((function () {
                                        var e = s && s.apply(
                                            this,
                                            arguments);
                                        e && k.isFunction(e
                                                .promise) ?
                                            e.promise().done(
                                                n.resolve).fail(
                                                n.reject).progress(
                                                n.notify) :
                                            n[a + "With"](
                                                this === r ?
                                                n.promise() :
                                                this, s ? [
                                                    e] :
                                                arguments)
                                    }))
                                })), e = null
                            })).promise()
                        },
                        promise: function (e) {
                            return null != e ? k.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, k.each(t, (function (e, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add((function () {
                        n = s
                    }), t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                        return i[o[0] + "With"](this === i ? r : this, arguments),
                            this
                    }, i[o[0] + "With"] = a.fireWith
                })), r.promise(i), e && e.call(i, i), i
            },
            when: function (e) {
                var t, n, r, i = 0,
                    o = v.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && k.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : k.Deferred(),
                    u = function (e, n, r) {
                        return function (i) {
                            n[e] = this, r[e] = arguments.length > 1 ? v.call(arguments) : i, r ===
                                t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                        }
                    };
                if (a > 1)
                    for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && k.isFunction(
                        o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(
                        u(i, n, t)) : --s;
                return s || l.resolveWith(r, o), l.promise()
            }
        }), k.support = function (e) {
            var t, r, i, o, a, l, c, f, p, d = u.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML =
                "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = d.getElementsByTagName(
                    "*") || [], !(r = d.getElementsByTagName("a")[0]) || !r.style || !t.length) return e;
            l = (o = u.createElement("select")).appendChild(u.createElement("option")), i = d.getElementsByTagName(
                    "input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !==
                d.className, e.leadingWhitespace = 3 === d.firstChild.nodeType, e.tbody = !d.getElementsByTagName(
                    "tbody").length, e.htmlSerialize = !!d.getElementsByTagName("link").length, e.style =
                /top/.test(r.getAttribute("style")), e.hrefNormalized = "/a" === r.getAttribute("href"), e.opacity =
                /^0.5/.test(r.style.opacity), e.cssFloat = !!r.style.cssFloat, e.checkOn = !!i.value, e.optSelected =
                l.selected, e.enctype = !!u.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !==
                u.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !
                1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !
                0, e.boxSizingReliable = !0, i.checked = !0, e.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !
                0, e.optDisabled = !l.disabled;
            try {
                delete d.test
            } catch (t) {
                e.deleteExpando = !1
            }
            for (p in (i = u.createElement("input")).setAttribute("value", ""), e.input = "" === i.getAttribute(
                    "value"), i.value = "t", i.setAttribute("type", "radio"), e.radioValue = "t" === i.value,
                i.setAttribute("checked", "t"), i.setAttribute("name", "t"), (a = u.createDocumentFragment())
                .appendChild(i), e.appendChecked = i.checked, e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild
                .checked, d.attachEvent && (d.attachEvent("onclick", (function () {
                    e.noCloneEvent = !1
                })), d.cloneNode(!0).click()), {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) d.setAttribute(c = "on" + p, "t"), e[p + "Bubbles"] = c in n || !1 === d.attributes[c].expando;
            for (p in d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle =
                "content-box" === d.style.backgroundClip, k(e)) break;
            return e.ownLast = "0" !== p, k((function () {
                var t, r, i, o =
                    "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    a = u.getElementsByTagName("body")[0];
                a && ((t = u.createElement("div")).style.cssText =
                    "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                    a.appendChild(t).appendChild(d), d.innerHTML =
                    "<table><tr><td></td><td>t</td></tr></table>", (i = d.getElementsByTagName(
                        "td"))[0].style.cssText =
                    "padding:0;margin:0;border:0;display:none", f = 0 === i[0].offsetHeight,
                    i[0].style.display = "", i[1].style.display = "none", e.reliableHiddenOffsets =
                    f && 0 === i[0].offsetHeight, d.innerHTML = "", d.style.cssText =
                    "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                    k.swap(a, null != a.style.zoom ? {
                        zoom: 1
                    } : {}, (function () {
                        e.boxSizing = 4 === d.offsetWidth
                    })), n.getComputedStyle && (e.pixelPosition = "1%" !== (n.getComputedStyle(
                            d, null) || {}).top, e.boxSizingReliable = "4px" === (n.getComputedStyle(
                            d, null) || {
                            width: "4px"
                        }).width, (r = d.appendChild(u.createElement("div"))).style.cssText =
                        d.style.cssText = o, r.style.marginRight = r.style.width = "0", d.style
                        .width = "1px", e.reliableMarginRight = !parseFloat((n.getComputedStyle(
                            r, null) || {}).marginRight)), typeof d.style.zoom !== s && (d.innerHTML =
                        "", d.style.cssText = o +
                        "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout =
                        3 === d.offsetWidth, d.style.display = "block", d.innerHTML =
                        "<div></div>", d.firstChild.style.width = "5px", e.shrinkWrapBlocks =
                        3 !== d.offsetWidth, e.inlineBlockNeedsLayout && (a.style.zoom = 1)
                    ), a.removeChild(t), t = d = i = r = null)
            })), t = o = a = l = r = i = null, e
        }({});
        var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            R = /([A-Z])/g;
        function W(e, t, n, r) {
            if (k.acceptData(e)) {
                var o, a, s = k.expando,
                    l = e.nodeType,
                    u = l ? k.cache : e,
                    c = l ? e[s] : e[s] && s;
                if (c && u[c] && (r || u[c].data) || n !== i || "string" != typeof t) return c || (c = l ? e[s] =
                        h.pop() || k.guid++ : s), u[c] || (u[c] = l ? {} : {
                        toJSON: k.noop
                    }), ("object" == typeof t || "function" == typeof t) && (r ? u[c] = k.extend(u[c], t) :
                        u[c].data = k.extend(u[c].data, t)), a = u[c], r || (a.data || (a.data = {}), a = a
                        .data), n !== i && (a[k.camelCase(t)] = n), "string" == typeof t ? null == (o = a[t]) &&
                    (o = a[k.camelCase(t)]) : o = a, o
            }
        }
        function I(e, t, n) {
            if (k.acceptData(e)) {
                var r, i, o = e.nodeType,
                    a = o ? k.cache : e,
                    s = o ? e[k.expando] : k.expando;
                if (a[s]) {
                    if (t && (r = n ? a[s] : a[s].data)) {
                        k.isArray(t) ? t = t.concat(k.map(t, k.camelCase)) : t in r ? t = [t] : t = (t = k.camelCase(
                            t)) in r ? [t] : t.split(" "), i = t.length;
                        for (; i--;) delete r[t[i]];
                        if (n ? !X(r) : !k.isEmptyObject(r)) return
                    }(n || (delete a[s].data, X(a[s]))) && (o ? k.cleanData([e], !0) : k.support.deleteExpando ||
                        a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }
        function z(e, t, n) {
            if (n === i && 1 === e.nodeType) {
                var r = "data-" + t.replace(R, "-$1").toLowerCase();
                if ("string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : B.test(
                            n) ? k.parseJSON(n) : n)
                    } catch (e) {}
                    k.data(e, t, n)
                } else n = i
            }
            return n
        }
        function X(e) {
            var t;
            for (t in e)
                if (("data" !== t || !k.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }
        k.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (e) {
                return !!(e = e.nodeType ? k.cache[e[k.expando]] : e[k.expando]) && !X(e)
            },
            data: function (e, t, n) {
                return W(e, t, n)
            },
            removeData: function (e, t) {
                return I(e, t)
            },
            _data: function (e, t, n) {
                return W(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return I(e, t, !0)
            },
            acceptData: function (e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
                var t = e.nodeName && k.noData[e.nodeName.toLowerCase()];
                return !t || !0 !== t && e.getAttribute("classid") === t
            }
        }), k.fn.extend({
            data: function (e, t) {
                var n, r, o = null,
                    a = 0,
                    s = this[0];
                if (e === i) {
                    if (this.length && (o = k.data(s), 1 === s.nodeType && !k._data(s,
                            "parsedAttrs"))) {
                        for (n = s.attributes; n.length > a; a++) 0 === (r = n[a].name).indexOf(
                            "data-") && z(s, r = k.camelCase(r.slice(5)), o[r]);
                        k._data(s, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each((function () {
                    k.data(this, e)
                })) : arguments.length > 1 ? this.each((function () {
                    k.data(this, e, t)
                })) : s ? z(s, e, k.data(s, e)) : null
            },
            removeData: function (e) {
                return this.each((function () {
                    k.removeData(this, e)
                }))
            }
        }), k.extend({
            queue: function (e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = k._data(e, t), n && (!r || k.isArray(n) ?
                    r = k._data(e, t, k.makeArray(n)) : r.push(n)), r || []) : i
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = k.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = k._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift(
                    "inprogress"), delete o.stop, i.call(e, (function () {
                    k.dequeue(e, t)
                }), o)), !r && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return k._data(e, n) || k._data(e, n, {
                    empty: k.Callbacks("once memory").add((function () {
                        k._removeData(e, t + "queue"), k._removeData(e, n)
                    }))
                })
            }
        }), k.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? k.queue(
                    this[0], e) : t === i ? this : this.each((function () {
                    var n = k.queue(this, e, t);
                    k._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && k.dequeue(
                        this, e)
                }))
            },
            dequeue: function (e) {
                return this.each((function () {
                    k.dequeue(this, e)
                }))
            },
            delay: function (e, t) {
                return e = k.fx && k.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t,
                    n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(r)
                    }
                }))
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, r = 1,
                    o = k.Deferred(),
                    a = this,
                    s = this.length,
                    l = function () {
                        --r || o.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (t = e, e = i), e = e || "fx"; s--;)(n = k._data(a[s],
                    e + "queueHooks")) && n.empty && (r++, n.empty.add(l));
                return l(), o.promise(t)
            }
        });
        var U, Y, V = /[\t\r\n\f]/g,
            J = /\r/g,
            G = /^(?:input|select|textarea|button|object)$/i,
            K = /^(?:a|area)$/i,
            Q = /^(?:checked|selected)$/i,
            Z = k.support.getSetAttribute,
            ee = k.support.input;
        k.fn.extend({
            attr: function (e, t) {
                return k.access(this, k.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each((function () {
                    k.removeAttr(this, e)
                }))
            },
            prop: function (e, t) {
                return k.access(this, k.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return e = k.propFix[e] || e, this.each((function () {
                    try {
                        this[e] = i, delete this[e]
                    } catch (e) {}
                }))
            },
            addClass: function (e) {
                var t, n, r, i, o, a = 0,
                    s = this.length,
                    l = "string" == typeof e && e;
                if (k.isFunction(e)) return this.each((function (t) {
                    k(this).addClass(e.call(this, t, this.className))
                }));
                if (l)
                    for (t = (e || "").match(N) || []; s > a; a++)
                        if (r = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className +
                                " ").replace(V, " ") : " ")) {
                            for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                            n.className = k.trim(r)
                        } return this
            },
            removeClass: function (e) {
                var t, n, r, i, o, a = 0,
                    s = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (k.isFunction(e)) return this.each((function (t) {
                    k(this).removeClass(e.call(this, t, this.className))
                }));
                if (l)
                    for (t = (e || "").match(N) || []; s > a; a++)
                        if (r = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className +
                                " ").replace(V, " ") : "")) {
                            for (o = 0; i = t[o++];)
                                for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ",
                                    " ");
                            n.className = e ? k.trim(r) : ""
                        } return this
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    r = "boolean" == typeof t;
                return k.isFunction(e) ? this.each((function (n) {
                    k(this).toggleClass(e.call(this, n, this.className, t), t)
                })) : this.each((function () {
                    if ("string" === n)
                        for (var i, o = 0, a = k(this), l = t, u = e.match(N) || []; i =
                            u[o++];) l = r ? l : !a.hasClass(i), a[l ? "addClass" :
                            "removeClass"](i);
                    else(n === s || "boolean" === n) && (this.className && k._data(this,
                            "__className__", this.className), this.className = this
                        .className || !1 === e ? "" : k._data(this, "__className__") ||
                        "")
                }))
            },
            hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(V, " ").indexOf(
                            t) >= 0) return !0;
                return !1
            },
            val: function (e) {
                var t, n, r, o = this[0];
                return arguments.length ? (r = k.isFunction(e), this.each((function (t) {
                        var o;
                        1 === this.nodeType && (null == (o = r ? e.call(this, t, k(this)
                                .val()) : e) ? o = "" : "number" == typeof o ? o +=
                            "" : k.isArray(o) && (o = k.map(o, (function (e) {
                                return null == e ? "" : e + ""
                            }))), (n = k.valHooks[this.type] || k.valHooks[this.nodeName
                                .toLowerCase()]) && "set" in n && n.set(this, o,
                                "value") !== i || (this.value = o))
                    }))) : o ? (n = k.valHooks[o.type] || k.valHooks[o.nodeName.toLowerCase()]) &&
                    "get" in n && (t = n.get(o, "value")) !== i ? t : "string" == typeof (t = o.value) ?
                    t.replace(J, "") : null == t ? "" : t : void 0
            }
        }), k.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = k.find.attr(e, "value");
                        return null != t ? t : e.text
                    }
                },
                select: {
                    get: function (e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type ||
                                0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s :
                                o ? i : 0; s > l; l++)
                            if (!(!(n = r[l]).selected && l !== i || (k.support.optDisabled ? n.disabled :
                                        null !== n.getAttribute("disabled")) || n.parentNode.disabled &&
                                    k.nodeName(n.parentNode, "optgroup"))) {
                                if (t = k(n).val(), o) return t;
                                a.push(t)
                            } return a
                    },
                    set: function (e, t) {
                        for (var n, r, i = e.options, o = k.makeArray(t), a = i.length; a--;)((r =
                            i[a]).selected = k.inArray(k(r).val(), o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            },
            attr: function (e, t, n) {
                var r, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === s ? k.prop(
                    e, t, n) : (1 === a && k.isXMLDoc(e) || (t = t.toLowerCase(), r = k.attrHooks[
                        t] || (k.expr.match.bool.test(t) ? Y : U)), n === i ? r && "get" in
                    r && null !== (o = r.get(e, t)) ? o : null == (o = k.find.attr(e, t)) ?
                    i : o : null !== n ? r && "set" in r && (o = r.set(e, n, t)) !== i ? o :
                    (e.setAttribute(t, n + ""), n) : (k.removeAttr(e, t), i))
            },
            removeAttr: function (e, t) {
                var n, r, i = 0,
                    o = t && t.match(N);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) r = k.propFix[n] || n, k.expr.match.bool.test(n) ? ee && Z ||
                        !Q.test(n) ? e[r] = !1 : e[k.camelCase("default-" + n)] = e[r] = !1 : k.attr(
                            e, n, ""), e.removeAttribute(Z ? n : r)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!k.support.radioValue && "radio" === t && k.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function (e, t, n) {
                var r, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !k.isXMLDoc(e)) && (t =
                    k.propFix[t] || t, o = k.propHooks[t]), n !== i ? o && "set" in o && (r =
                    o.set(e, n, t)) !== i ? r : e[t] = n : o && "get" in o && null !== (r =
                    o.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = k.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : G.test(e.nodeName) || K.test(e.nodeName) && e.href ?
                            0 : -1
                    }
                }
            }
        }), Y = {
            set: function (e, t, n) {
                return !1 === t ? k.removeAttr(e, n) : ee && Z || !Q.test(n) ? e.setAttribute(!Z && k.propFix[
                    n] || n, n) : e[k.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, k.each(k.expr.match.bool.source.match(/\w+/g), (function (e, t) {
            var n = k.expr.attrHandle[t] || k.find.attr;
            k.expr.attrHandle[t] = ee && Z || !Q.test(t) ? function (e, t, r) {
                var o = k.expr.attrHandle[t],
                    a = r ? i : (k.expr.attrHandle[t] = i) != n(e, t, r) ? t.toLowerCase() :
                    null;
                return k.expr.attrHandle[t] = o, a
            } : function (e, t, n) {
                return n ? i : e[k.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        })), ee && Z || (k.attrHooks.value = {
            set: function (e, t, n) {
                return k.nodeName(e, "input") ? (e.defaultValue = t, i) : U && U.set(e, t, n)
            }
        }), Z || (U = {
            set: function (e, t, n) {
                var r = e.getAttributeNode(n);
                return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t +=
                    "", "value" === n || t === e.getAttribute(n) ? t : i
            }
        }, k.expr.attrHandle.id = k.expr.attrHandle.name = k.expr.attrHandle.coords = function (e, t, n) {
            var r;
            return n ? i : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
        }, k.valHooks.button = {
            get: function (e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : i
            },
            set: U.set
        }, k.attrHooks.contenteditable = {
            set: function (e, t, n) {
                U.set(e, "" !== t && t, n)
            }
        }, k.each(["width", "height"], (function (e, t) {
            k.attrHooks[t] = {
                set: function (e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : i
                }
            }
        }))), k.support.hrefNormalized || k.each(["href", "src"], (function (e, t) {
            k.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        })), k.support.style || (k.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || i
            },
            set: function (e, t) {
                return e.style.cssText = t + ""
            }
        }), k.support.optSelected || (k.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan",
            "useMap", "frameBorder", "contentEditable"], (function () {
            k.propFix[this.toLowerCase()] = this
        })), k.support.enctype || (k.propFix.enctype = "encoding"), k.each(["radio", "checkbox"], (function () {
            k.valHooks[this] = {
                set: function (e, t) {
                    return k.isArray(t) ? e.checked = k.inArray(k(e).val(), t) >= 0 : i
                }
            }, k.support.checkOn || (k.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }));
        var te = /^(?:input|select|textarea)$/i,
            ne = /^key/,
            re = /^(?:mouse|contextmenu)|click/,
            ie = /^(?:focusinfocus|focusoutblur)$/,
            oe = /^([^.]*)(?:\.(.+)|)$/;
        function ae() {
            return !0
        }
        function se() {
            return !1
        }
        function le() {
            try {
                return u.activeElement
            } catch (e) {}
        }
        k.event = {
            global: {},
            add: function (e, t, n, r, o) {
                var a, l, u, c, f, p, d, h, m, g, y, v = k._data(e);
                if (v) {
                    for (n.handler && (n = (c = n).handler, o = c.selector), n.guid || (n.guid = k.guid++),
                        (l = v.events) || (l = v.events = {}), (p = v.handle) || ((p = v.handle =
                            function (e) {
                                return typeof k === s || e && k.event.triggered === e.type ? i : k.event
                                    .dispatch.apply(p.elem, arguments)
                            }).elem = e), u = (t = (t || "").match(N) || [""]).length; u--;) m = y = (a =
                        oe.exec(t[u]) || [])[1], g = (a[2] || "").split(".").sort(), m && (f = k.event
                        .special[m] || {}, m = (o ? f.delegateType : f.bindType) || m, f = k.event.special[
                            m] || {}, d = k.extend({
                            type: m,
                            origType: y,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && k.expr.match.needsContext.test(o),
                            namespace: g.join(".")
                        }, c), (h = l[m]) || ((h = l[m] = []).delegateCount = 0, f.setup && !1 !==
                            f.setup.call(e, r, g, p) || (e.addEventListener ? e.addEventListener(m,
                                p, !1) : e.attachEvent && e.attachEvent("on" + m, p))), f.add && (f
                            .add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? h.splice(
                            h.delegateCount++, 0, d) : h.push(d), k.event.global[m] = !0);
                    e = null
                }
            },
            remove: function (e, t, n, r, i) {
                var o, a, s, l, u, c, f, p, d, h, m, g = k.hasData(e) && k._data(e);
                if (g && (c = g.events)) {
                    for (u = (t = (t || "").match(N) || [""]).length; u--;)
                        if (d = m = (s = oe.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                            for (f = k.event.special[d] || {}, p = c[d = (r ? f.delegateType : f.bindType) ||
                                    d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") +
                                    "(\\.|$)"), l = o = p.length; o--;) a = p[o], !i && m !== a.origType ||
                                n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector &&
                                ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, a));
                            l && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) ||
                                k.removeEvent(e, d, g.handle), delete c[d])
                        } else
                            for (d in c) k.event.remove(e, d + t[u], n, r, !0);
                    k.isEmptyObject(c) && (delete g.handle, k._removeData(e, "events"))
                }
            },
            trigger: function (e, t, r, o) {
                var a, s, l, c, f, p, d, h = [r || u],
                    m = w.call(e, "type") ? e.type : e,
                    g = w.call(e, "namespace") ? e.namespace.split(".") : [];
                if (l = p = r = r || u, 3 !== r.nodeType && 8 !== r.nodeType && !ie.test(m + k.event.triggered) &&
                    (m.indexOf(".") >= 0 && (g = m.split("."), m = g.shift(), g.sort()), s = 0 > m.indexOf(
                            ":") && "on" + m, (e = e[k.expando] ? e : new k.Event(m, "object" == typeof e &&
                            e)).isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.namespace_re = e.namespace ?
                        RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = i, e
                        .target || (e.target = r), t = null == t ? [e] : k.makeArray(t, [e]), f = k.event
                        .special[m] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                    if (!o && !f.noBubble && !k.isWindow(r)) {
                        for (c = f.delegateType || m, ie.test(c + m) || (l = l.parentNode); l; l = l.parentNode)
                            h.push(l), p = l;
                        p === (r.ownerDocument || u) && h.push(p.defaultView || p.parentWindow || n)
                    }
                    for (d = 0;
                        (l = h[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? c : f.bindType ||
                        m, (a = (k._data(l, "events") || {})[e.type] && k._data(l, "handle")) && a.apply(
                            l, t), (a = s && l[s]) && k.acceptData(l) && a.apply && !1 === a.apply(l, t) &&
                        e.preventDefault();
                    if (e.type = m, !o && !e.isDefaultPrevented() && (!f._default || !1 === f._default.apply(
                            h.pop(), t)) && k.acceptData(r) && s && r[m] && !k.isWindow(r)) {
                        (p = r[s]) && (r[s] = null), k.event.triggered = m;
                        try {
                            r[m]()
                        } catch (e) {}
                        k.event.triggered = i, p && (r[s] = p)
                    }
                    return e.result
                }
            },
            dispatch: function (e) {
                e = k.event.fix(e);
                var t, n, r, o, a, s = [],
                    l = v.call(arguments),
                    u = (k._data(this, "events") || {})[e.type] || [],
                    c = k.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this,
                        e)) {
                    for (s = k.event.handlers.call(this, e, u), t = 0;
                        (o = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, a = 0;
                            (r = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re ||
                            e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data,
                            (n = ((k.event.special[r.origType] || {}).handle || r.handler).apply(o.elem,
                                l)) !== i && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation())
                        );
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, r, o, a, s = [],
                    l = t.delegateCount,
                    u = e.target;
                if (l && u.nodeType && (!e.button || "click" !== e.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                            for (o = [], a = 0; l > a; a++) o[n = (r = t[a]).selector + " "] === i && (
                                o[n] = r.needsContext ? k(n, this).index(u) >= 0 : k.find(n, this,
                                    null, [u]).length), o[n] && o.push(r);
                            o.length && s.push({
                                elem: u,
                                handlers: o
                            })
                        } return t.length > l && s.push({
                    elem: this,
                    handlers: t.slice(l)
                }), s
            },
            fix: function (e) {
                if (e[k.expando]) return e;
                var t, n, r, i = e.type,
                    o = e,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = re.test(i) ? this.mouseHooks : ne.test(i) ? this.keyHooks :
                        {}), r = a.props ? this.props.concat(a.props) : this.props, e = new k.Event(o),
                    t = r.length; t--;) e[n = r[t]] = o[n];
                return e.target || (e.target = o.srcElement || u), 3 === e.target.nodeType && (e.target =
                    e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
                .split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                        e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
                    .split(" "),
                filter: function (e, t) {
                    var n, r, o, a = t.button,
                        s = t.fromElement;
                    return null == e.pageX && null != t.clientX && (o = (r = e.target.ownerDocument ||
                            u).documentElement, n = r.body, e.pageX = t.clientX + (o && o.scrollLeft ||
                            n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0),
                        e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o
                            .clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget =
                        s === e.target ? t.toElement : s), e.which || a === i || (e.which = 1 & a ?
                        1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== le() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === le() && this.blur ? (this.blur(), !1) : i
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return k.nodeName(this, "input") && "checkbox" === this.type && this.click ? (
                            this.click(), !1) : i
                    },
                    _default: function (e) {
                        return k.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        e.result !== i && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, r) {
                var i = k.extend(new k.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? k.event.trigger(i, null, t) : k.event.dispatch.call(t, i), i.isDefaultPrevented() &&
                    n.preventDefault()
            }
        }, k.removeEvent = u.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === s && (e[r] = null), e.detachEvent(r, n))
        }, k.Event = function (e, t) {
            return this instanceof k.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type,
                    this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault &&
                    e.getPreventDefault() ? ae : se) : this.type = e, t && k.extend(this, t), this.timeStamp =
                e && e.timeStamp || k.now(), this[k.expando] = !0, i) : new k.Event(e, t)
        }, k.Event.prototype = {
            isDefaultPrevented: se,
            isPropagationStopped: se,
            isImmediatePropagationStopped: se,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = ae, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !
                    1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = ae, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !
                    0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = ae, this.stopPropagation()
            }
        }, k.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, (function (e, t) {
            k.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (!i || i !== r && !k.contains(r, i)) && (e.type = o.origType, n =
                        o.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), k.support.submitBubbles || (k.event.special.submit = {
            setup: function () {
                return !k.nodeName(this, "form") && (k.event.add(this,
                    "click._submit keypress._submit", (function (e) {
                        var t = e.target,
                            n = k.nodeName(t, "input") || k.nodeName(t, "button") ? t.form :
                            i;
                        n && !k._data(n, "submitBubbles") && (k.event.add(n,
                            "submit._submit", (function (e) {
                                e._submit_bubble = !0
                            })), k._data(n, "submitBubbles", !0))
                    })), i)
            },
            postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && k.event
                    .simulate("submit", this.parentNode, e, !0))
            },
            teardown: function () {
                return !k.nodeName(this, "form") && (k.event.remove(this, "._submit"), i)
            }
        }), k.support.changeBubbles || (k.event.special.change = {
            setup: function () {
                return te.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) &&
                    (k.event.add(this, "propertychange._change", (function (e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !
                            0)
                    })), k.event.add(this, "click._change", (function (e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !
                            1), k.event.simulate("change", this, e, !0)
                    }))), !1) : (k.event.add(this, "beforeactivate._change", (function (e) {
                    var t = e.target;
                    te.test(t.nodeName) && !k._data(t, "changeBubbles") && (k.event
                        .add(t, "change._change", (function (e) {
                            !this.parentNode || e.isSimulated || e.isTrigger ||
                                k.event.simulate("change", this.parentNode,
                                    e, !0)
                        })), k._data(t, "changeBubbles", !0))
                })), i)
            },
            handle: function (e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type &&
                    "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : i
            },
            teardown: function () {
                return k.event.remove(this, "._change"), !te.test(this.nodeName)
            }
        }), k.support.focusinBubbles || k.each({
            focus: "focusin",
            blur: "focusout"
        }, (function (e, t) {
            var n = 0,
                r = function (e) {
                    k.event.simulate(t, e.target, k.event.fix(e), !0)
                };
            k.event.special[t] = {
                setup: function () {
                    0 == n++ && u.addEventListener(e, r, !0)
                },
                teardown: function () {
                    0 == --n && u.removeEventListener(e, r, !0)
                }
            }
        })), k.fn.extend({
            on: function (e, t, n, r, o) {
                var a, s;
                if ("object" == typeof e) {
                    for (a in "string" != typeof t && (n = n || t, t = i), e) this.on(a, t, n, e[a],
                        o);
                    return this
                }
                if (null == n && null == r ? (r = t, n = t = i) : null == r && ("string" == typeof t ?
                        (r = n, n = i) : (r = n, n = t, t = i)), !1 === r) r = se;
                else if (!r) return this;
                return 1 === o && (s = r, (r = function (e) {
                    return k().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = k.guid++)), this.each((function () {
                    k.event.add(this, e, r, n, t)
                }))
            },
            one: function (e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget)
                    .off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector,
                        r.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return (!1 === t || "function" == typeof t) && (n = t, t = i), !1 === n && (n = se),
                    this.each((function () {
                        k.event.remove(this, e, n, t)
                    }))
            },
            trigger: function (e, t) {
                return this.each((function () {
                    k.event.trigger(e, t, this)
                }))
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                return n ? k.event.trigger(e, t, n, !0) : i
            }
        });
        var ue = /^.[^:#\[\.,]*$/,
            ce = /^(?:parents|prev(?:Until|All))/,
            fe = k.expr.match.needsContext,
            pe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        function de(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }
        function he(e, t, n) {
            if (k.isFunction(t)) return k.grep(e, (function (e, r) {
                return !!t.call(e, r, e) !== n
            }));
            if (t.nodeType) return k.grep(e, (function (e) {
                return e === t !== n
            }));
            if ("string" == typeof t) {
                if (ue.test(t)) return k.filter(t, e, n);
                t = k.filter(t, e)
            }
            return k.grep(e, (function (e) {
                return k.inArray(e, t) >= 0 !== n
            }))
        }
        function me(e) {
            var t = ge.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }
        k.fn.extend({
            find: function (e) {
                var t, n = [],
                    r = this,
                    i = r.length;
                if ("string" != typeof e) return this.pushStack(k(e).filter((function () {
                    for (t = 0; i > t; t++)
                        if (k.contains(r[t], this)) return !0
                })));
                for (t = 0; i > t; t++) k.find(e, r[t], n);
                return (n = this.pushStack(i > 1 ? k.unique(n) : n)).selector = this.selector ?
                    this.selector + " " + e : e, n
            },
            has: function (e) {
                var t, n = k(e, this),
                    r = n.length;
                return this.filter((function () {
                    for (t = 0; r > t; t++)
                        if (k.contains(this, n[t])) return !0
                }))
            },
            not: function (e) {
                return this.pushStack(he(this, e || [], !0))
            },
            filter: function (e) {
                return this.pushStack(he(this, e || [], !1))
            },
            is: function (e) {
                return !!he(this, "string" == typeof e && fe.test(e) ? k(e) : e || [], !1).length
            },
            closest: function (e, t) {
                for (var n, r = 0, i = this.length, o = [], a = fe.test(e) || "string" != typeof e ?
                        k(e, t || this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(
                                n, e))) {
                            n = o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? k.unique(o) : o)
            },
            index: function (e) {
                return e ? "string" == typeof e ? k.inArray(this[0], k(e)) : k.inArray(e.jquery ? e[
                        0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length :
                    -1
            },
            add: function (e, t) {
                var n = "string" == typeof e ? k(e, t) : k.makeArray(e && e.nodeType ? [e] : e),
                    r = k.merge(this.get(), n);
                return this.pushStack(k.unique(r))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), k.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return k.dir(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return k.dir(e, "parentNode", n)
            },
            next: function (e) {
                return de(e, "nextSibling")
            },
            prev: function (e) {
                return de(e, "previousSibling")
            },
            nextAll: function (e) {
                return k.dir(e, "nextSibling")
            },
            prevAll: function (e) {
                return k.dir(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return k.dir(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return k.dir(e, "previousSibling", n)
            },
            siblings: function (e) {
                return k.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return k.sibling(e.firstChild)
            },
            contents: function (e) {
                return k.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : k.merge(
                    [], e.childNodes)
            }
        }, (function (e, t) {
            k.fn[e] = function (n, r) {
                var i = k.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = k.filter(
                    r, i)), this.length > 1 && (pe[e] || (i = k.unique(i)), ce.test(e) && (
                    i = i.reverse())), this.pushStack(i)
            }
        })), k.extend({
            filter: function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(
                    r, e) ? [r] : [] : k.find.matches(e, k.grep(t, (function (e) {
                    return 1 === e.nodeType
                })))
            },
            dir: function (e, t, n) {
                for (var r = [], o = e[t]; o && 9 !== o.nodeType && (n === i || 1 !== o.nodeType ||
                        !k(o).is(n));) 1 === o.nodeType && r.push(o), o = o[t];
                return r
            },
            sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var ge =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            ye = / jQuery\d+="(?:null|\d+)"/g,
            ve = RegExp("<(?:" + ge + ")[\\s/>]", "i"),
            be = /^\s+/,
            xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            we = /<([\w:]+)/,
            Te = /<tbody/i,
            ke = /<|&#?\w+;/,
            Ce = /<(?:script|style|link)/i,
            Ne = /^(?:checkbox|radio)$/i,
            Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Se = /^$|\/(?:java|ecma)script/i,
            je = /^true\/(.*)/,
            Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            De = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: k.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Le = me(u).appendChild(u.createElement("div"));
        function He(e, t) {
            return k.nodeName(e, "table") && k.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName(
                "tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }
        function _e(e) {
            return e.type = (null !== k.find.attr(e, "type")) + "/" + e.type, e
        }
        function Fe(e) {
            var t = je.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }
        function qe(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++) k._data(n, "globalEval", !t || k._data(t[r],
                "globalEval"))
        }
        function Me(e, t) {
            if (1 === t.nodeType && k.hasData(e)) {
                var n, r, i, o = k._data(e),
                    a = k._data(t, o),
                    s = o.events;
                if (s)
                    for (n in delete a.handle, a.events = {}, s)
                        for (r = 0, i = s[n].length; i > r; r++) k.event.add(t, n, s[n][r]);
                a.data && (a.data = k.extend({}, a.data))
            }
        }
        function Oe(e, t) {
            var n, r, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !k.support.noCloneEvent && t[k.expando]) {
                    for (r in (i = k._data(t)).events) k.removeEvent(t, r, i.handle);
                    t.removeAttribute(k.expando)
                }
                "script" === n && t.text !== e.text ? (_e(t).text = e.text, Fe(t)) : "object" === n ? (t.parentNode &&
                        (t.outerHTML = e.outerHTML), k.support.html5Clone && e.innerHTML && !k.trim(t.innerHTML) &&
                        (t.innerHTML = e.innerHTML)) : "input" === n && Ne.test(e.type) ? (t.defaultChecked = t
                        .checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected =
                    t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e
                        .defaultValue)
            }
        }
        function $e(e, t) {
            var n, r, o = 0,
                a = typeof e.getElementsByTagName !== s ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !==
                s ? e.querySelectorAll(t || "*") : i;
            if (!a)
                for (a = [], n = e.childNodes || e; null != (r = n[o]); o++) !t || k.nodeName(r, t) ? a.push(r) :
                    k.merge(a, $e(r, t));
            return t === i || t && k.nodeName(e, t) ? k.merge([e], a) : a
        }
        function Pe(e) {
            Ne.test(e.type) && (e.defaultChecked = e.checked)
        }
        De.optgroup = De.option, De.tbody = De.tfoot = De.colgroup = De.caption = De.thead, De.th = De.td, k.fn
            .extend({
                text: function (e) {
                    return k.access(this, (function (e) {
                        return e === i ? k.text(this) : this.empty().append((this[0] &&
                            this[0].ownerDocument || u).createTextNode(e))
                    }), null, e, arguments.length)
                },
                append: function () {
                    return this.domManip(arguments, (function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType ||
                            He(this, e).appendChild(e)
                    }))
                },
                prepend: function () {
                    return this.domManip(arguments, (function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = He(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }))
                },
                before: function () {
                    return this.domManip(arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }))
                },
                after: function () {
                    return this.domManip(arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }))
                },
                remove: function (e, t) {
                    for (var n, r = e ? k.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t ||
                        1 !== n.nodeType || k.cleanData($e(n)), n.parentNode && (t && k.contains(n.ownerDocument,
                            n) && qe($e(n, "script")), n.parentNode.removeChild(n));
                    return this
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && k.cleanData($e(e, !1)); e.firstChild;) e.removeChild(e
                            .firstChild);
                        e.options && k.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function () {
                        return k.clone(this, e, t)
                    }))
                },
                html: function (e) {
                    return k.access(this, (function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (e === i) return 1 === t.nodeType ? t.innerHTML.replace(ye, "") :
                            i;
                        if (!("string" != typeof e || Ce.test(e) || !k.support.htmlSerialize &&
                                ve.test(e) || !k.support.leadingWhitespace && be.test(e) ||
                                De[(we.exec(e) || ["", ""])[1].toLowerCase()])) {
                            e = e.replace(xe, "<$1></$2>");
                            try {
                                for (; r > n; n++) 1 === (t = this[n] || {}).nodeType && (k
                                    .cleanData($e(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }), null, e, arguments.length)
                },
                replaceWith: function () {
                    var e = k.map(this, (function (e) {
                            return [e.nextSibling, e.parentNode]
                        })),
                        t = 0;
                    return this.domManip(arguments, (function (n) {
                        var r = e[t++],
                            i = e[t++];
                        i && (r && r.parentNode !== i && (r = this.nextSibling), k(this).remove(),
                            i.insertBefore(n, r))
                    }), !0), t ? this : this.remove()
                },
                detach: function (e) {
                    return this.remove(e, !0)
                },
                domManip: function (e, t, n) {
                    e = g.apply([], e);
                    var r, i, o, a, s, l, u = 0,
                        c = this.length,
                        f = this,
                        p = c - 1,
                        d = e[0],
                        h = k.isFunction(d);
                    if (h || !(1 >= c || "string" != typeof d || k.support.checkClone) && Ee.test(d))
                        return this.each((function (r) {
                            var i = f.eq(r);
                            h && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
                        }));
                    if (c && (r = (l = k.buildFragment(e, this[0].ownerDocument, !1, !n && this)).firstChild,
                            1 === l.childNodes.length && (l = r), r)) {
                        for (o = (a = k.map($e(l, "script"), _e)).length; c > u; u++) i = l, u !== p &&
                            (i = k.clone(i, !0, !0), o && k.merge(a, $e(i, "script"))), t.call(this[u],
                                i, u);
                        if (o)
                            for (s = a[a.length - 1].ownerDocument, k.map(a, Fe), u = 0; o > u; u++) i =
                                a[u], Se.test(i.type || "") && !k._data(i, "globalEval") && k.contains(
                                    s, i) && (i.src ? k._evalUrl(i.src) : k.globalEval((i.text || i.textContent ||
                                    i.innerHTML || "").replace(Ae, "")));
                        l = r = null
                    }
                    return this
                }
            }), k.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function (e, t) {
                k.fn[e] = function (e) {
                    for (var n, r = 0, i = [], o = k(e), a = o.length - 1; a >= r; r++) n = r ===
                        a ? this : this.clone(!0), k(o[r])[t](n), y.apply(i, n.get());
                    return this.pushStack(i)
                }
            })), k.extend({
                clone: function (e, t, n) {
                    var r, i, o, a, s, l = k.contains(e.ownerDocument, e);
                    if (k.support.html5Clone || k.isXMLDoc(e) || !ve.test("<" + e.nodeName + ">") ? o =
                        e.cloneNode(!0) : (Le.innerHTML = e.outerHTML, Le.removeChild(o = Le.firstChild)),
                        !(k.support.noCloneEvent && k.support.noCloneChecked || 1 !== e.nodeType && 11 !==
                            e.nodeType || k.isXMLDoc(e)))
                        for (r = $e(o), s = $e(e), a = 0; null != (i = s[a]); ++a) r[a] && Oe(i, r[a]);
                    if (t)
                        if (n)
                            for (s = s || $e(e), r = r || $e(o), a = 0; null != (i = s[a]); a++) Me(i,
                                r[a]);
                        else Me(e, o);
                    return (r = $e(o, "script")).length > 0 && qe(r, !l && $e(e, "script")), r = s = i =
                        null, o
                },
                buildFragment: function (e, t, n, r) {
                    for (var i, o, a, s, l, u, c, f = e.length, p = me(t), d = [], h = 0; f > h; h++)
                        if ((o = e[h]) || 0 === o)
                            if ("object" === k.type(o)) k.merge(d, o.nodeType ? [o] : o);
                            else if (ke.test(o)) {
                        for (s = s || p.appendChild(t.createElement("div")), l = (we.exec(o) || ["", ""])[
                                1].toLowerCase(), c = De[l] || De._default, s.innerHTML = c[1] + o.replace(
                                xe, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                        if (!k.support.leadingWhitespace && be.test(o) && d.push(t.createTextNode(be.exec(
                                o)[0])), !k.support.tbody)
                            for (i = (o = "table" !== l || Te.test(o) ? "<table>" !== c[1] || Te.test(o) ?
                                    0 : s : s.firstChild) && o.childNodes.length; i--;) k.nodeName(u =
                                o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(
                                u);
                        for (k.merge(d, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(
                            s.firstChild);
                        s = p.lastChild
                    } else d.push(t.createTextNode(o));
                    for (s && p.removeChild(s), k.support.appendChecked || k.grep($e(d, "input"), Pe),
                        h = 0; o = d[h++];)
                        if ((!r || -1 === k.inArray(o, r)) && (a = k.contains(o.ownerDocument, o), s =
                                $e(p.appendChild(o), "script"), a && qe(s), n))
                            for (i = 0; o = s[i++];) Se.test(o.type || "") && n.push(o);
                    return s = null, p
                },
                cleanData: function (e, t) {
                    for (var n, r, i, o, a = 0, l = k.expando, u = k.cache, c = k.support.deleteExpando,
                            f = k.event.special; null != (n = e[a]); a++)
                        if ((t || k.acceptData(n)) && (o = (i = n[l]) && u[i])) {
                            if (o.events)
                                for (r in o.events) f[r] ? k.event.remove(n, r) : k.removeEvent(n, r, o
                                    .handle);
                            u[i] && (delete u[i], c ? delete n[l] : typeof n.removeAttribute !== s ? n.removeAttribute(
                                l) : n[l] = null, h.push(i))
                        }
                },
                _evalUrl: function (e) {
                    return k.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    })
                }
            }), k.fn.extend({
                wrapAll: function (e) {
                    if (k.isFunction(e)) return this.each((function (t) {
                        k(this).wrapAll(e.call(this, t))
                    }));
                    if (this[0]) {
                        var t = k(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)
                                e = e.firstChild;
                            return e
                        })).append(this)
                    }
                    return this
                },
                wrapInner: function (e) {
                    return k.isFunction(e) ? this.each((function (t) {
                        k(this).wrapInner(e.call(this, t))
                    })) : this.each((function () {
                        var t = k(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }))
                },
                wrap: function (e) {
                    var t = k.isFunction(e);
                    return this.each((function (n) {
                        k(this).wrapAll(t ? e.call(this, n) : e)
                    }))
                },
                unwrap: function () {
                    return this.parent().each((function () {
                        k.nodeName(this, "body") || k(this).replaceWith(this.childNodes)
                    })).end()
                }
            });
        var Be, Re, We, Ie = /alpha\([^)]*\)/i,
            ze = /opacity\s*=\s*([^)]*)/,
            Xe = /^(top|right|bottom|left)$/,
            Ue = /^(none|table(?!-c[ea]).+)/,
            Ye = /^margin/,
            Ve = RegExp("^(" + C + ")(.*)$", "i"),
            Je = RegExp("^(" + C + ")(?!px)[a-z%]+$", "i"),
            Ge = RegExp("^([+-])=(" + C + ")", "i"),
            Ke = {
                BODY: "block"
            },
            Qe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ze = {
                letterSpacing: 0,
                fontWeight: 400
            },
            et = ["Top", "Right", "Bottom", "Left"],
            tt = ["Webkit", "O", "Moz", "ms"];
        function nt(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = tt.length; i--;)
                if ((t = tt[i] + n) in e) return t;
            return r
        }
        function rt(e, t) {
            return e = t || e, "none" === k.css(e, "display") || !k.contains(e.ownerDocument, e)
        }
        function it(e, t) {
            for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)(r = e[a]).style && (o[a] = k._data(r,
                    "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""),
                    "" === r.style.display && rt(r) && (o[a] = k._data(r, "olddisplay", lt(r.nodeName)))) :
                o[a] || (i = rt(r), (n && "none" !== n || !i) && k._data(r, "olddisplay", i ? n : k.css(r,
                    "display"))));
            for (a = 0; s > a; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display ||
                (r.style.display = t ? o[a] || "" : "none"));
            return e
        }
        function ot(e, t, n) {
            var r = Ve.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }
        function at(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
                "margin" === n && (a += k.css(e, n + et[o], !0, i)), r ? ("content" === n && (a -= k.css(e,
                    "padding" + et[o], !0, i)), "margin" !== n && (a -= k.css(e, "border" + et[o] + "Width",
                    !0, i))) : (a += k.css(e, "padding" + et[o], !0, i), "padding" !== n && (a += k.css(e,
                    "border" + et[o] + "Width", !0, i)));
            return a
        }
        function st(e, t, n) {
            var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = Re(e),
                a = k.support.boxSizing && "border-box" === k.css(e, "boxSizing", !1, o);
            if (0 >= i || null == i) {
                if ((0 > (i = We(e, t, o)) || null == i) && (i = e.style[t]), Je.test(i)) return i;
                r = a && (k.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + at(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }
        function lt(e) {
            var t = u,
                n = Ke[e];
            return n || ("none" !== (n = ut(e, t)) && n || ((t = ((Be = (Be || k(
                        "<iframe frameborder='0' width='0' height='0'/>").css("cssText",
                        "display:block !important")).appendTo(t.documentElement))[0].contentWindow ||
                    Be[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n =
                ut(e, t), Be.detach()), Ke[e] = n), n
        }
        function ut(e, t) {
            var n = k(t.createElement(e)).appendTo(t.body),
                r = k.css(n[0], "display");
            return n.remove(), r
        }
        k.fn.extend({
            css: function (e, t) {
                return k.access(this, (function (e, t, n) {
                    var r, o, a = {},
                        s = 0;
                    if (k.isArray(t)) {
                        for (o = Re(e), r = t.length; r > s; s++) a[t[s]] = k.css(e, t[
                            s], !1, o);
                        return a
                    }
                    return n !== i ? k.style(e, t, n) : k.css(e, t)
                }), e, t, arguments.length > 1)
            },
            show: function () {
                return it(this, !0)
            },
            hide: function () {
                return it(this)
            },
            toggle: function (e) {
                var t = "boolean" == typeof e;
                return this.each((function () {
                    (t ? e : rt(this)) ? k(this).show(): k(this).hide()
                }))
            }
        }), k.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = We(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: k.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, l = k.camelCase(t),
                        u = e.style;
                    if (t = k.cssProps[l] || (k.cssProps[l] = nt(u, l)), s = k.cssHooks[t] || k.cssHooks[
                            l], n === i) return s && "get" in s && (o = s.get(e, !1, r)) !== i ? o :
                        u[t];
                    if ("string" === (a = typeof n) && (o = Ge.exec(n)) && (n = (o[1] + 1) * o[2] +
                            parseFloat(k.css(e, t)), a = "number"), !(null == n || "number" === a &&
                            isNaN(n) || ("number" !== a || k.cssNumber[l] || (n += "px"), k.support
                                .clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[
                                    t] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) === i)
                        )) try {
                        u[t] = n
                    } catch (e) {}
                }
            },
            css: function (e, t, n, r) {
                var o, a, s, l = k.camelCase(t);
                return t = k.cssProps[l] || (k.cssProps[l] = nt(e.style, l)), (s = k.cssHooks[t] ||
                    k.cssHooks[l]) && "get" in s && (a = s.get(e, !0, n)), a === i && (a = We(e,
                    t, r)), "normal" === a && t in Ze && (a = Ze[t]), "" === n || n ? (o =
                    parseFloat(a), !0 === n || k.isNumeric(o) ? o || 0 : a) : a
            }
        }), n.getComputedStyle ? (Re = function (e) {
            return n.getComputedStyle(e, null)
        }, We = function (e, t, n) {
            var r, o, a, s = n || Re(e),
                l = s ? s.getPropertyValue(t) || s[t] : i,
                u = e.style;
            return s && ("" !== l || k.contains(e.ownerDocument, e) || (l = k.style(e, t)), Je.test(l) &&
                Ye.test(t) && (r = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth =
                    u.width = l, l = s.width, u.width = r, u.minWidth = o, u.maxWidth = a)), l
        }) : u.documentElement.currentStyle && (Re = function (e) {
            return e.currentStyle
        }, We = function (e, t, n) {
            var r, o, a, s = n || Re(e),
                l = s ? s[t] : i,
                u = e.style;
            return null == l && u && u[t] && (l = u[t]), Je.test(l) && !Xe.test(t) && (r = u.left, (a =
                    (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), u.left =
                "fontSize" === t ? "1em" : l, l = u.pixelLeft + "px", u.left = r, a && (o.left = a)
            ), "" === l ? "auto" : l
        }), k.each(["height", "width"], (function (e, t) {
            k.cssHooks[t] = {
                get: function (e, n, r) {
                    return n ? 0 === e.offsetWidth && Ue.test(k.css(e, "display")) ? k.swap(
                        e, Qe, (function () {
                            return st(e, t, r)
                        })) : st(e, t, r) : i
                },
                set: function (e, n, r) {
                    var i = r && Re(e);
                    return ot(0, n, r ? at(e, t, r, k.support.boxSizing && "border-box" ===
                        k.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        })), k.support.opacity || (k.cssHooks.opacity = {
            get: function (e, t) {
                return ze.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ?
                    .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function (e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = k.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === k.trim(o.replace(Ie, "")) && n.removeAttribute &&
                    (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Ie.test(
                        o) ? o.replace(Ie, i) : o + " " + i)
            }
        }), k((function () {
            k.support.reliableMarginRight || (k.cssHooks.marginRight = {
                get: function (e, t) {
                    return t ? k.swap(e, {
                        display: "inline-block"
                    }, We, [e, "marginRight"]) : i
                }
            }), !k.support.pixelPosition && k.fn.position && k.each(["top", "left"], (function (
                e, t) {
                k.cssHooks[t] = {
                    get: function (e, n) {
                        return n ? (n = We(e, t), Je.test(n) ? k(e).position()[
                            t] + "px" : n) : i
                    }
                }
            }))
        })), k.expr && k.expr.filters && (k.expr.filters.hidden = function (e) {
            return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !k.support.reliableHiddenOffsets &&
                "none" === (e.style && e.style.display || k.css(e, "display"))
        }, k.expr.filters.visible = function (e) {
            return !k.expr.filters.hidden(e)
        }), k.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function (e, t) {
            k.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 >
                        r; r++) i[e + et[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, Ye.test(e) || (k.cssHooks[e + t].set = ot)
        }));
        var ct = /%20/g,
            ft = /\[\]$/,
            pt = /\r?\n/g,
            dt = /^(?:submit|button|image|reset|file)$/i,
            ht = /^(?:input|select|textarea|keygen)/i;
        function mt(e, t, n, r) {
            var i;
            if (k.isArray(t)) k.each(t, (function (t, i) {
                n || ft.test(e) ? r(e, i) : mt(e + "[" + ("object" == typeof i ? t : "") + "]", i,
                    n, r)
            }));
            else if (n || "object" !== k.type(t)) r(e, t);
            else
                for (i in t) mt(e + "[" + i + "]", t[i], n, r)
        }
        k.fn.extend({
            serialize: function () {
                return k.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map((function () {
                    var e = k.prop(this, "elements");
                    return e ? k.makeArray(e) : this
                })).filter((function () {
                    var e = this.type;
                    return this.name && !k(this).is(":disabled") && ht.test(this.nodeName) &&
                        !dt.test(e) && (this.checked || !Ne.test(e))
                })).map((function (e, t) {
                    var n = k(this).val();
                    return null == n ? null : k.isArray(n) ? k.map(n, (function (e) {
                        return {
                            name: t.name,
                            value: e.replace(pt, "\r\n")
                        }
                    })) : {
                        name: t.name,
                        value: n.replace(pt, "\r\n")
                    }
                })).get()
            }
        }), k.param = function (e, t) {
            var n, r = [],
                o = function (e, t) {
                    t = k.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) +
                        "=" + encodeURIComponent(t)
                };
            if (t === i && (t = k.ajaxSettings && k.ajaxSettings.traditional), k.isArray(e) || e.jquery &&
                !k.isPlainObject(e)) k.each(e, (function () {
                o(this.name, this.value)
            }));
            else
                for (n in e) mt(n, e[n], t, o);
            return r.join("&").replace(ct, "+")
        }, k.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
            .split(" "), (function (e, t) {
                k.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            })), k.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var gt, yt, vt = k.now(),
            bt = /\?/,
            xt = /#.*$/,
            wt = /([?&])_=[^&]*/,
            Tt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            kt = /^(?:GET|HEAD)$/,
            Ct = /^\/\//,
            Nt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Et = k.fn.load,
            St = {},
            jt = {},
            At = "*/".concat("*");
        try {
            yt = l.href
        } catch (e) {
            (yt = u.createElement("a")).href = "", yt = yt.href
        }
        function Dt(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(N) || [];
                if (k.isFunction(n))
                    for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(
                        n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function Lt(e, t, n, r) {
            var o = {},
                a = e === jt;
            function s(l) {
                var u;
                return o[l] = !0, k.each(e[l] || [], (function (e, l) {
                    var c = l(t, n, r);
                    return "string" != typeof c || a || o[c] ? a ? !(u = c) : i : (t.dataTypes.unshift(
                        c), s(c), !1)
                })), u
            }
            return s(t.dataTypes[0]) || !o["*"] && s("*")
        }
        function Ht(e, t) {
            var n, r, o = k.ajaxSettings.flatOptions || {};
            for (r in t) t[r] !== i && ((o[r] ? e : n || (n = {}))[r] = t[r]);
            return n && k.extend(!0, e, n), e
        }
        gt = Nt.exec(yt.toLowerCase()) || [], k.fn.load = function (e, t, n) {
            if ("string" != typeof e && Et) return Et.apply(this, arguments);
            var r, o, a, s = this,
                l = e.indexOf(" ");
            return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), k.isFunction(t) ? (n = t, t = i) :
                t && "object" == typeof t && (a = "POST"), s.length > 0 && k.ajax({
                    url: e,
                    type: a,
                    dataType: "html",
                    data: t
                }).done((function (e) {
                    o = arguments, s.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
                })).complete(n && function (e, t) {
                    s.each(n, o || [e.responseText, t, e])
                }), this
        }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (
            function (e, t) {
                k.fn[t] = function (e) {
                    return this.on(t, e)
                }
            })), k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: yt,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": At,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": k.parseJSON,
                    "text xml": k.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? Ht(Ht(e, k.ajaxSettings), t) : Ht(k.ajaxSettings, e)
            },
            ajaxPrefilter: Dt(St),
            ajaxTransport: Dt(jt),
            ajax: function (e, t) {
                "object" == typeof e && (t = e, e = i), t = t || {};
                var n, r, o, a, s, l, u, c, f = k.ajaxSetup({}, t),
                    p = f.context || f,
                    d = f.context && (p.nodeType || p.jquery) ? k(p) : k.event,
                    h = k.Deferred(),
                    m = k.Callbacks("once memory"),
                    g = f.statusCode || {},
                    y = {},
                    v = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === b) {
                                if (!c)
                                    for (c = {}; t = Tt.exec(a);) c[t[1].toLowerCase()] = t[2];
                                t = c[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return b || (e = v[n] = v[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return b || (f.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function (e) {
                            var t = e || x;
                            return u && u.abort(t), T(0, t), this
                        }
                    };
                if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, f.url = ((
                        e || f.url || yt) + "").replace(xt, "").replace(Ct, gt[1] + "//"), f.type =
                    t.method || t.type || f.method || f.type, f.dataTypes = k.trim(f.dataType ||
                        "*").toLowerCase().match(N) || [""], null == f.crossDomain && (n = Nt.exec(
                        f.url.toLowerCase()), f.crossDomain = !(!n || n[1] === gt[1] && n[2] ===
                        gt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (gt[3] || (
                            "http:" === gt[1] ? "80" : "443")))), f.data && f.processData &&
                    "string" != typeof f.data && (f.data = k.param(f.data, f.traditional)), Lt(St,
                        f, t, w), 2 === b) return w;
                for (r in (l = f.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), f.type =
                    f.type.toUpperCase(), f.hasContent = !kt.test(f.type), o = f.url, f.hasContent ||
                    (f.data && (o = f.url += (bt.test(o) ? "&" : "?") + f.data, delete f.data), !1 ===
                        f.cache && (f.url = wt.test(o) ? o.replace(wt, "$1_=" + vt++) : o + (bt.test(
                            o) ? "&" : "?") + "_=" + vt++)), f.ifModified && (k.lastModified[o] &&
                        w.setRequestHeader("If-Modified-Since", k.lastModified[o]), k.etag[o] && w.setRequestHeader(
                            "If-None-Match", k.etag[o])), (f.data && f.hasContent && !1 !== f.contentType ||
                        t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader(
                        "Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[
                            0]] + ("*" !== f.dataTypes[0] ? ", " + At + "; q=0.01" : "") : f.accepts[
                            "*"]), f.headers) w.setRequestHeader(r, f.headers[r]);
                if (f.beforeSend && (!1 === f.beforeSend.call(p, w, f) || 2 === b)) return w.abort();
                for (r in x = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[r](f[r]);
                if (u = Lt(jt, f, t, w)) {
                    w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 &&
                        (s = setTimeout((function () {
                            w.abort("timeout")
                        }), f.timeout));
                    try {
                        b = 1, u.send(y, T)
                    } catch (e) {
                        if (!(2 > b)) throw e;
                        T(-1, e)
                    }
                } else T(-1, "No Transport");
                function T(e, t, n, r) {
                    var c, y, v, x, T, C = t;
                    2 !== b && (b = 2, s && clearTimeout(s), u = i, a = r || "", w.readyState = e >
                        0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (x = function (e,
                            t, n) {
                            var r, o, a, s, l = e.contents,
                                u = e.dataTypes;
                            for (;
                                "*" === u[0];) u.shift(), o === i && (o = e.mimeType || t.getResponseHeader(
                                "Content-Type"));
                            if (o)
                                for (s in l)
                                    if (l[s] && l[s].test(o)) {
                                        u.unshift(s);
                                        break
                                    } if (u[0] in n) a = u[0];
                            else {
                                for (s in n) {
                                    if (!u[0] || e.converters[s + " " + u[0]]) {
                                        a = s;
                                        break
                                    }
                                    r || (r = s)
                                }
                                a = a || r
                            }
                            return a ? (a !== u[0] && u.unshift(a), n[a]) : i
                        }(f, w, n)), x = function (e, t, n, r) {
                            var i, o, a, s, l, u = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                            o = c.shift();
                            for (; o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l &&
                                    r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l =
                                    o, o = c.shift())
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                if (!(a = u[l + " " + o] || u["* " + o]))
                                    for (i in u)
                                        if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] ||
                                                u["* " + s[0]])) {
                                            !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(
                                                s[1]));
                                            break
                                        } if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + l +
                                                " to " + o
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(f, x, w, c), c ? (f.ifModified && ((T = w.getResponseHeader(
                                "Last-Modified")) && (k.lastModified[o] = T), (T = w.getResponseHeader(
                                "etag")) && (k.etag[o] = T)), 204 === e || "HEAD" === f.type ?
                            C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, y =
                                x.data, c = !(v = x.error))) : (v = C, (e || !C) && (C =
                            "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) +
                        "", c ? h.resolveWith(p, [y, C, w]) : h.rejectWith(p, [w, C, v]), w.statusCode(
                            g), g = i, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [w, f, c ?
                            y : v]), m.fireWith(p, [w, C]), l && (d.trigger("ajaxComplete", [w,
                            f]), --k.active || k.event.trigger("ajaxStop")))
                }
                return w
            },
            getJSON: function (e, t, n) {
                return k.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return k.get(e, i, t, "script")
            }
        }), k.each(["get", "post"], (function (e, t) {
            k[t] = function (e, n, r, o) {
                return k.isFunction(n) && (o = o || r, r = n, n = i), k.ajax({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: r
                })
            }
        })), k.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (e) {
                    return k.globalEval(e), e
                }
            }
        }), k.ajaxPrefilter("script", (function (e) {
            e.cache === i && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        })), k.ajaxTransport("script", (function (e) {
            if (e.crossDomain) {
                var t, n = u.head || k("head")[0] || u.documentElement;
                return {
                    send: function (r, i) {
                        (t = u.createElement("script")).async = !0, e.scriptCharset && (t.charset =
                                e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange =
                            function (e, n) {
                                (n || !t.readyState || /loaded|complete/.test(t.readyState)) &&
                                (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode
                                    .removeChild(t), t = null, n || i(200, "success"))
                            }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function () {
                        t && t.onload(i, !0)
                    }
                }
            }
        }));
        var _t = [],
            Ft = /(=)\?(?=&|$)|\?\?/;
        k.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = _t.pop() || k.expando + "_" + vt++;
                return this[e] = !0, e
            }
        }), k.ajaxPrefilter("json jsonp", (function (e, t, r) {
            var o, a, s, l = !1 !== e.jsonp && (Ft.test(e.url) ? "url" : "string" == typeof e.data &&
                !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ft.test(
                    e.data) && "data");
            return l || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = k.isFunction(e.jsonpCallback) ?
                e.jsonpCallback() : e.jsonpCallback, l ? e[l] = e[l].replace(Ft, "$1" + o) : !1 !==
                e.jsonp && (e.url += (bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters[
                    "script json"] = function () {
                    return s || k.error(o + " was not called"), s[0]
                }, e.dataTypes[0] = "json", a = n[o], n[o] = function () {
                    s = arguments
                }, r.always((function () {
                    n[o] = a, e[o] && (e.jsonpCallback = t.jsonpCallback, _t.push(o)),
                        s && k.isFunction(a) && a(s[0]), s = a = i
                })), "script") : i
        }));
        var qt, Mt, Ot = 0,
            $t = n.ActiveXObject && function () {
                var e;
                for (e in qt) qt[e](i, !0)
            };
        function Pt() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        k.ajaxSettings.xhr = n.ActiveXObject ? function () {
            return !this.isLocal && Pt() || function () {
                try {
                    return new n.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }()
        } : Pt, Mt = k.ajaxSettings.xhr(), k.support.cors = !!Mt && "withCredentials" in Mt, (Mt = k.support
            .ajax = !!Mt) && k.ajaxTransport((function (e) {
            var t;
            if (!e.crossDomain || k.support.cors) return {
                send: function (r, o) {
                    var a, s, l = e.xhr();
                    if (e.username ? l.open(e.type, e.url, e.async, e.username, e.password) :
                        l.open(e.type, e.url, e.async), e.xhrFields)
                        for (s in e.xhrFields) l[s] = e.xhrFields[s];
                    e.mimeType && l.overrideMimeType && l.overrideMimeType(e.mimeType), e.crossDomain ||
                        r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in r) l.setRequestHeader(s, r[s])
                    } catch (e) {}
                    l.send(e.hasContent && e.data || null), t = function (n, r) {
                        var s, u, c, f;
                        try {
                            if (t && (r || 4 === l.readyState))
                                if (t = i, a && (l.onreadystatechange = k.noop, $t &&
                                        delete qt[a]), r) 4 !== l.readyState && l.abort();
                                else {
                                    f = {}, s = l.status, u = l.getAllResponseHeaders(),
                                        "string" == typeof l.responseText && (f.text =
                                            l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (e) {
                                        c = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s =
                                        204) : s = f.text ? 200 : 404
                                }
                        } catch (e) {
                            r || o(-1, e)
                        }
                        f && o(s, c, f, u)
                    }, e.async ? 4 === l.readyState ? setTimeout(t) : (a = ++Ot, $t &&
                        (qt || (qt = {}, k(n).unload($t)), qt[a] = t), l.onreadystatechange =
                        t) : t()
                },
                abort: function () {
                    t && t(i, !0)
                }
            }
        }));
        var Bt, Rt, Wt = /^(?:toggle|show|hide)$/,
            It = RegExp("^(?:([+-])=|)(" + C + ")([a-z%]*)$", "i"),
            zt = /queueHooks$/,
            Xt = [function (e, t, n) {
                var r, i, o, a, s, l, u = this,
                    c = {},
                    f = e.style,
                    p = e.nodeType && rt(e),
                    d = k._data(e, "fxshow");
                for (r in n.queue || (null == (s = k._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l =
                        s.empty.fire, s.empty.fire = function () {
                            s.unqueued || l()
                        }), s.unqueued++, u.always((function () {
                        u.always((function () {
                            s.unqueued--, k.queue(e, "fx").length || s.empty.fire()
                        }))
                    }))), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow,
                        f.overflowX, f.overflowY], "inline" === k.css(e, "display") && "none" === k.css(
                        e, "float") && (k.support.inlineBlockNeedsLayout && "inline" !== lt(e.nodeName) ?
                        f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", k.support
                        .shrinkWrapBlocks || u.always((function () {
                            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY =
                                n.overflow[2]
                        }))), t)
                    if (i = t[r], Wt.exec(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) continue;
                        c[r] = d && d[r] || k.style(e, r)
                    } if (!k.isEmptyObject(c))
                    for (r in d ? "hidden" in d && (p = d.hidden) : d = k._data(e, "fxshow", {}), o && (d.hidden = !
                            p), p ? k(e).show() : u.done((function () {
                            k(e).hide()
                        })), u.done((function () {
                            var t;
                            for (t in k._removeData(e, "fxshow"), c) k.style(e, t, c[t])
                        })), c) a = Vt(p ? d[r] : 0, r, u), r in d || (d[r] = a.start, p && (a.end = a.start,
                        a.start = "width" === r || "height" === r ? 1 : 0))
            }],
            Ut = {
                "*": [function (e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = It.exec(t),
                        o = i && i[3] || (k.cssNumber[e] ? "" : "px"),
                        a = (k.cssNumber[e] || "px" !== o && +r) && It.exec(k.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], i = i || [], a = +r || 1;
                        do {
                            a /= s = s || ".5", k.style(n.elem, e, a + o)
                        } while (s !== (s = n.cur() / r) && 1 !== s && --l)
                    }
                    return i && (n.unit = o, n.start = +a || +r || 0, n.end = i[1] ? a + (i[1] + 1) * i[
                        2] : +i[2]), n
                }]
            };
        function Yt() {
            return setTimeout((function () {
                Bt = i
            })), Bt = k.now()
        }
        function Vt(e, t, n) {
            for (var r, i = (Ut[t] || []).concat(Ut["*"]), o = 0, a = i.length; a > o; o++)
                if (r = i[o].call(n, t, e)) return r
        }
        function Jt(e, t, n) {
            var r, i, o = 0,
                a = Xt.length,
                s = k.Deferred().always((function () {
                    delete l.elem
                })),
                l = function () {
                    if (i) return !1;
                    for (var t = Bt || Yt(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration ||
                            0), o = 0, a = u.tweens.length; a > o; o++) u.tweens[o].run(r);
                    return s.notifyWith(e, [u, r, n]), 1 > r && a ? n : (s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: k.extend({}, t),
                    opts: k.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Bt || Yt(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = k.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r), r
                    },
                    stop: function (t) {
                        var n = 0,
                            r = t ? u.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; r > n; n++) u.tweens[n].run(1);
                        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (function (e, t) {
                    var n, r, i, o, a;
                    for (n in e)
                        if (r = k.camelCase(n), i = t[r], o = e[n], k.isArray(o) && (i = o[1], o = e[n] = o[0]),
                            n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                            for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                        else t[r] = i
                }(c, u.opts.specialEasing); a > o; o++)
                if (r = Xt[o].call(u, e, c, u.opts)) return r;
            return k.map(c, Vt, u), k.isFunction(u.opts.start) && u.opts.start.call(e, u), k.fx.timer(k.extend(
                l, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(
                u.opts.always)
        }
        function Gt(e, t, n, r, i) {
            return new Gt.prototype.init(e, t, n, r, i)
        }
        function Kt(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) r["margin" + (n = et[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }
        function Qt(e) {
            return k.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        k.Animation = k.extend(Jt, {
            tweener: function (e, t) {
                k.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Ut[n] = Ut[n] || [], Ut[n].unshift(
                    t)
            },
            prefilter: function (e, t) {
                t ? Xt.unshift(e) : Xt.push(e)
            }
        }), k.Tween = Gt, Gt.prototype = {
            constructor: Gt,
            init: function (e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start =
                    this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = Gt.propHooks[this.prop];
                return e && e.get ? e.get(this) : Gt.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = Gt.propHooks[this.prop];
                return this.pos = t = this.options.duration ? k.easing[this.easing](e, this.options.duration *
                        e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t +
                    this.start, this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Gt.propHooks._default.set(this), this
            }
        }, Gt.prototype.init.prototype = Gt.prototype, Gt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t =
                        k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
                },
                set: function (e) {
                    k.fx.step[e.prop] ? k.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[k.cssProps[
                            e.prop]] || k.cssHooks[e.prop]) ? k.style(e.elem, e.prop, e.now + e.unit) :
                        e.elem[e.prop] = e.now
                }
            }
        }, Gt.propHooks.scrollTop = Gt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, k.each(["toggle", "show", "hide"], (function (e, t) {
            var n = k.fn[t];
            k.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(
                    Kt(t, !0), e, r, i)
            }
        })), k.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(rt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = k.isEmptyObject(e),
                    o = k.speed(t, n, r),
                    a = function () {
                        var t = Jt(this, k.extend({}, e), o);
                        a.finish = function () {
                            t.stop(!0)
                        }, (i || k._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = i), t && !1 !== e && this.queue(e ||
                    "fx", []), this.each((function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = k.timers,
                        a = k._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && zt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !==
                        e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && k.dequeue(this, e)
                }))
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each((function () {
                    var t, n = k._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = k.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, k.queue(this, e, []), i && i.cur && i.cur.finish &&
                        i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this &&
                        o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(
                        this);
                    delete n.finish
                }))
            }
        }), k.each({
            slideDown: Kt("show"),
            slideUp: Kt("hide"),
            slideToggle: Kt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function (e, t) {
            k.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        })), k.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? k.extend({}, e) : {
                complete: n || !n && t || k.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !k.isFunction(t) && t
            };
            return r.duration = k.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in k
                .fx.speeds ? k.fx.speeds[r.duration] : k.fx.speeds._default, (null == r.queue || !0 === r.queue) &&
                (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    k.isFunction(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
                }, r
        }, k.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, k.timers = [], k.fx = Gt.prototype.init, k.fx.tick = function () {
            var e, t = k.timers,
                n = 0;
            for (Bt = k.now(); t.length > n; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || k.fx.stop(), Bt = i
        }, k.fx.timer = function (e) {
            e() && k.timers.push(e) && k.fx.start()
        }, k.fx.interval = 13, k.fx.start = function () {
            Rt || (Rt = setInterval(k.fx.tick, k.fx.interval))
        }, k.fx.stop = function () {
            clearInterval(Rt), Rt = null
        }, k.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, k.fx.step = {}, k.expr && k.expr.filters && (k.expr.filters.animated = function (e) {
            return k.grep(k.timers, (function (t) {
                return e === t.elem
            })).length
        }), k.fn.offset = function (e) {
            if (arguments.length) return e === i ? this : this.each((function (t) {
                k.offset.setOffset(this, e, t)
            }));
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                a = o && o.ownerDocument;
            return a ? (t = a.documentElement, k.contains(t, o) ? (typeof o.getBoundingClientRect !== s &&
                (r = o.getBoundingClientRect()), n = Qt(a), {
                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : r) : void 0
        }, k.offset = {
            setOffset: function (e, t, n) {
                var r = k.css(e, "position");
                "static" === r && (e.style.position = "relative");
                var i, o, a = k(e),
                    s = a.offset(),
                    l = k.css(e, "top"),
                    u = k.css(e, "left"),
                    c = {},
                    f = {};
                ("absolute" === r || "fixed" === r) && k.inArray("auto", [l, u]) > -1 ? (i = (f = a.position())
                        .top, o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), k.isFunction(
                        t) && (t = t.call(e, n, s)), null != t.top && (c.top = t.top - s.top + i), null !=
                    t.left && (c.left = t.left - s.left + o), "using" in t ? t.using.call(e, c) : a.css(
                        c)
            }
        }, k.fn.extend({
            position: function () {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        r = this[0];
                    return "fixed" === k.css(r, "position") ? t = r.getBoundingClientRect() : (e =
                        this.offsetParent(), t = this.offset(), k.nodeName(e[0], "html") || (n =
                            e.offset()), n.top += k.css(e[0], "borderTopWidth", !0), n.left +=
                        k.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - k.css(r, "marginTop", !0),
                        left: t.left - n.left - k.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map((function () {
                    for (var e = this.offsetParent || c; e && !k.nodeName(e, "html") &&
                        "static" === k.css(e, "position");) e = e.offsetParent;
                    return e || c
                }))
            }
        }), k.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function (e, t) {
            var n = /Y/.test(t);
            k.fn[e] = function (r) {
                return k.access(this, (function (e, r, o) {
                    var a = Qt(e);
                    return o === i ? a ? t in a ? a[t] : a.document.documentElement[
                        r] : e[r] : (a ? a.scrollTo(n ? k(a).scrollLeft() : o,
                        n ? o : k(a).scrollTop()) : e[r] = o, i)
                }), e, r, arguments.length, null)
            }
        })), k.each({
            Height: "height",
            Width: "width"
        }, (function (e, t) {
            k.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function (n, r) {
                k.fn[r] = function (r, o) {
                    var a = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === o ? "margin" : "border");
                    return k.access(this, (function (t, n, r) {
                        var o;
                        return k.isWindow(t) ? t.document.documentElement[
                                "client" + e] : 9 === t.nodeType ? (o =
                                t.documentElement, Math.max(t.body[
                                        "scroll" + e], o["scroll" + e],
                                    t.body["offset" + e], o["offset" +
                                        e], o["client" + e])) : r ===
                            i ? k.css(t, n, s) : k.style(t, n, r, s)
                    }), t, a ? r : i, a, null)
                }
            }))
        })), k.fn.size = function () {
            return this.length
        }, k.fn.andSelf = k.fn.addBack, "object" == typeof e.exports ? e.exports = k : (n.jQuery = n.$ = k,
            void 0 === (r = function () {
                return k
            }.apply(t, [])) || (e.exports = r))
    }(window)
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
        i = n.n(r)()(!1);
    i.push([e.i,
        ".loader {\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: 0 auto;\r\n}\r\nsvg {\r\n  width: 90%;\r\n  fill: none;\r\n}\r\n.load {\r\n  transform-origin: 50% 50%;\r\n  stroke-dasharray: 570;\r\n  stroke-width: 20px;\r\n}\r\n.load.one {\r\n  stroke: #554d73;\r\n  animation: load 1.5s infinite;\r\n}\r\n.load.two {\r\n  stroke: #a496a4;\r\n  animation: load 1.5s infinite;\r\n  animation-delay: 0.1s;\r\n}\r\n.load.three {\r\n  stroke: #a5a7bb;\r\n  animation: load 1.5s infinite;\r\n  animation-delay: 0.2s;\r\n}\r\n.point {\r\n  animation: bounce 1s infinite ease-in-out;\r\n}\r\n.point.one {\r\n  fill: #a5a7bb;\r\n  animation-delay: 0s;\r\n}\r\n.point.two {\r\n  fill: #a496a4;\r\n  animation-delay: 0.1s;\r\n}\r\n.point.three {\r\n  fill: #554d73;\r\n  animation-delay: 0.2s;\r\n}\r\n@keyframes bounce {\r\n  0%,\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n  50% {\r\n    transform: translateY(-20px);\r\n  }\r\n}\r\n@keyframes load {\r\n  0% {\r\n    stroke-dashoffset: 570;\r\n  }\r\n  50% {\r\n    stroke-dashoffset: 530;\r\n  }\r\n  100% {\r\n    stroke-dashoffset: 570;\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n",
        ""]), t.default = i
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
        i = n.n(r)()(!1);
    i.push([e.i,
        "/* \r\nTAG 友链页CSS\r\n*/\r\n/* 边框呼吸灯效果 */\r\n@keyframes link_custom {\r\n    from {\r\n        box-shadow: 0 0 5px var(--primary-color, grey),\r\n            inset 0 0 5px var(--primary-color, grey),\r\n            0 1px 0 var(--primary-color, grey);\r\n    }\r\n\r\n    to {\r\n        box-shadow: 0 0 20px var(--primary-color, grey),\r\n            inset 0 0 10px var(--primary-color, grey),\r\n            0 1px 0 var(--primary-color, grey);\r\n    }\r\n}\r\n/* 边框彩色呼吸灯 */\r\n@keyframes link_custom1 {\r\n    0% {\r\n        box-shadow: 0 0 4px #ca00ff;\r\n    }\r\n\r\n    25% {\r\n        box-shadow: 0 0 16px #00b5e5;\r\n    }\r\n\r\n    50% {\r\n        box-shadow: 0 0 4px #00f;\r\n    }\r\n\r\n    75% {\r\n        box-shadow: 0 0 16px #b1da21;\r\n    }\r\n\r\n    100% {\r\n        box-shadow: 0 0 4px #f00;\r\n    }\r\n}\r\n/* 边框闪烁 */\r\n@keyframes borderFlash {\r\n    from {\r\n        border-color: transparent;\r\n    }\r\n\r\n    to {\r\n        border-color: var(--primary-color, grey);\r\n    }\r\n}\r\n/* 头像自动旋转 */\r\n@keyframes auto_rotate_left {\r\n    from {\r\n        transform: rotate(0);\r\n    }\r\n    to {\r\n        transform: rotate(-360deg);\r\n    }\r\n}\r\n@keyframes auto_rotate_right {\r\n    from {\r\n        transform: rotate(0);\r\n    }\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n.flink#article-container .flink-list > .flink-list-item a:hover {\r\n    color: #fff;\r\n}\r\n\r\n.flink .flink-list > .flink-list-item a {\r\n    color: var(--primary-color, #49b1f5);\r\n    text-decoration: none;\r\n}\r\n\r\n.flink .flink-list > .flink-list-item:hover {\r\n    box-shadow: 0 2px 20px var(--primary-color, #49b1f5);\r\n    animation-play-state: paused;\r\n}\r\n\r\n.flink#article-container .flink-list > .flink-list-item:before {\r\n    background: var(--primary-color, #49b1f5);\r\n}\r\n\r\n.flink .flink-list > .flink-list-item {\r\n    border: 0px solid var(--primary-color, #49b1f5);\r\n}\r\n.flink#article-container .flink-list > .flink-list-item:hover img {\r\n    -webkit-transform: rotate(var(--primary-rotate));\r\n    -moz-transform: rotate(var(--primary-rotate));\r\n    -o-transform: rotate(var(--primary-rotate));\r\n    -ms-transform: rotate(var(--primary-rotate));\r\n    transform: rotate(var(--primary-rotate));\r\n}\r\n/* 头像自动旋转 */\r\n.flink#article-container .flink-list > .flink-list-item a .lauto {\r\n    animation: auto_rotate_left var(--autotime) linear infinite;\r\n}\r\n.flink#article-container .flink-list > .flink-list-item a .rauto {\r\n    animation: auto_rotate_right var(--autotime) linear infinite;\r\n}\r\n/* 友联字体颜色 */\r\n\r\n/* name与desc的颜色 */\r\n.flink#article-container .flink-list > .flink-list-item .customcolor {\r\n    color: var(--namecolor, #1f2d3d);\r\n}\r\n/* name与des鼠标悬停的字体颜色 */\r\n.flink#article-container .flink-list > .flink-list-item .customcolor:hover {\r\n    color: #fff;\r\n}",
        ""]), t.default = i
}]);
=======
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){var r=n(2);!function(e,t){var i=function(e){return new i.prototype.init(e)};i.prototype={constructor:i,version:"2020-08-28 17:00:00",owner:"",repo:"",direction_sort:"desc",page:1,per_page:100,el:"",sort_container:[],text:[],labelDescr:{},init:function(e){for(let t in e)this[t]=e[t];return console.log("\n %c OY FriendTools"+this.version+" %c https://oy6090.top \n","color: #fff; background: #4285f4; padding:5px 0;","background: #66CCFF; padding:5px 0;"),i.setHead(this),i.getPageFriend(this),this}},i.extend=i.prototype.extend=function(e){for(var t in e)this[t]=e[t]},i.extend({setHead:function(e){i.loadingCss(),i.inserCSS()},loadingCss:function(){let e=document.createElement("style");e.innerHTML=n(3).default[0][1],document.head.appendChild(e)},inserCSS:function(){let e=document.createElement("style");e.innerHTML=n(4).default[0][1],document.head.appendChild(e)},loading:function(e){r(""+e.el).html('<div class="loader"><svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle class="load one" cx="60" cy="60" r="40"></circle><circle class="load two" cx="60" cy="60" r="40"></circle><circle class="load three" cx="60" cy="60" r="40"></circle><g><circle class="point one" cx="45" cy="70" r="5"></circle><circle class="point two" cx="60" cy="70" r="5"></circle><circle class="point three" cx="75" cy="70" r="5"></circle></g></svg></div>')},createContainer:function(e){for(var t in e.sort_container)r(""+e.el).append(`<h2 id=${e.sort_container[t]}>${e.sort_container[t]}</h2><div class="flink-desc"><h4>${e.sort_container[t]}</h4></div><div class="flink-list"></div>`)}}),i.extend({createFriend:function(e){let t="";var n=e.text;r(".loader").hide(),i.createContainer(e);for(let o in n)n[o].labels&&(t=n[o].body,r("#"+n[o].labels).length?r("#"+n[o].labels).next().next().append(t):r(e.el).append(`<h2 id=${n[o].labels}>${n[o].labels}</h2><div class="flink-desc">${i.getLabelDescr(e,n[o].labels)}</div><div class="flink-list">`+t+"</div>"))},getPageFriend:function(e){i.loading(e),i.getFriends(e).then(()=>i.createFriend(e))}}),i.extend({getFriends:function(e){return r.ajax({url:`https://gitee.com/api/v5/repos/${e.owner}/${e.repo}/issues?state=open&sort=created&direction=${e.direction_sort}&page=${e.page}&per_page=${e.per_page}`,type:"get",success:function(t,n,r){if(e.text=[],t)for(let n in t){var o={};o.body=i.getBody(e,t[n].body),o.labels=i.getLabels(t[n].labels),e.text.push(o)}}})}}),i.extend({getBody:function(e,t){let n=i.getInfo(e,t,"link"),r=i.getInfo(e,t,"name"),o=i.getInfo(e,t,"avatar"),a=i.getInfo(e,t,"descr");return`<div class="flink-list-item" style="${i.getCustom(e,t)}"><a href="${n}" title="${r}" target="_blank"><img class="rauto" style="animation:${i.getImgCustom(e,t)}" data-lazy-src="${o}" onerror="this.onerror=null,this.src=&quot;https://cdn.jsdelivr.net/gh/blogimg/HexoStaticFile1/imgbed/2020/03/21/20200321213747.gif&quot;" alt="${r}" src="${o}"><span class="flink-item-name">${r}</span><span class="flink-item-desc" title="${a}">${a}</span></a></div>`},getLabels:function(e){if(e.length)return e[0].name}}),i.extend({getLabelDescr:function(e,t){let n="";return e.labelDescr[t]&&(n=e.labelDescr[t]),n},getInfo:function(e,t,n){const r=new RegExp(String.raw`${n}:[^\n]*\n`),i=new RegExp(String.raw`(${n}:[\s]*|[\r\n]*)`,"g");let o="你写的好像不对哦！";return(t=t.match(r))&&t.length>0&&(o=t[0].replace(i,"")),o},getCustom:function(e,t){const n=["--primary-color","border-width","border-style","animation","background","--primary-rotate"];let r="";for(var o in n){var a=i.getInfo(e,t,n[o]);"你写的好像不对哦！"!==a&&(r+=`${n[o]}:${a};`)}return r},getImgCustom:function(e,t){const n=["img_animation"];let r="";for(var o in n){var a=i.getInfo(e,t,n[o]);"你写的好像不对哦！"!==a&&(r+=a+";")}return r}}),i.prototype.init.prototype=i.prototype,e.Friend=i}(window)},function(e,t,n){var r;
/*! jQuery v1.10.0 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/!function(n,i){var o,a,s=typeof i,l=n.location,u=n.document,c=u.documentElement,f=n.jQuery,p=n.$,d={},h=[],m="1.10.0",g=h.concat,y=h.push,v=h.slice,b=h.indexOf,x=d.toString,w=d.hasOwnProperty,T=m.trim,k=function(e,t){return new k.fn.init(e,t,a)},C=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,N=/\S+/g,E=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,j=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,A=/^[\],:{}\s]*$/,D=/(?:^|:|,)(?:\s*\[)+/g,L=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,H=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,_=/^-ms-/,F=/-([\da-z])/gi,q=function(e,t){return t.toUpperCase()},M=function(e){(u.addEventListener||"load"===e.type||"complete"===u.readyState)&&(O(),k.ready())},O=function(){u.addEventListener?(u.removeEventListener("DOMContentLoaded",M,!1),n.removeEventListener("load",M,!1)):(u.detachEvent("onreadystatechange",M),n.detachEvent("onload",M))};function $(e){var t=e.length,n=k.type(e);return!k.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)))}k.fn=k.prototype={jquery:m,constructor:k,init:function(e,t,n){var r,o;if(!e)return this;if("string"==typeof e){if(!(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:u,!0)),j.test(r[1])&&k.isPlainObject(t))for(r in t)k.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}if((o=u.getElementById(r[2]))&&o.parentNode){if(o.id!==r[2])return n.find(e);this.length=1,this[0]=o}return this.context=u,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):k.isFunction(e)?n.ready(e):(e.selector!==i&&(this.selector=e.selector,this.context=e.context),k.makeArray(e,this))},selector:"",length:0,toArray:function(){return v.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return k.each(this,e,t)},ready:function(e){return k.ready.promise().done(e),this},slice:function(){return this.pushStack(v.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(k.map(this,(function(t,n){return e.call(t,n,t)})))},end:function(){return this.prevObject||this.constructor(null)},push:y,sort:[].sort,splice:[].splice},k.fn.init.prototype=k.fn,k.extend=k.fn.extend=function(){var e,t,n,r,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||k.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(r in o)e=s[r],s!==(n=o[r])&&(c&&n&&(k.isPlainObject(n)||(t=k.isArray(n)))?(t?(t=!1,a=e&&k.isArray(e)?e:[]):a=e&&k.isPlainObject(e)?e:{},s[r]=k.extend(c,a,n)):n!==i&&(s[r]=n));return s},k.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),noConflict:function(e){return n.$===k&&(n.$=p),e&&n.jQuery===k&&(n.jQuery=f),k},isReady:!1,readyWait:1,holdReady:function(e){e?k.readyWait++:k.ready(!0)},ready:function(e){if(!0===e?!--k.readyWait:!k.isReady){if(!u.body)return setTimeout(k.ready);k.isReady=!0,!0!==e&&--k.readyWait>0||(o.resolveWith(u,[k]),k.fn.trigger&&k(u).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===k.type(e)},isArray:Array.isArray||function(e){return"array"===k.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[x.call(e)]||"object":typeof e},isPlainObject:function(e){var t;if(!e||"object"!==k.type(e)||e.nodeType||k.isWindow(e))return!1;try{if(e.constructor&&!w.call(e,"constructor")&&!w.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(k.support.ownLast)for(t in e)return w.call(e,t);for(t in e);return t===i||w.call(e,t)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||u;var r=j.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=k.buildFragment([e],t,i),i&&k(i).remove(),k.merge([],r.childNodes))},parseJSON:function(e){return n.JSON&&n.JSON.parse?n.JSON.parse(e):null===e?e:"string"==typeof e&&((e=k.trim(e))&&A.test(e.replace(L,"@").replace(H,"]").replace(D,"")))?Function("return "+e)():(k.error("Invalid JSON: "+e),i)},parseXML:function(e){var t;if(!e||"string"!=typeof e)return null;try{n.DOMParser?t=(new DOMParser).parseFromString(e,"text/xml"):((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e))}catch(e){t=i}return t&&t.documentElement&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){e&&k.trim(e)&&(n.execScript||function(e){n.eval.call(n,e)})(e)},camelCase:function(e){return e.replace(_,"ms-").replace(F,q)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r=0,i=e.length,o=$(e);if(n){if(o)for(;i>r&&!1!==t.apply(e[r],n);r++);else for(r in e)if(!1===t.apply(e[r],n))break}else if(o)for(;i>r&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:T&&!T.call("\ufeff ")?function(e){return null==e?"":T.call(e)}:function(e){return null==e?"":(e+"").replace(E,"")},makeArray:function(e,t){var n=t||[];return null!=e&&($(Object(e))?k.merge(n,"string"==typeof e?[e]:e):y.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(b)return b.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){var n=t.length,r=e.length,o=0;if("number"==typeof n)for(;n>o;o++)e[r++]=t[o];else for(;t[o]!==i;)e[r++]=t[o++];return e.length=r,e},grep:function(e,t,n){var r=[],i=0,o=e.length;for(n=!!n;o>i;i++)n!==!!t(e[i],i)&&r.push(e[i]);return r},map:function(e,t,n){var r,i=0,o=e.length,a=[];if($(e))for(;o>i;i++)null!=(r=t(e[i],i,n))&&(a[a.length]=r);else for(i in e)null!=(r=t(e[i],i,n))&&(a[a.length]=r);return g.apply([],a)},guid:1,proxy:function(e,t){var n,r,o;return"string"==typeof t&&(o=e[t],t=e,e=o),k.isFunction(e)?(n=v.call(arguments,2),(r=function(){return e.apply(t||this,n.concat(v.call(arguments)))}).guid=e.guid=e.guid||k.guid++,r):i},access:function(e,t,n,r,o,a,s){var l=0,u=e.length,c=null==n;if("object"===k.type(n))for(l in o=!0,n)k.access(e,t,l,n[l],!0,a,s);else if(r!==i&&(o=!0,k.isFunction(r)||(s=!0),c&&(s?(t.call(e,r),t=null):(c=t,t=function(e,t,n){return c.call(k(e),n)})),t))for(;u>l;l++)t(e[l],n,s?r:r.call(e[l],l,t(e[l],n)));return o?e:c?t.call(e):u?t(e[0],n):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i}}),k.ready.promise=function(e){if(!o)if(o=k.Deferred(),"complete"===u.readyState)setTimeout(k.ready);else if(u.addEventListener)u.addEventListener("DOMContentLoaded",M,!1),n.addEventListener("load",M,!1);else{u.attachEvent("onreadystatechange",M),n.attachEvent("onload",M);var t=!1;try{t=null==n.frameElement&&u.documentElement}catch(e){}t&&t.doScroll&&function e(){if(!k.isReady){try{t.doScroll("left")}catch(t){return setTimeout(e,50)}O(),k.ready()}}()}return o.promise(e)},k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),(function(e,t){d["[object "+t+"]"]=t.toLowerCase()})),a=k(u),function(e,t){var n,r,i,o,a,s,l,u,c,f,p,d,h,m,g,y,v,b="sizzle"+-new Date,x=e.document,w=0,T=0,C=ae(),N=ae(),E=ae(),S=!1,j=function(){return 0},A=typeof t,D={}.hasOwnProperty,L=[],H=L.pop,_=L.push,F=L.push,q=L.slice,M=L.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},O="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",$="[\\x20\\t\\r\\n\\f]",P="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",B=P.replace("w","w#"),R="\\["+$+"*("+P+")"+$+"*(?:([*^$|!~]?=)"+$+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+B+")|)|)"+$+"*\\]",W=":("+P+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+R.replace(3,8)+")*)|.*)\\)|)",I=RegExp("^"+$+"+|((?:^|[^\\\\])(?:\\\\.)*)"+$+"+$","g"),z=RegExp("^"+$+"*,"+$+"*"),X=RegExp("^"+$+"*([>+~]|"+$+")"+$+"*"),U=RegExp($+"*[+~]"),Y=RegExp("="+$+"*([^\\]'\"]*)"+$+"*\\]","g"),V=RegExp(W),J=RegExp("^"+B+"$"),G={ID:RegExp("^#("+P+")"),CLASS:RegExp("^\\.("+P+")"),TAG:RegExp("^("+P.replace("w","w*")+")"),ATTR:RegExp("^"+R),PSEUDO:RegExp("^"+W),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+$+"*(even|odd|(([+-]|)(\\d*)n|)"+$+"*(?:([+-]|)"+$+"*(\\d+)|))"+$+"*\\)|)","i"),bool:RegExp("^(?:"+O+")$","i"),needsContext:RegExp("^"+$+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+$+"*((?:-\\d)?\\d*)"+$+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Q=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,ee=/^h\d$/i,te=/'|\\/g,ne=RegExp("\\\\([\\da-f]{1,6}"+$+"?|("+$+")|.)","ig"),re=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{F.apply(L=q.call(x.childNodes),x.childNodes),L[x.childNodes.length].nodeType}catch(e){F={apply:L.length?function(e,t){_.apply(e,q.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ie(e,t,n,i){var o,a,s,l,u,c,d,g,y,w;if((t?t.ownerDocument||t:x)!==p&&f(t),n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=(t=t||p).nodeType)&&9!==l)return[];if(h&&!i){if(o=Q.exec(e))if(s=o[1]){if(9===l){if(!(a=t.getElementById(s))||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return F.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return F.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!m||!m.test(e))){if(g=d=b,y=t,w=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){for(c=ye(e),(d=t.getAttribute("id"))?g=d.replace(te,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=c.length;u--;)c[u]=g+ve(c[u]);y=U.test(e)&&t.parentNode||t,w=c.join(",")}if(w)try{return F.apply(n,y.querySelectorAll(w)),n}catch(e){}finally{d||t.removeAttribute("id")}}}return Ne(e.replace(I,"$1"),t,n,i)}function oe(e){return K.test(e+"")}function ae(){var e=[];return function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}}function se(e){return e[b]=!0,e}function le(e){var t=p.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t,n){for(var r,i=(e=e.split("|")).length,a=n?null:t;i--;)(r=o.attrHandle[e[i]])&&r!==t||(o.attrHandle[e[i]]=a)}function ce(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:!0===e[t]?t.toLowerCase():null}function fe(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function pe(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t}function de(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||1<<31)-(~e.sourceIndex||1<<31);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function he(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function me(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ge(e){return se((function(t){return t=+t,se((function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))}))}))}for(n in s=ie.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},r=ie.support={},f=ie.setDocument=function(e){var n=e?e.ownerDocument||e:x;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,d=n.documentElement,h=!s(n),r.attributes=le((function(e){return e.innerHTML="<a href='#'></a>",ue("type|href|height|width",fe,"#"===e.firstChild.getAttribute("href")),ue(O,ce,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")})),r.input=le((function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})),ue("value",pe,r.attributes&&r.input),r.getElementsByTagName=le((function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length})),r.getElementsByClassName=le((function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length})),r.getById=le((function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length})),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==A&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(ne,re);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(ne,re);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==A&&h?n.getElementsByClassName(e):t},g=[],m=[],(r.qsa=oe(n.querySelectorAll))&&(le((function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||m.push("\\["+$+"*(?:value|"+O+")"),e.querySelectorAll(":checked").length||m.push(":checked")})),le((function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&m.push("[*^$]="+$+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")}))),(r.matchesSelector=oe(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&le((function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),g.push("!=",W)})),m=m.length&&RegExp(m.join("|")),g=g.length&&RegExp(g.join("|")),v=oe(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},r.sortDetached=le((function(e){return 1&e.compareDocumentPosition(n.createElement("div"))})),j=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(x,e)?-1:t===n||v(x,t)?1:c?M.call(c,e)-M.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?M.call(c,e)-M.call(c,t):0;if(o===a)return de(e,t);for(r=e;r=r.parentNode;)s.unshift(r);for(r=t;r=r.parentNode;)l.unshift(r);for(;s[i]===l[i];)i++;return i?de(s[i],l[i]):s[i]===x?-1:l[i]===x?1:0},n):p},ie.matches=function(e,t){return ie(e,null,null,t)},ie.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&f(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||g&&g.test(t)||m&&m.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return ie(t,p,null,[e]).length>0},ie.contains=function(e,t){return(e.ownerDocument||e)!==p&&f(e),v(e,t)},ie.attr=function(e,n){(e.ownerDocument||e)!==p&&f(e);var i=o.attrHandle[n.toLowerCase()],a=i&&D.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},ie.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ie.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(j),S){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}return e},a=ie.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=ie.selectors={cacheLength:50,createPseudo:se,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ne,re),e[3]=(e[4]||e[5]||"").replace(ne,re),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ie.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ie.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return G.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&V.test(r)&&(n=ye(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ne,re).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+$+")"+e+"("+$+"|$)"))&&C(e,(function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=ie.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,f,p,d,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(g){if(o){for(;m;){for(f=t;f=f[m];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&v){for(d=(u=(c=g[b]||(g[b]={}))[e]||[])[0]===w&&u[1],p=u[0]===w&&u[2],f=d&&g.childNodes[d];f=++d&&f&&f[m]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[w,d,p];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===w)p=u[1];else for(;(f=++d&&f&&f[m]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[b]||(f[b]={}))[e]=[w,p]),f!==t)););return(p-=i)===r||0==p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||ie.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?se((function(e,n){for(var i,o=r(e,t),a=o.length;a--;)e[i=M.call(e,o[a])]=!(n[i]=o[a])})):function(e){return r(e,0,n)}):r}},pseudos:{not:se((function(e){var t=[],n=[],r=l(e.replace(I,"$1"));return r[b]?se((function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))})):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}})),has:se((function(e){return function(t){return ie(e,t).length>0}})),contains:se((function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}})),lang:se((function(e){return J.test(e||"")||ie.error("unsupported lang: "+e),e=e.replace(ne,re).toLowerCase(),function(t){var n;do{if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return ee.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ge((function(){return[0]})),last:ge((function(e,t){return[t-1]})),eq:ge((function(e,t,n){return[0>n?n+t:n]})),even:ge((function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e})),odd:ge((function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e})),lt:ge((function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e})),gt:ge((function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e}))}},{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=he(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=me(n);function ye(e,t){var n,r,i,a,s,l,u,c=N[e+" "];if(c)return t?0:c.slice(0);for(s=e,l=[],u=o.preFilter;s;){for(a in(!n||(r=z.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=X.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(I," ")}),s=s.slice(n.length)),o.filter)!(r=G[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?ie.error(e):N(e,l).slice(0)}function ve(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function be(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=T++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,f=w+" "+a;if(s){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||o)if((u=(c=t[b]||(t[b]={}))[r])&&u[0]===f){if(!0===(l=u[1])||l===i)return!0===l}else if((u=c[r]=[f])[1]=e(t,n,s)||i,!0===u[1])return!0}}function xe(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function we(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se((function(o,a,s,l){var u,c,f,p=[],d=[],h=a.length,m=o||function(e,t,n){for(var r=0,i=t.length;i>r;r++)ie(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),g=!e||!o&&t?m:we(m,p,e,s,l),y=n?i||(o?e:h||r)?[]:a:g;if(n&&n(g,y,s,l),r)for(u=we(y,d),r(u,[],s,l),c=u.length;c--;)(f=u[c])&&(y[d[c]]=!(g[d[c]]=f));if(o){if(i||e){if(i){for(u=[],c=y.length;c--;)(f=y[c])&&u.push(g[c]=f);i(null,y=[],u,l)}for(c=y.length;c--;)(f=y[c])&&(u=i?M.call(o,f):p[c])>-1&&(o[u]=!(a[u]=f))}}else y=we(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):F.apply(a,y)}))}function ke(e){for(var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=be((function(e){return e===t}),s,!0),f=be((function(e){return M.call(t,e)>-1}),s,!0),p=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):f(e,n,r))}];i>l;l++)if(n=o.relative[e[l].type])p=[be(xe(p),n)];else{if((n=o.filter[e[l].type].apply(null,e[l].matches))[b]){for(r=++l;i>r&&!o.relative[e[r].type];r++);return Te(l>1&&xe(p),l>1&&ve(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(I,"$1"),n,r>l&&ke(e.slice(l,r)),i>r&&ke(e=e.slice(r)),i>r&&ve(e))}p.push(n)}return xe(p)}function Ce(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,f,d){var h,m,g,y=[],v=0,b="0",x=s&&[],T=null!=d,k=u,C=s||a&&o.find.TAG("*",d&&l.parentNode||l),N=w+=null==k?1:Math.random()||.1;for(T&&(u=l!==p&&l,i=n);null!=(h=C[b]);b++){if(a&&h){for(m=0;g=e[m++];)if(g(h,l,c)){f.push(h);break}T&&(w=N,i=++n)}r&&((h=!g&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){for(m=0;g=t[m++];)g(x,y,l,c);if(s){if(v>0)for(;b--;)x[b]||y[b]||(y[b]=H.call(f));y=we(y)}F.apply(f,y),T&&!s&&y.length>0&&v+t.length>1&&ie.uniqueSort(f)}return T&&(w=N,u=k),x};return r?se(s):s}function Ne(e,t,n,i){var a,s,u,c,f,p=ye(e);if(!i&&1===p.length){if((s=p[0]=p[0].slice(0)).length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(!(t=(o.find.ID(u.matches[0].replace(ne,re),t)||[])[0]))return n;e=e.slice(s.shift().value.length)}for(a=G.needsContext.test(e)?0:s.length;a--&&(u=s[a],!o.relative[c=u.type]);)if((f=o.find[c])&&(i=f(u.matches[0].replace(ne,re),U.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),!(e=i.length&&ve(s)))return F.apply(n,i),n;break}}return l(e,p)(i,t,!h,n,U.test(e)),n}function Ee(){}l=ie.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){for(t||(t=ye(e)),n=t.length;n--;)(o=ke(t[n]))[b]?r.push(o):i.push(o);o=E(e,Ce(i,r))}return o},o.pseudos.nth=o.pseudos.eq,Ee.prototype=o.filters=o.pseudos,o.setFilters=new Ee,r.sortStable=b.split("").sort(j).join("")===b,f(),[0,0].sort(j),r.detectDuplicates=S,k.find=ie,k.expr=ie.selectors,k.expr[":"]=k.expr.pseudos,k.unique=ie.uniqueSort,k.text=ie.getText,k.isXMLDoc=ie.isXML,k.contains=ie.contains}(n);var P={};k.Callbacks=function(e){e="string"==typeof e?P[e]||function(e){var t=P[e]={};return k.each(e.match(N)||[],(function(e,n){t[n]=!0})),t}(e):k.extend({},e);var t,n,r,o,a,s,l=[],u=!e.once&&[],c=function(i){for(n=e.memory&&i,r=!0,a=s||0,s=0,o=l.length,t=!0;l&&o>a;a++)if(!1===l[a].apply(i[0],i[1])&&e.stopOnFalse){n=!1;break}t=!1,l&&(u?u.length&&c(u.shift()):n?l=[]:f.disable())},f={add:function(){if(l){var r=l.length;(function t(n){k.each(n,(function(n,r){var i=k.type(r);"function"===i?e.unique&&f.has(r)||l.push(r):r&&r.length&&"string"!==i&&t(r)}))})(arguments),t?o=l.length:n&&(s=r,c(n))}return this},remove:function(){return l&&k.each(arguments,(function(e,n){for(var r;(r=k.inArray(n,l,r))>-1;)l.splice(r,1),t&&(o>=r&&o--,a>=r&&a--)})),this},has:function(e){return e?k.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=n=i,this},disabled:function(){return!l},lock:function(){return u=i,n||f.disable(),this},locked:function(){return!u},fireWith:function(e,n){return n=[e,(n=n||[]).slice?n.slice():n],!l||r&&!u||(t?u.push(n):c(n)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!r}};return f},k.extend({Deferred:function(e){var t=[["resolve","done",k.Callbacks("once memory"),"resolved"],["reject","fail",k.Callbacks("once memory"),"rejected"],["notify","progress",k.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return k.Deferred((function(n){k.each(t,(function(t,o){var a=o[0],s=k.isFunction(e[t])&&e[t];i[o[1]]((function(){var e=s&&s.apply(this,arguments);e&&k.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)}))})),e=null})).promise()},promise:function(e){return null!=e?k.extend(e,r):r}},i={};return r.pipe=r.then,k.each(t,(function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add((function(){n=s}),t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith})),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=v.call(arguments),a=o.length,s=1!==a||e&&k.isFunction(e.promise)?a:0,l=1===s?e:k.Deferred(),u=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?v.call(arguments):i,r===t?l.notifyWith(n,r):--s||l.resolveWith(n,r)}};if(a>1)for(t=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&k.isFunction(o[i].promise)?o[i].promise().done(u(i,r,o)).fail(l.reject).progress(u(i,n,t)):--s;return s||l.resolveWith(r,o),l.promise()}}),k.support=function(e){var t,r,i,o,a,l,c,f,p,d=u.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",t=d.getElementsByTagName("*")||[],!(r=d.getElementsByTagName("a")[0])||!r.style||!t.length)return e;l=(o=u.createElement("select")).appendChild(u.createElement("option")),i=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",e.getSetAttribute="t"!==d.className,e.leadingWhitespace=3===d.firstChild.nodeType,e.tbody=!d.getElementsByTagName("tbody").length,e.htmlSerialize=!!d.getElementsByTagName("link").length,e.style=/top/.test(r.getAttribute("style")),e.hrefNormalized="/a"===r.getAttribute("href"),e.opacity=/^0.5/.test(r.style.opacity),e.cssFloat=!!r.style.cssFloat,e.checkOn=!!i.value,e.optSelected=l.selected,e.enctype=!!u.createElement("form").enctype,e.html5Clone="<:nav></:nav>"!==u.createElement("nav").cloneNode(!0).outerHTML,e.inlineBlockNeedsLayout=!1,e.shrinkWrapBlocks=!1,e.pixelPosition=!1,e.deleteExpando=!0,e.noCloneEvent=!0,e.reliableMarginRight=!0,e.boxSizingReliable=!0,i.checked=!0,e.noCloneChecked=i.cloneNode(!0).checked,o.disabled=!0,e.optDisabled=!l.disabled;try{delete d.test}catch(t){e.deleteExpando=!1}for(p in(i=u.createElement("input")).setAttribute("value",""),e.input=""===i.getAttribute("value"),i.value="t",i.setAttribute("type","radio"),e.radioValue="t"===i.value,i.setAttribute("checked","t"),i.setAttribute("name","t"),(a=u.createDocumentFragment()).appendChild(i),e.appendChecked=i.checked,e.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",(function(){e.noCloneEvent=!1})),d.cloneNode(!0).click()),{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+p,"t"),e[p+"Bubbles"]=c in n||!1===d.attributes[c].expando;for(p in d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",e.clearCloneStyle="content-box"===d.style.backgroundClip,k(e))break;return e.ownLast="0"!==p,k((function(){var t,r,i,o="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",a=u.getElementsByTagName("body")[0];a&&((t=u.createElement("div")).style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(t).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",(i=d.getElementsByTagName("td"))[0].style.cssText="padding:0;margin:0;border:0;display:none",f=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",e.reliableHiddenOffsets=f&&0===i[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",k.swap(a,null!=a.style.zoom?{zoom:1}:{},(function(){e.boxSizing=4===d.offsetWidth})),n.getComputedStyle&&(e.pixelPosition="1%"!==(n.getComputedStyle(d,null)||{}).top,e.boxSizingReliable="4px"===(n.getComputedStyle(d,null)||{width:"4px"}).width,(r=d.appendChild(u.createElement("div"))).style.cssText=d.style.cssText=o,r.style.marginRight=r.style.width="0",d.style.width="1px",e.reliableMarginRight=!parseFloat((n.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==s&&(d.innerHTML="",d.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1",e.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",e.shrinkWrapBlocks=3!==d.offsetWidth,e.inlineBlockNeedsLayout&&(a.style.zoom=1)),a.removeChild(t),t=d=i=r=null)})),t=o=a=l=r=i=null,e}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,R=/([A-Z])/g;function W(e,t,n,r){if(k.acceptData(e)){var o,a,s=k.expando,l=e.nodeType,u=l?k.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(r||u[c].data)||n!==i||"string"!=typeof t)return c||(c=l?e[s]=h.pop()||k.guid++:s),u[c]||(u[c]=l?{}:{toJSON:k.noop}),("object"==typeof t||"function"==typeof t)&&(r?u[c]=k.extend(u[c],t):u[c].data=k.extend(u[c].data,t)),a=u[c],r||(a.data||(a.data={}),a=a.data),n!==i&&(a[k.camelCase(t)]=n),"string"==typeof t?null==(o=a[t])&&(o=a[k.camelCase(t)]):o=a,o}}function I(e,t,n){if(k.acceptData(e)){var r,i,o=e.nodeType,a=o?k.cache:e,s=o?e[k.expando]:k.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){k.isArray(t)?t=t.concat(k.map(t,k.camelCase)):t in r?t=[t]:t=(t=k.camelCase(t))in r?[t]:t.split(" "),i=t.length;for(;i--;)delete r[t[i]];if(n?!X(r):!k.isEmptyObject(r))return}(n||(delete a[s].data,X(a[s])))&&(o?k.cleanData([e],!0):k.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}function z(e,t,n){if(n===i&&1===e.nodeType){var r="data-"+t.replace(R,"-$1").toLowerCase();if("string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:B.test(n)?k.parseJSON(n):n)}catch(e){}k.data(e,t,n)}else n=i}return n}function X(e){var t;for(t in e)if(("data"!==t||!k.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}k.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?k.cache[e[k.expando]]:e[k.expando])&&!X(e)},data:function(e,t,n){return W(e,t,n)},removeData:function(e,t){return I(e,t)},_data:function(e,t,n){return W(e,t,n,!0)},_removeData:function(e,t){return I(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&k.noData[e.nodeName.toLowerCase()];return!t||!0!==t&&e.getAttribute("classid")===t}}),k.fn.extend({data:function(e,t){var n,r,o=null,a=0,s=this[0];if(e===i){if(this.length&&(o=k.data(s),1===s.nodeType&&!k._data(s,"parsedAttrs"))){for(n=s.attributes;n.length>a;a++)0===(r=n[a].name).indexOf("data-")&&z(s,r=k.camelCase(r.slice(5)),o[r]);k._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each((function(){k.data(this,e)})):arguments.length>1?this.each((function(){k.data(this,e,t)})):s?z(s,e,k.data(s,e)):null},removeData:function(e){return this.each((function(){k.removeData(this,e)}))}}),k.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=k._data(e,t),n&&(!r||k.isArray(n)?r=k._data(e,t,k.makeArray(n)):r.push(n)),r||[]):i},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,(function(){k.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return k._data(e,n)||k._data(e,n,{empty:k.Callbacks("once memory").add((function(){k._removeData(e,t+"queue"),k._removeData(e,n)}))})}}),k.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?k.queue(this[0],e):t===i?this:this.each((function(){var n=k.queue(this,e,t);k._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&k.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){k.dequeue(this,e)}))},delay:function(e,t){return e=k.fx&&k.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,o=k.Deferred(),a=this,s=this.length,l=function(){--r||o.resolveWith(a,[a])};for("string"!=typeof e&&(t=e,e=i),e=e||"fx";s--;)(n=k._data(a[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(l));return l(),o.promise(t)}});var U,Y,V=/[\t\r\n\f]/g,J=/\r/g,G=/^(?:input|select|textarea|button|object)$/i,K=/^(?:a|area)$/i,Q=/^(?:checked|selected)$/i,Z=k.support.getSetAttribute,ee=k.support.input;k.fn.extend({attr:function(e,t){return k.access(this,k.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){k.removeAttr(this,e)}))},prop:function(e,t){return k.access(this,k.prop,e,t,arguments.length>1)},removeProp:function(e){return e=k.propFix[e]||e,this.each((function(){try{this[e]=i,delete this[e]}catch(e){}}))},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(k.isFunction(e))return this.each((function(t){k(this).addClass(e.call(this,t,this.className))}));if(l)for(t=(e||"").match(N)||[];s>a;a++)if(r=1===(n=this[a]).nodeType&&(n.className?(" "+n.className+" ").replace(V," "):" ")){for(o=0;i=t[o++];)0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=k.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(k.isFunction(e))return this.each((function(t){k(this).removeClass(e.call(this,t,this.className))}));if(l)for(t=(e||"").match(N)||[];s>a;a++)if(r=1===(n=this[a]).nodeType&&(n.className?(" "+n.className+" ").replace(V," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?k.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return k.isFunction(e)?this.each((function(n){k(this).toggleClass(e.call(this,n,this.className,t),t)})):this.each((function(){if("string"===n)for(var i,o=0,a=k(this),l=t,u=e.match(N)||[];i=u[o++];)l=r?l:!a.hasClass(i),a[l?"addClass":"removeClass"](i);else(n===s||"boolean"===n)&&(this.className&&k._data(this,"__className__",this.className),this.className=this.className||!1===e?"":k._data(this,"__className__")||"")}))},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(V," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,o=this[0];return arguments.length?(r=k.isFunction(e),this.each((function(t){var o;1===this.nodeType&&(null==(o=r?e.call(this,t,k(this).val()):e)?o="":"number"==typeof o?o+="":k.isArray(o)&&(o=k.map(o,(function(e){return null==e?"":e+""}))),(n=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&n.set(this,o,"value")!==i||(this.value=o))}))):o?(n=k.valHooks[o.type]||k.valHooks[o.nodeName.toLowerCase()])&&"get"in n&&(t=n.get(o,"value"))!==i?t:"string"==typeof(t=o.value)?t.replace(J,""):null==t?"":t:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;s>l;l++)if(!(!(n=r[l]).selected&&l!==i||(k.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&k.nodeName(n.parentNode,"optgroup"))){if(t=k(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=k.makeArray(t),a=i.length;a--;)((r=i[a]).selected=k.inArray(k(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var r,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===s?k.prop(e,t,n):(1===a&&k.isXMLDoc(e)||(t=t.toLowerCase(),r=k.attrHooks[t]||(k.expr.match.bool.test(t)?Y:U)),n===i?r&&"get"in r&&null!==(o=r.get(e,t))?o:null==(o=k.find.attr(e,t))?i:o:null!==n?r&&"set"in r&&(o=r.set(e,n,t))!==i?o:(e.setAttribute(t,n+""),n):(k.removeAttr(e,t),i))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(N);if(o&&1===e.nodeType)for(;n=o[i++];)r=k.propFix[n]||n,k.expr.match.bool.test(n)?ee&&Z||!Q.test(n)?e[r]=!1:e[k.camelCase("default-"+n)]=e[r]=!1:k.attr(e,n,""),e.removeAttribute(Z?n:r)},attrHooks:{type:{set:function(e,t){if(!k.support.radioValue&&"radio"===t&&k.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var r,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return(1!==a||!k.isXMLDoc(e))&&(t=k.propFix[t]||t,o=k.propHooks[t]),n!==i?o&&"set"in o&&(r=o.set(e,n,t))!==i?r:e[t]=n:o&&"get"in o&&null!==(r=o.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):G.test(e.nodeName)||K.test(e.nodeName)&&e.href?0:-1}}}}),Y={set:function(e,t,n){return!1===t?k.removeAttr(e,n):ee&&Z||!Q.test(n)?e.setAttribute(!Z&&k.propFix[n]||n,n):e[k.camelCase("default-"+n)]=e[n]=!0,n}},k.each(k.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=k.expr.attrHandle[t]||k.find.attr;k.expr.attrHandle[t]=ee&&Z||!Q.test(t)?function(e,t,r){var o=k.expr.attrHandle[t],a=r?i:(k.expr.attrHandle[t]=i)!=n(e,t,r)?t.toLowerCase():null;return k.expr.attrHandle[t]=o,a}:function(e,t,n){return n?i:e[k.camelCase("default-"+t)]?t.toLowerCase():null}})),ee&&Z||(k.attrHooks.value={set:function(e,t,n){return k.nodeName(e,"input")?(e.defaultValue=t,i):U&&U.set(e,t,n)}}),Z||(U={set:function(e,t,n){var r=e.getAttributeNode(n);return r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n)?t:i}},k.expr.attrHandle.id=k.expr.attrHandle.name=k.expr.attrHandle.coords=function(e,t,n){var r;return n?i:(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},k.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:i},set:U.set},k.attrHooks.contenteditable={set:function(e,t,n){U.set(e,""!==t&&t,n)}},k.each(["width","height"],(function(e,t){k.attrHooks[t]={set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):i}}}))),k.support.hrefNormalized||k.each(["href","src"],(function(e,t){k.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),k.support.style||(k.attrHooks.style={get:function(e){return e.style.cssText||i},set:function(e,t){return e.style.cssText=t+""}}),k.support.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){k.propFix[this.toLowerCase()]=this})),k.support.enctype||(k.propFix.enctype="encoding"),k.each(["radio","checkbox"],(function(){k.valHooks[this]={set:function(e,t){return k.isArray(t)?e.checked=k.inArray(k(e).val(),t)>=0:i}},k.support.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}));var te=/^(?:input|select|textarea)$/i,ne=/^key/,re=/^(?:mouse|contextmenu)|click/,ie=/^(?:focusinfocus|focusoutblur)$/,oe=/^([^.]*)(?:\.(.+)|)$/;function ae(){return!0}function se(){return!1}function le(){try{return u.activeElement}catch(e){}}k.event={global:{},add:function(e,t,n,r,o){var a,l,u,c,f,p,d,h,m,g,y,v=k._data(e);if(v){for(n.handler&&(n=(c=n).handler,o=c.selector),n.guid||(n.guid=k.guid++),(l=v.events)||(l=v.events={}),(p=v.handle)||((p=v.handle=function(e){return typeof k===s||e&&k.event.triggered===e.type?i:k.event.dispatch.apply(p.elem,arguments)}).elem=e),u=(t=(t||"").match(N)||[""]).length;u--;)m=y=(a=oe.exec(t[u])||[])[1],g=(a[2]||"").split(".").sort(),m&&(f=k.event.special[m]||{},m=(o?f.delegateType:f.bindType)||m,f=k.event.special[m]||{},d=k.extend({type:m,origType:y,data:r,handler:n,guid:n.guid,selector:o,needsContext:o&&k.expr.match.needsContext.test(o),namespace:g.join(".")},c),(h=l[m])||((h=l[m]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,g,p)||(e.addEventListener?e.addEventListener(m,p,!1):e.attachEvent&&e.attachEvent("on"+m,p))),f.add&&(f.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,d):h.push(d),k.event.global[m]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,f,p,d,h,m,g=k.hasData(e)&&k._data(e);if(g&&(c=g.events)){for(u=(t=(t||"").match(N)||[""]).length;u--;)if(d=m=(s=oe.exec(t[u])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=k.event.special[d]||{},p=c[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=p.length;o--;)a=p[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,f.remove&&f.remove.call(e,a));l&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,g.handle)||k.removeEvent(e,d,g.handle),delete c[d])}else for(d in c)k.event.remove(e,d+t[u],n,r,!0);k.isEmptyObject(c)&&(delete g.handle,k._removeData(e,"events"))}},trigger:function(e,t,r,o){var a,s,l,c,f,p,d,h=[r||u],m=w.call(e,"type")?e.type:e,g=w.call(e,"namespace")?e.namespace.split("."):[];if(l=p=r=r||u,3!==r.nodeType&&8!==r.nodeType&&!ie.test(m+k.event.triggered)&&(m.indexOf(".")>=0&&(g=m.split("."),m=g.shift(),g.sort()),s=0>m.indexOf(":")&&"on"+m,(e=e[k.expando]?e:new k.Event(m,"object"==typeof e&&e)).isTrigger=o?2:3,e.namespace=g.join("."),e.namespace_re=e.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=i,e.target||(e.target=r),t=null==t?[e]:k.makeArray(t,[e]),f=k.event.special[m]||{},o||!f.trigger||!1!==f.trigger.apply(r,t))){if(!o&&!f.noBubble&&!k.isWindow(r)){for(c=f.delegateType||m,ie.test(c+m)||(l=l.parentNode);l;l=l.parentNode)h.push(l),p=l;p===(r.ownerDocument||u)&&h.push(p.defaultView||p.parentWindow||n)}for(d=0;(l=h[d++])&&!e.isPropagationStopped();)e.type=d>1?c:f.bindType||m,(a=(k._data(l,"events")||{})[e.type]&&k._data(l,"handle"))&&a.apply(l,t),(a=s&&l[s])&&k.acceptData(l)&&a.apply&&!1===a.apply(l,t)&&e.preventDefault();if(e.type=m,!o&&!e.isDefaultPrevented()&&(!f._default||!1===f._default.apply(h.pop(),t))&&k.acceptData(r)&&s&&r[m]&&!k.isWindow(r)){(p=r[s])&&(r[s]=null),k.event.triggered=m;try{r[m]()}catch(e){}k.event.triggered=i,p&&(r[s]=p)}return e.result}},dispatch:function(e){e=k.event.fix(e);var t,n,r,o,a,s=[],l=v.call(arguments),u=(k._data(this,"events")||{})[e.type]||[],c=k.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(s=k.event.handlers.call(this,e,u),t=0;(o=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,a=0;(r=o.handlers[a++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(r.namespace))&&(e.handleObj=r,e.data=r.data,(n=((k.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,l))!==i&&!1===(e.result=n)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,o,a,s=[],l=t.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)){for(o=[],a=0;l>a;a++)o[n=(r=t[a]).selector+" "]===i&&(o[n]=r.needsContext?k(n,this).index(u)>=0:k.find(n,this,null,[u]).length),o[n]&&o.push(r);o.length&&s.push({elem:u,handlers:o})}return t.length>l&&s.push({elem:this,handlers:t.slice(l)}),s},fix:function(e){if(e[k.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=re.test(i)?this.mouseHooks:ne.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new k.Event(o),t=r.length;t--;)e[n=r[t]]=o[n];return e.target||(e.target=o.srcElement||u),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,o,a=t.button,s=t.fromElement;return null==e.pageX&&null!=t.clientX&&(o=(r=e.target.ownerDocument||u).documentElement,n=r.body,e.pageX=t.clientX+(o&&o.scrollLeft||n&&n.scrollLeft||0)-(o&&o.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(o&&o.scrollTop||n&&n.scrollTop||0)-(o&&o.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?t.toElement:s),e.which||a===i||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==le()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===le()&&this.blur?(this.blur(),!1):i},delegateType:"focusout"},click:{trigger:function(){return k.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):i},_default:function(e){return k.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==i&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=k.extend(new k.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?k.event.trigger(i,null,t):k.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},k.removeEvent=u.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===s&&(e[r]=null),e.detachEvent(r,n))},k.Event=function(e,t){return this instanceof k.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||!1===e.returnValue||e.getPreventDefault&&e.getPreventDefault()?ae:se):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||k.now(),this[k.expando]=!0,i):new k.Event(e,t)},k.Event.prototype={isDefaultPrevented:se,isPropagationStopped:se,isImmediatePropagationStopped:se,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ae,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ae,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=ae,this.stopPropagation()}},k.each({mouseenter:"mouseover",mouseleave:"mouseout"},(function(e,t){k.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!k.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}})),k.support.submitBubbles||(k.event.special.submit={setup:function(){return!k.nodeName(this,"form")&&(k.event.add(this,"click._submit keypress._submit",(function(e){var t=e.target,n=k.nodeName(t,"input")||k.nodeName(t,"button")?t.form:i;n&&!k._data(n,"submitBubbles")&&(k.event.add(n,"submit._submit",(function(e){e._submit_bubble=!0})),k._data(n,"submitBubbles",!0))})),i)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&k.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!k.nodeName(this,"form")&&(k.event.remove(this,"._submit"),i)}}),k.support.changeBubbles||(k.event.special.change={setup:function(){return te.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(k.event.add(this,"propertychange._change",(function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)})),k.event.add(this,"click._change",(function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),k.event.simulate("change",this,e,!0)}))),!1):(k.event.add(this,"beforeactivate._change",(function(e){var t=e.target;te.test(t.nodeName)&&!k._data(t,"changeBubbles")&&(k.event.add(t,"change._change",(function(e){!this.parentNode||e.isSimulated||e.isTrigger||k.event.simulate("change",this.parentNode,e,!0)})),k._data(t,"changeBubbles",!0))})),i)},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):i},teardown:function(){return k.event.remove(this,"._change"),!te.test(this.nodeName)}}),k.support.focusinBubbles||k.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=0,r=function(e){k.event.simulate(t,e.target,k.event.fix(e),!0)};k.event.special[t]={setup:function(){0==n++&&u.addEventListener(e,r,!0)},teardown:function(){0==--n&&u.removeEventListener(e,r,!0)}}})),k.fn.extend({on:function(e,t,n,r,o){var a,s;if("object"==typeof e){for(a in"string"!=typeof t&&(n=n||t,t=i),e)this.on(a,t,n,e[a],o);return this}if(null==n&&null==r?(r=t,n=t=i):null==r&&("string"==typeof t?(r=n,n=i):(r=n,n=t,t=i)),!1===r)r=se;else if(!r)return this;return 1===o&&(s=r,(r=function(e){return k().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=k.guid++)),this.each((function(){k.event.add(this,e,r,n,t)}))},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,o;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return(!1===t||"function"==typeof t)&&(n=t,t=i),!1===n&&(n=se),this.each((function(){k.event.remove(this,e,n,t)}))},trigger:function(e,t){return this.each((function(){k.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];return n?k.event.trigger(e,t,n,!0):i}});var ue=/^.[^:#\[\.,]*$/,ce=/^(?:parents|prev(?:Until|All))/,fe=k.expr.match.needsContext,pe={children:!0,contents:!0,next:!0,prev:!0};function de(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}function he(e,t,n){if(k.isFunction(t))return k.grep(e,(function(e,r){return!!t.call(e,r,e)!==n}));if(t.nodeType)return k.grep(e,(function(e){return e===t!==n}));if("string"==typeof t){if(ue.test(t))return k.filter(t,e,n);t=k.filter(t,e)}return k.grep(e,(function(e){return k.inArray(e,t)>=0!==n}))}function me(e){var t=ge.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}k.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(k(e).filter((function(){for(t=0;i>t;t++)if(k.contains(r[t],this))return!0})));for(t=0;i>t;t++)k.find(e,r[t],n);return(n=this.pushStack(i>1?k.unique(n):n)).selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=k(e,this),r=n.length;return this.filter((function(){for(t=0;r>t;t++)if(k.contains(this,n[t]))return!0}))},not:function(e){return this.pushStack(he(this,e||[],!0))},filter:function(e){return this.pushStack(he(this,e||[],!1))},is:function(e){return!!he(this,"string"==typeof e&&fe.test(e)?k(e):e||[],!1).length},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=fe.test(e)||"string"!=typeof e?k(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&k.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?k.unique(o):o)},index:function(e){return e?"string"==typeof e?k.inArray(this[0],k(e)):k.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?k(e,t):k.makeArray(e&&e.nodeType?[e]:e),r=k.merge(this.get(),n);return this.pushStack(k.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k.dir(e,"parentNode")},parentsUntil:function(e,t,n){return k.dir(e,"parentNode",n)},next:function(e){return de(e,"nextSibling")},prev:function(e){return de(e,"previousSibling")},nextAll:function(e){return k.dir(e,"nextSibling")},prevAll:function(e){return k.dir(e,"previousSibling")},nextUntil:function(e,t,n){return k.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return k.dir(e,"previousSibling",n)},siblings:function(e){return k.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return k.sibling(e.firstChild)},contents:function(e){return k.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:k.merge([],e.childNodes)}},(function(e,t){k.fn[e]=function(n,r){var i=k.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=k.filter(r,i)),this.length>1&&(pe[e]||(i=k.unique(i)),ce.test(e)&&(i=i.reverse())),this.pushStack(i)}})),k.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,(function(e){return 1===e.nodeType})))},dir:function(e,t,n){for(var r=[],o=e[t];o&&9!==o.nodeType&&(n===i||1!==o.nodeType||!k(o).is(n));)1===o.nodeType&&r.push(o),o=o[t];return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var ge="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ye=/ jQuery\d+="(?:null|\d+)"/g,ve=RegExp("<(?:"+ge+")[\\s/>]","i"),be=/^\s+/,xe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,we=/<([\w:]+)/,Te=/<tbody/i,ke=/<|&#?\w+;/,Ce=/<(?:script|style|link)/i,Ne=/^(?:checkbox|radio)$/i,Ee=/checked\s*(?:[^=]|=\s*.checked.)/i,Se=/^$|\/(?:java|ecma)script/i,je=/^true\/(.*)/,Ae=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,De={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Le=me(u).appendChild(u.createElement("div"));function He(e,t){return k.nodeName(e,"table")&&k.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function _e(e){return e.type=(null!==k.find.attr(e,"type"))+"/"+e.type,e}function Fe(e){var t=je.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function qe(e,t){for(var n,r=0;null!=(n=e[r]);r++)k._data(n,"globalEval",!t||k._data(t[r],"globalEval"))}function Me(e,t){if(1===t.nodeType&&k.hasData(e)){var n,r,i,o=k._data(e),a=k._data(t,o),s=o.events;if(s)for(n in delete a.handle,a.events={},s)for(r=0,i=s[n].length;i>r;r++)k.event.add(t,n,s[n][r]);a.data&&(a.data=k.extend({},a.data))}}function Oe(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!k.support.noCloneEvent&&t[k.expando]){for(r in(i=k._data(t)).events)k.removeEvent(t,r,i.handle);t.removeAttribute(k.expando)}"script"===n&&t.text!==e.text?(_e(t).text=e.text,Fe(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),k.support.html5Clone&&e.innerHTML&&!k.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ne.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function $e(e,t){var n,r,o=0,a=typeof e.getElementsByTagName!==s?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==s?e.querySelectorAll(t||"*"):i;if(!a)for(a=[],n=e.childNodes||e;null!=(r=n[o]);o++)!t||k.nodeName(r,t)?a.push(r):k.merge(a,$e(r,t));return t===i||t&&k.nodeName(e,t)?k.merge([e],a):a}function Pe(e){Ne.test(e.type)&&(e.defaultChecked=e.checked)}De.optgroup=De.option,De.tbody=De.tfoot=De.colgroup=De.caption=De.thead,De.th=De.td,k.fn.extend({text:function(e){return k.access(this,(function(e){return e===i?k.text(this):this.empty().append((this[0]&&this[0].ownerDocument||u).createTextNode(e))}),null,e,arguments.length)},append:function(){return this.domManip(arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||He(this,e).appendChild(e)}))},prepend:function(){return this.domManip(arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=He(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},remove:function(e,t){for(var n,r=e?k.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||k.cleanData($e(n)),n.parentNode&&(t&&k.contains(n.ownerDocument,n)&&qe($e(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&k.cleanData($e(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&k.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return k.clone(this,e,t)}))},html:function(e){return k.access(this,(function(e){var t=this[0]||{},n=0,r=this.length;if(e===i)return 1===t.nodeType?t.innerHTML.replace(ye,""):i;if(!("string"!=typeof e||Ce.test(e)||!k.support.htmlSerialize&&ve.test(e)||!k.support.leadingWhitespace&&be.test(e)||De[(we.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(xe,"<$1></$2>");try{for(;r>n;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData($e(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=k.map(this,(function(e){return[e.nextSibling,e.parentNode]})),t=0;return this.domManip(arguments,(function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),k(this).remove(),i.insertBefore(n,r))}),!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=g.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,f=this,p=c-1,d=e[0],h=k.isFunction(d);if(h||!(1>=c||"string"!=typeof d||k.support.checkClone)&&Ee.test(d))return this.each((function(r){var i=f.eq(r);h&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)}));if(c&&(r=(l=k.buildFragment(e,this[0].ownerDocument,!1,!n&&this)).firstChild,1===l.childNodes.length&&(l=r),r)){for(o=(a=k.map($e(l,"script"),_e)).length;c>u;u++)i=l,u!==p&&(i=k.clone(i,!0,!0),o&&k.merge(a,$e(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,k.map(a,Fe),u=0;o>u;u++)i=a[u],Se.test(i.type||"")&&!k._data(i,"globalEval")&&k.contains(s,i)&&(i.src?k._evalUrl(i.src):k.globalEval((i.text||i.textContent||i.innerHTML||"").replace(Ae,"")));l=r=null}return this}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){k.fn[e]=function(e){for(var n,r=0,i=[],o=k(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),k(o[r])[t](n),y.apply(i,n.get());return this.pushStack(i)}})),k.extend({clone:function(e,t,n){var r,i,o,a,s,l=k.contains(e.ownerDocument,e);if(k.support.html5Clone||k.isXMLDoc(e)||!ve.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Le.innerHTML=e.outerHTML,Le.removeChild(o=Le.firstChild)),!(k.support.noCloneEvent&&k.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(r=$e(o),s=$e(e),a=0;null!=(i=s[a]);++a)r[a]&&Oe(i,r[a]);if(t)if(n)for(s=s||$e(e),r=r||$e(o),a=0;null!=(i=s[a]);a++)Me(i,r[a]);else Me(e,o);return(r=$e(o,"script")).length>0&&qe(r,!l&&$e(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){for(var i,o,a,s,l,u,c,f=e.length,p=me(t),d=[],h=0;f>h;h++)if((o=e[h])||0===o)if("object"===k.type(o))k.merge(d,o.nodeType?[o]:o);else if(ke.test(o)){for(s=s||p.appendChild(t.createElement("div")),l=(we.exec(o)||["",""])[1].toLowerCase(),c=De[l]||De._default,s.innerHTML=c[1]+o.replace(xe,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;if(!k.support.leadingWhitespace&&be.test(o)&&d.push(t.createTextNode(be.exec(o)[0])),!k.support.tbody)for(i=(o="table"!==l||Te.test(o)?"<table>"!==c[1]||Te.test(o)?0:s:s.firstChild)&&o.childNodes.length;i--;)k.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u);for(k.merge(d,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=p.lastChild}else d.push(t.createTextNode(o));for(s&&p.removeChild(s),k.support.appendChecked||k.grep($e(d,"input"),Pe),h=0;o=d[h++];)if((!r||-1===k.inArray(o,r))&&(a=k.contains(o.ownerDocument,o),s=$e(p.appendChild(o),"script"),a&&qe(s),n))for(i=0;o=s[i++];)Se.test(o.type||"")&&n.push(o);return s=null,p},cleanData:function(e,t){for(var n,r,i,o,a=0,l=k.expando,u=k.cache,c=k.support.deleteExpando,f=k.event.special;null!=(n=e[a]);a++)if((t||k.acceptData(n))&&(o=(i=n[l])&&u[i])){if(o.events)for(r in o.events)f[r]?k.event.remove(n,r):k.removeEvent(n,r,o.handle);u[i]&&(delete u[i],c?delete n[l]:typeof n.removeAttribute!==s?n.removeAttribute(l):n[l]=null,h.push(i))}},_evalUrl:function(e){return k.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})}}),k.fn.extend({wrapAll:function(e){if(k.isFunction(e))return this.each((function(t){k(this).wrapAll(e.call(this,t))}));if(this[0]){var t=k(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e})).append(this)}return this},wrapInner:function(e){return k.isFunction(e)?this.each((function(t){k(this).wrapInner(e.call(this,t))})):this.each((function(){var t=k(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=k.isFunction(e);return this.each((function(n){k(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(){return this.parent().each((function(){k.nodeName(this,"body")||k(this).replaceWith(this.childNodes)})).end()}});var Be,Re,We,Ie=/alpha\([^)]*\)/i,ze=/opacity\s*=\s*([^)]*)/,Xe=/^(top|right|bottom|left)$/,Ue=/^(none|table(?!-c[ea]).+)/,Ye=/^margin/,Ve=RegExp("^("+C+")(.*)$","i"),Je=RegExp("^("+C+")(?!px)[a-z%]+$","i"),Ge=RegExp("^([+-])=("+C+")","i"),Ke={BODY:"block"},Qe={position:"absolute",visibility:"hidden",display:"block"},Ze={letterSpacing:0,fontWeight:400},et=["Top","Right","Bottom","Left"],tt=["Webkit","O","Moz","ms"];function nt(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=tt.length;i--;)if((t=tt[i]+n)in e)return t;return r}function rt(e,t){return e=t||e,"none"===k.css(e,"display")||!k.contains(e.ownerDocument,e)}function it(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)(r=e[a]).style&&(o[a]=k._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&rt(r)&&(o[a]=k._data(r,"olddisplay",lt(r.nodeName)))):o[a]||(i=rt(r),(n&&"none"!==n||!i)&&k._data(r,"olddisplay",i?n:k.css(r,"display"))));for(a=0;s>a;a++)(r=e[a]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function ot(e,t,n){var r=Ve.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function at(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=k.css(e,n+et[o],!0,i)),r?("content"===n&&(a-=k.css(e,"padding"+et[o],!0,i)),"margin"!==n&&(a-=k.css(e,"border"+et[o]+"Width",!0,i))):(a+=k.css(e,"padding"+et[o],!0,i),"padding"!==n&&(a+=k.css(e,"border"+et[o]+"Width",!0,i)));return a}function st(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Re(e),a=k.support.boxSizing&&"border-box"===k.css(e,"boxSizing",!1,o);if(0>=i||null==i){if((0>(i=We(e,t,o))||null==i)&&(i=e.style[t]),Je.test(i))return i;r=a&&(k.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+at(e,t,n||(a?"border":"content"),r,o)+"px"}function lt(e){var t=u,n=Ke[e];return n||("none"!==(n=ut(e,t))&&n||((t=((Be=(Be||k("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement))[0].contentWindow||Be[0].contentDocument).document).write("<!doctype html><html><body>"),t.close(),n=ut(e,t),Be.detach()),Ke[e]=n),n}function ut(e,t){var n=k(t.createElement(e)).appendTo(t.body),r=k.css(n[0],"display");return n.remove(),r}k.fn.extend({css:function(e,t){return k.access(this,(function(e,t,n){var r,o,a={},s=0;if(k.isArray(t)){for(o=Re(e),r=t.length;r>s;s++)a[t[s]]=k.css(e,t[s],!1,o);return a}return n!==i?k.style(e,t,n):k.css(e,t)}),e,t,arguments.length>1)},show:function(){return it(this,!0)},hide:function(){return it(this)},toggle:function(e){var t="boolean"==typeof e;return this.each((function(){(t?e:rt(this))?k(this).show():k(this).hide()}))}}),k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:k.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=k.camelCase(t),u=e.style;if(t=k.cssProps[l]||(k.cssProps[l]=nt(u,l)),s=k.cssHooks[t]||k.cssHooks[l],n===i)return s&&"get"in s&&(o=s.get(e,!1,r))!==i?o:u[t];if("string"===(a=typeof n)&&(o=Ge.exec(n))&&(n=(o[1]+1)*o[2]+parseFloat(k.css(e,t)),a="number"),!(null==n||"number"===a&&isNaN(n)||("number"!==a||k.cssNumber[l]||(n+="px"),k.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===i)))try{u[t]=n}catch(e){}}},css:function(e,t,n,r){var o,a,s,l=k.camelCase(t);return t=k.cssProps[l]||(k.cssProps[l]=nt(e.style,l)),(s=k.cssHooks[t]||k.cssHooks[l])&&"get"in s&&(a=s.get(e,!0,n)),a===i&&(a=We(e,t,r)),"normal"===a&&t in Ze&&(a=Ze[t]),""===n||n?(o=parseFloat(a),!0===n||k.isNumeric(o)?o||0:a):a}}),n.getComputedStyle?(Re=function(e){return n.getComputedStyle(e,null)},We=function(e,t,n){var r,o,a,s=n||Re(e),l=s?s.getPropertyValue(t)||s[t]:i,u=e.style;return s&&(""!==l||k.contains(e.ownerDocument,e)||(l=k.style(e,t)),Je.test(l)&&Ye.test(t)&&(r=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=r,u.minWidth=o,u.maxWidth=a)),l}):u.documentElement.currentStyle&&(Re=function(e){return e.currentStyle},We=function(e,t,n){var r,o,a,s=n||Re(e),l=s?s[t]:i,u=e.style;return null==l&&u&&u[t]&&(l=u[t]),Je.test(l)&&!Xe.test(t)&&(r=u.left,(a=(o=e.runtimeStyle)&&o.left)&&(o.left=e.currentStyle.left),u.left="fontSize"===t?"1em":l,l=u.pixelLeft+"px",u.left=r,a&&(o.left=a)),""===l?"auto":l}),k.each(["height","width"],(function(e,t){k.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&Ue.test(k.css(e,"display"))?k.swap(e,Qe,(function(){return st(e,t,r)})):st(e,t,r):i},set:function(e,n,r){var i=r&&Re(e);return ot(0,n,r?at(e,t,r,k.support.boxSizing&&"border-box"===k.css(e,"boxSizing",!1,i),i):0)}}})),k.support.opacity||(k.cssHooks.opacity={get:function(e,t){return ze.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=k.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===k.trim(o.replace(Ie,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=Ie.test(o)?o.replace(Ie,i):o+" "+i)}}),k((function(){k.support.reliableMarginRight||(k.cssHooks.marginRight={get:function(e,t){return t?k.swap(e,{display:"inline-block"},We,[e,"marginRight"]):i}}),!k.support.pixelPosition&&k.fn.position&&k.each(["top","left"],(function(e,t){k.cssHooks[t]={get:function(e,n){return n?(n=We(e,t),Je.test(n)?k(e).position()[t]+"px":n):i}}}))})),k.expr&&k.expr.filters&&(k.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!k.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||k.css(e,"display"))},k.expr.filters.visible=function(e){return!k.expr.filters.hidden(e)}),k.each({margin:"",padding:"",border:"Width"},(function(e,t){k.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+et[r]+t]=o[r]||o[r-2]||o[0];return i}},Ye.test(e)||(k.cssHooks[e+t].set=ot)}));var ct=/%20/g,ft=/\[\]$/,pt=/\r?\n/g,dt=/^(?:submit|button|image|reset|file)$/i,ht=/^(?:input|select|textarea|keygen)/i;function mt(e,t,n,r){var i;if(k.isArray(t))k.each(t,(function(t,i){n||ft.test(e)?r(e,i):mt(e+"["+("object"==typeof i?t:"")+"]",i,n,r)}));else if(n||"object"!==k.type(t))r(e,t);else for(i in t)mt(e+"["+i+"]",t[i],n,r)}k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&ht.test(this.nodeName)&&!dt.test(e)&&(this.checked||!Ne.test(e))})).map((function(e,t){var n=k(this).val();return null==n?null:k.isArray(n)?k.map(n,(function(e){return{name:t.name,value:e.replace(pt,"\r\n")}})):{name:t.name,value:n.replace(pt,"\r\n")}})).get()}}),k.param=function(e,t){var n,r=[],o=function(e,t){t=k.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===i&&(t=k.ajaxSettings&&k.ajaxSettings.traditional),k.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,(function(){o(this.name,this.value)}));else for(n in e)mt(n,e[n],t,o);return r.join("&").replace(ct,"+")},k.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),(function(e,t){k.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var gt,yt,vt=k.now(),bt=/\?/,xt=/#.*$/,wt=/([?&])_=[^&]*/,Tt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,kt=/^(?:GET|HEAD)$/,Ct=/^\/\//,Nt=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Et=k.fn.load,St={},jt={},At="*/".concat("*");try{yt=l.href}catch(e){(yt=u.createElement("a")).href="",yt=yt.href}function Dt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(N)||[];if(k.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Lt(e,t,n,r){var o={},a=e===jt;function s(l){var u;return o[l]=!0,k.each(e[l]||[],(function(e,l){var c=l(t,n,r);return"string"!=typeof c||a||o[c]?a?!(u=c):i:(t.dataTypes.unshift(c),s(c),!1)})),u}return s(t.dataTypes[0])||!o["*"]&&s("*")}function Ht(e,t){var n,r,o=k.ajaxSettings.flatOptions||{};for(r in t)t[r]!==i&&((o[r]?e:n||(n={}))[r]=t[r]);return n&&k.extend(!0,e,n),e}gt=Nt.exec(yt.toLowerCase())||[],k.fn.load=function(e,t,n){if("string"!=typeof e&&Et)return Et.apply(this,arguments);var r,o,a,s=this,l=e.indexOf(" ");return l>=0&&(r=e.slice(l,e.length),e=e.slice(0,l)),k.isFunction(t)?(n=t,t=i):t&&"object"==typeof t&&(a="POST"),s.length>0&&k.ajax({url:e,type:a,dataType:"html",data:t}).done((function(e){o=arguments,s.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)})).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){k.fn[t]=function(e){return this.on(t,e)}})),k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yt,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":At,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":k.parseJSON,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ht(Ht(e,k.ajaxSettings),t):Ht(k.ajaxSettings,e)},ajaxPrefilter:Dt(St),ajaxTransport:Dt(jt),ajax:function(e,t){"object"==typeof e&&(t=e,e=i),t=t||{};var n,r,o,a,s,l,u,c,f=k.ajaxSetup({},t),p=f.context||f,d=f.context&&(p.nodeType||p.jquery)?k(p):k.event,h=k.Deferred(),m=k.Callbacks("once memory"),g=f.statusCode||{},y={},v={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c)for(c={};t=Tt.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)g[t]=[g[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||x;return u&&u.abort(t),T(0,t),this}};if(h.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,f.url=((e||f.url||yt)+"").replace(xt,"").replace(Ct,gt[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=k.trim(f.dataType||"*").toLowerCase().match(N)||[""],null==f.crossDomain&&(n=Nt.exec(f.url.toLowerCase()),f.crossDomain=!(!n||n[1]===gt[1]&&n[2]===gt[2]&&(n[3]||("http:"===n[1]?"80":"443"))===(gt[3]||("http:"===gt[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=k.param(f.data,f.traditional)),Lt(St,f,t,w),2===b)return w;for(r in(l=f.global)&&0==k.active++&&k.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!kt.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(bt.test(o)?"&":"?")+f.data,delete f.data),!1===f.cache&&(f.url=wt.test(o)?o.replace(wt,"$1_="+vt++):o+(bt.test(o)?"&":"?")+"_="+vt++)),f.ifModified&&(k.lastModified[o]&&w.setRequestHeader("If-Modified-Since",k.lastModified[o]),k.etag[o]&&w.setRequestHeader("If-None-Match",k.etag[o])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+At+"; q=0.01":""):f.accepts["*"]),f.headers)w.setRequestHeader(r,f.headers[r]);if(f.beforeSend&&(!1===f.beforeSend.call(p,w,f)||2===b))return w.abort();for(r in x="abort",{success:1,error:1,complete:1})w[r](f[r]);if(u=Lt(jt,f,t,w)){w.readyState=1,l&&d.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(s=setTimeout((function(){w.abort("timeout")}),f.timeout));try{b=1,u.send(y,T)}catch(e){if(!(2>b))throw e;T(-1,e)}}else T(-1,"No Transport");function T(e,t,n,r){var c,y,v,x,T,C=t;2!==b&&(b=2,s&&clearTimeout(s),u=i,a=r||"",w.readyState=e>0?4:0,c=e>=200&&300>e||304===e,n&&(x=function(e,t,n){var r,o,a,s,l=e.contents,u=e.dataTypes;for(;"*"===u[0];)u.shift(),o===i&&(o=e.mimeType||t.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in n)a=u[0];else{for(s in n){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}r||(r=s)}a=a||r}return a?(a!==u[0]&&u.unshift(a),n[a]):i}(f,w,n)),x=function(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();for(;o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(a=u[l+" "+o]||u["* "+o]))for(i in u)if((s=i.split(" "))[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){!0===a?a=u[i]:!0!==u[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(f,x,w,c),c?(f.ifModified&&((T=w.getResponseHeader("Last-Modified"))&&(k.lastModified[o]=T),(T=w.getResponseHeader("etag"))&&(k.etag[o]=T)),204===e||"HEAD"===f.type?C="nocontent":304===e?C="notmodified":(C=x.state,y=x.data,c=!(v=x.error))):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),w.status=e,w.statusText=(t||C)+"",c?h.resolveWith(p,[y,C,w]):h.rejectWith(p,[w,C,v]),w.statusCode(g),g=i,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[w,f,c?y:v]),m.fireWith(p,[w,C]),l&&(d.trigger("ajaxComplete",[w,f]),--k.active||k.event.trigger("ajaxStop")))}return w},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,i,t,"script")}}),k.each(["get","post"],(function(e,t){k[t]=function(e,n,r,o){return k.isFunction(n)&&(o=o||r,r=n,n=i),k.ajax({url:e,type:t,dataType:o,data:n,success:r})}})),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",(function(e){e.cache===i&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)})),k.ajaxTransport("script",(function(e){if(e.crossDomain){var t,n=u.head||k("head")[0]||u.documentElement;return{send:function(r,i){(t=u.createElement("script")).async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(i,!0)}}}}));var _t=[],Ft=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=_t.pop()||k.expando+"_"+vt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",(function(e,t,r){var o,a,s,l=!1!==e.jsonp&&(Ft.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ft.test(e.data)&&"data");return l||"jsonp"===e.dataTypes[0]?(o=e.jsonpCallback=k.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,l?e[l]=e[l].replace(Ft,"$1"+o):!1!==e.jsonp&&(e.url+=(bt.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return s||k.error(o+" was not called"),s[0]},e.dataTypes[0]="json",a=n[o],n[o]=function(){s=arguments},r.always((function(){n[o]=a,e[o]&&(e.jsonpCallback=t.jsonpCallback,_t.push(o)),s&&k.isFunction(a)&&a(s[0]),s=a=i})),"script"):i}));var qt,Mt,Ot=0,$t=n.ActiveXObject&&function(){var e;for(e in qt)qt[e](i,!0)};function Pt(){try{return new n.XMLHttpRequest}catch(e){}}k.ajaxSettings.xhr=n.ActiveXObject?function(){return!this.isLocal&&Pt()||function(){try{return new n.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}()}:Pt,Mt=k.ajaxSettings.xhr(),k.support.cors=!!Mt&&"withCredentials"in Mt,(Mt=k.support.ajax=!!Mt)&&k.ajaxTransport((function(e){var t;if(!e.crossDomain||k.support.cors)return{send:function(r,o){var a,s,l=e.xhr();if(e.username?l.open(e.type,e.url,e.async,e.username,e.password):l.open(e.type,e.url,e.async),e.xhrFields)for(s in e.xhrFields)l[s]=e.xhrFields[s];e.mimeType&&l.overrideMimeType&&l.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");try{for(s in r)l.setRequestHeader(s,r[s])}catch(e){}l.send(e.hasContent&&e.data||null),t=function(n,r){var s,u,c,f;try{if(t&&(r||4===l.readyState))if(t=i,a&&(l.onreadystatechange=k.noop,$t&&delete qt[a]),r)4!==l.readyState&&l.abort();else{f={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(f.text=l.responseText);try{c=l.statusText}catch(e){c=""}s||!e.isLocal||e.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(e){r||o(-1,e)}f&&o(s,c,f,u)},e.async?4===l.readyState?setTimeout(t):(a=++Ot,$t&&(qt||(qt={},k(n).unload($t)),qt[a]=t),l.onreadystatechange=t):t()},abort:function(){t&&t(i,!0)}}}));var Bt,Rt,Wt=/^(?:toggle|show|hide)$/,It=RegExp("^(?:([+-])=|)("+C+")([a-z%]*)$","i"),zt=/queueHooks$/,Xt=[function(e,t,n){var r,i,o,a,s,l,u=this,c={},f=e.style,p=e.nodeType&&rt(e),d=k._data(e,"fxshow");for(r in n.queue||(null==(s=k._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always((function(){u.always((function(){s.unqueued--,k.queue(e,"fx").length||s.empty.fire()}))}))),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],"inline"===k.css(e,"display")&&"none"===k.css(e,"float")&&(k.support.inlineBlockNeedsLayout&&"inline"!==lt(e.nodeName)?f.zoom=1:f.display="inline-block")),n.overflow&&(f.overflow="hidden",k.support.shrinkWrapBlocks||u.always((function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}))),t)if(i=t[r],Wt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(p?"hide":"show"))continue;c[r]=d&&d[r]||k.style(e,r)}if(!k.isEmptyObject(c))for(r in d?"hidden"in d&&(p=d.hidden):d=k._data(e,"fxshow",{}),o&&(d.hidden=!p),p?k(e).show():u.done((function(){k(e).hide()})),u.done((function(){var t;for(t in k._removeData(e,"fxshow"),c)k.style(e,t,c[t])})),c)a=Vt(p?d[r]:0,r,u),r in d||(d[r]=a.start,p&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}],Ut={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=It.exec(t),o=i&&i[3]||(k.cssNumber[e]?"":"px"),a=(k.cssNumber[e]||"px"!==o&&+r)&&It.exec(k.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do{a/=s=s||".5",k.style(n.elem,e,a+o)}while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(n.unit=o,n.start=+a||+r||0,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Yt(){return setTimeout((function(){Bt=i})),Bt=k.now()}function Vt(e,t,n){for(var r,i=(Ut[t]||[]).concat(Ut["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r}function Jt(e,t,n){var r,i,o=0,a=Xt.length,s=k.Deferred().always((function(){delete l.elem})),l=function(){if(i)return!1;for(var t=Bt||Yt(),n=Math.max(0,u.startTime+u.duration-t),r=1-(n/u.duration||0),o=0,a=u.tweens.length;a>o;o++)u.tweens[o].run(r);return s.notifyWith(e,[u,r,n]),1>r&&a?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:k.extend({},t),opts:k.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Bt||Yt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=k.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(function(e,t){var n,r,i,o,a;for(n in e)if(r=k.camelCase(n),i=t[r],o=e[n],k.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,u.opts.specialEasing);a>o;o++)if(r=Xt[o].call(u,e,c,u.opts))return r;return k.map(c,Vt,u),k.isFunction(u.opts.start)&&u.opts.start.call(e,u),k.fx.timer(k.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function Gt(e,t,n,r,i){return new Gt.prototype.init(e,t,n,r,i)}function Kt(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)r["margin"+(n=et[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function Qt(e){return k.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}k.Animation=k.extend(Jt,{tweener:function(e,t){k.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],Ut[n]=Ut[n]||[],Ut[n].unshift(t)},prefilter:function(e,t){t?Xt.unshift(e):Xt.push(e)}}),k.Tween=Gt,Gt.prototype={constructor:Gt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=Gt.propHooks[this.prop];return e&&e.get?e.get(this):Gt.propHooks._default.get(this)},run:function(e){var t,n=Gt.propHooks[this.prop];return this.pos=t=this.options.duration?k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Gt.propHooks._default.set(this),this}},Gt.prototype.init.prototype=Gt.prototype,Gt.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0:e.elem[e.prop]},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[k.cssProps[e.prop]]||k.cssHooks[e.prop])?k.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Gt.propHooks.scrollTop=Gt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.each(["toggle","show","hide"],(function(e,t){var n=k.fn[t];k.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Kt(t,!0),e,r,i)}})),k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(rt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=k.isEmptyObject(e),o=k.speed(t,n,r),a=function(){var t=Jt(this,k.extend({},e),o);a.finish=function(){t.stop(!0)},(i||k._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=i),t&&!1!==e&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",o=k.timers,a=k._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&zt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&k.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=k._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=k.timers,a=r?r.length:0;for(n.finish=!0,k.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish}))}}),k.each({slideDown:Kt("show"),slideUp:Kt("hide"),slideToggle:Kt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){k.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||k.isFunction(e)&&e,duration:e,easing:n&&t||t&&!k.isFunction(t)&&t};return r.duration=k.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in k.fx.speeds?k.fx.speeds[r.duration]:k.fx.speeds._default,(null==r.queue||!0===r.queue)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){k.isFunction(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},k.timers=[],k.fx=Gt.prototype.init,k.fx.tick=function(){var e,t=k.timers,n=0;for(Bt=k.now();t.length>n;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||k.fx.stop(),Bt=i},k.fx.timer=function(e){e()&&k.timers.push(e)&&k.fx.start()},k.fx.interval=13,k.fx.start=function(){Rt||(Rt=setInterval(k.fx.tick,k.fx.interval))},k.fx.stop=function(){clearInterval(Rt),Rt=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fx.step={},k.expr&&k.expr.filters&&(k.expr.filters.animated=function(e){return k.grep(k.timers,(function(t){return e===t.elem})).length}),k.fn.offset=function(e){if(arguments.length)return e===i?this:this.each((function(t){k.offset.setOffset(this,e,t)}));var t,n,r={top:0,left:0},o=this[0],a=o&&o.ownerDocument;return a?(t=a.documentElement,k.contains(t,o)?(typeof o.getBoundingClientRect!==s&&(r=o.getBoundingClientRect()),n=Qt(a),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r):void 0},k.offset={setOffset:function(e,t,n){var r=k.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=k(e),s=a.offset(),l=k.css(e,"top"),u=k.css(e,"left"),c={},f={};("absolute"===r||"fixed"===r)&&k.inArray("auto",[l,u])>-1?(i=(f=a.position()).top,o=f.left):(i=parseFloat(l)||0,o=parseFloat(u)||0),k.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(c.top=t.top-s.top+i),null!=t.left&&(c.left=t.left-s.left+o),"using"in t?t.using.call(e,c):a.css(c)}},k.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===k.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),k.nodeName(e[0],"html")||(n=e.offset()),n.top+=k.css(e[0],"borderTopWidth",!0),n.left+=k.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-k.css(r,"marginTop",!0),left:t.left-n.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent||c;e&&!k.nodeName(e,"html")&&"static"===k.css(e,"position");)e=e.offsetParent;return e||c}))}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n=/Y/.test(t);k.fn[e]=function(r){return k.access(this,(function(e,r,o){var a=Qt(e);return o===i?a?t in a?a[t]:a.document.documentElement[r]:e[r]:(a?a.scrollTo(n?k(a).scrollLeft():o,n?o:k(a).scrollTop()):e[r]=o,i)}),e,r,arguments.length,null)}})),k.each({Height:"height",Width:"width"},(function(e,t){k.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){k.fn[r]=function(r,o){var a=arguments.length&&(n||"boolean"!=typeof r),s=n||(!0===r||!0===o?"margin":"border");return k.access(this,(function(t,n,r){var o;return k.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):r===i?k.css(t,n,s):k.style(t,n,r,s)}),t,a?r:i,a,null)}}))})),k.fn.size=function(){return this.length},k.fn.andSelf=k.fn.addBack,"object"==typeof e.exports?e.exports=k:(n.jQuery=n.$=k,void 0===(r=function(){return k}.apply(t,[]))||(e.exports=r))}(window)},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r)()(!1);i.push([e.i,".loader {\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: 0 auto;\r\n}\r\nsvg {\r\n  width: 90%;\r\n  fill: none;\r\n}\r\n.load {\r\n  transform-origin: 50% 50%;\r\n  stroke-dasharray: 570;\r\n  stroke-width: 20px;\r\n}\r\n.load.one {\r\n  stroke: #554d73;\r\n  animation: load 1.5s infinite;\r\n}\r\n.load.two {\r\n  stroke: #a496a4;\r\n  animation: load 1.5s infinite;\r\n  animation-delay: 0.1s;\r\n}\r\n.load.three {\r\n  stroke: #a5a7bb;\r\n  animation: load 1.5s infinite;\r\n  animation-delay: 0.2s;\r\n}\r\n.point {\r\n  animation: bounce 1s infinite ease-in-out;\r\n}\r\n.point.one {\r\n  fill: #a5a7bb;\r\n  animation-delay: 0s;\r\n}\r\n.point.two {\r\n  fill: #a496a4;\r\n  animation-delay: 0.1s;\r\n}\r\n.point.three {\r\n  fill: #554d73;\r\n  animation-delay: 0.2s;\r\n}\r\n@keyframes bounce {\r\n  0%,\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n  50% {\r\n    transform: translateY(-20px);\r\n  }\r\n}\r\n@keyframes load {\r\n  0% {\r\n    stroke-dashoffset: 570;\r\n  }\r\n  50% {\r\n    stroke-dashoffset: 530;\r\n  }\r\n  100% {\r\n    stroke-dashoffset: 570;\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n",""]),t.default=i},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r)()(!1);i.push([e.i,"/* \r\nTAG 友链页CSS\r\n*/\r\n/* 边框呼吸灯效果 */\r\n@keyframes link_custom {\r\n    from {\r\n        box-shadow: 0 0 5px var(--primary-color, grey),\r\n            inset 0 0 5px var(--primary-color, grey),\r\n            0 1px 0 var(--primary-color, grey);\r\n    }\r\n\r\n    to {\r\n        box-shadow: 0 0 20px var(--primary-color, grey),\r\n            inset 0 0 10px var(--primary-color, grey),\r\n            0 1px 0 var(--primary-color, grey);\r\n    }\r\n}\r\n/* 边框彩色呼吸灯 */\r\n@keyframes link_custom1 {\r\n    0% {\r\n        box-shadow: 0 0 4px #ca00ff;\r\n    }\r\n\r\n    25% {\r\n        box-shadow: 0 0 16px #00b5e5;\r\n    }\r\n\r\n    50% {\r\n        box-shadow: 0 0 4px #00f;\r\n    }\r\n\r\n    75% {\r\n        box-shadow: 0 0 16px #b1da21;\r\n    }\r\n\r\n    100% {\r\n        box-shadow: 0 0 4px #f00;\r\n    }\r\n}\r\n/* 边框闪烁 */\r\n@keyframes borderFlash {\r\n    from {\r\n        border-color: transparent;\r\n    }\r\n\r\n    to {\r\n        border-color: var(--primary-color, grey);\r\n    }\r\n}\r\n/* 头像自动旋转 */\r\n@keyframes auto_rotate_left {\r\n    from {\r\n        transform: rotate(0);\r\n    }\r\n    to {\r\n        transform: rotate(-360deg);\r\n    }\r\n}\r\n@keyframes auto_rotate_right {\r\n    from {\r\n        transform: rotate(0);\r\n    }\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n.flink#article-container .flink-list > .flink-list-item a:hover {\r\n    color: #fff;\r\n}\r\n\r\n.flink .flink-list > .flink-list-item a {\r\n    color: var(--primary-color, #49b1f5);\r\n    text-decoration: none;\r\n}\r\n\r\n.flink .flink-list > .flink-list-item:hover {\r\n    box-shadow: 0 2px 20px var(--primary-color, #49b1f5);\r\n    animation-play-state: paused;\r\n}\r\n\r\n.flink#article-container .flink-list > .flink-list-item:before {\r\n    background: var(--primary-color, #49b1f5);\r\n}\r\n\r\n.flink .flink-list > .flink-list-item {\r\n    border: 0px solid var(--primary-color, #49b1f5);\r\n}\r\n.flink#article-container .flink-list > .flink-list-item:hover img {\r\n    -webkit-transform: rotate(var(--primary-rotate));\r\n    -moz-transform: rotate(var(--primary-rotate));\r\n    -o-transform: rotate(var(--primary-rotate));\r\n    -ms-transform: rotate(var(--primary-rotate));\r\n    transform: rotate(var(--primary-rotate));\r\n}\r\n/* 头像自动旋转 */\r\n.flink#article-container .flink-list > .flink-list-item a .lauto {\r\n    animation: auto_rotate_left var(--autotime) linear infinite;\r\n}\r\n.flink#article-container .flink-list > .flink-list-item a .rauto {\r\n    animation: auto_rotate_right var(--autotime) linear infinite;\r\n}\r\n/* 友联字体颜色 */\r\n\r\n/* name与desc的颜色 */\r\n.flink#article-container .flink-list > .flink-list-item .customcolor {\r\n    color: var(--namecolor, #1f2d3d);\r\n}\r\n/* name与des鼠标悬停的字体颜色 */\r\n.flink#article-container .flink-list > .flink-list-item .customcolor:hover {\r\n    color: #fff;\r\n}",""]),t.default=i}]);
>>>>>>> e350733ca8152a74b8f65a0e6c095fbbfc14a428
