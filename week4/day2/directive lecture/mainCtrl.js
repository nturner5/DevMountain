angular.module('myApp')
    .controller('mainCtrl', function ($scope) {
        $scope.alertThis = function (message) {
            alert(message);
        }
        $scope.logThis = function (message) {
            console.log(message);
        }
    })