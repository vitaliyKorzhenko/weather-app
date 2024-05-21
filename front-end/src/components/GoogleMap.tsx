import React, { useContext } from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import RouterContext from '../../Context/RouterContext';

function GoogleMapComponent() {
    const router = useContext(RouterContext);
    const queryUrl = new URLSearchParams(window.location.search);
    const center = {
        lat: parseFloat(queryUrl.get('latitude') || '0'),
        lng: parseFloat(queryUrl.get('longitude') || '0'),
    };

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyCydEBahjdGjp0dUjuigS_z86BWdHXjoeI',
    });

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full h-full">
            <div className=" pr-[9px] items-center gap-[5px] absolute z-10 flex flex-row bg-gradient-to-b from-[#48319d] to-transparent w-full h-[5%]">
                <div
                    onClick={() => router?.setRoute('/')}
                    className="bg-[url('./images/icon-chevron-left.svg')] w-[18px] h-[24px] bg-no-repeat ml-[10px]"
                ></div>
                <div className=" text-white disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:pointer-events-none font-sans-display text-[28px] font-normal leading-9 tracking-[.364px]">
                    Map
                </div>
            </div>

            <GoogleMap
                mapContainerStyle={{ height: '844px' }}
                center={center}
                zoom={15}
                options={{
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}
            ></GoogleMap>
            {/* <iframe
                width="100%"
                height="600"
                // frameborder="0"
                // scrolling="no"
                // marginheight="0"
                // marginwidth="0"
                src={`https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${queryUrl.get(
                    'latitude'
                )},${queryUrl.get(
                    'longitude'
                )}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`}
            ></iframe> */}
        </div>
    );
}

export default GoogleMapComponent;
