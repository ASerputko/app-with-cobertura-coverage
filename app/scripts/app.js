(function() {
    "use strict";

    angular
        .module("app", [])
        .factory("appService", function() {

            var appService = {
                getMetadata: function() {
                    return 4;
                },

                getReports: function() {
                    return [1,2,3,4];
                }
            };

            return appService;
        });


}).call(this, angular);


