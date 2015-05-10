app = require('app')
Chat = require('./chat')
ElectronApplication = require './electron/electron-application'

chat = null
app.on 'ready',->
  chat = (new Chat).start("");
