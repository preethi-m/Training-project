(function(){

    angular.module('app.home')
        .controller('SimpleController', SimpleController);

    function SimpleController() {
        var vm = this;
        vm.welcomeTxt = "I'm in home page";
    }
}());