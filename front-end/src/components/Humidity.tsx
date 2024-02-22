import { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function Humidity() {
    const forecast = useContext(ForecastContext);
    return (
        <div>
            <div>{`${forecast!.current.humidity}%`}</div>
        </div>
    );
}

export default Humidity;
