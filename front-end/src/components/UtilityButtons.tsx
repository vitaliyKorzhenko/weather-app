import { useContext } from 'react';
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
                    }}
                    className={clsx(
                        "bg-[url('./image/Button.svg')] w-[66px] h-[66px] flex shrink-0  bg-center bg-no-repeat hover:scale-125",
                        !queryUrl.has('city') && 'grayScaleButton'
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
