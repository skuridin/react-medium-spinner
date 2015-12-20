/* eslint no-var: 0 */

var path = require('path');

module.exports = {
  context: path.join(__dirname, '..', 'src'),
  entry: './ReactMediumSpinner',
  externals: ['react'],
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'index.js',
    library: 'ReactMediumSpinner',
    libraryTarget: 'umd',
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
};
