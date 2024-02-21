import './App.css';
import Homepage from './components/Homepage';
import { ForecastContextProvider } from './ForecastContext';

function App() {
    return (
        <ForecastContextProvider>
            <Homepage />
        </ForecastContextProvider>
    );
}

export default App;
