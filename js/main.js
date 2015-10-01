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
};

