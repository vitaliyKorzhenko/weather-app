import React, { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function UvIndex() {
    const forecast = useContext(ForecastContext);
    return (
        <div>
            <div>icon</div>
            <div>UV INDEX</div>
            <div>{forecast!.current.uv_index}</div>
            <div>Uv index line</div>
        </div>
    );
}

export default UvIndex;
