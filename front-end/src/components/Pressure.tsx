import React, { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';

function Pressure() {
    const forecast = useContext(ForecastContext);

    return (
        <div>
            <div>some circle diagram</div>
        </div>
    );
}

export default Pressure;
