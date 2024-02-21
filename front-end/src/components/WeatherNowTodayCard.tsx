import { findDay, amPmTime } from '../utils/dateUtils';
import { DailyHourly } from '../types/Forecast';

type WeatherNowTodayCardProps = {
    'hourly-daily': 'hourly' | 'daily';
    item: DailyHourly;
};

function WeatherNowTodayCard(props: WeatherNowTodayCardProps) {
    const time = new Date(props.item.time);
    function isHighlighted() {
        return props['hourly-daily'] === 'hourly'
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
                {props['hourly-daily'] === 'daily'
                    ? findDay(time.getDay()).slice(0, 3).toUpperCase()
                    : amPmTime(time.getHours())}
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
