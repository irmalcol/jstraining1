var weatherApp = {};

document.addEventListener('DOMContentLoaded', function() {
    var onGeoDataReceived = function (coordinatesData) {
        // console.log('onGeoDataReceived ', coordinatesData);
        weatherApp.getWeatherData(coordinatesData, onCurrentWeatherDataReceived);
        weatherApp.getForecastData(coordinatesData, onForcastWeatherDataReceived);
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
    
    var onForcastWeatherDataReceived = function (forecastData) {
        var sanitizedForecastData = weatherApp.sanitizeForcastWeatherData(JSON.parse(forecastData));
        if (sanitizedForecastData === null) {
            // Show error UI
        } else {
            weatherApp.renderForecastWeatherInformation(sanitizedForecastData);
        }
    }

    document.querySelector('form .button').addEventListener('click', function(event) {
        var searchValue = document.querySelector('.searchbar').value;
        weatherApp.getWeatherData(searchValue, onCurrentWeatherDataReceived);
        weatherApp.getForecastData(searchValue, onForcastWeatherDataReceived);
        event.preventDefault();
    });

    weatherApp.geoDetection(onGeoDataReceived);
});