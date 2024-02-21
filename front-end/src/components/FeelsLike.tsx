import React, { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function FeelsLike() {
    const forecast = useContext(ForecastContext);
    return (
        <div>
            <div>icon</div>
            <div>FEELS LIKE</div>
            <div>{forecast!.current.temperature}</div>
        </div>
    );
}

export default FeelsLike;
