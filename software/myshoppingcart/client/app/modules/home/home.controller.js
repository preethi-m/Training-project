(function(){
    "use strict";
    angular.module('app.home')
        .controller('SimpleController', SimpleController);

    SimpleController.$inject = ['DataService','$rootScope'];

    //function SimpleController(DataFactory,$rootScope) {
    //    var product = {};
    //    var vm = this;
    //    DataFactory.content().success(function(jsondata) {
    //        console.log("in controller");
    //        vm.data = jsondata;
    //        $rootScope.data = vm.data;
    //    })
    //}

    function SimpleController(DataService,$rootScope) {
        var vm =this;
        DataService.getAllData().then(function(data) {

           $rootScope.products = data;
        })
        //vm.limitNameSearch = 500; //time for displaying suggestion
        vm.checkName = function(lettersTyped)
        {

            if(lettersTyped.length > 2)
            {
                vm.limitTime = 500;
            }
            else{
                vm.limitTime = 0;
            }
        }

    }

}());