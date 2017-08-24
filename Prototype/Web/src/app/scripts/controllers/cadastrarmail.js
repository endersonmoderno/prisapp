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

        $scope.msgerro = "";
        $scope.ShowLoad = false;
        $scope.stage = "";
        $scope.indice = 0;

        $scope.obj = {
            nome: "",
            sobrenome: "",
            email: "",
            senha: ""
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

            if ($scope.myform.$valid) {
                $scope.validar = false;

                $scope.Loader(true);

                var simhost = $localStorage.simhost;

                //monta json de novo objeto
                $scope.novoObj = {
                    id: 0,
                    nome: $scope.obj.nome + " " + $scope.obj.sobrenome,
                    login: $scope.obj.email,
                    token: "",
                    senha: $scope.obj.senha,
                    confirmarsenha: $scope.rsenha,
                    data: "",
                    selpermissoes: ["9"],
                    permissoes: [{ "id": "9", "codigo": "conteudo1", "modulo": "com_conteudo", "nome": "", "descricao": "", "data": "" }]
                };

                var service = $http.post(simhost + "mod_usuario/api.php/usuario/novo", $scope.novoObj);
                service.then(function onSuccess(response) {

                    //obter dados de retorno da api
                    var data = response.data;

                    if (data.retorno.status === "ok") {

                        //TODO: verificar se gravação local ocorrerá aqui
                        $localStorage.usuario = $scope.obj;

                        //recarrega o token em dados locais
                        $localStorage.simadmintoken = data.retorno.dados.token;

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

        //manipula o load da página
        $scope.Loader = function (isCarregar, msg) {
            if (msg === undefined) { msg = "Aguarde, carregando..."; }
            $scope.ShowLoad = isCarregar;
            $scope.MsgDivLoad = msg;
        };

    });
