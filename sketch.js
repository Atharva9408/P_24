
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var W1,W2,W3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper=new Paper(200,200,25);
	ground=new Ground(width/2,height-35,width,20);
	W1=new DB(1160,280,20,150);
	W2=new DB(1340,280,20,150);
	W3=new DB(1250,height-55,200,20);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");
 ground.display();
 W1.display();
 W2.display();
 W3.display();
 paper.display();
 keyPressed();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

