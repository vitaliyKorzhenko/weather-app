import './App.css';
import { AuthContextProvider } from '../Context/AuthContext';
import Header from './components/Header';
import Homepage from './components/Homepage';
import LoginAndSignupPage from './components/LoginSignupPage';
import SavedLocationsPage from './components/SavedLocationsPage';
import { ForecastContextProvider } from '../Context/ForecastContext';
import { RouterContextProvider } from '../Context/RouterContext';
import { SavedLocationsContextProvider } from '../Context/SavedLocationsContext';
import { SearchContextProvider } from '../Context/SearchContext';

function App() {
    return (
        <div className="bg-[url('./image/background.png')] w-[390px] h-[844px] mx-auto bg-auto bg-center">
            <AuthContextProvider>
                <RouterContextProvider
                    Routes={{
                        '/': (
                            <ForecastContextProvider>
                                <>
                                    <Header />
                                    <Homepage />
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
