import React, { useContext } from 'react';
import RouterContext from '../RouterContext';

function UtilityButtons() {
    const route = useContext(RouterContext);

    return (
        <div>
            <button>Current Location</button>
            <button>Add saved location</button>
            <button onClick={() => route!.setRoute('/saveLoc')}>
                Saved Locations
            </button>
        </div>
    );
}

export default UtilityButtons;
