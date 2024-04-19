import { useContext } from 'react';
import SavedLocationCard from './SavedLocationCard';
import SavedLocationsContext from '../../Context/SavedLocationsContext';
import FoundLocationResults from './FoundLocationResults';
import SearchContext from '../../Context/SearchContext';
import RouterContext from '../../Context/RouterContext';

function SavedLocationsPage() {
    const context = useContext(SavedLocationsContext);

    const searchContext = useContext(SearchContext);

    const router = useContext(RouterContext);

    return (
        <div className="flex flex-col bg-gradient-to-br from-[#2e335a] to-[#1C1B33] rounded w-[100%] h-[100%] py-[9px] px-[16px] gap-[8px]">
            <div className="flex pr-[9px] items-center gap-[5px]">
                <div
                    onClick={() => router?.setRoute('/')}
                    className="bg-[url('./images/icon-chevron-left.svg')] w-[18px] h-[24px] bg-no-repeat"
                ></div>
                <div className=" text-white disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:pointer-events-none font-sans-display text-[28px] font-normal leading-9 tracking-[.364px]">
                    Weather
                </div>
            </div>

            <input
                className="mt-1 px-3 w-[100%] rounded-md text-sm outline-none flex self-center bg-gradient-to-br from-[rgba(46,51,90,0.26)] to-[rgba(28,27,51,0.26)] shadow-custom-search "
                type="text"
                placeholder="Search for a city"
                value={searchContext?.inputText}
                onChange={async (event) => {
                    //console.log(inputText);
                    searchContext?.setInputText(event.target.value);
                }}
            />
            <div>
                {searchContext?.locations.map((item, index) => (
                    <FoundLocationResults key={index} item={item} />
                ))}

                {context?.locations.map((item, index) => (
                    <SavedLocationCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
}

export default SavedLocationsPage;
