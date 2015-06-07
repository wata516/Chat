(function() {
  var Chat, ElectronApplication, app, chat;

  app = require('app');

  Chat = require('./chat');

  ElectronApplication = require('./electron/electron-application');

  chat = null;

  app.on('ready', function() {
    chat = new Chat();
    return chat.start("");
  });

}).call(this);
