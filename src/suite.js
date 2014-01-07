(function() {

/**
 * スイートプリキュア♪
 *
 * @constant
 * @type precure.Series
 */
precure.suite = new precure.Series("スイートプリキュア♪", new Date(2011, 2, 6), new Date(2012, 1, 29));

var msg = "レッツプレイ！プリキュア・モジュレーション！\n爪弾くは荒ぶる調べ！キュアメロディ！\n爪弾くはたおやかな調べ！キュアリズム！";

var hibiki = new precure.Girl([
    "北条響",
    "キュアメロディ"
], [
    null,
    msg
], "南野奏");

var kanade = new precure.Girl([
    "南野奏",
    "キュアリズム"
], [
    null,
    msg
], "北条響");

var ellen = new precure.Girl([
    "黒川エレン",
    "キュアビート"
], [
    null,
    "レッツプレイ！プリキュア・モジュレーション！\n爪弾くは魂の調べ！キュアビート！"
]);

var ako = new precure.Girl([
    "調辺アコ",
    "キュアミューズ"
], [
    null,
    "レッツプレイ！プリキュア・モジュレーション！\n爪弾くは女神の調べ！キュアミューズ！"
]);

precure.suite.girls[0] = hibiki;
precure.suite.girls[1] = kanade;
precure.suite.girls[2] = ellen;
precure.suite.girls[3] = ako;

})();
