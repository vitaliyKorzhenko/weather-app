import React, { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';

function Visibility() {
    const forecast = useContext(ForecastContext);
    const timeNow = new Date();
    return (
        <div>
            {/* <div>{`${forecast!.hourly[timeNow.getHours()].visibility} km`}</div> //what are the units for visibility? There isnt any */}
        </div>
    );
}

export default Visibility;
