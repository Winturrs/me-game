
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var scaredycat,scaredycat2;
var piskeloa;


function preload(){
  scaredycat =loadAnimation("steve.gif");
  scaredycat2 = loadAnimation("steveoo.gif");
  
}








function setup() {
  createCanvas(5000,5000);
  engine = Engine.create();
  world = engine.world;
edges = createEdgeSprites();
  piskeloa = createSprite(177,168);
piskeloa.addAnimation("piskeloa",scaredycat);
piskeloa.addAnimation("piskeloa",scaredycat2);
piskeloa.scale = 0.15

  wall2 = new Wall(0,100,40,10000);
  wall3 = new Wall(100,0,10000,40);
  wall4 = new Wall(5000,0,40,10000);
  wall5 = new Wall(0,5000,10000,40);
  wall6 = new Wall(305,170,40,280);
  wall7 = new Wall(305,460,40,280);
  wall8 = new Wall(305,750,40,280);
  //wall9 = new Wall(305,913,40,280);
  //wall10 = new Wall(402,1075,235,40)
  //wall11 = new Wall(549,1074,235,40)
  //wall12 = new Wall(778,1074,235,40)
  //wall13 = new Wall(1011,1074,235,40)
 // wall14 = new Wall(305,1420,40,280)
 // wall15 = new Wall(305,1701,40,280)
  //wall16 = new Wall(305,1981,40,280)
  //wall17 = new Wall(305,2261,40,280)
  //wall18 = new Wall(402,2414,235,40)
  //wall19 = new Wall(582,2414,235,40)
  //wall20 = new Wall(772,2414,235,40)
  //wall21 = new Wall(902,2414,235,40)
 // wall22 = new Wall(305,2710,40,280)
 // wall23 = new Wall(305,)
  //wall24 = new Wall()
 //wall25 = new Wall()
 //wall26 = new Wall()
 //wall27 = new Wall()
 //wall28 = new Wall()
 //wall29 = new Wall()
 //wall30 = new Wall()
 //wall31 = new Wall()
 //wall32 = new Wall()
 //wall33 = new Wall()
 //wall34 = new Wall()




}







function draw() {
  background(255,255,255);
  text(mouseX +","+ mouseY,mouseX,mouseY);
  Engine.update(engine);

if(keyDown("DOWN_ARROW")){
  piskeloa.velocityY = 3
}
if(keyDown("UP_ARROW")){
  piskeloa.velocityY = -3
}
if(keyDown("LEFT_ARROW")){
  piskeloa.velocityX = -3
}
if(keyDown("RIGHT_ARROW")){
  piskeloa.velocityX = 3
}
piskeloa.bounceOff(edges);
piskeloa.bounceOff(wall6);


 
  wall2.show();
  wall3.show();
  wall4.show();
  wall5.show();
  wall6.show();
  wall7.show();
  wall8.show();
 // wall9.show();
 // wall10.show();
 // wall11.show();
 // wall12.show();
 // wall13.show();
 // wall14.show();
 // wall15.show();
 // wall16.show();
 // wall17.show();
 // wall18.show();
  //wall19.show();
 // wall20.show();
 // wall21.show();
 // wall22.show();
 // wall23.show();
 // wall24.show();
 // wall25.show();
 // wall26.show();
 // wall27.show();
 // wall28.show();










  drawSprites();

}