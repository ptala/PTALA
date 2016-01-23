angular.module('ptala')
.controller('ContactController', function ContactController($scope, $rootScope) {

  function initialize() {
    var mapCanvas = document.getElementById('map');
    var myLatlng = new google.maps.LatLng(40.763724,-73.970887);
    var mapOptions = {
      center: myLatlng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel:  false,
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        optimized: false,
        animation: google.maps.Animation.DROP
    });
    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
     content:"PTALA <br /> 635 Madison Avenue"
    });
    infowindow.open(map,marker);

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  };

  angular.element(document).ready(function () {
    google.maps.event.addDomListener(window, 'load', initialize);
    initialize();
  });

});
