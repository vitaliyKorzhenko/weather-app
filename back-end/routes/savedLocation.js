var axios = require('axios');
var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');
const { SavedLocation } = require('../db');

const validateCity = () => body('city').notEmpty().isString();
const validateCountry = () => body('country').notEmpty().isString();
const validateLat = () => body('latitude').notEmpty().isNumeric();
const validateLong = () => body('longitude').notEmpty().isNumeric();

router.get('/', async function (req, res) {
    if (!req.user) {
        return res.status(401).end();
    }

    //go to SavedLocation DB and fetch all the locations of the certain user
    const userSavedLocations = await SavedLocation.find({
        userId: req.user._id,
    }); //returns an array of saved locations objects// [{}, {}]

    const savedLocationsWithForecast = await Promise.all(
        userSavedLocations.map(async (item) => {
            const { data: weatherDetails } = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${item.latitude}&longitude=${item.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=auto`
            );
            function currentInfo(obj) {
                const currentObj = {
                    temperature: obj['temperature_2m'],
                    temp_low: weatherDetails.daily['temperature_2m_min'][0],
                    temp_high: weatherDetails.daily['temperature_2m_max'][0],
                    weather_code: obj.weather_code,
                    city: item.city,
                    country: item.country,
                    latitude: item.latitude,
                    longitude: item.longitude,
                    id: item._id,
                };
                return currentObj;
            }
            return currentInfo(weatherDetails.current);
        })
    );

    res.json(savedLocationsWithForecast);
});

router.post(
    '/',
    validateCity(),
    validateCountry(),
    validateLat(),
    validateLong(),
    async function (req, res) {
        //state one: no token no user
        if (!req.user) {
            return res.status(401).end();
        }

        //this comes from frontend in request body
        const { city, country, latitude, longitude } = req.body;

        //check if this loaction already exists
        const exists = await SavedLocation.exists({ city, country });

        //if exists or doesnt exist
        if (exists) {
            return res.status(400).end('Location already exists');
        }

        const savedLocation = await SavedLocation.create({
            userId: req.user._id,
            city,
            country,
            latitude,
            longitude,
        });

        res.status(201).end('Location added');
    }
);

router.delete('/:id', async function (req, res) {
    console.log('hello');
    if (!req.user) {
        return res.status(401).end();
    }

    //const { city, country } = req.body;
    const locationId = req.params.id;

    const deleteLocation = await SavedLocation.findByIdAndDelete(locationId);

    if (deleteLocation.deletedCount === 0) {
        return res.status(404).end(`Location doesn't exist`);
    }

    return res.end('Location has been successfully deleted');
});

module.exports = router;
