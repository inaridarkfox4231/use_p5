var repnum = 45;
var startRad = 5;
var starStrkWeight = .1;
var xnoiseCord = Math.random(2000) - 1000, ynoiseCord = Math.random(2000) - 1000;
function setup(){
  createCanvas(600, 600);
  // noFill何だっけ・・ああ、枠だけみたいなやつ、なんで指定してるんだろう。
  noFill();
}

// frameCountでフレームのカウントを取得できるらしい（知らなかった）
function draw(){
  background(255);
  // translateを使うと座標の始点を移動できるんだっけか？
  translate(width / 2, height / 2);
  // rotateを使うと座標軸の回転ができるんだっけか・・
  rotate(frameCount / 100);
  var peaks = [];
  for(var h = 0; h < repnum; h++){
    for(var i = 0; i < 360; i += 36){
      var j;
      if(i % 72 == 0){
        // noiseって何ですか・・
        j = startRad + ((starStrkWeight + 4) * h) + (noise(xnoiseCord) * 800 - 500);
      }else{
        j = ((startRad + ((starStrkWeight + 4) * h)) + (noise(ynoiseCord) * 800 - 500)) * .65;
      }
      // ああここのpushは普通にarrayにベクトル放り込んでるだけですね
      peaks.push(createVector(sin(radians(i)) * j, cos(radians(i)) * j));
    }
    // peaksには450個くらい点が入っていますね
    stroke(96, 100);
    // 何だっけ、線の太さ？（0.1に指定してある）
    strokeWeight(starStrkWeight);
    beginShape();
    // jsにもforEachってあるんだ？
    peaks.forEach(peak => {
      // ベクトルオブジェクトのx成分とy成分を参照しているらしい
      // ここでcurveVertex. これをbeginShapeとendShapeの間で使うと補間してくれるらしい。
      curveVertex(peak.x, peak.y);
    });
    endShape();
  }
  xnoiseCord += .005;
  ynoiseCord += .005
}

// う～ん・・もうちょっと簡単な例で・・
// forEachの簡単な例
// var fruits = ['apple', 'banana', 'melon'];
// fruits.forEach(function( fruit ){  // ここアロー関数で fruit => って書けるらしい
//   console.log( fruit );
// })
