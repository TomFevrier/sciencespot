var max, min;
var firstValidated = false;
var tab = [];

function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.858217, lng: 2.348886},
        zoom: 13,
        scrollwheel: false
    });

    var infoWindow = new google.maps.InfoWindow();

    if (firstValidated) {
        var interface = document.getElementById('interface');
        var legend = document.createElement('div');
        legend.id = 'legend';
        interface.appendChild(legend);

        var p = document.createElement('p');
        p.innerHTML = '+';
        legend.appendChild(p);

        for (var i = 0; i < 10; i++) {
            var div = document.createElement('div');
            div.style.width = '5vmin';
            div.style.height = '1vmin';
            div.style.opacity = 0.6;
            div.style.marginRight = 'auto';
            div.style.marginLeft = 'auto';
            switch (i) {
                case 9:
                    div.style.backgroundColor = "Black";
                    break;
                case 8:
                    div.style.backgroundColor = "DarkRed";
                    break;
                case 7:
                    div.style.backgroundColor = "FireBrick";
                    break;
                case 6:
                    div.style.backgroundColor = "OrangeRed";
                    break;
                case 5:
                    div.style.backgroundColor = "Tomato";
                    break;
                case 4:
                    div.style.backgroundColor = "Orange";
                    break;
                case 3:
                        div.style.backgroundColor = "Gold";
                    break;
                case 2:
                    div.style.backgroundColor = "YellowGreen";
                    break;
                case 1:
                    div.style.backgroundColor = "OliveDrab";
                    break;
                case 0:
                    div.style.backgroundColor = "Green";
            }
            legend.appendChild(div);
        }
        var p = document.createElement('p');
        p.innerHTML = '-';
        legend.appendChild(p);

        map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(document.getElementById('legend'));
    }

    var quartierIdeal = document.getElementById('quartierIdeal');
    var infosIdeal = document.getElementById('infosIdeal');

    document.getElementById('linkPlus').innerHTML = "<p><a data-scroll href='#credits'>> Plus d'infos <<a></p>";

    map.data.loadGeoJson('quartiersParis.geojson');

    map.data.setStyle(function(feature) {

        max = Math.max.apply(null, tab);
        min = Math.min.apply(null, tab);

        var quartier = feature.getProperty('c_qu');
        var opacity = (firstValidated) ? 0.3 : 0;
        var color = (firstValidated) ? getColor(tab[quartier-1]) : '#FB3D00';

        if ((tab[quartier-1] == max) && (firstValidated)) {
            quartierIdeal.innerHTML = feature.getProperty('l_qu');
            var infos = "<div id='index-sidebar' style='color:" + "Green" + "; margin-bottom: -2vh;'><p>" + tab[quartier - 1] + "</p></div>";
            infos += "<div id='details'><div class='domain'><p><img src='media/coutDeLaVie.png'/><b>Coût de la vie :</b>&nbsp&nbsp" + notation(dataCoutDeLaVie, quartier) + "</p></div>";
            infos += "<div class='domain'><p><img src='media/transport.png'/><b>Transport :</b>&nbsp&nbsp" + notation(dataTransport, quartier) + "</p></div>";
            infos += "<div class='domain'><p><img src='media/cadreDeVie.png'/><b>Cadre de vie :</b>&nbsp&nbsp" + notation(dataCadreDeVie, quartier) + "</p></div>";
            infos += "<div class='domain'><p><img src='media/sorties.png'/><b>Sorties :</b>&nbsp&nbsp" + notation(dataSorties, quartier) + "</p></div>";
            infos += "<div class='domain'><p><img src='media/culture.png'/><b>Offre culturelle :</b>&nbsp&nbsp" + notation(dataCulture, quartier) + "</p></div>";
            infosIdeal.innerHTML = infos;
            opacity = 0.6;
        }

        return /** @type {google.maps.Data.StyleOptions} */({
            fillColor: color,
            fillOpacity: opacity,
            strokeColor: "grey",
            strokeWeight: 2
        });
    });

    map.data.addListener('mouseover', function(event) {
        map.data.overrideStyle(event.feature, {
            fillOpacity: 0.8
        });
    });

    map.data.addListener('mouseout', function(event) {
        map.data.revertStyle();
    });

    map.data.addListener('click', function(event) {
        if (firstValidated) {
            var quartier = event.feature.getProperty('c_qu');
            var arrondissement = event.feature.getProperty('c_ar');
            var text = "<div id='infobox'><h2>" + event.feature.getProperty('l_qu') + " (750" + ((arrondissement < 10) ? "0" : "") + arrondissement + ")</h2>";
            text += "<div id='index'style='color:" + getColor(tab[quartier - 1]) + ";'><p>" + tab[quartier - 1] + "</p></div>";
            text += "<div class='domain'><p><img src='media/coutDeLaVie.png'/><b>Coût de la vie :</b>&nbsp&nbsp" + notation(dataCoutDeLaVie, quartier) + "</p></div>";
            text += "<div class='domain'><p><img src='media/transport.png'/><b>Transport :</b>&nbsp&nbsp" + notation(dataTransport, quartier) + "</p></div>";
            text += "<div class='domain'><p><img src='media/cadreDeVie.png'/><b>Cadre de vie :</b>&nbsp&nbsp" + notation(dataCadreDeVie, quartier) + "</p></div>";
            text += "<div class='domain'><p><img src='media/sorties.png'/><b>Sorties :</b>&nbsp&nbsp" + notation(dataSorties, quartier) + "</p></div>";
            text += "<div class='domain'><p><img src='media/culture.png'/><b>Offre culturelle :</b>&nbsp&nbsp" + notation(dataCulture, quartier) + "</p></div>";
            text += "</div>";

            infoWindow.setContent(text);
            infoWindow.setPosition({lat: event.latLng.lat(), lng: event.latLng.lng()});

            infoWindow.open(map);

        }
    });

}

function getColor(value) {

    var color;
    var range = (max - min)/10;

    if (value < min + range) {
        color = "Black";
    }
    else if (value < min + 2*range) {
        color = "DarkRed";
    }
    else if (value < min + 3*range) {
        color = "FireBrick";
    }
    else if (value < min + 4*range) {
        color = "OrangeRed";
    }
    else if (value < min +5*range) {
        color = "Tomato";
    }
    else if (value < min + 6*range) {
        color = "DarkOrange";
    }
    else if (value < min + 7*range) {
        color = "Gold";
    }
    else if (value < min + 8*range) {
        color = "YellowGreen";
    }
    else if (value < min + 9*range) {
        color = "OliveDrab";
    }
    else {
        color = "Green";
    }
    return color;
}

function notation(data, quartier) {
    var max = 0;
    var min = 1;
    for (var i = 0; i < data.length; i++) {
        if ((data[i].index > max) && (data[i].index != 1)) {
            max = data[i].index;
        }
        if ((data[i].index < min) && (data[i].index != 0)) {
            min = data[i].index;
        }
    }
    var rangeNotation = max - min;
    var index = data[quartier - 1].index;
    if (index < min + rangeNotation/6) {
        return "○ ○ ○ ○ ○";
    }
    else if (index < min + rangeNotation/3) {
        return "● ○ ○ ○ ○";
    }
    else if (index < min + rangeNotation/2) {
        return "● ● ○ ○ ○";
    }
    else if (index < min + 2*rangeNotation/3) {
        return "● ● ● ○ ○";
    }
    else if (index < min + 5*rangeNotation/6) {
        return "● ● ● ● ○";
    }
    else {
        return "● ● ● ● ●";
    }
}
