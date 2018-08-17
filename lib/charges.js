var request = require('request')
var paggi = require('./paggi')

var api = null
var auth = null

var charges = {}

charges.applyPay = function (data, callback) {
  var options = {
    url: api + '/charges',
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

charges.create = function (data, callback) {
  var options = {
    url: api + '/charges',
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

// TODO: implement pagination
charges.getList = function (data, callback) {
  var options = {
    url: api + '/charges',
    headers: {
      "Content-Type": 'application/json',
      'authorization': auth
    },
    method: 'GET',
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

charges.getById = function (id, callback) {
  var options = {
    url: api + '/charges/' + id,
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

charges.cancel = function (id, callback) {
  var options = {
    url: api + '/charges/' + id + '/cancel',
    headers: {
      "Content-Type": 'application/json',
      'authorization': auth
    },
    method: 'PUT',
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

charges.capture = function (id, callback) {
  var options = {
    url: api + '/charges/' + id + '/capture',
    headers: {
      "Content-Type": 'application/json',
      'authorization': auth
    },
    method: 'PUT',
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
  return charges;
}
