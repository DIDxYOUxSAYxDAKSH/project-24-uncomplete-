
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

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new PAPER(10,350,20);
	
	db1 = new DUSTBIN (700,350,10,80,PI/7);

	ground = new Ground(400,370,800,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.display();

	paper.display();

	db1.display();

	keyPressed();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(Body.paper, paper.body.position.x,{x:85,y:-85} )
	}
}


