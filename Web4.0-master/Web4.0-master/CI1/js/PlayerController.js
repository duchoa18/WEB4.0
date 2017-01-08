class PlayerController{
  constructor(x,y,spriteName,configs){
    this.configs = configs ;
    this.sprite = Bomberman.playerGroup.create(
      x,
      y,
      'assets',
      spriteName
    );
    this.sprite.anchor = new Phaser.Point(0.5 , 0.5);//dan ban ngay tam
    this.sprite.health = configs.health;
    this.timeSinceLastFire = 0;
    this.sprite.body.collideWorldBounds = true; // gioi han di chuyen trong khung hinh
    //this.sprite.body.setCircle(this.configs.hitBoxRadius , this.configs.hitBoxOffset.x,this.configs.hitBoxOffset.y);
  }

  update(){
    this . timeSinceLastFire += Bomberman.game.time.physicsElapsed;
    if (Bomberman.keyboard.isDown(this.configs.up)){
      this.sprite.body.velocity.y = -Bomberman.configs.Walking_Speed;
    }
    else if (Bomberman.keyboard.isDown(this.configs.down)) {
      this.sprite.body.velocity.y = Bomberman.configs.Walking_Speed;
    }
    else{
      this.sprite.body.velocity.y = 0;
    }

    if (Bomberman.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = -Bomberman.configs.Walking_Speed;
    }
    else if (Bomberman.keyboard.isDown(this.configs.right)) {
      this.sprite.body.velocity.x = Bomberman.configs.Walking_Speed;
    }
    else{
      this.sprite.body.velocity.x = 0;
    }

    if (Bomberman.keyboard.isDown(this.configs.fire) && this.timeSinceLastFire >= this.configs.cooldown){
      this.fire();
      this.timeSinceLastFire = 0;
    }
  }

  fire(){
  }

  }
