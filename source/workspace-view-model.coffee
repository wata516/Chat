ViewModel = require './ChatBase/view-model'
WorkspaceElement = require './workspace-element'

class WorkspaceViewModel extends ViewModel
  construct ->
    new WorkspaceElement
