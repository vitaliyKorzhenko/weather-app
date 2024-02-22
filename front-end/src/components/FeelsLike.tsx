import React, { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function FeelsLike() {
    const forecast = useContext(ForecastContext);

    function feelsLikeText(temp: number) {
        if (Math.floor(temp) === forecast!.current.temperature) {
            return 'Similar to the actual temperature';
        } else {
        }
    }
    return (
        <div>
            <div>{forecast!.current.temperature}</div>
            <div>{feelsLikeText(forecast!.current.feels_like)}</div>
        </div>
    );
}

export default FeelsLike;
