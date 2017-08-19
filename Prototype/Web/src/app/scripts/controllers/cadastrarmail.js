'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:CadastrarmailCtrl
 * @description
 * # CadastrarmailCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('CadastrarmailCtrl', function ($scope, $http, $filter, $localStorage) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //TODO: verificar se irá continuar a limpar o local
        $localStorage.$reset();

        $scope.obj = {
            nome: "",
            sobrenome: "",
            email: "",
            senha: ""
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


        // Post to desired exposed web service.
        $scope.submitForm = function () {
            var wsUrl = "someURL";

            // Check form validity and submit data using $http
            if ($scope.myform.$valid) {
                $scope.validar = false;

                //TODO: verificar se gravação local ocorrerá aqui
                $localStorage.usuario = $scope.obj;

                $http({
                    method: 'POST',
                    url: wsUrl,
                    data: JSON.stringify($scope.obj)
                }).then(function successCallback(response) {
                    if (response
                        && response.data
                        && response.data.status
                        && response.data.status === 'success') {
                        $scope.stage = "success";
                    } else {
                        if (response
                            && response.data
                            && response.data.status
                            && response.data.status === 'error') {
                            $scope.stage = "error";
                        }
                    }
                }, function errorCallback(response) {
                    $scope.stage = "error";
                    console.log(response);
                });
            }
        };

        $scope.reset = function () {
            // Clean up scope before destorying
            $scope.obj = {};
            $scope.stage = "";
            $scope.indice = 0;
            //$scope.validar = false;
            //$scope.toggleJSONView = false;
            //$scope.toggleFormErrorsView = false;
        };


    });
