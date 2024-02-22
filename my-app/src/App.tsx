import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
