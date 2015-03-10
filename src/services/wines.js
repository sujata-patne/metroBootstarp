
angular.module('snoothApp')
    .service('Wines', ['$http', function ($http) {
        var service = {};
        service.pages = [];

        service.getWines = function (searchData, success) {
            var queryStr = '';
            if (searchData.searchText !== undefined && searchData.searchText !== null && searchData.searchText !== '') {
                queryStr += '&q=' + searchData.searchText;
            }
            if (searchData.type !== undefined && searchData.type !== null && searchData.type !== '') {
                queryStr += '&t=' + searchData.type;
            }
            if (searchData.maxPrice != undefined && searchData.maxPrice !== null && searchData.maxPrice !== '' && !isNaN(searchData.maxPrice)) {
                queryStr += '&xp=' + searchData.maxPrice;
            }
            if (searchData.minPrice !== undefined && searchData.minPrice !== null && searchData.minPrice !== '' && !isNaN(searchData.minPrice)) {
                queryStr += '&mp=' + searchData.minPrice;
            }
            if (searchData.rank !== undefined && searchData.rank !== null && searchData.rank !== '' && searchData.rank === true) {
                queryStr += '&s=sr';
            }
            if (searchData.available !== undefined && searchData.available !== null && searchData.available !== '' && searchData.available === true) {
                queryStr += '&a=1';
            } else {
                queryStr += '&a=0';
            }
            if (searchData.offset !== undefined && searchData.offset !== null && searchData.offset !== '') {
                queryStr += '&f=' + searchData.offset;
            }
            //console.log(queryStr)
            $http.get('http://api.snooth.com/wines/?akey=mi8v17gunq6ljj88xq3260ir398jg1iqto10gn50ka7f73xi&ip=66.28.234.115&n=10' + queryStr)
                .success(function (data) {
                    success(data.wines);
                })
        }
        service.getDetails = function(id, success){
            $http.get('http://api.snooth.com/wine/?akey=mi8v17gunq6ljj88xq3260ir398jg1iqto10gn50ka7f73xi&ip=66.28.234.115&id=' + id)
                .success(function (data) {
                    success(data.wines);
                })
        }
        service.addPage = function (item, data, direction) {
            // generate a single page, with color and a new date
            if (!item) item = { id: 1 };
            if (!direction) direction = 1;
            return {
                id: item.id + direction,
                width: 80,
                data: data
            };
        }
        service.createPage = function (data) {
            service.pages.push(service.addPage(service.pages[service.pages.length - 1], data));
        }
        service.search = function (searchData, success) {
            service.pages = [];
            service.getWines(searchData, success);
        }

        return service;
    }]);