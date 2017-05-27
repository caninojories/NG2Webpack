import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin'
import * as OpenBrowserPlugin from 'open-browser-webpack-plugin';
let commonConfig = require('./webpack.common.js');
let helpers = require('./helpers.js');

/* get the data for the env variable*/
const Envi = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
let envi = require('./env.js');
let environment = envi[Envi]();

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8081/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new OpenBrowserPlugin({
      port: 8081,
      url: 'http://localhost:8081'
    }),/*it opens default browser*/
    new webpack.DefinePlugin({
      'process.env': {
        'BUILDERHOSTNAME': JSON.stringify(environment.HOSTNAME),
        'BUILDERHOSTNAMEPORT': JSON.stringify(environment.HOSTNAMEPORT),
        'BUILDERVERSION': JSON.stringify(environment.HOSTNAMEVERSION)
      }
    }),
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
