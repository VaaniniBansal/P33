class Snow{
    constructor(x,y){
        var options={
            'density': 0.5,
            'restitution':0.5
        }
        this.body=Bodies.circle(x,y,20,options)
        this.image=loadImage("snow4.webp");
        World.add(world,this.body);
        this.r=40;
    }
 display(){
  var pos=this.body.position;
  var angle=this.body.angle;
  push()
  translate(pos.x,pos.y);
  rotate(angle);
  stroke(255);
  strokeWeight(4);
//   ellipseMode(CENTER)
//   ellipse(0,0,this.r,this.r);
  imageMode(CENTER);
  image(this.image,0,0,this.r,this.r);
  pop()
 }
}