(function() {
  var ViewModel, WorkspaceElement, WorkspaceViewModel,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ViewModel = require('./ChatBase/view-model');

  WorkspaceElement = require('./workspace-element');

  module.exports = WorkspaceViewModel = (function(superClass) {
    var ViewProvider;

    extend(WorkspaceViewModel, superClass);

    function WorkspaceViewModel() {
      return WorkspaceViewModel.__super__.constructor.apply(this, arguments);
    }

    ViewProvider = null;

    WorkspaceViewModel.prototype.construct = function(Provider) {
      return ViewProvider = Provider;
    };

    return WorkspaceViewModel;

  })(ViewModel);

}).call(this);
