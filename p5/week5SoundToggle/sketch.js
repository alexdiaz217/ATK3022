var song1;


function preload (){
  song1 = loadSound('assets/GoldbergV1.mp3')
}

function setup () {
  createCanvas(800, 800);
  song1.play();
}

function draw() {

}

function mouseReleased() {
  if (song1.isplaying()) {
    song1.pause();
  } else {
    song1.play();
  }
}
