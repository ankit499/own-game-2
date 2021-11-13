var bg,bgImg;
var ship,shipImg, asteroid, asteroidImg,ag,bullet,bug;
var score=0;
var bullets=100;
var restart,shoot;
var gameState = "fight";

function preload(){
  bgImg = loadImage("spacebackground.png");
asteroidImg= loadImage("asteroid.png");
  shipImg = loadImage("space ship.png");
  bulletImg= loadImage("bullet.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1            
  
 
  ship = createSprite(1150,300,0,0);
  ship.addImage(shipImg);
  ship.scale = 0.5;
 

 


  ag=new Group();
  bug=new Group();

}

function draw() {
   
  background.velocityX = -2
   if( background.x<0){
     background.x =  background.width/2;
  }
   

  if(gameState==="fight"){

if (keyDown("space")) {
  createbullet();
  
}

if(keyDown("UP_ARROW")||touches.length>0){
  ship.y = ship.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 ship.y = ship.y+30
}

if(keyWentDown("space")){
    createbullet()
  shoot.play();
}

if(ag.isTouching(bug)){
  for(var i=0;i<ag.length;i++){
  
    if(ag[i].isTouching(bug)){
  ag[i].destroy();
  bug.destroyEach();
  score+=1;
    }
  }
  }
  if(bullets===0){
    gamestate="bullet"
    lose.play();
    }
    if(ag.isTouching(ship)){
  gamestate="lost";
  
    }

    if(score===80){
      gamestate="won";
  
    }
  createasteroid()
  }
  drawSprites();

  textSize(24);
  fill("white");
  text("score:"+score,displayWidth-200,displayHeight/6-50);
  
  if(gameState==="lost"){
    textSize(100);
    fill("red");
    text("Game Over",400,400);
    ag.destroyEach();
    ship.destroy();
  
  
  }
  
  else if(gameState==="won"){
    textSize(150);
    fill("yellow");
    text("You Won",400,400);
    ag.destroyEach();
    asteroid.destroy();
  
  
  }

  else if(gameState==="bullet"){
    textSize(100);
    fill("red");
    text("You ran out of bullets",400,400);
    ag.destroyEach();
   ship.destroy();
  bug.destroyEach();
  
  }
}

function createasteroid(){
  if(frameCount%20===0){
    asteroid=createSprite(displayWidth+50,random(displayHeight/4,displayHeight+300),10,10);
    asteroid.addImage(asteroidImg);
    asteroid.scale=0.2;
    asteroid.velocitX=-10;
  ag.add(asteroid);
  }
}

function createbullet(){

  
  bullet=createSprite(displayWidth/5,200,50,100);
  bullet.y=ship.y-25;
  bullet.addImage(bulletImg);
  bullet.scale=0.03;
  bullet.velocityX=10;
bug.add(bullet);
bullets=bullets-1;

}
function reset(){
  
}




