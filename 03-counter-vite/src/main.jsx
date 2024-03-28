
import React from 'react';
import ReactDOM  from 'react-dom/client';
import { HelloWorld } from './HelloWorld';
import { FirstApp } from './FirstApp';

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp></FirstApp>
    </React.StrictMode>
)