var i, j, t, x, y;

function setup(){
  createCanvas(500, 500);
  //noLoop();
  noFill();
}

function draw(){
  background(225);
  translate(width / 2, height / 2);
  rotate(frameCount * PI / 120);
  points = [];
  for(i = 0; i <= 210; i++){
    var t = (i / 100) * PI;
    x = cos(3 * t) + sin(4 * t); // 3と4を別の整数にするといろいろ変化する
    y = sin(3 * t) + cos(4 * t);
    point = createVector(x * 100, y * 100);
    points.push(point);
  }
  strokeWeight(1.0);
  beginShape();
  points.forEach(function(point){
    curveVertex(point.x, point.y);
  })
  endShape();
}
