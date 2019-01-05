// とりあえずスプライトの初歩

function setup(){
  createCanvas(480, 320);
}

function draw(){
  background(225);

  fill(0);
  textAlign(CENTER);
  text("Click to create a new sprite", width/2, height/2); // 文字の出力
  drawSprites(); // スプライトを描画
}

function mousePressed(){
  // マウスクリックした場所にスプライトを発生させる
  var s = createSprite(mouseX, mouseY, 30, 30);

  // 何も指定がない場合、スプライトのデフォルトは第3, 第4引数を辺の長さとする長方形で、
  // 色もランダムに設定される
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
  // s.setVelocity(random(-5, 5), random(-5, 5)); // これでもよい
}
