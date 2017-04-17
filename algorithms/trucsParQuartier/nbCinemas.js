var nbCinemasParQuartier = [];
for (var i = 0; i < 80; i++) {
    nbCinemasParQuartier.push(0);
}

var tab = arrayData;

var indexes = [10, 16, 18, 25, 35, 36, 38, 39, 44, 47, 1, 76, 65, 68, 12, 21, 23, 27, 33, 46, 51, 54, 56, 3, 74, 60, 62, 64, 7, 11, 15, 29, 34, 37, 40, 55, 58, 80, 63, 66, 67, 8, 9, 13, 14, 17, 20, 22, 41, 45, 48, 49, 57, 59, 78, 79, 53, 69, 72, 73, 6, 19, 24, 26, 28, 30, 31, 32, 42, 43, 50, 52, 2, 4, 5, 75, 77, 61, 70, 71];

console.log("tab.length", tab.length);


for (var i = 0; i < tab.length; i++) {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(tab[i].lat, tab[i].lng),
        map: map
    });
    for (var j = 0; j < polygons.length; j++) {
        if (google.maps.geometry.poly.containsLocation(new google.maps.LatLng(tab[i].lat, tab[i].lng), polygons[j])) {
            console.log("i=", i);
            nbCinemasParQuartier[indexes[j]-1]++;
            //break;
        }
    }
    if (j != polygons.length-1) {
        //break;
    }
}
console.log(nbCinemasParQuartier);
var s = "";
for (var i = 0; i < nbCinemasParQuartier.length; i++) {
    s += nbCinemasParQuartier[i]
    s += "\n"
}
console.log(s);
