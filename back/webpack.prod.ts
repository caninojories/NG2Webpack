'use strict';
import * as webpack from 'webpack';
import * as fs from 'fs';
import * as path from 'path';

const Envi      = process.env.NODE_ENV = process.env.ENV = 'development';
let envi        = require('./config/env.js');
let environment = envi[Envi]();

module.exports = {
  entry: {
    'app.server': __dirname + '/app.server.ts'
  },
  resolve: {
    extensions: ['.ts']
  },
  target: 'node',
  externals: fs.readdirSync("node_modules")
  .reduce(function(acc, mod) {
    if (mod === ".bin") {
      return acc
    }

    acc[mod] = "commonjs " + mod;

    return acc
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
        'BUILDER': JSON.stringify(environment.BUILDER),
        'ENCODEDHASH': JSON.stringify(environment.ENCODEDHASH)
      }
    })
  ]
};
