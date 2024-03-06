import { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function SavedLocationCard() {
    const forecast = useContext(ForecastContext);
    return (
        <div>
            <div>{forecast!.current.temperature}</div>
            <div>{forecast!.current.weather_code}</div>
            <div>{forecast!.current.temp_high}</div>
            <div>{forecast!.current.temp_low}</div>
            <div>{`${forecast!.current.city}, ${
                forecast!.current.country
            }`}</div>
        </div>
    );
}

export default SavedLocationCard;
