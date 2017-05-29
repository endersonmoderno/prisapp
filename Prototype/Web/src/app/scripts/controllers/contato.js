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
  });
