var request = require('request')
var paggi = require('./paggi')

var api = null
var auth = null

var customers = {}

// Implement pagination
customers.getList = function (callback) {
  var options = {
    url: api + '/customers/',
    headers: {
      "Content-Type": 'application/json',
      'authorization': auth
    },
    method: 'GET',
    json: true
  };

  request(options, function (error, response, body) {
    console.log(response.statusCode);
    if (response) {
      callback(error, body, response)
    } else {
      callback(error)
    }
  })
}

customers.create = function (data, callback) {
  var options = {
    url: api + '/customers/',
    headers: {
      "Content-Type": 'application/json',
      'authorization': auth
    },
    method: 'POST',
    body: data,
    json: true
  }

  request(options, function (error, response, body) {
    if (response) {
      callback(error, body, response)
    } else {
      callback(error)
    }
  })
}

customers.update = function (id, data, callback) {
  var options = {
    url: api + '/customers/'+id,
    headers: {
      "Content-Type": 'application/json',
      'authorization': auth
    },
    method: 'PUT',
    body: data,
    json: true
  };

  request(options, function (error, response, body) {
    if (response) {
      callback(error, body, response)
    } else {
      callback(error)
    }
  })
}

banks.getById = function (id, callback) {
  var options = {
    url: api + '/customers/' + id,
    headers: {
      "Content-Type": 'application/json',
      'authorization': auth
    },
    method: 'GET',
    body: data,
    json: true
  };

  request(options, function (error, response, body) {
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
  return customers;
}
