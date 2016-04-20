'use strict';
const randomUserName = require('./lib/randomUserName.js');
const primaryWords = require('./files/primary.json');
const secondaryWords = require('./files/secondary.json');

module.exports = (numberOfWords, glue, append) => {
	if (!numberOfWords) {
		numberOfWords = 2;
	}
	if (!glue) {
		glue = ' ';
	}
	return new Promise(
		(resolve, reject) => {
			randomUserName(primaryWords, secondaryWords, numberOfWords, glue, append)
			.then(username => {
				resolve(username);
			})
			.catch(err => {
				reject(err);
			});
		}
	);
};
