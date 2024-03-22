import { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';

function RainFall() {
    const forecast = useContext(ForecastContext);
    return (
        <div>
            <div>{`${forecast!.current.rain} mm in the last hour`}</div>
            <div>{forecast!.hourly[0].precipitation_probability}</div>
        </div>
    );
}

export default RainFall;
