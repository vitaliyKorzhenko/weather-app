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
        <div className="flex w-[60px] py-[16px] px-[8px] flex-col justify-center items-center gap-4 rounded-[30px] border border-white-opacity-20 bg-purple-opacity-20 box-shadow-custom-box-shadow-hourly-daily">
            <div className="">
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
