(function(){
    "use strict";
    angular.module("myApp")
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function appConfig(stProvider, urlProvider, $locationProvider ) {
        $locationProvider.html5Mode(true);
        //console.log("in config");

        stProvider
        //    .state('elec', {
        //    url:"/elec",
        //    templateUrl: 'app/partials/elec.html',
        //    controller: 'SimpleController',
        //    controllerAs: 'sc'
        //})
            .state('/',{
                url:"/",
                templateUrl: 'app/partials/home.html',
                controller: 'SimpleController',
                controllerAs:'sc'
            });


        urlProvider.otherwise('/');

    }
}());