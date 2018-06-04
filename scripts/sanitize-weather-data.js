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
        return null;
    }
};