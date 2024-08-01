import { useContext, useEffect, useState } from 'react';
import RouterContext from '../../Context/RouterContext';

import clsx from 'clsx';
import ForecastContext from '../../Context/ForecastContext';
import SavedLocationsContext from '../../Context/SavedLocationsContext';
import { LocationItem } from '../types/LocationItem';
import FooterContext from '../../Context/FooterContext';
import AuthContext from '../../Context/AuthContext';

function UtilityButtons() {
    const router = useContext(RouterContext);
    const footer = useContext(FooterContext);
    const forecast = useContext(ForecastContext);
    const context = useContext(SavedLocationsContext);
    const auth = useContext(AuthContext);

    const [isClicked, setIsClicked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const queryUrl = new URLSearchParams(window.location.search);
    const locationDetails = {
        city: queryUrl.get('city'),
        country: queryUrl.get('country'),
        latitude: forecast!.current.latitude,
        longitude: forecast!.current.longitude,
    } as LocationItem;

    useEffect(() => {
        const cityInQuery = queryUrl.get('city');
        if (
            cityInQuery &&
            context?.locations.some((location) => location.city === cityInQuery)
        ) {
            setIsDisabled(true);
        }
    }, []);

    return (
        <div
            className={clsx(
                'shrink-0 z-40 w-[390px] duration-700 transition-all absolute bottom-0 ',
                footer!.state && 'opacity-0 z-0'
            )}
        >
            {isClicked && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div
                        className={`bg-white border rounded-lg p-2 ${
                            auth?.isVerified
                                ? 'text-[#4d448e] animate-fadeOut'
                                : 'text-red-600'
                        }`}
                    >
                        {auth?.isVerified
                            ? 'Location added'
                            : 'Verify your account'}
                    </div>
                </div>
            )}
            <div className="bg-[url('./image/TabBar.svg')] flex w-full h-[100px] justify-around items-center bg-no-repeat">
                <button
                    className="bg-[url('./image/SymbolGPS.svg')] w-[44px] h-[44px] shrink-0 bg-center bg-no-repeat z-20"
                    onClick={() => {
                        router?.setRoute('/map', {
                            latitude: forecast!.current.latitude.toString(),
                            longitude: forecast!.current.longitude.toString(),
                        });
                    }}
                ></button>
                <button
                    disabled={!queryUrl.has('city') || isDisabled}
                    onClick={() => {
                        context?.addLocationHandler(locationDetails);
                        setIsClicked(true);
                        setIsDisabled(true);
                    }}
                    className={clsx(
                        "bg-[url('./image/Button.svg')] w-[66px] h-[66px] flex shrink-0  bg-center bg-no-repeat ",
                        (!queryUrl.has('city') || isClicked || isDisabled) &&
                            'grayScaleButton cursor-auto',
                        queryUrl.has('city') &&
                            !isClicked &&
                            !isDisabled &&
                            'hover:scale-125'
                    )}
                    style={{
                        filter: 'drop-shadow(10px 10px 20px rgba(13, 20, 49, 0.50)) drop-shadow(-10px -10px 20px rgba(255, 255, 255, 0.50)) ',
                    }}
                ></button>
                <button
                    onClick={() => router!.setRoute('/saved-locations')}
                    className="bg-[url('./image/ListSymbol.svg')] w-[44px] h-[44px] shrink-0 bg-center bg-no-repeat z-20"
                ></button>
            </div>
        </div>
    );
}

export default UtilityButtons;
