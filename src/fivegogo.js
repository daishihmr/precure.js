(function() {

/**
 * Yes! プリキュア5GoGo!
 *
 * @constant
 * @type precure.Series
 */
precure.fivegogo = new precure.Series("Yes! プリキュア5GoGo!", new Date("Sun Feb 03 2008 08:30:00 GMT+0900 (JST)"), new Date("Sun Jan 25 2009 08:30:00 GMT+0900 (JST)"));
precure.series.push(precure.fivegogo);

var nozomi = new precure.Girl([
    "夢原のぞみ",
    "キュアドリーム"
], [
    null,
    "プリキュア・メタモルフォーゼ！\n大いなる希望の力！キュアドリーム！"
]);

var rin = new precure.Girl([
    "夏木りん",
    "キュアルージュ"
], [
    null,
    "プリキュア・メタモルフォーゼ！\n情熱の赤い炎！キュアルージュ！"
]);

var urara = new precure.Girl([
    "春日野うらら",
    "キュアレモネード"
], [
    null,
    "プリキュア・メタモルフォーゼ！\nはじけるレモンの香り！キュアレモネード！"
]);

var komachi = new precure.Girl([
    "秋元こまち",
    "キュアミント"
], [
    null,
    "プリキュア・メタモルフォーゼ！\nやすらぎの緑の大地！キュアミント！"
]);

var karen = new precure.Girl([
    "水無月かれん",
    "キュアアクア"
], [
    null,
    "プリキュア・メタモルフォーゼ！\n知性の青き泉！キュアアクア！"
]);

var kurumi = new precure.Girl([
    "美々野くるみ",
    "ミルキーローズ"
], [
    null,
    "スカイローズ・トランスレイト！\n青い薔薇は秘密のしるし！ミルキーローズ！"
]);

precure.fivegogo.girls[0] = nozomi;
precure.fivegogo.girls[1] = rin;
precure.fivegogo.girls[2] = urara;
precure.fivegogo.girls[3] = komachi;
precure.fivegogo.girls[4] = karen;
precure.fivegogo.girls[5] = kurumi;

nozomi.setExtraData({
    "cv": "三瓶由布子"
});
rin.setExtraData({
    "cv": "竹内順子"
});
urara.setExtraData({
    "cv": "伊瀬茉莉也"
});
komachi.setExtraData({
    "cv": "永野愛"
});
karen.setExtraData({
    "cv": "前田愛"
});
kurumi.setExtraData({
    "cv": "仙台エリ"
});

})();
