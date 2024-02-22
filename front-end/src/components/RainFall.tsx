import { useContext } from 'react';
import ForecastContext from '../ForecastContext';

function RainFall() {
    const forecast = useContext(ForecastContext);
    const timeNow = new Date();
    return (
        <div>
            <div>{`${forecast!.current.rain} mm in the last hour`}</div>
            <div>
                {forecast!.hourly[timeNow.getHours()].precipitation_probability}
            </div>
        </div>
    );
}

export default RainFall;
