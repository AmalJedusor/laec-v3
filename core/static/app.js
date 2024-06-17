/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
(function(e, t) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) {
                throw new Error("jQuery requires a window with a document")
            };
            return t(e)
        }
    } else {
        t(e)
    }
}(typeof window !== "undefined" ? window : this, function(t, n) {
    var c = [],
        r = t.document,
        h = c.slice,
        Ie = c.concat,
        oe = c.push,
        ze = c.indexOf,
        R = {};
    var dn = R.toString,
        k = R.hasOwnProperty,
        i = {};
    var We = "1.12.4",
        e = function(t, n) {
            return new e.fn.init(t, n)
        },
        un = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ln = /^-ms-/,
        fn = /-([\da-z])/gi,
        cn = function(e, t) {
            return t.toUpperCase()
        };
    e.fn = e.prototype = {
        jquery: We,
        constructor: e,
        selector: "",
        length: 0,
        toArray: function() {
            return h.call(this)
        },
        get: function(e) {
            return e != null ? (e < 0 ? this[e + this.length] : this[e]) : h.call(this)
        },
        pushStack: function(t) {
            var n = e.merge(this.constructor(), t);
            n.prevObject = this;
            n.context = this.context;
            return n
        },
        each: function(t) {
            return e.each(this, t)
        },
        map: function(t) {
            return this.pushStack(e.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(h.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var n = this.length,
                t = +e + (e < 0 ? n : 0);
            return this.pushStack(t >= 0 && t < n ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: c.sort,
        splice: c.splice
    };
    e.extend = e.fn.extend = function() {
        var i, a, n, o, s, u, t = arguments[0] || {},
            r = 1,
            f = arguments.length,
            l = !1;
        if (typeof t === "boolean") {
            l = t;
            t = arguments[r] || {};
            r++
        };
        if (typeof t !== "object" && !e.isFunction(t)) {
            t = {}
        };
        if (r === f) {
            t = this;
            r--
        };
        for (; r < f; r++) {
            if ((s = arguments[r]) != null) {
                for (o in s) {
                    i = t[o];
                    n = s[o];
                    if (t === n) {
                        continue
                    };
                    if (l && n && (e.isPlainObject(n) || (a = e.isArray(n)))) {
                        if (a) {
                            a = !1;
                            u = i && e.isArray(i) ? i : []
                        } else {
                            u = i && e.isPlainObject(i) ? i : {}
                        };
                        t[o] = e.extend(l, u, n)
                    } else if (n !== undefined) {
                        t[o] = n
                    }
                }
            }
        };
        return t
    };
    e.extend({
        expando: "jQuery" + (We + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(t) {
            return e.type(t) === "function"
        },
        isArray: Array.isArray || function(t) {
            return e.type(t) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(t) {
            var n = t && t.toString();
            return !e.isArray(t) && (n - parseFloat(n) + 1) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return !1
            };
            return !0
        },
        isPlainObject: function(t) {
            var r;
            if (!t || e.type(t) !== "object" || t.nodeType || e.isWindow(t)) {
                return !1
            };
            try {
                if (t.constructor && !k.call(t, "constructor") && !k.call(t.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (n) {
                return !1
            };
            if (!i.ownFirst) {
                for (r in t) {
                    return k.call(t, r)
                }
            };
            for (r in t) {};
            return r === undefined || k.call(t, r)
        },
        type: function(e) {
            if (e == null) {
                return e + ""
            };
            return typeof e === "object" || typeof e === "function" ? R[dn.call(e)] || "object" : typeof e
        },
        globalEval: function(n) {
            if (n && e.trim(n)) {
                (t.execScript || function(e) {
                    t["eval"].call(t, e)
                })(n)
            }
        },
        camelCase: function(e) {
            return e.replace(ln, "ms-").replace(fn, cn)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, n = 0;
            if (ae(e)) {
                i = e.length;
                for (; n < i; n++) {
                    if (t.call(e[n], n, e[n]) === !1) {
                        break
                    }
                }
            } else {
                for (n in e) {
                    if (t.call(e[n], n, e[n]) === !1) {
                        break
                    }
                }
            };
            return e
        },
        trim: function(e) {
            return e == null ? "" : (e + "").replace(un, "")
        },
        makeArray: function(t, n) {
            var i = n || [];
            if (t != null) {
                if (ae(Object(t))) {
                    e.merge(i, typeof t === "string" ? [t] : t)
                } else {
                    oe.call(i, t)
                }
            };
            return i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (ze) {
                    return ze.call(t, e, n)
                };
                i = t.length;
                n = n ? n < 0 ? Math.max(0, i + n) : n : 0;
                for (; n < i; n++) {
                    if (n in t && t[n] === e) {
                        return n
                    }
                }
            };
            return -1
        },
        merge: function(e, t) {
            var i = +t.length,
                n = 0,
                r = e.length;
            while (n < i) {
                e[r++] = t[n++]
            };
            if (i !== i) {
                while (t[n] !== undefined) {
                    e[r++] = t[n++]
                }
            };
            e.length = r;
            return e
        },
        grep: function(e, t, n) {
            var r, o = [],
                i = 0,
                a = e.length,
                s = !n;
            for (; i < a; i++) {
                r = !t(e[i], i);
                if (r !== s) {
                    o.push(e[i])
                }
            };
            return o
        },
        map: function(e, t, n) {
            var a, r, i = 0,
                o = [];
            if (ae(e)) {
                a = e.length;
                for (; i < a; i++) {
                    r = t(e[i], i, n);
                    if (r != null) {
                        o.push(r)
                    }
                }
            } else {
                for (i in e) {
                    r = t(e[i], i, n);
                    if (r != null) {
                        o.push(r)
                    }
                }
            };
            return Ie.apply([], o)
        },
        guid: 1,
        proxy: function(t, n) {
            var r, i, o;
            if (typeof n === "string") {
                o = t[n];
                n = t;
                t = o
            };
            if (!e.isFunction(t)) {
                return undefined
            };
            r = h.call(arguments, 2);
            i = function() {
                return t.apply(n || this, r.concat(h.call(arguments)))
            };
            i.guid = t.guid = t.guid || e.guid++;
            return i
        },
        now: function() {
            return +(new Date())
        },
        support: i
    });
    if (typeof Symbol === "function") {
        e.fn[Symbol.iterator] = c[Symbol.iterator]
    };
    e.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        R["[object " + t + "]"] = t.toLowerCase()
    });

    function ae(t) {
        var n = !!t && "length" in t && t.length,
            i = e.type(t);
        if (i === "function" || e.isWindow(t)) {
            return !1
        };
        return i === "array" || n === 0 || typeof n === "number" && n > 0 && (n - 1) in t
    };
    var N =
        /*!
         * Sizzle CSS Selector Engine v2.2.1
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-10-17
         */
        (function(e) {
            var N, o, t, j, K, S, P, Z, L, y, k, v, n, l, f, u, b, H, A, a = "sizzle" + 1 * new Date(),
                c = e.document,
                h = 0,
                le = 0,
                ee = X(),
                te = X(),
                q = X(),
                B = function(e, t) {
                    if (e === t) {
                        k = !0
                    };
                    return 0
                },
                ne = 1 << 31,
                fe = ({}).hasOwnProperty,
                w = [],
                ce = w.pop,
                de = w.push,
                x = w.push,
                ie = w.slice,
                T = function(e, t) {
                    var n = 0,
                        i = e.length;
                    for (; n < i; n++) {
                        if (e[n] === t) {
                            return n
                        }
                    };
                    return -1
                },
                W = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                i = "[\\x20\\t\\r\\n\\f]",
                C = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = "\\[" + i + "*(" + C + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + C + "))|)" + i + "*\\]",
                I = ":(" + C + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                pe = new RegExp(i + "+", "g"),
                F = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
                he = new RegExp("^" + i + "*," + i + "*"),
                ge = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
                me = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
                ye = new RegExp(I),
                oe = new RegExp("^" + C + "$"),
                M = {
                    "ID": new RegExp("^#(" + C + ")"),
                    "CLASS": new RegExp("^\\.(" + C + ")"),
                    "TAG": new RegExp("^(" + C + "|[*])"),
                    "ATTR": new RegExp("^" + re),
                    "PSEUDO": new RegExp("^" + I),
                    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
                    "bool": new RegExp("^(?:" + W + ")$", "i"),
                    "needsContext": new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
                },
                ve = /^(?:input|select|textarea|button)$/i,
                xe = /^h\d$/i,
                D = /^[^{]+\{\s*\[native \w/,
                be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                z = /[+~]/,
                we = /'|\\/g,
                g = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
                m = function(e, t, n) {
                    var i = "0x" + t - 0x10000;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 0x10000) : String.fromCharCode(i >> 10 | 0xD800, i & 0x3FF | 0xDC00)
                },
                ae = function() {
                    v()
                };
            try {
                x.apply((w = ie.call(c.childNodes)), c.childNodes);
                w[c.childNodes.length].nodeType
            } catch (s) {
                x = {
                    apply: w.length ? function(e, t) {
                        de.apply(e, ie.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            i = 0;
                        while ((e[n++] = t[i++])) {};
                        e.length = n - 1
                    }
                }
            };

            function r(e, t, i, r) {
                var d, y, p, l, T, b, g, w, m = t && t.ownerDocument,
                    h = t ? t.nodeType : 9;
                i = i || [];
                if (typeof e !== "string" || !e || h !== 1 && h !== 9 && h !== 11) {
                    return i
                };
                if (!r) {
                    if ((t ? t.ownerDocument || t : c) !== n) {
                        v(t)
                    };
                    t = t || n;
                    if (f) {
                        if (h !== 11 && (b = be.exec(e))) {
                            if ((d = b[1])) {
                                if (h === 9) {
                                    if ((p = t.getElementById(d))) {
                                        if (p.id === d) {
                                            i.push(p);
                                            return i
                                        }
                                    } else {
                                        return i
                                    }
                                } else {
                                    if (m && (p = m.getElementById(d)) && A(t, p) && p.id === d) {
                                        i.push(p);
                                        return i
                                    }
                                }
                            } else if (b[2]) {
                                x.apply(i, t.getElementsByTagName(e));
                                return i
                            } else if ((d = b[3]) && o.getElementsByClassName && t.getElementsByClassName) {
                                x.apply(i, t.getElementsByClassName(d));
                                return i
                            }
                        };
                        if (o.qsa && !q[e + " "] && (!u || !u.test(e))) {
                            if (h !== 1) {
                                m = t;
                                w = e
                            } else if (t.nodeName.toLowerCase() !== "object") {
                                if ((l = t.getAttribute("id"))) {
                                    l = l.replace(we, "\\$&")
                                } else {
                                    t.setAttribute("id", (l = a))
                                };
                                g = S(e);
                                y = g.length;
                                T = oe.test(l) ? "#" + l : "[id='" + l + "']";
                                while (y--) {
                                    g[y] = T + " " + O(g[y])
                                };
                                w = g.join(",");
                                m = z.test(e) && V(t.parentNode) || t
                            };
                            if (w) {
                                try {
                                    x.apply(i, m.querySelectorAll(w));
                                    return i
                                } catch (s) {} finally {
                                    if (l === a) {
                                        t.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                };
                return Z(e.replace(F, "$1"), t, i, r)
            };

            function X() {
                var n = [];

                function e(i, r) {
                    if (n.push(i + " ") > t.cacheLength) {
                        delete e[n.shift()]
                    };
                    return (e[i + " "] = r)
                };
                return e
            };

            function d(e) {
                e[a] = !0;
                return e
            };

            function p(e) {
                var i = n.createElement("div");
                try {
                    return !!e(i)
                } catch (t) {
                    return !1
                } finally {
                    if (i.parentNode) {
                        i.parentNode.removeChild(i)
                    };
                    i = null
                }
            };

            function U(e, n) {
                var i = e.split("|"),
                    r = i.length;
                while (r--) {
                    t.attrHandle[i[r]] = n
                }
            };

            function se(e, t) {
                var n = t && e,
                    i = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || ne) - (~e.sourceIndex || ne);
                if (i) {
                    return i
                };
                if (n) {
                    while ((n = n.nextSibling)) {
                        if (n === t) {
                            return -1
                        }
                    }
                };
                return e ? 1 : -1
            };

            function Te(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e
                }
            };

            function Ce(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return (n === "input" || n === "button") && t.type === e
                }
            };

            function E(e) {
                return d(function(t) {
                    t = +t;
                    return d(function(n, i) {
                        var r, o = e([], n.length, t),
                            a = o.length;
                        while (a--) {
                            if (n[(r = o[a])]) {
                                n[r] = !(i[r] = n[r])
                            }
                        }
                    })
                })
            };

            function V(e) {
                return e && typeof e.getElementsByTagName !== "undefined" && e
            };
            o = r.support = {};
            K = r.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            };
            v = r.setDocument = function(e) {
                var d, r, s = e ? e.ownerDocument || e : c;
                if (s === n || s.nodeType !== 9 || !s.documentElement) {
                    return n
                };
                n = s;
                l = n.documentElement;
                f = !K(n);
                if ((r = n.defaultView) && r.top !== r) {
                    if (r.addEventListener) {
                        r.addEventListener("unload", ae, !1)
                    } else if (r.attachEvent) {
                        r.attachEvent("onunload", ae)
                    }
                };
                o.attributes = p(function(e) {
                    e.className = "i";
                    return !e.getAttribute("className")
                });
                o.getElementsByTagName = p(function(e) {
                    e.appendChild(n.createComment(""));
                    return !e.getElementsByTagName("*").length
                });
                o.getElementsByClassName = D.test(n.getElementsByClassName);
                o.getById = p(function(e) {
                    l.appendChild(e).id = a;
                    return !n.getElementsByName || !n.getElementsByName(a).length
                });
                if (o.getById) {
                    t.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && f) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    };
                    t.filter["ID"] = function(e) {
                        var t = e.replace(g, m);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }
                } else {
                    delete t.find["ID"];
                    t.filter["ID"] = function(e) {
                        var t = e.replace(g, m);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }
                };
                t.find["TAG"] = o.getElementsByTagName ? function(e, t) {
                    if (typeof t.getElementsByTagName !== "undefined") {
                        return t.getElementsByTagName(e)
                    } else if (o.qsa) {
                        return t.querySelectorAll(e)
                    }
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if (e === "*") {
                        while ((n = r[o++])) {
                            if (n.nodeType === 1) {
                                i.push(n)
                            }
                        };
                        return i
                    };
                    return r
                };
                t.find["CLASS"] = o.getElementsByClassName && function(e, t) {
                    if (typeof t.getElementsByClassName !== "undefined" && f) {
                        return t.getElementsByClassName(e)
                    }
                };
                b = [];
                u = [];
                if ((o.qsa = D.test(n.querySelectorAll))) {
                    p(function(e) {
                        l.appendChild(e).innerHTML = "<a id='" + a + "'></a><select id='" + a + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                        if (e.querySelectorAll("[msallowcapture^='']").length) {
                            u.push("[*^$]=" + i + "*(?:''|\"\")")
                        };
                        if (!e.querySelectorAll("[selected]").length) {
                            u.push("\\[" + i + "*(?:value|" + W + ")")
                        };
                        if (!e.querySelectorAll("[id~=" + a + "-]").length) {
                            u.push("~=")
                        };
                        if (!e.querySelectorAll(":checked").length) {
                            u.push(":checked")
                        };
                        if (!e.querySelectorAll("a#" + a + "+*").length) {
                            u.push(".#.+[+~]")
                        }
                    });
                    p(function(e) {
                        var t = n.createElement("input");
                        t.setAttribute("type", "hidden");
                        e.appendChild(t).setAttribute("name", "D");
                        if (e.querySelectorAll("[name=d]").length) {
                            u.push("name" + i + "*[*^$|!~]?=")
                        };
                        if (!e.querySelectorAll(":enabled").length) {
                            u.push(":enabled", ":disabled")
                        };
                        e.querySelectorAll("*,:x");
                        u.push(",.*:")
                    })
                };
                if ((o.matchesSelector = D.test((H = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.oMatchesSelector || l.msMatchesSelector)))) {
                    p(function(e) {
                        o.disconnectedMatch = H.call(e, "div");
                        H.call(e, "[s!='']:x");
                        b.push("!=", I)
                    })
                };
                u = u.length && new RegExp(u.join("|"));
                b = b.length && new RegExp(b.join("|"));
                d = D.test(l.compareDocumentPosition);
                A = d || D.test(l.contains) ? function(e, t) {
                    var i = e.nodeType === 9 ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !!(n && n.nodeType === 1 && (i.contains ? i.contains(n) : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16))
                } : function(e, t) {
                    if (t) {
                        while ((t = t.parentNode)) {
                            if (t === e) {
                                return !0
                            }
                        }
                    };
                    return !1
                };
                B = d ? function(e, t) {
                    if (e === t) {
                        k = !0;
                        return 0
                    };
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    if (i) {
                        return i
                    };
                    i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                    if (i & 1 || (!o.sortDetached && t.compareDocumentPosition(e) === i)) {
                        if (e === n || e.ownerDocument === c && A(c, e)) {
                            return -1
                        };
                        if (t === n || t.ownerDocument === c && A(c, t)) {
                            return 1
                        };
                        return y ? (T(y, e) - T(y, t)) : 0
                    };
                    return i & 4 ? -1 : 1
                } : function(e, t) {
                    if (e === t) {
                        k = !0;
                        return 0
                    };
                    var i, r = 0,
                        s = e.parentNode,
                        u = t.parentNode,
                        o = [e],
                        a = [t];
                    if (!s || !u) {
                        return e === n ? -1 : t === n ? 1 : s ? -1 : u ? 1 : y ? (T(y, e) - T(y, t)) : 0
                    } else if (s === u) {
                        return se(e, t)
                    };
                    i = e;
                    while ((i = i.parentNode)) {
                        o.unshift(i)
                    };
                    i = t;
                    while ((i = i.parentNode)) {
                        a.unshift(i)
                    }
                    while (o[r] === a[r]) {
                        r++
                    };
                    return r ? se(o[r], a[r]) : o[r] === c ? -1 : a[r] === c ? 1 : 0
                };
                return n
            };
            r.matches = function(e, t) {
                return r(e, null, null, t)
            };
            r.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== n) {
                    v(e)
                };
                t = t.replace(me, "='$1']");
                if (o.matchesSelector && f && !q[t + " "] && (!b || !b.test(t)) && (!u || !u.test(t))) {
                    try {
                        var a = H.call(e, t);
                        if (a || o.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                            return a
                        }
                    } catch (i) {}
                };
                return r(t, n, null, [e]).length > 0
            };
            r.contains = function(e, t) {
                if ((e.ownerDocument || e) !== n) {
                    v(e)
                };
                return A(e, t)
            };
            r.attr = function(e, i) {
                if ((e.ownerDocument || e) !== n) {
                    v(e)
                };
                var a = t.attrHandle[i.toLowerCase()],
                    r = a && fe.call(t.attrHandle, i.toLowerCase()) ? a(e, i, !f) : undefined;
                return r !== undefined ? r : o.attributes || !f ? e.getAttribute(i) : (r = e.getAttributeNode(i)) && r.specified ? r.value : null
            };
            r.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            r.uniqueSort = function(e) {
                var i, r = [],
                    t = 0,
                    n = 0;
                k = !o.detectDuplicates;
                y = !o.sortStable && e.slice(0);
                e.sort(B);
                if (k) {
                    while ((i = e[n++])) {
                        if (i === e[n]) {
                            t = r.push(n)
                        }
                    }
                    while (t--) {
                        e.splice(r[t], 1)
                    }
                };
                y = null;
                return e
            };
            j = r.getText = function(e) {
                var i, n = "",
                    r = 0,
                    t = e.nodeType;
                if (!t) {
                    while ((i = e[r++])) {
                        n += j(i)
                    }
                } else if (t === 1 || t === 9 || t === 11) {
                    if (typeof e.textContent === "string") {
                        return e.textContent
                    } else {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            n += j(e)
                        }
                    }
                } else if (t === 3 || t === 4) {
                    return e.nodeValue
                };
                return n
            };
            t = r.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: M,
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
                    "ATTR": function(e) {
                        e[1] = e[1].replace(g, m);
                        e[3] = (e[3] || e[4] || e[5] || "").replace(g, m);
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " "
                        };
                        return e.slice(0, 4)
                    },
                    "CHILD": function(e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1].slice(0, 3) === "nth") {
                            if (!e[3]) {
                                r.error(e[0])
                            };
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                            e[5] = +((e[7] + e[8]) || e[3] === "odd")
                        } else if (e[3]) {
                            r.error(e[0])
                        };
                        return e
                    },
                    "PSEUDO": function(e) {
                        var n, t = !e[6] && e[2];
                        if (M["CHILD"].test(e[0])) {
                            return null
                        };
                        if (e[3]) {
                            e[2] = e[4] || e[5] || ""
                        } else if (t && ye.test(t) && (n = S(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length)) {
                            e[0] = e[0].slice(0, n);
                            e[2] = t.slice(0, n)
                        };
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    "TAG": function(e) {
                        var t = e.replace(g, m).toLowerCase();
                        return e === "*" ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    "CLASS": function(e) {
                        var t = ee[e + " "];
                        return t || (t = new RegExp("(^|" + i + ")" + e + "(" + i + "|$)")) && ee(e, function(e) {
                            return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "")
                        })
                    },
                    "ATTR": function(e, t, n) {
                        return function(i) {
                            var o = r.attr(i, e);
                            if (o == null) {
                                return t === "!="
                            };
                            if (!t) {
                                return !0
                            };
                            o += "";
                            return t === "=" ? o === n : t === "!=" ? o !== n : t === "^=" ? n && o.indexOf(n) === 0 : t === "*=" ? n && o.indexOf(n) > -1 : t === "$=" ? n && o.slice(-n.length) === n : t === "~=" ? (" " + o.replace(pe, " ") + " ").indexOf(n) > -1 : t === "|=" ? o === n || o.slice(0, n.length + 1) === n + "-" : !1
                        }
                    },
                    "CHILD": function(e, t, n, i, r) {
                        var u = e.slice(0, 3) !== "nth",
                            s = e.slice(-4) !== "last",
                            o = t === "of-type";
                        return i === 1 && r === 0 ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var g, m, p, f, d, y, v = u !== s ? "nextSibling" : "previousSibling",
                                x = t.parentNode,
                                w = o && t.nodeName.toLowerCase(),
                                b = !l && !o,
                                c = !1;
                            if (x) {
                                if (u) {
                                    while (v) {
                                        f = t;
                                        while ((f = f[v])) {
                                            if (o ? f.nodeName.toLowerCase() === w : f.nodeType === 1) {
                                                return !1
                                            }
                                        };
                                        y = v = e === "only" && !y && "nextSibling"
                                    };
                                    return !0
                                };
                                y = [s ? x.firstChild : x.lastChild];
                                if (s && b) {
                                    f = x;
                                    p = f[a] || (f[a] = {});
                                    m = p[f.uniqueID] || (p[f.uniqueID] = {});
                                    g = m[e] || [];
                                    d = g[0] === h && g[1];
                                    c = d && g[2];
                                    f = d && x.childNodes[d];
                                    while ((f = ++d && f && f[v] || (c = d = 0) || y.pop())) {
                                        if (f.nodeType === 1 && ++c && f === t) {
                                            m[e] = [h, d, c];
                                            break
                                        }
                                    }
                                } else {
                                    if (b) {
                                        f = t;
                                        p = f[a] || (f[a] = {});
                                        m = p[f.uniqueID] || (p[f.uniqueID] = {});
                                        g = m[e] || [];
                                        d = g[0] === h && g[1];
                                        c = d
                                    };
                                    if (c === !1) {
                                        while ((f = ++d && f && f[v] || (c = d = 0) || y.pop())) {
                                            if ((o ? f.nodeName.toLowerCase() === w : f.nodeType === 1) && ++c) {
                                                if (b) {
                                                    p = f[a] || (f[a] = {});
                                                    m = p[f.uniqueID] || (p[f.uniqueID] = {});
                                                    m[e] = [h, c]
                                                };
                                                if (f === t) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                };
                                c -= r;
                                return c === i || (c % i === 0 && c / i >= 0)
                            }
                        }
                    },
                    "PSEUDO": function(e, n) {
                        var o, i = t.pseudos[e] || t.setFilters[e.toLowerCase()] || r.error("unsupported pseudo: " + e);
                        if (i[a]) {
                            return i(n)
                        };
                        if (i.length > 1) {
                            o = [e, e, "", n];
                            return t.setFilters.hasOwnProperty(e.toLowerCase()) ? d(function(e, t) {
                                var r, o = i(e, n),
                                    a = o.length;
                                while (a--) {
                                    r = T(e, o[a]);
                                    e[r] = !(t[r] = o[a])
                                }
                            }) : function(e) {
                                return i(e, 0, o)
                            }
                        };
                        return i
                    }
                },
                pseudos: {
                    "not": d(function(e) {
                        var t = [],
                            i = [],
                            n = P(e.replace(F, "$1"));
                        return n[a] ? d(function(e, t, i, r) {
                            var a, s = n(e, null, r, []),
                                o = e.length;
                            while (o--) {
                                if ((a = s[o])) {
                                    e[o] = !(t[o] = a)
                                }
                            }
                        }) : function(e, r, o) {
                            t[0] = e;
                            n(t, null, o, i);
                            t[0] = null;
                            return !i.pop()
                        }
                    }),
                    "has": d(function(e) {
                        return function(t) {
                            return r(e, t).length > 0
                        }
                    }),
                    "contains": d(function(e) {
                        e = e.replace(g, m);
                        return function(t) {
                            return (t.textContent || t.innerText || j(t)).indexOf(e) > -1
                        }
                    }),
                    "lang": d(function(e) {
                        if (!oe.test(e || "")) {
                            r.error("unsupported lang: " + e)
                        };
                        e = e.replace(g, m).toLowerCase();
                        return function(t) {
                            var n;
                            do {
                                if ((n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) {
                                    n = n.toLowerCase();
                                    return n === e || n.indexOf(e + "-") === 0
                                }
                            }
                            while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                    }),
                    "target": function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    "root": function(e) {
                        return e === l
                    },
                    "focus": function(e) {
                        return e === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    "enabled": function(e) {
                        return e.disabled === !1
                    },
                    "disabled": function(e) {
                        return e.disabled === !0
                    },
                    "checked": function(e) {
                        var t = e.nodeName.toLowerCase();
                        return (t === "input" && !!e.checked) || (t === "option" && !!e.selected)
                    },
                    "selected": function(e) {
                        if (e.parentNode) {
                            e.parentNode.selectedIndex
                        };
                        return e.selected === !0
                    },
                    "empty": function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeType < 6) {
                                return !1
                            }
                        };
                        return !0
                    },
                    "parent": function(e) {
                        return !t.pseudos["empty"](e)
                    },
                    "header": function(e) {
                        return xe.test(e.nodeName)
                    },
                    "input": function(e) {
                        return ve.test(e.nodeName)
                    },
                    "button": function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    "text": function(e) {
                        var t;
                        return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                    },
                    "first": E(function() {
                        return [0]
                    }),
                    "last": E(function(e, t) {
                        return [t - 1]
                    }),
                    "eq": E(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    "even": E(function(e, t) {
                        var n = 0;
                        for (; n < t; n += 2) {
                            e.push(n)
                        };
                        return e
                    }),
                    "odd": E(function(e, t) {
                        var n = 1;
                        for (; n < t; n += 2) {
                            e.push(n)
                        };
                        return e
                    }),
                    "lt": E(function(e, t, n) {
                        var i = n < 0 ? n + t : n;
                        for (; --i >= 0;) {
                            e.push(i)
                        };
                        return e
                    }),
                    "gt": E(function(e, t, n) {
                        var i = n < 0 ? n + t : n;
                        for (; ++i < t;) {
                            e.push(i)
                        };
                        return e
                    })
                }
            };
            t.pseudos["nth"] = t.pseudos["eq"];
            for (N in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) {
                t.pseudos[N] = Te(N)
            };
            for (N in {
                    submit: !0,
                    reset: !0
                }) {
                t.pseudos[N] = Ce(N)
            };

            function ue() {};
            ue.prototype = t.filters = t.pseudos;
            t.setFilters = new ue();
            S = r.tokenize = function(e, n) {
                var a, o, u, s, i, l, f, c = te[e + " "];
                if (c) {
                    return n ? 0 : c.slice(0)
                };
                i = e;
                l = [];
                f = t.preFilter;
                while (i) {
                    if (!a || (o = he.exec(i))) {
                        if (o) {
                            i = i.slice(o[0].length) || i
                        };
                        l.push((u = []))
                    };
                    a = !1;
                    if ((o = ge.exec(i))) {
                        a = o.shift();
                        u.push({
                            value: a,
                            type: o[0].replace(F, " ")
                        });
                        i = i.slice(a.length)
                    };
                    for (s in t.filter) {
                        if ((o = M[s].exec(i)) && (!f[s] || (o = f[s](o)))) {
                            a = o.shift();
                            u.push({
                                value: a,
                                type: s,
                                matches: o
                            });
                            i = i.slice(a.length)
                        }
                    };
                    if (!a) {
                        break
                    }
                };
                return n ? i.length : i ? r.error(e) : te(e, l).slice(0)
            };

            function O(e) {
                var t = 0,
                    i = e.length,
                    n = "";
                for (; t < i; t++) {
                    n += e[t].value
                };
                return n
            };

            function Y(e, t, n) {
                var i = t.dir,
                    r = n && i === "parentNode",
                    o = le++;
                return t.first ? function(t, n, o) {
                    while ((t = t[i])) {
                        if (t.nodeType === 1 || r) {
                            return e(t, n, o)
                        }
                    }
                } : function(t, n, s) {
                    var u, l, f, c = [h, o];
                    if (s) {
                        while ((t = t[i])) {
                            if (t.nodeType === 1 || r) {
                                if (e(t, n, s)) {
                                    return !0
                                }
                            }
                        }
                    } else {
                        while ((t = t[i])) {
                            if (t.nodeType === 1 || r) {
                                f = t[a] || (t[a] = {});
                                l = f[t.uniqueID] || (f[t.uniqueID] = {});
                                if ((u = l[i]) && u[0] === h && u[1] === o) {
                                    return (c[2] = u[2])
                                } else {
                                    l[i] = c;
                                    if ((c[2] = e(t, n, s))) {
                                        return !0
                                    }
                                }
                            }
                        }
                    }
                }
            };

            function J(e) {
                return e.length > 1 ? function(t, n, i) {
                    var r = e.length;
                    while (r--) {
                        if (!e[r](t, n, i)) {
                            return !1
                        }
                    };
                    return !0
                } : e[0]
            };

            function Ee(e, t, n) {
                var i = 0,
                    o = t.length;
                for (; i < o; i++) {
                    r(e, t[i], n)
                };
                return n
            };

            function R(e, t, n, i, r) {
                var a, s = [],
                    o = 0,
                    u = e.length,
                    l = t != null;
                for (; o < u; o++) {
                    if ((a = e[o])) {
                        if (!n || n(a, i, r)) {
                            s.push(a);
                            if (l) {
                                t.push(o)
                            }
                        }
                    }
                };
                return s
            };

            function G(e, t, n, i, r, o) {
                if (i && !i[a]) {
                    i = G(i)
                };
                if (r && !r[a]) {
                    r = G(r, o)
                };
                return d(function(o, a, s, u) {
                    var c, f, d, g = [],
                        h = [],
                        m = a.length,
                        y = o || Ee(t || "*", s.nodeType ? [s] : s, []),
                        p = e && (o || !t) ? R(y, g, e, s, u) : y,
                        l = n ? r || (o ? e : m || i) ? [] : a : p;
                    if (n) {
                        n(p, l, s, u)
                    };
                    if (i) {
                        c = R(l, h);
                        i(c, [], s, u);
                        f = c.length;
                        while (f--) {
                            if ((d = c[f])) {
                                l[h[f]] = !(p[h[f]] = d)
                            }
                        }
                    };
                    if (o) {
                        if (r || e) {
                            if (r) {
                                c = [];
                                f = l.length;
                                while (f--) {
                                    if ((d = l[f])) {
                                        c.push((p[f] = d))
                                    }
                                };
                                r(null, (l = []), c, u)
                            };
                            f = l.length;
                            while (f--) {
                                if ((d = l[f]) && (c = r ? T(o, d) : g[f]) > -1) {
                                    o[c] = !(a[c] = d)
                                }
                            }
                        }
                    } else {
                        l = R(l === a ? l.splice(m, l.length) : l);
                        if (r) {
                            r(null, a, l, u)
                        } else {
                            x.apply(a, l)
                        }
                    }
                })
            };

            function Q(e) {
                var s, r, i, u = e.length,
                    l = t.relative[e[0].type],
                    f = l || t.relative[" "],
                    n = l ? 1 : 0,
                    c = Y(function(e) {
                        return e === s
                    }, f, !0),
                    d = Y(function(e) {
                        return T(s, e) > -1
                    }, f, !0),
                    o = [function(e, t, n) {
                        var i = (!l && (n || t !== L)) || ((s = t).nodeType ? c(e, t, n) : d(e, t, n));
                        s = null;
                        return i
                    }];
                for (; n < u; n++) {
                    if ((r = t.relative[e[n].type])) {
                        o = [Y(J(o), r)]
                    } else {
                        r = t.filter[e[n].type].apply(null, e[n].matches);
                        if (r[a]) {
                            i = ++n;
                            for (; i < u; i++) {
                                if (t.relative[e[i].type]) {
                                    break
                                }
                            };
                            return G(n > 1 && J(o), n > 1 && O(e.slice(0, n - 1).concat({
                                value: e[n - 2].type === " " ? "*" : ""
                            })).replace(F, "$1"), r, n < i && Q(e.slice(n, i)), i < u && Q((e = e.slice(i))), i < u && O(e))
                        };
                        o.push(r)
                    }
                };
                return J(o)
            };

            function Ne(e, i) {
                var o = i.length > 0,
                    a = e.length > 0,
                    s = function(s, u, l, c, d) {
                        var p, w, y, b = 0,
                            g = "0",
                            T = s && [],
                            m = [],
                            C = L,
                            E = s || a && t.find["TAG"]("*", d),
                            N = (h += C == null ? 1 : Math.random() || 0.1),
                            k = E.length;
                        if (d) {
                            L = u === n || u || d
                        };
                        for (; g !== k && (p = E[g]) != null; g++) {
                            if (a && p) {
                                w = 0;
                                if (!u && p.ownerDocument !== n) {
                                    v(p);
                                    l = !f
                                }
                                while ((y = e[w++])) {
                                    if (y(p, u || n, l)) {
                                        c.push(p);
                                        break
                                    }
                                };
                                if (d) {
                                    h = N
                                }
                            };
                            if (o) {
                                if ((p = !y && p)) {
                                    b--
                                };
                                if (s) {
                                    T.push(p)
                                }
                            }
                        };
                        b += g;
                        if (o && g !== b) {
                            w = 0;
                            while ((y = i[w++])) {
                                y(T, m, u, l)
                            };
                            if (s) {
                                if (b > 0) {
                                    while (g--) {
                                        if (!(T[g] || m[g])) {
                                            m[g] = ce.call(c)
                                        }
                                    }
                                };
                                m = R(m)
                            };
                            x.apply(c, m);
                            if (d && !s && m.length > 0 && (b + i.length) > 1) {
                                r.uniqueSort(c)
                            }
                        };
                        if (d) {
                            h = N;
                            L = C
                        };
                        return T
                    };
                return o ? d(s) : s
            };
            P = r.compile = function(e, t) {
                var i, r = [],
                    o = [],
                    n = q[e + " "];
                if (!n) {
                    if (!t) {
                        t = S(e)
                    };
                    i = t.length;
                    while (i--) {
                        n = Q(t[i]);
                        if (n[a]) {
                            r.push(n)
                        } else {
                            o.push(n)
                        }
                    };
                    n = q(e, Ne(o, r));
                    n.selector = e
                };
                return n
            };
            Z = r.select = function(e, n, i, r) {
                var u, a, s, d, p, c = typeof e === "function" && e,
                    l = !r && S((e = c.selector || e));
                i = i || [];
                if (l.length === 1) {
                    a = l[0] = l[0].slice(0);
                    if (a.length > 2 && (s = a[0]).type === "ID" && o.getById && n.nodeType === 9 && f && t.relative[a[1].type]) {
                        n = (t.find["ID"](s.matches[0].replace(g, m), n) || [])[0];
                        if (!n) {
                            return i
                        } else if (c) {
                            n = n.parentNode
                        };
                        e = e.slice(a.shift().value.length)
                    };
                    u = M["needsContext"].test(e) ? 0 : a.length;
                    while (u--) {
                        s = a[u];
                        if (t.relative[(d = s.type)]) {
                            break
                        };
                        if ((p = t.find[d])) {
                            if ((r = p(s.matches[0].replace(g, m), z.test(a[0].type) && V(n.parentNode) || n))) {
                                a.splice(u, 1);
                                e = r.length && O(a);
                                if (!e) {
                                    x.apply(i, r);
                                    return i
                                };
                                break
                            }
                        }
                    }
                }(c || P(e, l))(r, n, !f, i, !n || z.test(e) && V(n.parentNode) || n);
                return i
            };
            o.sortStable = a.split("").sort(B).join("") === a;
            o.detectDuplicates = !!k;
            v();
            o.sortDetached = p(function(e) {
                return e.compareDocumentPosition(n.createElement("div")) & 1
            });
            if (!p(function(e) {
                    e.innerHTML = "<a href='#'></a>";
                    return e.firstChild.getAttribute("href") === "#"
                })) {
                U("type|href|height|width", function(e, t, n) {
                    if (!n) {
                        return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            };
            if (!o.attributes || !p(function(e) {
                    e.innerHTML = "<input/>";
                    e.firstChild.setAttribute("value", "");
                    return e.firstChild.getAttribute("value") === ""
                })) {
                U("value", function(e, t, n) {
                    if (!n && e.nodeName.toLowerCase() === "input") {
                        return e.defaultValue
                    }
                })
            };
            if (!p(function(e) {
                    return e.getAttribute("disabled") == null
                })) {
                U(W, function(e, t, n) {
                    var i;
                    if (!n) {
                        return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }
                })
            };
            return r
        })(t);
    e.find = N;
    e.expr = N.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.uniqueSort = e.unique = N.uniqueSort;
    e.text = N.getText;
    e.isXMLDoc = N.isXML;
    e.contains = N.contains;
    var E = function(t, n, i) {
            var r = [],
                o = i !== undefined;
            while ((t = t[n]) && t.nodeType !== 9) {
                if (t.nodeType === 1) {
                    if (o && e(t).is(i)) {
                        break
                    };
                    r.push(t)
                }
            };
            return r
        },
        Re = function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                if (e.nodeType === 1 && e !== t) {
                    n.push(e)
                }
            };
            return n
        },
        Pe = e.expr.match.needsContext,
        Be = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/),
        sn = /^.[^:#\[\.,]*$/;

    function se(t, n, i) {
        if (e.isFunction(n)) {
            return e.grep(t, function(e, t) {
                return !!n.call(e, t, e) !== i
            })
        };
        if (n.nodeType) {
            return e.grep(t, function(e) {
                return (e === n) !== i
            })
        };
        if (typeof n === "string") {
            if (sn.test(n)) {
                return e.filter(n, t, i)
            };
            n = e.filter(n, t)
        };
        return e.grep(t, function(t) {
            return (e.inArray(t, n) > -1) !== i
        })
    };
    e.filter = function(t, n, i) {
        var r = n[0];
        if (i) {
            t = ":not(" + t + ")"
        };
        return n.length === 1 && r.nodeType === 1 ? e.find.matchesSelector(r, t) ? [r] : [] : e.find.matches(t, e.grep(n, function(e) {
            return e.nodeType === 1
        }))
    };
    e.fn.extend({
        find: function(t) {
            var n, i = [],
                r = this,
                o = r.length;
            if (typeof t !== "string") {
                return this.pushStack(e(t).filter(function() {
                    for (n = 0; n < o; n++) {
                        if (e.contains(r[n], this)) {
                            return !0
                        }
                    }
                }))
            };
            for (n = 0; n < o; n++) {
                e.find(t, r[n], i)
            };
            i = this.pushStack(o > 1 ? e.unique(i) : i);
            i.selector = this.selector ? this.selector + " " + t : t;
            return i
        },
        filter: function(e) {
            return this.pushStack(se(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(se(this, e || [], !0))
        },
        is: function(t) {
            return !!se(this, typeof t === "string" && Pe.test(t) ? e(t) : t || [], !1).length
        }
    });
    var re, on = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        an = e.fn.init = function(t, n, i) {
            var o, a;
            if (!t) {
                return this
            };
            i = i || re;
            if (typeof t === "string") {
                if (t.charAt(0) === "<" && t.charAt(t.length - 1) === ">" && t.length >= 3) {
                    o = [null, t, null]
                } else {
                    o = on.exec(t)
                };
                if (o && (o[1] || !n)) {
                    if (o[1]) {
                        n = n instanceof e ? n[0] : n;
                        e.merge(this, e.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : r, !0));
                        if (Be.test(o[1]) && e.isPlainObject(n)) {
                            for (o in n) {
                                if (e.isFunction(this[o])) {
                                    this[o](n[o])
                                } else {
                                    this.attr(o, n[o])
                                }
                            }
                        };
                        return this
                    } else {
                        a = r.getElementById(o[2]);
                        if (a && a.parentNode) {
                            if (a.id !== o[2]) {
                                return re.find(t)
                            };
                            this.length = 1;
                            this[0] = a
                        };
                        this.context = r;
                        this.selector = t;
                        return this
                    }
                } else if (!n || n.jquery) {
                    return (n || i).find(t)
                } else {
                    return this.constructor(n).find(t)
                }
            } else if (t.nodeType) {
                this.context = this[0] = t;
                this.length = 1;
                return this
            } else if (e.isFunction(t)) {
                return typeof i.ready !== "undefined" ? i.ready(t) : t(e)
            };
            if (t.selector !== undefined) {
                this.selector = t.selector;
                this.context = t.context
            };
            return e.makeArray(t, this)
        };
    an.prototype = e.fn;
    re = e(r);
    var nn = /^(?:parents|prev(?:Until|All))/,
        rn = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    e.fn.extend({
        has: function(t) {
            var n, i = e(t, this),
                r = i.length;
            return this.filter(function() {
                for (n = 0; n < r; n++) {
                    if (e.contains(this, i[n])) {
                        return !0
                    }
                }
            })
        },
        closest: function(t, n) {
            var i, o = 0,
                s = this.length,
                r = [],
                a = Pe.test(t) || typeof t !== "string" ? e(t, n || this.context) : 0;
            for (; o < s; o++) {
                for (i = this[o]; i && i !== n; i = i.parentNode) {
                    if (i.nodeType < 11 && (a ? a.index(i) > -1 : i.nodeType === 1 && e.find.matchesSelector(i, t))) {
                        r.push(i);
                        break
                    }
                }
            };
            return this.pushStack(r.length > 1 ? e.uniqueSort(r) : r)
        },
        index: function(t) {
            if (!t) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
            };
            if (typeof t === "string") {
                return e.inArray(this[0], e(t))
            };
            return e.inArray(t.jquery ? t[0] : t, this)
        },
        add: function(t, n) {
            return this.pushStack(e.uniqueSort(e.merge(this.get(), e(t, n))))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function Xe(e, t) {
        do {
            e = e[t]
        }
        while (e && e.nodeType !== 1);
        return e
    };
    e.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return E(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return E(e, "parentNode", n)
        },
        next: function(e) {
            return Xe(e, "nextSibling")
        },
        prev: function(e) {
            return Xe(e, "previousSibling")
        },
        nextAll: function(e) {
            return E(e, "nextSibling")
        },
        prevAll: function(e) {
            return E(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return E(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return E(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Re((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Re(e.firstChild)
        },
        contents: function(t) {
            return e.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : e.merge([], t.childNodes)
        }
    }, function(t, n) {
        e.fn[t] = function(i, r) {
            var o = e.map(this, n, i);
            if (t.slice(-5) !== "Until") {
                r = i
            };
            if (r && typeof r === "string") {
                o = e.filter(r, o)
            };
            if (this.length > 1) {
                if (!rn[t]) {
                    o = e.uniqueSort(o)
                };
                if (nn.test(t)) {
                    o = o.reverse()
                }
            };
            return this.pushStack(o)
        }
    });
    var l = (/\S+/g);

    function pn(t) {
        var n = {};
        e.each(t.match(l) || [], function(e, t) {
            n[t] = !0
        });
        return n
    };
    e.Callbacks = function(t) {
        t = typeof t === "string" ? pn(t) : e.extend({}, t);
        var a, i, l, o, n = [],
            s = [],
            r = -1,
            f = function() {
                o = t.once;
                l = a = !0;
                for (; s.length; r = -1) {
                    i = s.shift();
                    while (++r < n.length) {
                        if (n[r].apply(i[0], i[1]) === !1 && t.stopOnFalse) {
                            r = n.length;
                            i = !1
                        }
                    }
                };
                if (!t.memory) {
                    i = !1
                };
                a = !1;
                if (o) {
                    if (i) {
                        n = []
                    } else {
                        n = ""
                    }
                }
            },
            u = {
                add: function() {
                    if (n) {
                        if (i && !a) {
                            r = n.length - 1;
                            s.push(i)
                        }(function o(i) {
                            e.each(i, function(i, r) {
                                if (e.isFunction(r)) {
                                    if (!t.unique || !u.has(r)) {
                                        n.push(r)
                                    }
                                } else if (r && r.length && e.type(r) !== "string") {
                                    o(r)
                                }
                            })
                        })(arguments);
                        if (i && !a) {
                            f()
                        }
                    };
                    return this
                },
                remove: function() {
                    e.each(arguments, function(t, i) {
                        var o;
                        while ((o = e.inArray(i, n, o)) > -1) {
                            n.splice(o, 1);
                            if (o <= r) {
                                r--
                            }
                        }
                    });
                    return this
                },
                has: function(t) {
                    return t ? e.inArray(t, n) > -1 : n.length > 0
                },
                empty: function() {
                    if (n) {
                        n = []
                    };
                    return this
                },
                disable: function() {
                    o = s = [];
                    n = i = "";
                    return this
                },
                disabled: function() {
                    return !n
                },
                lock: function() {
                    o = !0;
                    if (!i) {
                        u.disable()
                    };
                    return this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, t) {
                    if (!o) {
                        t = t || [];
                        t = [e, t.slice ? t.slice() : t];
                        s.push(t);
                        if (!a) {
                            f()
                        }
                    };
                    return this
                },
                fire: function() {
                    u.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!l
                }
            };
        return u
    };
    e.extend({
        Deferred: function(t) {
            var r = [
                    ["resolve", "done", e.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", e.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", e.Callbacks("memory")]
                ],
                o = "pending",
                i = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        n.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var t = arguments;
                        return e.Deferred(function(o) {
                            e.each(r, function(r, a) {
                                var s = e.isFunction(t[r]) && t[r];
                                n[a[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    if (t && e.isFunction(t.promise)) {
                                        t.promise().progress(o.notify).done(o.resolve).fail(o.reject)
                                    } else {
                                        o[a[0] + "With"](this === i ? o.promise() : this, s ? [t] : arguments)
                                    }
                                })
                            });
                            t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return t != null ? e.extend(t, i) : i
                    }
                },
                n = {};
            i.pipe = i.then;
            e.each(r, function(e, t) {
                var a = t[2],
                    s = t[3];
                i[t[1]] = a.add;
                if (s) {
                    a.add(function() {
                        o = s
                    }, r[e ^ 1][2].disable, r[2][2].lock)
                };
                n[t[0]] = function() {
                    n[t[0] + "With"](this === n ? i : this, arguments);
                    return this
                };
                n[t[0] + "With"] = a.fireWith
            });
            i.promise(n);
            if (t) {
                t.call(n, n)
            };
            return n
        },
        when: function(t) {
            var n = 0,
                r = h.call(arguments),
                i = r.length,
                a = i !== 1 || (t && e.isFunction(t.promise)) ? i : 0,
                o = a === 1 ? t : e.Deferred(),
                l = function(e, t, n) {
                    return function(i) {
                        t[e] = this;
                        n[e] = arguments.length > 1 ? h.call(arguments) : i;
                        if (n === s) {
                            o.notifyWith(t, n)
                        } else if (!(--a)) {
                            o.resolveWith(t, n)
                        }
                    }
                },
                s, f, u;
            if (i > 1) {
                s = new Array(i);
                f = new Array(i);
                u = new Array(i);
                for (; n < i; n++) {
                    if (r[n] && e.isFunction(r[n].promise)) {
                        r[n].promise().progress(l(n, f, s)).done(l(n, u, r)).fail(o.reject)
                    } else {
                        --a
                    }
                }
            };
            if (!a) {
                o.resolveWith(u, r)
            };
            return o.promise()
        }
    });
    var O;
    e.fn.ready = function(t) {
        e.ready.promise().done(t);
        return this
    };
    e.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            if (t) {
                e.readyWait++
            } else {
                e.ready(!0)
            }
        },
        ready: function(t) {
            if (t === !0 ? --e.readyWait : e.isReady) {
                return
            };
            e.isReady = !0;
            if (t !== !0 && --e.readyWait > 0) {
                return
            };
            O.resolveWith(r, [e]);
            if (e.fn.triggerHandler) {
                e(r).triggerHandler("ready");
                e(r).off("ready")
            }
        }
    });

    function Ue() {
        if (r.addEventListener) {
            r.removeEventListener("DOMContentLoaded", g);
            t.removeEventListener("load", g)
        } else {
            r.detachEvent("onreadystatechange", g);
            t.detachEvent("onload", g)
        }
    };

    function g() {
        if (r.addEventListener || t.event.type === "load" || r.readyState === "complete") {
            Ue();
            e.ready()
        }
    };
    e.ready.promise = function(n) {
        if (!O) {
            O = e.Deferred();
            if (r.readyState === "complete" || (r.readyState !== "loading" && !r.documentElement.doScroll)) {
                t.setTimeout(e.ready)
            } else if (r.addEventListener) {
                r.addEventListener("DOMContentLoaded", g);
                t.addEventListener("load", g)
            } else {
                r.attachEvent("onreadystatechange", g);
                t.attachEvent("onload", g);
                var o = !1;
                try {
                    o = t.frameElement == null && r.documentElement
                } catch (i) {};
                if (o && o.doScroll) {
                    (function a() {
                        if (!e.isReady) {
                            try {
                                o.doScroll("left")
                            } catch (n) {
                                return t.setTimeout(a, 50)
                            };
                            Ue();
                            e.ready()
                        }
                    })()
                }
            }
        };
        return O.promise(n)
    };
    e.ready.promise();
    var Oe;
    for (Oe in e(i)) {
        break
    };
    i.ownFirst = Oe === "0";
    i.inlineBlockNeedsLayout = !1;
    e(function() {
        var o, t, e, n;
        e = r.getElementsByTagName("body")[0];
        if (!e || !e.style) {
            return
        };
        t = r.createElement("div");
        n = r.createElement("div");
        n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        e.appendChild(n).appendChild(t);
        if (typeof t.style.zoom !== "undefined") {
            t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
            i.inlineBlockNeedsLayout = o = t.offsetWidth === 3;
            if (o) {
                e.style.zoom = 1
            }
        };
        e.removeChild(n)
    });
    (function() {
        var t = r.createElement("div");
        i.deleteExpando = !0;
        try {
            delete t.test
        } catch (e) {
            i.deleteExpando = !1
        };
        t = null
    })();
    var L = function(t) {
            var n = e.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return i !== 1 && i !== 9 ? !1 : !n || n !== !0 && t.getAttribute("classid") === n
        },
        en = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        tn = /([A-Z])/g;

    function Ve(t, n, i) {
        if (i === undefined && t.nodeType === 1) {
            var o = "data-" + n.replace(tn, "-$1").toLowerCase();
            i = t.getAttribute(o);
            if (typeof i === "string") {
                try {
                    i = i === "true" ? !0 : i === "false" ? !1 : i === "null" ? null : +i + "" === i ? +i : en.test(i) ? e.parseJSON(i) : i
                } catch (r) {};
                e.data(t, n, i)
            } else {
                i = undefined
            }
        };
        return i
    };

    function ue(t) {
        var n;
        for (n in t) {
            if (n === "data" && e.isEmptyObject(t[n])) {
                continue
            };
            if (n !== "toJSON") {
                return !1
            }
        };
        return !0
    };

    function Ye(t, n, i, r) {
        if (!L(t)) {
            return
        };
        var u, a, l = e.expando,
            f = t.nodeType,
            s = f ? e.cache : t,
            o = f ? t[l] : t[l] && l;
        if ((!o || !s[o] || (!r && !s[o].data)) && i === undefined && typeof n === "string") {
            return
        };
        if (!o) {
            if (f) {
                o = t[l] = c.pop() || e.guid++
            } else {
                o = l
            }
        };
        if (!s[o]) {
            s[o] = f ? {} : {
                toJSON: e.noop
            }
        };
        if (typeof n === "object" || typeof n === "function") {
            if (r) {
                s[o] = e.extend(s[o], n)
            } else {
                s[o].data = e.extend(s[o].data, n)
            }
        };
        a = s[o];
        if (!r) {
            if (!a.data) {
                a.data = {}
            };
            a = a.data
        };
        if (i !== undefined) {
            a[e.camelCase(n)] = i
        };
        if (typeof n === "string") {
            u = a[n];
            if (u == null) {
                u = a[e.camelCase(n)]
            }
        } else {
            u = a
        };
        return u
    };

    function Je(t, n, r) {
        if (!L(t)) {
            return
        };
        var a, u, l = t.nodeType,
            o = l ? e.cache : t,
            s = l ? t[e.expando] : e.expando;
        if (!o[s]) {
            return
        };
        if (n) {
            a = r ? o[s] : o[s].data;
            if (a) {
                if (!e.isArray(n)) {
                    if (n in a) {
                        n = [n]
                    } else {
                        n = e.camelCase(n);
                        if (n in a) {
                            n = [n]
                        } else {
                            n = n.split(" ")
                        }
                    }
                } else {
                    n = n.concat(e.map(n, e.camelCase))
                };
                u = n.length;
                while (u--) {
                    delete a[n[u]]
                };
                if (r ? !ue(a) : !e.isEmptyObject(a)) {
                    return
                }
            }
        };
        if (!r) {
            delete o[s].data;
            if (!ue(o[s])) {
                return
            }
        };
        if (l) {
            e.cleanData([t], !0)
        } else if (i.deleteExpando || o != o.window) {
            delete o[s]
        } else {
            o[s] = undefined
        }
    };
    e.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            t = t.nodeType ? e.cache[t[e.expando]] : t[e.expando];
            return !!t && !ue(t)
        },
        data: function(e, t, n) {
            return Ye(e, t, n)
        },
        removeData: function(e, t) {
            return Je(e, t)
        },
        _data: function(e, t, n) {
            return Ye(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return Je(e, t, !0)
        }
    });
    e.fn.extend({
        data: function(t, n) {
            var o, r, a, i = this[0],
                s = i && i.attributes;
            if (t === undefined) {
                if (this.length) {
                    a = e.data(i);
                    if (i.nodeType === 1 && !e._data(i, "parsedAttrs")) {
                        o = s.length;
                        while (o--) {
                            if (s[o]) {
                                r = s[o].name;
                                if (r.indexOf("data-") === 0) {
                                    r = e.camelCase(r.slice(5));
                                    Ve(i, r, a[r])
                                }
                            }
                        };
                        e._data(i, "parsedAttrs", !0)
                    }
                };
                return a
            };
            if (typeof t === "object") {
                return this.each(function() {
                    e.data(this, t)
                })
            };
            return arguments.length > 1 ? this.each(function() {
                e.data(this, t, n)
            }) : i ? Ve(i, t, e.data(i, t)) : undefined
        },
        removeData: function(t) {
            return this.each(function() {
                e.removeData(this, t)
            })
        }
    });
    e.extend({
        queue: function(t, n, i) {
            var r;
            if (t) {
                n = (n || "fx") + "queue";
                r = e._data(t, n);
                if (i) {
                    if (!r || e.isArray(i)) {
                        r = e._data(t, n, e.makeArray(i))
                    } else {
                        r.push(i)
                    }
                };
                return r || []
            }
        },
        dequeue: function(t, n) {
            n = n || "fx";
            var i = e.queue(t, n),
                a = i.length,
                r = i.shift(),
                o = e._queueHooks(t, n),
                s = function() {
                    e.dequeue(t, n)
                };
            if (r === "inprogress") {
                r = i.shift();
                a--
            };
            if (r) {
                if (n === "fx") {
                    i.unshift("inprogress")
                };
                delete o.stop;
                r.call(t, s, o)
            };
            if (!a && o) {
                o.empty.fire()
            }
        },
        _queueHooks: function(t, n) {
            var i = n + "queueHooks";
            return e._data(t, i) || e._data(t, i, {
                empty: e.Callbacks("once memory").add(function() {
                    e._removeData(t, n + "queue");
                    e._removeData(t, i)
                })
            })
        }
    });
    e.fn.extend({
        queue: function(t, n) {
            var i = 2;
            if (typeof t !== "string") {
                n = t;
                t = "fx";
                i--
            };
            if (arguments.length < i) {
                return e.queue(this[0], t)
            };
            return n === undefined ? this : this.each(function() {
                var i = e.queue(this, t, n);
                e._queueHooks(this, t);
                if (t === "fx" && i[0] !== "inprogress") {
                    e.dequeue(this, t)
                }
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                e.dequeue(this, t)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(t, n) {
            var i, o = 1,
                a = e.Deferred(),
                r = this,
                s = this.length,
                u = function() {
                    if (!(--o)) {
                        a.resolveWith(r, [r])
                    }
                };
            if (typeof t !== "string") {
                n = t;
                t = undefined
            };
            t = t || "fx";
            while (s--) {
                i = e._data(r[s], t + "queueHooks");
                if (i && i.empty) {
                    o++;
                    i.empty.add(u)
                }
            };
            u();
            return a.promise(n)
        }
    });
    (function() {
        var e;
        i.shrinkWrapBlocks = function() {
            if (e != null) {
                return e
            };
            e = !1;
            var t, n, i;
            n = r.getElementsByTagName("body")[0];
            if (!n || !n.style) {
                return
            };
            t = r.createElement("div");
            i = r.createElement("div");
            i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            n.appendChild(i).appendChild(t);
            if (typeof t.style.zoom !== "undefined") {
                t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
                t.appendChild(r.createElement("div")).style.width = "5px";
                e = t.offsetWidth !== 3
            };
            n.removeChild(i);
            return e
        }
    })();
    var ne = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source,
        ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        v = ["Top", "Right", "Bottom", "Left"],
        j = function(t, n) {
            t = n || t;
            return e.css(t, "display") === "none" || !e.contains(t.ownerDocument, t)
        };

    function Ge(t, n, i, r) {
        var l, a = 1,
            c = 20,
            f = r ? function() {
                return r.cur()
            } : function() {
                return e.css(t, n, "")
            },
            u = f(),
            s = i && i[3] || (e.cssNumber[n] ? "" : "px"),
            o = (e.cssNumber[n] || s !== "px" && +u) && ie.exec(e.css(t, n));
        if (o && o[3] !== s) {
            s = s || o[3];
            i = i || [];
            o = +u || 1;
            do {
                a = a || ".5";
                o = o / a;
                e.style(t, n, o + s)
            }
            while (a !== (a = f() / u) && a !== 1 && --c);
        };
        if (i) {
            o = +o || +u || 0;
            l = i[1] ? o + (i[1] + 1) * i[2] : +i[2];
            if (r) {
                r.unit = s;
                r.start = o;
                r.end = l
            }
        };
        return l
    };
    var p = function(t, n, i, r, o, s, u) {
            var a = 0,
                f = t.length,
                l = i == null;
            if (e.type(i) === "object") {
                o = !0;
                for (a in i) {
                    p(t, n, a, i[a], !0, s, u)
                }
            } else if (r !== undefined) {
                o = !0;
                if (!e.isFunction(r)) {
                    u = !0
                };
                if (l) {
                    if (u) {
                        n.call(t, r);
                        n = null
                    } else {
                        l = n;
                        n = function(t, n, i) {
                            return l.call(e(t), i)
                        }
                    }
                };
                if (n) {
                    for (; a < f; a++) {
                        n(t[a], i, u ? r : r.call(t[a], a, n(t[a], i)))
                    }
                }
            };
            return o ? t : l ? n.call(t) : f ? n(t[0], i) : s
        },
        ee = (/^(?:checkbox|radio)$/i),
        qe = (/<([\w:-]+)/),
        Fe = (/^$|\/(?:java|ecma)script/i),
        te = (/^\s+/),
        Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function Qe(e) {
        var n = Me.split("|"),
            t = e.createDocumentFragment();
        if (t.createElement) {
            while (n.length) {
                t.createElement(n.pop())
            }
        };
        return t
    }(function() {
        var t = r.createElement("div"),
            o = r.createDocumentFragment(),
            n = r.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        i.leadingWhitespace = t.firstChild.nodeType === 3;
        i.tbody = !t.getElementsByTagName("tbody").length;
        i.htmlSerialize = !!t.getElementsByTagName("link").length;
        i.html5Clone = r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>";
        n.type = "checkbox";
        n.checked = !0;
        o.appendChild(n);
        i.appendChecked = n.checked;
        t.innerHTML = "<textarea>x</textarea>";
        i.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
        o.appendChild(t);
        n = r.createElement("input");
        n.setAttribute("type", "radio");
        n.setAttribute("checked", "checked");
        n.setAttribute("name", "t");
        t.appendChild(n);
        i.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked;
        i.noCloneEvent = !!t.addEventListener;
        t[e.expando] = 1;
        i.attributes = !t.getAttribute(e.expando)
    })();
    var s = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: i.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    s.optgroup = s.option;
    s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
    s.th = s.td;

    function o(t, n) {
        var a, r, s = 0,
            i = typeof t.getElementsByTagName !== "undefined" ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== "undefined" ? t.querySelectorAll(n || "*") : undefined;
        if (!i) {
            i = [], a = t.childNodes || t;
            for (;
                (r = a[s]) != null; s++) {
                if (!n || e.nodeName(r, n)) {
                    i.push(r)
                } else {
                    e.merge(i, o(r, n))
                }
            }
        };
        return n === undefined || n && e.nodeName(t, n) ? e.merge([t], i) : i
    };

    function le(t, n) {
        var r, i = 0;
        for (;
            (r = t[i]) != null; i++) {
            e._data(r, "globalEval", !n || e._data(n[i], "globalEval"))
        }
    };
    var Zt = /<|&#?\w+;/,
        He = /<tbody/i;

    function hn(e) {
        if (ee.test(e.type)) {
            e.defaultChecked = e.checked
        }
    };

    function Ke(t, n, r, a, f) {
        var c, u, v, l, m, y, p, x = t.length,
            h = Qe(n),
            d = [],
            g = 0;
        for (; g < x; g++) {
            u = t[g];
            if (u || u === 0) {
                if (e.type(u) === "object") {
                    e.merge(d, u.nodeType ? [u] : u)
                } else if (!Zt.test(u)) {
                    d.push(n.createTextNode(u))
                } else {
                    l = l || h.appendChild(n.createElement("div"));
                    m = (qe.exec(u) || ["", ""])[1].toLowerCase();
                    p = s[m] || s._default;
                    l.innerHTML = p[1] + e.htmlPrefilter(u) + p[2];
                    c = p[0];
                    while (c--) {
                        l = l.lastChild
                    };
                    if (!i.leadingWhitespace && te.test(u)) {
                        d.push(n.createTextNode(te.exec(u)[0]))
                    };
                    if (!i.tbody) {
                        u = m === "table" && !He.test(u) ? l.firstChild : p[1] === "<table>" && !He.test(u) ? l : 0;
                        c = u && u.childNodes.length;
                        while (c--) {
                            if (e.nodeName((y = u.childNodes[c]), "tbody") && !y.childNodes.length) {
                                u.removeChild(y)
                            }
                        }
                    };
                    e.merge(d, l.childNodes);
                    l.textContent = "";
                    while (l.firstChild) {
                        l.removeChild(l.firstChild)
                    };
                    l = h.lastChild
                }
            }
        };
        if (l) {
            h.removeChild(l)
        };
        if (!i.appendChecked) {
            e.grep(o(d, "input"), hn)
        };
        g = 0;
        while ((u = d[g++])) {
            if (a && e.inArray(u, a) > -1) {
                if (f) {
                    f.push(u)
                };
                continue
            };
            v = e.contains(u.ownerDocument, u);
            l = o(h.appendChild(u), "script");
            if (v) {
                le(l)
            };
            if (r) {
                c = 0;
                while ((u = l[c++])) {
                    if (Fe.test(u.type || "")) {
                        r.push(u)
                    }
                }
            }
        };
        l = null;
        return h
    }(function() {
        var e, n, o = r.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) {
            n = "on" + e;
            if (!(i[e] = n in t)) {
                o.setAttribute(n, "t");
                i[e] = o.attributes[n].expando === !1
            }
        };
        o = null
    })();
    var Z = /^(?:input|select|textarea)$/i,
        Qt = /^key/,
        Kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        je = /^(?:focusinfocus|focusoutblur)$/,
        Le = /^([^.]*)(?:\.(.+)|)/;

    function P() {
        return !0
    };

    function S() {
        return !1
    };

    function Ze() {
        try {
            return r.activeElement
        } catch (e) {}
    };

    function fe(t, n, i, r, o, a) {
        var s, u;
        if (typeof n === "object") {
            if (typeof i !== "string") {
                r = r || i;
                i = undefined
            };
            for (u in n) {
                fe(t, u, i, r, n[u], a)
            };
            return t
        };
        if (r == null && o == null) {
            o = i;
            r = i = undefined
        } else if (o == null) {
            if (typeof i === "string") {
                o = r;
                r = undefined
            } else {
                o = r;
                r = i;
                i = undefined
            }
        };
        if (o === !1) {
            o = S
        } else if (!o) {
            return t
        };
        if (a === 1) {
            s = o;
            o = function(t) {
                e().off(t);
                return s.apply(this, arguments)
            };
            o.guid = s.guid || (s.guid = e.guid++)
        };
        return t.each(function() {
            e.event.add(this, n, o, r, i)
        })
    };
    e.event = {
        global: {},
        add: function(t, n, i, r, o) {
            var g, p, m, h, s, u, f, c, a, y, v, d = e._data(t);
            if (!d) {
                return
            };
            if (i.handler) {
                h = i;
                i = h.handler;
                o = h.selector
            };
            if (!i.guid) {
                i.guid = e.guid++
            };
            if (!(p = d.events)) {
                p = d.events = {}
            };
            if (!(u = d.handle)) {
                u = d.handle = function(t) {
                    return typeof e !== "undefined" && (!t || e.event.triggered !== t.type) ? e.event.dispatch.apply(u.elem, arguments) : undefined
                };
                u.elem = t
            };
            n = (n || "").match(l) || [""];
            m = n.length;
            while (m--) {
                g = Le.exec(n[m]) || [];
                a = v = g[1];
                y = (g[2] || "").split(".").sort();
                if (!a) {
                    continue
                };
                s = e.event.special[a] || {};
                a = (o ? s.delegateType : s.bindType) || a;
                s = e.event.special[a] || {};
                f = e.extend({
                    type: a,
                    origType: v,
                    data: r,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && e.expr.match.needsContext.test(o),
                    namespace: y.join(".")
                }, h);
                if (!(c = p[a])) {
                    c = p[a] = [];
                    c.delegateCount = 0;
                    if (!s.setup || s.setup.call(t, r, y, u) === !1) {
                        if (t.addEventListener) {
                            t.addEventListener(a, u, !1)
                        } else if (t.attachEvent) {
                            t.attachEvent("on" + a, u)
                        }
                    }
                };
                if (s.add) {
                    s.add.call(t, f);
                    if (!f.handler.guid) {
                        f.handler.guid = i.guid
                    }
                };
                if (o) {
                    c.splice(c.delegateCount++, 0, f)
                } else {
                    c.push(f)
                };
                e.event.global[a] = !0
            };
            t = null
        },
        remove: function(t, n, i, r, o) {
            var h, s, u, y, g, d, f, c, a, m, v, p = e.hasData(t) && e._data(t);
            if (!p || !(d = p.events)) {
                return
            };
            n = (n || "").match(l) || [""];
            g = n.length;
            while (g--) {
                u = Le.exec(n[g]) || [];
                a = v = u[1];
                m = (u[2] || "").split(".").sort();
                if (!a) {
                    for (a in d) {
                        e.event.remove(t, a + n[g], i, r, !0)
                    };
                    continue
                };
                f = e.event.special[a] || {};
                a = (r ? f.delegateType : f.bindType) || a;
                c = d[a] || [];
                u = u[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)");
                y = h = c.length;
                while (h--) {
                    s = c[h];
                    if ((o || v === s.origType) && (!i || i.guid === s.guid) && (!u || u.test(s.namespace)) && (!r || r === s.selector || r === "**" && s.selector)) {
                        c.splice(h, 1);
                        if (s.selector) {
                            c.delegateCount--
                        };
                        if (f.remove) {
                            f.remove.call(t, s)
                        }
                    }
                };
                if (y && !c.length) {
                    if (!f.teardown || f.teardown.call(t, m, p.handle) === !1) {
                        e.removeEvent(t, a, p.handle)
                    };
                    delete d[a]
                }
            };
            if (e.isEmptyObject(d)) {
                delete p.handle;
                e._removeData(t, "events")
            }
        },
        trigger: function(n, i, o, a) {
            var d, p, u, m, c, f, y, g = [o || r],
                l = k.call(n, "type") ? n.type : n,
                h = k.call(n, "namespace") ? n.namespace.split(".") : [];
            u = f = o = o || r;
            if (o.nodeType === 3 || o.nodeType === 8) {
                return
            };
            if (je.test(l + e.event.triggered)) {
                return
            };
            if (l.indexOf(".") > -1) {
                h = l.split(".");
                l = h.shift();
                h.sort()
            };
            p = l.indexOf(":") < 0 && "on" + l;
            n = n[e.expando] ? n : new e.Event(l, typeof n === "object" && n);
            n.isTrigger = a ? 2 : 3;
            n.namespace = h.join(".");
            n.rnamespace = n.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            n.result = undefined;
            if (!n.target) {
                n.target = o
            };
            i = i == null ? [n] : e.makeArray(i, [n]);
            c = e.event.special[l] || {};
            if (!a && c.trigger && c.trigger.apply(o, i) === !1) {
                return
            };
            if (!a && !c.noBubble && !e.isWindow(o)) {
                m = c.delegateType || l;
                if (!je.test(m + l)) {
                    u = u.parentNode
                };
                for (; u; u = u.parentNode) {
                    g.push(u);
                    f = u
                };
                if (f === (o.ownerDocument || r)) {
                    g.push(f.defaultView || f.parentWindow || t)
                }
            };
            y = 0;
            while ((u = g[y++]) && !n.isPropagationStopped()) {
                n.type = y > 1 ? m : c.bindType || l;
                d = (e._data(u, "events") || {})[n.type] && e._data(u, "handle");
                if (d) {
                    d.apply(u, i)
                };
                d = p && u[p];
                if (d && d.apply && L(u)) {
                    n.result = d.apply(u, i);
                    if (n.result === !1) {
                        n.preventDefault()
                    }
                }
            };
            n.type = l;
            if (!a && !n.isDefaultPrevented()) {
                if ((!c._default || c._default.apply(g.pop(), i) === !1) && L(o)) {
                    if (p && o[l] && !e.isWindow(o)) {
                        f = o[p];
                        if (f) {
                            o[p] = null
                        };
                        e.event.triggered = l;
                        try {
                            o[l]()
                        } catch (s) {};
                        e.event.triggered = undefined;
                        if (f) {
                            o[p] = f
                        }
                    }
                }
            };
            return n.result
        },
        dispatch: function(t) {
            t = e.event.fix(t);
            var a, s, o, i, n, u = [],
                l = h.call(arguments),
                f = (e._data(this, "events") || {})[t.type] || [],
                r = e.event.special[t.type] || {};
            l[0] = t;
            t.delegateTarget = this;
            if (r.preDispatch && r.preDispatch.call(this, t) === !1) {
                return
            };
            u = e.event.handlers.call(this, t, f);
            a = 0;
            while ((i = u[a++]) && !t.isPropagationStopped()) {
                t.currentTarget = i.elem;
                s = 0;
                while ((n = i.handlers[s++]) && !t.isImmediatePropagationStopped()) {
                    if (!t.rnamespace || t.rnamespace.test(n.namespace)) {
                        t.handleObj = n;
                        t.data = n.data;
                        o = ((e.event.special[n.origType] || {}).handle || n.handler).apply(i.elem, l);
                        if (o !== undefined) {
                            if ((t.result = o) === !1) {
                                t.preventDefault();
                                t.stopPropagation()
                            }
                        }
                    }
                }
            };
            if (r.postDispatch) {
                r.postDispatch.call(this, t)
            };
            return t.result
        },
        handlers: function(t, n) {
            var a, r, o, s, l = [],
                u = n.delegateCount,
                i = t.target;
            if (u && i.nodeType && (t.type !== "click" || isNaN(t.button) || t.button < 1)) {
                for (; i != this; i = i.parentNode || this) {
                    if (i.nodeType === 1 && (i.disabled !== !0 || t.type !== "click")) {
                        r = [];
                        for (a = 0; a < u; a++) {
                            s = n[a];
                            o = s.selector + " ";
                            if (r[o] === undefined) {
                                r[o] = s.needsContext ? e(o, this).index(i) > -1 : e.find(o, this, null, [i]).length
                            };
                            if (r[o]) {
                                r.push(s)
                            }
                        };
                        if (r.length) {
                            l.push({
                                elem: i,
                                handlers: r
                            })
                        }
                    }
                }
            };
            if (u < n.length) {
                l.push({
                    elem: this,
                    handlers: n.slice(u)
                })
            };
            return l
        },
        fix: function(t) {
            if (t[e.expando]) {
                return t
            };
            var a, s, u, i = t.type,
                o = t,
                n = this.fixHooks[i];
            if (!n) {
                this.fixHooks[i] = n = Kt.test(i) ? this.mouseHooks : Qt.test(i) ? this.keyHooks : {}
            };
            u = n.props ? this.props.concat(n.props) : this.props;
            t = new e.Event(o);
            a = u.length;
            while (a--) {
                s = u[a];
                t[s] = o[s]
            };
            if (!t.target) {
                t.target = o.srcElement || r
            };
            if (t.target.nodeType === 3) {
                t.target = t.target.parentNode
            };
            t.metaKey = !!t.metaKey;
            return n.filter ? n.filter(t, o) : t
        },
        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                if (e.which == null) {
                    e.which = t.charCode != null ? t.charCode : t.keyCode
                };
                return e
            }
        },
        mouseHooks: {
            props: ("button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement").split(" "),
            filter: function(e, t) {
                var n, a, i, o = t.button,
                    s = t.fromElement;
                if (e.pageX == null && t.clientX != null) {
                    a = e.target.ownerDocument || r;
                    i = a.documentElement;
                    n = a.body;
                    e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0);
                    e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)
                };
                if (!e.relatedTarget && s) {
                    e.relatedTarget = s === e.target ? t.toElement : s
                };
                if (!e.which && o !== undefined) {
                    e.which = (o & 1 ? 1 : (o & 2 ? 3 : (o & 4 ? 2 : 0)))
                };
                return e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Ze() && this.focus) {
                        try {
                            this.focus();
                            return !1
                        } catch (e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Ze() && this.blur) {
                        this.blur();
                        return !1
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (e.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return !1
                    }
                },
                _default: function(t) {
                    return e.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    if (e.result !== undefined && e.originalEvent) {
                        e.originalEvent.returnValue = e.result
                    }
                }
            }
        },
        simulate: function(t, n, i) {
            var r = e.extend(new e.Event(), i, {
                type: t,
                isSimulated: !0
            });
            e.event.trigger(r, null, n);
            if (r.isDefaultPrevented()) {
                i.preventDefault()
            }
        }
    };
    e.removeEvent = r.removeEventListener ? function(e, t, n) {
        if (e.removeEventListener) {
            e.removeEventListener(t, n)
        }
    } : function(e, t, n) {
        var i = "on" + t;
        if (e.detachEvent) {
            if (typeof e[i] === "undefined") {
                e[i] = null
            };
            e.detachEvent(i, n)
        }
    };
    e.Event = function(t, n) {
        if (!(this instanceof e.Event)) {
            return new e.Event(t, n)
        };
        if (t && t.type) {
            this.originalEvent = t;
            this.type = t.type;
            this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && t.returnValue === !1 ? P : S
        } else {
            this.type = t
        };
        if (n) {
            e.extend(this, n)
        };
        this.timeStamp = t && t.timeStamp || e.now();
        this[e.expando] = !0
    };
    e.Event.prototype = {
        constructor: e.Event,
        isDefaultPrevented: S,
        isPropagationStopped: S,
        isImmediatePropagationStopped: S,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = P;
            if (!e) {
                return
            };
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                e.returnValue = !1
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = P;
            if (!e || this.isSimulated) {
                return
            };
            if (e.stopPropagation) {
                e.stopPropagation()
            };
            e.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = P;
            if (e && e.stopImmediatePropagation) {
                e.stopImmediatePropagation()
            };
            this.stopPropagation()
        }
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, n) {
        e.event.special[t] = {
            delegateType: n,
            bindType: n,
            handle: function(t) {
                var r, o = this,
                    i = t.relatedTarget,
                    a = t.handleObj;
                if (!i || (i !== o && !e.contains(o, i))) {
                    t.type = a.origType;
                    r = a.handler.apply(this, arguments);
                    t.type = n
                };
                return r
            }
        }
    });
    if (!i.submit) {
        e.event.special.submit = {
            setup: function() {
                if (e.nodeName(this, "form")) {
                    return !1
                };
                e.event.add(this, "click._submit keypress._submit", function(t) {
                    var i = t.target,
                        n = e.nodeName(i, "input") || e.nodeName(i, "button") ? e.prop(i, "form") : undefined;
                    if (n && !e._data(n, "submit")) {
                        e.event.add(n, "submit._submit", function(e) {
                            e._submitBubble = !0
                        });
                        e._data(n, "submit", !0)
                    }
                })
            },
            postDispatch: function(t) {
                if (t._submitBubble) {
                    delete t._submitBubble;
                    if (this.parentNode && !t.isTrigger) {
                        e.event.simulate("submit", this.parentNode, t)
                    }
                }
            },
            teardown: function() {
                if (e.nodeName(this, "form")) {
                    return !1
                };
                e.event.remove(this, "._submit")
            }
        }
    };
    if (!i.change) {
        e.event.special.change = {
            setup: function() {
                if (Z.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        e.event.add(this, "propertychange._change", function(e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._justChanged = !0
                            }
                        });
                        e.event.add(this, "click._change", function(t) {
                            if (this._justChanged && !t.isTrigger) {
                                this._justChanged = !1
                            };
                            e.event.simulate("change", this, t)
                        })
                    };
                    return !1
                };
                e.event.add(this, "beforeactivate._change", function(t) {
                    var n = t.target;
                    if (Z.test(n.nodeName) && !e._data(n, "change")) {
                        e.event.add(n, "change._change", function(t) {
                            if (this.parentNode && !t.isSimulated && !t.isTrigger) {
                                e.event.simulate("change", this.parentNode, t)
                            }
                        });
                        e._data(n, "change", !0)
                    }
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || (t.type !== "radio" && t.type !== "checkbox")) {
                    return e.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function() {
                e.event.remove(this, "._change");
                return !Z.test(this.nodeName)
            }
        }
    };
    if (!i.focusin) {
        e.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, n) {
            var i = function(t) {
                e.event.simulate(n, t.target, e.event.fix(t))
            };
            e.event.special[n] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        o = e._data(r, n);
                    if (!o) {
                        r.addEventListener(t, i, !0)
                    };
                    e._data(r, n, (o || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        o = e._data(r, n) - 1;
                    if (!o) {
                        r.removeEventListener(t, i, !0);
                        e._removeData(r, n)
                    } else {
                        e._data(r, n, o)
                    }
                }
            }
        })
    };
    e.fn.extend({
        on: function(e, t, n, i) {
            return fe(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return fe(this, e, t, n, i, 1)
        },
        off: function(t, n, i) {
            var r, o;
            if (t && t.preventDefault && t.handleObj) {
                r = t.handleObj;
                e(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                return this
            };
            if (typeof t === "object") {
                for (o in t) {
                    this.off(o, n, t[o])
                };
                return this
            };
            if (n === !1 || typeof n === "function") {
                i = n;
                n = undefined
            };
            if (i === !1) {
                i = S
            };
            return this.each(function() {
                e.event.remove(this, t, i, n)
            })
        },
        trigger: function(t, n) {
            return this.each(function() {
                e.event.trigger(t, n, this)
            })
        },
        triggerHandler: function(t, n) {
            var i = this[0];
            if (i) {
                return e.event.trigger(t, n, i, !0)
            }
        }
    });
    var zt = / jQuery\d+="(?:null|\d+)"/g,
        De = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
        Xt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Ut = /<script|<style|<link/i,
        Vt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Yt = /^true\/(.*)/,
        Jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Gt = Qe(r),
        K = Gt.appendChild(r.createElement("div"));

    function et(t, n) {
        return e.nodeName(t, "table") && e.nodeName(n.nodeType !== 11 ? n : n.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    };

    function tt(t) {
        t.type = (e.find.attr(t, "type") !== null) + "/" + t.type;
        return t
    };

    function nt(e) {
        var t = Yt.exec(e.type);
        if (t) {
            e.type = t[1]
        } else {
            e.removeAttribute("type")
        };
        return e
    };

    function it(t, n) {
        if (n.nodeType !== 1 || !e.hasData(t)) {
            return
        };
        var r, o, s, u = e._data(t),
            i = e._data(n, u),
            a = u.events;
        if (a) {
            delete i.handle;
            i.events = {};
            for (r in a) {
                for (o = 0, s = a[r].length; o < s; o++) {
                    e.event.add(n, r, a[r][o])
                }
            }
        };
        if (i.data) {
            i.data = e.extend({}, i.data)
        }
    };

    function gn(t, n) {
        var r, a, o;
        if (n.nodeType !== 1) {
            return
        };
        r = n.nodeName.toLowerCase();
        if (!i.noCloneEvent && n[e.expando]) {
            o = e._data(n);
            for (a in o.events) {
                e.removeEvent(n, a, o.handle)
            };
            n.removeAttribute(e.expando)
        };
        if (r === "script" && n.text !== t.text) {
            tt(n).text = t.text;
            nt(n)
        } else if (r === "object") {
            if (n.parentNode) {
                n.outerHTML = t.outerHTML
            };
            if (i.html5Clone && (t.innerHTML && !e.trim(n.innerHTML))) {
                n.innerHTML = t.innerHTML
            }
        } else if (r === "input" && ee.test(t.type)) {
            n.defaultChecked = n.checked = t.checked;
            if (n.value !== t.value) {
                n.value = t.value
            }
        } else if (r === "option") {
            n.defaultSelected = n.selected = t.defaultSelected
        } else if (r === "input" || r === "textarea") {
            n.defaultValue = t.defaultValue
        }
    };

    function x(t, n, r, a) {
        n = Ie.apply([], n);
        var c, s, d, l, g, f, u = 0,
            p = t.length,
            y = p - 1,
            h = n[0],
            m = e.isFunction(h);
        if (m || (p > 1 && typeof h === "string" && !i.checkClone && Vt.test(h))) {
            return t.each(function(e) {
                var i = t.eq(e);
                if (m) {
                    n[0] = h.call(this, e, i.html())
                };
                x(i, n, r, a)
            })
        };
        if (p) {
            f = Ke(n, t[0].ownerDocument, !1, t, a);
            c = f.firstChild;
            if (f.childNodes.length === 1) {
                f = c
            };
            if (c || a) {
                l = e.map(o(f, "script"), tt);
                d = l.length;
                for (; u < p; u++) {
                    s = f;
                    if (u !== y) {
                        s = e.clone(s, !0, !0);
                        if (d) {
                            e.merge(l, o(s, "script"))
                        }
                    };
                    r.call(t[u], s, u)
                };
                if (d) {
                    g = l[l.length - 1].ownerDocument;
                    e.map(l, nt);
                    for (u = 0; u < d; u++) {
                        s = l[u];
                        if (Fe.test(s.type || "") && !e._data(s, "globalEval") && e.contains(g, s)) {
                            if (s.src) {
                                if (e._evalUrl) {
                                    e._evalUrl(s.src)
                                }
                            } else {
                                e.globalEval((s.text || s.textContent || s.innerHTML || "").replace(Jt, ""))
                            }
                        }
                    }
                };
                f = c = null
            }
        };
        return t
    };

    function rt(t, n, i) {
        var r, s = n ? e.filter(n, t) : t,
            a = 0;
        for (;
            (r = s[a]) != null; a++) {
            if (!i && r.nodeType === 1) {
                e.cleanData(o(r))
            };
            if (r.parentNode) {
                if (i && e.contains(r.ownerDocument, r)) {
                    le(o(r, "script"))
                };
                r.parentNode.removeChild(r)
            }
        };
        return t
    };
    e.extend({
        htmlPrefilter: function(e) {
            return e.replace(Xt, "<$1></$2>")
        },
        clone: function(t, n, r) {
            var a, f, u, s, l, c = e.contains(t.ownerDocument, t);
            if (i.html5Clone || e.isXMLDoc(t) || !De.test("<" + t.nodeName + ">")) {
                u = t.cloneNode(!0)
            } else {
                K.innerHTML = t.outerHTML;
                K.removeChild(u = K.firstChild)
            };
            if ((!i.noCloneEvent || !i.noCloneChecked) && (t.nodeType === 1 || t.nodeType === 11) && !e.isXMLDoc(t)) {
                a = o(u);
                l = o(t);
                for (s = 0;
                    (f = l[s]) != null; ++s) {
                    if (a[s]) {
                        gn(f, a[s])
                    }
                }
            };
            if (n) {
                if (r) {
                    l = l || o(t);
                    a = a || o(u);
                    for (s = 0;
                        (f = l[s]) != null; s++) {
                        it(f, a[s])
                    }
                } else {
                    it(t, u)
                }
            };
            a = o(u, "script");
            if (a.length > 0) {
                le(a, !c && o(t, "script"))
            };
            a = l = f = null;
            return u
        },
        cleanData: function(t, n) {
            var r, s, o, a, f = 0,
                u = e.expando,
                l = e.cache,
                d = i.attributes,
                p = e.event.special;
            for (;
                (r = t[f]) != null; f++) {
                if (n || L(r)) {
                    o = r[u];
                    a = o && l[o];
                    if (a) {
                        if (a.events) {
                            for (s in a.events) {
                                if (p[s]) {
                                    e.event.remove(r, s)
                                } else {
                                    e.removeEvent(r, s, a.handle)
                                }
                            }
                        };
                        if (l[o]) {
                            delete l[o];
                            if (!d && typeof r.removeAttribute !== "undefined") {
                                r.removeAttribute(u)
                            } else {
                                r[u] = undefined
                            };
                            c.push(o)
                        }
                    }
                }
            }
        }
    });
    e.fn.extend({
        domManip: x,
        detach: function(e) {
            return rt(this, e, !0)
        },
        remove: function(e) {
            return rt(this, e)
        },
        text: function(t) {
            return p(this, function(t) {
                return t === undefined ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return x(this, arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = et(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return x(this, arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = et(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return x(this, arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this)
                }
            })
        },
        after: function() {
            return x(this, arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }
            })
        },
        empty: function() {
            var t, n = 0;
            for (;
                (t = this[n]) != null; n++) {
                if (t.nodeType === 1) {
                    e.cleanData(o(t, !1))
                }
                while (t.firstChild) {
                    t.removeChild(t.firstChild)
                };
                if (t.options && e.nodeName(t, "select")) {
                    t.options.length = 0
                }
            };
            return this
        },
        clone: function(t, n) {
            t = t == null ? !1 : t;
            n = n == null ? t : n;
            return this.map(function() {
                return e.clone(this, t, n)
            })
        },
        html: function(t) {
            return p(this, function(t) {
                var r = this[0] || {},
                    a = 0,
                    u = this.length;
                if (t === undefined) {
                    return r.nodeType === 1 ? r.innerHTML.replace(zt, "") : undefined
                };
                if (typeof t === "string" && !Ut.test(t) && (i.htmlSerialize || !De.test(t)) && (i.leadingWhitespace || !te.test(t)) && !s[(qe.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = e.htmlPrefilter(t);
                    try {
                        for (; a < u; a++) {
                            r = this[a] || {};
                            if (r.nodeType === 1) {
                                e.cleanData(o(r, !1));
                                r.innerHTML = t
                            }
                        };
                        r = 0
                    } catch (n) {}
                };
                if (r) {
                    this.empty().append(t)
                }
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return x(this, arguments, function(n) {
                var i = this.parentNode;
                if (e.inArray(this, t) < 0) {
                    e.cleanData(o(this));
                    if (i) {
                        i.replaceChild(n, this)
                    }
                }
            }, t)
        }
    });
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, n) {
        e.fn[t] = function(t) {
            var r, i = 0,
                o = [],
                a = e(t),
                s = a.length - 1;
            for (; i <= s; i++) {
                r = i === s ? this : this.clone(!0);
                e(a[i])[n](r);
                oe.apply(o, r.get())
            };
            return this.pushStack(o)
        }
    });
    var D, Ae = {
        HTML: "block",
        BODY: "block"
    };

    function ot(t, n) {
        var i = e(n.createElement(t)).appendTo(n.body),
            r = e.css(i[0], "display");
        i.detach();
        return r
    };

    function B(t) {
        var i = r,
            n = Ae[t];
        if (!n) {
            n = ot(t, i);
            if (n === "none" || !n) {
                D = (D || e("<iframe frameborder='0' width='0' height='0'/>")).appendTo(i.documentElement);
                i = (D[0].contentWindow || D[0].contentDocument).document;
                i.write();
                i.close();
                n = ot(t, i);
                D.detach()
            };
            Ae[t] = n
        };
        return n
    };
    var ke = (/^margin/),
        M = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        Q = function(e, t, n, i) {
            var o, r, a = {};
            for (r in t) {
                a[r] = e.style[r];
                e.style[r] = t[r]
            };
            o = n.apply(e, i || []);
            for (r in t) {
                e.style[r] = a[r]
            };
            return o
        },
        Se = r.documentElement;
    (function() {
        var o, l, f, a, c, d, u = r.createElement("div"),
            n = r.createElement("div");
        if (!n.style) {
            return
        };
        n.style.cssText = "float:left;opacity:.5";
        i.opacity = n.style.opacity === "0.5";
        i.cssFloat = !!n.style.cssFloat;
        n.style.backgroundClip = "content-box";
        n.cloneNode(!0).style.backgroundClip = "";
        i.clearCloneStyle = n.style.backgroundClip === "content-box";
        u = r.createElement("div");
        u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
        n.innerHTML = "";
        u.appendChild(n);
        i.boxSizing = n.style.boxSizing === "" || n.style.MozBoxSizing === "" || n.style.WebkitBoxSizing === "";
        e.extend(i, {
            reliableHiddenOffsets: function() {
                if (o == null) {
                    s()
                };
                return a
            },
            boxSizingReliable: function() {
                if (o == null) {
                    s()
                };
                return f
            },
            pixelMarginRight: function() {
                if (o == null) {
                    s()
                };
                return l
            },
            pixelPosition: function() {
                if (o == null) {
                    s()
                };
                return o
            },
            reliableMarginRight: function() {
                if (o == null) {
                    s()
                };
                return c
            },
            reliableMarginLeft: function() {
                if (o == null) {
                    s()
                };
                return d
            }
        });

        function s() {
            var e, i, s = r.documentElement;
            s.appendChild(u);
            n.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            o = f = d = !1;
            l = c = !0;
            if (t.getComputedStyle) {
                i = t.getComputedStyle(n);
                o = (i || {}).top !== "1%";
                d = (i || {}).marginLeft === "2px";
                f = (i || {
                    width: "4px"
                }).width === "4px";
                n.style.marginRight = "50%";
                l = (i || {
                    marginRight: "4px"
                }).marginRight === "4px";
                e = n.appendChild(r.createElement("div"));
                e.style.cssText = n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                e.style.marginRight = e.style.width = "0";
                n.style.width = "1px";
                c = !parseFloat((t.getComputedStyle(e) || {}).marginRight);
                n.removeChild(e)
            };
            n.style.display = "none";
            a = n.getClientRects().length === 0;
            if (a) {
                n.style.display = "";
                n.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                n.childNodes[0].style.borderCollapse = "separate";
                e = n.getElementsByTagName("td");
                e[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                a = e[0].offsetHeight === 0;
                if (a) {
                    e[0].style.display = "";
                    e[1].style.display = "none";
                    a = e[0].offsetHeight === 0
                }
            };
            s.removeChild(u)
        }
    })();
    var y, d, It = /^(top|right|bottom|left)$/;
    if (t.getComputedStyle) {
        y = function(e) {
            var n = e.ownerDocument.defaultView;
            if (!n || !n.opener) {
                n = t
            };
            return n.getComputedStyle(e)
        };
        d = function(t, n, r) {
            var s, u, l, o, a = t.style;
            r = r || y(t);
            o = r ? r.getPropertyValue(n) || r[n] : undefined;
            if ((o === "" || o === undefined) && !e.contains(t.ownerDocument, t)) {
                o = e.style(t, n)
            };
            if (r) {
                if (!i.pixelMarginRight() && M.test(o) && ke.test(n)) {
                    s = a.width;
                    u = a.minWidth;
                    l = a.maxWidth;
                    a.minWidth = a.maxWidth = a.width = o;
                    o = r.width;
                    a.width = s;
                    a.minWidth = u;
                    a.maxWidth = l
                }
            };
            return o === undefined ? o : o + ""
        }
    } else if (Se.currentStyle) {
        y = function(e) {
            return e.currentStyle
        };
        d = function(e, t, n) {
            var s, o, a, i, r = e.style;
            n = n || y(e);
            i = n ? n[t] : undefined;
            if (i == null && r && r[t]) {
                i = r[t]
            };
            if (M.test(i) && !It.test(t)) {
                s = r.left;
                o = e.runtimeStyle;
                a = o && o.left;
                if (a) {
                    o.left = e.currentStyle.left
                };
                r.left = t === "fontSize" ? "1em" : i;
                i = r.pixelLeft + "px";
                r.left = s;
                if (a) {
                    o.left = a
                }
            };
            return i === undefined ? i : i + "" || "auto"
        }
    };

    function ce(e, t) {
        return {
            get: function() {
                if (e()) {
                    delete this.get;
                    return
                };
                return (this.get = t).apply(this, arguments)
            }
        }
    };
    var G = /alpha\([^)]*\)/i,
        Rt = /opacity\s*=\s*([^)]*)/i,
        Pt = /^(none|table(?!-c[ea]).+)/,
        Bt = new RegExp("^(" + ne + ")(.*)$", "i"),
        Wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ce = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ee = ["Webkit", "O", "Moz", "ms"],
        Ne = r.createElement("div").style;

    function at(e) {
        if (e in Ne) {
            return e
        };
        var n = e.charAt(0).toUpperCase() + e.slice(1),
            t = Ee.length;
        while (t--) {
            e = Ee[t] + n;
            if (e in Ne) {
                return e
            }
        }
    };

    function st(t, n) {
        var o, i, s, a = [],
            r = 0,
            u = t.length;
        for (; r < u; r++) {
            i = t[r];
            if (!i.style) {
                continue
            };
            a[r] = e._data(i, "olddisplay");
            o = i.style.display;
            if (n) {
                if (!a[r] && o === "none") {
                    i.style.display = ""
                };
                if (i.style.display === "" && j(i)) {
                    a[r] = e._data(i, "olddisplay", B(i.nodeName))
                }
            } else {
                s = j(i);
                if (o && o !== "none" || !s) {
                    e._data(i, "olddisplay", s ? o : e.css(i, "display"))
                }
            }
        };
        for (r = 0; r < u; r++) {
            i = t[r];
            if (!i.style) {
                continue
            };
            if (!n || i.style.display === "none" || i.style.display === "") {
                i.style.display = n ? a[r] || "" : "none"
            }
        };
        return t
    };

    function ut(e, t, n) {
        var i = Bt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    };

    function lt(t, n, i, r, o) {
        var a = i === (r ? "border" : "content") ? 4 : n === "width" ? 1 : 0,
            s = 0;
        for (; a < 4; a += 2) {
            if (i === "margin") {
                s += e.css(t, i + v[a], !0, o)
            };
            if (r) {
                if (i === "content") {
                    s -= e.css(t, "padding" + v[a], !0, o)
                };
                if (i !== "margin") {
                    s -= e.css(t, "border" + v[a] + "Width", !0, o)
                }
            } else {
                s += e.css(t, "padding" + v[a], !0, o);
                if (i !== "padding") {
                    s += e.css(t, "border" + v[a] + "Width", !0, o)
                }
            }
        };
        return s
    };

    function ft(t, n, r) {
        var s = !0,
            o = n === "width" ? t.offsetWidth : t.offsetHeight,
            a = y(t),
            u = i.boxSizing && e.css(t, "boxSizing", !1, a) === "border-box";
        if (o <= 0 || o == null) {
            o = d(t, n, a);
            if (o < 0 || o == null) {
                o = t.style[n]
            };
            if (M.test(o)) {
                return o
            };
            s = u && (i.boxSizingReliable() || o === t.style[n]);
            o = parseFloat(o) || 0
        };
        return (o + lt(t, n, r || (u ? "border" : "content"), s, a)) + "px"
    };
    e.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = d(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            "animationIterationCount": !0,
            "columnCount": !0,
            "fillOpacity": !0,
            "flexGrow": !0,
            "flexShrink": !0,
            "fontWeight": !0,
            "lineHeight": !0,
            "opacity": !0,
            "order": !0,
            "orphans": !0,
            "widows": !0,
            "zIndex": !0,
            "zoom": !0
        },
        cssProps: {
            "float": i.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, n, r, o) {
            if (!t || t.nodeType === 3 || t.nodeType === 8 || !t.style) {
                return
            };
            var s, f, u, l = e.camelCase(n),
                c = t.style;
            n = e.cssProps[l] || (e.cssProps[l] = at(l) || l);
            u = e.cssHooks[n] || e.cssHooks[l];
            if (r !== undefined) {
                f = typeof r;
                if (f === "string" && (s = ie.exec(r)) && s[1]) {
                    r = Ge(t, n, s);
                    f = "number"
                };
                if (r == null || r !== r) {
                    return
                };
                if (f === "number") {
                    r += s && s[3] || (e.cssNumber[l] ? "" : "px")
                };
                if (!i.clearCloneStyle && r === "" && n.indexOf("background") === 0) {
                    c[n] = "inherit"
                };
                if (!u || !("set" in u) || (r = u.set(t, r, o)) !== undefined) {
                    try {
                        c[n] = r
                    } catch (a) {}
                }
            } else {
                if (u && "get" in u && (s = u.get(t, !1, o)) !== undefined) {
                    return s
                };
                return c[n]
            }
        },
        css: function(t, n, i, r) {
            var u, o, s, a = e.camelCase(n);
            n = e.cssProps[a] || (e.cssProps[a] = at(a) || a);
            s = e.cssHooks[n] || e.cssHooks[a];
            if (s && "get" in s) {
                o = s.get(t, !0, i)
            };
            if (o === undefined) {
                o = d(t, n, r)
            };
            if (o === "normal" && n in Ce) {
                o = Ce[n]
            };
            if (i === "" || i) {
                u = parseFloat(o);
                return i === !0 || isFinite(u) ? u || 0 : o
            };
            return o
        }
    });
    e.each(["height", "width"], function(t, n) {
        e.cssHooks[n] = {
            get: function(t, i, r) {
                if (i) {
                    return Pt.test(e.css(t, "display")) && t.offsetWidth === 0 ? Q(t, Wt, function() {
                        return ft(t, n, r)
                    }) : ft(t, n, r)
                }
            },
            set: function(t, r, o) {
                var a = o && y(t);
                return ut(t, r, o ? lt(t, n, o, i.boxSizing && e.css(t, "boxSizing", !1, a) === "border-box", a) : 0)
            }
        }
    });
    if (!i.opacity) {
        e.cssHooks.opacity = {
            get: function(e, t) {
                return Rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : t ? "1" : ""
            },
            set: function(t, n) {
                var i = t.style,
                    r = t.currentStyle,
                    a = e.isNumeric(n) ? "alpha(opacity=" + n * 100 + ")" : "",
                    o = r && r.filter || i.filter || "";
                i.zoom = 1;
                if ((n >= 1 || n === "") && e.trim(o.replace(G, "")) === "" && i.removeAttribute) {
                    i.removeAttribute("filter");
                    if (n === "" || r && !r.filter) {
                        return
                    }
                };
                i.filter = G.test(o) ? o.replace(G, a) : o + " " + a
            }
        }
    };
    e.cssHooks.marginRight = ce(i.reliableMarginRight, function(e, t) {
        if (t) {
            return Q(e, {
                "display": "inline-block"
            }, d, [e, "marginRight"])
        }
    });
    e.cssHooks.marginLeft = ce(i.reliableMarginLeft, function(t, n) {
        if (n) {
            return (parseFloat(d(t, "marginLeft")) || (e.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - Q(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            }) : 0)) + "px"
        }
    });
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, n) {
        e.cssHooks[t + n] = {
            expand: function(e) {
                var i = 0,
                    o = {},
                    r = typeof e === "string" ? e.split(" ") : [e];
                for (; i < 4; i++) {
                    o[t + v[i] + n] = r[i] || r[i - 2] || r[0]
                };
                return o
            }
        };
        if (!ke.test(t)) {
            e.cssHooks[t + n].set = ut
        }
    });
    e.fn.extend({
        css: function(t, n) {
            return p(this, function(t, n, i) {
                var o, a, s = {},
                    r = 0;
                if (e.isArray(n)) {
                    o = y(t);
                    a = n.length;
                    for (; r < a; r++) {
                        s[n[r]] = e.css(t, n[r], !1, o)
                    };
                    return s
                };
                return i !== undefined ? e.style(t, n, i) : e.css(t, n)
            }, t, n, arguments.length > 1)
        },
        show: function() {
            return st(this, !0)
        },
        hide: function() {
            return st(this)
        },
        toggle: function(t) {
            if (typeof t === "boolean") {
                return t ? this.show() : this.hide()
            };
            return this.each(function() {
                if (j(this)) {
                    e(this).show()
                } else {
                    e(this).hide()
                }
            })
        }
    });

    function a(e, t, n, i, r) {
        return new a.prototype.init(e, t, n, i, r)
    };
    e.Tween = a;
    a.prototype = {
        constructor: a,
        init: function(t, n, i, r, o, a) {
            this.elem = t;
            this.prop = i;
            this.easing = o || e.easing._default;
            this.options = n;
            this.start = this.now = this.cur();
            this.end = r;
            this.unit = a || (e.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = a.propHooks[this.prop];
            return e && e.get ? e.get(this) : a.propHooks._default.get(this)
        },
        run: function(t) {
            var n, i = a.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = n = e.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)
            } else {
                this.pos = n = t
            };
            this.now = (this.end - this.start) * n + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            };
            if (i && i.set) {
                i.set(this)
            } else {
                a.propHooks._default.set(this)
            };
            return this
        }
    };
    a.prototype.init.prototype = a.prototype;
    a.propHooks = {
        _default: {
            get: function(t) {
                var n;
                if (t.elem.nodeType !== 1 || t.elem[t.prop] != null && t.elem.style[t.prop] == null) {
                    return t.elem[t.prop]
                };
                n = e.css(t.elem, t.prop, "");
                return !n || n === "auto" ? 0 : n
            },
            set: function(t) {
                if (e.fx.step[t.prop]) {
                    e.fx.step[t.prop](t)
                } else if (t.elem.nodeType === 1 && (t.elem.style[e.cssProps[t.prop]] != null || e.cssHooks[t.prop])) {
                    e.style(t.elem, t.prop, t.now + t.unit)
                } else {
                    t.elem[t.prop] = t.now
                }
            }
        }
    };
    a.propHooks.scrollTop = a.propHooks.scrollLeft = {
        set: function(e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now
            }
        }
    };
    e.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    };
    e.fx = a.prototype.init;
    e.fx.step = {};
    var C, F, Mt = /^(?:toggle|show|hide)$/,
        Ot = /queueHooks$/;

    function ct() {
        t.setTimeout(function() {
            C = undefined
        });
        return (C = e.now())
    };

    function W(e, t) {
        var i, n = {
                height: e
            },
            r = 0;
        t = t ? 1 : 0;
        for (; r < 4; r += 2 - t) {
            i = v[r];
            n["margin" + i] = n["padding" + i] = e
        };
        if (t) {
            n.opacity = n.width = e
        };
        return n
    };

    function dt(e, t, n) {
        var r, o = (u.tweeners[t] || []).concat(u.tweeners["*"]),
            i = 0,
            a = o.length;
        for (; i < a; i++) {
            if ((r = o[i].call(n, t, e))) {
                return r
            }
        }
    };

    function mn(t, n, r) {
        var o, d, g, p, u, m, l, y, c = this,
            h = {},
            s = t.style,
            f = t.nodeType && j(t),
            a = e._data(t, "fxshow");
        if (!r.queue) {
            u = e._queueHooks(t, "fx");
            if (u.unqueued == null) {
                u.unqueued = 0;
                m = u.empty.fire;
                u.empty.fire = function() {
                    if (!u.unqueued) {
                        m()
                    }
                }
            };
            u.unqueued++;
            c.always(function() {
                c.always(function() {
                    u.unqueued--;
                    if (!e.queue(t, "fx").length) {
                        u.empty.fire()
                    }
                })
            })
        };
        if (t.nodeType === 1 && ("height" in n || "width" in n)) {
            r.overflow = [s.overflow, s.overflowX, s.overflowY];
            l = e.css(t, "display");
            y = l === "none" ? e._data(t, "olddisplay") || B(t.nodeName) : l;
            if (y === "inline" && e.css(t, "float") === "none") {
                if (!i.inlineBlockNeedsLayout || B(t.nodeName) === "inline") {
                    s.display = "inline-block"
                } else {
                    s.zoom = 1
                }
            }
        };
        if (r.overflow) {
            s.overflow = "hidden";
            if (!i.shrinkWrapBlocks()) {
                c.always(function() {
                    s.overflow = r.overflow[0];
                    s.overflowX = r.overflow[1];
                    s.overflowY = r.overflow[2]
                })
            }
        };
        for (o in n) {
            d = n[o];
            if (Mt.exec(d)) {
                delete n[o];
                g = g || d === "toggle";
                if (d === (f ? "hide" : "show")) {
                    if (d === "show" && a && a[o] !== undefined) {
                        f = !0
                    } else {
                        continue
                    }
                };
                h[o] = a && a[o] || e.style(t, o)
            } else {
                l = undefined
            }
        };
        if (!e.isEmptyObject(h)) {
            if (a) {
                if ("hidden" in a) {
                    f = a.hidden
                }
            } else {
                a = e._data(t, "fxshow", {})
            };
            if (g) {
                a.hidden = !f
            };
            if (f) {
                e(t).show()
            } else {
                c.done(function() {
                    e(t).hide()
                })
            };
            c.done(function() {
                var n;
                e._removeData(t, "fxshow");
                for (n in h) {
                    e.style(t, n, h[n])
                }
            });
            for (o in h) {
                p = dt(f ? a[o] : 0, o, c);
                if (!(o in a)) {
                    a[o] = p.start;
                    if (f) {
                        p.end = p.start;
                        p.start = o === "width" || o === "height" ? 1 : 0
                    }
                }
            }
        } else if ((l === "none" ? B(t.nodeName) : l) === "inline") {
            s.display = l
        }
    };

    function yn(t, n) {
        var i, o, a, r, s;
        for (i in t) {
            o = e.camelCase(i);
            a = n[o];
            r = t[i];
            if (e.isArray(r)) {
                a = r[1];
                r = t[i] = r[0]
            };
            if (i !== o) {
                t[o] = r;
                delete t[i]
            };
            s = e.cssHooks[o];
            if (s && "expand" in s) {
                r = s.expand(r);
                delete t[o];
                for (i in r) {
                    if (!(i in t)) {
                        t[i] = r[i];
                        n[i] = a
                    }
                }
            } else {
                n[o] = a
            }
        }
    };

    function u(t, n, i) {
        var o, s, l = 0,
            d = u.prefilters.length,
            a = e.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (s) {
                    return !1
                };
                var u = C || ct(),
                    e = Math.max(0, r.startTime + r.duration - u),
                    l = e / r.duration || 0,
                    n = 1 - l,
                    i = 0,
                    o = r.tweens.length;
                for (; i < o; i++) {
                    r.tweens[i].run(n)
                };
                a.notifyWith(t, [r, n, e]);
                if (n < 1 && o) {
                    return e
                } else {
                    a.resolveWith(t, [r]);
                    return !1
                }
            },
            r = a.promise({
                elem: t,
                props: e.extend({}, n),
                opts: e.extend(!0, {
                    specialEasing: {},
                    easing: e.easing._default
                }, i),
                originalProperties: n,
                originalOptions: i,
                startTime: C || ct(),
                duration: i.duration,
                tweens: [],
                createTween: function(n, i) {
                    var o = e.Tween(t, r.opts, n, i, r.opts.specialEasing[n] || r.opts.easing);
                    r.tweens.push(o);
                    return o
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? r.tweens.length : 0;
                    if (s) {
                        return this
                    };
                    s = !0;
                    for (; n < i; n++) {
                        r.tweens[n].run(1)
                    };
                    if (e) {
                        a.notifyWith(t, [r, 1, 0]);
                        a.resolveWith(t, [r, e])
                    } else {
                        a.rejectWith(t, [r, e])
                    };
                    return this
                }
            }),
            f = r.props;
        yn(f, r.opts.specialEasing);
        for (; l < d; l++) {
            o = u.prefilters[l].call(r, t, f, r.opts);
            if (o) {
                if (e.isFunction(o.stop)) {
                    e._queueHooks(r.elem, r.opts.queue).stop = e.proxy(o.stop, o)
                };
                return o
            }
        };
        e.map(f, dt, r);
        if (e.isFunction(r.opts.start)) {
            r.opts.start.call(t, r)
        };
        e.fx.timer(e.extend(c, {
            elem: t,
            anim: r,
            queue: r.opts.queue
        }));
        return r.progress(r.opts.progress).done(r.opts.done, r.opts.complete).fail(r.opts.fail).always(r.opts.always)
    };
    e.Animation = e.extend(u, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                Ge(n.elem, e, ie.exec(t), n);
                return n
            }]
        },
        tweener: function(t, n) {
            if (e.isFunction(t)) {
                n = t;
                t = ["*"]
            } else {
                t = t.match(l)
            };
            var i, r = 0,
                o = t.length;
            for (; r < o; r++) {
                i = t[r];
                u.tweeners[i] = u.tweeners[i] || [];
                u.tweeners[i].unshift(n)
            }
        },
        prefilters: [mn],
        prefilter: function(e, t) {
            if (t) {
                u.prefilters.unshift(e)
            } else {
                u.prefilters.push(e)
            }
        }
    });
    e.speed = function(t, n, i) {
        var r = t && typeof t === "object" ? e.extend({}, t) : {
            complete: i || !i && n || e.isFunction(t) && t,
            duration: t,
            easing: i && n || n && !e.isFunction(n) && n
        };
        r.duration = e.fx.off ? 0 : typeof r.duration === "number" ? r.duration : r.duration in e.fx.speeds ? e.fx.speeds[r.duration] : e.fx.speeds._default;
        if (r.queue == null || r.queue === !0) {
            r.queue = "fx"
        };
        r.old = r.complete;
        r.complete = function() {
            if (e.isFunction(r.old)) {
                r.old.call(this)
            };
            if (r.queue) {
                e.dequeue(this, r.queue)
            }
        };
        return r
    };
    e.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(j).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, n, i, r) {
            var s = e.isEmptyObject(t),
                a = e.speed(n, i, r),
                o = function() {
                    var n = u(this, e.extend({}, t), a);
                    if (s || e._data(this, "finish")) {
                        n.stop(!0)
                    }
                };
            o.finish = o;
            return s || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(t, n, i) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop;
                t(i)
            };
            if (typeof t !== "string") {
                i = n;
                n = t;
                t = undefined
            };
            if (n && t !== !1) {
                this.queue(t || "fx", [])
            };
            return this.each(function() {
                var s = !0,
                    n = t != null && t + "queueHooks",
                    a = e.timers,
                    o = e._data(this);
                if (n) {
                    if (o[n] && o[n].stop) {
                        r(o[n])
                    }
                } else {
                    for (n in o) {
                        if (o[n] && o[n].stop && Ot.test(n)) {
                            r(o[n])
                        }
                    }
                };
                for (n = a.length; n--;) {
                    if (a[n].elem === this && (t == null || a[n].queue === t)) {
                        a[n].anim.stop(i);
                        s = !1;
                        a.splice(n, 1)
                    }
                };
                if (s || !i) {
                    e.dequeue(this, t)
                }
            })
        },
        finish: function(t) {
            if (t !== !1) {
                t = t || "fx"
            };
            return this.each(function() {
                var n, o = e._data(this),
                    i = o[t + "queue"],
                    a = o[t + "queueHooks"],
                    r = e.timers,
                    s = i ? i.length : 0;
                o.finish = !0;
                e.queue(this, t, []);
                if (a && a.stop) {
                    a.stop.call(this, !0)
                };
                for (n = r.length; n--;) {
                    if (r[n].elem === this && r[n].queue === t) {
                        r[n].anim.stop(!0);
                        r.splice(n, 1)
                    }
                };
                for (n = 0; n < s; n++) {
                    if (i[n] && i[n].finish) {
                        i[n].finish.call(this)
                    }
                };
                delete o.finish
            })
        }
    });
    e.each(["toggle", "show", "hide"], function(t, n) {
        var i = e.fn[n];
        e.fn[n] = function(e, t, r) {
            return e == null || typeof e === "boolean" ? i.apply(this, arguments) : this.animate(W(n, !0), e, t, r)
        }
    });
    e.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, n) {
        e.fn[t] = function(e, t, i) {
            return this.animate(n, e, t, i)
        }
    });
    e.timers = [];
    e.fx.tick = function() {
        var i, t = e.timers,
            n = 0;
        C = e.now();
        for (; n < t.length; n++) {
            i = t[n];
            if (!i() && t[n] === i) {
                t.splice(n--, 1)
            }
        };
        if (!t.length) {
            e.fx.stop()
        };
        C = undefined
    };
    e.fx.timer = function(t) {
        e.timers.push(t);
        if (t()) {
            e.fx.start()
        } else {
            e.timers.pop()
        }
    };
    e.fx.interval = 13;
    e.fx.start = function() {
        if (!F) {
            F = t.setInterval(e.fx.tick, e.fx.interval)
        }
    };
    e.fx.stop = function() {
        t.clearInterval(F);
        F = null
    };
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    e.fn.delay = function(n, i) {
        n = e.fx ? e.fx.speeds[n] || n : n;
        i = i || "fx";
        return this.queue(i, function(e, i) {
            var r = t.setTimeout(e, n);
            i.stop = function() {
                t.clearTimeout(r)
            }
        })
    };
    (function() {
        var n, e = r.createElement("input"),
            t = r.createElement("div"),
            o = r.createElement("select"),
            a = o.appendChild(r.createElement("option"));
        t = r.createElement("div");
        t.setAttribute("className", "t");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        n = t.getElementsByTagName("a")[0];
        e.setAttribute("type", "checkbox");
        t.appendChild(e);
        n = t.getElementsByTagName("a")[0];
        n.style.cssText = "top:1px";
        i.getSetAttribute = t.className !== "t";
        i.style = /top/.test(n.getAttribute("style"));
        i.hrefNormalized = n.getAttribute("href") === "/a";
        i.checkOn = !!e.value;
        i.optSelected = a.selected;
        i.enctype = !!r.createElement("form").enctype;
        o.disabled = !0;
        i.optDisabled = !a.disabled;
        e = r.createElement("input");
        e.setAttribute("value", "");
        i.input = e.getAttribute("value") === "";
        e.value = "t";
        e.setAttribute("type", "radio");
        i.radioValue = e.value === "t"
    })();
    var qt = /\r/g,
        Ft = /[\x20\t\r\n\f]+/g;
    e.fn.extend({
        val: function(t) {
            var n, i, o, r = this[0];
            if (!arguments.length) {
                if (r) {
                    n = e.valHooks[r.type] || e.valHooks[r.nodeName.toLowerCase()];
                    if (n && "get" in n && (i = n.get(r, "value")) !== undefined) {
                        return i
                    };
                    i = r.value;
                    return typeof i === "string" ? i.replace(qt, "") : i == null ? "" : i
                };
                return
            };
            o = e.isFunction(t);
            return this.each(function(i) {
                var r;
                if (this.nodeType !== 1) {
                    return
                };
                if (o) {
                    r = t.call(this, i, e(this).val())
                } else {
                    r = t
                };
                if (r == null) {
                    r = ""
                } else if (typeof r === "number") {
                    r += ""
                } else if (e.isArray(r)) {
                    r = e.map(r, function(e) {
                        return e == null ? "" : e + ""
                    })
                };
                n = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, r, "value") === undefined) {
                    this.value = r
                }
            })
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var n = e.find.attr(t, "value");
                    return n != null ? n : e.trim(e.text(t)).replace(Ft, " ")
                }
            },
            select: {
                get: function(t) {
                    var s, n, u = t.options,
                        r = t.selectedIndex,
                        o = t.type === "select-one" || r < 0,
                        l = o ? null : [],
                        f = o ? r + 1 : u.length,
                        a = r < 0 ? f : o ? r : 0;
                    for (; a < f; a++) {
                        n = u[a];
                        if ((n.selected || a === r) && (i.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !e.nodeName(n.parentNode, "optgroup"))) {
                            s = e(n).val();
                            if (o) {
                                return s
                            };
                            l.push(s)
                        }
                    };
                    return l
                },
                set: function(t, n) {
                    var a, r, o = t.options,
                        u = e.makeArray(n),
                        s = o.length;
                    while (s--) {
                        r = o[s];
                        if (e.inArray(e.valHooks.option.get(r), u) > -1) {
                            try {
                                r.selected = a = !0
                            } catch (i) {
                                r.scrollHeight
                            }
                        } else {
                            r.selected = !1
                        }
                    };
                    if (!a) {
                        t.selectedIndex = -1
                    };
                    return o
                }
            }
        }
    });
    e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = {
            set: function(t, n) {
                if (e.isArray(n)) {
                    return (t.checked = e.inArray(e(t).val(), n) > -1)
                }
            }
        };
        if (!i.checkOn) {
            e.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    });
    var T, Te, f = e.expr.attrHandle,
        J = /^(?:checked|selected)$/i,
        m = i.getSetAttribute,
        q = i.input;
    e.fn.extend({
        attr: function(t, n) {
            return p(this, e.attr, t, n, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                e.removeAttr(this, t)
            })
        }
    });
    e.extend({
        attr: function(t, n, i) {
            var r, o, a = t.nodeType;
            if (a === 3 || a === 8 || a === 2) {
                return
            };
            if (typeof t.getAttribute === "undefined") {
                return e.prop(t, n, i)
            };
            if (a !== 1 || !e.isXMLDoc(t)) {
                n = n.toLowerCase();
                o = e.attrHooks[n] || (e.expr.match.bool.test(n) ? Te : T)
            };
            if (i !== undefined) {
                if (i === null) {
                    e.removeAttr(t, n);
                    return
                };
                if (o && "set" in o && (r = o.set(t, i, n)) !== undefined) {
                    return r
                };
                t.setAttribute(n, i + "");
                return i
            };
            if (o && "get" in o && (r = o.get(t, n)) !== null) {
                return r
            };
            r = e.find.attr(t, n);
            return r == null ? undefined : r
        },
        attrHooks: {
            type: {
                set: function(t, n) {
                    if (!i.radioValue && n === "radio" && e.nodeName(t, "input")) {
                        var r = t.value;
                        t.setAttribute("type", n);
                        if (r) {
                            t.value = r
                        };
                        return n
                    }
                }
            }
        },
        removeAttr: function(t, n) {
            var i, r, a = 0,
                o = n && n.match(l);
            if (o && t.nodeType === 1) {
                while ((i = o[a++])) {
                    r = e.propFix[i] || i;
                    if (e.expr.match.bool.test(i)) {
                        if (q && m || !J.test(i)) {
                            t[r] = !1
                        } else {
                            t[e.camelCase("default-" + i)] = t[r] = !1
                        }
                    } else {
                        e.attr(t, i, "")
                    };
                    t.removeAttribute(m ? i : r)
                }
            }
        }
    });
    Te = {
        set: function(t, n, i) {
            if (n === !1) {
                e.removeAttr(t, i)
            } else if (q && m || !J.test(i)) {
                t.setAttribute(!m && e.propFix[i] || i, i)
            } else {
                t[e.camelCase("default-" + i)] = t[i] = !0
            };
            return i
        }
    };
    e.each(e.expr.match.bool.source.match(/\w+/g), function(t, n) {
        var i = f[n] || e.find.attr;
        if (q && m || !J.test(n)) {
            f[n] = function(e, t, n) {
                var r, o;
                if (!n) {
                    o = f[t];
                    f[t] = r;
                    r = i(e, t, n) != null ? t.toLowerCase() : null;
                    f[t] = o
                };
                return r
            }
        } else {
            f[n] = function(t, n, i) {
                if (!i) {
                    return t[e.camelCase("default-" + n)] ? n.toLowerCase() : null
                }
            }
        }
    });
    if (!q || !m) {
        e.attrHooks.value = {
            set: function(t, n, i) {
                if (e.nodeName(t, "input")) {
                    t.defaultValue = n
                } else {
                    return T && T.set(t, n, i)
                }
            }
        }
    };
    if (!m) {
        T = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                if (!i) {
                    e.setAttributeNode((i = e.ownerDocument.createAttribute(n)))
                };
                i.value = t += "";
                if (n === "value" || t === e.getAttribute(n)) {
                    return t
                }
            }
        };
        f.id = f.name = f.coords = function(e, t, n) {
            var i;
            if (!n) {
                return (i = e.getAttributeNode(t)) && i.value !== "" ? i.value : null
            }
        };
        e.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified) {
                    return n.value
                }
            },
            set: T.set
        };
        e.attrHooks.contenteditable = {
            set: function(e, t, n) {
                T.set(e, t === "" ? !1 : t, n)
            }
        };
        e.each(["width", "height"], function(t, n) {
            e.attrHooks[n] = {
                set: function(e, t) {
                    if (t === "") {
                        e.setAttribute(n, "auto");
                        return t
                    }
                }
            }
        })
    };
    if (!i.style) {
        e.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || undefined
            },
            set: function(e, t) {
                return (e.style.cssText = t + "")
            }
        }
    };
    var Lt = /^(?:input|select|textarea|button|object)$/i,
        Ht = /^(?:a|area)$/i;
    e.fn.extend({
        prop: function(t, n) {
            return p(this, e.prop, t, n, arguments.length > 1)
        },
        removeProp: function(t) {
            t = e.propFix[t] || t;
            return this.each(function() {
                try {
                    this[t] = undefined;
                    delete this[t]
                } catch (e) {}
            })
        }
    });
    e.extend({
        prop: function(t, n, i) {
            var o, r, a = t.nodeType;
            if (a === 3 || a === 8 || a === 2) {
                return
            };
            if (a !== 1 || !e.isXMLDoc(t)) {
                n = e.propFix[n] || n;
                r = e.propHooks[n]
            };
            if (i !== undefined) {
                if (r && "set" in r && (o = r.set(t, i, n)) !== undefined) {
                    return o
                };
                return (t[n] = i)
            };
            if (r && "get" in r && (o = r.get(t, n)) !== null) {
                return o
            };
            return t[n]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var n = e.find.attr(t, "tabindex");
                    return n ? parseInt(n, 10) : Lt.test(t.nodeName) || Ht.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    if (!i.hrefNormalized) {
        e.each(["href", "src"], function(t, n) {
            e.propHooks[n] = {
                get: function(e) {
                    return e.getAttribute(n, 4)
                }
            }
        })
    };
    if (!i.optSelected) {
        e.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                if (t) {
                    t.selectedIndex;
                    if (t.parentNode) {
                        t.parentNode.selectedIndex
                    }
                };
                return null
            },
            set: function(e) {
                var t = e.parentNode;
                if (t) {
                    t.selectedIndex;
                    if (t.parentNode) {
                        t.parentNode.selectedIndex
                    }
                }
            }
        }
    };
    e.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        e.propFix[this.toLowerCase()] = this
    });
    if (!i.enctype) {
        e.propFix.enctype = "encoding"
    };
    var Y = /[\t\r\n\f]/g;

    function b(t) {
        return e.attr(t, "class") || ""
    };
    e.fn.extend({
        addClass: function(t) {
            var s, i, n, r, o, u, a, f = 0;
            if (e.isFunction(t)) {
                return this.each(function(n) {
                    e(this).addClass(t.call(this, n, b(this)))
                })
            };
            if (typeof t === "string" && t) {
                s = t.match(l) || [];
                while ((i = this[f++])) {
                    r = b(i);
                    n = i.nodeType === 1 && (" " + r + " ").replace(Y, " ");
                    if (n) {
                        u = 0;
                        while ((o = s[u++])) {
                            if (n.indexOf(" " + o + " ") < 0) {
                                n += o + " "
                            }
                        };
                        a = e.trim(n);
                        if (r !== a) {
                            e.attr(i, "class", a)
                        }
                    }
                }
            };
            return this
        },
        removeClass: function(t) {
            var s, i, n, r, o, u, a, f = 0;
            if (e.isFunction(t)) {
                return this.each(function(n) {
                    e(this).removeClass(t.call(this, n, b(this)))
                })
            };
            if (!arguments.length) {
                return this.attr("class", "")
            };
            if (typeof t === "string" && t) {
                s = t.match(l) || [];
                while ((i = this[f++])) {
                    r = b(i);
                    n = i.nodeType === 1 && (" " + r + " ").replace(Y, " ");
                    if (n) {
                        u = 0;
                        while ((o = s[u++])) {
                            while (n.indexOf(" " + o + " ") > -1) {
                                n = n.replace(" " + o + " ", " ")
                            }
                        };
                        a = e.trim(n);
                        if (r !== a) {
                            e.attr(i, "class", a)
                        }
                    }
                }
            };
            return this
        },
        toggleClass: function(t, n) {
            var i = typeof t;
            if (typeof n === "boolean" && i === "string") {
                return n ? this.addClass(t) : this.removeClass(t)
            };
            if (e.isFunction(t)) {
                return this.each(function(i) {
                    e(this).toggleClass(t.call(this, i, b(this), n), n)
                })
            };
            return this.each(function() {
                var n, o, r, a;
                if (i === "string") {
                    o = 0;
                    r = e(this);
                    a = t.match(l) || [];
                    while ((n = a[o++])) {
                        if (r.hasClass(n)) {
                            r.removeClass(n)
                        } else {
                            r.addClass(n)
                        }
                    }
                } else if (t === undefined || i === "boolean") {
                    n = b(this);
                    if (n) {
                        e._data(this, "__className__", n)
                    };
                    e.attr(this, "class", n || t === !1 ? "" : e._data(this, "__className__") || "")
                }
            })
        },
        hasClass: function(e) {
            var n, t, i = 0;
            n = " " + e + " ";
            while ((t = this[i++])) {
                if (t.nodeType === 1 && (" " + b(t) + " ").replace(Y, " ").indexOf(n) > -1) {
                    return !0
                }
            };
            return !1
        }
    });
    e.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(t, n) {
        e.fn[n] = function(e, t) {
            return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    e.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Dt = t.location,
        U = e.now(),
        V = (/\?/),
        jt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    e.parseJSON = function(n) {
        if (t.JSON && t.JSON.parse) {
            return t.JSON.parse(n + "")
        };
        var o, i = null,
            r = e.trim(n + "");
        return r && !e.trim(r.replace(jt, function(e, t, n, r) {
            if (o && t) {
                i = 0
            };
            if (i === 0) {
                return e
            };
            o = n || t;
            i += !r - !n;
            return ""
        })) ? (Function("return " + r))() : e.error("Invalid JSON: " + n)
    };
    e.parseXML = function(n) {
        var r, o;
        if (!n || typeof n !== "string") {
            return null
        };
        try {
            if (t.DOMParser) {
                o = new t.DOMParser();
                r = o.parseFromString(n, "text/xml")
            } else {
                r = new t.ActiveXObject("Microsoft.XMLDOM");
                r.async = "false";
                r.loadXML(n)
            }
        } catch (i) {
            r = undefined
        };
        if (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) {
            e.error("Invalid XML: " + n)
        };
        return r
    };
    var Et = /#.*$/,
        ve = /([?&])_=[^&]*/,
        Nt = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        St = /^(?:GET|HEAD)$/,
        At = /^\/\//,
        xe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        be = {},
        z = {},
        we = "*/".concat("*"),
        X = Dt.href,
        w = xe.exec(X.toLowerCase()) || [];

    function pt(t) {
        return function(n, i) {
            if (typeof n !== "string") {
                i = n;
                n = "*"
            };
            var r, o = 0,
                a = n.toLowerCase().match(l) || [];
            if (e.isFunction(i)) {
                while ((r = a[o++])) {
                    if (r.charAt(0) === "+") {
                        r = r.slice(1) || "*";
                        (t[r] = t[r] || []).unshift(i)
                    } else {
                        (t[r] = t[r] || []).push(i)
                    }
                }
            }
        }
    };

    function ht(t, n, i, r) {
        var o = {},
            s = (t === z);

        function a(u) {
            var l;
            o[u] = !0;
            e.each(t[u] || [], function(e, t) {
                var u = t(n, i, r);
                if (typeof u === "string" && !s && !o[u]) {
                    n.dataTypes.unshift(u);
                    a(u);
                    return !1
                } else if (s) {
                    return !(l = u)
                }
            });
            return l
        };
        return a(n.dataTypes[0]) || !o["*"] && a("*")
    };

    function de(t, n) {
        var r, i, o = e.ajaxSettings.flatOptions || {};
        for (i in n) {
            if (n[i] !== undefined) {
                (o[i] ? t : (r || (r = {})))[i] = n[i]
            }
        };
        if (r) {
            e.extend(!0, t, r)
        };
        return t
    };

    function vn(e, t, n) {
        var s, a, r, o, u = e.contents,
            i = e.dataTypes;
        while (i[0] === "*") {
            i.shift();
            if (a === undefined) {
                a = e.mimeType || t.getResponseHeader("Content-Type")
            }
        };
        if (a) {
            for (o in u) {
                if (u[o] && u[o].test(a)) {
                    i.unshift(o);
                    break
                }
            }
        };
        if (i[0] in n) {
            r = i[0]
        } else {
            for (o in n) {
                if (!i[0] || e.converters[o + " " + i[0]]) {
                    r = o;
                    break
                };
                if (!s) {
                    s = o
                }
            };
            r = r || s
        };
        if (r) {
            if (r !== i[0]) {
                i.unshift(r)
            };
            return n[r]
        }
    };

    function xn(e, t, n, i) {
        var f, o, a, l, s, u = {},
            c = e.dataTypes.slice();
        if (c[1]) {
            for (a in e.converters) {
                u[a.toLowerCase()] = e.converters[a]
            }
        };
        o = c.shift();
        while (o) {
            if (e.responseFields[o]) {
                n[e.responseFields[o]] = t
            };
            if (!s && i && e.dataFilter) {
                t = e.dataFilter(t, e.dataType)
            };
            s = o;
            o = c.shift();
            if (o) {
                if (o === "*") {
                    o = s
                } else if (s !== "*" && s !== o) {
                    a = u[s + " " + o] || u["* " + o];
                    if (!a) {
                        for (f in u) {
                            l = f.split(" ");
                            if (l[1] === o) {
                                a = u[s + " " + l[0]] || u["* " + l[0]];
                                if (a) {
                                    if (a === !0) {
                                        a = u[f]
                                    } else if (u[f] !== !0) {
                                        o = l[0];
                                        c.unshift(l[1])
                                    };
                                    break
                                }
                            }
                        }
                    };
                    if (a !== !0) {
                        if (a && e["throws"]) {
                            t = a(t)
                        } else {
                            try {
                                t = a(t)
                            } catch (r) {
                                return {
                                    state: "parsererror",
                                    error: a ? r : "No conversion from " + s + " to " + o
                                }
                            }
                        }
                    }
                }
            }
        };
        return {
            state: "success",
            data: t
        }
    };
    e.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: X,
            type: "GET",
            isLocal: kt.test(w[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": we,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, n) {
            return n ? de(de(t, e.ajaxSettings), n) : de(e.ajaxSettings, t)
        },
        ajaxPrefilter: pt(be),
        ajaxTransport: pt(z),
        ajax: function(n, i) {
            if (typeof n === "object") {
                i = n;
                n = undefined
            };
            i = i || {};
            var c, d, s, v, x, h, p, g, r = e.ajaxSetup({}, i),
                f = r.context || r,
                b = r.context && (f.nodeType || f.jquery) ? e(f) : e.event,
                T = e.Deferred(),
                C = e.Callbacks("once memory"),
                m = r.statusCode || {},
                E = {},
                N = {},
                u = 0,
                k = "canceled",
                o = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u === 2) {
                            if (!g) {
                                g = {};
                                while ((t = Nt.exec(v))) {
                                    g[t[1].toLowerCase()] = t[2]
                                }
                            };
                            t = g[e.toLowerCase()]
                        };
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return u === 2 ? v : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        if (!u) {
                            e = N[n] = N[n] || e;
                            E[e] = t
                        };
                        return this
                    },
                    overrideMimeType: function(e) {
                        if (!u) {
                            r.mimeType = e
                        };
                        return this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) {
                            if (u < 2) {
                                for (t in e) {
                                    m[t] = [m[t], e[t]]
                                }
                            } else {
                                o.always(e[o.status])
                            }
                        };
                        return this
                    },
                    abort: function(e) {
                        var t = e || k;
                        if (p) {
                            p.abort(t)
                        };
                        y(0, t);
                        return this
                    }
                };
            T.promise(o).complete = C.add;
            o.success = o.done;
            o.error = o.fail;
            r.url = ((n || r.url || X) + "").replace(Et, "").replace(At, w[1] + "//");
            r.type = i.method || i.type || r.method || r.type;
            r.dataTypes = e.trim(r.dataType || "*").toLowerCase().match(l) || [""];
            if (r.crossDomain == null) {
                c = xe.exec(r.url.toLowerCase());
                r.crossDomain = !!(c && (c[1] !== w[1] || c[2] !== w[2] || (c[3] || (c[1] === "http:" ? "80" : "443")) !== (w[3] || (w[1] === "http:" ? "80" : "443"))))
            };
            if (r.data && r.processData && typeof r.data !== "string") {
                r.data = e.param(r.data, r.traditional)
            };
            ht(be, r, i, o);
            if (u === 2) {
                return o
            };
            h = e.event && r.global;
            if (h && e.active++ === 0) {
                e.event.trigger("ajaxStart")
            };
            r.type = r.type.toUpperCase();
            r.hasContent = !St.test(r.type);
            s = r.url;
            if (!r.hasContent) {
                if (r.data) {
                    s = (r.url += (V.test(s) ? "&" : "?") + r.data);
                    delete r.data
                };
                if (r.cache === !1) {
                    r.url = ve.test(s) ? s.replace(ve, "$1_=" + U++) : s + (V.test(s) ? "&" : "?") + "_=" + U++
                }
            };
            if (r.ifModified) {
                if (e.lastModified[s]) {
                    o.setRequestHeader("If-Modified-Since", e.lastModified[s])
                };
                if (e.etag[s]) {
                    o.setRequestHeader("If-None-Match", e.etag[s])
                }
            };
            if (r.data && r.hasContent && r.contentType !== !1 || i.contentType) {
                o.setRequestHeader("Content-Type", r.contentType)
            };
            o.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", " + we + "; q=0.01" : "") : r.accepts["*"]);
            for (d in r.headers) {
                o.setRequestHeader(d, r.headers[d])
            };
            if (r.beforeSend && (r.beforeSend.call(f, o, r) === !1 || u === 2)) {
                return o.abort()
            };
            k = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                o[d](r[d])
            };
            p = ht(z, r, i, o);
            if (!p) {
                y(-1, "No Transport")
            } else {
                o.readyState = 1;
                if (h) {
                    b.trigger("ajaxSend", [o, r])
                };
                if (u === 2) {
                    return o
                };
                if (r.async && r.timeout > 0) {
                    x = t.setTimeout(function() {
                        o.abort("timeout")
                    }, r.timeout)
                };
                try {
                    u = 1;
                    p.send(E, y)
                } catch (a) {
                    if (u < 2) {
                        y(-1, a)
                    } else {
                        throw a
                    }
                }
            };

            function y(n, i, a, l) {
                var d, E, w, g, y, c = i;
                if (u === 2) {
                    return
                };
                u = 2;
                if (x) {
                    t.clearTimeout(x)
                };
                p = undefined;
                v = l || "";
                o.readyState = n > 0 ? 4 : 0;
                d = n >= 200 && n < 300 || n === 304;
                if (a) {
                    g = vn(r, o, a)
                };
                g = xn(r, g, o, d);
                if (d) {
                    if (r.ifModified) {
                        y = o.getResponseHeader("Last-Modified");
                        if (y) {
                            e.lastModified[s] = y
                        };
                        y = o.getResponseHeader("etag");
                        if (y) {
                            e.etag[s] = y
                        }
                    };
                    if (n === 204 || r.type === "HEAD") {
                        c = "nocontent"
                    } else if (n === 304) {
                        c = "notmodified"
                    } else {
                        c = g.state;
                        E = g.data;
                        w = g.error;
                        d = !w
                    }
                } else {
                    w = c;
                    if (n || !c) {
                        c = "error";
                        if (n < 0) {
                            n = 0
                        }
                    }
                };
                o.status = n;
                o.statusText = (i || c) + "";
                if (d) {
                    T.resolveWith(f, [E, c, o])
                } else {
                    T.rejectWith(f, [o, c, w])
                };
                o.statusCode(m);
                m = undefined;
                if (h) {
                    b.trigger(d ? "ajaxSuccess" : "ajaxError", [o, r, d ? E : w])
                };
                C.fireWith(f, [o, c]);
                if (h) {
                    b.trigger("ajaxComplete", [o, r]);
                    if (!(--e.active)) {
                        e.event.trigger("ajaxStop")
                    }
                }
            };
            return o
        },
        getJSON: function(t, n, i) {
            return e.get(t, n, i, "json")
        },
        getScript: function(t, n) {
            return e.get(t, undefined, n, "script")
        }
    });
    e.each(["get", "post"], function(t, n) {
        e[n] = function(t, i, r, o) {
            if (e.isFunction(i)) {
                o = o || r;
                r = i;
                i = undefined
            };
            return e.ajax(e.extend({
                url: t,
                type: n,
                dataType: o,
                data: i,
                success: r
            }, e.isPlainObject(t) && t))
        }
    });
    e._evalUrl = function(t) {
        return e.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    e.fn.extend({
        wrapAll: function(t) {
            if (e.isFunction(t)) {
                return this.each(function(n) {
                    e(this).wrapAll(t.call(this, n))
                })
            };
            if (this[0]) {
                var n = e(t, this[0].ownerDocument).eq(0).clone(!0);
                if (this[0].parentNode) {
                    n.insertBefore(this[0])
                };
                n.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) {
                        e = e.firstChild
                    };
                    return e
                }).append(this)
            };
            return this
        },
        wrapInner: function(t) {
            if (e.isFunction(t)) {
                return this.each(function(n) {
                    e(this).wrapInner(t.call(this, n))
                })
            };
            return this.each(function() {
                var n = e(this),
                    i = n.contents();
                if (i.length) {
                    i.wrapAll(t)
                } else {
                    n.append(t)
                }
            })
        },
        wrap: function(t) {
            var n = e.isFunction(t);
            return this.each(function(i) {
                e(this).wrapAll(n ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!e.nodeName(this, "body")) {
                    e(this).replaceWith(this.childNodes)
                }
            }).end()
        }
    });

    function bn(t) {
        return t.style && t.style.display || e.css(t, "display")
    };

    function wn(t) {
        if (!e.contains(t.ownerDocument || r, t)) {
            return !0
        }
        while (t && t.nodeType === 1) {
            if (bn(t) === "none" || t.type === "hidden") {
                return !0
            };
            t = t.parentNode
        };
        return !1
    };
    e.expr.filters.hidden = function(e) {
        return i.reliableHiddenOffsets() ? (e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length) : wn(e)
    };
    e.expr.filters.visible = function(t) {
        return !e.expr.filters.hidden(t)
    };
    var bt = /%20/g,
        wt = /\[\]$/,
        ye = /\r?\n/g,
        Tt = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;

    function pe(t, n, i, r) {
        var o;
        if (e.isArray(n)) {
            e.each(n, function(e, n) {
                if (i || wt.test(t)) {
                    r(t, n)
                } else {
                    pe(t + "[" + (typeof n === "object" && n != null ? e : "") + "]", n, i, r)
                }
            })
        } else if (!i && e.type(n) === "object") {
            for (o in n) {
                pe(t + "[" + o + "]", n[o], i, r)
            }
        } else {
            r(t, n)
        }
    };
    e.param = function(t, n) {
        var i, r = [],
            o = function(t, n) {
                n = e.isFunction(n) ? n() : (n == null ? "" : n);
                r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(n)
            };
        if (n === undefined) {
            n = e.ajaxSettings && e.ajaxSettings.traditional
        };
        if (e.isArray(t) || (t.jquery && !e.isPlainObject(t))) {
            e.each(t, function() {
                o(this.name, this.value)
            })
        } else {
            for (i in t) {
                pe(i, t[i], n, o)
            }
        };
        return r.join("&").replace(bt, "+")
    };
    e.fn.extend({
        serialize: function() {
            return e.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = e.prop(this, "elements");
                return t ? e.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !e(this).is(":disabled") && Ct.test(this.nodeName) && !Tt.test(t) && (this.checked || !ee.test(t))
            }).map(function(t, n) {
                var i = e(this).val();
                return i == null ? null : e.isArray(i) ? e.map(i, function(e) {
                    return {
                        name: n.name,
                        value: e.replace(ye, "\r\n")
                    }
                }) : {
                    name: n.name,
                    value: i.replace(ye, "\r\n")
                }
            }).get()
        }
    });
    e.ajaxSettings.xhr = t.ActiveXObject !== undefined ? function() {
        if (this.isLocal) {
            return gt()
        };
        if (r.documentMode > 8) {
            return he()
        };
        return /^(get|post|head|put|delete|options)$/i.test(this.type) && he() || gt()
    } : he;
    var xt = 0,
        H = {},
        A = e.ajaxSettings.xhr();
    if (t.attachEvent) {
        t.attachEvent("onunload", function() {
            for (var e in H) {
                H[e](undefined, !0)
            }
        })
    };
    i.cors = !!A && ("withCredentials" in A);
    A = i.ajax = !!A;
    if (A) {
        e.ajaxTransport(function(n) {
            if (!n.crossDomain || i.cors) {
                var r;
                return {
                    send: function(i, o) {
                        var s, a = n.xhr(),
                            u = ++xt;
                        a.open(n.type, n.url, n.async, n.username, n.password);
                        if (n.xhrFields) {
                            for (s in n.xhrFields) {
                                a[s] = n.xhrFields[s]
                            }
                        };
                        if (n.mimeType && a.overrideMimeType) {
                            a.overrideMimeType(n.mimeType)
                        };
                        if (!n.crossDomain && !i["X-Requested-With"]) {
                            i["X-Requested-With"] = "XMLHttpRequest"
                        };
                        for (s in i) {
                            if (i[s] !== undefined) {
                                a.setRequestHeader(s, i[s] + "")
                            }
                        };
                        a.send((n.hasContent && n.data) || null);
                        r = function(t, i) {
                            var l, c, f;
                            if (r && (i || a.readyState === 4)) {
                                delete H[u];
                                r = undefined;
                                a.onreadystatechange = e.noop;
                                if (i) {
                                    if (a.readyState !== 4) {
                                        a.abort()
                                    }
                                } else {
                                    f = {};
                                    l = a.status;
                                    if (typeof a.responseText === "string") {
                                        f.text = a.responseText
                                    };
                                    try {
                                        c = a.statusText
                                    } catch (s) {
                                        c = ""
                                    };
                                    if (!l && n.isLocal && !n.crossDomain) {
                                        l = f.text ? 200 : 404
                                    } else if (l === 1223) {
                                        l = 204
                                    }
                                }
                            };
                            if (f) {
                                o(l, c, f, a.getAllResponseHeaders())
                            }
                        };
                        if (!n.async) {
                            r()
                        } else if (a.readyState === 4) {
                            t.setTimeout(r)
                        } else {
                            a.onreadystatechange = H[u] = r
                        }
                    },
                    abort: function() {
                        if (r) {
                            r(undefined, !0)
                        }
                    }
                }
            }
        })
    };

    function he() {
        try {
            return new t.XMLHttpRequest()
        } catch (e) {}
    };

    function gt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    };
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                e.globalEval(t);
                return t
            }
        }
    });
    e.ajaxPrefilter("script", function(e) {
        if (e.cache === undefined) {
            e.cache = !1
        };
        if (e.crossDomain) {
            e.type = "GET";
            e.global = !1
        }
    });
    e.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var n, i = r.head || e("head")[0] || r.documentElement;
            return {
                send: function(e, o) {
                    n = r.createElement("script");
                    n.async = !0;
                    if (t.scriptCharset) {
                        n.charset = t.scriptCharset
                    };
                    n.src = t.url;
                    n.onload = n.onreadystatechange = function(e, t) {
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState)) {
                            n.onload = n.onreadystatechange = null;
                            if (n.parentNode) {
                                n.parentNode.removeChild(n)
                            };
                            n = null;
                            if (!t) {
                                o(200, "success")
                            }
                        }
                    };
                    i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    if (n) {
                        n.onload(undefined, !0)
                    }
                }
            }
        }
    });
    var me = [],
        I = /(=)\?(?=&|$)|\?\?/;
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = me.pop() || (e.expando + "_" + (U++));
            this[t] = !0;
            return t
        }
    });
    e.ajaxPrefilter("json jsonp", function(n, i, r) {
        var o, a, s, u = n.jsonp !== !1 && (I.test(n.url) ? "url" : typeof n.data === "string" && (n.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && I.test(n.data) && "data");
        if (u || n.dataTypes[0] === "jsonp") {
            o = n.jsonpCallback = e.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback;
            if (u) {
                n[u] = n[u].replace(I, "$1" + o)
            } else if (n.jsonp !== !1) {
                n.url += (V.test(n.url) ? "&" : "?") + n.jsonp + "=" + o
            };
            n.converters["script json"] = function() {
                if (!s) {
                    e.error(o + " was not called")
                };
                return s[0]
            };
            n.dataTypes[0] = "json";
            a = t[o];
            t[o] = function() {
                s = arguments
            };
            r.always(function() {
                if (a === undefined) {
                    e(t).removeProp(o)
                } else {
                    t[o] = a
                };
                if (n[o]) {
                    n.jsonpCallback = i.jsonpCallback;
                    me.push(o)
                };
                if (s && e.isFunction(a)) {
                    a(s[0])
                };
                s = a = undefined
            });
            return "script"
        }
    });
    e.parseHTML = function(t, n, i) {
        if (!t || typeof t !== "string") {
            return null
        };
        if (typeof n === "boolean") {
            i = n;
            n = !1
        };
        n = n || r;
        var o = Be.exec(t),
            a = !i && [];
        if (o) {
            return [n.createElement(o[1])]
        };
        o = Ke([t], n, a);
        if (a && a.length) {
            e(a).remove()
        };
        return e.merge([], o.childNodes)
    };
    var ge = e.fn.load;
    e.fn.load = function(t, n, i) {
        if (typeof t !== "string" && ge) {
            return ge.apply(this, arguments)
        };
        var r, s, u, o = this,
            a = t.indexOf(" ");
        if (a > -1) {
            r = e.trim(t.slice(a, t.length));
            t = t.slice(0, a)
        };
        if (e.isFunction(n)) {
            i = n;
            n = undefined
        } else if (n && typeof n === "object") {
            s = "POST"
        };
        if (o.length > 0) {
            e.ajax({
                url: t,
                type: s || "GET",
                dataType: "html",
                data: n
            }).done(function(t) {
                u = arguments;
                o.html(r ? e("<div>").append(e.parseHTML(t)).find(r) : t)
            }).always(i && function(e, t) {
                o.each(function() {
                    i.apply(this, u || [e.responseText, t, e])
                })
            })
        };
        return this
    };
    e.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, n) {
        e.fn[n] = function(e) {
            return this.on(n, e)
        }
    });
    e.expr.filters.animated = function(t) {
        return e.grep(e.timers, function(e) {
            return t === e.elem
        }).length
    };

    function mt(t) {
        return e.isWindow(t) ? t : t.nodeType === 9 ? t.defaultView || t.parentWindow : !1
    };
    e.offset = {
        setOffset: function(t, n, i) {
            var a, s, u, l, r, f, p, c = e.css(t, "position"),
                d = e(t),
                o = {};
            if (c === "static") {
                t.style.position = "relative"
            };
            r = d.offset();
            u = e.css(t, "top");
            f = e.css(t, "left");
            p = (c === "absolute" || c === "fixed") && e.inArray("auto", [u, f]) > -1;
            if (p) {
                a = d.position();
                l = a.top;
                s = a.left
            } else {
                l = parseFloat(u) || 0;
                s = parseFloat(f) || 0
            };
            if (e.isFunction(n)) {
                n = n.call(t, i, e.extend({}, r))
            };
            if (n.top != null) {
                o.top = (n.top - r.top) + l
            };
            if (n.left != null) {
                o.left = (n.left - r.left) + s
            };
            if ("using" in n) {
                n.using.call(t, o)
            } else {
                d.css(o)
            }
        }
    };
    e.fn.extend({
        offset: function(t) {
            if (arguments.length) {
                return t === undefined ? this : this.each(function(n) {
                    e.offset.setOffset(this, t, n)
                })
            };
            var n, o, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                a = i && i.ownerDocument;
            if (!a) {
                return
            };
            n = a.documentElement;
            if (!e.contains(n, i)) {
                return r
            };
            if (typeof i.getBoundingClientRect !== "undefined") {
                r = i.getBoundingClientRect()
            };
            o = mt(a);
            return {
                top: r.top + (o.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: r.left + (o.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }
        },
        position: function() {
            if (!this[0]) {
                return
            };
            var t, i, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
            if (e.css(r, "position") === "fixed") {
                i = r.getBoundingClientRect()
            } else {
                t = this.offsetParent();
                i = this.offset();
                if (!e.nodeName(t[0], "html")) {
                    n = t.offset()
                };
                n.top += e.css(t[0], "borderTopWidth", !0);
                n.left += e.css(t[0], "borderLeftWidth", !0)
            };
            return {
                top: i.top - n.top - e.css(r, "marginTop", !0),
                left: i.left - n.left - e.css(r, "marginLeft", !0)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var t = this.offsetParent;
                while (t && (!e.nodeName(t, "html") && e.css(t, "position") === "static")) {
                    t = t.offsetParent
                };
                return t || Se
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = /Y/.test(n);
        e.fn[t] = function(r) {
            return p(this, function(t, r, o) {
                var a = mt(t);
                if (o === undefined) {
                    return a ? (n in a) ? a[n] : a.document.documentElement[r] : t[r]
                };
                if (a) {
                    a.scrollTo(!i ? o : e(a).scrollLeft(), i ? o : e(a).scrollTop())
                } else {
                    t[r] = o
                }
            }, t, r, arguments.length, null)
        }
    });
    e.each(["top", "left"], function(t, n) {
        e.cssHooks[n] = ce(i.pixelPosition, function(t, i) {
            if (i) {
                i = d(t, n);
                return M.test(i) ? e(t).position()[n] + "px" : i
            }
        })
    });
    e.each({
        Height: "height",
        Width: "width"
    }, function(t, n) {
        e.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function(i, r) {
            e.fn[r] = function(r, o) {
                var a = arguments.length && (i || typeof r !== "boolean"),
                    s = i || (r === !0 || o === !0 ? "margin" : "border");
                return p(this, function(n, i, r) {
                    var o;
                    if (e.isWindow(n)) {
                        return n.document.documentElement["client" + t]
                    };
                    if (n.nodeType === 9) {
                        o = n.documentElement;
                        return Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])
                    };
                    return r === undefined ? e.css(n, i, s) : e.style(n, i, r, s)
                }, n, a ? r : undefined, a, null)
            }
        })
    });
    e.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    e.fn.size = function() {
        return this.length
    };
    e.fn.andSelf = e.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return e
        })
    };
    var yt = t.jQuery,
        vt = t.$;
    e.noConflict = function(n) {
        if (t.$ === e) {
            t.$ = vt
        };
        if (n && t.jQuery === e) {
            t.jQuery = yt
        };
        return e
    };
    if (!n) {
        t.jQuery = t.$ = e
    };
    return e
}));
! function(e, t) {
    'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(e) {
        function t(n) {
            if (o[n]) return o[n].exports;
            var a = o[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
        };
        var o = {};
        return t.m = e, t.c = o, t.p = 'dist/', t(0)
    }([function(e, t, o) {
        'use strict';

        function i(e) {
            return e && e.__esModule ? e : {
                'default': e
            }
        };
        var m = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var o = arguments[n];
                    for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
                };
                return e
            },
            p = o(1),
            b = (i(p), o(5)),
            v = i(b),
            g = o(6),
            c = i(g),
            y = o(7),
            w = i(y),
            h = o(8),
            u = i(h),
            k = o(9),
            d = i(k),
            x = o(10),
            j = i(x),
            O = o(13),
            f = i(O),
            a = [],
            l = !1,
            A = document.all && !window.atob,
            n = {
                offset: 120,
                delay: 0,
                easing: 'ease',
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: 'DOMContentLoaded'
            },
            r = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
                return e && (l = !0), l ? (a = (0, j['default'])(a, n), (0, d['default'])(a, n.once), a) : void 0
            },
            s = function() {
                a = (0, f['default'])(), r()
            },
            E = function() {
                a.forEach(function(e, t) {
                    e.node.removeAttribute('data-aos'), e.node.removeAttribute('data-aos-easing'), e.node.removeAttribute('data-aos-duration'), e.node.removeAttribute('data-aos-delay')
                })
            },
            z = function(e) {
                return e === !0 || 'mobile' === e && u['default'].mobile() || 'phone' === e && u['default'].phone() || 'tablet' === e && u['default'].tablet() || 'function' == typeof e && e() === !0
            },
            S = function(e) {
                return n = m(n, e), a = (0, f['default'])(), z(n.disable) || A ? E() : (document.querySelector('body').setAttribute('data-aos-easing', n.easing), document.querySelector('body').setAttribute('data-aos-duration', n.duration), document.querySelector('body').setAttribute('data-aos-delay', n.delay), 'DOMContentLoaded' === n.startEvent && ['complete', 'interactive'].indexOf(document.readyState) > -1 ? r(!0) : 'load' === n.startEvent ? window.addEventListener(n.startEvent, function() {
                    r(!0)
                }) : document.addEventListener(n.startEvent, function() {
                    r(!0)
                }), window.addEventListener('resize', (0, c['default'])(r, 50, !0)), window.addEventListener('orientationchange', (0, c['default'])(r, 50, !0)), window.addEventListener('scroll', (0, v['default'])(function() {
                    (0, d['default'])(a, n.once)
                }, 99)), document.addEventListener('DOMNodeRemoved', function(e) {
                    var t = e.target;
                    t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute('data-aos') && (0, c['default'])(s, 50, !0)
                }), (0, w['default'])('[data-aos]', s), a)
            };
        e.exports = {
            init: S,
            refresh: r,
            refreshHard: s
        }
    }, function(e, t) {}, , , , function(e, t, o) {
        'use strict';

        function r(e, t, o) {
            var n = !0,
                r = !0;
            if ('function' != typeof e) throw new TypeError(i);
            return c(o) && (n = 'leading' in o ? !!o.leading : n, r = 'trailing' in o ? !!o.trailing : r), a(e, t, {
                leading: n,
                maxWait: t,
                trailing: r
            })
        };

        function c(e) {
            var t = 'undefined' == typeof e ? 'undefined' : n(e);
            return !!e && ('object' == t || 'function' == t)
        };
        var n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e
            },
            a = o(6),
            i = 'Expected a function';
        e.exports = r
    }, function(e, t) {
        'use strict';

        function h(e, t, n) {
            function g(t) {
                var o = s,
                    n = d;
                return s = d = void 0, l = t, f = e.apply(n, o)
            };

            function O(e) {
                return l = e, i = setTimeout(b, t), k ? g(e) : f
            };

            function A(e) {
                var n = e - r,
                    a = e - l,
                    o = t - n;
                return m ? w(o, p - a) : o
            };

            function x(e) {
                var o = e - r,
                    n = e - l;
                return !r || o >= t || 0 > o || m && n >= p
            };

            function b() {
                var e = a();
                return x(e) ? j(e) : void(i = setTimeout(b, A(e)))
            };

            function j(e) {
                return clearTimeout(i), i = void 0, v && s ? g(e) : (s = d = void 0, f)
            };

            function E() {
                void 0 !== i && clearTimeout(i), r = l = 0, s = d = i = void 0
            };

            function z() {
                return void 0 === i ? f : j(a())
            };

            function h() {
                var e = a(),
                    o = x(e);
                if (s = arguments, d = this, r = e, o) {
                    if (void 0 === i) return O(r);
                    if (m) return clearTimeout(i), i = setTimeout(b, t), g(r)
                };
                return void 0 === i && (i = setTimeout(b, t)), f
            };
            var s, d, p, f, i, r = 0,
                l = 0,
                k = !1,
                m = !1,
                v = !0;
            if ('function' != typeof e) throw new TypeError(u);
            return t = c(t) || 0, o(n) && (k = !!n.leading, m = 'maxWait' in n, p = m ? y(c(n.maxWait) || 0, t) : p, v = 'trailing' in n ? !!n.trailing : v), h.cancel = E, h.flush = z, h
        };

        function k(e) {
            var t = o(e) ? r.call(e) : '';
            return t == s || t == d
        };

        function o(e) {
            var t = 'undefined' == typeof e ? 'undefined' : n(e);
            return !!e && ('object' == t || 'function' == t)
        };

        function x(e) {
            return !!e && 'object' == ('undefined' == typeof e ? 'undefined' : n(e))
        };

        function j(e) {
            return 'symbol' == ('undefined' == typeof e ? 'undefined' : n(e)) || x(e) && r.call(e) == f
        };

        function c(e) {
            if ('number' == typeof e) return e;
            if (j(e)) return i;
            if (o(e)) {
                var t = k(e.valueOf) ? e.valueOf() : e;
                e = o(t) ? t + '' : t
            };
            if ('string' != typeof e) return 0 === e ? e : +e;
            e = e.replace(l, '');
            var n = p.test(e);
            return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : m.test(e) ? i : +e
        };
        var n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e
            },
            u = 'Expected a function',
            i = NaN,
            s = '[object Function]',
            d = '[object GeneratorFunction]',
            f = '[object Symbol]',
            l = /^\s+|\s+$/g,
            m = /^[-+]0x[0-9a-f]+$/i,
            p = /^0b[01]+$/i,
            b = /^0o[0-7]+$/i,
            v = parseInt,
            g = Object.prototype,
            r = g.toString,
            y = Math.max,
            w = Math.min,
            a = Date.now;
        e.exports = h
    }, function(e, t) {
        'use strict';

        function c(e, t) {
            o.push({
                selector: e,
                fn: t
            }), !n && i && (n = new i(r), n.observe(a.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })), r()
        };

        function r() {
            for (var n, i, r = 0, u = o.length; u > r; r++) {
                n = o[r], i = a.querySelectorAll(n.selector);
                for (var e, t = 0, c = i.length; c > t; t++) e = i[t], e.ready || (e.ready = !0, n.fn.call(e, e))
            }
        };
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var a = window.document,
            i = window.MutationObserver || window.WebKitMutationObserver,
            o = [],
            n = void 0;
        t['default'] = c
    }, function(e, t) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        };
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                };
                return function(t, o, n) {
                    return o && e(t.prototype, o), n && e(t, n), t
                }
            }(),
            n = function() {
                function e() {
                    a(this, e)
                };
                return o(e, [{
                    key: 'phone',
                    value: function() {
                        var e = !1;
                        return function(t) {
                            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
                        }(navigator.userAgent || navigator.vendor || window.opera), e
                    }
                }, {
                    key: 'mobile',
                    value: function() {
                        var e = !1;
                        return function(t) {
                            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
                        }(navigator.userAgent || navigator.vendor || window.opera), e
                    }
                }, {
                    key: 'tablet',
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t['default'] = new n
    }, function(e, t) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function(e, t, o) {
                var n = e.node.getAttribute('data-aos-once');
                t > e.position ? e.node.classList.add('aos-animate') : 'undefined' != typeof n && ('false' === n || !o && 'true' !== n) && e.node.classList.remove('aos-animate')
            },
            n = function(e, t) {
                var n = window.pageYOffset,
                    a = window.innerHeight;
                e.forEach(function(e, i) {
                    o(e, a + n, t)
                })
            };
        t['default'] = n
    }, function(e, t, o) {
        'use strict';

        function r(e) {
            return e && e.__esModule ? e : {
                'default': e
            }
        };
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var n = o(11),
            a = r(n),
            i = function(e, t) {
                return e.forEach(function(e, o) {
                    e.node.classList.add('aos-init'), e.position = (0, a['default'])(e.node, t.offset)
                }), e
            };
        t['default'] = i
    }, function(e, t, o) {
        'use strict';

        function r(e) {
            return e && e.__esModule ? e : {
                'default': e
            }
        };
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var n = o(12),
            a = r(n),
            i = function(e, t) {
                var o = 0,
                    r = 0,
                    i = window.innerHeight,
                    n = {
                        offset: e.getAttribute('data-aos-offset'),
                        anchor: e.getAttribute('data-aos-anchor'),
                        anchorPlacement: e.getAttribute('data-aos-anchor-placement')
                    };
                switch (n.offset && !isNaN(n.offset) && (r = parseInt(n.offset)), n.anchor && document.querySelectorAll(n.anchor) && (e = document.querySelectorAll(n.anchor)[0]), o = (0, a['default'])(e).top, n.anchorPlacement) {
                    case 'top-bottom':
                        break;
                    case 'center-bottom':
                        o += e.offsetHeight / 2;
                        break;
                    case 'bottom-bottom':
                        o += e.offsetHeight;
                        break;
                    case 'top-center':
                        o += i / 2;
                        break;
                    case 'bottom-center':
                        o += i / 2 + e.offsetHeight;
                        break;
                    case 'center-center':
                        o += i / 2 + e.offsetHeight / 2;
                        break;
                    case 'top-top':
                        o += i;
                        break;
                    case 'bottom-top':
                        o += e.offsetHeight + i;
                        break;
                    case 'center-top':
                        o += e.offsetHeight / 2 + i
                };
                return n.anchorPlacement || n.offset || isNaN(t) || (r = t), o + r
            };
        t['default'] = i
    }, function(e, t) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function(e) {
            for (var t = 0, o = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ('BODY' != e.tagName ? e.scrollLeft : 0), o += e.offsetTop - ('BODY' != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: o,
                left: t
            }
        };
        t['default'] = o
    }, function(e, t) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function(e) {
            e = e || document.querySelectorAll('[data-aos]');
            var t = [];
            return [].forEach.call(e, function(e, o) {
                t.push({
                    node: e
                })
            }), t
        };
        t['default'] = o
    }])
});
'use strict';
(function(e, t) {
    if (typeof define === 'function' && define.amd) {
        define([], t)
    } else if (typeof module === 'object' && module.exports) {
        module.exports = t()
    } else {
        e.balanceText = t()
    }
}(this, function() {
    function a() {
        return
    };

    function i(e, t) {
        Array.prototype.forEach.call(e, t)
    };

    function w(e) {
        if (document.readyState !== 'loading') {
            e()
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', e)
        } else {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState !== 'loading') {
                    e()
                }
            })
        }
    };

    function g(e, t, n) {
        var i;
        return function() {
            var r = this,
                a = arguments;

            function l() {
                if (!n) {
                    e.apply(r, a)
                };
                i = null
            };
            if (i) {
                clearTimeout(i)
            } else if (n) {
                e.apply(r, a)
            };
            i = setTimeout(l, t || 100)
        }
    };

    function b() {
        var e = document.documentElement.style;
        return e.textWrap || e.WebkitTextWrap || e.MozTextWrap || e.MsTextWrap
    };
    var t;

    function l() {
        this.reset()
    };
    l.prototype.reset = function() {
        this.index = 0;
        this.width = 0
    };
    var u = function(e, n) {
            var r = /\s(?![^<]*>)/g,
                i;
            if (!t) {
                t = [];
                i = r.exec(e);
                while (i !== null) {
                    t.push(i.index);
                    i = r.exec(e)
                }
            };
            return t.indexOf(n) !== -1
        },
        y = function(e) {
            var r = e.querySelectorAll('br[data-owner="balance-text"]');
            i(r, function(e) {
                e.outerHTML = ' '
            });
            var n = e.querySelectorAll('span[data-owner="balance-text"]');
            if (n.length > 0) {
                var t = '';
                i(n, function(e) {
                    t += e.textContent;
                    e.parentNode.removeChild(e)
                });
                e.innerHTML = t
            }
        },
        v = function(e) {
            var t = e.currentStyle || window.getComputedStyle(e, null);
            return (t.textAlign === 'justify')
        },
        f = function(e, t, i) {
            t = t.trim();
            var a = t.split(' ').length;
            t = t + ' ';
            if (a < 2) {
                return t
            };
            var n = document.createElement('span');
            n.innerHTML = t;
            e.appendChild(n);
            var o = n.offsetWidth;
            n.parentNode.removeChild(n);
            var l = Math.floor((i - o) / (a - 1));
            n.style.wordSpacing = l + 'px';
            n.setAttribute('data-owner', 'balance-text');
            var r = document.createElement('div');
            r.appendChild(n);
            return r.innerHTML
        },
        m = function(e, t) {
            return ((t === 0) || (t === e.length) || (u(e, t - 1) && !u(e, t)))
        },
        r = function(e, t, r, l, a, n, o) {
            var i;
            if (t && typeof t === 'string') {
                for (;;) {
                    while (!m(t, n)) {
                        n += a
                    };
                    e.innerHTML = t.substr(0, n);
                    i = e.offsetWidth;
                    if (a < 0) {
                        if ((i <= l) || (i <= 0) || (n === 0)) {
                            break
                        }
                    } else {
                        if ((l <= i) || (r <= i) || (n === t.length)) {
                            break
                        }
                    };
                    n += a
                }
            };
            o.index = n;
            o.width = i
        },
        x = function(e, n) {
            var t = document.createElement('div');
            t.style.display = 'block';
            t.style.position = 'absolute';
            t.style.bottom = 0;
            t.style.right = 0;
            t.style.width = 0;
            t.style.height = 0;
            t.style.margin = 0;
            t.style.padding = 0;
            t.style.visibility = 'hidden';
            t.style.overflow = 'hidden';
            var i = document.createElement('span');
            i.style.fontSize = '2000px';
            i.innerHTML = '&nbsp;';
            t.appendChild(i);
            e.appendChild(t);
            var r = i.getBoundingClientRect();
            t.parentNode.removeChild(t);
            var a = r.height / r.width;
            return (n / a)
        },
        e = {
            sel: [],
            el: []
        };

    function o(e) {
        if (!e) {
            return []
        };
        if (typeof e === 'string') {
            return document.querySelectorAll(e)
        };
        if (e.tagName && e.querySelectorAll) {
            return [e]
        };
        return e
    };

    function c(e) {
        i(o(e), function(e) {
            var E = 5000;
            y(e);
            var M = e.style.whiteSpace,
                L = e.style.float,
                S = e.style.display,
                W = e.style.position,
                C = e.style.lineHeight;
            e.style.lineHeight = 'normal';
            var o = e.offsetWidth,
                H = e.offsetHeight;
            e.style.whiteSpace = 'nowrap';
            e.style.float = 'none';
            e.style.display = 'inline';
            e.style.position = 'static';
            var h = e.offsetWidth,
                g = e.offsetHeight,
                b = ((M === 'pre-wrap') ? 0 : x(e, g));
            if (o > 0 && h > o && h < E) {
                var n = e.innerHTML,
                    u = '',
                    m = '',
                    w = v(e),
                    T = Math.round(H / g),
                    p = T,
                    s, d, i, a, c;
                while (p > 1) {
                    t = null;
                    s = Math.round((h + b) / p - b);
                    d = Math.round((n.length + 1) / p) - 1;
                    i = new l();
                    r(e, n, o, s, -1, d, i);
                    a = new l();
                    d = i.index;
                    r(e, n, o, s, +1, d, a);
                    i.reset();
                    d = a.index;
                    r(e, n, o, s, -1, d, i);
                    if (i.index === 0) {
                        c = a.index
                    } else if ((o < a.width) || (i.index === a.index)) {
                        c = i.index
                    } else {
                        c = ((Math.abs(s - i.width) < Math.abs(a.width - s)) ? i.index : a.index)
                    };
                    m = n.substr(0, c);
                    if (w) {
                        u += f(e, m, o)
                    } else {
                        u += m.replace(/\s$/, '');
                        u += '<br data-owner="balance-text" />'
                    };
                    n = n.substr(c);
                    p--;
                    e.innerHTML = n;
                    h = e.offsetWidth
                };
                if (w) {
                    e.innerHTML = u + f(e, n, o)
                } else {
                    e.innerHTML = u + n
                }
            };
            e.style.whiteSpace = M;
            e.style.float = L;
            e.style.display = S;
            e.style.position = W;
            e.style.lineHeight = C
        })
    };

    function n() {
        var t = e.sel.join(','),
            n = o(t),
            i = Array.prototype.concat.apply(e.el, n);
        c(i)
    };
    var d = !1;

    function p() {
        if (d) {
            return
        };
        w(n);
        window.addEventListener('load', n);
        window.addEventListener('resize', g(n));
        d = !0
    };

    function M(t) {
        if (typeof t === 'string') {
            e.sel.push(t)
        } else {
            i(o(t), function(t) {
                e.el.push(t)
            })
        };
        p();
        n()
    };
    var s = !1;

    function T() {
        if (s) {
            return
        };
        e.sel.push('.balance-text');
        p();
        s = !0
    };

    function h(e, t) {
        if (!e) {
            T()
        } else if (t && t.watch) {
            M(e)
        } else {
            c(e)
        }
    };
    h.updateWatched = n;
    if (b()) {
        a.updateWatched = a;
        return a
    };
    return h
}));
(function(t, e) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else if (typeof exports === "object") {
        if (typeof $ === "undefined") {
            module.exports = e(require("jquery"))
        } else {
            module.exports = e($)
        }
    } else {
        t.bootbox = e(t.jQuery)
    }
}(this, function t(e, o) {
    "use strict";
    var n = {
        dialog: "<div class='bootbox modal' tabindex='-1' role='dialog' aria-hidden='true'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
        header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
        footer: "<div class='modal-footer'></div>",
        closeButton: "<button type='button' class='bootbox-close-button close' aria-hidden='true'>&times;</button>",
        form: "<form class='bootbox-form'></form>",
        inputs: {
            text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
            textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
            email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
            select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
            checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
            date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
            time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
            number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
            password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
        }
    };
    var l = {
        locale: "en",
        backdrop: "static",
        animate: !0,
        className: null,
        closeButton: !0,
        show: !0,
        container: "body"
    };
    var a = {};

    function b(t) {
        var e = i[l.locale];
        return e ? e[t] : i.en[t]
    };

    function c(t, o, a) {
        t.stopPropagation();
        t.preventDefault();
        var n = e.isFunction(a) && a.call(o, t) === !1;
        if (!n) {
            o.modal("hide")
        }
    };

    function d(t) {
        if (Object.keys) {
            return Object.keys(t).length
        };
        var o, e = 0;
        for (o in t) {
            e++
        };
        return e
    };

    function r(t, o) {
        var a = 0;
        e.each(t, function(t, e) {
            o(t, e, a++)
        })
    };

    function m(t) {
        var o, a;
        if (typeof t !== "object") {
            throw new Error("Please supply an object of options")
        };
        if (!t.message) {
            throw new Error("Please specify a message")
        };
        t = e.extend({}, l, t);
        if (!t.buttons) {
            t.buttons = {}
        };
        o = t.buttons;
        a = d(o);
        r(o, function(t, n, r) {
            var i = r === a - 1;
            if (e.isFunction(n)) {
                n = o[t] = {
                    callback: n
                }
            };
            if (e.type(n) !== "object") {
                throw new Error("button with key " + t + " must be an object")
            };
            if (!n.label) {
                n.label = t
            };
            if (!n.className) {
                if (a <= 2 && i) {
                    n.className = "btn-primary"
                } else {
                    n.className = "btn-default"
                }
            }
        });
        return t
    };

    function C(t, e) {
        var a = t.length,
            o = {};
        if (a < 1 || a > 2) {
            throw new Error("Invalid argument length")
        };
        if (a === 2 || typeof t[0] === "string") {
            o[e[0]] = t[0];
            o[e[1]] = t[1]
        } else {
            o = t[0]
        };
        return o
    };

    function s(t, o, a) {
        return e.extend(!0, {}, t, C(o, a))
    };

    function u(t, e, o, a) {
        var n = {
            className: "bootbox-" + t,
            buttons: f.apply(null, e)
        };
        return p(s(n, a, o), e)
    };

    function f() {
        var o = {};
        for (var t = 0, r = arguments.length; t < r; t++) {
            var e = arguments[t],
                a = e.toLowerCase(),
                n = e.toUpperCase();
            o[a] = {
                label: b(n)
            }
        };
        return o
    };

    function p(t, e) {
        var a = {};
        r(e, function(t, e) {
            a[e] = !0
        });
        r(t.buttons, function(t) {
            if (a[t] === o) {
                throw new Error("button key " + t + " is not allowed (options are " + e.join("\n") + ")")
            }
        });
        return t
    };
    a.alert = function() {
        var t;
        t = u("alert", ["ok"], ["message", "callback"], arguments);
        if (t.callback && !e.isFunction(t.callback)) {
            throw new Error("alert requires callback property to be a function when provided")
        };
        t.buttons.ok.callback = t.onEscape = function() {
            if (e.isFunction(t.callback)) {
                return t.callback.call(this)
            };
            return !0
        };
        return a.dialog(t)
    };
    a.confirm = function() {
        var t;
        t = u("confirm", ["cancel", "confirm"], ["message", "callback"], arguments);
        if (!e.isFunction(t.callback)) {
            throw new Error("confirm requires a callback")
        };
        t.buttons.cancel.callback = t.onEscape = function() {
            return t.callback.call(this, !1)
        };
        t.buttons.confirm.callback = function() {
            return t.callback.call(this, !0)
        };
        return a.dialog(t)
    };
    a.prompt = function() {
        var t, d, c, b, i, m, l;
        b = e(n.form);
        d = {
            className: "bootbox-prompt",
            buttons: f("cancel", "confirm"),
            value: "",
            inputType: "text"
        };
        t = p(s(d, arguments, ["title", "callback"]), ["cancel", "confirm"]);
        m = (t.show === o) ? !0 : t.show;
        t.message = b;
        t.buttons.cancel.callback = t.onEscape = function() {
            return t.callback.call(this, null)
        };
        t.buttons.confirm.callback = function() {
            var o;
            if (t.inputType === "checkbox") {
                o = i.find("input:checked").map(function() {
                    return e(this).val()
                }).get()
            } else {
                o = i.val()
            };
            return t.callback.call(this, o)
        };
        t.show = !1;
        if (!t.title) {
            throw new Error("prompt requires a title")
        };
        if (!e.isFunction(t.callback)) {
            throw new Error("prompt requires a callback")
        };
        if (!n.inputs[t.inputType]) {
            throw new Error("invalid prompt type")
        };
        i = e(n.inputs[t.inputType]);
        switch (t.inputType) {
            case "text":
            case "textarea":
            case "email":
            case "date":
            case "time":
            case "number":
            case "password":
                i.val(t.value);
                break;
            case "select":
                var u = {};
                l = t.inputOptions || [];
                if (!e.isArray(l)) {
                    throw new Error("Please pass an array of input options")
                };
                if (!l.length) {
                    throw new Error("prompt with select requires options")
                };
                r(l, function(t, a) {
                    var n = i;
                    if (a.value === o || a.text === o) {
                        throw new Error("each option needs a `value` and a `text` property")
                    };
                    if (a.group) {
                        if (!u[a.group]) {
                            u[a.group] = e("<optgroup/>").attr("label", a.group)
                        };
                        n = u[a.group]
                    };
                    n.append("<option value='" + a.value + "'>" + a.text + "</option>")
                });
                r(u, function(t, e) {
                    i.append(e)
                });
                i.val(t.value);
                break;
            case "checkbox":
                var C = e.isArray(t.value) ? t.value : [t.value];
                l = t.inputOptions || [];
                if (!l.length) {
                    throw new Error("prompt with checkbox requires options")
                };
                if (!l[0].value || !l[0].text) {
                    throw new Error("each option needs a `value` and a `text` property")
                };
                i = e("<div/>");
                r(l, function(o, a) {
                    var l = e(n.inputs[t.inputType]);
                    l.find("input").attr("value", a.value);
                    l.find("label").append(a.text);
                    r(C, function(t, e) {
                        if (e === a.value) {
                            l.find("input").prop("checked", !0)
                        }
                    });
                    i.append(l)
                });
                break
        };
        if (t.placeholder) {
            i.attr("placeholder", t.placeholder)
        };
        if (t.pattern) {
            i.attr("pattern", t.pattern)
        };
        if (t.maxlength) {
            i.attr("maxlength", t.maxlength)
        };
        b.append(i);
        b.on("submit", function(t) {
            t.preventDefault();
            t.stopPropagation();
            c.find(".btn-primary").click()
        });
        c = a.dialog(t);
        c.off("shown.bs.modal");
        c.on("shown.bs.modal", function() {
            i.focus()
        });
        if (m === !0) {
            c.modal("show")
        };
        return c
    };
    a.dialog = function(t) {
        t = m(t);
        var a = e(n.dialog),
            f = a.find(".modal-dialog"),
            l = a.find(".modal-body"),
            p = t.buttons,
            s = "",
            i = {
                onEscape: t.onEscape
            };
        if (e.fn.modal === o) {
            throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.")
        };
        r(p, function(t, e) {
            s += "<button data-bb-handler='" + t + "' type='button' class='btn " + e.className + "'>" + e.label + "</button>";
            i[t] = e.callback
        });
        l.find(".bootbox-body").html(t.message);
        if (t.animate === !0) {
            a.addClass("fade")
        };
        if (t.className) {
            a.addClass(t.className)
        };
        if (t.size === "large") {
            f.addClass("modal-lg")
        } else if (t.size === "small") {
            f.addClass("modal-sm")
        };
        if (t.title) {
            l.before(n.header)
        };
        if (t.closeButton) {
            var u = e(n.closeButton);
            if (t.title) {
                a.find(".modal-header").prepend(u)
            } else {
                u.css("margin-top", "-2px").prependTo(l)
            }
        };
        if (t.title) {
            a.find(".modal-title").html(t.title)
        };
        if (s.length) {
            l.after(n.footer);
            a.find(".modal-footer").html(s)
        };
        a.one("hide.bs.modal", function() {
            a.off("escape.close.bb");
            a.off("click")
        });
        a.one("hidden.bs.modal", function(t) {
            if (t.target === this) {
                a.remove()
            }
        });
        a.one("shown.bs.modal", function() {
            a.find(".btn-primary:first").focus()
        });
        if (t.backdrop !== "static") {
            a.on("click.dismiss.bs.modal", function(t) {
                if (a.children(".modal-backdrop").length) {
                    t.currentTarget = a.children(".modal-backdrop").get(0)
                };
                if (t.target !== t.currentTarget) {
                    return
                };
                a.trigger("escape.close.bb")
            })
        };
        a.on("escape.close.bb", function(t) {
            if (i.onEscape) {
                c(t, a, i.onEscape)
            }
        });
        a.on("click", ".modal-footer button", function(t) {
            var o = e(this).data("bb-handler");
            c(t, a, i[o])
        });
        a.on("click", ".bootbox-close-button", function(t) {
            c(t, a, i.onEscape)
        });
        a.on("keyup", function(t) {
            if (t.which === 27) {
                a.trigger("escape.close.bb")
            }
        });
        e(t.container).append(a);
        a.modal({
            backdrop: t.backdrop ? "static" : !1,
            keyboard: !1,
            show: !1
        });
        if (t.show) {
            a.modal("show")
        };
        return a
    };
    a.setDefaults = function() {
        var t = {};
        if (arguments.length === 2) {
            t[arguments[0]] = arguments[1]
        } else {
            t = arguments[0]
        };
        e.extend(l, t)
    };
    a.hideAll = function() {
        e(".bootbox").modal("hide");
        return a
    };
    var i = {
        ar: {
            OK: "موافق",
            CANCEL: "الغاء",
            CONFIRM: "تأكيد"
        },
        bg_BG: {
            OK: "Ок",
            CANCEL: "Отказ",
            CONFIRM: "Потвърждавам"
        },
        br: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Sim"
        },
        cs: {
            OK: "OK",
            CANCEL: "Zrušit",
            CONFIRM: "Potvrdit"
        },
        da: {
            OK: "OK",
            CANCEL: "Annuller",
            CONFIRM: "Accepter"
        },
        de: {
            OK: "OK",
            CANCEL: "Abbrechen",
            CONFIRM: "Akzeptieren"
        },
        el: {
            OK: "Εντάξει",
            CANCEL: "Ακύρωση",
            CONFIRM: "Επιβεβαίωση"
        },
        en: {
            OK: "OK",
            CANCEL: "Cancel",
            CONFIRM: "OK"
        },
        es: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Aceptar"
        },
        et: {
            OK: "OK",
            CANCEL: "Katkesta",
            CONFIRM: "OK"
        },
        fa: {
            OK: "قبول",
            CANCEL: "لغو",
            CONFIRM: "تایید"
        },
        fi: {
            OK: "OK",
            CANCEL: "Peruuta",
            CONFIRM: "OK"
        },
        fr: {
            OK: "OK",
            CANCEL: "Annuler",
            CONFIRM: "Confirmer"
        },
        he: {
            OK: "אישור",
            CANCEL: "ביטול",
            CONFIRM: "אישור"
        },
        hu: {
            OK: "OK",
            CANCEL: "Mégsem",
            CONFIRM: "Megerősít"
        },
        hr: {
            OK: "OK",
            CANCEL: "Odustani",
            CONFIRM: "Potvrdi"
        },
        id: {
            OK: "OK",
            CANCEL: "Batal",
            CONFIRM: "OK"
        },
        it: {
            OK: "OK",
            CANCEL: "Annulla",
            CONFIRM: "Conferma"
        },
        ja: {
            OK: "OK",
            CANCEL: "キャンセル",
            CONFIRM: "確認"
        },
        lt: {
            OK: "Gerai",
            CANCEL: "Atšaukti",
            CONFIRM: "Patvirtinti"
        },
        lv: {
            OK: "Labi",
            CANCEL: "Atcelt",
            CONFIRM: "Apstiprināt"
        },
        nl: {
            OK: "OK",
            CANCEL: "Annuleren",
            CONFIRM: "Accepteren"
        },
        no: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        pl: {
            OK: "OK",
            CANCEL: "Anuluj",
            CONFIRM: "Potwierdź"
        },
        pt: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Confirmar"
        },
        ru: {
            OK: "OK",
            CANCEL: "Отмена",
            CONFIRM: "Применить"
        },
        sq: {
            OK: "OK",
            CANCEL: "Anulo",
            CONFIRM: "Prano"
        },
        sv: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        th: {
            OK: "ตกลง",
            CANCEL: "ยกเลิก",
            CONFIRM: "ยืนยัน"
        },
        tr: {
            OK: "Tamam",
            CANCEL: "İptal",
            CONFIRM: "Onayla"
        },
        zh_CN: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "确认"
        },
        zh_TW: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "確認"
        }
    };
    a.addLocale = function(t, o) {
        e.each(["OK", "CANCEL", "CONFIRM"], function(t, e) {
            if (!o[e]) {
                throw new Error("Please supply a translation for '" + e + "'")
            }
        });
        i[t] = {
            OK: o.OK,
            CANCEL: o.CANCEL,
            CONFIRM: o.CONFIRM
        };
        return a
    };
    a.removeLocale = function(t) {
        delete i[t];
        return a
    };
    a.setLocale = function(t) {
        return a.setDefaults("locale", t)
    };
    a.init = function(o) {
        return t(o || e)
    };
    return a
}));
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
;
if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}; + function(t) {
    'use strict';
    var e = t.fn.jquery.split(' ')[0].split('.');
    if ((e[0] < 2 && e[1] < 9) || (e[0] == 1 && e[1] == 9 && e[2] < 1) || (e[0] > 2)) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')
    }
}(jQuery); + function(t) {
    'use strict';

    function e() {
        var i = document.createElement('bootstrap'),
            e = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd otransitionend',
                transition: 'transitionend'
            };
        for (var t in e) {
            if (i.style[t] !== undefined) {
                return {
                    end: e[t]
                }
            }
        };
        return !1
    };
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one('bsTransitionEnd', function() {
            i = !0
        });
        var o = function() {
            if (!i) t(n).trigger(t.support.transition.end)
        };
        setTimeout(o, e);
        return this
    };
    t(function() {
        t.support.transition = e();
        if (!t.support.transition) return;
        t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }
    })
}(jQuery); + function(t) {
    'use strict';
    var i = '[data-dismiss="alert"]',
        e = function(e) {
            t(e).on('click', i, this.close)
        };
    e.VERSION = '3.3.6';
    e.TRANSITION_DURATION = 150;
    e.prototype.close = function(i) {
        var s = t(this),
            n = s.attr('data-target');
        if (!n) {
            n = s.attr('href');
            n = n && n.replace(/.*(?=#[^\s]*$)/, '')
        };
        var o = t(n);
        if (i) i.preventDefault();
        if (!o.length) {
            o = s.closest('.alert')
        };
        o.trigger(i = t.Event('close.bs.alert'));
        if (i.isDefaultPrevented()) return;
        o.removeClass('in');

        function r() {
            o.detach().trigger('closed.bs.alert').remove()
        };
        t.support.transition && o.hasClass('fade') ? o.one('bsTransitionEnd', r).emulateTransitionEnd(e.TRANSITION_DURATION) : r()
    };

    function n(i) {
        return this.each(function() {
            var o = t(this),
                n = o.data('bs.alert');
            if (!n) o.data('bs.alert', (n = new e(this)));
            if (typeof i == 'string') n[i].call(o)
        })
    };
    var o = t.fn.alert;
    t.fn.alert = n;
    t.fn.alert.Constructor = e;
    t.fn.alert.noConflict = function() {
        t.fn.alert = o;
        return this
    };
    t(document).on('click.bs.alert.data-api', i, e.prototype.close)
}(jQuery); + function(t) {
    'use strict';
    var e = function(i, o) {
        this.$element = t(i);
        this.options = t.extend({}, e.DEFAULTS, o);
        this.isLoading = !1
    };
    e.VERSION = '3.3.6';
    e.DEFAULTS = {
        loadingText: 'loading...'
    };
    e.prototype.setState = function(e) {
        var o = 'disabled',
            i = this.$element,
            s = i.is('input') ? 'val' : 'html',
            n = i.data();
        e += 'Text';
        if (n.resetText == null) i.data('resetText', i[s]());
        setTimeout(t.proxy(function() {
            i[s](n[e] == null ? this.options[e] : n[e]);
            if (e == 'loadingText') {
                this.isLoading = !0;
                i.addClass(o).attr(o, o)
            } else if (this.isLoading) {
                this.isLoading = !1;
                i.removeClass(o).removeAttr(o)
            }
        }, this), 0)
    };
    e.prototype.toggle = function() {
        var e = !0,
            i = this.$element.closest('[data-toggle="buttons"]');
        if (i.length) {
            var t = this.$element.find('input');
            if (t.prop('type') == 'radio') {
                if (t.prop('checked')) e = !1;
                i.find('.active').removeClass('active');
                this.$element.addClass('active')
            } else if (t.prop('type') == 'checkbox') {
                if ((t.prop('checked')) !== this.$element.hasClass('active')) e = !1;
                this.$element.toggleClass('active')
            };
            t.prop('checked', this.$element.hasClass('active'));
            if (e) t.trigger('change')
        } else {
            this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
            this.$element.toggleClass('active')
        }
    };

    function i(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data('bs.button'),
                s = typeof i == 'object' && i;
            if (!o) n.data('bs.button', (o = new e(this, s)));
            if (i == 'toggle') o.toggle();
            else if (i) o.setState(i)
        })
    };
    var o = t.fn.button;
    t.fn.button = i;
    t.fn.button.Constructor = e;
    t.fn.button.noConflict = function() {
        t.fn.button = o;
        return this
    };
    t(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function(e) {
        var o = t(e.target);
        if (!o.hasClass('btn')) o = o.closest('.btn');
        i.call(o, 'toggle');
        if (!(t(e.target).is('input[type="radio"]') || t(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function(e) {
        t(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })
}(jQuery); + function(t) {
    'use strict';
    var e = function(e, i) {
        this.$element = t(e);
        this.$indicators = this.$element.find('.carousel-indicators');
        this.options = i;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on('keydown.bs.carousel', t.proxy(this.keydown, this));
        this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', t.proxy(this.pause, this)).on('mouseleave.bs.carousel', t.proxy(this.cycle, this))
    };
    e.VERSION = '3.3.6';
    e.TRANSITION_DURATION = 600;
    e.DEFAULTS = {
        interval: 5000,
        pause: 'hover',
        wrap: !0,
        keyboard: !0
    };
    e.prototype.keydown = function(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        };
        t.preventDefault()
    };
    e.prototype.cycle = function(e) {
        e || (this.paused = !1);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval));
        return this
    };
    e.prototype.getItemIndex = function(t) {
        this.$items = t.parent().children('.item');
        return this.$items.index(t || this.$active)
    };
    e.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            s = (t == 'prev' && i === 0) || (t == 'next' && i == (this.$items.length - 1));
        if (s && !this.options.wrap) return e;
        var o = t == 'prev' ? -1 : 1,
            n = (i + o) % this.$items.length;
        return this.$items.eq(n)
    };
    e.prototype.to = function(t) {
        var i = this,
            e = this.getItemIndex(this.$active = this.$element.find('.item.active'));
        if (t > (this.$items.length - 1) || t < 0) return;
        if (this.sliding) return this.$element.one('slid.bs.carousel', function() {
            i.to(t)
        });
        if (e == t) return this.pause().cycle();
        return this.slide(t > e ? 'next' : 'prev', this.$items.eq(t))
    };
    e.prototype.pause = function(e) {
        e || (this.paused = !0);
        if (this.$element.find('.next, .prev').length && t.support.transition) {
            this.$element.trigger(t.support.transition.end);
            this.cycle(!0)
        };
        this.interval = clearInterval(this.interval);
        return this
    };
    e.prototype.next = function() {
        if (this.sliding) return;
        return this.slide('next')
    };
    e.prototype.prev = function() {
        if (this.sliding) return;
        return this.slide('prev')
    };
    e.prototype.slide = function(i, o) {
        var r = this.$element.find('.item.active'),
            n = o || this.getItemForDirection(i, r),
            f = this.interval,
            s = i == 'next' ? 'left' : 'right',
            p = this;
        if (n.hasClass('active')) return (this.sliding = !1);
        var h = n[0],
            d = t.Event('slide.bs.carousel', {
                relatedTarget: h,
                direction: s
            });
        this.$element.trigger(d);
        if (d.isDefaultPrevented()) return;
        this.sliding = !0;
        f && this.pause();
        if (this.$indicators.length) {
            this.$indicators.find('.active').removeClass('active');
            var l = t(this.$indicators.children()[this.getItemIndex(n)]);
            l && l.addClass('active')
        };
        var a = t.Event('slid.bs.carousel', {
            relatedTarget: h,
            direction: s
        });
        if (t.support.transition && this.$element.hasClass('slide')) {
            n.addClass(i);
            n[0].offsetWidth;
            r.addClass(s);
            n.addClass(s);
            r.one('bsTransitionEnd', function() {
                n.removeClass([i, s].join(' ')).addClass('active');
                r.removeClass(['active', s].join(' '));
                p.sliding = !1;
                setTimeout(function() {
                    p.$element.trigger(a)
                }, 0)
            }).emulateTransitionEnd(e.TRANSITION_DURATION)
        } else {
            r.removeClass('active');
            n.addClass('active');
            this.sliding = !1;
            this.$element.trigger(a)
        };
        f && this.cycle();
        return this
    };

    function i(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data('bs.carousel'),
                s = t.extend({}, e.DEFAULTS, n.data(), typeof i == 'object' && i);
            var r = typeof i == 'string' ? i : s.slide;
            if (!o) n.data('bs.carousel', (o = new e(this, s)));
            if (typeof i == 'number') o.to(i);
            else if (r) o[r]();
            else if (s.interval) o.pause().cycle()
        })
    };
    var n = t.fn.carousel;
    t.fn.carousel = i;
    t.fn.carousel.Constructor = e;
    t.fn.carousel.noConflict = function() {
        t.fn.carousel = n;
        return this
    };
    var o = function(e) {
        var a, o = t(this),
            n = t(o.attr('data-target') || (a = o.attr('href')) && a.replace(/.*(?=#[^\s]+$)/, ''));
        if (!n.hasClass('carousel')) return;
        var r = t.extend({}, n.data(), o.data());
        var s = o.attr('data-slide-to');
        if (s) r.interval = !1;
        i.call(n, r);
        if (s) {
            n.data('bs.carousel').to(s)
        };
        e.preventDefault()
    };
    t(document).on('click.bs.carousel.data-api', '[data-slide]', o).on('click.bs.carousel.data-api', '[data-slide-to]', o);
    t(window).on('load', function() {
        t('[data-ride="carousel"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery); + function(t) {
    'use strict';
    var e = function(i, o) {
        this.$element = t(i);
        this.options = t.extend({}, e.DEFAULTS, o);
        this.$trigger = t('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
        this.transitioning = null;
        if (this.options.parent) {
            this.$parent = this.getParent()
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger)
        };
        if (this.options.toggle) this.toggle()
    };
    e.VERSION = '3.3.6';
    e.TRANSITION_DURATION = 350;
    e.DEFAULTS = {
        toggle: !0
    };
    e.prototype.dimension = function() {
        var t = this.$element.hasClass('width');
        return t ? 'width' : 'height'
    };
    e.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass('in')) return;
        var s, o = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');
        if (o && o.length) {
            s = o.data('bs.collapse');
            if (s && s.transitioning) return
        };
        var a = t.Event('show.bs.collapse');
        this.$element.trigger(a);
        if (a.isDefaultPrevented()) return;
        if (o && o.length) {
            i.call(o, 'hide');
            s || o.data('bs.collapse', null)
        };
        var n = this.dimension();
        this.$element.removeClass('collapse').addClass('collapsing')[n](0).attr('aria-expanded', !0);
        this.$trigger.removeClass('collapsed').attr('aria-expanded', !0);
        this.transitioning = 1;
        var r = function() {
            this.$element.removeClass('collapsing').addClass('collapse in')[n]('');
            this.transitioning = 0;
            this.$element.trigger('shown.bs.collapse')
        };
        if (!t.support.transition) return r.call(this);
        var l = t.camelCase(['scroll', n].join('-'));
        this.$element.one('bsTransitionEnd', t.proxy(r, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[n](this.$element[0][l])
    };
    e.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass('in')) return;
        var n = t.Event('hide.bs.collapse');
        this.$element.trigger(n);
        if (n.isDefaultPrevented()) return;
        var i = this.dimension();
        this.$element[i](this.$element[i]())[0].offsetHeight;
        this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', !1);
        this.$trigger.addClass('collapsed').attr('aria-expanded', !1);
        this.transitioning = 1;
        var o = function() {
            this.transitioning = 0;
            this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')
        };
        if (!t.support.transition) return o.call(this);
        this.$element[i](0).one('bsTransitionEnd', t.proxy(o, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
    };
    e.prototype.toggle = function() {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
    };
    e.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(e, i) {
            var n = t(i);
            this.addAriaAndCollapsedClass(o(n), n)
        }, this)).end()
    };
    e.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass('in');
        t.attr('aria-expanded', i);
        e.toggleClass('collapsed', !i).attr('aria-expanded', i)
    };

    function o(e) {
        var i, o = e.attr('data-target') || (i = e.attr('href')) && i.replace(/.*(?=#[^\s]+$)/, '');
        return t(o)
    };

    function i(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data('bs.collapse'),
                s = t.extend({}, e.DEFAULTS, n.data(), typeof i == 'object' && i);
            if (!o && s.toggle && /show|hide/.test(i)) s.toggle = !1;
            if (!o) n.data('bs.collapse', (o = new e(this, s)));
            if (typeof i == 'string') o[i]()
        })
    };
    var n = t.fn.collapse;
    t.fn.collapse = i;
    t.fn.collapse.Constructor = e;
    t.fn.collapse.noConflict = function() {
        t.fn.collapse = n;
        return this
    };
    t(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function(e) {
        var n = t(this);
        if (!n.attr('data-target')) e.preventDefault();
        var s = o(n),
            r = s.data('bs.collapse'),
            a = r ? 'toggle' : n.data();
        i.call(s, a)
    })
}(jQuery); + function(t) {
    'use strict';
    var r = '.dropdown-backdrop',
        i = '[data-toggle="dropdown"]',
        e = function(e) {
            t(e).on('click.bs.dropdown', this.toggle)
        };
    e.VERSION = '3.3.6';

    function o(e) {
        var i = e.attr('data-target');
        if (!i) {
            i = e.attr('href');
            i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, '')
        };
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    };

    function n(e) {
        if (e && e.which === 3) return;
        t(r).remove();
        t(i).each(function() {
            var n = t(this),
                i = o(n),
                s = {
                    relatedTarget: this
                };
            if (!i.hasClass('open')) return;
            if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && t.contains(i[0], e.target)) return;
            i.trigger(e = t.Event('hide.bs.dropdown', s));
            if (e.isDefaultPrevented()) return;
            n.attr('aria-expanded', 'false');
            i.removeClass('open').trigger(t.Event('hidden.bs.dropdown', s))
        })
    };
    e.prototype.toggle = function(e) {
        var s = t(this);
        if (s.is('.disabled, :disabled')) return;
        var i = o(s),
            a = i.hasClass('open');
        n();
        if (!a) {
            if ('ontouchstart' in document.documentElement && !i.closest('.navbar-nav').length) {
                t(document.createElement('div')).addClass('dropdown-backdrop').insertAfter(t(this)).on('click', n)
            };
            var r = {
                relatedTarget: this
            };
            i.trigger(e = t.Event('show.bs.dropdown', r));
            if (e.isDefaultPrevented()) return;
            s.trigger('focus').attr('aria-expanded', 'true');
            i.toggleClass('open').trigger(t.Event('shown.bs.dropdown', r))
        };
        return !1
    };
    e.prototype.keydown = function(e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;
        var a = t(this);
        e.preventDefault();
        e.stopPropagation();
        if (a.is('.disabled, :disabled')) return;
        var r = o(a),
            l = r.hasClass('open');
        if (!l && e.which != 27 || l && e.which == 27) {
            if (e.which == 27) r.find(i).trigger('focus');
            return a.trigger('click')
        };
        var h = ' li:not(.disabled):visible a',
            s = r.find('.dropdown-menu' + h);
        if (!s.length) return;
        var n = s.index(e.target);
        if (e.which == 38 && n > 0) n--;
        if (e.which == 40 && n < s.length - 1) n++;
        if (!~n) n = 0;
        s.eq(n).trigger('focus')
    };

    function a(i) {
        return this.each(function() {
            var o = t(this),
                n = o.data('bs.dropdown');
            if (!n) o.data('bs.dropdown', (n = new e(this)));
            if (typeof i == 'string') n[i].call(o)
        })
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = a;
    t.fn.dropdown.Constructor = e;
    t.fn.dropdown.noConflict = function() {
        t.fn.dropdown = s;
        return this
    };
    t(document).on('click.bs.dropdown.data-api', n).on('click.bs.dropdown.data-api', '.dropdown form', function(t) {
        t.stopPropagation()
    }).on('click.bs.dropdown.data-api', i, e.prototype.toggle).on('keydown.bs.dropdown.data-api', i, e.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', e.prototype.keydown)
}(jQuery); + function(t) {
    'use strict';
    var e = function(e, i) {
        this.options = i;
        this.$body = t(document.body);
        this.$element = t(e);
        this.$dialog = this.$element.find('.modal-dialog');
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = !1;
        if (this.options.remote) {
            this.$element.find('.modal-content').load(this.options.remote, t.proxy(function() {
                this.$element.trigger('loaded.bs.modal')
            }, this))
        }
    };
    e.VERSION = '3.3.6';
    e.TRANSITION_DURATION = 300;
    e.BACKDROP_TRANSITION_DURATION = 150;
    e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    e.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    };
    e.prototype.show = function(i) {
        var o = this,
            n = t.Event('show.bs.modal', {
                relatedTarget: i
            });
        this.$element.trigger(n);
        if (this.isShown || n.isDefaultPrevented()) return;
        this.isShown = !0;
        this.checkScrollbar();
        this.setScrollbar();
        this.$body.addClass('modal-open');
        this.escape();
        this.resize();
        this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', t.proxy(this.hide, this));
        this.$dialog.on('mousedown.dismiss.bs.modal', function() {
            o.$element.one('mouseup.dismiss.bs.modal', function(e) {
                if (t(e.target).is(o.$element)) o.ignoreBackdropClick = !0
            })
        });
        this.backdrop(function() {
            var s = t.support.transition && o.$element.hasClass('fade');
            if (!o.$element.parent().length) {
                o.$element.appendTo(o.$body)
            };
            o.$element.show().scrollTop(0);
            o.adjustDialog();
            if (s) {
                o.$element[0].offsetWidth
            };
            o.$element.addClass('in');
            o.enforceFocus();
            var n = t.Event('shown.bs.modal', {
                relatedTarget: i
            });
            s ? o.$dialog.one('bsTransitionEnd', function() {
                o.$element.trigger('focus').trigger(n)
            }).emulateTransitionEnd(e.TRANSITION_DURATION) : o.$element.trigger('focus').trigger(n)
        })
    };
    e.prototype.hide = function(i) {
        if (i) i.preventDefault();
        i = t.Event('hide.bs.modal');
        this.$element.trigger(i);
        if (!this.isShown || i.isDefaultPrevented()) return;
        this.isShown = !1;
        this.escape();
        this.resize();
        t(document).off('focusin.bs.modal');
        this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');
        this.$dialog.off('mousedown.dismiss.bs.modal');
        t.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal()
    };
    e.prototype.enforceFocus = function() {
        t(document).off('focusin.bs.modal').on('focusin.bs.modal', t.proxy(function(t) {
            if (this.$element[0] !== t.target && !this.$element.has(t.target).length) {
                this.$element.trigger('focus')
            }
        }, this))
    };
    e.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on('keydown.dismiss.bs.modal', t.proxy(function(t) {
                t.which == 27 && this.hide()
            }, this))
        } else if (!this.isShown) {
            this.$element.off('keydown.dismiss.bs.modal')
        }
    };
    e.prototype.resize = function() {
        if (this.isShown) {
            t(window).on('resize.bs.modal', t.proxy(this.handleUpdate, this))
        } else {
            t(window).off('resize.bs.modal')
        }
    };
    e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide();
        this.backdrop(function() {
            t.$body.removeClass('modal-open');
            t.resetAdjustments();
            t.resetScrollbar();
            t.$element.trigger('hidden.bs.modal')
        })
    };
    e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    e.prototype.backdrop = function(i) {
        var r = this,
            s = this.$element.hasClass('fade') ? 'fade' : '';
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && s;
            this.$backdrop = t(document.createElement('div')).addClass('modal-backdrop ' + s).appendTo(this.$body);
            this.$element.on('click.dismiss.bs.modal', t.proxy(function(t) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = !1;
                    return
                };
                if (t.target !== t.currentTarget) return;
                this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide()
            }, this));
            if (n) this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass('in');
            if (!i) return;
            n ? this.$backdrop.one('bsTransitionEnd', i).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : i()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in');
            var o = function() {
                r.removeBackdrop();
                i && i()
            };
            t.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', o).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : o()
        } else if (i) {
            i()
        }
    };
    e.prototype.handleUpdate = function() {
        this.adjustDialog()
    };
    e.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : '',
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ''
        })
    };
    e.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: '',
            paddingRight: ''
        })
    };
    e.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        };
        this.bodyIsOverflowing = document.body.clientWidth < t;
        this.scrollbarWidth = this.measureScrollbar()
    };
    e.prototype.setScrollbar = function() {
        var t = parseInt((this.$body.css('padding-right') || 0), 10);
        this.originalBodyPad = document.body.style.paddingRight || '';
        if (this.bodyIsOverflowing) this.$body.css('padding-right', t + this.scrollbarWidth)
    };
    e.prototype.resetScrollbar = function() {
        this.$body.css('padding-right', this.originalBodyPad)
    };
    e.prototype.measureScrollbar = function() {
        var t = document.createElement('div');
        t.className = 'modal-scrollbar-measure';
        this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        this.$body[0].removeChild(t);
        return e
    };

    function i(i, o) {
        return this.each(function() {
            var s = t(this),
                n = s.data('bs.modal'),
                r = t.extend({}, e.DEFAULTS, s.data(), typeof i == 'object' && i);
            if (!n) s.data('bs.modal', (n = new e(this, r)));
            if (typeof i == 'string') n[i](o);
            else if (r.show) n.show(o)
        })
    };
    var o = t.fn.modal;
    t.fn.modal = i;
    t.fn.modal.Constructor = e;
    t.fn.modal.noConflict = function() {
        t.fn.modal = o;
        return this
    };
    t(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function(e) {
        var o = t(this),
            s = o.attr('href'),
            n = t(o.attr('data-target') || (s && s.replace(/.*(?=#[^\s]+$)/, ''))),
            r = n.data('bs.modal') ? 'toggle' : t.extend({
                remote: !/#/.test(s) && s
            }, n.data(), o.data());
        if (o.is('a')) e.preventDefault();
        n.one('show.bs.modal', function(t) {
            if (t.isDefaultPrevented()) return n.one('hidden.bs.modal', function() {
                o.is(':visible') && o.trigger('focus')
            })
        });
        i.call(n, r, this)
    })
}(jQuery); + function(t) {
    'use strict';
    var e = function(t, e) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;
        this.init('tooltip', t, e)
    };
    e.VERSION = '3.3.6';
    e.TRANSITION_DURATION = 150;
    e.DEFAULTS = {
        animation: !0,
        placement: 'top',
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: 'body',
            padding: 0
        }
    };
    e.prototype.init = function(e, i, o) {
        this.enabled = !0;
        this.type = e;
        this.$element = t(i);
        this.options = this.getOptions(o);
        this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport));
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        };
        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
        };
        var r = this.options.trigger.split(' ');
        for (var s = r.length; s--;) {
            var n = r[s];
            if (n == 'click') {
                this.$element.on('click.' + this.type, this.options.selector, t.proxy(this.toggle, this))
            } else if (n != 'manual') {
                var a = n == 'hover' ? 'mouseenter' : 'focusin',
                    l = n == 'hover' ? 'mouseleave' : 'focusout';
                this.$element.on(a + '.' + this.type, this.options.selector, t.proxy(this.enter, this));
                this.$element.on(l + '.' + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        };
        this.options.selector ? (this._options = t.extend({}, this.options, {
            trigger: 'manual',
            selector: ''
        })) : this.fixTitle()
    };
    e.prototype.getDefaults = function() {
        return e.DEFAULTS
    };
    e.prototype.getOptions = function(e) {
        e = t.extend({}, this.getDefaults(), this.$element.data(), e);
        if (e.delay && typeof e.delay == 'number') {
            e.delay = {
                show: e.delay,
                hide: e.delay
            }
        };
        return e
    };
    e.prototype.getDelegateOptions = function() {
        var e = {};
        var i = this.getDefaults();
        this._options && t.each(this._options, function(t, o) {
            if (i[t] != o) e[t] = o
        });
        return e
    };
    e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data('bs.' + this.type);
        if (!i) {
            i = new this.constructor(e.currentTarget, this.getDelegateOptions());
            t(e.currentTarget).data('bs.' + this.type, i)
        };
        if (e instanceof t.Event) {
            i.inState[e.type == 'focusin' ? 'focus' : 'hover'] = !0
        };
        if (i.tip().hasClass('in') || i.hoverState == 'in') {
            i.hoverState = 'in';
            return
        };
        clearTimeout(i.timeout);
        i.hoverState = 'in';
        if (!i.options.delay || !i.options.delay.show) return i.show();
        i.timeout = setTimeout(function() {
            if (i.hoverState == 'in') i.show()
        }, i.options.delay.show)
    };
    e.prototype.isInStateTrue = function() {
        for (var t in this.inState) {
            if (this.inState[t]) return !0
        };
        return !1
    };
    e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data('bs.' + this.type);
        if (!i) {
            i = new this.constructor(e.currentTarget, this.getDelegateOptions());
            t(e.currentTarget).data('bs.' + this.type, i)
        };
        if (e instanceof t.Event) {
            i.inState[e.type == 'focusout' ? 'focus' : 'hover'] = !1
        };
        if (i.isInStateTrue()) return;
        clearTimeout(i.timeout);
        i.hoverState = 'out';
        if (!i.options.delay || !i.options.delay.hide) return i.hide();
        i.timeout = setTimeout(function() {
            if (i.hoverState == 'out') i.hide()
        }, i.options.delay.hide)
    };
    e.prototype.show = function() {
        var c = t.Event('show.bs.' + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(c);
            var m = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (c.isDefaultPrevented() || !m) return;
            var n = this,
                o = this.tip(),
                p = this.getUID(this.type);
            this.setContent();
            o.attr('id', p);
            this.$element.attr('aria-describedby', p);
            if (this.options.animation) o.addClass('fade');
            var i = typeof this.options.placement == 'function' ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                d = /\s?auto?\s?/i,
                f = d.test(i);
            if (f) i = i.replace(d, '') || 'top';
            o.detach().css({
                top: 0,
                left: 0,
                display: 'block'
            }).addClass(i).data('bs.' + this.type, this);
            this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            this.$element.trigger('inserted.bs.' + this.type);
            var s = this.getPosition(),
                a = o[0].offsetWidth,
                l = o[0].offsetHeight;
            if (f) {
                var g = i,
                    r = this.getPosition(this.$viewport);
                i = i == 'bottom' && s.bottom + l > r.bottom ? 'top' : i == 'top' && s.top - l < r.top ? 'bottom' : i == 'right' && s.right + a > r.width ? 'left' : i == 'left' && s.left - a < r.left ? 'right' : i;
                o.removeClass(g).addClass(i)
            };
            var u = this.getCalculatedOffset(i, s, a, l);
            this.applyPlacement(u, i);
            var h = function() {
                var t = n.hoverState;
                n.$element.trigger('shown.bs.' + n.type);
                n.hoverState = null;
                if (t == 'out') n.leave(n)
            };
            t.support.transition && this.$tip.hasClass('fade') ? o.one('bsTransitionEnd', h).emulateTransitionEnd(e.TRANSITION_DURATION) : h()
        }
    };
    e.prototype.applyPlacement = function(e, i) {
        var o = this.tip(),
            c = o[0].offsetWidth,
            a = o[0].offsetHeight,
            l = parseInt(o.css('margin-top'), 10),
            h = parseInt(o.css('margin-left'), 10);
        if (isNaN(l)) l = 0;
        if (isNaN(h)) h = 0;
        e.top += l;
        e.left += h;
        t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0);
        o.addClass('in');
        var d = o[0].offsetWidth,
            s = o[0].offsetHeight;
        if (i == 'top' && s != a) {
            e.top = e.top + a - s
        };
        var n = this.getViewportAdjustedDelta(i, e, d, s);
        if (n.left) e.left += n.left;
        else e.top += n.top;
        var r = /top|bottom/.test(i),
            f = r ? n.left * 2 - c + d : n.top * 2 - a + s,
            p = r ? 'offsetWidth' : 'offsetHeight';
        o.offset(e);
        this.replaceArrow(f, o[0][p], r)
    };
    e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? 'left' : 'top', 50 * (1 - t / e) + '%').css(i ? 'top' : 'left', '')
    };
    e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](e);
        t.removeClass('fade in top bottom left right')
    };
    e.prototype.hide = function(i) {
        var n = this,
            o = t(this.$tip),
            s = t.Event('hide.bs.' + this.type);

        function r() {
            if (n.hoverState != 'in') o.detach();
            n.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + n.type);
            i && i()
        };
        this.$element.trigger(s);
        if (s.isDefaultPrevented()) return;
        o.removeClass('in');
        t.support.transition && o.hasClass('fade') ? o.one('bsTransitionEnd', r).emulateTransitionEnd(e.TRANSITION_DURATION) : r();
        this.hoverState = null;
        return this
    };
    e.prototype.fixTitle = function() {
        var t = this.$element;
        if (t.attr('title') || typeof t.attr('data-original-title') != 'string') {
            t.attr('data-original-title', t.attr('title') || '').attr('title', '')
        }
    };
    e.prototype.hasContent = function() {
        return this.getTitle()
    };
    e.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            o = n.tagName == 'BODY',
            i = n.getBoundingClientRect();
        if (i.width == null) {
            i = t.extend({}, i, {
                width: i.right - i.left,
                height: i.bottom - i.top
            })
        };
        var a = o ? {
            top: 0,
            left: 0
        } : e.offset();
        var r = {
            scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        };
        var s = o ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, i, r, s, a)
    };
    e.prototype.getCalculatedOffset = function(t, e, i, o) {
        return t == 'bottom' ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : t == 'top' ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : t == 'left' ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    };
    e.prototype.getViewportAdjustedDelta = function(t, e, o, r) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            i = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var h = e.top - s - i.scroll,
                d = e.top + s - i.scroll + r;
            if (h < i.top) {
                n.top = i.top - h
            } else if (d > i.top + i.height) {
                n.top = i.top + i.height - d
            }
        } else {
            var a = e.left - s,
                l = e.left + s + o;
            if (a < i.left) {
                n.left = i.left - a
            } else if (l > i.right) {
                n.left = i.left + i.width - l
            }
        };
        return n
    };
    e.prototype.getTitle = function() {
        var e, i = this.$element,
            t = this.options;
        e = i.attr('data-original-title') || (typeof t.title == 'function' ? t.title.call(i[0]) : t.title);
        return e
    };
    e.prototype.getUID = function(t) {
        do t += ~~(Math.random() * 1000000); while (document.getElementById(t)) return t
    };
    e.prototype.tip = function() {
        if (!this.$tip) {
            this.$tip = t(this.options.template);
            if (this.$tip.length != 1) {
                throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
            }
        };
        return this.$tip
    };
    e.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
    };
    e.prototype.enable = function() {
        this.enabled = !0
    };
    e.prototype.disable = function() {
        this.enabled = !1
    };
    e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    e.prototype.toggle = function(e) {
        var i = this;
        if (e) {
            i = t(e.currentTarget).data('bs.' + this.type);
            if (!i) {
                i = new this.constructor(e.currentTarget, this.getDelegateOptions());
                t(e.currentTarget).data('bs.' + this.type, i)
            }
        };
        if (e) {
            i.inState.click = !i.inState.click;
            if (i.isInStateTrue()) i.enter(i);
            else i.leave(i)
        } else {
            i.tip().hasClass('in') ? i.leave(i) : i.enter(i)
        }
    };
    e.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            t.$element.off('.' + t.type).removeData('bs.' + t.type);
            if (t.$tip) {
                t.$tip.detach()
            };
            t.$tip = null;
            t.$arrow = null;
            t.$viewport = null
        })
    };

    function o(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data('bs.tooltip'),
                s = typeof i == 'object' && i;
            if (!o && /destroy|hide/.test(i)) return;
            if (!o) n.data('bs.tooltip', (o = new e(this, s)));
            if (typeof i == 'string') o[i]()
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = o;
    t.fn.tooltip.Constructor = e;
    t.fn.tooltip.noConflict = function() {
        t.fn.tooltip = i;
        return this
    }
}(jQuery); + function(t) {
    'use strict';
    var e = function(t, e) {
        this.init('popover', t, e)
    };
    if (!t.fn.tooltip) throw new Error('Popover requires tooltip.js');
    e.VERSION = '3.3.6';
    e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype);
    e.prototype.constructor = e;
    e.prototype.getDefaults = function() {
        return e.DEFAULTS
    };
    e.prototype.setContent = function() {
        var t = this.tip(),
            i = this.getTitle(),
            e = this.getContent();
        t.find('.popover-title')[this.options.html ? 'html' : 'text'](i);
        t.find('.popover-content').children().detach().end()[this.options.html ? (typeof e == 'string' ? 'html' : 'append') : 'text'](e);
        t.removeClass('fade top bottom left right in');
        if (!t.find('.popover-title').html()) t.find('.popover-title').hide()
    };
    e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    e.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr('data-content') || (typeof t.content == 'function' ? t.content.call(e[0]) : t.content)
    };
    e.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
    };

    function o(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data('bs.popover'),
                s = typeof i == 'object' && i;
            if (!o && /destroy|hide/.test(i)) return;
            if (!o) n.data('bs.popover', (o = new e(this, s)));
            if (typeof i == 'string') o[i]()
        })
    };
    var i = t.fn.popover;
    t.fn.popover = o;
    t.fn.popover.Constructor = e;
    t.fn.popover.noConflict = function() {
        t.fn.popover = i;
        return this
    }
}(jQuery); + function(t) {
    'use strict';

    function e(i, o) {
        this.$body = t(document.body);
        this.$scrollElement = t(i).is(document.body) ? t(window) : t(i);
        this.options = t.extend({}, e.DEFAULTS, o);
        this.selector = (this.options.target || '') + ' .nav li > a';
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on('scroll.bs.scrollspy', t.proxy(this.process, this));
        this.refresh();
        this.process()
    };
    e.VERSION = '3.3.6';
    e.DEFAULTS = {
        offset: 10
    };
    e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    e.prototype.refresh = function() {
        var e = this,
            i = 'offset',
            o = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        if (!t.isWindow(this.$scrollElement[0])) {
            i = 'position';
            o = this.$scrollElement.scrollTop()
        };
        this.$body.find(this.selector).map(function() {
            var s = t(this),
                n = s.data('target') || s.attr('href'),
                e = /^#./.test(n) && t(n);
            return (e && e.length && e.is(':visible') && [
                [e[i]().top + o, n]
            ]) || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]);
            e.targets.push(this[1])
        })
    };
    e.prototype.process = function() {
        var i = this.$scrollElement.scrollTop() + this.options.offset,
            s = this.getScrollHeight(),
            r = this.options.offset + s - this.$scrollElement.height(),
            e = this.offsets,
            o = this.targets,
            n = this.activeTarget,
            t;
        if (this.scrollHeight != s) {
            this.refresh()
        };
        if (i >= r) {
            return n != (t = o[o.length - 1]) && this.activate(t)
        };
        if (n && i < e[0]) {
            this.activeTarget = null;
            return this.clear()
        };
        for (t = e.length; t--;) {
            n != o[t] && i >= e[t] && (e[t + 1] === undefined || i < e[t + 1]) && this.activate(o[t])
        }
    };
    e.prototype.activate = function(e) {
        this.activeTarget = e;
        this.clear();
        var o = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(o).parents('li').addClass('active');
        if (i.parent('.dropdown-menu').length) {
            i = i.closest('li.dropdown').addClass('active')
        };
        i.trigger('activate.bs.scrollspy')
    };
    e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, '.active').removeClass('active')
    };

    function i(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data('bs.scrollspy'),
                s = typeof i == 'object' && i;
            if (!o) n.data('bs.scrollspy', (o = new e(this, s)));
            if (typeof i == 'string') o[i]()
        })
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i;
    t.fn.scrollspy.Constructor = e;
    t.fn.scrollspy.noConflict = function() {
        t.fn.scrollspy = o;
        return this
    };
    t(window).on('load.bs.scrollspy.data-api', function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery); + function(t) {
    'use strict';
    var e = function(e) {
        this.element = t(e)
    };
    e.VERSION = '3.3.6';
    e.TRANSITION_DURATION = 150;
    e.prototype.show = function() {
        var e = this.element,
            a = e.closest('ul:not(.dropdown-menu)'),
            i = e.data('target');
        if (!i) {
            i = e.attr('href');
            i = i && i.replace(/.*(?=#[^\s]*$)/, '')
        };
        if (e.parent('li').hasClass('active')) return;
        var o = a.find('.active:last a'),
            r = t.Event('hide.bs.tab', {
                relatedTarget: e[0]
            });
        var s = t.Event('show.bs.tab', {
            relatedTarget: o[0]
        });
        o.trigger(r);
        e.trigger(s);
        if (s.isDefaultPrevented() || r.isDefaultPrevented()) return;
        var n = t(i);
        this.activate(e.closest('li'), a);
        this.activate(n, n.parent(), function() {
            o.trigger({
                type: 'hidden.bs.tab',
                relatedTarget: e[0]
            });
            e.trigger({
                type: 'shown.bs.tab',
                relatedTarget: o[0]
            })
        })
    };
    e.prototype.activate = function(i, o, n) {
        var s = o.find('> .active'),
            r = n && t.support.transition && (s.length && s.hasClass('fade') || !!o.find('> .fade').length);

        function a() {
            s.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', !1);
            i.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', !0);
            if (r) {
                i[0].offsetWidth;
                i.addClass('in')
            } else {
                i.removeClass('fade')
            };
            if (i.parent('.dropdown-menu').length) {
                i.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', !0)
            };
            n && n()
        };
        s.length && r ? s.one('bsTransitionEnd', a).emulateTransitionEnd(e.TRANSITION_DURATION) : a();
        s.removeClass('in')
    };

    function o(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data('bs.tab');
            if (!o) n.data('bs.tab', (o = new e(this)));
            if (typeof i == 'string') o[i]()
        })
    };
    var n = t.fn.tab;
    t.fn.tab = o;
    t.fn.tab.Constructor = e;
    t.fn.tab.noConflict = function() {
        t.fn.tab = n;
        return this
    };
    var i = function(e) {
        e.preventDefault();
        o.call(t(this), 'show')
    };
    t(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', i).on('click.bs.tab.data-api', '[data-toggle="pill"]', i)
}(jQuery); + function(t) {
    'use strict';
    var e = function(i, o) {
        this.options = t.extend({}, e.DEFAULTS, o);
        this.$target = t(this.options.target).on('scroll.bs.affix.data-api', t.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', t.proxy(this.checkPositionWithEventLoop, this));
        this.$element = t(i);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition()
    };
    e.VERSION = '3.3.6';
    e.RESET = 'affix affix-top affix-bottom';
    e.DEFAULTS = {
        offset: 0,
        target: window
    };
    e.prototype.getState = function(t, e, i, o) {
        var n = this.$target.scrollTop(),
            r = this.$element.offset(),
            a = this.$target.height();
        if (i != null && this.affixed == 'top') return n < i ? 'top' : !1;
        if (this.affixed == 'bottom') {
            if (i != null) return (n + this.unpin <= r.top) ? !1 : 'bottom';
            return (n + a <= t - o) ? !1 : 'bottom'
        };
        var s = this.affixed == null,
            l = s ? n : r.top,
            h = s ? a : e;
        if (i != null && n <= i) return 'top';
        if (o != null && (l + h >= t - o)) return 'bottom';
        return !1
    };
    e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass('affix');
        var t = this.$target.scrollTop(),
            i = this.$element.offset();
        return (this.pinnedOffset = i.top - t)
    };
    e.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    };
    e.prototype.checkPosition = function() {
        if (!this.$element.is(':visible')) return;
        var l = this.$element.height(),
            o = this.options.offset,
            s = o.top,
            n = o.bottom,
            h = Math.max(t(document).height(), t(document.body).height());
        if (typeof o != 'object') n = s = o;
        if (typeof s == 'function') s = o.top(this.$element);
        if (typeof n == 'function') n = o.bottom(this.$element);
        var i = this.getState(h, l, s, n);
        if (this.affixed != i) {
            if (this.unpin != null) this.$element.css('top', '');
            var r = 'affix' + (i ? '-' + i : ''),
                a = t.Event(r + '.bs.affix');
            this.$element.trigger(a);
            if (a.isDefaultPrevented()) return;
            this.affixed = i;
            this.unpin = i == 'bottom' ? this.getPinnedOffset() : null;
            this.$element.removeClass(e.RESET).addClass(r).trigger(r.replace('affix', 'affixed') + '.bs.affix')
        };
        if (i == 'bottom') {
            this.$element.offset({
                top: h - l - n
            })
        }
    };

    function i(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data('bs.affix'),
                s = typeof i == 'object' && i;
            if (!o) n.data('bs.affix', (o = new e(this, s)));
            if (typeof i == 'string') o[i]()
        })
    };
    var o = t.fn.affix;
    t.fn.affix = i;
    t.fn.affix.Constructor = e;
    t.fn.affix.noConflict = function() {
        t.fn.affix = o;
        return this
    };
    t(window).on('load', function() {
        t('[data-spy="affix"]').each(function() {
            var o = t(this),
                e = o.data();
            e.offset = e.offset || {};
            if (e.offsetBottom != null) e.offset.bottom = e.offsetBottom;
            if (e.offsetTop != null) e.offset.top = e.offsetTop;
            i.call(o, e)
        })
    })
}(jQuery);
(function() {
    var e = (function(o) {
        'use strict';
        o = (o) ? o : {};
        var v = {
            bgColor: '#d00',
            textColor: '#fff',
            fontFamily: 'sans-serif',
            fontStyle: 'bold',
            type: 'circle',
            position: 'down',
            animation: 'slide',
            elementId: !1,
            element: null,
            dataUrl: !1,
            win: window
        };
        var e, w, r, i, u, t, l, d, x, m, s, g, a, I, M, h;
        a = {};
        a.ff = typeof InstallTrigger != 'undefined';
        a.chrome = !!window.chrome;
        a.opera = !!window.opera || navigator.userAgent.indexOf('Opera') >= 0;
        a.ie = /*@cc_on!@*/ !1;
        a.safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
        a.supported = (a.chrome || a.ff || a.opera);
        var c = [];
        s = function() {};
        d = g = !1;
        var k = function() {
                e = A(v, o);
                e.bgColor = b(e.bgColor);
                e.textColor = b(e.textColor);
                e.position = e.position.toLowerCase();
                e.animation = (n.types['' + e.animation]) ? e.animation : v.animation;
                h = e.win.document;
                var g = e.position.indexOf('up') > -1,
                    x = e.position.indexOf('left') > -1;
                if (g || x) {
                    for (var c in n.types) {
                        for (var s = 0; s < n.types[c].length; s++) {
                            var a = n.types[c][s];
                            if (g) {
                                if (a.y < 0.6) {
                                    a.y = a.y - 0.4
                                } else {
                                    a.y = a.y - 2 * a.y + (1 - a.w)
                                }
                            };
                            if (x) {
                                if (a.x < 0.6) {
                                    a.x = a.x - 0.4
                                } else {
                                    a.x = a.x - 2 * a.x + (1 - a.h)
                                }
                            };
                            n.types[c][s] = a
                        }
                    }
                };
                e.type = (p['' + e.type]) ? e.type : v.type;
                w = y.getIcons();
                u = document.createElement('canvas');
                l = document.createElement('img');
                var d = w[w.length - 1];
                if (d.hasAttribute('href')) {
                    l.setAttribute('crossOrigin', 'anonymous');
                    l.onload = function() {
                        r = (l.height > 0) ? l.height : 32;
                        i = (l.width > 0) ? l.width : 32;
                        u.height = r;
                        u.width = i;
                        t = u.getContext('2d');
                        f.ready()
                    };
                    l.setAttribute('src', d.getAttribute('href'))
                } else {
                    r = 32;
                    i = 32;
                    l.height = r;
                    l.width = i;
                    u.height = r;
                    u.width = i;
                    t = u.getContext('2d');
                    f.ready()
                }
            },
            f = {};
        f.ready = function() {
            d = !0;
            f.reset();
            s()
        };
        f.reset = function() {
            if (!d) {
                return
            };
            c = [];
            x = !1;
            m = !1;
            t.clearRect(0, 0, i, r);
            t.drawImage(l, 0, 0, i, r);
            y.setIcon(u);
            window.clearTimeout(I);
            window.clearTimeout(M)
        };
        f.start = function() {
            if (!d || m) {
                return
            };
            var o = function() {
                x = c[0];
                m = !1;
                if (c.length > 0) {
                    c.shift();
                    f.start()
                } else {}
            };
            if (c.length > 0) {
                m = !0;
                var t = function() {
                    ['type', 'animation', 'bgColor', 'textColor', 'fontFamily', 'fontStyle'].forEach(function(t) {
                        if (t in c[0].options) {
                            e[t] = c[0].options[t]
                        }
                    });
                    n.run(c[0].options, function() {
                        o()
                    }, !1)
                };
                if (x) {
                    n.run(x.options, function() {
                        t()
                    }, !0)
                } else {
                    t()
                }
            }
        };
        var p = {};
        var E = function(e) {
            e.n = ((typeof e.n) === 'number') ? Math.abs(e.n | 0) : e.n;
            e.x = i * e.x;
            e.y = r * e.y;
            e.w = i * e.w;
            e.h = r * e.h;
            e.len = ('' + e.n).length;
            return e
        };
        p.circle = function(o) {
            o = E(o);
            var n = !1;
            if (o.len === 2) {
                o.x = o.x - o.w * 0.4;
                o.w = o.w * 1.4;
                n = !0
            } else if (o.len >= 3) {
                o.x = o.x - o.w * 0.65;
                o.w = o.w * 1.65;
                n = !0
            };
            t.clearRect(0, 0, i, r);
            t.drawImage(l, 0, 0, i, r);
            t.beginPath();
            t.font = e.fontStyle + ' ' + Math.floor(o.h * (o.n > 99 ? 0.85 : 1)) + 'px ' + e.fontFamily;
            t.textAlign = 'center';
            if (n) {
                t.moveTo(o.x + o.w / 2, o.y);
                t.lineTo(o.x + o.w - o.h / 2, o.y);
                t.quadraticCurveTo(o.x + o.w, o.y, o.x + o.w, o.y + o.h / 2);
                t.lineTo(o.x + o.w, o.y + o.h - o.h / 2);
                t.quadraticCurveTo(o.x + o.w, o.y + o.h, o.x + o.w - o.h / 2, o.y + o.h);
                t.lineTo(o.x + o.h / 2, o.y + o.h);
                t.quadraticCurveTo(o.x, o.y + o.h, o.x, o.y + o.h - o.h / 2);
                t.lineTo(o.x, o.y + o.h / 2);
                t.quadraticCurveTo(o.x, o.y, o.x + o.h / 2, o.y)
            } else {
                t.arc(o.x + o.w / 2, o.y + o.h / 2, o.h / 2, 0, 2 * Math.PI)
            };
            t.fillStyle = 'rgba(' + e.bgColor.r + ',' + e.bgColor.g + ',' + e.bgColor.b + ',' + o.o + ')';
            t.fill();
            t.closePath();
            t.beginPath();
            t.stroke();
            t.fillStyle = 'rgba(' + e.textColor.r + ',' + e.textColor.g + ',' + e.textColor.b + ',' + o.o + ')';
            if ((typeof o.n) === 'number' && o.n > 999) {
                t.fillText(((o.n > 9999) ? 9 : Math.floor(o.n / 1000)) + 'k+', Math.floor(o.x + o.w / 2), Math.floor(o.y + o.h - o.h * 0.2))
            } else {
                t.fillText(o.n, Math.floor(o.x + o.w / 2), Math.floor(o.y + o.h - o.h * 0.15))
            };
            t.closePath()
        };
        p.rectangle = function(o) {
            o = E(o);
            var n = !1;
            if (o.len === 2) {
                o.x = o.x - o.w * 0.4;
                o.w = o.w * 1.4;
                n = !0
            } else if (o.len >= 3) {
                o.x = o.x - o.w * 0.65;
                o.w = o.w * 1.65;
                n = !0
            };
            t.clearRect(0, 0, i, r);
            t.drawImage(l, 0, 0, i, r);
            t.beginPath();
            t.font = e.fontStyle + ' ' + Math.floor(o.h * (o.n > 99 ? 0.9 : 1)) + 'px ' + e.fontFamily;
            t.textAlign = 'center';
            t.fillStyle = 'rgba(' + e.bgColor.r + ',' + e.bgColor.g + ',' + e.bgColor.b + ',' + o.o + ')';
            t.fillRect(o.x, o.y, o.w, o.h);
            t.fillStyle = 'rgba(' + e.textColor.r + ',' + e.textColor.g + ',' + e.textColor.b + ',' + o.o + ')';
            if ((typeof o.n) === 'number' && o.n > 999) {
                t.fillText(((o.n > 9999) ? 9 : Math.floor(o.n / 1000)) + 'k+', Math.floor(o.x + o.w / 2), Math.floor(o.y + o.h - o.h * 0.2))
            } else {
                t.fillText(o.n, Math.floor(o.x + o.w / 2), Math.floor(o.y + o.h - o.h * 0.15))
            };
            t.closePath()
        };
        var T = function(e, t) {
                t = ((typeof t) === 'string' ? {
                    animation: t
                } : t) || {};
                s = function() {
                    try {
                        if (typeof(e) === 'number' ? (e > 0) : (e !== '')) {
                            var o = {
                                type: 'badge',
                                options: {
                                    n: e
                                }
                            };
                            if ('animation' in t && n.types['' + t.animation]) {
                                o.options.animation = '' + t.animation
                            };
                            if ('type' in t && p['' + t.type]) {
                                o.options.type = '' + t.type
                            } ['bgColor', 'textColor'].forEach(function(e) {
                                if (e in t) {
                                    o.options[e] = b(t[e])
                                }
                            });
                            ['fontStyle', 'fontFamily'].forEach(function(e) {
                                if (e in t) {
                                    o.options[e] = t[e]
                                }
                            });
                            c.push(o);
                            if (c.length > 100) {
                                throw new Error('Too many badges requests in queue.')
                            };
                            f.start()
                        } else {
                            f.reset()
                        }
                    } catch (r) {
                        throw new Error('Error setting badge. Message: ' + r.message)
                    }
                };
                if (d) {
                    s()
                }
            },
            U = function(e) {
                s = function() {
                    try {
                        var a = e.width,
                            f = e.height,
                            o = document.createElement('img'),
                            l = (a / i < f / r) ? (a / i) : (f / r);
                        o.setAttribute('crossOrigin', 'anonymous');
                        o.onload = function() {
                            t.clearRect(0, 0, i, r);
                            t.drawImage(o, 0, 0, i, r);
                            y.setIcon(u)
                        };
                        o.setAttribute('src', e.getAttribute('src'));
                        o.height = (f / l);
                        o.width = (a / l)
                    } catch (n) {
                        throw new Error('Error setting image. Message: ' + n.message)
                    }
                };
                if (d) {
                    s()
                }
            },
            R = function(e) {
                s = function() {
                    y.setIconSrc(e)
                };
                if (d) {
                    s()
                }
            },
            O = function(e) {
                s = function() {
                    try {
                        if (e === 'stop') {
                            g = !0;
                            f.reset();
                            g = !1;
                            return
                        };
                        e.addEventListener('play', function() {
                            C(this)
                        }, !1)
                    } catch (t) {
                        throw new Error('Error setting video. Message: ' + t.message)
                    }
                };
                if (d) {
                    s()
                }
            },
            S = function(e) {
                if (!window.URL || !window.URL.createObjectURL) {
                    window.URL = window.URL || {};
                    window.URL.createObjectURL = function(e) {
                        return e
                    }
                };
                if (a.supported) {
                    var t = !1;
                    navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
                    s = function() {
                        try {
                            if (e === 'stop') {
                                g = !0;
                                f.reset();
                                g = !1;
                                return
                            };
                            t = document.createElement('video');
                            t.width = i;
                            t.height = r;
                            navigator.getUserMedia({
                                video: !0,
                                audio: !1
                            }, function(e) {
                                t.src = URL.createObjectURL(e);
                                t.play();
                                C(t)
                            }, function() {})
                        } catch (o) {
                            throw new Error('Error setting webcam. Message: ' + o.message)
                        }
                    };
                    if (d) {
                        s()
                    }
                }
            },
            L = function(t, r) {
                var i = t;
                if (!(r == null && Object.prototype.toString.call(t) == '[object Object]')) {
                    i = {};
                    i[t] = r
                };
                var n = Object.keys(i);
                for (var o = 0; o < n.length; o++) {
                    if (n[o] == 'bgColor' || n[o] == 'textColor') {
                        e[n[o]] = b(i[n[o]])
                    } else {
                        e[n[o]] = i[n[o]]
                    }
                };
                c.push(x);
                f.start()
            };

        function C(e) {
            if (e.paused || e.ended || g) {
                return !1
            };
            try {
                t.clearRect(0, 0, i, r);
                t.drawImage(e, 0, 0, i, r)
            } catch (o) {};
            M = setTimeout(function() {
                C(e)
            }, n.duration);
            y.setIcon(u)
        };
        var y = {};
        y.getIcons = function() {
            var t = [],
                o = function() {
                    var o = [],
                        t = h.getElementsByTagName('head')[0].getElementsByTagName('link');
                    for (var e = 0; e < t.length; e++) {
                        if ((/(^|\s)icon(\s|$)/i).test(t[e].getAttribute('rel'))) {
                            o.push(t[e])
                        }
                    };
                    return o
                };
            if (e.element) {
                t = [e.element]
            } else if (e.elementId) {
                t = [h.getElementById(e.elementId)];
                t[0].setAttribute('href', t[0].getAttribute('src'))
            } else {
                t = o();
                if (t.length === 0) {
                    t = [h.createElement('link')];
                    t[0].setAttribute('rel', 'icon');
                    h.getElementsByTagName('head')[0].appendChild(t[0])
                }
            };
            t.forEach(function(e) {
                e.setAttribute('type', 'image/png')
            });
            return t
        };
        y.setIcon = function(e) {
            var t = e.toDataURL('image/png');
            y.setIconSrc(t)
        };
        y.setIconSrc = function(t) {
            if (e.dataUrl) {
                e.dataUrl(t)
            };
            if (e.element) {
                e.element.setAttribute('href', t);
                e.element.setAttribute('src', t)
            } else if (e.elementId) {
                var r = h.getElementById(e.elementId);
                r.setAttribute('href', t);
                r.setAttribute('src', t)
            } else {
                if (a.ff || a.opera) {
                    var n = w[w.length - 1],
                        o = h.createElement('link');
                    w = [o];
                    if (a.opera) {
                        o.setAttribute('rel', 'icon')
                    };
                    o.setAttribute('rel', 'icon');
                    o.setAttribute('type', 'image/png');
                    h.getElementsByTagName('head')[0].appendChild(o);
                    o.setAttribute('href', t);
                    if (n.parentNode) {
                        n.parentNode.removeChild(n)
                    }
                } else {
                    w.forEach(function(e) {
                        e.setAttribute('href', t)
                    })
                }
            }
        };

        function b(e) {
            var o = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            e = e.replace(o, function(e, t, o, n) {
                return t + t + o + o + n + n
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16)
            } : !1
        };

        function A(e, t) {
            var n = {};
            var o;
            for (o in e) {
                n[o] = e[o]
            };
            for (o in t) {
                n[o] = t[o]
            };
            return n
        };

        function j() {
            return h.hidden || h.msHidden || h.webkitHidden || h.mozHidden
        };
        var n = {};
        n.duration = 40;
        n.types = {};
        n.types.fade = [{
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 0.0
        }, {
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 0.1
        }, {
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 0.2
        }, {
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 0.3
        }, {
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 0.4
        }, {
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 0.5
        }, {
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 0.6
        }, {
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 0.7
        }, {
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 0.8
        }, {
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 0.9
        }, {
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 1.0
        }];
        n.types.none = [{
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 1
        }];
        n.types.pop = [{
            x: 1,
            y: 1,
            w: 0,
            h: 0,
            o: 1
        }, {
            x: 0.9,
            y: 0.9,
            w: 0.1,
            h: 0.1,
            o: 1
        }, {
            x: 0.8,
            y: 0.8,
            w: 0.2,
            h: 0.2,
            o: 1
        }, {
            x: 0.7,
            y: 0.7,
            w: 0.3,
            h: 0.3,
            o: 1
        }, {
            x: 0.6,
            y: 0.6,
            w: 0.4,
            h: 0.4,
            o: 1
        }, {
            x: 0.5,
            y: 0.5,
            w: 0.5,
            h: 0.5,
            o: 1
        }, {
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 1
        }];
        n.types.popFade = [{
            x: 0.75,
            y: 0.75,
            w: 0,
            h: 0,
            o: 0
        }, {
            x: 0.65,
            y: 0.65,
            w: 0.1,
            h: 0.1,
            o: 0.2
        }, {
            x: 0.6,
            y: 0.6,
            w: 0.2,
            h: 0.2,
            o: 0.4
        }, {
            x: 0.55,
            y: 0.55,
            w: 0.3,
            h: 0.3,
            o: 0.6
        }, {
            x: 0.50,
            y: 0.50,
            w: 0.4,
            h: 0.4,
            o: 0.8
        }, {
            x: 0.45,
            y: 0.45,
            w: 0.5,
            h: 0.5,
            o: 0.9
        }, {
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 1
        }];
        n.types.slide = [{
            x: 0.4,
            y: 1,
            w: 0.6,
            h: 0.6,
            o: 1
        }, {
            x: 0.4,
            y: 0.9,
            w: 0.6,
            h: 0.6,
            o: 1
        }, {
            x: 0.4,
            y: 0.9,
            w: 0.6,
            h: 0.6,
            o: 1
        }, {
            x: 0.4,
            y: 0.8,
            w: 0.6,
            h: 0.6,
            o: 1
        }, {
            x: 0.4,
            y: 0.7,
            w: 0.6,
            h: 0.6,
            o: 1
        }, {
            x: 0.4,
            y: 0.6,
            w: 0.6,
            h: 0.6,
            o: 1
        }, {
            x: 0.4,
            y: 0.5,
            w: 0.6,
            h: 0.6,
            o: 1
        }, {
            x: 0.4,
            y: 0.4,
            w: 0.6,
            h: 0.6,
            o: 1
        }];
        n.run = function(t, r, i, o) {
            var a = n.types[j() ? 'none' : e.animation];
            if (i === !0) {
                o = (typeof o !== 'undefined') ? o : a.length - 1
            } else {
                o = (typeof o !== 'undefined') ? o : 0
            };
            r = (r) ? r : function() {};
            if ((o < a.length) && (o >= 0)) {
                p[e.type](A(t, a[o]));
                I = setTimeout(function() {
                    if (i) {
                        o = o - 1
                    } else {
                        o = o + 1
                    };
                    n.run(t, r, i, o)
                }, n.duration);
                y.setIcon(u)
            } else {
                r();
                return
            }
        };
        k();
        return {
            badge: T,
            video: O,
            image: U,
            rawImageSrc: R,
            webcam: S,
            setOpt: L,
            reset: f.reset,
            browser: {
                supported: a.supported
            }
        }
    });
    if (typeof define !== 'undefined' && define.amd) {
        define([], function() {
            return e
        })
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = e
    } else {
        this.Favico = e
    }
})();
! function(t, e) {
    'use strict';
    var n = function(t, e, n) {
        var i;
        return function() {
            function s() {
                n || t.apply(a, r), i = null
            };
            var a = this,
                r = arguments;
            i ? clearTimeout(i) : n && t.apply(a, r), i = setTimeout(s, e || 100)
        }
    };
    jQuery.fn[e] = function(t) {
        return t ? this.bind('resize', n(t)) : this.trigger(e)
    }
}(jQuery, 'smartresize'),
function(t) {
    'use strict';

    function s() {
        this.reset()
    };
    var i, e = document.documentElement.style,
        p = e.textWrap || e.WebkitTextWrap || e.MozTextWrap || e.MsTextWrap || e.OTextWrap;
    s.prototype.reset = function() {
        this.index = 0, this.width = 0
    };
    var l = function(t, e) {
            var n, a = /\s(?![^<]*>)/g;
            if (!i)
                for (i = []; null !== (n = a.exec(t));) i.push(n.index);
            return -1 !== i.indexOf(e)
        },
        o = function(e) {
            e.find('br[data-owner="balance-text"]').replaceWith(' ');
            var i = e.find('span[data-owner="balance-text"]');
            if (i.length > 0) {
                var n = '';
                i.each(function() {
                    n += t(this).text(), t(this).remove()
                }), e.html(n)
            }
        },
        d = function(t) {
            return e = t.get(0).currentStyle || window.getComputedStyle(t.get(0), null), 'justify' === e.textAlign
        },
        h = function(e, n, a) {
            n = t.trim(n);
            var r = n.split(' ').length;
            if (n += ' ', 2 > r) return n;
            var i = t('<span></span>').html(n);
            e.append(i);
            var l = i.width();
            i.remove();
            var s = Math.floor((a - l) / (r - 1));
            return i.css('word-spacing', s + 'px').attr('data-owner', 'balance-text'), t('<div></div>').append(i).html()
        },
        u = function(t, e) {
            return 0 === e || e === t.length || l(t, e - 1) && !l(t, e)
        },
        a = function(t, e, a, s, r, n, l) {
            var i;
            if (e && 'string' == typeof e)
                for (;;) {
                    for (; !u(e, n);) n += r;
                    if (t.html(e.substr(0, n)), i = t.width(), 0 > r ? s >= i || 0 >= i || 0 === n : i >= s || i >= a || n === e.length) break;
                    n += r
                };
            l.index = n, l.width = i
        },
        c = function(e, n) {
            var t = document.createElement('div');
            t.style.display = 'block', t.style.position = 'absolute', t.style.bottom = 0, t.style.right = 0, t.style.width = 0, t.style.height = 0, t.style.margin = 0, t.style.padding = 0, t.style.visibility = 'hidden', t.style.overflow = 'hidden';
            var i = document.createElement('span');
            i.style.fontSize = '2000px', i.innerHTML = '&nbsp;', t.appendChild(i), e.append(t);
            var a = i.getBoundingClientRect();
            t.parentNode.removeChild(t);
            var r = a.height / a.width;
            return n / r
        },
        n = {
            sel: ['.balance-text'],
            $el: t()
        },
        r = function() {
            n.$el.add(n.sel.join(',')).balanceText()
        };
    t.fn.balanceTextUpdate = r, t.balanceText = function(e) {
        'string' == typeof e ? n.sel.push(e) : n.$el = n.$el.add(e), t(e).balanceText()
    }, t.fn.balanceText = function() {
        return p ? this : this.each(function() {
            var e = t(this),
                H = 5e3;
            o(e);
            var M = this.style.whiteSpace,
                j = this.style['float'],
                z = this.style.display,
                C = this.style.position,
                E = this.style.lineHeight;
            e.css('line-height', 'normal');
            var l = e.width(),
                S = e.height();
            e.css({
                'white-space': 'nowrap',
                'float': 'none',
                display: 'inline',
                position: 'static'
            });
            var x = e.width(),
                b = e.height(),
                T = 'pre-wrap' === M ? 0 : c(e, b);
            if (l > 0 && x > l && H > x) {
                for (var n = e.html(), y = '', g = '', m = d(e), W = Math.round(S / b), v = W; v > 1;) {
                    i = null;
                    var p = Math.round((x + T) / v - T),
                        f = Math.round((n.length + 1) / v) - 1,
                        r = new s;
                    a(e, n, l, p, -1, f, r);
                    var u = new s;
                    f = r.index, a(e, n, l, p, 1, f, u), r.reset(), f = u.index, a(e, n, l, p, -1, f, r);
                    var w;
                    w = 0 === r.index ? u.index : l < u.width || r.index === u.index ? r.index : Math.abs(p - r.width) < Math.abs(u.width - p) ? r.index : u.index, g = n.substr(0, w), m ? y += h(e, g, l) : (y += g.replace(/\s$/, ''), y += '<br data-owner="balance-text" />'), n = n.substr(w), v--, e.html(n), x = e.width()
                };
                m ? e.html(y + h(e, n, l)) : e.html(y + n)
            };
            this.style.whiteSpace = M, this.style['float'] = j, this.style.display = z, this.style.position = C, this.style.lineHeight = E
        })
    }, t(window).ready(r), t(window).smartresize(r)
}(jQuery);
/*!
 * jQuery doTimeout: Like setTimeout, but better - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(e) {
    '$:nomunge';
    var n = {},
        t = 'doTimeout',
        i = Array.prototype.slice;
    e[t] = function() {
        return f.apply(window, [0].concat(i.call(arguments)))
    };
    e.fn[t] = function() {
        var e = i.call(arguments),
            n = f.apply(this, [t + e[0]].concat(e));
        return typeof e[0] === 'number' || typeof e[1] === 'number' ? this : n
    };

    function f(f) {
        var s = this,
            u, t = {},
            m = f ? e.fn : e,
            a = arguments,
            d = 4,
            o = a[1],
            c = a[2],
            r = a[3];
        if (typeof o !== 'string') {
            d--;
            o = f = 0;
            c = a[1];
            r = a[2]
        };
        if (f) {
            u = s.eq(0);
            u.data(f, t = u.data(f) || {})
        } else if (o) {
            t = n[o] || (n[o] = {})
        };
        t.id && clearTimeout(t.id);
        delete t.id;

        function l() {
            if (f) {
                u.removeData(f)
            } else if (o) {
                delete n[o]
            }
        };

        function p() {
            t.id = setTimeout(function() {
                t.fn()
            }, c)
        };
        if (r) {
            t.fn = function(e) {
                if (typeof r === 'string') {
                    r = m[r]
                };
                r.apply(s, i.call(a, d)) === !0 && !e ? p() : l()
            };
            p()
        } else if (t.fn) {
            c === undefined ? l() : t.fn(c === !1);
            return !0
        } else {
            l()
        }
    }
})(jQuery);
/*!
 * jQuery outside events - v1.1 - 3/16/2010
 * http://benalman.com/projects/jquery-outside-events-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(e, t, u) {
    '$:nomunge';
    e.map('click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup'.split(' '), function(e) {
        n(e)
    });
    n('focusin', 'focus' + u);
    n('focusout', 'blur' + u);
    e.addOutsideEvent = n;

    function n(n, i) {
        i = i || n + u;
        var o = e(),
            s = n + '.' + i + '-special-event';
        e.event.special[i] = {
            setup: function() {
                o = o.add(this);
                if (o.length === 1) {
                    e(t).bind(s, a)
                }
            },
            teardown: function() {
                o = o.not(this);
                if (o.length === 0) {
                    e(t).unbind(s)
                }
            },
            add: function(e) {
                var t = e.handler;
                e.handler = function(e, n) {
                    e.target = n;
                    t.apply(this, arguments)
                }
            }
        };

        function a(t) {
            e(o).each(function() {
                var n = e(this);
                if (this !== t.target && !n.has(t.target).length) {
                    n.triggerHandler(i, [t.target])
                }
            })
        }
    }
})(jQuery, document, 'outside');
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-csstransitions-inputtypes-localstorage-svg-setclasses */
! function(t, e, a) {
    function l(e, t) {
        return typeof e === t
    };

    function b() {
        var o, e, a, r, s, u, t;
        for (var i in c)
            if (c.hasOwnProperty(i)) {
                if (o = [], e = c[i], e.name && (o.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (a = 0; a < e.options.aliases.length; a++) o.push(e.options.aliases[a].toLowerCase());
                for (r = l(e.fn, 'function') ? e.fn() : e.fn, s = 0; s < o.length; s++) u = o[s], t = u.split('.'), 1 === t.length ? n[t[0]] = r : (!n[t[0]] || n[t[0]] instanceof Boolean || (n[t[0]] = new Boolean(n[t[0]])), n[t[0]][t[1]] = r), h.push((r ? '' : 'no-') + t.join('-'))
            }
    };

    function P(e) {
        var t = s.className,
            o = n._config.classPrefix || '';
        if (p && (t = t.baseVal), n._config.enableJSClass) {
            var a = new RegExp('(^|\\s)' + o + 'no-js(\\s|$)');
            t = t.replace(a, '$1' + o + 'js$2')
        };
        n._config.enableClasses && (t += ' ' + o + e.join(' ' + o), p ? s.className.baseVal = t : s.className = t)
    };

    function u() {
        return 'function' != typeof e.createElement ? e.createElement(arguments[0]) : p ? e.createElementNS.call(e, 'http://www.w3.org/2000/svg', arguments[0]) : e.createElement.apply(e, arguments)
    };

    function x(e, t) {
        return !!~('' + e).indexOf(t)
    };

    function E(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, '')
    };

    function k(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };

    function N(e, t, n) {
        var o;
        for (var a in e)
            if (e[a] in t) return n === !1 ? e[a] : (o = t[e[a]], l(o, 'function') ? k(o, n || t) : o);
        return !1
    };

    function w(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return '-' + t.toLowerCase()
        }).replace(/^ms-/, '-ms-')
    };

    function A() {
        var t = e.body;
        return t || (t = u(p ? 'svg' : 'body'), t.fake = !0), t
    };

    function z(t, n, o, l) {
        var r, d, c, f, p = 'modernizr',
            i = u('div'),
            a = A();
        if (parseInt(o, 10))
            for (; o--;) c = u('div'), c.id = l ? l[o] : p + (o + 1), i.appendChild(c);
        return r = u('style'), r.type = 'text/css', r.id = 's' + p, (a.fake ? a : i).appendChild(r), a.appendChild(i), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(e.createTextNode(t)), i.id = p, a.fake && (a.style.background = '', a.style.overflow = 'hidden', f = s.style.overflow, s.style.overflow = 'hidden', s.appendChild(a)), d = n(i, t), a.fake ? (a.parentNode.removeChild(a), s.style.overflow = f, s.offsetHeight) : i.parentNode.removeChild(i), !!d
    };

    function j(e, n) {
        var r = e.length;
        if ('CSS' in t && 'supports' in t.CSS) {
            for (; r--;)
                if (t.CSS.supports(w(e[r]), n)) return !0;
            return !1
        };
        if ('CSSSupportsRule' in t) {
            for (var o = []; r--;) o.push('(' + w(e[r]) + ':' + n + ')');
            return o = o.join(' or '), z('@supports (' + o + ') { #modernizr { position: absolute; } }', function(e) {
                return 'absolute' == getComputedStyle(e, null).position
            })
        };
        return a
    };

    function V(e, t, n, s) {
        function c() {
            p && (delete r.style, delete r.modElem)
        };
        if (s = l(s, 'undefined') ? !1 : s, !l(n, 'undefined')) {
            var y = j(e, n);
            if (!l(y, 'undefined')) return y
        };
        for (var p, i, d, o, f, m = ['modernizr', 'tspan', 'samp']; !r.style && m.length;) p = !0, r.modElem = u(m.shift()), r.style = r.modElem.style;
        for (d = e.length, i = 0; d > i; i++)
            if (o = e[i], f = r.style[o], x(o, '-') && (o = E(o)), r.style[o] !== a) {
                if (s || l(n, 'undefined')) return c(), 'pfx' == t ? o : !0;
                try {
                    r.style[o] = n
                } catch (g) {};
                if (r.style[o] != f) return c(), 'pfx' == t ? o : !0
            };
        return c(), !1
    };

    function C(e, t, n, a, s) {
        var o = e.charAt(0).toUpperCase() + e.slice(1),
            r = (e + ' ' + g.join(o + ' ') + o).split(' ');
        return l(t, 'string') || l(t, 'undefined') ? V(r, t, a, s) : (r = (e + ' ' + m.join(o + ' ') + o).split(' '), N(r, t, n))
    };

    function S(e, t, n) {
        return C(e, a, a, t, n)
    };
    var h = [],
        c = [],
        i = {
            _version: '3.3.1',
            _config: {
                classPrefix: '',
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                c.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                c.push({
                    name: null,
                    fn: e
                })
            }
        },
        n = function() {};
    n.prototype = i, n = new n, n.addTest('svg', !!e.createElementNS && !!e.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect), n.addTest('localstorage', function() {
        var e = 'modernizr';
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    });
    var s = e.documentElement,
        p = 'svg' === s.nodeName.toLowerCase();
    n.addTest('audio', function() {
        var t = u('audio'),
            e = !1;
        try {
            (e = !!t.canPlayType) && (e = new Boolean(e), e.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''), e.mp3 = t.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ''), e.opus = t.canPlayType('audio/ogg; codecs="opus"') || t.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ''), e.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''), e.m4a = (t.canPlayType('audio/x-m4a;') || t.canPlayType('audio/aac;')).replace(/^no$/, ''))
        } catch (n) {};
        return e
    });
    var o = u('input'),
        T = 'search tel url email datetime date month week time datetime-local number range color'.split(' '),
        v = {};
    n.inputtypes = function(t) {
        for (var r, l, n, c = t.length, u = '1)', i = 0; c > i; i++) o.setAttribute('type', r = t[i]), n = 'text' !== o.type && 'style' in o, n && (o.value = u, o.style.cssText = 'position:absolute;visibility:hidden;', /^range$/.test(r) && o.style.WebkitAppearance !== a ? (s.appendChild(o), l = e.defaultView, n = l.getComputedStyle && 'textfield' !== l.getComputedStyle(o, null).WebkitAppearance && 0 !== o.offsetHeight, s.removeChild(o)) : /^(search|tel)$/.test(r) || (n = /^(url|email)$/.test(r) ? o.checkValidity && o.checkValidity() === !1 : o.value != u)), v[t[i]] = !!n;
        return v
    }(T);
    var y = 'Moz O ms Webkit',
        g = i._config.usePrefixes ? y.split(' ') : [];
    i._cssomPrefixes = g;
    var m = i._config.usePrefixes ? y.toLowerCase().split(' ') : [];
    i._domPrefixes = m;
    var f = {
        elem: u('modernizr')
    };
    n._q.push(function() {
        delete f.elem
    });
    var r = {
        style: f.elem.style
    };
    n._q.unshift(function() {
        delete r.style
    }), i.testAllProps = C, i.testAllProps = S, n.addTest('csstransitions', S('transition', 'all', !0)), b(), P(h), delete i.addTest, delete i.addAsyncTest;
    for (var d = 0; d < n._q.length; d++) n._q[d]();
    t.Modernizr = n
}(window, document);;
var __app = __app || {};
__app.aos = {
    __deps: [],
    options: {
        className: 'page-aos',
        easing: 'ease-out-back',
        duration: 1300,
    },
    init: function() {
        var a = this,
            s = __app.__html;
        if (!s.hasClass(a.options.className)) {
            s.addClass(a.options.className)
        };
        AOS.init({
            easing: a.options.easing,
            duration: a.options.duration,
            disable: 'mobile',
        })
    },
    remove: function() {
        $('[data-aos]').each(function() {
            var a = $(this);
            a.removeAttr('data-aos').removeAttr('data-aos-duration').removeAttr('data-aos-offset').removeAttr('data-aos-delay')
        });
        __app.__html.removeClass(_self.options.className);
        AOS.refreshHard()
    },
    __run: function() {
        var a = this;
        if (__app.__html.hasClass(a.options.className)) {
            a.init()
        };
        __app.__document.on('shown.bs.collapse hidden.bs.collapse', function() {
            if (__app.__html.hasClass(a.options.className)) {
                AOS.refreshHard()
            }
        })
    }
};;
var __app = __app || {};
__app.audiobook = {
    __deps: ['utils', 'sounds', 'prefs'],
    options: {
        selector: 'audio.audiobook',
        sound: 'audiobook',
        playerId: 'audiobook-player',
        toolbarSelector: '[role="toolbar"]',
        iconSelector: '.fa',
        download: !0,
        speed: {
            min: 0.5,
            max: 1.75,
            step: .25
        },
        step: 10,
        actions: {
            main: {
                play: {
                    title: 'Jouer / Pause',
                    icon: 'fa-play',
                    pauseIcon: 'fa-pause',
                    accessKey: 'P'
                },
                restart: {
                    title: 'Relancer',
                    icon: 'fa-repeat',
                    accessKey: 'S'
                }
            },
            steps: {
                backward: {
                    title: 'Reculer de 10 secondes',
                    icon: 'fa-step-backward',
                    accessKey: 'R'
                },
                forward: {
                    title: 'Avancer de 10 secondes',
                    icon: 'fa-step-forward',
                    accessKey: 'A'
                }
            },
            speed: {
                decrease: {
                    title: 'Ralentir la lecture',
                    icon: 'fa-chevron-down',
                    accessKey: 'L'
                },
                increase: {
                    title: 'Accélérer la lecture',
                    icon: 'fa-chevron-up',
                    accessKey: 'C'
                }
            },
            volume: {
                classes: 'pull-right',
                volume: {
                    title: 'Volume',
                    icon: 'fa-volume-up',
                    accessKey: 'V',
                    medium: {
                        value: 0.5,
                        title: 'Volume moyen',
                        icon: 'fa-volume-down'
                    },
                    full: {
                        value: 1,
                        title: 'Plein volume',
                        icon: 'fa-volume-up'
                    },
                    low: {
                        value: 0.15,
                        title: 'Volume réduit',
                        icon: 'fa-volume-off'
                    }
                }
            }
        },
        strings: {
            status: {
                playing: 'Lecture',
                paused: 'Pause',
                loading: 'Chargement…',
                ready: 'Prêt',
                ended: 'Terminée',
                buffering: 'Chargement…'
            }
        },
        templates: {
            time: '<span class="elapsed">__elapsed__</span><span class="over hidden-xs"> / </span><span class="duration hidden-xs">__duration__</span>',
            speed: '<span class="hidden-xs">Vitesse : </span><span class="value">__speed__x</span>',
            player: '<div class="player" id="__id__"><div class="player-seekbar"><input type="range" accesskey="B" min="0" max="0" step="1" value="0" disabled="disabled"><span class="sr-only readable-progress" aria-live="polite"></span></div><div class="btn-toolbar" role="toolbar"></div><div class="player-infos row"><div class="col-xs-4 player-time"></div><div class="col-xs-4 player-speed" aria-live="assertive"></div><div class="col-xs-4 player-status" aria-live="polite">Chargement…</div></div></div>',
            buttonGroup: '<div class="btn-group player-group-__group__"></div>',
            button: '<button disabled="disabled" class="btn btn-default" accesskey="__shortcut__" type="button" title="__title__"><span class="sr-only">__title__</span><i class="fa fa-fw" aria-hidden="true"></i></button>',
            download: '<a disabled="disabled" download href="__href__" title="Télécharger le fichier sonore" class="btn btn-default"><span class="sr-only">Télécharger le fichier sonore de cette lecture</span><i class="fa fa-fw fa-download" aria-hidden="true"></i></a>',
        }
    },
    _oAudio: null,
    _player: null,
    _playing: !1,
    _rangeDragging: !1,
    _volumeState: 'full',
    _downloadLink: null,
    _normalTime: null,
    _bufferTime: null,
    _hammerTime: 'Can\'t touch this!',
    play: function() {
        var a = this;
        __app.sounds.play('audiobook', !0, a._updateTime);
        a._updatePlayButton()
    },
    restart: function() {
        var a = this;
        __app.sounds.restart('audiobook')
    },
    volume: function() {
        var t = this,
            e = ['low', 'medium', 'full'],
            a = e.indexOf(t._volumeState);
        ++a;
        if (a >= e.length) {
            a = 0
        };
        t._switchVolume(e[a])
    },
    increase: function() {
        var a = this,
            t = __app.sounds.getPlaybackRate(a.options.sound);
        if (t < a.options.speed.max) {
            var e = t + a.options.speed.step;
            __app.sounds.setPlaybackRate(a.options.sound, e);
            __app.prefs.set('audiobook_playback_rate', e)
        };
        a._updateSpeed()
    },
    decrease: function() {
        var a = this,
            t = __app.sounds.getPlaybackRate(a.options.sound);
        if (t > a.options.speed.min) {
            var e = t - a.options.speed.step;
            __app.sounds.setPlaybackRate(a.options.sound, e);
            __app.prefs.set('audiobook_playback_rate', e)
        };
        a._updateSpeed()
    },
    seek: function(a) {
        var e = this;
        __app.sounds.seek(e.options.sound, a)
    },
    forward: function() {
        var a = this;
        __app.sounds.advance(a.options.sound, a.options.step);
        a._updateAll()
    },
    backward: function() {
        var a = this;
        __app.sounds.rewind(a.options.sound, a.options.step);
        a._updateAll()
    },
    _switchVolume: function(a) {
        var e = this,
            a = a || 0,
            t = e.options.actions.volume.volume[a] || null;
        if (null == t) {
            throw new Error('Invalid volume state: ' + a)
        };
        e._changeIcon('volume', t.icon);
        e._changeTitle('volume', t.title);
        __app.sounds.setVolume(t.value, e.options.sound);
        e._volumeState = a;
        __app.prefs.set('audiobook_volume_state', a)
    },
    _updateAll: function() {
        var a = this,
            e = a.options.sound,
            t = __app.sounds.getPosition(e),
            o = __app.sounds.getDuration(e),
            s = a._playing ? a.options.strings.status.playing : a.options.strings.status.paused;
        a._updateTime(t, o);
        a._updateSpeed();
        a._updateStatus(s);
        a._updatePlayButton();
        a._updateSpeedButtons();
        a._updateStepButtons()
    },
    _checkBuffering: function() {
        var a = this;
        if (!a._playing) {
            return
        };
        a._bufferTime = (new Date()).getTime();
        if (Math.abs(a._normalTime - a._bufferTime) > 1000) {
            a._updateStatus(a.options.strings.status.buffering)
        }
    },
    _updateTime: function(a, t) {
        var e = __app.audiobook,
            a = Math.round(a),
            t = Math.round(t),
            o = e._player.find('input[type="range"]'),
            s = __app.utils.template(e.options.templates.time, {
                elapsed: e._timeFormat(a),
                duration: e._timeFormat(t)
            });
        if (!e._rangeDragging) {
            o.attr('min', 0).attr('max', t).val(a)
        };
        e._player.find('.player-time').html(s);
        e._player.find('.readable-progress').text(a + ' secondes');
        e._updateStepButtons();
        if (e._playing) {
            e._normalTime = (new Date()).getTime()
        }
    },
    _updateSpeed: function() {
        var a = this,
            e = __app.sounds.getPlaybackRate(a.options.sound),
            t = __app.utils.template(a.options.templates.speed, {
                speed: e
            });
        a._player.find('.player-speed').html(t);
        a._updateSpeedButtons()
    },
    _updateStatus: function(a) {
        var e = this;
        e._player.find('.player-status').text(a)
    },
    _updateSpeedButtons: function() {
        var a = this,
            e = a._player.find('[data-player-action="increase"]'),
            t = a._player.find('[data-player-action="decrease"]'),
            o = __app.sounds.getPlaybackRate(a.options.sound);
        e.removeAttr('disabled');
        t.removeAttr('disabled');
        if (o <= a.options.speed.min) {
            t.attr('disabled', !0)
        };
        if (o >= a.options.speed.max) {
            e.attr('disabled', !0)
        }
    },
    _updatePlayButton: function() {
        var a = this;
        a._changeIcon('play', a._playing ? a.options.actions.main.play.pauseIcon : a.options.actions.main.play.icon)
    },
    _updateStepButtons: function() {
        var a = this,
            e = a._player.find('[data-player-action="forward"]'),
            t = a._player.find('[data-player-action="backward"]'),
            o = __app.sounds.getPosition(a.options.sound),
            s = __app.sounds.getDuration(a.options.sound);
        e.removeAttr('disabled');
        t.removeAttr('disabled');
        if (o <= 0) {
            t.attr('disabled', !0)
        };
        if (o >= s) {
            e.attr('disabled', !0)
        }
    },
    _changeIcon: function(a, e) {
        var t = this,
            o = t._player.find('[data-player-action="' + a + '"]').find(t.options.iconSelector);
        o.removeClass().addClass(o.attr('data-original-class')).addClass(e)
    },
    _changeTitle: function(a, e) {
        var t = this,
            a = t._player.find('[data-player-action="' + a + '"]');
        newTitle = a.is('[accesskey]') ? e + ' [' + a.attr('accesskey') + ']' : e;
        a.attr('title', newTitle)
    },
    _timeFormat: function(a) {
        var o = Math.floor(a / 3600);
        a %= 3600;
        var t = Math.floor(a / 60);
        a = a % 60;
        var e = [__app.utils.pad(a)];
        e.unshift(__app.utils.pad(t));
        if (o > 0) {
            e.unshift(__app.utils.pad(t))
        };
        return e.join(':')
    },
    _registerAudioEvents: function() {
        var a = this;
        __app.__document.on('click', '.audiobook-collapser', function(e) {
            __app.sounds.activate(a.options.sound)
        }).on('app:sounds:ready', function(e) {
            if (e.id == a.options.sound) {
                a._player.removeClass('loading').find('[disabled]').removeAttr('disabled');
                a._switchVolume(__app.prefs.get('audiobook_volume_state', 'full'));
                __app.sounds.setPlaybackRate(a.options.sound, __app.prefs.get('audiobook_playback_rate', 1));
                a._updateAll()
            }
        }).on('app:sounds:playing app:sounds:resumed', function(e) {
            if (e.id == a.options.sound) {
                a._playing = !0;
                a._updateAll()
            }
        }).on('app:sounds:paused app:sounds:ended app:sounds:stopped', function(e) {
            if (e.id == a.options.sound) {
                a._playing = !1;
                a._updateAll()
            }
        }).on('app:sounds:ended', function(e) {
            if (e.id == a.options.sound) {
                a._updateStatus(a.options.strings.status.ended)
            }
        })
    },
    _buildToolbar: function(a) {
        var e = this;
        if (1 != a.length) {
            throw new Error('Invalid Toolbar in player template.')
        };
        e.__log('Building toolbar');
        $.each(e.options.actions, function(t, o) {
            var i = $(__app.utils.template(e.options.templates.buttonGroup, {
                group: t
            }));
            e.__log('[Toolbar] Group: ' + t);
            if (o.classes) {
                i.addClass(o.classes)
            };
            for (var s in o) {
                if (o.hasOwnProperty(s) && 'object' == typeof o[s]) {
                    var n = o[s];
                    html = __app.utils.template(e.options.templates.button, {
                        title: n.title + ' [' + n.accessKey + ']',
                        action: s,
                        shortcut: n.accessKey
                    }), button = $(html), icon = button.find(e.options.iconSelector);
                    icon.attr('data-original-class', icon.attr('class')).addClass(n.icon);
                    button.attr('data-player-action', s).appendTo(i);
                    e.__log('[Toolbar] + Action: ' + s)
                }
            };
            i.appendTo(a)
        });
        if (e.options.download) {
            var t = $(__app.utils.template(e.options.templates.buttonGroup, {
                group: 'download'
            }));
            link = $(__app.utils.template(e.options.templates.download, {
                href: e._downloadLink
            }));
            t.append(link).appendTo(a);
            e.__log('[Toolbar] Adding download link')
        }
    },
    _buildPlayer: function(e) {
        var a = this;
        a.__log('Initializing audiobook player');
        if (a.options.download) {
            a._downloadLink = e.find('source[type="audio/mpeg"]').attr('src')
        };
        var s = __app.utils.template(a.options.templates.player, {
            id: a.options.playerId
        });
        a._player = $(s);
        a._player.addClass('loading');
        if (!Modernizr.inputtypes.range) {
            a._player.addClass('no-range-seekbar')
        };
        a._buildToolbar(a._player.find(a.options.toolbarSelector));
        e.hide().after(a._player);
        a.oAudio = e.get(0);
        a._registerAudioEvents();
        __app.sounds.manage(a.options.sound, a.oAudio);
        if (Modernizr.inputtypes.range) {
            var t = '#' + a.options.playerId + ' .player-seekbar input[type="range"]';
            __app.__document.on('change', t, function(e) {
                a.seek($(this).val())
            }).on('mousedown', t, function() {
                a._rangeDragging = !0
            }).on('mouseup', t, function() {
                a._rangeDragging = !1
            })
        };
        var o = '#' + a.options.playerId + ' ' + a.options.toolbarSelector + ' [data-player-action]';
        __app.__document.on('click', o, function(e) {
            var t = $(this),
                o = t.attr('data-player-action');
            a[o]();
            t.blur()
        })
    },
    __run: function() {
        if (!Modernizr.audio) {
            return
        };
        var a = this,
            e = $(a.options.selector).first();
        if (0 == e.length) {
            a.__log('No audiobook to play.');
            return
        };
        a._buildPlayer(e)
    }
};;
var __app = __app || {};
__app.backLinks = {
    __deps: ['totalLoading'],
    options: {
        selector: '[data-back-url]'
    },
    __run: function() {
        var a = this;
        __app.__document.on('click', a.options.selector, function(a) {
            a.preventDefault();
            __app.totalLoading.start();
            window.history.back()
        })
    }
};;
var __app = __app || {};
__app.backToTop = {
    __deps: ['scroll'],
    options: {
        selector: '#back-to-top'
    },
    __run: function() {
        var a = this,
            o = $('#back-to-top');
        if (o.length > 0 && o.get(0).getBoundingClientRect) {
            var e = $('.jumbotron').get(0),
                n = $('.navbar-fixed-top').outerHeight(),
                t = function() {
                    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                        o.addClass('rock-bottom')
                    } else {
                        o.removeClass('rock-bottom')
                    };
                    var t = e.getBoundingClientRect();
                    if (t.bottom <= n) {
                        o.addClass('in')
                    } else {
                        o.removeClass('in')
                    }
                };
            __app.scroll.addHandler(t, 'back-to-top');
            t();
            __app.__document.on('click', '#back-to-top', function() {
                $(this).removeClass('rock-bottom')
            })
        }
    }
};;
var __app = __app || {};
__app.bonus = {
    __deps: ['totalLoading', 'dialogs', 'sounds', 'konami'],
    events: {
        started: 'app:bonus:started',
        stopped: 'app:bonus:stopped',
        ended: 'app:bonus:ended'
    },
    options: {
        trigger: '[data-special]',
        rootClass: 'very-special',
        sound: 'special',
    },
    _backdrop: null,
    _loaded: !1,
    _running: !1,
    _scrolled: !1,
    _update: function() {
        var e = __app.bonus;
        if (!e._running) {
            return
        };
        e._scrolled = 0 != e._backdrop.scrollTop();
        var a = __app.__window.height();
        e._backdrop.find('.scrollable').each(function() {
            var t = $(this),
                n = this.getBoundingClientRect();
            if (Math.floor(n.bottom) <= a && n.bottom > 0.05 * a) {
                t.addClass('in-viewport').removeClass('not-in-viewport');
                if ('cant-stenchon' == t.attr('id') && !t.is('[data-playing]')) {
                    t.attr('data-playing', !0);
                    __app.sounds.play(e.options.sound)
                }
            } else {
                t.addClass('not-in-viewport').removeClass('in-viewport');
                if (t.is('[data-playing]')) {
                    __app.sounds.stop('special');
                    t.removeAttr('data-playing')
                }
            }
        })
    },
    _buildElements: function() {
        var t = this,
            i = ['crown', 'keep', 'calm', 'and', 'vote', 'melenchon'],
            e = $('<div class="special-backdrop"/>'),
            o = $('<div class="container-fluid"/>');
        cantstenchon = $('<div id="cant-stenchon" class="scrollable"><img class="img-content-drop-shadow" src="/static/special/cant-stenchon.png"><img class="layer" id="deal-with-it" src="/static/special/layer-deal-with-it.png"><img class="layer" id="thug-life" src="/static/special/layer-thug-life.png"><img class="layer" id="petard" src="/static/special/layer-petard.png"></div>');
        credits = $('<div id="credits" class="scrollable"><p class="semi-lead">Avec les compliments de <a class="external" href="https://twitter.com/TintinCastrol" title="Votre dévoué serviteur">TintinCastro</a></p></div>');
        t.__log('Adding Elements to DOM');
        for (var a = 0; a < i.length; ++a) {
            var n = i[a],
                s = '/static/special/' + a + '-' + n;
            img = $('<img width="2500"/>').attr('src', s + (Modernizr.svg ? '.svg' : '.png')).addClass('img-responsive img-responsive-center img-responsive-svg-fix img-content-drop-shadow'), wrapper = $('<div/>');
            wrapper.attr('id', n).addClass('message-item scrollable').append(img).appendTo(o)
        };
        o.append(cantstenchon).append(credits).appendTo(e);
        e.appendTo(__app.__body);
        t._backdrop = e;
        if (e.get(0).getBoundingClientRect) {
            e.addClass('scroll-capable out').on('scroll', __app.utils.throttle(t._update, 150)).find('scrollable').addClass('not-in-viewport');
            __app.__window.on('resize', __app.utils.throttle(t._update, 400))
        }
    },
    start: function() {
        var e = this;
        if (e._running) {
            e.__log('Already running!');
            return
        };
        if (!e._loaded) {
            e._preload();
            return
        };
        e._backdrop.scrollTop(0);
        e._scrolled = !1;
        __app.__html.addClass(e.options.rootClass);
        e._running = !0;
        $.event.trigger(e.events.started);
        $.doTimeout(2000, function() {
            e._update()
        });
        $.doTimeout(5000, function() {
            var t = __app.__window.height(),
                a = e._backdrop.find('.container-fluid').first().outerHeight();
            if (!e._scrolled && a > t) {
                e.__log('Autoscroll engaged!');
                e._backdrop.animate({
                    scrollTop: a - t
                }, a * 3, 'linear')
            }
        })
    },
    stop: function(e) {
        var a = this;
        a._running = !1;
        __app.sounds.stop('special');
        __app.__html.removeClass(a.options.rootClass);
        $.event.trigger(e ? a.events.ended : a.events.stopped);
        $.doTimeout(500, function() {})
    },
    _preload: function() {
        var e = this;
        __app.totalLoading.start();
        __app.sounds.add('special');
        __app.sounds.activate('special');
        e._buildElements();
        var a = Modernizr.svg ? '.svg' : '.png',
            t = ['/static/special/cant-stenchon.png', '/static/special/layer-deal-with-it.png', '/static/special/layer-petard.png', '/static/special/layer-thug-life.png', '/static/special/0-crown' + a, '/static/special/1-keep' + a, '/static/special/2-calm' + a, '/static/special/3-and' + a, '/static/special/4-vote' + a, '/static/special/5-melenchon' + a, ],
            n = function() {
                var a = t.shift();
                $('<img/>').on('load', function() {
                    if (t.length > 0) {
                        n();
                        return
                    };
                    e._loaded = !0;
                    __app.totalLoading.stop();
                    e.start()
                }).on('error', function() {
                    __app.totalLoading.stop();
                    __app.dialogs.error('Zut, fichier introuvable !');
                    __app.log('[Bonus] Unable to preload: ' + a)
                }).attr('src', a)
            };
        e.__log('Preloading medias');
        n();
        __app.__document.on('keyup', function(a) {
            if (27 == a.keyCode) {
                e.stop()
            }
        });
        e._backdrop.on('dblclick doubletap', function(a) {
            e.stop()
        })
    },
    __run: function() {
        var e = this;
        $(e.options.trigger).css('cursor', 'help');
        __app.__document.on('click', e.options.trigger, function(a) {
            a.preventDefault();
            e.start()
        });
        __app.__document.on(__app.konami.events.triggered, function() {
            e.start()
        });
        __app.__document.on(__app.sounds.events.ended, function(a) {
            if (a.id == e.options.sound) {
                e.stop()
            }
        })
    }
};;
var __app = __app || {};
__app.bookmark = {
    __deps: [],
    events: {
        toggled: 'app:bookmark:toggled'
    },
    options: {},
    __run: function() {
        var a = this;
        __app.__document.on('click', '[data-bookmark-toggle]', function(o) {
            o.preventDefault();
            var e = $(this),
                s = e.attr('href') + '.json',
                i = e.attr('data-token'),
                t = e.find('.fa[data-bookmark-state-on]'),
                n = t.attr('data-bookmark-loading') + ' ' + t.attr('data-bookmark-state-on') + ' ' + t.attr('data-bookmark-state-off') + ' yay',
                r = function() {
                    e.removeClass('bookmark-toggle-loading');
                    t.removeClass(n).addClass(t.attr('data-bookmark-initial'))
                };
            t.removeClass(t.attr('data-bookmark-initial')).removeClass(n).addClass(t.attr('data-bookmark-loading'));
            $.ajax({
                url: s + '?_token=' + i,
                dataType: 'json',
                type: 'GET',
                error: function(a, t, e) {
                    r()
                },
                complete: function() {
                    e.blur()
                },
                success: function(o) {
                    r();
                    if (!o.success) {
                        return
                    };
                    var d = 'yay ' + t.attr('data-bookmark-state-' + o.data.state);
                    t.removeClass(n).addClass(d);
                    var s = e.parents('.modal-measure').first(),
                        i = {
                            type: a.events.toggled,
                            state: o.data.state,
                            source: s.length > 0 ? 'modal' : 'page',
                            measure: s.length > 0 ? s.attr('measure-index') : null
                        };
                    $.event.trigger(i);
                    if ('on' == o.data.state) {
                        e.addClass('active')
                    } else {
                        e.removeClass('active')
                    }
                }
            })
        });
        $(document).on('click', '[data-json-remove-link]', function(a) {
            a.preventDefault();
            var t = $(this),
                n = t.attr('href') + '.json',
                r = t.attr('data-token'),
                e = t.find('.fa[data-json-loading]'),
                o = function() {
                    t.blur();
                    e.removeClass(e.attr('data-json-loading'));
                    t.attr('disabled', null)
                };
            bootbox.confirm('Êtes-vous sur de vouloir supprimer cet élément ?', function(a) {
                if (!a) {
                    return
                };
                e.addClass(e.attr('data-json-loading'));
                t.attr('disabled', 'disabled');
                $.ajax({
                    url: n + '?_token=' + r,
                    dataType: 'json',
                    error: function(a, e, t) {
                        o();
                        __app.dialogs.error('Une erreur technique est survenue…' + t)
                    },
                    complete: function() {},
                    success: function(a) {
                        o();
                        if (a.success) {
                            var e = $(t.attr('data-remove-on-success'));
                            if (e.length > 0) {
                                if (Modernizr.csstransitions) {
                                    e.addClass('out').one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
                                        $(e).remove()
                                    })
                                } else {
                                    e.animate({
                                        marginTop: '-200px'
                                    }, 500, function() {
                                        e.remove()
                                    })
                                }
                            }
                        } else {
                            __app.dialogs.error(a.message || 'Une erreur technique est survenue…')
                        }
                    }
                })
            })
        })
    }
};;
var __app = __app || {};
__app.captcha = {
    options: {
        reloaderAttr: 'data-captcha-reload',
        codeAttr: 'data-captcha-code',
        formClassname: 'form-group-captcha'
    },
    __run: function() {
        var t = this;
        __app.__document.on('click', '[' + t.options.reloaderAttr + ']', function(a) {
            a.preventDefault();
            var r = $(this),
                e = $(r.attr(t.options.reloaderAttr)),
                o = r.attr(t.options.codeAttr),
                n = o + '?n=' + (new Date()).getTime();
            e.attr('src', n);
            r.blur()
        });
        __app.__document.on('keypress', '.' + t.options.formClassname, function(t) {
            var e = t.keyCode ? t.keyCode : t.which;
            if (13 != e) {
                return !0
            };
            var a = $(this),
                r = a.parents('form').first();
            if (r.length > 0) {
                r.submit();
                return !1
            };
            return !0
        })
    }
};;
var __app = __app || {};
__app.collapsables = {
    __deps: [],
    options: {},
    __run: function() {
        __app.__document.on('shown.bs.collapse', '.collapsable', function() {
            var t = $(this),
                a = $('.btn[data-target="#' + t.attr('id') + '"');
            if (a.length > 0) {
                a.addClass('active');
                a.blur()
            }
        });
        __app.__document.on('hidden.bs.collapse', '.collapsable', function() {
            var t = $(this),
                a = $('.btn[data-target="#' + t.attr('id') + '"');
            if (a.length > 0) {
                a.removeClass('active');
                a.blur()
            }
        });
        __app.__document.on('hidden.bs.collapse shown.bs.collapse', '.navbar-collapse', function() {
            var a = $(this);
            toggler = a.closest('.navbar').find('.navbar-toggle').first();
            toggler.blur()
        })
    }
};;
var __app = __app || {};
__app.confirm = {
    __deps: ["dialogs", "totalLoading"],
    options: {},
    __run: function() {
        __app.__document.on("click", "[data-confirm]", function(n) {
            n.preventDefault();
            var t = $(this),
                o = t.attr("href"),
                a = t.attr("data-token"),
                a = a ? ("?_token=" + a) : "";
            callback = function(t) {
                if (t) {
                    __app.totalLoading.start();
                    document.location.href = o + a
                }
            };
            __app.dialogs.confirm(t.attr("data-confirm") || "Voulez-vous vraiment continuer ?", t.attr("data-confirm-title") || t.attr("title") || "Attention l'ami-e !", callback, "Je confirme", "Non !")
        })
    }
};;
var __app = __app || {};
__app.dialogs = {
    options: {},
    confirm: function(i, o, a, t, n) {
        var a = 'function' == typeof a ? a : function(a) {},
            o = o || 'Confirmation',
            i = i || 'Êtes-vous sûr ?',
            e = {
                title: '<i class="fa fa-fw fa-warning"></i> ' + o,
                message: i,
                callback: a,
                buttons: {
                    cancel: {
                        label: '<i class="fa fa-fw fa-times"></i> ' + (n || 'Annuler')
                    },
                    confirm: {
                        label: '<i class="fa fa-fw fa-hand-o-right"></i> ' + (t || 'Confirmer'),
                        className: 'btn-default'
                    },
                }
            };
        if (!bootbox) {
            var f = confirm(o + '\n------------\n' + i);
            if ('function' == typeof a) {
                a(f)
            };
            return
        };
        bootbox.confirm(e)
    },
    error: function(a, i, o) {
        this._dialog('fire', a, i || 'Une erreur est survenue…', 'C\'est noté !', o)
    },
    notice: function(a, i, o) {
        this._dialog('info-circle', a, i || 'Attention…', 'Très bien', o)
    },
    _dialog: function(a, i, o, n, t) {
        var f = {
            message: i,
            title: '<i class="fa fa-fw fa-' + a + '" aria-hidden="true"></i> ' + o,
            buttons: {
                ok: {
                    label: (n || 'OK') + ' <i class="fa fa-fw fa-times" aria-hidden="true"></i>',
                    className: 'btn-default'
                },
            },
            callback: t,
            backdrop: !0
        };
        if (!bootbox) {
            alert(o + '\n------------\n' + i);
            if ('function' == typeof t) {
                t()
            };
            return
        };
        bootbox.alert(f)
    },
    __run: function() {
        var a = this;
        if (bootbox) {
            bootbox.setDefaults({
                locale: 'fr'
            })
        }
    }
};;
var __app = __app || {};
__app.disqus = {
    __deps: [],
    events: {
        ready: 'app:disqus:ready',
        commented: 'app:disqus:commented',
        authentified: 'app:disqus:authentified'
    },
    options: {
        containerId: 'commentaires-disqus',
        shortname: null,
        url: null,
        identifier: null,
        user: null,
    },
    install: function() {
        var t = this,
            i = __app.disqusConfiguration;
        if (!i) {
            return
        };
        $.extend(t.options, i);
        if (null == t.options.shortname) {
            throw new Error('shortname must be configured')
        };
        window.disqus_container_id = t.options.containerId || 'disqus_thread';
        window.disqus_config = t._disqusConfigCallback;
        t._createScript()
    },
    _createScript: function() {
        var t = this;
        if ($('#app-disqus-script-tag').length > 0) {
            t.__log('Script already installed');
            return
        };
        t.__log('Installing disqus script tag');
        $('<script id="app-disqus-script-tag"/>').attr('src', '//' + t.options.shortname + '.disqus.com/embed.js').attr('data-timestamp', new Date()).appendTo(body)
    },
    _onReady: function() {
        var t = __app.disqus;
        $.event.trigger(t.events.ready)
    },
    _onNewComment: function(t) {
        var i = __app.disqus;
        if ('object' == typeof t) {
            $.event.trigger({
                type: i.events.commented,
                comment: t.text,
                identifier: t.id
            })
        }
    },
    _onIdentify: function(t) {
        var i = __app.disqus;
        if ('string' == typeof t) {
            $.event.trigger({
                type: i.events.authentified,
                user: t,
                isLoggedUser: t == i.options.user
            })
        }
    },
    _disqusConfigCallback: function() {
        var t = __app.disqus;
        this.page.url = t.options.url;
        this.identifier = t.options.identifier;
        this.callbacks.onReady = [t._onReady];
        this.callbacks.onNewComment = [t._onNewComment];
        this.callbacks.onIdentify = [t._onIdentify]
    },
    __run: function() {
        this.install()
    }
};;
var __app = __app || {};
__app.email = {
    __deps: [],
    options: {
        selector: 'span.obfuscated',
        auto: !0,
        createLinks: !0,
        classes: 'email unobfuscated',
        replaces: {
            at: ' CHEZ ',
            dot: ' POINT '
        }
    },
    unobfuscate: function(a) {
        var t = this,
            a = a || t.options.selector,
            e = $(a),
            s = new RegExp(t.options.replaces.dot, 'g'),
            o = new RegExp(t.options.replaces.at, 'g');
        e.each(function() {
            var a = $(this),
                n = a.text().replace(s, '.').replace(o, '@');
            if (!t.options.createLinks) {
                a.text(n);
                return
            };
            var p = a.attr('data-text') || a.attr('title') || n,
                i = a.attr('data-title') || a.attr('title') || null,
                e = $('<a>' + p + '</a>'),
                r = a.attr('data-subject') || null,
                c = 'mailto:' + n + (r ? '?subject=' + encodeURIComponent(r) : '');
            e.attr('href', c).addClass(t.options.classes);
            if (i) {
                e.attr('title', i)
            };
            a.replaceWith(e)
        })
    },
    __run: function() {
        var t = this;
        if (t.options.auto) {
            t.unobfuscate()
        }
    }
};;
var __app = __app || {};
__app.externalLinks = {
    __deps: [],
    options: {
        selector: 'a.external'
    },
    __run: function() {
        var n = this;
        __app.__document.on('click', n.options.selector, function(n) {
            n.preventDefault();
            var e = $(this).attr('href');
            window.open(e, '_blank')
        })
    }
};;
var __app = __app || {};
__app.flashes = {
    __deps: ['utils', 'dialogs'],
    events: {
        added: 'app:flashes:added',
        dismissed: 'app:flashes:dimissed',
    },
    options: {
        selector: '.flash',
        container: '.flash-group',
        flashCountChannels: ['favicon'],
        classes: {
            'error': 'danger',
            'danger': 'danger',
            'warning': 'warning',
            'notice': 'primary',
            'info': 'info',
            'success': 'success'
        },
        icons: {
            'error': 'frown-o',
            'danger': 'frown-o',
            'warning': 'meh-o',
            'notice': 'thumb-tack',
            'info': 'info-circle',
            'success': 'smile-o'
        },
        titles: {
            'error': 'Oops !',
            'danger': 'Oops !',
            'warning': 'Attention…',
            'notice': 'Pour votre information…',
            'info': 'Message à caractère informatif…',
            'success': 'Félicitations !'
        },
        template: '<div class="flash flash-__classname__ shake"><div class="container flash-content"><div class="media"><div class="media-left media-middle"><i class="fa fa-fw fa-3x fa-__icon__" aria-hidden="true"></i></div><div class="media-body"><h4 class="media-heading">__title__</h4><div class="media-body-content">__message__</div></div><div class="media-right media-middle js-only"><button data-dismiss="flash" class="close" aria-label="Fermer">&times;</button></div></div></div></div>'
    },
    _originalPageTitle: null,
    _favicon: null,
    add: function(a, i, n, t) {
        var e = this,
            s = $(e.options.container);
        if (0 == s.length) {
            __app.dialogs.notice(a, n);
            return
        };
        var i = i || 'notice',
            o = e.options.classes[i] || 'primary',
            n = n || e.options.titles[i],
            t = t || e.options.icons[i],
            l = e.options.template,
            d = __app.utils.template(l, {
                'classname': o,
                'title': n,
                'icon': t,
                'message': a
            });
        $.event.trigger({
            type: e.events.added,
            title: n,
            genre: i,
            message: a,
            icon: t
        });
        s.append(d);
        e._updateFlashCount()
    },
    find: function(e) {
        var i = this,
            a = $(i.options.container);
        return a.find(e).closest(i.options.selector)
    },
    _updateFlashCount: function() {
        var e = this,
            t = $(e.options.container),
            i = t.find('div.flash').length,
            a = -1 !== e.options.flashCountChannels.indexOf('favicon'),
            n = -1 !== e.options.flashCountChannels.indexOf('pagetitle');
        if (0 == e.options.flashCountChannels) {
            return
        };
        if (n && null == e._originalPageTitle) {
            e._originalPageTitle = $('head > title').text()
        };
        if (a && null == e._favicon) {
            e._favicon = new Favico({
                type: 'rectangle',
                animation: 'none',
                bgColor: '#c94e34',
                textColor: '#fff',
                fontStyle: 700
            })
        };
        if (0 == i) {
            if (n) {
                $('head > title').text(e._originalPageTitle)
            };
            if (a) {
                e._favicon.reset()
            }
        } else {
            if (n) {
                $('head > title').text('(' + i + ') ' + e._originalPageTitle)
            };
            if (a) {
                e._favicon.badge(i)
            }
        }
    },
    __run: function() {
        var e = this;
        __app.__document.on('click', '[data-dismiss="flash"]', function(a) {
            var n = $(this),
                i = n.parents(e.options.selector).first(),
                t = {
                    'margin-top': '-' + i.outerHeight() + 'px',
                    'opacity': 0
                };
            $.event.trigger({
                type: e.events.dismissed,
                title: i.find('.media-heading').text(),
                message: i.find('.media-body-content').html(),
            });
            i.css('transition', 'none').animate(t, 350, function() {
                i.remove();
                e._updateFlashCount()
            })
        });
        e._updateFlashCount()
    }
};;
var __app = __app || {};
__app.instantSearch = {
    __deps: ['flashes'],
    events: {
        suggested: 'app:instant-search:suggested',
        initiated: 'app:instant-search:initiated',
        response: 'app:instant-search:response'
    },
    options: {
        selector: '.instant-search',
        unavailable: 'Moteur inaccessible. Merci de vérifier l\'état de votre connexion ou bien de réessayer ultérieurement.'
    },
    __run: function() {
        var e = this,
            t = $(e.options.selector),
            s = null,
            a = null;
        if (t.length > 0) {
            __app.__document.on('click', '.form-instant-search [type="submit"]', function(e) {
                e.preventDefault();
                t.focus()
            });
            __app.__document.on('click', '.jumbotron .suggestion', function(s) {
                s.preventDefault();
                var a = $(this).text();
                if (!a) {
                    return
                };
                $.event.trigger({
                    type: e.events.suggested,
                    suggestion: a
                });
                a = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
                t.val(a).trigger('keydown').select().focus()
            });
            __app.__document.on('click focus', e.options.selector, function(e) {
                $(this).select()
            });
            __app.__document.on('keydown keypress', e.options.selector, function(t) {
                var n = $(this),
                    r = t.keyCode ? t.keyCode : t.which;
                switch (r) {
                    case 13:
                        t.preventDefault();
                    case 27:
                        n.blur();
                        return;
                    case 8:
                    case 46:
                        if (null != s) {
                            s.abort()
                        };
                        return
                };
                $.doTimeout('instant-search', 1000, function() {
                    var r = n.closest('form'),
                        u = r.attr('action'),
                        t = n.val(),
                        o = r.find('.fa').not('.fa-keyboard-o'),
                        i = $('#resultats'),
                        l = $('.search-results-count'),
                        c = l.attr('data-prototype');
                    if (null != s) {
                        s.abort()
                    };
                    if (t == a || t.length < 3) {
                        return
                    };
                    o.removeClass('fa-search').addClass('fa-spin fa-refresh');
                    $('.lead.no-search').addClass('hidden');
                    $('.lead.no-results').addClass('hidden');
                    __app.__html.removeClass('has-results');
                    $.event.trigger({
                        type: e.events.initiated,
                        query: t
                    });
                    s = $.ajax({
                        dataType: 'json',
                        url: u + '.json',
                        data: {
                            'termes': t
                        },
                        complete: function() {
                            o.removeClass('fa-spin fa-refresh').addClass('fa-search')
                        },
                        error: function(s) {
                            __app.flashes.add(e.options.unavailable, 'warning')
                        },
                        success: function(s) {
                            if (!s.success) {
                                __app.flashes.add(s.message, 'warning');
                                return
                            };
                            i.find('.list-group-item').remove();
                            for (var n in s.results) {
                                var a = s.results[n];
                                i.append(a.html)
                            };
                            var t = c.replace(/__total__/g, s.count).replace(/__query__/g, __app.utils.escape(s.query)).replace(/__plural__/g, s.count > 1 ? 's' : '');
                            l.html(t);
                            if (0 == s.count) {
                                $('.lead.no-results').removeClass('hidden')
                            } else {
                                __app.__html.addClass('has-results')
                            };
                            $.event.trigger({
                                type: e.events.response,
                                query: s.query,
                                results: s.count
                            })
                        },
                    })
                })
            })
        }
    }
};;
var __app = __app || {};
__app.internalLinks = {
    __deps: ['dialogs'],
    options: {},
    __run: function() {
        __app.__document.on('click', '[data-display-internal-link]', function(a) {
            a.preventDefault();
            var n = $(this);
            target = n.attr('data-target') || n.attr('href') || null;
            if (null == target) {
                __app.dialogs.error('Lien mal configuré');
                return
            };
            __app.dialogs.notice('<div class="input-group internal-link"><div class="input-group-addon"><i class="fa fa-fw fa-anchor" aria-hidden="true"></i></div><input type="text" class="form-control share-control" readonly="readonly" value="' + target + '"></div>', 'Lien interne au site')
        });
        __app.__document.on('shown.bs.modal', function() {
            var a = $(this),
                n = a.find('.input-group.internal-link > input');
            if (n.length != 0) {
                n.focus()
            }
        })
    }
};;
var __app = __app || {};
__app.konami = {
    __deps: [],
    events: {
        triggered: 'app:konami:triggered'
    },
    __run: function() {
        var t = this,
            n = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
            e = [];
        __app.__document.on('keydown', function(i) {
            e.push(i.keyCode);
            if (e.length > n.length) {
                e = e.slice(-(n.length))
            };
            if (e.toString() == n.toString()) {
                $.event.trigger(t.events.triggered)
            }
        })
    }
};;
var __app = __app || {};
__app.lightbox = {
    __deps: [],
    events: {
        displayed: 'app:lightbox:displayed'
    },
    options: {
        selector: '.notes-body img, .addendum-body img',
        strings: {
            okLabel: 'C\'est tout vu !'
        }
    },
    __run: function() {
        if (!bootbox) {
            return
        };
        var t = this;
        biggerThanLife = function(a) {
            var t = a.get(0),
                e = __app.__window;
            if (t.naturalHeight) {
                if (t.naturalHeight > e.height() || t.naturalWidth > 1000) {
                    return 'large'
                };
                if (t.naturalWidth <= 300) {
                    return 'small'
                }
            };
            return null
        };
        __app.__document.on('click', t.options.selector, function(i) {
            var a = $(this),
                e = a.attr('src');
            title = a.attr('title') || a.attr('alt') || 'Image';
            html = '<img class="img-responsive img-lightbox" src="' + e + '">', opts = {
                message: html,
                className: 'modal-lightbox',
                size: biggerThanLife(a),
                title: '<i class="fa fa-fw fa-camera"></i> ' + title,
                backdrop: !0,
                buttons: {
                    ok: {
                        label: t.options.strings.okLabel + ' <i class="fa fa-fw fa-check-circle"></i>',
                        className: 'btn-default'
                    }
                }
            };
            if ('A' != a.parent().prop('tagName')) {
                $.event.trigger({
                    type: t.events.displayed,
                    title: title,
                    src: e,
                    img: a
                });
                bootbox.alert(opts)
            }
        })
    }
};;
var __app = __app || {};
__app.login = {
    __deps: [],
    events: {
        activated: 'app:login:activated',
        closed: 'app:login:closed',
        cancelled: 'app:login:cancelled'
    },
    options: {
        selector: '#connexion-inscription'
    },
    _closeSessionUrl: null,
    __run: function() {
        var t = this,
            a = t.options.selector,
            e = $(a),
            n = a + ' [role="tablist"] > li > a';
        selectedTabIndex = __app.prefs.get('login_modal_selected_tab_index', 0);
        if (e.length > 0) {
            __app.__document.on('click', n, function() {
                var t = $(this).closest('li').index();
                __app.prefs.set('login_modal_selected_tab_index', t)
            });
            __app.__document.on('click', '[data-login-toggle]', function(a) {
                a.preventDefault();
                var i = e.find('.form-login-load');
                if (i.length > 0) {
                    var d = i.attr('data-target');
                    t._closeSessionUrl = i.attr('data-close');
                    $.ajax({
                        dataType: 'html',
                        url: d,
                        success: function(t) {
                            var e = $(t);
                            e.find('input[name="_target_path"]').val(window.location.href);
                            i.replaceWith(e)
                        },
                        error: function(e, a, i) {
                            t.__log('Unable to load login form:', i, a, e)
                        }
                    })
                };
                document.location.hash = 'modal-login-opened';
                $.doTimeout(500, function() {
                    __app.__window.one('hashchange', function() {
                        if (e.is(':visible')) {
                            $.event.trigger(t.events.cancelled);
                            e.modal('hide')
                        }
                    })
                });
                var n = $(this),
                    o = '<i class="fa fa-fw fa-sign-in" aria-hidden="true"></i> ' + (n.attr('title') || 'Connexion');
                e.attr('data-original-title', e.find('.modal-title').html()).find('.modal-title').html(o);
                var l = '[role="tablist"] > li:eq(' + selectedTabIndex + ') > a';
                selectedTab = e.find(l);
                selectedTab.tab('show');
                $.event.trigger({
                    type: t.events.activated,
                    source: n.attr('data-login-toggle') || n.text().trim() || 'Unknown',
                    tab: selectedTab
                });
                e.modal('show')
            });
            __app.__document.on('hidden.bs.modal', a, function(i) {
                var e = $(this),
                    n = $('[data-target="' + a + '"], [href="' + a + '"]');
                n.blur();
                $.event.trigger(t.events.closed);
                if (t._closeSessionUrl) {
                    $.ajax({
                        url: t._closeSessionUrl,
                        dataType: 'html'
                    })
                };
                if ('#modal-login-opened' == document.location.hash) {
                    document.location.hash = ''
                };
                if (e.attr('data-original-title')) {
                    e.find('.modal-title').html(e.attr('data-original-title'));
                    e.removeAttr('data-original-title')
                }
            });
            if (__app.__html.hasClass('page-login')) {
                var i = $('.main-container #login-form input[type="email"]').first();
                i.focus()
            }
        }
    }
};;
var __app = __app || {};
__app.measuresForm = {
    __deps: ['dialogs'],
    options: {
        strings: {
            new: 'Nouvelle mesure',
            delete: 'Supprimer la mesure',
            deletionConfirm: 'Êtes-vous sûr de vouloir supprimer la mesure ?'
        },
    },
    __run: function() {
        var e = this,
            t = $('<button class="btn btn-default btn-sm btn-add-measure"><i class="fa fa-fw fa-plus"></i> ' + e.options.strings.new + '</button>'),
            a = $('<div class="action-new"></div>').append(t),
            n = $('#section_measures'),
            s = function(e, a) {
                var s = e.data('prototype'),
                    t = e.data('index'),
                    o = s.replace(/__name__label__/g, t).replace(/__name__/g, t);
                e.data('index', t + 1);
                var n = $(o);
                i(n);
                a.before(n);
                n.slideUp(0, function() {
                    n.slideDown()
                })
            },
            i = function(n) {
                var t = $('<button class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i> ' + e.options.strings.delete + '</button>');
                n.append(t);
                t.on('click', function(t) {
                    t.preventDefault();
                    __app.dialogs.confirm(e.options.strings.deletionConfirm, e.options.strings.delete, function(e) {
                        if (e) {
                            n.slideUp(300, function() {
                                n.remove()
                            })
                        }
                    })
                })
            };
        n.append(a).data('index', n.children('.form-group').length);
        n.children('.form-group').each(function() {
            i($(this))
        });
        t.on('click', function(e) {
            e.preventDefault();
            s(n, a);
            $(this).blur()
        })
    },
};;
var __app = __app || {};
__app.measures = {
    __deps: [],
    options: {},
    __run: function() {
        var t = $('.list-measures > .list-group-item.active').first();
        if (t.length > 0) {
            __app.scroll.to(t);
            var e = $(t.attr('data-target'));
            e.modal()
        };
        __app.__document.on('click', '.list-measures > .list-group-item', function(e) {
            if ('A' == e.target.nodeName) {
                return
            };
            e.preventDefault();
            var a = $(this),
                t = $('.list-measures > .list-group-item'),
                o = $(a.attr('data-target'));
            t.removeClass('active');
            a.addClass('active');
            a.blur();
            o.modal('show')
        });
        __app.__document.on('hide.bs.modal', '.modal.modal-measure', function() {
            var e = $(this),
                a = $('.list-group-item[data-target="#' + e.attr('id') + '"]');
            icon = a.find('.icon-bookmarked'), btn = e.find('.modal-footer .btn-bookmark');
            if (btn.hasClass('active')) {
                icon.removeClass('hidden')
            } else {
                icon.addClass('hidden')
            }
        });
        $('.list-measures').bind('clickoutside', function(e) {
            if (!$('body').hasClass('modal-open')) {
                $(this).find('.list-group-item.active').removeClass('active')
            }
        });
        var o = window.location.hash,
            i = /^#mesure-([0-9]+)$/,
            a = i.test(o) ? i.exec(o)[1] : null;
        if (a) {
            var e = $('#modal-measure-' + a);
            if (e.length > 0) {
                var s = $('#mesure-' + a).addClass('active');
                __app.scroll.to(s, 150, function() {
                    e.modal('show')
                })
            }
        };
        if ($('.list-measures').length > 0) {
            $('[data-toggle="popover"]').popover({
                container: 'body'
            });
            __app.__document.on('hide.bs.modal', function() {
                $('[data-toggle="popover"]').popover('hide')
            })
        };
        __app.__document.on('click', '.popover', function() {
            $(this).popover('hide')
        })
    }
};;
var __app = __app || {};
__app.modals = {
    __deps: ['utils'],
    options: {},
    _center: function(o) {
        this.$element = $(o);
        this.$content = this.$element.find('.modal-content');
        var e = this.$content.outerHeight() - this.$content.innerHeight(),
            n = __app.__window.width() < 768 ? 20 : 60,
            i = __app.__window.height() - (n + e),
            a = this.$element.find('.modal-header').outerHeight() || 0,
            s = this.$element.find('.modal-footer').outerHeight() || 0,
            t = i - (a + s);
        if (t < 0) {
            t = 0
        };
        if (__app.__window.width() < 768) {
            this.$element.find('.modal-body').css({
                'max-height': 'none',
                'overflow-y': 'visible'
            });
            return
        };
        this.$content.css({
            'overflow': 'hidden'
        });
        this.$element.find('.modal-body').css({
            'max-height': t,
            'overflow-y': 'auto'
        })
    },
    __run: function() {
        var t = this;
        __app.__document.on('show.bs.modal', '.modal', function() {
            $(this).show();
            t._center(this)
        });
        __app.__window.on('resize', __app.utils.throttle(function() {
            var o = $('.modal.in');
            if (o.length != 0) {
                t._center(o)
            }
        }, 100));
        __app.__document.on('shown.bs.collapse hidden.bs.collapse', '.modal .collapsable', function() {
            t._center($(this).parents('.modal').first())
        });
        __app.__document.on('hide.bs.modal', '.modal', function() {
            $(this).find('.collapse.in').collapse('hide')
        });
        __app.__window.load(function() {
            var o = $.fn.modal.Constructor.prototype.setScrollbar;
            $.fn.modal.Constructor.prototype.setScrollbar = function() {
                o.apply(this);
                if (this.bodyIsOverflowing && this.scrollbarWidth) {
                    $('.navbar-fixed-top, .navbar-fixed-bottom, .footer, body').css('padding-right', this.scrollbarWidth)
                }
            };
            var t = $.fn.modal.Constructor.prototype.resetScrollbar;
            $.fn.modal.Constructor.prototype.resetScrollbar = function() {
                t.apply(this);
                $('.navbar-fixed-top, .navbar-fixed-bottom, .footer, body').css('padding-right', '')
            }
        })
    }
};;
var __app = __app || {};
__app.notes = {
    __deps: ['sounds', 'totalLoading'],
    options: {
        strings: {
            pendingChanges: 'Vos modifications n\'ont pas été sauvegardées.'
        }
    },
    events: {
        started: 'app:notes:started',
        reset: 'app:notes:reset',
        submit: 'app:notes:submit'
    },
    _pendingChanges: !1,
    __run: function() {
        var e = this;
        __app.__window.bind('beforeunload', function() {
            if (e._pendingChanges) {
                __app.totalLoading.stop();
                return e.options.strings.pendingChanges
            }
        });
        __app.__document.delegate('.notes-collapsable textarea', 'keydown', function(t) {
            if (!e._pendingChanges) {
                $.event.trigger(e.events.started)
            };
            e._pendingChanges = !0;
            var a = t.keyCode || t.which;
            if (a == 9) {
                t.preventDefault();
                var n = $(this).get(0).selectionStart,
                    s = $(this).get(0).selectionEnd;
                $(this).val($(this).val().substring(0, n) + '  ' + $(this).val().substring(s));
                $(this).get(0).selectionStart = $(this).get(0).selectionEnd = n + 2
            }
        });
        __app.__document.on('click', '.notes-collapsable [type="reset"]', function(t) {
            var n = $(this).closest('.notes-collapsable');
            n.collapse('hide');
            e._pendingChanges = !1;
            $.event.trigger(e.events.reset)
        });
        __app.__document.on('submit', '.notes-collapsable form', function(t) {
            e._pendingChanges = !1;
            $.event.trigger(e.events.submit)
        })
    }
};;
var __app = __app || {};
__app.popups = {
    __deps: ['utils'],
    options: {},
    pop: function(o, e, t) {
        var l = this;
        wh = [];
        var t = 'string' == typeof t ? (-1 != t.indexOf(',') ? t.split(',') : ['' + parseInt(t)]) : 'object' == typeof t ? __app.utils.values(t) : [],
            n = 2 == t.length ? t[0] : 1 == t.length ? t[0] : null,
            p = 2 == t.length ? t[1] : null,
            i = 'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no';
        if (n) {
            i += ',width=' + n.trim()
        };
        if (p) {
            i += ',height=' + p.trim()
        };
        window.open(o, e, i)
    },
    __run: function() {}
};;
var __app = __app || {};
__app.prefs = {
    options: {
        storageKey: "app_user_preferences"
    },
    _prefs: {},
    get: function(e, r) {
        var o = this;
        value = o._prefs[e];
        o.__log("Getting preference for", e, "/ default:", r, "/ retrieved:", value);
        return "undefined" != typeof value ? value : r
    },
    set: function(e, r) {
        var o = this;
        o._prefs[e] = r;
        o.__log("Setting preference", e, "with", r);
        o._store();
        return __app.prefs
    },
    clear: function() {
        var e = this;
        e._prefs = {};
        if (!localStorage || !JSON) {
            e.__log("Clearing not applicable since there's no storage");
            return
        };
        e.__log("Clearing preferences from local storage @" + e.options.storageKey);
        localStorage.removeItem(e.options.storageKey)
    },
    _store: function() {
        var e = this;
        if (!localStorage || !JSON) {
            e.__log("_store() requires localStorage and JSON to be available")
        };
        e.__log("Storing preferences in local storage @" + e.options.storageKey);
        localStorage.setItem(e.options.storageKey, JSON.stringify(e._prefs))
    },
    _reload: function() {
        var e = this;
        if (!localStorage || !JSON) {
            e.__log("_reload() requires localStorage and JSON to be available")
        };
        e.__log("Retrieving preferences from local storage @" + e.options.storageKey);
        var r = localStorage.getItem(e.options.storageKey) || "{}";
        e._prefs = JSON.parse(r)
    },
    __run: function() {
        var e = this;
        if (!Modernizr.localstorage) {
            e.__log("No local storage, preferences won't persist.");
            return
        };
        e._reload()
    }
};;
var __app = __app || {};
__app.preview = {
    __deps: ['popups'],
    options: {},
    __run: function() {
        __app.__document.on('click', '[data-form-popup-preview]', function(a) {
            var t = $(this),
                p = $(this).closest('form');
            backup = p.attr('target');
            p.attr('data-action-popup', t.attr('data-popup-title') || t.attr('title') || 'Popup').attr('data-popup-dimensions', t.attr('data-popup-dimensions'));
            $.doTimeout(500, function() {
                p.removeAttr('data-action-popup').removeAttr('data-popup-dimensions').attr('target', backup);
                if (null == backup) {
                    p.removeAttr('target')
                }
            });
            t.blur()
        });
        __app.__document.on('submit', '[data-action-popup]', function(a) {
            var t = $(this),
                p = t.attr('data-action-popup'),
                o = t.attr('data-popup-dimensions');
            __app.popups.pop('', p, o);
            t.attr('target', p)
        })
    }
};;
var __app = __app || {};
__app.printing = {
    __deps: ['dialogs', 'totalLoading'],
    events: {
        beforePrint: 'app:printing:before-print',
        afterPrint: 'app:printing:after-print',
        iframeTriggered: 'app:printing:iframe-triggered',
        iframeBeforePrint: 'app:printing:iframe-before-print',
        iframeAfterPrint: 'app:printing:iframe-after-print'
    },
    options: {},
    _iframePrinting: !1,
    _beforePrint: function() {
        var r = this;
        if (!r._iframePrinting) {
            $.event.trigger(r.events.beforePrint)
        }
    },
    _afterPrint: function() {
        var r = this;
        if (!r._iframePrinting) {
            $.event.trigger(r.events.afterPrint)
        } else {
            $.event.trigger(r.events.iframeAfterPrint)
        }
    },
    __run: function() {
        var r = this;
        $('[data-open-print-dialog]').on('click', function(t) {
            t.preventDefault();
            var e = $(this),
                i = e.attr('data-target') || e.attr('href');
            printFrame = $('<iframe style="display: none;" id="print-frame"></iframe>');
            existing = __app.__body.find('#print-frame');
            if (!i) {
                __app.dialogs.error('Lien d\'impression mal configuré');
                return
            };
            if (0 == existing.length) {
                __app.__body.append(printFrame)
            };
            $.event.trigger({
                type: r.events.iframeTriggered,
                href: i,
                source: e
            });
            r._iframePrinting = !0;
            printFrame = __app.__body.find('#print-frame');
            printFrame.attr('src', i);
            __app.totalLoading.start();
            e.blur();
            printFrame.one('load', function() {
                $.event.trigger({
                    type: r.events.iframeBeforePrint,
                    href: i,
                    source: e
                });
                printFrame.get(0).contentWindow.print();
                __app.totalLoading.stop()
            })
        });
        if (window.matchMedia) {
            var e = window.matchMedia('print');
            e.addListener(function(e) {
                if (e.matches) {
                    r._beforePrint()
                } else {
                    r._afterPrint()
                }
            })
        };
        window.onbeforeprint = r._beforePrint;
        window.onafterprint = r._afterPrint
    }
};;
var __app = __app || {};
__app.scroll = {
    __deps: ['dialogs', 'utils'],
    events: {
        started: 'app:scroll:started',
        ended: 'app:scroll:ended',
        complete: 'app:scroll:complete'
    },
    options: {
        duration: 800,
        scrollThrottle: 150,
        offset: function() {
            return $('.navbar-fixed-top').outerHeight() + 20
        }
    },
    _handlers: {},
    addHandler: function(t, o) {
        var e = this,
            o = o || '_handler_' + __app.utils.count(handlers);
        if ('function' == typeof t) {
            e._handlers[o] = t
        }
    },
    removeHandler: function(t) {
        var e = this,
            o = e._handlers;
        if (o[t]) {
            callable = o[t];
            delete o[t];
            return callable
        }
    },
    to: function(t, a, e, r) {
        var o = this,
            a = a || o.options.duration,
            e = 'function' == typeof e ? e : function() {},
            t = t || null;
        if (null == t) {
            return
        };
        var t = $(t),
            l = 'function' == typeof o.options.offset ? o.options.offset() : o.options.offset,
            n = {
                target: t,
                offset: l,
                source: r,
                callback: e
            };
        if (0 == t.length) {
            return
        };
        $.event.trigger($.extend({}, {
            type: o.events.started
        }, n));
        $('html, body').animate({
            scrollTop: (t.offset().top - l)
        }, 1000, function() {
            $.event.trigger($.extend({}, {
                type: o.events.ended
            }, n));
            e();
            $.event.trigger($.extend({}, {
                type: o.events.complete
            }, n))
        })
    },
    _handle: function() {
        var o = __app.scroll;
        for (var e in o._handlers) {
            var t = o._handlers[e];
            if ('function' == typeof t) {
                t()
            }
        }
    },
    __run: function() {
        var t = this;
        __app.__window.on('scroll', __app.utils.throttle(t._handle, t.options.scrollThrottle));
        __app.__document.on('click', '[data-scroll-and-open]', function(e) {
            e.preventDefault();
            var a = $(this),
                o = a.attr('data-scroll-and-open'),
                n = $('[data-target="' + o + '"]');
            if (n.length > 0) {
                a.blur();
                t.to(n, 200, function() {
                    o = $(o);
                    if (o.hasClass('collapsable') && !o.hasClass('in')) {
                        o.collapse('show')
                    }
                }, a)
            }
        });
        __app.__document.on('click', '[data-do-scroll-to]', function(o) {
            o.preventDefault();
            var e = $(this),
                n = e.attr('data-do-scroll-to') || t.options.duration,
                a = $(e.attr('data-target') || e.attr('href'));
            if (0 == a.length) {
                __app.dialogs.error('Lien mal configuré')
            };
            t.to(a, n, function() {
                e.blur()
            }, e)
        });
        if (__app.__body.is('[data-scroll-on-load]')) {
            t.to($(__app.__body.attr('data-scroll-on-load')), t.options.duration, null, __app.__body)
        };
        if (__app.__html.hasClass('page-index')) {
            $('body').scrollspy({
                target: '.navbar-fixed-top',
                offset: 100
            })
        }
    }
};;
var __app = __app || {};
__app.searching = {
    __deps: [],
    options: {},
    __run: function() {
        __app.__document.on('click focus', '#searchbox', function(a) {
            $(this).select()
        });
        __app.__document.on('submit', '.navbar-searchbox-form', function(a) {
            var t = $('#searchbox').val().replace(/^\s+|\s+$/gm, '');
            target = $(this).attr('action');
            if ('' == t) {
                a.preventDefault();
                window.location = target;
                return !1
            }
        })
    }
};;
var __app = __app || {};
__app.sharing = {
    __deps: [],
    events: {
        linkSelected: 'app:sharing:link-selected',
        popup: 'app:sharing:popup'
    },
    options: {},
    __run: function() {
        var e = this;
        __app.__document.on('focus click', '.share-control', function() {
            var e = $(this);
            e.select()
        });
        __app.__document.on('click', '.share-control', function() {
            var t = $(this);
            modal = t.parents('.modal-measure').first();
            $.event.trigger({
                type: e.events.linkSelected,
                source: modal.length > 0 ? 'modal' : 'page',
                measure: modal.length > 0 ? modal.attr('measure-index') : null
            })
        });
        __app.__document.on('click', '.input-group-addon', function() {
            var a = $(this).parents('.input-group').first(),
                n = a.find('.share-control').first(),
                t = n.parents('.modal-measure');
            $.event.trigger({
                type: e.events.linkSelected,
                source: t.length > 0 ? 'modal' : 'page',
                measure: t.length > 0 ? t.attr('measure-index') : null
            });
            n.focus()
        });
        __app.__document.on('click', '.share-link', function(a) {
            a.preventDefault();
            var t = $(this),
                r = t.attr('data-popup-dimensions').split(','),
                p = t.attr('href'),
                o = t.attr('title'),
                n = t.parents('.modal-measure').first();
            $.event.trigger({
                type: e.events.popup,
                network: t.attr('data-network') || 'Unknown',
                source: n.length > 0 ? 'modal' : 'page',
                measure: n.length > 0 ? n.attr('measure-index') : null
            });
            __app.popups.pop(p, o, r);
            $(this).blur()
        })
    }
};;
var __app = __app || {};
__app.searching = {
    __deps: [],
    options: {},
    __run: function() {
        __app.__document.on('click', '#side-navigation > li', function(i) {
            if ('A' != i.target.nodeName) {
                $(this).find('a').get(0).click()
            }
        })
    }
};;
var __app = __app || {};
__app.sounds = {
    __deps: ['utils'],
    events: {
        playing: 'app:sounds:playing',
        muted: 'app:sounds:muted',
        unmuted: 'app:sounds:unmuted',
        stopped: 'app:sounds:stopped',
        ended: 'app:sounds:ended',
        paused: 'app:sounds:paused',
        resumed: 'app:sounds:resumed',
        restarted: 'app:sounds:restarted',
        ready: 'app:sounds:ready',
        seeked: 'app:sounds:seeked',
        rewound: 'app:sounds:rewound',
        advanced: 'app:sounds:advanced',
        accelerated: 'app:sounds:accelerated',
        slowed: 'app:sounds:slowed',
        louder: 'app:sounds:louder',
        quieter: 'app:sounds:quieter'
    },
    options: {
        path: '/static/special/',
        prefix: 'app-sounds-',
        formats: {
            'ogg': 'audio/ogg',
            'mp3': 'audio/mpeg',
            'wav': 'audio/wav'
        },
        autoload: !0,
        sources: ['ogg', 'mp3', 'wav'],
    },
    _library: {},
    mute: function(e) {
        if (!Modernizr.audio) {
            return !0
        };
        var r = this;
        if (0 == __app.utils.count(r._library)) {
            return !0
        };
        var a = 'undefined' == typeof e,
            t = !a ? Boolean(e) : !__app.utils.first(r._library).muted;
        for (var i in r._library) {
            var n = r._library[i];
            n.muted = t
        };
        r._fire(t ? 'muted' : 'unmuted');
        return t
    },
    muted: function() {
        if (!Modernizr.audio) {
            return !0
        };
        var r = this,
            e = __app.utils.first(r._library);
        return !e || e.muted
    },
    setVolume: function(e, r) {
        if (!Modernizr.audio) {
            return
        };
        if (e < 0 || e > 1) {
            throw new RangeError('setVolume(): volume should be a value between 0 and 1')
        };
        var n = this;
        if (r) {
            var t = n._library[r];
            if (t) {
                var i = t.volume;
                if (i != e) {
                    t.volume = e;
                    n._fire(e > i ? 'louder' : 'quieter', r, {
                        volume: e
                    })
                }
            };
            return
        };
        for (var a in n._library) {
            var t = n._library[a];
            t.volume = e
        }
    },
    play: function(e, t, i) {
        if (!Modernizr.audio || 'string' != typeof e) {
            return
        };
        var r = this,
            n = r._library[e];
        if (!n && r.options.autoload) {
            r.add(e);
            n = r._library[e]
        };
        if (!n) {
            r.__log('No sound to play!');
            return
        };
        if (r.muted()) {
            r.__log('All sounds are muted!');
            return
        };
        $(n).one('ended', function() {
            r._fire('ended', e)
        });
        if ('function' == typeof i) {
            $(n).on('timeupdate', function() {
                var e = this,
                    r = e.currentTime,
                    t = e.duration;
                i(r, t)
            })
        };
        if (!t) {
            r.stop(e)
        } else {
            if (!n.paused) {
                n.pause();
                r._fire('paused', e)
            } else {
                n.play();
                r._fire(n.currentTime > 0 ? 'resumed' : 'playing', e)
            };
            return
        };
        n.play();
        r._fire('playing', e)
    },
    restart: function(e) {
        var r = this,
            t = r._get(e);
        t.currentTime = 0;
        r._fire('restarted', e)
    },
    stop: function(e) {
        if (!Modernizr.audio) {
            return
        };
        var t = this,
            r = t._library[e];
        if (e && !r) {
            return
        };
        if (r) {
            if (!r.paused) {
                r.pause();
                r.currentTime = 0;
                t._fire('stopped', e);
                return 1
            }
        };
        var i = 0;
        for (var n in t._library) {
            var r = t._library[n];
            if (!r.paused) {
                r.pause();
                r.currentTime = 0;
                t._fire('stopped', n);
                i += 1
            }
        };
        return i
    },
    add: function(e, r) {
        if (!Modernizr.audio) {
            return
        };
        var t = this,
            r = 'array' == typeof r ? r : t.options.sources;
        if ('string' != typeof e) {
            return
        };
        var n = t.options.prefix + e,
            i = '<audio id="' + n + '">';
        if (0 != $('#' + n).length) {
            return
        };
        for (var u in r) {
            var o = r[u];
            filename = t.options.path + e + '.' + o;
            if (mime = t.options.formats[o]) {
                i += '<source src="' + filename + '" type="' + mime + '">'
            }
        };
        i += '</audio>';
        t.__log('Adding sound "' + e + '" to library');
        $(i).appendTo('body');
        var a = $('#' + n).get(0);
        $(a).on('canplay', function() {
            t._fire('ready', e)
        });
        t._library[e] = a
    },
    manage: function(e, r) {
        if (!Modernizr.audio) {
            return
        };
        var t = this;
        if ('string' != typeof e || 'object' != typeof r) {
            return
        };
        var n = t.options.prefix + e;
        element = $(r);
        element.removeAttr('controls').attr('id', n);
        t.__log('Adding existing sound "' + e + '" to library.');
        t._library[e] = r;
        if (r.readyState) {
            t._fire('ready', e)
        } else {
            element.on('canplay', function() {
                t._fire('ready', e)
            })
        }
    },
    activate: function(e) {
        var r = this;
        sound = r._get(e);
        if (!sound.paused) {
            return r
        };
        r.__log('Activating "' + e + '"…');
        try {
            var t = sound.volume;
            currentTime = sound.currentTime;
            sound.volume = 0;
            sound.play();
            $.doTimeout(50, function() {
                sound.pause();
                sound.currentTime = currentTime;
                sound.volume = t;
                r.__log('"' + e + '" activated.')
            })
        } catch (n) {
            r.__log('Catched error: ', n)
        };
        return r
    },
    getPosition: function(e) {
        var r = this;
        sound = r._get(e, !0);
        return sound.currentTime
    },
    advance: function(e, r) {
        var n = this,
            i = n._get(e, !0),
            a = i.currentTime,
            t = a + r,
            o = i.duration;
        if (t > o) {
            t = o
        };
        i.currentTime = t;
        n._fire('advanced', e, {
            query: r,
            before: a,
            position: t
        });
        return n
    },
    seek: function(e, r) {
        var t = this,
            n = t._get(e, !0),
            i = n.duration,
            a = r;
        if (r < 0) {
            r = 0
        };
        if (r > i) {
            r = i
        };
        n.currentTime = r;
        t._fire('seeked', e, {
            query: a,
            position: r
        });
        return t
    },
    rewind: function(e, r) {
        var n = this,
            i = n._get(e, !0),
            a = i.currentTime,
            t = a - r;
        if (t < 0) {
            t = 0
        };
        i.currentTime = t;
        n._fire('rewound', e, {
            query: r,
            before: a,
            position: t
        });
        return n
    },
    getPosition: function(e) {
        var r = this,
            t = r._get(e, !0);
        return t.currentTime
    },
    getDuration: function(e) {
        var r = this,
            t = r._get(e, !0);
        return t.duration
    },
    getPlaybackRate: function(e) {
        var r = this,
            t = r._get(e, !0);
        return t.playbackRate
    },
    setPlaybackRate: function(e, r) {
        var t = this,
            i = t._get(e, !0),
            r = r || 1,
            n = i.playbackRate;
        if (r == n) {
            return t
        };
        i.playbackRate = r;
        t._fire(r > n ? 'accelerated' : 'slowed', e, {
            previous: n,
            current: r
        });
        return t
    },
    playbackRate: function(e, r) {
        var t = this;
        if ('undefined' == typeof r) {
            return t.getPlaybackRate(e)
        } else {
            return t.setPlaybackRate(e, r)
        }
    },
    _get: function(e, r) {
        if (!Modernizr.audio) {
            throw new Error('No audio support!')
        };
        if ('string' != typeof e) {
            throw new TypeError('Invalid type for identifier: ' + typeof e + ', "string" expected.')
        };
        var n = __app.sounds,
            t = n._library[e];
        if (!t && n.options.autoload) {
            n.add(e);
            t = n._library[e]
        };
        if (!t) {
            throw new Error('Unable to get sound: ' + e)
        };
        if (r && !t.readyState) {
            throw new Error('Sound "' + e + '" is not ready.')
        };
        return t
    },
    _fire: function(e, r, t) {
        var i = __app.sounds,
            a = r ? i._get(r) : undefined,
            e = i.events[e] || undefined,
            t = 'object' == typeof t ? t : {};
        if (!e) {
            return
        };
        var n = {
            type: e
        };
        if (a) {
            n.audio = a;
            n.id = r
        };
        $.event.trigger($.extend({}, t, n));
        return !0
    },
    __run: function() {}
};;
var __app = __app || {};
__app.supportUpdates = {
    __deps: ['utils', 'sounds', 'flashes'],
    events: {
        started: 'app:support-updates:started',
        stopped: 'app:support-updates:stopped',
        polling: 'app:support-updates:polling'
    },
    options: {
        attribute: 'data-json-refresh-support',
        soundEnabled: !0,
        polling: 30000,
        template: '[<strong data-message-id="__id__">__thread__</strong>] Message de <strong>__email__</strong><br>« __message__ »<br><a href="__link__"><i class="fa fa-fw fa-arrow-right"></i> Afficher le message</a>'
    },
    start: function() {
        var e = this,
            s = e.options.attribute,
            p = '[' + s + ']',
            a = $(p);
        if (1 == a.length) {
            __app.sounds.add('notification');
            var i = a.attr(s) || e.options.polling,
                n = a.attr(s + '-target') || null,
                t = a.attr(s + '-since') || undefined;
            t = t ? new Date(t) : undefined;
            if (n) {
                $.event.trigger(e.events.started);
                $.doTimeout('support-updates', i, function() {
                    var s = '';
                    if (t) {
                        s = '?since=' + t.toISOString()
                    };
                    $.event.trigger({
                        type: e.events.polling,
                        query: n + s
                    });
                    $.ajax({
                        url: n + s,
                        dataType: 'json',
                        error: function(t, s, a) {
                            e.__log('[ERROR] Ajax status: ', s, ' / message: ', a)
                        },
                        success: function(s) {
                            if (s.success && s.count > 0) {
                                var a = s.data[0],
                                    n = __app.utils.template(e.options.template, {
                                        'id': a.id,
                                        'thread': a.thread,
                                        'email': a.email,
                                        'message': a.message,
                                        'link': a.link
                                    });
                                e.__log('[OK] ' + s.count + ' new message' + (s.count > 1 ? 's' : ''));
                                if (0 == __app.flashes.find('[data-message-id="' + a.id + '"]').length) {
                                    __app.flashes.add(n, 'info', 'Nouveau message', 'envelope-o');
                                    if (e.options.soundEnabled) {
                                        __app.sounds.play('notification')
                                    }
                                };
                                t = new Date(s.queryTime)
                            } else if (s.success) {
                                t = new Date(s.queryTime);
                                e.__log('[OK] Nothing new.')
                            }
                        }
                    });
                    return !0
                })
            }
        }
    },
    stop: function() {
        var e = this;
        $.doTimeout('support-updates');
        $.event.trigger(e.events.stopped)
    },
    __run: function() {
        var e = this
    }
};;
var __app = __app || {};
__app.svgpng = {
    __deps: [],
    _replace: function() {
        $('[data-no-svg-src]').each(function() {
            var r = $(this);
            r.attr('src', r.attr('data-no-svg-src')).removeAttr('data-no-svg-src')
        })
    },
    __run: function() {
        if (Modernizr.svg) {
            return
        };
        var r = this;
        r._replace();
        $.doTimeout(1000, function() {
            r._replace();
            return !0
        })
    }
};;
var __app = __app || {};
__app.textBalance = {
    __deps: ['printing'],
    options: {
        selector: '.jumbotron h1, .jumbotron h2, .text-balance',
        minWidth: 480,
    },
    install: function() {
        var t = this;
        $.balanceText(t.options.selector)
    },
    _removeElements: function() {
        $('br[data-owner="balance-text"]').replaceWith(' ')
    },
    __run: function() {
        var t = this;
        if (!__app.__html.hasClass('theme-print')) {
            if (__app.__window.height() < t.options.minWidth) {
                return
            };
            t.install();
            __app.__document.on(__app.printing.events.beforePrint, function() {
                t._removeElements();
                $.doTimeout(2000, function() {
                    t.install()
                })
            })
        }
    }
};;
var __app = __app || {};
__app.tooltips = {
    __deps: [],
    options: {},
    __run: function() {
        $('[data-li-tooltip]').each(function() {
            var t = $(this);
            li = t.closest('li');
            if (0 == li.length) {
                return
            };
            li.attr('title', t.attr('title')).attr('data-delay', t.attr('data-delay')).attr('data-toggle', 'tooltip');
            t.removeAttr('title').removeAttr('data-delay')
        });
        $('[data-toggle="tooltip"]').tooltip()
    }
};;
var __app = __app || {};
__app.totalLoading = {
    events: {
        started: 'app:total-loading:started',
        stopped: 'app:total-loading:stopped'
    },
    options: {
        selector: '[data-load-display], .toc a, .pagination a',
        classname: 'total-loading',
        formSelector: '.form-total-loading',
        timeout: 10000,
        backdropClassname: 'total-loading-backdrop',
        loaderTemplate: '<div class="loading-animation"><div class="loading-bar"></div><div class="loading-bar"></div><div class="loading-bar"></div><div class="loading-bar"></div></div>'
    },
    start: function(t) {
        var a = this,
            t = 'number' == typeof t ? t : a.options.timeout;
        __app.__html.addClass(a.options.classname);
        $.doTimeout('total-loading', t, function() {
            a.stop()
        });
        $.event.trigger(a.events.started)
    },
    stop: function() {
        var t = this;
        __app.__html.removeClass(t.options.classname);
        $.doTimeout('total-loading');
        $.event.trigger(t.events.stopped)
    },
    __run: function() {
        var t = this,
            o = t.options.loaderTemplate,
            a = t.options.backdropClassname;
        __app.__body.append('<div class="' + a + '"></div>');
        $('.' + a).prepend(o);
        __app.__document.on('click', t.options.selector, function() {
            if ($(this).attr('id') === 'back-to-top') {
                return;
            }
            t.start()
        });
        __app.__document.on('submit', '.form-total-loading', function() {
            if (null == $(this).attr('target')) {
                t.start()
            }
        });
        __app.__document.on('keyup', function(a) {
            if (27 == a.keyCode) {
                t.stop()
            }
        });
        __app.__document.on('dblclick doubletab swipe', '.' + a, function(a) {
            t.stop()
        })
    }
};;
var __app = __app || {};
__app.typewriter = {
    __deps: ['sounds', 'prefs'],
    events: {
        toggled: 'app:typewriter:toggled'
    },
    options: {
        selector: '.notes-collapsable textarea',
        sound: !0,
        sounds: {
            character: {
                pattern: 'machine-touche-caractere-?',
                count: 6
            },
            carriageMoving: {
                pattern: 'machine-touche-position-?',
                count: 3
            },
            carriageReturn: {
                pattern: 'machine-retour-chariot-?',
                count: 3
            }
        },
        togglerTemplate: '<div class="typewriter-sound-toggle"><i class="fa fa-fw fa-bell-o" aria-hidden="true"></i><span class="sr-only">Son machine à écrire ON/OFF</span></div>'
    },
    _soundEnabled: !1,
    _preloaded: !1,
    _lastPlayed: {},
    _basename: function(e, a) {
        var o = this,
            n = o.options.sounds[e] || null;
        if (null == n) {
            throw new Error('No sound specified for category: ' + e)
        };
        if (a > n.count) {
            throw new Error('Invalid sound index [' + a + '] for category ' + e)
        };
        return n.pattern.replace('?', a)
    },
    _random: function(e) {
        var a = this,
            o = a.options.sounds[e] || null,
            t = a._lastPlayed[e] || null,
            n = null;
        if (null == o) {
            throw new Error('Invalid category: ' + e)
        };
        if (1 == o.count) {
            return a._basename(e, 1)
        };
        do {
            n = Math.floor((Math.random() * o.count) + 1)
        }
        while (n == t) a._lastPlayed[e] = n;
        return a._basename(e, n)
    },
    _loadSounds: function() {
        var e = this;
        if (e._preloaded) {
            return
        };
        e.__log('Preloading sounds');
        for (i = 1; i <= 6; ++i) {
            __app.sounds.add(e._basename('character', i))
        };
        for (i = 1; i <= 3; ++i) {
            __app.sounds.add(e._basename('carriageMoving', i))
        };
        for (i = 1; i <= 3; ++i) {
            __app.sounds.add(e._basename('carriageReturn', i))
        };
        e._preloaded = !0
    },
    _build: function(e) {
        var a = this;
        a.__log('Adding sound toggles to textareas');
        e.each(function(e, n) {
            var o = $(n);
            if (!o.next().is('.typewriter-sound-toggle')) {
                o.before(a.options.togglerTemplate)
            }
        })
    },
    __run: function() {
        var e = this;
        textareas = $(e.options.selector);
        if (0 == textareas.length) {
            return
        };
        e._build(textareas);
        e._soundEnabled = __app.prefs.get('typewriter_sound_enabled', e.options.sound);
        if (e._soundEnabled) {
            e._loadSounds();
            __app.__html.addClass('typewriter-sound-enabled')
        } else {
            __app.__html.addClass('typewriter-sound-disabled typewriter-display-toggle')
        };
        __app.__document.on('click', '.typewriter-sound-toggle', function(a) {
            e._soundEnabled = !e._soundEnabled;
            __app.prefs.set('typewriter_sound_enabled', e._soundEnabled);
            __app.__html.removeClass('typewriter-sound-' + (e._soundEnabled ? 'disabled' : 'enabled')).addClass('typewriter-sound-' + (e._soundEnabled ? 'enabled' : 'disabled'));
            if (e._soundEnabled) {
                e._loadSounds()
            };
            $.event.trigger({
                type: e.events.toggled,
                state: e._soundEnabled ? 'on' : 'off'
            })
        });
        __app.__document.on('keydown', e.options.selector, function(n) {
            if (!e._soundEnabled) {
                return
            };
            __app.__html.addClass('typewriter-display-toggle');
            var a = n.keyCode || n.which,
                o = !1,
                t = (a > 47 && a < 58) || (a > 64 && a < 91) || (a > 95 && a < 112) || (a > 185 && a < 193) || (a > 218 && a < 224);
            if (t) {
                __app.sounds.play(e._random('character'));
                return
            };
            switch (a) {
                case 8:
                case 46:
                case 9:
                case 32:
                case 37:
                case 38:
                case 39:
                case 40:
                    o = !0
            };
            if (o) {
                __app.sounds.play(e._random('carriageMoving'));
                return
            };
            if (13 == a) {
                __app.sounds.play(e._random('carriageReturn'))
            }
        })
    }
};;
var __app = __app || {};
__app.utils = {
    propAt: function(r, e) {
        if ('object' != typeof r) {
            throw new TypeError('propAt() requires an object')
        };
        var e = parseInt(e);
        position = 0;
        for (var n in r) {
            if (r.hasOwnProperty(n)) {
                if (e == position) {
                    return r[n]
                };
                ++position
            }
        };
        return undefined
    },
    keys: function(r) {
        if ('object' != typeof r) {
            throw new TypeError('values() requires an object')
        };
        var n = [];
        for (var e in r) {
            if (r.hasOwnProperty(e)) {
                n.push(e)
            }
        };
        return n
    },
    values: function(r) {
        if ('object' != typeof r) {
            throw new TypeError('values() requires an object')
        };
        var n = [];
        for (var e in r) {
            if (r.hasOwnProperty(e)) {
                n.push(r[e])
            }
        };
        return n
    },
    first: function(r) {
        if ('object' != typeof r) {
            throw new TypeError('first() requires an object')
        };
        for (var e in r) {
            if (r.hasOwnProperty(e)) {
                return r[e]
            }
        };
        return undefined
    },
    last: function(r) {
        if ('object' != typeof r) {
            throw new TypeError('last() requires an object')
        };
        var n = undefined;
        for (var e in r) {
            if (r.hasOwnProperty(e)) {
                n = r[e]
            }
        };
        return n
    },
    count: function(r) {
        if ('object' != typeof r) {
            throw new TypeError('count() requires an object')
        };
        var e = 0;
        for (var n in r) {
            if (r.hasOwnProperty(n)) {
                ++e
            }
        };
        return e
    },
    template: function(r, e) {
        if ('string' != typeof r || 'object' != typeof e) {
            return
        };
        for (var n in e) {
            var t = e[n],
                i = new RegExp('__' + n + '__', 'g');
            r = r.replace(i, t)
        };
        return r
    },
    strip: function(r) {
        if (!r) {
            return
        };
        return r.replace(/(<([^>]+)>)/ig, '')
    },
    truncate: function(r, e, i, o) {
        if (!r) {
            return
        };
        var e = e || 1000,
            o = o || '…';
        if (!i) {
            return (r.length > e) ? r.substr(0, e - 1) + o : r
        };
        var u = r.length > e,
            t = u ? r.substr(0, n - 1) : r;
        t = (useWordBoundary && u) ? t.substr(0, t.lastIndexOf(' ')) : t;
        return u ? t + o : t
    },
    escape: function(r, e) {
        var e = e || 'html';
        if ('html' != e) {
            throw new Error('escape(): cannot handle destination "' + e + '"')
        };
        return r.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    },
    pad: function(r, e, n) {
        var r = String(r),
            t = '',
            n = n || '0',
            e = (e || 2) - r.length;
        while (t.length < e) {
            t += n
        };
        return t + r
    },
    debounce: function(r, e, t) {
        var f, a, i, n = null,
            o = function(e, t) {
                n = null;
                i = r.apply(e, t)
            },
            u = function() {
                if (n) {
                    clearTimeout(n)
                };
                if (t) {
                    var u = !n;
                    n = setTimeout(o, e);
                    if (u) {
                        i = r.apply(this, a)
                    }
                } else {
                    n = setTimeout(o, e)
                };
                return i
            };
        u.cancel = function() {
            clearTimeout(n);
            n = null
        };
        return u
    },
    throttle: function(r, e, n) {
        var u, a, o, t = null,
            i = 0;
        if (!n) n = {};
        var f = function() {
            i = n.leading === !1 ? 0 : Date.now();
            t = null;
            o = r.apply(u, a);
            if (!t) {
                u = a = null
            }
        };
        return function() {
            var a = Date.now();
            if (!i && n.leading === !1) i = a;
            var u = e - (a - i),
                p = this,
                l = arguments;
            if (u <= 0 || u > e) {
                if (t) {
                    clearTimeout(t);
                    t = null
                };
                i = a;
                o = r.apply(p, l);
                if (!t) {
                    p = l = null
                }
            } else if (!t && n.trailing !== !1) {
                t = setTimeout(f, u)
            };
            return o
        }
    },
    __run: function() {}
};;
var __app = __app || {};
__app.__debug = __app.__debug || !1;
__app.__name = __app.__name || 'App';
__app.log = function() {
    if (__app.__debug && window.console && 'function' == typeof console.log && Function) {
        var n = Array.prototype.slice.call(arguments);
        n.unshift('[' + __app.__name + ']');
        return Function.apply.call(console.log, console, n)
    }
};
__app.__main = {
    _register: function(n, a) {
        var p = this;
        if (!n.__name) {
            n.__name = a
        };
        if (!n.__log && Function) {
            n.__log = function() {
                var n = Array.prototype.slice.call(arguments);
                if (this.__name) {
                    var a = this.__name.charAt(0).toUpperCase() + this.__name.slice(1);
                    n.unshift('[' + a + ']')
                };
                Function.apply.call(__app.log, this, n)
            }
        };
        if (!__app.__debug || !n.events || 'object' != typeof n.events) {
            return
        };
        $.each(n.events, function(a, p) {
            $(document).on(p, function(p) {
                n.__log('[Event]', '[' + a + ']', p)
            })
        })
    },
    _buildRunList: function() {
        var i = this,
            n = [],
            u = function(a) {
                for (var p in n) {
                    if (n[p].name == a) {
                        return n[p]
                    }
                }
            };
        for (var a in __app) {
            var p = __app[a];
            if ('__main' != a && p.__run && 'function' == typeof p.__run) {
                i._register(p, a);
                n.push({
                    name: a,
                    score: 0,
                    deps: p.__deps || []
                })
            }
        };
        for (var a in n) {
            var t = n[a];
            for (var o = 0; o < t.deps.length; ++o) {
                var e = t.deps[o];
                if (!__app[e]) {
                    throw new Error('Cannot satisfy a dependancy of ' + t.name + '. Missing component: ' + e)
                };
                u(e).score++
            }
        };
        n.sort(function(n, a) {
            return a.score - n.score
        });
        var r = [];
        for (var a in n) {
            r.push(n[a].name)
        };
        return r
    },
    __run: function() {
        var p = this;
        __app.__document = __app.__document || $(document);
        __app.__window = __app.__window || $(window);
        __app.__html = __app.__html || $('html');
        __app.__body = __app.__body || $('body');
        __app.__html.addClass('document-ready');
        var a = p._buildRunList();
        for (var n = 0; n < a.length; ++n) {
            __app[a[n]].__run()
        }
    },
};
$(document).ready(function() {
    __app.__main.__run()
});
