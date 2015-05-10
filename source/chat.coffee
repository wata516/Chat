ChatViewProvider = require './chat-view-provider'
Workspace - require './workspace'
ElectronApplication = require './electron/electron-application'

class Chat extends ElectronApplication
  ViewProvider = null
  MainWorkspace = null

  start:(Options) ->
    Super Options
    ViewProvider = new ChatViewProvider
    MainWorkspace = new Workspace
