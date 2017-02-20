angular.module('fireApp').controller('mainCtrl', function($scope, mainSrv,$location, $anchorScroll){
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    }
    
})