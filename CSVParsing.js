var dataCoutDeLaVie, dataTransport, dataCadreDeVie, dataSorties, dataCulture;

d3.csv('CSV/coutDeLaVie.csv', function(data) {
    data.forEach(function(d) {
        d.quartier = +d.quartier;
        d.loyers = +d.loyers;
        d.indexLoyers = +d.indexLoyers;
        d.prixPanier = +d.prixPanier;
        d.indexPrixPanier = +d.indexPrixPanier;
        d.index = +d.index;
    });
    dataCoutDeLaVie = data;
    print(dataCoutDeLaVie);
});

d3.csv('CSV/transport.csv', function(data) {
    data.forEach(function(d) {
        d.quartier = +d.quartier;
        d.nbStationsVelib = +d.nbStationsVelib;
        d.indexStationsVelib = + d.indexStationsVelib;
        d.tempsMetro = +d.tempsMetro;
        d.indexTempsMetro = +d.indexTempsMetro;
        d.index = +d.index;
    });
    dataTransport = data;
    print(dataTransport);
});

d3.csv('CSV/cadreDeVie.csv', function(data) {
    data.forEach(function(d) {
        d.quartier = +d.quartier;
        d.propEspacesVerts = +d.propEspacesVerts;
        d.indexEspacesVerts = +d.indexEspacesVerts;
        d.tauxViolencePhysiqueCrapuleuse = +d.tauxViolencePhysiqueCrapuleuse;
        d.tauxVolSimple = +d.tauxVolSimple;
        d.somme = +d.somme;
        d.indexCriminalité =+ d.indexCriminalité;
        d.index = +d.index;
    });
    dataCadreDeVie = data;
    print(dataCadreDeVie);
});

d3.csv('CSV/sorties.csv', function(data) {
    data.forEach(function(d) {
        d.quartier = +d.quartier;
        d.prixPinte = +d.prixPrinte;
        d.indexPinte = +d.indexPinte;
        d.indexSoireesArr = +d.indexSoireesArr;
        d.index = +d.index;
    });
    dataSorties = data;
    print(dataSorties);

});

d3.csv('CSV/culture.csv', function(data) {
    data.forEach(function(d) {
        d.quartier = +d.quartier;
        d.nbCinemas = +d.nbCinemas;
        d.indexCinemas = +d.indexCinemas;
        d.nbMusees = +d.nbMusees;
        d.indexMusees = +d.indexMusees;
        d.index = +d.index;
    });
    dataCulture = data;
    print(dataCulture);
    var calculateIndex = document.createElement('script');
    calculateIndex.src = 'calculateIndex.js';
    document.getElementsByTagName('head')[0].appendChild(calculateIndex);
});

function print(data) {
    //console.log(data);
}

/*
d3.csv('CSV/commerces.csv', function(data) {
    data.forEach(function(d) {
        d.quartier = +d.quartier;
        d.nbCommerces = +d.nbCommerces;
        d.index = d.index;
    });
    dataCommerces = data;
    print(dataCommerces);

});
*/
