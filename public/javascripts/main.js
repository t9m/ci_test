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

require(['lib/bootstrap'], function() {
});

require(['model', 'view'], function(Model, View) {
  var post = new View.Post({
    model: new Model.Post()
  });
});

require(['config', 'component'], function(config, clock) {
  /*
  var label = document.getElementById('label');
  label.textContent = config.label;

  var container = document.getElementById('clock');
  clock.render(container);
  */
});
