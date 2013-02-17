define(['lib/zepto', 'lib/lodash'], function($, _) {
  return {
    rand: function(n) {
      return Math.floor(Math.random() * (n+1));
    }
  };
});
