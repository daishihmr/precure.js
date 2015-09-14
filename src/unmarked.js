(function() {

/**
 * ふたりはプリキュア
 *
 * @constant
 * @type precure.Series
 */
precure.unmarked = new precure.Series(
    "ふたりはプリキュア",
    new Date("Sun Feb 01 2004 08:30:00 GMT+0900 (JST)"),
    new Date("Sun Jan 30 2005 09:00:00 GMT+0900 (JST)")
);
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
    "birthday": new Date("Sat Nov 10 1990 00:00:00 GMT+0900 (JST)")
});
white.setExtraData({
    "cv": "ゆかな",
    "birthday": new Date("Fri May 04 1990 00:00:00 GMT+0900 (JST)")
});

var team = new precure.Team(2);
team.add(black);
team.add(white);
team.on("completed", function() {
    precure.out("闇の力のしもべたちよ!\nとっととお家に帰りなさい!");
});

precure.unmarked.team = team;

})();
