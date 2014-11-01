(function() {

/**
 * フレッシュプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.fresh = new precure.Series("フレッシュプリキュア!", new Date("Sun Feb 01 2009 08:30:00 GMT+0900 (JST)"), new Date("Sun Jan 31 2010 08:30:00 GMT+0900 (JST)"));

var love = new precure.Girl([
    "桃園ラブ",
    "キュアピーチ"
], [
    null,
    "チェインジ・プリキュア・ビートアップ！\nピンクのハートは愛あるしるし！\nもぎたてフレッシュ！キュアピーチ！"
]);

var mktn = new precure.Girl([
    "蒼乃美希",
    "キュアベリー"
], [
    null,
    "チェインジ・プリキュア・ビートアップ！\nブルーのハートは希望のしるし！\nつみたてフレッシュ！キュアベリー！"
]);

var bukky = new precure.Girl([
    "山吹祈里",
    "キュアパイン"
], [
    null,
    "チェインジ・プリキュア・ビートアップ！\nイエローハートは祈りのしるし！\nとれたてフレッシュ！キュアパイン！"
]);

var setsuna = new precure.Girl([
    "東せつな",
    "キュアパッション"
], [
    null,
    "チェインジ・プリキュア・ビートアップ！\n真っ赤なハートは幸せの証！\nうれたてフレッシュ！キュアパッション！"
]);

precure.fresh.girls[0] = love;
precure.fresh.girls[1] = mktn;
precure.fresh.girls[2] = bukky;
precure.fresh.girls[3] = setsuna;

})();
