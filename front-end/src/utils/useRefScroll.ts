import { MutableRefObject, useEffect } from 'react';

const useRefScroll = (
    scrollContainerRef: MutableRefObject<HTMLElement | null>,
    setIsMoving: (isMoving: boolean | null) => void = () => {}
) => {
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (scrollContainer === null) {
            return;
        }

        let isDown = false;
        let startX: number;
        let scrollLeft: number;
        let startY: number;
        let scrollTop: number;

        const onMouseDown = (e: MouseEvent) => {
            e.stopPropagation();
            isDown = true;
            startX = e.pageX - scrollContainer.offsetLeft;
            startY = e.pageY - scrollContainer.offsetTop;
            scrollTop = scrollContainer.scrollTop;
            scrollLeft = scrollContainer.scrollLeft;
            scrollContainer.style.cursor = 'grabbing';
        };

        const onMouseLeave = () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
        };

        const onMouseUp = () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
            setIsMoving(false);
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            setIsMoving(true);
            e.stopPropagation();
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walkX = (x - startX) * 1.5; // Adjust scrolling speed
            scrollContainer.scrollLeft = scrollLeft - walkX;
            const y = e.pageY - scrollContainer.offsetTop;
            const walkY = (y - startY) * 2; // Adjust scrolling speed
            scrollContainer.scrollTop = scrollTop - walkY;
        };

        scrollContainer.addEventListener('mousedown', onMouseDown);
        scrollContainer.addEventListener('mouseleave', onMouseLeave);
        scrollContainer.addEventListener('mouseup', onMouseUp);
        scrollContainer.addEventListener('mousemove', onMouseMove);

        return () => {
            scrollContainer.removeEventListener('mousedown', onMouseDown);
            scrollContainer.removeEventListener('mouseleave', onMouseLeave);
            scrollContainer.removeEventListener('mouseup', onMouseUp);
            scrollContainer.removeEventListener('mousemove', onMouseMove);
        };
    }, []);
};

export default useRefScroll;
