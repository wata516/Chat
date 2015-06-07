Remote = require('remote')

window.onload = function() {
  Chat = Remote.require('../source/chat');
  Chat.test();
}
