import React, { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';

function UvIndex() {
    const forecast = useContext(ForecastContext);

    function uvIndexMeaning(index: number) {
        if (index <= 2) {
            return 'LOW';
        }
        if (index <= 5) {
            return 'MODERATE';
        }
        if (index <= 7) {
            return 'HIGH';
        }
        if (index <= 10) {
            return 'VERY HIGH';
        }

        return 'EXTREME';
    }

    const uvIndexCodes = [
        './image/weather-icons/uv-index.svg',
        './image/weather-icons/uv-index-1.svg',
        './image/weather-icons/uv-index-2.svg',
        './image/weather-icons/uv-index-3.svg',
        './image/weather-icons/uv-index-4.svg',
        './image/weather-icons/uv-index-5.svg',
        './image/weather-icons/uv-index-6.svg',
        './image/weather-icons/uv-index-7.svg',
        './image/weather-icons/uv-index-8.svg',
        './image/weather-icons/uv-index-9.svg',
        './image/weather-icons/uv-index-10.svg',
        './image/weather-icons/uv-index-11.svg',
    ];

    return (
        <div>
            <div className="flex items-center justify-around">
                <div className="text-white font-sans-display text-[25px]">
                    {forecast!.current.uv_index}
                </div>
                <div className="text-white font-sans-display text-[20px]">
                    {uvIndexMeaning(forecast!.current.uv_index)}
                </div>
            </div>

            <div
                className="w-[65px] h-[65px] m-auto"
                style={{
                    backgroundImage: `url(${
                        uvIndexCodes[forecast!.current.uv_index]
                    })`,
                }}
            ></div>
        </div>
    );
}

export default UvIndex;
