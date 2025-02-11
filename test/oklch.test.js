import tape from 'tape';
import { oklch } from '../src/index';

tape('oklch', t => {
	t.deepEqual(
		oklch('white'),
		{ mode: 'oklch', l: 0.9999999934735462, c: 0 },
		'white'
	);
	t.deepEqual(
		oklch('#111'),
		{ mode: 'oklch', l: 0.1776377719172259, c: 0 },
		'#111'
	);
	t.deepEqual(oklch('black'), { mode: 'oklch', l: 0, c: 0 }, 'black');
	t.deepEqual(
		oklch('red'),
		{
			mode: 'oklch',
			l: 0.6279553606145516,
			c: 0.2576833077361567,
			h: 29.233885192342633
		},
		'red'
	);
	t.end();
});
