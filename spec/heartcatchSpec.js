describe("test heartcatch", function() {

    it("ハートキャッチの1人目", function() {
        var girl = precure.heartcatch.girls[0];

        expect(girl.humanName).toEqual("花咲つぼみ");
        expect(girl.precureName).toEqual("キュアブロッサム");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("花咲つぼみ");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアブロッサム");
    });

    it("ハートキャッチの2人目", function() {
        var girl = precure.heartcatch.girls[1];

        expect(girl.humanName).toEqual("来海えりか");
        expect(girl.precureName).toEqual("キュアマリン");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("来海えりか");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアマリン");
    });

    it("ハートキャッチの3人目", function() {
        var girl = precure.heartcatch.girls[2];

        expect(girl.humanName).toEqual("明堂院いつき");
        expect(girl.precureName).toEqual("キュアサンシャイン");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("明堂院いつき");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアサンシャイン");
    });

    it("ハートキャッチの4人目", function() {
        var girl = precure.heartcatch.girls[3];

        expect(girl.humanName).toEqual("月影ゆり");
        expect(girl.precureName).toEqual("キュアムーンライト");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("月影ゆり");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアムーンライト");
    });

    it("ハートキャッチ作品情報", function() {
        expect(precure.heartcatch.girls.length).toEqual(4);
    });

});
