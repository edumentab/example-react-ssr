const baseConfig = require('./webpack.config');
const path = require('path');

module.exports = Object.assign({}, {
  target: 'node',
  entry: './src/play',
  output: {
    filename: 'play.js',
    path: path.resolve(__dirname, './public/assets')
  }
}, baseConfig);
