module.exports = {
  development: function() {
    return {
      HOSTNAME: 'http://192.168.200.623232',
      HOSTNAMEPORT: ':8113',
      HOSTNAMEVERSION: '/api/v1'
    }
  },
  production: function() {
    return {
      HOSTNAME: 'http://192.168.200.623232',
      HOSTNAMEPORT: ':8113',
      HOSTNAMEVERSION: '/api/v1'
    }
  }
}
