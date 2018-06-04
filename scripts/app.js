var weatherApp = {};

document.addEventListener('DOMContentLoaded', function() {
    var onGeoDataReceived = function (coordinatesData) {
        console.log('onGeoDataReceived ', coordinatesData);
        weatherApp.getWeatherData(coordinatesData, onCurrentWeatherDataReceived);
    }

    var onCurrentWeatherDataReceived = function (weatherData) {
        var sanitizedWeatherData = weatherApp.sanitizeCurrentWeatherData(JSON.parse(weatherData));
        // console.log(sanitizedWeatherData)
        if (sanitizedWeatherData === null) {
            // Show error UI
        } else {
            weatherApp.renderCurrentWeatherInformation(sanitizedWeatherData);
        }
    }

    document.querySelector('form .button').addEventListener('click', function(event) {
        var searchValue = document.querySelector('.searchbar').value;
        weatherApp.getWeatherData(searchValue, onCurrentWeatherDataReceived);
        event.preventDefault();
    });

    weatherApp.geoDetection(onGeoDataReceived);
});