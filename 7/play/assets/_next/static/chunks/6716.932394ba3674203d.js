"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6716], {
    36716: function(e, t) {
        var n;
        function i() {}
        function r() {
            r.init.call(this)
        }
        function o(e) {
            return void 0 === e._maxListeners ? r.defaultMaxListeners : e._maxListeners
        }
        function s(e, t, n, r) {
            var s, a, d;
            if ("function" != typeof n)
                throw TypeError('"listener" argument must be a function');
            if ((a = e._events) ? (a.newListener && (e.emit("newListener", t, n.listener ? n.listener : n),
            a = e._events),
            d = a[t]) : (a = e._events = new i,
            e._eventsCount = 0),
            d) {
                if ("function" == typeof d ? d = a[t] = r ? [n, d] : [d, n] : r ? d.unshift(n) : d.push(n),
                !d.warned && (s = o(e)) && 0 < s && d.length > s) {
                    d.warned = !0;
                    var c = Error("Possible EventEmitter memory leak detected. " + d.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    c.name = "MaxListenersExceededWarning",
                    c.emitter = e,
                    c.type = t,
                    c.count = d.length,
                    "function" == typeof console.warn ? console.warn(c) : console.log(c)
                }
            } else
                d = a[t] = n,
                ++e._eventsCount;
            return e
        }
        function a(e, t, n) {
            function i() {
                e.removeListener(t, i),
                r || (r = !0,
                n.apply(e, arguments))
            }
            var r = !1;
            return i.listener = n,
            i
        }
        function d(e) {
            var t = this._events;
            if (t) {
                var n = t[e];
                if ("function" == typeof n)
                    return 1;
                if (n)
                    return n.length
            }
            return 0
        }
        function c(e, t) {
            for (var n = Array(t); t--; )
                n[t] = e[t];
            return n
        }
        function l(e, t) {
            if (!e || !t)
                return {};
            let n = {
                ...e
            };
            if (n.localCandidateId) {
                let e = t.get(n.localCandidateId);
                n.local = {
                    ...e
                }
            }
            if (n.remoteCandidateId) {
                let e = t.get(n.remoteCandidateId);
                n.remote = {
                    ...e
                }
            }
            return n
        }
        function u(e, t, n) {
            return 8 * function(e, t, n) {
                let i = e[n]
                  , r = t ? t[n] : null;
                return null === i || null === r ? null : (i - r) / (e.timestamp - t.timestamp) * 1e3
            }(e, t, n)
        }
        i.prototype = Object.create(null),
        r.EventEmitter = r,
        r.usingDomains = !1,
        r.prototype.domain = void 0,
        r.prototype._events = void 0,
        r.prototype._maxListeners = void 0,
        r.defaultMaxListeners = 10,
        r.init = function() {
            this.domain = null,
            !r.usingDomains || !n.active || this instanceof n.Domain || (this.domain = n.active),
            this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new i,
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        r.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || 0 > e || isNaN(e))
                throw TypeError('"n" argument must be a positive number');
            return this._maxListeners = e,
            this
        }
        ,
        r.prototype.getMaxListeners = function() {
            return o(this)
        }
        ,
        r.prototype.emit = function(e) {
            var t, n, i, r, o, s, a, d = "error" === e;
            if (s = this._events)
                d = d && null == s.error;
            else if (!d)
                return !1;
            if (a = this.domain,
            d) {
                if (t = arguments[1],
                a)
                    t || (t = Error('Uncaught, unspecified "error" event')),
                    t.domainEmitter = this,
                    t.domain = a,
                    t.domainThrown = !1,
                    a.emit("error", t);
                else if (t instanceof Error)
                    throw t;
                else {
                    var l = Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw l.context = t,
                    l
                }
                return !1
            }
            if (!(n = s[e]))
                return !1;
            var u = "function" == typeof n;
            switch (i = arguments.length) {
            case 1:
                !function(e, t, n) {
                    if (t)
                        e.call(n);
                    else
                        for (var i = e.length, r = c(e, i), o = 0; o < i; ++o)
                            r[o].call(n)
                }(n, u, this);
                break;
            case 2:
                !function(e, t, n, i) {
                    if (t)
                        e.call(n, i);
                    else
                        for (var r = e.length, o = c(e, r), s = 0; s < r; ++s)
                            o[s].call(n, i)
                }(n, u, this, arguments[1]);
                break;
            case 3:
                !function(e, t, n, i, r) {
                    if (t)
                        e.call(n, i, r);
                    else
                        for (var o = e.length, s = c(e, o), a = 0; a < o; ++a)
                            s[a].call(n, i, r)
                }(n, u, this, arguments[1], arguments[2]);
                break;
            case 4:
                !function(e, t, n, i, r, o) {
                    if (t)
                        e.call(n, i, r, o);
                    else
                        for (var s = e.length, a = c(e, s), d = 0; d < s; ++d)
                            a[d].call(n, i, r, o)
                }(n, u, this, arguments[1], arguments[2], arguments[3]);
                break;
            default:
                for (r = Array(i - 1),
                o = 1; o < i; o++)
                    r[o - 1] = arguments[o];
                !function(e, t, n, i) {
                    if (t)
                        e.apply(n, i);
                    else
                        for (var r = e.length, o = c(e, r), s = 0; s < r; ++s)
                            o[s].apply(n, i)
                }(n, u, this, r)
            }
            return !0
        }
        ,
        r.prototype.addListener = function(e, t) {
            return s(this, e, t, !1)
        }
        ,
        r.prototype.on = r.prototype.addListener,
        r.prototype.prependListener = function(e, t) {
            return s(this, e, t, !0)
        }
        ,
        r.prototype.once = function(e, t) {
            if ("function" != typeof t)
                throw TypeError('"listener" argument must be a function');
            return this.on(e, a(this, e, t)),
            this
        }
        ,
        r.prototype.prependOnceListener = function(e, t) {
            if ("function" != typeof t)
                throw TypeError('"listener" argument must be a function');
            return this.prependListener(e, a(this, e, t)),
            this
        }
        ,
        r.prototype.removeListener = function(e, t) {
            var n, r, o, s, a;
            if ("function" != typeof t)
                throw TypeError('"listener" argument must be a function');
            if (!(r = this._events) || !(n = r[e]))
                return this;
            if (n === t || n.listener && n.listener === t)
                0 == --this._eventsCount ? this._events = new i : (delete r[e],
                r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" != typeof n) {
                for (o = -1,
                s = n.length; 0 < s--; )
                    if (n[s] === t || n[s].listener && n[s].listener === t) {
                        a = n[s].listener,
                        o = s;
                        break
                    }
                if (0 > o)
                    return this;
                if (1 === n.length) {
                    if (n[0] = void 0,
                    0 == --this._eventsCount)
                        return this._events = new i,
                        this;
                    delete r[e]
                } else
                    (function(e, t) {
                        for (var n = t, i = n + 1, r = e.length; i < r; n += 1,
                        i += 1)
                            e[n] = e[i];
                        e.pop()
                    }
                    )(n, o);
                r.removeListener && this.emit("removeListener", e, a || t)
            }
            return this
        }
        ,
        r.prototype.removeAllListeners = function(e) {
            var t, n;
            if (!(n = this._events))
                return this;
            if (!n.removeListener)
                return 0 == arguments.length ? (this._events = new i,
                this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = new i : delete n[e]),
                this;
            if (0 == arguments.length) {
                for (var r, o = Object.keys(n), s = 0; s < o.length; ++s)
                    "removeListener" !== (r = o[s]) && this.removeAllListeners(r);
                return this.removeAllListeners("removeListener"),
                this._events = new i,
                this._eventsCount = 0,
                this
            }
            if ("function" == typeof (t = n[e]))
                this.removeListener(e, t);
            else if (t)
                do
                    this.removeListener(e, t[t.length - 1]);
                while (t[0]);
            return this
        }
        ,
        r.prototype.listeners = function(e) {
            var t, n = this._events;
            return n && (t = n[e]) ? "function" == typeof t ? [t.listener || t] : function(e) {
                for (var t = Array(e.length), n = 0; n < t.length; ++n)
                    t[n] = e[n].listener || e[n];
                return t
            }(t) : []
        }
        ,
        r.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : d.call(e, t)
        }
        ,
        r.prototype.listenerCount = d,
        r.prototype.eventNames = function() {
            return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : []
        }
        ;
        class h extends r {
            constructor(e) {
                if (super(),
                this.monitoringSetInterval = 0,
                this.connectionMonitoringSetInterval = 0,
                this.connectionMonitoringInterval = 1e3,
                this.remote = !0,
                this.peersToMonitor = {},
                this.timeline = [],
                this.statsToMonitor = ["inbound-rtp", "outbound-rtp", "remote-inbound-rtp", "remote-outbound-rtp", "peer-connection", "data-channel", "stream", "track", "sender", "receiver", "transport", "candidate-pair", "local-candidate", "remote-candidate"],
                "undefined" == typeof window)
                    throw Error("WebRTCStats only works in browser");
                let t = {
                    ...e
                };
                this.isEdge = !!window.RTCIceGatherer,
                this.getStatsInterval = t.getStatsInterval || 1e3,
                this.rawStats = !!t.rawStats,
                this.statsObject = !!t.statsObject,
                this.filteredStats = !!t.filteredStats,
                this.shouldWrapGetUserMedia = !!t.wrapGetUserMedia,
                "boolean" == typeof t.remote && (this.remote = t.remote),
                this.debug = !!t.debug,
                this.logLevel = t.logLevel || "none",
                this.shouldWrapGetUserMedia && this.wrapGetUserMedia()
            }
            async addPeer(e) {
                let {pc: t, peerId: n} = e
                  , {remote: i} = e;
                if (i = "boolean" == typeof i ? i : this.remote,
                !t || !(t instanceof RTCPeerConnection))
                    throw Error("Missing argument 'pc' or is not of instance RTCPeerConnection");
                if (!n)
                    throw Error("Missing argument peerId");
                if (this.isEdge)
                    throw Error("Can't monitor peers in Edge at this time.");
                if (this.peersToMonitor[n]) {
                    if ("closed" === this.peersToMonitor[n].pc.connectionState)
                        this.removePeer(n);
                    else
                        throw Error(`We are already monitoring peer with id ${n}.`)
                }
                let r = t.getConfiguration();
                r.iceServers && r.iceServers.forEach(function(e) {
                    delete e.credential
                }),
                this.emitEvent({
                    event: "addPeer",
                    tag: "peer",
                    peerId: n,
                    data: {
                        options: e,
                        peerConfiguration: r
                    }
                }),
                this.monitorPeer(n, t, {
                    remote: i
                })
            }
            getTimeline(e) {
                return (this.timeline = this.timeline.sort( (e, t) => e.timestamp.getTime() - t.timestamp.getTime()),
                e) ? this.timeline.filter(t => t.tag === e) : this.timeline
            }
            monitorPeer(e, t, n) {
                t && (this.peersToMonitor[e] = {
                    pc: t,
                    stream: null,
                    stats: {
                        parsed: null,
                        raw: null
                    },
                    options: n
                },
                this.addPeerConnectionEventListeners(e, t),
                1 === Object.keys(this.peersToMonitor).length && (this.startStatsMonitoring(),
                this.startConnectionStateMonitoring()))
            }
            startStatsMonitoring() {
                this.monitoringSetInterval || (this.monitoringSetInterval = window.setInterval( () => {
                    Object.keys(this.peersToMonitor).length || this.stopStatsMonitoring(),
                    this.getStats().then(e => {
                        e.forEach(e => {
                            this.emitEvent(e)
                        }
                        )
                    }
                    )
                }
                , this._getStatsInterval))
            }
            stopStatsMonitoring() {
                this.monitoringSetInterval && (window.clearInterval(this.monitoringSetInterval),
                this.monitoringSetInterval = 0)
            }
            async getStats(e=null) {
                this.logger.info(e ? `Getting stats from peer ${e}` : "Getting stats from all peers");
                let t = {};
                if (e) {
                    if (t[e] = this.peersToMonitor[e],
                    !t[e])
                        throw Error(`Cannot get stats. Peer with id ${e} does not exist`)
                } else
                    t = this.peersToMonitor;
                let n = [];
                for (let e in t) {
                    let t = this.peersToMonitor[e]
                      , i = t.pc;
                    if (!(!i || this.isConnectionClosed(e, i)))
                        try {
                            let r = i.getStats(null);
                            if (r) {
                                let i = await r
                                  , o = function(e) {
                                    if (!e.entries)
                                        return e;
                                    let t = {};
                                    return e.forEach(function(e, n) {
                                        t[n] = e
                                    }),
                                    t
                                }(i)
                                  , s = {
                                    remote: t.options.remote
                                }
                                  , a = function(e, t, n={}) {
                                    var i;
                                    if (!e)
                                        return null;
                                    let r = {
                                        audio: {
                                            inbound: [],
                                            outbound: []
                                        },
                                        video: {
                                            inbound: [],
                                            outbound: []
                                        },
                                        connection: {
                                            inbound: [],
                                            outbound: []
                                        }
                                    };
                                    for (let t of (n.remote && (r.remote = {
                                        audio: {
                                            inbound: [],
                                            outbound: []
                                        },
                                        video: {
                                            inbound: [],
                                            outbound: []
                                        }
                                    }),
                                    e.values()))
                                        switch (t.type) {
                                        case "outbound-rtp":
                                            {
                                                let n = t.mediaType || t.kind
                                                  , i = {};
                                                if (!["audio", "video"].includes(n))
                                                    continue;
                                                if (t.codecId) {
                                                    let n = e.get(t.codecId);
                                                    n && (i.clockRate = n.clockRate,
                                                    i.mimeType = n.mimeType,
                                                    i.payloadType = n.payloadType)
                                                }
                                                r[n].outbound.push({
                                                    ...t,
                                                    ...i
                                                });
                                                break
                                            }
                                        case "inbound-rtp":
                                            {
                                                let n = t.mediaType || t.kind
                                                  , i = {};
                                                if (!["audio", "video"].includes(n)) {
                                                    if (t.id.includes("Video"))
                                                        n = "video";
                                                    else {
                                                        if (!t.id.includes("Audio"))
                                                            continue;
                                                        n = "audio"
                                                    }
                                                }
                                                if (t.codecId) {
                                                    let n = e.get(t.codecId);
                                                    n && (i.clockRate = n.clockRate,
                                                    i.mimeType = n.mimeType,
                                                    i.payloadType = n.payloadType)
                                                }
                                                if (!r.connection.id && t.transportId) {
                                                    let n = e.get(t.transportId);
                                                    if (n && n.selectedCandidatePairId) {
                                                        let t = e.get(n.selectedCandidatePairId);
                                                        r.connection = l(t, e)
                                                    }
                                                }
                                                r[n].inbound.push({
                                                    ...t,
                                                    ...i
                                                });
                                                break
                                            }
                                        case "peer-connection":
                                            r.connection.dataChannelsClosed = t.dataChannelsClosed,
                                            r.connection.dataChannelsOpened = t.dataChannelsOpened;
                                            break;
                                        case "remote-inbound-rtp":
                                            {
                                                if (!n.remote)
                                                    break;
                                                let i = t.mediaType || t.kind
                                                  , o = {};
                                                if (!["audio", "video"].includes(i)) {
                                                    if (t.id.includes("Video"))
                                                        i = "video";
                                                    else {
                                                        if (!t.id.includes("Audio"))
                                                            continue;
                                                        i = "audio"
                                                    }
                                                }
                                                if (t.codecId) {
                                                    let n = e.get(t.codecId);
                                                    n && (o.clockRate = n.clockRate,
                                                    o.mimeType = n.mimeType,
                                                    o.payloadType = n.payloadType)
                                                }
                                                if (!r.connection.id && t.transportId) {
                                                    let n = e.get(t.transportId);
                                                    if (n && n.selectedCandidatePairId) {
                                                        let t = e.get(n.selectedCandidatePairId);
                                                        r.connection = l(t, e)
                                                    }
                                                }
                                                r.remote[i].inbound.push({
                                                    ...t,
                                                    ...o
                                                });
                                                break
                                            }
                                        case "remote-outbound-rtp":
                                            {
                                                if (!n.remote)
                                                    break;
                                                let i = t.mediaType || t.kind
                                                  , o = {};
                                                if (!["audio", "video"].includes(i))
                                                    continue;
                                                if (t.codecId) {
                                                    let n = e.get(t.codecId);
                                                    n && (o.clockRate = n.clockRate,
                                                    o.mimeType = n.mimeType,
                                                    o.payloadType = n.payloadType)
                                                }
                                                r.remote[i].outbound.push({
                                                    ...t,
                                                    ...o
                                                })
                                            }
                                        }
                                    if (!r.connection.id)
                                        for (let t of e.values())
                                            "candidate-pair" === t.type && t.nominated && "succeeded" === t.state && (r.connection = l(t, e));
                                    return i = r,
                                    t && (i.audio.inbound.map(e => {
                                        let n = t.audio.inbound.find(t => t.id === e.id);
                                        e.bitrate = u(e, n, "bytesReceived"),
                                        e.packetRate = u(e, n, "packetsReceived")
                                    }
                                    ),
                                    i.audio.outbound.map(e => {
                                        let n = t.audio.outbound.find(t => t.id === e.id);
                                        e.bitrate = u(e, n, "bytesSent"),
                                        e.packetRate = u(e, n, "packetsSent")
                                    }
                                    ),
                                    i.video.inbound.map(e => {
                                        let n = t.video.inbound.find(t => t.id === e.id);
                                        e.bitrate = u(e, n, "bytesReceived"),
                                        e.packetRate = u(e, n, "packetsReceived")
                                    }
                                    ),
                                    i.video.outbound.map(e => {
                                        let n = t.video.outbound.find(t => t.id === e.id);
                                        e.bitrate = u(e, n, "bytesSent"),
                                        e.packetRate = u(e, n, "packetsSent")
                                    }
                                    )),
                                    r = i
                                }(i, t.stats.parsed, s)
                                  , d = {
                                    event: "stats",
                                    tag: "stats",
                                    peerId: e,
                                    data: a
                                };
                                !0 === this.rawStats && (d.rawStats = i),
                                !0 === this.statsObject && (d.statsObject = o),
                                !0 === this.filteredStats && (d.filteredStats = this.filteroutStats(o)),
                                n.push(d),
                                t.stats.parsed = a
                            } else
                                this.logger.error(`PeerConnection from peer ${e} did not return any stats data`)
                        } catch (e) {
                            this.logger.error(e)
                        }
                }
                return n
            }
            startConnectionStateMonitoring() {
                this.connectionMonitoringSetInterval = window.setInterval( () => {
                    for (let e in Object.keys(this.peersToMonitor).length || this.stopConnectionStateMonitoring(),
                    this.peersToMonitor) {
                        let t = this.peersToMonitor[e].pc;
                        this.isConnectionClosed(e, t)
                    }
                }
                , this.connectionMonitoringInterval)
            }
            isConnectionClosed(e, t) {
                if ("closed" === t.connectionState || "closed" === t.iceConnectionState) {
                    let n = "closed" === t.connectionState ? "onconnectionstatechange" : "oniceconnectionstatechange";
                    return this.emitEvent({
                        event: n,
                        tag: "connection",
                        peerId: e,
                        data: "closed"
                    }),
                    this.removePeer(e),
                    !0
                }
                return !1
            }
            stopConnectionStateMonitoring() {
                this.connectionMonitoringSetInterval && (window.clearInterval(this.connectionMonitoringSetInterval),
                this.connectionMonitoringSetInterval = 0)
            }
            wrapGetUserMedia() {
                if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                    this.logger.warn("'navigator.mediaDevices.getUserMedia' is not available in browser. Will not wrap getUserMedia.");
                    return
                }
                this.logger.info("Wrapping getUsermedia functions.");
                let e = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices)
                  , t = this.parseGetUserMedia.bind(this);
                navigator.mediaDevices.getUserMedia = (function() {
                    return t({
                        constraints: arguments[0]
                    }),
                    e.apply(navigator.mediaDevices, arguments).then(e => (t({
                        stream: e
                    }),
                    e), e => (t({
                        error: e
                    }),
                    Promise.reject(e)))
                }
                ).bind(navigator.mediaDevices)
            }
            filteroutStats(e={}) {
                let t = {
                    ...e
                };
                for (let e in t) {
                    var n = t[e];
                    this.statsToMonitor.includes(n.type) || delete t[e]
                }
                return t
            }
            get peerConnectionListeners() {
                return {
                    icecandidate: (e, t, n) => {
                        this.logger.debug("[pc-event] icecandidate | peerId: ${peerId}", n),
                        this.emitEvent({
                            event: "onicecandidate",
                            tag: "connection",
                            peerId: e,
                            data: n.candidate
                        })
                    }
                    ,
                    track: (e, t, n) => {
                        this.logger.debug(`[pc-event] track | peerId: ${e}`, n);
                        let i = n.track
                          , r = n.streams[0];
                        this.peersToMonitor[e].stream = r,
                        this.addTrackEventListeners(i),
                        this.emitEvent({
                            event: "ontrack",
                            tag: "track",
                            peerId: e,
                            data: {
                                stream: r ? this.getStreamDetails(r) : null,
                                track: i ? this.getMediaTrackDetails(i) : null,
                                title: n.track.kind + ":" + n.track.id + " " + n.streams.map(function(e) {
                                    return "stream:" + e.id
                                })
                            }
                        })
                    }
                    ,
                    signalingstatechange: (e, t) => {
                        this.logger.debug(`[pc-event] signalingstatechange | peerId: ${e}`),
                        this.emitEvent({
                            event: "onsignalingstatechange",
                            tag: "connection",
                            peerId: e,
                            data: {
                                signalingState: t.signalingState,
                                localDescription: t.localDescription,
                                remoteDescription: t.remoteDescription
                            }
                        })
                    }
                    ,
                    iceconnectionstatechange: (e, t) => {
                        this.logger.debug(`[pc-event] iceconnectionstatechange | peerId: ${e}`),
                        this.emitEvent({
                            event: "oniceconnectionstatechange",
                            tag: "connection",
                            peerId: e,
                            data: t.iceConnectionState
                        })
                    }
                    ,
                    icegatheringstatechange: (e, t) => {
                        this.logger.debug(`[pc-event] icegatheringstatechange | peerId: ${e}`),
                        this.emitEvent({
                            event: "onicegatheringstatechange",
                            tag: "connection",
                            peerId: e,
                            data: t.iceGatheringState
                        })
                    }
                    ,
                    icecandidateerror: (e, t, n) => {
                        this.logger.debug(`[pc-event] icecandidateerror | peerId: ${e}`),
                        this.emitEvent({
                            event: "onicecandidateerror",
                            tag: "connection",
                            peerId: e,
                            error: {
                                errorCode: n.errorCode
                            }
                        })
                    }
                    ,
                    connectionstatechange: (e, t) => {
                        this.logger.debug(`[pc-event] connectionstatechange | peerId: ${e}`),
                        this.emitEvent({
                            event: "onconnectionstatechange",
                            tag: "connection",
                            peerId: e,
                            data: t.connectionState
                        })
                    }
                    ,
                    negotiationneeded: (e, t) => {
                        this.logger.debug(`[pc-event] negotiationneeded | peerId: ${e}`),
                        this.emitEvent({
                            event: "onnegotiationneeded",
                            tag: "connection",
                            peerId: e
                        })
                    }
                    ,
                    datachannel: (e, t, n) => {
                        this.logger.debug(`[pc-event] datachannel | peerId: ${e}`, n),
                        this.emitEvent({
                            event: "ondatachannel",
                            tag: "datachannel",
                            peerId: e,
                            data: n.channel
                        })
                    }
                }
            }
            addPeerConnectionEventListeners(e, t) {
                this.logger.info(`Adding new peer with ID ${e}.`),
                this.logger.debug("Newly added PeerConnection", t),
                Object.keys(this.peerConnectionListeners).forEach(n => {
                    t.addEventListener(n, this.peerConnectionListeners[n].bind(this, e, t), !1)
                }
                )
            }
            parseGetUserMedia(e) {
                let t = {
                    event: "getUserMedia",
                    tag: "getUserMedia",
                    data: {
                        ...e
                    }
                };
                e.stream && (t.data.details = this.parseStream(e.stream)),
                this.emitEvent(t)
            }
            parseStream(e) {
                let t = {
                    audio: [],
                    video: []
                };
                return e.getTracks().forEach(e => {
                    t[e.kind].push(this.getMediaTrackDetails(e))
                }
                ),
                t
            }
            getMediaTrackDetails(e) {
                return {
                    enabled: e.enabled,
                    id: e.id,
                    contentHint: e.contentHint,
                    kind: e.kind,
                    label: e.label,
                    muted: e.muted,
                    readyState: e.readyState,
                    constructorName: e.constructor.name,
                    capabilities: e.getCapabilities ? e.getCapabilities() : {},
                    constraints: e.getConstraints ? e.getConstraints() : {},
                    settings: e.getSettings ? e.getSettings() : {},
                    _track: e
                }
            }
            getStreamDetails(e) {
                return {
                    active: e.active,
                    id: e.id,
                    _stream: e
                }
            }
            addTrackEventListeners(e) {
                e.addEventListener("mute", e => {
                    this.emitEvent({
                        event: "mute",
                        tag: "track",
                        data: {
                            event: e
                        }
                    })
                }
                ),
                e.addEventListener("unmute", e => {
                    this.emitEvent({
                        event: "unmute",
                        tag: "track",
                        data: {
                            event: e
                        }
                    })
                }
                ),
                e.addEventListener("overconstrained", e => {
                    this.emitEvent({
                        event: "overconstrained",
                        tag: "track",
                        data: {
                            event: e
                        }
                    })
                }
                ),
                e.addEventListener("ended", e => {
                    this.emitEvent({
                        event: "ended",
                        tag: "track",
                        data: {
                            event: e
                        }
                    })
                }
                )
            }
            addToTimeline(e) {
                this.timeline.push(e),
                this.emit("timeline", e)
            }
            emitEvent(e) {
                let t = {
                    ...e,
                    timestamp: new Date
                };
                this.addToTimeline(t),
                t.tag && this.emit(t.tag, t)
            }
            set getStatsInterval(e) {
                if (!Number.isInteger(e))
                    throw Error(`getStatsInterval should be an integer, got: ${e}`);
                this._getStatsInterval = e,
                this.monitoringSetInterval && (this.stopStatsMonitoring(),
                this.startStatsMonitoring())
            }
            get logger() {
                let e = e => {
                    let t = ["none", "error", "warn", "info", "debug"];
                    return t.slice(0, t.indexOf(this.logLevel) + 1).indexOf(e) > -1
                }
                ;
                return {
                    error(...t) {
                        this.debug && e("error") && console.error("[webrtc-stats][error] ", ...t)
                    },
                    warn(...t) {
                        this.debug && e("warn") && console.warn("[webrtc-stats][warn] ", ...t)
                    },
                    info(...t) {
                        this.debug && e("info") && console.log("[webrtc-stats][info] ", ...t)
                    },
                    debug(...t) {
                        this.debug && e("debug") && console.debug("[webrtc-stats][debug] ", ...t)
                    }
                }
            }
            removePeer(e) {
                if (this.logger.info(`Removing PeerConnection with id ${e}.`),
                !this.peersToMonitor[e])
                    return;
                let t = this.peersToMonitor[e].pc;
                Object.keys(this.peerConnectionListeners).forEach(n => {
                    t.removeEventListener(n, this.peerConnectionListeners[n].bind(this, e, t), !1)
                }
                ),
                delete this.peersToMonitor[e]
            }
            wrapGetDisplayMedia() {
                let e = this;
                if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
                    let t = navigator.mediaDevices.getDisplayMedia.bind(navigator.mediaDevices);
                    navigator.mediaDevices.getDisplayMedia = (function() {
                        return e.debug("navigator.mediaDevices.getDisplayMedia", null, arguments[0]),
                        t.apply(navigator.mediaDevices, arguments).then(function(e) {
                            return e
                        }, function(t) {
                            return e.debug("navigator.mediaDevices.getDisplayMediaOnFailure", null, t.name),
                            Promise.reject(t)
                        })
                    }
                    ).bind(navigator.mediaDevices)
                }
            }
        }
        t.Q = h
    }
}]);
//# sourceMappingURL=6716.932394ba3674203d.js.map
