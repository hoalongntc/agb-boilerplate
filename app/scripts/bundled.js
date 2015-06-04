(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
    'use strict';

    angular
        .module('App.Controllers')
        .controller('MainController', [
            '$scope',
            function($scope) {
                $scope.test = 'Testing...';
            }
        ]);
})();
},{}],2:[function(require,module,exports){
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
        .config(["$locationProvider", "$stateProvider", "$urlRouterProvider", function($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.hashPrefix('!');
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'views/home.html'
                });
        }]);
}());
},{}]},{},[2,1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9jb250cm9sbGVycy9tYWluQ3RybC5uZy5qcyIsImFwcC9zY3JpcHRzL21haW4ubmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnQXBwLkNvbnRyb2xsZXJzJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgW1xuICAgICAgICAgICAgJyRzY29wZScsXG4gICAgICAgICAgICBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUudGVzdCA9ICdUZXN0aW5nLi4uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyoqIE1vZHVsZXMgZGVmaW5pdGlvbiAqKi9cbiAgICBhbmd1bGFyLm1vZHVsZSgnQXBwJywgWyd1aS5yb3V0ZXInLFxuXG4gICAgICAgICdBcHAuU2VydmljZXMnLCAnQXBwLkRpcmVjdGl2ZXMnLCAnQXBwLkNvbnRyb2xsZXJzJ1xuICAgIF0pO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdBcHAuU2VydmljZXMnLCBbXSk7XG4gICAgYW5ndWxhci5tb2R1bGUoJ0FwcC5EaXJlY3RpdmVzJywgW10pO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdBcHAuQ29udHJvbGxlcnMnLCBbXSk7XG5cbiAgICAvKiogUm91dGVycyAqKi9cbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ0FwcCcpXG4gICAgICAgIC5jb25maWcoZnVuY3Rpb24oJGxvY2F0aW9uUHJvdmlkZXIsICRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmhhc2hQcmVmaXgoJyEnKTtcbiAgICAgICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgICAgICAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAgICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9ob21lLmh0bWwnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xufSgpKTsiXX0=
