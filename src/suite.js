(function() {

/**
 * スイートプリキュア♪
 *
 * @constant
 * @type precure.Series
 */
precure.suite = new precure.Series("スイートプリキュア♪", new Date("Sun Feb 06 2011 08:30:00 GMT+0900 (JST)"), new Date("Sun Jan 29 2012 08:30:00 GMT+0900 (JST)"));
precure.series.push(precure.suite);

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

hibiki.setExtraData({
    "cv": "小清水亜美"
});
kanade.setExtraData({
    "cv": "折笠富美子"
});
ellen.setExtraData({
    "cv": "豊口めぐみ"
});
ako.setExtraData({
    "cv": "大久保瑠美"
});

})();
