const merge = require('webpack-merge')
const path = require('path')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
  target: 'node',
  entry: {
    server: path.resolve(__dirname, '../src/server-entry.js')
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new VueSSRServerPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.ssr.html',
      template: path.resolve(__dirname, '../public/index.ssr.html'),
      excludeChunks: ['server']
    })
  ]
})
