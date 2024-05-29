import { AuthContextProvider } from '../Context/AuthContext';
import Header from './components/Header';
import LoginAndSignupPage from './components/LoginSignupPage';
import SavedLocationsPage from './components/SavedLocationsPage';
import { ForecastContextProvider } from '../Context/ForecastContext';
import { RouterContextProvider } from '../Context/RouterContext';
import { SavedLocationsContextProvider } from '../Context/SavedLocationsContext';
import { SearchContextProvider } from '../Context/SearchContext';
import { FooterContextProvider } from '../Context/FooterContext';
import { UnitContextProvider } from '../Context/UnitContext';
import UpperInfo from './components/UpperInfo';
import Footer from './components/Footer';
import UtilityButtons from './components/UtilityButtons';
import GoogleMap from './components/GoogleMap';

function App() {
    return (
        <div className="grid place-items-center h-[100%] bg-[#48319d]">
            <div className="bg-[url('./image/iphone-frame.png')] bg-cover bg-no-repeat w-[400px] h-[860px] row-start-1 col-start-1 z-[999] bg-center pointer-events-none"></div>
            <div className="bg-[url('./image/Background.svg')] w-[390px] h-[844px] bg-gray-500 bg-cover bg-no-repeat flex flex-col items-center relative select-none row-start-1 col-start-1 scale-[0.92]">
                <AuthContextProvider>
                    <UnitContextProvider>
                        <SavedLocationsContextProvider>
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
                                        <SearchContextProvider>
                                            <SavedLocationsPage />
                                        </SearchContextProvider>
                                    ),

                                    '/auth': <LoginAndSignupPage />,
                                    '/map': <GoogleMap />,
                                }}
                            ></RouterContextProvider>
                        </SavedLocationsContextProvider>
                    </UnitContextProvider>
                </AuthContextProvider>
            </div>
        </div>
    );
}

export default App;
