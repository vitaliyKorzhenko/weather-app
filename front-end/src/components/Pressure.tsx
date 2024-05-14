import React, { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';
import PressureCanvas from './PressureCanvas';

function Pressure() {
    const forecast = useContext(ForecastContext);

    return (
        <div className="object-contain">
            <div className="w-full h-full">
                <PressureCanvas />
            </div>
        </div>
    );
}

export default Pressure;
