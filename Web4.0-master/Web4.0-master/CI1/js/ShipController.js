class ShipController{
  constructor(x,y,spriteName,configs){
    this.configs = configs ;
    this.sprite = Nakama.playerGroup.create(
      x,
      y,
      'assets',
      spriteName
    );
    this.sprite.achor = new Phaser.Point(0.5 , 0.5)
    this.timeSinceLastFire = 0;
  }

update(){
  this . timeSinceLastFire += Nakama.game.time.physicsElapsed;
  if (Nakama.keyboard.isDown(this.configs.up)){
    this.sprite.body.velocity.y = -Nakama.configs.SHIP_SPEED;
  }
  else if (Nakama.keyboard.isDown(this.configs.down)) {
    this.sprite.body.velocity.y = Nakama.configs.SHIP_SPEED;
  }
  else{
    this.sprite.body.velocity.y = 0;
  }

  if (Nakama.keyboard.isDown(this.configs.left)){
    this.sprite.body.velocity.x = -Nakama.configs.SHIP_SPEED;
  }
  else if (Nakama.keyboard.isDown(this.configs.right)) {
    this.sprite.body.velocity.x = Nakama.configs.SHIP_SPEED;
  }
  else{
    this.sprite.body.velocity.x = 0;
  }

  if (Nakama.keyboard.isDown(this.configs.fire) && this.timeSinceLastFire >= this.configs.cooldown){
    this.fire();
    this.timeSinceLastFire = 0;
  }
}

fire(){
  for (var i = 1; i<=5; i++){
      var newBullet = new BulletController(this.sprite.position.x, this.sprite.position.y, 'BulletType2.png', i);
    }
}
}
