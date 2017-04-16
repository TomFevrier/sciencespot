var coutDeLaVie = document.querySelector('#coutDeLaVie');
var initCoutDeLaVie = new Powerange(coutDeLaVie, {start:1, min:0, max:5, step:1, hideRange:true, klass:'coutDeLaVie'});
var transport = document.querySelector('#transport');
var initTransport = new Powerange(transport, {start:1, min:0, max:5, step:1, hideRange:true, klass:'transport'});
var cadreDeVie = document.querySelector('#cadreDeVie');
var initCadreDeVie = new Powerange(cadreDeVie, {start:1, min:0, max:5, step:1, hideRange:true, klass:'cadreDeVie'});
var sorties = document.querySelector('#sorties');
var initSorties = new Powerange(sorties, {start:1, min:0, max:5, step:1, hideRange:true, klass:'sorties'});
var culture = document.querySelector('#culture');
var initCulture = new Powerange(culture, {start:1, min:0, max:5, step:1, hideRange:true, klass:'culture'});

var viewMap = document.getElementById('viewMap');
viewMap.addEventListener('click', function(event) {
    if (!firstValidated) firstValidated = true;
    var weights = [parseInt(coutDeLaVie.value), parseInt(transport.value), parseInt(cadreDeVie.value), parseInt(sorties.value), parseInt(culture.value)];
    for (var i = 0; i < dataCulture.length; i++) {
        tab[i] = ((parseFloat(dataCoutDeLaVie[i].index)*weights[0] + parseFloat(dataTransport[i].index)*weights[1] + parseFloat(dataCadreDeVie[i].index)*weights[2] + parseFloat(dataSorties[i].index)*weights[3] + parseFloat(dataCulture[i].index)*weights[4])/(weights[0] + weights[1] + weights[2] + weights[3] + weights[4])).toFixed(3);
    }
    initMap();
});
