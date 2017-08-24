'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:InvestimentoCtrl
 * @description
 * # InvestimentoCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('InvestimentoCtrl', function ($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //TODO: consultar se já preencheu a pesquisa e redirecionar

        $scope.obj = {
            valor: 100.01,
            periodo: 3,
            rendimento: 0
        };

    });
