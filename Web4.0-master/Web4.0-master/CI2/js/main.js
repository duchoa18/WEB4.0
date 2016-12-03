var Nakama = {};
Nakama.configs = {
  SHIP_SPEED : 450,
  BULLET_SPEED : 1200,
  DAMAGE : 10,
};

window.onload = function(){
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

    var player1 = new ShipController(200,700, "Spaceship1-Player.png",{
      up : Phaser.Keyboard.UP,
      down : Phaser.Keyboard.DOWN,
      left : Phaser.Keyboard.LEFT,
      right : Phaser.Keyboard.RIGHT,
      fire : Phaser.Keyboard.SPACEBAR,
      cooldown : 0.3
    });
    Nakama.shipControllers.push(player1);

    var player2 = new ShipController(400,700, "Spaceship2-Partner.png",{
      up : Phaser.Keyboard.W,
      down : Phaser.Keyboard.S,
      left : Phaser.Keyboard.A,
      right : Phaser.Keyboard.D,
      fire : Phaser.Keyboard.ENTER,
      cooldown : 0.3
    });
    Nakama.shipControllers.push(player2);

  var enemy = new EnemyController(220,400,"EnemyType1.png");
  Nakama.enemies.push(enemy);
  var enemy1 = new EnemyController(400,400,"EnemyType2.png");
  Nakama.enemies.push(enemy1);
  var enemy2 = new EnemyController(110,200,"EnemyType3.png");
  Nakama.enemies.push(enemy2);
  var enemy3 = new EnemyController(530,200,"EnemyType3.png");
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

}

function onBulletHitActor(bulletSprite,actorSprite){
  actorSprite.damage(Nakama.configs.DAMAGE);
  bulletSprite.kill();
}
//BTVN  dan thanh class , dich thanh class .CI2
