import React from 'react';
import { findDay, time } from '../utils/dateUtils';
import axios from 'axios';

type WeatherHourlyWeeklyCardProps = {
    'hourly-weekly': 'hourly' | 'weekly';
    time: Date;
    'weather-code': number;
    'prob-precip': string | undefined;
    temp: number | string;
};

function WeatherHourlyWeeklyCard(props: WeatherHourlyWeeklyCardProps) {
    function isHighlighted() {
        return props['hourly-weekly'] === 'hourly'
            ? props.time.getHours() === new Date().getHours()
            : props.time.getDay() === new Date().getDay();
    }

    const weatherDetails = async () => {
        try {
            const response = await axios.get('/');
            return response.data;
        } catch (error) {
            console.error('Error fetching weather details:', error);
            return null;
        }
    };

    return (
        <div
            className={
                isHighlighted()
                    ? ' border-red-700 border-2'
                    : ' border-red-200 border-2'
            }
        >
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

export default WeatherHourlyWeeklyCard;
