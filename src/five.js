(function() {

/**
 * Yes! プリキュア5
 *
 * @constant
 * @type precure.Series
 */
precure.five = new precure.Series(
    "Yes! プリキュア5",
    new Date("Sun Feb 04 2007 08:30:00 GMT+0900 (JST)"),
    new Date("Sun Jan 27 2008 09:00:00 GMT+0900 (JST)")
);
precure.series.push(precure.five);

var nozomi = new precure.Girl([
    "夢原のぞみ",
    "キュアドリーム"
], [
    null,
    "プリキュア・メタモルフォーゼ！\n大いなる希望の力！キュアドリーム！"
]);

var rin = new precure.Girl([
    "夏木りん",
    "キュアルージュ"
], [
    null,
    "プリキュア・メタモルフォーゼ！\n情熱の赤い炎！キュアルージュ！"
]);

var urara = new precure.Girl([
    "春日野うらら",
    "キュアレモネード"
], [
    null,
    "プリキュア・メタモルフォーゼ！\nはじけるレモンの香り！キュアレモネード！"
]);

var komachi = new precure.Girl([
    "秋元こまち",
    "キュアミント"
], [
    null,
    "プリキュア・メタモルフォーゼ！\nやすらぎの緑の大地！キュアミント！"
]);

var karen = new precure.Girl([
    "水無月かれん",
    "キュアアクア"
], [
    null,
    "プリキュア・メタモルフォーゼ！\n知性の青き泉！キュアアクア！"
]);

precure.five.girls[0] = nozomi;
precure.five.girls[1] = rin;
precure.five.girls[2] = urara;
precure.five.girls[3] = komachi;
precure.five.girls[4] = karen;

nozomi.setExtraData({
    "cv": "三瓶由布子"
});
rin.setExtraData({
    "cv": "竹内順子"
});
urara.setExtraData({
    "cv": "伊瀬茉莉也"
});
komachi.setExtraData({
    "cv": "永野愛"
});
karen.setExtraData({
    "cv": "前田愛"
});

var team = new precure.Team(5);
team.add(nozomi);
team.add(rin);
team.add(urara);
team.add(komachi);
team.add(karen);
team.on("completed", function() {
    precure.out("希望の力と未来の光\n華麗に羽ばたく5つの心\nYes!プリキュア5!");
});

precure.five.team = team;

})();
