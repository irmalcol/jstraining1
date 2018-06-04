weatherApp.geoDetection = function (callback) {

    // Fallback coordinates are downtown Edmonton
    var FALLBACK_COORDINATES = {
        lat: 53.541621,
        long: -113.48638
    }

    var options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0 // default is 0 according to MDN
    }

    var onGeoDetectSuccessful = function (position) {
        var coordinates = position.coords;
        // console.log('Your position is ', coordinates.latitude, coordinates.longitude);
        callback({lat: coordinates.latitude, long: coordinates.longitude}); // using an "anonymous object" here. Don't need var
    }

    var onGeoDetectFailed = function () {
        // console.log('The fallback position is', FALLBACK_COORDINATES);
        callback(FALLBACK_COORDINATES);
    }

    navigator.geolocation.getCurrentPosition(onGeoDetectSuccessful, onGeoDetectFailed, options);
}