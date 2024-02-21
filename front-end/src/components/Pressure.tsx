import React, { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function Pressure() {
    const forecast = useContext(ForecastContext);

    return (
        <div>
            <div>icon</div>
            <div>PRESSURE</div>
            <div>some circle diagram</div>
        </div>
    );
}

export default Pressure;
