// 四角形を動かす
// HPが設定されていて攻撃を受けると減る、消えたりする

var enemy_1_Img;
var enemy_2_Img;
var squareGroup;
squareGroup = new Group;

var fireGroup;
fireGroup = new Group;

function preload(){
  enemy_1_Img = loadImage("./assets/enemy_1.png");
  enemy_2_Img = loadImage("./assets/enemy_2.png");
}

function setup(){
  createCanvas(480, 320);
  background(220);
}

function draw(){
  drawSprites();
}

// キーを押すと正方形が大量発生
function keyTyped(){
  if(key === 'a'){
    square = createSprite(random(50, 350), random(50, 250), 20, 20);
    square.tough = 2;
    square.addImage("one", enemy_1_Img);
    square.addToGroup(squareGroup);
  }else if(key === 'b'){
    square = createSprite(random(50, 350), random(50, 250), 20, 20);
    square.tough = 1;
    square.addImage("two", enemy_2_Img);
    square.addToGroup(squareGroup);
  }
}
