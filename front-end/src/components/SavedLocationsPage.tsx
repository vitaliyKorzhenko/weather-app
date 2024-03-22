import { useContext } from 'react';
import SavedLocationCard from './SavedLocationCard';
import SavedLocationsContext from '../../Context/SavedLocationsContext';

function SavedLocationsPage() {
    const context = useContext(SavedLocationsContext);

    return (
        <div>
            <div>Weather</div>
            <input type="text" placeholder="Search for a city"></input>
            <div>
                {context?.locations.map((item) => (
                    <SavedLocationCard item={item} />
                ))}
            </div>
        </div>
    );
}

export default SavedLocationsPage;
