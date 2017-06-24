'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('MainCtrl', function ($scope, $location) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.labels = ["Investimentos R$ ", "Rendimentos R$ "];
        $scope.data = [1000, 120];

    });
