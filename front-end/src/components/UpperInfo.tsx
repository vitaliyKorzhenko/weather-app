import React, { useContext } from 'react';
import { findDay, findMonth } from '../utils/dateUtils';
import ForecastContext from '../ForecastContext';

function UpperInfo() {
    const forecast = useContext(ForecastContext);

    const day = findDay(new Date(forecast!.current.time).getDay());
    const month = findMonth(new Date(forecast!.current.time).getMonth());
    const date = new Date(forecast!.current.time).getDate();

    return (
        <div>
            <div>{forecast!.city}</div>
            <div>{`${day} , ${month} ${date}`}</div>
            <div>{forecast!.current.temperature}</div>
            <div>{forecast!.current.weather_code}</div>
            {/* <div>{forecast!.current.temp_hi}</div>
            <div>{forecast.temp_low}</div> */}
        </div>
    );
}

export default UpperInfo;
