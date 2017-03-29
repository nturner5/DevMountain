angular.module('myApp').service('service', function ($http) {
    this.test1 = 'service is working'

    this.getFollowing = function () {
        return $http({
            method: 'GET',
            url: '/auth/github',
        }).then(function(results){
            if (results.status === 200) {
                return results.data;
            } else {
                return 'error'
            }
        })

    }
})