import React from 'react';
import ReactDOM from 'react-dom';
import App from './Boot/App';

const element = document.getElementById('root');

ReactDOM.render(<App basename={BASE_NAME} />, element);
