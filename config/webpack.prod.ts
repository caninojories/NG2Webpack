import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
var ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const Envi  = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
let envi    = require('./env.js');
let environment = envi[Envi]();
module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'BUILDERHOSTNAME': JSON.stringify(environment.HOSTNAME),
        'BUILDERHOSTNAMEPORT': JSON.stringify(environment.HOSTNAMEPORT),
        'BUILDERVERSION': JSON.stringify(environment.HOSTNAMEVERSION)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    })
  ]
});
