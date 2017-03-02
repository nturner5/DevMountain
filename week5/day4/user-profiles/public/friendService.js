angular.module('userProfiles')
  .service('friendService', function ($http) {


    this.login = function (user) {
      return $http({
        method: 'POST',
        url: '/api/login',
        data: user
      }).then(function(response){
        return response;
      } )
    };

    this.getFriends = function () {
      return $http({
        method: 'POST',
        url: '/api/profiles'
      }).then(function(response){
        return response;
      } )
    };

  });