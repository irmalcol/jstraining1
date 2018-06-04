weatherApp.renderCurrentWeatherInformation = function (weatherData) {
    console.log('Made it into render-ui-from-data.js!');
    console.log(weatherData);

    var daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    var monthsOfYear = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    var cityElement = document.querySelector('.city');
    var mainTemperatureElement = document.querySelector('.main-temperature .value');
    var mainTemperatureIconElement = document.querySelector('.main-icon.wi');
    var currentTimeElement = document.querySelector('.current-time');
    var now = new Date();
    var currentConditionElement = document.querySelector('.current-condition');
    var windSpeedElement = document.querySelector('.wind .value');
    var humidityElement = innerHTML = document.querySelector('.humidity .value');

    cityElement.innerHTML = weatherData.city + ', ' + weatherData.country;
    mainTemperatureElement.innerHTML = weatherData.temperature;
    mainTemperatureIconElement.classList.add('wi-owm-' + weatherData.icon);
    currentTimeElement.innerHTML = daysOfWeek[now.getDay()] + ', ' + monthsOfYear[now.getMonth()] + ' ' + now.getDate();
    currentConditionElement.innerHTML = weatherData.condition;
    windSpeedElement.innerHTML = weatherData.wind;
    humidityElement.innerHTML = weatherData.humidity;

    weatherApp.adjustAppBackgroundColor(weatherData.temperature);
}