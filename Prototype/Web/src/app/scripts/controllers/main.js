'use strict';

/**
 * @ngdoc function
 * @name prisappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prisappApp
 */
angular.module('prisappApp')
    .controller('MainCtrl', function ($scope, $location) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.possui = false;

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

        $scope.labels = ["Investimentos R$ ", "Rendimentos R$ "];
        $scope.data = [1000, 120];

        $scope.items = [
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
