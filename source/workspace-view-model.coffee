ViewModel = require './ChatBase/view-model'
WorkspaceElement = require './workspace-element'

module.exports =
class WorkspaceViewModel extends ViewModel
  ViewProvider = null
  construct: (Provider) ->
    ViewProvider = Provider
