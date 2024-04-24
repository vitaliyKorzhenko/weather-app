import { useContext } from 'react';
import { Location } from '../types/Location';
import SavedLocationsContext from '../../Context/SavedLocationsContext';
import RouterContext from '../../Context/RouterContext';
import { weatherCodeInfo } from '../utils/descriptions';

function SavedLocationCard({ item }: { item: Location }) {
    const context = useContext(SavedLocationsContext);
    const router = useContext(RouterContext);

    const getWeatherInfoAndIcon = weatherCodeInfo(
        item.time,
        item.weather_code,
        item.sunrise,
        item.sunset
    );

    return (
        <div
            className="bg-[url('./image/rectangle-1.svg')] bg-no-repeat flex flex-row w-[342px] h-[184px] shrink-0 bg-bottom"
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
            <div className="flex flex-col items-start justify-end mb-[20px] ml-[20px]">
                <div className="text-[#FFF] font-sans-display text-[64px] leading-[41px] tracking-[.374px] mb-[24px]">
                    {item.temperature}°
                </div>
                <div className="flex flex-row">
                    H:{item.temp_high}° L:{item.temp_low}°
                </div>
                <div>{`${item.city}, ${item.country}`}</div>
            </div>

            <div className="flex flex-col mr-[20px] mt-[20px]">
                <div className="w-[160px] h-[160px] ">
                    <img
                        src={getWeatherInfoAndIcon.image}
                        className="object-center scale-95"
                    />
                </div>

                <div>{getWeatherInfoAndIcon.description}</div>
                <button onClick={() => context?.deleteLocationHandler(item.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default SavedLocationCard;
