app = require 'app'
ElectronWindow = require './electron-window'
CrashReporter = require 'crash-reporter'

module.exports =
class ElectronApplication
  handleEvents = ->
    app.on 'window-all-closed', ->
      app.quit()

  application = null
  mainWindow = null
  windows = []

  addWindow = (window) ->
    windows.push window
    if windows.length is 1 then mainWindow = window
  start:(Options) ->
    application = new ElectronApplication(Options)
    CrashReporter.start()
    handleEvents.call @
    addWindow.call @, new ElectronWindow()
    mainWindow.open()
