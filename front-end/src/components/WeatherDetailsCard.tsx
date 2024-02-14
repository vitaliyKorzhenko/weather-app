import React from 'react';
import UvIndex from './UvIndex';
import Sunrise from './Sunrise';
import WindPressure from './WindPressure';
import RainfallFeelsLikeHumidityVisibility from './RainfallFeelsLikeHumidityVisibility';

type WeatherDetailsCard = {
    title_icon: React.JSX.Element;
    title: string;
    children: React.Component;
};

function WeatherDetailsCard(props: WeatherDetailsCard) {
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
