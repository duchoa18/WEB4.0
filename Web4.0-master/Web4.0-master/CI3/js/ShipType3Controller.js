class ShipType3Controller extends ShipController {
  constructor (x,y,isPlayer1,configs){
    var spriteName = "Spaceship3-"  + (isPlayer1 ? "Player" : "Partner") +".png";
    configs.health  = 10 ;
    configs.cooldown = 0.5 ;
    configs.hitBoxRadius = 15;
    configs.hitBoxOffset =  new Phaser.Point(25,20);
    super(x,y,spriteName,configs);
  }

  fire(){
    var bullet = new BulletController(this.sprite.position,"BulletType3.png",new Phaser.Point(0,-10),{power : 50});
    bullet.sprite.anchor = new Phaser.Point(0.5,1);
  }
}
