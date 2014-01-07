(function() {

/**
 * ふたりはプリキュア Max Heart
 *
 * @constant
 * @type precure.Series
 */
precure.maxheart = new precure.Series("ふたりはプリキュア Max Heart", new Date(2005, 2, 6), new Date(2006, 1, 29));

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

})();
