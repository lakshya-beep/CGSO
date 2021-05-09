var car, wall;

function setup(){
carimage=loadImage("images/car.png");

  car = createSprite(50, 200, 50, 50);
  car.addImage(carimage);
  
  wall = createSprite(1200, 200, 50, 100);


  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;
}

function draw(){


  if (wall.x-car.x <(car.width+wall.width/2)) {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if (deformation > 180) {
      car.shapeColour = "red";
    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColour = "yellow";
    }
    if (deformation < 100) {
      car.shapeColour = "green";
  
    }
drawSprites();
}

}