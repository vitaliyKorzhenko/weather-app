import WeatherHourlyDaily from './WeatherHourlyDaily';
import AirQuality from './AirQuality';
import WeatherInfoCardBorderAndTitle from './WeatherInfoCardBorderAndTitle';
import UvIndex from './UvIndex';
import Sunrise from './Sunrise';
import Wind from './Wind';
import Rainfall from './RainFall';
import FeelsLike from './FeelsLike';
import Humidity from './Humidity';
import Visibility from './Visibility';
import Pressure from './Pressure';
import { useContext } from 'react';
import { FooterContext } from '../App';
import clsx from 'clsx';

function ForecastInDetails() {
    const footer = useContext(FooterContext);

    return (
        <div>
            <WeatherHourlyDaily />
            <div
                className={clsx(
                    !footer!.state && 'opacity-0',
                    'grid grid-cols-2 justify-items-center gap-y-1'
                )}
            >
                <WeatherInfoCardBorderAndTitle
                    title="AIR QUALITY"
                    icon="./image/weather-icons/air.svg"
                >
                    <AirQuality />
                </WeatherInfoCardBorderAndTitle>
                <WeatherInfoCardBorderAndTitle
                    title="UV INDEX"
                    icon="./image/weather-icons/uv-index.svg"
                >
                    <UvIndex />
                </WeatherInfoCardBorderAndTitle>
                <WeatherInfoCardBorderAndTitle
                    title="SUNRISE   "
                    icon="./image/weather-icons/sunrise.svg"
                >
                    <Sunrise />
                </WeatherInfoCardBorderAndTitle>
                <WeatherInfoCardBorderAndTitle
                    title="WIND"
                    icon="./image/weather-icons/wind.svg"
                >
                    <Wind />
                </WeatherInfoCardBorderAndTitle>
                <WeatherInfoCardBorderAndTitle
                    title="RAINFALL"
                    icon="./image/weather-icons/raindrops.svg"
                >
                    <Rainfall />
                </WeatherInfoCardBorderAndTitle>
                <WeatherInfoCardBorderAndTitle
                    title="FEELS LIKE"
                    icon="./image/weather-icons/thermometer.svg"
                >
                    <FeelsLike />
                </WeatherInfoCardBorderAndTitle>
                <WeatherInfoCardBorderAndTitle
                    title="HUMIDITY"
                    icon="./image/weather-icons/humidity.svg"
                >
                    <Humidity />
                </WeatherInfoCardBorderAndTitle>
                <WeatherInfoCardBorderAndTitle
                    title="VISIBILITY"
                    icon="./image/weather-icons/visibility.svg"
                >
                    <Visibility />
                </WeatherInfoCardBorderAndTitle>
                <WeatherInfoCardBorderAndTitle
                    title="PRESSURE"
                    icon="./image/weather-icons/pressure.svg"
                >
                    <Pressure />
                </WeatherInfoCardBorderAndTitle>
            </div>
        </div>
    );
}

export default ForecastInDetails;
