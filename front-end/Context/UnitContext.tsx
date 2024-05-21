import React, { createContext, useState } from 'react';

type TempUnits = 'celsius' | 'fahrenheit';

export const UnitContext = createContext<
    | {
          unit: TempUnits;
          toggleUnit: () => void;
          convert: (temp: number) => number;
      }
    | undefined
>(undefined);

export function UnitContextProvider(props: { children: React.JSX.Element }) {
    const [unit, setUnit] = useState<TempUnits>('celsius');

    function toggleUnit() {
        unit === 'celsius' ? setUnit('fahrenheit') : setUnit('celsius');
    }

    function convert(temp: number) {
        return unit === 'celsius' ? temp : Math.floor((9 / 5) * temp + 32);
    }
    return (
        <UnitContext.Provider
            value={{
                unit,
                convert,
                toggleUnit,
            }}
        >
            {props.children}
        </UnitContext.Provider>
    );
}

export default UnitContext;
