var Nakama = {};
Nakama.configs = {
  SHIP_SPEED : 450,
  BULLET_SPEED : 1200,
  PLAYER_TYPE : {
    PLAYER_1 : true ,
    PLAYER_2 : false
  }
};

window.onload = function(){
  Nakama.configs.SHIP_TYPE = {
      SHIP_TYPE1 : ShipType1Controller ,
      SHIP_TYPE2 : ShipType2Controller ,
      SHIP_TYPE3 : ShipType3Controller
  }

  Nakama.game = new Phaser.Game(
    640,
    960,
    Phaser.Auto,
    '',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    },
    false,
    false
  );
}

var preload = function(){
    Nakama.game.scale.minWidth = 320;
    Nakama.game.scale.minHeight = 480;
    Nakama.game.scale.maxWidth = 640;
    Nakama.game.scale.maxHeight = 960;
    Nakama.game.scale.pageAlignHorizontally = true;
    Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
    Nakama.game.load.image('background', 'Assets/Map1.png');
    Nakama.game.time.advancedTiming = true;
}

var create = function(){

    Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
    Nakama.keyboard = Nakama.game.input.keyboard;
    Nakama.background = Nakama.game.add.tileSprite(0, 0, 640, 960, 'background');
    Nakama.shipControllers = [];

    Nakama.playerGroup = Nakama.game.add.physicsGroup();
    Nakama.bulletGroup = Nakama.game.add.physicsGroup();
    Nakama.enemyGroup = Nakama.game.add.physicsGroup();

    Nakama.enemies = [];

    var player1Constructor = getPlayerShipChoice("Player1");
    var player2Constructor = getPlayerShipChoice("Player2");

    var player1 = new player1Constructor(200,700,Nakama.configs.PLAYER_TYPE.PLAYER_1,{
      up : Phaser.Keyboard.W,
      down : Phaser.Keyboard.S,
      left : Phaser.Keyboard.A,
      right : Phaser.Keyboard.D,
      fire : Phaser.Keyboard.SPACEBAR
    });
    Nakama.shipControllers.push(player1);


    var player2 = new player2Constructor(400,700,Nakama.configs.PLAYER_TYPE.PLAYER_2,{
      up : Phaser.Keyboard.UP,
      down : Phaser.Keyboard.DOWN,
      left : Phaser.Keyboard.LEFT,
      right : Phaser.Keyboard.RIGHT,
      fire : Phaser.Keyboard.ENTER
    });
    Nakama.shipControllers.push(player2);

  var enemy = new EnemyController(new Phaser.Point(320,100),"EnemyType1.png",{health:100});
  Nakama.enemies.push(enemy);
  var enemy1 = new EnemyController(new Phaser.Point(400,400),"EnemyType2.png",{health:100});
  Nakama.enemies.push(enemy1);
  var enemy2 = new EnemyController(new Phaser.Point(110,200),"EnemyType3.png",{health:100});
  Nakama.enemies.push(enemy2);
  var enemy3 = new EnemyController(new Phaser.Point(530,200),"EnemyType4.png",{health:100});
  Nakama.enemies.push(enemy3);

}

var update = function(){
    Nakama.background.tilePosition.y += 2;

    for (var i=0 ; i< Nakama.shipControllers.length ;i++){
      Nakama.shipControllers[i].update();
    }
    Nakama.game.physics.arcade.overlap(Nakama.bulletGroup,Nakama.enemyGroup,onBulletHitActor);
}

var render = function(){
  Nakama.playerGroup.forEachAlive(function(sprite){
    Nakama.game.debug.body(sprite);
  });
  Nakama.bulletGroup.forEachAlive(function(sprite){
    Nakama.game.debug.body(sprite);
  });
  Nakama.enemyGroup.forEachAlive(function(sprite){
    Nakama.game.debug.body(sprite);
  });
}

function onBulletHitActor(bulletSprite,actorSprite){
  actorSprite.damage(bulletSprite.power);
  bulletSprite.kill();
}

function getPlayerShipChoice(playerName){
  var playerChoice = prompt(playerName + " Please choose ship type!!! ");
  playerChoice = parseInt(playerChoice);
  switch(playerChoice){
    case 3:
      var playerConstructor = Nakama.configs.SHIP_TYPE.SHIP_TYPE3;
      break;
    case 2:
      var playerConstructor = Nakama.configs.SHIP_TYPE.SHIP_TYPE2;
      break;
    case 1:
  default:
      var playerConstructor = Nakama.configs.SHIP_TYPE.SHIP_TYPE1;
      break;
  }
  return playerConstructor;
}
//BTVN  dan thanh class , dich thanh class .CI2
