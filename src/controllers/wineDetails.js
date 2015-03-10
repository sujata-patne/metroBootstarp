angular.module('snoothApp')
    .controller('wineDetailsController', ['$scope', '$stateParams', '$state', 'Wines', function ($scope, $stateParams, $state, Wines) {
        $scope.state = $state.current.name;
        Wines.getDetails($stateParams.id, function (wine) {
            $scope.wineDetails = wine;
        });
    }]);