var fixedRect, movingRect;
var go3,go4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  go3 = createSprite(100,100,100,20)
  go4 = createSprite(300,300,100,20)
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;




 if (isTouching(movingRect,go3)){

  movingRect.shapeColor = "red";
  go3.shapeColor = "red";

 }
 else{
  movingRect.shapeColor = "green";
  //go3.shapeColor = "green";


 }
  

  drawSprites();
}

