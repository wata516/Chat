BrowserWindow = require('browser-window')

module.exports = class ElectronWindow
  browser = null

  handleEvents = ->
    browser.on 'closed', ->
      browser = null;

  open: ->
    browser = new BrowserWindow({ width:800, height:600})
    browser.loadUrl('http://yahoo.co.jp');
    handleEvents.call @
