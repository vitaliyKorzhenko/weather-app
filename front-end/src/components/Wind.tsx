import { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';

function Wind() {
    const forecast = useContext(ForecastContext);
    return (
        <div>
            <div>{forecast!.current.wind_speed}</div>
            <div>{forecast!.current.wind_direction}</div>
        </div>
    );
}

export default Wind;
