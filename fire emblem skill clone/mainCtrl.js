angular.module('fireApp').controller('mainCtrl', function($scope, mainSrv,$location, $anchorScroll){
    $scope.gotoTop = function() {
        $location.hash('top');
        $anchorScroll();
    }
})