import React from 'react';

type WeatherInfoCardBorderAndTitleProps = {
    children: React.JSX.Element;
    title: string;
    icon: React.JSX.Element;
};

function WeatherInfoCardBorderAndTitle({
    children,
    title,
    icon,
}: WeatherInfoCardBorderAndTitleProps) {
    return (
        <div>
            <div>
                <div>{icon}</div>
                <div>{title}</div>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default WeatherInfoCardBorderAndTitle;
