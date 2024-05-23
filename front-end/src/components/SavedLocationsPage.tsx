import { useContext, useEffect, useRef, useState } from 'react';
import SavedLocationCard from './SavedLocationCard';
import SavedLocationsContext from '../../Context/SavedLocationsContext';
import FoundLocationResults from './FoundLocationResults';
import SearchContext from '../../Context/SearchContext';
import SavedLocationsHeader from './SavedLocationsHeader';

function SavedLocationsPage() {
    const savedLocation = useContext(SavedLocationsContext);

    const searchContext = useContext(SearchContext);
    const scrollRef = useRef<HTMLElement | null>(null);

    //const isMoving = useRef(false);
    const [isMoving, setIsMoving] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer === null) {
            return;
        }

        let isDown = false;
        let startY: number;
        let scrollTop: number;

        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            startY = e.pageY - scrollContainer.offsetTop;
            scrollTop = scrollContainer.scrollTop;
            scrollContainer.style.cursor = 'grabbing';
            console.log('down', isDown);
        };

        const onMouseUp = () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
            // isMoving.current = false;
            setIsMoving(false);
            console.log('up');
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return; // Prevent scrolling when footer is collapsed
            // isMoving.current = true-;
            setIsMoving(true);
            e.preventDefault();
            const y = e.pageY - scrollContainer.offsetTop;
            const walk = (y - startY) * 2; // Adjust scrolling speed
            scrollContainer.scrollTop = scrollTop - walk;
            console.log('move');
        };

        scrollContainer.addEventListener('pointerdown', onMouseDown);
        scrollContainer.addEventListener('mouseup', onMouseUp);
        scrollContainer.addEventListener('mousemove', onMouseMove);

        return () => {
            scrollContainer.removeEventListener('pointerdown', onMouseDown);
            scrollContainer.removeEventListener('mouseup', onMouseUp);
            scrollContainer.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

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
                        <div className=" scrollbar-hide flex flex-col gap-[22px] relative">
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
