var map;
var distances = [];
var durations = new Array(80);
var indexes = [10, 16, 18, 25, 35, 36, 38, 39, 44, 47, 1, 76, 65, 68, 12, 21, 23, 27, 33, 46, 51, 54, 56, 3, 74, 60, 62, 64, 7, 11, 15, 29, 34, 37, 40, 55, 58, 80, 63, 66, 67, 8, 9, 13, 14, 17, 20, 22, 41, 45, 48, 49, 57, 59, 78, 79, 53, 69, 72, 73, 6, 19, 24, 26, 28, 30, 31, 32, 42, 43, 50, 52, 2, 4, 5, 75, 77, 61, 70, 71];

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.856583, lng: 2.337341},
        zoom: 12
    });

    map.data.loadGeoJson('quartiersParis.geojson');

    var quartiersParisCallback = document.createElement('script');
    quartiersParisCallback.src = 'quartiersParisCallback.js';
    document.getElementsByTagName('head')[0].appendChild(quartiersParisCallback);

}

window.quartiersParisCallback = function(results) {
    for (var i = 0; i < results.features.length; i++) {
        var coordinates = results.features[i].geometry.coordinates;
        var coordsPoly = [];
        var bounds = new google.maps.LatLngBounds();
        for (var j = 0; j < coordinates[0].length; j++) {
            var coords = coordinates[0][j];
            var latLng = new google.maps.LatLng(coords[1], coords[0]);
            bounds.extend(latLng);

            coordsPoly.push(latLng);
        }

        var center = bounds.getCenter();
        var marker = new google.maps.Marker({
            position: center,
            map: map
        });
        var file = "https://maps.googleapis.com/maps/api/distancematrix/json?&origins=" + center.lat() + "," + center.lng() + "&destinations=48.854038,2.328351&mode=transit&key=AIzaSyCmgYSAN4qyGqbN_g4MKE4f35H8clC9Oc4";
        console.log(results.features[i].properties.l_qu, file);


    }
}
