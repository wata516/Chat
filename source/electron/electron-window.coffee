BrowserWindow = require('browser-window')
url = require('url')

module.exports = class ElectronWindow
  browser = null

  handleEvents = ->
    browser.on 'closed', ->
      browser = null;

  open: ->
    browser = new BrowserWindow({ width:800, height:600})
    browser.loadUrl( url.format
      protocol: 'file'
      pathname: "../../static/index.html"
      slashes: true
      )
    handleEvents.call @
