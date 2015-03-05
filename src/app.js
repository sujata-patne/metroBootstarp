angular.module('snoothApp', ['angular-panorama','ui.bootstrap', 'ui.router', 'monospaced.mousewheel'])
    .config(function ($stateProvider) {
        $stateProvider.state('wines', {
            templateUrl: '../demo/wines.html',
            controller: '',
            url: ''
        })
    });