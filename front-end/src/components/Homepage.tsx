import React from 'react';
import UpperInfo from './UpperInfo';
import ForecastInDetails from './ForecastInDetails';
import UtilityButtons from './UtilityButtons';

function Homepage() {
    return (
        <div>
            <UpperInfo />
            <ForecastInDetails />
            <UtilityButtons />
        </div>
    );
}

export default Homepage;
