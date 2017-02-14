angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
$urlRouterProvider.when('', '/')

$urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home/home.html',
            controller: 'homeCtrl'
        })
        .state('roster', {
            url: '/',
            templateUrl: 'roster/roster.html',
            controller: 'rosterCtrl'
        })
        .state('player', {
            url: '/player/:id',
            templateUrl: 'player/player.html',
            controller: 'playerCtrl'
        })
        .state('404', {
            url: '/404',
            template: 'Nothing to See'
        })
});