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
                            hourlyDaily={hourlyDaily}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default WeatherHourlyDaily;
