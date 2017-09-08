'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:ComoinvestirCtrl
 * @description
 * # ComoinvestirCtrl
 * Controller of the prisappApp
 */
        
angular.module('prisappApp')
    .controller('ComoinvestirCtrl', function ($scope, $http, $filter, $localStorage) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //define o host padrão
        $localStorage.simhost = "http://localhost:81/PrisAdmin/simples/";

        $scope.msgerro = "";
        $scope.ShowLoad = false;

        //manipula o load da página
        $scope.Loader = function (isCarregar, msg) {
            if (msg === undefined) { msg = "Aguarde, carregando..."; }
            $scope.ShowLoad = isCarregar;
            $scope.MsgDivLoad = msg;
        };

        $scope.stage = "";
        $scope.indice = 0;

        // Navigation functions
        $scope.next = function () {
            $scope.indice = $scope.indice + 1;
            //$scope.stage = stage;

            $scope.validar = true;

            if ($scope.myform.$valid) {
                $scope.direction = 1;
                $scope.stage = 'stage' + $scope.indice;
                $scope.validar = false;
            } else {
                $scope.indice = $scope.indice - 1;
            }
        };

        $scope.back = function () {
            if ($scope.indice > 0) {
                $scope.indice = $scope.indice - 1;
            }

            if ($scope.indice > 0) {
                $scope.stage = 'stage' + $scope.indice;
            } else {
                $scope.stage = '';
            }

            $scope.direction = 0;
        };

    });
