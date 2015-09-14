/**
 * @namespace
 */
var precure = {};

(function() {

/**
 * 全TVシリーズの配列
 * @type {Array.<precure.Series>}
 */
precure.series = [];

/**
 * 作品クラス
 *
 * @class
 * @constructor
 * @property {string} title 作品タイトル
 * @property {Date} startedDate 放送開始日時
 * @property {Date} endedDate 放送終了日時
 */
precure.Series = function(title, startedDate, endedDate) {
    this.title = title;
    this.startedDate = startedDate;
    this.endedDate = endedDate;
    this.girls = [];
};

/**
 * 作品名リスト
 *
 * @static
 * @memberOf precure.Series
 * @type {Array.<string>}
 */
precure.Series.TITLES = [
    "unmarked",
    "maxheart",
    "splashstar",
    "five",
    "fivegogo",
    "fresh",
    "heartcatch",
    "suite",
    "smile",
    "dokidoki",
    "happinesscharge"
];

/**
 * 映画オールスターズ作品名リスト
 *
 * @static
 * @memberOf precure.Series
 * @type {Array.<string>}
 */
precure.Series.ALL_STARS_TITLES = [
    "dx1",
    "dx2",
    "dx3",
    "ns1",
    "ns2",
    "ns3"
];

/**
 * プリキュアクラス
 *
 * @class
 * @constructor
 * @property {string[]} names 名前のリスト。stateと項番が一致する名前の配列。
 * @property {string[]} transformMessages 変身時メッセージのリストstateと項番が一致する形態への変身時に使用するメッセージの配列
 * @property {string} partner パートナーの名前
 * @property {number} state 状態。初期値を0とし、以後変身の度に1ずつ増加する
 */
precure.Girl = function(names, transformMessages, partner) {
    this.names = names;
    this.transformMessages = transformMessages;
    this.partner = partner;

    this.humanName = names[0];
    this.precureName = names[1];

    this.cv = null;

    this.state = 0;
    this._updateState();

    this.info = {};
};

precure.Girl.prototype.addInfo = function(info) {
    for (var key in info) if (info.hasOwnProperty(key)) {
        this.info[key] = info[key];
    }
};

/**
 * プリキュアに拡張データを設定します。
 * @param {Object.<string, *>}
 */
precure.Girl.prototype.setExtraData = function(data) {
    for (var key in data) if (data.hasOwnProperty(key)) {
        this[key] = data[key];
    }
};

/**
 * 変身を行います。
 * 変身メッセージを返します。変身メッセージがない場合、nullを返します。
 * 
 * @methodOf precure.Girl
 * @param {precure.Girl} [partner] パートナー(オプション)
 * @returns {string}
 * @throws {precure.PartnerInvalidError} 変身にパートナーを要する場合、正しい引数を与えずに実行すると例外を投げます。
 */
precure.Girl.prototype.transform = function(partner) {
    if (this.partner !== undefined && (partner === undefined || this.partner !== partner.humanName)) {
        throw new precure.PartnerInvalidError();
    }

    this.state = Math.min(this.state + 1, this.names.length - 1);
    this._updateState();
    if (partner) {
        partner.state = Math.min(partner.state + 1, partner.names.length - 1);
        partner._updateState();
    }

    return this.transformMessages[this.state] || null;
};

precure.Girl.prototype.toString = function() {
    return this.name;
};

/**
 * 人間に戻ります。
 *
 * @methodOf precure.Girl
 */
precure.Girl.prototype.humanize = function() {
    this.state = 0;
    this._updateState();
};

/**
 * stateが変化した時に呼びだされます。
 *
 * @private
 * @methodOf precure.Girl
 */
precure.Girl.prototype._updateState = function() {
    this.name = this.names[this.state];
};

/**
 * 変身時にパートナーを要するプリキュアが不正なパートナーと共に変身した場合に発生する例外です。
 *
 * @class
 * @extends Error
 * @constructor
 */
precure.PartnerInvalidError = function() {};
precure.PartnerInvalidError.prototype = new Error("partner is invalid.");

})();

(function() {

/**
 * ふたりはプリキュア
 *
 * @constant
 * @type precure.Series
 */
precure.unmarked = new precure.Series(
    "ふたりはプリキュア",
    new Date("Sun Feb 01 2004 08:30:00 GMT+0900 (JST)"),
    new Date("Sun Jan 30 2005 09:00:00 GMT+0900 (JST)")
);
precure.series.push(precure.unmarked);

var msg = "デュアル・オーロラ・ウェイブ！\n光の使者キュアブラック！\n光の使者キュアホワイト！\nふたりはプリキュア！";

var black = new precure.Girl([
    "美墨なぎさ",
    "キュアブラック"
], [
    null,
    msg
], "雪城ほのか");

var white = new precure.Girl([
    "雪城ほのか",
    "キュアホワイト"
], [
    null,
    msg
], "美墨なぎさ");

precure.unmarked.girls[0] = black;
precure.unmarked.girls[1] = white;

black.setExtraData({
    "cv": "本名陽子",
    "birthday": new Date("Sat Nov 10 1990 00:00:00 GMT+0900 (JST)")
});
white.setExtraData({
    "cv": "ゆかな",
    "birthday": new Date("Fri May 04 1990 00:00:00 GMT+0900 (JST)")
});

})();

(function() {

/**
 * ふたりはプリキュア Max Heart
 *
 * @constant
 * @type precure.Series
 */
precure.maxheart = new precure.Series(
    "ふたりはプリキュア Max Heart",
    new Date("Sun Feb 06 2005 08:30:00 GMT+0900 (JST)"),
    new Date("Sun Jan 29 2006 09:00:00 GMT+0900 (JST)")
);
precure.series.push(precure.maxheart);

var msg = "デュアル・オーロラ・ウェイブ！\n光の使者キュアブラック！\n光の使者キュアホワイト！\nふたりはプリキュア！"

var black = new precure.Girl([
    "美墨なぎさ",
    "キュアブラック"
], [
    null,
    msg
], "雪城ほのか");

var white = new precure.Girl([
    "雪城ほのか",
    "キュアホワイト"
], [
    null,
    msg
], "美墨なぎさ");

var luminus = new precure.Girl([
    "九条ひかり",
    "シャイニールミナス"
], [
    null,
    "ルミナス・シャイニング・ストリーム！\n輝く命！シャイニールミナス！光の心と光の意志、総てをひとつにするために！"
]);

precure.maxheart.girls[0] = black;
precure.maxheart.girls[1] = white;
precure.maxheart.girls[2] = luminus;

black.setExtraData({
    "cv": "本名陽子",
    "birthday": new Date("Sat Nov 10 1990 00:00:00 GMT+0900 (JST)")
});
white.setExtraData({
    "cv": "ゆかな",
    "birthday": new Date("Fri May 04 1990 00:00:00 GMT+0900 (JST)")
});
luminus.setExtraData({
    "cv": "田中理恵",
    "birthday": new Date("Fri Oct 09 1992 00:00:00 GMT+0900 (JST)")
});

})();

(function() {

/**
 * ふたりはプリキュア Splash Star
 *
 * @constant
 * @type precure.Series
 */
precure.splashstar = new precure.Series(
    "ふたりはプリキュア Splash Star",
    new Date("Sun Feb 05 2006 08:30:00 GMT+0900 (JST)"),
    new Date("Sun Jan 28 2007 09:00:00 GMT+0900 (JST)")
);
precure.series.push(precure.splashstar);

var common = "聖なる泉を汚す者よ！\nアコギな真似はおやめなさい！";
var msg1 = "デュアル・スピリチュアル・パワー！\n花開け、大地に！\n羽ばたけ、空に！\n輝く金の花！キュアブルーム！\n煌く銀の翼！キュアイーグレット！\nふたりはプリキュア！";
var msg2 = "デュアル・スピリチュアル・パワー！\n未来を照らし！\n勇気を運べ！\n天空に満ちる月！キュアブライト！\n大地に薫る風！キュアウィンディ！\nふたりはプリキュア！";

var saki = new precure.Girl([
    "日向咲",
    "キュアブルーム",
    "キュアブライト"
], [
    null,
    msg1,
    msg2
], "美翔舞");

var mai = new precure.Girl([
    "美翔舞",
    "キュアイーグレット",
    "キュアウィンディ"
], [
    null,
    msg1,
    msg2
], "日向咲");

precure.splashstar.girls[0] = saki;
precure.splashstar.girls[1] = mai;

saki.setExtraData({
    "cv": "樹元オリエ",
    "birthday": new Date("Mon Sep 07 1992 00:00:00 GMT+0900 (JST)")
});
mai.setExtraData({
    "cv": "榎本温子",
    "birthday": new Date("Sun Dec 20 1992 00:00:00 GMT+0900 (JST)")
});

})();

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

})();

(function() {

/**
 * Yes! プリキュア5GoGo!
 *
 * @constant
 * @type precure.Series
 */
precure.fivegogo = new precure.Series(
    "Yes! プリキュア5GoGo!",
    new Date("Sun Feb 03 2008 08:30:00 GMT+0900 (JST)"),
    new Date("Sun Jan 25 2009 09:00:00 GMT+0900 (JST)")
);
precure.series.push(precure.fivegogo);

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

var kurumi = new precure.Girl([
    "美々野くるみ",
    "ミルキーローズ"
], [
    null,
    "スカイローズ・トランスレイト！\n青い薔薇は秘密のしるし！ミルキーローズ！"
]);

precure.fivegogo.girls[0] = nozomi;
precure.fivegogo.girls[1] = rin;
precure.fivegogo.girls[2] = urara;
precure.fivegogo.girls[3] = komachi;
precure.fivegogo.girls[4] = karen;
precure.fivegogo.girls[5] = kurumi;

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
kurumi.setExtraData({
    "cv": "仙台エリ"
});

})();

(function() {

/**
 * フレッシュプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.fresh = new precure.Series(
    "フレッシュプリキュア!",
    new Date("Sun Feb 01 2009 08:30:00 GMT+0900 (JST)"),
    new Date("Sun Jan 31 2010 09:00:00 GMT+0900 (JST)")
);
precure.series.push(precure.fresh);

var love = new precure.Girl([
    "桃園ラブ",
    "キュアピーチ"
], [
    null,
    "チェインジ・プリキュア・ビートアップ！\nピンクのハートは愛あるしるし！\nもぎたてフレッシュ！キュアピーチ！"
]);

var mktn = new precure.Girl([
    "蒼乃美希",
    "キュアベリー"
], [
    null,
    "チェインジ・プリキュア・ビートアップ！\nブルーのハートは希望のしるし！\nつみたてフレッシュ！キュアベリー！"
]);

var bukky = new precure.Girl([
    "山吹祈里",
    "キュアパイン"
], [
    null,
    "チェインジ・プリキュア・ビートアップ！\nイエローハートは祈りのしるし！\nとれたてフレッシュ！キュアパイン！"
]);

var setsuna = new precure.Girl([
    "東せつな",
    "キュアパッション"
], [
    null,
    "チェインジ・プリキュア・ビートアップ！\n真っ赤なハートは幸せの証！\nうれたてフレッシュ！キュアパッション！"
]);

precure.fresh.girls[0] = love;
precure.fresh.girls[1] = mktn;
precure.fresh.girls[2] = bukky;
precure.fresh.girls[3] = setsuna;

love.setExtraData({
    "cv": "沖佳苗"
});
mktn.setExtraData({
    "cv": "喜多村英梨"
});
bukky.setExtraData({
    "cv": "中川亜紀子"
});
setsuna.setExtraData({
    "cv": "小松由佳"
});

})();

(function() {

/**
 * ハートキャッチプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.heartcatch = new precure.Series(
    "ハートキャッチプリキュア!",
    new Date("Sun Feb 07 2010 08:30:00 GMT+0900 (JST)"),
    new Date("Sun Jan 30 2011 09:00:00 GMT+0900 (JST)")
);
precure.series.push(precure.heartcatch);

var tsubomi = new precure.Girl([
    "花咲つぼみ",
    "キュアブロッサム"
], [
    null,
    "プリキュア・オープンマイハート！\n大地に咲く一輪の花！キュアブロッサム！"
]);

var erika = new precure.Girl([
    "来海えりか",
    "キュアマリン"
], [
    null,
    "プリキュア・オープンマイハート！\n海風に揺れる一輪の花！キュアマリン！"
]);

var itsuki = new precure.Girl([
    "明堂院いつき",
    "キュアサンシャイン"
], [
    null,
    "プリキュア・オープンマイハート！\n陽の光浴びる一輪の花！キュアサンシャイン！"
]);

var yuri = new precure.Girl([
    "月影ゆり",
    "キュアムーンライト"
], [
    null,
    "プリキュア・オープンマイハート！\n月光に冴える一輪の花！キュアムーンライト！"
]);

precure.heartcatch.girls[0] = tsubomi;
precure.heartcatch.girls[1] = erika;
precure.heartcatch.girls[2] = itsuki;
precure.heartcatch.girls[3] = yuri;

tsubomi.setExtraData({
    "cv": "水樹奈々"
});
erika.setExtraData({
    "cv": "水沢史絵"
});
itsuki.setExtraData({
    "cv": "桑島法子"
});
yuri.setExtraData({
    "cv": "久川綾"
});

})();

(function() {

/**
 * スイートプリキュア♪
 *
 * @constant
 * @type precure.Series
 */
precure.suite = new precure.Series(
    "スイートプリキュア♪",
    new Date("Sun Feb 06 2011 08:30:00 GMT+0900 (JST)"),
    new Date("Sun Jan 29 2012 09:00:00 GMT+0900 (JST)")
);
precure.series.push(precure.suite);

var msg = "レッツプレイ！プリキュア・モジュレーション！\n爪弾くは荒ぶる調べ！キュアメロディ！\n爪弾くはたおやかな調べ！キュアリズム！";

var hibiki = new precure.Girl([
    "北条響",
    "キュアメロディ"
], [
    null,
    msg
], "南野奏");

var kanade = new precure.Girl([
    "南野奏",
    "キュアリズム"
], [
    null,
    msg
], "北条響");

var ellen = new precure.Girl([
    "黒川エレン",
    "キュアビート"
], [
    null,
    "レッツプレイ！プリキュア・モジュレーション！\n爪弾くは魂の調べ！キュアビート！"
]);

var ako = new precure.Girl([
    "調辺アコ",
    "キュアミューズ"
], [
    null,
    "レッツプレイ！プリキュア・モジュレーション！\n爪弾くは女神の調べ！キュアミューズ！"
]);

precure.suite.girls[0] = hibiki;
precure.suite.girls[1] = kanade;
precure.suite.girls[2] = ellen;
precure.suite.girls[3] = ako;

hibiki.setExtraData({
    "cv": "小清水亜美"
});
kanade.setExtraData({
    "cv": "折笠富美子"
});
ellen.setExtraData({
    "cv": "豊口めぐみ"
});
ako.setExtraData({
    "cv": "大久保瑠美"
});

})();

(function() {

/**
 * スマイルプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.smile = new precure.Series(
    "スマイルプリキュア!",
    new Date("Sun Feb 05 2012 08:30:00 GMT+0900 (JST)"),
    new Date("Sun Jan 27 2013 09:00:00 GMT+0900 (JST)")
);
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

})();

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

})();

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

(function() {

/**
 * 現在放送中の作品
 *
 * @type precure.Series
 * @const
 */
precure.now = precure.happinesscharge;

/**
 * 映画 プリキュアオールスターズDX みんなともだちっ☆奇跡の全員大集合!
 *
 * @constant
 * @type precure.Series
 */
precure.dx1 = new precure.Series("映画 プリキュアオールスターズDX みんなともだちっ☆奇跡の全員大集合!", new Date("Fri Mar 20 2009 00:00:00 GMT+0900 (JST)"), null);
/**
 * 映画 プリキュアオールスターズDX2 希望の光☆レインボージュエルを守れ!
 *
 * @constant
 * @type precure.Series
 */
precure.dx2 = new precure.Series("映画 プリキュアオールスターズDX2 希望の光☆レインボージュエルを守れ!", new Date("Sat Mar 20 2010 00:00:00 GMT+0900 (JST)"), null);
/**
 * 映画 プリキュアオールスターズDX3 未来にとどけ! 世界をつなぐ☆虹色の花
 *
 * @constant
 * @type precure.Series
 */
precure.dx3 = new precure.Series("映画 プリキュアオールスターズDX3 未来にとどけ! 世界をつなぐ☆虹色の花", new Date("Sat Mar 19 2011 00:00:00 GMT+0900 (JST)"), null);

/**
 * 映画 プリキュアオールスターズNewStage みらいのともだち
 *
 * @constant
 * @type precure.Series
 */
precure.ns1 = new precure.Series("映画 プリキュアオールスターズNewStage みらいのともだち", new Date("Sat Mar 17 2012 00:00:00 GMT+0900 (JST)"), null);
var ayumi = new precure.Girl([
    "坂上あゆみ",
    "キュアエコー"
], [
    null,
    "想いよ届け！キュアエコー！"
]);
precure.ns1.girls[0] = ayumi;

ayumi.setExtraData({
    "cv": "能登麻美子"
});

/**
 * 映画 プリキュアオールスターズNewStage2 こころのともだち
 *
 * @constant
 * @type precure.Series
 */
precure.ns2 = new precure.Series("映画 プリキュアオールスターズNewStage2 こころのともだち", new Date("Sat Mar 16 2013 00:00:00 GMT+0900 (JST)"), null);

/**
 * 映画 プリキュアオールスターズNewStage3 永遠のともだち
 *
 * @constant
 * @type precure.Series
 */
precure.ns3 = new precure.Series("映画 プリキュアオールスターズNewStage3 永遠のともだち", new Date("Sat Mar 15 2014 00:00:00 GMT+0900 (JST)"), null);

/**
 * 全プリキュアの配列
 *
 * @const
 * @type {Array.<precure.Girl>}
 */
precure.allStars = [];
[
    "maxheart",
    "splashstar",
    "fivegogo",
    "fresh",
    "heartcatch",
    "suite",
    "smile",
    "ns1",
    "dokidoki",
    "happinesscharge",
    "goprincess",
].forEach(function(s) {
    Array.prototype.push.apply(precure.allStars, precure[s].girls);
});

})();

module.exports = precure;
