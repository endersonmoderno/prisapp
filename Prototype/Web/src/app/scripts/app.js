﻿'use strict';

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
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMaterial'
    ])
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', {
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
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $route, $window) {

        $scope.$route = $route;

        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');


        $scope.voltar = function () {
            $window.history.back();
        };

        function buildToggler(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            };
        }
    });