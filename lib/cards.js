var request = require('request')
var paggi = require('./paggi')

var api = null
var auth = null


var cards = {}

cards.getList = function (callback) {
  var options = {
    url: api + '/cards/',
    headers: {
      "Content-Type": 'application/json',
      'authorization': auth
    },
    method: 'GET',
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

cards.create = function (data, callback) {
  var options = {
    url: api + '/cards',
    headers: {
      "Content-Type": 'application/json',
      'authorization': auth
    },
    method: 'POST',
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

cards.getById = function (id, callback) {
  var options = {
    url: api + '/cards/' + id,
    headers: {
      "Content-Type": 'application/json',
      'authorization': auth
    },
    method: 'GET',
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

cards.delete = function (id, callback) {
  var options = {
    url: api + '/cards/' + id,
    headers: {
      "Content-Type": 'application/json',
      'authorization': auth
    },
    method: 'DELETE',
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
  console.log("auth: %s", auth);
  return cards;
}
