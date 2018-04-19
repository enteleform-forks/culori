let tape = require('tape');
let culori = require('../');
let { interpolate, samples, formatter, cubehelix } = culori;

let hex = formatter('hex');

tape('11 swatches between black and white in RGB', function(test) {

	test.deepEqual(
		samples(11).map(interpolate(['#fff', '#000'])).map(hex),
		[ 
			'#ffffff', 
			'#e6e6e6', 
			'#cccccc', 
			'#b3b3b3', 
			'#999999', 
			'#808080', 
			'#666666', 
			'#4d4d4d', 
			'#333333', 
			'#191919', 
			'#000000'
		]
	);

	test.end();
});

tape('11 swatches between black and white in Lab', function(test) {

	test.deepEqual(
		samples(11).map(interpolate(['#fff', '#000'], 'lab')).map(hex),
		[ 
			'#ffffff', 
			'#e2e2e2', 
			'#c6c6c6', 
			'#ababab', 
			'#919191', 
			'#777777', 
			'#5e5e5e', 
			'#474747', 
			'#303030', 
			'#1b1b1b', 
			'#000000'
		]
	);

	test.end();
});

tape('11 swatches between black and white in Lch', function(test) {

	test.deepEqual(
		samples(11).map(interpolate(['#fff', '#000'], 'lch')).map(hex),
		[ 
			'#ffffff', 
			'#e2e2e2', 
			'#c6c6c6', 
			'#ababab', 
			'#919191', 
			'#777777', 
			'#5e5e5e', 
			'#474747', 
			'#303030', 
			'#1b1b1b', 
			'#000000'
		]
	);

	test.end();
});

tape('11 swatches between black and white in DIN99', function(test) {

	test.deepEqual(
		samples(11).map(interpolate(['#fff', '#000'], 'din')).map(hex),
		[ '#ffffff', '#d5d5d5', '#b0b0b0', '#8f8f8f', '#737373', '#5a5a5a', '#454545', '#323232', '#222222', '#141414', '#000000' ]
	);

	test.end();
});

// tape('default cubehelix scale', function(test) {

// 	let start = cubehelix({
// 		h: 300,
// 		s: 0.5,
// 		l: 0
// 	});

// 	let end = cubehelix({
// 		h: -240,
// 		s: 0.5,
// 		l: 1
// 	})

// 	test.deepEqual(
// 		samples(10).map(interpolate([start, end], 'cubehelix')).map(hex),
// 		['#000000', '#1a1935', '#15474e', '#2b6f39', '#767b33', '#c17a6f', '#d490c6', '#c3c0f2', '#ceebef', '#ffffff']
// 	)

// 	test.end();
// });