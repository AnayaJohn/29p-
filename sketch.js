const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
  polygon_img= loadImage("polygon.png")
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);

  base= new Ground(400,400,800,10);

  base1= new Ground(390,230,180,20);
  
  //polygon=new Polygon(40,40)
  
  block1= new Box(330,235,30,40);
  block2= new Box(360,235,30,40);
  block3= new Box(390,235,30,40);
  block4= new Box(420,235,30,40);
  block5= new Box(450,235,30,40);

  block6= new Box(360,195,30,40);
  block7= new Box(390,195,30,40);
  block8= new Box(420,195,30,40);

  block9= new Box(390,155,30,40);

  polygon= Bodies.circle(50,200,20);
  //polygon= loadImage("polygon.png")
  World.add(world,polygon);

  //slingshot = new SlingShot(polygon.body,{x:200, y:50});
  slingShot = new SlingShot(this.polygon,{x:100,y:200});

  
  

}

function draw() {
  Engine.update(engine);
  background(0); 

  base.display();
  base1.display();

  //polygon.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  slingShot.display();

  imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

 // polygon.display();
  
  //drawSprites();
}

//function mouseDragged(){
  //  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
//}

function mouseReleased(){
  slingShot.fly();
}
//mouseReleased : slingShot.fly(); 