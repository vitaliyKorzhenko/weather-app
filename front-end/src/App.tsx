import './App.css';
import { AuthContextProvider } from '../Context/AuthContext';
import Header from './components/Header';
import Homepage from './components/Homepage';
import LoginAndSignupPage from './components/LoginSignupPage';
import SavedLocationsPage from './components/SavedLocationsPage';
import { ForecastContextProvider } from '../Context/ForecastContext';
import { RouterContextProvider } from '../Context/RouterContext';
import { SavedLocationsContextProvider } from '../Context/SavedLocationsContext';

function App() {
    return (
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
                    '/saveLoc': (
                        <SavedLocationsContextProvider>
                            <SavedLocationsPage />
                        </SavedLocationsContextProvider>
                    ),

                    '/auth': <LoginAndSignupPage />,
                }}
            ></RouterContextProvider>
        </AuthContextProvider>
    );
}

export default App;
