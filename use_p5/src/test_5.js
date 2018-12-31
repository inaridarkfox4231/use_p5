// 振幅表示 https://p5js.org/reference/#/p5.Amplitude
var sound, amplitude, cnv;
function preload(){
  sound = loadSound('./assets/ashikaze.wav');
}
function setup(){
  cnv = createCanvas(100, 100);
  amplitude = new p5.Amplitude();

  // クリックで曲の開始と停止を操作出来るようにする
  cnv.mouseClicked(function(){
    if(sound.isPlaying()){
      sound.stop();
    }else{
      sound.play();
    }
  })
}

function draw(){
  background(0);
  fill(255);
  var level = amplitude.getLevel(); // levelは0から1までの範囲の値
  var size = map(level, 0, 1, 0, 200); // level が0から1まで動く範囲に0から200を対応付ける。（一次関数）
  // つまり、levelが0から1まで動く間にsizeは0から200まで動く、いわば size = 200 * level という関数。
  ellipse(width / 2, height / 2, size, size);
}
