const express = require('express')
const VueServerRenderer = require('vue-server-renderer')
const fs = require('fs')
const path = require('path')
const webpackConfig = require('./config/webpack.server.js')

const app = express()

const webpackOutputPath = webpackConfig.output.path

// 获取server bundle
// const serverBundle = fs.readFileSync(
//   path.join(webpackOutputPath, 'server-bundle.js'),
//   'utf8'
// )
// 获取ssr template
const template = fs.readFileSync(
  path.join(webpackOutputPath, 'index.ssr.html'),
  'utf8'
)
// server bundle
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
// client manifest
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = VueServerRenderer.createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})

app.use(express.static(`${__dirname}/dist`, { index: false }))

app.get('*', (req, res) => {
  const context = {
    url: req.url,
    title: 'ssr server'
  }
  renderer.renderToString(context, (err, html) => {
    res.send(html)
  })
})

app.listen(3000)
