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
 * @param {String} title 作品タイトル
 * @param {Date} statedDate 放送開始日時
 * @param {Date} endedDate 放送終了日時
 * @property {String} title 作品タイトル
 * @property {Date} statedDate 放送開始日時
 * @property {Date} endedDate 放送終了日時
 */
precure.Series = function(title, statedDate, endedDate) {
    this.title = title;
    this.statedDate = statedDate;
    this.endedDate = endedDate;
    this.girls = [];
};

/**
 * プリキュアクラス
 *
 * @class
 * @constructor
 * @param {String[]} names 名前のリスト。stateと項番が一致する名前の配列。
 * @param {String[]} transformMessages 変身時メッセージのリストstateと項番が一致する形態への変身時に使用するメッセージの配列
 * @param {String} [partner] パートナーの名前(オプション)
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
