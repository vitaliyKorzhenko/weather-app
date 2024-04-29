import { useContext } from 'react';
import SavedLocationCard from './SavedLocationCard';
import SavedLocationsContext from '../../Context/SavedLocationsContext';
import FoundLocationResults from './FoundLocationResults';
import SearchContext from '../../Context/SearchContext';
import SavedLocationsHeader from './SavedLocationsHeader';

function SavedLocationsPage() {
    const savedLocation = useContext(SavedLocationsContext);

    const searchContext = useContext(SearchContext);

    return (
        <>
            <div className="flex overflow-y-scroll scrollbar-hide flex-col bg-gradient-to-br from-[#2e335a] to-[#1C1B33] rounded w-[100%] h-[100%] gap-[8px]">
                <SavedLocationsHeader />
                <div className=" py-[9px] px-[16px]">
                    {searchContext?.locations.map((item, index) => (
                        <FoundLocationResults key={index} item={item} />
                    ))}
                    <div className="overflow-y-scroll scrollbar-hide flex flex-col gap-2">
                        {savedLocation?.locations.map((item, index) => (
                            <SavedLocationCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SavedLocationsPage;
