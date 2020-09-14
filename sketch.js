var car1,wall1;
var speed,weight;
var zenia,wall2;
var taurus,wall3;
var cydop,wall4;

function setup() {
  createCanvas(1600,400);
  car1 = createSprite(50, 200, 50, 80);
  
  wall1 = createSprite(1500, 200, 60, height/2);
  wall1.shapeColor = (80,80,80);

  speed = random(45,80);
  weight = random(1500,3000);

  zenia = createSprite(50, 200, 50, 80);
  taurus = createSprite(50, 200, 50, 80);
  cydop = createSprite(50, 200, 50, 80);

  wall2 = createSprite(1500, 200, 60, height/2);
  wall2.shapeColor = (80,80,80);

  wall3 = createSprite(1500, 200, 60, height/2);
  wall3.shapeColor = (80,80,80);

  wall4 = createSprite(1500, 200, 60, height/2);
  wall4.shapeColor = (80,80,80);
}

function draw() {
  background("black");

  car1.velocityX = speed;

  function isTouching(car1, wall1) {
    if (car1.x - wall1.x < wall1.width / 2 + car1.width / 2
      && wall1.x - car1.x < wall1.width / 2 + car1.width / 2
      && car1.y - wall1.y < wall1.width / 2 + car1.width / 2
      && wall1.y - car1.y < wall1.width / 2 + car1.width / 2)
      ;
      deformation: 163
      car1.shapeColor = (230,230,0);
    
  }
   
  function isTouching(zenia, wall2) {
    if (zenia.x - wall2.x < wall2.width / 2 + zenia.width / 2
      && wall2.x - zenia.x < wall2.width / 2 + zenia.width / 2
      && zenia.y - wall2.y < wall2.width / 2 + zenia.width / 2
      && wall2.y - zenia.y < wall2.width / 2 + zenia.width / 2)
      ;
      deformation: 180
      zenia.shapeColor = (230,230,0);

    }
     
    function isTouching(taurus, wall3) {
      if (taurus.x - wall3.x < wall3.width / 2 + taurus.width / 2
        && wall3.x - taurus.x < wall3.width / 2 + taurus.width / 2
        && taurus.y - wall3.y < wall3.width / 2 + taurus.width / 2
        && wall3.y - taurus.y < wall3.width / 2 + taurus.width / 2)
        ;
        deformation: 84
        taurus.shapeColor = (0,255,0);
  
      }

       function isTouching(cydop,wall4) {
         if (cydop.x - wall4.x < wall4.width / 2 + cydop.width / 2
          && wall4.x - cydop.x < wall4.width / 2 + cydop.width / 2
          && cydop.y - wall4.y < wall4.width / 2 + cydop.width / 2
          && wall4.y - cydop.y < wall4.width / 2 + cydop.width / 2)
          ;
          deformation: 135
          cydop.shapecolor =(230,230,0);
       }
        
      car1.display();
      wall1.display();
      zenia.display();
      wall2.display();
      taurus.display();
      wall3.display();
      cydop.display();
      wall4.display();

}
