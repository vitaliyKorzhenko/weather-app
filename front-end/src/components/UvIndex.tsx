import React, { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function UvIndex() {
    const forecast = useContext(ForecastContext);

    function uvIndexMeaning(index: number) {
        if (index <= 2) {
            return 'LOW';
        }
        if (index <= 5) {
            return 'MODERATE';
        }
        if (index <= 7) {
            return 'HIGH';
        }
        if (index <= 10) {
            return 'VERY HIGH';
        }

        return 'EXTREME';
    }
    return (
        <div>
            <div>{`${forecast!.current.uv_index} - ${uvIndexMeaning(
                forecast!.current.uv_index
            )}`}</div>
            <div>Uv index line</div>
        </div>
    );
}

export default UvIndex;
