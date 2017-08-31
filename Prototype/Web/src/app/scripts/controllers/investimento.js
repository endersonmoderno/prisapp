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
                        percentual: 0,
                        data: null
                    };

                    //carregar dados para calculo investimento
                    $scope.obterDadosMoedas();

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
            //$scope.Loader(false);
        });
        //------------------------------------------------------------------------------------


        //carregar dados para calculo investimento
        //------------------------------------------------------------------------------------
        $scope.obterDadosMoedas = function () {

            $scope.Loader(true, "Aguarde, obtendo valores das moedas...");

            var simhost = $localStorage.simhost;

            var service = $http.get(simhost + "mod_criptomoeda/api.php/moedas");
            service.then(function onSuccess(response) {

                //obter dados de retorno da api
                var data = response.data;

                if (data.retorno.status === "ok") {

                    if (data.retorno.dados.moedas) {

                        //gravação local de dados de moedas
                        $localStorage.simmoedas = data.retorno.dados.moedas.moedas;

                        //gravação local de dados de indices
                        $localStorage.simindice = data.retorno.dados.moedas.indice;

                        //carrega moedas de api
                        $scope.moedas = data.retorno.dados.moedas.moedas;

                        //carrega indices de api
                        $scope.indice = data.retorno.dados.moedas.indice;

                        //calcular primeira estimativa
                        $scope.calcular();
                    }

                } else {

                    //retorna exceção programada
                    Notification.error('Erro ao obter moedas... ' + data.retorno.dados.erro);

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
        };
        //------------------------------------------------------------------------------------


        //cálculo rendimento estimado
        $scope.calcular = function () {

            var fatormedia = $scope.indice.divisao;
            var investimento = $scope.obj.valor;
            var investidivid = investimento / fatormedia;
            var moeda1 = $scope.moedas[0];
            var moeda2 = $scope.moedas[1];
            var moeda3 = $scope.moedas[2];
            var moeda4 = $scope.moedas[3];
            var moeda5 = $scope.moedas[4];
            var moeda6 = $scope.moedas[5];
            var moeda7 = $scope.moedas[6];
            var rendmoeda1 = investidivid * (moeda1.percentual / 100);
            var rendmoeda2 = investidivid * (moeda2.percentual / 100);
            var rendmoeda3 = investidivid * (moeda3.percentual / 100);
            var rendmoeda4 = investidivid * (moeda4.percentual / 100);
            var rendmoeda5 = investidivid * (moeda5.percentual / 100);
            var rendmoeda6 = investidivid * (moeda6.percentual / 100);
            var rendmoeda7 = investidivid * (moeda7.percentual / 100);
            var rendefetivomoeda1 = 0; if (rendmoeda1 > 0) { rendefetivomoeda1 = rendmoeda1; }
            var rendefetivomoeda2 = 0; if (rendmoeda2 > 0) { rendefetivomoeda2 = rendmoeda1; }
            var rendefetivomoeda3 = 0; if (rendmoeda3 > 0) { rendefetivomoeda3 = rendmoeda3; }
            var rendefetivomoeda4 = 0; if (rendmoeda4 > 0) { rendefetivomoeda4 = rendmoeda4; }
            var rendefetivomoeda5 = 0; if (rendmoeda5 > 0) { rendefetivomoeda5 = rendmoeda5; }
            var rendefetivomoeda6 = 0; if (rendmoeda6 > 0) { rendefetivomoeda6 = rendmoeda6; }
            var rendefetivomoeda7 = 0; if (rendmoeda7 > 0) { rendefetivomoeda7 = rendmoeda7; }
            var rendmedio = rendefetivomoeda1 + rendefetivomoeda2 + rendefetivomoeda3 + rendefetivomoeda4;
            rendmedio = rendmedio + rendefetivomoeda5 + rendefetivomoeda6 + rendefetivomoeda7;
            var comissao = $scope.indice.com3;
            if ($scope.obj.periodo >= 10 && $scope.obj.periodo <= 12) {
                comissao = $scope.indice.com1;
            } else {
                if ($scope.obj.periodo >= 6 && $scope.obj.periodo <= 9) {
                    comissao = $scope.indice.com2;
                }
            }
            var comissaovalor = rendmedio * comissao;
            var rendtotal = rendmedio - comissaovalor;
            var ganhovalor = investimento + rendtotal;
            var ganhoperc = (ganhovalor - investimento) / ganhovalor * 100;
            var rendtotalperiodo = rendtotal * $scope.obj.periodo;

            $scope.obj.rendimento = rendtotalperiodo;
            $scope.obj.total = investimento + rendtotalperiodo;
            $scope.obj.percentual = parseInt(rendtotalperiodo / investimento * 100);
        };

        $scope.continuar = function () {

            //captura data atual
            $scope.obj.data = new Date();

            //armazena em local
            $localStorage.siminvestimento = $scope.obj;

            //redireciona para finalizar
            $location.path("/investimento2");
        };
    });
