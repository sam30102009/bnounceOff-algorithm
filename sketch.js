var fixedRect, movingRect;
var a,b;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  a = createSprite(300,400,20,20)
  a.shapeColor = 'red';
  a.velocityX = +5
  b = createSprite(500,400,20,20)
  b.shapeColor = 'blue';
  b.velocityX = -5
}

function draw() {
  background(0,0,0);  
bounceOff(a,b);  
  drawSprites();
}