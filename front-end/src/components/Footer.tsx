import ForecastInDetails from './ForecastInDetails';
import UtilityButtons from './UtilityButtons';

function Footer() {
    return (
        <div className="bg-gradient-to-b from-[rgba(46,51,90,0.40)] to-[rgba(28,27,51,0.40)] backdrop-blur-xl rounded-t-[44px] w-full overflow-scroll">
            <div className=" bg-[url('./image/SegmentedControl.svg')] bg-no-repeat w-full h-full ">
                <ForecastInDetails />
                <UtilityButtons />
            </div>
        </div>
    );
}

export default Footer;
