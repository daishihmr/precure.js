precure.js
==========

All about Japanese battle heroine "Pretty Cure".

Inspired by Acme::PrettyCure and drillbits/pycure.

Usage
-----

~~~js

var p = precure["suite"];

console.log(p.girls[0].name); // ==> "北条響"

var m = p.girls[0].transform(); // ==> throw precure.PartnerInvalidError

var m = p.girls[0].transform("南野奏");

console.log(m); // ==> "レッツプレイ！プリキュア・モジュレーション！\n爪弾くはあらぶる調べ！キュアメロディ！\n爪弾くはたおやかな調べ！キュアリズム！\n届け！ふたりの組曲！スイートプリキュア♪"

console.log(p.girls[0].name); // ==> "キュアメロディ"

~~~