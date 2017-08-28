'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:InvestimentoCtrl
 * @description
 * # InvestimentoCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('InvestimentoCtrl', function (Notification, $scope, $http, $localStorage, $location) {
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

        //obter dados de usuário local
        $scope.usuario = $localStorage.simusuario;

        //consultar se já preencheu a pesquisa e redirecionar
        //------------------------------------------------------------------------------------
        $scope.Loader(true, "Aguarde, acessando sistema...");

        var simhost = $localStorage.simhost;

        var service = $http.get(simhost + "mod_pesquisa/api.php/pesquisa/" + $scope.usuario.id);
        service.then(function onSuccess(response) {

            //obter dados de retorno da api
            var data = response.data;

            if (data.retorno.status === "ok") {

                if (data.retorno.dados.pesquisa) {
                    //gravação local de dados de pesquisa
                    $localStorage.simpesquisa = data.retorno.dados.pesquisa;
                } else {
                    //redireciona
                    $location.path("/cadastrar");
                }

            } else {

                //retorna exceção programada
                Notification.error(data.retorno.dados.erro);

                //redireciona
                $location.path("/main");

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

            //redireciona
            $location.path("/main");

        }).finally(function () {
            $scope.Loader(false);
        });
        //------------------------------------------------------------------------------------


        //carregar dados para calculo investimento
        //------------------------------------------------------------------------------------
        //TODO: aqui
        $scope.indiceRendimento = 0.1;
        //------------------------------------------------------------------------------------

        //carrega pesquisa de local
        $scope.pesquisa = $localStorage.simpesquisa;

        //ajusta valor de pesquisa
        $scope.pesquisa.valor = parseFloat($scope.pesquisa.valor);

        //carrega objeto padrão
        $scope.obj = {
            valor: $scope.pesquisa.valor,
            periodo: 6,
            rendimento: 0,
            total: 0,
            data: null
        };

        //cálculo rendimento estimado
        $scope.calcular = function () {
            $scope.obj.rendimento = $scope.obj.valor * $scope.obj.periodo * $scope.indiceRendimento;
            $scope.obj.total = $scope.obj.valor + $scope.obj.rendimento;
        };

        //calcular primeira estimativa
        $scope.calcular();

        $scope.continuar = function () {

            //captura data atual
            $scope.obj.data = new Date();

            //armazena em local
            $localStorage.siminvestimento = $scope.obj;

            //redireciona para finalizar
            $location.path("/investimento2");
        };
    });
