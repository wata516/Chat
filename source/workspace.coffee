WorkspaceViewModel = require './ChatBase/workspace-view-model'

class Workspace
  construct ->
    chat.AddViews new WorkspaceViewModel
