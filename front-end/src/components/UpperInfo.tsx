import { useContext } from 'react';
import { findDay, findMonth } from '../utils/dateUtils';
import ForecastContext from '../../Context/ForecastContext';
import { weatherCodeInfo } from '../utils/descriptions';
import UnitContext from '../../Context/UnitContext';

function UpperInfo() {
    const forecast = useContext(ForecastContext);
    const unit = useContext(UnitContext);
    //console.log(forecast!.current);
    const day = findDay(new Date(forecast!.current.time).getDay());
    const month = findMonth(new Date(forecast!.current.time).getMonth());
    const date = new Date(forecast!.current.time).getDate();

    return (
        <div className="flex grow w-[390px] flex-col justify-center items-center text-[#e9f0fe] mt-[30px] gap-[12px] px-[130px]">
            <div className="w-[129px] text-Label-Dark-Primary text-center font-sans-display text-[34px] leading-[41px] tracking-[.374px] mt-[-10px]">
                {forecast!.current.city}
            </div>
            <div className="text-xs text-[#a8aac1] font-sans-text mt-[-9px]">{`${day} , ${month} ${date}`}</div>
            <div className=" text-white text-center font-sans-display text-[96px] font-extralight leading-[70px] tracking-[.374px]">
                {unit?.convert(forecast!.current.temperature)}°
            </div>
            <div className="flex flex-col">
                <div className="text-[#EBEBF599] text-center font-sans-display text-[20px] not-italic font-semibold leading-6 tracking-[.38px]">
                    {
                        weatherCodeInfo(
                            forecast!.current.time,
                            forecast!.current.weather_code,
                            forecast!.current.sunrise,
                            forecast!.current.sunset
                        ).description
                    }
                </div>
                <div className="flex flex-row text-Label-Dark-Primary font-sans-display text-[20px] font-semibold leading-6 tracking-[.38px] justify-around">
                    <div>H:{unit?.convert(forecast!.current.temperature)}°</div>
                    <div>L:{unit?.convert(forecast!.current.temperature)}°</div>
                </div>
            </div>
            <div className="h-full w-[390px] bg-[url('./image/house-43.png')] mt-[32px]"></div>
        </div>
    );
}

export default UpperInfo;
