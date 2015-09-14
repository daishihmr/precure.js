(function() {

/**
 * ドキドキ!プリキュア
 *
 * @constant
 * @type precure.Series
 */
precure.dokidoki = new precure.Series(
    "ドキドキ!プリキュア",
    new Date("Sun Feb 03 2013 08:30:00 GMT+0900 (JST)"),
    new Date("Sun Jan 26 2014 09:00:00 GMT+0900 (JST)")
);
precure.series.push(precure.dokidoki);

var mana = new precure.Girl([
    "相田マナ",
    "キュアハート"
], [
    null,
    "プリキュア・ラブリンク！\nみなぎる愛！キュアハート！"
]);

var rikka = new precure.Girl([
    "菱川六花",
    "キュアダイヤモンド"
], [
    null,
    "プリキュア・ラブリンク！\n英知の光！キュアダイヤモンド！"
]);

var alice = new precure.Girl([
    "四葉ありす",
    "キュアロゼッタ"
], [
    null,
    "プリキュア・ラブリンク！\nひだまりポカポカ！キュアロゼッタ！"
]);

var makoto = new precure.Girl([
    "剣崎真琴",
    "キュアソード"
], [
    null,
    "プリキュア・ラブリンク！\n勇気の刃！キュアソード！"
]);

var aguri = new precure.Girl([
    "円亜久里",
    "キュアエース"
], [
    null,
    "プリキュア・ドレスアップ！\n愛の切り札！キュアエース！"
]);

precure.dokidoki.girls[0] = mana;
precure.dokidoki.girls[1] = rikka;
precure.dokidoki.girls[2] = alice;
precure.dokidoki.girls[3] = makoto;
precure.dokidoki.girls[4] = aguri;

mana.setExtraData({
    "cv": "生天目仁美"
});
rikka.setExtraData({
    "cv": "寿美菜子"
});
alice.setExtraData({
    "cv": "渕上舞"
});
makoto.setExtraData({
    "cv": "宮本佳那子"
});
aguri.setExtraData({
    "cv": "釘宮理恵"
});

var team = new precure.Team(5);
team.add(mana);
team.add(rikka);
team.add(alice);
team.add(makoto);
team.add(aguri);
team.on("completed", function() {
    precure.out("響け! 愛の鼓動! ドキドキ!プリキュア!");
});

precure.dokidoki.team = team;

})();
