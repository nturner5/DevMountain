angular.module('fireApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './home/home.html',
            // controller: 'homeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: './about/about.html',
            controller: 'aboutCtrl'
        })
        .state('characters', {
            url: '/characters',
            templateUrl: './characters/characters.html',
            controller: 'charactersCtrl'
        })
        .state('video', {
            url: '/video',
            templateUrl: './video/video.html',
            controller: 'videoCtrl'
        })
    $urlRouterProvider
        .otherwise('/');
})