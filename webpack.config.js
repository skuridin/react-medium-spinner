var externals = [],
    entry = "./dev.jsx";

if(process.env.NODE_ENV === "production") {
  externals.push("react");
  entry = "./index.jsx";
}

module.exports = {
  context: __dirname + '/src',
  entry: entry,
  output: {
    path: __dirname,
    filename: "index.js",
    library: 'ReactMediumSpinner',
    libraryTarget: "umd"
  },
  externals: externals,
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx" }
    ]
  }
};
