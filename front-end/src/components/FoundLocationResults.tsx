import { useContext } from 'react';
import SavedLocationsContext from '../../Context/SavedLocationsContext';
import { LocationItem } from '../types/LocationItem';
import SearchContext from '../../Context/SearchContext';
import RouterContext from '../../Context/RouterContext';

function FoundLocationResults({ item }: { item: LocationItem }) {
    const context = useContext(SavedLocationsContext);
    const searchContext = useContext(SearchContext);
    const router = useContext(RouterContext);

    return (
        <div
            className="text-white flex gap-2"
            onClick={() => {
                router?.setRoute('/', {
                    latitude: item.latitude.toString(),
                    longitude: item.longitude.toString(),
                    city: item.city,
                    country: item.country,
                });
            }}
        >
            {/* <button
                onClick={() => {
                    context?.addLocationHandler(item);
                    searchContext?.setInputText('');
                }}
            >
                +
            </button> */}
            <div>{item.city}, </div>
            <div>{item.country}</div>
        </div>
    );
}

export default FoundLocationResults;
