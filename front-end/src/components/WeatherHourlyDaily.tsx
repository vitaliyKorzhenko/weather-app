import { useContext, useState } from 'react';
import WeatherNowTodayCard from './WeatherNowTodayCard';
import ForecastContext from '../../Context/ForecastContext';

function WeatherHourlyDaily() {
    const forecast = useContext(ForecastContext);
    const [hourlyDaily, setHourlyDaily] = useState<'hourly' | 'daily'>(
        'hourly'
    );

    const setHourly = () => {
        setHourlyDaily('hourly');
    };

    const setWeekly = () => {
        setHourlyDaily('daily');
    };
    //console.log(forecast!.daily[0].time);
    return (
        <div>
            <div className="flex justify-around w-[390px] h-[49px] shrink-0">
                <button
                    onClick={setHourly}
                    className="text-Label-Color-Dark-Secondary font-sans text-[15px] not-italic font-semibold leading-5 tracking-[.5px]"
                >
                    Hourly Forecast
                </button>
                <button
                    onClick={setWeekly}
                    className="text-Label-Color-Dark-Secondary font-sans text-[15px] not-italic font-semibold leading-5 tracking-[.5px]"
                >
                    Weekly Forecast
                </button>
            </div>

            <div className="flex overflow-x-scroll scrollbar-hide">
                {forecast![hourlyDaily].map((item, index) => {
                    return (
                        <WeatherNowTodayCard
                            key={index}
                            item={item}
                            hourlyDaily={hourlyDaily}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default WeatherHourlyDaily;
