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
                                    <Footer />
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
                    }}
                ></RouterContextProvider>
            </AuthContextProvider>
        </div>
    );
}

export default App;
