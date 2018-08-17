var request = require('request')
var paggi = require('./paggi')

var api = null
var auth = null


var banks = {}

banks.getList = function (callback) {
  var options = {
    url: api + '/banks/',
    headers: {
      'Authorization': auth
    },
    method: 'GET',
    json: true
  }

  request(options, function (error, response, body) {
    console.log(response.statusCode);
    if (response) {
      callback(error, body, response)
    } else {
      callback(error)
    }
  })
}

banks.getAccountList = function (callback) {
  var options = {
    url: api + '/bank_accounts/',
    headers: {
      'Authorization': auth
    },
    method: 'GET',
    json: true
  }

  request(options, function (error, response, body) {
    console.log(response.statusCode);
    if (response) {
      callback(error, body, response)
    } else {
      callback(error)
    }
  })
}

banks.createAccount = function (data, callback) {
  var options = {
    url: api + '/bank_accounts/',
    headers: {
      "Content-Type": 'application/json',
      'authorization': auth
    },
    method: 'POST',
    body: data,
    json: true
  }

  request(options, function (error, response, body) {
    console.log(response.statusCode);
    //console.log(response);

    if (response) {
      callback(error, body, response)
    } else {
      callback(error)
    }
  })
}

banks.getAccountById = function (id, callback) {
  var options = {
    url: api + '/bank_accounts/' + id,
    headers: {
      "Content-Type": 'application/json',
      'authorization': auth
    },
    method: 'GET',
    json: true
  }

  request(options, function (error, response, body) {
    console.log(response.statusCode);
    //console.log(response);

    if (response) {
      callback(error, body, response)
    } else {
      callback(error)
    }
  })
}

module.exports = function (_auth, _production) {
  auth = _auth;
  api = paggi.getAPI(_production);
  console.log("auth: %s", auth);
  return banks;
}
