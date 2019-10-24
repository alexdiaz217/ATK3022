var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var spider, spiderRight, spiderLeft;
var fly;
var flies = [];
var note;
var spiderpic;
var web;
var lost;
var win;

function setup() {
  createCanvas(800, 800);
  note = loadFont('assets/Notable-Regular.ttf')
  spiderpic = loadImage("assets/spidercatchtitle.png")
  web = loadImage("assets/spiderwebgame.png")
  lost = loadImage("assets/lost.png")
  win = loadImage("winscreen.png")

  flies[0] = loadImage("assets/fly1.png");
  flies[1] = loadImage("assets/fly2.png");
  flies[2] = loadImage("assets/fly3.png");

  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }

  spiderRight = loadImage("assets/spider.gif");
  spiderLeft = loadImage("assets/spider.gif");
  spider = spiderRight;

  fly = loadImage("assets/fly1.png")

  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);

}

function draw() {
  switch (myState) {

    case 0:
      background('black');
      image(spiderpic, 400, 300);
      textFont(note, 36);
      text("HUNGRY SPIDER", 220, 150);
      textFont(note, 24);
      text("CLICK TO PLAY", 260, 610);
      text("Eat all the flies before the timer runs out!", 10, 700);
      fill('white')
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
      background(100);
      image(lost, 400, 400);
      textFont(note, 36);
      text("YOU LOST! sorry.", 200, 200);
      fill('black')
      break;

    case 3:
      background('blue');
      image(win, 400, 400);
      text("YOU WIN!", 100, 100);
      break;
  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
      resetTheGame();
      myState = 0;
      break;

    case 3:
      resetTheGame();
      myState = 0;
      break;
  }
}

function resetTheGame() {

  cars = [];

  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

function Car() {
  //attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.flyNum = floor(random(flies.length - 1));
  this.timer = 0;
  this.maxTimer = random(10, 30);
  this.mySize = random(50, 100);

  this.display = function() {
    fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 100, 50);
    //ellipse(this.pos.x-40, this.pos.y+30, 25, 25);
    //ellipse(this.pos.x+40, this.pos.y+30, 25, 25);
    //image(bird, this.pos.x, this.pos.y, 100, 100);
    image(flies[this.flyNum], this.pos.x, this.pos.y, this.mySize, this.mySize);

    this.timer = this.timer + 1;

    if (this.timer > this.maxTimer) {

      this.flyNum = this.flyNum + 1;
      if (this.flyNum > flies.length - 1) this.flyNum = 0;
      this.timer = 0;
    }

  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) spider = spiderLeft;
  if (keyCode === RIGHT_ARROW) spider = spiderRight;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}

function game() {
  background(100);
  image(web, 350, 400, 1200, 1200);

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    //collision detection
    if (cars[i].pos.dist(frogPos) < 20) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    myState = 2; //they WON!
  }
  fill('green');
  image(spider, frogPos.x, frogPos.y, 100, 100);
  checkForKeys(); //moves frog
}
