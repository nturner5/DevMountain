angular.module('triviaTrend').controller('mainCtrl', function ($scope, dataService) {
    $scope.test = 'controller is working';
    $scope.test1 = dataService.test1;
    var pageNum = 0;
    $scope.nextPage = nextPage;
    $scope.prevPage = prevPage; 

    $scope.getData = function () {
        var promise = dataService.getData($scope.currentPage);
        promise.then(function (response) {
            $scope.questions = response;
            $scope.total_pages = response.total_pages;
        })
    }
    function nextPage(pageNum) {
        pageNum++
        console.log(pageNum)
        $scope.getData(pageNum);
    }


    function prevPage(pageNum) {
        if (pageNum > 0) {
        pageNum--
        $scope.getData(PageNum);
        }
    }

    $scope.getData();
})