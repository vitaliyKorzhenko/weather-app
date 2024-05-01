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
                    'grid gap-2 grid-cols-2 justify-center'
                )}
            >
                <WeatherInfoCardBorderAndTitle title="AIR QUALITY" icon="">
                    <AirQuality />
                </WeatherInfoCardBorderAndTitle>
                <WeatherInfoCardBorderAndTitle
                    title="UV INDEX"
                    icon="./image/weather-icons/uv-index.svg"
                >
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
            </div>
        </div>
    );
}

export default ForecastInDetails;
