"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7078], {
    7078: function(e, t, n) {
        n.r(t),
        n.d(t, {
            NerdModeComponent: function() {
                return H
            },
            default: function() {
                return N
            }
        });
        var i = n(85893)
          , o = n(67294)
          , r = n(4374)
          , a = n(1857)
          , c = n(81043)
          , d = n(82492)
          , s = n(36716)
          , l = n(27633)
          , p = n(94183)
          , u = n(36887)
          , m = n(17609)
          , x = n(51869)
          , f = n(68784)
          , g = n(77289)
          , h = n(77621)
          , v = n(57833)
          , y = n(6685);
        let w = v.ZP.div.withConfig({
            componentId: "sc-594d3038-0"
        })(["position:relative;"])
          , P = v.ZP.div.withConfig({
            componentId: "sc-594d3038-1"
        })(["position:absolute;background:rgba(0,0,0,0.8);color:", ";display:inline-block;left:50%;top:5px;transform:translateX(-50%);z-index:10;width:fit-content;padding:8px 16px;border:", ";"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.border.base
        }
        )
          , b = v.ZP.div.withConfig({
            componentId: "sc-594d3038-2"
        })(["position:absolute;z-index:20;max-width:459px;top:60px;background:rgba(0,0,0,0.8);box-shadow:", ";border-radius:0 6px 0 6px;padding:12px 16px 15px;pointer-events:none;@media screen and (orientation:portrait) and (max-width:600px),(orientation:landscape) and (max-height:575.98px){transform:scale(.7);transform-origin:top left;}"], e => {
            let {theme: t} = e;
            return t.shadow.big
        }
        )
          , j = v.ZP.p.withConfig({
            componentId: "sc-594d3038-3"
        })(["letter-spacing:0.05em;font-weight:500;color:", ";opacity:0.8;margin-bottom:8px;margin-top:5px;font-size:12px;line-height:15px;"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , k = v.ZP.div.withConfig({
            componentId: "sc-594d3038-4"
        })(["display:flex;flex-direction:row;"])
          , C = v.ZP.div.withConfig({
            componentId: "sc-594d3038-5"
        })(["display:flex;margin-left:auto;cursor:pointer;pointer-events:auto;span{margin-left:10px;}"])
          , S = v.ZP.div.withConfig({
            componentId: "sc-594d3038-6"
        })(["border-bottom:1px solid rgba(255,255,255,0.1);"])
          , I = v.ZP.div.withConfig({
            componentId: "sc-594d3038-7"
        })(["color:", ";display:grid;margin-top:5px;grid-template-columns:111px 14px 302px;div:nth-child(2){margin:0px 4px;text-align:center;}p{font-size:11px;}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , R = v.ZP.div.withConfig({
            componentId: "sc-594d3038-8"
        })(["display:flex;color:", ";margin-top:8px;div:nth-child(2){margin:0px 4px;text-align:center;}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , Z = v.ZP.div.withConfig({
            componentId: "sc-594d3038-9"
        })(["color:", ";display:grid;margin-top:8px;grid-template-columns:200px 200px;"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , T = (0,
        v.ZP)(y.__).withConfig({
            componentId: "sc-594d3038-10"
        })(["> span:before{background-color:", ";}> span{border-color:", ";}"], e => {
            let {theme: t} = e;
            return t.colors.white
        }
        , e => {
            let {theme: t} = e;
            return t.colors.white
        }
        )
          , H = () => {
            var e;
            let {t} = (0,
            r.$)()
              , n = (0,
            c.I0)()
              , [v,y] = (0,
            o.useState)(["platform", "appPackage", "country", "connectionState", "ping", "currentResolution", "framesPerSecond", "clientID", "sessionID", "buildVersion"])
              , H = (0,
            o.useContext)(m.Z)
              , N = (0,
            c.v9)(e => e.play.peerConnectionState)
              , E = (0,
            c.v9)(e => e.play.peerConnection)
              , z = (0,
            c.v9)(e => e.play.isNerdMode)
              , F = (0,
            c.v9)(e => e.play.tpEnabled)
              , M = d.default.getState()
              , B = ""
              , D = ""
              , _ = ""
              , A = ""
              , {videoRef: L} = M.play;
            L && L.current && (D = L.current.offsetHeight.toString(),
            B = L.current.offsetWidth.toString());
            let V = h.default.countryCode || "-"
              , Q = ["bitrate", "codec", "packets"]
              , W = new Map([["bitrate", "videoBitrate"], ["codec", "videoCodec"], ["packets", "videoPackets"]])
              , O = new Map([["bitrate", "audioBitrate"], ["codec", "audioCodec"], ["packets", "audioPackets"]])
              , [q,G] = (0,
            o.useState)(new Map([["platform", null === (e = (0,
            p.Tb)().description) || void 0 === e ? void 0 : e.split(" ").join(" ")], ["appPackage", H.packageName], ["country", V], ["connectionState", N || "NA"], ["ping", "0ms"], ["currentResolution", ""], ["framesPerSecond", "0"], ["clientID", (0,
            p.Fz)(g.nPo)], ["sessionID", (0,
            p.io)(g.K3T)], ["buildVersion", "".concat(x.f4, " ~ ").concat(x._s)], ["viewport", ""], ["devicePixelRatio", ""], ["frames", ""], ["videoBitrate", ""], ["videoCodec", ""], ["videoPackets", ""], ["audioBitrate", ""], ["audioCodec", ""], ["audioPackets", ""]]))
              , [K,X] = (0,
            o.useState)({})
              , [$,J] = (0,
            o.useState)(!1)
              , [U,Y] = (0,
            o.useState)(0)
              , ee = (0,
            o.useRef)(null)
              , et = (0,
            c.v9)(e => e.ads.inGameAd);
            function en(e) {
                let t = parseInt(e, 10);
                return t && t > 0 ? "".concat(parseInt((t / 1e3).toString(), 10), " kHz") : "0 kHz"
            }
            function ei(e) {
                let t = parseInt(e, 10);
                return t && t > 0 ? "".concat(parseFloat((t / 1e3).toString()).toFixed(2), " kbps") : "0 kbps"
            }
            function eo(e) {
                var n, i, o, r, a, c;
                let d = null === (i = null === (n = null == e ? void 0 : e.data) || void 0 === n ? void 0 : n.connection) || void 0 === i ? void 0 : i.currentRoundTripTime
                  , s = null === (r = null === (o = e.data) || void 0 === o ? void 0 : o.video) || void 0 === r ? void 0 : r.inbound[0]
                  , l = null === (c = null === (a = e.data) || void 0 === a ? void 0 : a.audio) || void 0 === c ? void 0 : c.inbound[0]
                  , p = s.frameWidth && s.frameHeight ? "".concat(s.frameWidth, " x ").concat(s.frameHeight) : ""
                  , u = !!s.framesPerSecond && s.framesPerSecond
                  , m = "".concat(s.mimeType || "NA", "-").concat(en(s.clockRate || "0"))
                  , x = "".concat(l.mimeType || "NA", "-").concat(en(l.clockRate || "0"))
                  , f = s ? ei(s.bitrate) : ei("0")
                  , g = l ? ei(l.bitrate) : ei("0")
                  , h = "".concat(s.packetsLost || "0", " ").concat(t("frameLost"), " ").concat(s.packetsReceived || "0")
                  , v = "".concat(l.packetsLost || "0", " ").concat(t("frameLost"), " ").concat(l.packetsReceived || "0");
                G(e => {
                    let t = new Map(e);
                    return d && t.set("ping", "".concat(parseFloat((1e3 * d).toString()).toFixed(2), "ms")),
                    p ? t.set("currentResolution", p) : t.delete("currentResolution"),
                    u ? t.set("framesPerSecond", u) : t.delete("framesPerSecond"),
                    m ? t.set("videoCodec", m) : t.delete("videoCodec"),
                    x ? t.set("audioCodec", x) : t.delete("audioCodec"),
                    f ? t.set("videoBitrate", f) : t.delete("videoBitrate"),
                    g ? t.set("audioBitrate", g) : t.delete("audioBitrate"),
                    h ? t.set("videoPackets", h) : t.delete("videoPackets"),
                    v ? t.set("audioPackets", v) : t.delete("audioPackets"),
                    t
                }
                )
            }
            (0,
            o.useEffect)( () => {
                if (z) {
                    if ((0,
                    f.qO)("1"),
                    E instanceof RTCPeerConnection) {
                        let e;
                        K instanceof s.Q ? e = K : X(e = new s.Q({
                            getStatsInterval: 1e3
                        }));
                        try {
                            e.addPeer({
                                pc: E,
                                peerId: "1"
                            }),
                            e.on("stats", eo)
                        } catch (e) {
                            (0,
                            x.ZP)(e)
                        }
                    }
                } else
                    K instanceof s.Q && (K.removePeer("1"),
                    K.removeListener("stats", eo),
                    (0,
                    f.qO)("0"));
                return () => {
                    K instanceof s.Q && (K.removePeer("1"),
                    K.removeListener("stats", eo))
                }
            }
            , [z]),
            (0,
            o.useEffect)( () => {
                G(e => (e.set("connectionState", N || "NA"),
                e.set("clientID", (0,
                p.Fz)(g.nPo) || ""),
                e.set("sessionID", (0,
                p.io)(g.K3T) || ""),
                e))
            }
            , [N]),
            (0,
            o.useEffect)( () => {
                7 === U && (y(e => [...e, "viewport", "devicePixelRatio", "frames"]),
                ee.current = setInterval( () => {
                    !function() {
                        if (L && L.current) {
                            let e = L.current.getVideoPlaybackQuality();
                            0 !== e.totalVideoFrames && U >= 7 && (_ = e.totalVideoFrames.toString(),
                            A = e.droppedVideoFrames.toString(),
                            G(e => {
                                let n = new Map(e);
                                return n.set("frames", "".concat(A, " ").concat(t("frameDrop"), " ").concat(_)),
                                n
                            }
                            ))
                        }
                    }()
                }
                , 1e3),
                G(e => (e.set("viewport", "".concat(D, " x ").concat(B)),
                e.set("devicePixelRatio", parseFloat(window.devicePixelRatio.toString()).toFixed(2)),
                e)))
            }
            , [U]);
            let er = e => {
                (0,
                f.CE)(e ? "0" : "1"),
                n({
                    type: l.Z.TP_ENABLED,
                    payload: {
                        tpEnabled: !e
                    }
                })
            }
            ;
            return (0,
            i.jsxs)(w, {
                children: [$ && (0,
                i.jsx)(P, {
                    children: (0,
                    i.jsx)(a.kk, {
                        style: {
                            margin: 0
                        },
                        children: t("copiedToClipboard")
                    })
                }), z && (0,
                i.jsxs)(b, {
                    style: et === g.ush ? {
                        top: 0
                    } : {},
                    children: [(0,
                    i.jsxs)(k, {
                        style: {
                            color: "white"
                        },
                        children: [(0,
                        i.jsx)(a.T6, {
                            med: !0,
                            style: {
                                margin: 0
                            },
                            children: t("nerdMode")
                        }), (0,
                        i.jsxs)(C, {
                            children: [(0,
                            i.jsx)(u.Z, {
                                name: "copy",
                                onClick: () => (function() {
                                    var e, n, i, o;
                                    return e = this,
                                    n = void 0,
                                    i = void 0,
                                    o = function*() {
                                        let e = "";
                                        Y(U + 1),
                                        q.forEach( (n, i) => {
                                            e += "".concat(t(i), " : ").concat(n, "\n")
                                        }
                                        );
                                        try {
                                            yield navigator.clipboard.writeText(e),
                                            J(!0),
                                            setTimeout( () => {
                                                J(!1)
                                            }
                                            , 2e3)
                                        } catch (e) {}
                                    }
                                    ,
                                    new (i || (i = Promise))(function(t, r) {
                                        function a(e) {
                                            try {
                                                d(o.next(e))
                                            } catch (e) {
                                                r(e)
                                            }
                                        }
                                        function c(e) {
                                            try {
                                                d(o.throw(e))
                                            } catch (e) {
                                                r(e)
                                            }
                                        }
                                        function d(e) {
                                            var n;
                                            e.done ? t(e.value) : ((n = e.value)instanceof i ? n : new i(function(e) {
                                                e(n)
                                            }
                                            )).then(a, c)
                                        }
                                        d((o = o.apply(e, n || [])).next())
                                    }
                                    )
                                }
                                )(),
                                size: 18
                            }), (0,
                            i.jsx)(u.Z, {
                                name: "divider",
                                size: 18
                            }), (0,
                            i.jsx)(u.Z, {
                                id: "ng-nerd-close",
                                name: "cross-thin",
                                onClick: () => void (Y(0),
                                clearInterval(ee.current),
                                G(e => {
                                    let t = new Map(e);
                                    return t.delete("frames"),
                                    t.delete("viewport"),
                                    t.delete("devicePixelRatio"),
                                    t
                                }
                                ),
                                y(e => e.filter(e => "frames" !== e && "viewport" !== e && "devicePixelRatio" !== e)),
                                n({
                                    type: l.Z.START_CONNECTION,
                                    payload: {
                                        isNerdMode: !1
                                    }
                                })),
                                size: 18
                            })]
                        })]
                    }), (0,
                    i.jsx)(j, {
                        children: t("nerdModeDescription")
                    }), (0,
                    i.jsx)(S, {}), v.map(e => {
                        var n, o;
                        return (0,
                        i.jsxs)(I, {
                            children: [(0,
                            i.jsx)(a.mH, {
                                style: {
                                    textAlign: "right",
                                    margin: 0,
                                    fontWeight: 400
                                },
                                children: t(e)
                            }), (0,
                            i.jsx)("div", {
                                children: ":"
                            }), (0,
                            i.jsx)(a.mH, {
                                ...(n = "connectionState" === e,
                                o = q.get(e),
                                n ? "connected" === o ? {
                                    lightGreen: !0
                                } : {
                                    red: !0
                                } : {}),
                                style: {
                                    letterSpacing: "0.05em",
                                    opacity: .8,
                                    margin: 0
                                },
                                children: q.get(e) || ""
                            })]
                        }, e)
                    }
                    ), (0,
                    i.jsxs)("div", {
                        style: {
                            color: "white",
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "10px 0px 0"
                        },
                        children: [(0,
                        i.jsx)(a.mH, {
                            style: {
                                margin: 0,
                                fontSize: 11,
                                fontWeight: 400
                            },
                            children: (0,
                            i.jsx)("strong", {
                                children: t("tp.toggle")
                            })
                        }), (0,
                        i.jsxs)(T, {
                            id: "ng-touch-points",
                            style: {
                                pointerEvents: "auto"
                            },
                            children: [(0,
                            i.jsx)("input", {
                                type: "checkbox",
                                checked: F,
                                onChange: () => er(F)
                            }), (0,
                            i.jsx)("span", {})]
                        })]
                    }), U >= 7 && (0,
                    i.jsxs)("div", {
                        style: {
                            marginTop: "8px"
                        },
                        children: [(0,
                        i.jsx)(S, {}), (0,
                        i.jsxs)(Z, {
                            children: [(0,
                            i.jsxs)("div", {
                                children: [(0,
                                i.jsx)(a.mH, {
                                    style: {
                                        opacity: .8,
                                        margin: 0
                                    },
                                    children: t("video")
                                }), Q.map(e => (0,
                                i.jsxs)(R, {
                                    children: [(0,
                                    i.jsx)(a.mH, {
                                        style: {
                                            margin: 0
                                        },
                                        children: t(e)
                                    }), " ", (0,
                                    i.jsx)("div", {
                                        children: ":"
                                    }), " ", (0,
                                    i.jsx)(a.mH, {
                                        style: {
                                            opacity: .8,
                                            margin: 0
                                        },
                                        children: q.get(W.get(e) || "")
                                    })]
                                }))]
                            }), (0,
                            i.jsxs)("div", {
                                children: [(0,
                                i.jsx)(a.mH, {
                                    style: {
                                        opacity: .8,
                                        margin: 0
                                    },
                                    children: t("audio")
                                }), Q.map(e => (0,
                                i.jsxs)(R, {
                                    children: [(0,
                                    i.jsx)(a.mH, {
                                        style: {
                                            margin: 0
                                        },
                                        children: t(e)
                                    }), " ", (0,
                                    i.jsx)("div", {
                                        children: ":"
                                    }), " ", (0,
                                    i.jsx)(a.mH, {
                                        style: {
                                            opacity: .8,
                                            margin: 0
                                        },
                                        children: q.get(O.get(e) || "")
                                    })]
                                }))]
                            })]
                        })]
                    })]
                })]
            })
        }
        ;
        var N = H
    }
}]);
//# sourceMappingURL=7078.03ab9d37f05d438e.js.map
