var Nakama = {};
Nakama.Configs = {
    BULLET_SPEED : 200
}

window.onload = function(){
  Nakama.game = new Phaser.Game(1008, 720, Phaser.AUTO, '',{
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

var preload = function(){
  Nakama.game.scale.minWidth = 504;
  Nakama.game.scale.minHeight = 360;
  Nakama.game.scale.maxWidth = 1008;
  Nakama.game.scale.maxHeight = 720;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  // Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/background.jpg');
  Nakama.game.load.image('wall', 'Assets/wall.png');
  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.spritesheet('player', 'Assets/george.png', 48, 48);
  Nakama.game.load.image('stone', 'Assets/stone.png');
  Nakama.game.time.advancedTiming = true;
  Nakama.game.load.image('bomb', 'Assets/bomb.png');
}


var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.game.add.sprite(0, 0, "background");

  Nakama.platforms = Nakama.game.add.group();
  Nakama.platforms.enableBody = true;
  Nakama.bombGroup = Nakama.game.add.physicsGroup();
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();
  Nakama.players = [];
  Nakama.bombs = [];

  var map1 = new Map();

  player1 = new Player(48, 48, {
    up   : Phaser.Keyboard.UP,
    down : Phaser.Keyboard.DOWN,
    left : Phaser.Keyboard.LEFT,
    right: Phaser.Keyboard.RIGHT,
    fire : Phaser.Keyboard.SPACEBAR,
  });
  Nakama.players.push(player1);

}
var update = function(){
  Nakama.game.physics.arcade.collide(Nakama.playerGroup, Nakama.platforms);
  Nakama.game.physics.arcade.collide(Nakama.playerGroup, Nakama.bombGroup);
  for (var i = 0; i<Nakama.players.length; i++){
    Nakama.players[i].update();
  }
  for (var i = 0; i<Nakama.bombs.length; i++){
    Nakama.bombs[i].update();
  }
  Nakama.game.physics.arcade.overlap(Nakama.bulletGroup, Nakama.platforms, onBulletHitActor);
  Nakama.game.physics.arcade.overlap(Nakama.bulletGroup, Nakama.playerGroup, onBulletHitActor);
}

function onBulletHitActor(bulletSprite, actorSprite){
  actorSprite.damage(bulletSprite.power);
  bulletSprite.kill();
}

var render = function(){
  // Nakama.playerGroup.forEachAlive(function(sprite){
  //   Nakama.game.debug.body(sprite);
  // });
  // Nakama.bombGroup.forEachAlive(function(sprite){
  //   Nakama.game.debug.body(sprite);
  // });
  // Nakama.bulletGroup.forEachAlive(function(sprite){
  //   Nakama.game.debug.body(sprite);
  // });
  // Nakama.platforms.forEachAlive(function(sprite){
  //   Nakama.game.debug.body(sprite);
  // });

}
