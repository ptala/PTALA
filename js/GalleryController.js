angular.module('ptala')
	.controller('GalleryController', function GalleryController($scope, $rootScope, galleryFactory,Lightbox) {
		$scope.photos = [];
		$scope.originalPhotos = [];
		$scope.tags = [];
		$scope.featuredIndex = 0;


		galleryFactory.getAll(function(posts) {
			var theTags = [];
			theTags.push('all');
		    $.each(posts, function(i,p){
			if(p['type'] == "photo") {
				  	$scope.$apply(function () {
					$scope.originalPhotos.push({url: p.photos[0].original_size.url, caption: p.photos[0].caption,tags: p.tags});
					$.merge(theTags,p.tags);
					});
			}
		    });		    
			$scope.selected = 'all';
			$.unique(theTags);
			$scope.tags = theTags;
			$scope.photos = $scope.originalPhotos;
		});


		$scope.openTag = function(tag) {
			var scroll = $(window).scrollTop();
			$scope.selected = tag;
			$scope.photos = [];
			if(tag == 'all') {
				$scope.photos = $scope.originalPhotos;
			} else {
		
				$.each($scope.originalPhotos, function(i,p) {
					if(p.tags.indexOf(tag) !== -1) {
							$scope.photos.push(p);
					}
				});
			}
		};

		  $scope.openLightboxModal = function (index) {
		    Lightbox.openModal($scope.photos, index);
		  };



	});
