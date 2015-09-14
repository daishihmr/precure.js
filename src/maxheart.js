(function() {

/**
 * ふたりはプリキュア Max Heart
 *
 * @constant
 * @type precure.Series
 */
precure.maxheart = new precure.Series(
    "ふたりはプリキュア Max Heart",
    new Date("Sun Feb 06 2005 08:30:00 GMT+0900 (JST)"),
    new Date("Sun Jan 29 2006 09:00:00 GMT+0900 (JST)")
);
precure.series.push(precure.maxheart);

var msg = "デュアル・オーロラ・ウェイブ！\n光の使者キュアブラック！\n光の使者キュアホワイト！\nふたりはプリキュア！"

var black = new precure.Girl([
    "美墨なぎさ",
    "キュアブラック"
], [
    null,
    msg
], "雪城ほのか");

var white = new precure.Girl([
    "雪城ほのか",
    "キュアホワイト"
], [
    null,
    msg
], "美墨なぎさ");

var luminus = new precure.Girl([
    "九条ひかり",
    "シャイニールミナス"
], [
    null,
    "ルミナス・シャイニング・ストリーム！\n輝く命！シャイニールミナス！光の心と光の意志、総てをひとつにするために！"
]);

precure.maxheart.girls[0] = black;
precure.maxheart.girls[1] = white;
precure.maxheart.girls[2] = luminus;

black.setExtraData({
    "cv": "本名陽子",
    "birthday": new Date("Sat Nov 10 1990 00:00:00 GMT+0900 (JST)")
});
white.setExtraData({
    "cv": "ゆかな",
    "birthday": new Date("Fri May 04 1990 00:00:00 GMT+0900 (JST)")
});
luminus.setExtraData({
    "cv": "田中理恵",
    "birthday": new Date("Fri Oct 09 1992 00:00:00 GMT+0900 (JST)")
});

})();
