var parseNumber = function (color, len) {
	if (typeof color !== 'number') {
		return;
	}

	// hex3: #c93 -> #cc9933
	if (len === 3) {
		return {
			mode: 'rgb',
			r: (((color >> 8) & 0xf) | ((color >> 4) & 0xf0)) / 255,
			g: (((color >> 4) & 0xf) | (color & 0xf0)) / 255,
			b: ((color & 0xf) | ((color << 4) & 0xf0)) / 255
		};
	}

	// hex4: #c931 -> #cc993311
	if (len === 4) {
		return {
			mode: 'rgb',
			r: (((color >> 12) & 0xf) | ((color >> 8) & 0xf0)) / 255,
			g: (((color >> 8) & 0xf) | ((color >> 4) & 0xf0)) / 255,
			b: (((color >> 4) & 0xf) | (color & 0xf0)) / 255,
			alpha: ((color & 0xf) | ((color << 4) & 0xf0)) / 255
		};
	}

	// hex6: #f0f1f2
	if (len === 6) {
		return {
			mode: 'rgb',
			r: ((color >> 16) & 0xff) / 255,
			g: ((color >> 8) & 0xff) / 255,
			b: (color & 0xff) / 255
		};
	}

	// hex8: #f0f1f2ff
	if (len === 8) {
		return {
			mode: 'rgb',
			r: ((color >> 24) & 0xff) / 255,
			g: ((color >> 16) & 0xff) / 255,
			b: ((color >> 8) & 0xff) / 255,
			alpha: (color & 0xff) / 255
		};
	}
};

var named = {
	aliceblue: 0xf0f8ff,
	antiquewhite: 0xfaebd7,
	aqua: 0x00ffff,
	aquamarine: 0x7fffd4,
	azure: 0xf0ffff,
	beige: 0xf5f5dc,
	bisque: 0xffe4c4,
	black: 0x000000,
	blanchedalmond: 0xffebcd,
	blue: 0x0000ff,
	blueviolet: 0x8a2be2,
	brown: 0xa52a2a,
	burlywood: 0xdeb887,
	cadetblue: 0x5f9ea0,
	chartreuse: 0x7fff00,
	chocolate: 0xd2691e,
	coral: 0xff7f50,
	cornflowerblue: 0x6495ed,
	cornsilk: 0xfff8dc,
	crimson: 0xdc143c,
	cyan: 0x00ffff,
	darkblue: 0x00008b,
	darkcyan: 0x008b8b,
	darkgoldenrod: 0xb8860b,
	darkgray: 0xa9a9a9,
	darkgreen: 0x006400,
	darkgrey: 0xa9a9a9,
	darkkhaki: 0xbdb76b,
	darkmagenta: 0x8b008b,
	darkolivegreen: 0x556b2f,
	darkorange: 0xff8c00,
	darkorchid: 0x9932cc,
	darkred: 0x8b0000,
	darksalmon: 0xe9967a,
	darkseagreen: 0x8fbc8f,
	darkslateblue: 0x483d8b,
	darkslategray: 0x2f4f4f,
	darkslategrey: 0x2f4f4f,
	darkturquoise: 0x00ced1,
	darkviolet: 0x9400d3,
	deeppink: 0xff1493,
	deepskyblue: 0x00bfff,
	dimgray: 0x696969,
	dimgrey: 0x696969,
	dodgerblue: 0x1e90ff,
	firebrick: 0xb22222,
	floralwhite: 0xfffaf0,
	forestgreen: 0x228b22,
	fuchsia: 0xff00ff,
	gainsboro: 0xdcdcdc,
	ghostwhite: 0xf8f8ff,
	gold: 0xffd700,
	goldenrod: 0xdaa520,
	gray: 0x808080,
	green: 0x008000,
	greenyellow: 0xadff2f,
	grey: 0x808080,
	honeydew: 0xf0fff0,
	hotpink: 0xff69b4,
	indianred: 0xcd5c5c,
	indigo: 0x4b0082,
	ivory: 0xfffff0,
	khaki: 0xf0e68c,
	lavender: 0xe6e6fa,
	lavenderblush: 0xfff0f5,
	lawngreen: 0x7cfc00,
	lemonchiffon: 0xfffacd,
	lightblue: 0xadd8e6,
	lightcoral: 0xf08080,
	lightcyan: 0xe0ffff,
	lightgoldenrodyellow: 0xfafad2,
	lightgray: 0xd3d3d3,
	lightgreen: 0x90ee90,
	lightgrey: 0xd3d3d3,
	lightpink: 0xffb6c1,
	lightsalmon: 0xffa07a,
	lightseagreen: 0x20b2aa,
	lightskyblue: 0x87cefa,
	lightslategray: 0x778899,
	lightslategrey: 0x778899,
	lightsteelblue: 0xb0c4de,
	lightyellow: 0xffffe0,
	lime: 0x00ff00,
	limegreen: 0x32cd32,
	linen: 0xfaf0e6,
	magenta: 0xff00ff,
	maroon: 0x800000,
	mediumaquamarine: 0x66cdaa,
	mediumblue: 0x0000cd,
	mediumorchid: 0xba55d3,
	mediumpurple: 0x9370db,
	mediumseagreen: 0x3cb371,
	mediumslateblue: 0x7b68ee,
	mediumspringgreen: 0x00fa9a,
	mediumturquoise: 0x48d1cc,
	mediumvioletred: 0xc71585,
	midnightblue: 0x191970,
	mintcream: 0xf5fffa,
	mistyrose: 0xffe4e1,
	moccasin: 0xffe4b5,
	navajowhite: 0xffdead,
	navy: 0x000080,
	oldlace: 0xfdf5e6,
	olive: 0x808000,
	olivedrab: 0x6b8e23,
	orange: 0xffa500,
	orangered: 0xff4500,
	orchid: 0xda70d6,
	palegoldenrod: 0xeee8aa,
	palegreen: 0x98fb98,
	paleturquoise: 0xafeeee,
	palevioletred: 0xdb7093,
	papayawhip: 0xffefd5,
	peachpuff: 0xffdab9,
	peru: 0xcd853f,
	pink: 0xffc0cb,
	plum: 0xdda0dd,
	powderblue: 0xb0e0e6,
	purple: 0x800080,

	// Added in CSS Colors Level 4:
	// https://drafts.csswg.org/css-color/#changes-from-3
	rebeccapurple: 0x663399,

	red: 0xff0000,
	rosybrown: 0xbc8f8f,
	royalblue: 0x4169e1,
	saddlebrown: 0x8b4513,
	salmon: 0xfa8072,
	sandybrown: 0xf4a460,
	seagreen: 0x2e8b57,
	seashell: 0xfff5ee,
	sienna: 0xa0522d,
	silver: 0xc0c0c0,
	skyblue: 0x87ceeb,
	slateblue: 0x6a5acd,
	slategray: 0x708090,
	slategrey: 0x708090,
	snow: 0xfffafa,
	springgreen: 0x00ff7f,
	steelblue: 0x4682b4,
	tan: 0xd2b48c,
	teal: 0x008080,
	thistle: 0xd8bfd8,
	tomato: 0xff6347,
	turquoise: 0x40e0d0,
	violet: 0xee82ee,
	wheat: 0xf5deb3,
	white: 0xffffff,
	whitesmoke: 0xf5f5f5,
	yellow: 0xffff00,
	yellowgreen: 0x9acd32
};

// Also supports the `transparent` color as defined in:
// https://drafts.csswg.org/css-color/#transparent-black
var parseNamed = function (color) {
	return parseNumber(named[color.toLowerCase()], 6);
};

/*
	Basic building blocks for color regexes
	---------------------------------------

	These regexes are expressed as strings
	to be interpolated in the color regexes.
 */

var num = (/([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)/ + '').replace(/^\/|\/$/g, ''); // number
var per = num + '%'; // percentage
var per_or_num = num + '%?'; // percentage or number
var alpha = '(?:' + num + '%|' + num + ')'; // alpha-value
var hue$2 = '(?:' + num + '(deg|grad|rad|turn)|' + num + ')'; // hue
var c = '\\s*,\\s*'; // comma
var s = '\\s+'; // space

/*
	rgb() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#rgb-functions
 */
var rgb_num_old = new RegExp(
	'^rgba?\\(\\s*' +
		num +
		c +
		num +
		c +
		num +
		'\\s*(?:,\\s*' +
		alpha +
		'\\s*)?\\)$'
);
var rgb_per_old = new RegExp(
	'^rgba?\\(\\s*' +
		per +
		c +
		per +
		c +
		per +
		'\\s*(?:,\\s*' +
		alpha +
		'\\s*)?\\)$'
);
var rgb_num_new = new RegExp(
	'^rgba?\\(\\s*' +
		num +
		s +
		num +
		s +
		num +
		'\\s*(?:\\/\\s*' +
		alpha +
		'\\s*)?\\)$'
);
var rgb_per_new = new RegExp(
	'^rgba?\\(\\s*' +
		per +
		s +
		per +
		s +
		per +
		'\\s*(?:\\/\\s*' +
		alpha +
		'\\s*)?\\)$'
);

/*
	hsl() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#the-hsl-notation
 */
var hsl_old = new RegExp(
	'^hsla?\\(\\s*' +
		hue$2 +
		c +
		per +
		c +
		per +
		'\\s*(?:,\\s*' +
		alpha +
		'\\s*)?\\)$'
);
var hsl_new = new RegExp(
	'^hsla?\\(\\s*' +
		hue$2 +
		s +
		per +
		s +
		per +
		'\\s*(?:\\/\\s*' +
		alpha +
		'\\s*)?\\)$'
);

/*
	hexadecimal regular expressions.
 */
var hex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i;

/*
	hwb() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#the-hwb-notation
 */
var hwb$1 = new RegExp(
	'^hwb\\(\\s*' +
		hue$2 +
		s +
		per +
		s +
		per +
		'\\s*(?:\\/\\s*' +
		alpha +
		'\\s*)?\\)$'
);

/*
	lab() and lch() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#lab-colors
 */
var lab$1 = new RegExp(
	'^lab\\(\\s*' +
		per_or_num +
		s +
		num +
		s +
		num +
		'\\s*(?:\\/\\s*' +
		alpha +
		'\\s*)?\\)$'
);
var lch$1 = new RegExp(
	'^lch\\(\\s*' +
		per_or_num +
		s +
		num +
		s +
		hue$2 +
		'\\s*(?:\\/\\s*' +
		alpha +
		'\\s*)?\\)$'
);

var parseHex = function (color) {
	var match;
	return (match = color.match(hex))
		? parseNumber(parseInt(match[1], 16), match[1].length)
		: undefined;
};

var parseRgb = function (color) {
	var match, res;

	if ((match = color.match(rgb_num_old) || color.match(rgb_num_new))) {
		res = {
			mode: 'rgb',
			r: match[1] / 255,
			g: match[2] / 255,
			b: match[3] / 255
		};
	} else if ((match = color.match(rgb_per_old) || color.match(rgb_per_new))) {
		res = {
			mode: 'rgb',
			r: match[1] / 100,
			g: match[2] / 100,
			b: match[3] / 100
		};
	} else {
		return undefined;
	}

	if (match[4] !== undefined) {
		res.alpha = match[4] / 100;
	} else if (match[5] !== undefined) {
		res.alpha = +match[5];
	}

	return res;
};

var parseTransparent = function (c) {
	return c === 'transparent' ? parseNumber(0x00000000, 8) : undefined;
};

var lerp$1 = function (a, b, t) {
	return a + t * (b - a);
};

var gamma$3 = function (γ) {
	if (γ === void 0) γ = 1;

	return γ === 1
		? function (t) {
				return t;
		  }
		: function (t) {
				return Math.pow(t, γ);
		  };
};

var get_classes = function (arr) {
	var classes = [];
	for (var i = 0; i < arr.length - 1; i++) {
		var a = arr[i];
		var b = arr[i + 1];
		if (a === undefined && b === undefined) {
			classes.push(undefined);
		} else if (a !== undefined && b !== undefined) {
			classes.push([a, b]);
		} else {
			classes.push(a !== undefined ? [a, a] : [b, b]);
		}
	}
	return classes;
};

var interpolatorPiecewise = function (interpolator) {
	return function (arr) {
		var classes = get_classes(arr);
		return function (t) {
			var cls = t * classes.length;
			var idx = t === 1 ? classes.length - 1 : Math.floor(cls);
			var pair = classes[idx];
			return pair === undefined
				? undefined
				: interpolator(pair[0], pair[1], cls - idx);
		};
	};
};

var interpolatorLinear = interpolatorPiecewise(lerp$1);

var interpolateLinear = function (fixup, γ) {
	if (γ === void 0) γ = 1;

	return function (arr) {
		var ease = gamma$3(γ);
		return function (t) {
			return interpolatorLinear(
				(
					fixup ||
					function (v) {
						return v;
					}
				)(arr)
			)(ease(t));
		};
	};
};

var fixupAlpha = function (arr) {
	var some_defined = false;
	var res = arr.map(function (v) {
		if (v !== undefined) {
			some_defined = true;
			return v;
		}
		return 1;
	});
	return some_defined ? res : arr;
};

/*
	sRGB color space
 */

var definition$p = {
	mode: 'rgb',
	channels: ['r', 'g', 'b', 'alpha'],
	alias: ['srgb'],
	parsers: [parseHex, parseRgb, parseNamed, parseTransparent],

	interpolate: {
		r: interpolatorLinear,
		g: interpolatorLinear,
		b: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

var fn$3 = function (c) {
	var abs = Math.abs(c);
	if (abs < 0.04045) {
		return c / 12.92;
	}
	return (Math.sign(c) || 1) * Math.pow((abs + 0.055) / 1.055, 2.4);
};

var convertRgbToLrgb = function (ref) {
	var r = ref.r;
	var g = ref.g;
	var b = ref.b;
	var alpha = ref.alpha;

	var res = {
		mode: 'lrgb',
		r: fn$3(r),
		g: fn$3(g),
		b: fn$3(b)
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var fn$2 = function (c) {
	var abs = Math.abs(c);
	if (abs > 0.0031308) {
		return (Math.sign(c) || 1) * (1.055 * Math.pow(abs, 1 / 2.4) - 0.055);
	}
	return c * 12.92;
};

var convertLrgbToRgb = function (ref, mode) {
	var r = ref.r;
	var g = ref.g;
	var b = ref.b;
	var alpha = ref.alpha;
	if (mode === void 0) mode = 'rgb';

	var res = {
		mode: mode,
		r: fn$2(r),
		g: fn$2(g),
		b: fn$2(b)
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var definition$o = Object.assign({}, definition$p, {
	mode: 'lrgb',

	output: {
		rgb: convertLrgbToRgb
	},

	input: {
		rgb: convertRgbToLrgb
	},

	parsers: []
});

/*
	Convert A98 RGB values to CIE XYZ D65

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
		* https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf
*/

var linearize$2 = function (v) {
	return Math.pow(Math.abs(v), 563 / 256) * Math.sign(v);
};

var convertA98ToXyz65 = function (a98) {
	var r = linearize$2(a98.r);
	var g = linearize$2(a98.g);
	var b = linearize$2(a98.b);
	var res = {
		mode: 'xyz65',
		x:
			0.5766690429101305 * r +
			0.1855582379065463 * g +
			0.1882286462349947 * b,
		y:
			0.29734497525053605 * r +
			0.6273635662554661 * g +
			0.07529145849399788 * b,
		z:
			0.02703136138641234 * r +
			0.07068885253582723 * g +
			0.9913375368376388 * b
	};
	if (a98.alpha !== undefined) {
		res.alpha = a98.alpha;
	}
	return res;
};

/*
	Convert CIE XYZ D65 values to A98 RGB

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

var gamma$2 = function (v) {
	return Math.pow(Math.abs(v), 256 / 563) * Math.sign(v);
};

var convertXyz65ToA98 = function (ref) {
	var x = ref.x;
	var y = ref.y;
	var z = ref.z;
	var alpha = ref.alpha;

	var res = {
		mode: 'a98',
		r: gamma$2(
			x * 2.0415879038107465 -
				y * 0.5650069742788596 -
				0.34473135077832956 * z
		),
		g: gamma$2(
			x * -0.9692436362808795 +
				y * 1.8759675015077202 +
				0.04155505740717557 * z
		),
		b: gamma$2(
			x * 0.013444280632031142 -
				y * 0.11836239223101838 +
				1.0151749943912054 * z
		)
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

/*
	Convert sRGB values to CIE XYZ D65

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

var convertRgbToXyz65 = function (rgb) {
	var ref = convertRgbToLrgb(rgb);
	var r = ref.r;
	var g = ref.g;
	var b = ref.b;
	var alpha = ref.alpha;
	var res = {
		mode: 'xyz65',
		x: 0.4124564 * r + 0.3575761 * g + 0.1804375 * b,
		y: 0.2126729 * r + 0.7151522 * g + 0.072175 * b,
		z: 0.0193339 * r + 0.119192 * g + 0.9503041 * b
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

/*
	CIE XYZ D65 values to sRGB.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

var convertXyz65ToRgb = function (ref) {
	var x = ref.x;
	var y = ref.y;
	var z = ref.z;
	var alpha = ref.alpha;

	var res = convertLrgbToRgb({
		r: x * 3.2404542 - y * 1.5371385 - 0.4985314 * z,
		g: x * -0.969266 + y * 1.8760108 + 0.041556 * z,
		b: x * 0.0556434 - y * 0.2040259 + 1.0572252 * z
	});
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var definition$n = Object.assign({}, definition$p, {
	mode: 'a98',
	alias: ['a98-rgb'],
	parsers: [],

	input: {
		rgb: function (color) {
			return convertXyz65ToA98(convertRgbToXyz65(color));
		},
		xyz65: convertXyz65ToA98
	},

	output: {
		rgb: function (color) {
			return convertXyz65ToRgb(convertA98ToXyz65(color));
		},
		xyz65: convertA98ToXyz65
	}
});

/*
	Convert Display P3 values to CIE XYZ D65

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

var convertP3ToXyz65 = function (rgb) {
	var ref = convertRgbToLrgb(rgb);
	var r = ref.r;
	var g = ref.g;
	var b = ref.b;
	var alpha = ref.alpha;
	var res = {
		mode: 'xyz65',
		x: 0.4865709 * r + 0.2656676 * g + 0.1982172 * b,
		y: 0.2289745 * r + 0.6917385 * g + 0.0792869 * b,
		z: 0.0 * r + 0.0451133 * g + 1.0439443 * b
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

/*
	CIE XYZ D65 values to Display P3.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

var convertXyz65ToP3 = function (ref) {
	var x = ref.x;
	var y = ref.y;
	var z = ref.z;
	var alpha = ref.alpha;

	var res = convertLrgbToRgb(
		{
			r: x * 2.4934969 - y * 0.9313836 - 0.4027107 * z,
			g: x * -0.8294889 + y * 1.762664 + 0.0236246 * z,
			b: x * 0.0358458 - y * 0.0761723 + 0.9568845 * z
		},
		'p3'
	);
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var definition$m = Object.assign({}, definition$p, {
	mode: 'p3',
	alias: ['display-p3'],

	input: {
		rgb: function (color) {
			return convertXyz65ToP3(convertRgbToXyz65(color));
		},
		xyz65: convertXyz65ToP3
	},

	output: {
		rgb: function (color) {
			return convertXyz65ToRgb(convertP3ToXyz65(color));
		},
		xyz65: convertP3ToXyz65
	},

	parsers: []
});

/*
	Convert CIE XYZ D50 values to ProPhoto RGB

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

var gamma$1 = function (v) {
	var abs = Math.abs(v);
	if (abs >= 1 / 512) {
		return Math.sign(v) * Math.pow(abs, 1 / 1.8);
	}
	return 16 * v;
};

var convertXyzToProphoto = function (ref) {
	var x = ref.x;
	var y = ref.y;
	var z = ref.z;
	var alpha = ref.alpha;

	var res = {
		mode: 'prophoto',
		r: gamma$1(
			x * 1.3457989731028281 -
				y * 0.25558010007997534 -
				0.05110628506753401 * z
		),
		g: gamma$1(
			x * -0.5446224939028347 +
				y * 1.5082327413132781 +
				0.02053603239147973 * z
		),
		b: gamma$1(x * 0.0 + y * 0.0 + 1.2119675456389454 * z)
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

/*
	Convert ProPhoto RGB values to CIE XYZ D50

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

var linearize$1 = function (v) {
	var abs = Math.abs(v);
	if (abs >= 16 / 512) {
		return Math.sign(v) * Math.pow(abs, 1.8);
	}
	return v / 16;
};

var convertProphotoToXyz = function (prophoto) {
	var r = linearize$1(prophoto.r);
	var g = linearize$1(prophoto.g);
	var b = linearize$1(prophoto.b);
	var res = {
		mode: 'xyz65',
		x:
			0.7977604896723027 * r +
			0.13518583717574031 * g +
			0.0313493495815248 * b,
		y:
			0.2880711282292934 * r +
			0.7118432178101014 * g +
			0.00008565396060525902 * b,
		z: 0.0 * r + 0.0 * g + 0.8251046025104601 * b
	};
	if (prophoto.alpha !== undefined) {
		res.alpha = prophoto.alpha;
	}
	return res;
};

/*
	CIE XYZ D50 values to sRGB.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

var convertXyzToRgb = function (ref) {
	var x = ref.x;
	var y = ref.y;
	var z = ref.z;
	var alpha = ref.alpha;

	var res = convertLrgbToRgb({
		r: x * 3.1338561 - y * 1.6168667 - 0.4906146 * z,
		g: x * -0.9787684 + y * 1.9161415 + 0.033454 * z,
		b: x * 0.0719453 - y * 0.2289914 + 1.4052427 * z
	});
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

/*
	Convert sRGB values to CIE XYZ D50

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	
*/

var convertRgbToXyz = function (rgb) {
	var ref = convertRgbToLrgb(rgb);
	var r = ref.r;
	var g = ref.g;
	var b = ref.b;
	var alpha = ref.alpha;
	var res = {
		mode: 'xyz',
		x: 0.4360747 * r + 0.3850649 * g + 0.1430804 * b,
		y: 0.2225045 * r + 0.7168786 * g + 0.0606169 * b,
		z: 0.0139322 * r + 0.0971045 * g + 0.7141733 * b
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

/*
	ProPhoto RGB Color space

	References:
		* https://en.wikipedia.org/wiki/ProPhoto_RGB_color_space
 */

var definition$l = Object.assign({}, definition$p, {
	mode: 'prophoto',
	alias: ['prophoto-rgb'],
	parsers: [],

	input: {
		xyz: convertXyzToProphoto,
		rgb: function (color) {
			return convertXyzToProphoto(convertRgbToXyz(color));
		}
	},

	output: {
		xyz: convertProphotoToXyz,
		rgb: function (color) {
			return convertXyzToRgb(convertProphotoToXyz(color));
		}
	}
});

/*
	Convert CIE XYZ D65 values to Rec. 2020

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
		* https://www.itu.int/rec/R-REC-BT.2020/en
*/

var α$1 = 1.09929682680944;
var β$1 = 0.018053968510807;
var gamma = function (v) {
	var abs = Math.abs(v);
	if (abs > β$1) {
		return (Math.sign(v) || 1) * (α$1 * Math.pow(abs, 0.45) - (α$1 - 1));
	}
	return 4.5 * v;
};

var convertXyz65ToRec2020 = function (ref) {
	var x = ref.x;
	var y = ref.y;
	var z = ref.z;
	var alpha = ref.alpha;

	var res = {
		mode: 'rec2020',
		r: gamma(
			x * 1.7166511879712674 -
				y * 0.35567078377639233 -
				0.25336628137365974 * z
		),
		g: gamma(
			x * -0.6666843518324892 +
				y * 1.6164812366349395 +
				0.01576854581391113 * z
		),
		b: gamma(
			x * 0.017639857445310783 -
				y * 0.042770613257808524 +
				0.9421031212354738 * z
		)
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

/*
	Convert Rec. 2020 values to CIE XYZ D65

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
		* https://www.itu.int/rec/R-REC-BT.2020/en
*/

var α = 1.09929682680944;
var β = 0.018053968510807;

var linearize = function (v) {
	var abs = Math.abs(v);
	if (abs < β * 4.5) {
		return v / 4.5;
	}
	return (Math.sign(v) || 1) * Math.pow((abs + α - 1) / α, 1 / 0.45);
};

var convertRec2020ToXyz65 = function (rec2020) {
	var r = linearize(rec2020.r);
	var g = linearize(rec2020.g);
	var b = linearize(rec2020.b);
	var res = {
		mode: 'xyz65',
		x:
			0.6369580483012914 * r +
			0.14461690358620832 * g +
			0.1688809751641721 * b,
		y:
			0.2627002120112671 * r +
			0.6779980715188708 * g +
			0.05930171646986196 * b,
		z: 0 * r + 0.028072693049087428 * g + 1.060985057710791 * b
	};
	if (rec2020.alpha !== undefined) {
		res.alpha = rec2020.alpha;
	}
	return res;
};

var definition$k = Object.assign({}, definition$p, {
	mode: 'rec2020',

	input: {
		xyz: convertXyz65ToRec2020,
		rgb: function (color) {
			return convertXyz65ToRec2020(convertRgbToXyz65(color));
		}
	},

	output: {
		xyz: convertRec2020ToXyz65,
		rgb: function (color) {
			return convertXyz65ToRgb(convertRec2020ToXyz65(color));
		}
	},

	parsers: []
});

var normalizeHue = function (hue) {
	return (hue = hue % 360) < 0 ? hue + 360 : hue;
};

// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB

function convertHslToRgb(ref) {
	var h = ref.h;
	var s = ref.s;
	var l = ref.l;
	var alpha = ref.alpha;

	h = normalizeHue(h);
	var m1 = l + s * (l < 0.5 ? l : 1 - l);
	var m2 = m1 - (m1 - l) * 2 * Math.abs(((h / 60) % 2) - 1);
	var res;
	switch (Math.floor(h / 60)) {
		case 0:
			res = { r: m1, g: m2, b: 2 * l - m1 };
			break;
		case 1:
			res = { r: m2, g: m1, b: 2 * l - m1 };
			break;
		case 2:
			res = { r: 2 * l - m1, g: m1, b: m2 };
			break;
		case 3:
			res = { r: 2 * l - m1, g: m2, b: m1 };
			break;
		case 4:
			res = { r: m2, g: 2 * l - m1, b: m1 };
			break;
		case 5:
			res = { r: m1, g: 2 * l - m1, b: m2 };
			break;
		default:
			res = { r: 2 * l - m1, g: 2 * l - m1, b: 2 * l - m1 };
	}
	res.mode = 'rgb';
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
}

// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation

function convertRgbToHsl(ref) {
	var r = ref.r;
	var g = ref.g;
	var b = ref.b;
	var alpha = ref.alpha;

	var M = Math.max(r, g, b),
		m = Math.min(r, g, b);
	var res = {
		mode: 'hsl',
		s: M === m ? 0 : (M - m) / (1 - Math.abs(M + m - 1)),
		l: 0.5 * (M + m)
	};
	if (M - m !== 0) {
		res.h =
			(M === r
				? (g - b) / (M - m) + (g < b) * 6
				: M === g
				? (b - r) / (M - m) + 2
				: (r - g) / (M - m) + 4) * 60;
	}
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
}

var hue$1 = function (val, unit) {
	switch (unit) {
		case 'deg':
			return +val;
		case 'rad':
			return (val / Math.PI) * 180;
		case 'grad':
			return (val / 10) * 9;
		case 'turn':
			return val * 360;
	}
};

var parseHsl = function (color) {
	var match = color.match(hsl_old) || color.match(hsl_new);
	if (!match) {
		return;
	}
	var res = {
		mode: 'hsl',
		h: match[3] === undefined ? hue$1(match[1], match[2]) : +match[3],
		s: Math.min(Math.max(0, match[4] / 100), 1),
		l: Math.min(Math.max(0, match[5] / 100), 1)
	};
	if (match[6] !== undefined) {
		res.alpha = match[6] / 100;
	} else if (match[7] !== undefined) {
		res.alpha = +match[7];
	}
	return res;
};

var hue = function (hues, fn) {
	return hues
		.map(function (hue, idx, arr) {
			if (hue === undefined) {
				return hue;
			}
			var normalized = normalizeHue(hue);
			if (idx === 0 || hues[idx - 1] === undefined) {
				return normalized;
			}
			return fn(normalized - normalizeHue(arr[idx - 1]));
		})
		.reduce(function (acc, curr) {
			if (
				!acc.length ||
				curr === undefined ||
				acc[acc.length - 1] === undefined
			) {
				acc.push(curr);
				return acc;
			}
			acc.push(curr + acc[acc.length - 1]);
			return acc;
		}, []);
};

var fixupHueShorter = function (arr) {
	return hue(arr, function (d) {
		return Math.abs(d) <= 180 ? d : d - 360 * Math.sign(d);
	});
};
var fixupHueLonger = function (arr) {
	return hue(arr, function (d) {
		return Math.abs(d) >= 180 || d === 0 ? d : d - 360 * Math.sign(d);
	});
};
var fixupHueIncreasing = function (arr) {
	return hue(arr, function (d) {
		return d >= 0 ? d : d + 360;
	});
};
var fixupHueDecreasing = function (arr) {
	return hue(arr, function (d) {
		return d <= 0 ? d : d - 360;
	});
};

var converters = {};
var modes = {};
var parsers = [];
var identity = function (v) {
	return v;
};

var defineMode = function (definition) {
	converters[definition.mode] = Object.assign(
		converters[definition.mode] || {},
		definition.output
	);
	Object.keys(definition.input || {}).forEach(function (k) {
		if (!converters[k]) {
			converters[k] = {};
		}
		converters[k][definition.mode] = definition.input[k];
	});

	// Color space channel ranges
	if (!definition.ranges) {
		definition.ranges = {};
	}

	if (!definition.difference) {
		definition.difference = {};
	}

	definition.channels.forEach(function (channel) {
		// undefined channel ranges default to the [0, 1] interval
		if (definition.ranges[channel] === undefined) {
			definition.ranges[channel] = [0, 1];
		}

		if (!definition.interpolate[channel]) {
			throw new Error('Missing interpolator for: ' + channel);
		}

		if (typeof definition.interpolate[channel] === 'function') {
			definition.interpolate[channel] = {
				use: definition.interpolate[channel]
			};
		}

		if (!definition.interpolate[channel].fixup) {
			definition.interpolate[channel].fixup = identity;
		}
	});

	modes[definition.mode] = definition;
	(definition.parsers || []).forEach(function (parser) {
		return parsers.push(parser);
	});
};

var getModeDefinition = function (mode) {
	return modes[mode];
};

var parse = function (color) {
	if (typeof color !== 'string') {
		return undefined;
	}
	var result;
	var i = 0;
	var len = parsers.length;
	while (i < len) {
		if ((result = parsers[i++](color)) !== undefined) {
			break;
		}
	}
	return result;
};

var prepare = function (color, mode) {
	return color === undefined
		? undefined
		: typeof color !== 'object'
		? parse(color)
		: color.mode !== undefined
		? color
		: mode
		? Object.assign({}, color, { mode: mode })
		: undefined;
};

var converter = function (target_mode) {
	if (target_mode === void 0) target_mode = 'rgb';

	return function (color) {
		return (color = prepare(color, target_mode)) !== undefined
			? // if the color's mode corresponds to our target mode
			  color.mode === target_mode
				? // then just return the color
				  color
				: // otherwise check to see if we have a dedicated
				// converter for the target mode
				converters[color.mode][target_mode]
				? // and return its result...
				  converters[color.mode][target_mode](color)
				: // ...otherwise pass through RGB as an intermediary step.
				// if the target mode is RGB...
				target_mode === 'rgb'
				? // just return the RGB
				  converters[color.mode].rgb(color)
				: // otherwise convert color.mode -> RGB -> target_mode
				  converters.rgb[target_mode](converters[color.mode].rgb(color))
			: undefined;
	};
};

var differenceHueSaturation = function (std, smp) {
	if (std.h === undefined || smp.h === undefined || !std.s || !smp.s) {
		return 0;
	}
	var std_h = normalizeHue(std.h);
	var smp_h = normalizeHue(smp.h);
	var dH = Math.sin((((smp_h - std_h + 360) / 2) * Math.PI) / 180);
	return 2 * Math.sqrt(std.s * smp.s) * dH;
};

var differenceHueNaive = function (std, smp) {
	if (std.h === undefined || smp.h === undefined) {
		return 0;
	}
	var std_h = normalizeHue(std.h);
	var smp_h = normalizeHue(smp.h);
	if (Math.abs(smp_h - std_h) > 180) {
		// todo should this be normalized once again?
		return std_h - (smp_h - 360 * Math.sign(smp_h - std_h));
	}
	return smp_h - std_h;
};

var differenceHueChroma = function (std, smp) {
	if (std.h === undefined || smp.h === undefined || !std.c || !smp.c) {
		return 0;
	}
	var std_h = normalizeHue(std.h);
	var smp_h = normalizeHue(smp.h);
	var dH = Math.sin((((smp_h - std_h + 360) / 2) * Math.PI) / 180);
	return 2 * Math.sqrt(std.c * smp.c) * dH;
};

var differenceEuclidean = function (mode, weights) {
	if (mode === void 0) mode = 'rgb';
	if (weights === void 0) weights = [1, 1, 1, 0];

	var def = getModeDefinition(mode);
	var channels = def.channels;
	var diffs = def.difference;
	var conv = converter(mode);
	return function (std, smp) {
		var ConvStd = conv(std);
		var ConvSmp = conv(smp);
		return Math.sqrt(
			channels.reduce(function (sum, k, idx) {
				var delta = diffs[k]
					? diffs[k](ConvStd, ConvSmp)
					: ConvStd[k] - ConvSmp[k];
				return (
					sum +
					(weights[idx] || 0) * Math.pow(isNaN(delta) ? 0 : delta, 2)
				);
			}, 0)
		);
	};
};

var differenceCie76 = function () {
	return differenceEuclidean('lab65');
};

var differenceCie94 = function (kL, K1, K2) {
	if (kL === void 0) kL = 1;
	if (K1 === void 0) K1 = 0.045;
	if (K2 === void 0) K2 = 0.015;

	var lab = converter('lab65');

	return function (std, smp) {
		var LabStd = lab(std);
		var LabSmp = lab(smp);

		// Extract Lab values, and compute Chroma
		var lStd = LabStd.l;
		var aStd = LabStd.a;
		var bStd = LabStd.b;
		var cStd = Math.sqrt(aStd * aStd + bStd * bStd);

		var lSmp = LabSmp.l;
		var aSmp = LabSmp.a;
		var bSmp = LabSmp.b;
		var cSmp = Math.sqrt(aSmp * aSmp + bSmp * bSmp);

		var dL2 = Math.pow(lStd - lSmp, 2);
		var dC2 = Math.pow(cStd - cSmp, 2);
		var dH2 = Math.pow(aStd - aSmp, 2) + Math.pow(bStd - bSmp, 2) - dC2;

		return Math.sqrt(
			dL2 / Math.pow(kL, 2) +
				dC2 / Math.pow(1 + K1 * cStd, 2) +
				dH2 / Math.pow(1 + K2 * cStd, 2)
		);
	};
};

/*
	CIEDE2000 color difference, original Matlab implementation by Gaurav Sharma
	Based on "The CIEDE2000 Color-Difference Formula: Implementation Notes, Supplementary Test Data, and Mathematical Observations" 
	by Gaurav Sharma, Wencheng Wu, Edul N. Dalal in Color Research and Application, vol. 30. No. 1, pp. 21-30, February 2005.
	http://www2.ece.rochester.edu/~gsharma/ciede2000/
 */

var differenceCiede2000 = function (Kl, Kc, Kh) {
	if (Kl === void 0) Kl = 1;
	if (Kc === void 0) Kc = 1;
	if (Kh === void 0) Kh = 1;

	var lab = converter('lab65');
	return function (std, smp) {
		var LabStd = lab(std);
		var LabSmp = lab(smp);

		var lStd = LabStd.l;
		var aStd = LabStd.a;
		var bStd = LabStd.b;
		var cStd = Math.sqrt(aStd * aStd + bStd * bStd);

		var lSmp = LabSmp.l;
		var aSmp = LabSmp.a;
		var bSmp = LabSmp.b;
		var cSmp = Math.sqrt(aSmp * aSmp + bSmp * bSmp);

		var cAvg = (cStd + cSmp) / 2;

		var G =
			0.5 *
			(1 -
				Math.sqrt(
					Math.pow(cAvg, 7) / (Math.pow(cAvg, 7) + Math.pow(25, 7))
				));

		var apStd = aStd * (1 + G);
		var apSmp = aSmp * (1 + G);

		var cpStd = Math.sqrt(apStd * apStd + bStd * bStd);
		var cpSmp = Math.sqrt(apSmp * apSmp + bSmp * bSmp);

		var hpStd =
			Math.abs(apStd) + Math.abs(bStd) === 0
				? 0
				: Math.atan2(bStd, apStd);
		hpStd += (hpStd < 0) * 2 * Math.PI;

		var hpSmp =
			Math.abs(apSmp) + Math.abs(bSmp) === 0
				? 0
				: Math.atan2(bSmp, apSmp);
		hpSmp += (hpSmp < 0) * 2 * Math.PI;

		var dL = lSmp - lStd;
		var dC = cpSmp - cpStd;

		var dhp = cpStd * cpSmp === 0 ? 0 : hpSmp - hpStd;
		dhp -= (dhp > Math.PI) * 2 * Math.PI;
		dhp += (dhp < -Math.PI) * 2 * Math.PI;

		var dH = 2 * Math.sqrt(cpStd * cpSmp) * Math.sin(dhp / 2);

		var Lp = (lStd + lSmp) / 2;
		var Cp = (cpStd + cpSmp) / 2;

		var hp;
		if (cpStd * cpSmp === 0) {
			hp = hpStd + hpSmp;
		} else {
			hp = (hpStd + hpSmp) / 2;
			hp -= (Math.abs(hpStd - hpSmp) > Math.PI) * Math.PI;
			hp += (hp < 0) * 2 * Math.PI;
		}

		var Lpm50 = Math.pow(Lp - 50, 2);
		var T =
			1 -
			0.17 * Math.cos(hp - Math.PI / 6) +
			0.24 * Math.cos(2 * hp) +
			0.32 * Math.cos(3 * hp + Math.PI / 30) -
			0.2 * Math.cos(4 * hp - (63 * Math.PI) / 180);

		var Sl = 1 + (0.015 * Lpm50) / Math.sqrt(20 + Lpm50);
		var Sc = 1 + 0.045 * Cp;
		var Sh = 1 + 0.015 * Cp * T;

		var deltaTheta =
			((30 * Math.PI) / 180) *
			Math.exp(-1 * Math.pow(((180 / Math.PI) * hp - 275) / 25, 2));
		var Rc =
			2 *
			Math.sqrt(Math.pow(Cp, 7) / (Math.pow(Cp, 7) + Math.pow(25, 7)));

		var Rt = -1 * Math.sin(2 * deltaTheta) * Rc;

		return Math.sqrt(
			Math.pow(dL / (Kl * Sl), 2) +
				Math.pow(dC / (Kc * Sc), 2) +
				Math.pow(dH / (Kh * Sh), 2) +
				(((Rt * dC) / (Kc * Sc)) * dH) / (Kh * Sh)
		);
	};
};

/*
	CMC (l:c) difference formula

	References:
		https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_(1984)
		http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html
 */
var differenceCmc = function (l, c) {
	if (l === void 0) l = 1;
	if (c === void 0) c = 1;

	var lab = converter('lab65');

	/*
		Comparte two colors:
		std - standard (first) color
		smp - sample (second) color
	 */
	return function (std, smp) {
		// convert standard color to Lab
		var LabStd = lab(std);
		var lStd = LabStd.l;
		var aStd = LabStd.a;
		var bStd = LabStd.b;

		// Obtain hue/chroma
		var cStd = Math.sqrt(aStd * aStd + bStd * bStd);
		var hStd = Math.atan2(bStd, aStd);
		hStd = hStd + 2 * Math.PI * (hStd < 0);

		// convert sample color to Lab, obtain LCh
		var LabSmp = lab(smp);
		var lSmp = LabSmp.l;
		var aSmp = LabSmp.a;
		var bSmp = LabSmp.b;

		// Obtain chroma
		var cSmp = Math.sqrt(aSmp * aSmp + bSmp * bSmp);

		// lightness delta squared
		var dL2 = Math.pow(lStd - lSmp, 2);

		// chroma delta squared
		var dC2 = Math.pow(cStd - cSmp, 2);

		// hue delta squared
		var dH2 = Math.pow(aStd - aSmp, 2) + Math.pow(bStd - bSmp, 2) - dC2;

		var F = Math.sqrt(Math.pow(cStd, 4) / (Math.pow(cStd, 4) + 1900));
		var T =
			hStd >= (164 / 180) * Math.PI && hStd <= (345 / 180) * Math.PI
				? 0.56 + Math.abs(0.2 * Math.cos(hStd + (168 / 180) * Math.PI))
				: 0.36 + Math.abs(0.4 * Math.cos(hStd + (35 / 180) * Math.PI));

		var Sl = lStd < 16 ? 0.511 : (0.040975 * lStd) / (1 + 0.01765 * lStd);
		var Sc = (0.0638 * cStd) / (1 + 0.0131 * cStd) + 0.638;
		var Sh = Sc * (F * T + 1 - F);

		return Math.sqrt(
			dL2 / Math.pow(l * Sl, 2) +
				dC2 / Math.pow(c * Sc, 2) +
				dH2 / Math.pow(Sh, 2)
		);
	};
};

/*

	HyAB color difference formula, introduced in:

		Abasi S, Amani Tehran M, Fairchild MD. 
		"Distance metrics for very large color differences."
		Color Res Appl. 2019; 1–16. 
		https://doi.org/10.1002/col.22451

	PDF available at:
	
		http://markfairchild.org/PDFs/PAP40.pdf
 */
var differenceHyab = function () {
	var lab = converter('lab65');
	return function (std, smp) {
		var LabStd = lab(std);
		var LabSmp = lab(smp);
		var dL = LabStd.l - LabSmp.l;
		var dA = LabStd.a - LabSmp.a;
		var dB = LabStd.b - LabSmp.b;
		return Math.abs(dL) + Math.sqrt(dA * dA + dB * dB);
	};
};

var differenceDin99o = function () {
	return differenceEuclidean('dlab');
};

/*
	"Measuring perceived color difference using YIQ NTSC
	transmission color space in mobile applications"
		
		by Yuriy Kotsarenko, Fernando Ramos in:
		Programación Matemática y Software (2010) 

	Available at:
		
		http://www.progmat.uaem.mx:8080/artVol2Num2/Articulo3Vol2Num2.pdf
 */
var differenceKotsarenkoRamos = function () {
	return differenceEuclidean('yiq', [0.5053, 0.299, 0.1957]);
};

var averageAngle = function (val) {
	// See: https://en.wikipedia.org/wiki/Mean_of_circular_quantities
	var sum = val.reduce(
		function (sum, val) {
			if (val !== undefined) {
				var rad = (val * Math.PI) / 180;
				sum.sin += Math.sin(rad);
				sum.cos += Math.cos(rad);
			}
			return sum;
		},
		{ sin: 0, cos: 0 }
	);
	return (Math.atan2(sum.sin, sum.cos) * 180) / Math.PI;
};

var averageNumber = function (val) {
	var a = val.filter(function (v) {
		return v !== undefined;
	});
	return a.length
		? a.reduce(function (sum, v) {
				return sum + v;
		  }, 0) / a.length
		: undefined;
};

var isfn$1 = function (o) {
	return typeof o === 'function';
};

function average(colors, mode, overrides) {
	if (mode === void 0) mode = 'rgb';

	var def = getModeDefinition(mode);
	var cc = colors.map(converter(mode));
	return def.channels.reduce(
		function (res, ch) {
			var arr = cc
				.map(function (c) {
					return c[ch];
				})
				.filter(function (val) {
					return val !== undefined;
				});
			if (arr.length) {
				var fn;
				if (isfn$1(overrides)) {
					fn = overrides;
				} else if (overrides && isfn$1(overrides[ch])) {
					fn = overrides[ch];
				} else if (def.average && isfn$1(def.average[ch])) {
					fn = def.average[ch];
				} else {
					fn = averageNumber;
				}
				res[ch] = fn(arr, ch);
			}
			return res;
		},
		{ mode: mode }
	);
}

var definition$j = {
	mode: 'hsl',

	output: {
		rgb: convertHslToRgb
	},

	input: {
		rgb: convertRgbToHsl
	},

	channels: ['h', 's', 'l', 'alpha'],

	ranges: {
		h: [0, 360]
	},

	parsers: [parseHsl],

	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		s: interpolatorLinear,
		l: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},

	difference: {
		h: differenceHueSaturation
	},

	average: {
		h: averageAngle
	}
};

// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB

function convertHsvToRgb(ref) {
	var h = ref.h;
	var s = ref.s;
	var v = ref.v;
	var alpha = ref.alpha;

	h = normalizeHue(h);
	var f = Math.abs(((h / 60) % 2) - 1);
	var res;
	switch (Math.floor(h / 60)) {
		case 0:
			res = { r: v, g: v * (1 - s * f), b: v * (1 - s) };
			break;
		case 1:
			res = { r: v * (1 - s * f), g: v, b: v * (1 - s) };
			break;
		case 2:
			res = { r: v * (1 - s), g: v, b: v * (1 - s * f) };
			break;
		case 3:
			res = { r: v * (1 - s), g: v * (1 - s * f), b: v };
			break;
		case 4:
			res = { r: v * (1 - s * f), g: v * (1 - s), b: v };
			break;
		case 5:
			res = { r: v, g: v * (1 - s), b: v * (1 - s * f) };
			break;
		default:
			res = { r: v * (1 - s), g: v * (1 - s), b: v * (1 - s) };
	}
	res.mode = 'rgb';
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
}

// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation

function convertRgbToHsv(ref) {
	var r = ref.r;
	var g = ref.g;
	var b = ref.b;
	var alpha = ref.alpha;

	var M = Math.max(r, g, b),
		m = Math.min(r, g, b);
	var res = {
		mode: 'hsv',
		s: M === 0 ? 0 : 1 - m / M,
		v: M
	};
	if (M - m !== 0) {
		res.h =
			(M === r
				? (g - b) / (M - m) + (g < b) * 6
				: M === g
				? (b - r) / (M - m) + 2
				: (r - g) / (M - m) + 4) * 60;
	}
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
}

var definition$i = {
	mode: 'hsv',

	output: {
		rgb: convertHsvToRgb
	},

	input: {
		rgb: convertRgbToHsv
	},

	channels: ['h', 's', 'v', 'alpha'],

	ranges: {
		h: [0, 360]
	},

	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		s: interpolatorLinear,
		v: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},

	difference: {
		h: differenceHueSaturation
	},

	average: {
		h: averageAngle
	}
};

// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB

function convertHsiToRgb(ref) {
	var h = ref.h;
	var s = ref.s;
	var i = ref.i;
	var alpha = ref.alpha;

	h = normalizeHue(h);
	var f = Math.abs(((h / 60) % 2) - 1);
	var res;
	switch (Math.floor(h / 60)) {
		case 0:
			res = {
				r: i * (1 + s * (3 / (2 - f) - 1)),
				g: i * (1 + s * ((3 * (1 - f)) / (2 - f) - 1)),
				b: i * (1 - s)
			};
			break;
		case 1:
			res = {
				r: i * (1 + s * ((3 * (1 - f)) / (2 - f) - 1)),
				g: i * (1 + s * (3 / (2 - f) - 1)),
				b: i * (1 - s)
			};
			break;
		case 2:
			res = {
				r: i * (1 - s),
				g: i * (1 + s * (3 / (2 - f) - 1)),
				b: i * (1 + s * ((3 * (1 - f)) / (2 - f) - 1))
			};
			break;
		case 3:
			res = {
				r: i * (1 - s),
				g: i * (1 + s * ((3 * (1 - f)) / (2 - f) - 1)),
				b: i * (1 + s * (3 / (2 - f) - 1))
			};
			break;
		case 4:
			res = {
				r: i * (1 + s * ((3 * (1 - f)) / (2 - f) - 1)),
				g: i * (1 - s),
				b: i * (1 + s * (3 / (2 - f) - 1))
			};
			break;
		case 5:
			res = {
				r: i * (1 + s * (3 / (2 - f) - 1)),
				g: i * (1 - s),
				b: i * (1 + s * ((3 * (1 - f)) / (2 - f) - 1))
			};
			break;
		default:
			res = { r: i * (1 - s), g: i * (1 - s), b: i * (1 - s) };
	}

	res.mode = 'rgb';
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
}

// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation

function convertRgbToHsi(ref) {
	var r = ref.r;
	var g = ref.g;
	var b = ref.b;
	var alpha = ref.alpha;

	var M = Math.max(r, g, b),
		m = Math.min(r, g, b);
	var res = {
		mode: 'hsi',
		s: r + g + b === 0 ? 0 : 1 - (3 * m) / (r + g + b),
		i: (r + g + b) / 3
	};
	if (M - m !== 0) {
		res.h =
			(M === r
				? (g - b) / (M - m) + (g < b) * 6
				: M === g
				? (b - r) / (M - m) + 2
				: (r - g) / (M - m) + 4) * 60;
	}
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
}

var definition$h = {
	mode: 'hsi',

	output: {
		rgb: convertHsiToRgb
	},

	input: {
		rgb: convertRgbToHsi
	},

	channels: ['h', 's', 'i', 'alpha'],

	ranges: {
		h: [0, 360]
	},

	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		s: interpolatorLinear,
		i: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},

	difference: {
		h: differenceHueSaturation
	},

	average: {
		h: averageAngle
	}
};

/*
	HWB to RGB converter
	--------------------

	References:
		* https://drafts.csswg.org/css-color/#hwb-to-rgb
		* https://en.wikipedia.org/wiki/HWB_color_model
		* http://alvyray.com/Papers/CG/HWB_JGTv208.pdf
 */

function convertHwbToRgb(ref) {
	var h = ref.h;
	var w = ref.w;
	var b = ref.b;
	var alpha = ref.alpha;

	// normalize w + b to 1
	if (w + b > 1) {
		var s = w + b;
		w /= s;
		b /= s;
	}
	return convertHsvToRgb({
		h: h,
		s: b === 1 ? 1 : 1 - w / (1 - b),
		v: 1 - b,
		alpha: alpha
	});
}

/*
	RGB to HWB converter
	--------------------

	References:
		* https://drafts.csswg.org/css-color/#hwb-to-rgb
		* https://en.wikipedia.org/wiki/HWB_color_model
		* http://alvyray.com/Papers/CG/HWB_JGTv208.pdf
 */

function convertRgbToHwb(rgba) {
	var hsv = convertRgbToHsv(rgba);
	if (hsv === undefined) {
		return undefined;
	}
	var res = {
		mode: 'hwb',
		w: (1 - hsv.s) * hsv.v,
		b: 1 - hsv.v
	};
	if (hsv.h !== undefined) {
		res.h = hsv.h;
	}
	if (hsv.alpha !== undefined) {
		res.alpha = hsv.alpha;
	}
	return res;
}

var parseHwb = function (color) {
	var match = color.match(hwb$1);
	if (!match) {
		return undefined;
	}
	var res = {
		mode: 'hwb',
		h: match[3] === undefined ? hue$1(match[1], match[2]) : +match[3],
		w: match[4] / 100,
		b: match[5] / 100
	};

	// normalize w + b to at most 1
	if (res.w + res.b > 1) {
		var s = res.w + res.b;
		res.w /= s;
		res.b /= s;
	}

	if (match[6] !== undefined) {
		res.alpha = match[6] / 100;
	} else if (match[7] !== undefined) {
		res.alpha = +match[7];
	}
	return res;
};

var definition$g = {
	mode: 'hwb',

	output: {
		rgb: convertHwbToRgb
	},

	input: {
		rgb: convertRgbToHwb
	},

	channels: ['h', 'w', 'b', 'alpha'],

	ranges: {
		h: [0, 360]
	},

	parsers: [parseHwb],

	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		w: interpolatorLinear,
		b: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},

	difference: {
		h: differenceHueNaive
	},

	average: {
		h: averageAngle
	}
};

var n$1 = 0.1593017578125; // = 2610 / Math.pow(2, 14);
var p$1 = 134.03437499999998; // = 1.7 * 2523 / Math.pow(2, 5);
var c1$1 = 0.8359375; // = 3424 / Math.pow(2, 12);
var c2$1 = 18.8515625; // = 2413 / Math.pow(2, 7);
var c3$1 = 18.6875; // = 2392 / Math.pow(2, 7);
var d0$1 = 1.6295499532821566e-11;

var pq = function (v) {
	var vn = Math.pow(v / 10000, n$1);
	return Math.pow((c1$1 + c2$1 * vn) / (1 + c3$1 * vn), p$1);
};

// Convert to Absolute XYZ
var abs$1 = function (v) {
	return Math.max(v * 203, 0);
};

var convertXyz65ToJab = function (ref) {
	var x = ref.x;
	var y = ref.y;
	var z = ref.z;
	var alpha = ref.alpha;

	x = abs$1(x);
	y = abs$1(y);
	z = abs$1(z);

	var xp = 1.15 * x - 0.15 * z;
	var yp = 0.66 * y + 0.34 * x;

	var l = pq(0.41478972 * xp + 0.579999 * yp + 0.014648 * z);
	var m = pq(-0.20151 * xp + 1.120649 * yp + 0.0531008 * z);
	var s = pq(-0.0166008 * xp + 0.2648 * yp + 0.6684799 * z);

	var i = (l + m) / 2;

	var res = {
		mode: 'jab',
		j: (0.44 * i) / (1 - 0.56 * i) - d0$1,
		a: 3.524 * l - 4.066708 * m + 0.542708 * s,
		b: 0.199076 * l + 1.096799 * m - 1.295875 * s
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

var n = 0.1593017578125; // = 2610 / Math.pow(2, 14);
var p = 134.03437499999998; // = 1.7 * 2523 / Math.pow(2, 5);
var c1 = 0.8359375; // = 3424 / Math.pow(2, 12);
var c2 = 18.8515625; // = 2413 / Math.pow(2, 7);
var c3 = 18.6875; // = 2392 / Math.pow(2, 7);
var d0 = 1.6295499532821566e-11;

var pq_inv = function (v) {
	var vp = Math.pow(v, 1 / p);
	return 10000 * Math.pow((c1 - vp) / (c3 * vp - c2), 1 / n);
};

var rel = function (v) {
	return v / 203;
};

var convertJabToXyz65 = function (ref) {
	var j = ref.j;
	var a = ref.a;
	var b = ref.b;
	var alpha = ref.alpha;

	var i = (j + d0) / (0.44 + 0.56 * (j + d0));

	var l = pq_inv(i + 0.13860504 * a + 0.058047316 * b);
	var m = pq_inv(i - 0.13860504 * a - 0.058047316 * b);
	var s = pq_inv(i - 0.096019242 * a - 0.8118919 * b);

	var res = {
		mode: 'xyz65',
		x: rel(
			1.661373024652174 * l -
				0.914523081304348 * m +
				0.23136208173913045 * s
		),
		y: rel(
			-0.3250758611844533 * l +
				1.571847026732543 * m -
				0.21825383453227928 * s
		),
		z: rel(-0.090982811 * l - 0.31272829 * m + 1.5227666 * s)
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

/*
	Convert sRGB to JzAzBz.

	For achromatic sRGB colors, adjust the equivalent JzAzBz color
	to be achromatic as well, insteading of having a very slight chroma.
 */

var convertRgbToJab = function (rgb) {
	var res = convertXyz65ToJab(convertRgbToXyz65(rgb));
	if (rgb.r === rgb.b && rgb.b === rgb.g) {
		res.a = res.b = 0;
	}
	return res;
};

var convertJabToRgb = function (color) {
	return convertXyz65ToRgb(convertJabToXyz65(color));
};

/*
	The JzAzBz color space.

	Based on:

	Muhammad Safdar, Guihua Cui, Youn Jin Kim, and Ming Ronnier Luo, 
	"Perceptually uniform color space for image signals 
	including high dynamic range and wide gamut," 
	Opt. Express 25, 15131-15151 (2017) 

	https://doi.org/10.1364/OE.25.015131
 */

var definition$f = {
	mode: 'jab',
	channels: ['j', 'a', 'b', 'alpha'],

	input: {
		rgb: convertRgbToJab,
		xyz65: convertXyz65ToJab
	},

	output: {
		rgb: convertJabToRgb,
		xyz65: convertJabToXyz65
	},

	ranges: {
		j: [0, 0.221],
		a: [-0.108, 0.129],
		b: [-0.185, 0.134]
	},

	interpolate: {
		j: interpolatorLinear,
		a: interpolatorLinear,
		b: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

var convertJabToJch = function (ref) {
	var j = ref.j;
	var a = ref.a;
	var b = ref.b;
	var alpha = ref.alpha;

	var c = Math.sqrt(a * a + b * b);
	var res = {
		mode: 'jch',
		j: j,
		c: c
	};
	if (c) {
		res.h = normalizeHue((Math.atan2(b, a) * 180) / Math.PI);
	}
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var convertJchToJab = function (ref) {
	var j = ref.j;
	var c = ref.c;
	var h = ref.h;
	var alpha = ref.alpha;

	var res = {
		mode: 'jab',
		j: j,
		a: c ? c * Math.cos((h / 180) * Math.PI) : 0,
		b: c ? c * Math.sin((h / 180) * Math.PI) : 0
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var definition$e = {
	mode: 'jch',

	output: {
		lab: convertJchToJab,
		rgb: function (c) {
			return convertJabToRgb(convertJchToJab(c));
		}
	},

	input: {
		rgb: function (c) {
			return convertJabToJch(convertRgbToJab(c));
		},
		lab: convertJabToJch
	},

	channels: ['j', 'c', 'h', 'alpha'],

	ranges: {
		j: [0, 0.221],
		c: [0, 0.19],
		h: [0, 360]
	},

	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		c: interpolatorLinear,
		j: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},

	difference: {
		h: differenceHueChroma
	},

	average: {
		h: averageAngle
	}
};

// D50 white
var Xn$1 = 0.96422;
var Yn$1 = 1.0;
var Zn$1 = 0.82521;

var k$1 = Math.pow(29, 3) / Math.pow(3, 3);
var e$1 = Math.pow(6, 3) / Math.pow(29, 3);

var fn$1 = function (v) {
	return Math.pow(v, 3) > e$1 ? Math.pow(v, 3) : (116 * v - 16) / k$1;
};

var convertLabToXyz = function (ref) {
	var l = ref.l;
	var a = ref.a;
	var b = ref.b;
	var alpha = ref.alpha;

	var fy = (l + 16) / 116;
	var fx = a / 500 + fy;
	var fz = fy - b / 200;

	var res = {
		mode: 'xyz',
		x: fn$1(fx) * Xn$1,
		y: fn$1(fy) * Yn$1,
		z: fn$1(fz) * Zn$1
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

var convertLabToRgb = function (lab) {
	return convertXyzToRgb(convertLabToXyz(lab));
};

var f$1 = function (value) {
	return value > e$1 ? Math.cbrt(value) : (k$1 * value + 16) / 116;
};

var convertXyzToLab = function (ref) {
	var x = ref.x;
	var y = ref.y;
	var z = ref.z;
	var alpha = ref.alpha;

	var f0 = f$1(x / Xn$1);
	var f1 = f$1(y / Yn$1);
	var f2 = f$1(z / Zn$1);

	var res = {
		mode: 'lab',
		l: 116 * f1 - 16,
		a: 500 * (f0 - f1),
		b: 200 * (f1 - f2)
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

var convertRgbToLab = function (rgb) {
	var res = convertXyzToLab(convertRgbToXyz(rgb));

	// Fixes achromatic RGB colors having a _slight_ chroma due to floating-point errors
	// and approximated computations in sRGB <-> CIELab.
	// See: https://github.com/d3/d3-color/pull/46
	if (rgb.r === rgb.b && rgb.b === rgb.g) {
		res.a = res.b = 0;
	}
	return res;
};

var parseLab = function (color) {
	var match = color.match(lab$1);
	if (!match) {
		return undefined;
	}

	var res = {
		mode: 'lab',
		l: +match[1],
		a: +match[2],
		b: +match[3]
	};

	if (match[4] !== undefined) {
		res.alpha = match[4] / 100;
	} else if (match[5] !== undefined) {
		res.alpha = +match[5];
	}

	return res;
};

var definition$d = {
	mode: 'lab',
	alias: ['lab-d50'],

	output: {
		xyz: convertLabToXyz,
		rgb: convertLabToRgb
	},

	input: {
		xyz: convertXyzToLab,
		rgb: convertRgbToLab
	},

	channels: ['l', 'a', 'b', 'alpha'],

	ranges: {
		l: [0, 100],
		a: [-79.167, 93.408],
		b: [-111.859, 93.246]
	},

	parsers: [parseLab],

	interpolate: {
		l: interpolatorLinear,
		a: interpolatorLinear,
		b: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

// D65 white
var Xn = 0.95047;
var Yn = 1.0;
var Zn = 1.08883;

var k = Math.pow(29, 3) / Math.pow(3, 3);
var e = Math.pow(6, 3) / Math.pow(29, 3);

var fn = function (v) {
	return Math.pow(v, 3) > e ? Math.pow(v, 3) : (116 * v - 16) / k;
};

var convertLab65ToXyz65 = function (ref) {
	var l = ref.l;
	var a = ref.a;
	var b = ref.b;
	var alpha = ref.alpha;

	var fy = (l + 16) / 116;
	var fx = a / 500 + fy;
	var fz = fy - b / 200;

	var res = {
		mode: 'xyz65',
		x: fn(fx) * Xn,
		y: fn(fy) * Yn,
		z: fn(fz) * Zn
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

var convertLab65ToRgb = function (lab) {
	return convertXyz65ToRgb(convertLab65ToXyz65(lab));
};

var f = function (value) {
	return value > e ? Math.cbrt(value) : (k * value + 16) / 116;
};

var convertXyz65ToLab65 = function (ref) {
	var x = ref.x;
	var y = ref.y;
	var z = ref.z;
	var alpha = ref.alpha;

	var f0 = f(x / Xn);
	var f1 = f(y / Yn);
	var f2 = f(z / Zn);

	var res = {
		mode: 'lab65',
		l: 116 * f1 - 16,
		a: 500 * (f0 - f1),
		b: 200 * (f1 - f2)
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

var convertRgbToLab65 = function (rgb) {
	var res = convertXyz65ToLab65(convertRgbToXyz65(rgb));

	// Fixes achromatic RGB colors having a _slight_ chroma due to floating-point errors
	// and approximated computations in sRGB <-> CIELab.
	// See: https://github.com/d3/d3-color/pull/46
	if (rgb.r === rgb.b && rgb.b === rgb.g) {
		res.a = res.b = 0;
	}
	return res;
};

var definition$c = Object.assign({}, definition$d, {
	mode: 'lab65',
	alias: ['lab-d65'],

	output: {
		xyz65: convertLab65ToXyz65,
		rgb: convertLab65ToRgb
	},

	input: {
		xyz65: convertXyz65ToLab65,
		rgb: convertRgbToLab65
	},

	ranges: {
		l: [0, 100],
		a: [-86.183, 98.234],
		b: [-107.86, 94.478]
	},

	parsers: []
});

/* 
	References: 
		* https://drafts.csswg.org/css-color/#lab-to-lch
		* https://drafts.csswg.org/css-color/#color-conversion-code
*/
var convertLabToLch = function (ref, mode) {
	var l = ref.l;
	var a = ref.a;
	var b = ref.b;
	var alpha = ref.alpha;
	if (mode === void 0) mode = 'lch';

	var c = Math.sqrt(a * a + b * b);
	var res = { mode: mode, l: l, c: c };
	if (c) {
		res.h = normalizeHue((Math.atan2(b, a) * 180) / Math.PI);
	}
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

/* 
	References: 
		* https://drafts.csswg.org/css-color/#lch-to-lab
		* https://drafts.csswg.org/css-color/#color-conversion-code
*/
var convertLchToLab = function (ref, mode) {
	var l = ref.l;
	var c = ref.c;
	var h = ref.h;
	var alpha = ref.alpha;
	if (mode === void 0) mode = 'lab';

	var res = {
		mode: mode,
		l: l,
		a: c ? c * Math.cos((h / 180) * Math.PI) : 0,
		b: c ? c * Math.sin((h / 180) * Math.PI) : 0
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var parseLch = function (color) {
	var match = color.match(lch$1);

	if (!match) {
		return undefined;
	}

	var res = {
		mode: 'lch',
		l: +match[1],
		c: Math.max(0, +match[2]),
		h: match[5] === undefined ? hue$1(match[3], match[4]) : +match[5]
	};

	if (match[6] !== undefined) {
		res.alpha = match[6] / 100;
	} else if (match[7] !== undefined) {
		res.alpha = +match[7];
	}

	return res;
};

var definition$b = {
	mode: 'lch',
	alias: ['lch-d50'],

	output: {
		lab: convertLchToLab,
		rgb: function (c) {
			return convertLabToRgb(convertLchToLab(c));
		}
	},

	input: {
		rgb: function (c) {
			return convertLabToLch(convertRgbToLab(c));
		},
		lab: convertLabToLch
	},

	channels: ['l', 'c', 'h', 'alpha'],

	ranges: {
		l: [0, 100],
		c: [0, 131.008],
		h: [0, 360]
	},

	parsers: [parseLch],

	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		c: interpolatorLinear,
		l: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},

	difference: {
		h: differenceHueChroma
	},

	average: {
		h: averageAngle
	}
};

var definition$a = Object.assign({}, definition$b, {
	mode: 'lch65',
	alias: ['lch-d65'],

	output: {
		lab65: function (c) {
			return convertLchToLab(c, 'lab65');
		},
		rgb: function (c) {
			return convertLab65ToRgb(convertLchToLab(c, 'lab65'));
		}
	},

	input: {
		rgb: function (c) {
			return convertLabToLch(convertRgbToLab65(c), 'lch65');
		},
		lab65: function (c) {
			return convertLabToLch(c, 'lch65');
		}
	},

	parsers: [],

	ranges: {
		l: [0, 100],
		c: [0, 133.807],
		h: [0, 360]
	}
});

var u_fn$1 = function (x, y, z) {
	return (4 * x) / (x + 15 * y + 3 * z);
};
var v_fn$1 = function (x, y, z) {
	return (9 * y) / (x + 15 * y + 3 * z);
};

var un$1 = u_fn$1(Xn$1, Yn$1, Zn$1);
var vn$1 = v_fn$1(Xn$1, Yn$1, Zn$1);

var l_fn = function (value) {
	return value <= e$1 ? k$1 * value : 116 * Math.cbrt(value) - 16;
};

var convertXyzToLuv = function (ref) {
	var x = ref.x;
	var y = ref.y;
	var z = ref.z;
	var alpha = ref.alpha;

	var l = l_fn(y / Yn$1);
	var u = u_fn$1(x, y, z);
	var v = v_fn$1(x, y, z);

	// guard against NaNs produced by `xyz(0 0 0)` black
	if (!isFinite(u) || !isFinite(v)) {
		l = u = v = 0;
	} else {
		u = 13 * l * (u - un$1);
		v = 13 * l * (v - vn$1);
	}

	var res = {
		mode: 'luv',
		l: l,
		u: u,
		v: v
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

var convertRgbToLuv = function (rgb) {
	return convertXyzToLuv(convertRgbToXyz(rgb));
};

var u_fn = function (x, y, z) {
	return (4 * x) / (x + 15 * y + 3 * z);
};
var v_fn = function (x, y, z) {
	return (9 * y) / (x + 15 * y + 3 * z);
};

var un = u_fn(Xn$1, Yn$1, Zn$1);
var vn = v_fn(Xn$1, Yn$1, Zn$1);

var convertLuvToXyz = function (ref) {
	var l = ref.l;
	var u = ref.u;
	var v = ref.v;
	var alpha = ref.alpha;

	var up = u / (13 * l) + un;
	var vp = v / (13 * l) + vn;
	var y = Yn$1 * (l <= 8 ? l / k$1 : Math.pow((l + 16) / 116, 3));
	var x = (y * (9 * up)) / (4 * vp);
	var z = (y * (12 - 3 * up - 20 * vp)) / (4 * vp);

	var res = { mode: 'xyz', x: x, y: y, z: z };
	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

var convertLuvToRgb = function (luv) {
	return convertXyzToRgb(convertLuvToXyz(luv));
};

/*
	CIELUV color space
	------------------

	Reference: 

		https://en.wikipedia.org/wiki/CIELUV
 */

var definition$9 = {
	mode: 'luv',

	output: {
		xyz: convertLuvToXyz,
		rgb: convertLuvToRgb
	},

	input: {
		xyz: convertXyzToLuv,
		rgb: convertRgbToLuv
	},

	channels: ['l', 'u', 'v', 'alpha'],

	ranges: {
		l: [0, 100],
		u: [-84.86, 174.87],
		v: [-125.744, 87.165]
	},

	interpolate: {
		l: interpolatorLinear,
		u: interpolatorLinear,
		v: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

var convertLuvToLchuv = function (ref) {
	var l = ref.l;
	var u = ref.u;
	var v = ref.v;
	var alpha = ref.alpha;

	var c = Math.sqrt(u * u + v * v);
	var res = {
		mode: 'lchuv',
		l: l,
		c: c
	};
	if (c) {
		res.h = normalizeHue((Math.atan2(v, u) * 180) / Math.PI);
	}
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var convertLchuvToLuv = function (ref) {
	var l = ref.l;
	var c = ref.c;
	var h = ref.h;
	var alpha = ref.alpha;

	var res = {
		mode: 'luv',
		l: l,
		u: c ? c * Math.cos((h / 180) * Math.PI) : 0,
		v: c ? c * Math.sin((h / 180) * Math.PI) : 0
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var convertLchuvToRgb = function (c) {
	return convertLuvToRgb(convertLchuvToLuv(c));
};

var convertRgbToLchuv = function (c) {
	return convertLuvToLchuv(convertRgbToLuv(c));
};

/*
	CIELChuv color space
	--------------------

	Reference: 

		https://en.wikipedia.org/wiki/CIELUV
 */

var definition$8 = {
	mode: 'lchuv',

	output: {
		luv: convertLchuvToLuv,
		rgb: convertLchuvToRgb
	},

	input: {
		rgb: convertRgbToLchuv,
		luv: convertLuvToLchuv
	},

	channels: ['l', 'c', 'h', 'alpha'],

	ranges: {
		l: [0, 100],
		c: [0, 131.008],
		h: [0, 360]
	},

	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		c: interpolatorLinear,
		l: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},

	difference: {
		h: differenceHueChroma
	},

	average: {
		h: averageAngle
	}
};

var M = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0];

var degToRad = Math.PI / 180;
var radToDeg = 180 / Math.PI;

/*
	Convert a RGB color to the Cubehelix HSL color space.

	This computation is not present in Green's paper:
	https://arxiv.org/pdf/1108.5083.pdf

	...but can be derived from the inverse, HSL to RGB conversion.

	It matches the math in Mike Bostock's D3 implementation:

	https://github.com/d3/d3-color/blob/master/src/cubehelix.js
 */

var DE = M[3] * M[4];
var BE = M[1] * M[4];
var BCAD = M[1] * M[2] - M[0] * M[3];

var convertRgbToCubehelix = function (ref) {
	var r = ref.r;
	var g = ref.g;
	var b = ref.b;
	var alpha = ref.alpha;

	var l = (BCAD * b + r * DE - g * BE) / (BCAD + DE - BE);
	var x = b - l;
	var y = (M[4] * (g - l) - M[2] * x) / M[3];

	var res = {
		mode: 'cubehelix',
		l: l,
		s:
			l === 0 || l === 1
				? undefined
				: Math.sqrt(x * x + y * y) / (M[4] * l * (1 - l))
	};

	if (res.s) {
		res.h = Math.atan2(y, x) * radToDeg - 120;
	}
	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

var convertCubehelixToRgb = function (ref) {
	var h = ref.h;
	var s = ref.s;
	var l = ref.l;
	var alpha = ref.alpha;

	var res = { mode: 'rgb' };

	h = (h === undefined ? 0 : h + 120) * degToRad;

	var amp = s === undefined ? 0 : s * l * (1 - l);

	var cosh = Math.cos(h);
	var sinh = Math.sin(h);

	res.r = l + amp * (M[0] * cosh + M[1] * sinh);
	res.g = l + amp * (M[2] * cosh + M[3] * sinh);
	res.b = l + amp * (M[4] * cosh + M[5] * sinh);

	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

/* 
	Dave Green's Cubehelix
	----------------------

	Green, D. A., 2011, "A colour scheme for the display of astronomical intensity images", 
	Bulletin of the Astronomical Society of India, 39, 289. (2011BASI...39..289G at ADS.) 

	https://www.mrao.cam.ac.uk/%7Edag/CUBEHELIX/
	https://arxiv.org/pdf/1108.5083.pdf

	Although Cubehelix was defined to be a method to obtain a colour scheme,
	it actually contains a definition of a colour space, as identified by 
	Mike Bostock and implemented in D3.js.

	Green's paper introduces the following terminology:

	* 	a `lightness` dimension in the interval [0, 1] 
		on which we interpolate to obtain the colour scheme
	*	a `start` colour that is analogous to a Hue in HSL space
	*	a number of `rotations` around the Hue cylinder.
	*	a `hue` parameter which should more appropriately be called `saturation`
	
	As such, the original definition of the Cubehelix scheme is actually an
	interpolation between two colors in the Cubehelix space:

	H: start 				H: start + 360 * rotations
	S: hue 			->		S: hue
	L: 0					L: 1

	We can therefore extend the interpolation to any two colors in this space,
	with a variable Saturation and a Lightness interval other than the fixed 0 -> 1.
*/

var definition$7 = {
	mode: 'cubehelix',
	channels: ['h', 's', 'l', 'alpha'],

	ranges: {
		h: [0, 360],
		s: [0, 4.6143]
	},

	input: {
		rgb: convertRgbToCubehelix
	},

	output: {
		rgb: convertCubehelixToRgb
	},

	interpolate: {
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		s: interpolatorLinear,
		l: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},

	difference: {
		h: differenceHueSaturation
	},

	average: {
		h: averageAngle
	}
};

var convertDlabToDlch = function (ref) {
	var l = ref.l;
	var a = ref.a;
	var b = ref.b;
	var alpha = ref.alpha;

	var c = Math.sqrt(a * a + b * b);
	var res = {
		mode: 'dlch',
		l: l,
		c: c
	};
	if (c) {
		res.h = normalizeHue((Math.atan2(b, a) * 180) / Math.PI);
	}
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var kE = 1;
var kCH = 1;
var θ = (26 / 180) * Math.PI;
var cosθ = Math.cos(θ);
var sinθ = Math.sin(θ);
var factor = 100 / Math.log(139 / 100); // ~ 303.67

/*
	Convert DIN99o LCh to CIELab D65
	--------------------------------
 */

var convertDlchToLab65 = function (ref) {
	var l = ref.l;
	var c = ref.c;
	var h = ref.h;
	var alpha = ref.alpha;

	var res = {
		mode: 'lab65',
		l: (Math.exp((l * kE) / factor) - 1) / 0.0039
	};

	if (h === undefined) {
		res.a = res.b = 0;
	} else {
		var G = (Math.exp(0.0435 * c * kCH * kE) - 1) / 0.075;
		var e = G * Math.cos((h / 180) * Math.PI - θ);
		var f = G * Math.sin((h / 180) * Math.PI - θ);
		res.a = e * cosθ - (f / 0.83) * sinθ;
		res.b = e * sinθ + (f / 0.83) * cosθ;
	}

	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var convertDlabToLab65 = function (c) {
	return convertDlchToLab65(convertDlabToDlch(c));
};

/*
	Convert CIELab D65 to DIN99o LCh
	================================
 */

var convertLab65ToDlch = function (ref) {
	var l = ref.l;
	var a = ref.a;
	var b = ref.b;
	var alpha = ref.alpha;

	var e = a * cosθ + b * sinθ;
	var f = 0.83 * (b * cosθ - a * sinθ);
	var G = Math.sqrt(e * e + f * f);
	var res = {
		mode: 'dlch',
		l: (factor / kE) * Math.log(1 + 0.0039 * l),
		c: Math.log(1 + 0.075 * G) / (0.0435 * kCH * kE)
	};

	if (res.c) {
		res.h = normalizeHue(((Math.atan2(f, e) + θ) / Math.PI) * 180);
	}

	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var convertDlchToDlab = function (ref) {
	var l = ref.l;
	var c = ref.c;
	var h = ref.h;
	var alpha = ref.alpha;

	var res = {
		mode: 'dlab',
		l: l,
		a: c === 0 ? 0 : c * Math.cos((h / 180) * Math.PI),
		b: c === 0 ? 0 : c * Math.sin((h / 180) * Math.PI)
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var convertLab65ToDlab = function (c) {
	return convertDlchToDlab(convertLab65ToDlch(c));
};

var definition$6 = {
	mode: 'dlab',

	output: {
		lab65: convertDlabToLab65,
		rgb: function (c) {
			return convertLab65ToRgb(convertDlabToLab65(c));
		}
	},

	input: {
		lab65: convertLab65ToDlab,
		rgb: function (c) {
			return convertLab65ToDlab(convertRgbToLab65(c));
		}
	},

	channels: ['l', 'a', 'b', 'alpha'],

	ranges: {
		l: [0, 100],
		a: [-40.09, 45.5],
		b: [-40.47, 44.344]
	},

	interpolate: {
		l: interpolatorLinear,
		a: interpolatorLinear,
		b: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
};

var definition$5 = {
	mode: 'dlch',

	output: {
		lab65: convertDlchToLab65,
		dlab: convertDlchToDlab,
		rgb: function (c) {
			return convertLab65ToRgb(convertDlchToLab65(c));
		}
	},

	input: {
		lab65: convertLab65ToDlch,
		dlab: convertDlabToDlch,
		rgb: function (c) {
			return convertLab65ToDlch(convertRgbToLab65(c));
		}
	},

	channels: ['l', 'c', 'h', 'alpha'],

	ranges: {
		l: [0, 100],
		c: [0, 51.484],
		h: [0, 360]
	},

	interpolate: {
		l: interpolatorLinear,
		c: interpolatorLinear,
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},

	difference: {
		h: differenceHueChroma
	},

	average: {
		h: averageAngle
	}
};

/*
	The XYZ D50 color space
	-----------------------
 */

var definition$4 = {
	mode: 'xyz',
	alias: ['xyz-d50'],

	output: {
		rgb: convertXyzToRgb,
		lab: convertXyzToLab
	},

	input: {
		rgb: convertRgbToXyz,
		lab: convertLabToXyz
	},

	channels: ['x', 'y', 'z', 'alpha'],

	ranges: {
		x: [0, 0.962],
		y: [0, 0.997],
		z: [0, 0.823]
	},

	interpolate: {
		x: interpolatorLinear,
		y: interpolatorLinear,
		z: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

/*
	Chromatic adaptation of CIE XYZ from D65 to D50 white point
	using the Bradford method.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_ChromAdapt.html	
*/

var convertXyz65ToXyz = function (xyz65) {
	var x = xyz65.x;
	var y = xyz65.y;
	var z = xyz65.z;
	var alpha = xyz65.alpha;
	var res = {
		mode: 'xyz',
		x: 1.0478112 * x + 0.0228866 * y - 0.050127 * z,
		y: 0.0295424 * x + 0.9904844 * y - 0.0170491 * z,
		z: -0.0092345 * x + 0.0150436 * y + 0.7521316 * z
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

/*
	Chromatic adaptation of CIE XYZ from D50 to D65 white point
	using the Bradford method.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_ChromAdapt.html	
*/

var convertXyzToXyz65 = function (xyz) {
	var x = xyz.x;
	var y = xyz.y;
	var z = xyz.z;
	var alpha = xyz.alpha;
	var res = {
		mode: 'xyz65',
		x: 0.9555766 * x - 0.0230393 * y + 0.0631636 * z,
		y: -0.0282895 * x + 1.0099416 * y + 0.0210077 * z,
		z: 0.0122982 * x - 0.020483 * y + 1.3299098 * z
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

/*
	The XYZ D65 color space
	-----------------------
 */

var definition$3 = {
	mode: 'xyz65',
	alias: ['xyz-d65'],

	output: {
		rgb: convertXyz65ToRgb,
		xyz: convertXyz65ToXyz
	},

	input: {
		rgb: convertRgbToXyz65,
		xyz: convertXyzToXyz65
	},

	ranges: {
		x: [0, 0.946],
		y: [0, 0.995],
		z: [0, 1.083]
	},

	channels: ['x', 'y', 'z', 'alpha'],

	interpolate: {
		x: interpolatorLinear,
		y: interpolatorLinear,
		z: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

var convertRgbToYiq = function (rgb) {
	var ref = convertRgbToLrgb(rgb);
	var r = ref.r;
	var g = ref.g;
	var b = ref.b;
	var alpha = ref.alpha;
	var res = {
		mode: 'yiq',
		y: 0.29889531 * r + 0.58662247 * g + 0.11448223 * b,
		i: 0.59597799 * r - 0.2741761 * g - 0.32180189 * b,
		q: 0.21147017 * r - 0.52261711 * g + 0.31114694 * b
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

var convertYiqToRgb = function (ref) {
	var y = ref.y;
	var i = ref.i;
	var q = ref.q;
	var alpha = ref.alpha;

	return convertLrgbToRgb({
		r: y + 0.95608445 * i + 0.6208885 * q,
		g: y - 0.27137664 * i - 0.6486059 * q,
		b: y - 1.10561724 * i + 1.70250126 * q,
		alpha: alpha
	});
};

/*
	YIQ Color Space

	References
	----------

	Wikipedia:
		https://en.wikipedia.org/wiki/YIQ

	"Measuring perceived color difference using YIQ NTSC
	transmission color space in mobile applications"
		
		by Yuriy Kotsarenko, Fernando Ramos in:
		Programación Matemática y Software (2010) 

	Available at:
		
		http://www.progmat.uaem.mx:8080/artVol2Num2/Articulo3Vol2Num2.pdf
 */

var definition$2 = {
	mode: 'yiq',

	output: {
		rgb: convertYiqToRgb
	},

	input: {
		rgb: convertRgbToYiq
	},

	channels: ['y', 'i', 'q', 'alpha'],

	ranges: {
		i: [-0.593, 0.593],
		q: [-0.52, 0.52]
	},

	interpolate: {
		y: interpolatorLinear,
		i: interpolatorLinear,
		q: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

var convertOklabToLrgb = function (ref) {
	var l = ref.l;
	var a = ref.a;
	var b = ref.b;
	var alpha = ref.alpha;

	var L = Math.pow(l + 0.3963377774 * a + 0.2158037573 * b, 3);
	var M = Math.pow(l - 0.1055613458 * a - 0.0638541728 * b, 3);
	var S = Math.pow(l - 0.0894841775 * a - 1.291485548 * b, 3);

	var res = {
		mode: 'lrgb',
		r: +4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
		g: -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
		b: -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

var convertLrgbToOklab = function (ref) {
	var r = ref.r;
	var g = ref.g;
	var b = ref.b;
	var alpha = ref.alpha;

	var L = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
	var M = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
	var S = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);

	var res = {
		mode: 'oklab',
		l: 0.2104542553 * L + 0.793617785 * M - 0.0040720468 * S,
		a: 1.9779984951 * L - 2.428592205 * M + 0.4505937099 * S,
		b: 0.0259040371 * L + 0.7827717662 * M - 0.808675766 * S
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

var convertRgbToOklab = function (rgb) {
	var res = convertLrgbToOklab(convertRgbToLrgb(rgb));
	if (rgb.r === rgb.b && rgb.b === rgb.g) {
		res.a = res.b = 0;
	}
	return res;
};

var convertOklabToRgb = function (c) {
	return convertLrgbToRgb(convertOklabToLrgb(c));
};

/*
	Oklab, a perceptual color space for image processing by Björn Ottosson
	Reference: https://bottosson.github.io/posts/oklab/
 */

var definition$1 = Object.assign({}, definition$d, {
	mode: 'oklab',
	alias: [],

	output: {
		lrgb: convertOklabToLrgb,
		rgb: convertOklabToRgb
	},

	input: {
		lrgb: convertLrgbToOklab,
		rgb: convertRgbToOklab
	},

	ranges: {
		l: [0, 0.999],
		a: [-0.233, 0.276],
		b: [-0.311, 0.198]
	},

	parsers: []
});

var definition = Object.assign({}, definition$b, {
	mode: 'oklch',
	alias: [],

	output: {
		oklab: function (c) {
			return convertLchToLab(c, 'oklab');
		},
		rgb: function (c) {
			return convertOklabToRgb(convertLchToLab(c, 'oklab'));
		}
	},

	input: {
		rgb: function (c) {
			return convertLabToLch(convertRgbToOklab(c), 'oklch');
		},
		oklab: function (c) {
			return convertLabToLch(c, 'oklch');
		}
	},

	parsers: [],

	ranges: {
		l: [0, 0.999],
		c: [0, 0.322],
		h: [0, 360]
	}
});

// From: https://github.com/d3/d3-format/issues/32

var r = function (value, precision) {
	return (
		Math.round(value * (precision = Math.pow(10, precision))) / precision
	);
};

var round = function (precision) {
	if (precision === void 0) precision = 4;

	return function (value) {
		return typeof value === 'number' ? r(value, precision) : value;
	};
};

var rgb$4 = converter('rgb');
var hsl$1 = converter('hsl');
var twoDecimals = round(2);

var clamp$2 = function (value) {
	return Math.max(0, Math.min(1, value));
};
var fixup = function (value) {
	return Math.round(clamp$2(value) * 255);
};

var formatHex = function (c) {
	var color = rgb$4(c);

	if (color === undefined) {
		return undefined;
	}

	var r = fixup(color.r);
	var g = fixup(color.g);
	var b = fixup(color.b);

	return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
};

var formatHex8 = function (c) {
	var color = rgb$4(c);

	if (color === undefined) {
		return undefined;
	}

	var a = fixup(color.alpha !== undefined ? color.alpha : 1);

	return formatHex(color) + ((1 << 8) | a).toString(16).slice(1);
};

var formatRgb = function (c) {
	var color = rgb$4(c);

	if (color === undefined) {
		return undefined;
	}

	var r = fixup(color.r);
	var g = fixup(color.g);
	var b = fixup(color.b);

	if (color.alpha === undefined || color.alpha === 1) {
		// opaque color
		return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	} else {
		// transparent color
		return (
			'rgba(' +
			r +
			', ' +
			g +
			', ' +
			b +
			', ' +
			twoDecimals(clamp$2(color.alpha)) +
			')'
		);
	}
};

var formatHsl = function (c) {
	var color = hsl$1(c);

	if (color === undefined) {
		return undefined;
	}

	var h = twoDecimals(color.h || 0);
	var s = twoDecimals(clamp$2(color.s) * 100);
	var l = twoDecimals(clamp$2(color.l) * 100);

	if (color.alpha === undefined || color.alpha === 1) {
		// opaque color
		return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
	} else {
		// transparent color
		return (
			'hsla(' +
			h +
			', ' +
			s +
			'%, ' +
			l +
			'%, ' +
			twoDecimals(clamp$2(color.alpha)) +
			')'
		);
	}
};

// Deprecated / no longer documented
var formatter = function (format) {
	if (format === void 0) format = 'rgb';

	switch (format) {
		case 'rgb':
			return formatRgb;
		case 'hex':
			return formatHex;
	}
	return undefined;
};

/*
	Normalize an array of color stop positions for a gradient
	based on the rules defined in the CSS Images Module 4 spec:

	1. make the first position 0 and the last position 1 if missing
	2. sequences of unpositioned color stops should be spread out evenly
	3. no position can be smaller than any of the ones preceding it
	
	Reference: https://drafts.csswg.org/css-images-4/#color-stop-fixup

	Note: this method does not make a defensive copy of the array
	it receives as argument. Instead, it adjusts the values in-place.
 */
var normalizePositions = function (arr) {
	// 1. fix up first/last position if missing
	if (arr[0] === undefined) {
		arr[0] = 0;
	}
	if (arr[arr.length - 1] === undefined) {
		arr[arr.length - 1] = 1;
	}

	var i = 1;
	var j;
	var from_idx;
	var from_pos;
	var inc;
	while (i < arr.length) {
		// 2. fill up undefined positions
		if (arr[i] === undefined) {
			from_idx = i;
			from_pos = arr[i - 1];
			j = i;

			// find end of `undefined` sequence...
			while (arr[j] === undefined) {
				j++;
			}

			// ...and add evenly-spread positions
			inc = (arr[j] - from_pos) / (j - i + 1);
			while (i < j) {
				arr[i] = from_pos + (i + 1 - from_idx) * inc;
				i++;
			}
		} else if (arr[i] < arr[i - 1]) {
			// 3. make positions increase
			arr[i] = arr[i - 1];
		}
		i++;
	}
	return arr;
};

// Color interpolation hint exponential function
var midpoint = function (H) {
	if (H === void 0) H = 0.5;

	return function (t) {
		return H <= 0
			? 1
			: H >= 1
			? 0
			: Math.pow(t, Math.log(0.5) / Math.log(H));
	};
};

var mapper = function (fn, mode, preserve_mode) {
	if (mode === void 0) mode = 'rgb';
	if (preserve_mode === void 0) preserve_mode = false;

	var channels = mode ? getModeDefinition(mode).channels : null;
	var conv = mode ? converter(mode) : prepare;
	return function (color) {
		var conv_color = conv(color);
		var res = (channels || getModeDefinition(color.mode).channels).reduce(
			function (res, ch) {
				var v = fn(conv_color[ch], ch, conv_color, mode);
				if (v !== undefined && !isNaN(v)) {
					res[ch] = v;
				}
				return res;
			},
			{ mode: mode }
		);
		if (!preserve_mode) {
			return res;
		}
		var prep = prepare(color);
		if (prep && prep.mode !== res.mode) {
			return converter(prep.mode)(res);
		}
		return res;
	};
};

var mapAlphaMultiply = function (v, ch, c) {
	if (ch !== 'alpha') {
		return (v || 0) * (c.alpha !== undefined ? c.alpha : 1);
	}
	return v;
};

var mapAlphaDivide = function (v, ch, c) {
	if (ch !== 'alpha' && c.alpha !== 0) {
		return (v || 0) / (c.alpha !== undefined ? c.alpha : 1);
	}
	return v;
};

var mapTransferLinear = function (slope, intercept) {
	if (slope === void 0) slope = 1;
	if (intercept === void 0) intercept = 0;

	return function (v, ch) {
		if (ch !== 'alpha') {
			return v * slope + intercept;
		}
		return v;
	};
};

var mapTransferGamma = function (amplitude, exponent, offset) {
	if (amplitude === void 0) amplitude = 1;
	if (exponent === void 0) exponent = 1;
	if (offset === void 0) offset = 0;

	return function (v, ch) {
		if (ch !== 'alpha') {
			return amplitude * Math.pow(v, exponent) + offset;
		}
		return v;
	};
};

var isfn = function (o) {
	return typeof o === 'function';
};
var isobj = function (o) {
	return o && typeof o === 'object';
};
var isnum = function (o) {
	return typeof o === 'number';
};

var interpolate_fn = function (colors, mode, overrides, premap) {
	if (mode === void 0) mode = 'rgb';

	var def = getModeDefinition(mode);
	var conv = converter(mode);

	var conv_colors = [];
	var positions = [];
	var fns = {};

	colors.forEach(function (val) {
		if (Array.isArray(val)) {
			conv_colors.push(conv(val[0]));
			positions.push(val[1]);
		} else if (isnum(val) || isfn(val)) {
			// Color interpolation hint or easing function
			fns[positions.length] = val;
		} else {
			conv_colors.push(conv(val));
			positions.push(undefined);
		}
	});

	normalizePositions(positions);

	// override the default interpolators
	// from the color space definition with any custom ones
	var fixed = def.channels.reduce(function (res, ch) {
		var ffn;
		if (isobj(overrides) && isobj(overrides[ch]) && overrides[ch].fixup) {
			ffn = overrides[ch].fixup;
		} else if (isobj(def.interpolate[ch]) && def.interpolate[ch].fixup) {
			ffn = def.interpolate[ch].fixup;
		} else {
			ffn = function (v) {
				return v;
			};
		}
		res[ch] = ffn(
			conv_colors.map(function (color) {
				return color[ch];
			})
		);
		return res;
	}, {});

	if (premap) {
		var ccolors = conv_colors.map(function (color, idx) {
			return def.channels.reduce(
				function (c, ch) {
					c[ch] = fixed[ch][idx];
					return c;
				},
				{ mode: mode }
			);
		});
		fixed = def.channels.reduce(function (res, ch) {
			res[ch] = ccolors.map(function (c) {
				var v = premap(c[ch], ch, c, mode);
				return isNaN(v) ? undefined : v;
			});
			return res;
		}, {});
	}

	var interpolators = def.channels.reduce(function (res, ch) {
		var ifn;
		if (isfn(overrides)) {
			ifn = overrides;
		} else if (isobj(overrides) && isfn(overrides[ch])) {
			ifn = overrides[ch];
		} else if (
			isobj(overrides) &&
			isobj(overrides[ch]) &&
			overrides[ch].use
		) {
			ifn = overrides[ch].use;
		} else if (isfn(def.interpolate[ch])) {
			ifn = def.interpolate[ch];
		} else if (isobj(def.interpolate[ch])) {
			ifn = def.interpolate[ch].use;
		}

		res[ch] = ifn(fixed[ch]);
		return res;
	}, {});

	var n = conv_colors.length - 1;

	return function (t) {
		// clamp t to the [0, 1] interval
		t = Math.min(Math.max(0, t), 1);

		if (t <= positions[0]) {
			return conv_colors[0];
		}

		if (t > positions[n]) {
			return conv_colors[n];
		}

		// Convert `t` from [0, 1] to `t0` between the appropriate two colors.
		// First, look for the two colors between which `t` is located.
		// Note: this can be optimized by searching for the index
		// through bisection instead of start-to-end.
		var idx = 0;
		while (positions[idx] < t) {
			idx++;
		}
		var start = positions[idx - 1];
		var delta = positions[idx] - start;

		var P = (t - start) / delta;

		// use either the local easing, or the global easing, if any
		var fn = fns[idx] || fns[0];
		if (fn !== undefined) {
			if (isnum(fn)) {
				fn = midpoint((fn - start) / delta);
			}
			P = fn(P);
		}

		var t0 = (idx - 1 + P) / n;

		return def.channels.reduce(
			function (res, channel) {
				var val = interpolators[channel](t0);
				if (val !== undefined) {
					res[channel] = val;
				}
				return res;
			},
			{ mode: mode }
		);
	};
};

var interpolate = function (colors, mode, overrides) {
	if (mode === void 0) mode = 'rgb';

	return interpolate_fn(colors, mode, overrides);
};

var interpolateWith = function (premap, postmap) {
	return function (colors, mode, overrides) {
		if (mode === void 0) mode = 'rgb';

		var post = postmap ? mapper(postmap, mode) : undefined;
		var it = interpolate_fn(colors, mode, overrides, premap);
		return post
			? function (t) {
					return post(it(t));
			  }
			: it;
	};
};

var interpolateWithPremultipliedAlpha = interpolateWith(
	mapAlphaMultiply,
	mapAlphaDivide
);

/* 
	Sinusoidal (cosine) in-out easing
*/
var inOutSine = function (t) {
	return (1 - Math.cos(t * Math.PI)) / 2;
};

/*
	Cosine interpolation
	--------------------

	Reference: 

		http://paulbourke.net/miscellaneous/interpolation/
 */

// @deprecated
var cosine = function (fixup, γ) {
	if (γ === void 0) γ = 1;

	return function (arr) {
		var ease = gamma$3(γ);
		var interpolator = interpolatorPiecewise(function (a, b, t) {
			return lerp$1(a, b, inOutSine(t));
		})(
			(
				fixup ||
				function (v) {
					return v;
				}
			)(arr)
		);
		return function (t) {
			return interpolator(ease(t));
		};
	};
};

/*
	Basis spline
	------------

	Given control points V0...Vn (our values)

		S0 = V0
		...
		Si = 1/6 * Vi-1 + 2/3 * Vi + 1/6 * Vi+1
		...
		Sn = Vn

	The Bézier curve has control points:

		Bi = Si-1, 2/3 * Vi-1 + 1/3 * Vi, 1/3 * Vi-1 + 2/3 * Vi, Si

	Which we can then factor into the Bezier's explicit form:
	
		B(t) = (1-t)^3 * P0 + 3 * (1-t)^2 * t * P1 + (1-t) * t^2 * P2 + t^3 * P3 

 */

var bspline = function (Vim2, Vim1, Vi, Vip1, t) {
	var t2 = t * t;
	var t3 = t2 * t;
	return (
		((1 - 3 * t + 3 * t2 - t3) * Vim2 +
			(4 - 6 * t2 + 3 * t3) * Vim1 +
			(1 + 3 * t + 3 * t2 - 3 * t3) * Vi +
			t3 * Vip1) /
		6
	);
};

var interpolatorSplineBasis = function (arr) {
	return function (t) {
		var classes = arr.length - 1;
		var i = t === 1 ? classes - 1 : Math.floor(t * classes);
		return bspline(
			i > 0 ? arr[i - 1] : 2 * arr[i] - arr[i + 1],
			arr[i],
			arr[i + 1],
			i < classes - 1 ? arr[i + 2] : 2 * arr[i + 1] - arr[i],
			(t - i / classes) * classes
		);
	};
};

var interpolatorSplineBasisClosed = function (arr) {
	return function (t) {
		var classes = arr.length - 1;
		var i = t === 1 ? classes - 1 : Math.floor(t * classes);
		return bspline(
			arr[(i - 1 + arr.length) % arr.length],
			arr[i],
			arr[(i + 1) % arr.length],
			arr[(i + 2) % arr.length],
			(t - i / classes) * classes
		);
	};
};

var interpolateSplineBasis = function (fixup, type, γ) {
	if (type === void 0) type = 'default';
	if (γ === void 0) γ = 1;

	return function (arr) {
		var ease = gamma$3(γ);
		if (type === 'default') {
			return function (t) {
				return interpolatorSplineBasis(
					(
						fixup ||
						function (v) {
							return v;
						}
					)(arr)
				)(ease(t));
			};
		} else if (type === 'closed') {
			return function (t) {
				return interpolatorSplineBasisClosed(
					(
						fixup ||
						function (v) {
							return v;
						}
					)(arr)
				)(ease(t));
			};
		}
	};
};

var solve = function (v) {
	var i;
	var n = v.length - 1;
	var c = new Array(n);
	var _v = new Array(n);
	var sol = new Array(n);

	c[1] = 1 / 4;
	_v[1] = (6 * v[1] - v[0]) / 4;

	for (i = 2; i < n; ++i) {
		c[i] = 1 / (4 - c[i - 1]);
		_v[i] = (6 * v[i] - (i == n - 1 ? v[n] : 0) - _v[i - 1]) * c[i];
	}

	sol[0] = v[0];
	sol[n] = v[n];
	if (n - 1 > 0) {
		sol[n - 1] = _v[n - 1];
	}

	for (i = n - 2; i > 0; --i) {
		sol[i] = _v[i] - c[i] * sol[i + 1];
	}

	return sol;
};

var interpolatorSplineNatural = function (arr) {
	return interpolatorSplineBasis(solve(arr));
};
var interpolatorSplineNaturalClosed = function (arr) {
	return interpolatorSplineBasisClosed(solve(arr));
};

var interpolateSplineNatural = function (fixup, type, γ) {
	if (type === void 0) type = 'default';
	if (γ === void 0) γ = 1;

	return function (arr) {
		var ease = gamma$3(γ);
		if (type === 'default') {
			return function (t) {
				return interpolatorSplineNatural(
					(
						fixup ||
						function (v) {
							return v;
						}
					)(arr)
				)(ease(t));
			};
		} else if (type === 'closed') {
			return function (t) {
				return interpolatorSplineNaturalClosed(
					(
						fixup ||
						function (v) {
							return v;
						}
					)(arr)
				)(ease(t));
			};
		}
	};
};

/* 
	Monotone spline
	---------------

	Based on:

		Steffen, M.
		"A simple method for monotonic interpolation in one dimension."
		in Astronomy and Astrophysics, Vol. 239, p. 443-450 (Nov. 1990),
      	Provided by the SAO/NASA Astrophysics Data System.

		https://ui.adsabs.harvard.edu/abs/1990A&A...239..443S

	(Reference thanks to `d3/d3-shape`)
*/

var sgn = Math.sign;
var min = Math.min;
var abs = Math.abs;

var mono = function (arr) {
	var n = arr.length - 1;
	var s = [];
	var p = [];
	var yp = [];
	for (var i = 0; i < n; i++) {
		s.push((arr[i + 1] - arr[i]) * n);
		p.push(i > 0 ? 0.5 * (arr[i + 1] - arr[i - 1]) * n : undefined);
		yp.push(
			i > 0
				? (sgn(s[i - 1]) + sgn(s[i])) *
						min(abs(s[i - 1]), abs(s[i]), 0.5 * abs(p[i]))
				: undefined
		);
	}
	return [s, p, yp];
};

var interpolator = function (arr, yp, s) {
	var n = arr.length - 1;
	var n2 = n * n;
	return function (t) {
		var i;
		if (t === 1) {
			i = n - 1;
			t = 1;
		} else {
			i = Math.floor(t * n);
		}
		var t1 = t - i / n;
		var t2 = t1 * t1;
		var t3 = t2 * t1;
		return (
			(yp[i] + yp[i + 1] - 2 * s[i]) * n2 * t3 +
			(3 * s[i] - 2 * yp[i] - yp[i + 1]) * n * t2 +
			yp[i] * t1 +
			arr[i]
		);
	};
};

/*
	A monotone spline which uses one-sided finite differences
	at the boundaries.
 */
var interpolatorSplineMonotone = function (arr) {
	if (arr.length < 3) {
		return interpolatorLinear(arr);
	}
	var n = arr.length - 1;
	var ref = mono(arr);
	var s = ref[0];
	var yp = ref[2];
	yp[0] = s[0];
	yp[n] = s[n - 1];
	return interpolator(arr, yp, s);
};

/*
	The clamped monotone spline derives the values of y' 
	at the boundary points by tracing a parabola 
	through the first/last three points.

	For arrays of fewer than three values, we fall back to 
	linear interpolation.
 */

var interpolatorSplineMonotone2 = function (arr) {
	if (arr.length < 3) {
		return interpolatorLinear(arr);
	}
	var n = arr.length - 1;
	var ref = mono(arr);
	var s = ref[0];
	var p = ref[1];
	var yp = ref[2];
	p[0] = (arr[1] * 2 - arr[0] * 1.5 - arr[2] * 0.5) * n;
	p[n] = (arr[n] * 1.5 - arr[n - 1] * 2 + arr[n - 2] * 0.5) * n;
	yp[0] = p[0] * s[0] <= 0 ? 0 : abs(p[0]) > 2 * abs(s[0]) ? 2 * s[0] : p[0];
	yp[n] =
		p[n] * s[n - 1] <= 0
			? 0
			: abs(p[n]) > 2 * abs(s[n - 1])
			? 2 * s[n - 1]
			: p[n];
	return interpolator(arr, yp, s);
};

/*
	The closed monotone spline considers 
	the array to be periodic:

	arr[-1] = arr[arr.length - 1]
	arr[arr.length] = arr[0]

	...and so on.
 */
var interpolatorSplineMonotoneClosed = function (arr) {
	var n = arr.length - 1;
	var ref = mono(arr);
	var s = ref[0];
	var p = ref[1];
	var yp = ref[2];
	// boundary conditions
	p[0] = 0.5 * (arr[1] - arr[n]) * n;
	p[n] = 0.5 * (arr[0] - arr[n - 1]) * n;
	var s_m1 = (arr[0] - arr[n]) * n;
	var s_n = s_m1;
	yp[0] =
		(sgn(s_m1) + sgn(s[0])) * min(abs(s_m1), abs(s[0]), 0.5 * abs(p[0]));
	yp[n] =
		(sgn(s[n - 1]) + sgn(s_n)) *
		min(abs(s[n - 1]), abs(s_n), 0.5 * abs(p[n]));
	return interpolator(arr, yp, s);
};

var interpolateSplineMonotone = function (fixup, type, γ) {
	if (type === void 0) type = 'default';
	if (γ === void 0) γ = 1;

	return function (arr) {
		var ease = gamma$3(γ);
		if (type === 'closed') {
			return function (t) {
				return interpolatorSplineMonotoneClosed(
					(
						fixup ||
						function (v) {
							return v;
						}
					)(arr)
				)(ease(t));
			};
		} else if (type === 'default') {
			return function (t) {
				return interpolatorSplineMonotone(
					(
						fixup ||
						function (v) {
							return v;
						}
					)(arr)
				)(ease(t));
			};
		}
	};
};

var samples = function (n, γ) {
	if (n === void 0) n = 2;
	if (γ === void 0) γ = 1;

	var ease = gamma$3(γ);
	if (n < 2) {
		return n < 1 ? [] : [ease(0.5)];
	}
	var res = [];
	for (var i = 0; i < n; i++) {
		res.push(ease(i / (n - 1)));
	}
	return res;
};

var rgb$3 = converter('rgb');

var displayable = function (color) {
	var c = rgb$3(color);
	return (
		c !== undefined &&
		c.r >= 0 &&
		c.r <= 1 &&
		c.g >= 0 &&
		c.g <= 1 &&
		c.b >= 0 &&
		c.b <= 1
	);
};

var rgb$2 = converter('rgb');

var fixup_rgb = function (color) {
	var c = rgb$2(color);
	c.r = Math.max(0, Math.min(c.r, 1));
	c.g = Math.max(0, Math.min(c.g, 1));
	c.b = Math.max(0, Math.min(c.b, 1));
	return c;
};

var clampRgb = function (color) {
	color = prepare(color);

	// if the color is undefined or displayable, return it directly
	if (color === undefined || displayable(color)) {
		return color;
	}

	// keep track of color's original mode
	var conv = converter(color.mode);

	return conv(fixup_rgb(color));
};

var clampChroma = function (color, mode) {
	if (mode === void 0) mode = 'lch';

	color = prepare(color);

	// if the color is undefined or displayable, return it directly
	if (color === undefined || displayable(color)) {
		return color;
	}

	// keep track of color's original mode
	var conv = converter(color.mode);

	// convert to the provided `mode` for clamping
	color = converter(mode)(color);

	// try with chroma = 0
	var clamped = Object.assign({}, color, { c: 0 });

	// if not even chroma = 0 is displayable
	// fall back to RGB clamping
	if (!displayable(clamped)) {
		return conv(fixup_rgb(clamped));
	}

	// By this time we know chroma = 0 is displayable and our current chroma is not.
	// Find the displayable chroma through the bisection method.
	var start = 0;
	var end = color.c;
	var range = getModeDefinition(mode).ranges.c;
	var resolution = (range[1] - range[0]) / Math.pow(2, 13);
	var _last_good_c;

	while (end - start > resolution) {
		clamped.c = start + (end - start) * 0.5;
		if (displayable(clamped)) {
			_last_good_c = clamped.c;
			start = clamped.c;
		} else {
			end = clamped.c;
		}
	}

	return conv(
		displayable(clamped)
			? clamped
			: Object.assign({}, clamped, { c: _last_good_c })
	);
};

// Deprecated / no longer documented
var clamp$1 = function (method) {
	if (method === void 0) method = 'rgb';

	switch (method) {
		case 'rgb':
			return clampRgb;
		case 'lch':
			return clampChroma;
	}
};

/*
	This works linearly right now, but we might get better performance
	with a V-P Tree (Vantage Point Tree). 

	Reference:
	* http://pnylab.com/papers/vptree/main.html
 */

var nearest = function (colors, metric, accessor) {
	if (metric === void 0) metric = differenceEuclidean();
	if (accessor === void 0)
		accessor = function (d) {
			return d;
		};

	var arr = colors.map(function (c, idx) {
		return { color: accessor(c), i: idx };
	});
	return function (color, n, τ) {
		if (n === void 0) n = 1;
		if (τ === void 0) τ = Infinity;

		if (isFinite(n)) {
			n = Math.max(1, Math.min(n, arr.length - 1));
		}

		arr.forEach(function (c) {
			c.d = metric(color, c.color);
		});

		return arr
			.sort(function (a, b) {
				return a.d - b.d;
			})
			.slice(0, n)
			.filter(function (c) {
				return c.d < τ;
			})
			.map(function (c) {
				return colors[c.i];
			});
	};
};

/*
	Color blend modes, as defined in the 
	CSS Compositing Level 4 spec

	https://drafts.fxtf.org/compositing-2/
	https://en.wikipedia.org/wiki/Blend_modes
	https://en.wikipedia.org/wiki/Alpha_compositing
	https://keithp.com/~keithp/porterduff/p253-porter.pdf
 */

var BLENDS = {
	normal: function (b, s) {
		return s;
	},
	multiply: function (b, s) {
		return b * s;
	},
	screen: function (b, s) {
		return b + s - b * s;
	},
	'hard-light': function (b, s) {
		return s < 0.5 ? b * 2 * s : 2 * s * (1 - b) - 1;
	},
	overlay: function (b, s) {
		return b < 0.5 ? s * 2 * b : 2 * b * (1 - s) - 1;
	},
	darken: function (b, s) {
		return Math.min(b, s);
	},
	lighten: function (b, s) {
		return Math.max(b, s);
	},
	'color-dodge': function (b, s) {
		return b === 0 ? 0 : s === 1 ? 1 : Math.min(1, b / (1 - s));
	},
	'color-burn': function (b, s) {
		return b === 1 ? 1 : s === 0 ? 0 : 1 - Math.min(1, (1 - b) / s);
	},
	'soft-light': function (b, s) {
		return s < 0.5
			? b - (1 - 2 * s) * b * (1 - b)
			: b +
					(2 * s - 1) *
						((b < 0.25
							? ((16 * b - 12) * b + 4) * b
							: Math.sqrt(b)) -
							b);
	},
	difference: function (b, s) {
		return Math.abs(b - s);
	},
	exclusion: function (b, s) {
		return b + s - 2 * b * s;
	}
};

var blend = function (colors, type, mode) {
	if (type === void 0) type = 'normal';
	if (mode === void 0) mode = 'rgb';

	var fn = typeof type === 'function' ? type : BLENDS[type];

	var conv = converter(mode);

	// get mode channels
	var channels = getModeDefinition(mode).channels;

	// convert all colors to the mode
	// and assume undefined alphas are 1
	var converted = colors.map(function (c) {
		var cc = conv(c);
		if (cc.alpha === undefined) {
			cc.alpha = 1;
		}
		return cc;
	});

	return converted.reduce(function (b, s) {
		if (b === undefined) {
			return s;
		}
		// blend backdrop and source
		var alpha = s.alpha + b.alpha * (1 - s.alpha);
		return channels.reduce(
			function (res, ch) {
				if (ch !== 'alpha') {
					if (alpha === 0) {
						res[ch] = 0;
					} else {
						res[ch] =
							s.alpha * (1 - b.alpha) * s[ch] +
							s.alpha * b.alpha * fn(b[ch], s[ch]) +
							(1 - s.alpha) * b.alpha * b[ch];
						// TODO fix() assumes [0, 1] colors
						// and is only true for RGB / LRGB
						res[ch] = Math.max(0, Math.min(1, res[ch] / alpha));
					}
				}
				return res;
			},
			{ mode: mode, alpha: alpha }
		);
	});
};

/*
	Generate a random number between `min` and `max`
 */
var rand = function (ref) {
	var min = ref[0];
	var max = ref[1];

	return min + Math.random() * (max - min);
};

/*
	Convert a constraints object to intervals.
 */
var to_intervals = function (constraints) {
	return Object.keys(constraints).reduce(function (o, k) {
		var v = constraints[k];
		o[k] = Array.isArray(v) ? v : [v, v];
		return o;
	}, {});
};

/*
	Generate a random color.
 */
var random = function (mode, constraints) {
	if (mode === void 0) mode = 'rgb';
	if (constraints === void 0) constraints = {};

	var def = getModeDefinition(mode);
	var limits = to_intervals(constraints);
	return def.channels.reduce(
		function (res, ch) {
			// ignore alpha if not present in constraints
			if (limits.alpha || ch !== 'alpha') {
				res[ch] = rand(limits[ch] || def.ranges[ch]);
			}
			return res;
		},
		{ mode: mode }
	);
};

/*
	Smoothstep easing function. 
	Reference: https://en.wikipedia.org/wiki/Smoothstep
 */
var smoothstep = function (t) {
	return t * t * (3 - 2 * t);
};

/*
	Smootherstep easing function proposed by K. Perlin
	Reference: https://en.wikipedia.org/wiki/Smoothstep
 */
var smootherstep = function (t) {
	return t * t * t * (t * (t * 6 - 15) + 10);
};

/*
	WCAG luminance
	References: 

	https://en.wikipedia.org/wiki/Relative_luminance
	https://github.com/w3c/wcag/issues/236#issuecomment-379526596
 */
function luminance(color) {
	var c = converter('lrgb')(color);
	return 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
}

/*
	WCAG contrast
 */
function contrast(a, b) {
	var L1 = luminance(a);
	var L2 = luminance(b);
	return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

var rgb$1 = converter('rgb');

/*
	Color vision deficiency (CVD) simulation based on:

		G. M. Machado, M. M. Oliveira and L. A. F. Fernandes, 
		"A Physiologically-based Model for Simulation of Color Vision Deficiency" 
		in IEEE Transactions on Visualization and Computer Graphics, 
		vol. 15, no. 6, pp. 1291-1298, Nov.-Dec. 2009, 
		doi: 10.1109/TVCG.2009.113.

	Functions use precomputed matrices from:

		https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html

	Via the `colorspace` R package documentation:

		http://colorspace.r-forge.r-project.org/reference/simulate_cvd.html
 */

var PROT = [
	[1.0, 0.0, -0.0, 0.0, 1.0, 0.0, -0.0, -0.0, 1.0],
	[
		0.856167, 0.182038, -0.038205, 0.029342, 0.955115, 0.015544, -0.00288,
		-0.001563, 1.004443
	],
	[
		0.734766, 0.334872, -0.069637, 0.05184, 0.919198, 0.028963, -0.004928,
		-0.004209, 1.009137
	],
	[
		0.630323, 0.465641, -0.095964, 0.069181, 0.890046, 0.040773, -0.006308,
		-0.007724, 1.014032
	],
	[
		0.539009, 0.579343, -0.118352, 0.082546, 0.866121, 0.051332, -0.007136,
		-0.011959, 1.019095
	],
	[
		0.458064, 0.679578, -0.137642, 0.092785, 0.846313, 0.060902, -0.007494,
		-0.016807, 1.024301
	],
	[
		0.38545, 0.769005, -0.154455, 0.100526, 0.829802, 0.069673, -0.007442,
		-0.02219, 1.029632
	],
	[
		0.319627, 0.849633, -0.169261, 0.106241, 0.815969, 0.07779, -0.007025,
		-0.028051, 1.035076
	],
	[
		0.259411, 0.923008, -0.18242, 0.110296, 0.80434, 0.085364, -0.006276,
		-0.034346, 1.040622
	],
	[
		0.203876, 0.990338, -0.194214, 0.112975, 0.794542, 0.092483, -0.005222,
		-0.041043, 1.046265
	],
	[
		0.152286, 1.052583, -0.204868, 0.114503, 0.786281, 0.099216, -0.003882,
		-0.048116, 1.051998
	]
];

var DEUTER = [
	[1.0, 0.0, -0.0, 0.0, 1.0, 0.0, -0.0, -0.0, 1.0],
	[
		0.866435, 0.177704, -0.044139, 0.049567, 0.939063, 0.01137, -0.003453,
		0.007233, 0.99622
	],
	[
		0.760729, 0.319078, -0.079807, 0.090568, 0.889315, 0.020117, -0.006027,
		0.013325, 0.992702
	],
	[
		0.675425, 0.43385, -0.109275, 0.125303, 0.847755, 0.026942, -0.00795,
		0.018572, 0.989378
	],
	[
		0.605511, 0.52856, -0.134071, 0.155318, 0.812366, 0.032316, -0.009376,
		0.023176, 0.9862
	],
	[
		0.547494, 0.607765, -0.155259, 0.181692, 0.781742, 0.036566, -0.01041,
		0.027275, 0.983136
	],
	[
		0.498864, 0.674741, -0.173604, 0.205199, 0.754872, 0.039929, -0.011131,
		0.030969, 0.980162
	],
	[
		0.457771, 0.731899, -0.18967, 0.226409, 0.731012, 0.042579, -0.011595,
		0.034333, 0.977261
	],
	[
		0.422823, 0.781057, -0.203881, 0.245752, 0.709602, 0.044646, -0.011843,
		0.037423, 0.974421
	],
	[
		0.392952, 0.82361, -0.216562, 0.263559, 0.69021, 0.046232, -0.01191,
		0.040281, 0.97163
	],
	[
		0.367322, 0.860646, -0.227968, 0.280085, 0.672501, 0.047413, -0.01182,
		0.04294, 0.968881
	]
];

var TRIT = [
	[1.0, 0.0, -0.0, 0.0, 1.0, 0.0, -0.0, -0.0, 1.0],
	[
		0.92667, 0.092514, -0.019184, 0.021191, 0.964503, 0.014306, 0.008437,
		0.054813, 0.93675
	],
	[
		0.89572, 0.13333, -0.02905, 0.029997, 0.9454, 0.024603, 0.013027,
		0.104707, 0.882266
	],
	[
		0.905871, 0.127791, -0.033662, 0.026856, 0.941251, 0.031893, 0.01341,
		0.148296, 0.838294
	],
	[
		0.948035, 0.08949, -0.037526, 0.014364, 0.946792, 0.038844, 0.010853,
		0.193991, 0.795156
	],
	[
		1.017277, 0.027029, -0.044306, -0.006113, 0.958479, 0.047634, 0.006379,
		0.248708, 0.744913
	],
	[
		1.104996, -0.046633, -0.058363, -0.032137, 0.971635, 0.060503, 0.001336,
		0.317922, 0.680742
	],
	[
		1.193214, -0.109812, -0.083402, -0.058496, 0.97941, 0.079086, -0.002346,
		0.403492, 0.598854
	],
	[
		1.257728, -0.139648, -0.118081, -0.078003, 0.975409, 0.102594,
		-0.003316, 0.501214, 0.502102
	],
	[
		1.278864, -0.125333, -0.153531, -0.084748, 0.957674, 0.127074,
		-0.000989, 0.601151, 0.399838
	],
	[
		1.255528, -0.076749, -0.178779, -0.078411, 0.930809, 0.147602, 0.004733,
		0.691367, 0.3039
	]
];

var deficiency = function (lut, t) {
	var tt = Math.max(0, Math.min(1, t));
	var i = Math.round(tt / 0.1);
	var w = Math.round(tt % 0.1);
	var arr = lut[i];
	if (w > 0 && i < lut.length - 1) {
		var arr_2 = lut[i + 1];
		arr = arr.map(function (v, idx) {
			return lerp$1(arr[idx], arr_2[idx], w);
		});
	}
	return function (color) {
		var c = prepare(color);
		if (c === undefined) {
			return undefined;
		}
		var ref = rgb$1(c);
		var r = ref.r;
		var g = ref.g;
		var b = ref.b;
		var ret = {
			mode: 'rgb',
			r: arr[0] * r + arr[1] * g + arr[2] * b,
			g: arr[3] * r + arr[4] * g + arr[5] * b,
			b: arr[6] * r + arr[7] * g + arr[8] * b
		};
		if (c.alpha !== undefined) {
			ret.alpha = c.alpha;
		}
		return converter(c.mode)(ret);
	};
};

var deficiencyProt = function (severity) {
	if (severity === void 0) severity = 1;

	return deficiency(PROT, severity);
};
var deficiencyDeuter = function (severity) {
	if (severity === void 0) severity = 1;

	return deficiency(DEUTER, severity);
};
var deficiencyTrit = function (severity) {
	if (severity === void 0) severity = 1;

	return deficiency(TRIT, severity);
};

var lerp = function (a, b, t) {
	return a === undefined || b === undefined ? undefined : a + t * (b - a);
};

var minzero = function (v) {
	return Math.max(v, 0);
};
var clamp = function (v) {
	return Math.max(Math.min(v, 1), 0);
};

var matrixSepia = function (amount) {
	var a = 1 - clamp(amount);
	return [
		0.393 + 0.607 * a,
		0.769 - 0.769 * a,
		0.189 - 0.189 * a,
		0,
		0.349 - 0.349 * a,
		0.686 + 0.314 * a,
		0.168 - 0.168 * a,
		0,
		0.272 - 0.272 * a,
		0.534 - 0.534 * a,
		0.131 + 0.869 * a,
		0,
		0,
		0,
		0,
		1
	];
};

var matrixSaturate = function (sat) {
	var s = minzero(sat);
	return [
		0.213 + 0.787 * s,
		0.715 - 0.715 * s,
		0.072 - 0.072 * s,
		0,
		0.213 - 0.213 * s,
		0.715 + 0.285 * s,
		0.072 - 0.072 * s,
		0,
		0.213 - 0.213 * s,
		0.715 - 0.715 * s,
		0.072 + 0.928 * s,
		0,
		0,
		0,
		0,
		1
	];
};

var matrixGrayscale = function (amount) {
	var a = 1 - clamp(amount);
	return [
		0.2126 + 0.7874 * a,
		0.7152 - 0.7152 * a,
		0.0722 - 0.0722 * a,
		0,
		0.2126 - 0.2126 * a,
		0.7152 + 0.2848 * a,
		0.0722 - 0.0722 * a,
		0,
		0.2126 - 0.2126 * a,
		0.7152 - 0.7152 * a,
		0.0722 + 0.9278 * a,
		0,
		0,
		0,
		0,
		1
	];
};

var matrixHueRotate = function (degrees) {
	var rad = (Math.PI * degrees) / 180;
	var c = Math.cos(rad);
	var s = Math.sin(rad);
	return [
		0.213 + c * 0.787 - s * 0.213,
		0.715 - c * 0.715 - s * 0.715,
		0.072 - c * 0.072 + s * 0.928,
		0,
		0.213 - c * 0.213 + s * 0.143,
		0.715 + c * 0.285 + s * 0.14,
		0.072 - c * 0.072 - s * 0.283,
		0,
		0.213 - c * 0.213 - s * 0.787,
		0.715 - c * 0.715 + s * 0.715,
		0.072 + c * 0.928 + s * 0.072,
		0,
		0,
		0,
		0,
		1
	];
};

var matrix = function (values, mode, preserve_mode) {
	if (preserve_mode === void 0) preserve_mode = false;

	var conv = converter(mode);
	var channels = getModeDefinition(mode).channels;
	return function (color) {
		var c = conv(color);
		if (!c) {
			return undefined;
		}
		var res = { mode: mode };
		var ch;
		var count = channels.length;
		for (var i = 0; i < values.length; i++) {
			ch = channels[Math.floor(i / count)];
			if (c[ch] === undefined) {
				continue;
			}
			res[ch] =
				(res[ch] || 0) + values[i] * (c[channels[i % count]] || 0);
		}
		if (!preserve_mode) {
			return res;
		}
		var prep = prepare(color);
		return prep && res.mode !== prep.mode ? converter(prep.mode)(res) : res;
	};
};

var filterBrightness = function (amt, mode) {
	if (amt === void 0) amt = 1;
	if (mode === void 0) mode = 'rgb';

	var a = minzero(amt);
	return mapper(mapTransferLinear(a), mode, true);
};

var filterContrast = function (amt, mode) {
	if (amt === void 0) amt = 1;
	if (mode === void 0) mode = 'rgb';

	var a = minzero(amt);
	return mapper(mapTransferLinear(a, (1 - a) / 2), mode, true);
};
var filterSepia = function (amt, mode) {
	if (amt === void 0) amt = 1;
	if (mode === void 0) mode = 'rgb';

	return matrix(matrixSepia(amt), mode, true);
};
var filterSaturate = function (amt, mode) {
	if (amt === void 0) amt = 1;
	if (mode === void 0) mode = 'rgb';

	return matrix(matrixSaturate(amt), mode, true);
};
var filterGrayscale = function (amt, mode) {
	if (amt === void 0) amt = 1;
	if (mode === void 0) mode = 'rgb';

	return matrix(matrixGrayscale(amt), mode, true);
};
var filterInvert = function (amt, mode) {
	if (amt === void 0) amt = 1;
	if (mode === void 0) mode = 'rgb';

	var a = clamp(amt);
	return mapper(
		function (v, ch) {
			return ch === 'alpha' ? v : lerp(a, 1 - a, v);
		},
		mode,
		true
	);
};
var filterHueRotate = function (deg, mode) {
	if (deg === void 0) deg = 0;
	if (mode === void 0) mode = 'rgb';

	return matrix(matrixHueRotate(deg), mode, true);
};

defineMode(definition$n);
defineMode(definition$7);
defineMode(definition$6);
defineMode(definition$5);
defineMode(definition$h);
defineMode(definition$j);
defineMode(definition$i);
defineMode(definition$g);
defineMode(definition$f);
defineMode(definition$e);
defineMode(definition$d);
defineMode(definition$c);
defineMode(definition$b);
defineMode(definition$a);
defineMode(definition$8);
defineMode(definition$o);
defineMode(definition$9);
defineMode(definition$m);
defineMode(definition$l);
defineMode(definition$k);
defineMode(definition$p);
defineMode(definition$3);
defineMode(definition$4);
defineMode(definition$2);
defineMode(definition$1);
defineMode(definition);

var a98 = converter('a98');
var cubehelix = converter('cubehelix');
var dlab = converter('dlab');
var dlch = converter('dlch');
var hsi = converter('hsi');
var hsl = converter('hsl');
var hsv = converter('hsv');
var hwb = converter('hwb');
var jab = converter('jab');
var jch = converter('jch');
var lab = converter('lab');
var lab65 = converter('lab65');
var lch = converter('lch');
var lch65 = converter('lch65');
var lchuv = converter('lchuv');
var lrgb = converter('lrgb');
var luv = converter('luv');
var p3 = converter('p3');
var prophoto = converter('prophoto');
var rec2020 = converter('rec2020');
var rgb = converter('rgb');
var xyz = converter('xyz');
var xyz65 = converter('xyz65');
var yiq = converter('yiq');
var oklab = converter('oklab');
var oklch = converter('oklch');

export {
	a98,
	average,
	averageAngle,
	averageNumber,
	blend,
	clamp$1 as clamp,
	clampChroma,
	clampRgb,
	named as colorsNamed,
	converter,
	cubehelix,
	deficiencyDeuter,
	deficiencyProt,
	deficiencyTrit,
	defineMode,
	differenceCie76,
	differenceCie94,
	differenceCiede2000,
	differenceCmc,
	differenceDin99o,
	differenceEuclidean,
	differenceHueChroma,
	differenceHueNaive,
	differenceHueSaturation,
	differenceHyab,
	differenceKotsarenkoRamos,
	displayable,
	dlab,
	dlch,
	gamma$3 as easingGamma,
	inOutSine as easingInOutSine,
	midpoint as easingMidpoint,
	smootherstep as easingSmootherstep,
	smoothstep as easingSmoothstep,
	filterBrightness,
	filterContrast,
	deficiencyDeuter as filterDeficiencyDeuter,
	deficiencyProt as filterDeficiencyProt,
	deficiencyTrit as filterDeficiencyTrit,
	filterGrayscale,
	filterHueRotate,
	filterInvert,
	filterSaturate,
	filterSepia,
	fixupAlpha,
	fixupHueDecreasing,
	fixupHueIncreasing,
	fixupHueLonger,
	fixupHueShorter,
	formatHex,
	formatHex8,
	formatHsl,
	formatRgb,
	formatter,
	getModeDefinition,
	hsi,
	hsl,
	hsv,
	hwb,
	interpolate,
	fixupAlpha as interpolateAlpha,
	cosine as interpolateCosine,
	fixupHueShorter as interpolateHue,
	interpolateLinear,
	interpolateSplineBasis,
	interpolateSplineMonotone,
	interpolateSplineNatural,
	interpolateWith,
	interpolateWithPremultipliedAlpha,
	interpolatorLinear,
	interpolatorPiecewise,
	interpolatorSplineBasis,
	interpolatorSplineBasisClosed,
	interpolatorSplineMonotone,
	interpolatorSplineMonotone2,
	interpolatorSplineMonotoneClosed,
	interpolatorSplineNatural,
	interpolatorSplineNaturalClosed,
	jab,
	jch,
	lab,
	lab65,
	lch,
	lch65,
	lchuv,
	lerp$1 as lerp,
	lrgb,
	luv,
	mapAlphaDivide,
	mapAlphaMultiply,
	mapTransferGamma,
	mapTransferLinear,
	mapper,
	nearest,
	oklab,
	oklch,
	p3,
	parse,
	prophoto,
	random,
	rec2020,
	rgb,
	round,
	samples,
	contrast as wcagContrast,
	luminance as wcagLuminance,
	xyz,
	xyz65,
	yiq
};
