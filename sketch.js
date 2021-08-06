const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var bgImage;
var engine, world;
var snowflake=[]

function preload(){
  bgImage=loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
 // createSprite(400,200,50,50);
  engine=Engine.create()
  world=engine.world;
}

function draw() {
  background(bgImage);  
  Engine.update(engine);
  if(frameCount % 30===0){
    snowflake.push(new Snow(random(10,790),0));
  }
  for(var i=0;i<snowflake.length;i++){
    snowflake[i].display()

  }
  
  //drawSprites();
}