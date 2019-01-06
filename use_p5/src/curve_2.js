function setup(){
  createCanvas(400, 400);
  noLoop();
  noFill(); // これがないと中身が白に・・
}

function draw(){
  background(225);
  translate(200, 200);
  points = [];
  for(var i = -500; i < 500; i++){
    var t = i / 10;
    points.push(createVector(t, (t * t - 2 * t + 3) * 0.2));
  }
  strokeWeight(0.2);
  beginShape();
  points.forEach(function(point){
    curveVertex(point.x, point.y);
  })
  endShape();
}
// 結構きれいに補間できるんね・・・これ使えるんだったらあれ要らないのか・・？
