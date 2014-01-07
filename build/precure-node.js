/**
 * @namespace
 */
var precure = {};

(function() {

/**
 * 作品クラス
 *
 * @class
 * @constructor
 * @property {String} title 作品タイトル
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
 * @type {Array.<String>}
 */
precure.Series.NAMES = [
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
 * @type {Array.<String>}
 */
precure.Series.NAMES = [
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
 * @property {String[]} names 名前のリスト。stateと項番が一致する名前の配列。
 * @property {String[]} transformMessages 変身時メッセージのリストstateと項番が一致する形態への変身時に使用するメッセージの配列
 * @property {String} partner パートナーの名前
 * @property {Number} state 状態。初期値を0とし、以後変身の度に1ずつ増加する
 */
precure.Girl = function(names, transformMessages, partner) {
    this.names = names;
    this.transformMessages = transformMessages;
    this.partner = partner;

    this.humanName = names[0];
    this.precureName = names[1];

    this.state = 0;
    this._updateState();
};

/**
 * 変身を行います。
 * 変身メッセージを返します。変身メッセージがない場合、nullを返します。
 * 
 * @methodOf precure.Girl
 * @param {String} [partner] パートナー名(オプション)
 * @returns {String}
 * @throws {precure.PartnerInvalidError} 変身にパートナーを要する場合、正しい引数を与えずに実行すると例外を投げます。
 */
precure.Girl.prototype.transform = function(partner) {
    if (this.partner !== undefined && this.partner !== partner) {
        throw new precure.PartnerInvalidError();
    }

    this.state = Math.min(this.state + 1, this.names.length - 1);
    this._updateState();

    return this.transformMessages[this.state] || null;
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
precure.unmarked = new precure.Series("ふたりはプリキュア", new Date(2004, 2, 1), new Date(2005, 1, 30));

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

})();

(function() {

/**
 * ふたりはプリキュア Max Heart
 *
 * @constant
 * @type precure.Series
 */
precure.maxheart = new precure.Series("ふたりはプリキュア Max Heart", new Date(2005, 2, 6), new Date(2006, 1, 29));

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

})();

(function() {

/**
 * ふたりはプリキュア Splash Star
 *
 * @constant
 * @type precure.Series
 */
precure.splashstar = new precure.Series("ふたりはプリキュア Splash Star", new Date(2006, 2, 5), new Date(2007, 1, 28));

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

})();

(function() {

/**
 * Yes! プリキュア5
 *
 * @constant
 * @type precure.Series
 */
precure.five = new precure.Series("Yes! プリキュア5", new Date(2007, 2, 4), new Date(2008, 1, 27));

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

})();

(function() {

/**
 * Yes! プリキュア5GoGo!
 *
 * @constant
 * @type precure.Series
 */
precure.fivegogo = new precure.Series("Yes! プリキュア5GoGo!", new Date(2008, 2, 3), new Date(2009, 1, 25));

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

})();

(function() {

/**
 * フレッシュプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.fresh = new precure.Series("フレッシュプリキュア!", new Date(2009, 2, 1), new Date(2010, 1, 31));

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

})();

(function() {

/**
 * ハートキャッチプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.heartcatch = new precure.Series("ハートキャッチプリキュア!", new Date(2010, 2, 7), new Date(2011, 1, 30));

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

})();

(function() {

/**
 * スイートプリキュア♪
 *
 * @constant
 * @type precure.Series
 */
precure.suite = new precure.Series("スイートプリキュア♪", new Date(2011, 2, 6), new Date(2012, 1, 29));

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

})();

(function() {

/**
 * スマイルプリキュア!
 *
 * @constant
 * @type precure.Series
 */
precure.smile = new precure.Series("スマイルプリキュア!", new Date(2012, 2, 5), new Date(2013, 1, 27));

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

})();

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

(function() {

/**
 * 現在放送中の作品
 *
 * @type precure.Series
 * @const
 */
precure.now = precure.dokidoki;

/**
 * 映画 プリキュアオールスターズDX みんなともだちっ☆奇跡の全員大集合!
 *
 * @constant
 * @type precure.Series
 */
precure.dx1 = new precure.Series("映画 プリキュアオールスターズDX みんなともだちっ☆奇跡の全員大集合!", new Date(2009, 3, 20), null);
/**
 * 映画 プリキュアオールスターズDX2 希望の光☆レインボージュエルを守れ!
 *
 * @constant
 * @type precure.Series
 */
precure.dx2 = new precure.Series("映画 プリキュアオールスターズDX2 希望の光☆レインボージュエルを守れ!", new Date(2010, 3, 20), null);
/**
 * 映画 プリキュアオールスターズDX3 未来にとどけ! 世界をつなぐ☆虹色の花
 *
 * @constant
 * @type precure.Series
 */
precure.dx3 = new precure.Series("映画 プリキュアオールスターズDX3 未来にとどけ! 世界をつなぐ☆虹色の花", new Date(2011, 3, 19), null);

/**
 * 映画 プリキュアオールスターズNewStage みらいのともだち
 *
 * @constant
 * @type precure.Series
 */
precure.ns1 = new precure.Series("映画 プリキュアオールスターズNewStage みらいのともだち", new Date(2012, 3, 17), null);
var ayumi = new precure.Girl([
    "坂上あゆみ",
    "キュアエコー"
], [
    null,
    "想いよ届け！キュアエコー！"
]);
precure.ns1.girls[0] = ayumi;

/**
 * 映画 プリキュアオールスターズNewStage2 こころのともだち
 *
 * @constant
 * @type precure.Series
 */
precure.ns2 = new precure.Series("映画 プリキュアオールスターズNewStage2 こころのともだち", new Date(2013, 3, 16), null);

/**
 * 映画 プリキュアオールスターズNewStage3 永遠のともだち
 *
 * @constant
 * @type precure.Series
 */
precure.ns3 = new precure.Series("映画 プリキュアオールスターズNewStage3 永遠のともだち", new Date(2014, 3, 15), null);

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
    "happinesscharge"
].forEach(function(s) {
    Array.prototype.push.apply(precure.allStars, precure[s].girls);
});

})();

exports.precure = precure;
