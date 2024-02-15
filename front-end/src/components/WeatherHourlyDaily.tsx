import React, { useState } from 'react';
import WeatherHourlyWeeklyCard from './WeatherHourlyWeeklyCard';

type WeatherInfo = {
    time: Date;
    'prob-precip': string | undefined;
    temp: number | string;
    'weather-code': number;
};

type WeatherHourlyDailyProps = {
    weatherInfoList: WeatherInfo[];
};

function WeatherHourlyDaily(props: WeatherHourlyDailyProps) {
    const [hourlyDaily, setHourlyDaily] = useState<'hourly' | 'weekly'>(
        'hourly'
    );

    const setHourly = () => {
        setHourlyDaily('hourly');
    };

    const setWeekly = () => {
        setHourlyDaily('weekly');
    };

    return (
        <div>
            <div>
                <button onClick={setHourly}>Hourly Forecast</button>
                <button onClick={setWeekly}>Weekly Forecast</button>
            </div>

            <div>
                {props.weatherInfoList.map((item, _index) => {
                    return (
                        <WeatherHourlyWeeklyCard
                            time={item.time}
                            prob-precip={item['prob-precip']}
                            temp={item.temp}
                            weather-code={item['weather-code']}
                            hourly-weekly={hourlyDaily}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default WeatherHourlyDaily;
