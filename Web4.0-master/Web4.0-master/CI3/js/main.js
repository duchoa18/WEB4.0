var Nakama = {};
Nakama.Configs = {
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
  Nakama.game.load.image('diamond', 'Assets/diamond.png');
  Nakama.game.load.image('stone', 'Assets/stone.png');
  Nakama.game.time.advancedTiming = true;
}


var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.game.add.sprite(0, 0, "background");

  Nakama.platforms = Nakama.game.add.group();
  Nakama.platforms.enableBody = true;
  Nakama.players = [];

  var map1 = new Map();

  player1 = Nakama.game.add.sprite(48,48, "diamond");
  Nakama.game.physics.arcade.enable(player1);
  player1.body.setCircle(16, 0, 0);
}

var update = function(){
  Nakama.game.physics.arcade.collide(player1, Nakama.platforms);
  if(Nakama.keyboard.isDown(Phaser.Keyboard.UP)){
    player1.body.velocity.y = -200;
  }
  else if(Nakama.keyboard.isDown(Phaser.Keyboard.DOWN)){
    player1.body.velocity.y = 200;
  }
  else{
    player1.body.velocity.y = 0;
  }
  if(Nakama.keyboard.isDown(Phaser.Keyboard.LEFT)){
    player1.body.velocity.x = -200;
  }
  else if(Nakama.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    player1.body.velocity.x = 200;
  }
  else{
    player1.body.velocity.x = 0;
  }

}

var render = function(){
  // Nakama.game.debug.body(player1)
}
