(function() {

/**
 * Yes! プリキュア5GoGo!
 *
 * @constant
 * @type precure.Series
 */
precure.fivegogo = new precure.Series("Yes! プリキュア5GoGo!", new Date(2008, 2, 3), new Date(2009, 1, 25));

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

})();
