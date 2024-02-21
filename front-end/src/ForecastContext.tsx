import { createContext, useEffect, useState } from 'react';
import { Forecast } from './types/Forecast';
import axios from 'axios';

const ForecastContext = createContext<Forecast | undefined>(undefined);

export function ForecastContextProvider(props: {
    children: React.JSX.Element;
}) {
    const [weatherForecast, setWeatherForecast] = useState<
        Forecast | undefined
    >();

    useEffect(() => {
        weatherDetails();
    }, []);

    const weatherDetails = async () => {
        try {
            const { data } = await axios.get('/forecast');
            setWeatherForecast(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching weather details:', error);
        }
    };
    return (
        <ForecastContext.Provider value={weatherForecast}>
            {weatherForecast && props.children}
        </ForecastContext.Provider>
    );
}

export default ForecastContext;
