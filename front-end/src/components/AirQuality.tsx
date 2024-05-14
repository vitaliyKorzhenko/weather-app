import { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';

function AirQuality() {
    const forecast = useContext(ForecastContext);

    function airQualityMeaning(index: number) {
        if (index <= 50) {
            return 'Good';
        }
        if (index <= 100) {
            return 'Moderate';
        }
        if (index <= 150) {
            return 'Unhealthy for Sensitive Groups';
        }
        if (index <= 200) {
            return 'Unhealthy';
        }
        if (index <= 300) {
            return 'Very Unhealthy';
        }

        return 'Hazardous';
    }

    // Calculate the position of the dot based on the air quality index
    const dotPosition = (forecast!.current.us_aqi / 500) * 100;

    return (
        <div className="flex items-center justify-around flex-col gap-[33px]">
            <div className="text-white font-sans-display text-[25px]">{`${
                forecast!.current.us_aqi
            }-${airQualityMeaning(forecast!.current.us_aqi)}`}</div>
            <div className="relative w-full">
                <div className="w-full h-1 bg-gradient-to-r from-[#4c6aba] to-[#e74394] rounded-full"></div>
                <div
                    className="absolute top-0 left-0 mt-[-2px]"
                    style={{ marginLeft: `${dotPosition}%` }}
                >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
            </div>
        </div>
    );
}

export default AirQuality;
