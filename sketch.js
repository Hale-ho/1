let xSlider;
let yslider;
let xspeedslider;
var x;
var y;
var xspeed;
var yspeed;
let button;

let r = 15;

function setup() {
  createCanvas(1000,600);
  xSlider = createSlider(0, 100, 100);
  xSlider.position(20, 20);
  ySlider = createSlider(0, 100, 0);
  ySlider.position(20, 50);
  xspeedSlider = createSlider(0, 100, 255);
  xspeedSlider.position(20, 80);
  yspeedSlider = createSlider(0, 100, 255);
  yspeedSlider.position(20, 115);
  button = createButton('你');
  button = createButton('好');
  button = createButton('嗎');
  button = createButton('？');
  button = createButton('！');
 button = createButton('Yeeeeeee');
  button = createButton('Yeeeeeee');
  button.position(20, 145);
  button.mousePressed(changeBG);
}
function changeBG() {
  x = xSlider.value();
  y = ySlider.value();
  xspeed = xspeedSlider.value();
  yspeed = yspeedSlider.value();
}
function draw() {
  background(60);
  text('x', xSlider.x * 2 + xSlider.width, 35);
  text('y', ySlider.x * 2 + ySlider.width, 65);
  text('xspeed', xspeedSlider.x * 2 + xspeedSlider.width, 95);
  text('yspeed', yspeedSlider.x * 2 + yspeedSlider.width, 130);
  ellipse(x, y, r*10, r*10);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }


}
