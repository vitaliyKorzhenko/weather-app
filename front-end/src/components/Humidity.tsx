import { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';

function Humidity() {
    const forecast = useContext(ForecastContext);

    function calculateDewPoint(temperature: number, relativeHumidity: number) {
        // Magnus coefficients
        const a = 17.625;
        const b = 243.04;

        // Calculate alpha
        const alpha =
            Math.log(relativeHumidity / 100) +
            (a * temperature) / (b + temperature);

        // Calculate dew point temperature
        const dewPoint = (b * alpha) / (a - alpha);

        return Math.ceil(dewPoint);
    }

    return (
        <div className="flex justify-around flex-col items-start gap-y-7">
            <div className="font-sans-display text-white text-3xl">{`${
                forecast!.current.humidity
            }%`}</div>
            <div className="text-white text-sm">
                The dew pont is&nbsp;
                {calculateDewPoint(
                    forecast!.current.temperature,
                    forecast!.current.humidity
                )}
                ° right now
            </div>
        </div>
    );
}

export default Humidity;
