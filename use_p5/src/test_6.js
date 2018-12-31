// noLoop関数（drawを1回だけ呼び出す）https://p5js.org/examples/structure-no-loop.html
function setup(){
  createCanvas(640, 480);
  stroke(255); // 線の色は白
  //noLoop();
  frameRate(30); // fpsを独自に指定

  y = height * 0.5; // heightってやるとデフォルトでcanvasの高さになる、widthで幅。そういう仕組みらしい。
}

function draw(){
  background(0); // 背景を黒で初期化
  y = y - 1;
  if(y < 0){ y = height; }
  line(0, y, width, y);
}
