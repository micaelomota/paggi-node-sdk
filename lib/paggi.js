module.exports.config = {
  staging: {
    v4: {
      url: 'https://api-online.stg.paggi.com/api/v4'
    }
  },
  production: {
    v4: {
      url: 'https://api-online.paggi.com/api/v4'
    }
  }
}

module.exports.getAPI = (_production) => {
  if (_production) {
    return exports.config.production.v4.url
  }
  return exports.config.staging.v4.url
}
