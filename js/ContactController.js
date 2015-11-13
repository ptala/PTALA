angular.module('ptala')
.controller('ContactController', function ContactController($scope, $rootScope) {

  function initialize() {
    var mapCanvas = document.getElementById('map');
    var myLatlng = new google.maps.LatLng(40.763724,-73.970887);
    var mapOptions = {
      center: myLatlng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        label: 'PTALA',
        title: 'PTALA',
        optimized: false,
        animation: google.maps.Animation.DROP
    });
    marker.setMap(map);
    //marker.setValues({ map: map, label: "PTALA" });
  };

  angular.element(document).ready(function () {
    google.maps.event.addDomListener(window, 'load', initialize);
  });

});
