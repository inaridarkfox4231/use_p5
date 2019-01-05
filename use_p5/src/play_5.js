// マウスを左右に動かすとrectが左右に動くヤツ作る。
// クリックで2種類の火の玉を発射
var pos_x = 240;
var fire_red; // 炎の画像その1
var fire_blue; // 炎の画像その2
var gauge = 0; // 炎の種類を分けるゲージ

function preload(){
  fire_red = loadImage("./assets/fire.png");
  fire_blue = loadImage("./assets/fire_2.png");
}

function setup(){
  createCanvas(480, 320);
  background(220);
}

function draw(){
  clear();
  background(220);
  rect(pos_x, 300, 30, 5);
  if(mouseIsPressed){ gauge += 2; if(gauge > 100){ gauge = 0; }}
  else{ gauge = 0; }
  drawgauge();
  drawSprites();
}

function drawgauge(){
  rect(9, 9, 101, 11); // ゲージのふちがきちんと黒で分けられるように調整
  if(gauge < 80){ fill(255, 0, 0); }else{ fill(0, 0, 255); }
  noStroke(); // ゲージの輪郭線を消す
  rect(10, 10, gauge, 10);
}

function mouseMoved(){
  pos_x = mouseX;
  if(pos_x < 0){ pos_x = 0; }
  if(pos_x > 450){ pos_x = 450; }
}

function mouseClicked(){
  // ゲージの色による場合分け
  if(gauge < 80){
    fire = createSprite(pos_x + 15, 282, 9, 36);
    fire.addImage(fire_red);
  }else{
    fire = createSprite(pos_x + 15, 293, 15, 15);
    fire.addImage(fire_blue);
  }
  fire.setVelocity(0, -5); // 速度
  fire.life = 50; // 消滅するまでのフレーム数をlife属性で指定できるんだって
}
// 青でしか倒せない敵
// 青は赤の3倍ダメージとか？あるいは貫通能力でもいい
// 赤は弱い攻撃、青は強い攻撃っていう風にしたい
