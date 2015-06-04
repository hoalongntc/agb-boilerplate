(function () {
    'use strict';

    /** Modules definition **/
    angular.module('App', ['ui.router',

        'App.Services', 'App.Directives', 'App.Controllers'
    ]);
    angular.module('App.Services', []);
    angular.module('App.Directives', []);
    angular.module('App.Controllers', []);

    /** Routers **/
    angular
        .module('App')
        .config(function($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.hashPrefix('!');
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'views/home.html'
                });
        });
}());