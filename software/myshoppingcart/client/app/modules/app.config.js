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
            .state('productDetails', {
                url:"/products/:subType/:id",
                templateUrl: 'app/partials/view.html',
                controller: 'ViewController',
                controllerAs: 'vc',
                //params: { subType : { value: - 1}}
            })
            .state('allProducts',{
                url:"/products/:subType",
                templateUrl:'app/partials/search.html',
                controller:'SearchController',
                controllerAs:'sc'
            })
            .state('/',{
                url:"/",
                templateUrl: 'app/partials/home.html'
            });


        urlProvider.otherwise('/');

    }
}());