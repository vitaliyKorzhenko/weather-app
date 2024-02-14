import React, { useState } from 'react';
import WeatherNowTodayCard from './WeatherNowTodayCard';

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

    return (
        <div>
            <div>
                <button>Hourly Forecast</button>
                <button>Weekly Forecast</button>
            </div>

            <div>
                {props.weatherInfoList.map((item, _index) => {
                    return (
                        <WeatherNowTodayCard
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
