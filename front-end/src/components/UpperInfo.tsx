import { useContext } from 'react';
import { findDay, findMonth } from '../utils/dateUtils';
import ForecastContext from '../../Context/ForecastContext';

function UpperInfo() {
    const forecast = useContext(ForecastContext);
    //console.log(forecast!.current);
    const day = findDay(new Date(forecast!.current.time).getDay());
    const month = findMonth(new Date(forecast!.current.time).getMonth());
    const date = new Date(forecast!.current.time).getDate();

    return (
        <div className="flex flex-col justify-center items-center text-[#e9f0fe] mt-[30px] gap-[5px]">
            <div className="font-bold text-xl ">{forecast!.current.city}</div>
            <div className="text-xs text-[#a8aac1]">{`${day} , ${month} ${date}`}</div>
            <div className="font-extrabold text-5xl">
                {forecast!.current.temperature}°
            </div>
            <div className="flex flex-col">
                <div className="text-[#a8aac1] mb-[-6px]">
                    weather description: {forecast!.current.weather_code}
                </div>
                <div className="flex flex-row w-full justify-center gap-[10px]">
                    <div>H:{forecast!.current.temp_high}°</div>
                    <div>L:{forecast!.current.temp_low}°</div>
                </div>
            </div>
        </div>
    );
}

export default UpperInfo;
