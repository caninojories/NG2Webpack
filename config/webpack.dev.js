let webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonConfig = require('./webpack.common.js');
let helpers = require('./helpers');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');

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
    })/*it opens default browser*/
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
