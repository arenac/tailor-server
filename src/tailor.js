'use strict'

require('dotenv').config()
const http = require('http')
const Tailor = require('node-tailor')
const tailor = new Tailor({
  templatesPath: __dirname + '/src/templates'
})

http
  .createServer((req, res) => {
    if (req.url === '/favicon.ico') {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' })
      return res.end('')
    }

    req.headers['x-request-uri'] = req.url
    req.url = '/index'

    tailor.requestHandler(req, res)
  })
  .listen(5000, function () {
    console.log('Tailor server listening on port 5000')
  })
