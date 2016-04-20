'use strict';

const test = require('ava');
const execa = require('execa');
// const m = require('../cli');

test('ok', t => {
	execa('../cli.js')
	.then(result => {
		t.regex(result, /^\w* \w*$/);
	});
});

test('error', async t => {
	execa('../cli.js', ['-n={', '--test'])
	.catch(err => {
		t.is(err, "Invalid numberOfWords parameter");
	});
});
