class EnemyController {
  constructor (x,y,spriteName,configs){
    this.configs = configs;
    this.enemy = Nakama.enemyGroup.create (x,y,'assets',spriteName);
    this.enemy.health = 100;
    this.enemy.anchor = new Phaser.Point(0.5,0.5);
    this.timeSinceLastFireEnemy = 0;
  }
}
