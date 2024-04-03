import { useContext } from 'react';
import { Location } from '../types/Location';
import SavedLocationsContext from '../../Context/SavedLocationsContext';
import RouterContext from '../../Context/RouterContext';

function SavedLocationCard({ item }: { item: Location }) {
    const context = useContext(SavedLocationsContext);
    const router = useContext(RouterContext);

    return (
        <div
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
            <button onClick={() => context?.deleteLocationHandler(item.id)}>
                Delete
            </button>
            <div>{item.temperature}</div>
            <div>{item.weather_code}</div>
            <div>{item.temp_high}</div>
            <div>{item.temp_low}</div>
            <div>{`${item.city}, ${item.country}`}</div>
        </div>
    );
}

export default SavedLocationCard;
