const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0
var engine, world;
var box1, box2, box3

function preload()
{
  bg=loadImage("Backround.jpeg")
  hoopimg=loadImage("Hoop3.png")
  ballimg=loadImage("Ball.png")
  playerimg=loadImage("Player.png")
}
function setup() 
{

  engine= Engine.create();
  world=engine.world;

  
 ball =new Ball(631,140,40,40);


chain = new Chain(ball.body,{x:631,y:140})

box1 = Bodies.rectangle(380,180,50,20,{isStatic:true})
World.add(world,box1);

box2 = Bodies.rectangle(340,145,20,50,{isStatic:true})
World.add(world,box2);

box3 = Bodies.rectangle(420,145,20,50,{isStatic:true})
World.add(world,box3);



 console.log(ball);





  createCanvas(800,400);
  hoop=createSprite(390, 228, 50, 20);
  hoop.addImage(hoopimg)
  hoop.scale=1.9

  player=createSprite(670,271)
  player.addImage(playerimg)

  //ball=createSprite(631,155)
 // ball.addImage(ballimg)
  //ball.scale=0.15

}

function draw() 
{
  Engine.update(engine);


var collision = Matter.SAT.collides(ball.body,box1)
if (collision.collided){score=1}



  background(bg); 
  
  drawSprites();
fill("black")
textSize(25)
  text ("Score:"+ score ,45,30)
//rectMode(CENTER)
  //rect(box1.position.x,box1.position.y,50,20)

  //rectMode(CENTER)
  //rect(box2.position.x,box2.position.y,20,50)

  //rectMode(CENTER)
  //rect(box3.position.x,box3.position.y,20,50)
  


  ball.display();
  chain.display();

  //text("x : "+mouseX+"y : "+mouseY,mouseX,mouseY)
}


function mouseDragged (){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
  chain.fly()
  

}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(ball.body,{x:630,y:140})
    chain.attach(ball.body)
    
  }
}