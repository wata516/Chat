Remote = require('remote')

window.onload = function() {
  Chat = Remote.require('../resources/chat');
  Chat.test();
}
