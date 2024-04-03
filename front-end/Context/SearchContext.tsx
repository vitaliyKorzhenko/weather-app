import React, { createContext, useEffect, useState } from 'react';
import { LocationItem } from '../src/types/LocationItem';
import useDebounce from '../src/utils/useDebounceHook';
import { findLocations } from '../src/utils/locationsApi';
import { SearchContextTypes } from '../src/types/SearchContextTypes';

const SearchContext = createContext<SearchContextTypes | undefined>(undefined);

export function SearchContextProvider(props: { children: React.JSX.Element }) {
    const [locations, setFindLocation] = useState<LocationItem[]>([]);
    const [inputText, setInputText] = useState(''); // State to store the input text

    const debounceDelay = 500; // Delay for debouncing

    const debouncedText = useDebounce(inputText, debounceDelay); // Apply debounce custom hook

    //console.log(inputText, debouncedText);

    useEffect(() => {
        (async () => {
            if (debouncedText.length < 2) {
                return;
            }
            const locationsArr = await findLocations(debouncedText);
            setFindLocation(locationsArr);
            //console.log('location', locationsArr);
        })();

        if (debouncedText === '') {
            setFindLocation([]);
        }
    }, [debouncedText]);

    return (
        <SearchContext.Provider value={{ locations, inputText, setInputText }}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContext;
