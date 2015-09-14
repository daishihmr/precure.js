(function() {

/**
 * ハピネスチャージプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.happinesscharge = new precure.Series(
    "ハピネスチャージプリキュア!",
    new Date("Sun Feb 02 2014 08:30:00 GMT+0900 (JST)"),
    new Date("Sun Jan 25 2015 09:00:00 GMT+0900 (JST)")
);
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

var yuyu = new precure.Girl([
    "大森ゆうこ",
    "キュアハニー"
], [
    null,
    "プリキュア・くるりんミラーチェンジ！\n大地に実る命の光！キュアハニー！"
]);

var iona = new precure.Girl([
    "氷川いおな",
    "キュアフォーチュン"
], [
    null,
    "プリキュア・きらりんスターシンフォニー！\n夜空にきらめく希望の星！キュアフォーチュン！"
]);

precure.happinesscharge.girls[0] = megumi;
precure.happinesscharge.girls[1] = hime;
precure.happinesscharge.girls[2] = yuyu;
precure.happinesscharge.girls[3] = iona;

megumi.setExtraData({
    "cv": "中島愛"
});
hime.setExtraData({
    "cv": "潘めぐみ",
    "realName": "ヒメルダ・ウインドウ・キュアクイーン・オブ・ザ・ブルースカイ"
});
yuyu.setExtraData({
    "cv": "北川里奈"
});
iona.setExtraData({
    "cv": "戸松遥"
});

var team = new precure.Team(4);
team.add(megumi);
team.add(hime);
team.add(yuyu);
team.add(iona);
team.on("completed", function() {
    precure.out("ハピネス注入幸せチャージ! ハピネスチャージプリキュア!");
});

precure.happinesscharge.team = team;

})();
