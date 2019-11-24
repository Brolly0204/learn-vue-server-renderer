/* eslint-disable */
const merge = require('webpack-merge')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
  entry: {
    client: path.resolve(__dirname, '../src/client-entry.js')
  },
  devServer: {
    stats: 'errors-only'
  },
  plugins: [
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
})
