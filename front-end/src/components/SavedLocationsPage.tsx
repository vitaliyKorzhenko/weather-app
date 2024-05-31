import { createRef, useContext, useState } from 'react';
import SavedLocationCard from './SavedLocationCard';
import SavedLocationsContext from '../../Context/SavedLocationsContext';
import FoundLocationResults from './FoundLocationResults';
import SearchContext from '../../Context/SearchContext';
import SavedLocationsHeader from './SavedLocationsHeader';
import useRefScroll from '../utils/useRefScroll';

function SavedLocationsPage() {
    const savedLocation = useContext(SavedLocationsContext);

    const searchContext = useContext(SearchContext);
    const scrollRef = createRef<HTMLDivElement>();

    //const isMoving = useRef(false);
    const [isMoving, setIsMoving] = useState(false);

    useRefScroll(scrollRef, (isMoving: boolean | null) =>
        setIsMoving(isMoving!)
    );

    return (
        <>
            <div className="flex scrollbar-hide flex-col bg-gradient-to-br from-[#2e335a] to-[#1C1B33] rounded w-[100%] h-[100%] gap-[8px]">
                <SavedLocationsHeader />
                <div
                    ref={scrollRef}
                    className=" py-[9px] px-[16px] flex flex-col gap-3 overflow-y-scroll  scrollbar-hide"
                >
                    {searchContext?.locations.map((item, index) => (
                        <FoundLocationResults key={index} item={item} />
                    ))}
                    {!searchContext!.locations.length && (
                        <div className=" scrollbar-hide flex flex-col gap-[22px] relative mt-[4px]">
                            {savedLocation?.locations.map((item, index) => (
                                <SavedLocationCard
                                    isMoving={isMoving}
                                    key={index}
                                    item={item}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SavedLocationsPage;
