requirejs.config({
  shim: {
    'lib/zepto': {
      exports: 'Zepto'
    },
    'lib/lodash': {
      exports: '_'
    },
    'lib/backbone': {
      deps: ['lib/zepto', 'lib/lodash'],
      exports: 'Backbone'
    },
    'lib/bootstrap': {
      deps: ['lib/zepto']
    }
  }
});

require(['lib/bootstrap']);

require(['model', 'view', 'router'], function(Model, View, Router) {
  var app = new View.App({
    model: new Model.App()
  });

  var router = new Router.App();
  Backbone.history.start({pushState: true, root: '/'});
});
