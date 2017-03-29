angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './templates/home.html',
        })
        .state('login', {
            url: '/auth/github',
            templateUrl: './templates/login.html',
        })
        .state('friend', {
            url: '/friend/:github_username',
            templateUrl: './templates/friend.html',
        })
    $urlRouterProvider
        .otherwise('/');

})