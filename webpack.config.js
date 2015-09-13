var externals = [];
var entry = './dev.jsx';
var output = 'example.js';
var HTMLPlugin = require('html-webpack-plugin');

if(process.env.NODE_ENV === 'production') {
  externals.push('react');
  entry = './index.jsx';
  output = 'index.js';
}

module.exports = {
  context: __dirname + '/src',
  entry: entry,
  output: {
    path: __dirname,
    filename: output,
    library: 'ReactMediumSpinner',
    libraryTarget: 'umd'
  },
  externals: externals,
  module: { loaders: [{ test: /\.jsx$/, loader: 'babel' }] },
  plugins: [
    new HTMLPlugin({
      template: './src/template.html',
      hash: true,
      minify: { collapseWhitespace: true }
    })
  ]
};
