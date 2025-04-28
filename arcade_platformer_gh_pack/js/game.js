class MainScene extends Phaser.Scene{
constructor(){super('MainScene')}
preload(){
  this.load.image('ground','assets/gfx/ground.png')
  this.load.image('coin','assets/gfx/coin.png')
  this.load.spritesheet('hero','assets/gfx/hero.png',{frameWidth:32,frameHeight:48})
  this.load.audio('jump','assets/audio/jump.wav')
  this.load.audio('coinS','assets/audio/coin.wav')
  this.load.audio('bgm','assets/audio/bgm.wav')
}
create(){
  this.sound.add('bgm',{loop:true,volume:0.4}).play()
  this.cameras.main.setBackgroundColor('#87ceeb')
  const platforms=this.physics.add.staticGroup()
  platforms.create(400,568,'ground').setScale(2).refreshBody()
  platforms.create(600,400,'ground');platforms.create(50,250,'ground');platforms.create(750,220,'ground')
  this.player=this.physics.add.sprite(100,450,'hero',0).setBounce(0.1).setCollideWorldBounds(true)
  this.anims.create({key:'run',frames:this.anims.generateFrameNumbers('hero',{start:0,end:2}),frameRate:10,repeat:-1})
  this.coinGroup=this.physics.add.group({key:'coin',repeat:11,setXY:{x:12,y:0,stepX:70}})
  this.coinGroup.children.iterate(c=>c.setBounceY(Phaser.Math.FloatBetween(.4,.8)))
  this.physics.add.collider(this.player,platforms)
  this.physics.add.collider(this.coinGroup,platforms)
  this.physics.add.overlap(this.player,this.coinGroup,this.getCoin,null,this)
  this.cursors=this.input.keyboard.createCursorKeys()
  this.touch={left:false,right:false,jump:false}
  ;['left','right','jump'].forEach(id=>{const el=document.getElementById(id);['pointerdown','pointerover'].forEach(e=>el.addEventListener(e,()=>this.touch[id]=true));['pointerup','pointerout','pointerleave','pointercancel'].forEach(e=>el.addEventListener(e,()=>this.touch[id]=false));})
}
getCoin(player,coin){coin.disableBody(true,true);this.sound.play('coinS')}
update(){
  const left=this.cursors.left.isDown||this.touch.left
  const right=this.cursors.right.isDown||this.touch.right
  if(left){this.player.setVelocityX(-160);this.player.anims.play('run',true);this.player.flipX=true}
  else if(right){this.player.setVelocityX(160);this.player.anims.play('run',true);this.player.flipX=false}
  else{this.player.setVelocityX(0);this.player.anims.stop();this.player.setFrame(1)}
  if((this.cursors.up.isDown||this.touch.jump)&&this.player.body.touching.down){this.player.setVelocityY(-330);this.sound.play('jump')}
}}
new Phaser.Game({type:Phaser.AUTO,width:800,height:600,physics:{default:'arcade',arcade:{gravity:{y:500},debug:false}},scene:MainScene})