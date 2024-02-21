import { useEffect, useState } from 'react';
import UpperInfo from './UpperInfo';
import ForecastInDetails from './ForecastInDetails';
import UtilityButtons from './UtilityButtons';
import axios from 'axios';

function Homepage() {
    // const [weatherForecast, setWeatherForecast] = useState();
    // useEffect(() => {
    //     weatherDetails();
    // }, []);

    // const weatherDetails = async () => {
    //     try {
    //         const { data } = await axios.get('/forecast');
    //         setWeatherForecast(data);
    //         //console.log(weatherForecast);
    //     } catch (error) {
    //         console.error('Error fetching weather details:', error);
    //     }
    // };
    return (
        <div>
            <UpperInfo />
            <ForecastInDetails />
            <UtilityButtons />
        </div>
    );
}

export default Homepage;
