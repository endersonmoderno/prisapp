'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:CadastrarCtrl
 * @description
 * # CadastrarCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('CadastrarCtrl', function ($scope, $http, $filter, $localStorage) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.msgerro = "";
        $scope.ShowLoad = false;

        //manipula o load da página
        $scope.Loader = function (isCarregar, msg) {
            if (msg === undefined) { msg = "Aguarde, carregando..."; }
            $scope.ShowLoad = isCarregar;
            $scope.MsgDivLoad = msg;
        };

        $scope.usuario = $localStorage.simusuario;

        //verifica se possui pesquisa
        if ($localStorage.simpesquisa && $localStorage.simpesquisa.dtnascdia !== '') {

            //carrega pesquisa com valor existente
            $scope.obj = $localStorage.simpesquisa;

        } else {

            //novo objeto
            $scope.obj = {
                id: 0,
                nome: $scope.usuario.nome,
                sobrenome: $scope.usuario.sobrenome,
                usuario_id: $scope.usuario.id,
                dtnascdia: "",
                dtnascmes: "",
                dtnascano: "",
                email: $scope.usuario.login,
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
        }

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
                $scope.indice = $scope.indice + 2;
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

            if ($scope.stage === 'stage5' && $scope.obj.jainvestiu === 'N') {
                $scope.indice = $scope.indice - 2;
            }

            if ($scope.stage === 'stage8' && $scope.obj.jainvestiucripto === 'S') {
                $scope.indice = $scope.indice - 2;
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

            if ($scope.myform.$valid) {
                $scope.validar = false;

                $scope.Loader(true);

                var simhost = $localStorage.simhost;

                var service = $http.post(simhost + "mod_pesquisa/api.php/pesquisa/nova", $scope.obj);
                service.then(function onSuccess(response) {

                    //obter dados de retorno da api
                    var data = response.data;

                    if (data.retorno.status === "ok") {

                        //gravação de pesquisa em local
                        $localStorage.simpesquisa = data.retorno.dados.pesquisa;

                        //redireciona
                        $scope.stage = "success";
                    } else {
                        $scope.stage = "error";
                        //retonra exceção programada
                        $scope.msgerro = data.retorno.dados.erro;
                    }
                }).catch(function onError(response) {

                    //obter dados de retorno da api
                    var data = response.data;

                    //se ocorrer erro, exibe mensagem
                    if (data !== undefined && data !== "" && data.retorno !== undefined) {
                        $scope.msgerro = "Serviço falhou: " + data.retorno.dados.erro;
                    } else {
                        $scope.msgerro = "Serviço falhou tente novamente.";
                    }

                    $scope.stage = "error";

                }).finally(function () {
                    $scope.Loader(false);
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
