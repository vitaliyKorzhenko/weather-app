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
        <div className="flex grow w-[390px] flex-col justify-center items-center text-[#e9f0fe] mt-[30px] gap-[12px] py-0 px-[130px]">
            <div className="w-[129px] h-[41px] text-Label-Dark-Primary text-center font-sans text-[34px] not-italic font-normal leading-[41px] tracking-[.374px]">
                {forecast!.current.city}
            </div>
            <div className="text-xs text-[#a8aac1]">{`${day} , ${month} ${date}`}</div>
            <div className=" w-[127px] h-[70px] text-white text-center font-sans font-feature-clig-off-liga-off text-[96px] not-italic font-extralight leading-[70px] tracking-[.374px]">
                {forecast!.current.temperature}°
            </div>
            <div className="flex flex-col w-[115px] h-[48px]">
                <div className="text-[#EBEBF599] text-center font-feature-clig-off-liga-off font-sans text-[20px] not-italic font-semibold leading-6 tracking-[.38px]">
                    weather description: {forecast!.current.weather_code}
                </div>
                <div className="flex flex-row text-Label-Dark-Primary font-feature-clig-off-liga-off font-sans text-[20px] not-italic font-semibold leading-6 tracking-[.38px]">
                    <div>H:{forecast!.current.temp_high}°</div>
                    <div>L:{forecast!.current.temp_low}°</div>
                </div>
            </div>
        </div>
    );
}

export default UpperInfo;
