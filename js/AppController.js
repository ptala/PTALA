angular.module("ptala")
	.controller('AppController', function AppController($scope, $rootScope, $location) {
		$scope.largeLogoSrc = "img/logo-large.png";
		$scope.miniLogoSrc = "img/logo-mini.png";
		$scope.scroll = 0;
		$scope.scrollTarget = 59;
		$scope.miniTime = function() {
			if($location.path() == '/'){
				return $scope.scroll > $scope.scrollTarget;
			} else {
				return true
			}
		};


	});
