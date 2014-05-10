var request = require('request');
var Q = require('kew');

var VASTTRAFIK_CARD_BALANCE_URL = 'https://www.vasttrafik.se/CustomerServices/EPiServerWs/SecureService.svc/GetVtkCardsWithPaging';

var cardParams = {
  "request": {
    "RDC_Language": "sv-SE",
    "PageSize": 10,
    "PageIndex": 1,
    "SortOrder": 5,
    "IncludeBasketCheck": true
  }
}

function getCards() {
  var deferred = Q.defer();

  request({
    url: VASTTRAFIK_CARD_BALANCE_URL,
    method: 'POST',
    jar: true,
    json: cardParams
  }, function(error, response, body) {
    if (error) {
      deferred.reject(error);
    } else {
      if (response.statusCode == 200) {
        if (body.d.RDC_Successful) {
          deferred.resolve(body.d);
        } else {
          deferred.reject('Could not fetch card info');
        }
      } else {
        deferred.reject(new Error('getCards responded with status: ' + response.statusCode));
      }
    }
  });

  return deferred.promise;
}

module.exports = getCards;
