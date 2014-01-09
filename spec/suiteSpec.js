describe("test suite", function() {
    beforeEach(function() {
        precure.suite.girls.forEach(function(girl) {
            girl.humanize();
        });
    });

    it("スイートの1人目", function() {
        var girl = precure.suite.girls[0];

        expect(girl.humanName).toEqual("北条響");
        expect(girl.precureName).toEqual("キュアメロディ");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("北条響");

        var error = null;
        try {
            girl.transform();
        } catch (e) {
            error = e;
        }
        expect(error).toNotBe(null);

        girl.transform(precure.suite.girls[1]);

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアメロディ");
        expect(precure.suite.girls[1].state).toEqual(1);
        expect(precure.suite.girls[1].name).toEqual("キュアリズム");
    });

    it("スイートの2人目", function() {
        var girl = precure.suite.girls[1];

        expect(girl.humanName).toEqual("南野奏");
        expect(girl.precureName).toEqual("キュアリズム");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("南野奏");

        var error = null;
        try {
            girl.transform();
        } catch (e) {
            error = e;
        }
        expect(error).toNotBe(null);

        girl.transform(precure.suite.girls[0]);

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアリズム");
        expect(precure.suite.girls[0].state).toEqual(1);
        expect(precure.suite.girls[0].name).toEqual("キュアメロディ");
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
        expect(girl.name).toEqual("調辺アコ");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアミューズ");
    });

    it("スイート作品情報", function() {
        expect(precure.suite.girls.length).toEqual(4);
    });

});
