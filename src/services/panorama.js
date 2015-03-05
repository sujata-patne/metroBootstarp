angular.module('snoothApp')
    .service('Panaorama', ['$http', function ($http) {
        var service = {};
        service.addPage = function (item, data, direction) {
            // generate a single page, with color and a new date
            if (!item) item = {id: 1};
            if (!direction) direction = 1;
            //console.log(wines)
            return {
                id: item.id + direction,
                width: 30,
                data: data
            };
        }

        return service;
    }]);