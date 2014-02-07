describe("test happinesscharge", function() {

    it("ハピネスチャージの1人目", function() {
        var girl = precure.happinesscharge.girls[0];

        expect(girl.humanName).toEqual("愛乃めぐみ");
        expect(girl.precureName).toEqual("キュアラブリー");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("愛乃めぐみ");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアラブリー");
    });
    
    it("ハピネスチャージの2人目", function() {
        var girl = precure.happinesscharge.girls[1];

        expect(girl.humanName).toEqual("白雪ひめ");
        expect(girl.precureName).toEqual("キュアプリンセス");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("白雪ひめ");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアプリンセス");
    });
    
    it("ハピネスチャージの3人目", function() {
        var girl = precure.happinesscharge.girls[2];

        // expect(girl.humanName).toEqual(""); // TODO
        expect(girl.precureName).toEqual("キュアハニー");

        expect(girl.state).toEqual(0);
        // expect(girl.name).toEqual(""); // TODO

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアハニー");
    });
    
    it("ハピネスチャージの4人目", function() {
        var girl = precure.happinesscharge.girls[3];

        // expect(girl.humanName).toEqual(""); // TODO
        expect(girl.precureName).toEqual("キュアフォーチュン");

        expect(girl.state).toEqual(0);
        // expect(girl.name).toEqual(""); // TODO

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアフォーチュン");
    });
    
    it("ハピネスチャージの作品情報", function() {
        expect(precure.happinesscharge.girls.length).toEqual(4);
    });

});
