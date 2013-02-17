require(['main']);

(function() {
  require(['lib/enchant', 'utils'], function() {
    enchant();

    var core = new Core(320, 320);
    core.fps = 30;

    var scene = core.rootScene;
    scene.backgroundColor = 'black';

    core.start();

  });
})();
