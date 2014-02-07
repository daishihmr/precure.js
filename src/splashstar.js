(function() {

/**
 * ふたりはプリキュア Splash Star
 *
 * @constant
 * @type precure.Series
 */
precure.splashstar = new precure.Series("ふたりはプリキュア Splash Star", new Date("2006-03-04T15:00:00.000Z"), new Date("2007-02-27T15:00:00.000Z"));
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
    "birthday": new Date("1992-09-06T15:00:00.000Z")
});
mai.setExtraData({
    "cv": "榎本温子",
    "birthday": new Date("1992-12-19T15:00:00.000Z")
});

})();
