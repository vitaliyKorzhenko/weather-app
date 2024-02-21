import React, { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function RainFall() {
    const forecast = useContext(ForecastContext);
    return (
        <div>
            <div>icon</div>
            <div>RIANFALL</div>
            <div>{`${forecast!.current.rain} mm in the last hour`}</div>
            <div>rain probability </div>
        </div>
    );
}

export default RainFall;
