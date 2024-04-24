import { useState } from 'react';
import ForecastInDetails from './ForecastInDetails';
import UtilityButtons from './UtilityButtons';
import clsx from 'clsx';

function Footer() {
    const [state, setState] = useState<boolean>(false);
    return (
        <div
            className={clsx(
                'bg-gradient-to-b from-[rgba(46,51,90,0.40)] to-[rgba(28,27,51,0.40)] backdrop-blur-xl rounded-t-[44px] w-full overflow-scroll transition duration-700 ease-in-out',
                state && 'h-full absolute'
            )}
        >
            <div
                className="w-[48px] h-[5px] rounded-full bg-[#000000] opacity-30 mx-auto mt-[9px]"
                onClick={() => setState((state) => !state)}
            ></div>
            <ForecastInDetails />
            <UtilityButtons />
        </div>
    );
}

export default Footer;
