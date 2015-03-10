angular.module('snoothApp', ['angular-panorama','ui.bootstrap', 'ui.router', 'monospaced.mousewheel'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('wines', {
                templateUrl: '../demo/wines.html',
                controller: 'panoramaController',
                url: ''
            })
            .state('details', {
                templateUrl: '../demo/wineDetails.html',
                controller: 'wineDetailsController',
                url: '/details/:id'
            })
    });