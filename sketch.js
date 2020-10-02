
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rope1;
var roof;
var bob,bob1,bob2,bob3,bob4;



function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	World = engine.world;
	

	//Create the Bodies Here.
     //rope1 = new Rope(bob.body,roof.body);
      roof = new Roof(400,100,300,10)
      bob = new Bob(300,400,30)
      bob1 = new Bob(400,400,30)
      bob2 = new Bob(500,400,30)
      bob3 = new Bob(600,400,30)
      bob4 = new Bob(700,400,30)


  Engine.run(engine);
  
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  drawSprites();
  //rope1.display();
  roof.display();
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
}



