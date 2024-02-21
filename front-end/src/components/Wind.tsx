import React, { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function Wind() {
    const forecast = useContext(ForecastContext);
    return (
        <div>
            <div>icon</div>
            <div>WIND</div>
            <div>{forecast!.current.wind_speed}</div>
            <div>{forecast!.current.wind_direction}</div>
        </div>
    );
}

export default Wind;
