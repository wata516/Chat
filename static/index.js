Remote = require('remote')

window.onload = function() {
  Chat = Remote.require('../source/chat');
  Chat.test();
  bootstrap = require.resolve('../source/bootstrap-window');
  console.log(bootstrap);
  test = require(bootstrap);
}
