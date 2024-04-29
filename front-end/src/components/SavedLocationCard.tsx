import { useContext } from 'react';
import { Location } from '../types/Location';
import SavedLocationsContext from '../../Context/SavedLocationsContext';
import RouterContext from '../../Context/RouterContext';
import { weatherCodeInfo } from '../utils/descriptions';

function SavedLocationCard({ item }: { item: Location }) {
    const savedLocations = useContext(SavedLocationsContext);
    const router = useContext(RouterContext);

    const getWeatherInfoAndIcon = weatherCodeInfo(
        item.time,
        item.weather_code,
        item.sunrise,
        item.sunset
    );

    return (
        <div
            className="bg-[url('./image/rectangle-1.svg')] bg-no-repeat flex flex-row w-[342px] h-[184px] shrink-0 bg-bottom gap-2"
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
                    {item.temperature}°
                </div>
                <div className="w-[132px] h-[41px] ">
                    <div className="flex flex-row text-hight-low-saved-location font-sans-text text-[13px] leading-[18px] tracking-[-0.078px]">
                        H:{item.temp_high}° L:{item.temp_low}°
                    </div>
                    <div className="text-[#FFF] font-sans-text text-[17px] leading-[22px] tracking-[-0.408px]">{`${item.city}, ${item.country}`}</div>
                </div>
            </div>

            <div className="flex flex-col mr-[20px] mt-[20px]">
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

                <div className="text-[#FFF] font-sans-text text-[13px] leading-[18px] tracking-[-0.078px]">
                    {getWeatherInfoAndIcon.description}
                </div>
                <button
                    className="text-[#FFF] font-sans-text text-[13px] leading-[18px] tracking-[-0.078px]"
                    onClick={(event) => {
                        event.stopPropagation();
                        savedLocations?.deleteLocationHandler(item.id);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default SavedLocationCard;
