var Buffer = require('safe-buffer').Buffer;
var Client = require('./lib/client');
var paggi = require('./lib/paggi');

module.exports = function (_username, _password, _production) {
  var production = _production != undefined ? _production : false;
  var basicAuth = 'Basic ' + new Buffer(_username + ':' + _password).toString('base64');
  var apiClient = Client(basicAuth, paggi.getAPI(production));

  return {
    charges: require('./lib/charges')(apiClient),
    cards: require('./lib/cards')(apiClient),
    customers: require('./lib/customers')(apiClient),  
    banks: require('./lib/banks')(apiClient)
  };
}
