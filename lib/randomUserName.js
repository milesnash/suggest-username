'use strict';
const validAppends = new Set(
	[
		undefined,
		'randomNumbers',
		'randomLetters'
	]
);

module.exports = (primaries, secondaries, numberOfWords, glue, append) => {
	return new Promise(
		(resolve, reject) => {
			if (!validAppends.has(append)) {
				reject('Invalid append parameter');
			}
			numberOfWords = Number(numberOfWords);
			if (Number.isNaN(numberOfWords)) {
				reject('Invalid numberOfWords parameter');
			}
			let username = '';
			let numberOfPrimaries = numberOfWords - 1;
			while (numberOfPrimaries) {
				if (username.length) {
					username += glue;
				}
				username += primaries[(Math.round(Math.random() * (primaries.length - 1)))];
				numberOfPrimaries--;
			}
			username += glue + secondaries[Math.round(Math.random() * (secondaries.length - 1))];
			if (append === 'randomNumbers') {
				username += glue + Math.round(Math.random() * 100000);
			} else if (append === 'randomLetters') {
				let i = 3;
				username += glue;
				while (i) {
					username +=
					String.fromCharCode(Math.round(Math.random() * 25) + 65) +
					String.fromCharCode(Math.round(Math.random() * 25) + 97);
					i--;
				}
			}
			resolve(username);
		}
	);
};
