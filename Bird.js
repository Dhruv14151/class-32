class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this .smokeImage= loadImage("sprites/smoke.png");
    this .tra=[]

  }

  display() {
var p=this.body.position
var pos=[p.x,p.y]
if(this.body.velocity.x>10 && p.x>200)
this.tra.push(pos);
    super.display();
    for(var i=0;i<this.tra.length;i++){
      image(this.smokeImage,this.tra[i][0],this.tra[i][1])
    }
  }
}
