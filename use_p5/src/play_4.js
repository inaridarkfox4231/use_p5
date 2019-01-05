// マウスクリックで普通の炎、長押しで青い火の玉発射。
// ゲージが80%以上の時に青くなる感じで。左上にゲージを表示したいんですよね。
var gauge = 0;

function setup(){
  createCanvas(320, 200);
  background(220);
}

function draw(){
  clear();
  background(220);
  rect(100, 100, 200, 20);
  if(gauge > 80){
    fill(0, 0, 255);
  }else{
    fill(255, 0, 0);
  }
  rect(100, 100, 2 * gauge, 20);
  // マウスが押されている間だけゲージが上昇する。押すのをやめると0に戻る。
  if(mouseIsPressed){ gauge += 1; if(gauge > 100){ gauge = 0; }}
  else{ gauge = 0; }
  // 8割以上の時色が変わる。この時に発射すると青い玉が発射されるようにしたい。
}
