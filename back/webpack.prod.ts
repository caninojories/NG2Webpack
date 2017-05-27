'use strict';
import * as webpack from 'webpack';
import * as fs from 'fs';
import * as path from 'path';

let Envi   = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
let config = require('./config/env.js');

module.exports = {
  entry: {
    'app.server': __dirname + '/app.server.ts'
  },
  resolve: {
    extensions: ['.ts']
  },
  target: 'node',
  externals: fs.readdirSync('node_modules')
  .reduce(function(acc, mod) {
    if (mod === '.bin') {
      return acc;
    }

    acc[mod] = 'commonjs ' + mod;

    return acc;
  }, {}),
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loaders: ['ts-loader']
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(Envi),
        'BUILDER': JSON.stringify(config.BUILDER),
        'ENCODEDHASH': JSON.stringify(config.ENCODEDHASH)
      }
    })
  ]
};
