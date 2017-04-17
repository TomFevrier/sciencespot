var map;
var polygons = [];
var distances = []

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

        var dist = 60*57.2958*Math.acos(Math.sin(0.0174533*center.lat())*Math.sin(0.0174533*48.854246) + Math.cos(0.0174533*center.lat())*Math.cos(0.0174533*48.854246)*Math.cos(0.0174533*(2.328352 - center.lng())));

        console.log("distance par rapport à", results.features[i].properties.l_qu, dist*1.852);

        var poly = new google.maps.Polygon({
            path: coordsPoly,
        });
        polygons.push(poly);
        distances.push(dist*1.852);
    }
    console.log("polygons:", polygons);

}
