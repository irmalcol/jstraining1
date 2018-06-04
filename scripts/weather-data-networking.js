weatherApp.getWeatherData = function (coordinatesData, currentWeatherCallback) {
    var url = 'https://api.openweathermap.org/data/2.5/weather';
    url += '?units=metric';
    url += '&appid=57ee612210d467d286192d1faa2bec0d';
    
    if (typeof coordinatesData === 'string') {
        url += '&q=' + coordinatesData;
    } else {
        url += '&lat=' + coordinatesData.lat + '&lon=' + coordinatesData.long;
    }

    var getCurrentWeatherInfo = function () {
        var networkRequest = new XMLHttpRequest(); // web API

        networkRequest.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) { // can look up readyState parameters
                console.log(this.responseText);
                currentWeatherCallback(this.responseText);
            } else if (this.readyState === 4) {
                throw new Error('Error fetching weather info :( ');
            }
        }

        networkRequest.open('GET', url);
        networkRequest.send();  
    }

    getCurrentWeatherInfo();
}