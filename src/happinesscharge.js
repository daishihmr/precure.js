(function() {

/**
 * ハピネスチャージプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.happinesscharge = new precure.Series("ハピネスチャージプリキュア!", new Date(2014, 2, 2), new Date(2015, 1, 25));

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
    "キュアフォーチュン"
], [
    null,
    ""
]);

var girl4 = new precure.Girl([
    "",
    "キュアハニー"
], [
    null,
    ""
]);

precure.happinesscharge.girls[0] = megumi;
precure.happinesscharge.girls[1] = hime;
precure.happinesscharge.girls[2] = girl3;
precure.happinesscharge.girls[3] = girl4;

})();
