import axios from 'axios';

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

export const addLocation = async (
    city: string,
    country: string,
    latitude: number,
    longitude: number
) => {
    const newLocation = {
        city,
        country,
        latitude,
        longitude,
    };

    await axios.post('locations', newLocation);
};

export const deleteLocation = async (_id: string) => {
    await axios.delete(`location/${_id}`);
};
