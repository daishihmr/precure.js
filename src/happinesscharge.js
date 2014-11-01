(function() {

/**
 * ハピネスチャージプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.happinesscharge = new precure.Series("ハピネスチャージプリキュア!", new Date("Sun Feb 02 2014 08:30:00 GMT+0900 (JST)"), null);
precure.series.push(precure.happinesscharge);

var megumi = new precure.Girl([
    "愛乃めぐみ",
    "キュアラブリー"
], [
    null,
    "プリキュア・くるりんミラーチェンジ！\n世界に広がるビッグな愛！キュアラブリー！"
]);

var hime = new precure.Girl([
    "白雪ひめ",
    "キュアプリンセス"
], [
    null,
    "プリキュア・くるりんミラーチェンジ！\n天空に舞う蒼き風！キュアプリンセス！"
]);

var girl3 = new precure.Girl([
    "大森ゆうこ",
    "キュアハニー"
], [
    null,
    "プリキュア・くるりんミラーチェンジ！\n大地に実る命の光！キュアハニー！"
]);

var girl4 = new precure.Girl([
    "氷川いおな",
    "キュアフォーチュン"
], [
    null,
    "プリキュア・きらりんスターシンフォニー！\n夜空にきらめく希望の星！キュアフォーチュン！"
]);

precure.happinesscharge.girls[0] = megumi;
precure.happinesscharge.girls[1] = hime;
precure.happinesscharge.girls[2] = girl3;
precure.happinesscharge.girls[3] = girl4;

megumi.setExtraData({
    "cv": "中島愛"
});
hime.setExtraData({
    "cv": "潘めぐみ",
    "realName": "ヒメルダ・ウインドウ・キュアクイーン・オブ・ザ・ブルースカイ"
});
girl3.setExtraData({
    "cv": "北川里奈"
});
girl4.setExtraData({
    "cv": "戸松遥"
});

})();
