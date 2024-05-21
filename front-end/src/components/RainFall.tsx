import { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';

function RainFall() {
    const forecast = useContext(ForecastContext);
    return (
        <div className="flex justify-around flex-col items-start gap-y-3 mt-[5px]">
            <div className="flex flex-col">
                <div className="text-white font-sans-display text-[25px] leading-[1.1]">
                    {forecast!.current.rain} mm
                </div>
                <div className="text-white font-sans-display text-[20px] leading-[1.1]">
                    in last hour
                </div>
            </div>

            <div className="text-white font-sans-display text-[13px]">
                {forecast!.hourly[0].precipitation_probability}% expected in
                next 24h.
            </div>
        </div>
    );
}

export default RainFall;
