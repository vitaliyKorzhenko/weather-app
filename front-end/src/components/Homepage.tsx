import { useEffect, useState } from 'react';
import UpperInfo from './UpperInfo';
import ForecastInDetails from './ForecastInDetails';
import UtilityButtons from './UtilityButtons';
import axios from 'axios';

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
