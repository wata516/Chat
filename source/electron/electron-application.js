(function() {
  var CrashReporter, ElectronApplication, ElectronWindow, app;

  app = require('app');

  ElectronWindow = require('./electron-window');

  CrashReporter = require('crash-reporter');

  module.exports = ElectronApplication = (function() {
    var addWindow, application, handleEvents, mainWindow, windows;

    function ElectronApplication() {}

    handleEvents = function() {
      return app.on('window-all-closed', function() {
        return app.quit();
      });
    };

    application = null;

    mainWindow = null;

    windows = [];

    addWindow = function(window) {
      windows.push(window);
      if (windows.length === 1) {
        return mainWindow = window;
      }
    };

    ElectronApplication.prototype.start = function(Options) {
      application = new ElectronApplication(Options);
      CrashReporter.start();
      handleEvents.call(this);
      addWindow.call(this, new ElectronWindow());
      return mainWindow.open();
    };

    return ElectronApplication;

  })();

}).call(this);
