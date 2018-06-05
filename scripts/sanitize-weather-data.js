weatherApp.sanitizeCurrentWeatherData = function (weatherData) {
    try {
        return {
            icon: weatherData.weather[0].id,
            temperature: Math.round(weatherData.main.temp),
            city: weatherData.name,
            country: weatherData.sys.country,
            condition: weatherData.weather[0].description,
            wind: Math.round(weatherData.wind.speed),
            humidity: (weatherData.main.humidity)
        }
    } catch(error) {
        console.warn(error);
        ;
    }
};

weatherApp.sanitizeForcastWeatherData = function (forecastData) {
    var sanitizedForecastData = [];
    var currentDay = new Date().getDay();
    var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var forecastDays = [currentDay, currentDay + 1, currentDay + 2, currentDay + 3, currentDay + 4 ]
        .map( dayNum => { 
            return dayNum > 6 ? dayNum - 7 : dayNum;
        })
        .map( dayNum => { 
            return dayNames[dayNum];
        });
    
    var createSingleDayForecast = function (forecastedDay, dayName) {
        return {
            day: dayName,
            high: Math.round(forecastedDay.temp.max),
            low: Math.round(forecastedDay.temp.min),
            icon: forecastedDay.weather[0].id
        }
    }

    // console.log('forecast days: ' + forecastDays);
    // console.log(forecastData);
    forecastData.list.forEach( (forecastedDay, idx) => {
        sanitizedForecastData.push(createSingleDayForecast(forecastedDay, forecastDays[idx]));
    });
    // console.log(sanitizedForecastData);

    // return sanitizedForecastData.slice(1);
    return sanitizedForecastData;
}