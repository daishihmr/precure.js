(function() {

/**
 * ふたりはプリキュア Max Heart
 *
 * @constant
 * @type precure.Series
 */
precure.maxheart = new precure.Series("ふたりはプリキュア Max Heart", new Date("2005-03-05T15:00:00.000Z"), new Date("2006-02-28T15:00:00.000Z"));
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
    "birthday": new Date("1990-11-09T15:00:00.000Z")
});
white.setExtraData({
    "cv": "ゆかな",
    "birthday": new Date("1990-05-03T15:00:00.000Z")
});
luminus.setExtraData({
    "cv": "田中理恵",
    "birthday": new Date("1992-10-08T15:00:00.000Z")
});

})();
