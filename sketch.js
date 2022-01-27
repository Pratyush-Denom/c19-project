var car,compCar,carImg,compCarImg,road,roadImg,music,invisible1,invisible2;
var barrier,barrierImg;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver,gameOverImg
var board ,boardImg;

function preload(){
    compCarImg = loadImage("top-car-view-png-34865.png");
    //CarImg = loadImage("top-car-view-png-34861.png");
    roadImg = loadImage("road.png");
    music = loadSound("www.fesliyanstudios.com.mp3");
    barrierImg = loadImage("kisspng-barricade-road-clip-art-fence-5a99ab25b9f233.8190760915200202617616.png");
    gameOverImg = loadImage("gameover.png");
    boardImg = loadImage("board.png");

}

function setup() {
    createCanvas(1200,800);
    road = createSprite(600,400);
    road.addImage(roadImg);
    compCar = createSprite(600,600,50,50);
    compCar.addImage(compCarImg);
    compCar.scale = 0.75;
    road.velocityY = 15 + (score/5);
    barrier = createSprite(Math.round(random(300,600)),Math.round(random(0,20)),50,50);
    barrier.velocityY = 12;
    barrier.addImage(barrierImg);
    barrier.scale = 0.2;
    board = createSprite(Math.round(random(640,900)),Math.round(random(20,50)),50,50);
    board.addImage(boardImg);
    board.velocityY = 12;
    board.scale = 0.1;
    
    gameOver = createSprite(600,400);
    gameOver.addImage(gameOverImg);
    gameOver.visible = false;
    
    
    
    

    
}

function draw() {
    background("black");
    
    //compCar.x=World.mouseX;
    if (road.y > 800){
        road.y = road.y/2;
        
      }
    if(keyDown("right") && gameState == PLAY){
          compCar.x = compCar.x + 10;
      }
    if(keyDown("left") && gameState == PLAY){
        compCar.x = compCar.x - 10;
    }
    //music.play();
    if (frameCount % 120 === 0 && gameState == PLAY) { 
    barrier.x = Math.round(random(300,600));
    barrier.y = Math.round(random(0,30));
    board.x = Math.round(random(640,900));
    board.y = Math.round(random(30,50));
    score = score+5;
    }
    if(compCar.isTouching(barrier) && gameState == PLAY){
        gameState = END;}
    else if(gameState == END){
        compCar.velocityY = 0;
        road.velocityY = 0;
        //barrier.destroy();
        gameOver.visible = true;
        barrier.visible = false;
        board.visible = false;
        
    }
    if(compCar.isTouching(board) && gameState == PLAY){
        gameState = END;
    }
    if(gameState == PLAY){
        road.velocityY = 15;
        barrier.velocityY = 12;
        board.velocityY = 12;
        barrier.visible = true;
        board.visible = true;
        
    }
        
        
        
        //score = score-score;
    
    if(mousePressedOver(gameOver)) {
        reset();
      }

    
    
    
    
    
    invisible1=createSprite(120,400,20,800);
    invisible2=createSprite(1100,400,20,800);
    invisible1.visible= false;
    invisible2.visible= false;
    
    
    
    
    
    
    
    
    
    
    
    
    compCar.collide (invisible1);
    compCar.collide (invisible2);



    
    
    
 drawSprites();
 textSize(20);
    fill("white")
    text("Score: "+ score, 300,50);
    if(gameState == END){
        textSize(30);
        fill("black");
        text("Press the game over button to restart",400,50);
    }
    
}
function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    score = 0;

}
