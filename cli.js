#!/usr/bin/env node
'use strict';
const meow = require('meow');
const logSymbols = require('log-symbols');
const chalk = require('chalk');
const suggestUserName = require('./index.js');

const flagMap = new Map(
	[
		['n', 'numberOfWords'],
		['g', 'glue'],
		['a', 'append']
	]
);
const appendMap = new Map(
	[
		[null, undefined],
		['l', 'randomLetters'],
		['n', 'randomNumbers']
	]
);
const params = {
	numberOfWords: 2,
	glue: ' ',
	append: undefined
};
const colors = [
	chalk.green,
	chalk.yellow,
	chalk.blue,
	chalk.magenta,
	chalk.cyan,
	chalk.white,
	chalk.grey
];

const cli = meow(`
	Usage
	  $ suggest-username

	Options
	  -n, --number-of-words	 Number of random words generated [Default: 2]
	  -g, --glue			 Used to join generated words [Default: ' ']
	  -a, --append 			 [l|n] Append random [l]etters or [n]umbers to username [Default: '']
	  --version 			 Installed software version
	  --help 				 This help menu

	Examples
	--------

	Basic:
	  $ suggest-username
	  $ supersonic macebearer

	Advanced:
	  $ suggest-username -n 2 -g . -a l
	  $ supersonic.macebearer.XcGvTt
`);

for (let flag in cli.flags) {
	if (flagMap.has(flag)) {
		params[flagMap.get(flag)] = cli.flags[flag];
	}
}

suggestUserName(params.numberOfWords, params.glue, appendMap.get(params.append))
.then(result => {
	const color = colors[Math.round(Math.random() * (colors.length - 1))];
	console.log(color(result));
})
.catch(err => {
	console.error(`  ${logSymbols.warning}  ${chalk.bgRed("Fatal Error:")}`);
	console.error(`  ${logSymbols.error}  ${chalk.red(err)}`);
});
