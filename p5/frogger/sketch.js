var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaRight, yodaLeft;
var bird;
var birds = [];

function setup() {
  createCanvas(800, 800);

birds[0]= loadImage("assets/bird1.png");
birds[1]= loadImage("assets/bird2.png");
birds[2]= loadImage("assets/bird3.png");

  for(var i = 0; i < 5; i++){
    cars.push(new Car());
  }

  yodaRight = loadImage("assets/yodaRight.gif");
  yodaLeft = loadImage("assets/yodaLeft.gif");
  yoda = yodaRight;

bird = loadImage("assets/bird1.png")

  frogPos = createVector(width/2, height-80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);

}

function draw() {
  switch (myState) {

    case 0:
    background('blue');
    text("WELCOME, CLICK TO PLAY", 200, 200);
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
    text("YOU LOST! sorry.", 200, 200);
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
  this.birdNum = floor(random(birds.length-1));
  this.timer = 0;
  this.maxTimer = random(10, 30);

  this.display = function(){
    fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 100, 50);
    //ellipse(this.pos.x-40, this.pos.y+30, 25, 25);
    //ellipse(this.pos.x+40, this.pos.y+30, 25, 25);
  //image(bird, this.pos.x, this.pos.y, 100, 100);
  image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);

this.timer = this.timer + 1;

if (this.timer > this.maxTimer) {

  this.birdNum = this.birdNum + 1;
  if (this.birdNum > birds.length-1)this.birdNum = 0;
  this.timer = 0;
}

}

  this.drive = function(){
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed(){
  if (keyCode === LEFT_ARROW) yoda = yodaLeft;
  if (keyCode === RIGHT_ARROW) yoda = yodaRight;
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
    myState = 2; //they WON!
  }
  fill('green');
image(yoda, frogPos.x, frogPos.y, 100, 100);
  checkForKeys();//moves frog
}
