function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 800);


}

function draw() {
  background(0, 150, 300);
    fill(0);

    if (mouseIsPressed) {

  background(0, 50, 100);
  noStroke()

  fill('white');
  ellipse(252, 144, 72, 72);

  let s = 'Can not sleep at night...';
  fill('white');
  text(s, 200, 200, 370, 380); // Text wraps within text box

  fill(255);
  text(mouseX + ',' + mouseY, 20, 20);

  // cloud
noStroke();
ellipse(100,100,30);
ellipse(110,110,30);
ellipse(120,95,50,40);
ellipse(130,105,30);

// Draw a rectangle at location (4, 636) with a width and height of 720.
fill('olive');
rect(4, 636, 720, 720);

fill('black')
square(95, 360, 80);

//limbs and head
fill('tan');
  rect(60,452,40,98);
  rect(170,452,40,98);
  rect(100,385,70,70);

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
rect(100,550,40,98);
rect(130,550,40,98);

fill('black');
  square(60, 450, 45);
  square(165, 450, 45);

  fill('black');
  rect(100,452,70,98);

} else {
  fill('orange');
  ellipse(252, 144, 72, 72);

  let s = 'This is Tom. Tom has a habit of being tired during the day, but';
  fill(50);
  text(s, 200, 200, 370, 380); // Text wraps within text box


  fill(255);
  text(mouseX + ',' + mouseY, 20, 20);

  // cloud
noStroke();
ellipse(100,100,30);
ellipse(110,110,30);
ellipse(120,95,50,40);
ellipse(130,105,30);

// Draw a rectangle at location (4, 636) with a width and height of 720.
fill('green');
rect(4, 636, 720, 720);

fill('black')
square(95, 360, 80);

//limbs and head
fill('tan');
  rect(60,452,40,98);
  rect(170,452,40,98);
  rect(100,385,70,70);

  // Draw a circle eyes
  fill('black')
  rect(140, 405, 20, 5);
  rect(110, 405, 20, 5);

  // Draw a circle for mouth
  circle(135, 430, 10);


fill('blue')
rect(100,550,40,98);
rect(130,550,40,98);

fill('black');
  square(60, 450, 45);
  square(165, 450, 45);

  fill('black');
  rect(100,452,70,98);
}

}
