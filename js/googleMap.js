/*
Project:     Delatek Chess club;
User:        Petar Apostolov;
Part:        Javascript software;
Description: This software call Google for access to the Google Maps.
*/

function initMap() {
	
	//Holder for the map.
	var map = new google.maps.Map(document.getElementById('part7'), {
	//Map zoom.
	zoom: 11,
	//Place coordinates.
	center: {lat: 40.609978, lng: -73.953953}
	});
	
	//Position marker.
	var image = 'images/mapMark.png';
	var beachMarker = new google.maps.Marker({
		position: {lat: 40.609978, lng: -73.953953},
		map: map,
		icon: image
	});
};