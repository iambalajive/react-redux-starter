const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js'
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ]
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options:{
              modules:true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        })
      }
    ]

  }
}