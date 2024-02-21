import React from 'react';
import UvIndex from './UvIndex';
import RainfallFeelsLikeHumidityVisibility from './RainfallFeelsLikeHumidityVisibility';
import Sunrise from './Sunrise';
import 

type WeatherDetailsCard = {
    title_icon: React.JSX.Element;
    title: string;
    children: React.Component;
};

function WeatherDetailsCard() {
    return (
        <div>
            <UvIndex />
            <Sunrise />
            <WindPressure />
            <RainfallFeelsLikeHumidityVisibility />
        </div>
    );
}

export default WeatherDetailsCard;
