(function(){
    "use strict";
    angular.module('app.view')
        .controller('ViewController', ViewController);

    ViewController.$inject = ['$stateParams','$rootScope'];

    function  ViewController($stateParams,rootScope) {
        var vm = this;
        vm.text = $stateParams.id;
        for(var i = 0; i < rootScope.products.length; i++) {
            if(vm.text == rootScope.products[i].id) {
                vm.pro = rootScope.products[i];
            }
        }
        var list = [];
        for(var i = 0; i < rootScope.products.length; i++) {
            if($stateParams.type == rootScope.products[i].type && $stateParams.id != rootScope.products[i].id && list.length <= 3) {
                list.push(rootScope.products[i]);
            }
        }
        vm.proList = list;
        //console.log(vm.proList);
    }

}());