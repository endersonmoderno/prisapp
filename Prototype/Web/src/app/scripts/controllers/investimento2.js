'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:Investimento2Ctrl
 * @description
 * # Investimento2Ctrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('Investimento2Ctrl', function ($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.obj = {
            id: 1,
            data: '20/06/2017 15h00',
            investimento: 'R$ 500,00',
            rendimento: 'R$ 50,00',
            periodo: '12 meses'
        };

        $scope.items = [
            {
                tipo: 'money',
                nome: 'Transferência Bancária'
            },
            {
                tipo: 'barcode',
                nome: 'Boleto - em até 2 dias'
            },
            {
                tipo: 'credit-card-alt',
                nome: 'Cartão de Crédito final 4412'
            }
        ];

        $scope.itemselecionado = 'credit-card-alt';
    });
