import { useContext, useEffect, useState } from 'react';
import RouterContext from '../../Context/RouterContext';

import clsx from 'clsx';
import ForecastContext from '../../Context/ForecastContext';
import SavedLocationsContext from '../../Context/SavedLocationsContext';
import { LocationItem } from '../types/LocationItem';
import FooterContext from '../../Context/FooterContext';

function UtilityButtons() {
    const router = useContext(RouterContext);
    const footer = useContext(FooterContext);
    const forecast = useContext(ForecastContext);
    const context = useContext(SavedLocationsContext);

    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
        if (isClicked) {
            const timer = setTimeout(() => {
                setIsClicked(false);
            }, 3000); // 3 seconds to match the animation duration
            return () => clearTimeout(timer);
        }
    }, [isClicked]);

    const queryUrl = new URLSearchParams(window.location.search);
    const locationDetails = {
        city: queryUrl.get('city'),
        country: queryUrl.get('country'),
        latitude: forecast!.current.latitude,
        longitude: forecast!.current.longitude,
    } as LocationItem;
    return (
        <div
            className={clsx(
                'shrink-0 z-50 w-[390px] duration-700 transition-all absolute bottom-0 ',
                footer!.state && 'opacity-0 z-0'
            )}
        >
            {isClicked && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-white text-[#4d448e] animate-fadeOut border rounded-lg p-2">
                        Location added
                    </div>
                </div>
            )}
            <div className="bg-[url('./image/TabBar.svg')] flex w-full h-[100px] justify-around items-center bg-no-repeat">
                <button
                    className="bg-[url('./image/SymbolGPS.svg')] w-[44px] h-[44px] shrink-0 bg-center bg-no-repeat"
                    onClick={() => {
                        router?.setRoute('/map', {
                            latitude: forecast!.current.latitude.toString(),
                            longitude: forecast!.current.longitude.toString(),
                        });
                    }}
                ></button>
                <button
                    disabled={!queryUrl.has('city')}
                    onClick={() => {
                        context?.addLocationHandler(locationDetails);
                        router?.setRoute('/');
                        setIsClicked(true);
                    }}
                    className={clsx(
                        "bg-[url('./image/Button.svg')] w-[66px] h-[66px] flex shrink-0  bg-center bg-no-repeat ",
                        !queryUrl.has('city') && 'grayScaleButton',
                        queryUrl.has('city') && 'hover:scale-125'
                    )}
                    style={{
                        filter: 'drop-shadow(10px 10px 20px rgba(13, 20, 49, 0.50)) drop-shadow(-10px -10px 20px rgba(255, 255, 255, 0.50)) ',
                    }}
                ></button>
                <button
                    onClick={() => router!.setRoute('/saved-locations')}
                    className="bg-[url('./image/ListSymbol.svg')] w-[44px] h-[44px] shrink-0 bg-center bg-no-repeat"
                ></button>
            </div>
        </div>
    );
}

export default UtilityButtons;
