class ShipType1Controller extends ShipController {
  constructor(x,y,isPlayer1,configs){
    var spriteName = "Spaceship1-" + (isPlayer1 ? "Player" : "Partner") +".png";
    configs.health = 2 ;
    configs.cooldown = 0.1 ;
    configs.hitBoxRadius = 15;
    configs.hitBoxOffset =  new Phaser.Point(25,15);
    super(x,y,spriteName,configs);
  }

  fire(){
    new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(0,-10),{power : 10});
    new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(2,-10),{power : 10});
    new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(-2,-10),{power : 10});
    new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(6,-10),{power : 10});
    new BulletController(this.sprite.position,"BulletType1.png",new Phaser.Point(-6,-10),{power : 10});
  }
}
