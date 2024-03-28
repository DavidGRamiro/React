import { CounterApp } from './CounterApp';

import React from 'react';
import ReactDOM  from 'react-dom/client';

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={1234}></CounterApp>
    </React.StrictMode>
)