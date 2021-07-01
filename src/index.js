import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureAmplify } from './aws/services';

configureAmplify();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
