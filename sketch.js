var car , wall;
var speed , weight , deformation;
var gamestate , PLAY , END;

function setup() {
  createCanvas(1300,400);
  PLAY = 0;
  END = 1;
  gamestate = PLAY;
  wall = createSprite(1200 , 200  , 60 , height/2);
  car = createSprite(50, 200, 50, 50);
  deformation = 0;
  speed = Math.round(random(55 , 90));
  weight = Math.round(random(400 , 1500)); 
  wall.shapeColor = color(80 , 80 , 80);
  car.shapeColor = color(255 , 255 , 255);
}

function draw() {
  background(0 , 0 , 0); 
  fill(color(255 , 255 , 255));
  text("Speed : " + speed , 10 , 100);
  text("Weight : " + weight , 110 , 100);
  text("Deformation : " + deformation , 200 , 100);
  if(gamestate == PLAY){
    car.velocityX = (speed * 2)/3;
  } 
  
  if(car.isTouching(wall) || gamestate == END){
    car.setVelocity(0 , 0);
    deformation = Math.round((0.5 * weight * speed * speed)/22500);
    gamestate = END;
    if(deformation<100){
      car.shapeColor = color(0 , 255 , 0);
    }
    else if(deformation<=180){
      car.shapeColor = color(230 , 230 , 0);
    }
    else{
      car.shapeColor = color(255 , 0 , 0);
    }
    if(gamestate == END && keyWentDown("space")){
      gamestate = PLAY;
      deformation = 0;
      speed = Math.round(random(55 , 90));
      weight = Math.round(random(400 , 1500)); 
      car.shapeColor = color(255 , 255 , 255);
      car.x = 50;
    }
  }
  drawSprites();
}