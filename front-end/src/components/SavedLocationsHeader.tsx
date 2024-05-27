import { useContext } from 'react';
import RouterContext from '../../Context/RouterContext';
import SearchContext from '../../Context/SearchContext';

function SavedLocationsHeader() {
    const router = useContext(RouterContext);
    const searchContext = useContext(SearchContext);
    return (
        <div className="sticky pt-[29px] backdrop-blur-xl z-50  py-[9px] px-[16px]">
            <div className="flex pr-[9px] items-center gap-[5px]">
                <div
                    onClick={() => router?.setRoute('/')}
                    className="bg-[url('./images/icon-chevron-left.svg')] w-[18px] h-[24px] bg-no-repeat cursor-pointer"
                ></div>
                <div className=" text-white disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:pointer-events-none font-sans-display text-[28px] font-normal leading-9 tracking-[.364px]">
                    Weather
                </div>
            </div>

            <div className="relative flex items-center">
                <div className="bg-[url('./images/icon-magnifyingglass.svg')] w-[15px] h-[15px] absolute ml-[5px] mt-[3px]"></div>

                <input
                    className=" mt-1 pl-[25px] w-[100%] h-[27px] rounded-md text-sm outline-none  bg-gradient-to-br from-[#2E335A] to-[#1C1B33] shadow-custom-search text-white"
                    type="text"
                    placeholder="Search for a city"
                    value={searchContext?.inputText}
                    onChange={async (event) => {
                        //console.log(inputText);
                        searchContext?.setInputText(event.target.value);
                    }}
                />
            </div>

            <div className=""></div>
        </div>
    );
}

export default SavedLocationsHeader;
