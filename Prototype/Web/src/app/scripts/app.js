'use strict';

/**
 * @ngdoc overview
 * @name prisappApp
 * @description
 * # prisappApp
 *
 * Main module of the application.
 */
angular
    .module('prisappApp', [
        'ngAnimate',
        'ngStorage',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMaterial',
        'chart.js',
        'ui.bootstrap',
        'ui-notification'
    ])
    .config(function ($routeProvider, $locationProvider, $mdDateLocaleProvider) {

        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/conquistas', {
                templateUrl: 'views/conquistas.html',
                controller: 'ConquistasCtrl',
                controllerAs: 'conquistas'
            })
            .when('/contatos', {
                templateUrl: 'views/contatos.html',
                controller: 'ContatosCtrl',
                controllerAs: 'contatos'
            })
            .when('/contato/:login', {
                templateUrl: 'views/contato.html',
                controller: 'ContatoCtrl',
                controllerAs: 'contato'
            })
            .when('/cartoes', {
                templateUrl: 'views/cartoes.html',
                controller: 'CartoesCtrl',
                controllerAs: 'cartoes'
            })
            .when('/cartaonovo', {
                templateUrl: 'views/cartaonovo.html',
                controller: 'CartaonovoCtrl',
                controllerAs: 'cartaonovo'
            })
            .when('/dinheiro', {
                templateUrl: 'views/dinheiro.html',
                controller: 'DinheiroCtrl',
                controllerAs: 'dinheiro'
            })
            .when('/banco', {
                templateUrl: 'views/banco.html',
                controller: 'BancoCtrl',
                controllerAs: 'banco'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/receber', {
              templateUrl: 'views/receber.html',
              controller: 'ReceberCtrl',
              controllerAs: 'receber'
            })
            .when('/pagar', {
              templateUrl: 'views/pagar.html',
              controller: 'PagarCtrl',
              controllerAs: 'pagar'
            })
            .when('/investimento', {
              templateUrl: 'views/investimento.html',
              controller: 'InvestimentoCtrl',
              controllerAs: 'investimento'
            })
            .when('/pagarone/:login', {
              templateUrl: 'views/pagarone.html',
              controller: 'PagaroneCtrl',
              controllerAs: 'pagarone'
            })
            .when('/receberone', {
              templateUrl: 'views/receberone.html',
              controller: 'ReceberoneCtrl',
              controllerAs: 'receberone'
            })
            .when('/transacoes', {
              templateUrl: 'views/transacoes.html',
              controller: 'TransacoesCtrl',
              controllerAs: 'transacoes'
            })
            .when('/investimento2', {
              templateUrl: 'views/investimento2.html',
              controller: 'Investimento2Ctrl',
              controllerAs: 'investimento2'
            })
            .when('/', {
              templateUrl: 'views/comoinvestir.html',
              controller: 'ComoinvestirCtrl',
              controllerAs: 'comoinvestir'
            })
            .when('/cadastrar', {
              templateUrl: 'views/cadastrar.html',
              controller: 'CadastrarCtrl',
              controllerAs: 'cadastrar'
            })
            .when('/cadastrarmail', {
              templateUrl: 'views/cadastrarmail.html',
              controller: 'CadastrarmailCtrl',
              controllerAs: 'cadastrarmail'
            })
            .when('/duvidas', {
              templateUrl: 'views/duvidas.html',
              controller: 'DuvidasCtrl',
              controllerAs: 'duvidas'
            })
            .when('/contato', {
              templateUrl: 'views/contato.html',
              controller: 'ContatoCtrl',
              controllerAs: 'contato'
            })
            .when('/contatofb', {
              templateUrl: 'views/contatofb.html',
              controller: 'ContatofbCtrl',
              controllerAs: 'contatofb'
            })
            .otherwise({
                redirectTo: '/'
            });

        $mdDateLocaleProvider.formatDate = function (date) {
            return moment(date).format('DD/MM/YYYY');
        };

    })
    .config(function (NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 5000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'top'
        });
    })
    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $route, $window, $location, $localStorage) {

        $scope.$route = $route;        

        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        $scope.voltar = function () {
            $window.history.back();
        };

        $scope.avancar = function (destino) {
            $location.url('/' + destino);
        };

        $scope.sair = function () {
            $localStorage.$reset();
            $scope.toggleLeft();
            $location.url('/login');
        };

        function buildToggler(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            };
        }
    });
