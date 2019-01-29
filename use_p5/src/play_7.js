var square;
var squareGroup;

function setup(){
  createCanvas(400, 800);
  squareGroup = new Group();
  for(i = 0; i < 3; i++){
    square = createSprite(width / 2, height, 20, 20);
    square.addImage(loadImage("./assets/enemy_" + i + ".png"));
    square.addToGroup(squareGroup);
  }
}

function draw(){
  clear();
  background(220);
  squareGroup[0].position.x = width / 2 + 60 * sin(frameCount * PI / 10);
  squareGroup[0].position.y = height - frameCount * PI;
  squareGroup[1].position.x = width / 2 - 60 * sin(frameCount * PI / 10);
  squareGroup[1].position.y = height - frameCount * PI;
  squareGroup[2].position.x = width / 2;
  squareGroup[2].position.y = height - frameCount * PI;
  drawSprites();
}

function keyTyped(){
  if(key === 'a'){
    square.scale = 2; // aを押すと大きさ2倍（中心拡大）
  }else if(key === 'b'){
    square.scale = 1; // bを押すと戻る。おもしろーい。
  }
}
