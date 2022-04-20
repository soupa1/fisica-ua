const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;


var engine;
var world;
var ball;
var ball2;
var ground;
var ground2;
var wedge;
var angle=60;
var poly;


function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution: 1,
    frictionAir: 0.02,
  }

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world, ball);

  var ball2_options = {
    restitution: 0.3,
    frictionAir: 0.01,
  }

  ball2 = Bodies.circle(300,20,20,ball2_options);
  World.add(world, ball2);


  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  var ground2_options = {
    isStatic: true
  }

  ground2 = Bodies.rectangle(300,200,200,20,ground2_options);
  World.add(world,ground2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background("grey");
 Engine.update(engine);
 
 ellipse(ball.position.x, ball.position.y, 20, 20);
 ellipse(ball2.position.x, ball2.position.y, 20, 20);
 rect(ground.position.x, ground.position.y, 400, 20);
 rect(ground2.position.x, ground2.position.y, 200, 20);

}

