angular.module('snoothApp')
    .controller('wineController', ['$scope', '$stateParams', 'Wines', '$state',function ($scope, $stateParams, Wines, $state) {
        var searchData = {
            'searchText': $scope.searchText,
            'maxPrice': parseInt($scope.maxPrice),
            'minPrice': parseInt($scope.minPrice),
            'type': $scope.type,
            'rank': $scope.rank,
            'available': $scope.available,
            'offset': 10
        };
        $scope.pages = Wines.pages;
        $scope.state = $state.current.name;
        console.log("#"+$scope.state)

        Wines.getWines(searchData, function (wines) {
            Wines.createPage(wines);
            $scope.index = 1;
            $scope.nextPage();
        });
        $scope.home = function () {
            $state.transitionTo("wines");
        }

        $scope.clearSearch = function () {
            $scope.searchText = null;
            $scope.maxPrice = null;
            $scope.minPrice = null;
            $scope.type = null;
            $scope.available = null;
            $scope.rank = null;
            $scope.index = 0;
            $scope.searchWines(1);
        };

        $scope.searchWines = function (offset) {
            if (offset == undefined || offset == null) {
                $scope.offset = $scope.index * 10;
            } else {
                $scope.offset = offset;
            }
            var searchData = {
                'searchText': $scope.searchText,
                'maxPrice': parseInt($scope.maxPrice),
                'minPrice': parseInt($scope.minPrice),
                'type': $scope.type,
                'rank': $scope.rank,
                'available': $scope.available,
                'offset': $scope.index
            };
            Wines.search(searchData, function (wines) {
                $scope.pages = Wines.pages;
                Wines.createPage(wines);
                $scope.index = 1;
                $scope.nextPage();

            });
        };

        $scope.nextPage = function (offset) {
            if (offset == undefined || offset == null) {
                $scope.offset = $scope.index * 10;
            } else {
                $scope.offset = offset;
            }
            var searchData = {
                'searchText': $scope.searchText,
                'maxPrice': parseInt($scope.maxPrice),
                'minPrice': parseInt($scope.minPrice),
                'type': $scope.type,
                'rank': $scope.rank,
                'available': $scope.available,
                'offset': $scope.index
            };

            Wines.getWines(searchData, function (wines) {
                Wines.createPage(wines);
            });
        };
        $scope.scroll = function ($event, delta, deltax, deltay) {
            if (delta > 0) {
                if ($scope.index > 0) {
                    $scope.index--;
                } else {
                    $scope.index = 1;
                    return false;
                }
            } else {
                if ($scope.index < $scope.pages.length - 1) {
                    $scope.index++;
                } else {
                    $scope.offset = $scope.index * 10;
                    $scope.nextPage($scope.index);
                    return false;
                }
            }
        }
        $scope.prev = function () {
            if ($scope.index > 0) {
                $scope.index--;
            } else {
                $scope.index = 1;
                return false;
            }
        }
        $scope.next = function () {
            if ($scope.index < $scope.pages.length - 1) {
                $scope.index++;
            } else {
                $scope.offset = $scope.index * 10;
                $scope.nextPage($scope.index);
                return false;
            }
        }
    }]);