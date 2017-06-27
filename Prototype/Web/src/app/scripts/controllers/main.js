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

        $scope.items = [
            {
                id: 1,
                data: '20/06/2017 15h00',
                investimento: 'R$ 500,00',
                rendimento: 'R$ 50,00',
                periodo: '12 meses',
                meses: 'Faltam 10 meses para conclusão',
                icon: 'spinner',
                cancel: true,
                saque: false
            },
            {
                id: 2,
                data: '20/03/2017 10h50',
                investimento: 'R$ 500,00',
                rendimento: 'R$ 83,40',
                periodo: '9 meses',
                meses: 'Faltam 3 meses para conclusão',
                icon: 'spinner',
                cancel: true,
                saque: false
            },
            {
                id: 3,
                data: '20/01/2017 15h03',
                investimento: 'R$ 500,00',
                rendimento: 'R$ 105,50',
                periodo: '12 meses',
                meses: 'Faltam 7 meses para conclusão',
                icon: 'spinner',
                cancel: true,
                saque: false
            },
            {
                id: 4,
                data: '02/10/2016 10h40',
                investimento: 'R$ 250,00',
                rendimento: 'R$ 80,00',
                periodo: '3 meses',
                meses: 'concluído',
                icon: 'check-circle',
                cancel: false,
                saque: true
            },
            {
                id: 5,
                data: '27/09/2016 08h50',
                investimento: 'R$ 50,00',
                rendimento: 'R$ 0,00',
                periodo: '3 meses',
                meses: 'cancelado',
                icon: 'ban',
                cancel: false,
                saque: false
            }
        ];
    });
