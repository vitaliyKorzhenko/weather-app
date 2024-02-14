import React from 'react';

type AirQualityProps = {
    icon: React.JSX.Element;
    quality_index: number;
    air_quality: string;
};
function AirQuality(props: AirQualityProps) {
    return (
        <div>
            <div>{props.icon}</div>
            <div>Air quality</div>
            <div>{`${props['quality_index']} - ${props['air_quality']}`}</div>
            <div>index line</div>
        </div>
    );
}

export default AirQuality;
