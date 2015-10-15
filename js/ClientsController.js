angular.module('ptala')
.controller('ClientsController', function ClientsController($scope, $rootScope,$sce) {


	$scope.clients = [
	{
		img: "qualcomm",
		name:"Qualcomm",
		videoid:"138404677"
	},
	{
		img: "prudentialfinancial",
		name:"Prudential Financial",
		videoid:"139225422"
	},
	{
		img: "smartcars",
		name:"Smart Cars",
		videoid:"140954435"
	},
	{
		img: "dcl",
		name:"D.C. Lottery",
		videoid:"86116915"
	},
	{
		img: "tropicana",
		name:"Tropicana",
		videoid:"59112441"
	},
	{
		img: "philips",
		name:"Philips",
		videoid:"58926610"
	},
	{
		img: "ravens.jpeg",
		name:"Baltimore Ravens",
		videoid:"59689251"
	},
	{
		img: "todayshow",
		name:"The Today Show",
		videoid:"61678699"
	},
	{
		img: "kelloggs",
		name:"Kelloggs",
		videoid:"61377575"
	},
	{
		img: "redcross",
		name:"American Red Cross",
		videoid:"61467299"
	},
	{
		img: "ncaa",
		name:"NCAA March Madness Event",
		videoid:"62256402"
	},
	{
		img: "onedirection",
		name:"One Direction Pop-Up Store",
		videoid:"64068286"
	},
	{
		img: "reuters",
		name:"Thomas Reuters",
		videoid:"70293547"
	},
	{
		img: "redbull",
		name:"Redbull",
		videoid:"95929278"
	},
	{
		img: "nintendo",
		name:"Nintendo Wii U Pop-Up",
		videoid:"72462204"
	},
	{
		img: "lv",
		name:"Louis Vuiton",
		videoid:"73313897"
	},

	{
		img: "puma",
		name:"PUMA",
		videoid:"88586782"
	},

	{
		img: "amazon",
		name:"Amazon",
		videoid:"79524654"
	},

	{
		img: "NFL",
		name:"NFL Kickoff",
		videoid:"74156380"
	},

	{
		img: "oceanspray",
		name:"Ocean Spray Cranberry Event",
		videoid:"76912907"
	},

	{
		img: "popsugar",
		name:"Pop Sugar",
		videoid:"96035818"
	},

	{
		img: "celebrity",
		name:"Celebrity Cruises",
		videoid:"85039127"
	},

	{
		img: "qatar",
		name:"Qatar",
		videoid:"87403972"
	},

	{
		img: "nest",
		name:"Nest",
		videoid:"88535108"
	},

	{
		img: "nespresso",
		name:"Nespresso",
		videoid:"88539916"
	},
	{
		img: "tazo",
		name:"Tazo Iced Tea Event",
		videoid:"100357105"
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
