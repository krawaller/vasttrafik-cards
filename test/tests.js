var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var should = chai.should();

var login = require('vasttrafik-login');
var getCards = require('../lib/get-cards');

var username = process.env.USERNAME;
var password = process.env.PASSWORD;

describe('vasttrafik-cards', function() {

  it('should fetch cards when logged in', function() {
    return login({ username: username, password: password })
      .then(getCards)
        .should.be.fulfilled
        .should.eventually.have.deep.property('Cards[0].Charges[0].Amount')
  });

});
