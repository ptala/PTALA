angular.module('ptala')
.controller('ClientsController', function ClientsController($scope, $rootScope,$sce) {

  $scope.filters = { };

	$scope.clients = [
	{
		img: "cambria",
		name:"Cambria",
		videoid:"126493347",
                category: "Experiential Activations",
                sequence: 1
	},
	{
		img: "nordstrom",
		name:"Nordstrom",
		videoid:"141869324",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "biogen",
		name:"Biogen",
		videoid:"124529350",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "cvs",
		name:"CVS Health",
		videoid:"127095096",
                category: "Experiential Activations",
                sequence: 1
	},
	{
		img: "qualcomm",
		name:"Qualcomm",
		videoid:"138404677",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "prudentialfinancial",
		name:"Prudential Financial",
		videoid:"139225422",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "smartcars",
		name:"Smart Cars",
		videoid:"140954435",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "dcl",
		name:"D.C. Lottery",
		videoid:"86116915",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "tropicana",
		name:"Tropicana",
		videoid:"59112441",
                category: "Experiential Activations",
                sequence: 1
	},
	{
		img: "philips",
		name:"Philips",
		videoid:"58926610",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "ravens.jpeg",
		name:"Baltimore Ravens",
		videoid:"59689251",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "todayshow",
		name:"The Today Show",
		videoid:"61678699",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "kelloggs",
		name:"Kelloggs",
		videoid:"61377575",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "redcross",
		name:"American Red Cross",
		videoid:"61467299",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "ncaa",
		name:"NCAA March Madness Event",
		videoid:"62256402",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "onedirection",
		name:"One Direction Pop-Up Store",
		videoid:"64068286",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "reuters",
		name:"Thomas Reuters",
		videoid:"70293547",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "redbull",
		name:"Redbull",
		videoid:"95929278",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "nintendo",
		name:"Nintendo Wii U Pop-Up",
		videoid:"72462204",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "lv",
		name:"Louis Vuiton",
		videoid:"73313897",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},

	{
		img: "puma",
		name:"PUMA",
		videoid:"88586782",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},

	{
		img: "amazon",
		name:"Amazon",
		videoid:"79524654",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},

	{
		img: "NFL",
		name:"NFL Kickoff",
		videoid:"74156380",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},

	{
		img: "oceanspray",
		name:"Ocean Spray Cranberry Event",
		videoid:"76912907",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},

	{
		img: "popsugar",
		name:"Pop Sugar",
		videoid:"96035818",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},

	{
		img: "celebrity",
		name:"Celebrity Cruises",
		videoid:"85039127",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},

	{
		img: "qatar",
		name:"Qatar",
		videoid:"87403972",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},

	{
		img: "nest",
		name:"Nest",
		videoid:"88535108",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},

	{
		img: "nespresso",
		name:"Nespresso",
		videoid:"88539916",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	},
	{
		img: "tazo",
		name:"Tazo Iced Tea Event",
		videoid:"100357105",
                category: "OOH / Billboard Campaigns",
                sequence: 1
	}
	]

	$scope.openClient = 0;
	$scope.changeOpenClientTo = function(index) {
		$('.hide').removeClass('hide');
		$scope.openClient = index;
		$("html, body").animate({ scrollTop: 0 + 'px' });
	
		
	};
	
	$scope.getVimeoSource = function() {
		return	$sce.trustAsResourceUrl("http://player.vimeo.com/video/" + $scope.clients[$scope.openClient].videoid  + "?title=0&amp;byline=0&amp;portrait=0");
	};

	$scope.openClients = function() {
		$("html, body").animate({ scrollTop: $('.logos').position().top + 'px' });
	};
});
