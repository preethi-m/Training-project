(function(){
    "use strict";
    angular.module('app.home')
        .controller('SimpleController', SimpleController);

    SimpleController.$inject = ['DataService','$rootScope','$scope'];

    /* another way of accessing data from json */
    //function SimpleController(DataFactory,$rootScope) {
    //    var product = {};
    //    var vm = this;
    //    DataFactory.content().success(function(jsondata) {
    //        console.log("in controller");
    //        vm.data = jsondata;
    //        $rootScope.data = vm.data;
    //    })
    //}

    function SimpleController(DataService,$rootScope,$scope) {
        var vm =this;
        DataService.getAllData().then(function(data) {

           $rootScope.products = data;
        })

        // for displaying the suggestions in ui select
        vm.checkName = function(lettersTyped)
        {

            if(lettersTyped.length >= 1)
            {
                vm.limitTime = 500;
            }
            else{
                vm.limitTime = 0;
            }
        }

        $scope.onSelected = function(selectedItem) {
            alert(selectedItem);
        }

    }

}());