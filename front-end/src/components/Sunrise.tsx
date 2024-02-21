import React, { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function Sunrise() {
    const forecast = useContext(ForecastContext);
    return (
        <div>
            <div>icon</div>
            <div>SUNRISE</div>
            {/* <div>{forecast!.current.time}</div> //have to finish this line */}
            <div>sunrise line</div>
            {/* <div>{ `Sunset `}</div> // finish this line as well */}
        </div>
    );
}

export default Sunrise;
