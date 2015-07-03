var externals = [],
    entry = "./dev.jsx",
    output = 'example.js';

if(process.env.NODE_ENV === "production") {
  externals.push("react");
  entry = "./index.jsx";
  output = 'index.js';
}

module.exports = {
  context: __dirname + '/src',
  entry: entry,
  output: {
    path: __dirname,
    filename: output,
    library: 'ReactMediumSpinner',
    libraryTarget: "umd"
  },
  externals: externals,
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "babel" }
    ]
  }
};
