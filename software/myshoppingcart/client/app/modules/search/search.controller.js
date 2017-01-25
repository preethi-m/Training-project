(function(){
    "use strict";
    angular.module('app.search')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$stateParams','$rootScope'];

    function  SearchController(stateParams,rootScope) {
        var vm = this;
        vm.sub = stateParams.subType;
        var list = [];
        for(var i = 0; i < rootScope.products.length; i++) {
            if(vm.sub == rootScope.products[i].subType) {
                list.push(rootScope.products[i]);
            }
        }

        vm.subProList = list;
    }

}());