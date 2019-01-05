// マウスを左右に動かすとrectが左右に動くヤツ作る。
// クリックでビーム発射（？）
var pos_x = 240;
var fire_img; // 炎の画像その1
var fire_2_img; // 炎の画像その2

function preload(){
  fire_img = loadImage("./assets/fire.png"); // preloadで画像データを読み込む
  fire_2_img = loadImage("./assets/fire_2.png");
}

function setup(){
  createCanvas(480, 320);
  background(220);
}

function draw(){
  clear();
  background(220);
  rect(pos_x, 300, 60, 5);
  drawSprites();
}

function mouseMoved(){
  pos_x = mouseX;
  if(pos_x < 0){ pos_x = 0; }
  if(pos_x > 420){ pos_x = 420; }
}

function mousePressed(){
  // createSpriteの位置指定は中心らしいのでそれを考慮している（300-18, pos_x + 9）
  //fire = createSprite(pos_x + 30, 282, 9, 36);
  fire = createSprite(pos_x + 30, 293, 15, 15);
  //fire.addImage(fire_img);
  fire.addImage(fire_2_img);
  fire.setVelocity(0, -5);
}
