import React, { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';

function Visibility() {
    const forecast = useContext(ForecastContext);

    const visibiltyInKm = Math.floor(forecast!.current.visibility / 1000);
    //const timeNow = new Date();
    return (
        <div>
            <div className="font-sans-display text-white text-3xl">
                {visibiltyInKm} km
            </div>
        </div>
    );
}

export default Visibility;
