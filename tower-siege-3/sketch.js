const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var block1,block2,block3,block,block5,block6,block7,block8,block9,ball;
var slingshot;
var score;

function preload(){
  backgroundImg=loadImage('image/bg1.png');
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1920,1080);

  stand=new Ground (830,555,880,10)
  stand2=new Ground(830,395,660,10)
  stand3=new Ground(830,255,250,10)
  stand4=new Ground(200,430,50,10);

  

  block1=new Box(830,195,50,50);
  block2=new Box(700,335,50,50);
  block3=new Box(830,335,50,50);
  block4=new Box(960,335,50,50);
  block5=new Box(540,495,50,50);
  block6=new Box(700,495,50,50);
  block7=new Box(830,495,50,50);
  block8=new Box(960,495,50,50);
  block9=new Box(1090,495,50,50);

  ball=new Player(200,250,50)

  slingShot = new SlingShot(ball.body,{x:200,y:250});
}

function draw() {

  background(backgroundImg);
 
  Engine.update(engine);

  score=0;
  text('SCORE:'+score,750,40);
  
  stand.display()
  stand2.display()
  stand3.display()
  stand4.display();

  
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();


  ball.display()

  slingShot.display()
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(ball.body);
  }
  
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "image/bg1.png";
  }
  else{
      bg = "image/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}