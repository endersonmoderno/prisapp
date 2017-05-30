'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:ContatoCtrl
 * @description
 * # ContatoCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('ContatoCtrl', function ($scope, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.login = $routeParams.login;

        $scope.items = [
            {
                login: '@maria.alice',
                pontos: '1380',
                foto: 'images/mariaalice.png',
                nome: 'Maria Alice Geraldine',
                transacoes: [
                    {
                        valor: 'R$ 202,90',
                        data: '10/06/2017 01h02m',
                        tipo: '+'
                    },
                    {
                        valor: 'R$ 22,00',
                        data: '06/06/2017 11h12m',
                        tipo: '-'
                    },
                    {
                        valor: 'R$ 80,50',
                        data: '04/05/2017 09h17m',
                        tipo: '+'
                    }
                ]
            },
            {
                login: '@alexandre.paiva',
                pontos: '1110',
                foto: 'images/alexandre.png',
                nome: 'Alexandre Paiva',
                transacoes: [
                    {
                        valor: 'R$ 202,90',
                        data: '10/06/2017 01h02m',
                        tipo: '+'
                    },
                    {
                        valor: 'R$ 22,00',
                        data: '06/06/2017 11h12m',
                        tipo: '-'
                    },
                    {
                        valor: 'R$ 80,50',
                        data: '04/05/2017 09h17m',
                        tipo: '+'
                    }
                ]
            },
            {
                login: '@renata.bischoff',
                pontos: '860',
                foto: 'images/renata.png',
                nome: 'Renta Bischoff',
                transacoes: [
                    {
                        valor: 'R$ 202,90',
                        data: '10/06/2017 01h02m',
                        tipo: '+'
                    },
                    {
                        valor: 'R$ 22,00',
                        data: '06/06/2017 11h12m',
                        tipo: '-'
                    },
                    {
                        valor: 'R$ 80,50',
                        data: '04/05/2017 09h17m',
                        tipo: '+'
                    }
                ]
            },
            {
                login: '@pedro.geraldine',
                pontos: '200',
                foto: 'images/pedro.png',
                nome: 'Pedro Geraldine',
                transacoes: [
                    {
                        valor: 'R$ 202,90',
                        data: '10/06/2017 01h02m',
                        tipo: '+'
                    },
                    {
                        valor: 'R$ 22,00',
                        data: '06/06/2017 11h12m',
                        tipo: '-'
                    },
                    {
                        valor: 'R$ 80,50',
                        data: '04/05/2017 09h17m',
                        tipo: '+'
                    }
                ]
            },
            {
                login: '@marcello.piola',
                pontos: '0',
                foto: 'images/piola.png',
                nome: 'Marcello Piola',
                transacoes: [
                    {
                        valor: 'R$ 202,90',
                        data: '10/06/2017 01h02m',
                        tipo: '+'
                    },
                    {
                        valor: 'R$ 22,00',
                        data: '06/06/2017 11h12m',
                        tipo: '-'
                    },
                    {
                        valor: 'R$ 80,50',
                        data: '04/05/2017 09h17m',
                        tipo: '+'
                    }
                ]
            }
        ];

        angular.forEach($scope.items, function (obj, index) {
            if (obj.login === $scope.login) {
                $scope.obj = obj;
            }
        });
    });
