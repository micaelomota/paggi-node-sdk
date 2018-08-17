var Buffer = require('safe-buffer').Buffer

module.exports = function (_username, _password, _production) {
  var production = _production != undefined ? _production : false;
  var basicAuth = 'Basic ' + new Buffer(_username + ':' + _password).toString('base64');

  return {
    charges: require('./lib/charges')(basicAuth, production),
    cards: require('./lib/cards')(basicAuth, production),
    customers: require('./lib/customers')(basicAuth, production),  
    banks: require('./lib/banks')(basicAuth, production)
  };
}
