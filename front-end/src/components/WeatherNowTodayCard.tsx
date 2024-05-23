import { findDay, amPmTime, parseISOLocal } from '../utils/dateUtils';
import { DailyHourly } from '../types/Forecast';
import { clsx } from 'clsx';
import { weatherCodeInfo } from '../utils/descriptions';
import { useContext } from 'react';
import UnitContext from '../../Context/UnitContext';

type WeatherNowTodayCardProps = {
    hourlyDaily: 'hourly' | 'daily';
    item: DailyHourly;
};

function WeatherNowTodayCard(props: WeatherNowTodayCardProps) {
    const time = parseISOLocal(props.item.time); //props.item.time = "2024-03-14T00:00"

    const unit = useContext(UnitContext);

    const getWeatherInfoAndIcon = weatherCodeInfo(
        props.item.time,
        props.item.weather_code,
        props.item.sunrise,
        props.item.sunset
    );

    function isHighlighted() {
        return props['hourlyDaily'] === 'hourly'
            ? time.getHours() === new Date().getHours()
            : time.getDay() === new Date().getDay();
    }

    return (
        <div
            className={clsx(
                'flex w-[60px] h-[146px] flex-col justify-center items-center rounded-[30px] border border-white-opacity-20 shadow-custom-hourly-daily mb-[1px] shrink-0',
                isHighlighted() ? 'bg-[#48319D]' : 'bg-purple-opacity-20'
            )}
        >
            <div className="w-[43px] text-Label-Dark-Primary font-sans-text text-[15px] not-italic font-semibold leading-6 tracking-[-1px] text-center">
                {props['hourlyDaily'] === 'daily'
                    ? findDay(time.getDay()).slice(0, 3).toUpperCase()
                    : amPmTime(time)}
            </div>

            <div className="py-[16px] flex flex-col">
                <div
                    className="bg-contain bg-center w-[32px] h-[32px]"
                    style={{
                        backgroundImage: `url(${getWeatherInfoAndIcon.image})`,
                    }}
                ></div>
                {/* {props.item.precipitation_probability && (
                    <div className="text-precipitation-probability text-center text-[13px] font-semibold leading-tight tracking-[-0.078px] ">
                        {props.item.precipitation_probability}%
                    </div>
                )} */}
                <div
                    className={clsx(
                        'text-precipitation-probability text-center text-[13px] font-semibold leading-tight tracking-[-0.078px]',
                        props.item.precipitation_probability === 0
                            ? 'invisible'
                            : 'visible'
                    )}
                >
                    {props.item.precipitation_probability}%{' '}
                </div>
            </div>

            <div className="text-Label-Dark-Primary font-sans-text text-[20px] not-italic font-normal leading-5 tracking-[-0.5px]">
                {unit?.convert(props.item.temperature)}°
            </div>
        </div>
    );
}

export default WeatherNowTodayCard;
