angular.module('ptala')
	.controller('AboutController', function AboutController($scope, $rootScope) {

		$scope.currentVenueSlideIndex = -2;	
		$scope.didLoad = false;
		$scope.isCurrentVenueSlideIndex = function(index) {
			return $scope.currentVenueSlideIndex == index;
		};	
		
		$scope.openVenueSlide = function(index) {
			if(index == 6) {
				index = 0;
			} else if (index == -1) {
				index = 5;
			}
			$scope.currentVenueSlideIndex = index;
		};
		
		$scope.venueHeight = function() {
			return "height: "+0.26*$(window).width()+"px";
		};

		$scope.largeVenueHeight = function() {
			return "max-height: "+$(window).height() + "px";
		};

		$scope.$watch('currentVenueSlideIndex', function () {
			if($scope.didLoad == true) {
				$("html, body").animate({ scrollTop: $('.iconic-venues').position().top + 'px' });
			} else {
				$scope.didLoad = true;	
			}
		 }, true);


	
		$scope.venues = [

			{	
				title: 'Union Station',
				location: 'Washington, D.C.',
				image: 'union-station.jpg',
				text: "Union Station is a truly iconic destination in the United States - an absolutely gorgeous rail terminal built by renowned architect Daniel H. Burnham.  As the gateway to the nation's capital and the primary means of entry and exit, it has unbelievable exposure.  It is the number one most visited tourist destination in Washington D.C. and the third most visited tourist destination in the world.  Over 40M visitors pass through each year, and 75% of all Capitol Hill employees come in and out of Union Station daily.  As the busiest stop on the Metro and the second busiest train station in the United States (behind Penn Station), there is no better mechanism to reach Washington, D.C."
			},
			{	
				title: 'Faneuil Hall Marketplace',
				location: 'Boston',
				image: 'faneuil-hall.jpg',
				text: "Faneuil Hall Marketplace is one of the most premier urban marketplaces in the United States, and welcomes over 20 million annual visitors. It has become synonymous with the city of Boston itself, and is located within steps of all major Boston attractions. Forbes Magazine ranked it #4 on a list of the 'Most Visited Sites in America', and Travel & Leisure ranked it #7 on the list of the 'World's Most-Visited Tourist Attractions.' The four signs at the main entrances to Quincy Market are highly coveted opportunities to achieve branding and exposure on a 'wicked' scale."

			},
			{	
				title: 'The Beverly Connection',
				location: 'Los Angeles',
				image: 'bevcon.jpg',
				text: "The Beverly Connection Retail Center, located right where Beverly Hills meets West Hollywood, is a very popular shopping destination in Los Angeles.  It boasts retailers such as Old Navy, City Target, Marshall’s, Jamba Juice, Nordstrom Rack, T.J. Maxx, and CVS. Nestled on La Cienega Drive, between West 3rd Street and Beverly Blvd, the Beverly Connection boasts outstanding outdoor advertising opportunities on its numerous faces.  This area of LA in general is unbelievably bustling and these signs are seen by an immense number of commuters and shoppers."
			},
			{	
				title: 'The Harborplace',
				location: 'Baltimore',
				image: 'harborplace.jpg',
				text: "The Harborplace, located in Baltimore's Inner Harbor, is the city's premier shipping and dining destination, with restaurants and stores such as The Cheesecake Factory, M&S Grill, H&M, Ripley's Believe it or Not, Johnny Rockets, and the only Urban Outfitters in the state of Maryland.  The  Harborplace and the Gallery, at the center of downtown and in the heart of Inner Harbor, draw 14 million visitors annually as Baltimore's #1 attraction.  It is located just blocks away from Baltimore Raven's M&T Stadium and Oriole Park at Camden Yards.  Over the past ten years, more than $9 Billion has been invested in the Baltimore area across universities, transportation assets, and state and federal facilities."

			},
			{	
				title: 'The Rivercenter',
				location: 'San Antonio',
				image: 'rivercenter.jpg',
				text: "The Alamo and the Riverwalk are the two most visited attractions in the great state of Texas, and the Rivercenter sits on top of both, in the heart of downtown San Antonio.  San Antonio is a major hub for the financial services, government, healthcare, and tourism industries, and boasts the largest U.S. military presence of any city in the United States.  Directly adjacent to the famous Henry. B Gonzalez convention center, the Rivercenter abuts two 1,000+ room hotels which welcome over 750,000 conference attendees each year alone.  With its out of home media opportunities, the Rivercenter is the absolute best way to achieve exposure in San Antonio."

			},
			{	
				title: 'The Shops at the Bravern',
				location: 'Seattle',
				image: 'bravern.jpg',
				text: "Located in the Bellevue area of Seattle, which is commonly referred to as the 'Beverly Hills' of the Pacific Northwest, the Shops at the Bravern is a luxury retail center with a focused mix of luxury retail, office, and residential space.  Two large office towers on the property house a captive audience of over 40,000 highly skilled Microsoft employees, and over 450 luxury residences sit atop the property.  The Meydenbauer Convention Center, also located at the Bravern, sees over 250,000 annual visitors."
			}

		];	

		$scope.services = [
			{
				title: 'Out-Of-Home Executions',
				img: 'home',
				text: 'whatever'
			},
			{
				title: 'Property Take Overs',
				img: 'property',
				text: 'whatever'
			},
			{
				title: 'Experiential Events',
				img: 'experiential',
				text: 'whatever'
			},
			{
				title: 'Pop Up Stores',
				img: 'store',
				text: 'whatever'
			},
			{
				title: 'In Window Executions',
				img: 'window',
				text: 'whatever'
			},
			{
				title: 'Interactive Displays',
				img: 'interactive',
				text: 'whatever'
			},
			{
				title: 'Naming Rights Campaigns',
				img: 'naming',
				text: 'whatever'
			},
			{
				title: 'Large Scale Events',
				img: 'events',
				text: 'whatever'
			}
		];

		$scope.openIconicVenues = function() {
				$("html, body").animate({ scrollTop: $('.iconic-venues').position().top + 'px' });
		};

		$scope.currentOpenService = 0;
		$scope.isCurrentOpenService = function(index) {
			return $scope.currentOpenService == index;
		};
		$scope.openService = function(index) {
			$scope.currentOpenService = index;
		};
		

    /*
     * Replace all SVG images with inline SVG
     */
	console.log($('img.svg'));
        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });

		
	});
