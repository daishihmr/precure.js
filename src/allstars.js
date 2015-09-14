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
