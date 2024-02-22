import { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function AirQuality() {
    const forecast = useContext(ForecastContext);

    function airQualityMeaning(index: number) {
        if (index <= 50) {
            return 'Good';
        }
        if (index <= 100) {
            return 'Moderate';
        }
        if (index <= 150) {
            return 'Unhealthy for Sensative Groups';
        }
        if (index <= 200) {
            return 'Unhealthy';
        }
        if (index <= 300) {
            return 'Very Unhealthy';
        }

        return 'Hazardous';
    }
    return (
        <div>
            <div>{`${forecast!.current.us_aqi} - ${airQualityMeaning(
                forecast!.current.us_aqi
            )}`}</div>
            <div>
                <div>dot</div>
            </div>
        </div>
    );
}

export default AirQuality;
