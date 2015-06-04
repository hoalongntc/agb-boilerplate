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