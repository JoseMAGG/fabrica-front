import React from 'react';
import ReactDOM from 'react-dom/client';


import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { AppRouter } from './router/AppRouter';
import { DateProvider } from './context/DateContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DateProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </DateProvider>
  </React.StrictMode>,
)
