import './App.css';
import Homepage from './components/Homepage';
import SavedLocationsPage from './components/SavedLocationsPage';
import { ForecastContextProvider } from './ForecastContext';
import { RouterContextProvider } from './RouterContext';

function App() {
    return (
        <RouterContextProvider
            Routes={{
                '/': (
                    <ForecastContextProvider>
                        <Homepage />
                    </ForecastContextProvider>
                ),
                '/saveLoc': <SavedLocationsPage />,
            }}
        ></RouterContextProvider>
    );
}

export default App;
