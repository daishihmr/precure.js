describe("test suite", function() {

    it("スイートの1人目", function() {
        var girl = precure.suite.girls[0];

        expect(girl.humanName).toEqual("北条響");
        expect(girl.precureName).toEqual("キュアメロディ");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("北条響");

        try {
            girl.transform();
        } catch (e) {
            expect(e instanceof precure.PartnerInvalidError).toBe(true);
        }

        girl.transform("南野奏");

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアメロディ");
    });

    it("スイートの2人目", function() {
        var girl = precure.suite.girls[1];

        expect(girl.humanName).toEqual("南野奏");
        expect(girl.precureName).toEqual("キュアリズム");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("南野奏");

        try {
            girl.transform();
        } catch (e) {
            expect(e instanceof precure.PartnerInvalidError).toBe(true);
        }

        girl.transform("北条響");

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアリズム");
    });

    it("スイートの3人目", function() {
        var girl = precure.suite.girls[2];

        expect(girl.humanName).toEqual("黒川エレン");
        expect(girl.precureName).toEqual("キュアビート");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("黒川エレン");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアビート");
    });

    it("スイートの4人目", function() {
        var girl = precure.suite.girls[3];

        expect(girl.humanName).toEqual("調辺アコ");
        expect(girl.precureName).toEqual("キュアミューズ");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("月影ゆり");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアミューズ");
    });

    it("スイート作品情報", function() {
        expect(precure.suite.girls.length).toEqual(4);
    });

});
