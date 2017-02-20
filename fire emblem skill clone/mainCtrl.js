angular.module('fireApp').controller('mainCtrl', function($scope, mainSrv){
    $scope.mainControl = 'controller is working'
    $scope.mainService = mainSrv.mainService;
    $scope.test = 'it works'
})