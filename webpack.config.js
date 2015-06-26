var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/src',
  entry: "./index.jsx",
  output: {
    path: __dirname + '/dist',
    filename: "index.js",
    library: 'ReactMediumSpinner',
    libraryTarget: "umd"
  },
  externals: ["react"],
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css!autoprefixer') }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
};
