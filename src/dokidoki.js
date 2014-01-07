(function() {

/**
 * ドキドキ!プリキュア
 *
 * @constant
 * @type precure.Series
 */
precure.dokidoki = new precure.Series("ドキドキ!プリキュア", new Date(2013, 2, 3), new Date(2014, 1, 26));

var mana = new precure.Girl([
    "相田マナ",
    "キュアハート"
], [
    null,
    "みなぎる愛！キュアハート！"
]);

var rikka = new precure.Girl([
    "菱川六花",
    "キュアダイヤモンド"
], [
    null,
    "英知の光！キュアダイヤモンド！"
]);

var alice = new precure.Girl([
    "四葉ありす",
    "キュアロゼッタ"
], [
    null,
    "ひだまりポカポカ！キュアロゼッタ！"
]);

var makoto = new precure.Girl([
    "剣崎真琴",
    "キュアソード"
], [
    null,
    "勇気の刃！キュアソード！"
]);

var aguri = new precure.Girl([
    "円亜久里",
    "キュアエース"
], [
    null,
    "愛の切り札！キュアエース！"
]);

precure.dokidoki.girls[0] = mana;
precure.dokidoki.girls[1] = rikka;
precure.dokidoki.girls[2] = alice;
precure.dokidoki.girls[3] = makoto;
precure.dokidoki.girls[4] = aguri;

})();
