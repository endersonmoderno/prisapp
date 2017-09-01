'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:Investimento2Ctrl
 * @description
 * # Investimento2Ctrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('Investimento2Ctrl', function (Notification, $scope, $http, $localStorage, $location, $anchorScroll) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //posicionar para o topo
        $location.hash('topo');
        $anchorScroll();

        $scope.ShowLoad = false;

        //manipula o load da página
        $scope.Loader = function (isCarregar, msg) {
            if (msg === undefined) { msg = "Aguarde, carregando..."; }
            $scope.ShowLoad = isCarregar;
            $scope.MsgDivLoad = msg;
        };

        //recupera investimento de local
        var investimento = $localStorage.siminvestimento;
        
        //obter dados de usuário local
        $scope.usuario = $localStorage.simusuario;

        //pega moedas de local
        $scope.moedas = $localStorage.simmoedas;

        //para tela
        $scope.obj = {
            id: 0,
            data: moment(new Date(investimento.data)).format('DD/MM/YYYY - HH:mm'),
            investimento: investimento.valor,
            rendimento: investimento.rendimento,
            periodo: investimento.periodo,
            percentual: investimento.percentual,
            total: investimento.total,
            usuario_id: $scope.usuario.id,
            meses: investimento.periodo,
            icon: 'spinner',
            cancel: true,
            saque: false,
            moedas: $scope.moedas
        };

        //itens de pagamento
        $scope.items = [
            {
                tipo: 'money',
                nome: 'Transferência Bancária'
            },
            {
                tipo: 'barcode',
                nome: 'Boleto - em até 2 dias'
            },
            {
                tipo: 'credit-card-alt',
                nome: 'Cartão de Crédito final 4412'
            }
        ];

        $scope.itemselecionado = 'credit-card-alt';

        //salvar investimento
        $scope.salvar = function () {

            $scope.Loader(true, "Aguarde, finalizando investimento...");

            var simhost = $localStorage.simhost;

            var service = $http.post(simhost + "mod_investimento/api.php/investimento/novo", $scope.obj);
            service.then(function onSuccess(response) {

                //obter dados de retorno da api
                var data = response.data;

                if (data.retorno.status === "ok") {

                    if (data.retorno.dados.investimento) {

                        //gravação local de dados de investiento
                        $localStorage.siminvestimento = data.retorno.dados.investimento;

                        //carrega investimento de api
                        $scope.obj = data.retorno.dados.investimento;

                        //redireciona
                        $location.path("/main");
                    } else {

                        //retorna exceção programada
                        Notification.error('Erro ao finalizar investimento.');

                    }

                } else {

                    //retorna exceção programada
                    Notification.error('Erro ao finalizar investimento... ' + data.retorno.dados.erro);

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
    });
