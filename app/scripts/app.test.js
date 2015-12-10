/*global describe, beforeEach, it, expect, inject*/
(function () {
    "use strict";

    describe("app.js", function () {

        beforeEach(function () {
            module("app");
        });

        beforeEach(inject(function(appService) {
            this.appService = appService;
        }));

        it("should be registered in the 'app' module", function () {
            expect(this.appService).to.be.an("object");
        });


        describe("getMetadata", function() {
            it("should return 4", function() {
                expect(this.appService.getMetadata()).to.equal(4);
            });
        });
    });

}).call(this);