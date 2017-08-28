'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:Investimento2Ctrl
 * @description
 * # Investimento2Ctrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('Investimento2Ctrl', function ($scope, $localStorage, $location, $anchorScroll) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //posicionar para o topo
        $location.hash('topo');
        $anchorScroll();

        //recupera investimento de local
        var investimento = $localStorage.siminvestimento;
        
        //obter dados de usuário local
        $scope.usuario = $localStorage.simusuario;

        //para tela
        $scope.obj = {
            id: 0,
            data: moment(new Date(investimento.data)).format('DD/MM/YYYY - HH:mm'),
            investimento: investimento.valor,
            rendimento: investimento.rendimento,
            periodo: investimento.periodo + ' meses'
        };
        
        //TODO: recuperar top moedas do período
        $scope.moedas = [
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
            },
            {
                id: 4,
                nome: "DigitalCash (DASH)",
                imagem: "https://www.cryptocompare.com/media/20626/dash.png",
                valor: "R$ 450,13",
                percentual: -3,
                subiu: false
            },
            {
                id: 5,
                nome: "Monero (XMR)",
                imagem: "https://www.cryptocompare.com/media/19969/xmr.png",
                valor: "R$ 112,67",
                percentual: -23,
                subiu: false
            }
        ];


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
    });
