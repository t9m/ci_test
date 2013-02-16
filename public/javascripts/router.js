define(['lib/lodash', 'lib/backbone'], function(_, Backbone) {
  var App = Backbone.Router.extend({
    routes: {
      about: "about"
    },

    about: function() {
    },

    list: function() {
    },

    show: function() {
    }
  });

  return {
    App: App
  }
});
