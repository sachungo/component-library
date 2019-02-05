const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].bundle.js'
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin()
  ]
});
