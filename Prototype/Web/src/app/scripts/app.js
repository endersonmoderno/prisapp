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
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $route) {
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        $scope.$route = $route;

        function buildToggler(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            };
        }
    });