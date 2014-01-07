(function() {

/**
 * ハートキャッチプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.heartcatch = new precure.Series("ハートキャッチプリキュア!", new Date(2010, 2, 7), new Date(2011, 1, 30));

var tsubomi = new precure.Girl([
    "花咲つぼみ",
    "キュアブロッサム"
], [
    null,
    "プリキュア・オープンマイハート！\n大地に咲く一輪の花！キュアブロッサム！"
]);

var erika = new precure.Girl([
    "来海えりか",
    "キュアマリン"
], [
    null,
    "プリキュア・オープンマイハート！\n海風に揺れる一輪の花！キュアマリン！"
]);

var itsuki = new precure.Girl([
    "明堂院いつき",
    "キュアサンシャイン"
], [
    null,
    "プリキュア・オープンマイハート！\n陽の光浴びる一輪の花！キュアサンシャイン！"
]);

var yuri = new precure.Girl([
    "月影ゆり",
    "キュアムーンライト"
], [
    null,
    "プリキュア・オープンマイハート！\n月光に冴える一輪の花！キュアムーンライト！"
]);

precure.heartcatch.girls[0] = tsubomi;
precure.heartcatch.girls[1] = erika;
precure.heartcatch.girls[2] = itsuki;
precure.heartcatch.girls[3] = yuri;

})();
