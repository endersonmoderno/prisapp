'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:ConquistasCtrl
 * @description
 * # ConquistasCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('ConquistasCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.items = [
        {
            login: '@maria.alice',
            valor: '1380',
            foto: 'images/mariaalice.png'
        },
        {
            login: '@enderson.moderno',
            valor: '1300',
            foto: 'images/enderson.png',
            ativo: 'sim'
        },
        {
            login: '@alexandre.paiva',
            valor: '1110',
            foto: 'images/alexandre.png'
        },
        {
            login: '@renata.bischoff',
            valor: '860',
            foto: 'images/renata.png'
        },
        {
            login: '@pedro.geraldine',
            valor: '200',
            foto: 'images/pedro.png'
        },
        {
            login: '@marcello.piola',
            valor: '0',
            foto: 'images/piola.png'
        }
    ];

  });
