
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  monkey = createSprite(100, 560, 30, 30);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = .1;
  
  ground = createSprite(100, 590, 100000, 10);
  
  obstacleGroup = new Group();
  foodGroup = new Group();
  
  score = 0;

  
}


function draw() {
  background("white");
  
  
  text("Score: " + score, 300, 300);
   

  monkey.collide(ground);
  
 /* if (keyDown("space") && monkey.isTouching(ground)){
monkey.velocityY = -5;
  }
  monkey.velocityY = monkey.velocityY + .5;
  monkey.collide(ground); */
  
   //if (keyDown("space")  && monkey.isTouching(ground)){
     // monkey.velocityY = -10;
     // }
    monkey.velocityY = monkey.velocityY + .5;
   if (keyDown("space")){
      monkey.velocityY = -10;
      
      }
  
 ground.velocityX = 5;
  if (ground.x < -1000){ 
    ground.x = 100;
  }
  
  Obstacle();
  Fruit();
  
if (monkey.isTouching(foodGroup)){
  score = score + 1;
  foodGroup.destroyEach();
  
}
  if (monkey.isTouching(obstacleGroup)){
    score = score -1;
    obstacleGroup.destroyEach();
  }

  
  
  drawSprites();

  
}

function Obstacle(){
  if (frameCount%60 === 0){
    obstacle = createSprite(600, 580, 30, 30);
    obstacle.velocityX = -7;
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = .1;
    obstacleGroup.add(obstacle);
    
  }
  
}

function Fruit(){
  if (frameCount%70 === 0){
    banana = createSprite(600, 580, 20, 20);
    banana.velocityX = -8
    banana.y = Math.round(random(510, 580));
    
    banana.addImage(bananaImage);
    banana.scale = .1;
    foodGroup.add(banana);
  }
}





