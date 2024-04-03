import { useState, useEffect } from 'react';

const useDebounce = (text: string, delay: number) => {
    // State to store the debounced text
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        // Create a timer that will execute the callback after the specified delay
        const debounceTimer = setTimeout(() => {
            setDebouncedText(text); // Update the debounced text with the latest input
        }, delay);

        // Cleanup function: Clear the timer if the component unmounts or the input changes
        return () => {
            clearTimeout(debounceTimer);
        };
    }, [text, delay]);

    return debouncedText; // Return the debounced text
};

export default useDebounce;
