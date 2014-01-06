describe("test unmarked", function() {

    it("無印の1人目", function() {
        var girl = precure.unmarked.girls[0];

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
    
    it("無印の2人目", function() {
        var girl = precure.unmarked.girls[1];

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
    
    it("無印の作品情報", function() {
        expect(precure.unmarked.girls.length).toEqual(2);
    });

});
