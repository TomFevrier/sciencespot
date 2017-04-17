var nbCommercesParQuartier = [];
for (var i = 0; i < 80; i++) {
    nbCommercesParQuartier.push(0);
}

var tab = arrayData;

var indexes = [10, 16, 18, 25, 35, 36, 38, 39, 44, 47, 1, 76, 65, 68, 12, 21, 23, 27, 33, 46, 51, 54, 56, 3, 74, 60, 62, 64, 7, 11, 15, 29, 34, 37, 40, 55, 58, 80, 63, 66, 67, 8, 9, 13, 14, 17, 20, 22, 41, 45, 48, 49, 57, 59, 78, 79, 53, 69, 72, 73, 6, 19, 24, 26, 28, 30, 31, 32, 42, 43, 50, 52, 2, 4, 5, 75, 77, 61, 70, 71];

console.log("tab", tab[5]);


for (var i = 0; i < tab.length; i++) {
    console.log("quartier", tab[i].QUARTIER);
    nbCommercesParQuartier[indexes[tab[i].QUARTIER] - 1]++;
}
console.log(nbCommercesParQuartier);
var s = "";
for (var i = 0; i < nbCommercesParQuartier.length; i++) {
    s += nbCommercesParQuartier[i]
    s += "\n"
}
console.log(s);
