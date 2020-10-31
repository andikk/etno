const path = require(`path`);

module.exports = {
  entry: `./source/js/react/index.js`,
  output: {
    filename: `map.js`,
    path: path.join(__dirname, `source`)
  },
  devServer: {
    contentBase: path.join(__dirname, `source`),
    open: false,
    historyApiFallback: true,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
};
