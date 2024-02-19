import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Hotjar from '@hotjar/browser';

const siteId = 3871383;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
);