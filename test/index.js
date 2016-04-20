'use strict';

const test = require('ava');
const m = require('../');

test('No params', async t => {
	const result = await m();
	t.regex(result, /^\w* \w*$/);
});

test('numberOfWords', async t => {
	const result = await m(3);
	t.regex(result, /^\w* \w* \w*$/);
});

test('glue', async t => {
	const result = await m(2, '.');
	t.regex(result, /^\w*\.\w*$/);
});

test('randomNumbers', async t => {
	const result = await m(2, '.', 'randomNumbers');
	t.regex(result, /^\w*\.\w*\.\d{1,6}$/);
});

test('randomLetters', async t => {
	const result = await m(2, '.', 'randomLetters');
	t.regex(result, /^\w*\.\w*\.\w{6}$/);
});

test('invalidNumberOfWords', async t => {
	m({})
	.catch(err => {
		t.is(err, "Invalid numberOfWords parameter");
	});
});

test('invalidAppend', async t => {
	m(2, '.', 'test')
	.catch(err => {
		t.is(err, "Invalid append parameter");
	});
});
