(function(){
    "use strict";
    angular.module('app.home')
        .controller('SimpleController', SimpleController);

    SimpleController.$inject = ['DataFactory'];

    function SimpleController(DataFactory) {
        var product = {};
        var vm = this;
        DataFactory.content().success(function(jsondata) {
            vm.data = jsondata;
        })
    }



}());