import React, { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function Visibility() {
    const forecast = useContext(ForecastContext);
    return (
        <div>
            <div>icon</div>
            <div>VISIBILITY</div>
            {/* <div>{ forecast!.current.visibility}</div> // finish this later */}
        </div>
    );
}

export default Visibility;
