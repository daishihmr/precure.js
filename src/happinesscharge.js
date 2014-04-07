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
    "プリキュア・くるりんミラーチェンジ！\n世界に広がるビッグな愛！キュアラブリー！"
]);

var hime = new precure.Girl([
    "白雪ひめ",
    "キュアプリンセス"
], [
    null,
    "プリキュア・くるりんミラーチェンジ！\n天空に舞う蒼き風！キュアプリンセス！"
]);

var yuuko = new precure.Girl([
    "大森ゆうこ",
    "キュアハニー"
], [
    null,
    ""
]);

var iona = new precure.Girl([
    "氷川いおな",
    "キュアフォーチュン"
], [
    null,
    ""
]);

precure.happinesscharge.girls[0] = megumi;
precure.happinesscharge.girls[1] = hime;
precure.happinesscharge.girls[2] = yuuko;
precure.happinesscharge.girls[3] = iona;

})();
