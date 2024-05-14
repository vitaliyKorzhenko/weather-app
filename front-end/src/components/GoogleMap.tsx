import React from 'react';

function GoogleMap() {
    const queryUrl = new URLSearchParams(window.location.search);

    return (
        <div>
            <iframe
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
            ></iframe>
        </div>
    );
}

export default GoogleMap;
