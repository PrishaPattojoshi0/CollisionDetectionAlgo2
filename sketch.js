var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,800);

  fixedRect = createSprite(400,400,80,40);
  fixedRect.shapeColor = "cyan";
  fixedRect.debug="true";

  movingRect = createSprite(300,200,80,40);
  movingRect.shapeColor = "cyan";
  movingRect.debug = "true";

  gameObject1 = createSprite(200,200,20,20);
  gameObject1.shapeColor = "blue";

  gameObject2 = createSprite(200,300,20,20);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(200,400,20,20);
  gameObject3.shapeColor = "blue";

  gameObject4 = createSprite(200,500,20,20);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.x-fixedRect.x);

  if (collisionDetection(movingRect,gameObject2)){}

  drawSprites();
}

function collisionDetection (object1,object2){
  if (object1.x-object2.x < object1.width/2+object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y-object2.y < object1.height/2+object2.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
    {
      object1.shapeColor = "orange";
      object2.shapeColor = "orange";
    }
    else {
      object1.shapeColor = "cyan";
      object2.shapeColor = "cyan";
    }
}