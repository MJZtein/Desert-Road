'use strict';

function t(f, a, b, d) {
    f.A.lc(f.$a, a, b, d, void 0)
}

function F(f, a, b, d) {
    f.A.ra ? t(f, a, b, d) : f.A.ff()._OnMessageFromDOM({
        type: "event",
        component: f.$a,
        handler: a,
        dispatchOpts: d || null,
        data: b,
        responseId: null
    })
}

function H(f, a, b) {
    f.A.C(f.$a, a, b)
}

function I(f, a) {
    for (const [b, d] of a) H(f, b, d)
}

function K(f) {
    f.Qb || (f.A.Re(f.ae), f.Qb = !0)
}
window.Ca = class {
    constructor(f, a) {
        this.A = f;
        this.$a = a;
        this.Qb = !1;
        this.ae = () => this.Fa()
    }
    ed() {}
    Fa() {}
};

function L(f) {
    -1 !== f.Qa && (self.clearTimeout(f.Qa), f.Qa = -1)
}
window.Ie = class {
    constructor(f, a) {
        this.Mc = f;
        this.tg = a;
        this.Qa = -1;
        this.Rb = -Infinity;
        this.be = () => {
            this.Qa = -1;
            this.Rb = Date.now();
            this.fb = !0;
            this.Mc();
            this.fb = !1
        };
        this.Kd = this.fb = !1
    }
    c() {
        L(this);
        this.be = this.Mc = null
    }
};
"use strict";

function M(f, a) {
    H(f, "get-element", b => {
        const d = f.ca.get(b.elementId);
        return a(d, b)
    })
}
window.Mg = class extends self.Ca {
    constructor(f, a) {
        super(f, a);
        this.ca = new Map;
        this.Lc = !0;
        I(this, [
            ["create", () => {
                throw Error("required override");
            }],
            ["destroy", b => {
                {
                    b = b.elementId;
                    const d = this.ca.get(b);
                    this.Lc && d.parentElement.removeChild(d);
                    this.ca.delete(b)
                }
            }],
            ["set-visible", b => {
                this.Lc && (this.ca.get(b.elementId).style.display = b.isVisible ? "" : "none")
            }],
            ["update-position", b => {
                if (this.Lc) {
                    var d = this.ca.get(b.elementId);
                    d.style.left = b.left + "px";
                    d.style.top = b.top + "px";
                    d.style.width = b.width + "px";
                    d.style.height =
                        b.height + "px";
                    b = b.fontSize;
                    null !== b && (d.style.fontSize = b + "em")
                }
            }],
            ["update-state", b => {
                this.ca.get(b.elementId);
                throw Error("required override");
            }],
            ["focus", b => this.Fc(b)],
            ["set-css-style", b => {
                this.ca.get(b.elementId).style[b.prop] = b.val
            }],
            ["set-attribute", b => {
                this.ca.get(b.elementId).setAttribute(b.name, b.val)
            }],
            ["remove-attribute", b => {
                this.ca.get(b.elementId).removeAttribute(b.name)
            }]
        ]);
        M(this, b => b)
    }
    Fc(f) {
        var a = this.ca.get(f.elementId);
        f.focus ? a.focus() : a.blur()
    }
};
"use strict"; {
    const f = /(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);
    let a = 0;

    function b(m) {
        const c = document.createElement("script");
        c.async = !1;
        c.type = "module";
        return m.Dg ? new Promise(k => {
            const l = "c3_resolve_" + a;
            ++a;
            self[l] = k;
            c.textContent = m.Gg + `\n\nself["${l}"]();`;
            document.head.appendChild(c)
        }) : new Promise((k, l) => {
            c.onload = k;
            c.onerror = l;
            c.src = m;
            document.head.appendChild(c)
        })
    }
    let d = !1,
        g = !1;

    function n() {
        if (!d) {
            try {
                new Worker("blob://", {
                    get type() {
                        g = !0
                    }
                })
            } catch (m) {}
            d = !0
        }
        return g
    }
    let p =
        new Audio;
    const x = {
        "audio/webm; codecs=opus": !!p.canPlayType("audio/webm; codecs=opus"),
        "audio/ogg; codecs=opus": !!p.canPlayType("audio/ogg; codecs=opus"),
        "audio/webm; codecs=vorbis": !!p.canPlayType("audio/webm; codecs=vorbis"),
        "audio/ogg; codecs=vorbis": !!p.canPlayType("audio/ogg; codecs=vorbis"),
        "audio/mp4": !!p.canPlayType("audio/mp4"),
        "audio/mpeg": !!p.canPlayType("audio/mpeg")
    };
    p = null;
    async function B(m) {
        m = await C(m);
        return (new TextDecoder("utf-8")).decode(m)
    }

    function C(m) {
        return new Promise((c,
            k) => {
            const l = new FileReader;
            l.onload = q => c(q.target.result);
            l.onerror = q => k(q);
            l.readAsArrayBuffer(m)
        })
    }
    const w = [];
    let y = 0;
    window.RealFile = window.File;
    const D = [],
        z = new Map,
        E = new Map;
    let G = 0;
    const J = [];
    self.runOnStartup = function(m) {
        if ("function" !== typeof m) throw Error("runOnStartup called without a function");
        J.push(m)
    };
    const e = new Set(["cordova", "playable-ad", "instant-games"]);
    let h = !1;
    window.ma = class m {
        constructor(c) {
            this.ra = c.Ig;
            this.pa = null;
            this.F = "";
            this.Zb = c.Fg;
            this.tb = {};
            this.Ja = this.sb = null;
            this.Ob = [];
            this.hb = this.K = this.Oa = null;
            this.Na = -1;
            this.yg = () => this.Ef();
            this.Ma = [];
            this.u = c.ce;
            !this.ra || "undefined" !== typeof OffscreenCanvas && navigator.userActivation && n() || (this.ra = !1);
            e.has(this.u) && this.ra && (console.warn("[C3 runtime] Worker mode is enabled and supported, but is currently disabled in WebViews. Reverting to DOM mode."), this.ra = !1);
            this.Tb = this.ha = null;
            "html5" !== this.u && "playable-ad" !== this.u || "file" !== location.protocol.substr(0, 4) || alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");
            this.C("runtime", "cordova-fetch-local-file", k => this.nf(k));
            this.C("runtime", "create-job-worker", () => this.pf());
            "cordova" === this.u ? document.addEventListener("deviceready", () => this.xd(c)) : this.xd(c)
        }
        c() {
            this.rc();
            this.pa && (this.pa = this.pa.onmessage = null);
            this.sb && (this.sb.terminate(), this.sb = null);
            this.Ja && (this.Ja.c(), this.Ja = null);
            this.K && (this.K.parentElement.removeChild(this.K), this.K = null)
        }
        nd() {
            return f && "cordova" === this.u
        }
        kc() {
            return f && e.has(this.u) || navigator.standalone
        }
        async xd(c) {
            "macos-wkwebview" ===
            this.u && this.Jc({
                type: "ready"
            });
            if ("playable-ad" === this.u) {
                this.ha = self.c3_base64files;
                this.Tb = {};
                await this.We();
                for (let l = 0, q = c.Ra.length; l < q; ++l) {
                    var k = c.Ra[l].toLowerCase();
                    this.Tb.hasOwnProperty(k) ? c.Ra[l] = {
                        Dg: !0,
                        Gg: this.Tb[k]
                    } : this.ha.hasOwnProperty(k) && (c.Ra[l] = URL.createObjectURL(this.ha[k]))
                }
            }
            c.zg ? this.F = c.zg : (k = location.origin, this.F = ("null" === k ? "file:///" : k) + location.pathname, k = this.F.lastIndexOf("/"), -1 !== k && (this.F = this.F.substr(0, k + 1)));
            c.Kg && (this.tb = c.Kg);
            k = new MessageChannel;
            this.pa =
                k.port1;
            this.pa.onmessage = l => this._OnMessageFromRuntime(l.data);
            window.c3_addPortMessageHandler && window.c3_addPortMessageHandler(l => this.Af(l));
            this.hb = new self.Ee(this);
            await N(this.hb);
            "object" === typeof window.StatusBar && window.StatusBar.hide();
            "object" === typeof window.AndroidFullScreen && window.AndroidFullScreen.immersiveMode();
            this.ra ? await this.hf(c, k.port2) : await this.gf(c, k.port2)
        }
        uc(c) {
            c = this.tb.hasOwnProperty(c) ? this.tb[c] : c.endsWith("/workermain.js") && this.tb.hasOwnProperty("workermain.js") ?
                this.tb["workermain.js"] : "playable-ad" === this.u && this.ha.hasOwnProperty(c.toLowerCase()) ? this.ha[c.toLowerCase()] : c;
            c instanceof Blob && (c = URL.createObjectURL(c));
            return c
        }
        async dc(c, k, l) {
            if (c.startsWith("blob:")) return new Worker(c, l);
            if (this.nd() && "file:" === location.protocol) return c = await this.ub(this.Zb + c), new Worker(URL.createObjectURL(new Blob([c], {
                type: "application/javascript"
            })), l);
            c = new URL(c, k);
            if (location.origin !== c.origin) {
                c = await fetch(c);
                if (!c.ok) throw Error("failed to fetch worker script");
                c = await c.blob();
                return new Worker(URL.createObjectURL(c), l)
            }
            return new Worker(c, l)
        }
        wa() {
            return Math.max(window.innerWidth, 1)
        }
        va() {
            return Math.max(window.innerHeight, 1)
        }
        wd(c) {
            var k = this.hb;
            return {
                baseUrl: this.F,
                windowInnerWidth: this.wa(),
                windowInnerHeight: this.va(),
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: m.Va(),
                projectData: c.Rg,
                previewImageBlobs: window.cr_previewImageBlobs || this.ha,
                previewProjectFileBlobs: window.cr_previewProjectFileBlobs,
                previewProjectFileSWUrls: window.cr_previewProjectFiles,
                swClientId: window.Pg || "",
                exportType: c.ce,
                isDebug: -1 < self.location.search.indexOf("debug"),
                ife: !!self.Qg,
                jobScheduler: {
                    inputPort: k.Sc,
                    outputPort: k.Zc,
                    maxNumWorkers: k.vg
                },
                supportedAudioFormats: x,
                opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.Zb + "opus.wasm.js",
                opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl || this.Zb + "opus.wasm.wasm",
                isiOSCordova: this.nd(),
                isiOSWebView: this.kc(),
                isFBInstantAvailable: "undefined" !== typeof self.FBInstant
            }
        }
        async hf(c, k) {
            var l = this.uc(c.Jg);
            this.sb = await this.dc(l, this.F, {
                type: "module",
                name: "Runtime"
            });
            this.K = document.createElement("canvas");
            this.K.style.display = "none";
            l = this.K.transferControlToOffscreen();
            document.body.appendChild(this.K);
            window.c3canvas = this.K;
            this.sb.postMessage(Object.assign(this.wd(c), {
                type: "init-runtime",
                isInWorker: !0,
                messagePort: k,
                canvas: l,
                workerDependencyScripts: c.dd || [],
                engineScripts: c.Ra,
                projectScripts: c.ee,
                mainProjectScript: c.de,
                projectScriptsStatus: self.C3_ProjectScriptsStatus
            }), [k, l, ...O(this.hb)]);
            this.Ob = D.map(q => new q(this));
            this.vd();
            self.c3_callFunction = (q, v) => this.Oa.jf(q, v);
            "preview" === this.u && (self.goToLastErrorScript = () => this.lc("runtime", "go-to-last-error-script"))
        }
        async gf(c, k) {
            this.K = document.createElement("canvas");
            this.K.style.display = "none";
            document.body.appendChild(this.K);
            window.c3canvas = this.K;
            this.Ob = D.map(r => new r(this));
            this.vd();
            var l = c.Ra.map(r => "string" === typeof r ? (new URL(r, this.F)).toString() : r);
            Array.isArray(c.dd) && l.unshift(...c.dd);
            l = await Promise.all(l.map(r => this.yc(r)));
            await Promise.all(l.map(r => b(r)));
            l = self.C3_ProjectScriptsStatus;
            const q = c.de,
                v = c.ee;
            for (let [r, u] of v)
                if (u || (u = r), r === q) try {
                    u = await this.yc(u), await b(u), "preview" !== this.u || l[r] || this.Fd(r, "main script did not run to completion")
                } catch (A) {
                    this.Fd(r, A)
                } else if ("scriptsInEvents.js" === r || r.endsWith("/scriptsInEvents.js")) u = await this.yc(u), await b(u);
            "preview" === this.u && "object" !== typeof self.Lg.Ng ? (this.Hb(), console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
                alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")) : (c = Object.assign(this.wd(c), {
                isInWorker: !1,
                messagePort: k,
                canvas: this.K,
                runOnStartupFunctions: J
            }), this.zd(), this.Ja = self.C3_CreateRuntime(c), await self.C3_InitRuntime(this.Ja, c))
        }
        Fd(c, k) {
            this.Hb();
            console.error(`[Preview] Failed to load project main script (${c}): `, k);
            alert(`Failed to load project main script (${c}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)
        }
        zd() {
            this.Hb()
        }
        Hb() {
            const c =
                window.Ag;
            c && (c.parentElement.removeChild(c), window.Ag = null)
        }
        async pf() {
            const c = await P(this.hb);
            return {
                outputPort: c,
                transferables: [c]
            }
        }
        ff() {
            if (this.ra) throw Error("not available in worker mode");
            return this.Ja
        }
        lc(c, k, l, q, v) {
            this.pa.postMessage({
                type: "event",
                component: c,
                handler: k,
                dispatchOpts: q || null,
                data: l,
                responseId: null
            }, v)
        }
        od(c, k, l, q, v) {
            const r = G++,
                u = new Promise((A, T) => {
                    E.set(r, {
                        resolve: A,
                        reject: T
                    })
                });
            this.pa.postMessage({
                    type: "event",
                    component: c,
                    handler: k,
                    dispatchOpts: q || null,
                    data: l,
                    responseId: r
                },
                v);
            return u
        }["_OnMessageFromRuntime"](c) {
            const k = c.type;
            if ("event" === k) return this.uf(c);
            if ("result" === k) this.Hf(c);
            else if ("runtime-ready" === k) this.If();
            else if ("alert-error" === k) this.Hb(), alert(c.message);
            else if ("creating-runtime" === k) this.zd();
            else throw Error(`unknown message '${k}'`);
        }
        uf(c) {
            const k = c.component,
                l = c.handler,
                q = c.data,
                v = c.responseId;
            if (c = z.get(k))
                if (c = c.get(l)) {
                    var r = null;
                    try {
                        r = c(q)
                    } catch (u) {
                        console.error(`Exception in '${k}' handler '${l}':`, u);
                        null !== v && this.Fb(v, !1, "" + u);
                        return
                    }
                    if (null ===
                        v) return r;
                    r && r.then ? r.then(u => this.Fb(v, !0, u)).catch(u => {
                        console.error(`Rejection from '${k}' handler '${l}':`, u);
                        this.Fb(v, !1, "" + u)
                    }) : this.Fb(v, !0, r)
                } else console.warn(`[DOM] No handler '${l}' for component '${k}'`);
            else console.warn(`[DOM] No event handlers for component '${k}'`)
        }
        Fb(c, k, l) {
            let q;
            l && l.transferables && (q = l.transferables);
            this.pa.postMessage({
                type: "result",
                responseId: c,
                isOk: k,
                result: l
            }, q)
        }
        Hf(c) {
            const k = c.responseId,
                l = c.isOk;
            c = c.result;
            const q = E.get(k);
            l ? q.resolve(c) : q.reject(c);
            E.delete(k)
        }
        C(c,
            k, l) {
            let q = z.get(c);
            q || (q = new Map, z.set(c, q));
            if (q.has(k)) throw Error(`[DOM] Component '${c}' already has handler '${k}'`);
            q.set(k, l)
        }
        static Sa(c) {
            if (D.includes(c)) throw Error("DOM handler already added");
            D.push(c)
        }
        vd() {
            for (const c of this.Ob)
                if ("runtime" === c.$a) {
                    this.Oa = c;
                    return
                }
            throw Error("cannot find runtime DOM handler");
        }
        Af(c) {
            this.lc("debugger", "message", c)
        }
        If() {
            for (const c of this.Ob) c.ed()
        }
        static Va() {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement ||
                h)
        }
        static Ib(c) {
            h = !!c
        }
        Re(c) {
            this.Ma.push(c);
            this.Ic()
        }
        Uf(c) {
            c = this.Ma.indexOf(c);
            if (-1 === c) throw Error("invalid callback");
            this.Ma.splice(c, 1);
            this.Ma.length || this.rc()
        }
        Ic() {
            -1 === this.Na && this.Ma.length && (this.Na = requestAnimationFrame(this.yg))
        }
        rc() {
            -1 !== this.Na && (cancelAnimationFrame(this.Na), this.Na = -1)
        }
        Ef() {
            this.Na = -1;
            for (const c of this.Ma) c();
            this.Ic()
        }
        ua(c) {
            this.Oa.ua(c)
        }
        Ea(c) {
            this.Oa.Ea(c)
        }
        Hc() {
            this.Oa.Hc()
        }
        Ab(c) {
            this.Oa.Ab(c)
        }
        De() {
            return !!x["audio/webm; codecs=opus"]
        }
        async rg(c) {
            c = await this.od("runtime",
                "opus-decode", {
                    arrayBuffer: c
                }, null, [c]);
            return new Float32Array(c)
        }
        Ce(c) {
            return /^(?:[a-z\-]+:)?\/\//.test(c) || "data:" === c.substr(0, 5) || "blob:" === c.substr(0, 5)
        }
        md(c) {
            return !this.Ce(c)
        }
        async yc(c) {
            return "cordova" === this.u && (c.startsWith("file:") || "file:" === location.protocol && this.md(c)) ? (c.startsWith(this.F) && (c = c.substr(this.F.length)), c = await this.ub(c), URL.createObjectURL(new Blob([c], {
                type: "application/javascript"
            }))) : c
        }
        async nf(c) {
            const k = c.filename;
            switch (c.as) {
                case "text":
                    return await this.ve(k);
                case "buffer":
                    return await this.ub(k);
                default:
                    throw Error("unsupported type");
            }
        }
        hd(c) {
            const k = window.cordova.file.applicationDirectory + "www/" + c.toLowerCase();
            return new Promise((l, q) => {
                window.resolveLocalFileSystemURL(k, v => {
                    v.file(l, q)
                }, q)
            })
        }
        async ve(c) {
            c = await this.hd(c);
            return await B(c)
        }
        sc() {
            if (w.length && !(8 <= y)) {
                y++;
                var c = w.shift();
                this.Xe(c.filename, c.Hg, c.Cg)
            }
        }
        ub(c) {
            return new Promise((k, l) => {
                w.push({
                    filename: c,
                    Hg: q => {
                        y--;
                        this.sc();
                        k(q)
                    },
                    Cg: q => {
                        y--;
                        this.sc();
                        l(q)
                    }
                });
                this.sc()
            })
        }
        async Xe(c, k,
            l) {
            try {
                const q = await this.hd(c),
                    v = await C(q);
                k(v)
            } catch (q) {
                l(q)
            }
        }
        Jc(c) {
            if ("windows-webview2" === this.u) window.chrome.webview.postMessage(JSON.stringify(c));
            else if ("macos-wkwebview" === this.u) window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(c));
            else throw Error("cannot send wrapper message");
        }
        async We() {
            const c = [];
            for (const [k, l] of Object.entries(this.ha)) c.push(this.Ve(k, l));
            await Promise.all(c)
        }
        async Ve(c, k) {
            if ("object" === typeof k) this.ha[c] = new Blob([k.str], {
                    type: k.type
                }), this.Tb[c] =
                k.str;
            else {
                let l = await this.df(k);
                l || (l = this.Ze(k));
                this.ha[c] = l
            }
        }
        async df(c) {
            try {
                return await (await fetch(c)).blob()
            } catch (k) {
                return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.", k), null
            }
        }
        Ze(c) {
            c = this.Of(c);
            return this.Ue(c.data, c.Eg)
        }
        Of(c) {
            var k = c.indexOf(",");
            if (0 > k) throw new URIError("expected comma in data: uri");
            var l = c.substring(k + 1);
            k = c.substring(5, k).split(";");
            c = k[0] || "";
            const q = k[2];
            l = "base64" === k[1] || "base64" === q ? atob(l) : decodeURIComponent(l);
            return {
                Eg: c,
                data: l
            }
        }
        Ue(c, k) {
            var l = c.length;
            let q = l >> 2,
                v = new Uint8Array(l),
                r = new Uint32Array(v.buffer, 0, q),
                u, A;
            for (A = u = 0; u < q; ++u) r[u] = c.charCodeAt(A++) | c.charCodeAt(A++) << 8 | c.charCodeAt(A++) << 16 | c.charCodeAt(A++) << 24;
            for (l &= 3; l--;) v[A] = c.charCodeAt(A), ++A;
            return new Blob([v], {
                type: k
            })
        }
    }
}
"use strict"; {
    const f = self.ma;

    function a(e) {
        return e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || e.originalEvent && e.originalEvent.sourceCapabilities && e.originalEvent.sourceCapabilities.firesTouchEvents
    }
    const b = new Map([
            ["OSLeft", "MetaLeft"],
            ["OSRight", "MetaRight"]
        ]),
        d = {
            dispatchRuntimeEvent: !0,
            dispatchUserScriptEvent: !0
        },
        g = {
            dispatchUserScriptEvent: !0
        },
        n = {
            dispatchRuntimeEvent: !0
        };

    function p(e) {
        return new Promise((h, m) => {
            const c = document.createElement("link");
            c.onload = () => h(c);
            c.onerror = k => m(k);
            c.rel =
                "stylesheet";
            c.href = e;
            document.head.appendChild(c)
        })
    }

    function x(e) {
        return new Promise((h, m) => {
            const c = new Image;
            c.onload = () => h(c);
            c.onerror = k => m(k);
            c.src = e
        })
    }
    async function B(e) {
        e = URL.createObjectURL(e);
        try {
            return await x(e)
        } finally {
            URL.revokeObjectURL(e)
        }
    }

    function C(e) {
        return new Promise((h, m) => {
            let c = new FileReader;
            c.onload = k => h(k.target.result);
            c.onerror = k => m(k);
            c.readAsText(e)
        })
    }
    async function w(e, h, m) {
        if (!/firefox/i.test(navigator.userAgent)) return await B(e);
        var c = await C(e);
        c = (new DOMParser).parseFromString(c,
            "image/svg+xml");
        const k = c.documentElement;
        if (k.hasAttribute("width") && k.hasAttribute("height")) {
            const l = k.getAttribute("width"),
                q = k.getAttribute("height");
            if (!l.includes("%") && !q.includes("%")) return await B(e)
        }
        k.setAttribute("width", h + "px");
        k.setAttribute("height", m + "px");
        c = (new XMLSerializer).serializeToString(c);
        e = new Blob([c], {
            type: "image/svg+xml"
        });
        return await B(e)
    }

    function y(e) {
        do {
            if (e.parentNode && e.hasAttribute("contenteditable")) return !0;
            e = e.parentNode
        } while (e);
        return !1
    }
    const D = new Set(["canvas",
        "body", "html"
    ]);

    function z(e) {
        D.has(e.target.tagName.toLowerCase()) && e.preventDefault()
    }

    function E(e) {
        (e.metaKey || e.ctrlKey) && e.preventDefault()
    }
    self.C3_GetSvgImageSize = async function(e) {
        e = await B(e);
        if (0 < e.width && 0 < e.height) return [e.width, e.height]; {
            e.style.position = "absolute";
            e.style.left = "0px";
            e.style.top = "0px";
            e.style.visibility = "hidden";
            document.body.appendChild(e);
            const h = e.getBoundingClientRect();
            document.body.removeChild(e);
            return [h.width, h.height]
        }
    };
    self.C3_RasterSvgImageBlob = async function(e,
        h, m, c, k) {
        e = await w(e, h, m);
        const l = document.createElement("canvas");
        l.width = c;
        l.height = k;
        l.getContext("2d").drawImage(e, 0, 0, h, m);
        return l
    };
    let G = !1;
    document.addEventListener("pause", () => G = !0);
    document.addEventListener("resume", () => G = !1);

    function J() {
        try {
            return window.parent && window.parent.document.hasFocus()
        } catch (e) {
            return !1
        }
    }
    f.Sa(class extends self.Ca {
        constructor(e) {
            super(e, "runtime");
            this.Pd = !0;
            this.Pa = -1;
            this.ad = "any";
            this.Gd = this.Hd = !1;
            this.Vc = this.pb = this.ya = null;
            e.C("canvas", "update-size", c =>
                this.Lf(c));
            e.C("runtime", "invoke-download", c => this.yf(c));
            e.C("runtime", "raster-svg-image", c => this.Ff(c));
            e.C("runtime", "get-svg-image-size", c => this.wf(c));
            e.C("runtime", "set-target-orientation", c => this.Jf(c));
            e.C("runtime", "register-sw", () => this.Gf());
            e.C("runtime", "post-to-debugger", c => this.Bd(c));
            e.C("runtime", "go-to-script", c => this.Bd(c));
            e.C("runtime", "before-start-ticking", () => this.mf());
            e.C("runtime", "debug-highlight", c => this.qf(c));
            e.C("runtime", "enable-device-orientation", () => this.Te());
            e.C("runtime", "enable-device-motion", () => this.Se());
            e.C("runtime", "add-stylesheet", c => this.lf(c));
            e.C("runtime", "alert", c => this.zc(c));
            e.C("runtime", "hide-cordova-splash", () => this.xf());
            const h = new Set(["input", "textarea", "datalist"]);
            window.addEventListener("contextmenu", c => {
                const k = c.target;
                h.has(k.tagName.toLowerCase()) || y(k) || c.preventDefault()
            });
            const m = e.K;
            window.addEventListener("selectstart", z);
            window.addEventListener("gesturehold", z);
            m.addEventListener("selectstart", z);
            m.addEventListener("gesturehold",
                z);
            window.addEventListener("touchstart", z, {
                passive: !1
            });
            "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", z, {
                passive: !1
            }), m.addEventListener("pointerdown", z)) : m.addEventListener("touchstart", z);
            this.mb = 0;
            window.addEventListener("mousedown", c => {
                1 === c.button && c.preventDefault()
            });
            window.addEventListener("mousewheel", E, {
                passive: !1
            });
            window.addEventListener("wheel", E, {
                passive: !1
            });
            window.addEventListener("resize", () => this.Mf());
            window.addEventListener("fullscreenchange", () => this.Xa());
            window.addEventListener("webkitfullscreenchange", () => this.Xa());
            window.addEventListener("mozfullscreenchange", () => this.Xa());
            window.addEventListener("fullscreenerror", c => this.Bc(c));
            window.addEventListener("webkitfullscreenerror", c => this.Bc(c));
            window.addEventListener("mozfullscreenerror", c => this.Bc(c));
            e.kc() && window.addEventListener("focusout", () => {
                {
                    const l = document.activeElement;
                    if (l) {
                        var c = l.tagName.toLowerCase();
                        var k = new Set("email number password search tel text url".split(" "));
                        c = "textarea" ===
                            c ? !0 : "input" === c ? k.has(l.type.toLowerCase() || "text") : y(l)
                    } else c = !1
                }
                c || (document.scrollingElement.scrollTop = 0)
            });
            self.C3WrapperOnMessage = c => this.Nf(c);
            this.Ka = new Set;
            this.Ub = new WeakSet;
            this.oa = !1
        }
        mf() {
            "cordova" === this.A.u ? (document.addEventListener("pause", () => this.Gc(!0)), document.addEventListener("resume", () => this.Gc(!1))) : document.addEventListener("visibilitychange", () => this.Gc(document.hidden));
            return {
                isSuspended: !(!document.hidden && !G)
            }
        }
        ed() {
            window.addEventListener("focus", () => this.Gb("window-focus"));
            window.addEventListener("blur", () => {
                this.Gb("window-blur", {
                    parentHasFocus: J()
                });
                this.mb = 0
            });
            window.addEventListener("keydown", h => this.Ad("keydown", h));
            window.addEventListener("keyup", h => this.Ad("keyup", h));
            window.addEventListener("dblclick", h => this.Dc("dblclick", h, d));
            window.addEventListener("wheel", h => this.Cf(h));
            "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", h => {
                    this.vc(h);
                    this.Ya("pointerdown", h)
                }), this.A.ra && "undefined" !== typeof window.onpointerrawupdate && self === self.top ?
                (this.pb = new self.Ie(() => this.bf(), 5), this.pb.Kd = !0, window.addEventListener("pointerrawupdate", h => this.Df(h))) : window.addEventListener("pointermove", h => this.Ya("pointermove", h)), window.addEventListener("pointerup", h => this.Ya("pointerup", h)), window.addEventListener("pointercancel", h => this.Ya("pointercancel", h))) : (window.addEventListener("mousedown", h => {
                this.vc(h);
                this.Ec("pointerdown", h)
            }), window.addEventListener("mousemove", h => this.Ec("pointermove", h)), window.addEventListener("mouseup", h => this.Ec("pointerup",
                h)), window.addEventListener("touchstart", h => {
                this.vc(h);
                this.Eb("pointerdown", h)
            }), window.addEventListener("touchmove", h => this.Eb("pointermove", h)), window.addEventListener("touchend", h => this.Eb("pointerup", h)), window.addEventListener("touchcancel", h => this.Eb("pointercancel", h)));
            const e = () => this.Hc();
            window.addEventListener("pointerup", e, !0);
            window.addEventListener("touchend", e, !0);
            window.addEventListener("click", e, !0);
            window.addEventListener("keydown", e, !0);
            window.addEventListener("gamepadconnected",
                e, !0)
        }
        Gb(e, h) {
            t(this, e, h || null, n)
        }
        wa() {
            return this.A.wa()
        }
        va() {
            return this.A.va()
        }
        Mf() {
            const e = this.wa(),
                h = this.va();
            this.Gb("window-resize", {
                innerWidth: e,
                innerHeight: h,
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: f.Va()
            });
            this.A.kc() && (-1 !== this.Pa && clearTimeout(this.Pa), this.Cd(e, h, 0))
        }
        Vf(e, h, m) {
            -1 !== this.Pa && clearTimeout(this.Pa);
            this.Pa = setTimeout(() => this.Cd(e, h, m), 48)
        }
        Cd(e, h, m) {
            const c = this.wa(),
                k = this.va();
            this.Pa = -1;
            c != e || k != h ? this.Gb("window-resize", {
                innerWidth: c,
                innerHeight: k,
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: f.Va()
            }) : 10 > m && this.Vf(c, k, m + 1)
        }
        Jf(e) {
            this.ad = e.targetOrientation
        }
        ng() {
            const e = this.ad;
            if (screen.orientation && screen.orientation.lock) screen.orientation.lock(e).catch(h => console.warn("[Construct 3] Failed to lock orientation: ", h));
            else try {
                let h = !1;
                screen.lockOrientation ? h = screen.lockOrientation(e) : screen.webkitLockOrientation ? h = screen.webkitLockOrientation(e) : screen.mozLockOrientation ? h = screen.mozLockOrientation(e) : screen.msLockOrientation && (h = screen.msLockOrientation(e));
                h || console.warn("[Construct 3] Failed to lock orientation")
            } catch (h) {
                console.warn("[Construct 3] Failed to lock orientation: ",
                    h)
            }
        }
        Xa() {
            const e = f.Va();
            e && "any" !== this.ad && this.ng();
            t(this, "fullscreenchange", {
                isFullscreen: e,
                innerWidth: this.wa(),
                innerHeight: this.va()
            })
        }
        Bc(e) {
            console.warn("[Construct 3] Fullscreen request failed: ", e);
            t(this, "fullscreenerror", {
                isFullscreen: f.Va(),
                innerWidth: this.wa(),
                innerHeight: this.va()
            })
        }
        Gc(e) {
            e ? this.A.rc() : this.A.Ic();
            t(this, "visibilitychange", {
                hidden: e
            })
        }
        Ad(e, h) {
            "Backspace" === h.key && z(h);
            const m = b.get(h.code) || h.code;
            F(this, e, {
                code: m,
                key: h.key,
                which: h.which,
                repeat: h.repeat,
                altKey: h.altKey,
                ctrlKey: h.ctrlKey,
                metaKey: h.metaKey,
                shiftKey: h.shiftKey,
                timeStamp: h.timeStamp
            }, d)
        }
        Cf(e) {
            t(this, "wheel", {
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                deltaZ: e.deltaZ,
                deltaMode: e.deltaMode,
                timeStamp: e.timeStamp
            }, d)
        }
        Dc(e, h, m) {
            a(h) || F(this, e, {
                button: h.button,
                buttons: h.buttons,
                clientX: h.clientX,
                clientY: h.clientY,
                pageX: h.pageX,
                pageY: h.pageY,
                timeStamp: h.timeStamp
            }, m)
        }
        Ec(e, h) {
            if (!a(h)) {
                var m = this.mb;
                "pointerdown" === e && 0 !== m ? e = "pointermove" : "pointerup" ===
                    e && 0 !== h.buttons && (e = "pointermove");
                F(this, e, {
                    pointerId: 1,
                    pointerType: "mouse",
                    button: h.button,
                    buttons: h.buttons,
                    lastButtons: m,
                    clientX: h.clientX,
                    clientY: h.clientY,
                    pageX: h.pageX,
                    pageY: h.pageY,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    timeStamp: h.timeStamp
                }, d);
                this.mb = h.buttons;
                this.Dc(h.type, h, g)
            }
        }
        Ya(e, h) {
            if (this.pb && "pointermove" !== e) {
                var m = this.pb;
                m.fb || (L(m), m.Rb = Date.now())
            }
            m = 0;
            "mouse" === h.pointerType && (m = this.mb);
            F(this, e, {
                pointerId: h.pointerId,
                pointerType: h.pointerType,
                button: h.button,
                buttons: h.buttons,
                lastButtons: m,
                clientX: h.clientX,
                clientY: h.clientY,
                pageX: h.pageX,
                pageY: h.pageY,
                width: h.width || 0,
                height: h.height || 0,
                pressure: h.pressure || 0,
                tangentialPressure: h.tangentialPressure || 0,
                tiltX: h.tiltX || 0,
                tiltY: h.tiltY || 0,
                twist: h.twist || 0,
                timeStamp: h.timeStamp
            }, d);
            "mouse" === h.pointerType && (m = "mousemove", "pointerdown" === e ? m = "mousedown" : "pointerup" === e && (m = "mouseup"), this.Dc(m, h, g), this.mb = h.buttons)
        }
        Df(e) {
            this.Vc = e;
            e = this.pb;
            if (-1 === e.Qa) {
                var h = Date.now(),
                    m = h - e.Rb,
                    c = e.tg;
                m >= c && e.Kd ? (e.Rb = h, e.fb = !0, e.Mc(), e.fb = !1) : e.Qa = self.setTimeout(e.be, Math.max(c - m, 4))
            }
        }
        bf() {
            this.Ya("pointermove", this.Vc);
            this.Vc = null
        }
        Eb(e, h) {
            for (let m = 0, c = h.changedTouches.length; m < c; ++m) {
                const k = h.changedTouches[m];
                F(this, e, {
                    pointerId: k.identifier,
                    pointerType: "touch",
                    button: 0,
                    buttons: 0,
                    lastButtons: 0,
                    clientX: k.clientX,
                    clientY: k.clientY,
                    pageX: k.pageX,
                    pageY: k.pageY,
                    width: 2 * (k.radiusX || k.webkitRadiusX || 0),
                    height: 2 * (k.radiusY || k.webkitRadiusY || 0),
                    pressure: k.force || k.webkitForce || 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: k.rotationAngle || 0,
                    timeStamp: h.timeStamp
                }, d)
            }
        }
        vc(e) {
            window !== window.top && window.focus();
            this.yd(e.target) && document.activeElement && !this.yd(document.activeElement) && document.activeElement.blur()
        }
        yd(e) {
            return !e || e === document || e === window || e === document.body || "canvas" === e.tagName.toLowerCase()
        }
        Te() {
            this.Hd || (this.Hd = !0, window.addEventListener("deviceorientation", e => this.sf(e)), window.addEventListener("deviceorientationabsolute", e => this.tf(e)))
        }
        Se() {
            this.Gd || (this.Gd = !0, window.addEventListener("devicemotion",
                e => this.rf(e)))
        }
        sf(e) {
            t(this, "deviceorientation", {
                absolute: !!e.absolute,
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp,
                webkitCompassHeading: e.webkitCompassHeading,
                webkitCompassAccuracy: e.webkitCompassAccuracy
            }, d)
        }
        tf(e) {
            t(this, "deviceorientationabsolute", {
                absolute: !!e.absolute,
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp
            }, d)
        }
        rf(e) {
            let h = null;
            var m = e.acceleration;
            m && (h = {
                x: m.x || 0,
                y: m.y || 0,
                z: m.z || 0
            });
            m = null;
            var c = e.accelerationIncludingGravity;
            c && (m = {
                x: c.x ||
                    0,
                y: c.y || 0,
                z: c.z || 0
            });
            c = null;
            const k = e.rotationRate;
            k && (c = {
                alpha: k.alpha || 0,
                beta: k.beta || 0,
                gamma: k.gamma || 0
            });
            t(this, "devicemotion", {
                acceleration: h,
                accelerationIncludingGravity: m,
                rotationRate: c,
                interval: e.interval,
                timeStamp: e.timeStamp
            }, d)
        }
        Lf(e) {
            const h = this.A.K;
            h.style.width = e.styleWidth + "px";
            h.style.height = e.styleHeight + "px";
            h.style.marginLeft = e.marginLeft + "px";
            h.style.marginTop = e.marginTop + "px";
            this.Pd && (h.style.display = "", this.Pd = !1)
        }
        yf(e) {
            const h = e.url;
            e = e.filename;
            const m = document.createElement("a"),
                c = document.body;
            m.textContent = e;
            m.href = h;
            m.download = e;
            c.appendChild(m);
            m.click();
            c.removeChild(m)
        }
        async Ff(e) {
            var h = e.imageBitmapOpts;
            e = await self.C3_RasterSvgImageBlob(e.blob, e.imageWidth, e.imageHeight, e.surfaceWidth, e.surfaceHeight);
            h = h ? await createImageBitmap(e, h) : await createImageBitmap(e);
            return {
                imageBitmap: h,
                transferables: [h]
            }
        }
        async wf(e) {
            return await self.C3_GetSvgImageSize(e.blob)
        }
        async lf(e) {
            await p(e.url)
        }
        Hc() {
            var e = [...this.Ka];
            this.Ka.clear();
            if (!this.oa)
                for (const h of e)(e = h.play()) &&
                    e.catch(() => {
                        this.Ub.has(h) || this.Ka.add(h)
                    })
        }
        ua(e) {
            if ("function" !== typeof e.play) throw Error("missing play function");
            this.Ub.delete(e);
            let h;
            try {
                h = e.play()
            } catch (m) {
                this.Ka.add(e);
                return
            }
            h && h.catch(() => {
                this.Ub.has(e) || this.Ka.add(e)
            })
        }
        Ea(e) {
            this.Ka.delete(e);
            this.Ub.add(e)
        }
        Ab(e) {
            this.oa = !!e
        }
        xf() {
            navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide()
        }
        qf(e) {
            if (e.show) {
                this.ya || (this.ya = document.createElement("div"), this.ya.id = "inspectOutline", document.body.appendChild(this.ya));
                var h = this.ya;
                h.style.display = "";
                h.style.left = e.left - 1 + "px";
                h.style.top = e.top - 1 + "px";
                h.style.width = e.width + 2 + "px";
                h.style.height = e.height + 2 + "px";
                h.textContent = e.name
            } else this.ya && (this.ya.style.display = "none")
        }
        Gf() {
            window.C3_RegisterSW && window.C3_RegisterSW()
        }
        Bd(e) {
            window.c3_postToMessagePort && (e.from = "runtime", window.c3_postToMessagePort(e))
        }
        jf(e, h) {
            return this.A.od(this.$a, "js-invoke-function", {
                name: e,
                params: h
            }, void 0, void 0)
        }
        zc(e) {
            alert(e.message)
        }
        Nf(e) {
            "entered-fullscreen" === e ? (f.Ib(!0), this.Xa()) :
                "exited-fullscreen" === e ? (f.Ib(!1), this.Xa()) : console.warn("Unknown wrapper message: ", e)
        }
    })
}
"use strict";
async function N(f) {
    if (f.sg) throw Error("already initialised");
    f.sg = !0;
    var a = f.Yb.uc("dispatchworker.js");
    f.Oc = await f.Yb.dc(a, f.F, {
        name: "DispatchWorker"
    });
    a = new MessageChannel;
    f.Sc = a.port1;
    f.Oc.postMessage({
        type: "_init",
        "in-port": a.port2
    }, [a.port2]);
    f.Zc = await P(f)
}

function O(f) {
    return [f.Sc, f.Zc]
}
async function P(f) {
    const a = f.Qd.length;
    var b = f.Yb.uc("jobworker.js");
    b = await f.Yb.dc(b, f.F, {
        name: "JobWorker" + a
    });
    const d = new MessageChannel,
        g = new MessageChannel;
    f.Oc.postMessage({
        type: "_addJobWorker",
        port: d.port1
    }, [d.port1]);
    b.postMessage({
        type: "init",
        number: a,
        "dispatch-port": d.port2,
        "output-port": g.port2
    }, [d.port2, g.port2]);
    f.Qd.push(b);
    return g.port1
}
self.Ee = class {
    constructor(f) {
        this.Yb = f;
        this.F = f.F;
        this.F = "preview" === f.u ? this.F + "c3/workers/" : this.F + f.Zb;
        this.vg = Math.min(navigator.hardwareConcurrency || 2, 16);
        this.Oc = null;
        this.Qd = [];
        this.Zc = this.Sc = null
    }
};
"use strict";
window.C3_IsSupported && (window.c3_runtimeInterface = new self.ma({
    Ig: !1,
    Jg: "workermain.js",
    Ra: ["scripts/c3runtime.js"],
    ee: [],
    de: "",
    Fg: "scripts/",
    dd: [],
    ce: "html5"
}));
"use strict";
async function Q(f, a) {
    a = a.type;
    let b = !0;
    0 === a ? b = await R() : 1 === a && (b = await S());
    t(f, "permission-result", {
        type: a,
        result: b
    })
}
async function R() {
    if (!self.DeviceOrientationEvent || !self.DeviceOrientationEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceOrientationEvent.requestPermission()
    } catch (f) {
        return console.warn("[Touch] Failed to request orientation permission: ", f), !1
    }
}
async function S() {
    if (!self.DeviceMotionEvent || !self.DeviceMotionEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceMotionEvent.requestPermission()
    } catch (f) {
        return console.warn("[Touch] Failed to request motion permission: ", f), !1
    }
}
self.ma.Sa(class extends self.Ca {
    constructor(f) {
        super(f, "touch");
        H(this, "request-permission", a => Q(this, a))
    }
});
"use strict";
async function U(f) {
    if (!f.Aa) try {
        f.Aa = await navigator.wakeLock.request("screen"), f.Aa.addEventListener("release", () => {
            console.log("[Construct 3] Screen wake lock released");
            f.Aa = null;
            t(f, "wake-lock-released")
        }), console.log("[Construct 3] Screen wake lock acquired"), t(f, "wake-lock-acquired")
    } catch (a) {
        console.warn("[Construct 3] Failed to acquire screen wake lock: ", a), t(f, "wake-lock-error")
    }
}

function V() {
    var f = document.body;
    const a = f.style;
    a.setProperty("--temp-sai-top", "env(safe-area-inset-top)");
    a.setProperty("--temp-sai-right", "env(safe-area-inset-right)");
    a.setProperty("--temp-sai-bottom", "env(safe-area-inset-bottom)");
    a.setProperty("--temp-sai-left", "env(safe-area-inset-left)");
    f = getComputedStyle(f);
    f = [f.getPropertyValue("--temp-sai-top"), f.getPropertyValue("--temp-sai-right"), f.getPropertyValue("--temp-sai-bottom"), f.getPropertyValue("--temp-sai-left")].map(b => {
        b = parseInt(b, 10);
        return isFinite(b) ? b : 0
    });
    a.removeProperty("--temp-sai-top");
    a.removeProperty("--temp-sai-right");
    a.removeProperty("--temp-sai-bottom");
    a.removeProperty("--temp-sai-left");
    return f
}
self.ma.Sa(class extends self.Ca {
    constructor(f) {
        super(f, "platform-info");
        I(this, [
            ["get-initial-state", () => this.Cc()],
            ["request-wake-lock", () => U(this)],
            ["release-wake-lock", () => {
                this.Aa && (this.Aa.release(), this.Aa = null)
            }]
        ]);
        window.addEventListener("resize", () => {
            t(this, "window-resize", {
                windowOuterWidth: window.outerWidth,
                windowOuterHeight: window.outerHeight,
                safeAreaInset: V()
            })
        });
        this.Aa = null
    }
    Cc() {
        return {
            screenWidth: screen.width,
            screenHeight: screen.height,
            windowOuterWidth: window.outerWidth,
            windowOuterHeight: window.outerHeight,
            safeAreaInset: V(),
            supportsWakeLock: !!navigator.wakeLock
        }
    }
});
"use strict";

function W(f) {
    window.C3_RegisterSW && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(a => t(f, "sw-message", a.data))
}

function X(f) {
    f = f.orientation;
    if (screen.orientation && screen.orientation.lock) screen.orientation.lock(f).catch(a => console.warn("[Construct 3] Failed to lock orientation: ", a));
    else try {
        let a = !1;
        screen.lockOrientation ? a = screen.lockOrientation(f) : screen.webkitLockOrientation ? a = screen.webkitLockOrientation(f) : screen.mozLockOrientation ? a = screen.mozLockOrientation(f) : screen.msLockOrientation && (a = screen.msLockOrientation(f));
        a || console.warn("[Construct 3] Failed to lock orientation")
    } catch (a) {
        console.warn("[Construct 3] Failed to lock orientation: ",
            a)
    }
}
self.ma.Sa(class extends self.Ca {
    constructor(f) {
        super(f, "browser");
        this.u = "";
        I(this, [
            ["get-initial-state", a => this.Cc(a)],
            ["ready-for-sw-messages", () => W(this)],
            ["alert", a => this.zc(a)],
            ["close", () => {
                navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : window.close()
            }],
            ["set-focus", a => this.Fc(a)],
            ["vibrate", a => {
                navigator.vibrate && navigator.vibrate(a.pattern)
            }],
            ["lock-orientation", a => X(a)],
            ["unlock-orientation", () => {
                try {
                    screen.orientation && screen.orientation.unlock ?
                        screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
                } catch (a) {}
            }],
            ["navigate", a => {
                var b = a.type;
                if ("back" === b) navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : window.back();
                else if ("forward" === b) window.forward();
                else if ("home" === b) window.home();
                else if ("reload" === b) location.reload();
                else if ("url" === b) {
                    b = a.url;
                    var d = a.target;
                    a = a.exportType;
                    "windows-uwp" === a && "undefined" !== typeof Windows ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(b)) : self.cordova && self.cordova.InAppBrowser ? self.cordova.InAppBrowser.open(b, "_system") : "preview" === a || "windows-webview2" === a ? window.open(b, "_blank") : this.Og || (2 === d ? window.top.location = b : 1 === d ? window.parent.location = b : window.location = b)
                } else "new-window" === b && (b = a.url, d = a.tag, "windows-uwp" === a.exportType && "undefined" !== typeof Windows ?
                    Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(b)) : self.cordova && self.cordova.InAppBrowser ? self.cordova.InAppBrowser.open(b, "_system") : window.open(b, d))
            }],
            ["request-fullscreen", a => {
                if ("windows-webview2" === this.u || "macos-wkwebview" === this.u) self.ma.Ib(!0), this.A.Jc({
                    type: "set-fullscreen",
                    fullscreen: !0
                });
                else {
                    const b = {
                        navigationUI: "auto"
                    };
                    a = a.navUI;
                    1 === a ? b.navigationUI = "hide" : 2 === a && (b.navigationUI = "show");
                    a = document.documentElement;
                    a.requestFullscreen ? a.requestFullscreen(b) : a.mozRequestFullScreen ?
                        a.mozRequestFullScreen(b) : a.msRequestFullscreen ? a.msRequestFullscreen(b) : a.webkitRequestFullScreen && ("undefined" !== typeof Element.ALLOW_KEYBOARD_INPUT ? a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : a.webkitRequestFullScreen())
                }
            }],
            ["exit-fullscreen", () => {
                "windows-webview2" === this.u || "macos-wkwebview" === this.u ? (self.ma.Ib(!1), this.A.Jc({
                        type: "set-fullscreen",
                        fullscreen: !1
                    })) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ?
                    document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
            }],
            ["set-hash", a => {
                location.hash = a.hash
            }]
        ]);
        window.addEventListener("online", () => {
            t(this, "online-state", {
                isOnline: !0
            })
        });
        window.addEventListener("offline", () => {
            t(this, "online-state", {
                isOnline: !1
            })
        });
        window.addEventListener("hashchange", () => {
            t(this, "hashchange", {
                location: location.toString()
            })
        });
        document.addEventListener("backbutton", () => {
            t(this, "backbutton")
        });
        "undefined" !== typeof Windows && Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",
            a => {
                a.handled = !0;
                t(this, "backbutton")
            })
    }
    Cc(f) {
        this.u = f.exportType;
        return {
            location: location.toString(),
            isOnline: !!navigator.onLine,
            referrer: document.referrer,
            title: document.title,
            isCookieEnabled: !!navigator.cookieEnabled,
            screenWidth: screen.width,
            screenHeight: screen.height,
            windowOuterWidth: window.outerWidth,
            windowOuterHeight: window.outerHeight,
            isScirraArcade: "undefined" !== typeof window.is_scirra_arcade
        }
    }
    zc(f) {
        alert(f.message)
    }
    Fc(f) {
        f = f.isFocus;
        if ("nwjs" === this.u) {
            const a = "nwjs" === this.u ? nw.Window.get() :
                null;
            f ? a.focus() : a.blur()
        } else f ? window.focus() : window.blur()
    }
});
"use strict"; {
    const f = 180 / Math.PI;
    self.da = class extends self.Ca {
        constructor(a) {
            super(a, "audio");
            this.Nb = this.f = null;
            this.Pb = this.Rc = !1;
            this.qa = () => this.og();
            this.aa = [];
            this.D = [];
            this.ga = null;
            this.Rd = "";
            this.Sd = -1;
            this.ob = new Map;
            this.Wc = 1;
            this.oa = !1;
            this.bd = 0;
            this.ac = 1;
            this.Pc = 0;
            this.Ud = "HRTF";
            this.Ld = "inverse";
            this.Vd = 600;
            this.Td = 1E4;
            this.Xd = 1;
            this.Nd = this.$c = !1;
            this.$d = this.A.De();
            this.ba = new Map;
            this.Ha = new Set;
            this.Tc = !1;
            this.Xc = "";
            this.za = null;
            self.C3Audio_OnMicrophoneStream = (b, d) => this.Bf(b, d);
            this.Mb = null;
            self.C3Audio_GetOutputStream = () => this.vf();
            self.C3Audio_DOMInterface = this;
            I(this, [
                ["create-audio-context", b => this.Ye(b)],
                ["play", b => this.Pf(b)],
                ["stop", b => this.lg(b)],
                ["stop-all", () => this.mg()],
                ["set-paused", b => this.eg(b)],
                ["set-volume", b => this.jg(b)],
                ["fade-volume", b => this.cf(b)],
                ["set-master-volume", b => this.cg(b)],
                ["set-muted", b => this.dg(b)],
                ["set-silent", b => this.gg(b)],
                ["set-looping", b => this.bg(b)],
                ["set-playback-rate", b => this.fg(b)],
                ["seek", b => this.Wf(b)],
                ["preload", b => this.Qf(b)],
                ["unload", b =>
                    this.pg(b)
                ],
                ["unload-all", () => this.qg()],
                ["set-suspended", b => this.hg(b)],
                ["add-effect", b => this.td(b)],
                ["set-effect-param", b => this.Zf(b)],
                ["remove-effects", b => this.Sf(b)],
                ["tick", b => this.Kf(b)],
                ["load-state", b => this.zf(b)]
            ])
        }
        async Ye(a) {
            a.isiOSCordova && (this.$c = !0);
            this.bd = a.timeScaleMode;
            this.Ud = ["equalpower", "HRTF", "soundfield"][a.panningModel];
            this.Ld = ["linear", "inverse", "exponential"][a.distanceModel];
            this.Vd = a.refDistance;
            this.Td = a.maxDistance;
            this.Xd = a.rolloffFactor;
            var b = {
                latencyHint: a.latencyHint
            };
            this.$d || (b.sampleRate = 48E3);
            if ("undefined" !== typeof AudioContext) this.f = new AudioContext(b);
            else if ("undefined" !== typeof webkitAudioContext) this.f = new webkitAudioContext(b);
            else throw Error("Web Audio API not supported");
            this.ud();
            this.f.onstatechange = () => {
                "running" !== this.f.state && this.ud()
            };
            this.Nb = this.f.createGain();
            this.Nb.connect(this.f.destination);
            b = a.listenerPos;
            this.f.listener.setPosition(b[0], b[1], b[2]);
            this.f.listener.setOrientation(0, 0, 1, 0, -1, 0);
            self.C3_GetAudioContextCurrentTime = () =>
                this.ec();
            try {
                await Promise.all(a.preloadList.map(d => this.Cb(d.originalUrl, d.url, d.type, !1)))
            } catch (d) {
                console.error("[Construct 3] Preloading sounds failed: ", d)
            }
            return {
                sampleRate: this.f.sampleRate
            }
        }
        ud() {
            this.Pb || (this.Rc = !1, window.addEventListener("pointerup", this.qa, !0), window.addEventListener("touchend", this.qa, !0), window.addEventListener("click", this.qa, !0), window.addEventListener("keydown", this.qa, !0), this.Pb = !0)
        }
        $e() {
            this.Pb && (this.Rc = !0, window.removeEventListener("pointerup", this.qa, !0), window.removeEventListener("touchend",
                this.qa, !0), window.removeEventListener("click", this.qa, !0), window.removeEventListener("keydown", this.qa, !0), this.Pb = !1)
        }
        og() {
            if (!this.Rc) {
                var a = this.f;
                "suspended" === a.state && a.resume && a.resume();
                var b = a.createBuffer(1, 220, 22050),
                    d = a.createBufferSource();
                d.buffer = b;
                d.connect(a.destination);
                d.start(0);
                "running" === a.state && this.$e()
            }
        }
        W() {
            return this.f
        }
        ec() {
            return this.f.currentTime
        }
        sa() {
            return this.Nb
        }
        kd(a) {
            return (a = this.ba.get(a.toLowerCase())) ? a[0].P() : this.sa()
        }
        fe(a, b) {
            a = a.toLowerCase();
            let d = this.ba.get(a);
            d || (d = [], this.ba.set(a, d));
            b.ag(d.length);
            b.ig(a);
            d.push(b);
            this.Ed(a)
        }
        Ed(a) {
            let b = this.sa();
            const d = this.ba.get(a);
            if (d && d.length) {
                b = d[0].P();
                for (let g = 0, n = d.length; g < n; ++g) {
                    const p = d[g];
                    g + 1 === n ? p.S(this.sa()) : p.S(d[g + 1].P())
                }
            }
            for (const g of this.la(a)) g.Je(b);
            this.za && this.Xc === a && (this.za.disconnect(), this.za.connect(b))
        }
        wb() {
            return this.Wc
        }
        xb() {
            return this.oa
        }
        $f() {
            this.Nd = !0
        }
        xe(a, b) {
            return b ? this.A.rg(a).then(d => {
                    const g = this.f.createBuffer(1, d.length, 48E3);
                    g.getChannelData(0).set(d);
                    return g
                }) :
                new Promise((d, g) => {
                    this.f.decodeAudioData(a, d, g)
                })
        }
        ua(a) {
            this.A.ua(a)
        }
        Ea(a) {
            this.A.Ea(a)
        }
        pd(a) {
            let b = 0;
            for (let d = 0, g = this.D.length; d < g; ++d) {
                const n = this.D[d];
                this.D[b] = n;
                n.L === a ? n.c() : ++b
            }
            this.D.length = b
        }
        Ke() {
            let a = 0;
            for (let b = 0, d = this.aa.length; b < d; ++b) {
                const g = this.aa[b];
                this.aa[a] = g;
                g.ta() ? g.c() : ++a
            }
            this.aa.length = a
        }* la(a) {
            if (a)
                for (const b of this.D) self.da.ye(b.Z, a) && (yield b);
            else this.ga && !this.ga.T() && (yield this.ga)
        }
        async Cb(a, b, d, g, n) {
            for (const p of this.aa)
                if (p.Ua() === b) return await Y(p),
                    p;
            if (n) return null;
            g && (this.$c || this.Nd) && this.Ke();
            n = "audio/webm; codecs=opus" === d && !this.$d;
            g && n && this.$f();
            a = !g || this.$c || n ? new self.te(this, a, b, d, g, n) : new self.re(this, a, b, d, g);
            this.aa.push(a);
            await Y(a);
            return a
        }
        async tc(a, b, d, g, n) {
            for (const p of this.D)
                if (p.Ua() === b && (p.cc() || n)) return p.Me(g), p;
            a = await this.Cb(a, b, d, n);
            g = "html5" === a.Kc ? new self.se(a.i, a, g) : new self.ue(a.i, a, g);
            this.D.push(g);
            return g
        }
        Qe(a) {
            let b = this.ob.get(a);
            if (!b) {
                let d = null;
                b = {
                    cd: 0,
                    promise: new Promise(g => d = g),
                    resolve: d
                };
                this.ob.set(a, b)
            }
            b.cd++
        }
        Tf(a) {
            const b = this.ob.get(a);
            if (!b) throw Error("expected pending tag");
            b.cd--;
            0 === b.cd && (b.resolve(), this.ob.delete(a))
        }
        qc(a) {
            a || (a = this.Rd);
            return (a = this.ob.get(a)) ? a.promise : Promise.resolve()
        }
        Db() {
            if (0 < this.Ha.size) K(this);
            else
                for (const a of this.D)
                    if (a.ld()) {
                        K(this);
                        break
                    }
        }
        Fa() {
            for (var a of this.Ha) a.Fa();
            a = this.ec();
            for (var b of this.D) b.Fa(a);
            b = this.D.filter(d => d.ld()).map(d => d.Ta());
            t(this, "state", {
                tickCount: this.Sd,
                audioInstances: b,
                analysers: [...this.Ha].map(d => d.Ae())
            });
            0 === b.length && 0 === this.Ha.size && this.Qb && (this.A.Uf(this.ae), this.Qb = !1)
        }
        mc(a, b, d) {
            t(this, "trigger", {
                type: a,
                tag: b,
                aiid: d
            })
        }
        async Pf(a) {
            const b = a.originalUrl,
                d = a.url,
                g = a.type,
                n = a.isMusic,
                p = a.tag,
                x = a.isLooping,
                B = a.vol,
                C = a.pos,
                w = a.panning;
            let y = a.off;
            0 < y && !a.trueClock && (this.f.getOutputTimestamp ? (a = this.f.getOutputTimestamp(), y = y - a.performanceTime / 1E3 + a.contextTime) : y = y - performance.now() / 1E3 + this.f.currentTime);
            this.Rd = p;
            this.Qe(p);
            try {
                this.ga = await this.tc(b, d, g, p, n), w ? (this.ga.zb(!0), this.ga.Le(w.x,
                    w.y, w.angle, w.innerAngle, w.outerAngle, w.outerGain), w.hasOwnProperty("uid") && this.ga.Ne(w.uid)) : this.ga.zb(!1), this.ga.Play(x, B, C, y)
            } catch (D) {
                console.error("[Construct 3] Audio: error starting playback: ", D);
                return
            } finally {
                this.Tf(p)
            }
            K(this)
        }
        lg(a) {
            a = a.tag;
            for (const b of this.la(a)) b.na()
        }
        mg() {
            for (const a of this.D) a.na()
        }
        eg(a) {
            const b = a.tag;
            a = a.paused;
            for (const d of this.la(b)) a ? d.Wa() : d.yb();
            this.Db()
        }
        jg(a) {
            const b = a.tag;
            a = a.vol;
            for (const d of this.la(b)) d.Bb(a)
        }
        async cf(a) {
            const b = a.tag,
                d = a.vol,
                g = a.duration;
            a = a.stopOnEnd;
            await this.qc(b);
            for (const n of this.la(b)) n.ze(d, g, a);
            this.Db()
        }
        cg(a) {
            this.Wc = a.vol;
            for (const b of this.D) b.Kb()
        }
        dg(a) {
            const b = a.tag;
            a = a.isMuted;
            for (const d of this.la(b)) d.qd(a)
        }
        gg(a) {
            this.oa = a.isSilent;
            this.A.Ab(this.oa);
            for (const b of this.D) b.Jb()
        }
        bg(a) {
            const b = a.tag;
            a = a.isLooping;
            for (const d of this.la(b)) d.oc(a)
        }
        async fg(a) {
            const b = a.tag;
            a = a.rate;
            await this.qc(b);
            for (const d of this.la(b)) d.sd(a)
        }
        async Wf(a) {
            const b = a.tag;
            a = a.pos;
            await this.qc(b);
            for (const d of this.la(b)) d.nc(a)
        }
        async Qf(a) {
            const b =
                a.originalUrl,
                d = a.url,
                g = a.type;
            a = a.isMusic;
            try {
                await this.tc(b, d, g, "", a)
            } catch (n) {
                console.error("[Construct 3] Audio: error preloading: ", n)
            }
        }
        async pg(a) {
            if (a = await this.Cb("", a.url, a.type, a.isMusic, !0)) a.c(), a = this.aa.indexOf(a), -1 !== a && this.aa.splice(a, 1)
        }
        qg() {
            for (const a of this.aa) a.c();
            this.aa.length = 0
        }
        hg(a) {
            a = a.isSuspended;
            !a && this.f.resume && this.f.resume();
            for (const b of this.D) b.pc(a);
            a && this.f.suspend && this.f.suspend()
        }
        Kf(a) {
            this.ac = a.timeScale;
            this.Pc = a.gameTime;
            this.Sd = a.tickCount;
            if (0 !==
                this.bd)
                for (var b of this.D) b.Ga();
            (b = a.listenerPos) && this.f.listener.setPosition(b[0], b[1], b[2]);
            for (const d of a.instPans) {
                a = d.uid;
                for (const g of this.D) g.fa === a && g.rd(d.x, d.y, d.angle)
            }
        }
        async td(a) {
            var b = a.type;
            const d = a.tag;
            var g = a.params;
            if ("filter" === b) g = new self.le(this, ...g);
            else if ("delay" === b) g = new self.je(this, ...g);
            else if ("convolution" === b) {
                b = null;
                try {
                    b = await this.Cb(a.bufferOriginalUrl, a.bufferUrl, a.bufferType, !1)
                } catch (n) {
                    console.log("[Construct 3] Audio: error loading convolution: ",
                        n);
                    return
                }
                g = new self.ie(this, b.$, ...g);
                g.Xf(a.bufferOriginalUrl, a.bufferType)
            } else if ("flanger" === b) g = new self.me(this, ...g);
            else if ("phaser" === b) g = new self.oe(this, ...g);
            else if ("gain" === b) g = new self.ne(this, ...g);
            else if ("tremolo" === b) g = new self.qe(this, ...g);
            else if ("ringmod" === b) g = new self.pe(this, ...g);
            else if ("distortion" === b) g = new self.ke(this, ...g);
            else if ("compressor" === b) g = new self.he(this, ...g);
            else if ("analyser" === b) g = new self.ge(this, ...g);
            else throw Error("invalid effect type");
            this.fe(d,
                g);
            this.Dd()
        }
        Zf(a) {
            const b = a.index,
                d = a.param,
                g = a.value,
                n = a.ramp,
                p = a.time;
            a = this.ba.get(a.tag);
            !a || 0 > b || b >= a.length || (a[b].X(d, g, n, p), this.Dd())
        }
        Sf(a) {
            a = a.tag.toLowerCase();
            const b = this.ba.get(a);
            if (b && b.length) {
                for (const d of b) d.c();
                this.ba.delete(a);
                this.Ed(a)
            }
        }
        Pe(a) {
            this.Ha.add(a);
            this.Db()
        }
        Rf(a) {
            this.Ha.delete(a)
        }
        Dd() {
            this.Tc || (this.Tc = !0, Promise.resolve().then(() => this.af()))
        }
        af() {
            const a = {};
            for (const [b, d] of this.ba) a[b] = d.map(g => g.Ta());
            t(this, "fxstate", {
                fxstate: a
            });
            this.Tc = !1
        }
        async zf(a) {
            const b =
                a.saveLoadMode;
            if (3 !== b)
                for (var d of this.D) d.ta() && 1 === b || (d.ta() || 2 !== b) && d.na();
            for (const g of this.ba.values())
                for (const n of g) n.c();
            this.ba.clear();
            this.ac = a.timeScale;
            this.Pc = a.gameTime;
            d = a.listenerPos;
            this.f.listener.setPosition(d[0], d[1], d[2]);
            this.oa = a.isSilent;
            this.A.Ab(this.oa);
            this.Wc = a.masterVolume;
            d = [];
            for (const g of Object.values(a.effects)) d.push(Promise.all(g.map(n => this.td(n))));
            await Promise.all(d);
            await Promise.all(a.playing.map(g => this.kf(g, b)));
            this.Db()
        }
        async kf(a, b) {
            if (3 !==
                b) {
                var d = a.bufferOriginalUrl,
                    g = a.bufferUrl,
                    n = a.bufferType,
                    p = a.isMusic,
                    x = a.tag,
                    B = a.isLooping,
                    C = a.volume,
                    w = a.playbackTime;
                if (!p || 1 !== b)
                    if (p || 2 !== b) {
                        b = null;
                        try {
                            b = await this.tc(d, g, n, x, p)
                        } catch (y) {
                            console.error("[Construct 3] Audio: error loading audio state: ", y);
                            return
                        }
                        b.He(a.pan);
                        b.Play(B, C, w, 0);
                        a.isPlaying || b.Wa();
                        b.xc(a)
                    }
            }
        }
        Bf(a, b) {
            this.za && this.za.disconnect();
            this.Xc = b.toLowerCase();
            this.za = this.f.createMediaStreamSource(a);
            this.za.connect(this.kd(this.Xc))
        }
        vf() {
            this.Mb || (this.Mb = this.f.createMediaStreamDestination(),
                this.Nb.connect(this.Mb));
            return this.Mb.stream
        }
        static ye(a, b) {
            return a.length !== b.length ? !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
        }
        static Oe(a) {
            return a * f
        }
        static we(a) {
            return Math.pow(10, a / 20)
        }
        static jd(a) {
            return Math.max(Math.min(self.da.we(a), 1), 0)
        }
        static Ge(a) {
            return Math.log(a) / Math.log(10) * 20
        }
        static Fe(a) {
            return self.da.Ge(Math.max(Math.min(a, 1), 0))
        }
        static Bg(a, b) {
            return 1 - Math.exp(-b * a)
        }
    };
    self.ma.Sa(self.da)
}
"use strict";

function Y(f) {
    f.Sb || (f.Sb = f.wc());
    return f.Sb
}
self.fd = class {
    constructor(f, a, b, d, g) {
        this.i = f;
        this.xg = a;
        this.Ba = b;
        this.R = d;
        this.ug = g;
        this.Kc = "";
        this.Sb = null
    }
    c() {
        this.Sb = this.i = null
    }
    wc() {}
    W() {
        return this.i.W()
    }
    hc() {
        return this.xg
    }
    Ua() {
        return this.Ba
    }
    fc() {
        return this.R
    }
    ta() {
        return this.ug
    }
    ea() {}
};
"use strict";
self.re = class extends self.fd {
    constructor(f, a, b, d, g) {
        super(f, a, b, d, g);
        this.Kc = "html5";
        this.J = new Audio;
        this.J.crossOrigin = "anonymous";
        this.J.autoplay = !1;
        this.J.preload = "auto";
        this.ib = this.jb = null;
        this.J.addEventListener("canplaythrough", () => !0);
        this.nb = this.W().createGain();
        this.lb = null;
        this.J.addEventListener("canplay", () => {
            this.jb && (this.jb(), this.ib = this.jb = null);
            !this.lb && this.J && (this.lb = this.W().createMediaElementSource(this.J), this.lb.connect(this.nb))
        });
        this.onended = null;
        this.J.addEventListener("ended",
            () => {
                if (this.onended) this.onended()
            });
        this.J.addEventListener("error", n => {
            console.error(`[Construct 3] Audio '${this.Ba}' error: `, n);
            this.ib && (this.ib(n), this.ib = this.jb = null)
        })
    }
    c() {
        this.i.pd(this);
        this.nb.disconnect();
        this.nb = null;
        this.lb.disconnect();
        this.lb = null;
        this.J && !this.J.paused && this.J.pause();
        this.J = this.onended = null;
        super.c()
    }
    wc() {
        return new Promise((f, a) => {
            this.jb = f;
            this.ib = a;
            this.J.src = this.Ba
        })
    }
    O() {
        return this.J
    }
    ea() {
        return this.J.duration
    }
};
"use strict";
async function aa(f) {
    if (f.xa) return f.xa;
    var a = f.i.A;
    if ("cordova" === a.u && a.md(f.Ba) && "file:" === location.protocol) f.xa = await a.ub(f.Ba);
    else {
        a = await fetch(f.Ba);
        if (!a.ok) throw Error(`error fetching audio data: ${a.status} ${a.statusText}`);
        f.xa = await a.arrayBuffer()
    }
}
async function ba(f) {
    if (f.$) return f.$;
    f.$ = await f.i.xe(f.xa, f.wg);
    f.xa = null
}
self.te = class extends self.fd {
    constructor(f, a, b, d, g, n) {
        super(f, a, b, d, g);
        this.Kc = "webaudio";
        this.$ = this.xa = null;
        this.wg = !!n
    }
    c() {
        this.i.pd(this);
        this.$ = this.xa = null;
        super.c()
    }
    async wc() {
        try {
            await aa(this), await ba(this)
        } catch (f) {
            console.error(`[Construct 3] Failed to load audio '${this.Ba}': `, f)
        }
    }
    ea() {
        return this.$ ? this.$.duration : 0
    }
};
"use strict"; {
    let f = 0;
    self.gd = class {
        constructor(a, b, d) {
            this.i = a;
            this.L = b;
            this.Z = d;
            this.Lb = f++;
            this.M = this.W().createGain();
            this.M.connect(this.sa());
            this.B = null;
            this.gb = !1;
            this.ja = [0, 0, 0];
            this.ia = [0, 0, 0];
            this.H = !0;
            this.V = this.ka = this.G = !1;
            this.rb = 1;
            this.Ia = !1;
            this.Y = 1;
            a = this.i.bd;
            this.Uc = 1 === a && !this.ta() || 2 === a;
            this.cb = this.fa = -1;
            this.Zd = !1
        }
        c() {
            this.L = this.i = null;
            this.B && (this.B.disconnect(), this.B = null);
            this.M.disconnect();
            this.M = null
        }
        W() {
            return this.i.W()
        }
        sa() {
            return this.i.kd(this.Z)
        }
        wb() {
            return this.i.wb()
        }
        vb() {
            return this.Uc ?
                this.i.Pc : performance.now() / 1E3
        }
        hc() {
            return this.L.hc()
        }
        Ua() {
            return this.L.Ua()
        }
        fc() {
            return this.L.fc()
        }
        ta() {
            return this.L.ta()
        }
        Me(a) {
            this.Z = a
        }
        T() {}
        cc() {}
        IsPlaying() {
            return !this.H && !this.G && !this.T()
        }
        ld() {
            return !this.H && !this.T()
        }
        Da() {}
        ea() {
            return this.L.ea()
        }
        Play() {}
        na() {}
        Wa() {}
        yb() {}
        Bb(a) {
            this.rb = a;
            this.M.gain.cancelScheduledValues(0);
            this.cb = -1;
            this.M.gain.value = this.ic()
        }
        ze(a, b, d) {
            if (!this.Ia) {
                a *= this.wb();
                var g = this.M.gain;
                g.cancelScheduledValues(0);
                var n = this.i.ec();
                b = n + b;
                g.setValueAtTime(g.value,
                    n);
                g.linearRampToValueAtTime(a, b);
                this.rb = a;
                this.cb = b;
                this.Zd = d
            }
        }
        Kb() {
            this.Bb(this.rb)
        }
        Fa(a) {
            -1 !== this.cb && a >= this.cb && (this.cb = -1, this.Zd && this.na(), this.i.mc("fade-ended", this.Z, this.Lb))
        }
        ic() {
            const a = this.rb * this.wb();
            return isFinite(a) ? a : 0
        }
        qd(a) {
            a = !!a;
            this.Ia !== a && (this.Ia = a, this.Jb())
        }
        xb() {
            return this.i.xb()
        }
        Jb() {}
        oc() {}
        sd(a) {
            this.Y !== a && (this.Y = a, this.Ga())
        }
        Ga() {}
        nc() {}
        pc() {}
        zb(a) {
            a = !!a;
            this.gb !== a && ((this.gb = a) ? (this.B || (this.B = this.W().createPanner(), this.B.panningModel = this.i.Ud, this.B.distanceModel =
                this.i.Ld, this.B.refDistance = this.i.Vd, this.B.maxDistance = this.i.Td, this.B.rolloffFactor = this.i.Xd), this.M.disconnect(), this.M.connect(this.B), this.B.connect(this.sa())) : (this.B.disconnect(), this.M.disconnect(), this.M.connect(this.sa())))
        }
        Le(a, b, d, g, n, p) {
            this.gb && (this.rd(a, b, d), a = self.da.Oe, this.B.coneInnerAngle = a(g), this.B.coneOuterAngle = a(n), this.B.coneOuterGain = p)
        }
        rd(a, b, d) {
            this.gb && (this.ja[0] = a, this.ja[1] = b, this.ja[2] = 0, this.ia[0] = Math.cos(d), this.ia[1] = Math.sin(d), this.ia[2] = 0, this.B.setPosition(...this.ja),
                this.B.setOrientation(...this.ia))
        }
        Ne(a) {
            this.fa = a
        }
        jc() {}
        Je(a) {
            const b = this.B || this.M;
            b.disconnect();
            b.connect(a)
        }
        Ta() {
            return {
                aiid: this.Lb,
                tag: this.Z,
                duration: this.ea(),
                volume: this.rb,
                isPlaying: this.IsPlaying(),
                playbackTime: this.Da(),
                playbackRate: this.Y,
                uid: this.fa,
                bufferOriginalUrl: this.hc(),
                bufferUrl: "",
                bufferType: this.fc(),
                isMusic: this.ta(),
                isLooping: this.V,
                isMuted: this.Ia,
                resumePosition: this.jc(),
                pan: this.Be()
            }
        }
        xc(a) {
            this.sd(a.playbackRate);
            this.qd(a.isMuted)
        }
        Be() {
            if (!this.B) return null;
            const a =
                this.B;
            return {
                pos: this.ja,
                orient: this.ia,
                cia: a.coneInnerAngle,
                coa: a.coneOuterAngle,
                cog: a.coneOuterGain,
                uid: this.fa
            }
        }
        He(a) {
            if (a) {
                this.zb(!0);
                a = this.B;
                var b = a.pos;
                this.ja[0] = b[0];
                this.ja[1] = b[1];
                this.ja[2] = b[2];
                b = a.orient;
                this.ia[0] = b[0];
                this.ia[1] = b[1];
                this.ia[2] = b[2];
                a.setPosition(...this.ja);
                a.setOrientation(...this.ia);
                a.coneInnerAngle = a.cia;
                a.coneOuterAngle = a.coa;
                a.coneOuterGain = a.cog;
                this.fa = a.uid
            } else this.zb(!1)
        }
    }
}
"use strict";
self.se = class extends self.gd {
    constructor(f, a, b) {
        super(f, a, b);
        this.L.nb.connect(this.M);
        this.L.onended = () => this.Ac()
    }
    c() {
        this.na();
        this.L.nb.disconnect();
        super.c()
    }
    O() {
        return this.L.O()
    }
    Ac() {
        this.H = !0;
        this.fa = -1;
        this.i.mc("ended", this.Z, this.Lb)
    }
    T() {
        return this.O().ended
    }
    cc() {
        return this.H ? !0 : this.T()
    }
    Da(f) {
        let a = this.O().currentTime;
        f && (a *= this.Y);
        this.V || (a = Math.min(a, this.ea()));
        return a
    }
    Play(f, a, b) {
        const d = this.O();
        1 !== d.playbackRate && (d.playbackRate = 1);
        d.loop !== f && (d.loop = f);
        this.Bb(a);
        d.muted &&
            (d.muted = !1);
        if (d.currentTime !== b) try {
            d.currentTime = b
        } catch (g) {
            console.warn(`[Construct 3] Exception seeking audio '${this.L.Ua()}' to position '${b}': `, g)
        }
        this.i.ua(d);
        this.G = this.H = !1;
        this.V = f;
        this.Y = 1
    }
    na() {
        const f = this.O();
        f.paused || f.pause();
        this.i.Ea(f);
        this.H = !0;
        this.G = !1;
        this.fa = -1
    }
    Wa() {
        if (!(this.G || this.H || this.T())) {
            var f = this.O();
            f.paused || f.pause();
            this.i.Ea(f);
            this.G = !0
        }
    }
    yb() {
        !this.G || this.H || this.T() || (this.i.ua(this.O()), this.G = !1)
    }
    Jb() {
        this.O().muted = this.Ia || this.xb()
    }
    oc(f) {
        f = !!f;
        this.V !== f && (this.V = f, this.O().loop = f)
    }
    Ga() {
        let f = this.Y;
        this.Uc && (f *= this.i.ac);
        try {
            this.O().playbackRate = f
        } catch (a) {
            console.warn(`[Construct 3] Unable to set playback rate '${f}':`, a)
        }
    }
    nc(f) {
        if (!this.H && !this.T()) try {
            this.O().currentTime = f
        } catch (a) {
            console.warn(`[Construct 3] Error seeking audio to '${f}': `, a)
        }
    }
    jc() {
        return this.Da()
    }
    pc(f) {
        f ? this.IsPlaying() ? (this.O().pause(), this.ka = !0) : this.ka = !1 : this.ka && (this.i.ua(this.O()), this.ka = !1)
    }
};
"use strict";

function Z(f) {
    f.j && f.j.disconnect();
    f.j = null;
    f.Za = null
}
self.ue = class extends self.gd {
    constructor(f, a, b) {
        super(f, a, b);
        this.j = null;
        this.Vb = d => this.Ac(d);
        this.Qc = !0;
        this.Za = null;
        this.N = this.$b = 0;
        this.Yc = 1
    }
    c() {
        this.na();
        Z(this);
        this.Vb = null;
        super.c()
    }
    Ac(f) {
        this.G || this.ka || f.target !== this.Za || (this.H = this.Qc = !0, this.fa = -1, Z(this), this.i.mc("ended", this.Z, this.Lb))
    }
    T() {
        return !this.H && this.j && this.j.loop || this.G ? !1 : this.Qc
    }
    cc() {
        return !this.j || this.H ? !0 : this.T()
    }
    Da(f) {
        let a;
        a = this.G ? this.N : this.vb() - this.$b;
        f && (a *= this.Y);
        this.V || (a = Math.min(a, this.ea()));
        return a
    }
    Play(f,
        a, b, d) {
        this.Yc = 1;
        this.Bb(a);
        Z(this);
        this.j = this.W().createBufferSource();
        this.j.buffer = this.L.$;
        this.j.connect(this.M);
        this.Za = this.j;
        this.j.onended = this.Vb;
        this.j.loop = f;
        this.j.start(d, b);
        this.G = this.H = this.Qc = !1;
        this.V = f;
        this.Y = 1;
        this.$b = this.vb() - b
    }
    na() {
        if (this.j) try {
            this.j.stop(0)
        } catch (f) {}
        this.H = !0;
        this.G = !1;
        this.fa = -1
    }
    Wa() {
        this.G || this.H || this.T() || (this.N = this.Da(!0), this.V && (this.N %= this.ea()), this.G = !0, this.j.stop(0))
    }
    yb() {
        !this.G || this.H || this.T() || (Z(this), this.j = this.W().createBufferSource(),
            this.j.buffer = this.L.$, this.j.connect(this.M), this.Za = this.j, this.j.onended = this.Vb, this.j.loop = this.V, this.Kb(), this.Ga(), this.$b = this.vb() - this.N / (this.Y || .001), this.j.start(0, this.N), this.G = !1)
    }
    ic() {
        return super.ic() * this.Yc
    }
    Jb() {
        this.Yc = this.Ia || this.xb() ? 0 : 1;
        this.Kb()
    }
    oc(f) {
        f = !!f;
        this.V !== f && (this.V = f, this.j && (this.j.loop = f))
    }
    Ga() {
        let f = this.Y;
        this.Uc && (f *= this.i.ac);
        this.j && (this.j.playbackRate.value = f)
    }
    nc(f) {
        this.H || this.T() || (this.G ? this.N = f : (this.Wa(), this.N = f, this.yb()))
    }
    jc() {
        return this.N
    }
    pc(f) {
        f ?
            this.IsPlaying() ? (this.ka = !0, this.N = this.Da(!0), this.V && (this.N %= this.ea()), this.j.stop(0)) : this.ka = !1 : this.ka && (Z(this), this.j = this.W().createBufferSource(), this.j.buffer = this.L.$, this.j.connect(this.M), this.Za = this.j, this.j.onended = this.Vb, this.j.loop = this.V, this.Kb(), this.Ga(), this.$b = this.vb() - this.N / (this.Y || .001), this.j.start(0, this.N), this.ka = !1)
    }
    xc(f) {
        super.xc(f);
        this.N = f.resumePosition
    }
};
"use strict"; {
    class f {
        constructor(a) {
            this.i = a;
            this.f = a.W();
            this.Od = -1;
            this.R = this.Z = "";
            this.g = null
        }
        c() {
            this.f = null
        }
        ag(a) {
            this.Od = a
        }
        ig(a) {
            this.Z = a
        }
        o() {
            return this.f.createGain()
        }
        P() {}
        S() {}
        m(a, b, d, g) {
            a.cancelScheduledValues(0);
            if (0 === g) a.value = b;
            else {
                var n = this.f.currentTime;
                g += n;
                switch (d) {
                    case 0:
                        a.setValueAtTime(b, g);
                        break;
                    case 1:
                        a.setValueAtTime(a.value, n);
                        a.linearRampToValueAtTime(b, g);
                        break;
                    case 2:
                        a.setValueAtTime(a.value, n), a.exponentialRampToValueAtTime(b, g)
                }
            }
        }
        Ta() {
            return {
                type: this.R,
                tag: this.Z,
                params: this.g
            }
        }
    }
    self.le = class extends f {
        constructor(a, b, d, g, n, p, x) {
            super(a);
            this.R = "filter";
            this.g = [b, d, g, n, p, x];
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = x;
            this.a = this.o();
            this.a.gain.value = 1 - x;
            this.v = this.f.createBiquadFilter();
            this.v.type = b;
            this.v.frequency.value = d;
            this.v.detune.value = g;
            this.v.Q.value = n;
            this.v.gain.vlaue = p;
            this.l.connect(this.v);
            this.l.connect(this.a);
            this.v.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.v.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[5] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 1:
                    this.g[1] = b;
                    this.m(this.v.frequency, b, d, g);
                    break;
                case 2:
                    this.g[2] = b;
                    this.m(this.v.detune, b, d, g);
                    break;
                case 3:
                    this.g[3] = b;
                    this.m(this.v.Q, b, d, g);
                    break;
                case 4:
                    this.g[4] = b, this.m(this.v.gain, b, d, g)
            }
        }
    };
    self.je = class extends f {
        constructor(a, b, d, g) {
            super(a);
            this.R = "delay";
            this.g = [b, d, g];
            this.l =
                this.o();
            this.b = this.o();
            this.b.gain.value = g;
            this.a = this.o();
            this.a.gain.value = 1 - g;
            this.kb = this.o();
            this.U = this.f.createDelay(b);
            this.U.delayTime.value = b;
            this.bb = this.o();
            this.bb.gain.value = d;
            this.l.connect(this.kb);
            this.l.connect(this.a);
            this.kb.connect(this.b);
            this.kb.connect(this.U);
            this.U.connect(this.bb);
            this.bb.connect(this.kb)
        }
        c() {
            this.l.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            this.kb.disconnect();
            this.U.disconnect();
            this.bb.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            const n = self.da.jd;
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[2] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 4:
                    this.g[1] = n(b);
                    this.m(this.bb.gain, n(b), d, g);
                    break;
                case 5:
                    this.g[0] = b, this.m(this.U.delayTime, b, d, g)
            }
        }
    };
    self.ie = class extends f {
        constructor(a, b, d, g) {
            super(a);
            this.R = "convolution";
            this.g = [d, g];
            this.Jd = this.Id = "";
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = g;
            this.a = this.o();
            this.a.gain.value =
                1 - g;
            this.ab = this.f.createConvolver();
            this.ab.normalize = d;
            this.ab.buffer = b;
            this.l.connect(this.ab);
            this.l.connect(this.a);
            this.ab.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.ab.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0), this.g[1] = b, this.m(this.b.gain, b, d, g), this.m(this.a.gain, 1 - b, d, g)
            }
        }
        Xf(a, b) {
            this.Id = a;
            this.Jd = b
        }
        Ta() {
            const a =
                super.Ta();
            a.bufferOriginalUrl = this.Id;
            a.bufferUrl = "";
            a.bufferType = this.Jd;
            return a
        }
    };
    self.me = class extends f {
        constructor(a, b, d, g, n, p) {
            super(a);
            this.R = "flanger";
            this.g = [b, d, g, n, p];
            this.l = this.o();
            this.a = this.o();
            this.a.gain.value = 1 - p / 2;
            this.b = this.o();
            this.b.gain.value = p / 2;
            this.eb = this.o();
            this.eb.gain.value = n;
            this.U = this.f.createDelay(b + d);
            this.U.delayTime.value = b;
            this.s = this.f.createOscillator();
            this.s.frequency.value = g;
            this.I = this.o();
            this.I.gain.value = d;
            this.l.connect(this.U);
            this.l.connect(this.a);
            this.U.connect(this.b);
            this.U.connect(this.eb);
            this.eb.connect(this.U);
            this.s.connect(this.I);
            this.I.connect(this.U.delayTime);
            this.s.start(0)
        }
        c() {
            this.s.stop(0);
            this.l.disconnect();
            this.U.disconnect();
            this.s.disconnect();
            this.I.disconnect();
            this.a.disconnect();
            this.b.disconnect();
            this.eb.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[4] = b;
                    this.m(this.b.gain,
                        b / 2, d, g);
                    this.m(this.a.gain, 1 - b / 2, d, g);
                    break;
                case 6:
                    this.g[1] = b / 1E3;
                    this.m(this.I.gain, b / 1E3, d, g);
                    break;
                case 7:
                    this.g[2] = b;
                    this.m(this.s.frequency, b, d, g);
                    break;
                case 8:
                    this.g[3] = b / 100, this.m(this.eb.gain, b / 100, d, g)
            }
        }
    };
    self.oe = class extends f {
        constructor(a, b, d, g, n, p, x) {
            super(a);
            this.R = "phaser";
            this.g = [b, d, g, n, p, x];
            this.l = this.o();
            this.a = this.o();
            this.a.gain.value = 1 - x / 2;
            this.b = this.o();
            this.b.gain.value = x / 2;
            this.v = this.f.createBiquadFilter();
            this.v.type = "allpass";
            this.v.frequency.value = b;
            this.v.detune.value =
                d;
            this.v.Q.value = g;
            this.s = this.f.createOscillator();
            this.s.frequency.value = p;
            this.I = this.o();
            this.I.gain.value = n;
            this.l.connect(this.v);
            this.l.connect(this.a);
            this.v.connect(this.b);
            this.s.connect(this.I);
            this.I.connect(this.v.frequency);
            this.s.start(0)
        }
        c() {
            this.s.stop(0);
            this.l.disconnect();
            this.v.disconnect();
            this.s.disconnect();
            this.I.disconnect();
            this.a.disconnect();
            this.b.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a,
            b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[5] = b;
                    this.m(this.b.gain, b / 2, d, g);
                    this.m(this.a.gain, 1 - b / 2, d, g);
                    break;
                case 1:
                    this.g[0] = b;
                    this.m(this.v.frequency, b, d, g);
                    break;
                case 2:
                    this.g[1] = b;
                    this.m(this.v.detune, b, d, g);
                    break;
                case 3:
                    this.g[2] = b;
                    this.m(this.v.Q, b, d, g);
                    break;
                case 6:
                    this.g[3] = b;
                    this.m(this.I.gain, b, d, g);
                    break;
                case 7:
                    this.g[4] = b, this.m(this.s.frequency, b, d, g)
            }
        }
    };
    self.ne = class extends f {
        constructor(a, b) {
            super(a);
            this.R = "gain";
            this.g = [b];
            this.h = this.o();
            this.h.gain.value =
                b
        }
        c() {
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X(a, b, d, g) {
            const n = self.da.jd;
            switch (a) {
                case 4:
                    this.g[0] = n(b), this.m(this.h.gain, n(b), d, g)
            }
        }
    };
    self.qe = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "tremolo";
            this.g = [b, d];
            this.h = this.o();
            this.h.gain.value = 1 - d / 2;
            this.s = this.f.createOscillator();
            this.s.frequency.value = b;
            this.I = this.o();
            this.I.gain.value = d / 2;
            this.s.connect(this.I);
            this.I.connect(this.h.gain);
            this.s.start(0)
        }
        c() {
            this.s.stop(0);
            this.s.disconnect();
            this.I.disconnect();
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[1] = b;
                    this.m(this.h.gain, 1 - b / 2, d, g);
                    this.m(this.I.gain, b / 2, d, g);
                    break;
                case 7:
                    this.g[0] = b, this.m(this.s.frequency, b, d, g)
            }
        }
    };
    self.pe = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "ringmod";
            this.g = [b, d];
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = d;
            this.a = this.o();
            this.a.gain.value = 1 - d;
            this.qb = this.o();
            this.qb.gain.value =
                0;
            this.s = this.f.createOscillator();
            this.s.frequency.value = b;
            this.s.connect(this.qb.gain);
            this.s.start(0);
            this.l.connect(this.qb);
            this.l.connect(this.a);
            this.qb.connect(this.b)
        }
        c() {
            this.s.stop(0);
            this.s.disconnect();
            this.qb.disconnect();
            this.l.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[1] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 7:
                    this.g[0] = b, this.m(this.s.frequency, b, d, g)
            }
        }
    };
    self.ke = class extends f {
        constructor(a, b, d, g, n, p) {
            super(a);
            this.R = "distortion";
            this.g = [b, d, g, n, p];
            this.l = this.o();
            this.Xb = this.o();
            this.Wb = this.o();
            this.Yf(g, n);
            this.b = this.o();
            this.b.gain.value = p;
            this.a = this.o();
            this.a.gain.value = 1 - p;
            this.bc = this.f.createWaveShaper();
            this.Nc = new Float32Array(65536);
            this.ef(b, d);
            this.bc.curve = this.Nc;
            this.l.connect(this.Xb);
            this.l.connect(this.a);
            this.Xb.connect(this.bc);
            this.bc.connect(this.Wb);
            this.Wb.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.Xb.disconnect();
            this.bc.disconnect();
            this.Wb.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        Yf(a, b) {
            .01 > a && (a = .01);
            this.Xb.gain.value = a;
            this.Wb.gain.value = Math.pow(1 / a, .6) * b
        }
        ef(a, b) {
            for (let d = 0; 32768 > d; ++d) {
                let g = d / 32768;
                g = this.kg(g, a, b);
                this.Nc[32768 + d] = g;
                this.Nc[32768 - d - 1] = -g
            }
        }
        kg(a, b, d) {
            d = 1.05 * d * b - b;
            const g = 0 > a ? -a : a;
            return (g < b ? g : b + d * self.da.Bg(g - b, 1 / d)) * (0 > a ? -1 : 1)
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0), this.g[4] = b, this.m(this.b.gain, b, d, g), this.m(this.a.gain, 1 - b, d, g)
            }
        }
    };
    self.he = class extends f {
        constructor(a, b, d, g, n, p) {
            super(a);
            this.R = "compressor";
            this.g = [b, d, g, n, p];
            this.h = this.f.createDynamicsCompressor();
            this.h.threshold.value = b;
            this.h.knee.value = d;
            this.h.ratio.value = g;
            this.h.attack.value = n;
            this.h.release.value = p
        }
        c() {
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X() {}
    };
    self.ge = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "analyser";
            this.g = [b, d];
            this.h = this.f.createAnalyser();
            this.h.fftSize = b;
            this.h.smoothingTimeConstant = d;
            this.Md = new Float32Array(this.h.frequencyBinCount);
            this.Yd = new Uint8Array(b);
            this.Wd = this.La = 0;
            this.i.Pe(this)
        }
        c() {
            this.i.Rf(this);
            this.h.disconnect();
            super.c()
        }
        Fa() {
            this.h.getFloatFrequencyData(this.Md);
            this.h.getByteTimeDomainData(this.Yd);
            const a = this.h.fftSize;
            let b = this.La = 0;
            for (var d = 0; d < a; ++d) {
                let g = (this.Yd[d] - 128) / 128;
                0 > g && (g = -g);
                this.La < g && (this.La = g);
                b += g * g
            }
            d = self.da.Fe;
            this.La = d(this.La);
            this.Wd = d(Math.sqrt(b / a))
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X() {}
        Ae() {
            return {
                tag: this.Z,
                index: this.Od,
                peak: this.La,
                rms: this.Wd,
                binCount: this.h.frequencyBinCount,
                freqBins: this.Md
            }
        }
    }
};