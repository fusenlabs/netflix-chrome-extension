// webpack.config.js
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var WriteFilePlugin = require('write-file-webpack-plugin');
// var path = require("path");

module.exports = ({
  entry: [
    './app/index.js',
    './styles/styles.scss'
  ],
  output: {
    filename: 'bundle.js',
    path: "./dist/",
    publicPath: '/dist/',
    libraryTarget: 'umd',
  },
  devServer: {
    outputPath: './dist'
  },
  resolve: {
    alias: {
      // 'appConfig': './env/devel-config.js'
    },
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets: ['es2015'],
        }
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!sass'
        )
      },
      {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
          loader: 'file'
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WriteFilePlugin(),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ],
  watch: true,
  devtool: 'source-map',
});
