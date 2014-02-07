(function() {

/**
 * ハピネスチャージプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.happinesscharge = new precure.Series("ハピネスチャージプリキュア!", new Date("2014-03-01T15:00:00.000Z"), new Date("2015-02-24T15:00:00.000Z"));
precure.series.push(precure.happinesscharge);

var megumi = new precure.Girl([
    "愛乃めぐみ",
    "キュアラブリー"
], [
    null,
    ""
]);

var hime = new precure.Girl([
    "白雪ひめ",
    "キュアプリンセス"
], [
    null,
    ""
]);

var girl3 = new precure.Girl([
    "",
    "キュアハニー"
], [
    null,
    ""
]);

var girl4 = new precure.Girl([
    "",
    "キュアフォーチュン"
], [
    null,
    ""
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
});
girl4.setExtraData({
    "cv": "戸松遥"
});

})();
