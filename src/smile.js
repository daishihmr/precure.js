(function() {

/**
 * スマイルプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.smile = new precure.Series("スマイルプリキュア!", new Date("2012-03-04T15:00:00.000Z"), new Date("2013-02-26T15:00:00.000Z"));
precure.series.push(precure.smile);

var miyuki = new precure.Girl([
    "星空みゆき",
    "キュアハッピー"
], [
    null,
    "プリキュア・スマイルチャージ！\nキラキラ輝く未来の光！キュアハッピー！"
]);

var akane = new precure.Girl([
    "日野あかね",
    "キュアサニー"
], [
    null,
    "プリキュア・スマイルチャージ！\n太陽サンサン熱血パワー！キュアサニー！"
]);

var yayoi = new precure.Girl([
    "黄瀬やよい",
    "キュアピース"
], [
    null,
    "プリキュア・スマイルチャージ！\nピカピカぴかりんじゃんけんポン♪キュアピース！"
]);

var nao = new precure.Girl([
    "緑川なお",
    "キュアマーチ"
], [
    null,
    "プリキュア・スマイルチャージ！\n勇気リンリン直球勝負！キュアマーチ！"
]);

var reika = new precure.Girl([
    "青木れいか",
    "キュアビューティ"
], [
    null,
    "プリキュア・スマイルチャージ！\nしんしんと降り積もる清き心！キュアビューティ！"
]);

precure.smile.girls[0] = miyuki;
precure.smile.girls[1] = akane;
precure.smile.girls[2] = yayoi;
precure.smile.girls[3] = nao;
precure.smile.girls[4] = reika;

miyuki.setExtraData({
    "cv": "福圓美里"
});
akane.setExtraData({
    "cv": "田野アサミ"
});
yayoi.setExtraData({
    "cv": "金元寿子"
});
nao.setExtraData({
    "cv": "井上麻里奈"
});
reika.setExtraData({
    "cv": "西村ちなみ"
});

})();
