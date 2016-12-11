class ShipType2Controller extends ShipController {
  constructor (x,y,isPlayer1,configs){
    var spriteName = "Spaceship2-"  + (isPlayer1 ? "Player" : "Partner") +".png";
    configs.health  = 5 ;
    configs.cooldown = 0.3 ;
    configs.hitBoxRadius = 15;
    configs.hitBoxOffset =  new Phaser.Point(25,20);
    super(x,y,spriteName,configs);
  }

  fire(){
    new BulletType2Controller(this.sprite.position, new Phaser.Point(1, -10),{ power : 20 });
    new BulletType2Controller(this.sprite.position, new Phaser.Point(-1, -10),{ power : 20 });
  }
}
