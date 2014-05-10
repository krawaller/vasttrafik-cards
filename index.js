var login = require('vasttrafik-login');
var getCards = require('./lib/get-cards');

module.exports = function(options) {
  return login(options)
    .then(getCards);
};
