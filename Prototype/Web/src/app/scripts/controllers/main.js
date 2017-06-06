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

        $scope.isOpen = false;

        $scope.items = [
            {
                login: '@maria.alice',
                valor: 'R$ 202,90',
                data: '10/06/2017 01h02m',
                foto: 'images/mariaalice.png',
                tipo: '+'
            },
            {
                login: '@alexandre.paiva',
                valor: 'R$ 54,20',
                data: '07/06/2017 09h23m',
                foto: 'images/alexandre.png',
                tipo: '+'
            },
            {
                login: '@renata.bischoff',
                valor: 'R$ 61,00',
                data: '29/05/2017 16h42m',
                foto: 'images/renata.png',
                tipo: '-'
            },
            {
                login: '@pedro.geraldine',
                valor: 'R$ 12,00',
                data: '29/05/2017 16h33m',
                foto: 'images/pedro.png',
                tipo: '+'
            },
            {
                login: '@marcello.piola',
                valor: 'R$ 12,00',
                data: '01/03/2017 17h07m',
                foto: 'images/piola.png',
                tipo: '-'
            }
        ];

        $scope.fnpagar = function () {
            $location.url('/pagar');
        };

        $scope.fnreceber = function () {
            $location.url('/receber');
        };

    });
