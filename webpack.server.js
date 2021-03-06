const path = require('path');

const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: './src/server/index.js',
  resolve: {
    extensions: [".js", ".jsx"]
  },
  mode: 'development',
  output: {
    filename: 'server.bundle.js',
    path: path.join(__dirname, './dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.css$/,
      use: [
        'raw-loader',
        {
          loader: 'css-loader',
          query: {
            localIdentName: '[name]__[local]___[hash:base64:5]',
            modules: true
          }
        }
      ],
    }]
  }
};

