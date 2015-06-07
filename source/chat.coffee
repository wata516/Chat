ChatViewProvider = require './chat-view-provider'
ElectronApplication = require './electron/electron-application'

module.exports =
class Chat extends ElectronApplication
  ViewProvider = null

  start:(Options) ->
    super Options
    ViewProvider = new ChatViewProvider()

  startChatWindow: ->
    Workspace = require './workspace'
    @MainWorkSpace = new WorkSpace
    ChatWindowBuilder = require './chat-window-builder'
    (new ChatWindowBuilder).build
