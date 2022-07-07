function GeoCoder() {

    this.getLatLng = function (address) {

        if (address === "Amsterdam") {
            return "52.3700° N, 4.8900° E";
        } else if (address === "London") {
            return "51.5171° N, 0.1062° W";
        } else if (address === "Paris") {
            return "48.8742° N, 2.3470° E";
        } else if (address === "Berlin") {
            return "52.5233° N, 13.4127° E";
        } else {
            return "";
        }
    };
}

function GeoProxy() {
    let geocoder = new GeoCoder();
    let geocache = {};

    return {
        getLatLng: function (address) {
            if (!geocache[address]) {
                geocache[address] = geocoder.getLatLng(address);
            }
            return geocache[address];
        },
        getCount: function () {
            let count = 0;
            for (let code in geocache) { count++; }
            return count;
        }
    };
}

export function GetLocation() {

    let geo = new GeoProxy();

    // geolocation requests


    let Amsterdam = document.getElementById('Amsterdam')
    let London = document.getElementById('London')
    let Paris = document.getElementById('Paris')
    let Berlin = document.getElementById('Berlin')
    let Result_textarea = document.getElementById('Result_textarea2')
    let Cache = document.getElementById('Cache')


    Amsterdam.addEventListener('click', function getRes() {
        Result_textarea.value += JSON.stringify(geo.getLatLng("Amsterdam")) + '\n'
    })
    London.addEventListener('click', function getRes() {
        Result_textarea.value += JSON.stringify(geo.getLatLng("London")) + '\n'
    })
    Paris.addEventListener('click', function getRes() {
        Result_textarea.value += JSON.stringify(geo.getLatLng("Paris")) + '\n'
    })
    Berlin.addEventListener('click', function getRes() {
        Result_textarea.value += JSON.stringify(geo.getLatLng("Berlin")) + '\n'
    })
    Cache.addEventListener('click', function getRes() {
        Result_textarea.value += JSON.stringify("Cache size: " + geo.getCount()) + '\n'
    })

}
