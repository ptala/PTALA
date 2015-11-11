angular.module('ptala')
.controller('ClientsController', function ClientsController($scope, $rootScope,$sce) {

  function indexOfId(array, id) {
    for (var i=0; i<array.length; i++) {
       console.log("id: " + id);
       if (array[i].id==id) return i;
    }
    return -1;
  };

  function sortOn( collection, name ) {
    collection.sort(
      function( a, b ) {
       if ( a[ name ] <= b[ name ] ) {
         return( -1 );
       }
       return( 1 );
      }
    );
  };

  $scope.groups = [];

  $scope.groupBy = function( attribute ) {
    $scope.groups = [];
    sortOn( $scope.clients, attribute );
    var groupValue = "_INVALID_GROUP_VALUE_";
    for ( var i = 0 ; i < $scope.clients.length ; i++ ) {
      var client = $scope.clients[ i ];
      if ( client[ attribute ] !== groupValue ) {
        var group = {
                      label: client[ attribute ],
                      clients: []
                    };
        groupValue = group.label;
        $scope.groups.push( group );
      }
      group.clients.push( client );
    }
  };

  $scope.clients = [
    {
      id: 1,
      img: "cambria",
      name:"Cambria",
      videoid:"126493347",
      category:"OOH",
      sequence:1
    },
    {
      id: 2,
      img: "nordstrom",
      name:"Nordstrom",
      videoid:"141869324",
      category:"OOH",
      sequence:1
    },
    {
      id: 3,
      img: "biogen",
      name:"Biogen",
      videoid:"124529350",
      category:"OOH",
      sequence:1
    },
    {
      id: 4,
      img: "cvs",
      name:"CVS Health",
      videoid:"127095096",
      category:"OOH",
      sequence:1
    },
    {
      id: 5,
      img: "qualcomm",
      name:"Qualcomm",
      videoid:"138404677",
      category:"OOH",
      sequence:1
    },
    {
      id: 6,
      img: "prudentialfinancial",
      name:"Prudential Financial",
      videoid:"139225422",
      category:"EXP",
      sequence:1
    },
    {
      id: 7,
      img: "smartcars",
      name:"Smart Cars",
      videoid:"140954435",
      category:"EXP",
      sequence:1
    },
    {
      id: 8,
      img: "dcl",
      name:"D.C. Lottery",
      videoid:"86116915",
      category:"OOH",
      sequence:1
    },
    {
      id: 9,
      img: "tropicana",
      name:"Tropicana",
      videoid:"59112441",
      category:"OOH",
      sequence:1
    },
    {
      id: 10,
      img: "philips",
      name:"Philips",
      videoid:"58926610",
      category:"EXP",
      sequence:1
    },
    {
      id: 11,
      img: "ravens.jpeg",
      name:"Baltimore Ravens",
      videoid:"59689251",
      category:"OOH",
      sequence:1
    },
    {
      id: 12,
      img: "todayshow",
      name:"The Today Show",
      videoid:"61678699",
      category:"EXP",
      sequence:1
    },
    {
      id: 13,
      img: "kelloggs",
      name:"Kelloggs",
      videoid:"61377575",
      category:"EXP",
      sequence:1
    },
    {
      id: 14,
      img: "redcross",
      name:"American Red Cross",
      videoid:"61467299",
      category:"EXP",
      sequence:1
    },
    {
      id: 15,
      img: "ncaa",
      name:"NCAA March Madness Event",
      videoid:"62256402",
      category:"EXP",
      sequence:1
    },
    {
      id: 16,
      img: "onedirection",
      name:"One Direction Pop-Up Store",
      videoid:"64068286",
      category:"EXP",
      sequence:1
    },
    {
      id: 17,
      img: "reuters",
      name:"Thomas Reuters",
      videoid:"70293547",
      category:"OOH",
      sequence:1
    },
    {
      id: 18,
      img: "redbull",
      name:"Redbull",
      videoid:"95929278",
      category:"OOH",
      sequence:1
    },
    {
      id: 19,
      img: "nintendo",
      name:"Nintendo Wii U Pop-Up",
      videoid:"72462204",
      category:"EXP",
      sequence:1
    },
    {
      id: 21,
      img: "puma",
      name:"PUMA",
      videoid:"88586782",
      category:"EXP",
      sequence:1
    },
    {
      id: 22,
      img: "amazon",
      name:"Amazon",
      videoid:"79524654",
      category:"OOH",
      sequence:1
    },
    {
      id: 23,
      img: "NFL",
      name:"NFL Kickoff",
      videoid:"74156380",
      category:"EXP",
      sequence:1
    },
    {
      id: 24,
      img: "oceanspray",
      name:"Ocean Spray Cranberry Event",
      videoid:"76912907",
      category:"EXP",
      sequence:1
    },
    {
      id: 25,
      img: "popsugar",
      name:"Pop Sugar",
      videoid:"96035818",
      category:"EXP",
      sequence:1
    },
    {
      id: 26,
      img: "celebrity",
      name:"Celebrity Cruises",
      videoid:"85039127",
      category:"EXP",
      sequence:1
    },
    {
      id: 27,
      img: "qatar",
      name:"Qatar",
      videoid:"87403972",
      category:"EXP",
      sequence:1
    },
    {
      id: 26,
      img: "celebrity",
      name:"Celebrity Cruises",
      videoid:"85039127",
      category:"OOH",
      sequence:1
    },
    {
      id: 27,
      img: "qatar",
      name:"Qatar",
      videoid:"87403972",
      category:"OOH",
      sequence:1
    },
    {
      id: 28,
      img: "nest",
      name:"Nest",
      videoid:"88535108",
      category:"OOH",
      sequence:1
    },
    {
      id: 29,
      img: "nespresso",
      name:"Nespresso",
      videoid:"88539916",
      category:"EXP",
      sequence:1
    },
    {
      id: 30,
      img: "tazo",
      name:"Tazo Iced Tea Event",
      videoid:"100357105",
      category:"EXP",
      sequence:1
    }
  ]
  
  $scope.openClient = 0;
  $scope.changeOpenClientTo = function(index) {
    $('.hide').removeClass('hide');

    console.log("incoming index: ");
    console.dir(index);
    console.dir($scope.groups);
    console.dir($scope.groups[0]);
    console.dir($scope.groups[1]);
    //console.dir($scope.groups[1].clients[index]);
    console.dir(index.category)
    console.dir(index.id)
    var temp = index.id;
    //console.dir($scope.groups.indexOf[index.category].clients.indexOf[index.id]);

    console.dir(index);
    //var whichClient = indexOfId(clients, index);
    //if whichClient != -1 {
      //$scope.openClient = index;
      console.dir($scope.clients);
      $scope.openClient = indexOfId($scope.clients, temp);
      console.log("$scope.openClient");
      console.dir($scope.openClient);
      $("html, body").animate({ scrollTop: 0 + 'px' });
    //}
  };
	
/*
  $scope.getVimeoSource = function() {
    return $sce.trustAsResourceUrl("http://player.vimeo.com/video/" + 
                                   $scope.clients[$scope.openClient].videoid  + 
                                   "?title=0&amp;byline=0&amp;portrait=0");
    };
*/

  $scope.getVimeoSource = function() {
    return $sce.trustAsResourceUrl("http://player.vimeo.com/video/" + 
                                   $scope.clients[$scope.openClient].videoid  + 
                                   "?title=0&amp;byline=0&amp;portrait=0");
    };

  $scope.openClients = function() {
    $("html, body").animate({ scrollTop: $('.logos').position().top + 'px' });
  };

});

