(function() {

/**
 * Go!プリンセスプリキュア
 *
 * @constant
 * @type precure.Series
 */
precure.goprincess = new precure.Series(
    "Go!プリンセスプリキュア",
    new Date("Sun Feb 01 2015 08:30:00 GMT+0900 (JST)"),
    null
);
precure.series.push(precure.goprincess);

var girl0 = new precure.Girl([
    "春野はるか",
    "キュアフローラ"
], [
    null,
    "プリキュア、プリンセスエンゲージ!\n咲きほこる花のプリンセス! キュアフローラ!\n冷たい檻に閉ざされた夢、返していただきますわ!\nお覚悟は、よろしくて?"
]);

var girl1 = new precure.Girl([
    "海藤みなみ",
    "キュアマーメイド"
], [
    null,
    "プリキュア、プリンセスエンゲージ!\n澄みわたる海のプリンセス! キュアマーメイド!\n冷たい檻に閉ざされた夢、返していただきますわ!\nお覚悟は、よろしくて?"
]);

var girl2 = new precure.Girl([
    "天ノ川きらら",
    "キュアトゥインクル"
], [
    null,
    "プリキュア、プリンセスエンゲージ!\nきらめく星のプリンセス! キュアトゥインクル!\n冷たい檻に閉ざされた夢、返していただきますわ!\nお覚悟は、よろしくて?"
]);

var girl3 = new precure.Girl([
    "紅城トワ",
    "キュアスカーレット"
], [
    null,
    "プリキュア、プリンセスエンゲージ!\n深紅の炎のプリンセス! キュアスカーレット!\n冷たい檻に閉ざされた夢、返していただきますわ!\nお覚悟決めなさい!"
]);

precure.goprincess.girls[0] = girl0;
precure.goprincess.girls[1] = girl1;
precure.goprincess.girls[2] = girl2;
precure.goprincess.girls[3] = girl3;

girl0.setExtraData({
    "cv": "嶋村侑"
});
girl1.setExtraData({
    "cv": "浅野真澄",
});
girl2.setExtraData({
    "cv": "山村響"
});
girl3.setExtraData({
    "cv": "沢城みゆき"
});

})();
