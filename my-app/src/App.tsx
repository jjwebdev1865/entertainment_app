import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FFContextProvider } from '@harnessio/ff-react-client-sdk';

const App = () => {
// This harness account is tied to personal email, not work
  const reactTarget = { name: 'ReactClientSDK', identifier: 'reactclientsdk' }
  const sdkApiKey = 'ee880504-341c-493e-bf51-f688cbb3b7f8'

  return (
    <FFContextProvider apiKey={sdkApiKey} target={reactTarget}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </FFContextProvider>
    
  );
};

export default App;