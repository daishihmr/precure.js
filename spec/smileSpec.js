describe("test smile", function() {

    it("スマイルの1人目", function() {
        var girl = precure.smile.girls[0];

        expect(girl.humanName).toEqual("星空みゆき");
        expect(girl.precureName).toEqual("キュアハッピー");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("星空みゆき");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアハッピー");
    });
    
    it("スマイルの2人目", function() {
        var girl = precure.smile.girls[1];

        expect(girl.humanName).toEqual("日野あかね");
        expect(girl.precureName).toEqual("キュアサニー");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("日野あかね");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアサニー");
    });
    
    it("スマイルの3人目", function() {
        var girl = precure.smile.girls[2];

        expect(girl.humanName).toEqual("黄瀬やよい");
        expect(girl.precureName).toEqual("キュアピース");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("黄瀬やよい");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアピース");
    });
    
    it("スマイルの4人目", function() {
        var girl = precure.smile.girls[3];

        expect(girl.humanName).toEqual("緑川なお");
        expect(girl.precureName).toEqual("キュアマーチ");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("緑川なお");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアマーチ");
    });
    
    it("スマイルの5人目", function() {
        var girl = precure.smile.girls[4];

        expect(girl.humanName).toEqual("青木れいか");
        expect(girl.precureName).toEqual("キュアビューティ");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("青木れいか");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアビューティ");
    });
    
    it("スマイルの作品情報", function() {
        expect(precure.smile.girls.length).toEqual(5);
    });

});
