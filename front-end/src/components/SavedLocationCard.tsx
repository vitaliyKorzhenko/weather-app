import { useContext } from 'react';
import { Location } from '../types/Location';
import SavedLocationsContext from '../../Context/SavedLocationsContext';
import RouterContext from '../../Context/RouterContext';
import { weatherCodeInfo } from '../utils/descriptions';
import UnitContext from '../../Context/UnitContext';
import clsx from 'clsx';

function SavedLocationCard({
    item,
    isMoving,
}: {
    item: Location;
    isMoving: boolean;
}) {
    const savedLocations = useContext(SavedLocationsContext);
    const router = useContext(RouterContext);
    const unit = useContext(UnitContext);

    console.log(isMoving);

    const obj = {
        "bg-[url('./image/rectangle-1.svg')] bg-no-repeat flex flex-row w-[342px] h-[184px] shrink-0 bg-bottom gap-2":
            true,
        'pointer-events-none': isMoving,
    };

    const getWeatherInfoAndIcon = weatherCodeInfo(
        item.time,
        item.weather_code,
        item.sunrise,
        item.sunset
    );

    return (
        <div>
            <button
                className="bg-[#e9f0fe] flex justify-center items-center border rounded-full font-sans-text text-[13px] leading-[18px] tracking-[-0.078px] absolute right-0 w-[30px] h-[30px] ml-auto"
                onClick={(event) => {
                    event.stopPropagation();
                    savedLocations?.deleteLocationHandler(item.id);
                }}
            >
                <span className="text-[#4d448e] text-lg font-extrabold font-sans-display">
                    x
                </span>
            </button>
            <div
                className={clsx(obj)}
                onClick={(event) => {
                    if ((event.target as HTMLElement).nodeName === 'button') {
                        return;
                    }

                    router?.setRoute('/', {
                        latitude: item.latitude.toString(),
                        longitude: item.longitude.toString(),
                    });
                }}
            >
                <div className="flex flex-col items-start justify-end mb-[25px] ml-[20px]">
                    <div className="text-[#FFF] font-sans-display text-[64px] leading-[41px] tracking-[.374px] mb-[37px]">
                        {unit?.convert(item.temperature)}°
                    </div>
                    <div className="w-[132px] h-[41px] ">
                        <div className="flex flex-row text-hight-low-saved-location font-sans-text text-[13px] leading-[18px] tracking-[-0.078px]">
                            H:{unit?.convert(item.temp_high)}° L:
                            {unit?.convert(item.temp_low)}°
                        </div>
                        <div className="text-[#FFF] font-sans-text text-[17px] leading-[22px] tracking-[-0.408px]">{`${item.city}, ${item.country}`}</div>
                    </div>
                </div>
                {/* <button
                className="text-red-500 font-sans-text text-[13px] leading-[18px] tracking-[-0.078px]"
                onClick={(event) => {
                    event.stopPropagation();
                    savedLocations?.deleteLocationHandler(item.id);
                }}
            >
                x
            </button> */}

                <div className="flex flex-col mr-[20px] mt-[20px] items-end h-[35px]">
                    <div className="flex items-center justify-center overflow-hidden min-h-[120px] w-[120px] translate-x-5 -translate-y-8">
                        <div
                            className="min-w-[160px] min-h-[160px] bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `url(${getWeatherInfoAndIcon.image})`,
                            }}
                        >
                            {/* <img
                        src={getWeatherInfoAndIcon.image}
                        className="object-center scale-95"
                    /> */}
                        </div>
                    </div>

                    <div className="w-[100px] flex flex-col items-end">
                        <div className="text-[#FFF] font-sans-text text-[13px] leading-[18px] tracking-[-0.078px]">
                            {getWeatherInfoAndIcon.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavedLocationCard;
