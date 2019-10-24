var cars = [];
var frogPos;
var myState = 0;
var timer = 0;


function setup() {
  createCanvas(800, 800);

  for(var i = 0; i < 5; i++){
    cars.push(new Car());
  }

  frogPos = createVector(width/2, height-80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);

}

function draw() {
  switch (myState) {

    case 0:
    background('white');
    text("welcome, click to play", 100, 100);
    break;

    case 1:
    game();

    timer++;
    if (timer > 600) {
      timer = 0;
      myState = 2;
    }
    break;

    case 2:
    background('red');
    text("lose!", 100, 100);
    break;

    case 3:
    background('black');
      text("win!", 100, 100);
    break;
  }
}

function mouseReleased(){
  switch(myState){
    case 0:
    myState = 1 ;
    break;

    case 2:
    resetTheGame();
    myState = 0 ;
    break;

    case 3:
    resetTheGame();
    myState = 0 ;
    break;
  }
}

function resetTheGame(){

  cars = [];

  for(var i = 0; i < 5; i++){
    cars.push(new Car());
  }
  timer = 0;
}

function Car(){
  //attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5),random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  this.display = function(){
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 100, 50);
    ellipse(this.pos.x-40, this.pos.y+30, 25, 25);
    ellipse(this.pos.x+40, this.pos.y+30, 25, 25);
  }

  this.drive = function(){
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function checkForKeys(){
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.y = frogPos.y + 5;
}

function game(){
  background(100);

  for (var i = 0; i < cars.length; i++){
  cars[i].display();
  cars[i].drive();

  //collision detection
  if (cars[i].pos.dist(frogPos) < 20){
    cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    timer = 0;
    myState = 3; //they WON!
  }
  fill('green');
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();//moves frog
}
