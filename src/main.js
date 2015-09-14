/**
 * @namespace
 */
var precure = {};

(function() {

precure.out = function(args) {
    console.log.apply(console, arguments);
};

precure.EventDispatcher = function() {
    this._listeners = {};
};
precure.EventDispatcher.prototype.on = function(type, listener) {
    if (this._listeners[type] == null) {
        this._listeners[type] = [];
    }
    this._listeners[type].push(listener);
};
precure.EventDispatcher.prototype.fire = function(type) {
    var self = this;
    if (this._listeners[type] != null) {
        this._listeners[type].forEach(function(listener) {
            listener.apply(self);
        });
    }
};

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
    "happinesscharge",
    "goprincess",
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
    "ns3",
    "springCarnival",
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
    precure.EventDispatcher.call(this);

    this.names = names;
    this.transformMessages = transformMessages;
    this.partner = partner;

    this.humanName = names[0];
    this.precureName = names[1];

    this.cv = null;

    this._updateState(0);

    this.info = {};
};
precure.Girl.prototype = Object.create(precure.EventDispatcher.prototype);

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
    if (this.names.length - 1 <= this.state) {
        throw new Error();
    }

    var result = this.transformMessages[this.state + 1];

    precure.out(result);

    this._updateState(this.state + 1);
    if (partner) {
        partner._updateState(partner.state + 1);
    }
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
    this._updateState(0);
};

/**
 * stateを更新します。
 *
 * @private
 * @methodOf precure.Girl
 */
precure.Girl.prototype._updateState = function(state) {
    this.state = state;
    this.name = this.names[this.state];
    this.fire("transformed");
};

precure.Team = function(completeCount, state) {
    precure.EventDispatcher.call(this);
    
    this.girls = [];
    this.transformedCount = 0;
    this.completeCount = completeCount;
    this.state = state || 1;
};
precure.Team.prototype = Object.create(precure.EventDispatcher.prototype);
precure.Team.prototype.add = function(girl) {
    var self = this;
    girl.on("transformed", function() {
        if (this.state == self.state) {
            self.transformedCount += 1;
            if (self.transformedCount == self.completeCount) {
                self.fire("completed");
            }
        }
    });
    this.girls.push(girl);
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
