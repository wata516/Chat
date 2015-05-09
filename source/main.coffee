app = require('app')
ElectronApplication = require './electron/electron-application'

app.on 'ready',->
  (new ElectronApplication).start("");
