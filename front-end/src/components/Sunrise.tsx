import React from 'react';

type SunriseProps = {
    icon: React.JSX.Element;
    time: string;
    sunset: string;
};

function Sunrise(props: SunriseProps) {
    return (
        <div>
            <div>{props.icon}</div>
            <div>Sunrise</div>
            <div>sunrise line</div>
            <div>Sunset: {props.sunset} </div>
        </div>
    );
}

export default Sunrise;
