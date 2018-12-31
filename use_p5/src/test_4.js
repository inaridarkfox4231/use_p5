// 音楽の実験 https://p5js.org/reference/#/p5.SoundFile
// よーすくさんのウィンドサンバランドが流れるだけ
function preload(){
  mySound = loadSound('./assets/windsamba.mp3');
  // ここでロードしている
}

function setup(){
  mySound.setVolume(0.5); // ボリューム設定
  mySound.play(); // 曲を流す
}
