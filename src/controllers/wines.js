angular.module('snoothApp')
    //.controller('WinesCtrl', ['$scope', 'Wines',  function ($scope, Wines) {
    .controller('WinesCtrl', ['$scope', 'Wines',function ($scope, Wines) {
        $scope.wineLists = function(wines){
            $scope.wineList = [];
            while (wines.length > 0) {
                for(var i =0; i<2; i++){
                    var rowContent = [];
                    rowContent.push($scope.wines.splice(0, 2));
                }
                $scope.wineList.push(rowContent);
            }
            //console.log($scope.wineList);
            $scope.pages = [];
            angular.forEach($scope.wineList,function(wines){
                $scope.pages.push($scope.addPage($scope.pages[$scope.pages.length - 1],wines));
            });
        }

        $scope.clearSearch = function () {
            $scope.searchText = null;
            $scope.maxPrice = null;
            $scope.minPrice = null;
            $scope.type = null;
            $scope.available = null;
            $scope.rank = null;
            $scope.searchWines();
        };
        $scope.parseInt = parseInt;
        $scope.searchWines = function () {
            var searchData = {
                'searchText': $scope.searchText,
                'maxPrice': parseInt($scope.maxPrice),
                'minPrice': parseInt($scope.minPrice),
                'type': $scope.type,
                'rank': $scope.rank,
                'available': $scope.available
            };
            Wines.getWines(searchData, function (wines) {
                $scope.wines = wines;
                $scope.wineLists($scope.wines);
            });
        };
    }]);