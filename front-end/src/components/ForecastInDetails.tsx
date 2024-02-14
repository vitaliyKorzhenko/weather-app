import React from 'react';
import WeatherHourlyDaily from './WeatherHourlyDaily';
import AirQuality from './AirQuality';
import WeatherDetailsCard from './WeatherDetailsCard';

function ForecastInDetails() {
    return (
        <div>
            <WeatherHourlyDaily />
            <AirQuality />
            <WeatherDetailsCard />
        </div>
    );
}

export default ForecastInDetails;
