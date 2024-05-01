import { useContext, useState } from 'react';
import WeatherNowTodayCard from './WeatherNowTodayCard';
import ForecastContext from '../../Context/ForecastContext';
import clsx from 'clsx';

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
            <div className="flex justify-around w-[390px] shrink-0 border-b-[1px] border-[#FFF] border-opacity-30">
                <button
                    onClick={setHourly}
                    className="text-Label-Color-Dark-Secondary font-sans-text text-[15px] not-italic font-semibold leading-5 tracking-[.5px] mb-[-4px]"
                >
                    Hourly Forecast
                    <div
                        className={clsx(
                            'w-full h-[3px] my-[2px]',
                            hourlyDaily === 'hourly' &&
                                'bg-gradient-to-r from-transparent via-white to-transparent bg-blend-overlay'
                        )}
                    ></div>
                </button>
                <button
                    onClick={setWeekly}
                    className="text-Label-Color-Dark-Secondary font-sans-text text-[15px] not-italic font-semibold leading-5 tracking-[.5px] mb-[-4px]"
                >
                    Weekly Forecast
                    <div
                        className={clsx(
                            'w-full h-[3px] my-[2px]',
                            hourlyDaily === 'daily' &&
                                'bg-gradient-to-r from-transparent via-white to-transparent bg-blend-overlay'
                        )}
                    ></div>
                </button>
            </div>

            <div className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide ml-[20px] pt-[19px] pb-[10px] h-[176px] gap-[12px]">
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
