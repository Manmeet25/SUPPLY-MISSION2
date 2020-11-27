const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;


var engine, world, packageSprite,helicopter,ground,helicopterIMG,packageIMG,grIMG,packageBody,b1,b2,b3,nI,n,back;
function preload(){
  helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
  grIMG = loadImage("f7abd8ab39d92835139687d70b556d58.jpg")
  nI= loadImage("human.jpg")
  
}
function setup() {
  createCanvas(800,700);
  engine=Engine.create();
  world=engine.world;
  
  n= createSprite(200,650,20,20);
  n.addImage("net",nI);
  n.scale =0.2
  helicopter= createSprite(width/2, 80, 10,10);
  helicopter.addImage("hele",helicopterIMG)
  helicopter.scale=0.68

  packageSprite = createSprite(width/2,80,50,50);
  packageSprite.addImage("pack",packageIMG)
  packageSprite.scale= 0.2
  engine = Engine.create();
  world = engine.world;
  
  back = createSprite(400,200,20,20)
  back.addImage("background",grIMG);
  back.scale=1.5

  packageBody = Bodies.circle(width/2 , 80 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
  Engine.run(engine);
  
  ground = new Ground(400,670,800,20)
  b1 = new Ground(width/2,690,200,15)
  b2 = new Ground(300,647,15,100)
  b3 = new Ground(500,647,15,100)
}

function draw() {
  background(0);
  Engine.update(engine);
  back.display();
  packageSprite.display();
  helicopter.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 // ground.display();
  b1.display();
  b2.display();
  b3.display();
  n.display();
  
}
function keyPressed(){
if(keyDown(DOWN_ARROW)){
  packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
  Engine.run(engine);
}
}