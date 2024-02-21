import React, { useContext, useState } from 'react';
import WeatherNowTodayCard from './WeatherNowTodayCard';
import ForecastContext from '../ForecastContext';

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

    return (
        <div>
            <div>
                <button onClick={setHourly}>Hourly Forecast</button>
                <button onClick={setWeekly}>Weekly Forecast</button>
            </div>

            <div>
                {forecast![hourlyDaily].map((item, index) => {
                    return (
                        <WeatherNowTodayCard
                            key={index}
                            item={item}
                            hourly-daily={hourlyDaily}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default WeatherHourlyDaily;
