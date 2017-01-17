(function(){
    "use strict";
    angular.module("myApp")
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function appConfig(stProvider, urlProvider, $locationProvider ) {
        $locationProvider.html5Mode(true);

        stProvider.state('elec', {
            url:"/elec",
            templateUrl: 'app/partials/elec.html',
            controller: 'SimpleController',
            controllerAs: 'hc'
        });
            //.state('home',{
            //
            //})


        urlProvider.otherwise('/');

    }
}());