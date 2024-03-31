import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp' 
import React from 'react';
import ReactDOM  from 'react-dom/client';

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp></FirstApp> */}
        <CounterApp value={10}></CounterApp>
    </React.StrictMode>
)