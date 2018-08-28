const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, './dist/www/assets')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new webpack.IgnorePlugin(/xmlhttprequest/)
  ],
  devServer: {
    port: 3000,
    contentBase: './dist/www',
    publicPath: '/assets/',
    compress: true,
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.css$/,
      use: [
        // 'style-loader',  
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
