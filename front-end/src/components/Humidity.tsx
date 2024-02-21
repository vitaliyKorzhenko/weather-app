import React, { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function Humidity() {
    const forecast = useContext(ForecastContext);
    return (
        <div>
            <div>icon</div>
            <div>Humidity</div>
            <div>{forecast!.current.humidity}</div>
            <div>dew point????</div>
        </div>
    );
}

export default Humidity;
