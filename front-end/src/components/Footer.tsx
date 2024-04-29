import { useState } from 'react';
import ForecastInDetails from './ForecastInDetails';
import UtilityButtons from './UtilityButtons';
// import clsx from 'clsx';
import { DragCloseDrawer } from './DragCloseDrawer';

// const variants = {
//     open: { height: '100%', position: 'absolute', top: 0 },
//     closed: { height: '325px' },
// };

function Footer() {
    const [state, setState] = useState<boolean>(true);

    return (
        <DragCloseDrawer
            open={state}
            setOpen={setState}
            // className={clsx(
            //     'bg-gradient-to-b from-[rgba(46,51,90,0.40)] to-[rgba(28,27,51,0.40)] backdrop-blur-xl rounded-t-[44px] w-full h-[325px] overflow-scroll'
            //     // state && 'h-[844px] absolute'
            // )}
        >
            {/* <div
                className="w-[48px] h-[5px] rounded-full bg-[#000000] opacity-30 mx-auto mt-[9px]"
                onClick={() => setState((state) => !state)}
            ></div> */}
            <>
                <ForecastInDetails />
                <UtilityButtons />
            </>
        </DragCloseDrawer>
    );
}

export default Footer;
