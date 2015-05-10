ChatViewProvider = require './chat-view-provider'
Workspace = require './workspace'
ElectronApplication = require './electron/electron-application'

module.exports =
class Chat extends ElectronApplication
  ViewProvider = null
  MainWorkspace = null

  start:(Options) ->
    super Options
    ViewProvider = new ChatViewProvider()
    MainWorkspace = new Workspace()

  test:->
    console.log "Test"
