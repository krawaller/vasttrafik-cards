# vasttrafik-cards

Fetch Västtrafik cards data.

[![Build Status](https://img.shields.io/travis/krawaller/vasttrafik-cards/master.svg)](https://travis-ci.org/krawaller/vasttrafik-cards)

## Installation

via npm:

```bash
$ npm install vasttrafik-cards
```

## API

```js
var login = require('vasttrafik-login');
var getCards = require('vasttrafik-cards');

login({ username: '<my username>', password: '<my password>' })
  .then(getCards)
  .then(doStuff)
```

## License

MIT
