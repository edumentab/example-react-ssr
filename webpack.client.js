const baseConfig = require('./webpack.config');
const path = require('path');

module.exports = Object.assign({}, {
  entry: './src/bundles/client.js',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, './public/assets')
  },
  devServer: {
    port: 3000,
    contentBase: './public',
    compress: true,
    historyApiFallback: true
  }
}, baseConfig);
