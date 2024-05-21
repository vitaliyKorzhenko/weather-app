import { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';
import UnitContext from '../../Context/UnitContext';

function FeelsLike() {
    const forecast = useContext(ForecastContext);
    const unit = useContext(UnitContext);

    function feelsLikeText(temp: number) {
        const currentTemp = forecast!.current.temperature;
        const feelsLikeTemp = Math.floor(temp);

        switch (true) {
            case Math.abs(feelsLikeTemp - currentTemp) <= 1:
                return 'Very close to the actual temperature';
            case Math.abs(feelsLikeTemp - currentTemp) <= 2:
                return 'Similar to the actual temperature';
            case feelsLikeTemp - currentTemp < -2:
                return 'Feels colder than the actual temperature';
            case feelsLikeTemp - currentTemp > 2:
                return 'Feels warmer than the actual temperature';
        }
    }
    return (
        <div className="flex justify-around flex-col items-start gap-y-7">
            <div className="font-sans-display text-white text-3xl">
                {unit?.convert(forecast!.current.temperature)}°
            </div>
            <div className="text-white text-sm">
                {feelsLikeText(forecast!.current.feels_like)}
            </div>
        </div>
    );
}

export default FeelsLike;
