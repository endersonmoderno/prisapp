'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('MainCtrl', function (Notification, $scope, $http, $localStorage, $location) {
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

        //inibir exibição de gráfico
        $scope.possui = false;

        //carrega usuário
        $scope.usuario = $localStorage.simusuario;

        //controle de menu (controle pai)
        $scope.$parent.usuario = $scope.usuario;

        //carregar objeto padrão
        $scope.resumo = {
            id: 0,
            investimento: 0,
            rendimento: 0,
            total: 0,
            percentual: 0,
            data: null
        };

        //consultar resumo
        //------------------------------------------------------------------------------------
        $scope.Loader(true, "Aguarde, acessando sistema...");

        var simhost = $localStorage.simhost;

        var service = $http.get(simhost + "mod_resumo/api.php/resumo/" + $scope.usuario.id);
        service.then(function onSuccess(response) {

            //obter dados de retorno da api
            var data = response.data;

            if (data.retorno.status === "ok") {

                if (data.retorno.dados.resumo) {

                    //gravação local de dados de resumo
                    $localStorage.simresumo = data.retorno.dados.resumo;

                    //carrega resumo de api
                    $scope.resumo = data.retorno.dados.resumo;

                    //habilitar exibição do gráfico
                    $scope.possui = true;

                    //carregar gráfico
                    $scope.labels = ["Investimentos R$ ", "Rendimentos R$ "];
                    $scope.data = [$scope.resumo.investimento, $scope.resumo.rendimento];
                }

            } else {

                //retorna exceção programada
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
        //------------------------------------------------------------------------------------


        //consultar histórico
        //------------------------------------------------------------------------------------
        $scope.consultarHistorico = function () {

            $scope.Loader(true, "Aguarde, acessando sistema...");

            var simhost = $localStorage.simhost;

            var service = $http.get(simhost + "mod_investimento/api.php/investimento/" + $scope.usuario.id);
            service.then(function onSuccess(response) {

                //obter dados de retorno da api
                var data = response.data;

                if (data.retorno.status === "ok") {

                    if (data.retorno.dados.investimento) {

                        //gravação local de dados de investimentos
                        $localStorage.siminvestimentos = data.retorno.dados.investimento;

                        //carrega investimentos de api
                        $scope.items = data.retorno.dados.investimento;

                        //carregar gráfico
                        $scope.labels = ["Investimentos R$ ", "Rendimentos R$ "];
                        $scope.data = [$scope.resumo.investimento, $scope.resumo.rendimento];
                    }

                } else {

                    //retorna exceção programada
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
        //------------------------------------------------------------------------------------

        //TODO: carregar histórico da api
        //os investimento devem ser em lista
        //TODO: até obter o histórico da api
        //--------------------------------------
        var investimento = null;
        //verifica investimento local
        if ($localStorage.siminvestimento) {

            investimento = $localStorage.siminvestimento;


            /*
            var percentual = investimento.rendimento / investimento.valor;
            percentual = percentual * 100;
            percentual = parseInt(percentual);
            */
        }
        //-------------------------------------
        if (investimento !== null) {

            //meses que faltam para o investimento
            var mesInvestimento = new Date(investimento.data).getMonth();
            var mesAtual = new Date().getMonth();
            var mesRestam = investimento.periodo + mesAtual;
            mesRestam = mesRestam - mesInvestimento;

            $scope.antigo2 = [
                {
                    id: 1,
                    data: moment(new Date(investimento.data)).format('DD/MM/YYYY - HH:mm'),
                    investimento: investimento.valor,
                    rendimento: investimento.rendimento,
                    periodo: investimento.periodo,
                    meses: mesRestam,
                    icon: 'spinner',
                    cancel: true,
                    saque: false,
                    moedas: [
                        {
                            id: 1,
                            nome: "Bitcoin (BTC)",
                            imagem: "https://www.cryptocompare.com/media/19633/btc.png",
                            valor: "R$ 14123,45",
                            percentual: 34,
                            subiu: true
                        },
                        {
                            id: 2,
                            nome: "Ethereum (ETH)",
                            imagem: "https://www.cryptocompare.com/media/20646/eth.png",
                            valor: "R$ 540,12",
                            percentual: 30,
                            subiu: true
                        },
                        {
                            id: 3,
                            nome: "Litecoin (LTC)",
                            imagem: "https://www.cryptocompare.com/media/19782/litecoin-logo.png",
                            valor: "R$ 234,20",
                            percentual: 24,
                            subiu: true
                        }
                    ]
                }
            ];
        }

        //TODO: carregar histórico
        $scope.antigo = [
            {
                id: 1,
                data: '20/06/2017 15h00',
                investimento: 'R$ 500,00',
                rendimento: 'R$ 50,00',
                periodo: '12 meses',
                meses: 'Faltam 10 meses para conclusão',
                icon: 'spinner',
                cancel: true,
                saque: false,
                moedas: $scope.moedas
            },
            {
                id: 2,
                data: '20/03/2017 10h50',
                investimento: 'R$ 500,00',
                rendimento: 'R$ 83,40',
                periodo: '9 meses',
                meses: 'Faltam 3 meses para conclusão',
                icon: 'spinner',
                cancel: true,
                saque: false,
                moedas: $scope.moedas
            },
            {
                id: 3,
                data: '20/01/2017 15h03',
                investimento: 'R$ 500,00',
                rendimento: 'R$ 105,50',
                periodo: '12 meses',
                meses: 'Faltam 7 meses para conclusão',
                icon: 'spinner',
                cancel: true,
                saque: false,
                moedas: $scope.moedas
            },
            {
                id: 4,
                data: '02/10/2016 10h40',
                investimento: 'R$ 250,00',
                rendimento: 'R$ 80,00',
                periodo: '3 meses',
                meses: 'concluído',
                icon: 'check-circle',
                cancel: false,
                saque: true,
                moedas: $scope.moedas
            },
            {
                id: 5,
                data: '27/09/2016 08h50',
                investimento: 'R$ 50,00',
                rendimento: 'R$ 0,00',
                periodo: '3 meses',
                meses: 'cancelado',
                icon: 'ban',
                cancel: false,
                saque: false,
                moedas: $scope.moedas
            }
        ];
    });
