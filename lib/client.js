var request = require('request')
var api = null
var auth = null

var _request = (options) => {
  return new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
      if (response) {
        resolve(body)
      } else {
        reject(error)
      }
    })
  })
}

var get = (route) => _request({
  url: api + route,
  headers: {
    'Authorization': auth
  },
  method: 'GET',
  json: true
})

var post = (route, data) => _request({
  url: api + route,
  headers: {
    'Content-Type': 'application/json',
    'authorization': auth
  },
  method: 'POST',
  body: data,
  json: true
})

var put = (route, data) => _request({
  url: api + route,
  headers: {
    'Content-Type': 'application/json',
    'authorization': auth
  },
  method: 'PUT',
  body: data,
  json: true
})

var remove = (route) => _request({
  url: api + route,
  headers: {
    'Content-Type': 'application/json',
    'authorization': auth
  },
  method: 'DELETE',
  json: true
})

module.exports = (_auth, _api) => {
  auth = _auth
  api = _api
  return {
    get: get,
    post: post,
    put: put,
    delete: remove
  }
}
