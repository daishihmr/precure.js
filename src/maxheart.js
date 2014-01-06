(function() {

precure.maxheart = new precure.Series("ふたりはプリキュア Max Heart", new Date(2005, 2, 6), new Date(2006, 1, 29));

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

var luminus = new precure.Girl([
    "九条ひかり",
    "シャイニールミナス"
], [
    null,
    "ルミナス・シャイニング・ストリーム！\n"
]);

precure.maxheart.girls[0] = black;
precure.maxheart.girls[1] = white;
precure.maxheart.girls[2] = luminus;

})();
