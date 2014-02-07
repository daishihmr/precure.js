(function() {

/**
 * ふたりはプリキュア
 *
 * @constant
 * @type precure.Series
 */
precure.unmarked = new precure.Series("ふたりはプリキュア", new Date("2004-02-29T15:00:00.000Z"), new Date("2005-03-01T15:00:00.000Z"));
precure.series.push(precure.unmarked);

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

black.setExtraData({
    "cv": "本名陽子",
    "birthday": new Date("1990-11-09T15:00:00.000Z")
});
white.setExtraData({
    "cv": "ゆかな",
    "birthday": new Date("1990-05-03T15:00:00.000Z")
});

})();
