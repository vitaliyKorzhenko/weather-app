import { useContext } from 'react';
import { LocationItem } from '../types/LocationItem';
import RouterContext from '../../Context/RouterContext';

function FoundLocationResults({ item }: { item: LocationItem }) {
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
