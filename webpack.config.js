const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, './public/assets')
  },
  devServer: {
    port: 3000,
    contentBase: './public',
    compress: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  mode: 'development',
};
