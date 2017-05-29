'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:CartoesCtrl
 * @description
 * # CartoesCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('CartoesCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.items = [
        {
            check: true,
            tipo: 'money',
            nome: 'Usar saldo Pri$: R$ 100,00'
        },
        {
            check: false,
            tipo: 'credit-card-alt',
            nome: 'Cartão de Crédito final 4412'
        }
    ];
  });
