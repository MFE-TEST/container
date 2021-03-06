import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../Router';
import Header from '../../Components/Header';

function App({ basename }) {
  return <BrowserRouter basename={basename}>
    <h1>
      My Container App
    </h1>
    <Header />
    <Router />
  </BrowserRouter>;
}

export default App;
