/* eslint no-var: 0 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  context: path.join(__dirname, '..', 'src'),
  entry: './dev',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'example.js',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '..', 'src'),
        loader: 'babel',
      },
    ],
  },
};
