(function() {
  var ChatViewProvider, ViewProvider,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ViewProvider = require('./ChatBase/view-provider');

  module.exports = ChatViewProvider = (function(superClass) {
    extend(ChatViewProvider, superClass);

    function ChatViewProvider() {
      return ChatViewProvider.__super__.constructor.apply(this, arguments);
    }

    return ChatViewProvider;

  })(ViewProvider);

}).call(this);
