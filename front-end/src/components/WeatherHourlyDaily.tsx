import { useContext, useState, useRef } from 'react';
import WeatherNowTodayCard from './WeatherNowTodayCard';
import ForecastContext from '../../Context/ForecastContext';
import clsx from 'clsx';
import useRefScroll from '../utils/useRefScroll';

function WeatherHourlyDaily() {
    const forecast = useContext(ForecastContext);
    const [hourlyDaily, setHourlyDaily] = useState<'hourly' | 'daily'>(
        'hourly'
    );
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const setHourly = () => {
        setHourlyDaily('hourly');
    };

    const setWeekly = () => {
        setHourlyDaily('daily');
    };

    useRefScroll(scrollRef);

    // useEffect(() => {
    //     const scrollContainer = scrollRef.current;

    //     if (scrollContainer === null) {
    //         return;
    //     }

    //     let isDown = false;
    //     let startX: number;
    //     let scrollLeft: number;

    //     const onMouseDown = (e: MouseEvent) => {
    //         e.stopPropagation();
    //         isDown = true;
    //         startX = e.pageX - scrollContainer.offsetLeft;
    //         scrollLeft = scrollContainer.scrollLeft;
    //         scrollContainer.style.cursor = 'grabbing';
    //     };

    //     const onMouseLeave = () => {
    //         isDown = false;
    //         scrollContainer.style.cursor = 'grab';
    //     };

    //     const onMouseUp = () => {
    //         isDown = false;
    //         scrollContainer.style.cursor = 'grab';
    //     };

    //     const onMouseMove = (e: MouseEvent) => {
    //         if (!isDown) return;
    //         e.stopPropagation();
    //         e.preventDefault();
    //         const x = e.pageX - scrollContainer.offsetLeft;
    //         const walk = (x - startX) * 1.5; // Adjust scrolling speed
    //         scrollContainer.scrollLeft = scrollLeft - walk;
    //     };

    //     scrollContainer.addEventListener('mousedown', onMouseDown);
    //     scrollContainer.addEventListener('mouseleave', onMouseLeave);
    //     scrollContainer.addEventListener('mouseup', onMouseUp);
    //     scrollContainer.addEventListener('mousemove', onMouseMove);

    //     return () => {
    //         scrollContainer.removeEventListener('mousedown', onMouseDown);
    //         scrollContainer.removeEventListener('mouseleave', onMouseLeave);
    //         scrollContainer.removeEventListener('mouseup', onMouseUp);
    //         scrollContainer.removeEventListener('mousemove', onMouseMove);
    //     };
    // }, []);

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

            <div
                ref={scrollRef}
                className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide ml-[20px] pt-[19px] pb-[10px] h-[176px] gap-[12px] cursor-grab"
            >
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
