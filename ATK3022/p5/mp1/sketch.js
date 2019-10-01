function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 800);


}

function draw() {
  background(0, 100, 200);
  noStroke()

  fill('orange');
  ellipse(252, 144, 72, 72);

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

// Draw a rectangle at location (303, 638) with a width and height of 720.
fill('brown');
rect(303, 636, 55, 55);

}

function mouseReleased() {

    console.log(mouseX + ',' + mouseY);
}
