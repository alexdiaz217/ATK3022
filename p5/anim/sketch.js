var pumpkin;
var x = 0;

function setup(){

  createCanvas(800, 800);
}

let img;
function preload() {
  img = loadImage('assets/mp2street.jpg');
}
function setup() {
  image(img, 100, 100);
}

function draw() {
  background('white');
    image(pumpkin, 0, 0);

push();
translate(x, 0);
x += 3;
if (x > width);
