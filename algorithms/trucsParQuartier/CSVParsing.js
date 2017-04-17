var arrayData;
d3.csv('stations-velib-disponibilites-en-temps-reel.csv', function(data) {
    data.forEach(function(d) {
        d.lat = +d.lat;
        d.lng = +d.lng;
    });
    arrayData = data;
    console.log("done");
    var distance = document.createElement('script');
    distance.src = 'distance.js';
    document.getElementsByTagName('head')[0].appendChild(distance);
});
