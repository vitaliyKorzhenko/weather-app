import { useContext } from 'react';
import ForecastContext from '../../Context/ForecastContext';
import CompassCanvas from './CompassCanvas';

function Wind() {
    const forecast = useContext(ForecastContext);
    return (
        <div className="grid">
            <div className="grid grid-cols-3 grid-rows-3 text-white col-start-1 row-start-1">
                <div className="col-start-2 row-start-1">N</div>
                <div className="col-start-2 row-start-3">S</div>
                <div className="col-start-1 row-start-2">W</div>
                <div className="col-start-3 row-start-2">E</div>
                <div className="flex flex-col items-center text-white self-center justify-self-center col-start-2 row-start-2">
                    <div className="">{forecast!.current.wind_speed}</div>
                    <div>km/h</div>
                </div>
            </div>
            <div className="self-center justify-self-center col-start-1 row-start-1">
                <CompassCanvas />
            </div>
        </div>
    );
}

export default Wind;
