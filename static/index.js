Remote = require('remote')

window.onload = function() {
  Chat = Remote.require('../source/chat');
  ChatWindowBuilderPath = require.resolve('../source/chat-window-builder');
  ChatWindowBuilder = require(ChatWindowBuilderPath);
  (new ChatWindowBuilder).build();
}
