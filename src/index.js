import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

//ReactDOM se importa para crear root, que será el que renderice la página
//Se crea la App
root.render(
    <App />
);

reportWebVitals();
