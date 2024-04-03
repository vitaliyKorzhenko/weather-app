import { createContext, useEffect, useState } from 'react';
import { Forecast } from '../src/types/Forecast';
import axios from 'axios';

const ForecastContext = createContext<Forecast | undefined>(undefined);

export function ForecastContextProvider(props: {
    children: React.JSX.Element;
}) {
    const [weatherForecast, setWeatherForecast] = useState<
        Forecast | undefined
    >();
    // weatherForecast = {
    //     current: weatherDetails.current,
    //     daily:...,
    //     hourly:...,
    // }

    const [location, setLocation] = useState<GeolocationPosition | undefined>();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (location) => {
                setLocation(location);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    useEffect(() => {
        const weatherDetails = async () => {
            const queryUrl = new URLSearchParams(window.location.search);

            try {
                const { data } = await axios.get(
                    `/forecast?latitude=${
                        queryUrl.has('latitude')
                            ? queryUrl.get('latitude')
                            : location?.coords.latitude
                    }&longitude=${
                        queryUrl.has('longitude')
                            ? queryUrl.get('longitude')
                            : location?.coords.longitude
                    }`
                );
                setWeatherForecast(data);
                //console.log(data);
            } catch (error) {
                console.error('Error fetching weather details:', error);
            }
        };

        if (location) {
            weatherDetails();
        }
    }, [location]);

    return (
        <ForecastContext.Provider value={weatherForecast}>
            {weatherForecast && props.children}
        </ForecastContext.Provider>
    );
}

export default ForecastContext;
