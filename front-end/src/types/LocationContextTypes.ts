import { Location } from './Location';
import { LocationItem } from './LocationItem';

export interface LocationContextTypes {
    locations: Location[];
    updateLocationsHandler: () => Promise<void>;
    deleteLocationHandler: (id: string) => Promise<void>;
    addLocationHandler: (item: LocationItem) => Promise<void>;
}
