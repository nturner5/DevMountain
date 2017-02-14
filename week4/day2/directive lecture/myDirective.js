angular.module('myApp')
.directive('inputBox', function(){
    return {
        restrict: 'AE',
        scope: {
            title: '@',
            doSomething: '&'
        },
        templateUrl: 'myDirective.html',
    }
})