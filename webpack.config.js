/* eslint-disable no-unused-vars */
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
const path = require('path');
const webpack = require('webpack');
/* eslint-enable no-unused-vars */

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    javascript: ['webpack/hot/dev-server', './app.jsx'],
    html: './index.html',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: [
      'parentDir',
      'node_modules',
    ],
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.OldWatchingPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    port: 4444,
    stats: 'errors-only',
    historyApiFallback: true,
  },
};
