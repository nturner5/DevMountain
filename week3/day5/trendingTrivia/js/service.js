angular.module('triviaTrend').service('dataService', function ($http) {
    this.test1 = 'service is working';

    this.getData = function (pageNum) {
        return $http({
            method: "GET",
            url: 'https://practiceapi.devmountain.com/api/trivia/questions?page=' + pageNum 
        }).then(function (results) {
            if (results.status === 200) {
                console.log(results);
                return results.data;
            } else {
                return "Error! " + results.status;
            }
        })
    }


})