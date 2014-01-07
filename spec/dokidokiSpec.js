describe("test dokidoki", function() {

    it("ドキドキの1人目", function() {
        var girl = precure.dokidoki.girls[0];

        expect(girl.humanName).toEqual("相田マナ");
        expect(girl.precureName).toEqual("キュアハート");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("相田マナ");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアハート");
    });
    
    it("ドキドキの2人目", function() {
        var girl = precure.dokidoki.girls[1];

        expect(girl.humanName).toEqual("菱川六花");
        expect(girl.precureName).toEqual("キュアダイヤモンド");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("菱川六花");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアダイヤモンド");
    });
    
    it("ドキドキの3人目", function() {
        var girl = precure.dokidoki.girls[2];

        expect(girl.humanName).toEqual("四葉ありす");
        expect(girl.precureName).toEqual("キュアロゼッタ");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("四葉ありす");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアロゼッタ");
    });
    
    it("ドキドキの4人目", function() {
        var girl = precure.dokidoki.girls[3];

        expect(girl.humanName).toEqual("剣崎真琴");
        expect(girl.precureName).toEqual("キュアソード");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("剣崎真琴");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアソード");
    });
    
    it("ドキドキの5人目", function() {
        var girl = precure.dokidoki.girls[4];

        expect(girl.humanName).toEqual("円亜久里");
        expect(girl.precureName).toEqual("キュアエース");

        expect(girl.state).toEqual(0);
        expect(girl.name).toEqual("円亜久里");

        girl.transform();

        expect(girl.state).toEqual(1);
        expect(girl.name).toEqual("キュアエース");
    });
    
    it("ドキドキの作品情報", function() {
        expect(precure.dokidoki.girls.length).toEqual(5);
    });

});
