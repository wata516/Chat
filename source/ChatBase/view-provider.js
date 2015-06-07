(function() {
  var ViewProvider;

  module.exports = ViewProvider = (function() {
    var Views;

    function ViewProvider() {}

    Views = [];

    ViewProvider.prototype.Add = function(view) {
      return Views.push(view);
    };

    ViewProvider.prototype.Generate = function() {
      var foreach;
      return foreach = function(Views, view) {
        return view.Generate;
      };
    };

    return ViewProvider;

  })();

}).call(this);
