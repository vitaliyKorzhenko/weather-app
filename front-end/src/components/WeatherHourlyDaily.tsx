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

    return (
        <div>
            <div className="flex justify-around w-[390px] h-[49px] shrink-0 border-b-[1px] border-[#FFF] border-opacity-30">
                <button
                    onClick={setHourly}
                    className="text-Label-Color-Dark-Secondary font-sans-text text-[15px] not-italic font-semibold leading-5 tracking-[.5px] mt-[24px] mb-[5px]"
                >
                    Hourly Forecast
                    {hourlyDaily === 'hourly' && (
                        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-white to-transparent bg-blend-overlay my-[3px]"></div>
                    )}
                </button>
                <button
                    onClick={setWeekly}
                    className="text-Label-Color-Dark-Secondary font-sans-text text-[15px] not-italic font-semibold leading-5 tracking-[.5px] mt-[24px] mb-[5px]"
                >
                    Weekly Forecast
                    {hourlyDaily === 'daily' && (
                        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-white to-transparent bg-blend-overlay my-[3px]"></div>
                    )}
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
