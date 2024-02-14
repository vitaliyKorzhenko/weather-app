import React from 'react';
import { findDay, time } from '../utils/dateUtils';

type WeatherNowTodayCardProps = {
    'hourly-weekly': 'hourly' | 'weekly';
    time: Date;
    'weather-code': number;
    'prob-precip': string | undefined;
    temp: number | string;
};

function WeatherNowTodayCard(props: WeatherNowTodayCardProps) {
    function isHighlighted() {
        return props['hourly-weekly'] === 'hourly'
            ? props.time.getHours() === new Date().getHours()
            : props.time.getDay() === new Date().getDay();
    }

    return (
        <div>
            <div>
                {props['hourly-weekly'] === 'weekly'
                    ? findDay(props.time.getDay()).slice(0, 3).toUpperCase()
                    : time(props.time.getHours())}
            </div>
            <div>{props['weather-code']}</div>
            {props['prob-precip'] && <div>{props['prob-precip']}</div>}
            <div>{props.temp}</div>
        </div>
    );
}

export default WeatherNowTodayCard;
