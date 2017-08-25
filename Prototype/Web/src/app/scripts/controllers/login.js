'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('LoginCtrl', function (Notification, $scope, $http, $localStorage, $location) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.ShowLoad = false;

        //manipula o load da página
        $scope.Loader = function (isCarregar, msg) {
            if (msg === undefined) { msg = "Aguarde, carregando..."; }
            $scope.ShowLoad = isCarregar;
            $scope.MsgDivLoad = msg;
        };

        $scope.Loader(true);

        $scope.Entrar = function () {

            //se nada foi informado, abandona
            if ($scope.obj === undefined)
                return false;

            //se foi informado parcialmente, retorna erro
            if ($scope.obj.login === undefined || $scope.obj.login === "" || $scope.obj.login === null
                || $scope.obj.senha === undefined || $scope.obj.senha === "" || $scope.obj.senha === null) {
                Notification.error('Informe Login e Senha corretamente.');
                return false;
            }

            $scope.Loader(true, "Aguarde, acessando sistema...");

            //limpa dados de local
            $localStorage.$reset();

            //define o host padrão
            $localStorage.simhost = "http://localhost:81/PrisAdmin/simples/";

            var simhost = $localStorage.simhost;

            var service = $http.post(simhost + "mod_login/api.php/loginapp", $scope.obj);
            service.then(function onSuccess(response) {

                //obter dados de retorno da api
                var data = response.data;

                if (data.retorno.status === "ok") {

                    //gravação local de dados de usuário
                    $localStorage.simusuario = data.retorno.dados.usuario;

                    //recarrega o token em dados locais
                    $localStorage.simadmintoken = data.retorno.dados.usuario.token;

                    //redireciona
                    $location.path("/main");

                } else {

                    //retonra exceção programada
                    Notification.error(data.retorno.dados.erro);

                }

            }).catch(function onError(response) {

                //obter dados de retorno da api
                var data = response.data;

                //se ocorrer erro, exibe mensagem
                if (data !== undefined && data !== '' && data.retorno !== undefined) {
                    Notification.error('Serviço falhou: ' + data.retorno.dados.erro);
                } else {
                    Notification.error('Serviço falhou tente novamente.');
                }

            }).finally(function () {
                $scope.Loader(false);
            });
        };

        $scope.Loader(false);
    });
