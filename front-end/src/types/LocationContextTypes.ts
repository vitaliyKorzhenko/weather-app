import { Location } from './Location';

export interface LocationContextTypes {
    locations: Location[];
    updateLocationsHandler: () => Promise<void>;
    deleteLocationHandler: (id: string) => Promise<void>;
}
