import axios from 'axios';
import { LocationItem } from '../types/LocationItem';

export const getLocations = async () => {
    const { data: locations } = await axios.get('locations');
    return locations;
};

export const findLocations = async (location: string) => {
    const { data: locationsCoordinates } = await axios.get(
        `/locations/find?location=${encodeURIComponent(location)}`
    );
    return locationsCoordinates;
};

export const addLocation = async (item: LocationItem) => {
    await axios.post('locations', item);
};

export const deleteLocation = async (_id: string) => {
    await axios.delete(`locations/${_id}`);
};
