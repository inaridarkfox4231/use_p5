// 四角形を動かす
// HPが設定されていて攻撃を受けると減る、消えたりする
var pos_x = 240;
var fire_red; // 炎の画像その1
var fire_blue; // 炎の画像その2
var gauge = 0; // 炎の種類を分けるゲージ
var enemy_1_Img;
var enemy_2_Img;
var square; // squareのスプライト情報（こうするらしい）
var squareGroup;
var fire; // fireのスプライト情報（こうする？）
var fireGroup;

// 一旦、やめよう

function preload(){
  enemy_1_Img = loadImage("./assets/enemy_1.png");
  enemy_2_Img = loadImage("./assets/enemy_2.png");
  fire_red = loadImage("./assets/fire.png");
  fire_blue = loadImage("./assets/fire_2.png");
}

function setup(){
  createCanvas(480, 320);
  squareGroup = new Group();
  fireGroup = new Group();
  background(220);
}

function hello(){
  console.log('hello!');
}

function draw(){
  clear();
  background(220);
  rect(pos_x, 300, 30, 5);
  if(mouseIsPressed){ gauge += 2; if(gauge > 100){ gauge = 0; }}
  else{ gauge = 0; }
  drawgauge();
  if(fireGroup.size() > 0){ fire.collide(squareGroup, hello); }
  drawSprites();
}

function drawgauge(){
  rect(9, 9, 101, 11); // ゲージのふちがきちんと黒で分けられるように調整
  if(gauge < 80){ fill(255, 0, 0); }else{ fill(0, 0, 255); }
  noStroke(); // ゲージの輪郭線を消す
  rect(10, 10, gauge, 10);
}

function mouseMoved(){ // レファレンスに書いてあるけど、押したままだと発動しないよ。
  pos_x = mouseX;
  if(pos_x < 0){ pos_x = 0; }
  if(pos_x > 450){ pos_x = 450; }
}

function mouseReleased(){
  // ゲージの色による場合分け
  if(gauge < 80){
    fire = createSprite(pos_x + 15, 282, 9, 36);
    fire.addImage(fire_red);
    fire.name = "red"; // プロパティは勝手に追加できる（ここでは炎の名前を追加してみた）
  }else{
    fire = createSprite(pos_x + 15, 293, 15, 15);
    fire.addImage(fire_blue);
    fire.name = "blue"; // 割と自由にできる
  }
  fire.setVelocity(0, -5); // 速度
  fire.life = 50; // 消滅するまでのフレーム数をlife属性で指定できるんだって
  console.log(fire.name); // 付けた名前を発射時にコンソールに出力する
  fire.addToGroup(fireGroup);
}

// キーを押すと正方形が大量発生
function keyTyped(){
  if(key === 'c'){
    console.log(squareGroup.size());
    console.log(fireGroup.size());
    return;
  }
  if(!(key === 'a' || key === 'b')){ return; }
  square = createSprite(random(50, 350), random(50, 250), 20, 20);
  if(key === 'a'){
    square.tough = 2;
    square.addImage("one", enemy_1_Img);
  }else if(key === 'b'){
    square.tough = 1;
    square.addImage("two", enemy_2_Img);
  }
  square.addToGroup(squareGroup);
}
