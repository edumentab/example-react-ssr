const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server/index.js',
  resolve: {
    extensions: [".js", ".jsx"]
  },
  mode: 'development',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, './src/server'),
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "server.bundle.css",
    })
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
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

