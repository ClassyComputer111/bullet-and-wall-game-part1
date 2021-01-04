var bullet1;


var wall1;

var speed;
var weight;

var thickness;
var bulletRightEdge;
var wallLeftEdge;








function setup() {
  createCanvas(1300,400);

  speed = random(50,70);
  weight = random(400,52);
  thickness = random(30,83);
  
  wall1 = createSprite(1200, 200,thickness,height/2);
  
  
 bullet1= createSprite(80,200,50,10);
  bullet1.velocityX = speed;
  bullet1.debug = true;
  
  
}
function draw() {

  background("yellow");  
  
 
  
   if(hasCollided(bullet1,wall1)) {
    bullet1.velocityX = 0;
     var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);

     if(damage>10) {
       wall1.shapeColor = color("pink");
       Text("hi",1200,200)
     }
     if(damage<10) {
       wall1.shapeColor = color("red");
       Text("hello",1200,200)
     }
   }
 
  drawSprites();
}

function hasCollided(bullet,wall) {

bullet.RightEdge = bullet1.x +bullet1.width;
   wallLeftEdge = wall1.x;
   if(bulletRightEdge>=wallLeftEdge) {
     return true;
   }
    return false;
}





