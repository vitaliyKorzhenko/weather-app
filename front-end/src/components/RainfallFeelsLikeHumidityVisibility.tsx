import React from 'react';

type RainfallFeelsLikeHumidityVisibilityRrops = {
    icon: React.JSX.Element;
    title: string;
    indicator: string;
    inscription: string;
};
function RainfallFeelsLikeHumidityVisibility(
    props: RainfallFeelsLikeHumidityVisibilityRrops
) {
    return (
        <div>
            <div>{props.icon}</div>
            <div>{props.title}</div>
            <div>{props.indicator}</div>
            <div>{props.inscription}</div>
        </div>
    );
}

export default RainfallFeelsLikeHumidityVisibility;
