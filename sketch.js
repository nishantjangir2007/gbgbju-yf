var fixedRect, movingRect;
var fi2,fi3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fi2=createSprite(400,500,60,100);
  fi2.shapeColor="green";
  fi3=createSprite(50,50,60,100);
  fi3.shapeColor="green"
}

function draw() {
  background("skyblue");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  //    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
   //   && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    //  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
   // movingRect.shapeColor = "red";
    //fixedRect.shapeColor = "red";
  //
  //istouching();
if (istouching(movingRect,fi3)) {
  text("touched",600,50)
  
}

  drawSprites();
}
function istouching(ob1,ob2){
  if(ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y-ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
      ob1.shapeColor = "red";
      ob2.shapeColor =  "red";
return true;
}
else {
  ob1.shapeColor = "green";
  ob2.shapeColor = "green";
  return false;
}
}