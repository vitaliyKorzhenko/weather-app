var express = require('express');
var router = express.Router();
var axios = require('axios');
const { query, validationResult } = require('express-validator');
const log = require('../logger');

const validateCity = () =>
    query('name')
        .if((value, { req }) => !req.query.latitude)
        .notEmpty()
        .isString();
const validateLat = () =>
    query('latitude')
        .if((value, { req }) => !req.query.name)
        .notEmpty()
        .isNumeric();
const validateLong = () =>
    query('longitude')
        .if((value, { req }) => !req.query.name)
        .notEmpty()
        .isNumeric();

router.get(
    '/',
    validateCity(),
    validateLat(),
    validateLong(),

    async function (req, res) {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            log.warn('parameters are not valid');
            return res.send({ errors: result.array() });
        }

        let latitude, longitude, city, country;
        if (req.query.name) {
            log.info('geocoding request');
            const {
                data: { results: latLong },
            } = await axios.get(
                `https://geocoding-api.open-meteo.com/v1/search?name=${req.query.name}`
            );

            latitude = latLong[0].latitude;
            longitude = latLong[0].longitude;
            city = latLong[0].name;
            country = latLong[0].country;

            log.info('query params have been successfully received');
        } else {
            const apikey = process.env.GEO_API_CODE;
            //reverse geocoding;
            latitude = req.query.latitude;
            longitude = req.query.longitude;

            log.info('reverse geocoding request');
            const { data } = await axios.get(
                `https://geocode.xyz/${latitude},${longitude}?json=1&auth=${apikey}`
            );
            city = data.city;
            country = data.country;
            log.info(
                'Query params for reverse geocoding have been successfully received'
            );
        }

        const [{ data: weatherDetails }, { data: airQuality }] =
            await Promise.all([
                axios.get(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=auto`
                ),
                axios.get(
                    `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=european_aqi,us_aqi,uv_index&timezone=auto&forecast_days=7`
                ),
            ]);

        function dailyHourlyInfo(obj, number) {
            const obj24 = number
                ? obj.time.splice(
                      new Date(weatherDetails.current.time).getHours(),
                      number
                  )
                : obj.time;
            //array of times

            log.info('Daily and Hourly forecast received');

            return obj24.map((item, index) => {
                //every item is a date string
                return {
                    time: item,
                    temperature: Math.round(
                        (obj.temperature_2m ?? obj.apparent_temperature_min)[
                            index
                        ]
                    ),
                    precipitation_probability: Math.round(
                        (obj['precipitation_probability'] ??
                            obj['precipitation_probability_max'])[index]
                    ),
                    weather_code: obj['weather_code'][index],
                };
            });
        }

        function currentInfo(obj) {
            log.info('Current forecast received');
            const currentObj = {
                time: obj.time,
                temperature: Math.round(obj['temperature_2m']),
                temp_low: Math.round(
                    weatherDetails.daily['temperature_2m_min'][0]
                ),
                temp_high: Math.round(
                    weatherDetails.daily['temperature_2m_max'][0]
                ),
                humidity: obj['relative_humidity_2m'],
                feels_like: Math.round(obj.apparent_temperature),
                precipitation: obj.precipitation,
                rain: obj.rain,
                showers: obj.showers,
                snowfall: obj.snowfall,
                weather_code: obj.weather_code,
                pressure: Math.round(obj.surface_pressure),
                wind_speed: obj.wind_speed_10m,
                wind_direction: obj.wind_direction_10m,
                uv_index: airQuality.current.uv_index,
                us_aqi: airQuality.current.us_aqi,
                sunrise: weatherDetails.daily['sunrise'][0],
                sunset: weatherDetails.daily['sunset'][0],
                visibility:
                    weatherDetails.hourly.visibility[
                        new Date(obj.time).getHours()
                    ],
                city,
                country,
                latitude,
                longitude,
            };
            return currentObj;
        }
        log.info('Current Daily and hourly forecast returned');
        res.json({
            current: currentInfo(weatherDetails.current),
            daily: dailyHourlyInfo(weatherDetails.daily), //[{}, {},{}...]
            hourly: dailyHourlyInfo(weatherDetails.hourly, 25),
        });
    }
);

module.exports = router;
