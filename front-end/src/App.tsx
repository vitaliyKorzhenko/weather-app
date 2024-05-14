import { AuthContextProvider } from '../Context/AuthContext';
import Header from './components/Header';
import LoginAndSignupPage from './components/LoginSignupPage';
import SavedLocationsPage from './components/SavedLocationsPage';
import { ForecastContextProvider } from '../Context/ForecastContext';
import { RouterContextProvider } from '../Context/RouterContext';
import { SavedLocationsContextProvider } from '../Context/SavedLocationsContext';
import { SearchContextProvider } from '../Context/SearchContext';
import UpperInfo from './components/UpperInfo';
import Footer from './components/Footer';
import UtilityButtons from './components/UtilityButtons';
import { createContext, useState } from 'react';
import GoogleMap from './components/GoogleMap';

export const FooterContext = createContext<
    | {
          state: boolean;
          setState: React.Dispatch<React.SetStateAction<boolean>>;
      }
    | undefined
>(undefined);

function FooterContextProvider(props: { children: React.JSX.Element }) {
    const [state, setState] = useState<boolean>(true);

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

function App() {
    return (
        <div className="bg-[url('./image/Background.svg')] w-[390px] h-[844px] bg-gray-500 bg-cover bg-no-repeat flex flex-col items-center">
            <AuthContextProvider>
                <RouterContextProvider
                    Routes={{
                        '/': (
                            <ForecastContextProvider>
                                <>
                                    <Header />
                                    <UpperInfo />

                                    <FooterContextProvider>
                                        <>
                                            <Footer />
                                            <UtilityButtons />
                                        </>
                                    </FooterContextProvider>
                                </>
                            </ForecastContextProvider>
                        ),
                        '/saved-locations': (
                            <SavedLocationsContextProvider>
                                <SearchContextProvider>
                                    <SavedLocationsPage />
                                </SearchContextProvider>
                            </SavedLocationsContextProvider>
                        ),

                        '/auth': <LoginAndSignupPage />,
                        '/map': <GoogleMap />,
                    }}
                ></RouterContextProvider>
            </AuthContextProvider>
        </div>
    );
}

export default App;
