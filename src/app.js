angular.module('snoothApp', ['angular-panorama','ui.bootstrap', 'ui.router', 'monospaced.mousewheel'])
    .config(function ($stateProvider) {
        $stateProvider
        .state('wines', {
            templateUrl: '../demo/wines.html',
            controller: 'wineController',
            url: ''
        })

        .state('details', {
            templateUrl: '../demo/details.html',
            controller: 'wineDetailsController',
            url: '/details/:id'
        })
    });