var nyc = {lat: 40.7134, lng: -74.0055};
var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 5,
     center: nyc
   });
 function initMap() {
   var JiminyPeak = {lat: 42.5556, lng: -73.2901};
   var marker = new google.maps.Marker({
     position: nyc,
     map: map,
     title: 'New York City'
   });
   var marker2 = new google.maps.Marker({
     position: JiminyPeak,
     map: map,
     title: 'Jiminy Peak'
   });
 }
initMap()



document.getElementById('onPress').onclick = addMarker
function addMarker() {
	var name = document.getElementById('resortName').value
	var lat = document.getElementById('resortLatitude').value
	var lng = document.getElementById('resortLongitude').value
	var marker = new google.maps.Marker({
		position: {
			lat: parseFloat(lat),
			lng: parseFloat(lng),
		},
		map: map,
		title: name
	})
	document.getElementById('resortName').value = ""
	document.getElementById('resortLatitude').value = ""
	document.getElementById('resortLongitude').value = ""
}
