angular.module('app').controller('playerCtrl', function($scope, playerService, $stateParams){
    $scope.player = playerService.getPlayerById($stateParams.id)
})