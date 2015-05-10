WorkspaceViewModel = require './workspace-view-model'
WorkspaceElement = require './workspace-element'

module.exports =
class Workspace
  construct: ->
    chat.ViewProvider.Add new WorkspaceViewModel(new WorkspaceElement)
