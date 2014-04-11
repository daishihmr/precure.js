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

/**
 * 技クラス。
 */
precure.Skill = function(name, girls) {
    this.name = name;
};

})();
