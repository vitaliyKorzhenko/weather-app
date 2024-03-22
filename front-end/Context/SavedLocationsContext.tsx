import { createContext, useCallback, useEffect, useState } from 'react';
import { getLocations, deleteLocation } from '../src/utils/locationsApi';
import { Location } from '../src/types/Location';
import { LocationContextTypes } from '../src/types/LocationContextTypes';

const SavedLocationsContext = createContext<LocationContextTypes | undefined>(
    undefined
);

export function SavedLocationsContextProvider(props: {
    children: React.JSX.Element;
}) {
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        (async () => {
            await updateLocationsHandler();
        })();
    }, []);

    const updateLocationsHandler = useCallback(async () => {
        const locations = await getLocations();
        setLocations(locations);
    }, []);

    // const addLocationHandler = useCallback(async (location: string) => {
    //     await addLocation(location);
    //     updateLocationsHandler();
    // }, []);

    const deleteLocationHandler = useCallback(async (id: string) => {
        await deleteLocation(id);
        await updateLocationsHandler();
    }, []);

    return (
        <SavedLocationsContext.Provider
            value={{
                locations,
                updateLocationsHandler,
                deleteLocationHandler,
            }}
        >
            {props.children}
        </SavedLocationsContext.Provider>
    );
}

export default SavedLocationsContext;
