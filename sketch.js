
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
var plane_options={
	isStatic: true
}

var block1 = {
	isStatic: true
}
	
var block2 = {
	isStatic: true
}

var particle_opitions = {
	restitution: 0.4,
	friction: 0.02
}

particle1 = Bodies.circle(220,10,10, particle_opitions);
world.add(world,particle);

particle2 = Bodies.circle(220,10,10, particle_opitions);
world.add(world,particle);

particle3 = Bodies.circle(220,10,10, particle_opitions);
world.add(world,particle);

particle4 = Bodies.circle(220,10,10, particle_opitions);
world.add(world,particle);

particle5 = Bodies.circle(220,10,10, particle_opitions);
world.add(world,particle);



    rotator1 = Bodies.rectangle(250, 200, 150, 20);
 World.add(world,rotator1);

 Matter.Body.rotate(rotator1, angle1)
 push();
 translate(rotator1.position.x, rotator1.position.y);
 rotate(angle1);
 rect(0,0,150,20);
 pop();
 angle1 +=0.2;

 rotator2 = Bodies.rectangle(250, 200, 150, 20);
 World.add(world,rotator2);

 Matter.Body.rotate(rotator2, angle2)
 push();
 translate(rotator2.position.x, rotator2.position.y);
 rotate(angle2);
 rect(0,0,150,20);
 pop();
 angle2 +=0.4;

 rotator3 = Bodies.rectangle(250, 200, 150, 20);
 World.add(world,rotator3);

 Matter.Body.rotate(rotator3, angle3)
 push();
 translate(rotator3.position.x, rotator3.position.y);
 rotate(angle3);
 rect(0,0,150,20);
 pop();
 angle3 +=0.6;

 Engine.run(engine);
}


function draw() {
  fill();
  rectMode(CENTER);
  ellipseMode();

  ellipse(particle_opitions);
  
  background(0);

  Engine.update(engine);

  drawSprites();


}




