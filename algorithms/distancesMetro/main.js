var indexes = [10, 16, 18, 25, 35, 36, 38, 39, 44, 47, 1, 76, 65, 68, 12, 21, 23, 27, 33, 46, 51, 54, 56, 3, 74, 60, 62, 64, 7, 11, 15, 29, 34, 37, 40, 55, 58, 80, 63, 66, 67, 8, 9, 13, 14, 17, 20, 22, 41, 45, 48, 49, 57, 59, 78, 79, 53, 69, 72, 73, 6, 19, 24, 26, 28, 30, 31, 32, 42, 43, 50, 52, 2, 4, 5, 75, 77, 61, 70, 71];

console.log("centers", centers);
console.log("polygons", polygons);

for (var i = 0; i < centers.length; i++) {
    console.log(centers[i]);
    console.log(centers[i].latLng.lat(), centers[i].latLng.lng());
    //var file = "http://maps.googleapis.com/maps/api/distancematrix/json?&origins=" + 41.43206 + "," + -81.38992 + "&key=AIzaSyCmgYSAN4qyGqbN_g4MKE4f35H8clC9Oc4"
    //console.log(i, )
}
