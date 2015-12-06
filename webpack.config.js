module.exports = {
  devtool: 'eval',
  context: __dirname + '/src',
  entry: './dev',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/src',
        loader: 'babel'
      }
    ]
  },
  devServer: {
    host: '0.0.0.0'
  }
};
