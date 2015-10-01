function initMap() {
  var map = new google.maps.Map(document.getElementById('part7'), {
    zoom: 11,
    center: {lat: 40.609978, lng: -73.953953}
  });

  var image = 'images/mapMark.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 40.609978, lng: -73.953953},
    map: map,
    icon: image
  });
}


/*function initialize() {
        var mapCanvas = document.getElementById('part7');
        var mapOptions = {
          center: new google.maps.LatLng(40.609978, -73.953953),
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var image = 'images/mapMark.png';
		  var beachMarker = new google.maps.Marker({
			position: {lat: 40.609978, lng: -73.953953},
			map: map,
			icon: image
		  });

      }
      google.maps.event.addDomListener(window, 'load', initialize);

// To add the marker to the map, call setMap();
marker.setMap(map);*/

