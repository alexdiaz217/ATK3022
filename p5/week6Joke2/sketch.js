var myState = 0;
var timer = 0;
var x = 0;
var velocity = 0;

function setup() {
  //put setup code here
  createCanvas(400, 400);
  background(100);
}

function draw() {
  //put drawing code here
  fill(0);


  switch (myState) {

    case 0:
      background(100);
      text('where did Luke Skywalker get his bionic arm?', 100, 100);
      break;

    case 1:
      background(255, 0, 0);
      text('at the second-hand store', 100, 100);
      break;

  }
  timer++;
  if (timer > 200) {
    timer = 0;
    myState++;
    if (myState > 2) {
      myState = 0;
    }
  }
}
