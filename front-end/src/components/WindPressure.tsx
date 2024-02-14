import React from 'react';

type WindPressureRrops = {
    icon: React.JSX.Element;
    wind_pressure: string;
    //тут я не можу зрозуміти чи це іконка чи то воно рухається і що воно таке
};

function WindPressure(props: WindPressureRrops) {
    return (
        <div>
            <div>{props.icon}</div>
            <div>{props['wind_pressure']}</div>
        </div>
    );
}

export default WindPressure;
