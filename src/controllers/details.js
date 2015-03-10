angular.module('snoothApp')
    .controller('wineDetailsController', ['$scope', '$state', '$stateParams', 'Wines', '$state',function ($scope, $state, $stateParams, Wines, $state) {
        if ($stateParams.id != '' || $stateParams.id != undefined) {
            Wines.getDetails($stateParams.id, function (wine) {
                $scope.wineDetails = wine;
            });
        }
        $scope.state = $state.current.name;
        console.log("#"+$scope.state)
    }]);