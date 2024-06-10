import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
