"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[309, 2499], {
    12499: function(t, n, i) {
        i.d(n, {
            Hl: function() {
                return c
            },
            Z0: function() {
                return x
            },
            a5: function() {
                return s
            },
            i7: function() {
                return u
            },
            pI: function() {
                return l
            },
            zi: function() {
                return f
            }
        });
        var o = i(76097)
          , e = i(12846)
          , r = i(57833);
        (0,
        r.F4)(["20%{background-position:0%   0%,50%  50%,100%  50%}40%{background-position:0% 100%,50%   0%,100%  50%}60%{background-position:0%  50%,50% 100%,100%   0%}80%{background-position:0%  50%,50%  50%,100% 100%}"]);
        let a = (0,
        r.F4)(["0%{bottom:0px;}100%{bottom:-100%;}"])
          , p = (0,
        r.F4)(["0%{opacity:0;}100%{opacity:1;}"])
          , d = (0,
        r.F4)(["0%{opacity:1;bottom:26px;}100%{opacity:0;bottom:-100%;}"])
          , c = r.ZP.div.withConfig({
            componentId: "sc-60c30d59-0"
        })(["display:flex;width:284px;top:1%;right:22px;height:auto;position:fixed;flex-direction:column;align-items:flex-start;justify-content:flex-end;gap:12px;border-radius:16px;background:linear-gradient(270deg,#834AFF 0%,#00A7C9 99.48%);background:linear-gradient(270deg,color(display-p3 0.482 0.3 1) 0%,color(display-p3 0.0533 0.6424 0.7717) 99.48%));color:", ";backdrop-filter:blur(60px);z-index:-1;padding:12px;p{margin-right:40px;}", " &.ana-spectating{border-radius:", ";width:", ";height:auto;min-height:48px;padding:4px;padding-right:", ";padding-left:8px;gap:8px;right:", ";top:", ";;flex-direction:row;align-items:center;p{margin-right:8px;max-width:260px;line-break:auto;flex:1;}background:linear-gradient(0deg,rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.20) 100%),linear-gradient(270deg,#834AFF 0%,#00A7C9 99.48%);backdrop-filter:blur(12px);", " ", " ", "}@media (max-width:1023px){right:0px;top:unset;transform:translate(-28px,-40px);}&.mobile-slide-up{opacity:0;animation-name:", ";animation-duration:0.10s;animation-delay:0s;animation-fill-mode:forwards;}&.mobile-slide-down{opacity:1;bottom:0px;animation-name:", ";animation-duration:0.4s;animation-fill-mode:forwards;}&.slide-up{opacity:0;animation-name:", ";animation-duration:0.4s;animation-delay:0.2s;animation-fill-mode:forwards;}&.slide-down{opacity:1;bottom:26px;animation-name:", ";animation-duration:0.4s;animation-fill-mode:forwards;}"], t => {
            let {theme: n} = t;
            return n.colors.white
        }
        , t => {
            let {refreshBtnVisible: n} = t;
            return n && (0,
            r.iv)(["right:82px;"])
        }
        , t => {
            let {isMobileMenu: n} = t;
            return n ? "60px" : "60px 0px 0px 60px"
        }
        , t => {
            let {isMobileMenu: n} = t;
            return n ? "384px" : "420px"
        }
        , t => {
            let {isMobileMenu: n} = t;
            return n ? "8px" : "21px"
        }
        , t => {
            let {isMobileMenu: n} = t;
            return n ? "unset" : "58px"
        }
        , t => {
            let {isMobileMenu: n} = t;
            return n ? "unset" : "8px"
        }
        , t => {
            let {refreshBtnVisible: n} = t;
            return n && (0,
            r.iv)(["right:118px;"])
        }
        , t => {
            let {isMobileMenu: n} = t;
            return n && (0,
            r.iv)(["transform:translateY(-50%);"])
        }
        , t => {
            let {isMobileMenu: n} = t;
            return !n && (0,
            r.iv)(["@media (max-width:1023px){bottom:-16px;border-radius:60px;right:60px;top:unset;}"])
        }
        , p, a, p, d)
          , l = r.ZP.div.withConfig({
            componentId: "sc-60c30d59-1"
        })(["display:flex;flex-direction:row;gap:10px;width:100%;justify-content:end;button{width:54px;height:32px;border-radius:6px;box-shadow:unset;}", ""], t => {
            let {mobileMenu: n} = t;
            return !n && (0,
            r.iv)(["@media (max-width:1023px){flex-direction:row-reverse;justify-content:left;}"])
        }
        )
          , s = r.ZP.div.withConfig({
            componentId: "sc-60c30d59-2"
        })(["width:32px;height:32px;display:flex;padding:4px;cursor:pointer;align-items:center;justify-content:center;img{width:16px;height:16px;}&.rounded{border-radius:50%;background:rgba(0,0,0,0.15);box-shadow:0px 8px 16px 0px ", ";padding:8px;&:hover{background:", ";}}&:hover::before{top:unset !important;transform:translate(0%,calc(50% + 24px)) !important;max-width:80px !important;text-wrap:pretty !important;text-align:center !important;}&.yes{", "}&.no{", "}&.close{", "}&.mute{", "}&.unmute{", "}&.messages{", "}"], t => {
            let {theme: n} = t;
            return n.colors.black10
        }
        , t => {
            let {theme: n} = t;
            return n.colors.black20
        }
        , (0,
        o.gB)(e.ZP.t("yes"), !1, !0), (0,
        o.gB)(e.ZP.t("no"), !1, !0), (0,
        o.gB)(e.ZP.t("close"), !1, !0), (0,
        o.gB)(e.ZP.t("anaMute"), !1, !0), (0,
        o.gB)(e.ZP.t("anaUnmute"), !1, !0), (0,
        o.gB)(e.ZP.t("showAnaMessages"), !1, !0))
          , u = r.ZP.div.withConfig({
            componentId: "sc-60c30d59-3"
        })(["display:flex;flex-direction:row;gap:4px;align-items:center;justify-content:center;width:100%;"])
          , x = r.ZP.div.withConfig({
            componentId: "sc-60c30d59-4"
        })(["align-self:center;height:16px;width:1px;margin:0 4px;background:", ";"], t => {
            let {theme: n} = t;
            return n.colors.white10
        }
        )
          , f = r.ZP.div.withConfig({
            componentId: "sc-60c30d59-5"
        })(["display:flex;flex-direction:row;gap:4px;align-items:center;justify-content:center;width:100%;border-radius:16px;cursor:pointer;&:hover{background:", ";}"], t => {
            let {theme: n} = t;
            return n.colors.white10
        }
        )
    },
    59949: function(t, n, i) {
        i.d(n, {
            $S: function() {
                return d
            },
            GN: function() {
                return s
            },
            Ls: function() {
                return x
            },
            NM: function() {
                return p
            },
            W2: function() {
                return l
            },
            az: function() {
                return c
            },
            il: function() {
                return a
            },
            r2: function() {
                return r
            }
        });
        var o = i(57833)
          , e = i(1857);
        let r = (0,
        o.iv)(["z-index:50;"])
          , a = t => (0,
        o.iv)(["border:1px solid ", ";backdrop-filter:blur(60px);max-width:409px;width:100%;@media only screen and (min-width:768px){position:absolute;top:4px;left:134px;}"], t.colors.white10)
          , p = (0,
        o.ZP)(e.T5).withConfig({
            componentId: "sc-fb66f565-0"
        })(["color:", ";margin:0;"], t => {
            let {theme: n} = t;
            return n.colors.white
        }
        )
          , d = (0,
        o.ZP)(e.kk).withConfig({
            componentId: "sc-fb66f565-1"
        })(["color:", ";margin:12px 0 0;"], t => {
            let {theme: n} = t;
            return n.colors.white
        }
        )
          , c = o.ZP.span.withConfig({
            componentId: "sc-fb66f565-2"
        })(["color:", ";"], t => {
            let {theme: n} = t;
            return n.colors.white80
        }
        )
          , l = o.ZP.div.withConfig({
            componentId: "sc-fb66f565-3"
        })(["display:flex;padding:12px;"])
          , s = o.ZP.div.withConfig({
            componentId: "sc-fb66f565-4"
        })(["display:flex;flex-direction:column;justify-content:center;"])
          , u = (0,
        o.F4)(["0%{opacity:0;}50%{opacity:0;}100%{opacity:1;}"])
          , x = o.ZP.div.withConfig({
            componentId: "sc-fb66f565-5"
        })(["display:flex;justify-content:flex-end;gap:10px;margin-top:30px;animation-name:", ";animation-duration:1.5s;animation-fill-mode:forwards;opacity:0;"], u)
    }
}]);
//# sourceMappingURL=309.224352493b88e974.js.map
