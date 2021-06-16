
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score = 0;
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400)

monkey = createSprite(40,340,20,20)
monkey.addAnimation("running",monkey_running)  
monkey.scale = 0.1  
  
ground = createSprite(200,380,400,20)

bananaImage = loadImage("banana.png")  
  
  foodGroup = new Group()
  obstacleGroup = new Group();
  
}


function draw() {

background(255,255,255)
text("lifetime: "+ score, 200,50);

      score = score + Math.round(getFrameRate()/60);

    ground.velocityX = -3 

    if (ground.x < 200){
      ground.x = ground.width/2;
    }

      if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
  spawnBanana();
  spawnObstacle();
  
 drawSprites();
}


function spawnBanana(){
  if(frameCount%80===0){
      var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    banana.lifetime = 220;
  
  foodGroup.add(banana)
  
  }
}

function spawnObstacle(){
  if(frameCount%100===0){
      var obstacle = createSprite(600,330,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3; 
    obstacle.lifetime = 220
  }
}

