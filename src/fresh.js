(function() {

/**
 * フレッシュプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.fresh = new precure.Series("フレッシュプリキュア!", new Date("2009-02-28T15:00:00.000Z"), new Date("2010-03-02T15:00:00.000Z"));
precure.series.push(precure.fresh);

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

love.setExtraData({
    "cv": "沖佳苗"
});
mktn.setExtraData({
    "cv": "喜多村英梨"
});
bukky.setExtraData({
    "cv": "中川亜紀子"
});
setsuna.setExtraData({
    "cv": "小松由佳"
});

})();
