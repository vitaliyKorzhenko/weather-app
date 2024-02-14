import React from 'react';

type SavedLocationCardProps = {
    temp_hi: string; //через те що там є значок температури який буде стрінг
    temp_low: string;
    temp: string;
    city: string;
    country: string;
    weather_condition: string;
    icon: React.JSX.Element;
};

function SavedLocationCard(props: SavedLocationCardProps) {
    return (
        <div>
            <div>{props.temp}</div>
            <div>{props.temp_hi}</div>
            <div>{props.temp_low}</div>
            <div>{`${props.city}, ${props.country}`}</div>
            <div>{props.icon}</div>
            <div>{props['weather_condition']}</div>
        </div>
    );
}

export default SavedLocationCard;
