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

> // 作品名
> var mh = precure.maxheart;
> mh.title
'ふたりはプリキュア Max Heart'

> // 現在放送中タイトル
> precure.now.title
'ハピネスチャージプリキュア!'

> // 初回放送開始日時
> precure.smile.startedDate
Sun Feb 05 2012 08:30:00 GMT+0900 (JST)

> // 名前の取得（変身前）
> var f = precure.five;
> f.girls[0].name
'夢原のぞみ'

> // 変身
> f.girls[0].transform()
'プリキュア・メタモルフォーゼ！\n大いなる希望の力！キュアドリーム！'

> // 名前の取得（変身後）
> f.girls[0].name
'キュアドリーム'

> // ふたりで変身するプリキュアの場合
> var p = precure.suite;
> p.girls[0].name
'北条響'

> // 単独で変身するとエラー
> p.girls[0].transform()
Error: partner is invalid.

> p.girls[1].name
'南野奏'

> // ふたりいっしょなら変身できる！
> p.girls[0].transform(p.girls[1]);
'レッツプレイ！プリキュア・モジュレーション！\n爪弾くはあらぶる調べ！キュアメロディ！\n爪弾くはたおやかな調べ！キュアリズム！'

> p.girls[0].name
'キュアメロディ'

> p.girls[1].name
'キュアリズム'

> // オールスターズの人数
> precure.allStars.length
38

> // キュアエコーはプリキュア
> precure.allStars[28].name
'坂上あゆみ'


~~~
