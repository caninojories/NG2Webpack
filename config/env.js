let fs = require('fs');

module.exports = {
  development: function() {
     fs.writeFile('src/app/shared/settings/app.config.ts',
      'export let CONFIG = {' +
      '"HOSTNAME": "' + (process.env.ENCODEDHASH || 'http://192.168.200.6') + '",' +
      '"HOSTNAMEPORT": "' + ':8113' + '",' +
      '"HOSTNAMEVERSION": "' + '/api/v1/' + '"}'
      , 'utf8', () => {
      /*
        * Done here
        */
        console.log('done...');
    });
  },
  production: function() {
    fs.writeFile('src/app/shared/settings/app.config.ts',
      'export let CONFIG = {' +
      '"HOSTNAME": "' + (process.env.BUILDERHOSTNAME || 'http://192.168.200.6') + '",' +
      '"HOSTNAMEPORT": "' + (process.env.BUILDERHOSTNAMEPORT || ':8082') + '",' +
      '"HOSTNAMEVERSION": "' + (process.env.BUILDERVERSION || '/api/v1/') + '"}'
      , 'utf8', () => {
      /*
        * Done here
        */
        console.log('done...');
    });
  }
}