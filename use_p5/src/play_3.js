// マウスを左右に動かすとrectが左右に動くヤツ作る。
// 右クリックでビーム発射（？）
var pos_x = 240;
var fire_img; // 炎の画像

function preload(){
  fire_img = loadImage("./assets/fire.png"); // preloadで画像データを読み込む
}

function setup(){
  createCanvas(480, 320);
  background(220);
}

function draw(){
  clear();
  background(220);
  rect(pos_x, 300, 59, 5);
  drawSprites();
}

function mouseMoved(){
  pos_x = mouseX;
  if(pos_x < 0){ pos_x = 0; }
  if(pos_x > 420){ pos_x = 420; }
}

function mousePressed(){
  fire = createSprite(pos_x + 29, 282, 9, 36);
  console.log(fire_img);
  fire.addImage(fire_img);
  fire.setVelocity(0, -5);
}
