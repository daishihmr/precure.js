describe("test maxheart", function() {

    it("MHの1人目", function() {
        var girl = precure.maxheart.girls[0];

        expect(girl.humanName).toEqual("美墨なぎさ");
        expect(girl.precureName).toEqual("キュアブラック");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("美墨なぎさ");

        try {
            girl.transform();
        } catch (e) {
            expect(e instanceof precure.PartnerInvalidError).toBe(true);
        }

        expect(girl.state).toEqual(0);

        girl.transform("雪城ほのか");

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアブラック");
    });
    
    it("MHの2人目", function() {
        var girl = precure.maxheart.girls[1];

        expect(girl.humanName).toEqual("雪城ほのか");
        expect(girl.precureName).toEqual("キュアホワイト");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("雪城ほのか");

        try {
            girl.transform();
        } catch (e) {
            expect(e instanceof precure.PartnerInvalidError).toBe(true);
        }

        expect(girl.state).toEqual(0);

        girl.transform("美墨なぎさ");

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアホワイト");
    });
    
    it("MHの3人目", function() {
        var girl = precure.maxheart.girls[2];

        expect(girl.humanName).toEqual("九条ひかり");
        expect(girl.precureName).toEqual("シャイニールミナス");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("九条ひかり");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("シャイニールミナス");
    });
    
    it("MHの作品情報", function() {
        expect(precure.maxheart.girls.length).toEqual(3);
    });

});
