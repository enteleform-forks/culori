!(function (r, a) {
	'object' == typeof exports && 'undefined' != typeof module
		? a(exports)
		: 'function' == typeof define && define.amd
		? define(['exports'], a)
		: a(
				((r =
					'undefined' != typeof globalThis
						? globalThis
						: r || self).culori = {})
		  );
})(this, function (r) {
	'use strict';
	var a = function (r, a) {
			if ('number' == typeof r)
				return 3 === a
					? {
							mode: 'rgb',
							r: (((r >> 8) & 15) | ((r >> 4) & 240)) / 255,
							g: (((r >> 4) & 15) | (240 & r)) / 255,
							b: ((15 & r) | ((r << 4) & 240)) / 255
					  }
					: 4 === a
					? {
							mode: 'rgb',
							r: (((r >> 12) & 15) | ((r >> 8) & 240)) / 255,
							g: (((r >> 8) & 15) | ((r >> 4) & 240)) / 255,
							b: (((r >> 4) & 15) | (240 & r)) / 255,
							alpha: ((15 & r) | ((r << 4) & 240)) / 255
					  }
					: 6 === a
					? {
							mode: 'rgb',
							r: ((r >> 16) & 255) / 255,
							g: ((r >> 8) & 255) / 255,
							b: (255 & r) / 255
					  }
					: 8 === a
					? {
							mode: 'rgb',
							r: ((r >> 24) & 255) / 255,
							g: ((r >> 16) & 255) / 255,
							b: ((r >> 8) & 255) / 255,
							alpha: (255 & r) / 255
					  }
					: void 0;
		},
		n = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074
		},
		t = (/([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)/ + '').replace(/^\/|\/$/g, ''),
		e = t + '%',
		o = t + '%?',
		i = '(?:' + t + '%|' + t + ')',
		u = '(?:' + t + '(deg|grad|rad|turn)|' + t + ')',
		h = '\\s*,\\s*',
		l = '\\s+',
		c = new RegExp(
			'^rgba?\\(\\s*' +
				t +
				h +
				t +
				h +
				t +
				'\\s*(?:,\\s*' +
				i +
				'\\s*)?\\)$'
		),
		f = new RegExp(
			'^rgba?\\(\\s*' +
				e +
				h +
				e +
				h +
				e +
				'\\s*(?:,\\s*' +
				i +
				'\\s*)?\\)$'
		),
		p = new RegExp(
			'^rgba?\\(\\s*' +
				t +
				l +
				t +
				l +
				t +
				'\\s*(?:\\/\\s*' +
				i +
				'\\s*)?\\)$'
		),
		s = new RegExp(
			'^rgba?\\(\\s*' +
				e +
				l +
				e +
				l +
				e +
				'\\s*(?:\\/\\s*' +
				i +
				'\\s*)?\\)$'
		),
		d = new RegExp(
			'^hsla?\\(\\s*' +
				u +
				h +
				e +
				h +
				e +
				'\\s*(?:,\\s*' +
				i +
				'\\s*)?\\)$'
		),
		v = new RegExp(
			'^hsla?\\(\\s*' +
				u +
				l +
				e +
				l +
				e +
				'\\s*(?:\\/\\s*' +
				i +
				'\\s*)?\\)$'
		),
		b = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,
		g = new RegExp(
			'^hwb\\(\\s*' +
				u +
				l +
				e +
				l +
				e +
				'\\s*(?:\\/\\s*' +
				i +
				'\\s*)?\\)$'
		),
		M = new RegExp(
			'^lab\\(\\s*' +
				o +
				l +
				t +
				l +
				t +
				'\\s*(?:\\/\\s*' +
				i +
				'\\s*)?\\)$'
		),
		m = new RegExp(
			'^lch\\(\\s*' +
				o +
				l +
				t +
				l +
				u +
				'\\s*(?:\\/\\s*' +
				i +
				'\\s*)?\\)$'
		),
		y = function (r, a, n) {
			return r + n * (a - r);
		},
		x = function (r) {
			return (
				void 0 === r && (r = 1),
				1 === r
					? function (r) {
							return r;
					  }
					: function (a) {
							return Math.pow(a, r);
					  }
			);
		},
		w = function (r) {
			return function (a) {
				var n = (function (r) {
					for (var a = [], n = 0; n < r.length - 1; n++) {
						var t = r[n],
							e = r[n + 1];
						void 0 === t && void 0 === e
							? a.push(void 0)
							: void 0 !== t && void 0 !== e
							? a.push([t, e])
							: a.push(void 0 !== t ? [t, t] : [e, e]);
					}
					return a;
				})(a);
				return function (a) {
					var t = a * n.length,
						e = 1 === a ? n.length - 1 : Math.floor(t),
						o = n[e];
					return void 0 === o ? void 0 : r(o[0], o[1], t - e);
				};
			};
		},
		k = w(y),
		z = function (r) {
			var a = !1,
				n = r.map(function (r) {
					return void 0 !== r ? ((a = !0), r) : 1;
				});
			return a ? n : r;
		},
		P = {
			mode: 'rgb',
			channels: ['r', 'g', 'b', 'alpha'],
			alias: ['srgb'],
			parsers: [
				function (r) {
					var n;
					return (n = r.match(b))
						? a(parseInt(n[1], 16), n[1].length)
						: void 0;
				},
				function (r) {
					var a, n;
					if ((a = r.match(c) || r.match(p)))
						n = {
							mode: 'rgb',
							r: a[1] / 255,
							g: a[2] / 255,
							b: a[3] / 255
						};
					else {
						if (!(a = r.match(f) || r.match(s))) return;
						n = {
							mode: 'rgb',
							r: a[1] / 100,
							g: a[2] / 100,
							b: a[3] / 100
						};
					}
					return (
						void 0 !== a[4]
							? (n.alpha = a[4] / 100)
							: void 0 !== a[5] && (n.alpha = +a[5]),
						n
					);
				},
				function (r) {
					return a(n[r.toLowerCase()], 6);
				},
				function (r) {
					return 'transparent' === r ? a(0, 8) : void 0;
				}
			],
			interpolate: { r: k, g: k, b: k, alpha: { use: k, fixup: z } }
		},
		I = function (r) {
			var a = Math.abs(r);
			return a < 0.04045
				? r / 12.92
				: (Math.sign(r) || 1) * Math.pow((a + 0.055) / 1.055, 2.4);
		},
		q = function (r) {
			var a = r.r,
				n = r.g,
				t = r.b,
				e = r.alpha,
				o = { mode: 'lrgb', r: I(a), g: I(n), b: I(t) };
			return void 0 !== e && (o.alpha = e), o;
		},
		j = function (r) {
			var a = Math.abs(r);
			return a > 0.0031308
				? (Math.sign(r) || 1) * (1.055 * Math.pow(a, 1 / 2.4) - 0.055)
				: 12.92 * r;
		},
		S = function (r, a) {
			var n = r.r,
				t = r.g,
				e = r.b,
				o = r.alpha;
			void 0 === a && (a = 'rgb');
			var i = { mode: a, r: j(n), g: j(t), b: j(e) };
			return void 0 !== o && (i.alpha = o), i;
		},
		E = Object.assign({}, P, {
			mode: 'lrgb',
			output: { rgb: S },
			input: { rgb: q },
			parsers: []
		}),
		O = function (r) {
			return Math.pow(Math.abs(r), 563 / 256) * Math.sign(r);
		},
		A = function (r) {
			var a = O(r.r),
				n = O(r.g),
				t = O(r.b),
				e = {
					mode: 'xyz65',
					x:
						0.5766690429101305 * a +
						0.1855582379065463 * n +
						0.1882286462349947 * t,
					y:
						0.29734497525053605 * a +
						0.6273635662554661 * n +
						0.07529145849399788 * t,
					z:
						0.02703136138641234 * a +
						0.07068885253582723 * n +
						0.9913375368376388 * t
				};
			return void 0 !== r.alpha && (e.alpha = r.alpha), e;
		},
		C = function (r) {
			return Math.pow(Math.abs(r), 256 / 563) * Math.sign(r);
		},
		H = function (r) {
			var a = r.x,
				n = r.y,
				t = r.z,
				e = r.alpha,
				o = {
					mode: 'a98',
					r: C(
						2.0415879038107465 * a -
							0.5650069742788596 * n -
							0.34473135077832956 * t
					),
					g: C(
						-0.9692436362808795 * a +
							1.8759675015077202 * n +
							0.04155505740717557 * t
					),
					b: C(
						0.013444280632031142 * a -
							0.11836239223101838 * n +
							1.0151749943912054 * t
					)
				};
			return void 0 !== e && (o.alpha = e), o;
		},
		R = function (r) {
			var a = q(r),
				n = a.r,
				t = a.g,
				e = a.b,
				o = a.alpha,
				i = {
					mode: 'xyz65',
					x: 0.4124564 * n + 0.3575761 * t + 0.1804375 * e,
					y: 0.2126729 * n + 0.7151522 * t + 0.072175 * e,
					z: 0.0193339 * n + 0.119192 * t + 0.9503041 * e
				};
			return void 0 !== o && (i.alpha = o), i;
		},
		N = function (r) {
			var a = r.x,
				n = r.y,
				t = r.z,
				e = r.alpha,
				o = S({
					r: 3.2404542 * a - 1.5371385 * n - 0.4985314 * t,
					g: -0.969266 * a + 1.8760108 * n + 0.041556 * t,
					b: 0.0556434 * a - 0.2040259 * n + 1.0572252 * t
				});
			return void 0 !== e && (o.alpha = e), o;
		},
		$ = Object.assign({}, P, {
			mode: 'a98',
			alias: ['a98-rgb'],
			parsers: [],
			input: {
				rgb: function (r) {
					return H(R(r));
				},
				xyz65: H
			},
			output: {
				rgb: function (r) {
					return N(A(r));
				},
				xyz65: A
			}
		}),
		D = function (r) {
			var a = q(r),
				n = a.r,
				t = a.g,
				e = a.b,
				o = a.alpha,
				i = {
					mode: 'xyz65',
					x: 0.4865709 * n + 0.2656676 * t + 0.1982172 * e,
					y: 0.2289745 * n + 0.6917385 * t + 0.0792869 * e,
					z: 0 * n + 0.0451133 * t + 1.0439443 * e
				};
			return void 0 !== o && (i.alpha = o), i;
		},
		L = function (r) {
			var a = r.x,
				n = r.y,
				t = r.z,
				e = r.alpha,
				o = S(
					{
						r: 2.4934969 * a - 0.9313836 * n - 0.4027107 * t,
						g: -0.8294889 * a + 1.762664 * n + 0.0236246 * t,
						b: 0.0358458 * a - 0.0761723 * n + 0.9568845 * t
					},
					'p3'
				);
			return void 0 !== e && (o.alpha = e), o;
		},
		T = Object.assign({}, P, {
			mode: 'p3',
			alias: ['display-p3'],
			input: {
				rgb: function (r) {
					return L(R(r));
				},
				xyz65: L
			},
			output: {
				rgb: function (r) {
					return N(D(r));
				},
				xyz65: D
			},
			parsers: []
		}),
		B = function (r) {
			var a = Math.abs(r);
			return a >= 1 / 512 ? Math.sign(r) * Math.pow(a, 1 / 1.8) : 16 * r;
		},
		F = function (r) {
			var a = r.x,
				n = r.y,
				t = r.z,
				e = r.alpha,
				o = {
					mode: 'prophoto',
					r: B(
						1.3457989731028281 * a -
							0.25558010007997534 * n -
							0.05110628506753401 * t
					),
					g: B(
						-0.5446224939028347 * a +
							1.5082327413132781 * n +
							0.02053603239147973 * t
					),
					b: B(0 * a + 0 * n + 1.2119675456389454 * t)
				};
			return void 0 !== e && (o.alpha = e), o;
		},
		G = function (r) {
			var a = Math.abs(r);
			return a >= 16 / 512 ? Math.sign(r) * Math.pow(a, 1.8) : r / 16;
		},
		W = function (r) {
			var a = G(r.r),
				n = G(r.g),
				t = G(r.b),
				e = {
					mode: 'xyz65',
					x:
						0.7977604896723027 * a +
						0.13518583717574031 * n +
						0.0313493495815248 * t,
					y:
						0.2880711282292934 * a +
						0.7118432178101014 * n +
						8565396060525902e-20 * t,
					z: 0 * a + 0 * n + 0.8251046025104601 * t
				};
			return void 0 !== r.alpha && (e.alpha = r.alpha), e;
		},
		_ = function (r) {
			var a = r.x,
				n = r.y,
				t = r.z,
				e = r.alpha,
				o = S({
					r: 3.1338561 * a - 1.6168667 * n - 0.4906146 * t,
					g: -0.9787684 * a + 1.9161415 * n + 0.033454 * t,
					b: 0.0719453 * a - 0.2289914 * n + 1.4052427 * t
				});
			return void 0 !== e && (o.alpha = e), o;
		},
		K = function (r) {
			var a = q(r),
				n = a.r,
				t = a.g,
				e = a.b,
				o = a.alpha,
				i = {
					mode: 'xyz',
					x: 0.4360747 * n + 0.3850649 * t + 0.1430804 * e,
					y: 0.2225045 * n + 0.7168786 * t + 0.0606169 * e,
					z: 0.0139322 * n + 0.0971045 * t + 0.7141733 * e
				};
			return void 0 !== o && (i.alpha = o), i;
		},
		J = Object.assign({}, P, {
			mode: 'prophoto',
			alias: ['prophoto-rgb'],
			parsers: [],
			input: {
				xyz: F,
				rgb: function (r) {
					return F(K(r));
				}
			},
			output: {
				xyz: W,
				rgb: function (r) {
					return _(W(r));
				}
			}
		}),
		Q = 1.09929682680944,
		U = function (r) {
			var a = Math.abs(r);
			return a > 0.018053968510807
				? (Math.sign(r) || 1) * (Q * Math.pow(a, 0.45) - (Q - 1))
				: 4.5 * r;
		},
		V = function (r) {
			var a = r.x,
				n = r.y,
				t = r.z,
				e = r.alpha,
				o = {
					mode: 'rec2020',
					r: U(
						1.7166511879712674 * a -
							0.35567078377639233 * n -
							0.25336628137365974 * t
					),
					g: U(
						-0.6666843518324892 * a +
							1.6164812366349395 * n +
							0.01576854581391113 * t
					),
					b: U(
						0.017639857445310783 * a -
							0.042770613257808524 * n +
							0.9421031212354738 * t
					)
				};
			return void 0 !== e && (o.alpha = e), o;
		},
		X = 1.09929682680944,
		Y = function (r) {
			var a = Math.abs(r);
			return a < 0.08124285829863151
				? r / 4.5
				: (Math.sign(r) || 1) * Math.pow((a + X - 1) / X, 1 / 0.45);
		},
		Z = function (r) {
			var a = Y(r.r),
				n = Y(r.g),
				t = Y(r.b),
				e = {
					mode: 'xyz65',
					x:
						0.6369580483012914 * a +
						0.14461690358620832 * n +
						0.1688809751641721 * t,
					y:
						0.2627002120112671 * a +
						0.6779980715188708 * n +
						0.05930171646986196 * t,
					z: 0 * a + 0.028072693049087428 * n + 1.060985057710791 * t
				};
			return void 0 !== r.alpha && (e.alpha = r.alpha), e;
		},
		rr = Object.assign({}, P, {
			mode: 'rec2020',
			input: {
				xyz: V,
				rgb: function (r) {
					return V(R(r));
				}
			},
			output: {
				xyz: Z,
				rgb: function (r) {
					return N(Z(r));
				}
			},
			parsers: []
		}),
		ar = function (r) {
			return (r %= 360) < 0 ? r + 360 : r;
		};
	var nr = function (r, a) {
			switch (a) {
				case 'deg':
					return +r;
				case 'rad':
					return (r / Math.PI) * 180;
				case 'grad':
					return (r / 10) * 9;
				case 'turn':
					return 360 * r;
			}
		},
		tr = function (r, a) {
			return r
				.map(function (n, t, e) {
					if (void 0 === n) return n;
					var o = ar(n);
					return 0 === t || void 0 === r[t - 1]
						? o
						: a(o - ar(e[t - 1]));
				})
				.reduce(function (r, a) {
					return r.length &&
						void 0 !== a &&
						void 0 !== r[r.length - 1]
						? (r.push(a + r[r.length - 1]), r)
						: (r.push(a), r);
				}, []);
		},
		er = function (r) {
			return tr(r, function (r) {
				return Math.abs(r) <= 180 ? r : r - 360 * Math.sign(r);
			});
		},
		or = {},
		ir = {},
		ur = [],
		hr = function (r) {
			return r;
		},
		lr = function (r) {
			(or[r.mode] = Object.assign(or[r.mode] || {}, r.output)),
				Object.keys(r.input || {}).forEach(function (a) {
					or[a] || (or[a] = {}), (or[a][r.mode] = r.input[a]);
				}),
				r.ranges || (r.ranges = {}),
				r.difference || (r.difference = {}),
				r.channels.forEach(function (a) {
					if (
						(void 0 === r.ranges[a] && (r.ranges[a] = [0, 1]),
						!r.interpolate[a])
					)
						throw new Error('Missing interpolator for: ' + a);
					'function' == typeof r.interpolate[a] &&
						(r.interpolate[a] = { use: r.interpolate[a] }),
						r.interpolate[a].fixup || (r.interpolate[a].fixup = hr);
				}),
				(ir[r.mode] = r),
				(r.parsers || []).forEach(function (r) {
					return ur.push(r);
				});
		},
		cr = function (r) {
			return ir[r];
		},
		fr = function (r) {
			if ('string' == typeof r) {
				for (
					var a, n = 0, t = ur.length;
					n < t && void 0 === (a = ur[n++](r));

				);
				return a;
			}
		},
		pr = function (r, a) {
			return void 0 === r
				? void 0
				: 'object' != typeof r
				? fr(r)
				: void 0 !== r.mode
				? r
				: a
				? Object.assign({}, r, { mode: a })
				: void 0;
		},
		sr = function (r) {
			return (
				void 0 === r && (r = 'rgb'),
				function (a) {
					return void 0 !== (a = pr(a, r))
						? a.mode === r
							? a
							: or[a.mode][r]
							? or[a.mode][r](a)
							: 'rgb' === r
							? or[a.mode].rgb(a)
							: or.rgb[r](or[a.mode].rgb(a))
						: void 0;
				}
			);
		},
		dr = function (r, a) {
			if (void 0 === r.h || void 0 === a.h || !r.s || !a.s) return 0;
			var n = ar(r.h),
				t = ar(a.h),
				e = Math.sin((((t - n + 360) / 2) * Math.PI) / 180);
			return 2 * Math.sqrt(r.s * a.s) * e;
		},
		vr = function (r, a) {
			if (void 0 === r.h || void 0 === a.h) return 0;
			var n = ar(r.h),
				t = ar(a.h);
			return Math.abs(t - n) > 180
				? n - (t - 360 * Math.sign(t - n))
				: t - n;
		},
		br = function (r, a) {
			if (void 0 === r.h || void 0 === a.h || !r.c || !a.c) return 0;
			var n = ar(r.h),
				t = ar(a.h),
				e = Math.sin((((t - n + 360) / 2) * Math.PI) / 180);
			return 2 * Math.sqrt(r.c * a.c) * e;
		},
		gr = function (r, a) {
			void 0 === r && (r = 'rgb'), void 0 === a && (a = [1, 1, 1, 0]);
			var n = cr(r),
				t = n.channels,
				e = n.difference,
				o = sr(r);
			return function (r, n) {
				var i = o(r),
					u = o(n);
				return Math.sqrt(
					t.reduce(function (r, n, t) {
						var o = e[n] ? e[n](i, u) : i[n] - u[n];
						return r + (a[t] || 0) * Math.pow(isNaN(o) ? 0 : o, 2);
					}, 0)
				);
			};
		},
		Mr = function (r) {
			var a = r.reduce(
				function (r, a) {
					if (void 0 !== a) {
						var n = (a * Math.PI) / 180;
						(r.sin += Math.sin(n)), (r.cos += Math.cos(n));
					}
					return r;
				},
				{ sin: 0, cos: 0 }
			);
			return (180 * Math.atan2(a.sin, a.cos)) / Math.PI;
		},
		mr = function (r) {
			var a = r.filter(function (r) {
				return void 0 !== r;
			});
			return a.length
				? a.reduce(function (r, a) {
						return r + a;
				  }, 0) / a.length
				: void 0;
		},
		yr = function (r) {
			return 'function' == typeof r;
		};
	var xr = {
		mode: 'hsl',
		output: {
			rgb: function (r) {
				var a = r.h,
					n = r.s,
					t = r.l,
					e = r.alpha;
				a = ar(a);
				var o,
					i = t + n * (t < 0.5 ? t : 1 - t),
					u = i - 2 * (i - t) * Math.abs(((a / 60) % 2) - 1);
				switch (Math.floor(a / 60)) {
					case 0:
						o = { r: i, g: u, b: 2 * t - i };
						break;
					case 1:
						o = { r: u, g: i, b: 2 * t - i };
						break;
					case 2:
						o = { r: 2 * t - i, g: i, b: u };
						break;
					case 3:
						o = { r: 2 * t - i, g: u, b: i };
						break;
					case 4:
						o = { r: u, g: 2 * t - i, b: i };
						break;
					case 5:
						o = { r: i, g: 2 * t - i, b: u };
						break;
					default:
						o = { r: 2 * t - i, g: 2 * t - i, b: 2 * t - i };
				}
				return (o.mode = 'rgb'), void 0 !== e && (o.alpha = e), o;
			}
		},
		input: {
			rgb: function (r) {
				var a = r.r,
					n = r.g,
					t = r.b,
					e = r.alpha,
					o = Math.max(a, n, t),
					i = Math.min(a, n, t),
					u = {
						mode: 'hsl',
						s: o === i ? 0 : (o - i) / (1 - Math.abs(o + i - 1)),
						l: 0.5 * (o + i)
					};
				return (
					o - i != 0 &&
						(u.h =
							60 *
							(o === a
								? (n - t) / (o - i) + 6 * (n < t)
								: o === n
								? (t - a) / (o - i) + 2
								: (a - n) / (o - i) + 4)),
					void 0 !== e && (u.alpha = e),
					u
				);
			}
		},
		channels: ['h', 's', 'l', 'alpha'],
		ranges: { h: [0, 360] },
		parsers: [
			function (r) {
				var a = r.match(d) || r.match(v);
				if (a) {
					var n = {
						mode: 'hsl',
						h: void 0 === a[3] ? nr(a[1], a[2]) : +a[3],
						s: Math.min(Math.max(0, a[4] / 100), 1),
						l: Math.min(Math.max(0, a[5] / 100), 1)
					};
					return (
						void 0 !== a[6]
							? (n.alpha = a[6] / 100)
							: void 0 !== a[7] && (n.alpha = +a[7]),
						n
					);
				}
			}
		],
		interpolate: {
			h: { use: k, fixup: er },
			s: k,
			l: k,
			alpha: { use: k, fixup: z }
		},
		difference: { h: dr },
		average: { h: Mr }
	};
	function wr(r) {
		var a = r.h,
			n = r.s,
			t = r.v,
			e = r.alpha;
		a = ar(a);
		var o,
			i = Math.abs(((a / 60) % 2) - 1);
		switch (Math.floor(a / 60)) {
			case 0:
				o = { r: t, g: t * (1 - n * i), b: t * (1 - n) };
				break;
			case 1:
				o = { r: t * (1 - n * i), g: t, b: t * (1 - n) };
				break;
			case 2:
				o = { r: t * (1 - n), g: t, b: t * (1 - n * i) };
				break;
			case 3:
				o = { r: t * (1 - n), g: t * (1 - n * i), b: t };
				break;
			case 4:
				o = { r: t * (1 - n * i), g: t * (1 - n), b: t };
				break;
			case 5:
				o = { r: t, g: t * (1 - n), b: t * (1 - n * i) };
				break;
			default:
				o = { r: t * (1 - n), g: t * (1 - n), b: t * (1 - n) };
		}
		return (o.mode = 'rgb'), void 0 !== e && (o.alpha = e), o;
	}
	function kr(r) {
		var a = r.r,
			n = r.g,
			t = r.b,
			e = r.alpha,
			o = Math.max(a, n, t),
			i = Math.min(a, n, t),
			u = { mode: 'hsv', s: 0 === o ? 0 : 1 - i / o, v: o };
		return (
			o - i != 0 &&
				(u.h =
					60 *
					(o === a
						? (n - t) / (o - i) + 6 * (n < t)
						: o === n
						? (t - a) / (o - i) + 2
						: (a - n) / (o - i) + 4)),
			void 0 !== e && (u.alpha = e),
			u
		);
	}
	var zr = {
		mode: 'hsv',
		output: { rgb: wr },
		input: { rgb: kr },
		channels: ['h', 's', 'v', 'alpha'],
		ranges: { h: [0, 360] },
		interpolate: {
			h: { use: k, fixup: er },
			s: k,
			v: k,
			alpha: { use: k, fixup: z }
		},
		difference: { h: dr },
		average: { h: Mr }
	};
	var Pr = {
		mode: 'hsi',
		output: {
			rgb: function (r) {
				var a = r.h,
					n = r.s,
					t = r.i,
					e = r.alpha;
				a = ar(a);
				var o,
					i = Math.abs(((a / 60) % 2) - 1);
				switch (Math.floor(a / 60)) {
					case 0:
						o = {
							r: t * (1 + n * (3 / (2 - i) - 1)),
							g: t * (1 + n * ((3 * (1 - i)) / (2 - i) - 1)),
							b: t * (1 - n)
						};
						break;
					case 1:
						o = {
							r: t * (1 + n * ((3 * (1 - i)) / (2 - i) - 1)),
							g: t * (1 + n * (3 / (2 - i) - 1)),
							b: t * (1 - n)
						};
						break;
					case 2:
						o = {
							r: t * (1 - n),
							g: t * (1 + n * (3 / (2 - i) - 1)),
							b: t * (1 + n * ((3 * (1 - i)) / (2 - i) - 1))
						};
						break;
					case 3:
						o = {
							r: t * (1 - n),
							g: t * (1 + n * ((3 * (1 - i)) / (2 - i) - 1)),
							b: t * (1 + n * (3 / (2 - i) - 1))
						};
						break;
					case 4:
						o = {
							r: t * (1 + n * ((3 * (1 - i)) / (2 - i) - 1)),
							g: t * (1 - n),
							b: t * (1 + n * (3 / (2 - i) - 1))
						};
						break;
					case 5:
						o = {
							r: t * (1 + n * (3 / (2 - i) - 1)),
							g: t * (1 - n),
							b: t * (1 + n * ((3 * (1 - i)) / (2 - i) - 1))
						};
						break;
					default:
						o = { r: t * (1 - n), g: t * (1 - n), b: t * (1 - n) };
				}
				return (o.mode = 'rgb'), void 0 !== e && (o.alpha = e), o;
			}
		},
		input: {
			rgb: function (r) {
				var a = r.r,
					n = r.g,
					t = r.b,
					e = r.alpha,
					o = Math.max(a, n, t),
					i = Math.min(a, n, t),
					u = {
						mode: 'hsi',
						s: a + n + t === 0 ? 0 : 1 - (3 * i) / (a + n + t),
						i: (a + n + t) / 3
					};
				return (
					o - i != 0 &&
						(u.h =
							60 *
							(o === a
								? (n - t) / (o - i) + 6 * (n < t)
								: o === n
								? (t - a) / (o - i) + 2
								: (a - n) / (o - i) + 4)),
					void 0 !== e && (u.alpha = e),
					u
				);
			}
		},
		channels: ['h', 's', 'i', 'alpha'],
		ranges: { h: [0, 360] },
		interpolate: {
			h: { use: k, fixup: er },
			s: k,
			i: k,
			alpha: { use: k, fixup: z }
		},
		difference: { h: dr },
		average: { h: Mr }
	};
	var Ir,
		qr = {
			mode: 'hwb',
			output: {
				rgb: function (r) {
					var a = r.h,
						n = r.w,
						t = r.b;
					if (n + t > 1) {
						var e = n + t;
						(n /= e), (t /= e);
					}
					return wr({
						h: a,
						s: 1 === t ? 1 : 1 - n / (1 - t),
						v: 1 - t,
						alpha: r.alpha
					});
				}
			},
			input: {
				rgb: function (r) {
					var a = kr(r);
					if (void 0 !== a) {
						var n = { mode: 'hwb', w: (1 - a.s) * a.v, b: 1 - a.v };
						return (
							void 0 !== a.h && (n.h = a.h),
							void 0 !== a.alpha && (n.alpha = a.alpha),
							n
						);
					}
				}
			},
			channels: ['h', 'w', 'b', 'alpha'],
			ranges: { h: [0, 360] },
			parsers: [
				function (r) {
					var a = r.match(g);
					if (a) {
						var n = {
							mode: 'hwb',
							h: void 0 === a[3] ? nr(a[1], a[2]) : +a[3],
							w: a[4] / 100,
							b: a[5] / 100
						};
						if (n.w + n.b > 1) {
							var t = n.w + n.b;
							(n.w /= t), (n.b /= t);
						}
						return (
							void 0 !== a[6]
								? (n.alpha = a[6] / 100)
								: void 0 !== a[7] && (n.alpha = +a[7]),
							n
						);
					}
				}
			],
			interpolate: {
				h: { use: k, fixup: er },
				w: k,
				b: k,
				alpha: { use: k, fixup: z }
			},
			difference: { h: vr },
			average: { h: Mr }
		},
		jr = function (r) {
			var a = Math.pow(r / 1e4, 0.1593017578125);
			return Math.pow(
				(0.8359375 + 18.8515625 * a) / (1 + 18.6875 * a),
				134.03437499999998
			);
		},
		Sr = function (r) {
			return Math.max(203 * r, 0);
		},
		Er = function (r) {
			var a = r.x,
				n = r.y,
				t = r.z,
				e = r.alpha;
			(a = Sr(a)), (n = Sr(n));
			var o = 1.15 * a - 0.15 * (t = Sr(t)),
				i = 0.66 * n + 0.34 * a,
				u = jr(0.41478972 * o + 0.579999 * i + 0.014648 * t),
				h = jr(-0.20151 * o + 1.120649 * i + 0.0531008 * t),
				l = jr(-0.0166008 * o + 0.2648 * i + 0.6684799 * t),
				c = (u + h) / 2,
				f = {
					mode: 'jab',
					j: (0.44 * c) / (1 - 0.56 * c) - 16295499532821565e-27,
					a: 3.524 * u - 4.066708 * h + 0.542708 * l,
					b: 0.199076 * u + 1.096799 * h - 1.295875 * l
				};
			return void 0 !== e && (f.alpha = e), f;
		},
		Or = 16295499532821565e-27,
		Ar = function (r) {
			var a = Math.pow(r, 0.007460772656268216);
			return (
				1e4 *
				Math.pow(
					(0.8359375 - a) / (18.6875 * a - 18.8515625),
					6.277394636015326
				)
			);
		},
		Cr = function (r) {
			return r / 203;
		},
		Hr = function (r) {
			var a = r.j,
				n = r.a,
				t = r.b,
				e = r.alpha,
				o = (a + Or) / (0.44 + 0.56 * (a + Or)),
				i = Ar(o + 0.13860504 * n + 0.058047316 * t),
				u = Ar(o - 0.13860504 * n - 0.058047316 * t),
				h = Ar(o - 0.096019242 * n - 0.8118919 * t),
				l = {
					mode: 'xyz65',
					x: Cr(
						1.661373024652174 * i -
							0.914523081304348 * u +
							0.23136208173913045 * h
					),
					y: Cr(
						-0.3250758611844533 * i +
							1.571847026732543 * u -
							0.21825383453227928 * h
					),
					z: Cr(-0.090982811 * i - 0.31272829 * u + 1.5227666 * h)
				};
			return void 0 !== e && (l.alpha = e), l;
		},
		Rr = function (r) {
			var a = Er(R(r));
			return r.r === r.b && r.b === r.g && (a.a = a.b = 0), a;
		},
		Nr = function (r) {
			return N(Hr(r));
		},
		$r = {
			mode: 'jab',
			channels: ['j', 'a', 'b', 'alpha'],
			input: { rgb: Rr, xyz65: Er },
			output: { rgb: Nr, xyz65: Hr },
			ranges: { j: [0, 0.221], a: [-0.108, 0.129], b: [-0.185, 0.134] },
			interpolate: { j: k, a: k, b: k, alpha: { use: k, fixup: z } }
		},
		Dr = function (r) {
			var a = r.j,
				n = r.a,
				t = r.b,
				e = r.alpha,
				o = Math.sqrt(n * n + t * t),
				i = { mode: 'jch', j: a, c: o };
			return (
				o && (i.h = ar((180 * Math.atan2(t, n)) / Math.PI)),
				void 0 !== e && (i.alpha = e),
				i
			);
		},
		Lr = function (r) {
			var a = r.j,
				n = r.c,
				t = r.h,
				e = r.alpha,
				o = {
					mode: 'jab',
					j: a,
					a: n ? n * Math.cos((t / 180) * Math.PI) : 0,
					b: n ? n * Math.sin((t / 180) * Math.PI) : 0
				};
			return void 0 !== e && (o.alpha = e), o;
		},
		Tr = {
			mode: 'jch',
			output: {
				lab: Lr,
				rgb: function (r) {
					return Nr(Lr(r));
				}
			},
			input: {
				rgb: function (r) {
					return Dr(Rr(r));
				},
				lab: Dr
			},
			channels: ['j', 'c', 'h', 'alpha'],
			ranges: { j: [0, 0.221], c: [0, 0.19], h: [0, 360] },
			interpolate: {
				h: { use: k, fixup: er },
				c: k,
				j: k,
				alpha: { use: k, fixup: z }
			},
			difference: { h: br },
			average: { h: Mr }
		},
		Br = 0.96422,
		Fr = 0.82521,
		Gr = Math.pow(29, 3) / Math.pow(3, 3),
		Wr = Math.pow(6, 3) / Math.pow(29, 3),
		_r = function (r) {
			return Math.pow(r, 3) > Wr ? Math.pow(r, 3) : (116 * r - 16) / Gr;
		},
		Kr = function (r) {
			var a = r.l,
				n = r.a,
				t = r.b,
				e = r.alpha,
				o = (a + 16) / 116,
				i = o - t / 200,
				u = {
					mode: 'xyz',
					x: _r(n / 500 + o) * Br,
					y: 1 * _r(o),
					z: _r(i) * Fr
				};
			return void 0 !== e && (u.alpha = e), u;
		},
		Jr = function (r) {
			return _(Kr(r));
		},
		Qr = function (r) {
			return r > Wr ? Math.cbrt(r) : (Gr * r + 16) / 116;
		},
		Ur = function (r) {
			var a = r.x,
				n = r.y,
				t = r.z,
				e = r.alpha,
				o = Qr(a / Br),
				i = Qr(n / 1),
				u = {
					mode: 'lab',
					l: 116 * i - 16,
					a: 500 * (o - i),
					b: 200 * (i - Qr(t / Fr))
				};
			return void 0 !== e && (u.alpha = e), u;
		},
		Vr = function (r) {
			var a = Ur(K(r));
			return r.r === r.b && r.b === r.g && (a.a = a.b = 0), a;
		},
		Xr = {
			mode: 'lab',
			alias: ['lab-d50'],
			output: { xyz: Kr, rgb: Jr },
			input: { xyz: Ur, rgb: Vr },
			channels: ['l', 'a', 'b', 'alpha'],
			ranges: {
				l: [0, 100],
				a: [-79.167, 93.408],
				b: [-111.859, 93.246]
			},
			parsers: [
				function (r) {
					var a = r.match(M);
					if (a) {
						var n = { mode: 'lab', l: +a[1], a: +a[2], b: +a[3] };
						return (
							void 0 !== a[4]
								? (n.alpha = a[4] / 100)
								: void 0 !== a[5] && (n.alpha = +a[5]),
							n
						);
					}
				}
			],
			interpolate: { l: k, a: k, b: k, alpha: { use: k, fixup: z } }
		},
		Yr = 0.95047,
		Zr = 1.08883,
		ra = Math.pow(29, 3) / Math.pow(3, 3),
		aa = Math.pow(6, 3) / Math.pow(29, 3),
		na = function (r) {
			return Math.pow(r, 3) > aa ? Math.pow(r, 3) : (116 * r - 16) / ra;
		},
		ta = function (r) {
			var a = r.l,
				n = r.a,
				t = r.b,
				e = r.alpha,
				o = (a + 16) / 116,
				i = o - t / 200,
				u = {
					mode: 'xyz65',
					x: na(n / 500 + o) * Yr,
					y: 1 * na(o),
					z: na(i) * Zr
				};
			return void 0 !== e && (u.alpha = e), u;
		},
		ea = function (r) {
			return N(ta(r));
		},
		oa = function (r) {
			return r > aa ? Math.cbrt(r) : (ra * r + 16) / 116;
		},
		ia = function (r) {
			var a = r.x,
				n = r.y,
				t = r.z,
				e = r.alpha,
				o = oa(a / Yr),
				i = oa(n / 1),
				u = {
					mode: 'lab65',
					l: 116 * i - 16,
					a: 500 * (o - i),
					b: 200 * (i - oa(t / Zr))
				};
			return void 0 !== e && (u.alpha = e), u;
		},
		ua = function (r) {
			var a = ia(R(r));
			return r.r === r.b && r.b === r.g && (a.a = a.b = 0), a;
		},
		ha = Object.assign({}, Xr, {
			mode: 'lab65',
			alias: ['lab-d65'],
			output: { xyz65: ta, rgb: ea },
			input: { xyz65: ia, rgb: ua },
			ranges: { l: [0, 100], a: [-86.183, 98.234], b: [-107.86, 94.478] },
			parsers: []
		}),
		la = function (r, a) {
			var n = r.l,
				t = r.a,
				e = r.b,
				o = r.alpha;
			void 0 === a && (a = 'lch');
			var i = Math.sqrt(t * t + e * e),
				u = { mode: a, l: n, c: i };
			return (
				i && (u.h = ar((180 * Math.atan2(e, t)) / Math.PI)),
				void 0 !== o && (u.alpha = o),
				u
			);
		},
		ca = function (r, a) {
			var n = r.l,
				t = r.c,
				e = r.h,
				o = r.alpha;
			void 0 === a && (a = 'lab');
			var i = {
				mode: a,
				l: n,
				a: t ? t * Math.cos((e / 180) * Math.PI) : 0,
				b: t ? t * Math.sin((e / 180) * Math.PI) : 0
			};
			return void 0 !== o && (i.alpha = o), i;
		},
		fa = {
			mode: 'lch',
			alias: ['lch-d50'],
			output: {
				lab: ca,
				rgb: function (r) {
					return Jr(ca(r));
				}
			},
			input: {
				rgb: function (r) {
					return la(Vr(r));
				},
				lab: la
			},
			channels: ['l', 'c', 'h', 'alpha'],
			ranges: { l: [0, 100], c: [0, 131.008], h: [0, 360] },
			parsers: [
				function (r) {
					var a = r.match(m);
					if (a) {
						var n = {
							mode: 'lch',
							l: +a[1],
							c: Math.max(0, +a[2]),
							h: void 0 === a[5] ? nr(a[3], a[4]) : +a[5]
						};
						return (
							void 0 !== a[6]
								? (n.alpha = a[6] / 100)
								: void 0 !== a[7] && (n.alpha = +a[7]),
							n
						);
					}
				}
			],
			interpolate: {
				h: { use: k, fixup: er },
				c: k,
				l: k,
				alpha: { use: k, fixup: z }
			},
			difference: { h: br },
			average: { h: Mr }
		},
		pa = Object.assign({}, fa, {
			mode: 'lch65',
			alias: ['lch-d65'],
			output: {
				lab65: function (r) {
					return ca(r, 'lab65');
				},
				rgb: function (r) {
					return ea(ca(r, 'lab65'));
				}
			},
			input: {
				rgb: function (r) {
					return la(ua(r), 'lch65');
				},
				lab65: function (r) {
					return la(r, 'lch65');
				}
			},
			parsers: [],
			ranges: { l: [0, 100], c: [0, 133.807], h: [0, 360] }
		}),
		sa = function (r, a, n) {
			return (4 * r) / (r + 15 * a + 3 * n);
		},
		da = function (r, a, n) {
			return (9 * a) / (r + 15 * a + 3 * n);
		},
		va = sa(Br, 1, Fr),
		ba = da(Br, 1, Fr),
		ga = function (r) {
			var a,
				n = r.x,
				t = r.y,
				e = r.z,
				o = r.alpha,
				i = (a = t / 1) <= Wr ? Gr * a : 116 * Math.cbrt(a) - 16,
				u = sa(n, t, e),
				h = da(n, t, e);
			isFinite(u) && isFinite(h)
				? ((u = 13 * i * (u - va)), (h = 13 * i * (h - ba)))
				: (i = u = h = 0);
			var l = { mode: 'luv', l: i, u: u, v: h };
			return void 0 !== o && (l.alpha = o), l;
		},
		Ma = function (r) {
			return ga(K(r));
		},
		ma = (4 * (Ir = Br)) / (Ir + 15 * 1 + 3 * Fr),
		ya = (function (r, a, n) {
			return (9 * a) / (r + 15 * a + 3 * n);
		})(Br, 1, Fr),
		xa = function (r) {
			var a = r.l,
				n = r.u,
				t = r.v,
				e = r.alpha,
				o = n / (13 * a) + ma,
				i = t / (13 * a) + ya,
				u = 1 * (a <= 8 ? a / Gr : Math.pow((a + 16) / 116, 3)),
				h = {
					mode: 'xyz',
					x: (u * (9 * o)) / (4 * i),
					y: u,
					z: (u * (12 - 3 * o - 20 * i)) / (4 * i)
				};
			return void 0 !== e && (h.alpha = e), h;
		},
		wa = function (r) {
			return _(xa(r));
		},
		ka = {
			mode: 'luv',
			output: { xyz: xa, rgb: wa },
			input: { xyz: ga, rgb: Ma },
			channels: ['l', 'u', 'v', 'alpha'],
			ranges: { l: [0, 100], u: [-84.86, 174.87], v: [-125.744, 87.165] },
			interpolate: { l: k, u: k, v: k, alpha: { use: k, fixup: z } }
		},
		za = function (r) {
			var a = r.l,
				n = r.u,
				t = r.v,
				e = r.alpha,
				o = Math.sqrt(n * n + t * t),
				i = { mode: 'lchuv', l: a, c: o };
			return (
				o && (i.h = ar((180 * Math.atan2(t, n)) / Math.PI)),
				void 0 !== e && (i.alpha = e),
				i
			);
		},
		Pa = function (r) {
			var a = r.l,
				n = r.c,
				t = r.h,
				e = r.alpha,
				o = {
					mode: 'luv',
					l: a,
					u: n ? n * Math.cos((t / 180) * Math.PI) : 0,
					v: n ? n * Math.sin((t / 180) * Math.PI) : 0
				};
			return void 0 !== e && (o.alpha = e), o;
		},
		Ia = {
			mode: 'lchuv',
			output: {
				luv: Pa,
				rgb: function (r) {
					return wa(Pa(r));
				}
			},
			input: {
				rgb: function (r) {
					return za(Ma(r));
				},
				luv: za
			},
			channels: ['l', 'c', 'h', 'alpha'],
			ranges: { l: [0, 100], c: [0, 131.008], h: [0, 360] },
			interpolate: {
				h: { use: k, fixup: er },
				c: k,
				l: k,
				alpha: { use: k, fixup: z }
			},
			difference: { h: br },
			average: { h: Mr }
		},
		qa = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0],
		ja = Math.PI / 180,
		Sa = 180 / Math.PI,
		Ea = qa[3] * qa[4],
		Oa = qa[1] * qa[4],
		Aa = qa[1] * qa[2] - qa[0] * qa[3],
		Ca = {
			mode: 'cubehelix',
			channels: ['h', 's', 'l', 'alpha'],
			ranges: { h: [0, 360], s: [0, 4.6143] },
			input: {
				rgb: function (r) {
					var a = r.r,
						n = r.g,
						t = r.b,
						e = r.alpha,
						o = (Aa * t + a * Ea - n * Oa) / (Aa + Ea - Oa),
						i = t - o,
						u = (qa[4] * (n - o) - qa[2] * i) / qa[3],
						h = {
							mode: 'cubehelix',
							l: o,
							s:
								0 === o || 1 === o
									? void 0
									: Math.sqrt(i * i + u * u) /
									  (qa[4] * o * (1 - o))
						};
					return (
						h.s && (h.h = Math.atan2(u, i) * Sa - 120),
						void 0 !== e && (h.alpha = e),
						h
					);
				}
			},
			output: {
				rgb: function (r) {
					var a = r.h,
						n = r.s,
						t = r.l,
						e = r.alpha,
						o = { mode: 'rgb' };
					a = (void 0 === a ? 0 : a + 120) * ja;
					var i = void 0 === n ? 0 : n * t * (1 - t),
						u = Math.cos(a),
						h = Math.sin(a);
					return (
						(o.r = t + i * (qa[0] * u + qa[1] * h)),
						(o.g = t + i * (qa[2] * u + qa[3] * h)),
						(o.b = t + i * (qa[4] * u + qa[5] * h)),
						void 0 !== e && (o.alpha = e),
						o
					);
				}
			},
			interpolate: {
				h: { use: k, fixup: er },
				s: k,
				l: k,
				alpha: { use: k, fixup: z }
			},
			difference: { h: dr },
			average: { h: Mr }
		},
		Ha = function (r) {
			var a = r.l,
				n = r.a,
				t = r.b,
				e = r.alpha,
				o = Math.sqrt(n * n + t * t),
				i = { mode: 'dlch', l: a, c: o };
			return (
				o && (i.h = ar((180 * Math.atan2(t, n)) / Math.PI)),
				void 0 !== e && (i.alpha = e),
				i
			);
		},
		Ra = (26 / 180) * Math.PI,
		Na = Math.cos(Ra),
		$a = Math.sin(Ra),
		Da = 100 / Math.log(1.39),
		La = function (r) {
			var a = r.l,
				n = r.c,
				t = r.h,
				e = r.alpha,
				o = { mode: 'lab65', l: (Math.exp((1 * a) / Da) - 1) / 0.0039 };
			if (void 0 === t) o.a = o.b = 0;
			else {
				var i = (Math.exp(0.0435 * n * 1 * 1) - 1) / 0.075,
					u = i * Math.cos((t / 180) * Math.PI - Ra),
					h = i * Math.sin((t / 180) * Math.PI - Ra);
				(o.a = u * Na - (h / 0.83) * $a),
					(o.b = u * $a + (h / 0.83) * Na);
			}
			return void 0 !== e && (o.alpha = e), o;
		},
		Ta = function (r) {
			return La(Ha(r));
		},
		Ba = function (r) {
			var a = r.l,
				n = r.a,
				t = r.b,
				e = r.alpha,
				o = n * Na + t * $a,
				i = 0.83 * (t * Na - n * $a),
				u = Math.sqrt(o * o + i * i),
				h = {
					mode: 'dlch',
					l: (Da / 1) * Math.log(1 + 0.0039 * a),
					c: Math.log(1 + 0.075 * u) / 0.0435
				};
			return (
				h.c && (h.h = ar(((Math.atan2(i, o) + Ra) / Math.PI) * 180)),
				void 0 !== e && (h.alpha = e),
				h
			);
		},
		Fa = function (r) {
			var a = r.l,
				n = r.c,
				t = r.h,
				e = r.alpha,
				o = {
					mode: 'dlab',
					l: a,
					a: 0 === n ? 0 : n * Math.cos((t / 180) * Math.PI),
					b: 0 === n ? 0 : n * Math.sin((t / 180) * Math.PI)
				};
			return void 0 !== e && (o.alpha = e), o;
		},
		Ga = function (r) {
			return Fa(Ba(r));
		},
		Wa = {
			mode: 'dlab',
			output: {
				lab65: Ta,
				rgb: function (r) {
					return ea(Ta(r));
				}
			},
			input: {
				lab65: Ga,
				rgb: function (r) {
					return Ga(ua(r));
				}
			},
			channels: ['l', 'a', 'b', 'alpha'],
			ranges: { l: [0, 100], a: [-40.09, 45.5], b: [-40.47, 44.344] },
			interpolate: { l: k, a: k, b: k, alpha: { use: k, fixup: z } }
		},
		_a = {
			mode: 'dlch',
			output: {
				lab65: La,
				dlab: Fa,
				rgb: function (r) {
					return ea(La(r));
				}
			},
			input: {
				lab65: Ba,
				dlab: Ha,
				rgb: function (r) {
					return Ba(ua(r));
				}
			},
			channels: ['l', 'c', 'h', 'alpha'],
			ranges: { l: [0, 100], c: [0, 51.484], h: [0, 360] },
			interpolate: {
				l: k,
				c: k,
				h: { use: k, fixup: er },
				alpha: { use: k, fixup: z }
			},
			difference: { h: br },
			average: { h: Mr }
		},
		Ka = {
			mode: 'xyz',
			alias: ['xyz-d50'],
			output: { rgb: _, lab: Ur },
			input: { rgb: K, lab: Kr },
			channels: ['x', 'y', 'z', 'alpha'],
			ranges: { x: [0, 0.962], y: [0, 0.997], z: [0, 0.823] },
			interpolate: { x: k, y: k, z: k, alpha: { use: k, fixup: z } }
		},
		Ja = {
			mode: 'xyz65',
			alias: ['xyz-d65'],
			output: {
				rgb: N,
				xyz: function (r) {
					var a = r.x,
						n = r.y,
						t = r.z,
						e = r.alpha,
						o = {
							mode: 'xyz',
							x: 1.0478112 * a + 0.0228866 * n - 0.050127 * t,
							y: 0.0295424 * a + 0.9904844 * n - 0.0170491 * t,
							z: -0.0092345 * a + 0.0150436 * n + 0.7521316 * t
						};
					return void 0 !== e && (o.alpha = e), o;
				}
			},
			input: {
				rgb: R,
				xyz: function (r) {
					var a = r.x,
						n = r.y,
						t = r.z,
						e = r.alpha,
						o = {
							mode: 'xyz65',
							x: 0.9555766 * a - 0.0230393 * n + 0.0631636 * t,
							y: -0.0282895 * a + 1.0099416 * n + 0.0210077 * t,
							z: 0.0122982 * a - 0.020483 * n + 1.3299098 * t
						};
					return void 0 !== e && (o.alpha = e), o;
				}
			},
			ranges: { x: [0, 0.946], y: [0, 0.995], z: [0, 1.083] },
			channels: ['x', 'y', 'z', 'alpha'],
			interpolate: { x: k, y: k, z: k, alpha: { use: k, fixup: z } }
		},
		Qa = {
			mode: 'yiq',
			output: {
				rgb: function (r) {
					var a = r.y,
						n = r.i,
						t = r.q,
						e = r.alpha;
					return S({
						r: a + 0.95608445 * n + 0.6208885 * t,
						g: a - 0.27137664 * n - 0.6486059 * t,
						b: a - 1.10561724 * n + 1.70250126 * t,
						alpha: e
					});
				}
			},
			input: {
				rgb: function (r) {
					var a = q(r),
						n = a.r,
						t = a.g,
						e = a.b,
						o = a.alpha,
						i = {
							mode: 'yiq',
							y: 0.29889531 * n + 0.58662247 * t + 0.11448223 * e,
							i: 0.59597799 * n - 0.2741761 * t - 0.32180189 * e,
							q: 0.21147017 * n - 0.52261711 * t + 0.31114694 * e
						};
					return void 0 !== o && (i.alpha = o), i;
				}
			},
			channels: ['y', 'i', 'q', 'alpha'],
			ranges: { i: [-0.593, 0.593], q: [-0.52, 0.52] },
			interpolate: { y: k, i: k, q: k, alpha: { use: k, fixup: z } }
		},
		Ua = function (r) {
			var a = r.l,
				n = r.a,
				t = r.b,
				e = r.alpha,
				o = Math.pow(a + 0.3963377774 * n + 0.2158037573 * t, 3),
				i = Math.pow(a - 0.1055613458 * n - 0.0638541728 * t, 3),
				u = Math.pow(a - 0.0894841775 * n - 1.291485548 * t, 3),
				h = {
					mode: 'lrgb',
					r: 4.0767416621 * o - 3.3077115913 * i + 0.2309699292 * u,
					g: -1.2684380046 * o + 2.6097574011 * i - 0.3413193965 * u,
					b: -0.0041960863 * o - 0.7034186147 * i + 1.707614701 * u
				};
			return void 0 !== e && (h.alpha = e), h;
		},
		Va = function (r) {
			var a = r.r,
				n = r.g,
				t = r.b,
				e = r.alpha,
				o = Math.cbrt(
					0.4122214708 * a + 0.5363325363 * n + 0.0514459929 * t
				),
				i = Math.cbrt(
					0.2119034982 * a + 0.6806995451 * n + 0.1073969566 * t
				),
				u = Math.cbrt(
					0.0883024619 * a + 0.2817188376 * n + 0.6299787005 * t
				),
				h = {
					mode: 'oklab',
					l: 0.2104542553 * o + 0.793617785 * i - 0.0040720468 * u,
					a: 1.9779984951 * o - 2.428592205 * i + 0.4505937099 * u,
					b: 0.0259040371 * o + 0.7827717662 * i - 0.808675766 * u
				};
			return void 0 !== e && (h.alpha = e), h;
		},
		Xa = function (r) {
			var a = Va(q(r));
			return r.r === r.b && r.b === r.g && (a.a = a.b = 0), a;
		},
		Ya = function (r) {
			return S(Ua(r));
		},
		Za = Object.assign({}, Xr, {
			mode: 'oklab',
			alias: [],
			output: { lrgb: Ua, rgb: Ya },
			input: { lrgb: Va, rgb: Xa },
			ranges: { l: [0, 0.999], a: [-0.233, 0.276], b: [-0.311, 0.198] },
			parsers: []
		}),
		rn = Object.assign({}, fa, {
			mode: 'oklch',
			alias: [],
			output: {
				oklab: function (r) {
					return ca(r, 'oklab');
				},
				rgb: function (r) {
					return Ya(ca(r, 'oklab'));
				}
			},
			input: {
				rgb: function (r) {
					return la(Xa(r), 'oklch');
				},
				oklab: function (r) {
					return la(r, 'oklch');
				}
			},
			parsers: [],
			ranges: { l: [0, 0.999], c: [0, 0.322], h: [0, 360] }
		}),
		an = function (r) {
			return (
				void 0 === r && (r = 4),
				function (a) {
					return 'number' == typeof a
						? (function (r, a) {
								return (
									Math.round(r * (a = Math.pow(10, a))) / a
								);
						  })(a, r)
						: a;
				}
			);
		},
		nn = sr('rgb'),
		tn = sr('hsl'),
		en = an(2),
		on = function (r) {
			return Math.max(0, Math.min(1, r));
		},
		un = function (r) {
			return Math.round(255 * on(r));
		},
		hn = function (r) {
			var a = nn(r);
			if (void 0 !== a)
				return (
					'#' +
					((1 << 24) | (un(a.r) << 16) | (un(a.g) << 8) | un(a.b))
						.toString(16)
						.slice(1)
				);
		},
		ln = function (r) {
			var a = nn(r);
			if (void 0 !== a) {
				var n = un(a.r),
					t = un(a.g),
					e = un(a.b);
				return void 0 === a.alpha || 1 === a.alpha
					? 'rgb(' + n + ', ' + t + ', ' + e + ')'
					: 'rgba(' +
							n +
							', ' +
							t +
							', ' +
							e +
							', ' +
							en(on(a.alpha)) +
							')';
			}
		},
		cn = function (r) {
			return (
				void 0 === r && (r = 0.5),
				function (a) {
					return r <= 0
						? 1
						: r >= 1
						? 0
						: Math.pow(a, Math.log(0.5) / Math.log(r));
				}
			);
		},
		fn = function (r, a, n) {
			void 0 === a && (a = 'rgb'), void 0 === n && (n = !1);
			var t = a ? cr(a).channels : null,
				e = a ? sr(a) : pr;
			return function (o) {
				var i = e(o),
					u = (t || cr(o.mode).channels).reduce(
						function (n, t) {
							var e = r(i[t], t, i, a);
							return void 0 === e || isNaN(e) || (n[t] = e), n;
						},
						{ mode: a }
					);
				if (!n) return u;
				var h = pr(o);
				return h && h.mode !== u.mode ? sr(h.mode)(u) : u;
			};
		},
		pn = function (r, a, n) {
			return 'alpha' !== a
				? (r || 0) * (void 0 !== n.alpha ? n.alpha : 1)
				: r;
		},
		sn = function (r, a, n) {
			return 'alpha' !== a && 0 !== n.alpha
				? (r || 0) / (void 0 !== n.alpha ? n.alpha : 1)
				: r;
		},
		dn = function (r, a) {
			return (
				void 0 === r && (r = 1),
				void 0 === a && (a = 0),
				function (n, t) {
					return 'alpha' !== t ? n * r + a : n;
				}
			);
		},
		vn = function (r) {
			return 'function' == typeof r;
		},
		bn = function (r) {
			return r && 'object' == typeof r;
		},
		gn = function (r) {
			return 'number' == typeof r;
		},
		Mn = function (r, a, n, t) {
			void 0 === a && (a = 'rgb');
			var e = cr(a),
				o = sr(a),
				i = [],
				u = [],
				h = {};
			r.forEach(function (r) {
				Array.isArray(r)
					? (i.push(o(r[0])), u.push(r[1]))
					: gn(r) || vn(r)
					? (h[u.length] = r)
					: (i.push(o(r)), u.push(void 0));
			}),
				(function (r) {
					void 0 === r[0] && (r[0] = 0),
						void 0 === r[r.length - 1] && (r[r.length - 1] = 1);
					for (var a, n, t, e, o = 1; o < r.length; ) {
						if (void 0 === r[o]) {
							for (n = o, t = r[o - 1], a = o; void 0 === r[a]; )
								a++;
							for (e = (r[a] - t) / (a - o + 1); o < a; )
								(r[o] = t + (o + 1 - n) * e), o++;
						} else r[o] < r[o - 1] && (r[o] = r[o - 1]);
						o++;
					}
				})(u);
			var l = e.channels.reduce(function (r, a) {
				var t;
				return (
					(t =
						bn(n) && bn(n[a]) && n[a].fixup
							? n[a].fixup
							: bn(e.interpolate[a]) && e.interpolate[a].fixup
							? e.interpolate[a].fixup
							: function (r) {
									return r;
							  }),
					(r[a] = t(
						i.map(function (r) {
							return r[a];
						})
					)),
					r
				);
			}, {});
			if (t) {
				var c = i.map(function (r, n) {
					return e.channels.reduce(
						function (r, a) {
							return (r[a] = l[a][n]), r;
						},
						{ mode: a }
					);
				});
				l = e.channels.reduce(function (r, n) {
					return (
						(r[n] = c.map(function (r) {
							var e = t(r[n], n, r, a);
							return isNaN(e) ? void 0 : e;
						})),
						r
					);
				}, {});
			}
			var f = e.channels.reduce(function (r, a) {
					var t;
					return (
						vn(n)
							? (t = n)
							: bn(n) && vn(n[a])
							? (t = n[a])
							: bn(n) && bn(n[a]) && n[a].use
							? (t = n[a].use)
							: vn(e.interpolate[a])
							? (t = e.interpolate[a])
							: bn(e.interpolate[a]) &&
							  (t = e.interpolate[a].use),
						(r[a] = t(l[a])),
						r
					);
				}, {}),
				p = i.length - 1;
			return function (r) {
				if ((r = Math.min(Math.max(0, r), 1)) <= u[0]) return i[0];
				if (r > u[p]) return i[p];
				for (var n = 0; u[n] < r; ) n++;
				var t = u[n - 1],
					o = u[n] - t,
					l = (r - t) / o,
					c = h[n] || h[0];
				void 0 !== c && (gn(c) && (c = cn((c - t) / o)), (l = c(l)));
				var s = (n - 1 + l) / p;
				return e.channels.reduce(
					function (r, a) {
						var n = f[a](s);
						return void 0 !== n && (r[a] = n), r;
					},
					{ mode: a }
				);
			};
		},
		mn = function (r, a) {
			return function (n, t, e) {
				void 0 === t && (t = 'rgb');
				var o = a ? fn(a, t) : void 0,
					i = Mn(n, t, e, r);
				return o
					? function (r) {
							return o(i(r));
					  }
					: i;
			};
		},
		yn = mn(pn, sn),
		xn = function (r) {
			return (1 - Math.cos(r * Math.PI)) / 2;
		},
		wn = function (r, a, n, t, e) {
			var o = e * e,
				i = o * e;
			return (
				((1 - 3 * e + 3 * o - i) * r +
					(4 - 6 * o + 3 * i) * a +
					(1 + 3 * e + 3 * o - 3 * i) * n +
					i * t) /
				6
			);
		},
		kn = function (r) {
			return function (a) {
				var n = r.length - 1,
					t = 1 === a ? n - 1 : Math.floor(a * n);
				return wn(
					t > 0 ? r[t - 1] : 2 * r[t] - r[t + 1],
					r[t],
					r[t + 1],
					t < n - 1 ? r[t + 2] : 2 * r[t + 1] - r[t],
					(a - t / n) * n
				);
			};
		},
		zn = function (r) {
			return function (a) {
				var n = r.length - 1,
					t = 1 === a ? n - 1 : Math.floor(a * n);
				return wn(
					r[(t - 1 + r.length) % r.length],
					r[t],
					r[(t + 1) % r.length],
					r[(t + 2) % r.length],
					(a - t / n) * n
				);
			};
		},
		Pn = function (r) {
			var a,
				n = r.length - 1,
				t = new Array(n),
				e = new Array(n),
				o = new Array(n);
			for (t[1] = 1 / 4, e[1] = (6 * r[1] - r[0]) / 4, a = 2; a < n; ++a)
				(t[a] = 1 / (4 - t[a - 1])),
					(e[a] =
						(6 * r[a] - (a == n - 1 ? r[n] : 0) - e[a - 1]) * t[a]);
			for (
				o[0] = r[0],
					o[n] = r[n],
					n - 1 > 0 && (o[n - 1] = e[n - 1]),
					a = n - 2;
				a > 0;
				--a
			)
				o[a] = e[a] - t[a] * o[a + 1];
			return o;
		},
		In = function (r) {
			return kn(Pn(r));
		},
		qn = function (r) {
			return zn(Pn(r));
		},
		jn = Math.sign,
		Sn = Math.min,
		En = Math.abs,
		On = function (r) {
			for (
				var a = r.length - 1, n = [], t = [], e = [], o = 0;
				o < a;
				o++
			)
				n.push((r[o + 1] - r[o]) * a),
					t.push(o > 0 ? 0.5 * (r[o + 1] - r[o - 1]) * a : void 0),
					e.push(
						o > 0
							? (jn(n[o - 1]) + jn(n[o])) *
									Sn(En(n[o - 1]), En(n[o]), 0.5 * En(t[o]))
							: void 0
					);
			return [n, t, e];
		},
		An = function (r, a, n) {
			var t = r.length - 1,
				e = t * t;
			return function (o) {
				var i;
				1 === o ? ((i = t - 1), (o = 1)) : (i = Math.floor(o * t));
				var u = o - i / t,
					h = u * u,
					l = h * u;
				return (
					(a[i] + a[i + 1] - 2 * n[i]) * e * l +
					(3 * n[i] - 2 * a[i] - a[i + 1]) * t * h +
					a[i] * u +
					r[i]
				);
			};
		},
		Cn = function (r) {
			if (r.length < 3) return k(r);
			var a = r.length - 1,
				n = On(r),
				t = n[0],
				e = n[2];
			return (e[0] = t[0]), (e[a] = t[a - 1]), An(r, e, t);
		},
		Hn = function (r) {
			var a = r.length - 1,
				n = On(r),
				t = n[0],
				e = n[1],
				o = n[2];
			(e[0] = 0.5 * (r[1] - r[a]) * a),
				(e[a] = 0.5 * (r[0] - r[a - 1]) * a);
			var i = (r[0] - r[a]) * a,
				u = i;
			return (
				(o[0] =
					(jn(i) + jn(t[0])) * Sn(En(i), En(t[0]), 0.5 * En(e[0]))),
				(o[a] =
					(jn(t[a - 1]) + jn(u)) *
					Sn(En(t[a - 1]), En(u), 0.5 * En(e[a]))),
				An(r, o, t)
			);
		},
		Rn = sr('rgb'),
		Nn = function (r) {
			var a = Rn(r);
			return (
				void 0 !== a &&
				a.r >= 0 &&
				a.r <= 1 &&
				a.g >= 0 &&
				a.g <= 1 &&
				a.b >= 0 &&
				a.b <= 1
			);
		},
		$n = sr('rgb'),
		Dn = function (r) {
			var a = $n(r);
			return (
				(a.r = Math.max(0, Math.min(a.r, 1))),
				(a.g = Math.max(0, Math.min(a.g, 1))),
				(a.b = Math.max(0, Math.min(a.b, 1))),
				a
			);
		},
		Ln = function (r) {
			return void 0 === (r = pr(r)) || Nn(r) ? r : sr(r.mode)(Dn(r));
		},
		Tn = function (r, a) {
			if ((void 0 === a && (a = 'lch'), void 0 === (r = pr(r)) || Nn(r)))
				return r;
			var n = sr(r.mode);
			r = sr(a)(r);
			var t = Object.assign({}, r, { c: 0 });
			if (!Nn(t)) return n(Dn(t));
			for (
				var e,
					o = 0,
					i = r.c,
					u = cr(a).ranges.c,
					h = (u[1] - u[0]) / Math.pow(2, 13);
				i - o > h;

			)
				(t.c = o + 0.5 * (i - o)),
					Nn(t) ? ((e = t.c), (o = t.c)) : (i = t.c);
			return n(Nn(t) ? t : Object.assign({}, t, { c: e }));
		},
		Bn = {
			normal: function (r, a) {
				return a;
			},
			multiply: function (r, a) {
				return r * a;
			},
			screen: function (r, a) {
				return r + a - r * a;
			},
			'hard-light': function (r, a) {
				return a < 0.5 ? 2 * r * a : 2 * a * (1 - r) - 1;
			},
			overlay: function (r, a) {
				return r < 0.5 ? 2 * a * r : 2 * r * (1 - a) - 1;
			},
			darken: function (r, a) {
				return Math.min(r, a);
			},
			lighten: function (r, a) {
				return Math.max(r, a);
			},
			'color-dodge': function (r, a) {
				return 0 === r ? 0 : 1 === a ? 1 : Math.min(1, r / (1 - a));
			},
			'color-burn': function (r, a) {
				return 1 === r ? 1 : 0 === a ? 0 : 1 - Math.min(1, (1 - r) / a);
			},
			'soft-light': function (r, a) {
				return a < 0.5
					? r - (1 - 2 * a) * r * (1 - r)
					: r +
							(2 * a - 1) *
								((r < 0.25
									? ((16 * r - 12) * r + 4) * r
									: Math.sqrt(r)) -
									r);
			},
			difference: function (r, a) {
				return Math.abs(r - a);
			},
			exclusion: function (r, a) {
				return r + a - 2 * r * a;
			}
		};
	function Fn(r) {
		var a = sr('lrgb')(r);
		return 0.2126 * a.r + 0.7152 * a.g + 0.0722 * a.b;
	}
	var Gn = sr('rgb'),
		Wn = [
			[1, 0, -0, 0, 1, 0, -0, -0, 1],
			[
				0.856167, 0.182038, -0.038205, 0.029342, 0.955115, 0.015544,
				-0.00288, -0.001563, 1.004443
			],
			[
				0.734766, 0.334872, -0.069637, 0.05184, 0.919198, 0.028963,
				-0.004928, -0.004209, 1.009137
			],
			[
				0.630323, 0.465641, -0.095964, 0.069181, 0.890046, 0.040773,
				-0.006308, -0.007724, 1.014032
			],
			[
				0.539009, 0.579343, -0.118352, 0.082546, 0.866121, 0.051332,
				-0.007136, -0.011959, 1.019095
			],
			[
				0.458064, 0.679578, -0.137642, 0.092785, 0.846313, 0.060902,
				-0.007494, -0.016807, 1.024301
			],
			[
				0.38545, 0.769005, -0.154455, 0.100526, 0.829802, 0.069673,
				-0.007442, -0.02219, 1.029632
			],
			[
				0.319627, 0.849633, -0.169261, 0.106241, 0.815969, 0.07779,
				-0.007025, -0.028051, 1.035076
			],
			[
				0.259411, 0.923008, -0.18242, 0.110296, 0.80434, 0.085364,
				-0.006276, -0.034346, 1.040622
			],
			[
				0.203876, 0.990338, -0.194214, 0.112975, 0.794542, 0.092483,
				-0.005222, -0.041043, 1.046265
			],
			[
				0.152286, 1.052583, -0.204868, 0.114503, 0.786281, 0.099216,
				-0.003882, -0.048116, 1.051998
			]
		],
		_n = [
			[1, 0, -0, 0, 1, 0, -0, -0, 1],
			[
				0.866435, 0.177704, -0.044139, 0.049567, 0.939063, 0.01137,
				-0.003453, 0.007233, 0.99622
			],
			[
				0.760729, 0.319078, -0.079807, 0.090568, 0.889315, 0.020117,
				-0.006027, 0.013325, 0.992702
			],
			[
				0.675425, 0.43385, -0.109275, 0.125303, 0.847755, 0.026942,
				-0.00795, 0.018572, 0.989378
			],
			[
				0.605511, 0.52856, -0.134071, 0.155318, 0.812366, 0.032316,
				-0.009376, 0.023176, 0.9862
			],
			[
				0.547494, 0.607765, -0.155259, 0.181692, 0.781742, 0.036566,
				-0.01041, 0.027275, 0.983136
			],
			[
				0.498864, 0.674741, -0.173604, 0.205199, 0.754872, 0.039929,
				-0.011131, 0.030969, 0.980162
			],
			[
				0.457771, 0.731899, -0.18967, 0.226409, 0.731012, 0.042579,
				-0.011595, 0.034333, 0.977261
			],
			[
				0.422823, 0.781057, -0.203881, 0.245752, 0.709602, 0.044646,
				-0.011843, 0.037423, 0.974421
			],
			[
				0.392952, 0.82361, -0.216562, 0.263559, 0.69021, 0.046232,
				-0.01191, 0.040281, 0.97163
			],
			[
				0.367322, 0.860646, -0.227968, 0.280085, 0.672501, 0.047413,
				-0.01182, 0.04294, 0.968881
			]
		],
		Kn = [
			[1, 0, -0, 0, 1, 0, -0, -0, 1],
			[
				0.92667, 0.092514, -0.019184, 0.021191, 0.964503, 0.014306,
				0.008437, 0.054813, 0.93675
			],
			[
				0.89572, 0.13333, -0.02905, 0.029997, 0.9454, 0.024603,
				0.013027, 0.104707, 0.882266
			],
			[
				0.905871, 0.127791, -0.033662, 0.026856, 0.941251, 0.031893,
				0.01341, 0.148296, 0.838294
			],
			[
				0.948035, 0.08949, -0.037526, 0.014364, 0.946792, 0.038844,
				0.010853, 0.193991, 0.795156
			],
			[
				1.017277, 0.027029, -0.044306, -0.006113, 0.958479, 0.047634,
				0.006379, 0.248708, 0.744913
			],
			[
				1.104996, -0.046633, -0.058363, -0.032137, 0.971635, 0.060503,
				0.001336, 0.317922, 0.680742
			],
			[
				1.193214, -0.109812, -0.083402, -0.058496, 0.97941, 0.079086,
				-0.002346, 0.403492, 0.598854
			],
			[
				1.257728, -0.139648, -0.118081, -0.078003, 0.975409, 0.102594,
				-0.003316, 0.501214, 0.502102
			],
			[
				1.278864, -0.125333, -0.153531, -0.084748, 0.957674, 0.127074,
				-989e-6, 0.601151, 0.399838
			],
			[
				1.255528, -0.076749, -0.178779, -0.078411, 0.930809, 0.147602,
				0.004733, 0.691367, 0.3039
			]
		],
		Jn = function (r, a) {
			var n = Math.max(0, Math.min(1, a)),
				t = Math.round(n / 0.1),
				e = Math.round(n % 0.1),
				o = r[t];
			if (e > 0 && t < r.length - 1) {
				var i = r[t + 1];
				o = o.map(function (r, a) {
					return y(o[a], i[a], e);
				});
			}
			return function (r) {
				var a = pr(r);
				if (void 0 !== a) {
					var n = Gn(a),
						t = n.r,
						e = n.g,
						i = n.b,
						u = {
							mode: 'rgb',
							r: o[0] * t + o[1] * e + o[2] * i,
							g: o[3] * t + o[4] * e + o[5] * i,
							b: o[6] * t + o[7] * e + o[8] * i
						};
					return (
						void 0 !== a.alpha && (u.alpha = a.alpha), sr(a.mode)(u)
					);
				}
			};
		},
		Qn = function (r) {
			return void 0 === r && (r = 1), Jn(Wn, r);
		},
		Un = function (r) {
			return void 0 === r && (r = 1), Jn(_n, r);
		},
		Vn = function (r) {
			return void 0 === r && (r = 1), Jn(Kn, r);
		},
		Xn = function (r) {
			return Math.max(r, 0);
		},
		Yn = function (r) {
			return Math.max(Math.min(r, 1), 0);
		},
		Zn = function (r, a, n) {
			void 0 === n && (n = !1);
			var t = sr(a),
				e = cr(a).channels;
			return function (o) {
				var i = t(o);
				if (i) {
					for (
						var u, h = { mode: a }, l = e.length, c = 0;
						c < r.length;
						c++
					)
						void 0 !== i[(u = e[Math.floor(c / l)])] &&
							(h[u] = (h[u] || 0) + r[c] * (i[e[c % l]] || 0));
					if (!n) return h;
					var f = pr(o);
					return f && h.mode !== f.mode ? sr(f.mode)(h) : h;
				}
			};
		};
	lr($),
		lr(Ca),
		lr(Wa),
		lr(_a),
		lr(Pr),
		lr(xr),
		lr(zr),
		lr(qr),
		lr($r),
		lr(Tr),
		lr(Xr),
		lr(ha),
		lr(fa),
		lr(pa),
		lr(Ia),
		lr(E),
		lr(ka),
		lr(T),
		lr(J),
		lr(rr),
		lr(P),
		lr(Ja),
		lr(Ka),
		lr(Qa),
		lr(Za),
		lr(rn);
	var rt = sr('a98'),
		at = sr('cubehelix'),
		nt = sr('dlab'),
		tt = sr('dlch'),
		et = sr('hsi'),
		ot = sr('hsl'),
		it = sr('hsv'),
		ut = sr('hwb'),
		ht = sr('jab'),
		lt = sr('jch'),
		ct = sr('lab'),
		ft = sr('lab65'),
		pt = sr('lch'),
		st = sr('lch65'),
		dt = sr('lchuv'),
		vt = sr('lrgb'),
		bt = sr('luv'),
		gt = sr('p3'),
		Mt = sr('prophoto'),
		mt = sr('rec2020'),
		yt = sr('rgb'),
		xt = sr('xyz'),
		wt = sr('xyz65'),
		kt = sr('yiq'),
		zt = sr('oklab'),
		Pt = sr('oklch');
	(r.a98 = rt),
		(r.average = function (r, a, n) {
			void 0 === a && (a = 'rgb');
			var t = cr(a),
				e = r.map(sr(a));
			return t.channels.reduce(
				function (r, a) {
					var o,
						i = e
							.map(function (r) {
								return r[a];
							})
							.filter(function (r) {
								return void 0 !== r;
							});
					i.length &&
						((o = yr(n)
							? n
							: n && yr(n[a])
							? n[a]
							: t.average && yr(t.average[a])
							? t.average[a]
							: mr),
						(r[a] = o(i, a)));
					return r;
				},
				{ mode: a }
			);
		}),
		(r.averageAngle = Mr),
		(r.averageNumber = mr),
		(r.blend = function (r, a, n) {
			void 0 === a && (a = 'normal'), void 0 === n && (n = 'rgb');
			var t = 'function' == typeof a ? a : Bn[a],
				e = sr(n),
				o = cr(n).channels;
			return r
				.map(function (r) {
					var a = e(r);
					return void 0 === a.alpha && (a.alpha = 1), a;
				})
				.reduce(function (r, a) {
					if (void 0 === r) return a;
					var e = a.alpha + r.alpha * (1 - a.alpha);
					return o.reduce(
						function (n, o) {
							return (
								'alpha' !== o &&
									(0 === e
										? (n[o] = 0)
										: ((n[o] =
												a.alpha * (1 - r.alpha) * a[o] +
												a.alpha *
													r.alpha *
													t(r[o], a[o]) +
												(1 - a.alpha) * r.alpha * r[o]),
										  (n[o] = Math.max(
												0,
												Math.min(1, n[o] / e)
										  )))),
								n
							);
						},
						{ mode: n, alpha: e }
					);
				});
		}),
		(r.clamp = function (r) {
			switch ((void 0 === r && (r = 'rgb'), r)) {
				case 'rgb':
					return Ln;
				case 'lch':
					return Tn;
			}
		}),
		(r.clampChroma = Tn),
		(r.clampRgb = Ln),
		(r.colorsNamed = n),
		(r.converter = sr),
		(r.cubehelix = at),
		(r.deficiencyDeuter = Un),
		(r.deficiencyProt = Qn),
		(r.deficiencyTrit = Vn),
		(r.defineMode = lr),
		(r.differenceCie76 = function () {
			return gr('lab65');
		}),
		(r.differenceCie94 = function (r, a, n) {
			void 0 === r && (r = 1),
				void 0 === a && (a = 0.045),
				void 0 === n && (n = 0.015);
			var t = sr('lab65');
			return function (e, o) {
				var i = t(e),
					u = t(o),
					h = i.l,
					l = i.a,
					c = i.b,
					f = Math.sqrt(l * l + c * c),
					p = u.l,
					s = u.a,
					d = u.b,
					v = Math.sqrt(s * s + d * d),
					b = Math.pow(h - p, 2),
					g = Math.pow(f - v, 2),
					M = Math.pow(l - s, 2) + Math.pow(c - d, 2) - g;
				return Math.sqrt(
					b / Math.pow(r, 2) +
						g / Math.pow(1 + a * f, 2) +
						M / Math.pow(1 + n * f, 2)
				);
			};
		}),
		(r.differenceCiede2000 = function (r, a, n) {
			void 0 === r && (r = 1),
				void 0 === a && (a = 1),
				void 0 === n && (n = 1);
			var t = sr('lab65');
			return function (e, o) {
				var i = t(e),
					u = t(o),
					h = i.l,
					l = i.a,
					c = i.b,
					f = Math.sqrt(l * l + c * c),
					p = u.l,
					s = u.a,
					d = u.b,
					v = (f + Math.sqrt(s * s + d * d)) / 2,
					b =
						0.5 *
						(1 -
							Math.sqrt(
								Math.pow(v, 7) /
									(Math.pow(v, 7) + Math.pow(25, 7))
							)),
					g = l * (1 + b),
					M = s * (1 + b),
					m = Math.sqrt(g * g + c * c),
					y = Math.sqrt(M * M + d * d),
					x = Math.abs(g) + Math.abs(c) === 0 ? 0 : Math.atan2(c, g);
				x += 2 * (x < 0) * Math.PI;
				var w = Math.abs(M) + Math.abs(d) === 0 ? 0 : Math.atan2(d, M);
				w += 2 * (w < 0) * Math.PI;
				var k = p - h,
					z = y - m,
					P = m * y == 0 ? 0 : w - x;
				(P -= 2 * (P > Math.PI) * Math.PI),
					(P += 2 * (P < -Math.PI) * Math.PI);
				var I,
					q = 2 * Math.sqrt(m * y) * Math.sin(P / 2),
					j = (h + p) / 2,
					S = (m + y) / 2;
				m * y == 0
					? (I = x + w)
					: ((I = (x + w) / 2),
					  (I -= (Math.abs(x - w) > Math.PI) * Math.PI),
					  (I += 2 * (I < 0) * Math.PI));
				var E = Math.pow(j - 50, 2),
					O =
						1 -
						0.17 * Math.cos(I - Math.PI / 6) +
						0.24 * Math.cos(2 * I) +
						0.32 * Math.cos(3 * I + Math.PI / 30) -
						0.2 * Math.cos(4 * I - (63 * Math.PI) / 180),
					A = 1 + (0.015 * E) / Math.sqrt(20 + E),
					C = 1 + 0.045 * S,
					H = 1 + 0.015 * S * O,
					R =
						((30 * Math.PI) / 180) *
						Math.exp(
							-1 * Math.pow(((180 / Math.PI) * I - 275) / 25, 2)
						),
					N =
						2 *
						Math.sqrt(
							Math.pow(S, 7) / (Math.pow(S, 7) + Math.pow(25, 7))
						),
					$ = -1 * Math.sin(2 * R) * N;
				return Math.sqrt(
					Math.pow(k / (r * A), 2) +
						Math.pow(z / (a * C), 2) +
						Math.pow(q / (n * H), 2) +
						((($ * z) / (a * C)) * q) / (n * H)
				);
			};
		}),
		(r.differenceCmc = function (r, a) {
			void 0 === r && (r = 1), void 0 === a && (a = 1);
			var n = sr('lab65');
			return function (t, e) {
				var o = n(t),
					i = o.l,
					u = o.a,
					h = o.b,
					l = Math.sqrt(u * u + h * h),
					c = Math.atan2(h, u);
				c += 2 * Math.PI * (c < 0);
				var f = n(e),
					p = f.l,
					s = f.a,
					d = f.b,
					v = Math.sqrt(s * s + d * d),
					b = Math.pow(i - p, 2),
					g = Math.pow(l - v, 2),
					M = Math.pow(u - s, 2) + Math.pow(h - d, 2) - g,
					m = Math.sqrt(Math.pow(l, 4) / (Math.pow(l, 4) + 1900)),
					y = i < 16 ? 0.511 : (0.040975 * i) / (1 + 0.01765 * i),
					x = (0.0638 * l) / (1 + 0.0131 * l) + 0.638,
					w =
						x *
						(m *
							(c >= (164 / 180) * Math.PI &&
							c <= (345 / 180) * Math.PI
								? 0.56 +
								  Math.abs(
										0.2 *
											Math.cos(c + (168 / 180) * Math.PI)
								  )
								: 0.36 +
								  Math.abs(
										0.4 * Math.cos(c + (35 / 180) * Math.PI)
								  )) +
							1 -
							m);
				return Math.sqrt(
					b / Math.pow(r * y, 2) +
						g / Math.pow(a * x, 2) +
						M / Math.pow(w, 2)
				);
			};
		}),
		(r.differenceDin99o = function () {
			return gr('dlab');
		}),
		(r.differenceEuclidean = gr),
		(r.differenceHueChroma = br),
		(r.differenceHueNaive = vr),
		(r.differenceHueSaturation = dr),
		(r.differenceHyab = function () {
			var r = sr('lab65');
			return function (a, n) {
				var t = r(a),
					e = r(n),
					o = t.l - e.l,
					i = t.a - e.a,
					u = t.b - e.b;
				return Math.abs(o) + Math.sqrt(i * i + u * u);
			};
		}),
		(r.differenceKotsarenkoRamos = function () {
			return gr('yiq', [0.5053, 0.299, 0.1957]);
		}),
		(r.displayable = Nn),
		(r.dlab = nt),
		(r.dlch = tt),
		(r.easingGamma = x),
		(r.easingInOutSine = xn),
		(r.easingMidpoint = cn),
		(r.easingSmootherstep = function (r) {
			return r * r * r * (r * (6 * r - 15) + 10);
		}),
		(r.easingSmoothstep = function (r) {
			return r * r * (3 - 2 * r);
		}),
		(r.filterBrightness = function (r, a) {
			void 0 === r && (r = 1), void 0 === a && (a = 'rgb');
			var n = Xn(r);
			return fn(dn(n), a, !0);
		}),
		(r.filterContrast = function (r, a) {
			void 0 === r && (r = 1), void 0 === a && (a = 'rgb');
			var n = Xn(r);
			return fn(dn(n, (1 - n) / 2), a, !0);
		}),
		(r.filterDeficiencyDeuter = Un),
		(r.filterDeficiencyProt = Qn),
		(r.filterDeficiencyTrit = Vn),
		(r.filterGrayscale = function (r, a) {
			return (
				void 0 === r && (r = 1),
				void 0 === a && (a = 'rgb'),
				Zn(
					[
						0.2126 + 0.7874 * (n = 1 - Yn(r)),
						0.7152 - 0.7152 * n,
						0.0722 - 0.0722 * n,
						0,
						0.2126 - 0.2126 * n,
						0.7152 + 0.2848 * n,
						0.0722 - 0.0722 * n,
						0,
						0.2126 - 0.2126 * n,
						0.7152 - 0.7152 * n,
						0.0722 + 0.9278 * n,
						0,
						0,
						0,
						0,
						1
					],
					a,
					!0
				)
			);
			var n;
		}),
		(r.filterHueRotate = function (r, a) {
			return (
				void 0 === r && (r = 0),
				void 0 === a && (a = 'rgb'),
				Zn(
					(function (r) {
						var a = (Math.PI * r) / 180,
							n = Math.cos(a),
							t = Math.sin(a);
						return [
							0.213 + 0.787 * n - 0.213 * t,
							0.715 - 0.715 * n - 0.715 * t,
							0.072 - 0.072 * n + 0.928 * t,
							0,
							0.213 - 0.213 * n + 0.143 * t,
							0.715 + 0.285 * n + 0.14 * t,
							0.072 - 0.072 * n - 0.283 * t,
							0,
							0.213 - 0.213 * n - 0.787 * t,
							0.715 - 0.715 * n + 0.715 * t,
							0.072 + 0.928 * n + 0.072 * t,
							0,
							0,
							0,
							0,
							1
						];
					})(r),
					a,
					!0
				)
			);
		}),
		(r.filterInvert = function (r, a) {
			void 0 === r && (r = 1), void 0 === a && (a = 'rgb');
			var n = Yn(r);
			return fn(
				function (r, a) {
					return 'alpha' === a
						? r
						: (function (r, a, n) {
								return void 0 === r || void 0 === a
									? void 0
									: r + n * (a - r);
						  })(n, 1 - n, r);
				},
				a,
				!0
			);
		}),
		(r.filterSaturate = function (r, a) {
			return (
				void 0 === r && (r = 1),
				void 0 === a && (a = 'rgb'),
				Zn(
					(function (r) {
						var a = Xn(r);
						return [
							0.213 + 0.787 * a,
							0.715 - 0.715 * a,
							0.072 - 0.072 * a,
							0,
							0.213 - 0.213 * a,
							0.715 + 0.285 * a,
							0.072 - 0.072 * a,
							0,
							0.213 - 0.213 * a,
							0.715 - 0.715 * a,
							0.072 + 0.928 * a,
							0,
							0,
							0,
							0,
							1
						];
					})(r),
					a,
					!0
				)
			);
		}),
		(r.filterSepia = function (r, a) {
			return (
				void 0 === r && (r = 1),
				void 0 === a && (a = 'rgb'),
				Zn(
					[
						0.393 + 0.607 * (n = 1 - Yn(r)),
						0.769 - 0.769 * n,
						0.189 - 0.189 * n,
						0,
						0.349 - 0.349 * n,
						0.686 + 0.314 * n,
						0.168 - 0.168 * n,
						0,
						0.272 - 0.272 * n,
						0.534 - 0.534 * n,
						0.131 + 0.869 * n,
						0,
						0,
						0,
						0,
						1
					],
					a,
					!0
				)
			);
			var n;
		}),
		(r.fixupAlpha = z),
		(r.fixupHueDecreasing = function (r) {
			return tr(r, function (r) {
				return r <= 0 ? r : r - 360;
			});
		}),
		(r.fixupHueIncreasing = function (r) {
			return tr(r, function (r) {
				return r >= 0 ? r : r + 360;
			});
		}),
		(r.fixupHueLonger = function (r) {
			return tr(r, function (r) {
				return Math.abs(r) >= 180 || 0 === r
					? r
					: r - 360 * Math.sign(r);
			});
		}),
		(r.fixupHueShorter = er),
		(r.formatHex = hn),
		(r.formatHex8 = function (r) {
			var a = nn(r);
			if (void 0 !== a) {
				var n = un(void 0 !== a.alpha ? a.alpha : 1);
				return hn(a) + (256 | n).toString(16).slice(1);
			}
		}),
		(r.formatHsl = function (r) {
			var a = tn(r);
			if (void 0 !== a) {
				var n = en(a.h || 0),
					t = en(100 * on(a.s)),
					e = en(100 * on(a.l));
				return void 0 === a.alpha || 1 === a.alpha
					? 'hsl(' + n + ', ' + t + '%, ' + e + '%)'
					: 'hsla(' +
							n +
							', ' +
							t +
							'%, ' +
							e +
							'%, ' +
							en(on(a.alpha)) +
							')';
			}
		}),
		(r.formatRgb = ln),
		(r.formatter = function (r) {
			switch ((void 0 === r && (r = 'rgb'), r)) {
				case 'rgb':
					return ln;
				case 'hex':
					return hn;
			}
		}),
		(r.getModeDefinition = cr),
		(r.hsi = et),
		(r.hsl = ot),
		(r.hsv = it),
		(r.hwb = ut),
		(r.interpolate = function (r, a, n) {
			return void 0 === a && (a = 'rgb'), Mn(r, a, n);
		}),
		(r.interpolateAlpha = z),
		(r.interpolateCosine = function (r, a) {
			return (
				void 0 === a && (a = 1),
				function (n) {
					var t = x(a),
						e = w(function (r, a, n) {
							return y(r, a, xn(n));
						})(
							(
								r ||
								function (r) {
									return r;
								}
							)(n)
						);
					return function (r) {
						return e(t(r));
					};
				}
			);
		}),
		(r.interpolateHue = er),
		(r.interpolateLinear = function (r, a) {
			return (
				void 0 === a && (a = 1),
				function (n) {
					var t = x(a);
					return function (a) {
						return k(
							(
								r ||
								function (r) {
									return r;
								}
							)(n)
						)(t(a));
					};
				}
			);
		}),
		(r.interpolateSplineBasis = function (r, a, n) {
			return (
				void 0 === a && (a = 'default'),
				void 0 === n && (n = 1),
				function (t) {
					var e = x(n);
					return 'default' === a
						? function (a) {
								return kn(
									(
										r ||
										function (r) {
											return r;
										}
									)(t)
								)(e(a));
						  }
						: 'closed' === a
						? function (a) {
								return zn(
									(
										r ||
										function (r) {
											return r;
										}
									)(t)
								)(e(a));
						  }
						: void 0;
				}
			);
		}),
		(r.interpolateSplineMonotone = function (r, a, n) {
			return (
				void 0 === a && (a = 'default'),
				void 0 === n && (n = 1),
				function (t) {
					var e = x(n);
					return 'closed' === a
						? function (a) {
								return Hn(
									(
										r ||
										function (r) {
											return r;
										}
									)(t)
								)(e(a));
						  }
						: 'default' === a
						? function (a) {
								return Cn(
									(
										r ||
										function (r) {
											return r;
										}
									)(t)
								)(e(a));
						  }
						: void 0;
				}
			);
		}),
		(r.interpolateSplineNatural = function (r, a, n) {
			return (
				void 0 === a && (a = 'default'),
				void 0 === n && (n = 1),
				function (t) {
					var e = x(n);
					return 'default' === a
						? function (a) {
								return In(
									(
										r ||
										function (r) {
											return r;
										}
									)(t)
								)(e(a));
						  }
						: 'closed' === a
						? function (a) {
								return qn(
									(
										r ||
										function (r) {
											return r;
										}
									)(t)
								)(e(a));
						  }
						: void 0;
				}
			);
		}),
		(r.interpolateWith = mn),
		(r.interpolateWithPremultipliedAlpha = yn),
		(r.interpolatorLinear = k),
		(r.interpolatorPiecewise = w),
		(r.interpolatorSplineBasis = kn),
		(r.interpolatorSplineBasisClosed = zn),
		(r.interpolatorSplineMonotone = Cn),
		(r.interpolatorSplineMonotone2 = function (r) {
			if (r.length < 3) return k(r);
			var a = r.length - 1,
				n = On(r),
				t = n[0],
				e = n[1],
				o = n[2];
			return (
				(e[0] = (2 * r[1] - 1.5 * r[0] - 0.5 * r[2]) * a),
				(e[a] = (1.5 * r[a] - 2 * r[a - 1] + 0.5 * r[a - 2]) * a),
				(o[0] =
					e[0] * t[0] <= 0
						? 0
						: En(e[0]) > 2 * En(t[0])
						? 2 * t[0]
						: e[0]),
				(o[a] =
					e[a] * t[a - 1] <= 0
						? 0
						: En(e[a]) > 2 * En(t[a - 1])
						? 2 * t[a - 1]
						: e[a]),
				An(r, o, t)
			);
		}),
		(r.interpolatorSplineMonotoneClosed = Hn),
		(r.interpolatorSplineNatural = In),
		(r.interpolatorSplineNaturalClosed = qn),
		(r.jab = ht),
		(r.jch = lt),
		(r.lab = ct),
		(r.lab65 = ft),
		(r.lch = pt),
		(r.lch65 = st),
		(r.lchuv = dt),
		(r.lerp = y),
		(r.lrgb = vt),
		(r.luv = bt),
		(r.mapAlphaDivide = sn),
		(r.mapAlphaMultiply = pn),
		(r.mapTransferGamma = function (r, a, n) {
			return (
				void 0 === r && (r = 1),
				void 0 === a && (a = 1),
				void 0 === n && (n = 0),
				function (t, e) {
					return 'alpha' !== e ? r * Math.pow(t, a) + n : t;
				}
			);
		}),
		(r.mapTransferLinear = dn),
		(r.mapper = fn),
		(r.nearest = function (r, a, n) {
			void 0 === a && (a = gr()),
				void 0 === n &&
					(n = function (r) {
						return r;
					});
			var t = r.map(function (r, a) {
				return { color: n(r), i: a };
			});
			return function (n, e, o) {
				return (
					void 0 === e && (e = 1),
					void 0 === o && (o = 1 / 0),
					isFinite(e) && (e = Math.max(1, Math.min(e, t.length - 1))),
					t.forEach(function (r) {
						r.d = a(n, r.color);
					}),
					t
						.sort(function (r, a) {
							return r.d - a.d;
						})
						.slice(0, e)
						.filter(function (r) {
							return r.d < o;
						})
						.map(function (a) {
							return r[a.i];
						})
				);
			};
		}),
		(r.oklab = zt),
		(r.oklch = Pt),
		(r.p3 = gt),
		(r.parse = fr),
		(r.prophoto = Mt),
		(r.random = function (r, a) {
			void 0 === r && (r = 'rgb'), void 0 === a && (a = {});
			var n = cr(r),
				t = (function (r) {
					return Object.keys(r).reduce(function (a, n) {
						var t = r[n];
						return (a[n] = Array.isArray(t) ? t : [t, t]), a;
					}, {});
				})(a);
			return n.channels.reduce(
				function (r, a) {
					return (
						(t.alpha || 'alpha' !== a) &&
							(r[a] = (function (r) {
								var a = r[0],
									n = r[1];
								return a + Math.random() * (n - a);
							})(t[a] || n.ranges[a])),
						r
					);
				},
				{ mode: r }
			);
		}),
		(r.rec2020 = mt),
		(r.rgb = yt),
		(r.round = an),
		(r.samples = function (r, a) {
			void 0 === r && (r = 2), void 0 === a && (a = 1);
			var n = x(a);
			if (r < 2) return r < 1 ? [] : [n(0.5)];
			for (var t = [], e = 0; e < r; e++) t.push(n(e / (r - 1)));
			return t;
		}),
		(r.wcagContrast = function (r, a) {
			var n = Fn(r),
				t = Fn(a);
			return (Math.max(n, t) + 0.05) / (Math.min(n, t) + 0.05);
		}),
		(r.wcagLuminance = Fn),
		(r.xyz = xt),
		(r.xyz65 = wt),
		(r.yiq = kt),
		Object.defineProperty(r, '__esModule', { value: !0 });
});
