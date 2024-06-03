import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import {
    getLocations,
    deleteLocation,
    addLocation,
} from '../src/utils/locationsApi';
import { Location } from '../src/types/Location';
import { LocationContextTypes } from '../src/types/LocationContextTypes';
import { LocationItem } from '../src/types/LocationItem';
import AuthContext from './AuthContext';

const SavedLocationsContext = createContext<LocationContextTypes | undefined>(
    undefined
);

export function SavedLocationsContextProvider(props: {
    children: React.JSX.Element;
}) {
    const [locations, setLocations] = useState<Location[]>([]);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('SavedLocationsContext useEffect');

        const updateLocations = async () => {
            if (authContext?.user) {
                await updateLocationsHandler();
            }
        };

        updateLocations();
    }, [authContext?.user]);

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
