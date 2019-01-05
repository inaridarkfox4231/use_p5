// キャラクターを出してみる

var fox;

function setup(){
  createCanvas(480, 320);

  // スプライトを作る
  fox = createSprite(240, 160, 28, 28); // 初期位置とサイズ

  // ラベルと、二つの画像を登録
  var myAnimation = fox.addAnimation('normal', './assets/fox_normal_1.png', './assets/fox_normal_2.png');
  // 横の座標を固定
  // offX, offYは画面の中心からの変位なので注意する
  myAnimation.offY = 0;
  fox.addAnimation('dark', './assets/fox_dark_1.png', './assets/fox_dark_2.png')
  frameRate(10);
}

function draw(){
  background(225);
  drawSprites();
}

// クリックするたびにイメージが変わる
function mousePressed(){
  // mouseX, mouseYを使えばクリック位置の制御もできる
  console.log(fox.animation);
  if(fox.getAnimationLabel() == 'normal'){
    fox.changeAnimation('dark');
  }else{
    fox.changeAnimation('normal');
  }
}
