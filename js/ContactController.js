angular.module('ptala')
.controller('ContactController', function ContactController($scope, $rootScope) {
  function initialize() {
    var mapCanvas = document.getElementById('map');
    var myLatlng = new google.maps.LatLng(40.7638482,-73.9719923);
    var mapOptions = {
      //center: new google.maps.LatLng(44.5403, -78.5463),
      center: myLatlng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP

    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'PTALA'
    });
    marker.setMap(map);
  }
  angular.element(document).ready(function () {
    //$('.mapImage').css({left:(($(window).width() - $('.mapImage').width())/2) + 'px'});
    google.maps.event.addDomListener(window, 'load', initialize);
  });
});
