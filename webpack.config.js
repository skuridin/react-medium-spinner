var ExtractTextPlugin = require("extract-text-webpack-plugin");

var externals = [];
if(process.env.NODE_ENV === "production") {
  externals.push("react");
}

module.exports = {
  context: __dirname + '/src',
  entry: "./index.jsx",
  output: {
    path: __dirname,
    filename: "index.js",
    library: 'ReactMediumSpinner',
    libraryTarget: "umd"
  },
  externals: externals,
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
