import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CurrencyProvider } from './context/currencyContext';
import { ModalProvider } from './context/modalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrencyProvider>
      <ModalProvider>
    <App />
      </ModalProvider>
    </CurrencyProvider>
  </React.StrictMode>
);
