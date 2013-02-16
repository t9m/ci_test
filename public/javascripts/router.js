define(['lib/lodash', 'lib/backbone'], function(_, Backbone) {
  var App = Backbone.Router.extend({

    routes: {
      'about': 'about'
    },

    about: function() {
      $('#main-content')
        .empty()
        .append($('#about-template').html());
    }

  });

  return {
    App: App
  }
});
