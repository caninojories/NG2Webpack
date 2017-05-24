import * as fs from 'fs';

module.exports = {
  development: function() {
    return {
      BUILDER: 'mongodb://192.168.0.137:27017/builders',
      ENCODEDHASH: '123'
    }
  },
  production: function() {
    return {
      BUILDER: ':8113',
      ENCODEDHASH: '123'
    }
  }
}
