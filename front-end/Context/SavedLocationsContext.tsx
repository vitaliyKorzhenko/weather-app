import { createContext, useCallback, useEffect, useState } from 'react';
import {
    getLocations,
    deleteLocation,
    addLocation,
} from '../src/utils/locationsApi';
import { Location } from '../src/types/Location';
import { LocationContextTypes } from '../src/types/LocationContextTypes';
import { LocationItem } from '../src/types/LocationItem';

const SavedLocationsContext = createContext<LocationContextTypes | undefined>(
    undefined
);

export function SavedLocationsContextProvider(props: {
    children: React.JSX.Element;
}) {
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            await updateLocationsHandler();
        }, 0); // setTimeout lets a taken to be added first, we dont know why it works with Timeout and it doesnt work without it

        return () => clearTimeout(timeoutId);
    }, []);

    const updateLocationsHandler = useCallback(async () => {
        const locations = await getLocations();
        setLocations(locations);
    }, []);

    const addLocationHandler = useCallback(async (item: LocationItem) => {
        await addLocation(item);
        updateLocationsHandler();
    }, []);

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
                addLocationHandler,
            }}
        >
            {props.children}
        </SavedLocationsContext.Provider>
    );
}

export default SavedLocationsContext;
