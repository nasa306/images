"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9667, 2276, 3211], {
    14587: function(e, t) {
        t.Z = {
            src: "/_next/static/media/Copy.beaded6b.svg",
            height: 16,
            width: 16,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    53500: function(e, t) {
        t.Z = {
            src: "/_next/static/media/close.16e94527.svg",
            height: 18,
            width: 18,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    22598: function(e, t) {
        t.Z = {
            src: "/_next/static/media/download.d629056e.svg",
            height: 16,
            width: 17,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    86641: function(e, t) {
        t.Z = {
            src: "/_next/static/media/micWarning.fd3a8271.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    77995: function(e, t) {
        t.Z = {
            src: "/_next/static/media/proxyLogo.1825607a.svg",
            height: 81,
            width: 80,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    48254: function(e, t, i) {
        i.d(t, {
            UB: function() {
                return l
            },
            lw: function() {
                return a
            },
            zF: function() {
                return d
            }
        });
        var n = i(40433)
          , o = i(57833);
        let r = o.ZP.ul.withConfig({
            componentId: "sc-343e2a9-0"
        })(["width:56px;display:flex;flex-direction:column;align-items:center;margin:0;padding:14px 0 8px;border-radius:60px 60px 100px 100px;border:1px solid #FFFFFF33;background:linear-gradient(0deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),linear-gradient(0deg,rgba(255,255,255,0.2),rgba(255,255,255,0.2));margin-top:18px;", " li#ng-ana{margin-top:14px;transform:translateY(-30px);height:8px;}"], e => {
            let {expanded: t} = e;
            return t && (0,
            o.iv)(["width:100px;flex-wrap:wrap;flex-direction:row;justify-content:center;border-radius:24px;margin-top:26px;padding-bottom:12px;"])
        }
        )
          , a = o.ZP.div.withConfig({
            componentId: "sc-343e2a9-1"
        })(["display:flex;flex-direction:column;align-items:center;margin:0;gap:16px;", ""], e => {
            let {expanded: t} = e;
            return t && (0,
            o.iv)(["flex-wrap:wrap;flex-direction:row;justify-content:center;"])
        }
        )
          , l = o.ZP.li.withConfig({
            componentId: "sc-343e2a9-2"
        })(["cursor:pointer;color:", ";width:24px;height:24px;list-style:none;position:relative;button{width:24px;height:24px;padding:0px;&:hover{background:transparent;}}div{margin:0px;}&.ng-show-header-footer{margin-bottom:5px;}"], e => {
            let {theme: t} = e;
            return t.colors.white80
        }
        );
        (0,
        o.ZP)(l).withConfig({
            componentId: "sc-343e2a9-3"
        })(["width:24px;height:24px;position:relative;i{position:absolute;right:0;top:0;}img{width:40px;height:auto;transform:translate(-9px,-3px);}"]);
        let d = o.ZP.span.withConfig({
            componentId: "sc-343e2a9-4"
        })(["", " height:100%;transition:all 0.3s ease-out;transform:rotate(270deg);", ""], n.be, e => {
            let {clicked: t} = e;
            return t && (0,
            o.iv)(["transform:rotate(90deg);"])
        }
        );
        o.ZP.li.withConfig({
            componentId: "sc-343e2a9-5"
        })(["list-style:none;"]),
        t.ZP = r
    },
    66371: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return u
            }
        });
        var n = i(85893)
          , o = i(67294)
          , r = i(17609)
          , a = i(57833);
        let l = (0,
        a.F4)(["0%{left:0;width:4px;}50%{left:50%;width:32px;}100%{width:4px;left:calc(100% - 4px);}"])
          , d = a.ZP.img.withConfig({
            componentId: "sc-b6719765-0"
        })(["margin-bottom:", ";width:100%;display:flex;flex-shrink:0;border-radius:", ";"], e => {
            let {theme: t} = e;
            return t.spacing.base2
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius
        }
        )
          , s = a.ZP.div.withConfig({
            componentId: "sc-b6719765-1"
        })(["width:64px;right:", ";position:absolute;z-index:9;top:", ";transition:all 0.5s ease-in-out;display:flex;flex-direction:column;&.animateSmall{right:5px;top:5px;width:40px;img{margin-bottom:0;}.loadingBar{display:none;}}"], e => {
            let {theme: t} = e;
            return t.spacing.base6
        }
        , e => {
            let {theme: t} = e;
            return t.spacing.base6
        }
        )
          , c = a.ZP.div.withConfig({
            componentId: "sc-b6719765-2"
        })(["position:relative;width:100%;background:rgba(0,0,0,0.8);height:4px;border-radius:", ";span{position:absolute;left:0;top:0;height:100%;background:", ";border-radius:10px;transition:1s all ease-in-out;animation-name:", ";animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:linear;animation-direction:alternate;}"], e => {
            let {theme: t} = e;
            return t.border.radius3
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , l);
        var u = e => {
            var t;
            let {animateSmall: i} = e
              , a = (0,
            o.useContext)(r.x);
            return (0,
            n.jsxs)(s, {
                className: "".concat(i ? "animateSmall" : ""),
                children: [(0,
                n.jsx)(d, {
                    src: null === (t = null == a ? void 0 : a.media) || void 0 === t ? void 0 : t.icon
                }), (0,
                n.jsx)(c, {
                    className: "loadingBar",
                    children: (0,
                    n.jsx)("span", {})
                })]
            })
        }
    },
    20127: function(e, t, i) {
        i.r(t),
        i.d(t, {
            ConsoleFooter: function() {
                return b
            }
        });
        var n = i(85893)
          , o = i(82492)
          , r = i(81043)
          , a = i(4374)
          , l = i(67294)
          , d = i(95993)
          , s = i(77289)
          , c = i(27633)
          , u = i(77621)
          , p = i(94183)
          , h = i(50875)
          , g = i(84502)
          , v = i(6284)
          , x = i(1857)
          , f = i(42771)
          , m = i(53500)
          , w = i(76097)
          , y = i(75952);
        let b = e => {
            var t, i, b, A, j, C, E, S, T, I, k;
            let {style: R={}, mobileHeaderUI: L=!1} = e
              , P = (0,
            l.useRef)(null)
              , D = (0,
            l.useRef)(null)
              , M = (0,
            r.I0)()
              , {t: O} = (0,
            a.$)()
              , K = (0,
            r.v9)(e => e.play.consoleHeaderRef)
              , Z = (0,
            r.v9)(e => e.ads.inGameAd)
              , N = u.default.countryCode
              , B = (0,
            r.v9)(e => e.play.isSensitivityPopupOpen)
              , W = (0,
            r.v9)(e => e.play.isRecording)
              , _ = (0,
            r.v9)(e => e.play.isRecordingProcessing)
              , F = (0,
            r.v9)(e => e.play.showBackbtn)
              , Y = (0,
            r.v9)(e => e.play.gameDisplayed)
              , X = (0,
            r.v9)(e => e.play.isAndroidConnected)
              , H = (0,
            r.v9)(e => e.ads.adsEnded)
              , z = null === (b = null === (i = null === (t = u.default.appInfo) || void 0 === t ? void 0 : t.playFeFeatures) || void 0 === i ? void 0 : i.tryAndDownload) || void 0 === b ? void 0 : b.isEnabled
              , U = (0,
            r.v9)(e => e.play.mouseLockActive)
              , G = (0,
            p.RZ)() ? 0 : 46
              , V = (0,
            r.v9)(e => e.ads.disableAllAds);
            (0,
            r.v9)(e => e.ads.adBlocker);
            let q = null === (C = null === (j = null === (A = u.default.appInfo.playFeFeatures) || void 0 === A ? void 0 : A.ads) || void 0 === j ? void 0 : j.desktop) || void 0 === C ? void 0 : C.enableDisplayAds
              , J = (0,
            r.v9)(e => e.play.nowPremiumSubscriptionActive)
              , Q = (0,
            r.v9)(e => e.play.showRecordingDiscardedPopup)
              , [$,ee] = (0,
            l.useState)({
                top: 0,
                left: 0,
                width: 0,
                right: 0,
                height: 0
            })
              , {appType: et} = (null === u.default || void 0 === u.default ? void 0 : u.default.appInfo) || {}
              , ei = () => {
                setTimeout( () => {
                    let {videoRef: e, orientation: t} = o.default.getState().play;
                    if (e && e.current) {
                        let i = e.current;
                        ee({
                            top: null == i ? void 0 : i.getBoundingClientRect().bottom,
                            width: ((null == i ? void 0 : i.getBoundingClientRect().width) || 0) + (t === g.cj.portrait ? 261 : 0),
                            left: null == i ? void 0 : i.getBoundingClientRect().left,
                            right: null == i ? void 0 : i.getBoundingClientRect().right,
                            height: null == i ? void 0 : i.getBoundingClientRect().height
                        })
                    }
                }
                )
            }
            ;
            (0,
            l.useEffect)( () => {
                (0,
                h.Ul)()
            }
            , []),
            (0,
            l.useEffect)( () => {
                var e, t, i, n, o, r;
                return q = !(0,
                p.tq)() || (0,
                p.Em)() || (0,
                p.zc)() ? null === (r = null === (o = null === (n = u.default.appInfo.playFeFeatures) || void 0 === n ? void 0 : n.ads) || void 0 === o ? void 0 : o.desktop) || void 0 === r ? void 0 : r.enableDisplayAds : null === (i = null === (t = null === (e = u.default.appInfo.playFeFeatures) || void 0 === e ? void 0 : e.ads) || void 0 === t ? void 0 : t.mobile) || void 0 === i ? void 0 : i.enableDisplayAds,
                ei(),
                window.addEventListener("resizeDone", ei),
                (0,
                p.nI)() ? M({
                    type: c.Z.SET_REF,
                    payload: {
                        consoleFooterRef: P
                    }
                }) : M({
                    type: c.Z.SET_REF,
                    payload: {
                        mobileConsoleFooterRef: P
                    }
                }),
                () => {
                    window.removeEventListener("resizeDone", ei)
                }
            }
            , []),
            (0,
            l.useEffect)( () => {
                let e = e => {
                    let t = e.target;
                    (null == t ? void 0 : t.id) === "js-game-video" && B && M({
                        type: c.Z.SET_SENSITIVITY_POPUP,
                        payload: {
                            isSensitivityPopupOpen: !1
                        }
                    })
                }
                ;
                return window.addEventListener("pointerdown", e),
                () => {
                    window.removeEventListener("pointerdown", e)
                }
            }
            , [B]);
            let en = !(null === u.default || void 0 === u.default ? void 0 : u.default.isAppPage) && (0,
            y.hu)() && !(0,
            p.tq)()
              , {enableTestDriveUi: eo} = (null === (E = null === u.default || void 0 === u.default ? void 0 : u.default.appInfo) || void 0 === E ? void 0 : E.playFeFeatures) || {}
              , er = Object.assign(Object.assign(Object.assign({
                top: en ? $.top - $.height - (z ? G : (null === (S = null == K ? void 0 : K.current) || void 0 === S ? void 0 : S.clientHeight) || 0) : (0,
                u.DJ)() || Z !== s.Va_ ? $.top - (z ? G : (null === (T = null == K ? void 0 : K.current) || void 0 === T ? void 0 : T.clientHeight) || 0) : $.top - $.height,
                width: J ? "100%" : en ? "auto" : $.width,
                height: en ? $.height : "auto",
                left: en ? $.right : $.left,
                flexDirection: en ? "column" : "row",
                background: u.default.isMultiPanelAdsEnabled ? v.qm.colors.white10 : "rgba(102, 102, 102, 0.2)"
            }, R), ( () => {
                var e, t;
                let {orientation: i} = o.default.getState().play
                  , n = (null === (e = null == K ? void 0 : K.current) || void 0 === e ? void 0 : e.clientHeight) || 0
                  , r = (null === (t = null == P ? void 0 : P.current) || void 0 === t ? void 0 : t.clientHeight) || 0
                  , {inGameAd: a} = o.default.getState().ads
                  , l = u.default.isAppPage && "Html" !== et ? {
                    top: "calc(50% + ".concat((en ? 0 : $.height / 2) + (u.default.isMultiPanelAdsEnabled ? J ? -28 : 30 - parseInt("".concat((r - n) / 2), 10) : 0), "px)"),
                    transform: "translateY(-50%)",
                    left: !q || V ? "0px !important" : "168px"
                } : {};
                return a === s.VBy && i === g.cj.portrait && (l.width = "calc(100% - ".concat(s.Idd, "px)")),
                l
            }
            )()), {
                opacity: 50 > ($.width || (null === (I = P.current) || void 0 === I ? void 0 : I.clientWidth) || 0) ? "0" : "1"
            })
              , ea = (0,
            l.useCallback)( () => {
                M({
                    type: c.Z.UPDATE_IS_RECORDING,
                    payload: {
                        showRecordingDiscardedPopup: !1
                    }
                })
            }
            , [M]);
            return (0,
            n.jsxs)(n.Fragment, {
                children: [en && (0,
                n.jsx)(w.$_, {
                    ref: D,
                    mobileHeaderUI: L,
                    className: "footer",
                    id: "ng-left-control-bar",
                    style: Object.assign(Object.assign({}, er), {
                        left: $.left - ((null === (k = D.current) || void 0 === k ? void 0 : k.getBoundingClientRect().width) || 0),
                        padding: L ? "0px 8px" : "8px"
                    }),
                    children: (0,
                    n.jsx)(w.ZX, {
                        isH5Game: (0,
                        u.DJ)(),
                        showActionSidebar: en,
                        style: en ? {
                            height: "100%",
                            justifyContent: "space-between",
                            width: "100%"
                        } : {},
                        children: (0,
                        n.jsx)(d.GlobalActions, {
                            showBackBtn: F && X && Y && H,
                            countryCode: N,
                            widget: !1,
                            isPortrait: en,
                            style: {
                                height: "100%"
                            }
                        })
                    })
                }), (0,
                n.jsxs)(w.$_, {
                    ref: P,
                    mobileHeaderUI: L,
                    className: "footer ".concat(J ? "premium" : ""),
                    id: "ng-control-bar",
                    style: (0,
                    p.tq)() ? {
                        width: "100%",
                        padding: L ? "0px 8px" : "8px"
                    } : er,
                    children: [(0,
                    n.jsxs)(w.ZX, {
                        isH5Game: (0,
                        u.DJ)(),
                        showActionSidebar: en,
                        isRecording: W,
                        isRecordingProcessing: _,
                        isMouseLock: U,
                        style: en ? {
                            height: "100%",
                            justifyContent: "space-between",
                            width: "100%"
                        } : {},
                        children: [!en && (0,
                        n.jsx)(d.GlobalActions, {
                            showBackBtn: F && X && Y && H,
                            widget: !1,
                            isPortrait: en,
                            countryCode: N,
                            testDriveUi: eo
                        }), (0,
                        n.jsx)(d.GameActions, {
                            widget: !1,
                            isPortrait: en
                        })]
                    }), Q && (0,
                    n.jsxs)(w.Bz, {
                        children: [(0,
                        n.jsx)(x.gd, {
                            children: O("videoDiscarded")
                        }), (0,
                        n.jsx)(w.dg, {
                            children: (0,
                            n.jsx)("img", {
                                src: (0,
                                f.jW)(m.Z),
                                alt: O("warning"),
                                onClick: ea
                            })
                        })]
                    })]
                })]
            })
        }
        ;
        t.default = b
    },
    88576: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o.ConsoleFooter
            },
            e: function() {
                return n.ey
            }
        });
        var n = i(72839)
          , o = i(20127)
    },
    96125: function(e, t, i) {
        i.d(t, {
            _: function() {
                return f
            }
        });
        var n = i(85893)
          , o = i(17609)
          , r = i(27633)
          , a = i(94183)
          , l = i(67294)
          , d = i(81043)
          , s = i(21101)
          , c = i(82492)
          , u = i(52353)
          , p = i.n(u)
          , h = i(84502)
          , g = i(45220)
          , v = i.n(g)
          , x = i(77621);
        let f = e => {
            let {children: t, style: i={}, className: u="", setCoordinates: g, onRender: f} = e
              , m = (0,
            l.useRef)(null)
              , w = (0,
            l.useContext)(o.Z)
              , {widgets: y} = w;
            (v()(y) || p()(y)) && (w.widgets = {
                mobileMenu: {
                    left: 10,
                    top: 8
                },
                desktopFullScreen: {
                    left: 10,
                    top: 8
                }
            }),
            y = w.widgets;
            let b = (0,
            d.I0)()
              , A = 0
              , j = 0
              , C = 0
              , E = 0
              , S = !1;
            function T(e, t) {
                (null == m ? void 0 : m.current) && (m.current.style.transform = "translate3d(".concat(e, "px, ").concat(t, "px, 0)"),
                (0,
                a.tq)() && "slow-network-drag" === u && (m.current.style.left = "unset",
                m.current.style.top = "unset"))
            }
            function I(e) {
                var t, i;
                let n = c.default.getState().play.orientation;
                e.preventDefault();
                let o = (null === (t = null == m ? void 0 : m.current) || void 0 === t ? void 0 : t.clientHeight) || 0
                  , r = (null === (i = null == m ? void 0 : m.current) || void 0 === i ? void 0 : i.clientWidth) || 0;
                if ("touchmove" === e.type) {
                    if (window.innerHeight > window.innerWidth && 0 === window.orientation && n === h.cj.landscape) {
                        if (e.touches[0].clientX - o < 5 && e.touches[0].clientY - 10 < 5 || window.innerWidth - e.touches[0].clientX < 10 && window.innerHeight - e.touches[0].clientY < r + 10 || e.touches[0].clientX - o < 5 && window.innerHeight - e.touches[0].clientY < r + 10 || e.touches[0].clientY - 10 < 5 && window.innerWidth - e.touches[0].clientX < 10)
                            return;
                        if (e.touches[0].clientX - o < 5) {
                            A = e.touches[0].clientY,
                            j = window.innerWidth - o - 5,
                            T(A, j);
                            return
                        }
                        if (e.touches[0].clientY - 10 < 5) {
                            A = 5,
                            j = window.innerWidth - e.touches[0].clientX,
                            T(A, j);
                            return
                        }
                        if (window.innerWidth - e.touches[0].clientX < 10) {
                            T(A = e.touches[0].clientY, j = 10);
                            return
                        }
                        if (window.innerHeight - e.touches[0].clientY < r + 10) {
                            A = window.innerHeight - r - 10,
                            j = window.innerWidth - e.touches[0].clientX,
                            T(A, j);
                            return
                        }
                        A = e.touches[0].clientY,
                        j = window.innerWidth - e.touches[0].clientX
                    } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && n === h.cj.landscape) {
                        if (e.touches[0].clientX - 10 < 5 && e.touches[0].clientY < 5 || window.innerWidth - e.touches[0].clientX < r + 5 && window.innerHeight - e.touches[0].clientY < o + 5 || e.touches[0].clientX - 10 < 5 && window.innerHeight - e.touches[0].clientY < o + 5 || e.touches[0].clientY < 5 && window.innerWidth - e.touches[0].clientX < r + 5)
                            return;
                        if (e.touches[0].clientX - 10 < 5) {
                            A = 5,
                            j = e.targetTouches[0].clientY,
                            T(A, j);
                            return
                        }
                        if (e.touches[0].clientY < 5) {
                            T(A = e.targetTouches[0].clientX, j = 5);
                            return
                        }
                        if (window.innerWidth - e.touches[0].clientX < r + 5) {
                            A = window.innerWidth - r - 5,
                            j = e.targetTouches[0].clientY,
                            T(A, j);
                            return
                        }
                        if (window.innerHeight - e.touches[0].clientY < o + 5) {
                            A = e.targetTouches[0].clientX,
                            j = window.innerHeight - o - 5,
                            T(A, j);
                            return
                        }
                        A = e.targetTouches[0].clientX,
                        j = e.targetTouches[0].clientY
                    } else if (window.innerHeight > window.innerWidth && 0 === window.orientation && n === h.cj.portrait) {
                        if (e.touches[0].clientX < 5 && e.touches[0].clientY < 5 || e.touches[0].clientX > window.innerWidth - (r + 5) && window.innerHeight < e.touches[0].clientY + o + 5 || e.touches[0].clientX < 5 && window.innerHeight < e.touches[0].clientY + o + 5 || e.touches[0].clientY < 5 && e.touches[0].clientX > window.innerWidth - (r + 5))
                            return;
                        if (e.touches[0].clientX < 5) {
                            A = 5,
                            j = e.touches[0].clientY,
                            T(A, j);
                            return
                        }
                        if (e.touches[0].clientY < 5) {
                            T(A = e.touches[0].clientX, j = 5);
                            return
                        }
                        if (e.touches[0].clientX > window.innerWidth - (r + 5)) {
                            A = window.innerWidth - (r + 5),
                            j = e.touches[0].clientY,
                            T(A, j);
                            return
                        }
                        if (e.touches[0].clientY > window.innerHeight - (o + 5)) {
                            A = e.touches[0].clientX,
                            j = window.innerHeight - (o + 5),
                            T(A, j);
                            return
                        }
                        A = e.touches[0].clientX,
                        j = e.touches[0].clientY
                    } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && n === h.cj.portrait) {
                        if (e.touches[0].clientX < 5 && e.touches[0].clientY < 5 + r || e.touches[0].clientX < 5 && e.touches[0].clientY + 5 > window.innerHeight || e.touches[0].clientX > window.innerWidth - (o + 5) && e.touches[0].clientY < 5 + r || e.touches[0].clientX > window.innerWidth - (o + 5) && e.touches[0].clientY + 5 > window.innerHeight)
                            return;
                        if (e.touches[0].clientX < 5) {
                            T(A = window.innerHeight - e.targetTouches[0].clientY, j = 5);
                            return
                        }
                        if (e.touches[0].clientY < 5 + r) {
                            A = window.innerHeight - (5 + r),
                            j = e.targetTouches[0].clientX,
                            T(A, j);
                            return
                        }
                        if (e.touches[0].clientX > window.innerWidth - (o + 5)) {
                            A = window.innerHeight - e.targetTouches[0].clientY,
                            j = window.innerWidth - (o + 5),
                            T(A, j);
                            return
                        }
                        if (e.touches[0].clientY + 5 > window.innerHeight) {
                            A = 5,
                            j = e.targetTouches[0].clientX,
                            T(A, j);
                            return
                        }
                        A = window.innerHeight - e.targetTouches[0].clientY,
                        j = e.targetTouches[0].clientX
                    }
                } else {
                    if (e.clientX - r < 5 || e.clientY < 20 || window.innerWidth - e.clientX < 20 || window.innerHeight - e.clientY < o - 20)
                        return;
                    A = e.clientX - C,
                    j = e.clientY - E,
                    S = !0
                }
                T(A, j)
            }
            let k = () => {
                b({
                    type: r.Z.DRAGGABLE,
                    payload: {
                        draggableState: S ? "drag" : "click"
                    }
                })
            }
            ;
            function R(e) {
                S = !1,
                k(),
                C = A,
                E = j;
                let t = new Event("dragComplete");
                window.dispatchEvent(t),
                g && b({
                    type: s.Z.FS_WIDGET,
                    payload: {
                        fsWidget: {
                            x: Math.round(C / window.innerWidth * 100),
                            y: Math.round(E / window.innerHeight * 100)
                        }
                    }
                }),
                "touchend" === e.type && (A = 0,
                j = 0),
                document.removeEventListener("mouseup", R, !0),
                document.removeEventListener("mousemove", I, !1)
            }
            function L(e) {
                let t = c.default.getState().play.orientation;
                if ((0,
                x.DJ)() && (t === h.cj.landscape ? 90 : 0) !== window.orientation && b({
                    type: r.Z.UPDATE_ORIENTATION,
                    payload: {
                        orientation: 90 === window.orientation ? h.cj.landscape : h.cj.portrait
                    }
                }),
                "mousedown" === e.type) {
                    let t = e.target;
                    if ("ng-vol" === t.id || "volume-slider" === t.id || "sensitivity-slider" === t.id || "sensitivty-box" === t.id)
                        return;
                    S = !1,
                    k(),
                    C = e.clientX - A,
                    E = e.clientY - j
                }
                document.addEventListener("mousemove", I, !1),
                document.addEventListener("mouseup", R, !0)
            }
            return (0,
            l.useEffect)( () => {
                f && m.current && f(m.current),
                localStorage.removeItem("jsFsWidgetCoordinateObj");
                let e = null == m ? void 0 : m.current
                  , {mobileMenu: t={
                    left: 10,
                    top: 10
                }} = y;
                if ((0,
                a.tq)() && "slow-network-drag" !== u && (A = (null == t ? void 0 : t.left) || 10,
                j = (null == t ? void 0 : t.top) || 10,
                T(A, j)),
                g) {
                    p()(c.default.getState().appPreferences.fsWidget) && b({
                        type: s.Z.FS_WIDGET,
                        payload: {
                            fsWidget: {
                                x: 70,
                                y: 20
                            }
                        }
                    });
                    let {x: e, y: t} = c.default.getState().appPreferences.fsWidget || {
                        x: 70,
                        y: 20
                    }
                      , i = Math.round(window.innerWidth / 100 * e)
                      , n = Math.round(window.innerHeight / 100 * t);
                    T(i, n),
                    A = i,
                    j = n
                }
                return null == e || e.addEventListener("touchstart", L, !1),
                null == e || e.addEventListener("touchend", R, !1),
                null == e || e.addEventListener("touchmove", I, !1),
                null == e || e.addEventListener("mousedown", L),
                () => {
                    null == e || e.removeEventListener("touchstart", L, !1),
                    null == e || e.removeEventListener("touchend", R, !1),
                    null == e || e.removeEventListener("touchmove", I, !1),
                    null == e || e.removeEventListener("mousedown", L, !1)
                }
            }
            , []),
            (0,
            n.jsx)("div", {
                ref: m,
                className: "drag-react ".concat(u),
                style: Object.assign({
                    position: "fixed",
                    zIndex: 13
                }, i),
                children: t
            })
        }
    },
    63211: function(e, t, i) {
        i.r(t),
        i.d(t, {
            default: function() {
                return k
            }
        });
        var n = i(85893)
          , o = i(1234)
          , r = i(84921)
          , a = i(1857)
          , l = i(67294)
          , d = i(4374)
          , s = {
            src: "/_next/static/media/google-logo.e9519c96.svg",
            height: 31,
            width: 90,
            blurWidth: 0,
            blurHeight: 0
        }
          , c = {
            src: "/_next/static/media/apkpure-logo.9c76afca.svg",
            height: 48,
            width: 48,
            blurWidth: 0,
            blurHeight: 0
        }
          , u = {
            src: "/_next/static/media/apk-mirror.032c0cff.svg",
            height: 48,
            width: 48,
            blurWidth: 0,
            blurHeight: 0
        }
          , p = {
            src: "/_next/static/media/aptoide-logo.bafd31f1.svg",
            height: 48,
            width: 48,
            blurWidth: 0,
            blurHeight: 0
        }
          , h = i(62433)
          , g = i(42771)
          , v = i(6284)
          , x = i(40433)
          , f = i(75952)
          , m = i(81043)
          , w = i(77289)
          , y = i(77621)
          , b = i(57833);
        let A = (0,
        b.iv)(["max-width:380px;padding:14px;"])
          , j = (0,
        b.iv)(["max-width:380px;padding:14px;background:", ";border-radius:0px;"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , C = b.ZP.div.withConfig({
            componentId: "sc-e812cf1d-0"
        })(["display:flex;flex-direction:column;justify-content:center;gap:32px;flex:1 0 0;align-self:stretch;border-radius:8px;background:", ";&.raw-page-content{background:transparent;}.apk-spinner{width:22px;height:22px;}.raw-apk-spinner{border:1px solid ", ";border-bottom-color:", ";}.highlight-aptoide{border-radius:8px;border:1px solid #9C79FF;background:linear-gradient(0deg,rgba(0,0,0,0.30) 0%,rgba(0,0,0,0.30) 100%),linear-gradient(270deg,rgba(123,76,255,0.40) 0%,rgba(14,164,197,0.40) 99.48%);}.raw-highlight{background:transparent;border:1px solid rgba(14,164,197,0.40);}.end-screen-spinner{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:22px;height:22px;}"], e => {
            let {theme: t} = e;
            return t.colors.black20
        }
        , e => {
            let {theme: t} = e;
            return t.colors.black
        }
        , e => {
            let {theme: t} = e;
            return t.colors.ascent
        }
        )
          , E = b.ZP.div.withConfig({
            componentId: "sc-e812cf1d-1"
        })(["padding:12px;display:flex;align-items:center;gap:12px;"])
          , S = (0,
        b.ZP)(a.Rh).withConfig({
            componentId: "sc-e812cf1d-2"
        })(["background:linear-gradient(270deg,#9C79FF 0%,#0FD4FF 99.48%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:1.5px;text-transform:uppercase;"])
          , T = b.ZP.div.withConfig({
            componentId: "sc-e812cf1d-3"
        })(["display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:16px;.apk-spinner{width:22px;height:22px;}.raw-apk-spinner{border:1px solid ", ";border-bottom-color:", ";}"], e => {
            let {theme: t} = e;
            return t.colors.black
        }
        , e => {
            let {theme: t} = e;
            return t.colors.ascent
        }
        );
        var I = i(59949)
          , k = () => {
            let {t: e} = (0,
            d.$)()
              , [t,i] = (0,
            l.useState)("findingYourGame")
              , [b,k] = (0,
            l.useState)(!1)
              , [R,L] = (0,
            l.useState)(!0)
              , [P,D] = (0,
            l.useState)(!1)
              , [M,O] = (0,
            l.useState)(!0)
              , [K,Z] = (0,
            l.useState)(!1)
              , [N,B] = (0,
            l.useState)(!1)
              , [W,_] = (0,
            l.useState)(!1)
              , F = (0,
            m.v9)(e => e.play.aptoideSearchText)
              , {workflowCategory: Y} = y.default.appInfo
              , X = "workflow3" === Y;
            return (0,
            l.useEffect)( () => {
                setTimeout( () => {
                    L(!1),
                    D(!0),
                    O(!0)
                }
                , 2e3),
                setTimeout( () => {
                    Z(!0)
                }
                , 4e3),
                setTimeout( () => {
                    B(!0)
                }
                , 6e3),
                setTimeout( () => {
                    i("evaluatingResults"),
                    k(!0)
                }
                , 8e3),
                setTimeout( () => {
                    i("foundBestSource"),
                    k(!1),
                    _(!0)
                }
                , 1e4),
                setTimeout( () => {
                    i("openingAptoideStore"),
                    D(!1),
                    _(!1)
                }
                , 12e3),
                setTimeout( () => {
                    O(!1),
                    Z(!1),
                    B(!1),
                    window.location.href = (0,
                    f.ZP)("".concat(window.location.origin, "/apps/aptoide/").concat(w.BG8, "/aptoide.html?deep_link=aptoidesearch%3A%2F%2F").concat(encodeURIComponent(F)), "SearchResult")
                }
                , 14e3)
            }
            , []),
            (0,
            n.jsxs)(o.Z, {
                modalStyles: X ? j : A,
                children: [(0,
                n.jsxs)(T, {
                    children: [b && (0,
                    n.jsx)(r.Z, {
                        className: "apk-spinner ".concat(X ? "raw-apk-spinner" : "")
                    }), (0,
                    n.jsx)(a.js, {
                        style: {
                            color: X ? v.qm.colors.black : v.qm.colors.white
                        },
                        children: e(t)
                    })]
                }), (0,
                n.jsx)(C, {
                    className: X ? "raw-page-content" : "",
                    children: R ? (0,
                    n.jsxs)(I.GN, {
                        style: {
                            alignItems: "center"
                        },
                        children: [(0,
                        n.jsx)(r.Z, {
                            className: "apk-spinner ".concat(X ? "raw-apk-spinner" : ""),
                            style: {
                                marginBottom: "50px",
                                marginTop: "50px"
                            }
                        }), (0,
                        n.jsxs)(I.GN, {
                            style: {
                                gap: "4px",
                                marginBottom: "30px",
                                alignItems: "center"
                            },
                            children: [(0,
                            n.jsx)(a.js, {
                                style: {
                                    color: X ? v.qm.colors.black : v.qm.colors.white
                                },
                                children: e("searchingApk")
                            }), (0,
                            n.jsx)(S, {
                                children: e("poweredBy")
                            }), (0,
                            n.jsx)("img", {
                                src: (0,
                                g.jW)(s),
                                alt: "google"
                            })]
                        })]
                    }) : P ? (0,
                    n.jsxs)(I.GN, {
                        style: {
                            gap: "4px",
                            padding: "8px"
                        },
                        children: [M && (0,
                        n.jsxs)(E, {
                            style: {
                                justifyContent: "space-between"
                            },
                            className: "".concat(W ? "highlight-aptoide" : "", "\n                  ").concat(X && W ? "raw-highlight" : ""),
                            children: [(0,
                            n.jsxs)(x.Lb, {
                                gap: "12",
                                children: [(0,
                                n.jsx)("img", {
                                    src: (0,
                                    g.jW)(p),
                                    alt: "",
                                    width: "48"
                                }), (0,
                                n.jsxs)(I.GN, {
                                    style: {
                                        gap: "4px"
                                    },
                                    children: [(0,
                                    n.jsx)(a.js, {
                                        style: {
                                            color: X ? v.qm.colors.black : v.qm.colors.white
                                        },
                                        children: "Aptoide App Store"
                                    }), W && (0,
                                    n.jsx)(S, {
                                        children: e("bestSource")
                                    })]
                                })]
                            }), W && (0,
                            n.jsx)("img", {
                                src: (0,
                                g.jW)(h.Z),
                                alt: ""
                            })]
                        }), K && (0,
                        n.jsxs)(E, {
                            children: [(0,
                            n.jsx)("img", {
                                src: (0,
                                g.jW)(u),
                                alt: "",
                                width: "48"
                            }), (0,
                            n.jsx)(a.js, {
                                style: {
                                    color: X ? v.qm.colors.black : v.qm.colors.white
                                },
                                children: "APK Mirror"
                            })]
                        }), N && (0,
                        n.jsxs)(E, {
                            children: [(0,
                            n.jsx)("img", {
                                src: (0,
                                g.jW)(c),
                                alt: "",
                                width: "48"
                            }), (0,
                            n.jsx)(a.js, {
                                style: {
                                    color: X ? v.qm.colors.black : v.qm.colors.white
                                },
                                children: "APK Pure"
                            })]
                        }), !N && (0,
                        n.jsx)(r.Z, {
                            className: "apk-spinner ".concat(X ? "raw-apk-spinner" : ""),
                            style: {
                                marginBottom: "32px",
                                alignSelf: "center"
                            }
                        })]
                    }) : (0,
                    n.jsxs)(I.GN, {
                        style: {
                            alignItems: "center"
                        },
                        children: [(0,
                        n.jsxs)("div", {
                            style: {
                                position: "relative",
                                marginTop: "50px",
                                marginBottom: "32px"
                            },
                            children: [(0,
                            n.jsx)("img", {
                                src: (0,
                                g.jW)(p),
                                alt: "",
                                width: "48",
                                style: {
                                    opacity: "0.2"
                                }
                            }), (0,
                            n.jsx)(r.Z, {
                                className: "end-screen-spinner ".concat(X ? "raw-apk-spinner" : "")
                            })]
                        }), (0,
                        n.jsx)(a.js, {
                            style: {
                                color: X ? v.qm.colors.black : v.qm.colors.white
                            },
                            children: e("wait")
                        }), (0,
                        n.jsx)(S, {
                            style: {
                                marginBottom: "50px"
                            },
                            children: e("doNotClose")
                        })]
                    })
                })]
            })
        }
    },
    18663: function(e, t, i) {
        i.d(t, {
            F0: function() {
                return r
            },
            eE: function() {
                return d
            },
            h8: function() {
                return o
            },
            j8: function() {
                return l
            },
            mJ: function() {
                return a
            }
        });
        var n = i(57833);
        let o = n.ZP.div.withConfig({
            componentId: "sc-c1a8fb7c-0"
        })(["display:flex;padding-bottom:8px;align-items:center;h5{color:", ";}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , r = n.ZP.div.withConfig({
            componentId: "sc-c1a8fb7c-1"
        })(["height:215px;display:flex;flex-direction:column;width:410px;background:", ";padding:", ";top:50%;left:50%;position:absolute;transform:translate(-50%,-50%);border-radius:", ";backdrop-filter:blur(60px);h3{color:", ";}"], e => {
            let {theme: t} = e;
            return t.colors.white20
        }
        , e => {
            let {theme: t} = e;
            return t.spacing.base6
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius3
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , a = n.ZP.div.withConfig({
            componentId: "sc-c1a8fb7c-2"
        })(["color:", ";margin-bottom:24px;"], e => {
            let {theme: t} = e;
            return t.colors.white80
        }
        )
          , l = n.ZP.span.withConfig({
            componentId: "sc-c1a8fb7c-3"
        })(["color:", ";font-weight:400;font-size:14px;line-height:150%;vertical-align:top;"], e => {
            let {theme: t} = e;
            return t.colors.white80
        }
        )
          , d = n.ZP.img.withConfig({
            componentId: "sc-c1a8fb7c-4"
        })(["width:20px;height:20px;margin:0px 4px;"])
    },
    59949: function(e, t, i) {
        i.d(t, {
            $S: function() {
                return d
            },
            GN: function() {
                return u
            },
            Ls: function() {
                return h
            },
            NM: function() {
                return l
            },
            W2: function() {
                return c
            },
            az: function() {
                return s
            },
            il: function() {
                return a
            },
            r2: function() {
                return r
            }
        });
        var n = i(57833)
          , o = i(1857);
        let r = (0,
        n.iv)(["z-index:50;"])
          , a = e => (0,
        n.iv)(["border:1px solid ", ";backdrop-filter:blur(60px);max-width:409px;width:100%;@media only screen and (min-width:768px){position:absolute;top:4px;left:134px;}"], e.colors.white10)
          , l = (0,
        n.ZP)(o.T5).withConfig({
            componentId: "sc-fb66f565-0"
        })(["color:", ";margin:0;"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , d = (0,
        n.ZP)(o.kk).withConfig({
            componentId: "sc-fb66f565-1"
        })(["color:", ";margin:12px 0 0;"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , s = n.ZP.span.withConfig({
            componentId: "sc-fb66f565-2"
        })(["color:", ";"], e => {
            let {theme: t} = e;
            return t.colors.white80
        }
        )
          , c = n.ZP.div.withConfig({
            componentId: "sc-fb66f565-3"
        })(["display:flex;padding:12px;"])
          , u = n.ZP.div.withConfig({
            componentId: "sc-fb66f565-4"
        })(["display:flex;flex-direction:column;justify-content:center;"])
          , p = (0,
        n.F4)(["0%{opacity:0;}50%{opacity:0;}100%{opacity:1;}"])
          , h = n.ZP.div.withConfig({
            componentId: "sc-fb66f565-5"
        })(["display:flex;justify-content:flex-end;gap:10px;margin-top:30px;animation-name:", ";animation-duration:1.5s;animation-fill-mode:forwards;opacity:0;"], p)
    },
    34218: function(e, t, i) {
        i.d(t, {
            EH: function() {
                return a
            },
            Ue: function() {
                return d
            },
            aV: function() {
                return c
            },
            jB: function() {
                return l
            },
            pI: function() {
                return s
            }
        });
        var n = i(6284)
          , o = i(57833);
        let r = (0,
        o.F4)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"])
          , a = o.ZP.input.withConfig({
            componentId: "sc-778aab11-0"
        })(["height:28px;width:100%;background:", ";color:", ";border-radius:6px;padding-left:8px;outline:none;font-size:14px;font-family:inherit;border:0px;input[type=text]{color:", ";box-sizing:border-box;}"], n.qm.colors.black20, n.qm.colors.white, n.qm.colors.white)
          , l = o.ZP.div.withConfig({
            componentId: "sc-778aab11-1"
        })(["box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;padding:12px 16px;position:absolute;width:410px;transform:", ";right:", ";top:", ";background:", ";border:1px solid ", ";backdrop-filter:blur(60px);border-radius:12px;text-align:left;.recordingTooltip{color:", ";margin:0;}.rec-description{color:", ";margin:12px 0px;}"], e => {
            let {showCentered: t} = e;
            return t ? "translate(50%, -50%)" : ""
        }
        , e => {
            let {showCentered: t} = e;
            return t ? "50vw" : ""
        }
        , e => {
            let {showCentered: t} = e;
            return t ? "50vh" : ""
        }
        , n.qm.colors.white20, e => {
            let {theme: t} = e;
            return t.colors.white20
        }
        , n.qm.colors.white, n.qm.colors.white80)
          , d = o.ZP.div.withConfig({
            componentId: "sc-778aab11-2"
        })(["display:flex;flex-direction:row;width:100%;justify-content:space-between;"])
          , s = o.ZP.div.withConfig({
            componentId: "sc-778aab11-3"
        })(["display:flex;flex-direction:row;width:100%;justify-content:space-between;"])
          , c = o.ZP.div.withConfig({
            componentId: "sc-778aab11-4"
        })(["display:flex;position:fixed;z-index:101;transform:inherit;background:", ";left:0;right:0;bottom:0;top:0;&.app-page{position:absolute;z-index:9;}"], n.qm.colors.overlay);
        o.ZP.div.withConfig({
            componentId: "sc-778aab11-5"
        })(["background:rgba(0,0,0,0.3);border-radius:6px;position:relative;align-items:center;padding:8px 8px 8px 16px;display:flex;flex-direction:column;width:50%;.spinner{animation:", " 1s linear infinite;}.cancel-icon{cursor:pointer;}"], r),
        o.ZP.div.withConfig({
            componentId: "sc-778aab11-6"
        })(["display:flex;justify-content:space-evenly;gap:10px;align-items:center;"])
    },
    80077: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return E
            }
        });
        var n = i(85893)
          , o = i(11883)
          , r = i(1234)
          , a = i(1857)
          , l = i(77289)
          , d = i(94183)
          , s = i(15431)
          , c = i(1653)
          , u = i(77621)
          , p = i(67294)
          , h = i(4374)
          , g = i(21651)
          , v = i(57833);
        let x = (0,
        v.iv)(["max-height:95vh;width:440px;max-width:calc(100% - 10px);background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(12px);border-radius:24px;"])
          , f = v.ZP.div.withConfig({
            componentId: "sc-c7200e8-0"
        })(["position:absolute;top:16px;left:16px;z-index:999;"])
          , m = v.ZP.div.withConfig({
            componentId: "sc-c7200e8-1"
        })(["display:flex;flex-direction:column;align-items:center;.appIcon{width:140px;aspect-ratio:1;margin-bottom:24px;border-radius:8px;", "}"], e => {
            let {isDesktop: t} = e;
            return !t && (0,
            v.iv)(["margin-bottom:16px;width:100px;@media screen and (orientation:landscape){width:80px;margin-bottom:8px;}"])
        }
        )
          , w = v.ZP.p.withConfig({
            componentId: "sc-c7200e8-2"
        })(["font-style:normal;font-weight:500;font-size:14px;line-height:150%;color:#fff;margin-top:24px;margin-bottom:16px;text-align:center;", ""], e => {
            let {isDesktop: t} = e;
            return !t && (0,
            v.iv)(["margin-top:16px;@media screen and (orientation:landscape){margin-top:8px;margin-bottom:8px;}"])
        }
        )
          , y = v.ZP.button.withConfig({
            componentId: "sc-c7200e8-3"
        })(["color:#fff;cursor:pointer;font-weight:600;font-size:16px;line-height:150%;background-color:#FF42A5;box-shadow:0px 4px 4px rgba(0,0,0,0.2);border-radius:8px;padding:12px;width:100%;display:flex;border:none;flex-grow:1;justify-content:center;&:hover{background-color:rgba(255,66,165,0.9);}"])
          , b = v.ZP.div.withConfig({
            componentId: "sc-c7200e8-4"
        })(["", " position:absolute;top:0;left:0;width:100vw;height:100vh;"], e => {
            let {desktopBanner: t} = e;
            return " background: url(".concat(t, ") center center / cover no-repeat rgba(0, 0, 0, 0.7); ")
        }
        )
          , A = v.ZP.div.withConfig({
            componentId: "sc-c7200e8-5"
        })(["display:flex;flex-direction:column;align-items:center;img{width:200px;aspect-ratio:1;border-radius:24px;}"])
          , j = v.ZP.div.withConfig({
            componentId: "sc-c7200e8-6"
        })(["padding:12px;border-radius:24px;background-color:#fff;"])
          , C = v.ZP.p.withConfig({
            componentId: "sc-c7200e8-7"
        })(["font-weight:600;font-size:12px;line-height:150%;color:rgba(255,255,255,0.6);margin-bottom:12px;"]);
        var E = () => {
            var e, t;
            let[i,v] = (0,
            p.useState)(!1)
              , {media: E} = u.default.appInfo
              , {desktop: S} = E || {};
            (0,
            p.useEffect)( () => {
                (0,
                s.L9)(l.S5z, {
                    element: "ErrorScreen",
                    action: "Displayed",
                    group: "TryAndDownload"
                })
            }
            , []);
            let T = !(0,
            d.tq)() && !(0,
            d.Em)() && !(0,
            d.zc)()
              , I = (0,
            d.Ij)()
              , {t: k} = (0,
            h.$)()
              , R = null === (e = u.default.appInfo.playFeFeatures.tryAndDownload) || void 0 === e ? void 0 : e.clientLink;
            return (0,
            n.jsxs)(b, {
                desktopBanner: null == S ? void 0 : S.banner,
                children: [(0,
                n.jsx)(f, {
                    className: "nowggLogo",
                    children: (0,
                    n.jsx)(o.Z, {
                        themeType: "light",
                        hasTagline: !1
                    })
                }), (0,
                n.jsx)(r.Z, {
                    modalStyles: x,
                    contentStyle: {
                        backgroundImage: "unset",
                        color: "unset",
                        margin: "0",
                        padding: T ? "32px 70px" : "24px 40px",
                        backgroundColor: "unset",
                        backdropFilter: "blur(12px)",
                        overflow: "visible"
                    },
                    children: (0,
                    n.jsxs)(m, {
                        isDesktop: T,
                        children: [(0,
                        n.jsx)("img", {
                            src: u.default.appInfo.media.icon,
                            alt: k("appIcon"),
                            className: "appIcon"
                        }), (0,
                        n.jsx)(a.Bb, {
                            children: (0,
                            n.jsx)("span", {
                                style: {
                                    color: "#ffffff",
                                    display: "flex",
                                    textAlign: "center"
                                },
                                children: null === (t = u.default.appInfo) || void 0 === t ? void 0 : t.appName
                            })
                        }), (0,
                        n.jsx)(w, {
                            isDesktop: T,
                            children: k("notSupported")
                        }), !i && (0,
                        n.jsx)(y, {
                            onClick: () => {
                                let e = (0,
                                g.Pr)();
                                T ? R && !(0,
                                d.dl)() ? e ? window.open(R, "_parent", "noreferrer") : window.open(R, "_self", "noreferrer") : v(!0) : (0,
                                d.Tu)(),
                                (0,
                                s.L9)(l.S5z, {
                                    element: "ErrorScreen",
                                    action: "InstallNowClicked",
                                    group: "TryAndDownload"
                                })
                            }
                            ,
                            children: k("install")
                        }), i && (0,
                        n.jsxs)(A, {
                            children: [(0,
                            n.jsx)(C, {
                                children: k("scanPhone")
                            }), (0,
                            n.jsx)(j, {
                                children: (0,
                                n.jsx)(c.ZP, {
                                    size: 176,
                                    style: {
                                        height: "176px",
                                        width: "176px"
                                    },
                                    value: "mac" === I || "ios" === I ? u.default.appInfo.appleAppStoreUrl : u.default.appInfo.googlePlayStoreUrl
                                })
                            })]
                        })]
                    })
                })]
            })
        }
    },
    19279: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return w
            }
        });
        var n = i(85893)
          , o = i(36887)
          , r = i(1857)
          , a = i(27633)
          , l = i(38531)
          , d = i(15431)
          , s = i(77621)
          , c = i(67294)
          , u = i(4374)
          , p = i(81043)
          , h = i(57833);
        let g = h.ZP.div.withConfig({
            componentId: "sc-2ea396fe-0"
        })(["position:fixed;top:5px;right:76px;width:375px;padding:20px 16px;z-index:222;border-radius:6px;background:#464646;color:", ";> i{cursor:pointer;position:absolute;right:10px;top:10px;}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , v = h.ZP.div.withConfig({
            componentId: "sc-2ea396fe-1"
        })(["display:flex;margin:16px 0 20px;h5{font-size:16px;margin:0;}p{color:", ";font-size:14px;}"], e => {
            let {theme: t} = e;
            return t.colors.white40
        }
        )
          , x = h.ZP.div.withConfig({
            componentId: "sc-2ea396fe-2"
        })(["display:flex;justify-content:flex-end;"])
          , f = h.ZP.div.withConfig({
            componentId: "sc-2ea396fe-3"
        })(["width:48px;height:48px;border-radius:4px;overflow:hidden;"])
          , m = h.ZP.button.withConfig({
            componentId: "sc-2ea396fe-4"
        })(["-webkit-appearance:button;padding:10px 16px;border-radius:4px;color:", ";min-width:87px;border:0.5px solid #dbdce0;background:transparent;cursor:pointer;&.ok{background:#3773e0;margin-left:10px;border:none;}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        );
        var w = () => {
            let {t: e} = (0,
            u.$)()
              , t = (0,
            p.I0)()
              , i = (0,
            p.v9)(e => e.play.showPwaPrompt);
            (0,
            c.useEffect)( () => {
                i && (0,
                d.L9)("PwaNudgeDisplayed")
            }
            , [i]);
            let h = () => {
                t({
                    type: a.Z.PWA_PROMPT_STATUS,
                    payload: {
                        showPwaPrompt: !1
                    }
                })
            }
              , w = () => {
                (0,
                d.L9)("PwaNudgeDismissed"),
                h()
            }
            ;
            return (0,
            n.jsx)(n.Fragment, {
                children: i && (0,
                n.jsxs)(g, {
                    children: [(0,
                    n.jsx)(r.T4, {
                        children: e("pwaTitle")
                    }), (0,
                    n.jsx)(o.Z, {
                        size: 16,
                        style: {
                            cursor: "pointer"
                        },
                        name: "cross-thin",
                        onClick: w
                    }), (0,
                    n.jsxs)(v, {
                        children: [(0,
                        n.jsx)(f, {
                            children: (0,
                            n.jsx)("img", {
                                alt: s.default.appInfo.appName,
                                src: s.default.appInfo.media.icon,
                                width: 48,
                                height: 48
                            })
                        }), (0,
                        n.jsxs)("div", {
                            style: {
                                marginLeft: "12px"
                            },
                            children: [(0,
                            n.jsx)(r.T5, {
                                children: s.default.appInfo.appName
                            }), (0,
                            n.jsx)(r.kk, {
                                children: "now.gg"
                            })]
                        })]
                    }), (0,
                    n.jsxs)(x, {
                        children: [(0,
                        n.jsx)(m, {
                            id: "cancelPWAPopupBtn",
                            onClick: w,
                            children: e("cancel")
                        }), (0,
                        n.jsx)(m, {
                            className: "ok",
                            onClick: () => {
                                (0,
                                d.L9)("PwaNudgeAccepted"),
                                h(),
                                (0,
                                l.QB)()
                            }
                            ,
                            children: e("yes")
                        })]
                    })]
                })
            })
        }
    },
    2276: function(e, t, i) {
        i.r(t),
        i.d(t, {
            default: function() {
                return m
            }
        });
        var n = i(85893)
          , o = i(4374)
          , r = i(1857)
          , a = i(67294)
          , l = i(15431)
          , d = i(81043)
          , s = {
            src: "/_next/static/media/premium-symbol.99799c38.webp",
            height: 12,
            width: 12,
            blurDataURL: "data:image/webp;base64,UklGRs4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAABV6CokRQ2evTigBcasEZEhF58045Qg21t25QWFYjEIjVYGvll1CDShkz6nTkVR/Q/THOigF2QP+gP5gZfQasRJABWUDggZgAAAFACAJ0BKggACAACQDglsAJ0ugADN5mbCbI5gAD2dVpQb8/+XJ9Hydpy6Tc3oV9HKeV3c3p+sO5usiYOZY8oW4OKUv8WFvv7Q6s7sTSVn8i7AoakumH3Z79vS34+QEIuTW0oYyaAAA==",
            blurWidth: 8,
            blurHeight: 8
        }
          , c = i(42771)
          , u = i(77289)
          , p = i(44314)
          , h = i(64489)
          , g = i(57833)
          , v = i(7434)
          , x = i(40433);
        g.ZP.section.withConfig({
            componentId: "sc-70480f5a-0"
        })(["", ""], x.be);
        let f = (0,
        g.ZP)(v.Yd).withConfig({
            componentId: "sc-70480f5a-1"
        })(["padding:4px 12px;gap:4px;background-color:", ";border-radius:", ";border:1px solid #FFC32A;&:hover{background-color:", ";}.android-landscape &{margin-right:auto;}"], e => {
            let {theme: t} = e;
            return t.colors.white10
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius6
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white20
        }
        );
        var m = e => {
            let {onClick: t, isRewardedAddTime: i, image: g=!0, console: v=!1} = e
              , {t: x} = (0,
            o.$)()
              , m = (0,
            d.I0)();
            return (0,
            a.useEffect)( () => {
                (0,
                p.Ce)() && (i || (0,
                l.L9)("RemoveAdsButtonViewed", {
                    nowPassSource: v ? u.wMl.BottomBarRemoveAdsButton : u.wMl.HeavyAdsLayoutRemoveAdsButton
                }),
                m(h.lM))
            }
            , []),
            (0,
            n.jsx)(f, {
                onClick: e => {
                    e.stopPropagation(),
                    t()
                }
                ,
                children: (0,
                n.jsxs)(n.Fragment, {
                    children: [g && (0,
                    n.jsx)("img", {
                        src: (0,
                        c.jW)(s),
                        width: 12,
                        alt: ""
                    }), (0,
                    n.jsx)(r.Rh, {
                        children: x(i ? "addMoreTime" : "removeAds")
                    })]
                })
            })
        }
    },
    73783: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return O
            }
        });
        var n = i(85893)
          , o = i(67294)
          , r = i(81043)
          , a = i(96125)
          , l = i(17041)
          , d = i(21240)
          , s = i(82492)
          , c = i(94183)
          , u = {
            src: "/_next/static/media/hamburger-icon.18255f73.webp",
            height: 24,
            width: 24,
            blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBgAAAABFyAQSHEoSxwR4SAQSOKYf+iI/gccdwBWUDggGAAAADABAJ0BKggACAACQDglpAADcAD++yGAAA==",
            blurWidth: 8,
            blurHeight: 8
        }
          , p = i(27633)
          , h = i(42771)
          , g = i(5152)
          , v = i.n(g)
          , x = i(21651)
          , f = i(44314)
          , m = i(48254)
          , w = i(4374)
          , y = i(80277)
          , b = i(77289)
          , A = i(15431)
          , j = i(64489)
          , C = i(6284)
          , E = i(57833);
        let S = E.ZP.img.withConfig({
            componentId: "sc-274e9288-0"
        })(["width:24px;height:24px;transform:unset;"])
          , T = E.ZP.div.withConfig({
            componentId: "sc-274e9288-1"
        })(["display:flex;flex-direction:row;gap:6px;align-items:center;"])
          , I = E.ZP.p.withConfig({
            componentId: "sc-274e9288-2"
        })(["display:inline-flex;height:10px;padding:0px 4px;justify-content:center;align-items:center;flex-shrink:0;border-radius:36px;background:#7B4CFF;backdrop-filter:blur(60px);color:", ";text-align:center;font-size:8px;font-weight:600;line-height:16px;letter-spacing:0.16px;position:absolute;left:50%;transform:translate(-50%,16px);width:max-content;text-transform:uppercase;", ""], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {expanded: t, firstColumn: i} = e;
            return t && (0,
            E.iv)(["left:calc(50% + ", "px);"], i ? -20 : 20)
        }
        );
        var k = e => {
            let {expanded: t} = e
              , {t: i} = (0,
            w.$)()
              , [a,l] = (0,
            o.useState)(!1)
              , d = (0,
            r.v9)(e => e.play.activeSubscriptionTimeSecs)
              , s = (0,
            r.v9)(e => e.ads.rewardedPremiumTimeInSec)
              , u = (0,
            r.v9)(e => e.play.nowPremiumSubscriptionActive)
              , g = s > 0
              , v = (0,
            r.I0)();
            (0,
            o.useEffect)( () => {
                l((0,
                c.A6)(d, s))
            }
            , [d, s]);
            let x = (0,
            o.useCallback)( () => {
                u || (0,
                c.J6)() && !(0,
                c.T2)() || ((0,
                A.L9)(b.fik, {
                    nowPassSource: b.wMl.FloatingWidgetRemoveAdsButton
                }),
                v({
                    type: p.Z.TOGGLE_SUBSCRIPTION_MODAL,
                    payload: {
                        showSubscriptionModal: !0,
                        subscriptionFlowSource: b.wMl.FloatingWidgetRemoveAdsButton
                    }
                }))
            }
            , [A.L9, v, u]);
            return (0,
            o.useEffect)( () => {
                (!((0,
                f.Ce)() && (0,
                c.J6)()) || (0,
                c.T2)()) && ((0,
                A.L9)("RemoveAdsButtonViewed", {
                    nowPassSource: b.wMl.FloatingWidgetRemoveAdsButton
                }),
                v(j.lM))
            }
            , []),
            (0,
            n.jsxs)(T, {
                onClick: x,
                children: [(0,
                n.jsx)(S, {
                    src: (0,
                    h.jW)(y.Z),
                    alt: ""
                }), d ? d < 86400 && (0,
                n.jsx)(I, {
                    style: a ? {
                        background: C.qm.colors.warning
                    } : {},
                    expanded: t,
                    firstColumn: !(0,
                    c.Qx)(),
                    children: (0,
                    c.SC)(g ? s : d, !0)
                }) : (0,
                n.jsx)(I, {
                    expanded: t,
                    firstColumn: !(0,
                    c.Qx)(),
                    children: i("noAds")
                })]
            })
        }
        ;
        let R = v()( () => i.e(1034).then(i.bind(i, 11034)), {
            loadableGenerated: {
                webpack: () => [11034]
            },
            ssr: !1
        });
        var L = e => {
            let {clicked: t} = e
              , i = (0,
            r.v9)(e => e.user.loginNotificationCount)
              , g = (0,
            r.v9)(e => e.user.lastLoginNotifDate)
              , [v,w] = (0,
            o.useState)(!1)
              , [y,b] = (0,
            o.useState)(!1);
            (0,
            x.Pr)();
            let A = (0,
            r.v9)(e => e.play.activeSubscriptionTimeSecs);
            (0,
            r.v9)(e => e.nowbuxRewards.nowbuxCreditsEarned);
            let j = (0,
            r.v9)(e => e.ads.rewardedPremiumTimeInSec)
              , C = (0,
            r.I0)();
            return (0,
            o.useEffect)( () => {
                w(i < 3 && (0,
                l.J)(g, new Date().toDateString()))
            }
            , []),
            (0,
            o.useEffect)( () => {
                v && s.default.dispatch({
                    type: d.Z.LOGIN_NOTIF_UPDATE,
                    payload: {
                        loginNotificationCount: i + 1,
                        lastLoginNotifDate: new Date().toDateString()
                    }
                })
            }
            , [v]),
            (0,
            n.jsx)(a._, {
                style: (0,
                c.Tt)() ? {
                    touchAction: "manipulation"
                } : {},
                children: (0,
                n.jsxs)(m.ZP, {
                    expanded: t,
                    children: [(0,
                    c.A$)() && (0,
                    n.jsx)(m.UB, {
                        id: "ng-ana",
                        style: t ? {
                            marginTop: 14
                        } : {},
                        children: (0,
                        n.jsx)(R, {})
                    }, "ng-ana"), (0,
                    n.jsxs)(m.lw, {
                        expanded: t,
                        children: [((0,
                        f.Ce)() && !!A && A < f.go || (0,
                        c.J6)() && (0,
                        f.a5)() && j > 0) && (0,
                        n.jsx)(k, {
                            expanded: t
                        }), (0,
                        n.jsx)(m.UB, {
                            className: "ng-show-header-footer",
                            onClick: () => {
                                C({
                                    type: p.Z.UPDATE_PLAY_STATE,
                                    payload: {
                                        showMobileHeaderFooter: !0
                                    }
                                })
                            }
                            ,
                            id: "ng-show-header-footer",
                            children: (0,
                            n.jsx)("img", {
                                src: (0,
                                h.jW)(u),
                                alt: "ng-show-header-footer"
                            })
                        }, "ng-show-header-footer")]
                    })]
                })
            })
        }
          , P = i(88576);
        i(75952);
        var D = i(68283)
          , M = i(77621)
          , O = e => {
            var t, i, a, l, d, s, u, p, h, g, v, x;
            let {isAppPage: f} = e
              , [m,w] = (0,
            o.useState)(!1)
              , [y,b] = (0,
            o.useState)((0,
            c.$h)())
              , A = null === (i = null === (t = M.default.appInfo.playFeFeatures) || void 0 === t ? void 0 : t.tryAndDownload) || void 0 === i ? void 0 : i.isEnabled
              , j = f || (null === (d = null === (l = null === (a = M.default.appInfo) || void 0 === a ? void 0 : a.playFeFeatures) || void 0 === l ? void 0 : l.uiConfig) || void 0 === d ? void 0 : d.enableHeader)
              , C = (null === (p = null === (u = null === (s = M.default.appInfo) || void 0 === s ? void 0 : s.playFeFeatures) || void 0 === u ? void 0 : u.uiConfig) || void 0 === p ? void 0 : p.enableIframeHeader) && y
              , E = (0,
            r.v9)(e => e.play.showMobileHeaderFooter)
              , S = (0,
            r.v9)(e => e.play.showSubscriptionEnabledModal)
              , T = null === (x = null === (v = null === (g = null === (h = M.default.appInfo) || void 0 === h ? void 0 : h.playFeFeatures) || void 0 === g ? void 0 : g.uiConfig) || void 0 === v ? void 0 : v.mobileMenu) || void 0 === x ? void 0 : x.enabled;
            return (0,
            o.useEffect)( () => {
                b((0,
                c.$h)())
            }
            , []),
            (0,
            c.tq)() ? (0,
            c.gi)() || "51946" === M.default.appInfo.appId || S || E ? null : (0,
            n.jsxs)(n.Fragment, {
                children: [T && (0,
                n.jsx)(L, {
                    clicked: m
                }), A && !(0,
                c.RZ)() && (0,
                n.jsx)(D.Z, {})]
            }) : j || C ? A && !(0,
            c.RZ)() ? (0,
            n.jsx)(D.Z, {}) : (0,
            c.SR)() && !(0,
            c.RZ)() && (!y || C || (0,
            c.k3)()) ? (0,
            n.jsx)(P.e, {}) : null : null
        }
    },
    63549: function(e, t, i) {
        var n = i(49527)
          , o = i(79853)
          , r = i(59982)
          , a = i(80743)
          , l = i(27633)
          , d = i(34255)
          , s = i(94183)
          , c = i(44537)
          , u = i(21651)
          , p = i(15431)
          , h = i(67294)
          , g = i(81043);
        t.Z = e => {
            let {adsEnabled: t} = e
              , [i,v] = (0,
            h.useState)(!1)
              , [x,f] = (0,
            h.useState)(!1)
              , m = (0,
            g.v9)(e => e.ads.imaError)
              , w = (0,
            g.v9)(e => e.play.adBlockerMethodType)
              , y = (0,
            g.v9)(e => e.play.error)
              , b = (0,
            g.I0)()
              , A = (e, t) => !!e && ((0,
            c.zr)("getAdLoadError", !1),
            b({
                type: a.Z.UPDATE_IMAERROR,
                payload: {
                    adBlocker: !0,
                    adsEnded: !0
                }
            }),
            !!t);
            return (0,
            h.useEffect)( () => {
                if (i) {
                    if (t) {
                        b({
                            type: l.Z.UPDATE_PLAY_STATE,
                            payload: {
                                isLoadAdBlockerLib: !0
                            }
                        }),
                        window.googlefc = window.googlefc || {},
                        window.googlefc.ccpa = window.googlefc.ccpa || {},
                        window.googlefc.callbackQueue = window.googlefc.callbackQueue || [],
                        (0,
                        p.L9)("PreAdBlocker");
                        let e = setTimeout( () => {
                            clearTimeout(e),
                            (0,
                            p.L9)("AdBlockerTimeout"),
                            f(!0),
                            v(!1)
                        }
                        , 5e3);
                        window.googlefc.callbackQueue.push({
                            AD_BLOCK_DATA_READY: () => {
                                clearTimeout(e);
                                let t = window.googlefc.getAdBlockerStatus()
                                  , a = window.googlefc.getAllowAdsStatus();
                                if ((0,
                                p.L9)("AdBlockerReady", {
                                    adBlockerStatus: t,
                                    allowAdsStatus: a
                                }),
                                t === window.googlefc.AdBlockerStatusEnum.EXTENSION_LEVEL_AD_BLOCKER || t === window.googlefc.AdBlockerStatusEnum.NETWORK_LEVEL_AD_BLOCKER) {
                                    if (a === window.googlefc.AllowAdsStatusEnum.ADS_NOT_ALLOWED)
                                        (0,
                                        o.cd)(),
                                        (0,
                                        r.Vx)(n.p.GOOGLE_AD_BLOCKER),
                                        b({
                                            type: l.Z.UPDATE_PLAY_STATE,
                                            payload: {
                                                adBlockerMethodType: n.p.GOOGLE_AD_BLOCKER
                                            }
                                        });
                                    else {
                                        if (!i)
                                            return;
                                        f(!0),
                                        v(!1)
                                    }
                                } else {
                                    if (!i)
                                        return;
                                    f(!0),
                                    v(!1)
                                }
                            }
                        })
                    } else
                        f(!0),
                        v(!1)
                }
            }
            , [i, b]),
            (0,
            h.useEffect)( () => {
                x && ((0,
                p.L9)("GoogleAdBlockCheckCrossed"),
                A(m, t) && (!(0,
                u.Pr)() || t) ? ((0,
                r.Vx)(n.p.DEV_AD_BLOCKER),
                b({
                    type: l.Z.UPDATE_PLAY_STATE,
                    payload: {
                        adBlockerMethodType: n.p.DEV_AD_BLOCKER
                    }
                })) : (0,
                p.L9)("NowggAdBlockCheckCrossed"))
            }
            , [x, m]),
            (0,
            h.useEffect)( () => {
                (0,
                s.m4)() || w === n.p.NONE || y || b((0,
                d.KF)("ForbiddenAdBlockerFe"))
            }
            , [w]),
            {
                setAdBlockerWorkflow: v
            }
        }
    },
    89667: function(e, t, i) {
        let n;
        i.r(t),
        i.d(t, {
            PlayPage: function() {
                return lY
            },
            default: function() {
                return lX
            }
        });
        var o = i(85893)
          , r = i(67294)
          , a = i(81043)
          , l = i(80743)
          , d = i(44537)
          , s = i(77621)
          , c = i(94183)
          , u = i(15431)
          , p = i(84502)
          , h = i(49527)
          , g = i(57833);
        let v = g.ZP.div.withConfig({
            componentId: "sc-e9b9a59d-0"
        })(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:", ";height:", ";.preroll-wrapper-videoplayer-dimensions{height:", ";padding:", ";@media only screen and (max-width:600px){body.landscape &{width:100%;height:100%;}}}&.mobilePrerollAdsContainer{.preroll-wrapper-videoplayer_ima-ad-container > div:first-child,.preroll-wrapper-videoplayer_ima-ad-container iframe{width:100% !important;height:100% !important;display:flex;align-items:center;}}}"], e => {
            let {isAppPage: t} = e;
            return t ? "100% !important" : ""
        }
        , e => {
            let {isAppPage: t} = e;
            return t ? "100% !important" : ""
        }
        , e => {
            let {isAppPage: t} = e;
            return t ? "100% !important" : ""
        }
        , e => {
            let {isAppPage: t} = e;
            return t ? "0 !important" : ""
        }
        )
          , x = 0;
        var f = (0,
        r.memo)(e => {
            var t, i, n, g, f, m;
            let {adsError: w, setAdsMuted: y, setAdStart: b, adsEnded: A, isAppPage: j} = e
              , C = (0,
            a.I0)()
              , E = (0,
            r.useRef)(null)
              , S = (0,
            r.useRef)(null)
              , T = (0,
            r.useRef)()
              , I = (0,
            a.v9)(e => e.play.videoRef)
              , k = sessionStorage.getItem("utm_campaign")
              , R = 0
              , L = 0
              , P = window.devicePixelRatio
              , D = (0,
            r.useRef)(!1)
              , M = 0
              , O = 0
              , K = {}
              , Z = {}
              , N = "fredboat" === k || "carl" === k || (0,
            s.DJ)() && !(0,
            c.tq)();
            N || (N = !(0,
            c.tq)() || (0,
            c.Em)() || (0,
            c.zc)() ? !(null === (m = null === (f = null === (g = s.default.appInfo.playFeFeatures) || void 0 === g ? void 0 : g.ads) || void 0 === f ? void 0 : f.desktop) || void 0 === m ? void 0 : m.enablePrerollAds) : !(null === (n = null === (i = null === (t = s.default.appInfo.playFeFeatures) || void 0 === t ? void 0 : t.ads) || void 0 === i ? void 0 : i.mobile) || void 0 === n ? void 0 : n.enablePrerollAds));
            let B = e => {
                (0,
                d.zr)("adComplete", e),
                C({
                    type: l.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                })
            }
              , W = e => {
                (0,
                d.zr)("adSkipped", e),
                C({
                    type: l.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                })
            }
              , _ = e => {
                var t, i;
                R = (null === (t = null == I ? void 0 : I.current) || void 0 === t ? void 0 : t.clientHeight) || 0,
                L = (null === (i = null == I ? void 0 : I.current) || void 0 === i ? void 0 : i.clientWidth) || 0,
                clearTimeout(S.current),
                S.current = setTimeout( () => {
                    var t;
                    b(!1),
                    (0,
                    u.L9)("AdRequestTimeout", {
                        adContext: "Preroll",
                        adType: "Video",
                        retryCount: x,
                        adWidth: M,
                        adHeight: O,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: R,
                        androidHeight: L,
                        pixelRatio: P,
                        adSlot: h.K.PREROLL
                    }),
                    null === (t = null == T ? void 0 : T.current) || void 0 === t || t.closePlayer(),
                    (0,
                    d.zr)("AdRequestTimeout_onAdLoaded", e),
                    C({
                        type: l.Z.UPDATE_ADS_STATE,
                        payload: {
                            adsEnded: !0
                        }
                    })
                }
                , 1e4)
            }
              , F = () => {
                var e, t;
                x += 1,
                "p" !== (0,
                c.Sf)() && (S.current = setTimeout( () => {
                    var e;
                    b(!1),
                    (0,
                    u.L9)("AdRequestTimeout", {
                        adContext: "Preroll",
                        adType: "Video",
                        retryCount: x,
                        adWidth: M,
                        adHeight: O,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: R,
                        androidHeight: L,
                        pixelRatio: P,
                        adSlot: h.K.PREROLL
                    }),
                    null === (e = null == T ? void 0 : T.current) || void 0 === e || e.closePlayer(),
                    (0,
                    d.zr)("AdRequestTimeout_BeforeQueue", !0),
                    C({
                        type: l.Z.UPDATE_ADS_STATE,
                        payload: {
                            adsEnded: !0
                        }
                    })
                }
                , 15e3),
                (0,
                u.L9)("AdRequestedNg", {
                    adContext: "Preroll",
                    adType: "Video",
                    retryCount: x,
                    adWidth: M,
                    adHeight: O,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: R,
                    androidHeight: L,
                    pixelRatio: P,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: void 0 !== (null === (e = null == window ? void 0 : window.tude) || void 0 === e ? void 0 : e.refreshAdsViaDivMappings),
                    isGptLoaded: void 0 !== (null === (t = null == window ? void 0 : window.googletag) || void 0 === t ? void 0 : t.pubads),
                    adSlot: h.K.PREROLL
                }),
                window.tude.cmd.push( () => {
                    var e, t;
                    "p" !== (0,
                    c.Sf)() && ((0,
                    u.L9)("AdRequested", {
                        adContext: "Preroll",
                        retryCount: x,
                        adType: "Video",
                        adWidth: M,
                        adHeight: O,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: R,
                        androidHeight: L,
                        pixelRatio: P,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: void 0 !== (null === (e = null == window ? void 0 : window.tude) || void 0 === e ? void 0 : e.refreshAdsViaDivMappings),
                        isGptLoaded: void 0 !== (null === (t = null == window ? void 0 : window.googletag) || void 0 === t ? void 0 : t.pubads),
                        adSlot: h.K.PREROLL
                    }),
                    window.tude.requestInstreamPlayer({
                        divId: "preroll-wrapper",
                        code: "stream",
                        mode: "adOnly",
                        targeting: {
                            ads_loc: "video-auto-pre"
                        }
                    }).then(e => {
                        T.current = e,
                        e.on("adNoFill", () => {
                            X(!1)
                        }
                        ).on("adError", () => {
                            X(!1)
                        }
                        ).on("adReady", () => {
                            var e;
                            y(!j),
                            null === (e = null == T ? void 0 : T.current) || void 0 === e || e.setVideoVolume(j ? 1 : 0),
                            Z = window.pbjs.getBidResponses() || {},
                            _(!0)
                        }
                        ).on("adProgress", (e, t) => {
                            var i;
                            let {milestone: n} = t;
                            if ("complete" === n) {
                                if (D.current)
                                    return;
                                b(!1),
                                B(!0)
                            } else if ("start" === n) {
                                null === (i = null == T ? void 0 : T.current) || void 0 === i || i.setVideoVolume(j ? 1 : 0),
                                clearTimeout(S.current),
                                D.current = !1,
                                b(!0);
                                let {bids: e=[]} = Z["pre-roll"] || {}
                                  , {bidder: t, cpm: n, currency: o, netRevenue: r, status: a, statusMessage: l, timeToRespond: d, ttl: s} = e[0] || {};
                                K = {
                                    bidder: t,
                                    cpm: n,
                                    currency: o,
                                    netRevenue: r,
                                    status: a,
                                    statusMessage: l,
                                    timeToRespond: d,
                                    ttl: s
                                },
                                (0,
                                u.L9)("AdDisplayed", Object.assign({
                                    adContext: "Preroll",
                                    adType: "Video",
                                    retryCount: x,
                                    adWidth: M,
                                    adHeight: O,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: R,
                                    androidHeight: L,
                                    pixelRatio: P,
                                    adSlot: h.K.PREROLL
                                }, K))
                            }
                        }
                        ).on("adSkipped", () => {
                            b(!1),
                            W(!0),
                            D.current = !0
                        }
                        )
                    }
                    ).catch(e => {}
                    ))
                }
                ))
            }
              , Y = (0,
            a.v9)(e => e.play.orientation);
            function X(e) {
                var t, i;
                b(!1),
                R = (null === (t = null == I ? void 0 : I.current) || void 0 === t ? void 0 : t.clientHeight) || 0,
                L = (null === (i = null == I ? void 0 : I.current) || void 0 === i ? void 0 : i.clientWidth) || 0,
                clearTimeout(S.current),
                (0,
                u.L9)("AdNotFilled", {
                    adContext: "Preroll",
                    adType: "Video",
                    retryCount: x,
                    adWidth: M,
                    adHeight: O,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: R,
                    androidHeight: L,
                    pixelRatio: P,
                    adSlot: h.K.PREROLL
                }),
                e ? F() : ((0,
                d.zr)("AdError", !0),
                C({
                    type: l.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                }))
            }
            let H = (e, t) => {
                M = e,
                O = t
            }
              , z = e => Math.ceil(4 / 3 * e)
              , U = e => Math.ceil(e / (4 / 3))
              , G = () => {
                let e, t;
                (0,
                c.tq)() ? window.innerHeight > window.innerWidth ? (e = Y === p.cj.portrait ? window.innerWidth - 20 : window.innerHeight - 20,
                t = Y === p.cj.portrait ? window.innerHeight : window.innerWidth) : (e = window.innerHeight - 20,
                t = window.innerWidth) : (e = window.innerWidth - 20,
                t = window.innerHeight);
                let i = z(t)
                  , n = t;
                i > e && (n = U(i = e)),
                E.current && (E.current.style.width = "".concat(i, "px"),
                E.current.style.height = "".concat(n, "px")),
                H(i, n)
            }
              , V = () => {
                var e, t, i, n;
                G(),
                R = (null === (e = null == I ? void 0 : I.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                L = (null === (t = null == I ? void 0 : I.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                clearTimeout(S.current),
                S.current = setTimeout( () => {
                    var e;
                    b(!1),
                    (0,
                    u.L9)("AdRequestTimeout", {
                        adContext: "Preroll",
                        adType: "Video",
                        retryCount: x,
                        adWidth: M,
                        adHeight: O,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: R,
                        androidHeight: L,
                        pixelRatio: P,
                        adSlot: h.K.PREROLL
                    }),
                    null === (e = null == T ? void 0 : T.current) || void 0 === e || e.closePlayer(),
                    (0,
                    d.zr)("AdRequestTimeout_BeforeQueue", !1),
                    C({
                        type: l.Z.UPDATE_ADS_STATE,
                        payload: {
                            adsEnded: !0
                        }
                    })
                }
                , 15e3),
                (0,
                u.L9)("AdRequestedNg", {
                    adContext: "Preroll",
                    adType: "Video",
                    retryCount: x,
                    adWidth: M,
                    adHeight: O,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: R,
                    androidHeight: L,
                    pixelRatio: P,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: void 0 !== (null === (i = null == window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                    isGptLoaded: void 0 !== (null === (n = null == window ? void 0 : window.googletag) || void 0 === n ? void 0 : n.pubads),
                    adSlot: h.K.PREROLL
                }),
                window.tude.cmd.push( () => {
                    var e, t, i, n;
                    "p" !== (0,
                    c.Sf)() && (R = (null === (e = null == I ? void 0 : I.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                    L = (null === (t = null == I ? void 0 : I.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                    (0,
                    u.L9)("AdRequested", {
                        adContext: "Preroll",
                        adType: "Video",
                        retryCount: x,
                        adWidth: M,
                        adHeight: O,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: R,
                        androidHeight: L,
                        pixelRatio: P,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: void 0 !== (null === (i = null == window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                        isGptLoaded: void 0 !== (null === (n = null == window ? void 0 : window.googletag) || void 0 === n ? void 0 : n.pubads),
                        adSlot: h.K.PREROLL
                    }),
                    window.tude.requestInstreamPlayer({
                        divId: "preroll-wrapper",
                        code: "pre-roll",
                        mode: "adOnly",
                        targeting: {
                            ads_loc: "video-auto-pre"
                        }
                    }).then(e => {
                        T.current = e,
                        e.on("adNoFill", () => {
                            X(!0)
                        }
                        ).on("adError", () => {
                            X(!0)
                        }
                        ).on("adReady", () => {
                            var e;
                            y(!j),
                            null === (e = null == T ? void 0 : T.current) || void 0 === e || e.setVideoVolume(j ? 1 : 0),
                            Z = window.pbjs.getBidResponses() || {},
                            _(!1)
                        }
                        ).on("adPaused", () => {
                            C({
                                type: l.Z.PREROLL_AD_PAUSED,
                                payload: {
                                    preRollAdPaused: !0
                                }
                            })
                        }
                        ).on("adResumed", () => {
                            C({
                                type: l.Z.PREROLL_AD_PAUSED,
                                payload: {
                                    preRollAdPaused: !1
                                }
                            })
                        }
                        ).on("adProgress", (e, t) => {
                            var i;
                            let {milestone: n, ad: o} = t;
                            if ("complete" === n) {
                                if (D.current)
                                    return;
                                b(!1),
                                B(!1)
                            } else if ("start" === n) {
                                null === (i = null == T ? void 0 : T.current) || void 0 === i || i.setVideoVolume(j ? 1 : 0),
                                clearTimeout(S.current),
                                D.current = !1,
                                b(!0),
                                C({
                                    type: l.Z.PREROll_ADS_DURATION,
                                    payload: {
                                        preRollAdsDuration: o.data.duration
                                    }
                                });
                                let {bids: e=[]} = Z["pre-roll"] || {}
                                  , {bidder: t, cpm: n, currency: r, netRevenue: a, status: d, statusMessage: s, timeToRespond: c, ttl: p} = e[0] || {};
                                K = {
                                    bidder: t,
                                    cpm: n,
                                    currency: r,
                                    netRevenue: a,
                                    status: d,
                                    statusMessage: s,
                                    timeToRespond: c,
                                    ttl: p
                                },
                                (0,
                                u.L9)("AdDisplayed", Object.assign({
                                    adContext: "Preroll",
                                    adType: "Video",
                                    retryCount: x,
                                    adWidth: M,
                                    adHeight: O,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: R,
                                    androidHeight: L,
                                    pixelRatio: P,
                                    adSlot: h.K.PREROLL
                                }, K))
                            }
                        }
                        ).on("adSkipped", () => {
                            b(!1),
                            W(!1),
                            D.current = !0
                        }
                        )
                    }
                    ).catch(e => {}
                    ))
                }
                );
                let o = () => {
                    G()
                }
                ;
                return window.addEventListener("resize", o),
                () => {
                    window.removeEventListener("resize", o)
                }
            }
            ;
            return (0,
            r.useEffect)( () => {
                w || N ? ((0,
                d.zr)(N && "disableAds" || w && "adsError" || "adsError_disableAds", !1),
                C({
                    type: l.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                })) : ((0,
                u.L9)("PrerollBegin"),
                V())
            }
            , []),
            (0,
            r.useEffect)( () => () => clearTimeout(S.current), []),
            w || A || N ? null : (0,
            o.jsx)(v, {
                ref: E,
                id: "preroll-wrapper",
                isAppPage: j,
                className: (0,
                c.tq)() ? "mobilePrerollAdsContainer" : ""
            })
        }
        )
          , m = i(66371)
          , w = i(50875);
        let y = (0,
        g.F4)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"])
          , b = (0,
        g.F4)(["0%{opacity:1;}100%{opacity:0;}"])
          , A = (0,
        g.F4)(["0%{opacity:0;}100%{opacity:1;}"])
          , j = (0,
        g.F4)(["0%{opacity:0;transform:translateY(20px);}100%{opacity:1;transform:translateY(0);}"])
          , C = (0,
        g.F4)(["0%{opacity:1;transform:translateY(0);}100%{opacity:0;transform:translateY(20px);}"])
          , E = g.ZP.div.withConfig({
            componentId: "sc-e07ad0f6-0"
        })(["position:absolute;top:0;left:0;", " width:100vw;height:", ";z-index:", ";pointer-events:all;animation:", " 0.1s ease-out;touch-action:none;", ""], e => {
            let {showBackground: t} = e;
            return t ? "\n    background-color: rgba(0,0,0,0.7)};\n  " : ""
        }
        , e => {
            let {isAppPage: t} = e;
            return t ? "100% !important" : "100vh"
        }
        , e => {
            let {isAppPage: t} = e;
            return t ? 1 : 14
        }
        , A, e => {
            let {isAppPage: t, isDesktop: i} = e;
            return t && (0,
            g.iv)(["width:100% !important;height:", ";"], i ? "calc(100% - 52px) !important" : "100%")
        }
        )
          , S = g.ZP.div.withConfig({
            componentId: "sc-e07ad0f6-1"
        })(["position:absolute;top:0;left:0;width:100%;height:100%;background-position:center;background-repeat:no-repeat;background-size:cover;overflow:hidden;display:flex;justify-content:center;align-items:center;z-index:19;touch-action:none;", " background-color:rgba(0,0,0,0.1);@media screen and (max-width:600px){background-position:center;top:0;}", ""], e => {
            let {banner: t} = e;
            return t ? "background-image: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('".concat(t, "');") : ""
        }
        , e => {
            let {toggle: t} = e;
            return t ? (0,
            g.iv)(["animation:", " 0.1s ease-out;"], A) : (0,
            g.iv)(["animation:", " 0.1s ease-out;animation-delay:0.3s;"], b)
        }
        )
          , T = g.ZP.div.withConfig({
            componentId: "sc-e07ad0f6-2"
        })(["display:inline-flex;flex-direction:column;align-items:center;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(24px);padding:", ";border-radius:", ";color:", ";font-size:18px;line-height:150%;width:448px;max-width:100%;> h5{font-size:16px;margin:0;}> p{margin:8px 16px 16px;}> img{width:65px;border-radius:6px;}", ""], e => {
            let {theme: t} = e;
            return t.spacing.base6
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius2
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {toggle: t} = e;
            return t ? (0,
            g.iv)(["animation:", " 0.1s ease-out;"], j) : (0,
            g.iv)(["animation:", " 0.1s ease-out;"], C)
        }
        );
        g.ZP.p.withConfig({
            componentId: "sc-e07ad0f6-3"
        })(["width:28px;height:28px;border-radius:100%;border:2px solid ", ";border-bottom-color:rgba(255,255,255,0.4);transition:all 1s ease-in-out;animation-name:", ";animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:linear;margin-bottom:", ";"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , y, e => {
            let {theme: t} = e;
            return t.spacing.base6
        }
        ),
        g.ZP.div.withConfig({
            componentId: "sc-e07ad0f6-4"
        })(["position:absolute;left:0;top:0;right:0;bottom:0;background-color:", ";"], e => {
            let {theme: t} = e;
            return t.colors.black
        }
        ),
        g.ZP.div.withConfig({
            componentId: "sc-e07ad0f6-5"
        })(["text-align:center;width:700px;max-width:90%;top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;display:flex;justify-content:center;align-items:center;flex-direction:column;p{font-weight:600;font-size:24px;line-height:150%;color:", ";margin-bottom:32px;padding:0 50px;.mobile &{padding:0;.rotate-screen &{padding:0 10px;}}}"], e => {
            var t;
            let {theme: i} = e;
            return null === (t = i.colors) || void 0 === t ? void 0 : t.white
        }
        ),
        g.ZP.div.withConfig({
            componentId: "sc-e07ad0f6-6"
        })(["width:256px;background:", ";box-shadow:0px 8px 16px ", ";border-radius:8px;padding:12px;font-weight:600;font-size:16px;line-height:150%;color:", ";cursor:pointer;display:flex;justify-content:center;align-items:center;.playImg{margin-right:8px;}"], e => {
            var t;
            let {theme: i} = e;
            return null === (t = i.colors) || void 0 === t ? void 0 : t.link
        }
        , e => {
            var t;
            let {theme: i} = e;
            return null === (t = i.colors) || void 0 === t ? void 0 : t.black10
        }
        , e => {
            var t;
            let {theme: i} = e;
            return null === (t = i.colors) || void 0 === t ? void 0 : t.white
        }
        ),
        g.ZP.div.withConfig({
            componentId: "sc-e07ad0f6-7"
        })(["position:absolute;top:50px;left:0;width:100%;height:calc(100% - 50px);display:flex;overflow:hidden;justify-content:center;align-items:center;.rotate-screen &,.portrait-mode &{top:0px;height:100%;}"]);
        var I = (0,
        r.memo)(e => {
            let t, {isAppPage: i} = e, [n,u] = (0,
            r.useState)(!0), [h,g] = (0,
            r.useState)(!1), [v,x] = (0,
            r.useState)(4), [y,b] = (0,
            r.useState)(!1), A = (0,
            r.useRef)(null), j = (0,
            a.v9)(e => e.ads.imaError), C = (0,
            a.v9)(e => e.ads.adsEnded), S = (0,
            a.v9)(e => e.play.isAndroidConnected), T = (0,
            a.v9)(e => e.play.orientation), I = (0,
            a.I0)();
            (0,
            r.useEffect)( () => (y && (0,
            c.tq)() && T === p.cj.landscape && (t = setTimeout( () => {
                v >= 1 ? x(v - 1) : clearTimeout(t),
                g(!0)
            }
            , 1e3)),
            () => {
                clearTimeout(t)
            }
            ), [y, v]);
            let k = () => {
                let e = null == A ? void 0 : A.current;
                e && setTimeout( () => {
                    let t = window.innerWidth
                      , i = window.innerHeight;
                    (0,
                    s.DJ)() ? (e.style.width = "".concat(t, "px"),
                    e.style.height = "".concat(i, "px")) : T === p.cj.portrait && (90 === window.orientation || -90 === window.orientation) ? (e.style.width = "".concat(i, "px"),
                    e.style.height = "".concat(t, "px")) : T === p.cj.portrait || T === p.cj.landscape && (90 === window.orientation || -90 === window.orientation) ? (e.style.width = "".concat(t, "px"),
                    e.style.height = "".concat(i, "px")) : (e.style.width = "".concat(i, "px"),
                    e.style.height = "".concat(t, "px")),
                    (0,
                    w.sZ)(),
                    (0,
                    w.Ul)()
                }
                , 100)
            }
              , R = () => {
                "visible" === document.visibilityState && setTimeout( () => {
                    k()
                }
                , 200)
            }
            ;
            (0,
            r.useEffect)( () => {
                let {browserCode: e} = window.nggClientIpInfo || {};
                return e && "mob" !== e || ((0,
                d.zr)("proxyDetect-preroll-modal-component", !1),
                I({
                    type: l.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                })),
                (0,
                c.tq)() && (k(),
                window.addEventListener("orientationchange", k),
                document.addEventListener("visibilitychange", R)),
                () => {
                    (0,
                    c.tq)() && (window.removeEventListener("orientationchange", k),
                    document.removeEventListener("visibilitychange", R))
                }
            }
            , []);
            let {browserCode: L} = window.nggClientIpInfo || {};
            return L && "mob" !== L ? (0,
            o.jsxs)(E, {
                ref: A,
                showBackground: !(C && !S),
                isAppPage: i,
                isMobile: (0,
                c.tq)(),
                isDesktop: (0,
                c.nI)(),
                children: [(0,
                o.jsx)(m.Z, {
                    animateSmall: C || y
                }), (0,
                o.jsx)(f, {
                    setAdsMuted: u,
                    adsError: j,
                    setAdStart: b,
                    adsEnded: C,
                    isAppPage: i
                })]
            }) : null
        }
        )
          , k = i(17609)
          , R = i(82492)
          , L = i(26669)
          , P = i(27633)
          , D = i(41640)
          , M = i(50678)
          , O = i(30555)
          , K = i(4374)
          , Z = () => (0,
        o.jsxs)("svg", {
            width: "64",
            height: "64",
            viewBox: "0 0 64 64",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0,
            o.jsx)("path", {
                d: "M15.8399 19.7726C6.95647 20.5695 0 28.0912 0 37.2457C0 46.9443 7.78508 54.7965 17.4008 54.7965H31.9496C31.9689 54.7965 31.9689 54.7965 31.9882 54.7965C22.3917 54.777 14.6259 46.9248 14.6259 37.2457V26.2059C14.6259 23.9319 15.0499 21.7551 15.8399 19.7726Z",
                fill: "#FF42A5"
            }), (0,
            o.jsx)("path", {
                d: "M48.1557 19.7726C48.9458 21.7745 49.3697 23.9513 49.3697 26.2254V37.2651C49.3697 46.9443 41.6039 54.7965 32.0074 54.8159C32.0267 54.8159 32.0267 54.8159 32.046 54.8159H46.5948C56.2106 54.8159 63.9956 46.9637 63.9956 37.2651C63.9956 28.0912 57.0392 20.5695 48.1557 19.7726Z",
                fill: "#B3D661"
            }), (0,
            o.jsx)("path", {
                d: "M31.9496 54.7965C31.9303 54.7965 31.9303 54.7965 31.9111 54.7965C31.9303 54.7965 31.9496 54.7965 31.9496 54.7965C31.9689 54.7965 31.9689 54.7965 31.9881 54.7965C31.9881 54.7965 31.9689 54.7965 31.9496 54.7965ZM31.9496 8.65515C24.5885 8.65515 18.3065 13.2615 15.7628 19.7726C16.2831 19.7337 16.8034 19.6949 17.3237 19.6949H31.8725C31.8918 19.6949 31.9303 19.6949 31.9496 19.6949C31.9689 19.6949 32.0074 19.6949 32.0267 19.6949H46.5755C47.0958 19.6949 47.6354 19.7143 48.1364 19.7726C45.612 13.2615 39.3107 8.65515 31.9496 8.65515Z",
                fill: "#51A5C9"
            }), (0,
            o.jsx)("path", {
                d: "M31.8918 19.6949H17.3237C16.8034 19.6949 16.2639 19.7143 15.7628 19.7726C14.9728 21.7746 14.5488 23.9514 14.5488 26.2254V37.2651C14.5488 46.9443 22.3146 54.7965 31.9111 54.816C31.9304 54.816 31.9304 54.816 31.9496 54.816C22.3724 54.7771 14.6259 46.9249 14.6259 37.2651C14.6259 27.5859 22.3724 19.7532 31.9496 19.7143C31.9304 19.6949 31.9111 19.6949 31.8918 19.6949Z",
                fill: "#4C4789"
            }), (0,
            o.jsx)("path", {
                d: "M46.5948 19.6949H32.046C32.0267 19.6949 31.9881 19.6949 31.9689 19.6949C41.5461 19.7338 49.2926 27.5859 49.2926 37.2457C49.2926 46.9249 41.5461 54.7576 31.9689 54.7965C31.9881 54.7965 31.9881 54.7965 32.0074 54.7965C41.6039 54.7771 49.3697 46.9249 49.3697 37.2457V26.206C49.3697 23.932 48.9457 21.7551 48.1557 19.7532C47.6354 19.7143 47.1151 19.6949 46.5948 19.6949Z",
                fill: "#398B4D"
            }), (0,
            o.jsx)("path", {
                d: "M31.9496 19.6949C22.3725 19.7338 14.6259 27.5859 14.6259 37.2457C14.6259 46.9249 22.3725 54.7576 31.9496 54.7965C41.5268 54.7576 49.2734 46.9055 49.2734 37.2457C49.2926 27.5859 41.5268 19.7338 31.9496 19.6949Z",
                fill: "#0B0223"
            }), (0,
            o.jsx)("path", {
                d: "M31.9882 54.7965C41.5984 54.7965 49.389 46.9387 49.389 37.2457C49.389 27.5527 41.5984 19.6949 31.9882 19.6949C22.378 19.6949 14.5874 27.5527 14.5874 37.2457C14.5874 46.9387 22.378 54.7965 31.9882 54.7965Z",
                fill: "#0B0223"
            }), (0,
            o.jsx)("path", {
                d: "M27.691 36.1962C27.691 37.7511 26.4384 39.0144 24.8968 39.0144C23.3552 39.0144 22.1027 37.7511 22.1027 36.1962C22.1027 34.6413 23.3552 33.3779 24.8968 33.3779C26.4384 33.3779 27.691 34.6413 27.691 36.1962Z",
                fill: "white"
            }), (0,
            o.jsx)("path", {
                d: "M41.6231 37.751H37.3837C36.6322 37.751 36.0156 37.1291 36.0156 36.3711V36.0407C36.0156 35.2827 36.6322 34.6607 37.3837 34.6607H41.6231C42.3747 34.6607 42.9913 35.2827 42.9913 36.0407V36.3711C42.9913 37.1291 42.3747 37.751 41.6231 37.751Z",
                fill: "white"
            }), (0,
            o.jsx)("path", {
                d: "M27.7295 36.235C27.7295 37.7899 26.477 39.0532 24.9354 39.0532C23.3938 39.0532 22.1412 37.7899 22.1412 36.235C22.1412 34.6801 23.3938 33.4167 24.9354 33.4167C26.477 33.4167 27.7295 34.6801 27.7295 36.235Z",
                fill: "white"
            }), (0,
            o.jsx)("path", {
                d: "M41.6425 37.7899H37.4031C36.6516 37.7899 36.0349 37.1679 36.0349 36.4099V36.0795C36.0349 35.3215 36.6516 34.6995 37.4031 34.6995H41.6425C42.394 34.6995 43.0106 35.3215 43.0106 36.0795V36.4099C43.0106 37.1679 42.4133 37.7899 41.6425 37.7899Z",
                fill: "white"
            })]
        })
          , N = {
            src: "/_next/static/media/loader.115722d8.png",
            height: 70,
            width: 70,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXGbp66SnqVqeYGNoKQ4QkKeq7GOn6SNm6CNnKOQnaONnqV6iI8AChWtub9wfYnZ5+0BPP+iAAAAEHRSTlMAzMOFPg/oMlwXiEpJGPk9vzNjNgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwdyFsWwBAQRMGLoadDHvtfbQ6fVYAjDKCUUuDcSiOdDuYZBe/TOv0y1G+UsftupS74ASe5ASMQ2Ob9AAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        }
          , B = i(54250)
          , W = i(1857)
          , _ = i(42771)
          , F = i(65422)
          , Y = i(7967);
        let X = e => {
            var t, i, n, l, d, h;
            let {toggle: g} = e
              , v = (0,
            a.v9)(e => e.play.orientation)
              , x = (0,
            r.useRef)(null);
            return (0,
            r.useEffect)( () => {
                (0,
                F.XV)().then(e => {
                    (null == x ? void 0 : x.current) && (x.current.muted = !e)
                }
                ).catch( () => {}
                )
            }
            , []),
            (0,
            r.useEffect)( () => () => {
                (0,
                u.L9)("VideoLoaderUnmount")
            }
            , []),
            (0,
            o.jsx)(Y.C0, {
                toggle: g,
                isPortrait: (0,
                c.tq)() && p.cj.portrait === v,
                children: (0,
                o.jsx)("video", {
                    ref: x,
                    src: (0,
                    c.tq)() ? null === (n = null === (i = null === (t = s.default.appInfo) || void 0 === t ? void 0 : t.media) || void 0 === i ? void 0 : i.mobile) || void 0 === n ? void 0 : n.launchVideo : null === (h = null === (d = null === (l = s.default.appInfo) || void 0 === l ? void 0 : l.media) || void 0 === d ? void 0 : d.desktop) || void 0 === h ? void 0 : h.launchVideo,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    disableRemotePlayback: !0,
                    playsInline: !0,
                    className: "preloader-video",
                    onEnded: () => {
                        (0,
                        u.L9)("VideoLoaderEnded")
                    }
                    ,
                    onLoadStart: () => {
                        (0,
                        u.L9)("VideoLoaderLoadStart")
                    }
                    ,
                    onError: () => {
                        (0,
                        u.L9)("VideoLoaderError")
                    }
                })
            })
        }
          , H = e => {
            var t, i, n, r, a;
            let {toggle: l} = e
              , d = null === (i = null === (t = s.default.appInfo.playFeFeatures) || void 0 === t ? void 0 : t.uiConfig) || void 0 === i ? void 0 : i.customPreloader
              , {t: u} = (0,
            K.$)();
            return (0,
            o.jsx)(S, {
                style: {
                    background: "none"
                },
                toggle: l,
                children: (null == d ? void 0 : d.enabled) ? (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)(Y.Wn, {
                        src: d.backgroundUrl || "https://cdn.now.gg/nowgg-static/preloader/banner.jpg",
                        alt: ""
                    }), (0,
                    o.jsxs)(Y.Wt, {
                        children: [(0,
                        o.jsx)(Y.ee, {
                            src: (0,
                            _.jW)(N),
                            alt: ""
                        }), (0,
                        o.jsx)(W.T5, {
                            white: !0,
                            className: "loadingText",
                            children: u("loading")
                        })]
                    })]
                }) : (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)(B.Z, {
                        toggle: l,
                        enteringDelay: .6,
                        exitingDelay: .6,
                        children: (0,
                        o.jsx)(X, {
                            toggle: l
                        })
                    }), (0,
                    o.jsx)(B.Z, {
                        toggle: l,
                        exitingDelay: .3,
                        children: (0,
                        o.jsx)(T, {
                            style: {
                                padding: "16px",
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                position: "absolute",
                                bottom: (0,
                                c.tq)() ? "24px" : "48px"
                            },
                            toggle: l,
                            children: (0,
                            o.jsxs)(Y.VY, {
                                children: [(0,
                                o.jsx)("img", {
                                    src: null === (r = null === (n = s.default.appInfo) || void 0 === n ? void 0 : n.media) || void 0 === r ? void 0 : r.icon,
                                    alt: null === (a = s.default.appInfo) || void 0 === a ? void 0 : a.appName,
                                    height: 64,
                                    width: 64
                                }), (0,
                                o.jsxs)(Y.RH, {
                                    children: [(0,
                                    o.jsx)("p", {
                                        children: u("launchingGame")
                                    }), (0,
                                    o.jsx)(Y.Ex, {})]
                                })]
                            })
                        })
                    })]
                })
            })
        }
        ;
        var z = e => {
            var t, i;
            let {toggle: n} = e
              , r = null === (i = null === (t = s.default.appInfo.playFeFeatures) || void 0 === t ? void 0 : t.uiConfig) || void 0 === i ? void 0 : i.customPreloader;
            return (0,
            o.jsx)(S, {
                style: {
                    display: "flex",
                    alignItems: "center",
                    bottom: 0,
                    height: "100vh",
                    marginTop: "0px",
                    top: "0px"
                },
                toggle: n,
                children: (null == r ? void 0 : r.enabled) ? (0,
                o.jsx)(Y.ee, {
                    src: (0,
                    _.jW)(N),
                    alt: ""
                }) : (0,
                o.jsx)(Z, {})
            })
        }
          , U = {
            src: "/_next/static/media/BrowserChrome.17f67783.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
          , G = {
            src: "/_next/static/media/BrowserSafari.87ac5020.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
          , V = {
            src: "/_next/static/media/BrowserEdge.925a6e2f.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
          , q = i(14587)
          , J = i(1234);
        let Q = g.ZP.h3.withConfig({
            componentId: "sc-24cfa4ac-0"
        })(["font-weight:600;font-size:24px;line-height:150%;color:", ";margin:0;text-align:center;"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , $ = g.ZP.div.withConfig({
            componentId: "sc-24cfa4ac-1"
        })(["align-items:center;width:100%;background:", ";border-bottom:", ";backdrop-filter:blur(24px);padding:", ";border-top-left-radius:", ";border-top-right-radius:", ";color:", ";text-align:center;"], e => {
            let {theme: t} = e;
            return t.colors.black10
        }
        , e => {
            let {theme: t} = e;
            return t.border.base
        }
        , e => {
            let {theme: t} = e;
            return t.spacing.base6
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius2
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius2
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , ee = g.ZP.div.withConfig({
            componentId: "sc-24cfa4ac-2"
        })(["align-items:center;text-align:center;padding:16px 24px 24px;display:flex;flex-direction:column;gap:", ";p{color:", ";}"], e => {
            let {theme: t} = e;
            return t.spacing.base6
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , et = g.ZP.div.withConfig({
            componentId: "sc-24cfa4ac-3"
        })(["display:flex;gap:", ";@media screen and (max-width:400px){gap:", ";}"], e => {
            let {theme: t} = e;
            return t.spacing.base6
        }
        , e => {
            let {theme: t} = e;
            return t.spacing.base
        }
        )
          , ei = g.ZP.div.withConfig({
            componentId: "sc-24cfa4ac-4"
        })(["display:flex;flex-direction:column;gap:", ";width:96px;align-items:center;text-align:center;"], e => {
            let {theme: t} = e;
            return t.spacing.base2
        }
        )
          , en = g.ZP.div.withConfig({
            componentId: "sc-24cfa4ac-5"
        })(["display:flex;gap:", ";background:", ";padding:", " ", ";border-radius:", ";align-items:center;text-align:center;border:", ";img{cursor:pointer;}"], e => {
            let {theme: t} = e;
            return t.spacing.base3
        }
        , e => {
            let {theme: t} = e;
            return t.colors.black10
        }
        , e => {
            let {theme: t} = e;
            return t.spacing.base2
        }
        , e => {
            let {theme: t} = e;
            return t.spacing.base3
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius
        }
        , e => {
            let {theme: t} = e;
            return t.border.base
        }
        )
          , eo = g.ZP.p.withConfig({
            componentId: "sc-24cfa4ac-6"
        })(["width:262px;font-size:12px;margin:0px;line-height:150%;font-weight:400;color:", ";text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;@media screen and (max-width:400px){width:196px;}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , er = g.ZP.div.withConfig({
            componentId: "sc-24cfa4ac-7"
        })(["border:", ";border-color:", ";height:25px;"], e => {
            let {theme: t} = e;
            return t.border.base
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , ea = g.ZP.p.withConfig({
            componentId: "sc-24cfa4ac-8"
        })(["display:none;background:", ";font-size:10px;margin:0px;line-height:150%;font-weight:500;position:absolute;bottom:60px;right:30px;border:", ";padding:", ";border-radius:", ";&#CopyText{color:", ";}"], e => {
            let {theme: t} = e;
            return t.colors.black
        }
        , e => {
            let {theme: t} = e;
            return t.border.base2
        }
        , e => {
            let {theme: t} = e;
            return t.spacing.base
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        );
        var el = () => {
            let {t: e} = (0,
            K.$)();
            return (0,
            r.useEffect)( () => {
                (0,
                u.L9)("UnsupportedBrowser")
            }
            , []),
            (0,
            o.jsxs)(J.Z, {
                style: {
                    padding: "0",
                    fontSize: "18px",
                    lineHeight: "150%",
                    width: "auto"
                },
                children: [(0,
                o.jsx)($, {
                    children: (0,
                    o.jsx)(Q, {
                        children: e("unsupportedBrowser")
                    })
                }), (0,
                o.jsxs)(ee, {
                    children: [(0,
                    o.jsx)(W.kk, {
                        med: !0,
                        children: e("switchBrowser")
                    }), (0,
                    o.jsxs)(et, {
                        children: [(0,
                        o.jsxs)(ei, {
                            children: [(0,
                            o.jsx)("img", {
                                className: "chromeLogo",
                                alt: e("googleChrome"),
                                src: (0,
                                _.jW)(U),
                                height: 24,
                                width: 24
                            }), (0,
                            o.jsx)(W.mH, {
                                med: !0,
                                children: e("googleChrome")
                            })]
                        }), (0,
                        o.jsxs)(ei, {
                            children: [(0,
                            o.jsx)("img", {
                                className: "safariLogo",
                                alt: e("appleSafari"),
                                src: (0,
                                _.jW)(G),
                                height: 24,
                                width: 24
                            }), (0,
                            o.jsx)(W.mH, {
                                med: !0,
                                children: e("appleSafari")
                            })]
                        }), (0,
                        o.jsxs)(ei, {
                            children: [(0,
                            o.jsx)("img", {
                                className: "edgeLogo",
                                alt: e("microsoftEdge"),
                                src: (0,
                                _.jW)(V),
                                height: 24,
                                width: 24
                            }), (0,
                            o.jsx)(W.mH, {
                                med: !0,
                                children: e("microsoftEdge")
                            })]
                        })]
                    }), (0,
                    o.jsxs)(en, {
                        children: [(0,
                        o.jsx)(eo, {
                            children: window.location.href
                        }), (0,
                        o.jsx)(er, {}), (0,
                        o.jsx)("img", {
                            alt: e("copy"),
                            src: (0,
                            _.jW)(q.Z),
                            height: 16,
                            width: 16,
                            onClick: () => {
                                var e, t, i, n;
                                return e = void 0,
                                t = void 0,
                                i = void 0,
                                n = function*() {
                                    try {
                                        yield navigator.clipboard.writeText(window.location.href).then( () => {
                                            let e = document.getElementById("CopyText");
                                            e && (e.style.display = "flex",
                                            setTimeout( () => {
                                                e.style.display = "none"
                                            }
                                            , 1e3))
                                        }
                                        )
                                    } catch (e) {}
                                }
                                ,
                                new (i || (i = Promise))(function(o, r) {
                                    function a(e) {
                                        try {
                                            d(n.next(e))
                                        } catch (e) {
                                            r(e)
                                        }
                                    }
                                    function l(e) {
                                        try {
                                            d(n.throw(e))
                                        } catch (e) {
                                            r(e)
                                        }
                                    }
                                    function d(e) {
                                        var t;
                                        e.done ? o(e.value) : ((t = e.value)instanceof i ? t : new i(function(e) {
                                            e(t)
                                        }
                                        )).then(a, l)
                                    }
                                    d((n = n.apply(e, t || [])).next())
                                }
                                )
                            }
                        }), (0,
                        o.jsx)(ea, {
                            id: "CopyText",
                            children: e("linkCopied")
                        })]
                    })]
                })]
            })
        }
          , ed = i(32475)
          , es = i.n(ed)
          , ec = i(51734)
          , eu = i(44005)
          , ep = i(66972)
          , eh = i(77289);
        let eg = (0,
        g.F4)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"])
          , ev = g.ZP.div.withConfig({
            componentId: "sc-89af4ad0-0"
        })(["pointer-events:none;display:flex;align-items:center;position:fixed;width:fit-content;max-width:90%;height:fit-content;color:", ";transition:all 0.5s ease-in-out;left:50%;transform:translateX(-50%);padding:5px 13px;box-sizing:border-box;background:linear-gradient(0deg,rgba(164,0,0,0.80) 0%,rgba(89,0,0,0.40) 100%);backdrop-filter:blur(12px);border-radius:", ";font-style:normal;font-weight:normal;font-size:14px;line-height:150%;align-items:center;z-index:999;img{pointer-events:all;}&.slideUp{top:-50px;opacity:0;}&.slideDown{top:30px;opacity:1;}span{margin-left:8px;margin-right:8px;font-weight:600;}.info{margin-left:8px;cursor:pointer;}.longDescription{display:none;}.close{display:none;}.shortDescription{display:inline;margin:0;}span{top:3px;}&.expand{.timer{min-width:4em;margin-right:0px;}.shortDescription{display:none;}.info{order:-2;margin:0px;}.longDescription{display:inline;width:fit-content;margin:0 8px;}.close{display:inline;margin-left:10px;cursor:pointer;}}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius2
        }
        )
          , ex = g.ZP.div.withConfig({
            componentId: "sc-89af4ad0-1"
        })(["position:fixed;display:flex;justify-content:center;align-items:center;width:100%;height:100%;border:1px solid;background:rgba(0,0,0,0.7);z-index:99999999999;img{animation:", " 1s linear infinite;}&.hide{display:none;}"], eg)
          , ef = g.ZP.div.withConfig({
            componentId: "sc-89af4ad0-2"
        })(["z-index:9;.mainContainer{position:absolute;box-sizing:border-box;padding:24px;max-width:90%;width:420px;left:calc(50%);top:calc(50%);transform:translate(-50%,-50%);max-width:fit-content;background:linear-gradient(180deg,rgba(11,2,35,0.48) 0%,rgba(11,2,35,0.32) 100%),rgba(255,255,255,0.3);border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(24px);border-radius:12px;display:flex;img{width:160px;height:215.06px;filter:drop-shadow(0px 4px 16px rgba(0,0,0,0.08));border-radius:12px;}.content{width:100%;margin-left:24px;color:white;display:flex;flex-direction:column;@media screen and (max-width:768px){margin:20px 0;align-items:center;text-align:center;}h2{margin:0px;font-weight:600;font-size:24px;line-height:150%;}button{margin-top:20px;}}@media screen and (max-width:768px){flex-direction:column;align-items:center;}}"]);
        var em = () => {
            let e = (0,
            r.useRef)(null)
              , t = (0,
            r.useRef)(null)
              , i = (0,
            r.useRef)(null)
              , n = (0,
            r.useRef)(null)
              , [l,d] = (0,
            r.useState)(!0)
              , [s,c] = (0,
            r.useState)("")
              , u = (0,
            a.I0)()
              , {t: p} = (0,
            K.$)()
              , h = (0,
            a.v9)(e => e.play.graceIntervalSecs)
              , g = (0,
            a.v9)(e => e.play.graceIntervalMessage)
              , v = (0,
            a.v9)(e => e.play.sessionDisconnectScreenType)
              , x = v === eh.QRM.BCPU_SPOT_INTERRUPTION || v === eh.QRM.BGPU_SPOT_INTERRUPTION;
            return (0,
            r.useEffect)( () => {
                var i, o;
                null === (i = null == e ? void 0 : e.current) || void 0 === i || i.classList.add("slideDown"),
                null === (o = null == e ? void 0 : e.current) || void 0 === o || o.classList.remove("slideUp");
                let r = h;
                return n.current = setInterval( () => {
                    var i, o, a;
                    let l = Math.floor(r / 60)
                      , d = r % 60
                      , s = es()(String(l), 2, "0")
                      , u = es()(String(d), 2, "0");
                    c("".concat(s, ":").concat(u)),
                    (r -= 1) <= 0 && (clearInterval(n.current),
                    null === (i = null == e ? void 0 : e.current) || void 0 === i || i.classList.add("slideUp"),
                    null === (o = null == e ? void 0 : e.current) || void 0 === o || o.classList.remove("slideDown"),
                    null === (a = null == t ? void 0 : t.current) || void 0 === a || a.classList.remove("hide"))
                }
                , 1e3),
                () => {
                    var i, o, r;
                    clearInterval(n.current),
                    u({
                        type: P.Z.SESSION_DISCONNECT_TOAST,
                        payload: {
                            disconnecTimer: 0
                        }
                    }),
                    null === (i = null == e ? void 0 : e.current) || void 0 === i || i.classList.add("slideUp"),
                    null === (o = null == e ? void 0 : e.current) || void 0 === o || o.classList.remove("slideDown"),
                    null === (r = null == t ? void 0 : t.current) || void 0 === r || r.classList.remove("hide")
                }
            }
            , []),
            (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(ex, {
                    ref: t,
                    className: "hide",
                    children: (0,
                    o.jsx)("img", {
                        alt: "".concat(p("roundLoader")),
                        src: (0,
                        _.jW)(ep.Z)
                    })
                }), (0,
                o.jsxs)(ev, {
                    ref: e,
                    className: "slideUp flex",
                    children: [(0,
                    o.jsx)("img", {
                        alt: "".concat(p("infoIcon")),
                        src: (0,
                        _.jW)(ec.Z),
                        onClick: () => {
                            var t;
                            null === (t = null == e ? void 0 : e.current) || void 0 === t || t.classList.add("expand"),
                            d(!1)
                        }
                    }), (0,
                    o.jsx)("span", {
                        ref: i,
                        className: "timer",
                        style: {
                            marginLeft: v === eh.QRM.MAINTENANCE ? 0 : 5
                        },
                        children: v === eh.QRM.MAINTENANCE ? "" : s
                    }), (0,
                    o.jsx)("p", {
                        className: "shortDescription",
                        children: g || p(x ? "spotInstanceShortMsg" : "sessionEndShortMsg")
                    }), (0,
                    o.jsx)("p", {
                        className: "longDescription",
                        children: g || p(x ? "spotInstanceLongMsg" : "sessionEndLongMsg")
                    }), !l && (0,
                    o.jsx)("img", {
                        alt: "".concat(p("closeIcon")),
                        src: (0,
                        _.jW)(eu.Z),
                        onClick: () => {
                            var t;
                            null === (t = null == e ? void 0 : e.current) || void 0 === t || t.classList.remove("expand"),
                            d(!0)
                        }
                    })]
                })]
            })
        }
          , ew = i(83530);
        (0,
        g.iv)(["width:480px;overflow:auto;"]);
        let ey = (0,
        g.iv)(["width:320px;overflow:auto;max-width:100%;"])
          , eb = (0,
        g.iv)(["z-index:9;"])
          , eA = g.ZP.div.withConfig({
            componentId: "sc-725b2ecd-0"
        })(["display:flex;padding:20px;.tile{position:relative;flex:0 0 160px;border-radius:12px;margin:auto 22px auto auto;overflow:hidden;width:160px;height:215px;.mobilePortrait &{margin:0px;flex:none;}}.mobilePortrait &{flex-direction:column;align-items:center;}"])
          , ej = g.ZP.button.withConfig({
            componentId: "sc-725b2ecd-1"
        })(["position:absolute;right:10px;top:10px;text-transform:uppercase;background-color:transparent;border:none;font-size:15px;color:", ";cursor:pointer;"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , eC = g.ZP.div.withConfig({
            componentId: "sc-725b2ecd-2"
        })(["display:flex;flex-direction:column;align-self:center;color:", ";width:100%;h4{margin-bottom:10px;font-size:24px;font-weight:500;.mobilePortrait &{text-align:center;margin:24px 0px 8px 0px;}}.info-description{font-size:16px;margin-bottom:22px;color:", ";.mobilePortrait &{text-align:center;margin-bottom:24px;}}button{margin-top:auto;.mobilePortrait &{max-width:100%;}}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white80
        }
        )
          , eE = g.ZP.div.withConfig({
            componentId: "sc-725b2ecd-3"
        })(["display:flex;justify-content:space-between;align-items:center;gap:56px;button{width:100%;}i{cursor:pointer;}"]);
        var eS = () => {
            var e, t;
            let {t: i} = (0,
            K.$)()
              , n = (0,
            r.useContext)(k.Z)
              , l = null === (t = null === (e = null === s.default || void 0 === s.default ? void 0 : s.default.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.enablePokelaboUi
              , d = (0,
            a.v9)(e => e.play.orientation)
              , u = (0,
            c.tq)()
              , h = (0,
            a.I0)()
              , {partnerSessionEndInfo: g} = (null == n ? void 0 : n.playFeFeatures) || {}
              , {warningMessage: v} = g || {}
              , x = () => {
                h({
                    type: P.Z.SESSION_DISCONNECT_TOAST,
                    payload: {
                        showDisconnectWarning: !1
                    }
                })
            }
            ;
            return (0,
            o.jsx)(J.Z, {
                modalStyles: ey,
                className: u && window.innerHeight > window.innerWidth ? "mobilePortrait" : "",
                style: u && d === p.cj.portrait ? {
                    margin: "auto 8.75vmin"
                } : {},
                children: (0,
                o.jsxs)(eA, {
                    children: [(0,
                    o.jsx)(ej, {
                        onClick: x,
                        children: "X"
                    }), (0,
                    o.jsxs)(eC, {
                        children: [(0,
                        o.jsx)(W.T4, {
                            className: l ? "textCenter" : "",
                            children: i("sessionEndTimeLimitHead")
                        }), (0,
                        o.jsx)(W.kk, {
                            className: l ? "textCenter" : "",
                            children: v
                        }), (0,
                        o.jsx)(eE, {
                            style: u ? {
                                gap: "8px"
                            } : {},
                            children: (0,
                            o.jsx)(ew.z, {
                                onClick: x,
                                variant: "primary",
                                text: i("okay")
                            })
                        })]
                    })]
                })
            })
        }
          , eT = () => {
            var e, t, i;
            return (null === (i = null === (t = null === (e = null === s.default || void 0 === s.default ? void 0 : s.default.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.partnerSessionEndInfo) || void 0 === i ? void 0 : i.enable) ? (0,
            o.jsx)(eS, {}) : (0,
            o.jsx)(em, {})
        }
          , eI = i(44166)
          , ek = i(59982)
          , eR = i(25803)
          , eL = i(36887)
          , eP = i(64489);
        let eD = g.ZP.div.withConfig({
            componentId: "sc-21886ca7-0"
        })(["position:absolute;z-index:100;padding:20px;flex-direction:column;color:white;align-items:center;display:flex;justify-content:center;width:100%;height:100%;background:rgb(0,0,0,0.9);.icon-cross-thin{position:absolute;top:20px;right:20px;font-size:2rem;}"]);
        var eM = () => (0,
        o.jsxs)(eD, {
            children: [(0,
            o.jsx)(W.T3, {
                children: "Debugger"
            }), (0,
            o.jsx)(eL.Z, {
                name: "cross-thin",
                size: 16,
                onClick: () => (0,
                eP.lD)(!1)
            }), (0,
            o.jsx)(ew.z, {
                onClick: () => (0,
                eR.B)(),
                text: "Report Issue",
                id: "ng-error-report-btn"
            })]
        })
          , eO = i(51869)
          , eK = i(48506)
          , eZ = i(8866)
          , eN = i(68784)
          , eB = {
            src: "/_next/static/media/alert.bfbcd90b.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
          , eW = {
            src: "/_next/static/media/upload-1x.bc15eac8.gif",
            height: 50,
            width: 50,
            blurWidth: 0,
            blurHeight: 0
        }
          , e_ = i(29540);
        let eF = g.ZP.div.withConfig({
            componentId: "sc-ea71f7f1-0"
        })(["position:absolute;color:white;align-items:center;justify-content:center;display:flex;background:rgba(0,0,0,0.7);flex-direction:column;gap:16px;button{min-width:150px;cursor:pointer;}"])
          , eY = g.ZP.input.attrs({
            type: "file"
        }).withConfig({
            componentId: "sc-ea71f7f1-1"
        })(["position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;"])
          , eX = g.ZP.div.withConfig({
            componentId: "sc-ea71f7f1-2"
        })(["padding:16px;position:fixed;top:70px;background:linear-gradient( 180deg,rgba(11,2,35,0.48) 0%,rgba(11,2,35,0.32) 100% ),rgba(255,255,255,0.3);border:", ";backdrop-filter:blur(24px);border-radius:", ";z-index:20;left:50%;transform:translate(-50%,-100%);display:flex;justify-content:center;align-items:center;transition:all 0.5s ease-in-out;opacity:0;&.slideDown{opacity:1;transform:translate(-50%,0);}> .spin{width:21px;height:21px;animation-name:", ";animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear;}"], e => {
            let {theme: t} = e;
            return t.border.base3
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius2
        }
        , e_.SA)
          , eH = g.ZP.div.withConfig({
            componentId: "sc-ea71f7f1-3"
        })(["width:21px;height:21px;border:2px solid ", ";border-bottom-color:rgba(255,255,255,0.4);animation-name:", ";animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:linear;border-radius:50%;"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e_.SA)
          , ez = g.ZP.div.withConfig({
            componentId: "sc-ea71f7f1-4"
        })(["width:21px;height:21px;background-color:", ";border-radius:50%;position:relative;&:after{content:'';transform:rotate(-48deg);width:10px;height:6px;border-left:2px solid white;border-bottom:2px solid white;z-index:1;position:absolute;left:5.5px;top:6.5px;}"], e => {
            let {theme: t} = e;
            return t.colors.blue
        }
        );
        var eU = () => {
            let {t: e} = (0,
            K.$)()
              , {showLoader: t, loaderType: i} = (0,
            a.v9)(e => e.play.fileUploadState)
              , n = (0,
            a.v9)(e => e.play.showFileUploader)
              , l = (0,
            a.v9)(e => e.play.fileUploaderAccept)
              , d = (0,
            a.v9)(e => e.play.videoRef)
              , s = (0,
            r.useRef)(null)
              , [c,u] = (0,
            r.useState)({
                top: "",
                right: "",
                bottom: "",
                left: "",
                width: "",
                height: ""
            })
              , p = (0,
            a.I0)();
            (0,
            r.useEffect)( () => {
                (null == s ? void 0 : s.current) && (s.current.focus(),
                s.current.click())
            }
            , [s.current]);
            let h = () => {
                var e;
                let t = null === (e = null == d ? void 0 : d.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                u({
                    top: "".concat((null == t ? void 0 : t.top) || 0, "px"),
                    right: "".concat((null == t ? void 0 : t.right) || 0, "px"),
                    bottom: "".concat((null == t ? void 0 : t.bottom) || 0, "px"),
                    left: "".concat((null == t ? void 0 : t.left) || 0, "px"),
                    width: "".concat((null == t ? void 0 : t.width) || window.innerWidth, "px"),
                    height: "".concat((null == t ? void 0 : t.height) || window.innerHeight, "px")
                })
            }
            ;
            (0,
            r.useEffect)( () => {
                h()
            }
            , []),
            (0,
            r.useEffect)( () => {
                h()
            }
            , [d, n]);
            let g = (0,
            r.useMemo)(function() {
                switch (i) {
                case "uploading":
                    return "uploadingFile";
                case "success":
                    return "uploadedSuccessfully";
                case "warning":
                    return "uploadFailed";
                default:
                    return ""
                }
            }, [i])
              , v = () => {
                (0,
                eN.fr)("fileupload::failed"),
                p({
                    type: P.Z.SHOW_FILE_UPLOADER,
                    payload: {
                        showFileUploader: !1,
                        fileUploaderAccept: ""
                    }
                })
            }
              , x = (0,
            r.useCallback)( () => {
                let e = s.current;
                e && e.addEventListener("focus", function t() {
                    e.removeEventListener("focus", t),
                    setTimeout( () => {
                        e && e.value || v()
                    }
                    , 500)
                })
            }
            , [s.current]);
            return (0,
            o.jsxs)(o.Fragment, {
                children: [n && (0,
                o.jsxs)(eF, {
                    style: c,
                    children: [(0,
                    o.jsx)("img", {
                        style: {
                            height: 32
                        },
                        src: (0,
                        _.jW)(eW),
                        alt: ""
                    }), (0,
                    o.jsx)(W.js, {
                        children: e("uploadFile")
                    }), (0,
                    o.jsxs)(ew.z, {
                        style: {
                            position: "relative"
                        },
                        children: [e("selectFile"), (0,
                        o.jsx)(eY, {
                            ref: s,
                            id: "uploadFile",
                            accept: l,
                            onChange: eN.cT,
                            onClick: x
                        })]
                    }), (0,
                    o.jsx)(ew.z, {
                        variant: "tertiary",
                        onClick: v,
                        children: e("cancel")
                    })]
                }), (0,
                o.jsxs)(eX, {
                    className: t ? "slideDown" : "",
                    children: ["uploading" === i && (0,
                    o.jsx)(eH, {}), "success" === i && (0,
                    o.jsx)(ez, {}), "warning" === i && (0,
                    o.jsx)("img", {
                        width: "21",
                        height: "21",
                        src: (0,
                        _.jW)(eB),
                        alt: "warning"
                    }), (0,
                    o.jsx)(W.T5, {
                        style: {
                            margin: "0px",
                            marginLeft: "13.5px"
                        },
                        med: !0,
                        white: !0,
                        children: e(g)
                    })]
                })]
            })
        }
          , eG = () => {
            let {t: e} = (0,
            K.$)()
              , {showLoader: t, loaderType: i} = (0,
            a.v9)(e => e.play.fileDownloadState)
              , [n,l] = (0,
            r.useState)("");
            return (0,
            r.useEffect)( () => {
                l(function() {
                    switch (i) {
                    case "downloading":
                        return "downloadingFile";
                    case "success":
                        return "downloadedSuccessfully";
                    case "warning":
                        return "downloadFailed";
                    default:
                        return ""
                    }
                }())
            }
            , [i]),
            (0,
            o.jsxs)(eX, {
                className: t ? "slideDown" : "",
                children: ["downloading" === i && (0,
                o.jsx)(eH, {}), "success" === i && (0,
                o.jsx)(ez, {}), "warning" === i && (0,
                o.jsx)("img", {
                    width: "21",
                    height: "21",
                    src: (0,
                    _.jW)(eB),
                    alt: "warning"
                }), (0,
                o.jsx)(W.T5, {
                    style: {
                        margin: "0px",
                        marginLeft: "13.5px"
                    },
                    med: !0,
                    white: !0,
                    children: e(n)
                })]
            })
        }
        ;
        let eV = () => (0,
        o.jsx)("div", {});
        var eq = i(78603);
        i(85301);
        var eJ = i(77995);
        let eQ = (0,
        g.iv)(["max-height:95vh;max-width:480px;width:100%;"])
          , e$ = g.ZP.div.withConfig({
            componentId: "sc-58b2e24b-0"
        })(["display:flex;flex-direction:column;justify-content:center;align-items:center;gap:8px;padding:40px;color:", ";.proxy-url-container{background:", ";border-radius:8px;padding:12px;width:100%;margin-top:32px;position:relative;font-size:16px;@media only screen  and (max-width:1024px){margin-bottom:16px;}.proxy-url{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:", ";line-height:150%;user-select:all;}}.copy-tooltip{color:", ";background:", ";position:absolute;font-size:10px;padding:4px 6px;gap:4px;left:50%;transform:translateX(-50%);border:1px solid ", ";border-radius:4px;}button{width:100%;margin-top:16px;}h3{font-size:24px;color:", ";}h3,h5{margin:0;}@media only screen and (max-width:767px){.proxy-url-container,button{padding:7.5px 21px 7.5px 9px;}h3{margin-top:12px;font-size:16px;}.proxy-url,button{font-size:14px;}}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white10
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.colors.black80
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white20
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        );
        var e0 = () => {
            var e;
            let {t} = (0,
            K.$)()
              , [i,n] = (0,
            r.useState)(!1)
              , a = null === (e = s.default.appInfo) || void 0 === e ? void 0 : e.alternateUrlForProxies;
            return (0,
            r.useEffect)( () => {
                (0,
                u.L9)("ProxyScreenShown")
            }
            , []),
            (0,
            o.jsx)(J.Z, {
                modalStyles: eQ,
                children: (0,
                o.jsxs)(e$, {
                    children: [(0,
                    o.jsx)("img", {
                        src: (0,
                        _.jW)(eJ.Z),
                        alt: "",
                        width: (0,
                        c.tq)() ? 48 : 80,
                        height: (0,
                        c.tq)() ? 48 : 80
                    }), (0,
                    o.jsx)(W.T3, {
                        med: !0,
                        center: !0,
                        children: t("proxyDetected")
                    }), (0,
                    o.jsx)(W.T5, {
                        center: !0,
                        med: !0,
                        children: t("toPlayGame")
                    }), (0,
                    o.jsx)(W.T5, {
                        center: !0,
                        children: "1. ".concat(t("disableVpn"))
                    }), (0,
                    o.jsx)(W.T5, {
                        center: !0,
                        children: "2. ".concat(t(a ? "useURL" : "reloadPage"))
                    }), a && (0,
                    o.jsxs)(o.Fragment, {
                        children: [(0,
                        o.jsxs)("div", {
                            className: "proxy-url-container",
                            children: [(0,
                            o.jsx)("div", {
                                className: "proxy-url",
                                children: "".concat(a, "?utm_source=proxy&utm_medium=browser&utm_campaign=nowgg_proxy")
                            }), i && (0,
                            o.jsx)("div", {
                                className: "copy-tooltip",
                                children: t("linkCopied")
                            })]
                        }), (0,
                        o.jsx)(ew.z, {
                            variant: "secondary",
                            onClick: () => {
                                var e, t, i, o;
                                return e = void 0,
                                t = void 0,
                                i = void 0,
                                o = function*() {
                                    try {
                                        yield navigator.clipboard.writeText("".concat(a, "?utm_source=proxy&utm_medium=browser&utm_campaign=nowgg_proxy")),
                                        n(!0),
                                        setTimeout( () => {
                                            n(!1)
                                        }
                                        , 2e3)
                                    } catch (e) {}
                                }
                                ,
                                new (i || (i = Promise))(function(n, r) {
                                    function a(e) {
                                        try {
                                            d(o.next(e))
                                        } catch (e) {
                                            r(e)
                                        }
                                    }
                                    function l(e) {
                                        try {
                                            d(o.throw(e))
                                        } catch (e) {
                                            r(e)
                                        }
                                    }
                                    function d(e) {
                                        var t;
                                        e.done ? n(e.value) : ((t = e.value)instanceof i ? t : new i(function(e) {
                                            e(t)
                                        }
                                        )).then(a, l)
                                    }
                                    d((o = o.apply(e, t || [])).next())
                                }
                                )
                            }
                            ,
                            text: t("copyUrl")
                        })]
                    })]
                })
            })
        }
          , e1 = i(11883)
          , e2 = {
            src: "/_next/static/media/tryNow.c14372c1.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
          , e5 = {
            src: "/_next/static/media/tryNowAscent.969f3040.svg",
            height: 25,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
          , e4 = i(1653)
          , e9 = i(44402)
          , e3 = i(21651);
        let e6 = (0,
        g.iv)(["max-height:95vh;width:494px;max-width:calc(100% - 10px);background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.1);backdrop-filter:blur(12px);border-radius:24px;"])
          , e7 = (0,
        g.iv)(["max-height:95vh;width:630px;max-width:calc(100% - 10px);background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.1);backdrop-filter:blur(12px);border-radius:24px;"])
          , e8 = (0,
        g.iv)(["max-height:95vh;width:583px;max-width:calc(100% - 10px);background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.1);backdrop-filter:blur(12px);border-radius:24px;"])
          , te = g.ZP.div.withConfig({
            componentId: "sc-dc6f0044-0"
        })(["overflow:auto;max-height:inherit;padding:", ";"], e => {
            let {isDesktop: t} = e;
            return t ? "32px 60px" : "24px"
        }
        )
          , tt = g.ZP.div.withConfig({
            componentId: "sc-dc6f0044-1"
        })(["display:flex;width:100%;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;.appIcon{width:", ";aspect-ratio:1;margin-bottom:16px;border-radius:8px;", "}"], e => {
            let {screen: t, isDesktop: i} = e;
            return "loading" === t ? i ? "140px" : "100px" : "180px"
        }
        , e => {
            let {isDesktop: t} = e;
            return !t && (0,
            g.iv)(["@media screen and (orientation:landscape){width:80px;margin-bottom:8px;}"])
        }
        )
          , ti = g.ZP.div.withConfig({
            componentId: "sc-dc6f0044-2"
        })(["position:absolute;top:16px;left:16px;z-index:999;"])
          , tn = g.ZP.div.withConfig({
            componentId: "sc-dc6f0044-3"
        })(["display:flex;margin-top:16px;flex-direction:column;align-items:center;width:100%;button{border-radius:12px;padding:16px;flex-grow:1;justify-content:center;align-items:center;box-shadow:0px 4px 4px rgba(0,0,0,0.2);display:flex;border:none;cursor:pointer;", " img{margin-right:8px;}}", ""], e => {
            let {isDesktop: t} = e;
            return !t && (0,
            g.iv)(["@media screen and (orientation:landscape){padding:8px;}"])
        }
        , e => {
            let {isDesktop: t} = e;
            return !t && (0,
            g.iv)(["@media screen and (orientation:landscape){margin-top:8px;}"])
        }
        )
          , to = g.ZP.button.withConfig({
            componentId: "sc-dc6f0044-4"
        })(["background-color:#FF42A5;margin-bottom:16px;color:#fff;width:100%;flex-direction:column;.tryNowContainer{display:flex;justify-content:center;align-items:center;}.noInstallMsg{font-weight:400;font-size:10px;line-height:15px;letter-spacing:0.05em;color:#FFFFFF;}&:hover{background-color:rgba(255,66,165,0.9);}", ""], e => {
            let {isDesktop: t} = e;
            return !t && (0,
            g.iv)(["@media screen and (orientation:landscape){margin-bottom:8px;}"])
        }
        )
          , tr = g.ZP.button.withConfig({
            componentId: "sc-dc6f0044-5"
        })(["color:#fff;font-weight:600;font-size:14px;line-height:150%;background-color:rgba(255,255,255,0.2) !important;box-shadow:0px 4px 4px rgba(0,0,0,0.2) !important;border-radius:8px !important;padding:10px !important;width:unset;width:100% !important;&:hover{background-color:rgba(255,255,255,0.1) !important;}", ""], e => {
            let {screen: t} = e;
            return "ending" === t && (0,
            g.iv)(["background-color:#FF42A5;padding:16px !important;font-weight:400;font-size:16px;line-height:150%;border:none !important;border-radius:12px !important;&:hover{background-color:rgba(255,66,165,0.9);}"])
        }
        )
          , ta = g.ZP.p.withConfig({
            componentId: "sc-dc6f0044-6"
        })(["font-weight:400;font-size:10px;line-height:12px;color:#FFFFFF;position:relative;margin-bottom:", ";&:after,&:before{position:absolute;width:58.5px;height:1px;background-color:rgba(255,255,255,0.2);content:'';top:50%;transform:translateY(-50%);}&:after{right:-64.5px;}&:before{left:-64.5px;}"], e => {
            let {isDesktop: t} = e;
            return t ? "16px" : "8px"
        }
        )
          , tl = g.ZP.ul.withConfig({
            componentId: "sc-dc6f0044-7"
        })(["list-style-type:disc;font-weight:400;font-size:10px;line-height:12px;margin:16px 0px 0px 0px;padding-left:16px;color:#EEEDF0;li{&:not(:last-child){margin-bottom:12px;}", "}", ""], e => {
            let {isDesktop: t} = e;
            return !t && (0,
            g.iv)(["@media screen and (orientation:landscape){margin-bottom:8px;}"])
        }
        , e => {
            let {isDesktop: t} = e;
            return !t && (0,
            g.iv)(["@media screen and (orientation:landscape){margin:8px 0px 0px 0px;}"])
        }
        )
          , td = g.ZP.div.withConfig({
            componentId: "sc-dc6f0044-8"
        })(["display:flex;flex-direction:column;width:100%;background-color:transparent;align-items:center;"])
          , ts = g.ZP.div.withConfig({
            componentId: "sc-dc6f0044-9"
        })(["display:flex;flex-grow:1;width:100%;"])
          , tc = g.ZP.div.withConfig({
            componentId: "sc-dc6f0044-10"
        })(["display:flex;flex-direction:column;align-items:center;padding-right:48px;border-right:1px solid rgba(255,255,255,0.1);flex:1;.appIcon{width:180px;aspect-ratio:1;border-radius:", ";}"], e => {
            let {isAppPage: t} = e;
            return t ? "12px" : "8px"
        }
        )
          , tu = g.ZP.div.withConfig({
            componentId: "sc-dc6f0044-11"
        })(["display:flex;flex-direction:column;padding-left:48px;align-items:center;flex:", ";img{width:200px;aspect-ratio:1;border-radius:24px;}"], e => {
            let {screen: t} = e;
            return "ending" === t ? "1" : "unset"
        }
        )
          , tp = g.ZP.div.withConfig({
            componentId: "sc-dc6f0044-12"
        })(["padding:12px;border-radius:12px;background-color:#fff;"])
          , th = g.ZP.p.withConfig({
            componentId: "sc-dc6f0044-13"
        })(["position:absolute;top:-22px;right:-22px;width:44px;height:44px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(12px);border-radius:40px;cursor:pointer;&:after,&:before{width:1px;background-color:#fff;position:absolute;top:50%;left:50%;content:'';height:21.63px;}&:after{transform:translate(-50%,-50%) rotate(45deg);}&:before{transform:translate(-50%,-50%) rotate(-45deg);}"])
          , tg = g.ZP.div.withConfig({
            componentId: "sc-dc6f0044-14"
        })(["margin:32px 0 -8px;padding:24px 60px 0px;border-top:1px solid rgba(255,255,255,0.1);border-radius:0px 0px 12px 12px;display:flex;align-items:center;justify-content:space-between;width:calc(100% + 120px);"])
          , tv = g.ZP.p.withConfig({
            componentId: "sc-dc6f0044-15"
        })(["font-weight:600;font-size:16px;line-height:150%;margin:0;"])
          , tx = g.ZP.div.withConfig({
            componentId: "sc-dc6f0044-16"
        })(["text-align:center;margin-bottom:32px;"])
          , tf = (0,
        g.ZP)(W.Bb).withConfig({
            componentId: "sc-dc6f0044-17"
        })(["color:", ";img{width:24px;margin-right:8px;vertical-align:middle;}"], e => e.theme.colors.white)
          , tm = (0,
        g.ZP)(W.lU).withConfig({
            componentId: "sc-dc6f0044-18"
        })(["color:", ";margin-top:4px;"], e => e.theme.colors.white)
          , tw = g.ZP.div.withConfig({
            componentId: "sc-dc6f0044-19"
        })(["text-align:center;margin-top:16px;"])
          , ty = (0,
        g.ZP)(W.js).withConfig({
            componentId: "sc-dc6f0044-20"
        })(["color:", ";"], e => e.theme.colors.white)
          , tb = (0,
        g.ZP)(W.lU).withConfig({
            componentId: "sc-dc6f0044-21"
        })(["color:", ";"], e => e.theme.colors.white60)
          , tA = (0,
        g.ZP)(W.IS.withComponent("p")).withConfig({
            componentId: "sc-dc6f0044-22"
        })(["max-width:180px;color:", ";margin-top:16px;text-align:center;"], e => e.theme.colors.white60)
          , tj = (0,
        g.ZP)(W.gd).withConfig({
            componentId: "sc-dc6f0044-23"
        })(["color:", ";margin:32px auto 0;text-align:center;max-width:360px;"], e => e.theme.colors.white50);
        var tC = e => {
            var t, i, n, l, d, p, h, g, v;
            let {handleTryNowClick: x, screen: f, isAppPage: m} = e
              , {t: w} = (0,
            K.$)()
              , y = !(0,
            c.tq)() && !(0,
            c.Em)() && !(0,
            c.zc)()
              , [b,A] = (0,
            r.useState)(!1)
              , j = (0,
            c.Ij)()
              , C = null === (t = s.default.appInfo.playFeFeatures.tryAndDownload) || void 0 === t ? void 0 : t.clientLink
              , E = ((null === (n = null === (i = s.default.appInfo.playFeFeatures) || void 0 === i ? void 0 : i.tryAndDownload) || void 0 === n ? void 0 : n.cumulativeTimeLimitSecs) || 0) / 3600
              , S = 0;
            S = E < 1 ? Math.round(60 * E) : Math.round(E);
            let T = (0,
            a.I0)();
            return (0,
            r.useEffect)( () => {
                "loading" === f ? (0,
                u.L9)(eh.S5z, {
                    element: "LaunchScreen",
                    action: "Displayed",
                    group: "TryAndDownload"
                }) : "ending" === f ? (y && (0,
                u.L9)(eh.S5z, {
                    element: "TrialEndQRScreen",
                    action: "Displayed",
                    group: "TryAndDownload"
                }),
                (0,
                u.L9)(eh.S5z, {
                    element: "TrialEndScreen",
                    action: "Displayed",
                    group: "TryAndDownload"
                })) : "inGame" === f && (0,
                u.L9)(eh.S5z, {
                    element: "MidQRScreen",
                    action: "Displayed",
                    group: "TryAndDownload"
                })
            }
            , []),
            (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(ti, {
                    className: "nowggLogo",
                    children: (0,
                    o.jsx)(e1.Z, {
                        themeType: "light",
                        hasTagline: !1,
                        style: {
                            margin: "0"
                        }
                    })
                }), (0,
                o.jsxs)(J.Z, {
                    modalStyles: "loading" !== f && ("ending" !== f || y) || b ? b || "inGame" === f ? e8 : e7 : e6,
                    contentStyle: {
                        backgroundImage: "unset",
                        color: "unset",
                        margin: "0",
                        backgroundColor: "unset",
                        overflow: "visible",
                        maxHeight: "inherit",
                        borderRadius: "inherit"
                    },
                    children: ["inGame" === f && (0,
                    o.jsx)(th, {
                        onClick: () => {
                            T({
                                type: P.Z.SHOW_TRY_NOW,
                                payload: {
                                    tryNowModal: !1
                                }
                            }),
                            (0,
                            u.L9)(eh.S5z, {
                                element: "MidQRScreen",
                                action: "Closed",
                                group: "TryAndDownload"
                            })
                        }
                    }), (0,
                    o.jsxs)(te, {
                        isDesktop: y,
                        children: ["ending" === f && (0,
                        o.jsxs)(tx, {
                            children: [(0,
                            o.jsxs)(tf, {
                                children: [(0,
                                o.jsx)("img", {
                                    src: (0,
                                    _.jW)(e9.Z),
                                    alt: w("warning")
                                }), (0,
                                o.jsx)("span", {
                                    children: w("trialLimitReached")
                                })]
                            }), (0,
                            o.jsx)(tm, {
                                children: w("installToContinue")
                            })]
                        }), ("loading" === f || "ending" === f && (!y || C && !(0,
                        c.dl)())) && !b && (0,
                        o.jsxs)(tt, {
                            screen: f,
                            isDesktop: y,
                            children: [(0,
                            o.jsx)("img", {
                                src: s.default.appInfo.media.icon,
                                alt: w("appIcon"),
                                className: "appIcon"
                            }), (0,
                            o.jsx)(W.Bb, {
                                children: (0,
                                o.jsx)("span", {
                                    style: {
                                        color: "#ffffff",
                                        display: "flex",
                                        textAlign: "center"
                                    },
                                    children: null === (l = s.default.appInfo) || void 0 === l ? void 0 : l.appName
                                })
                            }), "loading" !== f && (0,
                            o.jsx)(W.lU, {
                                children: (0,
                                o.jsx)("span", {
                                    style: {
                                        color: "rgba(255, 255, 255, 0.6)"
                                    },
                                    children: null === (p = null === (d = s.default.appInfo) || void 0 === d ? void 0 : d.appDeveloperInfo) || void 0 === p ? void 0 : p.name
                                })
                            }), (0,
                            o.jsxs)(tn, {
                                isDesktop: y,
                                children: ["ending" !== f && (0,
                                o.jsxs)(o.Fragment, {
                                    children: [(0,
                                    o.jsxs)(to, {
                                        isDesktop: y,
                                        onClick: () => x && x(),
                                        children: [(0,
                                        o.jsxs)("div", {
                                            className: "tryNowContainer",
                                            children: [(0,
                                            o.jsx)("img", {
                                                alt: w("tryNow"),
                                                src: (0,
                                                _.jW)(e2),
                                                width: 24,
                                                height: 24
                                            }), (0,
                                            o.jsx)(W.js, {
                                                children: w(E > 1 || 1 === E ? "tryNowFor" : "tryNowForMinutes", {
                                                    count: S
                                                })
                                            })]
                                        }), (0,
                                        o.jsx)("span", {
                                            className: "noInstallMsg",
                                            children: w("noInstallMsg")
                                        })]
                                    }), (0,
                                    o.jsx)(ta, {
                                        isDesktop: y,
                                        children: w("or")
                                    })]
                                }), (0,
                                o.jsx)(tr, {
                                    screen: f,
                                    onClick: () => {
                                        let e = (0,
                                        e3.Pr)();
                                        y ? (C && !(0,
                                        c.dl)() ? e ? window.open(C, "_parent", "noreferrer") : window.open(C, "_self", "noreferrer") : A(!0),
                                        (0,
                                        u.L9)(eh.S5z, {
                                            element: "LaunchQRScreen",
                                            action: "Displayed",
                                            group: "TryAndDownload"
                                        })) : (0,
                                        c.Tu)(),
                                        "loading" === f ? (0,
                                        u.L9)(eh.S5z, {
                                            element: "LaunchScreen",
                                            action: "InstallNowClicked",
                                            group: "TryAndDownload"
                                        }) : "ending" === f && (0,
                                        u.L9)(eh.S5z, {
                                            element: "TrialEndScreen",
                                            action: "InstallNowClicked",
                                            group: "TryAndDownload"
                                        })
                                    }
                                    ,
                                    children: w("install")
                                })]
                            }), "ending" !== f && (0,
                            o.jsxs)(tl, {
                                isDesktop: y,
                                children: [(0,
                                o.jsx)("li", {
                                    children: w("progressMsg")
                                }), (0,
                                o.jsx)("li", {
                                    children: w("accountSecurityMsg")
                                })]
                            })]
                        }), ("ending" === f && y && !C || "inGame" === f || b) && (0,
                        o.jsxs)(td, {
                            children: [(0,
                            o.jsxs)(ts, {
                                children: [(0,
                                o.jsxs)(tc, {
                                    isAppPage: m,
                                    children: [(0,
                                    o.jsx)("img", {
                                        src: s.default.appInfo.media.icon,
                                        alt: w("appIcon"),
                                        className: "appIcon"
                                    }), (0,
                                    o.jsxs)(tw, {
                                        children: [(0,
                                        o.jsx)(ty, {
                                            children: null === (h = s.default.appInfo) || void 0 === h ? void 0 : h.appName
                                        }), (0,
                                        o.jsx)(tb, {
                                            children: null === (v = null === (g = s.default.appInfo) || void 0 === g ? void 0 : g.appDeveloperInfo) || void 0 === v ? void 0 : v.name
                                        })]
                                    })]
                                }), (0,
                                o.jsxs)(tu, {
                                    screen: f,
                                    children: [(0,
                                    o.jsx)(tp, {
                                        children: (0,
                                        o.jsx)(e4.ZP, {
                                            size: 156,
                                            style: {
                                                height: "156px",
                                                width: "156px"
                                            },
                                            value: "mac" === j || "ios" === j ? s.default.appInfo.appleAppStoreUrl : s.default.appInfo.googlePlayStoreUrl
                                        })
                                    }), (0,
                                    o.jsx)(tA, {
                                        children: w("scanPhoneDownload")
                                    })]
                                })]
                            }), b && (0,
                            o.jsxs)(tg, {
                                children: [(0,
                                o.jsx)(tv, {
                                    children: w("wantToTry")
                                }), (0,
                                o.jsx)(ew.z, {
                                    style: {
                                        gap: "4px",
                                        minWidth: "200px"
                                    },
                                    variant: "secondary",
                                    size: "medium",
                                    onClick: () => x && x("bottomBar"),
                                    text: w("tryNow"),
                                    children: (0,
                                    o.jsx)("img", {
                                        alt: w("tryNow"),
                                        src: (0,
                                        _.jW)(e5),
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            })]
                        }), "ending" === f && (0,
                        o.jsx)(tj, {
                            children: w("progressMsg")
                        })]
                    })]
                })]
            })
        }
          , tE = i(80077)
          , tS = i(67761);
        let tT = g.ZP.div.withConfig({
            componentId: "sc-329ec0fd-0"
        })(["div{width:100%;margin:0;padding:0;display:flex;align-items:center;justify-content:center;img{max-height:65vh;max-width:65vw;width:100%;}}"]);
        var tI = () => {
            var e, t;
            let {t: i} = (0,
            K.$)()
              , n = (0,
            r.useRef)(0)
              , {title: a="Maintenance in progress", message: l="We are presently undergoing a scheduled maintenance. Please try again later."} = (null === (t = null === (e = null === s.default || void 0 === s.default ? void 0 : s.default.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.maintenanceWindowStrings) || {}
              , d = (0,
            r.useMemo)( () => {
                try {
                    let e = null == l ? void 0 : l.split("<br/>");
                    return e.map( (t, i) => i < e.length - 1 ? (0,
                    o.jsxs)(o.Fragment, {
                        children: [t, (0,
                        o.jsx)("br", {})]
                    }) : t)
                } catch (e) {
                    return l
                }
            }
            , [l]);
            return (0,
            r.useEffect)( () => (window.clearInterval(n.current),
            n.current = window.setInterval( () => {
                var e, t, i, n;
                e = void 0,
                t = void 0,
                i = void 0,
                n = function*() {
                    var e;
                    let t = yield D.ZP.getMaintenanceStatus({
                        appId: null === (e = null === s.default || void 0 === s.default ? void 0 : s.default.appInfo) || void 0 === e ? void 0 : e.appId,
                        accessCode: sessionStorage.getItem("access_code") || ""
                    }, {});
                    t.status === p.YR.Success && !1 === t.underMaintenance && window.location.reload()
                }
                ,
                new (i || (i = Promise))(function(o, r) {
                    function a(e) {
                        try {
                            d(n.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function l(e) {
                        try {
                            d(n.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function d(e) {
                        var t;
                        e.done ? o(e.value) : ((t = e.value)instanceof i ? t : new i(function(e) {
                            e(t)
                        }
                        )).then(a, l)
                    }
                    d((n = n.apply(e, t || [])).next())
                }
                )
            }
            , 1e4),
            () => {
                clearInterval(n.current)
            }
            ), []),
            (0,
            o.jsx)(tS.W2, {
                style: {
                    zIndex: 13
                },
                children: (0,
                o.jsx)(tS.VY, {
                    isMaintenanceBox: !0,
                    style: {
                        width: "min(460px, 90vw)",
                        border: "1px solid rgba(255,255,255,0.5)",
                        borderRadius: 8
                    },
                    children: (0,
                    o.jsx)(tT, {
                        children: (0,
                        o.jsxs)(tS.cy, {
                            children: [(0,
                            c.tq)() ? (0,
                            o.jsx)(W.T4, {
                                center: !0,
                                med: !0,
                                children: a
                            }) : (0,
                            o.jsx)(W.T3, {
                                center: !0,
                                med: !0,
                                children: a
                            }), (0,
                            c.tq)() ? (0,
                            o.jsx)(W.T6, {
                                style: {
                                    opacity: .8
                                },
                                center: !0,
                                children: d
                            }) : (0,
                            o.jsx)(W.T5, {
                                style: {
                                    opacity: .8
                                },
                                center: !0,
                                children: d
                            })]
                        })
                    })
                })
            })
        }
          , tk = i(9008)
          , tR = i.n(tk)
          , tL = i(38531)
          , tP = i(67181)
          , tD = i(90750)
          , tM = {
            src: "/_next/static/media/watermark.1a9cd7c7.svg",
            height: 48,
            width: 124,
            blurWidth: 0,
            blurHeight: 0
        };
        let tO = g.ZP.div.withConfig({
            componentId: "sc-2c9ed0f9-0"
        })(["background-color:transparent;width:100%;&.addFree{position:absolute;bottom:0;left:50%;transform:translateX(-50%);background:", ";height:72px;display:flex;align-items:center;justify-content:space-between;padding:12px;}"], e => {
            let {theme: t} = e;
            return t.colors.black70
        }
        )
          , tK = g.ZP.img.withConfig({
            componentId: "sc-2c9ed0f9-1"
        })(["width:'124px';height:'48px';"]);
        var tZ = () => {
            let {t: e} = (0,
            K.$)()
              , [t,i] = (0,
            r.useState)({
                width: 0
            })
              , n = (0,
            a.v9)(e => e.play.videoRef);
            (0,
            r.useEffect)( () => {
                let e = () => {
                    setTimeout( () => {
                        if (n && n.current) {
                            let e = n.current;
                            i({
                                width: null == e ? void 0 : e.getBoundingClientRect().width
                            })
                        }
                    }
                    )
                }
                ;
                return e(),
                window.addEventListener("resizeDone", e),
                () => {
                    window.removeEventListener("resizeDone", e)
                }
            }
            , []);
            let {width: l} = t || {}
              , d = (0,
            c.Dx)();
            return (0,
            o.jsxs)(tO, {
                className: d ? "addFree" : "",
                style: {
                    width: (0,
                    s.DJ)() ? "100%" : "".concat(l, "px")
                },
                children: [d && (0,
                o.jsx)(tK, {
                    alt: "Nowgg  ".concat(e("logo")),
                    src: (0,
                    _.jW)(tM)
                }), (0,
                o.jsxs)("div", {
                    children: [(0,
                    o.jsx)(tP.Z, {}), (0,
                    o.jsx)(tD.Z, {})]
                })]
            })
        }
          , tN = i(5152)
          , tB = i.n(tN)
          , tW = i(16006)
          , t_ = i(64781);
        let tF = (0,
        g.F4)(["from{-webkit-transform:rotate(0deg);}to{-webkit-transform:rotate(180deg);}"])
          , tY = (0,
        g.F4)(["from{-webkit-transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);}"])
          , tX = (0,
        g.F4)(["to{clip:rect(auto,auto,auto,auto);}"])
          , tH = g.ZP.div.withConfig({
            componentId: "sc-bc4626fe-0"
        })(["position:fixed;width:395px;background:linear-gradient(180deg,rgba(36,63,139,0.7) 0%,rgba(30,115,157,0.7) 100%);border:1px solid rgba(255,255,255,0.1);backdrop-filter:blur(12px);border-radius:0px 8px 8px 0px;display:flex;align-items:center;bottom:", ";z-index:99;height:61px;padding-right:12px;"], e => {
            let {desktop: t} = e;
            return t ? "unset" : "50px"
        }
        )
          , tz = g.ZP.div.withConfig({
            componentId: "sc-bc4626fe-1"
        })(["padding-left:12px;display:flex;align-items:center;padding-right:20px;margin-right:12px;background:rgba(0,0,0,0.2);img{margin-right:4px;}h6{margin:0;}height:100%;"])
          , tU = g.ZP.p.withConfig({
            componentId: "sc-bc4626fe-2"
        })(["margin:0px 12px 0px 0px;font-weight:400;font-size:16px;line-height:130%;color:#fff;flex:1;"])
          , tG = g.ZP.p.withConfig({
            componentId: "sc-bc4626fe-3"
        })(["width:30px;height:30px;margin:0;"])
          , tV = g.ZP.p.withConfig({
            componentId: "sc-bc4626fe-4"
        })(["position:absolute;right:12px;width:30px;height:30px;border:1px solid rgba(255,255,255,0.1);border-radius:50px;cursor:", ";;clip:rect(0px,30px,30px,15px);animation-iteration-count:1;animation-fill-mode:forwards;animation-timing-function:linear;animation-duration:0.01s;animation-delay:3s;animation-name:", ";pointer-events:", ";margin:0px;.circle{width:28px;height:28px;border:1px solid #fff;border-radius:50px;position:absolute;clip:rect(0px,15px,30px,0px);animation-iteration-count:1;animation-fill-mode:forwards;animation-timing-function:linear;&.left{animation-duration:6s;animation-name:", ";}&.right{animation-duration:3s;animation-name:", ";}}&:after,&:before{width:1px;background-color:", ";position:absolute;top:50%;left:50%;content:'';height:16px;}&:after{transform:translate(-50%,-50%) rotate(45deg);}&:before{transform:translate(-50%,-50%) rotate(-45deg);}"], e => {
            let {disabled: t} = e;
            return t ? "not-allowed" : "pointer"
        }
        , tX, e => {
            let {disabled: t} = e;
            return t ? "none" : "all"
        }
        , tY, tF, e => {
            let {disabled: t} = e;
            return t ? "rgba(255, 255, 255, 0.1)" : "#fff"
        }
        );
        var tq = () => {
            let[e,t] = (0,
            r.useState)(!0)
              , i = !(0,
            c.tq)() && !(0,
            c.Em)() && !(0,
            c.zc)()
              , [n,l] = (0,
            r.useState)(!1)
              , [d,s] = (0,
            r.useState)({
                left: 0,
                height: 0
            })
              , {t: p} = (0,
            K.$)()
              , h = (0,
            a.I0)();
            return ((0,
            r.useEffect)( () => {
                (0,
                u.L9)(eh.S5z, {
                    element: "LoginTip",
                    action: "Displayed",
                    group: "TryAndDownload"
                });
                let {videoRef: e} = R.default.getState().play
                  , t = document.getElementById("htmlFrame");
                if (e && e.current) {
                    let t = e.current;
                    s({
                        left: null == t ? void 0 : t.getBoundingClientRect().left,
                        height: null == t ? void 0 : t.getBoundingClientRect().height
                    })
                } else
                    t && s({
                        left: null == t ? void 0 : t.getBoundingClientRect().left,
                        height: null == t ? void 0 : t.getBoundingClientRect().height
                    });
                l(!0)
            }
            , []),
            setTimeout( () => {
                t(!1)
            }
            , 6e3),
            n) ? (0,
            o.jsxs)(tH, {
                desktop: i,
                style: {
                    top: i ? "".concat((window.innerHeight - d.height) / 2 + 100, "px") : "unset",
                    left: d.left
                },
                children: [(0,
                o.jsxs)(tz, {
                    children: [(0,
                    o.jsx)("img", {
                        alt: p("tip"),
                        src: (0,
                        _.jW)(t_.Z),
                        height: 16,
                        width: 16
                    }), (0,
                    o.jsx)(W.T6, {
                        white: !0,
                        med: !0,
                        children: p("tip")
                    })]
                }), (0,
                o.jsx)(tU, {
                    children: p("useEmail")
                }), (0,
                o.jsx)(tG, {}), (0,
                o.jsxs)(tV, {
                    disabled: e,
                    onClick: () => {
                        h({
                            type: P.Z.SHOW_LOGIN_TIP,
                            payload: {
                                loginTip: !1
                            }
                        }),
                        (0,
                        u.L9)(eh.S5z, {
                            element: "LoginTip",
                            action: "Closed",
                            group: "TryAndDownload"
                        })
                    }
                    ,
                    children: [(0,
                    o.jsx)("div", {
                        className: "circle left"
                    }), (0,
                    o.jsx)("div", {
                        className: "circle right"
                    })]
                })]
            }) : null
        }
          , tJ = i(66138)
          , tQ = i(58299)
          , t$ = i(80277)
          , t0 = i(70024)
          , t1 = i(2276)
          , t2 = i(9916);
        let t5 = g.ZP.div.withConfig({
            componentId: "sc-d458d439-0"
        })(["position:absolute;left:50%;top:0;transform:translateX(-50%);pointer-events:all;max-width:'100vw';height:90px !important;background-color:rgba(255,255,255,0.1);width:970px !important;max-width:calc(100% - 620px);align-items:center;justify-content:center;display:flex;&.leaderBoardSecond{bottom:0;top:unset;}overflow:scroll;scrollbar-width:none;-ms-overflow-style:none;background-color:", ";"], e => {
            let {theme: t} = e;
            return t.colors.white10
        }
        )
          , t4 = g.ZP.div.withConfig({
            componentId: "sc-d458d439-1"
        })(["position:absolute;top:0;left:0;pointer-events:all;width:300px !important;height:250px !important;display:flex;align-items:center;justify-content:center;&.mediumRectangleAdSecond{right:0;left:unset;}overflow:scroll;scrollbar-width:none;-ms-overflow-style:none;background-color:", ";"], e => {
            let {theme: t} = e;
            return t.colors.white10
        }
        )
          , t9 = g.ZP.div.withConfig({
            componentId: "sc-d458d439-2"
        })(["position:absolute;top:254px;left:0;pointer-events:all;width:300px !important;height:600px !important;display:flex;align-items:center;justify-content:center;&.largeRectangleAdSecond{right:0;left:unset;}overflow:scroll;scrollbar-width:none;-ms-overflow-style:none;background-color:", ";"], e => {
            let {theme: t} = e;
            return t.colors.white10
        }
        )
          , t3 = g.ZP.div.withConfig({
            componentId: "sc-d458d439-3"
        })(["position:fixed;pointer-events:all;display:flex;flex-direction:row;justify-content:center;width:344px;min-height:", ";touch-action:none;align-items:center;overflow:scroll;scrollbar-width:none;-ms-overflow-style:none;justify-content:end;background-color:", ";&.no-cross-icon{width:320px;}&.top{top:0;}&.right{right:0;}&.bottom{bottom:0;}&.left{left:0;}&.display-small{display:flex;justify-content:center;width:100%;}"], "".concat(eh.g8k, "px"), e => {
            let {theme: t} = e;
            return t.colors.white10
        }
        )
          , t6 = g.ZP.div.withConfig({
            componentId: "sc-d458d439-4"
        })(["display:flex;width:100%;height:50px;padding:0px 12px;align-items:center;gap:16px;flex-shrink:0;border-radius:30px 0px 0px 30px;border-left:2px solid ", ";background:", ";&.ads-section-small{gap:8px;padding:0px 8px;}"], e => {
            let {theme: t} = e;
            return t.colors.white20
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white5
        }
        )
          , t7 = g.ZP.img.withConfig({
            componentId: "sc-d458d439-5"
        })(["width:24px;height:24px;transform:unset;"])
          , t8 = g.ZP.div.withConfig({
            componentId: "sc-d458d439-6"
        })(["display:flex;flex-direction:column;color:", ";h5{color:", ";}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.colors.caution
        }
        )
          , ie = g.ZP.div.withConfig({
            componentId: "sc-d458d439-7"
        })(["width:24px;background:", ";height:100%;min-height:50px;align-content:space-around;display:flex;justify-content:space-evenly;align-items:center;align-self:self-start;svg{z-index:0;}"], e => {
            let {theme: t} = e;
            return t.colors.black
        }
        )
          , it = g.ZP.div.withConfig({
            componentId: "sc-d458d439-8"
        })(["position:fixed;pointer-events:all;display:flex;flex-direction:row;justify-content:center;width:100%;min-height:", ";touch-action:none;align-items:center;overflow:scroll;scrollbar-width:none;-ms-overflow-style:none;justify-content:end;background-color:", ";&.top{top:0px;}&.bottom{bottom:0px;}"], "".concat(eh.g8k, "px"), e => {
            let {theme: t} = e;
            return t.colors.white10
        }
        );
        var ii = i(48522)
          , io = e => {
            let {adId: t, divId: i, classNames: n=""} = e
              , {t: r} = (0,
            K.$)();
            return (0,
            o.jsxs)(t4, {
                id: t,
                className: n,
                children: [(0,
                o.jsx)(ii.pB, {
                    children: r("adHelpFree")
                }), (0,
                o.jsx)("div", {
                    id: i
                })]
            })
        }
          , ir = e => {
            let {adId: t, divId: i, classNames: n=""} = e
              , {t: r} = (0,
            K.$)();
            return (0,
            o.jsxs)(t9, {
                id: t,
                className: n,
                children: [(0,
                o.jsx)(ii.pB, {
                    children: r("adHelpFree")
                }), (0,
                o.jsx)("div", {
                    id: i
                })]
            })
        }
          , ia = e => {
            let {adId: t, divId: i, classNames: n=""} = e
              , {t: r} = (0,
            K.$)();
            return (0,
            o.jsxs)(t5, {
                id: t,
                className: n,
                children: [(0,
                o.jsx)(ii.pB, {
                    children: r("adHelpFree")
                }), (0,
                o.jsx)("div", {
                    id: i
                })]
            })
        }
          , il = i(41203)
          , id = e => {
            let {divId: t, classNames: i=""} = e
              , {t: n} = (0,
            K.$)()
              , a = (0,
            r.useCallback)( () => {
                (0,
                u.L9)(eh.Psr, {
                    nowPassSource: eh.wMl.CloseAdsButton
                }),
                (0,
                c.xG)(eh.wMl.CloseAdsButton)
            }
            , [u.L9, c.xG]);
            return (0,
            o.jsxs)(t3, {
                className: "\n        ".concat(i, " \n        ").concat(s.default.appInfo.playFeFeatures.enableSubscriptionPass ? "" : "no-cross-icon", "\n      "),
                children: [(0,
                o.jsx)(ii.pB, {
                    className: "less-width",
                    children: n("adHelpFree")
                }), (0,
                o.jsx)("div", {
                    id: t
                }), s.default.appInfo.playFeFeatures.enableSubscriptionPass && (0,
                o.jsx)(ie, {
                    onClick: a,
                    children: (0,
                    o.jsx)(il.x, {})
                })]
            })
        }
          , is = i(79853)
          , ic = (0,
        r.memo)( () => {
            var e, t, i, n, l, d, p, h;
            let g = (0,
            a.I0)()
              , {t: v} = (0,
            K.$)()
              , x = (0,
            a.v9)(e => e.play.orientation)
              , f = (0,
            a.v9)(e => e.play.videoContainerRef)
              , m = (0,
            a.v9)(e => e.play.videoRef)
              , y = (0,
            a.v9)(e => e.play.isRecording)
              , b = (0,
            a.v9)(e => e.play.isFullscreen)
              , A = (0,
            r.useMemo)( () => (0,
            c.ri)(b), [b])
              , j = (0,
            r.useMemo)( () => y && (0,
            c.Dx)(), [y]) || A
              , C = (0,
            r.useCallback)( () => (0,
            t0.c)(), [x, f, m])
              , E = (0,
            r.useCallback)( () => {
                (0,
                u.L9)(eh.fik, {
                    nowPassSource: eh.wMl.HeavyAdsLayoutRemoveAdsButton
                }),
                (0,
                c.xG)(eh.wMl.HeavyAdsLayoutRemoveAdsButton)
            }
            , [u.L9, g]);
            return (0,
            r.useEffect)( () => {
                setTimeout( () => {
                    g((0,
                    tQ.RT)(eh.VBy)),
                    (0,
                    w.sZ)(),
                    (0,
                    w.Ul)()
                }
                , 1e3)
            }
            , [g, C]),
            (0,
            r.useEffect)( () => {
                if (!j) {
                    if ("p" === (0,
                    c.Sf)())
                        return;
                    (0,
                    c.tq)() ? ((0,
                    is.JD)("div-gpt-ad-display", "div-gpt-ad-display-1"),
                    x === t2.cj.landscape && (0,
                    is.JD)("div-gpt-ad-display", "div-gpt-ad-display-2"),
                    (0,
                    is.JD)("div-gpt-ad-display", "div-gpt-ad-display-3")) : ((0,
                    is.JD)(eh.VBy, "div-gpt-ad-mediumRectangleAd-1"),
                    (0,
                    is.JD)(eh.VBy, "div-gpt-ad-mediumRectangleAd-2"),
                    (0,
                    is.JD)(eh.VBy, "div-gpt-ad-largeRectangleAd-1"),
                    (0,
                    is.JD)(eh.VBy, "div-gpt-ad-largeRectangleAd-2"),
                    (0,
                    is.JD)(eh.VBy, "div-gpt-ad-leaderBoard-1"),
                    (0,
                    is.JD)(eh.VBy, "div-gpt-ad-leaderBoard-2"));
                    let e = [];
                    (0,
                    c.tq)() ? (e = [{
                        divId: "div-gpt-ad-display-1",
                        baseDivId: "pb-slot-incontent",
                        targeting: {
                            ads_loc: "display-lb-top"
                        }
                    }, {
                        divId: "div-gpt-ad-display-3",
                        baseDivId: "pb-slot-incontent",
                        targeting: {
                            ads_loc: "display-lb-bottom"
                        }
                    }],
                    x === t2.cj.landscape && (e = [{
                        divId: "div-gpt-ad-display-2",
                        baseDivId: "pb-slot-incontent",
                        targeting: {
                            ads_loc: "display-lb-top"
                        }
                    }, ...e])) : e = [{
                        divId: "div-gpt-ad-mediumRectangleAd-1",
                        baseDivId: "pb-slot-float",
                        targeting: {
                            ads_loc: "display-panel-top"
                        }
                    }, {
                        divId: "div-gpt-ad-mediumRectangleAd-2",
                        baseDivId: "pb-slot-float",
                        targeting: {
                            ads_loc: "display-panel-top"
                        }
                    }, {
                        divId: "div-gpt-ad-largeRectangleAd-1",
                        baseDivId: "pb-slot-mega",
                        targeting: {
                            ads_loc: "display-panel-bottom"
                        }
                    }, {
                        divId: "div-gpt-ad-largeRectangleAd-2",
                        baseDivId: "pb-slot-mega",
                        targeting: {
                            ads_loc: "display-lb-bottom"
                        }
                    }, {
                        divId: "div-gpt-ad-leaderBoard-1",
                        baseDivId: "pb-slot-incontent-small",
                        targeting: {
                            ads_loc: "display-panel-bottom"
                        }
                    }, {
                        divId: "div-gpt-ad-leaderBoard-2",
                        baseDivId: "pb-slot-incontent-small",
                        targeting: {
                            ads_loc: "display-lb-bottom"
                        }
                    }],
                    window.tude.cmd.push( () => {
                        "p" !== (0,
                        c.Sf)() && ((0,
                        c.tq)() ? ((0,
                        is.JD)("div-gpt-ad-display", "div-gpt-ad-display-1", "2"),
                        x === t2.cj.landscape && (0,
                        is.JD)("div-gpt-ad-display", "div-gpt-ad-display-2", "2"),
                        (0,
                        is.JD)("div-gpt-ad-display", "div-gpt-ad-display-3", "2")) : ((0,
                        is.JD)(eh.VBy, "div-gpt-ad-mediumRectangleAd-1", "2"),
                        (0,
                        is.JD)(eh.VBy, "div-gpt-ad-mediumRectangleAd-2", "2"),
                        (0,
                        is.JD)(eh.VBy, "div-gpt-ad-largeRectangleAd-1", "2"),
                        (0,
                        is.JD)(eh.VBy, "div-gpt-ad-largeRectangleAd-2", "2"),
                        (0,
                        is.JD)(eh.VBy, "div-gpt-ad-leaderBoard-1", "2"),
                        (0,
                        is.JD)(eh.VBy, "div-gpt-ad-leaderBoard-2", "2")),
                        window.tude.refreshAdsViaDivMappings(e))
                    }
                    )
                }
            }
            , [j, b]),
            (0,
            c.tq)() ? (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(it, {
                    className: "top"
                }), (0,
                o.jsx)(it, {
                    className: "bottom"
                }), (0,
                o.jsx)(id, {
                    divId: "div-gpt-ad-display-1",
                    classNames: "top ".concat(x === t2.cj.landscape ? "left" : "", "\n          ").concat((null === (e = null == f ? void 0 : f.current) || void 0 === e ? void 0 : e.clientWidth) && (null === (t = null == f ? void 0 : f.current) || void 0 === t ? void 0 : t.clientWidth) < 675 && x === t2.cj.landscape ? "display-small" : "")
                }), (null === (i = null == f ? void 0 : f.current) || void 0 === i ? void 0 : i.clientWidth) && (null === (n = null == f ? void 0 : f.current) || void 0 === n ? void 0 : n.clientWidth) > 675 && x === t2.cj.landscape && (0,
                o.jsx)(id, {
                    divId: "div-gpt-ad-display-2",
                    classNames: "top right"
                }), (0,
                o.jsx)(id, {
                    divId: "div-gpt-ad-display-3",
                    classNames: "bottom ".concat(x === t2.cj.landscape ? "left" : "")
                }), s.default.appInfo.playFeFeatures.enableSubscriptionPass && x === t2.cj.landscape && (0,
                o.jsx)(t3, {
                    className: "bottom right",
                    style: {
                        borderRadius: "30px 0px 0px 30px",
                        width: (null === (l = null == f ? void 0 : f.current) || void 0 === l ? void 0 : l.clientWidth) && (null === (d = null == f ? void 0 : f.current) || void 0 === d ? void 0 : d.clientWidth) < 675 && x === t2.cj.landscape ? "auto" : ""
                    },
                    children: (0,
                    o.jsxs)(t6, {
                        className: (null === (p = null == f ? void 0 : f.current) || void 0 === p ? void 0 : p.clientWidth) && (null === (h = null == f ? void 0 : f.current) || void 0 === h ? void 0 : h.clientWidth) < 675 && x === t2.cj.landscape ? "ads-section-small" : "",
                        children: [(0,
                        o.jsx)(t7, {
                            src: (0,
                            _.jW)(t$.Z),
                            alt: ""
                        }), (0,
                        o.jsxs)(t8, {
                            children: [(0,
                            o.jsx)(W.lU, {
                                children: v("playWithoutLimits")
                            }), (0,
                            o.jsx)(W.QV, {
                                children: v("goAdFree")
                            })]
                        }), (0,
                        o.jsx)(t1.default, {
                            onClick: E,
                            image: !1
                        })]
                    })
                })]
            }) : (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(io, {
                    adId: "mediumRectangleAd-1",
                    divId: "div-gpt-ad-mediumRectangleAd-1"
                }), (0,
                o.jsx)(io, {
                    adId: "mediumRectangleAd-2",
                    divId: "div-gpt-ad-mediumRectangleAd-2",
                    classNames: "mediumRectangleAdSecond"
                }), (0,
                o.jsx)(ir, {
                    adId: "largeRectangleAd-1",
                    divId: "div-gpt-ad-largeRectangleAd-1"
                }), (0,
                o.jsx)(ir, {
                    adId: "largeRectangleAd-2",
                    divId: "div-gpt-ad-largeRectangleAd-2",
                    classNames: "largeRectangleAdSecond"
                }), (0,
                o.jsx)(ia, {
                    adId: "leaderBoard-1",
                    divId: "div-gpt-ad-leaderBoard-1"
                }), (0,
                o.jsx)(ia, {
                    adId: "leaderBoard-2",
                    divId: "div-gpt-ad-leaderBoard-2",
                    classNames: "leaderBoardSecond"
                })]
            })
        }
        )
          , iu = i(20192);
        let ip = g.ZP.div.withConfig({
            componentId: "sc-aa4c6379-0"
        })(["position:fixed;bottom:0;left:0;display:none;z-index:-1;pointer-events:all;border-radius:", ";background:transparent;z-index:-1;height:fit-content;&.show{display:block;}&.started{z-index:9999;}@media screen and (max-width:600px){width:fit-content;height:90vh;}"], e => {
            let {theme: t} = e;
            return t.border.radius3
        }
        )
          , ih = g.ZP.div.withConfig({
            componentId: "sc-aa4c6379-1"
        })(["background:rgba(0,0,0,0.6);border-radius:12px 12px 0 0;padding:8px 12px;display:none;justify-content:space-between;align-items:center;font-weight:600;font-size:14px;line-height:150%;color:", ";position:relative;backdrop-filter:blur(10px);&:hover{cursor:grab;}&.started{display:flex;}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , ig = g.ZP.div.withConfig({
            componentId: "sc-aa4c6379-2"
        })(["padding:4px 1px 3px 10px;cursor:pointer;"])
          , iv = g.ZP.p.withConfig({
            componentId: "sc-aa4c6379-3"
        })(["position:relative;width:2px;height:10px;right:", ';top:-2px;&::after,&::before{content:"";width:2px;height:11px;position:absolute;background-color:', ";}&::before{left:0;transform:rotate(-45deg);}&::after{right:0;transform:rotate(45deg);}"], e => {
            let {theme: t} = e;
            return t.spacing.base
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , ix = g.ZP.p.withConfig({
            componentId: "sc-aa4c6379-4"
        })(["position:absolute;top:", ";left:50%;transform:translateX(-50%);display:flex;flex-direction:column;span{width:22px;height:1px;background:", ";border-radius:", ";margin-bottom:", ";}"], e => {
            let {theme: t} = e;
            return t.spacing.base2
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius
        }
        , e => {
            let {theme: t} = e;
            return t.spacing.base
        }
        )
          , im = g.ZP.div.withConfig({
            componentId: "sc-aa4c6379-5"
        })(["margin:0;width:533px;height:400px;border-bottom-left-radius:", ";border-bottom-right-radius:", ";opacity:0;&.started{opacity:1;}"], e => {
            let {theme: t} = e;
            return t.border.radius3
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius3
        }
        )
          , iw = 0
          , iy = () => iw
          , ib = () => {
            iw += 1
        }
          , iA = () => {
            iw = 0
        }
          , ij = -1
          , iC = () => ij
          , iE = () => {
            iA(),
            ij += 1
        }
        ;
        var iS = (0,
        r.memo)( () => {
            let {t: e} = (0,
            K.$)()
              , t = (0,
            a.I0)()
              , i = (0,
            r.useRef)(null)
              , [n,l] = (0,
            r.useState)(10)
              , [d,s] = (0,
            r.useState)(!1)
              , [p,g] = (0,
            r.useState)(!1)
              , v = (0,
            a.v9)(e => e.ads.rewardedAdsSDK)
              , x = (0,
            a.v9)(e => e.play.isRecording)
              , f = !1
              , m = (0,
            r.useRef)(!1)
              , w = (0,
            r.useRef)()
              , y = (0,
            r.useRef)("")
              , b = !1
              , A = (0,
            r.useRef)(null)
              , j = (0,
            r.useRef)(null)
              , C = (0,
            r.useRef)(null)
              , [E,S] = (0,
            r.useState)(!0)
              , T = (0,
            r.useRef)(!1)
              , I = (0,
            r.useRef)(!1)
              , k = (0,
            r.useRef)(!1);
            k.current = (0,
            a.v9)(e => e.play.keyboardActive);
            let L = window.devicePixelRatio
              , {videoRef: D} = R.default.getState().play
              , M = 0
              , O = 0
              , Z = {}
              , N = {}
              , B = () => {
                C.current = setTimeout( () => {
                    if (i.current && (i.current.style.left = "0",
                    i.current.style.top = "unset",
                    i.current.style.bottom = "0"),
                    v) {
                        T.current = !0,
                        y.current = "loadWrapperAgain";
                        return
                    }
                    if (k.current) {
                        I.current = !0,
                        y.current = "loadWrapperAgain";
                        return
                    }
                    "visible" === document.visibilityState ? Y() : (f = !0,
                    y.current = "loadWrapperAgain")
                }
                , 18e4)
            }
              , W = e => {
                var t;
                if (g(!1),
                l(10),
                s(!1),
                j.current && clearTimeout(j.current),
                e)
                    try {
                        null === (t = null == w ? void 0 : w.current) || void 0 === t || t.closePlayer()
                    } catch (e) {}
                w.current = void 0
            }
              , _ = (e, t) => {
                e.on("adNoFill", () => {
                    F(t)
                }
                ).on("adError", () => {
                    F(t)
                }
                ).on("adReady", () => {
                    var e;
                    null === (e = null == w ? void 0 : w.current) || void 0 === e || e.setVideoVolume(0),
                    N = window.pbjs.getBidResponses() || {}
                }
                ).on("adProgress", (e, i) => {
                    var n, o, r;
                    let {milestone: a} = i;
                    if ("complete" === a) {
                        if (b)
                            return;
                        W()
                    } else if ("start" === a) {
                        null === (n = null == w ? void 0 : w.current) || void 0 === n || n.setVideoVolume(0),
                        M = (null === (o = null == D ? void 0 : D.current) || void 0 === o ? void 0 : o.clientHeight) || 0,
                        O = (null === (r = null == D ? void 0 : D.current) || void 0 === r ? void 0 : r.clientWidth) || 0;
                        let {bids: e=[]} = N[t ? "mid-roll" : "stream"] || {}
                          , {bidder: i, cpm: a, currency: l, netRevenue: d, status: c, statusMessage: p, timeToRespond: g, ttl: v} = e[0] || {};
                        Z = {
                            bidder: i,
                            cpm: a,
                            currency: l,
                            netRevenue: d,
                            status: c,
                            statusMessage: p,
                            timeToRespond: g,
                            ttl: v
                        },
                        (0,
                        u.L9)("AdDisplayed", Object.assign({
                            adContext: "Midroll",
                            adType: "Video",
                            adWidth: 533,
                            adHeight: 400,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: M,
                            androidHeight: O,
                            pixelRatio: L,
                            repeatCount: iC(),
                            retryCount: iy(),
                            adSlot: h.K.MIDROLL_VIDEO_BOTTOM
                        }, Z)),
                        B(),
                        s(!0),
                        b = !1
                    }
                }
                ).on("adSkipped", () => {
                    W(),
                    b = !0
                }
                )
            }
            ;
            function F(e) {
                var t, i, n, o;
                if (M = (null === (t = null == D ? void 0 : D.current) || void 0 === t ? void 0 : t.clientHeight) || 0,
                O = (null === (i = null == D ? void 0 : D.current) || void 0 === i ? void 0 : i.clientWidth) || 0,
                (0,
                u.L9)("AdNotFilled", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: 533,
                    adHeight: 400,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: M,
                    androidHeight: O,
                    pixelRatio: L,
                    repeatCount: iC(),
                    retryCount: iy(),
                    adSlot: h.K.MIDROLL_VIDEO_BOTTOM
                }),
                e) {
                    if (ib(),
                    "p" === (0,
                    c.Sf)())
                        return;
                    (0,
                    u.L9)("AdRequestedNg", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: 533,
                        adHeight: 400,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: M,
                        androidHeight: O,
                        pixelRatio: L,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: void 0 !== (null === (n = null == window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                        isGptLoaded: void 0 !== (null === (o = null == window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.pubads),
                        repeatCount: iC(),
                        retryCount: iy(),
                        adSlot: h.K.MIDROLL_VIDEO_BOTTOM
                    }),
                    window.tude.cmd.push( () => {
                        var e, t;
                        "p" !== (0,
                        c.Sf)() && ((0,
                        u.L9)("AdRequested", {
                            adContext: "Midroll",
                            adType: "Video",
                            adWidth: 533,
                            adHeight: 400,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: M,
                            androidHeight: O,
                            pixelRatio: L,
                            isTabVisible: "visible" === document.visibilityState,
                            isTudeLoaded: void 0 !== (null === (e = null == window ? void 0 : window.tude) || void 0 === e ? void 0 : e.refreshAdsViaDivMappings),
                            isGptLoaded: void 0 !== (null === (t = null == window ? void 0 : window.googletag) || void 0 === t ? void 0 : t.pubads),
                            repeatCount: iC(),
                            retryCount: iy(),
                            adSlot: h.K.MIDROLL_VIDEO_BOTTOM
                        }),
                        window.tude.requestInstreamPlayer({
                            divId: "prebid-wrapper-mid-roll",
                            code: "stream",
                            mode: "adOnly",
                            targeting: {
                                ads_loc: "video-auto-out"
                            }
                        }).then(e => {
                            w.current = e,
                            _(e, !1)
                        }
                        ).catch(e => {}
                        ))
                    }
                    )
                } else
                    B(),
                    W()
            }
            function Y() {
                var e, t, i, n;
                if (R.default.getState().play.isRecording && (0,
                c.Dx)()) {
                    m.current = !0,
                    y.current = "loadWrapperAgain";
                    return
                }
                g(!0),
                M = (null === (e = null == D ? void 0 : D.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                O = (null === (t = null == D ? void 0 : D.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                iE(),
                (0,
                u.L9)("AdRequestedNg", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: 533,
                    adHeight: 400,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: M,
                    androidHeight: O,
                    pixelRatio: L,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: void 0 !== (null === (i = null == window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                    isGptLoaded: void 0 !== (null === (n = null == window ? void 0 : window.googletag) || void 0 === n ? void 0 : n.pubads),
                    repeatCount: iC(),
                    retryCount: iy(),
                    adSlot: h.K.MIDROLL_VIDEO_BOTTOM
                }),
                window.tude.cmd.push( () => {
                    var e, t;
                    "p" !== (0,
                    c.Sf)() && ((0,
                    u.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: 533,
                        adHeight: 400,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: M,
                        androidHeight: O,
                        pixelRatio: L,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: void 0 !== (null === (e = null == window ? void 0 : window.tude) || void 0 === e ? void 0 : e.refreshAdsViaDivMappings),
                        isGptLoaded: void 0 !== (null === (t = null == window ? void 0 : window.googletag) || void 0 === t ? void 0 : t.pubads),
                        repeatCount: iC(),
                        retryCount: iy(),
                        adSlot: h.K.MIDROLL_VIDEO_BOTTOM
                    }),
                    window.tude.requestInstreamPlayer({
                        divId: "prebid-wrapper-mid-roll",
                        code: "mid-roll",
                        mode: "adOnly",
                        targeting: {
                            ads_loc: "video-auto-out"
                        }
                    }).then(e => {
                        w.current = e,
                        _(e, !0)
                    }
                    ).catch(e => {}
                    ))
                }
                )
            }
            let X = () => {
                var e, t;
                if (R.default.getState().play.isRecording && (0,
                c.Dx)()) {
                    m.current = !0,
                    y.current = "loadMidRoll";
                    return
                }
                g(!0),
                iE(),
                (0,
                u.L9)("AdRequestedNg", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: 533,
                    adHeight: 400,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: M,
                    androidHeight: O,
                    pixelRatio: L,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: void 0 !== (null === (e = null == window ? void 0 : window.tude) || void 0 === e ? void 0 : e.refreshAdsViaDivMappings),
                    isGptLoaded: void 0 !== (null === (t = null == window ? void 0 : window.googletag) || void 0 === t ? void 0 : t.pubads),
                    repeatCount: iC(),
                    retryCount: iy(),
                    adSlot: h.K.MIDROLL_VIDEO_BOTTOM
                }),
                window.tude.cmd.push( () => {
                    var e, t, i, n;
                    "p" !== (0,
                    c.Sf)() && (M = (null === (e = null == D ? void 0 : D.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                    O = (null === (t = null == D ? void 0 : D.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                    (0,
                    u.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: 533,
                        adHeight: 400,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: M,
                        androidHeight: O,
                        pixelRatio: L,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: void 0 !== (null === (i = null == window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                        isGptLoaded: void 0 !== (null === (n = null == window ? void 0 : window.googletag) || void 0 === n ? void 0 : n.pubads),
                        repeatCount: iC(),
                        retryCount: iy(),
                        adSlot: h.K.MIDROLL_VIDEO_BOTTOM
                    }),
                    window.tude.requestInstreamPlayer({
                        divId: "prebid-wrapper-mid-roll",
                        code: "mid-roll",
                        mode: "adOnly",
                        targeting: {
                            ads_loc: "video-auto-out"
                        }
                    }).then(e => {
                        w.current = e,
                        _(e, !0)
                    }
                    ).catch(e => {}
                    ))
                }
                )
            }
              , H = () => {
                if ("visible" === document.visibilityState) {
                    if (v) {
                        T.current = !0;
                        return
                    }
                    f && (f = !1,
                    "loadMidRoll" === y.current ? X() : "loadWrapperAgain" === y.current && Y())
                }
            }
            ;
            return (0,
            r.useEffect)( () => {
                v ? W() : T.current && (T.current = !1,
                "loadMidRoll" === y.current ? X() : "loadWrapperAgain" === y.current && Y())
            }
            , [v]),
            (0,
            r.useEffect)( () => {
                !x && m.current ? (m.current = !1,
                "loadMidRoll" === y.current ? X() : "loadWrapperAgain" === y.current && Y()) : x && (0,
                c.Dx)() && W(!0)
            }
            , [x]),
            (0,
            r.useEffect)( () => (document.addEventListener("visibilitychange", H),
            i.current && (i.current.style.left = "0",
            i.current.style.top = "unset",
            i.current.style.bottom = "0"),
            A.current = setTimeout( () => {
                if (v) {
                    T.current = !0,
                    y.current = "loadMidRoll";
                    return
                }
                if (k.current) {
                    I.current = !0,
                    y.current = "loadMidRoll";
                    return
                }
                "visible" === document.visibilityState ? X() : (f = !0,
                y.current = "loadMidRoll")
            }
            , 18e4),
            () => {
                A.current && clearTimeout(A.current),
                C.current && clearTimeout(C.current),
                document.removeEventListener("visibilitychange", H)
            }
            ), []),
            (0,
            r.useEffect)( () => {
                t({
                    type: P.Z.SET_MID_ROLL_AD,
                    payload: {
                        midRollAdRef: i
                    }
                })
            }
            , [i]),
            (0,
            r.useEffect)( () => (d && (S(!0),
            j.current = setTimeout( () => {
                n > 1 ? l(n - 1) : (S(!1),
                j.current && clearTimeout(j.current))
            }
            , 1e3)),
            t({
                type: P.Z.SET_MID_ROLL_AD,
                payload: {
                    midRollAdVisible: d
                }
            }),
            d || (0,
            iu.XW)(),
            () => {
                j.current && clearTimeout(j.current)
            }
            ), [d, n]),
            (0,
            r.useEffect)( () => {
                I.current && (I.current = !1,
                "loadMidRoll" === y.current ? X() : "loadWrapperAgain" === y.current && Y())
            }
            , [k.current]),
            (0,
            o.jsxs)(ip, {
                ref: i,
                className: "".concat(p ? "show" : "", " ").concat(d ? "started" : ""),
                children: [(0,
                o.jsxs)(ih, {
                    "aria-hidden": "true",
                    className: "".concat(d ? "started" : ""),
                    children: [(0,
                    o.jsx)("p", {
                        children: e("ad")
                    }), E && (0,
                    o.jsx)("p", {
                        children: e("closeAdIn", {
                            time: n
                        })
                    }), !E && (0,
                    o.jsx)(ig, {
                        "aria-hidden": "true",
                        onClick: () => {
                            W(!0)
                        }
                        ,
                        children: (0,
                        o.jsx)(iv, {})
                    }), (0,
                    o.jsxs)(ix, {
                        children: [(0,
                        o.jsx)("span", {}), (0,
                        o.jsx)("span", {})]
                    })]
                }), (0,
                o.jsx)(im, {
                    id: "prebid-wrapper-mid-roll",
                    className: "".concat(d ? "started" : "")
                })]
            })
        }
        );
        let iT = (0,
        g.F4)(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);}100%{transform:rotate(180deg);}"])
          , iI = (0,
        g.F4)(["0%{transform:rotate(0deg);}50%{transform:rotate(0deg);}100%{transform:rotate(180deg);}"])
          , ik = g.ZP.div.withConfig({
            componentId: "sc-f4451b4a-0"
        })(["position:absolute;border:2px solid rgba(217,217,217,0.01);border-radius:400px;background:rgba(217,217,217,0.01);backdrop-filter:blur(12px);width:80px;height:80px;display:flex;justify-content:center;align-items:center;font-weight:400;font-size:14px;color:#fff;z-index:9999;text-align:center;.circle{top:0;left:0;}.circle.left{position:absolute;clip:rect(0,80px,80px,40px);}.circle.right{position:absolute;clip:rect(0px,40px,80px,0px);}.circle span{width:80px;height:80px;border-radius:100%;position:absolute;border:2px solid #fff;}.circle.left span{clip:rect(0px,40px,80px,0px);animation:", " 5s infinite linear;}.circle.right span{clip:rect(0,80px,80px,40px);animation:", " 5s infinite linear;}"], iT, iI)
          , iR = g.ZP.div.withConfig({
            componentId: "sc-f4451b4a-1"
        })(["display:flex;flex-direction:column;align:items:center;justify-content:center;.timeLeft{font-weight:600;font-size:16px;}p{margin:0;}"]);
        var iL = () => {
            let[e,t] = (0,
            r.useState)(5)
              , [i,n] = (0,
            r.useState)({
                left: 0,
                top: 0,
                height: 0,
                width: 0
            })
              , l = (0,
            a.v9)(e => e.play.orientation);
            return (0,
            r.useLayoutEffect)( () => {
                let {videoRef: e} = R.default.getState().play
                  , t = document.getElementById("htmlFrame");
                if (e && e.current) {
                    let t = e.current;
                    n({
                        left: null == t ? void 0 : t.getBoundingClientRect().left,
                        top: null == t ? void 0 : t.getBoundingClientRect().top,
                        height: null == t ? void 0 : t.getBoundingClientRect().height,
                        width: null == t ? void 0 : t.getBoundingClientRect().width
                    })
                } else
                    t && n({
                        left: null == t ? void 0 : t.getBoundingClientRect().left,
                        top: null == t ? void 0 : t.getBoundingClientRect().top,
                        height: null == t ? void 0 : t.getBoundingClientRect().height,
                        width: null == t ? void 0 : t.getBoundingClientRect().width
                    })
            }
            , []),
            (0,
            r.useEffect)( () => {
                let i = setTimeout( () => {
                    e > 0 ? t(e - 1) : clearTimeout(i)
                }
                , 1e3);
                return () => clearTimeout(i)
            }
            , [e]),
            (0,
            o.jsxs)(ik, {
                style: {
                    top: (0,
                    c.tq)() ? l === p.cj.portrait ? "".concat(i.top + i.height - 120, "px") : "".concat(i.left + i.width - 120, "px") : "".concat(i.top + 10, "px"),
                    left: (0,
                    c.tq)() ? l === p.cj.portrait ? "".concat(i.left + 20, "px") : "".concat(i.top + 20, "px") : "".concat(i.left + 10, "px"),
                    display: 0 === e ? "none" : ""
                },
                children: [(0,
                o.jsx)("div", {
                    className: "circle left rotate",
                    children: (0,
                    o.jsx)("span", {})
                }), (0,
                o.jsx)("div", {
                    className: "circle right rotate",
                    children: (0,
                    o.jsx)("span", {})
                }), (0,
                o.jsxs)(iR, {
                    children: [(0,
                    o.jsx)("p", {
                        children: "Ad in"
                    }), (0,
                    o.jsx)("p", {
                        className: "timeLeft",
                        children: e
                    })]
                })]
            })
        }
        ;
        let iP = g.ZP.div.withConfig({
            componentId: "sc-c569ec36-0"
        })(["position:fixed;left:0;top:0;width:100%;height:100%;display:none;pointer-events:all;background:#000;z-index:-1;&.show{display:block;}&.started{z-index:9999;}"])
          , iD = g.ZP.div.withConfig({
            componentId: "sc-c569ec36-1"
        })(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;&.started{opacity:1;}"])
          , iM = -1
          , iO = () => iM
          , iK = () => {
            iM += 1
        }
        ;
        var iZ = (0,
        r.memo)( () => {
            let e, t, i;
            let n = (0,
            a.v9)(e => e.play.orientation)
              , l = (0,
            r.useRef)(null);
            (0,
            r.useContext)(k.x);
            let[d,s] = (0,
            r.useState)(!1)
              , [g,v] = (0,
            r.useState)(!1)
              , [x,f] = (0,
            r.useState)(!1)
              , m = 24e4
              , w = !1
              , y = (0,
            r.useRef)("")
              , b = (0,
            r.useRef)()
              , A = !1
              , j = (0,
            r.useRef)(null)
              , C = window.devicePixelRatio
              , E = 0
              , S = 0
              , T = {}
              , I = {}
              , R = e => Math.ceil(16 / 9 * e)
              , L = e => Math.ceil(e / (16 / 9))
              , P = (e, t) => {
                E = e,
                S = t
            }
              , D = () => {
                v(!1),
                s(!1)
            }
              , M = () => {
                i = setTimeout( () => {
                    "visible" === document.visibilityState ? N() : (w = !0,
                    y.current = "loadWrapperAgain")
                }
                , m),
                t = setTimeout( () => {
                    f(!0)
                }
                , m - 5e3)
            }
              , O = () => {
                let e, t;
                (0,
                c.tq)() ? (e = n === p.cj.portrait ? window.innerWidth : window.innerHeight,
                t = n === p.cj.portrait ? window.innerHeight : window.innerWidth) : (e = window.innerWidth,
                t = window.innerHeight);
                let i = R(t)
                  , o = t;
                i > o && (o = L(i = e)),
                l.current && (l.current.style.width = "".concat(i, "px"),
                l.current.style.height = "".concat(o, "px")),
                P(i, o),
                clearTimeout(j.current),
                j.current = setTimeout( () => {
                    var e;
                    D(),
                    (0,
                    u.L9)("AdRequestTimeout", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: E,
                        adHeight: S,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        pixelRatio: C,
                        repeatCount: iO(),
                        adSlot: h.K.EMBEDED_FULL_SCREEN
                    }),
                    M(),
                    null === (e = null == b ? void 0 : b.current) || void 0 === e || e.closePlayer()
                }
                , 15e3)
            }
              , K = () => {
                (0,
                u.L9)("AdNotFilled", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: E,
                    adHeight: S,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    pixelRatio: C,
                    repeatCount: iO(),
                    adSlot: h.K.EMBEDED_FULL_SCREEN
                }),
                clearTimeout(j.current),
                M(),
                D()
            }
              , Z = e => {
                e.on("adError", () => {
                    m = 3e4,
                    K()
                }
                ).on("adReady", () => {
                    var e;
                    null === (e = null == b ? void 0 : b.current) || void 0 === e || e.setVideoVolume(1),
                    clearTimeout(j.current),
                    clearTimeout(j.current),
                    I = window.pbjs.getBidResponses(),
                    j.current = setTimeout( () => {
                        var e;
                        D(),
                        (0,
                        u.L9)("AdRequestTimeout", {
                            adContext: "Midroll",
                            adType: "Video",
                            adWidth: E,
                            adHeight: S,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            pixelRatio: C,
                            repeatCount: iO(),
                            adSlot: h.K.EMBEDED_FULL_SCREEN
                        }),
                        M(),
                        null === (e = null == b ? void 0 : b.current) || void 0 === e || e.closePlayer()
                    }
                    , 1e4)
                }
                ).on("adNoFill", () => {
                    m = 3e4,
                    K()
                }
                ).on("adProgress", (e, t) => {
                    var i;
                    let {milestone: n} = t;
                    if ("complete" === n) {
                        if (A)
                            return;
                        D()
                    } else if ("start" === n) {
                        null === (i = null == b ? void 0 : b.current) || void 0 === i || i.setVideoVolume(1),
                        clearTimeout(j.current);
                        let {bids: e=[]} = I.stream || {}
                          , {bidder: t, cpm: n, currency: o, netRevenue: r, status: a, statusMessage: l, timeToRespond: d, ttl: c} = e[0] || {};
                        T = {
                            bidder: t,
                            cpm: n,
                            currency: o,
                            netRevenue: r,
                            status: a,
                            statusMessage: l,
                            timeToRespond: d,
                            ttl: c
                        },
                        (0,
                        u.L9)("AdDisplayed", Object.assign({
                            adContext: "Midroll",
                            adType: "Video",
                            adWidth: E,
                            adHeight: S,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            pixelRatio: C,
                            repeatCount: iO(),
                            adSlot: h.K.EMBEDED_FULL_SCREEN
                        }, T)),
                        m = 24e4,
                        M(),
                        s(!0),
                        A = !1
                    }
                }
                ).on("adSkipped", () => {
                    D(),
                    A = !0
                }
                )
            }
            ;
            function N() {
                var e, i;
                O(),
                v(!0),
                iK(),
                (0,
                u.L9)("AdRequestedNg", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: E,
                    adHeight: S,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    pixelRatio: C,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: void 0 !== (null === (e = null == window ? void 0 : window.tude) || void 0 === e ? void 0 : e.refreshAdsViaDivMappings),
                    isGptLoaded: void 0 !== (null === (i = null == window ? void 0 : window.googletag) || void 0 === i ? void 0 : i.pubads),
                    repeatCount: iO(),
                    adSlot: h.K.EMBEDED_FULL_SCREEN
                }),
                window.tude.cmd.push( () => {
                    var e, i;
                    "p" !== (0,
                    c.Sf)() && ((0,
                    u.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: E,
                        adHeight: S,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        pixelRatio: C,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: void 0 !== (null === (e = null == window ? void 0 : window.tude) || void 0 === e ? void 0 : e.refreshAdsViaDivMappings),
                        isGptLoaded: void 0 !== (null === (i = null == window ? void 0 : window.googletag) || void 0 === i ? void 0 : i.pubads),
                        repeatCount: iO(),
                        adSlot: h.K.EMBEDED_FULL_SCREEN
                    }),
                    window.tude.requestInstreamPlayer({
                        divId: "prebid-wrapper-mid-roll-fullscreen",
                        code: "stream",
                        mode: "adOnly",
                        targeting: {
                            ads_loc: "video-auto-out"
                        },
                        playerOptions: {
                            aspectRatio: "16:9"
                        }
                    }).then(e => {
                        b.current = e,
                        Z(e)
                    }
                    ).catch(e => {}
                    ),
                    clearTimeout(t),
                    f(!1))
                }
                )
            }
            let B = () => {
                var e, i;
                O(),
                v(!0),
                iK(),
                (0,
                u.L9)("AdRequestedNg", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: E,
                    adHeight: S,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    pixelRatio: C,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: void 0 !== (null === (e = null == window ? void 0 : window.tude) || void 0 === e ? void 0 : e.refreshAdsViaDivMappings),
                    isGptLoaded: void 0 !== (null === (i = null == window ? void 0 : window.googletag) || void 0 === i ? void 0 : i.pubads),
                    repeatCount: iO(),
                    adSlot: h.K.EMBEDED_FULL_SCREEN
                }),
                window.tude.cmd.push( () => {
                    var e, i;
                    "p" !== (0,
                    c.Sf)() && ((0,
                    u.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: E,
                        adHeight: S,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        pixelRatio: C,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: void 0 !== (null === (e = null == window ? void 0 : window.tude) || void 0 === e ? void 0 : e.refreshAdsViaDivMappings),
                        isGptLoaded: void 0 !== (null === (i = null == window ? void 0 : window.googletag) || void 0 === i ? void 0 : i.pubads),
                        repeatCount: iO(),
                        adSlot: h.K.EMBEDED_FULL_SCREEN
                    }),
                    window.tude.requestInstreamPlayer({
                        divId: "prebid-wrapper-mid-roll-fullscreen",
                        code: "stream",
                        mode: "adOnly",
                        targeting: {
                            ads_loc: "video-auto-out"
                        },
                        playerOptions: {
                            aspectRatio: "16:9"
                        }
                    }).then(e => {
                        b.current = e,
                        Z(e)
                    }
                    ).catch(e => {}
                    ),
                    clearTimeout(t),
                    f(!1))
                }
                )
            }
              , W = () => {
                "visible" === document.visibilityState && w && (w = !1,
                "loadMidRoll" === y.current ? B() : "loadWrapperAgain" === y.current && N())
            }
            ;
            return (0,
            r.useEffect)( () => (document.addEventListener("visibilitychange", W),
            e = setTimeout( () => {
                "visible" === document.visibilityState ? B() : (w = !0,
                y.current = "loadMidRoll")
            }
            , m),
            t = setTimeout( () => {
                f(!0)
            }
            , m - 5e3),
            () => {
                clearTimeout(e),
                clearTimeout(i),
                clearTimeout(t),
                clearTimeout(j.current),
                document.removeEventListener("visibilitychange", W)
            }
            ), []),
            (0,
            o.jsxs)(o.Fragment, {
                children: [x && (0,
                o.jsx)(iL, {}), (0,
                o.jsx)(iP, {
                    className: "".concat(g ? "show" : "", " ").concat(d ? "started" : ""),
                    children: (0,
                    o.jsx)(iD, {
                        ref: l,
                        id: "prebid-wrapper-mid-roll-fullscreen",
                        className: "".concat(d ? "started" : "")
                    })
                })]
            })
        }
        );
        let iN = (0,
        g.iv)(["position:absolute;color:rgba(255,255,255,0.6);font-weight:500;font-size:14px;padding:4px 8px;background:", ";"], e => {
            let {theme: t} = e;
            return t.colors.black40
        }
        )
          , iB = g.ZP.div.withConfig({
            componentId: "sc-2daa3d32-0"
        })(["margin:0;opacity:0;.videoAd{opacity:0;}&.started{opacity:1;z-index:99;.videoAd{opacity:1;}}width:100%;height:100%;background-color:", ";display:flex;justify-content:center;align-items:center;z-index:-1;&.blurBG{background:", ";opacity:1;z-index:99;backdrop-filter:blur(12px);}"], e => {
            let {theme: t} = e;
            return t.colors.black
        }
        , e => {
            let {theme: t} = e;
            return t.colors.black70
        }
        )
          , iW = g.ZP.div.withConfig({
            componentId: "sc-2daa3d32-1"
        })(["position:relative;.adText{", " top:0px;right:100%;z-index:9;}.videoAd{z-index:1;}"], iN)
          , i_ = -1
          , iF = () => i_
          , iY = () => {
            i_ += 1
        }
        ;
        var iX = (0,
        r.memo)( () => {
            let {t: e} = (0,
            K.$)()
              , t = (0,
            a.I0)();
            (0,
            r.useContext)(k.x);
            let[i,n] = (0,
            r.useState)(!1)
              , [l,d] = (0,
            r.useState)(!1)
              , s = (0,
            a.v9)(e => e.play.orientation)
              , g = (0,
            r.useRef)(null)
              , v = (0,
            r.useRef)()
              , x = (0,
            r.useRef)(null)
              , f = (0,
            a.v9)(e => e.play.videoRef)
              , m = (0,
            a.v9)(e => e.play.isExperienceEnded)
              , w = (0,
            a.v9)(e => e.play.muted)
              , y = !1
              , b = 0
              , A = 0
              , j = e => Math.ceil(1.33 * e)
              , C = e => Math.ceil(e / 1.33)
              , E = 0
              , S = 0
              , T = window.devicePixelRatio
              , I = {}
              , R = () => {
                let e = Math.min(window.innerWidth, window.innerHeight)
                  , t = Math.max(window.innerWidth, window.innerHeight)
                  , i = s === p.cj.portrait ? e - 20 : t - 20
                  , n = s === p.cj.portrait ? t : e - 50
                  , o = j(n)
                  , r = n;
                o > i && (r = C(o = i)),
                g.current && (g.current.style.width = "".concat(o, "px"),
                g.current.style.height = "".concat(r, "px")),
                b = o,
                A = r
            }
              , L = () => {
                var e, t, i;
                null === (e = null == v ? void 0 : v.current) || void 0 === e || e.setVideoVolume(0),
                E = (null === (t = null == f ? void 0 : f.current) || void 0 === t ? void 0 : t.clientHeight) || 0,
                S = (null === (i = null == f ? void 0 : f.current) || void 0 === i ? void 0 : i.clientWidth) || 0;
                let {bids: n=[]} = window.pbjs.getBidResponses().stream || {}
                  , {bidder: o, cpm: r, currency: a, netRevenue: l, status: d, statusMessage: s, timeToRespond: c, ttl: p} = n[0] || {};
                I = {
                    bidder: o,
                    cpm: r,
                    currency: a,
                    netRevenue: l,
                    status: d,
                    statusMessage: s,
                    timeToRespond: c,
                    ttl: p
                },
                (0,
                u.L9)("AdDisplayed", Object.assign({
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: b,
                    adHeight: A,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: E,
                    androidHeight: S,
                    pixelRatio: T,
                    repeatCount: iF(),
                    adSlot: h.K.CONTEXTUAL_FULL_SCREEN
                }, I))
            }
              , D = () => {
                var e;
                n(!1),
                (null === (e = null == f ? void 0 : f.current) || void 0 === e ? void 0 : e.muted) && !w && (f.current.muted = !1),
                t({
                    type: P.Z.SET_EXPERIENCE_STATE,
                    payload: {
                        isExperienceEnded: !1
                    }
                }),
                d(!1)
            }
              , M = () => {
                var e, t;
                E = (null === (e = null == f ? void 0 : f.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                S = (null === (t = null == f ? void 0 : f.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                (0,
                u.L9)("AdNotFilled", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: b,
                    adHeight: A,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: E,
                    androidHeight: S,
                    pixelRatio: T,
                    repeatCount: iF(),
                    adSlot: h.K.CONTEXTUAL_FULL_SCREEN
                }),
                D()
            }
              , O = e => {
                e.on("adNoFill", () => {
                    M()
                }
                ).on("adReady", () => {
                    L()
                }
                ).on("adError", () => {
                    M()
                }
                ).on("adProgress", (e, t) => {
                    var i;
                    let {milestone: o} = t;
                    if ("complete" === o) {
                        if (y)
                            return;
                        D()
                    } else
                        "start" === o && (x.current && clearTimeout(x.current),
                        d(!1),
                        n(!0),
                        y = !1,
                        null === (i = null == v ? void 0 : v.current) || void 0 === i || i.setVideoVolume(0))
                }
                ).on("adSkipped", () => {
                    D(),
                    y = !0
                }
                )
            }
              , Z = () => {
                var e, t, i, n;
                R(),
                iY(),
                iY(),
                (0,
                u.L9)("AdRequestedNg", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: b,
                    adHeight: A,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: (null === (e = null == f ? void 0 : f.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                    androidHeight: (null === (t = null == f ? void 0 : f.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                    pixelRatio: T,
                    isTabVisible: "visible" === document.visibilityState,
                    isTudeLoaded: void 0 !== (null === (i = null == window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                    isGptLoaded: void 0 !== (null === (n = null == window ? void 0 : window.googletag) || void 0 === n ? void 0 : n.pubads),
                    repeatCount: iF(),
                    adSlot: h.K.CONTEXTUAL_FULL_SCREEN
                }),
                window.tude.cmd.push( () => {
                    var e, t, i, n;
                    "p" !== (0,
                    c.Sf)() && (E = (null === (e = null == f ? void 0 : f.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                    S = (null === (t = null == f ? void 0 : f.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                    (0,
                    u.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: b,
                        adHeight: A,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: E,
                        androidHeight: S,
                        pixelRatio: T,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: void 0 !== (null === (i = null == window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                        isGptLoaded: void 0 !== (null === (n = null == window ? void 0 : window.googletag) || void 0 === n ? void 0 : n.pubads),
                        repeatCount: iF(),
                        adSlot: h.K.CONTEXTUAL_FULL_SCREEN
                    }),
                    window.tude.requestInstreamPlayer({
                        divId: "prebid-wrapper-mid-roll-mobile",
                        code: "mid-roll",
                        mode: "adOnly",
                        targeting: {
                            ads_loc: "video-auto-out"
                        }
                    }).then(e => {
                        O(e)
                    }
                    ).catch(e => {}
                    ))
                }
                )
            }
            ;
            return (0,
            r.useEffect)( () => {
                var e;
                return m && (d(!0),
                x.current = setTimeout( () => {
                    d(!1),
                    t({
                        type: P.Z.SET_EXPERIENCE_STATE,
                        payload: {
                            isExperienceEnded: !1
                        }
                    })
                }
                , 4e3),
                R(),
                (null === (e = null == f ? void 0 : f.current) || void 0 === e ? void 0 : e.muted) === !1 && (f.current.muted = !0),
                Z()),
                () => {
                    x.current && clearTimeout(x.current)
                }
            }
            , [m]),
            (0,
            o.jsx)(iB, {
                className: "".concat(i ? "started " : "").concat(l ? "blurBG " : ""),
                children: (0,
                o.jsxs)(iW, {
                    ref: g,
                    children: [(0,
                    o.jsx)("div", {
                        className: "videoAd",
                        id: "prebid-wrapper-mid-roll-mobile"
                    }), i && (0,
                    o.jsx)("span", {
                        className: "adText",
                        children: e("ad")
                    })]
                })
            })
        }
        )
          , iH = i(64966)
          , iz = {
            src: "/_next/static/media/muted.cc92657a.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        }
          , iU = {
            src: "/_next/static/media/unmuted.cb7db131.svg",
            height: 24,
            width: 24,
            blurWidth: 0,
            blurHeight: 0
        };
        let iG = g.ZP.div.withConfig({
            componentId: "sc-3ef39637-0"
        })(["position:absolute;display:flex;justify-content:center;align-items:center;right:1px;bottom:", ";font-size:14px;color:", ";cursor:pointer;z-index:9;p:first-child{padding:2px 23px 2px 8px;background:", ";border:1px solid rgba(255,255,255,0.1);border-radius:", ";}&.hideText{p:first-child{display:none;}}img{width:24px;display:block;}&.isMobileMidroll{height:fit-content;width:fit-content;bottom:0px;left:calc(100% + 15px);p{margin:0px;}}"], e => {
            let {theme: t} = e;
            return t.spacing.base4
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            var t;
            let {theme: i} = e;
            return null === (t = i.colors) || void 0 === t ? void 0 : t.black
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius
        }
        )
          , iV = g.ZP.p.withConfig({
            componentId: "sc-3ef39637-1"
        })(["background:", ";border:1px solid rgba(255,255,255,0.1);border-radius:100%;padding:13px;padding-bottom:10px;position:relative;left:-15px;"], e => {
            var t;
            let {theme: i} = e;
            return null === (t = i.colors) || void 0 === t ? void 0 : t.black
        }
        );
        var iq = e => {
            let {adsMuted: t, handleVolume: i, isInteracted: n, isMobileMidroll: r} = e
              , {t: a} = (0,
            K.$)();
            return (0,
            o.jsxs)(iG, {
                className: "".concat(n ? "hideText " : "").concat(r ? "isMobileMidroll " : ""),
                children: [(0,
                o.jsx)("p", {
                    children: a((0,
                    c.tq)() ? "tapToUnmute" : "clickToUnmute")
                }), (0,
                o.jsx)(iV, {
                    onClick: i,
                    children: (0,
                    o.jsx)("img", {
                        alt: a(t ? "mutedSoundIcon" : "soundIcon"),
                        src: (0,
                        _.jW)(t ? iz : iU)
                    })
                })]
            })
        }
          , iJ = i(85470)
          , iQ = i(6284)
          , i$ = i(25751)
          , i0 = i(46309);
        let i1 = (0,
        g.F4)(["0%{left:0;width:4px;}50%{left:50%;width:32px;}100%{width:4px;left:calc(100% - 4px);}"])
          , i2 = g.ZP.div.withConfig({
            componentId: "sc-3d1fd0c3-0"
        })(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);.hide{visibility:hidden;}.preroll-wrapper-videoplayer-dimensions{@media only screen and (max-width:600px){body.landscape &{width:100%;height:100%;}}}"])
          , i5 = g.ZP.div.withConfig({
            componentId: "sc-3d1fd0c3-1"
        })(["position:absolute;top:0;left:0;right:0;bottom:0;"])
          , i4 = g.ZP.div.withConfig({
            componentId: "sc-3d1fd0c3-2"
        })(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"]);
        g.ZP.img.withConfig({
            componentId: "sc-3d1fd0c3-3"
        })(["margin-bottom:", ";width:100%;display:flex;flex-shrink:0;border-radius:", ";"], e => {
            let {theme: t} = e;
            return t.spacing.base2
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius
        }
        ),
        g.ZP.div.withConfig({
            componentId: "sc-3d1fd0c3-4"
        })(["width:64px;right:", ";position:absolute;z-index:9;top:", ";transition:all 0.5s ease-in-out;display:flex;flex-direction:column;&.animateSmall{right:5px;top:5px;width:40px;img{margin-bottom:0;}.loadingBar{display:none;}}"], e => {
            let {theme: t} = e;
            return t.spacing.base6
        }
        , e => {
            let {theme: t} = e;
            return t.spacing.base6
        }
        ),
        g.ZP.div.withConfig({
            componentId: "sc-3d1fd0c3-5"
        })(["position:relative;width:100%;background:rgba(0,0,0,0.8);height:4px;border-radius:", ";span{position:absolute;left:0;top:0;height:100%;background:", ";border-radius:10px;transition:1s all ease-in-out;animation-name:", ";animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:linear;animation-direction:alternate;}"], e => {
            let {theme: t} = e;
            return t.border.radius3
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , i1),
        g.ZP.div.withConfig({
            componentId: "sc-3d1fd0c3-6"
        })(["position:absolute;display:flex;justify-content:center;align-items:center;right:1px;bottom:", ";font-size:14px;color:", ";cursor:pointer;z-index:9;p:first-child{padding:2px 23px 2px 8px;background:", ";border:1px solid rgba(255,255,255,0.1);border-radius:", ";}&.hideText{p:first-child{display:none;}}img{width:24px;display:block;}"], e => {
            let {theme: t} = e;
            return t.spacing.base4
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            var t;
            let {theme: i} = e;
            return null === (t = i.colors) || void 0 === t ? void 0 : t.black
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius
        }
        ),
        g.ZP.p.withConfig({
            componentId: "sc-3d1fd0c3-7"
        })(["background:", ";border:1px solid rgba(255,255,255,0.1);border-radius:100%;padding:13px;padding-bottom:10px;position:relative;left:-15px;"], e => {
            var t;
            let {theme: i} = e;
            return null === (t = i.colors) || void 0 === t ? void 0 : t.black
        }
        );
        let i9 = g.ZP.div.withConfig({
            componentId: "sc-3d1fd0c3-8"
        })(['position:absolute;top:0;right:0;width:50px;height:40px;background:rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.2);cursor:pointer;&::after,&::before{content:"";width:1px;height:15px;position:absolute;background-color:rgba(255,255,255,0.8);top:50%;}&::before{left:50%;transform:translate(-50%,-50%) rotate(-40deg);}&::after{right:50%;transform:translate(-50%,-50%) rotate(40deg);}'])
          , i3 = g.ZP.div.withConfig({
            componentId: "sc-3d1fd0c3-9"
        })(["position:absolute;top:0;left:0;height:100%;width:100%;background-color:", ";backdrop-filter:blur(10px);visibility:hidden;&.adVisible{z-index:101;visibility:visible;}&.desktop{position:fixed;}"], e => {
            let {theme: t} = e;
            return t.colors.black70
        }
        )
          , i6 = g.ZP.div.withConfig({
            componentId: "sc-3d1fd0c3-10"
        })(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;justify-content:center;"])
          , i7 = (0,
        g.ZP)(W.lU).withConfig({
            componentId: "sc-3d1fd0c3-11"
        })(["color:", ";margin-top:10px;"], e => {
            let {theme: t} = e;
            return t.colors.white70
        }
        )
          , i8 = -1
          , ne = () => i8
          , nt = () => {
            i8 += 1
        }
        ;
        var ni = () => {
            let[e,t] = (0,
            r.useState)(!1)
              , [i,n] = (0,
            r.useState)(!1)
              , [d,s] = (0,
            r.useState)(!1)
              , [g,v] = (0,
            r.useState)(4)
              , [x,f] = (0,
            r.useState)(!0)
              , [w,y] = (0,
            r.useState)(!1)
              , b = (0,
            a.v9)(e => e.play.orientation)
              , A = (0,
            a.v9)(e => e.ads.fallbackDisplayed)
              , j = (0,
            a.v9)(e => e.ads.isLoadingRewardedAds)
              , C = (0,
            a.v9)(e => e.ads.rewardedAdsSDK)
              , E = (0,
            a.v9)(e => e.ads.rewardedAdType)
              , S = (0,
            a.v9)(e => e.ads.sdkType)
              , T = (0,
            a.v9)(e => e.play.muted)
              , I = (0,
            a.v9)(e => e.play.videoRef)
              , k = (0,
            r.useRef)(null)
              , R = (0,
            r.useRef)(null)
              , L = (0,
            r.useRef)(null)
              , P = (0,
            r.useRef)(null)
              , D = (0,
            r.useRef)(null)
              , M = (0,
            r.useRef)()
              , O = (0,
            r.useRef)(!1)
              , K = (0,
            r.useRef)(0)
              , Z = (0,
            r.useRef)(0)
              , N = (0,
            r.useRef)(0)
              , B = (0,
            r.useRef)(0)
              , W = (0,
            r.useRef)({})
              , _ = (0,
            a.I0)()
              , F = window.devicePixelRatio
              , Y = e => Math.ceil(1.33 * e)
              , X = e => Math.ceil(e / 1.33)
              , H = (e, t) => {
                K.current = e,
                Z.current = t
            }
              , z = () => {
                let e, t;
                (0,
                c.tq)() ? (e = b === p.cj.portrait ? window.innerWidth - 20 : window.innerHeight - 20,
                t = b === p.cj.portrait ? window.innerHeight - 100 : window.innerWidth) : (e = window.innerWidth - 20,
                t = window.innerHeight);
                let i = Y(t)
                  , n = t;
                i > e && (n = X(i = e)),
                k.current && (k.current.style.width = "".concat(i, "px"),
                k.current.style.height = "".concat(n, "px")),
                H(i, n)
            }
              , U = e => {
                let t = S ? "".concat(e, "::").concat(S) : e;
                (0,
                iH.f)(t)
            }
              , G = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                y(!1),
                t(!1),
                s(!1),
                e && (E === eh.fzi.rewarded ? ((0,
                u.L9)("RewardEarned"),
                U("ADS::userEarnedReward"),
                U("ADS::adsshowstatus::dismiss")) : E === eh.fzi.interstitial && U("ADS::interstitialAdshowstatus::dismiss"),
                (0,
                ek.GO)()),
                _({
                    type: l.Z.UPDATE_REWARDED_SDK_STATE,
                    payload: {
                        rewardedAdsSDK: !1,
                        rewardedAdType: null,
                        fallbackDisplayed: !1
                    }
                }),
                !T && I && I.current && (I.current.muted = !1)
            }
              , V = (e, i) => {
                var n, o;
                N.current = (null === (n = null == I ? void 0 : I.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                B.current = (null === (o = null == I ? void 0 : I.current) || void 0 === o ? void 0 : o.clientWidth) || 0,
                y(!1),
                clearTimeout(R.current),
                (0,
                u.L9)(i ? "AdRequestTimeout" : "AdNotFilled", {
                    adContext: "Ingame",
                    adType: "Video",
                    adWidth: K.current,
                    adHeight: Z.current,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: N.current,
                    androidHeight: B.current,
                    pixelRatio: F,
                    repeatCount: ne(),
                    adSlot: h.K.REWARDED_FULL_SCREEN,
                    reason: e
                }),
                (0,
                ek.zr)(!1),
                _({
                    type: l.Z.UPDATE_REWARDED_SDK_STATE,
                    payload: {
                        fallbackRewardedAdTimeout: setTimeout( () => {
                            (0,
                            ek.zr)(!0),
                            E === eh.fzi.rewarded ? U("ADS::rewardedAdLoad::fail") : E === eh.fzi.interstitial && U("ADS::interstitialAdLoad::fail"),
                            G(!1),
                            (0,
                            u.L9)("AdRequestTimeout", {
                                adContext: "Ingame",
                                adType: "Display",
                                adWidth: 300,
                                adHeight: 250,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                pixelRatio: window.devicePixelRatio,
                                slotId: "div-gpt-ad-rewarded",
                                repeatCount: (0,
                                i0.sq)(),
                                adSlot: h.K.REWARDED_FALLBACK_FULL_SCREEN
                            })
                        }
                        , 5e3)
                    }
                }),
                t(!0)
            }
              , q = e => {
                e.on("adNoFill", () => {
                    V("adNoFill")
                }
                ).on("adError", () => {
                    V("adError")
                }
                ).on("adReady", () => {
                    var e, t, i;
                    f(!1),
                    null === (e = null == M ? void 0 : M.current) || void 0 === e || e.setVideoVolume(1),
                    W.current = window.pbjs.getBidResponses(),
                    N.current = (null === (t = null == I ? void 0 : I.current) || void 0 === t ? void 0 : t.clientHeight) || 0,
                    B.current = (null === (i = null == I ? void 0 : I.current) || void 0 === i ? void 0 : i.clientWidth) || 0,
                    clearTimeout(R.current),
                    R.current = setTimeout( () => {
                        var e;
                        null === (e = null == M ? void 0 : M.current) || void 0 === e || e.closePlayer(),
                        V("adReadyTimeout", !0)
                    }
                    , 1e4)
                }
                ).on("adSkipped", () => {
                    G(),
                    O.current = !0
                }
                ).on("adProgress", (e, t) => {
                    var i;
                    let {milestone: n} = t;
                    if ("complete" === n) {
                        if (y(!1),
                        O.current)
                            return;
                        G()
                    } else if ("start" === n) {
                        _({
                            type: l.Z.UPDATE_ADS_STATE,
                            payload: {
                                isLoadingRewardedAds: !1
                            }
                        }),
                        clearTimeout(R.current),
                        E === eh.fzi.rewarded ? U("ADS::adsshowstatus::visible") : E === eh.fzi.interstitial && U("ADS::interstitialAdshowstatus::visible"),
                        f(!1),
                        y(!0),
                        null === (i = null == M ? void 0 : M.current) || void 0 === i || i.setVideoVolume(1),
                        O.current = !1;
                        let {bids: e=[]} = W.current.stream || {}
                          , {bidder: t, cpm: n, currency: o, netRevenue: r, status: a, statusMessage: d, timeToRespond: s, ttl: c} = e[0] || {};
                        (0,
                        u.L9)("AdDisplayed", Object.assign({
                            adContext: "Ingame",
                            adType: "Video",
                            adWidth: K.current,
                            adHeight: Z.current,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: N.current,
                            androidHeight: B.current,
                            pixelRatio: F,
                            repeatCount: ne(),
                            adSlot: h.K.REWARDED_FULL_SCREEN
                        }, {
                            bidder: t,
                            cpm: n,
                            currency: o,
                            netRevenue: r,
                            status: a,
                            statusMessage: d,
                            timeToRespond: s,
                            ttl: c
                        }))
                    }
                }
                )
            }
              , J = () => {
                var e, t, i, n;
                return e = void 0,
                t = void 0,
                i = void 0,
                n = function*() {
                    var e, t, i, n;
                    z(),
                    clearTimeout(R.current),
                    R.current = setTimeout( () => {
                        var e;
                        try {
                            null === (e = null == M ? void 0 : M.current) || void 0 === e || e.closePlayer()
                        } catch (e) {}
                        V("initTimeout", !0)
                    }
                    , 5e3),
                    nt(),
                    (0,
                    u.L9)("AdRequestedNg", {
                        adContext: "Ingame",
                        adType: "Video",
                        adWidth: null == K ? void 0 : K.current,
                        adHeight: null == Z ? void 0 : Z.current,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: (null === (e = null == I ? void 0 : I.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                        androidHeight: (null === (t = null == I ? void 0 : I.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                        pixelRatio: F,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: void 0 !== (null === (i = null == window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                        isGptLoaded: void 0 !== (null === (n = null == window ? void 0 : window.googletag) || void 0 === n ? void 0 : n.pubads),
                        repeatCount: ne(),
                        adSlot: h.K.REWARDED_FULL_SCREEN
                    }),
                    window.tude.cmd.push( () => {
                        var e, t, i, n;
                        "p" !== (0,
                        c.Sf)() && (N.current = (null === (e = null == I ? void 0 : I.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                        B.current = (null === (t = null == I ? void 0 : I.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                        (0,
                        u.L9)("AdRequested", {
                            adContext: "Ingame",
                            adType: "Video",
                            adWidth: K.current,
                            adHeight: Z.current,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: N.current,
                            androidHeight: B.current,
                            pixelRatio: F,
                            isTabVisible: "visible" === document.visibilityState,
                            isTudeLoaded: void 0 !== (null === (i = null == window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                            isGptLoaded: void 0 !== (null === (n = null == window ? void 0 : window.googletag) || void 0 === n ? void 0 : n.pubads),
                            repeatCount: ne(),
                            adSlot: h.K.REWARDED_FULL_SCREEN
                        }),
                        window.tude.requestInstreamPlayer({
                            divId: "rewarded-wrapper",
                            code: "stream",
                            mode: "adOnly",
                            targeting: {
                                ads_loc: "video-ctp-rw"
                            }
                        }).then(e => {
                            M.current = e,
                            q(e)
                        }
                        ).catch(e => {}
                        ),
                        !T && I && I.current && (I.current.muted = !0))
                    }
                    )
                }
                ,
                new (i || (i = Promise))(function(o, r) {
                    function a(e) {
                        try {
                            d(n.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function l(e) {
                        try {
                            d(n.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function d(e) {
                        var t;
                        e.done ? o(e.value) : ((t = e.value)instanceof i ? t : new i(function(e) {
                            e(t)
                        }
                        )).then(a, l)
                    }
                    d((n = n.apply(e, t || [])).next())
                }
                )
            }
            ;
            return (0,
            r.useEffect)( () => (w && ((0,
            c.tq)() && b === p.cj.landscape ? P.current = setTimeout( () => {
                g >= 1 ? v(g - 1) : P.current && clearTimeout(P.current),
                n(!0)
            }
            , 1e3) : n(!0)),
            () => {
                P.current && clearTimeout(P.current)
            }
            ), [w, g]),
            (0,
            r.useEffect)( () => {
                if (A) {
                    E === eh.fzi.rewarded ? U("ADS::adsshowstatus::visible") : E === eh.fzi.interstitial && U("ADS::interstitialAdshowstatus::visible");
                    let e = E === eh.fzi.rewarded ? 5e3 : 1e4;
                    D.current = setTimeout( () => {
                        s(!0)
                    }
                    , e),
                    L.current = setTimeout( () => {
                        G()
                    }
                    , e + 1e4)
                } else
                    e && G(!1);
                return () => {
                    clearTimeout(L.current),
                    clearTimeout(D.current)
                }
            }
            , [A]),
            (0,
            r.useEffect)( () => {
                if ("visible" !== document.visibilityState) {
                    E === eh.fzi.rewarded ? ((0,
                    ek.GO)(),
                    U("ADS::rewardedAdLoad::fail")) : E === eh.fzi.interstitial && ((0,
                    ek.GO)(),
                    U("ADS::interstitialAdLoad::fail")),
                    G(!1);
                    return
                }
                if (e) {
                    if ("p" === (0,
                    c.Sf)())
                        return;
                    (0,
                    is.Bd)(),
                    (0,
                    is.JD)("div-gpt-ad-rewarded", "div-gpt-ad-rewarded"),
                    window.tude.cmd.push( () => {
                        "p" !== (0,
                        c.Sf)() && ((0,
                        is.Ry)(),
                        (0,
                        is.JD)("div-gpt-ad-rewarded", "div-gpt-ad-rewarded", "2"),
                        window.tude.refreshAdsViaDivMappings([{
                            divId: "div-gpt-ad-rewarded",
                            baseDivId: "pb-slot-display-fb",
                            targeting: {
                                ads_loc: "display-fallback"
                            }
                        }]))
                    }
                    )
                }
            }
            , [e]),
            (0,
            r.useEffect)( () => {
                C && E && J()
            }
            , [C]),
            (0,
            r.useEffect)( () => {
                C && _({
                    type: l.Z.UPDATE_ADS_STATE,
                    payload: {
                        isLoadingRewardedAds: !0
                    }
                })
            }
            , [C]),
            (0,
            o.jsxs)(i3, {
                className: "".concat(C ? "adVisible " : "").concat((0,
                c.tq)() ? "" : "desktop "),
                children: [!e && w && (0,
                o.jsx)(m.Z, {
                    animateSmall: !0
                }), (0,
                o.jsx)(i2, {
                    className: e ? "hide" : "",
                    ref: k,
                    id: "rewarded-wrapper"
                }), w && !e && (0,
                o.jsx)(iq, {
                    isInteracted: i,
                    handleVolume: () => {
                        var e;
                        n(!0),
                        (null === (e = null == M ? void 0 : M.current) || void 0 === e ? void 0 : e.setVideoVolume) && M.current.setVideoVolume(x ? 1 : 0),
                        f(!x)
                    }
                    ,
                    adsMuted: x
                }), e && C && (0,
                o.jsxs)(i5, {
                    children: [(0,
                    o.jsx)(i4, {
                        id: "div-gpt-ad-rewarded"
                    }), d && (0,
                    o.jsx)(i9, {
                        onClick: () => G()
                    })]
                }), j && (0,
                o.jsxs)(i6, {
                    children: [(0,
                    o.jsx)(iJ.Z, {
                        width: "32px",
                        trackSize: "2px",
                        trackColor: iQ.qm.colors.white,
                        movingColor: iQ.qm.colors.white40
                    }), (0,
                    o.jsxs)(i7, {
                        children: [(0,
                        i$.t)("loading"), "..."]
                    })]
                })]
            })
        }
          , nn = i(23469)
          , no = i(26910)
          , nr = i(64789);
        let na = e => {
            let {str: t="", enter: i=0, del: n=0, composing: o=!1} = e
              , r = new ArrayBuffer(4 + 2 * t.length)
              , a = new Uint8Array(r);
            a[0] = 103,
            a[1] = n,
            a[2] = i,
            a[3] = Number(o);
            let l = 4;
            for (let e = 0; e < t.length; e += 1) {
                let i = new Uint16Array([t[e].charCodeAt(0)])
                  , n = new Uint8Array(i.buffer,i.byteOffset,i.byteLength);
                a[l] = n[0],
                a[l += 1] = n[1],
                l += 1
            }
            (0,
            eN.fr)(r)
        }
        ;
        var nl = () => {
            let[e,t] = (0,
            r.useState)(!1)
              , i = no.fl.lastX + 20
              , n = no.fl.lastY + 20
              , [a,l] = (0,
            r.useState)(i)
              , [d,s] = (0,
            r.useState)(n)
              , c = (0,
            r.useRef)(null);
            (0,
            r.useEffect)( () => {
                (null == c ? void 0 : c.current) && c.current.focus()
            }
            , [c]);
            let u = (0,
            r.useCallback)(e => {
                t(!0),
                na({
                    del: 0,
                    composing: !0
                })
            }
            , [e])
              , p = (0,
            r.useCallback)(t => {
                e && na({
                    str: t.data,
                    composing: e
                })
            }
            , [e])
              , h = (0,
            r.useCallback)(e => {
                nn.un.ended = !0,
                nr.q$.justEnded = !0,
                t(!1),
                na({
                    str: e.data,
                    composing: !1
                })
            }
            , [e]);
            return (0,
            o.jsx)("input", {
                ref: c,
                style: {
                    position: "absolute",
                    zIndex: 1e6,
                    left: a,
                    top: d,
                    opacity: 0
                },
                onBlur: e => {
                    setTimeout( () => {
                        var t, i;
                        nn.be.isOpen && !R.default.getState().play.uiTextfieldInFocus && (null === (i = null === (t = null == document ? void 0 : document.activeElement) || void 0 === t ? void 0 : t.className) || void 0 === i ? void 0 : i.indexOf("_hj-")) === -1 && e.target.focus()
                    }
                    , 100)
                }
                ,
                onCompositionStart: u,
                onCompositionUpdate: p,
                onCompositionEnd: h,
                type: "text",
                autoComplete: "off"
            })
        }
          , nd = i(70594)
          , ns = i(89755)
          , nc = i.n(ns)
          , nu = i(38448)
          , np = i(75952)
          , nh = e => {
            var t, i, n, l, d, h, g, v, x;
            let {type: f=eh.whh.INACTIVE, heading: m=""} = e
              , {t: w, i18n: y} = (0,
            K.$)()
              , b = (0,
            r.useContext)(k.x)
              , A = null === (n = null === (i = null === (t = null === s.default || void 0 === s.default ? void 0 : s.default.appInfo) || void 0 === t ? void 0 : t.playFeFeatures) || void 0 === i ? void 0 : i.uiConfig) || void 0 === n ? void 0 : n.sessionModal
              , j = null === (h = null === (d = null === (l = null === s.default || void 0 === s.default ? void 0 : s.default.appInfo) || void 0 === l ? void 0 : l.playFeFeatures) || void 0 === d ? void 0 : d.uiConfig) || void 0 === h ? void 0 : h.enableSupportWidget
              , C = null === (x = null === (v = null === (g = s.default.appInfo) || void 0 === g ? void 0 : g.playFeFeatures) || void 0 === v ? void 0 : v.tryAndDownload) || void 0 === x ? void 0 : x.isEnabled
              , E = (0,
            a.v9)(e => e.play.orientation)
              , S = (0,
            c.tq)();
            (0,
            a.I0)();
            let T = (0,
            e3.Pr)()
              , I = (0,
            c.U1)(T);
            return (0,
            r.useEffect)( () => {
                (0,
                u.L9)("SessionCompletedScreen", {
                    error: "SessionModal-".concat(f),
                    errorName: f,
                    errorDescription: "trial-enabled".concat(C),
                    type: f
                }),
                (0,
                u.UY)(!1),
                (0,
                nu.Z)(),
                C && (0,
                u.L9)(eh.S5z, {
                    element: "InactivityScreen",
                    action: "Displayed",
                    group: "TryAndDownload"
                })
            }
            , []),
            (0,
            o.jsx)(J.Z, {
                showOverlay: !(0,
                c.nI)(),
                overlayStyles: eb,
                className: S && E === p.cj.portrait ? "mobilePortrait" : "",
                style: S && E === p.cj.portrait ? {
                    margin: "auto 8.75vmin"
                } : {},
                children: (0,
                o.jsxs)(eA, {
                    children: [(null == A ? void 0 : A.enableGameTile) && (0,
                    o.jsx)("div", {
                        className: "tile",
                        children: (0,
                        o.jsx)(nc(), {
                            src: null == b ? void 0 : b.media.tile,
                            alt: b.appName,
                            width: 160,
                            height: 215,
                            quality: 80,
                            loader: _.O0
                        })
                    }), (0,
                    o.jsxs)(eC, {
                        className: "partnerSessionEndInfo ".concat(y.language),
                        children: [(0,
                        o.jsx)(W.T4, {
                            className: (null == A ? void 0 : A.enableGameTile) ? "" : "textCenter",
                            children: w("".concat(m || f, "Head").concat(I && f === eh.whh.MIGRATED ? "Mondia" : ""))
                        }), (0,
                        o.jsx)(W.kk, {
                            className: (null == A ? void 0 : A.enableGameTile) ? "" : "textCenter",
                            style: {
                                margin: I ? "0" : ""
                            },
                            children: I && f === eh.whh.MIGRATED ? w("migratedMsgMondia") : (null == A ? void 0 : A.enableRestartButton) ? w("".concat(f, "Msg")) : "ja" === y.language ? "ゲームを再開する場合は、このページを再読み込みしてください。" : w("refreshMsg")
                        }), !I && (0,
                        o.jsxs)(eE, {
                            style: S ? {
                                gap: "8px"
                            } : {},
                            children: [(null == A ? void 0 : A.enableRestartButton) && (0,
                            o.jsx)(ew.z, {
                                onClick: () => {
                                    let e = "TryAndDownload";
                                    C ? ((0,
                                    u.L9)(eh.S5z, {
                                        element: "InactivityScreen",
                                        action: "ContinuePlayingClicked",
                                        group: e
                                    }),
                                    setTimeout( () => {
                                        (0,
                                        np.iI)(e)
                                    }
                                    , 500)) : (0,
                                    np.iI)(e)
                                }
                                ,
                                variant: "primary",
                                text: w(f === eh.whh.COMPLETE ? "restart" : "continuePlayingHere")
                            }), j && (0,
                            o.jsx)(eL.Z, {
                                name: "support",
                                size: 24,
                                onClick: () => {
                                    (0,
                                    eR.B)(f)
                                }
                            })]
                        })]
                    })]
                })
            })
        }
          , ng = {
            src: "/_next/static/media/idleScreenLogo.26cffb49.png",
            height: 360,
            width: 360,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEVMaXG6OZEdGza75GTxRKb8PKE1aYYJAyH/zjv/SbVw4f9apm5i0fW942X/NaH/Q6b5QqLlidbC6WcoLC7G7mafu1n6RKssLTD9Q6UDAB37Q6c+ZpRMRF0wJUj/Ral+IWCHH2JNcUkTDjNUXkFyZYYOAAAAIXRSTlMA/f2Tbib8/gH+K3FO6RNIijLG/i269tmr1snJ+/nZ1vhWJ94WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQ0lEQVR4nCXBxwGAIBAEwAWB2zNhztn+e/ThDAjnQQJEWecpCEa3hpARlZpH5E4w6GW3vS2wqBErbwM/Hec89h2I3wdgPALoH2n/RwAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        }
          , nv = {
            src: "/_next/static/media/bulbIcon.c6ab3e9f.svg",
            height: 17,
            width: 16,
            blurWidth: 0,
            blurHeight: 0
        };
        let nx = g.ZP.div.withConfig({
            componentId: "sc-6773b3c3-0"
        })(["display:flex;justify-content:center;align-items:center;gap:4%;padding:24px;.modalLogo{flex-shrink:0;}"])
          , nf = g.ZP.div.withConfig({
            componentId: "sc-6773b3c3-1"
        })(["flex-basis:35%;flex-shrink:0;img{max-width:100%;height:auto;}"])
          , nm = g.ZP.div.withConfig({
            componentId: "sc-6773b3c3-2"
        })(["position:relative;button{width:100%;margin-top:24px;}h4{font-weight:600;font-size:24px;color:", ";}h6{font-weight:400;font-size:16px;color:", ";}.alert-msg{margin-top:12px;font-weight:400;font-size:12px;color:", ";}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , nw = g.ZP.div.withConfig({
            componentId: "sc-6773b3c3-3"
        })(["display:flex;align-items:center;justify-content:center;margin-top:30px;.bulbIcon{margin-right:4px;flex-shrink:0;}"]);
        var ny = e => {
            let {logo: t, heading: i, text: n, modalInfoText: r, buttonText: l, infoText: d, proTip: s} = e
              , {t: c} = (0,
            K.$)()
              , u = (0,
            a.I0)();
            return (0,
            o.jsxs)(J.Z, {
                children: [(0,
                o.jsxs)(nx, {
                    children: [(0,
                    o.jsx)(nf, {
                        children: (0,
                        o.jsx)("img", {
                            alt: "now.gg ".concat(c("logo")),
                            src: (0,
                            _.jW)(ng)
                        })
                    }), (0,
                    o.jsxs)(nm, {
                        children: [(0,
                        o.jsx)(W.T4, {
                            bold: !0,
                            children: c(i)
                        }), (0,
                        o.jsx)(W.T6, {
                            white: !0,
                            children: c(n)
                        }), r && (0,
                        o.jsx)(W.T6, {
                            white: !0,
                            style: {
                                marginTop: 20
                            },
                            children: c(r)
                        }), l && (0,
                        o.jsx)(ew.z, {
                            variant: "primary",
                            onClick: () => {
                                u({
                                    type: P.Z.MODAL_STATUS,
                                    payload: {
                                        inactivityModal: !1
                                    }
                                })
                            }
                            ,
                            text: c(l)
                        }), d && (0,
                        o.jsx)(W.kk, {
                            white: !0,
                            center: !0,
                            className: "alert-msg",
                            children: c(d)
                        })]
                    })]
                }), s && (0,
                o.jsxs)(nw, {
                    children: [(0,
                    o.jsx)("img", {
                        className: "bulbIcon",
                        alt: "".concat(c("proTipLogo")),
                        src: (0,
                        _.jW)(nv),
                        height: 16,
                        width: 16
                    }), (0,
                    o.jsx)(W.T6, {
                        white: !0,
                        children: c(s)
                    })]
                })]
            })
        }
          , nb = i(14503);
        let nA = e => {
            let t = (0,
            r.useRef)();
            return (0,
            r.useEffect)( () => {
                t.current = e
            }
            ),
            t.current
        }
        ;
        var nj = () => {
            let[e,t] = (0,
            r.useState)(navigator.onLine)
              , i = () => {
                t(navigator.onLine)
            }
            ;
            return (0,
            r.useEffect)( () => (window.addEventListener("online", i),
            window.addEventListener("offline", i),
            () => {
                window.removeEventListener("online", i),
                window.removeEventListener("offline", i)
            }
            ), []),
            e
        }
        ;
        let nC = g.ZP.div.withConfig({
            componentId: "sc-32ab44d9-0"
        })(["position:absolute;top:0;pointer-events:none;left:0;right:0;text-align:center;z-index:13;"])
          , nE = g.ZP.p.withConfig({
            componentId: "sc-32ab44d9-1"
        })(["font-size:14px;background:#f9edbe;border:1px solid #f0c36d;padding:4px 12px;border-radius:4px;margin:0;display:inline-block;transition:background-color 0.2s ease-out;"]);
        var nS = () => {
            let[e,t] = (0,
            r.useState)(!1)
              , i = nj()
              , n = nA(i)
              , {t: a} = (0,
            K.$)();
            return (0,
            r.useEffect)( () => {
                "boolean" == typeof i && !n && i && setTimeout( () => {
                    t(!1)
                }
                , 2e3),
                i || t(!0)
            }
            , [i]),
            (0,
            o.jsx)(nC, {
                children: e ? (0,
                o.jsx)(nE, {
                    style: {
                        background: i ? "#31770a" : "#f9edbe",
                        color: i ? "#fff" : "#000",
                        borderColor: i ? "#6db346" : "#f0c36d"
                    },
                    children: a(i ? "connected" : "networkLost")
                }) : null
            })
        }
          , nT = i(21240);
        let nI = (0,
        g.F4)(["0%{opacity:0;}33.33%{opacity:1;}49.66%{opacity:1;}66.67%{opacity:1;}83.33%{opacity:1;}100%{opacity:1;}"])
          , nk = (0,
        g.F4)(["0%{transform:rotate(0deg);left:0px;}33.33%{transform:rotate(0deg);left:0px;}49.66%{transform:rotate(-30deg);left:-7px;}66.67%{transform:rotate(0deg);left:0px;}83.33%{transform:rotate(30deg);left:7px;}100%{transform:rotate(0deg);left:0px;}"])
          , nR = g.ZP.div.withConfig({
            componentId: "sc-1a48bbf7-0"
        })(["display:flex;position:absolute;width:fit-content;height:40px;transition:all 0.5s ease-in-out;left:50%;padding:9.5px 16px 9.5px 22px;box-sizing:border-box;transform:translateX(-50%);background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.2);font-style:normal;font-weight:normal;font-size:14px;line-height:150%;z-index:2;&.slideUp{top:-20px;opacity:0;}&.slideDown{top:70px;opacity:1;}"])
          , nL = g.ZP.div.withConfig({
            componentId: "sc-1a48bbf7-1"
        })(["position:relative;width:18px;height:20px;animation-name:", ";animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:2s;color:white;&:after{position:absolute;width:4px;height:6px;border-radius:0px 100% 0px 0px;background:", ';content:"";top:2px;right:4px;animation-name:', ";animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:2s;opacity:0;}"], nk, e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , nI)
          , nP = g.ZP.p.withConfig({
            componentId: "sc-1a48bbf7-2"
        })(["margin-left:22px;color:", ";"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        );
        var nD = e => {
            let {videoElm: t} = e
              , i = (0,
            a.I0)()
              , [n,l] = (0,
            r.useState)(!1)
              , [d,s] = (0,
            r.useState)(!1)
              , {t: c} = (0,
            K.$)()
              , u = () => {
                l(!1),
                setTimeout( () => {
                    i({
                        type: P.Z.ROBLOX_TOAST,
                        payload: {
                            robloxToast: !1
                        }
                    })
                }
                , 500)
            }
              , p = () => {
                u()
            }
              , h = () => {
                let e, i;
                let n = !1
                  , o = t => {
                    (3 === t.which || 2 === t.button) && (n = !0,
                    e = t.pageX,
                    i = t.pageY)
                }
                  , r = e => {
                    e.preventDefault()
                }
                  , a = l => {
                    let d = Math.abs(l.pageX - e)
                      , s = Math.abs(l.pageY - i);
                    n && (n = !1,
                    (d > 6 || s > 6) && (p(),
                    t.current && (t.current.removeEventListener("contextmenu", r),
                    t.current.removeEventListener("mousedown", o),
                    t.current.removeEventListener("mouseup", a))))
                }
                ;
                t.current && (t.current.addEventListener("contextmenu", r),
                t.current.addEventListener("mousedown", o),
                t.current.addEventListener("mouseup", a))
            }
            ;
            return (0,
            r.useEffect)( () => {
                h(),
                l(!0),
                setTimeout( () => {
                    s(!0)
                }
                , 5e3),
                setTimeout( () => {
                    u()
                }
                , 3e4)
            }
            , []),
            (0,
            r.useEffect)( () => {
                if (n) {
                    let e = localStorage.getItem("robloxToastViewCount") || "0";
                    localStorage.setItem("robloxToastViewCount", (+e + 1).toString()),
                    R.default.dispatch({
                        type: nT.Z.ROBLOX_TOAST_UPDATE,
                        payload: {
                            lastRobloxToastDate: new Date().toDateString()
                        }
                    })
                }
            }
            , [n]),
            (0,
            o.jsxs)(nR, {
                className: "".concat(n ? "slideDown" : "slideUp"),
                children: [(0,
                o.jsx)(nL, {
                    className: "robloxImgContainer",
                    children: (0,
                    o.jsx)(eL.Z, {
                        name: "mouse",
                        size: 20
                    })
                }), (0,
                o.jsx)(nP, {
                    children: c("robloxToastMsg")
                }), d && (0,
                o.jsx)("span", {
                    style: {
                        marginLeft: "12px",
                        marginTop: "2px",
                        cursor: "pointer"
                    },
                    children: (0,
                    o.jsx)("img", {
                        alt: "",
                        src: (0,
                        _.jW)(eu.Z),
                        onClick: u
                    })
                })]
            })
        }
          , nM = i(19279)
          , nO = i(23279)
          , nK = i.n(nO)
          , nZ = () => {
            let[e,t] = (0,
            r.useState)({
                width: 0,
                height: 0
            });
            return (0,
            r.useEffect)( () => {
                let e = nK()( () => {
                    t({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }
                , 100);
                return window.addEventListener("resize", e),
                e(),
                () => window.removeEventListener("resize", e)
            }
            , []),
            e
        }
          , nN = i(36588)
          , nB = i(66418);
        let nW = g.ZP.div.withConfig({
            componentId: "sc-2d46b789-0"
        })(["filter:", ";width:", ";height:", ";flex-shrink:0;flex-grow:0;margin-right:16px;img{border-radius:", ";width:", ";height:", ";}"], e => {
            let {theme: t} = e;
            return "drop-shadow(".concat(t.shadow.normal, ")")
        }
        , e => {
            let {width: t} = e;
            return t
        }
        , e => {
            let {height: t} = e;
            return t
        }
        , e => {
            let {theme: t} = e;
            return t.spacing.base3
        }
        , e => {
            let {width: t} = e;
            return t
        }
        , e => {
            let {height: t} = e;
            return t
        }
        );
        var n_ = function(e, t) {
            var i = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (i[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                    0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (i[n[o]] = e[n[o]]);
            return i
        }
          , nF = e => {
            var {height: t="160px", width: i="215px", src: n, className: r=""} = e
              , a = n_(e, ["height", "width", "src", "className"]);
            return (0,
            o.jsx)(nW, {
                height: "".concat(t, "px"),
                width: "".concat(i, "px"),
                className: r,
                children: (0,
                o.jsx)("img", {
                    alt: "",
                    src: n,
                    ...a
                })
            })
        }
        ;
        let nY = {
            enableHighAccuracy: !0,
            timeout: 5e3,
            maximumAge: 0
        }
          , nX = {
            Location: "icon-location",
            Camera: "icon-video-cam"
        };
        var nH = i(59949);
        let nz = () => {}
          , nU = e => {
            (0,
            eN.Yg)(e)
        }
          , nG = e => {
            "Location" === e && navigator.geolocation.getCurrentPosition(nU, nz, nY)
        }
        ;
        var nV = () => {
            var e;
            let t = (0,
            r.useContext)(k.Z)
              , i = (0,
            a.v9)(e => e.play.permissionType)
              , n = (0,
            a.v9)(e => e.play.locationAsked)
              , l = (0,
            a.v9)(e => e.play.locationDenied)
              , {t: d} = (0,
            K.$)()
              , u = (0,
            a.I0)()
              , {disableLocationPermissionModal: p} = (null === (e = s.default.appInfo) || void 0 === e ? void 0 : e.playFeFeatures.uiConfig) || {}
              , [h,v] = (0,
            r.useState)(!1)
              , x = (0,
            g.Fg)()
              , f = (0,
            r.useCallback)( () => {
                var e, t, i, o;
                return e = void 0,
                t = void 0,
                i = void 0,
                o = function*() {
                    if (l)
                        throw Error("Location denied");
                    try {
                        let e = yield navigator.permissions.query({
                            name: "geolocation"
                        });
                        if ((null == e ? void 0 : e.state) === "granted" || (null == e ? void 0 : e.state) === "prompt" && n)
                            return !0;
                        if ((null == e ? void 0 : e.state) === "denied")
                            throw Error("Location denied");
                        return !1
                    } catch (e) {
                        return !1
                    }
                }
                ,
                new (i || (i = Promise))(function(n, r) {
                    function a(e) {
                        try {
                            d(o.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function l(e) {
                        try {
                            d(o.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function d(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value)instanceof i ? t : new i(function(e) {
                            e(t)
                        }
                        )).then(a, l)
                    }
                    d((o = o.apply(e, t || [])).next())
                }
                )
            }
            , [n, l])
              , m = (0,
            r.useCallback)( () => {
                u({
                    type: P.Z.GET_PERMISSION,
                    payload: {
                        permissionType: "",
                        locationDenied: !0
                    }
                })
            }
            , [u])
              , w = (0,
            r.useCallback)( () => {
                m(),
                u({
                    type: P.Z.GET_PERMISSION,
                    payload: {
                        permissionType: "",
                        locationAsked: !0
                    }
                }),
                nG(i)
            }
            , [m, i]);
            return (0,
            r.useEffect)( () => {
                f().then(e => {
                    e || p ? w() : v(!0)
                }
                ).catch(e => {
                    v(!1)
                }
                )
            }
            , [f, w]),
            h ? (0,
            o.jsx)(J.Z, {
                modalBackgroundColor: iQ.qm.gradients.glass,
                overlayStyles: nH.r2,
                modalStyles: (0,
                nH.il)(x),
                children: (0,
                o.jsxs)(nH.W2, {
                    children: [(0,
                    o.jsx)(nF, {
                        width: 105,
                        height: 140,
                        alt: t.appName,
                        src: t.media.tile
                    }), (0,
                    o.jsxs)(nH.GN, {
                        children: [(0,
                        o.jsx)(nH.NM, {
                            med: !0,
                            children: d("permission")
                        }), (0,
                        o.jsx)(nH.$S, {
                            style: {
                                display: "flex",
                                margin: "12px 0 0"
                            },
                            children: "string" == typeof i ? (0,
                            o.jsxs)(o.Fragment, {
                                children: [(0,
                                o.jsx)("span", {
                                    style: {
                                        fontSize: "20px",
                                        marginRight: "4px"
                                    },
                                    className: nX[i]
                                }), " ", (0,
                                o.jsx)(nH.az, {
                                    children: i
                                })]
                            }) : null
                        }), (0,
                        o.jsxs)(nH.Ls, {
                            children: [(0,
                            o.jsx)(ew.z, {
                                variant: "tertiary",
                                size: "default",
                                text: d("cancel"),
                                onClick: m,
                                style: {
                                    margin: 0
                                }
                            }), (0,
                            o.jsx)(ew.z, {
                                variant: "primary",
                                size: "default",
                                text: d((0,
                                c.tq)() ? "okay" : "gotIt"),
                                onClick: w,
                                style: {
                                    margin: 0
                                }
                            })]
                        })]
                    })]
                })
            }) : null
        }
        ;
        let nq = g.ZP.p.withConfig({
            componentId: "sc-3a8b4ee-0"
        })(["position:absolute;top:10%;z-index:2;font-size:13px;transform:scaleY(0);transition:transform 0.25s;color:", ";background:", ";border:1px solid rgba(255,255,255,0.3);border-radius:4px;margin:0;padding:6px 12px;gap:4px;display:flex;align-items:center;justify-content:center;font-weight:600;"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {bg: t, theme: i} = e;
            return t || i.colors.green
        }
        )
          , nJ = g.ZP.span.withConfig({
            componentId: "sc-3a8b4ee-1"
        })(["display:inline-block;background-color:", ";-webkit-transition:.4s;transform:rotate(-45deg);transition:.4s;border-radius:50%;height:16px;width:16px;margin-right:6px;&:before{content:'';width:5px;height:9px;position:absolute;border-top:2px solid ", ";border-left:2px solid ", ";top:3px;left:6px;right:0px;bottom:0;z-index:2;display:flex;align-items:center;justify-content:center;transform:rotate(-82deg);}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.colors.green
        }
        , e => {
            let {theme: t} = e;
            return t.colors.green
        }
        )
          , nQ = {
            success: "#398B4D"
        };
        var n$ = e => {
            let {type: t, onClose: i, children: n} = e
              , [a,l] = (0,
            r.useState)("");
            return (0,
            r.useEffect)( () => {
                let e = setTimeout( () => {
                    l("scaleY(1)")
                }
                , 1e3)
                  , t = setTimeout( () => {
                    l("scaleY(0)"),
                    i()
                }
                , 4e3);
                return () => {
                    clearTimeout(e),
                    clearTimeout(t)
                }
            }
            , []),
            (0,
            o.jsxs)(nq, {
                bg: nQ[t],
                style: {
                    transform: a || void 0
                },
                children: [(0,
                o.jsx)(nJ, {}), n]
            })
        }
          , n0 = i(22920)
          , n1 = i(17041);
        let n2 = (0,
        g.F4)(["0%{opacity:0;}33.33%{opacity:1;}49.66%{opacity:1;}66.67%{opacity:1;}83.33%{opacity:1;}100%{opacity:1;}"])
          , n5 = (0,
        g.F4)(["0%{transform:rotate(0deg);left:0px;}33.33%{transform:rotate(0deg);left:0px;}49.66%{transform:rotate(-30deg);left:-7px;}66.67%{transform:rotate(0deg);left:0px;}83.33%{transform:rotate(30deg);left:7px;}100%{transform:rotate(0deg);left:0px;}"])
          , n4 = g.ZP.div.withConfig({
            componentId: "sc-1a48bbf7-0"
        })(["display:flex;position:absolute;width:fit-content;height:40px;transition:all 0.5s ease-in-out;left:50%;padding:9.5px 16px 9.5px 22px;box-sizing:border-box;transform:translateX(-50%);background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.2);font-style:normal;font-weight:normal;font-size:14px;line-height:150%;z-index:2;&.slideUp{top:-20px;opacity:0;}&.slideDown{top:70px;opacity:1;}"])
          , n9 = g.ZP.div.withConfig({
            componentId: "sc-1a48bbf7-1"
        })(["position:relative;width:18px;height:20px;animation-name:", ";animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:2s;color:white;&:after{position:absolute;width:4px;height:6px;border-radius:0px 100% 0px 0px;background:", ';content:"";top:2px;right:4px;animation-name:', ";animation-duration:3s;animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:2s;opacity:0;}"], n5, e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , n2)
          , n3 = g.ZP.p.withConfig({
            componentId: "sc-1a48bbf7-2"
        })(["margin-left:22px;color:", ";"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        );
        var n6 = () => {
            let {t: e} = (0,
            K.$)()
              , t = (0,
            a.I0)()
              , i = (0,
            a.v9)(e => e.play.shiftLockActive)
              , n = (0,
            a.v9)(e => e.play.nativeMouseEnabled)
              , l = (0,
            a.v9)(e => e.play.robloxToast)
              , d = (0,
            a.v9)(e => e.appPreferences.legacyControls)
              , [c,u] = (0,
            r.useState)(!1)
              , [p,h] = (0,
            r.useState)(!1)
              , g = (0,
            a.v9)(e => e.user.shiftlockToastCount)
              , v = (0,
            a.v9)(e => e.user.lastShiftLockToastDate);
            return (0,
            r.useEffect)( () => {
                if (i)
                    t({
                        type: P.Z.ROBLOX_TOAST,
                        payload: {
                            robloxToast: !1
                        }
                    }),
                    u(!0),
                    setTimeout( () => {
                        u(!1)
                    }
                    , 3e3),
                    h(!0);
                else {
                    if (!p)
                        return;
                    t({
                        type: P.Z.ROBLOX_TOAST,
                        payload: {
                            robloxToast: !1
                        }
                    }),
                    h(!1),
                    u(!0),
                    setTimeout( () => {
                        u(!1)
                    }
                    , 3e3)
                }
            }
            , [i]),
            (0,
            r.useEffect)( () => {
                var r, a;
                !(null === (a = null === (r = null === s.default || void 0 === s.default ? void 0 : s.default.appInfo) || void 0 === r ? void 0 : r.playFeFeatures) || void 0 === a ? void 0 : a.enableNativePointer) && n && !d && !l && !i && g < 3 && (0,
                n1.J)(v, new Date().toDateString()) && ((0,
                n0.toast)((0,
                o.jsxs)(o.Fragment, {
                    children: [e("press"), " ", (0,
                    o.jsx)("kbd", {
                        children: "Shift"
                    }), " + ", (0,
                    o.jsx)("kbd", {
                        children: "Q"
                    }), " ", e("shiftLockMsg"), (0,
                    o.jsx)("span", {
                        style: {
                            marginLeft: "12px",
                            marginTop: "2px",
                            cursor: "pointer"
                        },
                        children: (0,
                        o.jsx)("img", {
                            alt: "",
                            src: (0,
                            _.jW)(eu.Z),
                            onClick: () => {
                                n0.toast.dismiss()
                            }
                        })
                    })]
                }), eh.dO5),
                t({
                    type: nT.Z.SHIFT_LOCK_TOAST_UPDATE,
                    payload: {
                        shiftlockToastCount: g + 1,
                        lastShiftLockToastDate: new Date().toDateString()
                    }
                }))
            }
            , [n, d, l]),
            (0,
            o.jsxs)(n4, {
                className: "".concat(c ? "slideDown" : "slideUp"),
                children: [(0,
                o.jsx)(n9, {
                    className: "robloxImgContainer",
                    children: (0,
                    o.jsx)(eL.Z, {
                        name: "mouse",
                        size: 20
                    })
                }), (0,
                o.jsx)(n3, {
                    children: e("".concat(i ? "shiftLockActive" : "shiftLockInactive"))
                })]
            })
        }
          , n7 = i(7434);
        let n8 = (0,
        g.iv)(["width:320px;> div{margin:24px;border-radius:0;}"])
          , oe = g.ZP.div.withConfig({
            componentId: "sc-f5f209cb-0"
        })(["display:flex;justify-content:space-between;gap:14px;margin-bottom:24px;i{color:", ";cursor:pointer;}"], e => {
            let {theme: t} = e;
            return t.colors.white60
        }
        )
          , ot = g.ZP.span.withConfig({
            componentId: "sc-f5f209cb-1"
        })(["color:", ";"], e => {
            let {theme: t} = e;
            return t.colors.white80
        }
        )
          , oi = (0,
        g.ZP)(n7.Yd).withConfig({
            componentId: "sc-f5f209cb-2"
        })(["padding:7.5px;text-decoration:none;"]);
        var on = () => {
            let e = (0,
            a.v9)(e => e.play.urlToOpen)
              , {t} = (0,
            K.$)()
              , i = (0,
            a.I0)()
              , n = () => {
                i({
                    type: P.Z.OPEN_URL,
                    payload: {
                        urlToOpen: ""
                    }
                })
            }
            ;
            return e ? (0,
            o.jsxs)(J.Z, {
                modalStyles: n8,
                children: [(0,
                o.jsxs)(oe, {
                    children: [(0,
                    o.jsx)(W.TZ, {
                        children: (0,
                        o.jsx)(ot, {
                            children: t("externalPopupMessage")
                        })
                    }), (0,
                    o.jsx)(eL.Z, {
                        name: "cross-thin",
                        size: 16,
                        onClick: n
                    })]
                }), (0,
                o.jsx)(oi, {
                    as: "a",
                    variant: "primary",
                    rel: "noopener noreferrer",
                    size: "medium",
                    target: "_blank",
                    onClick: n,
                    href: e,
                    children: (0,
                    o.jsx)(W.QV, {
                        children: t("okay")
                    })
                })]
            }) : null
        }
          , oo = i(19257)
          , or = i(86571)
          , oa = i(21101);
        let ol = g.ZP.div.withConfig({
            componentId: "sc-bcdea224-0"
        })(["z-index:9;color:", ";position:absolute;width:302px;background:linear-gradient(0deg,rgba(255,255,255,0.20) 0%,rgba(255,255,255,0.20) 100%),rgba(0,0,0,0.40);backdrop-filter:blur(48px);padding:16px;transition:right 0.5s ease-out;display:flex;flex-direction:column;&.hide{right:-302px !important;&.portaitNewLayoutEnabled{right:", ";}}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , () => "".concat(-302 - ek.Uz, "px !important"))
          , od = g.ZP.div.withConfig({
            componentId: "sc-bcdea224-1"
        })(["display:flex;margin-bottom:4px;font-weight:400;align-items:center;justify-content:space-between;gap:20px;.sidebar-heading{display:flex;align-items:center;width:100%;}i{&:hover{border-radius:50%;background:", ";}}"], e => {
            let {theme: t} = e;
            return t.colors.modal
        }
        )
          , os = g.ZP.ul.withConfig({
            componentId: "sc-bcdea224-2"
        })(["margin:0;list-style-type:none;padding:5px 0;background:", ";margin-bottom:12px;height:100%;overflow-Y:auto;border-radius:0px 0px 4px 4px;&::-webkit-scrollbar{display:block;width:5px;}::-webkit-scrollbar-thumb{background:", ";border-radius:10px;opacity:0.4;}"], e => {
            let {theme: t} = e;
            return t.colors.black30
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white20
        }
        )
          , oc = g.ZP.li.withConfig({
            componentId: "sc-bcdea224-3"
        })(["font-size:12px;padding:8px 12px;font-weight:300;display:flex;span{&:first-child{flex:1;padding-right:10px;color:", ";}&:last-child{flex:0 0 100px;font-weight:500;color:", ";}}"], e => {
            let {theme: t} = e;
            return t.colors.white60
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        );
        (0,
        g.ZP)(oc).withConfig({
            componentId: "sc-bcdea224-4"
        })(["color:#f5f5f5;font-weight:600;&::only-child{display:none;}"]);
        let ou = (0,
        g.ZP)(oc).withConfig({
            componentId: "sc-bcdea224-5"
        })(["font-weight:600;font-size:12px;justify-content:flex-start;color:", ";"], e => {
            let {theme: t} = e;
            return t.colors.surface
        }
        )
          , op = g.ZP.div.withConfig({
            componentId: "sc-bcdea224-6"
        })(["display:flex;border-top-left-radius:4px;border-top-right-radius:4px;overflow:hidden;font-size:14px;margin-top:12px;min-height:40px;background:", ";"], e => {
            let {theme: t} = e;
            return t.colors.black30
        }
        )
          , oh = g.ZP.span.withConfig({
            componentId: "sc-bcdea224-7"
        })(["padding:8px 16px;flex:0 0 50%;background:transparent;cursor:pointer;background:", ";color:", ";display:flex;align-items:center;justify-content:space-between;i{font-size:19px;margin-right:10px;&.icon-keyboard{font-size:22px;}}&.active{background:transparent;color:", ";}"], e => {
            let {theme: t} = e;
            return t.colors.black30
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white60
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white80
        }
        )
          , og = g.ZP.div.withConfig({
            componentId: "sc-bcdea224-8"
        })(["display:flex;background:", ";align-items:center;text-align:center;flex-direction:column;height:100%;background:", ";margin-bottom:12px;border-radius:0px 0px 4px 4px;justify-content:center;padding:16px;p{color:", ";}img{height:72px;width:72px;}"], e => {
            let {theme: t} = e;
            return t.colors.modal
        }
        , e => {
            let {theme: t} = e;
            return t.colors.black30
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white60
        }
        )
          , ov = g.ZP.div.withConfig({
            componentId: "sc-bcdea224-9"
        })(["background:rgba(0,0,0,0.4);padding:8px;margin:12px 0;border-radius:4px;min-height:40px;display:flex;flex-direction:column;justify-content:center;"])
          , ox = g.ZP.label.withConfig({
            componentId: "sc-bcdea224-10"
        })(["color:rgba(255,255,255,0.8);font-size:12px;display:block;&.dim{color:rgba(255,255,255,0.6);}&.padd{padding:0px 12px;}"])
          , of = g.ZP.div.withConfig({
            componentId: "sc-bcdea224-11"
        })(["justify-content:flex-start;flex-direction:row;align-items:center;color:", ";justify-content:space-between;display:flex;gap:4px;span{border:1px solid;width:24px;height:12px;border-radius:48px;position:relative;cursor:pointer;transition:all 0.1s;&:after{content:'';transition:all 0.1s;border-radius:50%;right:12px;width:8px;height:8px;position:absolute;background:currentColor;top:10%;}}&.active span{border-color:", ";background:", ";&:after{background:", ";right:1px;}}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.colors.black20
        }
        , e => {
            let {theme: t} = e;
            return t.colors.ascent
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        );
        g.ZP.div.withConfig({
            componentId: "sc-bcdea224-12"
        })(["justify-content:flex-start;flex-direction:row;align-items:center;color:", ";justify-content:space-between;display:flex;"], e => {
            let {theme: t} = e;
            return t.colors.base100
        }
        ),
        g.ZP.span.withConfig({
            componentId: "sc-bcdea224-13"
        })(["border:", ";width:3em;height:1.8em;border-radius:10px;position:relative;cursor:pointer;transition:all 0.1s;background:", ";&:after{content:'';transition:all 0.1s;border-radius:50%;right:calc(13px + 1.5em);width:1.2em;height:1.2em;position:absolute;background:", ";right:47%;top:10%;}&.active{border-color:", ";background:", ";&:after{background:", ";right:3px;}}"], e => {
            let {theme: t} = e;
            return t.border.base2
        }
        , e => {
            let {theme: t} = e;
            return t.colors.link
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.colors.modal
        }
        , e => {
            let {theme: t} = e;
            return t.colors.ascent
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        ),
        g.ZP.div.withConfig({
            componentId: "sc-bcdea224-14"
        })(["background:rgba(255,255,255,0.1);height:1px;&.marg{margin:0px 12px 8px 12px;}"]),
        (0,
        g.ZP)(ov).withConfig({
            componentId: "sc-bcdea224-15"
        })(["gap:", ";"], e => {
            let {theme: t} = e;
            return t.spacing.base2
        }
        );
        let om = g.ZP.div.withConfig({
            componentId: "sc-bcdea224-16"
        })(["display:flex;flex-direction:column;justify-content:center;"])
          , ow = g.ZP.div.withConfig({
            componentId: "sc-bcdea224-17"
        })(["width:100%;height:100%;top:0;left:0;position:absolute;", ""], e => {
            let {editing: t} = e;
            return t ? "\n    background-color: rgba(0,0,0,0.7)};\n  " : ""
        }
        )
          , oy = g.ZP.div.withConfig({
            componentId: "sc-bcdea224-18"
        })(["display:flex;flex-direction:row;width:100%;gap:12px;justify-content:space-between;margin-bottom:12px;button{width:50% !important;}"])
          , ob = g.ZP.div.withConfig({
            componentId: "sc-bcdea224-19"
        })(["padding:8px;text-align:center;align-items:center;border-radius:12px;cursor:pointer;&:hover{background:rgba(255,255,255,0.2);}img{width:16px;height:16px;}"])
          , oA = g.ZP.div.withConfig({
            componentId: "sc-bcdea224-20"
        })(["position:absolute;width:400px;height:auto;display:flex;padding:16px;background:rgba(255,255,255,0.2);gap:8px;border-radius:8px;backdrop-filter:blur(24px);color:rgba(255,255,255,1);flex-direction:column;z-index:10;"])
          , oj = g.ZP.div.withConfig({
            componentId: "sc-bcdea224-21"
        })(["width:100%;display:flex;flex-direction:column;gap:8px;"]);
        g.ZP.div.withConfig({
            componentId: "sc-bcdea224-22"
        })(["display:flex;gap:2px;height:auto;justify-content:space-between;flex-direction:column;h6{width:110px;margin:0;text-overflow:ellipsis;overflow:hidden;}"]);
        let oC = g.ZP.div.withConfig({
            componentId: "sc-bcdea224-23"
        })(["display:flex;flex-direction:row;gap:8px;"]);
        var oE = {
            src: "/_next/static/media/MouseLButton.8f31ba3d.png",
            height: 84,
            width: 62,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAP1BMVEW8vLyXl5cAAAD7+/sqKiq+vr7+/v7y8vJMaXE4ODjT09Pv7+/Z2dmtra3////////V1dV0dHSDg4N7e3vJyck3poO0AAAAFXRSTlNvvqX1xYMzHwDSSmFqhpTAjeCtz1tMl5p7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nAXBhwGAIBAAsQO+UkRh/11NCBvTAm/7fMZoz7qTrujb0RTJBVKrgJfM4oSDxw8tZgFkQvImtwAAAABJRU5ErkJggg==",
            blurWidth: 6,
            blurHeight: 8
        }
          , oS = i(21038)
          , oT = {
            src: "/_next/static/media/GamepadDpadDown.9f027fed.png",
            height: 72,
            width: 72,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEX///8AAAB7e3u9vb2Ojo46OjrBwcENDQ0gICD9/f24uLgS9t3bAAAACHRSTlMG/bdwtv1w+n1uUAwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVHicRcuxEQAgDAOxt0PAsP/AVBy9BJRdACNSBsys7pWJ1Xu3jKVzJFNRotTHr18gzQDju4qaMgAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        };
        let oI = g.ZP.div.withConfig({
            componentId: "sc-fb1e9b5d-0"
        })(["background:", ";height:auto;width:300px;position:absolute;z-index:100;color:white;border-radius:8px;padding:8px;border-radius:0px 8px;background:", ";border:1px solid ", ";backdrop-filter:blur(24px);"], e => {
            let {theme: t} = e;
            return t.colors.base600
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white20
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white20
        }
        )
          , ok = g.ZP.header.withConfig({
            componentId: "sc-fb1e9b5d-1"
        })(["display:flex;padding-bottom:8px;"])
          , oR = g.ZP.div.withConfig({
            componentId: "sc-fb1e9b5d-2"
        })(["display:flex;gap:8px;height:auto;justify-content:space-between;h6{width:110px;margin:0;text-overflow:ellipsis;overflow:hidden;}"])
          , oL = g.ZP.input.withConfig({
            componentId: "sc-fb1e9b5d-3"
        })(["width:150px;height:fit-content;padding:2px;background:", ";box-shadow:0px 2px 8px rgba(0,0,0,0.04);border-color:1px solid ", ";color:", ";background:", ";border:", ";border-radius:6px;text-align:center;}"], e => {
            let {theme: t} = e;
            return t.colors.background
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white20
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.colors.black20
        }
        , e => {
            let {theme: t} = e;
            return t.border.base4
        }
        )
          , oP = g.ZP.div.withConfig({
            componentId: "sc-fb1e9b5d-4"
        })(["display:flex;flex-direction:column;padding:10px;width:100%;border-radius:8px;gap:8px;margin-bottom:12px;overflow-y:scroll;overflow-x:none;background-color:transparent;border:1px solid ", ";"], e => {
            let {theme: t} = e;
            return t.colors.white20
        }
        )
          , oD = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.indexOf("Dpad") > -1 && -1 === e.indexOf("+") ? e.replace(/Gamepad/g, "") : "Left" === e || "Right" === e || "Up" === e || "Down" === e ? e : e.replace(/Gamepad/g, "").replace(/Trigger/g, "T").replace(/Left/g, "L").replace(/Right/g, "R").replace(/Shoulder/g, "B")
        }
          , oM = {
            Oem1: ";",
            Oem2: "/",
            Oem3: "~",
            Oem4: "[",
            Oem5: "\\",
            Oem6: "]",
            Oem7: "'",
            OemPlus: "+",
            OemComma: ",",
            OemMinus: "-",
            OemPeriod: "."
        }
          , oO = e => e ? oM[e] || e : ""
          , oK = (e, t) => e / 100 * t;
        var oZ = {
            src: "/_next/static/media/scroll.cd1d6361.svg",
            height: 43,
            width: 42,
            blurWidth: 0,
            blurHeight: 0
        }
          , oN = {
            src: "/_next/static/media/ScriptEditor.7ad774e3.svg",
            height: 12,
            width: 12,
            blurWidth: 0,
            blurHeight: 0
        };
        let oB = g.ZP.span.withConfig({
            componentId: "sc-a69ea19d-0"
        })(["background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCAyOUMxMS4yMTM2IDI5IDUuNTE5NDUgMjQuMzEzOSAzLjk4MTAxIDE4LjAwMDFDNS41MTk0MSAxMS42ODYyIDExLjIxMzYgNyAxOCA3QzI0Ljc4NjQgNyAzMC40ODA1IDExLjY4NjEgMzIuMDE5IDE3Ljk5OTlDMzAuNDgwNiAyNC4zMTM4IDI0Ljc4NjQgMjkgMTggMjlaTTE4IDZDMjUuMzQyNiA2IDMxLjQ4NzIgMTEuMTI5MiAzMy4wNDYyIDE3Ljk5OTlDMzEuNDg3MiAyNC44NzA4IDI1LjM0MjYgMzAgMTggMzBDMTAuNjU3NCAzMCA0LjUxMjgzIDI0Ljg3MDggMi45NTM3NCAxOC4wMDAxQzQuNTEyNzkgMTEuMTI5MiAxMC42NTc0IDYgMTggNlpNNi43MTUzIDE4QzcuMTEyNzYgMTYuMjQ4NCA3LjkwNzU3IDE0LjY0NzcgOC45OTk5NyAxMy4yOTc4VjE1LjAyMjVDOC40Mzc2NCAxNS45MzI1IDguMDA5NTEgMTYuOTM0MiA3Ljc0MzI1IDE4QzguMDA5NTIgMTkuMDY1OSA4LjQzNzY0IDIwLjA2NzYgOC45OTk5NyAyMC45Nzc2VjIyLjcwMjNDNy45MDc1OCAyMS4zNTIzIDcuMTEyNzcgMTkuNzUxNiA2LjcxNTMgMThaTTI4LjI1NjcgMThDMjcuOTkwNSAxOS4wNjU4IDI3LjU2MjMgMjAuMDY3NiAyNyAyMC45Nzc2VjIyLjcwMjNDMjguMDkyNCAyMS4zNTIzIDI4Ljg4NzIgMTkuNzUxNiAyOS4yODQ3IDE3Ljk5OTlDMjguODg3MiAxNi4yNDgzIDI4LjA5MjQgMTQuNjQ3NiAyNyAxMy4yOTc3VjE1LjAyMjNDMjcuNTYyMyAxNS45MzI0IDI3Ljk5MDUgMTYuOTM0MSAyOC4yNTY3IDE4WiIgZmlsbD0iI2ZmZmZmZiIvPgo8Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSIyLjUiIHN0cm9rZT0iI2ZmZmZmZiIvPgo8L3N2Zz4K);width:60px;position:absolute;height:60px;background-repeat:no-repeat;background-color:", ";border:1px solid;border-radius:50%;top:-20px;left:-3px;background-position:center;z-index:-1;background-size:57%;"], e => {
            let {theme: t} = e;
            return t.colors.modal
        }
        )
          , oW = g.ZP.div.withConfig({
            componentId: "sc-a69ea19d-1"
        })(["border:5px solid ", ",width:", ",height:", ",position:absolute,borderRadius:50%,pointerEvents:none,"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {radius: t} = e;
            return "".concat(2 * t, " px")
        }
        , e => {
            let {radius: t} = e;
            return "".concat(2 * t, " px")
        }
        )
          , o_ = {
            MouseLButton: oE,
            MouseRButton: {
                src: "/_next/static/media/MouseRButton.d74dac8c.png",
                height: 84,
                width: 62,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAASFBMVEVMaXEAAADu7u6+vr7Kysrq6uowMDA4ODizs7P39/e6urr7+/vV1dX6+vpycnInJyeWlpb///8lJSWXl5eDg4PW1tb////6+vr1oJqwAAAAGHRSTlMApR1odWPH0oYgcvdKMNbEvpLDva+QvjrTRv0HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nAXBBwLAIAgAsVNBwNXd/v+nTeBTnTDX/fZAlh9dGY80H7idmzlSU6qN2M2ugFxK5gc1gwGuYSM8kwAAAABJRU5ErkJggg==",
                blurWidth: 6,
                blurHeight: 8
            },
            MouseMButton: {
                src: "/_next/static/media/MouseMButton.be91e84d.png",
                height: 72,
                width: 54,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAP1BMVEX///+kpKT///+srKy5ubmvr6+np6cFBQXd3d3IyMibm5v29vZFRUWKior7+/v39/d1dXVzc3OhoaE2NjYeHh4jYdQyAAAAE3RSTlMBdgXMPlun/ClMk5z9pZvbnJ2a+qgK1AAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUeJwFwQkSABAMALFFaes2/P+tErDWDCStlYRc5iwZH/sMITzVF/Creh1q7xWIZpEPLHsBi3eDfwQAAAAASUVORK5CYII=",
                blurWidth: 6,
                blurHeight: 8
            },
            DpadUp: {
                src: "/_next/static/media/GamepadDpadUp.f38ef235.png",
                height: 72,
                width: 72,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEX///97e3sAAAC9vb1MaXGOjo46OjrBwcENDQ0gICABAQH9/f24uLh+iDkQAAAACXRSTlMKt/xwALb9cPpl1wDcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nEXLMRIAIAgDsLYoWPT/73Xy3BMMBBkYwLTkCYRlywG2zlET7Nw7myivzOX6+PULKsABNWxg+dMAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            },
            DpadDown: oT,
            DpadLeft: {
                src: "/_next/static/media/GamepadDpadLeft.6c56681a.png",
                height: 72,
                width: 72,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUAAAD///++vr59fX1MaXGNjY0BAQF3d3dmZmZAQEAeHh7q6uqsrKxKPmb/AAAAC3RSTlP+CnC2ALb6uf38/kzITgQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVHicPYvBDcAgDMScSwjtwf7zIvroz5JtKjRTUcQweARy+2mL5F3LJIn3B3Ljq/747lNRBywKATmZ0oJbAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            },
            DpadRight: {
                src: "/_next/static/media/GamepadDpadRight.691db1eb.png",
                height: 72,
                width: 72,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUAAAD///++vr59fX1MaXGNjY0BAQF3d3dlZWVAQEAeHh7q6uqsrKya6EWTAAAAC3RSTlP+CnC2ALb6uf38/kzITgQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVHicPYvBDcAgDMScS4D2YP95Ufroz5JtKpRLUcQweATyfDwtEu/9kh8ck61Mqz+u0Or9AiwQATk4iacQAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            }
        }
          , oF = {
            Tab: "Tab",
            Enter: "Enter",
            ShiftLeft: "Shift",
            ShiftRight: "Shift",
            ControlLeft: "Ctrl",
            ControlRight: "Ctrl",
            AltLeft: "Alt",
            AltRight: "Alt",
            CapsLock: "CapsLock",
            Space: "Space",
            PageUp: "PgUp",
            PageDown: "PgDn",
            End: "End",
            Home: "Home",
            ArrowLeft: "Left",
            ArrowUp: "Up",
            ArrowRight: "Right",
            ArrowDown: "Down",
            Insert: "Insert",
            Delete: "Delete",
            Minus: "OemMinus",
            Period: "OemPeriod",
            Comma: "OemComma",
            Equal: "OemPlus",
            Digit0: "0",
            Digit1: "1",
            Digit2: "2",
            Digit3: "3",
            Digit4: "4",
            Digit5: "5",
            Digit6: "6",
            Digit7: "7",
            Digit8: "8",
            Digit9: "9",
            KeyA: "A",
            KeyB: "B",
            KeyC: "C",
            KeyD: "D",
            KeyE: "E",
            KeyF: "F",
            KeyG: "G",
            KeyH: "H",
            KeyI: "I",
            KeyJ: "J",
            KeyK: "K",
            KeyL: "L",
            KeyM: "M",
            KeyN: "N",
            KeyO: "O",
            KeyP: "P",
            KeyQ: "Q",
            KeyR: "R",
            KeyS: "S",
            KeyT: "T",
            KeyU: "U",
            KeyV: "V",
            KeyW: "W",
            KeyX: "X",
            KeyY: "Y",
            KeyZ: "Z",
            Numpad0: "Num0",
            Numpad1: "Num1",
            Numpad2: "Num2",
            Numpad3: "Num3",
            Numpad4: "Num4",
            Numpad5: "Num5",
            Numpad6: "Num6",
            Numpad7: "Num7",
            Numpad8: "Num8",
            Numpad9: "Num9",
            Semicolon: "Oem1",
            Slash: "Oem2",
            Backquote: "Oem3",
            BracketLeft: "Oem4",
            Backslash: "Oem5",
            BracketRight: "Oem6",
            Quote: "Oem7",
            Backspace: "Backspace"
        }
          , oY = e => oF[e]
          , oX = []
          , oH = e => {
            if (oX.includes(e))
                return null;
            let t = oY(e);
            return t ? (0 !== oX.length && (t = "".concat(oY(oX[oX.length - 1]), " + ").concat(t)),
            oX.push(e),
            t) : null
        }
          , oz = e => {
            var t, i, n, l;
            let {gamepad: d, control: s, height: c, newControl: u} = e
              , p = (0,
            a.v9)(e => e.imap.keymappingEditMode)
              , [h,g] = (0,
            r.useState)((null === (t = s.KeyUp) || void 0 === t ? void 0 : t.length) || 1)
              , [v,x] = (0,
            r.useState)(u)
              , [f,m] = (0,
            r.useState)((null === (i = s.KeyDown) || void 0 === i ? void 0 : i.length) || 1)
              , [w,y] = (0,
            r.useState)(!1)
              , [b,A] = (0,
            r.useState)((null === (n = s.KeyLeft) || void 0 === n ? void 0 : n.length) || 1)
              , [j,C] = (0,
            r.useState)(!1)
              , [E,S] = (0,
            r.useState)((null === (l = s.KeyRight) || void 0 === l ? void 0 : l.length) || 1)
              , [T,I] = (0,
            r.useState)(!1)
              , k = (0,
            r.useRef)(null)
              , R = (0,
            r.useRef)(null)
              , L = (0,
            r.useRef)(null)
              , P = (0,
            r.useRef)(null)
              , D = e => {
                let t = oH(e.code);
                t && (v ? (s.KeyUp = t,
                g(t.length)) : w ? (s.KeyDown = t,
                m(t.length)) : j ? (s.KeyLeft = t,
                A(t.length)) : T && (s.KeyRight = t,
                S(t.length)),
                e.target.value = t)
            }
              , M = e => {
                oX = oX.filter(t => t !== e.code)
            }
              , O = e => {
                v ? (s.KeyUp = "MouseRButton",
                g(12)) : w ? (s.KeyDown = "MouseRButton",
                m(12)) : j ? (s.KeyLeft = "MouseRButton",
                A(12)) : T && (s.KeyRight = "MouseRButton",
                S(12)),
                e.target.value = "MouseRButton"
            }
            ;
            return (0,
            r.useEffect)( () => {
                p || (x(!1),
                y(!1),
                C(!1),
                I(!1))
            }
            , [p]),
            (0,
            r.useEffect)( () => {
                var e, t, i, n;
                v && (null === (e = k.current) || void 0 === e || e.focus()),
                w && (null === (t = R.current) || void 0 === t || t.focus()),
                j && (null === (i = L.current) || void 0 === i || i.focus()),
                T && (null === (n = P.current) || void 0 === n || n.focus())
            }
            , [v, w, j, T]),
            (0,
            o.jsxs)(o.Fragment, {
                children: [d && !p && s.GamepadStick && (0,
                o.jsx)("span", {
                    className: "overlayKeyValue",
                    children: oD(s.GamepadStick)
                }), (!d || p) && (0,
                o.jsxs)(o.Fragment, {
                    children: [s.KeyUp && !v && (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue up",
                        style: {
                            pointerEvents: p ? "all" : "none",
                            transform: "translateY(-100%) translateY(-".concat(oK(c, (s.XRadius || 5) / 2), "px)")
                        },
                        onClick: () => {
                            p && x(!0)
                        }
                        ,
                        children: (0,
                        o.jsx)("span", {
                            children: oD(s.KeyUp)
                        })
                    }), v && p && (0,
                    o.jsx)("input", {
                        ref: k,
                        value: s.KeyUp,
                        type: "text",
                        style: {
                            pointerEvents: p ? "all" : "none",
                            transform: "translateY(-100%) translateY(-".concat(oK(c, (s.XRadius || 5) / 2), "px)")
                        },
                        id: "".concat(s.$type, "-key-input"),
                        required: !0,
                        onKeyDown: D,
                        onKeyUp: M,
                        onBlur: () => {
                            x(!1)
                        }
                        ,
                        size: h,
                        onContextMenu: e => {
                            O(e),
                            e.preventDefault()
                        }
                    }), s.KeyLeft && !j && (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateX(-100%) translateX(-".concat(oK(c, (s.XRadius || 5) / 2), "px)")
                        },
                        onClick: () => {
                            p && C(!0)
                        }
                        ,
                        children: (0,
                        o.jsx)("span", {
                            children: oD(s.KeyLeft)
                        })
                    }), j && p && (0,
                    o.jsx)("input", {
                        value: s.KeyLeft,
                        ref: L,
                        type: "text",
                        style: {
                            pointerEvents: p ? "all" : "none",
                            transform: "translateX(-100%) translateX(-".concat(oK(c, (s.XRadius || 5) / 2), "px)")
                        },
                        id: "".concat(s.$type, "-key-input"),
                        required: !0,
                        onKeyDown: D,
                        onKeyUp: M,
                        onBlur: () => {
                            C(!1)
                        }
                        ,
                        size: b,
                        onContextMenu: e => {
                            O(e),
                            e.preventDefault()
                        }
                    }), s.KeyDown && !w && (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateY(100%) translateY(".concat(oK(c, (s.XRadius || 5) / 2), "px)")
                        },
                        onClick: () => {
                            p && y(!0)
                        }
                        ,
                        children: (0,
                        o.jsx)("span", {
                            children: oD(s.KeyDown)
                        })
                    }), w && p && (0,
                    o.jsx)("input", {
                        value: s.KeyDown,
                        ref: R,
                        type: "text",
                        style: {
                            pointerEvents: p ? "all" : "none",
                            transform: "translateY(100%) translateY(".concat(oK(c, (s.XRadius || 5) / 2), "px)")
                        },
                        id: "".concat(s.$type, "-key-input"),
                        required: !0,
                        onKeyDown: D,
                        onKeyUp: M,
                        onBlur: () => {
                            y(!1)
                        }
                        ,
                        size: f,
                        onContextMenu: e => {
                            O(e),
                            e.preventDefault()
                        }
                    }), s.KeyRight && !T && (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateX(100%) translateX(".concat(oK(c, (s.XRadius || 5) / 2), "px)")
                        },
                        onClick: () => {
                            p && I(!0)
                        }
                        ,
                        children: (0,
                        o.jsx)("span", {
                            children: oD(s.KeyRight)
                        })
                    }), T && p && (0,
                    o.jsx)("input", {
                        value: s.KeyRight,
                        ref: P,
                        type: "text",
                        style: {
                            pointerEvents: p ? "all" : "none",
                            transform: "translateX(100%) translateX(".concat(oK(c, (s.XRadius || 5) / 2), "px)")
                        },
                        id: "".concat(s.$type, "-key-input"),
                        required: !0,
                        onKeyDown: D,
                        onKeyUp: M,
                        onBlur: () => {
                            I(!1)
                        }
                        ,
                        size: E,
                        onContextMenu: e => {
                            O(e),
                            e.preventDefault()
                        }
                    }), p && (0,
                    o.jsx)("span", {
                        style: {
                            height: "".concat(2 * oK(c, (s.XRadius || 5) / 2) + 80, "px"),
                            aspectRatio: "1",
                            border: "1px solid white",
                            borderRadius: "50%",
                            zIndex: "-1"
                        }
                    })]
                })]
            })
        }
          , oU = e => {
            var t, i, n, l, d, s;
            let {gamepad: c, control: u, height: p, newControl: h} = e
              , g = (0,
            a.v9)(e => e.imap.keymappingEditMode)
              , v = c ? oD(u.Key_alt1) : oO(u.Key)
              , [x,f] = (0,
            r.useState)((null === (t = u.Key) || void 0 === t ? void 0 : t.length) || 1)
              , [m,w] = (0,
            r.useState)(h)
              , [y,b] = (0,
            r.useState)((null === (i = u.KeyUp) || void 0 === i ? void 0 : i.length) || 1)
              , [A,j] = (0,
            r.useState)(h)
              , [C,E] = (0,
            r.useState)((null === (n = u.KeyDown) || void 0 === n ? void 0 : n.length) || 1)
              , [S,T] = (0,
            r.useState)(!1)
              , [I,k] = (0,
            r.useState)((null === (l = u.KeyLeft) || void 0 === l ? void 0 : l.length) || 1)
              , [R,L] = (0,
            r.useState)(!1)
              , [P,D] = (0,
            r.useState)((null === (d = u.KeyRight) || void 0 === d ? void 0 : d.length) || 1)
              , [M,O] = (0,
            r.useState)(!1)
              , K = (0,
            r.useRef)(null)
              , Z = (0,
            r.useRef)(null)
              , N = (0,
            r.useRef)(null)
              , B = (0,
            r.useRef)(null)
              , W = (0,
            r.useRef)(null)
              , _ = e => {
                let t = oH(e.code);
                t && (A ? (u.KeyUp = t,
                b(t.length)) : S ? (u.KeyDown = t,
                E(t.length)) : R ? (u.KeyLeft = t,
                k(t.length)) : M ? (u.KeyRight = t,
                D(t.length)) : m && (u.Key = t,
                f(t.length)),
                e.target.value = t)
            }
              , F = e => {
                oX = oX.filter(t => t !== e.code)
            }
              , Y = e => {
                A ? (u.KeyUp = "MouseRButton",
                b(12)) : S ? (u.KeyDown = "MouseRButton",
                E(12)) : R ? (u.KeyLeft = "MouseRButton",
                k(12)) : M ? (u.KeyRight = "MouseRButton",
                D(12)) : m && (u.Key = "MouseRButton",
                f(12)),
                e.target.value = "MouseRButton"
            }
            ;
            return (0,
            r.useEffect)( () => {
                g || (w(!1),
                j(!1),
                T(!1),
                L(!1),
                O(!1))
            }
            , [g]),
            (0,
            r.useEffect)( () => {
                var e, t, i, n, o;
                m && (null === (e = K.current) || void 0 === e || e.focus()),
                A && (null === (t = Z.current) || void 0 === t || t.focus()),
                S && (null === (i = B.current) || void 0 === i || i.focus()),
                R && (null === (n = N.current) || void 0 === n || n.focus()),
                M && (null === (o = W.current) || void 0 === o || o.focus())
            }
            , [m, A, S, R, M]),
            (0,
            o.jsx)(o.Fragment, {
                children: g ? u.DeviceType ? (0,
                o.jsxs)(o.Fragment, {
                    children: [!m && (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue ".concat(u.Type, " ").concat(o_[v] ? "DpadImage" : ""),
                        onClick: () => {
                            var e;
                            g && w(!0),
                            null === (e = K.current) || void 0 === e || e.focus()
                        }
                        ,
                        style: {
                            pointerEvents: g ? "all" : "none",
                            minWidth: "28px",
                            minHeight: "16px"
                        },
                        children: o_[v] ? (0,
                        o.jsx)("img", {
                            src: null === (s = o_[v]) || void 0 === s ? void 0 : s.src,
                            alt: ""
                        }) : v
                    }), m && g && (0,
                    o.jsx)("input", {
                        ref: K,
                        value: u.Key,
                        type: "text",
                        id: "".concat(u.$type, "-key-input"),
                        required: !0,
                        onKeyDown: _,
                        onKeyUp: F,
                        onBlur: () => {
                            w(!1)
                        }
                        ,
                        size: x,
                        onContextMenu: e => {
                            Y(e),
                            e.preventDefault()
                        }
                        ,
                        style: {
                            pointerEvents: g ? "all" : "none"
                        }
                    })]
                }) : (0,
                o.jsxs)(o.Fragment, {
                    children: [u.KeyUp && !A && (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue up",
                        style: {
                            pointerEvents: g ? "all" : "none",
                            position: "absolute",
                            transform: "translate(0, -200%)"
                        },
                        onClick: () => {
                            g && j(!0)
                        }
                        ,
                        children: (0,
                        o.jsx)("span", {
                            children: oD(u.KeyUp)
                        })
                    }), A && g && (0,
                    o.jsx)("input", {
                        ref: Z,
                        value: u.KeyUp,
                        type: "text",
                        style: {
                            pointerEvents: g ? "all" : "none",
                            position: "absolute",
                            transform: "translate(0, -200%)"
                        },
                        id: "".concat(u.$type, "-key-input"),
                        required: !0,
                        onKeyDown: _,
                        onKeyUp: F,
                        onBlur: () => {
                            j(!1)
                        }
                        ,
                        size: y,
                        onContextMenu: e => {
                            Y(e),
                            e.preventDefault()
                        }
                    }), u.KeyLeft && !R && (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            position: "absolute",
                            transform: "translate(-150%, 0)"
                        },
                        onClick: () => {
                            g && L(!0)
                        }
                        ,
                        children: (0,
                        o.jsx)("span", {
                            children: oD(u.KeyLeft)
                        })
                    }), R && g && (0,
                    o.jsx)("input", {
                        value: u.KeyLeft,
                        ref: N,
                        type: "text",
                        style: {
                            pointerEvents: g ? "all" : "none",
                            position: "absolute",
                            transform: "translate(-150%, 0)"
                        },
                        id: "".concat(u.$type, "-key-input"),
                        required: !0,
                        onKeyDown: _,
                        onKeyUp: F,
                        onBlur: () => {
                            L(!1)
                        }
                        ,
                        size: I,
                        onContextMenu: e => {
                            Y(e),
                            e.preventDefault()
                        }
                    }), u.KeyDown && !S && (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue down",
                        style: {
                            position: "absolute",
                            transform: "translate(0, 200%)"
                        },
                        onClick: () => {
                            g && T(!0)
                        }
                        ,
                        children: (0,
                        o.jsx)("span", {
                            children: oD(u.KeyDown)
                        })
                    }), S && g && (0,
                    o.jsx)("input", {
                        value: u.KeyDown,
                        ref: B,
                        type: "text",
                        style: {
                            pointerEvents: g ? "all" : "none",
                            position: "absolute",
                            transform: "translate(0, 200%)"
                        },
                        id: "".concat(u.$type, "-key-input"),
                        required: !0,
                        onKeyDown: _,
                        onKeyUp: F,
                        onBlur: () => {
                            T(!1)
                        }
                        ,
                        size: C,
                        onContextMenu: e => {
                            Y(e),
                            e.preventDefault()
                        }
                    }), u.KeyRight && !M && (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue right",
                        style: {
                            position: "absolute",
                            transform: "translate(125%, 0)"
                        },
                        onClick: () => {
                            g && O(!0)
                        }
                        ,
                        children: (0,
                        o.jsx)("span", {
                            children: oD(u.KeyRight)
                        })
                    }), M && g && (0,
                    o.jsx)("input", {
                        value: u.KeyRight,
                        ref: W,
                        type: "text",
                        style: {
                            pointerEvents: g ? "all" : "none",
                            position: "absolute",
                            transform: "translate(125%, 0)"
                        },
                        id: "".concat(u.$type, "-key-input"),
                        required: !0,
                        onKeyDown: _,
                        onKeyUp: F,
                        onBlur: () => {
                            O(!1)
                        }
                        ,
                        size: P,
                        onContextMenu: e => {
                            Y(e),
                            e.preventDefault()
                        }
                    })]
                }) : c ? u.GamepadStick ? (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)("span", {
                        className: "overlayKeyValue",
                        children: oD(u.GamepadStick)
                    }), (0,
                    o.jsx)(oB, {})]
                }) : (0,
                o.jsxs)(o.Fragment, {
                    children: [u.KeyUp_alt1 && (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue up",
                        style: {
                            transform: "translateY(-40%) translateY(-".concat(oK(p, 3), "px)")
                        },
                        children: (0,
                        o.jsx)("span", {
                            children: oD(u.KeyUp_alt1)
                        })
                    }), u.KeyLeft_alt1 && (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateX(-40%) translateX(-".concat(oK(p, 3), "px)")
                        },
                        children: (0,
                        o.jsx)("span", {
                            children: oD(u.KeyLeft_alt1)
                        })
                    }), u.KeyDown_alt1 && (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue down",
                        style: {
                            transform: "translateY(40%) translateY(".concat(oK(p, 3), "px)")
                        },
                        children: (0,
                        o.jsx)("span", {
                            children: u.KeyDown_alt1
                        })
                    }), u.KeyRight_alt1 && (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateX(40%) translateX(".concat(oK(p, 3), "px")
                        },
                        children: (0,
                        o.jsx)("span", {
                            children: u.KeyRight_alt1
                        })
                    }), (0,
                    o.jsx)(oB, {})]
                }) : null
            })
        }
          , oG = e => {
            var t, i;
            let {gamepad: n, control: l, newControl: d} = e
              , s = n ? oD(l.Key_alt1) : oO(l.Key)
              , [c,u] = (0,
            r.useState)((null === (t = l.Key) || void 0 === t ? void 0 : t.length) || 1)
              , [p,h] = (0,
            r.useState)(d)
              , g = (0,
            r.useRef)(null)
              , v = (0,
            a.v9)(e => e.play.showScriptEditor)
              , x = (0,
            a.v9)(e => e.play.scriptCommands)
              , f = (0,
            a.v9)(e => e.imap.keymappingEditMode)
              , m = (0,
            a.I0)()
              , w = e => {
                l.Key = "MouseRButton",
                u(12),
                e.target.value = "MouseRButton"
            }
            ;
            return (0,
            r.useEffect)( () => {
                f || h(!1)
            }
            , [f]),
            (0,
            r.useEffect)( () => {
                var e;
                p && (null === (e = g.current) || void 0 === e || e.focus())
            }
            , [p]),
            (0,
            r.useEffect)( () => {
                !v && x.length > 0 && (l.Commands = x,
                m({
                    type: P.Z.SCRIPT_EDITOR,
                    payload: {
                        scriptCommands: []
                    }
                }))
            }
            , [v]),
            (n ? l.Key_alt1 : l.Key) || f ? (0,
            o.jsxs)(o.Fragment, {
                children: [!p && (0,
                o.jsx)("span", {
                    className: "overlayKeyValue ".concat(l.Type, " ").concat(o_[s] ? "DpadImage" : ""),
                    onClick: () => {
                        var e;
                        f && h(!0),
                        null === (e = g.current) || void 0 === e || e.focus()
                    }
                    ,
                    style: {
                        pointerEvents: f ? "all" : "none",
                        minWidth: "28px",
                        minHeight: "16px"
                    },
                    children: o_[s] ? (0,
                    o.jsx)("img", {
                        src: null === (i = o_[s]) || void 0 === i ? void 0 : i.src,
                        alt: ""
                    }) : s
                }), f && "Script" === l.Type && (0,
                o.jsx)("img", {
                    src: (0,
                    _.jW)(oN),
                    alt: "",
                    style: {
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        background: "rgba(0,0,0,1)",
                        transform: "translate(14px, 18px)",
                        borderRadius: "8px",
                        padding: "2px"
                    },
                    onClick: () => {
                        m({
                            type: P.Z.SCRIPT_EDITOR,
                            payload: {
                                showScriptEditor: !0
                            }
                        })
                    }
                }), p && f && (0,
                o.jsx)("input", {
                    ref: g,
                    value: l.Key,
                    type: "text",
                    id: "".concat(l.$type, "-key-input"),
                    required: !0,
                    onKeyDown: e => {
                        let t = oH(e.code);
                        t && (l.Key = t,
                        u(t.length),
                        e.target.value = t)
                    }
                    ,
                    onKeyUp: e => {
                        oX = oX.filter(t => t !== e.code)
                    }
                    ,
                    onBlur: () => {
                        h(!1)
                    }
                    ,
                    size: c,
                    onContextMenu: e => {
                        w(e),
                        e.preventDefault()
                    }
                    ,
                    style: {
                        pointerEvents: f ? "all" : "none"
                    }
                })]
            }) : null
        }
          , oV = e => {
            var t;
            let {gamepad: i, control: n, newControl: l, isPanLeftControl: d} = e
              , s = d ? oO(n.KeyAction) : i ? oD(n.KeyStartStop_alt1) : oO(n.KeyStartStop)
              , [c,u] = (0,
            r.useState)(s.length)
              , [p,h] = (0,
            r.useState)(l)
              , g = (0,
            a.v9)(e => e.imap.keymappingEditMode)
              , v = (0,
            r.useRef)(null)
              , x = e => {
                d ? n.KeyAction = "MouseRButton" : n.KeyStartStop = "MouseRButton",
                u(12),
                e.target.value = "MouseRButton"
            }
            ;
            return (0,
            r.useEffect)( () => {
                g || h(!1)
            }
            , [g]),
            (0,
            r.useEffect)( () => {
                var e;
                p && g && (null === (e = v.current) || void 0 === e || e.focus())
            }
            , [p]),
            s ? (0,
            o.jsxs)(o.Fragment, {
                children: [!p && (0,
                o.jsx)("span", {
                    className: "overlayKeyValue",
                    onClick: () => {
                        g && h(!0)
                    }
                    ,
                    style: {
                        pointerEvents: g ? "all" : "none"
                    },
                    children: o_[s] ? (0,
                    o.jsx)("img", {
                        src: null === (t = o_[s]) || void 0 === t ? void 0 : t.src,
                        alt: ""
                    }) : s
                }), p && g && (0,
                o.jsx)("input", {
                    value: d ? n.KeyAction : n.KeyStartStop,
                    ref: v,
                    type: "text",
                    id: "".concat(n.$type, "-key-input"),
                    required: !0,
                    onKeyDown: e => {
                        let t = oH(e.code);
                        t && (d ? n.KeyAction = t : n.KeyStartStop = t,
                        u(t.length),
                        e.target.value = t)
                    }
                    ,
                    onKeyUp: e => {
                        oX = oX.filter(t => t !== e.code)
                    }
                    ,
                    onBlur: () => {
                        h(!1)
                    }
                    ,
                    size: c,
                    onContextMenu: e => {
                        x(e),
                        e.preventDefault()
                    }
                    ,
                    style: {
                        pointerEvents: g ? "all" : "none"
                    }
                })]
            }) : null
        }
          , oq = e => {
            var t, i, n;
            let {gamepad: l, control: d, newControl: s} = e
              , c = (0,
            a.v9)(e => e.play.videoRef)
              , u = (0,
            a.v9)(e => e.imap.keymappingEditMode)
              , p = null === (t = null == c ? void 0 : c.current) || void 0 === t ? void 0 : t.getBoundingClientRect()
              , h = l ? oD(d.KeyIn_alt1) : oO(d.KeyIn)
              , g = l ? oD(d.KeyOut_alt1) : oO(d.KeyOut)
              , [v,x] = (0,
            r.useState)((null === (i = d.KeyIn) || void 0 === i ? void 0 : i.length) || 1)
              , [f,m] = (0,
            r.useState)((null === (n = d.KeyOut) || void 0 === n ? void 0 : n.length) || 1)
              , [w,y] = (0,
            r.useState)(s)
              , [b,A] = (0,
            r.useState)(!1)
              , [j,C] = (0,
            r.useState)(((d.X1 || 0) - (d.X2 || 0)) / 2 * ((null == p ? void 0 : p.width) || 720) / 100)
              , [E,S] = (0,
            r.useState)(((d.Y1 || 0) - (d.Y2 || 0)) / 2 * ((null == p ? void 0 : p.height) || 720) / 100)
              , [T,I] = (0,
            r.useState)(((d.X2 || 0) - (d.X1 || 0)) / 2 * ((null == p ? void 0 : p.width) || 720) / 100)
              , [k,R] = (0,
            r.useState)(((d.Y2 || 0) - (d.Y1 || 0)) / 2 * ((null == p ? void 0 : p.height) || 720) / 100)
              , L = (0,
            r.useRef)(null)
              , P = (0,
            r.useRef)(null);
            (0,
            r.useEffect)( () => {
                C(((d.X1 || 0) - (d.X2 || 0)) / 2 * ((null == p ? void 0 : p.width) || 720) / 100),
                S(((d.Y1 || 0) - (d.Y2 || 0)) / 2 * ((null == p ? void 0 : p.height) || 720) / 100),
                I(((d.X2 || 0) - (d.X1 || 0)) / 2 * ((null == p ? void 0 : p.width) || 720) / 100),
                R(((d.Y2 || 0) - (d.Y1 || 0)) / 2 * ((null == p ? void 0 : p.height) || 720) / 100)
            }
            , [d.X1, d.X2, d.Y1, d.Y2]);
            let D = e => {
                let t = oH(e.code);
                t && (w ? (d.KeyIn = t,
                x(t.length)) : b && (d.KeyOut = t,
                m(t.length)),
                e.target.value = t)
            }
              , M = e => {
                oX = oX.filter(t => t !== e.code)
            }
              , O = e => {
                w ? (d.KeyIn = "MouseRButton",
                x(12)) : b && (d.KeyOut = "MouseRButton",
                m(12)),
                e.target.value = "MouseRButton"
            }
            ;
            return (0,
            r.useEffect)( () => {
                u || (y(!1),
                A(!1))
            }
            , [u]),
            (0,
            r.useEffect)( () => {
                var e, t;
                w && (null === (e = L.current) || void 0 === e || e.focus()),
                b && (null === (t = P.current) || void 0 === t || t.focus())
            }
            , [w, b]),
            u ? (0,
            o.jsxs)(o.Fragment, {
                children: [!w && (0,
                o.jsx)("span", {
                    className: "overlayKeyValue",
                    onClick: () => {
                        u && y(!0)
                    }
                    ,
                    style: {
                        pointerEvents: u ? "all" : "none",
                        position: "absolute",
                        minHeight: "16px",
                        transform: "translate(".concat(j, "px, ").concat(E, "px)")
                    },
                    children: h
                }), w && (0,
                o.jsx)("input", {
                    value: d.KeyIn,
                    ref: L,
                    type: "text",
                    id: "".concat(d.$type, "-key-input"),
                    required: !0,
                    onKeyDown: D,
                    onKeyUp: M,
                    onBlur: () => {
                        y(!1)
                    }
                    ,
                    size: v,
                    onContextMenu: e => {
                        O(e),
                        e.preventDefault()
                    }
                    ,
                    style: {
                        pointerEvents: u ? "all" : "none",
                        position: "absolute",
                        transform: "translate(".concat(j, "px, ").concat(E, "px)")
                    }
                }), !b && (0,
                o.jsx)("span", {
                    className: "overlayKeyValue",
                    onClick: () => {
                        u && A(!0)
                    }
                    ,
                    style: {
                        pointerEvents: u ? "all" : "none",
                        position: "absolute",
                        transform: "translate(".concat(T, "px, ").concat(k, "px)"),
                        minHeight: "16px"
                    },
                    children: g
                }), b && (0,
                o.jsx)("input", {
                    value: d.KeyOut,
                    ref: P,
                    type: "text",
                    id: "".concat(d.$type, "-key-input"),
                    required: !0,
                    onKeyDown: D,
                    onKeyUp: M,
                    onBlur: () => {
                        A(!1)
                    }
                    ,
                    size: f,
                    onContextMenu: e => {
                        O(e),
                        e.preventDefault()
                    }
                    ,
                    style: {
                        pointerEvents: u ? "all" : "none",
                        position: "absolute",
                        transform: "translate(".concat(T, "px, ").concat(k, "px)")
                    }
                })]
            }) : null
        }
          , oJ = e => {
            var t, i, n;
            let {controlKey: l, gamepad: d, control: s, newControl: c} = e
              , [u,p] = (0,
            r.useState)((null === (t = s.KeyActivate) || void 0 === t ? void 0 : t.length) || 1)
              , [h,g] = (0,
            r.useState)(c)
              , v = (0,
            r.useRef)(null)
              , x = (0,
            a.v9)(e => e.play.videoRef)
              , f = (0,
            a.v9)(e => e.imap.keymappingEditMode)
              , m = null === (i = null == x ? void 0 : x.current) || void 0 === i ? void 0 : i.getBoundingClientRect()
              , w = (s.XRadius || 8) * ((null == m ? void 0 : m.height) || 720) / 100
              , y = e => {
                s.KeyActivate = "MouseRButton",
                p(12),
                e.target.value = "MouseRButton"
            }
            ;
            return (0,
            r.useEffect)( () => {
                f || g(!1)
            }
            , [f]),
            (0,
            r.useEffect)( () => {
                var e;
                h && f && (null === (e = v.current) || void 0 === e || e.focus())
            }
            , [h]),
            (0,
            o.jsxs)(o.Fragment, {
                children: [!h && (o_[l] ? (0,
                o.jsx)("span", {
                    className: "overlayKeyValue",
                    children: (0,
                    o.jsx)("img", {
                        src: null === (n = o_[l]) || void 0 === n ? void 0 : n.src,
                        alt: ""
                    })
                }) : (0,
                o.jsx)("span", {
                    className: "overlayKeyValue MobaText ".concat(l),
                    children: d ? oD(l) : oO(l)
                })), f && (0,
                o.jsx)(oW, {
                    radius: w
                }), h && f && (0,
                o.jsx)("input", {
                    value: s.KeyActivate,
                    ref: v,
                    type: "text",
                    id: "".concat(s.$type, "-key-input"),
                    required: !0,
                    onKeyDown: e => {
                        let t = oH(e.code);
                        t && (s.KeyActivate = t,
                        p(t.length),
                        e.target.value = t)
                    }
                    ,
                    onKeyUp: e => {
                        oX = oX.filter(t => t !== e.code)
                    }
                    ,
                    onBlur: () => {
                        g(!1)
                    }
                    ,
                    size: u,
                    onContextMenu: e => {
                        y(e),
                        e.preventDefault()
                    }
                    ,
                    style: {
                        pointerEvents: f ? "all" : "none"
                    }
                })]
            })
        }
          , oQ = e => {
            let {control: t} = e
              , i = (0,
            a.v9)(e => e.imap.keymappingEditMode);
            return i ? (0,
            o.jsx)("span", {
                style: {
                    pointerEvents: i ? "all" : "none",
                    minWidth: "28px",
                    minHeight: "16px"
                },
                children: (0,
                o.jsx)("img", {
                    src: (0,
                    _.jW)(oZ),
                    alt: ""
                })
            }) : null
        }
          , o$ = e => {
            var t, i;
            let {control: n, newControl: l} = e
              , d = oO(n.KeyMove)
              , [s,c] = (0,
            r.useState)((null === (t = n.KeyMove) || void 0 === t ? void 0 : t.length) || 1)
              , [u,p] = (0,
            r.useState)(l)
              , h = (0,
            r.useRef)(null)
              , g = (0,
            a.v9)(e => e.imap.keymappingEditMode)
              , v = e => {
                n.KeyMove = "MouseRButton",
                c(12),
                e.target.value = "MouseRButton"
            }
            ;
            return (0,
            r.useEffect)( () => {
                g || p(!1)
            }
            , [g]),
            (0,
            r.useEffect)( () => {
                var e;
                u && (null === (e = h.current) || void 0 === e || e.focus())
            }
            , [u]),
            g ? (0,
            o.jsxs)(o.Fragment, {
                children: [!u && (0,
                o.jsx)("span", {
                    className: "overlayKeyValue ".concat(n.Type, " ").concat(o_[d] ? "DpadImage" : ""),
                    onClick: () => {
                        var e;
                        g && p(!0),
                        null === (e = h.current) || void 0 === e || e.focus()
                    }
                    ,
                    style: {
                        pointerEvents: g ? "all" : "none",
                        minWidth: "28px",
                        minHeight: "16px"
                    },
                    children: o_[d] ? (0,
                    o.jsx)("img", {
                        src: null === (i = o_[d]) || void 0 === i ? void 0 : i.src,
                        alt: ""
                    }) : d
                }), u && g && (0,
                o.jsx)("input", {
                    ref: h,
                    value: n.KeyMove,
                    type: "text",
                    id: "".concat(n.$type, "-key-input"),
                    required: !0,
                    onKeyDown: e => {
                        let t = oH(e.code);
                        t && (n.KeyMove = t,
                        c(t.length),
                        e.target.value = t)
                    }
                    ,
                    onKeyUp: e => {
                        oX = oX.filter(t => t !== e.code)
                    }
                    ,
                    onBlur: () => {
                        p(!1)
                    }
                    ,
                    size: s,
                    onContextMenu: e => {
                        v(e),
                        e.preventDefault()
                    }
                    ,
                    style: {
                        pointerEvents: g ? "all" : "none"
                    }
                })]
            }) : null
        }
          , o0 = function(e, t, i, n) {
            let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
              , a = R.default.getState().imap.keymappingEditMode;
            switch (e.Type) {
            case oo.x_.Tap:
            case oo.x_.TapRepeat:
            case oo.x_.Script:
            case oo.x_.Swipe:
            case oo.x_.State:
                return (0,
                o.jsx)(oG, {
                    gamepad: t,
                    control: e,
                    newControl: n
                });
            case oo.x_.Dpad:
                return (0,
                o.jsx)(oz, {
                    gamepad: t,
                    height: i.height || 500,
                    control: e,
                    newControl: n
                });
            case oo.x_.FreeLook:
                return (0,
                o.jsx)(oU, {
                    gamepad: t,
                    height: i.height || 500,
                    control: e,
                    newControl: n
                });
            case oo.x_.Pan:
                return (0,
                o.jsx)(oV, {
                    gamepad: t,
                    control: e,
                    newControl: n,
                    isPanLeftControl: r
                });
            case oo.x_.MOBASkill:
                {
                    let i = t ? e.KeyActivate_alt1 : e.KeyActivate;
                    if (i || a)
                        return (0,
                        o.jsx)(oJ, {
                            controlKey: i || "",
                            gamepad: t,
                            control: e,
                            newControl: n
                        });
                    break
                }
            case oo.x_.Zoom:
                return (0,
                o.jsx)(oq, {
                    gamepad: t,
                    control: e,
                    newControl: n
                });
            case oo.x_.EdgeScroll:
            case oo.x_.Scroll:
                return (0,
                o.jsx)(oQ, {
                    control: e
                });
            case oo.x_.MOBADpad:
                return (0,
                o.jsx)(o$, {
                    control: e,
                    newControl: n
                });
            default:
                if (a)
                    return (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue ".concat(e.Type),
                        style: {
                            pointerEvents: a ? "all" : "none",
                            minWidth: "28px",
                            minHeight: "16px"
                        }
                    })
            }
            return ""
        }
          , o1 = e => {
            let {children: t, style: i={}, className: n, controlRef: l, callback: d, isPanLeftControl: c=!1} = e
              , u = (0,
            r.useRef)(null)
              , h = (0,
            a.v9)(e => e.play.videoRef)
              , g = (0,
            a.v9)(e => e.imap.keymappingEditMode)
              , [v,x] = (0,
            r.useState)(!1)
              , f = (0,
            a.I0)()
              , m = 0
              , w = 0
              , y = 0
              , b = 0
              , A = !1;
            function j(e, t) {
                var i;
                let n = e + y
                  , o = t + b
                  , r = null === (i = null == h ? void 0 : h.current) || void 0 === i ? void 0 : i.getBoundingClientRect();
                (null == u ? void 0 : u.current) && (r && (n = Math.min(Math.max(n, r.left), r.right),
                o = Math.min(Math.max(o, r.top), r.bottom)),
                u.current.style.transform = "translate3d(".concat(n - y, "px, ").concat(o - b, "px, 0)"))
            }
            function C(e) {
                var t, i;
                let n = R.default.getState().play.orientation;
                e.preventDefault();
                let o = (null === (t = null == u ? void 0 : u.current) || void 0 === t ? void 0 : t.clientHeight) || 0
                  , r = (null === (i = null == u ? void 0 : u.current) || void 0 === i ? void 0 : i.clientWidth) || 0;
                if ("touchmove" === e.type) {
                    if (window.innerHeight > window.innerWidth && 0 === window.orientation && n === p.cj.landscape) {
                        if (e.touches[0].clientX - o < 5 && e.touches[0].clientY - 10 < 5 || window.innerWidth - e.touches[0].clientX < 10 && window.innerHeight - e.touches[0].clientY < r + 10 || e.touches[0].clientX - o < 5 && window.innerHeight - e.touches[0].clientY < r + 10 || e.touches[0].clientY - 10 < 5 && window.innerWidth - e.touches[0].clientX < 10)
                            return;
                        if (e.touches[0].clientX - o < 5) {
                            m = e.touches[0].clientY,
                            w = window.innerWidth - o - 5,
                            j(m, w);
                            return
                        }
                        if (e.touches[0].clientY - 10 < 5) {
                            m = 5,
                            w = window.innerWidth - e.touches[0].clientX,
                            j(m, w);
                            return
                        }
                        if (window.innerWidth - e.touches[0].clientX < 10) {
                            j(m = e.touches[0].clientY, w = 10);
                            return
                        }
                        if (window.innerHeight - e.touches[0].clientY < r + 10) {
                            m = window.innerHeight - r - 10,
                            w = window.innerWidth - e.touches[0].clientX,
                            j(m, w);
                            return
                        }
                        m = e.touches[0].clientY,
                        w = window.innerWidth - e.touches[0].clientX
                    } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && n === p.cj.landscape) {
                        if (e.touches[0].clientX - 10 < 5 && e.touches[0].clientY < 5 || window.innerWidth - e.touches[0].clientX < r + 5 && window.innerHeight - e.touches[0].clientY < o + 5 || e.touches[0].clientX - 10 < 5 && window.innerHeight - e.touches[0].clientY < o + 5 || e.touches[0].clientY < 5 && window.innerWidth - e.touches[0].clientX < r + 5)
                            return;
                        if (e.touches[0].clientX - 10 < 5) {
                            m = 5,
                            w = e.targetTouches[0].clientY,
                            j(m, w);
                            return
                        }
                        if (e.touches[0].clientY < 5) {
                            j(m = e.targetTouches[0].clientX, w = 5);
                            return
                        }
                        if (window.innerWidth - e.touches[0].clientX < r + 5) {
                            m = window.innerWidth - r - 5,
                            w = e.targetTouches[0].clientY,
                            j(m, w);
                            return
                        }
                        if (window.innerHeight - e.touches[0].clientY < o + 5) {
                            m = e.targetTouches[0].clientX,
                            w = window.innerHeight - o - 5,
                            j(m, w);
                            return
                        }
                        m = e.targetTouches[0].clientX,
                        w = e.targetTouches[0].clientY
                    } else if (window.innerHeight > window.innerWidth && 0 === window.orientation && n === p.cj.portrait) {
                        if (e.touches[0].clientX < 5 && e.touches[0].clientY < 5 || e.touches[0].clientX > window.innerWidth - (r + 5) && window.innerHeight < e.touches[0].clientY + o + 5 || e.touches[0].clientX < 5 && window.innerHeight < e.touches[0].clientY + o + 5 || e.touches[0].clientY < 5 && e.touches[0].clientX > window.innerWidth - (r + 5))
                            return;
                        if (e.touches[0].clientX < 5) {
                            m = 5,
                            w = e.touches[0].clientY,
                            j(m, w);
                            return
                        }
                        if (e.touches[0].clientY < 5) {
                            j(m = e.touches[0].clientX, w = 5);
                            return
                        }
                        if (e.touches[0].clientX > window.innerWidth - (r + 5)) {
                            m = window.innerWidth - (r + 5),
                            w = e.touches[0].clientY,
                            j(m, w);
                            return
                        }
                        if (e.touches[0].clientY > window.innerHeight - (o + 5)) {
                            m = e.touches[0].clientX,
                            w = window.innerHeight - (o + 5),
                            j(m, w);
                            return
                        }
                        m = e.touches[0].clientX,
                        w = e.touches[0].clientY
                    } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && n === p.cj.portrait) {
                        if (e.touches[0].clientX < 5 && e.touches[0].clientY < 5 + r || e.touches[0].clientX < 5 && e.touches[0].clientY + 5 > window.innerHeight || e.touches[0].clientX > window.innerWidth - (o + 5) && e.touches[0].clientY < 5 + r || e.touches[0].clientX > window.innerWidth - (o + 5) && e.touches[0].clientY + 5 > window.innerHeight)
                            return;
                        if (e.touches[0].clientX < 5) {
                            j(m = window.innerHeight - e.targetTouches[0].clientY, w = 5);
                            return
                        }
                        if (e.touches[0].clientY < 5 + r) {
                            m = window.innerHeight - (5 + r),
                            w = e.targetTouches[0].clientX,
                            j(m, w);
                            return
                        }
                        if (e.touches[0].clientX > window.innerWidth - (o + 5)) {
                            m = window.innerHeight - e.targetTouches[0].clientY,
                            w = window.innerWidth - (o + 5),
                            j(m, w);
                            return
                        }
                        if (e.touches[0].clientY + 5 > window.innerHeight) {
                            m = 5,
                            w = e.targetTouches[0].clientX,
                            j(m, w);
                            return
                        }
                        m = window.innerHeight - e.targetTouches[0].clientY,
                        w = e.targetTouches[0].clientX
                    }
                } else {
                    if (e.clientX - r < 5 || e.clientY < 20 || window.innerWidth - e.clientX < 20 || window.innerHeight - e.clientY < o - 20)
                        return;
                    m = e.clientX - y,
                    w = e.clientY - b,
                    A = !0
                }
                j(m, w)
            }
            let E = () => {
                f({
                    type: P.Z.DRAGGABLE,
                    payload: {
                        draggableState: A ? "drag" : "click"
                    }
                })
            }
            ;
            function S(e) {
                var t, i;
                let n = null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.getBoundingClientRect()
                  , o = A;
                if (A = !1,
                E(),
                y = m,
                b = w,
                m = 0,
                w = 0,
                document.removeEventListener("mouseup", S, !0),
                document.removeEventListener("mousemove", C, !1),
                o) {
                    let t = null === (i = l.current) || void 0 === i ? void 0 : i.getBoundingClientRect();
                    if (u.current && n && (u.current.style.transform = "unset",
                    t)) {
                        let t = 0
                          , i = 0;
                        "touchmove" === e.type ? (t = e.touches[0].clientX,
                        i = e.touches[0].clientY) : (t = e.clientX,
                        i = e.clientY),
                        d && d(t, i, c)
                    }
                }
            }
            function T(e) {
                if (!R.default.getState().imap.keymappingEditMode)
                    return;
                let t = R.default.getState().play.orientation;
                if ((0,
                s.DJ)() && (t === p.cj.landscape ? 90 : 0) !== window.orientation && f({
                    type: P.Z.UPDATE_ORIENTATION,
                    payload: {
                        orientation: 90 === window.orientation ? p.cj.landscape : p.cj.portrait
                    }
                }),
                "mousedown" === e.type) {
                    let t = e.target;
                    if ("ng-vol" === t.id || "volume-slider" === t.id || "sensitivity-slider" === t.id || "sensitivty-box" === t.id)
                        return;
                    A = !1,
                    E(),
                    y = e.clientX - m,
                    b = e.clientY - w
                }
                document.addEventListener("mousemove", C, !1),
                document.addEventListener("mouseup", S, !0)
            }
            return (0,
            r.useEffect)( () => {
                let e = null == u ? void 0 : u.current;
                v && !g && (null == e || e.removeEventListener("touchstart", T, !1),
                null == e || e.removeEventListener("touchend", S, !1),
                null == e || e.removeEventListener("touchmove", C, !1),
                null == e || e.removeEventListener("mousedown", T, !1),
                x(!1)),
                g && !v && (null == e || e.addEventListener("touchstart", T, !1),
                null == e || e.addEventListener("touchend", S, !1),
                null == e || e.addEventListener("touchmove", C, !1),
                null == e || e.addEventListener("mousedown", T),
                x(!0))
            }
            , [g]),
            (0,
            o.jsx)("div", {
                ref: u,
                className: "drag-react ".concat(n),
                style: Object.assign({
                    position: g ? "fixed" : "unset",
                    zIndex: 13,
                    width: "fill-content",
                    pointerEvents: "unset"
                }, i),
                children: t
            })
        }
        ;
        class o2 {
            constructor() {
                this.Tweaks = 0,
                this.Exclusive = !1,
                this.ExclusiveDelay = 200,
                this.Enabled = !0,
                this.XExpr = "",
                this.YExpr = "",
                this.XOverlayOffset = "",
                this.YOverlayOffset = "",
                this.StartCondition = "",
                this.EnableCondition = "",
                this.ShowOnOverlay = !0
            }
        }
        class o5 extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                        return "key";
                    case "GuidanceKey":
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                        return "boolean"
                    }
                }
                ,
                this.X = 0,
                this.Y = 0,
                this.Key = "",
                this.Key_alt1 = "",
                this.GuidanceKey = ""
            }
        }
        class o4 extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKey":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Count":
                    case "Delay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "RepeatUntilKeyUp":
                        return "boolean"
                    }
                }
                ,
                this.X = 0,
                this.Y = 0,
                this.Key = "",
                this.Key_alt1 = "",
                this.GuidanceKey = "",
                this.Count = 1,
                this.Delay = 16,
                this.RepeatUntilKeyUp = !0
            }
        }
        class o9 extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "Override":
                        return "boolean";
                    case "Speed":
                    case "Amplitude":
                        return "float"
                    }
                }
                ,
                this.X = 0,
                this.Y = 0,
                this.Speed = 100,
                this.Amplitude = 20,
                this.Override = !0
            }
        }
        class o3 extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "KeyUp":
                    case "KeyUp_alt1":
                    case "KeyDown":
                    case "KeyDown_alt1":
                    case "KeyLeft":
                    case "KeyLeft_alt1":
                    case "KeyRight":
                    case "KeyRight_alt1":
                    case "KeySpeedModifier1":
                    case "KeySpeedModifier1_alt1":
                    case "KeySpeedModifier2":
                    case "KeySpeedModifier2_alt1":
                    case "GamepadStick":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyUp":
                    case "GuidanceKeyDown":
                    case "GuidanceKeyLeft":
                    case "GuidanceKeyRight":
                    case "GuidanceKeySpeedModifier1":
                    case "GuidanceKeySpeedModifier2":
                    case "GuidanceDpadTitle":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "ActivationSpeed":
                    case "ActivationTime":
                    case "DeadExpiryTime":
                    case "AnalogType":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                        return "boolean";
                    case "XRadius":
                    case "XRadius1":
                    case "XRadius2":
                    case "DeadZoneRadius":
                    case "Speed":
                        return "float"
                    }
                }
                ,
                this.X = 0,
                this.Y = 0,
                this.KeyUp = "W",
                this.KeyUp_alt1 = "",
                this.GuidanceKeyUp = "Up",
                this.KeyDown = "S",
                this.KeyDown_alt1 = "",
                this.GuidanceKeyDown = "Down",
                this.KeyRight = "D",
                this.KeyRight_alt1 = "",
                this.GuidanceKeyRight = "Right",
                this.KeyLeft = "A",
                this.KeyLeft_alt1 = "",
                this.GuidanceKeyLeft = "Left",
                this.KeySpeedModifier1 = "",
                this.KeySpeedModifier1_alt1 = "",
                this.GuidanceKeySpeedModifier1 = "",
                this.KeySpeedModifier2 = "",
                this.KeySpeedModifier2_alt1 = "",
                this.GuidanceKeySpeedModifier2 = "",
                this.GamepadStick = "",
                this.XRadius = 0,
                this.XRadius1 = 0,
                this.XRadius2 = 0,
                this.DeadZoneRadius = 0,
                this.Speed = 100,
                this.ActivationSpeed = 0,
                this.ActivationTime = 0,
                this.DeadExpiryTime = 0,
                this.AnalogType = 0,
                this.GuidanceDpadTitle = ""
            }
        }
        class o6 extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                    case "KeyStartStop":
                    case "KeyStartStop_alt1":
                    case "KeySuspend":
                    case "KeySuspend_alt1":
                    case "KeyLookAround":
                    case "KeyLookAround_alt1":
                    case "GamepadStick":
                    case "KeyAction":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyStartStop":
                    case "GuidanceKeySuspend":
                    case "GuidanceKeyLookAround":
                    case "LButtonXExpr":
                    case "LButtonYExpr":
                    case "LButtonXOverlayOffset":
                    case "LButtonYOverlayOffset":
                    case "LookAroundXExpr":
                    case "LookAroundYExpr":
                    case "LookAroundXOverlayOffset":
                    case "LookAroundYOverlayOffset":
                    case "LookAroundShowOnOverlayExpr":
                    case "LButtonShowOnOverlayExpr":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "WaitAfterShootTime":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "AutoDisable":
                    case "MouseAcceleration":
                    case "IsLookAroundEnabled":
                    case "IsShootOnClickEnabled":
                        return "boolean";
                    case "Sensitivity":
                    case "SensitivityRatio":
                    case "LButtonX":
                    case "LButtonY":
                    case "LookAroundX":
                    case "LookAroundY":
                    case "GamepadSensitivity":
                    case "DeadzoneRadius":
                    case "Left":
                    case "Right":
                    case "Top":
                    case "Bottom":
                    case "Speed":
                    case "ActivationTimeMs":
                        return "float"
                    }
                }
                ,
                this.X = 0,
                this.Y = 0,
                this.KeyStartStop = "F1",
                this.KeyStartStop_alt1 = "",
                this.GuidanceKeyStartStop = "",
                this.KeySuspend = "Alt",
                this.KeySuspend_alt1 = "",
                this.GuidanceKeySuspend = "",
                this.KeyLookAround = "",
                this.KeyLookAround_alt1 = "",
                this.GuidanceKeyLookAround = "",
                this.Sensitivity = 1,
                this.SensitivityRatio = 1,
                this.LButtonX = -1,
                this.LButtonY = -1,
                this.LookAroundX = -1,
                this.LookAroundY = -1,
                this.AutoDisable = !1,
                this.MouseAcceleration = !1,
                this.IsLookAroundEnabled = !1,
                this.IsShootOnClickEnabled = !1,
                this.GamepadStick = "",
                this.GamepadSensitivity = 1,
                this.DeadzoneRadius = 14,
                this.Left = 250,
                this.Right = 250,
                this.Top = 1e3,
                this.Bottom = 1e3,
                this.Speed = 10,
                this.ActivationTimeMs = 40,
                this.KeyAction = "MouseLButton",
                this.WaitAfterShootTime = -1,
                this.LButtonXExpr = "",
                this.LButtonYExpr = "",
                this.LButtonXOverlayOffset = "",
                this.LButtonYOverlayOffset = "",
                this.LookAroundXExpr = "",
                this.LookAroundYExpr = "",
                this.LookAroundXOverlayOffset = "",
                this.LookAroundYOverlayOffset = "",
                this.LookAroundShowOnOverlayExpr = "",
                this.LButtonShowOnOverlayExpr = ""
            }
        }
        class o7 extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                    case "KeyUp":
                    case "KeyUp_alt1":
                    case "KeyDown":
                    case "KeyDown_alt1":
                    case "KeyLeft":
                    case "KeyLeft_alt1":
                    case "KeyRight":
                    case "KeyRight_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKey":
                    case "GuidanceKeyUp":
                    case "GuidanceKeyDown":
                    case "GuidanceKeyLeft":
                    case "GuidanceKeyRight":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "DeviceType":
                    case "Delay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "MouseAcceleration":
                        return "boolean";
                    case "Sensitivity":
                    case "Speed":
                        return "float"
                    }
                }
                ,
                this.X = 0,
                this.Y = 0,
                this.Key = "V",
                this.Key_alt1 = "",
                this.GuidanceKey = "",
                this.KeyUp = "Up",
                this.KeyUp_alt1 = "",
                this.GuidanceKeyUp = "Up",
                this.KeyDown = "Down",
                this.KeyDown_alt1 = "",
                this.GuidanceKeyDown = "Down",
                this.KeyRight = "Right",
                this.KeyRight_alt1 = "",
                this.GuidanceKeyRight = "Right",
                this.KeyLeft = "Left",
                this.KeyLeft_alt1 = "",
                this.GuidanceKeyLeft = "Left",
                this.Sensitivity = 1,
                this.Speed = 10,
                this.DeviceType = 0,
                this.Delay = 50,
                this.MouseAcceleration = !1
            }
        }
        class o8 extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X1":
                    case "Y1":
                    case "X2":
                    case "Y2":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKey":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Speed":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "Hold":
                    case "KeyUpStop":
                        return "boolean"
                    }
                }
                ,
                this.X1 = 0,
                this.Y1 = 0,
                this.X2 = 0,
                this.Y2 = 0,
                this.Key = "",
                this.Key_alt1 = "",
                this.GuidanceKey = "",
                this.Speed = 200,
                this.Hold = !1,
                this.KeyUpStop = !1
            }
        }
        class re extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X1":
                    case "Y1":
                    case "X2":
                    case "Y2":
                        return "coord";
                    case "KeyIn":
                    case "KeyIn_alt1":
                    case "KeyOut":
                    case "KeyOut_alt1":
                    case "KeyModifier":
                    case "KeyModifier_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyIn":
                    case "GuidanceKeyOut":
                    case "GuidanceKeyModifier":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Speed":
                    case "Mode":
                    case "ResetDelay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "Override":
                        return "boolean"
                    }
                }
                ,
                this.X1 = 0,
                this.Y1 = 0,
                this.X2 = 0,
                this.Y2 = 0,
                this.KeyIn = "",
                this.KeyIn_alt1 = "",
                this.GuidanceKeyIn = "",
                this.KeyOut = "",
                this.KeyOut_alt1 = "",
                this.GuidanceKeyOut = "",
                this.KeyModifier = "",
                this.KeyModifier_alt1 = "",
                this.GuidanceKeyModifier = "",
                this.Speed = 1,
                this.Mode = 0,
                this.ResetDelay = 75,
                this.Override = !0
            }
        }
        class rt extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X1":
                    case "Y1":
                    case "X2":
                    case "Y2":
                        return "coord";
                    case "KeyModifier":
                    case "KeyModifier_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyModifier":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Speed":
                    case "Amplitude":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "Override":
                        return "boolean"
                    }
                }
                ,
                this.X1 = 0,
                this.Y1 = 0,
                this.X2 = 0,
                this.Y2 = 0,
                this.KeyModifier = "",
                this.KeyModifier_alt1 = "",
                this.GuidanceKeyModifier = "",
                this.Speed = 40,
                this.Amplitude = 25,
                this.Override = !0
            }
        }
        class ri extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "KeyClock":
                    case "KeyClock_alt1":
                    case "KeyAntiClock":
                    case "KeyAntiClock_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyClock":
                    case "GuidanceKeyAntiClock":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Speed":
                    case "ActivationTime":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                        return "boolean";
                    case "XRadius":
                    case "StartingAngle":
                        return "float"
                    }
                }
                ,
                this.X = 0,
                this.Y = 0,
                this.XRadius = 6,
                this.StartingAngle = 90,
                this.Speed = 60,
                this.ActivationTime = 100,
                this.KeyClock = "",
                this.KeyClock_alt1 = "",
                this.GuidanceKeyClock = "",
                this.KeyAntiClock = "",
                this.KeyAntiClock_alt1 = "",
                this.GuidanceKeyAntiClock = ""
            }
        }
        class rn extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "KeyUp":
                    case "KeyUp_alt1":
                    case "KeyDown":
                    case "KeyDown_alt1":
                    case "KeyLeft":
                    case "KeyLeft_alt1":
                    case "KeyRight":
                    case "KeyRight_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyUp":
                    case "GuidanceKeyDown":
                    case "GuidanceKeyLeft":
                    case "GuidanceKeyRight":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Radius":
                    case "MaxAngle":
                    case "Speed":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "AutoReset":
                        return "boolean"
                    }
                }
                ,
                this.X = 0,
                this.Y = 0,
                this.Radius = 10,
                this.MaxAngle = 45,
                this.Speed = 45,
                this.AutoReset = !0,
                this.KeyUp = "Up",
                this.KeyUp_alt1 = "",
                this.GuidanceKeyUp = "",
                this.KeyDown = "Down",
                this.KeyDown_alt1 = "",
                this.GuidanceKeyDown = "",
                this.KeyRight = "Right",
                this.KeyRight_alt1 = "",
                this.GuidanceKeyRight = "",
                this.KeyLeft = "Left",
                this.KeyLeft_alt1 = "",
                this.GuidanceKeyLeft = ""
            }
        }
        class ro extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X":
                    case "Y":
                    case "OriginX":
                    case "OriginY":
                    case "CancelX":
                    case "CancelY":
                        return "coord";
                    case "KeyMove":
                    case "KeyCancel":
                    case "KeyCancel_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyCancel":
                    case "OriginXExpr":
                    case "OriginYExpr":
                    case "CancelXExpr":
                    case "CancelYExpr":
                    case "cancelXOverlayOffset":
                    case "cancelYOverlayOffset":
                    case "cancelShowOnOverlayExpr":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "IsCancelSkillEnabled":
                        return "boolean";
                    case "XRadius":
                    case "DpadSpeed":
                    case "CharSpeed":
                        return "float"
                    }
                }
                ,
                this.X = 0,
                this.Y = 0,
                this.OriginX = 50,
                this.OriginY = 50,
                this.CancelX = -1,
                this.CancelY = -1,
                this.XRadius = 6,
                this.DpadSpeed = 120,
                this.CharSpeed = 10,
                this.IsCancelSkillEnabled = !1,
                this.KeyMove = "MouseRButton",
                this.KeyCancel = "",
                this.KeyCancel_alt1 = "",
                this.GuidanceKeyCancel = "",
                this.OriginXExpr = "",
                this.OriginYExpr = "",
                this.CancelXExpr = "",
                this.CancelYExpr = "",
                this.cancelXOverlayOffset = "",
                this.cancelYOverlayOffset = "",
                this.cancelShowOnOverlayExpr = ""
            }
        }
        class rr extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X":
                    case "Y":
                    case "OriginX":
                    case "OriginY":
                    case "CancelX":
                    case "CancelY":
                        return "coord";
                    case "KeyActivate":
                    case "KeyActivate_alt1":
                    case "KeyAutocastToggle":
                    case "KeyAutocastToggle_alt1":
                    case "KeyCancel":
                    case "KeyCancel_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKeyActivate":
                    case "GuidanceKeyAutocastToggle":
                    case "GuidanceKeyCancel":
                    case "OriginXExpr":
                    case "OriginYExpr":
                    case "CancelXExpr":
                    case "CancelYExpr":
                    case "cancelXOverlayOffset":
                    case "cancelYOverlayOffset":
                    case "cancelShowOnOverlayExpr":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "NoCancelOnSwitch":
                    case "NoCancelTime":
                    case "MinSkillTime":
                    case "MinSKillHoldTime":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "IsCancelSkillEnabled":
                    case "AutoAttack":
                    case "StopMOBADpad":
                    case "AdvancedMode":
                    case "AutocastEnabled":
                        return "boolean";
                    case "YAxisRatio":
                    case "XRadius":
                    case "DeadZoneRadius":
                    case "Speed":
                    case "CancelSpeed":
                    case "MinSwipeRadius":
                        return "float";
                    case "ExtraData":
                        return "array"
                    }
                }
                ,
                this.X = 0,
                this.Y = 0,
                this.OriginX = 50,
                this.OriginY = 50,
                this.CancelX = -1,
                this.CancelY = -1,
                this.YAxisRatio = 0,
                this.XRadius = 8,
                this.DeadZoneRadius = 0,
                this.Speed = 200,
                this.CancelSpeed = 200,
                this.MinSwipeRadius = 0,
                this.NoCancelOnSwitch = 0,
                this.NoCancelTime = 0,
                this.MinSkillTime = 0,
                this.MinSKillHoldTime = 0,
                this.IsCancelSkillEnabled = !1,
                this.AutoAttack = !1,
                this.StopMOBADpad = !1,
                this.AdvancedMode = !0,
                this.AutocastEnabled = !0,
                this.KeyActivate = "",
                this.KeyActivate_alt1 = "",
                this.GuidanceKeyActivate = "",
                this.KeyAutocastToggle = "",
                this.KeyAutocastToggle_alt1 = "",
                this.GuidanceKeyAutocastToggle = "",
                this.KeyCancel = "",
                this.KeyCancel_alt1 = "",
                this.GuidanceKeyCancel = "",
                this.GamepadStick = "",
                this.OriginXExpr = "",
                this.OriginYExpr = "",
                this.CancelXExpr = "",
                this.CancelYExpr = "",
                this.cancelXOverlayOffset = "",
                this.cancelYOverlayOffset = "",
                this.cancelShowOnOverlayExpr = "",
                this.ExtraData = []
            }
        }
        class ra extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKey":
                    case "Name":
                    case "Model":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "Delay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                        return "boolean"
                    }
                }
                ,
                this.X = 0,
                this.Y = 0,
                this.Delay = 0,
                this.Key = "",
                this.Key_alt1 = "",
                this.GuidanceKey = "",
                this.Name = "",
                this.Model = "Modifier"
            }
        }
        class rl extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                    case "ResetDelay":
                    case "SpeedUpWaitTime":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                    case "EdgeScrollEnabled":
                        return "boolean";
                    case "XVelocity":
                    case "YVelocity":
                    case "XActiveMargin":
                    case "YActiveMargin":
                    case "SpeedUpFactor":
                        return "float"
                    }
                }
                ,
                this.X = 0,
                this.Y = 0,
                this.XVelocity = 100,
                this.YVelocity = 100,
                this.XActiveMargin = 3,
                this.YActiveMargin = 3,
                this.SpeedUpFactor = 2,
                this.ResetDelay = 150,
                this.SpeedUpWaitTime = 200,
                this.EdgeScrollEnabled = !0
            }
        }
        class rd extends o2 {
            constructor() {
                super(),
                this.checkKeyType = e => {
                    switch (e) {
                    case "X":
                    case "Y":
                        return "coord";
                    case "Key":
                    case "Key_alt1":
                        return "key";
                    case "XExpr":
                    case "YExpr":
                    case "XOverlayOffset":
                    case "YOverlayOffset":
                    case "StartCondition":
                    case "EnableCondition":
                    case "GuidanceKey":
                    default:
                        return "string";
                    case "Tweaks":
                    case "ExclusiveDelay":
                        return "int";
                    case "Exclusive":
                    case "Enabled":
                    case "ShowOnOverlay":
                        return "boolean";
                    case "Commands":
                        return "array"
                    }
                }
                ,
                this.X = 0,
                this.Y = 0,
                this.Key = "",
                this.Key_alt1 = "",
                this.GuidanceKey = "",
                this.Commands = []
            }
        }
        let rs = []
          , rc = e => {
            switch (e) {
            case "Tap":
            default:
                return new o5;
            case "TapRepeat":
                return new o4;
            case "Scroll":
                return new o9;
            case "Dpad":
                return new o3;
            case "Pan":
                return new o6;
            case "FreeLook":
                return new o7;
            case "Swipe":
                return new o8;
            case "Zoom":
                return new re;
            case "MouseZoom":
                return new rt;
            case "Rotate":
                return new ri;
            case "Tilt":
                return new rn;
            case "MOBADpad":
                return new ro;
            case "MOBASkill":
                return new rr;
            case "State":
                return new ra;
            case "EdgeScroll":
                return new rl;
            case "Script":
                return new rd
            }
        }
        ;
        var ru = e => {
            var t, i, n;
            let {control: l, isGamepadview: d, offset: c, index: u, deleteCallback: p, newControl: h} = e
              , {t: g} = (0,
            K.$)()
              , v = (0,
            r.useRef)(null)
              , x = (0,
            a.v9)(e => e.play.videoRef)
              , f = (0,
            a.v9)(e => e.imap.keymappingEditMode)
              , [m,w] = (0,
            r.useState)(!1)
              , y = o0(l, d, c, h)
              , b = l.IsVisibleInOverlay || l.ShowOnOverlay
              , [A,j] = (0,
            r.useState)(l.X)
              , [C,E] = (0,
            r.useState)(l.Y)
              , [S,T] = (0,
            r.useState)(!1)
              , I = (0,
            r.useRef)(null)
              , k = (0,
            r.useRef)(null)
              , R = rc(l.Type)
              , L = Object.keys(R);
            L.splice(L.indexOf("checkKeyType"), 1),
            L.splice(L.length - 1, 0, ...L.splice(0, 11));
            let P = (0,
            r.useRef)(null)
              , D = 0
              , M = 0
              , O = 0
              , Z = 0
              , N = 0
              , B = 0
              , F = 0;
            function Y(e) {
                var t, i;
                e.preventDefault();
                let n = (null === (t = null == P ? void 0 : P.current) || void 0 === t ? void 0 : t.clientHeight) || 0
                  , o = (null === (i = null == P ? void 0 : P.current) || void 0 === i ? void 0 : i.clientWidth) || 0;
                if (e.clientX - o < 5 || e.clientY < 20 || window.innerWidth - e.clientX < 20 || window.innerHeight - e.clientY < n - 20)
                    return;
                B += (e.clientX - N) / 2,
                B = Math.max(B, -F),
                D = e.clientX - O,
                M = e.clientY - Z,
                N = e.clientX,
                e.clientY;
                let r = B + oK(c.height || 500, (l.XRadius || 5) / 2) + 25
                  , a = B + oK(c.height || 500, (l.XRadius || 5) / 2) + 20;
                (null == P ? void 0 : P.current) && (P.current.style.transform = "translate3d(".concat(r, "px, ").concat(a, "px, 0)"))
            }
            function X(e) {
                l.XRadius = ((null == l ? void 0 : l.XRadius) || 0) + 200 * B / c.height,
                O = D,
                Z = M,
                document.removeEventListener("mouseup", X, !0),
                document.removeEventListener("mousemove", Y, !1)
            }
            function H(e) {
                "mousedown" === e.type && (O = e.clientX - D,
                Z = e.clientY - M,
                N = e.clientX,
                e.clientY,
                F = oK(c.height || 500, ((l.XRadius || 3) - 3) / 2)),
                document.addEventListener("mousemove", Y, !1),
                document.addEventListener("mouseup", X, !0)
            }
            let z = e => {
                if (rs.includes(e))
                    return null;
                let t = oY(e);
                return t ? (0 !== rs.length && (t = "".concat(oY(rs[rs.length - 1]), " + ").concat(t)),
                rs.push(e),
                t) : null
            }
            ;
            (0,
            r.useEffect)( () => {
                var e;
                if (v.current) {
                    let t = null === (e = null == x ? void 0 : x.current) || void 0 === e ? void 0 : e.getBoundingClientRect()
                      , i = (null == t ? void 0 : t.top) || 0
                      , n = (null == t ? void 0 : t.left) || 0;
                    v.current.style.left = "".concat(n + (l.X || 0) * ((null == t ? void 0 : t.width) || 0) / 100, "px"),
                    v.current.style.top = "".concat(i + (l.Y || 0) * ((null == t ? void 0 : t.height) || 0) / 100, "px")
                }
            }
            , [v]),
            (0,
            r.useEffect)( () => {
                let e = null == P ? void 0 : P.current;
                I.current && I.current.addEventListener("contextmenu", e => {
                    f && w(!0),
                    e.stopPropagation(),
                    e.preventDefault()
                }
                ),
                f ? null == e || e.addEventListener("mousedown", H) : null == e || e.removeEventListener("mousedown", H, !1)
            }
            , [f]),
            (0,
            r.useEffect)( () => {
                k.current && k.current.addEventListener("contextmenu", e => {
                    f && w(!0),
                    e.stopPropagation(),
                    e.preventDefault()
                }
                )
            }
            , [l.LButtonX, l.LButtonY]);
            let U = (e, t) => {
                var i;
                let n = parseFloat(e.target.value);
                n || (n = 0),
                n < 0 && (n = 0),
                n > 100 && (n = 100),
                i = n = parseFloat(n.toFixed(2)),
                l[t] = i,
                e.target.value = n.toString(),
                "X" === t ? j(n) : "Y" === t && E(n)
            }
              , G = e => !!e.startsWith("Guidance")
              , V = (e, t) => {
                var i, n, o, r, a, d, s;
                if ("boolean" !== R.checkKeyType(t)) {
                    if ("coord" === R.checkKeyType(t))
                        U(e, t);
                    else if ("int" === R.checkKeyType(t)) {
                        let o = parseInt(e.target.value, 10);
                        o || (o = 0),
                        i = t,
                        n = o,
                        l[i] = n,
                        e.target.value = o.toString()
                    } else if ("float" === R.checkKeyType(t)) {
                        let i = parseFloat(e.target.value);
                        i || (i = 0),
                        i = parseFloat(i.toFixed(2)),
                        o = t,
                        r = i,
                        l[o] = r,
                        e.target.value = i.toString()
                    } else if ("string" === R.checkKeyType(t)) {
                        let i = e.target.value;
                        i || (i = ""),
                        G(t) && (t = t.replace("Guidance", "")),
                        l.Guidance && (a = l.Guidance,
                        d = t,
                        s = i,
                        a[d] = s),
                        e.target.value = i
                    }
                }
            }
              , q = (e, t) => {
                if ("key" !== R.checkKeyType(t))
                    return;
                let i = z(e.code);
                i && (l[t] = i,
                e.target.value = i),
                e.preventDefault()
            }
              , J = (e, t) => {
                "key" === R.checkKeyType(t) && (rs = rs.filter(t => t !== e.code))
            }
              , Q = (e, t) => {
                "key" === R.checkKeyType(t) && (l[t] = "MouseRButton",
                e.target.value = "MouseRButton")
            }
              , $ = (e, t) => {
                var i, n;
                "boolean" === R.checkKeyType(t) ? (i = "false" === e.target.value,
                l[t] = i,
                e.target.value = "false" === e.target.value ? "true" : "false") : "DeviceType" === t && (n = "Mobile" === e.target.value ? 0 : 1,
                l[t] = n,
                e.target.value = "Mobile" === e.target.value ? "Desktop" : "Mobile")
            }
            ;
            function ee(e) {
                e.dataTransfer.setData("span", e.currentTarget.id)
            }
            (0,
            r.useEffect)( () => {
                v.current && (v.current.style.top = "".concat(c.top + oK(c.height, C || 0), "px"),
                v.current.style.left = "".concat(c.left + oK(c.width, A || 0), "px"))
            }
            , [A, C]);
            let et = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return "Zoom" === l.Type || "MouseZoom" === l.Type || "Swipe" === l.Type ? ((l.X1 || 0) + (l.X2 || 0)) / 2 : e ? l.LButtonX || 0 : l.X || 0
            }
              , ei = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return "Zoom" === l.Type || "MouseZoom" === l.Type || "Swipe" === l.Type ? ((l.Y1 || 0) + (l.Y2 || 0)) / 2 : e ? l.LButtonY || 0 : l.Y || 0
            };
            (0,
            r.useEffect)( () => {
                j(l.X),
                E(l.Y)
            }
            , [l.X, l.Y]);
            let en = (e, t, i) => {
                var n, o, r, a, d;
                let s = null === (n = null == x ? void 0 : x.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                if (s) {
                    let n = parseInt(((e - s.left) * 100 / s.width * 100).toString(), 10) / 100
                      , c = parseInt(((t - s.top) * 100 / s.height * 100).toString(), 10) / 100;
                    if ("Zoom" === l.Type || "MouseZoom" === l.Type || "Swipe" === l.Type) {
                        let e = ((l.X2 || 0) - (l.X1 || 0)) / 2
                          , t = ((l.Y2 || 0) - (l.Y1 || 0)) / 2;
                        o = n - e,
                        l.X1 = o,
                        r = n + e,
                        l.X2 = r,
                        a = c - t,
                        l.Y1 = a,
                        d = c + t,
                        l.Y2 = d
                    }
                    j(n),
                    i ? l.LButtonX = n : l.X = n,
                    E(c),
                    i ? l.LButtonY = c : l.Y = c
                }
            }
            ;
            return (b || f) && !S ? (0,
            o.jsxs)(o.Fragment, {
                children: ["Pan" === l.Type && (null === (n = null === (i = null === (t = null === s.default || void 0 === s.default ? void 0 : s.default.appInfo) || void 0 === t ? void 0 : t.playFeFeatures) || void 0 === i ? void 0 : i.gl) || void 0 === n ? void 0 : n.enableImageDetection) && d && (0,
                o.jsxs)(o.Fragment, {
                    children: [l.isShootOnClickEnabled ? (0,
                    o.jsx)("span", {
                        className: "overlayKey LBM",
                        style: {
                            left: c.left + oK(c.width, l.LButtonX || 0),
                            top: c.top + oK(c.height, l.LButtonY || 0)
                        },
                        children: (0,
                        o.jsxs)("span", {
                            className: "overlayKeyValue",
                            children: [(0,
                            o.jsx)("img", {
                                src: "".concat(oE.src),
                                alt: ""
                            }), " ", ":"]
                        })
                    }) : null, l.isLookAroundEnabled ? (0,
                    o.jsx)("span", {
                        className: "overlayKey Tap ".concat(d ? "gamepad" : ""),
                        style: {
                            left: c.left + oK(c.width, l.LookAroundX || 0),
                            top: c.top + oK(c.height, l.LookAroundY || 0)
                        },
                        children: (0,
                        o.jsx)("span", {
                            className: "overlayKeyValue",
                            children: l.KeyLookAround
                        })
                    }) : null]
                }), "MOBASkill" === l.Type && l.CancelX && l.CancelX > 0 && l.CancelY && l.CancelY > 0 && (0,
                o.jsx)("span", {
                    className: "overlayKey Tap",
                    style: {
                        left: c.left + oK(c.width, l.CancelX),
                        top: c.top + oK(c.height, l.CancelY)
                    },
                    children: (0,
                    o.jsx)("span", {
                        className: "overlayKeyValue",
                        children: d ? oD(l.KeyCancel_alt1) : l.KeyCancel
                    })
                }), y && (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)(o1, {
                        className: "overlayKey ".concat(d ? "gamepad" : ""),
                        controlRef: I,
                        callback: en,
                        children: (0,
                        o.jsx)("span", {
                            ref: I,
                            className: "overlayKey ".concat(l.Type, " ").concat(d ? "gamepad" : "", "\n                  ").concat(f ? "editMode" : ""),
                            style: {
                                left: c.left + eK.ZP.splitScreenSize + oK(c.width - eK.ZP.splitScreenSize, et()),
                                top: c.top + oK(c.height, ei()),
                                aspectRatio: f ? "1" : "unset",
                                background: f ? iQ.qm.colors.white80 : "unset",
                                border: f ? iQ.qm.border.base : "unset",
                                borderRadius: f ? "50%" : "unset",
                                display: f ? "flex" : "unset",
                                alignItems: f ? "center" : "unset",
                                padding: f ? "4px" : "unset",
                                color: f ? "black" : "unset",
                                transform: "translate(-50%, -50%)",
                                fontWeight: f ? "700" : "unset",
                                width: "max-content",
                                justifyContent: "center",
                                pointerEvents: "all"
                            },
                            draggable: f,
                            onDragStart: ee,
                            children: y
                        }, "".concat(l.$type, "-").concat(u))
                    }), "Pan" === l.Type && (-1 !== l.LButtonX || -1 !== l.LButtonY) && (0,
                    o.jsx)(o1, {
                        className: "overlayKey ".concat(d ? "gamepad" : ""),
                        controlRef: k,
                        callback: en,
                        isPanLeftControl: !0,
                        children: (0,
                        o.jsx)("span", {
                            ref: k,
                            className: "overlayKey ".concat(l.Type, " ").concat(d ? "gamepad" : "", "\n                    ").concat(f ? "editMode" : ""),
                            style: {
                                left: c.left + eK.ZP.splitScreenSize + oK(c.width - eK.ZP.splitScreenSize, et(!0)),
                                top: c.top + oK(c.height, ei(!0)),
                                aspectRatio: f ? "1" : "unset",
                                background: f ? iQ.qm.colors.white80 : "unset",
                                border: f ? iQ.qm.border.base : "unset",
                                borderRadius: f ? "50%" : "unset",
                                display: f ? "flex" : "unset",
                                alignItems: f ? "center" : "unset",
                                padding: f ? "4px" : "unset",
                                color: f ? "black" : "unset",
                                transform: "translate(-50%, -50%)",
                                fontWeight: f ? "700" : "unset",
                                width: "max-content",
                                justifyContent: "center",
                                pointerEvents: "all"
                            },
                            draggable: f,
                            onDragStart: ee,
                            children: o0(l, d, c, h, !0)
                        }, "".concat(l.$type, "-").concat(u))
                    }), f && l.XRadius && (0,
                    o.jsx)("img", {
                        src: (0,
                        _.jW)(oT),
                        alt: "drag",
                        style: {
                            width: "20px",
                            height: "20px",
                            transform: "translateX(".concat(oK(c.height || 500, l.XRadius / 2) + 25, "px) translateY(").concat(oK(c.height || 500, l.XRadius / 2) + 20, "px)"),
                            position: "absolute",
                            left: c.left + oK(c.height || 500, l.XRadius / 2) + oK(c.width, et()) + 300 < window.innerWidth ? c.left + oK(c.width, et()) : window.innerWidth - 300,
                            top: c.top + oK(c.height || 500, l.XRadius / 2) + oK(c.height, ei()),
                            cursor: "nwse-resize"
                        },
                        ref: P
                    }), f && m && (0,
                    o.jsxs)(oI, {
                        ref: v,
                        style: {
                            left: c.left + oK(c.width, et()) + 300 < window.innerWidth ? c.left + oK(c.width, et()) : window.innerWidth - 300,
                            top: c.top + oK(c.height, ei()),
                            height: window.innerHeight - (c.top + oK(c.height, ei())) - 52
                        },
                        children: [(0,
                        o.jsxs)(ok, {
                            children: [(0,
                            o.jsx)(W.js, {
                                children: l.Type
                            }), (0,
                            o.jsx)(tS.A3, {
                                onClick: () => {
                                    w(!1)
                                }
                                ,
                                children: (0,
                                o.jsx)(eL.Z, {
                                    name: "cross-thin",
                                    size: 14
                                })
                            })]
                        }), (0,
                        o.jsx)(oP, {
                            style: {
                                height: window.innerHeight - (c.top + oK(c.height, ei())) - ("Pan" === l.Type ? 202 : 152)
                            },
                            children: L.map(e => {
                                var t, i, n, r, a;
                                return (0,
                                o.jsxs)(oR, {
                                    children: [(0,
                                    o.jsx)(W.T6, {
                                        title: e,
                                        children: e
                                    }), (0,
                                    o.jsx)(oL, {
                                        id: "controls-box",
                                        type: "DeviceType" === e ? "text" : typeof (null === (t = Object.getOwnPropertyDescriptor(R, e)) || void 0 === t ? void 0 : t.value),
                                        value: G(e) ? null === (i = Object.getOwnPropertyDescriptor(l.Guidance, e.replace("Guidance", ""))) || void 0 === i ? void 0 : i.value : "DeviceType" === e ? (null === (n = Object.getOwnPropertyDescriptor(l, e)) || void 0 === n ? void 0 : n.value) ? "Mobile" : "Desktop" : null === (r = Object.getOwnPropertyDescriptor(l, e)) || void 0 === r ? void 0 : r.value,
                                        onChange: t => V(t, e),
                                        onClick: t => $(t, e),
                                        readOnly: "boolean" == typeof (null === (a = Object.getOwnPropertyDescriptor(R, e)) || void 0 === a ? void 0 : a.value) || "DeviceType" === e,
                                        onKeyDown: t => q(t, e),
                                        onKeyUp: t => J(t, e),
                                        onContextMenu: t => {
                                            Q(t, e),
                                            t.preventDefault()
                                        }
                                    })]
                                })
                            }
                            )
                        }), "Pan" === l.Type && (0,
                        o.jsx)(oS.Jg, {
                            onChange: e => {
                                -1 !== l.LButtonX || -1 !== l.LButtonY ? (l.KeyAction = "",
                                l.LButtonX = -1,
                                l.LButtonY = -1) : (l.KeyAction = "MouseLButton",
                                l.LButtonX = 50,
                                l.LButtonY = 50)
                            }
                            ,
                            checked: -1 !== l.LButtonX || -1 !== l.LButtonY,
                            children: (0,
                            o.jsx)(W.gd, {
                                children: "Add Left Button Click"
                            })
                        }), (0,
                        o.jsx)(ew.z, {
                            onClick: () => {
                                p(u),
                                T(!0)
                            }
                            ,
                            style: {
                                width: "100%"
                            },
                            children: g("delete")
                        })]
                    })]
                })]
            }) : null
        }
        ;
        let rp = g.ZP.div.withConfig({
            componentId: "sc-1115c695-0"
        })(["display:flex;gap:8px;height:auto;justify-content:space-between;border-radius:4px;width:100%;height:66px;padding:4px;text-align:center;align-items:center;border:1px solid ", ";cursor:pointer;h6{width:100%;margin:0;text-overflow:ellipsis;overflow:hidden;}"], e => {
            let {theme: t} = e;
            return t.colors.white20
        }
        )
          , rh = e => {
            switch (e) {
            case "Tap":
            default:
                return new o5;
            case "TapRepeat":
                return new o4;
            case "Scroll":
                return new o9;
            case "Dpad":
                return new o3;
            case "Pan":
                return new o6;
            case "FreeLook":
                return new o7;
            case "Swipe":
                return new o8;
            case "Zoom":
                return new re;
            case "MouseZoom":
                return new rt;
            case "Rotate":
                return new ri;
            case "Tilt":
                return new rn;
            case "MOBADpad":
                return new ro;
            case "MOBASkill":
                return new rr;
            case "State":
                return new ra;
            case "EdgeScroll":
                return new rl;
            case "Script":
                return new rd
            }
        }
          , rg = ["Tap", "TapRepeat", "Scroll", "Dpad", "Pan", "FreeLook", "Swipe", "Zoom", "MouseZoom", "Rotate", "Tilt", "MOBADpad", "MOBASkill", "State", "EdgeScroll", "Script"];
        var rv = e => {
            let {x: t, y: i, gameControls: n, reloadCallback: l, closeCallback: d} = e
              , {t: s} = (0,
            K.$)()
              , c = (0,
            r.useRef)(null)
              , u = (0,
            a.v9)(e => e.play.videoRef)
              , p = (e, t) => {
                let i = {
                    $type: "".concat(t, ", Bluestacks"),
                    Tweaks: 0,
                    ShowOnOverlay: !0,
                    Type: t,
                    Exclusive: !0,
                    ExclusiveDelay: 0,
                    XExpr: "",
                    YExpr: "",
                    XOverlayOffset: "",
                    YOverlayOffset: "",
                    EnableCondition: "",
                    StartCondition: "",
                    Guidance: {}
                };
                return Object.keys(e).forEach(t => {
                    var n, o, r, a, l, d, s, c;
                    if ("function" != typeof (null === (n = Object.getOwnPropertyDescriptor(e, t)) || void 0 === n ? void 0 : n.value)) {
                        if (t.startsWith("Guidance")) {
                            t = t.replace("Guidance", ""),
                            a = i.Guidance,
                            l = t.replace("Guidance", ""),
                            d = null === (o = Object.getOwnPropertyDescriptor(e, "Guidance".concat(t))) || void 0 === o ? void 0 : o.value,
                            a[l] = d;
                            return
                        }
                        s = t,
                        c = null === (r = Object.getOwnPropertyDescriptor(e, t)) || void 0 === r ? void 0 : r.value,
                        i[s] = c
                    }
                }
                ),
                i
            }
              , h = e => {
                var o, r, a, s, c, h, g, v, x, f, m, w, y, b, A, j, C, E, S, T, I, k, R;
                let L = rh(e)
                  , P = p(L, e)
                  , D = 50
                  , M = 50
                  , O = null === (o = null == u ? void 0 : u.current) || void 0 === o ? void 0 : o.getBoundingClientRect();
                if (O && (D = (t - O.left) * 100 / O.width,
                M = (i + 56 - O.top) * 100 / O.height,
                D = parseFloat(D.toFixed(2)),
                M = parseFloat(M.toFixed(2))),
                "Swipe" === e) {
                    r = D,
                    P.X1 = r,
                    a = D,
                    P.X2 = a,
                    s = M,
                    P.Y1 = s,
                    c = M - 26.67,
                    P.Y2 = c;
                    let t = p(L, e);
                    h = D,
                    t.X1 = h,
                    g = D,
                    t.X2 = g,
                    v = M,
                    t.Y1 = v,
                    x = M + 26.67,
                    t.Y2 = x;
                    let i = p(L, e);
                    f = D,
                    i.X1 = f,
                    m = D - 15,
                    i.X2 = m,
                    w = M,
                    i.Y1 = w,
                    y = M,
                    i.Y2 = y;
                    let o = p(L, e);
                    b = D,
                    o.X1 = b,
                    A = D + 15,
                    o.X2 = A,
                    j = M,
                    o.Y1 = j,
                    C = M,
                    o.Y2 = C,
                    n.push(P, t, i, o)
                } else
                    ("Zoom" === e || "MouseZoom" === e) && (E = D,
                    P.X1 = E,
                    S = D,
                    P.X2 = S,
                    T = M - 20,
                    P.Y1 = T,
                    I = M + 20,
                    P.Y2 = I),
                    Object.keys(L).includes("X") && (k = D,
                    P.X = k,
                    R = M,
                    P.Y = R),
                    n.push(P);
                d(),
                l()
            }
            ;
            return (0,
            o.jsxs)(oI, {
                ref: c,
                style: {
                    left: "".concat(t, "px"),
                    top: "".concat(i, "px"),
                    height: "360px",
                    width: "360px"
                },
                children: [(0,
                o.jsxs)(ok, {
                    children: [(0,
                    o.jsx)(W.js, {
                        children: s("addControls")
                    }), (0,
                    o.jsx)(tS.A3, {
                        onClick: d,
                        children: (0,
                        o.jsx)(eL.Z, {
                            name: "cross-thin",
                            size: 14
                        })
                    })]
                }), (0,
                o.jsx)(oP, {
                    style: {
                        height: "306px",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))"
                    },
                    children: rg.map(e => (0,
                    o.jsx)(rp, {
                        onClick: () => {
                            h(e)
                        }
                        ,
                        children: (0,
                        o.jsx)(W.T6, {
                            title: e,
                            children: e
                        })
                    }))
                })]
            })
        }
          , rx = e => {
            let {gameControls: t, isGamepadview: i} = e
              , [n,l] = (0,
            r.useState)({
                top: 0,
                left: 0,
                width: 0,
                height: 0
            })
              , d = (0,
            a.v9)(e => e.appPreferences.imapOverlay)
              , s = (0,
            a.v9)(e => e.appPreferences.legacyControls)
              , c = (0,
            a.v9)(e => e.play.showScriptEditor)
              , u = (0,
            r.useRef)(null)
              , [p,h] = (0,
            r.useState)(!1)
              , [g,v] = (0,
            r.useState)(!1)
              , [x,f] = (0,
            r.useState)(.5 * window.innerHeight)
              , [m,w] = (0,
            r.useState)(.5 * window.innerWidth)
              , [y,b] = (0,
            r.useState)(!1)
              , A = (0,
            a.v9)(e => e.imap.keymappingEditMode)
              , j = () => {
                let {videoRef: e} = R.default.getState().play;
                if (null == e ? void 0 : e.current) {
                    let t = null == e ? void 0 : e.current.getBoundingClientRect()
                      , i = null == e ? void 0 : e.current.parentNode;
                    if (t && i) {
                        let e = i.getBoundingClientRect()
                          , o = {
                            top: Math.max(t.top - e.top, 0),
                            left: Math.max(t.left - e.left, 0),
                            width: t.width,
                            height: t.height
                        };
                        (o.left !== n.left || o.width !== n.width || o.top !== n.top || o.height !== n.height) && l(o)
                    }
                }
            }
              , C = e => {
                f(e.x),
                w(e.y - 56),
                v(!0),
                e.preventDefault()
            }
            ;
            (0,
            r.useEffect)( () => (window.addEventListener(oo.Sg, j),
            u.current && u.current.addEventListener("contextmenu", C),
            () => {
                u.current && u.current.removeEventListener("contextmenu", C)
            }
            ), []),
            (0,
            r.useEffect)( () => {
                j()
            }
            , [d, s]);
            let E = e => {
                t.splice(e, 1),
                h(!0)
            }
            ;
            return (0,
            r.useEffect)( () => {
                h(!0)
            }
            , [t]),
            (0,
            r.useEffect)( () => {
                p && h(!1)
            }
            , [p]),
            (0,
            o.jsxs)(ow, {
                ref: u,
                editing: A,
                onDrop: e => {
                    !function(e) {
                        let t = e.dataTransfer.getData("span");
                        e.preventDefault(),
                        e.currentTarget.appendChild(document.getElementById(t))
                    }(e)
                }
                ,
                onDragOver: e => {
                    !function(e) {
                        e.preventDefault()
                    }(e)
                }
                ,
                style: {
                    pointerEvents: A ? "all" : "none",
                    zIndex: "9",
                    display: c ? "none" : "block"
                },
                children: [g && A && (0,
                o.jsx)(rv, {
                    x: x,
                    y: m,
                    gameControls: t,
                    reloadCallback: () => {
                        h(!0),
                        b(!0)
                    }
                    ,
                    closeCallback: () => {
                        v(!1)
                    }
                }), (d || A) && s && !p && (A ? t : t && t.length && eK.ZP.controlIndexToStateMap ? t.map( (e, t) => {
                    if (!(null === eK.ZP || void 0 === eK.ZP ? void 0 : eK.ZP.controlIndexToStateMap) || !(null === eK.ZP || void 0 === eK.ZP ? void 0 : eK.ZP.controlIndexToStateMap[t]) || !(null === eK.ZP || void 0 === eK.ZP ? void 0 : eK.ZP.controlIndexToStateMap[t].enabled))
                        return null;
                    let i = eK.ZP.controlIndexToStateMap[t];
                    if ("P" === i.type && (e.LButtonX && e.LButtonX >= 0 && e.LButtonY && e.LButtonY >= 0 || e.LookAroundX && e.LookAroundX >= 0 && e.LookAroundY && e.LookAroundY >= 0)) {
                        let t = 1 === i.points[6]
                          , n = 1 === i.points[7];
                        return n || t ? Object.assign(Object.assign({}, e), {
                            isShootOnClickEnabled: n,
                            isLookAroundEnabled: t,
                            X: i.points[0] || e.X,
                            Y: i.points[1] || e.Y,
                            LButtonX: i.points[2] || e.LButtonX,
                            LButtonY: i.points[3] || e.LButtonY,
                            LookAroundX: i.points[4] || e.LookAroundX,
                            LookAroundY: i.points[5] || e.LookAroundY
                        }) : null
                    }
                    return "MS" === i.type ? Object.assign(Object.assign({}, e), {
                        X: i.points[0] || e.X,
                        Y: i.points[1] || e.Y,
                        CancelX: i.points[2] || e.CancelX,
                        CancelY: i.points[3] || e.CancelY,
                        OriginX: i.points[4] || e.OriginX,
                        OriginY: i.points[5] || e.OriginY
                    }) : "MD" === i.type ? Object.assign(Object.assign({}, e), {
                        X: i.points[0] || e.X,
                        Y: i.points[1] || e.Y,
                        OriginX: i.points[4] || e.OriginX,
                        OriginY: i.points[5] || e.OriginY
                    }) : "S" === i.type ? Object.assign(Object.assign({}, e), {
                        X1: i.points[0] || e.X1,
                        Y1: i.points[1] || e.Y1,
                        X2: i.points[0] || e.X2,
                        Y2: i.points[1] || e.Y2
                    }) : Object.assign(Object.assign({}, e), {
                        X: i.points[0] || e.X,
                        Y: i.points[1] || e.Y
                    })
                }
                ).filter(e => e) : t).map( (e, r) => e && (14 === eK.ZP.cfgParserVersion || e.IsVisibleInOverlay || e.ShowOnOverlay || A) && (0,
                o.jsx)(ru, {
                    control: e,
                    isGamepadview: i,
                    offset: n,
                    index: r,
                    deleteCallback: E,
                    newControl: r === t.length - 1 && y
                }))]
            })
        }
          , rf = i(9815)
          , rm = {
            src: "/_next/static/media/gamepad-big.fceb3deb.svg",
            height: 72,
            width: 72,
            blurWidth: 0,
            blurHeight: 0
        }
          , rw = i(61250)
          , ry = i(22598)
          , rb = {
            src: "/_next/static/media/save.6a7e2a8b.svg",
            height: 16,
            width: 16,
            blurWidth: 0,
            blurHeight: 0
        }
          , rA = {
            src: "/_next/static/media/plus.95fd59e4.svg",
            height: 12,
            width: 12,
            blurWidth: 0,
            blurHeight: 0
        }
          , rj = {
            src: "/_next/static/media/delete.9154f996.svg",
            height: 12,
            width: 12,
            blurWidth: 0,
            blurHeight: 0
        }
          , rC = i(96125)
          , rE = i(59485)
          , rS = i(34866)
          , rT = i(24851);
        let rI = g.ZP.div.withConfig({
            componentId: "sc-86b1f051-0"
        })(["display:flex;width:100%;justify-content:space-between;align-items:baseline;border-radius:4px;height:28px;"])
          , rk = g.ZP.div.withConfig({
            componentId: "sc-86b1f051-1"
        })(["display:flex;width:100%;justify-content:space-between;align-items:center;border-radius:4px;gap:4px;padding:4px 8px;border:1px solid ", ";flex-direction:column;z-index:20;&:hover{background:rgba(54,56,56,255);}", ""], e => {
            let {theme: t} = e;
            return t.colors.white10
        }
        , e => {
            let {open: t} = e;
            return t && (0,
            g.iv)(["padding:4px 8px 8px 8px;backdrop-filter:blur(60px);background:rgba(54,56,56,255);"])
        }
        )
          , rR = g.ZP.div.withConfig({
            componentId: "sc-86b1f051-2"
        })(["display:flex;width:100%;justify-content:space-between;align-items:center;gap:4px;color:", ";svg{color:", ";scale:1.2;}&:hover{cursor:pointer;}", ""], e => {
            let {theme: t} = e;
            return t.colors.white40
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white50
        }
        , e => {
            let {open: t} = e;
            return t && (0,
            g.iv)(["color:", ";svg{transform:rotate(180deg);color:", ";}"], e => {
                let {theme: t} = e;
                return t.colors.white30
            }
            , e => {
                let {theme: t} = e;
                return t.colors.white60
            }
            )
        }
        )
          , rL = g.ZP.div.withConfig({
            componentId: "sc-86b1f051-3"
        })(["display:flex;padding:4px 4px 4px 8px;align-items:center;gap:4px;align-self:stretch;border-radius:4px;background:", ";height:26px;color:", ";&:hover{cursor:pointer;color:", ";}"], e => {
            let {theme: t} = e;
            return t.colors.white10
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white60
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        );
        var rP = e => {
            let {schemes: t, selectedScheme: i, onChange: n} = e
              , {t: a} = (0,
            K.$)()
              , [l,d] = (0,
            r.useState)(!1)
              , s = (0,
            r.useRef)(null);
            return (0,
            o.jsx)(rI, {
                children: (0,
                o.jsxs)(rk, {
                    ref: s,
                    open: l,
                    onBlur: () => d(!1),
                    children: [(0,
                    o.jsxs)(rR, {
                        open: l,
                        onClick: () => {
                            var e;
                            l || null === (e = s.current) || void 0 === e || e.focus(),
                            d(!l)
                        }
                        ,
                        children: [(0,
                        o.jsx)(W.gd, {
                            children: "".concat(a("scheme"), ":")
                        }), (0,
                        o.jsx)(W.gd, {
                            style: {
                                color: iQ.qm.colors.white60,
                                width: "100%"
                            },
                            children: i
                        }), (0,
                        o.jsx)(rT.p, {})]
                    }), l && t.map(e => (0,
                    o.jsx)(rL, {
                        onClick: () => {
                            n(e),
                            d(!1)
                        }
                        ,
                        children: (0,
                        o.jsx)(W.gd, {
                            children: e
                        })
                    }))]
                })
            })
        }
        ;
        let rD = []
          , rM = e => {
            let {label: t, value: i, guidanceCategory: n} = e
              , r = n && -1 === rD.indexOf(n);
            return r && rD.push(n),
            (0,
            o.jsxs)(o.Fragment, {
                children: [r && (0,
                o.jsx)(ou, {
                    children: n
                }, "".concat(n)), (0,
                o.jsxs)(oc, {
                    children: [(0,
                    o.jsx)("span", {
                        children: t
                    }), (0,
                    o.jsx)("span", {
                        children: i
                    })]
                }, "".concat(t, "_").concat(i))]
            })
        }
          , rO = e => {
            let {type: t} = e
              , {t: i} = (0,
            K.$)();
            return (0,
            o.jsxs)(og, {
                children: [(0,
                o.jsx)("img", {
                    src: (0,
                    _.jW)(rm),
                    alt: i("gamepadWarning")
                }), (0,
                o.jsx)(W.T4, {
                    style: {
                        marginTop: "10px"
                    },
                    children: i("not_supported" === t ? "sidebar.gamepadNotSupported" : "sidebar.gamepadNotDetected")
                }), (0,
                o.jsx)(W.kk, {
                    children: i("not_supported" === t ? "sidebar.gamepadNotSupportedInfo" : "sidebar.gamepadNotDetectedInfo")
                })]
            })
        }
          , rK = {}
          , rZ = e => {
            let {className: t} = e
              , {t: i} = (0,
            K.$)()
              , [n,l] = (0,
            r.useState)(null)
              , [d,c] = (0,
            r.useState)(!1)
              , [p,h] = (0,
            r.useState)(!!rf.Z.gamepad)
              , [g,v] = (0,
            r.useState)([])
              , [x,f] = (0,
            r.useState)(null)
              , [m,y] = (0,
            r.useState)(!1)
              , [b,A] = (0,
            r.useState)(!1)
              , [j,C] = (0,
            r.useState)([])
              , E = (0,
            a.v9)(e => e.imap.isActive)
              , S = (0,
            a.v9)(e => e.imap.initialized)
              , T = (0,
            a.v9)(e => e.imap.guideVisible)
              , I = (0,
            a.v9)(e => e.appPreferences.imapOverlay)
              , k = (0,
            a.v9)(e => e.appPreferences.legacyControls)
              , L = (0,
            a.v9)(e => e.appPreferences.imapScheme)
              , D = (0,
            a.v9)(e => e.ads.adsEnded)
              , M = (0,
            a.v9)(e => e.play.showScriptEditor)
              , O = s.default.features.nativeControlsList.length > 0
              , Z = s.default.features.shiftLock
              , [N,B] = (0,
            r.useState)(null)
              , [F,Y] = (0,
            r.useState)(null)
              , X = (0,
            r.useRef)(null)
              , [H,z] = (0,
            r.useState)(!1)
              , [U,G] = (0,
            r.useState)("")
              , [V,J] = (0,
            r.useState)("")
              , Q = (0,
            a.v9)(e => e.play.videoRef)
              , $ = (0,
            a.v9)(e => e.play.consoleFooterRef)
              , ee = (0,
            a.v9)(e => e.user.gameGuideOnboarding)
              , et = (0,
            a.v9)(e => e.imap.keymappingEditMode)
              , ei = (0,
            a.v9)(e => e.play.showDisconnectScreen)
              , en = (0,
            a.v9)(e => e.play.isFullscreen)
              , eo = {
                ImageId: "",
                ImageType: "",
                TextureCRC: "",
                TextureCoord: [],
                TextureIndex: 0,
                VertexIndex: 0,
                VertexRect: [],
                MatchColor: ""
            }
              , er = s.default.appInfo.playFeFeatures.nativeMouseActivities && s.default.appInfo.playFeFeatures.nativeMouseActivities.length > 0
              , [ea,el] = (0,
            r.useState)({
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0
            })
              , ed = (0,
            rS.Z)()
              , [es,ec] = (0,
            r.useState)("".concat(-302 - (ed ? ek.Uz : 0), "px"))
              , ep = (0,
            r.useRef)(ea)
              , eg = (0,
            r.useRef)(!1)
              , ev = (0,
            r.useRef)(en)
              , ex = (0,
            r.useRef)(null)
              , ef = (0,
            r.useCallback)( () => {
                var e, t, i;
                let n = null === (e = null == Q ? void 0 : Q.current) || void 0 === e ? void 0 : e.getBoundingClientRect()
                  , o = null === (t = null == $ ? void 0 : $.current) || void 0 === t ? void 0 : t.getBoundingClientRect()
                  , r = null !== (i = null == o ? void 0 : o.right) && void 0 !== i ? i : ep.current.right;
                return {
                    top: (null == n ? void 0 : n.top) || 0,
                    right: r,
                    bottom: (null == n ? void 0 : n.bottom) || 0,
                    left: (null == o ? void 0 : o.left) || 0,
                    width: (null == n ? void 0 : n.width) || window.innerWidth,
                    height: (null == n ? void 0 : n.height) || window.innerHeight
                }
            }
            , [Q, $])
              , em = (0,
            r.useCallback)( () => {
                if (eg.current)
                    return;
                let e = ef();
                Math.abs(e.right - ep.current.right) > 100 ? (eg.current = !0,
                setTimeout( () => {
                    el(ef()),
                    eg.current = !1
                }
                , 300)) : el(e),
                ep.current = e
            }
            , [ef]);
            (0,
            r.useEffect)( () => {
                let e = nK()(em, 250);
                return window.addEventListener("resizeDone", e),
                window.addEventListener("resize", e),
                document.addEventListener("fullscreenchange", em),
                em(),
                () => {
                    window.removeEventListener("resizeDone", e),
                    window.removeEventListener("resize", e),
                    document.removeEventListener("fullscreenchange", em)
                }
            }
            , [em]),
            (0,
            r.useEffect)( () => {
                em()
            }
            , [Q, $, em]),
            (0,
            r.useEffect)( () => {
                if (en !== ev.current) {
                    if (ex.current && (ex.current.style.transition = "right 0.3s ease-in-out"),
                    en)
                        ec("".concat(-302 - (ed ? ek.Uz : 0), "px"));
                    else {
                        let e = T && ea.right >= 50 ? document.documentElement.clientWidth - ea.right : -302;
                        ec("".concat(e - (ed ? ek.Uz : 0), "px"))
                    }
                    ev.current = en
                } else if (!en) {
                    let e = T && ea.right >= 50 ? document.documentElement.clientWidth - ea.right : -302;
                    ec("".concat(e - (ed ? ek.Uz : 0), "px"))
                }
            }
            , [en, T, ea, ed]);
            let ey = (0,
            a.I0)()
              , eb = () => {
                (0,
                u.L9)(eh.S5z, {
                    element: "OnScreenControls",
                    state: "".concat(I ? "Disabled" : "Enabled"),
                    robloxExperience: R.default.getState().play.robloxExperienceId
                }),
                ey((0,
                tW.i)({
                    imapOverlay: !I
                }))
            }
              , eA = e => {
                j.forEach(t => {
                    if (t.Type === oo.x_.Pan && (b ? t.KeyStartStop_alt1 : t.KeyStartStop)) {
                        let n = b ? t.KeyStartStop_alt1 : t.KeyStartStop;
                        n && !rK[n] && e && eK.ZP.showLookAroundToasts && ((0,
                        n0.toast)((0,
                        o.jsxs)(o.Fragment, {
                            children: [i("overlay.look"), " ", (0,
                            o.jsx)("kbd", {
                                children: oD(n)
                            }), " ", i("overlay.tip2")]
                        }), eh.dO5),
                        rK[n] = !0)
                    }
                    if (t.Type === oo.x_.FreeLook && 0 !== t.DeviceType && (b ? t.Key_alt1 : t.Key)) {
                        let n = b ? t.Key_alt1 : t.Key;
                        n && !rK[n] && e && eK.ZP.showLookAroundToasts && ((0,
                        n0.toast)((0,
                        o.jsxs)(o.Fragment, {
                            children: [i("overlay.klook"), " ", (0,
                            o.jsx)("kbd", {
                                children: oD(n)
                            }), " ", i("overlay.tip2")]
                        }), eh.dO5),
                        eK.ZP.showLookAroundToasts = !1,
                        rK[n] = !0)
                    }
                }
                )
            }
              , ej = () => (rD = [],
            null)
              , eC = () => {
                ej(),
                ey({
                    type: or.Z.TOGGLE_SIDEBAR
                }),
                ee && (ey({
                    type: nT.Z.GAME_GUIDE_NOTIF_COUNT_UPDATE,
                    payload: {
                        gameGuideOnboarding: !1
                    }
                }),
                ey({
                    type: P.Z.SHOW_CONTROLS_TOAST,
                    payload: {
                        gameControlsToast: !0
                    }
                }))
            }
              , eE = () => {
                ej();
                let {nativeMouseEnabled: e, shiftLockActive: t} = R.default.getState().play;
                (0,
                u.L9)(eh.S5z, {
                    element: "ControlScheme",
                    state: "".concat(k ? "Native" : null == x ? void 0 : x.label),
                    robloxExperience: R.default.getState().play.robloxExperienceId
                }),
                ey({
                    type: oa.Z.LEGACY_CONTROLS
                }),
                e && k ? (0,
                iu.Jj)(!1) : ((0,
                iu.DA)(),
                ey({
                    type: P.Z.ROBLOX_TOAST,
                    payload: {
                        robloxToast: !1
                    }
                }),
                eA(!0)),
                (0,
                w.Ul)(),
                k && t && (R.default.dispatch({
                    type: P.Z.UPDATE_SHIFT_LOCK
                }),
                (0,
                u.L9)(eh.S5z, {
                    element: "ShiftLock",
                    state: "Disabled",
                    robloxExperience: R.default.getState().play.robloxExperienceId
                }))
            }
              , eS = e => {
                let t = "".concat(e, " (1)")
                  , i = 1;
                for (; null == n ? void 0 : n.ControlSchemes.some(e => {
                    let {Name: i} = e;
                    return i === t
                }
                ); )
                    i += 1,
                    t = "".concat(e, " (").concat(i, ")");
                return t
            }
            ;
            (0,
            r.useEffect)( () => {
                let e = e => {
                    var t;
                    let {detail: i} = e;
                    ey({
                        type: or.Z.IMAP_STATUS,
                        payload: {
                            initialized: !0
                        }
                    }),
                    l(i);
                    let n = "".concat(R.default.getState().play.robloxExperienceId) || sessionStorage.getItem(eN.$3);
                    n && eK.ZP.experienceStarted(n);
                    let o = s.default.features.nativeControlsList;
                    "object" != typeof o || o.length || (null === (t = s.default.appInfo.playFeFeatures.nativeMouseActivities) || void 0 === t ? void 0 : t.length) || ey({
                        type: oa.Z.SET_LEGACY_CONTROLS,
                        payload: {
                            legacyControls: !0
                        }
                    })
                }
                  , t = e => {
                    let {detail: t} = e;
                    t.ended || ey((0,
                    tW.i)({
                        imapOverlay: !0
                    })),
                    ey({
                        type: oa.Z.SET_LEGACY_CONTROLS,
                        payload: {
                            legacyControls: !t.ended
                        }
                    }),
                    c(!t.ended),
                    l(t.cfg),
                    eK.ZP.updateDimensions()
                }
                  , i = () => {
                    ey({
                        type: or.Z.IMAP_STATUS,
                        payload: {
                            initialized: !1
                        }
                    }),
                    l(null)
                }
                  , n = e => {
                    let {detail: t} = e;
                    h(!!t)
                }
                ;
                return window.addEventListener(oo.UD, e),
                window.addEventListener(oo.kn, t),
                window.addEventListener(oo.u5, i),
                window.addEventListener(oo.eT, n),
                () => {
                    window.removeEventListener(oo.eT, n),
                    window.removeEventListener(oo.UD, e),
                    window.removeEventListener(oo.kn, t),
                    window.removeEventListener(oo.u5, i)
                }
            }
            , []),
            (0,
            r.useEffect)( () => {
                if (!F)
                    return;
                let e = F.GameControls.filter(e => Object.keys(e.Guidance || {}).length > 0);
                ee && !T && e.length && ey({
                    type: or.Z.TOGGLE_SIDEBAR
                })
            }
            , [F]),
            (0,
            r.useEffect)( () => {
                let e = null == n ? void 0 : n.ControlSchemes.some(e => {
                    let {Name: t, Selected: i} = e;
                    return t === L && i
                }
                );
                if (n && !e) {
                    let e = n.ControlSchemes.find(e => {
                        let {Name: t} = e;
                        return t === L
                    }
                    );
                    if (e) {
                        let t = n.ControlSchemes.map(t => t.Name === e.Name ? Object.assign(Object.assign({}, t), {
                            Selected: !0
                        }) : Object.assign(Object.assign({}, t), {
                            Selected: !1
                        }))
                          , i = Object.assign(Object.assign({}, n), {
                            ControlSchemes: t
                        });
                        eK.ZP.loadCfg(i),
                        l(i),
                        f({
                            label: "SCHEME: ".concat(e.Name),
                            value: e.Name
                        })
                    }
                }
            }
            , [L, n]),
            (0,
            r.useEffect)( () => {
                eA(k)
            }
            , [j]),
            (0,
            r.useEffect)( () => {
                ej();
                let e = null == n ? void 0 : n.ControlSchemes;
                if (e && e.forEach(e => {
                    var t;
                    if (e.Selected) {
                        y(e.isGamepadControlsPresent),
                        rf.Z.setActiveSchemeHasGamepad(e.isGamepadControlsPresent),
                        Y(e);
                        let {GameControls: i} = e;
                        i && C(i),
                        (null === (t = null == e ? void 0 : e.Images) || void 0 === t ? void 0 : t.length) ? (0,
                        rw.VX)(rE.Z.currentPackageName, JSON.stringify({
                            Images: e.Images.map(e => Object.assign(Object.assign({}, e), {
                                DetectPosition: !0
                            })),
                            MultipleTextureCRC: !!e.MultipleTextureCRC
                        })) : (0,
                        rw.VX)(rE.Z.currentPackageName, JSON.stringify({
                            Images: [],
                            MultipleTextureCRC: !1
                        }))
                    }
                }
                ),
                null == n ? void 0 : n.ControlSchemes) {
                    let e = null == n ? void 0 : n.ControlSchemes.reduce( (e, t) => {
                        let i = {
                            label: t.Name,
                            value: t.Name
                        };
                        return e.push(t.Name),
                        t.Selected && (Y(t),
                        f(i)),
                        e
                    }
                    , []);
                    e && v(e)
                }
            }
            , [n, b]),
            (0,
            r.useEffect)( () => {
                ej(),
                R.default.dispatch({
                    type: P.Z.SET_SENSITIVITY_POPUP,
                    payload: {
                        isSensitivityPopupOpen: !1
                    }
                })
            }
            , [T]);
            let eT = e => {
                e && e !== (null == x ? void 0 : x.value) && ey((0,
                tW.i)({
                    imapScheme: e
                }))
            }
              , eI = () => {
                let e = URL.createObjectURL(new Blob([JSON.stringify(n)]))
                  , t = document.createElement("a");
                t.href = e,
                t.download = "".concat(s.default.appInfo.packageName, "_edited.cfg"),
                t.click()
            }
            ;
            return (0,
            o.jsxs)(o.Fragment, {
                children: [D && E && S && !ei && (0,
                o.jsx)(rx, {
                    gameControls: j,
                    isGamepadview: b
                }), M && (0,
                o.jsx)(ow, {
                    editing: !0,
                    style: {
                        pointerEvents: et ? "all" : "none",
                        zIndex: "10"
                    },
                    onClick: e => {
                        var t;
                        let i = null === (t = null == Q ? void 0 : Q.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
                        if (i) {
                            let t = (e.clientX - i.left) * 100 / i.width
                              , n = (e.clientY - i.top) * 100 / i.height;
                            t = parseFloat(t.toFixed(2)),
                            n = parseFloat(n.toFixed(2)),
                            J("".concat(V, " ").concat(t, " ").concat(n))
                        }
                    }
                }), et && k && M && (0,
                o.jsx)(rC._, {
                    style: {
                        top: "0px",
                        right: "308px"
                    },
                    children: (0,
                    o.jsxs)(oA, {
                        style: {
                            width: "300px"
                        },
                        children: [(0,
                        o.jsxs)(od, {
                            children: [(0,
                            o.jsx)("div", {
                                className: "sidebar-heading",
                                children: (0,
                                o.jsx)(W.TZ, {
                                    children: "Add Script Commands"
                                })
                            }), (0,
                            o.jsx)(eL.Z, {
                                style: {
                                    cursor: "pointer"
                                },
                                id: "game-controls-cross",
                                onClick: () => {
                                    ey({
                                        type: P.Z.SCRIPT_EDITOR,
                                        payload: {
                                            showScriptEditor: !1
                                        }
                                    })
                                }
                                ,
                                size: 18,
                                name: "cross-thin"
                            })]
                        }), (0,
                        o.jsx)(oC, {
                            children: (0,
                            o.jsxs)(oj, {
                                children: [(0,
                                o.jsx)(oS.gx, {
                                    title: "Commands",
                                    onUpdate: () => {}
                                    ,
                                    value: V,
                                    onChange: e => {
                                        J(e.currentTarget.value)
                                    }
                                }), (0,
                                o.jsx)(ew.z, {
                                    onClick: () => {
                                        let e = V.split("\n");
                                        ey({
                                            type: P.Z.SCRIPT_EDITOR,
                                            payload: {
                                                scriptCommands: e,
                                                showScriptEditor: !1
                                            }
                                        })
                                    }
                                    ,
                                    children: "Update"
                                })]
                            })
                        })]
                    })
                }), et && k && !M && (0,
                o.jsx)(rC._, {
                    style: {
                        top: "0px",
                        left: "50%"
                    },
                    children: (0,
                    o.jsxs)(oy, {
                        style: {
                            background: iQ.qm.colors.black40,
                            borderRadius: "16px",
                            padding: "12px",
                            margin: 0,
                            border: "1px solid rgba(255,255,255,0.2)",
                            backdropFilter: "blur(24px)",
                            alignItems: "center"
                        },
                        children: [(0,
                        o.jsx)("input", {
                            type: "file",
                            ref: X,
                            style: {
                                display: "none",
                                pointerEvents: "none"
                            }
                        }), (0,
                        o.jsx)(ob, {
                            onClick: () => {
                                eK.ZP.loadCfg(n),
                                ey({
                                    type: oa.Z.UPDATE_CONFIG,
                                    payload: {
                                        config: n
                                    }
                                }),
                                ey({
                                    type: or.Z.IMAP_STATUS,
                                    payload: {
                                        keymappingEditMode: !et
                                    }
                                })
                            }
                            ,
                            children: (0,
                            o.jsx)("img", {
                                src: (0,
                                _.jW)(rb),
                                alt: i("save"),
                                title: i("saveChanges")
                            })
                        }), (0,
                        o.jsx)(ob, {
                            onClick: () => {
                                l(N),
                                eK.ZP.loadCfg(N),
                                ey({
                                    type: or.Z.IMAP_STATUS,
                                    payload: {
                                        keymappingEditMode: !1
                                    }
                                })
                            }
                            ,
                            children: (0,
                            o.jsx)("img", {
                                src: (0,
                                _.jW)(eu.Z),
                                alt: i("discard"),
                                title: i("discardChanges")
                            })
                        }), (0,
                        o.jsx)(ob, {
                            onClick: eI,
                            children: (0,
                            o.jsx)("img", {
                                src: (0,
                                _.jW)(ry.Z),
                                alt: i("download"),
                                title: i("downloadConfig")
                            })
                        }), (0,
                        o.jsx)(ob, {
                            onClick: () => {
                                var e, t;
                                null === (e = X.current) || void 0 === e || e.click(),
                                null === (t = X.current) || void 0 === t || t.addEventListener("change", () => {
                                    var e, t, i;
                                    let o = new FileReader;
                                    if ((null === (e = X.current) || void 0 === e ? void 0 : e.files) && (null === (t = X.current) || void 0 === t ? void 0 : t.files[0])) {
                                        let e = null === (i = X.current) || void 0 === i ? void 0 : i.files[0];
                                        o.addEventListener("load", e => {
                                            var t, i;
                                            if (null === (t = e.target) || void 0 === t ? void 0 : t.result) {
                                                let t = JSON.parse(null === (i = e.target) || void 0 === i ? void 0 : i.result)
                                                  , o = [...g];
                                                t.ControlSchemes.forEach(e => {
                                                    e.Name = eS(e.Name),
                                                    null == n || n.ControlSchemes.push(e),
                                                    e.Name,
                                                    e.Name,
                                                    o.push(e.Name)
                                                }
                                                ),
                                                v([...o])
                                            }
                                        }
                                        ),
                                        o.readAsBinaryString(e)
                                    }
                                    X.current && (X.current.value = "")
                                }
                                )
                            }
                            ,
                            children: (0,
                            o.jsx)("img", {
                                src: (0,
                                _.jW)(ry.Z),
                                alt: i("import"),
                                title: i("import"),
                                style: {
                                    transform: "rotate(180deg)"
                                }
                            })
                        }), (0,
                        o.jsx)(ob, {
                            onClick: () => {
                                z(!0),
                                eo.ImageId = "",
                                eo.ImageType = "",
                                eo.TextureCRC = "",
                                eo.TextureCoord = [],
                                eo.TextureIndex = 0,
                                eo.VertexIndex = 0,
                                eo.VertexRect = []
                            }
                            ,
                            children: (0,
                            o.jsx)("img", {
                                src: (0,
                                _.jW)(rA),
                                alt: i("new"),
                                title: "Add images"
                            })
                        }), (null == g ? void 0 : g.length) > 1 && x && (0,
                        o.jsx)(rP, {
                            schemes: g,
                            selectedScheme: x.label,
                            onChange: eT
                        }), (0,
                        o.jsx)(ob, {
                            onClick: () => {
                                let e = structuredClone(F);
                                F && (F.Name = eS((null == F ? void 0 : F.Name) || "New")),
                                e.Selected = !1,
                                null == n || n.ControlSchemes.push(e);
                                let t = {
                                    label: (null == F ? void 0 : F.Name) || "New",
                                    value: (null == F ? void 0 : F.Name) || "New"
                                };
                                (null == F ? void 0 : F.Name) && (v([...g, F.Name]),
                                f(t),
                                ey((0,
                                tW.i)({
                                    imapScheme: null == F ? void 0 : F.Name
                                })))
                            }
                            ,
                            children: (0,
                            o.jsx)("img", {
                                src: (0,
                                _.jW)(q.Z),
                                alt: i("copy"),
                                title: i("copyControlScheme")
                            })
                        }), (0,
                        o.jsx)(ob, {
                            onClick: () => {
                                let e = {
                                    GameControls: [],
                                    Images: [],
                                    Name: eS("New scheme"),
                                    BuiltIn: !1,
                                    Selected: !0,
                                    IsBookMarked: !1,
                                    IsCategoryVisible: !1,
                                    KeyboardLayout: (null == F ? void 0 : F.KeyboardLayout) || "",
                                    SchemeTags: [],
                                    isGamepadControlsPresent: !1
                                };
                                F && (F.Selected = !1),
                                null == n || n.ControlSchemes.push(e);
                                let t = {
                                    label: e.Name,
                                    value: e.Name
                                };
                                v([...g, e.Name]),
                                f(t),
                                C(e.GameControls),
                                ey((0,
                                tW.i)({
                                    imapScheme: null == F ? void 0 : F.Name
                                }))
                            }
                            ,
                            children: (0,
                            o.jsx)("img", {
                                src: (0,
                                _.jW)(rA),
                                alt: i("new"),
                                title: i("addControlScheme")
                            })
                        }), g.length > 1 && (0,
                        o.jsx)(ob, {
                            onClick: () => {
                                if (!n)
                                    return;
                                n.ControlSchemes = n.ControlSchemes.filter(e => e.Name !== (null == F ? void 0 : F.Name));
                                let e = n.ControlSchemes[0];
                                v(g.filter(e => e !== (null == F ? void 0 : F.Name))),
                                f({
                                    label: e.Name,
                                    value: e.Name
                                }),
                                C(e.GameControls),
                                ey((0,
                                tW.i)({
                                    imapScheme: e.Name
                                }))
                            }
                            ,
                            children: (0,
                            o.jsx)("img", {
                                src: (0,
                                _.jW)(rj),
                                alt: i("delete"),
                                title: i("deleteControlScheme")
                            })
                        })]
                    })
                }), H && et && k && (0,
                o.jsxs)(oA, {
                    children: [(0,
                    o.jsxs)(od, {
                        children: [(0,
                        o.jsx)("div", {
                            className: "sidebar-heading",
                            children: (0,
                            o.jsx)(W.TZ, {
                                children: "Add Images to Cfg"
                            })
                        }), (0,
                        o.jsx)(eL.Z, {
                            style: {
                                cursor: "pointer"
                            },
                            id: "game-controls-cross",
                            onClick: () => {
                                z(!1)
                            }
                            ,
                            size: 18,
                            name: "cross-thin"
                        })]
                    }), (0,
                    o.jsx)(oC, {
                        children: (0,
                        o.jsxs)(oj, {
                            children: [(0,
                            o.jsx)(oS.gx, {
                                title: "Images",
                                onUpdate: () => {}
                                ,
                                value: U,
                                onChange: e => {
                                    G(e.currentTarget.value)
                                }
                                ,
                                onPaste: e => {
                                    let t = e.clipboardData.getData("text");
                                    G("".concat(U).concat(t))
                                }
                            }), (0,
                            o.jsx)(ew.z, {
                                onClick: () => {
                                    eo = JSON.parse(U),
                                    null == F || F.Images.push(eo),
                                    z(!1)
                                }
                                ,
                                children: "Add Image"
                            })]
                        })
                    })]
                }), S && (0,
                o.jsxs)(ol, {
                    className: "".concat(T ? "" : "hide", " \n          ").concat(ed ? "portaitNewLayoutEnabled" : "", " ").concat(t),
                    style: {
                        right: es,
                        top: s.default.isMultiPanelAdsEnabled ? ea.top : 0,
                        height: "".concat(ea.height, "px")
                    },
                    children: [(0,
                    o.jsxs)(od, {
                        children: [(0,
                        o.jsx)("div", {
                            className: "sidebar-heading",
                            children: (0,
                            o.jsx)(W.QV, {
                                children: i("controls")
                            })
                        }), (O && er || Z) && !d && (0,
                        o.jsxs)(of, {
                            className: "".concat(k ? "" : "active"),
                            children: [(0,
                            o.jsx)(W.gd, {
                                children: i("native")
                            }), (0,
                            o.jsx)("span", {
                                onClick: () => eE()
                            })]
                        }), (0,
                        o.jsx)(eL.Z, {
                            style: {
                                cursor: "pointer"
                            },
                            id: "game-controls-cross",
                            onClick: eC,
                            size: 16,
                            name: "cross-thin"
                        })]
                    }), k && s.default.features.enableKeymapEditor && (0,
                    o.jsxs)(oy, {
                        children: [(0,
                        o.jsx)(ew.z, {
                            onClick: () => {
                                B(structuredClone(n)),
                                eC(),
                                ey({
                                    type: or.Z.IMAP_STATUS,
                                    payload: {
                                        keymappingEditMode: !et
                                    }
                                })
                            }
                            ,
                            children: i("edit")
                        }), (0,
                        o.jsx)(ew.z, {
                            onClick: eI,
                            children: i("download")
                        })]
                    }), (null == g ? void 0 : g.length) > 1 && x && k && (0,
                    o.jsx)(rP, {
                        schemes: g,
                        selectedScheme: x.label,
                        onChange: eT
                    }), (0,
                    o.jsxs)(op, {
                        children: [(0,
                        o.jsxs)(oh, {
                            className: "".concat(b ? "" : "active"),
                            onClick: () => A(!1),
                            children: [(0,
                            o.jsx)(eL.Z, {
                                name: "keyboard"
                            }), (0,
                            o.jsx)(W.gd, {
                                children: i("sidebar.keyboard")
                            })]
                        }), (0,
                        o.jsxs)(oh, {
                            className: "".concat(b ? "active" : ""),
                            onClick: () => A(!0),
                            children: [(0,
                            o.jsx)(eL.Z, {
                                name: "gamepad"
                            }), (0,
                            o.jsx)(W.gd, {
                                children: i("sidebar.gamepad")
                            })]
                        })]
                    }), b && (!m || !k || m && !p && k) && (0,
                    o.jsx)(rO, {
                        type: m && k ? "null" : "not_supported"
                    }), (b && m && p || !b) && (0,
                    o.jsxs)(o.Fragment, {
                        children: [k && (0,
                        o.jsxs)(os, {
                            children: [ej(), null == j ? void 0 : j.map(e => {
                                var t;
                                let i = e.Guidance
                                  , n = b ? "_alt1" : "";
                                switch (e.Type) {
                                case oo.x_.FreeLook:
                                    if (!e.KeyDown && !e.KeyRight && !e.KeyUp && !e.KeyLeft && !n)
                                        break;
                                    return (0,
                                    o.jsxs)(o.Fragment, {
                                        children: [(null == i ? void 0 : i.Key) && (0,
                                        o.jsx)(rM, {
                                            label: i.Key,
                                            value: oD(e["Key".concat(n)]),
                                            guidanceCategory: e.GuidanceCategory
                                        }), (null == i ? void 0 : i.KeyDown) && (0,
                                        o.jsx)(rM, {
                                            label: i.KeyDown,
                                            value: oD(e["KeyDown".concat(n)]),
                                            guidanceCategory: e.GuidanceCategory
                                        }), (null == i ? void 0 : i.KeyUp) && (0,
                                        o.jsx)(rM, {
                                            label: i.KeyUp,
                                            value: oD(e["KeyUp".concat(n)]),
                                            guidanceCategory: e.GuidanceCategory
                                        }), (null == i ? void 0 : i.KeyRight) && (0,
                                        o.jsx)(rM, {
                                            label: i.KeyRight,
                                            value: oD(e["KeyRight".concat(n)]),
                                            guidanceCategory: e.GuidanceCategory
                                        }), (null == i ? void 0 : i.KeyLeft) && (0,
                                        o.jsx)(rM, {
                                            label: i.KeyLeft,
                                            value: oD(e["KeyLeft".concat(n)]),
                                            guidanceCategory: e.GuidanceCategory
                                        })]
                                    });
                                case oo.x_.Pan:
                                    if (!e.KeyAction && !e.KeyStartStop && !n)
                                        break;
                                    return (0,
                                    o.jsxs)(o.Fragment, {
                                        children: [(null == i ? void 0 : i.KeyAction) && e["KeyAction".concat(n)] && (0,
                                        o.jsx)(rM, {
                                            label: oD(e["KeyAction".concat(n)]),
                                            value: "MouseLButton",
                                            guidanceCategory: e.GuidanceCategory
                                        }), (null == i ? void 0 : i.KeyLookAround) && e["KeyLookAround".concat(n)] && (0,
                                        o.jsx)(rM, {
                                            label: i.KeyLookAround || "Pan",
                                            value: oD(e["KeyLookAround".concat(n)]),
                                            guidanceCategory: e.GuidanceCategory
                                        }), (null == i ? void 0 : i.KeyStartStop) && e["KeyStartStop".concat(n)] && (0,
                                        o.jsx)(rM, {
                                            label: i.KeyStartStop,
                                            value: oD(e["KeyStartStop".concat(n)]),
                                            guidanceCategory: e.GuidanceCategory
                                        }), (null == i ? void 0 : i.KeySuspend) && e["KeySuspend".concat(n)] && (0,
                                        o.jsx)(rM, {
                                            label: i.KeySuspend,
                                            value: oD(e["KeySuspend".concat(n)]),
                                            guidanceCategory: e.GuidanceCategory
                                        })]
                                    });
                                case oo.x_.Dpad:
                                    if (!e.KeyDown && !e.KeyUp && !e.KeyRight && !e.KeyLeft && !n)
                                        break;
                                    return (0,
                                    o.jsxs)(o.Fragment, {
                                        children: [(null == i ? void 0 : i.DpadTitle) && (0,
                                        o.jsx)(rM, {
                                            label: i.DpadTitle,
                                            value: "".concat(oD(e["KeyUp".concat(n)]), "\n                                  ").concat(oD(e["KeyLeft".concat(n)]), "\n                                  ").concat(oD(e["KeyDown".concat(n)]), "\n                                  ").concat(oD(e["KeyRight".concat(n)])),
                                            guidanceCategory: e.GuidanceCategory
                                        }), n && e.GamepadStick ? (0,
                                        o.jsx)(rM, {
                                            label: (null == i ? void 0 : i.GamepadStick) || "DPAD",
                                            value: e.GamepadStick,
                                            guidanceCategory: e.GuidanceCategory
                                        }) : (0,
                                        o.jsxs)(o.Fragment, {
                                            children: [(null == i ? void 0 : i.KeyDown) && (0,
                                            o.jsx)(rM, {
                                                label: i.KeyDown,
                                                value: oD(e["KeyDown".concat(n)]),
                                                guidanceCategory: e.GuidanceCategory
                                            }), (null == i ? void 0 : i.KeyUp) && (0,
                                            o.jsx)(rM, {
                                                label: i.KeyUp,
                                                value: oD(e["KeyUp".concat(n)]),
                                                guidanceCategory: e.GuidanceCategory
                                            }), (null == i ? void 0 : i.KeyRight) && (0,
                                            o.jsx)(rM, {
                                                label: i.KeyRight,
                                                value: oD(e["KeyRight".concat(n)]),
                                                guidanceCategory: e.GuidanceCategory
                                            }), (null == i ? void 0 : i.KeyLeft) && (0,
                                            o.jsx)(rM, {
                                                label: i.KeyLeft,
                                                value: oD(e["KeyLeft".concat(n)]),
                                                guidanceCategory: e.GuidanceCategory
                                            })]
                                        })]
                                    });
                                case oo.x_.EdgeScroll:
                                    if ("boolean" == typeof (null == i ? void 0 : i.EdgeScrollEnabled))
                                        return (0,
                                        o.jsx)(rM, {
                                            label: i.EdgeScrollEnabled,
                                            value: e.EdgeScrollEnabled ? "True" : "False",
                                            guidanceCategory: e.GuidanceCategory
                                        });
                                    break;
                                case oo.x_.Zoom:
                                case oo.x_.MouseZoom:
                                    return (0,
                                    o.jsxs)(o.Fragment, {
                                        children: [(null == i ? void 0 : i.KeyIn) && (0,
                                        o.jsx)(rM, {
                                            label: i.KeyIn,
                                            value: oD(e["KeyIn".concat(n)]),
                                            guidanceCategory: e.GuidanceCategory
                                        }), (null == i ? void 0 : i.KeyOut) && (0,
                                        o.jsx)(rM, {
                                            label: i.KeyOut,
                                            value: oD(e["KeyOut".concat(n)]),
                                            guidanceCategory: e.GuidanceCategory
                                        }), (null == i ? void 0 : i.KeyWheel) && (0,
                                        o.jsx)(rM, {
                                            label: i.KeyWheel,
                                            value: oD(e["KeyWheel".concat(n)]),
                                            guidanceCategory: e.GuidanceCategory
                                        })]
                                    });
                                default:
                                    if ((null === (t = e.Guidance) || void 0 === t ? void 0 : t.Key) && (e["Key".concat(n)] || e["KeyModifier".concat(n)]))
                                        return (0,
                                        o.jsx)(rM, {
                                            label: e.Guidance.Key || "",
                                            value: oD(e["Key".concat(n)] || e["KeyModifier".concat(n)]),
                                            guidanceCategory: e.GuidanceCategory
                                        })
                                }
                                return null
                            }
                            )]
                        }), !k && !b && (0,
                        o.jsxs)(os, {
                            children: [Z && (0,
                            o.jsxs)(om, {
                                children: [(0,
                                o.jsx)(ou, {
                                    children: i("sidebar.specialKey")
                                }), (0,
                                o.jsx)(rM, {
                                    label: i("mouseLockKey"),
                                    value: "Ctrl + Shift + 1",
                                    guidanceCategory: ""
                                }), (0,
                                o.jsx)(rM, {
                                    label: i("shiftLockKey"),
                                    value: "Shift + Q",
                                    guidanceCategory: ""
                                })]
                            }, "nativeControlBox"), s.default.features.nativeControlsList.map(e => (0,
                            o.jsxs)(o.Fragment, {
                                children: [(0,
                                o.jsx)(ou, {
                                    children: e.key.toString()
                                }, "".concat(e.key.toString())), e.value.map(e => (0,
                                o.jsx)(rM, {
                                    label: e.key || "",
                                    value: e.value,
                                    guidanceCategory: ""
                                }))]
                            }))]
                        })]
                    }), k && (0,
                    o.jsxs)(of, {
                        className: "".concat(I ? "active" : ""),
                        children: [(0,
                        o.jsx)(ox, {
                            style: {
                                color: iQ.qm.colors.ascent
                            },
                            children: i("sidebar.onscreenControls")
                        }), (0,
                        o.jsx)("span", {
                            onClick: () => eb()
                        })]
                    })]
                })]
            })
        }
        ;
        var rN = i(76039)
          , rB = () => ((0,
        r.useEffect)( () => {
            !function(e, t) {
                let i = document.createElement("script");
                i.type = "text/javascript",
                i.async = !0,
                i.src = "https://widget.kommunicate.io/v2/kommunicate.app",
                document.getElementsByTagName("head")[0].appendChild(i),
                window.kommunicate = t,
                t._globals = {
                    appId: "350e2364bb18edfc4fbb2d984bc91b854",
                    popupWidget: !1,
                    onInit: function() {
                        window.Kommunicate.subscribeToEvents({
                            onChatWidgetOpen: function() {
                                var e;
                                let {videoRef: t} = R.default.getState().play
                                  , i = null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.getBoundingClientRect()
                                  , n = document.getElementsByClassName("km-iframe-dimension-no-popup");
                                n && n[0] && (n[0].style.left = "".concat(((null == i ? void 0 : i.left) || 0) + ((null == i ? void 0 : i.width) || 0) - 390, "px"),
                                n[0].style.top = "".concat(((null == i ? void 0 : i.top) || 0) + ((null == i ? void 0 : i.height) || 0) - 600, "px"))
                            },
                            onChatWidgetClose: function() {
                                let e = document.getElementsByClassName("km-iframe-dimension-no-popup");
                                e && e[0] && (e[0].style.left = "auto",
                                e[0].style.top = "auto")
                            }
                        })
                    }
                }
            }(document, window.kommunicate || {})
        }
        , []),
        (0,
        o.jsx)("div", {}))
          , rW = i(47329)
          , r_ = i(2815)
          , rF = e => {
            let {setIapBtnClicked: t} = e
              , {t: i} = (0,
            K.$)()
              , n = (0,
            a.I0)();
            return (0,
            o.jsx)(r_.Bp, {
                className: "".concat((0,
                c.tq)() && "mobile"),
                children: (0,
                o.jsxs)(r_.wf, {
                    children: [(0,
                    o.jsx)(eL.Z, {
                        name: "cross-thin",
                        onClick: () => n({
                            type: P.Z.TOGGLE_IAP_POPUP_STATE
                        }),
                        size: 12
                    }), (0,
                    o.jsx)(W.T5, {
                        med: !0,
                        white: !0,
                        children: i("iapTitle")
                    }), (0,
                    o.jsx)("p", {
                        className: "iap-description",
                        children: i("iapDescription")
                    }), (0,
                    o.jsx)(ew.z, {
                        variant: "primary",
                        size: "medium",
                        text: i("iapBtnText"),
                        onClick: () => {
                            n({
                                type: P.Z.TOGGLE_IAP_POPUP_STATE
                            }),
                            t(!0),
                            (0,
                            iH.f)("userLogin::com.google")
                        }
                    })]
                })
            })
        }
          , rY = () => {
            let {t: e} = (0,
            K.$)();
            return (0,
            o.jsx)(r_.Bp, {
                className: "".concat((0,
                c.tq)() && "mobile"),
                children: (0,
                o.jsxs)(r_.wf, {
                    className: "loaderContainer",
                    children: [(0,
                    o.jsx)("img", {
                        alt: "".concat(e("roundLoader")),
                        src: (0,
                        _.jW)(ep.Z)
                    }), (0,
                    o.jsx)("p", {
                        children: e("iapLoaderText")
                    })]
                })
            })
        }
          , rX = () => {
            let {t: e} = (0,
            K.$)()
              , t = (0,
            a.I0)()
              , [i,n] = (0,
            r.useState)(!1)
              , [l,d] = (0,
            r.useState)(!1)
              , [s,c] = (0,
            r.useState)("")
              , u = (0,
            a.v9)(e => e.play.showIAPPopup)
              , p = (0,
            a.v9)(e => e.play.iapUserLogin);
            return ((0,
            r.useEffect)( () => {
                let e, o, r;
                return i && p ? (t({
                    type: P.Z.UPDATE_PLAY_STATE,
                    payload: {
                        hideIAPIcon: !0
                    }
                }),
                d(!0),
                c(""),
                e = setTimeout( () => {
                    d(!1),
                    c("slideDown")
                }
                , 1e3),
                o = setTimeout( () => {
                    c("slideUp")
                }
                , 3e3),
                r = setTimeout( () => {
                    n(!1)
                }
                , 4e3)) : n(!1),
                () => {
                    clearTimeout(e),
                    clearTimeout(o),
                    clearTimeout(r)
                }
            }
            , [p]),
            u) ? (0,
            o.jsx)(rF, {
                setIapBtnClicked: n
            }) : i && p ? (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsxs)(r_.iO, {
                    className: s,
                    children: [(0,
                    o.jsx)("i", {
                        className: "icon-active"
                    }), (0,
                    o.jsx)(W.kk, {
                        med: !0,
                        white: !0,
                        children: e("iapToastText")
                    })]
                }), l && (0,
                o.jsx)(rY, {})]
            }) : null
        }
          , rH = i(73783)
          , rz = i(44314);
        let rU = g.ZP.div.withConfig({
            componentId: "sc-bbe206af-0"
        })(["position:fixed;top:0;pointer-events:all;display:flex;justify-content:center;width:auto;min-width:354px;min-height:", ";touch-action:none;align-items:center;border:1px solid rgba(255,255,255,0.15);background:#333;justify-content:space-between;"], "".concat(eh.g8k, "px"))
          , rG = g.ZP.div.withConfig({
            componentId: "sc-bbe206af-1"
        })(["width:32px;background:", ";height:100%;min-height:50px;align-content:space-around;display:flex;justify-content:space-evenly;align-items:center;align-self:self-start;svg{z-index:0;}"], e => {
            let {theme: t} = e;
            return t.colors.ascent
        }
        );
        var rV = (0,
        r.memo)( () => {
            let[e,t] = (0,
            r.useState)("")
              , i = (0,
            a.v9)(e => e.play.isRecording)
              , n = (0,
            r.useContext)(k.x)
              , l = (0,
            r.useRef)(null)
              , d = (0,
            a.I0)()
              , {t: s} = (0,
            K.$)()
              , p = (0,
            r.useMemo)( () => i && (0,
            c.Dx)(), [i]);
            (0,
            r.useEffect)( () => {
                d({
                    type: P.Z.SET_REF,
                    payload: {
                        displayAdRef: l
                    }
                }),
                setTimeout( () => {
                    t(eh.Nwu),
                    (0,
                    w.sZ)(),
                    (0,
                    w.Ul)()
                }
                , 1e3)
            }
            , [d]),
            (0,
            r.useEffect)( () => {
                p || e !== eh.Nwu || "p" === (0,
                c.Sf)() || ((0,
                is.JD)("div-gpt-ad-display", "div-gpt-ad-display"),
                window.tude.cmd.push( () => {
                    "p" !== (0,
                    c.Sf)() && ((0,
                    is.JD)("div-gpt-ad-display", "div-gpt-ad-display", "2"),
                    window.tude.refreshAdsViaDivMappings([{
                        divId: "div-gpt-ad-display",
                        baseDivId: "pb-slot-incontent",
                        targeting: {
                            ads_loc: "display-lb-top"
                        }
                    }]))
                }
                ))
            }
            , [n, e, p]);
            let h = (0,
            r.useCallback)( () => {
                (0,
                u.L9)(eh.Psr, {
                    nowPassSource: eh.wMl.CloseAdsButton
                }),
                (0,
                c.xG)(eh.wMl.CloseAdsButton)
            }
            , [u.L9, c.xG]);
            return (0,
            o.jsx)(rU, {
                className: (0,
                rz.Ce)() ? "" : "no-cross-icon",
                children: !p && (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)(ii.pB, {
                        className: "less-width",
                        children: s("adHelpFree")
                    }), (0,
                    o.jsx)("div", {
                        ref: l,
                        id: "div-gpt-ad-display"
                    }), (0,
                    rz.Ce)() && (0,
                    o.jsx)(rG, {
                        onClick: h,
                        children: (0,
                        o.jsx)(il.x, {})
                    })]
                })
            })
        }
        )
          , rq = i(40433);
        let rJ = g.ZP.div.withConfig({
            componentId: "sc-552a91a0-0"
        })(["position:absolute;top:50%;left:50%;border-radius:12px;border:1px solid ", ";background:", ";box-shadow:0px 4px 24px 0px rgba(0,0,0,0.16);backdrop-filter:blur(60px);display:flex;padding:24px;flex-direction:column;gap:8px;width:355px;transform:translate(-50%,-50%);z-index:100;"], e => {
            let {theme: t} = e;
            return t.colors.white10
        }
        , e => {
            let {theme: t} = e;
            return t.colors.black70
        }
        )
          , rQ = g.ZP.div.withConfig({
            componentId: "sc-552a91a0-1"
        })(["position:absolute;border-radius:12px;border:1px solid ", ";background:", ";box-shadow:0px 4px 24px 0px rgba(0,0,0,0.16);backdrop-filter:blur(60px);display:flex;padding:10px;z-index:100;"], e => {
            let {theme: t} = e;
            return t.colors.white10
        }
        , e => {
            let {theme: t} = e;
            return t.colors.black70
        }
        )
          , r$ = g.ZP.div.withConfig({
            componentId: "sc-552a91a0-2"
        })(["display:flex;justify-content:space-between;"])
          , r0 = g.ZP.div.withConfig({
            componentId: "sc-552a91a0-3"
        })(["display:flex;align-items:center;width:100%;justify-content:flex-end;"])
          , r1 = (0,
        g.ZP)(W.lU).withConfig({
            componentId: "sc-552a91a0-4"
        })(["color:#FFF;padding:4px 12px;border-radius:6px;border:1px solid ", ";margin-top:10px;margin-bottom:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;"], e => {
            let {theme: t} = e;
            return t.colors.white70
        }
        );
        var r2 = () => {
            var e;
            let t = (0,
            a.v9)(e => e.play.showCopyPastePrompt.type)
              , i = (0,
            a.v9)(e => e.play.showCopyPastePrompt.event)
              , n = (0,
            a.v9)(e => e.play.showCopyPastePrompt.copyText)
              , l = (0,
            a.v9)(e => e.play.keyboardActive)
              , {t: d} = (0,
            K.$)()
              , s = (0,
            a.I0)()
              , [c,u] = (0,
            r.useState)(!1)
              , [p,h] = (0,
            r.useState)(!1)
              , g = () => {
                var e, i, o, r;
                return e = void 0,
                i = void 0,
                o = void 0,
                r = function*() {
                    if ("copy" === t)
                        u(!0),
                        h(!0),
                        (0,
                        nN.FF)(n || ""),
                        setTimeout( () => {
                            u(!1),
                            s({
                                type: P.Z.COPY_PASTE_PROMPT,
                                payload: {
                                    showCopyPastePrompt: {
                                        type: ""
                                    }
                                }
                            })
                        }
                        , 3e3);
                    else if ("paste" === t)
                        try {
                            let e = yield navigator.clipboard.readText();
                            e && ((0,
                            nN.g2)(e),
                            s({
                                type: P.Z.COPY_PASTE_PROMPT,
                                payload: {
                                    showCopyPastePrompt: {
                                        type: ""
                                    }
                                }
                            }))
                        } catch (e) {}
                }
                ,
                new (o || (o = Promise))(function(t, n) {
                    function a(e) {
                        try {
                            d(r.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }
                    function l(e) {
                        try {
                            d(r.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }
                    function d(e) {
                        var i;
                        e.done ? t(e.value) : ((i = e.value)instanceof o ? i : new o(function(e) {
                            e(i)
                        }
                        )).then(a, l)
                    }
                    d((r = r.apply(e, i || [])).next())
                }
                )
            }
            ;
            return "copy" === t ? (0,
            o.jsxs)(rJ, {
                children: [(0,
                o.jsxs)(r$, {
                    children: [(0,
                    o.jsxs)(rq.Lb, {
                        gap: "8",
                        children: [c && (0,
                        o.jsx)(eH, {}), (0,
                        o.jsx)(W.js, {
                            style: {
                                color: "#FFF"
                            },
                            children: d("copyToClipboard")
                        })]
                    }), (0,
                    o.jsx)(eL.Z, {
                        name: "cross-thin",
                        size: 24,
                        style: {
                            color: "#FFF",
                            cursor: "pointer"
                        },
                        onClick: () => {
                            h(!1),
                            s({
                                type: P.Z.COPY_PASTE_PROMPT,
                                payload: {
                                    showCopyPastePrompt: {
                                        type: "",
                                        copyText: ""
                                    }
                                }
                            })
                        }
                    })]
                }), !c && !p && (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsxs)("div", {
                        children: [(0,
                        o.jsx)(W.TZ, {
                            style: {
                                color: "rgba(255, 255, 255, 0.80"
                            },
                            children: d("textYouSelected")
                        }), (0,
                        o.jsx)(r1, {
                            children: n
                        })]
                    }), (0,
                    o.jsx)(r0, {
                        children: (0,
                        o.jsx)(ew.z, {
                            variant: "primary",
                            text: d("copy"),
                            onClick: g
                        })
                    })]
                })]
            }) : i && (null === (e = null == i ? void 0 : i.changedTouches) || void 0 === e ? void 0 : e.length) && l ? (0,
            o.jsx)(rQ, {
                onClick: g,
                style: {
                    top: "".concat(i.changedTouches[0].pageY, "px"),
                    left: "".concat(i.changedTouches[0].pageX, "px")
                },
                children: (0,
                o.jsx)(W.gd, {
                    style: {
                        color: "#FFF",
                        cursor: "pointer"
                    },
                    children: d("paste")
                })
            }) : null
        }
        ;
        let r5 = (0,
        g.F4)(["0%{width:0%;}10%{width:80%;}100%{width:100%;}"])
          , r4 = (0,
        g.F4)(["0%{opacity:0;}100%{opacity:1;}"])
          , r9 = g.ZP.section.withConfig({
            componentId: "sc-2e0a379c-0"
        })(["padding:10px 12px;background:linear-gradient(270deg,#7B4CFF 77.6%,#0EA4C5 100%);position:absolute;bottom:", ";left:0;width:100%;z-index:", ";display:flex;align-items:center;gap:12px;color:white;animation:", " 2s ease-out;", " img{border-radius:3px;}h4{font-weight:700;text-overflow:ellipsis;text-wrap:nowrap;overflow:hidden;padding-right:12px;}p{margin-left:auto;color:", ";text-wrap:nowrap;}&::after,&::before{content:'';position:absolute;left:0;top:0;width:100%;height:4px;transform:translateY(-4px);}&::before{background-color:", ";}&::after{width:50%;background-color:", ";animation:", " 60s ease-out;}"], e => {
            let {isDesktop: t} = e;
            return t ? "52px" : "0"
        }
        , e => {
            let {isAppPage: t} = e;
            return t ? "1" : "20"
        }
        , r4, e => {
            let {isMobile: t, isAppPage: i} = e;
            return !t && i && (0,
            g.iv)(["transform:translateY(100%);"])
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white70
        }
        , e => {
            let {theme: t} = e;
            return t.colors.black60
        }
        , e => {
            let {theme: t} = e;
            return t.colors.ascent
        }
        , r5);
        var r3 = () => {
            let {t: e} = (0,
            K.$)()
              , t = (0,
            a.v9)(e => e.ads.preRollAdsDuration)
              , i = (0,
            a.v9)(e => e.ads.preRollAdPaused)
              , [n,l] = r.useState(t);
            return (0,
            r.useEffect)( () => {
                let e = null;
                return t > 0 && !i && n > 0 && (e = setInterval( () => {
                    l(t => {
                        let i = t - 1;
                        return i <= 0 ? (e && clearInterval(e),
                        0) : i
                    }
                    )
                }
                , 1e3)),
                () => {
                    e && clearInterval(e)
                }
            }
            , [t, i]),
            (0,
            o.jsx)(W.lU, {
                children: 0 === t ? "" : e("seconds", {
                    seconds: n
                })
            })
        }
          , r6 = r.memo(e => {
            let {gameName: t, gameIcon: i, isMobile: n, isAppPage: r, isDesktop: l} = e
              , {t: d} = (0,
            K.$)()
              , s = (0,
            a.v9)(e => e.ads.preRollAdsDuration);
            return (0,
            o.jsxs)(r9, {
                isMobile: n,
                isDesktop: l,
                isAppPage: r,
                children: [(0,
                o.jsx)("img", {
                    src: i,
                    alt: "",
                    width: 32,
                    height: 32
                }), (0,
                o.jsx)(W.js, {
                    children: d("gameLaunchAfterAd", {
                        gameName: t
                    })
                }), s > 0 && (0,
                o.jsx)(r3, {})]
            })
        }
        )
          , r7 = i(12019)
          , r8 = {
            src: "/_next/static/media/secure-notification-bg.55642608.svg",
            height: 64,
            width: 579,
            blurWidth: 0,
            blurHeight: 0
        }
          , ae = {
            src: "/_next/static/media/cloud-phone-landscape.c5def59c.png",
            height: 128,
            width: 230,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAPFBMVEVMaXGZfIHHs7ZqXmrrq3BARl61lpnnl2mgiIR6eYX/31/ll5Tov5NETkN1ZHZrXX1PY3NOWnN6d294OXJkbeY/AAAADXRSTlMAv6b15Pm+JPWoEFnecSlxKQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACdJREFUeJxjYGDgFBRgZAABNmFeDnYQg4mflY+bgYGBi0eImYOFHQANfwDOIngQ/QAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 4
        }
          , at = {
            src: "/_next/static/media/cloud-phone-portrait.9e66752e.png",
            height: 210,
            width: 190,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAY1BMVEVMaXH///9qZX35q6t9Z3hFS2DytVjwt69TZYpOY4SCcXRJXXNWZ3j/yLD/z4r/3tlLSHFrGmA9UDfZmpTfinzOhEvqqZjpsVVNUmZTWm6OdIaPiY5CYmqsg5nkpEahmIHopnvxi7WIAAAAGnRSTlMADNAr/Pv+OCM99aO2Qd5m/f7+0lrSmEj+/r2AYzgAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA9SURBVHicBcEHAoAgDACxU5ku3Lbg+v8rTSDEGAA6lboCehXjYcjT1Tbg73l5PaRirdlgLKL5APfs6+fOH0qlAtYvPtsVAAAAAElFTkSuQmCC",
            blurWidth: 7,
            blurHeight: 8
        }
          , ai = {
            src: "/_next/static/media/secure-shield.cd1f691a.png",
            height: 36,
            width: 36,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEUTFBaSeUkkIhxORTYlK1KdiF+3llRDPC0bGxszLiR6b1+miVhITWmHcFZ7cWlQV3lub4N1cnyajnZcYoKJg31oXFlvWzWGazkxPWhxa2VeWEs9QV+9p3ykloHDsPd9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQklEQVR4nAXBBQKAMAwEsJu2nRsO//8mCQAajhiQsGYfkXC3OpfNB0wvn7N5B7XXPTYa6Kumc/MMUEnBC8AQpTT4B2r7Ar17z8aiAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        };
        let an = (0,
        g.F4)(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);}100%{transform:rotate(180deg);}"])
          , ao = (0,
        g.F4)(["0%{transform:rotate(0deg);}50%{transform:rotate(0deg);}100%{transform:rotate(180deg);}"])
          , ar = g.ZP.div.withConfig({
            componentId: "sc-e4600110-0"
        })(["width:", "px;height:", "px;background-color:", ";border-radius:", "px;transform:rotate(180deg);position:relative;&::after{content:'';position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:", "px;height:", "px;border-radius:50%;background-color:", ";}div{overflow:hidden;position:absolute;width:50%;height:100%;}.loader{position:absolute;left:100%;top:0;width:100%;height:100%;border-radius:1000px;background-color:", ";}.left-wrap .loader{border-top-left-radius:0;border-bottom-left-radius:0;transform-origin:0 50% 0;animation:", " ", "s linear;}.right-wrap{left:50%;}.right-wrap .loader{left:-100%;border-bottom-right-radius:0;border-top-right-radius:0;transform-origin:100% 50% 0;animation:", " ", "s linear;}"], e => {
            let {diameter: t} = e;
            return t
        }
        , e => {
            let {diameter: t} = e;
            return t
        }
        , e => {
            let {trackColor: t} = e;
            return t
        }
        , e => {
            let {diameter: t} = e;
            return t
        }
        , e => {
            let {diameter: t, border: i} = e;
            return t - 2 * i
        }
        , e => {
            let {diameter: t, border: i} = e;
            return t - 2 * i
        }
        , e => {
            let {backgroundColor: t} = e;
            return t
        }
        , e => {
            let {movingColor: t} = e;
            return t
        }
        , an, e => {
            let {duration: t} = e;
            return t
        }
        , ao, e => {
            let {duration: t} = e;
            return t
        }
        );
        var aa = e => {
            let {diameter: t=40, border: i=5, backgroundColor: n="#7B4CFF", movingColor: r="white", trackColor: a=iQ.qm.colors.white20, duration: l=5} = e;
            return (0,
            o.jsxs)(ar, {
                diameter: t,
                border: i,
                backgroundColor: n,
                movingColor: r,
                trackColor: a,
                duration: l,
                children: [(0,
                o.jsx)("div", {
                    className: "left-wrap",
                    children: (0,
                    o.jsx)("div", {
                        className: "loader"
                    })
                }), (0,
                o.jsx)("div", {
                    className: "right-wrap",
                    children: (0,
                    o.jsx)("div", {
                        className: "loader"
                    })
                })]
            })
        }
        ;
        let al = e => {
            let {isPortrait: t=!1, isMobile: i=!1} = e;
            return (0,
            g.iv)(["height:calc(var(--overlay-width) * ", "px) !important;background:none;transform:translateY(-1px);&.modal-overlay{", "}"], t ? "0.121" : "0.06", i && (0,
            g.iv)(["top:0 !important;width:100% !important;left:0 !important;"]))
        }
          , ad = (0,
        g.iv)(["width:100%;height:100%;border-radius:0;border:0;backdrop-filter:none;background:none;overflow:hidden;position:relative;& > div{margin:0;color:", ";height:100%;}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , as = (0,
        g.F4)(["0%{transform:translateY(-100%);}100%{transform:translateY(0);}"])
          , ac = (0,
        g.F4)(["0%{transform:translateY(0);}100%{transform:translateY(-100%);}"])
          , au = g.ZP.div.withConfig({
            componentId: "sc-c4855006-0"
        })(["position:absolute;left:0;width:100%;height:100%;background-color:", ";backdrop-filter:blur(60px);transition:all 0.3s ease-out;transform:translateY(0);animation:", " 0.3s ease-out;img.device{height:100%;width:", ";}&::after{content:'';position:absolute;left:0;bottom:0;height:2px;width:100%;z-index:1;background:linear-gradient(270deg,#7B4CFF 0%,#0EA4C5 99.48%);}"], e => {
            let {theme: t} = e;
            return t.colors.black90
        }
        , e => {
            let {toggle: t} = e;
            return t ? as : ac
        }
        , e => {
            let {isPortrait: t} = e;
            return t ? "95px" : "calc(var(--overlay-width) * 0.11px)"
        }
        )
          , ap = g.ZP.div.withConfig({
            componentId: "sc-c4855006-1"
        })(["position:absolute;width:100%;min-height:", ";height:", ";padding:", ";padding-left:", ";display:flex;align-items:center;", " ", " &:nth-child(2){", "}&:nth-child(3){", "}"], e => {
            let {isPortrait: t} = e;
            return t ? "50%" : "100%"
        }
        , e => {
            let {isPortrait: t} = e;
            return t ? "fit-content" : "100%"
        }
        , e => {
            let {isPortrait: t} = e;
            return t ? "4px" : "0px"
        }
        , e => {
            let {isPortrait: t} = e;
            return t ? "95px" : "0"
        }
        , e => {
            let {isBottom: t, theme: i, isPortrait: n} = e;
            return (0,
            g.iv)(["", ""], t && n ? (0,
            g.iv)(["bottom:0;background-color:", ";"], i.colors.white10) : "top: 0;")
        }
        , e => {
            let {isPortrait: t} = e;
            return t && (0,
            g.iv)(["h5{font-size:12.5px;}"])
        }
        , e => {
            let {isPortrait: t} = e;
            return !t && (0,
            g.iv)(["margin-left:calc(var(--overlay-width) * 0.11px);"])
        }
        , e => {
            let {isPortrait: t} = e;
            return t ? (0,
            g.iv)(["width:100%;"]) : (0,
            g.iv)(["width:60%;right:0;padding-right:calc(var(--overlay-width) * 0.084px);padding-left:10%;display:flex;justify-content:center;"])
        }
        )
          , ah = g.ZP.img.withConfig({
            componentId: "sc-c4855006-2"
        })(["max-width:100% !important;width:100%;position:absolute;right:0;"])
          , ag = g.ZP.div.withConfig({
            componentId: "sc-c4855006-3"
        })(["display:flex;flex-direction:column;gap:calc(var(--overlay-width) * 0.001px);p{font-size:calc(var(--overlay-width) * 0.013px);line-height:calc(var(--overlay-width) * 0.018px);}h5{font-size:calc(var(--overlay-width) * 0.015px);line-height:calc(var(--overlay-width) * 0.020px);}"])
          , av = g.ZP.div.withConfig({
            componentId: "sc-c4855006-4"
        })(["display:flex;gap:calc(var(--overlay-width) * 0.008px);align-items:center;"])
          , ax = (0,
        g.ZP)(W.gd).withConfig({
            componentId: "sc-c4855006-5"
        })(["color:#E4B95E;"])
          , af = g.ZP.div.withConfig({
            componentId: "sc-c4855006-6"
        })(["display:flex;gap:calc(var(--overlay-width) * 0.042px);z-index:1;position:relative;p{font-size:calc(var(--overlay-width) * 0.013px);line-height:calc(var(--overlay-width) * 0.018px);}h5{font-size:calc(var(--overlay-width) * 0.015px);line-height:calc(var(--overlay-width) * 0.020px);}"])
          , am = g.ZP.div.withConfig({
            componentId: "sc-c4855006-7"
        })(["display:flex;flex-direction:column;align-items:flex-start;gap:calc(var(--overlay-width) * 0.004px);h5{text-wrap:balance;}"])
          , aw = g.ZP.div.withConfig({
            componentId: "sc-c4855006-8"
        })(["border-radius:12px;background:", ";padding:0 calc(var(--overlay-width) * 0.005px);text-transform:uppercase;font-size:calc(var(--overlay-width) * 0.01px);font-weight:600;line-height:150%;", ""], e => {
            let {theme: t} = e;
            return t.colors.black40
        }
        , e => {
            let {isPortrait: t, theme: i} = e;
            return t && (0,
            g.iv)(["background-color:", ";font-size:calc(var(--overlay-width) * 0.009px);"], i.colors.white20)
        }
        )
          , ay = g.ZP.div.withConfig({
            componentId: "sc-c4855006-9"
        })(["", " position:absolute;right:calc(var(--overlay-width) * 0.011px);top:50%;transform:translateY(-50%);", " & > div{position:absolute;transition:all 0.6s ease-out;opacity:", ";}i{cursor:pointer;}"], rq.be, e => {
            let {isPortrait: t} = e;
            return t && (0,
            g.iv)(["top:16px;right:8px;"])
        }
        , e => {
            let {toggle: t} = e;
            return t ? "1" : "0"
        }
        );
        var ab = e => {
            let {toggle: t} = e
              , {t: i} = (0,
            K.$)()
              , [n,l] = (0,
            r.useState)(!0)
              , d = (0,
            a.v9)(e => e.play.orientation);
            (0,
            a.v9)(e => e.play.videoRef);
            let s = (0,
            a.v9)(e => e.play.deviceLocationDisplayString)
              , u = (0,
            a.I0)()
              , h = p.cj.portrait === d;
            return (0,
            r.useEffect)( () => {
                setTimeout( () => {
                    l(!n)
                }
                , 5e3)
            }
            , []),
            (0,
            o.jsx)(r7.Z, {
                overlayStyles: al({
                    isPortrait: h,
                    isMobile: (0,
                    c.tq)()
                }),
                modalStyles: ad,
                children: (0,
                o.jsxs)(au, {
                    isPortrait: h,
                    toggle: t,
                    children: [(0,
                    o.jsx)("img", {
                        className: "device",
                        src: (0,
                        _.jW)(h ? at : ae),
                        alt: ""
                    }), (0,
                    o.jsx)(ap, {
                        isPortrait: h,
                        children: (0,
                        o.jsxs)(ag, {
                            children: [(0,
                            o.jsx)(W.QV, {
                                children: i("signingToCloudService")
                            }), (0,
                            o.jsxs)(av, {
                                children: [(0,
                                o.jsx)("img", {
                                    src: (0,
                                    _.jW)(ai),
                                    width: 18,
                                    height: 18,
                                    alt: ""
                                }), (0,
                                o.jsx)(ax, {
                                    children: i("securePlatform")
                                })]
                            })]
                        })
                    }), (0,
                    o.jsxs)(ap, {
                        isBottom: !0,
                        isPortrait: h,
                        children: [!h && (0,
                        o.jsx)(ah, {
                            src: (0,
                            _.jW)(r8),
                            alt: ""
                        }), (0,
                        o.jsxs)(af, {
                            children: [(0,
                            o.jsxs)(am, {
                                children: [(0,
                                o.jsx)(aw, {
                                    isPortrait: h,
                                    children: i("cloudDevice")
                                }), (0,
                                o.jsx)(W.QV, {
                                    children: "Galaxy S20 Plus"
                                })]
                            }), (0,
                            o.jsxs)(am, {
                                children: [(0,
                                o.jsx)(aw, {
                                    isPortrait: h,
                                    children: i("cloudDeviceLocation")
                                }), (0,
                                o.jsx)(W.QV, {
                                    children: s
                                })]
                            })]
                        })]
                    }), (0,
                    o.jsxs)(ay, {
                        toggle: n,
                        isPortrait: h,
                        children: [(0,
                        o.jsx)(B.Z, {
                            toggle: n,
                            exitingDelay: .6,
                            children: (0,
                            o.jsx)(aa, {
                                diameter: 14,
                                border: 1,
                                duration: 5
                            })
                        }), (0,
                        o.jsx)(eL.Z, {
                            style: {
                                padding: "10px"
                            },
                            name: "cross-thin",
                            size: 11,
                            onClick: () => {
                                u({
                                    type: P.Z.UPDATE_PLAY_STATE,
                                    payload: {
                                        androidActivityName: ""
                                    }
                                })
                            }
                        })]
                    })]
                })
            })
        }
          , aA = i(33945)
          , aj = i(48986)
          , aC = e => {
            let {prompt: t=!1} = e
              , {t: i} = (0,
            K.$)()
              , n = (0,
            a.v9)(e => e.play.error)
              , l = (0,
            a.v9)(e => e.play.errorDescription)
              , d = (0,
            a.v9)(e => e.play.inactivityModal)
              , s = (0,
            a.v9)(e => e.play.sessionMigrated)
              , p = (0,
            a.v9)(e => e.play.sessionComplete)
              , h = (0,
            a.v9)(e => e.play.showDisconnectScreen);
            return (0,
            r.useEffect)( () => {
                (0,
                u.L9)("Disconnected", {
                    error: "failed",
                    errorValue: n,
                    errorDescription: l,
                    inactivityModal: d,
                    isProxy: (0,
                    c.T2)(),
                    migrated: s,
                    sessionComplete: p,
                    showDisconnectScreen: h,
                    androidState: rE.Z
                }),
                t || setTimeout( () => {
                    window.location.reload()
                }
                , 3e3)
            }
            , []),
            t ? (0,
            o.jsx)(nh, {
                type: eh.whh.DISCONNECTED
            }) : (0,
            o.jsx)(nC, {
                children: (0,
                o.jsx)(nE, {
                    style: {
                        color: "#000"
                    },
                    children: i("reconnecting")
                })
            })
        }
        ;
        let aE = g.ZP.div.withConfig({
            componentId: "sc-fe59d019-0"
        })(["display:flex;position:relative;flex:1;justify-content:center;align-items:center;&.bordered{border:", ";border-bottom:0;}", " touch-action:none;width:100%;height:100%;.--fullscreen &{max-height:100vh;padding:16px 0px;}", ";&.portraitApp.mobileMode{&,.--fullscreen &{max-height:100vmax;}}"], e => {
            let {theme: t} = e;
            return "1px solid ".concat(t.colors.white10)
        }
        , e => {
            let {isLandscape: t} = e;
            return t && (0,
            g.iv)(["max-height:100vh;@media only screen and (orientation:landscape) and (max-height:575.98px){max-height:100vw !important;}"])
        }
        , e => {
            let {isMobile: t} = e;
            return t && (0,
            g.iv)(["max-height:100vh"])
        }
        )
          , aS = g.ZP.video.withConfig({
            componentId: "sc-fe59d019-1"
        })(["background:#000;position:absolute;transform:translate(-50%,-50%);&.inverted{transform-origin:top left;transform:scaleY(-1) translate(-50%,-50%);}&.landscape{&-1{transform-origin:top left;transform:rotate(-90deg) translate(-50%,-50%);}&-3{transform-origin:top left;transform:rotate(-270deg) translate(-50%,-50%);}}&.isRecording{top:calc(50% - 36px) !important;}.--adBlocked &{top:calc(50% + 7.10vw) !important;transform:translate(calc(-50% + 3.55vw),-50%);&.inverted{transform-origin:top left;transform:scaleY(-1) translate(calc(-50% + 3.55vw),-50%);}&.landscape{&-1{transform-origin:top left;transform:rotate(-90deg) translate(calc(-50% + 3.55vw),-50%);}&-3{transform-origin:top left;transform:rotate(-270deg) translate(calc(-50% + 3.55vw),-50%);}}}@media screen and (max-width:600px){background:", ";position:absolute;overflow:hidden;object-fit:fill;}"], e => {
            var t;
            let {theme: i} = e;
            return null === (t = i.colors) || void 0 === t ? void 0 : t.transparent
        }
        )
          , aT = g.ZP.div.withConfig({
            componentId: "sc-fe59d019-2"
        })(["position:absolute;left:20px;top:20px;z-index:5;transition:all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;.back-btn{", ";}p{margin-bottom:0;padding:0;}", ""], e => {
            let {isMobile: t} = e;
            return !t && "gap: 10px"
        }
        , e => {
            let {isMobile: t} = e;
            return t && (0,
            g.iv)(["left:16px;top:16px;"])
        }
        )
          , aI = tB()( () => Promise.all([i.e(6716), i.e(7078)]).then(i.bind(i, 7078)), {
            loadableGenerated: {
                webpack: () => [7078]
            }
        })
          , ak = tB()( () => i.e(2891).then(i.bind(i, 22891)), {
            loadableGenerated: {
                webpack: () => [22891]
            }
        })
          , aR = tB()( () => Promise.resolve().then(i.bind(i, 20127)), {
            loadableGenerated: {
                webpack: () => [20127]
            }
        })
          , aL = tB()( () => Promise.resolve().then(i.bind(i, 22920)).then(e => e.ToastContainer), {
            loadableGenerated: {
                webpack: () => [null]
            }
        });
        function aP(e) {
            e.preventDefault()
        }
        let aD = e => {
            let t = s.default.pollingRate;
            n = eZ.h9.mouseMove(t),
            document.addEventListener("keydown", eZ.nv.keyDownEvent),
            document.addEventListener("keyup", eZ.nv.keyUpEvent),
            e && (null == e || e.addEventListener(eh.I6G, eZ.h9.mouseDown),
            null == e || e.addEventListener(eh.Vyd, eZ.h9.mouseUp),
            (0,
            c.nI)() ? null == e || e.addEventListener("click", F.A4, {
                once: !0
            }) : null == e || e.addEventListener("pointerup", F.A4, {
                once: !0
            }),
            null == e || e.addEventListener("pointerleave", eZ.h9.mouseCancel),
            null == e || e.addEventListener("pointermove", n),
            null == e || e.addEventListener("wheel", eZ.h9.mouseWheel),
            window.addEventListener("wheel", eZ.h9.mouseWheelNative, !1),
            null == e || e.addEventListener("touchstart", aP, {
                passive: !1
            }),
            (0,
            c.Tt)() && (null == e || e.addEventListener("click", aP)))
        }
          , aM = e => {
            document.removeEventListener("keydown", eZ.nv.keyDownEvent),
            document.removeEventListener("keyup", eZ.nv.keyUpEvent),
            window.removeEventListener("orientationchange", w.Ul),
            window.removeEventListener("wheel", eZ.h9.mouseWheelNative, !1),
            e && (null == e || e.removeEventListener(eh.I6G, eZ.h9.mouseDown),
            null == e || e.removeEventListener(eh.Vyd, eZ.h9.mouseUp),
            (0,
            c.nI)() ? null == e || e.removeEventListener("click", F.A4) : null == e || e.removeEventListener("pointerup", F.A4),
            null == e || e.removeEventListener("pointerleave", eZ.h9.mouseCancel),
            null == e || e.removeEventListener("pointermove", n),
            null == e || e.removeEventListener("wheel", eZ.h9.mouseWheel),
            null == e || e.removeEventListener("touchstart", aP),
            (0,
            c.Tt)() && (null == e || e.removeEventListener("click", aP)))
        }
        ;
        var aO = e => {
            var t, i, n, l, d, h, g, v, x, f, m, y, b, A, j, C, E;
            let {overlayElement: S} = e
              , T = (0,
            r.useRef)(null)
              , I = (0,
            r.useRef)(null)
              , k = (0,
            a.I0)()
              , {t: L} = (0,
            K.$)()
              , O = (0,
            a.v9)(e => e.play.isFullscreen)
              , Z = (0,
            a.v9)(e => e.play.isImeEnabled)
              , N = (0,
            a.v9)(e => e.play.robloxToast)
              , W = (0,
            a.v9)(e => e.play.androidActivityName)
              , _ = (0,
            a.v9)(e => e.support.showSupport)
              , F = (0,
            a.v9)(e => e.play.sessionMigrated)
              , Y = (0,
            a.v9)(e => e.play.duplicateTab)
              , X = (0,
            a.v9)(e => e.play.sessionComplete)
              , H = (0,
            a.v9)(e => e.play.endingTryNow)
              , z = (0,
            a.v9)(e => e.play.inactiveTimeout)
              , U = (0,
            a.v9)(e => e.play.peerConnectionState)
              , G = (0,
            a.v9)(e => e.play.showAboutUs);
            (0,
            a.v9)(e => e.play.showAllGamesOverlay);
            let V = (0,
            a.v9)(e => e.play.showExploreGamesOverlay)
              , q = (0,
            a.v9)(e => e.play.permissionType)
              , J = (0,
            a.v9)(e => e.play.orientationValue)
              , Q = (0,
            a.v9)(e => e.auth.guestFlow)
              , $ = (0,
            a.v9)(e => e.play.consoleFooterRef)
              , ee = (0,
            a.v9)(e => e.play.consoleHeaderRef)
              , et = (0,
            a.v9)(e => e.play.showDisconnectScreen)
              , ei = (0,
            a.v9)(e => e.appPreferences.volume)
              , en = (0,
            a.v9)(e => e.play.muted)
              , eo = (0,
            a.v9)(e => e.play.webrtcFailed)
              , er = (0,
            a.v9)(e => e.ads.showInGameAds)
              , ea = (0,
            a.v9)(e => e.ads.inGameAd)
              , el = (0,
            a.v9)(e => e.ads.midRollAds)
              , ed = (0,
            a.v9)(e => e.ads.midRollAdsMobile)
              , es = (0,
            a.v9)(e => e.ads.midRollAdsFullScreen)
              , ec = (0,
            a.v9)(e => e.ads.imaError)
              , eu = (0,
            a.v9)(e => e.ads.adBlocker)
              , ep = (0,
            a.v9)(e => e.play.inactivityModal)
              , eg = (0,
            a.v9)(e => e.play.nativeMouseEnabled)
              , ev = (0,
            a.v9)(e => e.appPreferences.legacyControls)
              , ex = (0,
            a.v9)(e => e.play.showBackbtn)
              , ef = (0,
            a.v9)(e => e.play.gameDisplayed)
              , em = (0,
            a.v9)(e => e.ads.adsEnded)
              , ey = (0,
            a.v9)(e => e.play.isAndroidConnected)
              , eb = nZ()
              , eA = s.default.features.shiftLock
              , ej = (0,
            r.useRef)(null)
              , eC = (0,
            a.v9)(e => e.play.mouseLockActive)
              , eE = (0,
            a.v9)(e => e.play.showMouseLockOnboarding)
              , [eS,eT] = (0,
            r.useState)(!1)
              , [eI,eR] = (0,
            r.useState)(!1)
              , [eL,eD] = (0,
            r.useState)(!1)
              , eM = (0,
            a.v9)(e => e.play.orientation)
              , eO = (0,
            a.v9)(e => e.play.showRecordingModalBeforeExit)
              , eK = (0,
            a.v9)(e => e.ads.disableAllAds)
              , eZ = (0,
            a.v9)(e => e.ads.displayAdLoaded)
              , eB = (0,
            a.v9)(e => e.ads.mobileExperiment)
              , eW = (0,
            a.v9)(e => e.play.displayAdRef)
              , e_ = (0,
            a.v9)(e => e.play.showCopyPastePrompt.type)
              , eF = (0,
            a.v9)(e => e.play.showBloxdErrorScreen)
              , eY = (0,
            a.v9)(e => e.play.showGoogleAccountRequiredPopup)
              , eX = (0,
            a.v9)(e => e.play.isNowGGURL)
              , eH = (0,
            a.v9)(e => e.play.envDetected)
              , ez = (0,
            a.v9)(e => e.play.isEmbeddedFrame)
              , eU = (0,
            a.v9)(e => e.ads.rewardedPremiumTimeInSec)
              , eG = (0,
            a.v9)(e => e.play.nowPremiumSubscriptionActive)
              , eV = (0,
            a.v9)(e => e.play.error)
              , eq = null === s.default || void 0 === s.default ? void 0 : s.default.isAppPage
              , eJ = null === s.default || void 0 === s.default ? void 0 : s.default.isMultiPanelAdsEnabled
              , {appInfo: eQ} = s.default || {}
              , {playFeFeatures: e$} = eQ || {};
            !(0,
            c.tq)() || (0,
            c.Em)() || (0,
            c.zc)() ? null === (l = null === (n = e$.ads) || void 0 === n ? void 0 : n.desktop) || void 0 === l || l.enableDisplayAds : null === (i = null === (t = e$.ads) || void 0 === t ? void 0 : t.mobile) || void 0 === i || i.enableDisplayAds;
            let e0 = null === (d = e$.tryAndDownload) || void 0 === d ? void 0 : d.isEnabled
              , {uiConfig: e1, enablePokelaboUi: e2} = e$ || {}
              , {enableWelcomeToast: e5, enableAppRestartButton: e4} = e1 || {}
              , e9 = eq || (null == e1 ? void 0 : e1.enableHeader)
              , e3 = (null == e1 ? void 0 : e1.enableIframeHeader) && ez
              , e6 = eq || (null === (h = e1.footer) || void 0 === h ? void 0 : h.enabled)
              , e7 = null === (g = null == e1 ? void 0 : e1.sessionModal) || void 0 === g ? void 0 : g.enableDisconnectScreen;
            return (0,
            r.useEffect)( () => ((0,
            u.L9)("AndroidPlayerLoaded"),
            (0,
            s.rN)(),
            document.addEventListener("visibilitychange", eN.Co),
            window.addEventListener("blur", nB.u1),
            window.addEventListener("paste", nN.$b),
            () => {
                (0,
                s.rN)(),
                document.removeEventListener("visibilitychange", eN.Co),
                window.removeEventListener("blur", nB.u1),
                window.removeEventListener("paste", nN.$b)
            }
            ), []),
            (0,
            r.useEffect)( () => {
                eC ? setTimeout( () => {
                    eR(!1),
                    eT(!0)
                }
                , eE ? 4e3 : 1e3) : eT(!1)
            }
            , [eC]),
            (0,
            r.useEffect)( () => {
                eW && eW.current && eZ && (eW.current.style.marginLeft = "0",
                eW.current.style.marginRight = "0",
                eW.current.style.marginTop = "0",
                eW.current.style.marginBottom = "0")
            }
            , [eW, eZ]),
            (0,
            r.useEffect)( () => {
                eE && (R.default.dispatch({
                    type: P.Z.UPDATE_MOUSE_LOCK,
                    payload: {
                        showMouseLockOnboarding: !1
                    }
                }),
                setTimeout( () => {
                    var e;
                    let t = null === (e = null == T ? void 0 : T.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                    null != t && (null == ej ? void 0 : ej.current) && (ej.current.style.visibility = "visible",
                    ej.current.style.width = "".concat(t.width, "px"),
                    ej.current.style.height = "".concat(t.height, "px"),
                    ej.current.style.top = "".concat(t.top, "px"),
                    ej.current.style.left = "".concat(t.left, "px"))
                }
                , (0,
                c.G6)() ? 1e3 : 0),
                setTimeout( () => {
                    eC && eR(!0)
                }
                , 1e3),
                setTimeout( () => {
                    eR(!1),
                    (null == ej ? void 0 : ej.current) && (ej.current.style.visibility = "collapse",
                    ej.current.style.width = "100%",
                    ej.current.style.height = "100%",
                    ej.current.style.top = "0px",
                    ej.current.style.left = "0px")
                }
                , 3e3))
            }
            , [eE]),
            (0,
            r.useEffect)( () => {
                ef && (0,
                ek.GO)(!0)
            }
            , [ef]),
            (0,
            r.useEffect)( () => {
                (0,
                u.L9)("VideoElementLoaded");
                let e = null == T ? void 0 : T.current;
                if (Y)
                    (0,
                    u.L9)("DuplicateTab2");
                else if (window.addEventListener("orientationchange", w.Ul),
                k({
                    type: P.Z.START_CONNECTION,
                    payload: {
                        uaId: (0,
                        c.Fz)(eh.nPo),
                        uaSessionId: (0,
                        c.io)(eh.K3T),
                        videoRef: T,
                        videoContainerRef: I,
                        orientation: (0,
                        s.DJ)() ? 90 === window.orientation ? p.cj.landscape : p.cj.portrait : eQ.initialOrientation
                    }
                }),
                !eF && !(0,
                c.s$)()) {
                    var t, i, n, o;
                    (0,
                    eP.E1)(T),
                    t = void 0,
                    i = void 0,
                    n = void 0,
                    o = function*() {
                        let e = yield D.ZP.getAppPlayFeatures({
                            appId: eQ.appId
                        }, {});
                        e.status === p.YR.Success && eD(!!(null == e ? void 0 : e.enableLiveChat))
                    }
                    ,
                    new (n || (n = Promise))(function(e, r) {
                        function a(e) {
                            try {
                                d(o.next(e))
                            } catch (e) {
                                r(e)
                            }
                        }
                        function l(e) {
                            try {
                                d(o.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        }
                        function d(t) {
                            var i;
                            t.done ? e(t.value) : ((i = t.value)instanceof n ? i : new n(function(e) {
                                e(i)
                            }
                            )).then(a, l)
                        }
                        d((o = o.apply(t, i || [])).next())
                    }
                    ),
                    aD(e)
                }
                return () => {
                    aM(e)
                }
            }
            , [T]),
            (0,
            r.useEffect)( () => {
                (0,
                w.Ul)()
            }
            , [eb, em, ey, eG]),
            (0,
            r.useEffect)( () => {
                (0,
                w.sZ)(),
                (0,
                w.EN)()
            }
            , [em, ey, J, eM]),
            (0,
            r.useEffect)( () => {
                eC ? setTimeout( () => {
                    eR(!1),
                    eT(!0)
                }
                , eE ? 5e3 : 2e3) : eT(!1)
            }
            , [eC]),
            (0,
            r.useEffect)( () => {
                T.current && (T.current.volume = ei || .5,
                T.current.muted = en)
            }
            , [ei, en]),
            (0,
            r.useEffect)( () => {
                R.default.dispatch({
                    type: P.Z.SET_SENSITIVITY_POPUP,
                    payload: {
                        isSensitivityPopupOpen: !1
                    }
                })
            }
            , [_]),
            (0,
            r.useEffect)( () => {
                let e;
                let t = I.current
                  , i = nK()(w.Ul, 250);
                return t && eq && (e = new ResizeObserver( () => {
                    i()
                }
                )).observe(t),
                () => {
                    t && eq && e.unobserve(t)
                }
            }
            , []),
            (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(nS, {}), eo && (0,
                o.jsx)(aC, {
                    prompt: !!e7
                }), (ey || eF) && em && ((0,
                c.tq)() || !eq) && (!eJ || (0,
                c.tq)()) && (e3 || e9) ? (0,
                o.jsx)(rH.Z, {
                    isAppPage: !!eq
                }) : null, (0,
                o.jsx)(aI, {}), Z ? (0,
                o.jsx)(nl, {}) : null, ey && N && (0,
                o.jsx)(nD, {
                    videoElm: T
                }), !(0,
                c.tq)() && eA && (0,
                o.jsx)(n6, {}), e4 && !(0,
                c.tq)() && !(0,
                s.DJ)() && ey && !e3 && !e9 && (0,
                o.jsx)(aj.Z, {}), (0,
                o.jsxs)(aE, {
                    ref: I,
                    isLandscape: !!(0,
                    c.tq)() && window.innerHeight < window.innerWidth && (0 === window.orientation || 90 === window.orientation || -90 === window.orientation),
                    isMobile: (0,
                    c.tq)(),
                    className: "".concat(eM === p.cj.portrait ? "portraitApp" : "", " ").concat((0,
                    c.tq)() ? "mobileMode" : "", "\n            ").concat(( () => {
                        var e, t, i, n;
                        let o = 0
                          , r = 0;
                        try {
                            o = (null === (t = null === (e = null == I ? void 0 : I.current) || void 0 === e ? void 0 : e.getBoundingClientRect()) || void 0 === t ? void 0 : t.bottom) || 0,
                            r = (null === (n = null === (i = null == $ ? void 0 : $.current) || void 0 === i ? void 0 : i.getBoundingClientRect()) || void 0 === n ? void 0 : n.bottom) || 0
                        } catch (e) {
                            o = 0,
                            r = 0
                        }
                        return !(0,
                        c.tq)() && (0,
                        c.MK)() && !eV && o < r + 10
                    }
                    )() ? "bordered" : ""),
                    children: [(Y || F || z || X && !Q && !H) && !eO && !et ? (0,
                    o.jsx)(nh, {
                        type: F ? eh.whh.MIGRATED : Y ? eh.whh.DUPLICATE : z ? eh.whh.INACTIVE : eh.whh.COMPLETE
                    }) : null, (ey || eF) && !ec && !eu && !eK && (0,
                    o.jsxs)(o.Fragment, {
                        children: [!(eU > 0) && er && !eG && (!eq || (0,
                        c.Em)() || (0,
                        c.zc)()) && !eJ && (0,
                        o.jsx)(tJ.Z, {}), eJ && em && !(eU > 0) && !eG && (0,
                        o.jsx)(ic, {}), eH && !eX && el && (!eq || !(0,
                        c.MK)()) && (0,
                        o.jsx)(iS, {}), es && (0,
                        o.jsx)(iZ, {}), ed && (0,
                        o.jsx)(iX, {}), eB && em && (ey || eF) && !(eU > 0) && !eJ && !eG && (0,
                        o.jsx)(rV, {})]
                    }), (ey || eF) && (0,
                    o.jsx)(ni, {}), _ && (0,
                    o.jsx)(nb.default, {}), G && (0,
                    o.jsx)(nd.Z, {
                        closeModal: () => {
                            k({
                                type: P.Z.MODAL_STATUS,
                                payload: {
                                    showAboutUs: !1
                                }
                            })
                        }
                    }), !s.default.isAppPage && V && (0,
                    o.jsx)(rW.default, {}), ep && em && (ey || eF) && (0,
                    o.jsx)(ny, {
                        logo: "inactivity",
                        heading: "areYouThere",
                        text: "idleScreentext",
                        buttonText: "iAmStillHere",
                        infoText: "stoppingGame"
                    }), "connected" === U && q && (0,
                    o.jsx)(nV, {}), ex && ey && ef && em && (0,
                    o.jsx)(aT, {
                        isMobile: (0,
                        c.tq)(),
                        children: (0,
                        o.jsx)(ew.z, {
                            variant: "primary",
                            onClick: () => (0,
                            eN.vT)(),
                            className: "back-btn",
                            text: L((0,
                            c.tq)() ? "back" : "backToGame"),
                            rounded: (0,
                            c.tq)() ? {
                                diameter: "56px"
                            } : null,
                            style: {
                                paddingRight: 7
                            },
                            children: (0,
                            c.tq)() ? (0,
                            o.jsx)(o.Fragment, {
                                children: (0,
                                o.jsx)("span", {
                                    className: "arrow",
                                    children: (0,
                                    o.jsx)("svg", {
                                        width: "8",
                                        height: "13",
                                        viewBox: "0 0 8 13",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0,
                                        o.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M7.20711 0.792893C7.59763 1.18342 7.59763 1.81658 7.20711\n 2.20711L2.91421 6.5L7.20711 10.7929C7.59763 11.1834 7.59763\n 11.8166 7.20711 12.2071C6.81658 12.5976 6.18342 12.5976 5.79289\n 12.2071L0.792893 7.20711C0.402369 6.81658 0.402369 6.18342 0.792893\n 5.79289L5.79289 0.792893C6.18342 0.402369 6.81658 0.402369 7.20711 0.792893Z",
                                            fill: "white"
                                        })
                                    })
                                })
                            }) : "<"
                        })
                    }), !F && !X && !Y && (0,
                    o.jsxs)(o.Fragment, {
                        children: [(0,
                        o.jsx)(on, {}), (0,
                        o.jsx)(nM.Z, {}), e5 && em && ey && !(0,
                        s.yj)() && (0,
                        o.jsx)(n$, {
                            type: "success",
                            onClose: s.Fp,
                            children: (0,
                            M._B)() ? L("guestToast") : "".concat(L("welcome"), ", ").concat((null === (x = null === (v = (0,
                            M.et)()) || void 0 === v ? void 0 : v.name) || void 0 === x ? void 0 : x.split(" ")[0]) || L("player"), "!")
                        }), (0,
                        o.jsx)(B.Z, {
                            toggle: W === eh.cDO,
                            exitingDelay: .3,
                            children: (0,
                            o.jsx)(ab, {
                                toggle: W === eh.cDO
                            })
                        }), (e3 || e9) && !O && (0,
                        c.SR)() && em && ey && s.default.isMultiPanelAdsEnabled && !eG && (0,
                        o.jsx)(aA.Z, {
                            isFullscreen: O,
                            isGamePlayerWidth: !0
                        }), (0,
                        o.jsx)(aS, {
                            id: "js-game-video",
                            onContextMenu: e => e.preventDefault(),
                            style: {
                                cursor: !ev && eg ? "none" : "auto",
                                opacity: "disconnected" === U || "failed" === U ? .5 : ey && em && !eF ? 1 : 0,
                                top: ea === eh.VBy && eG ? eM === p.cj.portrait ? "92px !important" : !O && (null === (E = null == $ ? void 0 : $.current) || void 0 === E ? void 0 : E.clientHeight) ? eM !== p.cj.landscape ? "92px" : "calc(50% - ".concat($.current.clientWidth / 2, ")px") : "50%" : ((0,
                                c.tq)() || (0,
                                c.Em)() || (0,
                                c.zc)()) && e0 && !(0,
                                c.RZ)() ? "calc(50% + ".concat(0, "px)") : !(0,
                                c.tq)() || (0,
                                c.Em)() || (0,
                                c.zc)() || !eB || eG || eU > 0 ? O || eM === p.cj.portrait ? "50%" : ea !== eh.Va_ ? "calc(50% - ".concat((null === (f = null == $ ? void 0 : $.current) || void 0 === f ? void 0 : f.clientHeight) ? .5 * Number(null === (m = null == $ ? void 0 : $.current) || void 0 === m ? void 0 : m.clientHeight) : 0, "px)") : "calc(50% + ".concat((null === (y = null == ee ? void 0 : ee.current) || void 0 === y ? void 0 : y.clientHeight) && eG ? .5 * Number(null === (b = null == ee ? void 0 : ee.current) || void 0 === b ? void 0 : b.clientHeight) : 0, "px)") : "calc(50% + ".concat(eh.Fbl / 2, "px)"),
                                left: ea === eh.VBy ? "calc(50% + 0px)" : O || ea !== eh.Va_ || eM === p.cj.portrait ? "50%" : "calc(50% - ".concat((null === (A = null == $ ? void 0 : $.current) || void 0 === A ? void 0 : A.clientWidth) ? .5 * Number(null === (j = null == $ ? void 0 : $.current) || void 0 === j ? void 0 : j.clientWidth) : 0, "px)")
                            },
                            autoPlay: !0,
                            muted: !0,
                            disableRemotePlayback: !0,
                            playsInline: !0,
                            ref: T
                        }), S, e6 && !O && (0,
                        c.SR)() && em && ey && !eF && (0,
                        o.jsx)(aR, {})]
                    }), !(0,
                    s.DJ)() && !em && eq && (0,
                    o.jsx)(r6, {
                        gameName: s.default.appInfo.appName,
                        gameIcon: null === (C = s.default.appInfo.media) || void 0 === C ? void 0 : C.icon,
                        isMobile: (0,
                        c.tq)(),
                        isDesktop: (0,
                        c.nI)(),
                        isAppPage: eq
                    }), !(0,
                    c.tq)() && (0,
                    o.jsx)(rZ, {
                        className: em && ey && !X ? "" : "hidden"
                    }), (0,
                    o.jsx)(rX, {})]
                }), em && ey && !X && (0,
                o.jsx)(aL, {}), (0,
                c.SR)() && (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)(rN.ed, {
                        ref: ej
                    }), (0,
                    o.jsx)(rN.Co, {
                        style: {
                            display: eS && eC ? "block" : "none"
                        },
                        children: (0,
                        o.jsxs)(rN.ug, {
                            children: [L("press"), " ", (0,
                            o.jsx)("kbd", {
                                children: "Esc"
                            }), " ", L("cursorLockedInfo")]
                        })
                    }), (0,
                    o.jsx)(rN.Co, {
                        style: {
                            display: eI && eC ? "block" : "none"
                        },
                        children: (0,
                        o.jsx)(rN.ug, {
                            children: L("cursorLocked")
                        })
                    })]
                }), eY && em && ey && (0,
                o.jsx)(ak, {}), em && eL && (0,
                s.CO)() && (0,
                o.jsx)(rB, {}), e_ && (0,
                o.jsx)(r2, {})]
            })
        }
          , aK = i(79805)
          , aZ = i(86641)
          , aN = {
            src: "/_next/static/media/micBlock.6173cc2a.svg",
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0
        }
          , aB = {
            src: "/_next/static/media/cameraBlock.1ce4badf.svg",
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0
        }
          , aW = i(18663)
          , a_ = i(34218)
          , aF = () => {
            let {t: e} = (0,
            K.$)()
              , t = (0,
            a.I0)()
              , i = () => {
                t({
                    type: P.Z.MODAL_STATUS,
                    payload: {
                        showMicBlockedModal: !1
                    }
                })
            }
            ;
            return (0,
            o.jsx)(a_.aV, {
                children: (0,
                o.jsxs)(aW.F0, {
                    children: [(0,
                    o.jsx)(eL.Z, {
                        style: Object.assign({
                            marginTop: "auto",
                            marginBottom: "auto",
                            cursor: "pointer"
                        }, !(0,
                        c.tq)() && {
                            position: "absolute",
                            top: "24px",
                            right: "24px",
                            color: iQ.qm.colors.white
                        }),
                        onClick: i,
                        size: 16,
                        name: "cross-thin",
                        id: "ng-info-close"
                    }), (0,
                    o.jsxs)(aW.h8, {
                        children: [(0,
                        o.jsx)("img", {
                            alt: e("recorder"),
                            src: (0,
                            _.jW)(aZ.Z),
                            style: {
                                width: "24px",
                                height: "24px"
                            }
                        }), (0,
                        o.jsx)(W.T3, {
                            style: {
                                marginLeft: "8px",
                                marginBottom: "0px"
                            },
                            children: e("micBlocked.head")
                        })]
                    }), (0,
                    o.jsxs)(aW.mJ, {
                        children: [(0,
                        o.jsx)(aW.j8, {
                            children: e("micBlocked.info1")
                        }), (0,
                        o.jsx)(aW.eE, {
                            src: (0,
                            _.jW)(aN)
                        }), (0,
                        o.jsx)(aW.j8, {
                            children: e("micBlocked.info2")
                        }), (0,
                        o.jsx)(aW.eE, {
                            src: (0,
                            _.jW)(aB)
                        }), (0,
                        o.jsx)(aW.j8, {
                            children: e("micBlocked.info3")
                        })]
                    }), (0,
                    o.jsxs)(a_.pI, {
                        children: [(0,
                        o.jsx)(ew.z, {
                            variant: "secondary",
                            style: {
                                marginRight: "8px",
                                width: "50%"
                            },
                            onClick: () => {
                                null == window || window.open(eh.C_k, "_blank", "noopener noreferrer"),
                                t({
                                    type: P.Z.MODAL_STATUS,
                                    payload: {
                                        showMicBlockedModal: !1
                                    }
                                })
                            }
                            ,
                            text: e("learnMore")
                        }), (0,
                        o.jsx)(ew.z, {
                            variant: "primary",
                            style: {
                                width: "50%"
                            },
                            onClick: i,
                            text: e("close")
                        })]
                    })]
                })
            })
        }
          , aY = i(68957)
          , aX = i(5729);
        let aH = g.ZP.div.withConfig({
            componentId: "sc-a96395bd-0"
        })(["color:", ";text-align:center;p{margin-bottom:16px;}div:last-child{margin-top:24px;}button{padding:9.5px;}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , az = (0,
        g.iv)(["background:transparent;"])
          , aU = (0,
        g.iv)(["width:440px;&> div{padding:24px;margin:0;}"])
          , aG = (0,
        g.ZP)(W.Bb).withConfig({
            componentId: "sc-a96395bd-1"
        })(["margin:16px auto 24px;text-align:center;max-width:270px;font-size:20px;line-height:30px;"])
          , aV = g.ZP.div.withConfig({
            componentId: "sc-a96395bd-2"
        })(["z-index:100;img{width:135px;height:36px;margin:20px 40px !important;}"]);
        var aq = i(90461)
          , aJ = () => {
            let {t: e} = (0,
            K.$)();
            return (0,
            r.useEffect)( () => {
                (0,
                u.L9)(eh.JPK, {
                    loginPageContext: eh.$65.invitee
                })
            }
            , []),
            (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(aV, {
                    children: (0,
                    o.jsx)(e1.Z, {
                        hasTagline: !1,
                        themeType: "light"
                    })
                }), (0,
                o.jsx)(J.Z, {
                    modalStyles: aU,
                    overlayStyles: az,
                    children: (0,
                    o.jsxs)(aH, {
                        children: [(0,
                        o.jsx)(aq.Z, {
                            height: 144,
                            width: 144,
                            applyAnimation: !0
                        }), (0,
                        o.jsx)(aG, {
                            children: e("invitationToPlay")
                        }), (0,
                        o.jsx)(W.lU, {
                            children: e("claimPlayTime")
                        }), (0,
                        o.jsx)(aX.Z, {
                            pageContext: eh.$65.invitee
                        }), (0,
                        o.jsx)(aY.Z, {})]
                    })
                })]
            })
        }
          , aQ = i(94778)
          , a$ = i(99317)
          , a0 = i(32573)
          , a1 = i(55822)
          , a2 = {
            src: "/_next/static/media/cloudy.ef2ef64d.svg",
            height: 144,
            width: 144,
            blurWidth: 0,
            blurHeight: 0
        };
        let a5 = g.ZP.section.withConfig({
            componentId: "sc-553d9695-0"
        })(["display:flex;flex-direction:column;align-items:center;p{margin-top:8px;color:", ";text-align:center;}h3{margin-top:20px;text-align:center;color:", ";}button{margin-top:16px;padding:12px 0;width:100%;}@media (max-height:400px){img{width:72px;height:72px;}}"], e => {
            let {theme: t} = e;
            return t.colors.white60
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , a4 = (0,
        g.iv)(["width:420px;&> div{padding:32px;margin:0;}"]);
        var a9 = i(58764);
        let a3 = {
            FailureForbidden: {
                heading: "errorFailureForbidden.heading",
                message: "errorFailureForbidden.subHeading",
                cta: "takeMeBack"
            }
        };
        var a6 = () => {
            let {t: e} = (0,
            K.$)()
              , t = (0,
            a.v9)(e => e.play.videoModalError)
              , i = (0,
            a.v9)(e => e.play.errorDescription)
              , {heading: n, message: l, cta: d} = a3[t]
              , s = (0,
            a.I0)();
            return (0,
            r.useEffect)( () => {
                (0,
                u.L9)("ErrorScreen", {
                    error: t,
                    errorDescription: i,
                    url: window.location.href.split("?")[0]
                })
            }
            , []),
            (0,
            o.jsx)(r7.Z, {
                modalStyles: a4,
                toggle: !0,
                children: (0,
                o.jsxs)(a5, {
                    children: [(0,
                    o.jsx)("img", {
                        src: (0,
                        _.jW)(a2),
                        alt: "",
                        width: 144,
                        height: 144
                    }), (0,
                    o.jsx)(W.Bb, {
                        children: e(n)
                    }), (0,
                    o.jsx)(W.TZ, {
                        children: e(l)
                    }), (0,
                    o.jsx)(a9.zx, {
                        onClick: () => {
                            s({
                                type: P.Z.SET_ERROR,
                                payload: {
                                    videoModalError: ""
                                }
                            })
                        }
                        ,
                        children: e(d)
                    })]
                })
            })
        }
        ;
        g.ZP.div.withConfig({
            componentId: "sc-af48a0b4-0"
        })(["display:flex;border-radius:10px;background:linear-gradient(270deg,rgba(255,255,255,0.10) 0%,rgba(255,255,255,0) 100%);width:100%;"]);
        let a7 = g.ZP.img.withConfig({
            componentId: "sc-af48a0b4-1"
        })(["height:32px;width:fit-content;"]);
        g.ZP.div.withConfig({
            componentId: "sc-af48a0b4-2"
        })(["display:flex;flex-direction:column;gap:8px;padding:12px 12px 12px 0;"]),
        g.ZP.div.withConfig({
            componentId: "sc-af48a0b4-3"
        })(["width:100px;img{height:140px;margin-left:-22px;}"]),
        (0,
        g.ZP)(n7.Yd).withConfig({
            componentId: "sc-af48a0b4-4"
        })(["font-weight:600;text-wrap:nowrap;align-self:end;padding:7px 16px;margin-top:6px;border-radius:6px;box-shadow:none;&:disabled{backdrop-filter:none;box-shadow:none;color:", ";background:", ";&:hover{background:", ";color:", ";}}"], e => {
            let {theme: t} = e;
            return t.colors.white40
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white10
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white10
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white40
        }
        );
        var a8 = {
            src: "/_next/static/media/jackpot_title.04d0cfb0.svg",
            height: 34,
            width: 166,
            blurWidth: 0,
            blurHeight: 0
        };
        let le = g.ZP.div.withConfig({
            componentId: "sc-1fb37643-0"
        })(["display:flex;flex-direction:column;gap:8px;margin-top:24px;"]);
        var lt = () => {
            let {t: e} = (0,
            K.$)()
              , t = (0,
            a.I0)()
              , [i,n] = (0,
            r.useState)(!1)
              , [l,d] = (0,
            r.useState)("")
              , c = () => {
                t({
                    type: a$.Z.JACKPOT_FLOW,
                    payload: {
                        showFreeSpinVerification: !1
                    }
                }),
                sessionStorage.removeItem("enableFreeSpin")
            }
              , u = e => {
                d(e),
                e || n(!1)
            }
            ;
            return (0,
            o.jsxs)(J.Z, {
                style: {
                    width: "350px",
                    padding: "24px"
                },
                children: [(0,
                o.jsx)(a7, {
                    src: (0,
                    _.jW)(a8)
                }), (0,
                o.jsx)(tS.A3, {
                    className: "cross-icon",
                    onClick: c,
                    style: {
                        position: "absolute",
                        right: "16px",
                        top: "16px",
                        color: "white"
                    },
                    children: (0,
                    o.jsx)(eL.Z, {
                        name: "cross-thin",
                        size: 16,
                        id: "login-close-icon"
                    })
                }), (0,
                o.jsxs)(le, {
                    children: [(0,
                    o.jsx)(W.lU, {
                        style: {
                            color: iQ.qm.colors.white70
                        },
                        children: e("enterEmailForSpin", {
                            nowbux: s.default.appInfo.rwdMinRedemptionCredits
                        })
                    }), (0,
                    o.jsx)(oS.II, {
                        title: e("emailId"),
                        onUpdate: e => u(e),
                        error: i,
                        placeholder: e("enterHere")
                    }), i && (0,
                    o.jsx)(W.IS, {
                        style: {
                            color: "#FF3A30",
                            marginTop: "-14px",
                            marginBottom: "16px"
                        },
                        children: e("emailMismatchError")
                    }), (0,
                    o.jsx)(ew.z, {
                        variant: "primary",
                        text: e("verifyAndGetSpin"),
                        onClick: () => {
                            let e = (0,
                            M.et)();
                            e && (e.email !== l ? n(!0) : (c(),
                            sessionStorage.setItem("showFreeSpinBtn", "true"),
                            t({
                                type: a$.Z.NOWBUX_REWARD_DETAILS,
                                payload: {
                                    nowbuxPopupOpen: !0
                                }
                            }),
                            t({
                                type: a$.Z.JACKPOT_FLOW,
                                payload: {
                                    showJackpotFlow: !0
                                }
                            })))
                        }
                    })]
                })]
            })
        }
          , li = i(61959)
          , ln = i(94364)
          , lo = () => {
            var e, t, i;
            let {t: n} = (0,
            K.$)()
              , a = (0,
            r.useContext)(k.x)
              , l = null === (t = null === (e = null == a ? void 0 : a.playFeFeatures) || void 0 === e ? void 0 : e.uiConfig) || void 0 === t ? void 0 : t.sessionModal;
            return (0,
            o.jsx)(ef, {
                children: (0,
                o.jsxs)("div", {
                    className: "mainContainer",
                    children: [(null == l ? void 0 : l.enableGameTile) && (0,
                    o.jsx)("img", {
                        alt: "".concat(n("gameTile")),
                        src: null === (i = null == a ? void 0 : a.media) || void 0 === i ? void 0 : i.tile,
                        width: 230,
                        height: 310
                    }), (0,
                    o.jsxs)("div", {
                        className: "content",
                        children: [(0,
                        o.jsx)(W.T3, {
                            className: (null == l ? void 0 : l.enableGameTile) ? "" : "textCenter",
                            children: n("serverBusy")
                        }), (0,
                        o.jsx)(W.xv, {
                            className: (null == l ? void 0 : l.enableGameTile) ? "" : "textCenter",
                            children: n("serverBusyMsg")
                        }), (null == l ? void 0 : l.enableRestartButton) && (0,
                        o.jsx)(ew.z, {
                            variant: "primary",
                            size: "small",
                            text: n("restart"),
                            onClick: () => (0,
                            np.iI)("SpotInterruption")
                        })]
                    })]
                })
            })
        }
        ;
        let lr = g.ZP.div.withConfig({
            componentId: "sc-c6b535e4-0"
        })(["background:var( --background-blur-logo-dark-bg,radial-gradient( 32.85% 62.63% at 50% 30.49%,rgba(81,165,201,0.2) 0%,rgba(51,80,111,0) 100% ),radial-gradient( 28.93% 32.16% at 64.37% 56.79%,rgba(179,214,97,0.2) 0%,rgba(179,214,97,0) 100% ),radial-gradient( 29.7% 41.69% at 37.22% 60.32%,rgba(255,66,165,0.2) 0%,rgba(255,66,165,0) 100% ),#0b0223 );z-index:2;width:100%;height:100%;position:absolute;top:0;left:0;color:", ";padding:0 0 32px 0;display:flex;flex-direction:column;justify-content:center;align-items:center;.logo{width:128px;height:128px;margin:0 0 4.43vh 0;border-radius:", ";.isMobile.landScape &{width:23vmin;height:23vmin;margin:0 0 4.5vmin 0;}.isMobile.portrait &{width:12vmax;height:12vmax;margin:0 0 4vmax 0;}}.heading{.isMobile.landScape &{margin:0px 0px 1vmax 0px;}}.subHeading{max-width:656px;color:", ";.isMobile.landScape &{margin:0px 0px 4.8vmin 0px;max-width:600px;}.isMobile.portrait &{margin:0px 0px 5vmax 0px;max-width:350px;}.isMobile &{font-size:16px;}}.baseBtn{font-size:14px;}@media screen and (orientation:landscape){width:100%;height:100%;.isMobile.landScape &{height:calc(100vh + 65px);}}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.border.radius6
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white60
        }
        )
          , la = g.ZP.div.withConfig({
            componentId: "sc-c6b535e4-1"
        })(["position:absolute;top:0;left:0;width:100%;height:100%;overflow:scroll;"]);
        var ll = i(42170);
        let ld = () => {
            var e;
            let t = (0,
            c.tq)()
              , {t: i} = (0,
            K.$)()
              , n = (0,
            r.useContext)(k.x)
              , l = (0,
            a.v9)(e => e.play.orientation)
              , d = (0,
            r.useMemo)( () => {
                let e = "";
                return t && (e += "isMobile "),
                l === p.cj.landscape && (e += "landScape "),
                l === p.cj.portrait && (e += "portrait "),
                e
            }
            , [l])
              , u = (0,
            r.useMemo)( () => !!t && l === p.cj.portrait, [d])
              , {partnerSessionEndInfo: h} = (null == n ? void 0 : n.playFeFeatures) || {}
              , {sessionEndMessage: g, sessionEndCtaText: v, enable: x} = h || {}
              , {sessionEndCtaUrl: f} = s.default.startSession || {}
              , m = (0,
            e3.Pr)()
              , w = (0,
            c.U1)(m);
            return (0,
            o.jsx)(la, {
                className: "session-end ".concat(d),
                children: (0,
                o.jsxs)(lr, {
                    children: [!x && !w && !(0,
                    c.Ny)() && (0,
                    o.jsx)("img", {
                        className: "logo",
                        alt: "".concat(i("gameTile")),
                        src: null === (e = null == n ? void 0 : n.media) || void 0 === e ? void 0 : e.icon
                    }), (0,
                    o.jsx)(W.do, {
                        className: "heading",
                        center: !0,
                        med: !0,
                        children: i("endScreenHeading")
                    }), (0,
                    o.jsx)(W.T5, {
                        center: !0,
                        className: "subHeading",
                        children: x ? g : i("endScreenSubHeading")
                    }), (0,
                    o.jsx)(ew.z, {
                        className: "baseBtn",
                        variant: "primary",
                        onClick: () => {
                            x ? window.open(f, "_blank") : (0,
                            np.iI)("SessionComplete")
                        }
                        ,
                        children: x ? v : i("restartSession")
                    }), (0,
                    o.jsx)(ll.Z, {
                        breakFooterText: u
                    })]
                })
            })
        }
          , ls = () => {
            switch ((0,
            a.v9)(e => e.play.sessionDisconnectScreenType)) {
            case eh.QRM.MAINTENANCE:
                return (0,
                o.jsx)(tI, {});
            case eh.QRM.BCPU_SPOT_INTERRUPTION:
            case eh.QRM.BGPU_SPOT_INTERRUPTION:
                return (0,
                o.jsx)(lo, {});
            case eh.QRM.TIME_LIMIT:
            case eh.QRM.PROXY_PLAYTIME_EXCEEDED:
                return (0,
                o.jsx)(ld, {});
            default:
                return null
            }
        }
        ;
        var lc = i(71048)
          , lu = {
            src: "/_next/static/media/task-complete-nowbux.95b7f730.png",
            height: 277,
            width: 294,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEVMaXHQkxK21QHnoirtzy388KT++Nv5xzv45k71thv7uTDBlAn530GYwwPwvSPnsC5+1wD85Vq66Ff75nPZvRX611bZ5wruvCb90ILkszu14jNXpADjmBDCiVZDAAAAGHRSTlMA/P35MkqF/Rf9/oFaiY/9w3Z6j/mtsNsFOznJAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQElEQVR4nB3LRxaAIBDA0FCHwYJdLPc/p0+y+LvAX2qs+2EHSGfO9plgFtXtXmB8RaRGCNU5cwUgFjVde33vgQ9NoQIFM2Xd+gAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        }
          , lp = i(24249)
          , lh = e => {
            let {taskName: t, taskRwd: i} = e
              , {t: n} = (0,
            K.$)()
              , l = (0,
            a.I0)();
            return (0,
            r.useEffect)( () => {
                (0,
                u.L9)("NowbuxQuestCompletePromptDisplayed", {
                    task: t
                })
            }
            , []),
            (0,
            o.jsx)(J.Z, {
                modalStyles: lc.il,
                children: (0,
                o.jsxs)(lc.ZP, {
                    children: [(0,
                    o.jsx)(tS.A3, {
                        className: "cross-icon",
                        onClick: () => {
                            l({
                                type: lp.Z.UPDATE_TASK,
                                payload: {
                                    showTaskCompletePopup: {}
                                }
                            })
                        }
                        ,
                        style: {
                            position: "absolute",
                            right: "16px",
                            top: "16px",
                            color: "white"
                        },
                        children: (0,
                        o.jsx)(eL.Z, {
                            name: "cross-thin",
                            size: 16,
                            id: "login-close-icon"
                        })
                    }), (0,
                    o.jsx)(lc.xg, {
                        children: (0,
                        o.jsx)("img", {
                            src: (0,
                            _.jW)(lu),
                            alt: ""
                        })
                    }), (0,
                    o.jsx)(lc.Dx, {
                        children: n("taskCompleted", {
                            task: t
                        })
                    }), (0,
                    o.jsx)(lc.qY, {
                        children: n("taskCompleteMsg", {
                            task: t,
                            reward: i
                        })
                    }), (0,
                    o.jsx)(ew.z, {
                        variant: "primary",
                        size: "large",
                        onClick: () => {
                            l({
                                type: lp.Z.TOGGLE_VIEW,
                                payload: {
                                    showProfileView: !1,
                                    showNowbuxView: !0,
                                    showLeaderboardView: !1,
                                    showTaskCompletePopup: {}
                                }
                            })
                        }
                        ,
                        children: n("viewRewards")
                    })]
                })
            })
        }
        ;
        let lg = ["", "moz", "webkit", "ms"];
        var lv = () => {
            let e = (0,
            a.v9)(e => e.play.isFullscreen)
              , t = (0,
            a.I0)()
              , i = () => {
                !(0,
                c.Tt)() && "visible" === document.visibilityState && e && (t({
                    type: P.Z.SET_FULLSCREEN,
                    payload: {
                        isFullscreen: !1
                    }
                }),
                (0,
                nB.Qg)(document))
            }
              , n = () => {
                R.default.getState().play.isRecordedVideoVisible || t({
                    type: P.Z.SET_FULLSCREEN,
                    payload: {
                        isFullscreen: (0,
                        c.KR)(),
                        isSensitivityPopupOpen: !1
                    }
                })
            }
              , o = () => {
                t({
                    type: P.Z.SET_FULLSCREEN,
                    payload: {
                        isFullscreen: !1
                    }
                })
            }
            ;
            (0,
            r.useEffect)( () => {
                (0,
                w.sZ)(),
                (0,
                w.Ul)(),
                document.body.classList.toggle("--fullscreen", e)
            }
            , [e]),
            (0,
            r.useEffect)( () => (document.addEventListener("visibilitychange", i),
            lg.forEach(e => document.addEventListener("".concat(e, "fullscreenchange"), n, !1)),
            lg.forEach(e => {
                document.addEventListener("".concat(e, "fullscreenerror"), o, !1)
            }
            ),
            () => {
                lg.forEach(e => document.removeEventListener("".concat(e, "fullscreenchange"), n, !1)),
                lg.forEach(e => {
                    document.removeEventListener("".concat(e, "fullscreenerror"), o, !1)
                }
                )
            }
            ), [])
        }
          , lx = i(63211)
          , lf = i(88576)
          , lm = i(75183);
        let lw = (0,
        g.F4)(["0%{top:-60px;opacity:0;}100%{top:0px;opacity:1;}"])
          , ly = (0,
        g.F4)(["0%{top:0px;opacity:1;}100%{top:-60px;opacity:0;}"])
          , lb = (0,
        g.F4)(["0%{bottom:-60px;opacity:0;}100%{bottom:0px;opacity:1;}"])
          , lA = (0,
        g.F4)(["0%{bottom:0px;opacity:1;}100%{bottom:-60px;opacity:0;}"])
          , lj = g.ZP.div.withConfig({
            componentId: "sc-7822070a-0"
        })(["position:absolute;width:100%;background-color:rgba(0,0,0,0.50);z-index:4;"])
          , lC = g.ZP.div.withConfig({
            componentId: "sc-7822070a-1"
        })(["position:absolute;width:100%;"])
          , lE = g.ZP.div.withConfig({
            componentId: "sc-7822070a-2"
        })(["background-color:rgba(102,102,102,0.2);backdrop-filter:blur(24px);position:relative;&.header-slide-down{opacity:0;animation-name:", ";animation-duration:.2s;animation-timing-function:ease-in-out;animation-fill-mode:forwards;}&.header-slide-up{animation-name:", ";animation-duration:.2s;animation-timing-function:ease-in-out;animation-fill-mode:forwards;}"], lw, ly)
          , lS = g.ZP.div.withConfig({
            componentId: "sc-7822070a-3"
        })(["position:absolute;width:100%;"])
          , lT = g.ZP.div.withConfig({
            componentId: "sc-7822070a-4"
        })(["position:relative;background-color:rgba(102,102,102,0.2);backdrop-filter:blur(24px);position:relative;&.footer-slide-up{opacity:0;animation-name:", ";animation-duration:.2s;animation-timing-function:ease-in-out;animation-fill-mode:forwards;}&.footer-slide-down{animation-name:", ";animation-duration:.2s;animation-timing-function:ease-in-out;animation-fill-mode:forwards;}"], lb, lA)
          , lI = g.ZP.div.withConfig({
            componentId: "sc-7822070a-5"
        })(["width:100%;height:53px;"])
          , lk = g.ZP.div.withConfig({
            componentId: "sc-7822070a-6"
        })(["display:flex;justify-content:center;align-items:center;height:100%;margin-left:12px;margin-right:12px;border-top:1px solid rgba(255,255,255,0.10);"]);
        var lR = () => {
            let[e,t] = (0,
            r.useState)({
                top: 0,
                left: 0,
                width: 0,
                right: 0,
                height: 0,
                bottom: 0
            })
              , [i,n] = (0,
            r.useState)(!1)
              , [l,d] = (0,
            r.useState)("header-slide-down")
              , [u,h] = (0,
            r.useState)("footer-slide-up")
              , g = (0,
            s.DJ)()
              , v = (0,
            a.I0)()
              , x = (0,
            a.v9)(e => e.play.videoRef)
              , f = (0,
            a.v9)(e => e.play.htmlFrameRef)
              , m = (0,
            a.v9)(e => e.play.orientation)
              , w = (0,
            a.v9)(e => e.play.mobileConsoleFooterRef)
              , y = (0,
            a.v9)(e => e.play.nowPremiumSubscriptionActive)
              , b = (0,
            a.v9)(e => e.ads.rewardedPremiumTimeInSec)
              , A = (0,
            a.v9)(e => e.play.showSubscriptionModal)
              , j = (0,
            a.v9)(e => e.play.isRecording)
              , C = (0,
            r.useRef)();
            C.current = null == x ? void 0 : x.current;
            let E = (0,
            a.v9)(e => e.play.videoContainerRef)
              , S = (0,
            r.useRef)();
            S.current = null == f ? void 0 : f.current,
            (0,
            r.useRef)().current = null == w ? void 0 : w.current;
            let T = (0,
            r.useRef)();
            T.current = m;
            let I = (0,
            r.useRef)()
              , k = (0,
            a.v9)(e => e.ads.mobileExperiment);
            (0,
            r.useCallback)( () => (0,
            t0.Z)(), [m, E, C]);
            let R = (0,
            a.v9)(e => e.ads.inGameAd)
              , L = () => {
                setTimeout( () => {
                    let e, i;
                    if (S && S.current)
                        t({
                            top: (i = null == (e = S.current) ? void 0 : e.getBoundingClientRect()).top,
                            bottom: i.bottom,
                            left: i.left,
                            right: i.right,
                            width: i.width,
                            height: i.height
                        });
                    else if (C && C.current) {
                        let n = {
                            top: (i = null == (e = C.current) ? void 0 : e.getBoundingClientRect()).top,
                            bottom: i.bottom,
                            left: i.left,
                            right: i.right,
                            width: i.width,
                            height: i.height
                        };
                        (null == T ? void 0 : T.current) === p.cj.portrait && window.innerWidth > window.innerHeight && (0,
                        c.Gc)() || (null == T ? void 0 : T.current) === p.cj.landscape && window.innerHeight > window.innerWidth && (0,
                        c.tL)() ? n = {
                            top: i.left,
                            bottom: i.right,
                            left: i.top,
                            right: i.bottom,
                            width: i.height,
                            height: i.width
                        } : ((null == T ? void 0 : T.current) === p.cj.landscape && window.innerHeight > window.innerWidth && (0,
                        c.HW)() || (null == T ? void 0 : T.current) === p.cj.portrait && window.innerWidth > window.innerHeight && (0,
                        c.p9)()) && (n = {
                            top: window.innerWidth - i.right,
                            bottom: i.left,
                            left: i.bottom,
                            right: i.top,
                            width: i.height,
                            height: i.width
                        }),
                        t(n)
                    }
                }
                , 500)
            }
            ;
            (0,
            r.useEffect)( () => (L(),
            setTimeout( () => {
                n(!0)
            }
            , 400),
            window.addEventListener("resizeDone", L),
            g && (window.addEventListener("resize", L),
            window.addEventListener("orientationchange", L)),
            "ResizeObserver"in window && g && (null == S ? void 0 : S.current) && (I.current = new ResizeObserver(e => {
                e.length > 0 && L()
            }
            ),
            I.current.observe(S.current)),
            () => {
                window.removeEventListener("resizeDone", L),
                g && (window.removeEventListener("resize", L),
                window.removeEventListener("orientationchange", L)),
                I.current && I.current.disconnect()
            }
            ), []),
            (0,
            r.useEffect)( () => (document.body.style.overflow = "hidden",
            () => {
                document.body.style.overflow = "auto"
            }
            ), []);
            let D = e => {
                e.stopPropagation()
            }
              , M = b > 0
              , O = R !== eh.ush || k ? {
                top: e.top,
                height: e.height
            } : {
                top: e.top,
                height: e.height,
                width: e.width,
                left: (null == T ? void 0 : T.current) === p.cj.landscape && window.innerHeight > window.innerWidth && (0,
                c.HW)() || (null == T ? void 0 : T.current) === p.cj.portrait && window.innerWidth > window.innerHeight && (0,
                c.p9)() ? e.right : e.left
            };
            return (0,
            o.jsxs)(lj, {
                onClick: () => {
                    d("header-slide-up"),
                    h("footer-slide-down"),
                    setTimeout( () => {
                        v({
                            type: P.Z.UPDATE_PLAY_STATE,
                            payload: {
                                showMobileHeaderFooter: !1
                            }
                        })
                    }
                    , 500)
                }
                ,
                style: O,
                children: [(0,
                o.jsx)(lC, {
                    onClick: D,
                    style: {
                        top: 0
                    },
                    children: i && (0,
                    o.jsxs)(lE, {
                        className: "header-content ".concat(l, "\n          ").concat(g || m !== p.cj.landscape ? "" : "android-landscape"),
                        children: [(0,
                        o.jsx)(lf.e, {
                            mobileHeaderUI: !0
                        }), !(!g && m === p.cj.landscape) && (!M && !y && ((0,
                        rz.a5)() || !A && (0,
                        rz.Ce)()) && !j || (0,
                        rz.Ce)() && y || (0,
                        rz.a5)() && M) && (0,
                        o.jsx)(lI, {
                            children: (0,
                            o.jsx)(lk, {
                                children: (0,
                                o.jsx)(lm.p, {
                                    portraitView: !0
                                })
                            })
                        })]
                    })
                }), (0,
                o.jsx)(lS, {
                    onClick: D,
                    style: {
                        bottom: 0
                    },
                    children: i && (0,
                    o.jsx)(lT, {
                        className: "footer-content ".concat(u),
                        children: (0,
                        o.jsx)(lf.Z, {
                            mobileHeaderUI: !0
                        })
                    })
                })]
            })
        }
          , lL = i(79027)
          , lP = i(59900)
          , lD = i(63549)
          , lM = () => {
            let {t: e} = (0,
            K.$)()
              , [t,i] = (0,
            r.useState)(!1)
              , n = (0,
            a.v9)(e => e.play.orientation)
              , l = (0,
            c.tq)();
            return (0,
            o.jsx)(J.Z, {
                style: l && n === p.cj.portrait ? {
                    margin: "auto 8.75vmin"
                } : {
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.10)",
                    background: "rgba(0, 0, 0, 0.50)",
                    width: "590px"
                },
                className: l && n === p.cj.portrait ? "mobilePortrait" : "",
                overlayBackgroundColor: "radial-gradient(32.85% 62.63% at 50% 30.49%, rgba(81, 165, 201, 0.20) 0%, rgba(51, 80, 111, 0.00) 100%), radial-gradient(28.93% 32.16% at 64.37% 56.79%, rgba(179, 214, 97, 0.20) 0%, rgba(179, 214, 97, 0.00) 100%), radial-gradient(29.7% 41.69% at 37.22% 60.32%, rgba(255, 66, 165, 0.20) 0%, rgba(255, 66, 165, 0.00) 100%), #0B0223",
                children: (0,
                o.jsxs)(eA, {
                    children: [(0,
                    o.jsx)("div", {
                        className: "tile",
                        style: {
                            height: "160px"
                        },
                        children: (0,
                        o.jsx)(nc(), {
                            src: (0,
                            _.jW)(a2),
                            alt: "",
                            width: 160,
                            height: 160,
                            quality: 80
                        })
                    }), (0,
                    o.jsxs)(eC, {
                        style: {
                            gap: "16px"
                        },
                        children: [!t && (0,
                        o.jsx)(W.Bb, {
                            children: e("matureContentWarning")
                        }), (0,
                        o.jsx)(W.TZ, {
                            style: {
                                color: iQ.qm.colors.white80
                            },
                            children: e(t ? "min18YearsDisclaimer" : "matureContentDescription")
                        }), (0,
                        o.jsxs)(eE, {
                            style: {
                                gap: "16px"
                            },
                            children: [!t && (0,
                            o.jsx)(ew.z, {
                                onClick: () => i(!0),
                                variant: "secondary",
                                text: e("no")
                            }), (0,
                            o.jsx)(ew.z, {
                                onClick: () => {
                                    t ? i(!1) : (localStorage.setItem(eh.goA, "true"),
                                    (0,
                                    np.iI)("ageVerification"))
                                }
                                ,
                                variant: "primary",
                                text: e(t ? "goBack" : "yesIam18")
                            })]
                        })]
                    })]
                })
            })
        }
        ;
        i(87302);
        var lO = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, r) {
                function a(e) {
                    try {
                        d(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    try {
                        d(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    var t;
                    e.done ? o(e.value) : ((t = e.value)instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(a, l)
                }
                d((n = n.apply(e, t || [])).next())
            }
            )
        };
        let lK = tB()( () => Promise.all([i.e(5045), i.e(6275)]).then(i.bind(i, 46275)), {
            loadableGenerated: {
                webpack: () => [46275]
            },
            loading: eV
        })
          , lZ = tB()( () => Promise.all([i.e(5045), i.e(353)]).then(i.bind(i, 40353)), {
            loadableGenerated: {
                webpack: () => [40353]
            },
            loading: eV
        })
          , lN = tB()( () => Promise.resolve().then(i.bind(i, 73192)), {
            loadableGenerated: {
                webpack: () => [73192]
            },
            loading: eV
        })
          , lB = tB()( () => Promise.all([i.e(4522), i.e(6555), i.e(1484)]).then(i.bind(i, 61484)), {
            loadableGenerated: {
                webpack: () => [61484]
            },
            loading: eV
        })
          , lW = tB()( () => i.e(6742).then(i.bind(i, 56742)), {
            loadableGenerated: {
                webpack: () => [56742]
            },
            loading: eV
        })
          , l_ = tB()( () => Promise.all([i.e(4522), i.e(6555), i.e(5953)]).then(i.bind(i, 21364)), {
            loadableGenerated: {
                webpack: () => [21364]
            },
            loading: eV
        })
          , lF = 0
          , lY = e => {
            var t, i, n, d, h, g, v, x, f, m, y, b, A, j, C, E, S, T, Z, N, _, F, Y;
            let {manifest: X, isAppPage: U} = e
              , {t: G} = (0,
            K.$)()
              , V = (0,
            a.v9)(e => e.play.error)
              , q = (0,
            a.v9)(e => e.play.isAndroidConnected)
              , J = (0,
            a.v9)(e => e.ads.adsEnded)
              , Q = (0,
            a.v9)(e => e.ads.adBlocker)
              , $ = (0,
            a.v9)(e => e.auth.isLoggedIn)
              , ee = (0,
            a.v9)(e => e.auth.isLoginResolved)
              , et = (0,
            a.v9)(e => e.auth.showPreloader)
              , ei = (0,
            a.v9)(e => e.play.showDisconnectScreen)
              , en = (0,
            a.v9)(e => e.play.gameDisplayed)
              , eo = (0,
            a.v9)(e => e.play.sessionMigrated)
              , er = (0,
            a.v9)(e => e.play.duplicateTab)
              , ea = (0,
            a.v9)(e => e.play.sessionComplete)
              , ed = (0,
            a.v9)(e => e.play.sessionDisconnectScreenType)
              , es = (0,
            a.v9)(e => e.auth.guestFlow)
              , ec = (0,
            a.v9)(e => e.auth.showLogin)
              , eu = (0,
            a.v9)(e => e.auth.manualLogoutShowLogin)
              , ep = (0,
            a.v9)(e => e.play.tryNowModal)
              , eg = (0,
            a.v9)(e => e.play.endingTryNow)
              , ev = (0,
            a.v9)(e => e.play.debugOverlay)
              , ex = (0,
            a.v9)(e => e.play.loginTip)
              , ef = (0,
            a.v9)(e => e.play.listenersAttached)
              , em = (0,
            a.v9)(e => e.play.recordingMediaStream)
              , ew = null === (i = null === (t = s.default.appInfo.playFeFeatures) || void 0 === t ? void 0 : t.tryAndDownload) || void 0 === i ? void 0 : i.isEnabled
              , ey = ew && (null == localStorage ? void 0 : localStorage.getItem(eh.Wpe)) !== "true"
              , [eb,eA] = (0,
            r.useState)(!U || !ey)
              , ej = !(0,
            c.tq)() || (0,
            c.Em)() || (0,
            c.zc)() ? null === (x = null === (v = null === (g = s.default.appInfo.playFeFeatures) || void 0 === g ? void 0 : g.ads) || void 0 === v ? void 0 : v.desktop) || void 0 === x ? void 0 : x.enableDisplayAds : null === (h = null === (d = null === (n = s.default.appInfo.playFeFeatures) || void 0 === n ? void 0 : n.ads) || void 0 === d ? void 0 : d.mobile) || void 0 === h ? void 0 : h.enableDisplayAds
              , eC = !(0,
            c.tq)() || (0,
            c.Em)() || (0,
            c.zc)() ? null === (j = null === (A = null === (b = s.default.appInfo.playFeFeatures) || void 0 === b ? void 0 : b.ads) || void 0 === A ? void 0 : A.desktop) || void 0 === j ? void 0 : j.enablePrerollAds : null === (y = null === (m = null === (f = s.default.appInfo.playFeFeatures) || void 0 === f ? void 0 : f.ads) || void 0 === m ? void 0 : m.mobile) || void 0 === y ? void 0 : y.enablePrerollAds
              , eE = !(0,
            c.tq)() || (0,
            c.Em)() || (0,
            c.zc)() ? null === (N = null === (Z = null === (T = s.default.appInfo.playFeFeatures) || void 0 === T ? void 0 : T.ads) || void 0 === Z ? void 0 : Z.desktop) || void 0 === N ? void 0 : N.enableMidrollAds : null === (S = null === (E = null === (C = s.default.appInfo.playFeFeatures) || void 0 === C ? void 0 : C.ads) || void 0 === E ? void 0 : E.mobile) || void 0 === S ? void 0 : S.enableMidrollAds
              , eS = (0,
            a.v9)(e => e.ads.rewardAdsLoadAdsSdk)
              , eR = !!(0,
            c.J6)() && !(0,
            s.DJ)() || ej || eC || eE || eS
              , eL = !(0,
            c.tq)() && !(0,
            c.Em)() && !(0,
            c.zc)()
              , [eD,eB] = (0,
            r.useState)(!1)
              , eW = (0,
            a.v9)(e => e.play.isRecording)
              , e_ = (0,
            a.v9)(e => e.play.showRecordModal)
              , eF = (0,
            a.v9)(e => e.play.showMicBlockedModal)
              , eY = (0,
            a.v9)(e => e.play.consoleFooterRef)
              , eX = (0,
            a.v9)(e => e.play.showRecordingTransition)
              , eH = (0,
            a.v9)(e => e.play.videoRef)
              , ez = (0,
            a.v9)(e => e.play.showRecordingModalBeforeExit)
              , eV = (0,
            a.v9)(e => e.auth.showResetPassword)
              , eJ = (0,
            a.v9)(e => {
                var t;
                return null === (t = null == e ? void 0 : e.play) || void 0 === t ? void 0 : t.isFullscreen
            }
            )
              , eQ = (0,
            r.useRef)(!1)
              , {creditReward: e$} = (0,
            a0.pv)()
              , e1 = (0,
            a.I0)()
              , e2 = (0,
            r.useContext)(k.x)
              , [e5,e4] = (0,
            r.useState)("")
              , e9 = (0,
            r.useRef)(null)
              , e6 = (0,
            r.useRef)(null)
              , [e7,e8] = (0,
            r.useState)(!eo && !ea && !er && !eg)
              , te = (0,
            a.v9)(e => e.nowbuxRewards.accumulatedTimeSecs)
              , tt = (0,
            r.useRef)(null)
              , ti = (0,
            a.v9)(e => e.nowbuxRewards.showFreeSpinVerification)
              , tn = (0,
            a.v9)(e => e.play.videoModalError)
              , to = (0,
            a.v9)(e => e.gamification.showTaskCompletePopup)
              , tr = (0,
            a.v9)(e => e.play.isPlayerLoaded)
              , ta = (0,
            a.v9)(e => e.play.showApkFinder)
              , tl = (0,
            r.useRef)(!1)
              , td = (0,
            r.useRef)(!1)
              , ts = (0,
            a.v9)(e => e.play.showDisconnectWarning)
              , tc = (0,
            a.v9)(e => e.play.nowPremiumSubscriptionActive)
              , tu = (0,
            a.v9)(e => e.ads.imaError)
              , tp = (0,
            a.v9)(e => e.ads.rewardedPremiumTimeInSec)
              , th = (0,
            a.v9)(e => e.play.showMobileHeaderFooter);
            lv();
            let {setAdBlockerWorkflow: tg} = (0,
            lD.Z)({
                adsEnabled: eR
            })
              , tv = e => {
                e.key !== eh.B1h || e.newValue || (0,
                np.iI)("TokenRemoved")
            }
              , tx = e => {
                eB(!0),
                (0,
                u.L9)("ProxyDetected", e)
            }
              , tf = () => V === p.YR.FailureServiceNotInRegion && ((0,
            c.c6)(e2.packageName) || (0,
            c.Lv)(e2.packageName))
              , tm = () => {}
              , tw = () => {
                var e;
                R.default.dispatch({
                    type: P.Z.SET_FULLSCREEN,
                    payload: {
                        isFullscreen: !!(eI.J.fullscreenElement || eI.J.webkitFullscreenElement || eI.J.msFullscreenElement || eI.J.mozFullScreenElement),
                        isSensitivityPopupOpen: !1
                    }
                }),
                (null === (e = null == document ? void 0 : document.body) || void 0 === e ? void 0 : e.classList) && (eI.J.fullscreenElement || eI.J.webkitFullscreenElement || eI.J.msFullscreenElement || eI.J.mozFullScreenElement ? document.body.classList.add("--fullscreen") : document.body.classList.remove("--fullscreen")),
                (0,
                w.sZ)(),
                (0,
                w.Ul)()
            }
            ;
            (0,
            r.useEffect)( () => {
                e1({
                    type: P.Z.UPDATE_PLAY_STATE,
                    payload: {
                        isPlayerLoaded: !0
                    }
                })
            }
            , [e1]),
            (0,
            r.useEffect)( () => {
                var e, t, i;
                eX ? (null === (e = e6.current) || void 0 === e || e.play(),
                null === (t = e6.current) || void 0 === t || t.classList.add("slideIn")) : null === (i = e6.current) || void 0 === i || i.classList.remove("slideIn")
            }
            , [eX]);
            let ty = () => {
                eK.CC.onfocus(),
                (0,
                ln.v0)()
            }
              , tb = () => {
                var e, t, i;
                window.addEventListener("storage", tv),
                window.addEventListener("blur", eZ.ny),
                window.addEventListener("focus", ty),
                window.addEventListener("appinstalled", tL.YL),
                document.addEventListener("touchcancel", ln.v0),
                window.addEventListener("pointerdown", u._b),
                (null === (i = null === (t = null === (e = null === s.default || void 0 === s.default ? void 0 : s.default.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.uiConfig) || void 0 === i ? void 0 : i.enableDebugOverlay) && (window.addEventListener("keydown", eP.xN.keydown, {
                    capture: !0
                }),
                window.addEventListener("touchstart", eP.xN.onTouchStart, {
                    capture: !0
                })),
                window.addEventListener("touchstart", u.Sg),
                window.addEventListener("touchend", u.se)
            }
              , tA = e => {
                if (!R.default.getState().play.paymentInProgress) {
                    if ((0,
                    eN.LK)(),
                    R.default.dispatch({
                        type: P.Z.START_CONNECTION,
                        payload: {
                            peerConnection: null
                        }
                    }),
                    "persisted"in e && e.persisted)
                        window.location.reload();
                    else {
                        try {
                            let e = sessionStorage.getItem(eh.oEp);
                            e && (new Date().getTime() - parseInt(e, 10)) / 1e3 < 60 && (0,
                            lL.Z)({
                                event: "NUlessthan60s"
                            })
                        } catch (e) {}
                        if (tr) {
                            let e = sessionStorage.getItem("lastUptimeEventTime") ? Number(sessionStorage.getItem("lastUptimeEventTime")) : Date.now();
                            (0,
                            c._n)("/oapi/play/v1/reportEvent", {
                                isTabVisible: "visible" === document.visibilityState,
                                timeSinceLastUptimeEvent: (Date.now() - e) / 1e3
                            })
                        }
                        (0,
                        D.FN)("beforeunload event triggered"),
                        e1({
                            type: L.Z.SET_LOGGED_IN,
                            payload: {
                                showPreloader: !0
                            }
                        })
                    }
                }
            }
            ;
            (0,
            r.useEffect)( () => {
                e1({
                    type: P.Z.SHOW_BLOXD_ERROR_SCREEN,
                    payload: {
                        showBloxdErrorScreen: V === p.YR.FailureServiceNotInRegion && ((0,
                        c.c6)(e2.packageName) || (0,
                        c.Lv)(e2.packageName))
                    }
                }),
                (0,
                c.s$)() && R.default.dispatch({
                    type: P.Z.SET_ERROR,
                    payload: {
                        error: p.YR.FailureForbidden,
                        clientId: "",
                        sessionId: "",
                        errorDescription: ""
                    }
                })
            }
            , [V]),
            (0,
            r.useEffect)( () => {
                var e, t;
                (0,
                u.L9)("PlayPageLoaded");
                let i = (0,
                c.Tt)() ? "pagehide" : "beforeunload";
                window.addEventListener(i, tA),
                window.addEventListener("pageshow", e => {
                    e.persisted && window.location.reload()
                }
                ),
                s.default.isAppPage || window.addEventListener("beforeinstallprompt", tL.dz),
                (0,
                w.TG)();
                try {
                    if (lO(void 0, void 0, void 0, function*() {
                        try {
                            if ((0,
                            s.DJ)()) {
                                eB(!1),
                                tb(),
                                yield(0,
                                M.ZP)(!0);
                                return
                            }
                            tb(),
                            ey && eA(!1),
                            U || (yield(0,
                            M.ZP)(!0))
                        } catch (e) {
                            tx({
                                error: e,
                                detectionMethod: eh.fic
                            })
                        }
                    }),
                    U || (0,
                    lP.Z)(),
                    "function" == typeof BroadcastChannel && !(0,
                    c.Ny)() && !(0,
                    c.df)())
                        try {
                            (0,
                            c.PK)(!0);
                            let e = new BroadcastChannel("tab")
                              , t = "tab-".concat(s.default.appInfo.appId);
                            e.postMessage(t),
                            e.addEventListener("message", e => {
                                e.data === t && (R.default.getState().play.isRecording && R.default.dispatch({
                                    type: P.Z.UPDATE_IS_RECORDING,
                                    payload: {
                                        showRecordingModalBeforeExit: !0,
                                        showRecordingModalBeforeExitSource: "duplicateTab"
                                    }
                                }),
                                (0,
                                u.L9)("DuplicateTab"),
                                e1({
                                    type: P.Z.DUPLICATE_TAB,
                                    payload: {
                                        duplicateTab: !0
                                    }
                                }))
                            }
                            )
                        } catch (e) {
                            (0,
                            eO.ZP)(Error("BroadcastChannel Failed"), {
                                error: e
                            })
                        }
                } catch (e) {
                    tx({
                        error: e,
                        detectionMethod: eh.fic
                    })
                }
                if (!ef) {
                    let e = ["", "moz", "webkit", "ms"];
                    e.forEach(e => {
                        document.addEventListener("".concat(e, "fullscreenchange"), tw, !1)
                    }
                    ),
                    e.forEach(e => {
                        document.addEventListener("".concat(e, "fullscreenerror"), tm, !1)
                    }
                    ),
                    R.default.dispatch({
                        type: P.Z.LISTENERS_ATTACHED,
                        payload: !0
                    })
                }
                if ((0,
                nu.Z)(),
                window.addEventListener("message", e => {
                    if (e && e.data && e.data.eventName) {
                        let t = "send_event_to_app::".concat(e.data.eventName, "::").concat(e.data.eventData);
                        (0,
                        eN.fr)(t)
                    }
                }
                ),
                (0,
                c.yL)() && !(0,
                e3.Pr)()) {
                    let i;
                    try {
                        i = (null === (t = null === (e = window.top) || void 0 === e ? void 0 : e.location) || void 0 === t ? void 0 : t.href) || "unknown"
                    } catch (e) {}
                    (0,
                    u.L9)(eh.KtD, {
                        currentUrl: window.location.href,
                        parentUrl: i
                    })
                }
                return () => {
                    window.removeEventListener("storage", tv),
                    window.removeEventListener(i, tA),
                    (0,
                    eN.LK)(),
                    window.removeEventListener("blur", eZ.ny),
                    window.removeEventListener("focus", ty),
                    document.removeEventListener("touchcancel", ln.v0),
                    window.removeEventListener("pointerdown", u._b),
                    window.removeEventListener("touchstart", u.Sg),
                    window.removeEventListener("touchend", u.se)
                }
            }
            , []);
            let tj = tp > 0;
            (0,
            r.useEffect)( () => {
                !(!(null == eQ ? void 0 : eQ.current) && (0,
                s.DJ)()) && (!(0,
                ek.Bs)() || V || q) && !tc && (q || ee) && !tj && (tg(!0),
                eQ.current = !0)
            }
            , [V, q, ee, tc, tj]),
            (0,
            r.useEffect)( () => {
                let e = (0,
                c.Dx)() && !(0,
                s.DJ)();
                return eW && !eX ? (lF = e ? 300 : 0,
                tt.current = setInterval( () => {
                    let t = e ? lF - 1 : lF + 1;
                    lF = t;
                    let i = Math.floor(t / 3600)
                      , n = Math.floor(t / 60 % 60);
                    t = Math.floor(t % 60);
                    let o = "".concat(i > 0 ? "".concat(i <= 9 ? "0" : "").concat(i, ":") : "", "\n      ").concat(n <= 9 ? "0" : "").concat(n, ":").concat(t <= 9 ? "0" : "").concat(t);
                    o = o.replaceAll("\n", "").replaceAll(" ", ""),
                    e1({
                        type: P.Z.UPDATE_IS_RECORDING,
                        payload: {
                            recordingTimerText: o
                        }
                    }),
                    (0,
                    c.Dx)() && 0 === lF && e1({
                        type: P.Z.UPDATE_IS_RECORDING,
                        payload: {
                            stopVideoRecording: !0
                        }
                    })
                }
                , 1e3)) : tt.current && clearInterval(tt.current),
                () => {
                    tt.current && clearInterval(tt.current)
                }
            }
            , [eW, eX]),
            (0,
            r.useEffect)( () => {
                if (((0,
                s.DJ)() && !q || !(0,
                s.DJ)() && q) && e1((0,
                tW.J)()),
                (q || (0,
                s.DJ)()) && $ && (0,
                c.GT)() && ((0,
                c.Uq)(),
                (0,
                c.Nh)()),
                q && !tf()) {
                    if ($) {
                        if ((0,
                        c.GT)() && (0,
                        c.c6)() && tr && eL) {
                            let e = +(sessionStorage.getItem(eh.Aus) || "");
                            sessionStorage.removeItem(eh.Aus),
                            lO(void 0, void 0, void 0, function*() {
                                e > 0 && (yield e$(e))
                            })
                        }
                    } else
                        e1({
                            type: a$.Z.NOWBUX_REWARD_DETAILS,
                            payload: {
                                startNowbuxTimer: !0
                            }
                        })
                }
            }
            , [$, q]),
            (0,
            r.useEffect)( () => {
                J && q && sessionStorage.getItem("enableFreeSpin") === s.rs && ($ ? e1({
                    type: a$.Z.JACKPOT_FLOW,
                    payload: {
                        showFreeSpinVerification: !0
                    }
                }) : e1({
                    type: L.Z.TOGGLE_LOGIN,
                    payload: {
                        showLogin: !0
                    }
                }))
            }
            , [J, $, q]),
            (0,
            r.useEffect)( () => {
                var e;
                (null === (e = null == document ? void 0 : document.body) || void 0 === e ? void 0 : e.classList) && !(0,
                s.DJ)() && document.body.classList[$ || es ? "add" : "remove"]("landscape")
            }
            , [$, es, ec]),
            (0,
            r.useEffect)( () => {
                var e;
                ea && (null === (e = null == document ? void 0 : document.body) || void 0 === e ? void 0 : e.classList) && document.body.classList.remove(eh.ppW, eh.Ovm)
            }
            , [ea]),
            (0,
            r.useEffect)( () => {
                var e;
                if ((0,
                c.GT)() && (ed || eo || ea || er) && (0,
                c.c6)() && tr && eL && ((ed || ea) && e$(te % s.default.appInfo.rwdMinPlayTimeIntervalInSecs),
                (0,
                li.D)()),
                eo || ea || er) {
                    try {
                        null === (e = R.default.getState().play.recordingUserAudioTrack) || void 0 === e || e.stop(),
                        null == em || em.getTracks().forEach(e => e.stop())
                    } catch (e) {}
                    e8(!1)
                }
            }
            , [ea, eo, er, ed]),
            (0,
            r.useEffect)( () => {
                if (q) {
                    let e = 0;
                    e9.current = setInterval( () => {
                        e += 60,
                        e1({
                            type: l.Z.UPDATE_PLAYTIME,
                            payload: {
                                playtime: e / 60
                            }
                        })
                    }
                    , 6e4)
                }
                J && !q && e9.current && clearInterval(e9.current)
            }
            , [q]),
            (0,
            r.useEffect)( () => {
                if (J && q) {
                    (0,
                    ek.Z2)();
                    let e = (0,
                    s.GL)();
                    if (e) {
                        let {type: t, graceIntervalSecs: i, disconnecTimer: n} = e;
                        e1({
                            type: P.Z.SESSION_DISCONNECT_TOAST,
                            payload: {
                                disconnecTimer: n,
                                graceIntervalSecs: i,
                                showDisconnectScreen: !1,
                                showDisconnectToast: !0
                            }
                        })
                    }
                    (0,
                    c.GT)() && (0,
                    c.cv)()
                } else
                    J && tf() && (0,
                    ek.Z2)()
            }
            , [J, q]),
            (0,
            r.useEffect)( () => {
                en && J && ((0,
                u.L9)(eh.MzC),
                (0,
                lL.Z)({
                    event: "feGameDisplayed",
                    pagePath: window.location.href
                }),
                window.addEventListener("click", () => {
                    tl.current = !0,
                    td.current && (0,
                    lL.Z)({
                        event: "gameSession",
                        pagePath: window.location.href
                    })
                }
                , {
                    once: !0
                }),
                setTimeout( () => {
                    tl.current ? (0,
                    lL.Z)({
                        event: "gameSession",
                        pagePath: window.location.href
                    }) : td.current = !0
                }
                , 6e4),
                setTimeout( () => {
                    (0,
                    ek.N$)().catch(e => {}
                    )
                }
                , 15e3))
            }
            , [en, J]),
            (0,
            r.useEffect)( () => {
                let e = (tf() ? "" : V) || (e2.packageName ? "" : "NoPackageName");
                e4(e),
                e && (0,
                u.L9)("ShowErrorOverlay", {
                    err: e,
                    error: V
                })
            }
            , [e2, V]);
            let tS = V !== p.YR.FailureNoResource && !e5 && (!q || !J) && !eo && !ea && !er
              , tT = !(0,
            s.DJ)() && et
              , tk = !(0,
            s.DJ)() && !et && J && tS && !q && !tf() && !(ec || eu) && !eg;
            (0,
            r.useEffect)( () => {
                var e, t;
                eJ ? eW && (0,
                c.Dx)() && (null === (t = null == eH ? void 0 : eH.current) || void 0 === t || t.classList.add("isRecording")) : null === (e = null == eH ? void 0 : eH.current) || void 0 === e || e.classList.remove("isRecording")
            }
            , [eJ]);
            let tP = e => {
                eA(!0),
                null == localStorage || localStorage.setItem(eh.Wpe, "true"),
                (0,
                c.V9)(),
                "bottomBar" === e ? (0,
                u.L9)(eh.S5z, {
                    element: "LaunchQRScreen",
                    action: "TryNowClicked",
                    group: "TryAndDownload"
                }) : (0,
                u.L9)(eh.S5z, {
                    element: "LaunchScreen",
                    action: "TryNowClicked",
                    group: "TryAndDownload"
                })
            }
            ;
            return (0,
            o.jsxs)(o.Fragment, {
                children: [ev && (0,
                o.jsx)(eM, {}), eD ? (0,
                o.jsx)(e0, {}) : (0,
                c.C)() ? (0,
                o.jsx)(lM, {}) : eb ? V === p.YR.FailureUnderMaintenance || (null === (Y = null === (F = null === (_ = null === s.default || void 0 === s.default ? void 0 : s.default.appInfo) || void 0 === _ ? void 0 : _.playFeFeatures) || void 0 === F ? void 0 : F.maintenanceWindowInfo) || void 0 === Y ? void 0 : Y.enable) ? (0,
                o.jsx)(tI, {}) : (ee || U) && !$ && sessionStorage.getItem(eh.o_r) ? (0,
                o.jsx)(aJ, {}) : (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)(tR(), {
                        children: !U && X && (0,
                        o.jsx)("link", {
                            rel: "manifest",
                            href: "data:application/json;charset=utf-8,".concat((0,
                            tL.ZP)(e2.appName, (0,
                            c.tq)()))
                        })
                    }), !((0,
                    s.DJ)() && (0,
                    c.tq)()) && (0,
                    o.jsxs)(o.Fragment, {
                        children: [(0,
                        o.jsx)(B.Z, {
                            toggle: tT,
                            exitingDelay: .3,
                            children: (0,
                            o.jsx)(z, {
                                toggle: tT
                            })
                        }), (0,
                        o.jsx)(B.Z, {
                            toggle: tk,
                            exitingDelay: .6,
                            enteringDelay: .3,
                            children: (0,
                            o.jsx)(H, {
                                toggle: tk
                            })
                        })]
                    }), (0,
                    s.DJ)() && !(0,
                    c.tq)() && !et && !e5 && !J && !tu && !Q && !eg && (0,
                    o.jsx)(I, {
                        isAppPage: U
                    }), (0,
                    s.DJ)() && (!(0,
                    c.tq)() || (0,
                    c.tq)() && !et) && (0,
                    o.jsx)(eq.r, {
                        loading: null,
                        persistor: R.D,
                        children: (0,
                        o.jsx)(lB, {
                            isAppPage: U
                        })
                    }), ep && (0,
                    o.jsx)(tC, {
                        isAppPage: U,
                        screen: "inGame",
                        handleTryNowClick: tP
                    }), eg && (0,
                    o.jsx)(tC, {
                        isAppPage: U,
                        screen: "ending"
                    }), ex && (0,
                    o.jsx)(tq, {}), th && (0,
                    o.jsx)(lR, {}), !(0,
                    s.DJ)() && !et && !ei && ($ || es) && !eu && window.Modernizr.peerconnection && V !== p.YR.FailureNoResource && !e5 && (!q && !tf() || !J) && !J && !eo && !ea && !tu && !er && !Q && !eg && (0,
                    o.jsx)(I, {
                        isAppPage: U
                    }), !et && ($ || es) && !eu && window.Modernizr.peerconnection && (0,
                    o.jsxs)(o.Fragment, {
                        children: [!(0,
                        s.DJ)() && !ei && (0,
                        o.jsx)(eq.r, {
                            loading: null,
                            persistor: R.D,
                            children: !e5 && ee && (0,
                            o.jsx)(aO, {
                                overlayElement: tf() && J ? (0,
                                o.jsx)(a1.Z, {}) : null
                            })
                        }), (V === p.YR.FailureServiceNotInRegion && !(0,
                        c.c6)(e2.packageName) || V === p.YR.FailureAppNotAvailable) && ew ? (0,
                        o.jsx)(tE.Z, {}) : eh.m8j[V] ? (0,
                        o.jsx)(l_, {}) : !(V === p.YR.FailureServiceNotInRegion && (0,
                        c.c6)(e2.packageName)) && V && "string" == typeof V ? (0,
                        o.jsx)(lN, {
                            error: V,
                            errorName: "PlayPage-".concat(V)
                        }) : null]
                    }), !(0,
                    s.DJ)() && ts && !ei && !er && (0,
                    o.jsx)(eT, {}), !(0,
                    s.DJ)() && !window.Modernizr.peerconnection && (0,
                    o.jsx)(el, {}), !(0,
                    s.DJ)() && !ts && !er && ei && (0,
                    o.jsx)(ls, {}), !et && window.Modernizr.peerconnection && !$ && (!es || ec || eu) && tr && (0,
                    o.jsx)(O.default, {
                        withBG: !0
                    }), eV && (0,
                    o.jsx)(lW, {}), e7 && (0,
                    aQ.Z)() && !(0,
                    c.tq)() && !(0,
                    c.Em)() && !(0,
                    c.zc)() && (0,
                    o.jsxs)(o.Fragment, {
                        children: [(0,
                        c.Dx)() && (0,
                        o.jsx)(aK.CF, {
                            preload: "auto",
                            muted: !0,
                            ref: e6,
                            style: {
                                display: eX ? "block" : "none"
                            },
                            className: "transition-video",
                            children: (0,
                            o.jsx)("source", {
                                src: "".concat(eh.u1t, "clapboardVideo.mp4"),
                                type: "video/mp4"
                            })
                        }), eW && eJ && !et && !tk && (!tS || "Html" === s.default.appInfo.appType) && J && (0,
                        c.Dx)() && (0,
                        o.jsxs)(o.Fragment, {
                            children: [eX && (0,
                            o.jsxs)(aK.B3, {
                                children: [(0,
                                o.jsx)(W.T1, {
                                    children: G("recordingTransitionTitle")
                                }), (0,
                                o.jsx)(W.T3, {
                                    children: G("recordingTransitionInfo")
                                })]
                            }), (0,
                            o.jsx)(tZ, {})]
                        }), e_ && ((null == eY ? void 0 : eY.current) || !(0,
                        c.Dx)()) && (0,
                        o.jsx)(lK, {}), eF && (0,
                        o.jsx)(aF, {})]
                    }), ez && (0,
                    o.jsx)(lZ, {}), ti && (0,
                    o.jsx)(lt, {}), tn && !(0,
                    c.tq)() && (0,
                    o.jsx)(a6, {}), (null == to ? void 0 : to.name) && (q || (0,
                    s.DJ)() || s.default.isAppPage || s.default.isHomePage) && (!eR || J) && (0,
                    o.jsx)(lh, {
                        taskName: to.name,
                        taskRwd: to.rewardNumRobux
                    }), ta && (0,
                    o.jsx)(lx.default, {})]
                }) : (0,
                o.jsx)(tC, {
                    isAppPage: U,
                    handleTryNowClick: tP,
                    screen: "loading"
                }), !(0,
                s.DJ)() && (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)(eU, {}), (0,
                    o.jsx)(eG, {})]
                })]
            })
        }
        ;
        var lX = lY
    }
}]);
//# sourceMappingURL=9667.94b1daabc5da9399.js.map
