import { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';

function RainFall() {
    const forecast = useContext(ForecastContext);
    return (
        <div className="flexjustify-around flex-col items-start gap-y-3">
            <div className="flex flex-col">
                <div className="text-white font-sans-display text-[25px]">
                    {forecast!.current.rain} mm
                </div>
                <div className="text-white font-sans-display text-[20px]">
                    in last hour
                </div>
            </div>

            <div className="text-white font-sans-display text-[13px] bottom-0">
                {forecast!.hourly[0].precipitation_probability}% expected in
                next 24h.
            </div>
        </div>
    );
}

export default RainFall;
