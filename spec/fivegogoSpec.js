describe("test fivegogo", function() {

    it("5GoGoの1人目", function() {
        var girl = precure.fivegogo.girls[0];

        expect(girl.humanName).toEqual("夢原のぞみ");
        expect(girl.precureName).toEqual("キュアドリーム");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("夢原のぞみ");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアドリーム");
    });

    it("5GoGoの2人目", function() {
        var girl = precure.fivegogo.girls[1];

        expect(girl.humanName).toEqual("夏木りん");
        expect(girl.precureName).toEqual("キュアルージュ");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("夏木りん");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアルージュ");
    });

    it("5GoGoの3人目", function() {
        var girl = precure.fivegogo.girls[2];

        expect(girl.humanName).toEqual("春日野うらら");
        expect(girl.precureName).toEqual("キュアレモネード");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("春日野うらら");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアレモネード");
    });

    it("5GoGoの4人目", function() {
        var girl = precure.fivegogo.girls[3];

        expect(girl.humanName).toEqual("秋元こまち");
        expect(girl.precureName).toEqual("キュアミント");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("秋元こまち");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアミント");
    });

    it("5GoGoの5人目", function() {
        var girl = precure.fivegogo.girls[4];

        expect(girl.humanName).toEqual("水無月かれん");
        expect(girl.precureName).toEqual("キュアアクア");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("水無月かれん");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアアクア");
    });

    it("5GoGoの6人目", function() {
        var girl = precure.fivegogo.girls[5];

        expect(girl.humanName).toEqual("美々野くるみ");
        expect(girl.precureName).toEqual("ミルキーローズ");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("美々野くるみ");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("ミルキーローズ");
    });

    it("5GoGoの作品情報", function() {
        expect(precure.fivegogo.girls.length).toEqual(6);
    });
});
