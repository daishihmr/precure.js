(function() {

/**
 * ふたりはプリキュア
 *
 * @constant
 * @type precure.Series
 */
precure.unmarked = new precure.Series("ふたりはプリキュア", new Date("Sun Feb 01 2004 08:30:00 GMT+0900 (JST)"), new Date("Sun Jan 30 2005 08:30:00 GMT+0900 (JST)"));

var msg = "デュアル・オーロラ・ウェイブ！\n光の使者キュアブラック！\n光の使者キュアホワイト！\nふたりはプリキュア！";

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

precure.unmarked.girls[0] = black;
precure.unmarked.girls[1] = white;

})();
