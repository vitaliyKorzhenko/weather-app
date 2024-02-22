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

            <WeatherInfoCardBorderAndTitle title="AIR QUALITY" icon="">
                <AirQuality />
            </WeatherInfoCardBorderAndTitle>
            <WeatherInfoCardBorderAndTitle title="UUV INDEX" icon="">
                <UvIndex />
            </WeatherInfoCardBorderAndTitle>
            <WeatherInfoCardBorderAndTitle title="SUNRISE   " icon="">
                <Sunrise />
            </WeatherInfoCardBorderAndTitle>
            <WeatherInfoCardBorderAndTitle title="WIND" icon="">
                <Wind />
            </WeatherInfoCardBorderAndTitle>
            <WeatherInfoCardBorderAndTitle title="RAINFALL" icon="">
                <Rainfall />
            </WeatherInfoCardBorderAndTitle>
            <WeatherInfoCardBorderAndTitle title="FEELS LIKE" icon="">
                <FeelsLike />
            </WeatherInfoCardBorderAndTitle>
            <WeatherInfoCardBorderAndTitle title="HUMIDITY" icon="">
                <Humidity />
            </WeatherInfoCardBorderAndTitle>
            <WeatherInfoCardBorderAndTitle title="VISIBILITY" icon="">
                <Visibility />
            </WeatherInfoCardBorderAndTitle>
            <WeatherInfoCardBorderAndTitle title="PRESSURE" icon="">
                <Pressure />
            </WeatherInfoCardBorderAndTitle>

            {/* <AirQuality />
            <WeatherDetailsCard /> */}
        </div>
    );
}

export default ForecastInDetails;
