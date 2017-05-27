'use strict';

module.exports = {
  development: {
    BUILDER : process.env.BUILDERS,
    ENCODEDHASH: '',
    ENCODEDHASHSTRING: ''
  },
  production: {
    BUILDER : 'builder123',
    ENCODEDHASH: 'hash123',
    ENCODEDHASHSTRING: ''
  }
};
