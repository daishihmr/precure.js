(function() {

/**
 * ふたりはプリキュア
 *
 * @constant
 * @type precure.Series
 */
precure.unmarked = new precure.Series("ふたりはプリキュア", new Date(2004, 2, 1), new Date(2005, 1, 30));

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
