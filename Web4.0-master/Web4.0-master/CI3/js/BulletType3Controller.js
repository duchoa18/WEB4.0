class BulletType3Controller extends BulletController {
  constructor(position ,spriteName ,direction ,configs){
    super(position , spriteName , direction,configs);
    this.sprite.anchor = new Phaser.Point(0.5,1);
    this.sprite.body.velocity = direction.setMagnitude(Nakama.configs.BULLET_SPEED);
  }
}
