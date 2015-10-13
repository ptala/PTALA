angular.module("ptala")
	.controller('HomeController', function HomeController($scope, $rootScope) {
		$scope.highlightVideoDisplay = false;
		$scope.highlightVideo = function() {
				$('#video-container').appendTo('body');
				$scope.highlightVideoDisplay = true;
				$('#home-video').get(0).play();	
		};
		
		$scope.toggleVideo = function() {
			if($('#home-video').get(0).paused == true) {
				$('#home-video').get(0).play();	
			} else {
				$('#home-video').get(0).pause();	
			}
		};	

		$scope.closeVideo = function() {
			$('#home-video').get(0).pause();
			$scope.highlightVideoDisplay = false;
			$('#video-container').appendTo('.home-top');
		};

		$scope.more = function() {
			$("html, body").animate({ scrollTop: $(window).height() + 'px' });
		};
	});
