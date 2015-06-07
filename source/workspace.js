(function() {
  var Workspace, WorkspaceElement, WorkspaceViewModel;

  WorkspaceViewModel = require('./workspace-view-model');

  WorkspaceElement = require('./workspace-element');

  module.exports = Workspace = (function() {
    function Workspace() {}

    Workspace.prototype.construct = function() {
      return chat.ViewProvider.Add(new WorkspaceViewModel(new WorkspaceElement));
    };

    return Workspace;

  })();

}).call(this);
