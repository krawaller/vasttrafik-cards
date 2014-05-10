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
var getCards = require('vasttrafik-cards');
getCards({ username: '<my username>', password: '<my password>' })
  .then(doStuff);
```

## License

MIT
