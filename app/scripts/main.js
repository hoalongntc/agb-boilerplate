(function () {
    'use strict';

    require('angular');
    require('angular-route');
    require('angular-animate');

    /** Modules definition **/
    angular.module('App', ['ngRoute', 'ngAnimate', 'App.Controller']);
    angular.module('App.Controller', []);

    /** Routers **/
    angular
        .module('App')
        .config([
            '$locationProvider',
            '$routeProvider',
            function($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');

                $routeProvider
                    .when('/', {
                        templateUrl: './views/partial.html',
                        controller: 'MainController'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            }
        ]);

    /** Main controller **/
    angular
        .module('App.Controller')
        .controller('MainController', [
            '$scope',
            function($scope) {
                $scope.test = 'Testing...';
            }
        ]);
}());