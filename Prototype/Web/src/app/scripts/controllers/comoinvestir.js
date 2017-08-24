'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:ComoinvestirCtrl
 * @description
 * # ComoinvestirCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('ComoinvestirCtrl', function ($scope, $localStorage) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
       
        //define o host padrão
        $localStorage.simhost = "http://localhost:81/PrisAdmin/simples/";

        $scope.show = 1;

    });
