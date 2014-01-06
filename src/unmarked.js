(function() {

precure.unmarked = new precure.Series("ふたりはプリキュア", new Date(2004, 2, 1), new Date(2005, 1, 30));

var black = new precure.Girl([
    "美墨なぎさ",
    "キュアブラック"
], [
    null,
    "デュアル・オーロラ・ウェイブ！\n光の使者キュアブラック！\n光の使者キュアホワイト！\n闇の力のしもべたちよ！\nとっととおうちに帰りなさい！"
], "雪城ほのか");

var white = new precure.Girl([
    "雪城ほのか",
    "キュアホワイト"
], [
    null,
    "デュアル・オーロラ・ウェイブ！\n光の使者キュアブラック！\n光の使者キュアホワイト！\n闇の力のしもべたちよ！\nとっととおうちに帰りなさい！"
], "美墨なぎさ");

precure.unmarked.girls[0] = black;
precure.unmarked.girls[1] = white;

})();
