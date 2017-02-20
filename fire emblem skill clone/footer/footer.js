angular.module("fireApp").directive('footer', function() {
    return {
        restrict: 'AE',
        templateUrl: 'footer/footer.html',
        controller: function($scope) {
            $scope.reloadPage = function() {
                location.reload();

        }
    }
    }
});