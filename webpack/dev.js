/* eslint no-var: 0 */

var path = require('path');

module.exports = {
  devtool: 'eval',
  context: path.join(__dirname, '..', 'src'),
  entry: './dev',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '..', 'src'),
        loader: 'babel',
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
  },
};
