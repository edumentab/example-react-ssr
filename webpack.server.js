const baseConfig = require('./webpack.config');
const path = require('path');

module.exports = Object.assign({}, {
  target: 'node',
  entry: './src/bundles/server/index.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, './src/express'),
    libraryTarget: 'commonjs2',
  }
}, baseConfig);
