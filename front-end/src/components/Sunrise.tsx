import { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function Sunrise() {
    const forecast = useContext(ForecastContext);
    const sunrise = new Date(forecast!.current.sunrise);
    const sunset = new Date(forecast!.current.sunset);

    return (
        <div>
            <div>
                {sunrise.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                })}
            </div>
            <div>sunrise line</div>
            <div>
                {`Sunset: ${sunset.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                })}`}
            </div>
        </div>
    );
}

export default Sunrise;
