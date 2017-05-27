import * as fs from 'fs';
import * as _ from 'lodash';
let defaults = require('./defaults');

let env = {
  development: {
    BUILDER: 'mongodb://192.168.0.140:27017/builders',
    ENCODEDHASH: '123',
    ENCODEDHASHSTRING: 123
  },
  production: {
    BUILDER: ':8113',
    ENCODEDHASH: '123',
    ENCODEDHASHSTRING: 123
  }
}

let config = _.defaultsDeep({}, defaults, env);
module.exports = config[process.env.NODE_ENV ? process.env.NODE_ENV : 'development'];
