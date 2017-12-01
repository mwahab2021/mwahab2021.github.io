navigator.geolocation.getCurrentPosition(function(data){
	var lat = data.coords.latitude
	var lng = data.coords.longitude

	$('#loading').hide()
	$('#map').show()
	initMap(lat, lng)
})

function initMap(currentLat, currentLng) {
	var currentCoords = {lat: currentLat, lng: currentLng}
	var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 15,
    	center: currentCoords
    });

	var marker = new google.maps.Marker({
		position: currentCoords,
		map: map,
		title: 'Approximate Current Location(Accurate up to a quarter mile)'
	});
}
