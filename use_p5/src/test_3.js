// 参考：https://blanche-toile.com/web/p5-js
const Width = 640;
const Height = 480;

function setup(){
  createCanvas(Width, Height);
  bug = new Jitter(); // オブジェクトの生成
}

function draw(){
  background(200); // 背景の色
  bug.move();
  bug.display();
}

// Jitter class
function Jitter(){
  this.x = random(Width);
  this.y = random(Height);
  this.diameter = random(10, 30);
  this.speed = 3;

  this.move = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
