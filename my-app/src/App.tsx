import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FFContextProvider } from '@harnessio/ff-react-client-sdk';

const App = () => {
  const reactTarget = { name: 'ReactClientSDK', identifier: 'reactclientsdk' };
  const sdkApiKey = 'a1d432f6-d208-4fb4-a48d-0b640b691234';

  return (
    <FFContextProvider apiKey={sdkApiKey} target={reactTarget}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </FFContextProvider>
    
  );
};

export default App;