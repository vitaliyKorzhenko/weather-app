import { useContext } from 'react';
import { FooterContext } from '../App';
import ForecastInDetails from './ForecastInDetails';
import clsx from 'clsx';

function Footer() {
    const footer = useContext(FooterContext);

    return (
        <div
            className={clsx(
                'absolute bottom-0 transition-all duration-700 bg-gradient-to-b from-[rgba(46,51,90,0.40)] to-[rgba(28,27,51,0.40)] backdrop-blur-xl rounded-t-[44px] w-full h-[325px] overflow-scroll',
                footer!.state && 'h-[844px]'
            )}
        >
            <div
                className={clsx(
                    !footer!.state && 'rotate-180',
                    "bg-[url('./images/Vector.svg')] bg-no-repeat w-[48px] h-[22px] mx-auto bg-center mt-[3px]"
                )}
                onClick={() => footer!.setState((state) => !state)}
                // onPointerMove={handlePointerMove}
            ></div>
            <ForecastInDetails />
        </div>
    );
}

export default Footer;
