(function() {
"use strict";
    angular.module('app.home')
        .factory("DataFactory", ['$http',function($http) {
            var obj = {};
            //console.log("in factory");
            obj.content = function() {
                return $http.get('app.json');
            }


            return obj;
        }]);


}());

