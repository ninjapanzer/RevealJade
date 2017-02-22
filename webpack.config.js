var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/",
  entry: "./index.js",

  output: {
    filename: "presentation.js",
    path: __dirname + "/dist"
  },
  externals: [{
    externals: {'navigator':'navigator'},
  }],
  devtool: "#source-map",
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.pug',
      title: 'Jade demo'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(jade|pug)$/,
        loaders: ["pug-loader"]
      },
      {
        test: /\.js$/,
        loaders: ["babel-loader"]
      }
    ],
  }
}
