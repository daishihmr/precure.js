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
