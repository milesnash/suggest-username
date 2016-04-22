# suggest-username [![Build Status](https://travis-ci.org/milesnash/suggest-username.svg?branch=master)](https://travis-ci.org/milesnash/suggest-username) [![Coverage Status](https://coveralls.io/repos/github/milesnash/suggest-username/badge.svg?branch=master)](https://coveralls.io/github/milesnash/suggest-username?branch=master)

> The Teeny Username Generator


## Install

```
$ npm install --save suggest-username
```


## Usage

### API

#### Basic

```js
const suggestUsername = require('suggest-username');

suggestUsername().then(username => {
	console.log(username);
});
//  Output example:
//  $ supersonic macebearer
//
```

#### Advanced

```js
const suggestUsername = require('suggest-username');

suggestUsername(2, '.', 'randomLetters').then(username => {
	console.log(username);
});
//  Output example:
//  $ supersonic.macebearer.XcGvTt
//
```

### CLI

```
Usage
$ suggest-username --help

  Options
    -n, --number-of-words  Number of random words generated [Default: 2]
    -g, --glue			   Used to join generated words [Default: ' ']
    -a, --append 		   [l|n] Append random [l]etters or [n]umbers to username [Default: '']
    --version 			   Installed software version
    --help 				   This help menu

Examples

Basic:
$ suggest-username
$ supersonic macebearer

Advanced:
$ suggest-username -n 2 -g . -a l
$ supersonic.macebearer.XcGvTt
```


## API

### suggestUsername(numberOfWords, glue, append)

#### numberOfWords

Type: `integer`

Default: 2

The number of random words generated.

#### glue

Type: `string`

Default: ' '

Used to join the generated words together.

#### append

Type: `string`

Default: ''

| Enum          |
| ------------- |
| randomNumbers |
| randomLetters |

Optionally append random letters of numbers.


## Sources

Dictionary files: [WordNet](http://wordnet.princeton.edu)
Princeton University "About WordNet." WordNet. Princeton University. 2010. <http://wordnet.princeton.edu>


## License

MIT © [Miles Nash](https://github.com/milesnash)
