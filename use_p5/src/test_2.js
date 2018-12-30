const Width = 640;
const Height = 480;

var yPos = 0;
function setup(){
  createCanvas(Width, Height);
  frameRate(30);
}
function draw(){
  background(124, 88, 250);
  yPos = yPos - 1;
  if(yPos < 0){
    yPos = Height;
  }
  stroke(255); // 白線
  line(0, yPos, width, yPos);
}
