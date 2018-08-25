const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
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
  plugins: [
    //new CleanWebpackPlugin(['public/assets'])
  ],
  mode: 'development',
  devServer: {
    port: 3000,
    contentBase: './public',
    compress: true,
    historyApiFallback: true
  }
};
