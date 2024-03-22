import { findDay, amPmTime, parseISOLocal } from '../utils/dateUtils';
import { DailyHourly } from '../types/Forecast';

type WeatherNowTodayCardProps = {
    hourlyDaily: 'hourly' | 'daily';
    item: DailyHourly;
};

function WeatherNowTodayCard(props: WeatherNowTodayCardProps) {
    const time = parseISOLocal(props.item.time); //props.item.time = "2024-03-14T00:00"

    //console.log(time);

    function isHighlighted() {
        return props['hourlyDaily'] === 'hourly'
            ? time.getHours() === new Date().getHours()
            : time.getDay() === new Date().getDay();
    }

    return (
        <div
            className={
                isHighlighted()
                    ? ' border-red-700 border-2'
                    : ' border-red-200 border-2'
            }
        >
            <div>
                {props['hourlyDaily'] === 'daily'
                    ? findDay(time.getDay()).slice(0, 3).toUpperCase()
                    : amPmTime(time)}
            </div>

            <div>{props.item.weather_code}</div>
            {props.item.precipitation_probability && (
                <div>{props.item.precipitation_probability}</div>
            )}
            <div>{props.item.temperature}</div>
        </div>
    );
}

export default WeatherNowTodayCard;
