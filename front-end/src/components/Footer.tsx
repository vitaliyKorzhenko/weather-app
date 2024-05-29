import { createRef, useContext } from 'react';
import ForecastInDetails from './ForecastInDetails';
import clsx from 'clsx';
import FooterContext from '../../Context/FooterContext';
import useRefScroll from '../utils/useRefScroll';

function Footer() {
    const footer = useContext(FooterContext);
    const scrollRef = createRef<HTMLDivElement>();

    useRefScroll(scrollRef);

    return (
        <div
            ref={scrollRef}
            className={clsx(
                'absolute bottom-0 transition-all duration-700 bg-gradient-to-b from-[rgba(46,51,90,0.40)] to-[rgba(28,27,51,0.40)] backdrop-blur-xl rounded-t-[44px] w-[390px] cursor-grab',
                footer && footer.state
                    ? 'h-[808px] overflow-scroll scrollbar-hide mt-[36px]'
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
