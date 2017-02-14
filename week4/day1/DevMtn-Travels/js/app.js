angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "./views/about.html",
                controller: ''
            })
            .state('adventurers',{
                url:'/adventurers',
                parent:'home',
                templateUrl: './views/about-adventurers.html',
                controller: ''
            })
            .state('contact',{
                url:'/contact',
                parent:'',
                templateUrl: "./views/contact.html",
                controller: ''
            })
            .state('packages',{
                url:'/packages',
                templateUrl: "./views/packages.html",
                controller: 'packagesCtrl'
            })
            .state('booked',{
                url:'/booked/:id',
                templateUrl: "./views/booked.html",
                controller: 'bookedCtrl'
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "./views/locations.html",
                controller: 'locationsCtrl'
            });

        $urlRouterProvider
            .otherwise('/');
    });
