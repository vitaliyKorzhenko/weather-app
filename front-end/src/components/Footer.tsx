import ForecastInDetails from './ForecastInDetails';
import UtilityButtons from './UtilityButtons';

function Footer() {
    return (
        <div className="bg-[url('./image/Forecast=Hourly.svg')] w-full overflow-scroll pb-[35px]  bg-no-repeat">
            {/* <div className="bg-[url('./image/House.png')] w-[50%] h-[50%] object-contain bg-center absolute"></div> */}

            <ForecastInDetails />
            <UtilityButtons />
        </div>
    );
}

export default Footer;
