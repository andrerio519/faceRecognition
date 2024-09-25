/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!(function (t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(((t = "undefined" != typeof globalThis ? globalThis : t || self).leaflet = {}));
})(this, function (t) {
	"use strict";
	function l(t) {
		for (var e, i, n = 1, o = arguments.length; n < o; n++) for (e in (i = arguments[n])) t[e] = i[e];
		return t;
	}
	var R =
		Object.create ||
		function (t) {
			return (N.prototype = t), new N();
		};
	function N() {}
	function a(t, e) {
		var i,
			n = Array.prototype.slice;
		return t.bind
			? t.bind.apply(t, n.call(arguments, 1))
			: ((i = n.call(arguments, 2)),
			  function () {
					return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments);
			  });
	}
	var D = 0;
	function h(t) {
		return "_leaflet_id" in t || (t._leaflet_id = ++D), t._leaflet_id;
	}
	function j(t, e, i) {
		var n,
			o,
			s = function () {
				(n = !1), o && (r.apply(i, o), (o = !1));
			},
			r = function () {
				n ? (o = arguments) : (t.apply(i, arguments), setTimeout(s, e), (n = !0));
			};
		return r;
	}
	function H(t, e, i) {
		var n = e[1],
			e = e[0],
			o = n - e;
		return t === n && i ? t : ((((t - e) % o) + o) % o) + e;
	}
	function u() {
		return !1;
	}
	function i(t, e) {
		return !1 === e ? t : ((e = Math.pow(10, void 0 === e ? 6 : e)), Math.round(t * e) / e);
	}
	function F(t) {
		return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
	}
	function W(t) {
		return F(t).split(/\s+/);
	}
	function c(t, e) {
		for (var i in (Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? R(t.options) : {}), e)) t.options[i] = e[i];
		return t.options;
	}
	function U(t, e, i) {
		var n,
			o = [];
		for (n in t) o.push(encodeURIComponent(i ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
		return (e && -1 !== e.indexOf("?") ? "&" : "?") + o.join("&");
	}
	var V = /\{ *([\w_ -]+) *\}/g;
	function q(t, i) {
		return t.replace(V, function (t, e) {
			e = i[e];
			if (void 0 === e) throw new Error("No value provided for variable " + t);
			return (e = "function" == typeof e ? e(i) : e);
		});
	}
	var d =
		Array.isArray ||
		function (t) {
			return "[object Array]" === Object.prototype.toString.call(t);
		};
	function G(t, e) {
		for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
		return -1;
	}
	var K = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
	function Y(t) {
		return window["webkit" + t] || window["moz" + t] || window["ms" + t];
	}
	var X = 0;
	function J(t) {
		var e = +new Date(),
			i = Math.max(0, 16 - (e - X));
		return (X = e + i), window.setTimeout(t, i);
	}
	var $ = window.requestAnimationFrame || Y("RequestAnimationFrame") || J,
		Q =
			window.cancelAnimationFrame ||
			Y("CancelAnimationFrame") ||
			Y("CancelRequestAnimationFrame") ||
			function (t) {
				window.clearTimeout(t);
			};
	function x(t, e, i) {
		if (!i || $ !== J) return $.call(window, a(t, e));
		t.call(e);
	}
	function r(t) {
		t && Q.call(window, t);
	}
	var tt = {
		__proto__: null,
		extend: l,
		create: R,
		bind: a,
		get lastId() {
			return D;
		},
		stamp: h,
		throttle: j,
		wrapNum: H,
		falseFn: u,
		formatNum: i,
		trim: F,
		splitWords: W,
		setOptions: c,
		getParamString: U,
		template: q,
		isArray: d,
		indexOf: G,
		emptyImageUrl: K,
		requestFn: $,
		cancelFn: Q,
		requestAnimFrame: x,
		cancelAnimFrame: r,
	};
	function et() {}
	(et.extend = function (t) {
		function e() {
			c(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
		}
		var i,
			n = (e.__super__ = this.prototype),
			o = R(n);
		for (i in (((o.constructor = e).prototype = o), this)) Object.prototype.hasOwnProperty.call(this, i) && "prototype" !== i && "__super__" !== i && (e[i] = this[i]);
		if ((t.statics && l(e, t.statics), t.includes)) {
			var s = t.includes;
			if ("undefined" != typeof L && L && L.Mixin) {
				s = d(s) ? s : [s];
				for (var r = 0; r < s.length; r++) s[r] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
			}
			l.apply(null, [o].concat(t.includes));
		}
		return (
			l(o, t),
			delete o.statics,
			delete o.includes,
			o.options && ((o.options = n.options ? R(n.options) : {}), l(o.options, t.options)),
			(o._initHooks = []),
			(o.callInitHooks = function () {
				if (!this._initHooksCalled) {
					n.callInitHooks && n.callInitHooks.call(this), (this._initHooksCalled = !0);
					for (var t = 0, e = o._initHooks.length; t < e; t++) o._initHooks[t].call(this);
				}
			}),
			e
		);
	}),
		(et.include = function (t) {
			var e = this.prototype.options;
			return l(this.prototype, t), t.options && ((this.prototype.options = e), this.mergeOptions(t.options)), this;
		}),
		(et.mergeOptions = function (t) {
			return l(this.prototype.options, t), this;
		}),
		(et.addInitHook = function (t) {
			var e = Array.prototype.slice.call(arguments, 1),
				i =
					"function" == typeof t
						? t
						: function () {
								this[t].apply(this, e);
						  };
			return (this.prototype._initHooks = this.prototype._initHooks || []), this.prototype._initHooks.push(i), this;
		});
	var e = {
			on: function (t, e, i) {
				if ("object" == typeof t) for (var n in t) this._on(n, t[n], e);
				else for (var o = 0, s = (t = W(t)).length; o < s; o++) this._on(t[o], e, i);
				return this;
			},
			off: function (t, e, i) {
				if (arguments.length)
					if ("object" == typeof t) for (var n in t) this._off(n, t[n], e);
					else {
						t = W(t);
						for (var o = 1 === arguments.length, s = 0, r = t.length; s < r; s++) o ? this._off(t[s]) : this._off(t[s], e, i);
					}
				else delete this._events;
				return this;
			},
			_on: function (t, e, i, n) {
				"function" != typeof e
					? console.warn("wrong listener type: " + typeof e)
					: !1 === this._listens(t, e, i) && ((e = { fn: e, ctx: (i = i === this ? void 0 : i) }), n && (e.once = !0), (this._events = this._events || {}), (this._events[t] = this._events[t] || []), this._events[t].push(e));
			},
			_off: function (t, e, i) {
				var n, o, s;
				if (this._events && (n = this._events[t]))
					if (1 === arguments.length) {
						if (this._firingCount) for (o = 0, s = n.length; o < s; o++) n[o].fn = u;
						delete this._events[t];
					} else "function" != typeof e ? console.warn("wrong listener type: " + typeof e) : !1 !== (e = this._listens(t, e, i)) && ((i = n[e]), this._firingCount && ((i.fn = u), (this._events[t] = n = n.slice())), n.splice(e, 1));
			},
			fire: function (t, e, i) {
				if (this.listens(t, i)) {
					var n = l({}, e, { type: t, target: this, sourceTarget: (e && e.sourceTarget) || this });
					if (this._events) {
						var o = this._events[t];
						if (o) {
							this._firingCount = this._firingCount + 1 || 1;
							for (var s = 0, r = o.length; s < r; s++) {
								var a = o[s],
									h = a.fn;
								a.once && this.off(t, h, a.ctx), h.call(a.ctx || this, n);
							}
							this._firingCount--;
						}
					}
					i && this._propagateEvent(n);
				}
				return this;
			},
			listens: function (t, e, i, n) {
				"string" != typeof t && console.warn('"string" type argument expected');
				var o = e,
					s = ("function" != typeof e && ((n = !!e), (i = o = void 0)), this._events && this._events[t]);
				if (s && s.length && !1 !== this._listens(t, o, i)) return !0;
				if (n) for (var r in this._eventParents) if (this._eventParents[r].listens(t, e, i, n)) return !0;
				return !1;
			},
			_listens: function (t, e, i) {
				if (this._events) {
					var n = this._events[t] || [];
					if (!e) return !!n.length;
					i === this && (i = void 0);
					for (var o = 0, s = n.length; o < s; o++) if (n[o].fn === e && n[o].ctx === i) return o;
				}
				return !1;
			},
			once: function (t, e, i) {
				if ("object" == typeof t) for (var n in t) this._on(n, t[n], e, !0);
				else for (var o = 0, s = (t = W(t)).length; o < s; o++) this._on(t[o], e, i, !0);
				return this;
			},
			addEventParent: function (t) {
				return (this._eventParents = this._eventParents || {}), (this._eventParents[h(t)] = t), this;
			},
			removeEventParent: function (t) {
				return this._eventParents && delete this._eventParents[h(t)], this;
			},
			_propagateEvent: function (t) {
				for (var e in this._eventParents) this._eventParents[e].fire(t.type, l({ layer: t.target, propagatedFrom: t.target }, t), !0);
			},
		},
		it = ((e.addEventListener = e.on), (e.removeEventListener = e.clearAllEventListeners = e.off), (e.addOneTimeEventListener = e.once), (e.fireEvent = e.fire), (e.hasEventListeners = e.listens), et.extend(e));
	function p(t, e, i) {
		(this.x = i ? Math.round(t) : t), (this.y = i ? Math.round(e) : e);
	}
	var nt =
		Math.trunc ||
		function (t) {
			return 0 < t ? Math.floor(t) : Math.ceil(t);
		};
	function m(t, e, i) {
		return t instanceof p ? t : d(t) ? new p(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new p(t.x, t.y) : new p(t, e, i);
	}
	function f(t, e) {
		if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
	}
	function _(t, e) {
		return !t || t instanceof f ? t : new f(t, e);
	}
	function s(t, e) {
		if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
	}
	function g(t, e) {
		return t instanceof s ? t : new s(t, e);
	}
	function v(t, e, i) {
		if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
		(this.lat = +t), (this.lng = +e), void 0 !== i && (this.alt = +i);
	}
	function w(t, e, i) {
		return t instanceof v
			? t
			: d(t) && "object" != typeof t[0]
			? 3 === t.length
				? new v(t[0], t[1], t[2])
				: 2 === t.length
				? new v(t[0], t[1])
				: null
			: null == t
			? t
			: "object" == typeof t && "lat" in t
			? new v(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
			: void 0 === e
			? null
			: new v(t, e, i);
	}
	(p.prototype = {
		clone: function () {
			return new p(this.x, this.y);
		},
		add: function (t) {
			return this.clone()._add(m(t));
		},
		_add: function (t) {
			return (this.x += t.x), (this.y += t.y), this;
		},
		subtract: function (t) {
			return this.clone()._subtract(m(t));
		},
		_subtract: function (t) {
			return (this.x -= t.x), (this.y -= t.y), this;
		},
		divideBy: function (t) {
			return this.clone()._divideBy(t);
		},
		_divideBy: function (t) {
			return (this.x /= t), (this.y /= t), this;
		},
		multiplyBy: function (t) {
			return this.clone()._multiplyBy(t);
		},
		_multiplyBy: function (t) {
			return (this.x *= t), (this.y *= t), this;
		},
		scaleBy: function (t) {
			return new p(this.x * t.x, this.y * t.y);
		},
		unscaleBy: function (t) {
			return new p(this.x / t.x, this.y / t.y);
		},
		round: function () {
			return this.clone()._round();
		},
		_round: function () {
			return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
		},
		floor: function () {
			return this.clone()._floor();
		},
		_floor: function () {
			return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
		},
		ceil: function () {
			return this.clone()._ceil();
		},
		_ceil: function () {
			return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
		},
		trunc: function () {
			return this.clone()._trunc();
		},
		_trunc: function () {
			return (this.x = nt(this.x)), (this.y = nt(this.y)), this;
		},
		distanceTo: function (t) {
			var e = (t = m(t)).x - this.x,
				t = t.y - this.y;
			return Math.sqrt(e * e + t * t);
		},
		equals: function (t) {
			return (t = m(t)).x === this.x && t.y === this.y;
		},
		contains: function (t) {
			return (t = m(t)), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
		},
		toString: function () {
			return "Point(" + i(this.x) + ", " + i(this.y) + ")";
		},
	}),
		(f.prototype = {
			extend: function (t) {
				var e, i;
				if (t) {
					if (t instanceof p || "number" == typeof t[0] || "x" in t) e = i = m(t);
					else if (((e = (t = _(t)).min), (i = t.max), !e || !i)) return this;
					this.min || this.max
						? ((this.min.x = Math.min(e.x, this.min.x)), (this.max.x = Math.max(i.x, this.max.x)), (this.min.y = Math.min(e.y, this.min.y)), (this.max.y = Math.max(i.y, this.max.y)))
						: ((this.min = e.clone()), (this.max = i.clone()));
				}
				return this;
			},
			getCenter: function (t) {
				return m((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
			},
			getBottomLeft: function () {
				return m(this.min.x, this.max.y);
			},
			getTopRight: function () {
				return m(this.max.x, this.min.y);
			},
			getTopLeft: function () {
				return this.min;
			},
			getBottomRight: function () {
				return this.max;
			},
			getSize: function () {
				return this.max.subtract(this.min);
			},
			contains: function (t) {
				var e, i;
				return (t = ("number" == typeof t[0] || t instanceof p ? m : _)(t)) instanceof f ? ((e = t.min), (i = t.max)) : (e = i = t), e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
			},
			intersects: function (t) {
				t = _(t);
				var e = this.min,
					i = this.max,
					n = t.min,
					t = t.max,
					o = t.x >= e.x && n.x <= i.x,
					t = t.y >= e.y && n.y <= i.y;
				return o && t;
			},
			overlaps: function (t) {
				t = _(t);
				var e = this.min,
					i = this.max,
					n = t.min,
					t = t.max,
					o = t.x > e.x && n.x < i.x,
					t = t.y > e.y && n.y < i.y;
				return o && t;
			},
			isValid: function () {
				return !(!this.min || !this.max);
			},
			pad: function (t) {
				var e = this.min,
					i = this.max,
					n = Math.abs(e.x - i.x) * t,
					t = Math.abs(e.y - i.y) * t;
				return _(m(e.x - n, e.y - t), m(i.x + n, i.y + t));
			},
			equals: function (t) {
				return !!t && ((t = _(t)), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()));
			},
		}),
		(s.prototype = {
			extend: function (t) {
				var e,
					i,
					n = this._southWest,
					o = this._northEast;
				if (t instanceof v) i = e = t;
				else {
					if (!(t instanceof s)) return t ? this.extend(w(t) || g(t)) : this;
					if (((e = t._southWest), (i = t._northEast), !e || !i)) return this;
				}
				return (
					n || o
						? ((n.lat = Math.min(e.lat, n.lat)), (n.lng = Math.min(e.lng, n.lng)), (o.lat = Math.max(i.lat, o.lat)), (o.lng = Math.max(i.lng, o.lng)))
						: ((this._southWest = new v(e.lat, e.lng)), (this._northEast = new v(i.lat, i.lng))),
					this
				);
			},
			pad: function (t) {
				var e = this._southWest,
					i = this._northEast,
					n = Math.abs(e.lat - i.lat) * t,
					t = Math.abs(e.lng - i.lng) * t;
				return new s(new v(e.lat - n, e.lng - t), new v(i.lat + n, i.lng + t));
			},
			getCenter: function () {
				return new v((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
			},
			getSouthWest: function () {
				return this._southWest;
			},
			getNorthEast: function () {
				return this._northEast;
			},
			getNorthWest: function () {
				return new v(this.getNorth(), this.getWest());
			},
			getSouthEast: function () {
				return new v(this.getSouth(), this.getEast());
			},
			getWest: function () {
				return this._southWest.lng;
			},
			getSouth: function () {
				return this._southWest.lat;
			},
			getEast: function () {
				return this._northEast.lng;
			},
			getNorth: function () {
				return this._northEast.lat;
			},
			contains: function (t) {
				t = ("number" == typeof t[0] || t instanceof v || "lat" in t ? w : g)(t);
				var e,
					i,
					n = this._southWest,
					o = this._northEast;
				return t instanceof s ? ((e = t.getSouthWest()), (i = t.getNorthEast())) : (e = i = t), e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng;
			},
			intersects: function (t) {
				t = g(t);
				var e = this._southWest,
					i = this._northEast,
					n = t.getSouthWest(),
					t = t.getNorthEast(),
					o = t.lat >= e.lat && n.lat <= i.lat,
					t = t.lng >= e.lng && n.lng <= i.lng;
				return o && t;
			},
			overlaps: function (t) {
				t = g(t);
				var e = this._southWest,
					i = this._northEast,
					n = t.getSouthWest(),
					t = t.getNorthEast(),
					o = t.lat > e.lat && n.lat < i.lat,
					t = t.lng > e.lng && n.lng < i.lng;
				return o && t;
			},
			toBBoxString: function () {
				return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
			},
			equals: function (t, e) {
				return !!t && ((t = g(t)), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e));
			},
			isValid: function () {
				return !(!this._southWest || !this._northEast);
			},
		});
	var ot = {
			latLngToPoint: function (t, e) {
				(t = this.projection.project(t)), (e = this.scale(e));
				return this.transformation._transform(t, e);
			},
			pointToLatLng: function (t, e) {
				(e = this.scale(e)), (t = this.transformation.untransform(t, e));
				return this.projection.unproject(t);
			},
			project: function (t) {
				return this.projection.project(t);
			},
			unproject: function (t) {
				return this.projection.unproject(t);
			},
			scale: function (t) {
				return 256 * Math.pow(2, t);
			},
			zoom: function (t) {
				return Math.log(t / 256) / Math.LN2;
			},
			getProjectedBounds: function (t) {
				var e;
				return this.infinite ? null : ((e = this.projection.bounds), (t = this.scale(t)), new f(this.transformation.transform(e.min, t), this.transformation.transform(e.max, t)));
			},
			infinite: !(v.prototype = {
				equals: function (t, e) {
					return !!t && ((t = w(t)), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e));
				},
				toString: function (t) {
					return "LatLng(" + i(this.lat, t) + ", " + i(this.lng, t) + ")";
				},
				distanceTo: function (t) {
					return st.distance(this, w(t));
				},
				wrap: function () {
					return st.wrapLatLng(this);
				},
				toBounds: function (t) {
					var t = (180 * t) / 40075017,
						e = t / Math.cos((Math.PI / 180) * this.lat);
					return g([this.lat - t, this.lng - e], [this.lat + t, this.lng + e]);
				},
				clone: function () {
					return new v(this.lat, this.lng, this.alt);
				},
			}),
			wrapLatLng: function (t) {
				var e = this.wrapLng ? H(t.lng, this.wrapLng, !0) : t.lng;
				return new v(this.wrapLat ? H(t.lat, this.wrapLat, !0) : t.lat, e, t.alt);
			},
			wrapLatLngBounds: function (t) {
				var e = t.getCenter(),
					i = this.wrapLatLng(e),
					n = e.lat - i.lat,
					e = e.lng - i.lng;
				return 0 == n && 0 == e ? t : ((i = t.getSouthWest()), (t = t.getNorthEast()), new s(new v(i.lat - n, i.lng - e), new v(t.lat - n, t.lng - e)));
			},
		},
		st = l({}, ot, {
			wrapLng: [-180, 180],
			R: 6371e3,
			distance: function (t, e) {
				var i = Math.PI / 180,
					n = t.lat * i,
					o = e.lat * i,
					s = Math.sin(((e.lat - t.lat) * i) / 2),
					e = Math.sin(((e.lng - t.lng) * i) / 2),
					t = s * s + Math.cos(n) * Math.cos(o) * e * e,
					i = 2 * Math.atan2(Math.sqrt(t), Math.sqrt(1 - t));
				return this.R * i;
			},
		}),
		rt = 6378137,
		rt = {
			R: rt,
			MAX_LATITUDE: 85.0511287798,
			project: function (t) {
				var e = Math.PI / 180,
					i = this.MAX_LATITUDE,
					i = Math.max(Math.min(i, t.lat), -i),
					i = Math.sin(i * e);
				return new p(this.R * t.lng * e, (this.R * Math.log((1 + i) / (1 - i))) / 2);
			},
			unproject: function (t) {
				var e = 180 / Math.PI;
				return new v((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, (t.x * e) / this.R);
			},
			bounds: new f([-(rt = rt * Math.PI), -rt], [rt, rt]),
		};
	function at(t, e, i, n) {
		d(t) ? ((this._a = t[0]), (this._b = t[1]), (this._c = t[2]), (this._d = t[3])) : ((this._a = t), (this._b = e), (this._c = i), (this._d = n));
	}
	function ht(t, e, i, n) {
		return new at(t, e, i, n);
	}
	at.prototype = {
		transform: function (t, e) {
			return this._transform(t.clone(), e);
		},
		_transform: function (t, e) {
			return (t.x = (e = e || 1) * (this._a * t.x + this._b)), (t.y = e * (this._c * t.y + this._d)), t;
		},
		untransform: function (t, e) {
			return new p((t.x / (e = e || 1) - this._b) / this._a, (t.y / e - this._d) / this._c);
		},
	};
	var lt = l({}, st, { code: "EPSG:3857", projection: rt, transformation: ht((lt = 0.5 / (Math.PI * rt.R)), 0.5, -lt, 0.5) }),
		ut = l({}, lt, { code: "EPSG:900913" });
	function ct(t) {
		return document.createElementNS("http://www.w3.org/2000/svg", t);
	}
	function dt(t, e) {
		for (var i, n, o, s, r = "", a = 0, h = t.length; a < h; a++) {
			for (i = 0, n = (o = t[a]).length; i < n; i++) r += (i ? "L" : "M") + (s = o[i]).x + " " + s.y;
			r += e ? (b.svg ? "z" : "x") : "";
		}
		return r || "M0 0";
	}
	var _t = document.documentElement.style,
		pt = "ActiveXObject" in window,
		mt = pt && !document.addEventListener,
		n = "msLaunchUri" in navigator && !("documentMode" in document),
		ft = y("webkit"),
		gt = y("android"),
		vt = y("android 2") || y("android 3"),
		yt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
		yt = gt && y("Google") && yt < 537 && !("AudioNode" in window),
		xt = !!window.opera,
		wt = !n && y("chrome"),
		bt = y("gecko") && !ft && !xt && !pt,
		Pt = !wt && y("safari"),
		Lt = y("phantom"),
		o = "OTransition" in _t,
		Tt = 0 === navigator.platform.indexOf("Win"),
		Mt = pt && "transition" in _t,
		zt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !vt,
		_t = "MozPerspective" in _t,
		Ct = !window.L_DISABLE_3D && (Mt || zt || _t) && !o && !Lt,
		Zt = "undefined" != typeof orientation || y("mobile"),
		St = Zt && ft,
		Et = Zt && zt,
		kt = !window.PointerEvent && window.MSPointerEvent,
		Ot = !(!window.PointerEvent && !kt),
		At = "ontouchstart" in window || !!window.TouchEvent,
		Bt = !window.L_NO_TOUCH && (At || Ot),
		It = Zt && xt,
		Rt = Zt && bt,
		Nt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
		Dt = (function () {
			var t = !1;
			try {
				var e = Object.defineProperty({}, "passive", {
					get: function () {
						t = !0;
					},
				});
				window.addEventListener("testPassiveEventSupport", u, e), window.removeEventListener("testPassiveEventSupport", u, e);
			} catch (t) {}
			return t;
		})(),
		jt = !!document.createElement("canvas").getContext,
		Ht = !(!document.createElementNS || !ct("svg").createSVGRect),
		Ft = !!Ht && (((Ft = document.createElement("div")).innerHTML = "<svg/>"), "http://www.w3.org/2000/svg" === (Ft.firstChild && Ft.firstChild.namespaceURI));
	function y(t) {
		return 0 <= navigator.userAgent.toLowerCase().indexOf(t);
	}
	var b = {
			ie: pt,
			ielt9: mt,
			edge: n,
			webkit: ft,
			android: gt,
			android23: vt,
			androidStock: yt,
			opera: xt,
			chrome: wt,
			gecko: bt,
			safari: Pt,
			phantom: Lt,
			opera12: o,
			win: Tt,
			ie3d: Mt,
			webkit3d: zt,
			gecko3d: _t,
			any3d: Ct,
			mobile: Zt,
			mobileWebkit: St,
			mobileWebkit3d: Et,
			msPointer: kt,
			pointer: Ot,
			touch: Bt,
			touchNative: At,
			mobileOpera: It,
			mobileGecko: Rt,
			retina: Nt,
			passiveEvents: Dt,
			canvas: jt,
			svg: Ht,
			vml:
				!Ht &&
				(function () {
					try {
						var t = document.createElement("div"),
							e = ((t.innerHTML = '<v:shape adj="1"/>'), t.firstChild);
						return (e.style.behavior = "url(#default#VML)"), e && "object" == typeof e.adj;
					} catch (t) {
						return !1;
					}
				})(),
			inlineSvg: Ft,
			mac: 0 === navigator.platform.indexOf("Mac"),
			linux: 0 === navigator.platform.indexOf("Linux"),
		},
		Wt = b.msPointer ? "MSPointerDown" : "pointerdown",
		Ut = b.msPointer ? "MSPointerMove" : "pointermove",
		Vt = b.msPointer ? "MSPointerUp" : "pointerup",
		qt = b.msPointer ? "MSPointerCancel" : "pointercancel",
		Gt = { touchstart: Wt, touchmove: Ut, touchend: Vt, touchcancel: qt },
		Kt = {
			touchstart: function (t, e) {
				e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && O(e);
				ee(t, e);
			},
			touchmove: ee,
			touchend: ee,
			touchcancel: ee,
		},
		Yt = {},
		Xt = !1;
	function Jt(t, e, i) {
		return (
			"touchstart" !== e || Xt || (document.addEventListener(Wt, $t, !0), document.addEventListener(Ut, Qt, !0), document.addEventListener(Vt, te, !0), document.addEventListener(qt, te, !0), (Xt = !0)),
			Kt[e] ? ((i = Kt[e].bind(this, i)), t.addEventListener(Gt[e], i, !1), i) : (console.warn("wrong event specified:", e), u)
		);
	}
	function $t(t) {
		Yt[t.pointerId] = t;
	}
	function Qt(t) {
		Yt[t.pointerId] && (Yt[t.pointerId] = t);
	}
	function te(t) {
		delete Yt[t.pointerId];
	}
	function ee(t, e) {
		if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
			for (var i in ((e.touches = []), Yt)) e.touches.push(Yt[i]);
			(e.changedTouches = [e]), t(e);
		}
	}
	var ie = 200;
	function ne(t, i) {
		t.addEventListener("dblclick", i);
		var n,
			o = 0;
		function e(t) {
			var e;
			1 !== t.detail
				? (n = t.detail)
				: "mouse" === t.pointerType ||
				  (t.sourceCapabilities && !t.sourceCapabilities.firesTouchEvents) ||
				  ((e = Ne(t)).some(function (t) {
						return t instanceof HTMLLabelElement && t.attributes.for;
				  }) &&
						!e.some(function (t) {
							return t instanceof HTMLInputElement || t instanceof HTMLSelectElement;
						})) ||
				  ((e = Date.now()) - o <= ie
						? 2 === ++n &&
						  i(
								(function (t) {
									var e,
										i,
										n = {};
									for (i in t) (e = t[i]), (n[i] = e && e.bind ? e.bind(t) : e);
									return ((t = n).type = "dblclick"), (n.detail = 2), (n.isTrusted = !1), (n._simulated = !0), n;
								})(t),
						  )
						: (n = 1),
				  (o = e));
		}
		return t.addEventListener("click", e), { dblclick: i, simDblclick: e };
	}
	var oe,
		se,
		re,
		ae,
		he,
		le,
		ue = we(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
		ce = we(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
		de = "webkitTransition" === ce || "OTransition" === ce ? ce + "End" : "transitionend";
	function _e(t) {
		return "string" == typeof t ? document.getElementById(t) : t;
	}
	function pe(t, e) {
		var i = t.style[e] || (t.currentStyle && t.currentStyle[e]);
		return "auto" === (i = (i && "auto" !== i) || !document.defaultView ? i : (t = document.defaultView.getComputedStyle(t, null)) ? t[e] : null) ? null : i;
	}
	function P(t, e, i) {
		t = document.createElement(t);
		return (t.className = e || ""), i && i.appendChild(t), t;
	}
	function T(t) {
		var e = t.parentNode;
		e && e.removeChild(t);
	}
	function me(t) {
		for (; t.firstChild; ) t.removeChild(t.firstChild);
	}
	function fe(t) {
		var e = t.parentNode;
		e && e.lastChild !== t && e.appendChild(t);
	}
	function ge(t) {
		var e = t.parentNode;
		e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
	}
	function ve(t, e) {
		return void 0 !== t.classList ? t.classList.contains(e) : 0 < (t = xe(t)).length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t);
	}
	function M(t, e) {
		var i;
		if (void 0 !== t.classList) for (var n = W(e), o = 0, s = n.length; o < s; o++) t.classList.add(n[o]);
		else ve(t, e) || ye(t, ((i = xe(t)) ? i + " " : "") + e);
	}
	function z(t, e) {
		void 0 !== t.classList ? t.classList.remove(e) : ye(t, F((" " + xe(t) + " ").replace(" " + e + " ", " ")));
	}
	function ye(t, e) {
		void 0 === t.className.baseVal ? (t.className = e) : (t.className.baseVal = e);
	}
	function xe(t) {
		return void 0 === (t = t.correspondingElement ? t.correspondingElement : t).className.baseVal ? t.className : t.className.baseVal;
	}
	function C(t, e) {
		if ("opacity" in t.style) t.style.opacity = e;
		else if ("filter" in t.style) {
			var i = !1,
				n = "DXImageTransform.Microsoft.Alpha";
			try {
				i = t.filters.item(n);
			} catch (t) {
				if (1 === e) return;
			}
			(e = Math.round(100 * e)), i ? ((i.Enabled = 100 !== e), (i.Opacity = e)) : (t.style.filter += " progid:" + n + "(opacity=" + e + ")");
		}
	}
	function we(t) {
		for (var e = document.documentElement.style, i = 0; i < t.length; i++) if (t[i] in e) return t[i];
		return !1;
	}
	function be(t, e, i) {
		e = e || new p(0, 0);
		t.style[ue] = (b.ie3d ? "translate(" + e.x + "px," + e.y + "px)" : "translate3d(" + e.x + "px," + e.y + "px,0)") + (i ? " scale(" + i + ")" : "");
	}
	function Z(t, e) {
		(t._leaflet_pos = e), b.any3d ? be(t, e) : ((t.style.left = e.x + "px"), (t.style.top = e.y + "px"));
	}
	function Pe(t) {
		return t._leaflet_pos || new p(0, 0);
	}
	function Le() {
		S(window, "dragstart", O);
	}
	function Te() {
		k(window, "dragstart", O);
	}
	function Me(t) {
		for (; -1 === t.tabIndex; ) t = t.parentNode;
		t.style && (ze(), (le = (he = t).style.outline), (t.style.outline = "none"), S(window, "keydown", ze));
	}
	function ze() {
		he && ((he.style.outline = le), (le = he = void 0), k(window, "keydown", ze));
	}
	function Ce(t) {
		for (; !(((t = t.parentNode).offsetWidth && t.offsetHeight) || t === document.body); );
		return t;
	}
	function Ze(t) {
		var e = t.getBoundingClientRect();
		return { x: e.width / t.offsetWidth || 1, y: e.height / t.offsetHeight || 1, boundingClientRect: e };
	}
	ae =
		"onselectstart" in document
			? ((re = function () {
					S(window, "selectstart", O);
			  }),
			  function () {
					k(window, "selectstart", O);
			  })
			: ((se = we(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"])),
			  (re = function () {
					var t;
					se && ((t = document.documentElement.style), (oe = t[se]), (t[se] = "none"));
			  }),
			  function () {
					se && ((document.documentElement.style[se] = oe), (oe = void 0));
			  });
	pt = {
		__proto__: null,
		TRANSFORM: ue,
		TRANSITION: ce,
		TRANSITION_END: de,
		get: _e,
		getStyle: pe,
		create: P,
		remove: T,
		empty: me,
		toFront: fe,
		toBack: ge,
		hasClass: ve,
		addClass: M,
		removeClass: z,
		setClass: ye,
		getClass: xe,
		setOpacity: C,
		testProp: we,
		setTransform: be,
		setPosition: Z,
		getPosition: Pe,
		get disableTextSelection() {
			return re;
		},
		get enableTextSelection() {
			return ae;
		},
		disableImageDrag: Le,
		enableImageDrag: Te,
		preventOutline: Me,
		restoreOutline: ze,
		getSizedParentNode: Ce,
		getScale: Ze,
	};
	function S(t, e, i, n) {
		if (e && "object" == typeof e) for (var o in e) ke(t, o, e[o], i);
		else for (var s = 0, r = (e = W(e)).length; s < r; s++) ke(t, e[s], i, n);
		return this;
	}
	var E = "_leaflet_events";
	function k(t, e, i, n) {
		if (1 === arguments.length) Se(t), delete t[E];
		else if (e && "object" == typeof e) for (var o in e) Oe(t, o, e[o], i);
		else if (((e = W(e)), 2 === arguments.length))
			Se(t, function (t) {
				return -1 !== G(e, t);
			});
		else for (var s = 0, r = e.length; s < r; s++) Oe(t, e[s], i, n);
		return this;
	}
	function Se(t, e) {
		for (var i in t[E]) {
			var n = i.split(/\d/)[0];
			(e && !e(n)) || Oe(t, n, null, null, i);
		}
	}
	var Ee = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };
	function ke(e, t, i, n) {
		var o,
			s,
			r = t + h(i) + (n ? "_" + h(n) : "");
		(e[E] && e[E][r]) ||
			((s = o =
				function (t) {
					return i.call(n || e, t || window.event);
				}),
			!b.touchNative && b.pointer && 0 === t.indexOf("touch")
				? (o = Jt(e, t, o))
				: b.touch && "dblclick" === t
				? (o = ne(e, o))
				: "addEventListener" in e
				? "touchstart" === t || "touchmove" === t || "wheel" === t || "mousewheel" === t
					? e.addEventListener(Ee[t] || t, o, !!b.passiveEvents && { passive: !1 })
					: "mouseenter" === t || "mouseleave" === t
					? e.addEventListener(
							Ee[t],
							(o = function (t) {
								(t = t || window.event), Fe(e, t) && s(t);
							}),
							!1,
					  )
					: e.addEventListener(t, s, !1)
				: e.attachEvent("on" + t, o),
			(e[E] = e[E] || {}),
			(e[E][r] = o));
	}
	function Oe(t, e, i, n, o) {
		o = o || e + h(i) + (n ? "_" + h(n) : "");
		var s,
			r,
			i = t[E] && t[E][o];
		i &&
			(!b.touchNative && b.pointer && 0 === e.indexOf("touch")
				? ((n = t), (r = i), Gt[(s = e)] ? n.removeEventListener(Gt[s], r, !1) : console.warn("wrong event specified:", s))
				: b.touch && "dblclick" === e
				? ((n = i), (r = t).removeEventListener("dblclick", n.dblclick), r.removeEventListener("click", n.simDblclick))
				: "removeEventListener" in t
				? t.removeEventListener(Ee[e] || e, i, !1)
				: t.detachEvent("on" + e, i),
			(t[E][o] = null));
	}
	function Ae(t) {
		return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? (t.originalEvent._stopped = !0) : (t.cancelBubble = !0), this;
	}
	function Be(t) {
		return ke(t, "wheel", Ae), this;
	}
	function Ie(t) {
		return S(t, "mousedown touchstart dblclick contextmenu", Ae), (t._leaflet_disable_click = !0), this;
	}
	function O(t) {
		return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
	}
	function Re(t) {
		return O(t), Ae(t), this;
	}
	function Ne(t) {
		if (t.composedPath) return t.composedPath();
		for (var e = [], i = t.target; i; ) e.push(i), (i = i.parentNode);
		return e;
	}
	function De(t, e) {
		var i, n;
		return e ? ((n = (i = Ze(e)).boundingClientRect), new p((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop)) : new p(t.clientX, t.clientY);
	}
	var je = b.linux && b.chrome ? window.devicePixelRatio : b.mac ? 3 * window.devicePixelRatio : 0 < window.devicePixelRatio ? 2 * window.devicePixelRatio : 1;
	function He(t) {
		return b.edge
			? t.wheelDeltaY / 2
			: t.deltaY && 0 === t.deltaMode
			? -t.deltaY / je
			: t.deltaY && 1 === t.deltaMode
			? 20 * -t.deltaY
			: t.deltaY && 2 === t.deltaMode
			? 60 * -t.deltaY
			: t.deltaX || t.deltaZ
			? 0
			: t.wheelDelta
			? (t.wheelDeltaY || t.wheelDelta) / 2
			: t.detail && Math.abs(t.detail) < 32765
			? 20 * -t.detail
			: t.detail
			? (t.detail / -32765) * 60
			: 0;
	}
	function Fe(t, e) {
		var i = e.relatedTarget;
		if (!i) return !0;
		try {
			for (; i && i !== t; ) i = i.parentNode;
		} catch (t) {
			return !1;
		}
		return i !== t;
	}
	var mt = {
			__proto__: null,
			on: S,
			off: k,
			stopPropagation: Ae,
			disableScrollPropagation: Be,
			disableClickPropagation: Ie,
			preventDefault: O,
			stop: Re,
			getPropagationPath: Ne,
			getMousePosition: De,
			getWheelDelta: He,
			isExternalTarget: Fe,
			addListener: S,
			removeListener: k,
		},
		We = it.extend({
			run: function (t, e, i, n) {
				this.stop(),
					(this._el = t),
					(this._inProgress = !0),
					(this._duration = i || 0.25),
					(this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
					(this._startPos = Pe(t)),
					(this._offset = e.subtract(this._startPos)),
					(this._startTime = +new Date()),
					this.fire("start"),
					this._animate();
			},
			stop: function () {
				this._inProgress && (this._step(!0), this._complete());
			},
			_animate: function () {
				(this._animId = x(this._animate, this)), this._step();
			},
			_step: function (t) {
				var e = +new Date() - this._startTime,
					i = 1e3 * this._duration;
				e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
			},
			_runFrame: function (t, e) {
				t = this._startPos.add(this._offset.multiplyBy(t));
				e && t._round(), Z(this._el, t), this.fire("step");
			},
			_complete: function () {
				r(this._animId), (this._inProgress = !1), this.fire("end");
			},
			_easeOut: function (t) {
				return 1 - Math.pow(1 - t, this._easeOutPower);
			},
		}),
		A = it.extend({
			options: {
				crs: lt,
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
				trackResize: !0,
			},
			initialize: function (t, e) {
				(e = c(this, e)),
					(this._handlers = []),
					(this._layers = {}),
					(this._zoomBoundLayers = {}),
					(this._sizeChanged = !0),
					this._initContainer(t),
					this._initLayout(),
					(this._onResize = a(this._onResize, this)),
					this._initEvents(),
					e.maxBounds && this.setMaxBounds(e.maxBounds),
					void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
					e.center && void 0 !== e.zoom && this.setView(w(e.center), e.zoom, { reset: !0 }),
					this.callInitHooks(),
					(this._zoomAnimated = ce && b.any3d && !b.mobileOpera && this.options.zoomAnimation),
					this._zoomAnimated && (this._createAnimProxy(), S(this._proxy, de, this._catchTransitionEnd, this)),
					this._addLayers(this.options.layers);
			},
			setView: function (t, e, i) {
				if (
					((e = void 0 === e ? this._zoom : this._limitZoom(e)), (t = this._limitCenter(w(t), e, this.options.maxBounds)), (i = i || {}), this._stop(), this._loaded && !i.reset && !0 !== i) &&
					(void 0 !== i.animate && ((i.zoom = l({ animate: i.animate }, i.zoom)), (i.pan = l({ animate: i.animate, duration: i.duration }, i.pan))),
					this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan))
				)
					return clearTimeout(this._sizeTimer), this;
				return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
			},
			setZoom: function (t, e) {
				return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : ((this._zoom = t), this);
			},
			zoomIn: function (t, e) {
				return (t = t || (b.any3d ? this.options.zoomDelta : 1)), this.setZoom(this._zoom + t, e);
			},
			zoomOut: function (t, e) {
				return (t = t || (b.any3d ? this.options.zoomDelta : 1)), this.setZoom(this._zoom - t, e);
			},
			setZoomAround: function (t, e, i) {
				var n = this.getZoomScale(e),
					o = this.getSize().divideBy(2),
					t = (t instanceof p ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
					n = this.containerPointToLatLng(o.add(t));
				return this.setView(n, e, { zoom: i });
			},
			_getBoundsCenterZoom: function (t, e) {
				(e = e || {}), (t = t.getBounds ? t.getBounds() : g(t));
				var i = m(e.paddingTopLeft || e.padding || [0, 0]),
					n = m(e.paddingBottomRight || e.padding || [0, 0]),
					o = this.getBoundsZoom(t, !1, i.add(n));
				return (o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0
					? { center: t.getCenter(), zoom: o }
					: ((e = n.subtract(i).divideBy(2)), (n = this.project(t.getSouthWest(), o)), (i = this.project(t.getNorthEast(), o)), { center: this.unproject(n.add(i).divideBy(2).add(e), o), zoom: o });
			},
			fitBounds: function (t, e) {
				if ((t = g(t)).isValid()) return (t = this._getBoundsCenterZoom(t, e)), this.setView(t.center, t.zoom, e);
				throw new Error("Bounds are not valid.");
			},
			fitWorld: function (t) {
				return this.fitBounds(
					[
						[-90, -180],
						[90, 180],
					],
					t,
				);
			},
			panTo: function (t, e) {
				return this.setView(t, this._zoom, { pan: e });
			},
			panBy: function (t, e) {
				var i;
				return (
					(e = e || {}),
					(t = m(t).round()).x || t.y
						? (!0 === e.animate || this.getSize().contains(t)
								? (this._panAnim || ((this._panAnim = new We()), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)),
								  e.noMoveStart || this.fire("movestart"),
								  !1 !== e.animate
										? (M(this._mapPane, "leaflet-pan-anim"), (i = this._getMapPanePos().subtract(t).round()), this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity))
										: (this._rawPanBy(t), this.fire("move").fire("moveend")))
								: this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
						  this)
						: this.fire("moveend")
				);
			},
			flyTo: function (n, o, t) {
				if (!1 === (t = t || {}).animate || !b.any3d) return this.setView(n, o, t);
				this._stop();
				var s = this.project(this.getCenter()),
					r = this.project(n),
					e = this.getSize(),
					a = this._zoom,
					h = ((n = w(n)), (o = void 0 === o ? a : o), Math.max(e.x, e.y)),
					i = h * this.getZoomScale(a, o),
					l = r.distanceTo(s) || 1,
					u = 1.42,
					c = u * u;
				function d(t) {
					(t = (i * i - h * h + (t ? -1 : 1) * c * c * l * l) / (2 * (t ? i : h) * c * l)), (t = Math.sqrt(t * t + 1) - t);
					return t < 1e-9 ? -18 : Math.log(t);
				}
				function _(t) {
					return (Math.exp(t) - Math.exp(-t)) / 2;
				}
				function p(t) {
					return (Math.exp(t) + Math.exp(-t)) / 2;
				}
				var m = d(0);
				function f(t) {
					return (h * (p(m) * (_((t = m + u * t)) / p(t)) - _(m))) / c;
				}
				var g = Date.now(),
					v = (d(1) - m) / u,
					y = t.duration ? 1e3 * t.duration : 1e3 * v * 0.8;
				return (
					this._moveStart(!0, t.noMoveStart),
					function t() {
						var e = (Date.now() - g) / y,
							i = (1 - Math.pow(1 - e, 1.5)) * v;
						e <= 1 ? ((this._flyToFrame = x(t, this)), this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(i) / l)), a), this.getScaleZoom(h / ((e = i), h * (p(m) / p(m + u * e))), a), { flyTo: !0 })) : this._move(n, o)._moveEnd(!0);
					}.call(this),
					this
				);
			},
			flyToBounds: function (t, e) {
				t = this._getBoundsCenterZoom(t, e);
				return this.flyTo(t.center, t.zoom, e);
			},
			setMaxBounds: function (t) {
				return (
					(t = g(t)),
					this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds),
					t.isValid() ? ((this.options.maxBounds = t), this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : ((this.options.maxBounds = null), this)
				);
			},
			setMinZoom: function (t) {
				var e = this.options.minZoom;
				return (this.options.minZoom = t), this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
			},
			setMaxZoom: function (t) {
				var e = this.options.maxZoom;
				return (this.options.maxZoom = t), this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
			},
			panInsideBounds: function (t, e) {
				this._enforcingBounds = !0;
				var i = this.getCenter(),
					t = this._limitCenter(i, this._zoom, g(t));
				return i.equals(t) || this.panTo(t, e), (this._enforcingBounds = !1), this;
			},
			panInside: function (t, e) {
				var i = m((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
					n = m(e.paddingBottomRight || e.padding || [0, 0]),
					o = this.project(this.getCenter()),
					t = this.project(t),
					s = this.getPixelBounds(),
					i = _([s.min.add(i), s.max.subtract(n)]),
					s = i.getSize();
				return (
					i.contains(t) ||
						((this._enforcingBounds = !0),
						(n = t.subtract(i.getCenter())),
						(i = i.extend(t).getSize().subtract(s)),
						(o.x += n.x < 0 ? -i.x : i.x),
						(o.y += n.y < 0 ? -i.y : i.y),
						this.panTo(this.unproject(o), e),
						(this._enforcingBounds = !1)),
					this
				);
			},
			invalidateSize: function (t) {
				if (!this._loaded) return this;
				t = l({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
				var e = this.getSize(),
					i = ((this._sizeChanged = !0), (this._lastCenter = null), this.getSize()),
					n = e.divideBy(2).round(),
					o = i.divideBy(2).round(),
					n = n.subtract(o);
				return n.x || n.y
					? (t.animate && t.pan
							? this.panBy(n)
							: (t.pan && this._rawPanBy(n), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), (this._sizeTimer = setTimeout(a(this.fire, this, "moveend"), 200))) : this.fire("moveend")),
					  this.fire("resize", { oldSize: e, newSize: i }))
					: this;
			},
			stop: function () {
				return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
			},
			locate: function (t) {
				var e, i;
				return (
					(t = this._locateOptions = l({ timeout: 1e4, watch: !1 }, t)),
					"geolocation" in navigator
						? ((e = a(this._handleGeolocationResponse, this)),
						  (i = a(this._handleGeolocationError, this)),
						  t.watch ? (this._locationWatchId = navigator.geolocation.watchPosition(e, i, t)) : navigator.geolocation.getCurrentPosition(e, i, t))
						: this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }),
					this
				);
			},
			stopLocate: function () {
				return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
			},
			_handleGeolocationError: function (t) {
				var e;
				this._container._leaflet_id &&
					((e = t.code),
					(t = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout")),
					this._locateOptions.setView && !this._loaded && this.fitWorld(),
					this.fire("locationerror", { code: e, message: "Geolocation error: " + t + "." }));
			},
			_handleGeolocationResponse: function (t) {
				if (this._container._leaflet_id) {
					var e,
						i,
						n = new v(t.coords.latitude, t.coords.longitude),
						o = n.toBounds(2 * t.coords.accuracy),
						s = this._locateOptions,
						r = (s.setView && ((e = this.getBoundsZoom(o)), this.setView(n, s.maxZoom ? Math.min(e, s.maxZoom) : e)), { latlng: n, bounds: o, timestamp: t.timestamp });
					for (i in t.coords) "number" == typeof t.coords[i] && (r[i] = t.coords[i]);
					this.fire("locationfound", r);
				}
			},
			addHandler: function (t, e) {
				return e && ((e = this[t] = new e(this)), this._handlers.push(e), this.options[t] && e.enable()), this;
			},
			remove: function () {
				if ((this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)) throw new Error("Map container is being reused by another instance");
				try {
					delete this._container._leaflet_id, delete this._containerId;
				} catch (t) {
					(this._container._leaflet_id = void 0), (this._containerId = void 0);
				}
				for (var t in (void 0 !== this._locationWatchId && this.stopLocate(),
				this._stop(),
				T(this._mapPane),
				this._clearControlPos && this._clearControlPos(),
				this._resizeRequest && (r(this._resizeRequest), (this._resizeRequest = null)),
				this._clearHandlers(),
				this._loaded && this.fire("unload"),
				this._layers))
					this._layers[t].remove();
				for (t in this._panes) T(this._panes[t]);
				return (this._layers = []), (this._panes = []), delete this._mapPane, delete this._renderer, this;
			},
			createPane: function (t, e) {
				e = P("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
				return t && (this._panes[t] = e), e;
			},
			getCenter: function () {
				return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
			},
			getZoom: function () {
				return this._zoom;
			},
			getBounds: function () {
				var t = this.getPixelBounds();
				return new s(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
			},
			getMinZoom: function () {
				return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
			},
			getMaxZoom: function () {
				return void 0 === this.options.maxZoom ? (void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom) : this.options.maxZoom;
			},
			getBoundsZoom: function (t, e, i) {
				(t = g(t)), (i = m(i || [0, 0]));
				var n = this.getZoom() || 0,
					o = this.getMinZoom(),
					s = this.getMaxZoom(),
					r = t.getNorthWest(),
					t = t.getSouthEast(),
					i = this.getSize().subtract(i),
					t = _(this.project(t, n), this.project(r, n)).getSize(),
					r = b.any3d ? this.options.zoomSnap : 1,
					a = i.x / t.x,
					i = i.y / t.y,
					t = e ? Math.max(a, i) : Math.min(a, i),
					n = this.getScaleZoom(t, n);
				return r && ((n = Math.round(n / (r / 100)) * (r / 100)), (n = e ? Math.ceil(n / r) * r : Math.floor(n / r) * r)), Math.max(o, Math.min(s, n));
			},
			getSize: function () {
				return (this._size && !this._sizeChanged) || ((this._size = new p(this._container.clientWidth || 0, this._container.clientHeight || 0)), (this._sizeChanged = !1)), this._size.clone();
			},
			getPixelBounds: function (t, e) {
				t = this._getTopLeftPoint(t, e);
				return new f(t, t.add(this.getSize()));
			},
			getPixelOrigin: function () {
				return this._checkIfLoaded(), this._pixelOrigin;
			},
			getPixelWorldBounds: function (t) {
				return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
			},
			getPane: function (t) {
				return "string" == typeof t ? this._panes[t] : t;
			},
			getPanes: function () {
				return this._panes;
			},
			getContainer: function () {
				return this._container;
			},
			getZoomScale: function (t, e) {
				var i = this.options.crs;
				return (e = void 0 === e ? this._zoom : e), i.scale(t) / i.scale(e);
			},
			getScaleZoom: function (t, e) {
				var i = this.options.crs,
					t = ((e = void 0 === e ? this._zoom : e), i.zoom(t * i.scale(e)));
				return isNaN(t) ? 1 / 0 : t;
			},
			project: function (t, e) {
				return (e = void 0 === e ? this._zoom : e), this.options.crs.latLngToPoint(w(t), e);
			},
			unproject: function (t, e) {
				return (e = void 0 === e ? this._zoom : e), this.options.crs.pointToLatLng(m(t), e);
			},
			layerPointToLatLng: function (t) {
				t = m(t).add(this.getPixelOrigin());
				return this.unproject(t);
			},
			latLngToLayerPoint: function (t) {
				return this.project(w(t))._round()._subtract(this.getPixelOrigin());
			},
			wrapLatLng: function (t) {
				return this.options.crs.wrapLatLng(w(t));
			},
			wrapLatLngBounds: function (t) {
				return this.options.crs.wrapLatLngBounds(g(t));
			},
			distance: function (t, e) {
				return this.options.crs.distance(w(t), w(e));
			},
			containerPointToLayerPoint: function (t) {
				return m(t).subtract(this._getMapPanePos());
			},
			layerPointToContainerPoint: function (t) {
				return m(t).add(this._getMapPanePos());
			},
			containerPointToLatLng: function (t) {
				t = this.containerPointToLayerPoint(m(t));
				return this.layerPointToLatLng(t);
			},
			latLngToContainerPoint: function (t) {
				return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t)));
			},
			mouseEventToContainerPoint: function (t) {
				return De(t, this._container);
			},
			mouseEventToLayerPoint: function (t) {
				return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
			},
			mouseEventToLatLng: function (t) {
				return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
			},
			_initContainer: function (t) {
				t = this._container = _e(t);
				if (!t) throw new Error("Map container not found.");
				if (t._leaflet_id) throw new Error("Map container is already initialized.");
				S(t, "scroll", this._onScroll, this), (this._containerId = h(t));
			},
			_initLayout: function () {
				var t = this._container,
					e =
						((this._fadeAnimated = this.options.fadeAnimation && b.any3d),
						M(t, "leaflet-container" + (b.touch ? " leaflet-touch" : "") + (b.retina ? " leaflet-retina" : "") + (b.ielt9 ? " leaflet-oldie" : "") + (b.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")),
						pe(t, "position"));
				"absolute" !== e && "relative" !== e && "fixed" !== e && "sticky" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
			},
			_initPanes: function () {
				var t = (this._panes = {});
				(this._paneRenderers = {}),
					(this._mapPane = this.createPane("mapPane", this._container)),
					Z(this._mapPane, new p(0, 0)),
					this.createPane("tilePane"),
					this.createPane("overlayPane"),
					this.createPane("shadowPane"),
					this.createPane("markerPane"),
					this.createPane("tooltipPane"),
					this.createPane("popupPane"),
					this.options.markerZoomAnimation || (M(t.markerPane, "leaflet-zoom-hide"), M(t.shadowPane, "leaflet-zoom-hide"));
			},
			_resetView: function (t, e, i) {
				Z(this._mapPane, new p(0, 0));
				var n = !this._loaded,
					o = ((this._loaded = !0), (e = this._limitZoom(e)), this.fire("viewprereset"), this._zoom !== e);
				this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire("viewreset"), n && this.fire("load");
			},
			_moveStart: function (t, e) {
				return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
			},
			_move: function (t, e, i, n) {
				void 0 === e && (e = this._zoom);
				var o = this._zoom !== e;
				return (this._zoom = e), (this._lastCenter = t), (this._pixelOrigin = this._getNewPixelOrigin(t)), n ? i && i.pinch && this.fire("zoom", i) : ((o || (i && i.pinch)) && this.fire("zoom", i), this.fire("move", i)), this;
			},
			_moveEnd: function (t) {
				return t && this.fire("zoomend"), this.fire("moveend");
			},
			_stop: function () {
				return r(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
			},
			_rawPanBy: function (t) {
				Z(this._mapPane, this._getMapPanePos().subtract(t));
			},
			_getZoomSpan: function () {
				return this.getMaxZoom() - this.getMinZoom();
			},
			_panInsideMaxBounds: function () {
				this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
			},
			_checkIfLoaded: function () {
				if (!this._loaded) throw new Error("Set map center and zoom first.");
			},
			_initEvents: function (t) {
				this._targets = {};
				var e = t ? k : S;
				e((this._targets[h(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this),
					this.options.trackResize && e(window, "resize", this._onResize, this),
					b.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
			},
			_onResize: function () {
				r(this._resizeRequest),
					(this._resizeRequest = x(function () {
						this.invalidateSize({ debounceMoveend: !0 });
					}, this));
			},
			_onScroll: function () {
				(this._container.scrollTop = 0), (this._container.scrollLeft = 0);
			},
			_onMoveEnd: function () {
				var t = this._getMapPanePos();
				Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
			},
			_findEventTargets: function (t, e) {
				for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, r = !1; s; ) {
					if ((i = this._targets[h(s)]) && ("click" === e || "preclick" === e) && this._draggableMoved(i)) {
						r = !0;
						break;
					}
					if (i && i.listens(e, !0)) {
						if (o && !Fe(s, t)) break;
						if ((n.push(i), o)) break;
					}
					if (s === this._container) break;
					s = s.parentNode;
				}
				return (n = n.length || r || o || !this.listens(e, !0) ? n : [this]);
			},
			_isClickDisabled: function (t) {
				for (; t && t !== this._container; ) {
					if (t._leaflet_disable_click) return !0;
					t = t.parentNode;
				}
			},
			_handleDOMEvent: function (t) {
				var e,
					i = t.target || t.srcElement;
				!this._loaded || i._leaflet_disable_events || ("click" === t.type && this._isClickDisabled(i)) || ("mousedown" === (e = t.type) && Me(i), this._fireDOMEvent(t, e));
			},
			_mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
			_fireDOMEvent: function (t, e, i) {
				"click" === t.type && (((a = l({}, t)).type = "preclick"), this._fireDOMEvent(a, a.type, i));
				var n = this._findEventTargets(t, e);
				if (i) {
					for (var o = [], s = 0; s < i.length; s++) i[s].listens(e, !0) && o.push(i[s]);
					n = o.concat(n);
				}
				if (n.length) {
					"contextmenu" === e && O(t);
					var r,
						a = n[0],
						h = { originalEvent: t };
					for (
						"keypress" !== t.type &&
							"keydown" !== t.type &&
							"keyup" !== t.type &&
							((r = a.getLatLng && (!a._radius || a._radius <= 10)),
							(h.containerPoint = r ? this.latLngToContainerPoint(a.getLatLng()) : this.mouseEventToContainerPoint(t)),
							(h.layerPoint = this.containerPointToLayerPoint(h.containerPoint)),
							(h.latlng = r ? a.getLatLng() : this.layerPointToLatLng(h.layerPoint))),
							s = 0;
						s < n.length;
						s++
					)
						if ((n[s].fire(e, h, !0), h.originalEvent._stopped || (!1 === n[s].options.bubblingMouseEvents && -1 !== G(this._mouseEvents, e)))) return;
				}
			},
			_draggableMoved: function (t) {
				return ((t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
			},
			_clearHandlers: function () {
				for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable();
			},
			whenReady: function (t, e) {
				return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
			},
			_getMapPanePos: function () {
				return Pe(this._mapPane) || new p(0, 0);
			},
			_moved: function () {
				var t = this._getMapPanePos();
				return t && !t.equals([0, 0]);
			},
			_getTopLeftPoint: function (t, e) {
				return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos());
			},
			_getNewPixelOrigin: function (t, e) {
				var i = this.getSize()._divideBy(2);
				return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
			},
			_latLngToNewLayerPoint: function (t, e, i) {
				i = this._getNewPixelOrigin(i, e);
				return this.project(t, e)._subtract(i);
			},
			_latLngBoundsToNewLayerBounds: function (t, e, i) {
				i = this._getNewPixelOrigin(i, e);
				return _([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)]);
			},
			_getCenterLayerPoint: function () {
				return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
			},
			_getCenterOffset: function (t) {
				return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
			},
			_limitCenter: function (t, e, i) {
				var n, o;
				return !i || ((n = this.project(t, e)), (o = this.getSize().divideBy(2)), (o = new f(n.subtract(o), n.add(o))), (o = this._getBoundsOffset(o, i, e)), Math.abs(o.x) <= 1 && Math.abs(o.y) <= 1) ? t : this.unproject(n.add(o), e);
			},
			_limitOffset: function (t, e) {
				var i;
				return e ? ((i = new f((i = this.getPixelBounds()).min.add(t), i.max.add(t))), t.add(this._getBoundsOffset(i, e))) : t;
			},
			_getBoundsOffset: function (t, e, i) {
				(e = _(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i))), (i = e.min.subtract(t.min)), (e = e.max.subtract(t.max));
				return new p(this._rebound(i.x, -e.x), this._rebound(i.y, -e.y));
			},
			_rebound: function (t, e) {
				return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
			},
			_limitZoom: function (t) {
				var e = this.getMinZoom(),
					i = this.getMaxZoom(),
					n = b.any3d ? this.options.zoomSnap : 1;
				return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
			},
			_onPanTransitionStep: function () {
				this.fire("move");
			},
			_onPanTransitionEnd: function () {
				z(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
			},
			_tryAnimatedPan: function (t, e) {
				t = this._getCenterOffset(t)._trunc();
				return !(!0 !== (e && e.animate) && !this.getSize().contains(t)) && (this.panBy(t, e), !0);
			},
			_createAnimProxy: function () {
				var t = (this._proxy = P("div", "leaflet-proxy leaflet-zoom-animated"));
				this._panes.mapPane.appendChild(t),
					this.on(
						"zoomanim",
						function (t) {
							var e = ue,
								i = this._proxy.style[e];
							be(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd();
						},
						this,
					),
					this.on("load moveend", this._animMoveEnd, this),
					this._on("unload", this._destroyAnimProxy, this);
			},
			_destroyAnimProxy: function () {
				T(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
			},
			_animMoveEnd: function () {
				var t = this.getCenter(),
					e = this.getZoom();
				be(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
			},
			_catchTransitionEnd: function (t) {
				this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd();
			},
			_nothingToAnimate: function () {
				return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
			},
			_tryAnimatedZoom: function (t, e, i) {
				if (!this._animatingZoom) {
					if (((i = i || {}), !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)) return !1;
					var n = this.getZoomScale(e),
						n = this._getCenterOffset(t)._divideBy(1 - 1 / n);
					if (!0 !== i.animate && !this.getSize().contains(n)) return !1;
					x(function () {
						this._moveStart(!0, !1)._animateZoom(t, e, !0);
					}, this);
				}
				return !0;
			},
			_animateZoom: function (t, e, i, n) {
				this._mapPane &&
					(i && ((this._animatingZoom = !0), (this._animateToCenter = t), (this._animateToZoom = e), M(this._mapPane, "leaflet-zoom-anim")),
					this.fire("zoomanim", { center: t, zoom: e, noUpdate: n }),
					this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
					this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
					setTimeout(a(this._onZoomTransitionEnd, this), 250));
			},
			_onZoomTransitionEnd: function () {
				this._animatingZoom &&
					(this._mapPane && z(this._mapPane, "leaflet-zoom-anim"),
					(this._animatingZoom = !1),
					this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
					this._tempFireZoomEvent && this.fire("zoom"),
					delete this._tempFireZoomEvent,
					this.fire("move"),
					this._moveEnd(!0));
			},
		});
	function Ue(t) {
		return new B(t);
	}
	var Ve,
		B = et.extend({
			options: { position: "topright" },
			initialize: function (t) {
				c(this, t);
			},
			getPosition: function () {
				return this.options.position;
			},
			setPosition: function (t) {
				var e = this._map;
				return e && e.removeControl(this), (this.options.position = t), e && e.addControl(this), this;
			},
			getContainer: function () {
				return this._container;
			},
			addTo: function (t) {
				this.remove(), (this._map = t);
				var e = (this._container = this.onAdd(t)),
					i = this.getPosition(),
					t = t._controlCorners[i];
				return M(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? t.insertBefore(e, t.firstChild) : t.appendChild(e), this._map.on("unload", this.remove, this), this;
			},
			remove: function () {
				return this._map && (T(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), (this._map = null)), this;
			},
			_refocusOnMap: function (t) {
				this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus();
			},
		}),
		qe =
			(A.include({
				addControl: function (t) {
					return t.addTo(this), this;
				},
				removeControl: function (t) {
					return t.remove(), this;
				},
				_initControlPos: function () {
					var i = (this._controlCorners = {}),
						n = "leaflet-",
						o = (this._controlContainer = P("div", n + "control-container", this._container));
					function t(t, e) {
						i[t + e] = P("div", n + t + " " + n + e, o);
					}
					t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
				},
				_clearControlPos: function () {
					for (var t in this._controlCorners) T(this._controlCorners[t]);
					T(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
				},
			}),
			B.extend({
				options: {
					collapsed: !0,
					position: "topright",
					autoZIndex: !0,
					hideSingleBase: !1,
					sortLayers: !1,
					sortFunction: function (t, e, i, n) {
						return i < n ? -1 : n < i ? 1 : 0;
					},
				},
				initialize: function (t, e, i) {
					for (var n in (c(this, i), (this._layerControlInputs = []), (this._layers = []), (this._lastZIndex = 0), (this._handlingClick = !1), t)) this._addLayer(t[n], n);
					for (n in e) this._addLayer(e[n], n, !0);
				},
				onAdd: function (t) {
					this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);
					for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
					return this._container;
				},
				addTo: function (t) {
					return B.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
				},
				onRemove: function () {
					this._map.off("zoomend", this._checkDisabledLayers, this);
					for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this);
				},
				addBaseLayer: function (t, e) {
					return this._addLayer(t, e), this._map ? this._update() : this;
				},
				addOverlay: function (t, e) {
					return this._addLayer(t, e, !0), this._map ? this._update() : this;
				},
				removeLayer: function (t) {
					t.off("add remove", this._onLayerChange, this);
					t = this._getLayer(h(t));
					return t && this._layers.splice(this._layers.indexOf(t), 1), this._map ? this._update() : this;
				},
				expand: function () {
					M(this._container, "leaflet-control-layers-expanded"), (this._section.style.height = null);
					var t = this._map.getSize().y - (this._container.offsetTop + 50);
					return t < this._section.clientHeight ? (M(this._section, "leaflet-control-layers-scrollbar"), (this._section.style.height = t + "px")) : z(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
				},
				collapse: function () {
					return z(this._container, "leaflet-control-layers-expanded"), this;
				},
				_initLayout: function () {
					var t = "leaflet-control-layers",
						e = (this._container = P("div", t)),
						i = this.options.collapsed,
						n = (e.setAttribute("aria-haspopup", !0), Ie(e), Be(e), (this._section = P("section", t + "-list"))),
						o = (i && (this._map.on("click", this.collapse, this), S(e, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this)), (this._layersLink = P("a", t + "-toggle", e)));
					(o.href = "#"),
						(o.title = "Layers"),
						o.setAttribute("role", "button"),
						S(
							o,
							{
								keydown: function (t) {
									13 === t.keyCode && this._expandSafely();
								},
								click: function (t) {
									O(t), this._expandSafely();
								},
							},
							this,
						),
						i || this.expand(),
						(this._baseLayersList = P("div", t + "-base", n)),
						(this._separator = P("div", t + "-separator", n)),
						(this._overlaysList = P("div", t + "-overlays", n)),
						e.appendChild(n);
				},
				_getLayer: function (t) {
					for (var e = 0; e < this._layers.length; e++) if (this._layers[e] && h(this._layers[e].layer) === t) return this._layers[e];
				},
				_addLayer: function (t, e, i) {
					this._map && t.on("add remove", this._onLayerChange, this),
						this._layers.push({ layer: t, name: e, overlay: i }),
						this.options.sortLayers &&
							this._layers.sort(
								a(function (t, e) {
									return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
								}, this),
							),
						this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
						this._expandIfNotCollapsed();
				},
				_update: function () {
					if (this._container) {
						me(this._baseLayersList), me(this._overlaysList), (this._layerControlInputs = []);
						for (var t, e, i, n = 0, o = 0; o < this._layers.length; o++) (i = this._layers[o]), this._addItem(i), (e = e || i.overlay), (t = t || !i.overlay), (n += i.overlay ? 0 : 1);
						this.options.hideSingleBase && (this._baseLayersList.style.display = (t = t && 1 < n) ? "" : "none"), (this._separator.style.display = e && t ? "" : "none");
					}
					return this;
				},
				_onLayerChange: function (t) {
					this._handlingClick || this._update();
					var e = this._getLayer(h(t.target)),
						t = e.overlay ? ("add" === t.type ? "overlayadd" : "overlayremove") : "add" === t.type ? "baselayerchange" : null;
					t && this._map.fire(t, e);
				},
				_createRadioElement: function (t, e) {
					(t = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>"), (e = document.createElement("div"));
					return (e.innerHTML = t), e.firstChild;
				},
				_addItem: function (t) {
					var e,
						i = document.createElement("label"),
						n = this._map.hasLayer(t.layer),
						n =
							(t.overlay ? (((e = document.createElement("input")).type = "checkbox"), (e.className = "leaflet-control-layers-selector"), (e.defaultChecked = n)) : (e = this._createRadioElement("leaflet-base-layers_" + h(this), n)),
							this._layerControlInputs.push(e),
							(e.layerId = h(t.layer)),
							S(e, "click", this._onInputClick, this),
							document.createElement("span")),
						o = ((n.innerHTML = " " + t.name), document.createElement("span"));
					return i.appendChild(o), o.appendChild(e), o.appendChild(n), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i;
				},
				_onInputClick: function () {
					var t,
						e,
						i = this._layerControlInputs,
						n = [],
						o = [];
					this._handlingClick = !0;
					for (var s = i.length - 1; 0 <= s; s--) (t = i[s]), (e = this._getLayer(t.layerId).layer), t.checked ? n.push(e) : t.checked || o.push(e);
					for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
					for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
					(this._handlingClick = !1), this._refocusOnMap();
				},
				_checkDisabledLayers: function () {
					for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; 0 <= o; o--)
						(t = i[o]), (e = this._getLayer(t.layerId).layer), (t.disabled = (void 0 !== e.options.minZoom && n < e.options.minZoom) || (void 0 !== e.options.maxZoom && n > e.options.maxZoom));
				},
				_expandIfNotCollapsed: function () {
					return this._map && !this.options.collapsed && this.expand(), this;
				},
				_expandSafely: function () {
					var t = this._section;
					S(t, "click", O),
						this.expand(),
						setTimeout(function () {
							k(t, "click", O);
						});
				},
			})),
		Ge = B.extend({
			options: { position: "topleft", zoomInText: '<span aria-hidden="true">+</span>', zoomInTitle: "Zoom in", zoomOutText: '<span aria-hidden="true">&#x2212;</span>', zoomOutTitle: "Zoom out" },
			onAdd: function (t) {
				var e = "leaflet-control-zoom",
					i = P("div", e + " leaflet-bar"),
					n = this.options;
				return (
					(this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn)),
					(this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut)),
					this._updateDisabled(),
					t.on("zoomend zoomlevelschange", this._updateDisabled, this),
					i
				);
			},
			onRemove: function (t) {
				t.off("zoomend zoomlevelschange", this._updateDisabled, this);
			},
			disable: function () {
				return (this._disabled = !0), this._updateDisabled(), this;
			},
			enable: function () {
				return (this._disabled = !1), this._updateDisabled(), this;
			},
			_zoomIn: function (t) {
				!this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
			},
			_zoomOut: function (t) {
				!this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
			},
			_createButton: function (t, e, i, n, o) {
				i = P("a", i, n);
				return (i.innerHTML = t), (i.href = "#"), (i.title = e), i.setAttribute("role", "button"), i.setAttribute("aria-label", e), Ie(i), S(i, "click", Re), S(i, "click", o, this), S(i, "click", this._refocusOnMap, this), i;
			},
			_updateDisabled: function () {
				var t = this._map,
					e = "leaflet-disabled";
				z(this._zoomInButton, e),
					z(this._zoomOutButton, e),
					this._zoomInButton.setAttribute("aria-disabled", "false"),
					this._zoomOutButton.setAttribute("aria-disabled", "false"),
					(!this._disabled && t._zoom !== t.getMinZoom()) || (M(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")),
					(!this._disabled && t._zoom !== t.getMaxZoom()) || (M(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
			},
		}),
		Ke =
			(A.mergeOptions({ zoomControl: !0 }),
			A.addInitHook(function () {
				this.options.zoomControl && ((this.zoomControl = new Ge()), this.addControl(this.zoomControl));
			}),
			B.extend({
				options: { position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0 },
				onAdd: function (t) {
					var e = "leaflet-control-scale",
						i = P("div", e),
						n = this.options;
					return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
				},
				onRemove: function (t) {
					t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
				},
				_addScales: function (t, e, i) {
					t.metric && (this._mScale = P("div", e, i)), t.imperial && (this._iScale = P("div", e, i));
				},
				_update: function () {
					var t = this._map,
						e = t.getSize().y / 2,
						t = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
					this._updateScales(t);
				},
				_updateScales: function (t) {
					this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
				},
				_updateMetric: function (t) {
					var e = this._getRoundNum(t);
					this._updateScale(this._mScale, e < 1e3 ? e + " m" : e / 1e3 + " km", e / t);
				},
				_updateImperial: function (t) {
					var e,
						i,
						t = 3.2808399 * t;
					5280 < t ? ((i = this._getRoundNum((e = t / 5280))), this._updateScale(this._iScale, i + " mi", i / e)) : ((i = this._getRoundNum(t)), this._updateScale(this._iScale, i + " ft", i / t));
				},
				_updateScale: function (t, e, i) {
					(t.style.width = Math.round(this.options.maxWidth * i) + "px"), (t.innerHTML = e);
				},
				_getRoundNum: function (t) {
					var e = Math.pow(10, (Math.floor(t) + "").length - 1),
						t = t / e;
					return e * (t = 10 <= t ? 10 : 5 <= t ? 5 : 3 <= t ? 3 : 2 <= t ? 2 : 1);
				},
			})),
		Ye = B.extend({
			options: {
				position: "bottomright",
				prefix: '<a href="https://andrerio.tech" title="A JavaScript library for interactive maps" target="_blank">' + "andreriotech</a>",
			},
			initialize: function (t) {
				c(this, t), (this._attributions = {});
			},
			onAdd: function (t) {
				for (var e in (((t.attributionControl = this)._container = P("div", "leaflet-control-attribution")), Ie(this._container), t._layers)) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
				return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
			},
			onRemove: function (t) {
				t.off("layeradd", this._addAttribution, this);
			},
			_addAttribution: function (t) {
				t.layer.getAttribution &&
					(this.addAttribution(t.layer.getAttribution()),
					t.layer.once(
						"remove",
						function () {
							this.removeAttribution(t.layer.getAttribution());
						},
						this,
					));
			},
			setPrefix: function (t) {
				return (this.options.prefix = t), this._update(), this;
			},
			addAttribution: function (t) {
				return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this;
			},
			removeAttribution: function (t) {
				return t && this._attributions[t] && (this._attributions[t]--, this._update()), this;
			},
			_update: function () {
				if (this._map) {
					var t,
						e = [];
					for (t in this._attributions) this._attributions[t] && e.push(t);
					var i = [];
					this.options.prefix && i.push(this.options.prefix), e.length && i.push(e.join(", ")), (this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> '));
				}
			},
		}),
		n =
			(A.mergeOptions({ attributionControl: !0 }),
			A.addInitHook(function () {
				this.options.attributionControl && new Ye().addTo(this);
			}),
			(B.Layers = qe),
			(B.Zoom = Ge),
			(B.Scale = Ke),
			(B.Attribution = Ye),
			(Ue.layers = function (t, e, i) {
				return new qe(t, e, i);
			}),
			(Ue.zoom = function (t) {
				return new Ge(t);
			}),
			(Ue.scale = function (t) {
				return new Ke(t);
			}),
			(Ue.attribution = function (t) {
				return new Ye(t);
			}),
			et.extend({
				initialize: function (t) {
					this._map = t;
				},
				enable: function () {
					return this._enabled || ((this._enabled = !0), this.addHooks()), this;
				},
				disable: function () {
					return this._enabled && ((this._enabled = !1), this.removeHooks()), this;
				},
				enabled: function () {
					return !!this._enabled;
				},
			})),
		ft =
			((n.addTo = function (t, e) {
				return t.addHandler(e, this), this;
			}),
			{ Events: e }),
		Xe = b.touch ? "touchstart mousedown" : "mousedown",
		Je = it.extend({
			options: { clickTolerance: 3 },
			initialize: function (t, e, i, n) {
				c(this, n), (this._element = t), (this._dragStartTarget = e || t), (this._preventOutline = i);
			},
			enable: function () {
				this._enabled || (S(this._dragStartTarget, Xe, this._onDown, this), (this._enabled = !0));
			},
			disable: function () {
				this._enabled && (Je._dragging === this && this.finishDrag(!0), k(this._dragStartTarget, Xe, this._onDown, this), (this._enabled = !1), (this._moved = !1));
			},
			_onDown: function (t) {
				var e, i;
				this._enabled &&
					((this._moved = !1),
					ve(this._element, "leaflet-zoom-anim") ||
						(t.touches && 1 !== t.touches.length
							? Je._dragging === this && this.finishDrag()
							: Je._dragging ||
							  t.shiftKey ||
							  (1 !== t.which && 1 !== t.button && !t.touches) ||
							  ((Je._dragging = this)._preventOutline && Me(this._element),
							  Le(),
							  re(),
							  this._moving ||
									(this.fire("down"),
									(i = t.touches ? t.touches[0] : t),
									(e = Ce(this._element)),
									(this._startPoint = new p(i.clientX, i.clientY)),
									(this._startPos = Pe(this._element)),
									(this._parentScale = Ze(e)),
									(i = "mousedown" === t.type),
									S(document, i ? "mousemove" : "touchmove", this._onMove, this),
									S(document, i ? "mouseup" : "touchend touchcancel", this._onUp, this)))));
			},
			_onMove: function (t) {
				var e;
				this._enabled &&
					(t.touches && 1 < t.touches.length
						? (this._moved = !0)
						: (!(e = new p((e = t.touches && 1 === t.touches.length ? t.touches[0] : t).clientX, e.clientY)._subtract(this._startPoint)).x && !e.y) ||
						  Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance ||
						  ((e.x /= this._parentScale.x),
						  (e.y /= this._parentScale.y),
						  O(t),
						  this._moved ||
								(this.fire("dragstart"),
								(this._moved = !0),
								M(document.body, "leaflet-dragging"),
								(this._lastTarget = t.target || t.srcElement),
								window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
								M(this._lastTarget, "leaflet-drag-target")),
						  (this._newPos = this._startPos.add(e)),
						  (this._moving = !0),
						  (this._lastEvent = t),
						  this._updatePosition()));
			},
			_updatePosition: function () {
				var t = { originalEvent: this._lastEvent };
				this.fire("predrag", t), Z(this._element, this._newPos), this.fire("drag", t);
			},
			_onUp: function () {
				this._enabled && this.finishDrag();
			},
			finishDrag: function (t) {
				z(document.body, "leaflet-dragging"),
					this._lastTarget && (z(this._lastTarget, "leaflet-drag-target"), (this._lastTarget = null)),
					k(document, "mousemove touchmove", this._onMove, this),
					k(document, "mouseup touchend touchcancel", this._onUp, this),
					Te(),
					ae(),
					this._moved && this._moving && this.fire("dragend", { noInertia: t, distance: this._newPos.distanceTo(this._startPos) }),
					(this._moving = !1),
					(Je._dragging = !1);
			},
		});
	function $e(t, e) {
		if (e && t.length) {
			var i = (t = (function (t, e) {
					for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
						(function (t, e) {
							var i = e.x - t.x,
								e = e.y - t.y;
							return i * i + e * e;
						})(t[n], t[o]) > e && (i.push(t[n]), (o = n));
					o < s - 1 && i.push(t[s - 1]);
					return i;
				})(t, (e = e * e))),
				n = i.length,
				o = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(n);
			(o[0] = o[n - 1] = 1),
				(function t(e, i, n, o, s) {
					var r,
						a,
						h,
						l = 0;
					for (a = o + 1; a <= s - 1; a++) (h = ni(e[a], e[o], e[s], !0)), l < h && ((r = a), (l = h));
					n < l && ((i[r] = 1), t(e, i, n, o, r), t(e, i, n, r, s));
				})(i, o, e, 0, n - 1);
			var s,
				r = [];
			for (s = 0; s < n; s++) o[s] && r.push(i[s]);
			return r;
		}
		return t.slice();
	}
	function Qe(t, e, i) {
		return Math.sqrt(ni(t, e, i, !0));
	}
	function ti(t, e, i, n, o) {
		var s,
			r,
			a,
			h = n ? Ve : ii(t, i),
			l = ii(e, i);
		for (Ve = l; ; ) {
			if (!(h | l)) return [t, e];
			if (h & l) return !1;
			(a = ii((r = ei(t, e, (s = h || l), i, o)), i)), s === h ? ((t = r), (h = a)) : ((e = r), (l = a));
		}
	}
	function ei(t, e, i, n, o) {
		var s,
			r,
			a = e.x - t.x,
			e = e.y - t.y,
			h = n.min,
			n = n.max;
		return (
			8 & i ? ((s = t.x + (a * (n.y - t.y)) / e), (r = n.y)) : 4 & i ? ((s = t.x + (a * (h.y - t.y)) / e), (r = h.y)) : 2 & i ? ((s = n.x), (r = t.y + (e * (n.x - t.x)) / a)) : 1 & i && ((s = h.x), (r = t.y + (e * (h.x - t.x)) / a)),
			new p(s, r, o)
		);
	}
	function ii(t, e) {
		var i = 0;
		return t.x < e.min.x ? (i |= 1) : t.x > e.max.x && (i |= 2), t.y < e.min.y ? (i |= 4) : t.y > e.max.y && (i |= 8), i;
	}
	function ni(t, e, i, n) {
		var o = e.x,
			e = e.y,
			s = i.x - o,
			r = i.y - e,
			a = s * s + r * r;
		return 0 < a && (1 < (a = ((t.x - o) * s + (t.y - e) * r) / a) ? ((o = i.x), (e = i.y)) : 0 < a && ((o += s * a), (e += r * a))), (s = t.x - o), (r = t.y - e), n ? s * s + r * r : new p(o, e);
	}
	function I(t) {
		return !d(t[0]) || ("object" != typeof t[0][0] && void 0 !== t[0][0]);
	}
	function oi(t) {
		return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), I(t);
	}
	function si(t, e) {
		var i, n, o, s, r;
		if (!t || 0 === t.length) throw new Error("latlngs not passed");
		I(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), (t = t[0]));
		var a,
			h = [];
		for (a in t) h.push(e.project(w(t[a])));
		for (var l = h.length, u = 0, c = 0; u < l - 1; u++) c += h[u].distanceTo(h[u + 1]) / 2;
		if (0 === c) r = h[0];
		else
			for (i = u = 0; u < l - 1; u++)
				if (((n = h[u]), (o = h[u + 1]), c < (i += s = n.distanceTo(o)))) {
					r = [o.x - (s = (i - c) / s) * (o.x - n.x), o.y - s * (o.y - n.y)];
					break;
				}
		return e.unproject(m(r));
	}
	gt = {
		__proto__: null,
		simplify: $e,
		pointToSegmentDistance: Qe,
		closestPointOnSegment: function (t, e, i) {
			return ni(t, e, i);
		},
		clipSegment: ti,
		_getEdgeIntersection: ei,
		_getBitCode: ii,
		_sqClosestPointOnSegment: ni,
		isFlat: I,
		_flat: oi,
		polylineCenter: si,
	};
	function ri(t, e, i) {
		for (var n, o, s, r, a, h, l, u = [1, 4, 2, 8], c = 0, d = t.length; c < d; c++) t[c]._code = ii(t[c], e);
		for (s = 0; s < 4; s++) {
			for (h = u[s], n = [], c = 0, o = (d = t.length) - 1; c < d; o = c++)
				(r = t[c]), (a = t[o]), r._code & h ? a._code & h || (((l = ei(a, r, h, e, i))._code = ii(l, e)), n.push(l)) : (a._code & h && (((l = ei(a, r, h, e, i))._code = ii(l, e)), n.push(l)), n.push(r));
			t = n;
		}
		return t;
	}
	function ai(t, e) {
		var i, n, o, s, r, a;
		if (!t || 0 === t.length) throw new Error("latlngs not passed");
		I(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), (t = t[0]));
		var h,
			l = [];
		for (h in t) l.push(e.project(w(t[h])));
		for (var u = l.length, c = (s = r = 0), d = 0, _ = u - 1; d < u; _ = d++) (i = l[d]), (n = l[_]), (o = i.y * n.x - n.y * i.x), (s += (i.x + n.x) * o), (r += (i.y + n.y) * o), (c += 3 * o);
		return (a = 0 === c ? l[0] : [s / c, r / c]), e.unproject(m(a));
	}
	var vt = { __proto__: null, clipPolygon: ri, polygonCenter: ai },
		yt = {
			project: function (t) {
				return new p(t.lng, t.lat);
			},
			unproject: function (t) {
				return new v(t.y, t.x);
			},
			bounds: new f([-180, -90], [180, 90]),
		},
		xt = {
			R: 6378137,
			R_MINOR: 6356752.314245179,
			bounds: new f([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
			project: function (t) {
				var e = Math.PI / 180,
					i = this.R,
					n = t.lat * e,
					o = this.R_MINOR / i,
					o = Math.sqrt(1 - o * o),
					s = o * Math.sin(n),
					s = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - s) / (1 + s), o / 2),
					n = -i * Math.log(Math.max(s, 1e-10));
				return new p(t.lng * e * i, n);
			},
			unproject: function (t) {
				for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, l = 0.1; h < 15 && 1e-7 < Math.abs(l); h++)
					(e = s * Math.sin(a)), (e = Math.pow((1 - e) / (1 + e), s / 2)), (a += l = Math.PI / 2 - 2 * Math.atan(r * e) - a);
				return new v(a * i, (t.x * i) / n);
			},
		},
		wt = { __proto__: null, LonLat: yt, Mercator: xt, SphericalMercator: rt },
		Pt = l({}, st, { code: "EPSG:3395", projection: xt, transformation: ht((bt = 0.5 / (Math.PI * xt.R)), 0.5, -bt, 0.5) }),
		hi = l({}, st, { code: "EPSG:4326", projection: yt, transformation: ht(1 / 180, 1, -1 / 180, 0.5) }),
		Lt = l({}, ot, {
			projection: yt,
			transformation: ht(1, 0, -1, 0),
			scale: function (t) {
				return Math.pow(2, t);
			},
			zoom: function (t) {
				return Math.log(t) / Math.LN2;
			},
			distance: function (t, e) {
				var i = e.lng - t.lng,
					e = e.lat - t.lat;
				return Math.sqrt(i * i + e * e);
			},
			infinite: !0,
		}),
		o =
			((ot.Earth = st),
			(ot.EPSG3395 = Pt),
			(ot.EPSG3857 = lt),
			(ot.EPSG900913 = ut),
			(ot.EPSG4326 = hi),
			(ot.Simple = Lt),
			it.extend({
				options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: !0 },
				addTo: function (t) {
					return t.addLayer(this), this;
				},
				remove: function () {
					return this.removeFrom(this._map || this._mapToAdd);
				},
				removeFrom: function (t) {
					return t && t.removeLayer(this), this;
				},
				getPane: function (t) {
					return this._map.getPane(t ? this.options[t] || t : this.options.pane);
				},
				addInteractiveTarget: function (t) {
					return (this._map._targets[h(t)] = this);
				},
				removeInteractiveTarget: function (t) {
					return delete this._map._targets[h(t)], this;
				},
				getAttribution: function () {
					return this.options.attribution;
				},
				_layerAdd: function (t) {
					var e,
						i = t.target;
					i.hasLayer(this) &&
						((this._map = i),
						(this._zoomAnimated = i._zoomAnimated),
						this.getEvents &&
							((e = this.getEvents()),
							i.on(e, this),
							this.once(
								"remove",
								function () {
									i.off(e, this);
								},
								this,
							)),
						this.onAdd(i),
						this.fire("add"),
						i.fire("layeradd", { layer: this }));
				},
			})),
		li =
			(A.include({
				addLayer: function (t) {
					var e;
					if (t._layerAdd) return (e = h(t)), this._layers[e] || (((this._layers[e] = t)._mapToAdd = this), t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this;
					throw new Error("The provided object is not a Layer.");
				},
				removeLayer: function (t) {
					var e = h(t);
					return this._layers[e] && (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), (t._map = t._mapToAdd = null)), this;
				},
				hasLayer: function (t) {
					return h(t) in this._layers;
				},
				eachLayer: function (t, e) {
					for (var i in this._layers) t.call(e, this._layers[i]);
					return this;
				},
				_addLayers: function (t) {
					for (var e = 0, i = (t = t ? (d(t) ? t : [t]) : []).length; e < i; e++) this.addLayer(t[e]);
				},
				_addZoomLimit: function (t) {
					(isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) || ((this._zoomBoundLayers[h(t)] = t), this._updateZoomLevels());
				},
				_removeZoomLimit: function (t) {
					t = h(t);
					this._zoomBoundLayers[t] && (delete this._zoomBoundLayers[t], this._updateZoomLevels());
				},
				_updateZoomLevels: function () {
					var t,
						e = 1 / 0,
						i = -1 / 0,
						n = this._getZoomSpan();
					for (t in this._zoomBoundLayers) var o = this._zoomBoundLayers[t].options, e = void 0 === o.minZoom ? e : Math.min(e, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
					(this._layersMaxZoom = i === -1 / 0 ? void 0 : i),
						(this._layersMinZoom = e === 1 / 0 ? void 0 : e),
						n !== this._getZoomSpan() && this.fire("zoomlevelschange"),
						void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
						void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
				},
			}),
			o.extend({
				initialize: function (t, e) {
					var i, n;
					if ((c(this, e), (this._layers = {}), t)) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
				},
				addLayer: function (t) {
					var e = this.getLayerId(t);
					return (this._layers[e] = t), this._map && this._map.addLayer(t), this;
				},
				removeLayer: function (t) {
					t = t in this._layers ? t : this.getLayerId(t);
					return this._map && this._layers[t] && this._map.removeLayer(this._layers[t]), delete this._layers[t], this;
				},
				hasLayer: function (t) {
					return ("number" == typeof t ? t : this.getLayerId(t)) in this._layers;
				},
				clearLayers: function () {
					return this.eachLayer(this.removeLayer, this);
				},
				invoke: function (t) {
					var e,
						i,
						n = Array.prototype.slice.call(arguments, 1);
					for (e in this._layers) (i = this._layers[e])[t] && i[t].apply(i, n);
					return this;
				},
				onAdd: function (t) {
					this.eachLayer(t.addLayer, t);
				},
				onRemove: function (t) {
					this.eachLayer(t.removeLayer, t);
				},
				eachLayer: function (t, e) {
					for (var i in this._layers) t.call(e, this._layers[i]);
					return this;
				},
				getLayer: function (t) {
					return this._layers[t];
				},
				getLayers: function () {
					var t = [];
					return this.eachLayer(t.push, t), t;
				},
				setZIndex: function (t) {
					return this.invoke("setZIndex", t);
				},
				getLayerId: h,
			})),
		ui = li.extend({
			addLayer: function (t) {
				return this.hasLayer(t) ? this : (t.addEventParent(this), li.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
			},
			removeLayer: function (t) {
				return this.hasLayer(t) ? ((t = t in this._layers ? this._layers[t] : t).removeEventParent(this), li.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
			},
			setStyle: function (t) {
				return this.invoke("setStyle", t);
			},
			bringToFront: function () {
				return this.invoke("bringToFront");
			},
			bringToBack: function () {
				return this.invoke("bringToBack");
			},
			getBounds: function () {
				var t,
					e = new s();
				for (t in this._layers) {
					var i = this._layers[t];
					e.extend(i.getBounds ? i.getBounds() : i.getLatLng());
				}
				return e;
			},
		}),
		ci = et.extend({
			options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: !1 },
			initialize: function (t) {
				c(this, t);
			},
			createIcon: function (t) {
				return this._createIcon("icon", t);
			},
			createShadow: function (t) {
				return this._createIcon("shadow", t);
			},
			_createIcon: function (t, e) {
				var i = this._getIconUrl(t);
				if (i)
					return (
						(i = this._createImg(i, e && "IMG" === e.tagName ? e : null)),
						this._setIconStyles(i, t),
						(!this.options.crossOrigin && "" !== this.options.crossOrigin) || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
						i
					);
				if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
				return null;
			},
			_setIconStyles: function (t, e) {
				var i = this.options,
					n = i[e + "Size"],
					n = m((n = "number" == typeof n ? [n, n] : n)),
					o = m(("shadow" === e && i.shadowAnchor) || i.iconAnchor || (n && n.divideBy(2, !0)));
				(t.className = "leaflet-marker-" + e + " " + (i.className || "")), o && ((t.style.marginLeft = -o.x + "px"), (t.style.marginTop = -o.y + "px")), n && ((t.style.width = n.x + "px"), (t.style.height = n.y + "px"));
			},
			_createImg: function (t, e) {
				return ((e = e || document.createElement("img")).src = t), e;
			},
			_getIconUrl: function (t) {
				return (b.retina && this.options[t + "RetinaUrl"]) || this.options[t + "Url"];
			},
		});
	var di = ci.extend({
			options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] },
			_getIconUrl: function (t) {
				return "string" != typeof di.imagePath && (di.imagePath = this._detectIconPath()), (this.options.imagePath || di.imagePath) + ci.prototype._getIconUrl.call(this, t);
			},
			_stripUrl: function (t) {
				function e(t, e, i) {
					return (e = e.exec(t)) && e[i];
				}
				return (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) && e(t, /^(.*)marker-icon\.png$/, 1);
			},
			_detectIconPath: function () {
				var t = P("div", "leaflet-default-icon-path", document.body),
					e = pe(t, "background-image") || pe(t, "backgroundImage");
				return document.body.removeChild(t), (e = this._stripUrl(e)) ? e : (t = document.querySelector('link[href$="leaflet.css"]')) ? t.href.substring(0, t.href.length - "leaflet.css".length - 1) : "";
			},
		}),
		_i = n.extend({
			initialize: function (t) {
				this._marker = t;
			},
			addHooks: function () {
				var t = this._marker._icon;
				this._draggable || (this._draggable = new Je(t, t, !0)), this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), M(t, "leaflet-marker-draggable");
			},
			removeHooks: function () {
				this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && z(this._marker._icon, "leaflet-marker-draggable");
			},
			moved: function () {
				return this._draggable && this._draggable._moved;
			},
			_adjustPan: function (t) {
				var e = this._marker,
					i = e._map,
					n = this._marker.options.autoPanSpeed,
					o = this._marker.options.autoPanPadding,
					s = Pe(e._icon),
					r = i.getPixelBounds(),
					a = i.getPixelOrigin(),
					a = _(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
				a.contains(s) ||
					((o = m(
						(Math.max(a.max.x, s.x) - a.max.x) / (r.max.x - a.max.x) - (Math.min(a.min.x, s.x) - a.min.x) / (r.min.x - a.min.x),
						(Math.max(a.max.y, s.y) - a.max.y) / (r.max.y - a.max.y) - (Math.min(a.min.y, s.y) - a.min.y) / (r.min.y - a.min.y),
					).multiplyBy(n)),
					i.panBy(o, { animate: !1 }),
					this._draggable._newPos._add(o),
					this._draggable._startPos._add(o),
					Z(e._icon, this._draggable._newPos),
					this._onDrag(t),
					(this._panRequest = x(this._adjustPan.bind(this, t))));
			},
			_onDragStart: function () {
				(this._oldLatLng = this._marker.getLatLng()), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
			},
			_onPreDrag: function (t) {
				this._marker.options.autoPan && (r(this._panRequest), (this._panRequest = x(this._adjustPan.bind(this, t))));
			},
			_onDrag: function (t) {
				var e = this._marker,
					i = e._shadow,
					n = Pe(e._icon),
					o = e._map.layerPointToLatLng(n);
				i && Z(i, n), (e._latlng = o), (t.latlng = o), (t.oldLatLng = this._oldLatLng), e.fire("move", t).fire("drag", t);
			},
			_onDragEnd: function (t) {
				r(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
			},
		}),
		pi = o.extend({
			options: {
				icon: new di(),
				interactive: !0,
				keyboard: !0,
				title: "",
				alt: "Marker",
				zIndexOffset: 0,
				opacity: 1,
				riseOnHover: !1,
				riseOffset: 250,
				pane: "markerPane",
				shadowPane: "shadowPane",
				bubblingMouseEvents: !1,
				autoPanOnFocus: !0,
				draggable: !1,
				autoPan: !1,
				autoPanPadding: [50, 50],
				autoPanSpeed: 10,
			},
			initialize: function (t, e) {
				c(this, e), (this._latlng = w(t));
			},
			onAdd: function (t) {
				(this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation), this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
			},
			onRemove: function (t) {
				this.dragging && this.dragging.enabled() && ((this.options.draggable = !0), this.dragging.removeHooks()),
					delete this.dragging,
					this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
					this._removeIcon(),
					this._removeShadow();
			},
			getEvents: function () {
				return { zoom: this.update, viewreset: this.update };
			},
			getLatLng: function () {
				return this._latlng;
			},
			setLatLng: function (t) {
				var e = this._latlng;
				return (this._latlng = w(t)), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
			},
			setZIndexOffset: function (t) {
				return (this.options.zIndexOffset = t), this.update();
			},
			getIcon: function () {
				return this.options.icon;
			},
			setIcon: function (t) {
				return (this.options.icon = t), this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
			},
			getElement: function () {
				return this._icon;
			},
			update: function () {
				var t;
				return this._icon && this._map && ((t = this._map.latLngToLayerPoint(this._latlng).round()), this._setPos(t)), this;
			},
			_initIcon: function () {
				var t = this.options,
					e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
					i = t.icon.createIcon(this._icon),
					n = !1,
					i =
						(i !== this._icon && (this._icon && this._removeIcon(), (n = !0), t.title && (i.title = t.title), "IMG" === i.tagName && (i.alt = t.alt || "")),
						M(i, e),
						t.keyboard && ((i.tabIndex = "0"), i.setAttribute("role", "button")),
						(this._icon = i),
						t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
						this.options.autoPanOnFocus && S(i, "focus", this._panOnFocus, this),
						t.icon.createShadow(this._shadow)),
					o = !1;
				i !== this._shadow && (this._removeShadow(), (o = !0)),
					i && (M(i, e), (i.alt = "")),
					(this._shadow = i),
					t.opacity < 1 && this._updateOpacity(),
					n && this.getPane().appendChild(this._icon),
					this._initInteraction(),
					i && o && this.getPane(t.shadowPane).appendChild(this._shadow);
			},
			_removeIcon: function () {
				this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
					this.options.autoPanOnFocus && k(this._icon, "focus", this._panOnFocus, this),
					T(this._icon),
					this.removeInteractiveTarget(this._icon),
					(this._icon = null);
			},
			_removeShadow: function () {
				this._shadow && T(this._shadow), (this._shadow = null);
			},
			_setPos: function (t) {
				this._icon && Z(this._icon, t), this._shadow && Z(this._shadow, t), (this._zIndex = t.y + this.options.zIndexOffset), this._resetZIndex();
			},
			_updateZIndex: function (t) {
				this._icon && (this._icon.style.zIndex = this._zIndex + t);
			},
			_animateZoom: function (t) {
				t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
				this._setPos(t);
			},
			_initInteraction: function () {
				var t;
				this.options.interactive &&
					(M(this._icon, "leaflet-interactive"),
					this.addInteractiveTarget(this._icon),
					_i && ((t = this.options.draggable), this.dragging && ((t = this.dragging.enabled()), this.dragging.disable()), (this.dragging = new _i(this)), t && this.dragging.enable()));
			},
			setOpacity: function (t) {
				return (this.options.opacity = t), this._map && this._updateOpacity(), this;
			},
			_updateOpacity: function () {
				var t = this.options.opacity;
				this._icon && C(this._icon, t), this._shadow && C(this._shadow, t);
			},
			_bringToFront: function () {
				this._updateZIndex(this.options.riseOffset);
			},
			_resetZIndex: function () {
				this._updateZIndex(0);
			},
			_panOnFocus: function () {
				var t,
					e,
					i = this._map;
				i && ((t = (e = this.options.icon.options).iconSize ? m(e.iconSize) : m(0, 0)), (e = e.iconAnchor ? m(e.iconAnchor) : m(0, 0)), i.panInside(this._latlng, { paddingTopLeft: e, paddingBottomRight: t.subtract(e) }));
			},
			_getPopupAnchor: function () {
				return this.options.icon.options.popupAnchor;
			},
			_getTooltipAnchor: function () {
				return this.options.icon.options.tooltipAnchor;
			},
		});
	var mi = o.extend({
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
				fillOpacity: 0.2,
				fillRule: "evenodd",
				interactive: !0,
				bubblingMouseEvents: !0,
			},
			beforeAdd: function (t) {
				this._renderer = t.getRenderer(this);
			},
			onAdd: function () {
				this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
			},
			onRemove: function () {
				this._renderer._removePath(this);
			},
			redraw: function () {
				return this._map && this._renderer._updatePath(this), this;
			},
			setStyle: function (t) {
				return c(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
			},
			bringToFront: function () {
				return this._renderer && this._renderer._bringToFront(this), this;
			},
			bringToBack: function () {
				return this._renderer && this._renderer._bringToBack(this), this;
			},
			getElement: function () {
				return this._path;
			},
			_reset: function () {
				this._project(), this._update();
			},
			_clickTolerance: function () {
				return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
			},
		}),
		fi = mi.extend({
			options: { fill: !0, radius: 10 },
			initialize: function (t, e) {
				c(this, e), (this._latlng = w(t)), (this._radius = this.options.radius);
			},
			setLatLng: function (t) {
				var e = this._latlng;
				return (this._latlng = w(t)), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
			},
			getLatLng: function () {
				return this._latlng;
			},
			setRadius: function (t) {
				return (this.options.radius = this._radius = t), this.redraw();
			},
			getRadius: function () {
				return this._radius;
			},
			setStyle: function (t) {
				var e = (t && t.radius) || this._radius;
				return mi.prototype.setStyle.call(this, t), this.setRadius(e), this;
			},
			_project: function () {
				(this._point = this._map.latLngToLayerPoint(this._latlng)), this._updateBounds();
			},
			_updateBounds: function () {
				var t = this._radius,
					e = this._radiusY || t,
					i = this._clickTolerance(),
					t = [t + i, e + i];
				this._pxBounds = new f(this._point.subtract(t), this._point.add(t));
			},
			_update: function () {
				this._map && this._updatePath();
			},
			_updatePath: function () {
				this._renderer._updateCircle(this);
			},
			_empty: function () {
				return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
			},
			_containsPoint: function (t) {
				return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
			},
		});
	var gi = fi.extend({
		initialize: function (t, e, i) {
			if ((c(this, (e = "number" == typeof e ? l({}, i, { radius: e }) : e)), (this._latlng = w(t)), isNaN(this.options.radius))) throw new Error("Circle radius cannot be NaN");
			this._mRadius = this.options.radius;
		},
		setRadius: function (t) {
			return (this._mRadius = t), this.redraw();
		},
		getRadius: function () {
			return this._mRadius;
		},
		getBounds: function () {
			var t = [this._radius, this._radiusY || this._radius];
			return new s(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
		},
		setStyle: mi.prototype.setStyle,
		_project: function () {
			var t,
				e,
				i,
				n,
				o,
				s = this._latlng.lng,
				r = this._latlng.lat,
				a = this._map,
				h = a.options.crs;
			h.distance === st.distance
				? ((n = Math.PI / 180),
				  (o = this._mRadius / st.R / n),
				  (t = a.project([r + o, s])),
				  (e = a.project([r - o, s])),
				  (e = t.add(e).divideBy(2)),
				  (i = a.unproject(e).lat),
				  (n = Math.acos((Math.cos(o * n) - Math.sin(r * n) * Math.sin(i * n)) / (Math.cos(r * n) * Math.cos(i * n))) / n),
				  (!isNaN(n) && 0 !== n) || (n = o / Math.cos((Math.PI / 180) * r)),
				  (this._point = e.subtract(a.getPixelOrigin())),
				  (this._radius = isNaN(n) ? 0 : e.x - a.project([i, s - n]).x),
				  (this._radiusY = e.y - t.y))
				: ((o = h.unproject(h.project(this._latlng).subtract([this._mRadius, 0]))), (this._point = a.latLngToLayerPoint(this._latlng)), (this._radius = this._point.x - a.latLngToLayerPoint(o).x)),
				this._updateBounds();
		},
	});
	var vi = mi.extend({
		options: { smoothFactor: 1, noClip: !1 },
		initialize: function (t, e) {
			c(this, e), this._setLatLngs(t);
		},
		getLatLngs: function () {
			return this._latlngs;
		},
		setLatLngs: function (t) {
			return this._setLatLngs(t), this.redraw();
		},
		isEmpty: function () {
			return !this._latlngs.length;
		},
		closestLayerPoint: function (t) {
			for (var e = 1 / 0, i = null, n = ni, o = 0, s = this._parts.length; o < s; o++)
				for (var r = this._parts[o], a = 1, h = r.length; a < h; a++) {
					var l,
						u,
						c = n(t, (l = r[a - 1]), (u = r[a]), !0);
					c < e && ((e = c), (i = n(t, l, u)));
				}
			return i && (i.distance = Math.sqrt(e)), i;
		},
		getCenter: function () {
			if (this._map) return si(this._defaultShape(), this._map.options.crs);
			throw new Error("Must add layer to map before using getCenter()");
		},
		getBounds: function () {
			return this._bounds;
		},
		addLatLng: function (t, e) {
			return (e = e || this._defaultShape()), (t = w(t)), e.push(t), this._bounds.extend(t), this.redraw();
		},
		_setLatLngs: function (t) {
			(this._bounds = new s()), (this._latlngs = this._convertLatLngs(t));
		},
		_defaultShape: function () {
			return I(this._latlngs) ? this._latlngs : this._latlngs[0];
		},
		_convertLatLngs: function (t) {
			for (var e = [], i = I(t), n = 0, o = t.length; n < o; n++) i ? ((e[n] = w(t[n])), this._bounds.extend(e[n])) : (e[n] = this._convertLatLngs(t[n]));
			return e;
		},
		_project: function () {
			var t = new f();
			(this._rings = []), this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && ((this._rawPxBounds = t), this._updateBounds());
		},
		_updateBounds: function () {
			var t = this._clickTolerance(),
				t = new p(t, t);
			this._rawPxBounds && (this._pxBounds = new f([this._rawPxBounds.min.subtract(t), this._rawPxBounds.max.add(t)]));
		},
		_projectLatlngs: function (t, e, i) {
			var n,
				o,
				s = t[0] instanceof v,
				r = t.length;
			if (s) {
				for (o = [], n = 0; n < r; n++) (o[n] = this._map.latLngToLayerPoint(t[n])), i.extend(o[n]);
				e.push(o);
			} else for (n = 0; n < r; n++) this._projectLatlngs(t[n], e, i);
		},
		_clipPoints: function () {
			var t = this._renderer._bounds;
			if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
				if (this.options.noClip) this._parts = this._rings;
				else
					for (var e, i, n, o, s = this._parts, r = 0, a = 0, h = this._rings.length; r < h; r++)
						for (e = 0, i = (o = this._rings[r]).length; e < i - 1; e++) (n = ti(o[e], o[e + 1], t, e, !0)) && ((s[a] = s[a] || []), s[a].push(n[0]), (n[1] === o[e + 1] && e !== i - 2) || (s[a].push(n[1]), a++));
		},
		_simplifyPoints: function () {
			for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = $e(t[i], e);
		},
		_update: function () {
			this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
		},
		_updatePath: function () {
			this._renderer._updatePoly(this);
		},
		_containsPoint: function (t, e) {
			var i,
				n,
				o,
				s,
				r,
				a,
				h = this._clickTolerance();
			if (this._pxBounds && this._pxBounds.contains(t)) for (i = 0, s = this._parts.length; i < s; i++) for (n = 0, o = (r = (a = this._parts[i]).length) - 1; n < r; o = n++) if ((e || 0 !== n) && Qe(t, a[o], a[n]) <= h) return !0;
			return !1;
		},
	});
	vi._flat = oi;
	var yi = vi.extend({
		options: { fill: !0 },
		isEmpty: function () {
			return !this._latlngs.length || !this._latlngs[0].length;
		},
		getCenter: function () {
			if (this._map) return ai(this._defaultShape(), this._map.options.crs);
			throw new Error("Must add layer to map before using getCenter()");
		},
		_convertLatLngs: function (t) {
			var t = vi.prototype._convertLatLngs.call(this, t),
				e = t.length;
			return 2 <= e && t[0] instanceof v && t[0].equals(t[e - 1]) && t.pop(), t;
		},
		_setLatLngs: function (t) {
			vi.prototype._setLatLngs.call(this, t), I(this._latlngs) && (this._latlngs = [this._latlngs]);
		},
		_defaultShape: function () {
			return (I(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0];
		},
		_clipPoints: function () {
			var t = this._renderer._bounds,
				e = this.options.weight,
				e = new p(e, e),
				t = new f(t.min.subtract(e), t.max.add(e));
			if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
				if (this.options.noClip) this._parts = this._rings;
				else for (var i, n = 0, o = this._rings.length; n < o; n++) (i = ri(this._rings[n], t, !0)).length && this._parts.push(i);
		},
		_updatePath: function () {
			this._renderer._updatePoly(this, !0);
		},
		_containsPoint: function (t) {
			var e,
				i,
				n,
				o,
				s,
				r,
				a,
				h,
				l = !1;
			if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
			for (o = 0, a = this._parts.length; o < a; o++)
				for (s = 0, r = (h = (e = this._parts[o]).length) - 1; s < h; r = s++) (i = e[s]), (n = e[r]), i.y > t.y != n.y > t.y && t.x < ((n.x - i.x) * (t.y - i.y)) / (n.y - i.y) + i.x && (l = !l);
			return l || vi.prototype._containsPoint.call(this, t, !0);
		},
	});
	var xi = ui.extend({
		initialize: function (t, e) {
			c(this, e), (this._layers = {}), t && this.addData(t);
		},
		addData: function (t) {
			var e,
				i,
				n,
				o = d(t) ? t : t.features;
			if (o) {
				for (e = 0, i = o.length; e < i; e++) ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
				return this;
			}
			var s,
				r = this.options;
			return (!r.filter || r.filter(t)) && (s = wi(t, r)) ? ((s.feature = Ci(t)), (s.defaultOptions = s.options), this.resetStyle(s), r.onEachFeature && r.onEachFeature(t, s), this.addLayer(s)) : this;
		},
		resetStyle: function (t) {
			return void 0 === t ? this.eachLayer(this.resetStyle, this) : ((t.options = l({}, t.defaultOptions)), this._setLayerStyle(t, this.options.style), this);
		},
		setStyle: function (e) {
			return this.eachLayer(function (t) {
				this._setLayerStyle(t, e);
			}, this);
		},
		_setLayerStyle: function (t, e) {
			t.setStyle && ("function" == typeof e && (e = e(t.feature)), t.setStyle(e));
		},
	});
	function wi(t, e) {
		var i,
			n,
			o,
			s,
			r = "Feature" === t.type ? t.geometry : t,
			a = r ? r.coordinates : null,
			h = [],
			l = e && e.pointToLayer,
			u = (e && e.coordsToLatLng) || Pi;
		if (!a && !r) return null;
		switch (r.type) {
			case "Point":
				return bi(l, t, (i = u(a)), e);
			case "MultiPoint":
				for (o = 0, s = a.length; o < s; o++) (i = u(a[o])), h.push(bi(l, t, i, e));
				return new ui(h);
			case "LineString":
			case "MultiLineString":
				return (n = Li(a, "LineString" === r.type ? 0 : 1, u)), new vi(n, e);
			case "Polygon":
			case "MultiPolygon":
				return (n = Li(a, "Polygon" === r.type ? 1 : 2, u)), new yi(n, e);
			case "GeometryCollection":
				for (o = 0, s = r.geometries.length; o < s; o++) {
					var c = wi({ geometry: r.geometries[o], type: "Feature", properties: t.properties }, e);
					c && h.push(c);
				}
				return new ui(h);
			case "FeatureCollection":
				for (o = 0, s = r.features.length; o < s; o++) {
					var d = wi(r.features[o], e);
					d && h.push(d);
				}
				return new ui(h);
			default:
				throw new Error("Invalid GeoJSON object.");
		}
	}
	function bi(t, e, i, n) {
		return t ? t(e, i) : new pi(i, n && n.markersInheritOptions && n);
	}
	function Pi(t) {
		return new v(t[1], t[0], t[2]);
	}
	function Li(t, e, i) {
		for (var n, o = [], s = 0, r = t.length; s < r; s++) (n = e ? Li(t[s], e - 1, i) : (i || Pi)(t[s])), o.push(n);
		return o;
	}
	function Ti(t, e) {
		return void 0 !== (t = w(t)).alt ? [i(t.lng, e), i(t.lat, e), i(t.alt, e)] : [i(t.lng, e), i(t.lat, e)];
	}
	function Mi(t, e, i, n) {
		for (var o = [], s = 0, r = t.length; s < r; s++) o.push(e ? Mi(t[s], I(t[s]) ? 0 : e - 1, i, n) : Ti(t[s], n));
		return !e && i && o.push(o[0].slice()), o;
	}
	function zi(t, e) {
		return t.feature ? l({}, t.feature, { geometry: e }) : Ci(e);
	}
	function Ci(t) {
		return "Feature" === t.type || "FeatureCollection" === t.type ? t : { type: "Feature", properties: {}, geometry: t };
	}
	Tt = {
		toGeoJSON: function (t) {
			return zi(this, { type: "Point", coordinates: Ti(this.getLatLng(), t) });
		},
	};
	function Zi(t, e) {
		return new xi(t, e);
	}
	pi.include(Tt),
		gi.include(Tt),
		fi.include(Tt),
		vi.include({
			toGeoJSON: function (t) {
				var e = !I(this._latlngs);
				return zi(this, { type: (e ? "Multi" : "") + "LineString", coordinates: Mi(this._latlngs, e ? 1 : 0, !1, t) });
			},
		}),
		yi.include({
			toGeoJSON: function (t) {
				var e = !I(this._latlngs),
					i = e && !I(this._latlngs[0]),
					t = Mi(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
				return zi(this, { type: (i ? "Multi" : "") + "Polygon", coordinates: (t = e ? t : [t]) });
			},
		}),
		li.include({
			toMultiPoint: function (e) {
				var i = [];
				return (
					this.eachLayer(function (t) {
						i.push(t.toGeoJSON(e).geometry.coordinates);
					}),
					zi(this, { type: "MultiPoint", coordinates: i })
				);
			},
			toGeoJSON: function (e) {
				var i,
					n,
					t = this.feature && this.feature.geometry && this.feature.geometry.type;
				return "MultiPoint" === t
					? this.toMultiPoint(e)
					: ((i = "GeometryCollection" === t),
					  (n = []),
					  this.eachLayer(function (t) {
							t.toGeoJSON && ((t = t.toGeoJSON(e)), i ? n.push(t.geometry) : "FeatureCollection" === (t = Ci(t)).type ? n.push.apply(n, t.features) : n.push(t));
					  }),
					  i ? zi(this, { geometries: n, type: "GeometryCollection" }) : { type: "FeatureCollection", features: n });
			},
		});
	var Mt = Zi,
		Si = o.extend({
			options: { opacity: 1, alt: "", interactive: !1, crossOrigin: !1, errorOverlayUrl: "", zIndex: 1, className: "" },
			initialize: function (t, e, i) {
				(this._url = t), (this._bounds = g(e)), c(this, i);
			},
			onAdd: function () {
				this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
					this.options.interactive && (M(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)),
					this.getPane().appendChild(this._image),
					this._reset();
			},
			onRemove: function () {
				T(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
			},
			setOpacity: function (t) {
				return (this.options.opacity = t), this._image && this._updateOpacity(), this;
			},
			setStyle: function (t) {
				return t.opacity && this.setOpacity(t.opacity), this;
			},
			bringToFront: function () {
				return this._map && fe(this._image), this;
			},
			bringToBack: function () {
				return this._map && ge(this._image), this;
			},
			setUrl: function (t) {
				return (this._url = t), this._image && (this._image.src = t), this;
			},
			setBounds: function (t) {
				return (this._bounds = g(t)), this._map && this._reset(), this;
			},
			getEvents: function () {
				var t = { zoom: this._reset, viewreset: this._reset };
				return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
			},
			setZIndex: function (t) {
				return (this.options.zIndex = t), this._updateZIndex(), this;
			},
			getBounds: function () {
				return this._bounds;
			},
			getElement: function () {
				return this._image;
			},
			_initImage: function () {
				var t = "IMG" === this._url.tagName,
					e = (this._image = t ? this._url : P("img"));
				M(e, "leaflet-image-layer"),
					this._zoomAnimated && M(e, "leaflet-zoom-animated"),
					this.options.className && M(e, this.options.className),
					(e.onselectstart = u),
					(e.onmousemove = u),
					(e.onload = a(this.fire, this, "load")),
					(e.onerror = a(this._overlayOnError, this, "error")),
					(!this.options.crossOrigin && "" !== this.options.crossOrigin) || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
					this.options.zIndex && this._updateZIndex(),
					t ? (this._url = e.src) : ((e.src = this._url), (e.alt = this.options.alt));
			},
			_animateZoom: function (t) {
				var e = this._map.getZoomScale(t.zoom),
					t = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
				be(this._image, t, e);
			},
			_reset: function () {
				var t = this._image,
					e = new f(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
					i = e.getSize();
				Z(t, e.min), (t.style.width = i.x + "px"), (t.style.height = i.y + "px");
			},
			_updateOpacity: function () {
				C(this._image, this.options.opacity);
			},
			_updateZIndex: function () {
				this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
			},
			_overlayOnError: function () {
				this.fire("error");
				var t = this.options.errorOverlayUrl;
				t && this._url !== t && ((this._url = t), (this._image.src = t));
			},
			getCenter: function () {
				return this._bounds.getCenter();
			},
		}),
		Ei = Si.extend({
			options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1, playsInline: !0 },
			_initImage: function () {
				var t = "VIDEO" === this._url.tagName,
					e = (this._image = t ? this._url : P("video"));
				if (
					(M(e, "leaflet-image-layer"),
					this._zoomAnimated && M(e, "leaflet-zoom-animated"),
					this.options.className && M(e, this.options.className),
					(e.onselectstart = u),
					(e.onmousemove = u),
					(e.onloadeddata = a(this.fire, this, "load")),
					t)
				) {
					for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++) n.push(i[o].src);
					this._url = 0 < i.length ? n : [e.src];
				} else {
					d(this._url) || (this._url = [this._url]),
						!this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"),
						(e.autoplay = !!this.options.autoplay),
						(e.loop = !!this.options.loop),
						(e.muted = !!this.options.muted),
						(e.playsInline = !!this.options.playsInline);
					for (var s = 0; s < this._url.length; s++) {
						var r = P("source");
						(r.src = this._url[s]), e.appendChild(r);
					}
				}
			},
		});
	var ki = Si.extend({
		_initImage: function () {
			var t = (this._image = this._url);
			M(t, "leaflet-image-layer"), this._zoomAnimated && M(t, "leaflet-zoom-animated"), this.options.className && M(t, this.options.className), (t.onselectstart = u), (t.onmousemove = u);
		},
	});
	var Oi = o.extend({
			options: { interactive: !1, offset: [0, 0], className: "", pane: void 0, content: "" },
			initialize: function (t, e) {
				t && (t instanceof v || d(t)) ? ((this._latlng = w(t)), c(this, e)) : (c(this, t), (this._source = e)), this.options.content && (this._content = this.options.content);
			},
			openOn: function (t) {
				return (t = arguments.length ? t : this._source._map).hasLayer(this) || t.addLayer(this), this;
			},
			close: function () {
				return this._map && this._map.removeLayer(this), this;
			},
			toggle: function (t) {
				return this._map ? this.close() : (arguments.length ? (this._source = t) : (t = this._source), this._prepareOpen(), this.openOn(t._map)), this;
			},
			onAdd: function (t) {
				(this._zoomAnimated = t._zoomAnimated),
					this._container || this._initLayout(),
					t._fadeAnimated && C(this._container, 0),
					clearTimeout(this._removeTimeout),
					this.getPane().appendChild(this._container),
					this.update(),
					t._fadeAnimated && C(this._container, 1),
					this.bringToFront(),
					this.options.interactive && (M(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
			},
			onRemove: function (t) {
				t._fadeAnimated ? (C(this._container, 0), (this._removeTimeout = setTimeout(a(T, void 0, this._container), 200))) : T(this._container),
					this.options.interactive && (z(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
			},
			getLatLng: function () {
				return this._latlng;
			},
			setLatLng: function (t) {
				return (this._latlng = w(t)), this._map && (this._updatePosition(), this._adjustPan()), this;
			},
			getContent: function () {
				return this._content;
			},
			setContent: function (t) {
				return (this._content = t), this.update(), this;
			},
			getElement: function () {
				return this._container;
			},
			update: function () {
				this._map && ((this._container.style.visibility = "hidden"), this._updateContent(), this._updateLayout(), this._updatePosition(), (this._container.style.visibility = ""), this._adjustPan());
			},
			getEvents: function () {
				var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
				return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
			},
			isOpen: function () {
				return !!this._map && this._map.hasLayer(this);
			},
			bringToFront: function () {
				return this._map && fe(this._container), this;
			},
			bringToBack: function () {
				return this._map && ge(this._container), this;
			},
			_prepareOpen: function (t) {
				if (!(i = this._source)._map) return !1;
				if (i instanceof ui) {
					var e,
						i = null,
						n = this._source._layers;
					for (e in n)
						if (n[e]._map) {
							i = n[e];
							break;
						}
					if (!i) return !1;
					this._source = i;
				}
				if (!t)
					if (i.getCenter) t = i.getCenter();
					else if (i.getLatLng) t = i.getLatLng();
					else {
						if (!i.getBounds) throw new Error("Unable to get source layer LatLng.");
						t = i.getBounds().getCenter();
					}
				return this.setLatLng(t), this._map && this.update(), !0;
			},
			_updateContent: function () {
				if (this._content) {
					var t = this._contentNode,
						e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
					if ("string" == typeof e) t.innerHTML = e;
					else {
						for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
						t.appendChild(e);
					}
					this.fire("contentupdate");
				}
			},
			_updatePosition: function () {
				var t, e, i;
				this._map &&
					((e = this._map.latLngToLayerPoint(this._latlng)),
					(t = m(this.options.offset)),
					(i = this._getAnchor()),
					this._zoomAnimated ? Z(this._container, e.add(i)) : (t = t.add(e).add(i)),
					(e = this._containerBottom = -t.y),
					(i = this._containerLeft = -Math.round(this._containerWidth / 2) + t.x),
					(this._container.style.bottom = e + "px"),
					(this._container.style.left = i + "px"));
			},
			_getAnchor: function () {
				return [0, 0];
			},
		}),
		Ai =
			(A.include({
				_initOverlay: function (t, e, i, n) {
					var o = e;
					return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o;
				},
			}),
			o.include({
				_initOverlay: function (t, e, i, n) {
					var o = i;
					return o instanceof t ? (c(o, n), (o._source = this)) : (o = e && !n ? e : new t(n, this)).setContent(i), o;
				},
			}),
			Oi.extend({
				options: {
					pane: "popupPane",
					offset: [0, 7],
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
					className: "",
				},
				openOn: function (t) {
					return !(t = arguments.length ? t : this._source._map).hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), (t._popup = this), Oi.prototype.openOn.call(this, t);
				},
				onAdd: function (t) {
					Oi.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof mi || this._source.on("preclick", Ae));
				},
				onRemove: function (t) {
					Oi.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof mi || this._source.off("preclick", Ae));
				},
				getEvents: function () {
					var t = Oi.prototype.getEvents.call(this);
					return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
				},
				_initLayout: function () {
					var t = "leaflet-popup",
						e = (this._container = P("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated")),
						i = (this._wrapper = P("div", t + "-content-wrapper", e));
					(this._contentNode = P("div", t + "-content", i)),
						Ie(e),
						Be(this._contentNode),
						S(e, "contextmenu", Ae),
						(this._tipContainer = P("div", t + "-tip-container", e)),
						(this._tip = P("div", t + "-tip", this._tipContainer)),
						this.options.closeButton &&
							((i = this._closeButton = P("a", t + "-close-button", e)).setAttribute("role", "button"),
							i.setAttribute("aria-label", "Close popup"),
							(i.href = "#close"),
							(i.innerHTML = '<span aria-hidden="true">&#215;</span>'),
							S(
								i,
								"click",
								function (t) {
									O(t), this.close();
								},
								this,
							));
				},
				_updateLayout: function () {
					var t = this._contentNode,
						e = t.style,
						i = ((e.width = ""), (e.whiteSpace = "nowrap"), t.offsetWidth),
						i = Math.min(i, this.options.maxWidth),
						i = ((i = Math.max(i, this.options.minWidth)), (e.width = i + 1 + "px"), (e.whiteSpace = ""), (e.height = ""), t.offsetHeight),
						n = this.options.maxHeight,
						o = "leaflet-popup-scrolled";
					(n && n < i ? ((e.height = n + "px"), M) : z)(t, o), (this._containerWidth = this._container.offsetWidth);
				},
				_animateZoom: function (t) {
					var t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
						e = this._getAnchor();
					Z(this._container, t.add(e));
				},
				_adjustPan: function () {
					var t, e, i, n, o, s, r, a;
					this.options.autoPan &&
						(this._map._panAnim && this._map._panAnim.stop(),
						this._autopanning
							? (this._autopanning = !1)
							: ((t = this._map),
							  (e = parseInt(pe(this._container, "marginBottom"), 10) || 0),
							  (e = this._container.offsetHeight + e),
							  (a = this._containerWidth),
							  (i = new p(this._containerLeft, -e - this._containerBottom))._add(Pe(this._container)),
							  (i = t.layerPointToContainerPoint(i)),
							  (o = m(this.options.autoPanPadding)),
							  (n = m(this.options.autoPanPaddingTopLeft || o)),
							  (o = m(this.options.autoPanPaddingBottomRight || o)),
							  (s = t.getSize()),
							  (r = 0),
							  i.x + a + o.x > s.x && (r = i.x + a - s.x + o.x),
							  i.x - r - n.x < (a = 0) && (r = i.x - n.x),
							  i.y + e + o.y > s.y && (a = i.y + e - s.y + o.y),
							  i.y - a - n.y < 0 && (a = i.y - n.y),
							  (r || a) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([r, a]))));
				},
				_getAnchor: function () {
					return m(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
				},
			})),
		Bi =
			(A.mergeOptions({ closePopupOnClick: !0 }),
			A.include({
				openPopup: function (t, e, i) {
					return this._initOverlay(Ai, t, e, i).openOn(this), this;
				},
				closePopup: function (t) {
					return (t = arguments.length ? t : this._popup) && t.close(), this;
				},
			}),
			o.include({
				bindPopup: function (t, e) {
					return (
						(this._popup = this._initOverlay(Ai, this._popup, t, e)),
						this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), (this._popupHandlersAdded = !0)),
						this
					);
				},
				unbindPopup: function () {
					return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), (this._popupHandlersAdded = !1), (this._popup = null)), this;
				},
				openPopup: function (t) {
					return this._popup && (this instanceof ui || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
				},
				closePopup: function () {
					return this._popup && this._popup.close(), this;
				},
				togglePopup: function () {
					return this._popup && this._popup.toggle(this), this;
				},
				isPopupOpen: function () {
					return !!this._popup && this._popup.isOpen();
				},
				setPopupContent: function (t) {
					return this._popup && this._popup.setContent(t), this;
				},
				getPopup: function () {
					return this._popup;
				},
				_openPopup: function (t) {
					var e;
					this._popup &&
						this._map &&
						(Re(t), (e = t.layer || t.target), this._popup._source !== e || e instanceof mi ? ((this._popup._source = e), this.openPopup(t.latlng)) : this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng));
				},
				_movePopup: function (t) {
					this._popup.setLatLng(t.latlng);
				},
				_onKeyPress: function (t) {
					13 === t.originalEvent.keyCode && this._openPopup(t);
				},
			}),
			Oi.extend({
				options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: !1, sticky: !1, opacity: 0.9 },
				onAdd: function (t) {
					Oi.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
				},
				onRemove: function (t) {
					Oi.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
				},
				getEvents: function () {
					var t = Oi.prototype.getEvents.call(this);
					return this.options.permanent || (t.preclick = this.close), t;
				},
				_initLayout: function () {
					var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
					(this._contentNode = this._container = P("div", t)), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + h(this));
				},
				_updateLayout: function () {},
				_adjustPan: function () {},
				_setPosition: function (t) {
					var e,
						i = this._map,
						n = this._container,
						o = i.latLngToContainerPoint(i.getCenter()),
						i = i.layerPointToContainerPoint(t),
						s = this.options.direction,
						r = n.offsetWidth,
						a = n.offsetHeight,
						h = m(this.options.offset),
						l = this._getAnchor(),
						i = "top" === s ? ((e = r / 2), a) : "bottom" === s ? ((e = r / 2), 0) : ((e = "center" === s ? r / 2 : "right" === s ? 0 : "left" === s ? r : i.x < o.x ? ((s = "right"), 0) : ((s = "left"), r + 2 * (h.x + l.x))), a / 2);
					(t = t.subtract(m(e, i, !0)).add(h).add(l)), z(n, "leaflet-tooltip-right"), z(n, "leaflet-tooltip-left"), z(n, "leaflet-tooltip-top"), z(n, "leaflet-tooltip-bottom"), M(n, "leaflet-tooltip-" + s), Z(n, t);
				},
				_updatePosition: function () {
					var t = this._map.latLngToLayerPoint(this._latlng);
					this._setPosition(t);
				},
				setOpacity: function (t) {
					(this.options.opacity = t), this._container && C(this._container, t);
				},
				_animateZoom: function (t) {
					t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
					this._setPosition(t);
				},
				_getAnchor: function () {
					return m(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
				},
			})),
		Ii =
			(A.include({
				openTooltip: function (t, e, i) {
					return this._initOverlay(Bi, t, e, i).openOn(this), this;
				},
				closeTooltip: function (t) {
					return t.close(), this;
				},
			}),
			o.include({
				bindTooltip: function (t, e) {
					return (
						this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
						(this._tooltip = this._initOverlay(Bi, this._tooltip, t, e)),
						this._initTooltipInteractions(),
						this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
						this
					);
				},
				unbindTooltip: function () {
					return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), (this._tooltip = null)), this;
				},
				_initTooltipInteractions: function (t) {
					var e, i;
					(!t && this._tooltipHandlersAdded) ||
						((e = t ? "off" : "on"),
						(i = { remove: this.closeTooltip, move: this._moveTooltip }),
						this._tooltip.options.permanent
							? (i.add = this._openTooltip)
							: ((i.mouseover = this._openTooltip), (i.mouseout = this.closeTooltip), (i.click = this._openTooltip), this._map ? this._addFocusListeners() : (i.add = this._addFocusListeners)),
						this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
						this[e](i),
						(this._tooltipHandlersAdded = !t));
				},
				openTooltip: function (t) {
					return (
						this._tooltip &&
							(this instanceof ui || (this._tooltip._source = this),
							this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))),
						this
					);
				},
				closeTooltip: function () {
					if (this._tooltip) return this._tooltip.close();
				},
				toggleTooltip: function () {
					return this._tooltip && this._tooltip.toggle(this), this;
				},
				isTooltipOpen: function () {
					return this._tooltip.isOpen();
				},
				setTooltipContent: function (t) {
					return this._tooltip && this._tooltip.setContent(t), this;
				},
				getTooltip: function () {
					return this._tooltip;
				},
				_addFocusListeners: function () {
					this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
				},
				_addFocusListenersOnLayer: function (t) {
					var e = t.getElement();
					e &&
						(S(
							e,
							"focus",
							function () {
								(this._tooltip._source = t), this.openTooltip();
							},
							this,
						),
						S(e, "blur", this.closeTooltip, this));
				},
				_setAriaDescribedByOnLayer: function (t) {
					t = t.getElement();
					t && t.setAttribute("aria-describedby", this._tooltip._container.id);
				},
				_openTooltip: function (t) {
					!this._tooltip || !this._map || (this._map.dragging && this._map.dragging.moving()) || ((this._tooltip._source = t.layer || t.target), this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0));
				},
				_moveTooltip: function (t) {
					var e = t.latlng;
					this._tooltip.options.sticky && t.originalEvent && ((t = this._map.mouseEventToContainerPoint(t.originalEvent)), (t = this._map.containerPointToLayerPoint(t)), (e = this._map.layerPointToLatLng(t))), this._tooltip.setLatLng(e);
				},
			}),
			ci.extend({
				options: { iconSize: [12, 12], html: !1, bgPos: null, className: "leaflet-div-icon" },
				createIcon: function (t) {
					var t = t && "DIV" === t.tagName ? t : document.createElement("div"),
						e = this.options;
					return (
						e.html instanceof Element ? (me(t), t.appendChild(e.html)) : (t.innerHTML = !1 !== e.html ? e.html : ""),
						e.bgPos && ((e = m(e.bgPos)), (t.style.backgroundPosition = -e.x + "px " + -e.y + "px")),
						this._setIconStyles(t, "icon"),
						t
					);
				},
				createShadow: function () {
					return null;
				},
			}));
	ci.Default = di;
	var Ri = o.extend({
		options: {
			tileSize: 256,
			opacity: 1,
			updateWhenIdle: b.mobile,
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
			keepBuffer: 2,
		},
		initialize: function (t) {
			c(this, t);
		},
		onAdd: function () {
			this._initContainer(), (this._levels = {}), (this._tiles = {}), this._resetView();
		},
		beforeAdd: function (t) {
			t._addZoomLimit(this);
		},
		onRemove: function (t) {
			this._removeAllTiles(), T(this._container), t._removeZoomLimit(this), (this._container = null), (this._tileZoom = void 0);
		},
		bringToFront: function () {
			return this._map && (fe(this._container), this._setAutoZIndex(Math.max)), this;
		},
		bringToBack: function () {
			return this._map && (ge(this._container), this._setAutoZIndex(Math.min)), this;
		},
		getContainer: function () {
			return this._container;
		},
		setOpacity: function (t) {
			return (this.options.opacity = t), this._updateOpacity(), this;
		},
		setZIndex: function (t) {
			return (this.options.zIndex = t), this._updateZIndex(), this;
		},
		isLoading: function () {
			return this._loading;
		},
		redraw: function () {
			var t;
			return this._map && (this._removeAllTiles(), (t = this._clampZoom(this._map.getZoom())) !== this._tileZoom && ((this._tileZoom = t), this._updateLevels()), this._update()), this;
		},
		getEvents: function () {
			var t = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };
			return this.options.updateWhenIdle || (this._onMove || (this._onMove = j(this._onMoveEnd, this.options.updateInterval, this)), (t.move = this._onMove)), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
		},
		createTile: function () {
			return document.createElement("div");
		},
		getTileSize: function () {
			var t = this.options.tileSize;
			return t instanceof p ? t : new p(t, t);
		},
		_updateZIndex: function () {
			this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
		},
		_setAutoZIndex: function (t) {
			for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++) (e = i[o].style.zIndex), i[o] !== this._container && e && (n = t(n, +e));
			isFinite(n) && ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
		},
		_updateOpacity: function () {
			if (this._map && !b.ielt9) {
				C(this._container, this.options.opacity);
				var t,
					e = +new Date(),
					i = !1,
					n = !1;
				for (t in this._tiles) {
					var o,
						s = this._tiles[t];
					s.current && s.loaded && ((o = Math.min(1, (e - s.loaded) / 200)), C(s.el, o), o < 1 ? (i = !0) : (s.active ? (n = !0) : this._onOpaqueTile(s), (s.active = !0)));
				}
				n && !this._noPrune && this._pruneTiles(), i && (r(this._fadeFrame), (this._fadeFrame = x(this._updateOpacity, this)));
			}
		},
		_onOpaqueTile: u,
		_initContainer: function () {
			this._container || ((this._container = P("div", "leaflet-layer " + (this.options.className || ""))), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
		},
		_updateLevels: function () {
			var t = this._tileZoom,
				e = this.options.maxZoom;
			if (void 0 !== t) {
				for (var i in this._levels)
					(i = Number(i)),
						this._levels[i].el.children.length || i === t
							? ((this._levels[i].el.style.zIndex = e - Math.abs(t - i)), this._onUpdateLevel(i))
							: (T(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
				var n = this._levels[t],
					o = this._map;
				return (
					n ||
						(((n = this._levels[t] = {}).el = P("div", "leaflet-tile-container leaflet-zoom-animated", this._container)),
						(n.el.style.zIndex = e),
						(n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round()),
						(n.zoom = t),
						this._setZoomTransform(n, o.getCenter(), o.getZoom()),
						u(n.el.offsetWidth),
						this._onCreateLevel(n)),
					(this._level = n)
				);
			}
		},
		_onUpdateLevel: u,
		_onRemoveLevel: u,
		_onCreateLevel: u,
		_pruneTiles: function () {
			if (this._map) {
				var t,
					e,
					i,
					n = this._map.getZoom();
				if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();
				else {
					for (t in this._tiles) (i = this._tiles[t]).retain = i.current;
					for (t in this._tiles) (i = this._tiles[t]).current && !i.active && ((e = i.coords), this._retainParent(e.x, e.y, e.z, e.z - 5) || this._retainChildren(e.x, e.y, e.z, e.z + 2));
					for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
				}
			}
		},
		_removeTilesAtZoom: function (t) {
			for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
		},
		_removeAllTiles: function () {
			for (var t in this._tiles) this._removeTile(t);
		},
		_invalidateAll: function () {
			for (var t in this._levels) T(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
			this._removeAllTiles(), (this._tileZoom = void 0);
		},
		_retainParent: function (t, e, i, n) {
			var t = Math.floor(t / 2),
				e = Math.floor(e / 2),
				i = i - 1,
				o = new p(+t, +e),
				o = ((o.z = i), this._tileCoordsToKey(o)),
				o = this._tiles[o];
			return o && o.active ? (o.retain = !0) : (o && o.loaded && (o.retain = !0), n < i && this._retainParent(t, e, i, n));
		},
		_retainChildren: function (t, e, i, n) {
			for (var o = 2 * t; o < 2 * t + 2; o++)
				for (var s = 2 * e; s < 2 * e + 2; s++) {
					var r = new p(o, s),
						r = ((r.z = i + 1), this._tileCoordsToKey(r)),
						r = this._tiles[r];
					r && r.active ? (r.retain = !0) : (r && r.loaded && (r.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n));
				}
		},
		_resetView: function (t) {
			t = t && (t.pinch || t.flyTo);
			this._setView(this._map.getCenter(), this._map.getZoom(), t, t);
		},
		_animateZoom: function (t) {
			this._setView(t.center, t.zoom, !0, t.noUpdate);
		},
		_clampZoom: function (t) {
			var e = this.options;
			return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t;
		},
		_setView: function (t, e, i, n) {
			var o = Math.round(e),
				o = (void 0 !== this.options.maxZoom && o > this.options.maxZoom) || (void 0 !== this.options.minZoom && o < this.options.minZoom) ? void 0 : this._clampZoom(o),
				s = this.options.updateWhenZooming && o !== this._tileZoom;
			(n && !s) || ((this._tileZoom = o), this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), (this._noPrune = !!i)), this._setZoomTransforms(t, e);
		},
		_setZoomTransforms: function (t, e) {
			for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e);
		},
		_setZoomTransform: function (t, e, i) {
			var n = this._map.getZoomScale(i, t.zoom),
				e = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
			b.any3d ? be(t.el, e, n) : Z(t.el, e);
		},
		_resetGrid: function () {
			var t = this._map,
				e = t.options.crs,
				i = (this._tileSize = this.getTileSize()),
				n = this._tileZoom,
				o = this._map.getPixelWorldBounds(this._tileZoom);
			o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
				(this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)]),
				(this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]);
		},
		_onMoveEnd: function () {
			this._map && !this._map._animatingZoom && this._update();
		},
		_getTiledPixelBounds: function (t) {
			var e = this._map,
				i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
				i = e.getZoomScale(i, this._tileZoom),
				t = e.project(t, this._tileZoom).floor(),
				e = e.getSize().divideBy(2 * i);
			return new f(t.subtract(e), t.add(e));
		},
		_update: function (t) {
			var e = this._map;
			if (e) {
				var i = this._clampZoom(e.getZoom());
				if ((void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom)) {
					var n,
						e = this._getTiledPixelBounds(t),
						o = this._pxBoundsToTileRange(e),
						s = o.getCenter(),
						r = [],
						e = this.options.keepBuffer,
						a = new f(o.getBottomLeft().subtract([e, -e]), o.getTopRight().add([e, -e]));
					if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
					for (n in this._tiles) {
						var h = this._tiles[n].coords;
						(h.z === this._tileZoom && a.contains(new p(h.x, h.y))) || (this._tiles[n].current = !1);
					}
					if (1 < Math.abs(i - this._tileZoom)) this._setView(t, i);
					else {
						for (var l = o.min.y; l <= o.max.y; l++)
							for (var u = o.min.x; u <= o.max.x; u++) {
								var c,
									d = new p(u, l);
								(d.z = this._tileZoom), this._isValidTile(d) && ((c = this._tiles[this._tileCoordsToKey(d)]) ? (c.current = !0) : r.push(d));
							}
						if (
							(r.sort(function (t, e) {
								return t.distanceTo(s) - e.distanceTo(s);
							}),
							0 !== r.length)
						) {
							this._loading || ((this._loading = !0), this.fire("loading"));
							for (var _ = document.createDocumentFragment(), u = 0; u < r.length; u++) this._addTile(r[u], _);
							this._level.el.appendChild(_);
						}
					}
				}
			}
		},
		_isValidTile: function (t) {
			var e = this._map.options.crs;
			if (!e.infinite) {
				var i = this._globalTileRange;
				if ((!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) || (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y))) return !1;
			}
			return !this.options.bounds || ((e = this._tileCoordsToBounds(t)), g(this.options.bounds).overlaps(e));
		},
		_keyToBounds: function (t) {
			return this._tileCoordsToBounds(this._keyToTileCoords(t));
		},
		_tileCoordsToNwSe: function (t) {
			var e = this._map,
				i = this.getTileSize(),
				n = t.scaleBy(i),
				i = n.add(i);
			return [e.unproject(n, t.z), e.unproject(i, t.z)];
		},
		_tileCoordsToBounds: function (t) {
			(t = this._tileCoordsToNwSe(t)), (t = new s(t[0], t[1]));
			return (t = this.options.noWrap ? t : this._map.wrapLatLngBounds(t));
		},
		_tileCoordsToKey: function (t) {
			return t.x + ":" + t.y + ":" + t.z;
		},
		_keyToTileCoords: function (t) {
			var t = t.split(":"),
				e = new p(+t[0], +t[1]);
			return (e.z = +t[2]), e;
		},
		_removeTile: function (t) {
			var e = this._tiles[t];
			e && (T(e.el), delete this._tiles[t], this.fire("tileunload", { tile: e.el, coords: this._keyToTileCoords(t) }));
		},
		_initTile: function (t) {
			M(t, "leaflet-tile");
			var e = this.getTileSize();
			(t.style.width = e.x + "px"), (t.style.height = e.y + "px"), (t.onselectstart = u), (t.onmousemove = u), b.ielt9 && this.options.opacity < 1 && C(t, this.options.opacity);
		},
		_addTile: function (t, e) {
			var i = this._getTilePos(t),
				n = this._tileCoordsToKey(t),
				o = this.createTile(this._wrapCoords(t), a(this._tileReady, this, t));
			this._initTile(o), this.createTile.length < 2 && x(a(this._tileReady, this, t, null, o)), Z(o, i), (this._tiles[n] = { el: o, coords: t, current: !0 }), e.appendChild(o), this.fire("tileloadstart", { tile: o, coords: t });
		},
		_tileReady: function (t, e, i) {
			e && this.fire("tileerror", { error: e, tile: i, coords: t });
			var n = this._tileCoordsToKey(t);
			(i = this._tiles[n]) &&
				((i.loaded = +new Date()),
				this._map._fadeAnimated ? (C(i.el, 0), r(this._fadeFrame), (this._fadeFrame = x(this._updateOpacity, this))) : ((i.active = !0), this._pruneTiles()),
				e || (M(i.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: i.el, coords: t })),
				this._noTilesToLoad() && ((this._loading = !1), this.fire("load"), b.ielt9 || !this._map._fadeAnimated ? x(this._pruneTiles, this) : setTimeout(a(this._pruneTiles, this), 250)));
		},
		_getTilePos: function (t) {
			return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
		},
		_wrapCoords: function (t) {
			var e = new p(this._wrapX ? H(t.x, this._wrapX) : t.x, this._wrapY ? H(t.y, this._wrapY) : t.y);
			return (e.z = t.z), e;
		},
		_pxBoundsToTileRange: function (t) {
			var e = this.getTileSize();
			return new f(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]));
		},
		_noTilesToLoad: function () {
			for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
			return !0;
		},
	});
	var Ni = Ri.extend({
		options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: !1, zoomReverse: !1, detectRetina: !1, crossOrigin: !1, referrerPolicy: !1 },
		initialize: function (t, e) {
			(this._url = t),
				(e = c(this, e)).detectRetina && b.retina && 0 < e.maxZoom
					? ((e.tileSize = Math.floor(e.tileSize / 2)),
					  e.zoomReverse ? (e.zoomOffset--, (e.minZoom = Math.min(e.maxZoom, e.minZoom + 1))) : (e.zoomOffset++, (e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1))),
					  (e.minZoom = Math.max(0, e.minZoom)))
					: e.zoomReverse
					? (e.minZoom = Math.min(e.maxZoom, e.minZoom))
					: (e.maxZoom = Math.max(e.minZoom, e.maxZoom)),
				"string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")),
				this.on("tileunload", this._onTileRemove);
		},
		setUrl: function (t, e) {
			return this._url === t && void 0 === e && (e = !0), (this._url = t), e || this.redraw(), this;
		},
		createTile: function (t, e) {
			var i = document.createElement("img");
			return (
				S(i, "load", a(this._tileOnLoad, this, e, i)),
				S(i, "error", a(this._tileOnError, this, e, i)),
				(!this.options.crossOrigin && "" !== this.options.crossOrigin) || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
				"string" == typeof this.options.referrerPolicy && (i.referrerPolicy = this.options.referrerPolicy),
				(i.alt = ""),
				(i.src = this.getTileUrl(t)),
				i
			);
		},
		getTileUrl: function (t) {
			var e = { r: b.retina ? "@2x" : "", s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl() };
			return this._map && !this._map.options.crs.infinite && ((t = this._globalTileRange.max.y - t.y), this.options.tms && (e.y = t), (e["-y"] = t)), q(this._url, l(e, this.options));
		},
		_tileOnLoad: function (t, e) {
			b.ielt9 ? setTimeout(a(t, this, null, e), 0) : t(null, e);
		},
		_tileOnError: function (t, e, i) {
			var n = this.options.errorTileUrl;
			n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
		},
		_onTileRemove: function (t) {
			t.tile.onload = null;
		},
		_getZoomForUrl: function () {
			var t = this._tileZoom,
				e = this.options.maxZoom;
			return (t = this.options.zoomReverse ? e - t : t) + this.options.zoomOffset;
		},
		_getSubdomain: function (t) {
			t = Math.abs(t.x + t.y) % this.options.subdomains.length;
			return this.options.subdomains[t];
		},
		_abortLoading: function () {
			var t, e, i;
			for (t in this._tiles)
				this._tiles[t].coords.z !== this._tileZoom &&
					(((i = this._tiles[t].el).onload = u), (i.onerror = u), i.complete || ((i.src = K), (e = this._tiles[t].coords), T(i), delete this._tiles[t], this.fire("tileabort", { tile: i, coords: e })));
		},
		_removeTile: function (t) {
			var e = this._tiles[t];
			if (e) return e.el.setAttribute("src", K), Ri.prototype._removeTile.call(this, t);
		},
		_tileReady: function (t, e, i) {
			if (this._map && (!i || i.getAttribute("src") !== K)) return Ri.prototype._tileReady.call(this, t, e, i);
		},
	});
	function Di(t, e) {
		return new Ni(t, e);
	}
	var ji = Ni.extend({
		defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: !1, version: "1.1.1" },
		options: { crs: null, uppercase: !1 },
		initialize: function (t, e) {
			this._url = t;
			var i,
				n = l({}, this.defaultWmsParams);
			for (i in e) i in this.options || (n[i] = e[i]);
			var t = (e = c(this, e)).detectRetina && b.retina ? 2 : 1,
				o = this.getTileSize();
			(n.width = o.x * t), (n.height = o.y * t), (this.wmsParams = n);
		},
		onAdd: function (t) {
			(this._crs = this.options.crs || t.options.crs), (this._wmsVersion = parseFloat(this.wmsParams.version));
			var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
			(this.wmsParams[e] = this._crs.code), Ni.prototype.onAdd.call(this, t);
		},
		getTileUrl: function (t) {
			var e = this._tileCoordsToNwSe(t),
				i = this._crs,
				i = _(i.project(e[0]), i.project(e[1])),
				e = i.min,
				i = i.max,
				e = (1.3 <= this._wmsVersion && this._crs === hi ? [e.y, e.x, i.y, i.x] : [e.x, e.y, i.x, i.y]).join(","),
				i = Ni.prototype.getTileUrl.call(this, t);
			return i + U(this.wmsParams, i, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + e;
		},
		setParams: function (t, e) {
			return l(this.wmsParams, t), e || this.redraw(), this;
		},
	});
	(Ni.WMS = ji),
		(Di.wms = function (t, e) {
			return new ji(t, e);
		});
	var Hi = o.extend({
			options: { padding: 0.1 },
			initialize: function (t) {
				c(this, t), h(this), (this._layers = this._layers || {});
			},
			onAdd: function () {
				this._container || (this._initContainer(), this._zoomAnimated && M(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
			},
			onRemove: function () {
				this.off("update", this._updatePaths, this), this._destroyContainer();
			},
			getEvents: function () {
				var t = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
				return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
			},
			_onAnimZoom: function (t) {
				this._updateTransform(t.center, t.zoom);
			},
			_onZoom: function () {
				this._updateTransform(this._map.getCenter(), this._map.getZoom());
			},
			_updateTransform: function (t, e) {
				var i = this._map.getZoomScale(e, this._zoom),
					n = this._map.getSize().multiplyBy(0.5 + this.options.padding),
					o = this._map.project(this._center, e),
					n = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
				b.any3d ? be(this._container, n, i) : Z(this._container, n);
			},
			_reset: function () {
				for (var t in (this._update(), this._updateTransform(this._center, this._zoom), this._layers)) this._layers[t]._reset();
			},
			_onZoomEnd: function () {
				for (var t in this._layers) this._layers[t]._project();
			},
			_updatePaths: function () {
				for (var t in this._layers) this._layers[t]._update();
			},
			_update: function () {
				var t = this.options.padding,
					e = this._map.getSize(),
					i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
				(this._bounds = new f(i, i.add(e.multiplyBy(1 + 2 * t)).round())), (this._center = this._map.getCenter()), (this._zoom = this._map.getZoom());
			},
		}),
		Fi = Hi.extend({
			options: { tolerance: 0 },
			getEvents: function () {
				var t = Hi.prototype.getEvents.call(this);
				return (t.viewprereset = this._onViewPreReset), t;
			},
			_onViewPreReset: function () {
				this._postponeUpdatePaths = !0;
			},
			onAdd: function () {
				Hi.prototype.onAdd.call(this), this._draw();
			},
			_initContainer: function () {
				var t = (this._container = document.createElement("canvas"));
				S(t, "mousemove", this._onMouseMove, this), S(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), S(t, "mouseout", this._handleMouseOut, this), (t._leaflet_disable_events = !0), (this._ctx = t.getContext("2d"));
			},
			_destroyContainer: function () {
				r(this._redrawRequest), delete this._ctx, T(this._container), k(this._container), delete this._container;
			},
			_updatePaths: function () {
				if (!this._postponeUpdatePaths) {
					for (var t in ((this._redrawBounds = null), this._layers)) this._layers[t]._update();
					this._redraw();
				}
			},
			_update: function () {
				var t, e, i, n;
				(this._map._animatingZoom && this._bounds) ||
					(Hi.prototype._update.call(this),
					(t = this._bounds),
					(e = this._container),
					(i = t.getSize()),
					(n = b.retina ? 2 : 1),
					Z(e, t.min),
					(e.width = n * i.x),
					(e.height = n * i.y),
					(e.style.width = i.x + "px"),
					(e.style.height = i.y + "px"),
					b.retina && this._ctx.scale(2, 2),
					this._ctx.translate(-t.min.x, -t.min.y),
					this.fire("update"));
			},
			_reset: function () {
				Hi.prototype._reset.call(this), this._postponeUpdatePaths && ((this._postponeUpdatePaths = !1), this._updatePaths());
			},
			_initPath: function (t) {
				this._updateDashArray(t);
				t = (this._layers[h(t)] = t)._order = { layer: t, prev: this._drawLast, next: null };
				this._drawLast && (this._drawLast.next = t), (this._drawLast = t), (this._drawFirst = this._drawFirst || this._drawLast);
			},
			_addPath: function (t) {
				this._requestRedraw(t);
			},
			_removePath: function (t) {
				var e = t._order,
					i = e.next,
					e = e.prev;
				i ? (i.prev = e) : (this._drawLast = e), e ? (e.next = i) : (this._drawFirst = i), delete t._order, delete this._layers[h(t)], this._requestRedraw(t);
			},
			_updatePath: function (t) {
				this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
			},
			_updateStyle: function (t) {
				this._updateDashArray(t), this._requestRedraw(t);
			},
			_updateDashArray: function (t) {
				if ("string" == typeof t.options.dashArray) {
					for (var e, i = t.options.dashArray.split(/[, ]+/), n = [], o = 0; o < i.length; o++) {
						if (((e = Number(i[o])), isNaN(e))) return;
						n.push(e);
					}
					t.options._dashArray = n;
				} else t.options._dashArray = t.options.dashArray;
			},
			_requestRedraw: function (t) {
				this._map && (this._extendRedrawBounds(t), (this._redrawRequest = this._redrawRequest || x(this._redraw, this)));
			},
			_extendRedrawBounds: function (t) {
				var e;
				t._pxBounds && ((e = (t.options.weight || 0) + 1), (this._redrawBounds = this._redrawBounds || new f()), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e])));
			},
			_redraw: function () {
				(this._redrawRequest = null), this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), (this._redrawBounds = null);
			},
			_clear: function () {
				var t,
					e = this._redrawBounds;
				e ? ((t = e.getSize()), this._ctx.clearRect(e.min.x, e.min.y, t.x, t.y)) : (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore());
			},
			_draw: function () {
				var t,
					e,
					i = this._redrawBounds;
				this._ctx.save(), i && ((e = i.getSize()), this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()), (this._drawing = !0);
				for (var n = this._drawFirst; n; n = n.next) (t = n.layer), (!i || (t._pxBounds && t._pxBounds.intersects(i))) && t._updatePath();
				(this._drawing = !1), this._ctx.restore();
			},
			_updatePoly: function (t, e) {
				if (this._drawing) {
					var i,
						n,
						o,
						s,
						r = t._parts,
						a = r.length,
						h = this._ctx;
					if (a) {
						for (h.beginPath(), i = 0; i < a; i++) {
							for (n = 0, o = r[i].length; n < o; n++) (s = r[i][n]), h[n ? "lineTo" : "moveTo"](s.x, s.y);
							e && h.closePath();
						}
						this._fillStroke(h, t);
					}
				}
			},
			_updateCircle: function (t) {
				var e, i, n, o;
				this._drawing &&
					!t._empty() &&
					((e = t._point),
					(i = this._ctx),
					(n = Math.max(Math.round(t._radius), 1)),
					1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) && (i.save(), i.scale(1, o)),
					i.beginPath(),
					i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
					1 != o && i.restore(),
					this._fillStroke(i, t));
			},
			_fillStroke: function (t, e) {
				var i = e.options;
				i.fill && ((t.globalAlpha = i.fillOpacity), (t.fillStyle = i.fillColor || i.color), t.fill(i.fillRule || "evenodd")),
					i.stroke &&
						0 !== i.weight &&
						(t.setLineDash && t.setLineDash((e.options && e.options._dashArray) || []), (t.globalAlpha = i.opacity), (t.lineWidth = i.weight), (t.strokeStyle = i.color), (t.lineCap = i.lineCap), (t.lineJoin = i.lineJoin), t.stroke());
			},
			_onClick: function (t) {
				for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
					(e = o.layer).options.interactive && e._containsPoint(n) && ((("click" === t.type || "preclick" === t.type) && this._map._draggableMoved(e)) || (i = e));
				this._fireEvent(!!i && [i], t);
			},
			_onMouseMove: function (t) {
				var e;
				!this._map || this._map.dragging.moving() || this._map._animatingZoom || ((e = this._map.mouseEventToLayerPoint(t)), this._handleMouseHover(t, e));
			},
			_handleMouseOut: function (t) {
				var e = this._hoveredLayer;
				e && (z(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), (this._hoveredLayer = null), (this._mouseHoverThrottled = !1));
			},
			_handleMouseHover: function (t, e) {
				if (!this._mouseHoverThrottled) {
					for (var i, n, o = this._drawFirst; o; o = o.next) (i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
					n !== this._hoveredLayer && (this._handleMouseOut(t), n && (M(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), (this._hoveredLayer = n))),
						this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t),
						(this._mouseHoverThrottled = !0),
						setTimeout(
							a(function () {
								this._mouseHoverThrottled = !1;
							}, this),
							32,
						);
				}
			},
			_fireEvent: function (t, e, i) {
				this._map._fireDOMEvent(e, i || e.type, t);
			},
			_bringToFront: function (t) {
				var e,
					i,
					n = t._order;
				n && ((e = n.next), (i = n.prev), e && ((e.prev = i) ? (i.next = e) : e && (this._drawFirst = e), (n.prev = this._drawLast), ((this._drawLast.next = n).next = null), (this._drawLast = n), this._requestRedraw(t)));
			},
			_bringToBack: function (t) {
				var e,
					i,
					n = t._order;
				n && ((e = n.next), (i = n.prev) && ((i.next = e) ? (e.prev = i) : i && (this._drawLast = i), (n.prev = null), (n.next = this._drawFirst), (this._drawFirst.prev = n), (this._drawFirst = n), this._requestRedraw(t)));
			},
		});
	function Wi(t) {
		return b.canvas ? new Fi(t) : null;
	}
	var Ui = (function () {
			try {
				return (
					document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
					function (t) {
						return document.createElement("<lvml:" + t + ' class="lvml">');
					}
				);
			} catch (t) {}
			return function (t) {
				return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
			};
		})(),
		zt = {
			_initContainer: function () {
				this._container = P("div", "leaflet-vml-container");
			},
			_update: function () {
				this._map._animatingZoom || (Hi.prototype._update.call(this), this.fire("update"));
			},
			_initPath: function (t) {
				var e = (t._container = Ui("shape"));
				M(e, "leaflet-vml-shape " + (this.options.className || "")), (e.coordsize = "1 1"), (t._path = Ui("path")), e.appendChild(t._path), this._updateStyle(t), (this._layers[h(t)] = t);
			},
			_addPath: function (t) {
				var e = t._container;
				this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
			},
			_removePath: function (t) {
				var e = t._container;
				T(e), t.removeInteractiveTarget(e), delete this._layers[h(t)];
			},
			_updateStyle: function (t) {
				var e = t._stroke,
					i = t._fill,
					n = t.options,
					o = t._container;
				(o.stroked = !!n.stroke),
					(o.filled = !!n.fill),
					n.stroke
						? ((e = e || (t._stroke = Ui("stroke"))),
						  o.appendChild(e),
						  (e.weight = n.weight + "px"),
						  (e.color = n.color),
						  (e.opacity = n.opacity),
						  n.dashArray ? (e.dashStyle = d(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ")) : (e.dashStyle = ""),
						  (e.endcap = n.lineCap.replace("butt", "flat")),
						  (e.joinstyle = n.lineJoin))
						: e && (o.removeChild(e), (t._stroke = null)),
					n.fill ? ((i = i || (t._fill = Ui("fill"))), o.appendChild(i), (i.color = n.fillColor || n.color), (i.opacity = n.fillOpacity)) : i && (o.removeChild(i), (t._fill = null));
			},
			_updateCircle: function (t) {
				var e = t._point.round(),
					i = Math.round(t._radius),
					n = Math.round(t._radiusY || i);
				this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600");
			},
			_setPath: function (t, e) {
				t._path.v = e;
			},
			_bringToFront: function (t) {
				fe(t._container);
			},
			_bringToBack: function (t) {
				ge(t._container);
			},
		},
		Vi = b.vml ? Ui : ct,
		qi = Hi.extend({
			_initContainer: function () {
				(this._container = Vi("svg")), this._container.setAttribute("pointer-events", "none"), (this._rootGroup = Vi("g")), this._container.appendChild(this._rootGroup);
			},
			_destroyContainer: function () {
				T(this._container), k(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
			},
			_update: function () {
				var t, e, i;
				(this._map._animatingZoom && this._bounds) ||
					(Hi.prototype._update.call(this),
					(e = (t = this._bounds).getSize()),
					(i = this._container),
					(this._svgSize && this._svgSize.equals(e)) || ((this._svgSize = e), i.setAttribute("width", e.x), i.setAttribute("height", e.y)),
					Z(i, t.min),
					i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
					this.fire("update"));
			},
			_initPath: function (t) {
				var e = (t._path = Vi("path"));
				t.options.className && M(e, t.options.className), t.options.interactive && M(e, "leaflet-interactive"), this._updateStyle(t), (this._layers[h(t)] = t);
			},
			_addPath: function (t) {
				this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
			},
			_removePath: function (t) {
				T(t._path), t.removeInteractiveTarget(t._path), delete this._layers[h(t)];
			},
			_updatePath: function (t) {
				t._project(), t._update();
			},
			_updateStyle: function (t) {
				var e = t._path,
					t = t.options;
				e &&
					(t.stroke
						? (e.setAttribute("stroke", t.color),
						  e.setAttribute("stroke-opacity", t.opacity),
						  e.setAttribute("stroke-width", t.weight),
						  e.setAttribute("stroke-linecap", t.lineCap),
						  e.setAttribute("stroke-linejoin", t.lineJoin),
						  t.dashArray ? e.setAttribute("stroke-dasharray", t.dashArray) : e.removeAttribute("stroke-dasharray"),
						  t.dashOffset ? e.setAttribute("stroke-dashoffset", t.dashOffset) : e.removeAttribute("stroke-dashoffset"))
						: e.setAttribute("stroke", "none"),
					t.fill ? (e.setAttribute("fill", t.fillColor || t.color), e.setAttribute("fill-opacity", t.fillOpacity), e.setAttribute("fill-rule", t.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
			},
			_updatePoly: function (t, e) {
				this._setPath(t, dt(t._parts, e));
			},
			_updateCircle: function (t) {
				var e = t._point,
					i = Math.max(Math.round(t._radius), 1),
					n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 ",
					e = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
				this._setPath(t, e);
			},
			_setPath: function (t, e) {
				t._path.setAttribute("d", e);
			},
			_bringToFront: function (t) {
				fe(t._path);
			},
			_bringToBack: function (t) {
				ge(t._path);
			},
		});
	function Gi(t) {
		return b.svg || b.vml ? new qi(t) : null;
	}
	b.vml && qi.include(zt),
		A.include({
			getRenderer: function (t) {
				t = (t = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
				return this.hasLayer(t) || this.addLayer(t), t;
			},
			_getPaneRenderer: function (t) {
				var e;
				return "overlayPane" !== t && void 0 !== t && (void 0 === (e = this._paneRenderers[t]) && ((e = this._createRenderer({ pane: t })), (this._paneRenderers[t] = e)), e);
			},
			_createRenderer: function (t) {
				return (this.options.preferCanvas && Wi(t)) || Gi(t);
			},
		});
	var Ki = yi.extend({
		initialize: function (t, e) {
			yi.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
		},
		setBounds: function (t) {
			return this.setLatLngs(this._boundsToLatLngs(t));
		},
		_boundsToLatLngs: function (t) {
			return [(t = g(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
		},
	});
	(qi.create = Vi),
		(qi.pointsToPath = dt),
		(xi.geometryToLayer = wi),
		(xi.coordsToLatLng = Pi),
		(xi.coordsToLatLngs = Li),
		(xi.latLngToCoords = Ti),
		(xi.latLngsToCoords = Mi),
		(xi.getFeature = zi),
		(xi.asFeature = Ci),
		A.mergeOptions({ boxZoom: !0 });
	var _t = n.extend({
			initialize: function (t) {
				(this._map = t), (this._container = t._container), (this._pane = t._panes.overlayPane), (this._resetStateTimeout = 0), t.on("unload", this._destroy, this);
			},
			addHooks: function () {
				S(this._container, "mousedown", this._onMouseDown, this);
			},
			removeHooks: function () {
				k(this._container, "mousedown", this._onMouseDown, this);
			},
			moved: function () {
				return this._moved;
			},
			_destroy: function () {
				T(this._pane), delete this._pane;
			},
			_resetState: function () {
				(this._resetStateTimeout = 0), (this._moved = !1);
			},
			_clearDeferredResetState: function () {
				0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
			},
			_onMouseDown: function (t) {
				if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
				this._clearDeferredResetState(),
					this._resetState(),
					re(),
					Le(),
					(this._startPoint = this._map.mouseEventToContainerPoint(t)),
					S(document, { contextmenu: Re, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
			},
			_onMouseMove: function (t) {
				this._moved || ((this._moved = !0), (this._box = P("div", "leaflet-zoom-box", this._container)), M(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), (this._point = this._map.mouseEventToContainerPoint(t));
				var t = new f(this._point, this._startPoint),
					e = t.getSize();
				Z(this._box, t.min), (this._box.style.width = e.x + "px"), (this._box.style.height = e.y + "px");
			},
			_finish: function () {
				this._moved && (T(this._box), z(this._container, "leaflet-crosshair")), ae(), Te(), k(document, { contextmenu: Re, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
			},
			_onMouseUp: function (t) {
				(1 !== t.which && 1 !== t.button) ||
					(this._finish(),
					this._moved &&
						(this._clearDeferredResetState(),
						(this._resetStateTimeout = setTimeout(a(this._resetState, this), 0)),
						(t = new s(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point))),
						this._map.fitBounds(t).fire("boxzoomend", { boxZoomBounds: t })));
			},
			_onKeyDown: function (t) {
				27 === t.keyCode && (this._finish(), this._clearDeferredResetState(), this._resetState());
			},
		}),
		Ct =
			(A.addInitHook("addHandler", "boxZoom", _t),
			A.mergeOptions({ doubleClickZoom: !0 }),
			n.extend({
				addHooks: function () {
					this._map.on("dblclick", this._onDoubleClick, this);
				},
				removeHooks: function () {
					this._map.off("dblclick", this._onDoubleClick, this);
				},
				_onDoubleClick: function (t) {
					var e = this._map,
						i = e.getZoom(),
						n = e.options.zoomDelta,
						i = t.originalEvent.shiftKey ? i - n : i + n;
					"center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i);
				},
			})),
		Zt =
			(A.addInitHook("addHandler", "doubleClickZoom", Ct),
			A.mergeOptions({ dragging: !0, inertia: !0, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: 0.2, worldCopyJump: !1, maxBoundsViscosity: 0 }),
			n.extend({
				addHooks: function () {
					var t;
					this._draggable ||
						((t = this._map),
						(this._draggable = new Je(t._mapPane, t._container)),
						this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this),
						this._draggable.on("predrag", this._onPreDragLimit, this),
						t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))),
						M(this._map._container, "leaflet-grab leaflet-touch-drag"),
						this._draggable.enable(),
						(this._positions = []),
						(this._times = []);
				},
				removeHooks: function () {
					z(this._map._container, "leaflet-grab"), z(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
				},
				moved: function () {
					return this._draggable && this._draggable._moved;
				},
				moving: function () {
					return this._draggable && this._draggable._moving;
				},
				_onDragStart: function () {
					var t,
						e = this._map;
					e._stop(),
						this._map.options.maxBounds && this._map.options.maxBoundsViscosity
							? ((t = g(this._map.options.maxBounds)),
							  (this._offsetLimit = _(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize()))),
							  (this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))))
							: (this._offsetLimit = null),
						e.fire("movestart").fire("dragstart"),
						e.options.inertia && ((this._positions = []), (this._times = []));
				},
				_onDrag: function (t) {
					var e, i;
					this._map.options.inertia && ((e = this._lastTime = +new Date()), (i = this._lastPos = this._draggable._absPos || this._draggable._newPos), this._positions.push(i), this._times.push(e), this._prunePositions(e)),
						this._map.fire("move", t).fire("drag", t);
				},
				_prunePositions: function (t) {
					for (; 1 < this._positions.length && 50 < t - this._times[0]; ) this._positions.shift(), this._times.shift();
				},
				_onZoomEnd: function () {
					var t = this._map.getSize().divideBy(2),
						e = this._map.latLngToLayerPoint([0, 0]);
					(this._initialWorldOffset = e.subtract(t).x), (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
				},
				_viscousLimit: function (t, e) {
					return t - (t - e) * this._viscosity;
				},
				_onPreDragLimit: function () {
					var t, e;
					this._viscosity &&
						this._offsetLimit &&
						((t = this._draggable._newPos.subtract(this._draggable._startPos)),
						(e = this._offsetLimit),
						t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
						t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
						t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
						t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
						(this._draggable._newPos = this._draggable._startPos.add(t)));
				},
				_onPreDragWrap: function () {
					var t = this._worldWidth,
						e = Math.round(t / 2),
						i = this._initialWorldOffset,
						n = this._draggable._newPos.x,
						o = ((n - e + i) % t) + e - i,
						n = ((n + e + i) % t) - e - i,
						t = Math.abs(o + i) < Math.abs(n + i) ? o : n;
					(this._draggable._absPos = this._draggable._newPos.clone()), (this._draggable._newPos.x = t);
				},
				_onDragEnd: function (t) {
					var e,
						i,
						n,
						o,
						s = this._map,
						r = s.options,
						a = !r.inertia || t.noInertia || this._times.length < 2;
					s.fire("dragend", t),
						!a &&
						(this._prunePositions(+new Date()),
						(t = this._lastPos.subtract(this._positions[0])),
						(a = (this._lastTime - this._times[0]) / 1e3),
						(e = r.easeLinearity),
						(a = (t = t.multiplyBy(e / a)).distanceTo([0, 0])),
						(i = Math.min(r.inertiaMaxSpeed, a)),
						(t = t.multiplyBy(i / a)),
						(n = i / (r.inertiaDeceleration * e)),
						(o = t.multiplyBy(-n / 2).round()).x || o.y)
							? ((o = s._limitOffset(o, s.options.maxBounds)),
							  x(function () {
									s.panBy(o, { duration: n, easeLinearity: e, noMoveStart: !0, animate: !0 });
							  }))
							: s.fire("moveend");
				},
			})),
		St =
			(A.addInitHook("addHandler", "dragging", Zt),
			A.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 }),
			n.extend({
				keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] },
				initialize: function (t) {
					(this._map = t), this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
				},
				addHooks: function () {
					var t = this._map._container;
					t.tabIndex <= 0 && (t.tabIndex = "0"), S(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
				},
				removeHooks: function () {
					this._removeHooks(), k(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
				},
				_onMouseDown: function () {
					var t, e, i;
					this._focused || ((i = document.body), (t = document.documentElement), (e = i.scrollTop || t.scrollTop), (i = i.scrollLeft || t.scrollLeft), this._map._container.focus(), window.scrollTo(i, e));
				},
				_onFocus: function () {
					(this._focused = !0), this._map.fire("focus");
				},
				_onBlur: function () {
					(this._focused = !1), this._map.fire("blur");
				},
				_setPanDelta: function (t) {
					for (var e = (this._panKeys = {}), i = this.keyCodes, n = 0, o = i.left.length; n < o; n++) e[i.left[n]] = [-1 * t, 0];
					for (n = 0, o = i.right.length; n < o; n++) e[i.right[n]] = [t, 0];
					for (n = 0, o = i.down.length; n < o; n++) e[i.down[n]] = [0, t];
					for (n = 0, o = i.up.length; n < o; n++) e[i.up[n]] = [0, -1 * t];
				},
				_setZoomDelta: function (t) {
					for (var e = (this._zoomKeys = {}), i = this.keyCodes, n = 0, o = i.zoomIn.length; n < o; n++) e[i.zoomIn[n]] = t;
					for (n = 0, o = i.zoomOut.length; n < o; n++) e[i.zoomOut[n]] = -t;
				},
				_addHooks: function () {
					S(document, "keydown", this._onKeyDown, this);
				},
				_removeHooks: function () {
					k(document, "keydown", this._onKeyDown, this);
				},
				_onKeyDown: function (t) {
					if (!(t.altKey || t.ctrlKey || t.metaKey)) {
						var e,
							i,
							n = t.keyCode,
							o = this._map;
						if (n in this._panKeys)
							(o._panAnim && o._panAnim._inProgress) ||
								((i = this._panKeys[n]),
								t.shiftKey && (i = m(i).multiplyBy(3)),
								o.options.maxBounds && (i = o._limitOffset(m(i), o.options.maxBounds)),
								o.options.worldCopyJump ? ((e = o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(i)))), o.panTo(e)) : o.panBy(i));
						else if (n in this._zoomKeys) o.setZoom(o.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
						else {
							if (27 !== n || !o._popup || !o._popup.options.closeOnEscapeKey) return;
							o.closePopup();
						}
						Re(t);
					}
				},
			})),
		Et =
			(A.addInitHook("addHandler", "keyboard", St),
			A.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 }),
			n.extend({
				addHooks: function () {
					S(this._map._container, "wheel", this._onWheelScroll, this), (this._delta = 0);
				},
				removeHooks: function () {
					k(this._map._container, "wheel", this._onWheelScroll, this);
				},
				_onWheelScroll: function (t) {
					var e = He(t),
						i = this._map.options.wheelDebounceTime,
						e = ((this._delta += e), (this._lastMousePos = this._map.mouseEventToContainerPoint(t)), this._startTime || (this._startTime = +new Date()), Math.max(i - (+new Date() - this._startTime), 0));
					clearTimeout(this._timer), (this._timer = setTimeout(a(this._performZoom, this), e)), Re(t);
				},
				_performZoom: function () {
					var t = this._map,
						e = t.getZoom(),
						i = this._map.options.zoomSnap || 0,
						n = (t._stop(), this._delta / (4 * this._map.options.wheelPxPerZoomLevel)),
						n = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
						i = i ? Math.ceil(n / i) * i : n,
						n = t._limitZoom(e + (0 < this._delta ? i : -i)) - e;
					(this._delta = 0), (this._startTime = null), n && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + n) : t.setZoomAround(this._lastMousePos, e + n));
				},
			})),
		kt =
			(A.addInitHook("addHandler", "scrollWheelZoom", Et),
			A.mergeOptions({ tapHold: b.touchNative && b.safari && b.mobile, tapTolerance: 15 }),
			n.extend({
				addHooks: function () {
					S(this._map._container, "touchstart", this._onDown, this);
				},
				removeHooks: function () {
					k(this._map._container, "touchstart", this._onDown, this);
				},
				_onDown: function (t) {
					var e;
					clearTimeout(this._holdTimeout),
						1 === t.touches.length &&
							((e = t.touches[0]),
							(this._startPos = this._newPos = new p(e.clientX, e.clientY)),
							(this._holdTimeout = setTimeout(
								a(function () {
									this._cancel(), this._isTapValid() && (S(document, "touchend", O), S(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
								}, this),
								600,
							)),
							S(document, "touchend touchcancel contextmenu", this._cancel, this),
							S(document, "touchmove", this._onMove, this));
				},
				_cancelClickPrevent: function t() {
					k(document, "touchend", O), k(document, "touchend touchcancel", t);
				},
				_cancel: function () {
					clearTimeout(this._holdTimeout), k(document, "touchend touchcancel contextmenu", this._cancel, this), k(document, "touchmove", this._onMove, this);
				},
				_onMove: function (t) {
					t = t.touches[0];
					this._newPos = new p(t.clientX, t.clientY);
				},
				_isTapValid: function () {
					return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
				},
				_simulateEvent: function (t, e) {
					t = new MouseEvent(t, { bubbles: !0, cancelable: !0, view: window, screenX: e.screenX, screenY: e.screenY, clientX: e.clientX, clientY: e.clientY });
					(t._simulated = !0), e.target.dispatchEvent(t);
				},
			})),
		Ot =
			(A.addInitHook("addHandler", "tapHold", kt),
			A.mergeOptions({ touchZoom: b.touch, bounceAtZoomLimits: !0 }),
			n.extend({
				addHooks: function () {
					M(this._map._container, "leaflet-touch-zoom"), S(this._map._container, "touchstart", this._onTouchStart, this);
				},
				removeHooks: function () {
					z(this._map._container, "leaflet-touch-zoom"), k(this._map._container, "touchstart", this._onTouchStart, this);
				},
				_onTouchStart: function (t) {
					var e,
						i,
						n = this._map;
					!t.touches ||
						2 !== t.touches.length ||
						n._animatingZoom ||
						this._zooming ||
						((e = n.mouseEventToContainerPoint(t.touches[0])),
						(i = n.mouseEventToContainerPoint(t.touches[1])),
						(this._centerPoint = n.getSize()._divideBy(2)),
						(this._startLatLng = n.containerPointToLatLng(this._centerPoint)),
						"center" !== n.options.touchZoom && (this._pinchStartLatLng = n.containerPointToLatLng(e.add(i)._divideBy(2))),
						(this._startDist = e.distanceTo(i)),
						(this._startZoom = n.getZoom()),
						(this._moved = !1),
						(this._zooming = !0),
						n._stop(),
						S(document, "touchmove", this._onTouchMove, this),
						S(document, "touchend touchcancel", this._onTouchEnd, this),
						O(t));
				},
				_onTouchMove: function (t) {
					if (t.touches && 2 === t.touches.length && this._zooming) {
						var e = this._map,
							i = e.mouseEventToContainerPoint(t.touches[0]),
							n = e.mouseEventToContainerPoint(t.touches[1]),
							o = i.distanceTo(n) / this._startDist;
						if (
							((this._zoom = e.getScaleZoom(o, this._startZoom)),
							!e.options.bounceAtZoomLimits && ((this._zoom < e.getMinZoom() && o < 1) || (this._zoom > e.getMaxZoom() && 1 < o)) && (this._zoom = e._limitZoom(this._zoom)),
							"center" === e.options.touchZoom)
						) {
							if (((this._center = this._startLatLng), 1 == o)) return;
						} else {
							i = i._add(n)._divideBy(2)._subtract(this._centerPoint);
							if (1 == o && 0 === i.x && 0 === i.y) return;
							this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(i), this._zoom);
						}
						this._moved || (e._moveStart(!0, !1), (this._moved = !0)), r(this._animRequest);
						n = a(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
						(this._animRequest = x(n, this, !0)), O(t);
					}
				},
				_onTouchEnd: function () {
					this._moved && this._zooming
						? ((this._zooming = !1),
						  r(this._animRequest),
						  k(document, "touchmove", this._onTouchMove, this),
						  k(document, "touchend touchcancel", this._onTouchEnd, this),
						  this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom)))
						: (this._zooming = !1);
				},
			})),
		Yi =
			(A.addInitHook("addHandler", "touchZoom", Ot),
			(A.BoxZoom = _t),
			(A.DoubleClickZoom = Ct),
			(A.Drag = Zt),
			(A.Keyboard = St),
			(A.ScrollWheelZoom = Et),
			(A.TapHold = kt),
			(A.TouchZoom = Ot),
			(t.Bounds = f),
			(t.Browser = b),
			(t.CRS = ot),
			(t.Canvas = Fi),
			(t.Circle = gi),
			(t.CircleMarker = fi),
			(t.Class = et),
			(t.Control = B),
			(t.DivIcon = Ii),
			(t.DivOverlay = Oi),
			(t.DomEvent = mt),
			(t.DomUtil = pt),
			(t.Draggable = Je),
			(t.Evented = it),
			(t.FeatureGroup = ui),
			(t.GeoJSON = xi),
			(t.GridLayer = Ri),
			(t.Handler = n),
			(t.Icon = ci),
			(t.ImageOverlay = Si),
			(t.LatLng = v),
			(t.LatLngBounds = s),
			(t.Layer = o),
			(t.LayerGroup = li),
			(t.LineUtil = gt),
			(t.Map = A),
			(t.Marker = pi),
			(t.Mixin = ft),
			(t.Path = mi),
			(t.Point = p),
			(t.PolyUtil = vt),
			(t.Polygon = yi),
			(t.Polyline = vi),
			(t.Popup = Ai),
			(t.PosAnimation = We),
			(t.Projection = wt),
			(t.Rectangle = Ki),
			(t.Renderer = Hi),
			(t.SVG = qi),
			(t.SVGOverlay = ki),
			(t.TileLayer = Ni),
			(t.Tooltip = Bi),
			(t.Transformation = at),
			(t.Util = tt),
			(t.VideoOverlay = Ei),
			(t.bind = a),
			(t.bounds = _),
			(t.canvas = Wi),
			(t.circle = function (t, e, i) {
				return new gi(t, e, i);
			}),
			(t.circleMarker = function (t, e) {
				return new fi(t, e);
			}),
			(t.control = Ue),
			(t.divIcon = function (t) {
				return new Ii(t);
			}),
			(t.extend = l),
			(t.featureGroup = function (t, e) {
				return new ui(t, e);
			}),
			(t.geoJSON = Zi),
			(t.geoJson = Mt),
			(t.gridLayer = function (t) {
				return new Ri(t);
			}),
			(t.icon = function (t) {
				return new ci(t);
			}),
			(t.imageOverlay = function (t, e, i) {
				return new Si(t, e, i);
			}),
			(t.latLng = w),
			(t.latLngBounds = g),
			(t.layerGroup = function (t, e) {
				return new li(t, e);
			}),
			(t.map = function (t, e) {
				return new A(t, e);
			}),
			(t.marker = function (t, e) {
				return new pi(t, e);
			}),
			(t.point = m),
			(t.polygon = function (t, e) {
				return new yi(t, e);
			}),
			(t.polyline = function (t, e) {
				return new vi(t, e);
			}),
			(t.popup = function (t, e) {
				return new Ai(t, e);
			}),
			(t.rectangle = function (t, e) {
				return new Ki(t, e);
			}),
			(t.setOptions = c),
			(t.stamp = h),
			(t.svg = Gi),
			(t.svgOverlay = function (t, e, i) {
				return new ki(t, e, i);
			}),
			(t.tileLayer = Di),
			(t.tooltip = function (t, e) {
				return new Bi(t, e);
			}),
			(t.transformation = ht),
			(t.version = "1.9.3"),
			(t.videoOverlay = function (t, e, i) {
				return new Ei(t, e, i);
			}),
			window.L);
	(t.noConflict = function () {
		return (window.L = Yi), this;
	}),
		(window.L = t);
});
//# sourceMappingURL=leaflet.js.map
