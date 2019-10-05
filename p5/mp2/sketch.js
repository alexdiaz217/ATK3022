var myState = 0;
var timer = 0;
var x = 0;
var velocity = 0;
var note;

function setup() {
  //put setup code here
  createCanvas(800, 800);
  note = loadFont('assets/Notable-Regular.ttf')
  background(100);
}

function draw() {
  //put drawing code here
  fill(0);


  switch (myState) {

    case 0:
      background(100);
      textFont(note, 24);
      text('THIS IS PAULIE', 100, 100);
      fill('black')
      square(95, 360, 80);

      //limbs and head
      fill('tan');
      rect(60, 452, 40, 98);
      rect(170, 452, 40, 98);
      rect(100, 385, 70, 70);

      // Draw a circle eyes
      fill('white');
      circle(150, 410, 20);
      circle(120, 410, 20);

      fill('black');
      rect(125, 430, 20, 5);

      fill('brown');
      circle(150, 410, 10);
      circle(120, 410, 10);

      fill('blue');
      rect(100, 550, 40, 98);
      rect(130, 550, 40, 98);

      fill('black');
      square(60, 450, 45);
      square(165, 450, 45);

      fill('black');
      rect(100, 452, 70, 98);
      break;

    case 1:
      background(255, 0, 0);
      textFont(note, 24);
      text('PAULIE FINDS A MYSTERIOUS BUTTON', 100, 100);
      fill('black')
      square(400, 360, 80);

      //limbs and head
      fill('tan');
      rect(365, 452, 40, 98);
      rect(475, 452, 40, 98);
      rect(405, 385, 70, 70);

      // Draw a circle eyes
      fill('white');
      circle(455, 410, 20);
      circle(425, 410, 20);

      fill('black');
      rect(430, 430, 20, 5);

      fill('brown');
      circle(460, 410, 10);
      circle(430, 410, 10);

      fill('blue');
      rect(405, 550, 40, 98);
      rect(435, 550, 40, 98);

      fill('black');
      square(365, 450, 45);
      square(470, 450, 45);

      fill('black');
      rect(405, 452, 70, 98);

      fill('white');
      circle(700, 450, 200);

      fill('green');
      circle(700, 450, 150);
      fill('black');
      break;

    case 2:
      background(127, 0, 0);
      textFont(note, 24);
      text('"WHAT COULD IT BE?", PAULIE WONDERS', 100, 100);
      square(400, 340, 200);
      //limbs and head
      fill('tan');
      rect(415, 400, 170, 170);
      rect(365, 600, 40, 100);
      rect(580, 600, 40, 100);

      fill('black');
      rect(500, 530, 50, 5);
      //eyes
      fill('white');
      circle(540, 450, 50);
      circle(460, 450, 50);

      fill('brown');
      circle(540, 440, 25);
      circle(460, 440, 25);

      fill('black');
      square(330, 560, 100);
      square(570, 560, 100);

      fill('black');
      rect(415, 565, 170, 198);
      break;

    case 3:

      background(255, 0, 0);
      textFont(note, 20);
      text('PAULIE TAKES HIS CHANCE AND WANTS PRESS IT', 80, 80);
      fill('black')
      square(400, 360, 80);

      fill('white');
      circle(700, 450, 200);
      fill('green');
      circle(700, 450, 150);
      fill('black');
      text('PRESS', 650, 450);

      //limbs and head
      fill('tan');
      rect(365, 452, 40, 98);
      rect(500, 452, 140, 38);
      rect(405, 385, 70, 70);

      // Draw a circle eyes
      fill('white');
      circle(455, 410, 20);
      circle(425, 410, 20);

      fill('black');
      rect(430, 430, 20, 5);

      fill('brown');
      circle(460, 410, 10);
      circle(430, 410, 10);

      fill('blue');
      rect(405, 550, 40, 98);
      rect(435, 550, 40, 98);

      fill('black');
      square(365, 450, 45);
      square(470, 450, 45);

      fill('black');
      rect(405, 452, 70, 98);

      background(100);
      textFont(note, 24);
      text('THIS IS PAULIE', 100, 100);
      fill('black')
      square(95, 360, 80);

      //limbs and head
      fill('tan');
      rect(60, 452, 40, 98);
      rect(170, 452, 40, 98);
      rect(100, 385, 70, 70);

      // Draw a circle eyes
      fill('white');
      circle(150, 410, 20);
      circle(120, 410, 20);

      fill('black');
      rect(125, 430, 20, 5);

      fill('brown');
      circle(150, 410, 10);
      circle(120, 410, 10);

      fill('blue');
      rect(100, 550, 40, 98);
      rect(130, 550, 40, 98);

      fill('black');
      square(60, 450, 45);
      square(165, 450, 45);

      fill('black');
      rect(100, 452, 70, 98);











  }
  timer++;
  if (timer > 200) {
    timer = 0;
    myState++;
    if (myState > 3) {
      myState = 3;


    }
  }
}
