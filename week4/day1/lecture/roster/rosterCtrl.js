angular.module('app').controller('rosterCtrl', function($scope, playerService){
    $scope.players = playerService.getPlayers();
})