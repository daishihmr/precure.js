describe("test splashstar", function() {

    it("S☆Sの1人目", function() {
        var girl = precure.splashstar.girls[0];

        expect(girl.humanName).toEqual("日向咲");
        expect(girl.precureName).toEqual("キュアブルーム");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("日向咲");

        try {
            girl.transform();
        } catch (e) {
            expect(e instanceof precure.PartnerInvalidError).toBe(true);
        }

        expect(girl.state).toEqual(0);

        girl.transform("美翔舞");

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアブルーム");

        girl.transform("美翔舞");

        expect(girl.state).toEqual(2);
        expect(girl.name).toEqual("キュアブライト");
    });
    
    it("S☆Sの2人目", function() {
        var girl = precure.splashstar.girls[1];

        expect(girl.humanName).toEqual("美翔舞");
        expect(girl.precureName).toEqual("キュアイーグレット");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("美翔舞");

        try {
            girl.transform();
        } catch (e) {
            expect(e instanceof precure.PartnerInvalidError).toBe(true);
        }

        expect(girl.state).toEqual(0);

        girl.transform("日向咲");

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアイーグレット");

        girl.transform("日向咲");

        expect(girl.state).toEqual(2);
        expect(girl.name).toEqual("キュアウィンディ");
    });
    
    it("S☆Sの作品情報", function() {
        expect(precure.splashstar.girls.length).toEqual(2);
    });

});
