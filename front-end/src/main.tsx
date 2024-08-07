import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './output.css';
import axios from 'axios';

//axios.defaults.baseURL = 'https://weather-app-e6s2.onrender.com';
//axios.defaults.baseURL = 'https://k56s7znb-3000.usw3.devtunnels.ms/';
axios.defaults.baseURL = '/api';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
