import { useContext } from 'react';
import SavedLocationsContext from '../../Context/SavedLocationsContext';
import { LocationItem } from '../types/LocationItem';
import SearchContext from '../../Context/SearchContext';

function FoundLocationResults({ item }: { item: LocationItem }) {
    const context = useContext(SavedLocationsContext);
    const searchContext = useContext(SearchContext);

    return (
        <div>
            <button
                onClick={() => {
                    context?.addLocationHandler(item);
                    searchContext?.setInputText('');
                }}
            >
                +
            </button>
            <div>{item.city}</div>
            <div>{item.country}</div>
        </div>
    );
}

export default FoundLocationResults;
