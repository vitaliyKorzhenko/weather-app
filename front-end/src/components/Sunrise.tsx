import { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';
import CosineCanvas from './CosineCanvas';

function Sunrise() {
    const forecast = useContext(ForecastContext);
    const sunrise = new Date(forecast!.current.sunrise);
    const sunset = new Date(forecast!.current.sunset);
    const time = new Date(forecast!.current.time);

    return (
        <div className="flex flex-col">
            <div className="text-white font-sans-text text-xl">
                {sunrise.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                })}
            </div>
            <div className="mx-[-16px]">
                <CosineCanvas sunrise={sunrise} sunset={sunset} time={time} />
            </div>
            <div className="text-white font-sans-text text-sm">
                {`Sunset: ${sunset.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                })}`}
            </div>
        </div>
    );
}

export default Sunrise;
