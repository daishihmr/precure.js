describe("test unmarked", function() {
    beforeEach(function() {
        precure.unmarked.girls.forEach(function(girl) {
            girl.humanize();
        });
    });

    it("無印の1人目", function() {
        var girl = precure.unmarked.girls[0];

        expect(girl.humanName).toEqual("美墨なぎさ");
        expect(girl.precureName).toEqual("キュアブラック");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("美墨なぎさ");

        var error = null;
        try {
            girl.transform();
        } catch (e) {
            error = e;
        }
        expect(error).toNotBe(null);

        girl.transform(precure.unmarked.girls[1]);

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアブラック");
        expect(precure.unmarked.girls[1].state).toEqual(1);
        expect(precure.unmarked.girls[1].name).toEqual("キュアホワイト");
    });
    
    it("無印の2人目", function() {
        var girl = precure.unmarked.girls[1];

        expect(girl.humanName).toEqual("雪城ほのか");
        expect(girl.precureName).toEqual("キュアホワイト");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("雪城ほのか");

        var error = null;
        try {
            girl.transform();
        } catch (e) {
            error = e;
        }
        expect(error).toNotBe(null);

        girl.transform(precure.unmarked.girls[0]);

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアホワイト");
        expect(precure.unmarked.girls[0].state).toEqual(1);
        expect(precure.unmarked.girls[0].name).toEqual("キュアブラック");
    });
    
    it("無印の作品情報", function() {
        expect(precure.unmarked.girls.length).toEqual(2);
    });

});
