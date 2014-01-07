describe("test five", function() {

    it("5の1人目", function() {
        var girl = precure.five.girls[0];

        expect(girl.humanName).toEqual("夢原のぞみ");
        expect(girl.precureName).toEqual("キュアドリーム");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("夢原のぞみ");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアドリーム");
    });
    
    it("5の2人目", function() {
        var girl = precure.five.girls[1];

        expect(girl.humanName).toEqual("夏木りん");
        expect(girl.precureName).toEqual("キュアルージュ");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("夏木りん");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアルージュ");
    });
    
    it("5の3人目", function() {
        var girl = precure.five.girls[2];

        expect(girl.humanName).toEqual("春日野うらら");
        expect(girl.precureName).toEqual("キュアレモネード");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("春日野うらら");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアレモネード");
    });
    
    it("5の4人目", function() {
        var girl = precure.five.girls[3];

        expect(girl.humanName).toEqual("秋元こまち");
        expect(girl.precureName).toEqual("キュアミント");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("秋元こまち");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアミント");
    });
    
    it("5の5人目", function() {
        var girl = precure.five.girls[4];

        expect(girl.humanName).toEqual("水無月かれん");
        expect(girl.precureName).toEqual("キュアアクア");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("水無月かれん");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアアクア");
    });
    
    it("5の作品情報", function() {
        expect(precure.five.girls.length).toEqual(5);
    });

});
