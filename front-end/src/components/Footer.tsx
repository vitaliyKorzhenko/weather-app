import { useContext, useRef, useEffect } from 'react';
import ForecastInDetails from './ForecastInDetails';
import clsx from 'clsx';
import FooterContext from '../../Context/FooterContext';

function Footer() {
    const footer = useContext(FooterContext);
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        let isDown = false;
        let startY;
        let scrollTop;

        const onMouseDown = (e) => {
            isDown = true;
            startY = e.pageY - scrollContainer.offsetTop;
            scrollTop = scrollContainer.scrollTop;
            scrollContainer.style.cursor = 'grabbing';
        };

        const onMouseUp = () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
        };

        const onMouseMove = (e) => {
            if (!isDown || !footer || !footer.state) return; // Prevent scrolling when footer is collapsed
            e.preventDefault();
            const y = e.pageY - scrollContainer.offsetTop;
            const walk = (y - startY) * 2; // Adjust scrolling speed
            scrollContainer.scrollTop = scrollTop - walk;
        };

        scrollContainer.addEventListener('mousedown', onMouseDown);
        scrollContainer.addEventListener('mouseup', onMouseUp);
        scrollContainer.addEventListener('mousemove', onMouseMove);

        return () => {
            scrollContainer.removeEventListener('mousedown', onMouseDown);
            scrollContainer.removeEventListener('mouseup', onMouseUp);
            scrollContainer.removeEventListener('mousemove', onMouseMove);
        };
    }, [footer]);

    return (
        <div
            ref={scrollRef}
            className={clsx(
                'absolute bottom-0 transition-all duration-700 bg-gradient-to-b from-[rgba(46,51,90,0.40)] to-[rgba(28,27,51,0.40)] backdrop-blur-xl rounded-t-[44px] w-[390px] cursor-grab',
                footer && footer.state
                    ? 'h-[844px] overflow-scroll scrollbar-hide'
                    : 'h-[325px] overflow-hidden'
            )}
        >
            <div
                className={clsx(
                    !footer || !footer.state ? 'rotate-180' : '',
                    "bg-[url('./images/Vector.svg')] bg-no-repeat w-[48px] h-[22px] mx-auto bg-center mt-[3px] cursor-pointer"
                )}
                onClick={() => footer && footer.setState((state) => !state)}
            ></div>
            <ForecastInDetails />
        </div>
    );
}

export default Footer;
