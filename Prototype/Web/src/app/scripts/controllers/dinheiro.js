'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:DinheiroCtrl
 * @description
 * # DinheiroCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('DinheiroCtrl', function ($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        $scope.items = [
            {
                check: true,
                tipo: 'money',
                nome: 'Transferência Bancária'
            },
            {
                check: false,
                tipo: 'barcode',
                nome: 'Boleto - em até 2 dias'
            },
            {
                check: false,
                tipo: 'credit-card-alt',
                nome: 'Cartão de Crédito final 4412'
            }
        ];
    });
