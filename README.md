precure.js
==========

All about Japanese battle heroine "Pretty Cure".

Inspired by Acme::PrettyCure and drillbits/pycure.

Usage
-----

~~~

$ npm install precure.js
$ node

> var precure = require('precure.js').precure

> var mh = precure.maxheart;
> mh.title
'ふたりはプリキュア Max Heart'

> precure.now.title
'ドキドキ!プリキュア'

> precure.smile.startedDate
Mon Mar 05 2012 00:00:00 GMT+0900 (東京 (標準時))

> var f = precure.five;
> f.girls[0].name
'夢原のぞみ'

> f.girls[0].transform()
'プリキュア・メタモルフォーゼ！\n大いなる希望の力！キュアドリーム！'

> f.girls[0].name
'キュアドリーム'

> var p = precure.suite;
> p.girls[0].name
'北条響'

> p.girls[0].transform()
Error: partner is invalid.

> p.girls[0].transform("南野奏");
'レッツプレイ！プリキュア・モジュレーション！\n爪弾くはあらぶる調べ！キュアメロディ！\n爪弾くはたおやかな調べ！キュアリズム！'

> p.girls[0].name
'キュアメロディ'

> precure.allStars.length
38

> precure.allStars[28].name
'坂上あゆみ'


~~~
