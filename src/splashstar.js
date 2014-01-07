(function() {

precure.splashstar = new precure.Series("ふたりはプリキュア Splash Star", new Date(2006, 2, 5), new Date(2007, 1, 28));

var common = "ふたりはプリキュア！\n聖なる泉を汚す者よ！\nアコギな真似はおやめなさい！";
var msg1 = "デュアル・スピリチュアル・パワー！\n花開け、大地に！\n羽ばたけ、空に！\n輝く金の花！キュアブルーム！\n煌く銀の翼！キュアイーグレット！\n";
var msg2 = "デュアル・スピリチュアル・パワー！\n未来を照らし！\n勇気を運べ！\n天空に満ちる月！キュアブライト！\n大地に薫る風！キュアウィンディ！\n";

var saki = new precure.Girl([
    "日向咲",
    "キュアブルーム",
    "キュアブライト"
], [
    null,
    msg1 + common,
    msg2 + common
], "美翔舞");

var mai = new precure.Girl([
    "美翔舞",
    "キュアイーグレット",
    "キュアウィンディ"
], [
    null,
    msg1 + common,
    msg2 + common
], "日向咲");

precure.splashstar.girls[0] = saki;
precure.splashstar.girls[1] = mai;

})();
