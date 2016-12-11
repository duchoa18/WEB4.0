class BulletController {
  constructor(position,spriteName,direction,configs){
    this.configs = configs ;

    this.sprite = Nakama.bulletGroup.create(
      position.x,
      position.y,
      'assets',
      spriteName
    );
    this.sprite.anchor = new Phaser.Point(0.5 , 0.5);
    this.sprite.power = this.configs.power;

    this.sprite.checkWorldBounds = true ;//kiem tra dan ra khoi man hinh chuaw
    this.sprite.outofBoundsKill = true ;//xoa dan neu ra khoi man hinh

    this.sprite.body.velocity = direction.setMagnitude(Nakama.configs.BULLET_SPEED);
    this.sprite.angle = Math.atan2(direction.x,-direction.y) * (180/Math.PI);

    this.sprite.onHitTarget = function(){

    }
    
    this.sprite.events.onKilled.add(this.explode,this);

    this.sprite.onHitTarget = function(){
      this.kill();
    }

    Nakama.bulletControllers.push(this);
  }

  explode(){
    Nakama.bulletControllers.splice(Nakama.bulletControllers.indexOf(this),1);
    this.sprite.destroy();
  }

}
