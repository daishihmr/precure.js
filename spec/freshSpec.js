describe("test fresh", function() {

    it("フレッシュの1人目", function() {
        var girl = precure.fresh.girls[0];

        expect(girl.humanName).toEqual("桃園ラブ");
        expect(girl.precureName).toEqual("キュアピーチ");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("桃園ラブ");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアピーチ");
    });

    it("フレッシュの2人目", function() {
        var girl = precure.fresh.girls[1];

        expect(girl.humanName).toEqual("蒼乃美希");
        expect(girl.precureName).toEqual("キュアベリー");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("蒼乃美希");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアベリー");
    });

    it("フレッシュの3人目", function() {
        var girl = precure.fresh.girls[2];

        expect(girl.humanName).toEqual("山吹祈里");
        expect(girl.precureName).toEqual("キュアパイン");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("山吹祈里");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアパイン");
    });

    it("フレッシュの4人目", function() {
        var girl = precure.fresh.girls[3];

        expect(girl.humanName).toEqual("東せつな");
        expect(girl.precureName).toEqual("キュアパッション");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("東せつな");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアパッション");
    });

    it("フレッシュの作品情報", function() {
        expect(precure.fresh.girls.length).toEqual(4);
    });

});
