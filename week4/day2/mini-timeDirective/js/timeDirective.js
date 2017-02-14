angular.module('timeApp').directive('showTime', function () {
    return {
        restrict: 'AE',
        template: '<div>The current time is  {{time}}</div>',
        link: function (scope, element, attrs) {
            var currentTime = new Date();
            scope.time = currentTime.toString();
            console.log(scope, element, attrs);
        }
    }
})