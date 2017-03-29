angular.module('userProfiles')
	.controller('profileCtrl', function ($scope, friendService) {

			friendService.getFriends().then(function (res) {
				$scope.currentUser = res.data.currentUser;
				$scope.friends = res.data.friends;	
				// FIX ME - assign values to $scope.currentUser and $scope.friends
			});
	})