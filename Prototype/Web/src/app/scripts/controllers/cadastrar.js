'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:CadastrarCtrl
 * @description
 * # CadastrarCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('CadastrarCtrl', function ($scope, $http, $filter) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.obj = {
            nome: "",
            sobrenome: "",
            dtnascdia: "",
            dtnascmes: "",
            dtnascano: "",
            email: "",
            sexo: "",
            jainvestiu: "N",
            poupanca: false,
            tesouro: false,
            acoes: false,
            imoveis: false,
            outros: false,
            grausatisfeito: 0,
            jainvestiucripto: "N",
            nuncapois: 0,
            confianca: 0,
            maneirafacil: "N",
            valor: "",
            estado: "",
            cidade: ""
        };

        $scope.stage = "";
        $scope.indice = 0;


        $scope.sexo = function (tipo) {
            $scope.obj.sexo = tipo;
            $scope.next();
        };

        $scope.jainvestiu = function (tipo) {
            $scope.obj.jainvestiu = tipo;

            if (tipo === 'N') {
                $scope.indice = $scope.indice + 2;
            }

            $scope.next();
        };

        $scope.grausatisfeito = function (tipo) {
            $scope.obj.grausatisfeito = tipo;
            $scope.next();
        };

        $scope.jainvestiucripto = function (tipo) {
            $scope.obj.jainvestiucripto = tipo;

            if (tipo === 'S') {
                $scope.indice = $scope.indice + 3;
            }

            $scope.next();
        };

        $scope.nuncapois = function (tipo) {
            $scope.obj.nuncapois = tipo;
            $scope.next();
        };

        $scope.confianca = function (tipo) {
            $scope.obj.confianca = tipo;
            $scope.next();
        };

        $scope.maneirafacil = function (tipo) {
            $scope.obj.maneirafacil = tipo;
            $scope.next();
        };

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
