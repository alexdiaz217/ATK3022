var myState = 0 ;

function setup() {
  createCanvas(800, 800);
  background(100);
}

function draw() {
  //put drawing code here
  switch(myState) {
    case 0:
    break ;

    case 1:
    //put a timer in here -
    //if timer counted up to 200, go to state 2 and reset timer!
    break ;

    case 2:
    break ;

    case 3:
    break ;

    case 4:
    break ;

  }

}


function mouseReleased() {
  if (myState == 0) {
    myState = 1 ;
  }
}
