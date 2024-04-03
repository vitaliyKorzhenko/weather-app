import { useContext } from 'react';
import SavedLocationCard from './SavedLocationCard';
import SavedLocationsContext from '../../Context/SavedLocationsContext';
import FoundLocationResults from './FoundLocationResults';
import SearchContext from '../../Context/SearchContext';

function SavedLocationsPage() {
    const context = useContext(SavedLocationsContext);

    const searchContext = useContext(SearchContext);

    return (
        <div className="flex flex-col bg-gradient-to-br from-[#2e335a] to-[#1C1B33] rounded w-[100%] h-[100%]">
            <div className="mt-[35px] ml-[-230px] text-white disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:pointer-events-none">
                Weather
            </div>
            <input
                className="mt-1 px-3 w-[80%] bg-[#e9f0fe] rounded-md text-sm outline-none flex self-center"
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
