import React, { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';
import PressureCanvas from './PressureCanvas';

function Pressure() {
    const forecast = useContext(ForecastContext);

    return (
        <div className="object-contain relative">
            <div className="w-full h-full">
                <PressureCanvas />
            </div>
            <div className="text-white z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {forecast!.current.pressure} hPa
            </div>
        </div>
    );
}

export default Pressure;
