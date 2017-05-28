'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:ContatosCtrl
 * @description
 * # ContatosCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('ContatosCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.items = [
        {
            login: '@alexandre.paiva',
            foto: 'images/alexandre.png',
            nome: 'Alexandre Paiva'
        },
        {
            login: '@marcello.piola',
            foto: 'images/piola.png',
            nome: 'Marcello Piola'
        },
        {
            login: '@maria.alice',
            foto: 'images/mariaalice.png',
            nome: 'Maria Alice Geraldine'
        },
        {
            login: '@pedro.geraldine',
            foto: 'images/pedro.png',
            nome: 'Pedro Geraldine'
        },
        {
            login: '@renata.bischoff',
            foto: 'images/renata.png',
            nome: 'Renta Bischoff'
        }
    ];

  });
