
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var world
var engine

function setup()
{
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world


  var box_options = {
    isStatic : true
  }

  box1 = Bodies.rectangle(300,370,50,50 , box_options)
  World.add(world , box1)

  box2 = Bodies.rectangle(220,370,50,50 , box_options)
  World.add(world , box2)

  box3 = Bodies.rectangle(140,370,50,50 , box_options)
  World.add(world , box3)

  box4 = Bodies.rectangle(180,320,50,50 , box_options)
  World.add(world , box4)

  box5 = Bodies.rectangle(250,320,50,50 , box_options)
  World.add(world , box5)

  box6 = Bodies.rectangle(213,270,50,50 , box_options)
  World.add(world , box6)

  var ball_options = {
    restitution : 1
  }

  
  ball = Bodies.circle(200,50,20,ball_options)
  World.add(world , ball)
}

function draw() 
{
  background("black");
  Engine.update(engine)

 fill("red")
 rect(box1.position.x , box1.position.y , 50,50)
 rectMode(CENTER)

 fill("blue")
 rect(box2.position.x , box2.position.y , 50,50)
 rectMode(CENTER)

 fill("pink")
 rect(box3.position.x , box3.position.y , 50,50)
 rectMode(CENTER)

 fill("yellow")
 rect(box4.position.x , box4.position.y , 50,50)
 rectMode(CENTER)

 fill("green")
 rect(box5.position.x , box5.position.y , 50,50)
 rectMode(CENTER)

 fill("cyan")
 rect(box6.position.x , box6.position.y , 50,50)
 rectMode(CENTER)

 fill("white")
 ellipse(ball.position.x , ball.position.y , 20 , 20)
 ellipseMode(RADIUS)
 
}

