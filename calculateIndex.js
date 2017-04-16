var tab = [];

for (var i = 0; i < dataCulture.length; i++) {
    tab.push(((parseFloat(dataCoutDeLaVie[i].index) + parseFloat(dataTransport[i].index) + parseFloat(dataCadreDeVie[i].index) + parseFloat(dataSorties[i].index) + parseFloat(dataCulture[i].index))/5).toFixed(3));
}

initMap();
