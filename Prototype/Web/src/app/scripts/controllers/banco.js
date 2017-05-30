'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:BancoCtrl
 * @description
 * # BancoCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('BancoCtrl', function ($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.okparabanco = function () {
            $scope.bancook = true;
        };

        $scope.items = [
            {
                check: true,
                tipo: 'university',
                nome: 'Conta Banco XPTO'
            },
            {
                check: false,
                tipo: 'university',
                nome: 'Conta Banco Digital'
            }
        ];

    });
