(function() {
  var Chat, ChatViewProvider, ElectronApplication, Workspace,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ChatViewProvider = require('./chat-view-provider');

  Workspace = require('./workspace');

  ElectronApplication = require('./electron/electron-application');

  module.exports = Chat = (function(superClass) {
    var MainWorkspace, ViewProvider;

    extend(Chat, superClass);

    function Chat() {
      return Chat.__super__.constructor.apply(this, arguments);
    }

    ViewProvider = null;

    MainWorkspace = null;

    Chat.prototype.start = function(Options) {
      Chat.__super__.start.call(this, Options);
      ViewProvider = new ChatViewProvider();
      return MainWorkspace = new Workspace();
    };

    Chat.test = function() {
      return console.log("Test");
    };

    return Chat;

  })(ElectronApplication);

}).call(this);
