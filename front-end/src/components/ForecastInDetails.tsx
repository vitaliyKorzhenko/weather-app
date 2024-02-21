import React, { useContext } from 'react';
import WeatherHourlyDaily from './WeatherHourlyDaily';
import AirQuality from './AirQuality';
import ForecastContext from '../ForecastContext';
import WeatherInfoCardBorderAndTitle from './WeatherInfoCardBorderAndTitle';
import UvIndex from './UvIndex';
import Sunrise from './Sunrise';
import Wind from './Wind';
import Rainfall from './RainFall';
import FeelsLike from './FeelsLike';
import Humidity from './Humidity';
import Visibility from './Visibility';
import Pressure from './Pressure';

function ForecastInDetails() {
    const forecast = useContext(ForecastContext);
    return (
        <div>
            <WeatherHourlyDaily />
            <WeatherInfoCardBorderAndTitle title="UV Index" icon="">
                <AirQuality />
                <UvIndex />
                <Sunrise />
                <Wind />
                <Rainfall />
                <FeelsLike />
                <Humidity />
                <Visibility />
                <Pressure />
            </WeatherInfoCardBorderAndTitle>
            {/* <AirQuality />
            <WeatherDetailsCard /> */}
        </div>
    );
}

export default ForecastInDetails;
