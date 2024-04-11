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

function ForecastInDetails() {
    return (
        <div>
            <WeatherHourlyDaily />
            <div className="hidden">
                <WeatherInfoCardBorderAndTitle title="AIR QUALITY" icon="">
                    <AirQuality />
                </WeatherInfoCardBorderAndTitle>
                <WeatherInfoCardBorderAndTitle title="UV INDEX" icon="">
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
