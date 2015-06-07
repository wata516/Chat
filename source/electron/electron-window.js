(function() {
  var BrowserWindow, ElectronWindow, url;

  BrowserWindow = require('browser-window');

  url = require('url');

  module.exports = ElectronWindow = (function() {
    var browser, handleEvents;

    function ElectronWindow() {}

    browser = null;

    handleEvents = function() {
      return browser.on('closed', function() {
        return browser = null;
      });
    };

    ElectronWindow.prototype.open = function() {
      browser = new BrowserWindow({
        width: 800,
        height: 600
      });
      browser.loadUrl(url.format({
        protocol: 'file',
        pathname: "../../static/index.html",
        slashes: true
      }));
      return handleEvents.call(this);
    };

    return ElectronWindow;

  })();

}).call(this);
