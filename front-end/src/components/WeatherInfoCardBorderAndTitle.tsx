import React from 'react';

type WeatherInfoCardBorderAndTitleProps = {
    children: React.JSX.Element;
    title: string;
    icon: string;
};

function WeatherInfoCardBorderAndTitle({
    children,
    title,
    icon,
}: WeatherInfoCardBorderAndTitleProps) {
    return (
        <div
            className="border-[#5a4dae] border-2 rounded-2xl bg-[#2b2753] w-[164px] h-[164px] p-[16px] m-auto
        "
        >
            <div className="flex flex-row gap-1 items-center">
                <div
                    className="w-[20px] h-[20px] bg-contain bg-center grayscale bg-no-repeat"
                    style={{
                        backgroundImage: `url(${icon})`,
                    }}
                ></div>
                <div className="text-[10px] font-sans-text text-[#a2a2a7]">
                    {title}
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default WeatherInfoCardBorderAndTitle;
