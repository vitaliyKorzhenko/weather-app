import React, { createContext, useState } from 'react';

const FooterContext = createContext<
    | {
          state: boolean;
          setState: React.Dispatch<React.SetStateAction<boolean>>;
      }
    | undefined
>(undefined);

export function FooterContextProvider(props: { children: React.JSX.Element }) {
    const [state, setState] = useState<boolean>(false);

    return (
        <FooterContext.Provider
            value={{
                state,
                setState,
            }}
        >
            {props.children}
        </FooterContext.Provider>
    );
}

export default FooterContext;
