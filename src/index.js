import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/normalize.css'
import './assets/index.css'
import App from './App';
import {HashRouter, BrowserRouter} from "react-router-dom";

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.Fragment>
);
