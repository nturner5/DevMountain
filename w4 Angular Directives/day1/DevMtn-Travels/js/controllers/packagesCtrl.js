angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv){
    $scope.travelInfo = mainSrv.travelInfo;
})