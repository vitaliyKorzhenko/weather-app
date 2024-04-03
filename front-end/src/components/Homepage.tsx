import UpperInfo from './UpperInfo';
import ForecastInDetails from './ForecastInDetails';
import UtilityButtons from './UtilityButtons';

function Homepage() {
    return (
        <div className="bg-no-repeat bg-cover bg-[url('./image/house.png')] w-[100%] h-[100%] mb-0 ">
            <div>
                <UpperInfo />
                <ForecastInDetails />
                <UtilityButtons />
            </div>
        </div>
    );
}

export default Homepage;
