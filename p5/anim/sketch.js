var pumpkin;
var x = 0;

function setup(){

  createCanvas(800, 800);
  pumpkin = loadImage("pics/pumpkin.jpg");
}

function draw() {
  background('white');
    image(pumpkin, 0, 0);

push();
translate(x, 0);
x += 3;
if (x > width);
