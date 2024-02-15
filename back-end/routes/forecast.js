var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', async function (req, res) {
    const weatherDetails = await axios.get(
        'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,visibility&daily=weather_code,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=auto'
    );

    function dailyInfo(obj) {
        // obj = weatherDetails.daily
        obj.time.map((item, index) => {
            //weatherDetails.daily.time = []
            return {
                time: item,
                weather_code: obj.weather_code[index],
                feels_like: obj.apparent_temperature[index],
                sunrise: obj.sunrise[index],
                sunset: obj.sunset[index],
                uv_index: obj.uv_index_max[index],
                precipitation_probability:
                    obj.precipitation_probability_max[index],
            };
        });
    }

    function currentInfo(obj) {
        const currentObj = {
            time: obj.time,
            temperature: obj[temperature_2m],
            humidity: obj[relative_humidity_2m],
            feels_like: obj.apparent_temperature,
            precipitation: obj.precipitation,
            rain: obj.rain,
            showers: obj.showers,
            snowfall: obj.snowfall,
            weather_code: obj.weather_code,
            pressure: obj.surface_pressure,
            wind_speed: obj.wind_speed,
            wind_direction: obj.wind_direction,
        };
        return currentObj;
    }

    function hourlyInfo(obj) {
        const obj24 = obj.time.slice(0, 25); //weatherDetails.hourly.time = []
        obj24.map((item, index) => {
            return {
                time: item,
                temperature: obj.temperature_2m[index],
                humidity: obj[relative_humidity][index],
                precipitation_probability:
                    obj[precipitation_probability][index],
                weather_code: obj[weather_code][index],
                visibility: obj.visibility[index],
            };
        });
    }

    res.json({
        current: currentInfo(weatherDetails.current),
        daily: [dailyInfo(weatherDetails.current)],
        hourly: [hourlyInfo(weatherDetails.hourly)],
    });
});

module.exports = router;
