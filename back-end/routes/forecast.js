var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', async function (req, res) {
    const { data: weatherDetails } = await axios.get(
        'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=auto'
    );

    const { data: airQuality } = await axios.get(
        'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&current=european_aqi,us_aqi,uv_index&timezone=auto&forecast_days=7'
    );

    function dailyHourlyInfo(obj, number) {
        const obj24 = obj.time.slice(0, number);
        return obj24.map((item, index) => {
            // const uvIndex = weatherDetails.daily['uv_index_max'][index];
            // console.log('uvIndex:', uvIndex);
            return {
                time: item,
                temperature: (obj.temperature_2m ??
                    obj.apparent_temperature_min)[index],
                precipitation_probability: (obj['precipitation_probability'] ??
                    obj['precipitation_probability_max'])[index],
                weather_code: obj['weather_code'][index],
            };
        });
    }

    function currentInfo(obj) {
        const currentObj = {
            time: obj.time,
            temperature: obj['temperature_2m'],
            temp_low: weatherDetails.daily['temperature_2m_min'][0],
            temp_high: weatherDetails.daily['temperature_2m_max'][0],
            humidity: obj['relative_humidity_2m'],
            feels_like: obj.apparent_temperature,
            precipitation: obj.precipitation,
            rain: obj.rain,
            showers: obj.showers,
            snowfall: obj.snowfall,
            weather_code: obj.weather_code,
            pressure: obj.surface_pressure,
            wind_speed: obj.wind_speed_10m,
            wind_direction: obj.wind_direction_10m,
            uv_index: airQuality.current.uv_index,
            us_aqi: airQuality.current.us_aqi,
        };
        return currentObj;
    }

    res.json({
        current: currentInfo(weatherDetails.current),
        daily: dailyHourlyInfo(weatherDetails.daily),
        hourly: dailyHourlyInfo(weatherDetails.hourly, 25),
    });
});

module.exports = router;
