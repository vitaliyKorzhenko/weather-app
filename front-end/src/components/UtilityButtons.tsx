import React from 'react';
import SavedLocationsPage from './SavedLocationsPage';

function UtilityButtons() {
    return (
        <div>
            <button>Current Location</button>
            <button>Add saved location</button>
            <button>
                <SavedLocationsPage />
            </button>
        </div>
    );
}

export default UtilityButtons;
