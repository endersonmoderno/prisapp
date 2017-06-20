'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:BancoCtrl
 * @description
 * # BancoCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('BancoCtrl', function ($scope, $window) {
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
                tipo: 'bancoxpto',
                nome: 'Conta Banco XPTO'
            },
            {
                check: false,
                tipo: 'bancodigital',
                nome: 'Conta Banco Digital'
            }
        ];

        $scope.voltar = function () {
            $window.history.back();
        };

    });
