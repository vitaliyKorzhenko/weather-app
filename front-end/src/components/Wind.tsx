import { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';
import CompassCanvas from './CompassCanvas';

function Wind() {
    const forecast = useContext(ForecastContext);
    return (
        <div className="grid ">
            <div className="grid grid-cols-3 grid-rows-3 text-white col-start-1 row-start-1 w-[90px] h-[100px] justify-self-center self-center">
                <div className="col-start-2 row-start-1 justify-self-center self-center">
                    N
                </div>
                <div className="col-start-2 row-start-3 justify-self-center self-end">
                    S
                </div>
                <div className="col-start-1 row-start-2 justify-self-start self-center">
                    W
                </div>
                <div className="col-start-3 row-start-2 justify-self-end self-center">
                    E
                </div>
                <div className="flex flex-col items-center text-white self-center justify-self-center col-start-2 row-start-2 bg-[#2a2753] z-10">
                    <div className="">{forecast!.current.wind_speed}</div>
                    <div>km/h</div>
                </div>
            </div>
            <div className="col-start-1 row-start-1 justify-self-center">
                <CompassCanvas />
            </div>
        </div>
    );
}

export default Wind;
