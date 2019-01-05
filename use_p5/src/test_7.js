var count = 0;
var x = 130, y = 0;

function setup(){
  createCanvas(300, 300);
  background(220);
}

function draw(){
  clear();
  background(220);
  count += 1;
  y = count * count * 0.98 / 10;
  rect(x, y, 40, 40);
  count += 1;
  if(y > 300){ count = 0; }
}
