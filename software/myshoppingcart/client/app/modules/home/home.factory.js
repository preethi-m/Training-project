//(function() {
//    "use strict";
//    angular.module('app.home')
//        .factory("DataFactory", ['$http',function($http) {
//            var obj = {};
//            obj.content = function() {
//                return $http.get('app.json');
//            };
//            return obj;
//        }]);
//}());


(function() {
    "use strict";
    angular.module('app.home')
        .service("DataService", ['$http','$q',function($http,$q) {
                var pro = [];
                this.getAllData = function() {
                return $http.get('app.json', {
                }).then(function(res) {

                    return res.data;
                },function(error){

                });
                //var def = $q.defer();
                //
                //$http.get("app.json")
                //    .success(function(data) {
                //        pro  = data;
                //        def.resolve(data);
                //    })
                //    .error(function() {
                //        def.reject("Failed to get products");
                //    });
                //return def.promise;
            }
        }]);
}());
